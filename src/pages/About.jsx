import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, Zap, Lightbulb, Shield, TrendingUp } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
    const mainRef = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            // General fade up for all major sections
            gsap.utils.toArray('.animate-section').forEach((section) => {
                gsap.fromTo(section,
                    { opacity: 0, y: 50 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 1.2,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: section,
                            start: 'top 85%',
                        }
                    }
                );
            });

            // Stagger for the "anders" cards
            gsap.fromTo('.anders-card',
                { opacity: 0, y: 40 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    stagger: 0.15,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: '.anders-container',
                        start: 'top 80%'
                    }
                }
            );

        }, mainRef);
        return () => ctx.revert();
    }, []);

    const andersPoints = [
        {
            title: "Direct contact",
            desc: "Je praat altijd rechtstreeks met de expert die aan jouw campagnes werkt. Geen accountmanager die jouw verhaal moet doorspelen.",
            icon: <Zap className="w-6 h-6" />
        },
        {
            title: "Volledig spectrum",
            desc: <>Van Google en Meta tot TikTok, van SEO tot GEO.<br />Alles wat jouw online marketing betreft,<br />regelen wij voor je.</>,
            icon: <Target className="w-6 h-6" />
        },
        {
            title: "Vooruitdenkend",
            desc: "Terwijl de meeste bureaus nog volledig op Google focussen, bereiden wij onze klanten ook voor op de toekomst van zoeken via AI-tools.",
            icon: <Lightbulb className="w-6 h-6" />
        },
        {
            title: "Transparant",
            desc: <>Je ziet altijd waar je budget naartoe gaat en wat het oplevert. Geen vage rapporten,<br />gewoon duidelijke cijfers.</>,
            icon: <Shield className="w-6 h-6" />
        },
        {
            title: "Resultaatgericht",
            desc: <>Elke beslissing is gebaseerd op data. Wij sturen bij op wat werkt en stoppen<br />met wat geld kost zonder resultaat.</>,
            icon: <TrendingUp className="w-6 h-6" />
        }
    ];

    return (
        <main ref={mainRef} className="min-h-screen selection:bg-accent/30 selection:text-dark flex flex-col bg-background">
            <Navbar />

            <section className="w-full pt-48 pb-24 px-6 relative overflow-hidden">
                <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[100px] pointer-events-none" />
                <div className="max-w-5xl mx-auto animate-section">
                    <span className="font-mono text-sm tracking-widest uppercase text-accent mb-6 block">Over Ons</span>
                    <h1 className="font-drama italic text-primary text-6xl md:text-8xl leading-tight tracking-tight mb-8">
                        Het verhaal
                    </h1>
                    <p className="font-sans text-primary/80 text-xl md:text-2xl leading-relaxed max-w-3xl font-medium">
                        Empowers is opgericht met één doel: marketing die écht resultaat oplevert. Niet campagnes die er mooi uitzien op papier, maar advertenties die omzet genereren. We geloven dat elke ondernemer recht heeft op een aanpak die transparant is, meetbaar en volledig afgestemd op zijn situatie.<br /><br />
                        Dat is waarom we doen wat we doen.
                    </p>
                </div>
            </section>

            <section className="w-full py-24 px-6 bg-primary text-background relative overflow-hidden">
                <div className="max-w-5xl mx-auto animate-section">
                    <span className="font-mono text-sm tracking-widest uppercase text-accent mb-6 block">Onze Missie</span>
                    <h2 className="font-drama italic text-4xl sm:text-5xl lg:text-6xl leading-[1.1] mb-8">
                        Bedrijven laten groeien via marketing die écht werkt.
                    </h2>
                    <p className="font-sans text-background/80 text-lg md:text-xl leading-relaxed max-w-2xl">
                        Geen ingewikkeld jargon, geen onnodige tussenpersonen. Gewoon een expert die jouw business begrijpt en resultaten levert die je kunt meten.
                    </p>
                </div>
            </section>

            <section className="w-full py-24 px-6">
                <div className="max-w-5xl mx-auto animate-section">
                    <h2 className="font-sans font-bold text-3xl sm:text-4xl md:text-5xl text-primary tracking-tight mb-8">Hoe wij werken</h2>
                    <p className="font-sans text-primary/70 text-lg md:text-xl leading-relaxed max-w-3xl">
                        Wij geloven niet in een standaard aanpak. Elke business is anders, elke doelgroep is anders en elk budget vraagt om andere keuzes. Daarom starten we altijd met een analyse voordat we ook maar één campagne lanceren. Strategie eerst, actie daarna.
                    </p>
                </div>
            </section>

            <section className="w-full py-24 px-6 bg-[#FAFAFA]">
                <div className="max-w-6xl mx-auto">
                    <div className="mb-16 animate-section">
                        <h2 className="font-sans font-bold text-3xl sm:text-4xl md:text-5xl text-primary tracking-tight">Wat ons anders maakt</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 anders-container">
                        {andersPoints.map((pt, idx) => (
                            <div key={idx} className="anders-card bg-white rounded-3xl p-8 border border-primary/10 shadow-[0_4px_20px_rgb(0,0,0,0.03)] flex flex-col items-start hover:border-accent/40 transition-colors">
                                <div className="w-12 h-12 bg-accent/10 text-accent rounded-full flex items-center justify-center mb-6">
                                    {pt.icon}
                                </div>
                                <h3 className="font-sans font-bold text-xl text-primary mb-4">{pt.title}</h3>
                                <p className="font-sans text-primary/70 leading-relaxed text-sm md:text-base">
                                    {pt.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="w-full py-24 px-6">
                <div className="max-w-5xl mx-auto animate-section grid grid-cols-1 md:grid-cols-2 gap-16">
                    <div>
                        <h2 className="font-sans font-bold text-3xl md:text-4xl text-primary tracking-tight mb-6">Wie wij helpen</h2>
                        <p className="font-sans text-primary/70 leading-relaxed text-lg max-w-md">
                            We werken met MKB-bedrijven, webshops en groeiende ondernemingen die klaar zijn om serieus te investeren in hun online aanwezigheid. Niet voor bedrijven die marketing zien als een kostenpost, maar voor ondernemers die begrijpen dat goede marketing een investering is.
                        </p>
                    </div>
                    <div>
                        <h2 className="font-sans font-bold text-3xl md:text-4xl text-primary tracking-tight mb-6">Onze belofte</h2>
                        <p className="font-sans text-primary/70 leading-relaxed text-lg max-w-md">
                            Geen langlopende contracten waar je aan vastzit. Geen vage beloftes over "meer zichtbaarheid". Alleen concrete doelen, meetbare resultaten en een partner die elke maand opnieuw zijn waarde bewijst.
                        </p>
                    </div>
                </div>
            </section>

            <section className="w-full pb-32 px-6 pt-12">
                <div className="max-w-5xl mx-auto bg-primary rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden animate-section">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/20 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />
                    <h2 className="relative z-10 font-drama italic text-background text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-10 leading-tight">Ben je klaar om te groeien?</h2>
                    <Link to="/contact" className="relative z-10 btn-magnetic inline-flex items-center justify-center bg-accent text-background font-sans font-bold text-lg px-10 py-4 rounded-[2rem] hover:bg-accent/90 transition-colors gap-3">
                        Plan een gratis strategiegesprek <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
