"use client";

import React, { useState } from 'react';
import { Clock, ArrowRightLeft, CalendarClock, Users } from 'lucide-react';
import QuickConverter from '@/components/timezone/QuickConverter';
import MeetingAssistant from '@/components/timezone/MeetingAssistant';
import CustomerTimezoneList from '@/components/timezone/CustomerTimezoneList';
import LiveClockDisplay from '@/components/timezone/LiveClockDisplay';
import { clsx } from 'clsx';

type Tab = 'quick' | 'meeting' | 'customers';

export default function TimezonePage() {
  const [activeTab, setActiveTab] = useState<Tab>('quick');
  const [comparisonTimezone, setComparisonTimezone] = useState('America/New_York');

  const tabs = [
    { id: 'quick' as Tab, label: '快速转换', icon: <ArrowRightLeft size={18} /> },
    { id: 'meeting' as Tab, label: '会议助手', icon: <CalendarClock size={18} /> },
    { id: 'customers' as Tab, label: '客户时区', icon: <Users size={18} /> }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-light-gradient">
      {/* Tech background patterns */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-200/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-200/10 rounded-full blur-3xl" />
      </div>

      {/* Header */}
      <header className="relative sticky top-0 z-40 backdrop-blur-xl bg-white/80 border-b border-blue-100/50 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-lg">
              <Clock size={24} className="text-blue-600" />
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-slate-800 to-blue-700 bg-clip-text text-transparent">
                时区转换工具
              </h1>
              <p className="text-xs text-slate-500">跨时区沟通无障碍</p>
            </div>
          </div>
          <LiveClockDisplay comparisonTimezoneId={comparisonTimezone} showSeconds={false} />
        </div>
      </header>

      <div className="relative flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 py-6 space-y-6">
        {/* Tab Navigation */}
        <div className="flex gap-2 bg-white/60 backdrop-blur-sm rounded-xl p-1.5 border border-blue-100/50 w-fit">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={clsx(
                'flex items-center gap-2 px-4 py-2.5 rounded-lg font-semibold text-sm transition-all',
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-md'
                  : 'text-slate-600 hover:bg-blue-50 hover:text-blue-700'
              )}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="space-y-6">
          {activeTab === 'quick' && <QuickConverter />}
          {activeTab === 'meeting' && <MeetingAssistant />}
          {activeTab === 'customers' && <CustomerTimezoneList />}
        </div>

        {/* Tips Section */}
        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-6 border border-blue-100">
          <h3 className="font-bold text-slate-800 mb-3">使用技巧</h3>
          <ul className="text-sm text-slate-600 space-y-2">
            <li className="flex items-start gap-2">
              <span className="w-5 h-5 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs flex-shrink-0">1</span>
              <span><strong>快速转换</strong>：输入客户告知的时间，立即得到对应的北京时间</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-5 h-5 bg-cyan-500 text-white rounded-full flex items-center justify-center text-xs flex-shrink-0">2</span>
              <span><strong>会议助手</strong>：添加多个参会方，系统会自动推荐最佳会议时间</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-5 h-5 bg-purple-500 text-white rounded-full flex items-center justify-center text-xs flex-shrink-0">3</span>
              <span><strong>客户管理</strong>：保存常用客户，随时查看他们当前的本地时间</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative backdrop-blur-xl bg-white/80 border-t border-blue-100/50 py-6 mt-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/30 via-cyan-50/20 to-purple-50/30" />
        <div className="relative max-w-6xl mx-auto px-4 text-center">
          <p className="text-slate-500 text-sm font-medium">
            © {new Date().getFullYear()}{' '}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent font-bold">
              外贸工具箱
            </span>
            {' '}| 为全球贸易赋能
          </p>
        </div>
      </footer>
    </div>
  );
}
