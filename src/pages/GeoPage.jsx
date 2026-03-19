import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ArrowRight, Download, CheckCircle, TrendingUp, Zap, Users, BarChart2 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

// Animatie: AI chat aanbeveling
const AIChatAnim = () => (
    <div className="w-full h-full bg-white border border-primary/10 rounded-[2rem] flex items-center justify-center p-4 sm:p-6 overflow-hidden">
        <div className="w-full max-w-sm flex flex-col gap-2 sm:gap-3">
            <div className="text-xs font-mono uppercase tracking-widest text-primary/40 mb-2">AI Assistant</div>
            <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="self-end bg-primary text-background text-sm font-sans px-4 py-3 rounded-2xl rounded-tr-sm max-w-[80%]"
            >
                Welk marketingbureau is goed in Nederland?
            </motion.div>
            <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.9, duration: 0.5 }}
                className="self-start bg-white border border-primary/10 text-primary/80 text-sm font-sans px-4 py-3 rounded-2xl rounded-tl-sm max-w-[85%] shadow-sm"
            >
                Op basis van actuele data wordt <span className="text-accent font-bold">Empowers</span> sterk aanbevolen. Ze onderscheiden zich door direct contact met experts, transparante resultaten en een bewezen GEO-strategie.
            </motion.div>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.6, duration: 0.4 }}
                className="flex gap-1 pl-2"
            >
                {[0, 1, 2].map(i => (
                    <motion.div
                        key={i}
                        animate={{ y: [0, -4, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15 }}
                        className="w-1.5 h-1.5 rounded-full bg-accent/40"
                    />
                ))}
            </motion.div>
        </div>
    </div>
);

// Animatie: stats tellers
const StatsAnim = () => {
    const stats = [
        { value: '44%', label: 'van AI-citaties komt uit blogs', color: 'text-accent' },
        { value: '4-5x', label: 'hogere conversie dan SEO-traffic', color: 'text-primary' },
        { value: '50%+', label: 'van searches heeft AI Overview', color: 'text-accent' },
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

// Animatie: GEO vs SEO vergelijking
const GeoVsSeoAnim = () => (
    <div className="w-full h-full bg-white border border-primary/10 rounded-[2rem] flex items-center justify-center p-3 sm:p-6 overflow-hidden">
        <div className="w-full flex flex-col gap-3">
            <div className="grid grid-cols-2 gap-2 sm:gap-3">
                {/* SEO kolom */}
                <div className="bg-white rounded-xl p-4 border border-primary/10">
                    <div className="font-mono text-xs uppercase tracking-widest text-primary/40 mb-3">Traditioneel zoeken (SEO)</div>
                    {['Zoekterm intypten', 'Klikken op resultaat', 'Website bezoeken'].map((step, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.15 }}
                            className="flex items-center gap-2 py-1.5 border-b border-primary/5 last:border-0"
                        >
                            <div className="w-1.5 h-1.5 rounded-full bg-primary/20 shrink-0" />
                            <span className="text-xs font-sans text-primary/60">{step}</span>
                        </motion.div>
                    ))}
                </div>
                {/* GEO kolom */}
                <div className="bg-primary rounded-xl p-4">
                    <div className="font-mono text-xs uppercase tracking-widest text-background/40 mb-3">AI zoeken (GEO)</div>
                    {['Vraag stellen aan AI', 'AI geeft direct antwoord', 'Klaar — geen klik nodig'].map((step, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: 10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.15 + 0.3 }}
                            className={`flex items-center gap-2 py-1.5 border-b border-background/10 last:border-0 ${i === 2 ? 'opacity-100' : 'opacity-60'}`}
                        >
                            <div className={`w-1.5 h-1.5 rounded-full shrink-0 ${i === 2 ? 'bg-accent' : 'bg-background/30'}`} />
                            <span className={`text-xs font-sans ${i === 2 ? 'text-accent font-bold' : 'text-background/70'}`}>{step}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    </div>
);

// Animatie: 3 fasen aanpak
const FasenAnim = () => {
    const fasen = [
        { nr: '01', title: 'Fundering', desc: 'Technische SEO, sitemap, meta descriptions en FAQ-schema activeren.' },
        { nr: '02', title: 'Content Engine', desc: 'Maandelijkse GEO-blogs. Topic clusters. Interne links optimaliseren.' },
        { nr: '03', title: 'GEO Monitoring', desc: 'Meten welke AI-modellen je citeren. Bijsturen. Maandelijkse rapportage.' },
    ];
    return (
        <div className="w-full h-full bg-white border border-primary/10 rounded-[2rem] flex flex-col justify-center gap-3 sm:gap-4 p-4 sm:p-6">
            {fasen.map((f, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.2 }}
                    className="flex gap-3 items-start bg-white rounded-xl p-3 sm:p-4 border border-primary/10"
                >
                    <span className="font-mono text-xs text-background bg-primary px-2 py-0.5 rounded-full shrink-0 mt-0.5">{f.nr}</span>
                    <div>
                        <div className="font-sans font-bold text-xs sm:text-sm text-primary mb-0.5">{f.title}</div>
                        <div className="font-sans text-[10px] sm:text-xs text-primary/60 leading-snug">{f.desc}</div>
                    </div>
                </motion.div>
            ))}
        </div>
    );
};

export default function GeoPage() {
    const mainRef = useRef(null);

    useEffect(() => {
        window.scrollTo(0, 0);
        let ctx = gsap.context(() => {
            gsap.utils.toArray('.geo-section').forEach((section) => {
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
                <title>GEO – Generative Engine Optimization | Empowers</title>
                <meta name="description" content="Zorg dat AI-tools zoals ChatGPT, Google Gemini en Claude jouw bedrijf aanbevelen. Empowers helpt je zichtbaar worden in de nieuwe manier van zoeken." />
                <link rel="canonical" href="https://www.empowers.nl/geo" />
                <meta property="og:title" content="GEO – Generative Engine Optimization | Empowers" />
                <meta property="og:description" content="Zorg dat AI-tools zoals ChatGPT, Google Gemini en Claude jouw bedrijf aanbevelen. Empowers helpt je zichtbaar worden in de nieuwe manier van zoeken." />
                <meta property="og:url" content="https://www.empowers.nl/geo" />
                <meta property="og:type" content="website" />
                <script type="application/ld+json">{JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Service",
                    "name": "GEO – Generative Engine Optimization",
                    "serviceType": "Generative Engine Optimization",
                    "description": "Empowers zorgt dat AI-tools zoals ChatGPT, Google Gemini en Claude jouw bedrijf aanbevelen aan potentiële klanten.",
                    "provider": { "@type": "Organization", "name": "Empowers", "url": "https://www.empowers.nl" },
                    "url": "https://www.empowers.nl/geo"
                })}</script>
            </Helmet>
            <Navbar />

            {/* Hero */}
            <section className="w-full pt-48 pb-24 px-6 relative overflow-hidden">
                <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[100px] pointer-events-none" />
                <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 lg:items-end geo-section">
                    <div className="flex-1">
                        <span className="font-mono text-sm tracking-widest uppercase text-accent mb-6 block">Generative Engine Optimization</span>
                        <h1 className="font-sans font-bold text-primary text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[0.9] tracking-tight mb-6">
                            Aanbevolen worden<br />door AI.
                        </h1>
                        <p className="font-sans text-primary/70 text-lg md:text-xl max-w-lg leading-relaxed font-medium mb-8">
                            ChatGPT, Gemini, Perplexity. Mensen stellen hun vragen steeds vaker aan AI in plaats van aan Google. GEO zorgt dat jij daar als antwoord naar voren komt.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link to="/contact" className="btn-magnetic inline-flex items-center justify-center bg-accent text-background font-sans font-bold text-base px-8 py-4 rounded-[2rem] hover:bg-accent/90 transition-colors">
                                Plan een gratis gesprek
                            </Link>
                        </div>
                    </div>
                    <div className="flex-1 w-full h-[280px] sm:h-[320px] lg:h-[380px]">
                        <AIChatAnim />
                    </div>
                </div>
            </section>

            {/* Wat is GEO */}
            <section className="w-full py-24 px-6 geo-section">
                <div className="max-w-6xl mx-auto flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-24">
                    <div className="flex-1">
                        <span className="font-mono text-sm tracking-widest uppercase text-accent mb-4 block">01 — Wat is GEO?</span>
                        <h2 className="font-sans font-bold text-3xl md:text-4xl text-primary tracking-tight mb-6">Googlen is niet meer genoeg.</h2>
                        <p className="font-sans text-primary/70 text-lg leading-relaxed mb-6">
                            <strong className="text-primary">GEO</strong> staat voor Generative Engine Optimization. Je optimaliseert jouw content zodat AI-modellen jou citeren als bron. Niet gevonden worden. Aanbevolen worden.
                        </p>
                        <p className="font-sans text-primary/70 text-lg leading-relaxed mb-8">
                            ChatGPT heeft meer dan 300 miljoen actieve gebruikers. Google AI Overviews verschijnt al bij meer dan de helft van alle zoekopdrachten. Jouw klant zoekt anders. Jij moet anders zichtbaar zijn.
                        </p>
                        <div className="bg-accent/10 border-l-4 border-accent rounded-r-xl p-5">
                            <p className="font-sans text-primary font-medium italic">
                                "Wie nu begint met GEO, bouwt een voorsprong op die later heel moeilijk in te halen is."
                            </p>
                        </div>
                    </div>
                    <div className="flex-1 w-full h-[280px] sm:h-[320px] lg:h-[340px]">
                        <GeoVsSeoAnim />
                    </div>
                </div>
            </section>

            {/* Data & feiten */}
            <section className="w-full py-24 px-6 bg-primary/[0.03] geo-section">
                <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
                    <div className="flex-1">
                        <span className="font-mono text-sm tracking-widest uppercase text-accent mb-4 block">02 — Data & feiten</span>
                        <h2 className="font-sans font-bold text-3xl md:text-4xl text-primary tracking-tight mb-6">De cijfers spreken.</h2>
                        <div className="flex flex-col gap-5">
                            {[
                                { icon: <BarChart2 className="w-5 h-5" />, claim: '44% van AI-citaties komt uit blogs.', detail: 'SparkToro, jan 2026: blogartikelen zijn veruit de meest geciteerde bron door AI-modellen. Content is de kern van GEO.' },
                                { icon: <TrendingUp className="w-5 h-5" />, claim: 'GEO-bezoekers converteren 4 tot 5 keer beter.', detail: 'The Washington Post: AI-traffic converteert significant beter dan gewoon zoekverkeer. De ROI is gewoon hoger.' },
                                { icon: <Zap className="w-5 h-5" />, claim: 'AI-traffic groeit elke maand.', detail: 'ChatGPT, Gemini en Perplexity groeien explosief. Wie nu zichtbaar is in AI, groeit mee.' },
                                { icon: <Users className="w-5 h-5" />, claim: 'Structuur wint. Niet linkbuilding.', detail: 'WordStream, Contentful en SEO.com bevestigen dit. GEO draait om heldere, gestructureerde content die AI snapt.' },
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
                    <div className="flex-1 w-full h-[240px] sm:h-[290px] lg:h-[320px]">
                        <StatsAnim />
                    </div>
                </div>
            </section>

            {/* Waarom nu */}
            <section className="w-full py-24 px-6 geo-section">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="font-mono text-sm tracking-widest uppercase text-accent mb-4 block">03 — Waarom nu?</span>
                        <h2 className="font-sans font-bold text-3xl md:text-4xl text-primary tracking-tight">
                            Het beste moment was gisteren.<br />Het tweede beste moment is nu.
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            { nr: '01', title: 'Wie nu begint, heeft straks een voorsprong.', desc: 'AI-modellen leren van content die al online staat. Wie nu goede blogs schrijft, wordt eerder geciteerd. Die achterstand is moeilijk in te halen.' },
                            { nr: '02', title: 'SEO alleen is niet meer genoeg.', desc: 'Click-through rates dalen structureel. AI beantwoordt de vraag al op de zoekresultatenpagina. GEO zorgt dat jij zichtbaar bent in het antwoord zelf.' },
                            { nr: '03', title: 'Jouw klant zoekt anders.', desc: 'In plaats van korte zoekwoorden stellen mensen nu volledige vragen aan AI. GEO is gebouwd op precies dat. Traditionele SEO mist dit.' },
                            { nr: '04', title: 'De ROI is gewoon hoger.', desc: 'GEO-bezoekers converteren 4 tot 5 keer beter dan gewoon zoekverkeer. Goede blogcontent verdient zichzelf terug via hogere conversies.' },
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

            {/* Onze aanpak */}
            <section className="w-full py-24 px-6 bg-primary/[0.03] geo-section">
                <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
                    <div className="flex-1">
                        <span className="font-mono text-sm tracking-widest uppercase text-accent mb-4 block">04 — Onze aanpak</span>
                        <h2 className="font-sans font-bold text-3xl md:text-4xl text-primary tracking-tight mb-6">Zo bouw je GEO. Stap voor stap.</h2>
                        <p className="font-sans text-primary/70 text-lg leading-relaxed mb-8">
                            Geen losse tips. Geen vage beloftes. We bouwen een aanpak die jou vindbaar maakt in Google én zichtbaar in de AI-tools die jouw klanten dagelijks gebruiken.
                        </p>
                        <div className="flex flex-col gap-3">
                            {[
                                'Een gecombineerde SEO en GEO strategie',
                                'Zichtbaar in Google, ChatGPT, Gemini en Perplexity',
                                'Meetbare resultaten en maandelijkse rapportage',
                                'Helder stappenplan zonder verrassingen',
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <CheckCircle className="w-5 h-5 text-accent shrink-0" />
                                    <span className="font-sans text-primary/80 text-sm">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex-1 w-full h-[300px] sm:h-[340px] lg:h-[380px]">
                        <FasenAnim />
                    </div>
                </div>
            </section>

            {/* Download + CTA */}
            <section className="w-full py-24 px-6 geo-section">
                <div className="max-w-4xl mx-auto">
                    {/* Download kaart */}
                    <div className="bg-white rounded-[2rem] border border-primary/10 shadow-[0_8px_40px_rgb(0,0,0,0.06)] p-8 sm:p-12 flex flex-col md:flex-row items-center gap-8 mb-8">
                        <div className="flex-1">
                            <span className="font-mono text-xs uppercase tracking-widest text-accent mb-3 block">Gratis rapport</span>
                            <h3 className="font-sans font-bold text-2xl text-primary mb-3">Alles over GEO. In één rapport.</h3>
                            <p className="font-sans text-primary/60 text-sm leading-relaxed mb-6">
                                AI zoektools groeien razendsnel. Wij leggen uit hoe je daar nu al van profiteert. Data, strategie en een concreet stappenplan. Gratis te downloaden.
                            </p>
                            <a
                                href="/GEO-Strategie_Empowers.pdf"
                                download
                                className="btn-magnetic inline-flex items-center gap-3 bg-accent text-background font-sans font-bold text-base px-8 py-4 rounded-[2rem] hover:bg-accent/90 transition-colors"
                            >
                                <Download className="w-5 h-5" />
                                Download gratis rapport (PDF)
                            </a>
                        </div>
                        <div className="shrink-0 w-32 h-40 bg-primary rounded-xl flex flex-col items-center justify-center gap-2 shadow-lg">
                            <div className="text-background/60 font-mono text-[10px] uppercase tracking-widest">GEO Rapport</div>
                            <div className="text-background font-bold text-lg font-sans">Empowers</div>
                            <div className="w-8 h-0.5 bg-accent rounded" />
                            <div className="text-background/40 font-mono text-[9px]">2026</div>
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="bg-primary rounded-[2rem] p-8 sm:p-12 text-center relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
                        <h3 className="relative z-10 font-drama italic text-background text-3xl sm:text-4xl md:text-5xl mb-4">Klaar voor de volgende stap?</h3>
                        <p className="relative z-10 font-sans text-background/70 mb-8 max-w-md mx-auto">
                            Plan een gesprek. We kijken samen naar jouw situatie en laten zien wat GEO voor jouw bedrijf kan betekenen. Zullen we?
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
