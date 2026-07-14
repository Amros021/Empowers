import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ChevronRight, User } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function BlogPostChatgptWebsiteCiteren() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen selection:bg-accent/30 selection:text-dark flex flex-col bg-background">
            <Helmet>
                <title>Hoe weet je of ChatGPT jouw website citeert? | Empowers</title>
                <meta name="description" content="ChatGPT citeert miljoenen websites per dag. Lees hoe je controleert of jouw site erbij zit, welke tools je daarvoor gebruikt en wat je kunt doen om vaker geciteerd te worden." />
                <link rel="canonical" href="https://www.empowers.nl/blogs/geo/chatgpt-website-citeren" />
                <meta property="og:title" content="Hoe weet je of ChatGPT jouw website citeert?" />
                <meta property="og:description" content="Lees hoe je checkt of ChatGPT jouw website citeert, welke tools je daarvoor inzet en hoe je je zichtbaarheid verhoogt." />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://www.empowers.nl/blogs/geo/chatgpt-website-citeren" />
                <meta property="og:image" content="https://www.empowers.nl/images/blogs/chatgpt-website-citeren.jpg" />
                <meta property="article:published_time" content="2026-04-15T00:00:00+02:00" />
                <meta property="article:author" content="Empowers" />
                <meta property="article:section" content="GEO" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Hoe weet je of ChatGPT jouw website citeert?" />
                <meta name="twitter:description" content="Check of ChatGPT jouw site citeert en leer hoe je je zichtbaarheid in AI-antwoorden verhoogt." />

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Article",
                        "headline": "Hoe weet je of ChatGPT jouw website citeert?",
                        "description": "ChatGPT citeert miljoenen websites per dag. Lees hoe je controleert of jouw site erbij zit, welke tools je daarvoor gebruikt en wat je kunt doen om vaker geciteerd te worden.",
                        "image": "https://www.empowers.nl/images/blogs/chatgpt-website-citeren.jpg",
                        "datePublished": "2026-04-15T00:00:00+02:00",
                        "author": { "@type": "Organization", "name": "Empowers" },
                        "publisher": {
                            "@type": "Organization",
                            "name": "Empowers",
                            "url": "https://www.empowers.nl",
                            "logo": {
                                "@type": "ImageObject",
                                "url": "https://www.empowers.nl/empowers-logo-color.svg"
                            }
                        },
                        "mainEntity": {
                            "@type": "FAQPage",
                            "mainEntity": [
                                {
                                    "@type": "Question",
                                    "name": "Citeert ChatGPT daadwerkelijk websites?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Ja. ChatGPT met browsing en de zoekfunctie van ChatGPT Search citeren actief bronnen uit het web. Onder elk antwoord verschijnen links naar de gebruikte sites. Zonder browsing-functie baseert ChatGPT zich op zijn trainingsdata en noemt het meestal geen directe bronnen."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Hoe check ik handmatig of ChatGPT mijn site citeert?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Stel ChatGPT relevante vragen die binnen jouw niche vallen en zet de zoekfunctie aan. Kijk onderaan het antwoord of in de zijbalk naar welke sites worden aangehaald. Varieer je vragen en herhaal de test op verschillende dagen, want antwoorden verschillen per sessie."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Welke tools monitoren citaties in ChatGPT?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Tools als Otterly.AI, Peec.ai, Profound en AthenaHQ monitoren dagelijks of jouw domein wordt genoemd in AI-antwoorden. Je geeft een lijst met vragen en concurrenten op en de tool rapporteert hoe vaak jouw site wordt geciteerd, in welke context en op welke positie."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Kan ik in mijn serverlogs zien dat GPTBot mijn site bezoekt?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Ja. Filter in je toegangslogs of analytics op user agents als GPTBot, OAI-SearchBot en ChatGPT-User. Dat zijn de crawlers van OpenAI. Bezoeken betekenen dat OpenAI je content ophaalt, maar geen garantie op een citatie. Ze zijn wel een sterk signaal dat je site bereikbaar en interessant genoeg is."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Hoe verhoog ik de kans dat ChatGPT mijn site citeert?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Schrijf content die directe antwoorden geeft op specifieke vragen, onderbouw met cijfers en zorg dat GPTBot je site kan crawlen. Voeg schema markup toe, bouw topical authority op rond je kernonderwerpen en zorg voor snelle, server-side gerenderde pagina's."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Verschilt citatie tussen ChatGPT, Perplexity en Google AI Overviews?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Ja. Perplexity citeert bij vrijwel elk antwoord en toont altijd bronnen. ChatGPT citeert alleen met browsing of zoekfunctie aan. Google AI Overviews gebruiken vaak dezelfde top 10 organische resultaten. Een site die goed scoort in de ene tool, scoort niet automatisch hoog in de andere."
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
                            {
                                "@type": "ListItem",
                                "position": 1,
                                "name": "Home",
                                "item": "https://www.empowers.nl"
                            },
                            {
                                "@type": "ListItem",
                                "position": 2,
                                "name": "Blogs",
                                "item": "https://www.empowers.nl/blogs"
                            },
                            {
                                "@type": "ListItem",
                                "position": 3,
                                "name": "GEO",
                                "item": "https://www.empowers.nl/blogs/geo"
                            },
                            {
                                "@type": "ListItem",
                                "position": 4,
                                "name": "ChatGPT website citeren",
                                "item": "https://www.empowers.nl/blogs/geo/chatgpt-website-citeren"
                            }
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
                        <Link to="/blogs/geo" className="hover:text-accent transition-colors">GEO</Link>
                        <ChevronRight className="w-3 h-3" />
                        <span className="text-primary truncate">ChatGPT website citeren</span>
                    </nav>

                    {/* Header */}
                    <header className="mb-16">
                        <div className="inline-block px-3 py-1 bg-accent/10 text-accent font-mono text-xs uppercase tracking-widest rounded-full mb-6">
                            GEO
                        </div>
                        <h1 className="font-sans font-bold text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight mb-8">
                            Hoe weet je of ChatGPT jouw website citeert?
                        </h1>

                        <div className="flex flex-wrap items-center gap-6 text-sm font-sans text-primary/60 border-y border-primary/10 py-6">
                            <div className="flex items-center gap-2">
                                <User className="w-4 h-4" />
                                <span>Empowers Redactie</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>15 april 2026</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>8 minuten leestijd</span>
                            </div>
                        </div>
                    </header>

                    {/* Featured Image */}
                    <figure className="w-full h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden mb-16 relative bg-primary">
                        <div className="absolute inset-0 bg-[url('/images/blogs/chatgpt-website-citeren.jpg')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </figure>

                    {/* Content */}
                    <div className="prose prose-lg max-w-none prose-headings:text-primary prose-headings:font-bold prose-a:text-accent prose-a:underline hover:prose-a:text-accent/80">
                        <p className="text-xl leading-relaxed text-primary/80 font-medium mb-6">
                            ChatGPT beantwoordt iedere week honderden miljoenen vragen. Bij een deel van die antwoorden worden websites aangehaald als bron. De grote vraag voor ondernemers: zit jouw site erbij? In deze gids lees je precies hoe je dat controleert, welke tools je kunt gebruiken en wat je doet als je nergens verschijnt.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Citeert ChatGPT überhaupt websites?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Het korte antwoord: ja, maar alleen in bepaalde situaties. Sinds de introductie van ChatGPT Search en de browsing-modus haalt ChatGPT actief informatie op van het web. Onder het antwoord verschijnen dan klikbare bronvermeldingen. Zonder die functies haalt ChatGPT zijn kennis uit trainingsdata en noemt het zelden directe bronnen.
                            </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Dat onderscheid is belangrijk. Als je wilt weten of ChatGPT jouw website citeert, moet je zeker weten dat je de zoekfunctie gebruikt. Anders test je alleen wat ChatGPT uit zijn hoofd kent, en dat is een heel andere meting dan live citaties op basis van jouw huidige content.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Volgens cijfers van OpenAI gebruikt ongeveer 60 procent van de ChatGPT-gebruikers regelmatig de zoekfunctie. Voor ondernemers betekent dat: als je daar niet in verschijnt, mis je een flink deel van het nieuwe zoekverkeer. Meer achtergrond over hoe deze tools werken vind je in onze <Link to="/blogs/geo/ai-zoekmachines-vs-google-overal" className="text-accent hover:underline">blog over AI-zoekmachines versus Google</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Stap 1: check het handmatig met slimme vragen</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De snelste manier om te testen kost je vijftien minuten. Open ChatGPT, zet de zoekfunctie aan en stel vragen die iemand uit jouw doelgroep logisch zou stellen. Niet "wat doet Empowers", want dan type je zelf al je naam in. Maar brede vragen als "welk marketingbureau in Nederland is specialist in GEO" of "hoeveel kost Google Ads voor een MKB-bedrijf".
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Kijk vervolgens naar de bronnen die ChatGPT onder het antwoord toont. Staat jouw domein erbij? Mooi. Niet? Noteer welke sites wel worden genoemd. Dat zijn je concurrenten in AI-zichtbaarheid. Vaak zijn het andere sites dan je directe concurrenten in Google, omdat AI-modellen vaak blogs en gidsen hoger waarderen dan commerciële pagina's.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Herhaal de test op verschillende dagen en met varianten van dezelfde vraag. Een AI geeft niet elke keer hetzelfde antwoord. Pas na vijf tot tien tests krijg je een eerlijk beeld van wie er structureel wordt aangehaald en wie toevallig één keer verschijnt.
                        </p>

                        <h3 className="font-semibold text-primary text-xl mt-10 mb-4">Welke vragen stel je precies?</h3>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Begin met je belangrijkste zoekwoorden en maak er vragen van. Als je scoort op "Meta Ads uitbesteden", test dan met "welk bureau kan ik inschakelen voor Meta Ads" of "wat zijn de beste Meta Ads specialisten in Nederland". Dat zijn de formuleringen die echte gebruikers typen in ChatGPT. Kortere, directere vragen dan in Google.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Stap 2: gebruik een GEO-monitoring tool</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Handmatig testen is prima voor een eerste indruk, maar niet schaalbaar. Er zijn inmiddels tools die dagelijks honderden vragen stellen aan ChatGPT, Claude, Perplexity en Google AI Overviews en bijhouden of jouw site wordt genoemd. De bekendste zijn Otterly.AI, Peec.ai, Profound en AthenaHQ.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Zo'n tool kost tussen de 50 en 500 euro per maand, afhankelijk van het aantal vragen en concurrenten dat je wilt tracken. Je voert een lijst met relevante prompts in, voegt je concurrenten toe en krijgt een dashboard waarin je ziet hoe vaak je wordt geciteerd, bij welke vragen en hoe je je verhoudt tot de rest van de markt.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De waarde zit niet alleen in het meten, maar in het spotten van kansen. Je ziet precies bij welke vragen je concurrenten wel worden aangehaald en jij niet. Dat zijn je prioriteiten voor nieuwe content. Want als de concurrent wordt geciteerd bij een vraag waar jij ook het antwoord op hebt, weet je dat de kans reëel is om daar ook tussen te komen.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Stap 3: controleer je serverlogs op GPTBot</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Er is nog een meting die veel ondernemers over het hoofd zien: je eigen serverlogs. Elke keer dat OpenAI jouw site bezoekt, laat dat een spoor achter in je toegangslogboeken. Filter op user agents als GPTBot, OAI-SearchBot en ChatGPT-User. Dat zijn de drie crawlers die OpenAI gebruikt voor respectievelijk trainingsdata, de zoekfunctie en directe antwoorden.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Zie je die user agents niet in je logs? Dan heb je een probleem. Dan wordt je site simpelweg niet bezocht door OpenAI. Vaak komt dat door een te streng robots.txt bestand, een trage server of JavaScript-heavy pagina's die crawlers niet kunnen uitlezen. Zonder bezoek is citatie per definitie onmogelijk.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Zie je ze wel? Goed nieuws: je site wordt meegenomen in OpenAI's dataset. Let vooral op welke pagina's worden bezocht. Die inzichten zeggen iets over welke content OpenAI interessant genoeg vindt om op te halen. Meer over crawlen en structuur lees je in onze <Link to="/blogs/geo/content-structureren-ai" className="text-accent hover:underline">blog over content structureren voor AI</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat betekenen de resultaten?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Stel: je hebt je handmatige test gedaan, een tool geïnstalleerd en je logs bekeken. Wat zeggen die data nu? Er zijn vier scenario's, en elk vraagt om een andere aanpak.
                        </p>

                        <h3 className="font-semibold text-primary text-xl mt-10 mb-4">Scenario 1: GPTBot bezoekt je niet</h3>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Prioriteit één is technisch. Check je robots.txt, je server-snelheid en of je pagina's server-side gerenderd worden. Pas dat aan, wacht twee weken en test opnieuw. Zonder crawl is er geen citatie.
                        </p>

                        <h3 className="font-semibold text-primary text-xl mt-10 mb-4">Scenario 2: GPTBot bezoekt wel, maar geen citaties</h3>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Dan is je content niet duidelijk genoeg of mist het de signalen die AI-tools zoeken. Werk aan structuur, directe antwoorden in de openingszinnen en concrete cijfers. Ga bij je concurrenten kijken die wel worden geciteerd en analyseer wat ze anders doen.
                        </p>

                        <h3 className="font-semibold text-primary text-xl mt-10 mb-4">Scenario 3: soms citaties, maar onregelmatig</h3>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Je bent op de goede weg, maar nog niet autoritatief genoeg binnen je onderwerp. Bouw topical authority op door meer artikelen rond hetzelfde thema te schrijven en die onderling te linken. Drie tot zes maanden consistent publiceren geeft meestal een duidelijke sprong in citaties.
                        </p>

                        <h3 className="font-semibold text-primary text-xl mt-10 mb-4">Scenario 4: je wordt regelmatig geciteerd</h3>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Gefeliciteerd, je hebt iets waardevols opgebouwd. Nu gaat het om vasthouden en uitbreiden. Monitor je positie, werk content bij zodra cijfers verouderen en kijk welke nieuwe vragen je kunt afdekken. AI-zichtbaarheid is geen eenmalige klus, maar een doorlopend proces.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Verschil met Perplexity en Google AI Overviews</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Let op: citaties in ChatGPT zeggen niets over citaties in Perplexity, Claude of Google AI Overviews. Elke AI-tool heeft zijn eigen selectiemechanisme. Perplexity put uit een mix van directe webzoekresultaten en eigen indexen. Google AI Overviews leunen sterk op de top 10 organische resultaten van Google zelf. Claude gebruikt zijn eigen trainingsdata en sinds kort ook live zoeken.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            In de praktijk betekent dit: meet per tool apart. Een site die bij Perplexity bovenaan staat, kan bij ChatGPT nergens te bekennen zijn. Dat klinkt vervelend, maar het biedt ook kansen. Als je nergens scoort, kies dan één tool om eerst op te focussen. De tool waar jouw doelgroep het meest gebruik van maakt.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe vaak moet je dit meten?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Voor een eerste nulmeting besteed je één tot twee dagen. Daarna is maandelijks meten genoeg, tenzij je actief content publiceert en snelle feedback wilt. Pak dan een wekelijkse check op de belangrijkste vijf tot tien vragen. Gebruik altijd dezelfde vragen, zodat je trends kunt zien.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Let wel op dat AI-antwoorden van dag tot dag verschillen. Eén slechte meting zegt weinig. Pas een patroon over drie tot vier weken vertelt je of je echt vooruit of achteruit gaat. Dat vraagt geduld, maar levert betrouwbaardere data dan dagelijks paniekeren over een gemiste citatie.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">De conclusie: meten is de eerste stap naar groei</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Of ChatGPT jouw website citeert, weet je pas als je het echt meet. Niet gokken op basis van één losse test, maar systematisch checken via handmatige prompts, een monitoring tool en je eigen serverlogs. Samen geven die drie bronnen een compleet beeld van waar je staat en wat je moet verbeteren.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De ondernemers die nu beginnen met meten, hebben over twaalf maanden een voorsprong die moeilijk in te halen is. AI-zichtbaarheid bouw je niet in een week op, maar wel in een half jaar van consistent werk. Meten zorgt dat je dat werk op de juiste plekken doet.
                        </p>

                        <p className="text-primary/80 leading-relaxed mb-6">
                            Wil je weten of jouw website al geciteerd wordt door ChatGPT, Claude en Perplexity? We doen een nulmeting voor je en laten zien waar de grootste kansen liggen. Plan een gesprek via onze <Link to="/contact" className="text-accent hover:underline">contactpagina</Link>.
                        </p>
                    </div>

                    {/* FAQ Section */}
                    <section className="mt-16 pt-12 border-t border-primary/10">
                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Veelgestelde vragen</h2>
                        <div className="space-y-6 not-prose">
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Citeert ChatGPT daadwerkelijk websites?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Ja. ChatGPT met browsing en de zoekfunctie citeren actief bronnen uit het web. Onder elk antwoord verschijnen links naar de gebruikte sites. Zonder browsing-functie baseert ChatGPT zich op zijn trainingsdata en noemt het meestal geen directe bronnen.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoe check ik handmatig of ChatGPT mijn site citeert?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Stel ChatGPT relevante vragen die binnen jouw niche vallen en zet de zoekfunctie aan. Kijk onderaan het antwoord of in de zijbalk naar welke sites worden aangehaald. Varieer je vragen en herhaal op verschillende dagen, want antwoorden verschillen per sessie.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Welke tools monitoren citaties in ChatGPT?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Tools als Otterly.AI, Peec.ai, Profound en AthenaHQ monitoren dagelijks of jouw domein wordt genoemd. Je geeft een lijst met vragen en concurrenten op en de tool rapporteert hoe vaak je site wordt geciteerd en in welke context.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Kan ik in mijn serverlogs zien dat GPTBot mijn site bezoekt?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Ja. Filter in je toegangslogs op user agents als GPTBot, OAI-SearchBot en ChatGPT-User. Dat zijn de crawlers van OpenAI. Bezoeken betekenen dat je content wordt opgehaald, maar vormen geen garantie op een citatie.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoe verhoog ik de kans dat ChatGPT mijn site citeert?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Schrijf content die directe antwoorden geeft, onderbouw met cijfers en zorg dat GPTBot je site kan crawlen. Voeg schema markup toe, bouw topical authority op rond je kernonderwerpen en zorg voor snelle, server-side gerenderde pagina's.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Verschilt citatie tussen ChatGPT, Perplexity en Google AI Overviews?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Ja. Perplexity citeert bij vrijwel elk antwoord. ChatGPT citeert alleen met browsing of zoekfunctie aan. Google AI Overviews gebruiken vaak dezelfde top 10 organische resultaten. Een site die goed scoort in de ene tool, scoort niet automatisch hoog in de andere.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Related Links */}
                    <section className="mt-16 pt-12 border-t border-primary/10">
                        <h3 className="text-xl font-bold text-primary mb-6">Lees ook</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <Link to="/blogs/geo/schrijf-content-ai-tools-citeren" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Content die AI-tools citeren</h3>
                                <p className="text-primary/60 text-sm">Zo schrijf je tekst die ChatGPT en Perplexity aanhalen.</p>
                            </Link>
                            <Link to="/blogs/geo/chatgpt-bedrijf-aanbeveelt" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">ChatGPT bedrijf aanbevelen</h3>
                                <p className="text-primary/60 text-sm">Hoe zorg je dat ChatGPT jouw bedrijf aanbeveelt?</p>
                            </Link>
                            <Link to="/blogs/geo/content-structureren-ai" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Content structureren voor AI</h3>
                                <p className="text-primary/60 text-sm">Zo structureer je content zodat AI het begrijpt en citeert.</p>
                            </Link>
                        </div>
                    </section>
                </div>
            </article>

            {/* Bottom CTA */}
            <section className="w-full pb-32 px-6">
                <div className="max-w-4xl mx-auto bg-primary rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
                    <h2 className="relative z-10 font-drama italic text-background text-3xl sm:text-4xl md:text-5xl mb-6">Word jij al geciteerd door ChatGPT?</h2>
                    <p className="relative z-10 font-sans text-background/70 text-lg mb-10 max-w-xl mx-auto">We doen een nulmeting in ChatGPT, Claude en Perplexity en laten zien waar je grootste kansen liggen. Geen verplichtingen.</p>
                    <Link to="/contact" className="relative z-10 btn-magnetic inline-flex items-center justify-center bg-accent text-background font-sans font-bold text-lg px-10 py-4 rounded-[2rem] hover:bg-accent/90 transition-colors">Neem contact op</Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
