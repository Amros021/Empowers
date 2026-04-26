import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ChevronRight, User } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function BlogPostMetaAdsIos14Veranderd() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen selection:bg-accent/30 selection:text-dark flex flex-col bg-background">
            <Helmet>
                <title>Meta Ads en iOS 14: wat is er veranderd en hoe ga je ermee om | Empowers</title>
                <meta name="description" content="Sinds iOS 14.5 mist Meta Ads een groot deel van zijn attributiedata. Lees wat er precies veranderde, hoeveel je echt mist en hoe je met CAPI en AEM weer scherp kunt sturen." />
                <link rel="canonical" href="https://www.empowers.nl/blogs/social-ads/meta-ads-ios-14-veranderd" />
                <meta property="og:title" content="Meta Ads en iOS 14: wat is er veranderd en hoe ga je ermee om" />
                <meta property="og:description" content="Hoe iOS 14 Meta Ads omgooide en hoe je met Conversions API, AEM en domeinverificatie weer betrouwbaar gaat sturen op je advertenties." />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://www.empowers.nl/blogs/social-ads/meta-ads-ios-14-veranderd" />
                <meta property="og:image" content="https://www.empowers.nl/images/blogs/meta-ads-ios-14-veranderd.jpg" />
                <meta property="article:published_time" content="2026-04-25" />
                <meta property="article:author" content="Empowers" />
                <meta property="article:section" content="Social Ads" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Meta Ads en iOS 14: wat is er veranderd en hoe ga je ermee om" />
                <meta name="twitter:description" content="ATT, CAPI, AEM en de 8-events limiet uitgelegd. Plus hoe je je campagnes na iOS 14 weer betrouwbaar stuurt." />

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Article",
                        "headline": "Meta Ads en iOS 14: wat is er veranderd en hoe ga je ermee om",
                        "description": "Sinds iOS 14.5 mist Meta Ads een groot deel van zijn attributiedata. Lees wat er precies veranderde, hoeveel je echt mist en hoe je met CAPI en AEM weer scherp kunt sturen.",
                        "image": "https://www.empowers.nl/images/blogs/meta-ads-ios-14-veranderd.jpg",
                        "datePublished": "2026-04-25T09:00:00+02:00",
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
                                    "name": "Wat veranderde Apple precies met iOS 14.5?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Met iOS 14.5 introduceerde Apple in april 2021 de App Tracking Transparency (ATT) framework. Elke app moet sindsdien expliciet toestemming vragen om de IDFA, een unieke advertentie-ID, te gebruiken voor tracking over apps en websites heen. Wereldwijd geeft slechts 25 tot 30 procent van de iOS-gebruikers die toestemming. De rest blijft volledig anoniem voor adverteerders."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Hoeveel conversies mis je nu nog in Meta Ads Manager?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Zonder Conversions API en goed ingerichte Aggregated Event Measurement loop je 25 tot 40 procent van je conversies mis in Meta Ads Manager. Met CAPI en domeinverificatie compleet ingericht zakt dat verlies naar 5 tot 10 procent. Het is daarmee niet meer een probleem dat je oplost, maar een setup-vereiste die je goed neerzet."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Wat is de Conversions API en waarom heb je die nodig?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "De Conversions API (CAPI) stuurt conversiedata server-naar-server vanuit jouw eigen webserver naar Meta. Deze stroom omzeilt de browser en daarmee Apple's tracking-restricties. Je vangt conversies van iOS-gebruikers die anders volledig wegvielen. Voor elke webshop of leadgenerator is CAPI sinds 2022 de basis, niet meer optioneel."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Wat is Aggregated Event Measurement?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Aggregated Event Measurement (AEM) is Meta's antwoord op iOS 14. Per geverifieerd domein kies je maximaal 8 events die je wilt meten, geprioriteerd van belangrijkst naar minst belangrijk. Voor een iOS-gebruiker zonder ATT-toestemming meldt Meta alleen het hoogst geprioriteerde event dat plaatsvond. Lagere events vallen weg in attributie."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Welke 8 events kies je het beste in Events Manager?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Kies je 8 events op basis van waarde voor jouw bedrijf. Voor een webshop is een gangbare prioritering: Purchase boven 100 euro, Purchase, AddPaymentInfo, InitiateCheckout, AddToCart, ViewContent, Search, PageView. Plaats de events met de hoogste businesswaarde altijd bovenaan. Wijzig de volgorde alleen als je echt een nieuwe strategie inzet, want elke wijziging triggert 72 uur leertijd."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Wat veranderde er na iOS 17 en iOS 18 nog meer?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Met iOS 17 voegde Apple Link Tracking Protection toe in Safari Private Browsing en Mail. Tracking parameters zoals fbclid worden automatisch uit URL's gestript. iOS 18 bouwde dit verder uit naar standaard Safari-browsing. Voor Meta Ads betekent dit dat click-based attributie verder verzwakt en server-side tracking via CAPI nog belangrijker wordt voor betrouwbare data."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Moet je nog wel adverteren op iOS na al deze beperkingen?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Ja. iOS-gebruikers vertegenwoordigen in Nederland circa 50 procent van de smartphone-markt en hebben gemiddeld een hogere besteding dan Android-gebruikers. Het verschil zit in hoe je meet en optimaliseert. Met CAPI, AEM en modeled conversions samen krijg je nog steeds bruikbare signalen waar Meta op kan optimaliseren. De data is anders, niet minder waardevol."
                                    }
                                }
                            ]
                        },
                        "breadcrumb": {
                            "@type": "BreadcrumbList",
                            "itemListElement": [
                                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.empowers.nl" },
                                { "@type": "ListItem", "position": 2, "name": "Social Ads", "item": "https://www.empowers.nl/blogs/social-ads" },
                                { "@type": "ListItem", "position": 3, "name": "Meta Ads en iOS 14" }
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
                        <Link to="/blogs/social-ads" className="hover:text-accent transition-colors">Social Ads</Link>
                        <ChevronRight size={12} />
                        <span className="text-primary/30">Meta Ads en iOS 14</span>
                    </nav>

                    {/* Header */}
                    <header className="mb-16">
                        <div className="inline-block px-3 py-1 bg-accent/10 text-accent font-mono text-xs uppercase tracking-widest rounded-full mb-6">
                            Social Ads
                        </div>
                        <h1 className="font-sans font-bold text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight mb-8">
                            Meta Ads en iOS 14: wat is er veranderd en hoe ga je ermee om
                        </h1>
                        <div className="flex flex-wrap items-center gap-6 text-sm font-sans text-primary/60 border-y border-primary/10 py-6">
                            <span className="flex items-center gap-2"><User size={14} />Empowers Redactie</span>
                            <span className="flex items-center gap-2"><Calendar size={14} />25 apr 2026</span>
                            <span className="flex items-center gap-2"><Clock size={14} />8 min leestijd</span>
                        </div>
                    </header>

                    {/* Featured Image */}
                    <figure className="w-full h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden mb-16 relative bg-primary">
                        <div className="absolute inset-0 bg-[url('/images/blogs/meta-ads-ios-14-veranderd.jpg')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </figure>

                    {/* Content */}
                    <div className="prose prose-lg max-w-none">

                        <p className="text-xl leading-relaxed text-primary/80 font-medium mb-6">
                            Sinds iOS 14.5 stuurt Meta jouw advertenties op een fractie van de data die het vroeger had. Apple's App Tracking Transparency dwong elke app om expliciet toestemming te vragen voor tracking, en het overgrote deel van de iOS-gebruikers zegt nee. Het gevolg: minder zichtbare conversies, minder betrouwbare attributie en algoritmes die slechter leren. In dit artikel lees je wat er echt is veranderd, hoeveel data je nog mist en hoe je met Conversions API, Aggregated Event Measurement en de juiste domein-instellingen weer scherp gaat sturen.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat veranderde Apple precies met iOS 14.5?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            In april 2021 introduceerde Apple met iOS 14.5 de App Tracking Transparency framework, kortweg ATT. Iedere app op een iPhone moet sindsdien een pop-up tonen voordat hij de IDFA mag gebruiken. De IDFA is de unieke advertentie-ID waarmee adverteerders gedrag over apps en websites heen aan elkaar konden koppelen.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Wereldwijd geeft 25 tot 30 procent van de iOS-gebruikers die toestemming. In Nederland ligt dat percentage iets hoger, rond de 32 procent, maar het blijft een minderheid. De rest van de iOS-gebruikers is voor adverteerders effectief onzichtbaar als het op cross-app tracking aankomt.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Voor Meta betekende dit een directe schok. De Facebook- en Instagram-app verloren in één klap het signaal waarop hun hele advertentiemodel was gebouwd: weten welke gebruiker welke advertentie zag en welke aankoop daarop volgde. De maatregel raakte volgens Meta's eigen kwartaalrapporten in 2022 voor circa 10 miljard dollar aan advertentie-omzet.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Waarom raakt iOS 14 specifiek Meta Ads zo hard?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Meta Ads draait op een advertentie-algoritme dat continu leert van conversiedata. Iedere aankoop, lead of toevoeging-aan-winkelwagen leert het systeem welke profielen vergelijkbaar zijn met je beste klanten. Hoe meer signalen, hoe beter de optimalisatie.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Voor iOS-gebruikers zonder ATT-toestemming verdwijnt die feedback. Meta weet niet meer dat persoon X de advertentie zag, doorklikte en op je site een product van 89 euro kocht. Het algoritme moet die signalen missen of moet ze aanvullen met statistische schattingen, ook wel modeled conversions genoemd. Het resultaat: een wazigere doelgroep, hogere CPA en breekbaardere campagnes.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Bij onze klanten zien we het effect het sterkst bij webshops met een sterke iOS-doelgroep. Een mode-webshop die wij begeleiden zag in de eerste maanden na iOS 14.5 een rapportagedaling van 38 procent in Meta-toegekende conversies, terwijl de werkelijke omzet stabiel bleef. De aankopen vonden nog plaats, maar verdwenen uit het Meta-dashboard.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoeveel conversies zie je nu nog terug in Meta Ads Manager?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Het verschil tussen werkelijke en gerapporteerde conversies hangt direct af van hoe goed je setup is. Zonder Conversions API en met enkel de browser-pixel mis je 25 tot 40 procent van je iOS-conversies in Meta Ads Manager. Voor een gemiddelde webshop met 50/50 iOS-Android verkeer is dat een vertekening van 12 tot 20 procent op de totale rapportage.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Met CAPI volledig geïmplementeerd, alle 8 AEM-events ingericht en domeinverificatie afgerond zakt dat verlies naar 5 tot 10 procent. Een meetbaar restverschil blijft, maar dat ligt binnen de marge waarbinnen je betrouwbaar kunt sturen. Voor de gids over CAPI naast de pixel lees je <Link to="/blogs/social-ads/conversie-api-meta-naast-pixel" className="text-accent hover:underline">deze uitleg over de Conversions API naast de Meta Pixel</Link>.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een belangrijk inzicht: de meeste vertekening zit niet in totalen, maar in het toewijzen van conversies aan campagnes en advertenties. Als 30 procent van je conversies wel gebeurt maar niet naar de juiste campagne wordt teruggekoppeld, optimaliseert Meta op de verkeerde signalen. Een goede setup gaat daarmee niet alleen over rapportage, maar over de leerkracht van het algoritme.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat is de Conversions API en waarom is die nu standaard?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De Conversions API, vaak afgekort als CAPI, stuurt conversiedata rechtstreeks vanaf jouw webserver naar Meta. Dat verschilt van de klassieke Meta Pixel, die in de browser van de gebruiker draait. Omdat CAPI de browser overslaat, omzeilt het ook de browser-tracking restricties die Apple heeft ingesteld.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            In de praktijk werk je vaak met een hybride opzet. De pixel blijft draaien voor wie wel tracking toestaat, en CAPI vult aan voor de gevallen waarin de pixel signalen mist. Meta dedupliceert beide bronnen via een gedeeld event-ID, dus je telt geen conversies dubbel.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Voor Shopify, WooCommerce en de meeste grote CMS-platforms is CAPI binnen een uur in te richten via een officiële integratie. Voor maatwerk-websites schakel je een ontwikkelaar in die de events server-side stuurt. De grootste valkuil die we tegenkomen: CAPI wordt geactiveerd, maar de Event Match Quality blijft laag omdat user-data zoals e-mail en telefoon niet meegestuurd worden. Zonder die match-data verdunt het signaal alsnog.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe werkt Aggregated Event Measurement?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Aggregated Event Measurement, kortweg AEM, is Meta's tweede antwoord op iOS 14. Per geverifieerd domein kies je maximaal 8 conversie-events die je wilt meten, geordend van meest naar minst belangrijk. Voor iOS-gebruikers zonder ATT-toestemming meldt Meta alleen het hoogst geprioriteerde event dat plaatsvond binnen 24 uur na de klik.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Stel: je hebt Purchase op positie 1 staan en AddToCart op positie 5. Een gebruiker klikt op je advertentie, voegt iets toe aan de winkelwagen en koopt vervolgens. Meta meldt alleen Purchase, want dat is het hoogst geprioriteerde event in de keten. AddToCart valt weg in de attributie. De aankoop is dus zichtbaar, maar de tussenstappen niet.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Dit heeft directe consequenties voor wat je kunt optimaliseren. Wil je een campagne sturen op AddToCart, dan moet je dat event hoog in de prioriteit zetten, ten koste van bijvoorbeeld Purchase. Sturen op meerdere events tegelijk binnen iOS-publiek is niet mogelijk. Je kiest één optimalisatie-doel per campagne en zet de bijhorende AEM-volgorde daarop af.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Welke 8 events kies je het beste in Events Manager?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Kies je 8 events op basis van businesswaarde, niet op volume. Een veelgemaakte fout: events kiezen die het vaakst gebeuren in plaats van events die het meest waard zijn. PageView staat dan bovenaan terwijl Purchase op positie 7 belandt. Resultaat: je verliest in iOS-attributie precies de events waar je echt op wil sturen.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een werkbare prioritering voor een webshop ziet er zo uit. Bovenaan: Purchase boven 100 euro waarde, dan reguliere Purchase, daarna AddPaymentInfo, InitiateCheckout, AddToCart, ViewContent, Search, en onderaan PageView. Door waarde-segmenten van Purchase op verschillende posities te zetten, kun je hoogwaardige conversies extra gewicht geven binnen Value-Based Optimization.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Wijzig de prioritering met mate. Iedere wijziging in de event-volgorde triggert een leerperiode van 72 uur waarin Meta opnieuw moet kalibreren. Tijdens die 72 uur loopt je rapportage en optimalisatie minder betrouwbaar. Plan wijzigingen daarom buiten kerndagen of campagne-launches.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat veranderde er na iOS 17 en iOS 18 nog meer?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Apple bouwde sinds 2023 verder op de privacy-route. iOS 17 introduceerde Link Tracking Protection in Safari Private Browsing en in Mail. Tracking-parameters zoals fbclid en utm_source worden automatisch uit URL's verwijderd voordat de pagina laadt. Voor Meta betekent dit dat click-based attributie via Safari verzwakt, ook bij gebruikers die wel ATT-toestemming gaven.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            iOS 18 maakte Link Tracking Protection standaard in alle Safari-browsing, niet alleen Private Mode. De impact op datakwaliteit is daarmee structureel groter geworden dan iOS 14 alleen al was. Server-side tracking via CAPI is in deze nieuwe context niet langer een aanvulling, maar de primaire bron van betrouwbare attributiedata.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een tweede ontwikkeling die meeweegt is Apple's Private Click Measurement, dat Meta sinds 2023 ondersteunt voor web-conversies. Het levert geaggregeerde click-data zonder individuele identifiers en vult AEM aan met aanvullende click-attributie. Deze stack van CAPI plus AEM plus PCM is wat Meta zelf aanraadt als minimaal vereiste setup voor iOS-targeting in 2026.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Praktische stappen om de impact te verkleinen</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De eerste stap is domeinverificatie. Zonder geverifieerd domein in Business Manager kun je AEM niet gebruiken en kunnen meerdere accounts ruzie maken om dezelfde events. Domeinverificatie kost 10 minuten via een DNS-record of een meta-tag op je site, en is een voorwaarde voor alles wat erna komt.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De tweede stap is een complete CAPI-implementatie met user-data. Stuur per event minimaal email, telefoon en externe user ID gehasht mee. De Event Match Quality score in Events Manager moet boven de 7 staan voor betrouwbare matching. Onder de 6 verspil je het grootste deel van het CAPI-voordeel. Voor de basis van de Meta Pixel zelf lees je <Link to="/blogs/social-ads/meta-pixel-instellen-stap-stap" className="text-accent hover:underline">de stap-voor-stap gids voor Meta Pixel installatie</Link>.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De derde stap is je AEM-events strak prioriteren. Begin met je werkelijke verkoopdata: welke events zijn meeste euros waard per gemiddelde gebeurtenis? Plaats die bovenaan en bouw naar beneden af. Herzie deze volgorde één keer per kwartaal, niet vaker. Voor meer privacy-context na iOS 14 kijk je in <Link to="/blogs/social-ads/meta-ads-2025-werkt-na" className="text-accent hover:underline">deze gids over Meta Ads na de privacywijzigingen</Link>.
                        </p>

                    </div>

                    {/* FAQ */}
                    <section className="mt-16 pt-12 border-t border-primary/10">
                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Veelgestelde vragen over Meta Ads en iOS 14</h2>
                        <div className="space-y-6 not-prose">
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat veranderde Apple precies met iOS 14.5?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Met iOS 14.5 introduceerde Apple in april 2021 de App Tracking Transparency (ATT) framework. Elke app moet sindsdien expliciet toestemming vragen om de IDFA, een unieke advertentie-ID, te gebruiken voor tracking over apps en websites heen. Wereldwijd geeft slechts 25 tot 30 procent van de iOS-gebruikers die toestemming. De rest blijft volledig anoniem voor adverteerders.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoeveel conversies mis je nu nog in Meta Ads Manager?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Zonder Conversions API en goed ingerichte Aggregated Event Measurement loop je 25 tot 40 procent van je conversies mis in Meta Ads Manager. Met CAPI en domeinverificatie compleet ingericht zakt dat verlies naar 5 tot 10 procent. Het is daarmee niet meer een probleem dat je oplost, maar een setup-vereiste die je goed neerzet.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat is de Conversions API en waarom heb je die nodig?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">De Conversions API (CAPI) stuurt conversiedata server-naar-server vanuit jouw eigen webserver naar Meta. Deze stroom omzeilt de browser en daarmee Apple's tracking-restricties. Je vangt conversies van iOS-gebruikers die anders volledig wegvielen. Voor elke webshop of leadgenerator is CAPI sinds 2022 de basis, niet meer optioneel.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat is Aggregated Event Measurement?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Aggregated Event Measurement (AEM) is Meta's antwoord op iOS 14. Per geverifieerd domein kies je maximaal 8 events die je wilt meten, geprioriteerd van belangrijkst naar minst belangrijk. Voor een iOS-gebruiker zonder ATT-toestemming meldt Meta alleen het hoogst geprioriteerde event dat plaatsvond. Lagere events vallen weg in attributie.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Welke 8 events kies je het beste in Events Manager?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Kies je 8 events op basis van waarde voor jouw bedrijf. Voor een webshop is een gangbare prioritering: Purchase boven 100 euro, Purchase, AddPaymentInfo, InitiateCheckout, AddToCart, ViewContent, Search, PageView. Plaats de events met de hoogste businesswaarde altijd bovenaan. Wijzig de volgorde alleen als je echt een nieuwe strategie inzet, want elke wijziging triggert 72 uur leertijd.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat veranderde er na iOS 17 en iOS 18 nog meer?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Met iOS 17 voegde Apple Link Tracking Protection toe in Safari Private Browsing en Mail. Tracking parameters zoals fbclid worden automatisch uit URL's gestript. iOS 18 bouwde dit verder uit naar standaard Safari-browsing. Voor Meta Ads betekent dit dat click-based attributie verder verzwakt en server-side tracking via CAPI nog belangrijker wordt voor betrouwbare data.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Moet je nog wel adverteren op iOS na al deze beperkingen?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Ja. iOS-gebruikers vertegenwoordigen in Nederland circa 50 procent van de smartphone-markt en hebben gemiddeld een hogere besteding dan Android-gebruikers. Het verschil zit in hoe je meet en optimaliseert. Met CAPI, AEM en modeled conversions samen krijg je nog steeds bruikbare signalen waar Meta op kan optimaliseren. De data is anders, niet minder waardevol.</p>
                            </div>
                        </div>
                    </section>

                    {/* Related */}
                    <section className="mt-16 pt-12 border-t border-primary/10">
                        <h3 className="text-xl font-bold text-primary mb-6">Lees ook</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <Link to="/blogs/social-ads/conversie-api-meta-naast-pixel" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Conversions API uitgelegd</h3>
                                <p className="text-primary/60 text-sm">Waarom CAPI naast de pixel hoort en hoe je hem inricht.</p>
                            </Link>
                            <Link to="/blogs/social-ads/meta-pixel-instellen-stap-stap" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Meta Pixel installeren</h3>
                                <p className="text-primary/60 text-sm">Stap-voor-stap je pixel goed neerzetten, basis voor alles erna.</p>
                            </Link>
                            <Link to="/blogs/social-ads/meta-ads-2025-werkt-na" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Meta Ads na privacywijzigingen</h3>
                                <p className="text-primary/60 text-sm">Hoe Meta Ads in 2026 werkt nu de tracking grotendeels weg is.</p>
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
                        iOS-data lekt jouw budget weg?
                    </h2>
                    <p className="relative z-10 font-sans text-background/70 text-lg mb-10 max-w-xl mx-auto">
                        We checken jouw Meta-setup gratis op CAPI, AEM en domeinverificatie. Binnen een week weet je precies welke conversies je mist en hoe je ze terughaalt.
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
