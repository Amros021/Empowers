import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ChevronRight, User } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function BlogPostGoedeRoasMetaAdsBenchmarks() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen selection:bg-accent/30 selection:text-dark flex flex-col bg-background">
            <Helmet>
                <title>Wat is een goede ROAS voor Meta Ads? Benchmarks per branche 2026 | Empowers</title>
                <meta name="description" content="Een goede ROAS op Meta Ads verschilt per branche en campagnefase. Lees de actuele benchmarks voor 2026 en ontdek hoe je jouw rendement eerlijk vergelijkt en verbetert." />
                <link rel="canonical" href="https://www.empowers.nl/blogs/social-ads/goede-roas-meta-ads-benchmarks" />
                <meta property="og:title" content="Wat is een goede ROAS voor Meta Ads? Benchmarks 2026" />
                <meta property="og:description" content="ROAS-benchmarks op Meta Ads per branche, funnel-fase en campagnetype, plus de vier hefbomen om jouw ROAS te verbeteren." />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://www.empowers.nl/blogs/social-ads/goede-roas-meta-ads-benchmarks" />
                <meta property="og:image" content="https://www.empowers.nl/images/blogs/goede-roas-meta-ads-benchmarks.jpg" />
                <meta property="article:published_time" content="2026-04-19" />
                <meta property="article:author" content="Empowers" />
                <meta property="article:section" content="Social Ads" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Goede ROAS voor Meta Ads: benchmarks 2026" />
                <meta name="twitter:description" content="Wat is een realistische ROAS op Meta in 2026 en hoe vergelijk je eerlijk?" />

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Article",
                        "headline": "Wat is een goede ROAS voor Meta Ads? Benchmarks per branche 2026",
                        "description": "Een goede ROAS op Meta Ads verschilt per branche en campagnefase. Lees de actuele benchmarks voor 2026 en ontdek hoe je jouw rendement eerlijk vergelijkt en verbetert.",
                        "image": "https://www.empowers.nl/images/blogs/goede-roas-meta-ads-benchmarks.jpg",
                        "datePublished": "2026-04-19T15:00:00+02:00",
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
                                    "name": "Wat is een gemiddelde ROAS op Meta Ads in 2026?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "De gemiddelde ROAS op Meta Ads ligt in 2026 tussen 2,8 en 4,5 voor webshops. Diensten zitten lager, tussen 1,8 en 3,0, vanwege hogere CAC. De cijfers liggen circa 10 tot 15 procent lager dan in 2022 door duurdere CPM's en minder nauwkeurige tracking na privacywijzigingen. Vergelijk altijd op hetzelfde attributiemodel."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Wat is een goede ROAS voor een webshop?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Als vuistregel: een ROAS van 3,5 of hoger is goed, 2,8 tot 3,5 is acceptabel en onder 2,8 vraagt aandacht. Mode en home-decor zitten vaak rond 4,0 tot 5,5, elektronica rond 2,5 tot 3,5 door lagere marges, beauty rond 3,5 tot 5,0. Altijd beoordelen in combinatie met je brutomarge, niet alleen de omzet."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Hoe zit het met ROAS bij diensten en B2B?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Bij diensten werkt ROAS minder zuiver omdat de conversie vaak een lead is en niet direct omzet. Een realistisch oriëntatiepunt is een cost-per-lead van 25 tot 90 euro en een close rate van 10 tot 20 procent. Reken dan terug naar een ROAS op basis van klantwaarde (LTV), niet alleen de eerste aankoop."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Hoe verbeter je de ROAS op Meta Ads?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "De vier krachtigste hefbomen zijn: betere creative met meer variatie, een schone Conversie API-setup voor betrouwbare tracking, een heldere funnel-structuur met aparte budgetten voor prospecting en retargeting, en landingspagina-optimalisatie zodat je niet betaalt voor bezoekers die afhaken. Elke hefboom los kan 15 tot 30 procent ROAS opleveren."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Is een hoge ROAS altijd goed?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Nee. Een extreem hoge ROAS betekent vaak dat je alleen op bestaande klanten adverteert, wat lijkt op goedkope omzet maar weinig echte groei oplevert. Voor duurzaam rendement moet een flink deel van je budget naar nieuwe bezoekers gaan, ook al drukt dat de gemiddelde ROAS. Een blended ROAS op accountniveau is een eerlijker kompas."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Welke attributiemethode gebruik je voor ROAS?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Binnen Meta zelf wordt standaard 7-daagse click + 1-daagse view gehanteerd. Voor een eerlijker beeld combineer je dat met data uit Google Analytics (laatste klik) en je eigen CRM of kassasysteem. Het verschil tussen Meta-gereporte ROAS en werkelijke ROAS is vaak 20 tot 40 procent. Kies één standaard en blijf daar consistent aan vasthouden."
                                    }
                                }
                            ]
                        },
                        "breadcrumb": {
                            "@type": "BreadcrumbList",
                            "itemListElement": [
                                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.empowers.nl" },
                                { "@type": "ListItem", "position": 2, "name": "Social Ads", "item": "https://www.empowers.nl/blogs/social-ads" },
                                { "@type": "ListItem", "position": 3, "name": "Goede ROAS Meta Ads benchmarks" }
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
                        <span className="text-primary/30">Goede ROAS Meta Ads benchmarks</span>
                    </nav>

                    {/* Header */}
                    <header className="mb-16">
                        <div className="inline-block px-3 py-1 bg-accent/10 text-accent font-mono text-xs uppercase tracking-widest rounded-full mb-6">
                            Social Ads
                        </div>
                        <h1 className="font-sans font-bold text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight mb-8">
                            Wat is een goede ROAS voor Meta Ads? Benchmarks per branche in 2026
                        </h1>
                        <div className="flex flex-wrap items-center gap-6 text-sm font-sans text-primary/60 border-y border-primary/10 py-6">
                            <span className="flex items-center gap-2"><User size={14} />Empowers Redactie</span>
                            <span className="flex items-center gap-2"><Calendar size={14} />19 apr 2026</span>
                            <span className="flex items-center gap-2"><Clock size={14} />7 min leestijd</span>
                        </div>
                    </header>

                    {/* Featured Image */}
                    <figure className="w-full h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden mb-16 relative bg-primary">
                        <div className="absolute inset-0 bg-[url('/images/blogs/goede-roas-meta-ads-benchmarks.jpg')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </figure>

                    {/* Content */}
                    <div className="prose prose-lg max-w-none">

                        <p className="text-xl leading-relaxed text-primary/80 font-medium mb-6">
                            "Is onze ROAS van 3,2 op Meta goed of slecht?" Het is de vraag die elke week terugkomt in marketinggesprekken. Het eerlijke antwoord: dat hangt af van je branche, je funnel-fase en je marge. In 2026 schuiven de benchmarks bovendien lager dan een paar jaar geleden. In deze gids krijg je de actuele cijfers per branche, een eerlijk kader om jouw ROAS te vergelijken en vier concrete hefbomen om hem te verbeteren.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat betekent ROAS op Meta Ads precies?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            ROAS staat voor Return On Ad Spend: de omzet die je per uitgegeven euro advertentiebudget terugkrijgt. Een ROAS van 4,0 betekent dat je voor elke euro media-uitgave 4 euro omzet hebt gegenereerd. Het zegt dus iets over omzetefficiëntie, niet automatisch over winst. Met een brutomarge van 25 procent is een ROAS van 4,0 break-even, met een marge van 60 procent is dezelfde ROAS ruim winstgevend.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Daarom is het altijd onzinnig om alleen ROAS te rapporteren. Leg hem naast je marge, je CAC en je klantwaarde om een compleet beeld te krijgen. Hoe die cijfers in elkaar passen leggen we uit in <Link to="/blogs/strategie/goede-conversieratio-benchmarks-per-branche" className="text-accent hover:underline">onze blog over conversieratio benchmarks per branche</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Gemiddelde ROAS op Meta in 2026</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Over het hele Nederlandse Meta-landschap ligt de gemiddelde ROAS in 2026 tussen 2,8 en 4,5 voor webshops, en tussen 1,8 en 3,0 voor dienstverleners. Dat is 10 tot 15 procent lager dan in 2022. De oorzaken zijn bekend: duurdere CPM's, minder precieze tracking na iOS-wijzigingen en bredere veilingen door Advantage+ Shopping.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Goed om te weten: de ROAS die Meta rapporteert in Ads Manager is vrijwel altijd hoger dan de werkelijke ROAS die je in je CRM of kassasysteem ziet. Het verschil loopt op tot 20 tot 40 procent. Dat komt door view-through-attributie, dubbeltellingen en cross-device matching. Meer over hoe je serverside tracking opzet staat in <Link to="/blogs/social-ads/conversie-api-meta-naast-pixel" className="text-accent hover:underline">onze gids over de Conversie API naast de pixel</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">ROAS-benchmarks per branche</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Hieronder vind je realistische ROAS-bandbreedtes op Meta Ads per branche. Dit zijn blended cijfers, dus inclusief zowel prospecting als retargeting, bij goed getrackte accounts in 2026.
                        </p>

                        <h3 className="font-semibold text-primary text-xl mt-10 mb-4">Mode en fashion: 4,0 tot 5,5</h3>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Mode heeft een sterk visueel voordeel op Meta. Goede creatives en herkenbare branding trekken direct engagement, en de aankoop is vaak impuls. Merken met sterke seizoencollecties kunnen tijdelijk boven 6,0 pieken. Bij hoge volumes en catalogisering met Advantage+ Shopping zien we consistent de 4,5.
                        </p>

                        <h3 className="font-semibold text-primary text-xl mt-10 mb-4">Beauty en cosmetica: 3,5 tot 5,0</h3>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Beauty draait op UGC, reviews en influencer-content. Met een goede mix van statisch, video en UGC zien we vaak een ROAS boven de 4,0, vooral bij abonnementsmodellen. Rekensommen vallen beter uit als je de tweede aankoop binnen 60 dagen meerekent in je klantwaarde.
                        </p>

                        <h3 className="font-semibold text-primary text-xl mt-10 mb-4">Elektronica: 2,5 tot 3,5</h3>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Lagere marges en sterke prijsconcurrentie drukken de ROAS in elektronica. Wie hier boven 3,5 komt heeft meestal een unieke positie, een eigen merk of een sterk service-aspect. Pure prijsvechters kunnen structureel rond 2,5 opereren en alsnog winstgevend zijn bij hoge omloopsnelheid.
                        </p>

                        <h3 className="font-semibold text-primary text-xl mt-10 mb-4">Home en interieur: 3,5 tot 5,0</h3>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Grote order-waarden en sterke visuele content maken home een dankbare branche op Meta. Let wel: de salescycle is langer dan bij kleding, dus reken met minimaal 7-day click attributie om het effect eerlijk te zien.
                        </p>

                        <h3 className="font-semibold text-primary text-xl mt-10 mb-4">Food en delivery: 2,0 tot 3,0</h3>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Food zit door dunne marges en lokale concurrentie lager. Hier wordt ROAS vaak gemeten in herhaalaankoop en klantbehoud. Kortingen voor nieuwe klanten drukken de eerste ROAS, maar de LTV-berekening over 6 maanden maakt het plaatje positief.
                        </p>

                        <h3 className="font-semibold text-primary text-xl mt-10 mb-4">Diensten en B2B: 1,8 tot 3,0</h3>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Bij diensten werkt ROAS minder zuiver omdat de conversie meestal een lead is. Beter is CPA of cost-per-lead te meten: gemiddeld 25 tot 90 euro per lead, met een close rate van 10 tot 20 procent. Reken terug naar ROAS op basis van levenslange klantwaarde (LTV), niet de eerste factuur.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">ROAS per funnel-fase: vergelijk appels met appels</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een van de grootste fouten in ROAS-rapportages is alles op één hoop gooien. Een retargeting-campagne scoort natuurlijk een hogere ROAS dan een prospecting-campagne. Vergelijk daarom binnen dezelfde fase.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Richtlijnen voor 2026: prospecting ROAS voor webshops zit rond 1,8 tot 2,8. Retargeting ROAS tussen 5,0 en 10,0. Campagnes naar bestaande klanten of nieuwsbriefabonnees halen vaak 7,0 tot 15,0. De blended ROAS over alle fases heen geeft dan een eerlijker totaalbeeld. Hoe je die funnel opbouwt lees je in <Link to="/blogs/social-ads/effectieve-meta-ads-funnel" className="text-accent hover:underline">onze gids over een effectieve Meta Ads funnel</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">De vier hefbomen om jouw ROAS te verbeteren</h2>

                        <h3 className="font-semibold text-primary text-xl mt-10 mb-4">1. Creative diversificatie</h3>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Creative is de nummer één ROAS-hefboom in 2026. Accounts die maandelijks 8 tot 12 nieuwe creatives toevoegen presteren structureel 20 tot 35 procent beter. Mix statisch beeld, video, UGC en carousels. Test creative in Reels-format apart. Meer tactieken staan in <Link to="/blogs/social-ads/meta-ads-webshops-verhoog-omzet" className="text-accent hover:underline">onze blog over Meta Ads voor webshops</Link>.
                        </p>

                        <h3 className="font-semibold text-primary text-xl mt-10 mb-4">2. Conversie API en schone tracking</h3>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Zonder serverside tracking mist Meta 20 tot 40 procent van de conversies. Het algoritme optimaliseert dan op verkeerde signalen, met een lagere ROAS als gevolg. De eerste stap is altijd je tracking opschonen. Start bij <Link to="/blogs/social-ads/meta-pixel-instellen-stap-stap" className="text-accent hover:underline">de juiste Meta Pixel-installatie</Link> en breid uit met Conversie API.
                        </p>

                        <h3 className="font-semibold text-primary text-xl mt-10 mb-4">3. Funnel-structuur en budgetverdeling</h3>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De 70/20/10-regel werkt in de praktijk bij de meeste webshops: 70 procent prospecting, 20 procent retargeting en 10 procent retention. Veel accounts investeren te veel in retargeting, wat de blended ROAS kunstmatig opkrikt maar de schaal remt. Let op dat je prospecting-budget groot genoeg blijft om groei te kunnen draaien.
                        </p>

                        <h3 className="font-semibold text-primary text-xl mt-10 mb-4">4. Landingspagina-optimalisatie</h3>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Je ROAS begint op Meta, maar wordt bepaald op je landingspagina. Een conversieratio-verbetering van 1,5 naar 2,5 procent tilt je ROAS met ruim 60 procent. Werk aan boodschap-match tussen advertentie en pagina, laadtijd onder 2,5 seconden op mobiel en een duidelijke conversiedriver boven de vouw.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wanneer is je ROAS te hoog?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Klinkt contra-intuïtief, maar een ROAS van 8,0 of hoger is vaak een waarschuwing. Het betekent meestal dat je disproportioneel veel budget naar retargeting en bestaande klanten stuurt. Dat ziet er winstgevend uit, maar je mist daardoor nieuwe klanten. Zie een extreem hoge ROAS als een uitnodiging om meer prospecting te draaien, ook al drukt dat tijdelijk je gemiddelde.
                        </p>

                    </div>

                    {/* FAQ */}
                    <section className="mt-16 pt-12 border-t border-primary/10">
                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Veelgestelde vragen over ROAS op Meta Ads</h2>
                        <div className="space-y-6 not-prose">
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat is een gemiddelde ROAS op Meta Ads in 2026?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">De gemiddelde ROAS op Meta Ads ligt in 2026 tussen 2,8 en 4,5 voor webshops. Diensten zitten lager, tussen 1,8 en 3,0, vanwege hogere CAC. De cijfers liggen circa 10 tot 15 procent lager dan in 2022 door duurdere CPM's en minder nauwkeurige tracking na privacywijzigingen. Vergelijk altijd op hetzelfde attributiemodel.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat is een goede ROAS voor een webshop?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Als vuistregel: een ROAS van 3,5 of hoger is goed, 2,8 tot 3,5 is acceptabel en onder 2,8 vraagt aandacht. Mode en home-decor zitten vaak rond 4,0 tot 5,5, elektronica rond 2,5 tot 3,5 door lagere marges, beauty rond 3,5 tot 5,0. Altijd beoordelen in combinatie met je brutomarge, niet alleen de omzet.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoe zit het met ROAS bij diensten en B2B?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Bij diensten werkt ROAS minder zuiver omdat de conversie vaak een lead is en niet direct omzet. Een realistisch oriëntatiepunt is een cost-per-lead van 25 tot 90 euro en een close rate van 10 tot 20 procent. Reken dan terug naar een ROAS op basis van klantwaarde (LTV), niet alleen de eerste aankoop.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoe verbeter je de ROAS op Meta Ads?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">De vier krachtigste hefbomen zijn: betere creative met meer variatie, een schone Conversie API-setup voor betrouwbare tracking, een heldere funnel-structuur met aparte budgetten voor prospecting en retargeting, en landingspagina-optimalisatie zodat je niet betaalt voor bezoekers die afhaken. Elke hefboom los kan 15 tot 30 procent ROAS opleveren.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Is een hoge ROAS altijd goed?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Nee. Een extreem hoge ROAS betekent vaak dat je alleen op bestaande klanten adverteert, wat lijkt op goedkope omzet maar weinig echte groei oplevert. Voor duurzaam rendement moet een flink deel van je budget naar nieuwe bezoekers gaan, ook al drukt dat de gemiddelde ROAS. Een blended ROAS op accountniveau is een eerlijker kompas.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Welke attributiemethode gebruik je voor ROAS?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Binnen Meta zelf wordt standaard 7-daagse click + 1-daagse view gehanteerd. Voor een eerlijker beeld combineer je dat met data uit Google Analytics (laatste klik) en je eigen CRM of kassasysteem. Het verschil tussen Meta-gereporte ROAS en werkelijke ROAS is vaak 20 tot 40 procent. Kies één standaard en blijf daar consistent aan vasthouden.</p>
                            </div>
                        </div>
                    </section>

                    {/* Related */}
                    <section className="mt-16 pt-12 border-t border-primary/10">
                        <h3 className="text-xl font-bold text-primary mb-6">Lees ook</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <Link to="/blogs/social-ads/effectieve-meta-ads-funnel" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Effectieve Meta Ads funnel</h3>
                                <p className="text-primary/60 text-sm">De funnel-structuur die zowel blended ROAS als groei kan dragen.</p>
                            </Link>
                            <Link to="/blogs/social-ads/conversie-api-meta-naast-pixel" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Conversie API naast de pixel</h3>
                                <p className="text-primary/60 text-sm">Waarom serverside tracking in 2026 ROAS-bepalend is.</p>
                            </Link>
                            <Link to="/blogs/strategie/goede-conversieratio-benchmarks-per-branche" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Conversieratio benchmarks</h3>
                                <p className="text-primary/60 text-sm">Welke conversieratio's realistisch zijn in jouw branche.</p>
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
                        Jouw ROAS vergelijken met benchmarks?
                    </h2>
                    <p className="relative z-10 font-sans text-background/70 text-lg mb-10 max-w-xl mx-auto">
                        We leggen jouw Meta-account naast de branchebenchmarks en laten zien welke hefbomen het meeste ROAS opleveren. Binnen 30 minuten heb je een helder beeld.
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
