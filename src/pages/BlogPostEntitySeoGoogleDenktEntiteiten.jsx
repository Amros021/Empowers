import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ChevronRight, User } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function BlogPostEntitySeoGoogleDenktEntiteiten() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen selection:bg-accent/30 selection:text-dark flex flex-col bg-background">
            <Helmet>
                <title>Entity SEO: hoe Google denkt in entiteiten | Empowers</title>
                <meta name="description" content="Google koppelt zoekopdrachten aan entiteiten, niet aan losse woorden. Lees wat entity SEO is en hoe je zorgt dat Google jouw bedrijf als entiteit herkent." />
                <link rel="canonical" href="https://www.empowers.nl/blogs/seo/entity-seo-google-denkt-entiteiten" />
                <meta property="og:title" content="Entity SEO: hoe Google denkt in entiteiten | Empowers" />
                <meta property="og:description" content="Google koppelt zoekopdrachten aan entiteiten, niet aan losse woorden. Lees wat entity SEO is en hoe je zorgt dat Google jouw bedrijf als entiteit herkent." />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://www.empowers.nl/blogs/seo/entity-seo-google-denkt-entiteiten" />
                <meta property="og:image" content="https://www.empowers.nl/images/blogs/entity-seo-google-denkt-entiteiten.jpg" />
                <meta property="article:published_time" content="2026-07-26T10:00:00+02:00" />
                <meta property="article:author" content="Empowers" />
                <meta property="article:section" content="SEO" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Entity SEO: hoe Google denkt in entiteiten | Empowers" />
                <meta name="twitter:description" content="Google koppelt zoekopdrachten aan entiteiten, niet aan losse woorden. Lees wat entity SEO is en hoe je zorgt dat Google jouw bedrijf als entiteit herkent." />
                <script type="application/ld+json">{JSON.stringify({
                    "@context": "https://schema.org",
                    "@graph": [
                        {
                            "@type": "Article",
                            "headline": "Entity SEO: hoe Google denkt in entiteiten",
                            "image": "https://www.empowers.nl/images/blogs/entity-seo-google-denkt-entiteiten.jpg",
                            "description": "Google koppelt zoekopdrachten aan entiteiten, niet aan losse woorden. Lees wat entity SEO is en hoe je zorgt dat Google jouw bedrijf als entiteit herkent.",
                            "author": { "@type": "Organization", "name": "Empowers" },
                            "publisher": { "@type": "Organization", "name": "Empowers", "url": "https://www.empowers.nl" },
                            "datePublished": "2026-07-26T10:00:00+02:00",
                            "dateModified": "2026-07-26T10:00:00+02:00",
                            "url": "https://www.empowers.nl/blogs/seo/entity-seo-google-denkt-entiteiten"
                        },
                        {
                            "@type": "BreadcrumbList",
                            "itemListElement": [
                                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.empowers.nl" },
                                { "@type": "ListItem", "position": 2, "name": "Nieuws", "item": "https://www.empowers.nl/nieuws" },
                                { "@type": "ListItem", "position": 3, "name": "SEO", "item": "https://www.empowers.nl/blogs/seo" },
                                { "@type": "ListItem", "position": 4, "name": "Entity SEO: hoe Google denkt in entiteiten", "item": "https://www.empowers.nl/blogs/seo/entity-seo-google-denkt-entiteiten" }
                            ]
                        },
                        {
                            "@type": "FAQPage",
                            "mainEntity": [
                                { "@type": "Question", "name": "Wat is een entiteit in SEO?", "acceptedAnswer": { "@type": "Answer", "text": "Een entiteit is een uniek identificeerbaar ding of concept: een bedrijf, een persoon, een plaats of een product. Google slaat entiteiten op met hun eigenschappen en onderlinge relaties, los van de woorden die mensen ervoor gebruiken. Entity SEO zorgt dat Google jouw bedrijf als zo'n entiteit herkent." } },
                                { "@type": "Question", "name": "Wat is het verschil tussen een keyword en een entiteit?", "acceptedAnswer": { "@type": "Answer", "text": "Een keyword is een reeks letters die iemand intypt. Een entiteit is het ding waar die letters naar verwijzen. Het keyword 'jaguar' kan naar een automerk of een dier verwijzen. Google gebruikt de context van de zoekopdracht en de pagina om te bepalen welke entiteit bedoeld wordt." } },
                                { "@type": "Question", "name": "Hoe kom je in de Google Knowledge Graph?", "acceptedAnswer": { "@type": "Answer", "text": "Er is geen aanmeldformulier. Google neemt entiteiten op die het via meerdere betrouwbare bronnen kan bevestigen: je website met schema markup, je Google Bedrijfsprofiel, vermeldingen op andere sites en voor grotere merken bronnen als Wikidata. Consistentie in naam en gegevens over al die bronnen heen is de basis." } },
                                { "@type": "Question", "name": "Is schema markup verplicht voor entity SEO?", "acceptedAnswer": { "@type": "Answer", "text": "Verplicht is het niet, maar het is wel de meest directe manier om Google te vertellen wie je bent. Met Organization-markup en het sameAs-attribuut koppel je je website expliciet aan je andere profielen. Zonder schema markup moet Google dat verband zelf afleiden en dat gaat vaker mis." } },
                                { "@type": "Question", "name": "Helpt entity SEO ook voor ChatGPT en Perplexity?", "acceptedAnswer": { "@type": "Answer", "text": "Ja. AI-modellen bouwen net als Google een beeld op van merken en hun eigenschappen. Een bedrijf dat overal consistent beschreven staat, is voor een taalmodel makkelijker te herkennen en te noemen in antwoorden. Entity SEO en GEO versterken elkaar daardoor." } },
                                { "@type": "Question", "name": "Werkt entity SEO ook voor kleine bedrijven zonder Wikipedia-pagina?", "acceptedAnswer": { "@type": "Answer", "text": "Zeker. Een Wikipedia-pagina is geen voorwaarde. Voor lokale en kleinere bedrijven zijn een volledig Google Bedrijfsprofiel, correcte schema markup en consistente vermeldingen op relevante sites ruim voldoende om als entiteit herkend te worden binnen de eigen markt." } }
                            ]
                        }
                    ]
                })}</script>
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
                        <span className="text-primary truncate">Entity SEO</span>
                    </nav>

                    {/* Header */}
                    <header className="mb-16">
                        <div className="inline-block px-3 py-1 bg-accent/10 text-accent font-mono text-xs uppercase tracking-widest rounded-full mb-6">
                            SEO
                        </div>
                        <h1 className="font-sans font-bold text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight mb-8">
                            Entity SEO: hoe Google denkt in entiteiten
                        </h1>

                        <div className="flex flex-wrap items-center gap-6 text-sm font-sans text-primary/60 border-y border-primary/10 py-6">
                            <div className="flex items-center gap-2">
                                <User className="w-4 h-4" />
                                <span>Empowers Redactie</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>26 juli 2026</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>6 minuten leestijd</span>
                            </div>
                        </div>
                    </header>

                    {/* Featured Image */}
                    <figure className="w-full h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden mb-16 relative bg-primary">
                        <div className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-overlay" style={{backgroundImage: "url('/images/blogs/entity-seo-google-denkt-entiteiten.jpg')"}}></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </figure>

                    {/* Content */}
                    <div className="prose prose-lg prose-headings:font-sans prose-headings:font-bold prose-headings:text-primary prose-p:font-sans prose-p:text-primary/80 prose-p:leading-relaxed max-w-none">
                        <p className="text-xl md:text-2xl font-medium leading-relaxed mb-10 text-primary">
                            Entity SEO draait om entiteiten: dingen die Google als uniek herkent, zoals een bedrijf, een persoon, een plaats of een product. Google koppelt zoekopdrachten niet aan losse woorden maar aan die entiteiten en hun onderlinge relaties. Wie gevonden wil worden, zorgt dus dat Google zijn bedrijf herkent als een duidelijke entiteit.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat is een entiteit volgens Google?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een entiteit is een ding of concept dat uniek te identificeren is, los van het woord dat je ervoor gebruikt. Neem het woord "jaguar". Dat kan een automerk zijn of een roofdier. Voor jou is het verschil meteen duidelijk uit de context. Google wil datzelfde kunnen.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Daarom bouwde Google de Knowledge Graph, een enorme database van entiteiten die in 2012 werd gelanceerd. Elke entiteit heeft daarin eigenschappen en relaties. Het automerk Jaguar heeft een oprichtingsjaar, een hoofdkantoor en een band met het moederbedrijf. Het dier heeft een leefgebied en een soortnaam. Twee totaal verschillende knopen in hetzelfde netwerk, ook al delen ze één woord.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Jouw bedrijf kan ook zo'n knoop zijn. Met een naam, een vestigingsplaats, diensten en verbanden met andere entiteiten. Entity SEO is het werk dat ervoor zorgt dat Google die knoop aanmaakt en er de juiste informatie aan hangt.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Waarom kijkt Google naar entiteiten in plaats van keywords?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Omdat woorden onbetrouwbaar zijn. Mensen gebruiken synoniemen, maken typefouten en stellen dezelfde vraag op tien manieren. Wie op keywords matcht, mist daardoor de helft van de relevante zoekopdrachten. Wie op betekenis matcht, vangt ze allemaal.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Zoek maar eens op "bureau dat advertenties beheert" en op "advertentiebureau". Andere woorden, zelfde bedoeling. Google herkent achter beide zoekopdrachten dezelfde entiteiten en toont vergelijkbare resultaten. Hoe die betekenislaag onder je content werkt, lees je in ons artikel over <Link to="/blogs/seo/semantische-seo-begrijpt-google-content" className="text-accent hover:underline">semantische SEO</Link>.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Voor jou als ondernemer betekent dit een verschuiving. Je schrijft niet langer een pagina voor één zoekterm. Je bouwt aan de herkenbaarheid van je merk en je onderwerp als geheel. Dat voelt minder grijpbaar. Het is wel waar het spel tegenwoordig gespeeld wordt.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe herkent Google jouw bedrijf als entiteit?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Google bevestigt een entiteit pas als meerdere bronnen hetzelfde verhaal vertellen. Je website is daarbij het startpunt. Met schema markup van het type Organization vertel je expliciet wie je bent: naam, logo, adres en je profielen op andere platforms via het sameAs-attribuut. Hoe je dat technisch aanpakt, staat in onze uitleg over <Link to="/blogs/seo/schema-markup-instelt" className="text-accent hover:underline">schema markup instellen</Link>.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Daarna telt consistentie buiten je site. Je Google Bedrijfsprofiel, je LinkedIn-pagina, branchegidsen en vermeldingen in artikelen moeten allemaal dezelfde bedrijfsnaam en dezelfde kerngegevens tonen. Elke afwijking zaait twijfel. Heet je op de ene plek "Bakkerij Jansen" en op de andere "Jansen Brood BV", dan weet Google niet zeker of dat één bedrijf is. Zulke naamvariaties duiken op in vrijwel elke SEO-audit die we voor klanten draaien, en het rechttrekken ervan is vaak de snelste winst.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een Wikipedia-pagina helpt, maar is geen voorwaarde. Voor de meeste MKB-bedrijven is die ook niet haalbaar. Een volledig bedrijfsprofiel plus correcte markup plus consistente vermeldingen brengt je binnen je eigen markt al heel ver.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe versterk je jouw entiteit met content?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een entiteit wordt sterker naarmate Google er meer betrouwbare verbanden omheen ziet. Content is daarvoor je belangrijkste gereedschap. Schrijf je consistent over één vakgebied, dan koppelt Google jouw merk aan dat onderwerp. Zo groeit je bedrijf van "een website" naar "een autoriteit op dit thema". Waarom die themafocus zo zwaar weegt, lees je in ons stuk over <Link to="/blogs/seo/topical-authority-diepgang-beter-werkt" className="text-accent hover:underline">topical authority</Link>.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Noem entiteiten in je content ook bij hun naam. Schrijf niet "een bekende analysetool" maar "Google Analytics". Niet "een groot platform" maar "bol". Elke correcte verwijzing naar een bekende entiteit geeft Google context over waar jouw tekst over gaat en waar jouw merk bij hoort.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Vergeet je over-ons-pagina niet. Voor entity SEO is dat geen verplicht nummer maar een bronbestand. Wie zijn de mensen achter het bedrijf, wat is de geschiedenis, welke expertise zit er in het team? Precies de informatie die Google gebruikt om je entiteit te vullen en die meeweegt in <Link to="/blogs/seo/eeat-belangrijk-voor-seo" className="text-accent hover:underline">E-E-A-T</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat betekent entity SEO voor AI-zoekmachines?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            AI-modellen zoals ChatGPT en Perplexity bouwen net als Google een beeld op van merken. Ze leren uit teksten welke bedrijven bestaan, wat die doen en hoe betrouwbaar ze beschreven worden. Een merk dat overal consistent en herkenbaar voorkomt, is voor een taalmodel makkelijk te plaatsen. Een merk met versnipperde of tegenstrijdige informatie verdwijnt in de ruis.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Entity SEO is daarmee ook de basis onder GEO. Word je als entiteit herkend, dan kan een AI-model je noemen in antwoorden. Hoe je die vermeldingen actief opbouwt, lees je in ons artikel over <Link to="/blogs/geo/brand-mentions-geo-vermeld-worden" className="text-accent hover:underline">brand mentions voor GEO</Link>. Het werk dat je voor Google doet, betaalt zich dus dubbel uit.
                        </p>

                        <p className="text-primary/80 leading-relaxed mb-6">
                            Google denkt in entiteiten en hun relaties, niet in losse zoekwoorden. Zorg dus dat jouw bedrijf een heldere, consistente entiteit is: op je site, in je markup, in je bedrijfsprofiel en overal waar je merk genoemd wordt. Benieuwd hoe herkenbaar jouw merk nu is voor Google en AI-modellen? Bekijk onze <Link to="/seo" className="text-accent hover:underline">SEO-dienstenpagina</Link> of plan een gratis gesprek via <Link to="/contact" className="text-accent hover:underline">empowers.nl/contact</Link>.
                        </p>

                        <hr className="my-16 border-primary/10" />

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Veelgestelde vragen over entity SEO</h2>

                        <div className="space-y-6 not-prose">
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat is een entiteit in SEO?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Een entiteit is een uniek identificeerbaar ding of concept: een bedrijf, een persoon, een plaats of een product. Google slaat entiteiten op met hun eigenschappen en onderlinge relaties, los van de woorden die mensen ervoor gebruiken. Entity SEO zorgt dat Google jouw bedrijf als zo'n entiteit herkent.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat is het verschil tussen een keyword en een entiteit?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Een keyword is een reeks letters die iemand intypt. Een entiteit is het ding waar die letters naar verwijzen. Het keyword "jaguar" kan naar een automerk of een dier verwijzen. Google gebruikt de context van de zoekopdracht en de pagina om te bepalen welke entiteit bedoeld wordt.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoe kom je in de Google Knowledge Graph?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Er is geen aanmeldformulier. Google neemt entiteiten op die het via meerdere betrouwbare bronnen kan bevestigen: je website met schema markup, je Google Bedrijfsprofiel, vermeldingen op andere sites en voor grotere merken bronnen als Wikidata. Consistentie in naam en gegevens over al die bronnen heen is de basis.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Is schema markup verplicht voor entity SEO?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Verplicht is het niet, maar het is wel de meest directe manier om Google te vertellen wie je bent. Met Organization-markup en het sameAs-attribuut koppel je je website expliciet aan je andere profielen. Zonder schema markup moet Google dat verband zelf afleiden en dat gaat vaker mis.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Helpt entity SEO ook voor ChatGPT en Perplexity?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Ja. AI-modellen bouwen net als Google een beeld op van merken en hun eigenschappen. Een bedrijf dat overal consistent beschreven staat, is voor een taalmodel makkelijker te herkennen en te noemen in antwoorden. Entity SEO en GEO versterken elkaar daardoor.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Werkt entity SEO ook voor kleine bedrijven zonder Wikipedia-pagina?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Zeker. Een Wikipedia-pagina is geen voorwaarde. Voor lokale en kleinere bedrijven zijn een volledig Google Bedrijfsprofiel, correcte schema markup en consistente vermeldingen op relevante sites ruim voldoende om als entiteit herkend te worden binnen de eigen markt.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </article>

            {/* Bottom CTA */}
            <section className="w-full pb-32 px-6">
                <div className="max-w-4xl mx-auto bg-primary rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
                    <h2 className="relative z-10 font-drama italic text-background text-3xl sm:text-4xl md:text-5xl mb-6">Wil je dat Google jouw merk echt kent?</h2>
                    <p className="relative z-10 font-sans text-background/70 text-lg mb-10 max-w-xl mx-auto">
                        Wij maken van jouw bedrijf een herkenbare entiteit voor Google en AI-modellen. Met structuur en bewijs, niet met trucjes.
                    </p>
                    <Link to="/contact" className="relative z-10 btn-magnetic inline-flex items-center justify-center bg-accent text-background font-sans font-bold text-lg px-10 py-4 rounded-[2rem] hover:bg-accent/90 transition-colors">
                        Samenwerken met Empowers
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
