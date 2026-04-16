import React from 'react';
import { 
  LayoutGrid, 
  Server, 
  Globe, 
  FileText, 
  CreditCard, 
  ShoppingCart, 
  MessageSquare, 
  Info, 
  Users, 
  LogOut 
} from 'lucide-react';
import { cn } from '@/src/lib/utils';

const SidebarSection = ({ label, children }: { label: string; children: React.ReactNode }) => (
  <div className="mb-1">
    <div className="text-[10px] font-semibold text-text-muted uppercase tracking-widest px-2 mb-1.5">
      {label}
    </div>
    {children}
  </div>
);

const SidebarLink = ({ 
  icon: Icon, 
  label, 
  active, 
  badge, 
  badgeColor = 'purple' 
}: { 
  icon: any; 
  label: string; 
  active?: boolean; 
  badge?: string | number;
  badgeColor?: 'purple' | 'red';
}) => (
  <div className={cn(
    "flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-text-secondary cursor-pointer transition-all hover:text-text-primary hover:bg-white/5 text-[13px] relative",
    active && "text-accent-hover bg-accent-muted before:content-[''] before:absolute before:left-0 before:top-1.5 before:bottom-1.5 before:w-0.5 before:rounded-full before:bg-accent"
  )}>
    <Icon className={cn("w-4 h-4 shrink-0 opacity-70", active && "opacity-100")} />
    {label}
    {badge !== undefined && (
      <span className={cn(
        "ml-auto text-[10px] font-semibold px-1.5 py-0.5 rounded-full",
        badgeColor === 'purple' ? "bg-accent-muted text-accent-hover" : "bg-red-500/10 text-red-400"
      )}>
        {badge}
      </span>
    )}
  </div>
);

export const Sidebar = () => {
  return (
    <aside className="fixed top-14 left-0 bottom-0 w-60 bg-bg-secondary border-r border-border-subtle p-5 px-3 overflow-y-auto flex flex-col gap-1.5">
      <div className="bg-bg-tertiary border border-border-subtle rounded-xl p-3.5 mb-4">
        <div className="flex items-center gap-2.5 mb-3">
          <div className="w-9.5 h-9.5 rounded-lg bg-accent-muted flex items-center justify-center text-[13px] font-semibold text-accent-hover">
            DS
          </div>
          <div>
            <div className="text-[13px] font-medium text-text-primary">dev sha</div>
            <div className="text-[11px] text-text-muted mt-0.5 flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_0_2px_rgba(34,197,94,0.2)]" />
              Nepal
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-1.5 mb-3">
          {[
            { label: 'Account', value: 'Free' },
            { label: 'Since', value: '2026' },
            { label: 'City', value: 'Ktm' },
            { label: 'ZIP', value: '44600' },
          ].map(item => (
            <div key={item.label} className="bg-white/[0.03] rounded-md p-1.5 px-2">
              <div className="text-[10px] text-text-muted mb-0.5">{item.label}</div>
              <div className="text-[12px] text-text-secondary font-medium">{item.value}</div>
            </div>
          ))}
        </div>
        <button className="w-full py-1.5 bg-accent-muted border border-accent/25 text-accent-hover rounded-lg text-[12px] font-medium cursor-pointer transition-all hover:bg-accent/20">
          Edit Profile
        </button>
      </div>

      <SidebarSection label="Main">
        <SidebarLink icon={LayoutGrid} label="Dashboard" active />
        <SidebarLink icon={Server} label="My Services" badge={0} />
        <SidebarLink icon={Globe} label="Domains" badge={0} />
      </SidebarSection>

      <div className="h-px bg-border-subtle my-2" />

      <SidebarSection label="Billing">
        <SidebarLink icon={FileText} label="Invoices" />
        <SidebarLink icon={CreditCard} label="Payment Methods" />
        <SidebarLink icon={ShoppingCart} label="Order Services" />
      </SidebarSection>

      <div className="h-px bg-border-subtle my-2" />

      <SidebarSection label="Support">
        <SidebarLink icon={MessageSquare} label="Support Tickets" badge={0} badgeColor="red" />
        <SidebarLink icon={Info} label="Knowledgebase" />
        <SidebarLink icon={Users} label="Contacts" />
      </SidebarSection>

      <div className="h-px bg-border-subtle my-2" />

      <div className="mt-auto flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-red-400 cursor-pointer transition-all hover:bg-white/5 text-[13px]">
        <LogOut className="w-4 h-4 shrink-0" />
        Logout
      </div>
    </aside>
  );
};
