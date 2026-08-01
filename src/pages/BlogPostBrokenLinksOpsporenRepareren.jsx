import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ChevronRight, User } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function BlogPostBrokenLinksOpsporenRepareren() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen selection:bg-accent/30 selection:text-dark flex flex-col bg-background">
            <Helmet>
                <title>Broken links opsporen en repareren | Empowers</title>
                <meta name="description" content="Broken links kosten je bezoekers, crawlbudget en autoriteit. Lees hoe je kapotte links opspoort met gratis tools en ze slim repareert met redirects." />
                <link rel="canonical" href="https://www.empowers.nl/blogs/seo/broken-links-opsporen-repareren" />
                <meta property="og:title" content="Broken links opsporen en repareren | Empowers" />
                <meta property="og:description" content="Broken links kosten je bezoekers, crawlbudget en autoriteit. Lees hoe je kapotte links opspoort met gratis tools en ze slim repareert met redirects." />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://www.empowers.nl/blogs/seo/broken-links-opsporen-repareren" />
                <meta property="og:image" content="https://www.empowers.nl/images/blogs/broken-links-opsporen-repareren.jpg" />
                <meta property="article:published_time" content="2026-07-27T13:00:00+02:00" />
                <meta property="article:author" content="Empowers" />
                <meta property="article:section" content="SEO" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Broken links opsporen en repareren | Empowers" />
                <meta name="twitter:description" content="Broken links kosten je bezoekers, crawlbudget en autoriteit. Lees hoe je kapotte links opspoort met gratis tools en ze slim repareert met redirects." />
                <script type="application/ld+json">{JSON.stringify({
                    "@context": "https://schema.org",
                    "@graph": [
                        {
                            "@type": "Article",
                            "headline": "Broken links opsporen en repareren",
                            "image": "https://www.empowers.nl/images/blogs/broken-links-opsporen-repareren.jpg",
                            "description": "Broken links kosten je bezoekers, crawlbudget en autoriteit. Lees hoe je kapotte links opspoort met gratis tools en ze slim repareert met redirects.",
                            "author": { "@type": "Organization", "name": "Empowers" },
                            "publisher": { "@type": "Organization", "name": "Empowers", "url": "https://www.empowers.nl" },
                            "datePublished": "2026-07-27T13:00:00+02:00",
                            "dateModified": "2026-07-27T13:00:00+02:00",
                            "url": "https://www.empowers.nl/blogs/seo/broken-links-opsporen-repareren"
                        },
                        {
                            "@type": "BreadcrumbList",
                            "itemListElement": [
                                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.empowers.nl" },
                                { "@type": "ListItem", "position": 2, "name": "Nieuws", "item": "https://www.empowers.nl/nieuws" },
                                { "@type": "ListItem", "position": 3, "name": "SEO", "item": "https://www.empowers.nl/blogs/seo" },
                                { "@type": "ListItem", "position": 4, "name": "Broken links opsporen en repareren", "item": "https://www.empowers.nl/blogs/seo/broken-links-opsporen-repareren" }
                            ]
                        },
                        {
                            "@type": "FAQPage",
                            "mainEntity": [
                                { "@type": "Question", "name": "Wat is een broken link?", "acceptedAnswer": { "@type": "Answer", "text": "Een broken link is een link die naar een pagina wijst die niet meer bestaat of niet bereikbaar is. De bezoeker komt dan op een 404-pagina terecht. Kapotte links ontstaan doordat pagina's verwijderd worden, URL's veranderen bij een migratie of externe websites offline gaan." } },
                                { "@type": "Question", "name": "Zijn broken links slecht voor SEO?", "acceptedAnswer": { "@type": "Answer", "text": "Een enkele kapotte link breekt je rankings niet, maar op schaal kosten ze wel wat. Crawlers verspillen tijd aan dode paden, interne autoriteit lekt weg bij links naar verdwenen pagina's en bezoekers haken af. Vooral na een migratie kan een grote hoeveelheid kapotte links merkbaar pijn doen." } },
                                { "@type": "Question", "name": "Hoe vind ik broken links op mijn website?", "acceptedAnswer": { "@type": "Answer", "text": "Crawl je site met Screaming Frog, dat in de gratis versie tot 500 URL's scant en alle links met een foutcode toont, inclusief de pagina waar de link op staat. In Google Search Console zie je onder Indexering welke van je eigen URL's een 404 geven en waar Google ze vandaan heeft." } },
                                { "@type": "Question", "name": "Hoe repareer ik een kapotte interne link?", "acceptedAnswer": { "@type": "Answer", "text": "Bestaat de doelpagina nog onder een andere URL, pas dan de link aan naar het juiste adres. Is de pagina bewust verwijderd, verwijder dan de link of verwijs naar het beste alternatief. Zet daarnaast een 301-redirect van de oude URL naar de vervanger, zodat ook externe links en bookmarks goed uitkomen." } },
                                { "@type": "Question", "name": "Wat doe ik met kapotte links naar externe websites?", "acceptedAnswer": { "@type": "Answer", "text": "Zoek eerst of de externe pagina een nieuwe locatie heeft en werk de link bij. Bestaat de bron niet meer, vervang hem dan door een vergelijkbare betrouwbare bron of haal de link weg. Externe links controleer je het makkelijkst mee in dezelfde crawl waarmee je je interne links checkt." } },
                                { "@type": "Question", "name": "Hoe vaak moet ik mijn links controleren?", "acceptedAnswer": { "@type": "Answer", "text": "Voor de meeste websites is een crawl per kwartaal genoeg. Controleer daarnaast altijd direct na een migratie, een redesign of het verwijderen van pagina's, want dat zijn de momenten waarop kapotte links massaal ontstaan. Grote webshops met veel wisselend aanbod checken vaker." } }
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
                        <span className="text-primary truncate">Broken links</span>
                    </nav>

                    {/* Header */}
                    <header className="mb-16">
                        <div className="inline-block px-3 py-1 bg-accent/10 text-accent font-mono text-xs uppercase tracking-widest rounded-full mb-6">
                            SEO
                        </div>
                        <h1 className="font-sans font-bold text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight mb-8">
                            Broken links opsporen en repareren
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
                        <div className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-overlay" style={{backgroundImage: "url('/images/blogs/broken-links-opsporen-repareren.jpg')"}}></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </figure>

                    {/* Content */}
                    <div className="prose prose-lg prose-headings:font-sans prose-headings:font-bold prose-headings:text-primary prose-p:font-sans prose-p:text-primary/80 prose-p:leading-relaxed max-w-none">
                        <p className="text-xl md:text-2xl font-medium leading-relaxed mb-10 text-primary">
                            Broken links spoor je op met een crawler zoals Screaming Frog of via Google Search Console, en je repareert ze door de link bij te werken of de oude URL met een 301-redirect naar een vervanger te sturen. Kapotte links kosten je bezoekers en crawlbudget, en na een migratie kunnen ze zich met honderden tegelijk aandienen.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat is een broken link en hoe ontstaat hij?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een broken link is een link die nergens meer heen leidt. De bezoeker klikt en komt uit op een 404-pagina: niet gevonden. Dat kan een interne link zijn, van de ene pagina op je site naar de andere, of een externe link naar een andere website.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Ze ontstaan zelden door slordigheid. Meestal is het gewoon tijd. Je verwijdert een product dat uit het assortiment gaat, een collega herschrijft een URL, een website waar je ooit naar linkte houdt op te bestaan. Elke keer blijft ergens een link achter die naar het oude adres wijst.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Het piekmoment is de migratie. Nieuwe site, nieuwe URL-structuur, en elke oude link op je site en daarbuiten wijst opeens naar een adres dat niet meer bestaat. Wie dan geen redirectplan heeft, ziet het foutenrapport in Search Console binnen weken vollopen.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Waarom zijn kapotte links slecht voor SEO?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Eerst het eerlijke verhaal: één kapotte link kost je geen posities. Google begrijpt dat het web verandert en een 404 is een normaal onderdeel daarvan.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Op schaal wordt het een ander verhaal. Interne links geven autoriteit door aan de pagina waar ze naartoe wijzen. Wijst een link naar een dode pagina, dan verdampt dat signaal. Crawlers volgen bovendien elke link die ze tegenkomen, en elk dood pad is verspilde crawltijd die niet naar je echte pagina's gaat. Hoe dat crawlen precies werkt, lees je in ons artikel over de <Link to="/blogs/seo/web-crawler-uitgelegd-google-site" className="text-accent hover:underline">web crawler van Google</Link>.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            En dan de bezoeker zelf. Wie twee keer op een dode link klikt, vertrekt. Dat gedrag ziet er voor jou uit als een hogere bounce en een gemiste aanvraag. De schade van kapotte links zit dus maar half in de zoekmachine.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe spoor je broken links op?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De grondigste methode is een crawl van je eigen site. Screaming Frog scant in de gratis versie tot 500 URL's en geeft per kapotte link precies aan op welke pagina hij staat en waar hij naartoe wijst. Dat laatste is goud waard, want een 404 vinden is makkelijk. Weten waar de link staat die ernaar verwijst, dat is waar het werk zit.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Google Search Console pakt het van de andere kant. Onder Indexering zie je welke URL's van jouw site een 404 geven en via welke verwijzende pagina Google ze vond. Zo zie je ook externe websites die naar een verdwenen pagina van jou linken. Juist die zijn interessant: daar wijst autoriteit van buitenaf naar een dood adres.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Voor een snelle steekproef bestaan er browserextensies en online checkers waar je een enkele pagina doorheen haalt. Prima voor tussendoor. Voor het volledige beeld blijft de crawl de standaard.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe repareer je broken links slim?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Per gevonden link maak je een simpele keuze. Bestaat de doelpagina nog, maar onder een andere URL? Werk de link bij. Is de pagina bewust weg? Verwijder de link of verwijs naar het beste alternatief. Niets is zo onhandig als een link die naar een lege huls verwijst omdat niemand durfde te kiezen.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Zet daarnaast een 301-redirect van de oude URL naar zijn opvolger. Daarmee vang je alles op wat je niet zelf kunt aanpassen: externe links, bookmarks en oude zoekresultaten. Kies wel een echt relevante bestemming. Alles blind naar de homepage doorsturen behandelt Google op den duur als een zachte 404, en dan ben je alsnog niets opgeschoten.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            In de praktijk merken we dat het herstellen van kapotte links na een migratie vaak een van de snelste verbeteringen is die je kunt doorvoeren: het verlies zit er al, het herstel is puur winst.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe voorkom je nieuwe kapotte links?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Maak van de linkcheck een gewoonte in plaats van een eenmalige schoonmaak. Plan een crawl per kwartaal en loop het 404-rapport in Search Console maandelijks even door. Verwijder je een pagina, regel dan meteen de redirect, niet achteraf.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Ga je migreren of je URL-structuur aanpassen, maak dan vooraf een redirectlijst van elke oude URL naar zijn nieuwe bestemming. Dat ene spreadsheet voorkomt maanden herstelwerk. De linkcheck hoort verder standaard in elke <Link to="/blogs/seo/technische-seo-audit" className="text-accent hover:underline">technische SEO-audit</Link>, samen met je indexering en snelheid.
                        </p>

                        <p className="text-primary/80 leading-relaxed mb-6">
                            Kapotte links vind je dus met een gratis crawl en repareer je met bijgewerkte links en gerichte redirects. Wil je weten hoeveel waarde er op jouw site weglekt? Bekijk onze <Link to="/seo" className="text-accent hover:underline">SEO-dienstenpagina</Link> of plan een gratis gesprek via <Link to="/contact" className="text-accent hover:underline">empowers.nl/contact</Link>.
                        </p>

                        <hr className="my-16 border-primary/10" />

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Veelgestelde vragen over broken links</h2>

                        <div className="space-y-6 not-prose">
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat is een broken link?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Een broken link is een link die naar een pagina wijst die niet meer bestaat of niet bereikbaar is. De bezoeker komt dan op een 404-pagina terecht. Kapotte links ontstaan doordat pagina's verwijderd worden, URL's veranderen bij een migratie of externe websites offline gaan.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Zijn broken links slecht voor SEO?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Een enkele kapotte link breekt je rankings niet, maar op schaal kosten ze wel wat. Crawlers verspillen tijd aan dode paden, interne autoriteit lekt weg bij links naar verdwenen pagina's en bezoekers haken af. Vooral na een migratie kan een grote hoeveelheid kapotte links merkbaar pijn doen.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoe vind ik broken links op mijn website?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Crawl je site met Screaming Frog, dat in de gratis versie tot 500 URL's scant en alle links met een foutcode toont, inclusief de pagina waar de link op staat. In Google Search Console zie je onder Indexering welke van je eigen URL's een 404 geven en waar Google ze vandaan heeft.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoe repareer ik een kapotte interne link?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Bestaat de doelpagina nog onder een andere URL, pas dan de link aan naar het juiste adres. Is de pagina bewust verwijderd, verwijder dan de link of verwijs naar het beste alternatief. Zet daarnaast een 301-redirect van de oude URL naar de vervanger, zodat ook externe links en bookmarks goed uitkomen.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat doe ik met kapotte links naar externe websites?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Zoek eerst of de externe pagina een nieuwe locatie heeft en werk de link bij. Bestaat de bron niet meer, vervang hem dan door een vergelijkbare betrouwbare bron of haal de link weg. Externe links controleer je het makkelijkst mee in dezelfde crawl waarmee je je interne links checkt.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoe vaak moet ik mijn links controleren?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Voor de meeste websites is een crawl per kwartaal genoeg. Controleer daarnaast altijd direct na een migratie, een redesign of het verwijderen van pagina's, want dat zijn de momenten waarop kapotte links massaal ontstaan. Grote webshops met veel wisselend aanbod checken vaker.
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
                    <h2 className="relative z-10 font-drama italic text-background text-3xl sm:text-4xl md:text-5xl mb-6">Lopen jouw bezoekers dood?</h2>
                    <p className="relative z-10 font-sans text-background/70 text-lg mb-10 max-w-xl mx-auto">
                        Wij brengen elke kapotte link op je site in kaart en zorgen dat bezoekers en autoriteit weer op de juiste plek uitkomen.
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
