# 月度回响 - Monthly Echo

通过仪式感提升心理健康与个人价值感的Web应用。

## 核心理念
- **愿景**：通过仪式感提升心理健康与个人价值感
- **调性**：温暖、静谧、充满质感、呼吸感（类似于 Notion 的简洁与 Flomo 的轻量）

## 功能模块

### 1. 仪式感展示墙 (The Ritual Wall)
- **月度歌单**：集成网易云音乐组件，支持填入歌单 ID 或链接，展示前 10 首
- **月度影像**：嵌入视频播放器，支持粘贴 YouTube/Bilibili/抖音链接，展示本月剪辑
- **书香时刻**：精致的书籍展示卡片，包含封面图片、书籍简介、我的读书笔记/感悟

### 2. 互动与复盘 (Interaction & Reflection)
- **联络清单**：简单的 Check-box 列表，提醒联系家人和老友
- **自由书写区**：Markdown 编辑器，用于记录当月的纯粹放松时刻和自我对话

### 3. AI 惊喜 (DeepSeek Integration)
- 接入 DeepSeek API
- 根据用户填写的读书笔记、当月关键词，生成温暖的月度寄语

## 技术栈

- **前端**：Next.js + Tailwind CSS
- **UI 组件库**：自定义组件 + Tailwind CSS
- **API 集成**：网易云 API（外链）、DeepSeek API
- **部署**：支持一键部署至 Vercel

## 快速开始

### 1. 克隆项目

```bash
git clone <repository-url>
cd monthly-echo
```

### 2. 安装依赖

```bash
npm install
```

### 3. 配置环境变量

创建 `.env.local` 文件，并添加以下内容：

```
DEEPSEEK_API_KEY=your-deepseek-api-key
```

### 4. 运行开发服务器

```bash
npm run dev
```

打开 [http://localhost:3000](http://localhost:3000) 查看应用。

## 配置指南

### DeepSeek API 配置

1. 访问 [DeepSeek AI](https://www.deepseek.com/) 官网，注册并获取 API Key
2. 将 API Key 添加到 `.env.local` 文件中
3. 重启开发服务器

### 视频/音乐嵌入逻辑

#### 网易云音乐
- 支持直接输入歌单 ID 或完整链接
- 示例：`7651759671` 或 `https://music.163.com/playlist?id=7651759671`

#### YouTube
- 支持标准 YouTube 链接
- 示例：`https://www.youtube.com/watch?v=dQw4w9WgXcQ`

#### Bilibili
- 支持 Bilibili 视频链接和短链接
- 示例：`https://www.bilibili.com/video/BV1xx411c7m9/` 或 `https://b23.tv/BV1xx411c7m9`

#### 抖音
- 支持抖音视频链接
- 示例：`https://www.douyin.com/video/7025269802368604454`

## 部署至 Vercel

1. 登录 Vercel 账号
2. 点击 "New Project"，选择导入 GitHub 仓库
3. 配置环境变量：
   - `DEEPSEEK_API_KEY`：你的 DeepSeek API Key
4. 点击 "Deploy"，等待部署完成
5. 访问 Vercel 生成的 URL，开始使用应用

## 项目结构

```
├── app/
│   ├── layout.tsx          # 主布局
│   ├── page.tsx            # 首页
│   ├── api/
│   │   └── deepseek/       # DeepSeek API 路由
│   └── globals.css         # 全局样式
├── components/
│   ├── ritual-wall/        # 仪式感展示墙组件
│   │   ├── MusicPlayer.tsx     # 月度歌单
│   │   ├── VideoPlayer.tsx     # 月度影像
│   │   └── BookCard.tsx        # 书香时刻
│   ├── interaction/        # 互动与复盘组件
│   │   ├── ContactList.tsx     # 联络清单
│   │   └── MarkdownEditor.tsx  # 自由书写区
│   └── ai/                 # AI 组件
│       └── MonthlyMessage.tsx  # AI月度寄语
├── lib/
│   └── deepseek.ts         # DeepSeek API 客户端
├── public/                 # 静态资源
├── tailwind.config.ts      # Tailwind 配置
├── tsconfig.json           # TypeScript 配置
└── package.json            # 依赖配置
```

## 开发说明

### 组件设计
- 所有组件均使用 Tailwind CSS 进行样式设计
- 组件支持响应式布局，适配不同屏幕尺寸
- 组件支持编辑功能，用户可以自定义内容

### API 调用
- DeepSeek API 调用采用后端路由转发，确保 API Key 安全
- 前端通过 fetch API 调用后端路由

## 功能使用

1. **月度歌单**：点击 "编辑" 按钮，输入网易云歌单 ID 或链接，点击 "保存"
2. **月度影像**：点击 "编辑" 按钮，输入 YouTube/Bilibili/抖音链接，点击 "保存"
3. **书香时刻**：点击 "编辑" 按钮，填写书籍信息，点击 "保存"
4. **联络清单**：点击 "添加联系人" 按钮，填写姓名和关系，点击 "保存"；点击 Checkbox 标记已联系
5. **自由书写区**：使用 Markdown 语法编写内容，点击 "预览" 查看效果
6. **生成月度寄语**：点击顶部导航栏的 "生成月度寄语" 按钮，等待 AI 生成寄语

## 注意事项

1. 请确保 DeepSeek API Key 配置正确，否则无法生成月度寄语
2. 视频和音乐嵌入依赖第三方平台，如遇无法播放，请检查链接是否有效
3. 建议使用现代浏览器访问应用，如 Chrome、Firefox、Safari 等

## 许可证

MIT License
