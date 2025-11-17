import { useState } from 'react'
import { GoogleGenerativeAI } from '@google/generative-ai'
import './App.css'

interface Message {
  role: 'user' | 'assistant'
  content: string
}

const API_KEY = ''
const genAI = new GoogleGenerativeAI(API_KEY)

function App() {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: 'Hello! How can I help you today?' }
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSend = async () => {
    if (!input.trim() || isLoading) return

    const userMessage: Message = { role: 'user', content: input.trim() }
    setMessages(prev => [...prev, userMessage])
    setInput('')
    setIsLoading(true)

    try {
      const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' })
      const chat = model.startChat({ history: [] })
      const result = await chat.sendMessage(userMessage.content)
      const text = result.response.text()

      const assistantMessage: Message = {
        role: 'assistant',
        content: text
      }

      setMessages(prev => [...prev, assistantMessage])
    } catch {
      setMessages(prev => [...prev, { role: 'assistant', content: 'Sorry, there was an error.' }])
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <div className="chatbot-container">
      <div className="chatbot-header">
        <h1>AI Chatbot</h1>
        <p>Powered by Google Gemini</p>
      </div>

      <div className="chatbot-messages">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`message ${message.role === 'user' ? 'message-user' : 'message-assistant'}`}
          >
            <div className="message-content">
              {message.content}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="message message-assistant">
            <div className="message-content">
              <div className="typing-indicator">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="chatbot-input-container">
        <textarea
          className="chatbot-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Type your message here..."
          rows={1}
          disabled={isLoading}
        />
        <button
          className="chatbot-send-button"
          onClick={handleSend}
          disabled={isLoading || !input.trim()}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="22" y1="2" x2="11" y2="13"></line>
            <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
          </svg>
        </button>
      </div>
    </div>
  )
}

export default App
