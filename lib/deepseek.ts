export interface DeepSeekMessage {
  role: 'system' | 'user' | 'assistant'
  content: string
}

export async function generateMonthlyMessage(notes: string, keywords: string[]): Promise<string> {
  const apiKey = process.env.DEEPSEEK_API_KEY
  if (!apiKey) {
    throw new Error('DeepSeek API key is not configured')
  }

  const messages: DeepSeekMessage[] = [
    {
      role: 'system',
      content: '你是一位温暖、富有同理心的AI助手，擅长用诗意的语言为用户生成月度寄语。请根据用户提供的读书笔记和当月关键词，生成一段温暖的总结、评价或对下个月的祝福。语言要简洁、优美，充满温度和鼓励。'
    },
    {
      role: 'user',
      content: `请根据以下信息生成一段月度寄语：\n\n读书笔记：${notes}\n\n当月关键词：${keywords.join(', ')}\n\n生成要求：\n1. 温暖、有温度\n2. 简洁、优美\n3. 充满鼓励和正面能量\n4. 不超过200字`
    }
  ]

  try {
    const response = await fetch('https://api.deepseek.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: 'deepseek-chat',
        messages: messages,
        temperature: 0.7,
        max_tokens: 200
      })
    })

    if (!response.ok) {
      throw new Error(`DeepSeek API error: ${response.status} ${response.statusText}`)
    }

    const data = await response.json()
    return data.choices[0].message.content
  } catch (error) {
    console.error('DeepSeek API error:', error)
    throw error
  }
}