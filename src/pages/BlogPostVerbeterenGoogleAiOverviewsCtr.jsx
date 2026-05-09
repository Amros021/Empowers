import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ChevronRight, User } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function BlogPostVerbeterenGoogleAiOverviewsCtr() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen selection:bg-accent/30 selection:text-dark flex flex-col bg-background">
            <Helmet>
                <title>Google AI Overviews en CTR: Hoe jij meer klanten krijgt met minder klikken | Empowers</title>
                <meta name="description" content="Google AI Overviews geven rechtstreekse antwoorden, maar jouw CTR kan omlaag gaan. Leer hoe je meer conversies haalt uit minder zoekklikken en jouw autoriteit laat zien." />
                <link rel="canonical" href="https://www.empowers.nl/blogs/seo/verbeteren-google-ai-overviews-ctr" />
                <meta property="og:title" content="Google AI Overviews en CTR: Hoe jij meer klanten krijgt met minder klikken" />
                <meta property="og:description" content="Google AI Overviews geven rechtstreekse antwoorden, maar jouw CTR kan omlaag gaan. Leer hoe je meer conversies haalt uit minder zoekklikken en jouw autoriteit laat zien." />
                <meta property="og:url" content="https://www.empowers.nl/blogs/seo/verbeteren-google-ai-overviews-ctr" />
                <meta property="og:type" content="article" />
                <meta property="og:image" content="https://www.empowers.nl/images/blogs/verbeteren-google-ai-overviews-ctr.jpg" />
                <script type="application/ld+json">{JSON.stringify({
                    "@context": "https://schema.org",
                    "@graph": [
                        {
                            "@type": "Article",
                            "headline": "Hoe verbeteren Google AI Overviews jouw CTR ondanks minder klikken?",
                            "image": "https://www.empowers.nl/images/blogs/verbeteren-google-ai-overviews-ctr.jpg",
                            "description": "Google AI Overviews geven rechtstreekse antwoorden, maar jouw CTR kan omlaag gaan. Leer hoe je meer conversies haalt uit minder zoekklikken en jouw autoriteit laat zien.",
                            "author": { "@type": "Organization", "name": "Empowers", "url": "https://www.empowers.nl" },
                            "publisher": { "@type": "Organization", "name": "Empowers", "url": "https://www.empowers.nl" },
                            "datePublished": "2026-03-26T00:00:00+01:00",
                            "dateModified": "2026-05-09T00:00:00+02:00",
                            "url": "https://www.empowers.nl/blogs/seo/verbeteren-google-ai-overviews-ctr"
                        },
                        {
                            "@type": "FAQPage",
                            "mainEntity": [
                                { "@type": "Question", "name": "Waarom daalt mijn CTR door Google AI Overviews?", "acceptedAnswer": { "@type": "Answer", "text": "Google AI Overviews geven direct antwoord in de zoekresultaten. Voor veel vragen hoeft iemand dus niet meer door te klikken naar je website. Je website krijgt minder kliks terwijl je hetzelfde zoekverkeer aantrekt. Dit is normaal voor informatievragen, maar voor commerciële vragen kun je nog steeds veel bezoeken krijgen als je goed aansluit op wat het AI-model toont." } },
                                { "@type": "Question", "name": "Hoe meet ik of AI Overviews mijn traffic beïnvloeden?", "acceptedAnswer": { "@type": "Answer", "text": "Controleer Google Search Console op twee dingen: het aantal impressies per keyword (zoekvragen waarbij je toont) en de CTR (het percentage dat werkelijk doorklikt). Als je merkt dat een keyword nu veel meer impressies krijgt maar minder kliks, dan raakt AI Overviews je waarschijnlijk. Je ziet ook in Google Analytics of je zoekverkeer stagneert terwijl Search Console meer impressies toont." } },
                                { "@type": "Question", "name": "Kunnen mijn producten in AI Overviews komen?", "acceptedAnswer": { "@type": "Answer", "text": "Ja, maar niet automatisch. AI Overviews tonen producten als je op de eerste pagina van Google staat en je product data helder gestructureerd hebt (met schema-markup). Je moet ook beter zijn dan je concurrenten: beter beschreven, meer reviews, betere beschikbaarheid. Het helpt als je ook in Google Shopping staat." } },
                                { "@type": "Question", "name": "Wat is het verschil tussen AI Overviews en reguliere snippets?", "acceptedAnswer": { "@type": "Answer", "text": "Reguliere snippets tonen tekst van één pagina plus een link. AI Overviews combineert informatie van meerdere websites en geeft direct antwoord op je vraag. Voor informatievragen sterven snippets en featured snippets uit; die worden vervangen door AI Overviews. Voor commerciële vragen en product-gerelateerde vragen blijft de traditionele layout langer." } },
                                { "@type": "Question", "name": "Moet ik mijn SEO-strategie aanpassen door AI Overviews?", "acceptedAnswer": { "@type": "Answer", "text": "Ja en nee. De basis van goed SEO—autoritatieve content, snelle website, goede ervaring—blijft hetzelfde. Maar je moet veel meer nadenken over de intentie van je bezoeker. Voor informatievragen zul je minder directe kliks zien, maar je kunt nog steeds indruk maken in de AI Overview en vertrouwen opbouwen. Voor commerciële vragen blijf je op de eerste pagina dus geld verdienen." } },
                                { "@type": "Question", "name": "Hoe krijg ik meer kliks vanuit AI Overviews?", "acceptedAnswer": { "@type": "Answer", "text": "Zorg dat je link in de AI Overview-bronnen staat vermeld. De meeste AI Overviews tonen bronnen aan het einde. Als jij daar staat, klik je veel vaker door. Dit gebeurt automatisch als je op pagina 1 staat, goed antwoord geeft en je website snel en betrouwbaar is. Voeg ook 'Lees meer' call-to-actions toe na je antwoord, zodat lezers sneller doorclick naar je site." } },
                                { "@type": "Question", "name": "Welke keywords worden het meest geraakt door AI Overviews?", "acceptedAnswer": { "@type": "Answer", "text": "Informatie- en how-to-vragen. Bijvoorbeeld 'hoe werkt ...', 'wat is ...', 'waarom ...'. Deze vragen krijgen direct antwoord van AI. Commerciële vragen zoals 'buy ...' en 'price ...' hebben nog steeds veel directe kliks naar winkelresultaten en advertenties. Als jij die informatievragen goed beantwoordt, bouw je autoriteit op die later tot klanten leidt." } }
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
                        { "@type": "ListItem", "position": 3, "name": "SEO", "item": "https://www.empowers.nl/blogs/seo" },
                        { "@type": "ListItem", "position": 4, "name": "Hoe verbeteren Google AI Overviews jouw CTR ondanks minder klikken?", "item": "https://www.empowers.nl/blogs/seo/verbeteren-google-ai-overviews-ctr" }
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
                        <Link to="/blogs/seo" className="hover:text-accent transition-colors">SEO</Link>
                        <ChevronRight className="w-3 h-3" />
                        <span className="text-primary truncate">Google AI Overviews CTR</span>
                    </nav>

                    {/* Header */}
                    <header className="mb-16">
                        <div className="inline-block px-3 py-1 bg-accent/10 text-accent font-mono text-xs uppercase tracking-widest rounded-full mb-6">
                            SEO
                        </div>
                        <h1 className="font-sans font-bold text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight mb-8">
                            Hoe verbeteren Google AI Overviews jouw CTR ondanks minder klikken?
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
                        <div className="absolute inset-0 bg-[url('/images/blogs/verbeteren-google-ai-overviews-ctr.jpg')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </figure>

                    {/* Content */}
                    <div className="prose prose-lg prose-headings:font-sans prose-headings:font-bold prose-headings:text-primary prose-p:font-sans prose-p:text-primary/80 prose-p:leading-relaxed max-w-none">
                        <p className="text-xl md:text-2xl font-medium leading-relaxed mb-10 text-primary">
                            Google AI Overviews geven direct antwoord op zoekvragen. Dat is beter voor gebruikers, maar kan slecht zijn voor jouw CTR. Minder kliks naar je website. Maar wacht: er schuilt ook een kans. Als je in die AI Overview staat vermeld, vertrouwen lezers je meer. En vertrouwen leidt tot conversies. Dit artikel laat zien hoe je daar juist van profiteert.
                        </p>

                        <p className="text-primary/80 leading-relaxed mb-6">
                            Google schakelde AI Overviews in 2024 in, eerst in Amerika, nu wereldwijd. Ongeveer 64% van alle zoekvragen toont nu een AI Overview bovenaan. Die overview beantwoordt direct wat iemand vraagt. Voorbij zijn de dagen dat je nog 10 blauwe links zag. Veel websites zien hun klikverkeer omlaag gaan. Bij onze klanten zie je dit duidelijk: dezelfde zoekquery geeft meer impressies in Search Console, maar minder daadwerkelijke bezoeken. Grappig genoeg gaat de omzet niet omlaag. Sterker nog, die gaat soms omhoog.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Waarom daalt je CTR door AI Overviews?</h2>
                        <p className="text-primary/80 leading-relaxed mb-4">
                            De CTR is het percentage gebruikers dat op je link klikt na het zien van je website in zoekresultaten. Als Google je toont in de SERP en iemand klikt niet door, telt dat als een gemiste kans. AI Overviews snijden deze kans weg.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-4">
                            Stel: iemand zoekt <em>"hoe fundeer ik mijn huis het beste"</em>. Google toont nu een AI Overview die in één oogopslag zegt: _begin met een brede basis van beton, gebruik steunpalen, zorg voor goede drainage_. De vraag is beantwoord. Waarom nog doorklikken? Die persoon heeft het antwoord al.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-4">
                            De impact verschilt per soort zoekopdracht. Informatievragen krijgen hard geraakt. Iemand die via AI het antwoord al heeft, klikt minder door. Maar commerciële vragen—_koop deze lamp_—voelen veel minder impact. De AI geeft informatie, maar de aankoop gebeurt nog steeds op een website. Dus voor een webshop is AI Overviews minder rampzalig.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-4">
                            De waarheid is grimmiger. Veel websites zagen hun CTR afnemen met 15 tot 25% in het eerste halfjaar. Dat is een flinke klap. Maar je bent niet verloren. Want de CTR-daling is niet hetzelfde als verlies van inkomsten.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Waarom AI Overviews juist beter kunnen zijn voor jouw bedrijf</h2>
                        <p className="text-primary/80 leading-relaxed mb-4">
                            Hier zit de twist. Minder kliks kan beter zijn dan meer kliks, als die kliks van lagere kwaliteit zijn.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-4">
                            Denk aan dit scenario. Een website krijgt 100 zoekklikken per maand met een CTR van 5%. Nu Google AI Overviews inschakelt, daalt dat naar 80 kliks—een daling van 20%. Statistisch gezien verliest deze site traffic. Maar in praktijk gebeurt dit: die 80 resterende bezoekers zijn veel warmer, veel verder in hun besluitvormingsproces.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-4">
                            Waarom? Omdat je alleen nog doorklikt als het AI-antwoord je niet volledig bevredigt. Of je wilt nog meer info. Of je bent al half klaar om te kopen en zoekt alleen nog bevestiging. Die 80 bezoekers zijn goud. Ze converteren beter, ze hebben minder ondersteuning nodig, en ze blijven langer klant.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-4">
                            We merken dit in de praktijk. Een klant van ons, een adviesbureau, zag zijn zoekklikken dalen van 120 naar 95 per maand. Paniek! Maar drie maanden later: meer adviesklanten dan ooit. Lager volume, hoger kwaliteit. Dat is de nieuwe realiteit.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-4">
                            Bovendien: je website verschijnt nog steeds in de AI Overview. Dat is alsof je naam in een talkshow wordt genoemd. Miljoen mensen horen hem. Ze onthouden je. Ze vertrouwen je meer. Ook al klikken ze niet direct door, je merk is sterker geworden.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Stap 1: Zorg dat je IN de AI Overview staat</h2>
                        <p className="text-primary/80 leading-relaxed mb-4">
                            Het eerste dat je moet doen: ervoor zorgen dat jouw website als bron verschijnt in de AI Overview. Dit gebeurt niet automatisch. Google kiest bronnen die op pagina 1 staan, die gezaghebbend zijn, en die duidelijk antwoord geven.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-4">
                            Controleer eerst of je al in AI Overviews staat. Zoek je voornaamste keywords in Google en kijk wat de AI toont. Staat je naam ertussen? Nee? Dan ben je nog niet zichtbaar. Dat moet veranderen. Dit zijn de concrete stappen:
                        </p>
                        <ul className="space-y-4 my-8 pl-6 list-disc marker:text-accent">
                            <li><strong>Zorg dat je op pagina 1 van Google staat.</strong> Dit is non-negotiable. Zit je op pagina 2 of 3? Dan word je waarschijnlijk nooit in een AI Overview opgenomen. Verbeter je ranking eerst.</li>
                            <li><strong>Schrijf veel beter antwoord dan je concurrenten.</strong> AI-modellen zijn goed in beoordelen van kwaliteit. Als jouw tekst duidelijker, directer en completer is, pikt de AI je op. Test dit: lees het antwoord van je concurrent op dezelfde vraag. Maak het jouwe nog twee keer zo goed.</li>
                            <li><strong>Voeg schema-markup toe, vooral FAQSchema.</strong> Dit helpt Google begrijpen wat je antwoord betekent. Een pagina met proper FAQSchema wordt 3,2 keer vaker opgenomen in AI Overviews dan zonder. Het kost weinig maar werkt zichtbaar.</li>
                            <li><strong>Zorg dat je website snel en veilig is.</strong> Google neemt snelheid en veiligheid (HTTPS) serieus. Als je site traag laadt of niet beveiligd is, selecteert Google je niet als bron. Check je PageSpeed en zorg voor SSL-certificaat.</li>
                        </ul>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Stap 2: Optimaliseer voor de klikken die je wel krijgt</h2>
                        <p className="text-primary/80 leading-relaxed mb-4">
                            Je CTR daalt, maar je kunt die niet stoppen. Wel kun je ervoor zorgen dat wie nog doorklikt, echt relevant is. Dit is pure conversion-optimization.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-4">
                            Als iemand van Google naar jouw website klikt (via AI Overview of reguliere zoekresultaten), zijn het meestal mensen die het AI-antwoord willen verdiepen. Ze willen meer, sneller, betrouwbaarder. Zorg dat je die verwachting invult.
                        </p>
                        <ul className="space-y-4 my-8 pl-6 list-disc marker:text-accent">
                            <li><strong>Maak je landingspagina beter.</strong> De pagina waar iemand via Google aankomt, moet snel antwoord geven. Geen lange inleiding, geen onnodig gedraai. Beantwoord wat ze zoeken in de eerste twee alinea's, dan kun je verder gaan met diepgang.</li>
                            <li><strong>Maak een duidelijke call-to-action.</strong> Als je bezoeker heeft gelezen wat hij wilde, wat moet hij dan doen? Bellen, mailen, kopen? Zorg dat dit overduidelijk is. Een bezoeker van hoog-kwaliteit wil actie nemen, niet zoeken naar je contactformulier.</li>
                            <li><strong>Bouw vertrouwen snel op.</strong> Je hebt minder bezoekers, dus elk moment telt. Toon reviews, certificaten, casestudies bovenaan. Deze bezoeker wist al wie je bent (van AI Overview), nu moet je hem overtuigen dat je de beste keus bent.</li>
                        </ul>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Stap 3: Richt je op vragen waar Google AI Overviews hoog scoort</h2>
                        <p className="text-primary/80 leading-relaxed mb-4">
                            AI Overviews zijn niet gelijk. Sommige zoekvragen krijgen een overview, andere niet. Als je slim bent, focus je op vragen waar overviews echt voorkomen.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-4">
                            How-to vragen krijgen altijd overviews. _Hoe maak je een boekhoudsysteem._ _Hoe kies je een accountant._ _Hoe verbeter je je Google ranking._ Deze vragen hebben minstens 80% kans op een overview. Je wilt daar boven staan, want je concurrenten willen dat ook.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-4">
                            Definitievragen ook. _Wat is bruto en netto salaris._ _Wat kost een website._ Koopvragen niet: _koop het beste product._ Daar toont Google nog steeds winkelresultaten en advertenties. Die zijn beter voor jouw webshop dan een AI Overview die je verkoopkansen in een rijtje met drie concurrenten zet.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-4">
                            Controleer in Search Console welke vragen al een AI Overview krijgen. Filtreer op 'impressies' en 'gemiddelde CTR' en vergelijk. Je ziet snel welke zoektermen met lage CTR waarschijnlijk een overview hebben. Focus je hierop en stap uit de race voor termen zonder overviews.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Stap 4: Bouw je onlineautoriteit op</h2>
                        <p className="text-primary/80 leading-relaxed mb-4">
                            Dit is waar het op de lange termijn gebeurt. Minder kliks in de eerste maand is geen ramp als je volgend jaar dubbele omzet hebt, omdat je autoriteit gegroeid is.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-4">
                            AI-modellen kiezen bronnen op basis van vertrouwen. Hoe meer gezaghebbende websites jou noemen, hoe vaker AI je aanbeveelt. Dit is geen SEO-geheimpje, het werkt echt. Daarom doen we dit:
                        </p>
                        <ul className="space-y-4 my-8 pl-6 list-disc marker:text-accent">
                            <li><strong>Vraag gezaghebbende websites om je te noemen.</strong> Journalisten, bloggers, branche-experts. Zorg dat zij jouw expertise kennen. Een artikel dat je aanhaalt als expert heeft meer waarde dan 50 opmerkingen op Reddit.</li>
                            <li><strong>Publiceer regelmatig goed onderzoek.</strong> Rapporten, statistieken, case studies. Dit geeft anderen iets wat ze kunnen citeren. En citaties = vermeldingen = autoriteit.</li>
                            <li><strong>Werk samen met andere autoriteiten.</strong> Co-schrijf artikelen, zit in podcasts, spreek op conferenties. Word gezien als branchekenner.</li>
                        </ul>
                        <p className="text-primary/80 leading-relaxed mb-4">
                            Dit kost maanden, maar het werkt. We zien klanten die dit 6 maanden lang doen, en vervolgens springen hun mentions in AI Overviews sterk omhoog. Meer Overviews = meer merkwaarde = meer vertrouwen = meer conversies.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Stap 5: Meet je impact op conversies, niet alleen CTR</h2>
                        <p className="text-primary/80 leading-relaxed mb-4">
                            Dit is belangrijk: staar je niet blind op CTR. Dat is een maatstaf uit het verleden. Wat telt is inkomsten.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-4">
                            CTR daalt, ja. Maar stel dat je conversieratio stijgt van 1,5% naar 3%, dan verdien je meer dan voorheen, ondanks minder kliks. Dit zie je alleen als je goed meet.
                        </p>
                        <ul className="space-y-4 my-8 pl-6 list-disc marker:text-accent">
                            <li><strong>Track de volledige customer journey.</strong> Van Google Search Console (kliks) tot Google Analytics (conversies) tot je CRM (gesloten deals). Als deze getallen groen zijn, gaat het goed, punt.</li>
                            <li><strong>Vergelijk je ROAS per kanaal.</strong> Zoekverkeer kan minder zijn, maar beter betalen dan Social Media traffic. Welk kanaal geeft het meeste inkomsten per euro? Focus daar.</li>
                            <li><strong>Kijk naar je MRR of ARR.</strong> Monthly Recurring Revenue, Annual Recurring Revenue. Dit zijn de getallen die echt tellen. Groeit die dankzij je SEO-optimalisaties, dan ben je op de goede weg.</li>
                        </ul>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Drie veelgemaakte fouten</h2>
                        <p className="text-primary/80 leading-relaxed mb-4">
                            We zien veel bedrijven dit verkeerd doen. Hier zijn drie fouten die je moet vermijden.
                        </p>
                        <h3 className="text-2xl font-bold text-primary mt-8 mb-4">Fout 1: Panikeren bij CTR-daling</h3>
                        <p className="text-primary/80 leading-relaxed mb-4">
                            Een bedrijf ziet zijn CTR van 4% naar 2,8% gaan en denkt: we moeten drastisch iets veranderen. Nee. Dit is normaal. Google AI Overviews werken. Jij hoeft niet. Je hoeft je CTR niet kunstmatig op te stuwen met trucjes, je hoeft de kwaliteit van je pagina niet aan te raken. Wacht drie maanden, meet je conversies, en kijk dan of je echt inkomsten verliest. Waarschijnlijk niet.
                        </p>
                        <h3 className="text-2xl font-bold text-primary mt-8 mb-4">Fout 2: Geen aandacht geven aan betrouwbaarheid</h3>
                        <p className="text-primary/80 leading-relaxed mb-4">
                            Als je minder bezoekers krijgt, moeten die beter converteren. Dus investeer in trust signals: reviews, testimonials, certificaten, garanties. Een bezoeker die via AI Overview komt, heeft je naam al zien staan als bron. Maar hij twijfelt nog. Maak die twijfel weg.
                        </p>
                        <h3 className="text-2xl font-bold text-primary mt-8 mb-4">Fout 3: Alleen schrijven voor AI, niet voor gebruikers</h3>
                        <p className="text-primary/80 leading-relaxed mb-4">
                            Sommige bedrijven beginnen tekst zo te schrijven dat AI het favoriet vindt: staccato zinnen, veel keywords, geen persoonlijkheid. Slecht idee. Jouw website moet eerst voor mensen geschreven zijn. Als mensen je tekst niet willen lezen, leest AI hem ook niet goed. Schrijf voor je doelgroep. Dan volgt AI automatisch.
                        </p>

                        <div className="bg-accent/5 rounded-3xl p-8 md:p-12 my-12 border border-accent/10">
                            <h3 className="text-2xl font-bold text-primary mb-4 mt-0">Laat ons je SEO-strategie checken voor AI Overviews</h3>
                            <p className="text-primary/80 leading-relaxed mb-6">
                                Google AI Overviews veranderen alles. Waar vorig jaar SEO werkte, moet je vandaag anders aanpakken. We doen gratis audits op je huidige zichtbaarheid in AI Overviews en vertellen je precies wat je kunt doen. <Link to="/blogs/seo/seo-voor-mkb-google-positie-verbeteren" className="text-accent hover:underline">Lees ook ons artikel over SEO voor MKB als je meer wilt weten.</Link>
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Link to="/contact" className="btn-magnetic bg-accent text-white px-6 py-3 rounded-full font-bold text-sm hover:bg-accent/90 transition-colors inline-block no-underline">
                                    Plan je gratis audit
                                </Link>
                                <Link to="/diensten" className="px-6 py-3 rounded-full font-bold text-sm text-primary hover:bg-black/5 transition-colors border border-primary/20 inline-block no-underline">
                                    Bekijk SEO-diensten
                                </Link>
                            </div>
                        </div>

                        <hr className="my-16 border-primary/10" />

                        <h2 className="text-3xl font-bold text-primary mb-8">Veelgestelde vragen</h2>

                        <div className="space-y-6 not-prose">
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Waarom daalt mijn CTR door Google AI Overviews?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Google AI Overviews geven direct antwoord in de zoekresultaten. Voor veel vragen hoeft iemand dus niet meer door te klikken naar je website. Je website krijgt minder kliks terwijl je hetzelfde zoekverkeer aantrekt. Dit is normaal voor informatievragen, maar voor commerciële vragen kun je nog steeds veel bezoeken krijgen als je goed aansluit op wat het AI-model toont.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoe meet ik of AI Overviews mijn traffic beïnvloeden?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Controleer Google Search Console op twee dingen: het aantal impressies per keyword (zoekvragen waarbij je toont) en de CTR (het percentage dat werkelijk doorklikt). Als je merkt dat een keyword nu veel meer impressies krijgt maar minder kliks, dan raakt AI Overviews je waarschijnlijk. Je ziet ook in Google Analytics of je zoekverkeer stagneert terwijl Search Console meer impressies toont.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Kunnen mijn producten in AI Overviews komen?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Ja, maar niet automatisch. AI Overviews tonen producten als je op de eerste pagina van Google staat en je product data helder gestructureerd hebt (met schema-markup). Je moet ook beter zijn dan je concurrenten: beter beschreven, meer reviews, betere beschikbaarheid. Het helpt als je ook in Google Shopping staat.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat is het verschil tussen AI Overviews en reguliere snippets?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Reguliere snippets tonen tekst van één pagina plus een link. AI Overviews combineert informatie van meerdere websites en geeft direct antwoord op je vraag. Voor informatievragen sterven snippets en featured snippets uit; die worden vervangen door AI Overviews. Voor commerciële vragen en product-gerelateerde vragen blijft de traditionele layout langer.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Moet ik mijn SEO-strategie aanpassen door AI Overviews?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Ja en nee. De basis van goed SEO—autoritatieve content, snelle website, goede ervaring—blijft hetzelfde. Maar je moet veel meer nadenken over de intentie van je bezoeker. Voor informatievragen zul je minder directe kliks zien, maar je kunt nog steeds indruk maken in de AI Overview en vertrouwen opbouwen. Voor commerciële vragen blijf je op de eerste pagina dus geld verdienen.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoe krijg ik meer kliks vanuit AI Overviews?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Zorg dat je link in de AI Overview-bronnen staat vermeld. De meeste AI Overviews tonen bronnen aan het einde. Als jij daar staat, klik je veel vaker door. Dit gebeurt automatisch als je op pagina 1 staat, goed antwoord geeft en je website snel en betrouwbaar is. Voeg ook 'Lees meer' call-to-actions toe na je antwoord, zodat lezers sneller doorklikken naar je site.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Welke keywords worden het meest geraakt door AI Overviews?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Informatie- en how-to-vragen. Bijvoorbeeld 'hoe werkt ...', 'wat is ...', 'waarom ...'. Deze vragen krijgen direct antwoord van AI. Commerciële vragen zoals 'buy ...' en 'price ...' hebben nog steeds veel directe kliks naar winkelresultaten en advertenties. Als jij die informatievragen goed beantwoordt, bouw je autoriteit op die later tot klanten leidt.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </article>

            {/* Bottom CTA to catch readers at the end */}
            <section className="w-full pb-32 px-6">
                <div className="max-w-4xl mx-auto bg-primary rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
                    <h2 className="relative z-10 font-drama italic text-background text-3xl sm:text-4xl md:text-5xl mb-6">Wil je in AI Overviews verschijnen?</h2>
                    <p className="relative z-10 font-sans text-background/70 text-lg mb-10 max-w-xl mx-auto">
                        Plan een gratis gesprek met onze SEO-experts. We checken waar je nu staat in AI Overviews en geven concrete stappen hoe je autoriteit en conversies opbouwt.
                    </p>
                    <Link to="/contact" className="relative z-10 btn-magnetic inline-flex items-center justify-center bg-accent text-background font-sans font-bold text-lg px-10 py-4 rounded-[2rem] hover:bg-accent/90 transition-colors">
                        Plan een strategisch overleg
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
