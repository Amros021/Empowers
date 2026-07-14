import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ChevronRight, User } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function BlogPostPerformanceMaxGoogleAdsWeten() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen selection:bg-accent/30 selection:text-dark flex flex-col bg-background">
            <Helmet>
                <title>Performance Max in Google Ads: wat je moet weten in 2026 | Empowers</title>
                <meta name="description" content="Performance Max is de krachtigste campagne in Google Ads, maar ook de meest ondoorzichtige. Lees hoe PMax werkt, wanneer je het inzet en hoe je grip houdt op resultaten." />
                <link rel="canonical" href="https://www.empowers.nl/blogs/google-ads/performance-max-google-ads-weten" />
                <meta property="og:title" content="Performance Max in Google Ads: wat je moet weten" />
                <meta property="og:description" content="Performance Max is krachtig én ondoorzichtig. Lees hoe je grip houdt op deze campagnes en wanneer je ze inzet." />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://www.empowers.nl/blogs/google-ads/performance-max-google-ads-weten" />
                <meta property="og:image" content="https://www.empowers.nl/images/blogs/performance-max-google-ads-weten.jpg" />
                <meta property="article:published_time" content="2026-04-14T00:00:00+02:00" />
                <meta property="article:author" content="Empowers" />
                <meta property="article:section" content="Google Ads" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Performance Max in Google Ads: wat je moet weten" />
                <meta name="twitter:description" content="Hoe werkt PMax en hoe houd je grip op de resultaten?" />

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Article",
                        "headline": "Performance Max in Google Ads: wat je moet weten in 2026",
                        "description": "Performance Max is de krachtigste campagne in Google Ads, maar ook de meest ondoorzichtige. Lees hoe PMax werkt, wanneer je het inzet en hoe je grip houdt op resultaten.",
                        "image": "https://www.empowers.nl/images/blogs/performance-max-google-ads-weten.jpg",
                        "datePublished": "2026-04-14T00:00:00+02:00",
                        "author": { "@type": "Organization", "name": "Empowers" },
                        "publisher": {
                            "@type": "Organization",
                            "name": "Empowers",
                            "url": "https://www.empowers.nl",
                            "logo": {
                                "@type": "ImageObject",
                                "url": "https://www.empowers.nl/empowers-logo-color.svg"
                            }
                        },
                        "mainEntity": {
                            "@type": "FAQPage",
                            "mainEntity": [
                                {
                                    "@type": "Question",
                                    "name": "Wat is Performance Max precies?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Performance Max is een campagnetype waarin Google jouw advertenties automatisch verspreidt over alle kanalen: Search, Shopping, Display, YouTube, Gmail en Maps. Je levert assets en signalen aan, Google kiest plaatsing, doelgroep en biedingen op basis van AI."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Wanneer moet ik Performance Max inzetten?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "PMax werkt het beste als je al een volwassen account hebt met bewezen conversiedata. Nieuwe accounts of accounts onder 30 conversies per maand leren te langzaam. Voor webshops is PMax vaak een booster naast bestaande Shopping- en Search-campagnes."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Hoe hou ik controle over wat PMax doet?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Gebruik asset groups per thema of productgroep, voeg negatieve zoekwoorden toe op accountniveau, sluit brand traffic uit via scripts en monitor de insights tab wekelijks. Zonder deze controles wordt PMax een zwarte doos met willekeurig budget."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Kan PMax mijn bestaande campagnes kannibaliseren?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Ja. PMax biedt mee in dezelfde veilingen als je Search en Shopping. Zonder configuratie trekt PMax traffic weg bij campagnes die je zelf stuurt. Voorkom dit door Search-campagnes met exacte zoekwoorden naast PMax te laten draaien en brand-termen uit te sluiten."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Welke assets heb ik nodig voor een sterke PMax?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Minimaal 5 headlines, 5 descriptions, 5 afbeeldingen in verschillende formaten, 1 logo, 1 video van 10 seconden of langer en een duidelijke final URL per asset group. Video's maken het verschil. PMax maakt er automatisch ook een, maar die presteert slechter dan een echte."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Is Performance Max hetzelfde als Smart Shopping?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Nee, maar PMax heeft Smart Shopping wel vervangen in 2022. PMax is breder, het biedt ook op Search, Display, YouTube en Gmail. Smart Shopping zat alleen op Shopping en Display. Voor webshops is PMax een logische doorontwikkeling."
                                    }
                                }
                            ]
                        }
                    })}
                </script>

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "BreadcrumbList",
                        "itemListElement": [
                            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.empowers.nl" },
                            { "@type": "ListItem", "position": 2, "name": "Blogs", "item": "https://www.empowers.nl/blogs" },
                            { "@type": "ListItem", "position": 3, "name": "Google Ads", "item": "https://www.empowers.nl/blogs/google-ads" },
                            { "@type": "ListItem", "position": 4, "name": "Performance Max", "item": "https://www.empowers.nl/blogs/google-ads/performance-max-google-ads-weten" }
                        ]
                    })}
                </script>
            </Helmet>

            <Navbar />

            <article className="w-full pt-40 pb-24 px-6 relative">
                <div className="max-w-4xl mx-auto">
                    <nav className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-primary/50 mb-12">
                        <Link to="/" className="hover:text-accent transition-colors">Home</Link>
                        <ChevronRight className="w-3 h-3" />
                        <Link to="/nieuws" className="hover:text-accent transition-colors">Nieuws</Link>
                        <ChevronRight className="w-3 h-3" />
                        <Link to="/blogs/google-ads" className="hover:text-accent transition-colors">Google Ads</Link>
                        <ChevronRight className="w-3 h-3" />
                        <span className="text-primary truncate">Performance Max</span>
                    </nav>

                    <header className="mb-16">
                        <div className="inline-block px-3 py-1 bg-accent/10 text-accent font-mono text-xs uppercase tracking-widest rounded-full mb-6">Google Ads</div>
                        <h1 className="font-sans font-bold text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight mb-8">
                            Performance Max in Google Ads: wat je moet weten in 2026
                        </h1>
                        <div className="flex flex-wrap items-center gap-6 text-sm font-sans text-primary/60 border-y border-primary/10 py-6">
                            <div className="flex items-center gap-2"><User className="w-4 h-4" /><span>Empowers Redactie</span></div>
                            <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>14 april 2026</span></div>
                            <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>8 minuten leestijd</span></div>
                        </div>
                    </header>

                    <figure className="w-full h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden mb-16 relative bg-primary">
                        <div className="absolute inset-0 bg-[url('/images/blogs/performance-max-google-ads-weten.jpg')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </figure>

                    <div className="prose prose-lg max-w-none prose-headings:text-primary prose-headings:font-bold prose-a:text-accent prose-a:underline hover:prose-a:text-accent/80">
                        <p className="text-xl leading-relaxed text-primary/80 font-medium mb-6">
                            Performance Max is het paradepaardje van Google Ads. In één campagne bereik je Search, Shopping, Display, YouTube, Gmail en Maps. Google belooft meer conversies met minder werk. De realiteit is genuanceerder: PMax kan geweldig presteren, of je budget in rap tempo verbranden. In dit artikel lees je hoe PMax werkt, wanneer je het inzet en hoe je grip houdt op deze black box.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe Performance Max werkt onder de motorkap</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            PMax draait op Google's machine learning. Jij levert assets aan, Google bouwt de advertenties, kiest plaatsingen, voorspelt doelgroepen en optimaliseert biedingen. Alles gebeurt automatisch op basis van je conversiedoel en een biedstrategie.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Het verschil met klassieke campagnes is groot. Je kiest geen zoekwoorden, geen doelgroepen en geen plaatsingen. Je geeft signalen, geen instructies. Dat vraagt om vertrouwen in het algoritme en scherp sturen op output in plaats van op setup.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wanneer PMax wel en niet werkt</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            PMax heeft data nodig om te leren. Onder 30 conversies per maand presteert het wispelturig. Voor startende accounts of niches met lage volumes is Search of Standard Shopping vaak een betere keuze. Heb je wel volume, dan versnelt PMax je groei.
                        </p>

                        <h3 className="text-xl font-semibold text-primary mt-10 mb-4">PMax is sterk voor</h3>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            E-commerce met brede productassortimenten, bedrijven die schaal zoeken boven bestaande campagnes en advertenties waar creative de sleutel is. Ook voor lead generation werkt PMax, mits je waardevolle conversies doorgeeft in plaats van alleen formuliereninzendingen.
                        </p>

                        <h3 className="text-xl font-semibold text-primary mt-10 mb-4">PMax is zwak voor</h3>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Niche-diensten met lokale focus, producten met lage marges en accounts die nog geen bewezen conversies hebben. Ook als je per product heel specifieke biedregels nodig hebt, is Search of Shopping een betere keuze. Voor meer details over campagnekeuze, lees onze <Link to="/blogs/google-ads/google-ads-campagne-structuur" className="text-accent hover:underline">gids over campagnestructuur</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Asset groups: je enige echte stuur</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een asset group is het equivalent van een advertentiegroep in PMax. Je groepeert assets en signalen rond één thema of productcategorie. Google gebruikt die informatie om relevantere matches te maken.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Maak meerdere asset groups in één campagne, niet meerdere campagnes voor één thema. Eén per productcategorie of dienst werkt doorgaans het best. Geef elke asset group unieke headlines, beelden en video's en sluit een relevante audience signal aan. Zonder die signalen raakt Google in het wilde weg.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Grip houden op een PMax-campagne</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            PMax wordt vaak beschuldigd van een zwarte doos. Dat is gedeeltelijk waar, maar je hebt meer knoppen dan je denkt. Vier acties geven je substantieel meer controle.
                        </p>

                        <h3 className="text-xl font-semibold text-primary mt-10 mb-4">1. Negatieve zoekwoorden</h3>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Sinds 2024 kun je negatieve zoekwoorden op accountniveau en campagneniveau toevoegen. Gebruik ze om budgetverspilling op irrelevante termen te stoppen en brand traffic uit te sluiten zodat die in je branded campagne blijft.
                        </p>

                        <h3 className="text-xl font-semibold text-primary mt-10 mb-4">2. Insights tab wekelijks checken</h3>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De Insights tab toont welke zoekthema's je PMax oppikt, welke doelgroepen converteren en welke assets goed presteren. Wekelijks checken voorkomt dat je campagne op de verkeerde thema's gaat draaien.
                        </p>

                        <h3 className="text-xl font-semibold text-primary mt-10 mb-4">3. Asset performance sturen</h3>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Google rangschikt assets als Low, Good of Best. Vervang Low assets consequent. Een PMax-campagne met alleen Good en Best assets presteert tot 30 procent beter dan eentje met rommelige assets erin.
                        </p>

                        <h3 className="text-xl font-semibold text-primary mt-10 mb-4">4. Scripts voor extra data</h3>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Er zijn Google Ads scripts die placements, search terms en kanalen uit PMax extraheren. Die data zit standaard verborgen, met een script trek je het naar buiten. Voor accounts met fors budget is dat bijna onmisbaar.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Fouten die we vaak tegenkomen</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            PMax zonder conversiedoel, PMax gestart zonder voldoende assets, PMax die brand traffic opvreet en PMax waarbij alles in één asset group zit. Stuk voor stuk makkelijk te voorkomen, maar we zien ze bij elke audit terugkomen. Begin daarom altijd met een heldere campagnestructuur en goede conversiedoelen.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Draait jouw PMax-campagne en wil je weten of er meer uit te halen valt? We maken graag een analyse en tonen welke knoppen direct impact hebben. Plan een gesprek via onze <Link to="/contact" className="text-accent hover:underline">contactpagina</Link>.
                        </p>
                    </div>

                    <section className="mt-16 pt-12 border-t border-primary/10">
                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Veelgestelde vragen</h2>
                        <div className="space-y-6 not-prose">
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat is Performance Max precies?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Performance Max is een campagnetype waarin Google jouw advertenties automatisch verspreidt over alle kanalen: Search, Shopping, Display, YouTube, Gmail en Maps. Je levert assets en signalen aan, Google kiest plaatsing, doelgroep en biedingen op basis van AI.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wanneer moet ik Performance Max inzetten?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">PMax werkt het beste als je al een volwassen account hebt met bewezen conversiedata. Nieuwe accounts of accounts onder 30 conversies per maand leren te langzaam. Voor webshops is PMax vaak een booster naast bestaande Shopping- en Search-campagnes.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoe hou ik controle over wat PMax doet?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Gebruik asset groups per thema of productgroep, voeg negatieve zoekwoorden toe op accountniveau, sluit brand traffic uit via scripts en monitor de insights tab wekelijks. Zonder deze controles wordt PMax een zwarte doos met willekeurig budget.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Kan PMax mijn bestaande campagnes kannibaliseren?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Ja. PMax biedt mee in dezelfde veilingen als je Search en Shopping. Zonder configuratie trekt PMax traffic weg bij campagnes die je zelf stuurt. Voorkom dit door Search-campagnes met exacte zoekwoorden naast PMax te laten draaien en brand-termen uit te sluiten.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Welke assets heb ik nodig voor een sterke PMax?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Minimaal 5 headlines, 5 descriptions, 5 afbeeldingen in verschillende formaten, 1 logo, 1 video van 10 seconden of langer en een duidelijke final URL per asset group. Video's maken het verschil. PMax maakt er automatisch ook een, maar die presteert slechter dan een echte.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Is Performance Max hetzelfde als Smart Shopping?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Nee, maar PMax heeft Smart Shopping wel vervangen in 2022. PMax is breder, het biedt ook op Search, Display, YouTube en Gmail. Smart Shopping zat alleen op Shopping en Display. Voor webshops is PMax een logische doorontwikkeling.</p>
                            </div>
                        </div>
                    </section>

                    <section className="mt-16 pt-12 border-t border-primary/10">
                        <h3 className="text-xl font-bold text-primary mb-6">Lees ook</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <Link to="/blogs/google-ads/google-ads-commerce-verhoog-roas" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Google Ads voor e-commerce</h3>
                                <p className="text-primary/60 text-sm">Hoe je je ROAS verhoogt als webshop.</p>
                            </Link>
                            <Link to="/blogs/google-ads/google-ads-campagne-structuur" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Campagnestructuur uitgelegd</h3>
                                <p className="text-primary/60 text-sm">Hoe je een Google Ads account opbouwt.</p>
                            </Link>
                            <Link to="/blogs/google-ads/smart-bidding-uitgelegd-wanneer-wanneer" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Handmatig vs slim bieden</h3>
                                <p className="text-primary/60 text-sm">Welke biedstrategie past bij jou?</p>
                            </Link>
                        </div>
                    </section>
                </div>
            </article>

            <section className="w-full pb-32 px-6">
                <div className="max-w-4xl mx-auto bg-primary rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
                    <h2 className="relative z-10 font-drama italic text-background text-3xl sm:text-4xl md:text-5xl mb-6">Meer uit je PMax-campagne halen?</h2>
                    <p className="relative z-10 font-sans text-background/70 text-lg mb-10 max-w-xl mx-auto">We duiken in je campagnes en laten zien welke knoppen direct impact hebben. Geen verplichtingen, wel een helder actieplan.</p>
                    <Link to="/contact" className="relative z-10 btn-magnetic inline-flex items-center justify-center bg-accent text-background font-sans font-bold text-lg px-10 py-4 rounded-[2rem] hover:bg-accent/90 transition-colors">Neem contact op</Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
