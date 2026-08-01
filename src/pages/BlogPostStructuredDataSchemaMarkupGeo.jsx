import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ChevronRight, User } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function BlogPostStructuredDataSchemaMarkupGeo() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen selection:bg-accent/30 selection:text-dark flex flex-col bg-background">
            <Helmet>
                <title>Structured data voor GEO: schema markup gids | Empowers</title>
                <meta name="description" content="Structured data helpt AI-zoekmachines jouw pagina's te begrijpen en te citeren. Lees welke schema markup werkt voor GEO en hoe je die toevoegt." />
                <link rel="canonical" href="https://www.empowers.nl/blogs/geo/structured-data-schema-markup-geo" />
                <meta property="og:title" content="Structured data voor GEO: schema markup gids | Empowers" />
                <meta property="og:description" content="Structured data helpt AI-zoekmachines jouw pagina's te begrijpen en te citeren. Lees welke schema markup werkt voor GEO en hoe je die toevoegt." />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://www.empowers.nl/blogs/geo/structured-data-schema-markup-geo" />
                <meta property="og:image" content="https://www.empowers.nl/images/blogs/structured-data-schema-markup-geo.jpg" />
                <meta property="article:published_time" content="2026-07-20T12:00:00+02:00" />
                <meta property="article:author" content="Empowers" />
                <meta property="article:section" content="GEO" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Structured data voor GEO: schema markup gids | Empowers" />
                <meta name="twitter:description" content="Structured data helpt AI-zoekmachines jouw pagina's te begrijpen en te citeren. Lees welke schema markup werkt voor GEO en hoe je die toevoegt." />
                <script type="application/ld+json">{JSON.stringify({
                    "@context": "https://schema.org",
                    "@graph": [
                        {
                            "@type": "Article",
                            "headline": "Structured data voor GEO: schema markup die AI begrijpt",
                            "image": "https://www.empowers.nl/images/blogs/structured-data-schema-markup-geo.jpg",
                            "description": "Structured data helpt AI-zoekmachines jouw pagina's te begrijpen en te citeren. Lees welke schema markup werkt voor GEO en hoe je die toevoegt.",
                            "author": { "@type": "Organization", "name": "Empowers" },
                            "publisher": { "@type": "Organization", "name": "Empowers", "url": "https://www.empowers.nl" },
                            "datePublished": "2026-07-20T12:00:00+02:00",
                            "dateModified": "2026-07-20T12:00:00+02:00",
                            "url": "https://www.empowers.nl/blogs/geo/structured-data-schema-markup-geo"
                        },
                        {
                            "@type": "BreadcrumbList",
                            "itemListElement": [
                                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.empowers.nl" },
                                { "@type": "ListItem", "position": 2, "name": "Nieuws", "item": "https://www.empowers.nl/nieuws" },
                                { "@type": "ListItem", "position": 3, "name": "GEO", "item": "https://www.empowers.nl/blogs/geo" },
                                { "@type": "ListItem", "position": 4, "name": "Structured data voor GEO: schema markup die AI begrijpt", "item": "https://www.empowers.nl/blogs/geo/structured-data-schema-markup-geo" }
                            ]
                        },
                        {
                            "@type": "FAQPage",
                            "mainEntity": [
                                { "@type": "Question", "name": "Wat is structured data?", "acceptedAnswer": { "@type": "Answer", "text": "Structured data is extra code op je website die machines vertelt wat er op een pagina staat: dit is een artikel, dit is de auteur, dit is een veelgestelde vraag met dit antwoord. De meest gebruikte standaard is schema.org, meestal toegevoegd in JSON-LD formaat." } },
                                { "@type": "Question", "name": "Is structured data verplicht voor GEO?", "acceptedAnswer": { "@type": "Answer", "text": "Verplicht is het niet, maar het verlaagt de drempel voor machines om je content goed te begrijpen. Een pagina zonder schema kan prima geciteerd worden, alleen laat je dan een kans liggen om context mee te geven die AI-systemen direct kunnen verwerken." } },
                                { "@type": "Question", "name": "Welk schema type is het belangrijkst voor een MKB-website?", "acceptedAnswer": { "@type": "Answer", "text": "Begin met Organization of LocalBusiness voor je bedrijfsgegevens, Article voor je blogs en FAQPage voor je veelgestelde vragen. Die drie samen dekken voor de meeste MKB-websites het grootste deel van de winst af." } },
                                { "@type": "Question", "name": "Heb ik een developer nodig om schema toe te voegen?", "acceptedAnswer": { "@type": "Answer", "text": "Niet altijd. Veel CMS-systemen en SEO-plugins genereren basis-schema automatisch. Voor maatwerk, zoals een FAQPage die exact matcht met je content, is een developer of specialist wel handig. Fouten in schema kunnen namelijk meer kwaad dan goed doen." } },
                                { "@type": "Question", "name": "Hoe controleer ik of mijn schema klopt?", "acceptedAnswer": { "@type": "Answer", "text": "Plak je URL in de Rich Results Test van Google of in de validator op schema.org. Beide tools tonen welke structured data ze vinden en welke fouten erin zitten. Check dit na elke grote wijziging aan je website." } },
                                { "@type": "Question", "name": "Lezen AI-modellen zoals ChatGPT schema markup echt?", "acceptedAnswer": { "@type": "Answer", "text": "AI-zoekmachines halen hun informatie op via crawlers en zoekindexen die structured data meenemen. Hoe zwaar elk systeem schema precies weegt, maken de platformen niet openbaar. Wat je wel ziet: pagina's met heldere structuur en schema worden in de praktijk beter begrepen en vaker correct weergegeven." } }
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
                        <Link to="/blogs/geo" className="hover:text-accent transition-colors">GEO</Link>
                        <ChevronRight className="w-3 h-3" />
                        <span className="text-primary truncate">Structured data voor GEO</span>
                    </nav>

                    {/* Header */}
                    <header className="mb-16">
                        <div className="inline-block px-3 py-1 bg-accent/10 text-accent font-mono text-xs uppercase tracking-widest rounded-full mb-6">
                            GEO
                        </div>
                        <h1 className="font-sans font-bold text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight mb-8">
                            Structured data voor GEO: schema markup die AI begrijpt
                        </h1>

                        <div className="flex flex-wrap items-center gap-6 text-sm font-sans text-primary/60 border-y border-primary/10 py-6">
                            <div className="flex items-center gap-2">
                                <User className="w-4 h-4" />
                                <span>Empowers Redactie</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>20 juli 2026</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>7 minuten leestijd</span>
                            </div>
                        </div>
                    </header>

                    {/* Featured Image */}
                    <figure className="w-full h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden mb-16 relative bg-primary">
                        <div className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-overlay" style={{backgroundImage: "url('/images/blogs/structured-data-schema-markup-geo.jpg')"}}></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </figure>

                    {/* Content */}
                    <div className="prose prose-lg prose-headings:font-sans prose-headings:font-bold prose-headings:text-primary prose-p:font-sans prose-p:text-primary/80 prose-p:leading-relaxed max-w-none">
                        <p className="text-xl md:text-2xl font-medium leading-relaxed mb-10 text-primary">
                            Structured data is code die machines vertelt wat er op je pagina staat. Voor GEO is het een van de weinige knoppen waar je direct aan kunt draaien: met schema markup geef je AI-zoekmachines je content aan in een taal die ze zonder gokwerk begrijpen. Dat vergroot de kans dat ze je correct citeren.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat is structured data precies?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een mens ziet in één oogopslag dat een pagina een blogartikel is met een auteur en een publicatiedatum. Een machine ziet alleen tekst. Structured data lost dat op: het is een blokje code, onzichtbaar voor bezoekers, dat expliciet benoemt wat wat is.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De standaard hiervoor heet schema.org, een gezamenlijk woordenboek dat door de grote zoekmachines wordt onderhouden. De meest gebruikte vorm om het toe te voegen is JSON-LD: een script-blokje in de code van je pagina.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Waarom helpt schema markup bij GEO?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            AI-zoekmachines bouwen hun antwoorden op bronnen die ze goed kunnen interpreteren. Hoe minder een systeem hoeft te raden over de betekenis van je pagina, hoe kleiner de kans op fouten en hoe aantrekkelijker je wordt als bron.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Schema geeft ook context die verder gaat dan de tekst zelf. Dat een artikel geschreven is door een bedrijf met een adres in Nederland, wanneer het gepubliceerd is en bij welke organisatie het hoort: die informatie helpt een AI-model om jou te koppelen aan de juiste vragen. Zeker bij lokale zoekvragen maakt dat verschil.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Eerlijk is eerlijk: schema alleen gaat je geen citaties opleveren. Het versterkt goede content, het repareert geen zwakke. Welke content het meest oplevert, lees je in ons artikel over <Link to="/blogs/geo/contentonderdelen-zorgen-meer-ai-citaties" className="text-accent hover:underline">contentonderdelen die zorgen voor meer AI-citaties</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Welke schema types heb je nodig?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Voor de meeste MKB-websites begint het bij je bedrijfsgegevens. Met Organization of LocalBusiness leg je vast wie je bent, waar je zit en hoe je bereikbaar bent. Dit is de basis waar al je andere schema aan ophangt.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Voor blogs en nieuwsberichten gebruik je Article, met een kop, een auteur en een publicatiedatum. Voor pagina's met veelgestelde vragen is er FAQPage. Die laatste is voor GEO extra interessant, omdat vraag-antwoordparen precies de vorm hebben waarin AI-assistenten hun antwoorden gieten. Hoe je die vragen schrijft, behandelen we in ons artikel over <Link to="/blogs/geo/faq-content-schrijven-ai-geciteerd" className="text-accent hover:underline">FAQ content die door AI geciteerd wordt</Link>.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Verkoop je producten, dan voeg je Product-schema toe met prijzen en beoordelingen. Werk je met stappenplannen, dan bestaat er HowTo. En BreadcrumbList laat zien waar een pagina in je websitestructuur hoort. Begin klein: liever drie types die kloppen dan acht met fouten.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe voeg je structured data toe?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De makkelijkste route loopt via je CMS. WordPress-plugins zoals Yoast SEO en Rank Math genereren automatisch basis-schema voor artikelen en bedrijfsgegevens. Voor veel websites is dat een prima vertrekpunt dat je zonder technische kennis aanzet.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Wil je meer, zoals een FAQPage die exact matcht met de vragen op je pagina, dan schrijf je het JSON-LD blok zelf of laat je het bouwen. Belangrijkste regel daarbij: het schema moet beschrijven wat er zichtbaar op de pagina staat. Schema met content die bezoekers nergens kunnen lezen, valt bij zoekmachines door de mand.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Welke fouten zie je het vaakst?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De klassieker: schema dat niet meebeweegt met de pagina. De FAQ op de pagina wordt aangepast, het schema blijft oud. Voor een machine spreekt je website zichzelf dan tegen en dat kost vertrouwen.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Ook veelvoorkomend: dubbele of tegenstrijdige blokken, omdat een plugin én een handmatig script allebei schema toevoegen. Kies één bron per pagina. En vergeet verplichte velden niet. Een Article zonder datum of een LocalBusiness zonder adres doet minder dan de moeite waard is.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe controleer je of het werkt?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Test elke belangrijke pagina in de Rich Results Test van Google of de validator op schema.org. Beide tonen direct welke structured data gevonden wordt en waar fouten zitten. Bij ons eigen werk voor klanten is dit een vast onderdeel van elke oplevering, juist omdat een kleine typefout een heel blok onbruikbaar maakt.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Kijk daarna maandelijks in Google Search Console. Onder verbeteringen zie je welke schema-types Google op je website herkent en of er fouten bijgekomen zijn na updates.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Benieuwd of jouw website technisch klaar is voor AI-zoekmachines? Bekijk onze aanpak op de <Link to="/geo" className="text-accent hover:underline">GEO dienstenpagina</Link> of plan een gratis gesprek via <Link to="/contact" className="text-accent hover:underline">empowers.nl/contact</Link>.
                        </p>

                        <hr className="my-16 border-primary/10" />

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Veelgestelde vragen over structured data en GEO</h2>

                        <div className="space-y-6 not-prose">
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat is structured data?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Structured data is extra code op je website die machines vertelt wat er op een pagina staat: dit is een artikel, dit is de auteur, dit is een veelgestelde vraag met dit antwoord. De meest gebruikte standaard is schema.org, meestal toegevoegd in JSON-LD formaat.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Is structured data verplicht voor GEO?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Verplicht is het niet, maar het verlaagt de drempel voor machines om je content goed te begrijpen. Een pagina zonder schema kan prima geciteerd worden, alleen laat je dan een kans liggen om context mee te geven die AI-systemen direct kunnen verwerken.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Welk schema type is het belangrijkst voor een MKB-website?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Begin met Organization of LocalBusiness voor je bedrijfsgegevens, Article voor je blogs en FAQPage voor je veelgestelde vragen. Die drie samen dekken voor de meeste MKB-websites het grootste deel van de winst af.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Heb ik een developer nodig om schema toe te voegen?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Niet altijd. Veel CMS-systemen en SEO-plugins genereren basis-schema automatisch. Voor maatwerk, zoals een FAQPage die exact matcht met je content, is een developer of specialist wel handig. Fouten in schema kunnen namelijk meer kwaad dan goed doen.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoe controleer ik of mijn schema klopt?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Plak je URL in de Rich Results Test van Google of in de validator op schema.org. Beide tools tonen welke structured data ze vinden en welke fouten erin zitten. Check dit na elke grote wijziging aan je website.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Lezen AI-modellen zoals ChatGPT schema markup echt?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    AI-zoekmachines halen hun informatie op via crawlers en zoekindexen die structured data meenemen. Hoe zwaar elk systeem schema precies weegt, maken de platformen niet openbaar. Wat je wel ziet: pagina's met heldere structuur en schema worden in de praktijk beter begrepen en vaker correct weergegeven.
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
                    <h2 className="relative z-10 font-drama italic text-background text-3xl sm:text-4xl md:text-5xl mb-6">Een website die AI begrijpt?</h2>
                    <p className="relative z-10 font-sans text-background/70 text-lg mb-10 max-w-xl mx-auto">
                        Wij richten de techniek achter je website zo in dat AI-zoekmachines jouw content vinden en citeren.
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
