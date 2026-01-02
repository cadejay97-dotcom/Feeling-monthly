import React, { useState } from 'react'
import MusicPlayer from '@/components/ritual-wall/MusicPlayer'
import VideoPlayer from '@/components/ritual-wall/VideoPlayer'
import BookCard from '@/components/ritual-wall/BookCard'
import ContactList from '@/components/interaction/ContactList'
import MarkdownEditor from '@/components/interaction/MarkdownEditor'
import MonthlyMessage from '@/components/ai/MonthlyMessage'

export default function Home() {
  const [monthlyMessage, setMonthlyMessage] = useState<string | null>(null)
  const [isGenerating, setIsGenerating] = useState<boolean>(false)

  const handleGenerateMessage = async () => {
    setIsGenerating(true)
    try {
      // 这里将在后续连接DeepSeek API
      // 暂时使用模拟数据
      setTimeout(() => {
        setMonthlyMessage(
          "亲爱的朋友，这个月你在阅读中找到了宁静，在音乐里感受到了温暖。你的每一次思考都是成长的印记，每一次联系都是爱的传递。愿下个月的你，继续保持这份热爱，带着温柔与勇气，迎接每一个新的日子。"
        )
        setIsGenerating(false)
      }, 1500)
    } catch (error) {
      console.error('生成月度寄语失败:', error)
      setIsGenerating(false)
    }
  }

  return (
    <div className="min-h-screen bg-secondary">
      {/* 顶部导航 */}
      <header className="sticky top-0 z-50 bg-white bg-opacity-90 bg-blur border-b border-accent/50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-semibold text-text">月度回响 - Monthly Echo</h1>
          <button
            onClick={handleGenerateMessage}
            disabled={isGenerating}
            className="px-6 py-2 bg-primary text-white rounded-full hover:bg-primary/90 transition-all duration-300 shadow-sm hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isGenerating ? '生成中...' : '生成月度寄语'}
          </button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* 仪式感展示墙 */}
        <section className="mb-12">
          <h2 className="text-xl font-medium mb-6 text-text">仪式感展示墙</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* 月度歌单 */}
            <MusicPlayer />
            
            {/* 月度影像 */}
            <VideoPlayer />
            
            {/* 书香时刻 */}
            <BookCard className="md:col-span-2 lg:col-span-1" />
          </div>
        </section>

        {/* 互动与复盘 */}
        <section className="mb-12">
          <h2 className="text-xl font-medium mb-6 text-text">互动与复盘</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* 联络清单 */}
            <ContactList />
            
            {/* 自由书写区 */}
            <MarkdownEditor className="md:col-span-2" />
          </div>
        </section>

        {/* 月度寄语 */}
        {monthlyMessage && (
          <section className="mb-12">
            <h2 className="text-xl font-medium mb-4 text-text">月度寄语</h2>
            <MonthlyMessage message={monthlyMessage} />
          </section>
        )}
      </main>

      {/* 页脚 */}
      <footer className="border-t border-accent/50 py-6">
        <div className="container mx-auto px-4 text-center text-text/60 text-sm">
          <p>© 2026 月度回响 - Monthly Echo | 让每个月都充满仪式感</p>
        </div>
      </footer>
    </div>
  )
}