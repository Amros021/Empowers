import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ChevronRight, User } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function BlogPostMobileFirstLandingspaginas() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen selection:bg-accent/30 selection:text-dark flex flex-col bg-background">
            <Helmet>
                <title>Mobile-first landingspagina's: waarom het geen optie meer is | Empowers</title>
                <meta name="description" content="Mobiel verkeer is bij de meeste MKB-sites al de meerderheid. Waarom mobile-first niet langer optioneel is, en hoe je een landingspagina bouwt die op telefoon werkt." />
                <meta name="keywords" content="mobile first landingspagina verplicht, mobiel landingspagina, mobile first design, conversie mobiel, mobiele optimalisatie" />
                <link rel="canonical" href="https://www.empowers.nl/blogs/strategie/mobile-first-landingspaginas-geen-optie" />
                <meta property="og:title" content="Mobile-first landingspagina's: waarom het geen optie meer is" />
                <meta property="og:description" content="Mobiel verkeer is bij de meeste MKB-sites de meerderheid. Tijd om je landingspagina daarop te bouwen, niet andersom." />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://www.empowers.nl/blogs/strategie/mobile-first-landingspaginas-geen-optie" />
                <meta property="og:image" content="https://www.empowers.nl/images/blogs/mobile-first-landingspaginas-geen-optie.jpg" />
                <meta property="article:published_time" content="2026-05-10T21:00:00+02:00" />
                <meta property="article:author" content="Empowers" />
                <meta property="article:section" content="Strategie" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Mobile-first: geen optie meer" />
                <meta name="twitter:description" content="Waarom mobile-first design niet langer optioneel is voor je landingspagina." />

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Article",
                        "headline": "Mobile-first landingspagina's: waarom het geen optie meer is",
                        "description": "Mobiel verkeer is de meerderheid op de meeste MKB-sites. Tijd om landingspagina's mobile-first te bouwen.",
                        "image": "https://www.empowers.nl/images/blogs/mobile-first-landingspaginas-geen-optie.jpg",
                        "datePublished": "2026-05-10T21:00:00+02:00",
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
                                    "name": "Wat betekent mobile-first eigenlijk?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Mobile-first betekent dat je de mobiele versie van een pagina ontwerpt voordat de desktop-versie wordt uitgewerkt. Niet andersom. Vroeger werden sites gebouwd voor desktop en daarna 'responsief gemaakt' voor mobiel. Bij mobile-first is mobiel de standaard waar het ontwerp begint, en wordt desktop een uitbreiding. Het resultaat is een pagina die op een telefoon goed werkt, niet een ingedikte versie van een desktop-pagina."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Waarom is mobile-first nu echt verplicht geworden?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Drie redenen. Mobiel verkeer is bij de meeste MKB-sites de meerderheid. Google indexeert sinds 2021 standaard met de mobiele bot, dus jouw mobiele site is wat Google ziet. En de meeste advertentieklikken komen mobiel binnen. Bouw je je landingspagina niet eerst voor mobiel, dan ontwerp je voor de minderheid van je verkeer."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Hoe weet ik of mijn site echt mobile-first is?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Open je site op een telefoon, niet op een browser-emulatie. Werkt de hero op de eerste schermhoogte zonder zoomen? Zijn knoppen duim-vriendelijk en niet te dicht op elkaar? Laadt de pagina onder de drie seconden op 4G? Begint je content met het belangrijkste, niet met een lange aanloop? Drie keer nee? Dan is je site responsief gebouwd, niet mobile-first."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Wat is het verschil met responsief design?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Responsief design schaalt een desktop-pagina automatisch mee naar kleinere schermen. Mobile-first ontwerpt eerst voor mobiel en breidt uit naar desktop. Beide eindigen vaak in vergelijkbare HTML, maar de denkrichting is anders. Mobile-first dwingt focus af, want op een telefoon kun je nu eenmaal niet alles tonen. Responsief kan een desktop-overflow voortbrengen die op mobiel verwarrend is."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Welke elementen werken op mobiel anders?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Navigatie wordt vaak een hamburger-menu. Tekst wordt korter, koppen iets kleiner maar nog steeds prominent. Knoppen worden groter en hebben meer witruimte eromheen. Formulieren krijgen minder velden of worden in stappen opgebroken. Afbeeldingen worden geoptimaliseerd voor lagere bandbreedte. En de volgorde van content kan anders: wat op desktop naast elkaar staat, gaat op mobiel onder elkaar."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Hoeveel conversie verlies ik met een slechte mobiele ervaring?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Concrete cijfers verschillen per site, maar de richting is duidelijk. Een formulier dat op mobiel moeilijk in te vullen is, daalt in conversie. Een knop die te klein is, krijgt minder klikken. Een pagina die op mobiel niet binnen drie seconden laadt, verliest een aanzienlijk deel van zijn verkeer. Bij audits van trage of slecht mobiel-vriendelijke pagina's zien we vaak dat verbeteringen tussen 20 en 50 procent extra conversie kunnen opleveren."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Moet ik mijn site opnieuw bouwen voor mobile-first?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Niet altijd. Veel sites kunnen mobile-first worden gemaakt door bestaande templates aan te passen, content te herstructureren en knoppen en formulieren te optimaliseren. Een herbouw is alleen nodig wanneer de onderliggende structuur de mobiele aanpak fundamenteel blokkeert. Voor de meeste MKB-sites is een gerichte mobiele audit met aanpassingen in CMS-instellingen meer dan genoeg."
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
                            { "@type": "ListItem", "position": 3, "name": "Strategie", "item": "https://www.empowers.nl/blogs/strategie" },
                            { "@type": "ListItem", "position": 4, "name": "Mobile-first landingspagina's", "item": "https://www.empowers.nl/blogs/strategie/mobile-first-landingspaginas-geen-optie" }
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
                        <Link to="/blogs/strategie" className="hover:text-accent transition-colors">Strategie</Link>
                        <ChevronRight className="w-3 h-3" />
                        <span className="text-primary truncate">Mobile-first landingspagina's</span>
                    </nav>

                    <header className="mb-16">
                        <div className="inline-block px-3 py-1 bg-accent/10 text-accent font-mono text-xs uppercase tracking-widest rounded-full mb-6">
                            Strategie
                        </div>
                        <h1 className="font-sans font-bold text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight mb-8">
                            Mobile-first landingspagina's: waarom het geen optie meer is
                        </h1>
                        <div className="flex flex-wrap items-center gap-6 text-sm font-sans text-primary/60 border-y border-primary/10 py-6">
                            <div className="flex items-center gap-2"><User className="w-4 h-4" /><span>Empowers Redactie</span></div>
                            <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>10 mei 2026</span></div>
                            <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>9 minuten leestijd</span></div>
                        </div>
                    </header>

                    <figure className="w-full h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden mb-16 relative bg-primary">
                        <div className="absolute inset-0 bg-[url('/images/blogs/mobile-first-landingspaginas-geen-optie.jpg')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </figure>

                    <div className="prose prose-lg max-w-none prose-headings:text-primary prose-headings:font-bold prose-a:text-accent prose-a:underline hover:prose-a:text-accent/80">
                        <p className="text-xl leading-relaxed text-primary/80 font-medium mb-6">
                            Open Google Analytics. Bekijk welk percentage van je verkeer mobiel is. Bij de meeste MKB-sites zit dat boven de 60 procent. Bij webshops vaak nog hoger, soms boven 80 procent. En toch zien we wekelijks landingspagina's die op een telefoon nauwelijks werken: te kleine knoppen, te lange formulieren, te zware foto's. Mobile-first is geen modewoord, het is een eis. Hieronder lees je waarom dat zo is en hoe je het deze maand nog aanpakt.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Waarom de discussie voorbij is</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Drie ontwikkelingen tegelijk hebben mobile-first onmisbaar gemaakt. Mobiel verkeer is de meerderheid op de meeste MKB-sites. Google indexeert sinds 2021 standaard met zijn mobiele bot, wat betekent dat wat Google ziet, jouw mobiele site is. En vrijwel alle advertentieklikken komen mobiel binnen, omdat mensen op hun telefoon scrollen door social feeds en zoekresultaten. Wie nog voor desktop ontwerpt, ontwerpt voor een minderheid.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Tegelijk zijn de mobiele schermen niet wezenlijk veranderd. De gemiddelde telefoon is nog steeds zes inch ongeveer, met een verticale oriëntatie. De ruimte voor content is beperkt. Dat dwingt focus af. Een landingspagina die op desktop drie kolommen breed is met zes secties, kan op een telefoon niet zomaar verticaal worden uitgepakt zonder dat de boodschap verloren gaat. Hij moet vanaf de basis opnieuw worden gedacht.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Het echte verschil tussen responsief en mobile-first</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Veel marketeers gebruiken de termen door elkaar. Toch is er een wezenlijk verschil. Responsief design begint met een desktop-pagina die zich aanpast aan kleinere schermen. Mobile-first begint met een mobiele pagina die op grotere schermen wordt uitgebreid. De volgorde maakt uit, want hij dwingt andere keuzes af.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Bij responsief ontwerp wordt vaak van alles meegenomen naar mobiel waarvoor geen ruimte is. Sliders, complexe navigaties, zware achtergrondvideo's. Op mobiel werken die elementen vaak slecht, maar omdat ze al in het desktop-ontwerp zaten, blijven ze staan. Bij mobile-first zou je die elementen nooit hebben toegevoegd, omdat ze op een telefoon niet bijdragen. Het verschil is dus geen technisch detail maar een verschil in wat je überhaupt op een pagina zet.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat een mobile-first landingspagina kenmerkt</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Op de eerste schermhoogte zie je een korte koptekst die direct vertelt wat de pagina aanbiedt. Daaronder een ondertekst van een of twee zinnen en een grote, duim-vriendelijke knop. Geen wirwar van navigatie, geen carousels die automatisch wisselen, geen onderaan plakkende banners die de helft van het scherm bedekken.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Bij scrollen vouwt de content zich uit in heldere blokken, één thema per blok. Elke sectie heeft zelf weer een duidelijke kop, een korte tekst en eventueel een knop. Geen lange tekstmuren, want bezoekers scannen op een telefoon meer dan ze lezen. Een uitwerking van hoe je dit per element schrijft staat in onze gids over <Link to="/blogs/strategie/landingspagina-schrijven-converteert" className="text-accent hover:underline">een landingspagina die converteert</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Formulieren en knoppen: waar mobiele conversie wint of verliest</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Op desktop ergert niemand zich aan een formulier met acht velden. Op mobiel is dat een drama. Een formulier in een mobile-first landingspagina heeft drie of vier velden, niet meer. Velden gebruiken het juiste toetsenbord: nummer-pad voor telefoonnummers, e-mail-toetsenbord voor adressen, slim auto-aanvullen voor postcodes. Wie meer informatie wil, splitst het formulier in twee stappen.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Knoppen zijn een ander verhaal. Op mobiel klik je met een duim, niet met een muis. Een knop moet minimaal 44 bij 44 pixels zijn om comfortabel te raken, en hij moet voldoende afstand hebben tot andere klikbare elementen om misklikken te voorkomen. Een rij van vier kleine knoppen naast elkaar is een conversie-killer. Eén grote primaire knop werkt elke keer beter.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Snelheid is op mobiel dubbel zo belangrijk</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Mobiele verbindingen zijn vaak trager en minder stabiel dan WiFi. Een afbeelding van 2 MB die op WiFi binnen een seconde laadt, kan op een 4G-verbinding vijf seconden duren. In die tijd zijn de meeste bezoekers al teruggeklikt. Een mobile-first pagina is daarom altijd ook performance-first.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Praktisch betekent dat: afbeeldingen comprimeren en in moderne formaten zoals WebP serveren, lazy loading inschakelen voor alles wat buiten beeld staat, tracking-scripts opschonen, en geen autoplay-video's in de hero. Voor meer over deze ingrepen zie onze blog over <Link to="/blogs/strategie/snellere-website-meer-klanten" className="text-accent hover:underline">snellere website meer klanten</Link>. De combinatie van mobile-first content en snelle laadtijd levert meer conversie op dan elk van beide alleen.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat veel mobiele pagina's nog steeds fout doen</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een paar veelvoorkomende fouten die we elke maand bij audits zien. Tekst die op mobiel zo klein is dat hij niet leesbaar is zonder zoomen. Knoppen die vlak naast elkaar staan en daardoor misklikken uitlokken. Pop-ups die het hele scherm bedekken en moeilijk te sluiten zijn op een telefoon. Formulieren met een verkeerd type toetsenbord, zodat je een numeriek veld krijgt met een alfanumeriek toetsenbord erbij.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            En de klassieker: een carrousel met automatisch wisselende slides die op mobiel onleesbaar zijn omdat je net begint te lezen en de slide al weg is. Carrousels zijn op desktop al matig effectief en op mobiel ronduit slecht. Vervang ze door een vaste hero met één duidelijke boodschap. Wil je toch meer tonen, doe dat in opvolgende secties die onder elkaar staan.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe je test op een echte telefoon, niet alleen in emulatie</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Browser-emulaties zoals Chrome DevTools zijn handig voor snel checken, maar ze missen iets cruciaals: gevoel. Een echte telefoon laat je merken hoe het scrollen aanvoelt, of een knop comfortabel te raken is met een duim, of de tekst goed te lezen is bij normaal armlengte. Doe minstens een keer per kwartaal een test op een echt toestel, het liefst een midrange Android plus een iPhone, want die representeren waar de meeste Nederlandse gebruikers op zitten.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Wat je tijdens zo'n test let op: laadtijd op 4G (zet WiFi uit), leesbaarheid zonder zoomen, klikbaarheid van knoppen met één hand, en hoe de pagina aanvoelt na drie seconden scrollen. Frustrerend? Dan is dat wat je gebruikers ervaren.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat je deze week kunt doen</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Open je belangrijkste landingspagina op een telefoon zonder WiFi. Laadt hij snel? Is de hero direct duidelijk? Is de knop duim-vriendelijk? Kun je het formulier zonder gedoe invullen? Welk percentage van je verkeer mobiel is, zie je in Google Analytics binnen drie klikken. Als dat boven de helft is en de pagina werkt slecht op mobiel, dan ligt daar je grootste conversie-winst.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Wil je samen kijken naar je mobiele ervaring, met een audit op een echt toestel en concrete fixes? Plan een vrijblijvend gesprek via onze <Link to="/contact" className="text-accent hover:underline">contactpagina</Link>. We bekijken je belangrijkste landingspagina door de ogen van een mobiele bezoeker en geven drie aanpassingen die direct effect hebben.
                        </p>
                    </div>

                    <section className="mt-16 pt-12 border-t border-primary/10">
                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Veelgestelde vragen</h2>
                        <div className="space-y-6 not-prose">
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat betekent mobile-first eigenlijk?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Mobile-first betekent dat je de mobiele versie van een pagina ontwerpt voordat de desktop-versie wordt uitgewerkt. Niet andersom. Vroeger werden sites gebouwd voor desktop en daarna 'responsief gemaakt' voor mobiel. Bij mobile-first is mobiel de standaard waar het ontwerp begint, en wordt desktop een uitbreiding. Het resultaat is een pagina die op een telefoon goed werkt, niet een ingedikte versie van een desktop-pagina.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Waarom is mobile-first nu echt verplicht geworden?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Drie redenen. Mobiel verkeer is bij de meeste MKB-sites de meerderheid. Google indexeert sinds 2021 standaard met de mobiele bot, dus jouw mobiele site is wat Google ziet. En de meeste advertentieklikken komen mobiel binnen. Bouw je je landingspagina niet eerst voor mobiel, dan ontwerp je voor de minderheid van je verkeer.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoe weet ik of mijn site echt mobile-first is?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Open je site op een telefoon, niet op een browser-emulatie. Werkt de hero op de eerste schermhoogte zonder zoomen? Zijn knoppen duim-vriendelijk en niet te dicht op elkaar? Laadt de pagina onder de drie seconden op 4G? Begint je content met het belangrijkste, niet met een lange aanloop? Drie keer nee? Dan is je site responsief gebouwd, niet mobile-first.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat is het verschil met responsief design?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Responsief design schaalt een desktop-pagina automatisch mee naar kleinere schermen. Mobile-first ontwerpt eerst voor mobiel en breidt uit naar desktop. Beide eindigen vaak in vergelijkbare HTML, maar de denkrichting is anders. Mobile-first dwingt focus af, want op een telefoon kun je nu eenmaal niet alles tonen. Responsief kan een desktop-overflow voortbrengen die op mobiel verwarrend is.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Welke elementen werken op mobiel anders?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Navigatie wordt vaak een hamburger-menu. Tekst wordt korter, koppen iets kleiner maar nog steeds prominent. Knoppen worden groter en hebben meer witruimte eromheen. Formulieren krijgen minder velden of worden in stappen opgebroken. Afbeeldingen worden geoptimaliseerd voor lagere bandbreedte. En de volgorde van content kan anders: wat op desktop naast elkaar staat, gaat op mobiel onder elkaar.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoeveel conversie verlies ik met een slechte mobiele ervaring?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Concrete cijfers verschillen per site, maar de richting is duidelijk. Een formulier dat op mobiel moeilijk in te vullen is, daalt in conversie. Een knop die te klein is, krijgt minder klikken. Een pagina die op mobiel niet binnen drie seconden laadt, verliest een aanzienlijk deel van zijn verkeer. Bij audits van trage of slecht mobiel-vriendelijke pagina's zien we vaak dat verbeteringen tussen 20 en 50 procent extra conversie kunnen opleveren.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Moet ik mijn site opnieuw bouwen voor mobile-first?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Niet altijd. Veel sites kunnen mobile-first worden gemaakt door bestaande templates aan te passen, content te herstructureren en knoppen en formulieren te optimaliseren. Een herbouw is alleen nodig wanneer de onderliggende structuur de mobiele aanpak fundamenteel blokkeert. Voor de meeste MKB-sites is een gerichte mobiele audit met aanpassingen in CMS-instellingen meer dan genoeg.</p>
                            </div>
                        </div>
                    </section>

                    <section className="mt-16 pt-12 border-t border-primary/10">
                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Lees ook</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <Link to="/blogs/strategie/landingspagina-schrijven-converteert" className="block border border-primary/10 rounded-xl p-6 hover:border-accent transition-colors">
                                <div className="text-xs font-mono uppercase tracking-widest text-accent mb-2">Strategie</div>
                                <h3 className="font-sans font-semibold text-primary text-lg mb-2">Een landingspagina die converteert</h3>
                                <p className="font-sans text-primary/70 text-sm">Hoe je elke sectie schrijft voor maximale conversie.</p>
                            </Link>
                            <Link to="/blogs/strategie/snellere-website-meer-klanten" className="block border border-primary/10 rounded-xl p-6 hover:border-accent transition-colors">
                                <div className="text-xs font-mono uppercase tracking-widest text-accent mb-2">Strategie</div>
                                <h3 className="font-sans font-semibold text-primary text-lg mb-2">Snellere website, meer klanten</h3>
                                <p className="font-sans text-primary/70 text-sm">Snelheid op mobiel is dubbel zo bepalend voor conversie.</p>
                            </Link>
                        </div>
                    </section>
                </div>
            </article>

            <section className="w-full pb-32 px-6">
                <div className="max-w-4xl mx-auto bg-primary rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
                    <h2 className="relative z-10 font-drama italic text-background text-3xl sm:text-4xl md:text-5xl mb-6">Werkt jouw site echt mobiel?</h2>
                    <p className="relative z-10 font-sans text-background/70 text-lg mb-10 max-w-xl mx-auto">In een gesprek van een halfuur draaien we een mobiele audit op je belangrijkste landingspagina en geven we drie concrete fixes. Helder en zonder ruis.</p>
                    <Link to="/contact" className="relative z-10 btn-magnetic inline-flex items-center justify-center bg-accent text-background font-sans font-bold text-lg px-10 py-4 rounded-[2rem] hover:bg-accent/90 transition-colors">Neem contact op</Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
