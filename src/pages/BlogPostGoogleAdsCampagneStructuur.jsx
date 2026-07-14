import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ChevronRight, User } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function BlogPostGoogleAdsCampagneStructuur() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen selection:bg-accent/30 selection:text-dark flex flex-col bg-background">
            <Helmet>
                <title>Google Ads campagnestructuur: zo bouw je een account dat schaalt | Empowers</title>
                <meta name="description" content="Een goede Google Ads campagnestructuur is de basis van elk winstgevend account. Lees hoe je campagnes, advertentiegroepen en zoekwoorden opbouwt voor maximale controle." />
                <link rel="canonical" href="https://www.empowers.nl/blogs/google-ads/google-ads-campagne-structuur" />
                <meta property="og:title" content="Google Ads campagnestructuur: zo bouw je een account dat schaalt" />
                <meta property="og:description" content="De juiste campagnestructuur maakt het verschil tussen winstgevend adverteren en geld verbranden." />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://www.empowers.nl/blogs/google-ads/google-ads-campagne-structuur" />
                <meta property="og:image" content="https://www.empowers.nl/images/blogs/google-ads-campagne-structuur.jpg" />
                <meta property="article:published_time" content="2026-04-14T00:00:00+02:00" />
                <meta property="article:author" content="Empowers" />
                <meta property="article:section" content="Google Ads" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Google Ads campagnestructuur die schaalt" />
                <meta name="twitter:description" content="Hoe je campagnes, advertentiegroepen en zoekwoorden opbouwt voor maximale controle." />

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Article",
                        "headline": "Google Ads campagnestructuur: zo bouw je een account dat schaalt",
                        "description": "Een goede Google Ads campagnestructuur is de basis van elk winstgevend account. Lees hoe je campagnes, advertentiegroepen en zoekwoorden opbouwt voor maximale controle.",
                        "image": "https://www.empowers.nl/images/blogs/google-ads-campagne-structuur.jpg",
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
                                    "name": "Wat is de ideale campagnestructuur in Google Ads?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Er is geen one-size-fits-all, maar een logische structuur volgt je producten, diensten of zoekintentie. Scheid branded en non-branded, deel Search op naar thema en houd Shopping en PMax apart. Houd het overzichtelijk: tien goed gestructureerde campagnes verslaan vijftig rommelige."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Hoeveel advertentiegroepen per campagne is te veel?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Meer dan 10 tot 15 advertentiegroepen per campagne wordt lastig te beheren. Beter is om de campagne op te splitsen naar thema of intentie. Kleine advertentiegroepen met 5 tot 15 zoekwoorden presteren meestal beter dan mega-groepen met honderd termen."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Moet ik SKAG's nog gebruiken?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Single Keyword Ad Groups zijn grotendeels achterhaald sinds Google match types heeft verruimd. Moderne thema-advertentiegroepen met 5 tot 15 nauw verwante zoekwoorden werken beter met huidige match types en biedautomatisering. SKAGs leveren nu vaak verwaarloosbare extra grip op ten opzichte van de extra beheerlast."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Moet ik campagnes per locatie of per product splitsen?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Splits op basis waar je biedmanagement anders moet zijn. Verschillende budgetten per locatie vragen om aparte campagnes. Hetzelfde budget voor alle locaties kan in één campagne met locatietargeting. Voor producten geldt: splits wanneer marges of conversieratio's significant verschillen."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Waarom presteert mijn account opeens slechter na een restructurering?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Nieuwe campagnes verliezen tijdelijk hun leerdata. Reken op 2 tot 4 weken voordat biedstrategieën weer stabiel draaien. Beperk herstructureringen tot wat echt nodig is. Een incrementele aanpak beschermt je prestaties beter dan één grote reset."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Hoe vaak moet ik mijn accountstructuur herzien?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Een jaarlijkse structuurreview is gezond. Voor accounts die snel groeien zelfs elk kwartaal. Check of je campagnes nog passen bij je huidige aanbod, marges en doelen. Structuur die werkte bij 5000 euro budget, werkt zelden optimaal bij 50000 euro."
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
                            { "@type": "ListItem", "position": 4, "name": "Campagnestructuur", "item": "https://www.empowers.nl/blogs/google-ads/google-ads-campagne-structuur" }
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
                        <span className="text-primary truncate">Campagnestructuur</span>
                    </nav>

                    <header className="mb-16">
                        <div className="inline-block px-3 py-1 bg-accent/10 text-accent font-mono text-xs uppercase tracking-widest rounded-full mb-6">Google Ads</div>
                        <h1 className="font-sans font-bold text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight mb-8">
                            Google Ads campagnestructuur: zo bouw je een account dat schaalt
                        </h1>
                        <div className="flex flex-wrap items-center gap-6 text-sm font-sans text-primary/60 border-y border-primary/10 py-6">
                            <div className="flex items-center gap-2"><User className="w-4 h-4" /><span>Empowers Redactie</span></div>
                            <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>14 april 2026</span></div>
                            <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>8 minuten leestijd</span></div>
                        </div>
                    </header>

                    <figure className="w-full h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden mb-16 relative bg-primary">
                        <div className="absolute inset-0 bg-[url('/images/blogs/google-ads-campagne-structuur.jpg')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </figure>

                    <div className="prose prose-lg max-w-none prose-headings:text-primary prose-headings:font-bold prose-a:text-accent prose-a:underline hover:prose-a:text-accent/80">
                        <p className="text-xl leading-relaxed text-primary/80 font-medium mb-6">
                            Een goede campagnestructuur is het fundament van elk winstgevend Google Ads account. Met de juiste opzet houd je grip op budget, biedingen en prestaties, zelfs als je account groeit van 1000 naar 100000 euro per maand. Een zwakke structuur zorgt voor verspild budget, ondoorzichtige rapportages en campagnes die elkaar in de weg zitten. In dit artikel lees je hoe je een structuur bouwt die meegroeit.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Waarom structuur zo bepalend is</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Google Ads heeft meerdere niveaus: account, campagne, advertentiegroep, advertentie en zoekwoord. Op elk niveau kun je iets sturen. Campagnes bepalen budgetten, locatietargeting en biedstrategie. Advertentiegroepen groeperen advertenties en zoekwoorden met dezelfde boodschap. Keuze op het ene niveau beperkt je op het andere.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Structuurbeslissingen hebben lange impact. Een campagne die al maanden loopt, heeft learning data die verdwijnt bij een split. Daarom is structuur geen optimalisatie, het is een strategische keuze die je vooraf maakt.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">De drie lagen van een gezond account</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Bij elk Google Ads account dat we bouwen, zien we drie lagen terugkomen: branded, non-branded en retargeting. Elk met een eigen doel, budget en biedstrategie.
                        </p>

                        <h3 className="text-xl font-semibold text-primary mt-10 mb-4">Laag 1: branded</h3>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Mensen die specifiek op jouw merknaam zoeken zijn je warmste publiek. Conversieratio's boven 10 procent zijn normaal. Deze campagne draait altijd, met een laag budget maar hoge ROAS. Hij voorkomt dat concurrenten op jouw naam bieden en jouw traffic afsnoepen.
                        </p>

                        <h3 className="text-xl font-semibold text-primary mt-10 mb-4">Laag 2: non-branded</h3>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Hier draait het om groei. Je richt je op zoektermen over diensten, producten of problemen die je oplost. Splits deze laag per thema of dienst. Een boekhoudkantoor zou bijvoorbeeld aparte campagnes kunnen hebben voor "belastingaangifte", "jaarrekening" en "zzp boekhouding".
                        </p>

                        <h3 className="text-xl font-semibold text-primary mt-10 mb-4">Laag 3: retargeting</h3>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Mensen die je website al bezochten zijn tot 3x waarschijnlijker om te converteren. Houd retargeting apart zodat je budget en biedingen gericht inzet. Dit kan via Display, YouTube of Discovery-campagnes.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Advertentiegroepen: nauw genoeg, niet te smal</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Elke advertentiegroep moet één duidelijk thema hebben. Dat zorgt ervoor dat je advertentie precies past bij de zoekopdracht en je Quality Score hoog blijft. Vuistregel: 5 tot 15 nauw verwante zoekwoorden per groep.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Single Keyword Ad Groups waren jaren populair, maar sinds Google match types heeft verruimd leveren ze zelden nog grip op. Moderne thema-advertentiegroepen met goed geschreven responsieve zoekadvertenties werken in 2026 beter. Voor meer details lees onze <Link to="/blogs/google-ads/google-ads-quality-score-verhogen" className="text-accent hover:underline">blog over Quality Score</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Campagnes splitsen: wanneer wel, wanneer niet</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Splitsen is verleidelijk, maar kost learning data. Splits alleen wanneer je daadwerkelijk anders wilt sturen op budget, locatie of biedstrategie. Splits niet om enkel gedetailleerder te kunnen rapporteren, daar zijn segmenten en filters voor.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Typische redenen om te splitsen zijn: verschillende marges per product, verschillende ROAS-targets per dienst, andere doelgroep per locatie of aparte budgetten per seizoen. Zonder één van deze redenen blijf je beter bij één campagne.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Naamgevingsconventie voor rust in je account</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een consistente naamgeving helpt enorm naarmate je account groeit. We gebruiken het patroon [Kanaal] - [Thema] - [Locatie] - [Match Type]. Bijvoorbeeld: "Search - Boekhouding ZZP - NL - Exact". Deze conventie maakt filteren, sorteren en scripts schrijven veel makkelijker.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">De valkuilen die we vaak zien</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Drie structuurfouten komen bij bijna elke audit voorbij. Te veel campagnes met te klein budget per stuk, waardoor geen enkele genoeg conversies binnenhaalt om slim te bieden. Branded en non-branded door elkaar, waardoor je ROAS kunstmatig wordt opgekrikt door merkzoekers. PMax die ongeremd naast Search draait, waardoor de twee campagnes met elkaar concurreren in dezelfde veilingen.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Wil je weten of jouw accountstructuur jou helpt of tegenhoudt? We maken graag een gratis audit met concrete adviezen. Plan een gesprek via onze <Link to="/contact" className="text-accent hover:underline">contactpagina</Link>.
                        </p>
                    </div>

                    <section className="mt-16 pt-12 border-t border-primary/10">
                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Veelgestelde vragen</h2>
                        <div className="space-y-6 not-prose">
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat is de ideale campagnestructuur in Google Ads?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Er is geen one-size-fits-all, maar een logische structuur volgt je producten, diensten of zoekintentie. Scheid branded en non-branded, deel Search op naar thema en houd Shopping en PMax apart. Houd het overzichtelijk: tien goed gestructureerde campagnes verslaan vijftig rommelige.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoeveel advertentiegroepen per campagne is te veel?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Meer dan 10 tot 15 advertentiegroepen per campagne wordt lastig te beheren. Beter is om de campagne op te splitsen naar thema of intentie. Kleine advertentiegroepen met 5 tot 15 zoekwoorden presteren meestal beter dan mega-groepen met honderd termen.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Moet ik SKAG's nog gebruiken?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Single Keyword Ad Groups zijn grotendeels achterhaald sinds Google match types heeft verruimd. Moderne thema-advertentiegroepen met 5 tot 15 nauw verwante zoekwoorden werken beter met huidige match types en biedautomatisering. SKAGs leveren nu vaak verwaarloosbare extra grip op ten opzichte van de extra beheerlast.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Moet ik campagnes per locatie of per product splitsen?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Splits op basis waar je biedmanagement anders moet zijn. Verschillende budgetten per locatie vragen om aparte campagnes. Hetzelfde budget voor alle locaties kan in één campagne met locatietargeting. Voor producten geldt: splits wanneer marges of conversieratio's significant verschillen.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Waarom presteert mijn account opeens slechter na een restructurering?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Nieuwe campagnes verliezen tijdelijk hun leerdata. Reken op 2 tot 4 weken voordat biedstrategieën weer stabiel draaien. Beperk herstructureringen tot wat echt nodig is. Een incrementele aanpak beschermt je prestaties beter dan één grote reset.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoe vaak moet ik mijn accountstructuur herzien?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Een jaarlijkse structuurreview is gezond. Voor accounts die snel groeien zelfs elk kwartaal. Check of je campagnes nog passen bij je huidige aanbod, marges en doelen. Structuur die werkte bij 5000 euro budget, werkt zelden optimaal bij 50000 euro.</p>
                            </div>
                        </div>
                    </section>

                    <section className="mt-16 pt-12 border-t border-primary/10">
                        <h3 className="text-xl font-bold text-primary mb-6">Lees ook</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <Link to="/blogs/google-ads/performance-max-google-ads-weten" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Performance Max uitgelegd</h3>
                                <p className="text-primary/60 text-sm">Hoe PMax in je structuur past.</p>
                            </Link>
                            <Link to="/blogs/google-ads/google-ads-commerce-verhoog-roas" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Google Ads voor e-commerce</h3>
                                <p className="text-primary/60 text-sm">ROAS verhogen als webshop.</p>
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
                    <h2 className="relative z-10 font-drama italic text-background text-3xl sm:text-4xl md:text-5xl mb-6">Klaar voor een structuur die schaalt?</h2>
                    <p className="relative z-10 font-sans text-background/70 text-lg mb-10 max-w-xl mx-auto">We analyseren je Google Ads account en laten zien waar je structuur meegroeit met je ambities. Geen verplichtingen, wel een helder plan.</p>
                    <Link to="/contact" className="relative z-10 btn-magnetic inline-flex items-center justify-center bg-accent text-background font-sans font-bold text-lg px-10 py-4 rounded-[2rem] hover:bg-accent/90 transition-colors">Neem contact op</Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
