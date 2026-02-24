import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Nieuws() {
    useEffect(() => {
        document.title = "Nieuws & Insights | Empowers";

        // Simple entrance animation
        let ctx = gsap.context(() => {
            gsap.fromTo('.blog-card',
                { opacity: 0, y: 30 },
                { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out' }
            );
        });
        return () => ctx.revert();
    }, []);

    const articles = [
        {
            title: "Waarom jouw Meta Ads niet converteren (en hoe je dat oplost)",
            category: "Meta Ads",
            date: "15 feb 2026",
            readTime: "6 min",
            excerpt: "Meta Ads die wel klikken maar geen klanten opleveren? Dit zijn de 6 meest voorkomende oorzaken en hoe je ze stap voor stap oplost.",
            slug: "/blog/waarom-meta-ads-niet-converteren",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
        },
        {
            title: "Waarom je zonder goede tracking je marketingbudget verspilt",
            category: "Marketing & Strategie",
            date: "15 feb 2026",
            readTime: "6 min",
            excerpt: "Zonder tracking weet je niet welke advertenties geld opleveren en welke verspillen. Lees hoe je conversies correct meet en wat je moet instellen.",
            slug: "/blog/marketing-tracking-conversies-meten",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
        },
        {
            title: "TikTok Ads voor bedrijven: is het iets voor jou?",
            category: "TikTok Ads",
            date: "15 feb 2026",
            readTime: "6 min",
            excerpt: "TikTok is niet alleen voor tieners. Ontdek of TikTok Ads passen bij jouw bedrijf, wat het kost en hoe je een eerste campagne opzet.",
            slug: "/blog/tiktok-ads-voor-bedrijven",
            image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1974&auto=format&fit=crop"
        },
        {
            title: "Wat is GEO en waarom loopt jouw bedrijf het mis als je nu niks doet?",
            category: "GEO",
            date: "1 feb 2026",
            readTime: "6 min",
            excerpt: "GEO zorgt dat AI-tools zoals ChatGPT en Google Gemini jouw bedrijf aanbevelen. Lees wat het is, waarom het werkt en hoe je er morgen mee begint.",
            slug: "/blog/wat-is-geo-generative-engine-optimization",
            image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop"
        }
    ];

    return (
        <main className="min-h-screen selection:bg-accent/30 selection:text-dark flex flex-col bg-background">
            <Navbar />

            <section className="w-full pt-48 pb-24 px-6 relative overflow-hidden">
                <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[100px] pointer-events-none" />
                <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 lg:items-end">
                    <div className="flex-1">
                        <span className="font-mono text-sm tracking-widest uppercase text-accent mb-6 block">Kennis & Vooruitgang</span>
                        <h1 className="font-drama italic text-primary text-6xl md:text-8xl leading-none tracking-tight mb-6">
                            Nieuws & <span className="font-sans font-bold text-5xl md:text-7xl not-italic">Insights.</span>
                        </h1>
                    </div>
                    <div className="flex-1 lg:pb-3">
                        <p className="font-sans text-primary/70 text-lg md:text-xl max-w-lg leading-relaxed font-medium">
                            Ontdek de nieuwste strategieën in digitale marketing. Van actuele advertentietrends tot de evolutie van AI-zoekmachines.
                        </p>
                    </div>
                </div>
            </section>

            <section className="w-full pb-32 px-6">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {articles.map((article, idx) => (
                        <Link key={idx} to={article.slug} className="blog-card group flex flex-col bg-white rounded-3xl border border-primary/10 overflow-hidden shadow-sm hover:shadow-xl hover:border-accent/30 transition-all duration-500 hover:-translate-y-2">
                            {/* Image container */}
                            <div className="w-full h-64 relative overflow-hidden bg-primary">
                                <div className="absolute top-4 left-4 z-20 bg-background/90 backdrop-blur text-primary text-[10px] font-mono uppercase tracking-widest px-3 py-1.5 rounded-full">
                                    {article.category}
                                </div>
                                <div
                                    className="absolute inset-0 bg-cover bg-center opacity-60 mix-blend-overlay group-hover:scale-110 transition-transform duration-700 ease-in-out"
                                    style={{ backgroundImage: `url(${article.image})` }}
                                />
                            </div>

                            {/* Content */}
                            <div className="p-8 flex-1 flex flex-col">
                                <div className="flex items-center gap-4 text-xs font-mono text-primary/50 mb-4">
                                    <span className="flex items-center gap-1.5"><Calendar className="w-3 h-3" /> {article.date}</span>
                                    <span className="flex items-center gap-1.5"><Clock className="w-3 h-3" /> {article.readTime}</span>
                                </div>
                                <h2 className="font-sans font-bold text-2xl text-primary leading-tight mb-4 group-hover:text-accent transition-colors">
                                    {article.title}
                                </h2>
                                <p className="font-sans text-primary/70 text-sm leading-relaxed mb-8 flex-1">
                                    {article.excerpt}
                                </p>
                                <div className="mt-auto flex items-center gap-2 text-sm font-bold text-primary group-hover:text-accent transition-colors">
                                    Lees artikel <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            {/* Newsletter / CTA */}
            <section className="w-full pb-32 px-6">
                <div className="max-w-4xl mx-auto bg-primary rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden flex flex-col items-center">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />

                    <h3 className="relative z-10 font-drama italic text-background text-4xl md:text-5xl mb-4">Blijf vooroplopen.</h3>
                    <p className="relative z-10 font-sans text-background/70 mb-8 max-w-md mx-auto">
                        Ontvang inzichten rechtstreeks van onze experts over de toekomst van online autoriteit en AI-search.
                    </p>

                    <Link to="/contact" className="relative z-10 btn-magnetic inline-flex items-center justify-center bg-accent text-background font-sans font-bold text-lg px-8 py-4 rounded-[2rem] hover:bg-accent/90 transition-colors">
                        Samenwerken met Empowers
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
