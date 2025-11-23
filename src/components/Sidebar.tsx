import React from 'react';
import { FilterState } from '@/types';
import { years, regions, types } from '@/data/holidays';
import { Filter } from 'lucide-react';

interface SidebarProps {
  filters: FilterState;
  setFilters: React.Dispatch<React.SetStateAction<FilterState>>;
  totalCount: number;
}

const Sidebar: React.FC<SidebarProps> = ({ filters, setFilters, totalCount }) => {
  const handleChange = (key: keyof FilterState, value: string) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  return (
    <aside className="w-full md:w-72 flex-shrink-0 space-y-6">
      <div className="sticky top-24 overflow-hidden bg-white/60 backdrop-blur-sm rounded-2xl shadow-tech border border-blue-100/50 p-6 hover:shadow-tech-lg transition-all">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-cyan-50/30 pointer-events-none" />
        <div className="relative flex items-center gap-3 mb-6 text-slate-800 pb-5 border-b border-gradient-to-r from-transparent via-blue-200/60 to-transparent">
          <div className="p-2 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-lg">
            <Filter size={20} className="text-blue-600" />
          </div>
          <h2 className="font-bold text-lg bg-gradient-to-r from-slate-800 to-blue-700 bg-clip-text text-transparent">
            筛选条件
          </h2>
          <span className="ml-auto text-xs font-bold bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-3 py-1.5 rounded-full shadow-sm">
            {totalCount}
          </span>
        </div>

        <div className="relative space-y-6">
          {/* Year Filter */}
          <div className="space-y-3">
            <label className="text-sm font-bold text-slate-700 block">选择年份</label>
            <div className="grid grid-cols-3 gap-2">
              {years.map(year => (
                <button
                  key={year}
                  onClick={() => handleChange('year', year === filters.year ? '' : year)}
                  className={`text-sm py-2.5 px-1 rounded-lg border-2 font-semibold transition-all ${
                    filters.year === year
                      ? 'bg-gradient-to-br from-blue-500 to-cyan-500 border-blue-500 text-white shadow-tech scale-105'
                      : 'border-blue-100 text-slate-600 hover:border-blue-300 hover:bg-blue-50/50 hover:scale-105'
                  }`}
                >
                  {year}
                </button>
              ))}
            </div>
          </div>

          {/* Region Filter */}
          <div className="space-y-3">
            <label className="text-sm font-bold text-slate-700 block">国家/地区</label>
            <select
              value={filters.region}
              onChange={(e) => handleChange('region', e.target.value)}
              className="w-full p-3 rounded-xl border-2 border-blue-100 text-sm text-slate-700 font-medium focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none bg-white/80 backdrop-blur-sm hover:border-blue-300 transition-all cursor-pointer"
            >
              <option value="">全部区域</option>
              {regions.map(region => (
                <option key={region} value={region}>{region}</option>
              ))}
            </select>
          </div>

          {/* Type Filter */}
          <div className="space-y-3">
            <label className="text-sm font-bold text-slate-700 block">假日类型</label>
            <div className="space-y-2.5 bg-gradient-to-br from-blue-50/30 to-cyan-50/20 p-3 rounded-xl border border-blue-100/50">
              <label className="flex items-center gap-3 cursor-pointer group p-2 rounded-lg hover:bg-white/60 transition-all">
                <input
                  type="radio"
                  name="type"
                  checked={filters.type === ''}
                  onChange={() => handleChange('type', '')}
                  className="w-4 h-4 text-blue-600 border-blue-300 focus:ring-blue-500 cursor-pointer"
                />
                <span className="text-sm text-slate-700 font-medium group-hover:text-blue-700">全部类型</span>
              </label>
              {types.map(type => (
                <label key={type} className="flex items-center gap-3 cursor-pointer group p-2 rounded-lg hover:bg-white/60 transition-all">
                  <input
                    type="radio"
                    name="type"
                    checked={filters.type === type}
                    onChange={() => handleChange('type', type)}
                    className="w-4 h-4 text-blue-600 border-blue-300 focus:ring-blue-500 cursor-pointer"
                  />
                  <span className="text-sm text-slate-700 font-medium group-hover:text-blue-700">{type}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Reset Button */}
          <button
            onClick={() => setFilters({ year: '2024', region: '', type: '' })}
            className="w-full mt-2 py-3 text-sm font-semibold text-slate-600 hover:text-white bg-gradient-to-r from-slate-50 to-slate-100 hover:from-blue-500 hover:to-cyan-500 rounded-xl border-2 border-slate-200 hover:border-blue-400 transition-all hover:shadow-tech hover:scale-105"
          >
            重置筛选
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;