export default function Panel({ children, className = '', style = {} }) {
  return (
    <div className={`bg-white rounded-2xl border border-gray-100 shadow-sm p-4 md:p-5 ${className}`} style={style}>
      {children}
    </div>
  )
}
