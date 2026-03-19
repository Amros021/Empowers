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

// Animatie: social feed met sponsored post
const SocialFeedAnim = () => (
    <div className="w-full h-full bg-white border border-primary/10 rounded-[2rem] flex items-center justify-center p-4 overflow-hidden">
        <div className="w-[200px] h-[340px] bg-[#F0F2F5] rounded-[1.5rem] border-4 border-gray-800 overflow-hidden relative">
            {/* Header */}
            <div className="bg-white px-3 py-2 flex items-center justify-between border-b border-gray-100">
                <div className="w-5 h-5 rounded bg-[#1877F2] flex items-center justify-center">
                    <span className="text-white font-bold text-[10px]">f</span>
                </div>
                <div className="w-16 h-2 bg-gray-200 rounded-full" />
            </div>
            {/* Feed */}
            <div className="p-2 flex flex-col gap-2 overflow-hidden">
                {/* Organic post (blurred) */}
                <div className="bg-white rounded-lg p-2 opacity-40">
                    <div className="flex items-center gap-1.5 mb-1.5">
                        <div className="w-5 h-5 rounded-full bg-gray-300" />
                        <div className="w-16 h-1.5 bg-gray-200 rounded-full" />
                    </div>
                    <div className="w-full h-10 bg-gray-100 rounded" />
                </div>
                {/* Sponsored post */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="bg-white rounded-lg border border-[#1877F2]/20 overflow-hidden shadow-sm"
                >
                    <div className="p-2 flex items-center gap-1.5">
                        <div className="w-5 h-5 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-[8px] font-bold">E</div>
                        <div>
                            <div className="text-[8px] font-bold text-primary">Empowers</div>
                            <div className="text-[7px] text-gray-400">Gesponsord</div>
                        </div>
                    </div>
                    <div className="h-16 bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                        <span className="font-drama italic text-white text-lg">Groei.</span>
                    </div>
                    <div className="p-2">
                        <div className="text-[8px] text-primary/70 mb-1.5">Meer leads, meer omzet. Bekijk hoe wij jouw Meta Ads laten presteren. 🚀</div>
                        <div className="flex items-center justify-between">
                            <motion.div
                                initial={{ scale: 1 }}
                                animate={{ scale: [1, 1.3, 1] }}
                                transition={{ delay: 1.2, duration: 0.4 }}
                                className="flex items-center gap-0.5"
                            >
                                <Heart className="w-3 h-3 text-[#E63B2E] fill-[#E63B2E]" />
                                <span className="text-[7px] font-mono text-gray-500">1.2k</span>
                            </motion.div>
                            <span className="text-[7px] text-[#1877F2] font-bold bg-[#1877F2]/10 px-2 py-0.5 rounded">Meer info</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    </div>
);

// Animatie: targeting opties
const TargetingAnim = () => {
    const segments = [
        { label: 'Leeftijd 25–45', pct: 78 },
        { label: 'Interesse: marketing', pct: 64 },
        { label: 'Gedrag: beslisser', pct: 45 },
    ];
    return (
        <div className="w-full h-full bg-white border border-primary/10 rounded-[2rem] flex flex-col justify-center p-8 gap-6">
            <div className="font-mono text-xs uppercase tracking-widest text-primary/40 mb-2">Doelgroep match</div>
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
        <div className="w-full h-full bg-white border border-primary/10 rounded-[2rem] flex flex-col justify-center gap-6 p-8">
            {stats.map((s, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.2, duration: 0.5 }}
                    className="flex items-center gap-4"
                >
                    <span className={`font-sans font-bold text-3xl md:text-4xl ${s.color} w-24 shrink-0`}>{s.value}</span>
                    <span className="font-sans text-sm text-primary/60 leading-tight">{s.label}</span>
                </motion.div>
            ))}
        </div>
    );
};

// Animatie: aanpak fasen
const FasenAnim = () => {
    const fasen = [
        { nr: '01', title: 'Pixel & tracking', desc: 'Meta Pixel correct instellen, conversies koppelen en datakwaliteit borgen.' },
        { nr: '02', title: 'Doelgroep & creatief', desc: 'Audience research, lookalike audiences bouwen en advertentiecreatives uitwerken.' },
        { nr: '03', title: 'Campagne lanceren', desc: 'Top-of-funnel, retargeting en conversiecampagnes parallel draaien.' },
        { nr: '04', title: 'Schalen & optimaliseren', desc: 'Budget verschuiven naar winnende sets. Creative testing. Maandelijkse rapportage.' },
    ];
    return (
        <div className="w-full h-full bg-white border border-primary/10 rounded-[2rem] flex flex-col justify-center gap-3 p-6">
            {fasen.map((f, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 }}
                    className="flex gap-3 items-start bg-white rounded-xl p-3.5 border border-primary/10"
                >
                    <span className="font-mono text-xs text-background bg-primary px-2 py-0.5 rounded-full shrink-0 mt-0.5">{f.nr}</span>
                    <div>
                        <div className="font-sans font-bold text-sm text-primary mb-0.5">{f.title}</div>
                        <div className="font-sans text-xs text-primary/55 leading-relaxed">{f.desc}</div>
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
                            Jouw ideale klant<br />op Facebook & Instagram.
                        </h1>
                        <p className="font-sans text-primary/70 text-lg md:text-xl max-w-lg leading-relaxed font-medium mb-8">
                            Met meer dan 3,7 miljard gebruikers zijn Facebook en Instagram de krachtigste platformen om jouw doelgroep te bereiken. Wij bouwen campagnes die niet alleen gezien worden, maar ook converteren.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link to="/contact" className="btn-magnetic inline-flex items-center justify-center bg-accent text-background font-sans font-bold text-base px-8 py-4 rounded-[2rem] hover:bg-accent/90 transition-colors">
                                Plan een gratis gesprek
                            </Link>
                        </div>
                    </div>
                    <div className="flex-1 h-[320px] lg:h-[360px]">
                        <SocialFeedAnim />
                    </div>
                </div>
            </section>

            {/* Wat zijn Meta Ads */}
            <section className="w-full py-24 px-6 meta-section">
                <div className="max-w-6xl mx-auto flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-24">
                    <div className="flex-1">
                        <span className="font-mono text-sm tracking-widest uppercase text-accent mb-4 block">01 — Wat zijn Meta Ads?</span>
                        <h2 className="font-sans font-bold text-3xl md:text-4xl text-primary tracking-tight mb-6">Adverteren waar jouw klant zijn tijd doorbrengt</h2>
                        <p className="font-sans text-primary/70 text-lg leading-relaxed mb-6">
                            <strong className="text-primary">Meta Ads</strong> zijn advertenties op Facebook, Instagram, Messenger en het Audience Network. Het unieke voordeel: ongekend precieze targeting op basis van interesses, gedrag, demografische gegevens en lookalike audiences.
                        </p>
                        <p className="font-sans text-primary/70 text-lg leading-relaxed mb-8">
                            In tegenstelling tot Google Ads wacht je niet tot iemand zoekt — je bereikt mensen proactief op het moment dat ze scrollen. De kunst zit in de juiste doelgroep, het juiste creatief en de juiste boodschap.
                        </p>
                        <div className="bg-accent/10 border-l-4 border-accent rounded-r-xl p-5">
                            <p className="font-sans text-primary font-medium italic">
                                "Een goede Meta campagne is 30% strategie en 70% creatief. Wij zorgen voor beide."
                            </p>
                        </div>
                    </div>
                    <div className="flex-1 w-full h-[320px]">
                        <TargetingAnim />
                    </div>
                </div>
            </section>

            {/* Waarom Meta Ads */}
            <section className="w-full py-24 px-6 bg-primary/[0.03] meta-section">
                <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
                    <div className="flex-1">
                        <span className="font-mono text-sm tracking-widest uppercase text-accent mb-4 block">02 — Waarom Meta Ads?</span>
                        <h2 className="font-sans font-bold text-3xl md:text-4xl text-primary tracking-tight mb-6">Bereik, precisie en conversie</h2>
                        <div className="flex flex-col gap-5">
                            {[
                                { icon: <Users className="w-5 h-5" />, claim: '3,7 miljard mensen actief op Meta platforms', detail: 'Ongeacht jouw niche — jouw doelgroep zit op Facebook of Instagram. De schaal is ongeëvenaard.' },
                                { icon: <Target className="w-5 h-5" />, claim: 'Precisietargeting op gedrag en interesses', detail: 'Bereik mensen op basis van wat ze doen, liken en kopen. Geen verspild bereik op de verkeerde mensen.' },
                                { icon: <Heart className="w-5 h-5" />, claim: 'Retargeting werkt extreem goed', detail: 'Mensen die jouw website hebben bezocht opnieuw bereiken converteert 9x beter. Wij zetten dit structureel in.' },
                                { icon: <TrendingUp className="w-5 h-5" />, claim: 'Lage instapkosten, hoge schaalbaarheid', detail: 'Zelfs met een klein budget kun je beginnen. Zodra het werkt, schalen we op en groeien de resultaten mee.' },
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
                    <div className="flex-1 w-full h-[320px]">
                        <StatsAnim />
                    </div>
                </div>
            </section>

            {/* Onze aanpak */}
            <section className="w-full py-24 px-6 meta-section">
                <div className="max-w-6xl mx-auto flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-24">
                    <div className="flex-1">
                        <span className="font-mono text-sm tracking-widest uppercase text-accent mb-4 block">03 — Onze aanpak</span>
                        <h2 className="font-sans font-bold text-3xl md:text-4xl text-primary tracking-tight mb-6">Van pixel tot schaling</h2>
                        <p className="font-sans text-primary/70 text-lg leading-relaxed mb-8">
                            We beginnen met een solide technische basis: pixel, conversies en tracking. Daarna bouwen we een volledige funnelstrategie — van bewustwording tot aankoop.
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
                    <div className="flex-1 w-full h-[400px]">
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
                            <h3 className="font-sans font-bold text-2xl text-primary mb-3">De complete Meta Ads gids</h3>
                            <p className="font-sans text-primary/60 text-sm leading-relaxed mb-6">
                                Download ons volledige Meta Ads rapport. Met onze funnelstrategie, targeting aanpak en concrete stappen om meer te halen uit Facebook en Instagram.
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
                            Plan een vrijblijvend gesprek. We kijken samen naar jouw situatie en laten zien welke Meta Ads kansen er liggen.
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
