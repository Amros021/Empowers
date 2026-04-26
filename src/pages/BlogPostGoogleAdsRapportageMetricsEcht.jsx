import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ChevronRight, User } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function BlogPostGoogleAdsRapportageMetricsEcht() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen selection:bg-accent/30 selection:text-dark flex flex-col bg-background">
            <Helmet>
                <title>Google Ads rapportage: welke metrics zijn echt belangrijk | Empowers</title>
                <meta name="description" content="Een Google Ads rapportage zit vol cijfers, maar maar een handvol is echt belangrijk. Lees welke metrics tellen en welke je rustig kunt negeren." />
                <link rel="canonical" href="https://www.empowers.nl/blogs/google-ads/google-ads-rapportage-metrics-echt" />
                <meta property="og:title" content="Google Ads rapportage: welke metrics zijn echt belangrijk" />
                <meta property="og:description" content="Welke metrics in jouw Google Ads rapportage echt waarde hebben en welke je laat liggen." />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://www.empowers.nl/blogs/google-ads/google-ads-rapportage-metrics-echt" />
                <meta property="og:image" content="https://www.empowers.nl/images/blogs/google-ads-rapportage-metrics-echt.jpg" />
                <meta property="article:published_time" content="2026-04-26" />
                <meta property="article:author" content="Empowers" />
                <meta property="article:section" content="Google Ads" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Google Ads rapportage: welke metrics zijn echt belangrijk" />
                <meta name="twitter:description" content="Welke Google Ads metrics tellen en welke negeer je gewoon." />

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Article",
                        "headline": "Google Ads rapportage: welke metrics zijn echt belangrijk",
                        "description": "Een Google Ads rapportage zit vol cijfers, maar maar een handvol is echt belangrijk. Lees welke metrics tellen en welke je rustig kunt negeren.",
                        "image": "https://www.empowers.nl/images/blogs/google-ads-rapportage-metrics-echt.jpg",
                        "datePublished": "2026-04-26T13:00:00+02:00",
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
                                    "name": "Welke metrics zijn het belangrijkst in Google Ads?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "De belangrijkste metrics zijn conversies, kosten per conversie (CPA) en ROAS. Daarnaast geven impression share, conversieratio en gemiddelde positie inzicht in waar je verbetering kunt halen. Klikken en CTR zijn vaak ondergeschikt: een hoge CTR zonder conversies is geen succes."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Wat is een goede ROAS in Google Ads?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Een goede ROAS hangt af van jouw marges. Als vuistregel: bij een marge van 50 procent is een ROAS van 2 break-even, dus mik op minimaal 3. Voor producten met lagere marges (15 tot 25 procent) heb je een ROAS van 5 tot 7 nodig om winstgevend te zijn."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Moet ik letten op CTR (klikfrequentie)?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "CTR is een hulpmetric, geen doel. Een hoge CTR betekent dat jouw advertentie aanspreekt, maar zegt niets over of die mensen converteren. Combineer CTR altijd met conversieratio. Een advertentie met 8 procent CTR maar 0.5 procent conversieratio levert minder op dan een advertentie met 3 procent CTR en 4 procent conversieratio."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Wat is een goede impression share?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Voor branded campagnes mik je op 90 procent of hoger, zodat je vrijwel iedereen die jouw merk zoekt bereikt. Voor non-branded is 40 tot 70 procent realistisch, afhankelijk van budget en concurrentie. Onder 30 procent loop je structureel verkeer mis door budget- of biedlimieten."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Hoe vaak controleer ik mijn Google Ads rapportage?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Dagelijks even kort kijken voor anomalieën, wekelijks een grondige check op trends en maandelijks een diepe rapportage met budget- en strategische beslissingen. Niet vaker, want kortere intervallen leiden tot overreageren op natuurlijke ruis. Reken op minimaal 100 conversies per beslismoment voor betrouwbare data."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Welke metrics laat ik weg uit mijn rapportage?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Vermijd vanity metrics als 'totaal aantal vertoningen' zonder context, of 'gemiddelde positie' (Google rapporteert die niet meer betrouwbaar). Ook 'klikken zonder conversies' is alleen interessant als je echt iets gaat fixen. Houd jouw rapportage strak en richt je op metrics die tot beslissingen leiden."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Hoe meet je het effect van je campagnes op de lange termijn?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Combineer Google Ads-data met GA4 of een ander analyseplatform. Kijk niet alleen naar de eerste conversie maar ook naar terugkerende klanten, customer lifetime value en assist-conversies. Een campagne die op het eerste oog 'geen ROAS' lijkt te halen, kan wel laag in de funnel zitten en assist conversies genereren voor andere kanalen."
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
                            { "@type": "ListItem", "position": 3, "name": "Google Ads", "item": "https://www.empowers.nl/blogs/google-ads" },
                            { "@type": "ListItem", "position": 4, "name": "Google Ads rapportage metrics", "item": "https://www.empowers.nl/blogs/google-ads/google-ads-rapportage-metrics-echt" }
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
                        <span className="text-primary truncate">Rapportage metrics</span>
                    </nav>

                    {/* Header */}
                    <header className="mb-16">
                        <div className="inline-block px-3 py-1 bg-accent/10 text-accent font-mono text-xs uppercase tracking-widest rounded-full mb-6">
                            Google Ads
                        </div>
                        <h1 className="font-sans font-bold text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight mb-8">
                            Google Ads rapportage: welke metrics zijn echt belangrijk
                        </h1>
                        <div className="flex flex-wrap items-center gap-6 text-sm font-sans text-primary/60 border-y border-primary/10 py-6">
                            <div className="flex items-center gap-2"><User className="w-4 h-4" /><span>Empowers Redactie</span></div>
                            <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>26 april 2026</span></div>
                            <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>9 minuten leestijd</span></div>
                        </div>
                    </header>

                    {/* Featured Image */}
                    <figure className="w-full h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden mb-16 relative bg-primary">
                        <div className="absolute inset-0 bg-[url('/images/blogs/google-ads-rapportage-metrics-echt.jpg')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </figure>

                    {/* Content */}
                    <div className="prose prose-lg max-w-none prose-headings:text-primary prose-headings:font-bold prose-a:text-accent prose-a:underline hover:prose-a:text-accent/80">
                        <p className="text-xl leading-relaxed text-primary/80 font-medium mb-6">
                            Een Google Ads rapportage zit vol cijfers, maar maar een handvol metrics doet er echt toe. Conversies, CPA en ROAS bepalen of jouw campagne winst maakt. Impression share, conversieratio en zoekwoordrapport laten zien waar je nog kunt groeien. De rest is achtergrondruis die je hooguit één keer per maand checkt. In deze blog lees je welke metrics jouw beslissingen sturen en welke je veilig kunt negeren.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Welke metrics zijn echt belangrijk?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De drie metrics die je dagelijks checkt zijn conversies, kosten per conversie (CPA) en ROAS bij e-commerce. Conversies vertellen of jouw campagne überhaupt werkt. CPA vertelt of het rendabel is. ROAS vertelt hoeveel omzet er per euro spend uitkomt. Alle andere metrics gebruik je om te begrijpen waarom de cijfers zijn zoals ze zijn, niet om de score af te lezen.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Bij onze klanten zien we wekelijks dat eigenaren urenlang naar CTR of vertoningen kijken, terwijl het rendement bepaald wordt door conversies. Een advertentie met 1.000 klikken en 10 conversies presteert beter dan een advertentie met 5.000 klikken en 8 conversies. Begin daarom altijd onderaan de funnel: hoeveel conversies, tegen welke prijs, met welke ROAS? Hoe je ROAS-benchmarks per platform interpreteert lees je in onze blog over <Link to="/blogs/social-ads/goede-roas-meta-ads-benchmarks" className="text-accent hover:underline">goede ROAS benchmarks</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat zegt CPA jou over jouw campagne?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            CPA (Cost Per Acquisition) is de prijs die je betaalt voor één conversie. Voor een MKB-bedrijf met een dienstaanbod van 1.000 euro per opdracht is een CPA van 100 tot 200 euro vaak nog rendabel. Voor een webshop met een gemiddelde orderwaarde van 80 euro moet de CPA onder de 30 euro zakken om winst te maken. De juiste CPA hangt direct samen met jouw marge en customer lifetime value.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een CPA die structureel boven jouw target ligt is een teken dat ergens iets schuurt: te brede zoekwoorden, een matig converterende landingspagina of een verkeerde biedstrategie. Splits dan jouw rapportage uit per campagne, advertentiegroep en landingspagina om te zien waar het lek zit. Een webshop die we begeleidden ontdekte dat 70 procent van het budget naar één advertentiegroep ging die 0 conversies opleverde, simpelweg omdat het zoekwoord verkeerd was gematcht.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe interpreteer je ROAS?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            ROAS staat voor Return On Ad Spend en deelt jouw omzet door jouw advertentiekosten. Een ROAS van 4 betekent dat je voor elke euro spend vier euro omzet terugziet. Een ROAS van 4 lijkt mooi, maar is het pas winstgevend als jouw marge boven 25 procent zit. Bij lagere marges heb je een hogere ROAS nodig: 5, 6 of zelfs 8 om quitte te draaien.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Vergelijk ROAS niet zomaar tussen campagnes. Branded campagnes haalt vaak een ROAS van 8 tot 15, omdat die mensen jou al zochten. Non-branded zit op 2 tot 5, omdat je daar koud verkeer omzet. Beoordeel ze dus apart, met eigen targets. Hoe je beide types in jouw account inricht lees je in onze blog over <Link to="/blogs/google-ads/branded-vs-non-branded-campagnes" className="text-accent hover:underline">branded vs non-branded campagnes</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat is impression share en waarom kijk je ernaar?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Impression share is het percentage van mogelijke vertoningen dat jouw advertentie heeft gehad. Stel: jouw zoekwoord is 1.000 keer gezocht en jouw advertentie is 600 keer getoond, dan is jouw impression share 60 procent. Dit getal vertelt of je groeiruimte hebt. Een impression share onder de 50 procent op winstgevende zoekwoorden is bijna altijd een teken dat je meer budget moet inzetten of jouw biedstrategie moet aanpassen.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Naast impression share zie je twee belangrijke 'lost share' metrics: 'lost to budget' en 'lost to rank'. 'Lost to budget' betekent dat jouw advertentie niet getoond is omdat het dagbudget op was. 'Lost to rank' betekent dat jouw bod of Quality Score te laag was. Voor de eerste verhoog je het budget. Voor de tweede werk je aan landingspagina, advertentietekst en zoekwoordrelevantie. Hoe je dat doet staat in onze gids over <Link to="/blogs/google-ads/google-ads-quality-score-verhogen" className="text-accent hover:underline">Quality Score verhogen</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Welke metrics negeer je beter?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Vertoningen zonder context zijn een vanity metric. Een miljoen vertoningen zegt niets over rendement. Hetzelfde geldt voor 'gemiddelde positie' (Google rapporteert die sinds 2019 niet meer betrouwbaar) en CTR zonder conversiedata. Klikken zijn alleen interessant als je weet wat ze opleveren. Heb je dat niet gekoppeld aan conversies, dan rapporteer je achteruit kijken zonder vooruit te bewegen.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Ook 'kwaliteitsscore' alleen op zoekwoordniveau zegt niet alles. Hij is een momentopname en fluctueert door het algoritme. Beter kijk je naar de drie subscores: verwachte CTR, advertentierelevantie en bestemmingspaginakwaliteit. Daarop kun je echt actie nemen. Een veelgemaakte fout die we tegenkomen is dat ondernemers wekelijks Quality Scores monitoren en panikeren bij elke daling, terwijl ze beter de drie pijlers structureel kunnen verbeteren.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe maak je een rapportage die echt informeert?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een goede maandelijkse rapportage past op één pagina. Bovenaan staan de drie KPI's: totaal aantal conversies, gemiddelde CPA en gemiddelde ROAS. Daaronder een opsplitsing per campagne (branded, non-branded, shopping, display). Dan drie tot vijf concrete actiepunten voor de komende maand. Geen lijst van vijftig metrics, maar de cijfers die tot beslissingen leiden.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Werk je met een specialist of een marketingbureau, vraag dan altijd om een 'beslis-rapportage' in plaats van een 'data-dump'. Een bureau dat je elke maand 30 grafieken stuurt zonder duiding helpt je niet groeien. Een goede rapportage zegt: dit ging beter dan vorige maand, dit ging slechter, en dit gaan we deze maand aanpakken. Direct, helder, actiegericht. Hoe je een marketingbureau kiest dat zo werkt staat in onze blog over de <Link to="/blogs/algemeen/kies-juiste-online-marketing-bureau" className="text-accent hover:underline">juiste online marketing bureau kiezen</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe vaak hoor je in jouw rapportage te kijken?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Dagelijks check je vijf minuten om grote uitschieters te zien (verdubbelde CPA, gestopte conversies). Wekelijks neem je 30 minuten om trends te beoordelen en kleine optimalisaties te doen. Maandelijks twee uur voor strategische beslissingen: budget herverdelen, campagnes uitfaseren of opschalen. Vaker dan dat leidt tot ruis-gedreven beslissingen, want kortetermijnschommelingen zijn statistisch onbetrouwbaar.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Hou voor elke beslissing minimaal 100 conversies per variant aan voor betrouwbaarheid. Bij een laag conversievolume verschuif je de beslismomenten naar elke twee weken of maandelijks, niet wekelijks. Kortere cycli leveren toevallig veel winst of veel verlies op, en als je daarop bijstuurt, optimaliseer je vaak weg van de werkelijke winnaar.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wanneer schakel je hulp in?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Als je merkt dat je naar dezelfde cijfers kijkt zonder te weten wat te doen, als jouw rapportage steeds dezelfde patronen laat zien zonder dat de winst stijgt, of als je gewoon te weinig tijd hebt om wekelijks te analyseren, dan is een specialist een logische volgende stap. Een goede analist herkent in een uur waar de structurele winst zit en welke acties je deze week meteen moet nemen.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Wat je zelf altijd kunt doen: focus jouw rapportage op conversies, CPA en ROAS, hou de beslis-rapportage compact en negeer vanity metrics. Wil je dat we mét je meekijken naar wat jouw cijfers nu echt vertellen? Plan een gesprek via onze <Link to="/contact" className="text-accent hover:underline">contactpagina</Link>. We laten zien waar de winst zit, voor je een euro extra uitgeeft.
                        </p>
                    </div>

                    {/* FAQ Section */}
                    <section className="mt-16 pt-12 border-t border-primary/10">
                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Veelgestelde vragen</h2>
                        <div className="space-y-6 not-prose">
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Welke metrics zijn het belangrijkst in Google Ads?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">De belangrijkste metrics zijn conversies, kosten per conversie (CPA) en ROAS. Daarnaast geven impression share, conversieratio en gemiddelde positie inzicht in waar je verbetering kunt halen. Klikken en CTR zijn vaak ondergeschikt: een hoge CTR zonder conversies is geen succes.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat is een goede ROAS in Google Ads?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Een goede ROAS hangt af van jouw marges. Als vuistregel: bij een marge van 50 procent is een ROAS van 2 break-even, dus mik op minimaal 3. Voor producten met lagere marges (15 tot 25 procent) heb je een ROAS van 5 tot 7 nodig om winstgevend te zijn.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Moet ik letten op CTR (klikfrequentie)?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">CTR is een hulpmetric, geen doel. Een hoge CTR betekent dat jouw advertentie aanspreekt, maar zegt niets over of die mensen converteren. Combineer CTR altijd met conversieratio. Een advertentie met 8 procent CTR maar 0.5 procent conversieratio levert minder op dan een advertentie met 3 procent CTR en 4 procent conversieratio.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat is een goede impression share?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Voor branded campagnes mik je op 90 procent of hoger, zodat je vrijwel iedereen die jouw merk zoekt bereikt. Voor non-branded is 40 tot 70 procent realistisch, afhankelijk van budget en concurrentie. Onder 30 procent loop je structureel verkeer mis door budget- of biedlimieten.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoe vaak controleer ik mijn Google Ads rapportage?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Dagelijks even kort kijken voor anomalieën, wekelijks een grondige check op trends en maandelijks een diepe rapportage met budget- en strategische beslissingen. Niet vaker, want kortere intervallen leiden tot overreageren op natuurlijke ruis. Reken op minimaal 100 conversies per beslismoment voor betrouwbare data.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Welke metrics laat ik weg uit mijn rapportage?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Vermijd vanity metrics als 'totaal aantal vertoningen' zonder context, of 'gemiddelde positie' (Google rapporteert die niet meer betrouwbaar). Ook 'klikken zonder conversies' is alleen interessant als je echt iets gaat fixen. Houd jouw rapportage strak en richt je op metrics die tot beslissingen leiden.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoe meet je het effect van je campagnes op de lange termijn?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Combineer Google Ads-data met GA4 of een ander analyseplatform. Kijk niet alleen naar de eerste conversie maar ook naar terugkerende klanten, customer lifetime value en assist-conversies. Een campagne die op het eerste oog 'geen ROAS' lijkt te halen, kan wel laag in de funnel zitten en assist conversies genereren voor andere kanalen.</p>
                            </div>
                        </div>
                    </section>

                    {/* Related */}
                    <section className="mt-16 pt-12 border-t border-primary/10">
                        <h3 className="text-xl font-bold text-primary mb-6">Lees ook</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <Link to="/blogs/google-ads/branded-vs-non-branded-campagnes" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Branded vs non-branded campagnes</h3>
                                <p className="text-primary/60 text-sm">Welke verdeling tussen merkverkeer en koud verkeer levert jou de beste mix.</p>
                            </Link>
                            <Link to="/blogs/google-ads/google-ads-quality-score-verhogen" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Quality Score verhogen</h3>
                                <p className="text-primary/60 text-sm">Zo til je jouw advertentierelevantie en bestemmingspaginakwaliteit naar 10/10.</p>
                            </Link>
                            <Link to="/blogs/google-ads/google-ads-campagne-structuur" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Google Ads campagnestructuur</h3>
                                <p className="text-primary/60 text-sm">Hoe je jouw account zo opbouwt dat het algoritme echt voor je werkt.</p>
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
                        Cijfers die echt sturen?
                    </h2>
                    <p className="relative z-10 font-sans text-background/70 text-lg mb-10 max-w-xl mx-auto">
                        We bouwen een rapportage die jou helpt beslissen, niet alleen kijken. Binnen een week zie je waar de winst in jouw Google Ads zit.
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
