import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import { HelpCircle, MessageSquare, Search } from "lucide-react";

export const FAQDiscoveryAnimation = () => {
  return (
    <div className="w-full flex items-center justify-center py-12">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="relative w-full max-w-3xl aspect-[21/9] bg-[#EFEFED] rounded-[32px] md:rounded-[48px] flex items-center justify-center overflow-hidden border border-[#373546]/8"
      >
        {/* Achtergrond Grid */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
             style={{ backgroundImage: 'radial-gradient(#373546 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

        <div className="relative w-full h-full flex items-center justify-center">
          {/* Centraal Kennispunt */}
          <motion.div
            animate={{
              boxShadow: ["0 0 20px rgba(214,90,49,0.05)", "0 0 40px rgba(214,90,49,0.15)", "0 0 20px rgba(214,90,49,0.05)"]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="relative z-20 w-20 h-20 md:w-32 md:h-32 rounded-full bg-white border border-[#373546]/10 flex items-center justify-center shadow-sm"
          >
            <Search className="text-[#D65A31] w-8 h-8 md:w-12 md:h-12" />

            {/* Pulserende Ringen */}
            <motion.div
              animate={{ scale: [1, 1.6], opacity: [0.4, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut" }}
              className="absolute inset-0 rounded-full border-2 border-[#D65A31]/20"
            />
            <motion.div
              animate={{ scale: [1, 2.2], opacity: [0.2, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut", delay: 0.5 }}
              className="absolute inset-0 rounded-full border border-[#D65A31]/10"
            />
          </motion.div>

          {/* Zwevende Vraag-bubbels die naar het midden bewegen */}
          {[
            { delay: 0, x: -160, y: -50, icon: HelpCircle },
            { delay: 1.5, x: 180, y: 40, icon: MessageSquare },
            { delay: 3, x: -100, y: 70, icon: HelpCircle },
            { delay: 0.8, x: 140, y: -80, icon: MessageSquare },
            { delay: 2.2, x: -200, y: 20, icon: HelpCircle },
          ].map((bubble, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: [0, 1, 1, 0],
                scale: [0.7, 1, 1, 0.7],
                x: [bubble.x, bubble.x * 0.3, bubble.x * 0.1, 0],
                y: [bubble.y, bubble.y * 0.3, bubble.y * 0.1, 0],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                delay: bubble.delay,
                ease: "easeInOut"
              }}
              className="absolute z-10 w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-white border border-[#373546]/5 shadow-[0_10px_25px_rgba(55,53,70,0.05)] flex items-center justify-center"
            >
              <bubble.icon className="text-[#373546]/30 w-6 h-6 md:w-8 md:h-8" />
            </motion.div>
          ))}

          {/* Kleine deeltjes die naar het midden stromen */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                x: [Math.random() * 500 - 250, 0],
                y: [Math.random() * 300 - 150, 0],
                opacity: [0, 0.6, 0],
                scale: [0, 1, 0]
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 4,
                ease: "easeIn"
              }}
              className="absolute w-1.5 h-1.5 bg-[#D65A31]/40 rounded-full blur-[1px]"
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};
