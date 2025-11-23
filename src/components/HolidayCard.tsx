import React, { useState } from 'react';
import { Holiday } from '@/types';
import { Calendar, MapPin, Clock, TrendingDown, Lightbulb, Mail, ChevronDown, ChevronUp } from 'lucide-react';
import { clsx } from 'clsx';
import FavoriteButton from './FavoriteButton';

interface HolidayCardProps {
  holiday: Holiday;
  isFavorite?: boolean;
  onToggleFavorite?: (id: string) => void;
}

const HolidayCard: React.FC<HolidayCardProps> = ({
  holiday,
  isFavorite = false,
  onToggleFavorite
}) => {
  const [expanded, setExpanded] = useState(false);

  // 节日类型颜色映射
  const typeColors = {
    '公共假日': 'bg-blue-500',
    '宗教节日': 'bg-purple-500',
    '商业敏感日期': 'bg-amber-500'
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-all duration-300 hover:border-blue-300">
      {/* 顶部色条 */}
      <div className={clsx("h-1.5", typeColors[holiday.type])} />

      {/* 卡片主体 */}
      <div className="p-5">
        {/* 头部信息 */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <h3 className="text-xl font-bold text-slate-900">
                {holiday.chineseName}
              </h3>
              {holiday.avoidColdEmail && (
                <span className="px-2 py-0.5 bg-red-50 text-red-600 text-xs font-semibold rounded-full border border-red-200">
                  避免开发信
                </span>
              )}
            </div>
            <p className="text-sm text-slate-500 font-medium mb-3">
              {holiday.englishName}
            </p>

            {/* 基础信息 */}
            <div className="flex flex-wrap items-center gap-3 text-sm text-slate-600">
              <div className="flex items-center gap-1.5">
                <Calendar size={14} className="text-blue-500" />
                <span className="font-medium">{holiday.date}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <MapPin size={14} className="text-green-500" />
                <span>{holiday.country}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock size={14} className="text-orange-500" />
                <span>{holiday.duration}</span>
              </div>
            </div>
          </div>

          {/* 地区标签和收藏按钮 */}
          <div className="flex flex-col items-end gap-2">
            <span className="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-semibold rounded-lg">
              {holiday.region}
            </span>
            {onToggleFavorite && (
              <FavoriteButton
                holidayId={holiday.id}
                isFavorite={isFavorite}
                onToggle={onToggleFavorite}
              />
            )}
          </div>
        </div>

        {/* 业务影响 */}
        <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-lg p-3.5 mb-3 border border-orange-100">
          <div className="flex items-start gap-2">
            <TrendingDown size={16} className="text-orange-600 mt-0.5 flex-shrink-0" />
            <div className="flex-1">
              <h4 className="text-sm font-bold text-slate-900 mb-1">业务影响</h4>
              <p className="text-sm text-slate-700 leading-relaxed">
                {holiday.impact}
              </p>
            </div>
          </div>
        </div>

        {/* 展开/收起按钮 */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="w-full flex items-center justify-center gap-2 py-2 text-sm font-semibold text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-colors"
        >
          {expanded ? (
            <>
              <ChevronUp size={16} />
              收起详情
            </>
          ) : (
            <>
              <ChevronDown size={16} />
              查看建议与祝福语
            </>
          )}
        </button>

        {/* 可展开内容 */}
        {expanded && (
          <div className="mt-4 pt-4 border-t border-slate-200 space-y-4 animate-in slide-in-from-top-2 duration-200">
            {/* 行动建议 */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Lightbulb size={16} className="text-blue-600" />
                <h4 className="text-sm font-bold text-slate-900">行动建议</h4>
              </div>
              <ul className="space-y-1.5">
                {holiday.suggestions.map((suggestion, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-slate-700">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                    <span>{suggestion}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 祝福语 */}
            {(holiday.greetingZh || holiday.greetingEn) && (
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Mail size={16} className="text-purple-600" />
                  <h4 className="text-sm font-bold text-slate-900">祝福语模板</h4>
                </div>
                <div className="space-y-2">
                  {holiday.greetingEn && (
                    <div className="bg-slate-50 rounded-lg p-3 border border-slate-200">
                      <p className="text-sm text-slate-700 italic leading-relaxed">
                        "{holiday.greetingEn}"
                      </p>
                    </div>
                  )}
                  {holiday.greetingZh && (
                    <div className="bg-slate-50 rounded-lg p-3 border border-slate-200">
                      <p className="text-sm text-slate-700 leading-relaxed">
                        "{holiday.greetingZh}"
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default HolidayCard;
