import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ArrowRight, Download, CheckCircle, Search, TrendingUp, BarChart2, Globe } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

// Animatie: Google zoekresultaten
const SearchResultAnim = () => {
    const results = [
        { pos: 1, title: 'Jouw bedrijf – de beste keuze', url: 'www.jouwebsite.nl', highlight: true },
        { pos: 2, title: 'Concurrent A – oplossingen', url: 'www.concurrent-a.nl', highlight: false },
        { pos: 3, title: 'Concurrent B – diensten', url: 'www.concurrent-b.nl', highlight: false },
    ];
    return (
        <div className="w-full h-full bg-white border border-primary/10 rounded-[2rem] flex flex-col justify-center p-6 gap-3">
            <div className="flex items-center gap-2 bg-white rounded-xl px-4 py-2.5 border border-primary/10 mb-2">
                <Search className="w-4 h-4 text-primary/40" />
                <span className="font-sans text-sm text-primary/50">beste marketingbureau nederland</span>
                <div className="ml-auto w-5 h-5 rounded-full bg-accent flex items-center justify-center">
                    <Search className="w-3 h-3 text-white" />
                </div>
            </div>
            {results.map((r, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.2 + 0.3 }}
                    className={`rounded-xl p-3.5 border ${r.highlight ? 'bg-accent/5 border-accent/30' : 'bg-white border-primary/10'}`}
                >
                    <div className="flex items-center gap-2 mb-1">
                        <span className={`font-mono text-xs font-bold ${r.highlight ? 'text-accent' : 'text-primary/30'}`}>#{r.pos}</span>
                        <span className={`font-sans text-xs ${r.highlight ? 'text-accent' : 'text-primary/30'}`}>{r.url}</span>
                    </div>
                    <div className={`font-sans text-sm font-medium ${r.highlight ? 'text-primary' : 'text-primary/40'}`}>{r.title}</div>
                </motion.div>
            ))}
        </div>
    );
};

// Animatie: SEO pijlers
const SeoPillarsAnim = () => {
    const pillars = [
        { label: 'Technische SEO', width: '90%', delay: 0 },
        { label: 'Content kwaliteit', width: '85%', delay: 0.2 },
        { label: 'Autoriteit & links', width: '75%', delay: 0.4 },
        { label: 'Gebruikerservaring', width: '80%', delay: 0.6 },
    ];
    return (
        <div className="w-full h-full bg-white border border-primary/10 rounded-[2rem] flex flex-col justify-center p-8 gap-6">
            {pillars.map((p, i) => (
                <div key={i} className="space-y-2">
                    <div className="flex justify-between text-xs font-mono uppercase tracking-widest text-primary/50">
                        <span>{p.label}</span>
                        <span>{p.width}</span>
                    </div>
                    <div className="h-2 w-full bg-primary/5 rounded-full overflow-hidden">
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: p.width }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, delay: p.delay, ease: 'easeOut' }}
                            className="h-full bg-primary rounded-full"
                        />
                    </div>
                </div>
            ))}
        </div>
    );
};

// Animatie: organische groei
const OrganicGrowthAnim = () => (
    <div className="w-full h-full bg-white border border-primary/10 rounded-[2rem] flex items-center justify-center p-6 overflow-hidden">
        <div className="w-full">
            <div className="text-xs font-mono uppercase tracking-widest text-primary/40 mb-4">Organisch verkeer over tijd</div>
            <svg className="w-full h-32 text-primary" viewBox="0 0 200 60" preserveAspectRatio="none">
                <motion.path
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2, ease: 'easeInOut' }}
                    d="M0,55 Q20,53 40,48 T80,38 T120,25 T160,12 T200,4"
                    fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"
                />
                <motion.path
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 0.08 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2, delay: 0.5 }}
                    d="M0,55 Q20,53 40,48 T80,38 T120,25 T160,12 T200,4 L200,60 L0,60 Z"
                    fill="currentColor"
                />
            </svg>
            <div className="flex justify-between mt-3">
                {['M1', 'M3', 'M6', 'M9', 'M12'].map((m) => (
                    <span key={m} className="text-[10px] font-mono text-primary/30">{m}</span>
                ))}
            </div>
        </div>
    </div>
);

// Animatie: aanpak fasen
const SeoFasenAnim = () => {
    const fasen = [
        { nr: '01', title: 'Technische audit', desc: 'Sitesnelheid, crawlbaarheid, structuur, canonical tags en indexering.' },
        { nr: '02', title: 'Content strategie', desc: 'Zoekwoordonderzoek, topic clusters, blogs en landingspagina\'s.' },
        { nr: '03', title: 'Autoriteit opbouwen', desc: 'Linkbuilding, vermeldingen en domeinautoriteit verhogen.' },
        { nr: '04', title: 'Meten & optimaliseren', desc: 'Maandelijkse rapportage, rankings bijhouden en bijsturen.' },
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

export default function SeoPage() {
    const mainRef = useRef(null);

    useEffect(() => {
        window.scrollTo(0, 0);
        let ctx = gsap.context(() => {
            gsap.utils.toArray('.seo-section').forEach((section) => {
                gsap.fromTo(section,
                    { opacity: 0, y: 50 },
                    {
                        opacity: 1, y: 0, duration: 0.9, ease: 'power3.out',
                        scrollTrigger: { trigger: section, start: 'top 85%' }
                    }
                );
            });
        }, mainRef);
        return () => ctx.revert();
    }, []);

    return (
        <main ref={mainRef} className="min-h-screen selection:bg-accent/30 selection:text-dark flex flex-col bg-background">
            <Helmet>
                <title>SEO – Search Engine Optimization | Empowers</title>
                <meta name="description" content="Gevonden worden zonder te betalen per klik. Empowers optimaliseert jouw website zodat Google jou ziet als het meest relevante bedrijf in jouw markt." />
                <link rel="canonical" href="https://www.empowers.nl/seo" />
                <meta property="og:title" content="SEO – Search Engine Optimization | Empowers" />
                <meta property="og:description" content="Gevonden worden zonder te betalen per klik. Empowers optimaliseert jouw website zodat Google jou ziet als het meest relevante bedrijf in jouw markt." />
                <meta property="og:url" content="https://www.empowers.nl/seo" />
                <meta property="og:type" content="website" />
                <script type="application/ld+json">{JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Service",
                    "name": "SEO – Search Engine Optimization",
                    "serviceType": "Zoekmachineoptimalisatie",
                    "description": "Empowers verzorgt SEO voor bedrijven in heel Nederland. Organisch hoger ranken in Google door technische optimalisatie, content en linkbuilding.",
                    "provider": { "@type": "Organization", "name": "Empowers", "url": "https://www.empowers.nl" },
                    "url": "https://www.empowers.nl/seo"
                })}</script>
            </Helmet>
            <Navbar />

            {/* Hero */}
            <section className="w-full pt-48 pb-24 px-6 relative overflow-hidden seo-section">
                <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[100px] pointer-events-none" />
                <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 lg:items-end">
                    <div className="flex-1">
                        <span className="font-mono text-sm tracking-widest uppercase text-accent mb-6 block">Search Engine Optimization</span>
                        <h1 className="font-sans font-bold text-primary text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[0.9] tracking-tight mb-6">
                            Gevonden worden<br />zonder te betalen.
                        </h1>
                        <p className="font-sans text-primary/70 text-lg md:text-xl max-w-lg leading-relaxed font-medium mb-8">
                            SEO is de fundering van duurzame online groei. Wij optimaliseren jouw website zodat Google jou ziet als het meest relevante bedrijf in jouw markt — dag na dag, zonder extra advertentiekosten.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link to="/contact" className="btn-magnetic inline-flex items-center justify-center bg-accent text-background font-sans font-bold text-base px-8 py-4 rounded-[2rem] hover:bg-accent/90 transition-colors">
                                Plan een gratis gesprek
                            </Link>
                            <Link to="/geo" className="inline-flex items-center gap-2 border border-primary/20 text-primary font-sans font-bold text-base px-8 py-4 rounded-[2rem] hover:bg-primary/5 transition-colors">
                                Bekijk ook GEO
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                    <div className="flex-1 h-[320px] lg:h-[360px]">
                        <SearchResultAnim />
                    </div>
                </div>
            </section>

            {/* Wat is SEO */}
            <section className="w-full py-24 px-6 seo-section">
                <div className="max-w-6xl mx-auto flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-24">
                    <div className="flex-1">
                        <span className="font-mono text-sm tracking-widest uppercase text-accent mb-4 block">01 — Wat is SEO?</span>
                        <h2 className="font-sans font-bold text-3xl md:text-4xl text-primary tracking-tight mb-6">De fundering van je online zichtbaarheid</h2>
                        <p className="font-sans text-primary/70 text-lg leading-relaxed mb-6">
                            SEO staat voor <strong className="text-primary">Search Engine Optimization</strong>. Je optimaliseert je website zodat zoekmachines zoals Google jou als meest relevante en betrouwbare bron zien voor jouw doelgroep.
                        </p>
                        <p className="font-sans text-primary/70 text-lg leading-relaxed mb-8">
                            In tegenstelling tot betaalde advertenties, bouwt SEO langdurige zichtbaarheid op. Eenmaal goed gepositioneerd in Google, blijf je zichtbaar — ook zonder extra advertentiebudget.
                        </p>
                        <div className="bg-primary/5 border-l-4 border-primary rounded-r-xl p-5">
                            <p className="font-sans text-primary font-medium italic">
                                "SEO is de fundering. GEO is de amplificatie. Wie beide inzet, is overal zichtbaar."
                            </p>
                        </div>
                    </div>
                    <div className="flex-1 w-full h-[320px]">
                        <SeoPillarsAnim />
                    </div>
                </div>
            </section>

            {/* Waarom SEO */}
            <section className="w-full py-24 px-6 bg-primary/[0.03] seo-section">
                <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
                    <div className="flex-1">
                        <span className="font-mono text-sm tracking-widest uppercase text-accent mb-4 block">02 — Waarom SEO?</span>
                        <h2 className="font-sans font-bold text-3xl md:text-4xl text-primary tracking-tight mb-6">Organisch verkeer dat blijft groeien</h2>
                        <div className="flex flex-col gap-5">
                            {[
                                { icon: <Search className="w-5 h-5" />, claim: 'Google verwerkt meer dan 8 miljard zoekopdrachten per dag', detail: 'De meerderheid van online ervaringen begint met een zoekopdracht. Wie niet gevonden wordt, bestaat niet.' },
                                { icon: <TrendingUp className="w-5 h-5" />, claim: 'Organisch verkeer converteert beter dan betaald', detail: 'Bezoekers die via Google op je website komen, hebben al actief gezocht naar jouw oplossing.' },
                                { icon: <BarChart2 className="w-5 h-5" />, claim: 'De top 3 resultaten krijgen 75% van alle klikken', detail: 'Positie 1 in Google is goud waard. Wij helpen je daar te komen en te blijven.' },
                                { icon: <Globe className="w-5 h-5" />, claim: 'SEO en GEO versterken elkaar', detail: 'Goede SEO-content scoort ook bij AI-tools. Wie nu in SEO investeert, bouwt ook een GEO-voorsprong op.' },
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex gap-4 items-start"
                                >
                                    <div className="shrink-0 w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center mt-0.5">
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
                    <div className="flex-1 w-full h-[280px]">
                        <OrganicGrowthAnim />
                    </div>
                </div>
            </section>

            {/* Onze aanpak */}
            <section className="w-full py-24 px-6 seo-section">
                <div className="max-w-6xl mx-auto flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-24">
                    <div className="flex-1">
                        <span className="font-mono text-sm tracking-widest uppercase text-accent mb-4 block">03 — Onze aanpak</span>
                        <h2 className="font-sans font-bold text-3xl md:text-4xl text-primary tracking-tight mb-6">Zo pakken wij het aan</h2>
                        <p className="font-sans text-primary/70 text-lg leading-relaxed mb-8">
                            Van technische audit tot content strategie en autoriteitsopbouw. We bouwen een SEO-aanpak die resultaten oplevert — niet na jaren, maar stap voor stap zichtbaar vanaf de eerste maanden.
                        </p>
                        <div className="flex flex-col gap-3">
                            {[
                                'Volledige technische SEO audit',
                                'Zoekwoordonderzoek en content planning',
                                'On-page en off-page optimalisatie',
                                'Maandelijkse rapportage met duidelijke KPI\'s',
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                                    <span className="font-sans text-primary/80 text-sm">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex-1 w-full h-[380px]">
                        <SeoFasenAnim />
                    </div>
                </div>
            </section>

            {/* SEO + GEO combinatie */}
            <section className="w-full py-24 px-6 bg-primary/[0.03] seo-section">
                <div className="max-w-4xl mx-auto text-center">
                    <span className="font-mono text-sm tracking-widest uppercase text-accent mb-4 block">04 — SEO + GEO</span>
                    <h2 className="font-sans font-bold text-3xl md:text-4xl text-primary tracking-tight mb-6">Twee strategieën, één doel</h2>
                    <p className="font-sans text-primary/70 text-lg leading-relaxed mb-12 max-w-2xl mx-auto">
                        SEO zorgt voor vindbaarheid in Google. GEO zorgt ervoor dat AI-tools zoals ChatGPT en Gemini jouw bedrijf aanbevelen. Samen zijn ze onverslaanbaar.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                        <div className="bg-white rounded-[1.5rem] p-8 border border-primary/10">
                            <div className="font-mono text-xs uppercase tracking-widest text-primary/40 mb-4">SEO — De Fundering</div>
                            <ul className="flex flex-col gap-2">
                                {['Domeinautoriteit en backlinks', 'Technische optimalisatie', 'Zoekwoorddichtheid', 'Click-through optimalisatie'].map((i) => (
                                    <li key={i} className="flex items-center gap-2 text-sm font-sans text-primary/70">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary/30 shrink-0" />{i}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-primary rounded-[1.5rem] p-8">
                            <div className="font-mono text-xs uppercase tracking-widest text-background/40 mb-4">GEO — De Amplificatie</div>
                            <ul className="flex flex-col gap-2">
                                {['Heldere structuur en opmaak', 'Citaties van betrouwbare bronnen', 'Verse, actuele content', 'Topicale volledigheid'].map((i) => (
                                    <li key={i} className="flex items-center gap-2 text-sm font-sans text-background/70">
                                        <div className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />{i}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="mt-8">
                        <Link to="/geo" className="inline-flex items-center gap-2 text-accent font-mono text-sm uppercase tracking-widest hover:text-primary transition-colors">
                            Meer over GEO
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Download + CTA */}
            <section className="w-full py-24 px-6 seo-section">
                <div className="max-w-4xl mx-auto">
                    {/* Download kaart */}
                    <div className="bg-white rounded-[2rem] border border-primary/10 shadow-[0_8px_40px_rgb(0,0,0,0.06)] p-8 sm:p-12 flex flex-col md:flex-row items-center gap-8 mb-8">
                        <div className="flex-1">
                            <span className="font-mono text-xs uppercase tracking-widest text-accent mb-3 block">Gratis rapport</span>
                            <h3 className="font-sans font-bold text-2xl text-primary mb-3">De complete SEO gids voor groeiende bedrijven</h3>
                            <p className="font-sans text-primary/60 text-sm leading-relaxed mb-6">
                                Download ons volledige SEO-rapport. Met onze aanpak, concrete stappen en inzichten om jouw website duurzaam hoger te laten ranken in Google.
                            </p>
                            <a
                                href="/SEO-Strategie_Empowers.pdf"
                                download
                                className="btn-magnetic inline-flex items-center gap-3 bg-accent text-background font-sans font-bold text-base px-8 py-4 rounded-[2rem] hover:bg-accent/90 transition-colors"
                            >
                                <Download className="w-5 h-5" />
                                Download gratis rapport (PDF)
                            </a>
                        </div>
                        <div className="shrink-0 w-32 h-40 bg-primary rounded-xl flex flex-col items-center justify-center gap-2 shadow-lg">
                            <div className="text-background/60 font-mono text-[10px] uppercase tracking-widest">SEO Rapport</div>
                            <div className="text-background font-bold text-lg font-sans">Empowers</div>
                            <div className="w-8 h-0.5 bg-accent rounded" />
                            <div className="text-background/40 font-mono text-[9px]">2026</div>
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="bg-primary rounded-[2rem] p-8 sm:p-12 text-center relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
                        <h3 className="relative z-10 font-drama italic text-background text-3xl sm:text-4xl md:text-5xl mb-4">Klaar om organisch te groeien?</h3>
                        <p className="relative z-10 font-sans text-background/70 mb-8 max-w-md mx-auto">
                            Plan een vrijblijvend gesprek. We kijken samen naar je huidige situatie en laten zien welke SEO-kansen er liggen.
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
