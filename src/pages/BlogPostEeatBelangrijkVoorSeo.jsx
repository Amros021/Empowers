import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ChevronRight, User } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function BlogPostEeatBelangrijkVoorSeo() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen selection:bg-accent/30 selection:text-dark flex flex-col bg-background">
            <Helmet>
                <title>Wat is E-E-A-T en waarom is het zo belangrijk voor SEO? | Empowers</title>
                <meta name="description" content="E-E-A-T staat voor Experience, Expertise, Authoritativeness en Trustworthiness. Lees hoe Google jouw website hierop beoordeelt en wat je moet doen om hoger te scoren." />
                <link rel="canonical" href="https://www.empowers.nl/blogs/seo/eeat-belangrijk-voor-seo" />
                <meta property="og:title" content="Wat is E-E-A-T en waarom is het zo belangrijk voor SEO?" />
                <meta property="og:description" content="E-E-A-T bepaalt of Google jouw site vertrouwt. Lees hoe je Experience, Expertise, Authoritativeness en Trustworthiness aantoont." />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://www.empowers.nl/blogs/seo/eeat-belangrijk-voor-seo" />
                <meta property="og:image" content="https://www.empowers.nl/images/blogs/eeat-belangrijk-voor-seo.jpg" />
                <meta property="article:published_time" content="2026-05-02" />
                <meta property="article:author" content="Empowers" />
                <meta property="article:section" content="SEO" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Wat is E-E-A-T en waarom is het zo belangrijk voor SEO?" />
                <meta name="twitter:description" content="E-E-A-T bepaalt mede hoe hoog je scoort in Google. Zo bouw je het op voor jouw site." />

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Article",
                        "headline": "Wat is E-E-A-T en waarom is het zo belangrijk voor SEO?",
                        "description": "E-E-A-T staat voor Experience, Expertise, Authoritativeness en Trustworthiness. Lees hoe Google jouw website hierop beoordeelt en wat je moet doen om hoger te scoren.",
                        "image": "https://www.empowers.nl/images/blogs/eeat-belangrijk-voor-seo.jpg",
                        "datePublished": "2026-05-02T11:00:00+02:00",
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
                                    "name": "Wat betekent E-E-A-T precies?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "E-E-A-T staat voor Experience, Expertise, Authoritativeness en Trustworthiness. Het zijn vier signalen die Google gebruikt om de kwaliteit van content en de betrouwbaarheid van een website te beoordelen. Ervaring meet of de auteur het onderwerp echt heeft meegemaakt, expertise of de auteur deskundig is, autoriteit of anderen jouw site noemen als bron en vertrouwen of jouw site veilig en eerlijk is."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Is E-E-A-T een rankingfactor?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "E-E-A-T is geen directe rankingfactor in de zin van een meetbare score. Google gebruikt het als kwaliteitsmaatstaf in de Quality Rater Guidelines. Sites die op E-E-A-T sterk scoren krijgen indirect betere posities omdat Google de signalen verwerkt in algoritme-updates zoals helpful content updates en core updates."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Voor welke onderwerpen telt E-E-A-T het zwaarst?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Voor Your Money or Your Life onderwerpen telt E-E-A-T het zwaarst. Dat zijn pagina's die invloed hebben op gezondheid, financiën, juridische zaken of veiligheid van mensen. Voor een hypotheekadviseur, arts, advocaat of voedingsdeskundige is sterk E-E-A-T-bewijs vrijwel verplicht om bovenaan te komen."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Hoe toon ik Experience aan op mijn website?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Schrijf vanuit eigen ervaring en laat zien dat je het onderwerp hebt meegemaakt. Voeg foto's toe van jouw werk, klantcases met namen en bedrijven, voorbeelden uit jouw eigen praktijk en concrete cijfers van projecten. Vermijd algemene how-to-content die overal te vinden is. Google herkent gebrek aan eerstehands ervaring."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Hoe bouw ik autoriteit op voor SEO?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Autoriteit bouw je op door vermeldingen van andere relevante websites in jouw branche, gastblogs op vakmedia, citaten in nieuwsartikelen en aanwezigheid op brancheplatforms. Backlinks van autoritaire sites tellen het zwaarst. Werk daarnaast aan brand searches: hoe vaker mensen jouw merknaam intypen, hoe sterker Google jouw autoriteit ziet."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Wat zijn directe acties om E-E-A-T te verbeteren?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Concrete acties zijn: voeg auteursbio's toe met LinkedIn-link en kwalificaties, vermeld bronnen onderaan elk artikel, plaats reviews zichtbaar op landingspagina's, zorg voor een SSL-certificaat en duidelijke contactgegevens en houd content actueel. Update oude blogs minimaal elke 12 maanden zodat Google ziet dat de informatie nog klopt."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Hoe meet ik of mijn E-E-A-T verbetert?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Direct meten kan niet, maar je ziet het indirect. Volg jouw posities op YMYL-zoekwoorden in Search Console, kijk of het aantal verwijzende domeinen groeit in tools als Ahrefs of Semrush en monitor het volume aan brand searches. Een stabiele groei op deze drie punten over 6 tot 12 maanden duidt op verbeterende E-E-A-T."
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
                            { "@type": "ListItem", "position": 4, "name": "E-E-A-T voor SEO", "item": "https://www.empowers.nl/blogs/seo/eeat-belangrijk-voor-seo" }
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
                        <Link to="/blogs/seo" className="hover:text-accent transition-colors">SEO</Link>
                        <ChevronRight className="w-3 h-3" />
                        <span className="text-primary truncate">E-E-A-T voor SEO</span>
                    </nav>

                    {/* Header */}
                    <header className="mb-16">
                        <div className="inline-block px-3 py-1 bg-accent/10 text-accent font-mono text-xs uppercase tracking-widest rounded-full mb-6">
                            SEO
                        </div>
                        <h1 className="font-sans font-bold text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight mb-8">
                            Wat is E-E-A-T en waarom is het zo belangrijk voor SEO?
                        </h1>
                        <div className="flex flex-wrap items-center gap-6 text-sm font-sans text-primary/60 border-y border-primary/10 py-6">
                            <div className="flex items-center gap-2"><User className="w-4 h-4" /><span>Empowers Redactie</span></div>
                            <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>2 mei 2026</span></div>
                            <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>8 minuten leestijd</span></div>
                        </div>
                    </header>

                    {/* Featured Image */}
                    <figure className="w-full h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden mb-16 relative bg-primary">
                        <div className="absolute inset-0 bg-[url('/images/blogs/eeat-belangrijk-voor-seo.jpg')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </figure>

                    {/* Content */}
                    <div className="prose prose-lg max-w-none prose-headings:text-primary prose-headings:font-bold prose-a:text-accent prose-a:underline hover:prose-a:text-accent/80">
                        <p className="text-xl leading-relaxed text-primary/80 font-medium mb-6">
                            E-E-A-T staat voor Experience, Expertise, Authoritativeness en Trustworthiness en bepaalt mede hoe Google jouw website beoordeelt. Het is geen directe rankingfactor, maar wel een kwaliteitsmaatstaf die Google gebruikt om te beslissen welke pagina's bovenaan komen. Voor onderwerpen rond gezondheid, financiën en juridisch advies is sterk E-E-A-T-bewijs vrijwel verplicht om mee te kunnen doen.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat betekent E-E-A-T precies?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De vier letters staan ieder voor een eigen signaal. Samen vormen ze een filter dat Google over jouw site legt voordat de algoritmes bepalen waar je in de zoekresultaten verschijnt.
                        </p>

                        <h3 className="font-semibold text-primary text-xl mt-10 mb-4">Experience: heb je het echt meegemaakt?</h3>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De extra E voor Experience is in december 2022 toegevoegd. Google wil weten of de schrijver het onderwerp uit eerstehands ervaring kent. Een blog over hoe je een huis verbouwt scoort sterker als de auteur foto's deelt van zijn eigen verbouwing dan als hij algemene tips opsomt. Voor reviews, productbeoordelingen en how-to's is Experience nu vaak het zwaarstwegende signaal.
                        </p>

                        <h3 className="font-semibold text-primary text-xl mt-10 mb-4">Expertise: ken je het vak?</h3>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Expertise gaat over de diepte van jouw kennis. Een arts die schrijft over diabetes scoort sterker dan een freelance copywriter die hetzelfde onderwerp behandelt. Niet omdat de copywriter het slechter schrijft, maar omdat zijn opleiding en achtergrond niet passen bij het onderwerp. Voor sommige niches verwacht Google formele kwalificaties, voor andere voldoet aantoonbare praktijkervaring.
                        </p>

                        <h3 className="font-semibold text-primary text-xl mt-10 mb-4">Authoritativeness: noemen anderen jou?</h3>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Autoriteit is wat anderen over jou zeggen. Backlinks van vakmedia, citaten in nieuwsartikelen, vermeldingen op brancheplatforms en uitnodigingen op podia tellen allemaal mee. Een site die binnen zijn vakgebied vaak genoemd wordt als bron, krijgt meer autoriteit toegekend dan een site waar geen mens naar verwijst. Brand searches, mensen die jouw merknaam letterlijk intypen in Google, zijn ook een autoriteitssignaal.
                        </p>

                        <h3 className="font-semibold text-primary text-xl mt-10 mb-4">Trustworthiness: kunnen mensen je vertrouwen?</h3>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Trust is voor Google de belangrijkste van de vier. Het gaat om transparantie, eerlijkheid en veiligheid. Een SSL-certificaat, duidelijke contactgegevens, een reëel KvK-nummer, een terugbetalingsbeleid en eerlijke reviews zonder verzonnen sterren tellen allemaal mee. Een site zonder NAW-gegevens of met agressieve pop-ups verliest hier punten.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Is E-E-A-T een rankingfactor?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Officieel is E-E-A-T geen directe rankingfactor. Google bouwt geen meetbare E-E-A-T-score in zijn algoritme. Wat Google wel doet, is de signalen verwerken in updates zoals helpful content updates en core updates. Sites die op E-E-A-T sterk scoren komen er bij die updates beter uit dan sites die het signaal negeren.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De Quality Rater Guidelines van Google, een document van meer dan 170 pagina's, geven menselijke beoordelaars instructies om sites op E-E-A-T te scoren. Die scores trainen Google's algoritmes. Indirect bepalen ze dus mee hoe pagina's gewogen worden. Het verschil tussen wel of geen serieuze aandacht voor E-E-A-T is over 12 maanden vaak zichtbaar in posities en organisch verkeer.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Voor welke onderwerpen telt E-E-A-T het zwaarst?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Niet elke pagina krijgt dezelfde E-E-A-T-toets. Google maakt onderscheid tussen gewone content en Your Money or Your Life onderwerpen. Onder YMYL vallen alle pagina's die invloed kunnen hebben op gezondheid, financiën, juridische zaken, veiligheid of welzijn van mensen. Hypotheekadvies, medische informatie, juridisch advies en voedingsadvies zitten hier allemaal in.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Voor YMYL-onderwerpen is de lat extreem hoog. Een algemeen geschreven blog over hartmedicatie heeft tegenwoordig vrijwel geen kans tegen content geschreven door of nagekeken door een arts. Voor minder gevoelige onderwerpen, zoals een blog over hardlooproutes of een review van een koffiezetapparaat, telt E-E-A-T mee maar minder zwaar. Daar weegt Experience, het echt zelf gebruikt of bezocht hebben, het sterkste mee.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe verbeter je E-E-A-T op jouw website?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            E-E-A-T verbeter je niet door één technische ingreep. Het is werk aan content, structuur, presentatie en je merk daarbuiten. De acties hieronder leveren binnen 6 tot 12 maanden zichtbaar resultaat op.
                        </p>

                        <h3 className="font-semibold text-primary text-xl mt-10 mb-4">Voeg auteursinformatie toe</h3>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Geef elk artikel een herkenbare auteur. Plaats een korte bio onderaan de pagina met functie, kwalificaties en een link naar een uitgebreidere About-pagina of LinkedIn-profiel. Voor YMYL-content vermeld je waar nodig de academische opleiding of de jaren praktijkervaring. Een artikel over fysiotherapie geschreven door een geregistreerd fysiotherapeut wint van een anonieme blogpost.
                        </p>

                        <h3 className="font-semibold text-primary text-xl mt-10 mb-4">Werk met bronnen</h3>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Verwijs naar autoritaire bronnen waar je cijfers, claims of standpunten op baseert. Plaats die verwijzingen liefst inline, met een link naar het oorspronkelijke onderzoek of artikel. Een blog over CO2-uitstoot die naar het CBS verwijst, is sterker dan dezelfde blog zonder bron. Vermijd verwijzingen naar lage-kwaliteitssites als Wikipedia voor onderwerpen waar betere bronnen bestaan.
                        </p>

                        <h3 className="font-semibold text-primary text-xl mt-10 mb-4">Toon bewijs van resultaten</h3>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Klantcases, reviews met voor- en achternaam, screenshots van resultaten, certificeringen en partnerschappen versterken Trustworthiness. Plaats deze elementen op landingspagina's en bij belangrijke commerciële artikelen. Een marketingbureau dat ROAS-cijfers van eigen klanten laat zien, scoort sterker dan een bureau dat alleen algemene beloftes doet. Onze gids over <Link to="/blogs/seo/seo-voor-mkb-google-positie-verbeteren" className="text-accent hover:underline">SEO voor MKB</Link> gaat dieper in op de juiste opzet van conversiepagina's.
                        </p>

                        <h3 className="font-semibold text-primary text-xl mt-10 mb-4">Bouw aan autoriteit buiten je site</h3>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Autoriteit win je niet alleen op je eigen pagina's. Schrijf gastblogs voor vakmedia, laat je interviewen in branche-podcasts, deel jouw inzichten op platformen waar jouw doelgroep komt en zorg dat brancheorganisaties naar jou linken. Voor de juiste strategie rond linkbuilding lees onze blog over <Link to="/blogs/seo/backlinks-opbouwen" className="text-accent hover:underline">backlinks opbouwen</Link>.
                        </p>

                        <h3 className="font-semibold text-primary text-xl mt-10 mb-4">Houd content actueel</h3>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Verouderde content schaadt zowel Expertise als Trust. Update belangrijke artikelen minimaal elke 12 maanden, hernoteer datums waar nodig en verwijder claims die niet meer kloppen. Google ziet dat een pagina actueel is en beloont dat met meer vertrouwen. Voor de technische kant lees je in onze blog over de <Link to="/blogs/seo/technische-seo-checklist-2025-website" className="text-accent hover:underline">technische SEO checklist</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe meet je of E-E-A-T werkt?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een directe meter heeft Google niet, maar drie indirecte signalen geven goed inzicht. Eén: de positie van jouw belangrijkste YMYL-zoekwoorden in Search Console. Een stijgende lijn over 6 maanden duidt op verbeterende kwaliteitsperceptie. Twee: het aantal verwijzende domeinen, te zien in tools als Ahrefs of Semrush. Groei op dit getal volgt vaak op extra autoriteit. Drie: het volume aan brand searches, oftewel zoekopdrachten met jouw merknaam erin.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Krijg je het stevig op gang dan zie je doorgaans tussen maand 6 en 12 een duidelijke verschuiving. Pagina's die eerst op pagina 2 of 3 stonden voor concurrerende termen, schuiven door naar de eerste pagina. Tegelijk daalt jouw bounce rate omdat bezoekers blijven hangen op meer aanbevolen content.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wanneer schakel je hulp in?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            E-E-A-T verbeteren is geen eenmalig project, het is een aanpak. Voor MKB-bedrijven met serieus organisch verkeer als groeikanaal loont het vaak om een SEO-specialist mee te laten kijken. Een specialist herkent in een uur of vier waar de grootste E-E-A-T-gaten zitten en stelt een prioriteitenlijst op. Wil je weten waar voor jouw site de eerste winst ligt? Plan een gratis SEO-scan via onze <Link to="/contact" className="text-accent hover:underline">contactpagina</Link>. Geen verplichtingen, wel duidelijkheid.
                        </p>
                    </div>

                    {/* FAQ Section */}
                    <section className="mt-16 pt-12 border-t border-primary/10">
                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Veelgestelde vragen</h2>
                        <div className="space-y-6 not-prose">
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat betekent E-E-A-T precies?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">E-E-A-T staat voor Experience, Expertise, Authoritativeness en Trustworthiness. Het zijn vier signalen die Google gebruikt om de kwaliteit van content en de betrouwbaarheid van een website te beoordelen.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Is E-E-A-T een rankingfactor?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Niet direct. Google gebruikt E-E-A-T als kwaliteitsmaatstaf in de Quality Rater Guidelines. Sites die hierop sterk scoren krijgen indirect betere posities omdat de signalen meewegen in core updates en helpful content updates.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Voor welke onderwerpen telt E-E-A-T het zwaarst?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Voor Your Money or Your Life onderwerpen: gezondheid, financiën, juridisch en veiligheid. Hypotheekadvies, medische content en juridische pagina's vragen het zwaarste E-E-A-T-bewijs om bovenaan te komen.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoe toon ik Experience aan op mijn website?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Schrijf vanuit eigen ervaring, voeg foto's toe van jouw werk, klantcases met namen en bedrijven en concrete cijfers van projecten. Vermijd algemene how-to-content die overal staat. Google herkent gebrek aan eerstehands ervaring.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoe bouw ik autoriteit op voor SEO?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Door vermeldingen van andere relevante websites, gastblogs op vakmedia, citaten in nieuwsartikelen en backlinks van autoritaire sites. Werk daarnaast aan brand searches: hoe vaker mensen jouw merknaam intypen, hoe sterker jouw autoriteit.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat zijn directe acties om E-E-A-T te verbeteren?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Voeg auteursbio's toe, vermeld bronnen onderaan elk artikel, plaats reviews zichtbaar, zorg voor SSL en duidelijke contactgegevens en update oude blogs minimaal elke 12 maanden zodat Google ziet dat de informatie nog klopt.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoe meet ik of mijn E-E-A-T verbetert?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Volg jouw posities op YMYL-zoekwoorden in Search Console, kijk of het aantal verwijzende domeinen groeit in Ahrefs of Semrush en monitor brand searches. Stabiele groei op die drie punten over 6 tot 12 maanden duidt op verbeterende E-E-A-T.</p>
                            </div>
                        </div>
                    </section>

                    {/* Related Links */}
                    <section className="mt-16 pt-12 border-t border-primary/10">
                        <h3 className="text-xl font-bold text-primary mb-6">Lees ook</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <Link to="/blogs/seo/technische-seo-checklist-2025-website" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Technische SEO checklist 2026</h3>
                                <p className="text-primary/60 text-sm">Alles wat jouw site technisch nodig heeft om door Google goed gewaardeerd te worden.</p>
                            </Link>
                            <Link to="/blogs/seo/backlinks-opbouwen" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Backlinks opbouwen in 2026</h3>
                                <p className="text-primary/60 text-sm">Strategieën die autoriteit opbouwen zonder Google's regels te schenden.</p>
                            </Link>
                            <Link to="/blogs/seo/seo-voor-mkb-google-positie-verbeteren" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">SEO voor MKB</h3>
                                <p className="text-primary/60 text-sm">De stappen die elk MKB-bedrijf zet om beter gevonden te worden in Google.</p>
                            </Link>
                        </div>
                    </section>
                </div>
            </article>

            {/* Bottom CTA */}
            <section className="w-full pb-32 px-6">
                <div className="max-w-4xl mx-auto bg-primary rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
                    <h2 className="relative z-10 font-drama italic text-background text-3xl sm:text-4xl md:text-5xl mb-6">Hoger scoren in Google?</h2>
                    <p className="relative z-10 font-sans text-background/70 text-lg mb-10 max-w-xl mx-auto">We doen een gratis SEO-scan en laten zien waar voor jouw site de grootste E-E-A-T-winst zit. Geen verplichtingen, wel duidelijkheid.</p>
                    <Link to="/contact" className="relative z-10 btn-magnetic inline-flex items-center justify-center bg-accent text-background font-sans font-bold text-lg px-10 py-4 rounded-[2rem] hover:bg-accent/90 transition-colors">Neem contact op</Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
