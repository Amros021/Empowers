import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ChevronRight, User } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function BlogPostLinkedInAdsBeginners() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen selection:bg-accent/30 selection:text-dark flex flex-col bg-background">
            <Helmet>
                <title>LinkedIn Ads voor beginners: zo start je jouw eerste B2B campagne | Empowers</title>
                <meta name="description" content="LinkedIn Ads zijn het sterkste B2B advertentiekanaal in Nederland. Lees hoe je je eerste campagne opzet, wat het kost en welke fouten je moet vermijden." />
                <link rel="canonical" href="https://www.empowers.nl/blogs/social-ads/linkedin-ads-beginners-eerste-b2b" />
                <meta property="og:title" content="LinkedIn Ads voor beginners: zo start je jouw eerste B2B campagne" />
                <meta property="og:description" content="LinkedIn Ads zijn het sterkste B2B advertentiekanaal. Lees hoe je je eerste campagne opzet en wat het kost." />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://www.empowers.nl/blogs/social-ads/linkedin-ads-beginners-eerste-b2b" />
                <meta property="og:image" content="https://www.empowers.nl/images/blogs/linkedin-ads-beginners-eerste-b2b.jpg" />
                <meta property="article:published_time" content="2026-04-02" />
                <meta property="article:author" content="Empowers" />
                <meta property="article:section" content="Social Ads" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="LinkedIn Ads voor beginners: zo start je jouw eerste B2B campagne" />
                <meta name="twitter:description" content="LinkedIn Ads zijn het sterkste B2B advertentiekanaal. Lees hoe je je eerste campagne opzet." />

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Article",
                        "headline": "LinkedIn Ads voor beginners: zo start je jouw eerste B2B campagne",
                        "description": "LinkedIn Ads zijn het sterkste B2B advertentiekanaal in Nederland. Lees hoe je je eerste campagne opzet, wat het kost en welke fouten je moet vermijden.",
                        "image": "https://www.empowers.nl/images/blogs/linkedin-ads-beginners-eerste-b2b.jpg",
                        "datePublished": "2026-04-02T00:00:00+02:00",
                        "author": { "@type": "Organization", "name": "Empowers" },
                        "publisher": {
                            "@type": "Organization",
                            "name": "Empowers",
                            "url": "https://www.empowers.nl",
                            "logo": {
                                "@type": "ImageObject",
                                "url": "https://www.empowers.nl/empowers-logo-color.svg"
                            }
                        },
                        "mainEntity": {
                            "@type": "FAQPage",
                            "mainEntity": [
                                {
                                    "@type": "Question",
                                    "name": "Wat kosten LinkedIn Ads per klik?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Reken op 3 tot 12 euro per klik, afhankelijk van je doelgroep en concurrentie. Dat is hoger dan Google of Meta, maar de kwaliteit van B2B-leads is vaak ook aanzienlijk beter. Een lead via LinkedIn is gemiddeld 2 tot 3 keer meer waard dan via andere kanalen."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Hoeveel budget heb je nodig voor LinkedIn Ads?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "LinkedIn hanteert een minimaal dagbudget van 10 euro. Voor een serieuze test heb je minimaal 1500 tot 2500 euro per maand nodig. Onder die grens heeft het platform te weinig data om je campagne goed te laten presteren."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Welke campagnedoelen zijn er in LinkedIn Ads?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "LinkedIn biedt drie hoofddoelen: awareness (merkbekendheid), consideration (websitebezoek, engagement, videoweergaven) en conversions (leadgeneratie, websiteconversies, sollicitaties). Voor B2B-leadgeneratie kies je meestal Lead Gen Forms of websiteconversies."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Zijn LinkedIn Ads geschikt voor kleine bedrijven?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Ja, mits je een duidelijke B2B-doelgroep hebt en je product of dienst voldoende marge heeft. Als een klant je duizenden euro's oplevert, zijn de hogere klikkosten op LinkedIn de investering waard. Verkoop je producten van 50 euro? Dan zijn Google of Meta slimmer."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Wat is het verschil tussen LinkedIn Ads en Google Ads voor B2B?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Google Ads bereikt mensen die actief zoeken naar een oplossing. LinkedIn Ads bereikt mensen op basis van hun functie, bedrijf en branche, ook als ze nog niet zoeken. LinkedIn is sterker voor awareness en leadgeneratie bij een specifieke doelgroep. Google werkt beter voor directe koopintentie."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Hoe lang duurt het voordat LinkedIn Ads resultaat opleveren?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "De eerste data zie je binnen een week. Maar voor betrouwbare resultaten heb je 4 tot 8 weken nodig. LinkedIn heeft meer tijd nodig dan Meta of Google om voldoende data te verzamelen, vooral als je doelgroep klein is. Na 2 tot 3 maanden weet je of het kanaal voor jou werkt."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Wat zijn Lead Gen Forms op LinkedIn?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Lead Gen Forms zijn formulieren die direct in LinkedIn openen. De gebruiker hoeft de app niet te verlaten. Contactgegevens worden automatisch ingevuld vanuit het LinkedIn-profiel. Dat verlaagt de drempel en verhoogt je conversieratio. Bij onze klanten converteren Lead Gen Forms 2 tot 4 keer beter dan een landingspagina."
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
                            {
                                "@type": "ListItem",
                                "position": 1,
                                "name": "Home",
                                "item": "https://www.empowers.nl"
                            },
                            {
                                "@type": "ListItem",
                                "position": 2,
                                "name": "Blogs",
                                "item": "https://www.empowers.nl/blogs"
                            },
                            {
                                "@type": "ListItem",
                                "position": 3,
                                "name": "Social Ads",
                                "item": "https://www.empowers.nl/blogs/social-ads"
                            },
                            {
                                "@type": "ListItem",
                                "position": 4,
                                "name": "LinkedIn Ads voor beginners",
                                "item": "https://www.empowers.nl/blogs/social-ads/linkedin-ads-beginners-eerste-b2b"
                            }
                        ]
                    })}
                </script>
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
                        <Link to="/blogs/social-ads" className="hover:text-accent transition-colors">Social Ads</Link>
                        <ChevronRight className="w-3 h-3" />
                        <span className="text-primary truncate">LinkedIn Ads voor beginners</span>
                    </nav>

                    {/* Header */}
                    <header className="mb-16">
                        <div className="inline-block px-3 py-1 bg-accent/10 text-accent font-mono text-xs uppercase tracking-widest rounded-full mb-6">
                            Social Ads
                        </div>
                        <h1 className="font-sans font-bold text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight mb-8">
                            LinkedIn Ads voor beginners: zo start je jouw eerste B2B campagne
                        </h1>

                        <div className="flex flex-wrap items-center gap-6 text-sm font-sans text-primary/60 border-y border-primary/10 py-6">
                            <div className="flex items-center gap-2">
                                <User className="w-4 h-4" />
                                <span>Empowers Redactie</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>2 april 2026</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>8 minuten leestijd</span>
                            </div>
                        </div>
                    </header>

                    {/* Featured Image */}
                    <figure className="w-full h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden mb-16 relative bg-primary">
                        <div className="absolute inset-0 bg-[url('/images/blogs/linkedin-ads-beginners-eerste-b2b.jpg')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </figure>

                    {/* Content */}
                    <div className="prose prose-lg max-w-none prose-headings:text-primary prose-headings:font-bold prose-a:text-accent prose-a:underline hover:prose-a:text-accent/80">
                        <p className="text-xl leading-relaxed text-primary/80 font-medium mb-6">
                            LinkedIn Ads zijn het sterkste advertentiekanaal voor B2B-bedrijven in Nederland. Nergens anders bereik je zo gericht de beslissers die je nodig hebt. Reken op 3 tot 12 euro per klik en een minimaal testbudget van 1500 euro per maand. Dat klinkt fors, maar een goede B2B-lead levert al snel duizenden euro's op. In dit artikel lees je stap voor stap hoe je je eerste LinkedIn Ads campagne opzet, welke fouten je moet vermijden en wanneer het kanaal voor jou werkt.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Waarom LinkedIn Ads voor B2B?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            LinkedIn heeft 5,5 miljoen gebruikers in Nederland. Het verschil met andere platforms? Mensen vullen zelf hun functietitel, bedrijf, branche en senioriteit in. Dat maakt LinkedIn het enige platform waar je een marketingmanager bij een techbedrijf met meer dan 50 werknemers kunt targeten. Probeer dat maar eens op Meta of Google.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Bij onze klanten zien we dat de klikkosten op LinkedIn hoger liggen dan op andere kanalen. Maar de kwaliteit van de leads compenseert dat ruim. Een SaaS-bedrijf dat we begeleidden haalde via LinkedIn leads binnen met een gemiddelde dealwaarde van 12.000 euro. De kosten per lead? 85 euro. Op Google Ads was de kosten per lead lager (40 euro), maar de gemiddelde dealwaarde was ook drie keer kleiner.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Welke campagnedoelen heeft LinkedIn Ads?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            LinkedIn werkt met drie campagnedoelen: awareness, consideration en conversions. Voor je eerste B2B campagne wil je waarschijnlijk leads genereren. Dan kies je voor het doel Lead Gen Forms of Websiteconversies.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Lead Gen Forms zijn formulieren die direct in LinkedIn openen. De gebruiker hoeft niet naar je website. Contactgegevens worden automatisch ingevuld vanuit het profiel. Dat verlaagt de drempel enorm. We merken in de praktijk dat Lead Gen Forms 2 tot 4 keer beter converteren dan een externe landingspagina. Het nadeel? Je hebt minder controle over de ervaring na het formulier.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Websiteconversies sturen mensen naar je eigen pagina. Daar kun je meer vertellen, video tonen en de ervaring helemaal sturen. Maar je verliest een deel van je bezoekers onderweg. Dit doel werkt goed als je een sterke <Link to="/blogs/strategie/landingspagina-waarom-hij-anders-homepage" className="text-accent hover:underline">landingspagina</Link> hebt.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe stel je je doelgroep in op LinkedIn?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Hier zit de kracht van LinkedIn. Je kunt targeten op functietitel, bedrijfsgrootte, branche, senioriteit, vaardigheden en zelfs specifieke bedrijven. Begin niet te breed. Een doelgroep van 500.000 mensen klinkt aantrekkelijk, maar je budget is dan te verspreid.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Richt je eerste campagne op een doelgroep van 20.000 tot 80.000 mensen. Combineer maximaal drie targetingcriteria. Bijvoorbeeld: functietitel "Marketing Manager" of "CMO", bedrijfsgrootte 50-500 werknemers, locatie Nederland. Dat geeft het algoritme genoeg ruimte om te presteren, maar houdt je doelgroep specifiek genoeg.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een veelgemaakte fout die we tegenkomen: te veel criteria stapelen. Als je functietitel, branche, vaardigheden en senioriteit combineert, wordt je doelgroep zo klein dat LinkedIn je advertentie nauwelijks vertoont. Begin simpel. Verfijn later.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Welke advertentieformaten werken het beste?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            LinkedIn biedt meerdere formaten: Single Image Ads, Carousel Ads, Video Ads, Message Ads en Document Ads. Voor je eerste campagne begin je met Single Image Ads. Die zijn het makkelijkst op te zetten en geven je snel data over wat werkt.
                        </p>

                        <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Single Image Ads</h3>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een afbeelding met een korte tekst erboven. Houd de tekst onder de 150 tekens zodat mensen niet hoeven te klikken op "meer lezen". Gebruik een afbeelding van 1200x627 pixels. Geen stockfoto's met lachende mensen achter een laptop. Gebruik een screenshot van je product, een grafiek met resultaten of een opvallende quote.
                        </p>

                        <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Video Ads</h3>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Video werkt steeds beter op LinkedIn. Houd het kort: 30 tot 90 seconden. Begin met je belangrijkste boodschap in de eerste 3 seconden. LinkedIn speelt video's standaard zonder geluid af, dus zorg voor ondertiteling. Een klant van ons in de IT-sector haalde met een 45-seconden uitlegvideo een 3 keer hogere CTR dan met een statische afbeelding.
                        </p>

                        <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Document Ads</h3>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een relatief nieuw formaat. Je uploadt een PDF die mensen direct in de feed kunnen doorbladeren. Denk aan een checklist, een kort rapport of een overzicht. Dit format werkt uitstekend voor thought leadership content en haalt vaak meer engagement dan een gewone afbeelding.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat kosten LinkedIn Ads en hoeveel budget heb je nodig?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            LinkedIn is het duurste social advertising platform. Reken op 3 tot 12 euro per klik, afhankelijk van je doelgroep. Richt je je op C-level executives in de financiele sector? Dan betaal je meer dan wanneer je marketingmedewerkers in het MKB target.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Het minimale dagbudget is 10 euro. Maar met 10 euro per dag kom je niet ver. Je hebt voldoende data nodig om te zien wat werkt. We adviseren een minimaal testbudget van 1500 tot 2500 euro per maand, verdeeld over maximaal twee campagnes. Na 6 tot 8 weken weet je of LinkedIn voor jou rendeert.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De kosten per lead op LinkedIn liggen voor B2B-bedrijven meestal tussen 30 en 150 euro. Dat klinkt hoog. Maar vergelijk het met de waarde van een klant. Als jouw gemiddelde deal 5000 euro waard is en je hebt 20 leads nodig voor 1 deal, dan betaal je met leads van 80 euro in totaal 1600 euro voor een deal van 5000 euro. Dat is een ROAS van ruim 3.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe zet je je eerste LinkedIn Ads campagne op?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Je start in de LinkedIn Campaign Manager. Ga naar linkedin.com/campaignmanager en koppel je bedrijfspagina. Daarna doorloop je vijf stappen.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Stap 1: kies je campagnedoel. Voor je eerste B2B campagne kies je Lead Generation of Website Conversions. Stap 2: stel je doelgroep in met de targetingopties die we net bespraken. Stap 3: kies je advertentieformaat. Begin met Single Image Ads. Stap 4: stel je budget en planning in. Kies een dagbudget, geen totaalbudget. Zo houd je controle. Stap 5: maak minimaal twee advertentievarianten. Test een andere headline, afbeelding of tekst zodat je kunt zien wat beter werkt.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Vergeet niet om de LinkedIn Insight Tag op je website te plaatsen. Zonder die tag meet je geen conversies en kun je geen retargeting opzetten. De Insight Tag werkt vergelijkbaar met de <Link to="/blogs/social-ads/meta-pixel-instellen-stap-stap" className="text-accent hover:underline">Meta Pixel</Link>: hij volgt bezoekers en rapporteert wat ze op je website doen.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Welke fouten moet je vermijden als beginner?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De eerste fout: je doelgroep te breed instellen. Je wilt niet heel Nederland bereiken. Je wilt de 5000 mensen bereiken die daadwerkelijk je product kunnen kopen. Hoe specifieker je doelgroep, hoe relevanter je advertentie en hoe beter je resultaten.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De tweede fout: saaie advertenties. LinkedIn is een professioneel platform, maar dat betekent niet dat je advertentie droog moet zijn. Schrijf alsof je tegen iemand praat. "Jouw salesteam belt 40 leads per week. Hoeveel daarvan zijn echt gekwalificeerd?" werkt beter dan "Ontdek ons platform voor leadkwalificatie."
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De derde fout: te snel stoppen. LinkedIn heeft meer tijd nodig dan Meta. Het algoritme leert langzamer omdat de doelgroepen kleiner zijn. Geef je campagne minimaal 4 weken voordat je conclusies trekt. We zien regelmatig dat campagnes die in week 2 ondermaats presteren, in week 5 opeens rendabel worden.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De vierde fout: geen conversies meten. Zonder de Insight Tag en correct ingestelde conversiedoelen vlieg je blind. Je weet dan wel hoeveel je uitgeeft, maar niet wat het oplevert. Zorg dat je tracking staat voordat je je eerste euro uitgeeft.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wanneer is LinkedIn Ads niet de juiste keuze?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            LinkedIn Ads zijn niet voor elk bedrijf geschikt. Verkoop je een product onder de 500 euro? Dan zijn de hoge klikkosten moeilijk terug te verdienen. Richt je je op consumenten in plaats van bedrijven? Dan ben je beter af met <Link to="/meta-ads" className="text-accent hover:underline">Meta Ads</Link> of <Link to="/google-ads" className="text-accent hover:underline">Google Ads</Link>.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            LinkedIn werkt het beste als je product of dienst een hoge waarde heeft, je doelgroep duidelijk gedefinieerd is op functietitel en branche, en je verkoopproces meerdere contactmomenten bevat. Denk aan SaaS-bedrijven, consultancybureaus, IT-dienstverleners en zakelijke dienstverlening.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Wil je weten of LinkedIn Ads bij jouw bedrijf passen? Plan een gratis gesprek via onze <Link to="/contact" className="text-accent hover:underline">contactpagina</Link>. We kijken samen naar je doelgroep, je product en je budget en geven je een eerlijk advies.
                        </p>
                    </div>

                    {/* FAQ Section */}
                    <section className="mt-16 pt-12 border-t border-primary/10">
                        <h2 className="text-3xl font-bold text-primary mb-8">Veelgestelde vragen</h2>
                        <div className="space-y-6 not-prose">
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat kosten LinkedIn Ads per klik?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Reken op 3 tot 12 euro per klik, afhankelijk van je doelgroep en concurrentie. Dat is hoger dan Google of Meta, maar de kwaliteit van B2B-leads is vaak ook aanzienlijk beter. Een lead via LinkedIn is gemiddeld 2 tot 3 keer meer waard dan via andere kanalen.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoeveel budget heb je nodig voor LinkedIn Ads?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    LinkedIn hanteert een minimaal dagbudget van 10 euro. Voor een serieuze test heb je minimaal 1500 tot 2500 euro per maand nodig. Onder die grens heeft het platform te weinig data om je campagne goed te laten presteren.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Welke campagnedoelen zijn er in LinkedIn Ads?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    LinkedIn biedt drie hoofddoelen: awareness (merkbekendheid), consideration (websitebezoek, engagement, videoweergaven) en conversions (leadgeneratie, websiteconversies, sollicitaties). Voor B2B-leadgeneratie kies je meestal Lead Gen Forms of websiteconversies.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Zijn LinkedIn Ads geschikt voor kleine bedrijven?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Ja, mits je een duidelijke B2B-doelgroep hebt en je product of dienst voldoende marge heeft. Als een klant je duizenden euro's oplevert, zijn de hogere klikkosten op LinkedIn de investering waard. Verkoop je producten van 50 euro? Dan zijn Google of Meta slimmer.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat is het verschil tussen LinkedIn Ads en Google Ads voor B2B?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Google Ads bereikt mensen die actief zoeken naar een oplossing. LinkedIn Ads bereikt mensen op basis van hun functie, bedrijf en branche, ook als ze nog niet zoeken. LinkedIn is sterker voor awareness en leadgeneratie bij een specifieke doelgroep. Google werkt beter voor directe koopintentie.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoe lang duurt het voordat LinkedIn Ads resultaat opleveren?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    De eerste data zie je binnen een week. Maar voor betrouwbare resultaten heb je 4 tot 8 weken nodig. LinkedIn heeft meer tijd nodig dan Meta of Google om voldoende data te verzamelen, vooral als je doelgroep klein is. Na 2 tot 3 maanden weet je of het kanaal voor jou werkt.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat zijn Lead Gen Forms op LinkedIn?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Lead Gen Forms zijn formulieren die direct in LinkedIn openen. De gebruiker hoeft de app niet te verlaten. Contactgegevens worden automatisch ingevuld vanuit het LinkedIn-profiel. Dat verlaagt de drempel en verhoogt je conversieratio. Bij onze klanten converteren Lead Gen Forms 2 tot 4 keer beter dan een landingspagina.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Related Links */}
                    <section className="mt-16 pt-12 border-t border-primary/10">
                        <h3 className="text-xl font-bold text-primary mb-6">Lees ook</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <Link to="/blogs/social-ads/meta-ads-uitbesteden-bureau-jou" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Meta Ads uitbesteden</h3>
                                <p className="text-primary/60 text-sm">Wat doet een bureau voor jou en wanneer loont het?</p>
                            </Link>
                            <Link to="/blogs/algemeen/google-ads-vs-seo-werkt" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Google Ads vs SEO</h3>
                                <p className="text-primary/60 text-sm">Wat werkt beter voor jouw bedrijf?</p>
                            </Link>
                            <Link to="/blogs/social-ads/meta-pixel-instellen-stap-stap" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Meta Pixel instellen</h3>
                                <p className="text-primary/60 text-sm">Zonder goede tracking weet je niet wat werkt.</p>
                            </Link>
                        </div>
                    </section>
                </div>
            </article>

            {/* Bottom CTA */}
            <section className="w-full pb-32 px-6">
                <div className="max-w-4xl mx-auto bg-primary rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
                    <h2 className="relative z-10 font-drama italic text-background text-3xl sm:text-4xl md:text-5xl mb-6">Klaar om B2B-leads te genereren via LinkedIn?</h2>
                    <p className="relative z-10 font-sans text-background/70 text-lg mb-10 max-w-xl mx-auto">Plan een gratis gesprek. We kijken samen of LinkedIn Ads bij jouw bedrijf passen en wat je kunt verwachten.</p>
                    <Link to="/contact" className="relative z-10 btn-magnetic inline-flex items-center justify-center bg-accent text-background font-sans font-bold text-lg px-10 py-4 rounded-[2rem] hover:bg-accent/90 transition-colors">Neem contact op</Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
