export default function Filters({ selected, onChange }) {
  const options = [
    { key: 'relevancy', label: 'Paling Relevan' },
    { key: 'popularity', label: 'Paling Populer' },
    { key: 'publishedAt', label: 'Terbaru' },
  ]

  return (
    <div className="flex flex-wrap items-center gap-2 py-3">
      {options.map((o) => (
        <button
          key={o.key}
          onClick={() => onChange(o.key)}
          className={`px-3 py-1.5 rounded-full text-sm border ${
            selected === o.key ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-gray-700 border-gray-300 hover:border-gray-400'
          }`}
        >
          {o.label}
        </button>
      ))}
    </div>
  )
}
