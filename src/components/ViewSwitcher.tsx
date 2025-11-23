import React from 'react';
import { List, Calendar, CalendarDays } from 'lucide-react';
import { clsx } from 'clsx';

export type ViewMode = 'list' | 'month' | 'year';

interface ViewSwitcherProps {
  currentView: ViewMode;
  onViewChange: (view: ViewMode) => void;
}

const ViewSwitcher: React.FC<ViewSwitcherProps> = ({
  currentView,
  onViewChange
}) => {
  const views: { mode: ViewMode; icon: React.ReactNode; label: string }[] = [
    { mode: 'list', icon: <List size={18} />, label: '列表' },
    { mode: 'month', icon: <Calendar size={18} />, label: '月历' },
    { mode: 'year', icon: <CalendarDays size={18} />, label: '年历' }
  ];

  return (
    <div className="flex w-full md:inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm rounded-xl border-2 border-blue-100 p-1.5 shadow-sm">
      {views.map(({ mode, icon, label }) => (
        <button
          key={mode}
          onClick={() => onViewChange(mode)}
          className={clsx(
            'flex flex-1 md:flex-initial items-center justify-center gap-2 px-4 py-2 rounded-lg font-semibold text-sm transition-all',
            currentView === mode
              ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-md'
              : 'text-slate-600 hover:bg-blue-50 hover:text-blue-600'
          )}
        >
          {icon}
          <span>{label}</span>
        </button>
      ))}
    </div>
  );
};

export default ViewSwitcher;
