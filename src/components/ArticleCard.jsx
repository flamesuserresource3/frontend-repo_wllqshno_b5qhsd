import { MessageSquare } from 'lucide-react'

export default function ArticleCard({ article, onOpen }) {
  return (
    <article
      onClick={() => onOpen(article)}
      className="group cursor-pointer rounded-lg border border-gray-200 overflow-hidden bg-white hover:shadow-md transition-shadow"
    >
      {article.urlToImage && (
        <div className="aspect-video overflow-hidden">
          <img src={article.urlToImage} alt={article.title} className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform" />
        </div>
      )}
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 leading-snug line-clamp-2">{article.title}</h3>
        <p className="mt-2 text-sm text-gray-600 line-clamp-3">{article.description}</p>
        <div className="mt-3 flex items-center justify-between text-xs text-gray-500">
          <span>{new Date(article.publishedAt).toLocaleDateString('id-ID')}</span>
          <span className="inline-flex items-center gap-1">
            <MessageSquare className="h-4 w-4" /> Komentar
          </span>
        </div>
      </div>
    </article>
  )
}
