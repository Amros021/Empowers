import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ChevronRight, User } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function BlogPostGoogleAdsVsSeoWerkt() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen selection:bg-accent/30 selection:text-dark flex flex-col bg-background">
            <Helmet>
                <title>Google Ads vs SEO: wat werkt beter voor jouw bedrijf? | Empowers</title>
                <meta name="description" content="Google Ads levert direct verkeer, SEO bouwt duurzame zichtbaarheid. Ontdek welke aanpak het beste past bij jouw bedrijf, budget en doelen." />
                <link rel="canonical" href="https://www.empowers.nl/blogs/algemeen/google-ads-vs-seo-werkt" />
                <meta property="og:title" content="Google Ads vs SEO: wat werkt beter voor jouw bedrijf? | Empowers" />
                <meta property="og:description" content="Google Ads levert direct verkeer, SEO bouwt duurzame zichtbaarheid. Ontdek welke aanpak het beste past bij jouw bedrijf, budget en doelen." />
                <meta property="og:url" content="https://www.empowers.nl/blogs/algemeen/google-ads-vs-seo-werkt" />
                <meta property="og:type" content="article" />
                <meta property="og:image" content="https://www.empowers.nl/images/blogs/google-ads-vs-seo-werkt.jpg" />
                <script type="application/ld+json">{JSON.stringify({
                    "@context": "https://schema.org",
                    "@graph": [
                        {
                            "@type": "Article",
                            "headline": "Google Ads vs SEO: wat werkt beter voor jouw bedrijf?",
                            "image": "https://www.empowers.nl/images/blogs/google-ads-vs-seo-werkt.jpg",
                            "description": "Google Ads levert direct verkeer, SEO bouwt duurzame zichtbaarheid. Ontdek welke aanpak het beste past bij jouw bedrijf, budget en doelen.",
                            "author": { "@type": "Person", "name": "Amir Farahani" },
                            "publisher": { "@type": "Organization", "name": "Empowers", "url": "https://www.empowers.nl" },
                            "datePublished": "2026-03-26T00:00:00+01:00",
                            "dateModified": "2026-03-26T00:00:00+01:00",
                            "url": "https://www.empowers.nl/blogs/algemeen/google-ads-vs-seo-werkt"
                        },
                        {
                            "@type": "FAQPage",
                            "mainEntity": [
                                {
                                    "@type": "Question",
                                    "name": "Wat is het verschil tussen Google Ads en SEO?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Google Ads is betaald adverteren. Je betaalt per klik om bovenaan de zoekresultaten te staan. Zodra je stopt met betalen, verdwijn je. SEO is zoekmachineoptimalisatie: je verbetert je website zodat Google je gratis hoger plaatst. Dat kost tijd, maar het verkeer blijft komen zonder dat je per bezoeker betaalt. Google Ads werkt direct, SEO is een investering op langere termijn."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Hoeveel kost Google Ads per maand voor een MKB-bedrijf?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "De meeste MKB-bedrijven besteden tussen de 500 en 3000 euro per maand aan Google Ads. Dat is het advertentiebudget, exclusief beheerskosten. Wat je betaalt per klik verschilt per branche: in juridische dienstverlening betaal je soms 8 tot 15 euro per klik, terwijl lokale dienstverleners vaak wegkomen met 1 tot 3 euro. Je bepaalt zelf je dagbudget en kunt op elk moment stoppen."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Hoe lang duurt het voordat SEO resultaat oplevert?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Reken op 3 tot 6 maanden voordat je meetbare verbetering ziet in je Google-posities. Voor competitieve zoekwoorden kan dat oplopen tot 9 of 12 maanden. De eerste resultaten komen vaak sneller bij lokale zoekopdrachten of langere zoektermen met minder concurrentie. Het voordeel is dat de resultaten daarna langdurig doorwerken zonder dat je per klik betaalt."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Kan ik Google Ads en SEO tegelijk inzetten?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Ja, en dat is voor de meeste bedrijven de slimste aanpak. Google Ads zorgt voor direct verkeer en omzet terwijl je SEO op de achtergrond groeit. Na 6 tot 12 maanden begint SEO organisch verkeer te leveren en kun je je advertentiebudget afbouwen of verschuiven naar nieuwe markten. Bij onze klanten zien we dat deze combinatie gemiddeld 35% meer rendement oplevert dan alleen Ads of alleen SEO."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Wanneer kies ik voor Google Ads in plaats van SEO?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Kies voor Google Ads als je snel resultaat nodig hebt, bijvoorbeeld bij een productlancering, seizoensactie of als je vandaag al leads wilt binnenhalen. Ook als je in een markt zit waar de organische resultaten worden gedomineerd door grote partijen, geeft Ads je direct een plek bovenaan. Google Ads is ook ideaal om te testen welke zoekwoorden converteren, voordat je daar SEO-tijd in steekt."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Is SEO echt gratis?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Het verkeer via SEO is gratis, maar de inspanning om daar te komen niet. Je investeert in content, technische verbeteringen en linkbuilding. Of je doet het zelf en investeert je tijd, of je schakelt een specialist in. Reken op 500 tot 2000 euro per maand bij een bureau. Het verschil met Google Ads: bij SEO betaal je niet per bezoeker. Eenmaal een goede positie bereikt, blijft het verkeer komen zonder doorlopende kosten per klik."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Welke aanpak levert de hoogste ROI op voor MKB?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Op korte termijn levert Google Ads vaak de hoogste directe ROI, met een gemiddelde ROAS van 3 tot 5 bij goed beheer. Op lange termijn wint SEO: organisch verkeer heeft geen klikkosten, waardoor de kosten per lead na 6 tot 12 maanden flink dalen. De hoogste totale ROI behaal je door beide kanalen samen in te zetten. Start met Ads voor directe omzet en bouw tegelijk aan SEO voor duurzame groei."
                                    }
                                }
                            ]
                        }
                    ]
                })}</script>
                <script type="application/ld+json">{JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "BreadcrumbList",
                    "itemListElement": [
                        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.empowers.nl" },
                        { "@type": "ListItem", "position": 2, "name": "Nieuws", "item": "https://www.empowers.nl/nieuws" },
                        { "@type": "ListItem", "position": 3, "name": "Algemeen", "item": "https://www.empowers.nl/blogs/algemeen" },
                        { "@type": "ListItem", "position": 4, "name": "Google Ads vs SEO: wat werkt beter voor jouw bedrijf?", "item": "https://www.empowers.nl/blogs/algemeen/google-ads-vs-seo-werkt" }
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
                        <span className="text-primary truncate">Google Ads vs SEO</span>
                    </nav>

                    {/* Header */}
                    <header className="mb-16">
                        <div className="inline-block px-3 py-1 bg-accent/10 text-accent font-mono text-xs uppercase tracking-widest rounded-full mb-6">
                            Algemeen
                        </div>
                        <h1 className="font-sans font-bold text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight mb-8">
                            Google Ads vs SEO: wat werkt beter voor jouw bedrijf?
                        </h1>

                        <div className="flex flex-wrap items-center gap-6 text-sm font-sans text-primary/60 border-y border-primary/10 py-6">
                            <div className="flex items-center gap-2">
                                <User className="w-4 h-4" />
                                <span>Empowers Redactie</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>26 maart 2026</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>7 minuten leestijd</span>
                            </div>
                        </div>
                    </header>

                    {/* Featured Image */}
                    <figure className="w-full h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden mb-16 relative bg-primary">
                        <div className="absolute inset-0 bg-[url('/images/blogs/google-ads-vs-seo-werkt.jpg')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </figure>

                    {/* Content */}
                    <div className="prose prose-lg prose-headings:font-sans prose-headings:font-bold prose-headings:text-primary prose-p:font-sans prose-p:text-primary/80 prose-p:leading-relaxed max-w-none">
                        <p className="text-xl md:text-2xl font-medium leading-relaxed mb-10 text-primary">
                            Google Ads of SEO? Die vraag krijgen we wekelijks van ondernemers die meer klanten willen via Google. Het korte antwoord: Google Ads levert direct bezoekers op, SEO bouwt duurzame zichtbaarheid zonder klikkosten. Wat beter werkt hangt af van je budget, je branche en hoe snel je resultaat nodig hebt.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat is Google Ads precies?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Google Ads is het advertentieplatform van Google. Je betaalt om bovenaan de zoekresultaten te verschijnen voor specifieke zoekwoorden. Zoekt iemand op "loodgieter Amsterdam"? Dan kan jouw advertentie de eerste zijn die ze zien. Je betaalt alleen als iemand klikt. Vandaar de term pay-per-click.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Het grote voordeel: je kunt vandaag een campagne starten en morgen al de eerste leads binnenhalen. Je hebt volledige controle over je budget, je zoekwoorden en je doelgroep. Bij onze klanten zien we dat een goed ingestelde campagne gemiddeld een <Link to="/google-ads" className="text-accent hover:underline">ROAS van 3 tot 5</Link> haalt in de eerste maanden.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Het nadeel: zodra je stopt met betalen, verdwijn je uit de resultaten. Google Ads is als een kraan: draai je hem dicht, dan stopt het water.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat is SEO en hoe werkt het?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            SEO staat voor Search Engine Optimization, ofwel zoekmachineoptimalisatie. Je past je website zo aan dat Google je hoger plaatst in de organische zoekresultaten. Dat zijn de resultaten onder de advertenties. Daar betaal je niet per klik voor.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            SEO draait om drie dingen: techniek (snelle, goed gebouwde website), content (pagina's die antwoord geven op zoekvragen) en autoriteit (andere websites die naar jou linken). Hoe beter je scoort op die drie gebieden, hoe hoger Google je plaatst.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Het voordeel van <Link to="/seo" className="text-accent hover:underline">SEO</Link> is dat je verkeer krijgt zonder per bezoeker te betalen. Een goed gerankte pagina kan maandenlang bezoekers opleveren. Het nadeel: het kost tijd. Reken op 3 tot 6 maanden voordat je serieuze verbetering ziet.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Waarom is deze keuze belangrijk voor MKB-bedrijven?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Als MKB-ondernemer heb je geen oneindig marketingbudget. Elke euro moet rendement opleveren. Toch zien we dat veel bedrijven zonder plan beginnen met adverteren of zonder strategie aan SEO werken. Het gevolg: geld dat verdampt zonder meetbaar resultaat.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            73% van alle klikken in Google gaat naar de organische resultaten. Maar die posities bereik je niet van vandaag op morgen. Tegelijk levert Google Ads direct verkeer, maar kost het geld per bezoeker. De keuze die je maakt, bepaalt hoe snel je groeit en hoeveel het kost.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            We merken in de praktijk dat bedrijven die bewust kiezen, en niet zomaar iets proberen, gemiddeld 40% meer rendement halen uit hun marketingbudget. Die keuze begint bij begrijpen wat elk kanaal je oplevert.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wanneer kies je voor Google Ads?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Google Ads is de juiste keuze in een aantal specifieke situaties. Als je snel resultaat nodig hebt, is Ads de snelste route. Je campagne kan binnen 24 uur live staan en dezelfde week nog leads opleveren.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Kies voor Google Ads als je een nieuw product of dienst lanceert en direct wilt testen of er vraag naar is. Ook bij seizoensgebonden aanbiedingen, zoals een zomeractie of eindejaarskorting, is Ads ideaal. Je zet de campagne aan wanneer het nodig is en weer uit als het seizoen voorbij is.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Google Ads werkt ook goed als je concurrenten de organische resultaten domineren. In sommige branches staan de eerste tien posities vol met grote partijen. Via Ads spring je daar letterlijk overheen. En je kunt Ads gebruiken als testinstrument: kijk welke zoekwoorden het meeste opleveren, en investeer daarna je SEO-tijd in die termen.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een webshop die we begeleidden in sportartikelen begon met een Google Ads budget van 1500 euro per maand. Binnen drie weken hadden ze een ROAS van 4,8. Dat geld hadden ze niet verdiend als ze alleen op SEO hadden gewacht.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wanneer kies je voor SEO?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            SEO is de betere investering als je denkt in maanden en jaren, niet in weken. Het is geschikt als je structureel gevonden wilt worden voor zoektermen die relevant zijn voor je bedrijf. Zonder dat je elke maand hetzelfde bedrag aan klikken uitgeeft.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Kies voor SEO als je veel inhoudelijke kennis hebt die je kunt delen via blogs, handleidingen of FAQ-pagina's. Content die antwoord geeft op vragen van je doelgroep, rankt goed in Google en levert maandenlang verkeer op. Een <Link to="/blogs/seo/seo-voor-mkb-google-positie-verbeteren" className="text-accent hover:underline">sterke SEO-strategie</Link> maakt je steeds minder afhankelijk van betaalde kanalen.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            SEO is ook de logische keuze als je actief bent in een lokale markt. Lokale SEO, denk aan "schilder Eindhoven" of "hypotheekadviseur Utrecht", levert vaak sneller resultaat dan landelijke termen. En de kosten per lead zijn na verloop van tijd veel lager dan via Google Ads.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een installatiebedrijf in Rotterdam dat we hielpen met lokale SEO, steeg in 4 maanden van pagina 3 naar positie 2 voor hun belangrijkste zoekterm. Dat leverde hen 25 extra aanvragen per maand op. Zonder een cent aan klikkosten.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat zijn de kosten van Google Ads versus SEO?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Bij Google Ads bepaal je zelf je dagbudget. De meeste MKB-bedrijven besteden 500 tot 3000 euro per maand aan advertentiebudget, plus beheerskosten als je een specialist inschakelt. Je betaalt per klik, en de prijs varieert per branche. In juridische dienstverlening betaal je 8 tot 15 euro per klik. In retail of lokale diensten is dat vaak 1 tot 3 euro.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            SEO kost geen klikbudget, maar er is wel een investering nodig. Doe je het zelf, dan investeer je je eigen tijd in content schrijven, technische verbeteringen en linkbuilding. Schakel je een bureau in, dan betaal je gemiddeld 500 tot 2000 euro per maand, afhankelijk van de scope.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Het grote verschil zit in de lange termijn. Bij Google Ads betaal je elke maand opnieuw voor hetzelfde verkeer. Bij SEO dalen de kosten per bezoeker naarmate je posities stijgen. Na 12 maanden is de kosten per lead via SEO bij onze klanten gemiddeld 60% lager dan via Google Ads.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat zijn veelgemaakte fouten bij deze keuze?</h2>

                        <h3 className="text-2xl font-bold text-primary mt-8 mb-4">Fout 1: alles op SEO zetten en wachten</h3>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Veel ondernemers kiezen voor SEO omdat het "gratis" klinkt. Maar ondertussen halen ze maandenlang geen nieuwe klanten binnen. Als je bedrijf nu omzet nodig heeft, is alleen SEO te langzaam. Combineer het met Ads zodat je direct verkoopt terwijl je organisch groeit.
                        </p>

                        <h3 className="text-2xl font-bold text-primary mt-8 mb-4">Fout 2: Google Ads aanzetten zonder tracking</h3>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            We zien het wekelijks: ondernemers die 1000 euro per maand aan Ads uitgeven maar geen idee hebben welke campagnes echt iets opleveren. Zonder <Link to="/blogs/tracking/marketing-tracking-conversies-meten" className="text-accent hover:underline">goede tracking</Link> gooi je geld weg. Stel altijd eerst conversietracking in voordat je je eerste euro uitgeeft.
                        </p>

                        <h3 className="text-2xl font-bold text-primary mt-8 mb-4">Fout 3: Google Ads en SEO als concurrenten zien</h3>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De grootste fout is denken dat je moet kiezen. Google Ads en SEO zijn geen tegenstanders. Ze versterken elkaar. Ads-data laat zien welke zoekwoorden converteren. Die informatie gebruik je voor je SEO-strategie. En organisch verkeer verlaagt je totale kosten per acquisitie.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">De slimste aanpak: Google Ads en SEO combineren</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Bij onze klanten zien we steeds hetzelfde patroon. De bedrijven die het hardst groeien, gebruiken beide kanalen. Ze starten met Google Ads voor directe omzet en bouwen tegelijk aan SEO. Na 6 tot 12 maanden begint het organische verkeer bij te dragen en kunnen ze hun advertentiebudget verschuiven naar nieuwe markten of producten.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Zo ziet een praktisch stappenplan eruit. Maand 1 tot 3: start Google Ads op je belangrijkste zoekwoorden. Meet welke termen converteren. Begin tegelijk met de technische SEO-basis en je eerste blogartikelen. Maand 3 tot 6: schaal de Ads-campagnes die goed presteren op. Publiceer regelmatig content gericht op de zoekwoorden die via Ads het beste converteren. Maand 6 tot 12: je SEO-posities stijgen. Organisch verkeer groeit. Je kunt het Ads-budget afbouwen voor zoekwoorden waar je organisch al goed scoort. Investeer het vrijgekomen budget in nieuwe termen of kanalen.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een <Link to="/blogs/strategie/online-marketing-strategie-mkb" className="text-accent hover:underline">goede online marketingstrategie</Link> is geen keuze tussen het een of het ander. Het is een plan waarin elk kanaal zijn rol speelt.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe bepaal je wat past bij jouw situatie?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Stel jezelf deze vragen. Heb je vandaag al leads nodig? Dan begin je met Google Ads. Heb je een budget dat je minimaal 6 maanden kunt volhouden? Dan voeg je SEO toe. Zit je in een markt met dure klikprijzen? Dan is SEO op termijn voordeliger. Wil je een seizoensactie pushen? Dan is Ads het snelste kanaal.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Er is geen antwoord dat voor iedereen werkt. Maar er is wel een aanpak die voor bijna niemand werkt: niets doen en hopen dat klanten je vinden. Jouw concurrentie investeert al in Google Ads of SEO, of allebei. De vraag is niet of je erin investeert, maar wanneer.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Wil je weten welke mix van Google Ads en SEO het meeste oplevert voor jouw bedrijf? We kijken er graag naar. <Link to="/contact" className="text-accent hover:underline">Plan een gratis gesprek</Link> en we laten zien waar jouw kansen liggen.
                        </p>

                        <hr className="my-16 border-primary/10" />

                        <h2 className="text-3xl font-bold text-primary mb-8">Veelgestelde vragen over Google Ads vs SEO</h2>

                        <div className="space-y-6 not-prose">
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat is het verschil tussen Google Ads en SEO?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Google Ads is betaald adverteren. Je betaalt per klik om bovenaan de zoekresultaten te staan. Zodra je stopt met betalen, verdwijn je. SEO is zoekmachineoptimalisatie: je verbetert je website zodat Google je gratis hoger plaatst. Dat kost tijd, maar het verkeer blijft komen zonder dat je per bezoeker betaalt. Google Ads werkt direct, SEO is een investering op langere termijn.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoeveel kost Google Ads per maand voor een MKB-bedrijf?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">De meeste MKB-bedrijven besteden tussen de 500 en 3000 euro per maand aan Google Ads. Dat is het advertentiebudget, exclusief beheerskosten. Wat je betaalt per klik verschilt per branche: in juridische dienstverlening betaal je soms 8 tot 15 euro per klik, terwijl lokale dienstverleners vaak wegkomen met 1 tot 3 euro. Je bepaalt zelf je dagbudget en kunt op elk moment stoppen.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoe lang duurt het voordat SEO resultaat oplevert?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Reken op 3 tot 6 maanden voordat je meetbare verbetering ziet in je Google-posities. Voor competitieve zoekwoorden kan dat oplopen tot 9 of 12 maanden. De eerste resultaten komen vaak sneller bij lokale zoekopdrachten of langere zoektermen met minder concurrentie. Het voordeel is dat de resultaten daarna langdurig doorwerken zonder dat je per klik betaalt.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Kan ik Google Ads en SEO tegelijk inzetten?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Ja, en dat is voor de meeste bedrijven de slimste aanpak. Google Ads zorgt voor direct verkeer en omzet terwijl je SEO op de achtergrond groeit. Na 6 tot 12 maanden begint SEO organisch verkeer te leveren en kun je je advertentiebudget afbouwen of verschuiven naar nieuwe markten. Bij onze klanten zien we dat deze combinatie gemiddeld 35% meer rendement oplevert dan alleen Ads of alleen SEO.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wanneer kies ik voor Google Ads in plaats van SEO?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Kies voor Google Ads als je snel resultaat nodig hebt, bijvoorbeeld bij een productlancering, seizoensactie of als je vandaag al leads wilt binnenhalen. Ook als je in een markt zit waar de organische resultaten worden gedomineerd door grote partijen, geeft Ads je direct een plek bovenaan. Google Ads is ook ideaal om te testen welke zoekwoorden converteren, voordat je daar SEO-tijd in steekt.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Is SEO echt gratis?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Het verkeer via SEO is gratis, maar de inspanning om daar te komen niet. Je investeert in content, technische verbeteringen en linkbuilding. Of je doet het zelf en investeert je tijd, of je schakelt een specialist in. Reken op 500 tot 2000 euro per maand bij een bureau. Het verschil met Google Ads: bij SEO betaal je niet per bezoeker. Eenmaal een goede positie bereikt, blijft het verkeer komen zonder doorlopende kosten per klik.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Welke aanpak levert de hoogste ROI op voor MKB?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Op korte termijn levert Google Ads vaak de hoogste directe ROI, met een gemiddelde ROAS van 3 tot 5 bij goed beheer. Op lange termijn wint SEO: organisch verkeer heeft geen klikkosten, waardoor de kosten per lead na 6 tot 12 maanden flink dalen. De hoogste totale ROI behaal je door beide kanalen samen in te zetten. Start met Ads voor directe omzet en bouw tegelijk aan SEO voor duurzame groei.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </article>

            {/* Bottom CTA */}
            <section className="w-full pb-32 px-6">
                <div className="max-w-4xl mx-auto bg-primary rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
                    <h2 className="relative z-10 font-drama italic text-background text-3xl sm:text-4xl md:text-5xl mb-6">Google Ads, SEO of allebei?</h2>
                    <p className="relative z-10 font-sans text-background/70 text-lg mb-10 max-w-xl mx-auto">
                        Wil je weten welke mix het meeste oplevert voor jouw bedrijf? Plan een gratis gesprek. We kijken naar je situatie en laten zien waar jouw kansen liggen.
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
