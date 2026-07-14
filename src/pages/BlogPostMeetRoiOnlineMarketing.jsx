import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ChevronRight, User } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function BlogPostMeetRoiOnlineMarketing() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen selection:bg-accent/30 selection:text-dark flex flex-col bg-background">
            <Helmet>
                <title>Hoe meet je de ROI van je online marketing? | Empowers</title>
                <meta name="description" content="ROI berekenen van je online marketing is meer dan een formule. Lees welke cijfers je echt nodig hebt, hoe je per kanaal rekent en welke fouten je voorkomt." />
                <link rel="canonical" href="https://www.empowers.nl/blogs/tracking/meet-roi-online-marketing" />
                <meta property="og:title" content="Hoe meet je de ROI van je online marketing?" />
                <meta property="og:description" content="ROI van online marketing meten zonder jezelf rijk te rekenen. Concreet stappenplan per kanaal en valkuilen die elke ondernemer maakt." />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://www.empowers.nl/blogs/tracking/meet-roi-online-marketing" />
                <meta property="og:image" content="https://www.empowers.nl/images/blogs/meet-roi-online-marketing.jpg" />
                <meta property="article:published_time" content="2026-05-12T09:00:00+02:00" />
                <meta property="article:author" content="Empowers" />
                <meta property="article:section" content="Tracking" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Hoe meet je de ROI van je online marketing?" />
                <meta name="twitter:description" content="Zo bereken je de echte ROI van je online marketing per kanaal." />

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Article",
                        "headline": "Hoe meet je de ROI van je online marketing?",
                        "description": "ROI berekenen van je online marketing is meer dan een formule. Lees welke cijfers je echt nodig hebt, hoe je per kanaal rekent en welke fouten je voorkomt.",
                        "image": "https://www.empowers.nl/images/blogs/meet-roi-online-marketing.jpg",
                        "datePublished": "2026-05-12T09:00:00+02:00",
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
                                    "name": "Wat is de ROI van online marketing?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "De ROI van online marketing is het percentage winst dat je terugverdient op je marketinginvestering. Je rekent het uit door de winst uit een kanaal te verminderen met de kosten en het resultaat te delen door diezelfde kosten. Vermenigvuldig met honderd voor het percentage. Een ROI van 200 procent betekent dat elke geïnvesteerde euro twee euro winst oplevert bovenop de inleg."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Welke kosten neem ik mee in mijn ROI berekening?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Tel naast je advertentiebudget ook de bureaukosten, software-abonnementen, content-productie en de tijd van je team. Anders lijkt je ROI mooi op papier maar zit je in de praktijk te krap. Voor een eerlijke vergelijking tussen kanalen gebruik je altijd dezelfde kostenposten."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Hoe lang moet ik wachten voordat ROI betrouwbaar is?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Voor webshops en directe verkoop heb je vaak na een maand een eerste signaal. Bij leadgeneratie of B2B-trajecten met lange salescycli reken je op drie tot zes maanden voordat je conclusies kunt trekken. Begin daarom altijd met een nulmeting en een duidelijke verwachting per kanaal."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Wat is een goede ROI voor online marketing?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Dat hangt af van je marge en je doel. Een webshop met krappe marges wil minstens 300 procent ROI om winstgevend te draaien. Bij B2B-diensten met hoge marges kan 100 procent al uitstekend zijn. Vergelijk je ROI niet met die van een ander bedrijf maar met je eigen historische cijfers en met andere investeringen in je bedrijf."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Hoe verdeel ik ROI over meerdere kanalen?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Gebruik een data-driven attributiemodel via GA4 of een mediamix-analyse. Zo zie je welke kanalen meehelpen aan een conversie, ook als ze niet de laatste klik leveren. Last-click attributie geeft een vertekend beeld en doodt vaak juist de campagnes die nieuwe klanten introduceren."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Hoe meet ik ROI van content marketing of SEO?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "SEO en content krijgen de leads die later via een andere klik converteren. Bekijk daarom assisted conversions in GA4, kijk naar de organische sessies die in de salesfunnel komen en reken met een gemiddelde dealwaarde. Geen 1-op-1 koppeling, wel een betrouwbaar beeld over een langere periode."
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
                                "name": "Tracking",
                                "item": "https://www.empowers.nl/blogs/tracking"
                            },
                            {
                                "@type": "ListItem",
                                "position": 4,
                                "name": "ROI online marketing meten",
                                "item": "https://www.empowers.nl/blogs/tracking/meet-roi-online-marketing"
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
                        <Link to="/blogs/tracking" className="hover:text-accent transition-colors">Tracking</Link>
                        <ChevronRight className="w-3 h-3" />
                        <span className="text-primary truncate">ROI online marketing</span>
                    </nav>

                    {/* Header */}
                    <header className="mb-16">
                        <div className="inline-block px-3 py-1 bg-accent/10 text-accent font-mono text-xs uppercase tracking-widest rounded-full mb-6">
                            Tracking
                        </div>
                        <h1 className="font-sans font-bold text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight mb-8">
                            Hoe meet je de ROI van je online marketing?
                        </h1>

                        <div className="flex flex-wrap items-center gap-6 text-sm font-sans text-primary/60 border-y border-primary/10 py-6">
                            <div className="flex items-center gap-2">
                                <User className="w-4 h-4" />
                                <span>Empowers Redactie</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>12 mei 2026</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>9 minuten leestijd</span>
                            </div>
                        </div>
                    </header>

                    {/* Featured Image */}
                    <figure className="w-full h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden mb-16 relative bg-primary">
                        <div className="absolute inset-0 bg-[url('/images/blogs/meet-roi-online-marketing.jpg')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </figure>

                    {/* Content */}
                    <div className="prose prose-lg max-w-none prose-headings:text-primary prose-headings:font-bold prose-a:text-accent prose-a:underline hover:prose-a:text-accent/80">
                        <p className="text-xl leading-relaxed text-primary/80 font-medium mb-6">
                            De ROI van je online marketing meet je door per kanaal de winst te delen door alle kosten die je in dat kanaal stopt, en het resultaat keer honderd te doen. Klinkt simpel. Het lastige zit niet in de formule maar in de cijfers die je erin stopt: welke kosten reken je echt mee, welke conversies tellen, en hoe verdeel je omzet over kanalen die elkaar helpen?
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Waarom de meeste ondernemers hun ROI verkeerd berekenen</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Vraag tien MKB-ondernemers naar de ROI van hun marketing. Negen halen hun Google Ads-dashboard erbij, wijzen naar de ROAS-kolom en zijn klaar. Dat is geen ROI. Dat is een halve foto waar geen marge in zit, geen bureaukosten, geen tijd van het team en geen kruisbestuiving tussen kanalen.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De gevolgen zien we elke week terug. Een webshop die denkt 600 procent ROAS te draaien maar netto verlies maakt omdat de marge op de verkochte producten amper de verzendkosten dekt. Een B2B-bedrijf dat LinkedIn Ads opzegt omdat het "te duur" is, terwijl die kliks juist de offertes triggerden die later via Google terugkwamen. Een SEO-traject dat als "te traag" wordt afgeschoten na drie maanden, op het moment dat het effect normaal pas begint.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            ROI klopt alleen als alle puzzelstukjes erin zitten. En in online marketing zijn dat er meer dan in vrijwel elk ander bedrijfsproces.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">De ROI-formule die wel klopt</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De officiële formule is overal hetzelfde: (winst − kosten) / kosten × 100. Het verschil zit in hoe je "winst" en "kosten" invult. Voor online marketing werkt deze versie:
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            ROI = (toegerekende omzet × brutomarge − totale marketingkosten) / totale marketingkosten × 100.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Onder "totale marketingkosten" verstaan we alles. Mediabudget, het uurtarief van je bureau of in-house marketeer, software-abonnementen, content-productiekosten, en de tijd die jij of je team zelf in campagnes steekt. Sla je die laatste post over, dan krijg je een kunstmatig mooi getal. Wij doen het altijd inclusief, omdat alleen dan duidelijk wordt of een kanaal de moeite waard is.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Klein voorbeeld. Je geeft 5.000 euro per maand uit aan Google Ads, plus 1.500 aan bureaubegeleiding en 200 aan tools. Totale kosten: 6.700. Je rekent 80.000 euro omzet aan de campagne toe, je brutomarge is 30 procent, dus brutowinst 24.000 euro. ROI = (24.000 − 6.700) / 6.700 × 100 = 258 procent. Voor elke euro die in je marketing gaat, krijg je 2,58 euro winst terug bovenop de inleg.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">ROI per kanaal: niet elk kanaal speelt dezelfde rol</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een veelgemaakte fout is alle kanalen langs dezelfde lat leggen. Google Ads pakt vaak de laatste klik en krijgt daarom een ROI van 400 procent. Display campagnes komen op 50 procent uit en gaan eruit. Een halfjaar later daalt de Google Ads ROI ook, omdat er minder nieuwe bezoekers in de funnel komen.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Kanalen hebben verschillende rollen. Demand capture (Google Ads, SEO op transactionele termen) oogst vraag die er al was. Demand creation (Meta, LinkedIn, display, video) zaait die vraag. Reken je beide langs dezelfde lat, dan saboteer je je eigen pijplijn.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Splits daarom je rapportage in twee. Bij oogst-kanalen kijk je naar directe ROI op transactieniveau. Bij zaai-kanalen kijk je naar bereik, herkenning, assisted conversies en de groei van direct verkeer over een langere periode. Een goede vuistregel: oogst-kanalen verantwoorden zich binnen vier weken, zaai-kanalen krijgen drie tot zes maanden.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Conversietracking: zonder dit klopt geen enkel cijfer</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            ROI staat of valt met meten. Verkeerde conversies erin, verkeerde ROI eruit. Klink basisch, gebeurt overal mis. We zien accounts waar elke pagina-view als conversie geldt, accounts zonder dynamische waarde, en accounts die nog steeds last-click in Universal Analytics gebruiken terwijl GA4 al jaren bestaat.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Drie basisregels: meet alleen waardevolle acties (aankoop, lead, demo-aanvraag, telefoongesprek dat langer duurt dan dertig seconden), geef elke actie een geldwaarde gebaseerd op je gemiddelde dealgrootte, en koppel je advertentieplatforms via een server-side setup waar mogelijk. Hoe je dat technisch opzet, lees je in <Link to="/blogs/tracking/google-tag-manager-beginners" className="text-accent hover:underline">Google Tag Manager voor beginners</Link>.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Voor leadgeneratie is offline-conversie-tracking onmisbaar. Je leads worden offline klanten, en zonder die data optimaliseert Google op leads in plaats van op deals. Een goed ingericht CRM stuurt deze data automatisch terug naar je advertentieplatformen. Lees ook onze blog over <Link to="/blogs/tracking/utm-parameters-gebruiken-alle-marketingkanalen" className="text-accent hover:underline">UTM parameters voor al je kanalen</Link> als je daar nog in de basis vastloopt.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Welke kosten je vaak vergeet (en hoe ze je ROI drukken)</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Mediabudget is het zichtbare puntje van de ijsberg. Onder water zit een hele berg kosten die de meeste ondernemers buiten beschouwing laten. Een paar die we structureel zien missen:
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Tooling en software. GA4 is gratis, maar Hotjar, Triple Whale, een goede SEO-tool en een dashboardtool tikken samen al snel honderden euro's per maand aan. Tel ze mee. Content-productie. Een videoset voor je Meta campagne kost niet alleen het opnamebudget maar ook de uren die je team kwijt is aan briefen, reviewen en publiceren. Reken het door. Bureau- of freelancekosten. Als een externe partij je Google Ads of SEO beheert, horen die uren keihard bij de ROI van dat kanaal. Eigen uren. Jouw uren of die van je marketeer voor strategie, planning en evaluatie. Reken minstens een marktconform uurtarief mee.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Sla dit over en je ziet een ROI die niemand in de boekhouding herkent. Reken het wel mee en je weet eindelijk waar het geld blijft.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Attributie: de stille killer van eerlijke ROI</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Bezoekers kopen zelden bij het eerste contact. Ze zien je Meta-advertentie, lezen later een SEO-artikel, klikken een week erna op Google Ads en converteren via direct verkeer. Aan welk kanaal reken je die deal toe? Op die vraag staat of valt je hele ROI-rapportage.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Last-click attributie, lange tijd de standaard, geeft alle eer aan het kanaal dat de laatste klik leverde. Dat is bijna altijd Google of direct verkeer, want dat zijn de plekken waar mensen terugkomen. Zaai-kanalen krijgen op papier weinig credit en lijken onrendabel. Schakel je ze uit, dan stort de hele pijplijn op termijn in.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            GA4 werkt standaard met data-driven attributie. Die verdeelt de credit over kanalen op basis van werkelijk gedrag. Beter, maar nog steeds een model. Wil je het nog scherper? Combineer GA4 met een mediamix-analyse over een halfjaar of langer. Dan zie je welke combinaties van kanalen samen het beste werken, en welke uitschakelactie elders een gat sloeg. Meer hierover lees je in <Link to="/blogs/tracking/attribution-modellen-uitgelegd-last-click" className="text-accent hover:underline">attributiemodellen uitgelegd</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Een praktisch ROI-dashboard dat je elke maand checkt</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Je hoeft geen Looker Studio-expert te zijn om ROI helder in beeld te krijgen. Een eenvoudig dashboard heeft vier blokken: kosten per kanaal, toegerekende omzet per kanaal, marge per kanaal en daaruit berekende ROI per kanaal. Daaronder een trendlijn over de afgelopen twaalf maanden.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Voeg per kanaal twee secundaire metrics toe. Voor oogst-kanalen: kosten per nieuwe klant en gemiddelde orderwaarde. Voor zaai-kanalen: bereik, en het percentage van conversies waarin het kanaal als assist voorkomt. Zo houdt je ROI-overzicht de korte termijn (winst) en de lange termijn (pijplijn) in balans.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            We bouwen voor klanten zo'n dashboard in Looker Studio op basis van GA4, advertentieplatform-data en CRM-export. Eenmaal opgezet, ververst het automatisch. Twintig minuten per maand erin kijken levert vaak meer marktinzicht op dan een hele dag in losse dashboards struinen.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wanneer een lage ROI eigenlijk goed nieuws is</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Niet elke 50 procent ROI is slecht. Hangt af van het doel. Bij een nieuwe productlancering accepteer je een lage of zelfs negatieve ROI in de eerste maanden, omdat je marktaandeel pakt. Bij een markt met veel terugkerende klanten kijk je niet alleen naar de eerste aankoop maar naar de lifetime value. Een ROI van 80 procent op de eerste aankoop bij een product dat klanten jaren afnemen kan een prima business case zijn.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Bekijk je ROI dus altijd in context. Eén getal zegt weinig, een getal naast je doel en je marge zegt alles. We vragen bij elke klant in de eerste maand: wat is jullie doel-ROI per kanaal, op welke termijn moet die gehaald worden, en hoe gaan we afwijkingen interpreteren? Antwoord op die drie vragen geeft je rapportage eindelijk richting.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Veelgestelde vragen</h2>
                    </div>

                    {/* FAQ Section */}
                    <section className="mt-4">
                        <div className="space-y-6 not-prose">
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat is de ROI van online marketing?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    De ROI van online marketing is het percentage winst dat je terugverdient op je marketinginvestering. Je rekent het uit door de winst uit een kanaal te verminderen met de kosten en het resultaat te delen door diezelfde kosten. Vermenigvuldig met honderd voor het percentage. Een ROI van 200 procent betekent dat elke geïnvesteerde euro twee euro winst oplevert bovenop de inleg.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Welke kosten neem ik mee in mijn ROI berekening?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Tel naast je advertentiebudget ook de bureaukosten, software-abonnementen, content-productie en de tijd van je team. Anders lijkt je ROI mooi op papier maar zit je in de praktijk te krap. Voor een eerlijke vergelijking tussen kanalen gebruik je altijd dezelfde kostenposten.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoe lang moet ik wachten voordat ROI betrouwbaar is?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Voor webshops en directe verkoop heb je vaak na een maand een eerste signaal. Bij leadgeneratie of B2B-trajecten met lange salescycli reken je op drie tot zes maanden voordat je conclusies kunt trekken. Begin daarom altijd met een nulmeting en een duidelijke verwachting per kanaal.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat is een goede ROI voor online marketing?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Dat hangt af van je marge en je doel. Een webshop met krappe marges wil minstens 300 procent ROI om winstgevend te draaien. Bij B2B-diensten met hoge marges kan 100 procent al uitstekend zijn. Vergelijk je ROI niet met die van een ander bedrijf maar met je eigen historische cijfers en met andere investeringen in je bedrijf.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoe verdeel ik ROI over meerdere kanalen?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Gebruik een data-driven attributiemodel via GA4 of een mediamix-analyse. Zo zie je welke kanalen meehelpen aan een conversie, ook als ze niet de laatste klik leveren. Last-click attributie geeft een vertekend beeld en doodt vaak juist de campagnes die nieuwe klanten introduceren.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoe meet ik ROI van content marketing of SEO?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    SEO en content krijgen de leads die later via een andere klik converteren. Bekijk daarom assisted conversions in GA4, kijk naar de organische sessies die in de salesfunnel komen en reken met een gemiddelde dealwaarde. Geen 1-op-1 koppeling, wel een betrouwbaar beeld over een langere periode.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Related Links */}
                    <section className="mt-16 pt-12 border-t border-primary/10">
                        <h3 className="text-xl font-bold text-primary mb-6">Lees ook</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <Link to="/blogs/tracking/attribution-modellen-uitgelegd-last-click" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Attributiemodellen uitgelegd</h3>
                                <p className="text-primary/60 text-sm">Van last-click naar data-driven, en wat dat met je rapportage doet.</p>
                            </Link>
                            <Link to="/blogs/tracking/google-tag-manager-beginners" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Google Tag Manager voor beginners</h3>
                                <p className="text-primary/60 text-sm">De basis van betrouwbare conversietracking, in begrijpelijke taal.</p>
                            </Link>
                            <Link to="/blogs/google-ads/meet-roi-google-ads-campagne" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">ROI van Google Ads meten</h3>
                                <p className="text-primary/60 text-sm">Specifiek voor Google Ads: de cijfers die er echt toe doen.</p>
                            </Link>
                        </div>
                    </section>
                </div>
            </article>

            {/* Bottom CTA */}
            <section className="w-full pb-32 px-6">
                <div className="max-w-4xl mx-auto bg-primary rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
                    <h2 className="relative z-10 font-drama italic text-background text-3xl sm:text-4xl md:text-5xl mb-6">Weet jij wat je marketing echt oplevert?</h2>
                    <p className="relative z-10 font-sans text-background/70 text-lg mb-10 max-w-xl mx-auto">We bouwen een ROI-dashboard dat al je kanalen optelt, en laten zien waar je nog winst laat liggen. Zonder verplichtingen.</p>
                    <Link to="/contact" className="relative z-10 btn-magnetic inline-flex items-center justify-center bg-accent text-background font-sans font-bold text-lg px-10 py-4 rounded-[2rem] hover:bg-accent/90 transition-colors">Neem contact op</Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
