import React from 'react';
import { Heart } from 'lucide-react';
import { clsx } from 'clsx';

interface FavoriteButtonProps {
  holidayId: string;
  isFavorite: boolean;
  onToggle: (id: string) => void;
  size?: 'sm' | 'md' | 'lg';
}

const FavoriteButton: React.FC<FavoriteButtonProps> = ({
  holidayId,
  isFavorite,
  onToggle,
  size = 'md'
}) => {
  const sizeClasses = {
    sm: 'p-1.5',
    md: 'p-2',
    lg: 'p-2.5'
  };

  const iconSizes = {
    sm: 16,
    md: 20,
    lg: 24
  };

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // 防止触发父元素的点击事件
    onToggle(holidayId);
  };

  return (
    <button
      onClick={handleClick}
      className={clsx(
        'rounded-full transition-all duration-200',
        sizeClasses[size],
        isFavorite
          ? 'bg-red-50 text-red-500 hover:bg-red-100 hover:scale-110'
          : 'bg-slate-50 text-slate-400 hover:bg-red-50 hover:text-red-500 hover:scale-110'
      )}
      aria-label={isFavorite ? '取消收藏' : '收藏'}
      title={isFavorite ? '取消收藏' : '收藏此节假日'}
    >
      <Heart
        size={iconSizes[size]}
        fill={isFavorite ? 'currentColor' : 'none'}
        className="transition-all"
      />
    </button>
  );
};

export default FavoriteButton;
