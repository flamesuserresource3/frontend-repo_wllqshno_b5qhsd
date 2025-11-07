import { useEffect, useMemo, useState } from 'react'
import Navbar from './components/Navbar'
import Filters from './components/Filters'
import ArticleCard from './components/ArticleCard'
import ArticleModal from './components/ArticleModal'

const CATEGORIES = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology']

function App() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('')
  const [sortBy, setSortBy] = useState('publishedAt')
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState(null)

  const apiKey = import.meta.env.VITE_NEWSAPI_KEY

  const endpoint = useMemo(() => {
    const base = 'https://newsapi.org/v2'
    const params = new URLSearchParams()

    if (query) {
      // Everything search
      params.set('q', query)
      params.set('sortBy', sortBy)
      params.set('pageSize', '24')
      return `${base}/everything?${params.toString()}`
    } else {
      // Top headlines with optional category
      if (category) params.set('category', category)
      params.set('country', 'us')
      params.set('pageSize', '24')
      return `${base}/top-headlines?${params.toString()}`
    }
  }, [query, category, sortBy])

  useEffect(() => {
    async function fetchNews() {
      setLoading(true)
      setError('')
      try {
        const res = await fetch(endpoint, { headers: { 'X-Api-Key': apiKey || '' } })
        if (!res.ok) throw new Error('Gagal memuat berita')
        const data = await res.json()
        setArticles(Array.isArray(data.articles) ? data.articles : [])
      } catch (e) {
        setError(e.message || 'Terjadi kesalahan')
      } finally {
        setLoading(false)
      }
    }
    fetchNews()
  }, [endpoint, apiKey])

  function openArticle(a) { setActive(a); setOpen(true) }
  function closeArticle() { setOpen(false); setActive(null) }

  function onComment() {
    alert('Untuk berkomentar, Anda harus login. (Autentikasi akan ditambahkan pada versi backend)')
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar
        query={query}
        onQueryChange={setQuery}
        categories={CATEGORIES}
        category={category}
        onCategoryChange={setCategory}
        onLoginClick={() => alert('Halaman login akan tersedia setelah backend siap')}
      />

      <main className="max-w-6xl mx-auto px-4">
        <Filters selected={sortBy} onChange={setSortBy} />

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md">{error}</div>
        )}

        {loading ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="h-64 bg-white rounded-lg border border-gray-200 animate-pulse" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-6">
            {articles.map((a, idx) => (
              <ArticleCard key={idx} article={a} onOpen={openArticle} />
            ))}
          </div>
        )}
      </main>

      <ArticleModal open={open} article={active} onClose={closeArticle} onComment={onComment} />

      <footer className="py-10 text-center text-sm text-gray-500">© {new Date().getFullYear()} NovaNews • Sumber data: NewsAPI.org</footer>
    </div>
  )
}

export default App
