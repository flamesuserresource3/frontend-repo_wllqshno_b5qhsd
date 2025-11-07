import React from 'react';

export default function ArticleCard({ article, onOpen }) {
  const { urlToImage, title, description, source, publishedAt } = article;
  return (
    <button
      onClick={onOpen}
      className="group text-left w-full rounded-xl border border-slate-200 bg-white overflow-hidden hover:shadow-lg transition-shadow"
    >
      <div className="aspect-video w-full overflow-hidden bg-slate-100">
        {urlToImage ? (
          <img
            src={urlToImage}
            alt={title}
            className="h-full w-full object-cover group-hover:scale-105 transition-transform"
          />
        ) : (
          <div className="h-full w-full grid place-items-center text-slate-400 text-sm">
            No Image
          </div>
        )}
      </div>
      <div className="p-4">
        <div className="text-xs text-slate-500">{source?.name} • {new Date(publishedAt).toLocaleDateString()}</div>
        <h3 className="mt-1 font-semibold text-slate-900 line-clamp-2">{title}</h3>
        {description && (
          <p className="mt-2 text-sm text-slate-700 line-clamp-3">{description}</p>
        )}
      </div>
    </button>
  );
}
