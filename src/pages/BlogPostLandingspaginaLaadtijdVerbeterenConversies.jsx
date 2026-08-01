import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ChevronRight, User } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function BlogPostLandingspaginaLaadtijdVerbeterenConversies() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen selection:bg-accent/30 selection:text-dark flex flex-col bg-background">
            <Helmet>
                <title>Landingspagina laadtijd verbeteren: impact op conversies | Empowers</title>
                <meta name="description" content="Elke seconde extra laadtijd kost je conversies. Lees hoe je de laadtijd van je landingspagina meet en verbetert, en wat een snellere pagina oplevert." />
                <link rel="canonical" href="https://www.empowers.nl/blogs/strategie/landingspagina-laadtijd-verbeteren-conversies" />
                <meta property="og:title" content="Landingspagina laadtijd verbeteren: impact op conversies | Empowers" />
                <meta property="og:description" content="Elke seconde extra laadtijd kost je conversies. Lees hoe je de laadtijd van je landingspagina meet en verbetert, en wat een snellere pagina oplevert." />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://www.empowers.nl/blogs/strategie/landingspagina-laadtijd-verbeteren-conversies" />
                <meta property="og:image" content="https://www.empowers.nl/images/blogs/landingspagina-laadtijd-verbeteren-conversies.jpg" />
                <meta property="article:published_time" content="2026-07-14T11:00:00+02:00" />
                <meta property="article:author" content="Empowers" />
                <meta property="article:section" content="Strategie" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Landingspagina laadtijd verbeteren: impact op conversies | Empowers" />
                <meta name="twitter:description" content="Elke seconde extra laadtijd kost je conversies. Lees hoe je de laadtijd van je landingspagina meet en verbetert, en wat een snellere pagina oplevert." />
                <script type="application/ld+json">{JSON.stringify({
                    "@context": "https://schema.org",
                    "@graph": [
                        {
                            "@type": "Article",
                            "headline": "Landingspagina laadtijd verbeteren: directe impact op conversies",
                            "image": "https://www.empowers.nl/images/blogs/landingspagina-laadtijd-verbeteren-conversies.jpg",
                            "description": "Elke seconde extra laadtijd kost je conversies. Lees hoe je de laadtijd van je landingspagina meet en verbetert, en wat een snellere pagina oplevert.",
                            "author": { "@type": "Organization", "name": "Empowers" },
                            "publisher": { "@type": "Organization", "name": "Empowers", "url": "https://www.empowers.nl" },
                            "datePublished": "2026-07-14T11:00:00+02:00",
                            "dateModified": "2026-07-14T11:00:00+02:00",
                            "url": "https://www.empowers.nl/blogs/strategie/landingspagina-laadtijd-verbeteren-conversies"
                        },
                        {
                            "@type": "BreadcrumbList",
                            "itemListElement": [
                                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.empowers.nl" },
                                { "@type": "ListItem", "position": 2, "name": "Nieuws", "item": "https://www.empowers.nl/nieuws" },
                                { "@type": "ListItem", "position": 3, "name": "Strategie", "item": "https://www.empowers.nl/blogs/strategie" },
                                { "@type": "ListItem", "position": 4, "name": "Landingspagina laadtijd verbeteren: directe impact op conversies", "item": "https://www.empowers.nl/blogs/strategie/landingspagina-laadtijd-verbeteren-conversies" }
                            ]
                        },
                        {
                            "@type": "FAQPage",
                            "mainEntity": [
                                { "@type": "Question", "name": "Wat is een goede laadtijd voor een landingspagina?", "acceptedAnswer": { "@type": "Answer", "text": "Streef ernaar dat het grootste zichtbare element binnen 2,5 seconden op het scherm staat. Dat is de grens die Google hanteert voor de Largest Contentful Paint, een van de Core Web Vitals. Voelt de pagina traag op je eigen telefoon via mobiel internet, dan is hij te traag." } },
                                { "@type": "Question", "name": "Heeft laadtijd invloed op mijn advertentiekosten?", "acceptedAnswer": { "@type": "Answer", "text": "Ja, indirect maar merkbaar. Google Ads weegt de ervaring op je landingspagina mee in de kwaliteitsscore, en die score beïnvloedt wat je per klik betaalt. Een trage pagina zorgt bovendien voor meer afhakers na de klik: je betaalt dan wel voor bezoekers, maar ze zien je aanbod nooit." } },
                                { "@type": "Question", "name": "Wat vertraagt een landingspagina het meest?", "acceptedAnswer": { "@type": "Answer", "text": "In de praktijk zijn afbeeldingen de grootste boosdoener: te groot aangeleverd en niet gecomprimeerd. Daarna volgen externe scripts zoals chatwidgets, trackingpixels en video-embeds. En onderaan de lijst staat trage hosting. Begin dus bij je afbeeldingen, daar zit meestal de snelste winst." } },
                                { "@type": "Question", "name": "Hoe meet ik de laadtijd van mijn landingspagina?", "acceptedAnswer": { "@type": "Answer", "text": "Gebruik PageSpeed Insights van Google: gratis, en je krijgt naast een score ook concrete verbeterpunten. Test daarnaast zelf op een telefoon via mobiel internet in plaats van wifi, want zo ervaart een groot deel van je bezoekers de pagina. Meet meerdere keren op verschillende momenten." } },
                                { "@type": "Question", "name": "Hoeveel conversie levert een snellere landingspagina op?", "acceptedAnswer": { "@type": "Answer", "text": "Een vast percentage bestaat niet, maar de richting is duidelijk: onderzoek van Google toont dat de kans op afhaken fors toeneemt naarmate een mobiele pagina langer laadt. Hoe trager je startpunt, hoe groter de winst. Van vijf naar twee seconden merk je in je cijfers, van twee naar anderhalf nauwelijks." } },
                                { "@type": "Question", "name": "Is een perfecte PageSpeed-score van 100 nodig?", "acceptedAnswer": { "@type": "Answer", "text": "Nee. De score is een hulpmiddel, geen doel. Boven de 90 op mobiel zit je ruim goed en levert verder jagen op punten zelden nog meetbare conversiewinst op. Kijk liever naar de ervaring: laadt het eerste scherm direct en kun je meteen scrollen en klikken, dan is je pagina snel genoeg." } }
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
                        <span className="text-primary truncate">Landingspagina laadtijd</span>
                    </nav>

                    {/* Header */}
                    <header className="mb-16">
                        <div className="inline-block px-3 py-1 bg-accent/10 text-accent font-mono text-xs uppercase tracking-widest rounded-full mb-6">
                            Strategie
                        </div>
                        <h1 className="font-sans font-bold text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight mb-8">
                            Landingspagina laadtijd verbeteren: directe impact op conversies
                        </h1>

                        <div className="flex flex-wrap items-center gap-6 text-sm font-sans text-primary/60 border-y border-primary/10 py-6">
                            <div className="flex items-center gap-2">
                                <User className="w-4 h-4" />
                                <span>Empowers Redactie</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>14 juli 2026</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>7 minuten leestijd</span>
                            </div>
                        </div>
                    </header>

                    {/* Featured Image */}
                    <figure className="w-full h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden mb-16 relative bg-primary">
                        <div className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-overlay" style={{backgroundImage: "url('/images/blogs/landingspagina-laadtijd-verbeteren-conversies.jpg')"}}></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </figure>

                    {/* Content */}
                    <div className="prose prose-lg prose-headings:font-sans prose-headings:font-bold prose-headings:text-primary prose-p:font-sans prose-p:text-primary/80 prose-p:leading-relaxed max-w-none">
                        <p className="text-xl md:text-2xl font-medium leading-relaxed mb-10 text-primary">
                            Een trage landingspagina kost je conversies nog voordat een bezoeker één woord heeft gelezen. Uit onderzoek van Google blijkt dat de kans op afhaken fors stijgt zodra een mobiele pagina langer dan een paar seconden laadt. Het goede nieuws: laadtijd is een van de weinige conversiefactoren die je grotendeels zelf in de hand hebt.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat doet laadtijd met je conversieratio?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Elke seconde wachten filtert bezoekers weg. Wie via een advertentie klikt, heeft zijn aandacht al half bij het volgende. Een witte pagina van vier seconden is voor die bezoeker geen wachttijd, het is een uitnodiging om terug te klikken.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Het pijnlijke is dat deze afhakers onzichtbaar zijn in je statistieken. Ze verschijnen niet eens als bounce, want de pagina laadde nooit volledig. Je advertentieplatform rekent de klik gewoon af, jij ziet alleen dat er minder conversies binnenkomen dan de klikken beloven.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Snelheid werkt daarnaast door in vertrouwen. Een pagina die direct reageert voelt professioneel, een pagina die hapert roept twijfel op over het bedrijf erachter. Die indruk ontstaat in de eerste seconde en kleurt alles wat de bezoeker daarna leest.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Bij advertentieverkeer telt het dubbel. Google Ads neemt de ervaring op je landingspagina mee in de kwaliteitsscore, en die score werkt door in je klikprijzen. Een trage pagina betaalt dus twee keer: minder conversies én duurdere klikken.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe meet je de laadtijd van je landingspagina?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Begin bij PageSpeed Insights, de gratis tool van Google. Je vult je URL in en krijgt een score voor mobiel en desktop, plus een lijst met wat er precies traag is. Hoe je die uitslag leest en vertaalt naar acties lees je in ons artikel over <Link to="/blogs/seo/pagespeed-insights-gebruik" className="text-accent hover:underline">PageSpeed Insights gebruiken</Link>.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Let vooral op de Largest Contentful Paint: het moment waarop het grootste zichtbare element op het scherm staat. Google hanteert 2,5 seconden als grens voor een goede ervaring. Daarboven begint het verlies.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            En doe de praktijktest: pak je telefoon, zet wifi uit en open je eigen landingspagina via mobiel internet. Dat is de ervaring van een groot deel van je betaalde bezoekers. Voelt het traag, dan is het traag, wat de tool ook zegt.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Meet ook opnieuw na elke grote wijziging. Een nieuwe sectie, een extra script of een vervangen afbeelding kan een snelle pagina ongemerkt traag maken. Snelheid is geen eenmalig project maar een grens die je bewaakt. Eén meting per maand is genoeg om verrassingen voor te blijven.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat vertraagt landingspagina's het meest?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Afbeeldingen staan met afstand bovenaan. Een herofoto die rechtstreeks uit de camera komt weegt al snel enkele megabytes, terwijl een geoptimaliseerd exemplaar met hetzelfde beeld een fractie daarvan weegt. Vier van zulke foto's op één pagina en de vertraging is compleet.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Op plek twee: externe scripts. Chatwidgets, trackingpixels, video-embeds en marketingtools laden allemaal mee bij elke paginaweergave. Stuk voor stuk klein, samen een file. In pagina's die we voor klanten doorlichten vinden we geregeld scripts van tools die al maanden niet meer gebruikt worden.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Pas daarna komt de techniek eronder: verouderde hosting, geen caching, een zware paginabuilder. Relevant, maar begin er niet. De snelste winst zit vrijwel altijd in de eerste twee categorieën.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe maak je je landingspagina sneller?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Comprimeer al je afbeeldingen en lever ze aan in een modern formaat zoals WebP. Schaal ze bovendien naar het formaat waarop ze getoond worden: een foto van 4000 pixels breed in een kader van 800 pixels is verspilde bandbreedte.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Zet lazy loading aan voor alles onder de vouw. De browser laadt dan eerst wat de bezoeker ziet en haalt de rest op tijdens het scrollen. Het eerste scherm voelt daardoor direct, ook als de pagina als geheel zwaar is.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Ruim daarna je scripts op. Loop je tagbeheer en paginacode langs en verwijder alles wat geen aantoonbare functie meer heeft. Voor de bredere aanpak, van hosting tot caching, lees je ons artikel over <Link to="/blogs/strategie/snellere-website-meer-klanten" className="text-accent hover:underline">een snellere website die meer klanten oplevert</Link>.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Werk je met een paginabuilder, kijk dan kritisch naar wat die standaard meelaadt. Veel builders laden complete bibliotheken aan effecten en lettertypes voor functies die jij nooit gebruikt. Een lichter thema scheelt soms meer dan alle andere ingrepen samen. Overweeg voor campagnepagina's een aparte, kale opzet los van je hoofdsite.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Waarom weegt mobiel het zwaarst?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Omdat daar de trage verbindingen zitten én meestal het meeste campagneverkeer. Een pagina die op je kantoor-wifi vlot aanvoelt, kan onderweg op 4G stroperig zijn. Je bezoekers testen niet op glasvezel.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Mobiele bezoekers zijn bovendien ongeduldiger. Ze klikken tussen twee momenten door, en de terugknop zit onder hun duim. De drempel om af te haken is lager dan op desktop, dus elke gewonnen seconde telt daar harder.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Bekijk je pagina daarom altijd eerst door een mobiele bril. Wat er op een klein scherm bij hoort, en wat juist niet, lees je in ons artikel over <Link to="/blogs/strategie/mobile-first-landingspaginas-geen-optie" className="text-accent hover:underline">mobile-first landingspagina's</Link>.
                        </p>

                        <p className="text-primary/80 leading-relaxed mb-6">
                            Snelheid is een conversieknop waar je maar één keer aan hoeft te draaien om er elke dag profijt van te hebben. Benieuwd hoeveel jouw pagina laat liggen? We meten het graag voor je door. Plan een gratis gesprek via <Link to="/contact" className="text-accent hover:underline">empowers.nl/contact</Link>.
                        </p>

                        <hr className="my-16 border-primary/10" />

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Veelgestelde vragen over laadtijd</h2>

                        <div className="space-y-6 not-prose">
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat is een goede laadtijd voor een landingspagina?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Streef ernaar dat het grootste zichtbare element binnen 2,5 seconden op het scherm staat. Dat is de grens die Google hanteert voor de Largest Contentful Paint, een van de Core Web Vitals. Voelt de pagina traag op je eigen telefoon via mobiel internet, dan is hij te traag.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Heeft laadtijd invloed op mijn advertentiekosten?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Ja, indirect maar merkbaar. Google Ads weegt de ervaring op je landingspagina mee in de kwaliteitsscore, en die score beïnvloedt wat je per klik betaalt. Een trage pagina zorgt bovendien voor meer afhakers na de klik: je betaalt dan wel voor bezoekers, maar ze zien je aanbod nooit.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat vertraagt een landingspagina het meest?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    In de praktijk zijn afbeeldingen de grootste boosdoener: te groot aangeleverd en niet gecomprimeerd. Daarna volgen externe scripts zoals chatwidgets, trackingpixels en video-embeds. En onderaan de lijst staat trage hosting. Begin dus bij je afbeeldingen, daar zit meestal de snelste winst.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoe meet ik de laadtijd van mijn landingspagina?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Gebruik PageSpeed Insights van Google: gratis, en je krijgt naast een score ook concrete verbeterpunten. Test daarnaast zelf op een telefoon via mobiel internet in plaats van wifi, want zo ervaart een groot deel van je bezoekers de pagina. Meet meerdere keren op verschillende momenten.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoeveel conversie levert een snellere landingspagina op?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Een vast percentage bestaat niet, maar de richting is duidelijk: onderzoek van Google toont dat de kans op afhaken fors toeneemt naarmate een mobiele pagina langer laadt. Hoe trager je startpunt, hoe groter de winst. Van vijf naar twee seconden merk je in je cijfers, van twee naar anderhalf nauwelijks.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Is een perfecte PageSpeed-score van 100 nodig?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Nee. De score is een hulpmiddel, geen doel. Boven de 90 op mobiel zit je ruim goed en levert verder jagen op punten zelden nog meetbare conversiewinst op. Kijk liever naar de ervaring: laadt het eerste scherm direct en kun je meteen scrollen en klikken, dan is je pagina snel genoeg.
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
                    <h2 className="relative z-10 font-drama italic text-background text-3xl sm:text-4xl md:text-5xl mb-6">Elke seconde omzetten in conversies?</h2>
                    <p className="relative z-10 font-sans text-background/70 text-lg mb-10 max-w-xl mx-auto">
                        Wij maken je landingspagina meetbaar sneller en je campagnes meetbaar winstgevender.
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
