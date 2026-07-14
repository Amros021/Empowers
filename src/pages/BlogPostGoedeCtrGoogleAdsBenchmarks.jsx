import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ChevronRight, User } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function BlogPostGoedeCtrGoogleAdsBenchmarks() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen selection:bg-accent/30 selection:text-dark flex flex-col bg-background">
            <Helmet>
                <title>Wat is een goede CTR in Google Ads: benchmarks per branche | Empowers</title>
                <meta name="description" content="Een goede CTR in Google Ads ligt tussen de 3 en 8 procent, afhankelijk van je branche. Bekijk de benchmarks per sector en leer hoe je jouw klikratio verbetert." />
                <link rel="canonical" href="https://www.empowers.nl/blogs/google-ads/goede-ctr-google-ads-benchmarks" />
                <meta property="og:title" content="Wat is een goede CTR in Google Ads: benchmarks per branche" />
                <meta property="og:description" content="Bekijk de CTR benchmarks per branche voor Google Ads en ontdek hoe je jouw klikratio verbetert." />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://www.empowers.nl/blogs/google-ads/goede-ctr-google-ads-benchmarks" />
                <meta property="og:image" content="https://www.empowers.nl/images/blogs/goede-ctr-google-ads-benchmarks.jpg" />
                <meta property="article:published_time" content="2026-04-13T00:00:00+02:00" />
                <meta property="article:author" content="Empowers" />
                <meta property="article:section" content="Google Ads" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Wat is een goede CTR in Google Ads: benchmarks per branche" />
                <meta name="twitter:description" content="CTR benchmarks per branche voor Google Ads. Ontdek wat normaal is en hoe je jouw klikratio verbetert." />

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Article",
                        "headline": "Wat is een goede CTR in Google Ads: benchmarks per branche",
                        "description": "Een goede CTR in Google Ads ligt tussen de 3 en 8 procent, afhankelijk van je branche. Bekijk de benchmarks per sector en leer hoe je jouw klikratio verbetert.",
                        "image": "https://www.empowers.nl/images/blogs/goede-ctr-google-ads-benchmarks.jpg",
                        "datePublished": "2026-04-13T00:00:00+02:00",
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
                                    "name": "Wat is een goede CTR in Google Ads?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Een goede CTR in Google Ads voor zoekadvertenties ligt tussen de 3 en 8 procent. Het verschilt sterk per branche. E-commerce en lokale diensten halen vaak 5 tot 8 procent. Juridische en financiele diensten zitten eerder rond 2 tot 4 procent. Alles onder de 2 procent verdient aandacht."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Wat is CTR precies in Google Ads?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "CTR staat voor Click-Through Rate, oftewel klikratio. Het is het percentage mensen dat op je advertentie klikt nadat ze hem hebben gezien. Als 100 mensen je advertentie zien en 5 klikken, is je CTR 5 procent. Google toont dit in je campagne-dashboard."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Hoe verbeter je een lage CTR in Google Ads?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Begin met je zoekwoorden aanscherpen. Brede zoekwoorden trekken irrelevante vertoningen aan die je CTR verlagen. Voeg negatieve zoekwoorden toe. Schrijf koppen die direct aansluiten bij wat iemand zoekt. En test meerdere advertentievarianten om te zien welke beter presteren."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Telt CTR mee voor de Quality Score?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Ja, verwachte CTR is een van de drie factoren van je Quality Score. Een hogere CTR verbetert je score, waardoor je minder betaalt per klik en een hogere positie kunt bereiken. Het is een van de snelste manieren om je advertentiekosten te verlagen."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Wat is een goede CTR voor Display advertenties?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Voor Display advertenties is een CTR van 0,5 tot 1 procent al goed. Display werkt anders dan zoekadvertenties. Mensen zoeken niet actief, ze zien je banner terwijl ze iets anders doen. Een lagere CTR is hier normaal en zegt weinig over de kwaliteit van je campagne."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Verschilt de CTR per apparaat in Google Ads?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Ja, mobiel heeft gemiddeld een hogere CTR dan desktop. Dat komt doordat er minder ruimte is op het scherm en advertenties prominenter worden getoond. Maar een hogere CTR op mobiel betekent niet altijd meer conversies. Check altijd je conversieratio per apparaat."
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
                                "name": "CTR benchmarks Google Ads",
                                "item": "https://www.empowers.nl/blogs/google-ads/goede-ctr-google-ads-benchmarks"
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
                        <span className="text-primary truncate">CTR benchmarks Google Ads</span>
                    </nav>

                    {/* Header */}
                    <header className="mb-16">
                        <div className="inline-block px-3 py-1 bg-accent/10 text-accent font-mono text-xs uppercase tracking-widest rounded-full mb-6">
                            Google Ads
                        </div>
                        <h1 className="font-sans font-bold text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight mb-8">
                            Wat is een goede CTR in Google Ads: benchmarks per branche
                        </h1>

                        <div className="flex flex-wrap items-center gap-6 text-sm font-sans text-primary/60 border-y border-primary/10 py-6">
                            <div className="flex items-center gap-2">
                                <User className="w-4 h-4" />
                                <span>Empowers Redactie</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>13 april 2026</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>8 minuten leestijd</span>
                            </div>
                        </div>
                    </header>

                    {/* Featured Image */}
                    <figure className="w-full h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden mb-16 relative bg-primary">
                        <div className="absolute inset-0 bg-[url('/images/blogs/goede-ctr-google-ads-benchmarks.jpg')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </figure>

                    {/* Content */}
                    <div className="prose prose-lg max-w-none prose-headings:text-primary prose-headings:font-bold prose-a:text-accent prose-a:underline hover:prose-a:text-accent/80">
                        <p className="text-xl leading-relaxed text-primary/80 font-medium mb-6">
                            Een goede CTR in Google Ads ligt voor zoekadvertenties tussen de 3 en 8 procent. Maar dat gemiddelde zegt weinig als je niet weet wat normaal is in jouw branche. Een installateur met 6 procent CTR presteert uitstekend. Een advocatenkantoor met diezelfde 6 procent scoort boven verwachting. Hieronder vind je de benchmarks per sector, zodat je weet waar je staat.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat is CTR en waarom is het belangrijk?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            CTR staat voor Click-Through Rate. Het is het percentage mensen dat op je advertentie klikt nadat ze hem hebben gezien. Als je advertentie 1000 keer wordt getoond en 50 mensen klikken, is je CTR 5 procent. Simpel. Maar de impact is groot.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Google gebruikt je CTR als signaal voor de kwaliteit van je advertentie. Een hogere CTR betekent een hogere Quality Score. En een hogere Quality Score betekent dat je minder betaalt per klik en een betere positie krijgt. Bij onze klanten zien we regelmatig dat het verbeteren van de CTR met 2 procentpunt leidt tot 15 tot 25 procent lagere kosten per klik. Dat tikt aan als je maandelijks duizenden euro's aan advertentiebudget uitgeeft.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat zijn de gemiddelde CTR benchmarks per branche?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De cijfers hieronder gelden voor zoekadvertenties in Nederland. Display en Performance Max campagnes hebben andere benchmarks, die behandelen we verderop.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            E-commerce en webshops scoren gemiddeld 4 tot 7 procent CTR. Mensen zoeken gericht naar producten en klikken snel door. Lokale dienstverleners zoals loodgieters, elektriciens en schilders halen vaak 5 tot 9 procent. Dat komt doordat de zoekopdrachten heel specifiek zijn: "loodgieter Amsterdam spoed" levert bijna altijd een klik op.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            B2B-dienstverleners zitten lager, rond de 2 tot 4 procent. De zoekvolumes zijn kleiner en de doelgroep is kritischer. Financiele diensten en verzekeringen scoren vergelijkbaar: 2 tot 3,5 procent. De concurrentie is hier hevig en de klikprijzen hoog, dus elke tiende procent telt.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Juridische diensten zitten rond 2 tot 4 procent. Gezondheidszorg haalt gemiddeld 3 tot 5 procent. Reisbranche en horeca scoren vaak 4 tot 7 procent, vooral bij seizoensgebonden zoekopdrachten. We merken in de praktijk dat bedrijven die hun CTR kennen per branche, veel sneller weten of hun campagnes goed draaien of aandacht nodig hebben.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wanneer is je CTR te laag?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Als je CTR structureel onder de 2 procent zit bij zoekadvertenties, is er iets mis. Dat kan liggen aan je zoekwoorden, je advertentietekst of je targeting. Een lage CTR betekent dat je advertentie wel getoond wordt, maar dat mensen er niet op klikken. Je betaalt niets per vertoning, maar je mist wel potentiele klanten. En Google geeft je een lagere Quality Score, waardoor je meer betaalt als er wel iemand klikt.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een veelgemaakte fout die we tegenkomen: te brede zoekwoorden gebruiken. Als je "marketing" als zoekwoord hebt, wordt je advertentie getoond aan iedereen die iets over marketing zoekt. Studenten, nieuwsgierigen, concurrenten. Die klikken niet. Je CTR daalt en Google denkt dat je advertentie niet relevant is. Meer over het gericht inzetten van zoekwoorden lees je in onze blog over <Link to="/blogs/google-ads/long-tail-keywords-google-ads" className="text-accent hover:underline">long-tail keywords in Google Ads</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe verbeter je je CTR concreet?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Eerste stap: zoekwoorden aanscherpen. Vervang brede zoekwoorden door specifiekere varianten. "Loodgieter" wordt "loodgieter lekkage Amsterdam." Minder vertoningen, maar een veel hogere CTR en meer relevante klikken.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Tweede stap: je advertentietekst verbeteren. Zorg dat je kop direct aansluit bij de zoekopdracht. Als iemand zoekt op "dakkapel kosten," moet je kop iets zeggen over dakkapel kosten. Niet "Welkom bij Bouwbedrijf Jansen." Google maakt zoekwoorden in je kop vetgedrukt. Dat valt op en trekt klikken.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Derde stap: extensies toevoegen. Sitelinks, oproepextensies en highlight-extensies maken je advertentie groter en geven meer redenen om te klikken. Bij een installatiebedrijf dat we begeleiden steeg de CTR van 3,8 naar 5,6 procent na het toevoegen van sitelinks met specifieke diensten en een oproepextensie. Meer over het schrijven van sterke advertenties lees je in onze blog over <Link to="/blogs/google-ads/schrijf-google-ads-advertentie-geklikt" className="text-accent hover:underline">Google Ads advertenties die geklikt worden</Link>.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Vierde stap: negatieve zoekwoorden instellen. Blokkeer zoekopdrachten die niet relevant zijn. Als je keukens verkoopt, wil je niet verschijnen bij "keuken schoonmaken." Elke irrelevante vertoning drukt je CTR naar beneden. Bekijk onze blog over <Link to="/blogs/google-ads/negatieve-zoekwoorden-google-ads" className="text-accent hover:underline">negatieve zoekwoorden in Google Ads</Link> voor een compleet overzicht.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat is een goede CTR voor Display en Performance Max?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Display advertenties hebben een totaal andere dynamiek. Hier is een CTR van 0,5 tot 1 procent al prima. Mensen zoeken niet actief. Ze scrollen door een nieuwssite en zien je banner tussendoor. Dat ze niet klikken, betekent niet dat je campagne slecht draait. Display werkt meer op zichtbaarheid en merkherkenning.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Performance Max campagnes zijn lastiger te beoordelen op CTR. Google combineert hier Search, Display, YouTube en Discovery in een campagne. De gemiddelde CTR kan misleidend laag lijken omdat Display-vertoningen het gemiddelde drukken. Kijk bij PMax liever naar conversies en ROAS dan naar CTR.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe beinvloedt je CTR de kosten per klik?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Google berekent je werkelijke kosten per klik met een formule waarin je Quality Score een grote rol speelt. En CTR is de belangrijkste factor in die Quality Score. Een advertentie met een CTR van 7 procent en een Quality Score van 8 betaalt soms 40 procent minder per klik dan een concurrent met een CTR van 3 procent en een Quality Score van 5.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een webshop die we vorig kwartaal begeleidden had een gemiddelde CTR van 3,2 procent en betaalde 1,80 euro per klik. Na het aanscherpen van zoekwoorden en het herschrijven van advertentieteksten steeg de CTR naar 5,8 procent. De kosten per klik daalden naar 1,15 euro. Bij een maandbudget van 3000 euro zijn dat 600 extra klikken per maand voor hetzelfde geld.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Is een hoge CTR altijd goed?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Niet per definitie. Een hoge CTR met een lage conversieratio betekent dat je veel bezoekers aantrekt die niets kopen. Dat kan komen doordat je advertentie te breed is, of doordat je landingspagina niet aansluit bij de verwachting. Een CTR van 10 procent klinkt geweldig, maar als slechts 0,5 procent converteert, betaal je veel voor weinig.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Kijk altijd naar CTR in combinatie met conversieratio en kosten per conversie. De beste campagnes hebben een gezonde CTR en een sterke conversie erachter. Dat is waar het verschil wordt gemaakt.
                        </p>

                        <p className="text-primary/80 leading-relaxed mb-6">
                            Wil je weten hoe jouw CTR zich verhoudt tot de benchmark in jouw branche? We kijken er graag naar. Plan een gesprek via onze <Link to="/contact" className="text-accent hover:underline">contactpagina</Link>.
                        </p>
                    </div>

                    {/* FAQ Section */}
                    <section className="mt-16 pt-12 border-t border-primary/10">
                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Veelgestelde vragen</h2>
                        <div className="space-y-6 not-prose">
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat is een goede CTR in Google Ads?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Een goede CTR in Google Ads voor zoekadvertenties ligt tussen de 3 en 8 procent. Het verschilt sterk per branche. E-commerce en lokale diensten halen vaak 5 tot 8 procent. Juridische en financiele diensten zitten eerder rond 2 tot 4 procent. Alles onder de 2 procent verdient aandacht.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat is CTR precies in Google Ads?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    CTR staat voor Click-Through Rate, oftewel klikratio. Het is het percentage mensen dat op je advertentie klikt nadat ze hem hebben gezien. Als 100 mensen je advertentie zien en 5 klikken, is je CTR 5 procent. Google toont dit in je campagne-dashboard.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoe verbeter je een lage CTR in Google Ads?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Begin met je zoekwoorden aanscherpen. Brede zoekwoorden trekken irrelevante vertoningen aan die je CTR verlagen. Voeg negatieve zoekwoorden toe. Schrijf koppen die direct aansluiten bij wat iemand zoekt. En test meerdere advertentievarianten om te zien welke beter presteren.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Telt CTR mee voor de Quality Score?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Ja, verwachte CTR is een van de drie factoren van je Quality Score. Een hogere CTR verbetert je score, waardoor je minder betaalt per klik en een hogere positie kunt bereiken. Het is een van de snelste manieren om je advertentiekosten te verlagen.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat is een goede CTR voor Display advertenties?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Voor Display advertenties is een CTR van 0,5 tot 1 procent al goed. Display werkt anders dan zoekadvertenties. Mensen zoeken niet actief, ze zien je banner terwijl ze iets anders doen. Een lagere CTR is hier normaal en zegt weinig over de kwaliteit van je campagne.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Verschilt de CTR per apparaat in Google Ads?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Ja, mobiel heeft gemiddeld een hogere CTR dan desktop. Dat komt doordat er minder ruimte is op het scherm en advertenties prominenter worden getoond. Maar een hogere CTR op mobiel betekent niet altijd meer conversies. Check altijd je conversieratio per apparaat.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Related Links */}
                    <section className="mt-16 pt-12 border-t border-primary/10">
                        <h3 className="text-xl font-bold text-primary mb-6">Lees ook</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <Link to="/blogs/google-ads/schrijf-google-ads-advertentie-geklikt" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Advertenties die geklikt worden</h3>
                                <p className="text-primary/60 text-sm">Zo schrijf je koppen en beschrijvingen die echt werken.</p>
                            </Link>
                            <Link to="/blogs/google-ads/google-ads-quality-score-verhogen" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Quality Score verhogen</h3>
                                <p className="text-primary/60 text-sm">7 concrete tips om je kwaliteitsscore te verbeteren.</p>
                            </Link>
                            <Link to="/blogs/google-ads/negatieve-zoekwoorden-google-ads" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Negatieve zoekwoorden</h3>
                                <p className="text-primary/60 text-sm">Voorkom dat je betaalt voor klikken die niets opleveren.</p>
                            </Link>
                        </div>
                    </section>
                </div>
            </article>

            {/* Bottom CTA */}
            <section className="w-full pb-32 px-6">
                <div className="max-w-4xl mx-auto bg-primary rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
                    <h2 className="relative z-10 font-drama italic text-background text-3xl sm:text-4xl md:text-5xl mb-6">Meer klikken, minder kosten?</h2>
                    <p className="relative z-10 font-sans text-background/70 text-lg mb-10 max-w-xl mx-auto">We analyseren je huidige CTR en laten zien waar de winst zit. Geen verplichtingen, wel een eerlijk advies.</p>
                    <Link to="/contact" className="relative z-10 btn-magnetic inline-flex items-center justify-center bg-accent text-background font-sans font-bold text-lg px-10 py-4 rounded-[2rem] hover:bg-accent/90 transition-colors">Neem contact op</Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}