import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ChevronRight, User } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function BlogPostGoogleAdsDisplayVsSearch() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen selection:bg-accent/30 selection:text-dark flex flex-col bg-background">
            <Helmet>
                <title>Google Ads Display vs Search: wanneer kies je wat | Empowers</title>
                <meta name="description" content="Google Ads Display en Search zijn twee totaal verschillende campagnetypes. Lees wanneer je welk type inzet, wat de kosten zijn en welke fouten je moet vermijden." />
                <link rel="canonical" href="https://www.empowers.nl/blogs/google-ads/google-ads-display-vs-search" />
                <meta property="og:title" content="Google Ads Display vs Search: wanneer kies je wat" />
                <meta property="og:description" content="Display en Search in Google Ads werken heel anders. Lees welk campagnetype past bij jouw doel en budget." />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://www.empowers.nl/blogs/google-ads/google-ads-display-vs-search" />
                <meta property="og:image" content="https://www.empowers.nl/images/blogs/google-ads-display-vs-search.jpg" />
                <meta property="article:published_time" content="2026-04-11" />
                <meta property="article:author" content="Empowers" />
                <meta property="article:section" content="Google Ads" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Google Ads Display vs Search: wanneer kies je wat" />
                <meta name="twitter:description" content="Display en Search in Google Ads werken heel anders. Lees welk campagnetype past bij jouw doel en budget." />

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Article",
                        "headline": "Google Ads Display vs Search: wanneer kies je wat",
                        "description": "Google Ads Display en Search zijn twee totaal verschillende campagnetypes. Lees wanneer je welk type inzet, wat de kosten zijn en welke fouten je moet vermijden.",
                        "image": "https://www.empowers.nl/images/blogs/google-ads-display-vs-search.jpg",
                        "datePublished": "2026-04-11T00:00:00+02:00",
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
                                    "name": "Wat is het verschil tussen Google Ads Display en Search?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Search-advertenties verschijnen bovenaan de Google zoekresultaten wanneer iemand actief zoekt op jouw zoekwoord. Display-advertenties zijn visuele banners die worden getoond op websites, apps en YouTube terwijl mensen browsen. Search vangt bestaande vraag op. Display creëert zichtbaarheid en bewustzijn."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Wat kost Google Ads Display per klik vergeleken met Search?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Display-advertenties kosten gemiddeld 0,20 tot 1,50 euro per klik. Search-advertenties kosten gemiddeld 1 tot 8 euro per klik, afhankelijk van je branche. Display is goedkoper per klik maar levert meestal een lagere conversieratio op. De kosten per conversie kunnen daardoor vergelijkbaar zijn."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Wanneer kies je voor Search-campagnes?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Kies Search als je product of dienst actief gezocht wordt. Bij directe koopintentie zoals 'loodgieter spoed' of 'boekhouder Amsterdam' presteren Search-campagnes het best. Je vangt dan bestaande vraag op van mensen die klaar zijn om actie te ondernemen."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Wanneer kies je voor Display-campagnes?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Kies Display als je naamsbekendheid wilt opbouwen, een nieuw product lanceert of wilt retargeten. Display werkt goed voor visuele producten en als aanvulling op Search-campagnes. Het bereik is enorm: het Google Display Netwerk omvat meer dan 2 miljoen websites."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Kun je Display en Search tegelijk gebruiken?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Ja, en dat is vaak de beste aanpak. Search vangt de directe koopintentie op. Display bouwt bekendheid op bij een breder publiek en haalt via retargeting verloren bezoekers terug. De combinatie levert meer conversies op dan een van beide apart."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Wat is de gemiddelde conversieratio van Display vs Search?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Search-campagnes halen gemiddeld een conversieratio van 3 tot 5 procent. Display-campagnes zitten gemiddeld op 0,5 tot 1,5 procent. Dat verschil komt doordat Search-verkeer actieve koopintentie heeft, terwijl Display-verkeer nog in de oriëntatiefase zit."
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
                                "name": "Google Ads",
                                "item": "https://www.empowers.nl/blogs/google-ads"
                            },
                            {
                                "@type": "ListItem",
                                "position": 4,
                                "name": "Display vs Search",
                                "item": "https://www.empowers.nl/blogs/google-ads/google-ads-display-vs-search"
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
                        <Link to="/blogs/google-ads" className="hover:text-accent transition-colors">Google Ads</Link>
                        <ChevronRight className="w-3 h-3" />
                        <span className="text-primary truncate">Display vs Search</span>
                    </nav>

                    {/* Header */}
                    <header className="mb-16">
                        <div className="inline-block px-3 py-1 bg-accent/10 text-accent font-mono text-xs uppercase tracking-widest rounded-full mb-6">
                            Google Ads
                        </div>
                        <h1 className="font-sans font-bold text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight mb-8">
                            Google Ads Display vs Search: wanneer kies je wat
                        </h1>

                        <div className="flex flex-wrap items-center gap-6 text-sm font-sans text-primary/60 border-y border-primary/10 py-6">
                            <div className="flex items-center gap-2">
                                <User className="w-4 h-4" />
                                <span>Empowers Redactie</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>11 april 2026</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>8 minuten leestijd</span>
                            </div>
                        </div>
                    </header>

                    {/* Featured Image */}
                    <figure className="w-full h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden mb-16 relative bg-primary">
                        <div className="absolute inset-0 bg-[url('/images/blogs/google-ads-display-vs-search.jpg')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </figure>

                    {/* Content */}
                    <div className="prose prose-lg max-w-none prose-headings:text-primary prose-headings:font-bold prose-a:text-accent prose-a:underline hover:prose-a:text-accent/80">
                        <p className="text-xl leading-relaxed text-primary/80 font-medium mb-6">
                            Google Ads Display en Search zijn twee totaal verschillende campagnetypes die elk hun eigen doel dienen. Search-advertenties verschijnen bovenaan Google wanneer iemand actief zoekt. Display-advertenties zijn visuele banners op websites, apps en YouTube. Welk type je kiest hangt af van je doel: directe verkoop of naamsbekendheid. Bij veel bedrijven werkt de combinatie het best.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat is het verschil tussen Display en Search?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Search-advertenties draaien om intentie. Iemand typt "boekhouder Amsterdam" in Google en jouw advertentie verschijnt bovenaan. Die persoon is actief op zoek. De kans dat zo iemand klikt en contact opneemt is groot. Je betaalt per klik, en die klik is waardevol omdat er koopintentie achter zit.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Display-advertenties werken anders. Jouw banner verschijnt op nieuwssites, blogs, apps en YouTube terwijl iemand aan het browsen is. Die persoon zoekt niet actief naar jouw dienst. Maar je plant wel een zaadje. De volgende keer dat ze jouw bedrijfsnaam tegenkomen, herkennen ze het. Dat is de kracht van Display: bereik en herkenning opbouwen.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Het verschil in kosten is groot. Search-klikken kosten gemiddeld 1 tot 8 euro, afhankelijk van je branche. In concurrerende sectoren zoals verzekeringen of juridisch advies loopt dat op tot 15 euro per klik. Display-klikken kosten gemiddeld 0,20 tot 1,50 euro. Maar goedkoper per klik betekent niet goedkoper per klant.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wanneer kies je voor Search-campagnes?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Search is je eerste keuze als mensen actief zoeken naar wat je aanbiedt. Een loodgieter, een advocaat, een webshop met specifieke producten. Iedereen die een dienst of product levert waar mensen naar googelen, begint met Search. Je vangt bestaande vraag op. Dat is de snelste weg naar conversies.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Bij onze klanten zien we dat Search-campagnes gemiddeld een conversieratio halen van 3 tot 5 procent. Bij goed ingestelde campagnes in nichemarkten halen we soms 8 tot 12 procent. De reden is simpel: je toont je advertentie op het exacte moment dat iemand jouw oplossing zoekt. Die timing is goud waard.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Search werkt minder goed als niemand zoekt naar jouw product. Stel dat je een compleet nieuw type softwaretool lanceert. Er is nog geen zoekvolume. Dan heeft Search weinig zin, want er zijn geen zoekopdrachten om op te bieden. In dat geval is Display de betere keuze om bekendheid te genereren. Wil je meer weten over hoe je <Link to="/blogs/google-ads/google-ads-quality-score-verhogen" className="text-accent hover:underline">je Quality Score verhoogt en betere Search-resultaten haalt</Link>? We hebben daar een apart artikel over.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wanneer kies je voor Display-campagnes?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Display is sterk in drie situaties. Ten eerste: naamsbekendheid opbouwen. Als je een nieuw merk bent of een nieuwe markt betreedt, wil je dat mensen je naam leren kennen. Display bereikt miljoenen mensen voor een fractie van de kosten van Search. Het Google Display Netwerk bereikt meer dan 90 procent van alle internetgebruikers wereldwijd.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Ten tweede: retargeting. Iemand bezoekt je website, bekijkt een product maar koopt niet. Via Display toon je diezelfde persoon de dagen erna een banner met precies dat product. We merken in de praktijk dat retargeting via Display een ROAS van 5 tot 10 oplevert. Dat is vaak hoger dan reguliere Search-campagnes, omdat je mensen bereikt die al interesse hebben getoond.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Ten derde: visuele producten. Verkoop je meubels, kleding, reizen of voedsel? Dan werken beeldadvertenties beter dan een tekstregel in de zoekresultaten. Een mooie foto van je product op een relevante website kan meer impact hebben dan welke zoekadvertentie dan ook. Meer over retargeting lees je in onze <Link to="/blogs/social-ads/retargeting-meta-ads-haal-verloren" className="text-accent hover:underline">blog over retargeting via Meta Ads</Link>, waar veel van dezelfde principes gelden.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat zijn de kosten per conversie bij Display vs Search?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Hier wordt het interessant. Display-klikken zijn goedkoop, maar de conversieratio is lager. Gemiddeld converteert Display-verkeer op 0,5 tot 1,5 procent. Search-verkeer converteert op 3 tot 5 procent. Reken even mee: als een Display-klik 0,50 euro kost en 1 procent converteert, betaal je 50 euro per conversie. Als een Search-klik 3 euro kost en 4 procent converteert, betaal je 75 euro per conversie.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Maar die vergelijking is te simpel. Display-conversies zijn vaak assisted conversions. Iemand ziet je banner, onthoudt je naam, googelt je later en koopt dan via Search. In Google Analytics zie je die Display-klik niet als directe conversie, maar hij heeft wel bijgedragen. Zonder Display was die Search-conversie er misschien niet geweest.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een veelgemaakte fout die we tegenkomen is dat bedrijven Display beoordelen op directe conversies en het dan uitzetten. Terwijl Display in werkelijkheid het hele marketingfunnel voedt. Kijk daarom altijd naar het totaalplaatje: stijgen je Search-conversies als je Display erbij doet? Dan werkt de combinatie. Meer over het meten van je rendement lees je in onze <Link to="/blogs/google-ads/meet-roi-google-ads-campagne" className="text-accent hover:underline">blog over ROI meten in Google Ads</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe combineer je Display en Search?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De meest effectieve aanpak is een gelaagde strategie. Search vangt de directe koopintentie op. Display bouwt bekendheid op bij een breder publiek. En retargeting via Display haalt verloren bezoekers terug naar je website. Drie lagen die elkaar versterken.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Begin met Search. Zorg dat je campagnes draaien op de zoekwoorden die jouw klanten gebruiken. Meet je conversies. Als dat stabiel loopt, voeg je Display toe als retargeting: iedereen die je site bezoekt maar niet converteert, ziet de komende 30 dagen je banners. Die retargeting-laag levert bij onze klanten gemiddeld 15 tot 25 procent meer conversies op bovenop de bestaande Search-resultaten.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Pas daarna overweeg je brede Display-campagnes voor naamsbekendheid. Gebruik dan in-market audiences of custom intent audiences om je doelgroep scherp te houden. Brede Display zonder goede targeting is geld verbranden. Met de juiste doelgroepinstellingen is het een krachtig middel.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Welke fouten moet je vermijden?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De grootste fout: Display-advertenties toevoegen aan een Search-campagne via het "Uitbreiden naar Display Netwerk"-vinkje. Google stelt dit standaard voor bij het aanmaken van een nieuwe campagne. Doe het niet. Display en Search vragen om compleet andere budgetten, biedstrategieën en advertentie-indelingen. Maak altijd aparte campagnes.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Tweede fout: Display beoordelen na een week. Display is een langetermijnspel. De eerste week levert zelden directe conversies op. Geef het minimaal vier tot zes weken om effect te zien. Kijk niet alleen naar directe conversies maar ook naar het totale conversiepad in Google Analytics.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Derde fout: slechte banners. Een wazige afbeelding met te veel tekst en geen duidelijke actieknop. Dat kost je geld zonder resultaat. Goede Display-banners hebben een helder beeld, minimale tekst, een sterke headline en een opvallende call-to-action. Houd het simpel.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Display vs Search: een samenvatting per situatie</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Je bent een lokale dienstverlener en mensen zoeken actief naar je dienst? Start met Search. Je lanceert een nieuw product dat niemand nog kent? Begin met Display. Je hebt een webshop met visuele producten? Combineer Search voor koopintentie met Display-retargeting voor afhakers. Je hebt een beperkt budget en wilt snel resultaat? Focus op Search, want daar zit de directe koopintentie.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Bij een maandbudget onder de 1000 euro raden we aan om volledig op Search te focussen. Boven de 2000 euro kun je Display-retargeting toevoegen. Boven de 5000 euro is de volledige drielaagse aanpak van Search plus retargeting plus brede Display zinvol. Die bedragen zijn richtlijnen, geen harde grenzen. Het hangt af van je branche en marges.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Wil je weten welke mix van Display en Search past bij jouw bedrijf en budget? We kijken graag mee. Plan een gesprek via onze <Link to="/contact" className="text-accent hover:underline">contactpagina</Link>.
                        </p>
                    </div>

                    {/* FAQ Section */}
                    <section className="mt-16 pt-12 border-t border-primary/10">
                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Veelgestelde vragen</h2>
                        <div className="space-y-6 not-prose">
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat is het verschil tussen Google Ads Display en Search?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Search-advertenties verschijnen bovenaan de Google zoekresultaten wanneer iemand actief zoekt op jouw zoekwoord. Display-advertenties zijn visuele banners die worden getoond op websites, apps en YouTube terwijl mensen browsen. Search vangt bestaande vraag op. Display creëert zichtbaarheid en bewustzijn.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat kost Google Ads Display per klik vergeleken met Search?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Display-advertenties kosten gemiddeld 0,20 tot 1,50 euro per klik. Search-advertenties kosten gemiddeld 1 tot 8 euro per klik, afhankelijk van je branche. Display is goedkoper per klik maar levert meestal een lagere conversieratio op. De kosten per conversie kunnen daardoor vergelijkbaar zijn.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wanneer kies je voor Search-campagnes?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Kies Search als je product of dienst actief gezocht wordt. Bij directe koopintentie zoals "loodgieter spoed" of "boekhouder Amsterdam" presteren Search-campagnes het best. Je vangt dan bestaande vraag op van mensen die klaar zijn om actie te ondernemen.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wanneer kies je voor Display-campagnes?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Kies Display als je naamsbekendheid wilt opbouwen, een nieuw product lanceert of wilt retargeten. Display werkt goed voor visuele producten en als aanvulling op Search-campagnes. Het bereik is enorm: het Google Display Netwerk omvat meer dan 2 miljoen websites.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Kun je Display en Search tegelijk gebruiken?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Ja, en dat is vaak de beste aanpak. Search vangt de directe koopintentie op. Display bouwt bekendheid op bij een breder publiek en haalt via retargeting verloren bezoekers terug. De combinatie levert meer conversies op dan een van beide apart.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat is de gemiddelde conversieratio van Display vs Search?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Search-campagnes halen gemiddeld een conversieratio van 3 tot 5 procent. Display-campagnes zitten gemiddeld op 0,5 tot 1,5 procent. Dat verschil komt doordat Search-verkeer actieve koopintentie heeft, terwijl Display-verkeer nog in de oriëntatiefase zit.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Related Links */}
                    <section className="mt-16 pt-12 border-t border-primary/10">
                        <h3 className="text-xl font-bold text-primary mb-6">Lees ook</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <Link to="/blogs/google-ads/meet-roi-google-ads-campagne" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">ROI meten in Google Ads</h3>
                                <p className="text-primary/60 text-sm">Hoe meet je het echte rendement van je campagnes?</p>
                            </Link>
                            <Link to="/blogs/google-ads/google-ads-quality-score-verhogen" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Quality Score verhogen</h3>
                                <p className="text-primary/60 text-sm">7 concrete tips voor een betere kwaliteitsscore.</p>
                            </Link>
                            <Link to="/blogs/social-ads/retargeting-meta-ads-haal-verloren" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Retargeting via Meta Ads</h3>
                                <p className="text-primary/60 text-sm">Zo haal je verloren bezoekers terug naar je website.</p>
                            </Link>
                        </div>
                    </section>
                </div>
            </article>

            {/* Bottom CTA */}
            <section className="w-full pb-32 px-6">
                <div className="max-w-4xl mx-auto bg-primary rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
                    <h2 className="relative z-10 font-drama italic text-background text-3xl sm:text-4xl md:text-5xl mb-6">Display, Search of allebei?</h2>
                    <p className="relative z-10 font-sans text-background/70 text-lg mb-10 max-w-xl mx-auto">We analyseren je situatie en vertellen je welke campagnemix het meeste oplevert. Geen verplichtingen.</p>
                    <Link to="/contact" className="relative z-10 btn-magnetic inline-flex items-center justify-center bg-accent text-background font-sans font-bold text-lg px-10 py-4 rounded-[2rem] hover:bg-accent/90 transition-colors">Neem contact op</Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}