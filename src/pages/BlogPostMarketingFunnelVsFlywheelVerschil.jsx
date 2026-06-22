import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ChevronRight, User } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function BlogPostMarketingFunnelVsFlywheelVerschil() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen selection:bg-accent/30 selection:text-dark flex flex-col bg-background">
            <Helmet>
                <title>Marketing funnel vs flywheel: wat past beter? | Empowers</title>
                <meta name="description" content="De funnel eindigt bij de aankoop, het flywheel maakt van klanten je groeimotor. Lees het verschil en wat past bij jouw bedrijf en marketing." />
                <link rel="canonical" href="https://www.empowers.nl/blogs/algemeen/marketing-funnel-vs-flywheel-verschil" />
                <meta property="og:title" content="Marketing funnel vs flywheel: wat past beter? | Empowers" />
                <meta property="og:description" content="De funnel eindigt bij de aankoop, het flywheel maakt van klanten je groeimotor. Lees het verschil en wat past bij jouw bedrijf en marketing." />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://www.empowers.nl/blogs/algemeen/marketing-funnel-vs-flywheel-verschil" />
                <meta property="og:image" content="https://www.empowers.nl/images/blogs/marketing-funnel-vs-flywheel-verschil.jpg" />
                <meta property="article:published_time" content="2026-06-11T12:00:00+02:00" />
                <meta property="article:author" content="Empowers" />
                <meta property="article:section" content="Algemeen" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Marketing funnel vs flywheel: wat past beter? | Empowers" />
                <meta name="twitter:description" content="De funnel eindigt bij de aankoop, het flywheel maakt van klanten je groeimotor. Lees het verschil en wat bij jouw bedrijf past." />
                <script type="application/ld+json">{JSON.stringify({
                    "@context": "https://schema.org",
                    "@graph": [
                        {
                            "@type": "Article",
                            "headline": "Marketing funnel vs flywheel: wat past beter bij moderne marketing?",
                            "image": "https://www.empowers.nl/images/blogs/marketing-funnel-vs-flywheel-verschil.jpg",
                            "description": "De funnel eindigt bij de aankoop, het flywheel maakt van klanten je groeimotor. Lees het verschil en wat past bij jouw bedrijf en marketing.",
                            "author": { "@type": "Organization", "name": "Empowers" },
                            "publisher": { "@type": "Organization", "name": "Empowers", "url": "https://www.empowers.nl" },
                            "datePublished": "2026-06-11T12:00:00+02:00",
                            "dateModified": "2026-06-11T12:00:00+02:00",
                            "url": "https://www.empowers.nl/blogs/algemeen/marketing-funnel-vs-flywheel-verschil"
                        },
                        {
                            "@type": "BreadcrumbList",
                            "itemListElement": [
                                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.empowers.nl" },
                                { "@type": "ListItem", "position": 2, "name": "Nieuws", "item": "https://www.empowers.nl/nieuws" },
                                { "@type": "ListItem", "position": 3, "name": "Algemeen", "item": "https://www.empowers.nl/blogs/algemeen" },
                                { "@type": "ListItem", "position": 4, "name": "Marketing funnel vs flywheel: wat past beter bij moderne marketing?", "item": "https://www.empowers.nl/blogs/algemeen/marketing-funnel-vs-flywheel-verschil" }
                            ]
                        },
                        {
                            "@type": "FAQPage",
                            "mainEntity": [
                                { "@type": "Question", "name": "Wat is een marketing funnel?", "acceptedAnswer": { "@type": "Answer", "text": "Een marketing funnel is een model dat de route naar een aankoop weergeeft als een trechter. Bovenin komt een grote groep mensen binnen die je merk leert kennen, onderweg valt een deel af en onderaan blijven de kopers over. Het model helpt om per stap gericht campagnes in te richten." } },
                                { "@type": "Question", "name": "Wat is het flywheel-model?", "acceptedAnswer": { "@type": "Answer", "text": "Het flywheel is een model dat de klant in het midden zet in plaats van aan het einde. Tevreden klanten zorgen via reviews, aanbevelingen en herhaalaankopen voor nieuwe klanten, waardoor het wiel steeds sneller draait. HubSpot maakte het model bekend als alternatief voor de funnel." } },
                                { "@type": "Question", "name": "Wat is het verschil tussen funnel en flywheel?", "acceptedAnswer": { "@type": "Answer", "text": "De funnel is lineair en eindigt bij de aankoop: elke nieuwe klant vraagt opnieuw marketinginspanning. Het flywheel is circulair en gebruikt bestaande klanten als motor voor nieuwe groei. In de funnel is de klant het eindpunt, in het flywheel het startpunt van de volgende verkoop." } },
                                { "@type": "Question", "name": "Is de marketing funnel verouderd?", "acceptedAnswer": { "@type": "Answer", "text": "Nee. De funnel blijft bruikbaar om campagnes per fase in te richten en te meten waar mensen afhaken. Het model schiet wel tekort na de aankoop, omdat het daar stopt. Veel bedrijven gebruiken daarom de funnel voor acquisitie en het flywheel-denken voor klantbehoud en aanbevelingen." } },
                                { "@type": "Question", "name": "Wat past beter bij een klein bedrijf: funnel of flywheel?", "acceptedAnswer": { "@type": "Answer", "text": "Meestal een combinatie. Zonder nieuwe klanten valt er niets te laten draaien, dus acquisitie via de funnel blijft nodig. Verkoop je producten of diensten waar klanten kunnen terugkomen of je kunnen aanbevelen, dan loont het om ook in tevredenheid en reviews te investeren. Dat is het flywheel in de praktijk." } }
                            ]
                        }
                    ]
                })}</script>
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
                        <Link to="/blogs/algemeen" className="hover:text-accent transition-colors">Algemeen</Link>
                        <ChevronRight className="w-3 h-3" />
                        <span className="text-primary truncate">Funnel vs flywheel</span>
                    </nav>

                    {/* Header */}
                    <header className="mb-16">
                        <div className="inline-block px-3 py-1 bg-accent/10 text-accent font-mono text-xs uppercase tracking-widest rounded-full mb-6">
                            Algemeen
                        </div>
                        <h1 className="font-sans font-bold text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight mb-8">
                            Marketing funnel vs flywheel: wat past beter bij moderne marketing?
                        </h1>

                        <div className="flex flex-wrap items-center gap-6 text-sm font-sans text-primary/60 border-y border-primary/10 py-6">
                            <div className="flex items-center gap-2">
                                <User className="w-4 h-4" />
                                <span>Empowers Redactie</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>11 juni 2026</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>7 minuten leestijd</span>
                            </div>
                        </div>
                    </header>

                    {/* Featured Image */}
                    <figure className="w-full h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden mb-16 relative bg-primary">
                        <div className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-overlay" style={{backgroundImage: "url('/images/blogs/marketing-funnel-vs-flywheel-verschil.jpg')"}}></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </figure>

                    {/* Content */}
                    <div className="prose prose-lg prose-headings:font-sans prose-headings:font-bold prose-headings:text-primary prose-p:font-sans prose-p:text-primary/80 prose-p:leading-relaxed max-w-none">
                        <p className="text-xl md:text-2xl font-medium leading-relaxed mb-10 text-primary">
                            De marketing funnel beschrijft de route naar een aankoop als een trechter: veel mensen erin, een paar kopers eruit. Het flywheel zet de klant in het midden en gebruikt tevreden klanten als motor voor nieuwe groei. Welk model beter past, hangt af van wat je verkoopt. Voor de meeste bedrijven werkt een combinatie het best.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat is een marketing funnel?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De funnel is het klassieke model van marketing. Bovenin komt een brede groep mensen binnen die je merk voor het eerst ziet. Een deel daarvan raakt geïnteresseerd en gaat vergelijken. Een kleiner deel vraagt een offerte aan of legt iets in een winkelmandje. En onderaan de trechter rekent een nog kleiner deel daadwerkelijk af.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De kracht van het model zit in de eenvoud. Je kunt per laag meten hoeveel mensen doorstromen en gericht verbeteren waar de grootste uitval zit. Veel advertentieplatformen zijn er zelfs omheen gebouwd: campagnes voor bereik bovenin, campagnes voor conversie onderin.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Hoe je die fases praktisch invult met kanalen, lees je in onze blog over <Link to="/blogs/algemeen/customer-journey-uitgelegd-onbekende-klant" className="text-accent hover:underline">de customer journey</Link>. De funnel en de journey zijn twee kanten van dezelfde medaille: het ene model kijkt vanuit jouw marketing, het andere vanuit de klant.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat is het flywheel-model?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Het flywheel, Nederlands: vliegwiel, draait het denken om. Geen trechter die eindigt bij de aankoop, maar een wiel dat blijft draaien. In het midden staat de klant. Elke tevreden klant geeft het wiel een zet: een review, een aanbeveling aan een collega, een herhaalaankoop.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Softwarebedrijf HubSpot maakte het model bekend als alternatief voor de funnel. De gedachte erachter: in een tijd waarin iedereen reviews leest en ervaringen deelt, is een tevreden klant de sterkste marketing die er bestaat.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Het wiel kent ook wrijving. Een traag bestelproces, slechte service of een product dat tegenvalt, remt het vliegwiel af. Flywheel-denken betekent dus niet alleen investeren in promotie, maar net zo hard in alles wat klanten tevreden houdt.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Waar schiet de funnel tekort?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Het grootste bezwaar: de funnel stopt bij de aankoop. De klant valt er onderaan uit en verdwijnt uit beeld. Wat die klant daarna doet, terugkomen of vertrekken, aanbevelen of klagen, komt in het model niet voor. Terwijl daar vaak de grootste winst zit.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een nieuwe klant binnenhalen kost bovendien fors meer dan een bestaande klant behouden. Wie alleen in funnel-termen denkt, blijft betalen voor elke nieuwe klant terwijl de tevreden klanten van vorig jaar onbenut blijven.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Het model negeert ook de kracht van mond-tot-mond. In de funnel komt iedereen binnen via jouw marketing. In werkelijkheid komt een flink deel van de nieuwe klanten binnen via een tip van iemand anders, zonder ooit een advertentie te hebben gezien.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Waarom draait het flywheel om bestaande klanten?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Omdat bestaande klanten twee keer waarde leveren. Eén keer via hun eigen aankopen, en nog een keer via de nieuwe klanten die ze aanbrengen. Een webshop met trouwe klanten die spontaan reviews achterlaten, hoeft minder advertentiebudget in te zetten voor hetzelfde groeitempo.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Reviews spelen daarin een dubbelrol. Ze overtuigen niet alleen twijfelaars, ze voeden ook AI-modellen en zoekmachines met bewijs dat jouw bedrijf levert wat het belooft. Zichtbaarheid en reputatie groeien zo met elke draai van het wiel mee.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            In de praktijk zien we dat bedrijven die hun klanten actief om een review of aanbeveling vragen, structureel goedkoper groeien dan bedrijven die elke klant via advertenties moeten binnenhalen. Het verschil is geen toeval. Het is rente op tevredenheid.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat past beter bij jouw bedrijf?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Verkoop je iets dat mensen één keer kopen, zoals een dakkapel of een trouwjurk? Dan blijft de funnel je belangrijkste model en draait je flywheel vooral op aanbevelingen en reviews. Die zijn in zulke branches goud waard, want bijna elke koper begint bij ervaringen van anderen.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Verkoop je iets met herhaalaankopen, zoals verbruiksproducten, software, onderhoud of een dienst op abonnementsbasis? Dan is het flywheel je groeimodel en de funnel slechts de aanloop. Klantbehoud weegt dan zwaarder dan elke nieuwe campagne.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Voor de meeste MKB-bedrijven geldt: gebruik beide. De funnel om nieuwe vraag aan te boren met <Link to="/blogs/algemeen/performance-marketing-verschilt-traditionele-marketing" className="text-accent hover:underline">performance marketing</Link>, het flywheel om van elke klant een ambassadeur te maken. Het ene model vult het andere aan in plaats van het te vervangen.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe stap je over op flywheel-denken?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Begin met meten wat er na de aankoop gebeurt. Hoeveel klanten komen terug? Hoeveel laten een review achter? Hoeveel nieuwe klanten noemen een aanbeveling als reden van hun komst? Die cijfers vertellen hoe hard jouw wiel nu draait.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Maak het achterlaten van een review daarna zo makkelijk mogelijk. Een kort berichtje na de levering met een directe link werkt beter dan hopen dat klanten het uit zichzelf doen. Beloon loyaliteit waar het past, en los klachten snel en ruimhartig op: een goed opgeloste klacht levert vaak een trouwere klant op dan een vlekkeloze bestelling.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            En blijf tegelijk vraag aanboren bovenin. Een vliegwiel zonder aanjager komt nooit op gang. Groei is geen toeval, het is een strategie waarin nieuwe klanten en tevreden klanten elkaar versterken.
                        </p>

                        <hr className="my-16 border-primary/10" />

                        <h2 className="text-3xl mb-8">Veelgestelde vragen over funnel en flywheel</h2>

                        <div className="space-y-6 not-prose">
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat is een marketing funnel?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Een marketing funnel is een model dat de route naar een aankoop weergeeft als een trechter. Bovenin komt een grote groep mensen binnen die je merk leert kennen, onderweg valt een deel af en onderaan blijven de kopers over. Het model helpt om per stap gericht campagnes in te richten.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat is het flywheel-model?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Het flywheel is een model dat de klant in het midden zet in plaats van aan het einde. Tevreden klanten zorgen via reviews, aanbevelingen en herhaalaankopen voor nieuwe klanten, waardoor het wiel steeds sneller draait. HubSpot maakte het model bekend als alternatief voor de funnel.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat is het verschil tussen funnel en flywheel?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    De funnel is lineair en eindigt bij de aankoop: elke nieuwe klant vraagt opnieuw marketinginspanning. Het flywheel is circulair en gebruikt bestaande klanten als motor voor nieuwe groei. In de funnel is de klant het eindpunt, in het flywheel het startpunt van de volgende verkoop.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Is de marketing funnel verouderd?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Nee. De funnel blijft bruikbaar om campagnes per fase in te richten en te meten waar mensen afhaken. Het model schiet wel tekort na de aankoop, omdat het daar stopt. Veel bedrijven gebruiken daarom de funnel voor acquisitie en het flywheel-denken voor klantbehoud en aanbevelingen.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat past beter bij een klein bedrijf: funnel of flywheel?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Meestal een combinatie. Zonder nieuwe klanten valt er niets te laten draaien, dus acquisitie via de funnel blijft nodig. Verkoop je producten of diensten waar klanten kunnen terugkomen of je kunnen aanbevelen, dan loont het om ook in tevredenheid en reviews te investeren. Dat is het flywheel in de praktijk.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </article>

            {/* Bottom CTA */}
            <section className="w-full pb-32 px-6">
                <div className="max-w-4xl mx-auto bg-primary rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
                    <h2 className="relative z-10 font-drama italic text-background text-3xl sm:text-4xl md:text-5xl mb-6">Jouw groeimodel scherp krijgen?</h2>
                    <p className="relative z-10 font-sans text-background/70 text-lg mb-10 max-w-xl mx-auto">
                        We kijken samen waar jouw groei nu vandaan komt en waar het sneller kan. Plan een gratis gesprek.
                    </p>
                    <Link to="/contact" className="relative z-10 btn-magnetic inline-flex items-center justify-center bg-accent text-background font-sans font-bold text-lg px-10 py-4 rounded-[2rem] hover:bg-accent/90 transition-colors">
                        Samenwerken met Empowers
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
