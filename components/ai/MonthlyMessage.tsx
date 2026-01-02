import React from 'react'
import { Sparkles } from 'lucide-react'

interface MonthlyMessageProps {
  message: string
}

const MonthlyMessage: React.FC<MonthlyMessageProps> = ({ message }) => {
  return (
    <div className="bg-gradient-to-r from-primary/5 to-secondary rounded-2xl p-8 card-shadow hover:shadow-lg transition-all duration-300 border border-primary/10">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
          <Sparkles size={20} />
        </div>
        <h3 className="text-xl font-medium text-text">AI月度寄语</h3>
      </div>
      <div className="text-text/90 leading-relaxed">
        <p className="whitespace-pre-line">{message}</p>
      </div>
      <div className="mt-6 flex justify-end">
        <div className="text-sm text-primary/70 font-medium">
          —— 由DeepSeek AI生成
        </div>
      </div>
    </div>
  )
}

export default MonthlyMessage