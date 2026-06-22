import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ChevronRight, User } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function BlogPostCustomerJourneyUitgelegdOnbekendeKlant() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen selection:bg-accent/30 selection:text-dark flex flex-col bg-background">
            <Helmet>
                <title>De customer journey uitgelegd: van onbekende naar klant | Empowers</title>
                <meta name="description" content="De customer journey is de route van eerste kennismaking tot trouwe klant. Lees welke fases er zijn en welk kanaal in elke fase het verschil maakt." />
                <link rel="canonical" href="https://www.empowers.nl/blogs/algemeen/customer-journey-uitgelegd-onbekende-klant" />
                <meta property="og:title" content="De customer journey uitgelegd: van onbekende naar klant | Empowers" />
                <meta property="og:description" content="De customer journey is de route van eerste kennismaking tot trouwe klant. Lees welke fases er zijn en welk kanaal in elke fase het verschil maakt." />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://www.empowers.nl/blogs/algemeen/customer-journey-uitgelegd-onbekende-klant" />
                <meta property="og:image" content="https://www.empowers.nl/images/blogs/customer-journey-uitgelegd-onbekende-klant.jpg" />
                <meta property="article:published_time" content="2026-06-11T11:00:00+02:00" />
                <meta property="article:author" content="Empowers" />
                <meta property="article:section" content="Algemeen" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="De customer journey uitgelegd: van onbekende naar klant | Empowers" />
                <meta name="twitter:description" content="De customer journey is de route van eerste kennismaking tot trouwe klant. Lees welke fases er zijn en welk kanaal het verschil maakt." />
                <script type="application/ld+json">{JSON.stringify({
                    "@context": "https://schema.org",
                    "@graph": [
                        {
                            "@type": "Article",
                            "headline": "De customer journey uitgelegd: van onbekende naar klant",
                            "image": "https://www.empowers.nl/images/blogs/customer-journey-uitgelegd-onbekende-klant.jpg",
                            "description": "De customer journey is de route van eerste kennismaking tot trouwe klant. Lees welke fases er zijn en welk kanaal in elke fase het verschil maakt.",
                            "author": { "@type": "Organization", "name": "Empowers" },
                            "publisher": { "@type": "Organization", "name": "Empowers", "url": "https://www.empowers.nl" },
                            "datePublished": "2026-06-11T11:00:00+02:00",
                            "dateModified": "2026-06-11T11:00:00+02:00",
                            "url": "https://www.empowers.nl/blogs/algemeen/customer-journey-uitgelegd-onbekende-klant"
                        },
                        {
                            "@type": "BreadcrumbList",
                            "itemListElement": [
                                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.empowers.nl" },
                                { "@type": "ListItem", "position": 2, "name": "Nieuws", "item": "https://www.empowers.nl/nieuws" },
                                { "@type": "ListItem", "position": 3, "name": "Algemeen", "item": "https://www.empowers.nl/blogs/algemeen" },
                                { "@type": "ListItem", "position": 4, "name": "De customer journey uitgelegd: van onbekende naar klant", "item": "https://www.empowers.nl/blogs/algemeen/customer-journey-uitgelegd-onbekende-klant" }
                            ]
                        },
                        {
                            "@type": "FAQPage",
                            "mainEntity": [
                                { "@type": "Question", "name": "Wat is een customer journey?", "acceptedAnswer": { "@type": "Answer", "text": "De customer journey is de complete route die iemand aflegt van het eerste contact met jouw merk tot de aankoop en wat daarna komt. Elke stap waarin iemand jouw bedrijf tegenkomt hoort erbij: een advertentie, een blog, een review, de website en de service na aankoop." } },
                                { "@type": "Question", "name": "Welke fases heeft een customer journey?", "acceptedAnswer": { "@type": "Answer", "text": "De meeste modellen gebruiken vier fases: bewustwording (iemand ontdekt dat jouw oplossing bestaat), overweging (iemand vergelijkt opties), beslissing (iemand kiest en koopt) en loyaliteit (iemand komt terug en beveelt je aan). De namen verschillen per model, het idee blijft gelijk." } },
                                { "@type": "Question", "name": "Waarom is de customer journey belangrijk voor marketing?", "acceptedAnswer": { "@type": "Answer", "text": "Omdat iemand in elke fase iets anders nodig heeft. Wie net ontdekt dat een oplossing bestaat, is niet klaar voor een koopknop. Wie al vergelijkt, heeft niets aan een algemene kennismakingsvideo. Stem je je boodschap af op de fase, dan stijgt het rendement van elk kanaal." } },
                                { "@type": "Question", "name": "Hoe breng je een customer journey in kaart?", "acceptedAnswer": { "@type": "Answer", "text": "Begin bij je klanten: vraag hoe ze je gevonden hebben en wat ze deden voor de aankoop. Combineer dat met data uit Google Analytics, zoals via welke kanalen bezoekers binnenkomen en waar ze afhaken. Teken vervolgens per fase de contactmomenten uit en zoek de gaten." } },
                                { "@type": "Question", "name": "Hoe lang duurt een customer journey gemiddeld?", "acceptedAnswer": { "@type": "Answer", "text": "Dat verschilt enorm per product. Een pizza bestel je binnen vijf minuten, een nieuwe keuken of zakelijke software kost weken tot maanden aan oriëntatie. Hoe hoger het bedrag en het risico van de aankoop, hoe langer de journey en hoe meer contactmomenten er nodig zijn." } },
                                { "@type": "Question", "name": "Verandert AI de customer journey?", "acceptedAnswer": { "@type": "Answer", "text": "Ja. Steeds meer mensen beginnen hun oriëntatie niet in Google maar in een AI-chatbot zoals ChatGPT of Perplexity. Het advies dat zo'n model geeft, stuurt de rest van de journey. Daarom wordt GEO belangrijker: zorgen dat AI-modellen jouw bedrijf noemen als de vraag relevant is." } }
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
                        <span className="text-primary truncate">Customer journey uitgelegd</span>
                    </nav>

                    {/* Header */}
                    <header className="mb-16">
                        <div className="inline-block px-3 py-1 bg-accent/10 text-accent font-mono text-xs uppercase tracking-widest rounded-full mb-6">
                            Algemeen
                        </div>
                        <h1 className="font-sans font-bold text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight mb-8">
                            De customer journey uitgelegd: van onbekende naar klant
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
                                <span>8 minuten leestijd</span>
                            </div>
                        </div>
                    </header>

                    {/* Featured Image */}
                    <figure className="w-full h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden mb-16 relative bg-primary">
                        <div className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-overlay" style={{backgroundImage: "url('/images/blogs/customer-journey-uitgelegd-onbekende-klant.jpg')"}}></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </figure>

                    {/* Content */}
                    <div className="prose prose-lg prose-headings:font-sans prose-headings:font-bold prose-headings:text-primary prose-p:font-sans prose-p:text-primary/80 prose-p:leading-relaxed max-w-none">
                        <p className="text-xl md:text-2xl font-medium leading-relaxed mb-10 text-primary">
                            De customer journey is de route die iemand aflegt van eerste kennismaking met jouw merk tot aankoop en alles wat daarna komt. Die route loopt langs meerdere contactmomenten: een advertentie, een zoekopdracht, een review, jouw website. Wie de journey kent, weet precies waar marketing het verschil maakt en waar klanten nu nog afhaken.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat is een customer journey?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een customer journey is het complete pad van onbekende naar klant, gezien door de ogen van de klant zelf. Niet hoe jij je marketing hebt ingericht, maar hoe iemand jouw bedrijf daadwerkelijk tegenkomt en ervaart.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Neem iemand die uiteindelijk een bureau inhuurt voor online marketing. Die zag misschien eerst een post op LinkedIn. Googelde weken later op "marketingbureau inschakelen kosten". Las twee blogs, vergeleek drie partijen, vroeg een oud-collega om advies en plande toen pas een gesprek.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Elk van die momenten is een touchpoint. Samen vormen ze de journey. En op elk touchpoint kan iemand afhaken of juist een stap verder komen. Daarom loont het om die route bewust in te richten in plaats van te hopen dat het goed komt.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Welke fases doorloopt een klant?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De meeste modellen knippen de journey in vier fases. Het begint met bewustwording: iemand ontdekt dat hij een probleem heeft, of dat jouw soort oplossing bestaat. In deze fase zoekt niemand naar jouw merknaam. Mensen zoeken naar hun probleem.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Dan volgt de overweging. De opties staan op een rij en jouw bedrijf is er hopelijk één van. Hier vergelijkt je toekomstige klant prijzen, leest reviews en weegt af. Daarna komt de beslissing: het moment van kopen of contact opnemen. Een heldere productpagina, een soepel bestelproces en een laatste geruststelling maken hier het verschil.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De vierde fase wordt het vaakst vergeten: loyaliteit. Een tevreden klant koopt opnieuw en vertelt het door. Wie alleen stuurt op nieuwe klanten en bestaande klanten negeert, laat de goedkoopste groei liggen.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Waarom haken klanten halverwege af?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Meestal omdat de boodschap niet past bij de fase. Een bezoeker die net begint met oriënteren en meteen een agressieve koopknop voorgeschoteld krijgt, voelt zich opgejaagd. Andersom geldt het ook: wie klaar is om te kopen en op een wollige inspiratiepagina belandt, klikt weg naar een concurrent die het wel makkelijk maakt.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een tweede oorzaak is een gat in de journey. Stel: je advertenties trekken volop bezoekers, maar er is geen enkele reden om terug te komen. Geen retargeting, geen nieuwsbrief, geen content die de overweging voedt. Dan moet elke bezoeker in één bezoek beslissen, en dat doet bijna niemand bij een grotere aankoop.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De derde klassieker: wrijving op het beslismoment zelf. Verzendkosten die pas bij de kassa verschijnen, een formulier met twaalf velden, een offerte die dagen op zich laat wachten. Kleine drempels, groot effect.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe breng je jouw customer journey in kaart?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Begin niet met een ingewikkeld model, begin met je klanten. Vraag de laatste tien klanten hoe ze bij je terechtkwamen. Wat was het eerste contact? Wat gaf de doorslag? Waar twijfelden ze? De antwoorden zijn vaak verrassender dan elk dashboard.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Leg daar vervolgens je data naast. In Google Analytics zie je via welke kanalen bezoekers binnenkomen, welke pagina's ze bekijken en waar ze de site verlaten. Zo wordt zichtbaar welke touchpoints goed werken en waar de uitval zit.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Teken daarna de route uit per fase. Welke contactmomenten heeft iemand in de bewustwordingsfase? Wat gebeurt er tijdens de overweging? Bij veel bedrijven die wij doorlichten blijkt één fase vrijwel leeg te zijn, en juist daar lekt de omzet weg.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Welk kanaal past bij welke fase?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            In de bewustwordingsfase wil je gevonden worden op het probleem, nog voor iemand merken vergelijkt. Daar werkt <Link to="/seo" className="text-accent hover:underline">SEO</Link> met blogs en uitlegpagina's, samen met social media advertenties die je merk introduceren bij mensen die je nog niet kennen.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Tijdens de overweging verschuift de behoefte naar bewijs en vergelijking. Reviews, klantcases en pagina's die jouw aanpak naast alternatieven zetten doen hier het werk. Retargeting via <Link to="/meta-ads" className="text-accent hover:underline">Meta Ads</Link> houdt je merk in beeld bij iedereen die al eens keek maar nog niet besliste.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Op het beslismoment wint <Link to="/google-ads" className="text-accent hover:underline">Google Ads</Link> op koopgerichte zoekwoorden. Wie zoekt op "boekhoudprogramma kopen" of "loodgieter spoed" staat op het punt te kiezen. En na de aankoop nemen e-mail en goede service het stokje over om van een koper een terugkerende klant te maken.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe meet je of de journey werkt?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Kijk verder dan de laatste klik. Wie alleen meet welk kanaal de aankoop binnenbracht, geeft alle eer aan het beslismoment en ziet niet welke kanalen de klant daarnaartoe brachten. De blog die het eerste contact legde, verdient ook een deel van de credits.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Werk daarom met een meetplan per fase. Bovenin tel je bereik en nieuwe bezoekers, in het midden terugkerende bezoekers en micro-conversies zoals een download of nieuwsbriefinschrijving, onderin de daadwerkelijke aanvragen en verkopen. Zo zie je per fase of het beter of slechter gaat.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Verwacht geen perfect sluitend plaatje. Een deel van de journey speelt zich buiten je zicht af, in appgroepen of in een gesprek op een verjaardag. De data wijst de richting, je klanten vertellen de rest.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat verandert AI aan de customer journey?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Steeds meer journeys beginnen tegenwoordig niet in Google, maar in een chatgesprek. Mensen vragen ChatGPT of Perplexity welk boekhoudpakket past bij een zzp'er, of wat een logeerbed mag kosten. Het antwoord van het AI-model stuurt vervolgens de hele verdere route.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Voor jou als ondernemer betekent dit een nieuw touchpoint helemaal aan het begin van de journey. Word je daar niet genoemd, dan begint de overweging zonder jou. <Link to="/geo" className="text-accent hover:underline">GEO</Link> draait precies hierom: jouw content zo inrichten dat AI-modellen je citeren bij relevante vragen.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De journey zelf verdwijnt niet. Mensen blijven vergelijken, twijfelen en bewijs zoeken voordat ze kopen. Alleen het startpunt verschuift, en wie daar vroeg bij is heeft een voorsprong op concurrenten die nog alleen op de klassieke zoekresultaten leunen.
                        </p>

                        <hr className="my-16 border-primary/10" />

                        <h2 className="text-3xl mb-8">Veelgestelde vragen over de customer journey</h2>

                        <div className="space-y-6 not-prose">
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat is een customer journey?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    De customer journey is de complete route die iemand aflegt van het eerste contact met jouw merk tot de aankoop en wat daarna komt. Elke stap waarin iemand jouw bedrijf tegenkomt hoort erbij: een advertentie, een blog, een review, de website en de service na aankoop.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Welke fases heeft een customer journey?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    De meeste modellen gebruiken vier fases: bewustwording (iemand ontdekt dat jouw oplossing bestaat), overweging (iemand vergelijkt opties), beslissing (iemand kiest en koopt) en loyaliteit (iemand komt terug en beveelt je aan). De namen verschillen per model, het idee blijft gelijk.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Waarom is de customer journey belangrijk voor marketing?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Omdat iemand in elke fase iets anders nodig heeft. Wie net ontdekt dat een oplossing bestaat, is niet klaar voor een koopknop. Wie al vergelijkt, heeft niets aan een algemene kennismakingsvideo. Stem je je boodschap af op de fase, dan stijgt het rendement van elk kanaal.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoe breng je een customer journey in kaart?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Begin bij je klanten: vraag hoe ze je gevonden hebben en wat ze deden voor de aankoop. Combineer dat met data uit Google Analytics, zoals via welke kanalen bezoekers binnenkomen en waar ze afhaken. Teken vervolgens per fase de contactmomenten uit en zoek de gaten.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoe lang duurt een customer journey gemiddeld?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Dat verschilt enorm per product. Een pizza bestel je binnen vijf minuten, een nieuwe keuken of zakelijke software kost weken tot maanden aan oriëntatie. Hoe hoger het bedrag en het risico van de aankoop, hoe langer de journey en hoe meer contactmomenten er nodig zijn.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Verandert AI de customer journey?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Ja. Steeds meer mensen beginnen hun oriëntatie niet in Google maar in een AI-chatbot zoals ChatGPT of Perplexity. Het advies dat zo'n model geeft, stuurt de rest van de journey. Daarom wordt GEO belangrijker: zorgen dat AI-modellen jouw bedrijf noemen als de vraag relevant is.
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
                    <h2 className="relative z-10 font-drama italic text-background text-3xl sm:text-4xl md:text-5xl mb-6">Weten waar jouw klanten afhaken?</h2>
                    <p className="relative z-10 font-sans text-background/70 text-lg mb-10 max-w-xl mx-auto">
                        We brengen jouw customer journey in kaart en laten zien waar de omzet weglekt. Plan een gratis gesprek.
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
