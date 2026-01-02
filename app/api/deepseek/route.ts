import { NextRequest, NextResponse } from 'next/server'
import { generateMonthlyMessage } from '@/lib/deepseek'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { notes, keywords } = body

    if (!notes || !keywords || !Array.isArray(keywords)) {
      return NextResponse.json(
        { error: 'Invalid request body. Notes and keywords are required.' },
        { status: 400 }
      )
    }

    const message = await generateMonthlyMessage(notes, keywords)
    return NextResponse.json({ message })
  } catch (error) {
    console.error('Error generating monthly message:', error)
    return NextResponse.json(
      { error: 'Failed to generate monthly message' },
      { status: 500 }
    )
  }
}