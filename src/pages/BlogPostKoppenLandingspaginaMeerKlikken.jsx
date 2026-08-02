import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ChevronRight, User } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function BlogPostKoppenLandingspaginaMeerKlikken() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen selection:bg-accent/30 selection:text-dark flex flex-col bg-background">
            <Helmet>
                <title>Koppen die klikken opleveren: tips voor je landingspagina | Empowers</title>
                <meta name="description" content="De kop bepaalt of een bezoeker verder leest of wegklikt. Lees hoe je koppen schrijft die vasthouden, overtuigen en meer conversie opleveren." />
                <link rel="canonical" href="https://www.empowers.nl/blogs/strategie/koppen-landingspagina-meer-klikken" />
                <meta property="og:title" content="Koppen die klikken opleveren" />
                <meta property="og:description" content="Zo schrijf je koppen die bezoekers vasthouden en laten converteren." />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://www.empowers.nl/blogs/strategie/koppen-landingspagina-meer-klikken" />
                <meta property="og:image" content="https://www.empowers.nl/images/blogs/koppen-landingspagina-meer-klikken.jpg" />
                <meta property="article:published_time" content="2026-08-02T15:00:00+02:00" />
                <meta property="article:author" content="Empowers" />
                <meta property="article:section" content="Strategie" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Koppen voor je landingspagina" />
                <meta name="twitter:description" content="De kop bepaalt of iemand blijft. Zo schrijf je hem goed." />

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@graph": [
                            {
                                "@type": "Article",
                                "headline": "Koppen die klikken opleveren: tips voor je landingspagina",
                                "description": "De kop bepaalt of een bezoeker verder leest of wegklikt. Lees hoe je koppen schrijft die vasthouden, overtuigen en meer conversie opleveren.",
                                "image": "https://www.empowers.nl/images/blogs/koppen-landingspagina-meer-klikken.jpg",
                                "datePublished": "2026-08-02T15:00:00+02:00",
                                "author": { "@type": "Organization", "name": "Empowers" },
                                "publisher": {
                                    "@type": "Organization",
                                    "name": "Empowers",
                                    "url": "https://www.empowers.nl",
                                    "logo": { "@type": "ImageObject", "url": "https://www.empowers.nl/empowers-logo-color.svg" }
                                }
                            },
                            {
                                "@type": "BreadcrumbList",
                                "itemListElement": [
                                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.empowers.nl" },
                                    { "@type": "ListItem", "position": 2, "name": "Blogs", "item": "https://www.empowers.nl/blogs" },
                                    { "@type": "ListItem", "position": 3, "name": "Strategie", "item": "https://www.empowers.nl/blogs/strategie" },
                                    { "@type": "ListItem", "position": 4, "name": "Koppen voor je landingspagina", "item": "https://www.empowers.nl/blogs/strategie/koppen-landingspagina-meer-klikken" }
                                ]
                            },
                            {
                                "@type": "FAQPage",
                                "mainEntity": [
                                    {
                                        "@type": "Question",
                                        "name": "Wat maakt een goede kop voor een landingspagina?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Een goede kop maakt in één zin duidelijk wat de bezoeker hier krijgt en waarom dat de moeite waard is. Concreet wint van slim: een heldere belofte verslaat een creatieve woordspeling. De bezoeker beslist in enkele seconden of hij blijft, en de kop is wat hij als eerste leest."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Moet de kop van je landingspagina matchen met je advertentie?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Ja, dit is een van de grootste conversiefactoren. Wie op een advertentie over dakisolatie klikt en op een pagina over verduurzamen in het algemeen landt, is meteen weg. Herhaal de belofte uit de advertentie in de kop van de pagina, het liefst in dezelfde woorden."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Hoe lang mag een kop op een landingspagina zijn?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Zo lang als nodig om de belofte helder te maken, en geen woord langer. In de praktijk werkt een hoofdkop van zes tot twaalf woorden goed, aangevuld met een subkop die detail toevoegt. Op mobiel zie je snel of een kop te lang is: meer dan drie regels is te veel."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Werken vragen als kop op een landingspagina?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Soms. Een vraag werkt als de bezoeker hem met ja beantwoordt en zich herkend voelt. Het risico is dat een vraag vaag blijft waar een belofte concreet is. Test het per pagina, en kies bij twijfel voor de concrete belofte."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Hoe test je welke kop het beste werkt?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Met genoeg verkeer draai je een A/B-test tussen twee fundamenteel verschillende koppen. Met weinig verkeer leg je varianten voor aan mensen uit je doelgroep en vraag je wat zij verwachten achter elke kop. Kies daarna de kop die het dichtst bij je aanbod blijft."
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
                        <Link to="/blogs/strategie" className="hover:text-accent transition-colors">Strategie</Link>
                        <ChevronRight className="w-3 h-3" />
                        <span className="text-primary truncate">Koppen die klikken opleveren</span>
                    </nav>

                    <header className="mb-16">
                        <div className="inline-block px-3 py-1 bg-accent/10 text-accent font-mono text-xs uppercase tracking-widest rounded-full mb-6">
                            Strategie
                        </div>
                        <h1 className="font-sans font-bold text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight mb-8">
                            Koppen die klikken opleveren: tips voor je landingspagina
                        </h1>
                        <div className="flex flex-wrap items-center gap-6 text-sm font-sans text-primary/60 border-y border-primary/10 py-6">
                            <div className="flex items-center gap-2"><User className="w-4 h-4" /><span>Empowers Redactie</span></div>
                            <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>2 augustus 2026</span></div>
                            <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>6 minuten leestijd</span></div>
                        </div>
                    </header>

                    <figure className="w-full h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden mb-16 relative bg-primary">
                        <div className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-overlay" style={{backgroundImage: "url('/images/blogs/koppen-landingspagina-meer-klikken.jpg')"}}></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </figure>

                    <div className="prose prose-lg max-w-none prose-headings:text-primary prose-headings:font-bold prose-a:text-accent prose-a:underline hover:prose-a:text-accent/80">
                        <p className="text-xl leading-relaxed text-primary/80 font-medium mb-6">
                            Een kop die klikken oplevert doet drie dingen tegelijk: hij vertelt wat de bezoeker hier krijgt, waarom dat waardevol is en hij sluit aan op de verwachting waarmee iemand binnenkwam. De meeste koppen doen hooguit één van die dingen. Daarom lekken de meeste landingspagina's bezoekers in de eerste seconden.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Waarom is de kop zo bepalend?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een bezoeker beslist binnen enkele seconden of je pagina de moeite waard is. In die seconden leest hij de kop, scant hij het beeld en vormt hij een oordeel. De rest van je pagina, hoe goed ook, krijgt alleen een kans als de kop die eerste toets doorstaat.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Reken maar mee: verdubbel je het percentage bezoekers dat na de kop verder leest, dan werkt dat door in alles daaronder. Dezelfde advertentie-euro's, meer aanvragen. Weinig plekken op je pagina hebben zo'n hefboomwerking als die ene regel bovenaan.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat zet je in de kop: belofte, resultaat of probleem?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De sterkste koppen beloven een concreet resultaat. "Binnen twee weken een offerte van drie lokale installateurs" vertelt precies wat je krijgt. Vergelijk dat met "Dé specialist in duurzame oplossingen", een kop die over de afzender gaat in plaats van over de bezoeker.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Het probleem als startpunt werkt ook, mits je het herkenbaar maakt. "Advertenties die klikken opleveren maar geen klanten?" raakt precies de frustratie waarmee iemand zocht. Zet je het probleem in de kop, laat de subkop dan direct de oplossing zien. Probleem zonder uitweg is alleen maar somber.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe laat je de kop aansluiten op je advertentie?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Message match is de meest onderschatte factor. De bezoeker klikte op een specifieke belofte, en jouw kop moet die belofte bevestigen. Adverteer je op "boekhouder voor zzp vanaf 89 euro", dan wil de bezoeker die woorden terugzien. Landt hij op "Welkom bij Administratiekantoor Jansen", dan voelt dat als een verkeerde afslag.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Bij het doorlichten van campagnes voor klanten is dit steevast een van de eerste dingen waar we naar kijken, omdat het gat tussen advertentie en pagina vaak groter is dan iedereen denkt. De oplossing is simpel: maak per advertentiegroep een eigen variant van de pagina, met een kop die de advertentie letterlijk echoot. Meer daarover lees je in ons artikel over <Link to="/blogs/strategie/landingspagina-waarom-hij-anders-homepage" className="text-accent hover:underline">waarom een landingspagina anders is dan je homepage</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Concreet verslaat creatief</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een woordgrap voelt goed om te schrijven en doet weinig voor je conversie. Bezoekers scannen, en wie scant heeft geen tijd voor dubbele lagen. "Wij brengen uw groei in een stroomversnelling" vraagt interpretatie. "Meer aanvragen uit je advertentiebudget" niet.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Cijfers maken concreet. Een aantal, een termijn of een bedrag geeft houvast: "in 6 weken", "vanaf 250 euro per maand", "gemiddeld 40% meer aanvragen". Gebruik alleen cijfers die je waar kunt maken, want de kop is ook een belofte waar de rest van je pagina en je dienstverlening aan wordt afgemeten.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Vergeet de subkop niet</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De hoofdkop trekt, de subkop overtuigt. Gebruik de subkop voor de details die niet in de hoofdkop passen: voor wie het is, wat het kost of wat de eerste stap is. Samen vormen ze een mini-pitch die op zichzelf al genoeg kan zijn om het formulier in te vullen.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een werkende combinatie: hoofdkop met het resultaat, subkop met de manier waarop plus een drempelverlager. "Meer omzet uit je webshop" gevolgd door "We verbeteren je campagnes en je landingspagina's. Eerste analyse gratis." De bezoeker weet nu wat, hoe en wat het hem kost om te starten.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe test je koppen in de praktijk?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Schrijf per pagina minstens vijf serieuze varianten voordat je kiest. De eerste kop die je bedenkt is zelden de beste, en pas bij variant vier of vijf ga je scherper formuleren. Leg de kandidaten naast elkaar en vraag bij elke kop: wat verwacht een vreemde hierachter? Klopt die verwachting met de pagina?
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Heb je genoeg verkeer, test dan twee fundamenteel verschillende richtingen tegen elkaar in plaats van twee variaties op dezelfde zin. Heb je weinig verkeer, kijk dan naar ons artikel over <Link to="/blogs/strategie/landingspagina-testen-weinig-verkeer" className="text-accent hover:underline">testen zonder veel verkeer</Link>. En wil je dat we meedenken over de koppen en opbouw van jouw pagina's? Plan een gesprek via onze <Link to="/contact" className="text-accent hover:underline">contactpagina</Link>.
                        </p>
                    </div>

                    <section className="mt-16 pt-12 border-t border-primary/10">
                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Veelgestelde vragen</h2>
                        <div className="space-y-6 not-prose">
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat maakt een goede kop voor een landingspagina?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Een goede kop maakt in één zin duidelijk wat de bezoeker hier krijgt en waarom dat de moeite waard is. Concreet wint van slim: een heldere belofte verslaat een creatieve woordspeling. De bezoeker beslist in enkele seconden of hij blijft, en de kop is wat hij als eerste leest.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Moet de kop van je landingspagina matchen met je advertentie?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Ja, dit is een van de grootste conversiefactoren. Wie op een advertentie over dakisolatie klikt en op een pagina over verduurzamen in het algemeen landt, is meteen weg. Herhaal de belofte uit de advertentie in de kop van de pagina, het liefst in dezelfde woorden.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoe lang mag een kop op een landingspagina zijn?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Zo lang als nodig om de belofte helder te maken, en geen woord langer. In de praktijk werkt een hoofdkop van zes tot twaalf woorden goed, aangevuld met een subkop die detail toevoegt. Op mobiel zie je snel of een kop te lang is: meer dan drie regels is te veel.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Werken vragen als kop op een landingspagina?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Soms. Een vraag werkt als de bezoeker hem met ja beantwoordt en zich herkend voelt. Het risico is dat een vraag vaag blijft waar een belofte concreet is. Test het per pagina, en kies bij twijfel voor de concrete belofte.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoe test je welke kop het beste werkt?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Met genoeg verkeer draai je een A/B-test tussen twee fundamenteel verschillende koppen. Met weinig verkeer leg je varianten voor aan mensen uit je doelgroep en vraag je wat zij verwachten achter elke kop. Kies daarna de kop die het dichtst bij je aanbod blijft.</p>
                            </div>
                        </div>
                    </section>

                    <section className="mt-16 pt-12 border-t border-primary/10">
                        <h3 className="text-xl font-bold text-primary mb-6">Lees ook</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <Link to="/blogs/strategie/landingspagina-schrijven-converteert" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Een landingspagina die converteert</h3>
                                <p className="text-primary/60 text-sm">De volledige opbouw van tekst die verkoopt.</p>
                            </Link>
                            <Link to="/blogs/strategie/reviews-logos-landingspagina" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Reviews en logo's op je pagina</h3>
                                <p className="text-primary/60 text-sm">Wanneer social proof werkt en wanneer het schaadt.</p>
                            </Link>
                            <Link to="/blogs/strategie/landingspagina-testen-weinig-verkeer" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Testen zonder veel verkeer</h3>
                                <p className="text-primary/60 text-sm">Zo verbeter je je pagina zonder duizenden bezoekers.</p>
                            </Link>
                        </div>
                    </section>

                </div>
            </article>

            <section className="w-full pb-32 px-6">
                <div className="max-w-4xl mx-auto bg-primary rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
                    <h2 className="relative z-10 font-drama italic text-background text-3xl sm:text-4xl md:text-5xl mb-6">
                        Koppen die werk doen?
                    </h2>
                    <p className="relative z-10 font-sans text-background/70 text-lg mb-10 max-w-xl mx-auto">
                        We schrijven en testen landingspagina's waar je advertenties op mogen landen. Van kop tot knop gericht op conversie.
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
