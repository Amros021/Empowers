import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ArrowRight, Download, CheckCircle, Heart, Users, TrendingUp, Target } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

// Animatie: campagne metrics dashboard
const CampaignMetricsAnim = () => {
    const MAX_H = 64; // pixels (matches h-16)
    const bars = [
        { day: 'Ma', pct: 42 },
        { day: 'Di', pct: 58 },
        { day: 'Wo', pct: 73 },
        { day: 'Do', pct: 49 },
        { day: 'Vr', pct: 86 },
        { day: 'Za', pct: 100 },
        { day: 'Zo', pct: 91 },
    ];
    return (
        <div className="w-full h-full bg-white border border-primary/10 rounded-[2rem] p-4 sm:p-7 flex flex-col gap-3 sm:gap-4 overflow-hidden">
            {/* Header row */}
            <div className="flex items-start justify-between">
                <div>
                    <div className="font-mono text-[10px] uppercase tracking-widest text-primary/40 mb-1 sm:mb-2">Live campagne</div>
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-[#1877F2] animate-pulse" />
                        <span className="font-sans text-sm font-semibold text-primary">Empowers · Meta Ads</span>
                    </div>
                </div>
                <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-right"
                >
                    <div className="font-mono text-[10px] text-primary/30 uppercase tracking-widest">ROAS</div>
                    <div className="font-sans font-bold text-[#1877F2] text-3xl sm:text-4xl leading-none mt-1">4.8×</div>
                </motion.div>
            </div>

            {/* Bar chart — pixel heights to avoid Framer Motion unit mismatch */}
            <div className="flex items-end gap-1.5" style={{ height: MAX_H }}>
                {bars.map((b, i) => {
                    const barH = Math.round((b.pct / 100) * MAX_H);
                    const barOpacity = parseFloat((0.25 + (b.pct / 100) * 0.75).toFixed(2));
                    return (
                        <motion.div
                            key={i}
                            initial={{ height: 0, opacity: 0 }}
                            whileInView={{ height: barH, opacity: barOpacity }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.3 + i * 0.08, ease: 'easeOut' }}
                            className="flex-1 rounded-t"
                            style={{ backgroundColor: '#1877F2' }}
                        />
                    );
                })}
            </div>
            {/* Day labels */}
            <div className="flex gap-1.5">
                {bars.map((b) => (
                    <div key={b.day} className="flex-1 text-center">
                        <span className="font-mono text-[8px] text-primary/30">{b.day}</span>
                    </div>
                ))}
            </div>

            {/* KPI grid */}
            <div className="grid grid-cols-3 gap-2">
                {[
                    { label: 'Bereik', value: '84.2K', delta: '+12%' },
                    { label: 'CTR', value: '3.4%', delta: '+0.8%' },
                    { label: 'Conversies', value: '312', delta: '+28%' },
                ].map((k, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.75 + i * 0.12, duration: 0.4 }}
                        className="bg-primary/[0.03] border border-primary/10 rounded-xl p-3"
                    >
                        <div className="font-mono text-[9px] uppercase tracking-widest text-primary/40 mb-1.5">{k.label}</div>
                        <div className="font-sans font-bold text-primary text-lg leading-none">{k.value}</div>
                        <div className="font-mono text-[9px] text-emerald-500 mt-1.5">{k.delta}</div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

// Animatie: targeting opties
const TargetingAnim = () => {
    const segments = [
        { label: 'Leeftijd 25–45', pct: 78 },
        { label: 'Interesse: marketing', pct: 64 },
        { label: 'Gedrag: beslisser', pct: 45 },
    ];
    return (
        <div className="w-full h-full bg-white border border-primary/10 rounded-[2rem] flex flex-col justify-center p-4 sm:p-8 gap-4 sm:gap-6">
            <div className="font-mono text-xs uppercase tracking-widest text-primary/40 mb-1 sm:mb-2">Doelgroep match</div>
            {segments.map((s, i) => (
                <div key={i} className="space-y-2">
                    <div className="flex justify-between text-xs font-mono uppercase tracking-widest text-primary/50">
                        <span>{s.label}</span>
                        <span>{s.pct}%</span>
                    </div>
                    <div className="h-2 w-full bg-primary/5 rounded-full overflow-hidden">
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${s.pct}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, delay: i * 0.2, ease: 'easeOut' }}
                            className="h-full bg-[#1877F2] rounded-full"
                        />
                    </div>
                </div>
            ))}
        </div>
    );
};

// Animatie: stats
const StatsAnim = () => {
    const stats = [
        { value: '3.7B', label: 'actieve gebruikers op Meta platforms', color: 'text-[#1877F2]' },
        { value: '9x', label: 'meer conversies via retargeting', color: 'text-accent' },
        { value: '€0.50', label: 'gemiddelde cost-per-click NL', color: 'text-primary' },
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
                    <span className={`font-sans font-bold text-2xl sm:text-3xl ${s.color} min-w-[4.5rem] sm:min-w-[7.5rem] shrink-0`}>{s.value}</span>
                    <span className="font-sans text-xs sm:text-sm text-primary/60 leading-tight">{s.label}</span>
                </motion.div>
            ))}
        </div>
    );
};

// Animatie: aanpak fasen
const FasenAnim = () => {
    const fasen = [
        { nr: '01', title: 'Pixel & tracking', desc: 'Meta Pixel instellen, conversies koppelen en datakwaliteit borgen.' },
        { nr: '02', title: 'Doelgroep & creatief', desc: 'Audience research, lookalikes bouwen en advertentiecreatives uitwerken.' },
        { nr: '03', title: 'Campagne lanceren', desc: 'Top-of-funnel, retargeting en conversiecampagnes parallel draaien.' },
        { nr: '04', title: 'Schalen & optimaliseren', desc: 'Budget naar winnende sets. Creative testing. Maandelijkse rapportage.' },
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

export default function MetaAdsPage() {
    const mainRef = useRef(null);

    useEffect(() => {
        window.scrollTo(0, 0);
        let ctx = gsap.context(() => {
            gsap.utils.toArray('.meta-section').forEach((section) => {
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
                <title>Meta Ads – Facebook & Instagram Adverteren | Empowers</title>
                <meta name="description" content="Facebook en Instagram zijn de krachtigste platformen om jouw ideale klant te bereiken. Empowers bouwt Meta Ads campagnes die niet alleen gezien worden, maar ook converteren." />
                <link rel="canonical" href="https://www.empowers.nl/meta-ads" />
                <meta property="og:title" content="Meta Ads – Facebook & Instagram Adverteren | Empowers" />
                <meta property="og:description" content="Facebook en Instagram zijn de krachtigste platformen om jouw ideale klant te bereiken. Empowers bouwt Meta Ads campagnes die niet alleen gezien worden, maar ook converteren." />
                <meta property="og:url" content="https://www.empowers.nl/meta-ads" />
                <meta property="og:type" content="website" />
                <script type="application/ld+json">{JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Service",
                    "name": "Meta Ads – Facebook & Instagram Adverteren",
                    "serviceType": "Meta Ads beheer",
                    "description": "Empowers beheert Meta Ads campagnes op Facebook en Instagram voor bedrijven in Nederland. Gericht op bereik, leads en conversies die tellen.",
                    "provider": { "@type": "Organization", "name": "Empowers", "url": "https://www.empowers.nl" },
                    "url": "https://www.empowers.nl/meta-ads"
                })}</script>
            </Helmet>
            <Navbar />

            {/* Hero */}
            <section className="w-full pt-48 pb-24 px-6 relative overflow-hidden meta-section">
                <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[100px] pointer-events-none" />
                <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 lg:items-end">
                    <div className="flex-1">
                        <span className="font-mono text-sm tracking-widest uppercase text-accent mb-6 block">Meta Ads</span>
                        <h1 className="font-sans font-bold text-primary text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[0.9] tracking-tight mb-6">
                            Ze scrollen voorbij.<br />Wij zorgen dat ze stoppen.
                        </h1>
                        <p className="font-sans text-primary/70 text-lg md:text-xl max-w-lg leading-relaxed font-medium mb-8">
                            3,7 miljard mensen op Facebook en Instagram. Jouw klant zit ertussen. Wij vinden hem, spreken hem aan en zetten hem in beweging.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link to="/contact" className="btn-magnetic inline-flex items-center justify-center bg-accent text-background font-sans font-bold text-base px-8 py-4 rounded-[2rem] hover:bg-accent/90 transition-colors">
                                Plan een gratis gesprek
                            </Link>
                        </div>
                    </div>
                    <div className="flex-1 w-full h-[300px] sm:h-[320px] lg:h-[360px]">
                        <CampaignMetricsAnim />
                    </div>
                </div>
            </section>

            {/* Wat zijn Meta Ads */}
            <section className="w-full py-24 px-6 meta-section">
                <div className="max-w-6xl mx-auto flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-24">
                    <div className="flex-1">
                        <span className="font-mono text-sm tracking-widest uppercase text-accent mb-4 block">01 — Wat zijn Meta Ads?</span>
                        <h2 className="font-sans font-bold text-3xl md:text-4xl text-primary tracking-tight mb-6">Jij scrollt niet. Jouw klant wel.</h2>
                        <p className="font-sans text-primary/70 text-lg leading-relaxed mb-6">
                            <strong className="text-primary">Meta Ads</strong> bereiken mensen op Facebook, Instagram en Messenger. Het voordeel: precieze targeting op interesses, gedrag en lookalike audiences. Jij kiest wie jouw advertentie ziet.
                        </p>
                        <p className="font-sans text-primary/70 text-lg leading-relaxed mb-8">
                            Anders dan Google wacht je niet tot iemand zoekt. Jij bereikt jouw klant proactief op het moment dat hij scrolt. De kunst zit in de juiste doelgroep en het juiste creatief.
                        </p>
                        <div className="bg-accent/10 border-l-4 border-accent rounded-r-xl p-5">
                            <p className="font-sans text-primary font-medium italic">
                                "Een goede Meta campagne is 30% strategie en 70% creatief. Wij zorgen voor beide."
                            </p>
                        </div>
                    </div>
                    <div className="flex-1 w-full h-[260px] sm:h-[300px] lg:h-[320px]">
                        <TargetingAnim />
                    </div>
                </div>
            </section>

            {/* Waarom Meta Ads */}
            <section className="w-full py-24 px-6 bg-primary/[0.03] meta-section">
                <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
                    <div className="flex-1">
                        <span className="font-mono text-sm tracking-widest uppercase text-accent mb-4 block">02 — Waarom Meta Ads?</span>
                        <h2 className="font-sans font-bold text-3xl md:text-4xl text-primary tracking-tight mb-6">Bereik de juiste mensen.</h2>
                        <div className="flex flex-col gap-5">
                            {[
                                { icon: <Users className="w-5 h-5" />, claim: '3,7 miljard mensen actief op Meta platforms.', detail: 'Jouw doelgroep zit op Facebook of Instagram. Ongeacht de niche. De schaal is ongeëvenaard.' },
                                { icon: <Target className="w-5 h-5" />, claim: 'Targeten op gedrag, interesses en lookalikes.', detail: 'Bereik mensen op basis van wat ze doen, liken en kopen. Geen verspild bereik op de verkeerde personen.' },
                                { icon: <Heart className="w-5 h-5" />, claim: 'Retargeting werkt. Hard.', detail: 'Mensen die jouw website al bezochten opnieuw bereiken converteert 9x beter. Wij zetten dit structureel in.' },
                                { icon: <TrendingUp className="w-5 h-5" />, claim: 'Klein beginnen. Groot schalen.', detail: 'Met een klein budget beginnen kan. Zodra het werkt, zetten we meer benzine op het vuur. De resultaten groeien mee.' },
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
                        <StatsAnim />
                    </div>
                </div>
            </section>

            {/* Onze aanpak */}
            <section className="w-full py-24 px-6 meta-section">
                <div className="max-w-6xl mx-auto flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-24">
                    <div className="flex-1">
                        <span className="font-mono text-sm tracking-widest uppercase text-accent mb-4 block">03 — Onze aanpak</span>
                        <h2 className="font-sans font-bold text-3xl md:text-4xl text-primary tracking-tight mb-6">Van pixel tot aankoop.</h2>
                        <p className="font-sans text-primary/70 text-lg leading-relaxed mb-8">
                            We starten met een solide technische basis: pixel, conversies en tracking. Daarna bouwen we een volledige funnelstrategie van bewustwording tot aankoop.
                        </p>
                        <div className="flex flex-col gap-3">
                            {[
                                'Meta Pixel en Conversions API correct instellen',
                                'Doelgroeponderzoek en audience opbouw',
                                'Creative strategie voor elke fase van de funnel',
                                'Maandelijkse optimalisatie en rapportage',
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
            <section className="w-full py-24 px-6 meta-section">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-white rounded-[2rem] border border-primary/10 shadow-[0_8px_40px_rgb(0,0,0,0.06)] p-8 sm:p-12 flex flex-col md:flex-row items-center gap-8 mb-8">
                        <div className="flex-1">
                            <span className="font-mono text-xs uppercase tracking-widest text-accent mb-3 block">Gratis rapport</span>
                            <h3 className="font-sans font-bold text-2xl text-primary mb-3">Alles over Meta Ads. In één rapport.</h3>
                            <p className="font-sans text-primary/60 text-sm leading-relaxed mb-6">
                                Download ons Meta Ads rapport. Onze funnelstrategie, targeting aanpak en concrete stappen. Zodat jij meer haalt uit Facebook en Instagram.
                            </p>
                            <a
                                href="/Meta-Ads-Strategie_Empowers.pdf"
                                download
                                className="btn-magnetic inline-flex items-center gap-3 bg-accent text-background font-sans font-bold text-base px-8 py-4 rounded-[2rem] hover:bg-accent/90 transition-colors"
                            >
                                <Download className="w-5 h-5" />
                                Download gratis rapport (PDF)
                            </a>
                        </div>
                        <div className="shrink-0 w-32 h-40 bg-primary rounded-xl flex flex-col items-center justify-center gap-2 shadow-lg">
                            <div className="text-background/60 font-mono text-[10px] uppercase tracking-widest">Meta Ads</div>
                            <div className="text-background font-bold text-lg font-sans">Empowers</div>
                            <div className="w-8 h-0.5 bg-accent rounded" />
                            <div className="text-background/40 font-mono text-[9px]">2026</div>
                        </div>
                    </div>
                    <div className="bg-primary rounded-[2rem] p-8 sm:p-12 text-center relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
                        <h3 className="relative z-10 font-drama italic text-background text-3xl sm:text-4xl md:text-5xl mb-4">Klaar voor meer conversies?</h3>
                        <p className="relative z-10 font-sans text-background/70 mb-8 max-w-md mx-auto">
                            Plan een gesprek. We kijken samen naar jouw situatie en laten zien hoe jouw merk beweegt op Meta. Zullen we?
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
