import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ChevronRight, User } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function BlogPostLinkedInAdsUitbestedenWanneerMoeite() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen selection:bg-accent/30 selection:text-dark flex flex-col bg-background">
            <Helmet>
                <title>LinkedIn Ads uitbesteden: wanneer is het de moeite waard? | Empowers</title>
                <meta name="description" content="LinkedIn Ads uitbesteden levert pas op vanaf een bepaald budget en schaalniveau. Lees wanneer een bureau zich terugverdient, wat het kost en waar je op moet letten." />
                <link rel="canonical" href="https://www.empowers.nl/blogs/social-ads/linkedin-ads-uitbesteden-wanneer-moeite" />
                <meta property="og:title" content="LinkedIn Ads uitbesteden: wanneer is het de moeite waard?" />
                <meta property="og:description" content="Een eerlijke kijk op kosten, baten en tipping points van LinkedIn Ads uitbesteden aan een bureau." />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://www.empowers.nl/blogs/social-ads/linkedin-ads-uitbesteden-wanneer-moeite" />
                <meta property="og:image" content="https://www.empowers.nl/images/blogs/linkedin-ads-uitbesteden-wanneer-moeite.jpg" />
                <meta property="article:published_time" content="2026-04-17" />
                <meta property="article:author" content="Empowers" />
                <meta property="article:section" content="Social Ads" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="LinkedIn Ads uitbesteden: wanneer loont het?" />
                <meta name="twitter:description" content="Zo weet je of zelf doen of een bureau inhuren financieel uitpakt voor jouw B2B campagnes." />

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Article",
                        "headline": "LinkedIn Ads uitbesteden: wanneer is het de moeite waard?",
                        "description": "LinkedIn Ads uitbesteden levert pas op vanaf een bepaald budget en schaalniveau. Lees wanneer een bureau zich terugverdient, wat het kost en waar je op moet letten.",
                        "image": "https://www.empowers.nl/images/blogs/linkedin-ads-uitbesteden-wanneer-moeite.jpg",
                        "datePublished": "2026-04-17T11:00:00+02:00",
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
                                    "name": "Vanaf welk budget loont LinkedIn Ads uitbesteden?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Onder de 2.500 euro mediabudget per maand is LinkedIn Ads uitbesteden zelden rendabel omdat de vaste kosten van een bureau zich niet terugverdienen. Boven de 3.500 euro per maand verdien je een bureau meestal terug via lagere cost per lead, beter gestructureerde campagnes en snellere doorlooptijd."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Wat kost een LinkedIn Ads bureau?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Een serieus LinkedIn Ads bureau rekent gemiddeld 800 tot 2.500 euro per maand voor beheer, afhankelijk van mediabudget, aantal campagnes en landen. Sommige bureaus hanteren een percentage van 10 tot 20% over het mediabudget. Setupkosten en creative productie komen er meestal bovenop."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Kan ik LinkedIn Ads gewoon zelf blijven doen?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Ja, als je voldoende tijd hebt, snapt wat matched audiences en conversion tracking zijn en in staat bent om iedere week te optimaliseren. Voor bedrijven met een klein budget of een eenmalige campagne is zelf doen prima. Zodra LinkedIn een structureel kanaal wordt en het budget oploopt, weegt de verloren tijd zwaarder dan de bureaukosten."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Hoe lang duurt het voordat een bureau resultaat levert?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Reken op zes tot twaalf weken voor stabiele resultaten. De eerste vier weken gaan op aan setup, tracking, audiences en eerste creative tests. Daarna is er ruimte voor optimalisatie. LinkedIn heeft structureel meer tijd nodig dan Meta of Google omdat doelgroepen kleiner zijn en CPCs hoger liggen."
                                    }
                                }
                            ]
                        },
                        "breadcrumb": {
                            "@type": "BreadcrumbList",
                            "itemListElement": [
                                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.empowers.nl" },
                                { "@type": "ListItem", "position": 2, "name": "Social Ads", "item": "https://www.empowers.nl/blogs/social-ads" },
                                { "@type": "ListItem", "position": 3, "name": "LinkedIn Ads uitbesteden" }
                            ]
                        }
                    })}
                </script>
            </Helmet>

            <Navbar />

            <article className="w-full pt-40 pb-24 px-6 relative">
                <div className="max-w-4xl mx-auto">

                    {/* Breadcrumbs */}
                    <nav className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-primary/50 mb-12">
                        <Link to="/" className="hover:text-accent transition-colors">Home</Link>
                        <ChevronRight size={12} />
                        <Link to="/blogs/social-ads" className="hover:text-accent transition-colors">Social Ads</Link>
                        <ChevronRight size={12} />
                        <span className="text-primary/30">LinkedIn Ads uitbesteden</span>
                    </nav>

                    {/* Header */}
                    <header className="mb-16">
                        <div className="inline-block px-3 py-1 bg-accent/10 text-accent font-mono text-xs uppercase tracking-widest rounded-full mb-6">
                            Social Ads
                        </div>
                        <h1 className="font-sans font-bold text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight mb-8">
                            LinkedIn Ads uitbesteden: wanneer is het de moeite waard?
                        </h1>
                        <div className="flex flex-wrap items-center gap-6 text-sm font-sans text-primary/60 border-y border-primary/10 py-6">
                            <span className="flex items-center gap-2"><User size={14} />Empowers Redactie</span>
                            <span className="flex items-center gap-2"><Calendar size={14} />17 apr 2026</span>
                            <span className="flex items-center gap-2"><Clock size={14} />8 min leestijd</span>
                        </div>
                    </header>

                    {/* Featured Image */}
                    <figure className="w-full h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden mb-16 relative bg-primary">
                        <div className="absolute inset-0 bg-[url('/images/blogs/linkedin-ads-uitbesteden-wanneer-moeite.jpg')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </figure>

                    {/* Content */}
                    <div className="prose prose-lg max-w-none">

                        <p className="text-xl leading-relaxed text-primary/80 font-medium mb-6">
                            LinkedIn Ads zijn duur, traag en meedogenloos als je iets verkeerd inricht. Daarom denken veel B2B marketeers na over uitbesteden. Maar wanneer verdient een bureau zich écht terug? En wanneer kun je de poging beter zelf doen? In dit artikel lees je de tipping points op basis van budget, interne tijd en groeistrategie. Zonder verkooppraatje.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Waarom LinkedIn Ads anders zijn dan andere kanalen</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            LinkedIn is het enige platform waar je consistent kunt targeten op functietitel, bedrijfsgrootte, sector en anciënniteit. Dat is goud voor B2B. Tegelijk is het platform straf in wat het vraagt van je uitvoering. De CPCs liggen gemiddeld tien tot twintig keer hoger dan op Meta. Als je iets verkeerd instelt, is het geld sneller verdampt dan je "Leads" kunt zeggen.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Dat verschil maakt uitbesteden een andere afweging dan bij Google Ads of Meta Ads. Je betaalt op LinkedIn niet voor kliks — je betaalt voor toegang tot een kleine, kostbare doelgroep. Elke verkeerd getargete euro is duurder dan dezelfde fout elders. Daarom tellen expertise en discipline op LinkedIn zwaarder dan op andere kanalen.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Voor context over hoe LinkedIn zich verhoudt tot andere B2B kanalen, lees <Link to="/blogs/social-ads/linkedin-adverteren-google-ads" className="text-accent hover:underline">ons artikel over LinkedIn Ads versus Google Ads voor B2B</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Het echte kostenplaatje: wat verdient een bureau terug?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een LinkedIn Ads bureau rekent doorgaans 800 tot 2.500 euro per maand. De spreiding komt door verschillen in mediabudget, aantal campagnes, landen en betrokken creatie. Sommige bureaus werken met een percentage van 10 tot 20% van het mediabudget, vaak met een minimum fee.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Die kosten moeten ergens vandaan komen. Een bureau verdient zichzelf terug via drie paden: een lagere cost per lead door scherpere targeting, minder weggegooid geld aan slechte campagnes en meer impact uit hetzelfde budget door gestructureerde tests. Bij een maandbudget van 3.000 euro betekent 20% lagere CPL al 600 euro bespaard — genoeg om een deel van de fee te dekken.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Onder een maandelijks mediabudget van 2.500 euro is uitbesteden zelden rendabel. De vaste bureaukosten drukken te zwaar op een klein budget. Boven de 3.500 euro per maand ligt het omslagpunt meestal duidelijk in het voordeel van een bureau, mits je goede leads wilt en geen één-op-één kliks telt.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">De vier situaties waarin uitbesteden direct loont</h2>

                        <h3 className="font-semibold text-primary text-xl mt-10 mb-4">1. Je budget groeit maar je tijd niet</h3>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een marketing manager met te veel taken die er LinkedIn Ads "bij" doet, is een klassieke verspilling. Bij 4.000 euro mediabudget is een uur per week niet genoeg om doelgroepen te testen, advertenties te verversen en rapporten te maken. Het gevolg: campagnes lopen maanden op autopilot, CPCs stijgen en leads drogen op. Een bureau inzetten levert in zo'n situatie al in de eerste maand resultaat.
                        </p>

                        <h3 className="font-semibold text-primary text-xl mt-10 mb-4">2. Je wilt meer dan één format tegelijk draaien</h3>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            LinkedIn biedt Sponsored Content, Lead Gen Forms, Message Ads, Document Ads, Thought Leader Ads en Conversation Ads. Elk format heeft eigen creatie-eisen en eigen optimalisatielogica. In-house één of twee formats draaien lukt nog. Drie of meer formats gelijktijdig beheren vraagt structureel specialisme. Meer over hoe formats onderling verschillen staat in <Link to="/blogs/social-ads/linkedin-sponsored-content-vs-message" className="text-accent hover:underline">onze vergelijking van Sponsored Content versus Message Ads</Link>.
                        </p>

                        <h3 className="font-semibold text-primary text-xl mt-10 mb-4">3. Je hebt internationale campagnes</h3>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Targeting in Nederland en Duitsland is niet hetzelfde als targeting in alleen Nederland. Taal, functiebenamingen, LinkedIn-gedrag en CPCs verschillen per land. Bij internationale uitrol verdubbelt het aantal beslissingen per week. Een bureau met ervaring in meerdere markten voorkomt dat je fouten pas na drie maanden ontdekt.
                        </p>

                        <h3 className="font-semibold text-primary text-xl mt-10 mb-4">4. Je zit vast op hetzelfde plateau</h3>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Draaien je campagnes al maanden op dezelfde CPL en wil je doorgroeien? Dan is het beleidsniveau het probleem, niet de executie. Een goed bureau brengt nieuwe audience benaderingen, creative structuren en test frameworks in. Dat breekt plateaus open. Zelf blijven proberen levert meestal meer van hetzelfde.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">De drie situaties waarin zelf doen beter is</h2>

                        <h3 className="font-semibold text-primary text-xl mt-10 mb-4">1. Je hebt een klein, eenmalig project</h3>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een whitepaper promoten voor 1.500 euro in zes weken? Doe dat zelf. De leercurve is een investering in je eigen skill en een bureau verdient zich niet terug in zes weken. LinkedIn heeft goede basistrainingen in Campaign Manager en de documentatie is prima doorheen te komen.
                        </p>

                        <h3 className="font-semibold text-primary text-xl mt-10 mb-4">2. Je hebt een sterke interne specialist</h3>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een performance marketeer met minimaal twee jaar LinkedIn Ads ervaring en dedicated tijd is vaak sneller en scherper dan een bureau. In-house heb je korte lijnen, diepe productkennis en een lager uurtarief. Let wel: één persoon is een risico. Ziekte, vakantie of vertrek zet je campagnes stil.
                        </p>

                        <h3 className="font-semibold text-primary text-xl mt-10 mb-4">3. Je werkt met strikt vertrouwelijke data</h3>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Bij ABM met een geheime target list of bij campagnes rond product launches die nog embargoed zijn, is uitbesteden juridisch en operationeel lastiger. Een NDA lost veel op, maar niet alles. Voor zulke gevoelige programma's werkt in-house met een externe consultant als sparringpartner vaak beter dan volledige uitbesteding.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Waar een goed bureau echt op presteert</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Als je uitbesteedt, wil je meer terug dan "beheer." Een goed bureau levert vier dingen die in-house teams vaak niet krijgen ingeregeld.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Ten eerste: een werkend conversie tracking fundament. LinkedIn Insight Tag plus Conversion API plus correct gemapte events. Zonder die laag weet niemand wat werkt. Ten tweede: audience hygiene. Matched audiences die maandelijks vernieuwd worden, uitsluitingen die up-to-date zijn, predictive audiences die daadwerkelijk zijn getest.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Ten derde: een creative engine. Niet één advertentie per maand, maar structurele test cycles met vier tot zes creatives per doelgroep, wekelijkse vervanging van onderpresteerders en hypothesen achter elke variant. Ten vierde: rapportage in jouw taal. Geen LinkedIn dashboards, maar Sales Qualified Leads, pipeline impact en CAC per segment. Meer over wat goed bureaus doen lees je in <Link to="/blogs/algemeen/kies-juiste-online-marketing-bureau" className="text-accent hover:underline">onze gids voor het kiezen van een bureau</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Vijf rode vlaggen bij het kiezen van een bureau</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Niet elk bureau dat LinkedIn Ads zegt te doen, doet het goed. Vermijd bureaus die binnen twee weken resultaten beloven — op LinkedIn duurt opstart altijd zes tot twaalf weken. Vermijd bureaus die geen Conversion API kunnen opzetten of "later wel" willen regelen. Zonder server side tracking werk je op onvolledige data.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Vermijd bureaus die dezelfde setup voor elke klant gebruiken. LinkedIn vraagt maatwerk per sector. Vermijd bureaus zonder duidelijke afspraken over creative ownership en admin toegang tot je account — dat moet altijd bij jou blijven. Vermijd tot slot bureaus die geen maandelijkse live call voorstellen. Rapportage op afstand is geen samenwerking.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hybride model: het beste van beide werelden</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Veel bedrijven kiezen uiteindelijk voor een mix. In-house houdt de strategie, de doelgroepdefinities en de content vast. Het bureau voert uit in Campaign Manager, test creatives en rapporteert. Dat model werkt goed bij mediabudgetten tussen 3.000 en 8.000 euro per maand. Boven de 10.000 euro is vaak een kleiner intern team plus een bureau nog efficiënter.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een hybride aanpak voorkomt afhankelijkheid en behoudt kennis binnen het bedrijf. Als het bureau ooit wegvalt, staan de campagnes nog. Dat is precies wat je wilt bij kanaal dat maanden nodig heeft om op te bouwen.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe bereken je of uitbesteden zich terugverdient?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Neem je huidige mediabudget en je huidige cost per lead. Vermenigvuldig met 0,8 — dat is een voorzichtige aanname van wat een goed bureau aan CPL winst levert. Trek de bureaukosten eraf. Als er meer dan nul overblijft, verdient uitbesteden zich cijfermatig terug.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Rekenvoorbeeld: 4.000 euro mediabudget per maand, 40 leads, CPL 100 euro. Bureaufee 1.500 euro. Met 20% CPL verbetering zou je bij gelijkblijvend budget 50 leads halen. Tien extra leads van 100 euro waarde is 1.000 euro waarde. Dat is minder dan de fee — dus puur op volume loont het niet. Maar LinkedIn-leads zijn vaak hoger gekwalificeerd en converteren beter in sales. Reken daarom liever op pipeline impact, niet op pure leadaantallen.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Vraag het bureau altijd om een realistische forecast na dertig en negentig dagen. Kwaliteit van die forecast zegt veel over de kwaliteit van het bureau.
                        </p>

                    </div>

                    {/* FAQ */}
                    <section className="mt-16 pt-12 border-t border-primary/10">
                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Veelgestelde vragen over LinkedIn Ads uitbesteden</h2>
                        <div className="space-y-6 not-prose">
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Vanaf welk budget loont LinkedIn Ads uitbesteden?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Onder de 2.500 euro mediabudget per maand is LinkedIn Ads uitbesteden zelden rendabel omdat de vaste kosten van een bureau zich niet terugverdienen. Boven de 3.500 euro per maand verdien je een bureau meestal terug via lagere cost per lead, beter gestructureerde campagnes en snellere doorlooptijd.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat kost een LinkedIn Ads bureau?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Een serieus LinkedIn Ads bureau rekent gemiddeld 800 tot 2.500 euro per maand voor beheer, afhankelijk van mediabudget, aantal campagnes en landen. Sommige bureaus hanteren een percentage van 10 tot 20% over het mediabudget. Setupkosten en creative productie komen er meestal bovenop.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Kan ik LinkedIn Ads gewoon zelf blijven doen?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Ja, als je voldoende tijd hebt, snapt wat matched audiences en conversion tracking zijn en in staat bent iedere week te optimaliseren. Voor bedrijven met klein budget of een eenmalige campagne is zelf doen prima. Zodra LinkedIn een structureel kanaal wordt, weegt je verloren tijd zwaarder dan bureaukosten.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoe lang duurt het voordat een bureau resultaat levert?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Reken op zes tot twaalf weken voor stabiele resultaten. De eerste vier weken gaan op aan setup, tracking, audiences en eerste creative tests. Daarna is er ruimte voor optimalisatie. LinkedIn heeft structureel meer tijd nodig dan Meta of Google omdat doelgroepen kleiner zijn en CPCs hoger liggen.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Moet ik bureau-fee betalen bovenop mijn mediabudget?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Ja, beheerfee en mediabudget zijn twee aparte posten. Het mediabudget gaat rechtstreeks naar LinkedIn, de fee naar het bureau. Let op bureaus die dit niet duidelijk splitsen in hun offerte — transparantie hierover is een teken van een betrouwbare partner.</p>
                            </div>
                        </div>
                    </section>

                    {/* Related */}
                    <section className="mt-16 pt-12 border-t border-primary/10">
                        <h3 className="text-xl font-bold text-primary mb-6">Lees ook</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <Link to="/blogs/social-ads/linkedin-adverteren-google-ads" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">LinkedIn Ads vs Google Ads</h3>
                                <p className="text-primary/60 text-sm">Welk kanaal levert meer op voor B2B en hoe combineer je ze slim.</p>
                            </Link>
                            <Link to="/blogs/social-ads/linkedin-sponsored-content-vs-message" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Sponsored Content vs Message Ads</h3>
                                <p className="text-primary/60 text-sm">Welk LinkedIn advertentieformat past bij jouw B2B doelen en funnel.</p>
                            </Link>
                            <Link to="/blogs/algemeen/kies-juiste-online-marketing-bureau" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Juiste marketingbureau kiezen</h3>
                                <p className="text-primary/60 text-sm">Waar let je op bij het kiezen van een marketingbureau dat past bij jouw fase.</p>
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
                        Overweeg je LinkedIn Ads uit te besteden?
                    </h2>
                    <p className="relative z-10 font-sans text-background/70 text-lg mb-10 max-w-xl mx-auto">
                        We kijken gratis mee naar jouw huidige setup en berekenen of uitbesteden zich voor jou terugverdient. Eerlijk advies, ook als zelf doen beter is.
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
