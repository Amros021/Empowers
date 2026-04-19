import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ChevronRight, User } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function BlogPostGoogleAdsExtensies() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen selection:bg-accent/30 selection:text-dark flex flex-col bg-background">
            <Helmet>
                <title>Google Ads extensies: welke moet je altijd gebruiken? | Empowers</title>
                <meta name="description" content="Google Ads extensies (assets) verhogen je CTR met 10 tot 25%. Lees welke extensies je altijd aanzet, welke alleen soms en hoe je ze slim combineert voor meer resultaat." />
                <link rel="canonical" href="https://www.empowers.nl/blogs/google-ads/google-ads-extensies-altijd-gebruiken" />
                <meta property="og:title" content="Google Ads extensies: welke moet je altijd gebruiken?" />
                <meta property="og:description" content="Zo haal je meer klikken, leads en omzet uit je Google Ads campagnes door extensies (assets) slim te combineren." />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://www.empowers.nl/blogs/google-ads/google-ads-extensies-altijd-gebruiken" />
                <meta property="og:image" content="https://www.empowers.nl/images/blogs/google-ads-extensies-altijd-gebruiken.jpg" />
                <meta property="article:published_time" content="2026-04-18" />
                <meta property="article:author" content="Empowers" />
                <meta property="article:section" content="Google Ads" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Google Ads extensies: zo haal je meer uit je advertenties" />
                <meta name="twitter:description" content="De complete lijst van Google Ads assets en welke je altijd aan moet zetten voor betere CTR en lagere CPC." />

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Article",
                        "headline": "Google Ads extensies: welke moet je altijd gebruiken?",
                        "description": "Google Ads extensies (assets) verhogen je CTR met 10 tot 25%. Lees welke extensies je altijd aanzet, welke alleen soms en hoe je ze slim combineert voor meer resultaat.",
                        "image": "https://www.empowers.nl/images/blogs/google-ads-extensies-altijd-gebruiken.jpg",
                        "datePublished": "2026-04-18T10:00:00+02:00",
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
                                    "name": "Wat zijn Google Ads extensies?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Google Ads extensies, tegenwoordig assets genoemd, zijn extra regels en elementen die onder je advertentie verschijnen. Denk aan sitelinks, belscripts, prijzen en locaties. Ze maken je advertentie groter, geven meer informatie en verhogen doorgaans de CTR met 10 tot 25 procent zonder extra kosten per klik."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Welke Google Ads extensies moet je altijd aanzetten?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Zet sitelinks, uitbreidingen met highlights, gestructureerde snippets en belextensies standaard aan voor elke campagne. Dat zijn de vier die vrijwel altijd meer klikken opleveren. Locatie-extensies zijn verplicht voor lokale bedrijven. Afbeelding- en prijsextensies gebruik je wanneer je visueel sterke producten of diensten hebt."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Kosten Google Ads extensies extra geld?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Nee, je betaalt niets extra voor de extensies zelf. Je betaalt alleen de gewone kosten per klik zoals bij een normale advertentie. Klikt iemand op een sitelink of belknop, dan reken je dezelfde CPC als een klik op de hoofdadvertentie. Extensies zijn daarmee een van de weinige gratis manieren om meer uit je Google Ads budget te halen."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Waarom verschijnen mijn Google Ads extensies niet?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Extensies verschijnen alleen als Google verwacht dat ze de advertentie beter maken. Dat vraagt een goede Ad Rank, genoeg advertentieruimte in de SERP en relevante tekst. Een te lage positie, slechte Quality Score of te weinig extensies per type zijn de meest voorkomende oorzaken. Voeg minimaal vier sitelinks en vier uitbreidingen toe om kans op vertoning te vergroten."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Hoeveel sitelinks moet je toevoegen aan een Google Ads campagne?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Voeg zes tot acht sitelinks toe per campagne of advertentiegroep. Google toont er maximaal zes in desktopresultaten en vier op mobiel, maar hoe meer opties het systeem heeft, hoe beter het kan matchen met de zoekopdracht. Gebruik sitelinks die naar verschillende pagina's linken, niet naar varianten van dezelfde pagina."
                                    }
                                }
                            ]
                        },
                        "breadcrumb": {
                            "@type": "BreadcrumbList",
                            "itemListElement": [
                                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.empowers.nl" },
                                { "@type": "ListItem", "position": 2, "name": "Google Ads", "item": "https://www.empowers.nl/blogs/google-ads" },
                                { "@type": "ListItem", "position": 3, "name": "Google Ads extensies" }
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
                        <Link to="/blogs/google-ads" className="hover:text-accent transition-colors">Google Ads</Link>
                        <ChevronRight size={12} />
                        <span className="text-primary/30">Google Ads extensies</span>
                    </nav>

                    {/* Header */}
                    <header className="mb-16">
                        <div className="inline-block px-3 py-1 bg-accent/10 text-accent font-mono text-xs uppercase tracking-widest rounded-full mb-6">
                            Google Ads
                        </div>
                        <h1 className="font-sans font-bold text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight mb-8">
                            Google Ads extensies: welke moet je altijd gebruiken?
                        </h1>
                        <div className="flex flex-wrap items-center gap-6 text-sm font-sans text-primary/60 border-y border-primary/10 py-6">
                            <span className="flex items-center gap-2"><User size={14} />Empowers Redactie</span>
                            <span className="flex items-center gap-2"><Calendar size={14} />18 apr 2026</span>
                            <span className="flex items-center gap-2"><Clock size={14} />9 min leestijd</span>
                        </div>
                    </header>

                    {/* Featured Image */}
                    <figure className="w-full h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden mb-16 relative bg-primary">
                        <div className="absolute inset-0 bg-[url('/images/blogs/google-ads-extensies-altijd-gebruiken.jpg')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </figure>

                    {/* Content */}
                    <div className="prose prose-lg max-w-none">

                        <p className="text-xl leading-relaxed text-primary/80 font-medium mb-6">
                            Google Ads extensies, tegenwoordig officieel assets genoemd, zijn de snelste manier om meer uit jouw advertenties te halen zonder extra budget. Ze verhogen de CTR gemiddeld met 10 tot 25 procent en kosten niets extra per klik. In dit artikel lees je welke extensies je altijd aanzet, welke je selectief inzet en hoe je fouten voorkomt die veel adverteerders maken.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat zijn Google Ads extensies precies?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Google Ads extensies zijn de extra regels, knoppen en visuele elementen die onder of naast jouw tekstadvertentie verschijnen. Sinds 2022 noemt Google ze officieel assets, maar in de praktijk gebruikt bijna iedereen nog het woord extensies. Ze zorgen ervoor dat je advertentie meer ruimte inneemt op de zoekresultatenpagina en meer context biedt aan de gebruiker.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Denk aan een belknop onder je advertentie, extra links naar specifieke pagina's, jouw locatie met route of korte productinformatie met prijs. Google toont ze alleen als het algoritme verwacht dat ze de advertentie beter maken. Dat betekent dat extensies een directe signaal zijn van Quality Score en Ad Rank.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Bij onze klanten zien we dat campagnes met complete extensies consistent 15 tot 20 procent lagere CPC hebben dan dezelfde campagnes zonder. De reden: een grotere, rijkere advertentie krijgt meer kliks, en meer kliks verlagen jouw klikprijs via de veiling.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Welke extensies moet je altijd aanzetten?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Er zijn vier extensies die bij elke campagne thuishoren, ongeacht jouw sector of doelgroep. Laat je er één weg, dan geef je kliks weg aan concurrenten die wel de moeite nemen om ze in te stellen.
                        </p>

                        <h3 className="font-semibold text-primary text-xl mt-10 mb-4">1. Sitelink-extensies</h3>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Sitelinks zijn extra links die onder jouw advertentie verschijnen en naar specifieke pagina's op jouw website leiden. Voeg er zes tot acht toe per campagne, zodat Google kan kiezen welke het beste past bij de zoekopdracht. Gebruik korte titels van maximaal 25 tekens en link naar relevante pagina's zoals "Prijzen", "Contact", "Over ons" of specifieke dienstpagina's.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Link nooit drie sitelinks naar dezelfde pagina. Google filtert dubbele bestemmingen er direct uit. Vul ook altijd beide beschrijvingsregels in, want dat verhoogt de kans dat Google de uitgebreide sitelink-weergave toont met meer ruimte.
                        </p>

                        <h3 className="font-semibold text-primary text-xl mt-10 mb-4">2. Uitbreidingen met highlights</h3>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Highlight-extensies zijn korte, niet-klikbare teksten van maximaal 25 tekens waarin je kernwaarden of USP's zet. "Gratis verzending", "24/7 bereikbaar", "Gecertificeerd installateur" of "Levertijd 1 werkdag" zijn typische voorbeelden. Voeg er minimaal acht toe per campagne en varieer tussen service, proces en garanties.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Schrijf highlights zonder uitroeptekens of hoofdletters, want die keurt Google af. Herhaal nooit tekst die al in je advertentiekop staat. Highlights vullen aan, ze herhalen niet.
                        </p>

                        <h3 className="font-semibold text-primary text-xl mt-10 mb-4">3. Gestructureerde snippets</h3>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Gestructureerde snippets laten zien welke types producten of diensten je aanbiedt. Je kiest eerst een header zoals "Diensten", "Merken", "Modellen" of "Stijlen" en daaronder vul je drie tot tien waarden in. Een installateur kiest bijvoorbeeld header "Diensten" met waarden "Warmtepompen, Zonnepanelen, Airconditioning, Onderhoud".
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Kies de header die het dichtst bij jouw aanbod ligt. Google Ads is streng op relevantie: een kledingmerk kan geen header "Modellen" gebruiken, en een autobedrijf geen header "Stijlen". Een mismatch tussen header en inhoud zorgt ervoor dat het snippet nooit getoond wordt.
                        </p>

                        <h3 className="font-semibold text-primary text-xl mt-10 mb-4">4. Belextensies</h3>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Met een belextensie verschijnt jouw telefoonnummer onder de advertentie, op mobiel als directe belknop. Voor dienstenbedrijven, B2B-leveranciers en lokale ondernemers zijn dit vaak de goedkoopste leads: iemand die belt is verder in het beslisproces dan iemand die klikt. Stel werkuren in zodat de belknop alleen verschijnt als je bereikbaar bent, anders betaal je voor belclicks waar niemand opneemt.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Welke extensies zijn situationeel handig?</h2>

                        <h3 className="font-semibold text-primary text-xl mt-10 mb-4">Locatie-extensies</h3>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Voor lokale bedrijven zijn locatie-extensies geen optie maar een must. Ze tonen jouw adres, openingstijden en een kaartje. Koppel je Google Business Profile aan je Ads-account en de extensie staat binnen een uur actief. Webshops zonder fysieke winkel laten deze weg, tenzij ze showrooms of afhaalpunten hebben.
                        </p>

                        <h3 className="font-semibold text-primary text-xl mt-10 mb-4">Prijsextensies</h3>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Prijsextensies tonen een rij met drie tot acht producten of diensten inclusief prijs. Ze werken sterk voor webshops, SaaS-bedrijven en dienstverleners met transparante pakketten. Geef de goedkoopste optie eerst aan zodat de bezoeker een lage instap ziet. Vermijd prijsextensies als je werkt met maatwerk offertes, want onjuiste verwachtingen leveren telefoontjes op die nergens toe leiden.
                        </p>

                        <h3 className="font-semibold text-primary text-xl mt-10 mb-4">Afbeelding-extensies</h3>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Sinds eind 2021 kun je afbeeldingen toevoegen aan tekstadvertenties. Dat maakt de advertentie opvallend visueel, vooral op mobiel. Gebruik productfoto's, installaties of sfeerbeelden, geen logo's of teksten op de foto. De beeldresolutie moet minstens 300 bij 300 pixels zijn en de maximale bestandsgrootte 5 MB.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Let op: Google verbiedt tekst, telefoonnummers of URL's op afbeeldingen. Keurt ze af bij promotiebanners met koppen of kortingsstickers. Upload minimaal drie afbeeldingen per campagne zodat het systeem kan roteren.
                        </p>

                        <h3 className="font-semibold text-primary text-xl mt-10 mb-4">App-extensies</h3>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Alleen relevant als je een app hebt en app-installs als doel. App-extensies tonen een download-knop die direct naar de App Store of Google Play leidt. Voor veruit de meeste MKB-bedrijven is dit niet nuttig, dus laat hem uit.
                        </p>

                        <h3 className="font-semibold text-primary text-xl mt-10 mb-4">Promotie-extensies</h3>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Met promotie-extensies toon je tijdelijke acties zoals "20% korting" of "Gratis installatie tot eind mei". Ze zijn effectief rond Black Friday, uitverkoop of seizoenspieken. Plan ze vooraf in met een einddatum, want Google verwijdert ze automatisch wanneer de actie afloopt. Dat voorkomt misleidende advertenties.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe combineer je extensies slim?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Google toont per vertoning maximaal vier tot zes extensies, afhankelijk van het apparaat en de positie. Het algoritme kiest de mix die volgens hem de hoogste CTR oplevert. Jouw taak is om het systeem zoveel mogelijk goede opties te geven. Dat betekent minimaal zes sitelinks, acht highlights, twee gestructureerde snippets, drie afbeeldingen en een telefoonnummer.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Voeg extensies toe op campagne- én op accountniveau. Account-level extensies gelden als fallback voor elke campagne zonder eigen setup. Campagne-level extensies overschrijven account-level extensies als ze specifieker zijn. Gebruik campagne-level voor gerichte boodschappen, account-level voor algemene info zoals telefoonnummer en bedrijfsnaam.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            We krijgen deze vraag wekelijks: moet ik voor elke campagne andere sitelinks maken? Ja. Sitelinks voor een Performance Max campagne zien er anders uit dan voor een branded search campagne. Maatwerk per campagne levert in onze tests 8 tot 12 procent hogere CTR op dan gekopieerde sitelinks. Meer over campagnestructuur lees je in <Link to="/blogs/google-ads/google-ads-campagne-structuur" className="text-accent hover:underline">onze gids over Google Ads campagnestructuur</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Waarom verschijnen jouw extensies soms niet?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Extensies verschijnen nooit automatisch bij elke vertoning. Google kiest per veiling welke extensies het toont op basis van Ad Rank, positie, apparaat en verwachte CTR. Staat je advertentie op positie vier of lager, dan vervallen veel extensies omdat er geen ruimte is.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een lage Quality Score is de tweede reden. Advertenties met een Quality Score onder de vijf krijgen minder extensieruimte. Een veelgemaakte fout die we tegenkomen: adverteerders voegen extensies toe maar werken niet aan hun Quality Score. Fix eerst de onderliggende relevantie, dan gaan extensies vanzelf vaker vertonen. Meer over Quality Score verbeteren lees je in <Link to="/blogs/google-ads/google-ads-quality-score-verhogen" className="text-accent hover:underline">deze uitleg over het verhogen van jouw Quality Score</Link>.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Te weinig varianten per extensietype is de derde reden. Voeg je maar twee sitelinks toe, dan verschijnen ze vaak helemaal niet omdat Google minimaal vier nodig heeft voor de volledige weergave. Het systeem toont liever geen sitelinks dan een onvolledige reeks.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Vijf fouten die adverteerders steeds maken</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Veel MKB-bedrijven gebruiken extensies, maar halen er niet uit wat erin zit. De meest voorkomende fouten: te weinig sitelinks, te lange highlighttekst, dezelfde boodschap als in de advertentie, verlopen promoties die niet verwijderd zijn en ontbrekende belextensies voor campagnes gericht op diensten.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Check iedere twee maanden of jouw extensies nog actueel zijn. Prijzen veranderen, diensten komen en gaan, telefoonnummers wijzigen. Een verouderde extensie kost geen extra geld, maar ondermijnt het vertrouwen van de bezoeker voordat hij klikt. Voor complete campagnehygiëne zie onze <Link to="/blogs/google-ads/meest-voorkomende-problemen-google-ads" className="text-accent hover:underline">lijst met veelvoorkomende Google Ads problemen</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe meet je het effect van extensies?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Open in Google Ads het tabblad "Assets" en vergelijk de CTR van advertenties met en zonder specifieke extensies. Het rapport "Prestaties per asset" toont klikken, CTR en conversies per individuele sitelink of highlight. Gebruik dit om onderpresterende varianten te pauzeren en te vervangen.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een gezonde campagne heeft per type extensie minimaal één variant die boven de 2 procent CTR scoort. Scoort geen enkele sitelink boven 1 procent, dan is de hele set niet relevant genoeg voor de zoekintentie. Schrijf nieuwe titels rond de zoektermen die je daadwerkelijk goed doen in het zoektermenrapport.
                        </p>

                    </div>

                    {/* FAQ */}
                    <section className="mt-16 pt-12 border-t border-primary/10">
                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Veelgestelde vragen over Google Ads extensies</h2>
                        <div className="space-y-6 not-prose">
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat zijn Google Ads extensies?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Google Ads extensies, tegenwoordig assets genoemd, zijn extra regels en elementen die onder jouw advertentie verschijnen. Denk aan sitelinks, belscripts, prijzen en locaties. Ze maken je advertentie groter, geven meer informatie en verhogen doorgaans de CTR met 10 tot 25 procent zonder extra kosten per klik.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Welke Google Ads extensies moet je altijd aanzetten?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Zet sitelinks, uitbreidingen met highlights, gestructureerde snippets en belextensies standaard aan voor elke campagne. Dat zijn de vier die vrijwel altijd meer klikken opleveren. Locatie-extensies zijn verplicht voor lokale bedrijven. Afbeelding- en prijsextensies gebruik je wanneer je visueel sterke producten of diensten hebt.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Kosten Google Ads extensies extra geld?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Nee, je betaalt niets extra voor de extensies zelf. Je betaalt alleen de gewone kosten per klik zoals bij een normale advertentie. Klikt iemand op een sitelink of belknop, dan reken je dezelfde CPC als een klik op de hoofdadvertentie. Extensies zijn een van de weinige gratis manieren om meer uit je Google Ads budget te halen.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Waarom verschijnen mijn Google Ads extensies niet?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Extensies verschijnen alleen als Google verwacht dat ze de advertentie beter maken. Dat vraagt goede Ad Rank, genoeg advertentieruimte in de SERP en relevante tekst. Een lage positie, slechte Quality Score of te weinig extensies per type zijn de meest voorkomende oorzaken. Voeg minimaal vier sitelinks en vier uitbreidingen toe.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoeveel sitelinks moet je toevoegen aan een Google Ads campagne?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Voeg zes tot acht sitelinks toe per campagne of advertentiegroep. Google toont er maximaal zes in desktopresultaten en vier op mobiel, maar hoe meer opties het systeem heeft, hoe beter het kan matchen met de zoekopdracht. Gebruik sitelinks die naar verschillende pagina's linken, niet naar varianten van dezelfde pagina.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Werken extensies ook in Performance Max campagnes?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Ja, in Performance Max voeg je assets toe tijdens de campagne-setup. Google gebruikt ze automatisch in de verschillende ad formats en plaatsingen. Upload minimaal vijf koppen, vijf beschrijvingen, één logo, vijf afbeeldingen in verschillende verhoudingen en één video. Meer assets geeft Performance Max meer ruimte om te optimaliseren.</p>
                            </div>
                        </div>
                    </section>

                    {/* Related */}
                    <section className="mt-16 pt-12 border-t border-primary/10">
                        <h3 className="text-xl font-bold text-primary mb-6">Lees ook</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <Link to="/blogs/google-ads/google-ads-campagne-structuur" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Google Ads campagnestructuur</h3>
                                <p className="text-primary/60 text-sm">Zo bouw je een campagnestructuur waarmee elke euro rendement oplevert.</p>
                            </Link>
                            <Link to="/blogs/google-ads/google-ads-quality-score-verhogen" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Quality Score verhogen</h3>
                                <p className="text-primary/60 text-sm">Waarom Quality Score bepalend is voor je CPC en hoe je hem opkrikt.</p>
                            </Link>
                            <Link to="/blogs/google-ads/meest-voorkomende-problemen-google-ads" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Problemen in Google Ads</h3>
                                <p className="text-primary/60 text-sm">De meest gemaakte fouten in Google Ads campagnes en hoe je ze oplost.</p>
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
                        Meer halen uit jouw Google Ads?
                    </h2>
                    <p className="relative z-10 font-sans text-background/70 text-lg mb-10 max-w-xl mx-auto">
                        We kijken gratis mee naar jouw huidige assets en advertenties. Binnen een half uur weet je welke extensies ontbreken en hoeveel CTR je daarmee laat liggen.
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
