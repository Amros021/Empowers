import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ChevronRight, User } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function BlogPostContentClusterOpbouwen() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen selection:bg-accent/30 selection:text-dark flex flex-col bg-background">
            <Helmet>
                <title>Wat is een content cluster en hoe bouw je er een op | Empowers</title>
                <meta name="description" content="Een content cluster is een pijlerpagina met verdiepende artikelen eromheen, verbonden via interne links. Lees hoe je er zelf een opbouwt die rankt." />
                <link rel="canonical" href="https://www.empowers.nl/blogs/seo/content-cluster-opbouwen" />
                <meta property="og:title" content="Wat is een content cluster en hoe bouw je er een op | Empowers" />
                <meta property="og:description" content="Een content cluster is een pijlerpagina met verdiepende artikelen eromheen, verbonden via interne links. Lees hoe je er zelf een opbouwt die rankt." />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://www.empowers.nl/blogs/seo/content-cluster-opbouwen" />
                <meta property="og:image" content="https://www.empowers.nl/images/blogs/content-cluster-opbouwen.jpg" />
                <meta property="article:published_time" content="2026-07-27T15:00:00+02:00" />
                <meta property="article:author" content="Empowers" />
                <meta property="article:section" content="SEO" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Wat is een content cluster en hoe bouw je er een op | Empowers" />
                <meta name="twitter:description" content="Een content cluster is een pijlerpagina met verdiepende artikelen eromheen, verbonden via interne links. Lees hoe je er zelf een opbouwt die rankt." />
                <script type="application/ld+json">{JSON.stringify({
                    "@context": "https://schema.org",
                    "@graph": [
                        {
                            "@type": "Article",
                            "headline": "Wat is een content cluster en hoe bouw je er een op",
                            "image": "https://www.empowers.nl/images/blogs/content-cluster-opbouwen.jpg",
                            "description": "Een content cluster is een pijlerpagina met verdiepende artikelen eromheen, verbonden via interne links. Lees hoe je er zelf een opbouwt die rankt.",
                            "author": { "@type": "Organization", "name": "Empowers" },
                            "publisher": { "@type": "Organization", "name": "Empowers", "url": "https://www.empowers.nl" },
                            "datePublished": "2026-07-27T15:00:00+02:00",
                            "dateModified": "2026-07-27T15:00:00+02:00",
                            "url": "https://www.empowers.nl/blogs/seo/content-cluster-opbouwen"
                        },
                        {
                            "@type": "BreadcrumbList",
                            "itemListElement": [
                                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.empowers.nl" },
                                { "@type": "ListItem", "position": 2, "name": "Nieuws", "item": "https://www.empowers.nl/nieuws" },
                                { "@type": "ListItem", "position": 3, "name": "SEO", "item": "https://www.empowers.nl/blogs/seo" },
                                { "@type": "ListItem", "position": 4, "name": "Wat is een content cluster en hoe bouw je er een op", "item": "https://www.empowers.nl/blogs/seo/content-cluster-opbouwen" }
                            ]
                        },
                        {
                            "@type": "FAQPage",
                            "mainEntity": [
                                { "@type": "Question", "name": "Wat is een content cluster?", "acceptedAnswer": { "@type": "Answer", "text": "Een content cluster is een groep pagina's over één onderwerp: een brede pijlerpagina die het hele thema behandelt, met daaromheen verdiepende artikelen over deelonderwerpen. Alle artikelen linken naar de pijlerpagina en andersom. Zo laat je Google zien dat je het onderwerp volledig beheerst." } },
                                { "@type": "Question", "name": "Wat is een pijlerpagina?", "acceptedAnswer": { "@type": "Answer", "text": "De pijlerpagina, ook wel pillar page, is de centrale pagina van een cluster. Hij behandelt het brede onderwerp volledig maar zonder op elk detail in te gaan, en verwijst voor verdieping naar de clusterartikelen. De pijlerpagina mikt op het brede zoekwoord met het meeste volume." } },
                                { "@type": "Question", "name": "Hoeveel artikelen heeft een content cluster nodig?", "acceptedAnswer": { "@type": "Answer", "text": "Er is geen vast aantal, maar met een pijlerpagina en vijf tot tien verdiepende artikelen heb je een cluster dat serieus meetelt. Belangrijker dan het aantal is de dekking: behandel je de vragen die je doelgroep echt stelt, of alleen de onderwerpen die je zelf interessant vindt." } },
                                { "@type": "Question", "name": "Waarom werken content clusters beter dan losse blogs?", "acceptedAnswer": { "@type": "Answer", "text": "Losse blogs staan op zichzelf en bouwen weinig gezamenlijke kracht op. In een cluster versterken pagina's elkaar via interne links en laat je zoekmachines zien dat je een onderwerp in de volle breedte beheerst. Dat vergroot je autoriteit op het thema, waardoor ook individuele artikelen beter ranken." } },
                                { "@type": "Question", "name": "Helpt een content cluster ook voor vindbaarheid in AI-zoekmachines?", "acceptedAnswer": { "@type": "Answer", "text": "Ja. AI-modellen zoals ChatGPT en Perplexity citeren bij voorkeur bronnen die een onderwerp aantoonbaar breed en diep behandelen. Een goed cluster met heldere structuur en onderlinge links vergroot de kans dat jouw pagina's als bron worden gebruikt in AI-antwoorden." } }
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
                        <span className="text-primary truncate">Content cluster</span>
                    </nav>

                    {/* Header */}
                    <header className="mb-16">
                        <div className="inline-block px-3 py-1 bg-accent/10 text-accent font-mono text-xs uppercase tracking-widest rounded-full mb-6">
                            SEO
                        </div>
                        <h1 className="font-sans font-bold text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight mb-8">
                            Wat is een content cluster en hoe bouw je er een op
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
                        <div className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-overlay" style={{backgroundImage: "url('/images/blogs/content-cluster-opbouwen.jpg')"}}></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </figure>

                    {/* Content */}
                    <div className="prose prose-lg prose-headings:font-sans prose-headings:font-bold prose-headings:text-primary prose-p:font-sans prose-p:text-primary/80 prose-p:leading-relaxed max-w-none">
                        <p className="text-xl md:text-2xl font-medium leading-relaxed mb-10 text-primary">
                            Een content cluster is een groep pagina's over één onderwerp: een brede pijlerpagina in het midden, met daaromheen verdiepende artikelen die elk één deelvraag beantwoorden. Interne links verbinden het geheel. Zo bouw je autoriteit op een thema op, in plaats van losse blogs die elk voor zich vechten.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat is een content cluster precies?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Stel je een wiel voor. De naaf in het midden is je pijlerpagina: één uitgebreide pagina die het brede onderwerp behandelt, bijvoorbeeld "Google Ads voor MKB". De spaken zijn je clusterartikelen: verdiepende blogs over deelonderwerpen zoals budget bepalen, zoekwoorden kiezen of advertentieteksten schrijven.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De verbinding maakt het cluster. Elk artikel linkt naar de pijlerpagina en de pijlerpagina linkt naar elk artikel. Waar het logisch is, linken de artikelen ook onderling. Voor een bezoeker voelt dat als een site die overal antwoord op heeft. Voor een zoekmachine is het een helder signaal: hier zit kennis over dit hele thema.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De pijlerpagina mikt op het brede zoekwoord met veel volume en veel concurrentie. De clusterartikelen mikken op specifiekere vragen met minder volume, waar je makkelijker op rankt. Samen vangen ze de hele zoekreis af.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een concreet beeld: een installatiebedrijf bouwt een cluster rond warmtepompen. De pijlerpagina legt uit wat een warmtepomp is en voor wie hij loont. De artikelen eromheen beantwoorden de vervolgvragen: wat kost een warmtepomp, welke subsidie bestaat er, hoeveel ruimte heb je nodig, wat betekent het voor je energierekening. Wie via één van die vragen binnenkomt, vindt via de links direct de rest.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Waarom werken content clusters zo goed?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Zoekmachines beoordelen al lang niet meer alleen losse pagina's. Ze kijken naar de vraag of jouw website als geheel een betrouwbare bron is op een onderwerp. Wie tien samenhangende artikelen over hetzelfde thema publiceert, bewijst meer expertise dan wie één blog schrijft en doorgaat naar het volgende onderwerp. Dat principe heet <Link to="/blogs/seo/topical-authority-diepgang-beter-werkt" className="text-accent hover:underline">topical authority</Link>.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Het effect versterkt zichzelf. Rankt één artikel uit het cluster goed, dan profiteren de gelinkte artikelen mee via de interne linkstructuur. Nieuwe artikelen in een sterk cluster ranken sneller dan losse blogs op een verder leeg thema. Bij onze eigen contentaanpak zien we datzelfde patroon terug: clusters winnen het op termijn van losse flodders.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            En er is een tweede winnaar: de AI-zoekmachine. Modellen zoals ChatGPT en Perplexity zoeken bronnen die een onderwerp compleet behandelen. Een strak cluster met heldere vragen en antwoorden is precies het soort bron dat geciteerd wordt.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe bouw je een content cluster op?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Kies eerst het thema. Neem een onderwerp dat dicht op je dienstverlening zit, want daar wil je autoriteit opbouwen. Een boekhouder kiest "btw voor zzp'ers", een hovenier "tuinonderhoud". Niet te breed: "marketing" is geen cluster, dat is een bibliotheek.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Verzamel daarna de vragen die je doelgroep over dat thema stelt. Kijk in Search Console welke zoekopdrachten nu al binnenkomen, gebruik de suggesties onderaan de zoekresultaten van Google en noteer wat klanten je in gesprekken vragen. Dat lijstje is je redactieplanning voor de komende maanden.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Schrijf dan de pijlerpagina: een complete behandeling van het thema die elke deelvraag kort raakt en voor de verdieping doorverwijst. Daarna werk je de clusterartikelen één voor één uit, elk gericht op één specifieke vraag. Publiceer in een vast ritme in plaats van alles tegelijk, dan blijft je site levend.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Sluit af met de links. Loop na elk nieuw artikel even door het cluster: linkt de pijlerpagina naar het nieuwe artikel, linkt het artikel terug, zijn er zusterartikelen die elkaar moeten noemen? Gebruik beschrijvende linkteksten, zodat lezer en zoekmachine weten wat er achter de link zit.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            En onderhoud het geheel. Een cluster is geen bouwwerk dat je oplevert en vergeet. Cijfers verouderen, tools veranderen van naam en er komen nieuwe vragen bij. Plan elk half jaar een rondje langs je pijlerpagina en de best presterende artikelen: klopt de inhoud nog, en welke vraag uit Search Console verdient een eigen plek in het cluster? Een bijgewerkt artikel herwint vaak posities die stilletjes waren weggezakt.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Welke fouten maken bedrijven met clusters?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De grootste: overlappende artikelen. Twee blogs die dezelfde vraag beantwoorden, beconcurreren elkaar op hetzelfde zoekwoord en verzwakken allebei. Geef elk artikel in het cluster zijn eigen vraag en check voor het schrijven of die vraag al ergens beantwoord wordt.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Ook veelvoorkomend: het cluster bestaat wel, maar de links ontbreken. Tien goede artikelen zonder onderlinge verbinding zijn voor Google tien losse pagina's. De linkstructuur is geen afwerking, hij is het cluster.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            En tot slot: schrijven voor het volume in plaats van de klant. Een cluster vol artikelen die niemand in jouw doelgroep zoekt, bouwt autoriteit op een thema dat niets oplevert. Begin bij vragen die je klanten echt stellen, dan komt de rest vanzelf. Twijfel je of je huidige content al als cluster telt? Onze <Link to="/blogs/seo/controleer-website-seo-vriendelijk" className="text-accent hover:underline">SEO-controle van je website</Link> is een goed startpunt.
                        </p>

                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een content cluster is dus geen truc maar een structuur: één pijlerpagina, verdiepende artikelen en links die het geheel verbinden. Wil je weten welk thema voor jouw bedrijf het meeste oplevert? Bekijk onze <Link to="/seo" className="text-accent hover:underline">SEO-dienstenpagina</Link> of plan een gratis gesprek via <Link to="/contact" className="text-accent hover:underline">empowers.nl/contact</Link>.
                        </p>

                        <hr className="my-16 border-primary/10" />

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Veelgestelde vragen over content clusters</h2>

                        <div className="space-y-6 not-prose">
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat is een content cluster?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Een content cluster is een groep pagina's over één onderwerp: een brede pijlerpagina die het hele thema behandelt, met daaromheen verdiepende artikelen over deelonderwerpen. Alle artikelen linken naar de pijlerpagina en andersom. Zo laat je Google zien dat je het onderwerp volledig beheerst.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat is een pijlerpagina?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    De pijlerpagina, ook wel pillar page, is de centrale pagina van een cluster. Hij behandelt het brede onderwerp volledig maar zonder op elk detail in te gaan, en verwijst voor verdieping naar de clusterartikelen. De pijlerpagina mikt op het brede zoekwoord met het meeste volume.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoeveel artikelen heeft een content cluster nodig?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Er is geen vast aantal, maar met een pijlerpagina en vijf tot tien verdiepende artikelen heb je een cluster dat serieus meetelt. Belangrijker dan het aantal is de dekking: behandel je de vragen die je doelgroep echt stelt, of alleen de onderwerpen die je zelf interessant vindt.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Waarom werken content clusters beter dan losse blogs?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Losse blogs staan op zichzelf en bouwen weinig gezamenlijke kracht op. In een cluster versterken pagina's elkaar via interne links en laat je zoekmachines zien dat je een onderwerp in de volle breedte beheerst. Dat vergroot je autoriteit op het thema, waardoor ook individuele artikelen beter ranken.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Helpt een content cluster ook voor vindbaarheid in AI-zoekmachines?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Ja. AI-modellen zoals ChatGPT en Perplexity citeren bij voorkeur bronnen die een onderwerp aantoonbaar breed en diep behandelen. Een goed cluster met heldere structuur en onderlinge links vergroot de kans dat jouw pagina's als bron worden gebruikt in AI-antwoorden.
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
                    <h2 className="relative z-10 font-drama italic text-background text-3xl sm:text-4xl md:text-5xl mb-6">Klaar om autoriteit op te bouwen?</h2>
                    <p className="relative z-10 font-sans text-background/70 text-lg mb-10 max-w-xl mx-auto">
                        Wij bepalen samen met jou het thema, bouwen het cluster en zorgen dat elke pagina zijn positie pakt.
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
