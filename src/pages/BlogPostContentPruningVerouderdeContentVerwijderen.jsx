import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ChevronRight, User } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function BlogPostContentPruningVerouderdeContentVerwijderen() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen selection:bg-accent/30 selection:text-dark flex flex-col bg-background">
            <Helmet>
                <title>Content pruning: verouderde content verwijderen voor SEO | Empowers</title>
                <meta name="description" content="Content pruning is het gericht verwijderen of samenvoegen van verouderde pagina's zodat je sterke content beter rankt. Lees hoe je veilig snoeit." />
                <link rel="canonical" href="https://www.empowers.nl/blogs/seo/content-pruning-verouderde-content-verwijderen" />
                <meta property="og:title" content="Content pruning: verouderde content verwijderen voor SEO | Empowers" />
                <meta property="og:description" content="Content pruning is het gericht verwijderen of samenvoegen van verouderde pagina's zodat je sterke content beter rankt. Lees hoe je veilig snoeit." />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://www.empowers.nl/blogs/seo/content-pruning-verouderde-content-verwijderen" />
                <meta property="og:image" content="https://www.empowers.nl/images/blogs/content-pruning-verouderde-content-verwijderen.jpg" />
                <meta property="article:published_time" content="2026-07-27T18:00:00+02:00" />
                <meta property="article:author" content="Empowers" />
                <meta property="article:section" content="SEO" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Content pruning: verouderde content verwijderen voor SEO | Empowers" />
                <meta name="twitter:description" content="Content pruning is het gericht verwijderen of samenvoegen van verouderde pagina's zodat je sterke content beter rankt. Lees hoe je veilig snoeit." />
                <script type="application/ld+json">{JSON.stringify({
                    "@context": "https://schema.org",
                    "@graph": [
                        {
                            "@type": "Article",
                            "headline": "Content pruning: verouderde content verwijderen voor betere SEO",
                            "image": "https://www.empowers.nl/images/blogs/content-pruning-verouderde-content-verwijderen.jpg",
                            "description": "Content pruning is het gericht verwijderen of samenvoegen van verouderde pagina's zodat je sterke content beter rankt. Lees hoe je veilig snoeit.",
                            "author": { "@type": "Organization", "name": "Empowers" },
                            "publisher": { "@type": "Organization", "name": "Empowers", "url": "https://www.empowers.nl" },
                            "datePublished": "2026-07-27T18:00:00+02:00",
                            "dateModified": "2026-07-27T18:00:00+02:00",
                            "url": "https://www.empowers.nl/blogs/seo/content-pruning-verouderde-content-verwijderen"
                        },
                        {
                            "@type": "BreadcrumbList",
                            "itemListElement": [
                                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.empowers.nl" },
                                { "@type": "ListItem", "position": 2, "name": "Nieuws", "item": "https://www.empowers.nl/nieuws" },
                                { "@type": "ListItem", "position": 3, "name": "SEO", "item": "https://www.empowers.nl/blogs/seo" },
                                { "@type": "ListItem", "position": 4, "name": "Content pruning: verouderde content verwijderen voor betere SEO", "item": "https://www.empowers.nl/blogs/seo/content-pruning-verouderde-content-verwijderen" }
                            ]
                        },
                        {
                            "@type": "FAQPage",
                            "mainEntity": [
                                { "@type": "Question", "name": "Wat is content pruning?", "acceptedAnswer": { "@type": "Answer", "text": "Content pruning is het gericht opruimen van pagina's die niets meer bijdragen: verouderde blogs, dunne pagina's en dubbele onderwerpen. Je verwijdert ze, voegt ze samen of werkt ze bij. Het doel is een site waarop elke pagina een reden heeft om te bestaan." } },
                                { "@type": "Question", "name": "Waarom zou content verwijderen goed zijn voor SEO?", "acceptedAnswer": { "@type": "Answer", "text": "Google beoordeelt de kwaliteit van je site als geheel. Een groot archief zwakke pagina's drukt dat gemiddelde en verspilt crawlbudget. Door dood gewicht weg te halen, valt je sterke content beter op en gaat de aandacht van zoekmachines naar de pagina's die ertoe doen." } },
                                { "@type": "Question", "name": "Verlies ik geen verkeer als ik pagina's verwijder?", "acceptedAnswer": { "@type": "Answer", "text": "Niet als je goed selecteert: je snoeit alleen pagina's die al vrijwel geen verkeer trekken. Check per pagina de cijfers over een heel jaar, zodat seizoenspieken meetellen. Pagina's met verkeer of backlinks verwijder je niet maar verbeter je, of je stuurt ze met een 301-redirect naar een sterker alternatief." } },
                                { "@type": "Question", "name": "Moet ik een oude pagina verwijderen of redirecten?", "acceptedAnswer": { "@type": "Answer", "text": "Heeft de pagina backlinks, intern verkeer of een logisch alternatief op je site, kies dan een 301-redirect naar de meest relevante pagina. Alleen als er geen enkel signaal naar de pagina wijst en er geen goed alternatief bestaat, mag hij echt weg met een 404 of 410." } },
                                { "@type": "Question", "name": "Hoe vaak moet je content snoeien?", "acceptedAnswer": { "@type": "Answer", "text": "Eén keer per jaar meenemen in je content audit is voor de meeste sites genoeg. Grote sites die veel publiceren, snoeien vaker. Belangrijker dan de frequentie is de discipline: liever elk jaar een kleine ronde dan eens per vijf jaar een sanering van honderden pagina's." } },
                                { "@type": "Question", "name": "Werkt content pruning ook voor webshops?", "acceptedAnswer": { "@type": "Answer", "text": "Juist daar. Uitverkochte producten, lege categorieën en verlopen acties stapelen zich in webshops snel op. Producten die tijdelijk weg zijn geef je een voorraadmelding, definitief verdwenen producten redirect je naar de categorie of een vergelijkbaar product. Dat houdt de shop fris voor bezoekers en zoekmachines." } }
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
                        <span className="text-primary truncate">Content pruning</span>
                    </nav>

                    {/* Header */}
                    <header className="mb-16">
                        <div className="inline-block px-3 py-1 bg-accent/10 text-accent font-mono text-xs uppercase tracking-widest rounded-full mb-6">
                            SEO
                        </div>
                        <h1 className="font-sans font-bold text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight mb-8">
                            Content pruning: verouderde content verwijderen voor betere SEO
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
                        <div className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-overlay" style={{backgroundImage: "url('/images/blogs/content-pruning-verouderde-content-verwijderen.jpg')"}}></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </figure>

                    {/* Content */}
                    <div className="prose prose-lg prose-headings:font-sans prose-headings:font-bold prose-headings:text-primary prose-p:font-sans prose-p:text-primary/80 prose-p:leading-relaxed max-w-none">
                        <p className="text-xl md:text-2xl font-medium leading-relaxed mb-10 text-primary">
                            Content pruning is het snoeien van je website: pagina's die niets meer bijdragen verwijder je, voeg je samen of werk je bij. Net als bij een boom gaat het niet om minder, maar om beter. Een site zonder dood hout geeft zijn sterke pagina's meer ruimte, bij bezoekers én bij Google.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat is content pruning?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De term komt uit het tuinieren: pruning betekent snoeien. Toegepast op je website is het de bewuste keuze om pagina's op te ruimen die hun functie verloren hebben. De blog over een event uit 2021. De dienstpagina van iets wat je niet meer aanbiedt. De vijf artikelen die ooit voor een campagne geschreven zijn en sindsdien nul bezoekers trokken.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Snoeien betekent niet per definitie verwijderen. De uitkomst per pagina kan ook samenvoegen zijn, of grondig actualiseren. Het gaat om de vraag die eronder ligt: verdient deze pagina zijn plek op mijn site nog?
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Content pruning is daarmee het uitvoerende broertje van de <Link to="/blogs/seo/seo-content-audit" className="text-accent hover:underline">SEO content audit</Link>: de audit levert het oordeel, de pruning voert het uit.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Waarom is content verwijderen goed voor SEO?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Het voelt tegennatuurlijk. Meer pagina's betekent toch meer kansen om gevonden te worden? In de praktijk werkt het andersom zodra die pagina's zwak zijn.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Google beoordeelt sites steeds meer als geheel. Een domein waar de helft van de pagina's dun, verouderd of irrelevant is, straalt dat af op de rest. Sinds de nadruk op behulpzame content geldt: veel matige pagina's kunnen het vertrouwen in je hele site drukken. Wie snoeit, verhoogt het gemiddelde.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Er is ook een praktische kant. Zoekmachines besteden per site een beperkte hoeveelheid crawltijd. Elke bezoekloze pagina die gecrawld wordt, gaat ten koste van de pagina's waar je het van moet hebben. En je bezoekers? Die vinden sneller wat ze zoeken op een site zonder ruis.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Welke pagina's komen in aanmerking voor de snoeischaar?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Kijk naar pagina's die op alle fronten stil zijn: vrijwel geen vertoningen en klikken in Search Console over een heel jaar, geen backlinks, geen interne rol. Denk aan oude nieuwsberichten, verlopen acties, dunne tagpagina's en blogs over onderwerpen die niets met je aanbod te maken hebben.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Wees voorzichtig met pagina's die wél iets doen. Een artikel met weinig verkeer maar sterke backlinks houd je, of je stuurt zijn waarde door via een redirect. Een seizoenspagina die elk voorjaar oplaait, lijkt in november dood maar is het niet. Meet daarom altijd over twaalf maanden.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Bij een opruimronde voor een klantwebsite kwamen we een categorie tegen met tientallen nieuwsberichten van jaren oud, samen goed voor een handvol bezoekers per maand. Na het samenvoegen van het bruikbare deel en het redirecten van de rest bleef er een overzichtelijk archief over dat wél gecrawld en gelezen wordt.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe snoei je zonder verkeer te verliezen?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De gouden regel: elke URL die verdwijnt, krijgt een bestemming. Is er een relevante vervanger, dan zet je een 301-redirect naar die pagina. Zo behoud je de waarde van eventuele links en komt niemand op een doodlopend spoor. Redirect alleen naar de homepage als er echt geen beter alternatief is, want massale homepage-redirects behandelt Google als zachte 404's.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Bestaat er geen alternatief, dan is een nette 404 of 410 prima. Dat is geen falen: het is het eerlijke signaal dat content niet meer bestaat. Werk daarna wel je interne links en je sitemap bij, zodat je site nergens meer naar de verdwenen pagina's verwijst.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Documenteer wat je doet. Een simpel overzicht van verwijderde URL's en hun bestemming maakt het mogelijk om terug te draaien als een pagina toch waarde blijkt te hebben. En snoei in fases: eerst een deel, twee weken meten in Search Console, dan verder.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Overweeg bij twijfelgevallen een tussenweg: eerst actualiseren en drie maanden de kans geven. Trekt de pagina daarna nog steeds niets aan, dan is het besluit alsnog snel genomen, maar dan wel op basis van een eerlijke test in plaats van een aanname.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat zijn de risico's van te hard snoeien?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De valkuil is rigoureus opruimen op onderbuikgevoel. Wie zonder data snoeit, gooit gegarandeerd een keer een pagina weg die stilletjes conversies aanleverde of als landingspagina voor een nieuwsbrief diende. Vandaar: eerst meten, dan pas knippen.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Let ook op samenhang. Een artikel dat zelf weinig verkeer trekt maar als schakel dient in een <Link to="/blogs/seo/content-cluster-opbouwen" className="text-accent hover:underline">content cluster</Link>, heeft een functie die je niet in de bezoekcijfers terugziet. Beoordeel pagina's dus nooit puur op hun eigen verkeer, maar ook op hun rol in het geheel.
                        </p>

                        <p className="text-primary/80 leading-relaxed mb-6">
                            Goed snoeien maakt je site dus lichter, scherper en beter vindbaar. Twijfel je welke pagina's op jouw site weg kunnen en welke juist goud waard zijn? Bekijk onze <Link to="/seo" className="text-accent hover:underline">SEO-dienstenpagina</Link> of plan een gratis gesprek via <Link to="/contact" className="text-accent hover:underline">empowers.nl/contact</Link>.
                        </p>

                        <hr className="my-16 border-primary/10" />

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Veelgestelde vragen over content pruning</h2>

                        <div className="space-y-6 not-prose">
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat is content pruning?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Content pruning is het gericht opruimen van pagina's die niets meer bijdragen: verouderde blogs, dunne pagina's en dubbele onderwerpen. Je verwijdert ze, voegt ze samen of werkt ze bij. Het doel is een site waarop elke pagina een reden heeft om te bestaan.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Waarom zou content verwijderen goed zijn voor SEO?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Google beoordeelt de kwaliteit van je site als geheel. Een groot archief zwakke pagina's drukt dat gemiddelde en verspilt crawlbudget. Door dood gewicht weg te halen, valt je sterke content beter op en gaat de aandacht van zoekmachines naar de pagina's die ertoe doen.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Verlies ik geen verkeer als ik pagina's verwijder?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Niet als je goed selecteert: je snoeit alleen pagina's die al vrijwel geen verkeer trekken. Check per pagina de cijfers over een heel jaar, zodat seizoenspieken meetellen. Pagina's met verkeer of backlinks verwijder je niet maar verbeter je, of je stuurt ze met een 301-redirect naar een sterker alternatief.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Moet ik een oude pagina verwijderen of redirecten?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Heeft de pagina backlinks, intern verkeer of een logisch alternatief op je site, kies dan een 301-redirect naar de meest relevante pagina. Alleen als er geen enkel signaal naar de pagina wijst en er geen goed alternatief bestaat, mag hij echt weg met een 404 of 410.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoe vaak moet je content snoeien?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Eén keer per jaar meenemen in je content audit is voor de meeste sites genoeg. Grote sites die veel publiceren, snoeien vaker. Belangrijker dan de frequentie is de discipline: liever elk jaar een kleine ronde dan eens per vijf jaar een sanering van honderden pagina's.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Werkt content pruning ook voor webshops?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Juist daar. Uitverkochte producten, lege categorieën en verlopen acties stapelen zich in webshops snel op. Producten die tijdelijk weg zijn geef je een voorraadmelding, definitief verdwenen producten redirect je naar de categorie of een vergelijkbaar product. Dat houdt de shop fris voor bezoekers en zoekmachines.
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
                    <h2 className="relative z-10 font-drama italic text-background text-3xl sm:text-4xl md:text-5xl mb-6">Tijd om te snoeien?</h2>
                    <p className="relative z-10 font-sans text-background/70 text-lg mb-10 max-w-xl mx-auto">
                        Wij bepalen op basis van data welke pagina's blijven, samengaan of verdwijnen. Jouw site wordt er alleen maar sterker van.
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
