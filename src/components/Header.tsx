import React from 'react';
import { Globe2, Ship, Sparkles } from 'lucide-react';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 border-b border-blue-100/50 shadow-sm">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 via-cyan-50/30 to-purple-50/50" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl blur-md opacity-50 group-hover:opacity-75 transition-opacity" />
            <div className="relative bg-gradient-to-br from-blue-600 to-cyan-600 p-3 rounded-xl text-white shadow-tech transform transition-transform group-hover:scale-105">
              <Globe2 size={28} className="animate-float" />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-slate-800 via-blue-700 to-cyan-700 bg-clip-text text-transparent tracking-tight">
                国际节假日图鉴
              </h1>
              <Sparkles size={18} className="text-blue-500 animate-pulse" />
            </div>
            <p className="text-xs text-slate-500 font-semibold tracking-wider uppercase mt-0.5 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full animate-pulse" />
              外贸版 / Foreign Trade Edition
            </p>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-2 text-slate-700 text-sm bg-gradient-to-r from-blue-50 to-cyan-50 px-4 py-2 rounded-full border border-blue-200/60 shadow-sm hover:shadow-tech transition-all hover:scale-105">
          <Ship size={18} className="text-blue-600" />
          <span className="font-medium">助力中国制造出海</span>
        </div>
      </div>
    </header>
  );
};

export default Header;