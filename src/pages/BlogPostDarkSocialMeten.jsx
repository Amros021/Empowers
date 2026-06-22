import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ChevronRight, User } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function BlogPostDarkSocialMeten() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen selection:bg-accent/30 selection:text-dark flex flex-col bg-background">
            <Helmet>
                <title>Wat is dark social en hoe meet je het? | Empowers</title>
                <meta name="description" content="Dark social meten lijkt onmogelijk, maar dat is het niet. Zo herken je verborgen verkeer uit WhatsApp en DM's en breng je het in kaart met UTM-links en simpele vragen." />
                <link rel="canonical" href="https://www.empowers.nl/blogs/algemeen/dark-social-meet" />
                <meta property="og:title" content="Wat is dark social en hoe meet je het?" />
                <meta property="og:description" content="Veel van je 'direct verkeer' is eigenlijk dark social. Zo breng je verborgen deelverkeer in kaart en stuur je erop." />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://www.empowers.nl/blogs/algemeen/dark-social-meet" />
                <meta property="og:image" content="https://www.empowers.nl/images/blogs/dark-social-meet.jpg" />
                <meta property="article:published_time" content="2026-06-23" />
                <meta property="article:author" content="Empowers" />
                <meta property="article:section" content="Algemeen" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Wat is dark social en hoe meet je het?" />
                <meta name="twitter:description" content="Zo herken en meet je verborgen verkeer uit privékanalen." />

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@graph": [
                            {
                                "@type": "Article",
                                "headline": "Wat is dark social en hoe meet je het?",
                                "description": "Dark social meten lijkt onmogelijk, maar dat is het niet. Zo herken je verborgen verkeer uit WhatsApp en DM's en breng je het in kaart met UTM-links en simpele vragen.",
                                "image": "https://www.empowers.nl/images/blogs/dark-social-meet.jpg",
                                "datePublished": "2026-06-23T10:00:00+02:00",
                                "dateModified": "2026-06-23T10:00:00+02:00",
                                "author": { "@type": "Organization", "name": "Empowers" },
                                "publisher": {
                                    "@type": "Organization", "name": "Empowers", "url": "https://www.empowers.nl",
                                    "logo": { "@type": "ImageObject", "url": "https://www.empowers.nl/empowers-logo-color.svg" }
                                },
                                "mainEntityOfPage": "https://www.empowers.nl/blogs/algemeen/dark-social-meet"
                            },
                            {
                                "@type": "BreadcrumbList",
                                "itemListElement": [
                                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.empowers.nl" },
                                    { "@type": "ListItem", "position": 2, "name": "Blogs", "item": "https://www.empowers.nl/blogs" },
                                    { "@type": "ListItem", "position": 3, "name": "Algemeen", "item": "https://www.empowers.nl/blogs/algemeen" },
                                    { "@type": "ListItem", "position": 4, "name": "Dark social meten", "item": "https://www.empowers.nl/blogs/algemeen/dark-social-meet" }
                                ]
                            },
                            {
                                "@type": "FAQPage",
                                "mainEntity": [
                                    {
                                        "@type": "Question",
                                        "name": "Wat betekent dark social?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Dark social is online verkeer dat ontstaat als iemand een link deelt via een privékanaal, zoals WhatsApp, een DM, Messenger of e-mail. Die deelactie laat geen herkomst achter. In je statistieken landt het bezoek daarom meestal onder direct verkeer, alsof iemand je adres uit zijn hoofd intypte."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Waarom zie ik dark social niet in Google Analytics?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Omdat de gedeelde link geen verwijzende bron meestuurt. Analytics weet alleen waar iemand vandaan kwam als de vorige pagina dat doorgeeft. Bij een appje of een privébericht gebeurt dat niet, dus belandt het verkeer in de bak direct. Je site krijgt het bezoek wel, je weet alleen niet langs welke weg."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Hoeveel van mijn verkeer is dark social?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Dat verschilt per bedrijf en is niet exact te zeggen. Schattingen lopen uiteen, maar een groot deel van al het delen online gebeurt via privékanalen, vaak meer dan de helft. Een goede indicatie is direct verkeer dat binnenkomt op diepe pagina's die niemand zomaar intypt, zoals een specifieke productpagina of blog."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Hoe meet ik dark social het makkelijkst?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Begin met twee dingen. Tag elke link die je zelf deelt met UTM-codes, zodat je hem terugziet in je rapport. En vraag nieuwe klanten gewoon hoe ze je vonden, via een veldje in je formulier of mondeling. Die twee bronnen samen geven je al een eerlijk beeld zonder dat je dure software nodig hebt."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Wat zijn UTM-links en waarom helpen ze?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Een UTM-link is een gewone link met extra labels erachter die vertellen waar hij vandaan komt. Deel je hem in een nieuwsbrief of een appgroep, dan ziet je rapport precies dat terug. Zo verander je een deel van je onzichtbare verkeer in meetbaar verkeer, omdat jij de herkomst zelf hebt vastgelegd."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Kun je dark social helemaal dichttimmeren?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Nee, en dat hoeft ook niet. Je kunt nooit elk privébericht volgen, dat is juist de aard van dark social. Het doel is niet volledige meting, maar een betrouwbare schatting. Zodra je weet dat een flink deel van je beste verkeer via mond-tot-mond loopt, kun je daar gericht op sturen."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Is dark social goed of slecht voor mijn bedrijf?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Het is meestal goed nieuws. Verkeer dat mensen vrijwillig in hun appgroep delen, komt vaak van iemand die je vertrouwt. Die bezoekers converteren doorgaans beter dan koud advertentieverkeer. Het enige nadeel is dat je het lastig meet, waardoor je het belang ervan onderschat in je rapportage."
                                        }
                                    }
                                ]
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
                        <Link to="/blogs/algemeen" className="hover:text-accent transition-colors">Algemeen</Link>
                        <ChevronRight className="w-3 h-3" />
                        <span className="text-primary truncate">Dark social meten</span>
                    </nav>

                    <header className="mb-16">
                        <div className="inline-block px-3 py-1 bg-accent/10 text-accent font-mono text-xs uppercase tracking-widest rounded-full mb-6">
                            Algemeen
                        </div>
                        <h1 className="font-sans font-bold text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight mb-8">
                            Wat is dark social en hoe meet je het?
                        </h1>

                        <div className="flex flex-wrap items-center gap-6 text-sm font-sans text-primary/60 border-y border-primary/10 py-6">
                            <div className="flex items-center gap-2"><User className="w-4 h-4" /><span>Empowers Redactie</span></div>
                            <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>23 juni 2026</span></div>
                            <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>7 minuten leestijd</span></div>
                        </div>
                    </header>

                    <figure className="w-full h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden mb-16 relative bg-primary">
                        <div className="absolute inset-0 bg-[url('/images/blogs/dark-social-meet.jpg')] bg-cover bg-center opacity-40 mix-blend-overlay" style={{backgroundImage: "url('/images/blogs/dark-social-meet.jpg')"}}></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </figure>

                    <div className="prose prose-lg max-w-none prose-headings:text-primary prose-headings:font-bold prose-a:text-accent prose-a:underline hover:prose-a:text-accent/80">
                        <p className="text-xl leading-relaxed text-primary/80 font-medium mb-6">
                            Dark social is verkeer dat via privékanalen binnenkomt: een link die iemand in WhatsApp plakt, een DM, een Messenger-berichtje of een mailtje tussen collega's. In je statistieken landt het meestal als direct verkeer, zonder herkomst. Je meet het door je eigen links te taggen met UTM-codes, deelacties te volgen en bezoekers simpelweg te vragen hoe ze je vonden.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat is dark social precies?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De term bestaat sinds 2012 en komt van journalist Alexis Madrigal, die in het tijdschrift The Atlantic schreef over verkeer dat overal vandaan leek te komen, maar nergens te herleiden was. Dark social is dus niet iets duisters of stiekems. Het is gewoon delen dat buiten de openbare platforms gebeurt, op de plek waar mensen elkaar het vaakst dingen toesturen: hun eigen berichtenapps.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Denk aan hoe je zelf een link doorstuurt. Je leest iets goeds en je gooit het in de groepsapp met je vrienden of je stuurt het door naar een collega. Op dat moment ontstaat dark social. De ontvanger klikt, komt op de site, maar die site weet niet dat de link uit een appje kwam. Voor de meetsoftware ziet het eruit alsof de bezoeker het webadres uit zijn hoofd intypte.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Waarom zie je dark social niet terug in je statistieken?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Meetsoftware zoals Google Analytics weet alleen waar iemand vandaan komt als de vorige pagina dat netjes doorgeeft. Klik je vanaf Google of vanaf een openbare social post, dan reist die herkomst mee. Bij een privébericht gebeurt dat niet. De app stuurt geen verwijzende bron mee, dus blijft er voor de software niets over om aan te haken.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Het gevolg is een grote, vage bak die direct verkeer heet. Daar zit van alles in: mensen die je adres echt intypen, mensen die op een bladwijzer klikken en, vaak voor een fors deel, mensen die via een gedeelde link binnenkwamen. Dat laatste is je dark social. Zolang je die bak als één geheel leest, mis je een belangrijk stuk van je groei. Wil je beter leren sturen op zulke cijfers, lees dan onze blog over <Link to="/blogs/algemeen/data-betere-marketingbeslissingen" className="text-accent hover:underline">betere marketingbeslissingen met data</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoeveel van je verkeer is dark social?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een exact getal bestaat niet, en iedereen die je dat belooft, verkoopt je een illusie. Wat we wel weten: een groot deel van al het delen online verloopt via privékanalen, in veel onderzoeken zelfs meer dan de helft. Voor jouw bedrijf kan het aandeel hoger of lager liggen, afhankelijk van je publiek en je product.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Je krijgt een eerste indicatie door te kijken naar welke pagina's je direct verkeer binnenkomt. Komt iemand rechtstreeks binnen op je homepage, dan typte hij waarschijnlijk je naam in. Maar komt direct verkeer binnen op een specifieke productpagina met een lange URL of op een blog van vorige week, dan typt niemand dat uit het hoofd. Die bezoeker kreeg een link. We zien bij klanten vaak dat een flink deel van hun zogenaamde direct verkeer eigenlijk gedeelde links blijkt te zijn.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe meet je dark social in de praktijk?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Je kunt niet ieder privébericht volgen, maar je kunt wel de links volgen die je zelf de wereld in stuurt. Het sterkste hulpmiddel is de UTM-link: een gewone link met labels erachter die vertellen waar hij vandaan komt. Zet ze onder je nieuwsbrief, je social posts en alles wat je in groepsapps of communities plaatst. Zodra iemand die link doorstuurt en de ontvanger klikt, zie jij de herkomst alsnog in je rapport.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De tweede meting kost je niets en levert verrassend veel op: vraag het gewoon. Zet een open veldje "hoe heb je ons gevonden" in je offerteaanvraag of je contactformulier. Antwoorden als "via een vriend die jullie aanraadde" of "kreeg een link in onze ondernemersapp" zijn precies de dark social die je nergens anders ziet. Die context maakt je rapportage eerlijker dan welk dashboard ook.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Welke tools en links helpen je verder?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Begin bij gratis basics. Google biedt een eigen UTM-builder waarmee je in een paar klikken een getagde link maakt. Gebruik een linkverkorter erbovenop, zodat een lange UTM-link er toch netjes uitziet als je hem deelt. En richt in je meetsoftware een eigen weergave in die direct verkeer naar diepe pagina's apart toont, want dat is je beste hint voor verborgen delen.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Heb je deelknoppen op je site, kies dan knoppen die de klik registreren voordat de bezoeker doorstuurt. Zo weet je in elk geval welke artikelen mensen graag delen, ook al kun je de ontvanger niet volgen. Dit hoeft geen ingewikkeld project te worden. Eén goede meetweergave en consequent getagde links brengen je verder dan de meeste bedrijven ooit komen.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat doe je met dark social zodra je het ziet?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Het mooiste aan dark social is dat het bijna altijd warm verkeer is. Iemand kreeg jouw link van een persoon die hij vertrouwt, en dat vertrouwen reist mee. Die bezoekers kopen vaker en twijfelen minder dan koud advertentieverkeer. Als je merkt dat een flink deel van je omzet uit gedeelde links komt, weet je dat mond-tot-mond voor jou werkt en dat je daar gericht op mag investeren.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Maak het je publiek dan makkelijker om te delen. Schrijf content die mensen graag doorsturen, zet duidelijke deelknoppen neer en geef tevreden klanten een reden om je aan te bevelen. Dark social past in het grotere plaatje van je <Link to="/blogs/algemeen/customer-journey-uitgelegd-onbekende-klant" className="text-accent hover:underline">customer journey</Link>, want het is vaak het onzichtbare zetje dat iemand voor het eerst bij je brengt.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Welke fouten maken ondernemers met dark social?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De grootste fout is het hele blok direct verkeer negeren omdat het "rommelig" lijkt. Juist daar verstopt zich vaak je beste publiek. Een tweede fout is alle waarde aan het laatste kanaal toekennen. Als iemand je via een appje vond en later via een advertentie terugkwam, krijgt die advertentie vaak alle eer, terwijl het zetje uit de groepsapp kwam.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een derde valkuil is meten willen tot op de komma. Dark social laat zich niet volledig vangen, en dat is geen probleem. Een betrouwbare schatting is genoeg om betere keuzes te maken. Houd je belangrijkste cijfers simpel en consequent bij, zoals we beschrijven in onze blog over <Link to="/blogs/algemeen/marketing-kpis-wekelijks-bijhouden" className="text-accent hover:underline">welke marketing KPI's je wekelijks bijhoudt</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Waar begin je deze week?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Doe vandaag twee dingen. Maak één getagde UTM-link voor de volgende post of nieuwsbrief die je deelt, zodat je voelt hoe het werkt. En zet een veldje "hoe heb je ons gevonden" in je contactformulier. Binnen een paar weken heb je antwoorden die je nooit eerder zag.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Dark social verdwijnt niet, het wordt alleen groter naarmate mensen meer in afgesloten apps leven. Je hoeft het niet perfect te meten om er slimmer op te sturen. Wie het serieus neemt, ziet eerder waar zijn echte groei vandaan komt.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Veelgestelde vragen</h2>
                    </div>

                    <section className="mt-4">
                        <div className="space-y-6 not-prose">
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat betekent dark social?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Dark social is online verkeer dat ontstaat als iemand een link deelt via een privékanaal, zoals WhatsApp, een DM, Messenger of e-mail. Die deelactie laat geen herkomst achter. In je statistieken landt het bezoek daarom meestal onder direct verkeer, alsof iemand je adres uit zijn hoofd intypte.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Waarom zie ik dark social niet in Google Analytics?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Omdat de gedeelde link geen verwijzende bron meestuurt. Analytics weet alleen waar iemand vandaan kwam als de vorige pagina dat doorgeeft. Bij een appje of een privébericht gebeurt dat niet, dus belandt het verkeer in de bak direct. Je site krijgt het bezoek wel, je weet alleen niet langs welke weg.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoeveel van mijn verkeer is dark social?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Dat verschilt per bedrijf en is niet exact te zeggen. Schattingen lopen uiteen, maar een groot deel van al het delen online gebeurt via privékanalen, vaak meer dan de helft. Een goede indicatie is direct verkeer dat binnenkomt op diepe pagina's die niemand zomaar intypt, zoals een specifieke productpagina of blog.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoe meet ik dark social het makkelijkst?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Begin met twee dingen. Tag elke link die je zelf deelt met UTM-codes, zodat je hem terugziet in je rapport. En vraag nieuwe klanten gewoon hoe ze je vonden, via een veldje in je formulier of mondeling. Die twee bronnen samen geven je al een eerlijk beeld zonder dat je dure software nodig hebt.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat zijn UTM-links en waarom helpen ze?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Een UTM-link is een gewone link met extra labels erachter die vertellen waar hij vandaan komt. Deel je hem in een nieuwsbrief of een appgroep, dan ziet je rapport precies dat terug. Zo verander je een deel van je onzichtbare verkeer in meetbaar verkeer, omdat jij de herkomst zelf hebt vastgelegd.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Kun je dark social helemaal dichttimmeren?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Nee, en dat hoeft ook niet. Je kunt nooit elk privébericht volgen, dat is juist de aard van dark social. Het doel is niet volledige meting, maar een betrouwbare schatting. Zodra je weet dat een flink deel van je beste verkeer via mond-tot-mond loopt, kun je daar gericht op sturen.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Is dark social goed of slecht voor mijn bedrijf?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Het is meestal goed nieuws. Verkeer dat mensen vrijwillig in hun appgroep delen, komt vaak van iemand die je vertrouwt. Die bezoekers converteren doorgaans beter dan koud advertentieverkeer. Het enige nadeel is dat je het lastig meet, waardoor je het belang ervan onderschat in je rapportage.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="mt-16 pt-12 border-t border-primary/10">
                        <h3 className="text-xl font-bold text-primary mb-6">Lees ook</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <Link to="/blogs/algemeen/data-betere-marketingbeslissingen" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Beslissen met data</h3>
                                <p className="text-primary/60 text-sm">Betere keuzes maken met de cijfers die je al hebt.</p>
                            </Link>
                            <Link to="/blogs/algemeen/customer-journey-uitgelegd-onbekende-klant" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">De customer journey</h3>
                                <p className="text-primary/60 text-sm">Van onbekende bezoeker naar trouwe klant.</p>
                            </Link>
                            <Link to="/blogs/algemeen" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Algemene blogs</h3>
                                <p className="text-primary/60 text-sm">Strategie en groei voor het MKB.</p>
                            </Link>
                        </div>
                    </section>
                </div>
            </article>

            <section className="w-full pb-32 px-6">
                <div className="max-w-4xl mx-auto bg-primary rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
                    <h2 className="relative z-10 font-drama italic text-background text-3xl sm:text-4xl md:text-5xl mb-6">Weet waar je groei echt vandaan komt</h2>
                    <p className="relative z-10 font-sans text-background/70 text-lg mb-10 max-w-xl mx-auto">We helpen je je verkeer eerlijk in kaart brengen, zodat je investeert in de kanalen die echt klanten opleveren. Benieuwd wat er verborgen zit in jouw cijfers?</p>
                    <Link to="/contact" className="relative z-10 btn-magnetic inline-flex items-center justify-center bg-accent text-background font-sans font-bold text-lg px-10 py-4 rounded-[2rem] hover:bg-accent/90 transition-colors">Neem contact op</Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
