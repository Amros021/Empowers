import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ChevronRight, User } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function BlogPostTechnischeSeoAudit() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen selection:bg-accent/30 selection:text-dark flex flex-col bg-background">
            <Helmet>
                <title>Technische SEO audit in 2026: de complete checklist | Empowers</title>
                <meta name="description" content="Een technische SEO audit legt bloot wat jouw rankings stiekem afremt. Lees de complete checklist 2026: van crawlability en Core Web Vitals tot indexatie, schema en logbestanden." />
                <link rel="canonical" href="https://www.empowers.nl/blogs/seo/technische-seo-audit" />
                <meta property="og:title" content="Technische SEO audit in 2026: de complete checklist" />
                <meta property="og:description" content="De complete technische SEO audit checklist voor 2026 — van crawlability tot Core Web Vitals, indexatie, schema en serverlogs." />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://www.empowers.nl/blogs/seo/technische-seo-audit" />
                <meta property="og:image" content="https://www.empowers.nl/images/blogs/technische-seo-audit.jpg" />
                <meta property="article:published_time" content="2026-04-22T09:00:00+02:00" />
                <meta property="article:author" content="Empowers" />
                <meta property="article:section" content="SEO" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Technische SEO audit in 2026: de complete checklist" />
                <meta name="twitter:description" content="Welke technische SEO fouten remmen jouw rankings af? De complete audit checklist voor 2026." />

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Article",
                        "headline": "Technische SEO audit in 2026: de complete checklist",
                        "description": "Een technische SEO audit legt bloot wat jouw rankings stiekem afremt. Lees de complete checklist 2026: van crawlability en Core Web Vitals tot indexatie, schema en logbestanden.",
                        "image": "https://www.empowers.nl/images/blogs/technische-seo-audit.jpg",
                        "datePublished": "2026-04-22T09:00:00+02:00",
                        "author": { "@type": "Organization", "name": "Empowers" },
                        "publisher": {
                            "@type": "Organization",
                            "name": "Empowers",
                            "url": "https://www.empowers.nl",
                            "logo": {
                                "@type": "ImageObject",
                                "url": "https://www.empowers.nl/empowers-logo-color.svg"
                            }
                        },
                        "mainEntity": {
                            "@type": "FAQPage",
                            "mainEntity": [
                                {
                                    "@type": "Question",
                                    "name": "Wat is een technische SEO audit precies?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Een technische SEO audit is een gestructureerd onderzoek van alle niet-content factoren die bepalen of Google jouw website goed kan lezen, begrijpen en indexeren. Denk aan crawlability, sitestructuur, indexatie, laadsnelheid, Core Web Vitals, interne links, schema markup, redirects, canonicals en HTTPS. Het resultaat is een lijst concrete fouten en de prioriteit per fix."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Hoe vaak moet je een technische SEO audit uitvoeren?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Voor de meeste bedrijven volstaat één grondige audit per jaar, aangevuld met een kwartaalcheck op crawlfouten, indexatie en Core Web Vitals. Na een migratie, re-design of grote contentwissel doe je altijd direct een verkorte audit om te voorkomen dat rankings stilletjes wegzakken."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Welke tools heb je nodig voor een technische SEO audit?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Je komt een heel eind met een combinatie van gratis en betaalde tools: Google Search Console voor indexatie en prestaties, PageSpeed Insights voor Core Web Vitals, Screaming Frog of Sitebulb voor een volledige site crawl, Ahrefs of Semrush voor links en rankings, en Google Analytics 4 voor gebruikersgedrag. Voor grote sites zijn logfile-analyzers zoals Screaming Frog Log Analyzer of JetOctopus nuttig."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Hoe lang duurt een technische SEO audit gemiddeld?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Voor een MKB-website met 100 tot 500 pagina's kost een grondige audit één tot twee volle werkdagen. Voor webshops en grotere sites met duizenden pagina's reken je drie tot vijf dagen, plus extra tijd voor logfile-analyse. De audit zelf is maar het begin — het doorvoeren van de fixes kost meestal het tienvoudige."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Wat zijn de meest voorkomende problemen die een technische SEO audit oplevert?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "De top vijf in 2026: dubbele content door onjuiste canonicals, trage Core Web Vitals op mobiel, belangrijke pagina's die per ongeluk op noindex staan, gebroken interne links na een migratie, en een sitemap die niet matcht met de daadwerkelijk geïndexeerde pagina's. Deze vijf los je op en je ziet vaak binnen zes weken betere rankings."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Is een technische SEO audit zelf te doen?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Een basis-audit met Search Console en PageSpeed Insights kun je zelf doen — dat vangt de grootste fouten af. Voor een complete audit met logfile-analyse, JavaScript rendering checks en een gestructureerd fix-plan is technische ervaring nodig. De meeste MKB-bedrijven kiezen voor een hybride aanpak: zelf de basis, een specialist voor de diepte."
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
                            { "@type": "ListItem", "position": 4, "name": "Technische SEO audit 2026", "item": "https://www.empowers.nl/blogs/seo/technische-seo-audit" }
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
                        <span className="text-primary truncate">Technische SEO audit 2026</span>
                    </nav>

                    {/* Header */}
                    <header className="mb-16">
                        <div className="inline-block px-3 py-1 bg-accent/10 text-accent font-mono text-xs uppercase tracking-widest rounded-full mb-6">
                            SEO
                        </div>
                        <h1 className="font-sans font-bold text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight mb-8">
                            Technische SEO audit in 2026: de complete checklist
                        </h1>

                        <div className="flex flex-wrap items-center gap-6 text-sm font-sans text-primary/60 border-y border-primary/10 py-6">
                            <div className="flex items-center gap-2">
                                <User className="w-4 h-4" />
                                <span>Empowers Redactie</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>22 april 2026</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>9 minuten leestijd</span>
                            </div>
                        </div>
                    </header>

                    {/* Featured Image */}
                    <figure className="w-full h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden mb-16 relative bg-primary">
                        <div className="absolute inset-0 bg-[url('/images/blogs/technische-seo-audit.jpg')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </figure>

                    {/* Content */}
                    <div className="prose prose-lg max-w-none prose-headings:text-primary prose-headings:font-bold prose-a:text-accent prose-a:underline hover:prose-a:text-accent/80">
                        <p className="text-xl leading-relaxed text-primary/80 font-medium mb-6">
                            Een technische SEO audit legt bloot wat jouw rankings stiekem afremt. Niet de content, niet de backlinks — maar de onderliggende code, snelheid en structuur van jouw website. In deze complete checklist voor 2026 lopen we langs crawlability, indexatie, Core Web Vitals, schema, interne links en logbestanden. Inclusief welke fouten het vaakst voorkomen, hoe je ze vindt en in welke volgorde je ze oplost.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat een technische SEO audit precies oplevert</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een technische audit kijkt niet naar wat er op jouw pagina's staat, maar naar hoe zoekmachines jouw site lezen. Google stuurt een bot naar jouw domein, volgt links, rendert JavaScript, beoordeelt snelheid en besluit welke pagina's in de index komen. Elke stap in dat proces kan misgaan. Een audit maakt die fouten zichtbaar en zet ze op volgorde van impact.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De meeste MKB-websites verliezen tussen de 10 en 30 procent van hun organische potentie aan technische ruis. Denk aan pagina's die onbedoeld op noindex staan, sitemaps die niet kloppen, trage mobiele scores en kapotte interne links. Geen van deze problemen zie je in jouw contentstrategie terug. Ze zijn pas zichtbaar als je de audit doet.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Stap 1: crawlability — kan Google alles vinden?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Crawlability is de basis. Als Google jouw pagina's niet kan ontdekken, bestaan ze voor de zoekmachine simpelweg niet. Start altijd hier.
                        </p>

                        <h3 className="font-semibold text-primary text-xl mt-10 mb-4">robots.txt controleren</h3>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Open jouwdomein.nl/robots.txt en lees regel voor regel. Let op Disallow-regels die hele secties blokkeren, oude staging-paden die niet meer bestaan en conflicten tussen regels. Een veelvoorkomende fout: een ontwikkelaar zet tijdens de launch een "Disallow: /" en vergeet die te verwijderen. Dat sluit de hele site af voor Google.
                        </p>

                        <h3 className="font-semibold text-primary text-xl mt-10 mb-4">XML-sitemap ingediend en actueel</h3>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Jouw sitemap vertelt Google welke pagina's belangrijk zijn. Check drie dingen: staat de sitemap in Search Console ingediend, klopt het aantal pagina's grofweg met de index-rapportage, en bevat de sitemap alléén canonieke, indexeerbare URL's. Pagina's met noindex, 301's of 404's horen er niet in.
                        </p>

                        <h3 className="font-semibold text-primary text-xl mt-10 mb-4">Interne linkstructuur</h3>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Google ontdekt pagina's grotendeels via interne links. Crawl jouw site met Screaming Frog of Sitebulb en kijk naar de "klikdiepte" per URL. Belangrijke pagina's horen op maximaal drie klikken vanaf de homepage te staan. Pagina's die alleen bereikbaar zijn via de sitemap of via diepe filters verdwijnen vaak uit de index.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Stap 2: indexatie — staan de juiste pagina's erin?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Nu Google jouw pagina's kán vinden, wil je dat de juiste pagina's daadwerkelijk geïndexeerd zijn. Dit is waar veel sites stiekem lek zijn.
                        </p>

                        <h3 className="font-semibold text-primary text-xl mt-10 mb-4">Search Console: geïndexeerd vs. niet geïndexeerd</h3>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Open het rapport Pagina's in Google Search Console. Vergelijk het aantal geïndexeerde pagina's met het aantal pagina's dat je verwacht. Veel meer dan verwacht? Dan heb je vermoedelijk dubbele content of thin pages in de index. Veel minder? Dan worden belangrijke pagina's geweigerd.
                        </p>

                        <h3 className="font-semibold text-primary text-xl mt-10 mb-4">Meta robots en noindex</h3>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een klassieke fout: een pagina heeft per ongeluk een noindex-tag. Dat gebeurt vaak bij migraties, bij het overzetten van staging naar productie, of wanneer een SEO-plugin een standaardinstelling heeft die niet bij jouw site past. Crawl je site en filter op pagina's met een noindex in de meta robots. Twijfel je? Haal de tag eruit. Dan beslist Google zelf.
                        </p>

                        <h3 className="font-semibold text-primary text-xl mt-10 mb-4">Canonicals correct ingesteld</h3>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Canonicals vertellen Google welke versie van een pagina de hoofdversie is. Bij webshops met filterparameters, internationale versies of gepagineerde overzichten zie je vaak dat canonicals verkeerd wijzen. Dat levert dubbele content op of, erger, dat Google de verkeerde URL indexeert. Check of elke pagina een self-referencing canonical heeft, tenzij er bewust naar een andere URL wordt verwezen.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Stap 3: Core Web Vitals en laadsnelheid</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Sinds 2021 is paginaprestatie een directe rankingfactor. In 2026 is die invloed alleen maar toegenomen, zeker op mobiel. Core Web Vitals meten drie dingen: laadtijd, interactiviteit en stabiliteit.
                        </p>

                        <h3 className="font-semibold text-primary text-xl mt-10 mb-4">De drie metrieken die tellen</h3>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            LCP (Largest Contentful Paint) mag onder 2,5 seconden. INP (Interaction to Next Paint) onder 200 milliseconden. CLS (Cumulative Layout Shift) onder 0,1. Haal je op mobiel één of meer niet? Dan weet je waar je aan moet werken. In ons uitgebreide artikel over <Link to="/blogs/seo/core-web-vitals-verbeteren-scoort" className="text-accent hover:underline">Core Web Vitals verbeteren</Link> lees je per metriek welke fixes het grootste effect hebben.
                        </p>

                        <h3 className="font-semibold text-primary text-xl mt-10 mb-4">Field data vs. lab data</h3>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            PageSpeed Insights toont twee cijfers: labdata uit een gesimuleerde test en velddata uit echte bezoeken. Google rankt op de velddata, niet op de labtest. Staat jouw lab-score op 95 maar jouw velddata toont rood? Dan ben je niet klaar. Richt je fixes op de werkelijke gebruikerservaring, niet op het simulatiegetal.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Stap 4: mobielvriendelijkheid en rendering</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Google indexeert al jaren mobile-first. Dat betekent dat de mobiele versie van jouw site bepaalt wat er in de index komt — niet de desktop-variant. Alles wat op mobiel ontbreekt of anders is, telt voor Google niet mee.
                        </p>

                        <h3 className="font-semibold text-primary text-xl mt-10 mb-4">Content pariteit tussen mobiel en desktop</h3>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Check of je op mobiel dezelfde tekst, afbeeldingen en interne links toont als op desktop. Verborgen tabs, toggles die content inklappen of andere layouts mogen, zolang de content aanwezig is in de HTML. Blokken die pas bij een klik worden geladen, worden soms niet gezien door Googlebot.
                        </p>

                        <h3 className="font-semibold text-primary text-xl mt-10 mb-4">JavaScript rendering</h3>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Draait jouw site op React, Vue, Next.js of een ander JavaScript-framework? Open in Search Console het inspect-rapport en kijk of de HTML die Googlebot ziet dezelfde is als wat een gebruiker ziet. Bij veel single-page apps mist Google content die pas na rendering verschijnt. De oplossing is server-side rendering of pre-rendering.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Stap 5: HTTPS, redirects en statuscodes</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Deze stap lijkt saai, maar een slecht afgehandelde migratie of een keten van redirects kost je direct organisch verkeer.
                        </p>

                        <h3 className="font-semibold text-primary text-xl mt-10 mb-4">HTTPS overal</h3>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Elke pagina hoort via HTTPS te laden, met een geldig SSL-certificaat. Controleer of mixed content (HTTP-afbeeldingen op een HTTPS-pagina) voorkomt. Die veroorzaken waarschuwingen in de browser en verlagen het vertrouwen van zowel bezoekers als Google.
                        </p>

                        <h3 className="font-semibold text-primary text-xl mt-10 mb-4">Redirect-kettingen voorkomen</h3>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een keten zoals HTTP → HTTPS → www → slug-met-slash is technisch correct, maar kost laadtijd en verwatert link equity. Zorg dat elke redirect in één stap gaat. Gebruik 301's voor permanente verhuizingen en 302's alleen voor tijdelijke situaties. Controleer na elke grote wijziging de logbestanden — daarover zo meer.
                        </p>

                        <h3 className="font-semibold text-primary text-xl mt-10 mb-4">404's, soft 404's en 410's</h3>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Verwijderde pagina's horen een duidelijke 410 of 301 te krijgen. Een soft 404 — een pagina die zegt "niet gevonden" maar de statuscode 200 teruggeeft — is verwarrend voor Google. Een echte 404 op een oude, belangrijke URL die nog links heeft? Die red je door een 301 naar de best passende nieuwe pagina.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Stap 6: structured data en schema markup</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Schema markup vertelt Google wat jouw content betekent. Voor SEO in 2026 is dit belangrijker dan ooit: AI Overviews en generatieve zoekresultaten leunen zwaar op gestructureerde data om bronnen te kiezen.
                        </p>

                        <h3 className="font-semibold text-primary text-xl mt-10 mb-4">Welke schema's toepassen</h3>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Elke contentsoort heeft een eigen schema. Blogs gebruiken Article, webshops Product, lokale bedrijven LocalBusiness, en voor jouw FAQ-secties voeg je FAQPage toe. Valideer elke implementatie met de Rich Results Test van Google. Fouten in schema worden genegeerd, dus één verkeerd veld sloopt de hele markup.
                        </p>

                        <h3 className="font-semibold text-primary text-xl mt-10 mb-4">Markup consistent houden na wijzigingen</h3>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Schema raakt snel outdated. Een prijswijziging in jouw webshop die niet in de Product-schema wordt bijgewerkt, levert een waarschuwing op in Search Console. Stel automatische validatie in via jouw CMS of bouw een scheduled check die wekelijks een steekproef doet.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Stap 7: logbestanden analyseren</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Dit is de stap die de meeste audits overslaan en waar juist de rauwe waarheid zit. Logbestanden laten exact zien welke URL's Googlebot wel en niet bezoekt, hoe vaak, en welke statuscodes het daarbij kreeg.
                        </p>

                        <h3 className="font-semibold text-primary text-xl mt-10 mb-4">Wat je uit logs haalt</h3>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Je ziet of Google tijd verspilt aan onbelangrijke URL's (filterparameters, sessie-ID's, oude redirects) in plaats van aan jouw commerciële pagina's. Je ziet welke pagina's te weinig crawl budget krijgen. En je ziet welke errorpatronen terugkomen — bijvoorbeeld een groep URL's die structureel 500's genereert onder spike-load.
                        </p>

                        <h3 className="font-semibold text-primary text-xl mt-10 mb-4">Wanneer logs écht nodig zijn</h3>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Voor kleine sites onder de 500 pagina's is logfile-analyse overkill. Vanaf circa 1.000 pagina's, en zeker voor webshops met parameters en filters, levert het serieus inzicht op. Tools als Screaming Frog Log File Analyser, JetOctopus of een eenvoudige Python-parser doen het werk.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">De audit vertalen naar een fix-plan</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een audit is waardeloos zonder prioritering. Een goede audit levert geen lijst van 200 items op — het levert drie kolommen op: quick wins die je deze week kunt oppakken, middelgrote klussen voor dit kwartaal, en structurele issues die in een roadmap horen.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Quick wins zijn bijna altijd: verwijder noindex op belangrijke pagina's, corrigeer de sitemap, fix de 404's met meeste backlinks, optimaliseer de grootste afbeeldingen op de homepage en repareer Core Web Vitals-issues op de top-10 landingspagina's. Die geven vaak binnen vier tot zes weken meetbaar resultaat.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Voor de volledige aanpak van SEO naast techniek — inclusief zoekwoorden, content en off-page — lees je onze <Link to="/blogs/seo/technische-seo-checklist-2025-website" className="text-accent hover:underline">uitgebreide technische SEO-checklist</Link> en de gids over <Link to="/blogs/seo/backlinks-opbouwen" className="text-accent hover:underline">backlinks opbouwen in 2026</Link>. Twijfel je of alle losse onderdelen goed op elkaar zijn afgestemd? Dan is de <Link to="/blogs/seo/content-audit" className="text-accent hover:underline">content audit</Link> een logische volgende stap.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wanneer je een specialist inschakelt</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De basis — robots.txt, sitemap, noindex-checks, Search Console-fouten — doe je prima zelf. Zodra je in logfile-analyse, server-side rendering of grootschalige canonical-issues duikt, wordt het werk technisch. Dan loont een specialist of een bureau dat technische SEO dagelijks doet. Een audit door een ervaren partij kost ruwweg 1.500 tot 4.000 euro, afhankelijk van de sitegrootte. Het doorvoeren van de fixes is daar een veelvoud van waard — zeker als je bedenkt dat 10 tot 30 procent meer organisch verkeer voor de meeste bedrijven goud waard is.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Wil je eerst weten waar jouw site staat? Plan een vrijblijvende scan via onze <Link to="/contact" className="text-accent hover:underline">contactpagina</Link>. We kijken naar de drie grootste technische blokkades en laten weten of het loont om dieper te gaan.
                        </p>
                    </div>

                    {/* FAQ Section */}
                    <section className="mt-16 pt-12 border-t border-primary/10">
                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Veelgestelde vragen</h2>
                        <div className="space-y-6 not-prose">
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat is een technische SEO audit precies?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Een technische SEO audit is een gestructureerd onderzoek van alle niet-content factoren die bepalen of Google jouw website goed kan lezen, begrijpen en indexeren. Denk aan crawlability, sitestructuur, indexatie, laadsnelheid, Core Web Vitals, interne links, schema markup, redirects, canonicals en HTTPS. Het resultaat is een lijst concrete fouten en de prioriteit per fix.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoe vaak moet je een technische SEO audit uitvoeren?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Voor de meeste bedrijven volstaat één grondige audit per jaar, aangevuld met een kwartaalcheck op crawlfouten, indexatie en Core Web Vitals. Na een migratie, re-design of grote contentwissel doe je altijd direct een verkorte audit om te voorkomen dat rankings stilletjes wegzakken.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Welke tools heb je nodig voor een technische SEO audit?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Je komt een heel eind met een combinatie van gratis en betaalde tools: Google Search Console voor indexatie en prestaties, PageSpeed Insights voor Core Web Vitals, Screaming Frog of Sitebulb voor een volledige site crawl, Ahrefs of Semrush voor links en rankings, en Google Analytics 4 voor gebruikersgedrag. Voor grote sites zijn logfile-analyzers zoals Screaming Frog Log Analyzer of JetOctopus nuttig.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoe lang duurt een technische SEO audit gemiddeld?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Voor een MKB-website met 100 tot 500 pagina's kost een grondige audit één tot twee volle werkdagen. Voor webshops en grotere sites met duizenden pagina's reken je drie tot vijf dagen, plus extra tijd voor logfile-analyse. De audit zelf is maar het begin — het doorvoeren van de fixes kost meestal het tienvoudige.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat zijn de meest voorkomende problemen die een technische SEO audit oplevert?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    De top vijf in 2026: dubbele content door onjuiste canonicals, trage Core Web Vitals op mobiel, belangrijke pagina's die per ongeluk op noindex staan, gebroken interne links na een migratie, en een sitemap die niet matcht met de daadwerkelijk geïndexeerde pagina's. Deze vijf los je op en je ziet vaak binnen zes weken betere rankings.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Is een technische SEO audit zelf te doen?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Een basis-audit met Search Console en PageSpeed Insights kun je zelf doen — dat vangt de grootste fouten af. Voor een complete audit met logfile-analyse, JavaScript rendering checks en een gestructureerd fix-plan is technische ervaring nodig. De meeste MKB-bedrijven kiezen voor een hybride aanpak: zelf de basis, een specialist voor de diepte.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Related Links */}
                    <section className="mt-16 pt-12 border-t border-primary/10">
                        <h3 className="text-xl font-bold text-primary mb-6">Lees ook</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <Link to="/blogs/seo/core-web-vitals-verbeteren-scoort" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Core Web Vitals verbeteren in 2026</h3>
                                <p className="text-primary/60 text-sm">Concrete fixes voor LCP, INP en CLS — per metriek uitgelegd.</p>
                            </Link>
                            <Link to="/blogs/seo/backlinks-opbouwen" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Backlinks opbouwen in 2026</h3>
                                <p className="text-primary/60 text-sm">Welke tactieken nog werken na alle algoritme-updates.</p>
                            </Link>
                            <Link to="/blogs/seo/content-audit" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Content audit stap voor stap</h3>
                                <p className="text-primary/60 text-sm">Welke pagina's jouw rankings helpen en welke schaden.</p>
                            </Link>
                        </div>
                    </section>
                </div>
            </article>

            {/* Bottom CTA */}
            <section className="w-full pb-32 px-6">
                <div className="max-w-4xl mx-auto bg-primary rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
                    <h2 className="relative z-10 font-drama italic text-background text-3xl sm:text-4xl md:text-5xl mb-6">Weten wat jouw site tegenhoudt?</h2>
                    <p className="relative z-10 font-sans text-background/70 text-lg mb-10 max-w-xl mx-auto">We scannen jouw site op de drie grootste technische SEO-blokkades en laten eerlijk weten of verdieping loont — inclusief wat het oplevert in organisch verkeer.</p>
                    <Link to="/contact" className="relative z-10 btn-magnetic inline-flex items-center justify-center bg-accent text-background font-sans font-bold text-lg px-10 py-4 rounded-[2rem] hover:bg-accent/90 transition-colors">Neem contact op</Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
