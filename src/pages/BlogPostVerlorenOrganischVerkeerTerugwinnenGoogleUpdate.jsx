import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ChevronRight, User } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function BlogPostVerlorenOrganischVerkeerTerugwinnenGoogleUpdate() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen selection:bg-accent/30 selection:text-dark flex flex-col bg-background">
            <Helmet>
                <title>Verloren organisch verkeer terugwinnen na een Google update | Empowers</title>
                <meta name="description" content="Organisch verkeer kwijt na een Google update? Zo analyseer je welke pagina's zijn geraakt, wat de update beloont en hoe je stap voor stap herstelt." />
                <link rel="canonical" href="https://www.empowers.nl/blogs/seo/verloren-organisch-verkeer-terugwinnen-google-update" />
                <meta property="og:title" content="Verloren organisch verkeer terugwinnen na een Google update" />
                <meta property="og:description" content="Geraakt door een core update? Zo vind je uit welke pagina's zijn gedaald en bouw je aan herstel dat blijft." />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://www.empowers.nl/blogs/seo/verloren-organisch-verkeer-terugwinnen-google-update" />
                <meta property="og:image" content="https://www.empowers.nl/images/blogs/verloren-organisch-verkeer-terugwinnen-google-update.jpg" />
                <meta property="article:published_time" content="2026-08-01T20:00:00+02:00" />
                <meta property="article:author" content="Empowers" />
                <meta property="article:section" content="SEO" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Verloren organisch verkeer terugwinnen na een Google update" />
                <meta name="twitter:description" content="Zo herstel je van een Google core update, stap voor stap." />

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@graph": [
                            {
                                "@type": "Article",
                                "headline": "Verloren organisch verkeer terugwinnen na een Google update",
                                "description": "Organisch verkeer kwijt na een Google update? Zo analyseer je welke pagina's zijn geraakt, wat de update beloont en hoe je stap voor stap herstelt.",
                                "image": "https://www.empowers.nl/images/blogs/verloren-organisch-verkeer-terugwinnen-google-update.jpg",
                                "datePublished": "2026-08-01T20:00:00+02:00",
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
                                    { "@type": "ListItem", "position": 4, "name": "Verloren organisch verkeer terugwinnen na een Google update", "item": "https://www.empowers.nl/blogs/seo/verloren-organisch-verkeer-terugwinnen-google-update" }
                                ]
                            },
                            {
                                "@type": "FAQPage",
                                "mainEntity": [
                                    {
                                        "@type": "Question",
                                        "name": "Hoe weet ik zeker dat een Google update de oorzaak is van mijn verkeersdaling?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Vergelijk de startdatum van je daling met de officiële updatekalender op de Google Search Status pagina. Valt je daling samen met een aangekondigde update en zie je in Search Console dat posities over de brede linie zakten, dan is de update de waarschijnlijke oorzaak. Sluit eerst technische problemen en seizoenseffecten uit."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Hoe snel kan ik herstellen van een core update?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Volledig herstel volgt vaak pas bij een volgende core update, en die komen enkele keren per jaar. Verbeteringen die je nu doorvoert, hebben dus tijd nodig om beloond te worden. Tussentijds kunnen individuele pagina's wel al stijgen als je ze inhoudelijk sterker maakt."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Moet ik geraakte pagina's verwijderen?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Alleen als een pagina geen zoekvraag bedient en niets toevoegt. Verbeteren gaat vrijwel altijd boven verwijderen. Dunne pagina's over hetzelfde onderwerp kun je beter samenvoegen tot één sterke pagina en doorverwijzen, dan raak je de opgebouwde waarde niet kwijt."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Wat beloont Google met een core update?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Content die uit eigen ervaring en expertise geschreven is en de bezoeker echt verder helpt. Google beschrijft dit zelf als people-first content. Pagina's die vooral voor de zoekmachine zijn gemaakt, met veel volume en weinig inhoud, verliezen bij updates het vaakst."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Is een verkeersdaling altijd mijn eigen schuld?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Nee. Soms verschuift Google de resultaten zelf, bijvoorbeeld door meer AI-antwoorden of andere resultaattypes bovenaan te tonen. Je posities blijven dan gelijk terwijl je klikken dalen. Check daarom in Search Console of je positie daalde of alleen je doorklikratio."
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
                        <span className="text-primary truncate">Verkeer terugwinnen na Google update</span>
                    </nav>

                    {/* Header */}
                    <header className="mb-16">
                        <div className="inline-block px-3 py-1 bg-accent/10 text-accent font-mono text-xs uppercase tracking-widest rounded-full mb-6">
                            SEO
                        </div>
                        <h1 className="font-sans font-bold text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight mb-8">
                            Verloren organisch verkeer terugwinnen na een Google update
                        </h1>
                        <div className="flex flex-wrap items-center gap-6 text-sm font-sans text-primary/60 border-y border-primary/10 py-6">
                            <div className="flex items-center gap-2"><User className="w-4 h-4" /><span>Empowers Redactie</span></div>
                            <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>1 augustus 2026</span></div>
                            <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>8 minuten leestijd</span></div>
                        </div>
                    </header>

                    {/* Featured Image */}
                    <figure className="w-full h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden mb-16 relative bg-primary">
                        <div className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-overlay" style={{ backgroundImage: "url('/images/blogs/verloren-organisch-verkeer-terugwinnen-google-update.jpg')" }}></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </figure>

                    {/* Content */}
                    <div className="prose prose-lg max-w-none prose-headings:text-primary prose-headings:font-bold prose-a:text-accent prose-a:underline hover:prose-a:text-accent/80">
                        <p className="text-xl leading-relaxed text-primary/80 font-medium mb-6">
                            Verloren organisch verkeer na een Google update win je terug in drie fasen. Eerst stel je vast of de update echt de oorzaak is. Dan analyseer je welke pagina's en zoekwoorden zijn geraakt en wat de winnaars in jouw markt anders doen. Pas daarna ga je verbeteren, gericht op de pagina's waar het verlies zit. Paniekmaatregelen in de eerste week maken het meestal erger.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe stel je vast dat een update de oorzaak is?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Begin met de datum. Google publiceert aangekondigde updates op zijn Search Status Dashboard. Valt de start van jouw daling samen met zo'n update, dan heb je een sterke aanwijzing. Core updates rollen doorgaans in één tot twee weken uit, dus een daling die zich in die periode opbouwt past in het plaatje.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Sluit daarna de andere verdachten uit. Een gedaalde positie is iets anders dan een gedaalde doorklikratio: check in Google Search Console of je gemiddelde positie zakte, of dat alleen je klikken terugliepen bij gelijke posities. Dat laatste wijst eerder op een veranderd zoekresultaat, bijvoorbeeld door AI-antwoorden bovenaan. Kijk ook naar seizoenseffecten door te vergelijken met dezelfde periode vorig jaar, en sluit technische problemen uit zoals een per ongeluk geplaatste noindex.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Welke pagina's zijn geraakt en waarom?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een update raakt zelden je hele site even hard. Vergelijk in Search Console de periode na de update met de periode ervoor en sorteer op verschil in klikken. Meestal zie je een patroon: een bepaald type pagina levert in, bijvoorbeeld dunne blogartikelen of verouderde pagina's, terwijl je sterke pagina's overeind blijven.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Bekijk vervolgens wie er gewonnen heeft. Zoek op je belangrijkste verloren zoekwoorden en bestudeer de pagina's die nu boven je staan. Zijn ze actueler? Concreter? Geschreven vanuit eigen ervaring? Het verschil tussen jouw pagina en de nieuwe nummer één is je verbeterlijst. Core updates belonen wat Google people-first content noemt: pagina's die een vraag echt beantwoorden in plaats van er alleen op mikken.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe herstel je: verbeteren, samenvoegen of opruimen?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Werk vanuit je analyse, niet vanuit paniek. Voor je waardevolle geraakte pagina's geldt: maak ze aantoonbaar beter. Actualiseer de inhoud, voeg eigen ervaring en concrete voorbeelden toe, beantwoord de vervolgvragen die de concurrent laat liggen. Kleine cosmetische wijzigingen doen niets; de pagina moet inhoudelijk sterker worden.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Heb je veel dunne pagina's over hetzelfde onderwerp, voeg ze dan samen tot één sterke pagina en verwijs de oude URL's door. Pagina's die geen enkele zoekvraag bedienen en niets toevoegen, kun je opruimen. Zo verhoog je de gemiddelde kwaliteit van je domein, en daar kijken core updates naar. Hoe je dat aanpakt zonder waarde te verliezen, lees je in onze <Link to="/blogs/seo/content-pruning-verouderde-content-verwijderen" className="text-accent hover:underline">blog over content pruning</Link>.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Eén waarschuwing uit de praktijk: ga niet alles tegelijk omgooien. Na een update zien we regelmatig site-eigenaren die in paniek titels, URL-structuren en teksten in één week herschrijven. Dan kun je later onmogelijk vaststellen wat werkte en wat schade aanrichtte. Verbeter gestructureerd en houd bij wat je wanneer aanpast.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe lang duurt herstel na een core update?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Hier is eerlijkheid op zijn plaats: vaak langer dan je hoopt. Google geeft zelf aan dat sites die door een core update zijn geraakt, het volledige herstel meestal pas zien bij een volgende core update. Die komen enkele keren per jaar. De verbeteringen die je nu doorvoert, zijn dus een investering waarvan het rendement met vertraging komt.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Dat betekent niet dat er tussentijds niets gebeurt. Individuele pagina's die je flink verbetert, kunnen ook tussen updates door stijgen. En de nieuwe content die je publiceert, wordt gewoon op eigen kracht beoordeeld. Blijf dus bouwen terwijl je herstelt. Wat een realistisch tijdspad is voor SEO-groei, lees je in onze <Link to="/blogs/seo/lang-duurt-seo-realistische-verwachtingen" className="text-accent hover:underline">blog over hoe lang SEO duurt</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat doe je met je advertenties tijdens het herstel?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een praktische tussenoplossing die vaak vergeten wordt: vang het verlies tijdelijk op met betaald verkeer. Als een categorie of dienst opeens organisch onzichtbaar is, kun je de belangrijkste zoekwoorden tijdelijk afdekken met zoekadvertenties terwijl je aan herstel werkt. Zo blijft je omzet op peil en verlies je geen marktaandeel aan de concurrent die jouw plek innam. Zodra je organische posities terugkomen, schaal je het budget weer af. Hoe je dat opzet, lees je op onze pagina over <Link to="/google-ads" className="text-accent hover:underline">Google Ads</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe maak je je site bestand tegen volgende updates?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Sites die update na update overeind blijven, hebben een paar dingen gemeen. Ze schrijven vanuit echte expertise en laten dat zien. Ze onderhouden hun content in plaats van alleen te publiceren. Ze bouwen aan autoriteit met verdiende links en een herkenbaar merk. En ze spreiden hun risico: wie naast Google ook verkeer haalt uit e-mail en andere kanalen, voelt een update minder hard. Zichtbaarheid in AI-zoekmachines wordt daarbij steeds belangrijker; hoe je daaraan werkt, lees je op onze pagina over <Link to="/geo" className="text-accent hover:underline">GEO</Link>.
                        </p>

                        <p className="text-primary/80 leading-relaxed mb-6">
                            Geraakt door een update en geen zicht op waar het verlies zit? Onze <Link to="/seo" className="text-accent hover:underline">SEO-specialisten</Link> analyseren welke pagina's zijn gedaald en maken een herstelplan op volgorde van impact. Plan een gratis gesprek via onze <Link to="/contact" className="text-accent hover:underline">contactpagina</Link>.
                        </p>
                    </div>

                    {/* FAQ Section */}
                    <section className="mt-16 pt-12 border-t border-primary/10">
                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Veelgestelde vragen</h2>
                        <div className="space-y-6 not-prose">
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoe weet ik zeker dat een Google update de oorzaak is van mijn verkeersdaling?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Vergelijk de startdatum van je daling met de officiële updatekalender op de Google Search Status pagina. Valt je daling samen met een aangekondigde update en zie je in Search Console dat posities over de brede linie zakten, dan is de update de waarschijnlijke oorzaak. Sluit eerst technische problemen en seizoenseffecten uit.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoe snel kan ik herstellen van een core update?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Volledig herstel volgt vaak pas bij een volgende core update, en die komen enkele keren per jaar. Verbeteringen die je nu doorvoert, hebben dus tijd nodig om beloond te worden. Tussentijds kunnen individuele pagina's wel al stijgen als je ze inhoudelijk sterker maakt.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Moet ik geraakte pagina's verwijderen?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Alleen als een pagina geen zoekvraag bedient en niets toevoegt. Verbeteren gaat vrijwel altijd boven verwijderen. Dunne pagina's over hetzelfde onderwerp kun je beter samenvoegen tot één sterke pagina en doorverwijzen, dan raak je de opgebouwde waarde niet kwijt.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat beloont Google met een core update?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Content die uit eigen ervaring en expertise geschreven is en de bezoeker echt verder helpt. Google beschrijft dit zelf als people-first content. Pagina's die vooral voor de zoekmachine zijn gemaakt, met veel volume en weinig inhoud, verliezen bij updates het vaakst.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Is een verkeersdaling altijd mijn eigen schuld?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Nee. Soms verschuift Google de resultaten zelf, bijvoorbeeld door meer AI-antwoorden of andere resultaattypes bovenaan te tonen. Je posities blijven dan gelijk terwijl je klikken dalen. Check daarom in Search Console of je positie daalde of alleen je doorklikratio.</p>
                            </div>
                        </div>
                    </section>

                    {/* Related Links */}
                    <section className="mt-16 pt-12 border-t border-primary/10">
                        <h3 className="text-xl font-bold text-primary mb-6">Lees ook</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <Link to="/blogs/seo/content-pruning-verouderde-content-verwijderen" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Content pruning</h3>
                                <p className="text-primary/60 text-sm">Verouderde content opruimen zonder waardeverlies.</p>
                            </Link>
                            <Link to="/blogs/seo/lang-duurt-seo-realistische-verwachtingen" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Hoe lang duurt SEO?</h3>
                                <p className="text-primary/60 text-sm">Realistische verwachtingen voor resultaat.</p>
                            </Link>
                            <Link to="/blogs/seo/spammy-links-herkennen-verwijderen" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Spammy links herkennen</h3>
                                <p className="text-primary/60 text-sm">Zo controleer je je linkprofiel op troep.</p>
                            </Link>
                        </div>
                    </section>
                </div>
            </article>

            {/* Bottom CTA */}
            <section className="w-full pb-32 px-6">
                <div className="max-w-4xl mx-auto bg-primary rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
                    <h2 className="relative z-10 font-drama italic text-background text-3xl sm:text-4xl md:text-5xl mb-6">Verkeer kwijt? Wij vinden het terug.</h2>
                    <p className="relative z-10 font-sans text-background/70 text-lg mb-10 max-w-xl mx-auto">We analyseren gratis welke pagina's zijn geraakt en maken een herstelplan op volgorde van impact.</p>
                    <Link to="/contact" className="relative z-10 btn-magnetic inline-flex items-center justify-center bg-accent text-background font-sans font-bold text-lg px-10 py-4 rounded-[2rem] hover:bg-accent/90 transition-colors">Neem contact op</Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
