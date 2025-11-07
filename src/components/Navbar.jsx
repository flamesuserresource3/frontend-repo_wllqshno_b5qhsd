import React from 'react';
import { Newspaper, User } from 'lucide-react';

export default function Navbar({ onLoginClick }) {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/90 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="inline-flex items-center justify-center rounded-lg bg-slate-900 text-white w-9 h-9 shadow-sm">
            <Newspaper size={18} />
          </div>
          <span className="font-semibold text-slate-900 tracking-tight">FlashNews</span>
        </div>
        <button
          onClick={onLoginClick}
          className="inline-flex items-center gap-2 rounded-md border border-slate-300 bg-white px-3 py-1.5 text-sm font-medium text-slate-700 shadow-sm hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-400/50"
        >
          <User size={16} />
          Login
        </button>
      </div>
    </header>
  );
}
