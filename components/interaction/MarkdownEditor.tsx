import React, { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

interface MarkdownEditorProps {
  className?: string
}

const MarkdownEditor: React.FC<MarkdownEditorProps> = ({ className }) => {
  const [markdown, setMarkdown] = useState<string>(`# 本月的放松时刻

- 周末和朋友一起去公园野餐，阳光洒在身上，感觉很温暖
- 晚上独自在家看了一部喜欢的电影，喝着热可可，很惬意
- 读了一本好书，沉浸在故事里，忘记了时间

# 自我对话

这个月我学会了更好地照顾自己，不再给自己太大压力。我意识到，慢下来也是一种成长。

> 真正的平静，不是避开车马喧嚣，而是在心中修篱种菊。
`)
  const [isPreview, setIsPreview] = useState<boolean>(false)

  const handleMarkdownChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMarkdown(e.target.value)
  }

  return (
    <div className={`bg-white rounded-2xl p-6 card-shadow hover:shadow-lg transition-all duration-300 ${className}`}>
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-medium text-text">自由书写区</h3>
        <div className="flex gap-2">
          <button
            onClick={() => setIsPreview(false)}
            className={`px-3 py-1 text-sm rounded-full transition-all duration-200 ${
              !isPreview
                ? 'bg-primary text-white shadow-sm'
                : 'bg-accent text-text hover:bg-accent/80'
            }`}
          >
            编辑
          </button>
          <button
            onClick={() => setIsPreview(true)}
            className={`px-3 py-1 text-sm rounded-full transition-all duration-200 ${
              isPreview
                ? 'bg-primary text-white shadow-sm'
                : 'bg-accent text-text hover:bg-accent/80'
            }`}
          >
            预览
          </button>
        </div>
      </div>

      {isPreview ? (
        <div className="prose prose-sm prose-primary max-w-none text-text">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              h1: ({ node, ...props }) => (
                <h1 className="text-xl font-semibold text-text mb-4" {...props} />
              ),
              h2: ({ node, ...props }) => (
                <h2 className="text-lg font-medium text-text mb-3" {...props} />
              ),
              blockquote: ({ node, ...props }) => (
                <blockquote className="border-l-4 border-primary pl-4 italic text-text/80 my-4" {...props} />
              ),
              a: ({ node, ...props }) => (
                <a className="text-primary hover:underline" {...props} />
              ),
            }}
          >
            {markdown}
          </ReactMarkdown>
        </div>
      ) : (
        <textarea
          value={markdown}
          onChange={handleMarkdownChange}
          placeholder="开始书写你的本月故事...\n\n支持 Markdown 语法，例如：\n# 标题\n- 列表项\n> 引用\n**粗体** 或 *斜体*"
          className="w-full h-80 px-4 py-3 border border-accent rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm font-mono bg-accent/10 resize-y"
        ></textarea>
      )}

      <div className="mt-4 text-xs text-text/50">
        支持 Markdown 语法，使用 # 标题、- 列表、> 引用等
      </div>
    </div>
  )
}

export default MarkdownEditor