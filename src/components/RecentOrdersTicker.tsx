import React, { useState, useEffect } from 'react';
import { CheckCircle2, ShieldCheck, X, Sparkles, Gamepad2, ShoppingBag } from 'lucide-react';

interface RecentOrder {
  id: string;
  customerName: string;
  city: string;
  item: string;
  price: number;
  timeAgo: string;
}

const RECENT_ORDERS: RecentOrder[] = [
  {
    id: 'ord-1',
    customerName: 'Aman S.',
    city: 'New Delhi',
    item: 'Steam Unlock Bundle (Personal Steam Access)',
    price: 449,
    timeAgo: '2m ago'
  },
  {
    id: 'ord-1b',
    customerName: 'Kunal D.',
    city: 'Bangalore',
    item: 'Basic Gaming Bundle (1,000 Games)',
    price: 399,
    timeAgo: '4m ago'
  },
  {
    id: 'ord-2',
    customerName: 'Rohan M.',
    city: 'Mumbai',
    item: 'Add 5 Games to Personal Steam',
    price: 349,
    timeAgo: '5m ago'
  },
  {
    id: 'ord-3',
    customerName: 'Karthik R.',
    city: 'Bengaluru',
    item: 'Add 2 Games to Personal Steam',
    price: 199,
    timeAgo: '9m ago'
  },
  {
    id: 'ord-4',
    customerName: 'Varun P.',
    city: 'Pune',
    item: 'Grand Theft Auto V (Steam ID & Pass)',
    price: 80,
    timeAgo: '11m ago'
  },
  {
    id: 'ord-4b',
    customerName: 'Dhruv M.',
    city: 'Noida',
    item: 'Resident Evil 4 Remake (Steam ID & Pass)',
    price: 80,
    timeAgo: '14m ago'
  },
  {
    id: 'ord-5',
    customerName: 'Sneha K.',
    city: 'Kolkata',
    item: 'Basic Gaming Bundle (Steam Unlock)',
    price: 399,
    timeAgo: '18m ago'
  },
  {
    id: 'ord-6',
    customerName: 'Aditya N.',
    city: 'Hyderabad',
    item: 'Add 3 Games to Personal Steam',
    price: 249,
    timeAgo: '23m ago'
  },
  {
    id: 'ord-7',
    customerName: 'Harsh V.',
    city: 'Ahmedabad',
    item: 'Add 1 Game to Personal Steam',
    price: 120,
    timeAgo: '29m ago'
  },
  {
    id: 'ord-8',
    customerName: 'Manish T.',
    city: 'Jaipur',
    item: 'Mega Gaming Bundle (27,000 Games)',
    price: 799,
    timeAgo: '35m ago'
  }
];

export const RecentOrdersTicker: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const [dismissed, setDismissed] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (dismissed) return;

    const interval = setInterval(() => {
      if (!isPaused) {
        // Fade out slightly then switch
        setVisible(false);
        setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % RECENT_ORDERS.length);
          setVisible(true);
        }, 300);
      }
    }, 7500);

    return () => clearInterval(interval);
  }, [isPaused, dismissed]);

  if (dismissed) return null;

  const currentOrder = RECENT_ORDERS[currentIndex];

  return (
    <aside
      aria-label="Recent customer orders"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className={`fixed bottom-20 md:bottom-6 left-3 sm:left-6 z-25 max-w-[340px] sm:max-w-[360px] w-full transition-all duration-300 pointer-events-auto ${
        visible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-2 scale-95'
      }`}
    >
      <div className="glass-panel p-3.5 rounded-2xl border border-amber-500/35 bg-[#090d19]/95 backdrop-blur-xl shadow-[0_12px_35px_rgba(0,0,0,0.8),0_0_20px_rgba(245,158,11,0.2)] flex items-start gap-3 relative group">
        
        {/* Animated icon indicator */}
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500/25 to-orange-500/10 border border-amber-500/40 flex items-center justify-center text-amber-400 shrink-0 mt-0.5 shadow-inner">
          <ShoppingBag className="w-5 h-5 text-amber-400 animate-pulse" />
        </div>

        {/* Order details */}
        <div className="flex-1 min-w-0 pr-4">
          <div className="flex items-center gap-1.5 mb-0.5">
            <span className="text-xs font-bold text-white font-gaming tracking-wide truncate">
              {currentOrder.customerName}
            </span>
            <span className="text-[10px] text-slate-400">
              from {currentOrder.city}
            </span>
          </div>

          <div className="text-xs font-semibold text-amber-300 truncate mb-1">
            {currentOrder.item}
          </div>

          <div className="flex items-center gap-2 text-[10px]">
            <span className="font-extrabold text-white font-gaming">
              ₹{currentOrder.price}
            </span>
            <span className="text-slate-500">•</span>
            <span className="text-emerald-400 font-semibold flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3 text-emerald-400" />
              <span>Verified UPI</span>
            </span>
            <span className="text-slate-500">•</span>
            <span className="text-slate-400">
              {currentOrder.timeAgo}
            </span>
          </div>
        </div>

        {/* Dismiss Button */}
        <button
          type="button"
          onClick={() => setDismissed(true)}
          className="absolute top-2.5 right-2.5 p-1 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          aria-label="Dismiss recent orders ticker"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </aside>
  );
};
