import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ArrowRight, Download, CheckCircle, Briefcase, Users, TrendingUp, BarChart2 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

// Animatie: B2B lead funnel
const B2BFunnelAnim = () => {
    const stages = [
        { label: 'Bereik', value: '48.200', width: '100%', dot: 'bg-[#0A66C2]' },
        { label: 'Kliks', value: '2.310', width: '75%', dot: 'bg-[#0A66C2]/70' },
        { label: 'Leads', value: '184', width: '52%', dot: 'bg-[#0A66C2]/50' },
        { label: 'Deals', value: '31', width: '30%', dot: 'bg-accent' },
    ];
    return (
        <div className="w-full h-full bg-white border border-primary/10 rounded-[2rem] flex flex-col justify-center p-4 sm:p-7 gap-3 sm:gap-4">
            <div className="flex items-center justify-between mb-1">
                <span className="font-mono text-xs uppercase tracking-widest text-primary/40">B2B Lead Funnel</span>
                <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#0A66C2] animate-pulse" />
                    <span className="font-mono text-[10px] text-[#0A66C2]">LinkedIn Ads</span>
                </div>
            </div>
            <div className="flex flex-col gap-2.5 items-start">
                {stages.map((s, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, scaleX: 0 }}
                        whileInView={{ opacity: 1, scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.18 + 0.2, duration: 0.6, ease: 'easeOut' }}
                        style={{ width: s.width, transformOrigin: 'left' }}
                        className="flex items-center justify-between rounded-lg px-3 py-2.5 bg-white border border-primary/10 gap-2"
                    >
                        <div className={`w-2.5 h-2.5 rounded-full ${s.dot} shrink-0`} />
                        <span className="font-sans text-xs text-primary/70 flex-1">{s.label}</span>
                        <span className="font-mono font-bold text-sm text-primary">{s.value}</span>
                    </motion.div>
                ))}
            </div>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.1 }}
                className="flex items-center gap-2 bg-accent/5 rounded-xl px-3 py-2 mt-1"
            >
                <TrendingUp className="w-4 h-4 text-accent shrink-0" />
                <span className="font-mono text-[10px] text-primary/60">CPL 40% lager dan branche gemiddelde</span>
            </motion.div>
        </div>
    );
};

// Animatie: B2B targeting
const B2BTargetingAnim = () => {
    const criteria = [
        { label: 'Functietitel: Marketing Director', match: 89 },
        { label: 'Bedrijfsgrootte: 50–500 fte', match: 74 },
        { label: 'Branche: SaaS & Tech', match: 68 },
    ];
    return (
        <div className="w-full h-full bg-white border border-primary/10 rounded-[2rem] flex flex-col justify-center p-4 sm:p-8 gap-4 sm:gap-6">
            <div className="font-mono text-xs uppercase tracking-widest text-primary/40 mb-1">B2B Targeting criteria</div>
            {criteria.map((c, i) => (
                <div key={i} className="space-y-2">
                    <div className="flex justify-between text-xs font-sans text-primary/60">
                        <span className="truncate pr-2">{c.label}</span>
                        <span className="font-mono font-bold text-[#0A66C2]">{c.match}%</span>
                    </div>
                    <div className="h-2 w-full bg-primary/5 rounded-full overflow-hidden">
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${c.match}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, delay: i * 0.2, ease: 'easeOut' }}
                            className="h-full bg-[#0A66C2] rounded-full"
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
        { value: '80%', label: 'van B2B leads via social komt van LinkedIn', color: 'text-[#0A66C2]' },
        { value: '2x', label: 'hogere conversieratio dan andere platformen', color: 'text-accent' },
        { value: '900M+', label: 'professionals wereldwijd actief op LinkedIn', color: 'text-primary' },
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
                    <span className={`font-sans font-bold text-2xl sm:text-3xl ${s.color} w-20 sm:w-28 shrink-0`}>{s.value}</span>
                    <span className="font-sans text-xs sm:text-sm text-primary/60 leading-tight">{s.label}</span>
                </motion.div>
            ))}
        </div>
    );
};

// Animatie: aanpak fasen
const FasenAnim = () => {
    const fasen = [
        { nr: '01', title: 'Doelgroep definiëren', desc: 'Functies, branches, bedrijfsgroottes en senioriteitsniveaus instellen.' },
        { nr: '02', title: 'Content & formaat', desc: 'Single image, carousel, video of Thought Leader Ads — wat converteert.' },
        { nr: '03', title: 'Lead Gen Forms', desc: 'Native formulieren in LinkedIn voor lage frictie en hogere conversie.' },
        { nr: '04', title: 'Optimaliseren & rapporteren', desc: 'Wekelijkse bijsturing op CPL, CTR en leadkwaliteit. Maandrapportage.' },
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

export default function LinkedInAdsPage() {
    const mainRef = useRef(null);

    useEffect(() => {
        window.scrollTo(0, 0);
        let ctx = gsap.context(() => {
            gsap.utils.toArray('.li-section').forEach((section) => {
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
                <title>LinkedIn Ads – B2B Adverteren voor Beslissers | Empowers</title>
                <meta name="description" content="Bereik directeuren, managers en beslissers op LinkedIn. Empowers bouwt B2B campagnes die échte business leads opleveren." />
                <link rel="canonical" href="https://www.empowers.nl/linkedin-ads" />
                <meta property="og:title" content="LinkedIn Ads – B2B Adverteren voor Beslissers | Empowers" />
                <meta property="og:description" content="Bereik directeuren, managers en beslissers op LinkedIn. Empowers bouwt B2B campagnes die échte business leads opleveren." />
                <meta property="og:url" content="https://www.empowers.nl/linkedin-ads" />
                <meta property="og:type" content="website" />
                <script type="application/ld+json">{JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Service",
                    "name": "LinkedIn Ads – B2B Adverteren",
                    "serviceType": "LinkedIn Ads beheer",
                    "description": "Empowers beheert LinkedIn Ads campagnes voor B2B bedrijven in Nederland. Gericht op beslissers, directeuren en managers met bewezen resultaten.",
                    "provider": { "@type": "Organization", "name": "Empowers", "url": "https://www.empowers.nl" },
                    "url": "https://www.empowers.nl/linkedin-ads"
                })}</script>
            </Helmet>
            <Navbar />

            {/* Hero */}
            <section className="w-full pt-48 pb-24 px-6 relative overflow-hidden li-section">
                <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[100px] pointer-events-none" />
                <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 lg:items-end">
                    <div className="flex-1">
                        <span className="font-mono text-sm tracking-widest uppercase text-accent mb-6 block">LinkedIn Ads</span>
                        <h1 className="font-sans font-bold text-primary text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[0.9] tracking-tight mb-6">
                            De beslissers<br />zitten op LinkedIn.
                        </h1>
                        <p className="font-sans text-primary/70 text-lg md:text-xl max-w-lg leading-relaxed font-medium mb-8">
                            Directeuren, managers, inkopers. Ze scrollen op LinkedIn terwijl ze professioneel denken. Jij kunt ze op dat moment bereiken. Wij bouwen de campagnes die daarvoor zorgen.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link to="/contact" className="btn-magnetic inline-flex items-center justify-center bg-accent text-background font-sans font-bold text-base px-8 py-4 rounded-[2rem] hover:bg-accent/90 transition-colors">
                                Plan een gratis gesprek
                            </Link>
                        </div>
                    </div>
                    <div className="flex-1 w-full h-[280px] sm:h-[320px] lg:h-[400px]">
                        <B2BFunnelAnim />
                    </div>
                </div>
            </section>

            {/* Wat zijn LinkedIn Ads */}
            <section className="w-full py-24 px-6 li-section">
                <div className="max-w-6xl mx-auto flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-24">
                    <div className="flex-1">
                        <span className="font-mono text-sm tracking-widest uppercase text-accent mb-4 block">01 — Wat zijn LinkedIn Ads?</span>
                        <h2 className="font-sans font-bold text-3xl md:text-4xl text-primary tracking-tight mb-6">Jij kiest wie jouw advertentie ziet.</h2>
                        <p className="font-sans text-primary/70 text-lg leading-relaxed mb-6">
                            <strong className="text-primary">LinkedIn Ads</strong> laten je targeten op functietitel, bedrijfsgrootte, branche en zelfs specifieke organisaties. Dat kan geen enkel ander platform zo precies.
                        </p>
                        <p className="font-sans text-primary/70 text-lg leading-relaxed mb-8">
                            Je bereikt niet gewoon mensen. Je bereikt de personen die beslissen over jouw type aankoop. Geen verspild bereik op de verkeerde doelgroep.
                        </p>
                        <div className="bg-accent/10 border-l-4 border-accent rounded-r-xl p-5">
                            <p className="font-sans text-primary font-medium italic">
                                "80% van alle B2B leads via social komt van LinkedIn. Dat zegt genoeg."
                            </p>
                        </div>
                    </div>
                    <div className="flex-1 w-full h-[260px] sm:h-[300px] lg:h-[320px]">
                        <B2BTargetingAnim />
                    </div>
                </div>
            </section>

            {/* Waarom LinkedIn Ads */}
            <section className="w-full py-24 px-6 bg-primary/[0.03] li-section">
                <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
                    <div className="flex-1">
                        <span className="font-mono text-sm tracking-widest uppercase text-accent mb-4 block">02 — Waarom LinkedIn Ads?</span>
                        <h2 className="font-sans font-bold text-3xl md:text-4xl text-primary tracking-tight mb-6">De beslisser ziet jouw advertentie. Of niet.</h2>
                        <div className="flex flex-col gap-5">
                            {[
                                { icon: <Briefcase className="w-5 h-5" />, claim: 'Directe toegang tot beslissers.', detail: 'Geen tussenlagen. Jouw advertentie verschijnt direct bij de CEO, marketing manager of inkoopdirecteur die jij wil bereiken.' },
                                { icon: <Users className="w-5 h-5" />, claim: 'De hoogste leadkwaliteit van alle platformen.', detail: 'LinkedIn leads zijn professioneel gekwalificeerd. Ze zitten in een zakelijke mindset wanneer ze jouw boodschap zien.' },
                                { icon: <TrendingUp className="w-5 h-5" />, claim: 'Twee keer hogere conversieratio dan andere platformen.', detail: 'Ondanks hogere klikkosten verhoudt LinkedIn zich uitstekend op kosten per lead. De kwaliteit maakt het verschil.' },
                                { icon: <BarChart2 className="w-5 h-5" />, claim: 'Bereik precies de bedrijven op jouw wensenlijst.', detail: 'Target specifieke organisaties die jij wil als klant. Ideaal voor B2B met een duidelijke doelgroep.' },
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
            <section className="w-full py-24 px-6 li-section">
                <div className="max-w-6xl mx-auto flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-24">
                    <div className="flex-1">
                        <span className="font-mono text-sm tracking-widest uppercase text-accent mb-4 block">03 — Onze aanpak</span>
                        <h2 className="font-sans font-bold text-3xl md:text-4xl text-primary tracking-tight mb-6">Elke week scherper. Elke lead goedkoper.</h2>
                        <p className="font-sans text-primary/70 text-lg leading-relaxed mb-8">
                            We starten met een scherpe doelgroepanalyse. Daarna bouwen we de campagne, verzorgen we de content en sturen we wekelijks bij op leadkwaliteit en kosten per lead.
                        </p>
                        <div className="flex flex-col gap-3">
                            {[
                                'Precieze B2B doelgroep instelling',
                                'Lead Gen Forms voor lage frictie conversies',
                                'Thought Leader Ads en gesponsorde content',
                                'Wekelijkse optimalisatie op CPL en kwaliteit',
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
            <section className="w-full py-24 px-6 li-section">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-white rounded-[2rem] border border-primary/10 shadow-[0_8px_40px_rgb(0,0,0,0.06)] p-8 sm:p-12 flex flex-col md:flex-row items-center gap-8 mb-8">
                        <div className="flex-1">
                            <span className="font-mono text-xs uppercase tracking-widest text-accent mb-3 block">Gratis rapport</span>
                            <h3 className="font-sans font-bold text-2xl text-primary mb-3">Alles over B2B adverteren op LinkedIn.</h3>
                            <p className="font-sans text-primary/60 text-sm leading-relaxed mb-6">
                                Download ons LinkedIn Ads rapport. Onze B2B strategie, targeting aanpak en concrete stappen. Zodat jij de juiste beslissers bereikt.
                            </p>
                            <a
                                href="/LinkedIn-Ads-Strategie_Empowers.pdf"
                                download
                                className="btn-magnetic inline-flex items-center gap-3 bg-accent text-background font-sans font-bold text-base px-8 py-4 rounded-[2rem] hover:bg-accent/90 transition-colors"
                            >
                                <Download className="w-5 h-5" />
                                Download gratis rapport (PDF)
                            </a>
                        </div>
                        <div className="shrink-0 w-32 h-40 bg-primary rounded-xl flex flex-col items-center justify-center gap-2 shadow-lg">
                            <div className="text-background/60 font-mono text-[10px] uppercase tracking-widest">LinkedIn Ads</div>
                            <div className="text-background font-bold text-lg font-sans">Empowers</div>
                            <div className="w-8 h-0.5 bg-accent rounded" />
                            <div className="text-background/40 font-mono text-[9px]">2026</div>
                        </div>
                    </div>
                    <div className="bg-primary rounded-[2rem] p-8 sm:p-12 text-center relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
                        <h3 className="relative z-10 font-drama italic text-background text-3xl sm:text-4xl md:text-5xl mb-4">Klaar voor echte B2B leads?</h3>
                        <p className="relative z-10 font-sans text-background/70 mb-8 max-w-md mx-auto">
                            Plan een gesprek. We kijken samen naar jouw situatie en laten zien welke kansen er liggen. Zullen we?
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
