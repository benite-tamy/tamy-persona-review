import { useState } from 'react'

export default function ExportButtons({ onExportPDF, onExportDocx }) {
  const [loadingDocx, setLoadingDocx] = useState(false)

  async function handleDocx() {
    setLoadingDocx(true)
    try {
      await onExportDocx()
    } finally {
      setLoadingDocx(false)
    }
  }

  return (
    <div className="flex gap-2 flex-wrap">
      <button
        onClick={onExportPDF}
        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-gray-200 bg-white text-xs font-semibold text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-colors shadow-sm"
        title="Exportar como PDF via impressão do navegador"
      >
        <svg className="w-3.5 h-3.5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
        PDF
      </button>

      <button
        onClick={handleDocx}
        disabled={loadingDocx}
        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-gray-200 bg-white text-xs font-semibold text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-colors shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
        title="Exportar como .docx — abre no Google Docs ou Word"
      >
        <svg className="w-3.5 h-3.5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
        {loadingDocx ? 'Gerando...' : 'Google Doc'}
      </button>
    </div>
  )
}
