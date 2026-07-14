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
                <meta property="article:published_time" content="2026-03-27T00:00:00+01:00" />
                <meta property="article:author" content="Empowers" />
                <meta property="article:section" content="GEO" />
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Article",
                        "headline": "Hoe zorg je dat ChatGPT jouw bedrijf aanbeveelt?",
                        "description": "Wil je dat ChatGPT jouw bedrijf noemt? Leer welke stappen je neemt om zichtbaar te worden in AI-antwoorden en meer klanten te trekken.",
                        "image": "https://www.empowers.nl/images/blogs/chatgpt-bedrijf-aanbeveelt.jpg",
                        "datePublished": "2026-03-27T00:00:00+01:00",
                        "author": {
                            "@type": "Organization",
                            "name": "Empowers"
                        },
                        "publisher": {
                            "@type": "Organization",
                            "name": "Empowers",
                            "logo": {
                                "@type": "ImageObject",
                                "url": "https://www.empowers.nl/empowers-logo-color.svg"
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
                    <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Hoe zorg je dat ChatGPT jouw bedrijf aanbeveelt?" />
        <meta name="twitter:description" content="Wil je dat ChatGPT jouw bedrijf noemt? Leer welke stappen je neemt om zichtbaar te worden in AI-antwoorden en meer klant" />
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
                        <Link to="/blogs/geo" className="hover:text-accent transition-colors">GEO</Link>
                        <ChevronRight className="w-3 h-3" />
                        <span className="text-primary truncate">ChatGPT bedrijf aanbeveelt...</span>
                    </nav>

                    {/* Header */}
                    <header className="mb-16">
                        <div className="inline-block px-3 py-1 bg-accent/10 text-accent font-mono text-xs uppercase tracking-widest rounded-full mb-6">
                            GEO
                        </div>
                        <h1 className="font-sans font-bold text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight mb-8">
                            Hoe zorg je dat ChatGPT jouw bedrijf aanbeveelt?
                        </h1>
                        <div className="flex flex-wrap items-center gap-6 text-sm font-sans text-primary/60 border-y border-primary/10 py-6">
                            <div className="flex items-center gap-2">
                                <User className="w-4 h-4" />
                                <span>Empowers Redactie</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>27 maart 2026</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>7 minuten leestijd</span>
                            </div>
                        </div>
                    </header>

                    {/* Feature Image */}
                    <figure className="w-full h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden mb-16 relative bg-primary">
                        <div className="absolute inset-0 bg-[url('/images/blogs/chatgpt-bedrijf-aanbeveelt.jpg')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </figure>

                    {/* Content */}
                    <div className="prose prose-lg max-w-none mb-16">
                        <p className="text-lg text-neutral-700 mb-8">
                            ChatGPT is nu een serieus kanaal waar klanten hun vragen stellen. Niet meer alleen Google zoeken, maar "Hey ChatGPT, welk bedrijf kan je aanbevelen voor SEO?" En dan hoop je dat jij genoemd wordt. Die kans groeit als je de juiste stappen neemt.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">
                            Waarom ChatGPT aanbevelingen belangrijk zijn
                        </h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Bij onze klanten zien we dat ChatGPT steeds vaker als eerste stopplaats wordt gebruikt. Klanten vragen niet meer aan Google, maar aan ChatGPT. "Wie kan me helpen met mijn website?" ChatGPT geeft dan namen. Als jouw bedrijf niet in die antwoorden voorkomt, verlies je die klanten.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            ChatGPT baseerde zich bij training op data tot april 2024. Hoe sterker jouw online aanwezigheid op dat moment, hoe groter de kans dat je in de trainingsdata zat. En dus hoe waarschijnlijker het is dat ChatGPT je aanbeveelt.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">
                            Stap 1: Zorg dat je website echt iets zegt
                        </h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            ChatGPT leert wat je doet door je website te lezen. Een website die alleen "Welkom bij ons bedrijf" zegt, helpt niet. Je website moet helder maken wie je bent, wat je doet en voor wie.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            We merken in de praktijk dat bedrijven met sterke, specifieke content beter door AI-tools herkennen worden. "Wij doen digitale marketing" is te vaag. "Wij helpen lokale bedrijven omhoog in Google met onze SEO-aanpak" is veel beter. Zorg dat je homepage, diensten-pagina's en blog-posts duidelijk maken wat je expertise is.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">
                            Stap 2: Bouw je Google My Business uit
                        </h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Google My Business is een goudmijn voor ChatGPT. Die gegevens gebruikt ChatGPT graag. Zorg dat je profiel compleet is: alle gegevens kloppen, foto's goed staan, je zit ingedeeld in de juiste categorie.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Posts op Google My Business helpen ook. Als je regelmatig iets deelt, ziet ChatGPT dat je actief bent. Reviews zijn goud waard. Een bedrijf met tien 5-ster reviews ziet ChatGPT anders dan een bedrijf met geen reviews. Begin vandaag nog met actief Google My Business onderhouden.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">
                            Stap 3: Zorg voor positieve reviews
                        </h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            ChatGPT kijkt naar review-sites als Google Reviews, Trustpilot en andere. Reviews zijn een sterker signaal dan wat je zelf schrijft. Een bedrijf dat veel goede reviews heeft, ziet ChatGPT als betrouwbaar.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Vraag je tevreden klanten om een review achter te laten. Niet op een agressieve manier, maar gewoon: "Wij zouden het heel fijn vinden als je je ervaringen deelt." Reviews groeien niet vanzelf. Je moet er actief voor werken.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">
                            Stap 4: Verbeter je zichtbaarheid in Google
                        </h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Dit is cruciaal: als je niet hoog scoort in Google zoekresultaten, zit je waarschijnlijk ook niet goed in ChatGPT. Ze groeien uit dezelfde bron. Een sterke <Link to="/seo" className="text-accent hover:underline">SEO-strategie</Link> helpt je in beide.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Zorg dat je website makkelijk te vinden is. Maak content die Google snapt. Technisch moet alles goed staan. Als je website snel laadt, mobile-vriendelijk is en duidelijk gestructureerd, zien zowel Google als ChatGPT je graag.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">
                            Stap 5: Zorg voor backlinks van betrouwbare sites
                        </h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Andere sites die naar jou linken, zijn als aanbevelingen. ChatGPT ziet dat ook. Als een groot nieuwsmedium of branche-organisatie naar je linkt, zegt dat: "Dit bedrijf is belangrijk." Probeer zichtbaar te worden door goed werk, partnerships, podcast-optredens of inhoudelijke bijdragen aan vakblogs.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">
                            Stap 6: Schrijf inhoudelijke blog-posts
                        </h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Blog-posts helpen mee. ChatGPT leert van lange, informatieve artikelen wat je expertise is. Bij Empowers schrijven we posts die echte vragen van klanten beantwoorden. Hoe meer nuttige inhoud je deelt, des te beter snapt ChatGPT wat je kan.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Maak posts over onderwerpen waar je goed in bent. Niet alles moet gericht zijn op aanbevelingen. Maar veel goeie posts maken samen dat ChatGPT je als expert ziet. Lees meer over hoe je je <Link to="/blogs/geo/optimaliseer-content-google-ai-overviews" className="text-accent hover:underline">content optimaliseer voor Google AI Overviews</Link> - dezelfde principes helpen voor ChatGPT.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">
                            Stap 7: Zorg voor mentions online
                        </h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Als branchesites, vakblogs of zakelijke gidsen je bedrijf noemen, ziet ChatGPT dat. Je hoeft niet altijd een link te hebben. Het feit dat je ergens wordt genoemd, geeft signaal. Probeer partnerships op te bouwen met leveranciers, peers en organisaties in je branche.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">
                            Wat je NIET moet doen
                        </h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Daar zijn er een aantal van:
                        </p>
                        <ul className="list-disc pl-6 space-y-3">
                            <li>Fake reviews maken. ChatGPT leert van echte reviews. Nep-reviews schaden je op lange termijn.</li>
                            <li>Keyword-spammen op je website. "SEO SEO SEO" schrijven helpt niet. Schrijf voor mensen, niet voor algoritmes.</li>
                            <li>Private backlinks kopen. Dat werkt niet meer. Backlinks moeten organisch ontstaan.</li>
                            <li>Hoop hebben op snelle resultaten. ChatGPT trainen gebeurt niet real-time. Dit duurt maanden tot jaren.</li>
                        </ul>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">
                            Hoe groot is de impact echt?
                        </h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            We merken in de praktijk dat ChatGPT nog niet als primaire verkeerbron voor de meeste bedrijven werkt. Maar dat verandert snel. Bij onze klanten zien we dat steeds meer potentiële klanten via ChatGPT berichten sturen. Het is niet primary traffic, maar het groeit exponentieel.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Begin nu. Als je wacht tot ChatGPT helemaal dominant is, ben je te laat. De bedrijven die nu hun online aanwezigheid opbouwen, zullen straks beter scoren. Lees ook ons artikel over <Link to="/blogs/geo/seo-strategie-vervangen-door-geo" className="text-accent hover:underline">hoe SEO verandert door AI</Link> om het volledige plaatje te zien.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">
                            Dit is een marathon, geen sprint
                        </h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De stappen die je neemt om zichtbaar te worden voor ChatGPT, helpen ook voor Google, reviews en je hele online reputatie. Het is geen apart project. Het is één project met meerdere voordelen.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Start vandaag: check je Google My Business, vraag je eerste vijf klanten om een review, zorg dat je website duidelijk maakt wat je doet. Die basis is het fundament. Als je meer hulp nodig hebt, <Link to="/contact" className="text-accent hover:underline">neem contact met ons op</Link>. We helpen graag je online basis sterker te maken.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">
                            Wat ga jij volgende week doen?
                        </h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Kies één stap uit dit artikel. Niet alles tegelijk. Als je op Google My Business begint, focus je daar. Na twee weken ga je naar de volgende stap. Slow and steady wins the race. Over zes maanden ben je veel verder dan bedrijven die nu niets doen.
                        </p>
                    </div>

                    {/* FAQ Section */}
                    <section className="py-16 mb-16">
                        <h2 className="text-3xl font-bold text-dark mb-12 text-center">Veelgestelde vragen</h2>
                        <div className="space-y-6 not-prose">
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">
                                    Hoe weet ChatGPT welke bedrijven het moet aanbevelen?
                                </h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    ChatGPT is getraind op data tot april 2024 en leert uit het internet welke bedrijven bestaan en hoe goed ze zijn. Je website, reviews, kantoor locatie en Google My Business-informatie helpen ChatGPT je bedrijf beter begrijpen. Hoe meer positieve signalen online, des te groter de kans dat ChatGPT je noemt in relevante antwoorden.
                                </p>
                            </div>

                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">
                                    Kan ik ChatGPT betalen om mijn bedrijf aan te bevelen?
                                </h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Nee, OpenAI werkt zo niet. ChatGPT zal je bedrijf niet aanbevelen omdat je ervoor betaalt. Het hangt af van de kwaliteit van je online aanwezigheid en hoe goed je website aangeeft wat je doet. Je moet je bedrijf organisch opbouwen, door betere content, meer reviews en sterke signalen online.
                                </p>
                            </div>

                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">
                                    Helpt Google My Business bij ChatGPT aanbevelingen?
                                </h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Ja, absoluut. Google My Business geeft ChatGPT informatie over je adres, openingstijden, reviews en foto's. Een compleet en goed onderhouden Google My Business-profiel vergroot je zichtbaarheid in AI-antwoorden. Zorg ervoor dat alle gegevens kloppen en dat je regelmatig posts plaatst.
                                </p>
                            </div>

                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">
                                    Wat is belangrijker: Google SEO of ChatGPT aanbevelingen?
                                </h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Beide. Google SEO en ChatGPT aanbevelingen groeien uit dezelfde bron: sterke online signalen. Als je goed scoort in Google zoekresultaten, zal ChatGPT je waarschijnlijk ook aanbevelen. Focus op beide tegelijk met een sterke website, relevante content en opbouw van je reputatie. Ze vullen elkaar aan.
                                </p>
                            </div>

                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">
                                    Hoe lang duurt het voordat ChatGPT mijn bedrijf aanbeveelt?
                                </h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Dat varieert. ChatGPT werkt met trainingsdata die niet in real-time wordt bijgewerkt. Het kan maanden tot jaren duren voordat nieuwe bedrijven in het trainingsset terechtkomen. Begin nu met je online aanwezigheid sterker te maken, zodat als ChatGPT volgende keer getraind wordt, je bedrijf er goed uitkomt.
                                </p>
                            </div>

                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">
                                    Zijn er andere AI-tools die mijn bedrijf kunnen aanbevelen?
                                </h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Ja. Google AI Overviews, Claude, Perplexity en andere AI-tools gaan bedrijven aanbevelen. De stappen die je nu neemt om zichtbaar te zijn voor ChatGPT werken ook voor deze andere tools. Hoe meer plek je inneemt in zoekresultaten en reviews, des te groter je bereik via alle AI-tools.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Related Articles */}
                    <section className="py-12 border-t border-primary/10">
                        <h3 className="font-bold text-lg text-primary mb-8">Lees ook dit</h3>
                        <div className="grid gap-6 md:grid-cols-2">
                            <Link to="/seo" className="group block">
                                <div className="border border-primary/10 rounded-xl p-6 hover:border-accent/30 transition-colors">
                                    <h3 className="font-semibold text-primary group-hover:text-accent mb-2">
                                        Meer over SEO
                                    </h3>
                                    <p className="text-sm text-primary/60">Ontdek hoe SEO jouw bedrijf online zichtbaarder maakt.</p>
                                </div>
                            </Link>
                            <Link to="/seo" className="group block">
                                <div className="border border-primary/10 rounded-xl p-6 hover:border-accent/30 transition-colors">
                                    <h3 className="font-semibold text-primary group-hover:text-accent mb-2">
                                        Onze SEO-diensten
                                    </h3>
                                    <p className="text-sm text-primary/60">Laat ons je website naar het volgende level brengen.</p>
                                </div>
                            </Link>
                        </div>
                    </section>
                </div>
            </article>

            {/* Bottom CTA */}
            <section className="w-full pb-32 px-6">
                <div className="max-w-4xl mx-auto bg-primary rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
                    <h2 className="relative z-10 font-drama italic text-background text-3xl sm:text-4xl md:text-5xl mb-6">Klaar om te groeien?</h2>
                    <p className="relative z-10 font-sans text-background/70 text-lg mb-10 max-w-xl mx-auto">
                        Je online aanwezigheid kan veel beter. We helpen graag je bedrijf sterker te maken zodat je niet alleen ChatGPT, maar ook Google en je klanten veel beter bereikt.
                    </p>
                    <Link to="/contact" className="relative z-10 btn-magnetic inline-flex items-center justify-center bg-accent text-background font-sans font-bold text-lg px-10 py-4 rounded-[2rem] hover:bg-accent/90 transition-colors">
                        Plan een gesprek
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
