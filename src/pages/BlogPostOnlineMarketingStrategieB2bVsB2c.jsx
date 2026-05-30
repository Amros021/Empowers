import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ChevronRight, User } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function BlogPostOnlineMarketingStrategieB2bVsB2c() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen selection:bg-accent/30 selection:text-dark flex flex-col bg-background">
            <Helmet>
                <title>Online marketing strategie voor B2B: dit werkt anders dan B2C | Empowers</title>
                <meta
                    name="description"
                    content="B2B en B2C marketing draaien op heel andere knoppen. Zo bouw je een online marketing strategie die past bij langere salescycli en kritischer kopers."
                />
                <meta name="keywords" content="online marketing strategie b2b, b2b marketing, b2b vs b2c marketing, b2b leadgeneratie" />
                <link rel="canonical" href="https://www.empowers.nl/blogs/strategie/online-marketing-strategie-b2b-vs-b2c" />

                <meta property="og:type" content="article" />
                <meta property="og:title" content="Online marketing strategie voor B2B: dit werkt anders dan B2C" />
                <meta
                    property="og:description"
                    content="B2B en B2C marketing draaien op heel andere knoppen. Zo bouw je een online marketing strategie die past bij langere salescycli en kritischer kopers."
                />
                <meta property="og:url" content="https://www.empowers.nl/blogs/strategie/online-marketing-strategie-b2b-vs-b2c" />
                <meta property="og:image" content="https://www.empowers.nl/images/blogs/online-marketing-strategie-b2b-vs-b2c.jpg" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Online marketing strategie voor B2B: dit werkt anders dan B2C | Empowers" />
                <meta
                    name="twitter:description"
                    content="B2B en B2C marketing draaien op heel andere knoppen. Zo bouw je een online marketing strategie die past bij langere salescycli en kritischer kopers."
                />
                <meta name="twitter:image" content="https://www.empowers.nl/images/blogs/online-marketing-strategie-b2b-vs-b2c.jpg" />

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Article",
                        "headline": "Online marketing strategie voor B2B: dit werkt anders dan B2C",
                        "description": "B2B en B2C marketing draaien op heel andere knoppen. Zo bouw je een online marketing strategie die past bij langere salescycli en kritischer kopers.",
                        "image": "https://www.empowers.nl/images/blogs/online-marketing-strategie-b2b-vs-b2c.jpg",
                        "datePublished": "2026-05-27T09:00:00+02:00",
                        "dateModified": "2026-05-27T09:00:00+02:00",
                        "author": { "@type": "Organization", "name": "Empowers" },
                        "publisher": {
                            "@type": "Organization",
                            "name": "Empowers",
                            "logo": {
                                "@type": "ImageObject",
                                "url": "https://www.empowers.nl/empowers-logo-color.svg"
                            }
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
                                "name": "Nieuws",
                                "item": "https://www.empowers.nl/nieuws"
                            },
                            {
                                "@type": "ListItem",
                                "position": 3,
                                "name": "Strategie",
                                "item": "https://www.empowers.nl/blogs/strategie"
                            },
                            {
                                "@type": "ListItem",
                                "position": 4,
                                "name": "Online marketing strategie B2B vs B2C",
                                "item": "https://www.empowers.nl/blogs/strategie/online-marketing-strategie-b2b-vs-b2c"
                            }
                        ]
                    })}
                </script>

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": [
                            {
                                "@type": "Question",
                                "name": "Wat is het belangrijkste verschil tussen B2B en B2C marketing?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "B2B heeft een kleinere doelgroep, een langere koopcyclus en meerdere beslissers per deal. B2C draait op snellere, vaak emotionelere keuzes van een individu. Daardoor hoort bij B2B vooral content, LinkedIn en lead nurturing, en bij B2C breder bereik en directe conversies."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Welke kanalen werken het beste voor B2B?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Voor de meeste B2B-bedrijven zijn de sterkste kanalen LinkedIn (organisch en ads), Google Ads op commerciële zoekwoorden, content marketing (whitepapers, cases, blogs) en e-mail. Welke combinatie wint, hangt af van je salescyclus en gemiddelde dealwaarde."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Hoe lang duurt het tot een B2B marketing strategie resultaat oplevert?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Reken op een aanloop van een paar maanden voordat je richting consistente leads gaat. Op LinkedIn en in content komt momentum doorgaans na ruim drie maanden, en op Google Ads kun je sneller meten of zoekvraag en aanbod kloppen."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Past Google Ads bij een B2B strategie?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Ja, mits je je richt op zoekwoorden met duidelijke intent en je landingspagina afgestemd is op één rol (bijvoorbeeld inkoper of IT-manager). De volumes zijn kleiner dan in B2C, de kosten per klik meestal hoger, maar de waarde per lead ook."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Wat moet er in een B2B marketing funnel staan?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Een funnel die past bij een complexe aankoop: educatieve content bovenin (blogs, video), bewijslast in het midden (cases, demo's, whitepapers) en concrete actiepunten onderaan (prijsindicatie, contactformulier, gesprek inplannen). Tussen elke stap zit nurturing via e-mail of retargeting."
                                }
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
                        <Link to="/blogs/strategie" className="hover:text-accent transition-colors">Strategie</Link>
                        <ChevronRight className="w-3 h-3" />
                        <span className="text-primary truncate">B2B vs B2C strategie</span>
                    </nav>

                    {/* Header */}
                    <header className="mb-16">
                        <div className="inline-block px-3 py-1 bg-accent/10 text-accent font-mono text-xs uppercase tracking-widest rounded-full mb-6">
                            Strategie
                        </div>
                        <h1 className="font-sans font-bold text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight mb-8">
                            Online marketing strategie voor B2B: dit werkt anders dan B2C
                        </h1>
                        <div className="flex flex-wrap items-center gap-6 text-sm font-sans text-primary/60 border-y border-primary/10 py-6">
                            <div className="flex items-center gap-2">
                                <User className="w-4 h-4" />
                                <span>Empowers Redactie</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>27 mei 2026</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>8 minuten leestijd</span>
                            </div>
                        </div>
                    </header>

                    {/* Featured Image */}
                    <figure className="w-full h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden mb-16 relative bg-primary">
                        <div className="absolute inset-0 bg-[url('/images/blogs/online-marketing-strategie-b2b-vs-b2c.jpg')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </figure>

                    {/* Content */}
                    <div className="prose prose-lg max-w-none prose-headings:font-sans prose-headings:font-bold prose-headings:text-primary prose-a:text-accent prose-a:underline hover:prose-a:text-accent/80">
                        <p className="text-lg leading-relaxed text-primary/80 mb-8">
                            B2B-marketing voelt soms alsof je dezelfde knoppen indrukt als in B2C, alleen werkt er niets. Dat klopt. De koper is anders, de cyclus is anders en het succescriterium is anders. Wie een online marketing strategie voor B2B bouwt vanuit een B2C-blauwdruk, verbrandt budget op de verkeerde plek. Hieronder de praktische verschillen, met een aanpak die wel klopt bij langere salescycli, kritische kopers en kleinere doelgroepen.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">
                            B2B versus B2C: waar zit het echte verschil?
                        </h2>

                        <p className="text-primary/80 leading-relaxed mb-6">
                            Het cliché is dat B2B saai is en B2C sexy. Daar gaat het niet om. Het echte verschil zit in de aankoopbeslissing. In B2C koopt één persoon binnen minuten of uren, vaak op gevoel en bijna altijd voor zichzelf. In B2B kopen meerdere mensen samen, soms binnen weken, soms pas na een half jaar, en de meeste schermtijd gaat naar risico afdekken: niet de verkeerde leverancier kiezen, geen mislukt project op je naam krijgen.
                        </p>

                        <p className="text-primary/80 leading-relaxed mb-6">
                            Dat heeft directe gevolgen voor je marketing. Een B2C-campagne werkt als de creative scrollstop oplevert en de checkout snel is. Een B2B-campagne werkt als de juiste mensen op het juiste moment voldoende vertrouwen krijgen om jou op een shortlist te zetten. Dat is een ander soort marketing. Meer geduld, meer bewijs, minder schreeuwen.
                        </p>

                        <p className="text-primary/80 leading-relaxed mb-6">
                            Wij zien wekelijks B2B-accounts waar het Google Ads-budget keurig draait op brede zoekwoorden, maar de leads die binnenkomen op functienaam niet aansluiten bij wat sales kan converteren. De klikkost is hoog, de salesopvolging matig en het hele verhaal eindigt bij "online marketing werkt niet voor ons". Bijna nooit ligt het aan het kanaal. Bijna altijd aan de strategie eronder.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">
                            De vier knoppen waarop B2B anders draait
                        </h2>

                        <h3 className="font-semibold text-primary text-2xl mt-8 mb-4">
                            Doelgroep: smal en gelaagd
                        </h3>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            In B2C is je doelgroep vaak "vrouw, 25–45, geïnteresseerd in koken". In B2B praat je tegen een handvol bedrijven, met daarbinnen meerdere functies die ieder iets anders willen weten. De CFO wil weten of het zich terugverdient. De IT-manager wil weten of het veilig is. De gebruiker wil weten of het haar leven makkelijker maakt. Eén boodschap voor allemaal werkt zelden. Je hebt content nodig die per rol een ander stuk van het verhaal afdekt.
                        </p>

                        <h3 className="font-semibold text-primary text-2xl mt-8 mb-4">
                            Cyclus: weken tot maanden, niet minuten
                        </h3>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een B2C-shopper koopt vandaag of nooit. Een B2B-koper kijkt eerst rond, vraagt intern wat collega's vinden, vergelijkt drie leveranciers en plant pas dan een gesprek. Dat betekent dat je niet meet op "verkocht of niet", maar op tussenstappen. Eerste websitebezoek. Whitepaper gedownload. Demo aangevraagd. Antwoord op een mail. Die microconversies zijn je echte KPI's; pas daarna komt omzet.
                        </p>

                        <h3 className="font-semibold text-primary text-2xl mt-8 mb-4">
                            Boodschap: bewijs verslaat belofte
                        </h3>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            B2C-copy mag scherp en speels zijn. B2B-copy moet bewijs leveren. Een case study met een naam erop, een logo van een herkenbare klant, een citaat van een gebruiker. Hoe groter de risicoperceptie, hoe belangrijker dat bewijs. Vage claims als "wij maken jouw business toekomstbestendig" doen het slecht. Specifieke claims als "wij verlaagden de doorlooptijd van offertes bij Klant X van zes dagen naar één" doen het goed.
                        </p>

                        <h3 className="font-semibold text-primary text-2xl mt-8 mb-4">
                            Waarde per lead: hoog, dus alles mag duurder
                        </h3>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een webshop wil clicks van een paar tientjes per stuk. In B2B kan een gekwalificeerde lead met gemak honderden euro's aan media kosten en nog steeds extreem winstgevend zijn. Eén nieuwe klant met een meerjarig contract verdient honderd advertentiecampagnes terug. Dat verandert je hele rekenmodel. Niet sturen op cost per click, maar op cost per qualified lead en uiteindelijk pipeline-bijdrage.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">
                            De B2B funnel: drie lagen die je echt nodig hebt
                        </h2>

                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een werkende B2B-funnel heeft drie duidelijke lagen. Bovenin staat begrip: blogs, video's en LinkedIn-posts die helpen het probleem te erkennen en op te lossen. Niet over jou, maar over de pijn. In het midden komt bewijs binnen: cases en demovideo's die laten zien dat jij dit eerder hebt gedaan, aangevuld met whitepapers voor wie nét iets meer diepgang wil. Onderaan staat de actie: een offerteformulier, een gesprek inplannen, een prijsindicatie aanvragen. Tussen elke laag zit nurturing: e-mailflows en retargeting, met daar bovenop handmatige opvolging vanuit sales op de momenten dat een lead warm aanvoelt.
                        </p>

                        <p className="text-primary/80 leading-relaxed mb-6">
                            De fout die we het vaakst zien? Alles inrichten op de onderste laag. Een formulier op de homepage, een paar Google-zoekwoorden met "demo aanvragen" erin, en hopen op leads. Dat werkt voor de 3% van je doelgroep die nu klaar is om te kopen. De andere 97% mis je volledig. Een B2B-strategie die alleen op koopintentie schiet, laat enorm veel pipeline liggen.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">
                            Welke kanalen werken voor B2B?
                        </h2>

                        <p className="text-primary/80 leading-relaxed mb-6">
                            Niet elk kanaal weegt even zwaar in B2B. Hieronder de kanalen die het vaakst écht bijdragen, en hoe je ze inzet zonder budget te verbranden.
                        </p>

                        <ul className="space-y-4 my-8 pl-6 list-disc marker:text-accent">
                            <li><strong>LinkedIn (organisch en ads):</strong> de plek waar je beslissers daadwerkelijk zitten. Sponsored content voor bereik, Sponsored Messaging voor diepere gesprekken, organische posts vanuit founders en specialisten voor vertrouwen.</li>
                            <li><strong>Google Ads op intent-keywords:</strong> niet alles, maar specifiek de zoekopdrachten met duidelijke koopintentie. Lager volume, hogere klikkost, betere leads.</li>
                            <li><strong>Content marketing:</strong> blogs en cases die zoekvraag afdekken én bewijs leveren. Dit is je 24/7 verkoper.</li>
                            <li><strong>E-mailmarketing:</strong> de meest onderschatte kanaal in B2B. Een goede nurture-sequence converteert vaak beter dan elke advertentie.</li>
                            <li><strong>Webinars en events:</strong> één goed webinar levert vaak meer pipeline op dan een hele maand cold outreach. Mits onderwerp en sprekers raak zijn.</li>
                        </ul>

                        <p className="text-primary/80 leading-relaxed mb-6">
                            Wil je breder lezen welk kanaal bij jouw situatie past, dan helpt onze gids over <Link to="/blogs/algemeen/online-marketing-mkb-5-kanalen-werken-2026" className="text-accent underline hover:text-accent/80">de vijf kanalen die in 2026 werken voor MKB</Link>. Het verschil zit hem in hoe je ze combineert, niet in welke je kiest.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">
                            Wat je nooit moet kopiëren uit een B2C-playbook
                        </h2>

                        <p className="text-primary/80 leading-relaxed mb-6">
                            Sommige B2C-tactieken kun je rustig laten liggen. Drie veelgemaakte fouten die we vaak terugzien als een B2B-team te lang naar webshop-bureaus heeft geluisterd.
                        </p>

                        <p className="text-primary/80 leading-relaxed mb-6">
                            Discounts op de homepage. In B2C werkt schaarste en korting. In B2B verlaag je daarmee je gepercipieerde waarde en haal je precies de verkeerde leads binnen: de prijsshoppers, niet de partners.
                        </p>

                        <p className="text-primary/80 leading-relaxed mb-6">
                            Massale retargeting met dezelfde advertentie. Een B2B-koper wordt geïrriteerd, niet overtuigd, als hij twee weken lang dezelfde banner ziet. Wissel de boodschap af per fase: blog bovenin, case in het midden, demo onderaan.
                        </p>

                        <p className="text-primary/80 leading-relaxed mb-6">
                            Sturen op vanity metrics. Likes en views zijn in B2C nog wel eens leading. In B2B niet. Wat telt is of de juiste mensen je content zien, of ze terugkomen en of ze uiteindelijk een gesprek aanvragen. Een LinkedIn-post met 50 likes van je doelgroep is meer waard dan een post met 5.000 views van studenten.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">
                            Hoe meet je succes in B2B?
                        </h2>

                        <p className="text-primary/80 leading-relaxed mb-6">
                            Het lastige aan B2B-meting is dat alles te lang duurt voor de standaard dashboards. Een lead vandaag wordt mogelijk pas over vier maanden klant. Daardoor lijkt het soms alsof er niets gebeurt, terwijl de pipeline volloopt. Drie lagen meten voorkomt dat je te vroeg conclusies trekt.
                        </p>

                        <p className="text-primary/80 leading-relaxed mb-6">
                            Op campagneniveau kijk je naar klikken, kosten per klik en conversies naar lead. Dat zegt iets over of het kanaal werkt. Op leadniveau kijk je naar leadkwaliteit: passen functietitel, bedrijfsgrootte en branche bij je ICP? Op salesniveau kijk je naar pipeline-bijdrage: hoeveel offertes en gewonnen deals komen voort uit deze campagne, eventueel met een attributievenster van enkele maanden.
                        </p>

                        <p className="text-primary/80 leading-relaxed mb-6">
                            Goede tracking zit hier op de bodem. Zonder doorgegeven offline conversies via een gekoppeld CRM, vlieg je blind. Lees daarover ook ons stuk over <Link to="/blogs/tracking/meet-roi-online-marketing" className="text-accent underline hover:text-accent/80">het meten van ROI op online marketing</Link>: de meetlogica die daar staat, geldt extra voor B2B.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">
                            Een werkbare aanpak in vier fasen
                        </h2>

                        <p className="text-primary/80 leading-relaxed mb-6">
                            Genoeg theorie. Hoe zet je dit in de praktijk neer? Een aanpak die in B2B-trajecten doorgaans betrouwbaar werkt, bestaat uit vier fasen. Niet als een rigide stappenplan, maar als logische volgorde die voorkomt dat je geld stopt in kanalen waar je doelgroep niet ligt.
                        </p>

                        <p className="text-primary/80 leading-relaxed mb-6">
                            Eerst breng je de ideale klant scherp in beeld. Niet "MKB met meer dan 50 werknemers" maar concreet: welke functietitels, welke bedrijven, welke pijn, welk budget. Daarna bepaal je per fase in de aankoopreis welke vragen iemand stelt en welk type content daarop antwoord geeft. Vervolgens kies je de twee kanalen die het beste passen, in plaats van alle vijf tegelijk te starten. En tot slot bouw je het meetwerk, zodat je na drie maanden weet wat werkt.
                        </p>

                        <p className="text-primary/80 leading-relaxed mb-6">
                            Wat we daarbij steeds zien: B2B-bedrijven die deze volgorde aanhouden, halen binnen een half jaar significant betere leads dan bedrijven die in week één al tien kanalen tegelijk hebben aangezet. Smaller starten, breder uitbreiden als het werkt.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">
                            Klaar om je B2B-marketing te herijken?
                        </h2>

                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een online marketing strategie voor B2B is geen kleinere versie van B2C. Het is een ander vak. Andere kopers, andere meetpunten, andere snelheid. Wie dat snapt en de juiste volgorde aanhoudt, bouwt een pipeline die voorspelbaar groeit in plaats van te wachten op een doorbraak die nooit komt.
                        </p>

                        <p className="text-primary/80 leading-relaxed mb-6">
                            Loopt jouw B2B-marketing nu vooral op intuïtie of op kanalen die ooit voor een ander bedrijf werkten? Dan is een onafhankelijke check vaak de snelste manier om te zien waar het lekt. We kijken graag een keer mee. <Link to="/contact" className="text-accent underline hover:text-accent/80">Plan een vrijblijvend gesprek</Link> en je hebt binnen een uur scherper waar het geld de komende maanden moet landen.
                        </p>
                    </div>

                    {/* FAQ Section */}
                    <section className="mt-16">
                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">
                            Veelgestelde vragen
                        </h2>

                        <div className="space-y-6 not-prose">
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">
                                    Wat is het belangrijkste verschil tussen B2B en B2C marketing?
                                </h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    B2B heeft een kleinere doelgroep, een langere koopcyclus en meerdere beslissers per deal. B2C draait op snellere, vaak emotionelere keuzes van een individu. Daardoor hoort bij B2B vooral content, LinkedIn en lead nurturing, en bij B2C breder bereik en directe conversies.
                                </p>
                            </div>

                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">
                                    Welke kanalen werken het beste voor B2B?
                                </h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Voor de meeste B2B-bedrijven zijn de sterkste kanalen LinkedIn (organisch en ads), Google Ads op commerciële zoekwoorden, content marketing (whitepapers, cases, blogs) en e-mail. Welke combinatie wint, hangt af van je salescyclus en gemiddelde dealwaarde.
                                </p>
                            </div>

                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">
                                    Hoe lang duurt het tot een B2B marketing strategie resultaat oplevert?
                                </h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Reken op een aanloop van een paar maanden voordat je richting consistente leads gaat. Op LinkedIn en in content komt momentum doorgaans na ruim drie maanden, en op Google Ads kun je sneller meten of zoekvraag en aanbod kloppen.
                                </p>
                            </div>

                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">
                                    Past Google Ads bij een B2B strategie?
                                </h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Ja, mits je je richt op zoekwoorden met duidelijke intent en je landingspagina afgestemd is op één rol (bijvoorbeeld inkoper of IT-manager). De volumes zijn kleiner dan in B2C, de kosten per klik meestal hoger, maar de waarde per lead ook.
                                </p>
                            </div>

                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">
                                    Wat moet er in een B2B marketing funnel staan?
                                </h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Een funnel die past bij een complexe aankoop: educatieve content bovenin (blogs, video), bewijslast in het midden (cases, demo's, whitepapers) en concrete actiepunten onderaan (prijsindicatie, contactformulier, gesprek inplannen). Tussen elke stap zit nurturing via e-mail of retargeting.
                                </p>
                            </div>
                        </div>
                    </section>
                </div>
            </article>

            {/* Bottom CTA */}
            <section className="w-full pb-32 px-6">
                <div className="max-w-4xl mx-auto bg-primary rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
                    <h2 className="relative z-10 font-drama italic text-background text-3xl sm:text-4xl md:text-5xl mb-6">Klaar om je B2B-strategie scherper te krijgen?</h2>
                    <p className="relative z-10 font-sans text-background/70 text-lg mb-10 max-w-xl mx-auto">
                        We kijken een uur mee in je huidige aanpak, doelgroep en kanalen. Geen verkooppraat, wel concreet advies over waar je budget de komende maanden het hardst werkt.
                    </p>
                    <Link to="/contact" className="relative z-10 btn-magnetic inline-flex items-center justify-center bg-accent text-background font-sans font-bold text-lg px-10 py-4 rounded-[2rem] hover:bg-accent/90 transition-colors">
                        Plan een gesprek
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
