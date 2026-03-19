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

// Animatie: zoekresultaat met Ad badge
const AdResultAnim = () => {
    const results = [
        { pos: 'Ad', title: 'Jouw bedrijf – direct bovenaan', url: 'www.jouwebsite.nl', ctr: '8.4%', highlight: true },
        { pos: '1', title: 'Concurrent A – organisch', url: 'www.concurrent-a.nl', ctr: '2.1%', highlight: false },
        { pos: '2', title: 'Concurrent B – organisch', url: 'www.concurrent-b.nl', ctr: '1.2%', highlight: false },
    ];
    return (
        <div className="w-full h-full bg-white border border-primary/10 rounded-[2rem] flex flex-col justify-center p-6 gap-3">
            <div className="flex items-center gap-2 bg-gray-50 rounded-xl px-4 py-2.5 border border-primary/10 mb-2">
                <MousePointer2 className="w-4 h-4 text-primary/40" />
                <span className="font-sans text-sm text-primary/50">zoekterm: marketing bureau nederland</span>
            </div>
            {results.map((r, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.2 + 0.3 }}
                    className={`rounded-xl p-3.5 border ${r.highlight ? 'bg-green-50/60 border-green-200' : 'bg-white border-primary/10'}`}
                >
                    <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-2">
                            <span className={`font-mono text-xs font-bold px-1.5 py-0.5 rounded ${r.highlight ? 'bg-green-600 text-white' : 'text-primary/30'}`}>{r.pos}</span>
                            <span className={`font-sans text-xs ${r.highlight ? 'text-green-700' : 'text-primary/30'}`}>{r.url}</span>
                        </div>
                        <span className={`font-mono text-xs font-bold ${r.highlight ? 'text-green-700' : 'text-primary/20'}`}>CTR {r.ctr}</span>
                    </div>
                    <div className={`font-sans text-sm font-medium ${r.highlight ? 'text-primary' : 'text-primary/40'}`}>{r.title}</div>
                </motion.div>
            ))}
        </div>
    );
};

// Animatie: campagne structuur
const CampaignStructureAnim = () => (
    <div className="w-full h-full bg-white border border-primary/10 rounded-[2rem] flex items-center justify-center p-6 overflow-hidden">
        <div className="w-full flex flex-col gap-3">
            {[
                { level: 'Campagne', label: 'Merk & Awareness', color: 'bg-primary text-background' },
                { level: 'Advertentiegroep', label: 'Productcategorie A', color: 'bg-primary/10 text-primary' },
                { level: 'Advertentie', label: 'Dynamische zoekadvertentie', color: 'bg-accent/10 text-accent' },
            ].map((item, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.2 }}
                    style={{ marginLeft: `${i * 20}px` }}
                    className={`flex items-center gap-3 rounded-xl px-4 py-3 ${item.color}`}
                >
                    <div className="font-mono text-[10px] uppercase tracking-widest opacity-60">{item.level}</div>
                    <div className="font-sans text-sm font-medium">{item.label}</div>
                </motion.div>
            ))}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
                className="flex items-center gap-2 ml-12 mt-2"
            >
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="font-mono text-xs text-primary/40">Live — bijsturing op basis van data</span>
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
        { nr: '01', title: 'Account audit', desc: 'Volledige analyse van bestaande campagnes, verspild budget en kansen.' },
        { nr: '02', title: 'Structuur & strategie', desc: 'Campagnestructuur opzetten, zoekwoordonderzoek, doelgroepen instellen.' },
        { nr: '03', title: 'Lanceren & testen', desc: 'Advertenties live zetten, A/B testen op teksten en biedstrategieën.' },
        { nr: '04', title: 'Bijsturen & schalen', desc: 'Maandelijkse optimalisatie op basis van data. Budget verschuiven naar wat werkt.' },
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
                    "description": "Empowers beheert Google Ads campagnes voor bedrijven in Nederland. Van strategie tot optimalisatie, zodat jouw advertentiebudget maximaal rendeert.",
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
                            Bovenaan Google<br />op het juiste moment.
                        </h1>
                        <p className="font-sans text-primary/70 text-lg md:text-xl max-w-lg leading-relaxed font-medium mb-8">
                            Google Ads zet jouw bedrijf direct bovenaan de zoekresultaten, precies wanneer iemand zoekt wat jij aanbiedt. Wij beheren jouw campagnes van A tot Z en sturen bij op basis van data, niet op gevoel.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link to="/contact" className="btn-magnetic inline-flex items-center justify-center bg-accent text-background font-sans font-bold text-base px-8 py-4 rounded-[2rem] hover:bg-accent/90 transition-colors">
                                Plan een gratis gesprek
                            </Link>
                        </div>
                    </div>
                    <div className="flex-1 h-[320px] lg:h-[360px]">
                        <AdResultAnim />
                    </div>
                </div>
            </section>

            {/* Wat zijn Google Ads */}
            <section className="w-full py-24 px-6 gads-section">
                <div className="max-w-6xl mx-auto flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-24">
                    <div className="flex-1">
                        <span className="font-mono text-sm tracking-widest uppercase text-accent mb-4 block">01 — Wat zijn Google Ads?</span>
                        <h2 className="font-sans font-bold text-3xl md:text-4xl text-primary tracking-tight mb-6">Zichtbaarheid die je kunt kopen — en optimaliseren</h2>
                        <p className="font-sans text-primary/70 text-lg leading-relaxed mb-6">
                            Met <strong className="text-primary">Google Ads</strong> betaal je alleen voor klikken. Jouw advertentie verschijnt bovenaan de zoekresultaten wanneer iemand actief zoekt naar jouw product of dienst. Dat is het verschil met social media: de intentie is er al.
                        </p>
                        <p className="font-sans text-primary/70 text-lg leading-relaxed mb-8">
                            Goed beheer maakt het verschil. Een slecht opgezette campagne verbrandt budget. Een goed geoptimaliseerde campagne levert structureel meer op dan hij kost.
                        </p>
                        <div className="bg-accent/10 border-l-4 border-accent rounded-r-xl p-5">
                            <p className="font-sans text-primary font-medium italic">
                                "Wij sturen bij op data. Geen buikgevoel, geen standaard aanpak — elke campagne is uniek."
                            </p>
                        </div>
                    </div>
                    <div className="flex-1 w-full h-[340px]">
                        <CampaignStructureAnim />
                    </div>
                </div>
            </section>

            {/* Waarom Google Ads */}
            <section className="w-full py-24 px-6 bg-primary/[0.03] gads-section">
                <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
                    <div className="flex-1">
                        <span className="font-mono text-sm tracking-widest uppercase text-accent mb-4 block">02 — Waarom Google Ads?</span>
                        <h2 className="font-sans font-bold text-3xl md:text-4xl text-primary tracking-tight mb-6">Resultaten die je direct ziet</h2>
                        <div className="flex flex-col gap-5">
                            {[
                                { icon: <Target className="w-5 h-5" />, claim: 'Hoge koopintentie', detail: 'Mensen die zoeken op Google zijn al op zoek naar een oplossing. Dat maakt elke klik waardevoller dan bij elk ander platform.' },
                                { icon: <MousePointer2 className="w-5 h-5" />, claim: 'Je betaalt alleen voor resultaat', detail: 'Cost-per-click betekent dat je alleen betaalt als iemand daadwerkelijk op jouw advertentie klikt. Geen budget verspillen aan views.' },
                                { icon: <TrendingUp className="w-5 h-5" />, claim: 'Schaalbaar zonder limiet', detail: 'Zodra het werkt, kun je het budget vergroten en direct meer leads of verkopen genereren. Groei op commando.' },
                                { icon: <BarChart2 className="w-5 h-5" />, claim: 'Volledig meetbaar', detail: 'Van klik tot aankoop. Elke euro is traceerbaar. Wij rapporteren maandelijks transparant over wat jouw budget oplevert.' },
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
                        <ROIAnim />
                    </div>
                </div>
            </section>

            {/* Onze aanpak */}
            <section className="w-full py-24 px-6 gads-section">
                <div className="max-w-6xl mx-auto flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-24">
                    <div className="flex-1">
                        <span className="font-mono text-sm tracking-widest uppercase text-accent mb-4 block">03 — Onze aanpak</span>
                        <h2 className="font-sans font-bold text-3xl md:text-4xl text-primary tracking-tight mb-6">Van audit tot groei</h2>
                        <p className="font-sans text-primary/70 text-lg leading-relaxed mb-8">
                            We beginnen altijd met een grondige analyse. Daarna bouwen we een campagnestructuur die converteert en blijven we maandelijks bijsturen — zodat je budget steeds harder werkt.
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
                    <div className="flex-1 w-full h-[400px]">
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
                            <h3 className="font-sans font-bold text-2xl text-primary mb-3">De complete Google Ads gids</h3>
                            <p className="font-sans text-primary/60 text-sm leading-relaxed mb-6">
                                Download ons volledige Google Ads rapport. Met onze campagnestrategie, aanpak en concrete stappen om jouw advertentiebudget maximaal te laten renderen.
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
                            Plan een vrijblijvend gesprek. We kijken samen naar jouw situatie en laten zien welke Google Ads kansen er liggen.
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
