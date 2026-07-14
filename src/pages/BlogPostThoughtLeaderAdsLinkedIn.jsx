import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ChevronRight, User } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function BlogPostThoughtLeaderAdsLinkedIn() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen selection:bg-accent/30 selection:text-dark flex flex-col bg-background">
            <Helmet>
                <title>Thought Leader Ads op LinkedIn: zo vergroot je jouw autoriteit | Empowers</title>
                <meta name="description" content="Thought Leader Ads op LinkedIn laten je adverteren met content van medewerkers. Lees hoe je ze inzet, wat ze opleveren en welke fouten je wilt vermijden in 2026." />
                <link rel="canonical" href="https://www.empowers.nl/blogs/social-ads/thought-leader-ads-linkedin-vergroot" />
                <meta property="og:title" content="Thought Leader Ads op LinkedIn: vergroot jouw autoriteit" />
                <meta property="og:description" content="Zo zet je Thought Leader Ads op LinkedIn in om met menselijke stem meer leads en vertrouwen te winnen." />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://www.empowers.nl/blogs/social-ads/thought-leader-ads-linkedin-vergroot" />
                <meta property="og:image" content="https://www.empowers.nl/images/blogs/thought-leader-ads-linkedin-vergroot.jpg" />
                <meta property="article:published_time" content="2026-04-19T13:00:00+02:00" />
                <meta property="article:author" content="Empowers" />
                <meta property="article:section" content="Social Ads" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Thought Leader Ads op LinkedIn in 2026" />
                <meta name="twitter:description" content="Hoe Thought Leader Ads werken en hoe je ze inzet zonder te klinken als een commercial." />

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Article",
                        "headline": "Thought Leader Ads op LinkedIn: zo vergroot je jouw autoriteit",
                        "description": "Thought Leader Ads op LinkedIn laten je adverteren met content van medewerkers. Lees hoe je ze inzet, wat ze opleveren en welke fouten je wilt vermijden in 2026.",
                        "image": "https://www.empowers.nl/images/blogs/thought-leader-ads-linkedin-vergroot.jpg",
                        "datePublished": "2026-04-19T13:00:00+02:00",
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
                                    "name": "Wat zijn Thought Leader Ads op LinkedIn?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Thought Leader Ads zijn betaalde advertenties op LinkedIn waarbij je een bestaande post van een medewerker of oprichter boost. In plaats van een bedrijfspagina-post promoot je content uit een persoonlijk profiel. De advertentie voelt daardoor authentieker en krijgt aantoonbaar meer engagement dan reguliere Sponsored Content."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Werken Thought Leader Ads beter dan Sponsored Content?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Op de meeste B2B-accounts zien we 30 tot 60 procent hogere CTR op Thought Leader Ads dan op Sponsored Content, en CPC ligt 20 tot 40 procent lager. Het verschil is het grootst bij awareness- en top-of-funnel content. Voor pure conversiecampagnes zoals demo-aanvragen presteren Lead Gen Forms of standaard Sponsored Content soms beter."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Wiens post kun je boosten met een Thought Leader Ad?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Sinds 2024 kun je elke LinkedIn-gebruiker toestemming vragen, niet meer alleen medewerkers van je bedrijf. Branche-experts, klanten, partners of oprichters buiten je organisatie kunnen ook hun post laten boosten. De persoon moet per advertentie expliciet goedkeuring geven via een melding in hun LinkedIn-account."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Welke soort post werkt het best als Thought Leader Ad?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Educatieve posts, duidelijke meningen en persoonlijke verhalen werken het best. Product-pitches of aanbiedingen presteren slechter, omdat het algoritme en de doelgroep dat snel doorhebben. Lange posts van 800 tot 1500 tekens met een duidelijke haak in de eerste twee zinnen halen meestal de beste engagement."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Hoeveel budget heb je nodig?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Een werkbare startbudget is 40 tot 75 euro per dag per advertentie. Daaronder krijgt LinkedIn te weinig veilingsignaal om een stabiele CPM neer te zetten. Voor een testperiode van 14 dagen reken je dus op 600 tot 1100 euro per boost. Dat is vergelijkbaar met reguliere Sponsored Content."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Welke doelgroep gebruik je bij Thought Leader Ads?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Omdat deze advertentie bedoeld is om autoriteit op te bouwen, werkt een bredere doelgroep van 300.000 tot 1 miljoen gebruikers het best. Target op functies, senioriteit en branche, maar laat interesses grotendeels open. Te smalle targeting maakt de CPM extreem hoog en belemmert de leer-effecten van het algoritme."
                                    }
                                }
                            ]
                        },
                        "breadcrumb": {
                            "@type": "BreadcrumbList",
                            "itemListElement": [
                                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.empowers.nl" },
                                { "@type": "ListItem", "position": 2, "name": "Social Ads", "item": "https://www.empowers.nl/blogs/social-ads" },
                                { "@type": "ListItem", "position": 3, "name": "Thought Leader Ads op LinkedIn" }
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
                        <Link to="/blogs/social-ads" className="hover:text-accent transition-colors">Social Ads</Link>
                        <ChevronRight size={12} />
                        <span className="text-primary/30">Thought Leader Ads op LinkedIn</span>
                    </nav>

                    {/* Header */}
                    <header className="mb-16">
                        <div className="inline-block px-3 py-1 bg-accent/10 text-accent font-mono text-xs uppercase tracking-widest rounded-full mb-6">
                            Social Ads
                        </div>
                        <h1 className="font-sans font-bold text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight mb-8">
                            Thought Leader Ads op LinkedIn: zo vergroot je jouw autoriteit
                        </h1>
                        <div className="flex flex-wrap items-center gap-6 text-sm font-sans text-primary/60 border-y border-primary/10 py-6">
                            <span className="flex items-center gap-2"><User size={14} />Empowers Redactie</span>
                            <span className="flex items-center gap-2"><Calendar size={14} />19 apr 2026</span>
                            <span className="flex items-center gap-2"><Clock size={14} />8 min leestijd</span>
                        </div>
                    </header>

                    {/* Featured Image */}
                    <figure className="w-full h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden mb-16 relative bg-primary">
                        <div className="absolute inset-0 bg-[url('/images/blogs/thought-leader-ads-linkedin-vergroot.jpg')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </figure>

                    {/* Content */}
                    <div className="prose prose-lg max-w-none">

                        <p className="text-xl leading-relaxed text-primary/80 font-medium mb-6">
                            Thought Leader Ads zijn in 2026 het best bewaarde geheim op LinkedIn. Ze kosten minder per klik, krijgen meer engagement en voelen niet als een advertentie. Toch gebruikt het merendeel van de bedrijven ze verkeerd of helemaal niet. Hieronder lees je precies wat Thought Leader Ads zijn, wanneer ze werken en hoe je ze stap voor stap opbouwt zonder in de klassieke pitch-valkuil te stappen.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat zijn Thought Leader Ads precies?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een Thought Leader Ad is een betaalde LinkedIn-advertentie die gebaseerd is op een bestaande post uit een persoonlijk profiel, niet vanuit een bedrijfspagina. Je vraagt een medewerker, oprichter, klant of externe expert toestemming om hun post te boosten, en zodra zij akkoord geven draait hun content als advertentie in de feed van jouw doelgroep.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Het visuele verschil is subtiel maar doorslaggevend: de gebruiker ziet een gezicht en een naam, niet een logo. Juist die menselijke verpakking breekt door de advertentie-ruis heen. De content voelt als organisch, maar bereikt een veel grotere groep dan de organische post ooit zou halen.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Waarom werken ze zo goed in 2026?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Drie verschuivingen versterken het effect van Thought Leader Ads elk jaar een beetje meer. Eén: gebruikers klikken gemiddeld 3,5 keer minder op bedrijfspagina-content dan op persoonlijke content. Twee: LinkedIn's algoritme geeft sinds 2024 extra weging aan engagement bij boosted posts, wat de CPM drukt. Drie: B2B-kopers vertrouwen individuen meer dan organisaties, en dat vertrouwen vertaalt zich in hogere klikratio.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Op de meeste accounts zien we een CTR die 30 tot 60 procent hoger ligt dan bij reguliere Sponsored Content, en een CPC die 20 tot 40 procent lager is. Voor awareness- en top-of-funnel content is dat een significant voordeel.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wanneer moet je Thought Leader Ads inzetten?</h2>

                        <h3 className="font-semibold text-primary text-xl mt-10 mb-4">1. Bij thought leadership en positionering</h3>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Wil je bekend worden als dé expert binnen jouw niche, dan werkt er weinig krachtiger dan Thought Leader Ads. Door de gezichten van je team consequent in de feed van je ideale klant te plaatsen bouw je mentale beschikbaarheid op. Over 6 tot 12 maanden zie je dat terug in organische groei, directe aanvragen en sollicitaties.
                        </p>

                        <h3 className="font-semibold text-primary text-xl mt-10 mb-4">2. Bij producten met een lange salescycle</h3>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            SaaS, consultancy, finance en enterprise-B2B hebben allemaal salescycles van 3 tot 18 maanden. Gedurende die periode moet je koper je meerdere keren tegenkomen. Thought Leader Ads zijn de perfecte lift voor die onderwijsfase, omdat de inhoud niet geforceerd aanvoelt.
                        </p>

                        <h3 className="font-semibold text-primary text-xl mt-10 mb-4">3. Bij het ondersteunen van content marketing</h3>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Elke goede organische post van je oprichter verdient extra bereik. Zonder boost bereikt zelfs de beste post meestal maar 3 tot 6 procent van de connecties. Met een Thought Leader Ad erbij breng je de boodschap bij duizenden extra professionals binnen je exacte doelgroep. Meer perspectief op LinkedIn-reclame vind je in <Link to="/blogs/social-ads/linkedin-sponsored-content-vs-message" className="text-accent hover:underline">onze gids over Sponsored Content vs Message Ads</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Welke post kies je om te boosten?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Niet elke post is geschikt. Wat wij in de praktijk zien werken: educatieve posts waarin de schrijver iets scherp uitlegt, duidelijke meningen waar de helft van de lezers het oneens mee is, en persoonlijke verhalen over zakelijke lessen. Wat niet werkt: productaankondigingen, aanbiedingen, teamfeesten en vaagheden over "samen groeien".
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Drie checks voordat je boost. Eén: begint de post met een haak die meteen emotie of verbazing oproept? Twee: zit er één duidelijke boodschap in, niet vier? Drie: zou de schrijver deze post ook zonder advertentiebudget hebben geplaatst? Als die derde vraag een nee is, voelt de lezer dat meteen.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe zet je een Thought Leader Ad op?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Het proces vraagt wat meer tijd dan een reguliere advertentie, maar is niet ingewikkeld. Stap 1: de schrijver publiceert de post organisch en laat hem minstens 24 uur draaien, zodat de echte engagement zichtbaar is. Stap 2: in Campaign Manager kies je voor Brand Awareness of Engagement als doel. Stap 3: je zoekt de post via de URL en stuurt een boost-verzoek naar de auteur. Stap 4: de auteur keurt het verzoek in LinkedIn goed binnen 30 dagen. Stap 5: je stelt targeting, budget en duur in.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Eén detail dat vaak misgaat: de targeting. Omdat Thought Leader Ads bedoeld zijn om autoriteit te bouwen, werkt een bredere doelgroep het best. Houd je publiek tussen 300.000 en 1 miljoen gebruikers, niet de klassieke 20.000 waarop je conversiecampagnes misschien draaien.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Budget en verwachtingen</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een realistisch startbudget is 40 tot 75 euro per dag per post. Daaronder zie je grillige prestaties door te weinig veilingsignaal. Voor een eerste test reken je op 600 tot 1100 euro over twee weken. Zie je dan een CPC onder de 3 euro en een CTR boven 1,5 procent, dan heb je een goede post gevonden om verder op te schalen.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Waar ze niet de beste keuze zijn: pure conversiecampagnes zoals demo-aanvragen of trial-signups. Daar blijven <Link to="/blogs/social-ads/linkedin-lead-gen-forms-waarom" className="text-accent hover:underline">Lead Gen Forms</Link> en gerichte Sponsored Content efficiënter. Zie het niet als vervanging, maar als aanvulling.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">De vier fouten die je wilt vermijden</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Eén: een post boosten die al vanaf zin één als advertentie leest. Als de auteur opent met "Ik ben blij dat we deze samenwerking mogen aankondigen" is het geen thought leadership, maar een bedrijfsmededeling. Twee: te smalle targeting gebruiken. Drie: te veel posts van dezelfde persoon op hetzelfde moment boosten, waardoor je doelgroep hetzelfde gezicht zes keer per week tegenkomt. Vier: geen duidelijke volgende stap. Een Thought Leader Ad hoeft geen CTA te bevatten, maar een discrete verwijzing naar een longread of een webinar in de reacties verdubbelt vaak het effect.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Meer strategie rond LinkedIn-advertenties vind je in <Link to="/blogs/social-ads/linkedin-ads-beginners-eerste-b2b" className="text-accent hover:underline">onze gids voor LinkedIn Ads beginners</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wanneer ga je schalen?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Schaal pas op wanneer minstens twee posts van verschillende auteurs in twee opeenvolgende weken hebben gepresteerd. Eén uitschieter is toeval, twee posts met consistente CTR en acceptabele CPC is een patroon. Vanaf dat moment voeg je een ritme toe: één nieuwe Thought Leader Ad per 7 tot 10 dagen, afwisselend van auteur en thema. Zo voed je het algoritme met diverse signalen en bouw je tegelijk aan een herkenbare aanwezigheid.
                        </p>

                    </div>

                    {/* FAQ */}
                    <section className="mt-16 pt-12 border-t border-primary/10">
                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Veelgestelde vragen over Thought Leader Ads</h2>
                        <div className="space-y-6 not-prose">
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat zijn Thought Leader Ads op LinkedIn?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Thought Leader Ads zijn betaalde advertenties op LinkedIn waarbij je een bestaande post van een medewerker of oprichter boost. In plaats van een bedrijfspagina-post promoot je content uit een persoonlijk profiel. De advertentie voelt daardoor authentieker en krijgt aantoonbaar meer engagement dan reguliere Sponsored Content.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Werken Thought Leader Ads beter dan Sponsored Content?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Op de meeste B2B-accounts zien we 30 tot 60 procent hogere CTR op Thought Leader Ads dan op Sponsored Content, en CPC ligt 20 tot 40 procent lager. Het verschil is het grootst bij awareness- en top-of-funnel content. Voor pure conversiecampagnes zoals demo-aanvragen presteren Lead Gen Forms of standaard Sponsored Content soms beter.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wiens post kun je boosten met een Thought Leader Ad?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Sinds 2024 kun je elke LinkedIn-gebruiker toestemming vragen, niet meer alleen medewerkers van je bedrijf. Branche-experts, klanten, partners of oprichters buiten je organisatie kunnen ook hun post laten boosten. De persoon moet per advertentie expliciet goedkeuring geven via een melding in hun LinkedIn-account.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Welke soort post werkt het best als Thought Leader Ad?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Educatieve posts, duidelijke meningen en persoonlijke verhalen werken het best. Product-pitches of aanbiedingen presteren slechter, omdat het algoritme en de doelgroep dat snel doorhebben. Lange posts van 800 tot 1500 tekens met een duidelijke haak in de eerste twee zinnen halen meestal de beste engagement.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoeveel budget heb je nodig?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Een werkbaar startbudget is 40 tot 75 euro per dag per advertentie. Daaronder krijgt LinkedIn te weinig veilingsignaal om een stabiele CPM neer te zetten. Voor een testperiode van 14 dagen reken je dus op 600 tot 1100 euro per boost. Dat is vergelijkbaar met reguliere Sponsored Content.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Welke doelgroep gebruik je bij Thought Leader Ads?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Omdat deze advertentie bedoeld is om autoriteit op te bouwen, werkt een bredere doelgroep van 300.000 tot 1 miljoen gebruikers het best. Target op functies, senioriteit en branche, maar laat interesses grotendeels open. Te smalle targeting maakt de CPM extreem hoog en belemmert de leer-effecten van het algoritme.</p>
                            </div>
                        </div>
                    </section>

                    {/* Related */}
                    <section className="mt-16 pt-12 border-t border-primary/10">
                        <h3 className="text-xl font-bold text-primary mb-6">Lees ook</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <Link to="/blogs/social-ads/linkedin-ads-beginners-eerste-b2b" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">LinkedIn Ads voor beginners</h3>
                                <p className="text-primary/60 text-sm">Start met LinkedIn Ads zonder tijd en budget te verspillen.</p>
                            </Link>
                            <Link to="/blogs/social-ads/linkedin-sponsored-content-vs-message" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Sponsored Content vs Message Ads</h3>
                                <p className="text-primary/60 text-sm">Welke format past bij welke doelstelling op LinkedIn.</p>
                            </Link>
                            <Link to="/blogs/social-ads/linkedin-lead-gen-forms-waarom" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">LinkedIn Lead Gen Forms</h3>
                                <p className="text-primary/60 text-sm">Waarom formulieren in-platform vaak meer opleveren dan een landingspagina.</p>
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
                        Autoriteit bouwen op LinkedIn?
                    </h2>
                    <p className="relative z-10 font-sans text-background/70 text-lg mb-10 max-w-xl mx-auto">
                        We bouwen samen een Thought Leader Ads-traject dat bij jouw merk past. Binnen 30 minuten weet je welke auteurs, thema's en budgetten er voor jou passen.
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
