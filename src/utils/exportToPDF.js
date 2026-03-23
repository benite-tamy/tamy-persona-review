/**
 * PDF export via browser print.
 * Builds a self-contained HTML string, creates a Blob URL, opens in new tab.
 * User clicks Print → Save as PDF — zero dependencies.
 * Data comes from static source code arrays (not user input), so no XSS risk.
 */

function openPrintBlob(html) {
  const blob = new Blob([html], { type: 'text/html;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  const win = window.open(url, '_blank')
  if (win) {
    win.addEventListener('load', () => {
      win.print()
      URL.revokeObjectURL(url)
    })
  }
}

const PRINT_STYLES = `
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body { font-family: Georgia, serif; font-size: 11pt; color: #1a1a1a; line-height: 1.6; padding: 0 20pt; }
  @page { margin: 2cm 2.5cm; }
  h1.title { font-size: 20pt; font-weight: bold; text-align: center; margin-bottom: 4pt; color: #111; padding-top: 20pt; }
  .subtitle { text-align: center; color: #666; font-style: italic; margin-bottom: 30pt; font-size: 10pt; }
  .block { page-break-before: always; padding-top: 12pt; }
  .block:first-of-type { page-break-before: avoid; }
  .q-num { font-size: 9pt; font-weight: bold; color: #1d4ed8; text-transform: uppercase; letter-spacing: 0.05em; display: block; margin-bottom: 3pt; }
  h2 { font-size: 14pt; font-weight: bold; color: #111; margin-bottom: 4pt; }
  .q-desc { font-size: 10pt; color: #555; font-style: italic; margin-bottom: 10pt; }
  .summary { background: #f9fafb; border-left: 4px solid #9ca3af; padding: 10pt 12pt; margin: 12pt 0; }
  .summary-label { font-size: 9pt; text-transform: uppercase; letter-spacing: 0.05em; color: #374151; font-weight: bold; display: block; margin-bottom: 4pt; }
  .sum-text { font-size: 10pt; color: #444; }
  .sec { margin: 12pt 0; }
  h3 { font-size: 10pt; font-weight: bold; text-transform: uppercase; letter-spacing: 0.05em; color: #374151; border-bottom: 1px solid #e5e7eb; padding-bottom: 3pt; margin-bottom: 8pt; }
  ul { padding-left: 16pt; margin-bottom: 8pt; }
  li { font-size: 10pt; margin-bottom: 4pt; color: #374151; }
  table { width: 100%; border-collapse: collapse; font-size: 10pt; margin-top: 8pt; }
  th { background: #f3f4f6; font-weight: bold; text-align: left; padding: 6pt 8pt; border: 1px solid #e5e7eb; }
  td { padding: 5pt 8pt; border: 1px solid #e5e7eb; vertical-align: top; }
  tr:nth-child(even) td { background: #f9fafb; }
  .persona-h2 { font-size: 15pt; font-weight: bold; border-bottom: 2px solid #1d4ed8; padding-bottom: 6pt; margin-bottom: 14pt; }
  @media print { .block { page-break-before: always; } .block:first-of-type { page-break-before: avoid; } }
`

function escText(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

function stripArray(items) {
  if (!items) return []
  return items.map(i => (Array.isArray(i) ? i[0] : i))
}

function listHtml(items) {
  return '<ul>' + stripArray(items).map(i => `<li>${escText(i)}</li>`).join('') + '</ul>'
}

export function exportPerguntasToPDF(perguntas) {
  const body = perguntas.map(p => {
    const sections = p.sections
      ? p.sections.map(s => `<div class="sec"><h3>${escText(s.label)}</h3>${listHtml(s.items)}</div>`).join('')
      : p.items ? listHtml(p.items) : ''

    const jornada = p.jornada
      ? `<div class="sec"><h3>Jornada de Compra</h3><table>
          <tr><th>Etapa</th><th>Descrição</th></tr>
          ${p.jornada.map((j, i) => `<tr><td><strong>${i + 1}. ${escText(j.step)}</strong></td><td>${escText(j.desc)}</td></tr>`).join('')}
        </table></div>`
      : ''

    return `<div class="block">
      <span class="q-num">${escText(p.num)}</span>
      <h2>${escText(p.title)}</h2>
      ${p.desc ? `<p class="q-desc">${escText(p.desc)}</p>` : ''}
      <div class="summary">
        <span class="summary-label">Síntese consolidada</span>
        <p class="sum-text">${escText(p.summary)}</p>
      </div>
      ${sections}${jornada}
    </div>`
  }).join('')

  openPrintBlob(`<!DOCTYPE html><html lang="pt-BR"><head>
    <meta charset="UTF-8">
    <title>12 Perguntas da Persona — Tamy Food</title>
    <style>${PRINT_STYLES}</style>
  </head><body>
    <h1 class="title">12 Perguntas da Persona — Tamy Food</h1>
    <p class="subtitle">Pedro Smolka (CEO) + Matheus Benites (CTO) · 2026</p>
    ${body}
  </body></html>`)
}

export function exportJobDescriptionToPDF(personas) {
  const body = personas.map(persona => {
    const secs = persona.sections.map(sec => {
      const content = Array.isArray(sec.items)
        ? '<ul>' + sec.items.map(item => {
            const text = typeof item === 'object'
              ? `<strong>${escText(item.label)}:</strong> ${escText(item.desc || item.text || '')}`
              : escText(item)
            return `<li>${text}</li>`
          }).join('') + '</ul>'
        : sec.text ? `<p>${escText(sec.text)}</p>` : ''
      return `<div class="sec"><h3>${escText(sec.label)}</h3>${content}</div>`
    }).join('')

    return `<div class="block">
      <h2 class="persona-h2">${escText(persona.name)}</h2>
      ${secs}
    </div>`
  }).join('')

  openPrintBlob(`<!DOCTYPE html><html lang="pt-BR"><head>
    <meta charset="UTF-8">
    <title>Job-to-be-Done — Personas Tamy Food</title>
    <style>${PRINT_STYLES}</style>
  </head><body>
    <h1 class="title">Job-to-be-Done — Personas Tamy Food</h1>
    ${body}
  </body></html>`)
}
