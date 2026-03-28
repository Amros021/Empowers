import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";

gsap.registerPlugin(ScrollTrigger);

const RadarAnimation = () => {
    return (
        <div className="relative w-full h-full flex items-center justify-center bg-primary/5 overflow-hidden">
            <div className="relative w-[240px] h-[240px] sm:w-[300px] sm:h-[300px] md:w-[360px] md:h-[360px]">
                {/* Buitenste roterende cirkel (custom SVG dashed border ressembling the original image) */}
                <motion.svg
                    viewBox="0 0 100 100"
                    className="absolute inset-0 w-full h-full overflow-visible opacity-30"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                    <circle cx="50" cy="50" r="48" fill="none" stroke="#D65A31" strokeWidth="0.5" strokeDasharray="1.5 5" strokeLinecap="round" />
                </motion.svg>

                {/* Binnenste roterende cirkel */}
                <motion.svg
                    viewBox="0 0 100 100"
                    className="absolute top-[12.5%] left-[12.5%] w-[75%] h-[75%] overflow-visible opacity-20"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                >
                    <circle cx="50" cy="50" r="48" fill="none" stroke="#D65A31" strokeWidth="0.6" strokeDasharray="1.5 6" strokeLinecap="round" />
                </motion.svg>

                {/* Kruisdraad en middelpunt */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-[1.5px] h-32 md:h-44 bg-[#D65A31]/30 absolute rounded-full"
                    />
                    <motion.div
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="h-[1.5px] w-32 md:w-44 bg-[#D65A31]/30 absolute rounded-full"
                    />
                    {/* Pulserend middelpunt */}
                    <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#D65A31] shadow-[0_0_15px_rgba(214,90,49,0.8)] z-10" />
                </div>
            </div>
        </div>
    );
};

const ProgressBarsAnimation = () => {
    const channels = [
        { name: "Google Ads", value: "85%" },
        { name: "Meta Ads", value: "70%" },
        { name: "TikTok Ads", value: "45%" },
        { name: "SEO / GEO", value: "95%" }
    ];

    return (
        <div className="w-full h-full p-6 sm:p-8 md:p-12 flex flex-col justify-center gap-6 md:gap-8">
            {channels.map((channel, i) => (
                <div key={i} className="space-y-2 md:space-y-3">
                    <div className="flex justify-between text-[10px] md:text-xs font-bold text-primary/50 uppercase tracking-widest">
                        <span>{channel.name}</span>
                        <span>{channel.value}</span>
                    </div>
                    <div className="h-2 w-full bg-primary/5 rounded-full overflow-hidden">
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: channel.value }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, delay: i * 0.2, ease: "easeOut" }}
                            className="h-full bg-accent"
                        />
                    </div>
                </div>
            ))}
        </div>
    );
};

const Fase03Growth = () => {
    const bars = [
        { label: 'Jan', value: 25 },
        { label: 'Feb', value: 38 },
        { label: 'Mrt', value: 52 },
        { label: 'Apr', value: 67 },
        { label: 'Mei', value: 84 },
        { label: 'Jun', value: 100 },
    ];

    const metrics = [
        { label: 'ROAS', value: '4.8x' },
        { label: 'Conversies', value: '+124%' },
        { label: 'CPA', value: '-38%' },
    ];

    return (
        <div className="w-full h-full bg-primary/5 p-5 sm:p-7 md:p-10 flex flex-col gap-4 sm:gap-6">
            {/* Metric pills bovenaan */}
            <div className="flex gap-2 sm:gap-3 flex-wrap">
                {metrics.map((m, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: -8 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 + i * 0.15, duration: 0.4 }}
                        className="flex items-center gap-1.5 bg-white border border-primary/8 rounded-full px-3 py-1 shadow-sm"
                    >
                        <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-widest text-primary/40">{m.label}</span>
                        <span className="font-bold text-xs sm:text-sm text-accent font-mono">{m.value}</span>
                    </motion.div>
                ))}
            </div>

            {/* Bar chart */}
            <div className="flex-1 flex items-end gap-1.5 sm:gap-2.5">
                {bars.map((bar, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center gap-1.5 h-full">
                        <div className="w-full flex-1 flex items-end">
                            <motion.div
                                initial={{ scaleY: 0 }}
                                whileInView={{ scaleY: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7, delay: 0.4 + i * 0.1, ease: [0.33, 1, 0.68, 1] }}
                                style={{
                                    height: `${bar.value}%`,
                                    transformOrigin: 'bottom',
                                    background: i === bars.length - 1
                                        ? '#D65A31'
                                        : `rgba(214, 90, 49, ${0.12 + i * 0.1})`,
                                }}
                                className="w-full rounded-t-md sm:rounded-t-lg"
                            />
                        </div>
                        <span className="font-mono text-[8px] sm:text-[9px] uppercase tracking-widest text-primary/35 leading-none">{bar.label}</span>
                    </div>
                ))}
            </div>

            {/* Baseline */}
            <div className="h-px w-full bg-primary/10 -mt-2" />
        </div>
    );
};

const steps = [
    {
        id: "01",
        title: "Analyse & Doelstelling",
        description: "We starten met een eerlijke analyse van waar je nu staat. Wat werkt al, wat kost geld zonder resultaat en waar ligt de kans? Op basis daarvan stellen we concrete doelen op. Geen vage plannen, maar een duidelijke koers.",
        Animation: () => <RadarAnimation />
    },
    {
        id: "02",
        title: "Strategie & Implementatie",
        description: "Op basis van jouw doelen en budget bepalen we welke kanalen het meeste opleveren. Soms is dat Google, soms Meta, soms TikTok en soms een combinatie van alle drie. We zorgen dat alles technisch goed staat, van tracking en tags tot Business Manager en analytics, zodat elke euro die je uitgeeft ook gemeten wordt. Daarnaast kijken we naar je vindbaarheid op de lange termijn. Via SEO zorg je dat mensen je terugvinden op Google. Via GEO, de nieuwe standaard in online marketing, zorg je dat AI-tools zoals ChatGPT, Gemini en Claude jouw bedrijf aanbevelen aan potentiële klanten.",
        Animation: () => <ProgressBarsAnimation />
    },
    {
        id: "03",
        title: "Meten, Bijsturen & Opschalen",
        description: "Maandelijks sparren we samen over de resultaten. We analyseren wat werkt, sturen bij waar nodig en schalen op wat het meeste oplevert. Marketing is een doorlopend proces. Wij zorgen dat het elke maand beter presteert.",
        Animation: () => <Fase03Growth />
    }
];

export default function Protocol() {
    const containerRef = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            // Simple staggered entrance for vertical cards
            gsap.utils.toArray('.protocol-card').forEach((card) => {
                gsap.fromTo(card,
                    { opacity: 0, y: 50 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.8,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: card,
                            start: 'top 80%',
                        }
                    }
                );
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} id="proces" className="w-full bg-background py-32 px-6">
            <div className="max-w-7xl mx-auto flex flex-col gap-16 lg:gap-24">

                <div className="text-center mb-10 protocol-card">
                    <h2 className="font-sans font-bold text-sm tracking-widest uppercase text-accent mb-4">Het Systeem</h2>
                    <p className="font-drama italic text-4xl sm:text-5xl md:text-6xl text-primary leading-tight">
                        Ons Groeimodel
                    </p>
                </div>

                {steps.map((step, i) => (
                    <div
                        key={i}
                        className="protocol-card relative w-full bg-white rounded-[2rem] sm:rounded-[3rem] p-6 sm:p-10 lg:p-16 shadow-[0_10px_40px_rgb(0,0,0,0.04)] border border-primary/10 flex flex-col lg:flex-row items-center gap-8 sm:gap-12 overflow-hidden"
                    >
                        {/* Content */}
                        <div className="relative z-10 w-full lg:w-1/2 flex flex-col justify-center">
                            <span className="font-sans font-bold text-xs uppercase tracking-widest text-accent mb-4 block">Fase {step.id}</span>
                            <h3 className="font-sans font-bold text-3xl sm:text-4xl lg:text-5xl text-primary leading-tight tracking-tight mb-4 sm:mb-6">
                                {step.title}
                            </h3>
                            <p className="font-sans text-lg text-primary/70 font-medium leading-relaxed">
                                {step.description}
                            </p>
                        </div>

                        {/* Background / Animation Visualizer */}
                        <div className="w-full lg:w-1/2 h-[250px] sm:h-[300px] lg:h-[400px] relative bg-background/50 rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden flex items-center justify-center">
                            <div className="absolute inset-0 flex items-center justify-center scale-100 opacity-100">
                                <step.Animation />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
