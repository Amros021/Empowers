import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ChevronRight, User } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function BlogPostGoogleAdsBureauVragenEersteGesprek() {
    useEffect(() => { window.scrollTo(0, 0); }, []);

    return (
        <main className="min-h-screen selection:bg-accent/30 selection:text-dark flex flex-col bg-background">
            <Helmet>
                <title>Google Ads bureau: 5 vragen die je moet stellen in het eerste gesprek | Empowers</title>
                <meta name="description" content="Vijf vragen die in een uur het verschil maken tussen een serieus Google Ads bureau en een gladde verkooppitch. Wat te vragen, en welk antwoord je hoort." />
                <link rel="canonical" href="https://www.empowers.nl/blogs/google-ads/google-ads-bureau-vragen-eerste-gesprek" />
                <meta property="og:title" content="Google Ads bureau: 5 vragen voor het eerste gesprek" />
                <meta property="og:description" content="Vijf precieze vragen die je tijdens de intake stelt, en wat de juiste antwoorden zijn." />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://www.empowers.nl/blogs/google-ads/google-ads-bureau-vragen-eerste-gesprek" />
                <meta property="og:image" content="https://www.empowers.nl/images/blogs/google-ads-bureau-vragen-eerste-gesprek.jpg" />
                <meta property="article:published_time" content="2026-05-14" />
                <meta property="article:section" content="Google Ads" />

                <script type="application/ld+json">{JSON.stringify({
                    "@context": "https://schema.org", "@type": "Article",
                    "headline": "Google Ads bureau: 5 vragen die je moet stellen in het eerste gesprek",
                    "description": "De vijf belangrijkste vragen voor je intake met een Google Ads bureau, plus hoe je het antwoord beoordeelt.",
                    "image": "https://www.empowers.nl/images/blogs/google-ads-bureau-vragen-eerste-gesprek.jpg",
                    "datePublished": "2026-05-14T16:00:00+02:00",
                    "author": { "@type": "Organization", "name": "Empowers" },
                    "publisher": { "@type": "Organization", "name": "Empowers", "url": "https://www.empowers.nl",
                        "logo": { "@type": "ImageObject", "url": "https://www.empowers.nl/empowers-logo-color.svg" } },
                    "mainEntity": { "@type": "FAQPage", "mainEntity": [
                        { "@type": "Question", "name": "Hoeveel tijd moet ik nemen voor een intake-gesprek?",
                          "acceptedAnswer": { "@type": "Answer", "text": "Plan minimaal een uur. Onder een uur is er geen tijd om de vijf belangrijke vragen behoorlijk te bespreken. Boven anderhalf uur is meestal overbodig en wordt het meer pitch dan gesprek. Een uur tot vijf kwartier is de sweet spot waarin je een goed beeld krijgt." } },
                        { "@type": "Question", "name": "Mag ik in het intake-gesprek ook prijzen vragen?",
                          "acceptedAnswer": { "@type": "Answer", "text": "Ja, maar pas in de laatste 15 minuten. Wie te vroeg over prijzen begint mist de inhoud van het gesprek. Een serieus bureau wil eerst je situatie begrijpen voordat het over fees praat, want zonder context kan het geen reëel voorstel doen. Wie meteen met een vast pakket komt, verkoopt sjabloon-werk." } },
                        { "@type": "Question", "name": "Wat als ik zelf weinig van Google Ads weet?",
                          "acceptedAnswer": { "@type": "Answer", "text": "Dat is normaal en geen bezwaar. De vijf vragen in dit artikel zijn zo opgesteld dat je geen Google Ads-expert hoeft te zijn om ze te stellen of de antwoorden te beoordelen. Wat je beoordeelt is helderheid, eerlijkheid en methodiek, niet de technische uitvoering. Een specialist die wartaal antwoordt om kennis te demonstreren is een verkoper, geen leraar." } },
                        { "@type": "Question", "name": "Moet ik meerdere bureaus tegelijk spreken?",
                          "acceptedAnswer": { "@type": "Answer", "text": "Drie tot vijf intake-gesprekken levert het meest evenwichtig beeld op. Minder en je hebt geen referentie. Meer en de gesprekken gaan door elkaar lopen. Plan ze in dezelfde week zodat de vergelijking scherp blijft. Maak na elk gesprek per direct korte aantekeningen, anders vervaagt het verschil tussen bureaus snel." } },
                        { "@type": "Question", "name": "Wat als een bureau gegevens niet wil delen tijdens de intake?",
                          "acceptedAnswer": { "@type": "Answer", "text": "Een NDA aanbieden is een legitieme oplossing voor bureaus die klantnamen niet mogen tonen. Maar geanonimiseerde data over hun werkwijze, sample experimenten en aanpak hoort altijd te kunnen. Wie zelfs dat niet wil delen verbergt iets, en dat is op zichzelf het antwoord op je vraag." } },
                        { "@type": "Question", "name": "Hoe lang na het gesprek hoor ik een voorstel?",
                          "acceptedAnswer": { "@type": "Answer", "text": "Bij een serieus bureau binnen een week. Een korter dan dat is een sjabloon-voorstel dat ze paraat hadden. Langer dan twee weken is een bureau zonder strakke salescyclus. Het ideale voorstel komt na 3 tot 7 werkdagen, met daarin een korte audit van wat zij in jouw account hebben gezien plus een concreet plan voor de eerste maand." } }
                    ] }
                })}</script>
                <script type="application/ld+json">{JSON.stringify({
                    "@context": "https://schema.org", "@type": "BreadcrumbList",
                    "itemListElement": [
                        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.empowers.nl" },
                        { "@type": "ListItem", "position": 2, "name": "Blogs", "item": "https://www.empowers.nl/blogs" },
                        { "@type": "ListItem", "position": 3, "name": "Google Ads", "item": "https://www.empowers.nl/blogs/google-ads" },
                        { "@type": "ListItem", "position": 4, "name": "5 vragen eerste gesprek", "item": "https://www.empowers.nl/blogs/google-ads/google-ads-bureau-vragen-eerste-gesprek" }
                    ]
                })}</script>
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
                        <span className="text-primary truncate">5 vragen eerste gesprek</span>
                    </nav>

                    <header className="mb-16">
                        <div className="inline-block px-3 py-1 bg-accent/10 text-accent font-mono text-xs uppercase tracking-widest rounded-full mb-6">Google Ads</div>
                        <h1 className="font-sans font-bold text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight mb-8">Google Ads bureau: 5 vragen die je moet stellen in het eerste gesprek</h1>
                        <div className="flex flex-wrap items-center gap-6 text-sm font-sans text-primary/60 border-y border-primary/10 py-6">
                            <div className="flex items-center gap-2"><User className="w-4 h-4" /><span>Empowers Redactie</span></div>
                            <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>14 mei 2026</span></div>
                            <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>7 minuten leestijd</span></div>
                        </div>
                    </header>

                    <figure className="w-full h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden mb-16 relative bg-primary">
                        <div className="absolute inset-0 bg-[url('/images/blogs/google-ads-bureau-vragen-eerste-gesprek.jpg')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </figure>

                    <div className="prose prose-lg max-w-none prose-headings:text-primary prose-headings:font-bold prose-a:text-accent prose-a:underline hover:prose-a:text-accent/80">
                        <p className="text-xl leading-relaxed text-primary/80 font-medium mb-6">
                            Het eerste gesprek met een Google Ads bureau is een verkapt sollicitatiegesprek, alleen ben jij de werkgever. In een uur moet je beoordelen of dit het bureau is dat 30.000 tot 100.000 euro per jaar van jouw geld goed gaat besteden. Vijf vragen scheiden de echte professionals van de verkooppraters. Welke vijf, en wat je in het antwoord moet horen.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Voor je begint: zet het gesprek goed op</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Plan een uur. Maak duidelijk dat dit een verkennend gesprek is, geen verkoopgesprek waarin je direct beslist. Vraag of jouw beslisser ook aanwezig kan zijn als je niet zelf de finale knoop doorhakt. Stuur vooraf een korte mail met de basis: je bedrijf, je belangrijkste producten of diensten, en je huidige Google Ads situatie als die er is.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Wat je hiermee bereikt: het bureau heeft tijd om zich voor te bereiden. Wie zonder voorbereiding aan tafel komt en alles ter plekke moet opzoeken, gaat dat dezelfde houding hebben in de uitvoering. Wie wel voorbereid binnenstapt en al een paar observaties paraat heeft, laat zien dat ze klantwerk serieus nemen.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Vraag 1: wie gaat er aan mijn account werken?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Bij grotere bureaus zit er vaak een verschil tussen wie de pitch geeft (senior account manager of zelfs de eigenaar) en wie het dagelijkse werk doet (een junior of medior specialist). Vraag concreet wie er aan jouw account gaat werken, hoeveel jaar Google Ads-ervaring die persoon heeft, en of die dezelfde persoon ook over een jaar nog jouw account doet.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Wat je wilt horen: een naam, een CV-overzicht, en een commitment over continuïteit. Wat een rood signaal is: een vaag antwoord ("ons team werkt samen aan accounts") of een belofte die niet vastgelegd kan worden. Vraag dan door of het naam-en-jaar-commitment in de offerte komt te staan, en let op de reactie.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Vraag 2: laat me een live klantaccount zien</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Niet rankings-screenshots, niet pitch-case-studies, maar een live Google Ads dashboard van een echte klant in jouw segment of een vergelijkbaar segment, met data over een vol jaar. Klantnamen mogen geanonimiseerd zijn, dat is geen bezwaar. Wat je beoordeelt: hoe de campagne-structuur eruit ziet, of de cijfers structurele groei tonen, en of de bureau-specialist kan uitleggen waarom bepaalde keuzes zijn gemaakt.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een professional toont dit zonder aarzeling. Een onprofessioneel bureau heeft alleen statische slides van wins zonder dat je de structuur of de minder mooie cijfers kunt zien. Vraag specifiek: kun je me ook een account laten zien waar het lastiger ging, en hoe je daarmee omging? Hoe ze die vraag beantwoorden vertelt je meer dan een dozijn winnaar-cases.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Vraag 3: wat ga je in mijn eerste 90 dagen anders doen?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Deze vraag dwingt het bureau om concreet te worden over hun aanpak. Wat je wilt horen: een korte analyse van wat ze in jouw account (of je situatie als je nog geen account hebt) hebben gezien, gevolgd door drie tot vijf concrete acties voor de eerste drie maanden. Bijvoorbeeld: "We zien dat je geen merk-campagne hebt opgesplitst, dat gaan we in week 1 fixen. Daarna gaan we de Performance Max campagne herstructureren naar productgroepen. En in maand 3 starten we met negatieve zoekwoord-uitbreiding op basis van de eerste data."
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een vage antwoord ("we beginnen met een uitgebreide audit en gaan dan optimaliseren") betekent dat het bureau geen concrete observaties heeft. Bij elke serieuze sales-cyclus is het bureau al in je account gedoken voor het gesprek. Wie dat niet heeft gedaan, doet het werk later ook minder grondig.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Vraag 4: hoe ga je leadkwaliteit meten, niet alleen leadvolume?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De grootste fout bij Google Ads is alleen op volume sturen. Veel leads tegen lage kosten klinkt goed totdat je merkt dat de helft niet kwalificeert en je sales-team de andere helft niet binnen kan halen. Een serieus bureau snapt dat en heeft een aanpak voor leadkwaliteit. Vraag concreet: hoe ga je meten of de leads die jullie binnenhalen daadwerkelijk omzet opleveren?
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Wat je wilt horen: ze willen toegang tot je CRM (of een geautomatiseerde feed daaruit) om offline conversies terug te koppelen. Ze willen weten welke lead-kwalificatie-criteria je hanteert. Ze willen aan de bron al filteren op kwaliteit door slimme audience-signalen. Wat een rood signaal is: "we sturen op aantal conversies en je sales-team kwalificeert daarna." Dan optimaliseert het bureau op het verkeerde signaal.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Vraag 5: hoe ga je transparant rapporteren?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Vraag hoe maandrapportage eruitziet, hoe vaak je een sturingsmoment hebt, en of jij rechtstreekse toegang krijgt tot je Google Ads account. Wat je wilt horen: een voorbeeldrapport dat verder gaat dan rankings en klikken, met een concrete actielijst voor de volgende maand. Tweewekelijkse of maandelijkse sturingsmomenten als standaard. En eigenaarschap (Owner) van het Google Ads account bij jou, niet bij het bureau.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Bureaus die jouw eigen account onder zich willen houden (alleen Lezer-rechten voor jou) verbergen ofwel iets, ofwel willen dat je niet zomaar kunt vertrekken. Beide redenen zijn problematisch. Een professional zegt direct: account staat op jouw naam, jij bent eigenaar, wij krijgen werknemer-toegang die je morgen kunt intrekken als je dat wilt. Voor de praktische checks die je later zelf doet bij een lopende samenwerking, lees onze blog over <Link to="/blogs/google-ads/sea-bureau-beoordelen-campagnes-beheer" className="text-accent hover:underline">SEA-bureau beoordelen</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">De vraag die je beter niet stelt</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            "Hoeveel ROAS kunnen jullie garanderen?" Dat is een verkeerde vraag. Niemand kan ROAS garanderen, want die hangt af van je productmarges, je markt, je seizoenseffecten en je advertentiebudget. Bureaus die wel garanties geven liegen, en dat is geen partner voor de lange termijn. De juiste vraag is: wat is een realistische ROAS-bandbreedte voor mijn type business en mijn startsituatie, gegeven jullie ervaring met vergelijkbare klanten? Een eerlijk antwoord daar is meer waard dan een mooie garantie.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Na het gesprek</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Maak binnen een uur na het gesprek korte aantekeningen op vier punten. Hoe concreet waren de antwoorden? Hoeveel vragen stelden zij over jouw situatie versus hoeveel ze zelf vertelden? Welke vragen werden ontweken? En welk gevoel houd je over: dit is iemand met wie ik vier jaar wil werken, of dit is iemand die mijn budget wil hebben?
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Vergelijk dat met de aantekeningen van andere intake-gesprekken in dezelfde week. De verschillen worden dan meestal helder. Voor de bredere context over de keuze tussen bureau en freelancer, lees onze blog over <Link to="/blogs/google-ads/google-ads-specialist-vs-bureau-freelancer" className="text-accent hover:underline">specialist vs bureau</Link>. Wat je in de eerste 90 dagen moet zien staat in onze gids over <Link to="/blogs/google-ads/google-ads-specialist-resultaten-90-dagen" className="text-accent hover:underline">90 dagen resultaten</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Veelgestelde vragen</h2>
                    </div>

                    <section className="mt-4">
                        <div className="space-y-6 not-prose">
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoeveel tijd moet ik nemen voor een intake-gesprek?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Plan minimaal een uur. Onder een uur is er geen tijd om de vijf belangrijke vragen behoorlijk te bespreken. Boven anderhalf uur is meestal overbodig en wordt het meer pitch dan gesprek. Een uur tot vijf kwartier is de sweet spot waarin je een goed beeld krijgt.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Mag ik in het intake-gesprek ook prijzen vragen?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Ja, maar pas in de laatste 15 minuten. Wie te vroeg over prijzen begint mist de inhoud van het gesprek. Een serieus bureau wil eerst je situatie begrijpen voordat het over fees praat, want zonder context kan het geen reëel voorstel doen. Wie meteen met een vast pakket komt, verkoopt sjabloon-werk.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat als ik zelf weinig van Google Ads weet?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Dat is normaal en geen bezwaar. De vijf vragen in dit artikel zijn zo opgesteld dat je geen Google Ads-expert hoeft te zijn om ze te stellen of de antwoorden te beoordelen. Wat je beoordeelt is helderheid, eerlijkheid en methodiek, niet de technische uitvoering. Een specialist die wartaal antwoordt om kennis te demonstreren is een verkoper, geen leraar.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Moet ik meerdere bureaus tegelijk spreken?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Drie tot vijf intake-gesprekken levert het meest evenwichtig beeld op. Minder en je hebt geen referentie. Meer en de gesprekken gaan door elkaar lopen. Plan ze in dezelfde week zodat de vergelijking scherp blijft. Maak na elk gesprek per direct korte aantekeningen, anders vervaagt het verschil tussen bureaus snel.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat als een bureau gegevens niet wil delen tijdens de intake?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Een NDA aanbieden is een legitieme oplossing voor bureaus die klantnamen niet mogen tonen. Maar geanonimiseerde data over hun werkwijze, sample experimenten en aanpak hoort altijd te kunnen. Wie zelfs dat niet wil delen verbergt iets, en dat is op zichzelf het antwoord op je vraag.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoe lang na het gesprek hoor ik een voorstel?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Bij een serieus bureau binnen een week. Een korter dan dat is een sjabloon-voorstel dat ze paraat hadden. Langer dan twee weken is een bureau zonder strakke salescyclus. Het ideale voorstel komt na 3 tot 7 werkdagen, met daarin een korte audit van wat zij in jouw account hebben gezien plus een concreet plan voor de eerste maand.</p>
                            </div>
                        </div>
                    </section>

                    <section className="mt-16 pt-12 border-t border-primary/10">
                        <h3 className="text-xl font-bold text-primary mb-6">Lees ook</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <Link to="/blogs/google-ads/google-ads-specialist-resultaten-90-dagen" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">90 dagen resultaten</h3>
                                <p className="text-primary/60 text-sm">De drie meetbare resultaten die een specialist binnen 90 dagen moet leveren.</p>
                            </Link>
                            <Link to="/blogs/google-ads/sea-bureau-beoordelen-campagnes-beheer" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">SEA bureau beoordelen</h3>
                                <p className="text-primary/60 text-sm">Zes checks die je zelf doet om je lopende SEA-bureau te beoordelen.</p>
                            </Link>
                            <Link to="/blogs/google-ads" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Google Ads blogs</h3>
                                <p className="text-primary/60 text-sm">Alle artikelen over Google Ads strategie en uitvoering.</p>
                            </Link>
                        </div>
                    </section>
                </div>
            </article>

            <section className="w-full pb-32 px-6">
                <div className="max-w-4xl mx-auto bg-primary rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
                    <h2 className="relative z-10 font-drama italic text-background text-3xl sm:text-4xl md:text-5xl mb-6">Een eerlijk intake-gesprek?</h2>
                    <p className="relative z-10 font-sans text-background/70 text-lg mb-10 max-w-xl mx-auto">We komen voorbereid het gesprek in, kijken vooraf in je account en geven concrete observaties. Geen sjabloon-pitch.</p>
                    <Link to="/contact" className="relative z-10 btn-magnetic inline-flex items-center justify-center bg-accent text-background font-sans font-bold text-lg px-10 py-4 rounded-[2rem] hover:bg-accent/90 transition-colors">Neem contact op</Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
