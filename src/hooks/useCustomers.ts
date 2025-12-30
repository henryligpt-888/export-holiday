import { useState, useEffect, useCallback } from 'react';
import { SavedCustomer } from '@/types/timezone';

const CUSTOMERS_STORAGE_KEY = 'trade_toolbox_customers';

export function useCustomers() {
  const [customers, setCustomers] = useState<SavedCustomer[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load from localStorage
  useEffect(() => {
    if (typeof window === 'undefined') return;

    try {
      const stored = localStorage.getItem(CUSTOMERS_STORAGE_KEY);
      if (stored) {
        setCustomers(JSON.parse(stored));
      }
    } catch (error) {
      console.error('Failed to load customers:', error);
    }
    setIsLoaded(true);
  }, []);

  // Save to localStorage
  const saveCustomers = useCallback((newCustomers: SavedCustomer[]) => {
    setCustomers(newCustomers);
    if (typeof window !== 'undefined') {
      localStorage.setItem(CUSTOMERS_STORAGE_KEY, JSON.stringify(newCustomers));
    }
  }, []);

  // Add customer
  const addCustomer = useCallback((customer: Omit<SavedCustomer, 'id' | 'createdAt'>) => {
    const newCustomer: SavedCustomer = {
      ...customer,
      id: Date.now().toString(),
      createdAt: new Date().toISOString()
    };
    saveCustomers([...customers, newCustomer]);
    return newCustomer;
  }, [customers, saveCustomers]);

  // Remove customer
  const removeCustomer = useCallback((id: string) => {
    saveCustomers(customers.filter(c => c.id !== id));
  }, [customers, saveCustomers]);

  // Update customer
  const updateCustomer = useCallback((id: string, updates: Partial<SavedCustomer>) => {
    saveCustomers(
      customers.map(c => c.id === id ? { ...c, ...updates } : c)
    );
  }, [customers, saveCustomers]);

  // Get customer by ID
  const getCustomer = useCallback((id: string) => {
    return customers.find(c => c.id === id);
  }, [customers]);

  return {
    customers,
    isLoaded,
    addCustomer,
    removeCustomer,
    updateCustomer,
    getCustomer,
    customersCount: customers.length
  };
}
