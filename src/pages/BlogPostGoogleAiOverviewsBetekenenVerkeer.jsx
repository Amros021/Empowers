import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ChevronRight, User } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function BlogPostGoogleAiOverviewsBetekenenVerkeer() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen selection:bg-accent/30 selection:text-dark flex flex-col bg-background">
            <Helmet>
                <title>Google AI Overviews: wat betekenen ze voor jouw verkeer (2026) | Empowers</title>
                <meta name="description" content="Google AI Overviews verlagen organische CTR's flink. Lees wat het betekent voor jouw verkeer en hoe je content schrijft die juist meer kliks oplevert." />
                <link rel="canonical" href="https://www.empowers.nl/blogs/geo/google-ai-overviews-betekenen-verkeer" />
                <meta property="og:title" content="Google AI Overviews: wat betekenen ze voor jouw verkeer" />
                <meta property="og:description" content="Wat AI Overviews doen met organische CTR en hoe je content schrijft die wél kliks oplevert." />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://www.empowers.nl/blogs/geo/google-ai-overviews-betekenen-verkeer" />
                <meta property="og:image" content="https://www.empowers.nl/images/blogs/google-ai-overviews-betekenen-verkeer.jpg" />
                <meta property="article:published_time" content="2026-05-04" />
                <meta property="article:author" content="Empowers" />
                <meta property="article:section" content="GEO" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Google AI Overviews: wat betekenen ze voor jouw verkeer" />
                <meta name="twitter:description" content="Wat AI Overviews doen met organische CTR en hoe je content schrijft die wél kliks oplevert." />

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Article",
                        "headline": "Google AI Overviews: wat betekenen ze voor jouw verkeer (2026)",
                        "description": "Google AI Overviews verlagen organische CTR's flink. Lees wat het betekent voor jouw verkeer en hoe je content schrijft die juist meer kliks oplevert.",
                        "image": "https://www.empowers.nl/images/blogs/google-ai-overviews-betekenen-verkeer.jpg",
                        "datePublished": "2026-05-04T11:00:00+02:00",
                        "author": { "@type": "Organization", "name": "Empowers" },
                        "publisher": {
                            "@type": "Organization",
                            "name": "Empowers",
                            "url": "https://www.empowers.nl",
                            "logo": { "@type": "ImageObject", "url": "https://www.empowers.nl/empowers-logo-color.svg" }
                        },
                        "mainEntity": {
                            "@type": "FAQPage",
                            "mainEntity": [
                                {
                                    "@type": "Question",
                                    "name": "Wat zijn Google AI Overviews?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Google AI Overviews zijn AI-gegenereerde antwoorden die bovenaan de zoekresultaten verschijnen. Google haalt informatie uit meerdere bronnen en stelt een direct antwoord samen, met links naar de bronnen die werden gebruikt. Voor zoekopdrachten met informatieve intentie verschijnt de Overview vrijwel altijd, waardoor de klassieke 10 blauwe links naar beneden zakken."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Hoeveel verkeer verlies je door AI Overviews?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Onderzoek van begin 2026 toont dat informatieve zoekopdrachten met AI Overview gemiddeld 30 tot 60 procent CTR-verlies op organische plek 1 zien. Voor commerciële zoekopdrachten is de impact kleiner: 10 tot 20 procent. Wie alleen op informatieve content rankt, ziet het meeste verlies."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Hoe kom je in een Google AI Overview?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Pagina's die in de top 5 organisch staan en gestructureerde antwoorden bevatten worden het vaakst geciteerd. Schrijf het hoofdantwoord in de eerste 60 woorden, gebruik FAQ-secties met schema markup en voeg concrete cijfers toe. Pagina's met FAQPage-schema worden 3 tot 4 keer vaker als bron in een AI Overview gebruikt dan pagina's zonder."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Werkt SEO nog wel met AI Overviews?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Ja, sterker dan ooit. AI Overviews trekken hun bronnen vrijwel altijd uit de top 10 organische resultaten. Wie hoog rankt, wordt geciteerd; wie geciteerd wordt, krijgt zichtbaarheid bovenaan de pagina én klikken naar zijn site. SEO is dus geen tegenstander van AI Overviews, maar de motor erachter."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Welke content lijdt het meest onder AI Overviews?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Eenvoudige how-to's, definities, vergelijkingen en feitenvragen verliezen het meeste verkeer. AI beantwoordt deze direct in de Overview. Diepgaande gidsen, casestudies, gespecialiseerde content en commerciële pagina's met productinformatie blijven kliks aantrekken omdat de AI zelf doorverwijst voor het volledige verhaal."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Hoe pas je jouw contentstrategie aan?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Verschuif content van puur informatief naar diepgaand, persoonlijk of commercieel. Schrijf gidsen die antwoord plus context plus voorbeeld bevatten. Voeg ervaringszinnen toe, casestudies en concrete cijfers uit eigen praktijk. AI Overviews citeren feiten, maar mensen klikken voor het verhaal achter de feiten."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Hoeveel pagina's verschijnen als bron in een Overview?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Een typische AI Overview toont 3 tot 8 bron-links rechts naast de tekst. Voor specialistische onderwerpen kan dat oplopen tot 12. Vooraan staan meestal de 2 of 3 sites met het meest geciteerde antwoord. Daarna volgt aanvullende content. Beide posities leveren CTR op."
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
                            { "@type": "ListItem", "position": 3, "name": "GEO", "item": "https://www.empowers.nl/blogs/geo" },
                            { "@type": "ListItem", "position": 4, "name": "AI Overviews en verkeer", "item": "https://www.empowers.nl/blogs/geo/google-ai-overviews-betekenen-verkeer" }
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
                        <Link to="/blogs/geo" className="hover:text-accent transition-colors">GEO</Link>
                        <ChevronRight className="w-3 h-3" />
                        <span className="text-primary truncate">AI Overviews en verkeer</span>
                    </nav>

                    <header className="mb-16">
                        <div className="inline-block px-3 py-1 bg-accent/10 text-accent font-mono text-xs uppercase tracking-widest rounded-full mb-6">
                            GEO
                        </div>
                        <h1 className="font-sans font-bold text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight mb-8">
                            Google AI Overviews: wat betekenen ze voor jouw verkeer (2026)
                        </h1>
                        <div className="flex flex-wrap items-center gap-6 text-sm font-sans text-primary/60 border-y border-primary/10 py-6">
                            <div className="flex items-center gap-2"><User className="w-4 h-4" /><span>Empowers Redactie</span></div>
                            <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>4 mei 2026</span></div>
                            <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>9 minuten leestijd</span></div>
                        </div>
                    </header>

                    <figure className="w-full h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden mb-16 relative bg-primary">
                        <div className="absolute inset-0 bg-[url('/images/blogs/google-ai-overviews-betekenen-verkeer.jpg')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </figure>

                    <div className="prose prose-lg max-w-none prose-headings:text-primary prose-headings:font-bold prose-a:text-accent prose-a:underline hover:prose-a:text-accent/80">
                        <p className="text-xl leading-relaxed text-primary/80 font-medium mb-6">
                            Sinds 2024 staat er bij steeds meer Google-zoekopdrachten een AI-antwoord boven de blauwe links. Dat antwoord beantwoordt de zoekvraag direct, en duwt de organische resultaten naar beneden. Voor informatieve zoekopdrachten zakt de CTR op plek één daardoor flink. Geen ramp, wel een nieuw spel. Wie zelf als bron in zo'n Overview komt, wint juist zichtbaarheid. Hieronder lees je wat AI Overviews precies doen met jouw verkeer en hoe je er zelf in terechtkomt.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat zijn Google AI Overviews precies?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Google AI Overviews zijn AI-gegenereerde antwoorden bovenaan de zoekresultaten. Gemini vat de top-resultaten samen tot één direct antwoord, met daarnaast een handvol bron-links waaruit de informatie komt. De klassieke tien blauwe links staan eronder. Vaak zo ver onder de vouw dat een normale gebruiker ze nauwelijks bereikt.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Niet elke zoekopdracht krijgt een Overview. Google toont ze vooral bij vragende zoekopdrachten (hoe, wat, wanneer), bij vergelijkingen en bij meerlagige vragen. Bij merknamen, lokale zoekopdrachten en directe URL-zoekvragen verschijnt vaak geen Overview. Voor MKB-bedrijven die informatieve content publiceren is de impact daardoor groter dan voor pure lokale dienstverleners.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Wat wij in account-data zien: bij de meeste klanten krijgt inmiddels rond de 40 procent van de belangrijkste organische zoekopdrachten een AI Overview. Dat aandeel klimt elke maand. Voor de basis van GEO lees onze blog over <Link to="/blogs/geo/wat-is-geo-generative-engine-optimization" className="text-accent hover:underline">wat GEO precies inhoudt</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoeveel verkeer verlies je echt?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De impact verschilt sterk per zoekintentie. Bij puur informatieve zoekopdrachten zien we — net als studies van Pew Research en Similarweb laten zien — vaak een halvering of meer van de CTR op organische plek één wanneer een AI Overview verschijnt. Vooral "wat is"- en "hoe werkt"-vragen krijgen de zwaarste klap. Het antwoord staat al in de Overview, dus mensen hoeven niet meer door te klikken.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Bij commerciële zoekopdrachten is het verlies kleiner. Iemand die "beste boekhoudpakket MKB 2026" zoekt wil alsnog op de bronnen zelf vergelijken voordat hij beslist. Bij lokale zoekopdrachten zoals "loodgieter Amsterdam" is de impact verwaarloosbaar, omdat AI Overviews daar amper verschijnen. De zwaarste klap krijgen blogs die uitsluitend uitleg-content publiceren.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Er zit een belangrijke tegenkant aan dit hele verhaal. Pagina's die als bron in een Overview verschijnen, krijgen volgens recente metingen juist meer kliks dan voorheen. CTR per impressie daalt, maar zichtbaarheid stijgt, omdat je nu boven de organische top-tien zit. Voor wie de juiste positie weet te pakken is het netto-effect positief.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe kom je in een AI Overview als bron?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De zwaarste factor is gewoon je organische positie. Google haalt het overgrote deel van de Overview-bronnen uit de top 10 organisch en het merendeel daarvan zelfs uit de top 5. Sta je buiten de top 10, dan kom je vrijwel nooit in een Overview terecht. Klassieke SEO blijft het fundament onder alles.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Daarnaast: gestructureerde antwoorden. Pagina's met heldere H2-vragen, FAQ-secties en een direct antwoord in de eerste alinea worden duidelijk vaker geciteerd dan lopende verhalende tekst. Schrijf de kern dus direct, zonder wollig intro. Voeg een FAQ-sectie toe. Pagina's met FAQPage-schema verschijnen aanmerkelijk vaker als bron in een AI Overview dan pagina's zonder.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Tot slot feitelijkheid en autoriteit. Concrete cijfers en jaartallen verhogen de citatiekans aanzienlijk. AI kiest feitelijke content boven vage beschrijvingen. Combineer dat met sterke E-E-A-T-signalen zoals auteurinformatie, organisatieschema en externe vermeldingen, en je staat een stuk hoger op de Overview-radar. Lees onze blog over <Link to="/blogs/seo/eeat-belangrijk-voor-seo" className="text-accent hover:underline">waarom E-E-A-T zo belangrijk is</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Welke content moet je nu anders schrijven?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Verschuif van platte uitleg naar content met context. Een blog "wat is een conversie" verliest verkeer aan de Overview. Een blog "wat is een conversie en hoe meet ik die in mijn eigen branche, met drie voorbeelden uit de MKB-praktijk" wint, omdat de Overview alleen het eerste deel beantwoordt. Voor de voorbeelden moet de lezer doorklikken.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Voeg unieke data toe en branche-specifieke voorbeelden. AI Overviews citeren feiten. Mensen klikken voor het verhaal achter die feiten. Een webshop die we begeleidden hertimmerde 40 oude blogs volgens dit principe en zag een paar maanden later 22 procent meer kliks vanuit organisch zoekverkeer, en dat ondanks dat een groot deel van hun zoekopdrachten inmiddels een AI Overview kreeg.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Sluit elke pagina af met een goede CTA. Wie doorklikt vanuit een Overview heeft al een eerste antwoord gelezen en zoekt meer. Een sterke CTA vangt precies die intentie op. Voor de schrijftechniek lees onze blog over <Link to="/blogs/geo/optimaliseer-content-google-ai-overviews" className="text-accent hover:underline">content optimaliseren voor AI Overviews</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Welke fouten kosten ondernemers het meeste?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De grootste fout is bestaande content laten staan zoals hij was. Wie geen FAQ-sectie toevoegt en niet herstructureert, verliest CTR zonder dat er iets tegenover staat. Plan een audit van je top-twintig organische pagina's en pak ze stuk voor stuk aan.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een tweede valkuil is meer korte uitleg-blogs blijven publiceren in plaats van diepgaander materiaal. Korte uitleg verliest aan AI Overviews. Diepgaande gidsen met cases en context blijven kliks trekken. Wie volume verkiest boven kwaliteit ziet zijn organische verkeer slinken.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            En de derde: alleen op CTR meten. AI Overviews verlagen CTR per impressie, maar verhogen tegelijk je zichtbaarheid en je autoriteitssignalen. Kijk dus ook naar impressies, brand-zoekopdrachten en directe sitebezoeken. Vaak blijkt het totale verkeer minder hard te dalen dan je puur op CTR zou denken. Voor de praktijk lees onze blog over <Link to="/blogs/seo/verbeteren-google-ai-overviews-ctr" className="text-accent hover:underline">CTR verbeteren ondanks AI Overviews</Link>.
                        </p>
                    </div>

                    {/* FAQ Section */}
                    <section className="mt-16 pt-12 border-t border-primary/10">
                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Veelgestelde vragen</h2>
                        <div className="space-y-6 not-prose">
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat zijn Google AI Overviews?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Google AI Overviews zijn AI-gegenereerde antwoorden die bovenaan de zoekresultaten verschijnen. Google haalt informatie uit meerdere bronnen en stelt een direct antwoord samen, met links naar de bronnen die werden gebruikt. Voor zoekopdrachten met informatieve intentie verschijnt de Overview vrijwel altijd, waardoor de klassieke 10 blauwe links naar beneden zakken.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoeveel verkeer verlies je door AI Overviews?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Studies van onder andere Pew Research en Similarweb laten zien dat informatieve zoekopdrachten met AI Overview vaak een halvering of meer van de CTR op organische plek 1 ervaren. Voor commerciële zoekopdrachten is de impact kleiner. Wie alleen op informatieve content rankt, ziet het meeste verlies.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoe kom je in een Google AI Overview?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Pagina's die in de top 5 organisch staan en gestructureerde antwoorden bevatten worden het vaakst geciteerd. Schrijf het hoofdantwoord in de eerste 60 woorden, gebruik FAQ-secties met schema markup en voeg concrete cijfers toe. Pagina's met FAQPage-schema verschijnen aanmerkelijk vaker als bron in een AI Overview dan pagina's zonder.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Werkt SEO nog wel met AI Overviews?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Ja, sterker dan ooit. AI Overviews trekken hun bronnen vrijwel altijd uit de top 10 organische resultaten. Wie hoog rankt, wordt geciteerd; wie geciteerd wordt, krijgt zichtbaarheid bovenaan de pagina én klikken naar zijn site. SEO is dus geen tegenstander van AI Overviews, maar de motor erachter.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Welke content lijdt het meest onder AI Overviews?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Eenvoudige how-to's, definities, vergelijkingen en feitenvragen verliezen het meeste verkeer. AI beantwoordt deze direct in de Overview. Diepgaande gidsen, casestudies, gespecialiseerde content en commerciële pagina's met productinformatie blijven kliks aantrekken omdat de AI zelf doorverwijst voor het volledige verhaal.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoe pas je jouw contentstrategie aan?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Verschuif content van puur informatief naar diepgaand, persoonlijk of commercieel. Schrijf gidsen die antwoord plus context plus voorbeeld bevatten. Voeg ervaringszinnen toe, casestudies en concrete cijfers uit eigen praktijk. AI Overviews citeren feiten, maar mensen klikken voor het verhaal achter de feiten.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoeveel pagina's verschijnen als bron in een Overview?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Een typische AI Overview toont 3 tot 8 bron-links rechts naast de tekst. Voor specialistische onderwerpen kan dat oplopen tot 12. Vooraan staan meestal de 2 of 3 sites met het meest geciteerde antwoord. Daarna volgt aanvullende content. Beide posities leveren CTR op.</p>
                            </div>
                        </div>
                    </section>

                    <section className="mt-16 pt-12 border-t border-primary/10">
                        <h3 className="text-xl font-bold text-primary mb-6">Lees ook</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <Link to="/blogs/geo/optimaliseer-content-google-ai-overviews" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Content voor AI Overviews</h3>
                                <p className="text-primary/60 text-sm">Hoe je content schrijft die door Google AI Overviews wordt geciteerd én kliks oplevert.</p>
                            </Link>
                            <Link to="/blogs/seo/verbeteren-google-ai-overviews-ctr" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">CTR verbeteren met AI Overviews</h3>
                                <p className="text-primary/60 text-sm">Concrete tactieken om jouw CTR te beschermen en juist te laten stijgen ondanks AI Overviews.</p>
                            </Link>
                            <Link to="/blogs/geo/wat-is-geo-generative-engine-optimization" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Wat is GEO?</h3>
                                <p className="text-primary/60 text-sm">De basis van Generative Engine Optimization en hoe het naast SEO bestaat.</p>
                            </Link>
                        </div>
                    </section>
                </div>
            </article>

            <section className="w-full pb-32 px-6">
                <div className="max-w-4xl mx-auto bg-primary rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
                    <h2 className="relative z-10 font-drama italic text-background text-3xl sm:text-4xl md:text-5xl mb-6">Verlies je verkeer aan AI Overviews?</h2>
                    <p className="relative z-10 font-sans text-background/70 text-lg mb-10 max-w-xl mx-auto">We kijken gratis welke pagina's CTR hebben verloren én wat er nodig is om als bron in de Overview te verschijnen.</p>
                    <Link to="/contact" className="relative z-10 btn-magnetic inline-flex items-center justify-center bg-accent text-background font-sans font-bold text-lg px-10 py-4 rounded-[2rem] hover:bg-accent/90 transition-colors">Neem contact op</Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
