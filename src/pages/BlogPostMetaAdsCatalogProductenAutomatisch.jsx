import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ChevronRight, User } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function BlogPostMetaAdsCatalogProductenAutomatisch() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen selection:bg-accent/30 selection:text-dark flex flex-col bg-background">
            <Helmet>
                <title>Meta Ads Catalog: producten automatisch adverteren | Empowers</title>
                <meta name="description" content="Met een Meta Ads Catalog adverteer je producten automatisch op Facebook en Instagram. Lees hoe je hem opzet en welke fouten je voorkomt." />
                <link rel="canonical" href="https://www.empowers.nl/blogs/social-ads/meta-ads-catalog-producten-automatisch" />
                <meta property="og:title" content="Meta Ads Catalog: producten automatisch adverteren" />
                <meta property="og:description" content="Zo zet je een Meta Ads Catalog op die producten automatisch laat presteren. Inclusief feed-tips en valkuilen." />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://www.empowers.nl/blogs/social-ads/meta-ads-catalog-producten-automatisch" />
                <meta property="og:image" content="https://www.empowers.nl/images/blogs/meta-ads-catalog-producten-automatisch.jpg" />
                <meta property="article:published_time" content="2026-04-26T11:00:00+02:00" />
                <meta property="article:author" content="Empowers" />
                <meta property="article:section" content="Social Ads" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Meta Ads Catalog: producten automatisch adverteren" />
                <meta name="twitter:description" content="Zo werkt de Meta Ads Catalog en zo haal je er rendement uit." />

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Article",
                        "headline": "Meta Ads Catalog: producten automatisch adverteren",
                        "description": "Met een Meta Ads Catalog adverteer je producten automatisch op Facebook en Instagram. Lees hoe je hem opzet en welke fouten je voorkomt.",
                        "image": "https://www.empowers.nl/images/blogs/meta-ads-catalog-producten-automatisch.jpg",
                        "datePublished": "2026-04-26T11:00:00+02:00",
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
                                    "name": "Wat is een Meta Ads Catalog?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Een Meta Ads Catalog is een productbestand binnen Meta Business Manager. Daarin staan al jouw producten met afbeelding, prijs, beschrijving en voorraadstatus. Meta gebruikt die feed om producten dynamisch te tonen aan mensen op Facebook en Instagram, gebaseerd op hun gedrag en interesse."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Voor wie werkt een productcatalogus?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Vooral voor webshops met meer dan 10 producten. Hoe meer producten, hoe meer rendement omdat Meta ze automatisch combineert per gebruiker. B2B-bedrijven zonder e-commerce halen meestal weinig uit een catalogus en kunnen beter klassieke campagnes draaien."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Hoe upload je producten naar de catalogus?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Er zijn drie manieren: een directe koppeling met Shopify, WooCommerce of Magento, een handmatige CSV-feed, of een dynamische URL die Meta dagelijks ophaalt. De URL-feed is de stabielste optie omdat voorraad en prijs altijd actueel blijven zonder handmatig werk."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Wat is een dynamische productadvertentie?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Een dynamische productadvertentie toont automatisch de producten waar een specifieke bezoeker eerder naar keek of die op zijn profiel passen. De advertentie zelf is een sjabloon, de inhoud verandert per gebruiker. Dat maakt schaal mogelijk: je hoeft niet per product een advertentie te bouwen."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Welke fouten kom je vaak tegen in productfeeds?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "De meeste fouten zitten in afgekeurde producten. Vaak ontbreken verplichte velden zoals brand, GTIN of EAN, of zijn afbeeldingen kleiner dan 500 bij 500 pixels. Controleer wekelijks de Diagnose-tab in Commerce Manager om afgekeurde producten direct te fixen."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Wat kost adverteren met een catalogus?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "De setup van een catalogus is gratis. De advertentiekosten verschillen per branche, maar dynamische productadvertenties hebben gemiddeld een 20 tot 40 procent lagere CPA dan reguliere campagnes. Reken op een budget vanaf 500 euro per maand om voldoende data te verzamelen voor optimalisatie."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Werkt een catalogus voor cold of warm verkeer?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Voor allebei, maar warm verkeer levert hogere ROAS. Retargeting via de catalogus haalt meestal een ROAS van 5 tot 10. Cold prospecting via de catalogus zit op 2 tot 4. Combineer altijd een retargetingflow met een prospecting-laag voor doorlopende groei."
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
                            { "@type": "ListItem", "position": 4, "name": "Meta Ads Catalog", "item": "https://www.empowers.nl/blogs/social-ads/meta-ads-catalog-producten-automatisch" }
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
                        <span className="text-primary truncate">Meta Ads Catalog</span>
                    </nav>

                    {/* Header */}
                    <header className="mb-16">
                        <div className="inline-block px-3 py-1 bg-accent/10 text-accent font-mono text-xs uppercase tracking-widest rounded-full mb-6">
                            Social Ads
                        </div>
                        <h1 className="font-sans font-bold text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight mb-8">
                            Meta Ads Catalog: producten automatisch adverteren
                        </h1>
                        <div className="flex flex-wrap items-center gap-6 text-sm font-sans text-primary/60 border-y border-primary/10 py-6">
                            <div className="flex items-center gap-2"><User className="w-4 h-4" /><span>Empowers Redactie</span></div>
                            <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>26 april 2026</span></div>
                            <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>7 minuten leestijd</span></div>
                        </div>
                    </header>

                    {/* Featured Image */}
                    <figure className="w-full h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden mb-16 relative bg-primary">
                        <div className="absolute inset-0 bg-[url('/images/blogs/meta-ads-catalog-producten-automatisch.jpg')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </figure>

                    {/* Content */}
                    <div className="prose prose-lg max-w-none prose-headings:text-primary prose-headings:font-bold prose-a:text-accent prose-a:underline hover:prose-a:text-accent/80">
                        <p className="text-xl leading-relaxed text-primary/80 font-medium mb-6">
                            Een Meta Ads Catalog laat jouw producten zichzelf verkopen. Je upload jouw productfeed één keer en Meta bouwt op basis daarvan automatisch advertenties op Facebook en Instagram die per gebruiker worden samengesteld. Het werkt vooral sterk voor webshops met meer dan 10 producten. In deze blog lees je hoe je een catalogus opzet, welke fouten in de feed je voorkomt en welk rendement realistisch is.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat is een Meta Ads Catalog precies?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een Meta Ads Catalog is een gestructureerd productbestand binnen Meta Business Manager. Per product staan daarin de afbeelding, titel, beschrijving, prijs, voorraadstatus, GTIN en productcategorie. Meta gebruikt die data om advertenties dynamisch te bouwen: per gebruiker selecteert het algoritme uit jouw feed de producten die het beste bij die persoon passen.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Dat klinkt simpel, maar het is een schaalbare manier om duizenden product-advertenties te runnen zonder dat je per item iets hoeft te ontwerpen. De catalogus vervangt feitelijk een groot deel van het handmatig advertenties bouwen. Bij webshops die we begeleiden zien we vaak dat 60 tot 80 procent van het Meta-budget naar dynamische productadvertenties verschuift zodra de catalogus goed staat. Hoe Meta Ads sowieso werkt na alle privacywijzigingen lees je in onze blog over <Link to="/blogs/social-ads/meta-ads-2026-werkt-na" className="text-accent hover:underline">Meta Ads na privacywijzigingen</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Voor wie loont een productcatalogus?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Webshops met minimaal 10 producten halen het meeste rendement uit een catalogus. Hoe meer producten, hoe beter het algoritme kan combineren per gebruikersprofiel. Een mode-webshop met 500 SKU's haalt veel meer winst uit dynamische advertenties dan een dienstenbedrijf met drie aanbiedingen. De setup vergt een initiële investering van een paar uur, maar daarna draait het grotendeels op zichzelf.
                            </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Voor B2B-bedrijven of dienstverleners zonder fysieke producten is een catalogus zelden de juiste keuze. Je kunt wel diensten als 'producten' uploaden, maar Meta's algoritme voor dynamic ads is getraind op consumentengedrag. Klassieke campagnes met video en lead-formulieren leveren in B2B vrijwel altijd meer op. Bekijk onze blog over <Link to="/blogs/social-ads/facebook-vs-instagram-adverteren-welk" className="text-accent hover:underline">Facebook vs Instagram adverteren</Link> voor de keuze tussen kanalen.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe zet je de catalogus op?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Je begint in Commerce Manager binnen Meta Business Suite. Klik op 'Catalogus toevoegen', kies 'E-commerce' als type en selecteer hoe je producten gaat uploaden. Voor de meeste shopsystemen is een directe koppeling met Shopify, WooCommerce of Magento de snelste route. Het systeem haalt dan automatisch jouw producten op en houdt prijs en voorraad up-to-date.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Heb je een platform zonder native koppeling? Dan upload je een CSV of XML feed via een URL die Meta dagelijks ophaalt. Zorg dat die feed automatisch wordt gegenereerd door jouw shopsysteem, niet handmatig. Een handmatige feed is binnen een week verouderd, en verouderde data leidt tot afgekeurde producten en wegvallende impressies. Voor de basisinrichting zijn alleen de verplichte velden nodig: id, title, description, availability, condition, price, link, image_link en brand.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Welke productdata heb je echt nodig?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Boven de verplichte velden lonen extra velden de moeite. GTIN (de barcode) helpt Meta producten matchen aan vergelijkingsalgoritmes. Productcategorie volgens de Google taxonomy zorgt dat producten worden gekoppeld aan relevante intent. Custom labels (custom_label_0 tot 4) gebruik je om bestsellers, sale-items of marges te markeren, zodat je per groep een eigen biedingsstrategie kunt voeren.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De afbeelding is bepalender dan veel marketeers denken. Meta toont meerdere producten naast elkaar in een carrousel, dus uniformiteit telt. Witte achtergrond, vierkant formaat, minimaal 1080 bij 1080 pixels en geen tekst op de afbeelding (Meta straft afbeeldingen met meer dan 20 procent tekst af). Een webshop die we begeleidden ging van 1.5 ROAS naar 4.2 ROAS door de productfotografie te uniformeren, zonder andere wijzigingen.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe maak je een dynamische productadvertentie?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            In Ads Manager kies je voor het doel 'Catalogusverkopen'. Selecteer jouw catalogus en kies tussen retargeting (mensen die jouw site al bezochten) of breed publiek (cold prospecting). Het advertentiesjabloon vul je in met dynamische tags: . Meta vult die per impressie automatisch in vanuit de feed.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Begin met een retargetingflow op productpaginakijkers van de afgelopen 30 dagen. Dat is bijna altijd jouw winstgevendste laag. Schaal daarna op naar prospecting met een lookalike audience of een interest-targeting. Houd de twee strikt gescheiden in twee aparte campagnes, want de juiste ROAS-target verschilt per laag (8+ voor retargeting, 2 tot 4 voor cold). Voor een uitleg over conversietracking via Meta CAPI lees je onze blog over de <Link to="/blogs/social-ads/conversie-api-meta-naast-pixel" className="text-accent hover:underline">Conversie API van Meta</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Welke fouten kom je in de praktijk tegen?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De meeste problemen zitten in de feed zelf, niet in de campagnestrategie. Producten worden afgekeurd doordat verplichte velden ontbreken, omdat afbeeldingen te klein zijn of doordat productcategorieën niet matchen met Meta's taxonomie. Check wekelijks de Diagnose-tab in Commerce Manager. Een feed met 30 procent afgekeurde producten draait gewoon door, maar je adverteert dan met een derde minder voorraad dan beschikbaar.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een andere veelgemaakte fout: de catalogus loopt niet synchroon met jouw site. Als jouw shop een product uitverkocht meldt maar de feed nog 'in stock' aangeeft, krijgt de gebruiker een foutmelding na het klikken. Dat verlaagt de relevantiescore en jouw advertenties worden minder vaak getoond. Werk daarom altijd met een live URL-feed of een directe koppeling, nooit met een handmatige upload.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe meet je succes van een catalogus-campagne?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De belangrijkste KPI is ROAS, gevolgd door CPA en het percentage producten dat impressies genereert. Een gezonde catalogus-campagne laat 70 tot 90 procent van jouw producten op zijn minst één impressie krijgen per week. Krijgt slechts 30 procent impressies, dan zit het probleem in feedkwaliteit, niet in budget. Meet ook de impact op organisch verkeer: dynamische advertenties brengen vaak een tweede aankoopgolf via direct verkeer en re-search.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Vergelijk de ROAS van retargeting en prospecting niet één-op-één. Retargeting cannibaliseert vaak een deel van het organisch verkeer, dus de cijfers zien er beter uit dan ze zijn. Een betrouwbaarder beeld krijg je via een incrementality test: schakel retargeting voor twee weken uit en meet hoeveel omzet je verliest. Vaak is dat 60 tot 80 procent van wat de campagne aan ROAS laat zien.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wanneer is het tijd om hulp in te schakelen?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een catalogus opzetten lukt elke webshopeigenaar in een paar uur. Een catalogus laten presteren is een ander verhaal. Als je merkt dat jouw ROAS stagneert, dat veel producten niet getoond worden of dat jouw feed structureel afkeuringen oplevert, dan is een specialist vaak de snelste weg naar groei. We zien wekelijks dat een feedoptimalisatie alleen al 30 tot 50 procent meer omzet brengt zonder extra budget.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Wil je dat we mét je meekijken naar jouw catalogus en feed? Plan een gesprek via onze <Link to="/contact" className="text-accent hover:underline">contactpagina</Link>. We laten zien waar de winst zit, voordat je een euro extra uitgeeft.
                        </p>
                    </div>

                    {/* FAQ Section */}
                    <section className="mt-16 pt-12 border-t border-primary/10">
                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Veelgestelde vragen</h2>
                        <div className="space-y-6 not-prose">
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat is een Meta Ads Catalog?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Een Meta Ads Catalog is een productbestand binnen Meta Business Manager. Daarin staan al jouw producten met afbeelding, prijs, beschrijving en voorraadstatus. Meta gebruikt die feed om producten dynamisch te tonen aan mensen op Facebook en Instagram, gebaseerd op hun gedrag en interesse.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Voor wie werkt een productcatalogus?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Vooral voor webshops met meer dan 10 producten. Hoe meer producten, hoe meer rendement omdat Meta ze automatisch combineert per gebruiker. B2B-bedrijven zonder e-commerce halen meestal weinig uit een catalogus en kunnen beter klassieke campagnes draaien.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoe upload je producten naar de catalogus?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Er zijn drie manieren: een directe koppeling met Shopify, WooCommerce of Magento, een handmatige CSV-feed, of een dynamische URL die Meta dagelijks ophaalt. De URL-feed is de stabielste optie omdat voorraad en prijs altijd actueel blijven zonder handmatig werk.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat is een dynamische productadvertentie?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Een dynamische productadvertentie toont automatisch de producten waar een specifieke bezoeker eerder naar keek of die op zijn profiel passen. De advertentie zelf is een sjabloon, de inhoud verandert per gebruiker. Dat maakt schaal mogelijk: je hoeft niet per product een advertentie te bouwen.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Welke fouten kom je vaak tegen in productfeeds?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">De meeste fouten zitten in afgekeurde producten. Vaak ontbreken verplichte velden zoals brand, GTIN of EAN, of zijn afbeeldingen kleiner dan 500 bij 500 pixels. Controleer wekelijks de Diagnose-tab in Commerce Manager om afgekeurde producten direct te fixen.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat kost adverteren met een catalogus?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">De setup van een catalogus is gratis. De advertentiekosten verschillen per branche, maar dynamische productadvertenties hebben gemiddeld een 20 tot 40 procent lagere CPA dan reguliere campagnes. Reken op een budget vanaf 500 euro per maand om voldoende data te verzamelen voor optimalisatie.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Werkt een catalogus voor cold of warm verkeer?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Voor allebei, maar warm verkeer levert hogere ROAS. Retargeting via de catalogus haalt meestal een ROAS van 5 tot 10. Cold prospecting via de catalogus zit op 2 tot 4. Combineer altijd een retargetingflow met een prospecting-laag voor doorlopende groei.</p>
                            </div>
                        </div>
                    </section>

                    {/* Related */}
                    <section className="mt-16 pt-12 border-t border-primary/10">
                        <h3 className="text-xl font-bold text-primary mb-6">Lees ook</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <Link to="/blogs/social-ads/meta-ads-2026-werkt-na" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Meta Ads na privacywijzigingen</h3>
                                <p className="text-primary/60 text-sm">Wat werkt nog wel na alle privacywijzigingen en hoe pas je je strategie aan.</p>
                            </Link>
                            <Link to="/blogs/social-ads/retargeting-meta-ads-haal-verloren" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Retargeting via Meta Ads</h3>
                                <p className="text-primary/60 text-sm">Zo haal je verloren bezoekers terug en zet je ze om in klanten.</p>
                            </Link>
                            <Link to="/blogs/social-ads/conversie-api-meta-naast-pixel" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Conversie API Meta</h3>
                                <p className="text-primary/60 text-sm">Hoe je server-side tracking instelt zodat Meta jouw conversies blijft zien.</p>
                            </Link>
                        </div>
                    </section>

                </div>
            </article>

            {/* CTA */}
            <section className="w-full pb-32 px-6">
                <div className="max-w-4xl mx-auto bg-primary rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
                    <h2 className="relative z-10 font-drama italic text-background text-3xl sm:text-4xl md:text-5xl mb-6">
                        Catalogus die voor je verkoopt?
                    </h2>
                    <p className="relative z-10 font-sans text-background/70 text-lg mb-10 max-w-xl mx-auto">
                        We zetten jouw productfeed scherp op en bouwen dynamische campagnes die elke euro laten renderen. Binnen een week zie je wat er beter kan.
                    </p>
                    <Link
                        to="/contact"
                        className="relative z-10 btn-magnetic inline-flex items-center justify-center bg-accent text-background font-sans font-bold text-lg px-10 py-4 rounded-[2rem] hover:bg-accent/90 transition-colors"
                    >
                        Neem contact op
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
