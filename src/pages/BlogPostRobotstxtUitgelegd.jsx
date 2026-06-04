import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ChevronRight, User } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function BlogPostRobotstxtUitgelegd() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen selection:bg-accent/30 selection:text-dark flex flex-col bg-background">
            <Helmet>
                <title>Robots.txt uitgelegd: wat mag en wat mag niet gecrawled worden | Empowers</title>
                <meta name="description" content="Robots.txt uitgelegd: wat het bestand doet, hoe je bepaalt wat zoekmachines wel en niet mogen crawlen, en welke fouten je site onzichtbaar kunnen maken." />
                <meta name="keywords" content="robots txt, robots.txt uitgelegd, crawlen blokkeren, robots txt voorbeeld, disallow, zoekmachine crawler" />
                <link rel="canonical" href="https://www.empowers.nl/blogs/seo/robotstxt-uitgelegd-mag-mag-gecrawled" />
                <meta property="og:title" content="Robots.txt uitgelegd: wat mag en wat mag niet gecrawled worden" />
                <meta property="og:description" content="Wat robots.txt doet, hoe je bepaalt wat zoekmachines mogen crawlen en welke fouten je site onzichtbaar maken." />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://www.empowers.nl/blogs/seo/robotstxt-uitgelegd-mag-mag-gecrawled" />
                <meta property="og:image" content="https://www.empowers.nl/images/blogs/robotstxt-uitgelegd-mag-mag-gecrawled.jpg" />
                <meta property="article:published_time" content="2026-06-03" />
                <meta property="article:author" content="Empowers" />
                <meta property="article:section" content="SEO" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Robots.txt uitgelegd: wat mag en wat mag niet gecrawled worden" />
                <meta name="twitter:description" content="Wat robots.txt doet, hoe je bepaalt wat zoekmachines mogen crawlen en welke fouten je site onzichtbaar maken." />

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@graph": [
                            {
                                "@type": "Article",
                                "headline": "Robots.txt uitgelegd: wat mag en wat mag niet gecrawled worden",
                                "description": "Robots.txt uitgelegd: wat het bestand doet, hoe je bepaalt wat zoekmachines wel en niet mogen crawlen, en welke fouten je site onzichtbaar kunnen maken.",
                                "image": "https://www.empowers.nl/images/blogs/robotstxt-uitgelegd-mag-mag-gecrawled.jpg",
                                "datePublished": "2026-06-03T15:00:00+02:00",
                                "dateModified": "2026-06-03T15:00:00+02:00",
                                "author": { "@type": "Organization", "name": "Empowers" },
                                "publisher": {
                                    "@type": "Organization",
                                    "name": "Empowers",
                                    "url": "https://www.empowers.nl",
                                    "logo": { "@type": "ImageObject", "url": "https://www.empowers.nl/empowers-logo-color.svg" }
                                }
                            },
                            {
                                "@type": "BreadcrumbList",
                                "itemListElement": [
                                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.empowers.nl" },
                                    { "@type": "ListItem", "position": 2, "name": "Blogs", "item": "https://www.empowers.nl/blogs" },
                                    { "@type": "ListItem", "position": 3, "name": "SEO", "item": "https://www.empowers.nl/blogs/seo" },
                                    { "@type": "ListItem", "position": 4, "name": "Robots.txt uitgelegd", "item": "https://www.empowers.nl/blogs/seo/robotstxt-uitgelegd-mag-mag-gecrawled" }
                                ]
                            },
                            {
                                "@type": "FAQPage",
                                "mainEntity": [
                                    {
                                        "@type": "Question",
                                        "name": "Wat is een robots.txt bestand?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Robots.txt is een klein tekstbestand in de root van je website dat zoekmachines vertelt welke delen ze wel en niet mogen crawlen. Het staat op je-domein.nl/robots.txt en is het eerste wat veel crawlers ophalen voordat ze je site bekijken. Het is een instructie aan de crawler, geen slot: nette bots houden zich eraan, maar het is geen beveiliging."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Wat is het verschil tussen crawlen blokkeren en niet indexeren?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Robots.txt regelt het crawlen, dus of een zoekmachine een pagina mag ophalen. Indexeren regel je met een noindex-instructie in de pagina zelf. Verwarrend genoeg kan een pagina die je in robots.txt blokkeert toch in de zoekresultaten verschijnen als er links naar wijzen. Wil je een pagina echt uit de resultaten, gebruik dan noindex en blokkeer hem niet in robots.txt."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Wat zet je meestal in een robots.txt?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Vaak blokkeer je technische of privemappen die niets toevoegen in de zoekresultaten, zoals interne zoekpagina's of beheeromgevingen. Daarnaast verwijs je naar je XML-sitemap, zodat een crawler die meteen vindt. De meeste sites hebben aan een eenvoudig bestand genoeg; uitgebreide regels zijn vooral nodig bij grote of complexe sites."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Welke fout in robots.txt maakt een site onzichtbaar?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "De klassieker is een regel die per ongeluk de hele site blokkeert: Disallow met een enkele slash. Dat gebeurt vaak als een testversie live gaat zonder dat de blokkade eraf is. Het gevolg is dat zoekmachines niets meer mogen ophalen en je site uit de resultaten zakt. Controleer daarom je robots.txt altijd na een livegang."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Houden AI-crawlers zich aan robots.txt?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "De bekende AI-crawlers zoals GPTBot en PerplexityBot lezen robots.txt en respecteren de regels die je voor hen instelt. Wil je dat AI-modellen je content kunnen gebruiken, blokkeer die bots dan niet. Wil je juist niet meegenomen worden, dan kun je ze gericht weren. Het is dus ook een knop voor je zichtbaarheid in AI-antwoorden."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Hoe controleer ik of mijn robots.txt klopt?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Open je-domein.nl/robots.txt in je browser om te zien wat erin staat. Gebruik daarnaast Google Search Console om te testen of belangrijke pagina's niet per ongeluk geblokkeerd zijn. Een snelle check na elke grote wijziging aan je site voorkomt dat een verkeerde regel je vindbaarheid sloopt."
                                        }
                                    }
                                ]
                            }
                        ]
                    })}
                </script>
            </Helmet>

            <Navbar />

            <article className="w-full pt-40 pb-24 px-6 relative">
                <div className="max-w-4xl mx-auto">
                    <nav className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-primary/50 mb-12">
                        <Link to="/" className="hover:text-accent transition-colors">Home</Link>
                        <ChevronRight className="w-3 h-3" />
                        <Link to="/nieuws" className="hover:text-accent transition-colors">Nieuws</Link>
                        <ChevronRight className="w-3 h-3" />
                        <Link to="/blogs/seo" className="hover:text-accent transition-colors">SEO</Link>
                        <ChevronRight className="w-3 h-3" />
                        <span className="text-primary truncate">Robots.txt uitgelegd</span>
                    </nav>

                    <header className="mb-16">
                        <div className="inline-block px-3 py-1 bg-accent/10 text-accent font-mono text-xs uppercase tracking-widest rounded-full mb-6">
                            SEO
                        </div>
                        <h1 className="font-sans font-bold text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight mb-8">
                            Robots.txt uitgelegd: wat mag en wat mag niet gecrawled worden
                        </h1>
                        <div className="flex flex-wrap items-center gap-6 text-sm font-sans text-primary/60 border-y border-primary/10 py-6">
                            <div className="flex items-center gap-2"><User className="w-4 h-4" /><span>Empowers Redactie</span></div>
                            <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>3 juni 2026</span></div>
                            <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>7 minuten leestijd</span></div>
                        </div>
                    </header>

                    <figure className="w-full h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden mb-16 relative bg-primary">
                        <div className="absolute inset-0 bg-[url('/images/blogs/robotstxt-uitgelegd-mag-mag-gecrawled.jpg')] bg-cover bg-center opacity-40 mix-blend-overlay" style={{ backgroundImage: "url('/images/blogs/robotstxt-uitgelegd-mag-mag-gecrawled.jpg')" }}></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </figure>

                    <div className="prose prose-lg max-w-none prose-headings:text-primary prose-headings:font-bold prose-a:text-accent prose-a:underline hover:prose-a:text-accent/80">
                        <p className="text-xl leading-relaxed text-primary/80 font-medium mb-6">
                            Robots.txt is een klein tekstbestand in de root van je website dat zoekmachines vertelt welke delen ze wel en niet mogen crawlen. Je gebruikt het om onbelangrijke of technische pagina's buiten beeld te houden en om naar je sitemap te verwijzen. Eén verkeerde regel kan je hele site uit de zoekresultaten halen, dus het loont om te snappen wat erin hoort en wat niet.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat is robots.txt en wat doet het?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Robots.txt staat op je-domein.nl/robots.txt en is vaak het eerste wat een crawler ophaalt voordat hij je site bekijkt. In het bestand geef je per type bot aan welke mappen of pagina's hij mag bezoeken en welke niet. Zo stuur je waar de aandacht van een zoekmachine naartoe gaat.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Belangrijk om te weten: het is een instructie, geen slot. Nette zoekmachines houden zich eraan, maar het bestand beveiligt niets. Wie een pagina echt wil afschermen, gebruikt een wachtwoord of een andere beveiliging, niet robots.txt.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat mag je beter wel en niet blokkeren?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Blokkeer wat niets toevoegt in de zoekresultaten: interne zoekpagina's, beheeromgevingen en technische mappen. Die wil je niet laten crawlen, omdat ze rommel toevoegen en de aandacht van je echte pagina's afleiden. Verwijs daarnaast naar je XML-sitemap, zodat een crawler die meteen vindt.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Blokkeer juist niet je belangrijke pagina's, je afbeeldingen of de bestanden die je site nodig heeft om goed te laden. Een veelgemaakte fout is het wegblokkeren van scripts of stijlbestanden, waardoor een zoekmachine je pagina niet meer goed kan weergeven. Hoe een sitemap en robots.txt elkaar aanvullen, lees je in onze blog over de <Link to="/blogs/seo/xml-sitemap-heb-hem-nodig" className="text-accent hover:underline">XML-sitemap</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat is het verschil tussen crawlen en indexeren?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Crawlen is het ophalen van een pagina, indexeren is het opnemen ervan in de zoekresultaten. Robots.txt regelt alleen het crawlen. Wil je een pagina uit de resultaten houden, dan gebruik je een noindex-instructie in de pagina zelf, niet een blokkade in robots.txt.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Dit verwarren mensen vaak, met vervelende gevolgen. Blokkeer je een pagina in robots.txt, dan kan een zoekmachine de noindex-instructie niet meer lezen, want hij mag de pagina niet ophalen. Het resultaat is dat de pagina soms toch in de resultaten blijft staan. Wil je hem echt weg, laat hem dan crawlen maar zet er noindex op.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Houden AI-crawlers zich aan robots.txt?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Ja, de bekende AI-crawlers zoals GPTBot van OpenAI en PerplexityBot lezen robots.txt en volgen de regels die je voor hen instelt. Daarmee is het bestand ook een knop voor je zichtbaarheid in AI-antwoorden. Wil je dat ChatGPT en Perplexity je content kunnen gebruiken, dan moet je die bots niet blokkeren.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Andersom kun je AI-crawlers gericht weren als je niet meegenomen wilt worden. Dat is een keuze die per bedrijf verschilt. Voor wie groei zoekt in AI-zoekmachines is openstellen meestal logischer dan afsluiten. Hoe je verder werkt aan die zichtbaarheid, lees je in onze <Link to="/blogs/geo/geo-optimalisatie-checklist-gevonden-ai" className="text-accent hover:underline">GEO optimalisatie checklist</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe controleer je of het klopt?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Open je-domein.nl/robots.txt in je browser om te zien wat erin staat. De grootste fout is een regel die per ongeluk de hele site blokkeert, wat vaak gebeurt als een testversie live gaat zonder dat de blokkade eraf is. Controleer je bestand daarom altijd na een livegang.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Gebruik Google Search Console om te testen of belangrijke pagina's niet onbedoeld geblokkeerd zijn. Een snelle check na elke grote wijziging voorkomt dat een verkeerde regel je vindbaarheid sloopt. Wil je zeker weten dat jouw robots.txt en sitemap goed staan? Plan een gratis gesprek via <Link to="/contact" className="text-accent hover:underline">empowers.nl/contact</Link>.
                        </p>
                    </div>

                    <section className="mt-16 pt-12 border-t border-primary/10">
                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Veelgestelde vragen</h2>
                        <div className="space-y-6 not-prose">
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat is een robots.txt bestand?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Robots.txt is een klein tekstbestand in de root van je website dat zoekmachines vertelt welke delen ze wel en niet mogen crawlen. Het staat op je-domein.nl/robots.txt en is het eerste wat veel crawlers ophalen voordat ze je site bekijken. Het is een instructie aan de crawler, geen slot: nette bots houden zich eraan, maar het is geen beveiliging.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat is het verschil tussen crawlen blokkeren en niet indexeren?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Robots.txt regelt het crawlen, dus of een zoekmachine een pagina mag ophalen. Indexeren regel je met een noindex-instructie in de pagina zelf. Verwarrend genoeg kan een pagina die je in robots.txt blokkeert toch in de zoekresultaten verschijnen als er links naar wijzen. Wil je een pagina echt uit de resultaten, gebruik dan noindex en blokkeer hem niet in robots.txt.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat zet je meestal in een robots.txt?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Vaak blokkeer je technische of privemappen die niets toevoegen in de zoekresultaten, zoals interne zoekpagina's of beheeromgevingen. Daarnaast verwijs je naar je XML-sitemap, zodat een crawler die meteen vindt. De meeste sites hebben aan een eenvoudig bestand genoeg; uitgebreide regels zijn vooral nodig bij grote of complexe sites.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Welke fout in robots.txt maakt een site onzichtbaar?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">De klassieker is een regel die per ongeluk de hele site blokkeert: Disallow met een enkele slash. Dat gebeurt vaak als een testversie live gaat zonder dat de blokkade eraf is. Het gevolg is dat zoekmachines niets meer mogen ophalen en je site uit de resultaten zakt. Controleer daarom je robots.txt altijd na een livegang.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Houden AI-crawlers zich aan robots.txt?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">De bekende AI-crawlers zoals GPTBot en PerplexityBot lezen robots.txt en respecteren de regels die je voor hen instelt. Wil je dat AI-modellen je content kunnen gebruiken, blokkeer die bots dan niet. Wil je juist niet meegenomen worden, dan kun je ze gericht weren. Het is dus ook een knop voor je zichtbaarheid in AI-antwoorden.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoe controleer ik of mijn robots.txt klopt?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Open je-domein.nl/robots.txt in je browser om te zien wat erin staat. Gebruik daarnaast Google Search Console om te testen of belangrijke pagina's niet per ongeluk geblokkeerd zijn. Een snelle check na elke grote wijziging aan je site voorkomt dat een verkeerde regel je vindbaarheid sloopt.</p>
                            </div>
                        </div>
                    </section>

                    <section className="mt-16 pt-12 border-t border-primary/10">
                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Lees ook</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <Link to="/blogs/seo/xml-sitemap-heb-hem-nodig" className="block border border-primary/10 rounded-xl p-6 hover:border-accent transition-colors">
                                <div className="text-xs font-mono uppercase tracking-widest text-accent mb-2">SEO</div>
                                <h3 className="font-sans font-semibold text-primary text-lg mb-2">XML-sitemap: wat is het en waarom heb je er een nodig</h3>
                                <p className="font-sans text-primary/70 text-sm">Hoe een sitemap zoekmachines helpt je pagina's te vinden.</p>
                            </Link>
                            <Link to="/blogs/seo/technische-seo-checklist-2025-website" className="block border border-primary/10 rounded-xl p-6 hover:border-accent transition-colors">
                                <div className="text-xs font-mono uppercase tracking-widest text-accent mb-2">SEO</div>
                                <h3 className="font-sans font-semibold text-primary text-lg mb-2">Technische SEO checklist voor je website</h3>
                                <p className="font-sans text-primary/70 text-sm">De technische punten die je vindbaarheid maken of breken.</p>
                            </Link>
                        </div>
                    </section>
                </div>
            </article>

            <section className="w-full pb-32 px-6">
                <div className="max-w-4xl mx-auto bg-primary rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
                    <h2 className="relative z-10 font-drama italic text-background text-3xl sm:text-4xl md:text-5xl mb-6">Staat jouw technische basis goed?</h2>
                    <p className="relative z-10 font-sans text-background/70 text-lg mb-10 max-w-xl mx-auto">In een gesprek van een halfuur kijken we naar je robots.txt, je sitemap en je indexering en vertellen we waar de winst zit. Geen verkooppraatje, wel een helder beeld.</p>
                    <Link to="/contact" className="relative z-10 btn-magnetic inline-flex items-center justify-center bg-accent text-background font-sans font-bold text-lg px-10 py-4 rounded-[2rem] hover:bg-accent/90 transition-colors">Neem contact op</Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
