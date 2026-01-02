import React, { useState } from 'react'
import Image from 'next/image'

interface Book {
  title: string
  author: string
  coverImage: string
  description: string
  notes: string
}

interface BookCardProps {
  className?: string
}

const BookCard: React.FC<BookCardProps> = ({ className }) => {
  const [book, setBook] = useState<Book>({
    title: '小王子',
    author: '安托万·德·圣-埃克苏佩里',
    coverImage: 'https://img1.doubanio.com/view/subject/l/public/s1073767.jpg',
    description: '这是一本关于爱与责任的寓言故事，通过小王子的星际之旅，揭示了成人世界的荒谬与儿童世界的纯真。',
    notes: '小王子说：“真正重要的东西，用眼睛是看不见的，只有用心才能看见。” 这句话让我深思，我们常常忙于追求物质的东西，却忽略了内心真正的需求。'
  })
  const [isEditing, setIsEditing] = useState<boolean>(false)
  const [editForm, setEditForm] = useState<Book>(book)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setEditForm(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setBook(editForm)
    setIsEditing(false)
  }

  return (
    <div className={`bg-white rounded-2xl p-6 card-shadow hover:shadow-lg transition-all duration-300 ${className}`}>
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-medium text-text">书香时刻</h3>
        <button
          onClick={() => {
            setEditForm(book)
            setIsEditing(!isEditing)
          }}
          className="text-sm text-primary hover:text-primary/80 transition-colors"
        >
          {isEditing ? '保存' : '编辑'}
        </button>
      </div>

      {isEditing ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-text/80 mb-1">书名</label>
            <input
              type="text"
              name="title"
              value={editForm.title}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-accent rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-text/80 mb-1">作者</label>
            <input
              type="text"
              name="author"
              value={editForm.author}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-accent rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-text/80 mb-1">封面图片链接</label>
            <input
              type="text"
              name="coverImage"
              value={editForm.coverImage}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-accent rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-text/80 mb-1">书籍简介</label>
            <textarea
              name="description"
              value={editForm.description}
              onChange={handleInputChange}
              rows={2}
              className="w-full px-4 py-2 border border-accent rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
            ></textarea>
          </div>
          <div>
            <label className="block text-sm font-medium text-text/80 mb-1">我的读书笔记/感悟</label>
            <textarea
              name="notes"
              value={editForm.notes}
              onChange={handleInputChange}
              rows={3}
              className="w-full px-4 py-2 border border-accent rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
            ></textarea>
          </div>
          <button type="submit" className="hidden" />
        </form>
      ) : (
        <div className="space-y-4">
          <div className="flex gap-4">
            <div className="w-32 h-48 overflow-hidden rounded-lg bg-accent/30 flex-shrink-0">
              <Image
                src={book.coverImage}
                alt={book.title}
                width={128}
                height={192}
                className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="flex-1">
              <h4 className="text-lg font-semibold text-text mb-1">{book.title}</h4>
              <p className="text-sm text-text/70 mb-2">作者：{book.author}</p>
              <p className="text-sm text-text/80 line-clamp-3">{book.description}</p>
            </div>
          </div>
          <div>
            <h5 className="text-sm font-medium text-text mb-2">我的读书笔记/感悟</h5>
            <div className="bg-accent/30 p-4 rounded-lg text-sm text-text/80">
              {book.notes}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default BookCard