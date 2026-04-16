import React from 'react';
import { 
  Server, 
  Globe, 
  MessageSquare, 
  FileText, 
  LayoutGrid, 
  Plus, 
  ExternalLink,
  Search,
  PlusCircle,
  CreditCard,
  UserPlus,
  User
} from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '@/src/lib/utils';

const StatCard = ({ 
  icon: Icon, 
  label, 
  value, 
  status, 
  statusType, 
  colorClass 
}: { 
  icon: any; 
  label: string; 
  value: string | number; 
  status: string;
  statusType: 'info' | 'active' | 'pending' | 'error';
  colorClass: string;
}) => {
  const statusColors = {
    info: "bg-blue-500/10 text-blue-400",
    active: "bg-green-500/10 text-green-400",
    pending: "bg-amber-500/10 text-amber-400",
    error: "bg-red-500/10 text-red-400"
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      className={cn(
        "bg-bg-secondary border border-border-subtle rounded-xl p-4.5 relative overflow-hidden cursor-pointer transition-all hover:border-border-medium hover:-translate-y-0.5 group",
        colorClass
      )}
    >
      <div className="flex items-center justify-between mb-3.5 relative z-10">
        <div className={cn("w-8.5 h-8.5 rounded-lg flex items-center justify-center bg-white/5")}>
          <Icon className="w-4 h-4" />
        </div>
        <span className={cn("text-[11px] font-medium px-2 py-0.5 rounded-full flex items-center gap-1.5 before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full before:bg-current", statusColors[statusType])}>
          {status}
        </span>
      </div>
      <div className="text-[28px] font-semibold tracking-tight mb-0.5 relative z-10">{value}</div>
      <div className="text-[12px] text-text-muted relative z-10">{label}</div>
    </motion.div>
  );
};

const Panel = ({ title, icon: Icon, action, children, className }: any) => (
  <motion.div 
    initial={{ opacity: 0, y: 8 }}
    animate={{ opacity: 1, y: 0 }}
    className={cn("bg-bg-secondary border border-border-subtle rounded-xl overflow-hidden", className)}
  >
    <div className="flex items-center justify-between px-4.5 py-4 border-b border-border-subtle">
      <div className="text-[13px] font-medium text-text-primary flex items-center gap-2">
        <Icon className="w-3.5 h-3.5 text-text-muted" />
        {title}
      </div>
      {action && (
        <button className="text-[12px] text-accent-hover bg-accent-muted px-2.5 py-1 rounded-lg font-medium transition-all hover:bg-accent/20">
          {action}
        </button>
      )}
    </div>
    <div className="p-4.5">
      {children}
    </div>
  </motion.div>
);

const EmptyState = ({ icon: Icon, title, desc, cta }: any) => (
  <div className="flex flex-col items-center justify-center py-8 px-5 text-center">
    <div className="w-13 h-13 rounded-xl bg-white/[0.03] border border-border-subtle flex items-center justify-center mb-3.5">
      <Icon className="w-5.5 h-5.5 text-text-muted" />
    </div>
    <div className="text-[13px] font-medium text-text-secondary mb-1.5">{title}</div>
    <div className="text-[12px] text-text-muted leading-relaxed mb-3.5" dangerouslySetInnerHTML={{ __html: desc }} />
    <button className="text-[12px] text-accent-hover bg-accent-muted border border-accent/20 px-3.5 py-1.5 rounded-lg font-medium transition-all hover:bg-accent/20">
      {cta}
    </button>
  </div>
);

export const Dashboard = () => {
  return (
    <main className="ml-60 p-7 pt-21 min-w-0">
      <div className="flex items-center gap-1.5 text-[12px] text-text-muted mb-5">
        <a className="text-accent-hover cursor-pointer">Portal Home</a>
        <span className="opacity-40">/</span>
        <span className="text-text-secondary">Client Area</span>
      </div>

      <div className="mb-7">
        <h1 className="text-[22px] font-semibold tracking-tight text-text-primary mb-1">
          Welcome back, <span className="text-accent-hover">dev sha</span> 👋
        </h1>
        <p className="text-[13px] text-text-muted">Here's an overview of your account — everything looks good.</p>
      </div>

      <div className="grid grid-cols-4 gap-3 mb-6">
        <StatCard 
          icon={Server} 
          label="Services" 
          value="0" 
          status="Active" 
          statusType="info" 
          colorClass="card-gradient-purple" 
        />
        <StatCard 
          icon={Globe} 
          label="Domains" 
          value="0" 
          status="Live" 
          statusType="active" 
          colorClass="card-gradient-green" 
        />
        <StatCard 
          icon={MessageSquare} 
          label="Tickets" 
          value="0" 
          status="Open" 
          statusType="pending" 
          colorClass="card-gradient-amber" 
        />
        <StatCard 
          icon={FileText} 
          label="Invoices" 
          value="0" 
          status="Due" 
          statusType="error" 
          colorClass="card-gradient-red" 
        />
      </div>

      <div className="grid grid-cols-[1fr_340px] gap-4 mb-4">
        <Panel title="Active Products & Services" icon={Server} action="My Services →">
          <EmptyState 
            icon={LayoutGrid} 
            title="No active products yet" 
            desc="You don't have any services with us yet.<br/>Get started by placing your first order." 
            cta="Place an order →" 
          />
        </Panel>

        <Panel title="Register a Domain" icon={Globe} className="bg-bg-secondary">
          <div className="text-[12px] text-text-muted mb-3.5 leading-relaxed">
            Search millions of available domain names and register the perfect one for your project.
          </div>
          <div className="relative mb-2.5">
            <input 
              placeholder="yourdomain.com" 
              className="w-full bg-bg-tertiary border border-border-subtle rounded-lg px-3 py-2.5 text-text-primary text-[13px] outline-none transition-all focus:border-accent focus:bg-accent/5"
            />
          </div>
          <div className="grid grid-cols-2 gap-2">
            <button className="py-2 bg-accent text-white rounded-lg text-[12px] font-medium transition-all hover:bg-accent-hover">Search</button>
            <button className="py-2 bg-transparent border border-border-medium text-text-secondary rounded-lg text-[12px] font-medium transition-all hover:bg-white/5 hover:text-text-primary">Transfer</button>
          </div>
          <div className="flex flex-wrap gap-1.5 mt-3">
            {['.com', '.net', '.io', '.dev', '.org', '.app'].map(tld => (
              <span key={tld} className="text-[11px] px-2 py-1 rounded-md bg-white/5 border border-border-subtle text-text-muted cursor-pointer transition-all hover:border-border-medium hover:text-text-secondary font-mono">
                {tld}
              </span>
            ))}
          </div>
        </Panel>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <Panel title="Recent Tickets" icon={MessageSquare} action="+ New Ticket">
          <EmptyState 
            icon={MessageSquare} 
            title="No tickets found" 
            desc="Need help? Our team is here for you." 
            cta="Open a ticket" 
          />
        </Panel>

        <Panel title="Recent News" icon={FileText} action="View All →">
          <div className="space-y-0">
            {[
              { title: 'Welcome to NexusHost!', date: '16 Apr 2026', color: 'bg-accent' },
              { title: 'Scheduled maintenance: 20 Apr 2026', date: '14 Apr 2026', color: 'bg-green-500' },
              { title: 'New .app domains now available', date: '10 Apr 2026', color: 'bg-amber-500' },
            ].map((item, idx) => (
              <div key={idx} className={cn("py-3 flex items-start gap-2.5 border-b border-border-subtle last:border-0 last:pb-0 first:pt-0")}>
                <div className={cn("w-1.5 h-1.5 rounded-full mt-1.5 shrink-0", item.color)} />
                <div>
                  <div className="text-[13px] text-text-primary mb-1 leading-relaxed">{item.title}</div>
                  <div className="text-[11px] text-text-muted font-mono">{item.date}</div>
                </div>
              </div>
            ))}
          </div>
        </Panel>

        <Panel title="Quick Actions" icon={Plus}>
          <div className="grid grid-cols-3 gap-2">
            {[
              { icon: LayoutGrid, label: 'Order Services', bg: 'bg-accent-muted', iconColor: 'text-accent-hover' },
              { icon: Globe, label: 'New Domain', bg: 'bg-green-500/10', iconColor: 'text-green-400' },
              { icon: MessageSquare, label: 'Open Ticket', bg: 'bg-amber-500/10', iconColor: 'text-amber-400' },
              { icon: CreditCard, label: 'Pay Invoice', bg: 'bg-red-500/10', iconColor: 'text-red-400' },
              { icon: UserPlus, label: 'Add Contact', bg: 'bg-blue-500/10', iconColor: 'text-blue-400' },
              { icon: User, label: 'Edit Profile', bg: 'bg-white/5', iconColor: 'text-text-secondary' },
            ].map((action, idx) => (
              <button key={idx} className="bg-white/[0.02] border border-border-subtle rounded-lg p-3 flex flex-col items-center gap-2 cursor-pointer transition-all hover:bg-white/5 hover:border-border-medium hover:-translate-y-0.5 text-center">
                <div className={cn("w-8 h-8 rounded-lg flex items-center justify-center", action.bg)}>
                  <action.icon className={cn("w-4 h-4", action.iconColor)} />
                </div>
                <div className="text-[11px] text-text-secondary font-medium leading-tight">{action.label}</div>
              </button>
            ))}
          </div>
        </Panel>
      </div>

      <footer className="flex items-center justify-between pt-6 border-t border-border-subtle mt-8">
        <div className="text-[12px] text-text-muted">© 2026 NexusHost. Powered by WHMCS.</div>
        <div className="flex items-center gap-4">
          {['Privacy Policy', 'Terms of Service', 'Contact Us'].map(link => (
            <span key={link} className="text-[12px] text-text-muted cursor-pointer transition-colors hover:text-text-secondary">{link}</span>
          ))}
          <div className="flex items-center gap-1.5 text-[12px] text-text-muted bg-bg-tertiary border border-border-subtle rounded-lg px-2.5 py-1 cursor-pointer">
            🇺🇸 English / $ USD
          </div>
        </div>
      </footer>
    </main>
  );
};
