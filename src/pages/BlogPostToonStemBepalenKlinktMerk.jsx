import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ChevronRight, User } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function BlogPostToonStemBepalenKlinktMerk() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen selection:bg-accent/30 selection:text-dark flex flex-col bg-background">
            <Helmet>
                <title>Tone of voice bepalen: zo klinkt jouw merk consistent | Empowers</title>
                <meta name="description" content="Een herkenbare merkstem ontstaat niet vanzelf. Hoe je in een halve dag een werkbare tone of voice vastlegt die je hele team kan gebruiken." />
                <link rel="canonical" href="https://www.empowers.nl/blogs/algemeen/tone-of-voice-bepalen-klinkt-merk" />
                <meta property="og:title" content="Tone of voice bepalen: zo klinkt jouw merk consistent" />
                <meta property="og:description" content="Praktische aanpak om je merkstem vast te leggen, te trainen en te bewaken." />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://www.empowers.nl/blogs/algemeen/tone-of-voice-bepalen-klinkt-merk" />
                <meta property="og:image" content="https://www.empowers.nl/images/blogs/tone-of-voice-bepalen-klinkt-merk.jpg" />
                <meta property="article:published_time" content="2026-05-13" />
                <meta property="article:author" content="Empowers" />
                <meta property="article:section" content="Algemeen" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Tone of voice bepalen: zo klinkt jouw merk consistent" />
                <meta name="twitter:description" content="Van vaag merkgevoel naar werkbare schrijfregels." />

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Article",
                        "headline": "Tone of voice bepalen: zo klinkt jouw merk consistent",
                        "description": "Een herkenbare merkstem ontstaat niet vanzelf. Hoe je in een halve dag een werkbare tone of voice vastlegt die je hele team kan gebruiken.",
                        "image": "https://www.empowers.nl/images/blogs/tone-of-voice-bepalen-klinkt-merk.jpg",
                        "datePublished": "2026-05-13T15:00:00+02:00",
                        "author": { "@type": "Organization", "name": "Empowers" },
                        "publisher": {
                            "@type": "Organization", "name": "Empowers", "url": "https://www.empowers.nl",
                            "logo": { "@type": "ImageObject", "url": "https://www.empowers.nl/empowers-logo-color.svg" }
                        },
                        "mainEntity": {
                            "@type": "FAQPage",
                            "mainEntity": [
                                {
                                    "@type": "Question",
                                    "name": "Wat is een tone of voice precies?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Een tone of voice is de manier waarop je merk zich uitdrukt, los van wat het zegt. Het gaat om woordkeuze, zinslengte, formaliteit, humor en houding. Twee bedrijven kunnen hetzelfde product verkopen met heel verschillende tone of voice: de één formeel en autoritair, de ander speels en toegankelijk. Een vastgelegde tone of voice zorgt dat al je communicatie als één merk klinkt."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Waarom is een consistente merkstem belangrijk?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Consistentie bouwt herkenning op. Wanneer klanten elke keer hetzelfde gevoel krijgen van je website, je e-mails en je social posts, ontstaat vertrouwen. Inconsistente communicatie maakt je merk onbetrouwbaar zonder dat mensen kunnen aanwijzen waarom. Voor het MKB is consistentie bovendien het verschil tussen amateur en professioneel ogen, ongeacht je werkelijke bedrijfsgrootte."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Hoe vind ik mijn tone of voice?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Begin bij wie je bent en wie je klanten zijn. Drie vragen helpen: hoe zou een goede vriend ons beschrijven, welke woorden gebruiken onze beste klanten, en wat willen we absoluut niet klinken? De antwoorden geven richting. Een tweede check: vergelijk jezelf met drie concurrenten en bepaal in welke dimensies je anders wil klinken. Het verschil maakt je herkenbaar."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Hoe leg je een tone of voice vast?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Met een eenvoudig document van twee tot vier pagina's. Daarop drie tot vijf kernkenmerken, met per kenmerk een 'wel/niet'-tabel en concrete voorbeelden. Plus enkele woordenlijsten: termen die je wel gebruikt, termen die je vermijdt. En een paar voor-en-na-voorbeelden uit echte communicatie. Maak het kort genoeg dat iedereen het leest, concreet genoeg dat iedereen het kan toepassen."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Hoe train ik mijn team in onze tone of voice?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Documenteren is niet genoeg. Houd een gezamenlijke werksessie waarin je oude communicatie samen herschrijft volgens de nieuwe stem. Stel een 'voice champion' aan die nieuwe content reviewt voor publicatie. Bouw goede voorbeelden in je teamomgeving op zodat mensen kunnen kopiëren wat werkt. Na drie maanden zit de stem in het hoofd, daarna gaat het vanzelf."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Verandert een tone of voice over tijd?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Een goede tone of voice is stabiel maar niet bevroren. De kernkenmerken blijven jaren staan, de voorbeelden en woordenlijsten evolueren met je product, je doelgroep en de tijd. Plan jaarlijks een evaluatie. Klinkt onze stem nog zoals we willen, past hij nog bij wie onze klanten geworden zijn, hoeven we iets bij te stellen. Te veel veranderen verwart, te weinig veranderen veroudert."
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
                            { "@type": "ListItem", "position": 3, "name": "Algemeen", "item": "https://www.empowers.nl/blogs/algemeen" },
                            { "@type": "ListItem", "position": 4, "name": "Tone of voice", "item": "https://www.empowers.nl/blogs/algemeen/tone-of-voice-bepalen-klinkt-merk" }
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
                        <Link to="/blogs/algemeen" className="hover:text-accent transition-colors">Algemeen</Link>
                        <ChevronRight className="w-3 h-3" />
                        <span className="text-primary truncate">Tone of voice</span>
                    </nav>

                    <header className="mb-16">
                        <div className="inline-block px-3 py-1 bg-accent/10 text-accent font-mono text-xs uppercase tracking-widest rounded-full mb-6">
                            Algemeen
                        </div>
                        <h1 className="font-sans font-bold text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight mb-8">
                            Tone of voice bepalen: zo klinkt jouw merk consistent
                        </h1>

                        <div className="flex flex-wrap items-center gap-6 text-sm font-sans text-primary/60 border-y border-primary/10 py-6">
                            <div className="flex items-center gap-2"><User className="w-4 h-4" /><span>Empowers Redactie</span></div>
                            <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>13 mei 2026</span></div>
                            <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>7 minuten leestijd</span></div>
                        </div>
                    </header>

                    <figure className="w-full h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden mb-16 relative bg-primary">
                        <div className="absolute inset-0 bg-[url('/images/blogs/tone-of-voice-bepalen-klinkt-merk.jpg')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </figure>

                    <div className="prose prose-lg max-w-none prose-headings:text-primary prose-headings:font-bold prose-a:text-accent prose-a:underline hover:prose-a:text-accent/80">
                        <p className="text-xl leading-relaxed text-primary/80 font-medium mb-6">
                            Lees vijf willekeurige uitingen van een bedrijf en je weet hoe groot het is. De homepage klinkt als de marketing-stagiair, de nieuwsbrief als de directeur, de e-mailantwoorden als wie er die ochtend tijd voor had. Dat is geen amateurisme, dat is een ontbrekende tone of voice. Een herkenbare merkstem ontstaat niet vanzelf, maar zodra hij staat, herken je hem in elke uiting. Klanten ook.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Waarom dit meer is dan een stijlboekje</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Tone of voice klinkt zacht. Een woord van marketeers, een onderwerp voor brainstormsessies, iets dat altijd later komt. In de praktijk verraadt het je merk eerder dan een logo. Een klant beslist binnen seconden of jouw bedrijf bij hem past. Die beslissing wordt zelden bewust gemaakt. Hij ontstaat uit toon. Voelt het stoer, betrouwbaar, eerlijk, te hijgerig, te formeel, te wollig? Voordat hij weet wat hij denkt, heeft hij al een conclusie.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Wie consistent klinkt, bouwt herkenning op. Wie inconsistent klinkt, verwart. Een websitepagina die plechtig is, een productomschrijving die joviaal is, en e-mails die als een handleiding lezen, voelen alsof drie verschillende bedrijven met je praten. Dat ondermijnt vertrouwen op een manier die mensen lastig kunnen benoemen, en daardoor extra hardnekkig is.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat een tone of voice precies bestrijkt</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Het gaat verder dan jij-versus-u en formeel-versus-informeel. Je tone of voice bestrijkt zinslengte, ritme, gebruik van humor, mate van directheid, beeldspraak, jargon, formuleringen voor goed nieuws en slecht nieuws. Het bepaalt hoe je een fout uitlegt, hoe je een succes viert, hoe je een onbekende klant aanspreekt en hoe je een terugkerende klant herinnert aan iets.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een goede manier om er grip op te krijgen: denk in dimensies. Hoe formeel ben je, op een schaal? Hoe direct? Hoeveel emotie laat je toe? Hoeveel humor durf je? Hoe technisch mag het zijn? Voor elke dimensie kies je een positie op de schaal en houd je je daar aan. Twee bedrijven kunnen identieke producten verkopen en compleet verschillende posities innemen.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Drie vragen om je stem te vinden</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Niet alle merken weten al hoe ze willen klinken. Drie vragen helpen om de eerste contouren te vinden. Eerste: als ons bedrijf een persoon was, hoe zou een goede vriend hem beschrijven? Niet je zelfgeschreven merkwaarden, wel de adjectieven die spontaan opkomen bij iemand die jullie kent.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Tweede vraag: hoe klinken onze beste klanten? Welke woorden gebruiken zij in mailtjes en gesprekken? Een merkstem die overeenkomt met de taal van je doelgroep voelt natuurlijker en verkoopt makkelijker. Derde vraag: wat willen we absoluut niet klinken? Een lijst van "geen wollig jargon, geen verkooppraat, geen Engelse modewoorden" geeft net zoveel richting als positieve omschrijvingen.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Voer deze oefening met twee of drie mensen uit, niet alleen. Een blok van anderhalf uur is genoeg om de eerste schets te maken. Daarna laat je het bezinken, schaaf je een week later bij, en heb je een werkbaar startdocument.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Het document dat het verschil maakt</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een tone of voice die alleen in jouw hoofd zit, blijft daar zitten. Je hebt iets fysieks nodig. Maar geen dik pamflet, wel een werkbaar document van twee tot vier pagina's. Daarin staan drie tot vijf kernkenmerken, elk met een korte uitleg, een "wel zo / niet zo"-tabel en concrete voorbeelden uit echte uitingen.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Voeg een woordenlijst toe. Welke termen gebruik je wel, welke vermijd je? Een merk dat warm en direct wil klinken zal "we" gebruiken in plaats van "onze organisatie", "vandaag" in plaats van "in deze periode", "lossen we op" in plaats van "wordt verholpen". Klein verschil per woord, groot verschil over duizenden zinnen.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Sluit af met voor-en-na-voorbeelden van echte communicatie. Hoe zag deze e-mail eruit zonder onze stem, hoe ziet hij eruit met onze stem? Dat is concreter dan welke abstracte regel ook, en zorgt dat ook nieuwe collega's snel begrijpen waar het over gaat. Een goede aanpak om die voorbeelden te genereren beschrijven we in onze blog over <Link to="/blogs/strategie/content-marketing-vs-betaalde-advertenties" className="text-accent hover:underline">content marketing</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Tone of voice en AI-tools</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Met de opkomst van AI-schrijftools is een vastgelegde stem belangrijker geworden, niet minder. Wie ChatGPT of Claude vraagt om een tekst te schrijven, krijgt zonder instructies een grijze gemiddelde tekst terug. Voeg je merkstem-document toe aan de prompt en je krijgt iets dat je merk dichter benadert. Niet perfect, wel een sterke start.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Bedrijven die hun stem niet vastleggen, gaan met AI klinken als alle andere bedrijven. Daarmee verdwijnt juist het onderscheid dat ze nodig hebben in een markt waar volume goedkoper wordt dan ooit. Wie zijn merkstem documenteert, behoudt herkenbaarheid, ook als de productie schaalt via AI. Meer over hoe Google daar mee omgaat lees je in onze blog over <Link to="/blogs/strategie/straft-google-ai-gegenereerde-content" className="text-accent hover:underline">AI-content en Google</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe houd je het ook na drie maanden vol?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een tone-of-voice-document op de gedeelde schijf is geen tone of voice in de praktijk. Drie dingen maken het verschil. Eerst: een gezamenlijke werksessie waarin je oude content samen herschrijft volgens de nieuwe stem. Mensen leren door doen, niet door lezen. Een ochtend met je marketing- en saleteam kan jaren impact hebben.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Tweede: een "voice champion" in je team. Iemand die nieuwe content reviewt voor publicatie en feedback geeft op stem. Dat is geen extra functie, dat is een rol naast de bestaande. Vaak past het bij de marketing-lead of een schrijfgevoelige collega. Derde: bouw een swipefile met goede voorbeelden. Een gedeeld document of folder met emails en posts die de stem perfect raken. Daar grijpen mensen sneller naar dan naar regels.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Na drie maanden zit de stem in het hoofd, daarna gaat het vanzelf. Bestaande collega's hebben hem geïnternaliseerd, nieuwe collega's pakken hem op via de voorbeelden. Tone of voice is geen project, het is een gewoonte. Maar zoals elke gewoonte: je moet hem in het begin even voeden.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wanneer mag de stem evolueren?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een goede tone of voice is stabiel maar niet bevroren. De kernkenmerken blijven jaren staan. De voorbeelden en woordenlijsten kunnen evolueren met je product, je doelgroep en de tijd. Plan jaarlijks een halve dag om te evalueren. Klinkt onze stem nog zoals we willen? Past hij nog bij de klanten die we hebben gewonnen? Hoeven we iets bij te stellen?
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Te veel veranderen verwart je markt. Te weinig veranderen veroudert je merk. Het juiste tempo zit ergens tussen die twee, en is voor elk bedrijf anders. Wie zijn stem bewust onderhoudt, bouwt iets dat concurrenten niet zomaar overnemen. Een herkenbare merkstem is een van de meest moeilijk te kopiëren marketingmiddelen die er bestaan. Wie erin investeert, bouwt voorsprong.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Veelgestelde vragen</h2>
                    </div>

                    <section className="mt-4">
                        <div className="space-y-6 not-prose">
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat is een tone of voice precies?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Een tone of voice is de manier waarop je merk zich uitdrukt, los van wat het zegt. Het gaat om woordkeuze, zinslengte, formaliteit, humor en houding. Twee bedrijven kunnen hetzelfde product verkopen met heel verschillende tone of voice: de één formeel en autoritair, de ander speels en toegankelijk. Een vastgelegde tone of voice zorgt dat al je communicatie als één merk klinkt.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Waarom is een consistente merkstem belangrijk?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Consistentie bouwt herkenning op. Wanneer klanten elke keer hetzelfde gevoel krijgen van je website, je e-mails en je social posts, ontstaat vertrouwen. Inconsistente communicatie maakt je merk onbetrouwbaar zonder dat mensen kunnen aanwijzen waarom. Voor het MKB is consistentie bovendien het verschil tussen amateur en professioneel ogen, ongeacht je werkelijke bedrijfsgrootte.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoe vind ik mijn tone of voice?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Begin bij wie je bent en wie je klanten zijn. Drie vragen helpen: hoe zou een goede vriend ons beschrijven, welke woorden gebruiken onze beste klanten, en wat willen we absoluut niet klinken? De antwoorden geven richting. Een tweede check: vergelijk jezelf met drie concurrenten en bepaal in welke dimensies je anders wil klinken. Het verschil maakt je herkenbaar.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoe leg je een tone of voice vast?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Met een eenvoudig document van twee tot vier pagina's. Daarop drie tot vijf kernkenmerken, met per kenmerk een 'wel/niet'-tabel en concrete voorbeelden. Plus enkele woordenlijsten: termen die je wel gebruikt, termen die je vermijdt. En een paar voor-en-na-voorbeelden uit echte communicatie. Maak het kort genoeg dat iedereen het leest, concreet genoeg dat iedereen het kan toepassen.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoe train ik mijn team in onze tone of voice?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Documenteren is niet genoeg. Houd een gezamenlijke werksessie waarin je oude communicatie samen herschrijft volgens de nieuwe stem. Stel een 'voice champion' aan die nieuwe content reviewt voor publicatie. Bouw goede voorbeelden in je teamomgeving op zodat mensen kunnen kopiëren wat werkt. Na drie maanden zit de stem in het hoofd, daarna gaat het vanzelf.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Verandert een tone of voice over tijd?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Een goede tone of voice is stabiel maar niet bevroren. De kernkenmerken blijven jaren staan, de voorbeelden en woordenlijsten evolueren met je product, je doelgroep en de tijd. Plan jaarlijks een evaluatie. Klinkt onze stem nog zoals we willen, past hij nog bij wie onze klanten geworden zijn, hoeven we iets bij te stellen. Te veel veranderen verwart, te weinig veranderen veroudert.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="mt-16 pt-12 border-t border-primary/10">
                        <h3 className="text-xl font-bold text-primary mb-6">Lees ook</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <Link to="/blogs/algemeen/zet-klantreviews-marketingtool" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Klantreviews als marketingtool</h3>
                                <p className="text-primary/60 text-sm">Hoe je reviews verzamelt, beheert en hergebruikt voor omzet.</p>
                            </Link>
                            <Link to="/blogs/strategie/straft-google-ai-gegenereerde-content" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">AI-content en Google</h3>
                                <p className="text-primary/60 text-sm">Wat Google echt detecteert en hoe je veilig AI inzet.</p>
                            </Link>
                            <Link to="/blogs/algemeen" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Algemene blogs</h3>
                                <p className="text-primary/60 text-sm">Strategie en groei voor het MKB.</p>
                            </Link>
                        </div>
                    </section>
                </div>
            </article>

            <section className="w-full pb-32 px-6">
                <div className="max-w-4xl mx-auto bg-primary rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
                    <h2 className="relative z-10 font-drama italic text-background text-3xl sm:text-4xl md:text-5xl mb-6">Wil jouw merk eindelijk consistent klinken?</h2>
                    <p className="relative z-10 font-sans text-background/70 text-lg mb-10 max-w-xl mx-auto">We bouwen samen een tone of voice die past bij wie je bent, en zorgen dat je hele team ermee aan de slag kan.</p>
                    <Link to="/contact" className="relative z-10 btn-magnetic inline-flex items-center justify-center bg-accent text-background font-sans font-bold text-lg px-10 py-4 rounded-[2rem] hover:bg-accent/90 transition-colors">Neem contact op</Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
