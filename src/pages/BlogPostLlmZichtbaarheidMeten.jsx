import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ChevronRight, User } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function BlogPostLlmZichtbaarheidMeten() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen selection:bg-accent/30 selection:text-dark flex flex-col bg-background">
            <Helmet>
                <title>LLM-zichtbaarheid meten: zo weet je of AI jou ziet | Empowers</title>
                <meta name="description" content="LLM-zichtbaarheid meten betekent checken of AI-tools jouw content citeren. Lees welke tools je hiervoor gebruikt, welke signalen tellen en hoe je de metingen omzet naar groei." />
                <link rel="canonical" href="https://www.empowers.nl/blogs/geo/llm-zichtbaarheid-meten-ai-ziet" />
                <meta property="og:title" content="LLM-zichtbaarheid meten: zo weet je of AI jou ziet" />
                <meta property="og:description" content="Zo meet je of ChatGPT, Perplexity, Claude en Google AI Overviews jouw content zien en citeren. Concrete tools, signalen en stappen." />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://www.empowers.nl/blogs/geo/llm-zichtbaarheid-meten-ai-ziet" />
                <meta property="og:image" content="https://www.empowers.nl/images/blogs/llm-zichtbaarheid-meten-ai-ziet.jpg" />
                <meta property="article:published_time" content="2026-04-22" />
                <meta property="article:author" content="Empowers" />
                <meta property="article:section" content="GEO" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="LLM-zichtbaarheid meten: zo weet je of AI jou ziet" />
                <meta name="twitter:description" content="Zo meet je of AI-tools jouw content citeren en hoe je die metingen omzet naar groei." />

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Article",
                        "headline": "LLM-zichtbaarheid meten: zo weet je of AI jou ziet",
                        "description": "LLM-zichtbaarheid meten betekent checken of AI-tools jouw content citeren. Lees welke tools je hiervoor gebruikt, welke signalen tellen en hoe je de metingen omzet naar groei.",
                        "image": "https://www.empowers.nl/images/blogs/llm-zichtbaarheid-meten-ai-ziet.jpg",
                        "datePublished": "2026-04-22T09:00:00+02:00",
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
                                    "name": "Wat betekent LLM-zichtbaarheid precies?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "LLM-zichtbaarheid is de mate waarin grote taalmodellen zoals ChatGPT, Claude, Perplexity en Gemini jouw merk, website of content oppakken in hun antwoorden. Het gaat om twee dingen: of ze jouw content kennen en of ze die daadwerkelijk citeren in antwoorden aan eindgebruikers."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Welke tools meten LLM-zichtbaarheid?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "De bekendste tools zijn Peec AI, Profound, Otterly.ai, AthenaHQ en Bluegill. Ze simuleren prompts die jouw doelgroep stelt en loggen hoe vaak jouw domein als bron verschijnt. Voor een snelle gratis check gebruik je de zoekfunctie in ChatGPT of Perplexity zelf."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Hoe vaak moet je LLM-zichtbaarheid meten?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Een wekelijkse of tweewekelijkse meting werkt voor de meeste bedrijven. Modellen updaten hun indexen en antwoorden veranderen sneller dan in klassieke SEO. Meet altijd rond een vaste dag en tijd, want antwoorden wisselen gedurende de dag."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Wat is een goede LLM-zichtbaarheidsscore?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Er is geen harde norm. Bij onze klanten zien we dat een share of voice van 10 tot 25 procent binnen een duidelijk gedefinieerd onderwerp al serieuze impact geeft. Groter dan je denkt, want AI-tools tonen gemiddeld maar drie tot vijf bronnen per antwoord."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Helpt een hoge Google-ranking bij LLM-zichtbaarheid?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Gedeeltelijk. Google AI Overviews leunen sterk op de reguliere Google-index, dus een goede ranking helpt daar direct. ChatGPT en Perplexity gebruiken andere bronnen en eigen indexen. Een goede SEO-basis is nuttig, maar geen garantie voor citaties in andere AI-tools."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Kun je LLM-zichtbaarheid zelf meten zonder dure tool?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Ja. Maak een lijst van vijftien tot dertig prompts die jouw doelgroep zou stellen, stel ze handmatig aan ChatGPT, Perplexity en Google AI Overviews, en leg vast welke bronnen worden genoemd. Zet dat in een spreadsheet. Dat kost tijd, maar geeft een eerlijk basisbeeld."
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
                            { "@type": "ListItem", "position": 3, "name": "GEO", "item": "https://www.empowers.nl/blogs/geo" },
                            { "@type": "ListItem", "position": 4, "name": "LLM-zichtbaarheid meten", "item": "https://www.empowers.nl/blogs/geo/llm-zichtbaarheid-meten-ai-ziet" }
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
                        <Link to="/blogs/geo" className="hover:text-accent transition-colors">GEO</Link>
                        <ChevronRight className="w-3 h-3" />
                        <span className="text-primary truncate">LLM-zichtbaarheid meten</span>
                    </nav>

                    {/* Header */}
                    <header className="mb-16">
                        <div className="inline-block px-3 py-1 bg-accent/10 text-accent font-mono text-xs uppercase tracking-widest rounded-full mb-6">
                            GEO
                        </div>
                        <h1 className="font-sans font-bold text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight mb-8">
                            LLM-zichtbaarheid meten: zo weet je of AI jou ziet
                        </h1>
                        <div className="flex flex-wrap items-center gap-6 text-sm font-sans text-primary/60 border-y border-primary/10 py-6">
                            <div className="flex items-center gap-2"><User className="w-4 h-4" /><span>Empowers Redactie</span></div>
                            <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>22 april 2026</span></div>
                            <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>8 minuten leestijd</span></div>
                        </div>
                    </header>

                    {/* Featured Image */}
                    <figure className="w-full h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden mb-16 relative bg-primary">
                        <div className="absolute inset-0 bg-[url('/images/blogs/llm-zichtbaarheid-meten-ai-ziet.jpg')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </figure>

                    {/* Content */}
                    <div className="prose prose-lg max-w-none prose-headings:text-primary prose-headings:font-bold prose-a:text-accent prose-a:underline hover:prose-a:text-accent/80">
                        <p className="text-xl leading-relaxed text-primary/80 font-medium mb-6">
                            LLM-zichtbaarheid meten betekent checken of AI-tools zoals ChatGPT, Claude, Perplexity en Google AI Overviews jouw content daadwerkelijk oppakken en citeren. Je stelt relevante prompts, legt vast welke bronnen het model noemt en volgt dat over tijd. Zonder meting weet je niet of jouw GEO-werk iets oplevert. Met meting zie je precies welke pagina's scoren en welke niet.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Waarom is LLM-zichtbaarheid meten nu relevant?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Zoekgedrag verandert sneller dan de meeste dashboards bijhouden. Waar vroeger tien blauwe links op Google de kern waren, beginnen steeds meer mensen hun zoektocht in een chatbot. Ze vragen ChatGPT of Perplexity om een vergelijking, een aanbeveling of een uitleg, en klikken pas daarna door. Als jouw bedrijf in die antwoorden niet voorkomt, mis je een klantreis die je in je klassieke tracking niet eens ziet.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            LLM-zichtbaarheid meten sluit dat gat. Je krijgt een beeld van welk merk, welke website en welke content AI-tools kiezen als betrouwbare bron. Dat is waardevolle data. Vooral omdat je er direct iets mee kunt: zwakke thema's verbeteren, sterke pagina's uitbreiden en gaps invullen waar je concurrenten wel zichtbaar zijn. Meer achtergrond over hoe die selectie werkt lees je in onze <Link to="/blogs/geo/ai-zoekmachines-bronnen" className="text-accent hover:underline">blog over hoe AI-zoekmachines bronnen kiezen</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat meet je precies?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            LLM-zichtbaarheid valt uiteen in drie lagen. De eerste laag is kennis: weet het model dat jouw merk of website bestaat? Dat check je met directe prompts als "Wat weet je over merk X?" of "Welke specialisten in niche Y ken je?". De tweede laag is citaat: wordt jouw domein opgehaald als bron bij vragen die jouw doelgroep stelt? Daar gaat het om zichtbare links en expliciete vermeldingen in de antwoordtekst.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De derde laag is sentiment: hoe wordt jouw merk beschreven in die antwoorden? Positief, neutraal, negatief? Soms staan er verouderde claims in AI-antwoorden die niet meer kloppen met hoe jouw bedrijf nu werkt. Die wil je opsporen, omdat ze jouw positionering uit handen geven. Alle drie de lagen samen geven een compleet beeld van hoe de AI-wereld jouw bedrijf ziet.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Welke tools gebruik je voor LLM-tracking?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De markt voor GEO-tracking tools groeit snel. Peec AI, Profound, Otterly.ai, AthenaHQ en Bluegill behoren tot de meest gebruikte platforms. Ze werken volgens hetzelfde principe: je voert een lijst prompts in, de tool stelt die prompts automatisch aan meerdere modellen en logt hoe vaak jouw domein in de antwoorden voorkomt. Vervolgens krijg je dashboards met share of voice, citation count en verschuivingen over tijd.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Prijzen lopen uiteen van rond de 50 tot enkele honderden euro per maand, afhankelijk van het aantal prompts en modellen. Voor kleinere bedrijven is een basisabonnement vaak genoeg. Grotere merken die meerdere onderwerpen tegelijk willen monitoren, kiezen voor een uitgebreider plan. Je kunt ook handmatig beginnen met een gratis spreadsheet. Dat is arbeidsintensief, maar werkt prima als je nog geen budget hebt vrijgemaakt.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe stel je een bruikbare prompt-set samen?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een prompt-set is de ruggengraat van iedere meting. Slechte prompts geven misleidende data. Goede prompts geven inzicht waar je mee kunt werken. Begin met een lijst van vijftien tot dertig vragen die jouw doelgroep in de praktijk stelt. Kijk naar je klantgesprekken, naar Google Search Console en naar veelgestelde vragen die binnenkomen via mail of telefoon.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Varieer in type vraag. Vergelijkende prompts zoals "Wat is het verschil tussen A en B?", aanbevelingsprompts zoals "Welke bureaus in Nederland kun je aanbevelen voor X?" en definitieprompts zoals "Wat is Z?". Iedere vraagtype activeert een ander type content. Zo krijg je zicht op welke prompttypes jouw zwakke en sterke plekken zijn. Bij onze klanten zien we vaak dat aanbevelingsprompts in het begin het zwakst scoren, omdat die expliciete merkvermeldingen vereisen.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Welke metrics zijn echt belangrijk?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Focus op vier kernmetrics. Share of voice laat zien welk percentage van de antwoorden jouw merk of domein benoemt, binnen een duidelijk afgebakend thema. Citation rate telt hoe vaak jouw domein als klikbare bron verschijnt. Positie binnen het antwoord geeft aan hoe prominent je staat: eerste bron, derde bron of aan het einde. Sentiment scoort of jouw merk positief, neutraal of negatief wordt beschreven.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Verliefd worden op één cijfer is een valkuil. Share of voice kan stijgen terwijl citation rate daalt, bijvoorbeeld omdat je vaker genoemd wordt in lopende tekst maar minder vaak als klikbare bron. Kijk altijd naar het totaalbeeld. Een webshop die we begeleidden verdubbelde share of voice binnen zes weken, maar zag de conversie uit AI-verkeer pas toenemen toen ook citation rate omhoog ging. Meer over hoe je het rendement van betaalde campagnes meet lees je in onze <Link to="/blogs/google-ads/meet-roi-google-ads-campagne" className="text-accent hover:underline">blog over de ROI van Google Ads meten</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe herken je onjuiste of verouderde claims?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            AI-modellen hallucineren. Dat betekent dat ze soms dingen zeggen over jouw bedrijf die niet kloppen of niet meer actueel zijn. Prijs, dienstenaanbod, branche-focus of oprichter, alles kan onbewust verkeerd worden weergegeven. Als je dat niet meet, ligt dat gewoon op straat. Potentiële klanten lezen verouderde informatie en nemen een beslissing op basis van onjuiste data.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Log bij elke meting letterlijk een paar karakteristieken uit het antwoord. "Claim over ons, klopt of klopt niet". Als iets niet klopt, is de oplossing meestal simpel: publiceer nieuwe, kraakheldere content die de juiste feiten stelt en zorg dat die content technisch bereikbaar is voor AI-crawlers. Een paar weken later komen de aangepaste feiten vaak al terug in de antwoorden.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Van meting naar groei: hoe zet je data om in actie?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Data zonder actie is rapportage, geen marketing. Plan na elke meetronde een vaste evaluatie. Welke prompts scoren zwak? Welk type content ontbreekt op je site? Waar verwijzen de AI-tools wel naar concurrenten en niet naar jou? Dat zijn jouw briefs voor de volgende contentronde. Een structuur die we bij klanten veel gebruiken is een rolling backlog: elke twee weken een nieuwe set prioriteiten op basis van de meting.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Koppel je meting ook aan conversie. Welke blogs die in AI-antwoorden verschijnen, trekken nieuw verkeer? Welke zetten dat verkeer om in contactaanvragen of verkopen? Zo ontstaat een feedbackloop: AI-zichtbaarheid verbeteren, verkeer meten, conversie optimaliseren, weer opnieuw. Dat is GEO als groeikanaal, niet als eenmalig project.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wie is verantwoordelijk voor LLM-tracking?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            In veel MKB-teams is niemand officieel verantwoordelijk voor GEO. Die taak landt vaak ergens tussen SEO, content en strategie. Kies bewust één persoon die eindverantwoordelijk is voor het meten, rapporteren en omzetten naar acties. Zonder eigenaar verzandt de meting in een spreadsheet die niemand opent.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Kleinere bedrijven kunnen dit zelf doen met een paar uur per week. Grotere organisaties kiezen vaak voor een externe GEO-specialist die de meting en de strategie verzorgt. Belangrijk is dat de uitkomsten maandelijks in een managementrapport terechtkomen, naast de klassieke marketingmetrics. Dan wordt AI-zichtbaarheid een serieuze KPI.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Wil je weten of jouw merk zichtbaar is in ChatGPT, Perplexity en Google AI Overviews? We maken een nulmeting en laten zien welke stappen de meeste groei opleveren. Plan een gesprek via onze <Link to="/contact" className="text-accent hover:underline">contactpagina</Link>.
                        </p>
                    </div>

                    {/* FAQ Section */}
                    <section className="mt-16 pt-12 border-t border-primary/10">
                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Veelgestelde vragen</h2>
                        <div className="space-y-6 not-prose">
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat betekent LLM-zichtbaarheid precies?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">LLM-zichtbaarheid is de mate waarin grote taalmodellen zoals ChatGPT, Claude, Perplexity en Gemini jouw merk, website of content oppakken in hun antwoorden. Het gaat om twee dingen: of ze jouw content kennen en of ze die daadwerkelijk citeren in antwoorden aan eindgebruikers.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Welke tools meten LLM-zichtbaarheid?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">De bekendste tools zijn Peec AI, Profound, Otterly.ai, AthenaHQ en Bluegill. Ze simuleren prompts die jouw doelgroep stelt en loggen hoe vaak jouw domein als bron verschijnt. Voor een snelle gratis check gebruik je de zoekfunctie in ChatGPT of Perplexity zelf.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoe vaak moet je LLM-zichtbaarheid meten?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Een wekelijkse of tweewekelijkse meting werkt voor de meeste bedrijven. Modellen updaten hun indexen en antwoorden veranderen sneller dan in klassieke SEO. Meet altijd rond een vaste dag en tijd, want antwoorden wisselen gedurende de dag.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat is een goede LLM-zichtbaarheidsscore?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Er is geen harde norm. Bij onze klanten zien we dat een share of voice van 10 tot 25 procent binnen een duidelijk gedefinieerd onderwerp al serieuze impact geeft. Groter dan je denkt, want AI-tools tonen gemiddeld maar drie tot vijf bronnen per antwoord.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Helpt een hoge Google-ranking bij LLM-zichtbaarheid?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Gedeeltelijk. Google AI Overviews leunen sterk op de reguliere Google-index, dus een goede ranking helpt daar direct. ChatGPT en Perplexity gebruiken andere bronnen en eigen indexen. Een goede SEO-basis is nuttig, maar geen garantie voor citaties in andere AI-tools.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Kun je LLM-zichtbaarheid zelf meten zonder dure tool?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Ja. Maak een lijst van vijftien tot dertig prompts die jouw doelgroep zou stellen, stel ze handmatig aan ChatGPT, Perplexity en Google AI Overviews, en leg vast welke bronnen worden genoemd. Zet dat in een spreadsheet. Dat kost tijd, maar geeft een eerlijk basisbeeld.</p>
                            </div>
                        </div>
                    </section>

                    {/* Related Links */}
                    <section className="mt-16 pt-12 border-t border-primary/10">
                        <h3 className="text-xl font-bold text-primary mb-6">Lees ook</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <Link to="/blogs/geo/ai-zoekmachines-bronnen" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Hoe AI-zoekmachines bronnen kiezen</h3>
                                <p className="text-primary/60 text-sm">Lees welke criteria ChatGPT en Perplexity gebruiken om bronnen te kiezen.</p>
                            </Link>
                            <Link to="/blogs/geo/chatgpt-website-citeren" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">ChatGPT website citeren</h3>
                                <p className="text-primary/60 text-sm">Check of ChatGPT jouw website al oppakt als bron.</p>
                            </Link>
                            <Link to="/blogs/geo/geo-vs-seo-verschil-heb" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">GEO vs SEO</h3>
                                <p className="text-primary/60 text-sm">Wat is het verschil en waarom heb je allebei nodig?</p>
                            </Link>
                        </div>
                    </section>
                </div>
            </article>

            {/* Bottom CTA */}
            <section className="w-full pb-32 px-6">
                <div className="max-w-4xl mx-auto bg-primary rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
                    <h2 className="relative z-10 font-drama italic text-background text-3xl sm:text-4xl md:text-5xl mb-6">Zichtbaar worden in AI-antwoorden?</h2>
                    <p className="relative z-10 font-sans text-background/70 text-lg mb-10 max-w-xl mx-auto">We maken een nulmeting van jouw LLM-zichtbaarheid en laten zien welke stappen het meeste opleveren.</p>
                    <Link to="/contact" className="relative z-10 btn-magnetic inline-flex items-center justify-center bg-accent text-background font-sans font-bold text-lg px-10 py-4 rounded-[2rem] hover:bg-accent/90 transition-colors">Neem contact op</Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
