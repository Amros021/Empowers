import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ChevronRight, User } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function BlogPostGoogleAdsSeizoensgebondenAdverteren() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen selection:bg-accent/30 selection:text-dark flex flex-col bg-background">
            <Helmet>
                <title>Google Ads seizoensgebonden adverteren: speel in op pieken | Empowers</title>
                <meta name="description" content="Pieken in jouw branche slim benutten met Google Ads? Lees hoe je vooraf opbouwt, tijdens de piek wint en daarna niets weglekt. Praktische aanpak voor MKB en webshops." />
                <link rel="canonical" href="https://www.empowers.nl/blogs/google-ads/google-ads-seizoensgebonden-adverteren-speel" />
                <meta property="og:title" content="Google Ads seizoensgebonden adverteren: speel in op pieken | Empowers" />
                <meta property="og:description" content="Pieken in jouw branche slim benutten met Google Ads? Lees hoe je vooraf opbouwt, tijdens de piek wint en daarna niets weglekt. Praktische aanpak voor MKB en webshops." />
                <meta property="og:url" content="https://www.empowers.nl/blogs/google-ads/google-ads-seizoensgebonden-adverteren-speel" />
                <meta property="og:type" content="article" />
                <meta property="og:image" content="https://www.empowers.nl/images/blogs/google-ads-seizoensgebonden-adverteren-speel.jpg" />
                <script type="application/ld+json">{JSON.stringify({
                    "@context": "https://schema.org",
                    "@graph": [
                        {
                            "@type": "Article",
                            "headline": "Google Ads seizoensgebonden adverteren: speel in op pieken",
                            "image": "https://www.empowers.nl/images/blogs/google-ads-seizoensgebonden-adverteren-speel.jpg",
                            "description": "Pieken in jouw branche slim benutten met Google Ads? Lees hoe je vooraf opbouwt, tijdens de piek wint en daarna niets weglekt.",
                            "author": { "@type": "Organization", "name": "Empowers", "url": "https://www.empowers.nl" },
                            "publisher": { "@type": "Organization", "name": "Empowers", "url": "https://www.empowers.nl" },
                            "datePublished": "2026-05-05T09:00:00+02:00",
                            "dateModified": "2026-05-05T09:00:00+02:00",
                            "url": "https://www.empowers.nl/blogs/google-ads/google-ads-seizoensgebonden-adverteren-speel"
                        },
                        {
                            "@type": "FAQPage",
                            "mainEntity": [
                                { "@type": "Question", "name": "Hoe ver van tevoren start je een seizoenscampagne?", "acceptedAnswer": { "@type": "Answer", "text": "Reken op vier tot zes weken aanloop voor consumentenpieken zoals Sinterklaas, Black Friday of Moederdag. Smart Bidding heeft minimaal twee weken nodig om patronen te leren, en je wilt voor de echte piek al stabiel draaien. Voor B2B-pieken die kleiner en langer zijn (zoals begin-van-het-kwartaal) kan twee weken vooraf voldoende zijn." } },
                                { "@type": "Question", "name": "Moet ik mijn budget verhogen tijdens een piek?", "acceptedAnswer": { "@type": "Answer", "text": "Bijna altijd. Concurrentie veilt op dezelfde momenten, dus je CPC stijgt mee. Verhoog niet het maximum maar het dagbudget. Bij Maximize Conversions of tROAS volgt het systeem de vraag, mits je niet beperkt wordt door het dagbudget. Reken doorgaans op een verdubbeling van je gewone dagbudget tijdens echte piekdagen, soms wat meer." } },
                                { "@type": "Question", "name": "Werkt Smart Bidding goed tijdens een piek?", "acceptedAnswer": { "@type": "Answer", "text": "Ja, op voorwaarde dat je de seizoensaanpassing in Google Ads correct instelt. Geef het systeem een seizoensaanpassing op met de verwachte conversieratio-stijging en de exacte datums. Zo weet de algoritme dat het hoger mag bieden zonder verkeerde conclusies te trekken uit een tijdelijke piek." } },
                                { "@type": "Question", "name": "Welke seizoenen telt voor jouw branche?", "acceptedAnswer": { "@type": "Answer", "text": "Voor webshops: Black Friday, Sinterklaas, Kerst, Valentijn, Moederdag, Vaderdag, en de seizoenswissels (zomer/winter). Voor diensten: vaak januari (nieuwe budgetten, nieuwe doelen) en september (terug van vakantie). Check Google Trends en je eigen Analytics-historie. De pieken die jij ziet, zien jouw concurrenten ook." } },
                                { "@type": "Question", "name": "Hoe voorkom je dat je na de piek geld blijft wegspoelen?", "acceptedAnswer": { "@type": "Answer", "text": "Plan een afbouwperiode net zo zorgvuldig als de opbouw. Schroef budgetten en biedingen geleidelijk terug, niet in één klap. En zet je seizoensaanpassing in Google Ads ook weer uit. Veel adverteerders vergeten dat en houden tot weken later een opgeblazen kostenstructuur." } },
                                { "@type": "Question", "name": "Loont seizoensgebonden adverteren ook voor kleine adverteerders?", "acceptedAnswer": { "@type": "Answer", "text": "Voor kleine MKB-budgetten zijn pieken juist het slimste moment om te adverteren. De zoekintentie is hoog, de conversiekans is groter en je kunt je beperkte budget concentreren waar het het meeste oplevert. Liever vier weken volle gas dan twaalf maanden half." } }
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
                        { "@type": "ListItem", "position": 3, "name": "Google Ads", "item": "https://www.empowers.nl/blogs/google-ads" },
                        { "@type": "ListItem", "position": 4, "name": "Google Ads seizoensgebonden adverteren", "item": "https://www.empowers.nl/blogs/google-ads/google-ads-seizoensgebonden-adverteren-speel" }
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
                        <Link to="/blogs/google-ads" className="hover:text-accent transition-colors">Google Ads</Link>
                        <ChevronRight className="w-3 h-3" />
                        <span className="text-primary truncate">Google Ads seizoensgebonden adverteren</span>
                    </nav>

                    {/* Header */}
                    <header className="mb-16">
                        <div className="inline-block px-3 py-1 bg-accent/10 text-accent font-mono text-xs uppercase tracking-widest rounded-full mb-6">
                            Google Ads
                        </div>
                        <h1 className="font-sans font-bold text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight mb-8">
                            Google Ads seizoensgebonden adverteren: speel in op pieken
                        </h1>

                        <div className="flex flex-wrap items-center gap-6 text-sm font-sans text-primary/60 border-y border-primary/10 py-6">
                            <div className="flex items-center gap-2">
                                <User className="w-4 h-4" />
                                <span>Empowers Redactie</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>5 mei 2026</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>9 minuten leestijd</span>
                            </div>
                        </div>
                    </header>

                    {/* Featured Image */}
                    <figure className="w-full h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden mb-16 relative bg-primary">
                        <div className="absolute inset-0 bg-[url('/images/blogs/google-ads-seizoensgebonden-adverteren-speel.jpg')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </figure>

                    {/* Content */}
                    <div className="prose prose-lg prose-headings:font-sans prose-headings:font-bold prose-headings:text-primary prose-p:font-sans prose-p:text-primary/80 prose-p:leading-relaxed max-w-none">
                        <p className="text-xl md:text-2xl font-medium leading-relaxed mb-10 text-primary">
                            Pieken in jouw markt zijn voorspelbaar. Black Friday valt elk jaar op dezelfde plek, Moederdag staat vast en de zomer komt altijd. Toch struikelen de meeste adverteerders telkens weer over hetzelfde patroon: te laat starten, paniekvol bijsturen tijdens de piek en daarna budget weglekken. Goed seizoensgebonden adverteren begint zes weken voor de piek, niet zes dagen. En het stopt niet zodra de piek voorbij is. Lees hoe je dat ritme bouwt zonder je ROAS te verbranden.
                        </p>

                        <p className="text-primary/80 leading-relaxed mb-6">
                            Veel ondernemers behandelen seizoensaanpassingen als een spurt. Even hard erin op de dag zelf, en daarna door naar het volgende kwartaal. Het probleem: Google Ads is geen simpele veiling waar je op de juiste dag opduikt en wint. Het is een algoritme dat patronen leert, en dat algoritme heeft tijd nodig om jouw seizoenspiek goed te begrijpen.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Waarom is seizoensgebonden adverteren zo lastig?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Het probleem zit in de combinatie van drie factoren. Google's bidding-algoritme leert van historische data, je concurrenten zitten precies op dezelfde piekmomenten, en je conversieratio gedraagt zich tijdens een piek anders dan in een normale week. Wie deze drie factoren niet apart aanpakt, ziet een paar dagen na het hoogtepunt zijn CPA exploderen. En vraagt zich dan af waar het misging.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Smart Bidding gebruikt een leerperiode van rond de twee weken om biedingen te kalibreren. Stop je daar abrupt extra budget in vlak voor Black Friday, dan denkt het systeem dat de bodem van de markt is verschoven. Het hapert. De resultaten zakken in. En precies in die paar dagen waarin het ertoe doet, draait jouw account in de verkeerde versnelling.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Daar komt bij dat de concurrentie ook spaart en wacht. Vlak voor de piek schieten CPC's omhoog. Wie pas op de dag zelf instapt, betaalt een fors hogere klikprijs dan wie een week eerder al zat te draaien. En krijgt dan ook nog eens te maken met een algoritme dat zelf nog moet wennen.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoeveel weken vooraf start je je seizoenscampagne?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Voor consumentenpieken zoals Black Friday, Sinterklaas of Moederdag wil je vier tot zes weken voor de piek beginnen. Bij grote retail-momenten gaan we vaak nog ruimer zitten. Dat betekent niet dat je dagbudget al volledig opengaat. Het betekent dat campagnes draaien, biedingen leren en eventuele nieuwe assets hun beoordeling van Google krijgen voordat de echte vraag komt.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            B2B en dienstverleners hebben kleinere maar langere pieken. Begin van het kwartaal, na de zomer, vlak na nieuwjaar. Voor die golven volstaan doorgaans een paar weken aanloop. Wel met dezelfde regel: niet abrupt schakelen, niet wachten tot de eerste leadaanvraag binnenkomt.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Maak één concrete planning per piek met drie fases: opbouw, piek, afbouw. In elke fase stel je vooraf je dagbudget en je verwachte CPA vast. Wat je niet vooraf afspreekt, ga je in de hectiek niet meer rustig overdenken.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe stel je Smart Bidding goed in voor seizoenen?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Google Ads heeft hier een specifieke functie voor: seizoensaanpassingen. Je vertelt het systeem dat je tussen specifieke datums een hogere conversieratio verwacht, bijvoorbeeld 30 procent boven normaal. Het algoritme weet dan dat het tijdens die periode mag opveren, en haalt na afloop ook netjes weer adem. Zonder seizoensaanpassing rekent Smart Bidding de pieksprong door als nieuwe norm. Dat veroorzaakt overbieden in de week na de piek.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De seizoensaanpassing zit verstopt onder Hulpmiddelen, dan Bieden. Je geeft een start- en einddatum, een verwachte conversieratio-stijging in procenten, en je selecteert de campagnes waarop het van toepassing is. Maximaal veertien dagen per aanpassing. Voor langere periodes splits je in twee blokken.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Laat het opgeven van een aanpassing geen gokwerk zijn. Kijk naar je eigen historische data van vorig jaar. Hoeveel hoger lag je conversieratio toen op die exacte dagen vergeleken met je gemiddelde? Daar baseer je het percentage op. Geen historie? Wees dan voorzichtig. Een te hoge inschatting is gevaarlijker dan een conservatieve.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Welke campagnes pak je aan tijdens een piek?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Niet alles even hard. Begin bij de campagnes die het dichtst bij de aankoop zitten: branded zoekopdrachten, retargeting via Display, en Performance Max op je bestsellers. Dat is je oogstgrond. Daar veranderen mensen het snelst van browser naar koper.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Bovenin de funnel mag je rustiger blijven. Een Display-campagne voor merkbekendheid hoeft niet ineens drie keer haar budget. Sterker, juist tijdens een piek zijn die kliks duurder zonder evenredig rendement. Bewaar je extra budget voor de plekken waar conversie binnen handbereik ligt.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Webshops met Performance Max werken het beste met aparte product-feeds rond grote pieken. Een feed waarin je top-100 producten extra worden gemarkeerd, of een aparte campagne met hogere bidaspiraties op je hoogste-marge artikelen. Daarmee stuur je het algoritme richting wat jij het belangrijkst vindt, zonder de hele structuur om te gooien.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe pas je je advertentieteksten aan?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Vermeld de aanleiding expliciet in de kop. Niet "Hoge kwaliteit, scherpe prijs" maar "Black Friday korting tot 40 procent". Mensen scannen advertenties razendsnel tijdens piekperiodes. Wie niet binnen drie woorden duidelijk maakt waarom nu het juiste moment is, verliest de klik.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Voeg een aftellingsfunctie toe waar relevant. De {'{COUNTDOWN}'} parameter in Google Ads laat zien hoeveel uren of dagen er nog over zijn. Dat geeft urgentie zonder dat het opgeklopt voelt. Werkt vooral bij eindigende aanbiedingen. Niet gebruiken als je actie eigenlijk geen einddatum heeft, want dan voelt het als manipulatie.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Update je advertenties minimaal een week voor de piek. Google heeft tijd nodig om nieuwe assets te beoordelen en te leren hoe ze presteren. Een advertentie die op de ochtend zelf live gaat, krijgt amper kans om te draaien voor het hoogtepunt.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Welke fouten zien we telkens terug?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Drie patronen komen vaak voorbij in audits van seizoenscampagnes die niet goed liepen. De eerste is paniekoptimaliseren tijdens de piek zelf. Iemand kijkt op dag één naar de cijfers, ziet dat de CPC hoger ligt dan normaal en draait alles terug. Een paar uur later staat de concurrentie er alleen voor, en is jouw piekkans verspild. Smart Bidding heeft dagen nodig om te kalibreren. Ingrijpen in de eerste 48 uur van een nieuwe instelling is bijna altijd te vroeg.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een tweede valkuil is vergeten af te bouwen. De piek voorbij, de seizoensaanpassing nog actief, het verhoogde budget nog open. Het algoritme blijft hoog bieden op een markt waar de vraag is verdampt. Reken op een week of twee waarin je elke dag een stukje terugschroeft. Niet abrupt, want dan verstoor je opnieuw het leerproces.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De derde valkuil is het negeren van mobile. Tijdens consumentenpieken loopt het mobiele aandeel vaak verder op dan al gedacht. Wie zijn landingspagina niet vooraf op mobiel test, ziet conversies wegvallen die hij wel betaalde aan kliks. Check je mobiele snelheid en checkout-flow vier weken voor de piek, niet vier uur.
                        </p>

                        <div className="bg-accent/5 rounded-3xl p-8 md:p-12 my-12 border border-accent/10">
                            <h3 className="text-2xl font-bold text-primary mb-4 mt-0">Hoe pak je de volgende piek aan voor jouw bedrijf?</h3>
                            <p className="mb-6">
                                Wil je weten welke seizoenen voor jouw branche écht renderen en hoe je je Google Ads-account daarop voorbereidt? We bekijken samen je historische data, je huidige campagnestructuur en je productmix. Daarna krijg je een concreet draaiboek voor de volgende drie pieken. Plan een gesprek via de <Link to="/contact" className="text-accent hover:underline">contactpagina</Link>, of bekijk onze <Link to="/diensten" className="text-accent hover:underline">diensten</Link> voor wat we voor MKB en webshops doen.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Link to="/contact" className="btn-magnetic bg-accent text-white px-6 py-3 rounded-full font-bold text-sm hover:bg-accent/90 transition-colors inline-block no-underline">
                                    Plan een Google Ads-audit
                                </Link>
                                <Link to="/diensten" className="px-6 py-3 rounded-full font-bold text-sm text-primary hover:bg-black/5 transition-colors border border-primary/20 inline-block no-underline">
                                    Bekijk onze diensten
                                </Link>
                            </div>
                        </div>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe meet je of je piekstrategie werkte?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Vergelijk niet met je gewone weekgemiddelde. Vergelijk met dezelfde piekperiode vorig jaar. Een ROAS van vier in piekweek lijkt mager als je gemiddelde acht is, maar geweldig als je vorig jaar op drie zat. Pas alleen jaar-op-jaar laat zien of je de piek beter benutte dan voorheen.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Drie metrics die ertoe doen: aandeel impressies (zag je doelgroep je überhaupt), conversiekosten op je hoofdcampagnes, en marge per conversie. Dat laatste wordt vaak vergeten. Korting van 30 procent kan ROAS opkrikken op het oog, terwijl je marge keldert. Pak je werkelijke winst per verkoop, niet alleen de omzet.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Documenteer wat werkte en wat niet, meteen in de week na de piek. Niet pas in december voor de evaluatie van januari. Wat verse herinneringen kunnen onthullen, vergeet je verrassend snel. Een eenvoudig document met "wat zou ik anders doen" levert volgend jaar het verschil tussen aanvallen en achternalopen.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Werkt seizoensgebonden adverteren ook bij beperkte budgetten?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Voor adverteerders met een kleiner budget is concentratie rond pieken vaak juist slimmer dan het hele jaar door even hard adverteren. De zoekintentie is in piekperiodes hoger, mensen klikken sneller door en kopen sneller. Dat betekent dat dezelfde euro meer rendement oplevert tijdens een goed gekozen piek.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Dat lukt alleen als je niet drie pieken per kwartaal probeert te pakken. Kies er één of twee waarin je echt sterk staat. Een traiteur richt zich op kerst en de feestdagen, niet op Black Friday. Een sportwinkel start in het voorjaar voor de hardloopaanmeldingen. Welke piek is van jou? Daar leg je het accent.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Lees ook onze blog over <Link to="/blogs/google-ads/google-ads-schalen-zonder-budget-verdubbelen" className="text-accent hover:underline">Google Ads schalen zonder je budget te verdubbelen</Link>, of duik in de uitleg over <Link to="/blogs/google-ads/smart-bidding-uitgelegd-wanneer-wanneer" className="text-accent hover:underline">Smart Bidding</Link> als je de bidding-strategie helemaal wilt begrijpen. Voor de bredere context van budget en bidding helpt ook <Link to="/blogs/google-ads/google-ads-quality-score-verhogen" className="text-accent hover:underline">Quality Score verhogen</Link>.
                        </p>

                        <hr className="my-16 border-primary/10" />

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Veelgestelde vragen over seizoensgebonden adverteren in Google Ads</h2>

                        <div className="space-y-6 not-prose">
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoe ver van tevoren start je een seizoenscampagne?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Reken op vier tot zes weken aanloop voor consumentenpieken zoals Sinterklaas, Black Friday of Moederdag. Smart Bidding heeft minimaal twee weken nodig om patronen te leren, en je wilt voor de echte piek al stabiel draaien. Voor B2B-pieken die kleiner en langer zijn (zoals begin-van-het-kwartaal) kan twee weken vooraf voldoende zijn.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Moet ik mijn budget verhogen tijdens een piek?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Bijna altijd. Concurrentie veilt op dezelfde momenten, dus je CPC stijgt mee. Verhoog niet het maximum maar het dagbudget. Bij Maximize Conversions of tROAS volgt het systeem de vraag, mits je niet beperkt wordt door het dagbudget. Reken doorgaans op een verdubbeling van je gewone dagbudget tijdens echte piekdagen, soms wat meer.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Werkt Smart Bidding goed tijdens een piek?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Ja, op voorwaarde dat je de seizoensaanpassing in Google Ads correct instelt. Geef het systeem een seizoensaanpassing op met de verwachte conversieratio-stijging en de exacte datums. Zo weet de algoritme dat het hoger mag bieden zonder verkeerde conclusies te trekken uit een tijdelijke piek.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Welke seizoenen telt voor jouw branche?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Voor webshops: Black Friday, Sinterklaas, Kerst, Valentijn, Moederdag, Vaderdag, en de seizoenswissels (zomer/winter). Voor diensten: vaak januari (nieuwe budgetten, nieuwe doelen) en september (terug van vakantie). Check Google Trends en je eigen Analytics-historie. De pieken die jij ziet, zien jouw concurrenten ook.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoe voorkom je dat je na de piek geld blijft wegspoelen?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Plan een afbouwperiode net zo zorgvuldig als de opbouw. Schroef budgetten en biedingen geleidelijk terug, niet in één klap. En zet je seizoensaanpassing in Google Ads ook weer uit. Veel adverteerders vergeten dat en houden tot weken later een opgeblazen kostenstructuur.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Loont seizoensgebonden adverteren ook voor kleine adverteerders?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Voor kleine MKB-budgetten zijn pieken juist het slimste moment om te adverteren. De zoekintentie is hoog, de conversiekans is groter en je kunt je beperkte budget concentreren waar het het meeste oplevert. Liever vier weken volle gas dan twaalf maanden half.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </article>

            {/* Bottom CTA */}
            <section className="w-full pb-32 px-6">
                <div className="max-w-4xl mx-auto bg-primary rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
                    <h2 className="relative z-10 font-drama italic text-background text-3xl sm:text-4xl md:text-5xl mb-6">Klaar voor de volgende piek?</h2>
                    <p className="relative z-10 font-sans text-background/70 text-lg mb-10 max-w-xl mx-auto">
                        Plan een gratis Google Ads-audit. We bekijken jouw historische seizoensdata, je huidige structuur en bouwen een draaiboek voor de eerstvolgende piek waarin jij wilt scoren.
                    </p>
                    <Link to="/contact" className="relative z-10 btn-magnetic inline-flex items-center justify-center bg-accent text-background font-sans font-bold text-lg px-10 py-4 rounded-[2rem] hover:bg-accent/90 transition-colors">
                        Plan een Google Ads-audit
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
