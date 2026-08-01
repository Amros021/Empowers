import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ChevronRight, User } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function BlogPostSeoWebshops10BelangrijksteRegels() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen selection:bg-accent/30 selection:text-dark flex flex-col bg-background">
            <Helmet>
                <title>SEO voor webshops: de 10 belangrijkste regels | Empowers</title>
                <meta name="description" content="SEO voor webshops draait om unieke productteksten, sterke categoriepagina's en schone techniek. Dit zijn de tien regels die het verschil maken." />
                <link rel="canonical" href="https://www.empowers.nl/blogs/seo/seo-webshops-10-belangrijkste-regels" />
                <meta property="og:title" content="SEO voor webshops: de 10 belangrijkste regels" />
                <meta property="og:description" content="Van categoriepagina's tot product schema: de tien regels waarmee webshops meer organisch verkeer en omzet halen." />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://www.empowers.nl/blogs/seo/seo-webshops-10-belangrijkste-regels" />
                <meta property="og:image" content="https://www.empowers.nl/images/blogs/seo-webshops-10-belangrijkste-regels.jpg" />
                <meta property="article:published_time" content="2026-08-01T19:00:00+02:00" />
                <meta property="article:author" content="Empowers" />
                <meta property="article:section" content="SEO" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="SEO voor webshops: de 10 belangrijkste regels" />
                <meta name="twitter:description" content="De tien regels waarmee webshops meer organisch verkeer en omzet halen." />

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@graph": [
                            {
                                "@type": "Article",
                                "headline": "SEO voor webshops: de 10 belangrijkste regels",
                                "description": "SEO voor webshops draait om unieke productteksten, sterke categoriepagina's en schone techniek. Dit zijn de tien regels die het verschil maken.",
                                "image": "https://www.empowers.nl/images/blogs/seo-webshops-10-belangrijkste-regels.jpg",
                                "datePublished": "2026-08-01T19:00:00+02:00",
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
                                    { "@type": "ListItem", "position": 3, "name": "SEO", "item": "https://www.empowers.nl/blogs/seo" },
                                    { "@type": "ListItem", "position": 4, "name": "SEO voor webshops: de 10 belangrijkste regels", "item": "https://www.empowers.nl/blogs/seo/seo-webshops-10-belangrijkste-regels" }
                                ]
                            },
                            {
                                "@type": "FAQPage",
                                "mainEntity": [
                                    {
                                        "@type": "Question",
                                        "name": "Waarom ranken categoriepagina's beter dan productpagina's?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Mensen zoeken meestal op productsoorten zoals 'wandelschoenen heren' en niet op één specifiek artikelnummer. Een categoriepagina matcht die brede zoekvraag, blijft bestaan als producten wisselen en verzamelt alle interne links. Daarom is de categorie voor de meeste webshops de belangrijkste SEO-pagina."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Zijn productbeschrijvingen van de leverancier slecht voor SEO?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Ja, want honderden andere shops gebruiken exact dezelfde tekst. Google kiest dan zelden jouw versie om te tonen. Herschrijf in elk geval de beschrijvingen van je best verkopende producten in eigen woorden, met de vragen van je klant als leidraad."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Wat is product schema en waarom heb ik het nodig?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Product schema is structured data waarmee je prijs, voorraad en beoordelingen machineleesbaar maakt. Google kan die informatie tonen in de zoekresultaten, met sterren en prijs bij je resultaat. Dat valt op en levert doorgaans meer klikken op dan een kaal resultaat."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Hoe ga ik om met uitverkochte producten?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Verwijder de pagina niet meteen. Komt het product terug, laat de pagina staan met een verwachte leverdatum. Verdwijnt het definitief, verwijs de URL dan door naar de vervanger of de categoriepagina. Zo behoud je de opgebouwde linkwaarde en verlies je geen bezoekers op een foutpagina."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Hoe voorkom ik duplicate content bij filters en varianten?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Gebruik canonical tags die alle filter- en sorteervarianten naar de hoofdversie van de categoriepagina wijzen. Kleurvarianten van een product wijzen naar de hoofdvariant. Zo voorkom je dat Google tientallen bijna identieke URL's crawlt en je autoriteit versnippert."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Hoe lang duurt het voordat webshop-SEO resultaat oplevert?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Reken op enkele maanden voordat je duidelijke beweging ziet, afhankelijk van je startpunt en concurrentie. Technische fixes en betere productteksten kunnen sneller effect hebben. Autoriteit opbouwen voor competitieve categorieën is het langzame werk dat het grote verschil maakt."
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
                    {/* Breadcrumbs */}
                    <nav className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-primary/50 mb-12">
                        <Link to="/" className="hover:text-accent transition-colors">Home</Link>
                        <ChevronRight className="w-3 h-3" />
                        <Link to="/nieuws" className="hover:text-accent transition-colors">Nieuws</Link>
                        <ChevronRight className="w-3 h-3" />
                        <Link to="/blogs/seo" className="hover:text-accent transition-colors">SEO</Link>
                        <ChevronRight className="w-3 h-3" />
                        <span className="text-primary truncate">SEO voor webshops</span>
                    </nav>

                    {/* Header */}
                    <header className="mb-16">
                        <div className="inline-block px-3 py-1 bg-accent/10 text-accent font-mono text-xs uppercase tracking-widest rounded-full mb-6">
                            SEO
                        </div>
                        <h1 className="font-sans font-bold text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight mb-8">
                            SEO voor webshops: de 10 belangrijkste regels
                        </h1>
                        <div className="flex flex-wrap items-center gap-6 text-sm font-sans text-primary/60 border-y border-primary/10 py-6">
                            <div className="flex items-center gap-2"><User className="w-4 h-4" /><span>Empowers Redactie</span></div>
                            <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>1 augustus 2026</span></div>
                            <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>9 minuten leestijd</span></div>
                        </div>
                    </header>

                    {/* Featured Image */}
                    <figure className="w-full h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden mb-16 relative bg-primary">
                        <div className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-overlay" style={{ backgroundImage: "url('/images/blogs/seo-webshops-10-belangrijkste-regels.jpg')" }}></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </figure>

                    {/* Content */}
                    <div className="prose prose-lg max-w-none prose-headings:text-primary prose-headings:font-bold prose-a:text-accent prose-a:underline hover:prose-a:text-accent/80">
                        <p className="text-xl leading-relaxed text-primary/80 font-medium mb-6">
                            SEO voor webshops draait om drie dingen: sterke categoriepagina's, unieke productcontent en schone techniek. Wie die basis op orde heeft, wint het van webshops die alleen op advertenties leunen. Hieronder lees je de tien regels die in de praktijk het verschil maken tussen een webshop die organisch groeit en één die onzichtbaar blijft.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Waarom zijn categoriepagina's je belangrijkste SEO-wapen?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Regel één: behandel je categoriepagina's als volwaardige landingspagina's. Mensen zoeken op "wandelschoenen heren", niet op een artikelnummer. De categoriepagina matcht die zoekvraag, blijft bestaan terwijl producten komen en gaan, en verzamelt alle interne linkwaarde van de producten eronder. Geef elke categorie een eigen inleidende tekst die de vraag van de bezoeker beantwoordt, geen opsomming van zoekwoorden.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Regel twee volgt daar direct uit: bouw je categoriestructuur op basis van zoekwoordenonderzoek, niet op basis van je eigen assortimentslogica. Als duizenden mensen per maand zoeken op een subcategorie die jij niet als aparte pagina hebt, laat je die vraag aan de concurrent. Hoe je dat onderzoek aanpakt, lees je in onze <Link to="/blogs/seo/zoekintentie-basis-goede-seo-content" className="text-accent hover:underline">blog over zoekintentie als basis van SEO-content</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe maak je productpagina's die scoren?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Regel drie: schrijf eigen productbeschrijvingen. De standaardtekst van je leverancier staat op honderden andere shops. Google kiest dan zelden jouw versie. Je hoeft niet meteen je hele catalogus te herschrijven; begin bij je twintig best verkopende producten en werk vandaar verder. Beantwoord in de tekst de vragen die een klant in de winkel zou stellen.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Regel vier: voeg product schema toe. Met die structured data begrijpt Google je prijs, voorraadstatus en beoordelingen, en kan het die tonen als rich result met sterren in de zoekresultaten. Dat valt op tussen kale resultaten en levert doorgaans duidelijk meer klikken op.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Regel vijf: zet klantreviews op de productpagina. Reviews zijn verse, unieke content in de woorden van je doelgroep, vol termen waar jij zelf nooit op was gekomen. Ze voeden daarbij de beoordelingssterren in je schema. Vraag er actief om na elke aankoop.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Welke technische regels mag je niet overslaan?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Regel zes: tem je filters met canonical tags. Elke combinatie van filteren en sorteren maakt een nieuwe URL, en zonder ingrijpen crawlt Google tientallen bijna identieke versies van dezelfde categorie. Wijs al die varianten met een canonical naar de hoofdversie. Doe hetzelfde met kleurvarianten van een product. Zo houd je je crawlbudget en autoriteit bij elkaar.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Regel zeven: regel je uitverkochte producten netjes. Een pagina zomaar verwijderen betekent linkwaarde weggooien en bezoekers op een foutpagina laten stranden. Komt het product terug, laat de pagina staan met een leverdatum. Verdwijnt het definitief, stuur de URL dan met een redirect naar de vervanger of de bovenliggende categorie.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Regel acht: maak je shop snel, vooral op mobiel. Het grootste deel van het webshopverkeer is mobiel en trage productfoto's zijn meestal de boosdoener. Comprimeer afbeeldingen, gebruik moderne formaten zoals WebP en laad wat onder de vouw staat pas later. Snelheid is niet alleen een rankingfactor maar vooral een conversiefactor.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe bouw je autoriteit op als webshop?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Regel negen: maak content die links verdient. Naar productpagina's linkt bijna niemand vrijwillig. Naar een goede koopgids, maattabel of vergelijking wél. Zulke gidsen ranken op informatiegerichte zoekwoorden, vangen bezoekers vroeg in hun zoektocht en geven hun linkwaarde door aan je categorieën. Bij een webshop die wij begeleiden zorgen een paar grondige koopgidsen inmiddels voor een flink deel van het organische verkeer.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Regel tien: verbind alles met interne links. Link vanuit gidsen naar categorieën, vanuit categorieën naar subcategorieën en vanuit producten naar accessoires. Zo stroomt autoriteit naar de pagina's die moeten ranken en begrijpt Google de samenhang van je assortiment. Hoe die verdeling werkt, lees je in onze <Link to="/blogs/seo/backlinks-vs-interne-links-waardevoller" className="text-accent hover:underline">blog over backlinks versus interne links</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat is de meest onderschatte regel van de tien?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De filterregel. Bijna elke webshop die voor het eerst een technische check krijgt, blijkt crawlbudget en autoriteit te lekken via ongecontroleerde filter-URL's. Het probleem is onzichtbaar in je dagelijkse werk: de shop ziet er prima uit en verkoopt gewoon. Maar onder water crawlt Google duizenden variaties van dezelfde pagina, en versnippert de waarde die eigenlijk naar je hoofdcategorieën moest gaan. Eén middag canonicals goed zetten kan daarom meer effect hebben dan een maand teksten schrijven.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Waar begin je als je maar tijd voor drie dingen hebt?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Pak eerst de categoriepagina's van je belangrijkste productgroepen: eigen tekst, juiste zoekwoorden, schone URL. Herschrijf daarna de beschrijvingen van je best verkopende producten. En zet product schema live. Die drie ingrepen raken vrijwel al je bezoekers en leggen de basis voor de rest. SEO en advertenties versterken elkaar daarna: wat organisch rankt, verlaagt je afhankelijkheid van betaald verkeer. Hoe je die combinatie slim inzet, lees je op onze pagina over <Link to="/google-ads" className="text-accent hover:underline">Google Ads</Link>.
                        </p>

                        <p className="text-primary/80 leading-relaxed mb-6">
                            Wil je weten welke van de tien regels bij jouw webshop het meeste oplevert? Onze <Link to="/seo" className="text-accent hover:underline">SEO-specialisten</Link> doen een gratis check en zetten de kansen op volgorde van impact. Plan een gesprek via onze <Link to="/contact" className="text-accent hover:underline">contactpagina</Link>.
                        </p>
                    </div>

                    {/* FAQ Section */}
                    <section className="mt-16 pt-12 border-t border-primary/10">
                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Veelgestelde vragen</h2>
                        <div className="space-y-6 not-prose">
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Waarom ranken categoriepagina's beter dan productpagina's?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Mensen zoeken meestal op productsoorten zoals 'wandelschoenen heren' en niet op één specifiek artikelnummer. Een categoriepagina matcht die brede zoekvraag, blijft bestaan als producten wisselen en verzamelt alle interne links. Daarom is de categorie voor de meeste webshops de belangrijkste SEO-pagina.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Zijn productbeschrijvingen van de leverancier slecht voor SEO?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Ja, want honderden andere shops gebruiken exact dezelfde tekst. Google kiest dan zelden jouw versie om te tonen. Herschrijf in elk geval de beschrijvingen van je best verkopende producten in eigen woorden, met de vragen van je klant als leidraad.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat is product schema en waarom heb ik het nodig?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Product schema is structured data waarmee je prijs, voorraad en beoordelingen machineleesbaar maakt. Google kan die informatie tonen in de zoekresultaten, met sterren en prijs bij je resultaat. Dat valt op en levert doorgaans meer klikken op dan een kaal resultaat.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoe ga ik om met uitverkochte producten?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Verwijder de pagina niet meteen. Komt het product terug, laat de pagina staan met een verwachte leverdatum. Verdwijnt het definitief, verwijs de URL dan door naar de vervanger of de categoriepagina. Zo behoud je de opgebouwde linkwaarde en verlies je geen bezoekers op een foutpagina.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoe voorkom ik duplicate content bij filters en varianten?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Gebruik canonical tags die alle filter- en sorteervarianten naar de hoofdversie van de categoriepagina wijzen. Kleurvarianten van een product wijzen naar de hoofdvariant. Zo voorkom je dat Google tientallen bijna identieke URL's crawlt en je autoriteit versnippert.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoe lang duurt het voordat webshop-SEO resultaat oplevert?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Reken op enkele maanden voordat je duidelijke beweging ziet, afhankelijk van je startpunt en concurrentie. Technische fixes en betere productteksten kunnen sneller effect hebben. Autoriteit opbouwen voor competitieve categorieën is het langzame werk dat het grote verschil maakt.</p>
                            </div>
                        </div>
                    </section>

                    {/* Related Links */}
                    <section className="mt-16 pt-12 border-t border-primary/10">
                        <h3 className="text-xl font-bold text-primary mb-6">Lees ook</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <Link to="/blogs/seo/zoekintentie-basis-goede-seo-content" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Zoekintentie als basis</h3>
                                <p className="text-primary/60 text-sm">Waarom intentie belangrijker is dan volume.</p>
                            </Link>
                            <Link to="/blogs/seo/lang-duurt-seo-realistische-verwachtingen" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Hoe lang duurt SEO?</h3>
                                <p className="text-primary/60 text-sm">Realistische verwachtingen voor resultaat.</p>
                            </Link>
                            <Link to="/blogs/seo/backlinks-vs-interne-links-waardevoller" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Backlinks vs interne links</h3>
                                <p className="text-primary/60 text-sm">Wat is waardevoller voor je SEO?</p>
                            </Link>
                        </div>
                    </section>
                </div>
            </article>

            {/* Bottom CTA */}
            <section className="w-full pb-32 px-6">
                <div className="max-w-4xl mx-auto bg-primary rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
                    <h2 className="relative z-10 font-drama italic text-background text-3xl sm:text-4xl md:text-5xl mb-6">Klaar om organisch te groeien?</h2>
                    <p className="relative z-10 font-sans text-background/70 text-lg mb-10 max-w-xl mx-auto">We checken gratis welke van de tien regels jouw webshop nu laat liggen en wat dat kost aan omzet.</p>
                    <Link to="/contact" className="relative z-10 btn-magnetic inline-flex items-center justify-center bg-accent text-background font-sans font-bold text-lg px-10 py-4 rounded-[2rem] hover:bg-accent/90 transition-colors">Neem contact op</Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
