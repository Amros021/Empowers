import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ChevronRight, User } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function BlogPostSeaBureauVergelijkenResultaten() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen selection:bg-accent/30 selection:text-dark flex flex-col bg-background">
            <Helmet>
                <title>SEA Bureau vergelijken: zo beoordeel je resultaten en rapportages (2026) | Empowers</title>
                <meta name="description" content="Hoe beoordeel je of jouw huidige SEA bureau goed presteert? Lees welke KPI's je controleert, hoe je rapportages leest en wanneer je moet switchen." />
                <link rel="canonical" href="https://www.empowers.nl/blogs/google-ads/sea-bureau-vergelijken-resultaten-rapportages" />
                <meta property="og:title" content="SEA Bureau vergelijken: zo beoordeel je resultaten en rapportages" />
                <meta property="og:description" content="KPI's die echt tellen, rode vlaggen in rapportages en wanneer je moet switchen van SEA bureau." />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://www.empowers.nl/blogs/google-ads/sea-bureau-vergelijken-resultaten-rapportages" />
                <meta property="og:image" content="https://www.empowers.nl/images/blogs/sea-bureau-vergelijken-resultaten-rapportages.jpg" />
                <meta property="article:published_time" content="2026-05-03T11:00:00+02:00" />
                <meta property="article:author" content="Empowers" />
                <meta property="article:section" content="Google Ads" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="SEA Bureau vergelijken: zo beoordeel je resultaten en rapportages" />
                <meta name="twitter:description" content="KPI's die echt tellen, rode vlaggen in rapportages en wanneer je moet switchen van SEA bureau." />

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Article",
                        "headline": "SEA Bureau vergelijken: zo beoordeel je resultaten en rapportages (2026)",
                        "description": "Hoe beoordeel je of jouw huidige SEA bureau goed presteert? Lees welke KPI's je controleert, hoe je rapportages leest en wanneer je moet switchen.",
                        "image": "https://www.empowers.nl/images/blogs/sea-bureau-vergelijken-resultaten-rapportages.jpg",
                        "datePublished": "2026-05-03T11:00:00+02:00",
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
                                    "name": "Welke KPI's tellen het zwaarst bij een SEA bureau?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "ROAS of CPA telt het zwaarst, niet CTR of impressies. Een bureau dat alleen klikgroei rapporteert maar geen omzetgroei, levert geen bewijs van rendement. Vraag altijd om kosten per geconverteerde klik gekoppeld aan jouw eigen omzetdata uit de webshop of CRM."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Wat is een normale frequentie voor SEA rapportages?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Een maandelijkse rapportage met telefonische of online toelichting is standaard. Daarbovenop hoort een live dashboard waar je elk moment de actuele cijfers ziet. Bureaus die alleen 1 PDF per maand sturen zonder live inzicht zijn niet meer van deze tijd."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Wanneer is het tijd om van SEA bureau te switchen?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Als ROAS of CPA 3 maanden achter elkaar verslechtert zonder uitleg, als rapportages oppervlakkig blijven of als jouw vragen niet binnen 24 uur beantwoord worden. Ook als jouw bureau geen toegang geeft tot het Google Ads account, is dat een rode vlag."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Wat is het verschil tussen ROAS en CPA?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "ROAS is omzet gedeeld door advertentiekosten en past bij e-commerce. CPA is kosten per actie en past bij dienstverleners die met leads werken. Goede bureaus rapporteren op de KPI die past bij jouw verdienmodel, niet op een algemene maatstaf."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Krijg je eigenaarschap over jouw Google Ads account bij een bureau?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Ja, dat hoort. Het account staat op jouw bedrijfsnaam, jouw bureau heeft beheerderstoegang. Als je wilt switchen, neem je het account mee inclusief alle data en historiek. Bureaus die hun eigen account aanmaken en daar jouw campagnes in draaien, doen het verkeerd."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Hoe weet je of jouw bureau te veel campagnes draait?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Veel campagnes met klein budget per stuk halen minder uit machine learning. Een vuistregel: minstens 30 conversies per campagne per maand. Heb je 6 campagnes met elk 5 conversies, dan zit het algoritme in een leerfase en presteert geen enkele goed."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Hoe vergelijk je twee SEA bureaus eerlijk?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Vraag beide bureaus om dezelfde 30 dagen data uit hetzelfde account aan te leveren met ROAS, CPA, conversievolume en wijzigingen. Vraag wat ze in maand 1, 2 en 3 zouden veranderen en waarom. Het bureau met de meest concrete plannen en eerlijke aannames wint, niet het bureau met de mooiste presentatie."
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
                            { "@type": "ListItem", "position": 4, "name": "SEA bureau vergelijken", "item": "https://www.empowers.nl/blogs/google-ads/sea-bureau-vergelijken-resultaten-rapportages" }
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
                        <span className="text-primary truncate">SEA bureau vergelijken</span>
                    </nav>

                    <header className="mb-16">
                        <div className="inline-block px-3 py-1 bg-accent/10 text-accent font-mono text-xs uppercase tracking-widest rounded-full mb-6">
                            Google Ads
                        </div>
                        <h1 className="font-sans font-bold text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight mb-8">
                            SEA Bureau vergelijken: zo beoordeel je resultaten en rapportages (2026)
                        </h1>
                        <div className="flex flex-wrap items-center gap-6 text-sm font-sans text-primary/60 border-y border-primary/10 py-6">
                            <div className="flex items-center gap-2"><User className="w-4 h-4" /><span>Empowers Redactie</span></div>
                            <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>3 mei 2026</span></div>
                            <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>9 minuten leestijd</span></div>
                        </div>
                    </header>

                    <figure className="w-full h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden mb-16 relative bg-primary">
                        <div className="absolute inset-0 bg-[url('/images/blogs/sea-bureau-vergelijken-resultaten-rapportages.jpg')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </figure>

                    <div className="prose prose-lg max-w-none prose-headings:text-primary prose-headings:font-bold prose-a:text-accent prose-a:underline hover:prose-a:text-accent/80">
                        <p className="text-xl leading-relaxed text-primary/80 font-medium mb-6">
                            Een SEA bureau gekozen is niet hetzelfde als een goed presterend SEA bureau. Veel ondernemers betalen maandelijks voor advertenties zonder echt te weten wat er gebeurt. Mooie rapportages zijn niet hetzelfde als mooie resultaten. In deze gids lees je welke KPI's tellen, hoe je een rapportage echt leest, welke rode vlaggen wijzen op een bureau dat niet meer levert en wanneer switchen verstandig is.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Welke KPI's tellen echt?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            CTR, impressies en aantal klikken zien er goed uit in een rapport, maar zeggen weinig over rendement. De vraag waar je elke maand antwoord op wilt is simpel: wat heeft elke euro advertentiebudget opgeleverd? Voor webshops vertaalt dat zich in ROAS, voor dienstverleners in CPA. Beide zijn alleen betrouwbaar als ze gekoppeld zijn aan jouw eigen omzetdata, niet aan Google's eigen schatting.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Voor e-commerce kijk je naar ROAS per campagne, productcategorie en device. Een gemiddelde ROAS verhult vaak dat 1 categorie alles draagt en 3 anderen verlies maken. Voor dienstverleners kijk je naar CPA per leadtype: contactaanvraag, demo, offerte. Een lead is geen lead, want een contactaanvraag is 5 euro waard en een offerte-aanvraag soms 200 euro.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Daarnaast is conversie-volume cruciaal. Goede bureaus laten conversies stijgen zonder dat ROAS of CPA verslechtert. Stijgt de ROAS maar daalt het volume, dan is jouw bureau alleen aan het afromen. Voor de basis van wat een goede ROAS is, lees onze blog over <Link to="/blogs/social-ads/goede-roas-meta-ads-benchmarks" className="text-accent hover:underline">ROAS-benchmarks</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe lees je een SEA rapportage?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een goede rapportage beantwoordt drie vragen. Wat hebben we vorige maand gedaan? Wat heeft het opgeleverd? Wat gaan we deze maand veranderen en waarom? Als één van de drie ontbreekt, mis je context. Een rapportage zonder concrete acties voor de komende periode is een achteruitkijkspiegel.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Let bij het lezen op vergelijkingen. Maand op maand zegt weinig in seizoensgevoelige branches. Jaar op jaar of voortschrijdend gemiddelde van 12 weken geeft een eerlijker beeld. Pas op met percentages zonder absolute getallen: 200 procent groei klinkt mooi, maar als basis 2 conversies was naar 6, is dat geen schaal.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Vraag altijd om de wijzigingen in het account, niet alleen om de cijfers. Welke campagnes heeft het bureau aangepast, welke biedstrategie veranderd, welke zoekwoorden toegevoegd of uitgesloten? Bureaus die "alles op autopilot" laten staan zonder maandelijkse interventies leveren over tijd lagere resultaten dan bureaus die actief sturen. Lees onze blog over <Link to="/blogs/google-ads/google-ads-beheer-checklist-bureau-controleren" className="text-accent hover:underline">een Google Ads beheer checklist</Link> voor concrete punten om door te lopen.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Welke rode vlaggen geven aan dat het bureau niet levert?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Geen toegang tot jouw eigen Google Ads account is rode vlag nummer 1. Bureaus die hun eigen account gebruiken of weigeren om beheerdersrechten te delen, beschermen vooral zichzelf. Jouw account moet op jouw bedrijfsnaam staan, het bureau heeft beheer maar jij bent eigenaar.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Vlag 2 is rapportages zonder context. Een PDF met grafieken zonder uitleg of vooruitblik laat zien dat het bureau het rapport als verplichte taak ziet, niet als gespreksstart. Vlag 3 is trage communicatie. Niet binnen 24 uur reageren op een vraag, geen vast aanspreekpunt of steeds wisselende junioren wijst op een bureau dat jouw account opvult tussen grotere klanten door.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Vlag 4 is steeds dezelfde campagnes laten draaien zonder aanpassingen. Google's algoritme verandert continu. Wat 6 maanden geleden werkte, werkt vandaag niet meer hetzelfde. Een bureau dat al een jaar dezelfde 4 campagnes met dezelfde zoekwoorden draait, mist groei. Vlag 5 is geen experiment-mentaliteit. Goede bureaus testen elke maand iets: een nieuwe campagnetype, een ander bod, een andere advertentietekst. Geen experimenten betekent geen leereffecten en geen vooruitgang.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Welke vragen stel je tijdens een evaluatie?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Plan elke 3 maanden een evaluatiegesprek. Vraag niet alleen wat er goed ging, maar ook wat er minder goed ging. Een bureau dat alleen positief praat, vertelt geen volledig verhaal. Vraag specifiek welke campagne het slechtst presteert en wat ze daarmee doen. Vraag welke kansen ze zien die niet in het huidige plan zitten. Vraag welk concurrent jullie volgen en wat je van hen kunt leren.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een sterk bureau heeft op deze vragen direct antwoord. Een zwak bureau begint te improviseren. Stilte na een vraag is informatie. Onze blog over <Link to="/blogs/google-ads/google-ads-uitbesteden-wanneer-zelf" className="text-accent hover:underline">Google Ads uitbesteden of zelf doen</Link> helpt je bepalen of je überhaupt nog uit moet besteden.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wanneer switch je van bureau?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Drie maanden achter elkaar verslechterende KPI's zonder geloofwaardige uitleg is voldoende reden voor een second opinion. Geen verklaring of een vage "het algoritme verandert" is geen antwoord. Een goed bureau weet welke specifieke campagne, welke specifieke zoekwoorden en welke specifieke audience het verschil maakten en heeft een plan om het bij te sturen.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Switch ook als jouw bedrijf is gegroeid maar het bureau niet meegroeit. Een bureau dat goed werkte op 5.000 euro per maand, kan tekortschieten op 25.000 euro per maand omdat de complexiteit toeneemt. Meer campagnes, meer kanalen en meer landen vragen meer expertise. Switch tenslotte als communicatie consistent stroef verloopt. De relatie maakt vaak het verschil tussen een 4 en een 7 in resultaat.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Voor een eerlijke vergelijking tussen bureaus, lees onze blog over <Link to="/blogs/google-ads/sea-uitbesteden-weten-voordat-kiest" className="text-accent hover:underline">SEA uitbesteden</Link>. Daarin zie je waar je voor de keuze op moet letten.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe pak je een switch aan?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Zorg eerst voor eigenaarschap. Het Google Ads account staat op jouw bedrijfsnaam, niet op die van het bureau. Bij een switch heeft het nieuwe bureau alleen beheerderstoegang nodig om verder te kunnen. Alle historische data, doelgroepen, scripts en audiences blijven van jou. Bureaus die hun eigen account hebben aangemaakt, gijzelen jouw data. Sluit een contract dat eigenaarschap vooraf vastlegt.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Plan een overlap van 2 tot 4 weken tussen oud en nieuw bureau. Het nieuwe bureau analyseert zonder iets aan te passen, zodat je de uitgangspositie kent. In week 3 starten de eerste experimenten. Verwacht in maand 1 stabilisatie, in maand 2 kleine winsten en pas in maand 3 of 4 echte groei. Wie binnen 4 weken wonderen verwacht, jaagt zichzelf opnieuw in een teleurstelling.
                        </p>
                    </div>

                    {/* FAQ Section */}
                    <section className="mt-16 pt-12 border-t border-primary/10">
                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Veelgestelde vragen</h2>
                        <div className="space-y-6 not-prose">
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Welke KPI's tellen het zwaarst bij een SEA bureau?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">ROAS of CPA, niet CTR of impressies. Een bureau dat alleen klikgroei rapporteert maar geen omzetgroei levert geen bewijs. Vraag altijd om kosten per geconverteerde klik gekoppeld aan jouw eigen omzetdata uit webshop of CRM.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat is een normale frequentie voor SEA rapportages?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Een maandelijkse rapportage met telefonische of online toelichting plus een live dashboard met actuele cijfers. Bureaus die alleen 1 PDF per maand sturen zonder live inzicht zijn niet meer van deze tijd.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wanneer is het tijd om van SEA bureau te switchen?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Als ROAS of CPA 3 maanden achter elkaar verslechtert zonder uitleg, als rapportages oppervlakkig blijven of als jouw vragen niet binnen 24 uur beantwoord worden. Geen toegang tot het Google Ads account is ook een rode vlag.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat is het verschil tussen ROAS en CPA?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">ROAS is omzet gedeeld door advertentiekosten en past bij e-commerce. CPA is kosten per actie en past bij dienstverleners die met leads werken. Goede bureaus rapporteren op de KPI die past bij jouw verdienmodel.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Krijg je eigenaarschap over jouw Google Ads account bij een bureau?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Ja, dat hoort. Account op jouw bedrijfsnaam, bureau heeft beheerderstoegang. Bij een switch neem je alle data mee. Bureaus die hun eigen account aanmaken en daar jouw campagnes in draaien, doen het verkeerd.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoe weet je of jouw bureau te veel campagnes draait?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Veel campagnes met klein budget per stuk halen minder uit machine learning. Vuistregel: minstens 30 conversies per campagne per maand. Heb je 6 campagnes met elk 5 conversies, dan zit het algoritme in een leerfase en presteert geen enkele goed.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoe vergelijk je twee SEA bureaus eerlijk?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Vraag beide bureaus om dezelfde 30 dagen data uit hetzelfde account met ROAS, CPA, conversievolume en wijzigingen. Vraag wat ze in maand 1, 2 en 3 zouden veranderen en waarom. Het bureau met de meest concrete plannen wint.</p>
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
                            <Link to="/blogs/google-ads/google-ads-beheer-checklist-bureau-controleren" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Google Ads beheer checklist</h3>
                                <p className="text-primary/60 text-sm">Concrete checklist om jouw huidige Google Ads bureau te controleren en kansen te zien.</p>
                            </Link>
                            <Link to="/blogs/google-ads/meet-roi-google-ads-campagne" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">ROI van Google Ads meten</h3>
                                <p className="text-primary/60 text-sm">Welke meetopzet heb je nodig om eerlijk te oordelen over jouw bureau?</p>
                            </Link>
                        </div>
                    </section>
                </div>
            </article>

            <section className="w-full pb-32 px-6">
                <div className="max-w-4xl mx-auto bg-primary rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
                    <h2 className="relative z-10 font-drama italic text-background text-3xl sm:text-4xl md:text-5xl mb-6">Twijfels over jouw huidige bureau?</h2>
                    <p className="relative z-10 font-sans text-background/70 text-lg mb-10 max-w-xl mx-auto">We doen een gratis second opinion op jouw Google Ads account. Geen verkoopgesprek, wel duidelijkheid over of jouw bureau echt levert wat het belooft.</p>
                    <Link to="/contact" className="relative z-10 btn-magnetic inline-flex items-center justify-center bg-accent text-background font-sans font-bold text-lg px-10 py-4 rounded-[2rem] hover:bg-accent/90 transition-colors">Neem contact op</Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
