import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ChevronRight, User } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function BlogPostReviewsLogosLandingspagina() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen selection:bg-accent/30 selection:text-dark flex flex-col bg-background">
            <Helmet>
                <title>Reviews en logo's op je landingspagina: werkt het echt? | Empowers</title>
                <meta name="description" content="Reviews en klantlogo's kunnen je conversie verhogen, maar alleen als je ze goed inzet. Lees wat werkt, wat schaadt en waar je ze plaatst." />
                <link rel="canonical" href="https://www.empowers.nl/blogs/strategie/reviews-logos-landingspagina" />
                <meta property="og:title" content="Reviews en logo's op je landingspagina: werkt het echt?" />
                <meta property="og:description" content="Wanneer social proof conversie oplevert en wanneer het juist schaadt." />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://www.empowers.nl/blogs/strategie/reviews-logos-landingspagina" />
                <meta property="og:image" content="https://www.empowers.nl/images/blogs/reviews-logos-landingspagina.jpg" />
                <meta property="article:published_time" content="2026-08-02T12:00:00+02:00" />
                <meta property="article:author" content="Empowers" />
                <meta property="article:section" content="Strategie" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Reviews en logo's op je landingspagina" />
                <meta name="twitter:description" content="Zo zet je social proof in zonder je pagina te schaden." />

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@graph": [
                            {
                                "@type": "Article",
                                "headline": "Reviews en logo's op je landingspagina: werkt het echt?",
                                "description": "Reviews en klantlogo's kunnen je conversie verhogen, maar alleen als je ze goed inzet. Lees wat werkt, wat schaadt en waar je ze plaatst.",
                                "image": "https://www.empowers.nl/images/blogs/reviews-logos-landingspagina.jpg",
                                "datePublished": "2026-08-02T12:00:00+02:00",
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
                                    { "@type": "ListItem", "position": 4, "name": "Reviews en logo's op je landingspagina", "item": "https://www.empowers.nl/blogs/strategie/reviews-logos-landingspagina" }
                                ]
                            },
                            {
                                "@type": "FAQPage",
                                "mainEntity": [
                                    {
                                        "@type": "Question",
                                        "name": "Verhogen reviews echt de conversie van een landingspagina?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Meestal wel, mits de reviews geloofwaardig en relevant zijn. Bezoekers twijfelen bij een onbekend merk, en een herkenbaar verhaal van een echte klant neemt die twijfel weg. Generieke lofzangen zonder naam of context doen weinig en kunnen zelfs wantrouwen wekken."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Waar plaats je reviews op een landingspagina?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Dicht bij het moment van twijfel. Een korte quote naast het formulier of de knop werkt vaak beter dan een reviewblok onderaan de pagina. Wie op het punt staat zijn gegevens in te vullen, wil op dat moment bevestiging dat hij een goede keuze maakt."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Werken klantlogo's ook voor kleine bedrijven?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Ja, als de logo's herkenbaar zijn voor jouw doelgroep. Vijf regionale namen die je klant kent zeggen meer dan twintig onbekende logo's. Heb je geen bekende klantnamen, kies dan voor reviews met naam en bedrijf, die wegen zwaarder dan een logomuur zonder context."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Wat maakt een review geloofwaardig?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Specificiteit. Een naam met foto en bedrijf, een concreet resultaat en een detail dat alleen een echte klant kan weten. Vergelijk 'Top service!' met 'Binnen zes weken kwamen er meer aanvragen uit de campagne dan in het halfjaar ervoor'. De tweede overtuigt."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Kunnen reviews en logo's ook conversie kosten?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Ja. Nep ogende reviews, stockfoto's bij namen en logomuren vol onbekende merken wekken argwaan. Ook te veel social proof kan afleiden van je aanbod. Test daarom wat werkt op jouw pagina in plaats van alles tegelijk te plaatsen."
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
                        <span className="text-primary truncate">Reviews en logo's</span>
                    </nav>

                    <header className="mb-16">
                        <div className="inline-block px-3 py-1 bg-accent/10 text-accent font-mono text-xs uppercase tracking-widest rounded-full mb-6">
                            Strategie
                        </div>
                        <h1 className="font-sans font-bold text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight mb-8">
                            Reviews en logo's op je landingspagina: werkt het echt?
                        </h1>
                        <div className="flex flex-wrap items-center gap-6 text-sm font-sans text-primary/60 border-y border-primary/10 py-6">
                            <div className="flex items-center gap-2"><User className="w-4 h-4" /><span>Empowers Redactie</span></div>
                            <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>2 augustus 2026</span></div>
                            <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>6 minuten leestijd</span></div>
                        </div>
                    </header>

                    <figure className="w-full h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden mb-16 relative bg-primary">
                        <div className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-overlay" style={{backgroundImage: "url('/images/blogs/reviews-logos-landingspagina.jpg')"}}></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </figure>

                    <div className="prose prose-lg max-w-none prose-headings:text-primary prose-headings:font-bold prose-a:text-accent prose-a:underline hover:prose-a:text-accent/80">
                        <p className="text-xl leading-relaxed text-primary/80 font-medium mb-6">
                            Ja, reviews en logo's werken, maar niet altijd en niet vanzelf. Goede social proof neemt twijfel weg op het moment dat een bezoeker beslist. Slechte social proof wekt argwaan en kost juist conversie. Het verschil zit in geloofwaardigheid, relevantie en plaatsing. Hieronder lees je precies wanneer het werkt.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Waarom werkt social proof op een landingspagina?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een bezoeker op je landingspagina staat op het punt om iets van je te vragen of te kopen, terwijl hij je waarschijnlijk niet kent. Die onzekerheid is de grootste rem op conversie. Andere klanten die al positief zijn geweest, zijn dan het bewijs dat de bezoeker zelf niet kan verzamelen.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Dat mechanisme werkt alleen als het bewijs echt voelt. Mensen zijn getraind in het herkennen van nepreviews. Zodra iets geregisseerd oogt, slaat het effect om. De vraag is dus niet of je reviews plaatst, maar welke en hoe.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Welke reviews overtuigen echt?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Specifieke reviews. Een naam, een gezicht, een bedrijf en een concreet resultaat. "Sinds de nieuwe campagne komen er wekelijks aanvragen binnen die we vroeger nooit kregen" zegt meer dan vijf sterren met de tekst "Top bedrijf!". Bij de landingspagina's die we voor klanten bouwen, kiezen we liever twee sterke reviews met een verhaal dan tien korte kreten.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Relevantie telt mee. Een webshop-eigenaar overtuig je met een review van een andere webshop-eigenaar, niet met een quote van een advocatenkantoor. Heb je meerdere doelgroepen, wissel dan de reviews per landingspagina zodat elke bezoeker zichzelf herkent.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Waar plaats je reviews voor het meeste effect?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Dicht bij de beslissing. De klassieke plek is een reviewblok halverwege de pagina, maar het sterkste moment is vlak bij het formulier of de knop. Daar piekt de twijfel. Een korte quote naast de aanvraagknop vangt die twijfel precies op het goede moment op.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Boven de vouw werkt een compact signaal beter dan een volledig reviewblok: een gemiddelde score met het aantal beoordelingen, of één regel uit een sterke review. De volledige verhalen krijgen verderop de ruimte. Zo bouw je bewijs op zonder dat het je boodschap verdringt. Meer over de opbouw van een sterke pagina lees je in ons artikel over <Link to="/blogs/strategie/landingspagina-schrijven-converteert" className="text-accent hover:underline">een landingspagina schrijven die converteert</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wanneer werken klantlogo's?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Logo's werken als ze herkend worden. Eén bekende naam in jouw markt doet meer dan een muur vol onbekende merken. Voor een regionaal bedrijf kunnen dat regionale namen zijn; landelijk bekend is niet nodig, herkenbaar voor jouw bezoeker wel.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Zonder herkenbare namen kun je logo's beter vervangen door cijfers of reviews. "Ruim 200 ondernemers gingen je voor" of een sterke klantquote geeft meer vertrouwen dan een rij logo's waar niemand iets bij voelt. En check bij grotere klanten altijd even of je hun logo mag gebruiken, dat voorkomt gedoe achteraf.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat schaadt je conversie juist?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Alles wat nep oogt. Stockfoto's bij reviewnamen zijn de bekendste misser: bezoekers herkennen die gezichten en trekken meteen de hele pagina in twijfel. Ook riskant zijn reviews zonder afzender, een perfecte vijf sterren zonder enige kritische noot en logomuren die groter zijn dan je eigen verhaal.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Te veel is ook een valkuil. Social proof ondersteunt je aanbod, het vervangt het niet. Een pagina die vooral uit reviews en logo's bestaat, laat de bezoeker zoeken naar wat je eigenlijk aanbiedt. Houd de verhouding scherp: je aanbod leidt, het bewijs ondersteunt.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe test je of het werkt op jouw pagina?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Meet het. Draai een variant met en zonder reviewblok, of test verschillende plekken voor dezelfde review. Kijk niet alleen naar het aantal conversies maar ook naar formulierstarts, dan zie je waar bezoekers afhaken. Heb je weinig verkeer, kies dan voor grote verschillen tussen varianten in plaats van detailtests.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Wil je weten of jouw landingspagina meer uit zijn bezoekers kan halen? We kijken graag mee naar de opbouw en het bewijs op je pagina. Plan een gesprek via onze <Link to="/contact" className="text-accent hover:underline">contactpagina</Link>.
                        </p>
                    </div>

                    <section className="mt-16 pt-12 border-t border-primary/10">
                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Veelgestelde vragen</h2>
                        <div className="space-y-6 not-prose">
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Verhogen reviews echt de conversie van een landingspagina?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Meestal wel, mits de reviews geloofwaardig en relevant zijn. Bezoekers twijfelen bij een onbekend merk, en een herkenbaar verhaal van een echte klant neemt die twijfel weg. Generieke lofzangen zonder naam of context doen weinig en kunnen zelfs wantrouwen wekken.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Waar plaats je reviews op een landingspagina?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Dicht bij het moment van twijfel. Een korte quote naast het formulier of de knop werkt vaak beter dan een reviewblok onderaan de pagina. Wie op het punt staat zijn gegevens in te vullen, wil op dat moment bevestiging dat hij een goede keuze maakt.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Werken klantlogo's ook voor kleine bedrijven?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Ja, als de logo's herkenbaar zijn voor jouw doelgroep. Vijf regionale namen die je klant kent zeggen meer dan twintig onbekende logo's. Heb je geen bekende klantnamen, kies dan voor reviews met naam en bedrijf, die wegen zwaarder dan een logomuur zonder context.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat maakt een review geloofwaardig?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Specificiteit. Een naam met foto en bedrijf, een concreet resultaat en een detail dat alleen een echte klant kan weten. Vergelijk 'Top service!' met 'Binnen zes weken kwamen er meer aanvragen uit de campagne dan in het halfjaar ervoor'. De tweede overtuigt.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Kunnen reviews en logo's ook conversie kosten?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Ja. Nep ogende reviews, stockfoto's bij namen en logomuren vol onbekende merken wekken argwaan. Ook te veel social proof kan afleiden van je aanbod. Test daarom wat werkt op jouw pagina in plaats van alles tegelijk te plaatsen.</p>
                            </div>
                        </div>
                    </section>

                    <section className="mt-16 pt-12 border-t border-primary/10">
                        <h3 className="text-xl font-bold text-primary mb-6">Lees ook</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <Link to="/blogs/strategie/landingspagina-waarom-hij-anders-homepage" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Landingspagina vs homepage</h3>
                                <p className="text-primary/60 text-sm">Waarom een landingspagina anders is dan je homepage.</p>
                            </Link>
                            <Link to="/blogs/strategie/kleurpsychologie-landingspagina-conversie" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Kleurpsychologie en conversie</h3>
                                <p className="text-primary/60 text-sm">Wat kleuren doen met het gedrag op je pagina.</p>
                            </Link>
                            <Link to="/blogs/strategie/pop-ups-landingspaginas-helpen-schaden" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Pop-ups: helpen of schaden?</h3>
                                <p className="text-primary/60 text-sm">Wanneer een pop-up conversie oplevert en wanneer niet.</p>
                            </Link>
                        </div>
                    </section>

                </div>
            </article>

            <section className="w-full pb-32 px-6">
                <div className="max-w-4xl mx-auto bg-primary rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
                    <h2 className="relative z-10 font-drama italic text-background text-3xl sm:text-4xl md:text-5xl mb-6">
                        Meer conversie uit je landingspagina?
                    </h2>
                    <p className="relative z-10 font-sans text-background/70 text-lg mb-10 max-w-xl mx-auto">
                        We bouwen landingspagina's waar bezoek klant wordt. Met bewijs op de juiste plek en een boodschap die overtuigt.
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
