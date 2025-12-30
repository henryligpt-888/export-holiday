"use client";

import React from 'react';
import { ChevronDown } from 'lucide-react';
import { ShippingRoute, ShippingRegion } from '@/types/shipping';
import ShippingRouteCard from './ShippingRouteCard';
import { clsx } from 'clsx';

interface RegionGroupProps {
  region: ShippingRegion;
  routes: ShippingRoute[];
  colorClass: string;
  defaultExpanded?: boolean;
}

export default function RegionGroup({
  region,
  routes,
  colorClass,
  defaultExpanded = true
}: RegionGroupProps) {
  const [isExpanded, setIsExpanded] = React.useState(defaultExpanded);

  // Calculate average transit time for the region
  const avgTransitDays = Math.round(
    routes.reduce((sum, r) => sum + r.transitDays, 0) / routes.length
  );

  return (
    <div className="bg-white/60 backdrop-blur-sm rounded-2xl border border-slate-200 overflow-hidden">
      {/* Region Header */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between p-4 hover:bg-slate-50 transition-colors"
      >
        <div className="flex items-center gap-3">
          <div className={clsx('w-3 h-3 rounded-full', colorClass)} />
          <h3 className="text-lg font-bold text-slate-800">{region}</h3>
          <span className="text-sm text-slate-500">
            {routes.length} 个港口
          </span>
          <span className="px-2 py-0.5 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">
            平均 {avgTransitDays} 天
          </span>
        </div>
        <ChevronDown
          size={20}
          className={clsx(
            'text-slate-400 transition-transform',
            isExpanded && 'rotate-180'
          )}
        />
      </button>

      {/* Routes Grid */}
      {isExpanded && (
        <div className="p-4 pt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {routes
              .sort((a, b) => a.transitDays - b.transitDays)
              .map(route => (
                <ShippingRouteCard
                  key={route.id}
                  route={route}
                  colorClass={colorClass}
                />
              ))}
          </div>
        </div>
      )}
    </div>
  );
}
