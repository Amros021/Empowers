import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ChevronRight, User } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function BlogPostMeetRoiGoogleAdsCampagne() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen selection:bg-accent/30 selection:text-dark flex flex-col bg-background">
            <Helmet>
                <title>Hoe meet je de ROI van je Google Ads campagne? | Empowers</title>
                <meta name="description" content="ROI meten in Google Ads is meer dan kijken naar conversies. Lees welke cijfers je echt moet volgen om te weten of je campagne geld oplevert." />
                <link rel="canonical" href="https://www.empowers.nl/blogs/google-ads/meet-roi-google-ads-campagne" />
                <meta property="og:title" content="Hoe meet je de ROI van je Google Ads campagne?" />
                <meta property="og:description" content="ROI meten in Google Ads is meer dan kijken naar conversies. Zo reken je het echte rendement van je campagne uit." />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://www.empowers.nl/blogs/google-ads/meet-roi-google-ads-campagne" />
                <meta property="og:image" content="https://www.empowers.nl/images/blogs/meet-roi-google-ads-campagne.jpg" />
                <meta property="article:published_time" content="2026-04-09" />
                <meta property="article:author" content="Empowers" />
                <meta property="article:section" content="Google Ads" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Hoe meet je de ROI van je Google Ads campagne?" />
                <meta name="twitter:description" content="Zo bereken je de echte ROI van je Google Ads campagne, zonder jezelf rijk te rekenen." />

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Article",
                        "headline": "Hoe meet je de ROI van je Google Ads campagne?",
                        "description": "ROI meten in Google Ads is meer dan kijken naar conversies. Lees welke cijfers je echt moet volgen om te weten of je campagne geld oplevert.",
                        "image": "https://www.empowers.nl/images/blogs/meet-roi-google-ads-campagne.jpg",
                        "datePublished": "2026-04-09T00:00:00+02:00",
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
                                    "name": "Wat is een goede ROI voor Google Ads?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Een gezonde ROI hangt af van je marge, maar als vuistregel geldt dat je minimaal 4 euro omzet wilt zien voor elke euro advertentiebudget. Bij webshops met lage marges is 6 tot 8 euro gebruikelijker. Voor dienstenbedrijven met hoge marges kan een ROI van 3 al winstgevend zijn."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Wat is het verschil tussen ROI en ROAS?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "ROAS (Return On Ad Spend) meet alleen de omzet die tegenover je advertentiekosten staat. ROI (Return On Investment) kijkt naar de daadwerkelijke winst na aftrek van inkoop, marge en kosten. ROAS is sneller te meten, ROI vertelt of je echt geld verdient."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Hoe stel ik conversietracking in voor ROI meten?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Koppel Google Ads aan je website via Google Tag Manager en stel conversies in voor elke waardevolle actie: aankoop, lead, telefoongesprek of offerte-aanvraag. Geef elke conversie een waarde zodat Google kan optimaliseren op omzet, niet op losse kliks."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Moet ik ook offline conversies meenemen in mijn ROI berekening?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Ja, anders onderschat je je campagne flink. Telefoongesprekken, showroombezoeken en deals die pas na weken sluiten horen erbij. Importeer offline conversies via een CSV-upload of CRM-koppeling zodat Google de volledige klantreis ziet."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Hoe lang moet ik wachten voordat ik ROI kan beoordelen?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Bij webshops zie je binnen twee tot vier weken een betrouwbaar beeld. Bij leadgeneratie of lange verkooptrajecten heb je minimaal acht tot twaalf weken nodig voordat je ROI echt representatief is. Trek dus niet te snel conclusies."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Waarom klopt de ROI in Google Ads niet altijd met mijn boekhouding?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Google Ads rapporteert op klikdatum, je boekhouding op factuurdatum. Daarnaast telt Google soms dubbele conversies of assisted conversies mee. Vergelijk daarom altijd maandcijfers en gebruik je eigen CRM of boekhouding als leidraad."
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
                                "name": "ROI Google Ads meten",
                                "item": "https://www.empowers.nl/blogs/google-ads/meet-roi-google-ads-campagne"
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
                        <span className="text-primary truncate">ROI meten</span>
                    </nav>

                    {/* Header */}
                    <header className="mb-16">
                        <div className="inline-block px-3 py-1 bg-accent/10 text-accent font-mono text-xs uppercase tracking-widest rounded-full mb-6">
                            Google Ads
                        </div>
                        <h1 className="font-sans font-bold text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight mb-8">
                            Hoe meet je de ROI van je Google Ads campagne?
                        </h1>

                        <div className="flex flex-wrap items-center gap-6 text-sm font-sans text-primary/60 border-y border-primary/10 py-6">
                            <div className="flex items-center gap-2">
                                <User className="w-4 h-4" />
                                <span>Empowers Redactie</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>9 april 2026</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>8 minuten leestijd</span>
                            </div>
                        </div>
                    </header>

                    {/* Featured Image */}
                    <figure className="w-full h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden mb-16 relative bg-primary">
                        <div className="absolute inset-0 bg-[url('/images/blogs/meet-roi-google-ads-campagne.jpg')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </figure>

                    {/* Content */}
                    <div className="prose prose-lg max-w-none prose-headings:text-primary prose-headings:font-bold prose-a:text-accent prose-a:underline hover:prose-a:text-accent/80">
                        <p className="text-xl leading-relaxed text-primary/80 font-medium mb-6">
                            De ROI van je Google Ads campagne meet je door de winst uit je advertenties te delen door de advertentiekosten en het resultaat te vermenigvuldigen met honderd. Maar die formule is pas waardevol als je ook de juiste conversies, marges en offline omzet meerekent. Lees hier hoe je dat stap voor stap aanpakt, welke cijfers je echt moet volgen en waarom ROI iets anders is dan ROAS.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Waarom is ROI meten zo belangrijk?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Zonder ROI-inzicht adverteer je blind. Je ziet kliks, conversies en misschien omzet, maar weet niet of er aan het eind van de maand geld overblijft. Veel ondernemers staren zich blind op dalende klikprijzen of stijgende conversies zonder door te rekenen wat het echt oplevert.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Goede ROI-meting vertelt je welke campagnes, zoekwoorden en advertenties winst maken en welke verliezen draaien. Dat helpt je om budget slim te verdelen en sneller op te schalen waar het werkt. Zonder dat inzicht stuur je op buikgevoel en verlies je geld aan campagnes die er mooi uitzien op papier.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat is het verschil tussen ROI en ROAS?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            ROAS staat voor Return On Ad Spend en meet de omzet per euro advertentiebudget. Een ROAS van 5 betekent dat elke euro advertentiebudget 5 euro omzet oplevert. Simpel en snel te meten, maar het zegt niks over winst.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            ROI kijkt verder. Van die 5 euro omzet trek je inkoopkosten, verzendkosten en andere uitgaven af. Wat overblijft is je werkelijke winst en dat getal leg je naast je advertentiekosten. Een webshop met een ROAS van 5 maar een marge van 20 procent draait verlies. Dezelfde ROAS bij een SaaS-product met 80 procent marge is een feest.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Reken dus altijd door naar ROI voordat je conclusies trekt. De formule: (winst uit campagne − advertentiekosten) / advertentiekosten × 100. Dat geeft je een percentage dat je direct kunt vergelijken met andere investeringen in je bedrijf.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe stel je conversietracking goed in?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Zonder betrouwbare conversietracking meet je niks. Start daarom met een schone Google Tag Manager setup waarin je elke waardevolle actie registreert: aankoop, offerte-aanvraag, telefoongesprek, formulier of contactformulier. Elke conversie krijgt een vaste waarde in euro's, niet alleen een stuks-telling.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Voor webshops koppel je de transactiewaarde dynamisch door vanuit je shop-platform. Voor leadgeneratie gebruik je een gemiddelde orderwaarde op basis van je historische data. Die waardes zijn nooit perfect, maar beter dan niks en stelt Google in staat om te optimaliseren op omzet. Meer over een solide meetsetup lees je in onze gids <Link to="/blogs/tracking/google-tag-manager-beginners" className="text-accent hover:underline">Google Tag Manager voor beginners</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Welke cijfers moet je echt volgen?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Kijk verder dan kliks en conversies. De cijfers die er echt toe doen vertellen je of je campagne groeit of stilletjes leegloopt. Begin bij de kostprijs per conversie en leg die naast je gemiddelde orderwaarde en marge.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Daarna kijk je naar de verhouding tussen klanten die één keer kopen en klanten die terugkomen. Een campagne die nieuwe klanten levert die later nog twee keer bestellen, is veel waardevoller dan eenmalige kopers. Die lifetime value hoort thuis in je ROI berekening, al is het maar als schatting.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Vergeet ook de assisted conversies niet. Google Ads kan een bezoeker aantrekken die later via Google of direct terugkomt en dan pas koopt. Die assists staan in je attributierapport en horen voor een deel bij je campagne. Negeer je ze, dan onderschat je je ROI structureel.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe neem je offline omzet mee?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Veel MKB-bedrijven sluiten deals niet online. Een bezoeker vult een formulier in, jij belt terug en een week later tekent hij een offerte. Google Ads ziet alleen die eerste lead en weet niks over de uiteindelijke waarde. Zonder offline conversies mis je het belangrijkste stukje van je ROI berekening.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De oplossing is een CRM-koppeling of een wekelijkse CSV-upload. Je stuurt Google een bestand met Google Click ID (GCLID), datum en dealwaarde. Google koppelt die deals terug aan de juiste klik en rekent ze mee in je rapportages. Vanaf dat moment optimaliseert Google niet op leads, maar op echte klanten.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Dit klinkt technisch, maar het is in een middag ingericht. Het verschil in campagneresultaat is groot: je ziet vaak dat zoekwoorden die weinig leads opleveren wel de beste klanten aantrekken. Zonder offline meting zou je die juist pauzeren.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe reken je ROI per campagne uit?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Begin met het totaal aan omzet dat een campagne heeft gegenereerd. Trek daar de inkoopkosten, verzendkosten en eventuele retourkosten af. Wat overblijft is je brutomarge. Haal daar vervolgens de advertentiekosten van af en deel het resultaat door diezelfde advertentiekosten.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een voorbeeld: je draait een campagne die 3.000 euro aan omzet oplevert bij 500 euro advertentiebudget. Je marge is 40 procent, dus de brutowinst is 1.200 euro. Trek de 500 euro advertentiekosten eraf en je houdt 700 euro netto over. ROI = 700 / 500 × 100 = 140 procent. Voor elke euro advertentiekosten krijg je 1,40 euro winst terug.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Doe deze berekening per campagne, niet alleen op accountniveau. Anders zie je niet welke campagnes verlies draaien en welke goud zijn. Sommige campagnes in je account kunnen minnen terwijl de totale ROI er goed uitziet.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Welke tools helpen je bij ROI meten?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Google Ads zelf biedt conversiewaarde en ROAS-rapportages in het dashboard. Combineer dat met Google Analytics 4 voor attributiemodellen en bezoekgedrag. Voor webshops vult Shopify, WooCommerce of Magento de transactiewaarde automatisch aan.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Voor leadgeneratie gebruik je een CRM als HubSpot, Pipedrive of Teamleader, gekoppeld aan Google Ads via offline conversies. Wil je het overzichtelijker? Tools als Looker Studio of Supermetrics trekken je data uit alle bronnen samen in één dashboard. Zo zie je in één oogopslag welke campagnes rendement halen.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe voorkom je dat je jezelf rijk rekent?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De grootste valkuil bij ROI meten is dat je cijfers gebruikt die er beter uitzien dan ze zijn. Google Ads rekent bijvoorbeeld last-click conversies standaard volledig toe aan een campagne, ook als meerdere kanalen hebben bijgedragen. Zet je attributiemodel op data-driven zodat je rechtvaardig verdeelt.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Controleer je cijfers bovendien maandelijks tegen je boekhouding. Komt de totale omzet uit Google Ads overeen met wat je daadwerkelijk hebt gefactureerd? Zit er een groot gat? Dan zijn je waardes of je conversies niet kloppend. Fix dat eerst voordat je grote budgetbeslissingen neemt. Zie ook onze blog over <Link to="/blogs/strategie/goede-conversieratio-benchmarks-per-branche" className="text-accent hover:underline">goede conversieratio benchmarks per branche</Link> voor realistische vergelijkingen.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Zo haal je meer rendement uit je campagnes</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            ROI meten is geen eenmalige klus, maar een vast onderdeel van je marketingritme. Zet je conversies goed op, reken door naar winst, en kijk niet alleen naar het totale account maar per campagne, advertentiegroep en zoekwoord. Dan weet je precies waar je geld verdient en waar je moet ingrijpen.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Wil je weten of jouw Google Ads echt rendement maakt? We doen een gratis check van je tracking en ROI setup en laten zien waar de grootste winst ligt. Plan een gesprek via onze <Link to="/contact" className="text-accent hover:underline">contactpagina</Link>.
                        </p>
                    </div>

                    {/* FAQ Section */}
                    <section className="mt-16 pt-12 border-t border-primary/10">
                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Veelgestelde vragen</h2>
                        <div className="space-y-6 not-prose">
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat is een goede ROI voor Google Ads?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Een gezonde ROI hangt af van je marge, maar als vuistregel geldt dat je minimaal 4 euro omzet wilt zien voor elke euro advertentiebudget. Bij webshops met lage marges is 6 tot 8 euro gebruikelijker. Voor dienstenbedrijven met hoge marges kan een ROI van 3 al winstgevend zijn.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat is het verschil tussen ROI en ROAS?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    ROAS (Return On Ad Spend) meet alleen de omzet die tegenover je advertentiekosten staat. ROI (Return On Investment) kijkt naar de daadwerkelijke winst na aftrek van inkoop, marge en kosten. ROAS is sneller te meten, ROI vertelt of je echt geld verdient.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoe stel ik conversietracking in voor ROI meten?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Koppel Google Ads aan je website via Google Tag Manager en stel conversies in voor elke waardevolle actie: aankoop, lead, telefoongesprek of offerte-aanvraag. Geef elke conversie een waarde zodat Google kan optimaliseren op omzet, niet op losse kliks.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Moet ik ook offline conversies meenemen in mijn ROI berekening?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Ja, anders onderschat je je campagne flink. Telefoongesprekken, showroombezoeken en deals die pas na weken sluiten horen erbij. Importeer offline conversies via een CSV-upload of CRM-koppeling zodat Google de volledige klantreis ziet.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoe lang moet ik wachten voordat ik ROI kan beoordelen?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Bij webshops zie je binnen twee tot vier weken een betrouwbaar beeld. Bij leadgeneratie of lange verkooptrajecten heb je minimaal acht tot twaalf weken nodig voordat je ROI echt representatief is. Trek dus niet te snel conclusies.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Waarom klopt de ROI in Google Ads niet altijd met mijn boekhouding?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Google Ads rapporteert op klikdatum, je boekhouding op factuurdatum. Daarnaast telt Google soms dubbele conversies of assisted conversies mee. Vergelijk daarom altijd maandcijfers en gebruik je eigen CRM of boekhouding als leidraad.
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
                                <p className="text-primary/60 text-sm">7 concrete tips om je klikprijs te verlagen.</p>
                            </Link>
                            <Link to="/blogs/google-ads/smart-bidding-uitgelegd-wanneer-wanneer" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Smart Bidding uitgelegd</h3>
                                <p className="text-primary/60 text-sm">Wanneer laat je Google jouw biedingen sturen?</p>
                            </Link>
                            <Link to="/blogs/strategie/goede-conversieratio-benchmarks-per-branche" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Conversieratio benchmarks</h3>
                                <p className="text-primary/60 text-sm">Wat is een goede conversieratio per branche?</p>
                            </Link>
                        </div>
                    </section>
                </div>
            </article>

            {/* Bottom CTA */}
            <section className="w-full pb-32 px-6">
                <div className="max-w-4xl mx-auto bg-primary rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
                    <h2 className="relative z-10 font-drama italic text-background text-3xl sm:text-4xl md:text-5xl mb-6">Weten wat je campagnes echt opleveren?</h2>
                    <p className="relative z-10 font-sans text-background/70 text-lg mb-10 max-w-xl mx-auto">We checken je tracking en ROI setup en laten zien waar de grootste winst ligt. Zonder verplichtingen.</p>
                    <Link to="/contact" className="relative z-10 btn-magnetic inline-flex items-center justify-center bg-accent text-background font-sans font-bold text-lg px-10 py-4 rounded-[2rem] hover:bg-accent/90 transition-colors">Neem contact op</Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
