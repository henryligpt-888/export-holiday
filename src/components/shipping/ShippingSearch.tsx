"use client";

import React from 'react';
import { Search, X } from 'lucide-react';
import { clsx } from 'clsx';

interface ShippingSearchProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

export default function ShippingSearch({
  value,
  onChange,
  placeholder = '搜索港口、国家...',
  className
}: ShippingSearchProps) {
  return (
    <div className={clsx('relative flex-1', className)}>
      <Search
        size={18}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
      />
      <input
        type="text"
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full pl-11 pr-10 py-3 bg-white/80 backdrop-blur-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
      />
      {value && (
        <button
          onClick={() => onChange('')}
          className="absolute right-3 top-1/2 -translate-y-1/2 p-1 hover:bg-slate-100 rounded-full transition-colors"
        >
          <X size={16} className="text-slate-400" />
        </button>
      )}
    </div>
  );
}
