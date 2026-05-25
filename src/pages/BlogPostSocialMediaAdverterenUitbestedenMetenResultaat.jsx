import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ChevronRight, User } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function BlogPostSocialMediaAdverterenUitbestedenMetenResultaat() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen selection:bg-accent/30 selection:text-dark flex flex-col bg-background">
            <Helmet>
                <title>Social media adverteren uitbesteden: zo meet je of het werkt | Empowers</title>
                <meta
                    name="description"
                    content="Heb je social media adverteren uitbesteed en wil je weten of het bureau echt resultaat levert? Dit zijn de cijfers waar je op stuurt, de rapportages die wel kloppen en de signalen waar je vandaag op moet drukken."
                />
                <meta name="keywords" content="social media adverteren uitbesteden meten, social ads bureau resultaat, ROAS meten social media, social ads rapportage" />
                <link rel="canonical" href="https://www.empowers.nl/blogs/social-ads/social-media-adverteren-uitbesteden-meten-resultaat" />

                <meta property="og:type" content="article" />
                <meta property="og:title" content="Social media adverteren uitbesteden: zo meet je of het werkt | Empowers" />
                <meta
                    property="og:description"
                    content="Heb je social media adverteren uitbesteed en wil je weten of het bureau echt resultaat levert? Dit zijn de cijfers waar je op stuurt en de signalen waarop je vandaag drukt."
                />
                <meta property="og:url" content="https://www.empowers.nl/blogs/social-ads/social-media-adverteren-uitbesteden-meten-resultaat" />
                <meta property="og:image" content="https://www.empowers.nl/images/blogs/social-media-adverteren-uitbesteden-meten-resultaat.jpg" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Social media adverteren uitbesteden: zo meet je of het werkt | Empowers" />
                <meta
                    name="twitter:description"
                    content="Heb je social media adverteren uitbesteed en wil je weten of het bureau echt resultaat levert? Dit zijn de cijfers waar je op stuurt."
                />
                <meta name="twitter:image" content="https://www.empowers.nl/images/blogs/social-media-adverteren-uitbesteden-meten-resultaat.jpg" />

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Article",
                        "headline": "Social media adverteren uitbesteden: zo meet je of het werkt",
                        "description": "Heb je social media adverteren uitbesteed? Dit is hoe je in 30 minuten per maand vaststelt of het bureau resultaat levert of alleen knopjes draait.",
                        "image": "https://www.empowers.nl/images/blogs/social-media-adverteren-uitbesteden-meten-resultaat.jpg",
                        "datePublished": "2026-05-21T09:00:00+02:00",
                        "dateModified": "2026-05-21T09:00:00+02:00",
                        "author": { "@type": "Organization", "name": "Empowers" },
                        "publisher": {
                            "@type": "Organization",
                            "name": "Empowers",
                            "logo": {
                                "@type": "ImageObject",
                                "url": "https://www.empowers.nl/empowers-logo-color.svg"
                            }
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
                            { "@type": "ListItem", "position": 4, "name": "Social media adverteren uitbesteden meten", "item": "https://www.empowers.nl/blogs/social-ads/social-media-adverteren-uitbesteden-meten-resultaat" }
                        ]
                    })}
                </script>

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": [
                            {
                                "@type": "Question",
                                "name": "Welke metrics laat ik mijn social ads bureau elke maand rapporteren?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Houd het kort en hard: besteed budget, aantal conversies, kosten per conversie, ROAS, omzet uit ads, gemiddelde orderwaarde en de top drie creatives op rendement. Daarbij hoort altijd een korte schriftelijke duiding van wat er volgende maand verandert. Bereik en impressies horen op de tweede pagina, niet op de eerste."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Hoe weet ik of het bureau ROAS opklopt met merknaam-clicks?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Vraag om een uitsplitsing tussen warme en koude doelgroepen. Retargeting en branded audiences scoren altijd een mooie ROAS omdat die mensen je al kennen. Het echte werk gebeurt op koude prospecting. Als je bureau alleen het totaal laat zien, mis je 80 procent van het verhaal."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Wat is een realistische ROAS na drie maanden uitbesteden?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Dat verschilt per branche en marge. Een webshop met 50 procent marge mag mikken op een blended ROAS van 3 tot 4. Een dienstverlener stuurt liever op kosten per gekwalificeerde lead. Belangrijker dan een absoluut getal: zie je elke maand verbetering op dezelfde meetmethode? Dan zit het goed."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Welke tools heb ik nodig om mee te kunnen kijken?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Een gedeelde Google Analytics 4 view, leestoegang tot Meta Ads Manager, leestoegang tot Google Ads als ook daar wordt geadverteerd, en een gedeeld dashboard in Looker Studio of een vergelijkbare tool. Vraag bij start van de samenwerking om alle accounts op jouw naam te zetten. Niet op die van het bureau."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Hoe weet ik of een rapportage eerlijk is?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Eerlijke rapporten benoemen wat er niet werkte. Drie maanden achter elkaar alleen groene cijfers is verdacht. Vraag actief naar mislukte tests, gestopte campagnes en wat de leerpunten waren. Een bureau dat geen verliezen kan laten zien, heeft ze ofwel niet gedraaid, ofwel verstopt onder het tapijt."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Wanneer is het tijd om afscheid te nemen van mijn social ads bureau?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Twee signalen zijn helder. Eerst: de kosten per conversie stijgen al vier maanden zonder uitleg of plan om dat om te buigen. Daarnaast: rapportages worden dunner, gesprekken vager en je krijgt steeds vaker de junior aan de lijn in plaats van de specialist. Dan is wisselen meestal goedkoper dan blijven zitten."
                                }
                            }
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
                        <span className="text-primary truncate">Uitbesteden meten...</span>
                    </nav>

                    <header className="mb-16">
                        <div className="inline-block px-3 py-1 bg-accent/10 text-accent font-mono text-xs uppercase tracking-widest rounded-full mb-6">
                            Social Ads
                        </div>
                        <h1 className="font-sans font-bold text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight mb-8">
                            Social media adverteren uitbesteden: zo meet je of het werkt
                        </h1>

                        <div className="flex flex-wrap items-center gap-6 text-sm font-sans text-primary/60 border-y border-primary/10 py-6">
                            <div className="flex items-center gap-2">
                                <User className="w-4 h-4" />
                                <span>Empowers Redactie</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>21 mei 2026</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>8 minuten leestijd</span>
                            </div>
                        </div>
                    </header>

                    <figure className="w-full h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden mb-16 relative bg-primary">
                        <div className="absolute inset-0 bg-[url('/images/blogs/social-media-adverteren-uitbesteden-meten-resultaat.jpg')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </figure>

                    <div className="prose prose-lg max-w-none prose-headings:font-sans prose-headings:font-bold prose-headings:text-primary prose-a:text-accent prose-a:underline hover:prose-a:text-accent/80">
                        <p className="text-lg leading-relaxed text-primary/80 mb-8">
                            Social media adverteren uitbesteden is pas slim als je ook kunt meten of het werkt. Te veel MKB-ondernemers tekenen een mooi contract, ontvangen elke maand een rapport vol groene grafieken en vertrouwen erop dat het wel goed zit. Dan komt het kwartaalgesprek met de boekhouder en blijkt dat de omzet niet is meegegroeid. In dit stuk laten we zien hoe je in een half uur per maand vaststelt of jouw social ads bureau echt vakwerk levert of vooral geld doorzet en mooie woorden produceert.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">
                            Waarom de meeste rapportages niets zeggen
                        </h2>

                        <p className="text-primary/80 leading-relaxed mb-4">
                            Een gemiddeld maandrapport zit vol vanity-metrics. Bereik, impressies, kliks, een vrolijke grafiek met een omhoog-pijl. Het probleem? Geen van die cijfers zegt iets over hoeveel klanten je erbij hebt gekregen. Bereik kun je opkopen voor een paar tientjes per duizend mensen. Impressies stapelen zich op zodra je budget verhoogt. Een rapport dat daarop leunt, is reclame voor het bureau, geen analyse van jouw business.
                        </p>

                        <p className="text-primary/80 leading-relaxed mb-4">
                            Een rapport dat wel iets zegt, opent met geld. Hoeveel ging erin, hoeveel kwam eruit, wat kostte een conversie en wat is de richting voor volgende maand. Klaar. Alles wat daarna komt is detail, geen kern.
                        </p>

                        <p className="text-primary/80 leading-relaxed mb-4">
                            Als jouw rapportage er anders uitziet, is dat een rood signaal. Niet altijd kwaadwillig, soms gewoon luiheid. Maar wel iets om binnen veertien dagen aan te kaarten.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">
                            De zeven KPI's die wel kloppen
                        </h2>

                        <p className="text-primary/80 leading-relaxed mb-4">
                            We werken al jaren met MKB-klanten die hun social ads hebben uitbesteed. Een paar getallen komen telkens terug als het draait om de vraag of het bureau resultaat levert. Hier zijn ze, zonder franje.
                        </p>

                        <p className="text-primary/80 leading-relaxed mb-4">
                            <strong>Besteed budget</strong> is de basis. Geen verrassingen: wat je hebt afgesproken, is wat erin gaat. Een afwijking van meer dan tien procent zonder vooraankondiging is een gesprek waard. <strong>Aantal conversies</strong> is wat het oplevert in eenheden. Niet kliks, niet leads-die-bedoeld-waren-als-iets-anders, maar een afgeronde aankoop of een gekwalificeerde aanvraag.
                        </p>

                        <p className="text-primary/80 leading-relaxed mb-4">
                            <strong>Kosten per conversie</strong> brengt de eerste twee samen. Hier zie je vakmanschap. Een goede specialist krijgt deze kosten elke maand een stukje lager of houdt ze gelijk bij dalend handelsklimaat. <strong>ROAS</strong> (Return on Ad Spend) is de omzet gedeeld door het advertentiebudget. Voor webshops het belangrijkste getal van allemaal. Bij dienstverleners minder hard, omdat de uiteindelijke omzet pas weken later binnenkomt.
                        </p>

                        <p className="text-primary/80 leading-relaxed mb-4">
                            <strong>Aandeel nieuwe klanten</strong> versus terugkerende klanten zegt iets over wat de campagnes echt doen. Een ROAS van 5 die voor 90 procent uit retargeting komt, is een mooi cijfer met weinig fundament. <strong>Conversiepercentage op de landingspagina</strong> laat zien of het bureau ook denkt aan wat er na de klik gebeurt. En tot slot: <strong>de top drie creatives op rendement</strong>, met een korte uitleg waarom die het beter doen dan de rest.
                        </p>

                        <h3 className="text-2xl font-bold text-primary mt-8 mb-4">
                            Wat je per dienst kunt verwachten
                        </h3>

                        <p className="text-primary/80 leading-relaxed mb-4">
                            Een webshop met een gezonde marge wil graag een blended ROAS tussen 3 en 4 zien na drie maanden. Lager dan 2 is een serieus probleem. Hoger dan 6 is verdacht: dan zit er waarschijnlijk veel branded verkeer in. Voor B2B-dienstverleners draait het om kosten per gekwalificeerde lead. Reken bij gemiddelde MKB-diensten op ergens tussen 25 en 75 euro per echt geinteresseerde aanvraag, afhankelijk van branche en aanbod.
                        </p>

                        <p className="text-primary/80 leading-relaxed mb-4">
                            Vergelijk niet met andere bedrijven. Vergelijk vooral met jezelf. Wat was de stand bij de start, en welke kant gaat het op? Een blended ROAS die in zes maanden van 1.8 naar 3.2 is gegaan zegt veel meer dan een momentopname.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">
                            Het verschil tussen geclaimde en echte conversies
                        </h2>

                        <p className="text-primary/80 leading-relaxed mb-4">
                            Hier loopt het bij veel MKB-ondernemers mis. Het bureau laat 84 conversies zien in Meta Ads Manager. De boekhouder ziet maar 51 nieuwe orders in het kassasysteem. Wat gebeurt daar?
                        </p>

                        <p className="text-primary/80 leading-relaxed mb-4">
                            Drie dingen meestal. De eerste is attributie: Meta claimt conversies die ook via Google of organisch waren binnengekomen. De tweede is dubbeltelling: dezelfde gebruiker telt mee voor meerdere advertenties als hij op meerdere klikt. De derde is conversie-definitie: het bureau telt iets als "Lead" wat in jouw boeken nog niet eens een offerteaanvraag is.
                        </p>

                        <p className="text-primary/80 leading-relaxed mb-4">
                            Oplossing: maak een keer per kwartaal een ouderwetse reconciliatie. Lijst van Meta-conversies naast de daadwerkelijke orders uit je eigen systeem. Als de afwijking binnen vijftien procent blijft, is er weinig aan de hand. Loopt het verder uiteen, dan moet het bureau uitleggen waarom. En als die uitleg klinkt als "Meta meet nou eenmaal anders", weet je voldoende.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">
                            De warme-versus-koude check
                        </h2>

                        <p className="text-primary/80 leading-relaxed mb-4">
                            Een van de grootste trucs in social ads land: het bureau laat zien dat de campagnes goed scoren, maar het leeuwendeel van de spend zit in retargeting en branded prospecting. Dat zijn mensen die je al kenden. Die hadden je ook gevonden via Google of direct verkeer. De ads claimen omzet die je sowieso had gehad.
                        </p>

                        <p className="text-primary/80 leading-relaxed mb-4">
                            Vraag om een uitsplitsing per type doelgroep. Hoeveel ging naar koude prospecting, hoeveel naar warme retargeting, hoeveel naar branded zoekverkeer (geldt vooral als er ook Google Ads in het pakket zit). Op koude prospecting hoort de ROAS lager te liggen, maar dit is wel waar de nieuwe omzet vandaan komt. Op retargeting hoort de ROAS hoog, alleen het volume blijft beperkt.
                        </p>

                        <p className="text-primary/80 leading-relaxed mb-4">
                            Een bureau dat niet kan of wil splitsen, optimaliseert niet echt. Dat verdeelt alleen het bestaande budget over campagnes en hoopt dat de algoritmes het goedmaken. Klaar daarmee.
                        </p>

                        <h3 className="text-2xl font-bold text-primary mt-8 mb-4">
                            Een snelle test die je vandaag kunt doen
                        </h3>

                        <p className="text-primary/80 leading-relaxed mb-4">
                            Vraag aan je bureau: "Wat zou er gebeuren als we drie maanden lang alle retargeting uitzetten?" Als het antwoord komt in de vorm van paniek of vaag wegduiken, ben je waarschijnlijk afhankelijk van een mooi cijfertje dat over het echte werk heen ligt. Als het antwoord een doordachte analyse is met "dan verliezen we X procent omzet uit categorie Y, maar dat zegt ook iets over hoe sterk onze prospecting nu echt is", weet je dat je een vakman aan tafel hebt.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">
                            Welke tools je zelf nodig hebt
                        </h2>

                        <p className="text-primary/80 leading-relaxed mb-4">
                            Je kunt prima leestoegang hebben tot de platforms zonder zelf elke knop te draaien. Vraag bij de start om vier dingen op jouw naam: het Meta Business Account, het Google Ads account (als dat ook actief is), de Google Analytics 4 view en het Looker Studio dashboard waar het bureau de cijfers in publiceert.
                        </p>

                        <p className="text-primary/80 leading-relaxed mb-4">
                            Eigendom van de accounts hoort bij jou. Punt. Een bureau dat eigenaarschap claimt en jou alleen toegang geeft, kun je niet aan de deur zetten zonder gedoe. Dat is geen samenwerking, dat is een gijzeling-met-mooie-rapportjes.
                        </p>

                        <p className="text-primary/80 leading-relaxed mb-4">
                            Lees ook onze eerdere gids over <Link to="/blogs/social-ads/social-media-adverteren-uitbesteden-gids-mkb" className="text-accent underline hover:text-accent/80">social media adverteren uitbesteden voor MKB</Link> als je nog twijfelt of het kantelpunt bij jou ligt. En voor de bredere context van resultaten meten op Meta specifiek: <Link to="/blogs/social-ads/goede-roas-meta-ads-benchmarks" className="text-accent underline hover:text-accent/80">wat is een goede ROAS op Meta Ads</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">
                            Hoe lang geef je een bureau de tijd?
                        </h2>

                        <p className="text-primary/80 leading-relaxed mb-4">
                            Snel oordelen is een dure gewoonte. De eerste maand is opbouw. Pixel en conversie-API koppelen, doelgroepen verkennen, creatives testen. Verwacht hier geen winst, alleen leerwerk. In de tweede maand komen de eerste echte resultaten en zie je de leerfase op de meeste ad sets stabiliseren. Pas vanaf maand drie kun je beoordelen of de groei richting heeft.
                        </p>

                        <p className="text-primary/80 leading-relaxed mb-4">
                            Driemaandelijks evalueer je drie dingen: zijn de kosten per conversie gedaald of stabiel gebleven, is het volume gegroeid, en kan het bureau uitleggen waarom. Twee van de drie groen is acceptabel. Een van de drie groen is zorgelijk. Geen van de drie is een gesprek over afscheid.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">
                            Het maandgesprek dat je echt wilt voeren
                        </h2>

                        <p className="text-primary/80 leading-relaxed mb-4">
                            Een goede maandbespreking duurt drie kwartier. Niet langer. De agenda staat vast en past op een half A4. Hoe ging het afgelopen maand op de zeven KPI's. Welke creatives wonnen, welke verloren. Welke aanpassingen komen er volgende maand. En tot slot: welke vraag heeft het bureau aan jou, want zonder input vanuit jouw kant verzandt elke samenwerking.
                        </p>

                        <p className="text-primary/80 leading-relaxed mb-4">
                            Maak van dit gesprek geen statusupdate maar een sparmoment. Een goede specialist wil weten wat er in jouw verkoopgesprekken aan de orde komt, welke seizoensinvloeden eraan zitten te komen, of er nieuwe diensten of producten in de pijplijn zitten. Wie alleen kijkt naar wat er gisteren in Ads Manager stond, mist de helft van wat morgen telt.
                        </p>

                        <h3 className="text-2xl font-bold text-primary mt-8 mb-4">
                            Wat het bureau aan jou hoort te vragen
                        </h3>

                        <p className="text-primary/80 leading-relaxed mb-4">
                            Een vakkundig social ads bureau stelt actief vragen. Welke leads converteerden naar klant en welke niet, welke producten leverden de beste marge op, welke verkoopgesprekken liepen vast en op welk bezwaar. Als je merkt dat je elke maand zelf moet trekken om input te geven, is dat een teken dat het bureau jouw business als project beschouwt in plaats van als partnership.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">
                            Drie rode vlaggen die je niet mag negeren
                        </h2>

                        <p className="text-primary/80 leading-relaxed mb-4">
                            Onverklaarbare stijgingen in CPM en CPC zonder seizoens- of marktoorzaak vragen om een eerlijk antwoord, niet om een schouderophalen. Het tweede signaal: rapportages die elke maand korter en vager worden. Begon het bureau met drie pagina's onderbouwing en zit je nu op een dashboardlink met "vragen mag altijd", dan zakt de aandacht weg. Het derde signaal is het ergste: je krijgt steeds vaker de junior aan de lijn. De senior specialist die je in het verkoopgesprek beloofd kreeg, zie je alleen nog bij de kwartaalrapportage.
                        </p>

                        <p className="text-primary/80 leading-relaxed mb-4">
                            Geen van deze signalen is op zichzelf doodsteek. Twee tegelijk vraagt om een eerlijk gesprek. Drie tegelijk en je moet beginnen kijken naar alternatieven. Wachten kost je in onze ervaring elke maand een paar duizend euro in gemiste rendementen.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">
                            Klaar om grip te krijgen?
                        </h2>

                        <p className="text-primary/80 leading-relaxed mb-4">
                            Meten of jouw social ads uitbesteding werkt, hoeft geen wekenlange exercitie te zijn. Een half uur per maand, dezelfde zeven KPI's, een eerlijk gesprek over wat er onder zit. Wie dat ritme aanhoudt, ontdekt binnen een kwartaal of het bureau zijn geld waard is. Wie het overslaat, ontdekt het meestal pas als het al een paar duizend euro te laat is.
                        </p>

                        <p className="text-primary/80 leading-relaxed mb-6">
                            Wil je een second opinion op je huidige social ads setup? <Link to="/contact" className="text-accent underline hover:text-accent/80">Plan een gesprek</Link> in. We kijken eerlijk mee naar je cijfers, je rapportages en je samenwerking, en zeggen recht voor zijn raap of het ergens vastloopt of dat je gewoon nog even geduld nodig hebt.
                        </p>
                    </div>

                    <section className="mt-16">
                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">
                            Veelgestelde vragen
                        </h2>

                        <div className="space-y-6 not-prose">
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">
                                    Welke metrics laat ik mijn social ads bureau elke maand rapporteren?
                                </h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Houd het kort en hard: besteed budget, aantal conversies, kosten per conversie, ROAS, omzet uit ads, gemiddelde orderwaarde en de top drie creatives op rendement. Daarbij hoort altijd een korte schriftelijke duiding van wat er volgende maand verandert. Bereik en impressies horen op de tweede pagina, niet op de eerste.
                                </p>
                            </div>

                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">
                                    Hoe weet ik of het bureau ROAS opklopt met merknaam-clicks?
                                </h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Vraag om een uitsplitsing tussen warme en koude doelgroepen. Retargeting en branded audiences scoren altijd een mooie ROAS omdat die mensen je al kennen. Het echte werk gebeurt op koude prospecting. Als je bureau alleen het totaal laat zien, mis je het grootste deel van het verhaal.
                                </p>
                            </div>

                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">
                                    Wat is een realistische ROAS na drie maanden uitbesteden?
                                </h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Dat verschilt per branche en marge. Een webshop met 50 procent marge mag mikken op een blended ROAS van 3 tot 4. Een dienstverlener stuurt liever op kosten per gekwalificeerde lead. Belangrijker dan een absoluut getal: zie je elke maand verbetering op dezelfde meetmethode? Dan zit het goed.
                                </p>
                            </div>

                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">
                                    Welke tools heb ik nodig om mee te kunnen kijken?
                                </h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Een gedeelde Google Analytics 4 view, leestoegang tot Meta Ads Manager, leestoegang tot Google Ads als ook daar wordt geadverteerd, en een gedeeld dashboard in Looker Studio of een vergelijkbare tool. Vraag bij start van de samenwerking om alle accounts op jouw naam te zetten. Niet op die van het bureau.
                                </p>
                            </div>

                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">
                                    Hoe weet ik of een rapportage eerlijk is?
                                </h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Eerlijke rapporten benoemen wat er niet werkte. Drie maanden achter elkaar alleen groene cijfers is verdacht. Vraag actief naar mislukte tests, gestopte campagnes en wat de leerpunten waren. Een bureau dat geen verliezen kan laten zien, heeft ze ofwel niet gedraaid, ofwel verstopt onder het tapijt.
                                </p>
                            </div>

                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">
                                    Wanneer is het tijd om afscheid te nemen van mijn social ads bureau?
                                </h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Twee signalen zijn helder. Eerst: de kosten per conversie stijgen al vier maanden zonder uitleg of plan om dat om te buigen. Daarnaast: rapportages worden dunner, gesprekken vager en je krijgt steeds vaker de junior aan de lijn in plaats van de specialist. Dan is wisselen meestal goedkoper dan blijven zitten.
                                </p>
                            </div>
                        </div>
                    </section>
                </div>
            </article>

            <section className="w-full pb-32 px-6">
                <div className="max-w-4xl mx-auto bg-primary rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
                    <h2 className="relative z-10 font-drama italic text-background text-3xl sm:text-4xl md:text-5xl mb-6">Twijfels over je huidige bureau?</h2>
                    <p className="relative z-10 font-sans text-background/70 text-lg mb-10 max-w-xl mx-auto">
                        Een eerlijk second-opinion gesprek over je cijfers en samenwerking. Wij verkopen geen verhaal, we lezen je rapportage.
                    </p>
                    <Link to="/contact" className="relative z-10 btn-magnetic inline-flex items-center justify-center bg-accent text-background font-sans font-bold text-lg px-10 py-4 rounded-[2rem] hover:bg-accent/90 transition-colors">
                        Neem contact op
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
