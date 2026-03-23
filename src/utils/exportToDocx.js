import {
  Document,
  Packer,
  Paragraph,
  TextRun,
  HeadingLevel,
  AlignmentType,
  BorderStyle,
  ShadingType,
  TableRow,
  TableCell,
  Table,
  WidthType,
  PageBreak,
} from 'docx'

function saveBlob(blob, filename) {
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = filename
  a.click()
  URL.revokeObjectURL(url)
}

function stripTags(items) {
  if (!items) return []
  return items.map(item => {
    if (Array.isArray(item)) return item[0]
    return item
  })
}

export async function exportPerguntasToDocx(perguntas) {
  const children = []

  // Title
  children.push(
    new Paragraph({
      text: '12 Perguntas da Persona — Tamy Food',
      heading: HeadingLevel.TITLE,
      alignment: AlignmentType.CENTER,
      spacing: { after: 200 },
    }),
    new Paragraph({
      children: [
        new TextRun({
          text: 'Pedro Smolka (CEO) + Matheus Benites (CTO)',
          italics: true,
          color: '666666',
        }),
      ],
      alignment: AlignmentType.CENTER,
      spacing: { after: 600 },
    }),
  )

  for (const p of perguntas) {
    // Question header
    children.push(
      new Paragraph({
        children: [
          new TextRun({ text: `${p.num} — `, bold: true, color: '1d4ed8' }),
          new TextRun({ text: p.title, bold: true }),
        ],
        heading: HeadingLevel.HEADING_1,
        spacing: { before: 400, after: 100 },
      }),
    )

    if (p.desc) {
      children.push(
        new Paragraph({
          children: [new TextRun({ text: p.desc, italics: true, color: '555555' })],
          spacing: { after: 200 },
        }),
      )
    }

    // Summary
    children.push(
      new Paragraph({
        children: [new TextRun({ text: 'Síntese consolidada', bold: true })],
        spacing: { before: 100 },
      }),
      new Paragraph({
        children: [new TextRun({ text: p.summary, color: '444444' })],
        spacing: { after: 300 },
        border: {
          left: { style: BorderStyle.SINGLE, size: 6, color: 'cccccc' },
        },
        indent: { left: 360 },
      }),
    )

    // Sections or flat items
    if (p.sections) {
      for (const sec of p.sections) {
        children.push(
          new Paragraph({
            children: [new TextRun({ text: sec.label, bold: true, color: '374151' })],
            heading: HeadingLevel.HEADING_2,
            spacing: { before: 200, after: 100 },
          }),
        )
        for (const item of stripTags(sec.items)) {
          children.push(
            new Paragraph({
              children: [new TextRun({ text: item })],
              bullet: { level: 0 },
              spacing: { after: 80 },
            }),
          )
        }
      }
    } else if (p.items) {
      for (const item of stripTags(p.items)) {
        children.push(
          new Paragraph({
            children: [new TextRun({ text: item })],
            bullet: { level: 0 },
            spacing: { after: 80 },
          }),
        )
      }
    }

    // Jornada (Q11)
    if (p.jornada) {
      children.push(
        new Paragraph({
          children: [new TextRun({ text: 'Jornada de Compra', bold: true })],
          heading: HeadingLevel.HEADING_2,
          spacing: { before: 200, after: 100 },
        }),
      )
      const tableRows = p.jornada.map(({ step, desc }, i) =>
        new TableRow({
          children: [
            new TableCell({
              children: [new Paragraph({ children: [new TextRun({ text: `${i + 1}. ${step}`, bold: true })] })],
              width: { size: 20, type: WidthType.PERCENTAGE },
            }),
            new TableCell({
              children: [new Paragraph({ children: [new TextRun({ text: desc })] })],
              width: { size: 80, type: WidthType.PERCENTAGE },
            }),
          ],
        }),
      )
      children.push(
        new Table({
          rows: tableRows,
          width: { size: 100, type: WidthType.PERCENTAGE },
        }),
      )
    }

    // Page break between questions (except last)
    if (p !== perguntas[perguntas.length - 1]) {
      children.push(new Paragraph({ children: [new PageBreak()] }))
    }
  }

  const doc = new Document({
    creator: 'Tamy Food',
    title: '12 Perguntas da Persona — Tamy Food',
    description: 'Análise completa da persona de food service — Tamy Food 2026',
    sections: [{ children }],
  })

  const blob = await Packer.toBlob(doc)
  saveBlob(blob, 'tamy-12-perguntas-persona.docx')
}

export async function exportJobDescriptionToDocx(personas) {
  const children = []

  children.push(
    new Paragraph({
      text: 'Job-to-be-Done — Personas Tamy Food',
      heading: HeadingLevel.TITLE,
      alignment: AlignmentType.CENTER,
      spacing: { after: 600 },
    }),
  )

  for (const persona of personas) {
    children.push(
      new Paragraph({
        text: persona.name,
        heading: HeadingLevel.HEADING_1,
        spacing: { before: 400, after: 200 },
      }),
    )

    for (const section of persona.sections) {
      children.push(
        new Paragraph({
          children: [new TextRun({ text: section.label, bold: true })],
          heading: HeadingLevel.HEADING_2,
          spacing: { before: 200, after: 100 },
        }),
      )

      if (Array.isArray(section.items)) {
        for (const item of section.items) {
          const text = typeof item === 'object' ? `${item.label}: ${item.desc || item.text || ''}` : item
          children.push(
            new Paragraph({
              children: [new TextRun({ text })],
              bullet: { level: 0 },
              spacing: { after: 80 },
            }),
          )
        }
      } else if (section.text) {
        children.push(
          new Paragraph({
            children: [new TextRun({ text: section.text })],
            spacing: { after: 200 },
          }),
        )
      }
    }

    if (persona !== personas[personas.length - 1]) {
      children.push(new Paragraph({ children: [new PageBreak()] }))
    }
  }

  const doc = new Document({
    creator: 'Tamy Food',
    title: 'Job-to-be-Done — Personas Tamy Food',
    sections: [{ children }],
  })

  const blob = await Packer.toBlob(doc)
  saveBlob(blob, 'tamy-job-description-personas.docx')
}
