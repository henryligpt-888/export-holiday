import { useState, useEffect, useCallback } from 'react';
import { getFavorites, toggleFavorite as toggleFavoriteInStorage } from '@/utils/storage';

/**
 * 收藏功能 Hook
 * 管理节假日的收藏状态
 */
export function useFavorites() {
  const [favorites, setFavorites] = useState<string[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // 初始化：从 localStorage 读取收藏数据
  useEffect(() => {
    const loadedFavorites = getFavorites();
    setFavorites(loadedFavorites);
    setIsLoaded(true);
  }, []);

  /**
   * 切换收藏状态
   * @param id 节假日 ID
   */
  const toggleFavorite = useCallback((id: string) => {
    const newFavorites = toggleFavoriteInStorage(id);
    setFavorites(newFavorites);

    // 显示提示消息（可选）
    const isFavorited = newFavorites.includes(id);
    console.log(isFavorited ? `已收藏` : `已取消收藏`);
  }, []);

  /**
   * 检查是否已收藏
   * @param id 节假日 ID
   */
  const isFavorite = useCallback(
    (id: string) => favorites.includes(id),
    [favorites]
  );

  /**
   * 获取收藏数量
   */
  const favoritesCount = favorites.length;

  return {
    favorites,
    toggleFavorite,
    isFavorite,
    favoritesCount,
    isLoaded
  };
}
