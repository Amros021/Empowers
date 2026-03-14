import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import { TrendingUp, Target, MousePointer2 } from "lucide-react";

export const HeroDashboard = () => {
  return (
    <div className="w-full flex items-center justify-center p-4 md:p-10 font-sans">
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="relative w-full max-w-4xl aspect-square md:aspect-[16/10] bg-white rounded-[32px] md:rounded-[40px] shadow-[0_40px_100px_-20px_rgba(55,53,70,0.15)] border border-[#373546]/5 p-6 md:p-12 flex flex-col items-center justify-center overflow-hidden"
      >
        {/* Achtergrond Decoratie (Blobs) */}
        <div className="absolute top-0 right-0 w-48 md:w-64 h-48 md:h-64 bg-[#D65A31]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 md:w-96 h-64 md:h-96 bg-[#373546]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

        {/* Het Dashboard Scherm */}
        <div className="relative w-full h-[60%] md:h-[70%] bg-white rounded-2xl md:rounded-3xl border-[3px] md:border-[6px] border-[#373546]/5 shadow-inner p-4 md:p-8 flex flex-col overflow-hidden">
          <div className="flex justify-between items-start mb-4 md:mb-8">
            <div className="flex gap-3 md:gap-8">
              {/* Cirkel Grafiek */}
              <div className="w-12 h-12 md:w-24 md:h-24 rounded-full border-[3px] md:border-[6px] border-[#D65A31] flex items-center justify-center relative shadow-lg shadow-[#D65A31]/10">
                <div className="absolute inset-0 border-[3px] md:border-[6px] border-[#373546]/10 rounded-full" style={{ clipPath: 'polygon(50% 0, 100% 0, 100% 100%, 50% 100%)' }} />
                <div className="w-1.5 md:w-3 h-1.5 md:h-3 bg-[#373546]/40 rounded-full" />
              </div>

              {/* Staafgrafiek */}
              <div className="flex items-end gap-1 md:gap-2 h-12 md:h-24">
                <motion.div initial={{ height: 0 }} animate={{ height: '40%' }} transition={{ delay: 0.5 }} className="w-1.5 md:w-3 bg-[#D65A31] rounded-t-sm md:rounded-t-md" />
                <motion.div initial={{ height: 0 }} animate={{ height: '85%' }} transition={{ delay: 0.6 }} className="w-1.5 md:w-3 bg-[#373546]/20 rounded-t-sm md:rounded-t-md" />
                <motion.div initial={{ height: 0 }} animate={{ height: '60%' }} transition={{ delay: 0.7 }} className="w-1.5 md:w-3 bg-[#D65A31] rounded-t-sm md:rounded-t-md" />
                <motion.div initial={{ height: 0 }} animate={{ height: '95%' }} transition={{ delay: 0.8 }} className="w-1.5 md:w-3 bg-[#373546]/20 rounded-t-sm md:rounded-t-md" />
              </div>
            </div>

            <div className="text-right space-y-0.5 md:space-y-1">
              <div className="text-[7px] md:text-xs font-black text-[#373546]/30 uppercase tracking-widest">ADS PERFORMANCE</div>
              <div className="text-xl md:text-4xl font-black text-[#373546] flex items-center justify-end gap-1 md:gap-2">
                1.2M <span className="text-[8px] md:text-sm text-[#D65A31] flex items-center"><TrendingUp className="w-2.5 h-2.5 md:w-4 md:h-4 mr-0.5 md:mr-1" /> 12%</span>
              </div>
            </div>
          </div>

          {/* Hoofd Grafiek Lijn */}
          <div className="flex-1 w-full border-b-2 border-l-2 border-[#373546]/5 relative mt-2 md:mt-4">
            <svg className="absolute inset-0 w-full h-full text-[#D65A31]" viewBox="0 0 100 40" preserveAspectRatio="none">
              <motion.path
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, ease: "easeInOut" }}
                d="M0,30 Q15,15 30,25 T60,10 T100,20"
                fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col justify-between opacity-20 pointer-events-none">
              <div className="h-px w-full bg-[#373546]/10" />
              <div className="h-px w-full bg-[#373546]/10" />
              <div className="h-px w-full bg-[#373546]/10" />
            </div>
          </div>
        </div>

        {/* Karakter Area */}
        <div className="relative w-full h-[40%] md:h-[30%] flex items-end justify-center">
          <div className="absolute top-4 md:top-4 w-full h-0.5 md:h-1 bg-[#373546]/10 rounded-full" />

          <div className="flex gap-6 md:gap-24 items-end pb-2 md:pb-4">
            <div className="flex flex-col items-center">
              <div className="w-5 h-5 md:w-10 md:h-10 rounded-full bg-[#373546]/70 mb-1 md:mb-2" />
              <div className="w-6 h-12 md:w-12 md:h-24 bg-[#D65A31] rounded-t-lg md:rounded-t-2xl" />
            </div>
            <div className="flex flex-col items-center">
              <div className="w-5 h-5 md:w-10 md:h-10 rounded-full bg-[#373546]/70 mb-1 md:mb-2" />
              <div className="w-6 h-12 md:w-12 md:h-24 bg-[#373546]/30 rounded-t-lg md:rounded-t-2xl" />
            </div>
            <div className="flex flex-col items-center">
              <div className="w-5 h-5 md:w-10 md:h-10 rounded-full bg-[#373546]/70 mb-1 md:mb-2" />
              <div className="w-6 h-12 md:w-12 md:h-24 bg-[#D65A31]/70 rounded-t-lg md:rounded-t-2xl" />
            </div>
          </div>

          {/* Zwevende ROAS Kaart */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-6 md:top-0 right-0 md:right-12 bg-white shadow-xl rounded-xl md:rounded-2xl p-2.5 md:p-5 border border-[#373546]/5 flex items-center gap-2 md:gap-4 min-w-[140px] md:min-w-[240px]"
          >
            <div className="w-7 h-7 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-[#D65A31]/10 flex items-center justify-center">
              <Target className="text-[#D65A31] w-3.5 h-3.5 md:w-6 md:h-6" />
            </div>
            <div>
              <div className="text-xs md:text-lg font-black text-[#373546] tracking-tight">4.85 ROAS</div>
              <div className="text-[7px] md:text-[10px] font-bold text-[#373546]/40 uppercase tracking-widest">META ADS</div>
            </div>
          </motion.div>

          {/* Zwevende CPC Kaart */}
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-2 md:-bottom-4 left-0 md:left-12 bg-white shadow-xl rounded-xl md:rounded-2xl p-2 md:p-4 border border-[#373546]/5 flex items-center gap-2 md:gap-3"
          >
            <div className="w-6 h-6 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-[#373546]/5 flex items-center justify-center">
              <MousePointer2 className="text-[#373546]/40 w-3 md:w-5 h-3 md:h-5" />
            </div>
            <div>
              <div className="text-[10px] md:text-sm font-black text-[#373546]">€2.45 CPC</div>
              <div className="text-[6px] md:text-[9px] font-bold text-[#373546]/40 uppercase tracking-widest">GOOGLE ADS</div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};
