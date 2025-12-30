"use client";

import React, { useState, useMemo } from 'react';
import SearchBar from '@/components/SearchBar';
import FilterBar from '@/components/FilterBar';
import HolidayCard from '@/components/HolidayCard';
import ViewSwitcher, { ViewMode } from '@/components/ViewSwitcher';
import ExportMenu from '@/components/ExportMenu';
import MonthView from '@/components/Calendar/MonthView';
import YearView from '@/components/Calendar/YearView';
import { holidays } from '@/data/holidays';
import { FilterState } from '@/types';
import { SearchX, Globe2 } from 'lucide-react';
import { useFavorites } from '@/hooks/useFavorites';

export default function HolidaysPage() {
  const [filters, setFilters] = useState<FilterState>({
    year: '2026',
    region: '',
    type: ''
  });
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<ViewMode>('list');
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);

  // 收藏功能
  const { favorites, toggleFavorite, isFavorite, favoritesCount } = useFavorites();

  const filteredHolidays = useMemo(() => {
    return holidays.filter(holiday => {
      // Filter by Year (if selected)
      if (filters.year && holiday.year !== filters.year) return false;

      // Filter by Region
      if (filters.region && holiday.region !== filters.region) return false;

      // Filter by Type
      if (filters.type && holiday.type !== filters.type) return false;

      // Filter by Favorites
      if (showFavoritesOnly && !favorites.includes(holiday.id)) return false;

      // Filter by Search Query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesChineseName = holiday.chineseName.toLowerCase().includes(query);
        const matchesEnglishName = holiday.englishName.toLowerCase().includes(query);
        const matchesCountry = holiday.country.toLowerCase().includes(query);
        const matchesRegion = holiday.region.toLowerCase().includes(query);
        const matchesAliases = holiday.aliases?.some(alias =>
          alias.toLowerCase().includes(query)
        ) || false;

        if (!matchesChineseName && !matchesEnglishName && !matchesCountry && !matchesRegion && !matchesAliases) {
          return false;
        }
      }

      return true;
    }).sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  }, [filters, searchQuery, showFavoritesOnly, favorites]);

  return (
    <div className="flex flex-col min-h-screen bg-light-gradient">
      {/* Tech background patterns */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-200/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-200/10 rounded-full blur-3xl" />
      </div>

      {/* Page Header */}
      <header className="relative sticky top-0 z-40 backdrop-blur-xl bg-white/80 border-b border-blue-100/50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-lg">
              <Globe2 size={24} className="text-blue-600" />
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-slate-800 to-blue-700 bg-clip-text text-transparent">
                国际节假日图鉴
              </h1>
              <p className="text-xs text-slate-500">全球节假日查询与营销日历</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-sm font-bold text-blue-600">{filteredHolidays.length}</p>
            <p className="text-xs text-slate-500">个节日</p>
          </div>
        </div>
      </header>

      <div className="relative flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-6">
          {/* Search Bar */}
          <div className="relative pb-4">
            <SearchBar
              value={searchQuery}
              onChange={setSearchQuery}
              placeholder="搜索节日名称、国家、地区..."
              totalResults={filteredHolidays.length}
            />
          </div>

          {/* Filter Bar and View Switcher */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <FilterBar
              filters={filters}
              setFilters={setFilters}
              totalCount={filteredHolidays.length}
              showFavoritesOnly={showFavoritesOnly}
              onToggleFavorites={setShowFavoritesOnly}
              favoritesCount={favoritesCount}
            />

            <div className="flex flex-col w-full md:w-auto md:flex-row items-stretch md:items-center gap-3">
              <ViewSwitcher
                currentView={viewMode}
                onViewChange={setViewMode}
              />
              <ExportMenu holidays={filteredHolidays} />
            </div>
          </div>

          {/* Content Area */}
          <div className="pt-4">
            {/* List View */}
            {viewMode === 'list' && (
              <>
                {filteredHolidays.length > 0 ? (
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                    {filteredHolidays.map(holiday => (
                      <HolidayCard
                        key={holiday.id}
                        holiday={holiday}
                        isFavorite={isFavorite(holiday.id)}
                        onToggleFavorite={toggleFavorite}
                      />
                    ))}
                  </div>
                ) : (
                  <div className="relative overflow-hidden flex flex-col items-center justify-center py-24 bg-white/60 backdrop-blur-sm rounded-2xl border-2 border-dashed border-blue-200/60 text-center shadow-tech">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-cyan-50/50" />
                    <div className="relative">
                      <div className="bg-gradient-to-br from-blue-100 to-cyan-100 p-5 rounded-2xl mb-5 inline-block shadow-lg">
                        <SearchX size={56} className="text-blue-600" />
                      </div>
                      <h3 className="text-xl font-bold bg-gradient-to-r from-slate-800 to-blue-700 bg-clip-text text-transparent mb-3">
                        未找到相关节日
                      </h3>
                      <p className="text-slate-600 max-w-sm mx-auto leading-relaxed mb-6">
                        {searchQuery
                          ? `没有找到与"${searchQuery}"相关的节日，请尝试其他关键词。`
                          : '当前筛选条件下没有找到节日数据，请尝试清除筛选条件。'
                        }
                      </p>
                      <button
                        onClick={() => {
                          setFilters({ year: '2026', region: '', type: '' });
                          setSearchQuery('');
                        }}
                        className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl shadow-tech hover:shadow-tech-lg hover:scale-105 transition-all"
                      >
                        清除所有筛选
                      </button>
                    </div>
                  </div>
                )}
              </>
            )}

            {/* Month View */}
            {viewMode === 'month' && (
              <MonthView
                year={2026}
                month={currentMonth}
                holidays={filteredHolidays}
                onMonthChange={setCurrentMonth}
              />
            )}

            {/* Year View */}
            {viewMode === 'year' && (
              <YearView
                year={2026}
                holidays={filteredHolidays}
                onMonthClick={(month) => {
                  setCurrentMonth(month);
                  setViewMode('month');
                }}
              />
            )}
          </div>
        </div>
      </div>

      <footer className="relative backdrop-blur-xl bg-white/80 border-t border-blue-100/50 py-8 mt-auto shadow-[0_-4px_24px_rgba(59,130,246,0.1)]">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/30 via-cyan-50/20 to-purple-50/30" />
        <div className="relative max-w-7xl mx-auto px-4 text-center">
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
