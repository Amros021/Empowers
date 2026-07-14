import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ChevronRight, User } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function BlogPostConversiewaardenInstellenGoogleAds() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen selection:bg-accent/30 selection:text-dark flex flex-col bg-background">
            <Helmet>
                <title>Conversiewaarden instellen in Google Ads: zo doe je het goed | Empowers</title>
                <meta name="description" content="Conversiewaarden instellen in Google Ads doe je vast of dynamisch per conversie. Lees hoe je het regelt en welke waarde je aan leads en verkopen geeft." />
                <link rel="canonical" href="https://www.empowers.nl/blogs/tracking/conversiewaarden-instellen-google-ads" />
                <meta property="og:title" content="Conversiewaarden instellen in Google Ads: zo doe je het goed | Empowers" />
                <meta property="og:description" content="Conversiewaarden instellen in Google Ads doe je vast of dynamisch per conversie. Lees hoe je het regelt en welke waarde je aan leads en verkopen geeft." />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://www.empowers.nl/blogs/tracking/conversiewaarden-instellen-google-ads" />
                <meta property="og:image" content="https://www.empowers.nl/images/blogs/conversiewaarden-instellen-google-ads.jpg" />
                <meta property="article:published_time" content="2026-07-12T10:00:00+02:00" />
                <meta property="article:author" content="Empowers" />
                <meta property="article:section" content="Tracking" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Conversiewaarden instellen in Google Ads: zo doe je het goed | Empowers" />
                <meta name="twitter:description" content="Conversiewaarden instellen in Google Ads doe je vast of dynamisch per conversie. Lees hoe je het regelt en welke waarde je aan leads en verkopen geeft." />
                <script type="application/ld+json">{JSON.stringify({
                    "@context": "https://schema.org",
                    "@graph": [
                        {
                            "@type": "Article",
                            "headline": "Conversiewaarden instellen in Google Ads: zo doe je het goed",
                            "image": "https://www.empowers.nl/images/blogs/conversiewaarden-instellen-google-ads.jpg",
                            "description": "Conversiewaarden instellen in Google Ads doe je vast of dynamisch per conversie. Lees hoe je het regelt en welke waarde je aan leads en verkopen geeft.",
                            "author": { "@type": "Organization", "name": "Empowers" },
                            "publisher": { "@type": "Organization", "name": "Empowers", "url": "https://www.empowers.nl" },
                            "datePublished": "2026-07-12T10:00:00+02:00",
                            "dateModified": "2026-07-12T10:00:00+02:00",
                            "url": "https://www.empowers.nl/blogs/tracking/conversiewaarden-instellen-google-ads"
                        },
                        {
                            "@type": "BreadcrumbList",
                            "itemListElement": [
                                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.empowers.nl" },
                                { "@type": "ListItem", "position": 2, "name": "Nieuws", "item": "https://www.empowers.nl/nieuws" },
                                { "@type": "ListItem", "position": 3, "name": "Tracking", "item": "https://www.empowers.nl/blogs/tracking" },
                                { "@type": "ListItem", "position": 4, "name": "Conversiewaarden instellen in Google Ads: zo doe je het goed", "item": "https://www.empowers.nl/blogs/tracking/conversiewaarden-instellen-google-ads" }
                            ]
                        },
                        {
                            "@type": "FAQPage",
                            "mainEntity": [
                                { "@type": "Question", "name": "Waar stel je conversiewaarden in binnen Google Ads?", "acceptedAnswer": { "@type": "Answer", "text": "Ga naar Doelen en dan Conversies. Open de conversieactie die je wilt aanpassen en klik op Instellingen bewerken. Onder het kopje Waarde kies je tussen dezelfde waarde voor elke conversie, verschillende waarden per conversie of geen waarde." } },
                                { "@type": "Question", "name": "Wat is het verschil tussen een vaste en een dynamische conversiewaarde?", "acceptedAnswer": { "@type": "Answer", "text": "Een vaste waarde geeft elke conversie hetzelfde bedrag mee, bijvoorbeeld 150 euro per offerteaanvraag. Een dynamische waarde stuurt per conversie het echte bedrag mee, zoals de orderwaarde van een bestelling. Webshops kiezen vrijwel altijd dynamisch, leadbedrijven starten meestal met een vaste waarde." } },
                                { "@type": "Question", "name": "Welke conversiewaarde geef je aan een lead?", "acceptedAnswer": { "@type": "Answer", "text": "Reken terug vanaf je omzet. Vermenigvuldig de gemiddelde opbrengst van een klant met het percentage leads dat klant wordt. Wordt een op de vijf aanvragen een klant van gemiddeld 1.500 euro, dan is een lead 300 euro waard. Werk met een schatting en stel die later bij." } },
                                { "@type": "Question", "name": "Werkt bieden op conversiewaarde ook met weinig conversies?", "acceptedAnswer": { "@type": "Answer", "text": "Matig. Het algoritme leert van patronen in je data en heeft daar volume voor nodig. Haalt je campagne maar een handvol conversies per maand, dan blijf je beter bij een strategie als conversies maximaliseren totdat het volume groeit. De waarden alvast meesturen kan wel, dat bouwt historie op." } },
                                { "@type": "Question", "name": "Kan ik conversiewaarden uit GA4 importeren?", "acceptedAnswer": { "@type": "Answer", "text": "Ja. Koppel GA4 aan Google Ads en importeer de belangrijkste gebeurtenissen als conversies, inclusief de meegestuurde waarde. Houd er rekening mee dat GA4 anders meet dan de eigen Google Ads-tag. Voor bieden op waarde geeft de Google Ads-tag doorgaans het meest bruikbare signaal." } },
                                { "@type": "Question", "name": "Neem ik btw mee in mijn conversiewaarde?", "acceptedAnswer": { "@type": "Answer", "text": "Kies een lijn en houd die vast. De meeste adverteerders sturen de orderwaarde exclusief btw mee, omdat dat aansluit bij hun marge en hun ROAS-doel. Stuur je bedragen inclusief btw mee, verwerk dat dan ook in je doel-ROAS. Wisselen tussen beide maakt je data onbruikbaar." } }
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
                        <span className="text-primary truncate">Conversiewaarden instellen</span>
                    </nav>

                    {/* Header */}
                    <header className="mb-16">
                        <div className="inline-block px-3 py-1 bg-accent/10 text-accent font-mono text-xs uppercase tracking-widest rounded-full mb-6">
                            Tracking
                        </div>
                        <h1 className="font-sans font-bold text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight mb-8">
                            Conversiewaarden instellen in Google Ads: zo doe je het goed
                        </h1>

                        <div className="flex flex-wrap items-center gap-6 text-sm font-sans text-primary/60 border-y border-primary/10 py-6">
                            <div className="flex items-center gap-2">
                                <User className="w-4 h-4" />
                                <span>Empowers Redactie</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>12 juli 2026</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>8 minuten leestijd</span>
                            </div>
                        </div>
                    </header>

                    {/* Featured Image */}
                    <figure className="w-full h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden mb-16 relative bg-primary">
                        <div className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-overlay" style={{backgroundImage: "url('/images/blogs/conversiewaarden-instellen-google-ads.jpg')"}}></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </figure>

                    {/* Content */}
                    <div className="prose prose-lg prose-headings:font-sans prose-headings:font-bold prose-headings:text-primary prose-p:font-sans prose-p:text-primary/80 prose-p:leading-relaxed max-w-none">
                        <p className="text-xl md:text-2xl font-medium leading-relaxed mb-10 text-primary">
                            Conversiewaarden stel je in via Doelen en dan Conversies in Google Ads. Per conversieactie kies je een vaste waarde, een dynamische waarde per transactie of geen waarde. Webshops sturen de echte orderwaarde mee, leadbedrijven rekenen een bedrag per aanvraag uit. Zonder die waarden kan Google niet bieden op omzet.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat is een conversiewaarde in Google Ads?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een conversiewaarde is het bedrag dat een conversie voor jouw bedrijf oplevert. Google Ads telt standaard alleen aantallen: tien conversies deze week, acht vorige week. Dat zegt niets over wat die conversies waard waren.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Met conversiewaarden verandert dat. Een bestelling van 40 euro en een bestelling van 900 euro zijn dan niet langer allebei gewoon een conversie. Het systeem ziet het verschil en jij ook. Pas dan kun je rekenen met ROAS: de omzet die elke euro advertentiebudget oplevert.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Hoe je conversies zelf goed opzet lees je in ons artikel over <Link to="/blogs/tracking/marketing-tracking-conversies-meten" className="text-accent hover:underline">marketing tracking en conversies meten</Link>. Dit artikel gaat over de stap erna: elke conversie het juiste bedrag meegeven.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Waarom heeft Smart Bidding conversiewaarden nodig?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Biedstrategieën zoals conversiewaarde maximaliseren en doel-ROAS sturen op omzet in plaats van op aantallen. Het algoritme verhoogt biedingen voor zoekopdrachten die op waardevolle klanten wijzen en verlaagt ze voor klikkers die weinig opleveren. Dat werkt alleen als jij vertelt wat elke conversie waard is.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Stuur je geen waarden mee, dan behandelt Google elke conversie als gelijk. Het algoritme jaagt dan net zo hard op een aanvraag van een student die nooit klant wordt als op een offerteaanvraag van een bedrijf met een serieus budget. Je betaalt hetzelfde voor totaal verschillende uitkomsten.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            In accounts die wij overnemen staat de waarde opvallend vaak op nul of op de standaardinstelling. De campagnes draaien dan wel, maar sturen blind. Alleen al het meesturen van realistische waarden geeft het algoritme een beter kompas.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe stel je een vaste conversiewaarde in?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Ga in Google Ads naar Doelen en klik op Conversies. Open de conversieactie die je wilt aanpassen, bijvoorbeeld je contactformulier, en kies Instellingen bewerken. Onder het kopje Waarde zie je drie opties: dezelfde waarde voor elke conversie, verschillende waarden per conversie of geen waarde.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Voor een vaste waarde kies je de eerste optie en vul je een bedrag in. Sla op en klaar. Vanaf dat moment telt elke conversie van deze actie mee met dat bedrag in de kolom conversiewaarde.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een vaste waarde past bij conversies die telkens ongeveer hetzelfde opleveren. Denk aan een proefles, een adviesgesprek of een brochure-aanvraag. Het bedrag hoeft niet exact te kloppen. Het gaat erom dat de verhouding tussen je conversieacties klopt, zodat het algoritme weet welke actie zwaarder weegt.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe stuur je dynamische conversiewaarden mee als webshop?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Voor een webshop is een vaste waarde te grof. Een klant die voor 900 euro bestelt is meer waard dan een klant die voor 40 euro bestelt, en dat verschil wil je meegeven. Kies daarom in de conversieactie voor verschillende waarden per conversie.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De techniek erachter loopt meestal via Google Tag Manager. Je webshop zet de orderwaarde na een aankoop in de dataLayer, en de conversietag leest dat bedrag uit en stuurt het mee naar Google Ads. Platformen zoals Shopify en WooCommerce hebben hier kant-en-klare koppelingen of plugins voor, waardoor je zelden zelf hoeft te programmeren.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Controleer na het instellen altijd of de bedragen kloppen. Plaats een testbestelling en kijk in Google Ads of de juiste orderwaarde binnenkomt. Een tag die de waarde dubbel meet of het bedrag inclusief verzendkosten doorstuurt, zet je hele ROAS-berekening scheef.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Welke waarde geef je aan een lead?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Leadbedrijven vinden dit vaak lastig, want een aanvraag levert niet direct omzet op. Toch kun je de waarde prima terugrekenen. Je hebt twee cijfers nodig: hoeveel een nieuwe klant gemiddeld opbrengt en welk deel van je aanvragen klant wordt.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Stel: een nieuwe klant levert gemiddeld 1.500 euro op en een op de vijf aanvragen wordt klant. Dan is elke aanvraag 300 euro waard. Dat bedrag vul je in als vaste waarde voor je conversieactie. Heb je meerdere soorten conversies, geef ze dan verschillende bedragen. Een telefoontje dat vaker tot een opdracht leidt dan een formulier mag een hogere waarde krijgen.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Wees niet bang dat je schatting te grof is. Een redelijke schatting die de verhoudingen weergeeft verslaat altijd geen waarde. Je kunt de bedragen elk kwartaal bijstellen zodra je meer weet over welke leads echt klant worden.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Welke fouten zie je vaak bij conversiewaarden?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De grootste valkuil is dubbele telling. Wie zowel de Google Ads-tag als een geïmporteerde GA4-conversie als primaire actie laat meetellen, telt elke aankoop twee keer mee. Je ROAS lijkt dan prachtig terwijl de helft van je omzet lucht is. Zet één bron als primair en de rest op secundair.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een tweede fout is alles dezelfde waarde geven. Als je nieuwsbriefinschrijving evenveel waard is als je offerteaanvraag, stuurt het algoritme net zo hard op inschrijvingen. Die zijn makkelijker binnen te halen, dus daar gaat je budget heen. De verhouding tussen je waarden bepaalt waar Google op jaagt.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            En dan de retouren. Webshops met veel retourzendingen sturen brutowaarden mee die nooit gecorrigeerd worden. Verkoop je producten die vaak terugkomen, kijk dan naar conversieaanpassingen om je data achteraf te corrigeren, of reken een gemiddeld retourpercentage in je doel-ROAS mee.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wanneer stap je over op bieden op conversiewaarde?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Waarden meesturen kan vanaf dag één en is altijd verstandig. Er echt op bieden is een tweede stap. Strategieën zoals doel-ROAS hebben volume nodig om patronen te herkennen. Haalt je campagne maar een handvol conversies per maand, dan heeft het algoritme te weinig om van te leren en gaan resultaten schommelen.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een praktische route: start met conversies maximaliseren terwijl je waarden alvast meestuurt. Groeit je campagne naar enkele tientallen conversies per maand, schakel dan over naar conversiewaarde maximaliseren. Zodra je een stabiel beeld hebt van je werkelijke ROAS, leg je daar een doel-ROAS op. Hoe je campagnes daarna verder inricht lees je op onze pagina over <Link to="/google-ads" className="text-accent hover:underline">Google Ads beheer</Link>.
                        </p>

                        <p className="text-primary/80 leading-relaxed mb-6">
                            Conversiewaarden goed instellen is geen groot project, maar het bepaalt wel of je campagnes op omzet sturen of op losse tellingen. Twijfel je of jouw waarden kloppen, of wil je dat we je hele meetopzet een keer doorlichten? Plan een gesprek via <Link to="/contact" className="text-accent hover:underline">empowers.nl/contact</Link>.
                        </p>

                        <hr className="my-16 border-primary/10" />

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Veelgestelde vragen over conversiewaarden in Google Ads</h2>

                        <div className="space-y-6 not-prose">
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Waar stel je conversiewaarden in binnen Google Ads?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Ga naar Doelen en dan Conversies. Open de conversieactie die je wilt aanpassen en klik op Instellingen bewerken. Onder het kopje Waarde kies je tussen dezelfde waarde voor elke conversie, verschillende waarden per conversie of geen waarde.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat is het verschil tussen een vaste en een dynamische conversiewaarde?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Een vaste waarde geeft elke conversie hetzelfde bedrag mee, bijvoorbeeld 150 euro per offerteaanvraag. Een dynamische waarde stuurt per conversie het echte bedrag mee, zoals de orderwaarde van een bestelling. Webshops kiezen vrijwel altijd dynamisch, leadbedrijven starten meestal met een vaste waarde.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Welke conversiewaarde geef je aan een lead?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Reken terug vanaf je omzet. Vermenigvuldig de gemiddelde opbrengst van een klant met het percentage leads dat klant wordt. Wordt een op de vijf aanvragen een klant van gemiddeld 1.500 euro, dan is een lead 300 euro waard. Werk met een schatting en stel die later bij.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Werkt bieden op conversiewaarde ook met weinig conversies?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Matig. Het algoritme leert van patronen in je data en heeft daar volume voor nodig. Haalt je campagne maar een handvol conversies per maand, dan blijf je beter bij een strategie als conversies maximaliseren totdat het volume groeit. De waarden alvast meesturen kan wel, dat bouwt historie op.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Kan ik conversiewaarden uit GA4 importeren?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Ja. Koppel GA4 aan Google Ads en importeer de belangrijkste gebeurtenissen als conversies, inclusief de meegestuurde waarde. Houd er rekening mee dat GA4 anders meet dan de eigen Google Ads-tag. Voor bieden op waarde geeft de Google Ads-tag doorgaans het meest bruikbare signaal.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Neem ik btw mee in mijn conversiewaarde?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Kies een lijn en houd die vast. De meeste adverteerders sturen de orderwaarde exclusief btw mee, omdat dat aansluit bij hun marge en hun ROAS-doel. Stuur je bedragen inclusief btw mee, verwerk dat dan ook in je doel-ROAS. Wisselen tussen beide maakt je data onbruikbaar.
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
                    <h2 className="relative z-10 font-drama italic text-background text-3xl sm:text-4xl md:text-5xl mb-6">Weten wat elke klik echt oplevert?</h2>
                    <p className="relative z-10 font-sans text-background/70 text-lg mb-10 max-w-xl mx-auto">
                        Wij richten je conversiemeting zo in dat Google biedt op omzet in plaats van op losse klikken. Van meetplan tot biedstrategie.
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
