import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ChevronRight, User } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function BlogPostHeadlineLandingspaginaSchrijvenOvertuigend() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen selection:bg-accent/30 selection:text-dark flex flex-col bg-background">
            <Helmet>
                <title>Overtuigende headline voor je landingspagina schrijven | Empowers</title>
                <meta name="description" content="Een overtuigende headline voor je landingspagina schrijven? Lees wat een sterke kop maakt, welke formules werken en welke fouten je beter vermijdt." />
                <link rel="canonical" href="https://www.empowers.nl/blogs/strategie/headline-landingspagina-schrijven-overtuigend" />
                <meta property="og:title" content="Overtuigende headline voor je landingspagina schrijven | Empowers" />
                <meta property="og:description" content="Een overtuigende headline voor je landingspagina schrijven? Lees wat een sterke kop maakt, welke formules werken en welke fouten je beter vermijdt." />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://www.empowers.nl/blogs/strategie/headline-landingspagina-schrijven-overtuigend" />
                <meta property="og:image" content="https://www.empowers.nl/images/blogs/headline-landingspagina-schrijven-overtuigend.jpg" />
                <meta property="article:published_time" content="2026-07-14T15:00:00+02:00" />
                <meta property="article:author" content="Empowers" />
                <meta property="article:section" content="Strategie" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Overtuigende headline voor je landingspagina schrijven | Empowers" />
                <meta name="twitter:description" content="Een overtuigende headline voor je landingspagina schrijven? Lees wat een sterke kop maakt, welke formules werken en welke fouten je beter vermijdt." />
                <script type="application/ld+json">{JSON.stringify({
                    "@context": "https://schema.org",
                    "@graph": [
                        {
                            "@type": "Article",
                            "headline": "Hoe schrijf je een overtuigende headline voor een landingspagina?",
                            "image": "https://www.empowers.nl/images/blogs/headline-landingspagina-schrijven-overtuigend.jpg",
                            "description": "Een overtuigende headline voor je landingspagina schrijven? Lees wat een sterke kop maakt, welke formules werken en welke fouten je beter vermijdt.",
                            "author": { "@type": "Organization", "name": "Empowers" },
                            "publisher": { "@type": "Organization", "name": "Empowers", "url": "https://www.empowers.nl" },
                            "datePublished": "2026-07-14T15:00:00+02:00",
                            "dateModified": "2026-07-14T15:00:00+02:00",
                            "url": "https://www.empowers.nl/blogs/strategie/headline-landingspagina-schrijven-overtuigend"
                        },
                        {
                            "@type": "BreadcrumbList",
                            "itemListElement": [
                                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.empowers.nl" },
                                { "@type": "ListItem", "position": 2, "name": "Nieuws", "item": "https://www.empowers.nl/nieuws" },
                                { "@type": "ListItem", "position": 3, "name": "Strategie", "item": "https://www.empowers.nl/blogs/strategie" },
                                { "@type": "ListItem", "position": 4, "name": "Hoe schrijf je een overtuigende headline voor een landingspagina?", "item": "https://www.empowers.nl/blogs/strategie/headline-landingspagina-schrijven-overtuigend" }
                            ]
                        },
                        {
                            "@type": "FAQPage",
                            "mainEntity": [
                                { "@type": "Question", "name": "Hoe lang mag een headline op een landingspagina zijn?", "acceptedAnswer": { "@type": "Answer", "text": "Er is geen harde limiet, maar kort wint bijna altijd. Mik op zes tot twaalf woorden. De headline moet in een oogopslag te scannen zijn, ook op een telefoonscherm. Heb je meer uitleg nodig, zet die dan in de subheadline eronder in plaats van de kop zelf op te rekken." } },
                                { "@type": "Question", "name": "Wat is het verschil tussen een headline en een subheadline?", "acceptedAnswer": { "@type": "Answer", "text": "De headline is de grote kop die de kern van je belofte draagt. De subheadline is de kleinere regel eronder die uitlegt hoe je die belofte waarmaakt of voor wie het aanbod bedoeld is. Samen vormen ze een geheel: de kop trekt aandacht, de subkop neemt twijfel weg." } },
                                { "@type": "Question", "name": "Moet het zoekwoord in de headline van mijn landingspagina staan?", "acceptedAnswer": { "@type": "Answer", "text": "Voor advertentieverkeer wel, in elk geval de kern ervan. Bezoekers die op een advertentie over boekhoudsoftware klikken, willen dat woord terugzien op de pagina. Die herkenning verlaagt de drempel en verhoogt bij advertenties ook je kwaliteitsscore. Het hoeft niet letterlijk, de betekenis moet kloppen." } },
                                { "@type": "Question", "name": "Werkt een vraag als headline?", "acceptedAnswer": { "@type": "Answer", "text": "Soms, maar alleen als de lezer de vraag met ja beantwoordt en het antwoord bij jou vindt. Een vraag als headline is riskanter dan een belofte, omdat een verkeerd gekozen vraag meteen afstand schept. Test een vraagvariant altijd tegen een variant die het resultaat direct benoemt." } },
                                { "@type": "Question", "name": "Hoe weet ik of mijn headline goed genoeg is?", "acceptedAnswer": { "@type": "Answer", "text": "Door hem te testen tegen een alternatief. Meningen over koppen lopen altijd uiteen, data niet. Zet twee varianten live in een A/B-test en kijk welke meer conversies oplevert. Let daarnaast op je bouncepercentage: haken bezoekers direct af, dan is de headline een logische eerste verdachte." } },
                                { "@type": "Question", "name": "Hoe combineer je SEO en conversie in één headline?", "acceptedAnswer": { "@type": "Answer", "text": "Op een landingspagina voor advertentieverkeer wint conversie, want die pagina hoeft niet te ranken. Moet de pagina ook organisch gevonden worden, verwerk het zoekwoord dan op een natuurlijke plek in de kop en houd de belofte overeind. Een kop die alleen voor Google geschreven is converteert zelden, en andersom geldt precies hetzelfde." } }
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
                        <span className="text-primary truncate">Overtuigende headline schrijven</span>
                    </nav>

                    {/* Header */}
                    <header className="mb-16">
                        <div className="inline-block px-3 py-1 bg-accent/10 text-accent font-mono text-xs uppercase tracking-widest rounded-full mb-6">
                            Strategie
                        </div>
                        <h1 className="font-sans font-bold text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight mb-8">
                            Hoe schrijf je een overtuigende headline voor een landingspagina?
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
                                <span>6 minuten leestijd</span>
                            </div>
                        </div>
                    </header>

                    {/* Featured Image */}
                    <figure className="w-full h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden mb-16 relative bg-primary">
                        <div className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-overlay" style={{backgroundImage: "url('/images/blogs/headline-landingspagina-schrijven-overtuigend.jpg')"}}></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </figure>

                    {/* Content */}
                    <div className="prose prose-lg prose-headings:font-sans prose-headings:font-bold prose-headings:text-primary prose-p:font-sans prose-p:text-primary/80 prose-p:leading-relaxed max-w-none">
                        <p className="text-xl md:text-2xl font-medium leading-relaxed mb-10 text-primary">
                            Een overtuigende headline benoemt het resultaat dat de bezoeker zoekt, in taal die hij zelf gebruikt. Duidelijkheid wint van slimheid. De bezoeker moet binnen enkele seconden snappen wat je aanbiedt en wat het hem oplevert, anders is hij weg voordat de rest van je pagina een kans krijgt.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Waarom bepaalt je headline zoveel van je conversie?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Omdat de headline vaak het enige is dat iedereen leest. Een groot deel van je bezoekers scrolt nooit verder dan het eerste scherm. Wat daar staat, beslist of ze blijven of vertrekken.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Dat maakt de kop het punt met de grootste hefboom op je hele pagina. Een betere alinea halverwege bereikt een deel van je bezoekers. Een betere headline bereikt ze allemaal.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            In de pagina's die we voor klanten bouwen, testen we de headline daarom altijd als eerste element. Niet de knopkleur, niet de foto. Eerst de kop, want daar zit de meeste beweging in de cijfers.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat maakt een headline overtuigend?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Drie dingen moeten kloppen. De kop benoemt een concreet resultaat in plaats van een eigenschap. De kop spreekt de juiste persoon aan. En de kop is meteen te begrijpen, zonder nadenken.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Vergelijk "Slimme boekhoudsoftware voor ondernemers" met "Je btw-aangifte in tien minuten, zonder boekhouder". De eerste beschrijft het product. De tweede beschrijft wat er verandert in het leven van de lezer. Die tweede wint.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Gebruik de woorden van je klant, niet je eigen vakjargon. Zegt jouw doelgroep "meer klanten", schrijf dan geen "leadgeneratie". Hoe dichter je bij hun taal blijft, hoe sneller het vertrouwen ontstaat dat jij hun probleem begrijpt.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Welke headline-formules werken op landingspagina's?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De meest betrouwbare opbouw is resultaat plus tijdspad plus bezwaar. Je belooft de uitkomst, geeft aan hoe snel, en haalt de grootste twijfel weg. "Binnen 30 dagen hoger in Google, zonder maandcontract" volgt precies dat patroon.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een tweede sterke vorm is de hoe-zonder-constructie: het gewenste resultaat zonder de gevreesde pijn. "Meer aanvragen uit je website zonder meer advertentiebudget" spreekt iedereen aan die het huidige budget al hoog vindt.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            En soms is bewijs de beste kop. Als je een sterk cijfer hebt dat je kunt onderbouwen, zet het vooraan: "417 webshops gingen je voor". Cijfers stoppen de scrollende duim. Verzin ze alleen nooit, want een claim die je niet kunt waarmaken breekt meer af dan hij opbouwt.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Twijfel je welke richting past, schrijf er dan eerst tien. De eerste versies zijn vrijwel altijd braaf en beschrijvend, want die volgen de woorden die al in je hoofd zaten. Ergens rond versie zeven wordt het scherp. Kies daarna niet de mooiste, maar de duidelijkste: de variant die een vreemde in één keer snapt.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe sluit je headline aan op je advertenties?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Bezoekers uit advertenties hebben al een belofte gezien voordat ze op je pagina landen. Je headline moet die belofte herhalen. Dit heet message match: de advertentie en de pagina vertellen hetzelfde verhaal.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Klikt iemand op een advertentie over "dakisolatie in Utrecht" en landt hij op een pagina met de kop "Welkom bij bouwbedrijf Jansen", dan is de verwarring compleet. De bezoeker twijfelt of hij goed zit en klikt terug. Dat kost je de klik én de advertentie-euro's.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Adverteer je op meerdere thema's, maak dan per thema een eigen pagina met een eigen kop. Hoe je een landingspagina afstemt op je campagnes lees je in ons artikel over <Link to="/blogs/strategie/stem-landingspagina-af-google-ads" className="text-accent hover:underline">je landingspagina afstemmen op Google Ads</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Welke fouten zie je het vaakst in headlines?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De grootste: slim willen zijn. Woordgrappen en creatieve vondsten voelen goed tijdens het schrijven, maar een bezoeker die twee seconden moet puzzelen is een bezoeker die vertrekt. Duidelijk verslaat origineel, elke keer weer.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Tweede fout: over jezelf beginnen. Koppen als "Al 25 jaar uw betrouwbare partner" gaan over jou, niet over de bezoeker. Draai het om. De lezer wil weten wat hij krijgt, niet hoe lang jij al bestaat.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Derde fout: vaagheid. "Wij helpen bedrijven groeien" kan over alles gaan en raakt daardoor niemand. Hoe specifieker de belofte, hoe geloofwaardiger hij wordt. Specifiek voelt als echt, vaag voelt als marketing.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe test je of je headline werkt?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Niet door erover te vergaderen. Meningen over koppen lopen eindeloos uiteen en niemand heeft aantoonbaar gelijk. De enige eerlijke scheidsrechter is een test met echte bezoekers.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Zet twee varianten tegenover elkaar in een A/B-test en laat de conversiecijfers beslissen. Hoe je zo'n test opzet zonder dure tools lees je in ons stappenplan voor <Link to="/blogs/strategie/ab-testen-landingspagina-stap-voor-stap" className="text-accent hover:underline">A/B-testen op je landingspagina</Link>.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Te weinig verkeer om te testen? Kijk dan naar je bouncepercentage per verkeersbron en vraag vijf klanten wat zij denken dat je pagina belooft. De antwoorden zijn vaak confronterend, en precies daarom waardevol. Wat een klant terugzegt in eigen woorden is trouwens vaak meteen je beste nieuwe kop.
                        </p>

                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een sterke headline benoemt het resultaat, spreekt de taal van je klant en maakt de belofte van je advertentie waar. Wil je weten waarom jouw landingspagina nog niet converteert? We kijken er graag naar. Plan een gratis gesprek via <Link to="/contact" className="text-accent hover:underline">empowers.nl/contact</Link>.
                        </p>

                        <hr className="my-16 border-primary/10" />

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Veelgestelde vragen over headlines op landingspagina's</h2>

                        <div className="space-y-6 not-prose">
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoe lang mag een headline op een landingspagina zijn?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Er is geen harde limiet, maar kort wint bijna altijd. Mik op zes tot twaalf woorden. De headline moet in een oogopslag te scannen zijn, ook op een telefoonscherm. Heb je meer uitleg nodig, zet die dan in de subheadline eronder in plaats van de kop zelf op te rekken.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat is het verschil tussen een headline en een subheadline?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    De headline is de grote kop die de kern van je belofte draagt. De subheadline is de kleinere regel eronder die uitlegt hoe je die belofte waarmaakt of voor wie het aanbod bedoeld is. Samen vormen ze een geheel: de kop trekt aandacht, de subkop neemt twijfel weg.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Moet het zoekwoord in de headline van mijn landingspagina staan?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Voor advertentieverkeer wel, in elk geval de kern ervan. Bezoekers die op een advertentie over boekhoudsoftware klikken, willen dat woord terugzien op de pagina. Die herkenning verlaagt de drempel en verhoogt bij advertenties ook je kwaliteitsscore. Het hoeft niet letterlijk, de betekenis moet kloppen.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Werkt een vraag als headline?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Soms, maar alleen als de lezer de vraag met ja beantwoordt en het antwoord bij jou vindt. Een vraag als headline is riskanter dan een belofte, omdat een verkeerd gekozen vraag meteen afstand schept. Test een vraagvariant altijd tegen een variant die het resultaat direct benoemt.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoe weet ik of mijn headline goed genoeg is?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Door hem te testen tegen een alternatief. Meningen over koppen lopen altijd uiteen, data niet. Zet twee varianten live in een A/B-test en kijk welke meer conversies oplevert. Let daarnaast op je bouncepercentage: haken bezoekers direct af, dan is de headline een logische eerste verdachte.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoe combineer je SEO en conversie in één headline?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Op een landingspagina voor advertentieverkeer wint conversie, want die pagina hoeft niet te ranken. Moet de pagina ook organisch gevonden worden, verwerk het zoekwoord dan op een natuurlijke plek in de kop en houd de belofte overeind. Een kop die alleen voor Google geschreven is converteert zelden, en andersom geldt precies hetzelfde.
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
                    <h2 className="relative z-10 font-drama italic text-background text-3xl sm:text-4xl md:text-5xl mb-6">Een pagina die je belofte waarmaakt?</h2>
                    <p className="relative z-10 font-sans text-background/70 text-lg mb-10 max-w-xl mx-auto">
                        Wij bouwen landingspagina's waar de kop klopt en de rest converteert. Van eerste woord tot laatste klik.
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
