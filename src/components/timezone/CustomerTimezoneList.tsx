"use client";

import React, { useState, useEffect } from 'react';
import { Users, Plus, Trash2, Clock, Building2, StickyNote, X } from 'lucide-react';
import { useCustomers } from '@/hooks/useCustomers';
import { getTimezoneById } from '@/data/timezones';
import { getTimeNowInTimezone, formatTime } from '@/utils/timezone';
import TimezoneSelector from './TimezoneSelector';
import { clsx } from 'clsx';

export default function CustomerTimezoneList() {
  const { customers, addCustomer, removeCustomer, isLoaded } = useCustomers();
  const [showAddForm, setShowAddForm] = useState(false);
  const [newCustomer, setNewCustomer] = useState({
    name: '',
    timezoneId: '',
    country: '',
    notes: ''
  });
  const [currentTimes, setCurrentTimes] = useState<Record<string, string>>({});

  // Update times every second
  useEffect(() => {
    const updateTimes = () => {
      const times: Record<string, string> = {};
      customers.forEach(customer => {
        const tz = getTimezoneById(customer.timezoneId);
        if (tz) {
          const time = getTimeNowInTimezone(tz.id);
          times[customer.id] = formatTime(time.hour, time.minute);
        }
      });
      setCurrentTimes(times);
    };

    updateTimes();
    const interval = setInterval(updateTimes, 1000);
    return () => clearInterval(interval);
  }, [customers]);

  const handleAddCustomer = () => {
    if (newCustomer.name && newCustomer.timezoneId) {
      const tz = getTimezoneById(newCustomer.timezoneId);
      addCustomer({
        name: newCustomer.name,
        timezoneId: newCustomer.timezoneId,
        country: tz?.countryName || '',
        notes: newCustomer.notes
      });
      setNewCustomer({ name: '', timezoneId: '', country: '', notes: '' });
      setShowAddForm(false);
    }
  };

  if (!isLoaded) {
    return (
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-tech border border-blue-100/50 p-6">
        <div className="animate-pulse space-y-4">
          <div className="h-6 bg-slate-200 rounded w-1/3"></div>
          <div className="h-20 bg-slate-200 rounded"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-tech border border-blue-100/50 p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-bold text-slate-800 flex items-center gap-2">
          <Users size={20} className="text-blue-600" />
          客户时区管理
          <span className="text-xs font-normal text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full">
            {customers.length} 个客户
          </span>
        </h2>
        <button
          onClick={() => setShowAddForm(true)}
          className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl font-semibold hover:shadow-tech transition-all text-sm"
        >
          <Plus size={16} />
          添加客户
        </button>
      </div>

      {/* Add Customer Form Modal */}
      {showAddForm && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[100] p-4">
          <div
            className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-hidden flex flex-col"
            onClick={e => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 pb-0">
              <h3 className="text-lg font-bold text-slate-800">添加客户</h3>
              <button
                onClick={() => setShowAddForm(false)}
                className="p-2 hover:bg-slate-100 rounded-full transition-colors"
              >
                <X size={20} className="text-slate-500" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 overflow-y-auto flex-1">
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-semibold text-slate-600 block mb-2">
                    客户/公司名称 *
                  </label>
                  <input
                    type="text"
                    value={newCustomer.name}
                    onChange={e => setNewCustomer({ ...newCustomer, name: e.target.value })}
                    placeholder="例如：ABC Trading Co."
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="text-sm font-semibold text-slate-600 block mb-2">
                    客户时区 *
                  </label>
                  <TimezoneSelector
                    value={newCustomer.timezoneId}
                    onChange={timezoneId => setNewCustomer({ ...newCustomer, timezoneId })}
                    placeholder="选择客户所在时区"
                  />
                </div>

                <div>
                  <label className="text-sm font-semibold text-slate-600 block mb-2">
                    备注（可选）
                  </label>
                  <textarea
                    value={newCustomer.notes}
                    onChange={e => setNewCustomer({ ...newCustomer, notes: e.target.value })}
                    placeholder="例如：主要联系人 John，偏好早上沟通"
                    rows={2}
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 resize-none"
                  />
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="flex gap-3 p-6 pt-0 border-t border-slate-100 mt-2">
              <button
                onClick={() => setShowAddForm(false)}
                className="flex-1 px-4 py-3 border border-slate-200 rounded-xl font-semibold text-slate-600 hover:bg-slate-50 transition-colors"
              >
                取消
              </button>
              <button
                onClick={handleAddCustomer}
                disabled={!newCustomer.name || !newCustomer.timezoneId}
                className="flex-1 px-4 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-tech transition-all"
              >
                添加
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Customer List */}
      {customers.length > 0 ? (
        <div className="space-y-3">
          {customers.map(customer => {
            const tz = getTimezoneById(customer.timezoneId);
            return (
              <div
                key={customer.id}
                className="flex items-center justify-between p-4 bg-slate-50 rounded-xl hover:bg-blue-50/50 transition-colors group"
              >
                <div className="flex items-center gap-4">
                  <div className="text-2xl">
                    {tz ? getFlagEmoji(tz.countryCode) : '🌍'}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <Building2 size={14} className="text-slate-400" />
                      <span className="font-bold text-slate-800">{customer.name}</span>
                    </div>
                    {tz && (
                      <div className="text-sm text-slate-500">
                        {tz.countryName} - {tz.cityName}
                        <span className="text-xs ml-2 text-slate-400">{tz.utcOffsetStr}</span>
                      </div>
                    )}
                    {customer.notes && (
                      <div className="flex items-center gap-1 text-xs text-slate-400 mt-1">
                        <StickyNote size={10} />
                        {customer.notes}
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  {/* Current Time */}
                  <div className="text-right">
                    <div className="text-xs text-slate-500 flex items-center gap-1">
                      <Clock size={10} />
                      当前时间
                    </div>
                    <div className="text-xl font-bold font-mono text-blue-700">
                      {currentTimes[customer.id] || '--:--'}
                    </div>
                  </div>

                  {/* Delete Button */}
                  <button
                    onClick={() => removeCustomer(customer.id)}
                    className="p-2 opacity-0 group-hover:opacity-100 hover:bg-red-100 rounded-lg transition-all"
                    title="删除客户"
                  >
                    <Trash2 size={16} className="text-red-500" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="text-center py-12 bg-slate-50 rounded-xl border-2 border-dashed border-slate-200">
          <Users size={48} className="mx-auto text-slate-300 mb-4" />
          <h3 className="text-lg font-bold text-slate-600 mb-2">还没有保存的客户</h3>
          <p className="text-sm text-slate-500 mb-4">
            添加客户后，可以快速查看他们当前的时间
          </p>
          <button
            onClick={() => setShowAddForm(true)}
            className="px-6 py-2.5 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl font-semibold hover:shadow-tech transition-all inline-flex items-center gap-2"
          >
            <Plus size={16} />
            添加第一个客户
          </button>
        </div>
      )}
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
