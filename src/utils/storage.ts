/**
 * localStorage 工具函数
 * 用于管理节假日收藏功能
 */

const FAVORITES_KEY = 'holiday_favorites';

/**
 * 获取所有收藏的节假日 ID
 */
export function getFavorites(): string[] {
  if (typeof window === 'undefined') return [];

  try {
    const data = localStorage.getItem(FAVORITES_KEY);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error('读取收藏数据失败:', error);
    return [];
  }
}

/**
 * 保存收藏的节假日 ID 列表
 */
export function setFavorites(ids: string[]): void {
  if (typeof window === 'undefined') return;

  try {
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(ids));
  } catch (error) {
    console.error('保存收藏数据失败:', error);
  }
}

/**
 * 添加或移除收藏
 * @param id 节假日 ID
 * @returns 更新后的收藏列表
 */
export function toggleFavorite(id: string): string[] {
  const favorites = getFavorites();
  const newFavorites = favorites.includes(id)
    ? favorites.filter(fid => fid !== id)
    : [...favorites, id];

  setFavorites(newFavorites);
  return newFavorites;
}

/**
 * 检查是否已收藏
 */
export function isFavorited(id: string): boolean {
  return getFavorites().includes(id);
}

/**
 * 清空所有收藏
 */
export function clearFavorites(): void {
  if (typeof window === 'undefined') return;

  try {
    localStorage.removeItem(FAVORITES_KEY);
  } catch (error) {
    console.error('清空收藏数据失败:', error);
  }
}

/**
 * 获取收藏数量
 */
export function getFavoritesCount(): number {
  return getFavorites().length;
}
