import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ChevronRight, User } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function BlogPostLandingspaginaStructuurConverterenElementen() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen selection:bg-accent/30 selection:text-dark flex flex-col bg-background">
            <Helmet>
                <title>Landingspagina structuur: elementen die converteren | Empowers</title>
                <meta name="description" content="De structuur van je landingspagina bepaalt hoeveel bezoekers klant worden. Lees welke elementen echt converteren en in welke volgorde je ze zet." />
                <link rel="canonical" href="https://www.empowers.nl/blogs/strategie/landingspagina-structuur-converteren-elementen" />
                <meta property="og:title" content="Landingspagina structuur: elementen die converteren | Empowers" />
                <meta property="og:description" content="De structuur van je landingspagina bepaalt hoeveel bezoekers klant worden. Lees welke elementen echt converteren en in welke volgorde je ze zet." />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://www.empowers.nl/blogs/strategie/landingspagina-structuur-converteren-elementen" />
                <meta property="og:image" content="https://www.empowers.nl/images/blogs/landingspagina-structuur-converteren-elementen.jpg" />
                <meta property="article:published_time" content="2026-07-14T14:00:00+02:00" />
                <meta property="article:author" content="Empowers" />
                <meta property="article:section" content="Strategie" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Landingspagina structuur: elementen die converteren | Empowers" />
                <meta name="twitter:description" content="De structuur van je landingspagina bepaalt hoeveel bezoekers klant worden. Lees welke elementen echt converteren en in welke volgorde je ze zet." />
                <script type="application/ld+json">{JSON.stringify({
                    "@context": "https://schema.org",
                    "@graph": [
                        {
                            "@type": "Article",
                            "headline": "Landingspagina structuur: de elementen die echt converteren",
                            "image": "https://www.empowers.nl/images/blogs/landingspagina-structuur-converteren-elementen.jpg",
                            "description": "De structuur van je landingspagina bepaalt hoeveel bezoekers klant worden. Lees welke elementen echt converteren en in welke volgorde je ze zet.",
                            "author": { "@type": "Organization", "name": "Empowers" },
                            "publisher": { "@type": "Organization", "name": "Empowers", "url": "https://www.empowers.nl" },
                            "datePublished": "2026-07-14T14:00:00+02:00",
                            "dateModified": "2026-07-14T14:00:00+02:00",
                            "url": "https://www.empowers.nl/blogs/strategie/landingspagina-structuur-converteren-elementen"
                        },
                        {
                            "@type": "BreadcrumbList",
                            "itemListElement": [
                                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.empowers.nl" },
                                { "@type": "ListItem", "position": 2, "name": "Nieuws", "item": "https://www.empowers.nl/nieuws" },
                                { "@type": "ListItem", "position": 3, "name": "Strategie", "item": "https://www.empowers.nl/blogs/strategie" },
                                { "@type": "ListItem", "position": 4, "name": "Landingspagina structuur: de elementen die echt converteren", "item": "https://www.empowers.nl/blogs/strategie/landingspagina-structuur-converteren-elementen" }
                            ]
                        },
                        {
                            "@type": "FAQPage",
                            "mainEntity": [
                                { "@type": "Question", "name": "Hoe lang moet een landingspagina zijn?", "acceptedAnswer": { "@type": "Answer", "text": "Zo lang als nodig om alle twijfels weg te nemen, en geen scherm langer. Een gratis download heeft weinig uitleg nodig, een dienst van duizenden euro's vraagt om meer bewijs en meer antwoorden. De hoogte van de drempel bepaalt de lengte van de pagina." } },
                                { "@type": "Question", "name": "Moet het menu van mijn website op de landingspagina staan?", "acceptedAnswer": { "@type": "Answer", "text": "Liever niet. Elke link in het menu is een uitgang waarlangs bezoekers je funnel verlaten. Op een landingspagina voor campagneverkeer wil je maar twee smaken: converteren of bewust vertrekken. Houd hooguit je logo staan, zonder link of met een link die je bewust kiest." } },
                                { "@type": "Question", "name": "Hoeveel call-to-actions zet je op een landingspagina?", "acceptedAnswer": { "@type": "Answer", "text": "Eén soort actie, meerdere keren herhaald. De knop mag gerust drie of vier keer terugkomen naarmate de pagina vordert, maar het moet steeds dezelfde actie zijn. Twee verschillende acties naast elkaar, zoals bellen en downloaden, verlagen doorgaans de conversie omdat kiezen uitstellen wordt." } },
                                { "@type": "Question", "name": "Wat is het belangrijkste element boven de vouw?", "acceptedAnswer": { "@type": "Answer", "text": "De combinatie van headline, subheadline en één duidelijke knop. Binnen enkele seconden moet de bezoeker snappen wat je aanbiedt, wat het hem oplevert en wat de volgende stap is. Alles wat die drie zaken niet ondersteunt, hoort niet in het eerste scherm." } },
                                { "@type": "Question", "name": "Werkt dezelfde structuur voor elke branche?", "acceptedAnswer": { "@type": "Answer", "text": "De volgorde van de bouwstenen is opvallend universeel: belofte, bewijs, uitleg, bezwaren, actie. Wat per branche verschilt is de invulling. Een advocaat bouwt vertrouwen met kwalificaties en cases, een webshop met reviews en keurmerken. Zelfde skelet, andere spieren." } },
                                { "@type": "Question", "name": "Wat meet je om te zien of de structuur werkt?", "acceptedAnswer": { "@type": "Answer", "text": "Kijk verder dan alleen het conversiepercentage. Scrolldiepte laat zien tot waar bezoekers komen, heatmaps tonen waar ze klikken en waar ze afhaken. Zakt de aandacht steeds op hetzelfde punt weg, dan weet je precies welk blok van je pagina herschreven moet worden." } }
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
                        <Link to="/blogs/strategie" className="hover:text-accent transition-colors">Strategie</Link>
                        <ChevronRight className="w-3 h-3" />
                        <span className="text-primary truncate">Landingspagina structuur</span>
                    </nav>

                    {/* Header */}
                    <header className="mb-16">
                        <div className="inline-block px-3 py-1 bg-accent/10 text-accent font-mono text-xs uppercase tracking-widest rounded-full mb-6">
                            Strategie
                        </div>
                        <h1 className="font-sans font-bold text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight mb-8">
                            Landingspagina structuur: de elementen die echt converteren
                        </h1>

                        <div className="flex flex-wrap items-center gap-6 text-sm font-sans text-primary/60 border-y border-primary/10 py-6">
                            <div className="flex items-center gap-2">
                                <User className="w-4 h-4" />
                                <span>Empowers Redactie</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>14 juli 2026</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>7 minuten leestijd</span>
                            </div>
                        </div>
                    </header>

                    {/* Featured Image */}
                    <figure className="w-full h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden mb-16 relative bg-primary">
                        <div className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-overlay" style={{backgroundImage: "url('/images/blogs/landingspagina-structuur-converteren-elementen.jpg')"}}></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </figure>

                    {/* Content */}
                    <div className="prose prose-lg prose-headings:font-sans prose-headings:font-bold prose-headings:text-primary prose-p:font-sans prose-p:text-primary/80 prose-p:leading-relaxed max-w-none">
                        <p className="text-xl md:text-2xl font-medium leading-relaxed mb-10 text-primary">
                            Een landingspagina die converteert volgt bijna altijd dezelfde opbouw: een hero met een duidelijke belofte, direct daaronder bewijs, dan uitleg van het aanbod, antwoorden op bezwaren en een herhaalde call-to-action. De volgorde is geen smaakkwestie. Hij volgt hoe mensen beslissen.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Waarom is de volgorde van je landingspagina zo belangrijk?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Omdat een bezoeker in fases overtuigd raakt. Eerst wil hij weten of hij op de juiste plek is. Dan of hij je kan vertrouwen. Dan pas wordt hij nieuwsgierig naar de details, en helemaal aan het eind komt de vraag wat het kost en wat de volgende stap is.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een pagina die deze volgorde negeert, wringt. Begin je met prijzen, dan haakt de bezoeker af die nog niet weet wat hij krijgt. Bewaar je het bewijs voor het einde, dan is de twijfelaar al lang vertrokken.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Zie je pagina als een goed verkoopgesprek. Je begint ook niet met het contract op tafel. Een landingspagina is precies dat gesprek, maar dan zonder verkoper erbij. Waarom die pagina iets anders is dan je homepage lees je in ons artikel over <Link to="/blogs/strategie/landingspagina-waarom-hij-anders-homepage" className="text-accent hover:underline">het verschil tussen een landingspagina en een homepage</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat staat er in een hero-sectie die converteert?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Het eerste scherm draagt drie elementen: een headline met de kernbelofte, een subheadline die uitlegt hoe je die waarmaakt, en één knop met de gewenste actie. Meer niet. Elke toevoeging verdunt de boodschap.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De grootste denkfout is het eerste scherm volproppen omdat "mensen niet scrollen". Mensen scrollen prima, maar alleen als het eerste scherm daar een reden voor geeft. Nieuwsgierigheid is de brandstof van de scroll.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een goede productfoto of een korte video versterkt de belofte, een willekeurige stockfoto verzwakt hem. Hoe je dit eerste blok precies opbouwt lees je in ons artikel over <Link to="/blogs/strategie/perfecte-hero-sectie-beste-eerste" className="text-accent hover:underline">de perfecte hero-sectie</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe bouw je vertrouwen op onder de vouw?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Direct na de hero komt het bewijsblok. Logo's van klanten, reviews met naam en gezicht, keurmerken, een concreet resultaatcijfer. De bezoeker heeft net een belofte gelezen en zijn eerste reactie is wantrouwen. Dat wantrouwen moet je meteen adresseren.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Echt bewijs verslaat mooi bewijs. Een review met spelfout en voornaam overtuigt meer dan een gepolijste quote zonder afzender. Vijf sterren zonder context zeggen niets, een klant die vertelt welk probleem is opgelost zegt alles.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Na het bewijs volgt de uitleg: wat krijgt de bezoeker precies, hoe werkt het, voor wie is het. Schrijf dit blok vanuit het resultaat en niet vanuit de functionaliteit. Niemand koopt een werkwijze, mensen kopen een uitkomst.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Heb je nog weinig bewijs? Begin met wat er is. Drie eerlijke reviews van echte klanten vormen een prima eerste bewijsblok, en één concreet resultaat met naam en context weegt zwaarder dan een rij anonieme logo's. Vraag na elke geslaagde opdracht direct om een review, dan groeit dit blok vanzelf mee. Niets is zo overtuigend als een klant die jouw twijfelende bezoeker vóór is geweest.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Waar plaats je je call-to-actions?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Eén keer in de hero, en daarna opnieuw na elk blok dat een twijfel wegneemt. Een bezoeker die halverwege overtuigd is, moet niet hoeven terugscrollen om te converteren. De knop reist mee met de beslissing.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Houd de actie overal hetzelfde. Een pagina die eerst om een demo vraagt en verderop om een belafspraak, dwingt de bezoeker tot een extra keuze. En elke extra keuze is een reden om het later te doen, dus nooit.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Onder de laatste knop hoort de drempelverlager: een regel die het risico wegneemt. "Gratis en binnen een dag reactie" of "Geen verplichtingen, geen kleine letters". Klein detail, groot verschil in de cijfers.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Welke elementen laat je bewust weg?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Het websitemenu is de eerste kandidaat. Elke menulink is een nooduitgang. Een bezoeker die via een advertentie binnenkomt heeft op die pagina alles wat hij nodig heeft, en elke andere route leidt weg van de conversie.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Ook social media knoppen horen er niet op. Je betaalt voor een bezoeker en stuurt hem vervolgens gratis naar een platform vol afleiding. Bewaar die knoppen voor je bedankpagina, daar kunnen ze geen kwaad meer.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Wees ook streng op tekst die er alleen staat omdat hij waar is. Elke alinea moet een twijfel wegnemen of een verlangen versterken. Doet een blok geen van beide, dan maakt het de pagina alleen maar langer en de boodschap zwakker.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe ziet deze structuur er op mobiel uit?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Op mobiel wordt de volgorde nog belangrijker, omdat alles onder elkaar komt te staan. Er is geen "rechts naast de tekst" meer. Elk blok krijgt zijn eigen moment op het scherm, in precies de volgorde die jij hebt gekozen.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Let vooral op de hero: een kop die op desktop krachtig oogt, kan op een telefoon vier regels beslaan en de knop uit beeld drukken. Bekijk je pagina dus altijd eerst op een telefoon, want daar komt bij de meeste campagnes het grootste deel van het verkeer binnen. Wat daar niet werkt, werkt niet.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Meer mobiele valkuilen en oplossingen vind je in ons artikel over <Link to="/blogs/strategie/optimaliseer-landingspagina-mobiel" className="text-accent hover:underline">je landingspagina verbeteren voor mobiel</Link>.
                        </p>

                        <p className="text-primary/80 leading-relaxed mb-6">
                            Belofte, bewijs, uitleg, bezwaren, actie: die volgorde verkoopt, in vrijwel elke branche. Wil je weten waar jouw pagina bezoekers verliest? We lopen hem graag met je door. Plan een gratis gesprek via <Link to="/contact" className="text-accent hover:underline">empowers.nl/contact</Link>.
                        </p>

                        <hr className="my-16 border-primary/10" />

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Veelgestelde vragen over landingspagina structuur</h2>

                        <div className="space-y-6 not-prose">
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoe lang moet een landingspagina zijn?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Zo lang als nodig om alle twijfels weg te nemen, en geen scherm langer. Een gratis download heeft weinig uitleg nodig, een dienst van duizenden euro's vraagt om meer bewijs en meer antwoorden. De hoogte van de drempel bepaalt de lengte van de pagina.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Moet het menu van mijn website op de landingspagina staan?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Liever niet. Elke link in het menu is een uitgang waarlangs bezoekers je funnel verlaten. Op een landingspagina voor campagneverkeer wil je maar twee smaken: converteren of bewust vertrekken. Houd hooguit je logo staan, zonder link of met een link die je bewust kiest.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoeveel call-to-actions zet je op een landingspagina?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Eén soort actie, meerdere keren herhaald. De knop mag gerust drie of vier keer terugkomen naarmate de pagina vordert, maar het moet steeds dezelfde actie zijn. Twee verschillende acties naast elkaar, zoals bellen en downloaden, verlagen doorgaans de conversie omdat kiezen uitstellen wordt.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat is het belangrijkste element boven de vouw?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    De combinatie van headline, subheadline en één duidelijke knop. Binnen enkele seconden moet de bezoeker snappen wat je aanbiedt, wat het hem oplevert en wat de volgende stap is. Alles wat die drie zaken niet ondersteunt, hoort niet in het eerste scherm.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Werkt dezelfde structuur voor elke branche?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    De volgorde van de bouwstenen is opvallend universeel: belofte, bewijs, uitleg, bezwaren, actie. Wat per branche verschilt is de invulling. Een advocaat bouwt vertrouwen met kwalificaties en cases, een webshop met reviews en keurmerken. Zelfde skelet, andere spieren.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat meet je om te zien of de structuur werkt?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Kijk verder dan alleen het conversiepercentage. Scrolldiepte laat zien tot waar bezoekers komen, heatmaps tonen waar ze klikken en waar ze afhaken. Zakt de aandacht steeds op hetzelfde punt weg, dan weet je precies welk blok van je pagina herschreven moet worden.
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
                    <h2 className="relative z-10 font-drama italic text-background text-3xl sm:text-4xl md:text-5xl mb-6">Een pagina die verkoopt terwijl jij werkt?</h2>
                    <p className="relative z-10 font-sans text-background/70 text-lg mb-10 max-w-xl mx-auto">
                        Wij bouwen landingspagina's met een structuur die bezoekers stap voor stap naar de conversie leidt.
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
