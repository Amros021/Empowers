import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ChevronRight, User } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function BlogPostNpsMetenVerbeteren() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen selection:bg-accent/30 selection:text-dark flex flex-col bg-background">
            <Helmet>
                <title>NPS meten en verbeteren: zo maak je meer promotors | Empowers</title>
                <meta name="description" content="NPS meten doe je met één vraag, NPS verbeteren met opvolging. Zo bereken je je score, lees je hem goed en maak je van klanten promotors die je aanbevelen." />
                <link rel="canonical" href="https://www.empowers.nl/blogs/algemeen/nps-meten-verbeteren-meer-promotors" />
                <meta property="og:title" content="NPS meten en verbeteren: zo maak je meer promotors" />
                <meta property="og:description" content="Eén vraag vertelt je of klanten je aanbevelen. Zo meet je je NPS en til je hem omhoog." />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://www.empowers.nl/blogs/algemeen/nps-meten-verbeteren-meer-promotors" />
                <meta property="og:image" content="https://www.empowers.nl/images/blogs/nps-meten-verbeteren-meer-promotors.jpg" />
                <meta property="article:published_time" content="2026-06-25" />
                <meta property="article:author" content="Empowers" />
                <meta property="article:section" content="Algemeen" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="NPS meten en verbeteren: zo maak je meer promotors" />
                <meta name="twitter:description" content="Zo bereken je je NPS, lees je hem goed en maak je meer promotors." />

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@graph": [
                            {
                                "@type": "Article",
                                "headline": "NPS meten en verbeteren: zo maak je meer promotors",
                                "description": "NPS meten doe je met één vraag, NPS verbeteren met opvolging. Zo bereken je je score, lees je hem goed en maak je van klanten promotors die je aanbevelen.",
                                "image": "https://www.empowers.nl/images/blogs/nps-meten-verbeteren-meer-promotors.jpg",
                                "datePublished": "2026-06-25T10:00:00+02:00",
                                "dateModified": "2026-06-25T10:00:00+02:00",
                                "author": { "@type": "Organization", "name": "Empowers" },
                                "publisher": {
                                    "@type": "Organization", "name": "Empowers", "url": "https://www.empowers.nl",
                                    "logo": { "@type": "ImageObject", "url": "https://www.empowers.nl/empowers-logo-color.svg" }
                                },
                                "mainEntityOfPage": "https://www.empowers.nl/blogs/algemeen/nps-meten-verbeteren-meer-promotors"
                            },
                            {
                                "@type": "BreadcrumbList",
                                "itemListElement": [
                                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.empowers.nl" },
                                    { "@type": "ListItem", "position": 2, "name": "Blogs", "item": "https://www.empowers.nl/blogs" },
                                    { "@type": "ListItem", "position": 3, "name": "Algemeen", "item": "https://www.empowers.nl/blogs/algemeen" },
                                    { "@type": "ListItem", "position": 4, "name": "NPS meten en verbeteren", "item": "https://www.empowers.nl/blogs/algemeen/nps-meten-verbeteren-meer-promotors" }
                                ]
                            },
                            {
                                "@type": "FAQPage",
                                "mainEntity": [
                                    {
                                        "@type": "Question",
                                        "name": "Wat is NPS?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "NPS staat voor Net Promoter Score, een cijfer dat laat zien hoe waarschijnlijk klanten je aanbevelen. Je meet het met één vraag op een schaal van 0 tot en met 10. De score loopt van min 100 tot plus 100 en geeft je in één getal een gevoel bij de loyaliteit van je klanten."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Hoe bereken je je NPS?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Je verdeelt de antwoorden in drie groepen. Promotors geven een 9 of 10, passieven een 7 of 8 en criticasters alles van 0 tot en met 6. Daarna trek je het percentage criticasters af van het percentage promotors. Passieven tellen niet mee in de som, maar je houdt ze wel in de gaten."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Wat is een goede NPS-score?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Dat verschilt sterk per branche, dus een vast cijfer bestaat niet. Alles boven nul betekent dat je meer promotors dan criticasters hebt. Belangrijker dan het getal zelf is de richting: meet je elk kwartaal en zie je je score stijgen, dan doe je iets goed. Vergelijk vooral met je eigen verleden."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Hoe vaak moet ik NPS meten?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Voor de meeste MKB-bedrijven werkt één keer per kwartaal goed, of vlak na een belangrijk moment zoals een aankoop of een serviceafspraak. Te vaak meten irriteert je klanten en levert weinig nieuws op. Een vast ritme is belangrijker dan een hoge frequentie, zodat je trends ziet in plaats van losse cijfers."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Hoe verbeter ik mijn NPS?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Door op te volgen. Bel of mail je criticasters om te horen wat misging en los het op waar je kunt. Vraag je promotors om een review of een aanbeveling, want zij staan er warm voor. De score stijgt niet door vaker te meten, maar door echt iets te doen met wat je hoort."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Waarom is NPS belangrijk voor mijn marketing?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Promotors leveren gratis nieuwe klanten op via mond-tot-mond, het meest vertrouwde kanaal dat er is. Een hoge NPS betekent dat je marketing wordt versterkt door je eigen klanten. Bovendien wijst de open toelichting bij de score je precies op wat je beter kunt maken aan je product en je dienst."
                                        }
                                    }
                                ]
                            }
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
                        <span className="text-primary truncate">NPS meten en verbeteren</span>
                    </nav>

                    <header className="mb-16">
                        <div className="inline-block px-3 py-1 bg-accent/10 text-accent font-mono text-xs uppercase tracking-widest rounded-full mb-6">
                            Algemeen
                        </div>
                        <h1 className="font-sans font-bold text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight mb-8">
                            NPS meten en verbeteren: zo maak je meer promotors
                        </h1>

                        <div className="flex flex-wrap items-center gap-6 text-sm font-sans text-primary/60 border-y border-primary/10 py-6">
                            <div className="flex items-center gap-2"><User className="w-4 h-4" /><span>Empowers Redactie</span></div>
                            <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>25 juni 2026</span></div>
                            <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>7 minuten leestijd</span></div>
                        </div>
                    </header>

                    <figure className="w-full h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden mb-16 relative bg-primary">
                        <div className="absolute inset-0 bg-[url('/images/blogs/nps-meten-verbeteren-meer-promotors.jpg')] bg-cover bg-center opacity-40 mix-blend-overlay" style={{backgroundImage: "url('/images/blogs/nps-meten-verbeteren-meer-promotors.jpg')"}}></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </figure>

                    <div className="prose prose-lg max-w-none prose-headings:text-primary prose-headings:font-bold prose-a:text-accent prose-a:underline hover:prose-a:text-accent/80">
                        <p className="text-xl leading-relaxed text-primary/80 font-medium mb-6">
                            NPS meet je met één vraag: hoe waarschijnlijk is het dat je ons aanbeveelt, op een schaal van 0 tot en met 10. Je verbetert hem niet door vaker te vragen, maar door op te volgen. Je lost de klachten van je criticasters op en je vraagt je promotors actief om een aanbeveling. Zo groeit het aantal mensen dat je gratis nieuwe klanten bezorgt.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat is NPS precies?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            NPS staat voor Net Promoter Score. Het is een loyaliteitscijfer dat bedacht is door Fred Reichheld, die het in 2003 introduceerde in Harvard Business Review samen met Bain en Company. Het idee was simpel: in plaats van een lange vragenlijst stel je één vraag die het beste voorspelt of een bedrijf groeit. Die vraag gaat over de kans dat iemand je aanbeveelt.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De kracht zit in die eenvoud. Eén cijfer dat iedereen in je bedrijf begrijpt, van de eigenaar tot de klantenservice. Het vervangt geen diepe klantkennis, maar het geeft je een snelle thermometer voor hoe je ervoor staat. En het laat je de richting zien, want je kunt het cijfer over de tijd volgen.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe meet en bereken je je NPS?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Je stuurt klanten de aanbevelingsvraag met een schaal van 0 tot en met 10. De antwoorden verdeel je in drie groepen. Wie een 9 of 10 geeft, is een promotor: tevreden en bereid je naam door te geven. Een 7 of 8 is een passief: niet ontevreden, maar ook niet enthousiast. Alles van 0 tot en met 6 valt onder de criticasters.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De som is daarna eenvoudig. Neem het percentage promotors en trek daar het percentage criticasters van af. Heb je 50 procent promotors en 20 procent criticasters, dan is je NPS 30. De passieven laat je buiten de berekening, al houd je ze in het oog, want een klein duwtje maakt van hen alsnog een promotor. De score kan uitkomen tussen min 100 en plus 100.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat is een goede NPS-score?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Hier moet ik je teleurstellen met de eerlijke versie: een universeel goede score bestaat niet. Wat in de ene branche knap is, stelt in de andere weinig voor. Webshops, dienstverleners en B2B-bedrijven zitten op heel andere niveaus. Een los getal vergelijken met dat van een ander bedrijf zegt dus weinig.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Wat wel telt, is je eigen lijn. Alles boven nul betekent dat je meer fans dan klagers hebt, en dat is een gezond startpunt. Meet je elk kwartaal en kruipt je score omhoog, dan werkt wat je doet. Zie het als een KPI die je over de tijd volgt, net als de cijfers uit onze blog over <Link to="/blogs/algemeen/marketing-kpis-wekelijks-bijhouden" className="text-accent hover:underline">marketing KPI's die je bijhoudt</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe verbeter je je NPS echt?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De grootste winst zit in je criticasters. Een lage score is geen ramp, het is een lijst met dingen die je kunt repareren. Bel of mail de mensen die je een onvoldoende gaven en vraag wat er misging. Los het op waar het kan en laat ze weten dat je iets met hun feedback deed. Een opgeloste klacht maakt soms de loyaalste klant.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Aan de andere kant van de schaal zitten je promotors klaar om je te helpen. Zij gaven je een topcijfer, dus dat is het moment om iets te vragen. Een review, een aanbeveling of een verhaal dat je mag delen. We zien bij klanten dat juist dit zetje het verschil maakt, omdat tevreden mensen het vaak gewoon vergeten zonder vraag. Hoe je die promotors inzet, lees je in onze blog over <Link to="/blogs/algemeen/zet-klantreviews-marketingtool" className="text-accent hover:underline">klantreviews als marketingtool</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Waarom is NPS waardevol voor je groei?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een promotor is meer waard dan een goede recensie. Het is iemand die jouw naam noemt in een gesprek, in een appgroep of op een verjaardag. Dat is mond-tot-mond, het kanaal dat mensen het meest vertrouwen. Hoe meer promotors je hebt, hoe meer nieuwe klanten er binnenkomen zonder dat je advertentiebudget oploopt.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Er is ook een verdedigende kant. Criticasters praten net zo hard, alleen dan in je nadeel. Door hen op tijd op te vangen, voorkom je negatieve verhalen die nieuwe klanten afschrikken. NPS raakt zo aan je hele klantbehoud, en hoe waardevol dat is laten we zien in onze blog over <Link to="/blogs/algemeen/klantretentie-behouden-goedkoper-nieuwe-klanten" className="text-accent hover:underline">waarom klanten behouden goedkoper is dan nieuwe winnen</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Welke fouten maken ondernemers met NPS?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De meest gemaakte fout is meten zonder opvolgen. Een mooi dashboard met een score die niemand gebruikt, verandert niets. Het getal is pas waardevol als je er iets mee doet. Een tweede fout is alleen naar het cijfer kijken en de open toelichting negeren, terwijl daar juist staat wat je moet aanpakken.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een derde valkuil is jagen op een hoog cijfer in plaats van op echte tevredenheid. Wie klanten subtiel pusht om een 9 of 10 te geven, krijgt een mooie score en een vertekend beeld. Vraag eerlijk en accepteer het antwoord. Een lage maar echte score is bruikbaarder dan een hoge die je voor de gek houdt.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Waar begin je deze week?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Stuur je laatste vijftig klanten de aanbevelingsvraag met een schaal van 0 tot en met 10 en één open vervolgvraag: wat is de belangrijkste reden voor je cijfer. Bereken je score en lees vooral de toelichtingen. Bel daarna twee criticasters en twee promotors. Binnen een week weet je wat je moet repareren en wie je om een aanbeveling kunt vragen.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            NPS is geen cijfer voor in een rapport, maar een werkwijze. Meet met een vast ritme, volg elk antwoord op en stuur bij waar het pijn doet. Doe je dat consequent, dan groeit je groep promotors vanzelf. En die promotors zijn je goedkoopste en sterkste vorm van marketing, zoals we ook beschrijven in onze blog over <Link to="/blogs/algemeen/klantloyaliteit-om-meer-omzet" className="text-accent hover:underline">klantloyaliteit omzetten in meer omzet</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Veelgestelde vragen</h2>
                    </div>

                    <section className="mt-4">
                        <div className="space-y-6 not-prose">
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat is NPS?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    NPS staat voor Net Promoter Score, een cijfer dat laat zien hoe waarschijnlijk klanten je aanbevelen. Je meet het met één vraag op een schaal van 0 tot en met 10. De score loopt van min 100 tot plus 100 en geeft je in één getal een gevoel bij de loyaliteit van je klanten.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoe bereken je je NPS?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Je verdeelt de antwoorden in drie groepen. Promotors geven een 9 of 10, passieven een 7 of 8 en criticasters alles van 0 tot en met 6. Daarna trek je het percentage criticasters af van het percentage promotors. Passieven tellen niet mee in de som, maar je houdt ze wel in de gaten.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat is een goede NPS-score?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Dat verschilt sterk per branche, dus een vast cijfer bestaat niet. Alles boven nul betekent dat je meer promotors dan criticasters hebt. Belangrijker dan het getal zelf is de richting: meet je elk kwartaal en zie je je score stijgen, dan doe je iets goed. Vergelijk vooral met je eigen verleden.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoe vaak moet ik NPS meten?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Voor de meeste MKB-bedrijven werkt één keer per kwartaal goed, of vlak na een belangrijk moment zoals een aankoop of een serviceafspraak. Te vaak meten irriteert je klanten en levert weinig nieuws op. Een vast ritme is belangrijker dan een hoge frequentie, zodat je trends ziet in plaats van losse cijfers.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoe verbeter ik mijn NPS?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Door op te volgen. Bel of mail je criticasters om te horen wat misging en los het op waar je kunt. Vraag je promotors om een review of een aanbeveling, want zij staan er warm voor. De score stijgt niet door vaker te meten, maar door echt iets te doen met wat je hoort.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Waarom is NPS belangrijk voor mijn marketing?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Promotors leveren gratis nieuwe klanten op via mond-tot-mond, het meest vertrouwde kanaal dat er is. Een hoge NPS betekent dat je marketing wordt versterkt door je eigen klanten. Bovendien wijst de open toelichting bij de score je precies op wat je beter kunt maken aan je product en je dienst.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="mt-16 pt-12 border-t border-primary/10">
                        <h3 className="text-xl font-bold text-primary mb-6">Lees ook</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <Link to="/blogs/algemeen/klantloyaliteit-om-meer-omzet" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Klantloyaliteit en omzet</h3>
                                <p className="text-primary/60 text-sm">Van trouwe klant naar terugkerende omzet.</p>
                            </Link>
                            <Link to="/blogs/algemeen/klantretentie-behouden-goedkoper-nieuwe-klanten" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Klanten behouden</h3>
                                <p className="text-primary/60 text-sm">Waarom retentie goedkoper is dan werven.</p>
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
                    <h2 className="relative z-10 font-drama italic text-background text-3xl sm:text-4xl md:text-5xl mb-6">Maak van tevreden klanten je beste verkopers</h2>
                    <p className="relative z-10 font-sans text-background/70 text-lg mb-10 max-w-xl mx-auto">We helpen je tevredenheid meten en omzetten in aanbevelingen, reviews en nieuwe klanten. Benieuwd hoeveel groei er in je bestaande klanten zit?</p>
                    <Link to="/contact" className="relative z-10 btn-magnetic inline-flex items-center justify-center bg-accent text-background font-sans font-bold text-lg px-10 py-4 rounded-[2rem] hover:bg-accent/90 transition-colors">Neem contact op</Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
