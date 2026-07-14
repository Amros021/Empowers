import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ChevronRight, User } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function BlogPostGoogleAdsQualityScoreVerhogen() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen selection:bg-accent/30 selection:text-dark flex flex-col bg-background">
            <Helmet>
                <title>Google Ads Quality Score verhogen: 7 concrete tips | Empowers</title>
                <meta name="description" content="Een hogere Quality Score verlaagt je klikprijs en geeft je betere posities. Lees 7 concrete tips om je Google Ads Quality Score snel te verbeteren." />
                <link rel="canonical" href="https://www.empowers.nl/blogs/google-ads/google-ads-quality-score-verhogen" />
                <meta property="og:title" content="Google Ads Quality Score verhogen: 7 concrete tips" />
                <meta property="og:description" content="Een hogere Quality Score verlaagt je klikprijs en geeft betere posities. Lees 7 concrete tips om hem snel te verbeteren." />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://www.empowers.nl/blogs/google-ads/google-ads-quality-score-verhogen" />
                <meta property="og:image" content="https://www.empowers.nl/images/blogs/google-ads-quality-score-verhogen.jpg" />
                <meta property="article:published_time" content="2026-04-08T00:00:00+02:00" />
                <meta property="article:author" content="Empowers" />
                <meta property="article:section" content="Google Ads" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Google Ads Quality Score verhogen: 7 concrete tips" />
                <meta name="twitter:description" content="7 concrete tips om je Google Ads Quality Score te verbeteren en je klikprijs te verlagen." />

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Article",
                        "headline": "Google Ads Quality Score verhogen: 7 concrete tips",
                        "description": "Een hogere Quality Score verlaagt je klikprijs en geeft je betere posities. Lees 7 concrete tips om je Google Ads Quality Score snel te verbeteren.",
                        "image": "https://www.empowers.nl/images/blogs/google-ads-quality-score-verhogen.jpg",
                        "datePublished": "2026-04-08T00:00:00+02:00",
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
                                    "name": "Wat is Quality Score in Google Ads?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Quality Score is een cijfer van 1 tot 10 dat Google geeft aan elk zoekwoord in je campagne. Het cijfer drukt uit hoe relevant je zoekwoord, advertentie en landingspagina zijn voor de zoekopdracht. Hoe hoger de score, hoe lager je klikprijs en hoe beter je positie."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Waarom is een hoge Quality Score zo belangrijk?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Google rekent je meer voor een klik als je Quality Score laag is. In de praktijk kan het verschil tussen een score van 4 en een 8 betekenen dat je 30 tot 50% minder per klik betaalt voor dezelfde advertentiepositie. Op jaarbasis is dat duizenden euro's besparing."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Uit welke drie onderdelen bestaat de Quality Score?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "De Quality Score bestaat uit verwachte doorklikratio (CTR), advertentierelevantie en landingspaginakwaliteit. Google beoordeelt elk onderdeel op bovengemiddeld, gemiddeld of ondergemiddeld. Alle drie tellen mee voor de uiteindelijke score."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Hoe snel zie je het effect van een betere Quality Score?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Zoekwoordaanpassingen en nieuwe advertentieteksten geven binnen een tot twee weken effect. Verbeteringen aan je landingspagina hebben iets meer tijd nodig omdat Google genoeg verkeersdata moet verzamelen, reken op drie tot vier weken."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Wat is een goede Quality Score?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Alles boven de 7 is goed. Een 8 of 9 is uitstekend en op een 10 moet je moeite doen. Zoekwoorden met een score van 5 of lager zijn een rode vlag: daar betaal je te veel of krijg je te weinig vertoningen."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Beinvloedt landingspaginasnelheid de Quality Score?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Ja. Google meet de laadtijd en gebruikerservaring van je landingspagina. Een trage pagina zonder mobiele optimalisatie krijgt een lagere beoordeling op landingspaginakwaliteit, wat direct je Quality Score drukt."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Telt Quality Score ook mee bij Performance Max?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "In Performance Max zie je geen zichtbare Quality Score, maar Google gebruikt dezelfde relevantie- en kwaliteitssignalen achter de schermen. Sterke assets, relevante doelgroepen en snelle landingspagina's werken dus ook daar in je voordeel."
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
                                "name": "Google Ads Quality Score verhogen",
                                "item": "https://www.empowers.nl/blogs/google-ads/google-ads-quality-score-verhogen"
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
                        <span className="text-primary truncate">Quality Score verhogen</span>
                    </nav>

                    {/* Header */}
                    <header className="mb-16">
                        <div className="inline-block px-3 py-1 bg-accent/10 text-accent font-mono text-xs uppercase tracking-widest rounded-full mb-6">
                            Google Ads
                        </div>
                        <h1 className="font-sans font-bold text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight mb-8">
                            Google Ads Quality Score verhogen: 7 concrete tips
                        </h1>

                        <div className="flex flex-wrap items-center gap-6 text-sm font-sans text-primary/60 border-y border-primary/10 py-6">
                            <div className="flex items-center gap-2">
                                <User className="w-4 h-4" />
                                <span>Empowers Redactie</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>8 april 2026</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>7 minuten leestijd</span>
                            </div>
                        </div>
                    </header>

                    {/* Featured Image */}
                    <figure className="w-full h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden mb-16 relative bg-primary">
                        <div className="absolute inset-0 bg-[url('/images/blogs/google-ads-quality-score-verhogen.jpg')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </figure>

                    {/* Content */}
                    <div className="prose prose-lg max-w-none prose-headings:text-primary prose-headings:font-bold prose-a:text-accent prose-a:underline hover:prose-a:text-accent/80">
                        <p className="text-xl leading-relaxed text-primary/80 font-medium mb-6">
                            Je Google Ads Quality Score is een van de krachtigste knoppen waar je aan kunt draaien. Een hoger cijfer betekent minder betalen per klik en een betere advertentiepositie, zonder dat je je bod hoeft te verhogen. In dit artikel lees je wat Quality Score precies is, waarom hij zo belangrijk is en hoe je hem met zeven concrete ingrepen kunt verbeteren.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat is Quality Score precies?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Quality Score is een cijfer van 1 tot 10 dat Google toekent aan elk zoekwoord in je campagnes. Het cijfer is een inschatting van hoe relevant en bruikbaar jouw combinatie van zoekwoord, advertentie en landingspagina is voor iemand die zoekt. Hoe hoger de score, hoe goedkoper je klikken en hoe vaker je advertentie bovenaan verschijnt.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De score bestaat uit drie onderdelen: verwachte doorklikratio (CTR), advertentierelevantie en landingspaginakwaliteit. Google beoordeelt elk onderdeel als bovengemiddeld, gemiddeld of ondergemiddeld. Je ziet deze beoordelingen in Google Ads bij elk zoekwoord als je de kolommen Kwaliteitsscore inschakelt.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Waarom maakt Quality Score zoveel uit?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Google combineert je bod met je Quality Score tot een advertentierangschikking. Dat betekent dat een adverteerder met een lager bod maar een hogere score regelmatig een betere positie krijgt dan iemand die hoger biedt. En jij betaalt minder voor dezelfde klik.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een concreet voorbeeld: bij een klant in de installatiebranche hadden we een campagne met een gemiddelde Quality Score van 4. De kostprijs per klik lag rond de 3,20 euro. Na zes weken optimaliseren zat de gemiddelde score op 8 en zakte de CPC naar 1,40 euro. Hetzelfde aantal conversies, minder dan de helft van de kosten.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Tip 1: Groepeer zoekwoorden strak per thema</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De grootste oorzaak van een lage score is een rommelige advertentiegroep. Als je tien totaal verschillende zoekwoorden onder dezelfde advertentietekst hangt, kan Google onmogelijk vaststellen dat je advertentie relevant is voor ieder van die woorden. Het resultaat: een ondergemiddelde beoordeling op advertentierelevantie.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Maak kleine advertentiegroepen van vijf tot vijftien nauw verwante zoekwoorden. Schrijf voor elke groep een unieke advertentietekst waarin het belangrijkste zoekwoord letterlijk terugkomt. Deze aanpak heet ook wel SKAG of thematische groepering en is nog altijd het snelste recept voor een hogere score.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Tip 2: Schrijf advertenties die de zoekvraag spiegelen</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Je advertentierelevantie wordt hoger als de woorden uit de zoekopdracht ook terugkomen in je koppen en beschrijvingen. Zoekt iemand op "airco installateur Utrecht", dan moet die exacte combinatie terugkomen in kop 1 of kop 2 van je advertentie. Dat is geen SEO-trucje, het is hoe Google meet of je antwoord past bij de vraag.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Gebruik Responsive Search Ads met minstens tien koppen en drie beschrijvingen. Maak daarbij gebruik van dynamische invoeging zodat je exacte zoekwoord automatisch in de kop wordt geplaatst. Lees ook <Link to="/blogs/google-ads/ai-google-ads-advertentietekst-verbeteren" className="text-accent hover:underline">hoe AI je advertentieteksten sterker maakt</Link> voor meer variatie in je koppen.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Tip 3: Verbeter je verwachte CTR met sterkere koppen</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De verwachte doorklikratio is de beste voorspeller van je Quality Score. Google kijkt historisch naar hoe vaak mensen klikken op jouw advertentie vergeleken met concurrenten op dezelfde positie. Lage CTR? Lage score. Hoge CTR? Bonus.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Schrijf koppen die een concreet voordeel of getal bevatten. "Airco installatie binnen 48 uur" presteert doorgaans veel beter dan "Airco installatie op maat". Gebruik vraagvormen, prijzen of garanties om op te vallen tussen de grijze massa. Test regelmatig nieuwe koppen en pauzeer de slechtst presterende.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Tip 4: Zorg voor een bloedsnelle landingspagina</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Landingspaginakwaliteit is het onderdeel waar veel adverteerders laten liggen. Google meet hoe snel je pagina laadt, hoe bruikbaar hij is op mobiel en hoe goed hij inhoudelijk matcht met het zoekwoord. Een landingspagina die op mobiel vier seconden nodig heeft om te laden, krijgt gegarandeerd een ondergemiddelde beoordeling.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Check je pagina in PageSpeed Insights. Mik op een Core Web Vitals-score van goed op mobiel. Comprimeer afbeeldingen, laad scripts uitgesteld en gebruik een snelle hosting. De winst in Quality Score zie je meestal binnen twee tot drie weken terug. Hoe je een goede landingspagina bouwt, lees je in onze gids <Link to="/blogs/strategie/landingspagina-schrijven-converteert" className="text-accent hover:underline">landingspagina schrijven die converteert</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Tip 5: Match je landingspagina op het zoekwoord</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Als je adverteert op "boekhouder zzp Rotterdam" maar de bezoeker landt op een algemene homepage, verlies je de Quality Score strijd. Google leest je landingspagina en zoekt daarin dezelfde woorden terug. Ontbreken die woorden? Dan zakt je score op landingspaginakwaliteit.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Maak per zoekwoordgroep een aparte landingspagina waarop de zoekterm duidelijk in de titel, de eerste paragraaf en in de ondertitels staat. Dat betekent meer werk, maar het rendement is enorm. We zien scores die van 5 naar 9 springen alleen door deze match te verbeteren.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Tip 6: Voeg negatieve zoekwoorden toe</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Irrelevante vertoningen trekken je verwachte CTR omlaag. Elke keer dat je advertentie verschijnt bij een niet-passende zoekopdracht en niemand klikt, zakt je score. Door negatieve zoekwoorden toe te voegen, voorkom je dat je in beeld komt bij vragen waar je toch geen klik uit wilt halen.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Loop elke week het zoekterm-rapport door. Voeg woorden als "gratis", "vacature", "cursus" of "diy" toe als ze niet bij je aanbod passen. Deze schoonmaakactie kost een half uur per week en geeft je Quality Score ruimte om te groeien. Lees meer over <Link to="/blogs/google-ads/long-tail-keywords-google-ads" className="text-accent hover:underline">het vinden van waardevolle long-tail keywords</Link> waarmee je structureel nauwkeuriger adverteert.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Tip 7: Gebruik advertentie-extensies volledig</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Extensies zoals sitelinks, callouts, gestructureerde fragmenten en beloftes maken je advertentie groter en relevanter. Google ziet extensies als een positief signaal en beloont ze met een hogere verwachte CTR. Bovendien neemt je advertentie meer ruimte in, waardoor concurrenten letterlijk uit beeld zakken.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Vul minimaal vier sitelinks, vier callouts en een afbeelding-extensie in per campagne. Voeg telefoonnummer, locatie en prijzen toe waar relevant. Deze kleine toevoegingen kosten een paar minuten en kunnen je Quality Score met 1 tot 2 punten verhogen.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe monitor je je Quality Score op lange termijn?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een eenmalige verbetering werkt niet. Quality Score verandert mee met je concurrentie, je CTR en de markt. Zet daarom de kolommen Kwaliteitsscore, Verwachte CTR, Advertentierelevantie en Landingspagina-ervaring standaard aan in Google Ads. Controleer ze minimaal eens per twee weken.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Zoekwoorden die langdurig onder de 6 blijven, verdienen actie of moeten eruit. Investeer je tijd liever in woorden waar je een 7 of hoger op kunt halen. Zo houd je je campagne schoon en blijven je klikprijzen structureel laag.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Klaar om meer rendement te halen?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een hogere Quality Score is geen geluk, het is een optelsom van kleine, bewuste keuzes. Strakke advertentiegroepen, relevante teksten, snelle landingspagina's en een wekelijks onderhoud. Doe je dit consistent, dan zakken je kosten en stijgen je posities vanzelf.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Wil je weten waar de grootste winst zit in jouw campagne? We doen een gratis doorlichting van je Google Ads account en laten precies zien welke zoekwoorden je Quality Score omlaag trekken. Plan een gesprek via onze <Link to="/contact" className="text-accent hover:underline">contactpagina</Link>.
                        </p>
                    </div>

                    {/* FAQ Section */}
                    <section className="mt-16 pt-12 border-t border-primary/10">
                        <h2 className="text-3xl font-bold text-primary mb-8">Veelgestelde vragen</h2>
                        <div className="space-y-6 not-prose">
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat is Quality Score in Google Ads?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Quality Score is een cijfer van 1 tot 10 dat Google geeft aan elk zoekwoord in je campagne. Het cijfer drukt uit hoe relevant je zoekwoord, advertentie en landingspagina zijn voor de zoekopdracht. Hoe hoger de score, hoe lager je klikprijs en hoe beter je positie.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Waarom is een hoge Quality Score zo belangrijk?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Google rekent je meer voor een klik als je Quality Score laag is. In de praktijk kan het verschil tussen een score van 4 en een 8 betekenen dat je 30 tot 50% minder per klik betaalt voor dezelfde advertentiepositie. Op jaarbasis is dat duizenden euro's besparing.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Uit welke drie onderdelen bestaat de Quality Score?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    De Quality Score bestaat uit verwachte doorklikratio (CTR), advertentierelevantie en landingspaginakwaliteit. Google beoordeelt elk onderdeel op bovengemiddeld, gemiddeld of ondergemiddeld. Alle drie tellen mee voor de uiteindelijke score.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoe snel zie je het effect van een betere Quality Score?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Zoekwoordaanpassingen en nieuwe advertentieteksten geven binnen een tot twee weken effect. Verbeteringen aan je landingspagina hebben iets meer tijd nodig omdat Google genoeg verkeersdata moet verzamelen, reken op drie tot vier weken.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat is een goede Quality Score?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Alles boven de 7 is goed. Een 8 of 9 is uitstekend en op een 10 moet je moeite doen. Zoekwoorden met een score van 5 of lager zijn een rode vlag: daar betaal je te veel of krijg je te weinig vertoningen.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Beinvloedt landingspaginasnelheid de Quality Score?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Ja. Google meet de laadtijd en gebruikerservaring van je landingspagina. Een trage pagina zonder mobiele optimalisatie krijgt een lagere beoordeling op landingspaginakwaliteit, wat direct je Quality Score drukt.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Telt Quality Score ook mee bij Performance Max?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    In Performance Max zie je geen zichtbare Quality Score, maar Google gebruikt dezelfde relevantie- en kwaliteitssignalen achter de schermen. Sterke assets, relevante doelgroepen en snelle landingspagina's werken dus ook daar in je voordeel.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Related Links */}
                    <section className="mt-16 pt-12 border-t border-primary/10">
                        <h3 className="text-xl font-bold text-primary mb-6">Lees ook</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <Link to="/blogs/google-ads/long-tail-keywords-google-ads" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Long-tail keywords</h3>
                                <p className="text-primary/60 text-sm">Waarom ze zo waardevol zijn in Google Ads.</p>
                            </Link>
                            <Link to="/blogs/google-ads/smart-bidding-uitgelegd-wanneer-wanneer" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Smart Bidding uitgelegd</h3>
                                <p className="text-primary/60 text-sm">Wanneer gebruik je het en wanneer niet?</p>
                            </Link>
                            <Link to="/blogs/google-ads/ai-google-ads-advertentietekst-verbeteren" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">AI in Google Ads teksten</h3>
                                <p className="text-primary/60 text-sm">Hoe AI je advertenties sterker maakt.</p>
                            </Link>
                        </div>
                    </section>
                </div>
            </article>

            {/* Bottom CTA */}
            <section className="w-full pb-32 px-6">
                <div className="max-w-4xl mx-auto bg-primary rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
                    <h2 className="relative z-10 font-drama italic text-background text-3xl sm:text-4xl md:text-5xl mb-6">Meer halen uit Google Ads?</h2>
                    <p className="relative z-10 font-sans text-background/70 text-lg mb-10 max-w-xl mx-auto">We kijken naar je Quality Score en laten zien waar de grootste winst ligt. Geen verplichtingen.</p>
                    <Link to="/contact" className="relative z-10 btn-magnetic inline-flex items-center justify-center bg-accent text-background font-sans font-bold text-lg px-10 py-4 rounded-[2rem] hover:bg-accent/90 transition-colors">Neem contact op</Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
