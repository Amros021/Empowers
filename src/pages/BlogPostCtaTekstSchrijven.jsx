import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ChevronRight, User } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function BlogPostCtaTekstSchrijven() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen selection:bg-accent/30 selection:text-dark flex flex-col bg-background">
            <Helmet>
                <title>CTA tekst schrijven die mensen aanzet tot actie | Empowers</title>
                <meta name="description" content="Een sterke CTA tekst is het verschil tussen een klik en een gemiste kans. Lees welke woorden werken, welke valkuilen er zijn en hoe je je conversies meetbaar verhoogt." />
                <link rel="canonical" href="https://www.empowers.nl/blogs/strategie/cta-tekst-schrijven-mensen-aanzet" />
                <meta property="og:title" content="CTA tekst schrijven die mensen aanzet tot actie" />
                <meta property="og:description" content="Schrijf CTA's die mensen écht in beweging brengen. Concrete formules, voorbeelden en tests die direct conversie opleveren." />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://www.empowers.nl/blogs/strategie/cta-tekst-schrijven-mensen-aanzet" />
                <meta property="og:image" content="https://www.empowers.nl/images/blogs/cta-tekst-schrijven-mensen-aanzet.jpg" />
                <meta property="article:published_time" content="2026-04-23T13:00:00+02:00" />
                <meta property="article:author" content="Empowers" />
                <meta property="article:section" content="Strategie" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="CTA tekst schrijven die mensen aanzet tot actie" />
                <meta name="twitter:description" content="Concrete formules en voorbeelden voor CTA's die converteren." />

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Article",
                        "headline": "CTA tekst schrijven die mensen aanzet tot actie",
                        "description": "Een sterke CTA tekst is het verschil tussen een klik en een gemiste kans. Lees welke woorden werken, welke valkuilen er zijn en hoe je je conversies meetbaar verhoogt.",
                        "image": "https://www.empowers.nl/images/blogs/cta-tekst-schrijven-mensen-aanzet.jpg",
                        "datePublished": "2026-04-23T13:00:00+02:00",
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
                                    "name": "Wat is een goede CTA tekst?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Een goede CTA tekst is kort, actief en concreet. Hij vertelt precies wat er gebeurt als iemand klikt en welk voordeel die persoon krijgt. 'Bereken mijn besparing' werkt vrijwel altijd beter dan 'Verzenden', omdat de eerste een resultaat belooft en de tweede alleen een handeling beschrijft."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Hoe lang mag een CTA tekst zijn?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Twee tot vijf woorden is de sweet spot. Korter dan twee woorden mist context, langer dan vijf wordt niet meer gescand. Voor een knop midden op een landingspagina is drie tot vier woorden ideaal. In een email kan een wat langere CTA werken omdat de lezer al verder is in zijn beslissing."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Welke werkwoorden converteren het beste?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Werkwoorden die een direct voordeel laten zien presteren beter dan neutrale werkwoorden. Bekend zijn 'krijg', 'ontvang', 'ontdek', 'bereken', 'plan', 'reserveer' en 'start'. Vermijd zwakke werkwoorden als 'verzenden', 'klik hier' of 'meer informatie' — die zeggen niets over de waarde voor de lezer."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Moet ik mijn CTA in de eerste persoon schrijven?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "In veel tests presteren CTA's in de eerste persoon ('Bereken mijn offerte') 10 tot 30 procent beter dan dezelfde CTA in de tweede persoon ('Bereken jouw offerte'). De lezer voelt het als zijn eigen intentie. Toets dat altijd in een A/B-test, want voor sommige doelgroepen werkt de aanspreekvorm met 'jouw' juist persoonlijker."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Hoeveel CTA's zet ik op een pagina?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Kies één primaire CTA per pagina en herhaal die op meerdere plekken: above the fold, in het midden en onderaan. Te veel verschillende CTA's verlamt de bezoeker. Wil je een tweede pad bieden voor mensen die nog niet klaar zijn om te kopen? Maak die secundaire CTA visueel duidelijk minder prominent (bijvoorbeeld een tekstlink in plaats van een knop)."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Hoe test je of een CTA werkt?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Met een A/B-test in je webanalyse- of advertentieplatform laat je twee CTA-varianten 50/50 zien aan vergelijkbare bezoekers. Reken op minimaal 200 conversies per variant voor een betrouwbaar oordeel. Test telkens slechts één element (woord, kleur of plaatsing), zodat je weet wat het verschil veroorzaakte."
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
                            { "@type": "ListItem", "position": 3, "name": "Strategie", "item": "https://www.empowers.nl/blogs/strategie" },
                            { "@type": "ListItem", "position": 4, "name": "CTA tekst schrijven", "item": "https://www.empowers.nl/blogs/strategie/cta-tekst-schrijven-mensen-aanzet" }
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
                        <Link to="/blogs/strategie" className="hover:text-accent transition-colors">Strategie</Link>
                        <ChevronRight className="w-3 h-3" />
                        <span className="text-primary truncate">CTA tekst schrijven</span>
                    </nav>

                    {/* Header */}
                    <header className="mb-16">
                        <div className="inline-block px-3 py-1 bg-accent/10 text-accent font-mono text-xs uppercase tracking-widest rounded-full mb-6">
                            Strategie
                        </div>
                        <h1 className="font-sans font-bold text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight mb-8">
                            CTA tekst schrijven die mensen aanzet tot actie
                        </h1>
                        <div className="flex flex-wrap items-center gap-6 text-sm font-sans text-primary/60 border-y border-primary/10 py-6">
                            <div className="flex items-center gap-2"><User className="w-4 h-4" /><span>Empowers Redactie</span></div>
                            <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>23 april 2026</span></div>
                            <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>8 minuten leestijd</span></div>
                        </div>
                    </header>

                    {/* Featured Image */}
                    <figure className="w-full h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden mb-16 relative bg-primary">
                        <div className="absolute inset-0 bg-[url('/images/blogs/cta-tekst-schrijven-mensen-aanzet.jpg')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </figure>

                    {/* Content */}
                    <div className="prose prose-lg max-w-none prose-headings:text-primary prose-headings:font-bold prose-a:text-accent prose-a:underline hover:prose-a:text-accent/80">
                        <p className="text-xl leading-relaxed text-primary/80 font-medium mb-6">
                            Een sterke CTA-tekst is het verschil tussen een klik en een gemiste kans. Veel ondernemers steken weken in het ontwerp van een landingspagina, maar verstoppen hun belangrijkste actieknop achter een vlakke tekst als 'Verzenden' of 'Meer informatie'. Een paar woorden veranderen kan de conversie 20 tot 50 procent omhoog brengen. In deze gids lees je welke formules werken, welke fouten je moet voorkomen en hoe je CTA's structureel betere resultaten laat opleveren.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Waarom is je CTA-tekst zo bepalend?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De CTA is het moment waarop interesse omslaat in actie. Tot aan de knop is de lezer nog vrijblijvend aan het oriënteren. Op het moment dat hij klikt, geeft hij iets weg: een mailadres, tijd, of geld. Die drempel is groter dan veel marketeers denken. Hoe duidelijker en aantrekkelijker je belofte op de knop staat, hoe makkelijker mensen die drempel overstappen.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Bij onze klanten zien we regelmatig dat een CTA-wijziging meer impact heeft dan een complete redesign. Een knop die verandert van 'Versturen' naar 'Bereken mijn besparing' kan de conversie verdubbelen, zonder dat de rest van de pagina aangepast wordt. Het is daarmee de meest rendabele copywriting-oefening die je kunt doen. Wil je weten wat een goede conversieratio er sowieso uitziet voor jouw branche? Bekijk onze <Link to="/blogs/strategie/goede-conversieratio-benchmarks-per-branche" className="text-accent hover:underline">benchmarks voor conversieratio per branche</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat is de formule voor een sterke CTA?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een effectieve CTA bestaat uit drie elementen: een actief werkwoord, een specifiek resultaat en, indien mogelijk, een aanduiding van moeite of tijd. Voorbeeld: 'Bereken mijn offerte in 1 minuut' bevat het werkwoord (bereken), het resultaat (offerte) en het tijdsbeslag (1 minuut). Je vertelt de lezer precies wat hij krijgt, hoe lang het duurt en hoe direct het is.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Vergelijk dat met 'Verzenden'. Daar mist alle context: wat verzend ik, naar wie, en wat krijg ik daarvoor terug? De lezer moet de bovenliggende tekst opnieuw scannen om de implicatie te begrijpen. Elke seconde extra denkwerk kost je conversie. Een goede CTA neemt dat denkwerk over.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Welke werkwoorden werken in de praktijk?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Werkwoorden die een direct voordeel beloven scoren consistent beter. Denk aan 'krijg', 'ontvang', 'ontdek', 'plan', 'reserveer', 'start' en 'bereken'. Vermijd technische werkwoorden als 'verzenden', 'doorgaan' of 'klik hier'. Die voelen administratief en plaatsen de actie aan de kant van de lezer in plaats van bij het resultaat.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Voor B2B-diensten werken werkwoorden als 'plan' en 'reserveer' sterk omdat ze laagdrempelig zijn. 'Plan een gratis intake' belooft minder verplichting dan 'Vraag een offerte aan'. Voor webshops zijn 'krijg' en 'ontvang' krachtig, omdat ze het bezit van het product al in de tekst meenemen. Test bij twijfel altijd twee varianten naast elkaar — daarover later meer.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe schrijf je in de eerste persoon?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een veelgebruikte truc is de CTA in de eerste persoon schrijven: 'Bereken mijn offerte' in plaats van 'Bereken jouw offerte'. Onderzoek van ContentVerve toonde aan dat deze variant in veel tests 90 procent meer kliks oplevert. De reden: de lezer voelt zich eigenaar van de actie. Hij denkt 'dat is mijn knop' in plaats van 'iemand vraagt me iets te doen'.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Niet elke doelgroep reageert hetzelfde op die formule. In de zorg of bij oudere doelgroepen werkt de aanspreekvorm met 'uw' of 'jouw' soms persoonlijker. Onze ervaring is dat in 7 van de 10 gevallen de eerste persoon wint, maar de andere 3 gevallen zijn de moeite waard om te toetsen. Daarom blijft testen het belangrijkste advies in elke CTA-discussie.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Welke woorden moet je vermijden?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            'Verzenden', 'Indienen', 'OK' en 'Meer informatie' zijn dood gewicht op een conversiegerichte pagina. Ze beschrijven een handeling zonder belofte. Ook woorden als 'gratis' of 'nu' werken minder goed dan vroeger, omdat ze als clickbait worden ervaren. Een knop met 'Klik hier nu gratis!' verlaagt vaak het vertrouwen in plaats van het te verhogen.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Wees voorzichtig met dwingende formuleringen als 'Schrijf je nu in!' of 'Mis dit niet!'. In B2C-context werkt urgentie soms goed, maar in B2B en bij hoogwaardige producten roept het wantrouwen op. Een rustige, zelfverzekerde belofte ('Plan een vrijblijvend gesprek') wint vaak van een geforceerde push-tekst. Hoe je sowieso een landingspagina schrijft die converteert lees je in onze blog over <Link to="/blogs/strategie/landingspagina-schrijven-converteert" className="text-accent hover:underline">landingspagina's die converteren</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe positioneer je je CTA op de pagina?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De CTA hoort op drie plekken minstens terug te komen: above the fold (direct zichtbaar zonder scrollen), in het midden van de pagina na de belangrijkste argumenten, en onderaan als afsluitende uitnodiging. Mensen kopen niet altijd op het eerste moment dat ze klaar zijn — ze willen later in het verhaal terug naar de actieknop kunnen. Hoe je die eerste sectie van je pagina sterk maakt staat in onze gids over <Link to="/blogs/strategie/above-the-fold-waarom-eerste" className="text-accent hover:underline">above the fold optimaliseren</Link>.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Beperk je tot één primaire CTA-tekst per pagina. Als je drie verschillende knoppen hebt met verschillende beloftes, raakt de bezoeker in twijfel. Eén consistente belofte, op meerdere plekken herhaald, presteert in vrijwel elke test beter dan een buffet van keuzes. Een tweede actie ('Lees meer') mag wel — maar maak die visueel ondergeschikt.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe test je je CTA?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een A/B-test is de enige manier om te weten of jouw CTA-tekst écht beter is. Tools als Google Optimize zijn weg, maar in PostHog, VWO of zelfs binnen Meta Ads en Google Ads kun je twee versies tegen elkaar uitspelen. Begin met de variant waarvan je vermoedt dat hij wint en voeg er één concrete variatie aan toe. Reken op minstens 200 conversies per variant voor een betrouwbaar oordeel.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Test maximaal één element tegelijk: alleen de tekst, of alleen de kleur, of alleen de plaatsing. Anders weet je achteraf niet wat het verschil veroorzaakte. Documenteer iedere test, ook de verloren tests. Die kennis bouwt op tot een eigen 'CTA-bibliotheek' die je per branche en doelgroep kunt hergebruiken. Onze blog over <Link to="/blogs/strategie/a-b-testen-beginners-verhoog" className="text-accent hover:underline">A/B-testen voor beginners</Link> helpt je om die testflow goed op te zetten.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Welke CTA-voorbeelden werken in de praktijk?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een paar concrete voorbeelden uit klantcases. Voor een installateur veranderden we 'Vraag offerte aan' in 'Bereken mijn besparing'. Resultaat: 38 procent meer ingevulde formulieren in 6 weken. Voor een SaaS-startup ging 'Start gratis trial' naar 'Probeer 14 dagen gratis'. Resultaat: 22 procent meer trialregistraties. Voor een fysiotherapeut veranderde 'Maak afspraak' naar 'Plan mijn intake'. Resultaat: 18 procent meer afspraken in de eerste week.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Wat opvalt: in alle gevallen is de winnaar concreter en specifieker. Je belooft niet alleen een actie, je belooft een voordeel. Die kleine ingreep maakt het verschil tussen een twijfelende bezoeker en een klikkende klant. Wil je een volledige analyse waarom mensen wel of niet klikken op een actieknop? Lees onze blog over <Link to="/blogs/strategie/landingspagina-waarom-hij-anders-homepage" className="text-accent hover:underline">waarom een landingspagina anders is dan je homepage</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wanneer schakel je hulp in?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Iedere ondernemer kan een paar CTA's herschrijven en testen. Maar als je merkt dat je conversies stagneren, je niet weet welke variant te kiezen, of je belangrijke campagnes hebt waar veel budget achter zit, dan is een buitenstaander vaak goud waard. Een CRO-specialist kijkt fris naar je teksten, brengt branche-ervaring mee en heeft toegang tot tools om grotere tests betrouwbaar uit te voeren.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Wat je zelf altijd kunt doen: schrijf elke maand één nieuwe CTA-variant en zet hem voor minimaal twee weken naast je huidige tekst. Daarmee bouw je een eigen ritme van continue verbetering, ongeacht je budget of grootte. Wil je dat we mét je meekijken naar je belangrijkste pagina's en CTA's? Plan dan een gesprek via onze <Link to="/contact" className="text-accent hover:underline">contactpagina</Link>.
                        </p>
                    </div>

                    {/* FAQ Section */}
                    <section className="mt-16 pt-12 border-t border-primary/10">
                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Veelgestelde vragen</h2>
                        <div className="space-y-6 not-prose">
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat is een goede CTA tekst?</h3>
                                <p className="text-primary/70 leading-relaxed">Een goede CTA tekst is kort, actief en concreet. Hij vertelt precies wat er gebeurt als iemand klikt en welk voordeel die persoon krijgt. 'Bereken mijn besparing' werkt vrijwel altijd beter dan 'Verzenden', omdat de eerste een resultaat belooft en de tweede alleen een handeling beschrijft.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoe lang mag een CTA tekst zijn?</h3>
                                <p className="text-primary/70 leading-relaxed">Twee tot vijf woorden is de sweet spot. Korter dan twee woorden mist context, langer dan vijf wordt niet meer gescand. Voor een knop midden op een landingspagina is drie tot vier woorden ideaal. In een email kan een wat langere CTA werken omdat de lezer al verder is in zijn beslissing.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Welke werkwoorden converteren het beste?</h3>
                                <p className="text-primary/70 leading-relaxed">Werkwoorden die een direct voordeel laten zien presteren beter dan neutrale werkwoorden. Bekend zijn 'krijg', 'ontvang', 'ontdek', 'bereken', 'plan', 'reserveer' en 'start'. Vermijd zwakke werkwoorden als 'verzenden', 'klik hier' of 'meer informatie' — die zeggen niets over de waarde voor de lezer.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Moet ik mijn CTA in de eerste persoon schrijven?</h3>
                                <p className="text-primary/70 leading-relaxed">In veel tests presteren CTA's in de eerste persoon ('Bereken mijn offerte') 10 tot 30 procent beter dan dezelfde CTA in de tweede persoon ('Bereken jouw offerte'). De lezer voelt het als zijn eigen intentie. Toets dat altijd in een A/B-test, want voor sommige doelgroepen werkt de aanspreekvorm met 'jouw' juist persoonlijker.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoeveel CTA's zet ik op een pagina?</h3>
                                <p className="text-primary/70 leading-relaxed">Kies één primaire CTA per pagina en herhaal die op meerdere plekken: above the fold, in het midden en onderaan. Te veel verschillende CTA's verlamt de bezoeker. Wil je een tweede pad bieden voor mensen die nog niet klaar zijn om te kopen? Maak die secundaire CTA visueel duidelijk minder prominent (bijvoorbeeld een tekstlink in plaats van een knop).</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoe test je of een CTA werkt?</h3>
                                <p className="text-primary/70 leading-relaxed">Met een A/B-test in je webanalyse- of advertentieplatform laat je twee CTA-varianten 50/50 zien aan vergelijkbare bezoekers. Reken op minimaal 200 conversies per variant voor een betrouwbaar oordeel. Test telkens slechts één element (woord, kleur of plaatsing), zodat je weet wat het verschil veroorzaakte.</p>
                            </div>
                        </div>
                    </section>

                    {/* CTA */}
                    <section className="mt-24 bg-primary rounded-[3rem] p-12 md:p-16 text-center relative overflow-hidden">
                        <div className="absolute inset-0 opacity-20" style={{backgroundImage: 'radial-gradient(circle at 20% 50%, var(--color-accent), transparent 50%)'}}></div>
                        <h2 className="relative z-10 font-drama italic text-background text-3xl sm:text-4xl md:text-5xl mb-6">CTA's die echt converteren?</h2>
                        <p className="relative z-10 text-background/80 text-lg mb-8 max-w-2xl mx-auto">We schrijven en testen CTA's die meetbaar meer kliks en conversies opleveren — zonder gokken, met data.</p>
                        <Link to="/contact" className="relative z-10 inline-block bg-accent text-primary font-mono uppercase text-sm tracking-widest px-8 py-4 rounded-full hover:bg-background transition-colors">Plan een gesprek</Link>
                    </section>

                    {/* Related */}
                    <section className="mt-24 pt-12 border-t border-primary/10">
                        <h3 className="text-xl font-bold text-primary mb-6">Lees ook</h3>
                        <div className="grid md:grid-cols-3 gap-6">
                            <Link to="/blogs/strategie/landingspagina-schrijven-converteert" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <div className="text-xs font-mono uppercase tracking-widest text-accent mb-2">Strategie</div>
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Landingspagina die converteert</h3>
                                <p className="text-sm text-primary/60">Bouw een pagina die echt verkoopt — structuur, copy en bewijs.</p>
                            </Link>
                            <Link to="/blogs/strategie/a-b-testen-beginners-verhoog" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <div className="text-xs font-mono uppercase tracking-widest text-accent mb-2">Strategie</div>
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">A/B testen voor beginners</h3>
                                <p className="text-sm text-primary/60">Zo zet je je eerste betrouwbare A/B-test op zonder ruis.</p>
                            </Link>
                            <Link to="/blogs/strategie/above-the-fold-waarom-eerste" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <div className="text-xs font-mono uppercase tracking-widest text-accent mb-2">Strategie</div>
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Above the fold optimaliseren</h3>
                                <p className="text-sm text-primary/60">Wat de bezoeker direct ziet bepaalt of hij blijft of wegklikt.</p>
                            </Link>
                        </div>
                    </section>
                </div>
            </article>

            <Footer />
        </main>
    );
}
