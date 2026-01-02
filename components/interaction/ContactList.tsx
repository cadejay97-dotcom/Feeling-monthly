import React, { useState } from 'react'
import { Check } from 'lucide-react'

interface Contact {
  id: string
  name: string
  relationship: string
  isContacted: boolean
}

const ContactList: React.FC = () => {
  const [contacts, setContacts] = useState<Contact[]>([
    { id: '1', name: '妈妈', relationship: '家人', isContacted: false },
    { id: '2', name: '爸爸', relationship: '家人', isContacted: false },
    { id: '3', name: '小明', relationship: '老友', isContacted: false },
    { id: '4', name: '小红', relationship: '老友', isContacted: false },
    { id: '5', name: '小李', relationship: '同事', isContacted: false },
  ])
  const [newContactName, setNewContactName] = useState<string>('')
  const [newContactRelationship, setNewContactRelationship] = useState<string>('')

  const handleToggleContacted = (id: string) => {
    setContacts(prev =>
      prev.map(contact =>
        contact.id === id ? { ...contact, isContacted: !contact.isContacted } : contact
      )
    )
  }

  const handleAddContact = (e: React.FormEvent) => {
    e.preventDefault()
    if (newContactName.trim() && newContactRelationship.trim()) {
      setContacts(prev => [
        ...prev,
        {
          id: Date.now().toString(),
          name: newContactName.trim(),
          relationship: newContactRelationship.trim(),
          isContacted: false,
        },
      ])
      setNewContactName('')
      setNewContactRelationship('')
    }
  }

  const handleDeleteContact = (id: string) => {
    setContacts(prev => prev.filter(contact => contact.id !== id))
  }

  return (
    <div className="bg-white rounded-2xl p-6 card-shadow hover:shadow-lg transition-all duration-300">
      <h3 className="text-lg font-medium text-text mb-4">联络清单</h3>
      
      {/* 新增联系人表单 */}
      <form onSubmit={handleAddContact} className="mb-4 space-y-2">
        <div className="grid grid-cols-2 gap-2">
          <input
            type="text"
            placeholder="姓名"
            value={newContactName}
            onChange={(e) => setNewContactName(e.target.value)}
            className="px-3 py-2 border border-accent rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm"
          />
          <input
            type="text"
            placeholder="关系"
            value={newContactRelationship}
            onChange={(e) => setNewContactRelationship(e.target.value)}
            className="px-3 py-2 border border-accent rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm"
          />
        </div>
        <button
          type="submit"
          className="w-full px-3 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors text-sm"
        >
          添加联系人
        </button>
      </form>

      {/* 联系人列表 */}
      <div className="space-y-2 max-h-80 overflow-y-auto pr-2">
        {contacts.map(contact => (
          <div
            key={contact.id}
            className="flex items-center justify-between p-3 bg-accent/30 rounded-lg hover:bg-accent/50 transition-colors"
          >
            <div className="flex items-center gap-3">
              {/* 自定义Checkbox */}
              <div
                onClick={() => handleToggleContacted(contact.id)}
                className={`w-5 h-5 rounded-full border-2 cursor-pointer transition-all duration-200 ${
                  contact.isContacted
                    ? 'border-primary bg-primary text-white flex items-center justify-center'
                    : 'border-accent bg-white hover:border-primary/50'
                }`}
              >
                {contact.isContacted && <Check size={14} />}
              </div>
              <div>
                <div className="font-medium text-text text-sm">{contact.name}</div>
                <div className="text-xs text-text/60">{contact.relationship}</div>
              </div>
            </div>
            <button
              onClick={() => handleDeleteContact(contact.id)}
              className="text-text/50 hover:text-red-500 transition-colors text-xs"
            >
              删除
            </button>
          </div>
        ))}
      </div>

      {/* 统计信息 */}
      <div className="mt-4 pt-4 border-t border-accent/50 text-sm text-text/70">
        已联系：{contacts.filter(c => c.isContacted).length} / {contacts.length}
      </div>
    </div>
  )
}

export default ContactList