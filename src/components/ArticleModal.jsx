import { useEffect } from 'react'
import { X } from 'lucide-react'

export default function ArticleModal({ open, article, onClose, onComment }) {
  useEffect(() => {
    function onEsc(e) { if (e.key === 'Escape') onClose() }
    if (open) document.addEventListener('keydown', onEsc)
    return () => document.removeEventListener('keydown', onEsc)
  }, [open, onClose])

  if (!open || !article) return null

  return (
    <div className="fixed inset-0 z-30 bg-black/40 flex items-center justify-center p-4">
      <div className="bg-white max-w-3xl w-full rounded-lg overflow-hidden shadow-xl">
        <div className="flex items-center justify-between px-4 py-3 border-b">
          <h2 className="font-semibold text-gray-900 pr-4 line-clamp-1">{article.title}</h2>
          <button onClick={onClose} className="p-2 rounded-md hover:bg-gray-100">
            <X className="h-5 w-5" />
          </button>
        </div>
        {article.urlToImage && (
          <img src={article.urlToImage} alt={article.title} className="w-full h-72 object-cover" />
        )}
        <div className="p-4 space-y-3">
          <p className="text-gray-700 whitespace-pre-wrap">{article.content || article.description}</p>
          <div className="text-sm text-gray-500 flex items-center gap-2">
            <span>Sumber:</span>
            <a href={article.url} target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">Baca sumber</a>
          </div>
          <div className="pt-2">
            <button
              onClick={onComment}
              className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700"
            >
              Tulis Komentar (butuh login)
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
