import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ArrowRight, CheckCircle, Zap, MousePointer2, BarChart2, Smartphone } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

// Animatie: conversie funnel
const ConversionFunnelAnim = () => (
    <div className="w-full h-full bg-white border border-primary/10 rounded-[2rem] flex flex-col justify-center items-center p-6 gap-4 overflow-hidden">
        <div className="font-mono text-xs uppercase tracking-widest text-primary/40 mb-2">Gemiddelde website</div>
        <div className="w-full flex flex-col items-center gap-2">
            {[
                { label: '100 bezoekers', width: 'w-full', color: 'bg-primary/10', text: 'text-primary/60' },
                { label: '38 kijken verder', width: 'w-[60%]', color: 'bg-primary/20', text: 'text-primary/70' },
                { label: '12 klikken op CTA', width: 'w-[35%]', color: 'bg-primary/40', text: 'text-primary/80' },
                { label: '3 nemen contact op', width: 'w-[15%]', color: 'bg-accent', text: 'text-background font-bold' },
            ].map((step, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, scaleX: 0 }}
                    whileInView={{ opacity: 1, scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.2, duration: 0.6, ease: 'easeOut' }}
                    style={{ originX: 0 }}
                    className={`${step.width} rounded-lg px-4 py-2.5 flex items-center justify-between`}
                    style={{ background: step.color === 'bg-accent' ? 'var(--color-accent)' : undefined }}
                >
                    <div className={`${step.width} rounded-lg px-4 py-2.5 flex items-center justify-between ${step.color}`}>
                        <span className={`font-sans text-xs ${step.text}`}>{step.label}</span>
                        {i === 3 && <span className="font-mono text-xs text-background">3%</span>}
                    </div>
                </motion.div>
            ))}
        </div>
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1 }}
            className="mt-2 bg-accent/10 rounded-xl px-4 py-2 flex items-center gap-2"
        >
            <Zap className="w-4 h-4 text-accent" />
            <span className="font-sans text-xs font-bold text-accent">Na optimalisatie: 9% conversie</span>
        </motion.div>
    </div>
);

// Animatie: A/B test vergelijking
const ABTestAnim = () => (
    <div className="w-full h-full bg-white border border-primary/10 rounded-[2rem] flex flex-col justify-center p-6 gap-4 overflow-hidden">
        <div className="font-mono text-xs uppercase tracking-widest text-primary/40 mb-1">A/B Test Monitor</div>
        <div className="grid grid-cols-2 gap-3">
            <div className="bg-primary/5 rounded-xl p-4 border border-primary/10">
                <div className="font-mono text-xs text-primary/40 mb-3">Versie A</div>
                <div className="w-full h-2 bg-primary/10 rounded-full mb-2" />
                <div className="w-3/4 h-2 bg-primary/10 rounded-full mb-4" />
                <div className="w-full bg-primary/20 text-primary/50 text-xs font-sans text-center py-2 rounded-lg">Meer info</div>
                <div className="mt-3 font-mono text-xs text-primary/40 text-center">CTR 2.1%</div>
            </div>
            <motion.div
                initial={{ opacity: 0.4, scale: 0.97 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.4 }}
                className="bg-accent/5 rounded-xl p-4 border-2 border-accent/40 relative"
            >
                <div className="font-mono text-xs text-accent mb-3">Versie B</div>
                <div className="w-full h-2 bg-accent/20 rounded-full mb-2" />
                <div className="w-3/4 h-2 bg-accent/20 rounded-full mb-4" />
                <div className="w-full bg-accent text-background text-xs font-sans font-bold text-center py-2 rounded-lg">Start nu gratis</div>
                <div className="mt-3 font-mono text-xs text-accent font-bold text-center">CTR 8.4%</div>
                <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.9 }}
                    className="absolute -top-2 -right-2 bg-accent text-background text-[9px] font-mono font-bold px-2 py-1 rounded-full"
                >
                    WINNAAR +34%
                </motion.div>
            </motion.div>
        </div>
        <div className="flex items-center gap-2 mt-1">
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="font-mono text-xs text-primary/40">Test loopt live</span>
        </div>
    </div>
);

// Animatie: AI website builder
const AIWebsiteAnim = () => {
    const steps = [
        { label: 'Bedrijfsnaam & branche', done: true },
        { label: 'AI genereert structuur', done: true },
        { label: 'Design & kleuren instellen', done: true },
        { label: 'Live zetten', done: false, active: true },
    ];
    return (
        <div className="w-full h-full bg-white border border-primary/10 rounded-[2rem] flex flex-col justify-center p-6 gap-4 overflow-hidden">
            <div className="font-mono text-xs uppercase tracking-widest text-primary/40 mb-1">Website Builder — AI</div>
            <div className="flex flex-col gap-2">
                {steps.map((step, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -15 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.2 }}
                        className={`flex items-center gap-3 rounded-xl px-4 py-3 border ${step.active ? 'bg-accent/5 border-accent/30' : step.done ? 'bg-primary/5 border-primary/10' : 'bg-white border-primary/10'}`}
                    >
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 text-[10px] font-bold ${step.done ? 'bg-primary text-background' : step.active ? 'bg-accent text-background' : 'bg-primary/10 text-primary/40'}`}>
                            {step.done ? '✓' : step.active ? '→' : i + 1}
                        </div>
                        <span className={`font-sans text-sm ${step.active ? 'text-accent font-bold' : step.done ? 'text-primary/70' : 'text-primary/40'}`}>{step.label}</span>
                    </motion.div>
                ))}
            </div>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1 }}
                className="bg-primary rounded-xl px-4 py-3 flex items-center justify-between mt-1"
            >
                <span className="font-sans text-sm font-bold text-background">jouwebedrijf.nl</span>
                <span className="font-mono text-xs text-background/60">Live in 5 dagen</span>
            </motion.div>
        </div>
    );
};

// Animatie: stats
const StatsAnim = () => {
    const stats = [
        { value: '97%', label: 'van bezoekers verlaat je site zonder actie', color: 'text-primary' },
        { value: '7%', label: 'minder conversie per extra seconde laadtijd', color: 'text-accent' },
        { value: '3x', label: 'meer leads door betere CTA plaatsing', color: 'text-primary' },
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
                    <span className={`font-sans font-bold text-3xl md:text-4xl ${s.color} w-20 shrink-0`}>{s.value}</span>
                    <span className="font-sans text-sm text-primary/60 leading-tight">{s.label}</span>
                </motion.div>
            ))}
        </div>
    );
};

export default function LandingspaginaPage() {
    const mainRef = useRef(null);

    useEffect(() => {
        window.scrollTo(0, 0);
        let ctx = gsap.context(() => {
            gsap.utils.toArray('.lp-section').forEach((section) => {
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
                <title>Landingspagina Optimalisatie & AI Websites | Empowers</title>
                <meta name="description" content="Jouw website moet werken. Meer bezoekers omzetten in klanten via CRO en A/B testing. Of een nieuwe website laten bouwen met AI — snel, scherp geprijsd en precies goed." />
                <link rel="canonical" href="https://www.empowers.nl/landingspagina" />
                <meta property="og:title" content="Landingspagina Optimalisatie & AI Websites | Empowers" />
                <meta property="og:description" content="Jouw website moet werken. Meer bezoekers omzetten in klanten via CRO en A/B testing. Of een nieuwe website laten bouwen met AI — snel, scherp geprijsd en precies goed." />
                <meta property="og:url" content="https://www.empowers.nl/landingspagina" />
                <meta property="og:type" content="website" />
                <script type="application/ld+json">{JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Service",
                    "name": "Landingspagina Optimalisatie & AI Websites",
                    "serviceType": "Conversie-optimalisatie en websitebouw",
                    "description": "Empowers optimaliseert landingspagina's voor meer conversies en bouwt betaalbare AI-websites voor kleine ondernemers in Nederland.",
                    "provider": { "@type": "Organization", "name": "Empowers", "url": "https://www.empowers.nl" },
                    "url": "https://www.empowers.nl/landingspagina"
                })}</script>
            </Helmet>
            <Navbar />

            {/* Hero */}
            <section className="w-full pt-48 pb-24 px-6 relative overflow-hidden lp-section">
                <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[100px] pointer-events-none" />
                <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 lg:items-end">
                    <div className="flex-1">
                        <span className="font-mono text-sm tracking-widest uppercase text-accent mb-6 block">Landingspagina & Websites</span>
                        <h1 className="font-sans font-bold text-primary text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[0.9] tracking-tight mb-6">
                            Je website werkt.<br />Of hij werkt niet.
                        </h1>
                        <p className="font-sans text-primary/70 text-lg md:text-xl max-w-lg leading-relaxed font-medium mb-8">
                            De meeste websites zijn mooi maar stil. Geen leads, geen klikken, geen klanten. Wij veranderen dat. Met slimme optimalisatie van wat je hebt, of een nieuwe website die je bedrijf écht vertegenwoordigt.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link to="/contact" className="btn-magnetic inline-flex items-center justify-center bg-accent text-background font-sans font-bold text-base px-8 py-4 rounded-[2rem] hover:bg-accent/90 transition-colors">
                                Plan een gratis gesprek
                            </Link>
                        </div>
                    </div>
                    <div className="flex-1 h-[320px] lg:h-[380px]">
                        <ConversionFunnelAnim />
                    </div>
                </div>
            </section>

            {/* Landingspagina Optimalisatie */}
            <section className="w-full py-24 px-6 lp-section">
                <div className="max-w-6xl mx-auto flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-24">
                    <div className="flex-1">
                        <span className="font-mono text-sm tracking-widest uppercase text-accent mb-4 block">01 — Landingspagina Optimalisatie</span>
                        <h2 className="font-sans font-bold text-3xl md:text-4xl text-primary tracking-tight mb-6">Jouw pagina heeft één taak. Converteren.</h2>
                        <p className="font-sans text-primary/70 text-lg leading-relaxed mb-6">
                            Gemiddeld verlaat 97% van je bezoekers je website zonder iets te doen. Dat is geen toeval. Dat is een ontwerp- of copykeuze die we kunnen aanpassen.
                        </p>
                        <p className="font-sans text-primary/70 text-lg leading-relaxed mb-6">
                            Wij kijken naar jouw pagina met conversie als enige maatstaf. Wat ziet iemand als eerste? Klikt die knop? Begrijpt een bezoeker binnen drie seconden wat jij doet? Zo niet, dan pakken we dat aan.
                        </p>
                        <p className="font-sans text-primary/70 text-lg leading-relaxed mb-8">
                            Kleine verbeteringen, groot effect. Een stijging van 1% in conversieratio kan al zorgen voor 30 tot 50% meer leads.
                        </p>
                        <div className="bg-accent/10 border-l-4 border-accent rounded-r-xl p-5">
                            <p className="font-sans text-primary font-medium italic">
                                "We veranderen niks voor het veranderen. We testen, meten en bewegen alleen op basis van data."
                            </p>
                        </div>
                    </div>
                    <div className="flex-1 w-full h-[360px]">
                        <ABTestAnim />
                    </div>
                </div>
            </section>

            {/* Wat we aanpassen */}
            <section className="w-full py-24 px-6 bg-primary/[0.03] lp-section">
                <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
                    <div className="flex-1">
                        <span className="font-mono text-sm tracking-widest uppercase text-accent mb-4 block">02 — Wat we aanpakken</span>
                        <h2 className="font-sans font-bold text-3xl md:text-4xl text-primary tracking-tight mb-6">De cijfers liegen niet</h2>
                        <div className="flex flex-col gap-5">
                            {[
                                { icon: <MousePointer2 className="w-5 h-5" />, claim: 'Copy die meteen raakt', detail: 'Bezoekers beslissen in 3 seconden. De juiste headline, de juiste belofte op de juiste plek. Dat is het verschil tussen klikken en weggaan.' },
                                { icon: <Zap className="w-5 h-5" />, claim: 'Snelheid als conversiemiddel', detail: 'Elke extra seconde laadtijd kost je 7% conversie. Wij zorgen dat jouw pagina razendsnel laadt, op mobiel en desktop.' },
                                { icon: <BarChart2 className="w-5 h-5" />, claim: 'A/B testen op wat werkt', detail: 'Twee versies live. Data bepaalt de winnaar. Geen gokken, geen meningen, alleen wat jouw bezoekers daadwerkelijk aanzet tot actie.' },
                                { icon: <Smartphone className="w-5 h-5" />, claim: 'Mobiel eerst', detail: 'Meer dan 60% van jouw bezoekers zit op een telefoon. Een pagina die daar niet werkt, verliest meer dan de helft van zijn potentieel.' },
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

            {/* AI Websites */}
            <section className="w-full py-24 px-6 lp-section">
                <div className="max-w-6xl mx-auto flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-24">
                    <div className="flex-1">
                        <span className="font-mono text-sm tracking-widest uppercase text-accent mb-4 block">03 — AI Websites voor kleine ondernemers</span>
                        <h2 className="font-sans font-bold text-3xl md:text-4xl text-primary tracking-tight mb-6">Jij hebt een website nodig. Geen project.</h2>
                        <p className="font-sans text-primary/70 text-lg leading-relaxed mb-6">
                            Zzp'er, kleine ondernemer, startend bedrijf. Je hebt iets moois te bieden, maar je website vertelt het verhaal niet. Of je hebt nog helemaal geen website.
                        </p>
                        <p className="font-sans text-primary/70 text-lg leading-relaxed mb-6">
                            Wij bouwen met AI in korte tijd een professionele website die jou vertegenwoordigt. Geen maandenlang traject, geen hoge rekening. Een strak visitekaartje dat online werkt terwijl jij werkt.
                        </p>
                        <p className="font-sans text-primary/70 text-lg leading-relaxed mb-8">
                            Scherp geprijsd. Snel live. En helemaal van jou.
                        </p>
                        <div className="flex flex-col gap-3">
                            {[
                                'Professioneel design op maat voor jouw branche',
                                'Mobiel geoptimaliseerd en snel geladen',
                                'SEO-klaar vanaf dag één',
                                'Live binnen 5 werkdagen',
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <CheckCircle className="w-5 h-5 text-accent shrink-0" />
                                    <span className="font-sans text-primary/80 text-sm">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex-1 w-full h-[360px]">
                        <AIWebsiteAnim />
                    </div>
                </div>
            </section>

            {/* Voor wie */}
            <section className="w-full py-24 px-6 bg-primary/[0.03] lp-section">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="font-mono text-sm tracking-widest uppercase text-accent mb-4 block">04 — Voor wie?</span>
                        <h2 className="font-sans font-bold text-3xl md:text-4xl text-primary tracking-tight">
                            Van verborgen held naar herkenbaar merk.
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            { nr: '01', title: 'Je hebt een website maar die levert niks op', desc: 'Bezoekers komen maar bellen niet. Klikken niet. Vragen niks aan. Wij zoeken uit waarom en lossen het op, stap voor stap.' },
                            { nr: '02', title: 'Je hebt nog helemaal geen website', desc: 'Je werkt via via, via Instagram of gewoon mondeling. Dat werkt. Maar een eigen website geeft je geloofwaardigheid en vindbaar in Google.' },
                            { nr: '03', title: 'Je wil snel live zonder hoge kosten', desc: 'Geen maandenlange trajecten. Geen designers die drie keer de mist in gaan. Wij zijn direct, snel en eerlijk over wat het kost.' },
                            { nr: '04', title: 'Je wil groeien maar weet niet waar te beginnen', desc: 'Begin bij je website. Het is de basis van alles. Van Google Ads tot SEO tot GEO: alles landt hier. Zonder goede pagina werkt niets.' },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white rounded-[1.5rem] p-8 border border-primary/10 shadow-[0_4px_24px_rgb(0,0,0,0.04)]"
                            >
                                <div className="font-mono text-xs text-background bg-primary px-3 py-1 rounded-full inline-block mb-4">{item.nr}</div>
                                <h3 className="font-sans font-bold text-lg text-primary mb-3">{item.title}</h3>
                                <p className="font-sans text-primary/60 text-sm leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="w-full py-24 px-6 lp-section">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-primary rounded-[2rem] p-8 sm:p-12 text-center relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
                        <h3 className="relative z-10 font-drama italic text-background text-3xl sm:text-4xl md:text-5xl mb-4">Zullen we?</h3>
                        <p className="relative z-10 font-sans text-background/70 mb-8 max-w-md mx-auto">
                            Plan een vrijblijvend gesprek. We kijken samen naar jouw website en vertellen je eerlijk wat er beter kan, en wat het kost.
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
