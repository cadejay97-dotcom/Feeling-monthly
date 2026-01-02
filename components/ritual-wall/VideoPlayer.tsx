import React, { useState } from 'react'

const VideoPlayer: React.FC = () => {
  const [videoUrl, setVideoUrl] = useState<string>('https://www.youtube.com/watch?v=dQw4w9WgXcQ') // 默认视频链接
  const [isEditing, setIsEditing] = useState<boolean>(false)

  const extractVideoId = (url: string): { platform: string; id: string } => {
    // YouTube
    const youtubeRegex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|\w+\/?)|youtu\.be\/)([\w-]{11})/;
    const youtubeMatch = url.match(youtubeRegex);
    if (youtubeMatch) {
      return { platform: 'youtube', id: youtubeMatch[1] };
    }

    // Bilibili
    const bilibiliRegex = /(?:bilibili\.com\/video\/|b23\.tv\/)([a-zA-Z0-9]+)/;
    const bilibiliMatch = url.match(bilibiliRegex);
    if (bilibiliMatch) {
      return { platform: 'bilibili', id: bilibiliMatch[1] };
    }

    // 抖音
    const douyinRegex = /(?:douyin\.com\/video\/|v\.douyin\.com\/)([a-zA-Z0-9]+)/;
    const douyinMatch = url.match(douyinRegex);
    if (douyinMatch) {
      return { platform: 'douyin', id: douyinMatch[1] };
    }

    return { platform: 'youtube', id: 'dQw4w9WgXcQ' };
  };

  const getEmbedUrl = (url: string): string => {
    const { platform, id } = extractVideoId(url);

    switch (platform) {
      case 'youtube':
        return `https://www.youtube.com/embed/${id}`;
      case 'bilibili':
        return `https://player.bilibili.com/player.html?bvid=${id}&page=1`;
      case 'douyin':
        return `https://www.douyin.com/embed/video/${id}`;
      default:
        return `https://www.youtube.com/embed/${id}`;
    }
  };

  const handleVideoUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVideoUrl(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsEditing(false);
  };

  return (
    <div className="bg-white rounded-2xl p-6 card-shadow hover:shadow-lg transition-all duration-300">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-medium text-text">月度影像</h3>
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
            value={videoUrl}
            onChange={handleVideoUrlChange}
            placeholder="输入YouTube/Bilibili/抖音链接"
            className="w-full px-4 py-2 border border-accent rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
          />
          <button type="submit" className="hidden" />
        </form>
      ) : (
        <div className="mb-4 text-sm text-text/70">
          当前视频：{videoUrl}
        </div>
      )}

      <div className="aspect-video overflow-hidden rounded-lg bg-accent/30">
        <iframe
          src={getEmbedUrl(videoUrl)}
          width="100%"
          height="100%"
          frameBorder="0"
          allowFullScreen
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          className="transform scale-100 transition-transform hover:scale-105 duration-300"
          title="月度影像"
        ></iframe>
      </div>
    </div>
  );
};

export default VideoPlayer;