import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ChevronRight, User } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function BlogPostLinkedinAdsRetargetingBereikWarme() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen selection:bg-accent/30 selection:text-dark flex flex-col bg-background">
            <Helmet>
                <title>LinkedIn Ads retargeting: zo bereik je warme leads opnieuw | Empowers</title>
                <meta name="description" content="LinkedIn Ads retargeting laat je warme leads opnieuw bereiken zonder dat je opnieuw voor de eerste klik betaalt. Lees hoe je het opzet, welke fouten je voorkomt en wat het oplevert." />
                <link rel="canonical" href="https://www.empowers.nl/blogs/social-ads/linkedin-ads-retargeting-bereik-warme" />
                <meta property="og:title" content="LinkedIn Ads retargeting: zo bereik je warme leads opnieuw" />
                <meta property="og:description" content="Hoe richt je LinkedIn-retargeting in op warme leads? Lees welke audiences werken, welke biedstrategie je kiest en welke fouten budget kosten." />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://www.empowers.nl/blogs/social-ads/linkedin-ads-retargeting-bereik-warme" />
                <meta property="og:image" content="https://www.empowers.nl/images/blogs/linkedin-ads-retargeting-bereik-warme.jpg" />
                <meta property="article:published_time" content="2026-05-03T10:00:00+02:00" />
                <meta property="article:author" content="Empowers" />
                <meta property="article:section" content="Social Ads" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="LinkedIn Ads retargeting: zo bereik je warme leads opnieuw" />
                <meta name="twitter:description" content="Welke audiences werken voor LinkedIn-retargeting en welke fouten kosten budget? Lees de praktische gids." />

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Article",
                        "headline": "LinkedIn Ads retargeting: zo bereik je warme leads opnieuw",
                        "description": "LinkedIn Ads retargeting laat je warme leads opnieuw bereiken zonder dat je opnieuw voor de eerste klik betaalt. Lees hoe je het opzet, welke fouten je voorkomt en wat het oplevert.",
                        "image": "https://www.empowers.nl/images/blogs/linkedin-ads-retargeting-bereik-warme.jpg",
                        "datePublished": "2026-05-03T10:00:00+02:00",
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
                                    "name": "Wat is LinkedIn Ads retargeting precies?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "LinkedIn Ads retargeting toont advertenties aan mensen die al eerder met jouw merk in aanraking kwamen. Dat kan via een websitebezoek, een video die ze grotendeels bekeken, een Lead Gen Form dat ze openden of jouw LinkedIn-bedrijfspagina die ze bezochten. Je richt de campagne op een Matched Audience binnen Campaign Manager."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Hoeveel websitebezoekers heb je minimaal nodig?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "LinkedIn vraagt minstens 300 personen in een audience voordat advertenties live gaan. Voor een werkbare retargeting-campagne reken je op minimaal 1.000 tot 3.000 unieke bezoekers per maand. Heb je minder, combineer dan websitebezoek met video- en Lead Gen-engagement om het volume op te krikken."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Welk budget heb je nodig voor LinkedIn-retargeting?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "LinkedIn vraagt 25 euro per dag per campagne, dus 750 euro per maand minimum. Voor effectieve retargeting reken je op 1.000 tot 1.500 euro per maand zodat je twee tot drie audience-segmenten met gerichte boodschappen kunt draaien. Kleinere budgetten leiden tot te dunne segmenten en frequencies die te laag uitvallen."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Welke biedstrategie werkt het best voor retargeting?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Voor warme audiences kies je in eerste instantie maximum delivery of een handmatige CPM-bid. Daarmee zorg je dat je voldoende impressies binnen jouw kleine doelgroep haalt. Conversiebiedstrategieën werken pas zodra je 30 tot 50 conversies per maand uit dezelfde audience hebt verzameld."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Hoe vaak mag dezelfde persoon jouw retargeting-advertentie zien?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Houd de frequency tussen 3 en 8 vertoningen per maand. Daaronder herkent niemand jouw merk, daarboven raken mensen geïrriteerd. Stel een frequency cap in op campaign-niveau en wissel creatives elke 2 tot 4 weken om bannerblindheid te voorkomen."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Werkt retargeting beter dan koude LinkedIn-campagnes?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Ja, op kosten per lead aanzienlijk. Retargeting-leads kosten gemiddeld 30 tot 50 procent minder dan koude campagnes. De conversieratio ligt 2 tot 4 keer hoger omdat je merk al bekend is. Wel heb je koude campagnes nodig om de retargeting-pool gevuld te houden."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Welke creatives werken voor LinkedIn-retargeting?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Wissel af tussen drie soorten content. Eén: social proof zoals klantcases en cijfers. Twee: een concrete volgende stap zoals een demo, een gratis check of een proefperiode. Drie: bewijs van expertise zoals een whitepaper, webinar of branche-rapport. Pas de boodschap per audience-segment aan op de fase waarin de bezoeker zit."
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
                            { "@type": "ListItem", "position": 4, "name": "LinkedIn Ads retargeting", "item": "https://www.empowers.nl/blogs/social-ads/linkedin-ads-retargeting-bereik-warme" }
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
                        <span className="text-primary truncate">LinkedIn Ads retargeting</span>
                    </nav>

                    {/* Header */}
                    <header className="mb-16">
                        <div className="inline-block px-3 py-1 bg-accent/10 text-accent font-mono text-xs uppercase tracking-widest rounded-full mb-6">
                            Social Ads
                        </div>
                        <h1 className="font-sans font-bold text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight mb-8">
                            LinkedIn Ads retargeting: zo bereik je warme leads opnieuw
                        </h1>
                        <div className="flex flex-wrap items-center gap-6 text-sm font-sans text-primary/60 border-y border-primary/10 py-6">
                            <div className="flex items-center gap-2"><User className="w-4 h-4" /><span>Empowers Redactie</span></div>
                            <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>3 mei 2026</span></div>
                            <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>8 minuten leestijd</span></div>
                        </div>
                    </header>

                    {/* Featured Image */}
                    <figure className="w-full h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden mb-16 relative bg-primary">
                        <div className="absolute inset-0 bg-[url('/images/blogs/linkedin-ads-retargeting-bereik-warme.jpg')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </figure>

                    {/* Content */}
                    <div className="prose prose-lg max-w-none prose-headings:text-primary prose-headings:font-bold prose-a:text-accent prose-a:underline hover:prose-a:text-accent/80">
                        <p className="text-xl leading-relaxed text-primary/80 font-medium mb-6">
                            De meeste B2B-bezoekers converteren niet bij de eerste klik. Ze lezen jouw pagina, sluiten de tab en verdwijnen. LinkedIn Ads retargeting haalt die mensen terug, maar dan op een platform waar ze toch al elke werkdag op zitten. Mits je het juist inricht, kost een retargeting-lead 30 tot 50 procent minder dan een koude lead. Hieronder lees je hoe je het opzet, welke audiences werken en welke fouten budget verspillen.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat is LinkedIn Ads retargeting?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Bij retargeting toon je advertenties aan mensen die al eerder iets met jouw merk deden. Een websitebezoek, een video die ze voor de helft uitkeken, een Lead Gen Form dat ze openden maar niet invulden. Je raakt ze opnieuw op LinkedIn met een gerichte boodschap die past bij die eerdere interactie.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Het verschil met koude campagnes is fors. Koude targeting kost je geld om mensen voor het eerst kennis te laten maken met jouw merk. Retargeting bouwt op die kennis verder. De doelgroep weet al wie je bent, wat het scheelt in advertentiekosten en in conversie.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Voor B2B is dat extra waardevol. Salescycli van 3 tot 12 maanden vragen om meerdere contactmomenten. Een eenmalig websitebezoek is zelden genoeg. Retargeting houdt jouw merk in beeld bij beslissers die nog niet klaar zijn om te kopen, maar later wel terugkomen. Lees voor de basis ook onze blog over <Link to="/blogs/social-ads/linkedin-ads-vs-google-ads" className="text-accent hover:underline">LinkedIn Ads vs Google Ads voor B2B</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Welke audiences kun je in LinkedIn opbouwen?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            LinkedIn biedt verschillende Matched Audiences om mee te werken. Elk type vraagt een andere boodschap omdat de fase waarin de bezoeker zit, verschilt.
                        </p>

                        <h3 className="text-xl font-semibold text-primary mt-10 mb-4">Websitebezoekers</h3>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De bekendste vorm. Met de LinkedIn Insight Tag op jouw site bouw je audiences op basis van paginabezoek. Je kunt alle bezoekers samenvoegen, of segmenteren per pagina. Iemand die jouw prijspagina bekeek, zit verder in de funnel dan iemand die alleen jouw blog las. Maak voor elke fase een eigen audience.
                        </p>

                        <h3 className="text-xl font-semibold text-primary mt-10 mb-4">Video-engagement</h3>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Mensen die jouw eerdere LinkedIn-video bekeken, kun je opnieuw aanspreken. LinkedIn maakt audiences op basis van bekeken percentages: 25, 50, 75 of 97 procent. Wie 75 procent of meer keek, toonde duidelijke interesse. Die mensen wil je opwarmen met een concrete volgende stap.
                        </p>

                        <h3 className="text-xl font-semibold text-primary mt-10 mb-4">Lead Gen Form-engagement</h3>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Mensen die jouw Lead Gen Form openden maar niet inzonden, zijn dichtbij conversie. Een tweede zetje met een lichtere variant van het aanbod werkt vaak. Bouwde je een whitepaper-funnel? Bied dan een korte checklist of webinar als alternatief. Lees onze gids over <Link to="/blogs/social-ads/linkedin-lead-gen-forms-waarom" className="text-accent hover:underline">LinkedIn Lead Gen Forms</Link> voor de volledige opzet.
                        </p>

                        <h3 className="text-xl font-semibold text-primary mt-10 mb-4">Bedrijfspagina-bezoekers</h3>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Sinds enige tijd biedt LinkedIn ook retargeting op mensen die jouw bedrijfspagina bezochten. Het volume is meestal lager, maar de intentie is hoog: deze mensen zochten actief naar informatie over jouw bedrijf.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe groot moeten audiences zijn?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            LinkedIn vraagt minimaal 300 personen voordat een advertentie überhaupt live mag. Onder die grens werkt het systeem niet. Daarboven heb je voor een werkbare campagne minstens 1.000 tot 3.000 unieke websitebezoekers per maand nodig. Lager dan dat krijg je geen werkbare frequency en blijven kosten per impressie hoog.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Heb je nog niet genoeg verkeer? Combineer dan meerdere bronnen. Voeg websitebezoekers, video-kijkers en Lead Gen-engagement samen in 1 audience. Je verliest wat scherpte, maar je krijgt wel een werkbaar volume. Zodra je 5.000 unieke bezoekers per maand haalt, splits je weer per fase.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Welke biedstrategie kies je?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Voor retargeting werkt maximum delivery of een handmatige CPM-bid in eerste instantie het best. Je hebt een kleine audience, dus je wilt vooral dat LinkedIn jouw advertenties zo vaak mogelijk vertoont aan die mensen. Conversiebiedstrategieën werken pas zodra je 30 tot 50 conversies per maand uit dezelfde audience verzamelt. Daaronder heeft het algoritme te weinig data om op te sturen.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Stel ook een frequency cap in. LinkedIn raadt 8 tot 10 vertoningen per maand aan. In de praktijk werkt 3 tot 6 beter. Daarboven raken mensen geïrriteerd en daalt jouw merk-reputatie zonder dat je het direct ziet in de cijfers. Voor de bredere context van biedstrategieën helpt onze blog over <Link to="/blogs/google-ads/smart-bidding-uitgelegd-wanneer-wanneer" className="text-accent hover:underline">smart bidding op Google Ads</Link> ook met het denkkader.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Welke boodschap werkt per audience?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een retargeting-campagne is geen kopie van jouw koude campagne. De boodschap moet aansluiten op de fase waarin de bezoeker zit. Stuur op fase, niet op functie.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Voor mensen die alleen jouw blog of homepage bezochten, werkt social proof. Klantcases met cijfers, logo's van bekende klanten of een korte review. Het doel is niet meteen converteren, maar geloofwaardigheid opbouwen. Wissel die content af met diepere content zoals een whitepaper of webinar.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Voor mensen die op jouw productpagina, prijspagina of contactpagina kwamen, schakel je over op een concrete volgende stap. Een gratis demo, een korte intake of een proefperiode. Deze doelgroep zit in de overweging-fase. Te zachte boodschappen werken niet meer, ze willen weten wat het hen oplevert.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Voor mensen die een Lead Gen Form openden zonder versturen, bied je een variant aan. Was het een uitgebreide whitepaper? Geef ze nu een one-pager. Was het een demo-aanvraag? Bied een vrijblijvend vraagstuk-gesprek. De drempel verlagen werkt beter dan dezelfde aanbieding nog een keer doen. Onze blog over <Link to="/blogs/strategie/cta-tekst-schrijven-mensen-aanzet" className="text-accent hover:underline">een goede call-to-action schrijven</Link> helpt bij de juiste formulering.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe meet je het succes?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Last-click attributie laat retargeting er sterker uitzien dan het is. Een retargeting-klik is bijna altijd het laatste contactmoment voor de conversie, want dat is het hele doel. De koude campagne die de eerste klik leverde, krijgt te weinig krediet als je alleen op last-click stuurt.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Werk daarom met een data-driven of position-based attributiemodel. Je verdeelt de waarde van een conversie eerlijker over alle stappen. Onze gids over <Link to="/blogs/tracking/attribution-modellen-uitgelegd-last-click" className="text-accent hover:underline">attributie-modellen</Link> legt uit hoe je dat opzet. Meet daarnaast de juiste micro-conversies: aanmeldingen voor jouw nieuwsbrief, downloads, demo-aanvragen, niet alleen offertes.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Verwacht in B2B een retargeting-CPL die 30 tot 50 procent lager ligt dan op koude campagnes en een conversieratio die 2 tot 4 keer zo hoog ligt. Halen jouw retargeting-cijfers dat niet, dan zit het probleem bijna altijd in de boodschap of de audience-segmentatie.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Welke fouten kosten budget?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De grootste verspilling zit in 1 grote audience zonder segmentatie. Je geeft elke bezoeker dezelfde boodschap, terwijl een homepage-bezoeker iets anders nodig heeft dan iemand die op de prijspagina was. Splits altijd op fase.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De tweede fout is dezelfde creatives te lang draaien. Bij kleine audiences zien mensen jouw advertentie snel vaak. Wissel elke 2 tot 4 weken van beeld en boodschap, anders raakt de doelgroep banner-blind en stijgt jouw cost per click zonder dat je het merkt.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De derde fout is geen exclusion-audience instellen. Mensen die al converteerden, hoeven jouw advertentie niet meer te zien. Sluit ze uit op campagne-niveau. Dat scheelt budget en het scheelt jouw klanten irritatie.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wanneer schakel je hulp in?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            LinkedIn-retargeting werkt het sterkst als onderdeel van een bredere funnel. Koude campagnes vullen de pool, retargeting oogst, conversie-tracking meet. Wie alleen retargeting draait, raakt snel uitgeput. Wie alleen koud draait, laat conversies liggen.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Vanaf een LinkedIn-budget van 1.500 euro per maand verdient een specialist zichzelf vaak binnen 2 tot 3 maanden terug. Wil je weten waar jouw funnel lekt en welke retargeting-segmenten voor jouw aanbod het meest opleveren? Plan een gratis gesprek via onze <Link to="/contact" className="text-accent hover:underline">contactpagina</Link>. Geen verplichtingen, wel duidelijkheid over wat haalbaar is.
                        </p>
                    </div>

                    {/* FAQ Section */}
                    <section className="mt-16 pt-12 border-t border-primary/10">
                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Veelgestelde vragen</h2>
                        <div className="space-y-6 not-prose">
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat is LinkedIn Ads retargeting precies?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">LinkedIn-retargeting toont advertenties aan mensen die al eerder met jouw merk in aanraking kwamen. Dat kan via een websitebezoek, een video die ze grotendeels bekeken, een Lead Gen Form dat ze openden of jouw bedrijfspagina die ze bezochten.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoeveel websitebezoekers heb je minimaal nodig?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">LinkedIn vraagt minstens 300 personen in een audience voordat advertenties live gaan. Voor een werkbare campagne reken je op minimaal 1.000 tot 3.000 unieke bezoekers per maand. Lager? Combineer dan websitebezoek met video- en Lead Gen-engagement.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Welk budget heb je nodig voor LinkedIn-retargeting?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">LinkedIn vraagt minimaal 25 euro per dag per campagne, dus 750 euro per maand. Voor effectieve retargeting reken je op 1.000 tot 1.500 euro per maand zodat je twee tot drie audience-segmenten met gerichte boodschappen kunt draaien.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Welke biedstrategie werkt het best voor retargeting?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Voor warme audiences kies je in eerste instantie maximum delivery of een handmatige CPM-bid. Conversiebiedstrategieën werken pas zodra je 30 tot 50 conversies per maand uit dezelfde audience hebt verzameld.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoe vaak mag dezelfde persoon jouw retargeting-advertentie zien?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Houd de frequency tussen 3 en 8 vertoningen per maand. Daaronder herkent niemand jouw merk, daarboven raken mensen geïrriteerd. Wissel creatives elke 2 tot 4 weken om bannerblindheid te voorkomen.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Werkt retargeting beter dan koude LinkedIn-campagnes?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Ja, op kosten per lead aanzienlijk. Retargeting-leads kosten gemiddeld 30 tot 50 procent minder dan koude leads. Conversieratio's liggen 2 tot 4 keer hoger. Wel heb je koude campagnes nodig om de retargeting-pool gevuld te houden.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Welke creatives werken voor LinkedIn-retargeting?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Wissel af tussen social proof zoals klantcases, een concrete volgende stap zoals een demo of proefperiode en bewijs van expertise zoals een whitepaper of webinar. Pas de boodschap per audience-segment aan op de fase waarin de bezoeker zit.</p>
                            </div>
                        </div>
                    </section>

                    {/* Related Links */}
                    <section className="mt-16 pt-12 border-t border-primary/10">
                        <h3 className="text-xl font-bold text-primary mb-6">Lees ook</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <Link to="/blogs/social-ads/linkedin-ads-vs-google-ads" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">LinkedIn Ads vs Google Ads voor B2B</h3>
                                <p className="text-primary/60 text-sm">Welk kanaal levert betere B2B-leads en hoe combineer je beide voor maximaal rendement?</p>
                            </Link>
                            <Link to="/blogs/social-ads/linkedin-lead-gen-forms-waarom" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">LinkedIn Lead Gen Forms</h3>
                                <p className="text-primary/60 text-sm">Hoe je Lead Gen Forms inzet voor lagere CPL en hoger volume in B2B.</p>
                            </Link>
                            <Link to="/blogs/tracking/attribution-modellen-uitgelegd-last-click" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Attributie-modellen uitgelegd</h3>
                                <p className="text-primary/60 text-sm">Welk attributiemodel waardeert retargeting eerlijk en welke verdeelt jouw budget verkeerd?</p>
                            </Link>
                        </div>
                    </section>
                </div>
            </article>

            {/* Bottom CTA */}
            <section className="w-full pb-32 px-6">
                <div className="max-w-4xl mx-auto bg-primary rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
                    <h2 className="relative z-10 font-drama italic text-background text-3xl sm:text-4xl md:text-5xl mb-6">Hulp bij jouw LinkedIn-funnel?</h2>
                    <p className="relative z-10 font-sans text-background/70 text-lg mb-10 max-w-xl mx-auto">We doen een gratis scan van jouw huidige LinkedIn-campagnes en geven concreet advies waar jouw funnel lekt en welke retargeting-segmenten het meest opleveren. Geen verplichtingen, wel duidelijkheid.</p>
                    <Link to="/contact" className="relative z-10 btn-magnetic inline-flex items-center justify-center bg-accent text-background font-sans font-bold text-lg px-10 py-4 rounded-[2rem] hover:bg-accent/90 transition-colors">Neem contact op</Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
