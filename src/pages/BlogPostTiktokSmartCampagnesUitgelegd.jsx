import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ChevronRight, User } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function BlogPostTiktokSmartCampagnesUitgelegd() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen selection:bg-accent/30 selection:text-dark flex flex-col bg-background">
            <Helmet>
                <title>TikTok Smart+ campagnes uitgelegd | Empowers</title>
                <meta name="description" content="TikTok Smart+ laat het algoritme het werk doen. Lees wanneer Smart+ werkt, wanneer handmatig beter is en hoe je je campagne goed voedt." />
                <link rel="canonical" href="https://www.empowers.nl/blogs/social-ads/tiktok-smart-campagnes-uitgelegd" />
                <meta property="og:title" content="TikTok Smart+ campagnes uitgelegd" />
                <meta property="og:description" content="Hoe Smart+ campagnes werken, voor wie ze rendement opleveren en welke valkuilen je moet kennen." />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://www.empowers.nl/blogs/social-ads/tiktok-smart-campagnes-uitgelegd" />
                <meta property="og:image" content="https://www.empowers.nl/images/blogs/tiktok-smart-campagnes-uitgelegd.jpg" />
                <meta property="article:published_time" content="2026-05-07T23:30:00+02:00" />
                <meta property="article:author" content="Empowers" />
                <meta property="article:section" content="Social Ads" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="TikTok Smart+ campagnes uitgelegd" />
                <meta name="twitter:description" content="Wanneer Smart+ campagnes werken, wanneer handmatig beter is, en hoe je het algoritme goed voedt." />

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Article",
                        "headline": "TikTok Smart+ campagnes uitgelegd",
                        "description": "Hoe TikTok Smart+ campagnes werken, voor wie ze renderen en welke fouten je voorkomt om het algoritme zijn werk te laten doen.",
                        "image": "https://www.empowers.nl/images/blogs/tiktok-smart-campagnes-uitgelegd.jpg",
                        "datePublished": "2026-05-07T23:30:00+02:00",
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
                                    "name": "Wat zijn TikTok Smart+ campagnes precies?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Smart+ is TikTok's volledig geautomatiseerde campagnemodus, vergelijkbaar met Advantage+ Shopping van Meta. Je levert je productcatalogus, je creatives en je budget. Het algoritme bepaalt zelf welke gebruiker je advertentie ziet, op welke plaatsing, met welk bod en welke creative. Je hebt minder controle, maar in ruil daarvoor put het algoritme veel breder dan een handmatig opgezette campagne kan."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Voor wie werken Smart+ campagnes het beste?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Smart+ werkt het beste voor webshops met een gevulde productcatalogus, gezonde Pixel-data en minimaal twintig conversies per week per campagne. Bij minder data heeft het algoritme te weinig signaal om effectief te leren. Voor accounts in de opstartfase of met een beperkt assortiment werkt een handmatige campagne meestal beter."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Wat is het verschil met handmatige campagnes?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Bij een handmatige campagne kies je zelf de doelgroep, plus de plaatsing, het bod en alle randvoorwaarden. Bij Smart+ doet het algoritme dat. Het voordeel van Smart+: je bereikt mensen die je handmatig nooit als doelgroep zou hebben gekozen, op basis van gedragspatronen die jij niet kunt zien. Het nadeel: je kunt minder bijsturen als de campagne niet renderen. Voor de meeste accounts met voldoende data is Smart+ structureel efficiënter."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Hoeveel creatives moet je leveren voor Smart+?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Minimaal vijf tot tien creatives, idealiter rond de vijftien voor een serieuze schaal. Het algoritme test ze tegen verschillende doelgroepen en gebruikt de resultaten om creatives toe te wijzen aan personen waarop ze het beste landen. Met te weinig creatives krijgt het algoritme niet genoeg variatie om te optimaliseren."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Hoeveel budget heb je nodig voor Smart+?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Reken op minimaal 50 tot 100 euro per dag om Smart+ effectief te laten werken. Lager dan dat krijgt het algoritme onvoldoende ruimte om te testen en blijft de leerfase hangen. Voor grotere webshops met dagbudgetten boven de 200 euro speelt Smart+ vaak zijn echte kracht uit, omdat het algoritme dan voldoende experimenten kan draaien."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Kun je Smart+ combineren met handmatige campagnes?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Ja, en het wordt vaak aanbevolen. Een veelgebruikte structuur: Smart+ voor brede prospecting en algemene catalogusverkoop, handmatige campagnes voor specifieke promoties zoals retargeting of branded acties. Zo combineer je de schaalbaarheid van Smart+ met de controle van handmatig opgezette campagnes voor specifieke doelen."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Welke fouten worden bij Smart+ vaak gemaakt?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "De meest gemaakte fouten: te vroeg ingrijpen in de leerfase, een onvolledige productfeed waardoor producten worden afgekeurd, te weinig creatives waardoor het algoritme niet kan testen, en te lage budgetten waardoor de campagne nooit door de leerfase komt. Wie deze valkuilen voorkomt ziet Smart+ doorgaans renderen binnen drie tot vier weken."
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
                            { "@type": "ListItem", "position": 4, "name": "TikTok Smart+ campagnes", "item": "https://www.empowers.nl/blogs/social-ads/tiktok-smart-campagnes-uitgelegd" }
                        ]
                    })}
                </script>
            </Helmet>

            <Navbar />

            <article className="w-full pt-40 pb-24 px-6 relative">
                <div className="max-w-4xl mx-auto">
                    <nav className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-primary/50 mb-12">
                        <Link to="/" className="hover:text-accent transition-colors">Home</Link>
                        <ChevronRight className="w-3 h-3" />
                        <Link to="/nieuws" className="hover:text-accent transition-colors">Nieuws</Link>
                        <ChevronRight className="w-3 h-3" />
                        <Link to="/blogs/social-ads" className="hover:text-accent transition-colors">Social Ads</Link>
                        <ChevronRight className="w-3 h-3" />
                        <span className="text-primary truncate">TikTok Smart+ campagnes</span>
                    </nav>

                    <header className="mb-16">
                        <div className="inline-block px-3 py-1 bg-accent/10 text-accent font-mono text-xs uppercase tracking-widest rounded-full mb-6">
                            Social Ads
                        </div>
                        <h1 className="font-sans font-bold text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight mb-8">
                            TikTok Smart+ campagnes uitgelegd
                        </h1>
                        <div className="flex flex-wrap items-center gap-6 text-sm font-sans text-primary/60 border-y border-primary/10 py-6">
                            <div className="flex items-center gap-2"><User className="w-4 h-4" /><span>Empowers Redactie</span></div>
                            <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>7 mei 2026</span></div>
                            <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>8 minuten leestijd</span></div>
                        </div>
                    </header>

                    <figure className="w-full h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden mb-16 relative bg-primary">
                        <div className="absolute inset-0 bg-[url('/images/blogs/tiktok-smart-campagnes-uitgelegd.jpg')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </figure>

                    <div className="prose prose-lg max-w-none prose-headings:text-primary prose-headings:font-bold prose-a:text-accent prose-a:underline hover:prose-a:text-accent/80">
                        <p className="text-xl leading-relaxed text-primary/80 font-medium mb-6">
                            Smart+ campagnes zijn TikTok's antwoord op de groeiende rol van algoritmen in advertising. Je levert je creatives en productcatalogus, en het systeem bepaalt zelf wie de advertentie ziet, hoeveel je biedt en welke creative bij welke gebruiker hoort. Klinkt als geld weggeven aan een black box. In werkelijkheid is Smart+ voor steeds meer webshops het meest rendabele kanaal binnen TikTok. In deze blog lees je hoe het werkt, voor wie het werkt en wanneer je beter handmatig blijft sturen.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat Smart+ precies is</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Smart+ is de geautomatiseerde campagnemodus binnen TikTok Ads Manager, vergelijkbaar met Advantage+ Shopping van Meta. Je hoeft geen doelgroep meer in te stellen, geen plaatsingen te kiezen, geen biedstrategie handmatig in te richten. Je geeft het systeem drie inputs: je productcatalogus, je creatives en je budget. Het algoritme bouwt op die basis een campagne die zichzelf optimaliseert in real time.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Wat dat in de praktijk betekent: het algoritme kiest per impressie welke gebruiker je advertentie ziet, welke creative hij krijgt en wat die plaatsing waard is. Voor een webshop met honderd producten en tien creatives zijn dat duizenden mogelijke combinaties die handmatig nooit te beheren zijn. Smart+ doet dat continu en past zich aan op basis van wat werkt.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Voor wie werkt Smart+ goed?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Smart+ werkt het beste onder drie voorwaarden. Eén: je hebt een goed gevulde productcatalogus die strak is bijgewerkt. Twee: je Pixel of Events API levert betrouwbare conversiedata, idealiter minstens twintig conversies per week per campagne. Drie: je budget is groot genoeg om het algoritme ruimte te geven, vanaf 50 tot 100 euro per dag.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Mist een van deze drie voorwaarden, dan verliest Smart+ veel van zijn kracht. Een onvolledige catalogus betekent dat het algoritme producten promoot die zijn afgekeurd of niet meer op voorraad. Te weinig conversiedata betekent dat het algoritme niet weet wie er gaat kopen. Te laag budget betekent dat de leerfase nooit voltooid wordt. Voor accounts die deze randvoorwaarden nog niet op orde hebben blijft een handmatige campagne meestal te verkiezen. Hoe je tracking goed inricht beschreven we in onze blog over <Link to="/blogs/social-ads/tiktok-pixel-instellen-stap-stap" className="text-accent hover:underline">de TikTok Pixel installeren</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe verschilt Smart+ van handmatige campagnes?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Bij een handmatige campagne kies je zelf wie de doelgroep is. Bijvoorbeeld vrouwen tussen 25 en 45 met interesse in mode in steden boven de 100.000 inwoners. Heel concreet, heel beheersbaar, maar ook beperkend. Bij Smart+ doet het algoritme dat werk en kijkt naar gedragssignalen die jij niet kunt zien. Wie heeft eerder een soortgelijk product gekocht? Wie is recent op een vergelijkbare site geweest? Wie laat koopgedrag zien dat past bij jouw klantprofiel? Het systeem combineert duizenden van deze signalen.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Het voordeel: je bereikt mensen die je handmatig nooit als doelgroep zou hebben gekozen. Het nadeel: je verliest controle over precies wie er bereikt wordt. Voor de meeste B2C-webshops weegt het voordeel zwaarder. Voor merken die strikte demografische restricties hebben (bijvoorbeeld omwille van wettelijke regels in alcohol of gokken) blijft handmatige targeting noodzakelijk.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoeveel creatives moet je leveren?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een fundamentele eis bij Smart+ is genoeg creative-variatie. Minder dan vijf creatives in een campagne is te weinig. Het algoritme kan dan niet testen welke variant bij welke doelgroep het beste landt. Tien tot vijftien creatives is een gezonde basis. Hoe meer variatie in stijl en hook, plus verschillende pacing-opbouw per video, hoe beter het algoritme zijn werk kan doen.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Werk met UGC-stijl content waar mogelijk. Smart+ rolt creatives uit naar publiek dat soms ver afwijkt van wat jij als 'jouw doelgroep' had bedacht. Een gepolijste reclamevideo werkt op die brede groep zelden. Native ogende videos die opgaan in de feed scoren structureel beter. Hoe je goede creatives bouwt voor TikTok hebben we recent uitgewerkt in onze blog over <Link to="/blogs/social-ads/tiktok-ads-video-converteert" className="text-accent hover:underline">TikTok-videos die converteren</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Budget en biedstrategie binnen Smart+</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Smart+ kiest zelf de biedstrategie binnen jouw budget. Je geeft een dagbudget mee en eventueel een doel-CPA. Het algoritme zoekt vervolgens de meest efficiënte route naar dat doel. Te lage budgetten zijn de grootste vijand van Smart+. Onder de 50 euro per dag krijgt het systeem onvoldoende ruimte om te testen en blijven resultaten teleurstellend, ongeacht de creative-kwaliteit.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Voor accounts die schalen werkt Smart+ vaak vanaf 100 tot 200 euro per dag echt goed. Daarboven speelt het systeem zijn kracht uit omdat het voldoende experimenten kan draaien om patronen te leren. Verhoog budget geleidelijk, maximaal 20 procent per stap met minstens vier dagen ertussen. Sneller verhogen reset effectief de leerfase. Hoe je gestructureerd opschaalt zonder algoritmes te verstoren leggen we uit in onze blog over <Link to="/blogs/google-ads/google-ads-schalen-zonder-budget-verdubbelen" className="text-accent hover:underline">Google Ads-budget schalen</Link>, en de logica geldt op TikTok identiek.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Smart+ combineren met handmatige campagnes</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De beste resultaten zien we bij accounts die Smart+ combineren met losse handmatige campagnes. Smart+ pakt het brede prospecting-werk en algemene catalogusverkoop. Daarnaast draaien er handmatige campagnes voor specifieke doelen die meer controle vragen. Een seizoensaanbieding waarbij timing kritisch is. Retargeting tegen mensen die je site bezochten zonder kopen. Branded campagnes waarin je eigen klanten target met cross-sell.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Pas op voor budgetkannibalisatie tussen beide structuren. Als je Smart+ en handmatig naar dezelfde doelgroep laat lopen, ga je tegen jezelf bieden in de TikTok-veiling. De CPM stijgt zonder dat je iets terugkrijgt. Splits het werk inhoudelijk: Smart+ voor wat het algoritme beter doet, handmatig voor wat specifieke sturing vraagt.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">De fouten die we het vaakst zien</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Vier patronen blijven terugkomen bij accounts die Smart+ niet aan de praat krijgen. De eerste: te vroeg ingrijpen. Smart+ heeft minimaal twee tot drie weken nodig om door de leerfase te komen. Wijzigingen in de eerste twee weken resetten effectief het leerproces. Geduld is hier geen optie maar een vereiste.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De tweede: een onvolledige productfeed. Producten zonder afbeelding, zonder beschrijving of met afgekeurde categorieën verzwakken het hele algoritme, niet alleen die specifieke producten. Check wekelijks de Diagnose-tab in TikTok Business Center.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De derde: te weinig creatives. Drie video's voor een Smart+ campagne is te weinig. Het algoritme kan niet testen, niet optimaliseren, niet variëren. Tien tot vijftien is het minimum voor serieuze prestaties.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De vierde: te lage budgetten. Smart+ proberen met 30 euro per dag is alsof je een Formule 1-auto in de eerste versnelling laat. Het systeem komt nooit op snelheid. Reken op minimaal 50 euro per dag, idealiter 100 plus voor wie schaalvol wil draaien.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat brengt het voor jouw account?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Webshops die de randvoorwaarden goed neerzetten zien Smart+ doorgaans renderen binnen drie tot vier weken. CPA's die structureel onder handmatige campagnes liggen, vaak met dertig tot vijftig procent. Niet door magie, maar door schaal in beslissingen die handmatig niet mogelijk is. Een mens kan geen duizenden combinaties per uur testen. Het algoritme wel.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De winst zit in vertrouwen geven. Niet aan iedere knop draaien, niet panikeren in de leerfase, niet steeds de hand op de gaspedaal hebben. Wil je dat we mét je meekijken naar je TikTok-account voordat je Smart+ aanzet? Plan een gesprek via onze <Link to="/contact" className="text-accent hover:underline">contactpagina</Link>. We doorlopen je catalogus, je tracking en je creatives, en wijzen aan welke randvoorwaarden je eerst moet aanscherpen voordat het algoritme zijn werk kan doen.
                        </p>
                    </div>

                    <section className="mt-16 pt-12 border-t border-primary/10">
                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Veelgestelde vragen</h2>
                        <div className="space-y-6 not-prose">
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat zijn TikTok Smart+ campagnes precies?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Smart+ is TikTok's volledig geautomatiseerde campagnemodus, vergelijkbaar met Advantage+ Shopping van Meta. Je levert je productcatalogus, je creatives en je budget. Het algoritme bepaalt zelf welke gebruiker je advertentie ziet, op welke plaatsing, met welk bod en welke creative. Je hebt minder controle, maar in ruil daarvoor put het algoritme veel breder dan een handmatig opgezette campagne kan.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Voor wie werken Smart+ campagnes het beste?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Smart+ werkt het beste voor webshops met een gevulde productcatalogus, gezonde Pixel-data en minimaal twintig conversies per week per campagne. Bij minder data heeft het algoritme te weinig signaal om effectief te leren. Voor accounts in de opstartfase of met een beperkt assortiment werkt een handmatige campagne meestal beter.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat is het verschil met handmatige campagnes?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Bij een handmatige campagne kies je zelf de doelgroep, plus de plaatsing, het bod en alle randvoorwaarden. Bij Smart+ doet het algoritme dat. Het voordeel van Smart+: je bereikt mensen die je handmatig nooit als doelgroep zou hebben gekozen, op basis van gedragspatronen die jij niet kunt zien. Het nadeel: je kunt minder bijsturen als de campagne niet renderen. Voor de meeste accounts met voldoende data is Smart+ structureel efficiënter.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoeveel creatives moet je leveren voor Smart+?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Minimaal vijf tot tien creatives, idealiter rond de vijftien voor een serieuze schaal. Het algoritme test ze tegen verschillende doelgroepen en gebruikt de resultaten om creatives toe te wijzen aan personen waarop ze het beste landen. Met te weinig creatives krijgt het algoritme niet genoeg variatie om te optimaliseren.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoeveel budget heb je nodig voor Smart+?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Reken op minimaal 50 tot 100 euro per dag om Smart+ effectief te laten werken. Lager dan dat krijgt het algoritme onvoldoende ruimte om te testen en blijft de leerfase hangen. Voor grotere webshops met dagbudgetten boven de 200 euro speelt Smart+ vaak zijn echte kracht uit, omdat het algoritme dan voldoende experimenten kan draaien.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Kun je Smart+ combineren met handmatige campagnes?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Ja, en het wordt vaak aanbevolen. Een veelgebruikte structuur: Smart+ voor brede prospecting en algemene catalogusverkoop, handmatige campagnes voor specifieke promoties zoals retargeting of branded acties. Zo combineer je de schaalbaarheid van Smart+ met de controle van handmatig opgezette campagnes voor specifieke doelen.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Welke fouten worden bij Smart+ vaak gemaakt?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">De meest gemaakte fouten: te vroeg ingrijpen in de leerfase, een onvolledige productfeed waardoor producten worden afgekeurd, te weinig creatives waardoor het algoritme niet kan testen, en te lage budgetten waardoor de campagne nooit door de leerfase komt. Wie deze valkuilen voorkomt ziet Smart+ doorgaans renderen binnen drie tot vier weken.</p>
                            </div>
                        </div>
                    </section>

                    <section className="mt-16 pt-12 border-t border-primary/10">
                        <h3 className="text-xl font-bold text-primary mb-6">Lees ook</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <Link to="/blogs/social-ads/tiktok-ads-webshops-boost-sales" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">TikTok Ads voor webshops</h3>
                                <p className="text-primary/60 text-sm">Hoe je TikTok-campagnes opzet die werkelijk omzet draaien.</p>
                            </Link>
                            <Link to="/blogs/social-ads/tiktok-ads-video-converteert" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">TikTok video die converteert</h3>
                                <p className="text-primary/60 text-sm">Welke hooks, opbouw en CTA's structureel meer omzet opleveren.</p>
                            </Link>
                            <Link to="/blogs/social-ads/tiktok-pixel-instellen-stap-stap" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">TikTok Pixel instellen</h3>
                                <p className="text-primary/60 text-sm">De randvoorwaarde voor elke werkende Smart+ campagne.</p>
                            </Link>
                        </div>
                    </section>

                </div>
            </article>

            <section className="w-full pb-32 px-6">
                <div className="max-w-4xl mx-auto bg-primary rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
                    <h2 className="relative z-10 font-drama italic text-background text-3xl sm:text-4xl md:text-5xl mb-6">
                        Smart+ goed laten draaien?
                    </h2>
                    <p className="relative z-10 font-sans text-background/70 text-lg mb-10 max-w-xl mx-auto">
                        We zorgen dat je catalogus, tracking en creatives kloppen voordat je het algoritme aanzet. Plan een vrijblijvend gesprek en je weet binnen een week of Smart+ voor jouw account werkt.
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
