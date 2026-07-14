import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ChevronRight, User } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function BlogPostMetaAdsB2bWerkt() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen selection:bg-accent/30 selection:text-dark flex flex-col bg-background">
            <Helmet>
                <title>Meta Ads voor B2B: werkt het en hoe pak je het aan? | Empowers</title>
                <meta name="description" content="Meta Ads voor B2B werkt, mits je het anders aanpakt dan LinkedIn. Lees wanneer Facebook en Instagram zakelijke leads opleveren en welke creatives werken." />
                <link rel="canonical" href="https://www.empowers.nl/blogs/social-ads/meta-ads-b2b-werkt" />
                <meta property="og:title" content="Meta Ads voor B2B: werkt het en hoe pak je het aan?" />
                <meta property="og:description" content="Meta Ads is geen LinkedIn, maar wel verrassend sterk voor B2B als je het slim opzet. Zo haal je zakelijke leads uit Facebook en Instagram." />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://www.empowers.nl/blogs/social-ads/meta-ads-b2b-werkt" />
                <meta property="og:image" content="https://www.empowers.nl/images/blogs/meta-ads-b2b-werkt.jpg" />
                <meta property="article:published_time" content="2026-05-02T09:00:00+02:00" />
                <meta property="article:author" content="Empowers" />
                <meta property="article:section" content="Social Ads" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Meta Ads voor B2B: werkt het en hoe pak je het aan?" />
                <meta name="twitter:description" content="Meta Ads voor B2B werkt anders dan LinkedIn. Lees hoe je zakelijke leads haalt uit Facebook en Instagram." />

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Article",
                        "headline": "Meta Ads voor B2B: werkt het en hoe pak je het aan?",
                        "description": "Meta Ads voor B2B werkt, mits je het anders aanpakt dan LinkedIn. Lees wanneer Facebook en Instagram zakelijke leads opleveren en welke creatives werken.",
                        "image": "https://www.empowers.nl/images/blogs/meta-ads-b2b-werkt.jpg",
                        "datePublished": "2026-05-02T09:00:00+02:00",
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
                                    "name": "Werkt Meta Ads echt voor B2B?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Ja, Meta Ads werkt voor B2B als je doelen, doelgroep en creatives aanpast aan een zakelijke koper. Voor diensten met een prijs tot ongeveer 25.000 euro per jaar en een korte tot middellange salescyclus halen Facebook en Instagram vaak betaalbaardere leads dan LinkedIn. Je raakt beslissers in privé-tijd, niet alleen op zaterdagochtend op LinkedIn."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Wanneer werkt Meta Ads niet voor B2B?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Meta Ads is minder geschikt voor B2B-trajecten boven de 50.000 euro per jaar of voor branches waarin je heel specifiek op functietitel of bedrijfsgrootte moet kunnen targeten. Voor zware enterprise-deals met inkoopcommissies van 6 tot 10 mensen blijft LinkedIn meestal betere resultaten leveren, ondanks de hogere kosten per klik."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Hoeveel kost Meta Ads voor B2B?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Reken voor B2B Meta Ads op een minimumbudget van 1.000 tot 2.500 euro per maand. De kosten per lead liggen meestal tussen 15 en 50 euro, afhankelijk van branche en aanbod. Dat is doorgaans 40 tot 70 procent goedkoper dan LinkedIn Ads, waar B2B-leads tussen 60 en 200 euro kosten."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Welke doelgroep stel je in voor B2B op Meta?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Begin met custom audiences op basis van jouw klantenlijst en bezoekers van zakelijke pagina's. Bouw daaroverheen lookalikes van 1 tot 3 procent van je beste klanten. Vul aan met interesses zoals branche-tijdschriften, software, beurzen en gedragingen zoals 'kleine bedrijfseigenaar' of 'beslissers'. Vermijd de fout om alleen op functietitel te targeten, want dat veld is op Meta minder betrouwbaar dan op LinkedIn."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Welke creatives werken voor B2B op Meta Ads?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Korte verticale video's van 15 tot 30 seconden waarin een herkenbaar zakelijk probleem benoemd wordt en in 1 zin opgelost. Klantcases met een naam, functie en bedrijfsnaam erboven werken sterk. Vermijd corporate stockbeelden en glanzende reclamevideo's. Maak het persoonlijk: een founder die voor zijn whiteboard staat scoort beter dan een gepolijste explainer."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Werkt Meta Ads beter dan LinkedIn voor B2B?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Voor MKB-aanbiedingen en SaaS-tools tot ongeveer 25.000 euro per jaar haalt Meta vaak een 2 tot 4 keer lagere kosten per gekwalificeerde lead dan LinkedIn. Voor enterprise B2B blijft LinkedIn ondanks de hogere kosten meestal de beste keuze door de exacte targeting op functie en bedrijfsgrootte. Veel bedrijven combineren beide kanalen: LinkedIn voor doelgerichte awareness, Meta voor schaalbare leadgeneratie."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Welke campagnedoelen kies je voor B2B Meta Ads?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Voor leadgeneratie gebruik je het doel Leads met Lead Forms binnen Meta of het doel Verkopen wanneer je een waardevol formulier op je eigen site hebt staan. Het doel Verkeer kies je alleen om publiek op te bouwen voor latere remarketing. Vermijd Bereik en Betrokkenheid bij B2B want die geven goedkope vanity metrics maar weinig leads."
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
                            { "@type": "ListItem", "position": 3, "name": "Social Ads", "item": "https://www.empowers.nl/blogs/social-ads" },
                            { "@type": "ListItem", "position": 4, "name": "Meta Ads voor B2B", "item": "https://www.empowers.nl/blogs/social-ads/meta-ads-b2b-werkt" }
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
                        <Link to="/blogs/social-ads" className="hover:text-accent transition-colors">Social Ads</Link>
                        <ChevronRight className="w-3 h-3" />
                        <span className="text-primary truncate">Meta Ads voor B2B</span>
                    </nav>

                    {/* Header */}
                    <header className="mb-16">
                        <div className="inline-block px-3 py-1 bg-accent/10 text-accent font-mono text-xs uppercase tracking-widest rounded-full mb-6">
                            Social Ads
                        </div>
                        <h1 className="font-sans font-bold text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight mb-8">
                            Meta Ads voor B2B: werkt het en hoe pak je het aan?
                        </h1>
                        <div className="flex flex-wrap items-center gap-6 text-sm font-sans text-primary/60 border-y border-primary/10 py-6">
                            <div className="flex items-center gap-2"><User className="w-4 h-4" /><span>Empowers Redactie</span></div>
                            <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>2 mei 2026</span></div>
                            <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>9 minuten leestijd</span></div>
                        </div>
                    </header>

                    {/* Featured Image */}
                    <figure className="w-full h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden mb-16 relative bg-primary">
                        <div className="absolute inset-0 bg-[url('/images/blogs/meta-ads-b2b-werkt.jpg')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </figure>

                    {/* Content */}
                    <div className="prose prose-lg max-w-none prose-headings:text-primary prose-headings:font-bold prose-a:text-accent prose-a:underline hover:prose-a:text-accent/80">
                        <p className="text-xl leading-relaxed text-primary/80 font-medium mb-6">
                            Meta Ads voor B2B werkt, maar je moet het anders aanpakken dan LinkedIn. Voor diensten en software tot ongeveer 25.000 euro per jaar haal je via Facebook en Instagram vaak 2 tot 4 keer goedkopere leads dan op LinkedIn. De truc zit in andere doelgroep-keuzes, andere creatives en een ander idee van hoe een zakelijke koper zich gedraagt buiten kantooruren.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Werkt Meta Ads echt voor B2B?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Het korte antwoord: ja. Het langere antwoord vraagt om wat realisme. B2B-kopers zijn ook gewoon mensen. Ze scrollen 's avonds op de bank door Instagram, kijken Reels in de pauze en checken Facebook in het weekend. Wie denkt dat zakelijke beslissers alleen tussen 9 en 17 uur op LinkedIn te bereiken zijn, mist een hele markt.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Meta heeft per maand bijna 12 miljoen Nederlandse gebruikers en daar zitten alle beslissers in die je op LinkedIn ook ziet. Het verschil is dat ze op Meta in een ontspannen modus zitten. Een advertentie die op LinkedIn als pitch overkomt, kan op Instagram juist binnenkomen als nuttig idee. Dat opent ruimte voor andere boodschappen en andere creatives.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De praktijk laat dit ook zien. SaaS-bedrijven, marketingbureaus, accountants, opleidingsinstituten en zakelijke dienstverleners halen op Meta vaak een kosten per lead tussen 15 en 50 euro. Ter vergelijking: dezelfde lead via LinkedIn kost al snel 60 tot 200 euro. Niet elke lead is even gekwalificeerd, maar het volume en de schaalbaarheid spelen Meta in de kaart.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wanneer werkt Meta Ads B2B en wanneer niet?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Meta Ads schittert in B2B als jouw aanbieding voldoet aan drie kenmerken. Eerst: een prijs onder de 25.000 euro per jaar of per project. Twee: een herkenbaar probleem dat je in een korte video kunt benoemen. Drie: een laagdrempelige eerste stap zoals een demo, een gids of een gratis adviesgesprek. Hoe makkelijker je de eerste klik kunt maken, hoe beter Meta presteert.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Het werkt minder goed bij enterprise-deals boven de 50.000 euro per jaar waar inkoopcommissies van 6 tot 10 mensen aan tafel zitten. Daar is exact targeten op functietitel en bedrijfsgrootte cruciaal en dat doet LinkedIn nog steeds beter. Ook voor heel niche-branches met minder dan 10.000 potentiële kopers in Nederland is Meta vaak te breed van bereik om de kosten per lead onder controle te houden.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Tussenin zit een grote groep MKB-aanbieders die juist op Meta kunnen schalen. Denk aan een boekhouder die abonnementen verkoopt vanaf 100 euro per maand, een trainingsbureau met opleidingen rond de 2.000 euro of een marketingbureau dat trajecten aanbiedt vanaf 1.500 euro per maand. Voor die groep is Meta meestal het kanaal met de laagste kosten per gekwalificeerde lead.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe richt je B2B-doelgroepen in op Meta?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Targeting op Meta werkt anders dan op LinkedIn. Je hebt geen exacte functietitel- of bedrijfsgrootte-velden tot je beschikking. Wat Meta wel sterk maakt, is custom audiences en lookalikes. Daar haal je voor B2B het meeste rendement uit.
                        </p>

                        <h3 className="font-semibold text-primary text-xl mt-10 mb-4">Custom audiences uit jouw klantbestand</h3>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Upload jouw klantenlijst met e-mailadressen naar Meta en bouw daar een custom audience van. Dezelfde lijst kun je uitsluiten zodat je geen budget verspilt aan bestaande klanten. Voeg daarnaast bezoekers toe van jouw zakelijke landingspagina's en mensen die op een Lead Form hebben geklikt zonder af te ronden. Voor de hele opzet rond eigen lijsten lees je onze blog over <Link to="/blogs/social-ads/instagram-ads-doelgroepen-lookalike-custom-advantage" className="text-accent hover:underline">Meta Ads doelgroepen instellen</Link>.
                        </p>

                        <h3 className="font-semibold text-primary text-xl mt-10 mb-4">Lookalikes van je beste klanten</h3>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Lookalike audiences zijn voor B2B het krachtigste wapen op Meta. Maak een aparte lijst van je 100 of 200 beste klanten, gemeten op omzet of retentie, en bouw daarvan een lookalike van 1 procent. Dat geeft je rond de 110.000 mensen in Nederland die qua online gedrag lijken op jouw beste klanten. Eén procent presteert in B2B vaak twee tot drie keer beter dan 5 of 10 procent.
                        </p>

                        <h3 className="font-semibold text-primary text-xl mt-10 mb-4">Interesse- en gedragslagen</h3>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Vul aan met interesses op branche-tijdschriften, software die jouw kopers gebruiken, beurzen en zakelijke media. Combineer dat met gedragingen zoals 'kleine bedrijfseigenaren' en 'frequent zakelijk reizigers'. De fout die veel adverteerders maken is alleen op functietitel targeten. Dat veld is op Meta vele malen onbetrouwbaarder dan op LinkedIn omdat mensen hun titel zelden actueel houden.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Welke creatives werken voor B2B op Meta?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De grootste creatieve fout in B2B Meta Ads is corporate ogen. Een gepolijste explainer-video met stockbeelden en een voice-over zinkt direct weg in de feed. Wat Meta beloont is herkenbaarheid, persoonlijkheid en een duidelijk probleem.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Korte verticale video's van 15 tot 30 seconden werken het beste. Open in de eerste 2 seconden met een zichtbaar probleem dat jouw doelgroep elke week heeft. Bijvoorbeeld: "Verspil je elke maand 30 procent van jouw advertentiebudget?" Volg op met 1 zin oplossing en een concrete uitnodiging. Houd het gesproken, niet voorgekauwd.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Klantcases zijn goud. Een 30 seconden statement van een klant met naam, functie en bedrijf in beeld haalt vaak een 2 tot 3 keer hogere click-through-rate dan een algemene advertentie. Ook foto-advertenties met een ondernemer voor een whiteboard, een team in actie of een echt screenshot van resultaten doen het beter dan iconen en stockbeelden. Wil je meer voorbeelden van wat in 2026 wint, lees dan onze blog over <Link to="/blogs/social-ads/winnende-meta-ads-video-2026" className="text-accent hover:underline">winnende Meta Ads video's</Link>.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Wissel iedere twee tot drie weken minimaal twee creatives uit. B2B-doelgroepen zijn vaak kleiner dan B2C, dus jouw frequentie loopt sneller op en advertentiemoeheid slaat eerder toe. Drie tot vijf actieve creatives per ad set is een gezonde balans.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Welke campagnedoelen kies je voor B2B?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Meta biedt zes campagnedoelen. Voor B2B beperk je jezelf tot drie. Leads is jouw eerste keuze als je gegevens van potentiële klanten wilt verzamelen. Verkopen kies je als je een sterk geoptimaliseerde landingspagina hebt en de Meta Pixel goed staat. Verkeer pak je alleen om publiek op te bouwen voor latere remarketing.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Lead Forms binnen Meta presteren in B2B vaak 30 tot 50 procent beter dan formulieren op de eigen website. De drempel is lager omdat gegevens al voor-ingevuld zijn. De keerzijde: lead-kwaliteit kan iets lager liggen omdat de stap zo makkelijk is. Filter daarom in jouw vragen op een gekwalificeerde lead. Vraag naar bedrijfsnaam, branche of bedrijfsgrootte zodat je zelf kunt sorteren in jouw CRM. Voor de juiste meting via je website lees onze blog over de <Link to="/blogs/social-ads/conversie-api-meta-naast-pixel" className="text-accent hover:underline">Conversions API van Meta</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat is een realistisch budget en welke KPI's tellen?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Onder de 1.000 euro per maand wordt het lastig om Meta voor B2B serieus te testen. Het algoritme heeft 50 conversies per ad set per week nodig om uit de leerfase te komen. Bij een kosten per lead van 30 euro vraagt dat dus zo'n 1.500 euro per maand per ad set. Voor een eerlijke test reken je op 2.000 tot 3.500 euro per maand voor 6 tot 12 weken.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            KPI's die werkelijk tellen voor B2B zijn niet click-through-rate of bereik. Wat telt is de kosten per gekwalificeerde lead, de lead-naar-klant-ratio en de uiteindelijke ROAS over 90 dagen. B2B-salescycli zijn langer dan B2C, dus oordeel niet over een campagne na 14 dagen. Geef het minimaal 6 tot 8 weken voordat je harde conclusies trekt. Voor benchmarks per branche kijk in onze gids over <Link to="/blogs/social-ads/goede-roas-meta-ads-benchmarks" className="text-accent hover:underline">goede ROAS-cijfers op Meta Ads</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Meta Ads versus LinkedIn Ads voor B2B</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Veel B2B-marketeers stellen het verkeerd voor als een keuze. Het is geen kwestie van Meta of LinkedIn, het is een kwestie van wat past bij jouw aanbieding. LinkedIn presteert sterker als je heel specifiek op functietitel of bedrijfsgrootte moet kunnen targeten en je gemiddelde dealwaarde boven de 25.000 euro ligt. Meta wint op kosten en schaal voor MKB-aanbiedingen onder dat bedrag.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De slimste opzet voor middelgrote B2B-bedrijven is een combinatie. LinkedIn voor doelgerichte awareness bij specifieke bedrijven en functies. Meta voor schaalbare leadgeneratie en remarketing op websitebezoekers. Wie alleen LinkedIn doet laat goedkoop volume liggen. Wie alleen Meta doet mist de zwaarste accounts. Voor de basis van het andere kanaal lees onze blog over <Link to="/blogs/social-ads/linkedin-ads-beginners-eerste-b2b" className="text-accent hover:underline">LinkedIn Ads voor B2B-beginners</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wanneer schakel je een specialist in?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Zelf draaien kan in de eerste 1 tot 3 maanden, vooral als je het kanaal eerst wilt aftasten met een klein budget. Zodra je structureel meer dan 1.500 euro per maand in B2B Meta Ads zet, of zodra je meer dan 1 doelgroep en meer dan 1 aanbieding tegelijk wilt aansturen, gaat het werk inhoudelijk lopen. Een fout in custom audiences, een verkeerd ingestelde Lead Form of een verkeerde campagnestructuur vermenigvuldigt je verspilling sneller dan je denkt.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een specialist verdient zichzelf meestal binnen 2 tot 4 maanden terug door slimmere targeting, betere creatives en strakkere meting. Twijfel je of jouw huidige B2B Meta Ads-aanpak het maximale haalt? We doen kosteloos een scan van jouw account en laten zien waar voor jouw aanbod de eerste winst zit. Plan een gesprek via onze <Link to="/contact" className="text-accent hover:underline">contactpagina</Link>. Geen verplichtingen, wel duidelijkheid over wat haalbaar is.
                        </p>
                    </div>

                    {/* FAQ Section */}
                    <section className="mt-16 pt-12 border-t border-primary/10">
                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Veelgestelde vragen</h2>
                        <div className="space-y-6 not-prose">
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Werkt Meta Ads echt voor B2B?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Ja, mits je doelen, doelgroep en creatives aanpast aan zakelijke kopers. Voor diensten met een prijs tot ongeveer 25.000 euro per jaar en een korte tot middellange salescyclus halen Facebook en Instagram vaak betaalbaardere leads dan LinkedIn.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wanneer werkt Meta Ads niet voor B2B?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Meta is minder geschikt voor B2B-trajecten boven de 50.000 euro per jaar of voor branches waarin je heel specifiek op functietitel of bedrijfsgrootte moet targeten. Voor zware enterprise-deals levert LinkedIn meestal betere resultaten.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoeveel kost Meta Ads voor B2B?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Reken op een minimumbudget van 1.000 tot 2.500 euro per maand. De kosten per lead liggen meestal tussen 15 en 50 euro, doorgaans 40 tot 70 procent goedkoper dan LinkedIn waar B2B-leads tussen 60 en 200 euro kosten.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Welke doelgroep stel je in voor B2B op Meta?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Begin met custom audiences uit jouw klantenlijst en bezoekers van zakelijke pagina's. Bouw lookalikes van 1 tot 3 procent op je beste klanten. Vul aan met interesses op branche-tijdschriften, software en beurzen. Vermijd alleen op functietitel targeten.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Welke creatives werken voor B2B op Meta Ads?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Korte verticale video's van 15 tot 30 seconden waarin je een herkenbaar zakelijk probleem benoemt en in 1 zin oplost. Klantcases met naam, functie en bedrijfsnaam werken sterk. Vermijd corporate stockbeelden en gepolijste explainers.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Werkt Meta Ads beter dan LinkedIn voor B2B?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Voor MKB-aanbod tot 25.000 euro per jaar haalt Meta vaak een 2 tot 4 keer lagere kosten per gekwalificeerde lead dan LinkedIn. Voor enterprise B2B blijft LinkedIn meestal de beste keuze. Veel bedrijven combineren beide kanalen.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Welke campagnedoelen kies je voor B2B Meta Ads?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Voor leadgeneratie het doel Leads met Lead Forms binnen Meta of het doel Verkopen wanneer je een sterke landingspagina hebt. Verkeer kies je alleen om publiek op te bouwen voor remarketing. Vermijd Bereik en Betrokkenheid bij B2B.</p>
                            </div>
                        </div>
                    </section>

                    {/* Related Links */}
                    <section className="mt-16 pt-12 border-t border-primary/10">
                        <h3 className="text-xl font-bold text-primary mb-6">Lees ook</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <Link to="/blogs/social-ads/linkedin-ads-beginners-eerste-b2b" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">LinkedIn Ads voor B2B-beginners</h3>
                                <p className="text-primary/60 text-sm">Hoe je een eerste LinkedIn-campagne opzet voor B2B en wanneer dat kanaal beter past dan Meta.</p>
                            </Link>
                            <Link to="/blogs/social-ads/instagram-ads-doelgroepen-lookalike-custom-advantage" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Meta Ads doelgroepen instellen</h3>
                                <p className="text-primary/60 text-sm">Hoe je custom audiences en lookalikes inzet voor scherpere B2B-targeting op Meta.</p>
                            </Link>
                            <Link to="/blogs/social-ads/conversie-api-meta-naast-pixel" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Meta Conversions API installeren</h3>
                                <p className="text-primary/60 text-sm">Server-side tracking dat jouw B2B-leads correct toeschrijft aan de juiste campagne.</p>
                            </Link>
                        </div>
                    </section>
                </div>
            </article>

            {/* Bottom CTA */}
            <section className="w-full pb-32 px-6">
                <div className="max-w-4xl mx-auto bg-primary rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
                    <h2 className="relative z-10 font-drama italic text-background text-3xl sm:text-4xl md:text-5xl mb-6">Klaar voor B2B-leads via Meta Ads?</h2>
                    <p className="relative z-10 font-sans text-background/70 text-lg mb-10 max-w-xl mx-auto">We doen een gratis scan van jouw Meta-account en laten zien waar voor jouw zakelijke aanbod de eerste winst zit. Geen verplichtingen, wel duidelijkheid.</p>
                    <Link to="/contact" className="relative z-10 btn-magnetic inline-flex items-center justify-center bg-accent text-background font-sans font-bold text-lg px-10 py-4 rounded-[2rem] hover:bg-accent/90 transition-colors">Neem contact op</Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
