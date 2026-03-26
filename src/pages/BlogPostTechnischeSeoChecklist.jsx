import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ChevronRight, User } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function BlogPostTechnischeSeoChecklist() {
    useEffect(() => { window.scrollTo(0, 0); }, []);

    const breadcrumbs = [
        { name: 'Home', href: '/' },
        { name: 'Nieuws', href: '/news' },
        { name: 'SEO', href: '/news?category=SEO' },
        { name: 'Technische SEO checklist', href: '#' }
    ];

    const faqs = [
        {
            question: "Wat is technische SEO precies?",
            answer: "Technische SEO richt zich op de achtergrondstructuur van je website. Het gaat om hoe zoekmachines je site kunnen crawlen, indexeren en begrijpen. Dit is essentieel voor betere rankings."
        },
        {
            question: "Hoe belangrijk zijn Core Web Vitals voor SEO?",
            answer: "Core Web Vitals zijn zeer belangrijk. Google gebruikt deze metrics als rankingfactor. Snelheid, interactiviteit en visuele stabiliteit bepalen direct je SEO-positie."
        },
        {
            question: "Moet mijn website HTTPS hebben?",
            answer: "Ja, HTTPS is verplicht. Google geeft voorkeur aan beveiligde websites en waarschuwt gebruikers bij HTTP-sites. Dit is sinds jaren een rankingfactor."
        },
        {
            question: "Wat is een XML sitemap en waarom nodig?",
            answer: "Een XML sitemap is een bestand dat alle pagina's van je website opsomt. Het helpt Google om alle content te vinden en efficiënter te crawlen."
        },
        {
            question: "Hoe controleer ik of mijn site goed crawlbar is?",
            answer: "Gebruik Google Search Console en Bing Webmaster Tools. Deze tools laten zien welke pagina's crawlbar zijn en waar problemen zitten."
        },
        {
            question: "Wat doet een robots.txt bestand?",
            answer: "Een robots.txt bestand zegt aan zoekmachines welke pagina's ze wel en niet mogen crawlen. Dit geeft je controle over crawling en bespaart crawl budget."
        },
        {
            question: "Waarom zijn canonicale tags belangrijk?",
            answer: "Canonicale tags voorkomen duplicate content problemen. Ze vertellen Google welke versie van een pagina dominant is als er meerdere versies bestaan."
        }
    ];

    return (
        <main className="min-h-screen selection:bg-accent/30 selection:text-dark flex flex-col bg-background">
            <Helmet>
                <title>Technische SEO checklist 2026: alles wat je website nodig heeft | Empowers</title>
                <meta name="description" content="Volledige technische SEO checklist 2026. Ontdek wat je website nodig heeft: Core Web Vitals, HTTPS, sitemap, crawlability en meer. Start nu!" />
                <meta name="keywords" content="technische SEO, SEO checklist, website optimalisatie, Core Web Vitals, Google ranking" />
                <link rel="canonical" href="https://www.empowers.nl/blogs/seo/technische-seo-checklist-2025-website" />

                {/* Open Graph */}
                <meta property="og:title" content="Technische SEO checklist 2026: alles wat je website nodig heeft" />
                <meta property="og:description" content="Volledige technische SEO checklist. Ontdek wat je website nodig heeft voor betere rankings." />
                <meta property="og:image" content="https://www.empowers.nl/images/blogs/technische-seo-checklist-2025-website.jpg" />
                <meta property="og:url" content="https://www.empowers.nl/blogs/seo/technische-seo-checklist-2025-website" />
                <meta property="og:type" content="article" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Technische SEO checklist 2026" />
                <meta name="twitter:description" content="Alles wat je website nodig heeft voor betere Google rankings" />
                <meta name="twitter:image" content="https://www.empowers.nl/images/blogs/technische-seo-checklist-2025-website.jpg" />

                {/* Article Schema */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Article",
                        "headline": "Technische SEO checklist 2026: alles wat je website nodig heeft",
                        "description": "Volledige technische SEO checklist. Ontdek wat je website nodig heeft voor betere rankings.",
                        "image": "https://www.empowers.nl/images/blogs/technische-seo-checklist-2025-website.jpg",
                        "datePublished": "2026-03-11",
                        "author": {
                            "@type": "Organization",
                            "name": "Empowers"
                        }
                    })}
                </script>

                {/* FAQ Schema */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": faqs.map(faq => ({
                            "@type": "Question",
                            "name": faq.question,
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": faq.answer
                            }
                        }))
                    })}
                </script>

                {/* Breadcrumb Schema */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "BreadcrumbList",
                        "itemListElement": breadcrumbs.map((crumb, idx) => ({
                            "@type": "ListItem",
                            "position": idx + 1,
                            "name": crumb.name,
                            "item": `https://www.empowers.nl${crumb.href}`
                        }))
                    })}
                </script>
            </Helmet>

            <Navbar />

            <article className="w-full pt-40 pb-24 px-6 relative">
                <div className="max-w-4xl mx-auto">
                    {/* Breadcrumbs */}
                    <nav className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-primary/50 mb-12">
                        <Link to="/" className="hover:text-accent transition-colors">Home</Link>
                        <ChevronRight className="w-3 h-3" />
                        <Link to="/nieuws" className="hover:text-accent transition-colors">Nieuws</Link>
                        <ChevronRight className="w-3 h-3" />
                        <Link to="/blogs/seo" className="hover:text-accent transition-colors">SEO</Link>
                        <ChevronRight className="w-3 h-3" />
                        <span className="text-primary truncate">Technische SEO...</span>
                    </nav>

                    {/* Header */}
                    <header className="mb-16">
                        <div className="inline-block px-3 py-1 bg-accent/10 text-accent font-mono text-xs uppercase tracking-widest rounded-full mb-6">
                            SEO
                        </div>
                        <h1 className="font-sans font-bold text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight mb-8">
                            Technische SEO checklist 2026: alles wat je website nodig heeft
                        </h1>
                        <div className="flex flex-wrap items-center gap-6 text-sm font-sans text-primary/60 border-y border-primary/10 py-6">
                            <div className="flex items-center gap-2">
                                <User className="w-4 h-4" />
                                <span>Empowers Redactie</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>11 maart 2026</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>6 minuten leestijd</span>
                            </div>
                        </div>
                    </header>

                    {/* Featured Image */}
                    <div className="mb-12 rounded-lg overflow-hidden h-96 bg-cover bg-center"
                         style={{ backgroundImage: "url('/images/blogs/technische-seo-checklist-2025-website.jpg')" }}>
                    </div>

                    {/* Content */}
                    <div className="prose prose-lg max-w-none text-primary">
                        <p className="text-lg leading-relaxed mb-8">
                            Technische SEO is het fundament van je online zichtbaarheid. Zonder sterke technische basis lukt het niet om goed in Google te ranken. Deze checklist helpt je alle essentiële aspecten te checken en te verbeteren.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Waarom is technische SEO zo belangrijk?</h2>
                        <p className="text-primary/80 leading-relaxed mb-4">
                            Google kan alleen páginas ranken die het kan crawlen en indexeren. Technische problemen vormen vaak onzichtbare barrières. Ze zorgen ervoor dat je ranking daalt, ook al heb je geweldige content.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-4">
                            In 2026 zijn snelheid en gebruikerservaring nog belangrijker geworden. Google let scherper op hoe goed je site presteert. Dit maakt technische optimalisatie niet optioneel, maar essentieel.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Is je website snel genoeg?</h2>
                        <p className="text-primary/80 leading-relaxed mb-4">
                            Snelheid bepaalt je conversies en rankings. Sites die langzaam laden, verliezen bezoekers en scoren lager bij Google. Check je pagina's nu met Google PageSpeed Insights. Meer informatie over hoe je <Link to="/blogs/seo/lang-duurt-seo-realistische-verwachtingen" className="text-accent hover:underline">SEO op te bouwen</Link> en daarin snelheid mee te nemen, vind je in ons artikel.
                        </p>
                        <ul className="list-disc pl-6 space-y-3 my-6">
                            <li>Mobiele snelheid: onder de 3 seconden laden</li>
                            <li>Desktop snelheid: onder de 2 seconden</li>
                            <li>Afbeeldingen: gecomprimeerd en geoptimaliseerd</li>
                            <li>JavaScript: minimaal en lazy-loaded</li>
                        </ul>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Core Web Vitals: Hoe scoor jij?</h2>
                        <p className="text-primary/80 leading-relaxed mb-4">
                            Core Web Vitals meten hoe goed bezoekers jouw site ervaren. Ze bestaan uit drie metrics: Largest Contentful Paint (LCP), First Input Delay (FID) en Cumulative Layout Shift (CLS).
                        </p>
                        <ul className="list-disc pl-6 space-y-3 my-6">
                            <li>LCP (laadtijd): onder 2,5 seconden</li>
                            <li>FID (interactiviteit): onder 100 milliseconden</li>
                            <li>CLS (stabiliteit): onder 0,1</li>
                        </ul>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Controleer je scores in Google Search Console. Daar zie je exact welke pagina's beter kunnen.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe goed is je sitemap?</h2>
                        <p className="text-primary/80 leading-relaxed mb-4">
                            Een XML sitemap is een bestand dat alle páginas van je website opsomt. Het helpt Google om alles te vinden. Zorg ervoor dat deze sitemap compleet en actueel is.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-4">
                            Upload je sitemap in Google Search Console. Check dat alle páginas er in staan. Verwijder oude páginas zodat Google geen tijd verspilt aan dode links.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Is je website mobiel-vriendelijk?</h2>
                        <p className="text-primary/80 leading-relaxed mb-4">
                            Meer dan 60% van het internet verkeer komt van mobiele apparaten. Google prioriteert mobile-first indexing. Jouw site móet responsief zijn en goed op telefoons werken. Dit is ook cruciaal voor het bereiken van uw <Link to="/seo" className="text-accent hover:underline">SEO-doelen</Link>.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-4">
                            Test je website op alle apparaten. Zorg voor grote knoppen, leesbare tekst en makkelijk navigeren op kleine schermen. Dit verbetert zowel je ranking als je conversiepercentage.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Heb je HTTPS en canonicale tags?</h2>
                        <p className="text-primary/80 leading-relaxed mb-4">
                            HTTPS is een absolute must. Google geeft voorkeur aan beveiligde websites. Zonder het SSL-certificaat verlies je ranking punten en vertrouwen van bezoekers.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-4">
                            Canonicale tags voorkomen duplicate content. Ze vertellen Google welke versie van een página important is. Dit scheelt crawl budget en concentreert je ranking kracht.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Structured data: Geeft Google extra informatie</h2>
                        <p className="text-primary/80 leading-relaxed mb-4">
                            Schema markup helpt Google je content beter te begrijpen. Voeg JSON-LD toe voor je organisatie, producten, reviews en artikelen.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-4">
                            Structured data verhoogt je kans op rich snippets. Dit maakt je zoekresultaat aantrekkelijker en vergroot de clickthrough rate. Controleer alles met de Rich Results Test.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Robots.txt en crawlability: Geeft Google het juiste pad</h2>
                        <p className="text-primary/80 leading-relaxed mb-4">
                            Je robots.txt bestand vertelt zoekmachines welke pagina's ze mogen en niet mogen crawlen. Dit bespaart crawl budget en focust Google op belangrijke pagina's.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-4">
                            Controleer je robots.txt in Search Console. Zorg ervoor dat je geen belangrijke pagina's per ongeluk blokkeert. Dit is een veelvoorkomende fout die je ranking ernstig kan schaden.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Je volledige checklist voor technische SEO</h2>
                        <ul className="list-disc pl-6 space-y-3 my-6">
                            <li>☐ Zorg voor HTTPS op alle pagina's</li>
                            <li>☐ Optimaliseer Core Web Vitals via PageSpeed Insights</li>
                            <li>☐ Maak je site mobiel-vriendelijk en responsief</li>
                            <li>☐ Upload en verificeer XML sitemap in Search Console</li>
                            <li>☐ Voeg canonicale tags toe waar nodig</li>
                            <li>☐ Controleer je robots.txt bestand</li>
                            <li>☐ Implementeer schema markup (JSON-LD)</li>
                            <li>☐ Zorg voor korte laadtijden (onder 3 seconden)</li>
                            <li>☐ Controleer crawl errors in Search Console</li>
                            <li>☐ Optimaliseer afbeeldingen en media</li>
                        </ul>

                        <p className="text-primary/80 leading-relaxed mb-6 mt-12 pt-8 border-t border-primary/20">
                            Technische SEO klinkt ingewikkeld, maar het helpt je echt vooruit. Begin met deze checklist en werk stap voor stap. Het resultaat? Betere rankings, meer traffic en meer klanten. Wil je weten hoe dit onderdeel is van een complete <Link to="/seo" className="text-accent hover:underline">SEO-strategie</Link>? Neem contact met ons op.
                        </p>
                    </div>

                    {/* CTA Box */}
                    <div className="bg-accent/5 border border-accent/20 rounded-lg p-8 md:p-10 my-16">
                        <h3 className="text-2xl font-bold text-primary mb-4">Klaar om je technische SEO aan te pakken?</h3>
                        <p className="text-primary/70 mb-6">
                            Wij helpen je website volledig te optimaliseren. Van snelheid tot structured data, we checken alles. Laten we samen je ranking verhogen.
                        </p>
                        <Link
                            to="/contact"
                            className="inline-block bg-accent text-white px-8 py-3 rounded-lg font-medium hover:bg-accent/90 transition-colors"
                        >
                            Vraag offerte aan
                        </Link>
                    </div>

                    {/* FAQ Section */}
                    <section className="my-16">
                        <h2 className="text-3xl font-bold text-primary mb-8">Veelgestelde vragen</h2>
                        <div className="space-y-6 not-prose">
                            {faqs.map((faq, idx) => (
                                <div key={idx} className="border border-primary/10 rounded-xl p-6">
                                    <h3 className="font-sans font-semibold text-primary text-lg mb-3">
                                        {faq.question}
                                    </h3>
                                    <p className="font-sans text-primary/70 leading-relaxed">
                                        {faq.answer}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </article>

            {/* Bottom CTA */}
            <section className="w-full pb-32 px-6">
                <div className="max-w-4xl mx-auto bg-primary rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
                    <h2 className="relative z-10 font-drama italic text-background text-3xl sm:text-4xl md:text-5xl mb-6">Meer rankings, meer bezoekers?</h2>
                    <p className="relative z-10 font-sans text-background/70 text-lg mb-10 max-w-xl mx-auto">
                        Wij helpen marketing agencies en bedrijven hun online zichtbaarheid te vergroten. Laat ons jouw website analyseren.
                    </p>
                    <Link to="/contact" className="relative z-10 btn-magnetic inline-flex items-center justify-center bg-accent text-background font-sans font-bold text-lg px-10 py-4 rounded-[2rem] hover:bg-accent/90 transition-colors">
                        Neem contact op
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
