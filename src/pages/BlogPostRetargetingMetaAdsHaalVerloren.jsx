import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ChevronRight, User } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function BlogPostRetargetingMetaAdsHaalVerloren() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen selection:bg-accent/30 selection:text-dark flex flex-col bg-background">
            <Helmet>
                <title>Retargeting via Meta Ads: zo haal je verloren bezoekers terug | Empowers</title>
                <meta name="description" content="Retargeting via Meta Ads haalt bezoekers terug die je website al kennen. Lees hoe je het instelt, welke doelgroepen werken en welke fouten je voorkomt." />
                <link rel="canonical" href="https://www.empowers.nl/blogs/social-ads/retargeting-meta-ads-haal-verloren" />
                <meta property="og:title" content="Retargeting via Meta Ads: zo haal je verloren bezoekers terug" />
                <meta property="og:description" content="Retargeting via Meta Ads haalt bezoekers terug die je website al kennen. Lees hoe je het instelt en welke fouten je voorkomt." />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://www.empowers.nl/blogs/social-ads/retargeting-meta-ads-haal-verloren" />
                <meta property="og:image" content="https://www.empowers.nl/images/blogs/retargeting-meta-ads-haal-verloren.jpg" />
                <meta property="article:published_time" content="2026-04-08" />
                <meta property="article:author" content="Empowers" />
                <meta property="article:section" content="Social Ads" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Retargeting via Meta Ads: zo haal je verloren bezoekers terug" />
                <meta name="twitter:description" content="Zo haal je met Meta Ads retargeting verloren websitebezoekers terug en zet je ze om in klanten." />

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Article",
                        "headline": "Retargeting via Meta Ads: zo haal je verloren bezoekers terug",
                        "description": "Retargeting via Meta Ads haalt bezoekers terug die je website al kennen. Lees hoe je het instelt, welke doelgroepen werken en welke fouten je voorkomt.",
                        "image": "https://www.empowers.nl/images/blogs/retargeting-meta-ads-haal-verloren.jpg",
                        "datePublished": "2026-04-08T00:00:00+02:00",
                        "author": { "@type": "Organization", "name": "Empowers" },
                        "publisher": {
                            "@type": "Organization",
                            "name": "Empowers",
                            "url": "https://www.empowers.nl",
                            "logo": {
                                "@type": "ImageObject",
                                "url": "https://www.empowers.nl/empowers-logo-color.svg"
                            }
                        },
                        "mainEntity": {
                            "@type": "FAQPage",
                            "mainEntity": [
                                {
                                    "@type": "Question",
                                    "name": "Wat is retargeting in Meta Ads?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Retargeting is het tonen van advertenties aan mensen die je website, app of Instagram-profiel eerder hebben bezocht. Meta herkent ze via de Meta Pixel of Conversions API en laat je advertenties specifiek aan die groep zien op Facebook en Instagram."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Hoe lang mag een retargeting-doelgroep meegaan?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Voor de meeste webshops werkt een window van 30 dagen het beste. Heb je een langere aankoopcyclus, zoals in B2B of dienstverlening, dan is 60 tot 180 dagen realistisch. Bezoekers van meer dan zes maanden geleden zijn meestal niet meer de moeite waard."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Heb ik de Meta Pixel nodig voor retargeting?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Ja. Zonder Pixel of Conversions API weet Meta niet wie er op je site is geweest. We raden aan om beide te combineren: Pixel voor browsergedrag en Conversions API voor betrouwbare server-side data, vooral sinds iOS 14.5."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Wat is een goed budget voor retargeting campagnes?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Reken op 10 tot 20% van je totale Meta Ads budget. De doelgroep is klein en warm, dus je hoeft er niet veel geld tegenaan te gooien. Begin met 10 euro per dag en schaal op zodra je frequentie boven de 2,5 komt."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Hoe voorkom ik dat mensen mijn advertentie te vaak zien?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Houd je advertentiefrequentie onder de 3 per week. Gebruik frequentie capping, ververs je creatives elke twee weken en sluit converters direct uit van de doelgroep. Zo voorkom je advertentiemoeheid en irritatie bij je doelgroep."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Werkt retargeting ook zonder webshop?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Ja. Ook dienstverleners en B2B-bedrijven kunnen retargeten op bezoekers van hun website, videokijkers op Facebook of mensen die met hun Instagram-profiel hebben geïnterageerd. Retargeting gaat niet alleen over winkelwagens, het werkt voor elke vorm van interesse."
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
                            {
                                "@type": "ListItem",
                                "position": 1,
                                "name": "Home",
                                "item": "https://www.empowers.nl"
                            },
                            {
                                "@type": "ListItem",
                                "position": 2,
                                "name": "Blogs",
                                "item": "https://www.empowers.nl/blogs"
                            },
                            {
                                "@type": "ListItem",
                                "position": 3,
                                "name": "Social Ads",
                                "item": "https://www.empowers.nl/blogs/social-ads"
                            },
                            {
                                "@type": "ListItem",
                                "position": 4,
                                "name": "Retargeting via Meta Ads",
                                "item": "https://www.empowers.nl/blogs/social-ads/retargeting-meta-ads-haal-verloren"
                            }
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
                        <Link to="/blogs/social-ads" className="hover:text-accent transition-colors">Social Ads</Link>
                        <ChevronRight className="w-3 h-3" />
                        <span className="text-primary truncate">Retargeting Meta Ads</span>
                    </nav>

                    {/* Header */}
                    <header className="mb-16">
                        <div className="inline-block px-3 py-1 bg-accent/10 text-accent font-mono text-xs uppercase tracking-widest rounded-full mb-6">
                            Social Ads
                        </div>
                        <h1 className="font-sans font-bold text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight mb-8">
                            Retargeting via Meta Ads: zo haal je verloren bezoekers terug
                        </h1>

                        <div className="flex flex-wrap items-center gap-6 text-sm font-sans text-primary/60 border-y border-primary/10 py-6">
                            <div className="flex items-center gap-2">
                                <User className="w-4 h-4" />
                                <span>Empowers Redactie</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>8 april 2026</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>8 minuten leestijd</span>
                            </div>
                        </div>
                    </header>

                    {/* Featured Image */}
                    <figure className="w-full h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden mb-16 relative bg-primary">
                        <div className="absolute inset-0 bg-[url('/images/blogs/retargeting-meta-ads-haal-verloren.jpg')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </figure>

                    {/* Content */}
                    <div className="prose prose-lg max-w-none prose-headings:text-primary prose-headings:font-bold prose-a:text-accent prose-a:underline hover:prose-a:text-accent/80">
                        <p className="text-xl leading-relaxed text-primary/80 font-medium mb-6">
                            96% van je bezoekers verlaat je website zonder iets te kopen of in te vullen. Dat is de realiteit van online marketing. Het goede nieuws: die mensen zijn niet weg, ze zijn alleen nog niet klaar om te kopen. Met retargeting via Meta Ads haal je ze terug, precies op het moment dat ze wel open staan. In dit artikel lees je hoe je het opzet, welke doelgroepen werken en welke fouten je beter niet maakt.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat is retargeting in Meta Ads precies?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Retargeting is het opnieuw tonen van advertenties aan mensen die jouw merk al kennen. Ze hebben je website bezocht, een video bekeken, op een post geklikt of een productpagina geopend. Meta registreert dat gedrag en maakt er een doelgroep van waarop jij gericht kunt adverteren. Je betaalt dus niet meer om een vreemde te overtuigen, je praat verder met iemand die al interesse had.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Het grote voordeel: deze mensen converteren drie tot vijf keer vaker dan koude bezoekers. Ze kennen je merk, ze weten wat je doet, en ze hadden een reden om op je site te landen. Eén nudge op het juiste moment is vaak genoeg om ze terug te halen.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Waarom retargeting verplichte kost is voor elke adverteerder</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een koude advertentie moet drie dingen tegelijk doen: de aandacht trekken, uitleggen wat je verkoopt en vertrouwen opbouwen. Dat kost tijd, geld en meerdere contactmomenten. Retargeting slaat die eerste twee stappen over. De bezoeker weet al wie je bent. Je hoeft alleen nog maar de laatste drempel weg te nemen.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Bij een webshopklant in de meubelbranche zagen we retargeting ROAS cijfers van 8 tot 12, terwijl de prospecting campagnes rond de 2,5 hangen. Dezelfde creatives, hetzelfde product, alleen een andere doelgroep. Die cijfers kan niemand negeren. Retargeting is niet optioneel, het is de meest rendabele laag van je Meta Ads strategie.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Stap 1: Meta Pixel en Conversions API installeren</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Zonder tracking geen retargeting. Meta moet weten wie er op welke pagina kwam, hoe lang ze bleven en of ze iets deden. De Meta Pixel is daarvoor de basis: een stukje code dat browsergedrag doorgeeft aan Meta. Sinds iOS 14.5 mist die Pixel echter een groot deel van de iPhone-bezoekers, vooral op Safari.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De oplossing is de Conversions API. Die werkt server-side en stuurt gebeurtenissen rechtstreeks vanaf jouw server naar Meta, zonder afhankelijk te zijn van de browser. Beide tegelijk gebruiken is tegenwoordig standaard. Lees onze gids <Link to="/blogs/social-ads/meta-pixel-instellen-stap-stap" className="text-accent hover:underline">Meta Pixel instellen stap voor stap</Link> als je vanaf nul begint.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Stap 2: De juiste doelgroepen bouwen</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Niet alle websitebezoekers zijn gelijk. Iemand die drie seconden op je homepage was en meteen wegklikte is waardevoller om uit te sluiten dan om te retargeten. Iemand die drie productpagina's bekeek en zijn winkelwagen vulde is goud waard. Het is dus zaak om je doelgroepen te segmenteren op gedrag en tijd.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            In de praktijk werken deze vier doelgroepen het beste. De eerste is alle websitebezoekers van de laatste 30 dagen. De tweede zijn mensen die specifieke productpagina's bekeken maar niks kochten. De derde is de bekende winkelwagen-verlaters van de laatste 14 dagen. En de vierde: Instagram- en Facebook-profielbezoekers die je post hebben gelezen maar nog nooit op je site kwamen. Die laatste groep is vaak onderschat en levert verrassend goedkope conversies op.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Stap 3: Creatives die opvallen in een warme doelgroep</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Hier gaan de meeste adverteerders de mist in. Ze tonen aan retargeting-bezoekers exact dezelfde advertentie als aan koude prospects. Resultaat: advertentiemoeheid, irritatie en dalende CTR. Een warme doelgroep verdient een ander verhaal. Geen generieke productshots, maar creatives die aansluiten op waar de bezoeker in het aankooptraject stond.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Werk met drie soorten creatives. Een variant die een concrete reden geeft om terug te komen, bijvoorbeeld een review of een korting. Een variant die een twijfel wegneemt, zoals gratis retourneren of 14 dagen bedenktijd. En een variant die sociale bewijskracht toont, zoals klantverhalen of bekende merken die je al bedienen. Rouleer ze elke twee weken. Lees ook <Link to="/blogs/social-ads/facebook-vs-instagram-adverteren-welk" className="text-accent hover:underline">op welk platform je welke creative het beste kunt inzetten</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Stap 4: Frequentie bewaken en converters uitsluiten</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Retargeting wordt pas vervelend als iemand je advertentie vijf keer per dag ziet. Houd de frequentie in de gaten en probeer onder de 3 per week te blijven. Komt hij daarboven, verleng dan je tijdsvenster (bijvoorbeeld van 30 naar 60 dagen) of verhoog je dagbudget zodat je dezelfde mensen minder vaak bereikt.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Net zo belangrijk: sluit mensen die al gekocht hebben direct uit van je retargeting. Niks irritanter dan een advertentie zien voor iets wat je gisteren hebt besteld. Maak een aparte doelgroep van converters van de laatste 90 dagen en voeg die als uitsluiting toe aan al je retargeting campagnes.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Stap 5: Meten, leren en bijsturen</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een retargeting campagne loopt niet op de automatische piloot. Check wekelijks of je frequentie, CTR en ROAS stabiel zijn. Zakt de CTR onder de 1%? Tijd voor nieuwe creatives. Stijgt de kostprijs per aankoop? Misschien is je doelgroep uitgeput en moet je hem vernieuwen of verbreden.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De belangrijkste KPI is niet ROAS, maar incremental ROAS: hoeveel extra omzet genereer je dankzij de advertenties, bovenop wat je sowieso had verkocht. Test dat regelmatig door een klein percentage van je doelgroep even niet te targeten en de resultaten te vergelijken. Alleen zo weet je of je retargeting echt werkt of alleen maar meelift op organische verkopen.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Veelgemaakte fouten die je wilt voorkomen</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De grootste miskleun is te vroeg beginnen. Met minder dan 1.000 websitebezoekers per maand is retargeting zinloos: Meta heeft te weinig data om een zinnige doelgroep te bouwen. Focus dan eerst op prospecting en bouw je publiek op. Vanaf 3.000 bezoekers per maand wordt retargeting pas echt interessant.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een tweede klassieker: één grote bulkdoelgroep. Als je alle bezoekers op een hoop gooit, mis je de kans om gerichte boodschappen te tonen. Segmenteer altijd op intent en tijd. En tenslotte: onthoud dat retargeting een sluitstuk is, geen startpunt. Zonder gezonde toestroom van nieuwe bezoekers droogt je doelgroep binnen een maand op.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Zo bouw je een retargeting strategie die blijft werken</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Retargeting is geen trucje, het is een systeem. Betrouwbare tracking, slimme doelgroepen, creatives die passen bij de fase van de bezoeker, een gezonde frequentie en wekelijks onderhoud. Doe je dit consistent, dan is retargeting met afstand de meest rendabele laag van je Meta Ads strategie.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Wil je weten of jouw retargeting opzet het maximale uit je budget haalt? We doen een gratis check op je Meta Ads account en laten zien welke doelgroepen en creatives je omzet kunnen verdubbelen. Plan een vrijblijvend gesprek via onze <Link to="/contact" className="text-accent hover:underline">contactpagina</Link>.
                        </p>
                    </div>

                    {/* FAQ Section */}
                    <section className="mt-16 pt-12 border-t border-primary/10">
                        <h2 className="text-3xl font-bold text-primary mb-8">Veelgestelde vragen</h2>
                        <div className="space-y-6 not-prose">
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat is retargeting in Meta Ads?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Retargeting is het tonen van advertenties aan mensen die je website, app of Instagram-profiel eerder hebben bezocht. Meta herkent ze via de Meta Pixel of Conversions API en laat je advertenties specifiek aan die groep zien op Facebook en Instagram.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoe lang mag een retargeting-doelgroep meegaan?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Voor de meeste webshops werkt een window van 30 dagen het beste. Heb je een langere aankoopcyclus, zoals in B2B of dienstverlening, dan is 60 tot 180 dagen realistisch. Bezoekers van meer dan zes maanden geleden zijn meestal niet meer de moeite waard.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Heb ik de Meta Pixel nodig voor retargeting?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Ja. Zonder Pixel of Conversions API weet Meta niet wie er op je site is geweest. We raden aan om beide te combineren: Pixel voor browsergedrag en Conversions API voor betrouwbare server-side data, vooral sinds iOS 14.5.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat is een goed budget voor retargeting campagnes?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Reken op 10 tot 20% van je totale Meta Ads budget. De doelgroep is klein en warm, dus je hoeft er niet veel geld tegenaan te gooien. Begin met 10 euro per dag en schaal op zodra je frequentie boven de 2,5 komt.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoe voorkom ik dat mensen mijn advertentie te vaak zien?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Houd je advertentiefrequentie onder de 3 per week. Gebruik frequentie capping, ververs je creatives elke twee weken en sluit converters direct uit van de doelgroep. Zo voorkom je advertentiemoeheid en irritatie bij je doelgroep.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Werkt retargeting ook zonder webshop?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Ja. Ook dienstverleners en B2B-bedrijven kunnen retargeten op bezoekers van hun website, videokijkers op Facebook of mensen die met hun Instagram-profiel hebben geïnterageerd. Retargeting gaat niet alleen over winkelwagens, het werkt voor elke vorm van interesse.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Related Links */}
                    <section className="mt-16 pt-12 border-t border-primary/10">
                        <h3 className="text-xl font-bold text-primary mb-6">Lees ook</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <Link to="/blogs/social-ads/meta-pixel-instellen-stap-stap" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Meta Pixel instellen</h3>
                                <p className="text-primary/60 text-sm">Stap voor stap naar een werkende tracking basis.</p>
                            </Link>
                            <Link to="/blogs/social-ads/lookalike-audiences-meta-ads-gids" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Lookalike audiences</h3>
                                <p className="text-primary/60 text-sm">Vind nieuwe klanten die lijken op je beste kopers.</p>
                            </Link>
                            <Link to="/blogs/social-ads/facebook-vs-instagram-adverteren-welk" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Facebook vs Instagram</h3>
                                <p className="text-primary/60 text-sm">Op welk platform moet je adverteren?</p>
                            </Link>
                        </div>
                    </section>
                </div>
            </article>

            {/* Bottom CTA */}
            <section className="w-full pb-32 px-6">
                <div className="max-w-4xl mx-auto bg-primary rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
                    <h2 className="relative z-10 font-drama italic text-background text-3xl sm:text-4xl md:text-5xl mb-6">Meer halen uit Meta Ads?</h2>
                    <p className="relative z-10 font-sans text-background/70 text-lg mb-10 max-w-xl mx-auto">We bouwen een retargeting strategie die je verloren bezoekers terughaalt en omzet in klanten. Geen verplichtingen.</p>
                    <Link to="/contact" className="relative z-10 btn-magnetic inline-flex items-center justify-center bg-accent text-background font-sans font-bold text-lg px-10 py-4 rounded-[2rem] hover:bg-accent/90 transition-colors">Neem contact op</Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
