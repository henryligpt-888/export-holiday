"use client";

import React from 'react';
import { Clock, Info, Ship } from 'lucide-react';
import { ShippingRoute } from '@/types/shipping';
import { clsx } from 'clsx';

interface ShippingRouteCardProps {
  route: ShippingRoute;
  colorClass?: string;
}

export default function ShippingRouteCard({ route, colorClass = 'bg-blue-500' }: ShippingRouteCardProps) {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-xl border border-slate-200 overflow-hidden hover:shadow-tech transition-all hover:border-blue-300 group">
      {/* Color Bar */}
      <div className={clsx('h-1', colorClass)} />

      <div className="p-4">
        {/* Port Info */}
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-2">
            <span className="text-xl">{getFlagEmoji(route.countryCode)}</span>
            <div>
              <h3 className="font-bold text-slate-800">{route.destinationPort}</h3>
              <p className="text-xs text-slate-500">{route.destinationPortEn}</p>
            </div>
          </div>
          <span className="px-2 py-1 bg-slate-100 text-slate-600 text-xs font-semibold rounded-lg">
            {route.country}
          </span>
        </div>

        {/* Transit Time */}
        <div className="flex items-center gap-3 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-3 mb-3">
          <div className="p-2 bg-white rounded-lg shadow-sm">
            <Clock size={18} className="text-blue-600" />
          </div>
          <div className="flex-1">
            <p className="text-xs text-slate-500">海运时效</p>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold text-blue-700">
                {route.transitDays}
              </span>
              <span className="text-sm text-slate-600">天</span>
              {route.transitDaysRange && (
                <span className="text-xs text-slate-400">
                  ({route.transitDaysRange.min}-{route.transitDaysRange.max} 天)
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Shipping Lines */}
        {route.shippingLines && route.shippingLines.length > 0 && (
          <div className="mb-2">
            <p className="text-xs text-slate-500 mb-1.5">常用船公司</p>
            <div className="flex flex-wrap gap-1">
              {route.shippingLines.slice(0, 4).map(line => (
                <span
                  key={line}
                  className="px-2 py-0.5 bg-slate-100 text-slate-600 text-xs rounded"
                >
                  {line}
                </span>
              ))}
              {route.shippingLines.length > 4 && (
                <span className="px-2 py-0.5 bg-slate-100 text-slate-400 text-xs rounded">
                  +{route.shippingLines.length - 4}
                </span>
              )}
            </div>
          </div>
        )}

        {/* Notes */}
        {route.notes && (
          <div className="flex items-start gap-2 text-xs text-amber-700 bg-amber-50 rounded-lg p-2 mt-3">
            <Info size={14} className="flex-shrink-0 mt-0.5" />
            <span>{route.notes}</span>
          </div>
        )}
      </div>
    </div>
  );
}

function getFlagEmoji(countryCode: string): string {
  const codePoints = countryCode
    .toUpperCase()
    .split('')
    .map(char => 127397 + char.charCodeAt(0));
  return String.fromCodePoint(...codePoints);
}
