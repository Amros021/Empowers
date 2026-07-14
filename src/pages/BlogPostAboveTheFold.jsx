import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ChevronRight, User } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function BlogPostAboveTheFold() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen selection:bg-accent/30 selection:text-dark flex flex-col bg-background">
            <Helmet>
                <title>Above the fold: waarom de eerste seconden op jouw pagina alles bepalen | Empowers</title>
                <meta name="description" content="Above the fold is het deel van je pagina dat bezoekers zien zonder te scrollen. Het bepaalt of ze blijven of vertrekken. Lees hoe je het goed inricht voor meer conversies." />
                <link rel="canonical" href="https://www.empowers.nl/blogs/strategie/above-the-fold-waarom-eerste" />
                <meta property="og:title" content="Above the fold: waarom de eerste seconden op jouw pagina alles bepalen" />
                <meta property="og:description" content="Het bovenste deel van je pagina bepaalt of bezoekers blijven of vertrekken. Zo richt je het in." />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://www.empowers.nl/blogs/strategie/above-the-fold-waarom-eerste" />
                <meta property="og:image" content="https://www.empowers.nl/images/blogs/above-the-fold-waarom-eerste.jpg" />
                <meta property="article:published_time" content="2026-04-16T12:00:00+02:00" />
                <meta property="article:author" content="Empowers" />
                <meta property="article:section" content="Strategie" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Above the fold: waarom de eerste seconden alles bepalen" />
                <meta name="twitter:description" content="Zo richt je het bovenste deel van je pagina in voor maximale impact en meer conversies." />

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Article",
                        "headline": "Above the fold: waarom de eerste seconden op jouw pagina alles bepalen",
                        "description": "Above the fold is het deel van je pagina dat bezoekers zien zonder te scrollen. Het bepaalt of ze blijven of vertrekken. Lees hoe je het goed inricht voor meer conversies.",
                        "image": "https://www.empowers.nl/images/blogs/above-the-fold-waarom-eerste.jpg",
                        "datePublished": "2026-04-16T12:00:00+02:00",
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
                                    "name": "Wat is above the fold?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Above the fold is het deel van een webpagina dat zichtbaar is zonder te scrollen. De term komt uit de krantenwereld: het bovenste deel van de voorpagina, boven de vouw, bevatte altijd het belangrijkste nieuws. Op websites werkt dat principe hetzelfde: wat bezoekers als eerste zien bepaalt of ze blijven of vertrekken."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Waarom is above the fold zo belangrijk voor conversie?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Bezoekers beslissen binnen 3 tot 5 seconden of een pagina relevant is. Dat oordeel baseren ze op wat ze zien zonder te scrollen. Als je waardepropositie, een relevante visual en een duidelijke call-to-action boven de fold staan, blijven bezoekers langer en converteren ze vaker."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Moet de CTA altijd above the fold staan?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Niet per se. Voor eenvoudige acties zoals een gratis download of een nieuwsbriefaanmelding werkt een CTA above the fold goed. Voor duurdere diensten of complexe producten werkt het beter om eerst waarde en vertrouwen op te bouwen en de primaire CTA lager te plaatsen. Wel moet boven de fold duidelijk zijn wat de bezoeker kan verwachten."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Hoe groot is above the fold op mobiel?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Op mobiel is above the fold kleiner dan op desktop, gemiddeld 600 tot 700 pixels hoog tegenover 800 tot 900 pixels op desktop. Dat betekent dat je nog scherper moet kiezen wat je toont. Een kop, een korte waardepropositie en een CTA zijn vaak alles wat past. Grote afbeeldingen of video's die het hele scherm vullen duwen je boodschap naar beneden."
                                    }
                                }
                            ]
                        },
                        "breadcrumb": {
                            "@type": "BreadcrumbList",
                            "itemListElement": [
                                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.empowers.nl" },
                                { "@type": "ListItem", "position": 2, "name": "Strategie", "item": "https://www.empowers.nl/blogs/strategie" },
                                { "@type": "ListItem", "position": 3, "name": "Above the fold" }
                            ]
                        }
                    })}
                </script>
            </Helmet>

            <Navbar />

            <article className="w-full pt-40 pb-24 px-6 relative">
                <div className="max-w-4xl mx-auto">

                    {/* Breadcrumbs */}
                    <nav className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-primary/50 mb-12">
                        <Link to="/" className="hover:text-accent transition-colors">Home</Link>
                        <ChevronRight size={12} />
                        <Link to="/blogs/strategie" className="hover:text-accent transition-colors">Strategie</Link>
                        <ChevronRight size={12} />
                        <span className="text-primary/30">Above the fold</span>
                    </nav>

                    {/* Header */}
                    <header className="mb-16">
                        <div className="inline-block px-3 py-1 bg-accent/10 text-accent font-mono text-xs uppercase tracking-widest rounded-full mb-6">
                            Strategie
                        </div>
                        <h1 className="font-sans font-bold text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight mb-8">
                            Above the fold: waarom de eerste seconden op jouw pagina alles bepalen
                        </h1>
                        <div className="flex flex-wrap items-center gap-6 text-sm font-sans text-primary/60 border-y border-primary/10 py-6">
                            <span className="flex items-center gap-2"><User size={14} />Empowers Redactie</span>
                            <span className="flex items-center gap-2"><Calendar size={14} />16 apr 2026</span>
                            <span className="flex items-center gap-2"><Clock size={14} />8 min leestijd</span>
                        </div>
                    </header>

                    {/* Featured Image */}
                    <figure className="w-full h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden mb-16 relative bg-primary">
                        <div className="absolute inset-0 bg-[url('/images/blogs/above-the-fold-waarom-eerste.jpg')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </figure>

                    {/* Content */}
                    <div className="prose prose-lg max-w-none">

                        <p className="text-xl leading-relaxed text-primary/80 font-medium mb-6">
                            Jouw bezoeker landt op je pagina. Binnen drie seconden besluit hij: blijven of wegklikken. Wat hij in die drie seconden ziet — zonder te scrollen — bepaalt alles. Dat zichtbare deel heet "above the fold." En de meeste websites verspillen het aan vage teksten, enorme afbeeldingen of een slider die niemand leest. In dit artikel lees je wat above the fold precies is, waarom het jouw conversieratio maakt of breekt, en hoe je het goed inricht.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat is above the fold?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De term komt uit de krantenwereld. Kranten lagen gevouwen op de toonbank. Alles boven de vouw — de fold — moest de lezer overtuigen om de krant te pakken. De grootste koppen, het meest opvallende nieuws, de sterkste foto: dat stond boven de vouw.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Op websites werkt hetzelfde principe. Above the fold is het deel van de pagina dat zichtbaar is zonder te scrollen. Op een desktop is dat gemiddeld de bovenste 800 tot 900 pixels. Op een telefoon 600 tot 700 pixels. Wat daarin staat, bepaalt of de bezoeker verder leest of vertrekt.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Onderzoek toont aan dat bezoekers 57% van hun tijd besteden aan content boven de fold en dat dat percentage verder daalt naarmate ze naar beneden scrollen. De eerste indruk is niet zomaar belangrijk. Het is bijna alles wat telt.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Waarom de meeste websites above the fold verspillen</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Open tien willekeurige MKB-websites en je ziet hetzelfde patroon. Een grote hero-afbeelding die het volledige scherm vult. Daaroverheen een vage tekst als "Welkom bij ons bedrijf" of "Samen naar succes." Geen specifieke waardepropositie. Geen reden om te blijven. Geen duidelijke volgende stap.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Die aanpak is begrijpelijk — het ziet er mooi uit. Maar mooi is niet genoeg. Een bezoeker die vanuit een Google-advertentie op je pagina landt, heeft net 3 tot 10 euro aan klikkosten gegenereerd. Die persoon moet binnen seconden weten: ben ik op de juiste plek? Kan dit bedrijf mij helpen? Wat moet ik nu doen?
                        </p>

                        <h3 className="font-semibold text-primary text-xl mt-10 mb-4">De drie meest gemaakte fouten</h3>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De eerste fout: een fullscreen afbeelding of video zonder tekst. Het ziet er indrukwekkend uit op een presentatie, maar bezoekers scannen tekst, geen sfeerbeelden. Als je waardepropositie pas zichtbaar wordt na scrollen, heb je al een deel van je bezoekers verloren.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De tweede fout: een slider met drie tot vijf wisselende boodschappen. Uit onderzoek blijkt dat minder dan 1% van de bezoekers voorbij de eerste slide klikt. De rest van je slides zijn onzichtbaar. Erger nog: de wisselende content leidt af van je kernboodschap.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De derde fout: geen call-to-action boven de fold. De bezoeker weet misschien wat je doet, maar niet wat de volgende stap is. Moet hij bellen? Scrollen? Een formulier invullen? Zonder duidelijke richting blijft de bezoeker passief — en passieve bezoekers vertrekken.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">De vijf elementen van een sterke above the fold</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een effectieve above the fold bevat vijf elementen die samen de bezoeker overtuigen om te blijven. Niet elk element hoeft groot te zijn. Het gaat om de combinatie.
                        </p>

                        <h3 className="font-semibold text-primary text-xl mt-10 mb-4">1. Een kop die de waarde benoemt</h3>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Niet wat je doet, maar wat het de bezoeker oplevert. "Meer klanten via Google Ads" is sterker dan "Google Ads bureau." "Bespaar 20 uur per maand op je boekhouding" is sterker dan "Boekhouddiensten voor MKB." De kop beantwoordt de vraag: waarom zou ik hier blijven?
                        </p>

                        <h3 className="font-semibold text-primary text-xl mt-10 mb-4">2. Een subkop die verduidelijkt</h3>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De kop trekt aandacht, de subkop geeft context. Wie ben je, voor wie werk je, en hoe werkt het? Eén tot twee zinnen zijn genoeg. "Wij beheren Google Ads campagnes voor MKB-bedrijven in heel Nederland. Gemiddeld 40% meer conversies in het eerste kwartaal."
                        </p>

                        <h3 className="font-semibold text-primary text-xl mt-10 mb-4">3. Een relevante visual</h3>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een afbeelding die aansluit bij je boodschap, niet een generieke stockfoto. Een screenshot van een dashboard met resultaten, een foto van je team aan het werk, of een productafbeelding als je iets tastbaars verkoopt. De visual ondersteunt je tekst, hij vervangt hem niet.
                        </p>

                        <h3 className="font-semibold text-primary text-xl mt-10 mb-4">4. Een primaire call-to-action</h3>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Eén duidelijke knop die de bezoeker vertelt wat de volgende stap is. "Plan een gesprek", "Vraag een offerte aan" of "Bekijk onze resultaten." Eén CTA, niet drie. Meerdere opties creëren keuzestress en verlagen de klikratio.
                        </p>

                        <h3 className="font-semibold text-primary text-xl mt-10 mb-4">5. Sociaal bewijs</h3>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een klein element dat vertrouwen wekt: sterren uit Google Reviews, logo's van bekende klanten, een kort citaat of een getal ("250+ tevreden klanten"). Het hoeft niet groot te zijn. Het moet er wel staan. Sociaal bewijs verlaagt de drempel om actie te ondernemen.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Above the fold op mobiel: andere regels</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Meer dan 60% van het webverkeer in Nederland komt van telefoons. Op een klein scherm is boven de fold minder ruimte — en dat verandert de regels. Je kunt niet alles tonen wat op desktop past. Keuzes maken is hier nog belangrijker.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Op mobiel past vaak alleen een kop, een korte subkop en een CTA-knop boven de fold. Dat is genoeg, als de kop sterk is. Vermijd grote hero-afbeeldingen die het hele scherm vullen zonder tekst. Test je pagina altijd op een echt telefoonscherm, niet alleen in een browser-emulator.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Let ook op laadtijd. Een zware afbeelding of video boven de fold vertraagt je pagina, vooral op mobiel. Dat kost je bezoekers (53% verlaat een pagina die langer dan 3 seconden laadt) én het schaadt je SEO-score. Gebruik gecomprimeerde afbeeldingen en lazy loading voor alles onder de fold.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Above the fold en je advertentiecampagnes</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Als je betaalt voor verkeer via Google Ads of Meta Ads, is above the fold letterlijk waar je geld landt. Een bezoeker die op je advertentie klikt, verwacht dat de pagina aansluit op wat hij net las. Dat heet message match en het begint boven de fold.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Adverteer je met "SEO bureau voor webshops"? Dan moet de kop op je landingspagina iets zeggen over SEO voor webshops. Niet "Welkom bij ons bureau." Niet "Full-service marketing." De bezoeker moet direct herkennen dat hij op de juiste plek is.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Slechte message match is een van de meest voorkomende redenen voor hoge bouncerates bij betaald verkeer. Je betaalt voor de klik, maar verliest de bezoeker in de eerste seconde. Dat is weggegooid geld. Meer over conversie verbeteren lees je in <Link to="/blogs/strategie/goede-conversieratio-benchmarks-per-branche" className="text-accent hover:underline">ons artikel over conversieratio benchmarks</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe test je of jouw above the fold werkt?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De eenvoudigste test: laat iemand die je bedrijf niet kent vijf seconden naar je pagina kijken. Sluit het scherm. Vraag: wat doet dit bedrijf? Voor wie? Wat kun je er doen? Als die persoon het niet kan beantwoorden, is je above the fold niet duidelijk genoeg.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Kijk daarnaast naar je data. Google Analytics toont je bouncepercentage per pagina en per apparaat. Een bouncepercentage boven de 60% op een landingspagina wijst vaak op een probleem boven de fold. Vergelijk desktop en mobiel apart — mobiel heeft vaak hogere bouncerates en daar zit meestal de grootste winst.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Gebruik A/B-testen om varianten te vergelijken. Test een andere kop, een andere CTA-tekst, of het wel of niet tonen van sociaal bewijs. Kleine veranderingen boven de fold kunnen grote impact hebben op je conversieratio. Meer over testen lees je in <Link to="/blogs/strategie/a-b-testen-beginners-verhoog" className="text-accent hover:underline">ons artikel over A/B testen voor beginners</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Praktijkvoorbeelden: wat werkt en wat niet</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een installatiebedrijf had een fullscreen foto van een badkamer als hero. Mooie foto, maar geen tekst, geen CTA, geen reden om te blijven. Bouncepercentage: 72%. Na een herontwerp met een duidelijke kop ("Badkamerrenovatie in 5 werkdagen — vast tarief"), een CTA ("Vraag een offerte aan") en drie Google Review-sterren daalde het bouncepercentage naar 41% en steeg het aantal offerteaanvragen met 85%.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een SaaS-bedrijf gebruikte een animatie die 4 seconden duurde voordat de kop zichtbaar werd. Op desktop zag het er spectaculair uit. Op mobiel laadde het langzaam en was de kop pas zichtbaar na scrollen. Na het vervangen van de animatie door een statische kop met een demo-CTA steeg de trial-aanmelding met 23%.
                        </p>

                    </div>

                    {/* FAQ */}
                    <section className="mt-16 pt-12 border-t border-primary/10">
                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Veelgestelde vragen over above the fold</h2>
                        <div className="space-y-6 not-prose">
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat is above the fold?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Above the fold is het deel van een webpagina dat zichtbaar is zonder te scrollen. De term komt uit de krantenwereld. Op websites bepaalt dit zichtbare deel of bezoekers blijven of vertrekken, vaak binnen 3 tot 5 seconden.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Waarom is above the fold zo belangrijk voor conversie?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Bezoekers beslissen razendsnel of een pagina relevant is. Als je waardepropositie, een relevante visual en een duidelijke call-to-action boven de fold staan, blijven bezoekers langer en converteren ze vaker. Onderzoek toont dat 57% van de tijd op een pagina wordt besteed aan content boven de fold.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Moet de CTA altijd above the fold staan?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Niet per se. Voor eenvoudige acties werkt een CTA boven de fold goed. Voor duurdere diensten of complexe producten is het beter om eerst vertrouwen op te bouwen. Maar boven de fold moet altijd duidelijk zijn wat de bezoeker kan verwachten.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoe groot is above the fold op mobiel?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Op mobiel is above the fold gemiddeld 600 tot 700 pixels hoog, tegenover 800 tot 900 pixels op desktop. Dat betekent dat je scherper moet kiezen: een sterke kop, korte subkop en een CTA-knop zijn vaak alles wat past.</p>
                            </div>
                        </div>
                    </section>

                    {/* Related */}
                    <section className="mt-16 pt-12 border-t border-primary/10">
                        <h3 className="text-xl font-bold text-primary mb-6">Lees ook</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <Link to="/blogs/strategie/landingspagina-schrijven-converteert" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Landingspagina die converteert</h3>
                                <p className="text-primary/60 text-sm">Zo schrijf je een landingspagina die bezoekers omzet in klanten.</p>
                            </Link>
                            <Link to="/blogs/strategie/a-b-testen-beginners-verhoog" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">A/B testen voor beginners</h3>
                                <p className="text-primary/60 text-sm">De snelste manier om meer conversies te halen uit hetzelfde verkeer.</p>
                            </Link>
                            <Link to="/blogs/strategie/goede-conversieratio-benchmarks-per-branche" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Conversieratio benchmarks</h3>
                                <p className="text-primary/60 text-sm">Wat is een goede conversieratio in jouw branche en hoe verbeter je die?</p>
                            </Link>
                        </div>
                    </section>

                </div>
            </article>

            {/* CTA */}
            <section className="w-full pb-32 px-6">
                <div className="max-w-4xl mx-auto bg-primary rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
                    <h2 className="relative z-10 font-drama italic text-background text-3xl sm:text-4xl md:text-5xl mb-6">
                        Wil je pagina's die bezoekers vasthouden?
                    </h2>
                    <p className="relative z-10 font-sans text-background/70 text-lg mb-10 max-w-xl mx-auto">
                        Wij analyseren je landingspagina's en bouwen ze om tot pagina's die presteren. Van eerste indruk tot conversie.
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
