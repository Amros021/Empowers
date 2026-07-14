import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ChevronRight, User } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function BlogPostSeaVsSeoStrategieBudgetDoel() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen selection:bg-accent/30 selection:text-dark flex flex-col bg-background">
            <Helmet>
                <title>SEA vs SEO: welke strategie past bij jouw budget en doel? | Empowers</title>
                <meta name="description" content="SEA of SEO? Lees hoe ze verschillen in kosten, snelheid en ROI, welke strategie past bij jouw budget en wanneer de combinatie het meest oplevert." />
                <link rel="canonical" href="https://www.empowers.nl/blogs/algemeen/sea-vs-seo-strategie-budget-doel" />
                <meta property="og:title" content="SEA vs SEO: welke strategie past bij jouw budget en doel?" />
                <meta property="og:description" content="Een eerlijke vergelijking van SEA en SEO op kosten, snelheid en rendement, met een keuzehulp per situatie." />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://www.empowers.nl/blogs/algemeen/sea-vs-seo-strategie-budget-doel" />
                <meta property="og:image" content="https://www.empowers.nl/images/blogs/sea-vs-seo-strategie-budget-doel.jpg" />
                <meta property="article:published_time" content="2026-05-03T12:00:00+02:00" />
                <meta property="article:author" content="Empowers" />
                <meta property="article:section" content="Algemeen" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="SEA vs SEO: welke strategie past bij jouw budget en doel?" />
                <meta name="twitter:description" content="Een eerlijke vergelijking van SEA en SEO op kosten, snelheid en rendement." />

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Article",
                        "headline": "SEA vs SEO: welke strategie past bij jouw budget en doel?",
                        "description": "SEA of SEO? Lees hoe ze verschillen in kosten, snelheid en ROI, welke strategie past bij jouw budget en wanneer de combinatie het meest oplevert.",
                        "image": "https://www.empowers.nl/images/blogs/sea-vs-seo-strategie-budget-doel.jpg",
                        "datePublished": "2026-05-03T12:00:00+02:00",
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
                                    "name": "Wat is het verschil tussen SEA en SEO?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "SEA staat voor Search Engine Advertising en betekent dat je betaalt voor advertenties in zoekresultaten, vrijwel altijd via Google Ads. SEO staat voor Search Engine Optimization en betekent dat je organisch hoger probeert te ranken zonder per klik te betalen. SEA kost direct geld per klik, SEO kost tijd en content."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Wat is goedkoper, SEA of SEO?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Op de korte termijn is SEA goedkoper omdat je geen voorinvestering hebt en direct verkeer krijgt. Op de lange termijn is SEO goedkoper, want elke organische klik is gratis. Reken voor een serieuze SEO-strategie op 3 tot 12 maanden voorinvestering voordat het rendement zichtbaar wordt."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Hoe snel werkt SEA versus SEO?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "SEA levert binnen 24 uur na het live zetten van een campagne het eerste verkeer en de eerste conversies. SEO heeft 3 tot 6 maanden nodig voor de eerste merkbare ranking-stijgingen en 9 tot 18 maanden voor structurele groei. Wie snel resultaat wil, begint met SEA. Wie duurzaam wil bouwen, investeert in SEO."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Welke strategie past bij een klein budget?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Bij een budget onder 1.500 euro per maand kies je 1 strategie. Heb je een nieuw bedrijf en wil je snel klanten, kies SEA op 5 tot 10 zoekwoorden met hoge intentie. Heb je 6 tot 12 maanden geduld en een sterk product, kies SEO en focus op 3 tot 5 long-tail content-onderwerpen per maand."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Wanneer combineer je SEA en SEO?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Vanaf een totaalbudget van 2.500 euro per maand werkt de combinatie het beste. SEA dekt zoekwoorden waar SEO maanden over zou doen, SEO bouwt langzaam aan organisch verkeer dat jouw SEA-kosten verlaagt. Branded zoekwoorden dek je via beide kanalen om concurrenten te blokkeren."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Welke strategie heeft betere ROI op de lange termijn?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "SEO heeft op 24 maanden gezien doorgaans een betere ROI omdat de marginale kosten dalen naarmate je meer rankings opbouwt. Een blog die jaar na jaar verkeer levert, hoeft niet opnieuw betaald te worden. SEA blijft elke klik kosten. Wel is SEA voorspelbaarder per maand, terwijl SEO meer schommelt door algoritme-updates."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Kun je met alleen SEO een bedrijf opbouwen?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Theoretisch ja, in de praktijk zelden binnen het eerste jaar. SEO levert pas na 6 tot 12 maanden voldoende verkeer voor een bedrijfskern. Wie alleen op SEO inzet, riskeert maanden zonder klanten. Combineer in de opbouwfase met SEA en bouw daarna SEA langzaam af zodra SEO levert."
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
                            { "@type": "ListItem", "position": 3, "name": "Algemeen", "item": "https://www.empowers.nl/blogs/algemeen" },
                            { "@type": "ListItem", "position": 4, "name": "SEA vs SEO", "item": "https://www.empowers.nl/blogs/algemeen/sea-vs-seo-strategie-budget-doel" }
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
                        <Link to="/blogs/algemeen" className="hover:text-accent transition-colors">Algemeen</Link>
                        <ChevronRight className="w-3 h-3" />
                        <span className="text-primary truncate">SEA vs SEO</span>
                    </nav>

                    <header className="mb-16">
                        <div className="inline-block px-3 py-1 bg-accent/10 text-accent font-mono text-xs uppercase tracking-widest rounded-full mb-6">
                            Algemeen
                        </div>
                        <h1 className="font-sans font-bold text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight mb-8">
                            SEA vs SEO: welke strategie past bij jouw budget en doel?
                        </h1>
                        <div className="flex flex-wrap items-center gap-6 text-sm font-sans text-primary/60 border-y border-primary/10 py-6">
                            <div className="flex items-center gap-2"><User className="w-4 h-4" /><span>Empowers Redactie</span></div>
                            <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>3 mei 2026</span></div>
                            <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>9 minuten leestijd</span></div>
                        </div>
                    </header>

                    <figure className="w-full h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden mb-16 relative bg-primary">
                        <div className="absolute inset-0 bg-[url('/images/blogs/sea-vs-seo-strategie-budget-doel.jpg')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </figure>

                    <div className="prose prose-lg max-w-none prose-headings:text-primary prose-headings:font-bold prose-a:text-accent prose-a:underline hover:prose-a:text-accent/80">
                        <p className="text-xl leading-relaxed text-primary/80 font-medium mb-6">
                            SEA of SEO? De keuze hangt af van jouw budget, jouw geduld en jouw doel. SEA levert vandaag verkeer, SEO levert over een jaar verkeer. SEA blijft elke klik kosten, SEO wordt na de investering steeds goedkoper. In deze gids vergelijken we beide strategieën op kosten, snelheid en rendement, en lees je welke combinatie past bij jouw situatie.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat is het verschil tussen SEA en SEO?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            SEA staat voor Search Engine Advertising. Je betaalt om bovenaan de zoekresultaten van Google te verschijnen, doorgaans via Google Ads. Je betaalt per klik, dus zonder budget verschijn je niet. SEO staat voor Search Engine Optimization en gaat over organisch hoger ranken in zoekresultaten zonder per klik te betalen. Je investeert in content, techniek en autoriteit, niet in advertentiekosten.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Visueel verschil: SEA-resultaten staan vrijwel altijd bovenaan met "Gesponsord" ervoor. Daaronder, en steeds vaker pas na de Google AI Overview, komen de organische SEO-resultaten. Beide kanalen halen verkeer uit dezelfde zoekopdracht, maar werken via een andere route.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Voor de basis van een Google Ads campagne lees onze blog over <Link to="/blogs/google-ads/google-ads-voor-mkb-campagne-instellen" className="text-accent hover:underline">Google Ads voor MKB</Link>. Voor de basis van SEO en hoe Google jouw site beoordeelt, helpt onze blog over <Link to="/blogs/seo/eeat-belangrijk-voor-seo" className="text-accent hover:underline">E-E-A-T</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Snelheid: wanneer zie je resultaat?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Op snelheid wint SEA met afstand. Vandaag een campagne live zetten betekent vandaag of morgen het eerste verkeer. De eerste conversies volgen vrijwel altijd binnen 1 tot 2 weken. Schaalt jouw aanbod, dan kun je binnen 30 dagen al een eerste indicatie geven van wat een klant kost.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            SEO werkt anders. Voor de eerste merkbare ranking-stijgingen reken je op 3 tot 6 maanden, voor structureel verkeer op 9 tot 18 maanden. Dat is geen pessimisme, dat is realisme. Algemene zoekwoorden kunnen langer duren, niche long-tail-onderwerpen pakken vaak sneller op. Lees onze blog over <Link to="/blogs/google-ads/long-tail-keywords-google-ads" className="text-accent hover:underline">long-tail keywords</Link> voor het hoe en waarom.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Snelheid alleen vertelt niet het hele verhaal. SEA-verkeer stopt zodra het budget op is. SEO-verkeer blijft ook bij budgetstops doorgroeien zolang het content actueel blijft. Wie alleen op snelheid focust, kiest een tijdelijke oplossing.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Kosten: wat geef je waaraan uit?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            SEA-kosten zijn voorspelbaar maar continu. Reken in Nederland op CPC's tussen 0,50 en 5 euro voor reguliere zoekwoorden, en op 5 tot 25 euro voor competitieve B2B-termen of vergelijkingszoekopdrachten. Voor een serieuze SEA-campagne reken je op minimaal 1.500 tot 2.500 euro mediabudget per maand, plus 500 tot 1.500 euro beheerkosten als je uitbesteedt.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            SEO-kosten zijn vaak voorinvestering. Reken op 1.500 tot 4.000 euro per maand voor een combinatie van content schrijven, technische SEO en linkbuilding. Het verschil is dat je de kosten over 12 tot 24 maanden afschrijft op groeiend organisch verkeer, terwijl SEA-kosten per maand resetten. Onze blog over <Link to="/blogs/google-ads/sea-uitbesteden-weten-voordat-kiest" className="text-accent hover:underline">SEA uitbesteden</Link> gaat dieper in op wat je betaalt voor advertentiebeheer.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een eerlijke vergelijking maak je met kosten per klik over 24 maanden. Een SEO-investering van 36.000 euro die in maand 12 maandelijks 4.000 organische bezoekers oplevert, kost effectief minder dan 1 euro per klik over 2 jaar. Een vergelijkbaar SEA-volume zou bij 2 euro CPC al 8.000 euro per maand kosten.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">ROI op korte en lange termijn</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Op de korte termijn wint SEA. Binnen 60 tot 90 dagen weet je wat een klant kost en of het rendement haalt. Op de lange termijn wint SEO. Een goed gerankt artikel levert na 18 maanden meer verkeer per maand dan in maand 6, terwijl de productiekosten gelijk bleven. SEA-rendement is voorspelbaar, SEO-rendement is groeiend.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Wel is SEA stabieler op kwartaalbasis. Je weet wat je krijgt voor jouw budget. SEO schommelt door algoritme-updates van Google. Een update kan een goed gerankte pagina van plek 2 naar plek 8 zetten zonder dat je iets verkeerd deed. SEA heeft geen algoritme-risico, alleen biedstrijd-risico.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Welke past bij jouw doel?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Voor doel "snel klanten", kies SEA. Een nieuwe webshop, een nieuwe dienst, een seizoenscampagne: SEA levert binnen 4 weken een leesbaar resultaat. Voor doel "duurzaam autoriteit opbouwen" kies SEO. Een vergelijkings-website, een uitgebreide kennisbank of een merk dat over 5 jaar nog dominant wil zijn, investeert in SEO.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Voor doel "marktaandeel afpakken van concurrenten" kies de combinatie. SEA voor branded zoekopdrachten van concurrenten, SEO voor onderwerpen waar zij niet schrijven. Voor doel "afhankelijkheid van advertentiekosten verkleinen", kies SEO. Wie 100 procent op SEA leeft, is afhankelijk van Google's biedingsysteem. SEO geeft een buffer.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wanneer is de combinatie het slimst?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Vanaf een totaalbudget van 2.500 euro per maand levert de combinatie van SEA en SEO doorgaans meer op dan 100 procent in 1 kanaal. SEA dekt zoekopdrachten waar SEO 12 maanden over doet om te ranken. SEO bouwt aan merkverkeer dat jouw branded SEA-kosten verlaagt en aan organisch volume dat jouw afhankelijkheid van advertenties terugbrengt.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De typische verdeling in jaar 1 is 70 procent SEA en 30 procent SEO, in jaar 2 schuift dat naar 50/50, in jaar 3 vaak naar 30 procent SEA en 70 procent SEO. Dat is geen wet, maar wel een logische curve voor MKB-bedrijven die structureel willen groeien. Lees ook onze blog over <Link to="/blogs/algemeen/google-ads-vs-seo-werkt" className="text-accent hover:underline">Google Ads vs SEO</Link>.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Branded zoekwoorden dek je via beide kanalen. Op organische rankings sta je toch al, met een SEA-advertentie ernaast pak je extra ruimte en blokkeer je concurrenten die op jouw merk bieden. Voor non-branded long-tail-onderwerpen kies je SEO, voor commerciële vergelijkings-zoekopdrachten kies je SEA.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Welk meetkader gebruik je?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Meet beide kanalen op kosten per geconverteerde klant, niet op klikken of vertoningen. Voor SEA is dat eenvoudig: directe kosten per conversie. Voor SEO reken je de productiekosten van content en techniek terug op het verkeer dat het kanaal levert in maand 12 of 18.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Werk met een attributiemodel dat eerlijk verdeelt tussen kanalen. Last-click toewijst alle waarde aan het laatste kanaal, wat SEA in de regel bevoordeelt. Een data-driven model verdeelt eerlijker. Lees onze blog over <Link to="/blogs/tracking/attribution-modellen-uitgelegd-last-click" className="text-accent hover:underline">attributie-modellen</Link> voor het hoe.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wanneer schakel je hulp in?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Vanaf een totaalbudget van 3.000 euro per maand op gecombineerde kanalen verdient een specialist zichzelf doorgaans binnen 2 tot 4 maanden terug. Het keuzeproces tussen SEA en SEO is niet alleen budgettair: jouw markt, jouw concurrentie en jouw groeidoelen tellen mee.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Wil je weten welke verdeling past bij jouw aanbod en welk minimum jaar 1 nodig is? Plan een gratis gesprek via onze <Link to="/contact" className="text-accent hover:underline">contactpagina</Link>. We rekenen vrijblijvend uit wat realistisch is.
                        </p>
                    </div>

                    <section className="mt-16 pt-12 border-t border-primary/10">
                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Veelgestelde vragen</h2>
                        <div className="space-y-6 not-prose">
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat is het verschil tussen SEA en SEO?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">SEA betekent betalen voor advertenties in zoekresultaten via Google Ads. SEO betekent organisch hoger ranken zonder per klik te betalen. SEA kost direct geld per klik, SEO kost tijd en content.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat is goedkoper, SEA of SEO?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Op de korte termijn SEA, geen voorinvestering en direct verkeer. Op de lange termijn SEO, want elke organische klik is gratis. Reken voor SEO op 3 tot 12 maanden voorinvestering voordat het rendement zichtbaar wordt.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoe snel werkt SEA versus SEO?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">SEA levert binnen 24 uur na live zetten het eerste verkeer en de eerste conversies. SEO heeft 3 tot 6 maanden nodig voor de eerste merkbare ranking-stijgingen en 9 tot 18 maanden voor structurele groei.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Welke strategie past bij een klein budget?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Bij een budget onder 1.500 euro per maand kies je 1 strategie. Wil je snel klanten, kies SEA. Heb je 6 tot 12 maanden geduld en een sterk product, kies SEO en focus op long-tail content.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wanneer combineer je SEA en SEO?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Vanaf een totaalbudget van 2.500 euro per maand werkt de combinatie het beste. SEA dekt zoekwoorden waar SEO maanden over zou doen, SEO bouwt langzaam aan organisch verkeer dat jouw SEA-kosten verlaagt.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Welke strategie heeft betere ROI op de lange termijn?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">SEO heeft op 24 maanden gezien doorgaans een betere ROI. Een blog die jaar na jaar verkeer levert hoeft niet opnieuw betaald te worden. SEA blijft elke klik kosten, maar is wel voorspelbaarder per maand.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Kun je met alleen SEO een bedrijf opbouwen?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Theoretisch ja, in de praktijk zelden binnen het eerste jaar. SEO levert pas na 6 tot 12 maanden voldoende verkeer. Combineer in de opbouwfase met SEA en bouw daarna SEA langzaam af zodra SEO levert.</p>
                            </div>
                        </div>
                    </section>

                    <section className="mt-16 pt-12 border-t border-primary/10">
                        <h3 className="text-xl font-bold text-primary mb-6">Lees ook</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <Link to="/blogs/google-ads/sea-uitbesteden-weten-voordat-kiest" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">SEA uitbesteden</h3>
                                <p className="text-primary/60 text-sm">Wat moet je weten voordat je SEA uitbesteedt en welke vragen stel je voor de keuze?</p>
                            </Link>
                            <Link to="/blogs/algemeen/google-ads-vs-seo-werkt" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Google Ads vs SEO</h3>
                                <p className="text-primary/60 text-sm">Een eerlijke vergelijking tussen Google Ads en SEO voor MKB-ondernemers.</p>
                            </Link>
                            <Link to="/blogs/google-ads/sea-bureau-vergelijken-resultaten-rapportages" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">SEA bureau vergelijken</h3>
                                <p className="text-primary/60 text-sm">Welke KPI's tellen, hoe lees je rapportages en wanneer is het tijd om te switchen?</p>
                            </Link>
                        </div>
                    </section>
                </div>
            </article>

            <section className="w-full pb-32 px-6">
                <div className="max-w-4xl mx-auto bg-primary rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
                    <h2 className="relative z-10 font-drama italic text-background text-3xl sm:text-4xl md:text-5xl mb-6">Welke mix past bij jou?</h2>
                    <p className="relative z-10 font-sans text-background/70 text-lg mb-10 max-w-xl mx-auto">We rekenen vrijblijvend uit wat een realistische verdeling tussen SEA en SEO is voor jouw budget en doel. Geen verkooppraatje, wel een werkbaar plan.</p>
                    <Link to="/contact" className="relative z-10 btn-magnetic inline-flex items-center justify-center bg-accent text-background font-sans font-bold text-lg px-10 py-4 rounded-[2rem] hover:bg-accent/90 transition-colors">Neem contact op</Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
