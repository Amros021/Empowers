import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ChevronRight, User } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function BlogPostOptimaliseerLandingspaginaMobiel() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen selection:bg-accent/30 selection:text-dark flex flex-col bg-background">
            <Helmet>
                <title>Hoe optimaliseer je een landingspagina voor mobiel | Empowers</title>
                <meta name="description" content="Je landingspagina mobiel optimaliseren? Zo zorg je voor snelle laadtijd, leesbare tekst en knoppen die met één duim werken, zodat mobiele bezoekers kopen." />
                <meta name="keywords" content="landingspagina mobiel optimaliseren, mobiele landingspagina, landingspagina telefoon, mobiele conversie verbeteren, mobielvriendelijke landingspagina" />
                <link rel="canonical" href="https://www.empowers.nl/blogs/strategie/optimaliseer-landingspagina-mobiel" />
                <meta property="og:title" content="Hoe optimaliseer je een landingspagina voor mobiel" />
                <meta property="og:description" content="Zo zorg je voor snelle laadtijd, leesbare tekst en knoppen die met één duim werken, zodat mobiele bezoekers kopen." />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://www.empowers.nl/blogs/strategie/optimaliseer-landingspagina-mobiel" />
                <meta property="og:image" content="https://www.empowers.nl/images/blogs/optimaliseer-landingspagina-mobiel.jpg" />
                <meta property="article:published_time" content="2026-06-07T10:00:00+02:00" />
                <meta property="article:author" content="Empowers" />
                <meta property="article:section" content="Strategie" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Hoe optimaliseer je een landingspagina voor mobiel" />
                <meta name="twitter:description" content="Zo zorg je voor snelle laadtijd, leesbare tekst en knoppen die met één duim werken, zodat mobiele bezoekers kopen." />

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@graph": [
                            {
                                "@type": "Article",
                                "headline": "Hoe optimaliseer je een landingspagina voor mobiel",
                                "description": "Je landingspagina mobiel optimaliseren? Zo zorg je voor snelle laadtijd, leesbare tekst en knoppen die met één duim werken, zodat mobiele bezoekers kopen.",
                                "image": "https://www.empowers.nl/images/blogs/optimaliseer-landingspagina-mobiel.jpg",
                                "datePublished": "2026-06-07T10:00:00+02:00",
                                "dateModified": "2026-06-07T10:00:00+02:00",
                                "author": { "@type": "Organization", "name": "Empowers" },
                                "publisher": {
                                    "@type": "Organization",
                                    "name": "Empowers",
                                    "url": "https://www.empowers.nl",
                                    "logo": { "@type": "ImageObject", "url": "https://www.empowers.nl/empowers-logo-color.svg" }
                                }
                            },
                            {
                                "@type": "BreadcrumbList",
                                "itemListElement": [
                                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.empowers.nl" },
                                    { "@type": "ListItem", "position": 2, "name": "Blogs", "item": "https://www.empowers.nl/blogs" },
                                    { "@type": "ListItem", "position": 3, "name": "Strategie", "item": "https://www.empowers.nl/blogs/strategie" },
                                    { "@type": "ListItem", "position": 4, "name": "Hoe optimaliseer je een landingspagina voor mobiel", "item": "https://www.empowers.nl/blogs/strategie/optimaliseer-landingspagina-mobiel" }
                                ]
                            },
                            {
                                "@type": "FAQPage",
                                "mainEntity": [
                                    {
                                        "@type": "Question",
                                        "name": "Waarom heeft mobiel een eigen aanpak nodig voor je landingspagina?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Een mobiele bezoeker kijkt op een klein scherm en heeft minder geduld dan iemand achter een laptop. Wat op desktop prima werkt, voelt op een telefoon al snel traag of onhandig. Daarom ontwerp je eerst voor mobiel en breid je daarna uit naar grotere schermen."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Hoe snel moet een landingspagina laden op mobiel?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Mik op een laadtijd binnen 3 seconden op een mobiele verbinding. Duurt het langer, dan haakt een groot deel van je bezoekers af voordat ze je aanbod zien. De grootste winst zit meestal in kleinere afbeeldingen en minder scripts die meeladen."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Hoe groot moeten knoppen zijn op een mobiele landingspagina?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Google adviseert tikdoelen van minimaal 48 bij 48 pixels. Kleinere knoppen zorgen voor mistikken en frustratie. Zet je belangrijkste knop binnen het bereik van de duim, dus in het onderste deel van het scherm, en geef hem ruimte ten opzichte van andere klikbare elementen."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Welke tool gebruik je om je mobiele pagina te testen?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Google PageSpeed Insights laat zien hoe snel je pagina laadt op mobiel en wat je kunt verbeteren. Daarnaast is je eigen telefoon de beste test: doorloop de pagina zelf en probeer het formulier in te vullen zoals een klant dat zou doen."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Moet ik een aparte mobiele versie van mijn landingspagina bouwen?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Nee, een responsive pagina die zich aanpast aan het scherm is bijna altijd de betere keuze. Een aparte mobiele versie betekent dubbel onderhoud en het risico dat de twee versies uit elkaar gaan lopen. Zorg wel dat de mobiele weergave leidend is in je ontwerp."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Wat is de grootste fout op mobiele landingspagina's?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Een formulier dat te veel vraagt. Tien invoervelden op een telefoon invullen is een opgave en bezoekers stoppen er gewoon mee. Vraag alleen wat je echt nodig hebt en gebruik het juiste toetsenbordtype per veld, zodat invullen zo min mogelijk moeite kost."
                                        }
                                    }
                                ]
                            }
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
                        <Link to="/blogs/strategie" className="hover:text-accent transition-colors">Strategie</Link>
                        <ChevronRight className="w-3 h-3" />
                        <span className="text-primary truncate">Landingspagina voor mobiel</span>
                    </nav>

                    <header className="mb-16">
                        <div className="inline-block px-3 py-1 bg-accent/10 text-accent font-mono text-xs uppercase tracking-widest rounded-full mb-6">
                            Strategie
                        </div>
                        <h1 className="font-sans font-bold text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight mb-8">
                            Hoe optimaliseer je een landingspagina voor mobiel
                        </h1>
                        <div className="flex flex-wrap items-center gap-6 text-sm font-sans text-primary/60 border-y border-primary/10 py-6">
                            <div className="flex items-center gap-2"><User className="w-4 h-4" /><span>Empowers Redactie</span></div>
                            <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>7 juni 2026</span></div>
                            <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>7 minuten leestijd</span></div>
                        </div>
                    </header>

                    <figure className="w-full h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden mb-16 relative bg-primary">
                        <div className="absolute inset-0 bg-[url('/images/blogs/optimaliseer-landingspagina-mobiel.jpg')] bg-cover bg-center opacity-40 mix-blend-overlay" style={{ backgroundImage: "url('/images/blogs/optimaliseer-landingspagina-mobiel.jpg')" }}></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </figure>

                    <div className="prose prose-lg max-w-none prose-headings:text-primary prose-headings:font-bold prose-a:text-accent prose-a:underline hover:prose-a:text-accent/80">
                        <p className="text-xl leading-relaxed text-primary/80 font-medium mb-6">
                            Een landingspagina die op mobiel converteert, laadt binnen een paar seconden en leest zonder inzoomen. Bedienen gaat met één duim. Dat klinkt logisch, maar de meeste pagina's worden nog steeds op een groot scherm ontworpen en daarna in een telefoonformaat geperst. Draai dat om, en je ziet het terug in je conversie.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Waarom verdient mobiel een eigen aanpak?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Meer dan de helft van je bezoekers komt binnen via een telefoon. Google kijkt bovendien eerst naar de mobiele versie van je pagina om te bepalen hoe je rankt, niet naar de desktopversie. Een pagina die alleen op een groot scherm klopt, verliest dus twee keer.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Daar komt de context bij. Een mobiele bezoeker zit in de trein, wacht ergens op of scrolt op de bank. Het geduld is korter en de afleiding groter, dus elke seconde wachten en elke onhandige knop kost je klanten. Waarom je ontwerp daarom bij het kleine scherm begint, lees je in onze blog over <Link to="/blogs/strategie/mobile-first-landingspaginas-geen-optie" className="text-accent hover:underline">waarom mobile-first geen optie meer is</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe snel moet je landingspagina laden op mobiel?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Mik op een laadtijd binnen 3 seconden. Duurt het langer, dan is een flink deel van je bezoekers al weg voordat je aanbod in beeld komt. Op een mobiele verbinding telt elke kilobyte dubbel.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De grootste winst zit bijna altijd in afbeeldingen. Verklein ze, lever ze in een modern formaat zoals WebP en laad foto's onder de vouw pas als de bezoeker erheen scrolt. Schrap daarna scripts die je niet nodig hebt, want elke tracking-tool en chatwidget laadt mee. Meer snelheidswinst vind je in onze blog over <Link to="/blogs/strategie/snellere-website-meer-klanten" className="text-accent hover:underline">hoe een snellere website meer klanten oplevert</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe maak je tekst leesbaar op een klein scherm?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Gebruik een lettergrootte van minimaal 16 pixels voor je lopende tekst. Kleiner dwingt mensen tot inzoomen en dat doet bijna niemand. Houd alinea's kort, op een telefoon oogt een alinea van vijf zinnen al als een muur.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Je belangrijkste boodschap hoort in het eerste scherm, zonder scrollen zichtbaar. Op mobiel is dat eerste scherm klein, dus wees streng: één kop met één knop eronder, plus hooguit één zin uitleg. Hoe je dat eerste beeld inricht, lees je in onze blog over <Link to="/blogs/strategie/above-the-fold-waarom-eerste" className="text-accent hover:underline">waarom above the fold zo zwaar weegt</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe zorg je dat knoppen en formulieren werken met een duim?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Google adviseert tikdoelen van minimaal 48 bij 48 pixels. Kleinere knoppen leiden tot mistikken, zeker bij links die dicht op elkaar staan. Zet je belangrijkste knop in het onderste deel van het scherm, daar rust de duim van nature.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Formulieren zijn op mobiel de plek waar conversie sneuvelt. Vraag alleen wat je echt nodig hebt. Drie velden invullen op een telefoon is te doen, tien velden voelt als werk. Stel per veld het juiste toetsenbordtype in, zodat bij een telefoonnummer meteen het cijferblok verschijnt, en laat de browser gegevens automatisch aanvullen.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Overweeg daarnaast een knop die meeloopt tijdens het scrollen. Op een lange mobiele pagina raakt de bovenste knop snel uit beeld, terwijl een vaste balk onderaan altijd binnen duimbereik blijft. Verkoop je een dienst waarbij bellen logisch is? Maak je telefoonnummer dan klikbaar, zodat één tik genoeg is om het gesprek te starten.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat laat je weg op de mobiele versie?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Snoeien werkt op mobiel beter dan toevoegen. Een zijbalk, een lange video die automatisch afspeelt of een tweede menu: op een klein scherm leiden ze alleen maar af van je aanbod. Elke seconde aandacht die niet naar je knop gaat, is verloren.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Wees ook terughoudend met schermvullende pop-ups. Google waardeert pagina's met opdringerige mobiele vensters lager en bezoekers klikken ze geïrriteerd weg. Wanneer een pop-up wel werkt, lees je in onze blog over <Link to="/blogs/strategie/pop-ups-landingspaginas-helpen-schaden" className="text-accent hover:underline">pop-ups die helpen of schaden</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe test je of je mobiele landingspagina goed staat?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Begin met Google PageSpeed Insights. Die tool laat zien hoe snel je pagina laadt op een mobiele verbinding en geeft concrete verbeterpunten, van te grote afbeeldingen tot scripts die de boel ophouden. Schrik niet van een lage score na de eerste meting. Werk de punten bovenaan de lijst af en meet opnieuw, want daar zit het grootste effect.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De beste test blijft je eigen telefoon. Ondernemers die wij spreken bekijken hun pagina vrijwel altijd op een laptop en zelden op het toestel waar hun klanten op zitten. Doorloop de pagina zelf en vul het formulier in. Let op elk moment van twijfel of irritatie, want precies daar verlies je bezoekers. Splits daarna in je statistieken de mobiele conversie van desktop, zodat je ziet waar het verschil zit.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Zo begin je vandaag</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Pak je telefoon en open je eigen landingspagina. Check de laadtijd, lees de tekst zonder in te zoomen en probeer het formulier in te vullen met één duim. Alles wat jou irriteert, irriteert je bezoekers ook.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Verbeter eerst de snelheid en het formulier, daar zit de snelste winst. Wil je weten hoeveel conversie er op mobiel blijft liggen bij jouw pagina? We kijken er graag naar. Plan een gratis gesprek via <Link to="/contact" className="text-accent hover:underline">empowers.nl/contact</Link>.
                        </p>
                    </div>

                    <section className="mt-16 pt-12 border-t border-primary/10">
                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Veelgestelde vragen</h2>
                        <div className="space-y-6 not-prose">
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Waarom heeft mobiel een eigen aanpak nodig voor je landingspagina?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Een mobiele bezoeker kijkt op een klein scherm en heeft minder geduld dan iemand achter een laptop. Wat op desktop prima werkt, voelt op een telefoon al snel traag of onhandig. Daarom ontwerp je eerst voor mobiel en breid je daarna uit naar grotere schermen.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoe snel moet een landingspagina laden op mobiel?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Mik op een laadtijd binnen 3 seconden op een mobiele verbinding. Duurt het langer, dan haakt een groot deel van je bezoekers af voordat ze je aanbod zien. De grootste winst zit meestal in kleinere afbeeldingen en minder scripts die meeladen.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoe groot moeten knoppen zijn op een mobiele landingspagina?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Google adviseert tikdoelen van minimaal 48 bij 48 pixels. Kleinere knoppen zorgen voor mistikken en frustratie. Zet je belangrijkste knop binnen het bereik van de duim, dus in het onderste deel van het scherm, en geef hem ruimte ten opzichte van andere klikbare elementen.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Welke tool gebruik je om je mobiele pagina te testen?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Google PageSpeed Insights laat zien hoe snel je pagina laadt op mobiel en wat je kunt verbeteren. Daarnaast is je eigen telefoon de beste test: doorloop de pagina zelf en probeer het formulier in te vullen zoals een klant dat zou doen.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Moet ik een aparte mobiele versie van mijn landingspagina bouwen?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Nee, een responsive pagina die zich aanpast aan het scherm is bijna altijd de betere keuze. Een aparte mobiele versie betekent dubbel onderhoud en het risico dat de twee versies uit elkaar gaan lopen. Zorg wel dat de mobiele weergave leidend is in je ontwerp.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat is de grootste fout op mobiele landingspagina's?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Een formulier dat te veel vraagt. Tien invoervelden op een telefoon invullen is een opgave en bezoekers stoppen er gewoon mee. Vraag alleen wat je echt nodig hebt en gebruik het juiste toetsenbordtype per veld, zodat invullen zo min mogelijk moeite kost.</p>
                            </div>
                        </div>
                    </section>

                    <section className="mt-16 pt-12 border-t border-primary/10">
                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Lees ook</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <Link to="/blogs/strategie/mobile-first-landingspaginas-geen-optie" className="block border border-primary/10 rounded-xl p-6 hover:border-accent transition-colors">
                                <div className="text-xs font-mono uppercase tracking-widest text-accent mb-2">Strategie</div>
                                <h3 className="font-sans font-semibold text-primary text-lg mb-2">Mobile-first landingspagina's zijn geen optie meer</h3>
                                <p className="font-sans text-primary/70 text-sm">Waarom je pagina eerst op de telefoon moet kloppen.</p>
                            </Link>
                            <Link to="/blogs/strategie/snellere-website-meer-klanten" className="block border border-primary/10 rounded-xl p-6 hover:border-accent transition-colors">
                                <div className="text-xs font-mono uppercase tracking-widest text-accent mb-2">Strategie</div>
                                <h3 className="font-sans font-semibold text-primary text-lg mb-2">Een snellere website levert meer klanten op</h3>
                                <p className="font-sans text-primary/70 text-sm">Zo verdient elke seconde laadtijd zich terug.</p>
                            </Link>
                        </div>
                    </section>
                </div>
            </article>

            <section className="w-full pb-32 px-6">
                <div className="max-w-4xl mx-auto bg-primary rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
                    <h2 className="relative z-10 font-drama italic text-background text-3xl sm:text-4xl md:text-5xl mb-6">Meer halen uit je mobiele bezoekers</h2>
                    <p className="relative z-10 font-sans text-background/70 text-lg mb-10 max-w-xl mx-auto">In een gesprek van een halfuur lopen we jouw landingspagina door op een telefoon en zie je meteen waar de conversie blijft liggen. Geen verkooppraatje, wel een helder plan.</p>
                    <Link to="/contact" className="relative z-10 btn-magnetic inline-flex items-center justify-center bg-accent text-background font-sans font-bold text-lg px-10 py-4 rounded-[2rem] hover:bg-accent/90 transition-colors">Neem contact op</Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
