import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ChevronRight, User } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function BlogPostPerfecteHeroSectie() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen selection:bg-accent/30 selection:text-dark flex flex-col bg-background">
            <Helmet>
                <title>De perfecte hero-sectie: zo maak je de beste eerste indruk | Empowers</title>
                <meta name="description" content="Bezoekers beoordelen je site in seconden. Hoe je een hero-sectie bouwt die overtuigt: structuur, koptekst, CTA en visuele basis." />
                <meta name="keywords" content="hero sectie eerste indruk, perfecte hero, homepage hero, landingspagina header, above the fold" />
                <link rel="canonical" href="https://www.empowers.nl/blogs/strategie/perfecte-hero-sectie-beste-eerste" />
                <meta property="og:title" content="De perfecte hero-sectie: zo maak je de beste eerste indruk" />
                <meta property="og:description" content="Hoe je een hero-sectie bouwt die in drie seconden overtuigt." />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://www.empowers.nl/blogs/strategie/perfecte-hero-sectie-beste-eerste" />
                <meta property="og:image" content="https://www.empowers.nl/images/blogs/perfecte-hero-sectie-beste-eerste.jpg" />
                <meta property="article:published_time" content="2026-05-10T19:00:00+02:00" />
                <meta property="article:author" content="Empowers" />
                <meta property="article:section" content="Strategie" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="De perfecte hero-sectie" />
                <meta name="twitter:description" content="Wat in de eerste schermhoogte moet staan om bezoekers vast te houden." />

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Article",
                        "headline": "De perfecte hero-sectie: zo maak je de beste eerste indruk",
                        "description": "Een hero-sectie bouwen die overtuigt: structuur, koptekst, CTA en visuele basis.",
                        "image": "https://www.empowers.nl/images/blogs/perfecte-hero-sectie-beste-eerste.jpg",
                        "datePublished": "2026-05-10T19:00:00+02:00",
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
                                    "name": "Wat is een hero-sectie precies?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Het bovenste deel van een webpagina dat een bezoeker ziet zonder te scrollen. Op desktop is dat doorgaans het eerste schermhoogte, op mobiel een vergelijkbaar deel maar smaller. De hero-sectie bepaalt of een bezoeker blijft of wegklikt. Hij heeft drie functies: communiceren wat je doet, voor wie je het doet en waarom iemand verder moet kijken."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Hoeveel tekst moet er in de hero staan?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Niet veel. Een hoofd-koptekst van een korte zin, een ondertekst van twee tot drie zinnen, en een duidelijke knop. Zoek niet naar woordrijkdom. Wel naar woordkracht. Een lange hero-tekst van vijf alinea's pleegt zelfmoord, want bezoekers scannen en geen ervan gaat de lange tekst lezen."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Moet ik een afbeelding of een video in de hero zetten?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Een goede afbeelding bijna altijd ja. Een autoplay video met geluid bijna nooit, want het stoort en kost laadtijd. Een kort visuel achtergrond zonder geluid kan werken voor merken waar emotie telt. Voor de meeste MKB-sites is een sterke statische afbeelding sneller, simpeler en effectiever dan video."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Wat is de belangrijkste fout in een hero?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Een vage koptekst die niet vertelt wat je doet. 'Wij zijn jouw partner in groei' zegt niets. 'Wij helpen webshops om met Google Ads meer klanten te krijgen' zegt iets. Specifiek werkt. Vaag verkoopt nooit. De tweede grote fout: geen duidelijke knop, of een knop met de tekst 'meer informatie' die geen actie suggereert."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Moet ik mijn hero op mobiel anders inrichten?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Vrijwel altijd ja. Wat op desktop naast elkaar staat, moet op mobiel onder elkaar. De koptekst blijft, maar wordt vaak iets korter. De ondertekst kort je in. De knop staat groot en duidelijk. Een hero die op desktop perfect werkt maar op mobiel een wirwar van overlappende elementen is, kost je het deel van het verkeer dat van een telefoon komt."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Helpt social proof in de hero?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Heel vaak ja. Een rij klantlogo's onder de CTA-knop, een Trustpilot-score, of een klein citaat van een tevreden klant geeft direct vertrouwen. Het is een van de snelste manieren om twijfel weg te nemen. Wel: kies authentieke proof, geen fake of nietszeggende awards die niemand kent."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Hoe meet ik of mijn hero werkt?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Drie metingen samen geven een beeld. Bouncepercentage: hoeveel mensen klikken weg zonder iets te doen. Scrolldiepte: hoeveel scrollen verder dan de hero. Conversies op de hero-CTA versus elders op de pagina. Daalt de bounce, stijgt de scrolldiepte en converteren bezoekers via de hoofdknop, dan werkt de hero. Eén meting alleen is misleidend."
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
                            { "@type": "ListItem", "position": 4, "name": "Perfecte hero-sectie", "item": "https://www.empowers.nl/blogs/strategie/perfecte-hero-sectie-beste-eerste" }
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
                        <span className="text-primary truncate">Perfecte hero-sectie</span>
                    </nav>

                    <header className="mb-16">
                        <div className="inline-block px-3 py-1 bg-accent/10 text-accent font-mono text-xs uppercase tracking-widest rounded-full mb-6">
                            Strategie
                        </div>
                        <h1 className="font-sans font-bold text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight mb-8">
                            De perfecte hero-sectie: zo maak je de beste eerste indruk
                        </h1>
                        <div className="flex flex-wrap items-center gap-6 text-sm font-sans text-primary/60 border-y border-primary/10 py-6">
                            <div className="flex items-center gap-2"><User className="w-4 h-4" /><span>Empowers Redactie</span></div>
                            <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>10 mei 2026</span></div>
                            <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>8 minuten leestijd</span></div>
                        </div>
                    </header>

                    <figure className="w-full h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden mb-16 relative bg-primary">
                        <div className="absolute inset-0 bg-[url('/images/blogs/perfecte-hero-sectie-beste-eerste.jpg')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </figure>

                    <div className="prose prose-lg max-w-none prose-headings:text-primary prose-headings:font-bold prose-a:text-accent prose-a:underline hover:prose-a:text-accent/80">
                        <p className="text-xl leading-relaxed text-primary/80 font-medium mb-6">
                            Een bezoeker beslist in drie seconden of jouw site iets voor hem is. In die paar tellen telt alleen de hero-sectie: het bovenste deel van je homepage, het stuk dat hij ziet zonder te scrollen. Slecht in beeld? Hij is weg. Sterk in beeld? Hij scrollt door en wordt misschien klant. Hieronder loop je langs wat een hero werkt of breekt.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat een hero-sectie moet doen</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een hero heeft drie taken. Vertellen wat je doet. Vertellen voor wie. En een bezoeker een eerste duw geven om verder te kijken of contact op te nemen. Alle drie binnen het deel van de pagina dat zichtbaar is zonder scrollen. Niets meer, want extra elementen leiden af. Niets minder, want zonder een van de drie heb je geen werkende hero.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Wat een hero niet hoeft: alle features uitleggen, je hele aanbod tonen, een carrousel met vijf wisselende slides die niemand uitleest. Bezoekers willen één heldere boodschap, geen overzicht. Een specifieke uitwerking over de psychologie van die eerste seconden staat in onze blog over <Link to="/blogs/strategie/above-the-fold-waarom-eerste" className="text-accent hover:underline">de above-the-fold</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">De vier elementen die elke hero nodig heeft</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een werkende hero bevat vier dingen. Een hoofd-koptekst die in een korte zin vertelt wat je doet. Een ondertekst van twee tot drie zinnen die context geeft of een belangrijk voordeel benoemt. Een duidelijke knop met een actie-tekst. En een visuele basis: een sterke foto, illustratie of grafisch element dat de boodschap ondersteunt.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Daaronder kun je optioneel een rij klantlogo's, een Trustpilot-score of een korte quote toevoegen voor social proof. Bezoekers vertrouwen merken sneller wanneer ze zien dat anderen al klant zijn. Maar overlaad de hero niet met badges, awards en certificaten. Eén of twee bewijspunten is meer dan tien generieke iconen.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe je een koptekst schrijft die scoort</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Vage koppen zijn de meest gemaakte fout. "Jouw partner in groei", "Wij maken het verschil", "Slimme oplossingen voor het MKB": prachtig bedoeld, betekent niets. Bezoekers kunnen er niet uit afleiden of jij past bij hun probleem. Een goede koptekst is specifiek over wat je doet en voor wie.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Drie formules werken bijna altijd. De wat-voor-wie-formule: "X voor Y". Bijvoorbeeld "Google Ads-beheer voor webshops". De resultaat-formule: "Krijg X zonder Y". Bijvoorbeeld "Krijg meer klanten zonder zelf advertenties te maken". De vraag-formule die de zoekvraag van je doelgroep beantwoordt: "Loopt jouw Google Ads niet zoals het hoort?". Welke past, hangt af van je type doelgroep en je merkstem.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">De ondertekst die de koptekst ondersteunt</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De ondertekst is geen samenvatting van je homepage. Hij beantwoordt één vraag: waarom zou de bezoeker doorlezen of klikken? Geef daar in twee of drie zinnen antwoord op. Noem het voordeel dat je belooft, het soort klant waarmee je werkt, of het bezwaar dat je wegneemt. Voorbeeld: "Wij beheren je Google Ads volledig. Geen abonnementen, geen verborgen kosten, wel maandelijks heldere rapportages over wat klanten oplevert."
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Wat een ondertekst niet is: marketingjargon zonder inhoud. Schrijf alsof je het tegen een potentiële klant aan tafel zou zeggen. Lees het hardop voor. Klinkt het opgeklopt? Schrijf het opnieuw.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">De call-to-action: één primaire, één secundaire</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Veel hero-secties bevatten te veel knoppen. Drie of vier knoppen naast elkaar maakt geen enkele duidelijk genoeg. Werk met één primaire CTA en eventueel één secundaire optie. De primaire actie is de gewenste vervolgstap: contact opnemen, demo aanvragen, kennismaken. De secundaire is voor de twijfelaars: meer lezen, video bekijken, prijzen zien.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Wat de knoptekst betreft: gebruik actiewerkwoorden. "Plan een gesprek" werkt beter dan "Contact". "Bekijk werkwijze" beter dan "Meer informatie". Zorg ook dat de primaire knop visueel duidelijk anders is dan de secundaire, met een opvallende achtergrondkleur. De secundaire kan een outline of subtielere stijl hebben. Voor uitgebreidere CTA-strategie zie onze gids over <Link to="/blogs/strategie/landingspagina-schrijven-converteert" className="text-accent hover:underline">een landingspagina schrijven die converteert</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Visuele basis: wat werkt op de achtergrond</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De visuele basis ondersteunt de boodschap. Een professionele foto van een echte klant of medewerker werkt vaak beter dan een stockfoto. Wanneer je toch stock gebruikt, kies onverwachte beelden in plaats van de generieke "team aan tafel"-foto's. Een illustratie of grafisch element kan ook, zolang het past bij je merkstem. Voor een serieuze B2B-dienst werkt een rustige illustratie beter dan een vrolijke; voor een lifestyle-merk is het andersom.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Wat je niet doet: de hero vol gooien met een autoplay-video met geluid. Het stoort, het kost laadtijd, en het maakt mobiele bezoekers boos. Een korte achtergrondvideo zonder geluid kan, maar werkt alleen wanneer hij snel laadt en de boodschap niet verstoort. Voor de meeste MKB-sites is een sterke statische foto effectiever én sneller.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Mobiel werkt anders dan desktop</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Wat op desktop werkt, valt op mobiel vaak uit elkaar. Een hero die op desktop een koptekst links en een foto rechts heeft, moet op mobiel onder elkaar. De koptekst blijft, maar wordt vaak iets korter. De ondertekst kort je in tot één zin. De CTA-knop staat groot en duim-vriendelijk. Test je hero altijd op een echte telefoon, niet alleen in een browser-simulatie. Wat in Chrome op een MacBook werkt, kan op een midrange Android-toestel een chaos zijn.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Voor de meerderheid van MKB-sites komt meer dan de helft van het verkeer mobiel binnen. Toch zien we bij audits regelmatig dat de hero op mobiel een afterthought is. Een uur per maand testen op een echte telefoon brengt vaak meer fixes aan het licht dan een hele desktop-audit.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat je deze week kunt doen</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Open je homepage op een telefoon. Lees de koptekst voor. Begrijpt iemand die je nog niet kent in twee zinnen wat je doet? Zie je een knop met een duidelijke actietekst? Zie je voor wie het bedoeld is? Drie keer nee? Tijd om de hero te herschrijven. Drie keer ja? Test welke variant beter converteert via A/B-testen.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Wil je samen kijken hoe jouw hero op een vreemde overkomt? Plan een vrijblijvend gesprek via onze <Link to="/contact" className="text-accent hover:underline">contactpagina</Link>. We bekijken je homepage door de ogen van een nieuwe bezoeker en laten zien welke drie aanpassingen direct effect hebben.
                        </p>
                    </div>

                    <section className="mt-16 pt-12 border-t border-primary/10">
                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Veelgestelde vragen</h2>
                        <div className="space-y-6 not-prose">
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat is een hero-sectie precies?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Het bovenste deel van een webpagina dat een bezoeker ziet zonder te scrollen. Op desktop is dat doorgaans het eerste schermhoogte, op mobiel een vergelijkbaar deel maar smaller. De hero-sectie bepaalt of een bezoeker blijft of wegklikt. Hij heeft drie functies: communiceren wat je doet, voor wie je het doet en waarom iemand verder moet kijken.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoeveel tekst moet er in de hero staan?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Niet veel. Een hoofd-koptekst van een korte zin, een ondertekst van twee tot drie zinnen, en een duidelijke knop. Zoek niet naar woordrijkdom. Wel naar woordkracht. Een lange hero-tekst van vijf alinea's pleegt zelfmoord, want bezoekers scannen en geen ervan gaat de lange tekst lezen.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Moet ik een afbeelding of een video in de hero zetten?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Een goede afbeelding bijna altijd ja. Een autoplay video met geluid bijna nooit, want het stoort en kost laadtijd. Een kort visuel achtergrond zonder geluid kan werken voor merken waar emotie telt. Voor de meeste MKB-sites is een sterke statische afbeelding sneller, simpeler en effectiever dan video.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat is de belangrijkste fout in een hero?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Een vage koptekst die niet vertelt wat je doet. 'Wij zijn jouw partner in groei' zegt niets. 'Wij helpen webshops om met Google Ads meer klanten te krijgen' zegt iets. Specifiek werkt. Vaag verkoopt nooit. De tweede grote fout: geen duidelijke knop, of een knop met de tekst 'meer informatie' die geen actie suggereert.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Moet ik mijn hero op mobiel anders inrichten?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Vrijwel altijd ja. Wat op desktop naast elkaar staat, moet op mobiel onder elkaar. De koptekst blijft, maar wordt vaak iets korter. De ondertekst kort je in. De knop staat groot en duidelijk. Een hero die op desktop perfect werkt maar op mobiel een wirwar van overlappende elementen is, kost je het deel van het verkeer dat van een telefoon komt.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Helpt social proof in de hero?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Heel vaak ja. Een rij klantlogo's onder de CTA-knop, een Trustpilot-score, of een klein citaat van een tevreden klant geeft direct vertrouwen. Het is een van de snelste manieren om twijfel weg te nemen. Wel: kies authentieke proof, geen fake of nietszeggende awards die niemand kent.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoe meet ik of mijn hero werkt?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Drie metingen samen geven een beeld. Bouncepercentage: hoeveel mensen klikken weg zonder iets te doen. Scrolldiepte: hoeveel scrollen verder dan de hero. Conversies op de hero-CTA versus elders op de pagina. Daalt de bounce, stijgt de scrolldiepte en converteren bezoekers via de hoofdknop, dan werkt de hero. Eén meting alleen is misleidend.</p>
                            </div>
                        </div>
                    </section>

                    <section className="mt-16 pt-12 border-t border-primary/10">
                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Lees ook</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <Link to="/blogs/strategie/above-the-fold-waarom-eerste" className="block border border-primary/10 rounded-xl p-6 hover:border-accent transition-colors">
                                <div className="text-xs font-mono uppercase tracking-widest text-accent mb-2">Strategie</div>
                                <h3 className="font-sans font-semibold text-primary text-lg mb-2">Waarom de above-the-fold zo telt</h3>
                                <p className="font-sans text-primary/70 text-sm">Wat bezoekers in de eerste drie seconden beslissen.</p>
                            </Link>
                            <Link to="/blogs/strategie/landingspagina-schrijven-converteert" className="block border border-primary/10 rounded-xl p-6 hover:border-accent transition-colors">
                                <div className="text-xs font-mono uppercase tracking-widest text-accent mb-2">Strategie</div>
                                <h3 className="font-sans font-semibold text-primary text-lg mb-2">Een landingspagina die converteert</h3>
                                <p className="font-sans text-primary/70 text-sm">Hoe je de hele pagina opbouwt na een sterke hero.</p>
                            </Link>
                        </div>
                    </section>
                </div>
            </article>

            <section className="w-full pb-32 px-6">
                <div className="max-w-4xl mx-auto bg-primary rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
                    <h2 className="relative z-10 font-drama italic text-background text-3xl sm:text-4xl md:text-5xl mb-6">Werkt jouw hero zoals hij zou moeten?</h2>
                    <p className="relative z-10 font-sans text-background/70 text-lg mb-10 max-w-xl mx-auto">In een gesprek van een halfuur kijken we naar je homepage door de ogen van een nieuwe bezoeker en geven we drie concrete suggesties. Geen vage adviezen.</p>
                    <Link to="/contact" className="relative z-10 btn-magnetic inline-flex items-center justify-center bg-accent text-background font-sans font-bold text-lg px-10 py-4 rounded-[2rem] hover:bg-accent/90 transition-colors">Neem contact op</Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
