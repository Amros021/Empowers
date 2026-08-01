import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ChevronRight, User } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function BlogPostLandingspaginaVsHomepageVerschil() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen selection:bg-accent/30 selection:text-dark flex flex-col bg-background">
            <Helmet>
                <title>Landingspagina vs homepage: het verschil | Empowers</title>
                <meta name="description" content="Een homepage vertelt wie je bent, een landingspagina verkoopt één aanbod. Lees het verschil en waarom je advertenties niet naar je homepage stuurt." />
                <link rel="canonical" href="https://www.empowers.nl/blogs/strategie/landingspagina-vs-homepage-verschil" />
                <meta property="og:title" content="Landingspagina vs homepage: het verschil | Empowers" />
                <meta property="og:description" content="Een homepage vertelt wie je bent, een landingspagina verkoopt één aanbod. Lees het verschil en waarom je advertenties niet naar je homepage stuurt." />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://www.empowers.nl/blogs/strategie/landingspagina-vs-homepage-verschil" />
                <meta property="og:image" content="https://www.empowers.nl/images/blogs/landingspagina-vs-homepage-verschil.jpg" />
                <meta property="article:published_time" content="2026-07-16T09:00:00+02:00" />
                <meta property="article:author" content="Empowers" />
                <meta property="article:section" content="Strategie" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Landingspagina vs homepage: het verschil | Empowers" />
                <meta name="twitter:description" content="Een homepage vertelt wie je bent, een landingspagina verkoopt één aanbod. Lees het verschil en waarom je advertenties niet naar je homepage stuurt." />
                <script type="application/ld+json">{JSON.stringify({
                    "@context": "https://schema.org",
                    "@graph": [
                        {
                            "@type": "Article",
                            "headline": "Landingspagina vs homepage: wanneer gebruik je welke?",
                            "image": "https://www.empowers.nl/images/blogs/landingspagina-vs-homepage-verschil.jpg",
                            "description": "Een homepage vertelt wie je bent, een landingspagina verkoopt één aanbod. Lees het verschil en waarom je advertenties niet naar je homepage stuurt.",
                            "author": { "@type": "Organization", "name": "Empowers" },
                            "publisher": { "@type": "Organization", "name": "Empowers", "url": "https://www.empowers.nl" },
                            "datePublished": "2026-07-16T09:00:00+02:00",
                            "dateModified": "2026-07-16T09:00:00+02:00",
                            "url": "https://www.empowers.nl/blogs/strategie/landingspagina-vs-homepage-verschil"
                        },
                        {
                            "@type": "BreadcrumbList",
                            "itemListElement": [
                                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.empowers.nl" },
                                { "@type": "ListItem", "position": 2, "name": "Nieuws", "item": "https://www.empowers.nl/nieuws" },
                                { "@type": "ListItem", "position": 3, "name": "Strategie", "item": "https://www.empowers.nl/blogs/strategie" },
                                { "@type": "ListItem", "position": 4, "name": "Landingspagina vs homepage: wanneer gebruik je welke?", "item": "https://www.empowers.nl/blogs/strategie/landingspagina-vs-homepage-verschil" }
                            ]
                        },
                        {
                            "@type": "FAQPage",
                            "mainEntity": [
                                { "@type": "Question", "name": "Wat is een landingspagina in het kort?", "acceptedAnswer": { "@type": "Answer", "text": "Een landingspagina is een losse pagina met één doel: de bezoeker één actie laten uitvoeren, zoals een aanvraag doen of een aankoop starten. De pagina heeft geen menu en geen zijpaden. Alles op de pagina, van kop tot knop, werkt toe naar die ene actie." } },
                                { "@type": "Question", "name": "Heeft een landingspagina een navigatiemenu nodig?", "acceptedAnswer": { "@type": "Answer", "text": "Nee. Elk menu-item is een uitgang waardoor bezoekers wegklikken voordat ze converteren. Op een goede landingspagina blijft alleen je logo staan, eventueel met een link naar je privacyverklaring in de footer. Twijfel je, test dan een variant zonder menu en vergelijk de conversie." } },
                                { "@type": "Question", "name": "Kan mijn homepage ook gewoon converteren?", "acceptedAnswer": { "@type": "Answer", "text": "Ja, maar op een andere manier. Een homepage converteert bezoekers die jou al kennen of eerst willen rondkijken. Voor koud advertentieverkeer werkt een aparte landingspagina beter, omdat die precies aansluit op de advertentie waarop iemand klikte." } },
                                { "@type": "Question", "name": "Is een landingspagina ook goed voor SEO?", "acceptedAnswer": { "@type": "Answer", "text": "Meestal niet als eerste doel. Landingspagina's voor advertenties zijn gebouwd op conversie en hebben vaak weinig tekst. Wil je organisch gevonden worden op een zoekterm, dan bouw je daar een aparte SEO-pagina voor met meer inhoud. Die twee kun je later naar elkaar laten verwijzen." } },
                                { "@type": "Question", "name": "Wat kost het om een landingspagina te laten maken?", "acceptedAnswer": { "@type": "Answer", "text": "Dat loopt uiteen van een paar honderd euro voor een pagina in een template tot enkele duizenden euro's voor maatwerk met copywriting en design. De investering verdient zich terug via een hogere conversie op je advertentiebudget. Vaak is de pagina goedkoper dan een maand aan verspilde kliks." } },
                                { "@type": "Question", "name": "Hoe weet ik of een landingspagina beter werkt dan mijn homepage?", "acceptedAnswer": { "@type": "Answer", "text": "Door het te meten. Stuur een deel van je campagneverkeer naar de landingspagina en vergelijk de conversie per bestemming in je advertentieplatform of analytics. Zie je meer aanvragen of verkopen per honderd bezoekers op de landingspagina, dan heb je je antwoord." } }
                            ]
                        }
                    ]
                })}</script>
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
                        <Link to="/blogs/strategie" className="hover:text-accent transition-colors">Strategie</Link>
                        <ChevronRight className="w-3 h-3" />
                        <span className="text-primary truncate">Landingspagina vs homepage</span>
                    </nav>

                    {/* Header */}
                    <header className="mb-16">
                        <div className="inline-block px-3 py-1 bg-accent/10 text-accent font-mono text-xs uppercase tracking-widest rounded-full mb-6">
                            Strategie
                        </div>
                        <h1 className="font-sans font-bold text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight mb-8">
                            Landingspagina vs homepage: wanneer gebruik je welke?
                        </h1>

                        <div className="flex flex-wrap items-center gap-6 text-sm font-sans text-primary/60 border-y border-primary/10 py-6">
                            <div className="flex items-center gap-2">
                                <User className="w-4 h-4" />
                                <span>Empowers Redactie</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>16 juli 2026</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>6 minuten leestijd</span>
                            </div>
                        </div>
                    </header>

                    {/* Featured Image */}
                    <figure className="w-full h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden mb-16 relative bg-primary">
                        <div className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-overlay" style={{backgroundImage: "url('/images/blogs/landingspagina-vs-homepage-verschil.jpg')"}}></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </figure>

                    {/* Content */}
                    <div className="prose prose-lg prose-headings:font-sans prose-headings:font-bold prose-headings:text-primary prose-p:font-sans prose-p:text-primary/80 prose-p:leading-relaxed max-w-none">
                        <p className="text-xl md:text-2xl font-medium leading-relaxed mb-10 text-primary">
                            Een homepage is de voordeur van je bedrijf: bezoekers kunnen er alle kanten op. Een landingspagina is een verkoopgesprek over één aanbod, met één knop. Advertentieverkeer stuur je daarom naar een landingspagina. Je homepage bewaar je voor mensen die jou al kennen of gericht op je bedrijfsnaam zoeken.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat is het verschil tussen een landingspagina en een homepage?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Je homepage is een overzichtspagina. Er staat wie je bent en wat je allemaal aanbiedt, en vanuit het menu kan de bezoeker elke kant op. Dat is precies de bedoeling: de homepage helpt mensen zich te oriënteren.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een landingspagina doet het omgekeerde. De pagina gaat over één aanbod voor één doelgroep en biedt maar één vervolgstap. Geen menu, geen zijpaden. De bezoeker kiest tussen de knop of de terugknop.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een voorbeeld maakt het tastbaar. Een installatiebedrijf verkoopt zonnepanelen en warmtepompen. De homepage toont beide en vertelt wie het bedrijf is. De landingspagina voor de zonnepanelencampagne gaat alleen over zonnepanelen: de belofte, het bewijs en het aanvraagformulier. Wie daar landt, hoeft nergens meer over na te denken.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Het verschil zit dus niet in het ontwerp, maar in het doel. Oriënteren tegenover overtuigen. Haal je die twee rollen door elkaar, dan wringt het: een homepage die te hard verkoopt schrikt af, en een landingspagina met tien uitgangen converteert niet.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wanneer stuur je bezoekers naar je homepage?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Als mensen jou al kennen of naar je op zoek zijn. Wie je bedrijfsnaam intypt in Google, wil bij jou uitkomen en zelf bepalen waar hij kijkt. Hetzelfde geldt voor de link in je e-mailhandtekening of je social media bio.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Ook oriënterende bezoekers horen op je homepage. Iemand die nog niet weet wat hij nodig heeft, wil eerst rondkijken. Dwing je die persoon meteen een verkoopgesprek in, dan haakt hij af.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Je homepage moet die rol dan wel waarmaken. Binnen een paar seconden moet duidelijk zijn wat je doet en waar de bezoeker moet klikken voor zijn vraag. Een homepage die alles tegelijk roept, helpt niemand op weg.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wanneer heb je een landingspagina nodig?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Zodra je betaalt voor bezoekers met een concrete verwachting. Iemand die klikt op een advertentie voor "boekhouder voor webshops" wil daarover lezen, niet over je hele dienstenpakket. Een landingspagina pakt die verwachting op en maakt hem af.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Dat geldt voor zoekadvertenties, maar net zo goed voor campagnes op social media. Ook een tijdelijke actie, een weggever, een webinar of een event verdient een eigen pagina. De vuistregel: één campagnebelofte, één pagina.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Hoe zo'n pagina er van kop tot knop uitziet, lees je in ons artikel over <Link to="/blogs/strategie/landingspagina-structuur-converteren-elementen" className="text-accent hover:underline">de opbouw van een landingspagina die converteert</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Waarom presteren advertenties op een homepage vaak slecht?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Het grootste probleem is de mismatch tussen advertentie en pagina. De advertentie belooft iets specifieks, de homepage begint over je bedrijf in het algemeen. De bezoeker moet zelf op zoek naar het aanbod waarvoor hij klikte. Een deel doet die moeite niet en is weg.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Daar komt keuzestress bij. Een menu met acht opties nodigt uit tot klikken, en elke klik leidt weg van de actie waarvoor je betaalde. Zo lekt je advertentiebudget weg naar pagina's die nooit voor conversie zijn gebouwd.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Wanneer wij campagnes overnemen die op een homepage landen, is een aparte landingspagina bijna altijd de eerste aanpassing die we voorstellen. Dat levert vaak meer op dan sleutelen aan de campagne zelf. De <Link to="/blogs/strategie/headline-landingspagina-schrijven-overtuigend" className="text-accent hover:underline">headline van die pagina</Link> herhaalt de belofte uit de advertentie, en dat voelt de bezoeker meteen.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Kun je je homepage als landingspagina gebruiken?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Soms wel. Heb je één dienst en één doelgroep, dan lijkt je homepage vanzelf al op een landingspagina. Een fotograaf die alleen bedrijfsreportages maakt, hoeft geen aparte pagina te bouwen voor een campagne met precies dat aanbod.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Voor merkcampagnes werkt de homepage ook prima. Wie adverteert op zijn eigen bedrijfsnaam, mag bezoekers gerust door de voordeur laten binnenkomen. De verwachting is daar breed, dus de pagina mag dat ook zijn.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            In alle andere gevallen is een aparte pagina de betere keuze. Niet omdat het moet, maar omdat het rekent. Meer conversies uit hetzelfde budget betekent een lagere kostprijs per klant.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoeveel landingspagina's heb je nodig?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Eén per aanbod en per doelgroep is het uitgangspunt. Verkoop je drie diensten aan twee doelgroepen, dan kom je uit op zes pagina's als elke combinatie een eigen campagne heeft. In de praktijk begin je kleiner: bouw eerst een pagina voor de campagne waar het meeste budget naartoe gaat.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Daarna verbeter je stap voor stap. Vergelijk varianten van je pagina en houd de winnaar. Hoe je dat betrouwbaar aanpakt lees je in ons artikel over <Link to="/blogs/strategie/ab-testen-landingspagina-stap-voor-stap" className="text-accent hover:underline">A/B-testen van landingspagina's</Link>.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            En laat de pagina samenwerken met je campagnes. Een sterke pagina met zwakke advertenties blijft leeg, andersom verbrandt budget. Hoe wij dat aanpakken zie je op onze pagina over <Link to="/google-ads" className="text-accent hover:underline">Google Ads beheer</Link>.
                        </p>

                        <p className="text-primary/80 leading-relaxed mb-6">
                            Kort samengevat: je homepage ontvangt wie jou al zoekt, je landingspagina overtuigt wie je nog moet winnen. Twijfel je waar jouw campagneverkeer zou moeten landen? We kijken graag even mee. Plan een gratis gesprek via <Link to="/contact" className="text-accent hover:underline">empowers.nl/contact</Link>.
                        </p>

                        <hr className="my-16 border-primary/10" />

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Veelgestelde vragen over landingspagina vs homepage</h2>

                        <div className="space-y-6 not-prose">
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat is een landingspagina in het kort?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Een landingspagina is een losse pagina met één doel: de bezoeker één actie laten uitvoeren, zoals een aanvraag doen of een aankoop starten. De pagina heeft geen menu en geen zijpaden. Alles op de pagina, van kop tot knop, werkt toe naar die ene actie.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Heeft een landingspagina een navigatiemenu nodig?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Nee. Elk menu-item is een uitgang waardoor bezoekers wegklikken voordat ze converteren. Op een goede landingspagina blijft alleen je logo staan, eventueel met een link naar je privacyverklaring in de footer. Twijfel je, test dan een variant zonder menu en vergelijk de conversie.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Kan mijn homepage ook gewoon converteren?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Ja, maar op een andere manier. Een homepage converteert bezoekers die jou al kennen of eerst willen rondkijken. Voor koud advertentieverkeer werkt een aparte landingspagina beter, omdat die precies aansluit op de advertentie waarop iemand klikte.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Is een landingspagina ook goed voor SEO?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Meestal niet als eerste doel. Landingspagina's voor advertenties zijn gebouwd op conversie en hebben vaak weinig tekst. Wil je organisch gevonden worden op een zoekterm, dan bouw je daar een aparte SEO-pagina voor met meer inhoud. Die twee kun je later naar elkaar laten verwijzen.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat kost het om een landingspagina te laten maken?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Dat loopt uiteen van een paar honderd euro voor een pagina in een template tot enkele duizenden euro's voor maatwerk met copywriting en design. De investering verdient zich terug via een hogere conversie op je advertentiebudget. Vaak is de pagina goedkoper dan een maand aan verspilde kliks.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoe weet ik of een landingspagina beter werkt dan mijn homepage?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Door het te meten. Stuur een deel van je campagneverkeer naar de landingspagina en vergelijk de conversie per bestemming in je advertentieplatform of analytics. Zie je meer aanvragen of verkopen per honderd bezoekers op de landingspagina, dan heb je je antwoord.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </article>

            {/* Bottom CTA */}
            <section className="w-full pb-32 px-6">
                <div className="max-w-4xl mx-auto bg-primary rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
                    <h2 className="relative z-10 font-drama italic text-background text-3xl sm:text-4xl md:text-5xl mb-6">Advertenties die landen waar ze horen?</h2>
                    <p className="relative z-10 font-sans text-background/70 text-lg mb-10 max-w-xl mx-auto">
                        Wij bouwen landingspagina's en campagnes die samen één verhaal vertellen, van klik tot klant.
                    </p>
                    <Link to="/contact" className="relative z-10 btn-magnetic inline-flex items-center justify-center bg-accent text-background font-sans font-bold text-lg px-10 py-4 rounded-[2rem] hover:bg-accent/90 transition-colors">
                        Samenwerken met Empowers
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
