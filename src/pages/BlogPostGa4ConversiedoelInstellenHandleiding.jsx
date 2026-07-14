import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ChevronRight, User } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function BlogPostGa4ConversiedoelInstellenHandleiding() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen selection:bg-accent/30 selection:text-dark flex flex-col bg-background">
            <Helmet>
                <title>Hoe stel je een GA4 conversiedoel in? | Empowers</title>
                <meta name="description" content="Een GA4 conversiedoel instellen doe je door een gebeurtenis te markeren als belangrijke gebeurtenis. Lees hoe je dat stap voor stap regelt in GA4." />
                <link rel="canonical" href="https://www.empowers.nl/blogs/tracking/ga4-conversiedoel-instellen-handleiding" />
                <meta property="og:title" content="Hoe stel je een GA4 conversiedoel in? | Empowers" />
                <meta property="og:description" content="Een GA4 conversiedoel instellen doe je door een gebeurtenis te markeren als belangrijke gebeurtenis. Lees hoe je dat stap voor stap regelt in GA4." />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://www.empowers.nl/blogs/tracking/ga4-conversiedoel-instellen-handleiding" />
                <meta property="og:image" content="https://www.empowers.nl/images/blogs/ga4-conversiedoel-instellen-handleiding.jpg" />
                <meta property="article:published_time" content="2026-07-13T10:00:00+02:00" />
                <meta property="article:author" content="Empowers" />
                <meta property="article:section" content="Tracking" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Hoe stel je een GA4 conversiedoel in? | Empowers" />
                <meta name="twitter:description" content="Een GA4 conversiedoel instellen doe je door een gebeurtenis te markeren als belangrijke gebeurtenis. Lees hoe je dat stap voor stap regelt in GA4." />
                <script type="application/ld+json">{JSON.stringify({
                    "@context": "https://schema.org",
                    "@graph": [
                        {
                            "@type": "Article",
                            "headline": "Hoe stel je een GA4 conversiedoel in?",
                            "image": "https://www.empowers.nl/images/blogs/ga4-conversiedoel-instellen-handleiding.jpg",
                            "description": "Een GA4 conversiedoel instellen doe je door een gebeurtenis te markeren als belangrijke gebeurtenis. Lees hoe je dat stap voor stap regelt in GA4.",
                            "author": { "@type": "Organization", "name": "Empowers" },
                            "publisher": { "@type": "Organization", "name": "Empowers", "url": "https://www.empowers.nl" },
                            "datePublished": "2026-07-13T10:00:00+02:00",
                            "dateModified": "2026-07-13T10:00:00+02:00",
                            "url": "https://www.empowers.nl/blogs/tracking/ga4-conversiedoel-instellen-handleiding"
                        },
                        {
                            "@type": "BreadcrumbList",
                            "itemListElement": [
                                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.empowers.nl" },
                                { "@type": "ListItem", "position": 2, "name": "Nieuws", "item": "https://www.empowers.nl/nieuws" },
                                { "@type": "ListItem", "position": 3, "name": "Tracking", "item": "https://www.empowers.nl/blogs/tracking" },
                                { "@type": "ListItem", "position": 4, "name": "Hoe stel je een GA4 conversiedoel in?", "item": "https://www.empowers.nl/blogs/tracking/ga4-conversiedoel-instellen-handleiding" }
                            ]
                        },
                        {
                            "@type": "FAQPage",
                            "mainEntity": [
                                { "@type": "Question", "name": "Wat is het verschil tussen een conversie en een belangrijke gebeurtenis in GA4?", "acceptedAnswer": { "@type": "Answer", "text": "In GA4 heet een conversie sinds 2024 een belangrijke gebeurtenis. De term conversie gebruikt Google nu alleen nog voor acties die je naar Google Ads doorstuurt. In de praktijk bedoelen de meeste ondernemers er hetzelfde mee: een bezoeker die iets waardevols doet op je website." } },
                                { "@type": "Question", "name": "Hoeveel conversiedoelen kun je instellen in GA4?", "acceptedAnswer": { "@type": "Answer", "text": "Een standaard GA4-property biedt ruimte voor 30 belangrijke gebeurtenissen. Dat klinkt veel, maar in de praktijk heb je er meestal maar een paar nodig. Kies de acties die direct aan omzet raken, zoals een aankoop of een verstuurd contactformulier." } },
                                { "@type": "Question", "name": "Waarom zie ik mijn conversies niet terug in GA4?", "acceptedAnswer": { "@type": "Answer", "text": "De meest voorkomende oorzaak is een verkeerd gespelde gebeurtenisnaam. GA4 is hoofdlettergevoelig: Contact_Form is een andere gebeurtenis dan contact_form. Daarnaast lopen de standaardrapporten vertraging op. Check daarom eerst het Realtime rapport voordat je gaat zoeken naar fouten." } },
                                { "@type": "Question", "name": "Kun je een conversiedoel instellen zonder Google Tag Manager?", "acceptedAnswer": { "@type": "Answer", "text": "Ja. Voor veel doelen heb je genoeg aan GA4 zelf. Via de functie Gebeurtenis maken bouw je een nieuwe gebeurtenis op basis van een bestaande, bijvoorbeeld een paginaweergave van je bedankpagina. Tag Manager wordt pas nodig bij complexere metingen zoals klikken op specifieke knoppen." } },
                                { "@type": "Question", "name": "Telt GA4 een conversie per sessie of per gebeurtenis?", "acceptedAnswer": { "@type": "Answer", "text": "Standaard telt GA4 elke keer dat de gebeurtenis plaatsvindt. Vult iemand twee keer je formulier in binnen een bezoek, dan tel je twee conversies. Je kunt dit per belangrijke gebeurtenis aanpassen naar een telling van maximaal een keer per sessie." } },
                                { "@type": "Question", "name": "Moet ik mijn oude doelen uit Universal Analytics opnieuw instellen?", "acceptedAnswer": { "@type": "Answer", "text": "Ja. Universal Analytics is gestopt en de doelen daaruit zijn niet meegekomen naar GA4. GA4 werkt bovendien anders: er bestaan geen losse doeltypen meer, alles is een gebeurtenis. Je stelt elke conversie dus opnieuw in als belangrijke gebeurtenis." } }
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
                        <Link to="/blogs/tracking" className="hover:text-accent transition-colors">Tracking</Link>
                        <ChevronRight className="w-3 h-3" />
                        <span className="text-primary truncate">GA4 conversiedoel instellen</span>
                    </nav>

                    {/* Header */}
                    <header className="mb-16">
                        <div className="inline-block px-3 py-1 bg-accent/10 text-accent font-mono text-xs uppercase tracking-widest rounded-full mb-6">
                            Tracking
                        </div>
                        <h1 className="font-sans font-bold text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight mb-8">
                            Hoe stel je een GA4 conversiedoel in?
                        </h1>

                        <div className="flex flex-wrap items-center gap-6 text-sm font-sans text-primary/60 border-y border-primary/10 py-6">
                            <div className="flex items-center gap-2">
                                <User className="w-4 h-4" />
                                <span>Empowers Redactie</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>13 juli 2026</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>7 minuten leestijd</span>
                            </div>
                        </div>
                    </header>

                    {/* Featured Image */}
                    <figure className="w-full h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden mb-16 relative bg-primary">
                        <div className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-overlay" style={{backgroundImage: "url('/images/blogs/ga4-conversiedoel-instellen-handleiding.jpg')"}}></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </figure>

                    {/* Content */}
                    <div className="prose prose-lg prose-headings:font-sans prose-headings:font-bold prose-headings:text-primary prose-p:font-sans prose-p:text-primary/80 prose-p:leading-relaxed max-w-none">
                        <p className="text-xl md:text-2xl font-medium leading-relaxed mb-10 text-primary">
                            Een conversiedoel instellen in GA4 doe je door een gebeurtenis te markeren als belangrijke gebeurtenis. Dat regel je in het beheerscherm met een enkel schuifje. Bestaat de gebeurtenis nog niet, dan maak je die eerst aan. Binnen een dag zie je de eerste conversies in je rapporten staan.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat is een conversiedoel in GA4?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een conversiedoel is een actie op je website die geld waard is. Denk aan een verstuurd contactformulier of een afgeronde bestelling. Zonder die meting weet je niet welke campagnes klanten opleveren en welke alleen bezoekers.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De term doel komt nog uit Universal Analytics, de vorige versie van Google Analytics. GA4 werkt anders. Alles wat op je website gebeurt is een gebeurtenis, en van elke gebeurtenis kun je een conversie maken.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Sinds 2024 noemt Google een conversie in GA4 een belangrijke gebeurtenis. Het woord conversie is gereserveerd voor Google Ads. Verwarrend, want het gaat om hetzelfde principe. In dit artikel gebruiken we beide termen door elkaar, precies zoals de meeste ondernemers dat doen.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Welke gebeurtenis kies je als conversiedoel?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Begin bij de vraag: welke actie levert mijn bedrijf geld op? Voor een webshop is dat de aankoop. Voor een dienstverlener het verstuurde contactformulier of de klik op het telefoonnummer.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Maak niet alles een conversie. Wie tien doelen instelt, van scrollen tot nieuwsbriefinschrijving, ziet door de bomen het bos niet meer. Je rapporten tonen dan indrukwekkende aantallen die niets zeggen over omzet.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Kies daarom een of twee hoofddoelen die direct aan omzet raken. Wil je daarnaast tussenstappen volgen, zoals het starten van een checkout? Meet die gewoon als gebeurtenis, zonder er een conversie van te maken.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe markeer je een gebeurtenis als belangrijke gebeurtenis?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Staat de gebeurtenis al in je account, dan ben je er bijna. Open GA4 en ga naar Beheer, linksonder via het tandwiel. Kies onder Gegevensweergave voor Gebeurtenissen.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Je ziet nu een lijst met alle gebeurtenissen die GA4 de afgelopen tijd heeft gemeten. Achter elke naam staat een schuifje met het label Markeren als belangrijke gebeurtenis. Zet dat schuifje aan en je bent klaar.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Staat je gebeurtenis nog niet in de lijst omdat hij nog niet is voorgekomen? Ga dan naar Belangrijke gebeurtenissen in hetzelfde menu en klik op de knop voor een nieuwe belangrijke gebeurtenis. Typ daar de exacte naam van de gebeurtenis. Let op hoofdletters: GA4 ziet contact_form en Contact_Form als twee verschillende gebeurtenissen.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat doe je als de gebeurtenis nog niet bestaat?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            GA4 meet standaard al veel. Paginaweergaven, scrolls, uitgaande klikken en bestandsdownloads komen automatisch binnen via verbeterde metingen. Voor een conversiedoel heb je alleen vaak iets specifiekers nodig.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De eenvoudigste route loopt via je bedankpagina. Komt een bezoeker na het versturen van je formulier op een aparte pagina terecht, dan bouw je daar zonder code een gebeurtenis op. Ga naar Beheer, kies Gebeurtenissen en klik op Gebeurtenis maken. Stel als voorwaarde in dat de paginalocatie jouw bedankpagina bevat, bijvoorbeeld /bedankt.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Geen bedankpagina, of wil je klikken op een knop meten? Dan werk je met Google Tag Manager. Hoe je daarmee start lees je in onze <Link to="/blogs/tracking/google-tag-manager-beginners" className="text-accent hover:underline">handleiding Google Tag Manager voor beginners</Link>. Met een trigger en een GA4-tag stuur je elke gewenste actie als gebeurtenis naar je account.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe koppel je je GA4-conversies aan Google Ads?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Adverteer je via Google Ads, dan wordt je conversiedoel pas echt waardevol. Google Ads gebruikt die data om je campagnes te sturen op mensen die daadwerkelijk converteren, in plaats van op klikkers.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Koppel eerst beide accounts via Beheer en Productkoppelingen in GA4. Daarna importeer je in Google Ads je belangrijke gebeurtenissen als conversies, via Doelen en Conversies. Vanaf dat moment kan het systeem bieden op wat jou geld oplevert.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Wil je een stap verder gaan en elke conversie een eurobedrag meegeven? Lees dan ons artikel over <Link to="/blogs/tracking/conversiewaarden-instellen-google-ads" className="text-accent hover:underline">conversiewaarden instellen in Google Ads</Link>. Zo stuur je niet op aantallen, maar op omzet.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe controleer je of je conversiedoel werkt?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Test het altijd zelf. Vul je eigen formulier in of doe een testbestelling en open daarna het Realtime rapport in GA4. Daar zie je binnen enkele minuten of de gebeurtenis binnenkomt en of hij als belangrijke gebeurtenis wordt geteld.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Geduld is daarna wel nodig. De standaardrapporten lopen achter, soms tot een dag. Dat je conversie vandaag nog niet in het overzicht staat, betekent dus niet dat er iets kapot is.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een veelgemaakte fout die we bij nieuwe klanten tegenkomen: het schuifje staat aan, maar de gebeurtenisnaam is nét anders gespeld dan wat de website daadwerkelijk verstuurt. Het resultaat is een conversiedoel dat maandenlang op nul staat terwijl de aanvragen gewoon binnenstromen. Check dus altijd de exacte naam in je gebeurtenissenlijst.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Waar zie je je conversies terug in de rapporten?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Open het rapport Verkeersacquisitie en je ziet per kanaal hoeveel belangrijke gebeurtenissen er binnenkwamen. Zo vergelijk je in een oogopslag wat je advertenties opleveren tegenover je organische bezoekers.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Wil je dieper graven, bijvoorbeeld per landingspagina of per campagne? Bouw dan een eigen rapport dat precies toont wat jij wilt weten. Hoe je dat aanpakt lees je in ons artikel over <Link to="/blogs/tracking/maak-aangepast-ga4-rapport-business" className="text-accent hover:underline">een aangepast GA4-rapport maken voor jouw business</Link>.
                        </p>

                        <p className="text-primary/80 leading-relaxed mb-6">
                            Met een goed ingesteld conversiedoel weet je precies welke marketing geld oplevert en welke niet. Twijfel je of jouw meting klopt, of wil je meer halen uit <Link to="/google-ads" className="text-accent hover:underline">Google Ads</Link>? Plan een gratis gesprek via <Link to="/contact" className="text-accent hover:underline">empowers.nl/contact</Link>.
                        </p>

                        <hr className="my-16 border-primary/10" />

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Veelgestelde vragen over GA4 conversiedoelen</h2>

                        <div className="space-y-6 not-prose">
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat is het verschil tussen een conversie en een belangrijke gebeurtenis in GA4?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    In GA4 heet een conversie sinds 2024 een belangrijke gebeurtenis. De term conversie gebruikt Google nu alleen nog voor acties die je naar Google Ads doorstuurt. In de praktijk bedoelen de meeste ondernemers er hetzelfde mee: een bezoeker die iets waardevols doet op je website.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoeveel conversiedoelen kun je instellen in GA4?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Een standaard GA4-property biedt ruimte voor 30 belangrijke gebeurtenissen. Dat klinkt veel, maar in de praktijk heb je er meestal maar een paar nodig. Kies de acties die direct aan omzet raken, zoals een aankoop of een verstuurd contactformulier.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Waarom zie ik mijn conversies niet terug in GA4?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    De meest voorkomende oorzaak is een verkeerd gespelde gebeurtenisnaam. GA4 is hoofdlettergevoelig: Contact_Form is een andere gebeurtenis dan contact_form. Daarnaast lopen de standaardrapporten vertraging op. Check daarom eerst het Realtime rapport voordat je gaat zoeken naar fouten.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Kun je een conversiedoel instellen zonder Google Tag Manager?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Ja. Voor veel doelen heb je genoeg aan GA4 zelf. Via de functie Gebeurtenis maken bouw je een nieuwe gebeurtenis op basis van een bestaande, bijvoorbeeld een paginaweergave van je bedankpagina. Tag Manager wordt pas nodig bij complexere metingen zoals klikken op specifieke knoppen.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Telt GA4 een conversie per sessie of per gebeurtenis?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Standaard telt GA4 elke keer dat de gebeurtenis plaatsvindt. Vult iemand twee keer je formulier in binnen een bezoek, dan tel je twee conversies. Je kunt dit per belangrijke gebeurtenis aanpassen naar een telling van maximaal een keer per sessie.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Moet ik mijn oude doelen uit Universal Analytics opnieuw instellen?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Ja. Universal Analytics is gestopt en de doelen daaruit zijn niet meegekomen naar GA4. GA4 werkt bovendien anders: er bestaan geen losse doeltypen meer, alles is een gebeurtenis. Je stelt elke conversie dus opnieuw in als belangrijke gebeurtenis.
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
                    <h2 className="relative z-10 font-drama italic text-background text-3xl sm:text-4xl md:text-5xl mb-6">Weten welke campagnes echt klanten opleveren?</h2>
                    <p className="relative z-10 font-sans text-background/70 text-lg mb-10 max-w-xl mx-auto">
                        Wij zetten je conversiemeting waterdicht op, zodat elke euro marketingbudget meetbaar bijdraagt aan je omzet.
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
