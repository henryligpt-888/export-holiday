"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Globe2,
  Clock,
  Ship,
  Briefcase,
  Sparkles
} from 'lucide-react';
import { clsx } from 'clsx';

type NavItem = {
  href: string;
  label: string;
  icon: React.ReactNode;
  description: string;
};

const navItems: NavItem[] = [
  {
    href: '/holidays',
    label: '节假日图鉴',
    icon: <Globe2 size={22} />,
    description: '全球节假日查询'
  },
  {
    href: '/timezone',
    label: '时区转换',
    icon: <Clock size={22} />,
    description: '跨时区会议助手'
  },
  {
    href: '/shipping',
    label: '海运周期',
    icon: <Ship size={22} />,
    description: '青岛港出发时效'
  }
];

export default function AppSidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-white/90 backdrop-blur-xl border-r border-blue-100/50 shadow-lg z-50 flex flex-col">
      {/* Logo / Brand */}
      <div className="p-6 border-b border-blue-100/50">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl blur-md opacity-50" />
            <div className="relative bg-gradient-to-br from-blue-600 to-cyan-600 p-2.5 rounded-xl text-white">
              <Briefcase size={24} />
            </div>
          </div>
          <div>
            <h1 className="text-lg font-bold bg-gradient-to-r from-slate-800 to-blue-700 bg-clip-text text-transparent">
              外贸工具箱
            </h1>
            <p className="text-xs text-slate-500 flex items-center gap-1">
              <Sparkles size={10} className="text-blue-500" />
              Trade Toolbox
            </p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        {navItems.map((item) => {
          const isActive = pathname === item.href || pathname.startsWith(item.href + '/');

          return (
            <Link
              key={item.href}
              href={item.href}
              className={clsx(
                'flex items-center gap-3 px-4 py-3 rounded-xl transition-all group',
                isActive
                  ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-tech'
                  : 'text-slate-600 hover:bg-blue-50 hover:text-blue-700'
              )}
            >
              <div className={clsx(
                'p-2 rounded-lg transition-colors',
                isActive ? 'bg-white/20' : 'bg-slate-100 group-hover:bg-blue-100'
              )}>
                {item.icon}
              </div>
              <div className="flex-1">
                <div className="font-semibold text-sm">{item.label}</div>
                <div className={clsx(
                  'text-xs',
                  isActive ? 'text-white/80' : 'text-slate-400'
                )}>
                  {item.description}
                </div>
              </div>
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-blue-100/50">
        <p className="text-xs text-slate-400 text-center">
          助力中国制造出海
        </p>
      </div>
    </aside>
  );
}
