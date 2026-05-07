import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ChevronRight, User } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function BlogPostLinkedinAdsRapportageMetricsEcht() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen selection:bg-accent/30 selection:text-dark flex flex-col bg-background">
            <Helmet>
                <title>LinkedIn Ads rapportage: welke metrics zijn echt belangrijk? | Empowers</title>
                <meta name="description" content="Niet elke metric in LinkedIn Campaign Manager telt even zwaar. Lees welke cijfers je rapportage moet aansturen en welke je beter negeert." />
                <link rel="canonical" href="https://www.empowers.nl/blogs/social-ads/linkedin-ads-rapportage-metrics-echt" />
                <meta property="og:title" content="LinkedIn Ads rapportage: welke metrics zijn echt belangrijk?" />
                <meta property="og:description" content="Een praktische gids om door de cijferbrij in Campaign Manager te navigeren naar wat er werkelijk toe doet." />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://www.empowers.nl/blogs/social-ads/linkedin-ads-rapportage-metrics-echt" />
                <meta property="og:image" content="https://www.empowers.nl/images/blogs/linkedin-ads-rapportage-metrics-echt.jpg" />
                <meta property="article:published_time" content="2026-05-07" />
                <meta property="article:author" content="Empowers" />
                <meta property="article:section" content="Social Ads" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="LinkedIn Ads rapportage: welke metrics zijn echt belangrijk?" />
                <meta name="twitter:description" content="Welke metrics in LinkedIn Campaign Manager je rapportage moeten aansturen, en welke je beter negeert." />

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Article",
                        "headline": "LinkedIn Ads rapportage: welke metrics zijn echt belangrijk?",
                        "description": "Praktische gids voor zinvolle LinkedIn Ads rapportage. Welke cijfers ertoe doen, welke valkuilen er zijn en hoe je rapporten leesbaar maakt voor de directie.",
                        "image": "https://www.empowers.nl/images/blogs/linkedin-ads-rapportage-metrics-echt.jpg",
                        "datePublished": "2026-05-07T15:00:00+02:00",
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
                                    "name": "Welke LinkedIn Ads metrics zijn het belangrijkst?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "De belangrijkste metrics hangen af van je doel. Voor lead generation tellen vooral conversiekost per lead (CPL), conversion rate en de uiteindelijke leadkwaliteit (sales-feedback). Voor brand awareness kijk je naar reach, frequency, CTR en top-of-funnel ontwikkeling per maand. CPM en CPC zijn ondersteunende metrics die context geven, geen sturingsmetrics."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Wat is een goede CTR op LinkedIn?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Voor Sponsored Content ligt een gezonde CTR doorgaans tussen 0,5 en 1 procent. Hoger dan 1 procent is uitzonderlijk en duidt vaak op een bijzonder goede creative-doelgroep match. Onder de 0,3 procent is een signaal dat je creative niet werkt voor de doelgroep, en daar pak je dan ook eerst op aan."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Welke metrics rapporteer je het beste richting de directie?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Directies hebben weinig met klikratio's. Rapporteer in business-termen: aantal opgeleverde MQL's, sales-geaccepteerde leads, pipeline-impact en uiteindelijk de gewonnen deals. Houd één LinkedIn-specifieke metric als context (bijvoorbeeld CPL of conversion rate) zodat optimalisaties uitgelegd kunnen worden, maar laat de operationele cijfers in een appendix."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Hoe meet je de echte ROI van LinkedIn Ads?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Echte ROI meet je door LinkedIn-leads te koppelen aan CRM-data. Bij een lange salescyclus heb je een attributiemodel nodig dat zowel first-touch als multi-touch laat zien. Conversion API koppelen of UTM-parameters strak doorzetten naar je CRM is de basis. Zonder die koppeling rapporteer je over leadcijfers, niet over rendement."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Welke metrics geven een vals beeld?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Engagement-metrics zoals likes, reacties en delingen zien er goed uit op een rapport, maar voorspellen zelden conversie. Hetzelfde geldt voor video-views: een view in LinkedIn telt vanaf twee seconden, dus drukke feed-impressies kunnen je videoview-aantallen kunstmatig opblazen. Stuur niet op deze cijfers, gebruik ze hooguit als achtergrondinformatie."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Hoe vaak moet je LinkedIn Ads rapporteren?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Operationeel kijk je wekelijks naar de cijfers. Maandelijks rapporteer je richting de business, en eens per kwartaal trek je de strategische conclusies. Dagelijks naar de cijfers staren leidt tot impulsieve aanpassingen die het algoritme verstoren. Bouw discipline in en weersta de neiging tot continue check-ins."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Wat is een gezond CPM op LinkedIn?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Voor Sponsored Content ligt CPM doorgaans tussen 25 en 70 euro, afhankelijk van seniority en branche. Voor C-level beslissers in financiële sectoren is een CPM boven de 80 euro normaal. Vergelijk je CPM nooit zonder context: een hoge CPM kan een teken zijn van scherpe targeting, niet van slechte performance."
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
                            { "@type": "ListItem", "position": 4, "name": "LinkedIn Ads rapportage", "item": "https://www.empowers.nl/blogs/social-ads/linkedin-ads-rapportage-metrics-echt" }
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
                        <Link to="/blogs/social-ads" className="hover:text-accent transition-colors">Social Ads</Link>
                        <ChevronRight className="w-3 h-3" />
                        <span className="text-primary truncate">LinkedIn Ads rapportage</span>
                    </nav>

                    <header className="mb-16">
                        <div className="inline-block px-3 py-1 bg-accent/10 text-accent font-mono text-xs uppercase tracking-widest rounded-full mb-6">
                            Social Ads
                        </div>
                        <h1 className="font-sans font-bold text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight mb-8">
                            LinkedIn Ads rapportage: welke metrics zijn echt belangrijk?
                        </h1>
                        <div className="flex flex-wrap items-center gap-6 text-sm font-sans text-primary/60 border-y border-primary/10 py-6">
                            <div className="flex items-center gap-2"><User className="w-4 h-4" /><span>Empowers Redactie</span></div>
                            <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>7 mei 2026</span></div>
                            <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>9 minuten leestijd</span></div>
                        </div>
                    </header>

                    <figure className="w-full h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden mb-16 relative bg-primary">
                        <div className="absolute inset-0 bg-[url('/images/blogs/linkedin-ads-rapportage-metrics-echt.jpg')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </figure>

                    <div className="prose prose-lg max-w-none prose-headings:text-primary prose-headings:font-bold prose-a:text-accent prose-a:underline hover:prose-a:text-accent/80">
                        <p className="text-xl leading-relaxed text-primary/80 font-medium mb-6">
                            Open Campaign Manager en je verdrinkt in cijfers. Impressies, klikken, CTR, CPM, CPC, conversies, video-views, frequentie. Wat tellen die getallen eigenlijk? En welke laat je beter links liggen omdat ze je sturen in de verkeerde richting? In deze blog een praktische rondleiding door de metrics die er werkelijk toe doen op LinkedIn, en hoe je rapportage maakt waar je directie wel mee uit de voeten kan.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Begin bij het doel, niet bij de cijfers</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Welke metrics belangrijk zijn hangt volledig af van wat je probeert te bereiken. Een brand awareness-campagne stuur je op andere cijfers dan een lead generation-campagne. Bij awareness telt bereik en herhaling; bij leads telt kost per lead en uiteindelijk de pipeline-impact. Wie alles probeert te meten, stuurt op niets.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Spreek vooraf af welke metric jouw noordster is voor deze specifieke campagne. Schrijf het op. Hang het naast je scherm. Elke optimalisatie die je vervolgens overweegt, weeg je tegen die noordster. Zonder dat verankerpunt verzand je in cijfers die elkaar tegenspreken. Hoe je een doel vertaalt naar een meetstrategie is iets dat we eerder uitwerkten in onze blog over <Link to="/blogs/strategie/online-marketing-strategie-mkb" className="text-accent hover:underline">een werkende online marketing strategie voor MKB</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">De vijf metrics die er bij lead generation echt toe doen</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Voor een typische LinkedIn lead generation-campagne kijk je primair naar vijf cijfers. Eén: het aantal gegenereerde leads, de absolute output. Twee: de kost per lead (CPL), je sturingscijfer. Drie: de conversion rate, het percentage klikkers dat daadwerkelijk converteert. Vier: de leadkwaliteit, opgehaald via je sales-team. Vijf: pipeline-impact, het percentage leads dat in serieuze deals terechtkomt.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De eerste drie haal je rechtstreeks uit Campaign Manager. De laatste twee komen uit je CRM en sales-overleg. Zonder die koppeling rapporteer je halfwerk. Een CPL van 40 euro die naar 10 procent winrate gaat is fundamenteel anders dan een CPL van 25 euro waarvan niets oppikt. Die context bepaalt of je campagne wint of niet, niet het cijfer in Campaign Manager zelf.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">CTR en CPM: nuttig, maar ondergeschikt</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            CTR (klikratio) en CPM (kosten per duizend impressies) zijn diagnostische metrics. Ze vertellen je waarom iets werkt of juist niet. Een dalende CTR bij stabiele CPM betekent dat je creative aan kracht inboet. Een stijgende CPM bij stabiele CTR duidt op toenemende veilingdruk in jouw doelgroep. Beide zijn signalen om op te volgen, geen primaire stuurmetrics.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een gezonde CTR voor Sponsored Content ligt doorgaans tussen 0,5 en 1 procent. Daar valt geen wereldrecord mee te breken, want LinkedIn is geen entertainmentplatform. Onder de 0,3 procent is een signaal dat je creative te zwak is voor je doelgroep. Verder kijken naar CTR in vergelijking met andere platformen (zoals Meta of Google) heeft weinig zin, omdat de gebruikerscontext volledig anders is. Hoe LinkedIn zich verhoudt tot Google leggen we uit in <Link to="/blogs/social-ads/linkedin-ads-vs-google-ads" className="text-accent hover:underline">deze vergelijking van LinkedIn Ads versus Google Ads</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">De vanity-metrics die je beter negeert</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Likes en reacties ogen prachtig in een rapport. Ze zeggen alleen weinig over wat campagnes opleveren. Een advertentie die honderd likes krijgt maar geen lead converteert is duurder uitvallen dan een advertentie zonder enige interactie die wel converteert. Engagement is hooguit een hint dat je creative resoneert met de doelgroep. Het is geen succesmaat.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Hetzelfde geldt voor video-views. LinkedIn telt een view vanaf twee seconden auto-play. Iemand die door de feed scrollt en een halve seconde langs jouw video swipet kan al ge-impacteerd lijken volgens deze definitie. Wil je echte aandacht meten, kijk dan naar 'video views to 25%, 50%, 75% of 100%' en bovenal naar de verhouding tussen views en clicks. Veel views zonder clicks is een teken dat je video kijkers vasthoudt zonder ze tot actie te bewegen.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Frequency: de stille saboteur</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een metric die te weinig aandacht krijgt is frequency, het gemiddeld aantal keer dat één persoon je advertentie ziet. Loopt frequency boven de zes, dan is je doelgroep verzadigd en draaien je campagnes effectief op herhaling tegen mensen die niet meer reageren. CPM stijgt, CTR daalt, en zonder dat je het doorhebt eet de campagne budget op zonder rendement.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Check frequency wekelijks. Komt hij boven de zes? Dan is het tijd voor nieuwe creative of een uitbreiding van je doelgroep. Beide werken, maar nieuwe creative geeft doorgaans sneller resultaat. Een populair misverstand is dat frequency vooral bij awareness-campagnes telt. In werkelijkheid speelt het bij lead generation net zo hard, omdat een doelgroep die jouw boodschap acht keer heeft gezien zonder klikken niet meer overtuigd gaat worden.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Echte ROI meten: koppeling met CRM</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Het ultieme rapport is geen Campaign Manager-export, maar een CRM-overzicht waarin LinkedIn-leads tot aan gewonnen deals te volgen zijn. Daar hoort een werkende attributie bij. Op LinkedIn werkt dit via de Conversion API, in combinatie met UTM-parameters die je leadgegevens vergezellen tot in je CRM. Zonder die koppeling rapporteer je in lead-aantallen, niet in omzet.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Voor B2B met een lange salescyclus is dat geen overbodige luxe. Een lead die zes maanden later tot een contract leidt zou in een naive rapportage helemaal niet aan LinkedIn worden toegekend. Met een goede attributie wel. Dat verandert het beeld van wat campagnes opleveren ingrijpend, vaak in positieve zin. Als je nu nog op klikken stuurt, sluit je zicht op je echte rendement actief af.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe rapporteer je richting de directie?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een directie heeft geen interesse in CTR of CPM. Wat zij willen weten: hoeveel leads, wat is de kwaliteit, hoeveel pipeline, hoeveel omzet. Bouw je rapport in business-termen. Begin met de uitkomst (gewonnen deals), werk vervolgens terug naar de input (besteed budget). Plaats de operationele cijfers in een appendix voor wie graag dieper graaft.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een goede LinkedIn-rapportage richting MT past op één pagina. Maandtotaal: investering, opgeleverde MQL's, sales-geaccepteerde leads, pipeline-waarde en gewonnen omzet uit eerdere campagnes. Daaronder één visualisatie van trend over de afgelopen zes maanden. Daarna één regel context per opvallende ontwikkeling. Klaar. Wat eronder ligt is werk voor het marketingteam, niet voor de directie.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">De fouten die we het vaakst zien</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Drie fouten domineren bij LinkedIn-rapportage. De eerste: rapporteren op alle metrics tegelijk zonder hiërarchie. Iedereen verdrinkt in cijfers en niemand weet of het goed gaat. Kies hooguit vijf KPI's en houd daaraan vast. Voeg desnoods context toe in een toelichting, maar overlaad je rapport niet met data.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De tweede: alleen vooruitkijkende cijfers tonen. Hoeveel leads kwamen er binnen, wat was de CPL. Niemand ziet wat ervan terechtkwam. Bouw altijd een terugkijk-component in: wat hebben de leads van twee, drie of zes maanden geleden uiteindelijk opgeleverd? Dat geeft de leadgeneratie van vandaag context.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De derde: maandelijkse cijfers vergelijken zonder seizoens- of branche-context. Een dip in juli is niet automatisch een prestatieprobleem. Een piek in september is niet automatisch verdienste van betere campagnes. Vergelijk altijd jaar-op-jaar, niet maand-op-maand, om een eerlijker beeld te krijgen.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat een goede LinkedIn-rapportage oplevert</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Bedrijven die hun LinkedIn-rapportage goed inrichten hebben drie voordelen. Beslissingen worden sneller genomen omdat de cijfers helder zijn. Investeringen in LinkedIn worden makkelijker verdedigd richting MT omdat de impact zichtbaar is. En optimalisaties zijn doelgerichter omdat je weet welke knop je moet draaien.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De winst zit in selectie. Wat je niet rapporteert is net zo belangrijk als wat je wel rapporteert. Wil je dat we mét je meekijken naar je huidige rapportage en aanwijzen waar de blinde vlekken zitten? Plan een gesprek via onze <Link to="/contact" className="text-accent hover:underline">contactpagina</Link>. We doorlopen je dashboards, je CRM-koppeling en je MT-rapport, en wijzen aan waar de winst voor jou zit.
                        </p>
                    </div>

                    <section className="mt-16 pt-12 border-t border-primary/10">
                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Veelgestelde vragen</h2>
                        <div className="space-y-6 not-prose">
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Welke LinkedIn Ads metrics zijn het belangrijkst?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">De belangrijkste metrics hangen af van je doel. Voor lead generation tellen vooral conversiekost per lead (CPL), conversion rate en de uiteindelijke leadkwaliteit (sales-feedback). Voor brand awareness kijk je naar reach, frequency, CTR en top-of-funnel ontwikkeling per maand. CPM en CPC zijn ondersteunende metrics die context geven, geen sturingsmetrics.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat is een goede CTR op LinkedIn?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Voor Sponsored Content ligt een gezonde CTR doorgaans tussen 0,5 en 1 procent. Hoger dan 1 procent is uitzonderlijk en duidt vaak op een bijzonder goede creative-doelgroep match. Onder de 0,3 procent is een signaal dat je creative niet werkt voor de doelgroep, en daar pak je dan ook eerst op aan.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Welke metrics rapporteer je het beste richting de directie?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Directies hebben weinig met klikratio's. Rapporteer in business-termen: aantal opgeleverde MQL's, sales-geaccepteerde leads, pipeline-impact en uiteindelijk de gewonnen deals. Houd één LinkedIn-specifieke metric als context (bijvoorbeeld CPL of conversion rate) zodat optimalisaties uitgelegd kunnen worden, maar laat de operationele cijfers in een appendix.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoe meet je de echte ROI van LinkedIn Ads?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Echte ROI meet je door LinkedIn-leads te koppelen aan CRM-data. Bij een lange salescyclus heb je een attributiemodel nodig dat zowel first-touch als multi-touch laat zien. Conversion API koppelen of UTM-parameters strak doorzetten naar je CRM is de basis. Zonder die koppeling rapporteer je over leadcijfers, niet over rendement.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Welke metrics geven een vals beeld?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Engagement-metrics zoals likes, reacties en delingen zien er goed uit op een rapport, maar voorspellen zelden conversie. Hetzelfde geldt voor video-views: een view in LinkedIn telt vanaf twee seconden, dus drukke feed-impressies kunnen je videoview-aantallen kunstmatig opblazen. Stuur niet op deze cijfers, gebruik ze hooguit als achtergrondinformatie.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoe vaak moet je LinkedIn Ads rapporteren?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Operationeel kijk je wekelijks naar de cijfers. Maandelijks rapporteer je richting de business, en eens per kwartaal trek je de strategische conclusies. Dagelijks naar de cijfers staren leidt tot impulsieve aanpassingen die het algoritme verstoren. Bouw discipline in en weersta de neiging tot continue check-ins.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat is een gezond CPM op LinkedIn?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Voor Sponsored Content ligt CPM doorgaans tussen 25 en 70 euro, afhankelijk van seniority en branche. Voor C-level beslissers in financiële sectoren is een CPM boven de 80 euro normaal. Vergelijk je CPM nooit zonder context: een hoge CPM kan een teken zijn van scherpe targeting, niet van slechte performance.</p>
                            </div>
                        </div>
                    </section>

                    <section className="mt-16 pt-12 border-t border-primary/10">
                        <h3 className="text-xl font-bold text-primary mb-6">Lees ook</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <Link to="/blogs/social-ads/linkedin-ads-optimaliseren-stap-stap" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">LinkedIn Ads optimaliseren</h3>
                                <p className="text-primary/60 text-sm">Stap voor stap je rendement verhogen zonder de leerfase om zeep te helpen.</p>
                            </Link>
                            <Link to="/blogs/social-ads/linkedin-abm-account-based-marketing" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">LinkedIn ABM</h3>
                                <p className="text-primary/60 text-sm">Account-Based Marketing op LinkedIn met sales en marketing in lockstep.</p>
                            </Link>
                            <Link to="/blogs/social-ads/linkedin-ads-vs-google-ads" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">LinkedIn Ads vs Google Ads</h3>
                                <p className="text-primary/60 text-sm">Wat het verschil maakt, en wanneer welk platform het beste past bij jouw B2B-doelen.</p>
                            </Link>
                        </div>
                    </section>

                </div>
            </article>

            <section className="w-full pb-32 px-6">
                <div className="max-w-4xl mx-auto bg-primary rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
                    <h2 className="relative z-10 font-drama italic text-background text-3xl sm:text-4xl md:text-5xl mb-6">
                        Een LinkedIn-rapportage die wel werkt?
                    </h2>
                    <p className="relative z-10 font-sans text-background/70 text-lg mb-10 max-w-xl mx-auto">
                        Wij richten LinkedIn-rapportages in die voor het MT zinvol zijn en voor het marketingteam stuurinformatie geven. Plan een vrijblijvend gesprek en we wijzen aan waar jouw blinde vlekken zitten.
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
