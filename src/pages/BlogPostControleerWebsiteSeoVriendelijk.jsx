import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ChevronRight, User } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function BlogPostControleerWebsiteSeoVriendelijk() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen selection:bg-accent/30 selection:text-dark flex flex-col bg-background">
            <Helmet>
                <title>Hoe controleer je of jouw website SEO-vriendelijk is | Empowers</title>
                <meta name="description" content="Controleer of jouw website SEO-vriendelijk is met gratis tools zoals Search Console en PageSpeed Insights. Zo vind je de punten die je rankings kosten." />
                <link rel="canonical" href="https://www.empowers.nl/blogs/seo/controleer-website-seo-vriendelijk" />
                <meta property="og:title" content="Hoe controleer je of jouw website SEO-vriendelijk is | Empowers" />
                <meta property="og:description" content="Controleer of jouw website SEO-vriendelijk is met gratis tools zoals Search Console en PageSpeed Insights. Zo vind je de punten die je rankings kosten." />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://www.empowers.nl/blogs/seo/controleer-website-seo-vriendelijk" />
                <meta property="og:image" content="https://www.empowers.nl/images/blogs/controleer-website-seo-vriendelijk.jpg" />
                <meta property="article:published_time" content="2026-07-27T10:00:00+02:00" />
                <meta property="article:author" content="Empowers" />
                <meta property="article:section" content="SEO" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Hoe controleer je of jouw website SEO-vriendelijk is | Empowers" />
                <meta name="twitter:description" content="Controleer of jouw website SEO-vriendelijk is met gratis tools zoals Search Console en PageSpeed Insights. Zo vind je de punten die je rankings kosten." />
                <script type="application/ld+json">{JSON.stringify({
                    "@context": "https://schema.org",
                    "@graph": [
                        {
                            "@type": "Article",
                            "headline": "Hoe controleer je of jouw website SEO-vriendelijk is",
                            "image": "https://www.empowers.nl/images/blogs/controleer-website-seo-vriendelijk.jpg",
                            "description": "Controleer of jouw website SEO-vriendelijk is met gratis tools zoals Search Console en PageSpeed Insights. Zo vind je de punten die je rankings kosten.",
                            "author": { "@type": "Organization", "name": "Empowers" },
                            "publisher": { "@type": "Organization", "name": "Empowers", "url": "https://www.empowers.nl" },
                            "datePublished": "2026-07-27T10:00:00+02:00",
                            "dateModified": "2026-07-27T10:00:00+02:00",
                            "url": "https://www.empowers.nl/blogs/seo/controleer-website-seo-vriendelijk"
                        },
                        {
                            "@type": "BreadcrumbList",
                            "itemListElement": [
                                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.empowers.nl" },
                                { "@type": "ListItem", "position": 2, "name": "Nieuws", "item": "https://www.empowers.nl/nieuws" },
                                { "@type": "ListItem", "position": 3, "name": "SEO", "item": "https://www.empowers.nl/blogs/seo" },
                                { "@type": "ListItem", "position": 4, "name": "Hoe controleer je of jouw website SEO-vriendelijk is", "item": "https://www.empowers.nl/blogs/seo/controleer-website-seo-vriendelijk" }
                            ]
                        },
                        {
                            "@type": "FAQPage",
                            "mainEntity": [
                                { "@type": "Question", "name": "Hoe controleer ik gratis of mijn website SEO-vriendelijk is?", "acceptedAnswer": { "@type": "Answer", "text": "Met Google Search Console zie je of je pagina's geïndexeerd zijn en op welke zoekwoorden je gevonden wordt. PageSpeed Insights meet je laadtijd en mobiele weergave. Vul dat aan met een handmatige check van je paginatitels en koppen. Alle drie kosten niets." } },
                                { "@type": "Question", "name": "Hoe zie ik of Google mijn pagina's geïndexeerd heeft?", "acceptedAnswer": { "@type": "Answer", "text": "Typ site:jouwdomein.nl in Google voor een ruwe indicatie van het aantal geïndexeerde pagina's. Het precieze beeld vind je in Google Search Console onder Indexering. Daar staat per pagina waarom hij wel of niet in de index staat, inclusief blokkades door noindex of je robots.txt." } },
                                { "@type": "Question", "name": "Wat is een goede laadtijd voor SEO?", "acceptedAnswer": { "@type": "Answer", "text": "Google hanteert voor de Largest Contentful Paint een grens van 2,5 seconden. Laadt je belangrijkste content binnen die tijd, dan zit je goed. PageSpeed Insights laat per pagina zien waar je staat en welke onderdelen de vertraging veroorzaken, zoals te zware afbeeldingen of traag ladende scripts." } },
                                { "@type": "Question", "name": "Hoe vaak moet je je website controleren op SEO?", "acceptedAnswer": { "@type": "Answer", "text": "Een grondige controle per kwartaal is voor de meeste websites voldoende. Kijk wel elke maand even in Search Console naar indexeringsfouten en dalende posities. Na een migratie, redesign of nieuwe plugin controleer je direct, want juist dan sluipen er fouten in." } },
                                { "@type": "Question", "name": "Wat is het verschil tussen een SEO-check en een SEO-audit?", "acceptedAnswer": { "@type": "Answer", "text": "Een SEO-check is een snelle controle van de basis: indexering, snelheid en content. Die doe je zelf in een middag. Een SEO-audit gaat dieper en onderzoekt ook crawlbudget, structuur, concurrentie en autoriteit. Daar rolt een concreet actieplan uit met prioriteiten." } },
                                { "@type": "Question", "name": "Kan ik een SEO-controle zelf doen of heb ik een specialist nodig?", "acceptedAnswer": { "@type": "Answer", "text": "De basis kun je prima zelf: gratis tools laten zien of je pagina's vindbaar en snel zijn. Een specialist wordt interessant als je wilt weten waarom een concurrent boven je staat, of als de technische problemen te complex worden om zelf op te lossen." } }
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
                        <span className="text-primary truncate">SEO-vriendelijk controleren</span>
                    </nav>

                    {/* Header */}
                    <header className="mb-16">
                        <div className="inline-block px-3 py-1 bg-accent/10 text-accent font-mono text-xs uppercase tracking-widest rounded-full mb-6">
                            SEO
                        </div>
                        <h1 className="font-sans font-bold text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight mb-8">
                            Hoe controleer je of jouw website SEO-vriendelijk is
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
                        <div className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-overlay" style={{backgroundImage: "url('/images/blogs/controleer-website-seo-vriendelijk.jpg')"}}></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </figure>

                    {/* Content */}
                    <div className="prose prose-lg prose-headings:font-sans prose-headings:font-bold prose-headings:text-primary prose-p:font-sans prose-p:text-primary/80 prose-p:leading-relaxed max-w-none">
                        <p className="text-xl md:text-2xl font-medium leading-relaxed mb-10 text-primary">
                            Je controleert of jouw website SEO-vriendelijk is met een paar gratis tools. Google Search Console laat zien of je pagina's in de index staan, PageSpeed Insights meet je snelheid en een handmatige blik op je titels vertelt of je content aansluit op zoekopdrachten. De hele controle kost een middag en levert vrijwel altijd verbeterpunten op.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat betekent SEO-vriendelijk eigenlijk?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een SEO-vriendelijke website is een site die Google zonder obstakels kan lezen en die bezoekers geeft wat ze zoeken. Dat klinkt simpel. In de praktijk gaat het op allebei de vlakken vaak mis zonder dat de eigenaar het doorheeft.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De technische kant bepaalt of zoekmachines je pagina's überhaupt kunnen vinden en begrijpen. De inhoudelijke kant bepaalt of je pagina's een antwoord geven op wat mensen intypen. Scoor je op één van de twee slecht, dan blijft je zichtbaarheid achter. Ook als de andere kant perfect in orde is.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Het goede nieuws: je hoeft geen developer te zijn om de belangrijkste punten zelf na te lopen. De controle hieronder werkt met gratis tools en een browser.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Staan jouw pagina's in de index van Google?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Dit is de eerste check, want een pagina die niet in de index staat, kan niet ranken. Wat je ook verder verbetert.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De snelle methode: typ site:jouwdomein.nl in Google. Je ziet dan een ruwe schatting van het aantal geïndexeerde pagina's. Wijkt dat aantal fors af van wat je verwacht, dan is er iets aan de hand. Honderd pagina's op je site en maar tien in de index betekent dat Google ergens wordt tegengehouden of je pagina's niet de moeite waard vindt.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Het echte beeld haal je uit Google Search Console. Onder het kopje Indexering zie je per pagina waarom hij wel of niet is opgenomen. Veelvoorkomende boosdoeners: een vergeten noindex-tag uit de bouwfase, een robots.txt die te veel blokkeert, of een ontbrekende sitemap. Wat een sitemap precies doet en waarom je er een wilt, lees je in ons artikel over de <Link to="/blogs/seo/xml-sitemap-heb-hem-nodig" className="text-accent hover:underline">XML-sitemap</Link>.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een fout die bij controles geregeld opduikt: de noindex die na een redesign is blijven staan. De site ging live, de vinkjes uit de testomgeving gingen mee, en maanden later vraagt de eigenaar zich af waarom het verkeer is ingestort. Twee minuten in Search Console had het probleem direct zichtbaar gemaakt.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe snel en mobielvriendelijk is je website?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Snelheid is een bevestigde rankingfactor en bepaalt daarnaast hoeveel bezoekers afhaken voordat je pagina zichtbaar is. Meten doe je met PageSpeed Insights, een gratis tool van Google. Je vult een URL in en krijgt een score voor mobiel en desktop, plus een lijst met verbeterpunten.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Kijk vooral naar de Core Web Vitals. De belangrijkste daarvan is de Largest Contentful Paint: de tijd tot je grootste content zichtbaar is. Google hanteert hier een grens van 2,5 seconden. Zit je daarboven, dan wijst het rapport meestal naar dezelfde verdachten: te zware afbeeldingen of scripts die de boel ophouden.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Test daarna je site op je eigen telefoon. Serieus, pak hem erbij. Is de tekst leesbaar zonder inzoomen? Zijn knoppen aanklikbaar zonder mis te tikken? Schuift er een cookiebanner overheen die niet weg te klikken is? Google indexeert de mobiele versie van je site, dus wat jij op mobiel ziet, is wat telt.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Sluit je content aan op wat mensen zoeken?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Techniek op orde betekent nog geen bezoekers. Daarvoor moet je content matchen met zoekopdrachten. Open je belangrijkste pagina's en stel per pagina één vraag: welke zoekopdracht moet deze pagina beantwoorden? Kun je die vraag niet beantwoorden, dan kan Google het ook niet.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Check daarna de paginatitel, het blauwe klikbare deel in de zoekresultaten. Staat je belangrijkste zoekwoord erin? Is hij uniek per pagina? Titels als "Home" of "Diensten" zeggen Google niets. "Boekhouder voor zzp'ers in Utrecht" zegt alles.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Bekijk ook je koppenstructuur. Elke pagina hoort precies één H1 te hebben die de lading dekt, met daaronder H2's voor de hoofdsecties. In Search Console zie je onder Prestaties op welke zoekwoorden je nu al vertoond wordt. Daar zitten vaak verrassingen tussen: zoekopdrachten waar je op pagina twee staat en die met een betere titel of een extra alinea zo naar pagina één kunnen.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe controleer je je interne links en structuur?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Interne links vertellen Google welke pagina's belangrijk zijn en hoe je site in elkaar zit. De vuistregel: elke belangrijke pagina is binnen drie klikken vanaf je homepage bereikbaar. Pagina's waar geen enkele interne link naartoe wijst, zogeheten weespagina's, worden zelden gevonden en zelden geranked.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Voor kleine sites loop je dit handmatig na. Voor grotere sites gebruik je een crawler zoals Screaming Frog, die in de gratis versie tot 500 URL's scant. Die laat direct zien welke pagina's kapotte links bevatten, welke redirects op elkaar stapelen en waar je weespagina's zitten.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Wil je hierin verder gaan dan de basis, dan is een volledige <Link to="/blogs/seo/technische-seo-audit" className="text-accent hover:underline">technische SEO-audit</Link> de logische volgende stap. Daarin komen ook crawlbudget, structured data en canonicals aan bod.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Welke problemen pak je als eerste aan?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Na de controle heb je waarschijnlijk een lijstje. Niet alles is even belangrijk, dus werk in deze volgorde. Eerst alles wat indexering blokkeert: noindex-tags, robots.txt-blokkades en ontbrekende pagina's in de index. Zolang dat niet klopt, heeft de rest geen zin.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Daarna de snelheid, want die raakt elke bezoeker op elke pagina. Vervolgens je titels en content op de pagina's die het meest opleveren. Kleine punten zoals een ontbrekende alt-tekst zijn prima, maar ze verplaatsen de naald pas als de fundering staat.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Bij onze klanten zien we dat deze volgorde het verschil maakt tussen maandenlang schaven zonder resultaat en binnen enkele weken meetbare beweging in Search Console. Werk je liever met een compleet overzicht, gebruik dan onze <Link to="/blogs/seo/technische-seo-checklist-2025-website" className="text-accent hover:underline">technische SEO-checklist</Link>.
                        </p>

                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een SEO-vriendelijke website is dus controleerbaar in een middag: indexering via Search Console, snelheid via PageSpeed Insights en content met je eigen kritische blik. Liever dat een specialist meekijkt naar wat jouw site tegenhoudt? Bekijk onze <Link to="/seo" className="text-accent hover:underline">SEO-dienstenpagina</Link> of plan een gratis gesprek via <Link to="/contact" className="text-accent hover:underline">empowers.nl/contact</Link>.
                        </p>

                        <hr className="my-16 border-primary/10" />

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Veelgestelde vragen over een SEO-vriendelijke website</h2>

                        <div className="space-y-6 not-prose">
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoe controleer ik gratis of mijn website SEO-vriendelijk is?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Met Google Search Console zie je of je pagina's geïndexeerd zijn en op welke zoekwoorden je gevonden wordt. PageSpeed Insights meet je laadtijd en mobiele weergave. Vul dat aan met een handmatige check van je paginatitels en koppen. Alle drie kosten niets.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoe zie ik of Google mijn pagina's geïndexeerd heeft?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Typ site:jouwdomein.nl in Google voor een ruwe indicatie van het aantal geïndexeerde pagina's. Het precieze beeld vind je in Google Search Console onder Indexering. Daar staat per pagina waarom hij wel of niet in de index staat, inclusief blokkades door noindex of je robots.txt.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat is een goede laadtijd voor SEO?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Google hanteert voor de Largest Contentful Paint een grens van 2,5 seconden. Laadt je belangrijkste content binnen die tijd, dan zit je goed. PageSpeed Insights laat per pagina zien waar je staat en welke onderdelen de vertraging veroorzaken, zoals te zware afbeeldingen of traag ladende scripts.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoe vaak moet je je website controleren op SEO?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Een grondige controle per kwartaal is voor de meeste websites voldoende. Kijk wel elke maand even in Search Console naar indexeringsfouten en dalende posities. Na een migratie, redesign of nieuwe plugin controleer je direct, want juist dan sluipen er fouten in.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat is het verschil tussen een SEO-check en een SEO-audit?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Een SEO-check is een snelle controle van de basis: indexering, snelheid en content. Die doe je zelf in een middag. Een SEO-audit gaat dieper en onderzoekt ook crawlbudget, structuur, concurrentie en autoriteit. Daar rolt een concreet actieplan uit met prioriteiten.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Kan ik een SEO-controle zelf doen of heb ik een specialist nodig?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    De basis kun je prima zelf: gratis tools laten zien of je pagina's vindbaar en snel zijn. Een specialist wordt interessant als je wilt weten waarom een concurrent boven je staat, of als de technische problemen te complex worden om zelf op te lossen.
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
                    <h2 className="relative z-10 font-drama italic text-background text-3xl sm:text-4xl md:text-5xl mb-6">Benieuwd wat jouw site tegenhoudt?</h2>
                    <p className="relative z-10 font-sans text-background/70 text-lg mb-10 max-w-xl mx-auto">
                        Wij lopen je website na van index tot laadtijd en vertellen je precies waar de winst zit. Geen rapport in een la, maar punten waar je iets mee kunt.
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
