import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ChevronRight, User } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function BlogPostNegatieveZoekwoordenGoogleAds() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen selection:bg-accent/30 selection:text-dark flex flex-col bg-background">
            <Helmet>
                <title>Negatieve zoekwoorden in Google Ads: hoe en wanneer gebruik je ze | Empowers</title>
                <meta name="description" content="Negatieve zoekwoorden in Google Ads voorkomen dat je betaalt voor klikken die niets opleveren. Lees hoe je ze instelt, wanneer je ze gebruikt en welke fouten je moet vermijden." />
                <link rel="canonical" href="https://www.empowers.nl/blogs/google-ads/negatieve-zoekwoorden-google-ads" />
                <meta property="og:title" content="Negatieve zoekwoorden in Google Ads: hoe en wanneer gebruik je ze" />
                <meta property="og:description" content="Negatieve zoekwoorden voorkomen verspild advertentiebudget. Lees hoe je ze instelt en welke fouten je moet vermijden." />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://www.empowers.nl/blogs/google-ads/negatieve-zoekwoorden-google-ads" />
                <meta property="og:image" content="https://www.empowers.nl/images/blogs/negatieve-zoekwoorden-google-ads.jpg" />
                <meta property="article:published_time" content="2026-04-11" />
                <meta property="article:author" content="Empowers" />
                <meta property="article:section" content="Google Ads" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Negatieve zoekwoorden in Google Ads: hoe en wanneer gebruik je ze" />
                <meta name="twitter:description" content="Negatieve zoekwoorden voorkomen verspild budget in Google Ads. Lees hoe je ze instelt en wanneer." />

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Article",
                        "headline": "Negatieve zoekwoorden in Google Ads: hoe en wanneer gebruik je ze",
                        "description": "Negatieve zoekwoorden in Google Ads voorkomen dat je betaalt voor klikken die niets opleveren. Lees hoe je ze instelt, wanneer je ze gebruikt en welke fouten je moet vermijden.",
                        "image": "https://www.empowers.nl/images/blogs/negatieve-zoekwoorden-google-ads.jpg",
                        "datePublished": "2026-04-11T00:00:00+02:00",
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
                                    "name": "Wat zijn negatieve zoekwoorden in Google Ads?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Negatieve zoekwoorden zijn woorden of zinnen waarvoor je advertentie niet mag verschijnen. Als je 'gratis' als negatief zoekwoord toevoegt, ziet niemand die zoekt op 'gratis SEO advies' jouw advertentie. Zo voorkom je klikken van mensen die niet bij je passen."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Hoeveel negatieve zoekwoorden heb je nodig?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Er is geen vast aantal. De meeste accounts beginnen met 20 tot 50 negatieve zoekwoorden. Na drie maanden actief beheer groeit dat vaak naar 100 tot 300. Het belangrijkste is dat je wekelijks je zoektermrapport bekijkt en irrelevante zoekopdrachten direct uitsluit."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Wat is het verschil tussen negatieve zoekwoorden op campagne- en accountniveau?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Negatieve zoekwoorden op campagneniveau gelden alleen voor die ene campagne. Op accountniveau gelden ze voor alle campagnes tegelijk. Gebruik accountniveau voor breed irrelevante termen zoals 'gratis' of 'vacature'. Campagneniveau is handig als je specifieke campagnes wilt afschermen van bepaalde zoekopdrachten."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Hoe vaak moet je negatieve zoekwoorden bijwerken?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Minimaal wekelijks. Open het zoektermrapport, sorteer op kosten en sluit alles uit wat irrelevant is. In het begin van een campagne is het zelfs verstandig om elke twee tot drie dagen te controleren. Na een paar maanden stabiliseert het en volstaat wekelijks."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Kunnen negatieve zoekwoorden mijn bereik te veel beperken?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Ja, als je te breed uitsluit. Het woord 'goedkoop' uitsluiten klinkt logisch, maar als je budget-bewuste klanten bedient, mis je potentiele kopers. Gebruik de exacte of woordgroep-match voor negatieve zoekwoorden en controleer regelmatig of je niet onbedoeld relevante zoekopdrachten blokkeert."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Werken negatieve zoekwoorden ook in Performance Max campagnes?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Sinds 2024 kun je negatieve zoekwoorden toevoegen aan Performance Max campagnes op accountniveau. Dat was eerder niet mogelijk. Gebruik dit om merknamen van concurrenten en breed irrelevante termen uit te sluiten. Het geeft je meer controle over waar je budget naartoe gaat."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Wat is een negatieve zoekwoordenlijst?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Een negatieve zoekwoordenlijst is een verzameling uitsluitingswoorden die je aan meerdere campagnes tegelijk koppelt. Je maakt de lijst een keer aan en voegt hem toe aan alle relevante campagnes. Dat bespaart tijd en zorgt voor consistentie. De meeste accounts hebben minstens twee lijsten: een voor breed irrelevante termen en een branchespecifieke."
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
                                "name": "Negatieve zoekwoorden",
                                "item": "https://www.empowers.nl/blogs/google-ads/negatieve-zoekwoorden-google-ads"
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
                        <span className="text-primary truncate">Negatieve zoekwoorden</span>
                    </nav>

                    {/* Header */}
                    <header className="mb-16">
                        <div className="inline-block px-3 py-1 bg-accent/10 text-accent font-mono text-xs uppercase tracking-widest rounded-full mb-6">
                            Google Ads
                        </div>
                        <h1 className="font-sans font-bold text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight mb-8">
                            Negatieve zoekwoorden in Google Ads: hoe en wanneer gebruik je ze
                        </h1>

                        <div className="flex flex-wrap items-center gap-6 text-sm font-sans text-primary/60 border-y border-primary/10 py-6">
                            <div className="flex items-center gap-2">
                                <User className="w-4 h-4" />
                                <span>Empowers Redactie</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>11 april 2026</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>8 minuten leestijd</span>
                            </div>
                        </div>
                    </header>

                    {/* Featured Image */}
                    <figure className="w-full h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden mb-16 relative bg-primary">
                        <div className="absolute inset-0 bg-[url('/images/blogs/negatieve-zoekwoorden-google-ads.jpg')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </figure>

                    {/* Content */}
                    <div className="prose prose-lg max-w-none prose-headings:text-primary prose-headings:font-bold prose-a:text-accent prose-a:underline hover:prose-a:text-accent/80">
                        <p className="text-xl leading-relaxed text-primary/80 font-medium mb-6">
                            Negatieve zoekwoorden zijn woorden waarvoor jouw advertentie niet verschijnt. Ze voorkomen dat je betaalt voor klikken die niets opleveren. Een goed onderhouden lijst met negatieve zoekwoorden bespaart de gemiddelde MKB-adverteerder 10 tot 25 procent van het maandbudget. Zonder ze gooi je geld weg aan zoekopdrachten die niet bij jouw aanbod passen.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat zijn negatieve zoekwoorden precies?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            In Google Ads bepaal je op welke zoekwoorden je advertentie verschijnt. Maar je bepaalt ook op welke zoekwoorden je juist niet wilt verschijnen. Dat zijn negatieve zoekwoorden. Stel: je verkoopt premium kantoormeubelen. Dan wil je niet dat iemand die zoekt op "gratis bureau ophalen" jouw advertentie ziet. "Gratis" is dan een negatief zoekwoord.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Google toont je advertentie standaard voor veel meer zoekopdrachten dan je verwacht. Zeker bij brede zoekwoorden. Een zoekwoord als "kantoormeubelen" kan je advertentie triggeren voor "kantoormeubelen tweedehands", "kantoormeubelen IKEA" of "kantoormeubelen gratis ophalen". Niet allemaal relevant voor een premium aanbieder.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Negatieve zoekwoorden filteren dat soort verkeer eruit. Ze werken als een poortwachter: alleen de zoekopdrachten die echt bij je passen komen door. Zonder die poortwachter betaal je voor iedereen die langskomt, ook als ze nooit klant worden.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Waarom zijn negatieve zoekwoorden zo belangrijk voor je budget?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Bij onze klanten zien we dat accounts zonder negatieve zoekwoorden gemiddeld 15 tot 30 procent van het budget verspillen aan irrelevante klikken. Dat is bij een maandbudget van 2000 euro al snel 300 tot 600 euro per maand die niets oplevert. Over een jaar is dat 3600 tot 7200 euro aan verspilling.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Het gaat niet alleen om geld. Irrelevante klikken drukken ook je kwaliteitsscore omlaag. Google ziet dat mensen op je advertentie klikken maar snel weer weggaan. Dat signaal vertelt Google dat je advertentie niet relevant is. Het gevolg: je betaalt meer per klik en je positie daalt. Meer over kwaliteitsscore lees je in onze <Link to="/blogs/google-ads/google-ads-quality-score-verhogen" className="text-accent hover:underline">blog over Quality Score verhogen</Link>.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            We merken in de praktijk dat een grondige opschoning van negatieve zoekwoorden in de eerste maand al zichtbaar effect heeft. De kosten per conversie dalen, de klikratio stijgt en het budget gaat naar de zoekopdrachten die echt tellen.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe vind je de juiste negatieve zoekwoorden?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De belangrijkste bron is het zoektermrapport in Google Ads. Dit rapport laat zien welke zoekopdrachten daadwerkelijk je advertentie hebben getriggerd. Open het rapport, sorteer op kosten en bekijk elke zoekopdracht. Klikte er iemand op "kantoormeubelen marktplaats"? Dan voeg je "marktplaats" toe als negatief zoekwoord.
                        </p>

                        <h3 className="text-xl font-semibold text-primary mt-10 mb-4">Zoektermrapport analyseren</h3>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Ga naar je campagne, klik op "Zoektermen" en filter op de afgelopen 30 dagen. Sorteer op kosten van hoog naar laag. De duurste irrelevante klikken pak je als eerste aan. Let op patronen: als je regelmatig zoekopdrachten ziet met "vacature", "opleiding" of "gratis", voeg je die woorden in een keer toe aan je negatieve lijst.
                        </p>

                        <h3 className="text-xl font-semibold text-primary mt-10 mb-4">Vooraf nadenken over uitsluiting</h3>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Wacht niet tot je geld hebt verspild. Denk bij het opzetten van een campagne al na over woorden die niet passen. Verkoop je diensten? Sluit dan direct termen uit als "vacature", "salaris", "stage", "opleiding" en "gratis". Verkoop je dure producten? Sluit "goedkoop", "budget" en "tweedehands" uit. Dit soort basislijsten besparen je vanaf dag een onnodig geld.
                        </p>

                        <h3 className="text-xl font-semibold text-primary mt-10 mb-4">Concurrentie-analyse</h3>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Zoek in Google op je eigen zoekwoorden en kijk welke advertenties verschijnen. Als je advertenties van concurrenten ziet die totaal andere producten verkopen, gebruiken jullie waarschijnlijk dezelfde zoekwoorden maar met een andere intentie. Die overlap los je op met negatieve zoekwoorden. Hoe je CPC verlaagt door slimmer te targeten, lees je in onze <Link to="/blogs/google-ads/verlaag-cpc-google-ads-minder" className="text-accent hover:underline">blog over CPC verlagen</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Welke match-types bestaan er voor negatieve zoekwoorden?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Net als bij gewone zoekwoorden werken negatieve zoekwoorden met match-types. Maar er zijn drie typen en ze werken net iets anders dan bij reguliere zoekwoorden.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Brede match is de standaard. Als je "rode schoenen" als breed negatief zoekwoord toevoegt, wordt je advertentie niet getoond als iemand zoekt op iets dat beide woorden bevat, in willekeurige volgorde. Maar het blokkeert niet op synoniemen of variaties.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Woordgroep-match sluit zoekopdrachten uit die de exacte woordgroep bevatten in dezelfde volgorde. "Rode schoenen" als woordgroep blokkeert "rode schoenen kopen" maar niet "schoenen rood".
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Exacte match sluit alleen de exacte zoekopdracht uit. "Rode schoenen" blokkeert alleen "rode schoenen" en niets anders. Gebruik exacte match als je heel precies wilt zijn en brede match als je een term in alle varianten wilt uitsluiten.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe stel je negatieve zoekwoorden in: stap voor stap</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Het instellen is simpel. Ga naar je Google Ads account, open de campagne waar je negatieve zoekwoorden wilt toevoegen en klik op "Zoekwoorden" in het linkermenu. Kies vervolgens "Negatieve zoekwoorden" en klik op het plusje om woorden toe te voegen.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Je kunt ze toevoegen op drie niveaus: advertentiegroep, campagne of account. Voor termen die nergens relevant zijn, zoals "gratis" of "vacature", kies je accountniveau. Voor specifiekere uitsluitingen kies je campagneniveau. Advertentiegroepniveau gebruik je zelden, maar het kan handig zijn als je twee advertentiegroepen hebt die overlappende zoekwoorden targeten.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een veelgemaakte fout die we tegenkomen is alles op campagneniveau zetten. Dat werkt, maar het kost meer tijd. Als je dezelfde uitsluitingen in vijf campagnes apart moet invoeren, ben je vijf keer werk aan het doen. Maak in plaats daarvan een negatieve zoekwoordenlijst aan via "Tools en instellingen" en koppel die aan alle relevante campagnes tegelijk.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Welke fouten moet je vermijden?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De grootste fout is niet beginnen. Veel adverteerders zetten een campagne op en vergeten de negatieve zoekwoorden. Na drie maanden vragen ze zich af waarom de resultaten tegenvallen. Het antwoord staat in het zoektermrapport.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een andere fout is te breed uitsluiten. Als je "advies" uitsluit omdat je geen gratis advies wilt geven, blokkeer je ook "advies aanvragen" en "adviesgesprek plannen". Dat zijn juist de zoekopdrachten die je wilt. Gebruik in zo'n geval "gratis advies" als woordgroep in plaats van "advies" als los woord.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een derde fout is het niet bijhouden. Negatieve zoekwoorden zijn geen eenmalige actie. Elke week komen er nieuwe zoekopdrachten bij. Als je twee maanden niet kijkt, kunnen er tientallen irrelevante klikken zijn binnengekomen. Maak er een vast onderdeel van je wekelijkse routine. Meer tips over veelgemaakte Google Ads fouten vind je in onze <Link to="/blogs/google-ads/meest-voorkomende-problemen-google-ads" className="text-accent hover:underline">blog over de meest voorkomende problemen</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe onderhoud je je negatieve zoekwoordenlijst?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Plan een vast moment per week om je zoektermrapport te bekijken. Dinsdag of woensdag werkt goed: dan heb je genoeg data van de afgelopen week. Open het rapport, filter op klikken groter dan nul en sorteer op kosten. Alles wat niet relevant is, voeg je direct toe.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Organiseer je negatieve zoekwoorden in lijsten. Een basislijst met breed irrelevante termen die voor elk bedrijf gelden: "gratis", "vacature", "stage", "download", "pdf". Een branchespecifieke lijst met termen die niet bij jouw aanbod passen. En eventueel een concurrentenlijst met merknamen van concurrenten die je wilt uitsluiten.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Na drie maanden heb je een stevige basis. Daarna verschuift het onderhoud van dagelijks naar wekelijks. Maar stop er nooit mee. Zoekopdrachten veranderen. Seizoenen wisselen. Nieuwe trends komen op. Je negatieve zoekwoorden moeten meebewegen.
                        </p>

                        <p className="text-primary/80 leading-relaxed mb-6">
                            Wil je weten hoeveel budget er nu weglekt in jouw Google Ads account? We bekijken je zoektermrapport en geven binnen een week een concreet overzicht. Plan een gesprek via onze <Link to="/contact" className="text-accent hover:underline">contactpagina</Link>.
                        </p>
                    </div>

                    {/* FAQ Section */}
                    <section className="mt-16 pt-12 border-t border-primary/10">
                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Veelgestelde vragen</h2>
                        <div className="space-y-6 not-prose">
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat zijn negatieve zoekwoorden in Google Ads?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Negatieve zoekwoorden zijn woorden of zinnen waarvoor je advertentie niet mag verschijnen. Als je "gratis" als negatief zoekwoord toevoegt, ziet niemand die zoekt op "gratis SEO advies" jouw advertentie. Zo voorkom je klikken van mensen die niet bij je passen.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoeveel negatieve zoekwoorden heb je nodig?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Er is geen vast aantal. De meeste accounts beginnen met 20 tot 50 negatieve zoekwoorden. Na drie maanden actief beheer groeit dat vaak naar 100 tot 300. Het belangrijkste is dat je wekelijks je zoektermrapport bekijkt en irrelevante zoekopdrachten direct uitsluit.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat is het verschil tussen negatieve zoekwoorden op campagne- en accountniveau?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Negatieve zoekwoorden op campagneniveau gelden alleen voor die ene campagne. Op accountniveau gelden ze voor alle campagnes tegelijk. Gebruik accountniveau voor breed irrelevante termen zoals "gratis" of "vacature". Campagneniveau is handig als je specifieke campagnes wilt afschermen van bepaalde zoekopdrachten.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoe vaak moet je negatieve zoekwoorden bijwerken?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Minimaal wekelijks. Open het zoektermrapport, sorteer op kosten en sluit alles uit wat irrelevant is. In het begin van een campagne is het zelfs verstandig om elke twee tot drie dagen te controleren. Na een paar maanden stabiliseert het en volstaat wekelijks.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Kunnen negatieve zoekwoorden mijn bereik te veel beperken?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Ja, als je te breed uitsluit. Het woord "goedkoop" uitsluiten klinkt logisch, maar als je budget-bewuste klanten bedient, mis je potentiele kopers. Gebruik de exacte of woordgroep-match voor negatieve zoekwoorden en controleer regelmatig of je niet onbedoeld relevante zoekopdrachten blokkeert.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Werken negatieve zoekwoorden ook in Performance Max campagnes?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Sinds 2024 kun je negatieve zoekwoorden toevoegen aan Performance Max campagnes op accountniveau. Dat was eerder niet mogelijk. Gebruik dit om merknamen van concurrenten en breed irrelevante termen uit te sluiten. Het geeft je meer controle over waar je budget naartoe gaat.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat is een negatieve zoekwoordenlijst?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Een negatieve zoekwoordenlijst is een verzameling uitsluitingswoorden die je aan meerdere campagnes tegelijk koppelt. Je maakt de lijst een keer aan en voegt hem toe aan alle relevante campagnes. Dat bespaart tijd en zorgt voor consistentie. De meeste accounts hebben minstens twee lijsten: een voor breed irrelevante termen en een branchespecifieke.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Related Links */}
                    <section className="mt-16 pt-12 border-t border-primary/10">
                        <h3 className="text-xl font-bold text-primary mb-6">Lees ook</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <Link to="/blogs/google-ads/google-ads-quality-score-verhogen" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Quality Score verhogen</h3>
                                <p className="text-primary/60 text-sm">7 concrete tips om je kwaliteitsscore in Google Ads te verbeteren.</p>
                            </Link>
                            <Link to="/blogs/google-ads/verlaag-cpc-google-ads-minder" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">CPC verlagen in Google Ads</h3>
                                <p className="text-primary/60 text-sm">Betaal minder per klik zonder bereik in te leveren.</p>
                            </Link>
                            <Link to="/blogs/google-ads/meest-voorkomende-problemen-google-ads" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Veelgemaakte Google Ads fouten</h3>
                                <p className="text-primary/60 text-sm">De 9 fouten die bijna elk account maakt en hoe je ze oplost.</p>
                            </Link>
                        </div>
                    </section>
                </div>
            </article>

            {/* Bottom CTA */}
            <section className="w-full pb-32 px-6">
                <div className="max-w-4xl mx-auto bg-primary rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
                    <h2 className="relative z-10 font-drama italic text-background text-3xl sm:text-4xl md:text-5xl mb-6">Hoeveel budget lekt er weg in jouw account?</h2>
                    <p className="relative z-10 font-sans text-background/70 text-lg mb-10 max-w-xl mx-auto">We bekijken je zoektermrapport en laten zien waar je direct kunt besparen. Geen verplichtingen, wel een helder overzicht.</p>
                    <Link to="/contact" className="relative z-10 btn-magnetic inline-flex items-center justify-center bg-accent text-background font-sans font-bold text-lg px-10 py-4 rounded-[2rem] hover:bg-accent/90 transition-colors">Neem contact op</Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
