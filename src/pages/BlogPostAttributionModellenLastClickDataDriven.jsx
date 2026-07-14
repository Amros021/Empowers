import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ChevronRight, User } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function BlogPostAttributionModellenLastClickDataDriven() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen selection:bg-accent/30 selection:text-dark flex flex-col bg-background">
            <Helmet>
                <title>Attribution modellen uitgelegd: last click vs data-driven | Empowers</title>
                <meta name="description" content="Welk attribution model toont eerlijk hoe jouw marketing presteert? Lees het verschil tussen last click, first click, lineair en data-driven en kies wat past." />
                <link rel="canonical" href="https://www.empowers.nl/blogs/tracking/attribution-modellen-uitgelegd-last-click" />
                <meta property="og:title" content="Attribution modellen uitgelegd: last click vs data-driven" />
                <meta property="og:description" content="Welk attribution model toont eerlijk hoe jouw marketing presteert? Een praktische uitleg voor MKB en webshops." />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://www.empowers.nl/blogs/tracking/attribution-modellen-uitgelegd-last-click" />
                <meta property="og:image" content="https://www.empowers.nl/images/blogs/attribution-modellen-uitgelegd-last-click.jpg" />
                <meta property="article:published_time" content="2026-04-28T09:00:00+02:00" />
                <meta property="article:author" content="Empowers" />
                <meta property="article:section" content="Tracking" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Attribution modellen uitgelegd: last click vs data-driven" />
                <meta name="twitter:description" content="Het verschil tussen last click, first click, lineair en data-driven attribution. Begrijp wat jouw marketing echt oplevert." />

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Article",
                        "headline": "Attribution modellen uitgelegd: last click vs data-driven",
                        "description": "Welk attribution model toont eerlijk hoe jouw marketing presteert? Lees het verschil tussen last click, first click, lineair en data-driven en kies wat past.",
                        "image": "https://www.empowers.nl/images/blogs/attribution-modellen-uitgelegd-last-click.jpg",
                        "datePublished": "2026-04-28T09:00:00+02:00",
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
                                    "name": "Wat is een attribution model in marketing?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Een attribution model is een rekenregel die bepaalt welk marketingkanaal de credits krijgt voor een conversie. Een klant ziet vaak meerdere advertenties en bezoekt jouw site meerdere keren voordat hij koopt. Het model beslist wie van die contactmomenten de waarde krijgt toegewezen."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Wat is het verschil tussen last click en data-driven attribution?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Last click geeft 100 procent van de waarde aan het laatste kanaal voor de conversie. Data-driven attribution verdeelt de waarde over alle contactmomenten op basis van hoeveel elk kanaal echt bijdraagt aan de aankoop. Data-driven is eerlijker maar vraagt meer conversiedata om betrouwbaar te zijn."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Welk attribution model gebruik je het best als MKB?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Voor de meeste MKB-bedrijven werkt data-driven attribution het beste. Sinds november 2025 is data-driven standaard beschikbaar voor alle conversieacties in Google Ads, zonder minimumdrempel. Hoe meer conversies je hebt, hoe betrouwbaarder het model. Bij weinig data geeft een positiegebaseerd of lineair model soms een stabieler beeld."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Hoeveel conversies heb je nodig voor data-driven attribution?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Sinds november 2025 heeft Google de oude minimumdrempel van 300 conversies en 3000 interacties losgelaten. Data-driven attribution is nu standaard beschikbaar voor alle conversieacties. Het model werkt betrouwbaarder naarmate je meer conversiedata hebt, maar er is geen harde ondergrens meer."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Waarom rapporteren Google Ads en Meta Ads samen meer conversies dan ik daadwerkelijk had?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Beide platforms claimen dezelfde conversie als hij in hun click- of viewwindow valt. Een klant die zowel een Google Ads als een Meta Ads zag, telt in beide platforms. Daarom zie je vaak overcounting: tel je de getallen op, dan staan ze hoger dan in jouw boekhouding. Een onafhankelijke bron zoals GA4 of een server-side tracking opzet lost dit op."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Hoe verandert iOS 14 en cookieless tracking attribution?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Sinds iOS 14 en de afbouw van third-party cookies missen platforms een deel van de customer journey. Modellen zoals data-driven en Meta's Advanced Matching vullen die gaten met statistische schattingen. Server-side tracking via de Conversie API of GTM Server-Side blijft het belangrijkste hulpmiddel om de data eerlijk te houden."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Kan ik tussen attribution modellen switchen zonder mijn data te verliezen?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Ja, in Google Ads en GA4 kun je modellen vergelijken zonder dat je conversiedata aangepast wordt. Het model bepaalt alleen hoe de getoonde waarde is verdeeld, niet of de conversie is geregistreerd. Vergelijk altijd minimaal 30 dagen voordat je een definitieve keuze maakt."
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
                            { "@type": "ListItem", "position": 3, "name": "Tracking", "item": "https://www.empowers.nl/blogs/tracking" },
                            { "@type": "ListItem", "position": 4, "name": "Attribution modellen uitgelegd", "item": "https://www.empowers.nl/blogs/tracking/attribution-modellen-uitgelegd-last-click" }
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
                        <Link to="/blogs/tracking" className="hover:text-accent transition-colors">Tracking</Link>
                        <ChevronRight className="w-3 h-3" />
                        <span className="text-primary truncate">Attribution modellen uitgelegd</span>
                    </nav>

                    {/* Header */}
                    <header className="mb-16">
                        <div className="inline-block px-3 py-1 bg-accent/10 text-accent font-mono text-xs uppercase tracking-widest rounded-full mb-6">
                            Tracking
                        </div>
                        <h1 className="font-sans font-bold text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight mb-8">
                            Attribution modellen uitgelegd: last click vs data-driven
                        </h1>
                        <div className="flex flex-wrap items-center gap-6 text-sm font-sans text-primary/60 border-y border-primary/10 py-6">
                            <div className="flex items-center gap-2"><User className="w-4 h-4" /><span>Empowers Redactie</span></div>
                            <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>28 april 2026</span></div>
                            <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>9 minuten leestijd</span></div>
                        </div>
                    </header>

                    {/* Featured Image */}
                    <figure className="w-full h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden mb-16 relative bg-primary">
                        <div className="absolute inset-0 bg-[url('/images/blogs/attribution-modellen-uitgelegd-last-click.jpg')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </figure>

                    {/* Content */}
                    <div className="prose prose-lg max-w-none prose-headings:text-primary prose-headings:font-bold prose-a:text-accent prose-a:underline hover:prose-a:text-accent/80">
                        <p className="text-xl leading-relaxed text-primary/80 font-medium mb-6">
                            Een attribution model bepaalt welk marketingkanaal de credits krijgt voor een conversie. Last click geeft alles aan het laatste contactmoment voor de aankoop. Data-driven attribution verdeelt de waarde over alle contactmomenten op basis van hun werkelijke bijdrage. Voor de meeste MKB-bedrijven met genoeg conversiedata is data-driven het eerlijkste model. Heb je weinig data, dan past een positiegebaseerd of lineair model beter.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Waarom is attribution belangrijk voor jouw marketingbudget?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een klant koopt zelden bij het eerste contactmoment. Eerst ziet hij een Meta Ads, dan vergelijkt hij op Google, dan komt hij via een nieuwsbrief terug en pas daarna koopt hij. Welke advertentie krijgt nu de eer voor die verkoop? Daar gaat attribution over. Zonder een goed model schaal je het verkeerde kanaal op en stop je geld in iets dat alleen aan de finish staat, terwijl andere kanalen de race wonnen.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Bij onze klanten zien we dat de keuze van attribution model vaak 20 tot 40 procent van het budget herverdeelt. Een Meta Ads campagne die in last click amper rendeert, blijkt in data-driven de aanjager van de pipeline. Stop je hem, dan zakt het volume bij Google ook. Dat soort inzichten kost geld als je ze mist.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Welke attribution modellen bestaan er?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Er zijn zes klassieke modellen die je in Google Ads, GA4 en Meta tegenkomt. Elk verdeelt de credit op een andere manier over de customer journey. Het verschil tussen ze bepaalt welk kanaal er goed of slecht uitziet in jouw rapportage.
                        </p>

                        <h3 className="font-semibold text-primary text-xl mt-10 mb-4">Last click attribution</h3>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Honderd procent van de waarde gaat naar het laatste kanaal voor de conversie. Klassiek, simpel en al jaren de default in Google Analytics. Last click maakt branded zoekopdrachten en directe websitebezoeken kunstmatig sterk en onderwaardeert kanalen die hoger in de funnel werken zoals display, social en YouTube.
                        </p>

                        <h3 className="font-semibold text-primary text-xl mt-10 mb-4">First click attribution</h3>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Honderd procent gaat naar het eerste contactmoment. Goed voor merkopbouw en awareness-kanalen, maar het negeert alles wat daarna nog nodig was om de conversie binnen te halen. Bedrijven die sterk inzetten op contentmarketing of SEO gebruiken dit model soms om het effect van top-of-funnel werk zichtbaar te maken.
                        </p>

                        <h3 className="font-semibold text-primary text-xl mt-10 mb-4">Lineair attribution</h3>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Elke touch krijgt evenveel credit. Vier contactmomenten betekent ieder 25 procent van de waarde. Een eerlijk model voor iedereen, maar tegelijk een model dat geen onderscheid maakt tussen een korte banner-impressie en een tien-minuten productpagina-bezoek. Lineair werkt redelijk bij weinig data en weinig kanalen.
                        </p>

                        <h3 className="font-semibold text-primary text-xl mt-10 mb-4">Time decay attribution</h3>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Hoe dichter een touch bij de conversie ligt, hoe meer credit hij krijgt. Een klik van vandaag is meer waard dan een klik van drie weken geleden. Time decay past goed bij producten met een korte beslissingscyclus. Bij langere B2B trajecten loop je het risico dat de eerste contactmomenten te weinig waarde krijgen.
                        </p>

                        <h3 className="font-semibold text-primary text-xl mt-10 mb-4">Position-based attribution</h3>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een hybride model: 40 procent voor het eerste contactmoment, 40 procent voor het laatste, 20 procent verdeeld over alles ertussen. Vooral nuttig als je begin en einde van de funnel los wilt waarderen. Position-based is een veilige middenweg als data-driven nog niet beschikbaar is.
                        </p>

                        <h3 className="font-semibold text-primary text-xl mt-10 mb-4">Data-driven attribution</h3>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Hier rekent een algoritme uit welke combinaties van touchpoints daadwerkelijk vaker tot een conversie leiden. Het verdeelt de waarde op basis van werkelijke patronen in jouw data, niet op een vaste regel. Dit is vandaag het standaardmodel in Google Ads en GA4 zodra je voldoende data hebt. Het komt het dichtst in de buurt van de echte werkelijkheid.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat is het verschil tussen last click en data-driven in de praktijk?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Stel je een webshop voor met vier kanalen: Google Ads search, Meta Ads, een nieuwsbrief en SEO. Een klant ziet een Meta Ads, klikt op een SEO-resultaat, opent later een nieuwsbrief en koopt na een Google Ads klik op zijn merknaam. Last click zegt: alle 100 euro omzet is van Google Ads. Data-driven zegt: 35 procent voor Meta Ads (de eerste prikkel), 25 procent voor SEO, 20 procent voor de nieuwsbrief, 20 procent voor branded Google Ads.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Dat verschil heeft echte gevolgen. Een webshop die wij begeleidden draaide jarenlang op last click en concludeerde dat hun Meta Ads niet rendeerden. Bij overstap naar data-driven bleek Meta Ads bij 38 procent van de aankopen het eerste contactmoment. Stoppen met Meta zou de hele pipeline pijn doen, ook al stond er bij Meta zelf een lage ROAS in de rapportage.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Wil je beter begrijpen hoe je conversies aan kanalen koppelt? Lees ons artikel over <Link to="/blogs/tracking/marketing-tracking-conversies-meten" className="text-accent hover:underline">marketing tracking en conversies meten</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wanneer kies je voor welk attribution model?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De juiste keuze hangt af van twee factoren: hoeveel conversies je per maand hebt en hoe lang jouw beslissingstraject is. Bij minder dan 50 conversies per maand werkt data-driven onbetrouwbaar. Het algoritme heeft te weinig signalen om een eerlijk model te bouwen. Een lineair of position-based model geeft dan een stabieler beeld.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Heb je tussen de 50 en 300 conversies per maand? Dan geeft data-driven al bruikbare inzichten, maar wees voorzichtig met harde conclusies. Sinds november 2025 heeft Google de oude drempel van 300 conversies en 3000 interacties losgelaten. Data-driven is nu standaard beschikbaar voor alle conversieacties. Maar hoe meer data het model heeft, hoe betrouwbaarder de verdeling. Bij weinig conversies kan position-based nog steeds een stabieler beeld geven.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Bij lange B2B trajecten met dertig dagen of meer tussen eerste contact en aankoop is data-driven of position-based vrijwel altijd beter dan last click. Een korte e-commerce funnel met aankoop binnen drie dagen werkt soms ook nog goed met time decay. Wat een goede conversieratio per branche is, lees je in onze <Link to="/blogs/strategie/goede-conversieratio-benchmarks-per-branche" className="text-accent hover:underline">benchmarks per branche</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe stel je data-driven attribution in?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            In Google Ads ga je naar Tools, dan Conversies en kies je per conversieactie het attribution model. Data-driven is sinds 2026 de default voor de meeste accounts, maar check het altijd handmatig. In GA4 stel je het model in onder Admin, Property Settings, Attribution Settings. Houd er rekening mee dat een wijziging je rapportage met terugwerkende kracht aanpast.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Belangrijk vooraf: je conversiemeting moet schoon staan. Dubbele Pixels, gemiste server-side events of UTM-parameters die niet kloppen zorgen ervoor dat data-driven attribution onzin uitspuugt. Begin altijd met een tracking-audit. Onze <Link to="/blogs/tracking/google-tag-manager-beginners" className="text-accent hover:underline">gids over Google Tag Manager voor beginners</Link> laat zien hoe je dat opzet.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat zijn de grootste valkuilen bij attribution?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De eerste valkuil is platforms los bekijken. Google Ads claimt zijn deel, Meta claimt zijn deel en als je beide rapporten optelt heb je meer conversies dan in jouw boekhouding. Beide platforms tellen viewthrough en click-through conversies binnen hun eigen window, dus overlap is onvermijdelijk. Gebruik altijd een centrale bron zoals GA4 of een server-side tracking opzet om de werkelijke som te zien.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Tweede valkuil: te kort kijken. Een attribution model dat zeven dagen aan data gebruikt is zelden representatief. Werk minimaal met 30 tot 90 dagen voordat je conclusies trekt. Vooral bij seizoenspieken of campagnes met een lange aanlooptijd loop je anders het risico dat een toevallige week de hele strategie omdraait.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Derde valkuil: third-party cookies en iOS 14. Sinds 2021 missen platforms een deel van de customer journey. Modellen vullen gaten met statistische schattingen, en hoe minder eigen data je platform heeft, hoe meer schatten. Server-side tracking via de Conversie API maakt dat verschil weer kleiner. Lees onze <Link to="/blogs/social-ads/conversie-api-meta-naast-pixel" className="text-accent hover:underline">uitleg over de Meta Conversie API naast de Pixel</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe vertaal je attribution naar betere campagnebeslissingen?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een attribution model is geen doel op zich. Het bestaat om jou te helpen budget anders te verdelen. Vergelijk daarom altijd minimaal twee modellen naast elkaar in je rapportage: bijvoorbeeld last click en data-driven. Het verschil tussen die twee toont je welke kanalen ondergewaardeerd worden in last click en die je dus durft op te schalen.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een veelgemaakte fout die we tegenkomen: bedrijven die wisselen van model en meteen al hun campagnes herzien op basis van een week aan data. Doe dat niet. Wijzig het model, draai dertig tot negentig dagen door, kijk dan welke kanalen consistent een ander beeld laten zien en pas pas dan je budget aan. Datagedreven werken vraagt geduld.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Wil je weten of jouw attribution model klopt en of jouw budget goed verdeeld is? We doen een gratis tracking-audit en laten zien waar jouw rapportage de werkelijkheid niet weergeeft. Plan een gesprek via onze <Link to="/contact" className="text-accent hover:underline">contactpagina</Link>.
                        </p>
                    </div>

                    {/* FAQ Section */}
                    <section className="mt-16 pt-12 border-t border-primary/10">
                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Veelgestelde vragen</h2>
                        <div className="space-y-6 not-prose">
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat is een attribution model in marketing?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Een attribution model is een rekenregel die bepaalt welk marketingkanaal de credits krijgt voor een conversie. Een klant ziet vaak meerdere advertenties voordat hij koopt. Het model beslist wie van die contactmomenten de waarde krijgt toegewezen.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat is het verschil tussen last click en data-driven attribution?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Last click geeft 100 procent van de waarde aan het laatste kanaal voor de conversie. Data-driven verdeelt de waarde over alle contactmomenten op basis van werkelijke bijdrage. Data-driven is eerlijker, maar vraagt minimaal 300 conversies per maand om betrouwbaar te zijn.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Welk attribution model gebruik je het best als MKB?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Voor de meeste MKB-bedrijven werkt data-driven het beste. Sinds november 2025 is er geen minimumdrempel meer in Google Ads. Hoe meer conversies je hebt, hoe betrouwbaarder het model. Bij weinig data geeft position-based of lineair soms een stabieler beeld. Vergelijk altijd minimaal 30 dagen voordat je een definitieve keuze maakt.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoeveel conversies heb je nodig voor data-driven attribution?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Sinds november 2025 is de oude drempel van 300 conversies en 3000 interacties losgelaten. Data-driven attribution is nu standaard beschikbaar voor alle conversieacties in Google Ads. Het model wordt betrouwbaarder naarmate je meer data hebt, maar er is geen harde ondergrens meer.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Waarom rapporteren Google Ads en Meta samen meer conversies dan ik echt had?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Beide platforms claimen dezelfde conversie als hij in hun click- of viewwindow valt. Een klant die zowel een Google als een Meta Ads zag, telt in beide. Een onafhankelijke bron zoals GA4 of server-side tracking lost die overcounting op.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoe verandert iOS 14 en cookieless tracking attribution?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Sinds iOS 14 en de afbouw van third-party cookies missen platforms een deel van de journey. Modellen vullen die gaten met statistische schattingen. Server-side tracking via de Conversie API of GTM Server-Side blijft het belangrijkste hulpmiddel om data eerlijk te houden.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Kan ik tussen attribution modellen switchen zonder data te verliezen?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Ja, in Google Ads en GA4 kun je modellen vergelijken zonder dat je conversiedata verandert. Het model bepaalt alleen hoe de getoonde waarde is verdeeld, niet of de conversie is geregistreerd. Vergelijk altijd minimaal 30 dagen voor een definitieve keuze.</p>
                            </div>
                        </div>
                    </section>

                    {/* Related Links */}
                    <section className="mt-16 pt-12 border-t border-primary/10">
                        <h3 className="text-xl font-bold text-primary mb-6">Lees ook</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <Link to="/blogs/tracking/marketing-tracking-conversies-meten" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Marketing tracking en conversies meten</h3>
                                <p className="text-primary/60 text-sm">De basis van schone meting voordat je over attribution gaat nadenken.</p>
                            </Link>
                            <Link to="/blogs/tracking/utm-parameters-gebruiken-alle-marketingkanalen" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">UTM parameters gebruiken</h3>
                                <p className="text-primary/60 text-sm">Hoe je elk kanaal labelt zodat jouw attribution rapportage klopt.</p>
                            </Link>
                            <Link to="/blogs/social-ads/conversie-api-meta-naast-pixel" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Conversie API naast de Meta Pixel</h3>
                                <p className="text-primary/60 text-sm">Server-side tracking houdt jouw attribution eerlijk in een cookieless wereld.</p>
                            </Link>
                        </div>
                    </section>
                </div>
            </article>

            {/* Bottom CTA */}
            <section className="w-full pb-32 px-6">
                <div className="max-w-4xl mx-auto bg-primary rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
                    <h2 className="relative z-10 font-drama italic text-background text-3xl sm:text-4xl md:text-5xl mb-6">Eerlijke cijfers, slimmere keuzes</h2>
                    <p className="relative z-10 font-sans text-background/70 text-lg mb-10 max-w-xl mx-auto">We doen een gratis tracking-audit en laten zien waar jouw rapportage de werkelijkheid niet weergeeft. Geen verplichtingen.</p>
                    <Link to="/contact" className="relative z-10 btn-magnetic inline-flex items-center justify-center bg-accent text-background font-sans font-bold text-lg px-10 py-4 rounded-[2rem] hover:bg-accent/90 transition-colors">Neem contact op</Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
