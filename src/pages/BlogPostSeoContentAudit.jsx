import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ChevronRight, User } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function BlogPostSeoContentAudit() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen selection:bg-accent/30 selection:text-dark flex flex-col bg-background">
            <Helmet>
                <title>Hoe doe je een SEO content audit | Empowers</title>
                <meta name="description" content="Een SEO content audit brengt in kaart welke pagina's presteren en welke je verbetert, samenvoegt of verwijdert. Zo voer je hem stap voor stap zelf uit." />
                <link rel="canonical" href="https://www.empowers.nl/blogs/seo/seo-content-audit" />
                <meta property="og:title" content="Hoe doe je een SEO content audit | Empowers" />
                <meta property="og:description" content="Een SEO content audit brengt in kaart welke pagina's presteren en welke je verbetert, samenvoegt of verwijdert. Zo voer je hem stap voor stap zelf uit." />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://www.empowers.nl/blogs/seo/seo-content-audit" />
                <meta property="og:image" content="https://www.empowers.nl/images/blogs/seo-content-audit.jpg" />
                <meta property="article:published_time" content="2026-07-27T17:00:00+02:00" />
                <meta property="article:author" content="Empowers" />
                <meta property="article:section" content="SEO" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Hoe doe je een SEO content audit | Empowers" />
                <meta name="twitter:description" content="Een SEO content audit brengt in kaart welke pagina's presteren en welke je verbetert, samenvoegt of verwijdert. Zo voer je hem stap voor stap zelf uit." />
                <script type="application/ld+json">{JSON.stringify({
                    "@context": "https://schema.org",
                    "@graph": [
                        {
                            "@type": "Article",
                            "headline": "Hoe doe je een SEO content audit",
                            "image": "https://www.empowers.nl/images/blogs/seo-content-audit.jpg",
                            "description": "Een SEO content audit brengt in kaart welke pagina's presteren en welke je verbetert, samenvoegt of verwijdert. Zo voer je hem stap voor stap zelf uit.",
                            "author": { "@type": "Organization", "name": "Empowers" },
                            "publisher": { "@type": "Organization", "name": "Empowers", "url": "https://www.empowers.nl" },
                            "datePublished": "2026-07-27T17:00:00+02:00",
                            "dateModified": "2026-07-27T17:00:00+02:00",
                            "url": "https://www.empowers.nl/blogs/seo/seo-content-audit"
                        },
                        {
                            "@type": "BreadcrumbList",
                            "itemListElement": [
                                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.empowers.nl" },
                                { "@type": "ListItem", "position": 2, "name": "Nieuws", "item": "https://www.empowers.nl/nieuws" },
                                { "@type": "ListItem", "position": 3, "name": "SEO", "item": "https://www.empowers.nl/blogs/seo" },
                                { "@type": "ListItem", "position": 4, "name": "Hoe doe je een SEO content audit", "item": "https://www.empowers.nl/blogs/seo/seo-content-audit" }
                            ]
                        },
                        {
                            "@type": "FAQPage",
                            "mainEntity": [
                                { "@type": "Question", "name": "Wat is een SEO content audit?", "acceptedAnswer": { "@type": "Answer", "text": "Een SEO content audit is een systematische beoordeling van alle content op je website. Per pagina bekijk je verkeer, posities, kwaliteit en relevantie, en beslis je: behouden, verbeteren, samenvoegen of verwijderen. Het resultaat is een concreet actieplan om je bestaande content beter te laten presteren." } },
                                { "@type": "Question", "name": "Hoe lang duurt een content audit?", "acceptedAnswer": { "@type": "Answer", "text": "Voor een site met enkele tientallen pagina's ben je een dag bezig. Grote websites met honderden artikelen vragen eerder een week, verspreid over meerdere sessies. De doorlooptijd zit vooral in het beoordelen per pagina, niet in het verzamelen van de data." } },
                                { "@type": "Question", "name": "Welke tools heb ik nodig voor een content audit?", "acceptedAnswer": { "@type": "Answer", "text": "Met Google Search Console en een spreadsheet kom je al ver: daarmee zie je per pagina de vertoningen, klikken en posities. Een crawler zoals Screaming Frog vult aan met titels, woordaantallen, statuscodes en interne links. Betaalde tools zoals Ahrefs of Semrush zijn handig maar niet verplicht." } },
                                { "@type": "Question", "name": "Wanneer verwijder je een pagina en wanneer verbeter je hem?", "acceptedAnswer": { "@type": "Answer", "text": "Verbeter een pagina als het onderwerp relevant is voor je aanbod en er zoekvraag naar bestaat. Voeg samen als meerdere pagina's hetzelfde onderwerp behandelen. Verwijder pas als een pagina geen verkeer trekt, geen links heeft en over een onderwerp gaat dat niets met je bedrijf te maken heeft." } },
                                { "@type": "Question", "name": "Hoe vaak moet je een content audit doen?", "acceptedAnswer": { "@type": "Answer", "text": "Een volledige audit per jaar is voor de meeste websites genoeg, aangevuld met een kleine kwartaalcheck van je belangrijkste pagina's. Publiceer je veel, plan de volledige ronde dan vaker. Na een merkbare verkeersdaling of een grote Google-update is een extra audit altijd verstandig." } },
                                { "@type": "Question", "name": "Wat levert een content audit op?", "acceptedAnswer": { "@type": "Answer", "text": "Verbeterde bestaande content levert vaak sneller resultaat dan nieuwe content, omdat de pagina's al geïndexeerd zijn en historie hebben. Na een audit weet je bovendien precies waar de gaten in je content zitten, zodat je nieuwe artikelen schrijft waar echt vraag naar is." } }
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
                        <span className="text-primary truncate">SEO content audit</span>
                    </nav>

                    {/* Header */}
                    <header className="mb-16">
                        <div className="inline-block px-3 py-1 bg-accent/10 text-accent font-mono text-xs uppercase tracking-widest rounded-full mb-6">
                            SEO
                        </div>
                        <h1 className="font-sans font-bold text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight mb-8">
                            Hoe doe je een SEO content audit
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
                                <span>7 minuten leestijd</span>
                            </div>
                        </div>
                    </header>

                    {/* Featured Image */}
                    <figure className="w-full h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden mb-16 relative bg-primary">
                        <div className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-overlay" style={{backgroundImage: "url('/images/blogs/seo-content-audit.jpg')"}}></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </figure>

                    {/* Content */}
                    <div className="prose prose-lg prose-headings:font-sans prose-headings:font-bold prose-headings:text-primary prose-p:font-sans prose-p:text-primary/80 prose-p:leading-relaxed max-w-none">
                        <p className="text-xl md:text-2xl font-medium leading-relaxed mb-10 text-primary">
                            Een SEO content audit doe je in drie bewegingen: je verzamelt per pagina de cijfers uit Search Console, je beoordeelt elke pagina op prestatie en relevantie, en je hangt er een besluit aan: behouden, verbeteren, samenvoegen of verwijderen. Het resultaat is een actieplan waarmee bestaande content vaak sneller groeit dan met iets nieuws schrijven.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat is een SEO content audit?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een content audit is de inventarisatie van alles wat er aan content op je site staat, gemeten langs twee vragen. Presteert deze pagina, in verkeer, posities of conversies? En past deze pagina nog bij waar je bedrijf naartoe wil?
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De meeste websites groeien organisch: er komt van alles bij en er gaat nooit iets af. Na een paar jaar staat er een archief vol pagina's waarvan niemand meer weet waarom ze bestaan. Verouderde blogs, dubbele onderwerpen, dunne pagina's uit een oude campagne. Dat archief drukt op de kwaliteit van je hele site.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De audit maakt daar een gestuurd geheel van. Niet door alles weg te gooien, maar door per pagina bewust te kiezen wat ermee gebeurt.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Welke data verzamel je per pagina?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Begin met een compleet overzicht van je URL's. Dat haal je uit je sitemap of uit een crawl met Screaming Frog. Zet ze in een spreadsheet, één rij per pagina. Dit wordt je werkdocument.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Vul per pagina de prestatiecijfers aan uit Google Search Console: vertoningen en klikken, plus de gemiddelde positie over de afgelopen twaalf maanden. Kijk niet naar een korte periode, want seizoenseffecten vertekenen het beeld. Uit je analytics-pakket haal je aanvullend de bezoekersaantallen en, als je dat meet, de conversies per pagina.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Noteer daarnaast een paar inhoudelijke kenmerken: publicatiedatum, laatste update, woordenaantal en het zoekwoord waar de pagina op mikt. De crawl levert het meeste hiervan automatisch. Nu heb je per pagina alles bij elkaar om te oordelen.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een tip die veel tijd scheelt: sorteer je spreadsheet op vertoningen. De pagina's bovenaan verdienen de meeste aandacht, de lange staart onderaan kun je in groepen beoordelen. Niemand hoeft vierhonderd rijen één voor één te wegen.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe beoordeel je elke pagina?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Geef elke pagina één van vier labels. Behouden: de pagina presteert en de inhoud klopt nog. Even met rust laten en hooguit de datum en details bijwerken.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Verbeteren: het onderwerp is relevant en er is zoekvraag, maar de pagina blijft hangen op pagina twee of de content is verouderd. Dit zijn je goudklompjes. Een pagina die al op positie elf staat, heeft vaak maar een verdiepingsslag en een paar interne links nodig om de eerste pagina te halen.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Samenvoegen: meerdere pagina's behandelen hetzelfde onderwerp en houden elkaar uit de top. Kies de sterkste URL, verwerk het beste uit de andere versies en redirect de rest. Dit raakt direct aan het probleem van <Link to="/blogs/seo/duplicate-content-voorkomen" className="text-accent hover:underline">duplicate content</Link> op je eigen site.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Verwijderen: geen verkeer, geen links, geen relatie met je aanbod. Denk aan het verslagje van het bedrijfsuitje uit 2019. Weg ermee, met een redirect naar een relevante pagina als er ooit links naartoe zijn gelegd.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe pak je de uitvoering aan?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een audit zonder uitvoering is een spreadsheet met meningen. Plan de acties op volgorde van impact. Start met de verbeterkandidaten die het dichtst bij de eerste pagina staan, want daar zit het snelste resultaat. Daarna de samenvoegingen, dan de verwijderingen.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Werk in rondes van een paar pagina's per week in plaats van alles tegelijk. Zo kun je in Search Console volgen wat elke wijziging doet. Wat wij bij dit soort trajecten telkens merken: de eerste verbeterde pagina's laten vaak binnen enkele weken beweging zien, juist omdat ze al historie bij Google hebben.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Vergeet de nazorg niet. Elke samengevoegde of verwijderde pagina heeft een redirect nodig, en interne links naar verdwenen pagina's werk je bij. Anders ruil je je contentprobleem in voor een lijst <Link to="/blogs/seo/broken-links-opsporen-repareren" className="text-accent hover:underline">kapotte links</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe vaak doe je een content audit?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Eén volledige ronde per jaar volstaat voor de meeste websites, met een lichte kwartaalcheck van je belangrijkste pagina's ertussendoor. Sites die dagelijks of wekelijks publiceren, plannen de grote ronde vaker.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Er zijn ook aanleidingen buiten het ritme om. Een merkbare verkeersdaling, een grote Google-update of een migratie zijn allemaal momenten om de audit naar voren te halen. De audit past bovendien goed naast de technische kant: samen vormen ze de complete <Link to="/blogs/seo/technische-seo-audit" className="text-accent hover:underline">SEO-audit</Link> van je site.
                        </p>

                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een content audit is dus geen schoonmaakactie maar een prestatie-instrument: je laat bestaande content harder werken in plaats van steeds meer te schrijven. Liever dat wij de audit voor je draaien en het actieplan klaarzetten? Bekijk onze <Link to="/seo" className="text-accent hover:underline">SEO-dienstenpagina</Link> of plan een gratis gesprek via <Link to="/contact" className="text-accent hover:underline">empowers.nl/contact</Link>.
                        </p>

                        <hr className="my-16 border-primary/10" />

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Veelgestelde vragen over de SEO content audit</h2>

                        <div className="space-y-6 not-prose">
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat is een SEO content audit?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Een SEO content audit is een systematische beoordeling van alle content op je website. Per pagina bekijk je verkeer, posities, kwaliteit en relevantie, en beslis je: behouden, verbeteren, samenvoegen of verwijderen. Het resultaat is een concreet actieplan om je bestaande content beter te laten presteren.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoe lang duurt een content audit?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Voor een site met enkele tientallen pagina's ben je een dag bezig. Grote websites met honderden artikelen vragen eerder een week, verspreid over meerdere sessies. De doorlooptijd zit vooral in het beoordelen per pagina, niet in het verzamelen van de data.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Welke tools heb ik nodig voor een content audit?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Met Google Search Console en een spreadsheet kom je al ver: daarmee zie je per pagina de vertoningen, klikken en posities. Een crawler zoals Screaming Frog vult aan met titels, woordaantallen, statuscodes en interne links. Betaalde tools zoals Ahrefs of Semrush zijn handig maar niet verplicht.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wanneer verwijder je een pagina en wanneer verbeter je hem?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Verbeter een pagina als het onderwerp relevant is voor je aanbod en er zoekvraag naar bestaat. Voeg samen als meerdere pagina's hetzelfde onderwerp behandelen. Verwijder pas als een pagina geen verkeer trekt, geen links heeft en over een onderwerp gaat dat niets met je bedrijf te maken heeft.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoe vaak moet je een content audit doen?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Een volledige audit per jaar is voor de meeste websites genoeg, aangevuld met een kleine kwartaalcheck van je belangrijkste pagina's. Publiceer je veel, plan de volledige ronde dan vaker. Na een merkbare verkeersdaling of een grote Google-update is een extra audit altijd verstandig.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat levert een content audit op?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Verbeterde bestaande content levert vaak sneller resultaat dan nieuwe content, omdat de pagina's al geïndexeerd zijn en historie hebben. Na een audit weet je bovendien precies waar de gaten in je content zitten, zodat je nieuwe artikelen schrijft waar echt vraag naar is.
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
                    <h2 className="relative z-10 font-drama italic text-background text-3xl sm:text-4xl md:text-5xl mb-6">Wat doet jouw content eigenlijk?</h2>
                    <p className="relative z-10 font-sans text-background/70 text-lg mb-10 max-w-xl mx-auto">
                        Wij leggen elke pagina langs de meetlat en vertellen je precies welke content werkt, welke beter kan en welke weg mag.
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
