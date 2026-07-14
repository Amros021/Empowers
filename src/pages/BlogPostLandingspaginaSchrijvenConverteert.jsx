import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ChevronRight, User } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function BlogPostLandingspaginaSchrijvenConverteert() {
    useEffect(() => { window.scrollTo(0, 0); }, []);

    const faqItems = [
        {
            question: "Hoe lang moet de tekst op een landingspagina zijn?",
            answer: "Dat hangt af van je aanbod. Voor een simpele lead magnet of gratis adviesgesprek is 300 tot 500 woorden genoeg. Voor een duurdere dienst of product heb je meer overtuigingskracht nodig en werk je richting 800 tot 1200 woorden. De regel: hoe hoger de drempel, hoe meer tekst."
        },
        {
            question: "Wat is het verschil tussen een landingspagina en een salespagina?",
            answer: "Een landingspagina vangt verkeer op na een klik op een advertentie of link. Een salespagina is een specifiek type landingspagina dat gericht is op directe verkoop. Alle salespagina's zijn landingspagina's, maar niet alle landingspagina's zijn salespagina's."
        },
        {
            question: "Hoeveel CTA's moet je op een landingspagina plaatsen?",
            answer: "Minimaal twee, maximaal vier. Eentje bovenaan in het zicht, eentje na je social proof en eentje onderaan. Gebruik steeds dezelfde actie. Meerdere verschillende CTA's op een pagina verlagen je conversie omdat ze keuzestress veroorzaken."
        },
        {
            question: "Moet ik het menu weglaten op een landingspagina?",
            answer: "Ja, in de meeste gevallen wel. Navigatie geeft bezoekers de kans om weg te klikken zonder actie te ondernemen. Onderzoek laat zien dat landingspagina's zonder navigatiemenu gemiddeld 20 tot 30% meer conversies halen dan pagina's met menu."
        },
        {
            question: "Welke tools zijn geschikt om een landingspagina te maken?",
            answer: "Populaire tools zijn Unbounce, Leadpages en Instapage. Kosten variëren van 30 tot 200 euro per maand. Je kunt ook een pagina bouwen in WordPress of direct in je eigen website. Het gaat niet om de tool maar om de structuur en de tekst."
        },
        {
            question: "Hoe snel moet een landingspagina laden?",
            answer: "Binnen 3 seconden. Elke seconde vertraging kost je gemiddeld 7% conversie. Test je snelheid met Google PageSpeed Insights. Comprimeer afbeeldingen, vermijd zware scripts en kies snelle hosting."
        },
        {
            question: "Kan ik een landingspagina ook gebruiken voor SEO?",
            answer: "Ja, maar het vergt een andere aanpak. SEO-landingspagina's hebben meer tekst nodig, interne links en een duidelijke koppen-structuur. Voor betaald verkeer houd je de pagina kort en gefocust. Combineer beide door een lange pagina te maken met een prominente CTA bovenaan."
        }
    ];

    return (
        <main className="min-h-screen selection:bg-accent/30 selection:text-dark flex flex-col bg-background">
            <Helmet>
                <title>Landingspagina schrijven die converteert: zo pak je het aan | Empowers</title>
                <meta name="description" content="Een goede landingspagina schrijven begint bij de juiste structuur. Lees hoe je koppen, tekst en CTA's inzet zodat bezoekers actie ondernemen." />
                <link rel="canonical" href="https://www.empowers.nl/blogs/strategie/landingspagina-schrijven-converteert" />
                <meta property="og:title" content="Landingspagina schrijven die converteert: zo pak je het aan | Empowers" />
                <meta property="og:description" content="Een goede landingspagina schrijven begint bij de juiste structuur. Lees hoe je koppen, tekst en CTA's inzet zodat bezoekers actie ondernemen." />
                <meta property="og:image" content="https://www.empowers.nl/images/blogs/landingspagina-schrijven-converteert.jpg" />
                <meta property="og:url" content="https://www.empowers.nl/blogs/strategie/landingspagina-schrijven-converteert" />
                <meta property="og:type" content="article" />
                <meta name="article:published_time" content="2026-04-05T00:00:00+02:00" />
                <meta name="article:author" content="Empowers" />
                <meta name="article:section" content="Strategie" />
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Article",
                        "headline": "Landingspagina schrijven die converteert: zo pak je het aan",
                        "description": "Een goede landingspagina schrijven begint bij de juiste structuur. Lees hoe je koppen, tekst en CTA's inzet zodat bezoekers actie ondernemen.",
                        "image": "https://www.empowers.nl/images/blogs/landingspagina-schrijven-converteert.jpg",
                        "author": {
                            "@type": "Organization",
                            "name": "Empowers"
                        },
                        "publisher": { "@type": "Organization", "name": "Empowers", "url": "https://www.empowers.nl" },
                        "datePublished": "2026-04-05T00:00:00+02:00",
                        "keywords": "landingspagina maken, landingspagina schrijven, landingspagina converteert, conversie verbeteren, landingspagina tekst"
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
                                "name": "Landingspagina schrijven die converteert: zo pak je het aan",
                                "item": "https://www.empowers.nl/blogs/strategie/landingspagina-schrijven-converteert"
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
        <meta name="twitter:title" content="Landingspagina schrijven die converteert: zo pak je het aan" />
        <meta name="twitter:description" content="Een goede landingspagina schrijven begint bij de juiste structuur. Lees hoe je koppen, tekst en CTA's inzet zodat bezoek" />
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
                        <span className="text-primary truncate">Landingspagina schrijven</span>
                    </nav>

                    {/* Header */}
                    <header className="mb-16">
                        <div className="inline-block px-3 py-1 bg-accent/10 text-accent font-mono text-xs uppercase tracking-widest rounded-full mb-6">
                            Strategie
                        </div>
                        <h1 className="font-sans font-bold text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight mb-8">
                            Landingspagina schrijven die converteert: zo pak je het aan
                        </h1>

                        {/* Meta information */}
                        <div className="flex flex-wrap items-center gap-6 text-sm font-sans text-primary/60 border-y border-primary/10 py-6">
                            <div className="flex items-center gap-2">
                                <User className="w-4 h-4" />
                                <span>Empowers Redactie</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>5 april 2026</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>9 minuten leestijd</span>
                            </div>
                        </div>
                    </header>

                    {/* Featured Image */}
                    <figure className="w-full h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden mb-16 relative bg-primary">
                        <div className="absolute inset-0 bg-[url('/images/blogs/landingspagina-schrijven-converteert.jpg')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </figure>

                    {/* Main Content */}
                    <div className="prose prose-lg max-w-none text-gray-700">
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een landingspagina maken die converteert begint bij de tekst, niet bij het ontwerp. De juiste woorden op de juiste plek bepalen of een bezoeker actie onderneemt of wegklikt. Bij onze klanten zien we dat een goed geschreven landingspagina gemiddeld 5 tot 15% conversieratio haalt. Een slecht geschreven pagina met een prachtig ontwerp? Die blijft hangen op 1 tot 2%.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Waarom begint een goede landingspagina bij de tekst?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De meeste ondernemers beginnen bij het design. Kleuren kiezen, een mooie foto zoeken, het logo plaatsen. Maar bezoekers lezen voordat ze klikken. Ze scannen je kop, lezen je eerste zinnen en besluiten in drie seconden of ze blijven. Die beslissing wordt genomen op basis van woorden, niet op basis van kleuren.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Dat betekent niet dat design er niet toe doet. Maar een goede tekst op een matig ontwerp presteert beter dan een matige tekst op een prachtig ontwerp. We merken in de praktijk dat ondernemers die eerst hun tekst schrijven en dan pas gaan ontwerpen, sneller live gaan en betere resultaten halen.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe schrijf je een kop die mensen laat stoppen met scrollen?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Je kop is het eerste wat een bezoeker ziet. Hij moet in een zin duidelijk maken wat de bezoeker krijgt. Niet wat jij doet, maar wat het de bezoeker oplevert. "Wij bouwen websites" is zwak. "Meer klanten via een website die voor je werkt" is sterk.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een goede kop sluit direct aan op de advertentie of zoekopdracht waarmee iemand op je pagina terechtkomt. Als je <Link to="/google-ads" className="text-accent hover:underline">Google Ads</Link> draait op "boekhouder Amsterdam", dan moet je kop gaan over een boekhouder in Amsterdam. Niet over je kantoor in heel Nederland. Die match tussen advertentie en pagina noemen we message match, en het is een van de belangrijkste factoren voor conversie.
                        </p>

                        <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Drie formules voor sterke koppen</h3>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De resultaat-kop werkt het best voor dienstverleners: "Meer [resultaat] zonder [pijnpunt]". Denk aan "Meer leads zonder advertentiebudget te verspillen". De hoe-kop werkt goed voor informatieve pagina's: "Hoe je [probleem] oplost in [tijdframe]". En de specifieke kop werkt voor producten: "[Aantal] ondernemers kozen al voor [product]. Dit is waarom."
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Welke structuur werkt het best voor een landingspagina?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Er is een vaste volgorde die keer op keer werkt. Bovenaan je kop met de belofte. Daaronder een subkop die de belofte verduidelijkt of het resultaat benoemt. Dan een korte uitleg van twee tot drie zinnen over wat je aanbiedt. Gevolgd door social proof: reviews, klantverhalen of logo's van bedrijven waarmee je werkt.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Na de social proof komen je voordelen of features. Niet als droge opsomming, maar als korte blokken die elk een probleem koppelen aan een oplossing. Sluit af met een CTA die de bezoeker precies vertelt wat de volgende stap is. "Plan een gratis gesprek" werkt beter dan "Verstuur". Een webshop die we begeleidden ging van 2% naar 9% conversie door deze volgorde aan te houden op hun campagnepagina's.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe schrijf je tekst die overtuigt zonder opdringerig te zijn?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Schrijf vanuit het perspectief van de bezoeker. Niet "Wij bieden uitstekende service" maar "Je krijgt binnen 24 uur antwoord op elke vraag". Niet "Onze ervaren specialisten" maar "Iemand die jouw branche kent en weet wat werkt". Bezoekers willen weten wat het hen oplevert, niet wat jij allemaal kunt.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Gebruik korte zinnen. Wissel lange en korte af. Schrijf zoals je praat. Vermijd woorden als "faciliteren", "synergie" of "op maat". Schrijf in plaats daarvan: "regelen", "samenwerking die werkt" en "passend voor jouw bedrijf". Hoe eenvoudiger je taal, hoe sneller een bezoeker begrijpt wat je aanbiedt. En begrip leidt tot vertrouwen.
                        </p>

                        <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">De kracht van bezwaren wegnemen</h3>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Elke bezoeker heeft twijfels. "Is dit wel iets voor mij?" "Wat als het niet werkt?" "Wat kost het eigenlijk?" Benoem die twijfels op je pagina en geef er direct antwoord op. Dat is geen zwakte, dat is verkoopkracht. We krijgen deze vraag wekelijks van ondernemers die hun <Link to="/meta-ads" className="text-accent hover:underline">Meta Ads</Link> campagnes willen verbeteren. De advertentie klopt, maar de pagina neemt de twijfel niet weg.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat maakt een CTA sterk genoeg om op te klikken?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een goede CTA doet drie dingen: hij is zichtbaar, hij is specifiek en hij voelt laagdrempelig. "Neem contact op" is vaag. "Plan je gratis adviesgesprek van 15 minuten" is concreet. De bezoeker weet precies wat er gaat gebeuren en hoeveel tijd het kost.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Plaats je CTA minimaal twee keer op de pagina. Eentje in het zicht zodra de pagina laadt, zonder te scrollen. En eentje onderaan na je volledige verhaal. Bij langere pagina's voeg je er een derde toe halverwege. Zorg dat de knop qua kleur contrasteert met de rest van de pagina. Een CTA die opgaat in het ontwerp wordt over het hoofd gezien.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe gebruik je social proof op je landingspagina?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Reviews en klantverhalen zijn je sterkste overtuigingsmiddel. Niet omdat jij zegt dat je goed bent, maar omdat anderen dat bevestigen. Plaats minimaal drie reviews op je pagina. Gebruik echte namen en, als het kan, foto's. Hoe specifieker de review, hoe sterker het effect. "Goede service" zegt weinig. "Binnen twee weken 40% meer aanvragen via onze nieuwe pagina" zegt alles.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Logo's van bedrijven waarmee je werkt helpen ook. Ze hoeven niet groot of beroemd te zijn. Het feit dat er andere bedrijven zijn die je vertrouwen, verlaagt de drempel voor nieuwe bezoekers. Plaats ze direct onder je kop of net boven je CTA voor het sterkste effect.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Welke fouten zie je het vaakst bij landingspagina's?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De eerste fout: te veel vertellen. Een landingspagina is geen uitputtend verhaal over je bedrijf. Houd het bij een aanbod, een doelgroep en een actie. De tweede fout: geen message match. Als je advertentie spreekt over "gratis SEO-scan" en je landingspagina begint over je complete dienstenpakket, verlies je de bezoeker in de eerste seconde.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Andere veelgemaakte fouten: te veel formuliervelden, een trage laadtijd, geen mobiele versie en een CTA die niet opvalt. Een veelgemaakte fout die we tegenkomen is een formulier met zes of meer velden. Terugbrengen naar drie velden verhoogt de conversie in de meeste gevallen met 25 tot 50%. Meer weten over <Link to="/blogs/strategie/goede-conversieratio-benchmarks-per-branche" className="text-accent hover:underline">wat een goede conversieratio is per branche</Link>? Dat geeft je een realistisch referentiepunt.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe test en verbeter je je landingspagina na publicatie?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Publiceren is het begin, niet het einde. Start met A/B-testen: maak twee versies van je pagina en test een element per keer. Een andere kop, een andere CTA-tekst of een andere volgorde van je secties. Na 300 tot 500 bezoekers per versie heb je genoeg data om te kiezen.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Bekijk ook je heatmaps. Tools als Hotjar laten zien waar bezoekers klikken, hoe ver ze scrollen en waar ze afhaken. Als 80% van je bezoekers niet voorbij de eerste sectie komt, klopt je kop niet of laadt je pagina te traag. Meet, pas aan, test opnieuw. Dat is hoe landingspagina's beter worden. Niet in een keer, maar stap voor stap.
                        </p>

                        <p className="text-primary/80 leading-relaxed mb-6">
                            Wil je weten of jouw landingspagina's beter kunnen presteren? We kijken er graag naar. <Link to="/contact" className="text-accent hover:underline">Plan een gratis gesprek</Link> en we bespreken wat er beter kan.
                        </p>
                    </div>

                    {/* FAQ Section */}
                    <section className="mt-16 mb-12">
                        <h2 className="text-3xl font-bold text-primary mb-8">Veelgestelde vragen over landingspagina's schrijven</h2>
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
                    <h2 className="relative z-10 font-drama italic text-background text-3xl sm:text-4xl md:text-5xl mb-6">Pagina's die presteren?</h2>
                    <p className="relative z-10 font-sans text-background/70 text-lg mb-10 max-w-xl mx-auto">
                        Een sterke landingspagina haalt meer uit elke euro advertentiebudget. Wij helpen je met tekst en structuur die bezoekers omzetten in klanten.
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
