import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ChevronRight, User } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function BlogPostZichtbaarWordenAiZoekmachines() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen selection:bg-accent/30 selection:text-dark flex flex-col bg-background">
            <Helmet>
                <title>Zo word je zichtbaar in AI-zoekmachines | Empowers</title>
                <meta name="description" content="Hoe zorg je dat ChatGPT, Perplexity en Gemini jouw merk noemen? Een praktische gids met wat wel en niet werkt om zichtbaar te worden in AI-zoekmachines." />
                <link rel="canonical" href="https://www.empowers.nl/blogs/geo/zichtbaar-worden-ai-zoekmachines" />
                <meta property="og:title" content="Zo word je zichtbaar in AI-zoekmachines" />
                <meta property="og:description" content="Welke acties zorgen dat AI-engines jouw merk noemen, en welke aanpak verspilt alleen je tijd?" />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://www.empowers.nl/blogs/geo/zichtbaar-worden-ai-zoekmachines" />
                <meta property="og:image" content="https://www.empowers.nl/images/blogs/zichtbaar-worden-ai-zoekmachines.jpg" />
                <meta property="article:published_time" content="2026-05-09" />
                <meta property="article:author" content="Empowers" />
                <meta property="article:section" content="GEO" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Zo word je zichtbaar in AI-zoekmachines" />
                <meta name="twitter:description" content="Praktische gids voor zichtbaarheid in ChatGPT, Perplexity en Gemini." />

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Article",
                        "headline": "Zo word je zichtbaar in AI-zoekmachines",
                        "description": "Hoe zorg je dat ChatGPT, Perplexity en Gemini jouw merk noemen? Een praktische gids met wat wel en niet werkt.",
                        "image": "https://www.empowers.nl/images/blogs/zichtbaar-worden-ai-zoekmachines.jpg",
                        "datePublished": "2026-05-09T13:00:00+02:00",
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
                                    "name": "Wat moet ik als eerste doen om zichtbaar te worden in AI-zoekmachines?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Begin met een lijst van de tien tot vijftien vragen die jouw doelgroep echt stelt en typ ze in ChatGPT, Perplexity en Gemini. Zo zie je waar je nu wel of niet verschijnt. Pas daarna pak je de pagina's aan die voor de meest relevante vragen open ruimte laten. Een audit eerst, daarna gericht herschrijven."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Welke type content werkt het best voor AI-zichtbaarheid?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Content die een vraag direct beantwoordt, helder is opgebouwd en met bron is onderbouwd. AI-engines kiezen bij voorkeur pagina's met het antwoord vooraan, een logische kop-structuur en een FAQ-blok onderaan. Generieke keyword-stuffed blogs presteren steeds slechter, terwijl diepe expert-content stijgt in zichtbaarheid."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Hoe lang duurt het voor een nieuwe pagina opduikt in AI-antwoorden?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "In de praktijk vaak vier tot acht weken. AI-engines indexeren nieuwe content niet onmiddellijk, en het kost tijd voordat een pagina autoriteit krijgt voor de bijbehorende vraag. Snellere zichtbaarheid haal je door te schrijven over onderwerpen waar weinig sterke bestaande bronnen zijn, in plaats van te concurreren in verzadigde categorieen."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Maakt mijn bestaande SEO-werk verschil voor AI-zichtbaarheid?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Ja, in grote mate. AI-engines crawlen sites met dezelfde infrastructuur als Googlebot. Wie technisch een sterke SEO-fundering heeft (snelle laadtijd, mobielvriendelijk, schone sitemap, schema markup), heeft een voorsprong. Slechte SEO blokkeert AI-zichtbaarheid even hard als klassieke zichtbaarheid in Google."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Moet ik betalen voor zichtbaarheid in AI-zoekmachines?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Nee, organische zichtbaarheid in AI-engines is op dit moment volledig gratis verdiend. Sommige platforms experimenteren met sponsored placements (ChatGPT en Perplexity hebben aankondigingen gedaan over advertenties), maar de meeste citaties komen via natuurlijke ranking van content. Investeren doe je in betere content, niet in AI-advertenties."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Hoe meet ik of mijn AI-zichtbaarheid groeit?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Combineer drie meetlijnen. Branded zoekvolume in Google Search Console laat zien of mensen na een AI-antwoord naar jouw merk zoeken. Tools als AthenaHQ of Profound loggen per query welke domeinen door een AI-engine als bron worden genoemd. En direct verkeer naar je homepage stijgt vaak als je merk vaker wordt geciteerd."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Helpt het om mijn merk in andere AI-bronnen te krijgen, zoals Wikipedia?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Ja, indirect. AI-engines wegen autoriteits-bronnen zwaarder. Wie als bron wordt genoemd op Wikipedia, in vakmedia, op sterke industrie-blogs en in podcast-shownotes, krijgt vaker zelf citaties. Het is geen quick-win, maar een doorlopende investering in vermeldingen elders op het web."
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
                            { "@type": "ListItem", "position": 4, "name": "Zichtbaar in AI-zoekmachines", "item": "https://www.empowers.nl/blogs/geo/zichtbaar-worden-ai-zoekmachines" }
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
                        <Link to="/blogs/geo" className="hover:text-accent transition-colors">GEO</Link>
                        <ChevronRight className="w-3 h-3" />
                        <span className="text-primary truncate">Zichtbaar in AI-zoekmachines</span>
                    </nav>

                    <header className="mb-16">
                        <div className="inline-block px-3 py-1 bg-accent/10 text-accent font-mono text-xs uppercase tracking-widest rounded-full mb-6">
                            GEO
                        </div>
                        <h1 className="font-sans font-bold text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight mb-8">
                            Zo word je zichtbaar in AI-zoekmachines
                        </h1>
                        <div className="flex flex-wrap items-center gap-6 text-sm font-sans text-primary/60 border-y border-primary/10 py-6">
                            <div className="flex items-center gap-2"><User className="w-4 h-4" /><span>Empowers Redactie</span></div>
                            <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>9 mei 2026</span></div>
                            <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>9 minuten leestijd</span></div>
                        </div>
                    </header>

                    <figure className="w-full h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden mb-16 relative bg-primary">
                        <div className="absolute inset-0 bg-[url('/images/blogs/zichtbaar-worden-ai-zoekmachines.jpg')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </figure>

                    <div className="prose prose-lg max-w-none prose-headings:text-primary prose-headings:font-bold prose-a:text-accent prose-a:underline hover:prose-a:text-accent/80">
                        <p className="text-xl leading-relaxed text-primary/80 font-medium mb-6">
                            ChatGPT en Perplexity (en in toenemende mate Gemini) bepalen steeds vaker of een bezoeker uberhaupt nog op jouw site terechtkomt. Wie nu alleen nog stuurt op Google-rankings, mist de helft. Zichtbaar worden in AI-zoekmachines vraagt om een andere blik, niet om compleet andere techniek. Hieronder de aanpak die in onze ervaring werkt, plus wat geen tijd waard is.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Begin met een audit, niet met schrijven</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De fout die we vaakst zien: bedrijven beginnen met blogs schrijven over GEO-onderwerpen zonder eerst te kijken waar ze nu staan. Dat is verspilde energie. Begin met een lijst van tien tot vijftien zoekvragen die jouw doelgroep typt. Letterlijk. Niet de zoekwoorden uit een SEO-tool, maar de zinnen die je klanten je tijdens een gesprek stellen.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Typ deze vragen in ChatGPT en Perplexity, en check ook Google Gemini. Kijk welke domeinen genoemd worden. Sta jij erbij. Sta een directe concurrent erbij. Staat er een buitenlands merk dat hier eigenlijk niet relevant is. Pas dan weet je waar de open ruimte zit. Schrijven zonder die audit is gokken op welke pagina's iets opleveren.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een audit van vijftig vragen kost een werkdag. Daarna heb je een prioriteitenlijst die zes maanden meegaat.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Pak je sterke pagina's eerst</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Niet alle pagina's verdienen aandacht. Veel bedrijven verspillen weken aan obscure blog-artikelen die toch nooit zichtbaar werden. Pak de top tien procent van je content qua bezoek en autoriteit en herschrijf alleen die voor AI-zichtbaarheid. De rest laat je staan zoals hij is, mits hij technisch in orde is.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Per pagina check je vier punten. Staat het antwoord in de eerste alinea, niet in alinea drie. Heeft de pagina een FAQ-blok met geldig FAQPage-schema. Worden harde claims onderbouwd met bron of interne case. Zijn er minimaal twee interne links naar gerelateerde content op je site.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Mist een van die punten, voeg het toe. Drie pagina's per week is haalbaar. Voor een diepere uitleg per onderdeel staat ons artikel over <Link to="/blogs/geo/contentonderdelen-zorgen-meer-ai-citaties" className="text-accent hover:underline">welke contentonderdelen zorgen voor meer AI-citaties</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Schrijf vragen, geen zoekwoorden</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Klassieke SEO mikte op zoekwoorden in de kop. AI-zoekmachines werken anders. Ze zoeken naar pagina's die letterlijk de vraag van de gebruiker beantwoorden, in natuurlijke taal. Een H2-kop "SEO-tarieven MKB" werkt minder goed dan "Wat kost SEO voor een MKB-bedrijf?". De eerste matcht een keyword, de tweede matcht een vraag.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Schrijf je koppen in vraagvorm waar mogelijk. Geef in de eerste alinea onder elke kop in maximaal drie zinnen het antwoord. Daarna de uitleg. Dit klinkt simpel, maar het verandert de structuur van bijna elke bestaande blog op je site.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Bouw autoriteit buiten je eigen site op</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            AI-engines wegen je site niet alleen op zichzelf. Ze wegen ook hoe vaak en hoe positief je elders genoemd wordt. Vermeldingen in vakmedia, gastblogs op sterke industrie-sites, podcasts, reviews op Trustpilot of Google. Dat hele ecosysteem voedt de score die je merk krijgt in AI-antwoorden.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een specifieke hefboom: Wikipedia. Als je merk of een sleutelbegrip uit jouw vakgebied op Wikipedia wordt genoemd, heeft dat onevenredig veel effect. AI-modellen worden deels getraind op Wikipedia-data en wegen die bron extra zwaar. Niet elke organisatie haalt het Wikipedia-niveau, maar als je daar een referentie kunt verdienen, doe het.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Daarnaast: review-platforms. Goede reviews op Trustpilot of brancheplatforms tellen mee in hoe AI-engines je beoordelen. Vraag actief om reviews na een opdracht. Niet om sterren, om geschreven feedback waar je doelgroep iets aan heeft.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat geen tijd waard is</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Volledig gokken op snel-volume. Tien generieke blogs per maand schrijven over hetzelfde onderwerp werkt niet meer. AI-engines pikken kwaliteit boven hoeveelheid. Een paar diepe pijler-pagina's verslaan tien dunne keyword-blogs. Liever vier sterke artikelen per maand dan tien middelmatige.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Tools die "AI-citaties garanderen" voor een vast bedrag per maand. We hebben ze in onze inbox voorbij zien komen. Niemand kan citaties garanderen, omdat AI-engines dynamisch beslissen welke bron ze tonen. Wat wel werkt: tools die je trackings doen (AthenaHQ, Profound) zodat je weet waar je nu staat. Niet tools die zichtbaarheid kopen.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Compleet je SEO-werk laten staan terwijl je vol op GEO inzet. Klassieke zoekopdrachten zijn niet weg. Wie zijn Google-positie verwaarloost, verliest een groot deel van zijn verkeer dat nog gewoon via zoekresultaten binnenkomt. Een hybride aanpak werkt beter dan kiezen.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">De eerste acht weken concreet</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Week een. Maak je vragenlijst en doe de audit in de drie grote AI-engines (ChatGPT, Perplexity en Google Gemini). Documenteer waar je verschijnt en waar niet.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Week twee tot vier. Pak je vijf belangrijkste pagina's en herschrijf ze volgens de vier-punten-check. Antwoord vooraan, FAQ met schema, bronnen, interne links.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Week vijf tot zes. Schrijf twee tot drie nieuwe pagina's voor vragen waar geen sterke bestaande pagina is. Geen tien dunne blogs, maar diep en compleet werk.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Week zeven en acht. Hertest je vragen in dezelfde AI-engines. Vergelijk met week een. Documenteer welke pagina's nu wel of niet citaties krijgen. Daarmee heb je een meetbare baseline om vanaf hier op door te bouwen. Een diepere uitleg over hoe je die hybride aanpak combineert met SEO staat in onze blog over <Link to="/blogs/geo/seo-strategie-vervangen-door-geo" className="text-accent hover:underline">je SEO-strategie omvormen voor GEO</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wanneer specialisten verschil maken</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De eerste audit en de eerste paar herschrijvingen kun je zelf. Het werk is niet exotisch. Wat sneller schaalt met hulp is doorlopende monitoring per AI-engine, integratie tussen GEO-werk en bestaande SEO en een redactionele kalender die op nieuwe AI-features inspeelt zodra ze verschijnen.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Wil je weten waar jij nu zichtbaar bent en waar de open ruimte zit? Plan een vrijblijvend gesprek via onze <Link to="/contact" className="text-accent hover:underline">contactpagina</Link>. We laten in 30 minuten zien hoe je merk er nu voor staat in AI-antwoorden, en welke drie ingrepen het meeste zouden opleveren.
                        </p>
                    </div>

                    <section className="mt-16 pt-12 border-t border-primary/10">
                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Veelgestelde vragen</h2>
                        <div className="space-y-6 not-prose">
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat moet ik als eerste doen om zichtbaar te worden in AI-zoekmachines?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Begin met een lijst van de tien tot vijftien vragen die jouw doelgroep echt stelt en typ ze in ChatGPT, Perplexity en Gemini. Zo zie je waar je nu wel of niet verschijnt. Pas daarna pak je de pagina's aan die voor de meest relevante vragen open ruimte laten. Een audit eerst, daarna gericht herschrijven.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Welke type content werkt het best voor AI-zichtbaarheid?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Content die een vraag direct beantwoordt, helder is opgebouwd en met bron is onderbouwd. AI-engines kiezen bij voorkeur pagina's met het antwoord vooraan, een logische kop-structuur en een FAQ-blok onderaan. Generieke keyword-stuffed blogs presteren steeds slechter, terwijl diepe expert-content stijgt in zichtbaarheid.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoe lang duurt het voor een nieuwe pagina opduikt in AI-antwoorden?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">In de praktijk vaak vier tot acht weken. AI-engines indexeren nieuwe content niet onmiddellijk, en het kost tijd voordat een pagina autoriteit krijgt voor de bijbehorende vraag. Snellere zichtbaarheid haal je door te schrijven over onderwerpen waar weinig sterke bestaande bronnen zijn, in plaats van te concurreren in verzadigde categorieen.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Maakt mijn bestaande SEO-werk verschil voor AI-zichtbaarheid?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Ja, in grote mate. AI-engines crawlen sites met dezelfde infrastructuur als Googlebot. Wie technisch een sterke SEO-fundering heeft (snelle laadtijd, mobielvriendelijk, schone sitemap, schema markup), heeft een voorsprong. Slechte SEO blokkeert AI-zichtbaarheid even hard als klassieke zichtbaarheid in Google.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Moet ik betalen voor zichtbaarheid in AI-zoekmachines?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Nee, organische zichtbaarheid in AI-engines is op dit moment volledig gratis verdiend. Sommige platforms experimenteren met sponsored placements, maar de meeste citaties komen via natuurlijke ranking van content. Investeren doe je in betere content, niet in AI-advertenties.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoe meet ik of mijn AI-zichtbaarheid groeit?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Combineer drie meetlijnen. Branded zoekvolume in Google Search Console laat zien of mensen na een AI-antwoord naar jouw merk zoeken. Tools als AthenaHQ of Profound loggen per query welke domeinen door een AI-engine als bron worden genoemd. En direct verkeer naar je homepage stijgt vaak als je merk vaker wordt geciteerd.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Helpt het om mijn merk in andere AI-bronnen te krijgen, zoals Wikipedia?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Ja, indirect. AI-engines wegen autoriteits-bronnen zwaarder. Wie als bron wordt genoemd op Wikipedia, in vakmedia, op sterke industrie-blogs en in podcast-shownotes, krijgt vaker zelf citaties. Het is geen quick-win, maar een doorlopende investering in vermeldingen elders op het web.</p>
                            </div>
                        </div>
                    </section>

                    <section className="mt-16 pt-12 border-t border-primary/10">
                        <h3 className="text-xl font-bold text-primary mb-6">Lees ook</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <Link to="/blogs/geo/contentonderdelen-zorgen-meer-ai-citaties" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Contentonderdelen voor AI-citaties</h3>
                                <p className="text-primary/60 text-sm">Welke pagina-elementen AI-engines het vaakst gebruiken als bron.</p>
                            </Link>
                            <Link to="/blogs/geo/seo-strategie-vervangen-door-geo" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Vervang je SEO-strategie door GEO</h3>
                                <p className="text-primary/60 text-sm">Stap voor stap je content omvormen voor AI-zoekmachines.</p>
                            </Link>
                            <Link to="/blogs/geo/wat-is-geo-generative-engine-optimization" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Wat is GEO?</h3>
                                <p className="text-primary/60 text-sm">Generative Engine Optimization van begin tot eind uitgelegd.</p>
                            </Link>
                        </div>
                    </section>

                </div>
            </article>

            <section className="w-full pb-32 px-6">
                <div className="max-w-4xl mx-auto bg-primary rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
                    <h2 className="relative z-10 font-drama italic text-background text-3xl sm:text-4xl md:text-5xl mb-6">
                        Klaar om zichtbaar te worden?
                    </h2>
                    <p className="relative z-10 font-sans text-background/70 text-lg mb-10 max-w-xl mx-auto">
                        We bouwen een GEO-aanpak die binnen drie maanden zichtbare resultaten in AI-antwoorden oplevert. Audit, herschrijven en monitoring in een traject.
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
