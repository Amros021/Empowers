import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ChevronRight, User } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function BlogPostVerlaagBounceRateBetereGoogle() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen selection:bg-accent/30 selection:text-dark flex flex-col bg-background">
            <Helmet>
                <title>Bounce rate verlagen met betere Google Ads landingspagina's | Empowers</title>
                <meta name="description" content="Een hoge bounce rate op je Google Ads-landingspagina kost geld. Welke elementen werkelijk converteren, hoe je ze test en welke fouten je rendement vernietigen." />
                <link rel="canonical" href="https://www.empowers.nl/blogs/google-ads/verlaag-bounce-rate-betere-google" />
                <meta property="og:title" content="Bounce rate verlagen met betere Google Ads landingspagina's" />
                <meta property="og:description" content="Hoe je je Google Ads landingspagina's optimaliseert zodat bezoekers blijven en converteren." />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://www.empowers.nl/blogs/google-ads/verlaag-bounce-rate-betere-google" />
                <meta property="og:image" content="https://www.empowers.nl/images/blogs/verlaag-bounce-rate-betere-google.jpg" />
                <meta property="article:published_time" content="2026-05-13" />
                <meta property="article:author" content="Empowers" />
                <meta property="article:section" content="Google Ads" />
                <meta name="twitter:card" content="summary_large_image" />

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Article",
                        "headline": "Bounce rate verlagen met betere Google Ads landingspagina's",
                        "description": "Hoe je je Google Ads landingspagina's bouwt zodat bezoekers blijven, doorklikken en converteren.",
                        "image": "https://www.empowers.nl/images/blogs/verlaag-bounce-rate-betere-google.jpg",
                        "datePublished": "2026-05-13T11:30:00+02:00",
                        "author": { "@type": "Organization", "name": "Empowers" },
                        "publisher": {
                            "@type": "Organization", "name": "Empowers", "url": "https://www.empowers.nl",
                            "logo": { "@type": "ImageObject", "url": "https://www.empowers.nl/empowers-logo-color.svg" }
                        },
                        "mainEntity": {
                            "@type": "FAQPage",
                            "mainEntity": [
                                { "@type": "Question", "name": "Wat is een goede bounce rate voor Google Ads-landingspagina's?",
                                  "acceptedAnswer": { "@type": "Answer", "text": "Een gezonde benchmark ligt rond de 40 procent voor B2B-lead-pagina's en rond de 55 procent voor e-commerce productpagina's. Boven de 70 procent geeft Google Ads-verkeer een duidelijk signaal dat je pagina niet aansluit op de zoekintentie of dat de techniek niet klopt." } },
                                { "@type": "Question", "name": "Welke factor heeft de grootste impact op bounce rate?",
                                  "acceptedAnswer": { "@type": "Answer", "text": "Message match: de mate waarin je advertentietekst en je landingspagina dezelfde belofte doen. Wie op een advertentie over rode hardloopschoenen klikt en op een algemene merkpagina belandt, klikt vrijwel altijd binnen vijf seconden weg. Eén-op-één match tussen ad en pagina levert in de praktijk vaak halvering van de bounce rate." } },
                                { "@type": "Question", "name": "Hoe snel moet een landingspagina laden?",
                                  "acceptedAnswer": { "@type": "Answer", "text": "Largest Contentful Paint onder 2,5 seconden op mobiel is de norm volgens Google. Boven die drempel haakt een groot deel van de mobiele bezoekers af. Op trage 4G-netwerken haalt vrijwel geen WordPress-site dit zonder serieuze optimalisatie van afbeeldingen, lettertypes, JavaScript en third-party scripts." } },
                                { "@type": "Question", "name": "Zijn aparte landingspagina's per campagne nodig?",
                                  "acceptedAnswer": { "@type": "Answer", "text": "Voor Search-campagnes met scherpe zoekintentie loont een aparte landingspagina vrijwel altijd. Per advertentiegroep een pagina die exact aansluit op de zoekopdracht. Dat verlaagt bounce rate én verhoogt je quality score, waardoor je effectief minder CPC betaalt voor dezelfde click." } },
                                { "@type": "Question", "name": "Welke fout zien jullie het meest op klant-landingspagina's?",
                                  "acceptedAnswer": { "@type": "Answer", "text": "Te veel boodschappen tegelijk. Een pagina probeert in de hero zowel het USP te zeggen, social proof te tonen en drie verschillende doelgroepen aan te spreken. Resultaat: niemand voelt zich aangesproken. Beter: één duidelijke belofte, gericht op de zoekopdracht waar het verkeer op binnenkomt." } },
                                { "@type": "Question", "name": "Hoe meet ik bounce rate na de GA4-update?",
                                  "acceptedAnswer": { "@type": "Answer", "text": "GA4 toont standaard engagement rate; bounce rate is het tegenovergestelde. Een sessie telt als geëngageerd als hij langer dan 10 seconden duurt, een conversie genereert of meerdere pagina's bekijkt. Activeer bounce rate als metric in GA4 onder Customize Report om hem expliciet te zien." } }
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
                            { "@type": "ListItem", "position": 4, "name": "Bounce rate verlagen", "item": "https://www.empowers.nl/blogs/google-ads/verlaag-bounce-rate-betere-google" }
                        ]
                    })}
                </script>
            </Helmet>

            <Navbar />

            <article className="w-full pt-40 pb-24 px-6 relative">
                <div className="max-w-4xl mx-auto">
                    <nav className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-primary/50 mb-12">
                        <Link to="/" className="hover:text-accent transition-colors">Home</Link>
                        <ChevronRight className="w-3 h-3" />
                        <Link to="/nieuws" className="hover:text-accent transition-colors">Nieuws</Link>
                        <ChevronRight className="w-3 h-3" />
                        <Link to="/blogs/google-ads" className="hover:text-accent transition-colors">Google Ads</Link>
                        <ChevronRight className="w-3 h-3" />
                        <span className="text-primary truncate">Bounce rate verlagen</span>
                    </nav>

                    <header className="mb-16">
                        <div className="inline-block px-3 py-1 bg-accent/10 text-accent font-mono text-xs uppercase tracking-widest rounded-full mb-6">
                            Google Ads
                        </div>
                        <h1 className="font-sans font-bold text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight mb-8">
                            Bounce rate verlagen met betere Google Ads landingspagina's
                        </h1>

                        <div className="flex flex-wrap items-center gap-6 text-sm font-sans text-primary/60 border-y border-primary/10 py-6">
                            <div className="flex items-center gap-2"><User className="w-4 h-4" /><span>Empowers Redactie</span></div>
                            <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>13 mei 2026</span></div>
                            <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>8 minuten leestijd</span></div>
                        </div>
                    </header>

                    <figure className="w-full h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden mb-16 relative bg-primary">
                        <div className="absolute inset-0 bg-[url('/images/blogs/verlaag-bounce-rate-betere-google.jpg')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </figure>

                    <div className="prose prose-lg max-w-none prose-headings:text-primary prose-headings:font-bold prose-a:text-accent prose-a:underline hover:prose-a:text-accent/80">
                        <p className="text-xl leading-relaxed text-primary/80 font-medium mb-6">
                            Je Google Ads-campagne haalt clicks, maar nauwelijks conversies. Voor je de schuld geeft aan je biedstrategie of je advertentietekst: kijk eerst naar wat er ná de klik gebeurt. Een hoge bounce rate is bijna altijd een signaal dat je landingspagina niet doet wat hij moet doen. En dat is de meest verspilde euro in elke Google Ads-account.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Waarom bounce rate een Google Ads-metriek is, niet alleen een website-metriek</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Bounce rate meet hoeveel bezoekers je site verlaten zonder een tweede actie te ondernemen. Voor organisch verkeer is dat één signaal van vele. Voor Google Ads-verkeer is het een directe rendementsindicator. Je hebt betaald voor die click. Als de bezoeker binnen vijf seconden weg is, is dat geld letterlijk in de prullenbak verdwenen. Erger nog: Google ziet die bounce ook en gebruikt het signaal in zijn quality score berekening.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een lagere bounce rate verlaagt indirect je CPC. Niet omdat Google je beloont, maar omdat een betere quality score ervoor zorgt dat je advertentie meer impressies krijgt tegen lagere bodprijzen. Zo betaalt een betere landingspagina zichzelf twee keer terug: meer conversies én lagere acquisitiekosten.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Message match: de grootste hefboom</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De belangrijkste reden dat mensen wegklikken is dat ze niet vinden wat ze verwachten. Iemand zoekt op "boekhoudsoftware voor ZZP", ziet een advertentie met die exacte tekst, klikt door en belandt op een algemene homepage waar twaalf producten worden gepromoot. Binnen drie seconden weg.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De oplossing heet message match. De hero-tekst van je landingspagina moet exact dezelfde belofte doen als je advertentie. Zoekt iemand op "boekhoudsoftware voor ZZP", dan zegt je pagina ook letterlijk: boekhoudsoftware voor ZZP. Niet "het beste platform voor ondernemers", maar specifiek wat ze zochten. Dat alleen is vaak goed voor flinke daling in bounce rate.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            In de praktijk betekent dat: per advertentiegroep een eigen landingspagina. Dat klinkt veel werk, maar het effect op je rendement is direct meetbaar. Hoe je je campagnestructuur opzet zodat je per groep een gerichte pagina kunt aanmaken, lees je in onze blog over <Link to="/blogs/google-ads/google-ads-campagne-structuur" className="text-accent hover:underline">de juiste Google Ads campagnestructuur</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Laadtijd: onder de drempel of bezoekers haken af</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Mobiele bezoekers hebben weinig geduld. Google's eigen Core Web Vitals stellen dat de Largest Contentful Paint binnen 2,5 seconden moet vallen. Een grote afbeelding in de hero, een trage server, vijf JavaScript-bibliotheken die parallel laden en een paar third-party scripts: elk van die elementen tikt aan. Boven de 4 seconden haakt ruim de helft van het mobiele verkeer af voor je pagina überhaupt is geladen.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Drie quick wins. Comprimeer alle afbeeldingen naar WebP-formaat. Verwijder lettertype-varianten die je niet gebruikt. Verplaats third-party scripts naar einde van de pagina of laad ze pas na interactie. Test je pagina in PageSpeed Insights op een gesimuleerd mobiel 4G-netwerk, niet alleen op desktop. De desktop-score zegt voor Google Ads-verkeer weinig: mobiel is waar je geld vandaan komt.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Eén pagina, één boodschap, één actie</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Veel landingspagina's mislukken niet door techniek, maar door onduidelijkheid. Ze proberen tegelijk te informeren, social proof te tonen, drie doelgroepen aan te spreken en vier verschillende CTA's te promoten. De bezoeker scant drie seconden, raakt overweldigd en klikt weg. Beslis vooraf welke ene actie deze pagina moet ontlokken. Demo aanvragen? Whitepaper downloaden? Bellen?
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Schrijf je hero-sectie zo dat een bezoeker binnen vijf seconden weet wat het aanbod is, voor wie het is en wat hij moet doen. Geen jargon, geen marketing-prikkels die niemand kraakt. Gewoon: waar gaat het over, waarom past het bij mij en hoe ga ik verder. Wie hierin verder wil duiken kan terecht in onze blog over <Link to="/blogs/strategie/landingspagina-schrijven-converteert" className="text-accent hover:underline">landingspagina's die converteren</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Sociale bewijslast op de juiste plek</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Reviews, klantlogo's en cijfers werken, mits goed geplaatst. Een trustbar met logo's onder de hero, vlak na de eerste CTA. Een korte review met naam en foto bij het tweede ankerpunt. Een metriek ("ruim 1.200 klanten gingen je voor") boven je formulier. Op die manier krijg je drie momenten waarop je vertrouwen opbouwt zonder dat de pagina een referentielijst wordt.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Wat niet werkt: een sectie met dertien klantlogo's die nergens op slaan, of pseudo-reviews zonder naam. Bezoekers herkennen anonieme social proof binnen seconden en het effect is averechts. Eén review met gezicht en naam doet meer voor je conversie dan tien anonieme sterren.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Formulieren: minder velden, hogere conversie</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Elke veld dat je toevoegt verlaagt je conversie. Voor lead gen-formulieren is de vuistregel: vraag niet meer dan strikt nodig is om de eerste stap te maken. Naam en mailadres zijn vaak al genoeg. De rest komt in een vervolggesprek of in een vervolg-mail. Wie zeven velden uitvraagt op een eerste contactformulier verbrandt budget.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Voor B2C-checkouts geldt vergelijkbaar: bied gastcheckout, vraag niet om accountregistratie voor de aankoop, en houd betalingsmethoden zichtbaar. Elke extra stap is een afhaakmoment.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">A/B-testen: niet wat je denkt, wat je meet</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Bounce rate verlagen is geen één-keer-klaar-project. Test wat in jouw markt werkt. Hero-headline tegen elkaar. CTA-tekst tegen elkaar. Formulier kort versus middellang. Geen complex script nodig: Google Optimize-alternatieven zoals VWO of de testfunctie van Hotjar geven je in een paar weken concrete data over wat werkt. Hoe je dat soort testen netjes uitvoert behandelen we in onze blog over <Link to="/blogs/strategie/a-b-testen-beginners-verhoog" className="text-accent hover:underline">A/B-testen voor beginners</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Drie fouten die we het vaakst zien</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Eerste valkuil: de homepage als landingspagina gebruiken. Dat is bijna nooit goed. Een homepage is bedoeld om te navigeren, een landingspagina om te converteren. Twee verschillende functies, twee verschillende ontwerpen.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Tweede: navigatiebalk en footer-links bovenaan laten staan. Dat geeft de bezoeker tien afleidingsmogelijkheden waar hij maar één nodig had. Op landingspagina's mag de navigatie minimaal of geheel verborgen zijn. Eén pad: doorklikken naar de CTA of weg.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Derde: vergeten te checken hoe de pagina op mobiel oogt. Adverteerders kijken op hun MacBook naar hun pagina en concluderen dat het er prachtig uitziet. Vervolgens komt 70 procent van het verkeer binnen op een 5,5-inch scherm waar de CTA-knop pas na drie keer scrollen verschijnt. Bouw altijd vanuit mobile-first.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Een werkbare checklist voor een nieuwe pagina</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Voor elke nieuwe Google Ads-landingspagina loop je deze controles: matcht de hero-headline letterlijk met de advertentietekst? Laadt de pagina onder de 2,5 seconden op mobiel? Is er één duidelijke CTA in de hero? Staan sociale bewijslast en CTA's afgewisseld door de pagina? Heeft het formulier maximaal vier velden? Is de navigatie minimaal? Heb je de mobiele weergave bekeken?
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Zeven vinkjes en je begint met een pagina die statistisch gezien een lagere bounce rate haalt dan vrijwel elk standaard WordPress-template. De rest is meten en verfijnen op basis van wat jouw verkeer doet.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Veelgestelde vragen</h2>
                    </div>

                    <section className="mt-4">
                        <div className="space-y-6 not-prose">
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat is een goede bounce rate voor Google Ads-landingspagina's?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Een gezonde benchmark ligt rond de 40 procent voor B2B-lead-pagina's en rond de 55 procent voor e-commerce productpagina's. Boven de 70 procent geeft Google Ads-verkeer een duidelijk signaal dat je pagina niet aansluit op de zoekintentie of dat de techniek niet klopt.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Welke factor heeft de grootste impact op bounce rate?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Message match: de mate waarin je advertentietekst en je landingspagina dezelfde belofte doen. Wie op een advertentie over rode hardloopschoenen klikt en op een algemene merkpagina belandt, klikt vrijwel altijd binnen vijf seconden weg. Eén-op-één match tussen ad en pagina levert in de praktijk vaak halvering van de bounce rate.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoe snel moet een landingspagina laden?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Largest Contentful Paint onder 2,5 seconden op mobiel is de norm volgens Google. Boven die drempel haakt een groot deel van de mobiele bezoekers af. Op trage 4G-netwerken haalt vrijwel geen WordPress-site dit zonder serieuze optimalisatie van afbeeldingen, lettertypes, JavaScript en third-party scripts.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Zijn aparte landingspagina's per campagne nodig?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Voor Search-campagnes met scherpe zoekintentie loont een aparte landingspagina vrijwel altijd. Per advertentiegroep een pagina die exact aansluit op de zoekopdracht. Dat verlaagt bounce rate én verhoogt je quality score, waardoor je effectief minder CPC betaalt voor dezelfde click.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Welke fout zien jullie het meest op klant-landingspagina's?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Te veel boodschappen tegelijk. Een pagina probeert in de hero zowel het USP te zeggen, social proof te tonen en drie verschillende doelgroepen aan te spreken. Resultaat: niemand voelt zich aangesproken. Beter: één duidelijke belofte, gericht op de zoekopdracht waar het verkeer op binnenkomt.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoe meet ik bounce rate na de GA4-update?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    GA4 toont standaard engagement rate; bounce rate is het tegenovergestelde. Een sessie telt als geëngageerd als hij langer dan 10 seconden duurt, een conversie genereert of meerdere pagina's bekijkt. Activeer bounce rate als metric in GA4 onder Customize Report om hem expliciet te zien.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="mt-16 pt-12 border-t border-primary/10">
                        <h3 className="text-xl font-bold text-primary mb-6">Lees ook</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <Link to="/blogs/strategie/landingspagina-schrijven-converteert" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Landingspagina's die converteren</h3>
                                <p className="text-primary/60 text-sm">De copy- en designprincipes die wel werken.</p>
                            </Link>
                            <Link to="/blogs/google-ads/google-ads-quality-score-verhogen" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Quality Score verhogen</h3>
                                <p className="text-primary/60 text-sm">Lager CPC door betere relevantie in je Google Ads.</p>
                            </Link>
                            <Link to="/blogs/google-ads" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Google Ads blogs</h3>
                                <p className="text-primary/60 text-sm">Alle artikelen over Search, PMax en landingspagina's.</p>
                            </Link>
                        </div>
                    </section>
                </div>
            </article>

            <section className="w-full pb-32 px-6">
                <div className="max-w-4xl mx-auto bg-primary rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
                    <h2 className="relative z-10 font-drama italic text-background text-3xl sm:text-4xl md:text-5xl mb-6">Landingspagina's die echt converteren?</h2>
                    <p className="relative z-10 font-sans text-background/70 text-lg mb-10 max-w-xl mx-auto">We bekijken je Google Ads-account en je pagina's en zetten een werkende combinatie op. Hogere conversie, lagere CPC, meetbaar resultaat.</p>
                    <Link to="/contact" className="relative z-10 btn-magnetic inline-flex items-center justify-center bg-accent text-background font-sans font-bold text-lg px-10 py-4 rounded-[2rem] hover:bg-accent/90 transition-colors">Neem contact op</Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
