import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ChevronRight, User } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function BlogPostSmartBiddingUitgelegd() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen selection:bg-accent/30 selection:text-dark flex flex-col bg-background">
            <Helmet>
                <title>Smart Bidding uitgelegd: wanneer gebruik je het en wanneer niet? | Empowers</title>
                <meta name="description" content="Smart Bidding in Google Ads automatiseert je biedingen met AI. Lees wanneer het werkt, wanneer je het beter uit kunt laten en hoe je het goed instelt." />
                <link rel="canonical" href="https://www.empowers.nl/blogs/google-ads/smart-bidding-uitgelegd-wanneer-wanneer" />
                <meta property="og:title" content="Smart Bidding uitgelegd: wanneer gebruik je het en wanneer niet?" />
                <meta property="og:description" content="Smart Bidding in Google Ads automatiseert je biedingen met AI. Lees wanneer het werkt en wanneer je het beter uit kunt laten." />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://www.empowers.nl/blogs/google-ads/smart-bidding-uitgelegd-wanneer-wanneer" />
                <meta property="og:image" content="https://www.empowers.nl/images/blogs/smart-bidding-uitgelegd-wanneer-wanneer.jpg" />
                <meta property="article:published_time" content="2026-03-30" />
                <meta property="article:author" content="Empowers" />
                <meta property="article:section" content="Google Ads" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Smart Bidding uitgelegd: wanneer gebruik je het en wanneer niet?" />
                <meta name="twitter:description" content="Smart Bidding automatiseert je Google Ads biedingen. Lees wanneer het werkt en wanneer niet." />

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Article",
                        "headline": "Smart Bidding uitgelegd: wanneer gebruik je het en wanneer niet?",
                        "description": "Smart Bidding in Google Ads automatiseert je biedingen met AI. Lees wanneer het werkt, wanneer je het beter uit kunt laten en hoe je het goed instelt.",
                        "image": "https://www.empowers.nl/images/blogs/smart-bidding-uitgelegd-wanneer-wanneer.jpg",
                        "datePublished": "2026-03-30T00:00:00+02:00",
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
                                    "name": "Wat is Smart Bidding in Google Ads?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Smart Bidding is een verzameling geautomatiseerde biedstrategieen in Google Ads die machine learning gebruiken om je biedingen per veiling aan te passen. Google kijkt naar signalen zoals apparaat, locatie, tijdstip en zoekgedrag om de kans op een conversie in te schatten."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Hoeveel conversies heb ik nodig voor Smart Bidding?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Google adviseert minimaal 30 conversies in de afgelopen 30 dagen per campagne. In de praktijk werkt Smart Bidding het best vanaf 50 conversies per maand. Met minder data maakt het algoritme te veel inschattingsfouten."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Welke Smart Bidding strategie moet ik kiezen?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Dat hangt af van je doel. Wil je zoveel mogelijk conversies? Kies Maximize Conversions. Wil je een bepaalde ROAS halen? Kies Target ROAS. Wil je elke lead onder een bepaald bedrag houden? Kies Target CPA. Begin altijd met Maximize Conversions als je nog geen historische data hebt."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Kan Smart Bidding mijn budget verspillen?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Ja, als je het verkeerd instelt. Zonder genoeg conversiedata biedt het algoritme te hoog of op de verkeerde zoekopdrachten. Stel altijd een realistisch doel-CPA of doel-ROAS in en monitor de eerste twee weken dagelijks."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Wat is het verschil tussen handmatig bieden en Smart Bidding?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Bij handmatig bieden stel je zelf een maximaal bod per klik in. Bij Smart Bidding past Google het bod per veiling automatisch aan op basis van honderden signalen. Handmatig bieden geeft meer controle maar mist de snelheid en schaal van machine learning."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Hoe lang duurt het voordat Smart Bidding goed werkt?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Reken op een leerfase van 1 tot 2 weken. In die periode schommelen je resultaten. Het algoritme verzamelt data en past zijn model aan. Pas na twee weken kun je beoordelen of de strategie werkt. Wijzig in die periode niets aan je campagne."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Werkt Smart Bidding ook voor kleine budgetten?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Beperkt. Met een dagbudget onder de 20 euro genereert je campagne te weinig klikken en conversies om het algoritme goed te laten leren. In dat geval is handmatig bieden of Enhanced CPC vaak een betere keuze tot je meer volume hebt."
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
                                "name": "Google Ads",
                                "item": "https://www.empowers.nl/blogs/google-ads"
                            },
                            {
                                "@type": "ListItem",
                                "position": 4,
                                "name": "Smart Bidding uitgelegd",
                                "item": "https://www.empowers.nl/blogs/google-ads/smart-bidding-uitgelegd-wanneer-wanneer"
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
                        <Link to="/blogs/google-ads" className="hover:text-accent transition-colors">Google Ads</Link>
                        <ChevronRight className="w-3 h-3" />
                        <span className="text-primary truncate">Smart Bidding uitgelegd</span>
                    </nav>

                    {/* Header */}
                    <header className="mb-16">
                        <div className="inline-block px-3 py-1 bg-accent/10 text-accent font-mono text-xs uppercase tracking-widest rounded-full mb-6">
                            Google Ads
                        </div>
                        <h1 className="font-sans font-bold text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight mb-8">
                            Smart Bidding uitgelegd: wanneer gebruik je het en wanneer niet?
                        </h1>

                        <div className="flex flex-wrap items-center gap-6 text-sm font-sans text-primary/60 border-y border-primary/10 py-6">
                            <div className="flex items-center gap-2">
                                <User className="w-4 h-4" />
                                <span>Empowers Redactie</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>30 maart 2026</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>8 minuten leestijd</span>
                            </div>
                        </div>
                    </header>

                    {/* Featured Image */}
                    <figure className="w-full h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden mb-16 relative bg-primary">
                        <div className="absolute inset-0 bg-[url('/images/blogs/smart-bidding-uitgelegd-wanneer-wanneer.jpg')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </figure>

                    {/* Content */}
                    <div className="prose prose-lg max-w-none prose-headings:text-primary prose-headings:font-bold prose-a:text-accent prose-a:underline hover:prose-a:text-accent/80">
                        <p className="text-xl leading-relaxed text-primary/80 font-medium mb-6">
                            Smart Bidding in Google Ads laat het algoritme je biedingen automatisch aanpassen per veiling. Het kijkt naar apparaat, locatie, tijdstip en zoekgedrag om te voorspellen hoe groot de kans op een conversie is. Klinkt slim, en dat is het ook. Maar niet altijd. In dit artikel lees je wanneer Smart Bidding je campagnes sterker maakt en wanneer je beter zelf de controle houdt.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat is Smart Bidding precies?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Smart Bidding is de verzamelnaam voor de geautomatiseerde biedstrategieen van Google Ads die draaien op machine learning. In plaats van dat jij een vast bedrag per klik instelt, past Google het bod per veiling aan. Elke keer dat iemand een zoekopdracht intypt, berekent Google in milliseconden of die persoon waarschijnlijk gaat converteren. Op basis daarvan biedt het meer of minder.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Google gebruikt daarvoor honderden signalen tegelijk. Denk aan het apparaat van de zoeker, de locatie, het tijdstip, de browser, eerdere zoekgeschiedenis en zelfs het type zoekopdracht. Als mens kun je die hoeveelheid data niet verwerken. Dat is het grote voordeel van Smart Bidding: het schaalt op een manier die handmatig bieden niet kan.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Welke Smart Bidding strategieen zijn er?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Google biedt vier Smart Bidding strategieen aan. Elke strategie past bij een ander doel.
                        </p>

                        <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Maximize Conversions</h3>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Google probeert zoveel mogelijk conversies te halen binnen je dagbudget. Dit is de meest gebruikte instapstrategie. Je geeft Google de vrijheid om te bieden wat nodig is, zolang het budget niet wordt overschreden. Het nadeel: je hebt geen controle over wat elke conversie kost. Bij onze klanten zien we dat Maximize Conversions goed werkt als startpunt, maar dat je na 2 tot 4 weken wilt overstappen naar een doelgerichte strategie.
                        </p>

                        <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Target CPA (kosten per conversie)</h3>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Je stelt een doel in voor wat je maximaal per conversie wilt betalen. Google stuurt zijn biedingen daarop aan. Dit werkt goed als je weet wat een lead of verkoop je mag kosten. Een installatiebedrijf dat we begeleidden stelde een Target CPA in van 35 euro per aanvraag. Na drie weken lag het gemiddelde op 31 euro. Zonder die grens liep de CPA eerder op tot 55 euro.
                        </p>

                        <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Target ROAS (rendement op advertentieuitgave)</h3>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Je stelt een gewenst rendement in. Stel, je wilt 400% ROAS, dan verwacht je dat elke euro die je aan advertenties uitgeeft vier euro omzet oplevert. Google biedt meer op zoekopdrachten waar het verwacht dat de omzet hoger is. Dit is de strategie die webshops het meest gebruiken. Het vereist wel dat je waarde-tracking hebt ingesteld, zodat Google weet welke conversies meer waard zijn dan andere.
                        </p>

                        <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Maximize Conversion Value</h3>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Vergelijkbaar met Maximize Conversions, maar dan gericht op de totale conversiewaarde in plaats van het aantal. Google probeert zoveel mogelijk omzet te genereren binnen je budget. Dit werkt het beste voor webshops met producten in verschillende prijsklassen. Het algoritme leert dan om meer te bieden op zoekers die waarschijnlijk duurdere producten kopen.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wanneer werkt Smart Bidding goed?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Smart Bidding is geen magische knop. Het werkt alleen goed als aan een paar voorwaarden is voldaan.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De eerste voorwaarde is voldoende data. Google adviseert minimaal 30 conversies per campagne in de afgelopen 30 dagen. In de praktijk merken we dat het algoritme pas echt goed presteert vanaf 50 conversies per maand. Met minder data maakt het te veel inschattingsfouten en schommelen je resultaten van dag tot dag.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De tweede voorwaarde is betrouwbare tracking. Als je <Link to="/blogs/tracking/marketing-tracking-conversies-meten" className="text-accent hover:underline">conversies niet goed meet</Link>, krijgt Smart Bidding verkeerde signalen. Een formulier dat twee keer telt als conversie, of een bedankpagina die ook via directe links bereikbaar is, vervuilt de data. Het algoritme stuurt dan op ruis in plaats van op echte resultaten.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De derde voorwaarde is geduld. Smart Bidding heeft een leerfase van 1 tot 2 weken. In die periode test het algoritme en schommelen je kosten per conversie. We krijgen deze vraag wekelijks van ondernemers: "Mijn kosten schieten omhoog, moet ik de strategie aanpassen?" Nee. Geef het twee weken. Pas daarna kun je beoordelen of het werkt.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wanneer kun je Smart Bidding beter niet gebruiken?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Er zijn situaties waarin handmatig bieden of Enhanced CPC de betere keuze is. De belangrijkste: te weinig data. Als je campagne minder dan 15 conversies per maand genereert, heeft het algoritme te weinig om van te leren. Je biedingen worden dan grillig en je kosten onvoorspelbaar.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een klein dagbudget is ook een reden om voorzichtig te zijn. Met minder dan 20 euro per dag genereert je campagne te weinig klikken om Smart Bidding goed te laten werken. Het algoritme heeft volume nodig. Zonder dat volume maakt het dure fouten die je bij handmatig bieden had vermeden.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Nieuwe campagnes zonder historie zijn een ander geval. Als je net begint met <Link to="/blogs/google-ads/google-ads-voor-mkb-campagne-instellen" className="text-accent hover:underline">Google Ads</Link>, heb je geen conversiedata. Start dan met handmatig bieden of Enhanced CPC. Zodra je 30 tot 50 conversies per maand haalt, kun je overstappen naar Smart Bidding.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            En tot slot: als je tracking niet op orde is. Een veelgemaakte fout die we tegenkomen is dat bedrijven Smart Bidding aanzetten terwijl hun <Link to="/blogs/tracking/google-tag-manager-beginners" className="text-accent hover:underline">Google Tag Manager</Link> nog niet goed is ingesteld. Het algoritme stuurt dan op foutieve data. Het resultaat: hoge kosten en slechte leads.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe stap je over naar Smart Bidding?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De overstap van handmatig bieden naar Smart Bidding doe je het best stap voor stap. Begin niet met je belangrijkste campagne. Kies een campagne die al een stabiele stroom conversies genereert en voldoende budget heeft.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Start met Maximize Conversions als je nog niet precies weet wat je CPA of ROAS moet zijn. Laat de campagne twee weken draaien zonder wijzigingen. Bekijk daarna de gemiddelde kosten per conversie. Dat getal wordt je benchmark. Stel vervolgens een Target CPA in die 10 tot 15% onder je huidige gemiddelde ligt. Zo dwingt je het algoritme om te verbeteren zonder onrealistisch streng te zijn.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een webshop in fietsaccessoires die we begeleidden maakte deze overstap. Ze gingen van handmatig bieden met een gemiddelde CPA van 12 euro naar Target CPA van 10 euro. Na vier weken zakte de CPA naar 8,50 euro, terwijl het aantal conversies met 20% steeg. Het algoritme vond combinaties van tijdstip, apparaat en zoekterm die ze handmatig nooit hadden ontdekt.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Welke fouten worden het vaakst gemaakt?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De grootste fout is ongeduld. Ondernemers zien na drie dagen dat hun kosten per conversie hoger zijn dan verwacht en schakelen terug naar handmatig bieden. Daarmee verstoort je de leerfase en verlies je de data die het algoritme al had verzameld. Geef Smart Bidding altijd minimaal twee weken.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een tweede fout is een onrealistisch doel instellen. Als je historische CPA 25 euro is en je stelt Target CPA in op 10 euro, gaat Google minder bieden. Dat klinkt goed, maar het resultaat is dat je nauwelijks nog vertoningen krijgt. Het algoritme kan niet toveren. Stel een doel dat 10 tot 20% beter is dan je huidige prestatie, niet 60% beter.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De derde fout is wijzigingen maken tijdens de leerfase. Elke grote aanpassing aan je campagne, zoals budget wijzigen, zoekwoorden toevoegen of advertenties veranderen, start de leerfase opnieuw. Plan je wijzigingen en voer ze in een keer door. Niet elke dag een beetje.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Smart Bidding vs handmatig bieden: wat kies je?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Handmatig bieden geeft je volledige controle. Je bepaalt zelf hoeveel je per klik biedt. Dat werkt prima als je weinig zoekwoorden hebt, een klein budget en genoeg tijd om dagelijks bij te sturen. Voor campagnes met 10 tot 20 zoekwoorden en een budget van 500 euro per maand is handmatig bieden vaak goed genoeg.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Smart Bidding wint zodra je campagnes groter worden. Bij honderden zoekwoorden, meerdere campagnes en budgetten boven 2000 euro per maand kun je onmogelijk elke bieding handmatig bijsturen. Het algoritme verwerkt meer data, sneller, en op een schaal die menselijk niet haalbaar is. We merken in de praktijk dat <Link to="/blogs/google-ads/google-ads-uitbesteden-wanneer-zelf" className="text-accent hover:underline">bedrijven die professioneel adverteren</Link> vrijwel altijd Smart Bidding gebruiken.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De keuze hangt af van drie dingen: heb je genoeg conversiedata, is je tracking betrouwbaar en heb je het geduld om de leerfase uit te zitten. Als je op alle drie ja antwoordt, is Smart Bidding de betere keuze.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Wil je weten of Smart Bidding voor jouw campagnes het juiste is? Plan een gratis gesprek via onze <Link to="/contact" className="text-accent hover:underline">contactpagina</Link>. We kijken mee en geven eerlijk advies.
                        </p>
                    </div>

                    {/* FAQ Section */}
                    <section className="mt-16 pt-12 border-t border-primary/10">
                        <h2 className="text-3xl font-bold text-primary mb-8">Veelgestelde vragen</h2>
                        <div className="space-y-6 not-prose">
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat is Smart Bidding in Google Ads?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Smart Bidding is een verzameling geautomatiseerde biedstrategieen in Google Ads die machine learning gebruiken om je biedingen per veiling aan te passen. Google kijkt naar signalen zoals apparaat, locatie, tijdstip en zoekgedrag om de kans op een conversie in te schatten.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoeveel conversies heb ik nodig voor Smart Bidding?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Google adviseert minimaal 30 conversies in de afgelopen 30 dagen per campagne. In de praktijk werkt Smart Bidding het best vanaf 50 conversies per maand. Met minder data maakt het algoritme te veel inschattingsfouten.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Welke Smart Bidding strategie moet ik kiezen?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Dat hangt af van je doel. Wil je zoveel mogelijk conversies? Kies Maximize Conversions. Wil je een bepaalde ROAS halen? Kies Target ROAS. Wil je elke lead onder een bepaald bedrag houden? Kies Target CPA. Begin altijd met Maximize Conversions als je nog geen historische data hebt.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Kan Smart Bidding mijn budget verspillen?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Ja, als je het verkeerd instelt. Zonder genoeg conversiedata biedt het algoritme te hoog of op de verkeerde zoekopdrachten. Stel altijd een realistisch doel-CPA of doel-ROAS in en monitor de eerste twee weken dagelijks.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat is het verschil tussen handmatig bieden en Smart Bidding?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Bij handmatig bieden stel je zelf een maximaal bod per klik in. Bij Smart Bidding past Google het bod per veiling automatisch aan op basis van honderden signalen. Handmatig bieden geeft meer controle maar mist de snelheid en schaal van machine learning.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoe lang duurt het voordat Smart Bidding goed werkt?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Reken op een leerfase van 1 tot 2 weken. In die periode schommelen je resultaten. Het algoritme verzamelt data en past zijn model aan. Pas na twee weken kun je beoordelen of de strategie werkt. Wijzig in die periode niets aan je campagne.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Werkt Smart Bidding ook voor kleine budgetten?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Beperkt. Met een dagbudget onder de 20 euro genereert je campagne te weinig klikken en conversies om het algoritme goed te laten leren. In dat geval is handmatig bieden of Enhanced CPC vaak een betere keuze tot je meer volume hebt.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Related Links */}
                    <section className="mt-16 pt-12 border-t border-primary/10">
                        <h3 className="text-xl font-bold text-primary mb-6">Lees ook</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <Link to="/blogs/google-ads/google-ads-voor-mkb-campagne-instellen" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Google Ads voor MKB</h3>
                                <p className="text-primary/60 text-sm">Zo stel je een campagne in die echt werkt.</p>
                            </Link>
                            <Link to="/blogs/google-ads/waarom-google-ads-klikken-converteren" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Google Ads klikken maar geen conversies</h3>
                                <p className="text-primary/60 text-sm">Zes oorzaken en hoe je ze oplost.</p>
                            </Link>
                            <Link to="/blogs/tracking/marketing-tracking-conversies-meten" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Tracking goed instellen</h3>
                                <p className="text-primary/60 text-sm">Zonder goede tracking weet je niet wat werkt.</p>
                            </Link>
                        </div>
                    </section>
                </div>
            </article>

            {/* Bottom CTA */}
            <section className="w-full pb-32 px-6">
                <div className="max-w-4xl mx-auto bg-primary rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
                    <h2 className="relative z-10 font-drama italic text-background text-3xl sm:text-4xl md:text-5xl mb-6">Meer halen uit Google Ads?</h2>
                    <p className="relative z-10 font-sans text-background/70 text-lg mb-10 max-w-xl mx-auto">We kijken naar je campagnes en vertellen eerlijk wat er beter kan. Geen verplichtingen.</p>
                    <Link to="/contact" className="relative z-10 btn-magnetic inline-flex items-center justify-center bg-accent text-background font-sans font-bold text-lg px-10 py-4 rounded-[2rem] hover:bg-accent/90 transition-colors">Neem contact op</Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
