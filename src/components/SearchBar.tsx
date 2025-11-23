import React, { useState, useEffect } from 'react';
import { Search, X } from 'lucide-react';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  totalResults?: number;
}

const SearchBar: React.FC<SearchBarProps> = ({
  value,
  onChange,
  placeholder = '搜索节日名称、国家...',
  totalResults
}) => {
  const [localValue, setLocalValue] = useState(value);

  useEffect(() => {
    setLocalValue(value);
  }, [value]);

  // 使用 useEffect 实现防抖，避免中文输入被打断
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onChange(localValue);
    }, 150); // 减少延迟时间，让搜索更即时

    return () => clearTimeout(timeoutId);
  }, [localValue, onChange]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocalValue(e.target.value);
  };

  const handleClear = () => {
    setLocalValue('');
    onChange('');
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      // 按回车立即搜索，不等待防抖
      onChange(localValue);
    }
  };

  return (
    <div className="relative w-full">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <Search size={20} className="text-blue-500" />
        </div>

        <input
          type="text"
          value={localValue}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
          placeholder={placeholder}
          className="w-full pl-12 pr-12 py-3.5 text-slate-700 bg-white/60 backdrop-blur-sm border-2 border-blue-100 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all placeholder:text-slate-400 font-medium"
        />

        {localValue && (
          <button
            onClick={handleClear}
            className="absolute inset-y-0 right-0 pr-4 flex items-center hover:scale-110 transition-transform"
          >
            <X size={20} className="text-slate-400 hover:text-slate-600" />
          </button>
        )}
      </div>

      {totalResults !== undefined && (
        <div className="absolute -bottom-6 left-0 text-xs text-slate-500 font-medium">
          找到 <span className="text-blue-600 font-bold">{totalResults}</span> 个节日
        </div>
      )}
    </div>
  );
};

export default SearchBar;
