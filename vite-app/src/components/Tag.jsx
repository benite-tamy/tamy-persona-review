const COLORS = {
  post:   'bg-blue-100 text-blue-700',
  video:  'bg-red-100 text-red-700',
  infog:  'bg-amber-100 text-amber-700',
  calc:   'bg-green-100 text-green-700',
  demo:   'bg-purple-100 text-purple-700',
  artigo: 'bg-gray-100 text-gray-700',
  tag:    'bg-indigo-100 text-indigo-700',
}
export default function Tag({ type = 'tag', children }) {
  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold ml-1 ${COLORS[type] || COLORS.tag}`}>
      {children}
    </span>
  )
}
