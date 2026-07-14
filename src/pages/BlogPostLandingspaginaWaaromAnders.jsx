import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ChevronRight, User } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function BlogPostLandingspaginaWaaromAnders() {
    useEffect(() => { window.scrollTo(0, 0); }, []);

    const faqItems = [
        {
            question: "Wat is een landingspagina precies?",
            answer: "Een landingspagina is een losstaande pagina op je website die maar een doel heeft: bezoekers een specifieke actie laten uitvoeren. Denk aan een offerte aanvragen, een e-book downloaden of een afspraak inplannen. Alles op de pagina werkt naar dat ene doel toe."
        },
        {
            question: "Wat is het verschil tussen een landingspagina en een homepage?",
            answer: "Je homepage is de voordeur van je website en laat alles zien wat je bedrijf doet. Een landingspagina focust op een actie. Geen menu, geen afleiding, geen tien verschillende knoppen. Eenvoud wint."
        },
        {
            question: "Hoeveel landingspagina's heb ik nodig?",
            answer: "Dat hangt af van het aantal campagnes en doelgroepen. Als je drie diensten adverteert via Google Ads, heb je minimaal drie landingspagina's nodig. Elke campagne verdient een pagina die precies aansluit op de zoekintentie."
        },
        {
            question: "Kan ik mijn homepage gebruiken als landingspagina?",
            answer: "Dat kan, maar het werkt bijna nooit goed. Je homepage bevat te veel afleidingen. Bezoekers die via een advertentie komen, willen direct het antwoord op hun vraag. Een losse landingspagina converteert gemiddeld 2 tot 5 keer beter dan een homepage."
        },
        {
            question: "Wat kost het om een landingspagina te laten maken?",
            answer: "Een goede landingspagina laten maken kost tussen de 500 en 3000 euro, afhankelijk van het ontwerp en de functionaliteit. Zelf bouwen kan met tools als Unbounce of Leadpages vanaf 50 euro per maand. De investering verdien je meestal snel terug door hogere conversies."
        },
        {
            question: "Hoe meet ik of mijn landingspagina goed werkt?",
            answer: "Meet je conversieratio: het percentage bezoekers dat de gewenste actie uitvoert. Een conversieratio boven de 5% is goed voor de meeste branches. Gebruik Google Analytics of een tool als Hotjar om te zien waar bezoekers afhaken."
        },
        {
            question: "Hoe snel moet een landingspagina laden?",
            answer: "Binnen 3 seconden. Elke seconde vertraging kost je 7% conversie. Test je snelheid via Google PageSpeed Insights. Comprimeer afbeeldingen, vermijd onnodige scripts en kies snelle hosting."
        }
    ];

    return (
        <main className="min-h-screen selection:bg-accent/30 selection:text-dark flex flex-col bg-background">
            <Helmet>
                <title>Wat is een landingspagina en waarom is hij anders dan je homepage? | Empowers</title>
                <meta name="description" content="Een landingspagina is een pagina met maar een doel: conversie. Lees waarom hij anders werkt dan je homepage en hoe je er meer klanten mee binnenhaalt." />
                <link rel="canonical" href="https://www.empowers.nl/blogs/strategie/landingspagina-waarom-hij-anders-homepage" />
                <meta property="og:title" content="Wat is een landingspagina en waarom is hij anders dan je homepage? | Empowers" />
                <meta property="og:description" content="Een landingspagina is een pagina met maar een doel: conversie. Lees waarom hij anders werkt dan je homepage en hoe je er meer klanten mee binnenhaalt." />
                <meta property="og:image" content="https://www.empowers.nl/images/blogs/landingspagina-waarom-hij-anders-homepage.jpg" />
                <meta property="og:url" content="https://www.empowers.nl/blogs/strategie/landingspagina-waarom-hij-anders-homepage" />
                <meta property="og:type" content="article" />
                <meta name="article:published_time" content="2026-04-04T00:00:00+02:00" />
                <meta name="article:author" content="Empowers" />
                <meta name="article:section" content="Strategie" />
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Article",
                        "headline": "Wat is een landingspagina en waarom is hij anders dan je homepage?",
                        "description": "Een landingspagina is een pagina met maar een doel: conversie. Lees waarom hij anders werkt dan je homepage en hoe je er meer klanten mee binnenhaalt.",
                        "image": "https://www.empowers.nl/images/blogs/landingspagina-waarom-hij-anders-homepage.jpg",
                        "author": {
                            "@type": "Organization",
                            "name": "Empowers"
                        },
                        "publisher": { "@type": "Organization", "name": "Empowers", "url": "https://www.empowers.nl" },
                        "datePublished": "2026-04-04T00:00:00+02:00",
                        "keywords": "wat is een landingspagina, landingspagina vs homepage, landingspagina maken, conversie verbeteren"
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
                                "name": "Nieuws",
                                "item": "https://www.empowers.nl/blogs"
                            },
                            {
                                "@type": "ListItem",
                                "position": 3,
                                "name": "Strategie",
                                "item": "https://www.empowers.nl/blogs/strategie"
                            },
                            {
                                "@type": "ListItem",
                                "position": 4,
                                "name": "Wat is een landingspagina en waarom is hij anders dan je homepage?",
                                "item": "https://www.empowers.nl/blogs/strategie/landingspagina-waarom-hij-anders-homepage"
                            }
                        ]
                    })}
                </script>
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": faqItems.map(item => ({
                            "@type": "Question",
                            "name": item.question,
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": item.answer
                            }
                        }))
                    })}
                </script>
                    <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Wat is een landingspagina en waarom is hij anders dan je homepage?" />
        <meta name="twitter:description" content="Een landingspagina is een pagina met maar een doel: conversie. Lees waarom hij anders werkt dan je homepage en hoe je er" />
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
                            Wat is een landingspagina en waarom is hij anders dan je homepage?
                        </h1>

                        {/* Meta information */}
                        <div className="flex flex-wrap items-center gap-6 text-sm font-sans text-primary/60 border-y border-primary/10 py-6">
                            <div className="flex items-center gap-2">
                                <User className="w-4 h-4" />
                                <span>Empowers Redactie</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>4 april 2026</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>8 minuten leestijd</span>
                            </div>
                        </div>
                    </header>

                    {/* Featured Image */}
                    <figure className="w-full h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden mb-16 relative bg-primary">
                        <div className="absolute inset-0 bg-[url('/images/blogs/landingspagina-waarom-hij-anders-homepage.jpg')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </figure>

                    {/* Main Content */}
                    <div className="prose prose-lg max-w-none text-gray-700">
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een landingspagina is een losstaande pagina op je website die maar een doel heeft: bezoekers een specifieke actie laten uitvoeren. Dat kan een offerte aanvragen zijn, een e-book downloaden of een afspraak inplannen. Het verschil met je homepage? Je homepage laat alles zien. Een landingspagina focust op een ding. En dat maakt hem gemiddeld 2 tot 5 keer effectiever dan je homepage als het om conversies gaat.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Waarom werkt je homepage niet als landingspagina?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Je homepage is de voordeur van je bedrijf. Bezoekers kunnen naar je diensten kijken, je team leren kennen, je blog lezen of contact opnemen. Dat is prima voor iemand die je bedrijf wil verkennen. Maar voor iemand die via een <Link to="/google-ads" className="text-accent hover:underline">Google Ads campagne</Link> op je site terechtkomt, is al die keuze een probleem.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Elke extra link, elke extra knop en elke extra pagina in je menu is een afleiding. En afleiding kost conversies. Bij onze klanten zien we dat een homepage gemiddeld een conversieratio van 1 tot 2% haalt. Een goede landingspagina zit op 5 tot 15%. Dat verschil is geen toeval.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat maakt een landingspagina zo effectief?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een landingspagina werkt omdat hij een bezoeker precies geeft wat die zoekt. Niet meer, niet minder. Iemand die zoekt op "offerte zonnepanelen" wil geen verhaal over je bedrijfsgeschiedenis. Die wil weten wat het kost en hoe snel het geregeld is.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De kracht zit in de focus. Geen navigatiemenu. Geen sidebar met andere diensten. Geen footer vol links. Alleen een kop die de belofte maakt, tekst die de belofte onderbouwt en een knop die de actie triggert. Dat klinkt simpel, maar de meeste bedrijven doen het niet.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Welke elementen heeft een goede landingspagina?</h2>

                        <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Een sterke kop die de belofte maakt</h3>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De eerste zin op je landingspagina bepaalt of iemand blijft of wegklikt. Schrijf een kop die direct aansluit op de zoekopdracht of advertentie waarmee de bezoeker is binnengekomen. Zoekt iemand op "website laten maken kosten"? Dan moet je kop gaan over kosten, niet over je werkwijze.
                        </p>

                        <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Social proof die vertrouwen bouwt</h3>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Reviews, klantverhalen, logo's van bedrijven waarmee je werkt. Alles wat laat zien dat andere mensen je vertrouwen. We merken in de praktijk dat pagina's met minimaal drie reviews 30 tot 40% beter converteren dan pagina's zonder.
                        </p>

                        <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Een duidelijke call-to-action</h3>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Je CTA-knop is het belangrijkste element op de pagina. Maak hem groot, contrastrijk en duidelijk. "Ontvang je gratis offerte" werkt beter dan "Verstuur". Plaats de knop meerdere keren op de pagina: bovenaan, in het midden en onderaan.
                        </p>

                        <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Weinig formuliervelden</h3>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Elk extra veld dat je toevoegt kost conversies. Voor een lead heb je in de meeste gevallen genoeg aan een naam, e-mailadres en telefoonnummer. Meer vragen? Dan hak je daar later in het verkoopgesprek op in. Een veelgemaakte fout die we tegenkomen is een formulier met acht velden. Terugbrengen naar drie verhoogt de conversie vaak met 25 tot 50%.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wanneer heb je een landingspagina nodig?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Eigenlijk altijd als je betaald verkeer naar je website stuurt. Draai je <Link to="/google-ads" className="text-accent hover:underline">Google Ads</Link>? Maak een landingspagina per campagne. Adverteer je via <Link to="/meta-ads" className="text-accent hover:underline">Meta Ads</Link>? Zorg dat je advertentie linkt naar een pagina die precies aansluit op de boodschap in je advertentie.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Ook voor organisch verkeer werken landingspagina's goed. Schrijf je een blog over een specifiek onderwerp? Verwijs dan naar een landingspagina die de volgende stap biedt. Van informatief naar actie. Van lezer naar lead.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe maak je een landingspagina die converteert?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Begin bij je doelgroep, niet bij je ontwerp. Wat zoekt de bezoeker? Wat is zijn grootste twijfel? Wat heeft hij nodig om actie te ondernemen? Beantwoord die drie vragen en je hebt de basis van je pagina.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Vervolgens bouw je de pagina op in een logische volgorde: kop met belofte, korte uitleg, social proof, voordelen, en een CTA. Houd de tekst kort. Gebruik witruimte. Zorg dat de pagina binnen 3 seconden laadt. Een campagne die we vorige maand opzetten voor een installatiebedrijf haalde een conversieratio van 11% door precies dit stappenplan te volgen.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Welke fouten moet je vermijden bij landingspagina's?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De grootste fout is te veel willen vertellen. Een landingspagina is geen productcatalogus. Houd het bij een aanbod per pagina. De tweede fout: je advertentie belooft iets anders dan je pagina laat zien. Als je advertentie zegt "gratis adviesgesprek" en je pagina vraagt meteen om een betaling, ben je bezoekers kwijt.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Andere veelvoorkomende fouten: geen mobiele versie, trage laadtijd, onduidelijke CTA of een formulier dat langer is dan nodig. We krijgen deze vraag wekelijks van ondernemers die hun advertentiebudget zien verdampen. In 9 van de 10 gevallen ligt het niet aan de advertentie, maar aan de pagina waar die naartoe linkt.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat is het verschil tussen een landingspagina en een productpagina?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een productpagina beschrijft een product of dienst en biedt meerdere opties: kopen, vergelijken, reviews lezen, gerelateerde producten bekijken. Een landingspagina is gestroomlijnder. Geen afleiding, geen vergelijkingen, geen links naar andere pagina's. Alleen de route naar conversie.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Voor webshops werkt een hybride aanpak vaak het best. Gebruik landingspagina's voor je advertenties en productpagina's voor organisch verkeer. Zo bedien je beide doelgroepen zonder concessies te doen. Meer weten over <Link to="/blogs/strategie/goede-conversieratio-benchmarks-per-branche" className="text-accent hover:underline">conversieratio benchmarks per branche</Link>? Dat helpt je om realistische doelen te stellen.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe test je of je landingspagina werkt?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            A/B-testen is de snelste manier. Maak twee versies van je pagina met een verschil: een andere kop, een andere kleur van je CTA-knop of minder tekst. Stuur de helft van je verkeer naar versie A en de andere helft naar versie B. Na 200 tot 500 bezoekers per versie weet je welke beter presteert.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Meet ook je bouncepercentage. Als meer dan 70% van je bezoekers meteen weer vertrekt, klopt je boodschap niet met de verwachting. Dat kan aan je advertentietekst liggen of aan de eerste seconden van je pagina. Check daarnaast je formulier: hoeveel mensen beginnen eraan versus hoeveel het afmaken? Daar zit vaak de grootste winst.
                        </p>
                    </div>

                    {/* FAQ Section */}
                    <section className="mt-16 mb-12">
                        <h2 className="text-3xl font-bold text-primary mb-8">Veelgestelde vragen over landingspagina's</h2>
                        <div className="space-y-6 not-prose">
                            {faqItems.map((item, index) => (
                                <div key={index} className="border border-primary/10 rounded-xl p-6">
                                    <h3 className="font-sans font-semibold text-primary text-lg mb-3">
                                        {item.question}
                                    </h3>
                                    <p className="font-sans text-primary/70 leading-relaxed">
                                        {item.answer}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </section>

                </div>
            </article>

            {/* Bottom CTA */}
            <section className="w-full pb-32 px-6">
                <div className="max-w-4xl mx-auto bg-primary rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
                    <h2 className="relative z-10 font-drama italic text-background text-3xl sm:text-4xl md:text-5xl mb-6">Meer conversies uit je verkeer?</h2>
                    <p className="relative z-10 font-sans text-background/70 text-lg mb-10 max-w-xl mx-auto">
                        Een sterke landingspagina maakt het verschil tussen advertentiebudget dat verdampt en advertentiebudget dat rendeert. Wij helpen je met pagina's die presteren.
                    </p>
                    <Link to="/contact" className="relative z-10 btn-magnetic inline-flex items-center justify-center bg-accent text-background font-sans font-bold text-lg px-10 py-4 rounded-[2rem] hover:bg-accent/90 transition-colors">
                        Neem contact op
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
