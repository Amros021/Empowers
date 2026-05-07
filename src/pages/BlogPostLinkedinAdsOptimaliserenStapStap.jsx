import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ChevronRight, User } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function BlogPostLinkedinAdsOptimaliserenStapStap() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen selection:bg-accent/30 selection:text-dark flex flex-col bg-background">
            <Helmet>
                <title>LinkedIn Ads optimaliseren stap voor stap | Empowers</title>
                <meta name="description" content="Een werkende LinkedIn-campagne optimaliseren vraagt geduld en de juiste volgorde. Lees welke knoppen je wel en niet moet draaien om je rendement te verhogen." />
                <link rel="canonical" href="https://www.empowers.nl/blogs/social-ads/linkedin-ads-optimaliseren-stap-stap" />
                <meta property="og:title" content="LinkedIn Ads optimaliseren stap voor stap" />
                <meta property="og:description" content="Een praktische optimalisatie-aanpak voor LinkedIn Ads, zonder dat je de leerfase van het algoritme om zeep helpt." />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://www.empowers.nl/blogs/social-ads/linkedin-ads-optimaliseren-stap-stap" />
                <meta property="og:image" content="https://www.empowers.nl/images/blogs/linkedin-ads-optimaliseren-stap-stap.jpg" />
                <meta property="article:published_time" content="2026-05-07" />
                <meta property="article:author" content="Empowers" />
                <meta property="article:section" content="Social Ads" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="LinkedIn Ads optimaliseren stap voor stap" />
                <meta name="twitter:description" content="Welke knoppen je wel en niet moet draaien om je LinkedIn-rendement te verhogen." />

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Article",
                        "headline": "LinkedIn Ads optimaliseren stap voor stap",
                        "description": "Een gestructureerde optimalisatie-aanpak voor LinkedIn Ads die werkelijk rendement oplevert.",
                        "image": "https://www.empowers.nl/images/blogs/linkedin-ads-optimaliseren-stap-stap.jpg",
                        "datePublished": "2026-05-07T13:00:00+02:00",
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
                                    "name": "Hoe lang moet je een LinkedIn-campagne laten draaien voordat je optimaliseert?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Geef een nieuwe campagne minimaal twee tot drie weken zonder ingrijpende wijzigingen. LinkedIn's algoritme heeft tijd nodig om uit te zoeken welk type gebruiker reageert op jouw advertenties. Bij conversiecampagnes is een learning phase van minimaal vijftig conversies per week aanbevolen voordat je serieuze conclusies kunt trekken."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Welke metrics tellen het zwaarst bij LinkedIn-optimalisatie?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Voor brand awareness kijk je naar CTR en kosten per impressie. Voor lead generation telt vooral de conversiekost per lead en de leadkwaliteit (sales-feedback). Engagement-cijfers (likes, reacties, deel-acties) geven een indicatie van creative-fit, maar mogen nooit het hoofddoel worden bij betaalde campagnes."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Wat doe je als je CPL te hoog blijft?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Een hoge CPL ligt zelden aan de bidding zelf. Kijk eerst naar drie zaken: is je doelgroep te smal of te breed, klopt je creative bij de aangeboden waarde, en converteert je landingspagina goed genoeg. In negen van de tien gevallen zit het probleem in de creative of het aanbod, niet in de techniek van de campagne."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Hoe snel mag je het budget van een LinkedIn-campagne verhogen?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Verhoog het dagbudget per stap met maximaal 20 procent en wacht daarna minstens vier dagen voordat je opnieuw verhoogt. Sneller dan dat verstoort de leerfase en kun je tijdelijk stijgende kosten zien zonder evenredige toename in resultaat. Bij geleidelijk schalen blijven CPL's stabieler."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Welke biedstrategie kies je het beste op LinkedIn?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Begin met Maximum Delivery (geautomatiseerd bieden) zodat het algoritme zelf optimaliseert binnen je budget. Stap pas over op Manual Bidding of Target Cost als je voldoende conversiedata hebt om een realistische streefkost te bepalen. Manual bieden zonder data leidt vaak tot te lage biedingen waardoor advertenties te weinig vertoningen krijgen."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Hoe vaak moet je nieuwe creative testen?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Wissel creatives elke vier tot zes weken, eerder als je CTR ziet dalen of frequency boven de zes komt. LinkedIn-doelgroepen zijn relatief klein, dus advertentiemoeheid treedt sneller op dan op Meta of Google. Houd minimaal twee variaties per campagne actief en vervang de underperformer wanneer je voldoende data hebt om te oordelen."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Wanneer pauzeer je een LinkedIn-campagne?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Pauzeer pas als je na drie weken structureel ondermaatse resultaten ziet en geen verbeterhefbomen meer hebt. Pauzeren is geen optimalisatie maar een laatste stap. Probeer eerst targeting, creative of biedstrategie aan te passen voordat je geld weghaalt uit een campagne die misschien net de leerfase nadert."
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
                            { "@type": "ListItem", "position": 3, "name": "Social Ads", "item": "https://www.empowers.nl/blogs/social-ads" },
                            { "@type": "ListItem", "position": 4, "name": "LinkedIn Ads optimaliseren", "item": "https://www.empowers.nl/blogs/social-ads/linkedin-ads-optimaliseren-stap-stap" }
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
                        <Link to="/blogs/social-ads" className="hover:text-accent transition-colors">Social Ads</Link>
                        <ChevronRight className="w-3 h-3" />
                        <span className="text-primary truncate">LinkedIn Ads optimaliseren</span>
                    </nav>

                    <header className="mb-16">
                        <div className="inline-block px-3 py-1 bg-accent/10 text-accent font-mono text-xs uppercase tracking-widest rounded-full mb-6">
                            Social Ads
                        </div>
                        <h1 className="font-sans font-bold text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight mb-8">
                            LinkedIn Ads optimaliseren stap voor stap
                        </h1>
                        <div className="flex flex-wrap items-center gap-6 text-sm font-sans text-primary/60 border-y border-primary/10 py-6">
                            <div className="flex items-center gap-2"><User className="w-4 h-4" /><span>Empowers Redactie</span></div>
                            <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>7 mei 2026</span></div>
                            <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>8 minuten leestijd</span></div>
                        </div>
                    </header>

                    <figure className="w-full h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden mb-16 relative bg-primary">
                        <div className="absolute inset-0 bg-[url('/images/blogs/linkedin-ads-optimaliseren-stap-stap.jpg')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </figure>

                    <div className="prose prose-lg max-w-none prose-headings:text-primary prose-headings:font-bold prose-a:text-accent prose-a:underline hover:prose-a:text-accent/80">
                        <p className="text-xl leading-relaxed text-primary/80 font-medium mb-6">
                            Een LinkedIn-campagne opzetten is het makkelijke deel. Hem laten renderen is waar de meeste accounts vastlopen. Te snel sleutelen, te traag schalen, te veel knoppen tegelijk omzetten. In deze blog leggen we uit hoe je LinkedIn Ads stap voor stap optimaliseert zonder de leerfase om zeep te helpen, en welke beslissingen je vaak beter even uitstelt.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Geef het algoritme tijd om te leren</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De grootste fout bij LinkedIn-campagnes is te vroeg ingrijpen. Het algoritme heeft tijd nodig om te begrijpen welke gebruikers binnen jouw doelgroep daadwerkelijk converteren. Reken op minimaal twee tot drie weken aanloop voordat je echte conclusies kunt trekken. Wijzig in die periode niets aan budget, doelgroep of biedstrategie. Een tussentijdse aanpassing reset effectief de leerfase, en je begint weer van voren af aan.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Voor conversiecampagnes hanteert LinkedIn een learning phase die pas optimaal werkt zodra de campagne minimaal vijftig conversies per week ophaalt. Daaronder krijg je signaalruis: dagelijkse pieken en dalen die niets met je strategie te maken hebben. Pas zodra het volume voldoende is mag je beslissingen nemen op basis van CPL of conversiekost.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Welke metrics moet je echt volgen?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Wat je moet meten hangt af van je doel. Bij brand awareness kijk je naar CTR (klikratio) en CPM (kosten per duizend impressies). Bij lead generation tellen alleen de CPL en de kwaliteit van de leads. Vergeet engagement-cijfers als hoofdmetric: likes en reacties zien er leuk uit op een rapport, maar voorspellen zelden iets over conversie.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Vraag bij je sales-team na welke leads daadwerkelijk waarde hebben. Een CPL van 50 euro waarvan een derde naar pipeline gaat is beter dan een CPL van 25 euro waarvan niets oppakt. Veel marketeers focussen op de bovenste laag van het rapport en missen daardoor het echte signaal. Hoe je metrics betekenisvol leest hebben we uitgewerkt in onze blog over <Link to="/blogs/social-ads/linkedin-ads-vs-google-ads" className="text-accent hover:underline">LinkedIn Ads versus Google Ads</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Begin altijd bij de creative, niet bij de bidding</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een teleurstellende campagne is in negen van de tien gevallen geen technisch probleem. Het is een creative-probleem. Je advertentie spreekt de doelgroep niet aan, je aanbod is niet helder, of de hook werkt niet in scroll-modus. Voordat je naar bidstrategie of doelgroep kijkt, controleer je drie zaken aan de creative.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Eerst: pakt de eerste regel iemands aandacht binnen drie seconden? Tweede: is de waardepropositie helder zonder dat de lezer hoeft te raden? Derde: weet de lezer wat hij na de klik krijgt? Ontbreekt een van deze drie, dan ligt daar je grootste hefboom. Pas creative aan, geef die twee weken om te draaien en kijk dan opnieuw. Het verhogen van je bod helpt niet als de creative niet landt.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Doelgroep checken: te smal of te breed?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            LinkedIn-doelgroepen zijn een delicate balans. Te smal en je krijgt advertentiemoeheid binnen een week. Te breed en je verspilt budget aan mensen die nooit gaan converteren. De sweet spot voor de meeste B2B-campagnes ligt tussen 50.000 en 250.000 leden. Daaronder loopt je frequency snel op, daarboven verlies je relevantie.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Check je doelgroepgrootte wekelijks via Campaign Manager. Een aangepaste doelgroep krimpt of groeit automatisch op basis van LinkedIn's eigen data. Krimpt hij zonder dat je iets hebt gewijzigd? Dat kan komen door verloren matches of veranderingen in functietitels. Voeg dan een extra functietitel toe die conceptueel dichtbij ligt. Voor strakkere targeting werkt het uitsluiten van mensen die je niet wilt bereiken (concurrenten, te junior rollen) vaak beter dan extra positieve criteria toevoegen.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Bidding: laat het algoritme zijn werk doen</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Begin altijd met Maximum Delivery, het volledig geautomatiseerde biedmodel waarin LinkedIn binnen je budget zoveel mogelijk resultaat probeert te halen. Pas zodra je voldoende conversiedata hebt mag je overstappen naar Target Cost of Manual Bidding. Manual bieden zonder data leidt structureel tot te lage biedingen, waardoor je advertenties te weinig vertoningen krijgen en het algoritme niets kan leren.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Bij Target Cost geef je een gewenste kost per actie aan en stuurt LinkedIn daarop. Werkt prima zodra de campagne stabiel draait. Bij grote schommelingen in resultaat is Maximum Delivery vaak betrouwbaarder, omdat het algoritme dan niet wordt gedwongen om binnen een bepaalde kost te blijven. Hoe je biedstrategieën onderling vergelijkt is iets dat je leert door te draaien, niet door te lezen.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Schalen zonder dat het breekt</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een campagne die werkt wil je opschalen. Hier gaan veel accounts onderuit. Te snel verhogen verstoort de leerfase en zorgt voor stijgende kosten zonder evenredig meer resultaat. De vuistregel: verhoog het dagbudget met maximaal 20 procent per keer en wacht minstens vier dagen voordat je opnieuw verhoogt. Werkt geduldig, maar levert structureel betere CPL's op dan agressief schalen.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Als je echt sneller wilt groeien is het beter om een tweede adset of campagne te lanceren met een gedeeltelijk overlappende doelgroep. Dan deel je de budgetdruk over meer eenheden zonder dat één adset uit balans raakt. Klinkt omslachtig en is het ook, maar het werkt. Dezelfde aanpak hebben we beschreven in onze blog over <Link to="/blogs/google-ads/google-ads-schalen-zonder-budget-verdubbelen" className="text-accent hover:underline">het schalen van Google Ads-budget</Link>, en de logica geldt op LinkedIn vrijwel identiek.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wanneer wissel je creative?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            LinkedIn-doelgroepen zijn klein in vergelijking met Meta of Google. Frequency loopt sneller op en advertentiemoeheid slaat eerder toe. Vier tot zes weken is een gezonde refresh-cyclus. Eerder als je CTR ziet dalen of frequency boven de zes komt. Je hoeft niet alle creatives tegelijk te vervangen. Houd minimaal twee variaties per campagne actief en wissel de underperformer zodra je voldoende data hebt om te oordelen.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Test variaties altijd binnen dezelfde campagne, niet als losse experimenten. Anders krijgt je vergelijking ruis door verschillen in audience-overlap of dagdeel. Een goede A/B-test op LinkedIn vraagt minstens 10.000 impressies per variant voordat je conclusies kunt trekken. Daaronder is het toeval, niet inzicht.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">De fouten die we het vaakst zien</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Drie patronen blijven terugkomen bij accounts die zelf optimaliseren. De eerste: dagelijks naar de cijfers kijken en bij elke schommeling iets veranderen. Houd jezelf in. Wekelijks evalueren is genoeg, en zelfs dat is bij kleinere campagnes vaak te frequent.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De tweede: meerdere wijzigingen tegelijk doorvoeren. Verander je doelgroep, biedstrategie en creative in dezelfde week, dan weet je achteraf nooit welke wijziging het verschil maakte. Eén variabele per week is meer dan genoeg. Saaier? Ja. Effectiever? Ook ja.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De derde: vasthouden aan een doelgroep die niet werkt omdat hij vooraf logisch leek. Als de data na vier weken duidelijk maakt dat je beoogde doelgroep onvoldoende reageert, is het tijd voor een ander segment. Dat kost ego-pijn maar voorkomt geldverlies.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat een goede LinkedIn-optimalisatie oplevert</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Bedrijven die hun LinkedIn-campagnes geduldig en gestructureerd optimaliseren zien CPL's die in zes maanden tijd halveren ten opzichte van de startsituatie. Niet door een truc, maar door iteratief verbeteren op basis van data. Schalen wordt dan ook veel makkelijker omdat je weet wat werkt en waarom.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De winst zit in discipline. Niet doorklikken op iedere knop, niet panikeren bij een matige week, niet alle creatives tegelijk vervangen. Wil je dat we mét je meekijken naar je LinkedIn-account voordat je nog meer budget besteedt? Plan een gesprek via onze <Link to="/contact" className="text-accent hover:underline">contactpagina</Link>. We doorlopen je structuur, je creatives en je biedstrategie, en wijzen aan waar de eerste verbetering zit.
                        </p>
                    </div>

                    <section className="mt-16 pt-12 border-t border-primary/10">
                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Veelgestelde vragen</h2>
                        <div className="space-y-6 not-prose">
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoe lang moet je een LinkedIn-campagne laten draaien voordat je optimaliseert?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Geef een nieuwe campagne minimaal twee tot drie weken zonder ingrijpende wijzigingen. LinkedIn's algoritme heeft tijd nodig om uit te zoeken welk type gebruiker reageert op jouw advertenties. Bij conversiecampagnes is een learning phase van minimaal vijftig conversies per week aanbevolen voordat je serieuze conclusies kunt trekken.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Welke metrics tellen het zwaarst bij LinkedIn-optimalisatie?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Voor brand awareness kijk je naar CTR en kosten per impressie. Voor lead generation telt vooral de conversiekost per lead en de leadkwaliteit (sales-feedback). Engagement-cijfers (likes, reacties, deel-acties) geven een indicatie van creative-fit, maar mogen nooit het hoofddoel worden bij betaalde campagnes.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat doe je als je CPL te hoog blijft?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Een hoge CPL ligt zelden aan de bidding zelf. Kijk eerst naar drie zaken: is je doelgroep te smal of te breed, klopt je creative bij de aangeboden waarde, en converteert je landingspagina goed genoeg. In negen van de tien gevallen zit het probleem in de creative of het aanbod, niet in de techniek van de campagne.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoe snel mag je het budget van een LinkedIn-campagne verhogen?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Verhoog het dagbudget per stap met maximaal 20 procent en wacht daarna minstens vier dagen voordat je opnieuw verhoogt. Sneller dan dat verstoort de leerfase en kun je tijdelijk stijgende kosten zien zonder evenredige toename in resultaat. Bij geleidelijk schalen blijven CPL's stabieler.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Welke biedstrategie kies je het beste op LinkedIn?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Begin met Maximum Delivery (geautomatiseerd bieden) zodat het algoritme zelf optimaliseert binnen je budget. Stap pas over op Manual Bidding of Target Cost als je voldoende conversiedata hebt om een realistische streefkost te bepalen. Manual bieden zonder data leidt vaak tot te lage biedingen waardoor advertenties te weinig vertoningen krijgen.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoe vaak moet je nieuwe creative testen?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Wissel creatives elke vier tot zes weken, eerder als je CTR ziet dalen of frequency boven de zes komt. LinkedIn-doelgroepen zijn relatief klein, dus advertentiemoeheid treedt sneller op dan op Meta of Google. Houd minimaal twee variaties per campagne actief en vervang de underperformer wanneer je voldoende data hebt om te oordelen.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wanneer pauzeer je een LinkedIn-campagne?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Pauzeer pas als je na drie weken structureel ondermaatse resultaten ziet en geen verbeterhefbomen meer hebt. Pauzeren is geen optimalisatie maar een laatste stap. Probeer eerst targeting, creative of biedstrategie aan te passen voordat je geld weghaalt uit een campagne die misschien net de leerfase nadert.</p>
                            </div>
                        </div>
                    </section>

                    <section className="mt-16 pt-12 border-t border-primary/10">
                        <h3 className="text-xl font-bold text-primary mb-6">Lees ook</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <Link to="/blogs/social-ads/linkedin-ads-beginners-eerste-b2b" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">LinkedIn Ads voor beginners</h3>
                                <p className="text-primary/60 text-sm">Een praktische start voor jouw eerste B2B-campagne op LinkedIn.</p>
                            </Link>
                            <Link to="/blogs/social-ads/linkedin-conversation-ads-werken" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">LinkedIn Conversation Ads</h3>
                                <p className="text-primary/60 text-sm">Wanneer Conversation Ads meer leveren dan een Message Ad of Sponsored Content.</p>
                            </Link>
                            <Link to="/blogs/social-ads/linkedin-ads-retargeting-bereik-warme" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">LinkedIn Ads retargeting</h3>
                                <p className="text-primary/60 text-sm">Hoe je warme bezoekers terughaalt zonder budget te verspillen aan toevallige passanten.</p>
                            </Link>
                        </div>
                    </section>

                </div>
            </article>

            <section className="w-full pb-32 px-6">
                <div className="max-w-4xl mx-auto bg-primary rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
                    <h2 className="relative z-10 font-drama italic text-background text-3xl sm:text-4xl md:text-5xl mb-6">
                        LinkedIn-rendement dat omhoog blijft gaan?
                    </h2>
                    <p className="relative z-10 font-sans text-background/70 text-lg mb-10 max-w-xl mx-auto">
                        We optimaliseren LinkedIn-accounts gestructureerd, niet impulsief. Plan een vrijblijvend gesprek en we wijzen aan waar jouw eerste winst zit.
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
