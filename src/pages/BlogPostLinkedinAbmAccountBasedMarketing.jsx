import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ChevronRight, User } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function BlogPostLinkedinAbmAccountBasedMarketing() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen selection:bg-accent/30 selection:text-dark flex flex-col bg-background">
            <Helmet>
                <title>LinkedIn ABM: Account-Based Marketing effectief inzetten | Empowers</title>
                <meta name="description" content="LinkedIn is de scherpste plek voor Account-Based Marketing. Lees hoe je accountlijsten bouwt, campagnes opzet en sales en marketing samen laat optrekken." />
                <link rel="canonical" href="https://www.empowers.nl/blogs/social-ads/linkedin-abm-account-based-marketing" />
                <meta property="og:title" content="LinkedIn ABM: Account-Based Marketing effectief inzetten" />
                <meta property="og:description" content="Hoe je in LinkedIn een ABM-aanpak opzet die past bij een lange B2B-cyclus, zonder dat je in dure tools verzandt." />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://www.empowers.nl/blogs/social-ads/linkedin-abm-account-based-marketing" />
                <meta property="og:image" content="https://www.empowers.nl/images/blogs/linkedin-abm-account-based-marketing.jpg" />
                <meta property="article:published_time" content="2026-05-07T11:00:00+02:00" />
                <meta property="article:author" content="Empowers" />
                <meta property="article:section" content="Social Ads" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="LinkedIn ABM: Account-Based Marketing effectief inzetten" />
                <meta name="twitter:description" content="Een praktische ABM-aanpak in LinkedIn voor B2B-bedrijven met een lange salescyclus." />

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Article",
                        "headline": "LinkedIn ABM: Account-Based Marketing effectief inzetten",
                        "description": "Een praktische ABM-aanpak in LinkedIn: van accountlijst tot campagnes en meetbare resultaten.",
                        "image": "https://www.empowers.nl/images/blogs/linkedin-abm-account-based-marketing.jpg",
                        "datePublished": "2026-05-07T11:00:00+02:00",
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
                                    "name": "Wat is Account-Based Marketing op LinkedIn?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Account-Based Marketing op LinkedIn betekent dat je een vooraf vastgestelde lijst van bedrijven targeting krijgt in plaats van een brede demografische doelgroep. Je upload een accountlijst, LinkedIn matcht die met bedrijfspagina's, en de advertenties worden alleen getoond aan medewerkers van die specifieke organisaties."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Hoeveel bedrijven moeten op mijn accountlijst staan?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "LinkedIn vereist minimaal 300 matched bedrijven om een campagne te kunnen draaien, met een aanbeveling om naar 1.000 plus te gaan voor goede targeting. Voor zinvol bereik werkt een lijst van 5.000 tot 10.000 bedrijven het beste, omdat dan voldoende medewerkers per bedrijf in de doelgroep zitten. Voor zeer specifieke high-value accounts werkt een kleinere lijst alleen als je tegelijkertijd persoonlijke benadering vanuit sales meedraait."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Welke LinkedIn-formats werken het beste voor ABM?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Sponsored Content voor brand awareness binnen target accounts en Lead Gen Forms voor conversie werken doorgaans het beste. Conversation Ads zijn geschikt zodra je accountlijst groter dan 500 medewerkers oplevert. Combineer formats: gebruik Sponsored Content om eerst herkenbaarheid op te bouwen, dan een Lead Gen Form of Conversation Ad om de relatie te verdiepen."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Hoe meet je het succes van een ABM-campagne?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "ABM meet je niet op clicks of CPL, maar op accountniveau. Belangrijke metrics zijn: aantal Marketing Qualified Accounts, engagement-niveau per account (hoeveel mensen binnen een bedrijf hebben jouw content gezien), pipeline-impact en uiteindelijk de gewonnen deals binnen de target lijst. LinkedIn's Account Insights laat per bedrijf zien hoeveel medewerkers betrokken zijn."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Wat is het verschil tussen ABM en gewone B2B-targeting?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Gewone B2B-targeting kiest doelgroepen op basis van demografische kenmerken zoals functie, branche of bedrijfsgrootte. ABM kiest specifieke bedrijven en richt zich daar volledig op. Het verschil zit in de aanpak: bij ABM tellen sales en marketing samen welke accounts ertoe doen en bouwen daar gezamenlijk omheen, in plaats van leads via een trechter te jagen."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Wat kost een ABM-campagne op LinkedIn?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "ABM-campagnes op LinkedIn kosten doorgaans meer per CPM of CPC dan brede B2B-campagnes, omdat je een specifieke doelgroep aanspreekt waar veel concurrentie op zit. Reken op CPM's tussen 30 en 80 euro voor Sponsored Content. Voor een serieus ABM-programma met meerdere formats en accounts adviseren wij een minimum maandbudget rond de 3.000 euro."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Heb je sales nodig om ABM te laten werken?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Ja. ABM werkt alleen als marketing en sales op dezelfde accountlijst sturen. Marketing bouwt herkenbaarheid en levert engagement signalen, sales gebruikt die signalen voor outreach via Sales Navigator of e-mail. Zonder sales-betrokkenheid blijven leads in de inbox hangen omdat niemand het accountniveau bewaakt."
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
                            { "@type": "ListItem", "position": 4, "name": "LinkedIn ABM", "item": "https://www.empowers.nl/blogs/social-ads/linkedin-abm-account-based-marketing" }
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
                        <span className="text-primary truncate">LinkedIn ABM</span>
                    </nav>

                    <header className="mb-16">
                        <div className="inline-block px-3 py-1 bg-accent/10 text-accent font-mono text-xs uppercase tracking-widest rounded-full mb-6">
                            Social Ads
                        </div>
                        <h1 className="font-sans font-bold text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight mb-8">
                            LinkedIn ABM: Account-Based Marketing effectief inzetten
                        </h1>
                        <div className="flex flex-wrap items-center gap-6 text-sm font-sans text-primary/60 border-y border-primary/10 py-6">
                            <div className="flex items-center gap-2"><User className="w-4 h-4" /><span>Empowers Redactie</span></div>
                            <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>7 mei 2026</span></div>
                            <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>9 minuten leestijd</span></div>
                        </div>
                    </header>

                    <figure className="w-full h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden mb-16 relative bg-primary">
                        <div className="absolute inset-0 bg-[url('/images/blogs/linkedin-abm-account-based-marketing.jpg')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </figure>

                    <div className="prose prose-lg max-w-none prose-headings:text-primary prose-headings:font-bold prose-a:text-accent prose-a:underline hover:prose-a:text-accent/80">
                        <p className="text-xl leading-relaxed text-primary/80 font-medium mb-6">
                            Account-Based Marketing klinkt vaak zwaarder dan het is. In de kern komt het neer op één keuze: jij wilt deze veertig bedrijven binnenhalen, niet zoveel mogelijk leads van willekeurige bedrijven. LinkedIn is voor die aanpak het meest geschikte advertentiekanaal. Je weet niet alleen wie er werkt, maar ook wie er wat doet. In deze blog lees je hoe je een ABM-aanpak in LinkedIn opzet, welke fouten je voorkomt en wanneer het echt levert wat het belooft.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat ABM precies is (en wat het niet is)</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Account-Based Marketing draait om accounts, niet om individuen. Je begint met een lijst bedrijven die je als klant wilt hebben. Op basis van die lijst bouwt marketing herkenbaarheid en levert sales de persoonlijke vervolgstappen. Het is geen tactiek maar een gezamenlijk model. Als marketing een lijst bouwt en sales geen idee heeft welke bedrijven daarop staan, heb je geen ABM. Dan heb je een dure niche-campagne.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Het verschil met klassieke B2B-targeting zit in de invalshoek. Bij gewone targeting kies je een functietitel (bijvoorbeeld marketingmanager) bij een bepaalde bedrijfsgrootte en hoopt dat de juiste mensen je advertentie zien. Bij ABM zeg je: deze 200 bedrijven zijn relevant en alle anderen niet. De relevantie wordt scherper, het bereik kleiner. Als je dat goed combineert met een sales-team dat dezelfde accounts bewerkt, heb je een vliegwiel.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wanneer ABM op LinkedIn werkt</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Niet elke B2B-organisatie heeft baat bij ABM. Het kost relatief veel voorbereiding en is duurder per impressie dan een brede campagne. ABM rendeert vooral bij bedrijven met een hoge gemiddelde dealwaarde, een lange salescyclus van enkele maanden of meer en een redelijk overzichtelijk landschap aan target accounts. Denk aan SaaS-bedrijven die enterprise verkopen, consultancies met traject-opdrachten of dienstverleners voor de financiële sector.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Voor producten met een korte transactiecyclus of een laagdrempelige prijs is ABM overkill. Daar werken brede campagnes met scherpe targeting beter, omdat de kosten per impressie lager liggen en de schaal de doorslag geeft. Een goede vuistregel: als de gemiddelde deal minder dan 5.000 euro waard is, kijk dan eerst naar andere paden voordat je in ABM investeert.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Zo bouw je een accountlijst</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            LinkedIn werkt met Matched Audiences en specifiek met de optie Company List. Je upload een CSV met bedrijfsnamen en LinkedIn matcht die met haar eigen bedrijfspagina's. Het matchpercentage ligt zelden boven de 70 procent, dus reken op een doelgroep die kleiner uitvalt dan je lijst doet vermoeden. Een lijst van 2.000 namen levert bijvoorbeeld vaak rond de 1.400 matches op.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Voor de minimale werking eist LinkedIn 300 matched bedrijven, met de aanbeveling om naar 1.000 plus te gaan voor zinvolle targeting. In de praktijk werken lijsten van 5.000 tot 10.000 bedrijven het beste, omdat je dan voldoende medewerkers per account in de doelgroep krijgt. Voor zeer specifieke high-value accounts (denk aan een lijst van 50 ondernemingen) werkt de standaard advertentie-route niet meer. Daar pak je beter Sales Navigator en directe outreach, eventueel ondersteund door wat persoonlijke video-content op je bedrijfspagina.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Bouw je lijst niet handmatig vanuit niets. Combineer bronnen: bestaande klanten van vergelijkbare omvang, lijsten met look-alike accounts uit je CRM, branchevereniging-databases en als je een Sales Navigator-abonnement hebt de gefilterde zoekresultaten daar. Hoe je dat scherp krijgt zonder verzanden in lijstjes leggen we uit in onze blog over <Link to="/blogs/social-ads/linkedin-ads-beginners-eerste-b2b" className="text-accent hover:underline">LinkedIn Ads voor beginners</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Welke advertentie-formats werken het beste?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een ABM-campagne in LinkedIn vraagt om meerdere formats die elkaar versterken. Begin met Sponsored Content om herkenbaarheid op te bouwen. Mensen binnen de target accounts moeten meerdere keren langs je naam komen voordat ze klaar zijn voor een gesprek. Pas daarna kom je met Lead Gen Forms of Conversation Ads die de relatie verdiepen. Eén format bouwt zelden een ABM-machine.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Hoe Sponsored Content en Message Ads zich tot elkaar verhouden hebben we eerder beschreven in onze <Link to="/blogs/social-ads/linkedin-sponsored-content-vs-message" className="text-accent hover:underline">vergelijking van Sponsored Content versus Message Ads</Link>. Wat goed werkt: per branche of bedrijfsgrootte een aparte adset met eigen creative. Een case voor logistieke bedrijven landt anders dan dezelfde case voor consultancies. Personaliseer waar het kan, maar pas op dat je niet in vier richtingen tegelijk gaat zonder schaal.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Sales en marketing op één lijn</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            ABM zonder sales-betrokkenheid is geld weggooien. Het mooie van het model is dat marketing engagement signalen levert die sales kan oppikken. Als drie medewerkers van een target account binnen twee weken jouw whitepaper hebben gedownload, is dat sales-context die anders nooit boven water komt. Maar dan moet sales die data wel kunnen zien. En weten wat ermee te doen.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Praktische afspraken die wij standaard maken bij klanten: een wekelijkse sync tussen marketing en sales over de top-25 accounts, een gedeeld dashboard met engagement per account, en een handover-protocol zodra een account een drempel passeert. Wat die drempel is verschilt per bedrijf. Soms is het drie content-views door drie verschillende personen. Soms is het één Lead Gen Form-conversie van een beslisser. Wat het ook is, het moet vooraf vastliggen.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe meet je succes?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De grote denkfout bij ABM is meten op klikken en CPL. Daarmee mis je waar het over gaat. ABM meet je op accountniveau. Hoeveel target accounts hebben minstens één keer iets met jou gedaan? Hoeveel daarvan komen in pipeline? Welke deals worden uiteindelijk gewonnen uit de oorspronkelijke lijst?
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            LinkedIn levert hier waardevolle data via Account Insights binnen Campaign Manager. Per target account zie je hoeveel medewerkers betrokken zijn, welke content ze hebben gezien en hoe dat verandert in de tijd. Combineer dat met je CRM-data en je hebt voor het eerst zicht op echte impact. Een ander signaal is groei in branded search. Als je ABM werkt, gaan mensen binnen target accounts jouw bedrijfsnaam zoeken. Dat verkeer is meetbaar in <Link to="/blogs/google-ads/branded-vs-non-branded-campagnes" className="text-accent hover:underline">je Google Ads-account via branded search</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">De meest gemaakte fouten</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Drie missers domineren bij bedrijven die zelf met ABM beginnen. De eerste: een lijst die te klein is om mee te starten. Adverteren op 200 bedrijven betekent dat je doelgroep mogelijk uit een paar honderd mensen bestaat. Het algoritme krijgt geen ruimte om te leren en de kosten per impressie schieten omhoog. Begin breder, schaal terug zodra je signalen ziet.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De tweede: generieke creative voor elke account. Een ABM-aanpak vraagt om personalisatie. Niet per bedrijf (dat is onhoudbaar), wel per branche of segment. Een advertentie die zegt 'Wij helpen B2B-bedrijven groeien' werkt slechter dan een advertentie die zegt 'Zo helpen wij Nederlandse SaaS-bedrijven hun churn halveren'. Concreet en herkenbaar voor een specifieke groep.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De derde: marketing en sales die langs elkaar werken. Marketing levert leads, sales klaagt over de kwaliteit, marketing wijst naar de cijfers. Niemand kijkt naar accountniveau. Zonder gedeelde verantwoordelijkheid voor dezelfde target accounts blijft ABM een marketing-experiment in plaats van een omzetmotor.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat brengt het uiteindelijk?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            B2B-bedrijven die ABM goed inzetten zien geen sprong in leads, maar wel een sprong in pipeline-kwaliteit. Minder, maar beter. De gemiddelde dealwaarde gaat omhoog, de doorlooptijd korter, de winrate hoger. Het is geen quick win. Reken op een opbouwperiode van zes tot negen maanden voordat je harde resultaten ziet, want bij langere salescycli moeten de eerste touchpoints eerst rijpen.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De winst zit in geduld en alignment. Een ABM-machine gaat niet vanaf dag één draaien. Maar zodra die draait, is het structureel beter dan een trechter waarin marketing leads spuit en sales ze probeert op te vissen. Wil je dat we mét je meedenken over hoe ABM voor jouw organisatie eruit zou kunnen zien? Plan een gesprek via onze <Link to="/contact" className="text-accent hover:underline">contactpagina</Link>. We kijken naar je deal-data, je sales-aanpak en je positionering, en wijzen aan waar de eerste stap zit.
                        </p>
                    </div>

                    <section className="mt-16 pt-12 border-t border-primary/10">
                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Veelgestelde vragen</h2>
                        <div className="space-y-6 not-prose">
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat is Account-Based Marketing op LinkedIn?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Account-Based Marketing op LinkedIn betekent dat je een vooraf vastgestelde lijst van bedrijven targeting krijgt in plaats van een brede demografische doelgroep. Je upload een accountlijst, LinkedIn matcht die met bedrijfspagina's, en de advertenties worden alleen getoond aan medewerkers van die specifieke organisaties.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoeveel bedrijven moeten op mijn accountlijst staan?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">LinkedIn vereist minimaal 300 matched bedrijven om een campagne te draaien, met een aanbeveling om naar 1.000 plus te gaan voor goede targeting. Voor zinvol bereik werkt een lijst van 5.000 tot 10.000 bedrijven het beste, omdat dan voldoende medewerkers per bedrijf in de doelgroep zitten. Voor zeer specifieke high-value accounts werkt een kleinere lijst alleen als je tegelijkertijd persoonlijke benadering vanuit sales meedraait.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Welke LinkedIn-formats werken het beste voor ABM?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Sponsored Content voor brand awareness binnen target accounts en Lead Gen Forms voor conversie werken doorgaans het beste. Conversation Ads zijn geschikt zodra je accountlijst groter dan 500 medewerkers oplevert. Combineer formats: gebruik Sponsored Content om eerst herkenbaarheid op te bouwen, dan een Lead Gen Form of Conversation Ad om de relatie te verdiepen.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoe meet je het succes van een ABM-campagne?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">ABM meet je niet op clicks of CPL, maar op accountniveau. Belangrijke metrics zijn: aantal Marketing Qualified Accounts, engagement-niveau per account (hoeveel mensen binnen een bedrijf hebben jouw content gezien), pipeline-impact en uiteindelijk de gewonnen deals binnen de target lijst. LinkedIn's Account Insights laat per bedrijf zien hoeveel medewerkers betrokken zijn.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat is het verschil tussen ABM en gewone B2B-targeting?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Gewone B2B-targeting kiest doelgroepen op basis van demografische kenmerken zoals functie, branche of bedrijfsgrootte. ABM kiest specifieke bedrijven en richt zich daar volledig op. Het verschil zit in de aanpak: bij ABM tellen sales en marketing samen welke accounts ertoe doen en bouwen daar gezamenlijk omheen, in plaats van leads via een trechter te jagen.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat kost een ABM-campagne op LinkedIn?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">ABM-campagnes op LinkedIn kosten doorgaans meer per CPM of CPC dan brede B2B-campagnes, omdat je een specifieke doelgroep aanspreekt waar veel concurrentie op zit. Reken op CPM's tussen 30 en 80 euro voor Sponsored Content. Voor een serieus ABM-programma met meerdere formats en accounts adviseren wij een minimum maandbudget rond de 3.000 euro.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Heb je sales nodig om ABM te laten werken?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Ja. ABM werkt alleen als marketing en sales op dezelfde accountlijst sturen. Marketing bouwt herkenbaarheid en levert engagement signalen, sales gebruikt die signalen voor outreach via Sales Navigator of e-mail. Zonder sales-betrokkenheid blijven leads in de inbox hangen omdat niemand het accountniveau bewaakt.</p>
                            </div>
                        </div>
                    </section>

                    <section className="mt-16 pt-12 border-t border-primary/10">
                        <h3 className="text-xl font-bold text-primary mb-6">Lees ook</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <Link to="/blogs/social-ads/linkedin-ads-beginners-eerste-b2b" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">LinkedIn Ads voor beginners</h3>
                                <p className="text-primary/60 text-sm">Een praktische start voor jouw eerste B2B-campagne op LinkedIn.</p>
                            </Link>
                            <Link to="/blogs/social-ads/linkedin-conversation-ads-werken" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">LinkedIn Conversation Ads</h3>
                                <p className="text-primary/60 text-sm">Wanneer Conversation Ads meer leveren dan een Message Ad of Sponsored Content.</p>
                            </Link>
                            <Link to="/blogs/social-ads/linkedin-lead-gen-forms-waarom" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">LinkedIn Lead Gen Forms</h3>
                                <p className="text-primary/60 text-sm">Waarom Lead Gen Forms vaak meer leads opleveren dan een externe landingspagina.</p>
                            </Link>
                        </div>
                    </section>

                </div>
            </article>

            <section className="w-full pb-32 px-6">
                <div className="max-w-4xl mx-auto bg-primary rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
                    <h2 className="relative z-10 font-drama italic text-background text-3xl sm:text-4xl md:text-5xl mb-6">
                        Een ABM-aanpak die echt rendement levert?
                    </h2>
                    <p className="relative z-10 font-sans text-background/70 text-lg mb-10 max-w-xl mx-auto">
                        Wij bouwen ABM-programma's met sales en marketing in lockstep. Van accountlijst en formats tot meting per bedrijf. Plan een vrijblijvend gesprek en je weet binnen twee weken of de aanpak bij jouw organisatie past.
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
