import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ArrowRight, Download, CheckCircle, MousePointer2, TrendingUp, BarChart2, Target } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

// Animatie: campagne prestatie dashboard
const AdPerformanceAnim = () => {
    const metrics = [
        { label: 'ROAS', value: '4.2×', sub: 'return on ad spend', color: 'text-green-600', bg: 'bg-green-50 border-green-200' },
        { label: 'CTR', value: '8.4%', sub: 'click-through rate', color: 'text-blue-600', bg: 'bg-blue-50 border-blue-200' },
        { label: 'CPC', value: '€0.48', sub: 'cost per click', color: 'text-primary', bg: 'bg-primary/5 border-primary/20' },
    ];
    return (
        <div className="w-full h-full bg-white border border-primary/10 rounded-[2rem] flex flex-col justify-center p-4 sm:p-6 gap-3 sm:gap-4">
            <div className="flex items-center justify-between mb-1">
                <span className="font-mono text-xs uppercase tracking-widest text-primary/40">Campagne prestaties</span>
                <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                    <span className="font-mono text-[10px] text-green-600">Live</span>
                </div>
            </div>
            <div className="grid grid-cols-3 gap-2">
                {metrics.map((m, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.15 + 0.2 }}
                        className={`rounded-xl p-3 border ${m.bg} flex flex-col gap-1`}
                    >
                        <div className="font-mono text-[9px] uppercase tracking-widest text-primary/40">{m.label}</div>
                        <div className={`font-mono font-bold text-lg ${m.color}`}>{m.value}</div>
                        <div className="font-sans text-[9px] text-primary/40">{m.sub}</div>
                    </motion.div>
                ))}
            </div>
            <div className="space-y-2">
                <div className="flex justify-between font-mono text-[10px] text-primary/50">
                    <span>Kwaliteitsscore</span>
                    <span className="text-green-600 font-bold">9/10</span>
                </div>
                <div className="h-2.5 w-full bg-primary/5 rounded-full overflow-hidden">
                    <motion.div
                        initial={{ width: '0%' }}
                        whileInView={{ width: '90%' }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.4, delay: 0.7, ease: 'easeOut' }}
                        className="h-full bg-gradient-to-r from-green-400 to-green-600 rounded-full"
                    />
                </div>
            </div>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.2 }}
                className="flex items-center gap-2 bg-primary/5 rounded-xl px-3 py-2"
            >
                <Target className="w-4 h-4 text-primary/50 shrink-0" />
                <span className="font-mono text-[10px] text-primary/60">Positie #1 op 3 trefwoorden</span>
            </motion.div>
        </div>
    );
};

// Animatie: campagne structuur
const CampaignStructureAnim = () => (
    <div className="w-full h-full bg-white border border-primary/10 rounded-[2rem] flex items-center justify-center p-4 sm:p-6 overflow-hidden">
        <div className="w-full flex flex-col gap-2 sm:gap-3">
            {[
                { level: 'Campagne', label: 'Merk & Awareness', color: 'bg-primary text-background' },
                { level: 'Advertentiegroep', label: 'Categorie A', color: 'bg-primary/10 text-primary' },
                { level: 'Advertentie', label: 'Dynamische zoekadvertentie', color: 'bg-accent/10 text-accent' },
            ].map((item, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.2 }}
                    style={{ marginLeft: `${i * 10}px` }}
                    className={`flex items-center gap-2 rounded-xl px-3 py-2.5 ${item.color}`}
                >
                    <div className="font-mono text-[9px] uppercase tracking-widest opacity-60 shrink-0">{item.level}</div>
                    <div className="font-sans text-xs sm:text-sm font-medium truncate">{item.label}</div>
                </motion.div>
            ))}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
                className="flex items-center gap-2 mt-1"
                style={{ marginLeft: '10px' }}
            >
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse shrink-0" />
                <span className="font-mono text-[10px] text-primary/40">Live — bijsturing op data</span>
            </motion.div>
        </div>
    </div>
);

// Animatie: ROI meter
const ROIAnim = () => {
    const stats = [
        { value: '3.2x', label: 'gemiddeld ROAS voor klanten', color: 'text-accent' },
        { value: '8.4%', label: 'gemiddelde CTR op branded', color: 'text-primary' },
        { value: '-40%', label: 'kosten per lead na optimalisatie', color: 'text-accent' },
    ];
    return (
        <div className="w-full h-full bg-white border border-primary/10 rounded-[2rem] flex flex-col justify-center gap-4 sm:gap-6 p-4 sm:p-8">
            {stats.map((s, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.2, duration: 0.5 }}
                    className="flex items-center gap-3 sm:gap-4"
                >
                    <span className={`font-sans font-bold text-2xl sm:text-3xl ${s.color} w-16 sm:w-24 shrink-0`}>{s.value}</span>
                    <span className="font-sans text-xs sm:text-sm text-primary/60 leading-tight">{s.label}</span>
                </motion.div>
            ))}
        </div>
    );
};

// Animatie: aanpak fasen
const FasenAnim = () => {
    const fasen = [
        { nr: '01', title: 'Account audit', desc: 'Analyse van bestaande campagnes, verspild budget en kansen.' },
        { nr: '02', title: 'Structuur & strategie', desc: 'Campagnestructuur opzetten, zoekwoordonderzoek, doelgroepen.' },
        { nr: '03', title: 'Lanceren & testen', desc: 'Advertenties live, A/B testen op teksten en biedstrategieën.' },
        { nr: '04', title: 'Bijsturen & schalen', desc: 'Maandelijkse bijsturing op data. Budget naar wat werkt.' },
    ];
    return (
        <div className="w-full h-full bg-white border border-primary/10 rounded-[2rem] flex flex-col justify-center gap-2 sm:gap-3 p-4 sm:p-6">
            {fasen.map((f, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 }}
                    className="flex gap-2.5 items-start bg-white rounded-xl p-2.5 sm:p-3.5 border border-primary/10"
                >
                    <span className="font-mono text-xs text-background bg-primary px-2 py-0.5 rounded-full shrink-0 mt-0.5">{f.nr}</span>
                    <div>
                        <div className="font-sans font-bold text-xs sm:text-sm text-primary mb-0.5">{f.title}</div>
                        <div className="font-sans text-[10px] sm:text-xs text-primary/55 leading-snug">{f.desc}</div>
                    </div>
                </motion.div>
            ))}
        </div>
    );
};

export default function GoogleAdsPage() {
    const mainRef = useRef(null);

    useEffect(() => {
        window.scrollTo(0, 0);
        let ctx = gsap.context(() => {
            gsap.utils.toArray('.gads-section').forEach((section) => {
                gsap.fromTo(section,
                    { opacity: 0, y: 50 },
                    { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out', scrollTrigger: { trigger: section, start: 'top 85%' } }
                );
            });
        }, mainRef);
        return () => ctx.revert();
    }, []);

    return (
        <main ref={mainRef} className="min-h-screen selection:bg-accent/30 selection:text-dark flex flex-col bg-background">
            <Helmet>
                <title>Google Ads – Campagnebeheer & Optimalisatie | Empowers</title>
                <meta name="description" content="Jouw bedrijf bovenaan Google, precies op het moment dat iemand zoekt wat jij aanbiedt. Empowers beheert jouw Google Ads campagnes van A tot Z." />
                <link rel="canonical" href="https://www.empowers.nl/google-ads" />
                <meta property="og:title" content="Google Ads – Campagnebeheer & Optimalisatie | Empowers" />
                <meta property="og:description" content="Jouw bedrijf bovenaan Google, precies op het moment dat iemand zoekt wat jij aanbiedt. Empowers beheert jouw Google Ads campagnes van A tot Z." />
                <meta property="og:url" content="https://www.empowers.nl/google-ads" />
                <meta property="og:type" content="website" />
                <script type="application/ld+json">{JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Service",
                    "name": "Google Ads Campagnebeheer",
                    "serviceType": "Google Ads beheer",
                    "description": "Empowers beheert Google Ads campagnes voor bedrijven in Nederland. Gevonden worden op het moment dat iemand klaar is om te kopen, zodat jouw advertentiebudget maximaal rendeert.",
                    "provider": { "@type": "Organization", "name": "Empowers", "url": "https://www.empowers.nl" },
                    "url": "https://www.empowers.nl/google-ads"
                })}</script>
            </Helmet>
            <Navbar />

            {/* Hero */}
            <section className="w-full pt-48 pb-24 px-6 relative overflow-hidden gads-section">
                <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[100px] pointer-events-none" />
                <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 lg:items-end">
                    <div className="flex-1">
                        <span className="font-mono text-sm tracking-widest uppercase text-accent mb-6 block">Google Ads</span>
                        <h1 className="font-sans font-bold text-primary text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[0.9] tracking-tight mb-6">
                            Gevonden worden<br />als iemand klaar is om te kopen.
                        </h1>
                        <p className="font-sans text-primary/70 text-lg md:text-xl max-w-lg leading-relaxed font-medium mb-8">
                            Iemand zoekt precies wat jij aanbiedt. Jij staat bovenaan. Klik. Wij bouwen en beheren jouw campagnes zodat dat elke dag klopt.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link to="/contact" className="btn-magnetic inline-flex items-center justify-center bg-accent text-background font-sans font-bold text-base px-8 py-4 rounded-[2rem] hover:bg-accent/90 transition-colors">
                                Plan een gratis gesprek
                            </Link>
                        </div>
                    </div>
                    <div className="flex-1 w-full h-[280px] sm:h-[320px] lg:h-[360px]">
                        <AdPerformanceAnim />
                    </div>
                </div>
            </section>

            {/* Wat zijn Google Ads */}
            <section className="w-full py-24 px-6 gads-section">
                <div className="max-w-6xl mx-auto flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-24">
                    <div className="flex-1">
                        <span className="font-mono text-sm tracking-widest uppercase text-accent mb-4 block">01 — Wat zijn Google Ads?</span>
                        <h2 className="font-sans font-bold text-3xl md:text-4xl text-primary tracking-tight mb-6">Betaal per klik. Nooit per vertoning.</h2>
                        <p className="font-sans text-primary/70 text-lg leading-relaxed mb-6">
                            Met <strong className="text-primary">Google Ads</strong> betaal je alleen als iemand klikt. Jouw advertentie verschijnt bovenaan wanneer iemand actief zoekt naar wat jij biedt. De koopintentie is er al.
                        </p>
                        <p className="font-sans text-primary/70 text-lg leading-relaxed mb-8">
                            Een slechte campagne verbrandt budget snel. Een goede campagne brengt meer op dan hij kost. Dat verschil zit volledig in de opbouw en de bijsturing.
                        </p>
                        <div className="bg-accent/10 border-l-4 border-accent rounded-r-xl p-5">
                            <p className="font-sans text-primary font-medium italic">
                                "Wij sturen bij op data. Geen buikgevoel, geen vaste sjablonen. Elke campagne is gebouwd rondom jouw markt."
                            </p>
                        </div>
                    </div>
                    <div className="flex-1 w-full h-[260px] sm:h-[320px] lg:h-[340px]">
                        <CampaignStructureAnim />
                    </div>
                </div>
            </section>

            {/* Waarom Google Ads */}
            <section className="w-full py-24 px-6 bg-primary/[0.03] gads-section">
                <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
                    <div className="flex-1">
                        <span className="font-mono text-sm tracking-widest uppercase text-accent mb-4 block">02 — Waarom Google Ads?</span>
                        <h2 className="font-sans font-bold text-3xl md:text-4xl text-primary tracking-tight mb-6">Adverteer alleen als iemand al zoekt.</h2>
                        <div className="flex flex-col gap-5">
                            {[
                                { icon: <Target className="w-5 h-5" />, claim: 'De intentie is er al.', detail: 'Mensen die zoeken op Google zijn al klaar voor een oplossing. Dat maakt elke klik waardevoller dan op elk ander platform.' },
                                { icon: <MousePointer2 className="w-5 h-5" />, claim: 'Jij betaalt alleen voor klikken.', detail: 'Geen vertoningen, geen kosten. Alleen als iemand daadwerkelijk klikt, gaat er geld af. Zo werkt eerlijk adverteren.' },
                                { icon: <TrendingUp className="w-5 h-5" />, claim: 'Klein beginnen. Hard groeien.', detail: 'Zodra de campagne werkt, zet je meer budget op het vuur. Direct meer leads. Direct meer omzet.' },
                                { icon: <BarChart2 className="w-5 h-5" />, claim: 'Elke euro traceerbaar.', detail: 'Van klik tot aankoop zie je precies wat jouw budget doet. Wij rapporteren helder en zonder verborgen cijfers.' },
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex gap-4 items-start"
                                >
                                    <div className="shrink-0 w-10 h-10 rounded-full bg-accent/10 text-accent flex items-center justify-center mt-0.5">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <div className="font-sans font-bold text-primary mb-1">{item.claim}</div>
                                        <div className="font-sans text-sm text-primary/60 leading-relaxed">{item.detail}</div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                    <div className="flex-1 w-full h-[240px] sm:h-[300px] lg:h-[320px]">
                        <ROIAnim />
                    </div>
                </div>
            </section>

            {/* Onze aanpak */}
            <section className="w-full py-24 px-6 gads-section">
                <div className="max-w-6xl mx-auto flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-24">
                    <div className="flex-1">
                        <span className="font-mono text-sm tracking-widest uppercase text-accent mb-4 block">03 — Onze aanpak</span>
                        <h2 className="font-sans font-bold text-3xl md:text-4xl text-primary tracking-tight mb-6">Structuur eerst. Dan pas schalen.</h2>
                        <p className="font-sans text-primary/70 text-lg leading-relaxed mb-8">
                            We starten met een grondige audit van alles wat er al staat. Daarna bouwen we een structuur die converteert en sturen we maandelijks bij. Jouw budget werkt elke maand harder.
                        </p>
                        <div className="flex flex-col gap-3">
                            {[
                                'Volledige audit van bestaande campagnes',
                                'Zoekwoordstrategie op basis van jouw markt',
                                'A/B testen op advertentieteksten',
                                'Maandelijkse rapportage met concrete KPI\'s',
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <CheckCircle className="w-5 h-5 text-accent shrink-0" />
                                    <span className="font-sans text-primary/80 text-sm">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex-1 w-full h-[340px] sm:h-[380px] lg:h-[400px]">
                        <FasenAnim />
                    </div>
                </div>
            </section>

            {/* Download + CTA */}
            <section className="w-full py-24 px-6 gads-section">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-white rounded-[2rem] border border-primary/10 shadow-[0_8px_40px_rgb(0,0,0,0.06)] p-8 sm:p-12 flex flex-col md:flex-row items-center gap-8 mb-8">
                        <div className="flex-1">
                            <span className="font-mono text-xs uppercase tracking-widest text-accent mb-3 block">Gratis rapport</span>
                            <h3 className="font-sans font-bold text-2xl text-primary mb-3">Alles over Google Ads. In één rapport.</h3>
                            <p className="font-sans text-primary/60 text-sm leading-relaxed mb-6">
                                Download ons Google Ads rapport. Onze strategie, aanpak en concrete stappen uitgelegd. Meteen bruikbaar.
                            </p>
                            <a
                                href="/Google-Ads-Strategie_Empowers.pdf"
                                download
                                className="btn-magnetic inline-flex items-center gap-3 bg-accent text-background font-sans font-bold text-base px-8 py-4 rounded-[2rem] hover:bg-accent/90 transition-colors"
                            >
                                <Download className="w-5 h-5" />
                                Download gratis rapport (PDF)
                            </a>
                        </div>
                        <div className="shrink-0 w-32 h-40 bg-primary rounded-xl flex flex-col items-center justify-center gap-2 shadow-lg">
                            <div className="text-background/60 font-mono text-[10px] uppercase tracking-widest">Google Ads</div>
                            <div className="text-background font-bold text-lg font-sans">Empowers</div>
                            <div className="w-8 h-0.5 bg-accent rounded" />
                            <div className="text-background/40 font-mono text-[9px]">2026</div>
                        </div>
                    </div>
                    <div className="bg-primary rounded-[2rem] p-8 sm:p-12 text-center relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
                        <h3 className="relative z-10 font-drama italic text-background text-3xl sm:text-4xl md:text-5xl mb-4">Klaar om te groeien?</h3>
                        <p className="relative z-10 font-sans text-background/70 mb-8 max-w-md mx-auto">
                            Plan een gesprek. We kijken samen naar jouw situatie en laten zien wat er mogelijk is. Zullen we?
                        </p>
                        <Link to="/contact" className="relative z-10 btn-magnetic inline-flex items-center gap-2 bg-accent text-background font-sans font-bold text-base px-8 py-4 rounded-[2rem] hover:bg-accent/90 transition-colors">
                            Plan een gratis gesprek
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
