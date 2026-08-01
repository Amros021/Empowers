import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ChevronRight, User } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function BlogPostSeoChecklistBeginners15Dingen() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen selection:bg-accent/30 selection:text-dark flex flex-col bg-background">
            <Helmet>
                <title>SEO checklist voor beginners: 15 dingen die je meteen kunt doen | Empowers</title>
                <meta name="description" content="Deze SEO checklist voor beginners bevat 15 punten die je vandaag nog kunt afvinken, van Search Console tot interne links. Zonder technische kennis." />
                <link rel="canonical" href="https://www.empowers.nl/blogs/seo/seo-checklist-beginners-15-dingen" />
                <meta property="og:title" content="SEO checklist voor beginners: 15 dingen die je meteen kunt doen | Empowers" />
                <meta property="og:description" content="Deze SEO checklist voor beginners bevat 15 punten die je vandaag nog kunt afvinken, van Search Console tot interne links. Zonder technische kennis." />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://www.empowers.nl/blogs/seo/seo-checklist-beginners-15-dingen" />
                <meta property="og:image" content="https://www.empowers.nl/images/blogs/seo-checklist-beginners-15-dingen.jpg" />
                <meta property="article:published_time" content="2026-07-27T14:00:00+02:00" />
                <meta property="article:author" content="Empowers" />
                <meta property="article:section" content="SEO" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="SEO checklist voor beginners: 15 dingen die je meteen kunt doen | Empowers" />
                <meta name="twitter:description" content="Deze SEO checklist voor beginners bevat 15 punten die je vandaag nog kunt afvinken, van Search Console tot interne links. Zonder technische kennis." />
                <script type="application/ld+json">{JSON.stringify({
                    "@context": "https://schema.org",
                    "@graph": [
                        {
                            "@type": "Article",
                            "headline": "SEO checklist voor beginners: 15 dingen die je meteen kunt doen",
                            "image": "https://www.empowers.nl/images/blogs/seo-checklist-beginners-15-dingen.jpg",
                            "description": "Deze SEO checklist voor beginners bevat 15 punten die je vandaag nog kunt afvinken, van Search Console tot interne links. Zonder technische kennis.",
                            "author": { "@type": "Organization", "name": "Empowers" },
                            "publisher": { "@type": "Organization", "name": "Empowers", "url": "https://www.empowers.nl" },
                            "datePublished": "2026-07-27T14:00:00+02:00",
                            "dateModified": "2026-07-27T14:00:00+02:00",
                            "url": "https://www.empowers.nl/blogs/seo/seo-checklist-beginners-15-dingen"
                        },
                        {
                            "@type": "BreadcrumbList",
                            "itemListElement": [
                                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.empowers.nl" },
                                { "@type": "ListItem", "position": 2, "name": "Nieuws", "item": "https://www.empowers.nl/nieuws" },
                                { "@type": "ListItem", "position": 3, "name": "SEO", "item": "https://www.empowers.nl/blogs/seo" },
                                { "@type": "ListItem", "position": 4, "name": "SEO checklist voor beginners: 15 dingen die je meteen kunt doen", "item": "https://www.empowers.nl/blogs/seo/seo-checklist-beginners-15-dingen" }
                            ]
                        },
                        {
                            "@type": "FAQPage",
                            "mainEntity": [
                                { "@type": "Question", "name": "Waar begin ik met SEO als complete beginner?", "acceptedAnswer": { "@type": "Answer", "text": "Begin met Google Search Console koppelen, want zonder meetgegevens werk je blind. Controleer daarna of je pagina's geïndexeerd zijn en of elke belangrijke pagina een eigen titel met zoekwoord heeft. Die drie punten leggen de basis waarop al het andere voortbouwt." } },
                                { "@type": "Question", "name": "Hoe lang duurt het voordat SEO resultaat oplevert?", "acceptedAnswer": { "@type": "Answer", "text": "Reken op enkele maanden voordat je duidelijke beweging ziet in posities en verkeer. Kleine technische fixes zoals een reparatie van je indexering kunnen sneller effect hebben. SEO is een investering die zich opbouwt: wat je nu goed neerzet, blijft maandenlang verkeer opleveren." } },
                                { "@type": "Question", "name": "Kan ik SEO doen zonder technische kennis?", "acceptedAnswer": { "@type": "Answer", "text": "De basis wel. Titels schrijven, content verbeteren, interne links leggen en je bedrijfsprofiel bijwerken vraagt geen regel code. Voor technische onderwerpen zoals redirects, structured data of laadtijd op serverniveau schakel je een developer of specialist in." } },
                                { "@type": "Question", "name": "Welke gratis tools heb ik nodig voor SEO?", "acceptedAnswer": { "@type": "Answer", "text": "Met drie gratis tools kom je ver: Google Search Console voor indexering en zoekwoorden, PageSpeed Insights voor snelheid en Google Bedrijfsprofiel voor lokale vindbaarheid. Wil je dieper graven, dan biedt Screaming Frog een gratis crawl tot 500 URL's." } },
                                { "@type": "Question", "name": "Hoeveel woorden moet een pagina hebben voor SEO?", "acceptedAnswer": { "@type": "Answer", "text": "Er bestaat geen magisch minimum. Google beloont content die de zoekvraag volledig beantwoordt, of dat nu in 300 of 2000 woorden gebeurt. Kijk naar wat er al rankt op jouw zoekwoord: dat is de maat waaraan je content gemeten wordt. Dunne pagina's van twee zinnen ranken zelden." } },
                                { "@type": "Question", "name": "Is SEO nog zinvol nu mensen ook via AI zoeken?", "acceptedAnswer": { "@type": "Answer", "text": "Ja, en de basis overlapt grotendeels. AI-modellen zoals ChatGPT en Perplexity citeren content die helder gestructureerd is, vragen direct beantwoordt en betrouwbaar oogt. Wie zijn SEO op orde heeft, staat er voor AI-zichtbaarheid dus al goed voor. Dat vakgebied heet GEO." } }
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
                        <span className="text-primary truncate">SEO checklist beginners</span>
                    </nav>

                    {/* Header */}
                    <header className="mb-16">
                        <div className="inline-block px-3 py-1 bg-accent/10 text-accent font-mono text-xs uppercase tracking-widest rounded-full mb-6">
                            SEO
                        </div>
                        <h1 className="font-sans font-bold text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight mb-8">
                            SEO checklist voor beginners: 15 dingen die je meteen kunt doen
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
                                <span>9 minuten leestijd</span>
                            </div>
                        </div>
                    </header>

                    {/* Featured Image */}
                    <figure className="w-full h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden mb-16 relative bg-primary">
                        <div className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-overlay" style={{backgroundImage: "url('/images/blogs/seo-checklist-beginners-15-dingen.jpg')"}}></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </figure>

                    {/* Content */}
                    <div className="prose prose-lg prose-headings:font-sans prose-headings:font-bold prose-headings:text-primary prose-p:font-sans prose-p:text-primary/80 prose-p:leading-relaxed max-w-none">
                        <p className="text-xl md:text-2xl font-medium leading-relaxed mb-10 text-primary">
                            Met deze SEO checklist voor beginners pak je de 15 punten die het meeste verschil maken: van Google Search Console koppelen en je indexering controleren tot betere titels, snellere pagina's en slimme interne links. Je hebt er geen technische achtergrond voor nodig. De meeste punten vink je vandaag nog af.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe leg je de technische basis?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Zonder fundament heeft de rest geen zin. Deze eerste vijf punten zorgen dat Google je site kan vinden, lezen en meten.
                        </p>

                        <h3 className="text-xl font-bold text-primary mt-10 mb-4">1. Koppel Google Search Console</h3>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Search Console is het gratis dashboard waarin Google je vertelt hoe je site ervoor staat: welke pagina's geïndexeerd zijn, op welke zoekwoorden je vertoond wordt en welke fouten er spelen. Zonder deze koppeling werk je blind. Aanmelden kost een kwartier en is de beste eerste stap die er bestaat.
                        </p>

                        <h3 className="text-xl font-bold text-primary mt-10 mb-4">2. Controleer of je pagina's geïndexeerd zijn</h3>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Typ site:jouwdomein.nl in Google en vergelijk het aantal resultaten met wat je verwacht. Grote afwijking? Kijk in Search Console onder Indexering wat er misgaat. Hoe je dat precies aanpakt, lees je in ons artikel over <Link to="/blogs/seo/controleer-website-seo-vriendelijk" className="text-accent hover:underline">je website controleren op SEO</Link>.
                        </p>

                        <h3 className="text-xl font-bold text-primary mt-10 mb-4">3. Dien je sitemap in</h3>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een XML-sitemap is de plattegrond van je site voor zoekmachines. De meeste systemen genereren hem automatisch op jouwdomein.nl/sitemap.xml. Dien hem in via Search Console, dan weet Google altijd waar je nieuwe pagina's staan.
                        </p>

                        <h3 className="text-xl font-bold text-primary mt-10 mb-4">4. Check je laadtijd met PageSpeed Insights</h3>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Vul je URL in op PageSpeed Insights en kijk of je belangrijkste content binnen 2,5 seconden zichtbaar is. Te traag? Grote afbeeldingen zijn bijna altijd de eerste verdachte. Verklein ze voordat je iets anders probeert.
                        </p>

                        <h3 className="text-xl font-bold text-primary mt-10 mb-4">5. Test je site op je telefoon</h3>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Google beoordeelt de mobiele versie van je site. Pak je telefoon en klik je eigen site door. Leesbare tekst, aanklikbare knoppen, geen weggedrukte content door pop-ups. Wat op mobiel stoort, kost je bezoekers en posities.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe maak je je content vindbaar?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Techniek brengt Google naar je site, content laat je ranken. Deze zes punten bepalen of je pagina's aansluiten op wat mensen zoeken.
                        </p>

                        <h3 className="text-xl font-bold text-primary mt-10 mb-4">6. Geef elke pagina een eigen titel met zoekwoord</h3>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De paginatitel is het blauwe klikbare deel in de zoekresultaten en het sterkste signaal over waar je pagina over gaat. Zet je belangrijkste zoekwoord erin, houd hem onder de 60 tekens en maak hem uniek per pagina. "Home" als titel is een gemiste kans.
                        </p>

                        <h3 className="text-xl font-bold text-primary mt-10 mb-4">7. Schrijf een meta description die uitnodigt</h3>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De meta description rankt niet mee, maar bepaalt wel of mensen klikken. Schrijf per belangrijke pagina een tekst van rond de 150 tekens die vertelt wat de bezoeker er vindt. Zie het als je etalage in Google.
                        </p>

                        <h3 className="text-xl font-bold text-primary mt-10 mb-4">8. Gebruik één H1 en logische tussenkoppen</h3>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Elke pagina krijgt precies één hoofdkop die de lading dekt, met H2's voor de secties eronder. Formuleer tussenkoppen waar het kan als vragen die je doelgroep stelt. Dat leest prettiger en sluit aan op hoe mensen zoeken.
                        </p>

                        <h3 className="text-xl font-bold text-primary mt-10 mb-4">9. Beantwoord de zoekvraag direct bovenaan</h3>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Laat je belangrijkste antwoord niet pas na drie alinea's opbouw komen. Wie zoekt, wil direct weten of hij goed zit. Pagina's die de vraag in de eerste zinnen beantwoorden, worden bovendien vaker overgenomen in AI-antwoorden en featured snippets.
                        </p>

                        <h3 className="text-xl font-bold text-primary mt-10 mb-4">10. Herschrijf dunne of dubbele pagina's</h3>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Pagina's met twee zinnen tekst of teksten die elders al bestaan, voegen niets toe. Voeg dunne pagina's samen tot één sterke pagina of geef ze echte inhoud. Twee blogs over hetzelfde onderwerp beconcurreren elkaar, kies er één en maak die goed.
                        </p>

                        <h3 className="text-xl font-bold text-primary mt-10 mb-4">11. Geef afbeeldingen een beschrijvende alt-tekst</h3>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De alt-tekst beschrijft wat er op een afbeelding staat. Zoekmachines lezen hem, schermlezers ook. "Ondernemer bekijkt dashboard op laptop" werkt, "IMG_4032" niet. Loop in elk geval je belangrijkste pagina's even na.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe bouw je aan autoriteit en zichtbaarheid?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De laatste vier punten zorgen dat je pagina's elkaar versterken en dat je ook buiten je eigen site gevonden wordt.
                        </p>

                        <h3 className="text-xl font-bold text-primary mt-10 mb-4">12. Leg interne links tussen je pagina's</h3>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Link vanuit je teksten naar andere relevante pagina's op je site, met beschrijvende linkteksten in plaats van "klik hier". Zo help je bezoekers verder én vertel je Google welke pagina's belangrijk zijn. Elke belangrijke pagina hoort binnen drie klikken vanaf de homepage bereikbaar te zijn.
                        </p>

                        <h3 className="text-xl font-bold text-primary mt-10 mb-4">13. Claim en vul je Google Bedrijfsprofiel</h3>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Voor lokale vindbaarheid is je Google Bedrijfsprofiel goud. Vul openingstijden, foto's en diensten volledig in en vraag tevreden klanten om een review. Bij zoekopdrachten met een plaatsnaam staat dit blok vaak boven de gewone resultaten.
                        </p>

                        <h3 className="text-xl font-bold text-primary mt-10 mb-4">14. Repareer kapotte links</h3>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Links naar verdwenen pagina's frustreren bezoekers en verspillen crawlbudget. Spoor ze op en werk ze bij, zoals we uitleggen in ons artikel over <Link to="/blogs/seo/broken-links-opsporen-repareren" className="text-accent hover:underline">broken links opsporen en repareren</Link>.
                        </p>

                        <h3 className="text-xl font-bold text-primary mt-10 mb-4">15. Kijk maandelijks tien minuten in Search Console</h3>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            SEO is geen eenmalige actie. Reserveer elke maand tien minuten voor het prestatierapport: welke zoekwoorden groeien, welke pagina's zakken, welke fouten zijn nieuw. Wie dat ritme vasthoudt, ziet problemen voordat ze verkeer kosten. We krijgen regelmatig sites onder ogen waar een simpele maandcheck maanden verlies had voorkomen.
                        </p>

                        <p className="text-primary/80 leading-relaxed mb-6">
                            Deze 15 punten vormen samen een stevige basis waarmee je de meeste websites in je regio al voorbij streeft. Wil je daarna dieper, van zoekwoordstrategie tot techniek? Bekijk onze <Link to="/seo" className="text-accent hover:underline">SEO-dienstenpagina</Link> of plan een gratis gesprek via <Link to="/contact" className="text-accent hover:underline">empowers.nl/contact</Link>.
                        </p>

                        <hr className="my-16 border-primary/10" />

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Veelgestelde vragen over SEO voor beginners</h2>

                        <div className="space-y-6 not-prose">
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Waar begin ik met SEO als complete beginner?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Begin met Google Search Console koppelen, want zonder meetgegevens werk je blind. Controleer daarna of je pagina's geïndexeerd zijn en of elke belangrijke pagina een eigen titel met zoekwoord heeft. Die drie punten leggen de basis waarop al het andere voortbouwt.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoe lang duurt het voordat SEO resultaat oplevert?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Reken op enkele maanden voordat je duidelijke beweging ziet in posities en verkeer. Kleine technische fixes zoals een reparatie van je indexering kunnen sneller effect hebben. SEO is een investering die zich opbouwt: wat je nu goed neerzet, blijft maandenlang verkeer opleveren.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Kan ik SEO doen zonder technische kennis?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    De basis wel. Titels schrijven, content verbeteren, interne links leggen en je bedrijfsprofiel bijwerken vraagt geen regel code. Voor technische onderwerpen zoals redirects, structured data of laadtijd op serverniveau schakel je een developer of specialist in.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Welke gratis tools heb ik nodig voor SEO?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Met drie gratis tools kom je ver: Google Search Console voor indexering en zoekwoorden, PageSpeed Insights voor snelheid en Google Bedrijfsprofiel voor lokale vindbaarheid. Wil je dieper graven, dan biedt Screaming Frog een gratis crawl tot 500 URL's.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoeveel woorden moet een pagina hebben voor SEO?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Er bestaat geen magisch minimum. Google beloont content die de zoekvraag volledig beantwoordt, of dat nu in 300 of 2000 woorden gebeurt. Kijk naar wat er al rankt op jouw zoekwoord: dat is de maat waaraan je content gemeten wordt. Dunne pagina's van twee zinnen ranken zelden.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Is SEO nog zinvol nu mensen ook via AI zoeken?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Ja, en de basis overlapt grotendeels. AI-modellen zoals ChatGPT en Perplexity citeren content die helder gestructureerd is, vragen direct beantwoordt en betrouwbaar oogt. Wie zijn SEO op orde heeft, staat er voor AI-zichtbaarheid dus al goed voor. Dat vakgebied heet GEO.
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
                    <h2 className="relative z-10 font-drama italic text-background text-3xl sm:text-4xl md:text-5xl mb-6">Checklist afgevinkt en klaar voor meer?</h2>
                    <p className="relative z-10 font-sans text-background/70 text-lg mb-10 max-w-xl mx-auto">
                        Wij bouwen verder waar de checklist ophoudt: strategie, content en techniek die je concurrenten achter je laten.
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
