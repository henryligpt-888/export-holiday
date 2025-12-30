"use client";

import React, { useState, useMemo } from 'react';
import { Ship, Anchor, MapPin } from 'lucide-react';
import {
  shippingRoutes,
  ORIGIN_PORT,
  regionColors,
  regionOrder,
  getRegions
} from '@/data/shippingRoutes';
import { ShippingRegion } from '@/types/shipping';
import RegionGroup from '@/components/shipping/RegionGroup';
import ShippingSearch from '@/components/shipping/ShippingSearch';
import { clsx } from 'clsx';

export default function ShippingPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegion, setSelectedRegion] = useState<ShippingRegion | ''>('');

  const regions = getRegions();

  const filteredRoutes = useMemo(() => {
    return shippingRoutes.filter(route => {
      if (selectedRegion && route.region !== selectedRegion) return false;

      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        return (
          route.destinationPort.toLowerCase().includes(query) ||
          route.destinationPortEn.toLowerCase().includes(query) ||
          route.country.toLowerCase().includes(query)
        );
      }

      return true;
    });
  }, [searchQuery, selectedRegion]);

  const groupedRoutes = useMemo(() => {
    return filteredRoutes.reduce((groups, route) => {
      if (!groups[route.region]) {
        groups[route.region] = [];
      }
      groups[route.region].push(route);
      return groups;
    }, {} as Record<ShippingRegion, typeof shippingRoutes>);
  }, [filteredRoutes]);

  // Sort regions by the predefined order
  const sortedRegions = regionOrder.filter(region => groupedRoutes[region]?.length > 0);

  return (
    <div className="flex flex-col min-h-screen bg-light-gradient">
      {/* Tech background patterns */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-200/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-200/10 rounded-full blur-3xl" />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 backdrop-blur-xl bg-white/80 border-b border-blue-100/50 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-lg">
              <Ship size={24} className="text-blue-600" />
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-slate-800 to-blue-700 bg-clip-text text-transparent">
                海运周期查询
              </h1>
              <p className="text-xs text-slate-500 flex items-center gap-1">
                <Anchor size={10} className="text-blue-500" />
                从 {ORIGIN_PORT.name} 出发
              </p>
            </div>
          </div>

          <div className="text-right">
            <p className="text-sm font-bold text-blue-600">{filteredRoutes.length}</p>
            <p className="text-xs text-slate-500">条航线</p>
          </div>
        </div>
      </header>

      <div className="relative flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 py-6 space-y-6">
        {/* Origin Port Banner */}
        <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl p-6 text-white shadow-tech">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-white/20 rounded-xl">
              <Anchor size={32} />
            </div>
            <div>
              <p className="text-sm text-white/80">出发港口</p>
              <h2 className="text-2xl font-bold">{ORIGIN_PORT.name}</h2>
              <p className="text-sm text-white/80">
                {ORIGIN_PORT.nameEn} ({ORIGIN_PORT.code})
              </p>
            </div>
            <div className="ml-auto text-right">
              <p className="text-sm text-white/80">覆盖</p>
              <p className="text-2xl font-bold">{shippingRoutes.length}</p>
              <p className="text-sm text-white/80">个港口</p>
            </div>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4">
          <ShippingSearch
            value={searchQuery}
            onChange={setSearchQuery}
            placeholder="搜索港口、国家..."
          />

          <div className="flex gap-2 flex-wrap">
            <button
              onClick={() => setSelectedRegion('')}
              className={clsx(
                'px-4 py-2 rounded-lg text-sm font-semibold transition-all whitespace-nowrap',
                !selectedRegion
                  ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-md'
                  : 'bg-white/60 text-slate-600 hover:bg-blue-50 border border-slate-200'
              )}
            >
              全部地区
            </button>
            {regions.map(region => (
              <button
                key={region}
                onClick={() => setSelectedRegion(region === selectedRegion ? '' : region)}
                className={clsx(
                  'px-4 py-2 rounded-lg text-sm font-semibold transition-all whitespace-nowrap',
                  selectedRegion === region
                    ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-md'
                    : 'bg-white/60 text-slate-600 hover:bg-blue-50 border border-slate-200'
                )}
              >
                {region}
              </button>
            ))}
          </div>
        </div>

        {/* Routes by Region */}
        <div className="space-y-6">
          {sortedRegions.map(region => (
            <RegionGroup
              key={region}
              region={region}
              routes={groupedRoutes[region]}
              colorClass={regionColors[region]}
            />
          ))}
        </div>

        {/* Empty State */}
        {filteredRoutes.length === 0 && (
          <div className="text-center py-16 bg-white/60 rounded-2xl border-2 border-dashed border-blue-200">
            <MapPin size={48} className="mx-auto text-slate-300 mb-4" />
            <h3 className="text-lg font-bold text-slate-600 mb-2">未找到匹配的航线</h3>
            <p className="text-sm text-slate-500 mb-4">
              请尝试其他搜索关键词或选择不同地区
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedRegion('');
              }}
              className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl shadow-tech hover:shadow-tech-lg transition-all"
            >
              清除筛选
            </button>
          </div>
        )}

        {/* Tips */}
        <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-6 border border-amber-100">
          <h3 className="font-bold text-slate-800 mb-3">温馨提示</h3>
          <ul className="text-sm text-slate-600 space-y-2">
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-1.5 flex-shrink-0"></span>
              <span>以上时效仅供参考，实际时效受天气、港口拥堵、船期调整等因素影响</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-1.5 flex-shrink-0"></span>
              <span>旺季（如圣诞前夕）建议预留额外缓冲时间</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-1.5 flex-shrink-0"></span>
              <span>建议联系货代获取最新船期和实际运价</span>
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
