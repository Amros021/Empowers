import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ChevronRight, User } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function BlogPostOnlineMarketingUitbestedenWebshop() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen selection:bg-accent/30 selection:text-dark flex flex-col bg-background">
            <Helmet>
                <title>Online marketing uitbesteden als webshop: hier moet je op letten | Empowers</title>
                <meta name="description" content="Wil je als webshop online marketing uitbesteden? Lees waar je op moet letten, welke fouten je voorkomt en wat een goede partner echt levert." />
                <meta name="keywords" content="online marketing uitbesteden webshop, marketing bureau webshop, ecommerce marketing uitbesteden, webshop marketing partner" />
                <link rel="canonical" href="https://www.empowers.nl/blogs/algemeen/online-marketing-uitbesteden-webshop" />
                <meta property="og:title" content="Online marketing uitbesteden als webshop: hier moet je op letten" />
                <meta property="og:description" content="Wat een webshop nodig heeft van een marketingpartner en welke valkuilen je voor jezelf voorkomt." />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://www.empowers.nl/blogs/algemeen/online-marketing-uitbesteden-webshop" />
                <meta property="og:image" content="https://www.empowers.nl/images/blogs/online-marketing-uitbesteden-webshop.jpg" />
                <meta property="article:published_time" content="2026-05-25" />
                <meta property="article:author" content="Empowers" />
                <meta property="article:section" content="Algemeen" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Online marketing uitbesteden als webshop: hier moet je op letten" />
                <meta name="twitter:description" content="Hoe je een marketingpartner kiest die je webshop echt verder helpt, en waar je op moet letten voor je tekent." />

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Article",
                        "headline": "Online marketing uitbesteden als webshop: hier moet je op letten",
                        "description": "Wat een webshop in 2026 mag verwachten van een marketingpartner en hoe je een goede van een matige onderscheidt.",
                        "image": "https://www.empowers.nl/images/blogs/online-marketing-uitbesteden-webshop.jpg",
                        "datePublished": "2026-05-25T09:00:00+02:00",
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
                                    "name": "Wanneer is het zinvol om als webshop online marketing uit te besteden?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Zodra je doorlopend advertentiebudget draait of een serieuze ambitie hebt om je omzet te laten groeien. Een webshop met een paar honderd euro testbudget en alle tijd om zelf te experimenteren kan beter zelf starten. Zodra het budget richting duizend euro per maand gaat of de tijd ontbreekt om campagnes goed te onderhouden, gaat een partner zichzelf doorgaans snel terugbetalen."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Wat kost online marketing uitbesteden voor een webshop?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Bureaus werken doorgaans met een vast bedrag per maand voor het beheer plus jouw eigen advertentiebudget. Voor een MKB-webshop zit dat maandbedrag vaak rond de duizend euro voor beheer van één kanaal, oplopend afhankelijk van scope en omzet. Sommige partners werken op fee-basis, anderen op percentage van het mediabudget. Vraag altijd door waar het bedrag uit bestaat."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Welke kanalen besteed ik als webshop het eerst uit?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Begin bij het kanaal waar je nu het meest verbrandt of het meest mist. Voor de meeste webshops zijn dat Google Shopping en Meta Ads, omdat daar het grootste deel van het advertentiebudget naartoe gaat. SEO en e-mail kun je vaak nog even zelf doen, omdat die minder dagelijkse aandacht vragen. Wat je laatst aanpakt is meestal wat het minste pijn doet."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Hoe weet ik of het bureau echt resultaat boekt voor mijn webshop?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Kijk naar ROAS, conversie, gemiddelde orderwaarde en de blended kosten over al je kanalen heen. Niet alleen naar klikprijs of bereik. Een goede partner stuurt op omzet en marge, niet op vanity metrics. Vraag elke maand om een korte sessie waarin het bureau uitlegt wat ze hebben aangepast en waarom."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Wat moet ik regelen voor ik de samenwerking start?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Zorg dat je marketingaccounts op jouw bedrijfsnaam staan en dat je toegang verleent in plaats van overdraagt. Dat geldt voor Google Ads, Meta Business Manager, GA4 en je shopplatform. Leg vooraf vast hoe je samenwerkt, wat de looptijd is en wat er gebeurt bij beëindiging. Een partner die hier moeilijk over doet, is een rode vlag voor je tekent."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Kan ik beter een specialist of een full-service bureau kiezen?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Een specialist gaat dieper op één kanaal, een full-service partner zorgt voor samenhang tussen kanalen. Voor webshops met één hoofdkanaal werkt een specialist vaak het scherpst. Zodra je drie of meer kanalen draait wordt de afstemming belangrijker en wint een full-service aanpak het op tijdwinst en consistentie."
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
                            { "@type": "ListItem", "position": 3, "name": "Algemeen", "item": "https://www.empowers.nl/blogs/algemeen" },
                            { "@type": "ListItem", "position": 4, "name": "Online marketing uitbesteden webshop", "item": "https://www.empowers.nl/blogs/algemeen/online-marketing-uitbesteden-webshop" }
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
                        <Link to="/blogs/algemeen" className="hover:text-accent transition-colors">Algemeen</Link>
                        <ChevronRight className="w-3 h-3" />
                        <span className="text-primary truncate">Marketing uitbesteden webshop</span>
                    </nav>

                    <header className="mb-16">
                        <div className="inline-block px-3 py-1 bg-accent/10 text-accent font-mono text-xs uppercase tracking-widest rounded-full mb-6">
                            Algemeen
                        </div>
                        <h1 className="font-sans font-bold text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight mb-8">
                            Online marketing uitbesteden als webshop: hier moet je op letten
                        </h1>
                        <div className="flex flex-wrap items-center gap-6 text-sm font-sans text-primary/60 border-y border-primary/10 py-6">
                            <div className="flex items-center gap-2"><User className="w-4 h-4" /><span>Empowers Redactie</span></div>
                            <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>25 mei 2026</span></div>
                            <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>8 minuten leestijd</span></div>
                        </div>
                    </header>

                    <figure className="w-full h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden mb-16 relative bg-primary">
                        <div className="absolute inset-0 bg-[url('/images/blogs/online-marketing-uitbesteden-webshop.jpg')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </figure>

                    <div className="prose prose-lg max-w-none prose-headings:text-primary prose-headings:font-bold prose-a:text-accent prose-a:underline hover:prose-a:text-accent/80">
                        <p className="text-xl leading-relaxed text-primary/80 font-medium mb-6">
                            Online marketing uitbesteden als webshop voelt vaak als een sprong. Je geeft toegang tot accounts waar jouw omzet in zit en vertrouwt erop dat iemand anders er net zo zorgvuldig mee omgaat. De praktijk is dat het meeste misgaat in de week voor de samenwerking start, niet daarna. Daar zit ook waar je op moet letten.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat een webshop écht uitbesteedt</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Veel ondernemers denken dat ze "de marketing" uitbesteden. In de praktijk besteed je een verzameling losse taken uit. Google Shopping campagnes, Meta-advertenties, het opzetten van conversiemeting, een wekelijkse check op je product feed en de afstemming met je shopplatform. Stuk voor stuk operationeel werk dat dagelijks aandacht vraagt.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Wat je niet uitbesteedt is de richting. Welke producten je wil pushen, welke marges je nodig hebt om gezond te groeien, hoe je seizoenen aanpakt. Dat blijft jouw werk. Een goede partner stelt daar vragen over, een matige partner gaat er zelf invulling aan geven omdat hij geen antwoord krijgt. Daar gaat het bij de meeste samenwerkingen scheef.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Stel jezelf voor je gaat praten dus eerst de vraag: wat wil je bereiken, en wat ga je zelf blijven doen. Als je daar geen scherp antwoord op hebt, is het te vroeg voor uitbesteden. Eerst die helderheid. Dan pas een partner. Lees ook onze verdieping over <Link to="/blogs/algemeen/marketing-uitbesteden-mkb-zelf-doen" className="text-accent hover:underline">wanneer uitbesteden loont en wanneer zelf doen slimmer is</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Het verschil tussen een operator en een partner</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Er bestaan grofweg twee soorten bureaus in webshop-marketing. Het ene type voert uit wat jij opdraagt. Het andere type denkt mee over de richting. Beiden kunnen waardevol zijn, maar je moet weten welke je zoekt.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een operator is sterk als je zelf de strategie hebt en alleen handen tekortkomt. Hij draait je campagnes, houdt je biedstrategie in de gaten en stuurt elke week een rapportage. Klaar. Goedkoper, sneller te starten, weinig overleg.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een partner doet hetzelfde, maar stelt vragen die jouw operator nooit stelt. Waarom verkoop je deze categorie zo hard en die andere bijna niet? Klopt het dat jouw retourpercentage hoger is dan branchegemiddeld en zo ja, wat doet dat met je advertentiebudget? Welke leveranciers leveren marge en welke wegen op je tijd? Dat soort vragen leiden tot beslissingen waar standaard campagnewerk je nooit komt.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Welke je nodig hebt hangt af van waar je staat. Een starter heeft vaak meer aan een operator. Een webshop die wil opschalen heeft een partner nodig. Wij zien dit verschil iedere maand terugkomen in gesprekken met nieuwe klanten: ze huurden een operator in toen ze een partner zochten. En andersom.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Vier dingen om vooraf te regelen</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Bij webshops gaat de meeste pijn niet zitten in de campagnes, maar in het beheer eromheen. Voor je een partner kiest, regel je deze vier dingen zelf. Anders sta je later met lege handen.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Allereerst: zet alle marketingaccounts op jouw bedrijfsnaam. Je Google Ads account, Meta Business Manager, GA4, je shopplatform en je product feed. Een partner krijgt toegang, maar nooit eigendom. Wie hier moeilijk over doet, is geen partner. Dat is een gijzelaar.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Daarnaast: leg conversiemeting netjes vast voor je tekent. Niet alleen Pixel of Google tag, maar ook server-side tracking als je serieus draait. Een halve meetinstallatie is een halve waarheid in je rapportage. We hebben webshops bij ons binnen zien komen waar maanden aan campagnewerk was gedaan op basis van data die nooit klopte. Dat is een vermijdbare ramp.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Verder: zorg dat je product feed gezond is. Dat betekent kloppende categorieën, juiste attributen, scherpe productafbeeldingen, geldige EAN-codes en geen broken links. Google Shopping en Meta-catalogi draaien op die feed. Een partner kan veel, maar geen onleesbare feed magisch wel leesbaar maken.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            En tot slot: maak inzichtelijk wat een klant je waard is. Niet alleen de eerste order, ook de herhaalaankopen over zes en twaalf maanden. Dat getal bepaalt hoeveel je per nieuwe klant mag uitgeven. Zonder dat cijfer is elk gesprek over ROAS half werk. Een goede partner vraagt hier in het eerste gesprek naar. Als ze het niet vragen, vraag jij waarom niet.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat een goed eerste gesprek oplevert</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een serieus bureau verkoopt in het eerste gesprek niet. Hij stelt vragen. Veel vragen. Over wat je verkoopt, wie je doelgroep is, waar je vandaan komt, wat eerdere kanalen hebben opgeleverd, welke marges je draait en hoe lang je tijd geeft aan resultaten.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Pas op voor bureaus die in dat eerste uur al een aanpak presenteren met percentages erbij. Niemand kan zonder access tot je accounts en een blik op je shopdata een eerlijke voorspelling doen. Wie het wel belooft, verkoopt verwachting in plaats van werk.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een goede uitkomst van een eerste gesprek is meestal niet een offerte, maar een korte audit. De partner kijkt twee tot vier uur in je accounts, schrijft een beknopte analyse en presenteert die. Daar zie je hoe hij denkt, wat hij signaleert en hoe hij communiceert. Pas dan beslis je of je tekent. Voor wie hier meer over wil lezen: onze gids over <Link to="/blogs/algemeen/kies-juiste-online-marketing-bureau" className="text-accent hover:underline">het kiezen van een online marketing bureau</Link> gaat hier dieper op in.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Waar je samenwerkingen op blijft sturen</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Zodra je tekent verandert het werk. Niet voor de partner. Voor jou. Een uitbestede marketing draait alleen goed als je elke maand betrokken blijft op de juiste manier. Niet door dagelijks in accounts te kijken, maar door op zaken te sturen die operationeel werk overstijgen.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Stuur op je blended kosten, niet op losse kanaalprijzen. Wat kost een nieuwe klant je gemiddeld over al je kanalen heen, inclusief organisch verkeer en e-mail? Dat getal vertelt of je goed bezig bent. Een ROAS van 4 op Meta is leuk, maar als je blended kosten per klant ondertussen oplopen omdat je organisch verkeer terugvalt, gaat er iets fout.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Stuur ook op marge, niet alleen op omzet. Een partner die op omzet stuurt verkoopt graag jouw afgeprijsde producten. Daar zit weinig marge in en je traint je klanten op korting. Een partner die op marge stuurt durft sommige producten juist niet te pushen. Dat onderscheid is in de praktijk groot.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            En sturen op tempo. Eens per maand een goed gesprek van een uur. Niet meer en niet minder. Te veel overleg gaat ten koste van uitvoering. Te weinig overleg betekent dat je na een kwartaal pas merkt dat een aanname niet meer klopt. Een uur per maand met een duidelijke agenda is genoeg om beide te voorkomen. <Link to="/blogs/strategie/online-marketing-strategie-webshops-omzet" className="text-accent hover:underline">In deze gids over webshop-marketingstrategie</Link> lees je hoe je dat uur invult.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wanneer je beter afscheid neemt</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Niet elke samenwerking moet blijven duren. Er zijn drie signalen waarop je een gesprek over afscheid voorbereidt.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Eén: de rapportage gaat over activiteit in plaats van uitkomst. Hoeveel campagnes zijn geüpdatet, hoeveel A/B tests draaien, hoeveel zoekwoorden zijn toegevoegd. Dat is bezig zijn. Geen sturen op resultaat. Twee: je krijgt elke maand dezelfde aanbevelingen zonder dat er iets verandert. Drie: het bureau wijst bij tegenvallende cijfers structureel naar externe factoren. Algoritme-update, seizoen, markt. Soms klopt dat. Vaak is het ontwijken.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een goede partner vertelt je eerlijk wanneer hij niet meer het juiste type aanbieder is voor je. Wij vinden dat zelf ook ongemakkelijk om te zeggen, maar het is wat een professionele samenwerking onderscheidt van een gewoonte-relatie.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Het echte rendement van uitbesteden</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Het rendement van uitbesteden is niet alleen de extra omzet. Het is ook wat je tegelijk teruggewint aan focus. Een webshopeigenaar die wekelijks twaalf uur kwijt was aan campagnewerk, biedstrategieën, feed-issues en rapportages, krijgt die tijd terug om de winkel te verbeteren. Productselectie, leveranciers, klantenservice, retourbeleid. Allemaal dingen die op lange termijn meer marge opleveren dan een paar procent extra ROAS.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Dat is ook de eerlijkste kosten-batenanalyse. Een partner kost je honderd euro per uur uitgesmeerd over een maand. Jouw uur is meer waard dan dat, als je het besteedt aan wat alleen jij kunt doen.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Uitbesteden werkt als je de basis op orde hebt, als je weet welk type partner je zoekt en als je bereid bent maandelijks scherp te blijven op de richting. Wie alleen de pijn wil wegtikken zonder zelf betrokken te blijven, levert vaak geld in. Wie het ziet als een serieuze samenwerking met een externe specialist, koopt zichzelf groei.
                        </p>
                    </div>

                    <section className="mt-16 pt-12 border-t border-primary/10">
                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Veelgestelde vragen</h2>
                        <div className="space-y-6 not-prose">
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wanneer is het zinvol om als webshop online marketing uit te besteden?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Zodra je doorlopend advertentiebudget draait of een serieuze ambitie hebt om je omzet te laten groeien. Een webshop met een paar honderd euro testbudget en alle tijd om zelf te experimenteren kan beter zelf starten. Zodra het budget richting duizend euro per maand gaat of de tijd ontbreekt om campagnes goed te onderhouden, gaat een partner zichzelf doorgaans snel terugbetalen.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat kost online marketing uitbesteden voor een webshop?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Bureaus werken doorgaans met een vast bedrag per maand voor het beheer plus jouw eigen advertentiebudget. Voor een MKB-webshop zit dat maandbedrag vaak rond de duizend euro voor beheer van één kanaal, oplopend afhankelijk van scope en omzet. Sommige partners werken op fee-basis, anderen op percentage van het mediabudget. Vraag altijd door waar het bedrag uit bestaat.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Welke kanalen besteed ik als webshop het eerst uit?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Begin bij het kanaal waar je nu het meest verbrandt of het meest mist. Voor de meeste webshops zijn dat Google Shopping en Meta Ads, omdat daar het grootste deel van het advertentiebudget naartoe gaat. SEO en e-mail kun je vaak nog even zelf doen, omdat die minder dagelijkse aandacht vragen. Wat je laatst aanpakt is meestal wat het minste pijn doet.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoe weet ik of het bureau echt resultaat boekt voor mijn webshop?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Kijk naar ROAS, conversie, gemiddelde orderwaarde en de blended kosten over al je kanalen heen. Niet alleen naar klikprijs of bereik. Een goede partner stuurt op omzet en marge, niet op vanity metrics. Vraag elke maand om een korte sessie waarin het bureau uitlegt wat ze hebben aangepast en waarom.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat moet ik regelen voor ik de samenwerking start?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Zorg dat je marketingaccounts op jouw bedrijfsnaam staan en dat je toegang verleent in plaats van overdraagt. Dat geldt voor Google Ads, Meta Business Manager, GA4 en je shopplatform. Leg vooraf vast hoe je samenwerkt, wat de looptijd is en wat er gebeurt bij beëindiging. Een partner die hier moeilijk over doet, is een rode vlag voor je tekent.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Kan ik beter een specialist of een full-service bureau kiezen?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Een specialist gaat dieper op één kanaal, een full-service partner zorgt voor samenhang tussen kanalen. Voor webshops met één hoofdkanaal werkt een specialist vaak het scherpst. Zodra je drie of meer kanalen draait wordt de afstemming belangrijker en wint een full-service aanpak het op tijdwinst en consistentie.</p>
                            </div>
                        </div>
                    </section>

                    <section className="mt-16 pt-12 border-t border-primary/10">
                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Lees ook</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <Link to="/blogs/google-ads/sea-uitbesteden-webshop-ecommerce-bureau" className="block border border-primary/10 rounded-xl p-6 hover:border-accent transition-colors">
                                <div className="text-xs font-mono uppercase tracking-widest text-accent mb-2">Google Ads</div>
                                <h3 className="font-sans font-semibold text-primary text-lg mb-2">SEA uitbesteden voor een webshop: waar je een e-commerce bureau aan herkent</h3>
                                <p className="font-sans text-primary/70 text-sm">Welke vragen je stelt aan een SEA-bureau dat zegt webshops te doen, en hoe je merkt of dat klopt.</p>
                            </Link>
                            <Link to="/blogs/strategie/online-marketing-strategie-webshops-omzet" className="block border border-primary/10 rounded-xl p-6 hover:border-accent transition-colors">
                                <div className="text-xs font-mono uppercase tracking-widest text-accent mb-2">Strategie</div>
                                <h3 className="font-sans font-semibold text-primary text-lg mb-2">Online marketing strategie voor webshops die omzet wil pakken</h3>
                                <p className="font-sans text-primary/70 text-sm">Een concrete strategie die je samen met je partner draait, op kanalen, budget en marge.</p>
                            </Link>
                        </div>
                    </section>
                </div>
            </article>

            <section className="w-full pb-32 px-6">
                <div className="max-w-4xl mx-auto bg-primary rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
                    <h2 className="relative z-10 font-drama italic text-background text-3xl sm:text-4xl md:text-5xl mb-6">Op zoek naar een marketingpartner die jouw webshop snapt?</h2>
                    <p className="relative z-10 font-sans text-background/70 text-lg mb-10 max-w-xl mx-auto">In een gesprek van een halfuur kijken we naar je kanalen, je marges en wat een serieuze partner voor jouw shop kan betekenen. Geen pitch, wel een eerlijk beeld.</p>
                    <Link to="/contact" className="relative z-10 btn-magnetic inline-flex items-center justify-center bg-accent text-background font-sans font-bold text-lg px-10 py-4 rounded-[2rem] hover:bg-accent/90 transition-colors">Neem contact op</Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
