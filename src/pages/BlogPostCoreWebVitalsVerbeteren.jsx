import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ChevronRight, User } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function BlogPostCoreWebVitalsVerbeteren() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen selection:bg-accent/30 selection:text-dark flex flex-col bg-background">
            <Helmet>
                <title>Core Web Vitals verbeteren: zo scoort jouw website beter in Google | Empowers</title>
                <meta name="description" content="Core Web Vitals bepalen mede hoe hoog jouw website rankt in Google. Leer wat LCP, INP en CLS zijn, hoe je ze meet en hoe je ze verbetert voor meer organisch verkeer." />
                <link rel="canonical" href="https://www.empowers.nl/blogs/seo/core-web-vitals-verbeteren-scoort" />
                <meta property="og:title" content="Core Web Vitals verbeteren: zo scoort jouw website beter in Google" />
                <meta property="og:description" content="LCP, INP en CLS uitgelegd, inclusief concrete fixes waarmee je jouw website sneller en stabieler maakt." />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://www.empowers.nl/blogs/seo/core-web-vitals-verbeteren-scoort" />
                <meta property="og:image" content="https://www.empowers.nl/images/blogs/core-web-vitals-verbeteren-scoort.jpg" />
                <meta property="article:published_time" content="2026-04-17" />
                <meta property="article:author" content="Empowers" />
                <meta property="article:section" content="SEO" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Core Web Vitals verbeteren voor betere Google posities" />
                <meta name="twitter:description" content="Zo optimaliseer je LCP, INP en CLS voor snellere pagina's en hogere rankings." />

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Article",
                        "headline": "Core Web Vitals verbeteren: zo scoort jouw website beter in Google",
                        "description": "Core Web Vitals bepalen mede hoe hoog jouw website rankt in Google. Leer wat LCP, INP en CLS zijn, hoe je ze meet en hoe je ze verbetert voor meer organisch verkeer.",
                        "image": "https://www.empowers.nl/images/blogs/core-web-vitals-verbeteren-scoort.jpg",
                        "datePublished": "2026-04-17T09:00:00+02:00",
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
                                    "name": "Wat zijn Core Web Vitals?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Core Web Vitals zijn drie meetwaarden van Google die bepalen hoe snel en stabiel een webpagina voelt: Largest Contentful Paint (LCP) meet laadsnelheid, Interaction to Next Paint (INP) meet reactietijd en Cumulative Layout Shift (CLS) meet visuele stabiliteit. Sinds maart 2024 wordt INP gebruikt in plaats van FID."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Wegen Core Web Vitals zwaar mee in je Google ranking?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Core Web Vitals zijn een ranking signaal, maar geen doorslaggevende factor. Content en relevantie wegen zwaarder. Toch kunnen twee vergelijkbare pagina's verschillen in positie door de snelheid. Als twee concurrerende sites inhoudelijk gelijk zijn, wint de snellere site."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Welke tool gebruik ik om Core Web Vitals te meten?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "PageSpeed Insights en Search Console geven je de scores op basis van echte bezoekersdata uit het Chrome User Experience Report (CrUX). Lighthouse en WebPageTest zijn handig voor lab tests tijdens optimalisaties. De veldwaarden uit CrUX tellen voor Google, niet de lab scores."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Wat is een goede LCP waarde?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Google beschouwt een LCP onder de 2,5 seconden als goed. Tussen 2,5 en 4 seconden heb je werk te doen. Boven de 4 seconden ziet Google dat als slecht. De waarde wordt gemeten op het 75e percentiel van echte bezoekers, dus drie op de vier bezoekers moet de score halen."
                                    }
                                }
                            ]
                        },
                        "breadcrumb": {
                            "@type": "BreadcrumbList",
                            "itemListElement": [
                                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.empowers.nl" },
                                { "@type": "ListItem", "position": 2, "name": "SEO", "item": "https://www.empowers.nl/blogs/seo" },
                                { "@type": "ListItem", "position": 3, "name": "Core Web Vitals verbeteren" }
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
                        <Link to="/blogs/seo" className="hover:text-accent transition-colors">SEO</Link>
                        <ChevronRight size={12} />
                        <span className="text-primary/30">Core Web Vitals verbeteren</span>
                    </nav>

                    {/* Header */}
                    <header className="mb-16">
                        <div className="inline-block px-3 py-1 bg-accent/10 text-accent font-mono text-xs uppercase tracking-widest rounded-full mb-6">
                            SEO
                        </div>
                        <h1 className="font-sans font-bold text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight mb-8">
                            Core Web Vitals verbeteren: zo scoort jouw website beter in Google
                        </h1>
                        <div className="flex flex-wrap items-center gap-6 text-sm font-sans text-primary/60 border-y border-primary/10 py-6">
                            <span className="flex items-center gap-2"><User size={14} />Empowers Redactie</span>
                            <span className="flex items-center gap-2"><Calendar size={14} />17 apr 2026</span>
                            <span className="flex items-center gap-2"><Clock size={14} />9 min leestijd</span>
                        </div>
                    </header>

                    {/* Featured Image */}
                    <figure className="w-full h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden mb-16 relative bg-primary">
                        <div className="absolute inset-0 bg-[url('/images/blogs/core-web-vitals-verbeteren-scoort.jpg')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </figure>

                    {/* Content */}
                    <div className="prose prose-lg max-w-none">

                        <p className="text-xl leading-relaxed text-primary/80 font-medium mb-6">
                            Een bezoeker klikt op jouw zoekresultaat. Drie seconden later is hij weg, omdat de pagina niet opent. Of de knop verspringt net voordat hij wil klikken. Dat zijn exact de dingen die Google meet met Core Web Vitals. En ze beïnvloeden jouw rankings. In dit artikel leer je wat LCP, INP en CLS zijn, hoe je ze meet en welke fixes de grootste impact hebben op jouw score.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat zijn Core Web Vitals precies?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Core Web Vitals zijn drie meetwaarden waarmee Google beoordeelt hoe soepel een webpagina aanvoelt voor een echte bezoeker. Het gaat niet om een technische checklist, maar om beleving. Opent de pagina snel genoeg? Reageert hij direct op klikken? Staan elementen stabiel of verspringt alles tijdens het laden? Die drie vragen beantwoorden de drie metrics.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De eerste is Largest Contentful Paint (LCP). Dat is het moment waarop het grootste zichtbare element binnen de viewport klaar staat — meestal een hero afbeelding of een grote kop. De tweede is Interaction to Next Paint (INP). Die vervangt sinds maart 2024 de oude First Input Delay en meet hoe snel de pagina reageert als een bezoeker klikt of typt. De derde is Cumulative Layout Shift (CLS). Die meet of elementen onverwacht verspringen tijdens het laden.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Google gebruikt deze waarden als onderdeel van de Page Experience signalen. Ze bepalen niet alleen je positie. Maar ze kunnen het verschil maken tussen plek 3 en plek 6 als de content van concurrenten vergelijkbaar is.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Waarom Core Web Vitals belangrijker zijn dan veel ondernemers denken</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Er heerst een misverstand dat Core Web Vitals alleen voor grote sites relevant zijn. Dat klopt niet. Ze beïnvloeden drie dingen die elk bedrijf raken: rankings, conversies en advertentiekosten.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De rankings zijn het bekendste verhaal. Google heeft bevestigd dat Core Web Vitals een ranking signaal zijn. Niet het sterkste, maar wel een signaal dat zwaarder weegt bij dicht op elkaar liggende concurrenten. Meer over hoe Google rankings bepaalt lees je in <Link to="/blogs/seo/lang-duurt-seo-realistische-verwachtingen" className="text-accent hover:underline">ons artikel over hoe lang SEO duurt</Link>.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Conversies worden direct geraakt door laadsnelheid. Onderzoek van Deloitte laat zien dat een laadtijdverbetering van 0,1 seconde de conversieratio van webshops met 8% verhoogt. Bij lead generatie sites is het effect vergelijkbaar. Elke extra seconde wachten kost je aanvragen.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            En dan je advertentiekosten. Google Ads kijkt naar landingspagina ervaring als onderdeel van je Quality Score. Een trage pagina zorgt voor een lagere score, een hogere CPC en minder vertoningen voor hetzelfde budget. Meer over dat mechanisme staat in <Link to="/blogs/google-ads/google-ads-quality-score-verhogen" className="text-accent hover:underline">ons artikel over Quality Score verhogen</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">LCP uitgelegd: zo maak je laden zichtbaar sneller</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Largest Contentful Paint meet wanneer het grootste zichtbare element op je pagina staat. Voor de meeste sites is dat de hero afbeelding, een video thumbnail of een grote titel. Google rekent een LCP onder 2,5 seconden als goed, tussen 2,5 en 4 seconden als middelmatig en boven 4 seconden als slecht.
                        </p>

                        <h3 className="font-semibold text-primary text-xl mt-10 mb-4">De drie meest voorkomende LCP problemen</h3>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Het eerste probleem is een te grote hero afbeelding. Een ongecomprimeerde foto van 3 MB heeft simpelweg te veel tijd nodig om te laden, vooral op mobiel. Comprimeer alle hero beelden naar onder de 200 KB, serveer ze in WebP of AVIF en stel de juiste breedte per apparaat in met srcset.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Het tweede probleem is een trage server. Als jouw hosting pas na 800 ms begint met leveren, heeft de browser al bijna de helft van zijn LCP budget verbruikt voordat er iets gedownload kan worden. Kies hosting met een Time to First Byte onder 200 ms of plaats een CDN voor je site. Cloudflare en Bunny doen dat al voor een paar euro per maand.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Het derde probleem is render blocking CSS en JavaScript. Elke externe stylesheet of script in je head vertraagt het moment waarop de browser iets kan tonen. Plaats kritische CSS inline in de head, laad de rest asynchroon en gebruik defer voor scripts die niet meteen nodig zijn.
                        </p>

                        <h3 className="font-semibold text-primary text-xl mt-10 mb-4">Quickwins voor een betere LCP</h3>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Voeg een fetchpriority="high" toe aan je hero afbeelding. Dan weet de browser dat die prioriteit heeft boven alles. Zet preload tags neer voor je belangrijkste fonts en hero image, zodat de browser ze parallel kan downloaden. Vervang sliders in de hero door één statische afbeelding — sliders maken LCP vrijwel altijd slechter en worden door minder dan 1% van de bezoekers doorgeklikt.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">INP uitgelegd: zo voelt klikken direct</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Interaction to Next Paint meet hoe lang het duurt tussen een gebruikersactie en het eerstvolgende moment waarop de pagina visueel reageert. Een klik op een knop, een tik op een menu, een tekst die je typt — allemaal interacties die binnen 200 milliseconden gevolgd moeten worden door een zichtbare reactie. Boven de 500 ms voelt het traag en rekent Google het als slecht.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            INP is voor de meeste ondernemers de metric waar de grootste winst ligt. Veel sites scoren gemiddeld op LCP en CLS, maar rommelig op INP omdat ze onnodig veel JavaScript uitvoeren bij elke interactie. Zware tracking scripts, grote chatwidgets en onoptimaal JavaScript zijn de grote boosdoeners.
                        </p>

                        <h3 className="font-semibold text-primary text-xl mt-10 mb-4">Waar INP meestal vastloopt</h3>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De meest voorkomende oorzaak is third party JavaScript. Elke Facebook Pixel, Google Tag Manager container en chatbot voegt werk toe aan de hoofdthread. Als een bezoeker klikt terwijl een script draait, moet die eerst wachten. Audit je tag manager regelmatig en verwijder tags die je niet meer gebruikt. Over tag manager opzetten zonder dit probleem lees je meer in <Link to="/blogs/tracking/google-tag-manager-beginners" className="text-accent hover:underline">onze gids over Google Tag Manager voor beginners</Link>.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De tweede oorzaak is zware rendering bij interactie. Als een klik op een filter een complete herberekening triggert van honderden producten, voelt dat traag. Splits grote taken op in kleinere stukken met requestIdleCallback, gebruik virtualisatie bij lange lijsten en vermijd onnodig DOM werk tijdens events.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De derde oorzaak zijn animaties die niet via CSS draaien. JavaScript animaties blokkeren de hoofdthread, CSS animaties niet. Gebruik waar mogelijk transform en opacity in plaats van JavaScript loops die posities updaten.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">CLS uitgelegd: zo houd je je pagina stabiel</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Cumulative Layout Shift meet hoeveel elementen op je pagina verspringen tijdens het laden. Een goede score zit onder 0,1. Alles tussen 0,1 en 0,25 is middelmatig. Boven 0,25 is slecht. CLS is de metric met de meest voorspelbare fixes, maar veel sites hebben hem nog niet op orde.
                        </p>

                        <h3 className="font-semibold text-primary text-xl mt-10 mb-4">Afbeeldingen zonder dimensies</h3>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Dit is verreweg de grootste oorzaak van CLS. Als een afbeelding geen width en height attribuut heeft, weet de browser niet hoeveel ruimte hij moet reserveren. Zodra de afbeelding laadt, schuift alles eronder naar beneden. Dat telt direct mee in je CLS. Voeg altijd width en height toe aan img tags of reserveer ruimte met CSS aspect-ratio.
                        </p>

                        <h3 className="font-semibold text-primary text-xl mt-10 mb-4">Advertenties en embeds</h3>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Google AdSense banners, YouTube embeds en social media widgets laden later dan je hoofdcontent. Als ze geen gereserveerde ruimte hebben, duwen ze content omlaag op het moment dat een bezoeker leest of klikt. Reserveer minimaal de maximale hoogte met een div wrapper, zodat de ruimte al klaarstaat voordat de ad of embed is geladen.
                        </p>

                        <h3 className="font-semibold text-primary text-xl mt-10 mb-4">Webfonts die laat laden</h3>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Als jouw font later laadt dan de tekst, switch de browser tussen een systeemfont en het uiteindelijke font. Teksten worden groter of smaller en alles eronder schuift. Gebruik font-display: optional of font-display: swap in combinatie met preload van je belangrijkste fonts, zodat de switch minimaal is.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe meet je Core Web Vitals betrouwbaar?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Er zijn twee soorten metingen: veldwaarden en lab waarden. Veldwaarden komen van echte bezoekers via het Chrome User Experience Report (CrUX). Lab waarden zijn simulaties in een testomgeving. Alleen veldwaarden tellen voor Google, dus die zijn het belangrijkst.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            PageSpeed Insights is de gemakkelijkste ingang. Je voert een URL in en krijgt zowel veld als lab resultaten. Search Console heeft een apart rapport Web Vitals waarin je ziet welke URL groepen op mobiel en desktop onder de grenswaarden zitten. Start daar, want Search Console laat direct zien welke pagina templates de meeste problemen hebben.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Voor dagelijks werk is Lighthouse in Chrome DevTools handig. Het geeft je precieze suggesties per pagina, inclusief verantwoordelijke elementen en scripts. WebPageTest is geavanceerder en toont hoe jouw pagina laadt op verschillende verbindingssnelheden. Combineer veldwaarden uit Search Console met lab tests voor elke optimalisatie die je doet.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Een realistisch optimalisatieplan in drie weken</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Core Web Vitals optimaliseren hoeft geen maandenlang traject te zijn. Met een gestructureerde aanpak boek je binnen drie weken meetbaar resultaat. Begin met de 20% aanpassingen die 80% van het resultaat leveren.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            In week één check je de situatie. Open Search Console en noteer welke URL groepen onder de grenswaarde zitten en welke metric het probleem is. Doe hetzelfde in PageSpeed Insights voor je belangrijkste landingspagina's. Kies één metric en één templatetype waar je begint.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            In week twee voer je de grootste fixes door. Comprimeer en converteer hero afbeeldingen. Voeg fetchpriority en preload tags toe. Ruim ongebruikte tag manager tags op. Reserveer ruimte voor alle images en embeds. Dat zijn meestal acties van een paar uur per pagina die tientallen procenten winst opleveren.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            In week drie meet je opnieuw en finetuned. Draai PageSpeed Insights vijf keer per pagina om de spreiding te zien. Controleer Search Console na 28 dagen, want dat is de periode waarop Google veldwaarden rapporteert. Documenteer wat werkte, rol uit naar andere templates en zet een periodieke check in je kalender.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Praktijkvoorbeeld: van rood naar groen in 21 dagen</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een Nederlandse webshop met ongeveer 40.000 organische bezoekers per maand scoorde bij de start een LCP van 4,1 seconden op mobiel, een INP van 620 ms en een CLS van 0,18. Alle drie de metrics stonden rood in Search Console. Het team dacht aan een complete herbouw.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            In plaats daarvan werden drie dingen aangepakt. Hero images werden geconverteerd naar AVIF en gekrompen van gemiddeld 1,8 MB naar 180 KB. Tag Manager werd opgeschoond van 42 tags naar 18 actieve tags. Width en height attributen werden toegevoegd aan alle img tags in productlijsten. Totale ontwikkeltijd: ongeveer 30 uur.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Na drie weken: LCP 2,3 seconden, INP 210 ms, CLS 0,06. Alle drie groen. In de twee maanden daarna steeg het organisch verkeer met 23% en de conversieratio met 11%. Niets nieuws aan de content, alleen een snellere website. Dat is het effect waar je Core Web Vitals voor doet.
                        </p>

                    </div>

                    {/* FAQ */}
                    <section className="mt-16 pt-12 border-t border-primary/10">
                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Veelgestelde vragen over Core Web Vitals</h2>
                        <div className="space-y-6 not-prose">
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat zijn Core Web Vitals?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Core Web Vitals zijn drie meetwaarden van Google die bepalen hoe snel en stabiel een webpagina voelt: Largest Contentful Paint (LCP) meet laadsnelheid, Interaction to Next Paint (INP) meet reactietijd en Cumulative Layout Shift (CLS) meet visuele stabiliteit. Sinds maart 2024 wordt INP gebruikt in plaats van FID.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wegen Core Web Vitals zwaar mee in je Google ranking?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Core Web Vitals zijn een ranking signaal, maar geen doorslaggevende factor. Content en relevantie wegen zwaarder. Toch kunnen twee vergelijkbare pagina's verschillen in positie door de snelheid. Als twee concurrerende sites inhoudelijk gelijk zijn, wint de snellere site meestal.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Welke tool gebruik ik om Core Web Vitals te meten?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">PageSpeed Insights en Search Console geven je de scores op basis van echte bezoekersdata uit het Chrome User Experience Report. Lighthouse en WebPageTest zijn handig voor lab tests tijdens optimalisaties. Alleen de veldwaarden uit CrUX tellen voor Google, niet de lab scores.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat is een goede LCP waarde?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Google beschouwt een LCP onder 2,5 seconden als goed. Tussen 2,5 en 4 seconden heb je werk te doen. Boven 4 seconden rekent Google het als slecht. De waarde wordt gemeten op het 75e percentiel van echte bezoekers, dus drie op de vier bezoekers moet die score halen.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoeveel tijd kost het om Core Web Vitals te verbeteren?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Met een gerichte aanpak kun je de belangrijkste templates binnen drie weken optimaliseren. De grootste winst zit meestal in image compressie, het opschonen van tag manager en het toevoegen van dimensies aan afbeeldingen. Zware refactors zijn zelden nodig om groen te scoren.</p>
                            </div>
                        </div>
                    </section>

                    {/* Related */}
                    <section className="mt-16 pt-12 border-t border-primary/10">
                        <h3 className="text-xl font-bold text-primary mb-6">Lees ook</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <Link to="/blogs/seo/technische-seo-checklist-2025-website" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Technische SEO checklist</h3>
                                <p className="text-primary/60 text-sm">Zo bouw je een technisch fundament waar content en rankings op kunnen groeien.</p>
                            </Link>
                            <Link to="/blogs/seo/lang-duurt-seo-realistische-verwachtingen" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Hoe lang duurt SEO?</h3>
                                <p className="text-primary/60 text-sm">Realistische verwachtingen over tijdslijn, investering en resultaat in de praktijk.</p>
                            </Link>
                            <Link to="/blogs/google-ads/google-ads-quality-score-verhogen" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Quality Score verhogen</h3>
                                <p className="text-primary/60 text-sm">Hoe landingspagina ervaring jouw CPC verlaagt en meer vertoningen oplevert.</p>
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
                        Wil je een site die snel én goed rankt?
                    </h2>
                    <p className="relative z-10 font-sans text-background/70 text-lg mb-10 max-w-xl mx-auto">
                        Wij analyseren jouw Core Web Vitals en pakken de bottlenecks aan waar jij nu verkeer en conversies op verliest. Zonder herbouw, met meetbaar resultaat.
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
