import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ArrowRight, Download, CheckCircle, Heart, Play, TrendingUp, Zap } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

// Animatie: viral performance stats dashboard
const ViralStatsAnim = () => {
    const MAX_H = 56;
    const bars = [
        { label: 'Ma', views: 84 }, { label: 'Di', views: 62 }, { label: 'Wo', views: 91 },
        { label: 'Do', views: 73 }, { label: 'Vr', views: 100 }, { label: 'Za', views: 88 },
    ];
    return (
        <div className="w-full h-full bg-[#111] rounded-[2rem] flex flex-col justify-center p-4 sm:p-6 gap-3 sm:gap-4 border border-white/5">
            <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-widest text-white/40">Views per dag</span>
                <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                    <span className="font-mono text-[10px] text-accent">TikTok Ads</span>
                </div>
            </div>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="font-drama italic text-3xl text-white leading-tight"
            >
                3.2M<span className="text-accent text-base font-sans font-normal ml-2 not-italic">bereikt</span>
            </motion.div>
            <div className="flex items-end gap-2 h-16">
                {bars.map((b, i) => {
                    const barH = Math.round((b.views / 100) * MAX_H);
                    return (
                        <div key={i} className="flex flex-col items-center gap-1 flex-1">
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                whileInView={{ height: barH, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 + 0.4, duration: 0.5, ease: 'easeOut' }}
                                className="w-full rounded-sm bg-gradient-to-t from-accent/70 to-accent"
                            />
                            <span className="font-mono text-[8px] text-white/30">{b.label}</span>
                        </div>
                    );
                })}
            </div>
            <div className="grid grid-cols-2 gap-2">
                {[
                    { label: 'CPM', value: '€1.80', color: 'text-accent' },
                    { label: 'CTR', value: '4.7%', color: 'text-white' },
                ].map((m, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.15 + 1 }}
                        className="bg-white/5 rounded-xl p-3 border border-white/10"
                    >
                        <div className="font-mono text-[9px] text-white/30 uppercase tracking-wider mb-1">{m.label}</div>
                        <div className={`font-mono font-bold text-base ${m.color}`}>{m.value}</div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

// Animatie: content formats
const ContentFormatAnim = () => {
    const formats = [
        { label: 'In-Feed Ads', desc: 'Naadloos in de For You Page', active: true },
        { label: 'TopView', desc: 'Eerste video bij openen app', active: false },
        { label: 'Spark Ads', desc: 'Boost bestaande organische content', active: false },
        { label: 'Smart+', desc: 'AI-gestuurde optimalisatie', active: true },
    ];
    return (
        <div className="w-full h-full bg-white border border-primary/10 rounded-[2rem] flex flex-col justify-center p-4 sm:p-6 gap-2 sm:gap-3">
            <div className="font-mono text-xs uppercase tracking-widest text-primary/40 mb-1 sm:mb-2">Advertentieformaten</div>
            {formats.map((f, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 }}
                    className={`flex items-center justify-between rounded-xl px-4 py-3 border ${f.active ? 'bg-accent/5 border-accent/20' : 'bg-white border-primary/10'}`}
                >
                    <div>
                        <div className={`font-sans font-bold text-sm ${f.active ? 'text-accent' : 'text-primary/60'}`}>{f.label}</div>
                        <div className="font-sans text-xs text-primary/40">{f.desc}</div>
                    </div>
                    {f.active && <div className="w-2 h-2 rounded-full bg-accent animate-pulse shrink-0" />}
                </motion.div>
            ))}
        </div>
    );
};

// Animatie: stats
const StatsAnim = () => {
    const stats = [
        { value: '1B+', label: 'actieve gebruikers wereldwijd', color: 'text-accent' },
        { value: '€0.10', label: 'gemiddelde cost-per-view', color: 'text-primary' },
        { value: '67%', label: 'van gebruikers is ouder dan 25 jaar', color: 'text-accent' },
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
        { nr: '01', title: 'Creative strategie', desc: 'Native aanpak: authentiek, snel en platform-eigen. Zo werkt TikTok.' },
        { nr: '02', title: 'Campagne lanceren', desc: 'In-Feed Ads en Spark Ads live met de juiste doelgroep en biedstrategie.' },
        { nr: '03', title: 'Testen & bijsturen', desc: 'Creative testing op hooks, formats en CTA\'s. Snel leren wat triggert.' },
        { nr: '04', title: 'Schalen', desc: 'Winnende creatives opschalen. Smart+ voor AI-gestuurde optimalisatie.' },
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

export default function TikTokAdsPage() {
    const mainRef = useRef(null);

    useEffect(() => {
        window.scrollTo(0, 0);
        let ctx = gsap.context(() => {
            gsap.utils.toArray('.tt-section').forEach((section) => {
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
                <title>TikTok Ads – Jouw Merk in Motion | Empowers</title>
                <meta name="description" content="TikTok is niet alleen voor jongeren. Lage kosten per klik, enorm bereik en explosieve groei. Empowers zet jouw merk in motion met TikTok Ads." />
                <link rel="canonical" href="https://www.empowers.nl/tiktok-ads" />
                <meta property="og:title" content="TikTok Ads – Jouw Merk in Motion | Empowers" />
                <meta property="og:description" content="TikTok is niet alleen voor jongeren. Lage kosten per klik, enorm bereik en explosieve groei. Empowers zet jouw merk in motion met TikTok Ads." />
                <meta property="og:url" content="https://www.empowers.nl/tiktok-ads" />
                <meta property="og:type" content="website" />
                <script type="application/ld+json">{JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Service",
                    "name": "TikTok Ads Campagnebeheer",
                    "serviceType": "TikTok Ads beheer",
                    "description": "Empowers beheert TikTok Ads campagnes voor bedrijven in Nederland. Lage kosten per klik, enorm bereik en creatieve campagnes die converteren.",
                    "provider": { "@type": "Organization", "name": "Empowers", "url": "https://www.empowers.nl" },
                    "url": "https://www.empowers.nl/tiktok-ads"
                })}</script>
            </Helmet>
            <Navbar />

            {/* Hero */}
            <section className="w-full pt-48 pb-24 px-6 relative overflow-hidden tt-section">
                <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[100px] pointer-events-none" />
                <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 lg:items-end">
                    <div className="flex-1">
                        <span className="font-mono text-sm tracking-widest uppercase text-accent mb-6 block">TikTok Ads</span>
                        <h1 className="font-sans font-bold text-primary text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[0.9] tracking-tight mb-6">
                            Jouw merk<br />in motion.
                        </h1>
                        <p className="font-sans text-primary/70 text-lg md:text-xl max-w-lg leading-relaxed font-medium mb-8">
                            TikTok is niet alleen voor jongeren. Laag CPM, enorm bereik en een platform dat elke maand harder groeit. Wij zetten jouw merk in beweging.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link to="/contact" className="btn-magnetic inline-flex items-center justify-center bg-accent text-background font-sans font-bold text-base px-8 py-4 rounded-[2rem] hover:bg-accent/90 transition-colors">
                                Plan een gratis gesprek
                            </Link>
                        </div>
                    </div>
                    <div className="flex-1 w-full h-[280px] sm:h-[320px] lg:h-[380px]">
                        <ViralStatsAnim />
                    </div>
                </div>
            </section>

            {/* Wat zijn TikTok Ads */}
            <section className="w-full py-24 px-6 tt-section">
                <div className="max-w-6xl mx-auto flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-24">
                    <div className="flex-1">
                        <span className="font-mono text-sm tracking-widest uppercase text-accent mb-4 block">01 — Wat zijn TikTok Ads?</span>
                        <h2 className="font-sans font-bold text-3xl md:text-4xl text-primary tracking-tight mb-6">Creativiteit wint. Altijd.</h2>
                        <p className="font-sans text-primary/70 text-lg leading-relaxed mb-6">
                            <strong className="text-primary">TikTok Ads</strong> gaan naadloos op in de For You Page. Het platform beloont creativiteit en relevantie, niet alleen budget. Een sterk creatief kan met een klein budget miljoenen mensen bereiken.
                        </p>
                        <p className="font-sans text-primary/70 text-lg leading-relaxed mb-8">
                            67% van de TikTok gebruikers is ouder dan 25. Van mode en food tot financiële diensten, TikTok werkt voor verrassend veel branches. De sleutel: content die aanvoelt als TikTok, niet als een advertentie.
                        </p>
                        <div className="bg-accent/10 border-l-4 border-accent rounded-r-xl p-5">
                            <p className="font-sans text-primary font-medium italic">
                                "Op TikTok wint de beste creative. Niet het grootste budget. Dat is jouw kans."
                            </p>
                        </div>
                    </div>
                    <div className="flex-1 w-full h-[300px] sm:h-[340px] lg:h-[360px]">
                        <ContentFormatAnim />
                    </div>
                </div>
            </section>

            {/* Waarom TikTok Ads */}
            <section className="w-full py-24 px-6 bg-primary/[0.03] tt-section">
                <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
                    <div className="flex-1">
                        <span className="font-mono text-sm tracking-widest uppercase text-accent mb-4 block">02 — Waarom TikTok Ads?</span>
                        <h2 className="font-sans font-bold text-3xl md:text-4xl text-primary tracking-tight mb-6">Laag budget. Groot bereik. Sterke groei.</h2>
                        <div className="flex flex-col gap-5">
                            {[
                                { icon: <Zap className="w-5 h-5" />, claim: 'Laagste CPM van alle grote platformen.', detail: 'TikTok biedt nog steeds aanzienlijk lagere kosten per duizend vertoningen dan Meta of YouTube. En het bereik is enorm.' },
                                { icon: <Play className="w-5 h-5" />, claim: 'Een sterke hook is alles.', detail: 'De eerste twee seconden bepalen of iemand blijft of scrolt. Wij bouwen creatives die vasthouden. Dat is het spel op TikTok.' },
                                { icon: <TrendingUp className="w-5 h-5" />, claim: 'Nederland groeit. Wie nu instapt profiteert.', detail: 'TikTok groeide in Nederland explosief de afgelopen jaren. Wie nu begint, adverteert in een relatief onverzadigde markt.' },
                                { icon: <Heart className="w-5 h-5" />, claim: '95 minuten per dag. Per gebruiker.', detail: 'TikTok gebruikers zijn nergens zo lang actief als hier. Meer tijd op het platform betekent meer kansen om jouw merk te laten landen.' },
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
            <section className="w-full py-24 px-6 tt-section">
                <div className="max-w-6xl mx-auto flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-24">
                    <div className="flex-1">
                        <span className="font-mono text-sm tracking-widest uppercase text-accent mb-4 block">03 — Onze aanpak</span>
                        <h2 className="font-sans font-bold text-3xl md:text-4xl text-primary tracking-tight mb-6">Beginnen met het creatief. Schalen wat werkt.</h2>
                        <p className="font-sans text-primary/70 text-lg leading-relaxed mb-8">
                            Op TikTok begint alles met het creatief. Wij denken native: wat past bij jouw merk en bij het platform? Daarna testen we snel, leren we wat werkt en schalen we de winnaars op.
                        </p>
                        <div className="flex flex-col gap-3">
                            {[
                                'Native creative strategie per branche',
                                'In-Feed Ads en Spark Ads opzetten',
                                'Snelle creative tests met duidelijke lessen',
                                'Smart+ voor AI-gestuurde budgetoptimalisatie',
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
            <section className="w-full py-24 px-6 tt-section">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-white rounded-[2rem] border border-primary/10 shadow-[0_8px_40px_rgb(0,0,0,0.06)] p-8 sm:p-12 flex flex-col md:flex-row items-center gap-8 mb-8">
                        <div className="flex-1">
                            <span className="font-mono text-xs uppercase tracking-widest text-accent mb-3 block">Gratis rapport</span>
                            <h3 className="font-sans font-bold text-2xl text-primary mb-3">Alles over TikTok Ads. In één rapport.</h3>
                            <p className="font-sans text-primary/60 text-sm leading-relaxed mb-6">
                                Download ons TikTok Ads rapport. Onze creative strategie, aanpak en concrete stappen. Zodat jouw merk op TikTok gaat bewegen.
                            </p>
                            <a
                                href="/TikTok-Ads_Empowers.pdf"
                                download
                                className="btn-magnetic inline-flex items-center gap-3 bg-accent text-background font-sans font-bold text-base px-8 py-4 rounded-[2rem] hover:bg-accent/90 transition-colors"
                            >
                                <Download className="w-5 h-5" />
                                Download gratis rapport (PDF)
                            </a>
                        </div>
                        <div className="shrink-0 w-32 h-40 bg-primary rounded-xl flex flex-col items-center justify-center gap-2 shadow-lg">
                            <div className="text-background/60 font-mono text-[10px] uppercase tracking-widest">TikTok Ads</div>
                            <div className="text-background font-bold text-lg font-sans">Empowers</div>
                            <div className="w-8 h-0.5 bg-accent rounded" />
                            <div className="text-background/40 font-mono text-[9px]">2026</div>
                        </div>
                    </div>
                    <div className="bg-primary rounded-[2rem] p-8 sm:p-12 text-center relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
                        <h3 className="relative z-10 font-drama italic text-background text-3xl sm:text-4xl md:text-5xl mb-4">Klaar om viral te gaan?</h3>
                        <p className="relative z-10 font-sans text-background/70 mb-8 max-w-md mx-auto">
                            Plan een gesprek. We kijken samen naar jouw situatie en laten zien hoe jouw merk beweegt op TikTok. Zullen we?
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
