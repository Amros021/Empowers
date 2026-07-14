import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ChevronRight, User } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function BlogPostGoogleShopping() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen selection:bg-accent/30 selection:text-dark flex flex-col bg-background">
            <Helmet>
                <title>Google Shopping adverteren: zo zet je een campagne op | Empowers</title>
                <meta name="description" content="Google Shopping adverteren brengt jouw producten direct bovenaan de zoekresultaten. Lees hoe je een Shopping-campagne opzet, je producttitels optimaliseert en je ROAS verhoogt." />
                <link rel="canonical" href="https://www.empowers.nl/blogs/google-ads/google-shopping-adverteren-campagne" />
                <meta property="og:title" content="Google Shopping adverteren: zo zet je een campagne op" />
                <meta property="og:description" content="Leer hoe je een Google Shopping-campagne opzet, je feed optimaliseert en je ROAS structureel verhoogt." />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://www.empowers.nl/blogs/google-ads/google-shopping-adverteren-campagne" />
                <meta property="og:image" content="https://www.empowers.nl/images/blogs/google-shopping-adverteren.jpg" />
                <meta property="article:published_time" content="2026-04-15T10:00:00+02:00" />
                <meta property="article:author" content="Empowers" />
                <meta property="article:section" content="Google Ads" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Google Shopping adverteren: zo zet je een campagne op" />
                <meta name="twitter:description" content="Zo zet je een Google Shopping-campagne op en verhoog je je ROAS." />

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Article",
                        "headline": "Google Shopping adverteren: zo zet je een campagne op",
                        "description": "Google Shopping adverteren brengt jouw producten direct bovenaan de zoekresultaten. Lees hoe je een Shopping-campagne opzet, je producttitels optimaliseert en je ROAS verhoogt.",
                        "image": "https://www.empowers.nl/images/blogs/google-shopping-adverteren.jpg",
                        "datePublished": "2026-04-15T10:00:00+02:00",
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
                                    "name": "Wat heb je nodig om te beginnen met Google Shopping?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Je hebt een Google Merchant Center-account nodig met een goedgekeurde productfeed, een Google Ads-account en een website met HTTPS. Koppel het Merchant Center aan Google Ads en je kunt een Shopping-campagne aanmaken."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Wat is het verschil tussen Standard Shopping en Performance Max?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Standard Shopping geeft je meer controle: je beheert biedingen per productgroep en ziet precies welke zoektermen leiden tot klikken. Performance Max combineert Shopping met andere plaatsingen (YouTube, Display, Gmail) en laat Google alles automatiseren. Voor starters is Standard Shopping overzichtelijker."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Hoe optimaliseer ik mijn producttitels voor Google Shopping?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Zet het belangrijkste zoekwoord vooraan in de producttitel. Voeg merk, model, maat en kleur toe waar relevant. Vermijd marketingtaal als 'super' of 'geweldig'. Gebruik de exacte bewoording die jouw klanten intypen bij Google. Een goede titel heeft 70 tot 100 tekens."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Welke ROAS is realistisch bij Google Shopping?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "De gemiddelde ROAS bij Google Shopping ligt tussen de 3 en 8, maar verschilt sterk per branche en marge. E-commerce met hoge marges haalt makkelijker een ROAS van 5 of hoger. Bij lage marges is een ROAS van 3 al winstgevend. Bereken altijd vanuit je eigen marges, niet vanuit benchmarks."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Hoe voorkom ik dat Shopping-campagnes je budget verspillen?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Voeg negatieve zoekwoorden toe om irrelevante zoekopdrachten te blokkeren. Bekijk maandelijks de zoektermenrapportage. Segmenteer producten op basis van marge, zodat je meer budget geeft aan winstgevende producten. Sluit producten met lage marge of hoge CPC uit van campagnes."
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
                            { "@type": "ListItem", "position": 3, "name": "Google Ads", "item": "https://www.empowers.nl/blogs/google-ads" },
                            { "@type": "ListItem", "position": 4, "name": "Google Shopping adverteren", "item": "https://www.empowers.nl/blogs/google-ads/google-shopping-adverteren-campagne" }
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
                        <Link to="/blogs/google-ads" className="hover:text-accent transition-colors">Google Ads</Link>
                        <ChevronRight className="w-3 h-3" />
                        <span className="text-primary truncate">Google Shopping adverteren</span>
                    </nav>

                    {/* Header */}
                    <header className="mb-16">
                        <div className="inline-block px-3 py-1 bg-accent/10 text-accent font-mono text-xs uppercase tracking-widest rounded-full mb-6">
                            Google Ads
                        </div>
                        <h1 className="font-sans font-bold text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight mb-8">
                            Google Shopping adverteren: zo zet je een campagne op
                        </h1>
                        <div className="flex flex-wrap items-center gap-6 text-sm font-sans text-primary/60 border-y border-primary/10 py-6">
                            <div className="flex items-center gap-2"><User className="w-4 h-4" /><span>Empowers Redactie</span></div>
                            <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>15 april 2026</span></div>
                            <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>9 minuten leestijd</span></div>
                        </div>
                    </header>

                    {/* Featured Image */}
                    <figure className="w-full h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden mb-16 relative bg-primary">
                        <div className="absolute inset-0 bg-[url('/images/blogs/google-shopping-adverteren.jpg')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </figure>

                    {/* Content */}
                    <div className="prose prose-lg max-w-none prose-headings:text-primary prose-headings:font-bold prose-a:text-accent prose-a:underline hover:prose-a:text-accent/80">
                        <p className="text-xl leading-relaxed text-primary/80 font-medium mb-6">
                            Google Shopping advertenties verschijnen bovenaan de zoekresultaten met een productfoto, prijs en jouw winkelname. Voor webshops zijn ze een van de meest rendabele advertentiekanalen. Maar een Shopping-campagne opzetten is niet zo eenvoudig als een knop indrukken. Je feedkwaliteit, campagnestructuur en biedstrategie bepalen samen of jij winstgevend adverteert of geld verbrandt.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe Google Shopping werkt</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Bij Google Shopping koop je geen zoekwoorden. In plaats daarvan upload je een productfeed naar Google Merchant Center: een gestructureerd bestand met al jouw producten, inclusief titel, beschrijving, prijs, afbeelding en productcategorie. Google matcht jouw producten vervolgens automatisch met relevante zoekopdrachten.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Dat klinkt simpel, maar de kwaliteit van je feed is de belangrijkste succesfactor. Een slechte producttitel leidt tot slechte matches en hoge CPC. Een goede feed, met de juiste trefwoorden in de juiste velden, zorgt dat jouw producten verschijnen bij de meest waardevolle zoekopdrachten. Feed-optimalisatie is dan ook de hoogste ROI-activiteit in Google Shopping.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Stap 1: Google Merchant Center instellen</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Voordat je een campagne kunt aanmaken, heb je een goedgekeurd Google Merchant Center-account nodig. Maak een account aan op merchants.google.com en verifieer je website. Dat kan via een HTML-tag in je paginacode, via Google Tag Manager of via een DNS-record.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Na verificatie upload je je productfeed. De meeste e-commerce platformen (WooCommerce, Shopify, Magento) hebben plugins die de feed automatisch aanmaken en synchroniseren. Controleer na upload de diagnostics-sectie in Merchant Center op fouten en waarschuwingen. Producten met fouten worden niet geadverteerd.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Stap 2: producttitels optimaliseren</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De producttitel is het meest invloedrijke feedattribuut voor Shopping. Google gebruikt hem om te bepalen bij welke zoekopdrachten jouw product verschijnt. De gouden regel: zet het belangrijkste zoekwoord vooraan. Google toont de eerste 70 tekens in de advertentie; de rest is minder zichtbaar maar wel indexeerbaar.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een goede structuur voor producttitels: Merk + Producttype + Kenmerken (kleur, maat, materiaal, model). Dus niet "Geweldige sneaker aanbieding" maar "Nike Air Max 90 Heren Sneakers Wit Maat 43". Concrete, beschrijvende titels zonder marketingkreten presteren altijd beter. Controleer ook of jouw concurrenten in Shopping dezelfde titels gebruiken en differenteer waar je kunt.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Stap 3: campagnestructuur bepalen</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Er zijn twee campagnetypen: Standard Shopping en Performance Max. Standard Shopping geeft je volledige controle over biedingen per productgroep en inzicht in de zoektermenrapportage. Performance Max combineert Shopping met alle andere Google-kanalen en laat het algoritme de verdeling bepalen.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Voor starters raden we Standard Shopping aan. Je ziet precies welke zoekwoorden klikken genereren, welke producten presteren en wat de CPC per categorie is. Die data is essentieel voor het finetunen van je feed en biedstrategie. Heb je eenmaal genoeg conversiedata, dan kun je overstappen naar Performance Max en het algoritme zware optimalisatiework laten doen. Meer over Performance Max lees je in onze <Link to="/blogs/google-ads/performance-max-google-ads-weten" className="text-accent hover:underline">blog over Performance Max</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Stap 4: biedstrategie kiezen</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            In de opstartfase begin je met handmatige CPC-biedingen of Maximize Clicks. Dat geeft je data zonder dat het algoritme al te snel budget verschuift. Zodra je 30 tot 50 conversies per maand haalt, schakel je over naar Target ROAS.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Stel je ROAS-target in op basis van je eigen marge, niet op basis van benchmarks. Als jouw marge 40 procent is, dan heb je minimaal een ROAS van 2,5 nodig om break-even te draaien. Stel je ROAS-target dan op 3 of hoger voor een winstgevende campagne. Wees realistisch: een te hoog ROAS-target zorgt dat het algoritme te weinig biedingen plaatst en je volume verliest.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Stap 5: negatieve zoekwoorden toevoegen</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            In Google Shopping heb je geen directe zoewoordcontrole, maar je kunt wél negatieve zoekwoorden toevoegen. Bekijk de zoektermenrapportage maandelijks en sluit irrelevante termen uit. "Gratis", concurrentnamen als je geen prijsvergelijking wilt, en zeer algemene termen die niet converteren zijn de usual suspects.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Maak een gedeelde negatieve zoekwoordenlijst op accountniveau die je aan alle Shopping-campagnes koppelt. Zo hoef je slechts op één plek bij te houden en profiteer je van je leerervaring over alle campagnes heen. Lees meer over negatieve zoekwoorden in onze <Link to="/blogs/google-ads/negatieve-zoekwoorden-google-ads" className="text-accent hover:underline">blog over negatieve zoekwoorden</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Productsegmentatie: meer budget naar winstgevende producten</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Niet alle producten leveren dezelfde marge op. Een slim Shopping-account segmenteert producten op marge of categorie en stelt per segment een eigen ROAS-target in. Producten met hoge marge krijgen een lagere ROAS-target (je kunt meer uitgeven per euro omzet). Producten met lage marge krijgen een hogere ROAS-target.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Dit is een geavanceerde stap die pas zinvol is als je al data hebt per productcategorie. Begin simpel, verzamel data en segmenteer dan op basis van wat je ziet. Een Shopping-account dat goed gesegmenteerd is, presteert structureel beter dan een account waarbij alle producten in één campagne zitten met één biedstrategie.
                        </p>

                        <p className="text-primary/80 leading-relaxed mb-6">
                            Heb je een webshop en wil je weten of jouw Shopping-campagnes het maximale uit je budget halen? We doen een gratis analyse en laten zien waar de winst ligt. Plan een gesprek via onze <Link to="/contact" className="text-accent hover:underline">contactpagina</Link>.
                        </p>
                    </div>

                    {/* FAQ Section */}
                    <section className="mt-16 pt-12 border-t border-primary/10">
                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Veelgestelde vragen</h2>
                        <div className="space-y-6 not-prose">
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat heb je nodig om te beginnen met Google Shopping?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Je hebt een Google Merchant Center-account nodig met een goedgekeurde productfeed, een Google Ads-account en een HTTPS-website. Koppel Merchant Center aan Google Ads en maak een Shopping-campagne aan.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat is het verschil tussen Standard Shopping en Performance Max?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Standard Shopping geeft meer controle: je beheert biedingen per productgroep en ziet de zoektermenrapportage. Performance Max combineert Shopping met andere plaatsingen en laat Google alles automatiseren. Voor starters is Standard Shopping overzichtelijker.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoe optimaliseer ik mijn producttitels voor Google Shopping?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Zet het belangrijkste zoekwoord vooraan. Voeg merk, model, maat en kleur toe waar relevant. Vermijd marketingtaal. Gebruik de exacte bewoording die klanten intypen. Een goede titel heeft 70 tot 100 tekens.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Welke ROAS is realistisch bij Google Shopping?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">De gemiddelde ROAS ligt tussen de 3 en 8, afhankelijk van branche en marge. Bereken altijd vanuit je eigen marges: als je marge 40 procent is, heb je minimaal een ROAS van 2,5 nodig voor break-even.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoe voorkom ik dat Shopping-campagnes geld verspillen?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Voeg negatieve zoekwoorden toe, bekijk maandelijks de zoektermenrapportage en segmenteer producten op basis van marge. Sluit producten met lage marge of hoge CPC uit van campagnes.</p>
                            </div>
                        </div>
                    </section>

                    {/* Related Links */}
                    <section className="mt-16 pt-12 border-t border-primary/10">
                        <h3 className="text-xl font-bold text-primary mb-6">Lees ook</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <Link to="/blogs/google-ads/performance-max-google-ads-weten" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Performance Max uitgelegd</h3>
                                <p className="text-primary/60 text-sm">Alles wat je moet weten over het meest geautomatiseerde campagnetype.</p>
                            </Link>
                            <Link to="/blogs/google-ads/smart-bidding-uitgelegd-wanneer-wanneer" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Smart Bidding uitgelegd</h3>
                                <p className="text-primary/60 text-sm">Welke biedstrategie werkt in welke situatie?</p>
                            </Link>
                            <Link to="/blogs/google-ads/negatieve-zoekwoorden-google-ads" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Negatieve zoekwoorden</h3>
                                <p className="text-primary/60 text-sm">Zo stop je budgetverspilling met de juiste uitsluitingen.</p>
                            </Link>
                        </div>
                    </section>
                </div>
            </article>

            {/* Bottom CTA */}
            <section className="w-full pb-32 px-6">
                <div className="max-w-4xl mx-auto bg-primary rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
                    <h2 className="relative z-10 font-drama italic text-background text-3xl sm:text-4xl md:text-5xl mb-6">Meer omzet uit jouw webshop</h2>
                    <p className="relative z-10 font-sans text-background/70 text-lg mb-10 max-w-xl mx-auto">We analyseren jouw Shopping-feed en campagnes en laten zien wat er direct beter kan. Vrijblijvend adviesgesprek.</p>
                    <Link to="/contact" className="relative z-10 btn-magnetic inline-flex items-center justify-center bg-accent text-background font-sans font-bold text-lg px-10 py-4 rounded-[2rem] hover:bg-accent/90 transition-colors">Neem contact op</Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
