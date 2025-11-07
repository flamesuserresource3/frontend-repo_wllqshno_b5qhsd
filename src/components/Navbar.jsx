import { Search, User } from 'lucide-react'

export default function Navbar({ query, onQueryChange, categories, category, onCategoryChange, onLoginClick }) {
  return (
    <header className="sticky top-0 z-20 bg-white/80 backdrop-blur border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center gap-4">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center justify-center w-9 h-9 rounded-md bg-gradient-to-tr from-blue-600 to-indigo-500 text-white font-bold">N</span>
          <span className="font-semibold text-gray-800 tracking-tight">NovaNews</span>
        </div>

        <div className="flex-1 max-w-xl">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              value={query}
              onChange={(e) => onQueryChange(e.target.value)}
              placeholder="Cari berita..."
              className="w-full pl-9 pr-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
            />
          </div>
        </div>

        <div>
          <select
            value={category}
            onChange={(e) => onCategoryChange(e.target.value)}
            className="px-3 py-2 rounded-md border border-gray-300 bg-white text-sm"
          >
            <option value="">Semua Kategori</option>
            {categories.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>

        <button
          onClick={onLoginClick}
          className="inline-flex items-center gap-2 px-3 py-2 rounded-md border border-gray-300 hover:border-gray-400 text-sm"
        >
          <User className="h-4 w-4" /> Masuk
        </button>
      </div>
    </header>
  )
}
