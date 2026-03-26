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
                    {/* Breadcrumb Navigation */}
                    <nav className="mb-8 flex items-center gap-2 text-sm text-secondary">
                        {breadcrumbs.map((crumb, idx) => (
                            <div key={idx} className="flex items-center gap-2">
                                {idx > 0 && <ChevronRight className="w-4 h-4 text-secondary/50" />}
                                {crumb.href === '#' ? (
                                    <span className="text-secondary">{crumb.name}</span>
                                ) : (
                                    <Link to={crumb.href} className="hover:text-accent transition-colors">
                                        {crumb.name}
                                    </Link>
                                )}
                            </div>
                        ))}
                    </nav>

                    {/* Header */}
                    <header className="mb-12">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="bg-accent/10 text-accent px-4 py-1.5 rounded-full text-sm font-medium">SEO</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-dark mb-6 leading-tight">
                            Technische SEO checklist 2026: alles wat je website nodig heeft
                        </h1>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-secondary text-sm">
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>11 maart 2026</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>6 min read</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <User className="w-4 h-4" />
                                <span>Empowers Redactie</span>
                            </div>
                        </div>
                    </header>

                    {/* Featured Image */}
                    <div className="mb-12 rounded-lg overflow-hidden h-96 bg-cover bg-center"
                         style={{ backgroundImage: "url('/images/blogs/technische-seo-checklist-2025-website.jpg')" }}>
                    </div>

                    {/* Content */}
                    <div className="prose prose-lg max-w-none text-dark">
                        <p className="text-lg leading-relaxed mb-8">
                            Technische SEO is het fundament van je online zichtbaarheid. Zonder sterke technische basis lukt het niet om goed in Google te ranken. Deze checklist helpt je alle essentiële aspecten te checken en te verbeteren.
                        </p>

                        <h2 className="text-3xl font-bold mt-12 mb-6">Waarom is technische SEO zo belangrijk?</h2>
                        <p>
                            Google kan alleen páginas ranken die het kan crawlen en indexeren. Technische problemen vormen vaak onzichtbare barrières. Ze zorgen ervoor dat je ranking daalt, ook al heb je geweldige content.
                        </p>
                        <p>
                            In 2026 zijn snelheid en gebruikerservaring nog belangrijker geworden. Google let scherper op hoe goed je site presteert. Dit maakt technische optimalisatie niet optioneel, maar essentieel.
                        </p>

                        <h2 className="text-3xl font-bold mt-12 mb-6">Is je website snel genoeg?</h2>
                        <p>
                            Snelheid bepaalt je conversies en rankings. Sites die langzaam laden, verliezen bezoekers en scoren lager bij Google. Check je pagina's nu met Google PageSpeed Insights. Meer informatie over hoe je <Link to="/blogs/seo/lang-duurt-seo-realistische-verwachtingen" className="text-blue-700 underline hover:text-blue-900">SEO op te bouwen</Link> en daarin snelheid mee te nemen, vind je in ons artikel.
                        </p>
                        <ul className="list-disc pl-6 space-y-3 my-6">
                            <li>Mobiele snelheid: onder de 3 seconden laden</li>
                            <li>Desktop snelheid: onder de 2 seconden</li>
                            <li>Afbeeldingen: gecomprimeerd en geoptimaliseerd</li>
                            <li>JavaScript: minimaal en lazy-loaded</li>
                        </ul>

                        <h2 className="text-3xl font-bold mt-12 mb-6">Core Web Vitals: Hoe scoor jij?</h2>
                        <p>
                            Core Web Vitals meten hoe goed bezoekers jouw site ervaren. Ze bestaan uit drie metrics: Largest Contentful Paint (LCP), First Input Delay (FID) en Cumulative Layout Shift (CLS).
                        </p>
                        <ul className="list-disc pl-6 space-y-3 my-6">
                            <li>LCP (laadtijd): onder 2,5 seconden</li>
                            <li>FID (interactiviteit): onder 100 milliseconden</li>
                            <li>CLS (stabiliteit): onder 0,1</li>
                        </ul>
                        <p>
                            Controleer je scores in Google Search Console. Daar zie je exact welke pagina's beter kunnen.
                        </p>

                        <h2 className="text-3xl font-bold mt-12 mb-6">Hoe goed is je sitemap?</h2>
                        <p>
                            Een XML sitemap is een bestand dat alle páginas van je website opsomt. Het helpt Google om alles te vinden. Zorg ervoor dat deze sitemap compleet en actueel is.
                        </p>
                        <p>
                            Upload je sitemap in Google Search Console. Check dat alle páginas er in staan. Verwijder oude páginas zodat Google geen tijd verspilt aan dode links.
                        </p>

                        <h2 className="text-3xl font-bold mt-12 mb-6">Is je website mobiel-vriendelijk?</h2>
                        <p>
                            Meer dan 60% van het internet verkeer komt van mobiele apparaten. Google prioriteert mobile-first indexing. Jouw site móet responsief zijn en goed op telefoons werken. Dit is ook cruciaal voor het bereiken van uw <Link to="/diensten/seo" className="text-blue-700 underline hover:text-blue-900">SEO-doelen</Link>.
                        </p>
                        <p>
                            Test je website op alle apparaten. Zorg voor grote knoppen, leesbare tekst en makkelijk navigeren op kleine schermen. Dit verbetert zowel je ranking als je conversiepercentage.
                        </p>

                        <h2 className="text-3xl font-bold mt-12 mb-6">Heb je HTTPS en canonicale tags?</h2>
                        <p>
                            HTTPS is een absolute must. Google geeft voorkeur aan beveiligde websites. Zonder het SSL-certificaat verlies je ranking punten en vertrouwen van bezoekers.
                        </p>
                        <p>
                            Canonicale tags voorkomen duplicate content. Ze vertellen Google welke versie van een página important is. Dit scheelt crawl budget en concentreert je ranking kracht.
                        </p>

                        <h2 className="text-3xl font-bold mt-12 mb-6">Structured data: Geeft Google extra informatie</h2>
                        <p>
                            Schema markup helpt Google je content beter te begrijpen. Voeg JSON-LD toe voor je organisatie, producten, reviews en artikelen.
                        </p>
                        <p>
                            Structured data verhoogt je kans op rich snippets. Dit maakt je zoekresultaat aantrekkelijker en vergroot de clickthrough rate. Controleer alles met de Rich Results Test.
                        </p>

                        <h2 className="text-3xl font-bold mt-12 mb-6">Robots.txt en crawlability: Geeft Google het juiste pad</h2>
                        <p>
                            Je robots.txt bestand vertelt zoekmachines welke pagina's ze mogen en niet mogen crawlen. Dit bespaart crawl budget en focust Google op belangrijke pagina's.
                        </p>
                        <p>
                            Controleer je robots.txt in Search Console. Zorg ervoor dat je geen belangrijke pagina's per ongeluk blokkeert. Dit is een veelvoorkomende fout die je ranking ernstig kan schaden.
                        </p>

                        <h2 className="text-3xl font-bold mt-12 mb-6">Je volledige checklist voor technische SEO</h2>
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

                        <p className="mt-12 pt-8 border-t border-secondary/20">
                            Technische SEO klinkt ingewikkeld, maar het helpt je echt vooruit. Begin met deze checklist en werk stap voor stap. Het resultaat? Betere rankings, meer traffic en meer klanten. Wil je weten hoe dit onderdeel is van een complete <Link to="/diensten/seo" className="text-blue-700 underline hover:text-blue-900">SEO-strategie</Link>? Neem contact met ons op.
                        </p>
                    </div>

                    {/* CTA Box */}
                    <div className="bg-accent/5 border border-accent/20 rounded-lg p-8 md:p-10 my-16">
                        <h3 className="text-2xl font-bold text-dark mb-4">Klaar om je technische SEO aan te pakken?</h3>
                        <p className="text-secondary mb-6">
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
                        <h2 className="text-3xl font-bold text-dark mb-8">Veelgestelde vragen</h2>
                        <div className="space-y-6">
                            {faqs.map((faq, idx) => (
                                <details key={idx} className="group border border-secondary/20 rounded-lg p-6 cursor-pointer hover:border-accent/50 transition-colors">
                                    <summary className="flex items-center justify-between font-medium text-dark text-lg">
                                        <span>{faq.question}</span>
                                        <span className="text-accent group-open:rotate-180 transition-transform">▼</span>
                                    </summary>
                                    <p className="mt-4 text-secondary leading-relaxed">
                                        {faq.answer}
                                    </p>
                                </details>
                            ))}
                        </div>
                    </section>
                </div>
            </article>

            {/* Bottom CTA Section */}
            <section className="bg-gradient-to-r from-accent/10 to-accent/5 py-16 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">
                        Meer rankings, meer bezoekers, meer omzet
                    </h2>
                    <p className="text-lg text-secondary mb-8 max-w-2xl mx-auto">
                        Wij helpen marketing agencies en bedrijven hun online zichtbaarheid te vergroten. Laat ons jouw website analyseren.
                    </p>
                    <Link
                        to="/contact"
                        className="inline-block bg-accent text-white px-8 py-4 rounded-lg font-medium text-lg hover:bg-accent/90 transition-colors"
                    >
                        Neem contact op
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
