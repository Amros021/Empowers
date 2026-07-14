import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ChevronRight, User } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function BlogPostVerlaagCpcGoogleAdsMinder() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen selection:bg-accent/30 selection:text-dark flex flex-col bg-background">
            <Helmet>
                <title>Hoe verlaag je je CPC in Google Ads zonder minder bereik? | Empowers</title>
                <meta name="description" content="CPC verlagen in Google Ads kan zonder minder bereik. Lees 7 bewezen methoden om je klikprijs te drukken en meer uit je budget te halen." />
                <link rel="canonical" href="https://www.empowers.nl/blogs/google-ads/verlaag-cpc-google-ads-minder" />
                <meta property="og:title" content="Hoe verlaag je je CPC in Google Ads zonder minder bereik?" />
                <meta property="og:description" content="CPC verlagen in Google Ads kan zonder minder bereik. Zo druk je je klikprijs en haal je meer uit je budget." />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://www.empowers.nl/blogs/google-ads/verlaag-cpc-google-ads-minder" />
                <meta property="og:image" content="https://www.empowers.nl/images/blogs/verlaag-cpc-google-ads-minder.jpg" />
                <meta property="article:published_time" content="2026-04-10T00:00:00+02:00" />
                <meta property="article:author" content="Empowers" />
                <meta property="article:section" content="Google Ads" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Hoe verlaag je je CPC in Google Ads zonder minder bereik?" />
                <meta name="twitter:description" content="CPC verlagen zonder bereik in te leveren? Zo pak je dat aan in Google Ads." />

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Article",
                        "headline": "Hoe verlaag je je CPC in Google Ads zonder minder bereik?",
                        "description": "CPC verlagen in Google Ads kan zonder minder bereik. Lees 7 bewezen methoden om je klikprijs te drukken en meer uit je budget te halen.",
                        "image": "https://www.empowers.nl/images/blogs/verlaag-cpc-google-ads-minder.jpg",
                        "datePublished": "2026-04-10T00:00:00+02:00",
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
                                    "name": "Wat is een goede CPC in Google Ads?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Dat verschilt per branche. In e-commerce betaal je gemiddeld 0,50 tot 2 euro per klik. In verzekeringen of juridische diensten kan dat oplopen tot 10 tot 20 euro. Vergelijk je CPC altijd met je marge en conversieratio om te bepalen of het rendabel is."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Helpt een hogere Quality Score echt om CPC te verlagen?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Ja, Google beloont relevantie. Een Quality Score van 8 of hoger kan je klikprijs met 30 tot 50 procent verlagen ten opzichte van een score van 5. Werk aan je advertentietekst, landingspagina en verwachte CTR om je score omhoog te krijgen."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Kan ik CPC verlagen met Smart Bidding?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Smart Bidding verlaagt je CPC niet per definitie, maar het verdeelt je budget slimmer. Strategieën als Doel-CPA en Doel-ROAS bieden minder op kliks die waarschijnlijk niet converteren. Het resultaat is vaak een lagere effectieve CPC op winstgevende kliks."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Hoeveel kan ik besparen door negatieve zoekwoorden toe te voegen?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Bij de meeste accounts die we analyseren gaat 15 tot 30 procent van het budget naar irrelevante zoekopdrachten. Door wekelijks je zoektermen te controleren en negatieve zoekwoorden toe te voegen, bespaar je dat bedrag direct. De vrijgemaakte ruimte gaat naar kliks die wél converteren."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Verlaagt een betere landingspagina mijn CPC?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Indirect wel. Google beoordeelt je landingspagina-ervaring als onderdeel van je Quality Score. Een snelle, relevante pagina die goed aansluit op je advertentie verhoogt je score en verlaagt daarmee je klikprijs. Bovendien converteert zo'n pagina beter, waardoor je effectieve kosten per klant dalen."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Moet ik mijn CPC handmatig instellen of automatisch laten bieden?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Bij minder dan 30 conversies per maand heb je vaak meer controle met handmatig bieden of Verbeterde CPC. Bij meer dan 50 conversies per maand werkt automatisch bieden meestal beter omdat Google genoeg data heeft om patronen te herkennen. Test beide en vergelijk de resultaten over minimaal vier weken."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Kan ik CPC verlagen door op andere tijden te adverteren?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Ja. Analyseer je advertentieplanningsrapport op dag en uur. Vaak zijn avonduren en weekenden goedkoper terwijl de conversieratio vergelijkbaar blijft. Door je biedingen per dagdeel aan te passen, betaal je minder voor dezelfde kliks op de momenten dat het rendabel is."
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
                                "name": "CPC verlagen Google Ads",
                                "item": "https://www.empowers.nl/blogs/google-ads/verlaag-cpc-google-ads-minder"
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
                        <span className="text-primary truncate">CPC verlagen</span>
                    </nav>

                    {/* Header */}
                    <header className="mb-16">
                        <div className="inline-block px-3 py-1 bg-accent/10 text-accent font-mono text-xs uppercase tracking-widest rounded-full mb-6">
                            Google Ads
                        </div>
                        <h1 className="font-sans font-bold text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight mb-8">
                            Hoe verlaag je je CPC in Google Ads zonder minder bereik?
                        </h1>

                        <div className="flex flex-wrap items-center gap-6 text-sm font-sans text-primary/60 border-y border-primary/10 py-6">
                            <div className="flex items-center gap-2">
                                <User className="w-4 h-4" />
                                <span>Empowers Redactie</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>10 april 2026</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>8 minuten leestijd</span>
                            </div>
                        </div>
                    </header>

                    {/* Featured Image */}
                    <figure className="w-full h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden mb-16 relative bg-primary">
                        <div className="absolute inset-0 bg-[url('/images/blogs/verlaag-cpc-google-ads-minder.jpg')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </figure>

                    {/* Content */}
                    <div className="prose prose-lg max-w-none prose-headings:text-primary prose-headings:font-bold prose-a:text-accent prose-a:underline hover:prose-a:text-accent/80">
                        <p className="text-xl leading-relaxed text-primary/80 font-medium mb-6">
                            Je CPC in Google Ads verlaag je door je Quality Score te verhogen, irrelevante zoekwoorden uit te sluiten en je advertenties beter te laten aansluiten op de zoekopdracht. Veel MKB-bedrijven betalen 20 tot 40 procent te veel per klik omdat ze op de verkeerde zoekwoorden bieden of hun landingspagina niet goed matcht. In dit artikel lees je precies welke stappen je zet om je klikprijs te drukken zonder bereik in te leveren.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Waarom is je CPC zo hoog?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een hoge CPC komt zelden uit het niets. Bij de meeste accounts die wij analyseren zien we drie oorzaken: te brede zoekwoorden die klikken trekken van mensen die iets anders zoeken, advertentieteksten die niet aansluiten op wat iemand intypt en landingspagina's die traag laden of irrelevant zijn. Google straft dat af met een lagere Quality Score, en een lagere score betekent meer betalen per klik.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Daarnaast speelt concurrentie mee. In branches als verzekeringen, juridisch advies of hypotheken zijn klikprijzen van 8 tot 20 euro normaal. Maar zelfs in die dure markten kun je 30 procent besparen als je je campagne goed inricht. Het draait om relevantie, niet om meer budget.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe werkt Quality Score en waarom bepaalt het je klikprijs?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Quality Score is het rapportcijfer dat Google aan je zoekwoorden geeft. Het loopt van 1 tot 10 en is gebaseerd op drie onderdelen: de verwachte klikfrequentie van je advertentie, de relevantie van je advertentietekst en de ervaring op je landingspagina. Hoe hoger je score, hoe minder je betaalt per klik.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Het verschil is fors. Een zoekwoord met een Quality Score van 8 kan je tot 50 procent minder kosten dan hetzelfde zoekwoord met een score van 5. Omgekeerd betaal je bij een score van 3 soms het dubbele van het gemiddelde. We merken in de praktijk dat veel MKB-accounts een gemiddelde Quality Score van 5 tot 6 hebben, terwijl 7 tot 8 haalbaar is met gerichte verbeteringen. Meer over Quality Score lees je in onze <Link to="/blogs/google-ads/google-ads-quality-score-verhogen" className="text-accent hover:underline">7 tips om je Quality Score te verhogen</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe verlaag je CPC met betere zoekwoorden?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Te brede zoekwoorden zijn de grootste budgetverspiller. Het zoekwoord "schoenen" trekt iedereen die ook maar iets met schoenen zoekt, inclusief mensen die zoeken naar "schoenen reparatie" of "schoenen tekenen". Dat zijn kliks waar je niks aan hebt, maar wél voor betaalt.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Switch naar phrase match en exact match voor je belangrijkste zoekwoorden. Voeg daarna wekelijks negatieve zoekwoorden toe op basis van je zoektermen-rapport. Bij de meeste accounts die we overnemen, gaat 15 tot 30 procent van het budget naar zoekopdrachten die niks opleveren. Door die lek te dichten, daalt je gemiddelde CPC direct. Tegelijkertijd stijgt je conversieratio, omdat alleen relevante klikkers overblijven.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Long-tail zoekwoorden zijn een andere manier om CPC te drukken. "Google Ads bureau voor webshop" kost per klik minder dan "Google Ads bureau" en converteert beter. Bekijk onze gids over <Link to="/blogs/google-ads/long-tail-keywords-google-ads" className="text-accent hover:underline">long-tail keywords in Google Ads</Link> voor concrete methoden.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat levert een betere advertentietekst op?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Je advertentietekst bepaalt of iemand klikt, maar ook hoe relevant Google je advertentie vindt. Een advertentie die het zoekwoord bevat, een duidelijke belofte doet en eindigt met een sterke call-to-action scoort hoger op verwachte CTR. En een hogere verwachte CTR betekent een lagere CPC.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Schrijf minimaal drie responsieve zoekadvertenties per advertentiegroep met gevarieerde koppen. Test koppen met en zonder cijfers, met en zonder vragen, en met verschillende voordelen. Een kop als "Google Ads campagne voor 499 per maand" trekt andere klikkers dan "Meer klanten via Google Ads". Door te testen ontdek je welke combinatie de hoogste CTR haalt bij de laagste kosten.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Vergeet je advertentie-extensies niet. Sitelinks, callouts en gestructureerde snippets vergroten je advertentie op de pagina en verhogen je CTR met gemiddeld 10 tot 15 procent. Dat drukt je CPC indirect, want Google beloont advertenties die veel geklikt worden.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe draagt je landingspagina bij aan een lagere CPC?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De landingspagina-ervaring is een van de drie pijlers van je Quality Score. Een trage pagina, een pagina die niet mobiel-vriendelijk is of een pagina die over iets anders gaat dan de advertentie belooft, drukt je score omlaag. En dat kost je geld bij elke klik.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Zorg dat je landingspagina binnen 2,5 seconden laadt, het zoekwoord terugkomt in de kop en de eerste alinea, en de bezoeker direct ziet wat je aanbiedt. Een webshop die we begeleidden schakelde over van een generieke categoriepagina naar een specifieke landingspagina per advertentiegroep. Het resultaat: Quality Score steeg van 5 naar 8 en de CPC daalde met 35 procent. Meer hierover lees je in <Link to="/blogs/strategie/landingspagina-schrijven-converteert" className="text-accent hover:underline">Landingspagina schrijven die converteert</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Kan slim bieden je CPC verlagen?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Smart Bidding verlaagt niet per definitie je CPC, maar het verdeelt je budget slimmer. Strategieën als Doel-CPA en Doel-ROAS laten Google minder bieden op momenten en doelgroepen die waarschijnlijk niet converteren. Het gevolg is dat je gemiddelde CPC op winstgevende kliks daalt, terwijl je totale bereik behouden blijft.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Let wel op: Smart Bidding heeft minimaal 30 tot 50 conversies per maand nodig om goed te werken. Bij minder conversies heb je meer controle met handmatig bieden of Verbeterde CPC. We zien bij onze klanten dat de overstap naar Smart Bidding bij voldoende data gemiddeld 15 tot 25 procent meer conversies oplevert bij dezelfde kosten. Lees meer in onze blog over <Link to="/blogs/google-ads/smart-bidding-uitgelegd-wanneer-wanneer" className="text-accent hover:underline">Smart Bidding: wanneer gebruik je het</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wanneer zijn lagere klikprijzen niet de oplossing?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een lage CPC is alleen waardevol als de kliks ook converteren. We krijgen regelmatig accounts binnen waar de eigenaar trots een CPC van 0,30 euro laat zien, maar de conversieratio op 0,5 procent staat. Elke lead kost dan alsnog 60 euro. Iemand anders betaalt 3 euro per klik maar converteert op 8 procent. Kosten per lead: 37,50 euro.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Focus daarom niet alleen op CPC maar op kosten per conversie en uiteindelijk op ROI. Soms is het slimmer om 20 procent meer per klik te betalen als dat klikkers zijn die daadwerkelijk kopen. De goedkoopste klik is niet de beste klik.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Zo pak je het aan: een praktisch stappenplan</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Begin met je zoektermen-rapport. Filter op zoektermen die geen conversies opleveren maar wél geld kosten en voeg ze toe als negatief zoekwoord. Doe dit wekelijks. Binnen een maand merk je verschil.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Kijk daarna per zoekwoord naar je Quality Score. Alles onder de 6 verdient aandacht. Pas je advertentietekst aan zodat het zoekwoord terugkomt in minimaal twee koppen. Controleer of de landingspagina aansluit en snel laadt. Test nieuwe advertentievarianten en geef ze vier weken de tijd voordat je conclusies trekt.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Wil je weten hoeveel je kunt besparen op je klikprijzen? Plan een gratis gesprek via onze <Link to="/contact" className="text-accent hover:underline">contactpagina</Link>. We analyseren je account en laten zien waar de grootste besparingen zitten.
                        </p>
                    </div>

                    {/* FAQ Section */}
                    <section className="mt-16 pt-12 border-t border-primary/10">
                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Veelgestelde vragen</h2>
                        <div className="space-y-6 not-prose">
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat is een goede CPC in Google Ads?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Dat verschilt per branche. In e-commerce betaal je gemiddeld 0,50 tot 2 euro per klik. In verzekeringen of juridische diensten kan dat oplopen tot 10 tot 20 euro. Vergelijk je CPC altijd met je marge en conversieratio om te bepalen of het rendabel is.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Helpt een hogere Quality Score echt om CPC te verlagen?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Ja, Google beloont relevantie. Een Quality Score van 8 of hoger kan je klikprijs met 30 tot 50 procent verlagen ten opzichte van een score van 5. Werk aan je advertentietekst, landingspagina en verwachte CTR om je score omhoog te krijgen.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Kan ik CPC verlagen met Smart Bidding?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Smart Bidding verlaagt je CPC niet per definitie, maar het verdeelt je budget slimmer. Strategieën als Doel-CPA en Doel-ROAS bieden minder op kliks die waarschijnlijk niet converteren. Het resultaat is vaak een lagere effectieve CPC op winstgevende kliks.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoeveel kan ik besparen door negatieve zoekwoorden toe te voegen?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Bij de meeste accounts die we analyseren gaat 15 tot 30 procent van het budget naar irrelevante zoekopdrachten. Door wekelijks je zoektermen te controleren en negatieve zoekwoorden toe te voegen, bespaar je dat bedrag direct. De vrijgemaakte ruimte gaat naar kliks die wél converteren.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Verlaagt een betere landingspagina mijn CPC?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Indirect wel. Google beoordeelt je landingspagina-ervaring als onderdeel van je Quality Score. Een snelle, relevante pagina die goed aansluit op je advertentie verhoogt je score en verlaagt daarmee je klikprijs. Bovendien converteert zo'n pagina beter, waardoor je effectieve kosten per klant dalen.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Moet ik mijn CPC handmatig instellen of automatisch laten bieden?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Bij minder dan 30 conversies per maand heb je vaak meer controle met handmatig bieden of Verbeterde CPC. Bij meer dan 50 conversies per maand werkt automatisch bieden meestal beter omdat Google genoeg data heeft om patronen te herkennen. Test beide en vergelijk de resultaten over minimaal vier weken.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Kan ik CPC verlagen door op andere tijden te adverteren?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Ja. Analyseer je advertentieplanningsrapport op dag en uur. Vaak zijn avonduren en weekenden goedkoper terwijl de conversieratio vergelijkbaar blijft. Door je biedingen per dagdeel aan te passen, betaal je minder voor dezelfde kliks op de momenten dat het rendabel is.
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
                            <Link to="/blogs/google-ads/long-tail-keywords-google-ads" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Long-tail keywords</h3>
                                <p className="text-primary/60 text-sm">Goedkopere kliks met hogere conversie.</p>
                            </Link>
                            <Link to="/blogs/google-ads/smart-bidding-uitgelegd-wanneer-wanneer" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Smart Bidding uitgelegd</h3>
                                <p className="text-primary/60 text-sm">Wanneer laat je Google jouw biedingen sturen?</p>
                            </Link>
                        </div>
                    </section>
                </div>
            </article>

            {/* Bottom CTA */}
            <section className="w-full pb-32 px-6">
                <div className="max-w-4xl mx-auto bg-primary rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
                    <h2 className="relative z-10 font-drama italic text-background text-3xl sm:text-4xl md:text-5xl mb-6">Te veel betalen per klik?</h2>
                    <p className="relative z-10 font-sans text-background/70 text-lg mb-10 max-w-xl mx-auto">We analyseren je account en laten zien waar je direct kunt besparen op je klikprijzen. Zonder verplichtingen.</p>
                    <Link to="/contact" className="relative z-10 btn-magnetic inline-flex items-center justify-center bg-accent text-background font-sans font-bold text-lg px-10 py-4 rounded-[2rem] hover:bg-accent/90 transition-colors">Neem contact op</Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
