import React from 'react';
import { Search, Bell, Grid, ChevronDown } from 'lucide-react';
import { cn } from '@/src/lib/utils';

export const Topbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 h-14 glass flex items-center px-6 gap-5 z-50">
      <div className="flex items-center gap-2.5 min-w-[240px] pr-4">
        <div className="w-7 h-7 rounded-lg bg-accent flex items-center justify-center">
          <svg className="w-3.5 h-3.5 fill-white" viewBox="0 0 14 14">
            <path d="M7 1L1 4v6l6 3 6-3V4L7 1z" />
          </svg>
        </div>
        <div className="text-[15px] font-semibold tracking-tight text-text-primary">
          Nexus<span className="text-accent-hover">Host</span>
        </div>
      </div>

      <nav className="flex items-center gap-0.5 flex-1">
        {['Home', 'Services', 'Domains', 'Billing', 'Support', 'Open Ticket'].map((item, idx) => (
          <div
            key={item}
            className={cn(
              "relative px-3 py-1.5 text-[13px] text-text-secondary rounded-lg cursor-pointer transition-all hover:text-text-primary hover:bg-white/5 flex items-center gap-1 whitespace-nowrap",
              idx === 0 && "text-text-primary bg-white/5"
            )}
          >
            {item}
            {['Services', 'Domains', 'Billing', 'Support'].includes(item) && (
              <ChevronDown className="w-2.5 h-2.5 opacity-50" />
            )}
          </div>
        ))}
      </nav>

      <div className="flex items-center gap-2.5 ml-auto">
        <div className="flex items-center gap-2 bg-bg-tertiary border border-border-subtle rounded-lg px-3 py-1.5 w-48 transition-all focus-within:border-accent focus-within:w-60">
          <Search className="w-3.5 h-3.5 text-text-muted shrink-0" />
          <input
            placeholder="Search knowledgebase..."
            className="bg-transparent border-none outline-none text-text-primary text-[13px] w-full placeholder:text-text-muted"
          />
        </div>

        <button className="w-8.5 h-8.5 rounded-lg bg-bg-tertiary border border-border-subtle flex items-center justify-center cursor-pointer text-text-secondary transition-all hover:border-border-medium hover:text-text-primary relative">
          <Bell className="w-3.5 h-3.5" />
          <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-accent border-[1.5px] border-bg" />
        </button>

        <button className="w-8.5 h-8.5 rounded-lg bg-bg-tertiary border border-border-subtle flex items-center justify-center cursor-pointer text-text-secondary transition-all hover:border-border-medium hover:text-text-primary">
          <Grid className="w-3.5 h-3.5" />
        </button>

        <div className="flex items-center gap-2 bg-bg-tertiary border border-border-subtle rounded-lg p-1 pr-2.5 cursor-pointer transition-all hover:border-border-medium">
          <div className="w-6.5 h-6.5 rounded-md bg-accent-muted flex items-center justify-center text-[11px] font-semibold text-accent-hover">
            DS
          </div>
          <span className="text-[12px] text-text-secondary">dev sha</span>
          <ChevronDown className="w-2.5 h-2.5 text-text-muted" />
        </div>
      </div>
    </header>
  );
};
