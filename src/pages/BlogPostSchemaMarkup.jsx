import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ChevronRight, User } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function BlogPostSchemaMarkup() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen selection:bg-accent/30 selection:text-dark flex flex-col bg-background">
            <Helmet>
                <title>Schema markup: wat het is en hoe je het instelt | Empowers</title>
                <meta name="description" content="Schema markup vertelt zoekmachines wat je content betekent. Lees hoe je schema kiest, instelt en test, en welke types het meeste impact hebben op jouw zichtbaarheid." />
                <link rel="canonical" href="https://www.empowers.nl/blogs/seo/schema-markup-instelt" />
                <meta property="og:title" content="Schema markup: wat het is en hoe je het instelt" />
                <meta property="og:description" content="Een praktische gids over schema markup: welke types werken, hoe je ze toevoegt en hoe je test of Google ze oppakt." />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://www.empowers.nl/blogs/seo/schema-markup-instelt" />
                <meta property="og:image" content="https://www.empowers.nl/images/blogs/schema-markup-instelt.jpg" />
                <meta property="article:published_time" content="2026-04-23" />
                <meta property="article:author" content="Empowers" />
                <meta property="article:section" content="SEO" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Schema markup: wat het is en hoe je het instelt" />
                <meta name="twitter:description" content="Praktische schema markup gids: types, implementatie en testen." />

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Article",
                        "headline": "Schema markup: wat het is en hoe je het instelt",
                        "description": "Schema markup vertelt zoekmachines wat je content betekent. Lees hoe je schema kiest, instelt en test, en welke types het meeste impact hebben op jouw zichtbaarheid.",
                        "image": "https://www.empowers.nl/images/blogs/schema-markup-instelt.jpg",
                        "datePublished": "2026-04-23T11:00:00+02:00",
                        "author": { "@type": "Organization", "name": "Empowers" },
                        "publisher": {
                            "@type": "Organization",
                            "name": "Empowers",
                            "url": "https://www.empowers.nl",
                            "logo": { "@type": "ImageObject", "url": "https://www.empowers.nl/empowers-logo-color.svg" }
                        },
                        "mainEntity": {
                            "@type": "FAQPage",
                            "mainEntity": [
                                {
                                    "@type": "Question",
                                    "name": "Wat is schema markup precies?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Schema markup is gestructureerde code die je aan een pagina toevoegt om zoekmachines uit te leggen wat je content betekent. Een prijs is dan letterlijk een prijs, een review is een review en een product is een product. Daardoor kan Google jouw content beter begrijpen en in rijke zoekresultaten tonen, zoals sterren, prijzen of FAQ-blokken."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Welke schema types zijn het belangrijkst?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Voor de meeste MKB-websites zijn Organization, LocalBusiness, Product, Article, FAQPage en BreadcrumbList de meest waardevolle. Webshops kiezen daarnaast voor Offer en AggregateRating. Lokale dienstverleners voegen vaak Service en OpeningHoursSpecification toe."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Verbetert schema markup mijn ranking direct?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Schema is geen directe rankingfactor, maar de gevolgen zijn merkbaar. Pagina's met schema krijgen vaker rich snippets en die snippets trekken meer kliks. Meer kliks bij gelijke positie betekent betere CTR, en betere CTR helpt indirect aan een hogere positie."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Hoe test ik of mijn schema werkt?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Gebruik de Schema Markup Validator van Schema.org en de Rich Results Test van Google. Plak je URL of de code, en je ziet meteen of de markup geldig is en welke rich result types in aanmerking komen. Houd daarnaast de Search Console in de gaten voor het tabblad 'Verbeteringen'."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Heb ik een ontwikkelaar nodig om schema toe te voegen?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Niet altijd. WordPress sites kunnen plug-ins als Rank Math of Yoast gebruiken die de basis automatisch regelen. Custom-built websites vragen wel om een ontwikkelaar of iemand die JSON-LD kan schrijven. Voor één enkele pagina kun je vaak zelf met een schema generator aan de slag."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Wat gebeurt er als mijn schema fouten bevat?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Bij kleine fouten negeert Google de markup en gebeurt er niets. Bij grotere fouten verschijnen waarschuwingen in Search Console. Bij zware overtredingen, zoals schema die niet matcht met wat de pagina toont, kan Google een handmatige actie geven. Hou de markup daarom altijd eerlijk en in lijn met de zichtbare content."
                                    }
                                }
                            ]
                        }
                    })}
                </script>

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "BreadcrumbList",
                        "itemListElement": [
                            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.empowers.nl" },
                            { "@type": "ListItem", "position": 2, "name": "Blogs", "item": "https://www.empowers.nl/blogs" },
                            { "@type": "ListItem", "position": 3, "name": "SEO", "item": "https://www.empowers.nl/blogs/seo" },
                            { "@type": "ListItem", "position": 4, "name": "Schema markup instellen", "item": "https://www.empowers.nl/blogs/seo/schema-markup-instelt" }
                        ]
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
                        <span className="text-primary truncate">Schema markup instellen</span>
                    </nav>

                    {/* Header */}
                    <header className="mb-16">
                        <div className="inline-block px-3 py-1 bg-accent/10 text-accent font-mono text-xs uppercase tracking-widest rounded-full mb-6">
                            SEO
                        </div>
                        <h1 className="font-sans font-bold text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight mb-8">
                            Schema markup: wat het is en hoe je het instelt
                        </h1>
                        <div className="flex flex-wrap items-center gap-6 text-sm font-sans text-primary/60 border-y border-primary/10 py-6">
                            <div className="flex items-center gap-2"><User className="w-4 h-4" /><span>Empowers Redactie</span></div>
                            <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>23 april 2026</span></div>
                            <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>9 minuten leestijd</span></div>
                        </div>
                    </header>

                    {/* Featured Image */}
                    <figure className="w-full h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden mb-16 relative bg-primary">
                        <div className="absolute inset-0 bg-[url('/images/blogs/schema-markup-instelt.jpg')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </figure>

                    {/* Content */}
                    <div className="prose prose-lg max-w-none prose-headings:text-primary prose-headings:font-bold prose-a:text-accent prose-a:underline hover:prose-a:text-accent/80">
                        <p className="text-xl leading-relaxed text-primary/80 font-medium mb-6">
                            Schema markup is de stille kracht achter rijke zoekresultaten. Het vertelt Google, Bing en steeds vaker AI-zoekmachines wat jouw content écht betekent: dit is een product, dit is een prijs, dit is een review. Pagina's met goed ingestelde schema krijgen vaker sterren, prijzen, FAQ-blokken en andere visuele extra's in de zoekresultaten. Meer aandacht, meer kliks en uiteindelijk meer omzet — zonder dat je hoger hoeft te ranken.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat is schema markup precies?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Schema markup is een vorm van gestructureerde data die je toevoegt aan de HTML van een pagina. Het volgt een internationale standaard die door Google, Microsoft, Yahoo en Yandex samen is opgezet via Schema.org. De code zelf zie je als bezoeker niet, maar zoekmachines lezen hem en gebruiken hem om jouw content beter te begrijpen.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Het verschil tussen een pagina met en zonder schema is groot. Zonder schema moet Google zelf raden waar de prijs staat, of dat ene cijfer een telefoonnummer of een postcode is. Met schema vertel je het letterlijk: dit getal van 79 euro is een prijs, deze 4,8 is een gemiddelde reviewscore, deze datum is een eventdatum. Hoe duidelijker jouw signalen, hoe meer kans dat Google ze toont in een rich snippet.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Welke vormen van schema bestaan er?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Schema markup kan in drie formaten op je site staan: JSON-LD, Microdata en RDFa. Google geeft de voorkeur aan JSON-LD en de meeste experts adviseren dat ook. Het belangrijkste voordeel: JSON-LD staat als losse codeblok in de head of body, gescheiden van de HTML van je pagina. Dat maakt het makkelijk te onderhouden en te debuggen.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Microdata en RDFa staan verweven in de HTML zelf, met extra attributen op bestaande tags. Dat werkt nog steeds, maar maakt je code complexer. Voor nieuwe implementaties kies je daarom standaard JSON-LD. Schema.org telt inmiddels honderden types en duizenden eigenschappen. De truc is niet om ze allemaal te gebruiken, maar om de juiste types te kiezen die bij jouw content passen.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Welke schema types zijn voor jou het belangrijkst?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Voor de meeste websites zijn een paar types echt belangrijk. Organization en LocalBusiness vertellen Google wie je bent en waar je gevestigd bent. WebSite met SearchAction voegt een interne zoekbalk toe in de zoekresultaten. BreadcrumbList laat de hiërarchie van je site zien. Article of BlogPosting helpt voor je content, FAQPage levert vaak gevouwen vraag-en-antwoordblokken op.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Webshops voegen Product, Offer, AggregateRating en Review toe. Dat is goud waard, want pagina's met sterren en prijzen vallen visueel veel sterker op dan kale tekstresultaten. Lokale dienstverleners halen veel uit Service, OpeningHoursSpecification en geo-coördinaten. Voor een uitgebreidere blik op de technische SEO-laag waarin schema thuishoort lees je onze <Link to="/blogs/seo/technische-seo-audit" className="text-accent hover:underline">complete technische SEO audit</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe stel je schema markup in?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De makkelijkste route hangt af van je platform. Op WordPress doen plug-ins als Rank Math, Yoast SEO en Schema Pro het basiswerk. Je vult per pagina velden in en de plug-in genereert de juiste JSON-LD. Voor Shopify, Magento en Lightspeed bestaan vergelijkbare apps. Op een custom platform werk je samen met je ontwikkelaar of webbouwer om de markup direct in de templates te zetten.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Voor incidentele pagina's kun je een schema generator gebruiken zoals Merkle's Schema Markup Generator. Vul de velden in, kopieer de gegenereerde JSON-LD en plak hem in de head van de pagina. Belangrijk: hou de markup altijd in lijn met wat zichtbaar op de pagina staat. Een prijs van 49 euro in de markup terwijl er 79 euro op de pagina staat is een directe overtreding van Google's richtlijnen.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe test je of je schema werkt?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Twee tools zijn essentieel. De Schema Markup Validator van Schema.org checkt of de syntax klopt en of alle vereiste eigenschappen ingevuld zijn. De Rich Results Test van Google laat zien voor welke rich snippets je in aanmerking komt. Plak je URL of de losse code en je ziet binnen seconden of het werkt. Beide tools zijn gratis.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Daarnaast is Google Search Console je permanente meetpunt. Onder het tabblad Verbeteringen verschijnen meldingen per schema type: hoeveel pagina's geldig zijn, waar fouten zitten en welke pagina's wel valid maar zonder rich result blijven. Check dit minstens maandelijks, vooral na grote site-updates. Een fout in een template kan in één klap honderden pagina's raken.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Helpt schema markup ook voor AI-zoekmachines?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Ja, en die rol wordt steeds groter. ChatGPT, Perplexity en Google AI Overviews gebruiken gestructureerde data om snel te begrijpen wat een pagina behandelt. Een goed gemarkeerd Article schema vertelt het model meteen wie de auteur is, wanneer het stuk gepubliceerd is en waar het over gaat. Dat versimpelt de selectie als bron en vergroot je kans op een citatie.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Ook voor lokale bedrijven werkt schema goed in AI-zoekmachines. LocalBusiness met openingstijden, telefoonnummer en adres zorgt ervoor dat AI-tools nauwkeurige antwoorden geven over jouw vestiging. Wie hier niet investeert, verliest terrein. Meer over hoe AI-zoekmachines bronnen kiezen lees je in onze blog over <Link to="/blogs/geo/ai-zoekmachines-bronnen" className="text-accent hover:underline">hoe AI-zoekmachines bronnen kiezen</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Veelgemaakte fouten en hoe je ze voorkomt</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De meest voorkomende fout is markup toevoegen voor content die niet zichtbaar op de pagina staat. Bijvoorbeeld een review schema zonder zichtbare reviews, of een FAQ schema waarvan de vragen alleen in de code staan. Google bestempelt dat als spam en kan je sanctioneren. Tweede valkuil: verouderde markup laten staan na contentwijzigingen. Een prijs die verandert of een product dat uit het assortiment gaat, moet ook in de schema worden bijgewerkt.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een derde valkuil is overdrijven. Niet elke pagina hoeft tien schema types te bevatten. Kies bewust welke types passen bij de paginatype en houd het overzichtelijk. Tot slot: vergeet de breadcrumbs niet. BreadcrumbList is simpel toe te voegen en levert vrijwel altijd een visueel breadcrumb-pad in de zoekresultaten op. Zo'n klein detail dat je CTR meetbaar verhoogt.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wanneer schakel je hulp in?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Voor een eenvoudige website met een handvol paginatypes kun je schema vaak zelf instellen via een plug-in of een generator. Heb je een webshop met duizenden producten, een internationale site of een complex serviceaanbod? Dan loont het om een SEO-specialist of bureau in te schakelen. Een goede implementatie kan de verschillen in CTR met dubbele cijfers laten stijgen, en de uren betalen zich snel terug.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Wil je weten welke schema types voor jouw site het meeste opleveren en hoe je ze foutloos uitrolt? We doen een schema-scan die laat zien waar je nu staat en welke quick wins er liggen. Plan een gesprek via onze <Link to="/contact" className="text-accent hover:underline">contactpagina</Link>.
                        </p>
                    </div>

                    {/* FAQ Section */}
                    <section className="mt-16 pt-12 border-t border-primary/10">
                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Veelgestelde vragen</h2>
                        <div className="space-y-6 not-prose">
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat is schema markup precies?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Schema markup is gestructureerde code die je aan een pagina toevoegt om zoekmachines uit te leggen wat je content betekent. Een prijs is dan letterlijk een prijs, een review is een review en een product is een product. Daardoor kan Google jouw content beter begrijpen en in rijke zoekresultaten tonen, zoals sterren, prijzen of FAQ-blokken.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Welke schema types zijn het belangrijkst?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Voor de meeste MKB-websites zijn Organization, LocalBusiness, Product, Article, FAQPage en BreadcrumbList de meest waardevolle. Webshops kiezen daarnaast voor Offer en AggregateRating. Lokale dienstverleners voegen vaak Service en OpeningHoursSpecification toe.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Verbetert schema markup mijn ranking direct?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Schema is geen directe rankingfactor, maar de gevolgen zijn merkbaar. Pagina's met schema krijgen vaker rich snippets en die snippets trekken meer kliks. Meer kliks bij gelijke positie betekent betere CTR, en betere CTR helpt indirect aan een hogere positie.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoe test ik of mijn schema werkt?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Gebruik de Schema Markup Validator van Schema.org en de Rich Results Test van Google. Plak je URL of de code, en je ziet meteen of de markup geldig is en welke rich result types in aanmerking komen. Houd daarnaast de Search Console in de gaten voor het tabblad 'Verbeteringen'.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Heb ik een ontwikkelaar nodig om schema toe te voegen?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Niet altijd. WordPress sites kunnen plug-ins als Rank Math of Yoast gebruiken die de basis automatisch regelen. Custom-built websites vragen wel om een ontwikkelaar of iemand die JSON-LD kan schrijven. Voor één enkele pagina kun je vaak zelf met een schema generator aan de slag.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat gebeurt er als mijn schema fouten bevat?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Bij kleine fouten negeert Google de markup en gebeurt er niets. Bij grotere fouten verschijnen waarschuwingen in Search Console. Bij zware overtredingen, zoals schema die niet matcht met wat de pagina toont, kan Google een handmatige actie geven. Hou de markup daarom altijd eerlijk en in lijn met de zichtbare content.</p>
                            </div>
                        </div>
                    </section>

                    {/* Related Links */}
                    <section className="mt-16 pt-12 border-t border-primary/10">
                        <h3 className="text-xl font-bold text-primary mb-6">Lees ook</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <Link to="/blogs/seo/technische-seo-audit" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Technische SEO audit 2026</h3>
                                <p className="text-primary/60 text-sm">Complete checklist voor de technische laag waarin schema thuishoort.</p>
                            </Link>
                            <Link to="/blogs/seo/core-web-vitals-verbeteren-scoort" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Core Web Vitals verbeteren</h3>
                                <p className="text-primary/60 text-sm">Hoe sneller laden direct doorwerkt op je SEO-resultaat.</p>
                            </Link>
                            <Link to="/blogs/geo/ai-zoekmachines-bronnen" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">AI-zoekmachines en bronnen</h3>
                                <p className="text-primary/60 text-sm">Welke signalen AI gebruikt om bronnen te kiezen en hoe schema daarbij helpt.</p>
                            </Link>
                        </div>
                    </section>
                </div>
            </article>

            {/* Bottom CTA */}
            <section className="w-full pb-32 px-6">
                <div className="max-w-4xl mx-auto bg-primary rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
                    <h2 className="relative z-10 font-drama italic text-background text-3xl sm:text-4xl md:text-5xl mb-6">Schema markup goed ingericht?</h2>
                    <p className="relative z-10 font-sans text-background/70 text-lg mb-10 max-w-xl mx-auto">We scannen jouw site, identificeren de schema quick wins en zetten ze foutloos live voor extra zichtbaarheid in Google en AI-zoekmachines.</p>
                    <Link to="/contact" className="relative z-10 btn-magnetic inline-flex items-center justify-center bg-accent text-background font-sans font-bold text-lg px-10 py-4 rounded-[2rem] hover:bg-accent/90 transition-colors">Neem contact op</Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
