import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ChevronRight, User } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function BlogPostGoogleAdsDienstenbedrijven() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen selection:bg-accent/30 selection:text-dark flex flex-col bg-background">
            <Helmet>
                <title>Google Ads voor dienstenbedrijven: dit werkt anders dan voor producten | Empowers</title>
                <meta name="description" content="Google Ads voor dienstenbedrijven vraagt een andere aanpak dan voor webshops. Lees hoe je campagnes opzet die leads opleveren in plaats van directe verkopen." />
                <link rel="canonical" href="https://www.empowers.nl/blogs/google-ads/google-ads-dienstenbedrijven-werkt-anders" />
                <meta property="og:title" content="Google Ads voor dienstenbedrijven: dit werkt anders dan voor producten" />
                <meta property="og:description" content="Google Ads voor dienstverleners vraagt een andere aanpak. Lees hoe je campagnes opzet die leads opleveren." />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://www.empowers.nl/blogs/google-ads/google-ads-dienstenbedrijven-werkt-anders" />
                <meta property="og:image" content="https://www.empowers.nl/images/blogs/google-ads-dienstenbedrijven-werkt-anders.jpg" />
                <meta property="article:published_time" content="2026-04-16" />
                <meta property="article:author" content="Empowers" />
                <meta property="article:section" content="Google Ads" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Google Ads voor dienstenbedrijven: dit werkt anders dan voor producten" />
                <meta name="twitter:description" content="Waarom Google Ads voor dienstverleners een andere strategie vraagt en hoe je het goed aanpakt." />

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Article",
                        "headline": "Google Ads voor dienstenbedrijven: dit werkt anders dan voor producten",
                        "description": "Google Ads voor dienstenbedrijven vraagt een andere aanpak dan voor webshops. Lees hoe je campagnes opzet die leads opleveren in plaats van directe verkopen.",
                        "image": "https://www.empowers.nl/images/blogs/google-ads-dienstenbedrijven-werkt-anders.jpg",
                        "datePublished": "2026-04-16T11:00:00+02:00",
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
                                    "name": "Werkt Google Ads voor dienstenbedrijven?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Ja, Google Ads werkt goed voor dienstenbedrijven. De aanpak verschilt van e-commerce: in plaats van directe verkopen richt je je op leadgeneratie. Denk aan offerteaanvragen, telefoongesprekken en contactformulieren. Met de juiste zoekwoorden en landingspagina's levert Google Ads een constante stroom gekwalificeerde leads."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Welke campagnetypes werken het best voor dienstverleners?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Search-campagnes zijn het meest effectief voor dienstenbedrijven omdat je mensen bereikt op het moment dat ze actief zoeken naar jouw type dienst. Daarnaast werken call-only campagnes goed voor bedrijven waar telefonisch contact de eerste stap is. Performance Max kan waardevol zijn als aanvulling, maar alleen met voldoende conversiedata."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Hoeveel kost Google Ads voor een dienstenbedrijf?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "De kosten variëren sterk per branche. Juridische diensten betalen gemiddeld 5 tot 15 euro per klik, terwijl schoonmaakdiensten tussen de 1 en 4 euro liggen. Het maandbudget hangt af van je markt en concurrentie, maar de meeste dienstenbedrijven starten effectief met 500 tot 1500 euro per maand."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Hoe meet je succes bij Google Ads voor diensten?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Meet niet alleen klikken, maar vooral leads: formulierinzendingen, telefoongesprekken en offerteaanvragen. De belangrijkste KPI is je kosten per lead (CPL). Koppel dat aan je sluitingspercentage en gemiddelde klantwaarde om je werkelijke return on ad spend te berekenen."
                                    }
                                }
                            ]
                        },
                        "breadcrumb": {
                            "@type": "BreadcrumbList",
                            "itemListElement": [
                                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.empowers.nl" },
                                { "@type": "ListItem", "position": 2, "name": "Google Ads", "item": "https://www.empowers.nl/blogs/google-ads" },
                                { "@type": "ListItem", "position": 3, "name": "Google Ads voor dienstenbedrijven" }
                            ]
                        }
                    })}
                </script>
            </Helmet>

            <Navbar />

            <article className="w-full pt-40 pb-24 px-6 relative">
                <div className="max-w-4xl mx-auto">

                    {/* Breadcrumbs */}
                    <nav className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-primary/50 mb-12">
                        <Link to="/" className="hover:text-accent transition-colors">Home</Link>
                        <ChevronRight size={12} />
                        <Link to="/blogs/google-ads" className="hover:text-accent transition-colors">Google Ads</Link>
                        <ChevronRight size={12} />
                        <span className="text-primary/30">Dienstenbedrijven</span>
                    </nav>

                    {/* Header */}
                    <header className="mb-16">
                        <div className="inline-block px-3 py-1 bg-accent/10 text-accent font-mono text-xs uppercase tracking-widest rounded-full mb-6">
                            Google Ads
                        </div>
                        <h1 className="font-sans font-bold text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight mb-8">
                            Google Ads voor dienstenbedrijven: dit werkt anders dan voor producten
                        </h1>
                        <div className="flex flex-wrap items-center gap-6 text-sm font-sans text-primary/60 border-y border-primary/10 py-6">
                            <span className="flex items-center gap-2"><User size={14} />Empowers Redactie</span>
                            <span className="flex items-center gap-2"><Calendar size={14} />16 apr 2026</span>
                            <span className="flex items-center gap-2"><Clock size={14} />10 min leestijd</span>
                        </div>
                    </header>

                    {/* Featured Image */}
                    <figure className="w-full h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden mb-16 relative bg-primary">
                        <div className="absolute inset-0 bg-[url('/images/blogs/google-ads-dienstenbedrijven-werkt-anders.jpg')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </figure>

                    {/* Content */}
                    <div className="prose prose-lg max-w-none">

                        <p className="text-xl leading-relaxed text-primary/80 font-medium mb-6">
                            Jij verkoopt geen schoenen en geen telefoonhoesjes. Jij verkoopt een dienst. Advies, installatie, onderhoud, coaching, ontwerp — iets wat je niet in een winkelmandje stopt. En dat betekent dat Google Ads voor jouw bedrijf fundamenteel anders werkt dan voor een webshop. Dezelfde instellingen kopiëren levert niet dezelfde resultaten op. In dit artikel lees je wat wél werkt.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Waarom de standaard Google Ads aanpak niet past bij diensten</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De meeste Google Ads handleidingen zijn geschreven voor e-commerce. Logisch, want webshops zijn de grootste adverteerders. Maar als dienstenbedrijf loop je tegen drie fundamentele verschillen aan.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Ten eerste: jouw klant koopt niet direct. Een bezoeker die zoekt naar "loodgieter Amsterdam" belt misschien drie bedrijven voordat hij kiest. Een bezoeker die zoekt naar "Nike Air Max kopen" klikt en bestelt. Die langere beslisweg betekent dat je conversiepad anders is. Je meet geen aankopen, maar leads.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Ten tweede: de waarde per klant is vaak hoger en moeilijker te berekenen. Een klant van een advocatenkantoor is duizenden euro's waard. Een klant van een schoonmaakbedrijf komt maandelijks terug. Die langetermijnwaarde maakt hogere klikprijzen acceptabel, maar alleen als je het goed meet.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Ten derde: vertrouwen speelt een grotere rol. Iemand die een dienst afneemt geeft persoonlijke of zakelijke informatie uit handen. Die persoon wil zekerheid. Jouw advertentie én landingspagina moeten dat vertrouwen opbouwen, niet alleen een prijs noemen.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">De juiste campagnestructuur voor dienstverleners</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Start met Search-campagnes. Die zijn voor dienstenbedrijven het meest waardevol omdat je mensen bereikt op het exacte moment dat ze jouw dienst zoeken. Iemand die typt "boekhouder MKB Rotterdam" heeft nu een probleem en zoekt nu een oplossing. Dat is de sterkste koopintentie die je kunt vinden.
                        </p>

                        <h3 className="font-semibold text-primary text-xl mt-10 mb-4">Verdeel campagnes op diensttype</h3>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Maak aparte campagnes voor elke dienst die je aanbiedt. Een adviesbureau dat zowel HR-advies als financieel advies levert, maakt twee campagnes. De zoekwoorden, advertentieteksten en landingspagina's zijn voor elke dienst anders. Meng je alles in één campagne, dan verlies je relevantie en betaal je meer per klik.
                        </p>

                        <h3 className="font-semibold text-primary text-xl mt-10 mb-4">Gebruik call-only campagnes waar dat past</h3>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Voor diensten waar het eerste contact telefonisch is — denk aan noodgevallen, reparatiediensten of medische praktijken — werken call-only campagnes uitstekend. De gebruiker ziet je advertentie en belt direct, zonder tussenstap. Je betaalt per gesprek in plaats van per klik naar je website. De conversieratio is vaak hoger omdat de drempel lager is.
                        </p>

                        <h3 className="font-semibold text-primary text-xl mt-10 mb-4">Wees voorzichtig met Performance Max</h3>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Performance Max is krachtig voor webshops met duizenden producten en veel conversiedata. Voor dienstenbedrijven met minder conversies per maand is het risicovol. Het algoritme heeft minimaal 30 conversies per maand nodig om goed te leren. Haal je dat niet, dan is een gerichte Search-campagne effectiever. Meer over Performance Max lees je in <Link to="/blogs/google-ads/performance-max-google-ads-weten" className="text-accent hover:underline">ons artikel over PMax</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Zoekwoorden kiezen: intentie boven volume</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Bij dienstenbedrijven draait zoekwoordkeuze om intentie, niet om volume. "Wat doet een boekhouder" is informatief — die persoon oriënteert zich. "Boekhouder MKB Haarlem" is transactioneel — die persoon is klaar om te kiezen. Focus je budget op dat tweede type.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Gebruik zoekwoorden die een actie impliceren: "offerte", "inhuren", "kosten", "in de buurt", "specialist". Die woorden signaleren dat iemand niet alleen informatie zoekt, maar een oplossing. Combineer ze met je diensttype en locatie voor maximale relevantie.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Long-tail zoekwoorden zijn voor dienstverleners extra waardevol. "Google Ads bureau MKB Noord-Holland" heeft minder zoekvolume dan "Google Ads bureau", maar de persoon die het intypt past beter bij jouw aanbod. De klikprijs is lager en de conversiekans hoger. Meer hierover lees je in <Link to="/blogs/google-ads/long-tail-keywords-google-ads" className="text-accent hover:underline">ons artikel over long-tail keywords</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Negatieve zoekwoorden zijn je beste vriend</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Bij diensten is het minstens zo belangrijk om te bepalen voor wie je niet wilt verschijnen. Zoekwoorden als "gratis", "vacature", "stage", "opleiding" en "zelf doen" trekken mensen aan die geen klant worden. Zonder negatieve zoekwoorden verspil je 20 tot 40% van je budget aan irrelevante klikken.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Bouw vanaf dag één een negatieve zoekwoordenlijst op en breid die wekelijks uit op basis van je zoektermenrapport. Dat rapport laat precies zien welke zoekopdrachten jouw advertenties hebben getriggerd. Je vindt er altijd verrassingen in. Een gedetailleerde handleiding vind je in <Link to="/blogs/google-ads/negatieve-zoekwoorden-google-ads" className="text-accent hover:underline">ons artikel over negatieve zoekwoorden</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Advertentieteksten die vertrouwen wekken</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een webshop schrijft: "Bestel vandaag, morgen in huis." Dat werkt niet voor diensten. Jouw advertentie moet drie dingen communiceren: wat je doet, voor wie, en waarom jij de juiste keuze bent.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Noem specifieke resultaten waar mogelijk. "Gemiddeld 30% meer leads in 3 maanden" is sterker dan "Wij leveren resultaat." Vermeld sociale bewijslast: "200+ tevreden klanten" of "Google Partner gecertificeerd." Sluit af met een duidelijke actie: "Vraag een gratis analyse aan" of "Bel direct met een specialist."
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Gebruik alle beschikbare extensies. Sitelinks naar specifieke dienstpagina's, een belextensie voor direct contact, locatie-extensies als je lokaal werkt, en structured snippets met de diensten die je aanbiedt. Extensies vergroten je advertentie en geven meer redenen om te klikken.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Landingspagina's voor diensten: anders dan productpagina's</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Stuur bezoekers niet naar je homepage. Stuur ze naar een landingspagina die precies aansluit op wat ze zochten. Wie zoekt naar "SEO bureau Amsterdam" wil een pagina zien over jouw SEO-diensten in Amsterdam, niet je algemene homepage met al je diensten.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De landingspagina voor een dienst heeft andere elementen nodig dan een productpagina. Geen winkelmandje, maar een contactformulier. Geen productspecificaties, maar een uitleg van je werkwijze. Geen prijslijst (meestal), maar een indicatie van wat de klant kan verwachten.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Vertrouwenselementen zijn op dienstenpagina's belangrijker dan waar ook. Klantervaringen, logo's van bedrijven waarmee je werkt, certificeringen, een foto van je team — alles wat bewijst dat je betrouwbaar bent. Meer over landingspagina's lees je in <Link to="/blogs/strategie/landingspagina-schrijven-converteert" className="text-accent hover:underline">ons artikel over landingspagina's die converteren</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Conversies meten: leads in plaats van verkopen</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Het grootste verschil in meetbaarheid: bij een webshop is een conversie een bestelling met een euro-bedrag. Bij een dienst is een conversie een lead — een formulierinzending, een telefoongesprek of een e-mail. Die lead is pas later geld waard, als je de klant binnenhaalt.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Zorg dat je alle contactmomenten meet. Stel conversietracking in voor formulieren, telefoongesprekken (via Google's call tracking of een tool als CallRail) en eventueel chat. Zonder die data kan Google niet leren welke klikken waardevolle leads opleveren.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Ga een stap verder en koppel leadwaarde terug. Als je weet dat 1 op de 5 leads klant wordt en een gemiddelde klant 2000 euro waard is, dan is elke lead 400 euro waard. Voer dat in als conversiewaarde. Dan kan Smart Bidding optimaliseren op werkelijke waarde in plaats van alleen aantallen. Meer over ROI meten lees je in <Link to="/blogs/google-ads/meet-roi-google-ads-campagne" className="text-accent hover:underline">ons artikel over Google Ads ROI</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Budget en biedstrategie voor dienstverleners</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Dienstenbedrijven hebben vaak minder conversies dan webshops. Dat beperkt je opties voor automatisch bieden. Begin met Handmatige CPC of Maximaliseer klikken totdat je minimaal 15 tot 30 conversies per maand hebt. Stap daarna over op Maximaliseer conversies of Doel-CPA.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Wat betreft budget: start niet te klein. Met 10 euro per dag in een competitieve markt krijg je te weinig data om conclusies te trekken. Reken op minimaal 500 euro per maand voor lokale diensten en 1000 tot 2000 euro voor landelijke of B2B-diensten. Dat klinkt als veel, maar als één klant 5000 euro waard is, heb je maar twee leads per maand nodig om positief te draaien.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Lokale targeting: bereik klanten in jouw regio</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De meeste dienstenbedrijven werken regionaal. Een schilder in Utrecht hoeft niet te adverteren in Groningen. Stel je locatietargeting nauwkeurig in op de regio's waar je actief bent. Gebruik een straal rondom je bedrijfslocatie of selecteer specifieke steden en provincies.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Let op de instelling "Aanwezigheid of interesse." Standaard toont Google je advertenties ook aan mensen die interesse tonen in je regio maar er niet zijn. Kies voor "Aanwezigheid: mensen in of regelmatig in je doellocaties" om je budget te beschermen. Dit voorkomt dat je betaalt voor klikken van mensen die fysiek te ver weg zijn om klant te worden. Meer hierover lees je in <Link to="/blogs/google-ads/google-ads-lokale-bedrijven" className="text-accent hover:underline">ons artikel over Google Ads voor lokale bedrijven</Link>.
                        </p>

                    </div>

                    {/* FAQ */}
                    <section className="mt-16 pt-12 border-t border-primary/10">
                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Veelgestelde vragen over Google Ads voor dienstenbedrijven</h2>
                        <div className="space-y-6 not-prose">
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Werkt Google Ads voor dienstenbedrijven?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Ja, Google Ads werkt goed voor dienstenbedrijven. De aanpak verschilt van e-commerce: in plaats van directe verkopen richt je je op leadgeneratie. Met de juiste zoekwoorden en landingspagina's levert Google Ads een constante stroom gekwalificeerde leads op.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Welke campagnetypes werken het best voor dienstverleners?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Search-campagnes zijn het meest effectief omdat je mensen bereikt op het moment dat ze actief zoeken. Call-only campagnes werken goed waar telefonisch contact de eerste stap is. Performance Max kan waardevol zijn als aanvulling, maar alleen met voldoende conversiedata.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoeveel kost Google Ads voor een dienstenbedrijf?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">De kosten variëren per branche. Juridische diensten betalen 5 tot 15 euro per klik, schoonmaakdiensten 1 tot 4 euro. De meeste dienstenbedrijven starten effectief met 500 tot 1500 euro per maand aan advertentiebudget.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoe meet je succes bij Google Ads voor diensten?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Meet leads: formulierinzendingen, telefoongesprekken en offerteaanvragen. De belangrijkste KPI is je kosten per lead. Koppel dat aan je sluitingspercentage en gemiddelde klantwaarde om je werkelijke return on ad spend te berekenen.</p>
                            </div>
                        </div>
                    </section>

                    {/* Related */}
                    <section className="mt-16 pt-12 border-t border-primary/10">
                        <h3 className="text-xl font-bold text-primary mb-6">Lees ook</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <Link to="/blogs/google-ads/google-ads-lokale-bedrijven" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Google Ads voor lokale bedrijven</h3>
                                <p className="text-primary/60 text-sm">Zo trek je klanten uit jouw regio met gerichte lokale campagnes.</p>
                            </Link>
                            <Link to="/blogs/google-ads/long-tail-keywords-google-ads" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Long-tail keywords</h3>
                                <p className="text-primary/60 text-sm">Waarom long-tail zoekwoorden goedkopere klikken en hogere conversies opleveren.</p>
                            </Link>
                            <Link to="/blogs/strategie/landingspagina-schrijven-converteert" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Landingspagina die converteert</h3>
                                <p className="text-primary/60 text-sm">Zo schrijf je een landingspagina die bezoekers omzet in klanten.</p>
                            </Link>
                        </div>
                    </section>

                </div>
            </article>

            {/* CTA */}
            <section className="w-full pb-32 px-6">
                <div className="max-w-4xl mx-auto bg-primary rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
                    <h2 className="relative z-10 font-drama italic text-background text-3xl sm:text-4xl md:text-5xl mb-6">
                        Wil je leads die passen bij jouw dienst?
                    </h2>
                    <p className="relative z-10 font-sans text-background/70 text-lg mb-10 max-w-xl mx-auto">
                        Wij bouwen Google Ads campagnes die zijn afgestemd op dienstverleners. Geen standaard aanpak, maar een strategie die past bij jouw klanttraject.
                    </p>
                    <Link
                        to="/contact"
                        className="relative z-10 btn-magnetic inline-flex items-center justify-center bg-accent text-background font-sans font-bold text-lg px-10 py-4 rounded-[2rem] hover:bg-accent/90 transition-colors"
                    >
                        Neem contact op
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
