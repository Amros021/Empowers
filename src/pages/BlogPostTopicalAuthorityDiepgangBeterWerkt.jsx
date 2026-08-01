import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ChevronRight, User } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function BlogPostTopicalAuthorityDiepgangBeterWerkt() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen selection:bg-accent/30 selection:text-dark flex flex-col bg-background">
            <Helmet>
                <title>Topical authority: waarom diepgang beter werkt | Empowers</title>
                <meta name="description" content="Topical authority bouw je op met diepgang: één onderwerp volledig afdekken in plaats van losse blogs over alles. Lees hoe Google en AI-modellen dat belonen." />
                <link rel="canonical" href="https://www.empowers.nl/blogs/seo/topical-authority-diepgang-beter-werkt" />
                <meta property="og:title" content="Topical authority: waarom diepgang beter werkt | Empowers" />
                <meta property="og:description" content="Topical authority bouw je op met diepgang: één onderwerp volledig afdekken in plaats van losse blogs over alles. Lees hoe Google en AI-modellen dat belonen." />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://www.empowers.nl/blogs/seo/topical-authority-diepgang-beter-werkt" />
                <meta property="og:image" content="https://www.empowers.nl/images/blogs/topical-authority-diepgang-beter-werkt.jpg" />
                <meta property="article:published_time" content="2026-07-24T10:00:00+02:00" />
                <meta property="article:author" content="Empowers" />
                <meta property="article:section" content="SEO" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Topical authority: waarom diepgang beter werkt | Empowers" />
                <meta name="twitter:description" content="Topical authority bouw je op met diepgang: één onderwerp volledig afdekken in plaats van losse blogs over alles. Lees hoe Google en AI-modellen dat belonen." />
                <script type="application/ld+json">{JSON.stringify({
                    "@context": "https://schema.org",
                    "@graph": [
                        {
                            "@type": "Article",
                            "headline": "Topical authority: waarom diepgang beter werkt dan breedte",
                            "image": "https://www.empowers.nl/images/blogs/topical-authority-diepgang-beter-werkt.jpg",
                            "description": "Topical authority bouw je op met diepgang: één onderwerp volledig afdekken in plaats van losse blogs over alles. Lees hoe Google en AI-modellen dat belonen.",
                            "author": { "@type": "Organization", "name": "Empowers" },
                            "publisher": { "@type": "Organization", "name": "Empowers", "url": "https://www.empowers.nl" },
                            "datePublished": "2026-07-24T10:00:00+02:00",
                            "dateModified": "2026-07-24T10:00:00+02:00",
                            "url": "https://www.empowers.nl/blogs/seo/topical-authority-diepgang-beter-werkt"
                        },
                        {
                            "@type": "BreadcrumbList",
                            "itemListElement": [
                                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.empowers.nl" },
                                { "@type": "ListItem", "position": 2, "name": "Nieuws", "item": "https://www.empowers.nl/nieuws" },
                                { "@type": "ListItem", "position": 3, "name": "SEO", "item": "https://www.empowers.nl/blogs/seo" },
                                { "@type": "ListItem", "position": 4, "name": "Topical authority: waarom diepgang beter werkt dan breedte", "item": "https://www.empowers.nl/blogs/seo/topical-authority-diepgang-beter-werkt" }
                            ]
                        },
                        {
                            "@type": "FAQPage",
                            "mainEntity": [
                                { "@type": "Question", "name": "Wat is topical authority?", "acceptedAnswer": { "@type": "Answer", "text": "Topical authority is de status die je website krijgt wanneer Google en AI-modellen je zien als betrouwbare bron over een specifiek onderwerp. Je bouwt die status op door een thema volledig af te dekken met samenhangende artikelen die naar elkaar verwijzen." } },
                                { "@type": "Question", "name": "Is topical authority hetzelfde als domeinautoriteit?", "acceptedAnswer": { "@type": "Answer", "text": "Nee. Domeinautoriteit is een score van tools als Moz en Ahrefs, gebaseerd op backlinks naar je hele domein. Topical authority gaat over hoe goed je één onderwerp afdekt. Een kleine site met veel diepgang kan op haar thema winnen van een groot domein." } },
                                { "@type": "Question", "name": "Hoeveel artikelen heb je nodig voor topical authority?", "acceptedAnswer": { "@type": "Answer", "text": "Er is geen vast aantal. Het gaat om volledigheid: beantwoord je alle vragen die je doelgroep over het onderwerp stelt? Voor een afgebakend thema kom je vaak uit op enkele tientallen artikelen, van basisuitleg tot verdieping op deelvragen." } },
                                { "@type": "Question", "name": "Werkt topical authority ook voor kleine websites?", "acceptedAnswer": { "@type": "Answer", "text": "Juist voor kleine websites. Je hoeft niet te concurreren op domeingrootte of backlinks, maar op volledigheid binnen een niche. Een gespecialiseerde site die haar onderwerp grondig behandelt, verslaat op dat thema regelmatig grote platformen met dunne content." } },
                                { "@type": "Question", "name": "Helpt topical authority om geciteerd te worden door ChatGPT en Perplexity?", "acceptedAnswer": { "@type": "Answer", "text": "Ja. AI-modellen zoeken bronnen die een onderwerp volledig en consistent behandelen. Een site met samenhangende, diepgaande content over één thema wordt eerder herkend als expert en daardoor eerder aangehaald in AI-antwoorden." } },
                                { "@type": "Question", "name": "Moet je oude content verwijderen die buiten je thema valt?", "acceptedAnswer": { "@type": "Answer", "text": "Niet automatisch. Kijk eerst wat een pagina oplevert aan bezoekers of conversies. Levert een off-topic pagina niets op en verwatert die je themafocus, dan kun je hem verwijderen of samenvoegen. Presteert hij goed, laat hem dan staan." } }
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
                        <span className="text-primary truncate">Topical authority</span>
                    </nav>

                    {/* Header */}
                    <header className="mb-16">
                        <div className="inline-block px-3 py-1 bg-accent/10 text-accent font-mono text-xs uppercase tracking-widest rounded-full mb-6">
                            SEO
                        </div>
                        <h1 className="font-sans font-bold text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight mb-8">
                            Topical authority: waarom diepgang beter werkt dan breedte
                        </h1>

                        <div className="flex flex-wrap items-center gap-6 text-sm font-sans text-primary/60 border-y border-primary/10 py-6">
                            <div className="flex items-center gap-2">
                                <User className="w-4 h-4" />
                                <span>Empowers Redactie</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>24 juli 2026</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>7 minuten leestijd</span>
                            </div>
                        </div>
                    </header>

                    {/* Featured Image */}
                    <figure className="w-full h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden mb-16 relative bg-primary">
                        <div className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-overlay" style={{backgroundImage: "url('/images/blogs/topical-authority-diepgang-beter-werkt.jpg')"}}></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </figure>

                    {/* Content */}
                    <div className="prose prose-lg prose-headings:font-sans prose-headings:font-bold prose-headings:text-primary prose-p:font-sans prose-p:text-primary/80 prose-p:leading-relaxed max-w-none">
                        <p className="text-xl md:text-2xl font-medium leading-relaxed mb-10 text-primary">
                            Topical authority betekent dat Google en AI-modellen jouw website zien als dé bron over een specifiek onderwerp. Die status bouw je op met diepgang: een reeks artikelen die samen één thema volledig afdekken. Dat werkt beter dan losse blogs over van alles, omdat zoekmachines expertise per onderwerp beoordelen en niet per website.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat is topical authority precies?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Topical authority is autoriteit op onderwerpsniveau. Google probeert bij elke zoekopdracht te bepalen welke website de beste bron is voor dat specifieke thema. Niet welke website het grootst is, maar wie het onderwerp het best begrijpt.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Dat is iets anders dan domeinautoriteit. Die score draait om backlinks naar je hele domein en zegt weinig over je kennis van een onderwerp. Het volledige verschil leggen we uit in ons artikel over <Link to="/blogs/seo/verschil-tussen-domeinautoriteit-topical-authority" className="text-accent hover:underline">domeinautoriteit versus topical authority</Link>.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Het gevolg is goed nieuws voor kleinere websites. Een gespecialiseerde site met dertig grondige artikelen over werkschoenen kan op dat thema boven een groot warenhuis ranken. Niet ondanks haar formaat, maar dankzij haar focus.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Waarom werkt diepgang beter dan breedte?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Google leest je website niet als losse pagina's, maar als een netwerk van onderwerpen. Het algoritme herkent begrippen en de relaties daartussen. Schrijf je twintig samenhangende artikelen over boekhoudsoftware, dan ziet Google een patroon: deze site weet hier veel van.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Schrijf je diezelfde twintig artikelen over twintig verschillende onderwerpen, dan ontstaat dat patroon nooit. Elke pagina staat er alleen voor. Je concurreert dan per artikel met sites die wél een compleet thema achter zich hebben staan. Dat verlies je bijna altijd.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Diepgang versterkt zichzelf ook. Wie een verdiepend artikel leest, klikt door naar een gerelateerd stuk en blijft langer op je site. Hoe Google die samenhang tussen begrippen precies herkent, lees je in onze uitleg over <Link to="/blogs/seo/semantische-seo-begrijpt-google-content" className="text-accent hover:underline">semantische SEO</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe laat je zien dat je een onderwerp volledig afdekt?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De bekendste aanpak is het contentcluster. Je maakt één complete pijlerpagina over je hoofdonderwerp en daaromheen een reeks artikelen die elk één deelvraag beantwoorden. Al die artikelen linken naar de pijlerpagina en waar logisch naar elkaar.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Begin bij de vragen van je doelgroep, niet bij zoekvolumes. Wat wil iemand weten voordat hij jouw product koopt of jouw dienst afneemt? Welke twijfels komen in verkoopgesprekken telkens terug? Elke echte vraag is een artikel. Zo ontstaat vanzelf een lijst die je thema afdekt van basisuitleg tot verdieping.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De interne links zijn daarbij geen detail maar het fundament. Zij vertellen Google welke pagina's bij elkaar horen en welke pagina de kern van het cluster vormt. Een cluster zonder interne links is voor een zoekmachine gewoon een stapel losse artikelen.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Bij klanten die van losse blogs overstappen op deze clusteraanpak zien we dat niet alleen de nieuwe artikelen beter gaan ranken, maar ook de oude. De autoriteit van het thema tilt het hele cluster op.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat betekent topical authority voor AI-zoekmachines?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            ChatGPT, Perplexity en Google AI Overviews kiezen hun bronnen op een vergelijkbare manier. Een AI-model dat een antwoord samenstelt, zoekt bronnen die het onderwerp volledig en consistent behandelen. Sites die overal een beetje over schrijven, vallen buiten de selectie.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Voor GEO, het geciteerd worden door AI-modellen, is topical authority daarmee minstens zo belangrijk als voor klassieke SEO. Een consistent thema maakt het voor een taalmodel makkelijk om je site aan een onderwerp te koppelen. Diepgang is dus geen keuze tussen Google of AI. Het bedient allebei tegelijk.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe lang duurt het voordat diepgang zich uitbetaalt?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Reken op maanden, niet op weken. Google moet je nieuwe artikelen indexeren, de samenhang herkennen en je site opnieuw beoordelen op het thema. Bij een consistent publicatieritme wordt het effect meestal na een maand of zes goed zichtbaar in je rankings.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Consistentie weegt daarbij zwaarder dan tempo. Elke week één goed artikel verslaat op termijn een eenmalige dump van twintig stukken waarna het stil wordt. Vergeet ook je bestaande content niet. Verouderde artikelen binnen je thema actualiseren telt mee voor je autoriteit. Hoe je bepaalt wat je bijwerkt of verwijdert, lees je in ons artikel over de <Link to="/blogs/seo/content-audit" className="text-accent hover:underline">content audit</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Welke fouten verpesten je topical authority?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De grootste valkuil is te breed beginnen. Wie autoriteit wil opbouwen op "marketing" heeft jaren nodig. Wie begint bij "e-mailmarketing voor webshops" kan binnen een jaar de referentie zijn. Klein beginnen en later verbreden werkt vrijwel altijd beter dan andersom.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Ook dunne artikelen ondermijnen je positie. Tien oppervlakkige stukken van driehonderd woorden bouwen geen expertise op. Eén artikel dat een deelvraag echt beantwoordt, doet meer voor je thema dan vijf halve.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            En dan de sluipmoordenaar: publiceren buiten je thema. Elk artikel over een willekeurig onderwerp verwatert het patroon dat je aan het opbouwen bent. Dat betekent niet dat je nooit iets anders mag schrijven. Het betekent wel dat je hoofdthema het zwaartepunt moet blijven.
                        </p>

                        <p className="text-primary/80 leading-relaxed mb-6">
                            Topical authority bouw je op door één onderwerp volledig af te dekken met samenhangende, diepgaande artikelen die naar elkaar linken. Benieuwd hoe jouw website ervoor staat en waar je thema nog gaten heeft? Bekijk onze <Link to="/seo" className="text-accent hover:underline">SEO-dienstenpagina</Link> of plan een gratis gesprek via <Link to="/contact" className="text-accent hover:underline">empowers.nl/contact</Link>.
                        </p>

                        <hr className="my-16 border-primary/10" />

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Veelgestelde vragen over topical authority</h2>

                        <div className="space-y-6 not-prose">
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat is topical authority?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Topical authority is de status die je website krijgt wanneer Google en AI-modellen je zien als betrouwbare bron over een specifiek onderwerp. Je bouwt die status op door een thema volledig af te dekken met samenhangende artikelen die naar elkaar verwijzen.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Is topical authority hetzelfde als domeinautoriteit?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Nee. Domeinautoriteit is een score van tools als Moz en Ahrefs, gebaseerd op backlinks naar je hele domein. Topical authority gaat over hoe goed je één onderwerp afdekt. Een kleine site met veel diepgang kan op haar thema winnen van een groot domein.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoeveel artikelen heb je nodig voor topical authority?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Er is geen vast aantal. Het gaat om volledigheid: beantwoord je alle vragen die je doelgroep over het onderwerp stelt? Voor een afgebakend thema kom je vaak uit op enkele tientallen artikelen, van basisuitleg tot verdieping op deelvragen.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Werkt topical authority ook voor kleine websites?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Juist voor kleine websites. Je hoeft niet te concurreren op domeingrootte of backlinks, maar op volledigheid binnen een niche. Een gespecialiseerde site die haar onderwerp grondig behandelt, verslaat op dat thema regelmatig grote platformen met dunne content.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Helpt topical authority om geciteerd te worden door ChatGPT en Perplexity?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Ja. AI-modellen zoeken bronnen die een onderwerp volledig en consistent behandelen. Een site met samenhangende, diepgaande content over één thema wordt eerder herkend als expert en daardoor eerder aangehaald in AI-antwoorden.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Moet je oude content verwijderen die buiten je thema valt?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Niet automatisch. Kijk eerst wat een pagina oplevert aan bezoekers of conversies. Levert een off-topic pagina niets op en verwatert die je themafocus, dan kun je hem verwijderen of samenvoegen. Presteert hij goed, laat hem dan staan.
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
                    <h2 className="relative z-10 font-drama italic text-background text-3xl sm:text-4xl md:text-5xl mb-6">Klaar om dé bron in jouw vakgebied te worden?</h2>
                    <p className="relative z-10 font-sans text-background/70 text-lg mb-10 max-w-xl mx-auto">
                        Wij bouwen contentclusters die Google en AI-modellen herkennen als expertise. Met een strategie, niet met losse blogs.
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
