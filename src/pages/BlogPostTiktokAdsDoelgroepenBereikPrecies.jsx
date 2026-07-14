import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ChevronRight, User } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function BlogPostTiktokAdsDoelgroepenBereikPrecies() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen selection:bg-accent/30 selection:text-dark flex flex-col bg-background">
            <Helmet>
                <title>TikTok Ads doelgroepen instellen: zo bereik je precies de juiste mensen | Empowers</title>
                <meta name="description" content="Hoe stel je doelgroepen in TikTok Ads in zodat je advertenties bij de juiste mensen terechtkomen? Praktische gids over interest, behavior, custom en lookalike audiences." />
                <link rel="canonical" href="https://www.empowers.nl/blogs/social-ads/tiktok-ads-doelgroepen-bereik-precies" />
                <meta property="og:title" content="TikTok Ads doelgroepen: bereik precies de juiste mensen" />
                <meta property="og:description" content="Praktische gids voor doelgroepen in TikTok Ads. Interest targeting, custom audiences, lookalikes en wanneer je het algoritme zijn werk laat doen." />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://www.empowers.nl/blogs/social-ads/tiktok-ads-doelgroepen-bereik-precies" />
                <meta property="og:image" content="https://www.empowers.nl/images/blogs/tiktok-ads-doelgroepen-bereik-precies.jpg" />
                <meta property="article:published_time" content="2026-05-08T10:00:00+02:00" />
                <meta property="article:author" content="Empowers" />
                <meta property="article:section" content="Social Ads" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="TikTok Ads doelgroepen instellen: praktische gids" />
                <meta name="twitter:description" content="Interest, behavior, custom en lookalike audiences in TikTok Ads. Wat werkt wanneer." />

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Article",
                        "headline": "TikTok Ads doelgroepen instellen: zo bereik je precies de juiste mensen",
                        "description": "Hoe stel je doelgroepen in TikTok Ads in zodat je advertenties bij de juiste mensen terechtkomen?",
                        "image": "https://www.empowers.nl/images/blogs/tiktok-ads-doelgroepen-bereik-precies.jpg",
                        "datePublished": "2026-05-08T10:00:00+02:00",
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
                                    "name": "Welke doelgroep-types heeft TikTok Ads?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "TikTok kent vier hoofdtypes: demografisch (leeftijd, locatie, taal), interesse (categorieen waarin iemand actief is), gedrag (recente acties zoals video's bekijken of kopen), en custom audiences (eigen klantdata, websitebezoekers, retargeting). Daarnaast zijn er lookalikes op basis van een seed-audience."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Werkt brede targeting beter dan gedetailleerde targeting?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Op TikTok wel. Het algoritme is sterker in matching dan menselijke segmentatie. Bij Smart+ campagnes adviseert TikTok zelfs om bijna geen targeting in te stellen, op de basis-demografie na. Voor reguliere campagnes geldt: geef het algoritme minimaal een maand om te leren en stuur niet te snel bij."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Wanneer gebruik je een custom audience?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Custom audiences zijn ideaal voor retargeting (mensen die je site bezochten) en voor uitsluiting (bestaande klanten niet opnieuw werven). Een lookalike op basis van je beste klanten kan een snelle weg zijn naar nieuwe doelgroep-segmenten die op je huidige klanten lijken."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Hoe groot moet een seed-audience zijn voor een lookalike?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "TikTok adviseert minimaal duizend mensen in je seed. Onder die drempel mist het algoritme genoeg signaal om een betrouwbare lookalike te bouwen. Tien- tot twintigduizend is beter. Kwaliteit van de seed weegt zwaarder dan de omvang: een seed van 1.500 echte kopers werkt beter dan 10.000 random websitebezoekers."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Welke fout maken bedrijven het vaakst?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Te smal targeten. Adverteerders die net van Meta of LinkedIn komen, willen vaak op zes interesses tegelijk filteren. Op TikTok knijpt dat het algoritme dicht en stuwt het je CPM omhoog. Begin breed, laat het algoritme leren en versmal pas wanneer je data hebt om de keuze op te baseren."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Is geo-targeting in Nederland precies?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Op land- en stadsniveau ja. Op postcode-niveau is TikTok minder fijnmazig dan Google Ads. Voor lokale campagnes (een fysieke winkel, een evenement) werkt een radius van vijftien tot twintig kilometer rond een locatie meestal beter dan een stad selecteren. Hou er rekening mee dat TikTok-gebruikers vaak buiten woonplaats actief zijn."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Wat is exclusion targeting en wanneer gebruik je het?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Met exclusion targeting sluit je groepen uit. Bestaande klanten uitsluiten van een prospecting-campagne is de standaard-toepassing. Ook handig: medewerkers, leveranciers of regio's waar je geen levering hebt. Een goede exclusion-strategie houdt je budget weg bij verkeer dat toch niet converteert."
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
                            { "@type": "ListItem", "position": 4, "name": "TikTok Ads doelgroepen", "item": "https://www.empowers.nl/blogs/social-ads/tiktok-ads-doelgroepen-bereik-precies" }
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
                        <span className="text-primary truncate">TikTok Ads doelgroepen</span>
                    </nav>

                    <header className="mb-16">
                        <div className="inline-block px-3 py-1 bg-accent/10 text-accent font-mono text-xs uppercase tracking-widest rounded-full mb-6">
                            Social Ads
                        </div>
                        <h1 className="font-sans font-bold text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight mb-8">
                            TikTok Ads doelgroepen: bereik precies de juiste mensen
                        </h1>
                        <div className="flex flex-wrap items-center gap-6 text-sm font-sans text-primary/60 border-y border-primary/10 py-6">
                            <div className="flex items-center gap-2"><User className="w-4 h-4" /><span>Empowers Redactie</span></div>
                            <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>8 mei 2026</span></div>
                            <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>8 minuten leestijd</span></div>
                        </div>
                    </header>

                    <figure className="w-full h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden mb-16 relative bg-primary">
                        <div className="absolute inset-0 bg-[url('/images/blogs/tiktok-ads-doelgroepen-bereik-precies.jpg')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </figure>

                    <div className="prose prose-lg max-w-none prose-headings:text-primary prose-headings:font-bold prose-a:text-accent prose-a:underline hover:prose-a:text-accent/80">
                        <p className="text-xl leading-relaxed text-primary/80 font-medium mb-6">
                            TikTok Ads beloont brede targeting. Dat klinkt tegenintuitief voor adverteerders die jaren op Meta of LinkedIn precisie hebben geleerd. Maar het algoritme van TikTok werkt anders. Het herkent gedrag op basis van wat mensen daadwerkelijk bekijken en wegklikken, niet alleen op wat ze in profielvelden hebben opgegeven. Hieronder lees je hoe de doelgroep-architectuur in TikTok Ads in elkaar steekt en wanneer je welk type instelt.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">De vier doelgroep-types in TikTok Ads</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            TikTok Ads Manager kent vier hoofdtypes targeting. Demografisch (leeftijd, geslacht, locatie, taal). Interesse (categorieen waar iemand actief mee bezig is). Gedrag (recent gezien, geliked of gedeeld). En custom audiences, waaronder eigen klantdata, websitebezoekers via de TikTok Pixel en lookalikes. Per ad group kies je een mix.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Wat onderscheidt TikTok van Meta is dat het gedragssignaal zwaarder weegt dan het profielsignaal. Iemand die regelmatig kookvideo's bekijkt, valt voor TikTok onder de food-doelgroep, ook als die persoon nooit in zijn profiel heeft aangegeven van koken te houden. Voor adverteerders is dat een geschenk: je vist op intentie, niet op zelfgerapporteerde voorkeur.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Waarom brede targeting wint van smalle</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Adverteerders die net van Meta of LinkedIn komen, hebben de neiging om filters te stapelen. Mannen tussen 30 en 45, hbo-opgeleid, geinteresseerd in fitness en investeren. Logica zegt: hoe specifieker, hoe beter. Op TikTok werkt dat averechts. Elke filter knijpt het algoritme dicht en je CPM gaat omhoog. Het systeem heeft minder data om mee te leren, dus de voorspellingen worden zwakker.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Wat we steevast terugzien bij klanten: campagnes met alleen leeftijdsfilter en taal presteren in week vier beter dan campagnes die op zes interesses zijn dichtgezet. Het verschil zit niet in het bereik. Het zit in de leersnelheid. Brede targeting geeft het algoritme ruimte om snel te ontdekken wie wel en niet converteert. Smalle targeting dwingt het door een te kleine pool te ploegen.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een vuistregel: laat je ad group minimaal vijfhonderdduizend tot een miljoen mensen bereiken. TikTok geeft een audience-size-indicator in het paneel. Slaat die uit naar oranje of rood? Loslaten. Filters weghalen totdat hij weer groen wordt.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Custom audiences: retargeting en uitsluiting</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Custom audiences zijn doelgroepen die je zelf opbouwt. De drie meest gebruikte bronnen: een klantenlijst die je uploadt (e-mail of telefoonnummer), websitebezoekers die je via de TikTok Pixel verzamelt, en mensen die met eerdere advertenties hebben geinteracteerd (een video langer dan vijftig procent bekeken bijvoorbeeld). Voor elk type heb je een eigen tactiek.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Retargeting van websitebezoekers werkt op TikTok bescheidener dan op Meta. De pool is kleiner omdat lang niet elke bezoeker ook op TikTok zit. Wat wel werkt: video-engagers retargeten met een vervolgvideo die dieper inzoomt op het product. Iemand die je video van 30 seconden tot het einde keek, is een lauwere lead waard dan een random impressie.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            En vergeet de exclusions niet. Bestaande klanten uitsluiten van prospecting-campagnes scheelt je elke maand een fors deel verspild budget. Hetzelfde voor regio's waar je geen levering hebt of voor doelgroepen waar je product niet past. Hoe je je hele tracking-setup hiervoor inricht lees je in onze gids over <Link to="/blogs/tracking/marketing-tracking-conversies-meten" className="text-accent hover:underline">conversies meten via marketing-tracking</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Lookalikes: nieuwe doelgroepen vinden via je beste klanten</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een lookalike is een doelgroep die TikTok bouwt op basis van een seed: een groep mensen die jij al kent. Het algoritme zoekt vervolgens andere TikTok-gebruikers met vergelijkbaar gedrag. Bij goede input levert dat een van de meest stabiele prospecting-doelgroepen op die je kunt instellen.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Wat belangrijk is: kwaliteit van de seed weegt zwaarder dan omvang. Een seed van 1.500 mensen die afgelopen 90 dagen daadwerkelijk gekocht hebben, levert betere lookalikes op dan tienduizend ruwe websitebezoekers. Bouw je seed dus rond mensen die het waardevolle gedrag al hebben getoond. Tweede aandachtspunt: de seed moet minimaal duizend mensen tellen. Onder die drempel schakelt TikTok niet.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Smart+ en automatic targeting: laat het algoritme rijden</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Sinds 2024 duwt TikTok hard op zijn Smart+ campagnes. Daarbij draai je vrijwel alle handmatige targeting uit en geef je het algoritme de leiding. Resultaat: in veel sectoren een lagere CPA dan handmatig getargete campagnes, mits je je creatieve materiaal goed voedt en je conversie-events schoon zijn. Geen wonder, geen tovenarij. Het algoritme heeft simpelweg meer data dan jij.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Wanneer is Smart+ minder geschikt? Als je product een sterk niche-segment heeft (heel specifieke B2B-doelgroep, geografisch beperkt aanbod), dan haalt Smart+ vaak verkeerd verkeer binnen. In die gevallen werk je beter met handmatige campagnes en stevige exclusion-targeting. Meer over de afweging staat in onze gids <Link to="/blogs/social-ads/tiktok-smart-campagnes-uitgelegd" className="text-accent hover:underline">TikTok Smart+ campagnes uitgelegd</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Geo-targeting in Nederland</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Op land- en stadsniveau is TikTok prima accuraat. Op postcode-niveau wordt het ruwer dan Google Ads. Voor een lokale ondernemer met een fysieke winkel werkt een radius rond de locatie meestal beter dan stadselectie. Vijftien tot twintig kilometer is het venster waarin we doorgaans de beste resultaten zien voor lokale campagnes.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Iets om in gedachten te houden: TikTok-gebruikers zijn mobiel. Een Amsterdammer die op woensdag in Utrecht werkt, kan jouw advertentie tijdens de lunchpauze zien. Voor een evenement of pop-up is dat juist gunstig. Voor een buurtwinkel kan het irrelevant verkeer opleveren. Stem je targeting af op het type beweging dat past bij jouw aanbod.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Praktische volgorde voor een nieuwe campagne</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Begin breed. Demografische basis (leeftijd, taal Nederlands, locatie NL) en verder niets. Voed het algoritme een week of twee met conversie-data. Pas dan kijk je naar wie er converteert en bouw je een tweede ad group met een lookalike op basis van die kopers. Daarna laag je daar exclusions onder zodat je bestaande klanten en irrelevante regio's uitsluit. Als laatste stap: een retargeting-ad-group voor video-engagers en site-bezoekers.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Wat we doorgaans aanraden tegen onze klanten: niet meer dan drie tot vier ad groups per campagne. Te veel groepen versnipperen je leerdata en je budget. Per ad group minimaal vijftig conversies per week om het algoritme uit de leerfase te trekken. Onder die drempel werkt TikTok minder voorspelbaar.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wanneer is een specialist nodig?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een eerste TikTok Ads-campagne kun je zelf opzetten. Het wordt complexer als je doelgroep-architectuur over meerdere markten of meerdere productlijnen loopt, of als je merkt dat je campagnes blijven steken op een te dure CPA terwijl je creatives prima presteren. Op zo'n moment zit het probleem zelden in de targeting alleen. Meestal is het een combinatie van event-design, exclusion-strategie en biedstrategie.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een goede specialist gaat in een uur door je account en herkent de twee of drie hefbomen die het verschil maken. Wil je dat we dat samen doen? Plan een vrijblijvend gesprek via onze <Link to="/contact" className="text-accent hover:underline">contactpagina</Link>.
                        </p>
                    </div>

                    <section className="mt-16 pt-12 border-t border-primary/10">
                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Veelgestelde vragen</h2>
                        <div className="space-y-6 not-prose">
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Welke doelgroep-types heeft TikTok Ads?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">TikTok kent vier hoofdtypes: demografisch (leeftijd, locatie, taal), interesse (categorieen waarin iemand actief is), gedrag (recente acties zoals video's bekijken of kopen), en custom audiences (eigen klantdata, websitebezoekers, retargeting). Daarnaast zijn er lookalikes op basis van een seed-audience.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Werkt brede targeting beter dan gedetailleerde targeting?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Op TikTok wel. Het algoritme is sterker in matching dan menselijke segmentatie. Bij Smart+ campagnes adviseert TikTok zelfs om bijna geen targeting in te stellen, op de basis-demografie na. Voor reguliere campagnes geldt: geef het algoritme minimaal een maand om te leren en stuur niet te snel bij.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wanneer gebruik je een custom audience?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Custom audiences zijn ideaal voor retargeting (mensen die je site bezochten) en voor uitsluiting (bestaande klanten niet opnieuw werven). Een lookalike op basis van je beste klanten kan een snelle weg zijn naar nieuwe doelgroep-segmenten die op je huidige klanten lijken.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoe groot moet een seed-audience zijn voor een lookalike?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">TikTok adviseert minimaal duizend mensen in je seed. Onder die drempel mist het algoritme genoeg signaal om een betrouwbare lookalike te bouwen. Tien- tot twintigduizend is beter. Kwaliteit van de seed weegt zwaarder dan de omvang: een seed van 1.500 echte kopers werkt beter dan 10.000 random websitebezoekers.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Welke fout maken bedrijven het vaakst?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Te smal targeten. Adverteerders die net van Meta of LinkedIn komen, willen vaak op zes interesses tegelijk filteren. Op TikTok knijpt dat het algoritme dicht en stuwt het je CPM omhoog. Begin breed, laat het algoritme leren en versmal pas wanneer je data hebt om de keuze op te baseren.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Is geo-targeting in Nederland precies?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Op land- en stadsniveau ja. Op postcode-niveau is TikTok minder fijnmazig dan Google Ads. Voor lokale campagnes (een fysieke winkel, een evenement) werkt een radius van vijftien tot twintig kilometer rond een locatie meestal beter dan een stad selecteren. Hou er rekening mee dat TikTok-gebruikers vaak buiten woonplaats actief zijn.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat is exclusion targeting en wanneer gebruik je het?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Met exclusion targeting sluit je groepen uit. Bestaande klanten uitsluiten van een prospecting-campagne is de standaard-toepassing. Ook handig: medewerkers, leveranciers of regio's waar je geen levering hebt. Een goede exclusion-strategie houdt je budget weg bij verkeer dat toch niet converteert.</p>
                            </div>
                        </div>
                    </section>

                    <section className="mt-16 pt-12 border-t border-primary/10">
                        <h3 className="text-xl font-bold text-primary mb-6">Lees ook</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <Link to="/blogs/social-ads/tiktok-smart-campagnes-uitgelegd" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">TikTok Smart+ campagnes uitgelegd</h3>
                                <p className="text-primary/60 text-sm">Hoe Smart+ werkt en wanneer handmatige targeting beter is.</p>
                            </Link>
                            <Link to="/blogs/social-ads/tiktok-ads-video-converteert" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Een TikTok-video die converteert</h3>
                                <p className="text-primary/60 text-sm">Welke creatives beter doelgroep-bereik halen.</p>
                            </Link>
                            <Link to="/blogs/tracking/marketing-tracking-conversies-meten" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Conversies meten met marketing-tracking</h3>
                                <p className="text-primary/60 text-sm">Hoe schone tracking je doelgroep-targeting beter maakt.</p>
                            </Link>
                        </div>
                    </section>

                </div>
            </article>

            <section className="w-full pb-32 px-6">
                <div className="max-w-4xl mx-auto bg-primary rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
                    <h2 className="relative z-10 font-drama italic text-background text-3xl sm:text-4xl md:text-5xl mb-6">
                        Geen tijd kwijt aan verkeerde doelgroepen
                    </h2>
                    <p className="relative z-10 font-sans text-background/70 text-lg mb-10 max-w-xl mx-auto">
                        We zetten je TikTok Ads-architectuur strak op: van pixel tot lookalike. Binnen 30 dagen merk je het verschil in CPA.
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
