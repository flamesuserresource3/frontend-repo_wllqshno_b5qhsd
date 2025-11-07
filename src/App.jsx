import React, { useEffect, useMemo, useState } from 'react';
import Navbar from './components/Navbar';
import HeroSpline from './components/HeroSpline';
import Filters from './components/Filters';
import ArticleCard from './components/ArticleCard';
import ArticleModal from './components/ArticleModal';

const NEWS_ENDPOINTS = {
  everything: 'https://newsapi.org/v2/everything',
  topHeadlines: 'https://newsapi.org/v2/top-headlines',
};

export default function App() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [query, setQuery] = useState('fintech');
  const [category, setCategory] = useState('general');
  const [sortBy, setSortBy] = useState('publishedAt');
  const [selected, setSelected] = useState(null);

  const apiKey = import.meta.env.VITE_NEWSAPI_KEY;

  const headers = useMemo(() => ({ 'X-Api-Key': apiKey || '' }), [apiKey]);

  const fetchNews = async () => {
    if (!apiKey) {
      setError('Tambahkan VITE_NEWSAPI_KEY pada environment untuk memuat berita.');
      return;
    }
    setLoading(true);
    setError('');
    try {
      let url = '';
      const pageSize = 24;
      if (query && query.trim().length > 0) {
        const q = encodeURIComponent(query.trim());
        const s = sortBy === 'publishedAt' ? 'publishedAt' : sortBy;
        url = `${NEWS_ENDPOINTS.everything}?q=${q}&sortBy=${s}&pageSize=${pageSize}`;
      } else {
        const cat = encodeURIComponent(category);
        url = `${NEWS_ENDPOINTS.topHeadlines}?country=us&category=${cat}&pageSize=${pageSize}`;
      }
      const res = await fetch(url, { headers });
      if (!res.ok) throw new Error('Gagal memuat berita');
      const data = await res.json();
      setArticles(Array.isArray(data.articles) ? data.articles : []);
    } catch (e) {
      setError(e.message || 'Terjadi kesalahan saat memuat berita');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category, sortBy]);

  const handleSearch = (value) => {
    setQuery(value);
    setTimeout(fetchNews, 0);
  };

  const handleLoginClick = () => {
    alert('Autentikasi akan diintegrasikan via Laravel.');
  };

  const handleComment = () => {
    alert('Komentar memerlukan login. Backend Laravel akan menangani komentar.');
  };

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar onLoginClick={handleLoginClick} />
      <HeroSpline />
      <Filters
        sortBy={sortBy}
        setSortBy={setSortBy}
        category={category}
        setCategory={setCategory}
        onSearch={handleSearch}
      />

      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
        {error && (
          <div className="mb-4 rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
            {error}
          </div>
        )}
        {loading ? (
          <div className="py-20 grid place-items-center text-slate-500">Memuat berita…</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((a, idx) => (
              <ArticleCard key={idx} article={a} onOpen={() => setSelected(a)} />
            ))}
          </div>
        )}
      </main>

      <ArticleModal
        open={!!selected}
        onClose={() => setSelected(null)}
        article={selected}
        onComment={handleComment}
      />

      <footer className="border-t border-slate-200 py-6 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} FlashNews — Fintech & Business Headlines
      </footer>
    </div>
  );
}
