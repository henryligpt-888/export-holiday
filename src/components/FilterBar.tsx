import React from 'react';
import { FilterState } from '@/types';
import { regions, types } from '@/data/holidays';
import { RotateCcw, Heart } from 'lucide-react';

interface FilterBarProps {
  filters: FilterState;
  setFilters: React.Dispatch<React.SetStateAction<FilterState>>;
  totalCount: number;
  showFavoritesOnly?: boolean;
  onToggleFavorites?: (show: boolean) => void;
  favoritesCount?: number;
}

const FilterBar: React.FC<FilterBarProps> = ({
  filters,
  setFilters,
  totalCount,
  showFavoritesOnly = false,
  onToggleFavorites,
  favoritesCount = 0
}) => {
  const handleChange = (key: keyof FilterState, value: string) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const handleReset = () => {
    setFilters({ year: '2026', region: '', type: '' });
    if (onToggleFavorites) {
      onToggleFavorites(false);
    }
  };

  return (
    <div className="bg-white/60 backdrop-blur-sm rounded-xl shadow-sm border border-blue-100/50 px-5 py-3.5">
      <div className="flex flex-wrap items-center gap-3">
        {/* Region Filter */}
        <div className="flex items-center gap-2">
          <label className="text-xs font-semibold text-slate-600">地区</label>
          <select
            value={filters.region}
            onChange={(e) => handleChange('region', e.target.value)}
            className="px-3 py-1.5 rounded-lg border border-slate-200 text-sm text-slate-700 font-medium focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none bg-white hover:border-blue-300 transition-all cursor-pointer"
          >
            <option value="">全部区域</option>
            {regions.map(region => (
              <option key={region} value={region}>{region}</option>
            ))}
          </select>
        </div>

        {/* Type Filter */}
        <div className="flex items-center gap-2">
          <label className="text-xs font-semibold text-slate-600">类型</label>
          <select
            value={filters.type}
            onChange={(e) => handleChange('type', e.target.value)}
            className="px-3 py-1.5 rounded-lg border border-slate-200 text-sm text-slate-700 font-medium focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none bg-white hover:border-blue-300 transition-all cursor-pointer"
          >
            <option value="">全部类型</option>
            {types.map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>

        {/* Favorites Filter */}
        {onToggleFavorites && (
          <label className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 bg-white hover:border-red-300 transition-all cursor-pointer">
            <input
              type="checkbox"
              checked={showFavoritesOnly}
              onChange={(e) => onToggleFavorites(e.target.checked)}
              className="w-3.5 h-3.5 text-red-500 border-slate-300 rounded focus:ring-2 focus:ring-red-400 cursor-pointer"
            />
            <Heart
              size={14}
              className={showFavoritesOnly ? 'text-red-500' : 'text-slate-400'}
              fill={showFavoritesOnly ? 'currentColor' : 'none'}
            />
            <span className="text-xs font-semibold text-slate-600">
              收藏
              {favoritesCount > 0 && (
                <span className="ml-1 text-red-500">({favoritesCount})</span>
              )}
            </span>
          </label>
        )}

        {/* Divider */}
        <div className="h-6 w-px bg-slate-200" />

        {/* Results Count */}
        <span className="text-xs font-medium text-slate-500">
          共 <span className="font-bold text-blue-600">{totalCount}</span> 个节日
        </span>

        {/* Reset Button */}
        <button
          onClick={handleReset}
          className="ml-auto flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-600 hover:text-blue-600 bg-slate-50 hover:bg-blue-50 rounded-lg border border-slate-200 hover:border-blue-300 transition-all"
        >
          <RotateCcw size={14} />
          重置
        </button>
      </div>
    </div>
  );
};

export default FilterBar;
