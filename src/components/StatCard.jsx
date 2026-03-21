export default function StatCard({ value, label, color = 'text-purple-600', bg = 'bg-white' }) {
  return (
    <div className={`${bg} rounded-2xl border border-gray-100 shadow-sm p-4 md:p-5 text-center`}>
      <div className={`text-3xl md:text-4xl font-black ${color} leading-none mb-1`}>{value}</div>
      <div className="text-xs text-gray-500 font-medium leading-snug">{label}</div>
    </div>
  )
}
