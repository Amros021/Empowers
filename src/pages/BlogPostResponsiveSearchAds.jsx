import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ChevronRight, User } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function BlogPostResponsiveSearchAds() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen selection:bg-accent/30 selection:text-dark flex flex-col bg-background">
            <Helmet>
                <title>Responsive Search Ads uitgelegd: zo maak je ze effectief | Empowers</title>
                <meta name="description" content="Responsive Search Ads zijn het standaard advertentieformaat in Google Ads. Lees hoe je sterke kopregels en beschrijvingen schrijft, welke fouten je voorkomt en hoe je de Ad Strength score verhoogt." />
                <link rel="canonical" href="https://www.empowers.nl/blogs/google-ads/responsive-search-ads-uitgelegd-effectief" />
                <meta property="og:title" content="Responsive Search Ads uitgelegd: zo maak je ze effectief" />
                <meta property="og:description" content="Wat Responsive Search Ads zijn, hoe je ze opbouwt en welke instellingen het verschil maken tussen een gemiddelde en een toppresterende campagne." />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://www.empowers.nl/blogs/google-ads/responsive-search-ads-uitgelegd-effectief" />
                <meta property="og:image" content="https://www.empowers.nl/images/blogs/responsive-search-ads-uitgelegd-effectief.jpg" />
                <meta property="article:published_time" content="2026-04-24T13:00:00+02:00" />
                <meta property="article:author" content="Empowers" />
                <meta property="article:section" content="Google Ads" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Responsive Search Ads uitgelegd: zo maak je ze effectief" />
                <meta name="twitter:description" content="Praktische gids voor RSA's: van kopregels tot pinning, Ad Strength en assetrapportage." />

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Article",
                        "headline": "Responsive Search Ads uitgelegd: zo maak je ze effectief",
                        "description": "Responsive Search Ads zijn het standaard advertentieformaat in Google Ads. Lees hoe je sterke kopregels en beschrijvingen schrijft, welke fouten je voorkomt en hoe je de Ad Strength score verhoogt.",
                        "image": "https://www.empowers.nl/images/blogs/responsive-search-ads-uitgelegd-effectief.jpg",
                        "datePublished": "2026-04-24T13:00:00+02:00",
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
                                    "name": "Wat is een Responsive Search Ad precies?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Een Responsive Search Ad (RSA) is het standaard advertentieformaat in Google Ads. Je levert tot 15 kopregels en 4 beschrijvingen aan en Google combineert deze automatisch tot duizenden mogelijke varianten. Per zoekopdracht kiest het algoritme de combinatie die op dat moment de hoogste kans heeft op een klik. Sinds 2022 zijn RSA's het enige beschikbare advertentietype voor nieuwe zoekcampagnes."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Hoeveel kopregels en beschrijvingen moet je aanleveren?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Lever minimaal 10 unieke kopregels en de volle 4 beschrijvingen aan. Minder kopregels geven Google te weinig materiaal om te testen. Onderzoek van Google laat zien dat campagnes met de volle 15 kopregels gemiddeld 7 procent meer conversies opleveren dan campagnes met slechts 5 kopregels. Variatie in lengte en boodschap is daarbij belangrijker dan het maximum."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Wat is Ad Strength en hoe belangrijk is die score?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Ad Strength is een score die Google geeft aan jouw RSA op basis van diversiteit en relevantie van assets. De waardes zijn Poor, Average, Good en Excellent. Advertenties met Good of Excellent krijgen meer impressies dan dezelfde advertentie met een lagere score. Het is geen directe rankingfactor, maar campagnes met hogere Ad Strength laten in onze klantdata structureel 5 tot 10 procent betere CTR's zien."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Wanneer gebruik je pinning bij Responsive Search Ads?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Pinning gebruik je alleen als een specifieke kopregel of beschrijving altijd op een vaste plek moet staan. Bijvoorbeeld een verplichte juridische tekst, jouw merknaam of een specifieke aanbieding. Te veel pinnen verlaagt je Ad Strength en beperkt het algoritme. Voor 90 procent van de campagnes geldt: pin niets en laat Google testen."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Hoeveel RSA's per advertentiegroep moet je hebben?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Maak per advertentiegroep 2 tot 3 Responsive Search Ads aan. Eén variant met focus op de USP, één met focus op aanbieding of urgentie en eventueel een derde met een andere invalshoek. Meer dan 3 verdunt het verkeer waardoor het algoritme langer doet over een statistisch betrouwbaar oordeel."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Hoe meet je welke kopregels het beste werken?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "In het assetrapport van Google Ads zie je per kopregel en beschrijving een prestatielabel: Best, Good, Low of Pending. Deze labels werken pas betrouwbaar bij minimaal 5000 impressies per asset. Vervang de Low-presterende assets elke 4 tot 6 weken door nieuwe varianten. Zo blijft jouw advertentie continu verbeteren zonder dat je de hele advertentie pauzeert."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Kunnen Responsive Search Ads samenwerken met andere advertentietypes?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "RSA's draaien naast extensies zoals Sitelinks, Callouts en Structured Snippets. Deze extensies vergroten je advertentie in de SERP en verhogen de CTR. Daarnaast kun je RSA's combineren met Performance Max en Demand Gen voor brede dekking, maar binnen een zoekcampagne blijft RSA het enige zoekformaat."
                                    }
                                }
                            ]
                        },
                        "breadcrumb": {
                            "@type": "BreadcrumbList",
                            "itemListElement": [
                                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.empowers.nl" },
                                { "@type": "ListItem", "position": 2, "name": "Google Ads", "item": "https://www.empowers.nl/blogs/google-ads" },
                                { "@type": "ListItem", "position": 3, "name": "Responsive Search Ads uitgelegd" }
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
                        <span className="text-primary/30">Responsive Search Ads uitgelegd</span>
                    </nav>

                    {/* Header */}
                    <header className="mb-16">
                        <div className="inline-block px-3 py-1 bg-accent/10 text-accent font-mono text-xs uppercase tracking-widest rounded-full mb-6">
                            Google Ads
                        </div>
                        <h1 className="font-sans font-bold text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight mb-8">
                            Responsive Search Ads uitgelegd: zo maak je ze effectief
                        </h1>
                        <div className="flex flex-wrap items-center gap-6 text-sm font-sans text-primary/60 border-y border-primary/10 py-6">
                            <span className="flex items-center gap-2"><User size={14} />Empowers Redactie</span>
                            <span className="flex items-center gap-2"><Calendar size={14} />24 apr 2026</span>
                            <span className="flex items-center gap-2"><Clock size={14} />8 min leestijd</span>
                        </div>
                    </header>

                    {/* Featured Image */}
                    <figure className="w-full h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden mb-16 relative bg-primary">
                        <div className="absolute inset-0 bg-[url('/images/blogs/responsive-search-ads-uitgelegd-effectief.jpg')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </figure>

                    {/* Content */}
                    <div className="prose prose-lg max-w-none">

                        <p className="text-xl leading-relaxed text-primary/80 font-medium mb-6">
                            Responsive Search Ads zijn sinds 2022 het enige zoekformaat dat Google nog accepteert. Toch worden ze door de meeste adverteerders nog steeds behandeld als een veredelde tekstadvertentie. Dat kost geld. Wie het format echt begrijpt, haalt structureel meer kliks tegen lagere kosten. In dit artikel lees je hoe je sterke RSA's bouwt, waar de meeste fouten zitten en welke instellingen het verschil maken tussen Average en Excellent.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat is een Responsive Search Ad?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een Responsive Search Ad, kortweg RSA, is een advertentieformaat in Google Ads waarbij jij tot 15 kopregels en 4 beschrijvingen aanlevert. Google combineert deze in real-time tot duizenden mogelijke advertenties. Per zoekopdracht en per gebruiker kiest het algoritme de combinatie waarvan de kans op een klik op dat moment het hoogst is.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De gedachte erachter is simpel. Geen mens kan vooraf bedenken welke combinatie van woorden voor elke individuele zoekopdracht het beste werkt. Een algoritme dat miljoenen impressies per dag verwerkt, kan dat wel. Jij levert het materiaal, Google bouwt de advertentie ter plekke.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Sinds juni 2022 kun je geen Expanded Text Ads meer aanmaken. Wie nog campagnes draait die op dit oude formaat leunen, mist niet alleen functionaliteit maar krijgt ook minder vertoningen toegewezen. Voor een dieper beeld van waarom Google Ads campagnes soms wel klikken maar niet converteren lees je <Link to="/blogs/google-ads/waarom-google-ads-klikken-converteren" className="text-accent hover:underline">deze gids over Google Ads die niet converteren</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Waarom RSA's beter presteren dan oude tekstadvertenties</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Het grote voordeel zit in machine learning. Waar een Expanded Text Ad één vaste combinatie was, test een RSA continu welke kopregel-beschrijving combinatie de beste resultaten oplevert per zoekopdracht. Dat betekent meer relevantie voor de gebruiker en een hogere CTR voor jou.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Cijfers van Google zelf laten zien dat campagnes die overstapten van ETA naar RSA gemiddeld 7 procent meer conversies haalden, zonder hoger budget. In de praktijk bij onze klanten zien we vergelijkbare cijfers, mits de assets divers genoeg zijn. Een RSA met 5 kopregels die op elkaar lijken levert geen voordeel op. Een RSA met 12 verschillende invalshoeken wel.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een tweede voordeel: RSA's passen zich aan op apparaat en zoekcontext. Op mobiel verschijnen vaak kortere kopregels, op desktop juist langere combinaties met extra beschrijvingen. Eén advertentie, meerdere optimale presentaties. Dat haal je niet uit een statisch format.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">De bouwstenen: kopregels, beschrijvingen en URL's</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een RSA bestaat uit drie hoofdonderdelen. Tot 15 kopregels van maximaal 30 tekens. Tot 4 beschrijvingen van maximaal 90 tekens. En een Final URL plus optionele Display URL paden. Google toont meestal 2 tot 3 kopregels en 1 tot 2 beschrijvingen tegelijk in de SERP.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Het verleidelijke is om snel een paar kopregels te schrijven en door te gaan. Wie zich beperkt tot 5 kopregels geeft het algoritme te weinig materiaal om iets te testen. De combinatorische ruimte is dan zo klein dat Google nauwelijks kan optimaliseren. Lever altijd minimaal 10 unieke kopregels aan en de volle 4 beschrijvingen.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Variatie zit niet alleen in de boodschap. Maak ook variatie in lengte. Schrijf enkele korte, krachtige kopregels van 15 tekens en daarnaast langere kopregels die de hele 30 tekens benutten. Het algoritme kiest dan zelf wat past bij de beschikbare ruimte op het scherm van de gebruiker.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe schrijf je kopregels die werken?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Werk met verschillende invalshoeken per RSA. Verdeel jouw 15 kopregels grofweg in vijf categorieën: dienst- of productnaam met zoekwoord, USP met cijfer of bewijs, urgentie of aanbieding, doelgroep-specifieke aanspraak en een directe call-to-action. Wie alle 15 kopregels in dezelfde toon schrijft, mist het hele punt van het format.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Concrete voorbeelden voor een loodgieter in Amersfoort: "Loodgieter Amersfoort" voor de zoekwoord-match, "Binnen 2 uur ter plaatse" voor urgentie, "9.6 op Trustpilot" voor sociaal bewijs, "Spoedreparatie nodig?" voor pijnpunt-aansprekend, "Bel direct 06-..." voor de actie. Vijf kopregels, vijf functies. Dan vul je nog 10 varianten met andere combinaties.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Werk altijd met het hoofdzoekwoord in minimaal 3 kopregels. Google's algoritme weegt zoekwoord-match nog steeds zwaar mee in de Quality Score. Tegelijk wil je niet alle 15 kopregels het zoekwoord laten herhalen, want dan verlies je variatie. Een goede vuistregel: 3 tot 5 kopregels met zoekwoord, de rest gericht op USP en CTA.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Beschrijvingen: de plek voor jouw bewijs</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De 4 beschrijvingen krijgen vaak minder aandacht dan de kopregels, terwijl ze juist de plek zijn om verkoop te maken. Hier zet je het bewijs neer. Concrete cijfers, specifieke voordelen, garanties en de directe vervolgstap.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Schrijf elke beschrijving met een ander accent. Beschrijving 1 focust op het belangrijkste voordeel met cijfer. Beschrijving 2 verschuift naar bewijs of garantie. Beschrijving 3 spreekt een specifieke pijn of behoefte aan. Beschrijving 4 herhaalt de actie en voegt urgentie toe. Vier beschrijvingen, vier hoeken op dezelfde verkoop.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Vermijd vage taal. "Wij bieden hoge kwaliteit en goede service" zegt niets. "Gemiddeld 4.8 sterren over 200+ reviews" is veel concreter. Cijfers, namen en specifieke beloftes overtuigen, abstracte beloftes wegen niet mee. Voor meer over advertentieteksten die converteren lees je <Link to="/blogs/google-ads/schrijf-google-ads-advertentie-geklikt" className="text-accent hover:underline">hoe je Google Ads schrijft die echt geklikt worden</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Ad Strength: wat het echt betekent</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Naast je RSA verschijnt een score: Poor, Average, Good of Excellent. Dit is Ad Strength. De score meet diversiteit van assets, aantal aangeleverde varianten en relevantie tussen kopregels en zoekwoorden. Veel adverteerders zien de score voor het eerst en weten niet wat ermee te doen.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Onderzoek van Google laat zien dat een verbetering van Poor naar Excellent gemiddeld 9 procent meer conversies oplevert binnen dezelfde campagne. Het is geen directe rankingfactor zoals Quality Score, maar advertenties met hogere Ad Strength krijgen meer impressies binnen dezelfde veiling. Er hangt dus indirect veel van af.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Praktische verbeterstappen volgen direct uit de Ad Strength tips die Google in de interface toont. Voeg meer unieke kopregels toe, gebruik populaire zoekwoorden in kopregels en zorg dat je beschrijvingen niet inhoudelijk overlappen. Zelfs één extra unieke kopregel kan een Average advertentie naar Good tillen. Een dieper inzicht in Quality Score lees je in <Link to="/blogs/google-ads/google-ads-quality-score-verhogen" className="text-accent hover:underline">deze gids over Quality Score verhogen</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Pinning: wanneer wel en wanneer niet</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Met pinning leg je een specifieke kopregel of beschrijving vast op een vaste positie. Pin een kopregel op positie 1 en die staat altijd vooraan in elke combinatie. Klinkt handig, maar het verlaagt direct de combinatorische ruimte van Google. Je gaat van duizenden naar een handvol mogelijke combinaties.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Pin alleen als het echt moet. Drie geldige redenen: een verplichte juridische tekst (denk aan financiële diensten of farma), jouw merknaam die altijd zichtbaar moet zijn op een specifieke plek, of een tijdelijke verplichte aanbieding zoals een korting met einddatum. Buiten die drie scenario's: niet pinnen.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            In onze klantenportefeuille zien we dat campagnes met overmatige pinning structureel 15 tot 25 procent slechter presteren dan campagnes zonder pinning. Geef het algoritme de ruimte om te testen. Dat is precies waarvoor het format is gemaakt.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoeveel RSA's per advertentiegroep?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De richtlijn is 2 tot 3 RSA's per advertentiegroep. Eén variant met focus op de USP, één met focus op aanbieding of urgentie, eventueel een derde met een totaal andere invalshoek (bijvoorbeeld een testimonial-stijl). Deze drie advertenties testen verschillende hoofdboodschappen en geven het algoritme keuze tussen substantieel verschillende stijlen.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Meer dan 3 RSA's verdunt het verkeer. Per RSA zijn er minimaal 5000 impressies nodig voor statistisch betrouwbare data per asset. Met 5 RSA's in één groep duurt het maanden voor je betrouwbaar kan zien wat werkt. Met 3 RSA's heb je binnen 3 tot 4 weken bruikbare cijfers.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Het assetrapport: jouw belangrijkste optimalisatietool</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            In de Google Ads interface vind je per RSA een assetrapport. Dit rapport toont per kopregel en beschrijving een prestatielabel: Best, Good, Low of Pending. Dit is de belangrijkste data om je RSA continu te verbeteren.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Pending betekent dat het asset nog te weinig impressies heeft. Wacht tot 5000 impressies. Low betekent dat het asset onder gemiddeld presteert ten opzichte van de andere kopregels in dezelfde RSA. Vervang Low-assets elke 4 tot 6 weken door nieuwe varianten. Best en Good laat je staan en gebruik je als blueprint voor nieuwe kopregels.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Belangrijk inzicht: een Low-asset in advertentie A kan Best zijn in advertentie B. De prestatielabels zijn relatief binnen één RSA. Vergelijk dus altijd binnen dezelfde advertentie en niet over campagnes heen. Voor systematische rapportage van campagnes lees je <Link to="/blogs/google-ads/meet-roi-google-ads-campagne" className="text-accent hover:underline">hoe je de ROI van een Google Ads campagne meet</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Veelgemaakte fouten bij RSA's</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De grootste fout is te weinig kopregels aanleveren. We zien regelmatig accounts waar elke RSA slechts 5 kopregels heeft, allemaal varianten op hetzelfde thema. Het algoritme kan niets met zo'n smalle test. Resultaat: een Ad Strength van Poor en CPC's die 30 procent boven het marktgemiddelde liggen.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Tweede fout: alle kopregels eindigen op een uitroepteken of beginnen met dezelfde aanspreekvorm. Variatie in toon mist dan volledig. Schrijf afwisselend in vraagvorm, statement-vorm, met cijfers, met naam van de stad en zonder. Hoe meer variatie in vorm, hoe meer combinaties Google effectief kan testen.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De derde fout zien we bij meer ervaren accounts: te veel pinnen. Een advertentiemanager die alle kopregels vastpint omdat hij denkt zelf te weten wat het beste werkt, maakt van een RSA in de praktijk weer een ETA. Het format wordt dan een lege huls. Vertrouw het algoritme. Dat is geen geloof, dat is data van miljarden veilingen.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">RSA's in combinatie met extensies en ander materiaal</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een RSA staat zelden alleen. Combineer altijd met assetextensies: Sitelinks naar je belangrijkste pagina's, Callouts met USP's, Structured Snippets voor diensten- of productlijsten en Call Extensions als telefonisch contact relevant is. Deze extensies vergroten je advertentie in de SERP en verhogen de CTR met 10 tot 15 procent.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Sinds 2024 worden assets uit extensies bij Performance Max en Demand Gen gedeeld. Goed nieuws: de tijd die je in het schrijven van extensies steekt, levert in meerdere campagnetypes resultaat op. Eén bibliotheek aan kopregels, beschrijvingen en sitelinks bedient je hele Google Ads-account.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Stap-voor-stap een RSA bouwen</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Begin altijd met de zoekintentie van de advertentiegroep. Wat zoekt iemand die deze groep triggert? Welk antwoord verwacht hij in de eerste 2 seconden? Schrijf dan 5 kopregels die dat directe antwoord geven, met het zoekwoord erin verwerkt.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Vul aan met 5 kopregels die jouw USP's vertalen naar concrete cijfers en bewijs. Sluit af met 5 kopregels die de actie aanduiden, urgentie creëren of een specifiek aanbod noemen. Doe hetzelfde voor de 4 beschrijvingen, met telkens een ander accent. Test minimaal 4 weken voor je conclusies trekt. De eerste 2 weken is data ruis, daarna komt patroon naar voren.
                        </p>

                    </div>

                    {/* FAQ */}
                    <section className="mt-16 pt-12 border-t border-primary/10">
                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Veelgestelde vragen over Responsive Search Ads</h2>
                        <div className="space-y-6 not-prose">
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat is een Responsive Search Ad precies?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Een Responsive Search Ad (RSA) is het standaard advertentieformaat in Google Ads. Je levert tot 15 kopregels en 4 beschrijvingen aan en Google combineert deze automatisch tot duizenden mogelijke varianten. Per zoekopdracht kiest het algoritme de combinatie die op dat moment de hoogste kans heeft op een klik. Sinds 2022 zijn RSA's het enige beschikbare advertentietype voor nieuwe zoekcampagnes.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoeveel kopregels en beschrijvingen moet je aanleveren?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Lever minimaal 10 unieke kopregels en de volle 4 beschrijvingen aan. Minder kopregels geven Google te weinig materiaal om te testen. Onderzoek van Google laat zien dat campagnes met de volle 15 kopregels gemiddeld 7 procent meer conversies opleveren dan campagnes met slechts 5 kopregels. Variatie in lengte en boodschap is daarbij belangrijker dan het maximum.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat is Ad Strength en hoe belangrijk is die score?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Ad Strength is een score die Google geeft aan jouw RSA op basis van diversiteit en relevantie van assets. De waardes zijn Poor, Average, Good en Excellent. Advertenties met Good of Excellent krijgen meer impressies dan dezelfde advertentie met een lagere score. Het is geen directe rankingfactor, maar campagnes met hogere Ad Strength laten in onze klantdata structureel 5 tot 10 procent betere CTR's zien.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wanneer gebruik je pinning bij Responsive Search Ads?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Pinning gebruik je alleen als een specifieke kopregel of beschrijving altijd op een vaste plek moet staan. Bijvoorbeeld een verplichte juridische tekst, jouw merknaam of een specifieke aanbieding. Te veel pinnen verlaagt je Ad Strength en beperkt het algoritme. Voor 90 procent van de campagnes geldt: pin niets en laat Google testen.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoeveel RSA's per advertentiegroep moet je hebben?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Maak per advertentiegroep 2 tot 3 Responsive Search Ads aan. Eén variant met focus op de USP, één met focus op aanbieding of urgentie en eventueel een derde met een andere invalshoek. Meer dan 3 verdunt het verkeer waardoor het algoritme langer doet over een statistisch betrouwbaar oordeel.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoe meet je welke kopregels het beste werken?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">In het assetrapport van Google Ads zie je per kopregel en beschrijving een prestatielabel: Best, Good, Low of Pending. Deze labels werken pas betrouwbaar bij minimaal 5000 impressies per asset. Vervang de Low-presterende assets elke 4 tot 6 weken door nieuwe varianten. Zo blijft jouw advertentie continu verbeteren zonder dat je de hele advertentie pauzeert.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Kunnen Responsive Search Ads samenwerken met andere advertentietypes?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">RSA's draaien naast extensies zoals Sitelinks, Callouts en Structured Snippets. Deze extensies vergroten je advertentie in de SERP en verhogen de CTR. Daarnaast kun je RSA's combineren met Performance Max en Demand Gen voor brede dekking, maar binnen een zoekcampagne blijft RSA het enige zoekformaat.</p>
                            </div>
                        </div>
                    </section>

                    {/* Related */}
                    <section className="mt-16 pt-12 border-t border-primary/10">
                        <h3 className="text-xl font-bold text-primary mb-6">Lees ook</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <Link to="/blogs/google-ads/google-ads-quality-score-verhogen" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Quality Score verhogen</h3>
                                <p className="text-primary/60 text-sm">7 concrete tips om jouw Quality Score in Google Ads omhoog te krijgen.</p>
                            </Link>
                            <Link to="/blogs/google-ads/schrijf-google-ads-advertentie-geklikt" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Advertentie die geklikt wordt</h3>
                                <p className="text-primary/60 text-sm">Zo schrijf je een Google Ads advertentie die opvalt en kliks oplevert.</p>
                            </Link>
                            <Link to="/blogs/google-ads/google-ads-extensies-altijd-gebruiken" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Google Ads extensies</h3>
                                <p className="text-primary/60 text-sm">Welke extensies altijd aan moeten staan voor maximale CTR.</p>
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
                        Sterkere RSA's, meer omzet?
                    </h2>
                    <p className="relative z-10 font-sans text-background/70 text-lg mb-10 max-w-xl mx-auto">
                        We scannen jouw Google Ads-account gratis op Ad Strength, assetgebruik en pinning. Binnen een week weet je waar de winst zit.
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
