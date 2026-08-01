import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ChevronRight, User } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function BlogPostDuplicateContentVoorkomen() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen selection:bg-accent/30 selection:text-dark flex flex-col bg-background">
            <Helmet>
                <title>Duplicate content: wat is het en hoe voorkom je het | Empowers</title>
                <meta name="description" content="Duplicate content verdunt je rankings doordat Google moet kiezen tussen identieke pagina's. Lees hoe het ontstaat en hoe je het voorkomt en oplost." />
                <link rel="canonical" href="https://www.empowers.nl/blogs/seo/duplicate-content-voorkomen" />
                <meta property="og:title" content="Duplicate content: wat is het en hoe voorkom je het | Empowers" />
                <meta property="og:description" content="Duplicate content verdunt je rankings doordat Google moet kiezen tussen identieke pagina's. Lees hoe het ontstaat en hoe je het voorkomt en oplost." />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://www.empowers.nl/blogs/seo/duplicate-content-voorkomen" />
                <meta property="og:image" content="https://www.empowers.nl/images/blogs/duplicate-content-voorkomen.jpg" />
                <meta property="article:published_time" content="2026-07-27T12:00:00+02:00" />
                <meta property="article:author" content="Empowers" />
                <meta property="article:section" content="SEO" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Duplicate content: wat is het en hoe voorkom je het | Empowers" />
                <meta name="twitter:description" content="Duplicate content verdunt je rankings doordat Google moet kiezen tussen identieke pagina's. Lees hoe het ontstaat en hoe je het voorkomt en oplost." />
                <script type="application/ld+json">{JSON.stringify({
                    "@context": "https://schema.org",
                    "@graph": [
                        {
                            "@type": "Article",
                            "headline": "Duplicate content: wat is het en hoe voorkom je het",
                            "image": "https://www.empowers.nl/images/blogs/duplicate-content-voorkomen.jpg",
                            "description": "Duplicate content verdunt je rankings doordat Google moet kiezen tussen identieke pagina's. Lees hoe het ontstaat en hoe je het voorkomt en oplost.",
                            "author": { "@type": "Organization", "name": "Empowers" },
                            "publisher": { "@type": "Organization", "name": "Empowers", "url": "https://www.empowers.nl" },
                            "datePublished": "2026-07-27T12:00:00+02:00",
                            "dateModified": "2026-07-27T12:00:00+02:00",
                            "url": "https://www.empowers.nl/blogs/seo/duplicate-content-voorkomen"
                        },
                        {
                            "@type": "BreadcrumbList",
                            "itemListElement": [
                                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.empowers.nl" },
                                { "@type": "ListItem", "position": 2, "name": "Nieuws", "item": "https://www.empowers.nl/nieuws" },
                                { "@type": "ListItem", "position": 3, "name": "SEO", "item": "https://www.empowers.nl/blogs/seo" },
                                { "@type": "ListItem", "position": 4, "name": "Duplicate content: wat is het en hoe voorkom je het", "item": "https://www.empowers.nl/blogs/seo/duplicate-content-voorkomen" }
                            ]
                        },
                        {
                            "@type": "FAQPage",
                            "mainEntity": [
                                { "@type": "Question", "name": "Wat is duplicate content?", "acceptedAnswer": { "@type": "Answer", "text": "Duplicate content is identieke of sterk gelijkende tekst die op meerdere URL's bereikbaar is. Dat kan binnen je eigen website zijn, bijvoorbeeld door filtervarianten, of tussen websites, zoals bij overgenomen productbeschrijvingen van een fabrikant. Google kiest dan zelf welke versie in de zoekresultaten komt." } },
                                { "@type": "Question", "name": "Krijg je een straf van Google voor duplicate content?", "acceptedAnswer": { "@type": "Answer", "text": "Nee, Google geeft zelf aan dat er geen penalty bestaat voor gewone duplicate content. Wel filtert Google dubbele versies uit de resultaten en verdeelt het je signalen over de varianten. Je verliest dus zichtbaarheid zonder dat er een straf aan te pas komt. Alleen bewust grootschalig kopiëren om te misleiden kan ingrijpen opleveren." } },
                                { "@type": "Question", "name": "Hoe vind ik duplicate content op mijn website?", "acceptedAnswer": { "@type": "Answer", "text": "Zoek in Google op een letterlijke zin uit je tekst tussen aanhalingstekens en kijk hoeveel URL's verschijnen. Crawl daarnaast je site met een tool zoals Screaming Frog, die dubbele titels en identieke pagina's markeert. In Search Console zie je onder Indexering welke pagina's Google als duplicaat heeft aangemerkt." } },
                                { "@type": "Question", "name": "Is een productbeschrijving van de fabrikant duplicate content?", "acceptedAnswer": { "@type": "Answer", "text": "Ja. Neem je de standaardtekst van de fabrikant over, dan staat exact dezelfde beschrijving op tientallen andere webshops. Google kiest dan meestal de grootste of bekendste aanbieder om te tonen. Eigen productteksten schrijven kost tijd, maar het is een van de weinige manieren waarop een kleine webshop zich kan onderscheiden." } },
                                { "@type": "Question", "name": "Lost een canonical tag duplicate content op?", "acceptedAnswer": { "@type": "Answer", "text": "Voor technische varianten wel: de canonical wijst Google naar de hoofdversie, zodat signalen gebundeld worden. Voor inhoudelijke duplicatie, zoals twee pagina's die hetzelfde onderwerp behandelen, is samenvoegen of herschrijven de betere oplossing. De canonical is een hulpmiddel, geen vervanging voor unieke content." } }
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
                        <Link to="/blogs/seo" className="hover:text-accent transition-colors">SEO</Link>
                        <ChevronRight className="w-3 h-3" />
                        <span className="text-primary truncate">Duplicate content</span>
                    </nav>

                    {/* Header */}
                    <header className="mb-16">
                        <div className="inline-block px-3 py-1 bg-accent/10 text-accent font-mono text-xs uppercase tracking-widest rounded-full mb-6">
                            SEO
                        </div>
                        <h1 className="font-sans font-bold text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight mb-8">
                            Duplicate content: wat is het en hoe voorkom je het
                        </h1>

                        <div className="flex flex-wrap items-center gap-6 text-sm font-sans text-primary/60 border-y border-primary/10 py-6">
                            <div className="flex items-center gap-2">
                                <User className="w-4 h-4" />
                                <span>Empowers Redactie</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>27 juli 2026</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>6 minuten leestijd</span>
                            </div>
                        </div>
                    </header>

                    {/* Featured Image */}
                    <figure className="w-full h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden mb-16 relative bg-primary">
                        <div className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-overlay" style={{backgroundImage: "url('/images/blogs/duplicate-content-voorkomen.jpg')"}}></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </figure>

                    {/* Content */}
                    <div className="prose prose-lg prose-headings:font-sans prose-headings:font-bold prose-headings:text-primary prose-p:font-sans prose-p:text-primary/80 prose-p:leading-relaxed max-w-none">
                        <p className="text-xl md:text-2xl font-medium leading-relaxed mb-10 text-primary">
                            Duplicate content is dezelfde tekst die op meerdere URL's bereikbaar is, binnen je site of daarbuiten. Google straft het niet, maar filtert dubbele versies uit de zoekresultaten en verdeelt je signalen over de varianten. Het gevolg: geen van de versies rankt zo goed als één sterke pagina had gekund. Voorkomen kan met unieke teksten en een paar technische afspraken.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat is duplicate content precies?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Er zijn twee smaken. Interne duplicatie: dezelfde content staat meerdere keren op je eigen website, bijvoorbeeld doordat een pagina via verschillende URL's bereikbaar is. En externe duplicatie: jouw tekst staat ook op andere websites, of andersom.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Het hoeft niet om letterlijk identieke tekst te gaan. Ook sterk gelijkende pagina's vallen eronder. Denk aan een dienstenpagina per stad waar alleen de plaatsnaam verschilt, of twee blogs die dezelfde vraag met vrijwel dezelfde woorden beantwoorden.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Voor Google is dat een keuzeprobleem. De zoekmachine wil per zoekopdracht één beste resultaat per website tonen en moet dus beslissen welke variant dat wordt. Die keuze pakt geregeld anders uit dan jij zou willen.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Is duplicate content een straf van Google?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Nee, en dat misverstand mag de wereld uit. Google heeft meermaals bevestigd dat er geen duplicate content penalty bestaat voor normale websites. Er komt geen rode kaart en je site wordt niet uit de index gegooid.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Wat er wel gebeurt is stiller en daardoor verraderlijker. Google clustert de dubbele versies, kiest er één als hoofdversie en toont de rest niet. Links en autoriteit die naar de varianten wijzen, komen niet allemaal bij die hoofdversie terecht. Je pagina's houden elkaar zo uit de wind zonder dat je een melding krijgt.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De uitzondering: grootschalig content kopiëren om zoekresultaten te manipuleren. Daar treedt Google wel tegen op. Voor een normaal bedrijf met een eigen website speelt dat scenario vrijwel nooit.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe ontstaat duplicate content zonder dat je het doorhebt?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De technische route is de meest voorkomende. Je site is bereikbaar met en zonder www, met hoofdletters en kleine letters, met en zonder slash aan het einde. Webshopfilters plakken parameters achter de URL en maken van één categorie tientallen adressen. Elk van die varianten is voor Google een aparte pagina met dezelfde inhoud.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De inhoudelijke route zien we vooral bij webshops: productbeschrijvingen rechtstreeks van de fabrikant overnemen. Begrijpelijk, want zelf schrijven kost tijd. Maar diezelfde tekst staat op elke webshop die het product verkoopt, en Google toont dan meestal de grootste speler. Bij een controle van een webshop kwamen we ooit één fabriekstekst tegen die woord voor woord op meer dan dertig concurrerende shops stond.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            En dan is er nog de sluipende variant: je eigen oude content. Wie jaren blogt, schrijft ongemerkt twee of drie artikelen over hetzelfde onderwerp. Die pagina's beconcurreren elkaar op dezelfde zoekwoorden, wat ook wel keyword-kannibalisatie heet.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe voorkom en los je duplicate content op?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Voor de technische varianten is de <Link to="/blogs/seo/canonical-tags-gebruik" className="text-accent hover:underline">canonical tag</Link> je belangrijkste gereedschap. Die vertelt Google welke URL de hoofdversie is, zodat alle signalen daar samenkomen. Kies daarnaast één domeinvariant en stuur de rest met een 301-redirect door. Voor filterpagina's die nooit in de zoekresultaten horen, kan een noindex de rust bewaren.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Voor de inhoudelijke kant geldt een simpele regel: schrijf eigen tekst voor pagina's die moeten ranken. Begin bij je best verkopende producten of belangrijkste diensten, daar betaalt het zich het snelst uit. Overlappende blogs voeg je samen tot één sterk artikel en de oude URL redirect je naar de nieuwe.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Neem je content over van een ander platform, of publiceert een partner jouw artikel, spreek dan af dat de externe versie een cross-domain canonical naar jouw pagina krijgt. Zo blijft de waarde bij jou.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Aparte aandacht verdienen stadspagina's. Veel dienstverleners maken voor elke plaats een eigen landingspagina waarin alleen de plaatsnaam wisselt. Google prikt daar doorheen: tien vrijwel identieke pagina's ranken slechter dan drie pagina's met echte lokale inhoud. Schrijf per plaats iets wat alleen daar klopt, zoals projecten uit die regio of de wijken waar je werkt. Lukt dat niet, dan is één sterke regiopagina de betere keuze.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe spoor je duplicate content op?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De snelste test: kopieer een letterlijke zin uit je tekst, zet hem tussen aanhalingstekens en plak hem in Google. Verschijnen er meerdere URL's, van jezelf of van anderen, dan heb je je antwoord.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Voor het volledige beeld crawl je je site met Screaming Frog, dat dubbele titels, meta descriptions en identieke pagina's automatisch markeert. In Google Search Console zie je onder Indexering bovendien welke pagina's zijn aangemerkt als duplicaat en welke versie Google als canoniek koos. Wil je dit in samenhang met de rest van je techniek bekijken, dan is een <Link to="/blogs/seo/technische-seo-audit" className="text-accent hover:underline">technische SEO-audit</Link> de grondigste route.
                        </p>

                        <p className="text-primary/80 leading-relaxed mb-6">
                            Duplicate content kost je dus geen boete maar wel posities, en het sluipt vanzelf een website binnen. Wil je zeker weten dat jouw pagina's niet met elkaar concurreren? Bekijk onze <Link to="/seo" className="text-accent hover:underline">SEO-dienstenpagina</Link> of plan een gratis gesprek via <Link to="/contact" className="text-accent hover:underline">empowers.nl/contact</Link>.
                        </p>

                        <hr className="my-16 border-primary/10" />

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Veelgestelde vragen over duplicate content</h2>

                        <div className="space-y-6 not-prose">
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat is duplicate content?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Duplicate content is identieke of sterk gelijkende tekst die op meerdere URL's bereikbaar is. Dat kan binnen je eigen website zijn, bijvoorbeeld door filtervarianten, of tussen websites, zoals bij overgenomen productbeschrijvingen van een fabrikant. Google kiest dan zelf welke versie in de zoekresultaten komt.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Krijg je een straf van Google voor duplicate content?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Nee, Google geeft zelf aan dat er geen penalty bestaat voor gewone duplicate content. Wel filtert Google dubbele versies uit de resultaten en verdeelt het je signalen over de varianten. Je verliest dus zichtbaarheid zonder dat er een straf aan te pas komt. Alleen bewust grootschalig kopiëren om te misleiden kan ingrijpen opleveren.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoe vind ik duplicate content op mijn website?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Zoek in Google op een letterlijke zin uit je tekst tussen aanhalingstekens en kijk hoeveel URL's verschijnen. Crawl daarnaast je site met een tool zoals Screaming Frog, die dubbele titels en identieke pagina's markeert. In Search Console zie je onder Indexering welke pagina's Google als duplicaat heeft aangemerkt.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Is een productbeschrijving van de fabrikant duplicate content?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Ja. Neem je de standaardtekst van de fabrikant over, dan staat exact dezelfde beschrijving op tientallen andere webshops. Google kiest dan meestal de grootste of bekendste aanbieder om te tonen. Eigen productteksten schrijven kost tijd, maar het is een van de weinige manieren waarop een kleine webshop zich kan onderscheiden.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Lost een canonical tag duplicate content op?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Voor technische varianten wel: de canonical wijst Google naar de hoofdversie, zodat signalen gebundeld worden. Voor inhoudelijke duplicatie, zoals twee pagina's die hetzelfde onderwerp behandelen, is samenvoegen of herschrijven de betere oplossing. De canonical is een hulpmiddel, geen vervanging voor unieke content.
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
                    <h2 className="relative z-10 font-drama italic text-background text-3xl sm:text-4xl md:text-5xl mb-6">Concurreren jouw pagina's met elkaar?</h2>
                    <p className="relative z-10 font-sans text-background/70 text-lg mb-10 max-w-xl mx-auto">
                        Wij vinden de dubbelingen op je site en zorgen dat elke pagina zijn eigen positie pakt in plaats van die van zijn buurman.
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
