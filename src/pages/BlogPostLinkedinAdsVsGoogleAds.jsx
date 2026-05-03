import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ChevronRight, User } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function BlogPostLinkedinAdsVsGoogleAds() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen selection:bg-accent/30 selection:text-dark flex flex-col bg-background">
            <Helmet>
                <title>LinkedIn Ads vs Google Ads voor B2B: een eerlijke vergelijking | Empowers</title>
                <meta name="description" content="LinkedIn Ads of Google Ads voor B2B? Lees welk kanaal jouw beste leads oplevert, wat het kost en hoe je beide combineert voor maximaal rendement." />
                <link rel="canonical" href="https://www.empowers.nl/blogs/social-ads/linkedin-ads-vs-google-ads" />
                <meta property="og:title" content="LinkedIn Ads vs Google Ads voor B2B: een eerlijke vergelijking" />
                <meta property="og:description" content="Welk kanaal levert betere B2B-leads? Lees hoe LinkedIn en Google zich verhouden in kosten, kwaliteit en schaal." />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://www.empowers.nl/blogs/social-ads/linkedin-ads-vs-google-ads" />
                <meta property="og:image" content="https://www.empowers.nl/images/blogs/linkedin-ads-vs-google-ads.jpg" />
                <meta property="article:published_time" content="2026-05-02" />
                <meta property="article:author" content="Empowers" />
                <meta property="article:section" content="Social Ads" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="LinkedIn Ads vs Google Ads voor B2B: een eerlijke vergelijking" />
                <meta name="twitter:description" content="Welk kanaal werkt het beste voor B2B-leads? Lees de eerlijke vergelijking tussen LinkedIn en Google." />

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Article",
                        "headline": "LinkedIn Ads vs Google Ads voor B2B: een eerlijke vergelijking",
                        "description": "LinkedIn Ads of Google Ads voor B2B? Lees welk kanaal jouw beste leads oplevert, wat het kost en hoe je beide combineert voor maximaal rendement.",
                        "image": "https://www.empowers.nl/images/blogs/linkedin-ads-vs-google-ads.jpg",
                        "datePublished": "2026-05-02T15:00:00+02:00",
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
                                    "name": "Wat is het verschil tussen LinkedIn Ads en Google Ads voor B2B?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Google Ads vangt actieve vraag. Mensen zoeken op een term als 'CRM software MKB' en zien jouw advertentie. LinkedIn Ads creëert vraag bij beslissers die nog niet zoeken. Je kunt op functietitel, bedrijfsgrootte en branche targeten. Google werkt op intentie, LinkedIn op profiel."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Welk kanaal levert betere B2B-leads?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Google Ads levert vaak een hogere conversieratio omdat de bezoeker actief zocht. LinkedIn Ads levert vaker hogere lead-kwaliteit gemeten op functietitel en bedrijfsgrootte. Voor pure leadgeneratie wint Google in volume, voor account-based marketing en enterprise-deals wint LinkedIn in kwaliteit."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Wat kost LinkedIn Ads vergeleken met Google Ads?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "LinkedIn Ads is duurder per klik. CPC's tussen 6 en 15 euro zijn normaal voor B2B-targeting. Google Ads CPC's voor B2B-zoekwoorden liggen tussen 2 en 8 euro. Per gekwalificeerde lead is het verschil kleiner: LinkedIn 80 tot 200 euro, Google 50 tot 150 euro voor vergelijkbare aanbiedingen."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Welk minimumbudget heb je nodig voor B2B?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "LinkedIn vraagt minimaal 25 euro per dag per campagne, dus 750 euro per maand. Voor een eerlijke test reken je 3.000 tot 5.000 euro over 8 tot 12 weken. Google Ads kan al vanaf 1.000 euro per maand testen, mits je goed kiest in zoekwoorden. Een eerlijke vergelijking vraagt op beide platformen minstens 3 maanden draaitijd."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Werkt Google Ads voor B2B met een lange salescyclus?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Ja, mits je niet alleen op leadformulieren stuurt. Voor B2B met salescycli van 3 tot 12 maanden werkt Google Ads het sterkst als je micro-conversies meet zoals demo-aanvragen, gids-downloads en webinar-registraties. Combineer met LinkedIn-remarketing om beslissers later opnieuw te raken na het eerste Google-bezoek."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Welk kanaal kies je als je 1 platform moet kiezen?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Heb je producten of diensten die mensen al actief zoeken, kies Google Ads. Verkoop je iets nieuws of complex waar mensen nog niet op zoeken, kies LinkedIn Ads. Voor enterprise-deals boven de 50.000 euro per jaar wint LinkedIn vaak. Voor MKB-aanbod onder 25.000 euro per jaar wint Google meestal."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Hoe combineer je beide kanalen het slimst?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "De krachtigste opzet is Google voor de actieve vraag en LinkedIn voor account-based remarketing. Mensen die via Google op jouw site komen, retarget je op LinkedIn met content gericht op hun functie en branche. Andersom warm je via LinkedIn beslissers op zodat ze later jouw merknaam in Google intypen, wat jouw branded zoekvolume verhoogt."
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
                            { "@type": "ListItem", "position": 3, "name": "Social Ads", "item": "https://www.empowers.nl/blogs/social-ads" },
                            { "@type": "ListItem", "position": 4, "name": "LinkedIn Ads vs Google Ads voor B2B", "item": "https://www.empowers.nl/blogs/social-ads/linkedin-ads-vs-google-ads" }
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
                        <Link to="/blogs/social-ads" className="hover:text-accent transition-colors">Social Ads</Link>
                        <ChevronRight className="w-3 h-3" />
                        <span className="text-primary truncate">LinkedIn Ads vs Google Ads voor B2B</span>
                    </nav>

                    {/* Header */}
                    <header className="mb-16">
                        <div className="inline-block px-3 py-1 bg-accent/10 text-accent font-mono text-xs uppercase tracking-widest rounded-full mb-6">
                            Social Ads
                        </div>
                        <h1 className="font-sans font-bold text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight mb-8">
                            LinkedIn Ads vs Google Ads voor B2B: een eerlijke vergelijking
                        </h1>
                        <div className="flex flex-wrap items-center gap-6 text-sm font-sans text-primary/60 border-y border-primary/10 py-6">
                            <div className="flex items-center gap-2"><User className="w-4 h-4" /><span>Empowers Redactie</span></div>
                            <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>2 mei 2026</span></div>
                            <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>9 minuten leestijd</span></div>
                        </div>
                    </header>

                    {/* Featured Image */}
                    <figure className="w-full h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden mb-16 relative bg-primary">
                        <div className="absolute inset-0 bg-[url('/images/blogs/linkedin-ads-vs-google-ads.jpg')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </figure>

                    {/* Content */}
                    <div className="prose prose-lg max-w-none prose-headings:text-primary prose-headings:font-bold prose-a:text-accent prose-a:underline hover:prose-a:text-accent/80">
                        <p className="text-xl leading-relaxed text-primary/80 font-medium mb-6">
                            LinkedIn Ads of Google Ads voor B2B? Het korte antwoord: Google wint op volume en kosten per lead, LinkedIn wint op kwaliteit en exacte targeting op functie en bedrijf. Voor MKB-aanbod onder 25.000 euro per jaar haalt Google meestal het beste rendement. Voor enterprise-deals en account-based marketing blijft LinkedIn ondanks de hogere CPC's het sterkste kanaal.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe verschillen LinkedIn Ads en Google Ads?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Het verschil zit in koopintentie. Google Ads vangt mensen die actief zoeken naar een oplossing. Iemand typt "CRM software MKB" of "boekhouder Utrecht" en ziet jouw advertentie boven de organische resultaten. De koopintentie is hoog, want anders had hij die zoekopdracht niet ingevoerd.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            LinkedIn Ads werkt aan de andere kant van de funnel. Je toont advertenties aan mensen op basis van hun profiel: functietitel, bedrijfsgrootte, branche, jaren ervaring. Ze zoeken op dat moment niet naar jouw oplossing, maar passen wel exact in jouw doelgroep. LinkedIn creëert vraag, Google vangt vraag.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Voor B2B betekent dat een totaal andere strategie. Op Google werk je met zoekwoorden, advertentieteksten en landingspagina's die direct converteren. Op LinkedIn werk je met content die opwarmt: een whitepaper, een webinar, een gids. Wie LinkedIn aanpakt als Google verspilt zijn budget. Voor de basis van het andere kanaal lees je onze blog over <Link to="/blogs/social-ads/linkedin-ads-beginners-eerste-b2b" className="text-accent hover:underline">LinkedIn Ads voor B2B-beginners</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat kost een lead op elk platform?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De getallen verschillen flink. LinkedIn Ads CPC's voor B2B-targeting in Nederland liggen tussen 6 en 15 euro per klik, soms hoger voor zware functies als CFO of directeur. Google Ads CPC's voor B2B-zoekwoorden bewegen tussen 2 en 8 euro per klik, afhankelijk van branche.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Per gekwalificeerde lead is het verschil kleiner. LinkedIn-leads kosten doorgaans 80 tot 200 euro, afhankelijk van aanbod en functie-targeting. Google-leads voor vergelijkbare B2B-aanbiedingen liggen tussen 50 en 150 euro. Op het eerste oog wint Google. Maar lead-kwaliteit telt: een LinkedIn-lead met functie en bedrijf erbij ingevuld is vaak verder in de funnel dan een Google-lead die alleen een formulier invulde.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Reken voor minimumbudgetten op LinkedIn met 25 euro per dag per campagne, dus 750 euro per maand. Voor een eerlijke test reken je 3.000 tot 5.000 euro over 8 tot 12 weken. Google Ads kan vanaf 1.000 euro per maand getest worden, mits je strak kiest in zoekwoorden. Voor benchmarks per branche lees onze gids over <Link to="/blogs/google-ads/goede-ctr-google-ads-benchmarks" className="text-accent hover:underline">CTR-benchmarks op Google Ads</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Welk kanaal levert betere B2B-leads?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Het antwoord hangt af van wat je verstaat onder "betere". Google Ads levert vaak een hogere conversieratio omdat de bezoeker actief zocht naar een oplossing. Tussen 5 en 15 procent van de klikken converteert tot lead bij goed ingerichte campagnes. LinkedIn-conversieratios liggen lager, vaak tussen 2 en 6 procent.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Wat LinkedIn wint, is lead-kwaliteit gemeten op profiel-fit. Wanneer je targeting goed staat, krijg je leads die exact passen bij jouw ICP. CFO's bij bedrijven van 50 tot 250 medewerkers in de IT-branche, om maar wat te noemen. Op Google moet je dat in advertentiekoppen en landingspagina-tekst zelf afdwingen. Op LinkedIn doet de targeting dat voor je.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Voor account-based marketing is LinkedIn vrijwel onverslaanbaar. Je kunt advertenties tonen aan een lijst van specifieke bedrijven, vergelijkbaar met named-account-targeting. Op Google bestaat dat niet op die manier. Wie 50 tot 200 specifieke target-accounts heeft, draait op LinkedIn beter.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wanneer wint Google Ads voor B2B?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Google Ads is jouw eerste keuze als jouw aanbod aan drie voorwaarden voldoet. Eén: er bestaat actieve zoekvraag. Mensen typen al iets in op Google dat duidt op koopintentie. Twee: jouw aanbod is uit te leggen op een landingspagina van 1 tot 2 minuten leestijd. Drie: het beslismoment ligt redelijk dicht bij het zoekmoment.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Voor MKB-software, IT-diensten, accountantskantoren, juridische dienstverlening en zakelijke trainingen werkt Google sterker dan LinkedIn voor de meeste prijssegmenten tot 25.000 euro per jaar. Het volume is groter, de CPC is lager en de conversieratio is hoger. Voor de basis van Google Ads B2B lees onze blog over <Link to="/blogs/google-ads/google-ads-voor-mkb-campagne-instellen" className="text-accent hover:underline">Google Ads voor MKB</Link>.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Google Ads is ook sterker als jouw doelgroep niet duidelijk te targeten is op LinkedIn-profielfilters. Een installateur die zakelijke klanten zoekt, een fysiotherapeut die bedrijven werft of een trainer die HR-managers wil bereiken, vindt op Google sneller resultaten dan op LinkedIn waar de targeting bij niche-functies dun is.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wanneer wint LinkedIn Ads voor B2B?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            LinkedIn wint zodra exacte targeting op functie of bedrijfsgrootte cruciaal is. Voor enterprise-software boven 50.000 euro per jaar, voor account-based marketing op specifieke bedrijven en voor diensten die alleen aansluiten bij een specifieke seniority of branche, is LinkedIn de eerste keuze.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            LinkedIn wint ook bij categorie-creatie. Verkoop je iets dat mensen nog niet weten dat ze nodig hebben? Een nieuw type SaaS, een innovatieve dienst of een nieuwe categorie? Op Google bestaat de zoekvraag dan nog niet. Op LinkedIn kun je de juiste mensen wel bereiken op basis van hun profiel en hen opwarmen voor het bestaan van jouw oplossing.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Lead Gen Forms binnen LinkedIn presteren in B2B vaak goed. De drempel is laag omdat profielgegevens al voor-ingevuld worden. Onze gids over <Link to="/blogs/social-ads/linkedin-lead-gen-forms-waarom" className="text-accent hover:underline">LinkedIn Lead Gen Forms</Link> gaat in op de juiste opzet.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe combineer je LinkedIn en Google?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De slimste B2B-marketeers kiezen niet, ze combineren. Google vangt actieve vraag, LinkedIn warmt beslissers op die jouw merk nog niet kennen. De twee versterken elkaar als je het juist inricht.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een werkende opzet is deze. Google Ads draait op zoekwoorden met koopintentie en stuurt verkeer naar conversiegerichte landingspagina's. LinkedIn Ads draait op content-gedreven campagnes die specifieke functies opwarmen met whitepapers, webinars en gidsen. Mensen die op Google jouw site bezoeken, retarget je op LinkedIn met content gericht op hun functie en branche, mits je de LinkedIn Insight Tag goed hebt staan.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Andersom warm je via LinkedIn beslissers op zodat ze jouw merknaam later in Google intypen. Een groei in branded zoekverkeer is een teken dat jouw LinkedIn-investering werkt. Meet niet alleen direct toegeschreven leads per kanaal, kijk naar de combinatie. Onze blog over <Link to="/blogs/tracking/attribution-modellen-uitgelegd-last-click" className="text-accent hover:underline">attributie-modellen</Link> legt uit hoe je beide kanalen eerlijk waardeert.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat is een realistische budgetverdeling?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een vuistregel die voor veel B2B-bedrijven werkt: 60 tot 70 procent budget naar het kanaal dat al rendement oplevert, 30 tot 40 procent naar het andere als test of versterking. Werk je nu vooral met Google en presteert dat goed, schaal dat verder en zet 30 tot 40 procent extra budget op LinkedIn voor opwarming en account-based marketing.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Voor een realistische start reken je op een gecombineerd budget van minimaal 4.000 tot 6.000 euro per maand om beide kanalen serieus te testen. Daaronder lukt het lastig om beide platformen uit hun leerfase te krijgen. Voor enterprise B2B met grote dealwaardes liggen de bedragen significant hoger, vaak boven de 15.000 euro per maand gecombineerd.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wanneer schakel je een specialist in?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            B2B-advertising op twee kanalen tegelijk vraagt andere expertise dan een enkel kanaal beheren. De targeting werkt anders, de creatives werken anders, de meting werkt anders. Wie zelf op één van de twee al worstelt, lukt het op twee tegelijk meestal niet zonder hulp.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Vanaf een gecombineerd B2B-budget van 5.000 euro per maand of zodra je meerdere doelgroepen en aanbiedingen tegelijk wilt aansturen, verdient een specialist zichzelf vaak binnen 2 tot 4 maanden terug. Wil je weten welke verdeling voor jouw aanbod werkt? Plan een gratis gesprek via onze <Link to="/contact" className="text-accent hover:underline">contactpagina</Link>. Geen verplichtingen, wel duidelijkheid over wat haalbaar is.
                        </p>
                    </div>

                    {/* FAQ Section */}
                    <section className="mt-16 pt-12 border-t border-primary/10">
                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Veelgestelde vragen</h2>
                        <div className="space-y-6 not-prose">
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat is het verschil tussen LinkedIn Ads en Google Ads voor B2B?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Google Ads vangt actieve vraag bij mensen die zoeken naar een oplossing. LinkedIn Ads creëert vraag bij beslissers op basis van profiel: functietitel, bedrijfsgrootte en branche. Google werkt op intentie, LinkedIn op profiel.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Welk kanaal levert betere B2B-leads?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Google levert hogere conversieratio's omdat de bezoeker actief zocht. LinkedIn levert hogere lead-kwaliteit op functietitel en bedrijfsgrootte. Voor pure leadgeneratie wint Google in volume, voor account-based marketing wint LinkedIn.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat kost LinkedIn Ads vergeleken met Google Ads?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">LinkedIn CPC's tussen 6 en 15 euro voor B2B. Google CPC's tussen 2 en 8 euro voor B2B-zoekwoorden. Per gekwalificeerde lead: LinkedIn 80 tot 200 euro, Google 50 tot 150 euro voor vergelijkbare aanbiedingen.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Welk minimumbudget heb je nodig voor B2B?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">LinkedIn vraagt minimaal 750 euro per maand. Voor een eerlijke test reken je 3.000 tot 5.000 euro over 8 tot 12 weken. Google Ads kan vanaf 1.000 euro per maand getest worden, mits je strak kiest in zoekwoorden.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Werkt Google Ads voor B2B met een lange salescyclus?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Ja, mits je niet alleen op leadformulieren stuurt. Voor B2B met cycli van 3 tot 12 maanden meet je micro-conversies zoals demo-aanvragen, gids-downloads en webinar-registraties. Combineer met LinkedIn-remarketing.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Welk kanaal kies je als je 1 platform moet kiezen?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Heb je producten die mensen al zoeken, kies Google. Verkoop je iets nieuws of complex waar nog geen zoekvraag bestaat, kies LinkedIn. Voor enterprise-deals boven 50.000 euro per jaar wint LinkedIn vaak. Voor MKB-aanbod tot 25.000 euro per jaar wint Google.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoe combineer je beide kanalen het slimst?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Google voor actieve vraag, LinkedIn voor account-based remarketing. Mensen die via Google op jouw site komen, retarget je op LinkedIn met content per functie. Andersom warm je via LinkedIn beslissers op zodat ze later jouw merk in Google intypen.</p>
                            </div>
                        </div>
                    </section>

                    {/* Related Links */}
                    <section className="mt-16 pt-12 border-t border-primary/10">
                        <h3 className="text-xl font-bold text-primary mb-6">Lees ook</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <Link to="/blogs/social-ads/linkedin-ads-beginners-eerste-b2b" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">LinkedIn Ads voor B2B-beginners</h3>
                                <p className="text-primary/60 text-sm">Hoe je een eerste LinkedIn-campagne opzet voor B2B en welke targeting-keuzes je maakt.</p>
                            </Link>
                            <Link to="/blogs/google-ads/google-ads-voor-mkb-campagne-instellen" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Google Ads voor MKB</h3>
                                <p className="text-primary/60 text-sm">Een goed ingestelde Google Ads-campagne haalt een ROAS van 3 tot 5. Lees hoe je dat bereikt.</p>
                            </Link>
                            <Link to="/blogs/social-ads/meta-ads-b2b-werkt" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Meta Ads voor B2B</h3>
                                <p className="text-primary/60 text-sm">Werkt Meta voor zakelijke leads en wanneer is het sterker dan LinkedIn?</p>
                            </Link>
                        </div>
                    </section>
                </div>
            </article>

            {/* Bottom CTA */}
            <section className="w-full pb-32 px-6">
                <div className="max-w-4xl mx-auto bg-primary rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
                    <h2 className="relative z-10 font-drama italic text-background text-3xl sm:text-4xl md:text-5xl mb-6">Hulp bij jouw B2B-mix?</h2>
                    <p className="relative z-10 font-sans text-background/70 text-lg mb-10 max-w-xl mx-auto">We doen een gratis scan van jouw B2B-aanbod en huidige kanalen en geven concreet advies hoe je LinkedIn en Google het slimst combineert. Geen verplichtingen, wel duidelijkheid.</p>
                    <Link to="/contact" className="relative z-10 btn-magnetic inline-flex items-center justify-center bg-accent text-background font-sans font-bold text-lg px-10 py-4 rounded-[2rem] hover:bg-accent/90 transition-colors">Neem contact op</Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
