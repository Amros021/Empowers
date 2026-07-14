import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ChevronRight, User } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function BlogPostPillarPagesTopicClustersAutoriteit() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen selection:bg-accent/30 selection:text-dark flex flex-col bg-background">
            <Helmet>
                <title>Pillar pages en topic clusters: zo bouw je autoriteit op | Empowers</title>
                <meta name="description" content="Pillar pages en topic clusters ordenen je content zo dat Google je als autoriteit ziet. Zo bouw je de structuur op en groei je in de resultaten." />
                <link rel="canonical" href="https://www.empowers.nl/blogs/strategie/pillar-pages-topic-clusters-autoriteit" />
                <meta property="og:title" content="Pillar pages en topic clusters: zo bouw je autoriteit op | Empowers" />
                <meta property="og:description" content="Pillar pages en topic clusters ordenen je content zo dat Google je als autoriteit ziet. Zo bouw je de structuur op en groei je in de resultaten." />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://www.empowers.nl/blogs/strategie/pillar-pages-topic-clusters-autoriteit" />
                <meta property="og:image" content="https://www.empowers.nl/images/blogs/pillar-pages-topic-clusters-autoriteit.jpg" />
                <meta property="article:published_time" content="2026-07-06T08:00:00+02:00" />
                <meta property="article:author" content="Empowers" />
                <meta property="article:section" content="Strategie" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Pillar pages en topic clusters: zo bouw je autoriteit op | Empowers" />
                <meta name="twitter:description" content="Pillar pages en topic clusters ordenen je content zo dat Google je als autoriteit ziet. Zo bouw je de structuur op en groei je in de resultaten." />
                <script type="application/ld+json">{JSON.stringify({
                    "@context": "https://schema.org",
                    "@graph": [
                        {
                            "@type": "Article",
                            "headline": "Pillar pages en topic clusters: zo bouw je autoriteit op",
                            "image": "https://www.empowers.nl/images/blogs/pillar-pages-topic-clusters-autoriteit.jpg",
                            "description": "Pillar pages en topic clusters ordenen je content zo dat Google je als autoriteit ziet. Zo bouw je de structuur op en groei je in de resultaten.",
                            "author": { "@type": "Organization", "name": "Empowers" },
                            "publisher": { "@type": "Organization", "name": "Empowers", "url": "https://www.empowers.nl" },
                            "datePublished": "2026-07-06T08:00:00+02:00",
                            "dateModified": "2026-07-06T08:00:00+02:00",
                            "url": "https://www.empowers.nl/blogs/strategie/pillar-pages-topic-clusters-autoriteit"
                        },
                        {
                            "@type": "BreadcrumbList",
                            "itemListElement": [
                                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.empowers.nl" },
                                { "@type": "ListItem", "position": 2, "name": "Nieuws", "item": "https://www.empowers.nl/nieuws" },
                                { "@type": "ListItem", "position": 3, "name": "Strategie", "item": "https://www.empowers.nl/blogs/strategie" },
                                { "@type": "ListItem", "position": 4, "name": "Pillar pages en topic clusters: zo bouw je autoriteit op", "item": "https://www.empowers.nl/blogs/strategie/pillar-pages-topic-clusters-autoriteit" }
                            ]
                        },
                        {
                            "@type": "FAQPage",
                            "mainEntity": [
                                { "@type": "Question", "name": "Wat is een pillar page?", "acceptedAnswer": { "@type": "Answer", "text": "Een pillar page is een uitvoerige pagina die een groot onderwerp in de breedte behandelt. Hij geeft een compleet overzicht van een thema en verwijst door naar diepere artikelen over de losse onderdelen. De pillar is het kloppend hart van een onderwerp op je website." } },
                                { "@type": "Question", "name": "Wat is een topic cluster?", "acceptedAnswer": { "@type": "Answer", "text": "Een topic cluster is een groep samenhangende pagina's rond een centraal onderwerp. In het midden staat de pillar page, daaromheen staan clusterartikelen die elk een deelvraag uitdiepen. Alle clusterartikelen linken terug naar de pillar, zodat ze samen een netwerk vormen." } },
                                { "@type": "Question", "name": "Waarom werken pillar pages en topic clusters voor SEO?", "acceptedAnswer": { "@type": "Answer", "text": "Door je content te ordenen rond een thema laat je Google zien dat je een onderwerp echt beheerst. De interne links tussen pillar en clusters verdelen autoriteit over je pagina's en helpen zoekmachines de samenhang te begrijpen. Dat vergroot de kans dat je hele cluster beter scoort." } },
                                { "@type": "Question", "name": "Hoeveel clusterartikelen heb je nodig?", "acceptedAnswer": { "@type": "Answer", "text": "Genoeg om de belangrijkste deelvragen rond je onderwerp te beantwoorden, vaak een stuk of vijf tot tien om te beginnen. Kwaliteit telt zwaarder dan aantal. Beter een handvol sterke artikelen die echt iets toevoegen dan twintig dunne stukken die elkaar overlappen." } },
                                { "@type": "Question", "name": "Hoe link je een pillar page en clusters aan elkaar?", "acceptedAnswer": { "@type": "Answer", "text": "Laat elk clusterartikel teruglinken naar de pillar page, en verwijs vanuit de pillar naar de losse clusterartikelen. Link waar het logisch is ook clusters onderling. Gebruik beschrijvende linktekst die vertelt waar de lezer terechtkomt, nooit een vage verwijzing als klik hier." } },
                                { "@type": "Question", "name": "Werken topic clusters ook voor AI-zoekmachines?", "acceptedAnswer": { "@type": "Answer", "text": "Ja. AI-tools zoals ChatGPT en Perplexity halen informatie uit bronnen die een onderwerp grondig behandelen. Een goed opgebouwd cluster dat een thema compleet afdekt, vergroot de kans dat jouw pagina's worden aangehaald wanneer iemand een vraag over dat onderwerp stelt." } }
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
                        <span className="text-primary truncate">Pillar pages en topic clusters</span>
                    </nav>

                    {/* Header */}
                    <header className="mb-16">
                        <div className="inline-block px-3 py-1 bg-accent/10 text-accent font-mono text-xs uppercase tracking-widest rounded-full mb-6">
                            Strategie
                        </div>
                        <h1 className="font-sans font-bold text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight mb-8">
                            Pillar pages en topic clusters: zo bouw je autoriteit op
                        </h1>

                        <div className="flex flex-wrap items-center gap-6 text-sm font-sans text-primary/60 border-y border-primary/10 py-6">
                            <div className="flex items-center gap-2">
                                <User className="w-4 h-4" />
                                <span>Empowers Redactie</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>6 juli 2026</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>8 minuten leestijd</span>
                            </div>
                        </div>
                    </header>

                    {/* Featured Image */}
                    <figure className="w-full h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden mb-16 relative bg-primary">
                        <div className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-overlay" style={{backgroundImage: "url('/images/blogs/pillar-pages-topic-clusters-autoriteit.jpg')"}}></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </figure>

                    {/* Content */}
                    <div className="prose prose-lg prose-headings:font-sans prose-headings:font-bold prose-headings:text-primary prose-p:font-sans prose-p:text-primary/80 prose-p:leading-relaxed max-w-none">
                        <p className="text-xl md:text-2xl font-medium leading-relaxed mb-10 text-primary">
                            Pillar pages en topic clusters zijn een manier om je content zo te ordenen dat Google je als autoriteit ziet. Een pillar page behandelt een groot onderwerp in de breedte. Daaromheen schrijf je clusterartikelen die elk een deelvraag uitdiepen en teruglinken naar de pillar. Samen vormen ze een netwerk dat laat zien dat je een thema echt beheerst.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat is een pillar page?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een pillar page is een uitvoerige pagina die een groot onderwerp in de breedte behandelt. Hij geeft een compleet overzicht van een thema en raakt alle belangrijke onderdelen aan, zonder elk daarvan tot op de bodem uit te werken. Voor de details verwijst de pillar door naar diepere artikelen.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Zie de pillar als het startpunt van een onderwerp op je website. Iemand die "online adverteren" zoekt, landt op een pagina die uitlegt wat het is, welke kanalen er zijn en wat het oplevert. Wie meer wil weten over een specifiek kanaal, klikt door naar het bijbehorende artikel.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat is een topic cluster?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een topic cluster is een groep samenhangende pagina's rond een centraal onderwerp. In het midden staat de pillar page. Daaromheen staan clusterartikelen die elk een deelvraag uitdiepen, en die allemaal terugverwijzen naar de pillar. Het geheel functioneert als een netwerk in plaats van losse pagina's.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een voorbeeld maakt het concreet. Stel dat je pillar gaat over content marketing. Je clusterartikelen behandelen dan onderwerpen als een contentkalender opzetten, het schrijven van sterke teksten en het meten van resultaat. Elk artikel staat op zichzelf, maar samen dekken ze het thema compleet af.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Waarom werkt deze structuur zo goed voor SEO?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Google beloont websites die laten zien dat ze een onderwerp echt beheersen. Een losse pagina over een zoekterm is makkelijk te overtreffen. Een netwerk van samenhangende artikelen dat een heel thema afdekt, straalt veel meer gezag uit en is lastiger in te halen voor de concurrent.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De interne links spelen daarin een hoofdrol. Door pillar en clusters aan elkaar te koppelen, verdeel je autoriteit over je pagina's en help je zoekmachines de samenhang te zien. Een sterk artikel geeft via die links een duwtje aan de rest van het cluster. Dit is een kernonderdeel van moderne <Link to="/seo" className="text-accent hover:underline">SEO</Link>.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Bij onze klanten zien we dat het effect zich opstapelt. Zodra een cluster een paar maanden staat, gaan niet alleen de losse artikelen beter presteren, maar trekt de pillar de hele groep omhoog. Het is een investering die langzaam begint en daarna versnelt.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe bouw je een pillar page en topic cluster op?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Begin bij het grote onderwerp waarop je gevonden wilt worden. Kies een thema dat dicht bij je dienst ligt en breed genoeg is om meerdere artikelen te dragen. Voor dat thema schrijf je de pillar page: een helder overzicht dat alle belangrijke onderdelen benoemt.
                        </p>
                        <h3 className="font-semibold text-primary text-xl mb-3">Breng de deelvragen in kaart</h3>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Verzamel de vragen die mensen rond je onderwerp stellen. Kijk naar wat klanten je vragen en wat er in Google verschijnt bij het hoofdonderwerp. Elke serieuze deelvraag is een potentieel clusterartikel. Zo bouw je de structuur op vanuit wat je doelgroep echt wil weten.
                        </p>
                        <h3 className="font-semibold text-primary text-xl mb-3">Schrijf de clusters en verbind ze</h3>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Werk de deelvragen uit tot zelfstandige artikelen die elk een vraag compleet beantwoorden. Laat ze teruglinken naar de pillar en verwijs vanuit de pillar naar de clusters. Hoe je die teksten zo schrijft dat ze scoren, lees je in onze gids over <Link to="/blogs/strategie/seo-copywriting-schrijven-google-lezer" className="text-accent hover:underline">SEO copywriting voor Google en de lezer</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoeveel clusterartikelen heb je nodig?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Genoeg om de belangrijkste deelvragen rond je onderwerp te beantwoorden. Voor de meeste bedrijven is een stuk of vijf tot tien artikelen een goede start. Daarna breid je uit naarmate je nieuwe vragen tegenkomt. Een cluster mag groeien, het hoeft niet in een keer compleet te zijn.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Let vooral op kwaliteit. Een handvol sterke artikelen die echt iets toevoegen werkt beter dan twintig dunne stukken die elkaar overlappen. Twee artikelen die bijna hetzelfde behandelen, concurreren zelfs met elkaar in de zoekresultaten. Houd elke deelvraag scherp afgebakend.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe onderhoud je een topic cluster op lange termijn?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een cluster is geen project dat af is. Loop het een paar keer per jaar langs en werk verouderde informatie bij. Voeg een nieuw clusterartikel toe zodra je merkt dat er een vraag mist. Een levend cluster blijft groeien in waarde, een verwaarloosd cluster zakt langzaam weg.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Denk daarbij ook aan AI-zoekmachines. Tools zoals ChatGPT en Perplexity halen hun antwoorden uit bronnen die een onderwerp grondig behandelen. Een compleet cluster vergroot de kans dat jouw pagina's worden aangehaald. Dit principe heet <Link to="/geo" className="text-accent hover:underline">GEO (Generative Engine Optimization)</Link> en het versterkt precies wat een goed cluster al doet.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Wil je weten met welk thema je het beste begint en hoe je cluster eruit moet zien? Plan een gratis gesprek via <Link to="/contact" className="text-accent hover:underline">empowers.nl/contact</Link>. We bekijken samen je onderwerpen en bouwen een structuur die je in de resultaten laat groeien.
                        </p>

                        <hr className="my-16 border-primary/10" />

                        <h2 className="text-3xl mb-8">Veelgestelde vragen over pillar pages en topic clusters</h2>

                        <div className="space-y-6 not-prose">
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat is een pillar page?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Een pillar page is een uitvoerige pagina die een groot onderwerp in de breedte behandelt. Hij geeft een compleet overzicht van een thema en verwijst door naar diepere artikelen over de losse onderdelen. De pillar is het kloppend hart van een onderwerp op je website.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat is een topic cluster?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Een topic cluster is een groep samenhangende pagina's rond een centraal onderwerp. In het midden staat de pillar page, daaromheen staan clusterartikelen die elk een deelvraag uitdiepen. Alle clusterartikelen linken terug naar de pillar, zodat ze samen een netwerk vormen.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Waarom werken pillar pages en topic clusters voor SEO?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Door je content te ordenen rond een thema laat je Google zien dat je een onderwerp echt beheerst. De interne links tussen pillar en clusters verdelen autoriteit over je pagina's en helpen zoekmachines de samenhang te begrijpen. Dat vergroot de kans dat je hele cluster beter scoort.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoeveel clusterartikelen heb je nodig?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Genoeg om de belangrijkste deelvragen rond je onderwerp te beantwoorden, vaak een stuk of vijf tot tien om te beginnen. Kwaliteit telt zwaarder dan aantal. Beter een handvol sterke artikelen die echt iets toevoegen dan twintig dunne stukken die elkaar overlappen.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoe link je een pillar page en clusters aan elkaar?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Laat elk clusterartikel teruglinken naar de pillar page, en verwijs vanuit de pillar naar de losse clusterartikelen. Link waar het logisch is ook clusters onderling. Gebruik beschrijvende linktekst die vertelt waar de lezer terechtkomt, nooit een vage verwijzing als klik hier.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Werken topic clusters ook voor AI-zoekmachines?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Ja. AI-tools zoals ChatGPT en Perplexity halen informatie uit bronnen die een onderwerp grondig behandelen. Een goed opgebouwd cluster dat een thema compleet afdekt, vergroot de kans dat jouw pagina's worden aangehaald wanneer iemand een vraag over dat onderwerp stelt.
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
                    <h2 className="relative z-10 font-drama italic text-background text-3xl sm:text-4xl md:text-5xl mb-6">Autoriteit opbouwen in Google?</h2>
                    <p className="relative z-10 font-sans text-background/70 text-lg mb-10 max-w-xl mx-auto">
                        Wil je een contentstructuur die je laat groeien in de zoekresultaten? Plan een gratis gesprek. We bepalen samen je thema en bouwen het cluster op.
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
