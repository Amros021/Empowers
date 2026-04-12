import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ChevronRight, User } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function BlogPostSchrijfGoogleAdsAdvertentieGeklikt() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen selection:bg-accent/30 selection:text-dark flex flex-col bg-background">
            <Helmet>
                <title>Hoe schrijf je een Google Ads advertentie die geklikt wordt | Empowers</title>
                <meta name="description" content="Een Google Ads advertentie schrijven die geklikt wordt? Lees hoe je koppen, beschrijvingen en extensies opstelt die klikken en conversies opleveren." />
                <link rel="canonical" href="https://www.empowers.nl/blogs/google-ads/schrijf-google-ads-advertentie-geklikt" />
                <meta property="og:title" content="Hoe schrijf je een Google Ads advertentie die geklikt wordt" />
                <meta property="og:description" content="Zo schrijf je Google Ads advertenties die klikken opleveren. Praktische tips voor koppen, beschrijvingen en extensies." />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://www.empowers.nl/blogs/google-ads/schrijf-google-ads-advertentie-geklikt" />
                <meta property="og:image" content="https://www.empowers.nl/images/blogs/schrijf-google-ads-advertentie-geklikt.jpg" />
                <meta property="article:published_time" content="2026-04-12" />
                <meta property="article:author" content="Empowers" />
                <meta property="article:section" content="Google Ads" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Hoe schrijf je een Google Ads advertentie die geklikt wordt" />
                <meta name="twitter:description" content="Praktische tips voor het schrijven van Google Ads advertenties die echt geklikt worden." />

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Article",
                        "headline": "Hoe schrijf je een Google Ads advertentie die geklikt wordt",
                        "description": "Een Google Ads advertentie schrijven die geklikt wordt? Lees hoe je koppen, beschrijvingen en extensies opstelt die klikken en conversies opleveren.",
                        "image": "https://www.empowers.nl/images/blogs/schrijf-google-ads-advertentie-geklikt.jpg",
                        "datePublished": "2026-04-12T00:00:00+02:00",
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
                                    "name": "Hoeveel koppen mag je invullen bij een Google Ads advertentie?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Bij een responsieve zoekadvertentie vul je maximaal 15 koppen in van elk 30 tekens. Google test automatisch welke combinaties het beste presteren. Vul er minimaal 10 in voor genoeg variatie. Gebruik in minstens 3 koppen je zoekwoord."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Hoe lang mag een Google Ads beschrijving zijn?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Elke beschrijving mag maximaal 90 tekens zijn. Je kunt tot 4 beschrijvingen invullen. Google toont er meestal 2. Schrijf elke beschrijving alsof hij alleen staat, want je weet niet welke combinatie Google kiest."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Wat is een goede CTR voor Google Ads?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Een goede CTR voor zoekadvertenties ligt tussen de 3 en 8 procent, afhankelijk van je branche. Advocaten en financiele diensten zitten vaak rond 3 procent. E-commerce en lokale diensten halen regelmatig 5 tot 8 procent. Alles onder de 2 procent verdient aandacht."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Moet je het zoekwoord altijd in de kop zetten?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "In minstens 2 tot 3 van je 15 koppen moet het zoekwoord terugkomen. Google maakt de kop vetgedrukt als het matcht met de zoekopdracht. Dat valt op en verhoogt je klikratio. Maar vul niet elke kop met hetzelfde woord, dat levert saaie advertenties op."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Hoe test je welke advertentietekst het beste werkt?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Gebruik advertentievariaties of experimenten in Google Ads. Vergelijk twee versies van je advertentie op CTR en conversieratio over minimaal 2 weken en 100 klikken per versie. Kijk niet alleen naar klikken maar ook naar wat er na de klik gebeurt."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Welke extensies zijn het belangrijkst voor een goede advertentie?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Sitelinks, oproepextensies en highlight-extensies zijn de drie die je altijd moet instellen. Sitelinks vergroten je advertentie visueel en geven extra klikopties. Oproepextensies zijn belangrijk voor dienstverleners. Highlight-extensies laten je USPs zien zonder extra klikkosten."
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
                                "name": "Google Ads advertentie schrijven",
                                "item": "https://www.empowers.nl/blogs/google-ads/schrijf-google-ads-advertentie-geklikt"
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
                        <span className="text-primary truncate">Google Ads advertentie schrijven</span>
                    </nav>

                    {/* Header */}
                    <header className="mb-16">
                        <div className="inline-block px-3 py-1 bg-accent/10 text-accent font-mono text-xs uppercase tracking-widest rounded-full mb-6">
                            Google Ads
                        </div>
                        <h1 className="font-sans font-bold text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight mb-8">
                            Hoe schrijf je een Google Ads advertentie die geklikt wordt
                        </h1>

                        <div className="flex flex-wrap items-center gap-6 text-sm font-sans text-primary/60 border-y border-primary/10 py-6">
                            <div className="flex items-center gap-2">
                                <User className="w-4 h-4" />
                                <span>Empowers Redactie</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>12 april 2026</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>8 minuten leestijd</span>
                            </div>
                        </div>
                    </header>

                    {/* Featured Image */}
                    <figure className="w-full h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden mb-16 relative bg-primary">
                        <div className="absolute inset-0 bg-[url('/images/blogs/schrijf-google-ads-advertentie-geklikt.jpg')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </figure>

                    {/* Content */}
                    <div className="prose prose-lg max-w-none prose-headings:text-primary prose-headings:font-bold prose-a:text-accent prose-a:underline hover:prose-a:text-accent/80">
                        <p className="text-xl leading-relaxed text-primary/80 font-medium mb-6">
                            Een Google Ads advertentie schrijven die geklikt wordt begint bij de kop. Je hebt 30 tekens om iemand te overtuigen dat jouw resultaat het beste antwoord is op wat diegene zoekt. De beste advertenties benoemen het probleem, geven een belofte en sluiten af met een duidelijke reden om te klikken. Geen trucjes. Gewoon relevantie, scherpte en een aanbod dat klopt.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Waarom worden sommige advertenties vaker geklikt dan andere?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Google toont soms 4 advertenties boven de organische resultaten. Jouw advertentie concurreert dus met 3 anderen die precies hetzelfde zoekwoord targeten. Het verschil zit in de tekst. Een advertentie die precies zegt wat de zoeker wil horen, wint. Niet de advertentie met het hoogste bod.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Bij onze klanten zien we dat een sterke advertentietekst het verschil maakt tussen een CTR van 2 procent en 7 procent. Dat is niet een klein verschil. Bij hetzelfde budget betekent het 3,5 keer zoveel bezoekers. En Google beloont een hogere CTR met een betere Quality Score, waardoor je minder betaalt per klik. Beter schrijven levert dus dubbel op.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe schrijf je koppen die opvallen in de zoekresultaten?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Google geeft je 15 koppen van maximaal 30 tekens bij een responsieve zoekadvertentie. Dat klinkt als veel ruimte, maar 30 tekens is krap. "Gratis offerte aanvragen" is al 25 tekens. Elke letter telt.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Verdeel je 15 koppen over vier categorieen. Drie tot vier koppen met het zoekwoord erin, zodat Google die kan matchen met de zoekopdracht. Twee tot drie koppen met je belangrijkste voordeel: "Binnen 24 uur geregeld" of "Al vanaf 49 euro per maand." Twee tot drie koppen met sociale bewijskracht: "500+ tevreden klanten" of "4,8 uit 5 sterren." En drie tot vier koppen met een call-to-action: "Vraag gratis advies aan" of "Bekijk de mogelijkheden."
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een veelgemaakte fout die we tegenkomen: alle 15 koppen vullen met variaties van dezelfde boodschap. "Beste loodgieter", "Top loodgieter", "Goede loodgieter." Dat geeft Google weinig om mee te werken. Variatie in je koppen zorgt dat Google de beste combinatie kan samenstellen voor elke zoekopdracht.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat maakt een beschrijving overtuigend?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De beschrijving is je verkooppraatje in 90 tekens. Hier heb je iets meer ruimte dan in de kop, maar niet veel. De beste beschrijvingen volgen een simpel patroon: probleem, oplossing, actie. "Hoge energierekening? Wij isoleren je woning binnen een week. Vraag een gratis inspectie aan."
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            We merken in de praktijk dat beschrijvingen met concrete cijfers beter presteren. "Bespaar gemiddeld 340 euro per jaar" werkt beter dan "Bespaar op je energiekosten." Specifiek klopt geloofwaardiger dan vaag. Hetzelfde geldt voor tijdsaanduidingen: "Offerte binnen 2 uur" is sterker dan "Snel een offerte."
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Schrijf je 4 beschrijvingen alsof ze elk op zichzelf staan. Google combineert ze willekeurig, dus elke beschrijving moet los van de andere werken. Vermijd verwijzingen als "zoals hierboven" of "daarnaast bieden we."
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe gebruik je extensies om je advertentie groter te maken?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Extensies maken je advertentie visueel groter in de zoekresultaten. Een advertentie met sitelinks, oproepextensies en highlight-extensies neemt soms twee keer zoveel ruimte in als een kale advertentie. Meer ruimte betekent meer zichtbaarheid en meer klikken.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Sitelinks zijn de belangrijkste. Voeg 4 tot 8 sitelinks toe die naar relevante pagina's op je website leiden. "Prijzen bekijken", "Onze werkwijze", "Reviews lezen", "Contact opnemen." Elke sitelink is een extra ingang naar je website. Bij een klant in de installatiebranche zagen we 18 procent meer klikken na het toevoegen van sitelinks met specifieke diensten.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Highlight-extensies zijn gratis extra tekst onder je advertentie. Gebruik ze voor je USPs: "Gratis offerte", "Geen voorrijkosten", "10 jaar garantie." Ze kosten niets extra per klik maar versterken je boodschap. Oproepextensies zijn onmisbaar als telefonisch contact belangrijk is voor je bedrijf. Meer over het meten van al die klikken en conversies lees je in onze blog over het <Link to="/blogs/google-ads/meet-roi-google-ads-campagne" className="text-accent hover:underline">meten van ROI in Google Ads</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Welke fouten zie je het vaakst in Google Ads advertentieteksten?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De eerste fout: te generiek schrijven. "Welkom bij ons bedrijf" als kop. Dat zegt niets. De zoeker wil weten wat je doet, wat het kost en waarom jij beter bent. Elke kop en beschrijving moet een concrete reden geven om te klikken.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Fout twee: de landingspagina vergeten. Je advertentie belooft "Offerte binnen 2 uur" maar je landingspagina heeft geen offerteformulier. Dat kost je conversies en verlaagt je Quality Score. De belofte in je advertentie moet matchen met wat de bezoeker aantreft na de klik. Hoe je dat goed aanpakt lees je in onze blog over <Link to="/blogs/strategie/landingspagina-schrijven-converteert" className="text-accent hover:underline">landingspagina's die converteren</Link>.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Fout drie: geen urgentie of onderscheid. Als je advertentie precies hetzelfde zegt als je concurrent, heeft de zoeker geen reden om voor jou te kiezen. Noem wat jou anders maakt. Snellere levertijd, lagere prijs, meer ervaring, betere reviews. Iets concreets dat je onderscheidt.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe beinvloedt je advertentietekst de Quality Score?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Google beoordeelt je advertentie op drie onderdelen: verwachte CTR, advertentierelevantie en ervaring op de bestemmingspagina. Twee van die drie gaan direct over je tekst. Een advertentie die goed aansluit bij het zoekwoord scoort hoger op relevantie. Een advertentie die vaker geklikt wordt, scoort hoger op verwachte CTR.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een hogere Quality Score betekent dat je minder betaalt per klik. Bij een Quality Score van 8 betaal je soms 30 tot 50 procent minder dan bij een score van 5, voor dezelfde positie. Goed schrijven is dus niet alleen goed voor je klikratio, maar ook voor je portemonnee. Meer hierover lees je in onze blog over de <Link to="/blogs/google-ads/google-ads-quality-score-verhogen" className="text-accent hover:underline">Google Ads Quality Score verhogen</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe test je of je advertentietekst werkt?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Schrijf niet een advertentie en laat die voor altijd draaien. Testen is hoe je beter wordt. Maak minimaal 2 advertenties per advertentiegroep en vergelijk de prestaties na 2 tot 4 weken. Kijk niet alleen naar CTR. Een advertentie met een lagere CTR maar hogere conversieratio kan waardevoller zijn.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Google biedt advertentie-experimenten waarmee je gecontroleerd kunt testen. Verander een element per keer: alleen de kop, of alleen de beschrijving. Zo weet je precies wat het verschil maakt. Bij een webshop die we begeleidden leverde het aanpassen van een kop van "Bestel vandaag" naar "Vandaag besteld, morgen in huis" een stijging van 23 procent in CTR op. Een kleine wijziging, groot effect.
                        </p>

                        <p className="text-primary/80 leading-relaxed mb-6">
                            Wil je weten of jouw Google Ads advertenties beter kunnen presteren? We kijken er graag naar. Plan een gesprek via onze <Link to="/contact" className="text-accent hover:underline">contactpagina</Link>.
                        </p>
                    </div>

                    {/* FAQ Section */}
                    <section className="mt-16 pt-12 border-t border-primary/10">
                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Veelgestelde vragen</h2>
                        <div className="space-y-6 not-prose">
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoeveel koppen mag je invullen bij een Google Ads advertentie?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Bij een responsieve zoekadvertentie vul je maximaal 15 koppen in van elk 30 tekens. Google test automatisch welke combinaties het beste presteren. Vul er minimaal 10 in voor genoeg variatie. Gebruik in minstens 3 koppen je zoekwoord.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoe lang mag een Google Ads beschrijving zijn?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Elke beschrijving mag maximaal 90 tekens zijn. Je kunt tot 4 beschrijvingen invullen. Google toont er meestal 2. Schrijf elke beschrijving alsof hij alleen staat, want je weet niet welke combinatie Google kiest.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat is een goede CTR voor Google Ads?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Een goede CTR voor zoekadvertenties ligt tussen de 3 en 8 procent, afhankelijk van je branche. Advocaten en financiele diensten zitten vaak rond 3 procent. E-commerce en lokale diensten halen regelmatig 5 tot 8 procent. Alles onder de 2 procent verdient aandacht.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Moet je het zoekwoord altijd in de kop zetten?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    In minstens 2 tot 3 van je 15 koppen moet het zoekwoord terugkomen. Google maakt de kop vetgedrukt als het matcht met de zoekopdracht. Dat valt op en verhoogt je klikratio. Maar vul niet elke kop met hetzelfde woord, dat levert saaie advertenties op.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoe test je welke advertentietekst het beste werkt?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Gebruik advertentievariaties of experimenten in Google Ads. Vergelijk twee versies van je advertentie op CTR en conversieratio over minimaal 2 weken en 100 klikken per versie. Kijk niet alleen naar klikken maar ook naar wat er na de klik gebeurt.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Welke extensies zijn het belangrijkst voor een goede advertentie?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Sitelinks, oproepextensies en highlight-extensies zijn de drie die je altijd moet instellen. Sitelinks vergroten je advertentie visueel en geven extra klikopties. Oproepextensies zijn belangrijk voor dienstverleners. Highlight-extensies laten je USPs zien zonder extra klikkosten.
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
                                <p className="text-primary/60 text-sm">7 concrete tips om je kwaliteitsscore te verbeteren.</p>
                            </Link>
                            <Link to="/blogs/google-ads/meet-roi-google-ads-campagne" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">ROI meten in Google Ads</h3>
                                <p className="text-primary/60 text-sm">Welke cijfers je echt moet volgen.</p>
                            </Link>
                            <Link to="/blogs/strategie/landingspagina-schrijven-converteert" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Landingspagina schrijven</h3>
                                <p className="text-primary/60 text-sm">Zo schrijf je een pagina die bezoekers omzet in klanten.</p>
                            </Link>
                        </div>
                    </section>
                </div>
            </article>

            {/* Bottom CTA */}
            <section className="w-full pb-32 px-6">
                <div className="max-w-4xl mx-auto bg-primary rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
                    <h2 className="relative z-10 font-drama italic text-background text-3xl sm:text-4xl md:text-5xl mb-6">Advertenties die echt presteren?</h2>
                    <p className="relative z-10 font-sans text-background/70 text-lg mb-10 max-w-xl mx-auto">We bekijken je huidige advertenties en laten zien waar de winst zit. Geen verplichtingen, wel een eerlijk advies.</p>
                    <Link to="/contact" className="relative z-10 btn-magnetic inline-flex items-center justify-center bg-accent text-background font-sans font-bold text-lg px-10 py-4 rounded-[2rem] hover:bg-accent/90 transition-colors">Neem contact op</Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}