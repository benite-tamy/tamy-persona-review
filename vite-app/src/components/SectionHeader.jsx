export default function SectionHeader({ label, title, desc, labelColor = 'text-purple-600' }) {
  return (
    <div className="mb-6 md:mb-8">
      {label && <span className={`text-xs font-bold uppercase tracking-widest ${labelColor} mb-2 block`}>{label}</span>}
      <h2 className="text-2xl md:text-3xl font-black text-gray-900 leading-tight mb-2">{title}</h2>
      {desc && <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-2xl">{desc}</p>}
    </div>
  )
}
