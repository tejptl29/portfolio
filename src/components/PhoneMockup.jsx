import { motion } from "framer-motion";
import { SiFlutter, SiFirebase, SiDart } from "react-icons/si";
import {
  MdWifi, MdBatteryFull, MdSignalCellularAlt, MdCheckCircle,
  MdShoppingCart, MdQrCodeScanner, MdNotificationsActive,
  MdAutoAwesome, MdRestaurant, MdReceiptLong, MdSearch,
} from "react-icons/md";

export default function PhoneMockup({ type = "hero", className = "" }) {
  if (type === "hero") {
    return (
      <div className={`relative w-[290px] sm:w-[320px] rounded-[42px] p-3.5 bg-gradient-to-b from-dark-600 via-dark-700 to-dark-900 border-2 border-white/20 shadow-[0_25px_60px_rgba(0,0,0,0.8),0_0_35px_rgba(59,130,246,0.25)] ${className}`}>
        {/* Notch / Dynamic Island */}
        <div className="absolute top-6 left-1/2 -translate-x-1/2 w-28 h-5 bg-dark-900 rounded-full z-30 flex items-center justify-center gap-2 border border-white/10">
          <div className="w-2.5 h-2.5 rounded-full bg-dark-800 border border-white/20" />
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
        </div>

        {/* Screen Bezel */}
        <div className="relative rounded-[32px] overflow-hidden bg-dark-900 border border-white/10 p-4 pt-10 text-left font-body">
          {/* Status bar */}
          <div className="flex items-center justify-between text-[11px] font-mono text-gray-400 mb-3 px-1">
            <span>09:41</span>
            <div className="flex items-center gap-1.5">
              <MdSignalCellularAlt size={12} />
              <MdWifi size={12} />
              <MdBatteryFull size={13} />
            </div>
          </div>

          {/* App Bar */}
          <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-3">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg gradient-bg flex items-center justify-center shadow-md">
                <SiFlutter className="text-white text-xs" />
              </div>
              <div>
                <p className="text-xs font-semibold text-white leading-tight">FoodChow POS</p>
                <p className="text-[10px] text-emerald-400 font-mono flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  Table #04 · Active
                </p>
              </div>
            </div>
            <span className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-primary-500/20 text-primary-300 border border-primary-500/30">
              Hive Sync
            </span>
          </div>

          {/* Order Cards */}
          <div className="space-y-2 mb-3">
            <div className="p-2.5 rounded-xl bg-dark-800/90 border border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-orange-500/15 border border-orange-500/30 flex items-center justify-center text-orange-400 text-xs">
                  🍕
                </div>
                <div>
                  <p className="text-xs font-medium text-white">Farmhouse Special</p>
                  <p className="text-[10px] text-gray-400">Qty: 2 · Dine-in</p>
                </div>
              </div>
              <span className="text-xs font-bold font-mono text-primary-400">₹440</span>
            </div>

            <div className="p-2.5 rounded-xl bg-dark-800/90 border border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 text-xs">
                  🥗
                </div>
                <div>
                  <p className="text-xs font-medium text-white">Crispy Paneer Bowl</p>
                  <p className="text-[10px] text-gray-400">Qty: 1 · Spicy</p>
                </div>
              </div>
              <span className="text-xs font-bold font-mono text-primary-400">₹180</span>
            </div>
          </div>

          {/* Live POS calculation */}
          <div className="p-2.5 rounded-xl bg-gradient-to-br from-primary-900/30 to-accent-900/20 border border-primary-500/30 mb-3 space-y-1">
            <div className="flex justify-between text-[11px] text-gray-300">
              <span>Subtotal:</span>
              <span className="font-mono">₹620</span>
            </div>
            <div className="flex justify-between text-[11px] text-gray-400">
              <span>GST (5%):</span>
              <span className="font-mono">₹31</span>
            </div>
            <div className="flex justify-between text-xs font-bold text-white pt-1 border-t border-white/10">
              <span>Total Payable:</span>
              <span className="font-mono text-neon">₹651</span>
            </div>
          </div>

          {/* Action button */}
          <button className="w-full py-2.5 rounded-xl gradient-bg text-white text-xs font-semibold flex items-center justify-center gap-1.5 shadow-lg shadow-primary-500/30">
            <MdReceiptLong size={14} />
            Generate Bill & Sync
          </button>

          {/* Bottom App Nav */}
          <div className="flex justify-around pt-3 mt-3 border-t border-white/10 text-gray-400 text-[10px]">
            <span className="text-primary-400 font-medium">Orders</span>
            <span>Tables</span>
            <span>Menu</span>
            <span>Sync</span>
          </div>
        </div>
      </div>
    );
  }

  if (type === "kitchen") {
    return (
      <div className={`relative w-full max-w-[280px] mx-auto rounded-[32px] p-2.5 bg-dark-700 border border-white/15 shadow-2xl ${className}`}>
        <div className="rounded-[24px] bg-dark-900 p-3 pt-6 text-left border border-white/10 font-body">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-orange-500" />
              <span className="text-[11px] font-bold text-white">Kitchen Hive</span>
            </div>
            <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-orange-500/20 text-orange-400 border border-orange-500/30">
              Surat Live
            </span>
          </div>
          {/* Search */}
          <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-dark-800 border border-white/10 text-[10px] text-gray-400 mb-2.5">
            <MdSearch size={12} />
            <span>Search home chef thalis...</span>
          </div>
          {/* Banner */}
          <div className="p-2.5 rounded-xl bg-gradient-to-r from-orange-600/30 to-amber-600/20 border border-orange-500/30 mb-2">
            <p className="text-[11px] font-bold text-white">Mom's Cloud Kitchen</p>
            <p className="text-[9px] text-gray-300">⭐ 4.9 · 25-30 min pickup window</p>
          </div>
          {/* Menu item */}
          <div className="p-2 rounded-lg bg-dark-800 border border-white/10 flex items-center justify-between mb-2">
            <div>
              <p className="text-[11px] font-medium text-white">Kathiyawadi Thali</p>
              <p className="text-[9px] text-emerald-400 font-mono">₹160 · Pre-order Ready</p>
            </div>
            <button className="px-2 py-1 rounded bg-orange-500 text-white text-[9px] font-bold">+ Add</button>
          </div>
          {/* Cart bar */}
          <div className="p-2 rounded-lg gradient-bg flex items-center justify-between text-white text-[10px] font-medium">
            <span>2 Items · ₹320</span>
            <span className="font-bold flex items-center gap-1">Checkout <MdShoppingCart size={11} /></span>
          </div>
        </div>
      </div>
    );
  }

  if (type === "pos") {
    return (
      <div className={`relative w-full max-w-[280px] mx-auto rounded-[32px] p-2.5 bg-dark-700 border border-white/15 shadow-2xl ${className}`}>
        <div className="rounded-[24px] bg-dark-900 p-3 pt-6 text-left border border-white/10 font-body">
          <div className="flex items-center justify-between mb-2 pb-1.5 border-b border-white/10">
            <span className="text-[11px] font-bold text-white flex items-center gap-1">
              <MdRestaurant className="text-primary-400" /> POS Terminal
            </span>
            <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
              Hive 0ms Sync
            </span>
          </div>
          <div className="grid grid-cols-2 gap-1.5 mb-2.5">
            <div className="p-1.5 rounded-lg bg-dark-800 border border-white/10 text-center">
              <p className="text-[9px] text-gray-400">Table</p>
              <p className="text-xs font-bold text-white">#T-08</p>
            </div>
            <div className="p-1.5 rounded-lg bg-dark-800 border border-white/10 text-center">
              <p className="text-[9px] text-gray-400">Covers</p>
              <p className="text-xs font-bold text-primary-400">4 Guests</p>
            </div>
          </div>
          <div className="space-y-1.5 mb-2.5">
            <div className="p-1.5 rounded-lg bg-dark-800/80 flex justify-between text-[10px] text-gray-200">
              <span>Paneer Tikka Masala (x2)</span>
              <span className="font-mono font-semibold">₹360</span>
            </div>
            <div className="p-1.5 rounded-lg bg-dark-800/80 flex justify-between text-[10px] text-gray-200">
              <span>Butter Naan (x4)</span>
              <span className="font-mono font-semibold">₹160</span>
            </div>
          </div>
          <button className="w-full py-2 rounded-lg bg-primary-600 hover:bg-primary-500 text-white text-[10px] font-bold flex items-center justify-center gap-1">
            <MdReceiptLong size={12} /> Print KOT & Save to Hive
          </button>
        </div>
      </div>
    );
  }

  if (type === "ai") {
    return (
      <div className={`relative w-full max-w-[280px] mx-auto rounded-[32px] p-2.5 bg-dark-700 border border-white/15 shadow-2xl ${className}`}>
        <div className="rounded-[24px] bg-dark-900 p-3 pt-6 text-left border border-white/10 font-body">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] font-bold text-white flex items-center gap-1">
              <MdAutoAwesome className="text-neon" /> AI Menu Pipeline
            </span>
            <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-neon/20 text-neon border border-neon/30">
              OCR Ready
            </span>
          </div>
          {/* AI Banner */}
          <div className="p-2.5 rounded-xl bg-neon/10 border border-neon/30 mb-2">
            <div className="flex items-center gap-1.5 text-neon text-[10px] font-semibold mb-1">
              <MdAutoAwesome size={12} /> Menu Flyer Scanned
            </div>
            <div className="w-full bg-dark-800 rounded-full h-1.5 overflow-hidden mb-1">
              <div className="bg-neon h-full w-[85%] rounded-full animate-pulse" />
            </div>
            <p className="text-[9px] text-gray-300">Auto-extracted 18 items · 99.4% accuracy</p>
          </div>
          {/* FCM Push mockup */}
          <div className="p-2 rounded-lg bg-dark-800 border border-white/10 mb-2 flex items-start gap-2">
            <MdNotificationsActive className="text-amber-400 mt-0.5 flex-shrink-0" size={13} />
            <div>
              <p className="text-[10px] font-bold text-white">FCM Push Scheduled</p>
              <p className="text-[8px] text-gray-400">"New menu launched! 20% off with code FLUTTER"</p>
            </div>
          </div>
          <button className="w-full py-1.5 rounded-lg gradient-bg text-white text-[10px] font-semibold">
            Publish Dishes to App
          </button>
        </div>
      </div>
    );
  }

  // Customer App
  return (
    <div className={`relative w-full max-w-[280px] mx-auto rounded-[32px] p-2.5 bg-dark-700 border border-white/15 shadow-2xl ${className}`}>
      <div className="rounded-[24px] bg-dark-900 p-3 pt-6 text-left border border-white/10 font-body">
        <div className="flex items-center justify-between mb-2 pb-1.5 border-b border-white/10">
          <div>
            <p className="text-[9px] text-gray-400">Deliver to</p>
            <p className="text-[11px] font-bold text-white">Surat City Center</p>
          </div>
          <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-primary-500/20 text-primary-300">
            60 FPS UI
          </span>
        </div>
        {/* Order tracker */}
        <div className="p-2.5 rounded-xl bg-dark-800 border border-white/10 mb-2">
          <div className="flex justify-between text-[10px] font-semibold text-white mb-1">
            <span>Order #4092</span>
            <span className="text-emerald-400">On the way (12m)</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <div className="flex-1 h-1 bg-emerald-400" />
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <div className="flex-1 h-1 bg-emerald-400" />
            <span className="w-2 h-2 rounded-full bg-primary-400 animate-ping" />
          </div>
        </div>
        <div className="p-2 rounded-lg bg-dark-800/80 flex items-center justify-between text-[10px] mb-2">
          <span className="text-gray-300">Instant Cart Re-order</span>
          <span className="font-mono text-neon font-bold">1-Tap Pay</span>
        </div>
        <button className="w-full py-2 rounded-lg bg-accent-600 text-white text-[10px] font-bold">
          Track Live Delivery
        </button>
      </div>
    </div>
  );
}
