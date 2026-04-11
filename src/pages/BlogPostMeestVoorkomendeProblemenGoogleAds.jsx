import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ChevronRight, User } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function BlogPostMeestVoorkomendeProblemenGoogleAds() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen selection:bg-accent/30 selection:text-dark flex flex-col bg-background">
            <Helmet>
                <title>De meest voorkomende problemen in Google Ads (en hoe je ze oplost) | Empowers</title>
                <meta name="description" content="Verbrand jij budget in Google Ads zonder resultaat? Ontdek de 9 meest voorkomende problemen in Google Ads en hoe je ze stap voor stap oplost." />
                <link rel="canonical" href="https://www.empowers.nl/blogs/google-ads/meest-voorkomende-problemen-google-ads" />
                <meta property="og:title" content="De meest voorkomende problemen in Google Ads (en hoe je ze oplost)" />
                <meta property="og:description" content="9 problemen die in bijna elk Google Ads account terugkomen — plus de oplossing die je vandaag nog kunt doorvoeren." />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://www.empowers.nl/blogs/google-ads/meest-voorkomende-problemen-google-ads" />
                <meta property="og:image" content="https://www.empowers.nl/images/blogs/meest-voorkomende-problemen-google-ads.jpg" />
                <meta property="article:published_time" content="2026-04-08" />
                <meta property="article:author" content="Empowers" />
                <meta property="article:section" content="Google Ads" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="De meest voorkomende problemen in Google Ads" />
                <meta name="twitter:description" content="9 problemen die je budget verbranden — en hoe je ze vandaag nog oplost." />

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Article",
                        "headline": "De meest voorkomende problemen in Google Ads (en hoe je ze oplost)",
                        "description": "Verbrand jij budget in Google Ads zonder resultaat? Ontdek de 9 meest voorkomende problemen in Google Ads en hoe je ze stap voor stap oplost.",
                        "image": "https://www.empowers.nl/images/blogs/meest-voorkomende-problemen-google-ads.jpg",
                        "datePublished": "2026-04-08T00:00:00+02:00",
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
                                    "name": "Wat zijn de meest voorkomende problemen in Google Ads?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "De problemen die we het vaakst tegenkomen zijn: ontbrekende of foute conversietracking, te brede zoekwoorden zonder negatives, een rommelige campagnestructuur, slechte landingspagina's, te lage budgetten op winnaars, verkeerde biedstrategieën, onvolledige advertentie-extensies, ongebruikt zoektermenrapport en geen koppeling met Google Analytics 4."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Waarom verbrandt mijn Google Ads budget zonder resultaat?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "In 9 van de 10 gevallen zit het probleem in tracking of in zoekwoorden. Zonder werkende conversietracking weet Google niet wat een goede klant is en optimaliseert het algoritme op het verkeerde signaal. Te brede zoekwoorden zorgen daarnaast voor klikken van mensen die nooit klant worden."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Hoe controleer ik of mijn Google Ads tracking goed staat?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Open in Google Ads het tabblad Doelen en kijk of je conversies in de afgelopen 7 dagen 'OK' staan. Doe daarna een testaankoop of testlead en controleer of de conversie binnen 24 uur in het account verschijnt. Geen melding? Dan is je tag fout geplaatst of staat de conversie niet als primair ingesteld."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Hoeveel negatieve zoekwoorden moet ik gebruiken?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Er is geen vast aantal, maar een gezond account heeft tientallen tot honderden negatieve zoekwoorden. Loop wekelijks het zoektermenrapport door en voeg alles toe wat niet bij je dienst of product past. Zo houd je verkeer schoon en je klikprijs laag."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Wanneer is mijn Google Ads campagne te klein om winst te maken?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Onder de 300 euro per maand is het lastig om voldoende data te verzamelen voor goede optimalisatie. Het algoritme heeft minimaal 30 conversies in 30 dagen nodig om automatisch te kunnen bieden. Heb je dat niet, kies dan handmatig bieden of verklein je doelgroep."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Wat is een veelgemaakte fout met Performance Max?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "De grootste fout is Performance Max naast een gewone zoekcampagne draaien zonder accountstructuur. Performance Max kannibaliseert dan je merkverkeer en je betaalt onnodig veel. Sluit altijd je merkterm en bestaande zoekwoorden uit van Performance Max."
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
                                "name": "Meest voorkomende problemen in Google Ads",
                                "item": "https://www.empowers.nl/blogs/google-ads/meest-voorkomende-problemen-google-ads"
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
                        <span className="text-primary truncate">Meest voorkomende problemen</span>
                    </nav>

                    {/* Header */}
                    <header className="mb-16">
                        <div className="inline-block px-3 py-1 bg-accent/10 text-accent font-mono text-xs uppercase tracking-widest rounded-full mb-6">
                            Google Ads
                        </div>
                        <h1 className="font-sans font-bold text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight mb-8">
                            De meest voorkomende problemen in Google Ads (en hoe je ze oplost)
                        </h1>

                        <div className="flex flex-wrap items-center gap-6 text-sm font-sans text-primary/60 border-y border-primary/10 py-6">
                            <div className="flex items-center gap-2">
                                <User className="w-4 h-4" />
                                <span>Empowers Redactie</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>8 april 2026</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>8 minuten leestijd</span>
                            </div>
                        </div>
                    </header>

                    {/* Featured Image */}
                    <figure className="w-full h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden mb-16 relative bg-primary">
                        <div className="absolute inset-0 bg-[url('/images/blogs/meest-voorkomende-problemen-google-ads.jpg')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </figure>

                    {/* Content */}
                    <div className="prose prose-lg max-w-none prose-headings:text-primary prose-headings:font-bold prose-a:text-accent prose-a:underline hover:prose-a:text-accent/80">
                        <p className="text-xl leading-relaxed text-primary/80 font-medium mb-6">
                            Bijna elk Google Ads account dat we voor het eerst openen vertoont dezelfde fouten. Geen kleine schoonheidsfoutjes, maar problemen die letterlijk geld kosten. In dit artikel zetten we de 9 problemen op een rij die we het vaakst tegenkomen, plus de oplossing waarmee je morgen al meer haalt uit je advertentiebudget.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Probleem 1: Conversietracking staat verkeerd of helemaal niet aan</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Dit is veruit het grootste probleem in Google Ads. Acht op de tien accounts die we onder ogen krijgen, hebben tracking die niet klopt. Soms ontbreekt de Google tag op de bedanktpagina, soms staan formulier- en aankoopconversies allebei als primair ingesteld waardoor het algoritme dubbel telt. Zonder kloppende data optimaliseert Google op het verkeerde signaal en pomp je budget in klikken die nooit klanten worden.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Doe vandaag deze check: open Doelen, kijk of alles op groen staat en doe een testlead. Verschijnt de conversie binnen een dag in je account? Dan zit het goed. Verschijnt hij niet? Dan ligt daar je eerste verbeterpunt. Hoe je tracking opzet via Google Tag Manager, lees je in onze gids <Link to="/blogs/tracking/google-tag-manager-beginners" className="text-accent hover:underline">Google Tag Manager voor beginners</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Probleem 2: Te brede zoekwoorden zonder negatives</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Google duwt iedereen richting brede match. Dat is logisch voor Google, want jij betaalt meer klikken. Het is alleen niet logisch voor jou. Brede match zonder strakke negatieve zoekwoorden betekent dat je advertentie verschijnt bij vragen waar jij geen antwoord op hebt. Je betaalt voor verkeer dat nooit gaat converteren.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De oplossing kost je een half uur per week: open het zoektermenrapport, zoek de woorden die niets met je dienst te maken hebben en voeg ze toe als negatief zoekwoord. "Gratis", "vacature", "cursus" en "diy" staan bij bijna elke klant op de lijst. Combineer dit met long-tail zoekwoorden voor scherper verkeer.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Probleem 3: Eén grote campagne in plaats van een doordachte structuur</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            We zien het vaak: één campagne, één advertentiegroep, dertig verschillende zoekwoorden. Dat is makkelijk om aan te maken, maar onmogelijk om te sturen. Je kunt geen apart budget toekennen aan je beste producten, je kunt geen specifieke advertenties schrijven en je Quality Score zakt omdat je advertentietekst nooit precies past bij wat iemand zoekt.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Splits je account op per dienst of productcategorie. Per categorie maak je strakke advertentiegroepen van vijf tot vijftien verwante zoekwoorden. Daarmee houd je de regie en weet je precies wat werkt en wat niet.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Probleem 4: De landingspagina is niet gemaakt voor de advertentie</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Je advertentie belooft "airco installatie binnen 48 uur" en de bezoeker landt op een algemene homepage met vijftien diensten. Resultaat: hoge bouncerate, lage conversie en een ondergemiddelde landingspagina-ervaring in Google Ads. Je betaalt vol tarief voor klikken die nergens heen gaan.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Maak per zoekwoordgroep een eigen landingspagina waarop het beloofde antwoord direct in beeld staat. Houd het simpel: één duidelijke kop, één belofte, één call-to-action. Lees ook <Link to="/blogs/strategie/landingspagina-schrijven-converteert" className="text-accent hover:underline">hoe je een landingspagina schrijft die converteert</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Probleem 5: Te lage budgetten op je winnaars</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Veel ondernemers spreiden hun budget gelijk over alle campagnes. Dat voelt eerlijk, maar het is duur. Sommige campagnes leveren drie keer zoveel op als andere, terwijl ze hetzelfde budget krijgen. Het verlies bij de slechte campagnes betaal je dubbel, want je laat ook geld liggen bij de goede.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Kijk maandelijks naar je return on ad spend per campagne. Verdubbel het budget van campagnes met een ROAS boven je doel. Zet campagnes die structureel onder doel presteren op pauze of stuur ze drastisch bij. Geen enkele euro mag op de verkeerde plek staan.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Probleem 6: Verkeerde biedstrategie voor het accountstadium</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Smart Bidding is krachtig, maar werkt alleen als Google genoeg conversiedata heeft. Een nieuwe campagne op "Doel ROAS" met minder dan tien conversies per maand is gokken. Je krijgt extreme schommelingen in je klikprijs en het algoritme weet niet wat een goede klant is.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Begin met handmatige CPC of "Klikken maximaliseren" tot je minstens 30 conversies per maand draait. Pas dan zet je over op "Conversies maximaliseren" of "Doel CPA". Lees ook <Link to="/blogs/google-ads/smart-bidding-uitgelegd-wanneer-wanneer" className="text-accent hover:underline">wanneer Smart Bidding wel en niet werkt</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Probleem 7: Halfvolle of ontbrekende advertentie-extensies</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Sitelinks, callouts, prijsextensies, locatie en gestructureerde fragmenten zijn gratis ruimte op het zoekresultaat. Google beloont accounts die ze volledig invullen met een hogere positie en een betere CTR. Toch zien we accounts met twee sitelinks en geen callouts, terwijl de concurrent dubbel zo groot in beeld staat.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Vul minimaal vier sitelinks, vier callouts en vier gestructureerde fragmenten in. Voeg telefoon, locatie, prijzen en review-extensies toe waar het kan. Het kost een uur en je advertentie krijgt direct meer ruimte.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Probleem 8: Het zoektermenrapport blijft ongelezen</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Het zoektermenrapport vertelt je precies welke vragen mensen intypen voordat ze op je advertentie klikken. Het is de meest waardevolle data in je hele account. Toch zien we veel adverteerders dit rapport nooit openen. Daardoor missen ze gouden long-tail kansen en blijven ze betalen voor verkeer dat ze allang hadden moeten uitsluiten.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Plan elke vrijdag een half uur in om door het rapport te lopen. Voeg waardevolle nieuwe zoekwoorden toe als exact match in je campagne. Voeg irrelevante zoekwoorden toe als negatief. Je account wordt schoner en je klikprijs zakt vanzelf.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Probleem 9: Geen koppeling met Google Analytics 4</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Google Ads laat je zien wie er klikt en converteert, maar niet wat er op je website gebeurt na de klik. Welke pagina's bezoeken ze? Hoe lang blijven ze? Waar haken ze af? Zonder GA4-koppeling vlieg je blind. Je weet niet of je advertenties echte interesse opwekken of alleen klikken kopen.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Koppel Google Analytics 4 aan Google Ads via Tools en Instellingen. Importeer je GA4-doelen als conversies. Vanaf dat moment heb je veel rijkere data over je verkeer en kun je veel slimmer optimaliseren.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe pak je dit aan?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De goede boodschap: bijna alle problemen zijn binnen een paar weken op te lossen. Begin met tracking, want zonder kloppende data is elke andere optimalisatie zinloos. Pak daarna structuur en negatieve zoekwoorden aan. Daarna komen biedstrategieën en landingspagina's. In vier weken heb je een account dat structureel beter presteert.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Wil je weten welke van deze problemen in jouw account spelen? Wij doen een gratis doorlichting van je Google Ads account en laten precies zien waar het geld lekt. Plan een gesprek via onze <Link to="/contact" className="text-accent hover:underline">contactpagina</Link>.
                        </p>
                    </div>

                    {/* FAQ Section */}
                    <section className="mt-16 pt-12 border-t border-primary/10">
                        <h2 className="text-3xl font-bold text-primary mb-8">Veelgestelde vragen</h2>
                        <div className="space-y-6 not-prose">
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat zijn de meest voorkomende problemen in Google Ads?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    De problemen die we het vaakst tegenkomen zijn: ontbrekende of foute conversietracking, te brede zoekwoorden zonder negatives, een rommelige campagnestructuur, slechte landingspagina's, te lage budgetten op winnaars, verkeerde biedstrategieën, onvolledige advertentie-extensies, ongebruikt zoektermenrapport en geen koppeling met Google Analytics 4.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Waarom verbrandt mijn Google Ads budget zonder resultaat?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    In 9 van de 10 gevallen zit het probleem in tracking of in zoekwoorden. Zonder werkende conversietracking weet Google niet wat een goede klant is en optimaliseert het algoritme op het verkeerde signaal. Te brede zoekwoorden zorgen daarnaast voor klikken van mensen die nooit klant worden.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoe controleer ik of mijn Google Ads tracking goed staat?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Open in Google Ads het tabblad Doelen en kijk of je conversies in de afgelopen 7 dagen 'OK' staan. Doe daarna een testaankoop of testlead en controleer of de conversie binnen 24 uur in het account verschijnt. Geen melding? Dan is je tag fout geplaatst of staat de conversie niet als primair ingesteld.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoeveel negatieve zoekwoorden moet ik gebruiken?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Er is geen vast aantal, maar een gezond account heeft tientallen tot honderden negatieve zoekwoorden. Loop wekelijks het zoektermenrapport door en voeg alles toe wat niet bij je dienst of product past. Zo houd je verkeer schoon en je klikprijs laag.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wanneer is mijn Google Ads campagne te klein om winst te maken?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Onder de 300 euro per maand is het lastig om voldoende data te verzamelen voor goede optimalisatie. Het algoritme heeft minimaal 30 conversies in 30 dagen nodig om automatisch te kunnen bieden. Heb je dat niet, kies dan handmatig bieden of verklein je doelgroep.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat is een veelgemaakte fout met Performance Max?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    De grootste fout is Performance Max naast een gewone zoekcampagne draaien zonder accountstructuur. Performance Max kannibaliseert dan je merkverkeer en je betaalt onnodig veel. Sluit altijd je merkterm en bestaande zoekwoorden uit van Performance Max.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Related Links */}
                    <section className="mt-16 pt-12 border-t border-primary/10">
                        <h3 className="text-xl font-bold text-primary mb-6">Lees ook</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <Link to="/blogs/google-ads/google-ads-quality-score-verhogen" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Quality Score verhogen</h3>
                                <p className="text-primary/60 text-sm">7 concrete tips voor een hogere score en lagere CPC.</p>
                            </Link>
                            <Link to="/blogs/google-ads/smart-bidding-uitgelegd-wanneer-wanneer" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Smart Bidding uitgelegd</h3>
                                <p className="text-primary/60 text-sm">Wanneer gebruik je het en wanneer niet?</p>
                            </Link>
                            <Link to="/blogs/google-ads/long-tail-keywords-google-ads" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Long-tail keywords</h3>
                                <p className="text-primary/60 text-sm">Waarom ze zo waardevol zijn in Google Ads.</p>
                            </Link>
                        </div>
                    </section>
                </div>
            </article>

            {/* Bottom CTA */}
            <section className="w-full pb-32 px-6">
                <div className="max-w-4xl mx-auto bg-primary rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
                    <h2 className="relative z-10 font-drama italic text-background text-3xl sm:text-4xl md:text-5xl mb-6">Geld lekt uit je Google Ads?</h2>
                    <p className="relative z-10 font-sans text-background/70 text-lg mb-10 max-w-xl mx-auto">We doorzoeken je account, brengen de problemen in kaart en vertellen je wat het oplost. Geen verplichtingen.</p>
                    <Link to="/contact" className="relative z-10 btn-magnetic inline-flex items-center justify-center bg-accent text-background font-sans font-bold text-lg px-10 py-4 rounded-[2rem] hover:bg-accent/90 transition-colors">Neem contact op</Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
