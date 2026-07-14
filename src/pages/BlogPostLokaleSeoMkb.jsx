import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ChevronRight, User } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function BlogPostLokaleSeoMkb() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen selection:bg-accent/30 selection:text-dark flex flex-col bg-background">
            <Helmet>
                <title>Lokale SEO voor MKB: zo word je gevonden in jouw regio | Empowers</title>
                <meta name="description" content="Lokale SEO maakt het verschil tussen onzichtbaar en vindbaar in jouw regio. Lees in welke stappen je als MKB bovenaan komt in Google Maps en lokale zoekresultaten." />
                <link rel="canonical" href="https://www.empowers.nl/blogs/seo/lokale-seo-mkb-word-gevonden" />
                <meta property="og:title" content="Lokale SEO voor MKB: zo word je gevonden in jouw regio" />
                <meta property="og:description" content="Zo komt jouw MKB bovenaan in Google Maps en lokale zoekopdrachten. Google Business Profile, NAP-consistentie, reviews en meer." />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://www.empowers.nl/blogs/seo/lokale-seo-mkb-word-gevonden" />
                <meta property="og:image" content="https://www.empowers.nl/images/blogs/lokale-seo-mkb-word-gevonden.jpg" />
                <meta property="article:published_time" content="2026-04-24T09:00:00+02:00" />
                <meta property="article:author" content="Empowers" />
                <meta property="article:section" content="SEO" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Lokale SEO voor MKB: zo word je gevonden in jouw regio" />
                <meta name="twitter:description" content="Praktisch stappenplan voor MKB-ondernemers die bovenaan willen staan in lokale zoekresultaten." />

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Article",
                        "headline": "Lokale SEO voor MKB: zo word je gevonden in jouw regio",
                        "description": "Lokale SEO maakt het verschil tussen onzichtbaar en vindbaar in jouw regio. Lees in welke stappen je als MKB bovenaan komt in Google Maps en lokale zoekresultaten.",
                        "image": "https://www.empowers.nl/images/blogs/lokale-seo-mkb-word-gevonden.jpg",
                        "datePublished": "2026-04-24T09:00:00+02:00",
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
                                    "name": "Wat is lokale SEO precies?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Lokale SEO is het optimaliseren van je online aanwezigheid zodat je beter gevonden wordt in zoekopdrachten met een regionale intentie. Denk aan zoekopdrachten als 'loodgieter Utrecht' of 'kapper bij mij in de buurt'. Je focust op Google Business Profile, lokale landingspagina's, reviews en NAP-consistentie. Het doel is bovenaan staan in Google Maps en de lokale resultaten."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Hoe lang duurt het voordat lokale SEO resultaat oplevert?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Een goed opgezet Google Business Profile levert binnen twee tot vier weken eerste weergaven op. Substantiële groei in rankings en aanvragen zie je meestal na drie tot zes maanden, als je consistent reviews verzamelt en citations opbouwt. In minder competitieve regio's gaat het sneller dan in een grote stad."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Heb ik een fysieke locatie nodig voor lokale SEO?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Niet per se. Service Area Businesses kunnen ook een Google Business Profile aanmaken zonder fysiek adres. Je geeft dan op welke postcodes of steden je bedient. Denk aan loodgieters, schoonmaakbedrijven of mobiele reparatiediensten. Het profiel gedraagt zich iets anders, maar je rankt nog steeds in lokale zoekopdrachten."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Wat is NAP-consistentie en waarom is het belangrijk?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "NAP staat voor Name, Address, Phone. Google checkt of jouw bedrijfsgegevens overal op het web exact gelijk staan: op je site, in je Google Business Profile, op sociale media en op branche-platforms. Afwijkingen geven Google twijfel over welke versie klopt. Consistente NAP-data is een directe rankingfactor in lokale zoekopdrachten."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Hoeveel reviews heb ik nodig om lokaal te ranken?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Er is geen magisch aantal, maar je hebt meer reviews nodig dan je directe concurrenten in dezelfde stad. Voor de meeste MKB-branches betekent dat tussen de 30 en 100 reviews met een gemiddelde van minimaal 4,5 sterren. Continuïteit telt: Google beloont bedrijven die elke maand nieuwe reviews krijgen boven bedrijven die in één klap 200 reviews verzamelden en daarna stilvielen."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Moet ik een aparte pagina per stad maken?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Alleen als je de pagina's echt uniek maakt. Een kopie-plak pagina met alleen een andere stadsnaam werkt niet en wordt door Google zelfs gepenaliseerd. Schrijf per stad eigen content: referenties uit die regio, specifieke werkzaamheden, lokale routebeschrijving en klantcases. Zonder die moeite is één sterke stadspagina of serviceregio-pagina effectiever."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Wat kost lokale SEO voor een MKB-bedrijf?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Zelf opzetten kost vooral tijd: reken op 40 tot 60 uur in de eerste maanden. Uitbesteden aan een specialist kost tussen 500 en 1500 euro per maand voor een MKB-traject, afhankelijk van aantal locaties en concurrentie. Voor bedrijven met een lokale focus verdient dit zich meestal terug binnen zes maanden via extra aanvragen."
                                    }
                                }
                            ]
                        },
                        "breadcrumb": {
                            "@type": "BreadcrumbList",
                            "itemListElement": [
                                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.empowers.nl" },
                                { "@type": "ListItem", "position": 2, "name": "SEO", "item": "https://www.empowers.nl/blogs/seo" },
                                { "@type": "ListItem", "position": 3, "name": "Lokale SEO voor MKB" }
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
                        <Link to="/blogs/seo" className="hover:text-accent transition-colors">SEO</Link>
                        <ChevronRight size={12} />
                        <span className="text-primary/30">Lokale SEO voor MKB</span>
                    </nav>

                    {/* Header */}
                    <header className="mb-16">
                        <div className="inline-block px-3 py-1 bg-accent/10 text-accent font-mono text-xs uppercase tracking-widest rounded-full mb-6">
                            SEO
                        </div>
                        <h1 className="font-sans font-bold text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight mb-8">
                            Lokale SEO voor MKB: zo word je gevonden in jouw regio
                        </h1>
                        <div className="flex flex-wrap items-center gap-6 text-sm font-sans text-primary/60 border-y border-primary/10 py-6">
                            <span className="flex items-center gap-2"><User size={14} />Empowers Redactie</span>
                            <span className="flex items-center gap-2"><Calendar size={14} />24 apr 2026</span>
                            <span className="flex items-center gap-2"><Clock size={14} />8 min leestijd</span>
                        </div>
                    </header>

                    {/* Featured Image */}
                    <figure className="w-full h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden mb-16 relative bg-primary">
                        <div className="absolute inset-0 bg-[url('/images/blogs/lokale-seo-mkb-word-gevonden.jpg')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </figure>

                    {/* Content */}
                    <div className="prose prose-lg max-w-none">

                        <p className="text-xl leading-relaxed text-primary/80 font-medium mb-6">
                            Lokale SEO zorgt dat mensen in jouw regio jouw bedrijf vinden op het moment dat ze iets zoeken. Bovenaan in Google Maps. Tussen de drie lokale resultaten bij zoekopdrachten zoals "kapper Amersfoort" of "loodgieter bij mij in de buurt". Voor een MKB met een fysieke locatie of een duidelijk verzorgingsgebied is dit vaak het belangrijkste online kanaal. In dit artikel lees je welke stappen je concreet zet, wat wel werkt en wat tijdverspilling is.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat is lokale SEO precies?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Lokale SEO is het optimaliseren van je zichtbaarheid in zoekopdrachten met een regionale intentie. Google toont bij dit soort zoekopdrachten een apart blok met drie bedrijven en een kaart, de zogenaamde local pack. Daaronder staan de klassieke organische resultaten. Wie in dat bovenste blok verschijnt pakt het grootste deel van de kliks.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De algoritmes achter dit blok werken anders dan klassieke SEO. Google kijkt naar relevantie (kloppen jouw diensten met de zoekopdracht), afstand (hoe dichtbij ben je) en prominentie (hoe bekend is jouw bedrijf online). Daarom werken dezelfde trucjes niet. Backlinks zijn minder belangrijk dan reviews. Paginasnelheid weegt minder mee dan een compleet ingevuld Google Business Profile.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Bij onze klanten zien we dat een MKB-bedrijf dat serieus inzet op lokale SEO binnen vier tot zes maanden structureel 3 tot 5 keer zoveel aanvragen uit Google haalt. Zonder extra advertentiebudget. De inzet zit vooral in het eerste kwartaal.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Waarom lokale SEO voor MKB verschil maakt</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Bijna de helft van alle Google-zoekopdrachten heeft een lokale component. Dat percentage stijgt elk jaar, vooral door mobiele zoekopdrachten met "in de buurt". Voor MKB-bedrijven met een regionale focus betekent dit dat lokale zichtbaarheid het verschil maakt tussen een volle agenda en stille weken.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Lokale resultaten zijn bovendien vaak minder competitief dan landelijke zoekwoorden. Strijden om "boekhouder" is kansloos als klein kantoor. Strijden om "boekhouder Zwolle" is haalbaar binnen een jaar. Dit maakt lokale SEO het aantrekkelijkste SEO-kanaal voor veel MKB-bedrijven.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een derde voordeel: de ROI is direct meetbaar. Google Business Profile laat zien hoeveel mensen via jouw profiel belden, een route aanvroegen of naar de website gingen. Geen andere SEO-discipline laat zo direct zien wat het opbrengt.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Stap 1: Google Business Profile volledig invullen</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Je Google Business Profile is het fundament van lokale SEO. Dit is het profiel dat in Google Maps en de local pack verschijnt. Claim of maak een profiel aan via google.com/business en vul elk veld in. Halfingevulde profielen ranken aanzienlijk lager dan complete.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Let speciaal op deze onderdelen: bedrijfsnaam exact zoals in het KvK-register, juiste hoofdcategorie plus maximaal negen subcategorieën, correcte openingstijden inclusief feestdagen, minimaal tien kwalitatieve foto's van binnen, buiten en team, en een bedrijfsomschrijving van 750 tekens die jouw diensten en het verzorgingsgebied benoemt.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Activeer ook de functie voor berichten en plaats elke twee weken een update via de post-functie. Google beloont actieve profielen met hogere rankings. Profielen die maanden stil liggen dalen geleidelijk.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Stap 2: zorg voor NAP-consistentie</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            NAP staat voor Name, Address, Phone. Jouw bedrijfsgegevens moeten overal op het web exact gelijk staan. Google checkt deze data op je website, in je Google Business Profile, op sociale media en op branche-platforms zoals Telefoonboek.nl, Yelp of branchespecifieke directories. Afwijkingen geven Google twijfel over welke versie klopt, wat direct impact heeft op je ranking.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Let op kleine verschillen die grote gevolgen hebben. Schrijf je "Kerkstraat 12" of "Kerkstraat 12A"? Gebruik je "BV" of "B.V."? Staat je 06-nummer overal als "+31 6..." of als "06..."? Kies één variant en gebruik die overal identiek. Inventariseer op welke platforms jouw bedrijf vermeld staat via een citation scan, bijvoorbeeld via BrightLocal of Whitespark.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Bij een klant in Utrecht troffen we negen verschillende schrijfwijzen aan over 31 platforms. Na het opschonen steeg het profiel binnen acht weken van plek 7 naar plek 2 in de local pack voor hun belangrijkste zoekwoord. Geen andere actie, alleen consistentie aangebracht.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Stap 3: reviews verzamelen die ertoe doen</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Reviews zijn na je Business Profile zelf de sterkste rankingfactor in lokale SEO. Google kijkt naar drie dingen: aantal reviews, gemiddelde sterren en hoe recent ze zijn. Bedrijven met 50 reviews waarvan de laatste van twee jaar oud is verliezen ranking aan bedrijven met 30 reviews en elke maand een nieuwe.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Bouw een vast proces om reviews te vragen. Stuur 48 uur na levering of afronding een korte mail of WhatsApp met een directe link naar jouw review-URL van Google. Die link haal je uit je Business Profile onder Reviews delen. Maak het de klant zo makkelijk mogelijk. Hoe meer frictie, hoe minder reviews.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Reageer op elke review, zowel positief als negatief, binnen 48 uur. Verwerk het zoekwoord in je antwoord waar dat natuurlijk past. "Bedankt voor je review, fijn dat je tevreden bent over onze loodgieterswerkzaamheden in Amersfoort." Google leest deze antwoorden en gebruikt ze als signaal voor de relevantie van jouw bedrijf.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Stap 4: lokale landingspagina's bouwen</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Als je meerdere steden of regio's bedient, maak dan per stad een eigen landingspagina. Maar doe dit alleen goed. Een kopie-plak pagina met alleen een andere stadsnaam werkt niet en wordt door Google gezien als thin content. Het kan je zelfs terugwerpen in de rankings.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een effectieve stadspagina bevat: unieke tekst over jouw werkzaamheden in die specifieke regio, referenties van klanten uit die stad, foto's van projecten in de omgeving, een routebeschrijving vanaf bekende punten, informatie over lokale omstandigheden (bijvoorbeeld welke wijken specifieke kenmerken hebben) en een ingesloten Google Map. Reken op minimaal 600 tot 800 woorden unieke tekst per stad.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Werk je met een klein aantal steden, dan levert het veel op. Werk je in 40 gemeenten, dan is één gedegen serviceregio-pagina met alle steden in een lijst effectiever dan 40 zwakke stadspagina's. Voor de technische onderlegger van zulke pagina's lees je meer in <Link to="/blogs/seo/technische-seo-audit" className="text-accent hover:underline">onze technische SEO audit</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Stap 5: lokale backlinks en citations opbouwen</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Naast NAP-consistentie wil je ook actief lokale autoriteit opbouwen. Lokale backlinks tellen zwaarder mee voor lokale rankings dan generieke backlinks. Denk aan vermeldingen op de site van de Kamer van Koophandel van jouw regio, lokale krant, ondernemersvereniging, sponsoring van een plaatselijke vereniging of plaatselijke evenementenkalender.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Citations (vermeldingen van je bedrijfsnaam en contactgegevens zonder link) tellen ook mee. Registreer jouw bedrijf op de belangrijkste Nederlandse directories: Telefoonboek.nl, Startpagina.nl, branchespecifieke platforms, Yelp Nederland en brancheverenigingen. Elke vermelding versterkt het signaal richting Google dat jouw bedrijf écht bestaat op dit adres.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een structurele manier om backlinks te krijgen is gastbloggen voor lokale media of business-platformen in jouw stad. Eén artikel per kwartaal met een terugverwijzing naar jouw site bouwt stevig lokaal signaal op. In <Link to="/blogs/seo/backlinks-opbouwen" className="text-accent hover:underline">onze gids over backlinks opbouwen</Link> lees je dieper hoe je dit aanpakt.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Stap 6: on-page SEO voor lokale zoekopdrachten</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Jouw website moet Google duidelijk maken waar je werkt. Noem de stad of regio in titels, H1's en meta-omschrijvingen van relevante pagina's. Niet overdrijven, wel consequent. Een homepage-titel als "Loodgieter Amersfoort | Spoed binnen 2 uur | Bedrijfsnaam" communiceert direct de lokale focus.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Zet op je contactpagina altijd de volledige NAP-gegevens, een ingesloten Google Map en openingstijden in leesbare tekst (niet alleen in een afbeelding). Voeg LocalBusiness schema markup toe aan je homepage. Dit schema helpt Google direct te begrijpen dat jij een lokaal bedrijf bent met specifieke kenmerken zoals openingstijden en verzorgingsgebied.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Stap 7: meet wat werkt</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Zonder meten weet je niet of jouw inspanningen iets opleveren. Google Business Profile geeft in de tab Statistieken direct inzicht: aantal weergaven, klikken naar je site, belacties, routeaanvragen en welke zoekopdrachten je profiel opriepen. Vergelijk elke maand met de vorige.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Houd daarnaast een positie-ranglijst bij voor jouw belangrijkste zoekwoorden. Gebruik tools zoals BrightLocal of Local Falcon die meten op welke positie jouw bedrijf staat op verschillende plekken in de stad. Rankings verschillen namelijk per locatie waarop je zoekt, iets wat klassieke SEO-tools negeren.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Koppel aanvragen vanuit Google terug aan je CRM of bel-registratie. Pas dan zie je of de groei in weergaven ook groei in omzet oplevert. Die laatste stap slaan veel ondernemers over en dat is zonde: de verhouding tussen weergaven en klanten vertelt je direct waar je nog kunt groeien.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Veelgemaakte fouten bij lokale SEO</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De grootste fout is het kopen van reviews of zelf reviews laten schrijven door vrienden. Google detecteert dit via IP-patronen, accountleeftijd en schrijfstijl. De straffen lopen uiteen van het niet tonen van reviews tot volledige suspend van je Business Profile. Altijd authentieke reviews van echte klanten.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een tweede veelgemaakte fout: de bedrijfsnaam aanpassen met zoekwoorden. "Loodgietersbedrijf Piet" veranderen in "Loodgieter Amersfoort Snel Piet" is een overtreding van Google's richtlijnen en kan leiden tot suspend. Gebruik je echte KvK-naam. Categorie-keuze en serviceomschrijving geven je de ruimte om zoekwoorden in te zetten.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De derde fout zien we vooral bij kleine ondernemers: alles tegelijk willen doen en na drie weken afhaken omdat de resultaten uitblijven. Lokale SEO is een marathon. De eerste tekenen van vooruitgang zie je na vier weken, structurele groei komt in maand drie tot zes. Volhouden is de grootste succesfactor.
                        </p>

                    </div>

                    {/* FAQ */}
                    <section className="mt-16 pt-12 border-t border-primary/10">
                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Veelgestelde vragen over lokale SEO voor MKB</h2>
                        <div className="space-y-6 not-prose">
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat is lokale SEO precies?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Lokale SEO is het optimaliseren van je online aanwezigheid zodat je beter gevonden wordt in zoekopdrachten met een regionale intentie. Denk aan zoekopdrachten als "loodgieter Utrecht" of "kapper bij mij in de buurt". Je focust op Google Business Profile, lokale landingspagina's, reviews en NAP-consistentie. Het doel is bovenaan staan in Google Maps en de lokale resultaten.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoe lang duurt het voordat lokale SEO resultaat oplevert?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Een goed opgezet Google Business Profile levert binnen twee tot vier weken eerste weergaven op. Substantiële groei in rankings en aanvragen zie je meestal na drie tot zes maanden, als je consistent reviews verzamelt en citations opbouwt. In minder competitieve regio's gaat het sneller dan in een grote stad.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Heb ik een fysieke locatie nodig voor lokale SEO?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Niet per se. Service Area Businesses kunnen ook een Google Business Profile aanmaken zonder fysiek adres. Je geeft dan op welke postcodes of steden je bedient. Denk aan loodgieters, schoonmaakbedrijven of mobiele reparatiediensten. Het profiel gedraagt zich iets anders, maar je rankt nog steeds in lokale zoekopdrachten.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat is NAP-consistentie en waarom is het belangrijk?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">NAP staat voor Name, Address, Phone. Google checkt of jouw bedrijfsgegevens overal op het web exact gelijk staan: op je site, in je Google Business Profile, op sociale media en op branche-platforms. Afwijkingen geven Google twijfel over welke versie klopt. Consistente NAP-data is een directe rankingfactor in lokale zoekopdrachten.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoeveel reviews heb ik nodig om lokaal te ranken?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Er is geen magisch aantal, maar je hebt meer reviews nodig dan je directe concurrenten in dezelfde stad. Voor de meeste MKB-branches betekent dat tussen de 30 en 100 reviews met een gemiddelde van minimaal 4,5 sterren. Continuïteit telt: Google beloont bedrijven die elke maand nieuwe reviews krijgen boven bedrijven die in één klap 200 reviews verzamelden en daarna stilvielen.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Moet ik een aparte pagina per stad maken?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Alleen als je de pagina's echt uniek maakt. Een kopie-plak pagina met alleen een andere stadsnaam werkt niet en wordt door Google zelfs gepenaliseerd. Schrijf per stad eigen content: referenties uit die regio, specifieke werkzaamheden, lokale routebeschrijving en klantcases. Zonder die moeite is één sterke stadspagina of serviceregio-pagina effectiever.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat kost lokale SEO voor een MKB-bedrijf?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Zelf opzetten kost vooral tijd: reken op 40 tot 60 uur in de eerste maanden. Uitbesteden aan een specialist kost tussen 500 en 1500 euro per maand voor een MKB-traject, afhankelijk van aantal locaties en concurrentie. Voor bedrijven met een lokale focus verdient dit zich meestal terug binnen zes maanden via extra aanvragen.</p>
                            </div>
                        </div>
                    </section>

                    {/* Related */}
                    <section className="mt-16 pt-12 border-t border-primary/10">
                        <h3 className="text-xl font-bold text-primary mb-6">Lees ook</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <Link to="/blogs/seo/technische-seo-audit" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Technische SEO audit</h3>
                                <p className="text-primary/60 text-sm">De complete checklist om te zien wat jouw site technisch afremt.</p>
                            </Link>
                            <Link to="/blogs/seo/backlinks-opbouwen" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Backlinks opbouwen</h3>
                                <p className="text-primary/60 text-sm">Hoe je kwalitatieve backlinks wint die jouw autoriteit versterken.</p>
                            </Link>
                            <Link to="/blogs/google-ads/google-ads-lokale-bedrijven" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Google Ads voor lokale bedrijven</h3>
                                <p className="text-primary/60 text-sm">Hoe je met Google Ads direct klanten uit jouw regio bereikt.</p>
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
                        Bovenaan in jouw regio?
                    </h2>
                    <p className="relative z-10 font-sans text-background/70 text-lg mb-10 max-w-xl mx-auto">
                        We scannen jouw Google Business Profile en lokale ranking gratis. Binnen een week weet je welke stappen nu de meeste aanvragen opleveren.
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
