import React from 'react';

export default function Filters({ sortBy, setSortBy, category, setCategory, onSearch }) {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 grid grid-cols-1 md:grid-cols-3 gap-3">
      <input
        type="text"
        placeholder="Cari berita fintech..."
        onKeyDown={(e) => {
          if (e.key === 'Enter') onSearch(e.target.value);
        }}
        className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-400/50"
      />
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-400/50"
      >
        <option value="general">Semua Kategori</option>
        <option value="business">Business</option>
        <option value="technology">Technology</option>
        <option value="science">Science</option>
        <option value="health">Health</option>
        <option value="entertainment">Entertainment</option>
        <option value="sports">Sports</option>
      </select>
      <select
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
        className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-400/50"
      >
        <option value="relevancy">Relevansi</option>
        <option value="popularity">Popularitas</option>
        <option value="publishedAt">Terbaru</option>
      </select>
    </div>
  );
}
