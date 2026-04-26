import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ChevronRight, User } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function BlogPostAdvantageShoppingCampagnes() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen selection:bg-accent/30 selection:text-dark flex flex-col bg-background">
            <Helmet>
                <title>Advantage+ Shopping campagnes: wat zijn ze en wanneer gebruik je ze? | Empowers</title>
                <meta name="description" content="Advantage+ Shopping campagnes beloven meer rendement met minder handwerk. Lees wanneer ze echt werken, wanneer niet, en hoe je ze verstandig inzet voor jouw webshop." />
                <link rel="canonical" href="https://www.empowers.nl/blogs/social-ads/advantage-shopping-campagnes" />
                <meta property="og:title" content="Advantage+ Shopping campagnes: wat zijn ze en wanneer gebruik je ze?" />
                <meta property="og:description" content="Advantage+ Shopping campagnes uitgelegd: wat Meta automatiseert, wanneer het een voltreffer is en wanneer je beter zelf de touwtjes houdt." />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://www.empowers.nl/blogs/social-ads/advantage-shopping-campagnes" />
                <meta property="og:image" content="https://www.empowers.nl/images/blogs/advantage-shopping-campagnes.jpg" />
                <meta property="article:published_time" content="2026-04-19" />
                <meta property="article:author" content="Empowers" />
                <meta property="article:section" content="Social Ads" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Advantage+ Shopping campagnes: wanneer werken ze?" />
                <meta name="twitter:description" content="Wanneer Advantage+ Shopping beter werkt dan reguliere Meta Ads, en wanneer niet." />

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Article",
                        "headline": "Advantage+ Shopping campagnes: wat zijn ze en wanneer gebruik je ze?",
                        "description": "Advantage+ Shopping campagnes beloven meer rendement met minder handwerk. Lees wanneer ze echt werken, wanneer niet, en hoe je ze verstandig inzet voor jouw webshop.",
                        "image": "https://www.empowers.nl/images/blogs/advantage-shopping-campagnes.jpg",
                        "datePublished": "2026-04-19T11:00:00+02:00",
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
                                    "name": "Wat zijn Advantage+ Shopping campagnes precies?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Advantage+ Shopping (ASC) is een grotendeels geautomatiseerd campagnetype van Meta dat speciaal is gebouwd voor webshops. Je levert een catalogus, creatives en een budget aan, en Meta bepaalt vervolgens zelf de doelgroep, plaatsingen, biedingen en creative-rotatie. Handmatige targeting op interesses of lookalikes is grotendeels uitgeschakeld."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Voor wie werkt Advantage+ Shopping het best?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "ASC werkt het beste voor webshops met ten minste 50 conversies per week, een stabiele marge en een brede of herkenbare productrange. Mode, beauty, home en elektronica zijn klassieke cases. Nichemerken met een kleine doelgroep of dure B2B-producten zien vaak minder resultaat omdat het algoritme te weinig signaal krijgt."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Hoeveel budget heb je nodig voor Advantage+ Shopping?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Een realistische ondergrens is 50 tot 75 euro per dag per campagne. Daaronder krijgt het algoritme te weinig data om in de leerfase door te komen. Bij 150 tot 300 euro per dag zie je meestal pas echt stabiele ROAS. Ga je lager zitten, dan is een reguliere campagne met duidelijke targeting vaak efficiënter."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Wat is het verschil met een reguliere Meta Ads campagne?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "In een reguliere campagne bepaal je zelf doelgroepen, plaatsingen, biedstrategie en creative per adset. In Advantage+ Shopping overweegt Meta al die keuzes voor je. Je verliest controle op detail, maar wint potentieel aan schaal en snelheid omdat het algoritme sneller kan leren en uitrollen."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Hoeveel creatives heb je minimaal nodig?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Plan minimaal 8 tot 12 unieke creatives per Advantage+ Shopping campagne, verdeeld over foto, video en UGC. Mix statische advertenties met bewegend beeld en zorg dat 1:1 én 9:16 verhoudingen aanwezig zijn. Te weinig variatie leidt tot snelle creative fatigue en stijgende CPM's."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Wanneer werkt Advantage+ Shopping juist niet?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "ASC werkt slecht bij zeer smalle doelgroepen, sterk lokaal aanbod, diensten met een lange salescycle of wanneer je tracking onbetrouwbaar is. Ook bij weinig historische data in het pixel- en Conversie API-setup komt het algoritme niet in leermodus, waardoor een handmatige campagne meer oplevert."
                                    }
                                }
                            ]
                        },
                        "breadcrumb": {
                            "@type": "BreadcrumbList",
                            "itemListElement": [
                                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.empowers.nl" },
                                { "@type": "ListItem", "position": 2, "name": "Social Ads", "item": "https://www.empowers.nl/blogs/social-ads" },
                                { "@type": "ListItem", "position": 3, "name": "Advantage+ Shopping campagnes" }
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
                        <span className="text-primary/30">Advantage+ Shopping campagnes</span>
                    </nav>

                    {/* Header */}
                    <header className="mb-16">
                        <div className="inline-block px-3 py-1 bg-accent/10 text-accent font-mono text-xs uppercase tracking-widest rounded-full mb-6">
                            Social Ads
                        </div>
                        <h1 className="font-sans font-bold text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight mb-8">
                            Advantage+ Shopping campagnes: wat zijn ze en wanneer gebruik je ze?
                        </h1>
                        <div className="flex flex-wrap items-center gap-6 text-sm font-sans text-primary/60 border-y border-primary/10 py-6">
                            <span className="flex items-center gap-2"><User size={14} />Empowers Redactie</span>
                            <span className="flex items-center gap-2"><Calendar size={14} />19 apr 2026</span>
                            <span className="flex items-center gap-2"><Clock size={14} />7 min leestijd</span>
                        </div>
                    </header>

                    {/* Featured Image */}
                    <figure className="w-full h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden mb-16 relative bg-primary">
                        <div className="absolute inset-0 bg-[url('/images/blogs/advantage-shopping-campagnes.jpg')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </figure>

                    {/* Content */}
                    <div className="prose prose-lg max-w-none">

                        <p className="text-xl leading-relaxed text-primary/80 font-medium mb-6">
                            Advantage+ Shopping campagnes beloven het heilige marketinggraal: meer omzet, minder handwerk, het algoritme doet de rest. Voor webshops met de juiste basis klopt die belofte vaker dan je denkt. Maar er zijn ook scenario's waarin een reguliere campagne nog altijd twee keer zoveel oplevert. In deze gids lees je wat Advantage+ Shopping precies is, wanneer het loont om het in te zetten en wanneer je het beter laat liggen.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat zijn Advantage+ Shopping campagnes precies?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Advantage+ Shopping, vaak afgekort tot ASC, is een campagnetype dat Meta in 2022 introduceerde en in 2026 de standaard is geworden voor veel webshops. Het verschil met een reguliere Meta Ads campagne zit in de hoeveelheid controle die je weggeeft. Je levert een catalogus, een budget, creatives en een conversiegebeurtenis aan. Meta bepaalt vervolgens zelf aan wie, waar, wanneer en voor welk bod de advertentie wordt getoond.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Het doel is simpel: het algoritme snelheid geven om patronen te vinden die jij met handmatige segmentatie waarschijnlijk mist. De keerzijde is dat je weinig ziet van wat er daadwerkelijk gebeurt. Doelgroeprapportages zijn beperkt, placement-rapportages zijn vereenvoudigd en A/B-testen per doelgroep vervalt grotendeels.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wanneer werken Advantage+ Shopping campagnes het best?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Er zijn vier situaties waarin ASC consistent beter presteert dan een handmatig opgezette campagne. Ken je ze, dan weet je meteen of jouw webshop er geschikt voor is.
                        </p>

                        <h3 className="font-semibold text-primary text-xl mt-10 mb-4">1. Je hebt meer dan 50 conversies per week</h3>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Het algoritme heeft data nodig om te leren. De vuistregel is minimaal 50 conversies per week per campagne. Lager dan dat en ASC blijft hangen in de leerfase, waardoor CPM's onevenredig hoog blijven. Webshops die deze drempel halen zien na 10 tot 21 dagen een stabilisatie en soms een ROAS-sprong van 20 tot 40 procent.
                        </p>

                        <h3 className="font-semibold text-primary text-xl mt-10 mb-4">2. Je hebt een brede of herkenbare productrange</h3>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Meta's algoritme bloeit op bij catalogi met 30 of meer producten. Bij kleding, accessoires, beauty en home decor werkt dat bijna vanzelf. Verkoop je slechts één of twee producten, dan verdwijnt een groot deel van de kracht van het systeem. In dat geval is een reguliere campagne met duidelijke creative-focus meestal efficiënter.
                        </p>

                        <h3 className="font-semibold text-primary text-xl mt-10 mb-4">3. Je tracking en Conversie API zijn netjes opgezet</h3>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            ASC leunt zwaarder op signaalkwaliteit dan een reguliere campagne. Missen events, dubbeltellingen of trage pixelcalls maken dat het algoritme verkeerde conclusies trekt. Wie zijn <Link to="/blogs/social-ads/meta-pixel-instellen-stap-stap" className="text-accent hover:underline">Meta Pixel volgens de juiste stappen heeft ingericht</Link> én een werkende Conversie API heeft draaien, haalt binnen een week resultaat. Zonder dat blijft het gokken. Meer hierover lees je in onze gids over <Link to="/blogs/social-ads/conversie-api-meta-naast-pixel" className="text-accent hover:underline">de Conversie API naast de pixel</Link>.
                        </p>

                        <h3 className="font-semibold text-primary text-xl mt-10 mb-4">4. Je hebt een genereus creative-bank</h3>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Advantage+ Shopping rouleert creatives veel sneller dan een handmatige campagne. Met twee advertenties houd je het geen week vol. Reken op minimaal 8 tot 12 unieke creatives per campagne, in een mix van foto, video en UGC. Heb je minder, dan zie je binnen 10 dagen creative fatigue terug in stijgende CPM's en een dalende CTR.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wanneer werkt het juist niet?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Niet elke webshop profiteert van automatisering. Bij deze profielen werkt ASC vrijwel nooit goed:
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Webshops met minder dan 20 conversies per week. Niches met een zeer beperkte doelgroep, bijvoorbeeld producten voor hardloopcoaches of specifieke medische beroepen. Merken die sterk leunen op lokaal bereik, omdat ASC geografische targeting behandelt als ruis. B2B-producten met een salescycle langer dan twee weken, omdat de conversiegebeurtenis waar Meta op optimaliseert niet representatief is. Nieuwe accounts zonder historische data, die eerst 2 tot 4 weken een reguliere campagne moeten draaien om data op te bouwen.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Herken je jezelf in een van deze situaties, dan bouw je beter aan een klassieke campagnestructuur met handmatige doelgroepen en aparte remarketing. Hoe dat eruitziet leggen we uit in <Link to="/blogs/social-ads/effectieve-meta-ads-funnel" className="text-accent hover:underline">onze gids over een effectieve Meta Ads funnel</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe zet je een Advantage+ Shopping campagne op?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De opzet in Ads Manager is bewust minimalistisch. Kies bij campagnedoel voor Sales en vink Advantage+ Shopping aan. Daarna stel je nog vier zaken in: het dagelijkse of levenslange budget, de landen waar je wilt verkopen, de leeftijdsrange en de conversiegebeurtenis. Interesses, gedrag en lookalikes verschijnen niet in het menu, want het systeem neemt die keuzes zelf.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Eén instelling die je niet moet overslaan is de Existing Customer Budget Cap. Daarmee zeg je tegen Meta welk percentage van het budget naar bestaande klanten mag gaan. Voor de meeste webshops werkt 20 tot 25 procent het beste: genoeg om herhaalaankopen te pakken, niet zoveel dat je budget aan mensen besteedt die je sowieso al bereikt.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Upload daarna je creatives in één ad set. Voeg ze allemaal tegelijk toe. Sneller toevoegen en niet dagen laten wachten voorkomt dat het algoritme keer op keer opnieuw de leerfase in moet.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Creatives: waar je echt op moet letten</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Omdat je geen handmatige doelgroepen stuurt, bepaalt creative nu bijna alles. Meta gebruikt het visuele signaal om doelgroepen voor je te kiezen. Een advertentie met vrouwelijk model trekt een andere groep dan dezelfde advertentie met een neutraal product shot. Verdeel creatives daarom op drie assen.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Eén: format. Zorg voor statische beelden, korte video's van 6 tot 15 seconden, carousels en minimaal twee UGC-style advertenties. Twee: aspect ratio. Zowel 1:1 als 9:16 moet aanwezig zijn, anders sluit je Reels en Stories uit. Drie: boodschap. Mix productvoordelen, social proof en prijsgedreven advertenties. Meer tactieken om creatives te variëren staan in <Link to="/blogs/social-ads/meta-ads-webshops-verhoog-omzet" className="text-accent hover:underline">onze blog over Meta Ads voor webshops</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Budget, leerfase en realistische verwachtingen</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een realistische ondergrens is 50 tot 75 euro per dag per campagne. Onder dat bedrag blijft het algoritme in de leerfase hangen. Bij 150 tot 300 euro per dag zie je meestal pas stabiele ROAS. Reken op 10 tot 14 dagen leerfase, waarin de prestaties grilliger zijn dan je gewend bent. Ga in die periode niet tussentijds aanpassen, anders reset je alles opnieuw.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Wat mag je verwachten? Bij goed getrackte webshops met een stabiel aanbod zien we gemiddeld een ROAS-verbetering van 15 tot 35 procent ten opzichte van een vergelijkbare reguliere campagne, én een daling van 20 tot 40 procent in de tijd die je in campagnebeheer steekt. Dat laatste is vaak even belangrijk als het eerste.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Advantage+ Shopping of toch een reguliere campagne?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een praktisch besluitkader helpt om de keuze rationeel te maken. Krijg je binnen een maand 200 of meer conversies, heb je een catalogus met minstens 30 producten, heb je de Conversie API werkend en heb je minstens 10 creatives klaarliggen? Dan is ASC bijna altijd de beste zet. Voldoe je niet aan minimaal drie van die vier, dan begin je beter met een reguliere campagne en groei je toe naar ASC.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Veel accounts draaien uiteindelijk hybride. Eén ASC-campagne voor prospecting en één reguliere retargeting-campagne die je zelf beheert. Zo combineer je schaal met grip. Hoe dat in de praktijk werkt lees je in <Link to="/blogs/social-ads/retargeting-meta-ads-haal-verloren" className="text-accent hover:underline">onze gids over retargeting via Meta Ads</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">De drie fouten die je wilt vermijden</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Na honderden campagnes zien we dezelfde drie fouten steeds weer terugkomen. Eén: te vroeg beginnen met tweaken. Wijzigingen binnen de leerfase betekenen reset, en dat kost je twee weken. Twee: te weinig creatives uploaden. Drie of vier advertenties is simpelweg te schraal. Drie: doelgroepsignalen negeren. Ook als het algoritme de keuze maakt, moet jouw beeld en tekst op een herkenbare doelgroep gericht zijn. Anders targets Meta de verkeerde mensen, met lagere ROAS als gevolg. Tactieken om slim doelgroepen te sturen via creative vind je in <Link to="/blogs/social-ads/meta-ads-doelgroepen" className="text-accent hover:underline">onze blog over Meta Ads doelgroepen instellen</Link>.
                        </p>

                    </div>

                    {/* FAQ */}
                    <section className="mt-16 pt-12 border-t border-primary/10">
                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Veelgestelde vragen over Advantage+ Shopping campagnes</h2>
                        <div className="space-y-6 not-prose">
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat zijn Advantage+ Shopping campagnes precies?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Advantage+ Shopping (ASC) is een grotendeels geautomatiseerd campagnetype van Meta dat speciaal is gebouwd voor webshops. Je levert een catalogus, creatives en een budget aan, en Meta bepaalt vervolgens zelf de doelgroep, plaatsingen, biedingen en creative-rotatie. Handmatige targeting op interesses of lookalikes is grotendeels uitgeschakeld.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Voor wie werkt Advantage+ Shopping het best?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">ASC werkt het beste voor webshops met ten minste 50 conversies per week, een stabiele marge en een brede of herkenbare productrange. Mode, beauty, home en elektronica zijn klassieke cases. Nichemerken met een kleine doelgroep of dure B2B-producten zien vaak minder resultaat omdat het algoritme te weinig signaal krijgt.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoeveel budget heb je nodig voor Advantage+ Shopping?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Een realistische ondergrens is 50 tot 75 euro per dag per campagne. Daaronder krijgt het algoritme te weinig data om in de leerfase door te komen. Bij 150 tot 300 euro per dag zie je meestal pas echt stabiele ROAS. Ga je lager zitten, dan is een reguliere campagne met duidelijke targeting vaak efficiënter.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat is het verschil met een reguliere Meta Ads campagne?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">In een reguliere campagne bepaal je zelf doelgroepen, plaatsingen, biedstrategie en creative per adset. In Advantage+ Shopping overweegt Meta al die keuzes voor je. Je verliest controle op detail, maar wint potentieel aan schaal en snelheid omdat het algoritme sneller kan leren en uitrollen.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoeveel creatives heb je minimaal nodig?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Plan minimaal 8 tot 12 unieke creatives per Advantage+ Shopping campagne, verdeeld over foto, video en UGC. Mix statische advertenties met bewegend beeld en zorg dat 1:1 én 9:16 verhoudingen aanwezig zijn. Te weinig variatie leidt tot snelle creative fatigue en stijgende CPM's.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wanneer werkt Advantage+ Shopping juist niet?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">ASC werkt slecht bij zeer smalle doelgroepen, sterk lokaal aanbod, diensten met een lange salescycle of wanneer je tracking onbetrouwbaar is. Ook bij weinig historische data in je pixel- en Conversie API-setup komt het algoritme niet in leermodus, waardoor een handmatige campagne meer oplevert.</p>
                            </div>
                        </div>
                    </section>

                    {/* Related */}
                    <section className="mt-16 pt-12 border-t border-primary/10">
                        <h3 className="text-xl font-bold text-primary mb-6">Lees ook</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <Link to="/blogs/social-ads/meta-ads-webshops-verhoog-omzet" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Meta Ads voor webshops</h3>
                                <p className="text-primary/60 text-sm">Zo bouw je een Meta Ads setup die omzet draait voor jouw webshop.</p>
                            </Link>
                            <Link to="/blogs/social-ads/conversie-api-meta-naast-pixel" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Conversie API naast de pixel</h3>
                                <p className="text-primary/60 text-sm">Waarom server-side tracking onmisbaar is geworden in 2026.</p>
                            </Link>
                            <Link to="/blogs/social-ads/effectieve-meta-ads-funnel" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Effectieve Meta Ads funnel</h3>
                                <p className="text-primary/60 text-sm">De klassieke funnel-opbouw die nog steeds werkt als aanvulling op ASC.</p>
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
                        Klaar voor meer ROAS op Meta?
                    </h2>
                    <p className="relative z-10 font-sans text-background/70 text-lg mb-10 max-w-xl mx-auto">
                        We beoordelen jouw webshop, tracking en creative-setup en laten zien of Advantage+ Shopping bij jou de juiste volgende stap is. Binnen 30 minuten weet je waar de winst zit.
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
