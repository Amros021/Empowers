import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ChevronRight, User } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function BlogPostSeaCpcBenchmarksPerBranche() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen selection:bg-accent/30 selection:text-dark flex flex-col bg-background">
            <Helmet>
                <title>Wat kost SEA per klik in 2026? CPC benchmarks per branche in Nederland | Empowers</title>
                <meta name="description" content="Concrete CPC-data per branche in Nederland 2026: e-commerce, B2B, dienstverlening en lokaal. Lees hoe je jouw budget berekent en waarom een bureau dit efficiënter doet." />
                <link rel="canonical" href="https://www.empowers.nl/blogs/google-ads/sea-cpc-benchmarks-per-branche-nederland" />
                <meta property="og:title" content="Wat kost SEA per klik in 2026? CPC benchmarks per branche in Nederland" />
                <meta property="og:description" content="CPC-benchmarks per branche, budgetformules en waarom een bureau jouw klikkosten vaak verlaagt." />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://www.empowers.nl/blogs/google-ads/sea-cpc-benchmarks-per-branche-nederland" />
                <meta property="og:image" content="https://www.empowers.nl/images/blogs/sea-cpc-benchmarks-per-branche-nederland.jpg" />
                <meta property="article:published_time" content="2026-05-03" />
                <meta property="article:author" content="Empowers" />
                <meta property="article:section" content="Google Ads" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Wat kost SEA per klik in 2026? CPC benchmarks per branche in Nederland" />
                <meta name="twitter:description" content="CPC-benchmarks per branche, budgetformules en waarom een bureau jouw klikkosten verlaagt." />

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Article",
                        "headline": "Wat kost SEA per klik in 2026? CPC benchmarks per branche in Nederland",
                        "description": "Concrete CPC-data per branche in Nederland 2026: e-commerce, B2B, dienstverlening en lokaal. Lees hoe je jouw budget berekent en waarom een bureau dit efficiënter doet.",
                        "image": "https://www.empowers.nl/images/blogs/sea-cpc-benchmarks-per-branche-nederland.jpg",
                        "datePublished": "2026-05-03T13:00:00+02:00",
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
                                    "name": "Wat is een gemiddelde CPC in Nederland in 2026?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "De gemiddelde CPC in Nederland ligt in 2026 tussen 0,80 en 2,50 euro voor zoekcampagnes. E-commerce zit gemiddeld op 0,60 tot 1,80 euro, dienstverlening op 1,50 tot 4 euro en B2B op 3 tot 12 euro voor competitieve termen. Lokale zoekopdrachten zitten meestal onder 1 euro."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Waarom verschillen CPC's zo per branche?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "CPC's worden bepaald door biedingsstrijd. Hoe meer concurrenten op hetzelfde zoekwoord bieden, hoe hoger de prijs. Branches met hoge klantwaarde en lange salescycli zoals juridisch advies, financieel advies en B2B SaaS hebben de hoogste CPC's omdat 1 klant veel waard is en concurrenten bereid zijn flink te bieden."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Hoe bereken je een realistisch SEA budget?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Vermenigvuldig jouw gemiddelde CPC met de gewenste klikken per maand. Reken vervolgens met een conversieratio tussen 2 en 8 procent om uit te rekenen hoeveel leads of bestellingen je krijgt. Voor een eerlijke test reken je op minimaal 30 conversies per maand zodat het algoritme genoeg signalen krijgt."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Verlaagt een SEA bureau jouw CPC?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Een goed bureau verlaagt jouw effectieve CPC vaak met 15 tot 30 procent door betere kwaliteitsscores, slimmere zoekwoordstructuur en gerichtere advertenties. Niet je nominale klikprijs, maar je kosten per geconverteerde klik. Slecht bureau-werk verhoogt CPC juist door luie campagnestructuur."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Wat is een goede kwaliteitsscore in Google Ads?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Een kwaliteitsscore tussen 7 en 10 op een schaal van 10 is goed en levert lagere CPC's op. Onder de 5 betaal je premium voor zwakke advertenties. Kwaliteitsscore wordt bepaald door verwachte CTR, advertentie-relevantie en landingspagina-ervaring. Verbeteringen aan landingspagina's leveren vaak het snelst CPC-verlaging op."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Welke CPC moet je verwachten voor B2B in Nederland?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Voor B2B-zoekwoorden in Nederland reken je op 3 tot 12 euro per klik, afhankelijk van branche en concurrentie. SaaS, juridische diensten en financieel advies zitten aan de bovenkant. Specialistische B2B-diensten zoals technisch advies of niche-software zitten meer op 4 tot 8 euro."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Hoeveel budget heb je minimaal nodig om SEA te testen?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Voor e-commerce reken je op minimaal 1.000 euro mediabudget per maand om binnen 60 dagen iets te leren. Voor dienstverlening op 1.500 euro per maand. Voor competitieve B2B op minimaal 2.500 euro per maand. Daaronder krijg je niet genoeg klikken voor betrouwbare conclusies over wat werkt."
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
                            { "@type": "ListItem", "position": 4, "name": "CPC benchmarks Nederland 2026", "item": "https://www.empowers.nl/blogs/google-ads/sea-cpc-benchmarks-per-branche-nederland" }
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
                        <Link to="/blogs/google-ads" className="hover:text-accent transition-colors">Google Ads</Link>
                        <ChevronRight className="w-3 h-3" />
                        <span className="text-primary truncate">CPC benchmarks 2026</span>
                    </nav>

                    <header className="mb-16">
                        <div className="inline-block px-3 py-1 bg-accent/10 text-accent font-mono text-xs uppercase tracking-widest rounded-full mb-6">
                            Google Ads
                        </div>
                        <h1 className="font-sans font-bold text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight mb-8">
                            Wat kost SEA per klik in 2026? CPC benchmarks per branche in Nederland
                        </h1>
                        <div className="flex flex-wrap items-center gap-6 text-sm font-sans text-primary/60 border-y border-primary/10 py-6">
                            <div className="flex items-center gap-2"><User className="w-4 h-4" /><span>Empowers Redactie</span></div>
                            <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>3 mei 2026</span></div>
                            <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>10 minuten leestijd</span></div>
                        </div>
                    </header>

                    <figure className="w-full h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden mb-16 relative bg-primary">
                        <div className="absolute inset-0 bg-[url('/images/blogs/sea-cpc-benchmarks-per-branche-nederland.jpg')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </figure>

                    <div className="prose prose-lg max-w-none prose-headings:text-primary prose-headings:font-bold prose-a:text-accent prose-a:underline hover:prose-a:text-accent/80">
                        <p className="text-xl leading-relaxed text-primary/80 font-medium mb-6">
                            Wat kost een klik op een Google-advertentie in Nederland? Het korte antwoord: tussen 0,60 en 12 euro, afhankelijk van branche, zoekwoord en kwaliteitsscore. In dit artikel lees je concrete CPC-benchmarks voor e-commerce, dienstverlening, B2B en lokaal. Je leest ook hoe je een realistisch SEA-budget berekent en waarom een goed bureau jouw effectieve klikkosten verlaagt zonder dat je meer betaalt.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat is CPC eigenlijk?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            CPC staat voor Cost Per Click, oftewel kosten per klik. Bij elke klik op jouw Google-advertentie betaal je een bedrag dat bepaald wordt via een veiling. Concurrenten bieden op hetzelfde zoekwoord, Google weegt biedingen tegen kwaliteitsscores en bepaalt wie bovenaan staat en wat die persoon betaalt.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Belangrijk: jouw bod is niet altijd wat je betaalt. Google rekent vaak iets minder dan jouw maximumbod. Een hoge kwaliteitsscore op jouw advertentie en landingspagina kan jouw effectieve CPC tot 30 procent verlagen ten opzichte van een concurrent met dezelfde maximumbod. Voor de manier waarop kwaliteitsscores werken, lees onze blog over <Link to="/blogs/google-ads/google-ads-quality-score-verhogen" className="text-accent hover:underline">Quality Score verhogen</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Gemiddelde CPC in Nederland 2026</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Op platformniveau ligt de gemiddelde CPC voor zoekcampagnes in Nederland in 2026 tussen 0,80 en 2,50 euro. Dat is een breed gemiddelde over alle branches heen. Het zegt weinig over wat jij gaat betalen. Voor een betrouwbaar plan kijk je naar jouw eigen branche.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            CPC's zijn de afgelopen 3 jaar gestegen door meer concurrentie, maar ook door betere automatisering binnen Google Ads. Bidstrategieën zoals tROAS en tCPA zorgen dat algoritmes steeds slimmer bieden, wat goedkope klikken voor wie alleen handmatig biedt langzaam onbereikbaar maakt.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">CPC benchmarks e-commerce</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            E-commerce kent doorgaans lagere CPC's dan dienstverlening. Reken in 2026 op 0,60 tot 1,80 euro voor reguliere productzoekwoorden. Mode en accessoires zitten gemiddeld rond de 0,80 euro, elektronica rond 1,20 euro, sportartikelen rond 0,90 euro en wonen rond 1,30 euro.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Voor competitieve productcategorieën zoals smartphones, gaming-laptops en hoogwaardige horloges lopen CPC's op tot 3 of 4 euro per klik. Branded zoekopdrachten op merkproducten kunnen onder 0,40 euro blijven, mits jij de officiële wederverkoper bent. Voor de basis van Google Shopping en wat dat kost, lees onze blog over <Link to="/blogs/google-ads/google-shopping-adverteren-campagne" className="text-accent hover:underline">Google Shopping</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">CPC benchmarks dienstverlening</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Dienstverleners betalen meer per klik dan webshops omdat 1 klant doorgaans meer waard is. CPC's tussen 1,50 en 4 euro zijn normaal. Een loodgieter zit rond 2 tot 3 euro voor reguliere termen, een advocaat tussen 4 en 12 euro voor specifieke rechtsgebieden, een accountant rond 3 tot 6 euro afhankelijk van regio en specialisatie.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Spoed-zoekopdrachten met "spoed", "vandaag" of "noodgeval" liggen 50 tot 100 procent hoger dan reguliere zoekopdrachten. Dat is logisch: de koopintentie en betalingsbereidheid is dan hoger. Voor dienstverleners loont het om branded zoekopdrachten dicht te houden en concurrentie-zoekopdrachten alleen selectief in te zetten.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">CPC benchmarks B2B</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            B2B-zoekwoorden in Nederland zijn duur. Reken op 3 tot 12 euro per klik. SaaS-zoekwoorden zoals "CRM software" of "boekhoudsoftware MKB" zitten gemiddeld rond 6 tot 10 euro. Specialistische B2B-diensten zoals technisch advies of niche-software zitten op 4 tot 8 euro. Vergelijkings-zoekopdrachten zoals "beste CRM 2026" zijn nog duurder, vaak boven de 10 euro.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            B2B kun je vaak niet winnen op kosten alleen. De winst zit in conversie-optimalisatie. Een betere landingspagina, een lichter Lead Gen-aanbod en een sterker remarketing-systeem brengen jouw kosten per gekwalificeerde lead omlaag, terwijl jouw CPC stabiel blijft. Lees voor de bredere context onze blog over <Link to="/blogs/google-ads/google-ads-b2b-bereik-zakelijke" className="text-accent hover:underline">Google Ads voor B2B</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">CPC benchmarks lokaal</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Lokale zoekopdrachten zijn vaak het goedkoopst. Een kapper, een bakkerij of een lokale autogarage betaalt meestal tussen 0,40 en 1,20 euro per klik. Dat komt omdat concurrentie geografisch is afgegrensd: alleen aanbieders in dezelfde plaats bieden mee.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Lokaal werkt het beste op zoekopdrachten met plaatsnaam: "tandarts Utrecht" of "pizzeria Tilburg". CPC's blijven daar bijna altijd onder 1 euro, mits jouw locatie-extensies en advertenties overeenkomen met de zoekopdracht. Onze blog over <Link to="/blogs/google-ads/google-ads-lokale-bedrijven" className="text-accent hover:underline">Google Ads voor lokale bedrijven</Link> behandelt de opzet.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe bereken je jouw budget?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Het simpelste model heeft 3 stappen. Eén: bepaal het aantal conversies dat je wilt halen, bijvoorbeeld 30 leads of 200 bestellingen per maand. Twee: schat jouw conversieratio in op basis van branche-benchmarks (2 procent voor B2B, 3 procent voor dienstverlening, 4 procent voor e-commerce). Drie: bereken hoeveel klikken nodig zijn en vermenigvuldig met jouw CPC.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een rekenvoorbeeld voor B2B-leads: 30 leads gewenst, 2 procent conversieratio betekent 1.500 klikken nodig. Bij een CPC van 7 euro is dat een budget van 10.500 euro per maand. Voor e-commerce omgekeerd: 200 bestellingen, 4 procent conversieratio betekent 5.000 klikken. Bij CPC van 1,20 euro is dat 6.000 euro per maand.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Verwacht in maand 1 nog niet die conversieratio. Het algoritme heeft een leerfase nodig en jouw advertenties moeten worden uitgetest. Reken voor een eerlijke conclusie op minimaal 60 tot 90 dagen looptijd. Onze blog over <Link to="/blogs/strategie/goede-conversieratio-benchmarks-per-branche" className="text-accent hover:underline">conversieratio-benchmarks per branche</Link> geeft realistische verwachtingen.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Waarom verlaagt een bureau jouw kosten?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een goed SEA-bureau verlaagt jouw effectieve CPC met 15 tot 30 procent zonder dat je meer hoeft te bieden. Drie hefbomen werken het hardst. Eén: kwaliteitsscore-verhoging via betere advertenties en landingspagina's, wat direct CPC verlaagt. Twee: zoekwoord-strategie waardoor je niet bemiddelde brede termen vermijdt en concentraties op zoekwoorden met hogere conversiekans. Drie: negatieve zoekwoorden uitbreiden zodat je niet betaalt voor klikken die nooit converteren.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Daarnaast benut een bureau geavanceerde biedstrategieën zoals tROAS, tCPA en Performance Max die voor zelfdoeners vaak te complex zijn. Die strategieën leiden over 90 dagen tot lagere kosten per geconverteerde klant, zelfs als de nominale CPC iets hoger ligt. Lees onze blog over <Link to="/blogs/google-ads/verlaag-cpc-google-ads-minder" className="text-accent hover:underline">CPC verlagen</Link> voor concrete acties.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een bureau is geen wondermiddel. Een slecht bureau kan jouw kosten ook verhogen door luie campagnestructuur. Voor de evaluatie van een bureau, lees onze blog over <Link to="/blogs/google-ads/sea-bureau-vergelijken-resultaten-rapportages" className="text-accent hover:underline">SEA bureau vergelijken</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wanneer is een minimumbudget niet genoeg?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Voor e-commerce reken je op minimaal 1.000 euro mediabudget per maand om binnen 60 dagen iets te leren. Voor dienstverlening op 1.500 euro. Voor competitieve B2B op minimaal 2.500 euro. Daaronder krijg je niet genoeg klikken voor betrouwbare conclusies. Een budget van 300 euro per maand op een markt met 8 euro CPC levert 37 klikken. Daarmee kun je niet eens 1 conversie meten.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Wie te klein begint, leert de verkeerde lessen. Een campagne stopt zodra het algoritme uit de leerfase zou komen. Voor reëel inzicht in wat SEA jou oplevert, reken je op minimaal 90 dagen draaitijd op een budget dat past bij jouw branche-CPC.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe verschilt CPC tussen device en uren?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Mobiele klikken zijn doorgaans 10 tot 30 procent goedkoper dan desktopklikken. De conversieratio op mobiel is wel lager, dus de kosten per geconverteerde klik kunnen alsnog hoger uitvallen. Met device-bidding kun je daar bijsturen.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Daluren tussen 22:00 en 06:00 hebben lagere CPC's, maar bedien je vooral mensen met lage koopintentie. Spitsuren tussen 09:00 en 17:00 op werkdagen zijn duurder maar leveren betere conversies voor B2B. Voor e-commerce zijn weekenden vaak het sterkst.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat moet je niet doen om CPC te verlagen?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Te ver zakken met biedingen levert geen lage CPC, maar geen impressies. Je advertenties verschijnen niet meer en je leert niets. Brede match zoekwoorden uitschakelen om kosten te besparen, kost je vaak juist conversies omdat het algoritme niet meer kan leren wat werkt.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Negatieve zoekwoorden zonder strategie toevoegen, blokkeert vaak ook converterende termen. Werk altijd met een lijst die elke 30 dagen wordt herzien op basis van zoektermen-rapport. De goedkope route is zelden de slimme route.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe pak je het slim aan?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Begin met een budgetcheck op basis van branche-CPC en gewenst conversievolume. Test 60 tot 90 dagen op het werkelijke minimumbudget voor jouw branche, niet op een fantasie-bedrag dat te laag is om te leren. Stuur niet op CPC, maar op kosten per geconverteerde klant. Lage CPC's zonder conversies zijn waardeloos. Hoge CPC's met sterke conversies zijn winstgevend.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Wil je weten welk budget realistisch is voor jouw aanbod en welke CPC je kunt verwachten? Plan een gratis gesprek via onze <Link to="/contact" className="text-accent hover:underline">contactpagina</Link>. We rekenen vrijblijvend uit wat jouw aanbod zou kosten op basis van actuele biedlandschappen.
                        </p>
                    </div>

                    <section className="mt-16 pt-12 border-t border-primary/10">
                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Veelgestelde vragen</h2>
                        <div className="space-y-6 not-prose">
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat is een gemiddelde CPC in Nederland in 2026?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Gemiddelde CPC ligt tussen 0,80 en 2,50 euro voor zoekcampagnes. E-commerce 0,60 tot 1,80 euro, dienstverlening 1,50 tot 4 euro, B2B 3 tot 12 euro voor competitieve termen. Lokaal meestal onder 1 euro.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Waarom verschillen CPC's zo per branche?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">CPC's worden bepaald door biedingsstrijd. Branches met hoge klantwaarde en lange salescycli zoals juridisch advies, financieel advies en B2B SaaS hebben de hoogste CPC's omdat 1 klant veel waard is.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoe bereken je een realistisch SEA budget?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Vermenigvuldig jouw gemiddelde CPC met de gewenste klikken per maand. Reken vervolgens met een conversieratio tussen 2 en 8 procent. Voor een eerlijke test reken je op minimaal 30 conversies per maand.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Verlaagt een SEA bureau jouw CPC?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Een goed bureau verlaagt jouw effectieve CPC vaak met 15 tot 30 procent door betere kwaliteitsscores, slimmere zoekwoordstructuur en gerichtere advertenties. Niet de nominale klikprijs, maar kosten per geconverteerde klik.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat is een goede kwaliteitsscore in Google Ads?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Een score tussen 7 en 10 op een schaal van 10 is goed en levert lagere CPC's. Onder de 5 betaal je premium voor zwakke advertenties. Verbeteringen aan landingspagina's leveren vaak het snelst CPC-verlaging op.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Welke CPC moet je verwachten voor B2B in Nederland?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Reken op 3 tot 12 euro per klik. SaaS, juridische diensten en financieel advies aan de bovenkant. Specialistische B2B-diensten zitten op 4 tot 8 euro. Vergelijkings-zoekopdrachten kunnen boven 10 euro liggen.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoeveel budget heb je minimaal nodig om SEA te testen?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Voor e-commerce minimaal 1.000 euro mediabudget per maand. Voor dienstverlening 1.500 euro. Voor competitieve B2B minimaal 2.500 euro. Daaronder krijg je niet genoeg klikken voor betrouwbare conclusies.</p>
                            </div>
                        </div>
                    </section>

                    <section className="mt-16 pt-12 border-t border-primary/10">
                        <h3 className="text-xl font-bold text-primary mb-6">Lees ook</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <Link to="/blogs/google-ads/sea-uitbesteden-weten-voordat-kiest" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">SEA uitbesteden</h3>
                                <p className="text-primary/60 text-sm">Wat moet je weten voordat je SEA uitbesteedt en welke kostenstructuur is normaal?</p>
                            </Link>
                            <Link to="/blogs/google-ads/verlaag-cpc-google-ads-minder" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">CPC verlagen in Google Ads</h3>
                                <p className="text-primary/60 text-sm">Concrete acties om jouw CPC te verlagen zonder dat conversies onderuit gaan.</p>
                            </Link>
                            <Link to="/blogs/google-ads/sea-bureau-vergelijken-resultaten-rapportages" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">SEA bureau vergelijken</h3>
                                <p className="text-primary/60 text-sm">Hoe beoordeel je of jouw bureau echt waarde levert voor wat je betaalt?</p>
                            </Link>
                        </div>
                    </section>
                </div>
            </article>

            <section className="w-full pb-32 px-6">
                <div className="max-w-4xl mx-auto bg-primary rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
                    <h2 className="relative z-10 font-drama italic text-background text-3xl sm:text-4xl md:text-5xl mb-6">CPC-check op jouw markt?</h2>
                    <p className="relative z-10 font-sans text-background/70 text-lg mb-10 max-w-xl mx-auto">We rekenen gratis uit welke CPC's gebruikelijk zijn voor jouw branche en welk budget realistisch is om binnen 90 dagen iets te leren. Geen verplichtingen, wel duidelijkheid.</p>
                    <Link to="/contact" className="relative z-10 btn-magnetic inline-flex items-center justify-center bg-accent text-background font-sans font-bold text-lg px-10 py-4 rounded-[2rem] hover:bg-accent/90 transition-colors">Neem contact op</Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
