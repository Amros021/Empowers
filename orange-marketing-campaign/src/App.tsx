/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { TrendingUp, MousePointer2, Target, BarChart3 } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-6 selection:bg-brand-orange/20">
      {/* Main Illustration Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative w-full max-w-4xl aspect-[16/10] bg-white rounded-[40px] shadow-[0_40px_100px_-20px_rgba(55,53,70,0.15)] border border-brand-dark/5 p-12 flex flex-col items-center justify-center overflow-hidden"
      >
        {/* Background Decorative Accents */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-dark/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

        {/* The Dashboard Screen */}
        <div className="relative w-full h-[70%] bg-white rounded-3xl border-[6px] border-brand-dark/5 shadow-inner p-8 flex flex-col">
          <div className="flex justify-between items-start mb-8">
            <div className="flex gap-8">
              {/* Circular Progress / Pie Chart */}
              <div className="w-24 h-24 rounded-full border-[6px] border-brand-orange flex items-center justify-center relative shadow-lg shadow-brand-orange/10">
                <div className="absolute inset-0 border-[6px] border-brand-dark/10 rounded-full" style={{ clipPath: 'polygon(50% 0, 100% 0, 100% 100%, 50% 100%)' }} />
                <div className="w-3 h-3 bg-brand-dark/40 rounded-full" />
              </div>
              
              {/* Bar Chart */}
              <div className="flex items-end gap-2 h-24">
                <motion.div initial={{ height: 0 }} animate={{ height: '40%' }} transition={{ delay: 0.5 }} className="w-3 bg-brand-orange rounded-t-md" />
                <motion.div initial={{ height: 0 }} animate={{ height: '85%' }} transition={{ delay: 0.6 }} className="w-3 bg-brand-dark/20 rounded-t-md" />
                <motion.div initial={{ height: 0 }} animate={{ height: '60%' }} transition={{ delay: 0.7 }} className="w-3 bg-brand-orange rounded-t-md" />
                <motion.div initial={{ height: 0 }} animate={{ height: '95%' }} transition={{ delay: 0.8 }} className="w-3 bg-brand-dark/20 rounded-t-md" />
              </div>
            </div>

            <div className="text-right space-y-1">
              <div className="text-xs font-black text-brand-dark/30 uppercase tracking-[0.2em]">ADS PERFORMANCE</div>
              <div className="text-4xl font-black text-brand-dark flex items-center justify-end gap-2">
                1.2M <span className="text-sm text-brand-orange flex items-center"><TrendingUp className="w-4 h-4 mr-1" /> 12%</span>
              </div>
            </div>
          </div>
          
          {/* Main Performance Graph */}
          <div className="flex-1 w-full border-b-2 border-l-2 border-brand-dark/5 relative mt-4">
            <svg className="absolute inset-0 w-full h-full text-brand-orange" viewBox="0 0 100 40" preserveAspectRatio="none">
              <motion.path 
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, ease: "easeInOut" }}
                d="M0,30 Q15,15 30,25 T60,10 T100,20" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2.5" 
                strokeLinecap="round"
              />
            </svg>
            {/* Grid Lines */}
            <div className="absolute inset-0 flex flex-col justify-between opacity-20 pointer-events-none">
              <div className="h-px w-full bg-brand-dark/10" />
              <div className="h-px w-full bg-brand-dark/10" />
              <div className="h-px w-full bg-brand-dark/10" />
            </div>
          </div>
        </div>

        {/* Desk and Characters Area */}
        <div className="relative w-full h-[30%] flex items-end justify-center">
          {/* Desk Line */}
          <div className="absolute top-4 w-full h-1 bg-brand-dark/10 rounded-full" />
          
          <div className="flex gap-24 items-end pb-4">
            {/* Character 1 */}
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-brand-dark/70 mb-2" />
              <div className="w-12 h-24 bg-brand-orange rounded-t-2xl" />
            </div>
            {/* Character 2 */}
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-brand-dark/70 mb-2" />
              <div className="w-12 h-24 bg-brand-dark/30 rounded-t-2xl" />
            </div>
            {/* Character 3 */}
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-brand-dark/70 mb-2" />
              <div className="w-12 h-24 bg-brand-orange/70 rounded-t-2xl" />
            </div>
          </div>

          {/* Floating Performance Card */}
          <motion.div 
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 right-12 bg-white shadow-[0_20px_50px_rgba(55,53,70,0.12)] rounded-2xl p-5 border border-brand-dark/5 flex items-center gap-4 min-w-[240px]"
          >
            <div className="w-12 h-12 rounded-xl bg-brand-orange/10 flex items-center justify-center">
              <Target className="text-brand-orange w-6 h-6" />
            </div>
            <div>
              <div className="text-lg font-black text-brand-dark tracking-tight">4.85 ROAS</div>
              <div className="text-[10px] font-bold text-brand-dark/40 uppercase tracking-widest">META ADS PERFORMANCE</div>
            </div>
          </motion.div>

          {/* Secondary Floating Card */}
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-4 left-12 bg-white shadow-[0_20px_50px_rgba(55,53,70,0.12)] rounded-2xl p-4 border border-brand-dark/5 flex items-center gap-3"
          >
            <div className="w-10 h-10 rounded-xl bg-brand-dark/5 flex items-center justify-center">
              <MousePointer2 className="text-brand-dark/40 w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-black text-brand-dark">€2.45 CPC</div>
              <div className="text-[9px] font-bold text-brand-dark/40 uppercase tracking-widest">GOOGLE ADS AVG.</div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
