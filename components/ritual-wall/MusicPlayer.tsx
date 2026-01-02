import React, { useState } from 'react'

const MusicPlayer: React.FC = () => {
  const [playlistId, setPlaylistId] = useState<string>('7651759671') // 默认歌单ID
  const [isEditing, setIsEditing] = useState<boolean>(false)

  const handlePlaylistChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPlaylistId(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsEditing(false)
  }

  return (
    <div className="bg-white rounded-2xl p-6 card-shadow hover:shadow-lg transition-all duration-300">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-medium text-text">月度歌单</h3>
        <button
          onClick={() => setIsEditing(!isEditing)}
          className="text-sm text-primary hover:text-primary/80 transition-colors"
        >
          {isEditing ? '保存' : '编辑'}
        </button>
      </div>

      {isEditing ? (
        <form onSubmit={handleSubmit} className="mb-4">
          <input
            type="text"
            value={playlistId}
            onChange={handlePlaylistChange}
            placeholder="输入网易云歌单ID或链接"
            className="w-full px-4 py-2 border border-accent rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
          />
          <button type="submit" className="hidden" />
        </form>
      ) : (
        <div className="mb-4 text-sm text-text/70">
          当前歌单：{playlistId}
        </div>
      )}

      <div className="h-64 overflow-hidden rounded-lg bg-accent/30">
        <iframe
          src={`https://music.163.com/outchain/player?type=0&id=${playlistId}&auto=0&height=320`}
          width="100%"
          height="320"
          frameBorder="0"
          allowFullScreen
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          className="transform scale-100 transition-transform hover:scale-105 duration-300"
          title="网易云音乐歌单"
        ></iframe>
      </div>
    </div>
  )
}

export default MusicPlayer