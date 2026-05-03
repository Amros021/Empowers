import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ChevronRight, User } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function BlogPostOnPageVsOffPageSeo() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen selection:bg-accent/30 selection:text-dark flex flex-col bg-background">
            <Helmet>
                <title>On-page vs off-page SEO: wat heeft prioriteit voor jouw site? (2026) | Empowers</title>
                <meta name="description" content="On-page of off-page SEO: waar moet je beginnen en wat levert sneller resultaat op? Lees welke aanpak past bij jouw fase en hoe je beide combineert." />
                <link rel="canonical" href="https://www.empowers.nl/blogs/seo/on-page-vs-off-page" />
                <meta property="og:title" content="On-page vs off-page SEO: wat heeft prioriteit?" />
                <meta property="og:description" content="On-page of off-page SEO: wat levert sneller resultaat op en hoe combineer je beide voor maximaal effect?" />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://www.empowers.nl/blogs/seo/on-page-vs-off-page" />
                <meta property="og:image" content="https://www.empowers.nl/images/blogs/on-page-vs-off-page.jpg" />
                <meta property="article:published_time" content="2026-05-03" />
                <meta property="article:author" content="Empowers" />
                <meta property="article:section" content="SEO" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="On-page vs off-page SEO: wat heeft prioriteit?" />
                <meta name="twitter:description" content="On-page of off-page SEO: wat levert sneller resultaat op en hoe combineer je beide voor maximaal effect?" />

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Article",
                        "headline": "On-page vs off-page SEO: wat heeft prioriteit voor jouw site? (2026)",
                        "description": "On-page of off-page SEO: waar moet je beginnen en wat levert sneller resultaat op? Lees welke aanpak past bij jouw fase en hoe je beide combineert.",
                        "image": "https://www.empowers.nl/images/blogs/on-page-vs-off-page.jpg",
                        "datePublished": "2026-05-03T14:00:00+02:00",
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
                                    "name": "Wat is het verschil tussen on-page en off-page SEO?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "On-page SEO is alles wat je op jouw eigen pagina aanpast: titels, content, koppen, interne links en techniek. Off-page SEO is alles wat buiten jouw site gebeurt en jouw autoriteit beïnvloedt: backlinks, vermeldingen, recensies en sociale signalen. On-page geeft Google de juiste boodschap, off-page geeft Google de bevestiging dat anderen jou ook serieus nemen."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Wat heeft meer prioriteit: on-page of off-page SEO?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "On-page heeft bijna altijd eerste prioriteit. Een sterke off-page strategie verspilt budget als jouw pagina's traag laden, dunne content hebben of de verkeerde zoekwoorden missen. Pas als de basis op orde is, levert investeren in autoriteit echt rendement op."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Hoeveel tijd kost on-page SEO?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Een complete on-page audit en optimalisatie van een MKB-website van 30 pagina's kost gemiddeld 20 tot 40 uur. Daarna heb je per kwartaal nog 5 tot 10 uur nodig voor onderhoud, content updates en nieuwe pagina's. Off-page is een doorlopend proces zonder vast eindpunt."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Kan ik on-page SEO zelf doen?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Ja, de basis van on-page SEO leer je in een paar weken. Titels, meta descriptions, koppen, alt-teksten en interne linking zijn goed te doen zonder specialist. Voor technische SEO en grote content-projecten loont een specialist sneller, omdat fouten in de basis je rankings maandenlang kunnen blokkeren."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Hoe lang duurt het voordat off-page SEO werkt?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Reken op 3 tot 6 maanden voordat nieuwe backlinks effect hebben in de zoekresultaten. Google moet de links indexeren, het signaal wegen en jouw autoriteitsscore bijwerken. Snelle stijgingen door 'link kopen' werken in 2026 averechts en leveren penalty's op."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Wat is technische SEO en hoort dat bij on-page?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Technische SEO is een onderdeel van on-page SEO. Het gaat over alles wat Google nodig heeft om jouw site te crawlen en indexeren: laadsnelheid, mobile-vriendelijkheid, schema markup, sitemap, interne linkstructuur en HTTPS. Zonder solide techniek werken content-optimalisaties maar half."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Welke fout maken ondernemers het vaakst?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Ze kopen backlinks of besteden alles uit aan link-bureaus terwijl hun site technisch faalt of hun content te dun is. Resultaat: links naar pagina's die toch niet ranken. De volgorde is altijd content op orde, techniek op orde, dan pas autoriteit opbouwen."
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
                            { "@type": "ListItem", "position": 3, "name": "SEO", "item": "https://www.empowers.nl/blogs/seo" },
                            { "@type": "ListItem", "position": 4, "name": "On-page vs off-page SEO", "item": "https://www.empowers.nl/blogs/seo/on-page-vs-off-page" }
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
                        <Link to="/blogs/seo" className="hover:text-accent transition-colors">SEO</Link>
                        <ChevronRight className="w-3 h-3" />
                        <span className="text-primary truncate">On-page vs off-page SEO</span>
                    </nav>

                    <header className="mb-16">
                        <div className="inline-block px-3 py-1 bg-accent/10 text-accent font-mono text-xs uppercase tracking-widest rounded-full mb-6">
                            SEO
                        </div>
                        <h1 className="font-sans font-bold text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight mb-8">
                            On-page vs off-page SEO: wat heeft prioriteit voor jouw site? (2026)
                        </h1>
                        <div className="flex flex-wrap items-center gap-6 text-sm font-sans text-primary/60 border-y border-primary/10 py-6">
                            <div className="flex items-center gap-2"><User className="w-4 h-4" /><span>Empowers Redactie</span></div>
                            <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>3 mei 2026</span></div>
                            <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>8 minuten leestijd</span></div>
                        </div>
                    </header>

                    <figure className="w-full h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden mb-16 relative bg-primary">
                        <div className="absolute inset-0 bg-[url('/images/blogs/on-page-vs-off-page.jpg')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </figure>

                    <div className="prose prose-lg max-w-none prose-headings:text-primary prose-headings:font-bold prose-a:text-accent prose-a:underline hover:prose-a:text-accent/80">
                        <p className="text-xl leading-relaxed text-primary/80 font-medium mb-6">
                            On-page of off-page SEO eerst? Dat is een vraag waar veel ondernemers op vastlopen. Iedereen wil hoger in Google, maar weinigen weten waar ze het budget en de tijd het beste insteken. In deze blog lees je het echte verschil tussen on-page en off-page SEO, welke aanpak past bij jouw fase en hoe je beide combineert zonder budget te verspillen.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat is on-page SEO?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            On-page SEO is alles wat je op jouw eigen pagina aanpast om hoger te ranken. Denk aan paginatitels, meta descriptions, koppen, interne links, alt-teksten bij afbeeldingen en de kwaliteit van de content zelf. Ook de techniek achter de pagina valt onder on-page: laadsnelheid, mobile-vriendelijkheid, schema markup en de URL-structuur.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Het idee is simpel. Google moet binnen seconden snappen waar jouw pagina over gaat, voor wie hij bedoeld is en waarom hij het antwoord verdient. On-page SEO is het stuur dat je in eigen hand hebt. Je hebt geen externe partijen nodig, geen overeenkomsten met andere sites en geen budget voor outreach. Je hebt jezelf, jouw content en een paar basisprincipes.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De basis bestaat uit zes pijlers. Een unieke paginatitel met het hoofdzoekwoord vooraan. Een uitnodigende meta description die klikken oplevert. Eén duidelijke H1 per pagina. Koppen (H2, H3) die de content opbreken. Interne links naar gerelateerde pagina's. En tot slot content die de zoekvraag beter beantwoordt dan de tien resultaten boven jou. Voor de complete checklist lees onze blog over <Link to="/blogs/seo/technische-seo-checklist-2025-website" className="text-accent hover:underline">technische SEO checklist</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat is off-page SEO?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Off-page SEO is alles wat buiten jouw site gebeurt en toch invloed heeft op jouw rankings. Backlinks vanuit andere websites zijn de bekendste vorm. Daarnaast tellen vermeldingen van jouw merknaam, recensies op platforms als Google en Trustpilot, gastblogs, podcastinterviews en zelfs sociale signalen mee in hoe Google jouw autoriteit inschat.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Het principe achter off-page is vertrouwen. Google kan zelf moeilijk inschatten hoe goed jouw bedrijf is. Een autoriteitssite die naar jouw pagina linkt, vormt een soort aanbeveling. Hoe meer relevante en betrouwbare bronnen naar jou verwijzen, hoe sterker het signaal dat jouw site het waard is om hoog te ranken.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Off-page SEO heeft twee gezichten. Goede off-page draait om relaties bouwen, waardevolle content delen waar anderen vrijwillig naar willen linken en consistent aanwezig zijn op platforms waar jouw doelgroep komt. Slechte off-page draait om links kopen, ruilen via twijfelachtige netwerken of automatische linkbuilding-tools. Dat tweede leverde 5 jaar geleden nog kortstondig effect, maar in 2026 leiden zulke methodes vrijwel altijd tot een penalty. Voor de basis lees onze blog over <Link to="/blogs/seo/backlinks-opbouwen" className="text-accent hover:underline">backlinks opbouwen</Link> en <Link to="/blogs/seo/off-page-seo" className="text-accent hover:underline">off-page SEO</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat heeft prioriteit voor jouw bedrijf?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            On-page heeft bijna altijd eerste prioriteit. De reden is logisch. Als jouw pagina's traag laden, dunne content hebben of niet duidelijk maken waar ze over gaan, dan helpt geen enkele backlink je om te ranken. Google stuurt bezoekers naar pagina's die de zoekvraag echt beantwoorden, niet naar pagina's die alleen veel links hebben.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Pas als de basis op orde is, levert investeren in autoriteit rendement op. Stel je voor: je hebt een productpagina die binnen 1 seconde laadt, een pakkende titel heeft, een complete productbeschrijving, klantbeoordelingen en interne links naar gerelateerde producten. Op dat fundament werkt elke nieuwe backlink als een extra duwtje omhoog. Zonder dat fundament glijdt elke link weg.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De praktische volgorde voor de meeste MKB-bedrijven ziet er zo uit. Maand 1 en 2: technische audit, content audit en de belangrijkste pagina's optimaliseren. Maand 3: contentkalender opzetten en de eerste nieuwe pagina's publiceren. Maand 4 en verder: actief werken aan autoriteit via gastblogs, partnerships en PR. Lees onze blog over <Link to="/blogs/seo/lang-duurt-seo-realistische-verwachtingen" className="text-accent hover:underline">hoe lang SEO duurt</Link> voor realistische verwachtingen.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wanneer wint off-page van on-page?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Er is één situatie waarin off-page voorop gaat. Een nieuwe website zonder enkele backlink kampt met een autoriteitsprobleem dat je on-page niet kunt oplossen. Google ziet honderden nieuwe sites per dag en heeft geen reden om jou serieus te nemen. In die fase is wat zichtbare PR, een vermelding op een grote nieuwsbron of een gastblog op een autoriteitssite vaak meer waard dan nog een meta description tweaken.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Voor concurrerende zoekwoorden, vaak in branches als verzekeringen, leningen of advocaten, kun je on-page perfect maken zonder ooit op pagina 1 te komen. De top 10 in zulke branches heeft vaak honderden tot duizenden hoogwaardige backlinks. Daar voorkomt off-page dat je nooit boven pagina 5 uitkomt. In die situaties is een hybride aanpak nodig vanaf dag 1.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een derde scenario is reputatie-management. Als zoekresultaten op jouw merknaam negatieve content tonen, helpt geen on-page op jouw eigen site. Je moet positieve content op andere autoriteitssites laten verschijnen die de negatieve resultaten naar pagina 2 duwen. Dat is puur off-page werk.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe combineer je beide slim?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De grootste winst zit in de combinatie. Een on-page geoptimaliseerde pagina die ook een paar relevante backlinks krijgt, presteert vaak 3 tot 5 keer beter dan dezelfde pagina zonder externe signalen. De truc zit in het kiezen van pagina's die het verdienen.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Selecteer je 5 belangrijkste commerciële pagina's. Dat zijn de pagina's die direct omzet opleveren als ze ranken. Optimaliseer ze on-page tot in de details: titel, content, snelheid, schema markup, conversiepad. Pas daarna richt je linkbuilding-energie op deze pagina's. Een gerichte aanpak op 5 pagina's levert meer op dan 50 pagina's met half-werk.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Combineer dit met een contenthub-strategie. Eén centrale autoriteitspagina (bijvoorbeeld een complete gids) krijgt alle aandacht qua linkbuilding. Daaromheen bouw je 10 tot 20 ondersteunende blogs die intern naar de hub linken. Die structuur duwt de autoriteit van de externe links door naar al jouw belangrijke pagina's. Lees ook onze blog over <Link to="/blogs/seo/semantische-seo-begrijpt-google-content" className="text-accent hover:underline">semantische SEO</Link> voor hoe je content slim aan elkaar koppelt.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Welke fouten kosten ondernemers het meeste?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Fout 1: backlinks kopen voordat de site klaar is. Maandelijks 500 euro besteden aan link-pakketten op een site die technisch faalt, levert in 2026 geen ranking op. Soms zelfs een penalty.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Fout 2: zoekwoorden stoppen in titels en koppen zonder dat de content de zoekvraag echt beantwoordt. Google herkent zulke pagina's binnen weken en degradeert ze.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Fout 3: alle energie op de homepage, niets op categoriepagina's of blogs. De homepage is zelden de pagina die ranked op specifieke zoekwoorden. Onderliggende pagina's vangen het meeste relevante verkeer.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Fout 4: één keer optimaliseren en denken dat je klaar bent. SEO is doorlopend. Concurrenten passen hun content aan, Google werkt het algoritme bij en jouw branche verandert. Wie elk kwartaal een audit doet, blijft voor.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Twijfel je of jouw aanpak klopt? Begin met een eerlijke audit. Onze blog over <Link to="/blogs/seo/technische-seo-audit" className="text-accent hover:underline">technische SEO audit</Link> laat zien wat je controleert.
                        </p>
                    </div>

                    {/* FAQ Section */}
                    <section className="mt-16 pt-12 border-t border-primary/10">
                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Veelgestelde vragen</h2>
                        <div className="space-y-6 not-prose">
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat is het verschil tussen on-page en off-page SEO?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">On-page SEO is alles wat je op jouw eigen pagina aanpast: titels, content, koppen, interne links en techniek. Off-page SEO is alles wat buiten jouw site gebeurt en jouw autoriteit beïnvloedt: backlinks, vermeldingen, recensies en sociale signalen. On-page geeft Google de juiste boodschap, off-page geeft Google de bevestiging dat anderen jou ook serieus nemen.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat heeft meer prioriteit: on-page of off-page SEO?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">On-page heeft bijna altijd eerste prioriteit. Een sterke off-page strategie verspilt budget als jouw pagina's traag laden, dunne content hebben of de verkeerde zoekwoorden missen. Pas als de basis op orde is, levert investeren in autoriteit echt rendement op.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoeveel tijd kost on-page SEO?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Een complete on-page audit en optimalisatie van een MKB-website van 30 pagina's kost gemiddeld 20 tot 40 uur. Daarna heb je per kwartaal nog 5 tot 10 uur nodig voor onderhoud en nieuwe pagina's. Off-page is een doorlopend proces zonder vast eindpunt.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Kan ik on-page SEO zelf doen?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Ja, de basis leer je in een paar weken. Titels, meta descriptions, koppen, alt-teksten en interne linking zijn goed te doen zonder specialist. Voor technische SEO en grote content-projecten loont een specialist sneller, omdat fouten in de basis je rankings maandenlang kunnen blokkeren.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoe lang duurt het voordat off-page SEO werkt?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Reken op 3 tot 6 maanden voordat nieuwe backlinks effect hebben. Google moet de links indexeren, het signaal wegen en jouw autoriteitsscore bijwerken. Snelle stijgingen door 'link kopen' werken in 2026 averechts en leveren penalty's op.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat is technische SEO en hoort dat bij on-page?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Technische SEO is een onderdeel van on-page SEO. Het gaat over alles wat Google nodig heeft om jouw site te crawlen en indexeren: laadsnelheid, mobile-vriendelijkheid, schema markup, sitemap, interne linkstructuur en HTTPS. Zonder solide techniek werken content-optimalisaties maar half.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Welke fout maken ondernemers het vaakst?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Backlinks kopen of alles uitbesteden aan link-bureaus terwijl hun site technisch faalt of hun content te dun is. Resultaat: links naar pagina's die toch niet ranken. De volgorde is altijd content op orde, techniek op orde, dan pas autoriteit opbouwen.</p>
                            </div>
                        </div>
                    </section>

                    <section className="mt-16 pt-12 border-t border-primary/10">
                        <h3 className="text-xl font-bold text-primary mb-6">Lees ook</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <Link to="/blogs/seo/technische-seo-checklist-2025-website" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Technische SEO checklist</h3>
                                <p className="text-primary/60 text-sm">De technische basis van on-page SEO: alles wat Google nodig heeft om jouw site goed te crawlen.</p>
                            </Link>
                            <Link to="/blogs/seo/backlinks-opbouwen" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Backlinks opbouwen</h3>
                                <p className="text-primary/60 text-sm">De gezonde manier om autoriteit op te bouwen zonder penalty's te riskeren in 2026.</p>
                            </Link>
                            <Link to="/blogs/seo/lang-duurt-seo-realistische-verwachtingen" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Hoe lang duurt SEO?</h3>
                                <p className="text-primary/60 text-sm">Realistische verwachtingen over de tijd die SEO nodig heeft om resultaat te leveren.</p>
                            </Link>
                        </div>
                    </section>
                </div>
            </article>

            <section className="w-full pb-32 px-6">
                <div className="max-w-4xl mx-auto bg-primary rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
                    <h2 className="relative z-10 font-drama italic text-background text-3xl sm:text-4xl md:text-5xl mb-6">Weten waar jouw SEO budget het meeste oplevert?</h2>
                    <p className="relative z-10 font-sans text-background/70 text-lg mb-10 max-w-xl mx-auto">We doen een gratis SEO-scan op jouw site. Geen verkoopgesprek, wel duidelijkheid over wat eerst on-page moet en waar autoriteit opbouwen rendement levert.</p>
                    <Link to="/contact" className="relative z-10 btn-magnetic inline-flex items-center justify-center bg-accent text-background font-sans font-bold text-lg px-10 py-4 rounded-[2rem] hover:bg-accent/90 transition-colors">Neem contact op</Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
