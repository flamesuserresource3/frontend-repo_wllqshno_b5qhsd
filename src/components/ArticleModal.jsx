import React from 'react';

export default function ArticleModal({ open, onClose, article, onComment }) {
  if (!open || !article) return null;
  const { title, author, content, url, urlToImage, source, publishedAt } = article;

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4 bg-black/40">
      <div className="w-full max-w-3xl rounded-xl bg-white shadow-2xl overflow-hidden">
        <div className="aspect-video bg-slate-100">
          {urlToImage && (
            <img src={urlToImage} alt={title} className="w-full h-full object-cover" />
          )}
        </div>
        <div className="p-6">
          <div className="text-xs text-slate-500">{source?.name} • {new Date(publishedAt).toLocaleString()}</div>
          <h2 className="mt-1 text-2xl font-bold text-slate-900">{title}</h2>
          <p className="mt-2 text-sm text-slate-600">{author ? `By ${author}` : null}</p>
          {content && <p className="mt-4 text-slate-700 whitespace-pre-line">{content}</p>}
          <div className="mt-4 flex items-center gap-3">
            <a
              href={url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-md bg-slate-900 text-white px-4 py-2 text-sm font-medium hover:bg-slate-800"
            >
              Baca Sumber
            </a>
            <button
              onClick={onComment}
              className="inline-flex items-center rounded-md border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
            >
              Tulis Komentar (butuh login)
            </button>
            <div className="flex-1" />
            <button
              onClick={onClose}
              className="inline-flex items-center rounded-md bg-slate-100 px-3 py-2 text-sm text-slate-700 hover:bg-slate-200"
            >
              Tutup
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
