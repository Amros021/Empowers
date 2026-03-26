import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ChevronRight, User } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function BlogPostChatgptBedrijfAanbeveelt() {
    useEffect(() => { window.scrollTo(0, 0); }, []);

    return (
        <main className="min-h-screen selection:bg-accent/30 selection:text-dark flex flex-col bg-background">
            <Helmet>
                <title>Hoe zorg je dat ChatGPT jouw bedrijf aanbeveelt? | Empowers</title>
                <meta name="description" content="Wil je dat ChatGPT jouw bedrijf noemt? Leer welke stappen je neemt om zichtbaar te worden in AI-antwoorden en meer klanten te trekken." />
                <link rel="canonical" href="https://www.empowers.nl/blogs/geo/chatgpt-bedrijf-aanbeveelt" />
                <meta property="og:type" content="article" />
                <meta property="og:title" content="Hoe zorg je dat ChatGPT jouw bedrijf aanbeveelt?" />
                <meta property="og:description" content="Wil je dat ChatGPT jouw bedrijf noemt? Leer welke stappen je neemt om zichtbaar te worden in AI-antwoorden en meer klanten te trekken." />
                <meta property="og:url" content="https://www.empowers.nl/blogs/geo/chatgpt-bedrijf-aanbeveelt" />
                <meta property="og:image" content="https://www.empowers.nl/images/blogs/chatgpt-bedrijf-aanbeveelt.jpg" />
                <meta property="article:published_time" content="2026-03-27T00:00:00Z" />
                <meta property="article:author" content="Empowers" />
                <meta property="article:section" content="GEO" />
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Article",
                        "headline": "Hoe zorg je dat ChatGPT jouw bedrijf aanbeveelt?",
                        "description": "Wil je dat ChatGPT jouw bedrijf noemt? Leer welke stappen je neemt om zichtbaar te worden in AI-antwoorden en meer klanten te trekken.",
                        "image": "https://www.empowers.nl/images/blogs/chatgpt-bedrijf-aanbeveelt.jpg",
                        "datePublished": "2026-03-27T00:00:00Z",
                        "author": {
                            "@type": "Organization",
                            "name": "Empowers"
                        },
                        "publisher": {
                            "@type": "Organization",
                            "name": "Empowers",
                            "logo": {
                                "@type": "ImageObject",
                                "url": "https://www.empowers.nl/logo.png"
                            }
                        }
                    })}
                </script>
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": [
                            {
                                "@type": "Question",
                                "name": "Hoe weet ChatGPT welke bedrijven het moet aanbevelen?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "ChatGPT is getraind op data tot april 2024 en leert uit het internet welke bedrijven bestaan en hoe goed ze zijn. Je website, reviews, kantoor locatie en Google My Business-informatie helpen ChatGPT je bedrijf beter begrijpen. Hoe meer positieve signalen online, des te groter de kans dat ChatGPT je noemt in relevante antwoorden."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Kan ik ChatGPT betalen om mijn bedrijf aan te bevelen?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Nee, OpenAI werkt zo niet. ChatGPT zal je bedrijf niet aanbevelen omdat je ervoor betaalt. Het hangt af van de kwaliteit van je online aanwezigheid en hoe goed je website aangeeft wat je doet. Je moet je bedrijf organisch opbouwen, door betere content, meer reviews en sterke signalen online."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Helpt Google My Business bij ChatGPT aanbevelingen?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Ja, absoluut. Google My Business geeft ChatGPT informatie over je adres, openingstijden, reviews en foto's. Een compleet en goed onderhouden Google My Business-profiel vergroot je zichtbaarheid in AI-antwoorden. Zorg ervoor dat alle gegevens kloppen en dat je regelmatig posts plaatst."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Wat is belangrijker: Google SEO of ChatGPT aanbevelingen?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Beide. Google SEO en ChatGPT aanbevelingen groeien uit dezelfde bron: sterke online signalen. Als je goed scoort in Google zoekresultaten, zal ChatGPT je waarschijnlijk ook aanbevelen. Focus op beide tegelijk met een sterke website, relevante content en opbouw van je reputatie. Ze vullen elkaar aan."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Hoe lang duurt het voordat ChatGPT mijn bedrijf aanbeveelt?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Dat varieert. ChatGPT werkt met trainingsdata die niet in real-time wordt bijgewerkt. Het kan maanden tot jaren duren voordat nieuwe bedrijven in het trainingsset terechtkomen. Begin nu met je online aanwezigheid sterker te maken, zodat als ChatGPT volgende keer getraind wordt, je bedrijf er goed uitkomt."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Zijn er andere AI-tools die mijn bedrijf kunnen aanbevelen?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Ja. Google AI Overviews, Claude, Perplexity en andere AI-tools gaan bedrijven aanbevelen. De stappen die je nu neemt om zichtbaar te zijn voor ChatGPT werken ook voor deze andere tools. Een sterke online basis helpt overal. Hoe meer plek je inneemt in zoekresultaten en reviews, des te groter je bereik via alle AI-tools."
                                }
                            }
                        ]
                    })}
                </script>
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "BreadcrumbList",
                        "itemListElement": [
                            {
                                "@type": "ListItem",
                                "position": 1,
                                "name": "Home",
                                "item": "https://www.empowers.nl"
                            },
                            {
                                "@type": "ListItem",
                                "position": 2,
                                "name": "Nieuws",
                                "item": "https://www.empowers.nl/blogs"
                            },
                            {
                                "@type": "ListItem",
                                "position": 3,
                                "name": "GEO",
                                "item": "https://www.empowers.nl/blogs/geo"
                            },
                            {
                                "@type": "ListItem",
                                "position": 4,
                                "name": "Hoe zorg je dat ChatGPT jouw bedrijf aanbeveelt?",
                                "item": "https://www.empowers.nl/blogs/geo/chatgpt-bedrijf-aanbeveelt"
                            }
                        ]
                    })}
                </script>
            </Helmet>
            <Navbar />
            <article className="w-full pt-40 pb-24 px-6 relative">
                <div className="max-w-4xl mx-auto">
                    {/* Breadcrumbs */}
                    <nav className="flex items-center gap-2 text-sm text-neutral-600 mb-12">
                        <Link to="/" className="text-blue-700 underline hover:text-blue-900">Home</Link>
                        <ChevronRight size={16} />
                        <Link to="/blogs" className="text-blue-700 underline hover:text-blue-900">Nieuws</Link>
                        <ChevronRight size={16} />
                        <Link to="/blogs/geo" className="text-blue-700 underline hover:text-blue-900">GEO</Link>
                        <ChevronRight size={16} />
                        <span className="text-neutral-900">Hoe zorg je dat ChatGPT jouw bedrijf aanbeveelt?</span>
                    </nav>

                    {/* Header */}
                    <header className="mb-12">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="inline-block px-4 py-1 bg-primary/10 text-primary font-semibold text-xs rounded-full">GEO</span>
                        </div>
                        <h1 className="font-sans font-bold text-4xl md:text-5xl leading-tight text-dark mb-8">
                            Hoe zorg je dat ChatGPT jouw bedrijf aanbeveelt?
                        </h1>
                        <div className="flex flex-wrap items-center gap-6 text-neutral-600 border-b border-neutral-200 pb-6">
                            <div className="flex items-center gap-2">
                                <User size={18} />
                                <span className="font-medium">Empowers</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar size={18} />
                                <span>27 maart 2026</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock size={18} />
                                <span>7 min leestijd</span>
                            </div>
                        </div>
                    </header>

                    {/* Feature Image */}
                    <figure className="mb-16">
                        <div className="relative overflow-hidden rounded-[3rem] bg-primary shadow-lg">
                            <div className="aspect-video bg-gradient-to-br from-primary/80 to-primary/40 flex items-center justify-center">
                                <img
                                    src="/images/blogs/chatgpt-bedrijf-aanbeveelt.jpg"
                                    alt="ChatGPT aanbevelingen voor bedrijven"
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                        e.target.style.display = 'none';
                                    }}
                                />
                            </div>
                        </div>
                        <figcaption className="text-center text-sm text-neutral-600 mt-4">ChatGPT kan je bedrijf aanbevelen als je online goed zichtbaar bent</figcaption>
                    </figure>

                    {/* Content */}
                    <div className="prose prose-lg max-w-none mb-16">
                        <p className="text-lg text-neutral-700 mb-8">
                            ChatGPT is nu een serieus kanaal waar klanten hun vragen stellen. Niet meer alleen Google zoeken, maar "Hey ChatGPT, welk bedrijf kan je aanbevelen voor SEO?" En dan hoop je dat jij genoemd wordt. Die kans groeit als je de juiste stappen neemt.
                        </p>

                        <h2 className="text-2xl font-bold text-dark mt-12 mb-6">
                            Waarom ChatGPT aanbevelingen belangrijk zijn
                        </h2>
                        <p>
                            Bij onze klanten zien we dat ChatGPT steeds vaker als eerste stopplaats wordt gebruikt. Klanten vragen niet meer aan Google, maar aan ChatGPT. "Wie kan me helpen met mijn website?" ChatGPT geeft dan namen. Als jouw bedrijf niet in die antwoorden voorkomt, verlies je die klanten.
                        </p>
                        <p>
                            ChatGPT baseerde zich bij training op data tot april 2024. Hoe sterker jouw online aanwezigheid op dat moment, hoe groter de kans dat je in de trainingsdata zat. En dus hoe waarschijnlijker het is dat ChatGPT je aanbeveelt.
                        </p>

                        <h2 className="text-2xl font-bold text-dark mt-12 mb-6">
                            Stap 1: Zorg dat je website echt iets zegt
                        </h2>
                        <p>
                            ChatGPT leert wat je doet door je website te lezen. Een website die alleen "Welkom bij ons bedrijf" zegt, helpt niet. Je website moet helder maken wie je bent, wat je doet en voor wie.
                        </p>
                        <p>
                            We merken in de praktijk dat bedrijven met sterke, specifieke content beter door AI-tools herkennen worden. "Wij doen digitale marketing" is te vaag. "Wij helpen lokale bedrijven omhoog in Google met onze SEO-aanpak" is veel beter. Zorg dat je homepage, diensten-pagina's en blog-posts duidelijk maken wat je expertise is.
                        </p>

                        <h2 className="text-2xl font-bold text-dark mt-12 mb-6">
                            Stap 2: Bouw je Google My Business uit
                        </h2>
                        <p>
                            Google My Business is een goudmijn voor ChatGPT. Die gegevens gebruikt ChatGPT graag. Zorg dat je profiel compleet is: alle gegevens kloppen, foto's goed staan, je zit ingedeeld in de juiste categorie.
                        </p>
                        <p>
                            Posts op Google My Business helpen ook. Als je regelmatig iets deelt, ziet ChatGPT dat je actief bent. Reviews zijn goud waard. Een bedrijf met tien 5-ster reviews ziet ChatGPT anders dan een bedrijf met geen reviews. Begin vandaag nog met actief Google My Business onderhouden.
                        </p>

                        <h2 className="text-2xl font-bold text-dark mt-12 mb-6">
                            Stap 3: Zorg voor positieve reviews
                        </h2>
                        <p>
                            ChatGPT kijkt naar review-sites als Google Reviews, Trustpilot en andere. Reviews zijn een sterker signaal dan wat je zelf schrijft. Een bedrijf dat veel goede reviews heeft, ziet ChatGPT als betrouwbaar.
                        </p>
                        <p>
                            Vraag je tevreden klanten om een review achter te laten. Niet op een agressieve manier, maar gewoon: "Wij zouden het heel fijn vinden als je je ervaringen deelt." Reviews groeien niet vanzelf. Je moet er actief voor werken.
                        </p>

                        <h2 className="text-2xl font-bold text-dark mt-12 mb-6">
                            Stap 4: Verbeter je zichtbaarheid in Google
                        </h2>
                        <p>
                            Dit is cruciaal: als je niet hoog scoort in Google zoekresultaten, zit je waarschijnlijk ook niet goed in ChatGPT. Ze groeien uit dezelfde bron. Een sterke <Link to="/diensten/seo" className="text-blue-700 underline hover:text-blue-900">SEO-strategie</Link> helpt je in beide.
                        </p>
                        <p>
                            Zorg dat je website makkelijk te vinden is. Maak content die Google snapt. Technisch moet alles goed staan. Als je website snel laadt, mobile-vriendelijk is en duidelijk gestructureerd, zien zowel Google als ChatGPT je graag.
                        </p>

                        <h2 className="text-2xl font-bold text-dark mt-12 mb-6">
                            Stap 5: Zorg voor backlinks van betrouwbare sites
                        </h2>
                        <p>
                            Andere sites die naar jou linken, zijn als aanbevelingen. ChatGPT ziet dat ook. Als een groot nieuwsmedium of branche-organisatie naar je linkt, zegt dat: "Dit bedrijf is belangrijk." Probeer zichtbaar te worden door goed werk, partnerships, podcast-optredens of inhoudelijke bijdragen aan vakblogs.
                        </p>

                        <h2 className="text-2xl font-bold text-dark mt-12 mb-6">
                            Stap 6: Schrijf inhoudelijke blog-posts
                        </h2>
                        <p>
                            Blog-posts helpen mee. ChatGPT leert van lange, informatieve artikelen wat je expertise is. Bij Empowers schrijven we posts die echte vragen van klanten beantwoorden. Hoe meer nuttige inhoud je deelt, des te beter snapt ChatGPT wat je kan.
                        </p>
                        <p>
                            Maak posts over onderwerpen waar je goed in bent. Niet alles moet gericht zijn op aanbevelingen. Maar veel goeie posts maken samen dat ChatGPT je als expert ziet. Lees meer over hoe je je <Link to="/blogs/geo/optimaliseer-content-google-ai-overviews" className="text-blue-700 underline hover:text-blue-900">content optimaliseer voor Google AI Overviews</Link> - dezelfde principes helpen voor ChatGPT.
                        </p>

                        <h2 className="text-2xl font-bold text-dark mt-12 mb-6">
                            Stap 7: Zorg voor mentions online
                        </h2>
                        <p>
                            Als branchesites, vakblogs of zakelijke gidsen je bedrijf noemen, ziet ChatGPT dat. Je hoeft niet altijd een link te hebben. Het feit dat je ergens wordt genoemd, geeft signaal. Probeer partnerships op te bouwen met leveranciers, peers en organisaties in je branche.
                        </p>

                        <h2 className="text-2xl font-bold text-dark mt-12 mb-6">
                            Wat je NIET moet doen
                        </h2>
                        <p>
                            Daar zijn er een aantal van:
                        </p>
                        <ul className="list-disc pl-6 space-y-3">
                            <li>Fake reviews maken. ChatGPT leert van echte reviews. Nep-reviews schaden je op lange termijn.</li>
                            <li>Keyword-spammen op je website. "SEO SEO SEO" schrijven helpt niet. Schrijf voor mensen, niet voor algoritmes.</li>
                            <li>Private backlinks kopen. Dat werkt niet meer. Backlinks moeten organisch ontstaan.</li>
                            <li>Hoop hebben op snelle resultaten. ChatGPT trainen gebeurt niet real-time. Dit duurt maanden tot jaren.</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-dark mt-12 mb-6">
                            Hoe groot is de impact echt?
                        </h2>
                        <p>
                            We merken in de praktijk dat ChatGPT nog niet als primaire verkeerbron voor de meeste bedrijven werkt. Maar dat verandert snel. Bij onze klanten zien we dat steeds meer potentiële klanten via ChatGPT berichten sturen. Het is niet primary traffic, maar het groeit exponentieel.
                        </p>
                        <p>
                            Begin nu. Als je wacht tot ChatGPT helemaal dominant is, ben je te laat. De bedrijven die nu hun online aanwezigheid opbouwen, zullen straks beter scoren. Lees ook ons artikel over <Link to="/blogs/geo/seo-strategie-vervangen-door-geo" className="text-blue-700 underline hover:text-blue-900">hoe SEO verandert door AI</Link> om het volledige plaatje te zien.
                        </p>

                        <h2 className="text-2xl font-bold text-dark mt-12 mb-6">
                            Dit is een marathon, geen sprint
                        </h2>
                        <p>
                            De stappen die je neemt om zichtbaar te worden voor ChatGPT, helpen ook voor Google, reviews en je hele online reputatie. Het is geen apart project. Het is één project met meerdere voordelen.
                        </p>
                        <p>
                            Start vandaag: check je Google My Business, vraag je eerste vijf klanten om een review, zorg dat je website duidelijk maakt wat je doet. Die basis is het fundament. Als je meer hulp nodig hebt, <Link to="/contact" className="text-blue-700 underline hover:text-blue-900">neem contact met ons op</Link>. We helpen graag je online basis sterker te maken.
                        </p>

                        <h2 className="text-2xl font-bold text-dark mt-12 mb-6">
                            Wat ga jij volgende week doen?
                        </h2>
                        <p>
                            Kies één stap uit dit artikel. Niet alles tegelijk. Als je op Google My Business begint, focus je daar. Na twee weken ga je naar de volgende stap. Slow and steady wins the race. Over zes maanden ben je veel verder dan bedrijven die nu niets doen.
                        </p>
                    </div>

                    {/* FAQ Section */}
                    <section className="py-16 mb-16">
                        <h2 className="text-3xl font-bold text-dark mb-12 text-center">Veelgestelde vragen</h2>
                        <div className="grid gap-6 md:grid-cols-2">
                            {/* FAQ 1 */}
                            <div className="bg-white/60 rounded-2xl p-6 shadow-sm border border-primary/5">
                                <h3 className="font-bold text-lg text-dark mb-4">
                                    Hoe weet ChatGPT welke bedrijven het moet aanbevelen?
                                </h3>
                                <p className="text-neutral-700">
                                    ChatGPT is getraind op data tot april 2024 en leert uit het internet welke bedrijven bestaan en hoe goed ze zijn. Je website, reviews, kantoor locatie en Google My Business-informatie helpen ChatGPT je bedrijf beter begrijpen. Hoe meer positieve signalen online, des te groter de kans dat ChatGPT je noemt in relevante antwoorden.
                                </p>
                            </div>

                            {/* FAQ 2 */}
                            <div className="bg-white/60 rounded-2xl p-6 shadow-sm border border-primary/5">
                                <h3 className="font-bold text-lg text-dark mb-4">
                                    Kan ik ChatGPT betalen om mijn bedrijf aan te bevelen?
                                </h3>
                                <p className="text-neutral-700">
                                    Nee, OpenAI werkt zo niet. ChatGPT zal je bedrijf niet aanbevelen omdat je ervoor betaalt. Het hangt af van de kwaliteit van je online aanwezigheid en hoe goed je website aangeeft wat je doet. Je moet je bedrijf organisch opbouwen, door betere content, meer reviews en sterke signalen online.
                                </p>
                            </div>

                            {/* FAQ 3 */}
                            <div className="bg-white/60 rounded-2xl p-6 shadow-sm border border-primary/5">
                                <h3 className="font-bold text-lg text-dark mb-4">
                                    Helpt Google My Business bij ChatGPT aanbevelingen?
                                </h3>
                                <p className="text-neutral-700">
                                    Ja, absoluut. Google My Business geeft ChatGPT informatie over je adres, openingstijden, reviews en foto's. Een compleet en goed onderhouden Google My Business-profiel vergroot je zichtbaarheid in AI-antwoorden. Zorg ervoor dat alle gegevens kloppen en dat je regelmatig posts plaatst.
                                </p>
                            </div>

                            {/* FAQ 4 */}
                            <div className="bg-white/60 rounded-2xl p-6 shadow-sm border border-primary/5">
                                <h3 className="font-bold text-lg text-dark mb-4">
                                    Wat is belangrijker: Google SEO of ChatGPT aanbevelingen?
                                </h3>
                                <p className="text-neutral-700">
                                    Beide. Google SEO en ChatGPT aanbevelingen groeien uit dezelfde bron: sterke online signalen. Als je goed scoort in Google zoekresultaten, zal ChatGPT je waarschijnlijk ook aanbevelen. Focus op beide tegelijk met een sterke website, relevante content en opbouw van je reputatie. Ze vullen elkaar aan.
                                </p>
                            </div>

                            {/* FAQ 5 */}
                            <div className="bg-white/60 rounded-2xl p-6 shadow-sm border border-primary/5">
                                <h3 className="font-bold text-lg text-dark mb-4">
                                    Hoe lang duurt het voordat ChatGPT mijn bedrijf aanbeveelt?
                                </h3>
                                <p className="text-neutral-700">
                                    Dat varieert. ChatGPT werkt met trainingsdata die niet in real-time wordt bijgewerkt. Het kan maanden tot jaren duren voordat nieuwe bedrijven in het trainingsset terechtkomen. Begin nu met je online aanwezigheid sterker te maken, zodat als ChatGPT volgende keer getraind wordt, je bedrijf er goed uitkomt.
                                </p>
                            </div>

                            {/* FAQ 6 */}
                            <div className="bg-white/60 rounded-2xl p-6 shadow-sm border border-primary/5">
                                <h3 className="font-bold text-lg text-dark mb-4">
                                    Zijn er andere AI-tools die mijn bedrijf kunnen aanbevelen?
                                </h3>
                                <p className="text-neutral-700">
                                    Ja. Google AI Overviews, Claude, Perplexity en andere AI-tools gaan bedrijven aanbevelen. De stappen die je nu neemt om zichtbaar te zijn voor ChatGPT werken ook voor deze andere tools. Hoe meer plek je inneemt in zoekresultaten en reviews, des te groter je bereik via alle AI-tools.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Related Articles */}
                    <section className="py-12 border-t border-neutral-200">
                        <h3 className="font-bold text-lg text-dark mb-8">Lees ook dit</h3>
                        <div className="grid gap-6 md:grid-cols-2">
                            <Link to="/blogs/seo" className="group block">
                                <div className="bg-neutral-50 rounded-xl p-6 hover:bg-neutral-100 transition-colors">
                                    <h4 className="font-semibold text-dark group-hover:text-blue-700 mb-2">
                                        Meer over SEO
                                    </h4>
                                    <p className="text-sm text-neutral-600">Ontdek hoe SEO jouw bedrijf online zichtbaarder maakt.</p>
                                </div>
                            </Link>
                            <Link to="/diensten/seo" className="group block">
                                <div className="bg-neutral-50 rounded-xl p-6 hover:bg-neutral-100 transition-colors">
                                    <h4 className="font-semibold text-dark group-hover:text-blue-700 mb-2">
                                        Onze SEO-diensten
                                    </h4>
                                    <p className="text-sm text-neutral-600">Laat ons je website naar het volgende level brengen.</p>
                                </div>
                            </Link>
                        </div>
                    </section>
                </div>
            </article>

            {/* CTA Section */}
            <section className="py-24 px-6 bg-dark text-white text-center">
                <div className="max-w-2xl mx-auto">
                    <h2 className="font-sans font-bold text-2xl md:text-3xl mb-6">Klaar om te groeien?</h2>
                    <p className="text-white/70 mb-10 text-lg">
                        Je online aanwezigheid kan veel beter. We helpen graag je bedrijf sterker te maken zodat je niet alleen ChatGPT, maar ook Google en je klanten veel beter bereikt.
                    </p>
                    <Link to="/contact" className="inline-block px-10 py-4 bg-accent text-dark font-bold rounded-full hover:bg-accent/90 transition-colors text-lg">
                        Plan een gesprek
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
