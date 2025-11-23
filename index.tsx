import React from 'react';
import { createRoot } from 'react-dom/client';
import Home from '@/app/page';

// 引入全局 CSS (环境支持时生效，否则依赖 index.html 中的 Tailwind CDN)
import '@/app/globals.css';

const container = document.getElementById('root');
const root = createRoot(container!);

// 模拟 Next.js 的 RootLayout 结构
root.render(
  <React.StrictMode>
    <div className="bg-slate-50 min-h-screen text-slate-900">
      <Home />
    </div>
  </React.StrictMode>
);