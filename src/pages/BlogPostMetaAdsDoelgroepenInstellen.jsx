import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ChevronRight, User } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function BlogPostMetaAdsDoelgroepenInstellen() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen selection:bg-accent/30 selection:text-dark flex flex-col bg-background">
            <Helmet>
                <title>Meta Ads doelgroepen instellen: zo bereik je de juiste mensen | Empowers</title>
                <meta name="description" content="Meta Ads doelgroepen instellen bepaalt of je advertenties presteren of geld verbranden. Lees hoe je interesses, custom audiences en lookalikes inzet voor meer omzet." />
                <link rel="canonical" href="https://www.empowers.nl/blogs/social-ads/meta-ads-doelgroepen" />
                <meta property="og:title" content="Meta Ads doelgroepen instellen: zo bereik je de juiste mensen" />
                <meta property="og:description" content="Meta Ads doelgroepen instellen bepaalt of je advertenties presteren of geld verbranden. Lees welke aanpak in 2026 echt werkt." />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://www.empowers.nl/blogs/social-ads/meta-ads-doelgroepen" />
                <meta property="og:image" content="https://www.empowers.nl/images/blogs/meta-ads-doelgroepen.jpg" />
                <meta property="article:published_time" content="2026-04-14" />
                <meta property="article:author" content="Empowers" />
                <meta property="article:section" content="Social Ads" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Meta Ads doelgroepen instellen: zo bereik je de juiste mensen" />
                <meta name="twitter:description" content="Meta Ads doelgroepen instellen bepaalt of je advertenties presteren of geld verbranden. Zo doe je het goed in 2026." />

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Article",
                        "headline": "Meta Ads doelgroepen instellen: zo bereik je de juiste mensen",
                        "description": "Meta Ads doelgroepen instellen bepaalt of je advertenties presteren of geld verbranden. Lees hoe je interesses, custom audiences en lookalikes inzet voor meer omzet.",
                        "image": "https://www.empowers.nl/images/blogs/meta-ads-doelgroepen.jpg",
                        "datePublished": "2026-04-14T00:00:00+02:00",
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
                                    "name": "Wat is een goede grootte voor een Meta Ads doelgroep?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Voor de meeste MKB-adverteerders werkt een doelgroep van 500.000 tot 2 miljoen mensen het beste. Te klein en het algoritme krijgt te weinig data om te leren. Te groot en je verspilt budget aan mensen die niet relevant zijn. Bij Advantage+ campagnes mag je breder gaan, omdat het algoritme zelf de juiste mensen vindt."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Hoeveel doelgroepen moet ik testen in Meta Ads?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Begin met 2 tot 4 doelgroepen per campagne. Eén interessegerichte doelgroep, één lookalike, één custom audience en eventueel een brede Advantage+ doelgroep. Geef elke doelgroep minimaal 7 dagen en 50 conversies om eerlijk te kunnen vergelijken. Daarna schaal je op wat werkt en stop je wat onderpresteert."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Werken interesse-targeting doelgroepen in 2026 nog?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Ja, maar minder dan vroeger. Door iOS-privacywijzigingen en het verdwijnen van detailed targeting opties is het algoritme leidend geworden. Interesses zijn nu een startsignaal, geen exacte filter. Een brede doelgroep met goede creatives presteert vaak beter dan een nauwkeurig getargete doelgroep met middelmatige creatives."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Wat is het verschil tussen een custom audience en een lookalike audience?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Een custom audience bestaat uit mensen die jouw bedrijf al kennen: websitebezoekers, klantenlijsten, video kijkers of Instagram volgers. Een lookalike audience is gebaseerd op een custom audience en bevat mensen die op die groep lijken. Custom audiences gebruik je voor retargeting en upsell. Lookalikes gebruik je om nieuwe klanten te vinden die op je beste klanten lijken."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Moet ik mijn doelgroepen handmatig instellen of Advantage+ gebruiken?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Dat hangt af van je dataset. Heb je veel conversiedata en een goed werkende Pixel of Conversie API, dan presteert Advantage+ vaak beter. Heb je een nieuwe campagne of weinig data, dan geeft handmatige targeting je meer controle om het algoritme te trainen. Vaak werkt een combinatie het beste: een Advantage+ campagne naast een handmatig getargete campagne om te vergelijken."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Hoe vaak moet ik mijn Meta Ads doelgroepen aanpassen?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Niet te vaak. Pas je doelgroep alleen aan na minimaal 7 tot 14 dagen, en alleen als de data daar reden toe geeft. Het algoritme heeft tijd nodig om te leren. Custom audiences zoals websitebezoekers en klantenlijsten ververs je elke maand. Lookalikes laat je doorlopend draaien en herbouw je elk kwartaal met de nieuwste data."
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
                                "name": "Meta Ads doelgroepen instellen",
                                "item": "https://www.empowers.nl/blogs/social-ads/meta-ads-doelgroepen"
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
                        <span className="text-primary truncate">Meta Ads doelgroepen instellen</span>
                    </nav>

                    {/* Header */}
                    <header className="mb-16">
                        <div className="inline-block px-3 py-1 bg-accent/10 text-accent font-mono text-xs uppercase tracking-widest rounded-full mb-6">
                            Social Ads
                        </div>
                        <h1 className="font-sans font-bold text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight mb-8">
                            Meta Ads doelgroepen instellen: zo bereik je de juiste mensen
                        </h1>

                        <div className="flex flex-wrap items-center gap-6 text-sm font-sans text-primary/60 border-y border-primary/10 py-6">
                            <div className="flex items-center gap-2">
                                <User className="w-4 h-4" />
                                <span>Empowers Redactie</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>14 april 2026</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>9 minuten leestijd</span>
                            </div>
                        </div>
                    </header>

                    {/* Featured Image */}
                    <figure className="w-full h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden mb-16 relative bg-primary">
                        <div className="absolute inset-0 bg-[url('/images/blogs/meta-ads-doelgroepen.jpg')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </figure>

                    {/* Content */}
                    <div className="prose prose-lg max-w-none prose-headings:text-primary prose-headings:font-bold prose-a:text-accent prose-a:underline hover:prose-a:text-accent/80">
                        <p className="text-xl leading-relaxed text-primary/80 font-medium mb-6">
                            Goede creatives, een sterke landingspagina, een ruim budget. En toch presteren je Meta Ads niet. In negen van de tien gevallen ligt het aan de doelgroep. Wie je bereikt bepaalt of je advertenties omzet opleveren of geld verbranden. In dit artikel lees je hoe je Meta Ads doelgroepen instelt die wel presteren, welke types bestaan en hoe je in 2026 omgaat met de veranderingen door privacy en AI.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Waarom doelgroepen alles bepalen</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Meta toont jouw advertentie aan miljoenen mensen per dag. Niet iedereen daarvan is een potentiële klant. Een verkeerd ingestelde doelgroep zorgt ervoor dat je betaalt om gezien te worden door mensen die je product nooit zullen kopen. Een goed ingestelde doelgroep zorgt ervoor dat elke euro werkt.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            In de praktijk zien we dat de juiste doelgroep de kosten per conversie kan halveren. Twee campagnes met identieke creatives en hetzelfde budget kunnen totaal verschillende resultaten geven, alleen door de doelgroep. Dat is de hefboom waar de meeste adverteerders te weinig aandacht aan besteden.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Sinds de privacywijzigingen op iOS en in Europa is doelgroep-targeting bovendien lastiger geworden. Veel oude tactieken werken niet meer. Maar er zijn ook nieuwe mogelijkheden bijgekomen die slimmer omgaan met data. Meer over deze veranderingen lees je in onze <Link to="/blogs/social-ads/meta-ads-2026-werkt-na" className="text-accent hover:underline">blog over Meta Ads in 2026</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">De drie soorten doelgroepen in Meta Ads</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Voordat je iets instelt, moet je begrijpen welke doelgroepen Meta aanbiedt. Er zijn drie hoofdcategorieën, elk met een eigen rol in je strategie.
                        </p>

                        <h3 className="text-xl font-semibold text-primary mt-10 mb-4">1. Saved audiences (interesses en demografie)</h3>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Dit zijn doelgroepen die je samenstelt op basis van leeftijd, locatie, interesses en gedrag. Je kiest bijvoorbeeld vrouwen tussen 25 en 45 in Nederland die geinteresseerd zijn in yoga. Vroeger was dit de standaard manier om te targeten. Sinds 2023 zijn veel detailed targeting opties verdwenen, maar de basisindeling werkt nog steeds.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Saved audiences zijn nuttig als startpunt, vooral als je nog geen Pixel data hebt. Houd ze bewust breed. Een doelgroep van 800.000 tot 2 miljoen mensen geeft het algoritme genoeg ruimte om de juiste mensen binnen die groep te vinden.
                        </p>

                        <h3 className="text-xl font-semibold text-primary mt-10 mb-4">2. Custom audiences (eigen data)</h3>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Custom audiences bestaan uit mensen die al een relatie met jouw bedrijf hebben. Denk aan websitebezoekers, klantenlijsten, mensen die je video hebben gekeken of Instagram volgers. Dit zijn jouw warmste doelgroepen. Conversiepercentages liggen hier vaak twee tot vijf keer hoger dan bij koude doelgroepen.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Het opbouwen van custom audiences begint met een goed werkende Meta Pixel of Conversie API. Zonder die data heb je niets om mee te werken. Lees hoe je dat goed instelt in onze <Link to="/blogs/social-ads/meta-pixel-instellen-stap-stap" className="text-accent hover:underline">stap-voor-stap handleiding voor de Meta Pixel</Link>.
                        </p>

                        <h3 className="text-xl font-semibold text-primary mt-10 mb-4">3. Lookalike audiences</h3>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Lookalikes bouwen voort op je custom audiences. Je geeft Meta een seedlijst, bijvoorbeeld je beste 1.000 klanten, en het algoritme zoekt mensen die op die groep lijken qua gedrag en interesses. Lookalikes zijn de brug tussen warme en koude doelgroepen: nieuwe mensen, maar wel met een hogere kans op conversie dan willekeurige interessetargeting.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Begin met een lookalike van 1 procent. Dat is de kleinste en meest accurate variant. Werkt die goed? Schaal dan op naar 2 of 3 procent voor meer bereik. Meer hierover lees je in onze <Link to="/blogs/social-ads/lookalike-audiences-meta-ads-meer" className="text-accent hover:underline">complete gids over lookalike audiences</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe je doelgroepen opbouwt voor verschillende doelen</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Welke doelgroep je inzet hangt af van je doel. Een campagne voor naamsbekendheid vraagt een andere targeting dan een retargeting campagne voor mensen die hun winkelmandje hebben verlaten.
                        </p>

                        <h3 className="text-xl font-semibold text-primary mt-10 mb-4">Top of funnel: koude doelgroepen</h3>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Voor mensen die je nog niet kennen, kies je een lookalike audience of een brede saved audience. Het doel is om jouw merk te introduceren bij relevante nieuwe mensen. Houd de verwachting realistisch: hier is het conversiepercentage lager, maar de schaal groter. Reken op een ROAS van 1,5 tot 3 in deze fase.
                        </p>

                        <h3 className="text-xl font-semibold text-primary mt-10 mb-4">Middle of funnel: warme doelgroepen</h3>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Voor mensen die je website hebben bezocht of je content hebben bekeken, gebruik je custom audiences. Bijvoorbeeld iedereen die de afgelopen 30 dagen een productpagina heeft bezocht maar niet heeft gekocht. Hier laat je advertenties zien die ingaan op twijfels of toegevoegde waarde tonen.
                        </p>

                        <h3 className="text-xl font-semibold text-primary mt-10 mb-4">Bottom of funnel: retargeting</h3>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Voor mensen die op het punt stonden te kopen maar afhaakten, zet je een retargeting custom audience in. Denk aan winkelmandverlaters of mensen die de checkoutpagina openden. Dit zijn je hoogst converterende doelgroepen, met conversiepercentages tot tien keer hoger dan koude doelgroepen. Meer hierover lees je in onze <Link to="/blogs/social-ads/retargeting-meta-ads-haal-verloren" className="text-accent hover:underline">blog over Meta Ads retargeting</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Advantage+ doelgroepen: het algoritme aan zet</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Sinds 2024 stuurt Meta steeds harder aan op Advantage+ doelgroepen. In plaats van zelf interesses kiezen, geef je het algoritme alleen een suggestie en laat je Meta zelf bepalen wie de advertentie te zien krijgt. Voor adverteerders met een goed gevulde Pixel werkt dit verrassend goed.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De grote winst zit in schaal. Advantage+ doelgroepen zijn vaak veel breder dan handmatige targeting, waardoor je algoritme meer leerruimte krijgt. Het nadeel: minder controle. Je kunt niet altijd zien waarom Meta bepaalde mensen kiest. Dat voelt oncomfortabel als je gewend bent zelf alles in te stellen.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Onze ervaring: zet Advantage+ in als test naast een handmatige campagne. Geef beide minimaal 14 dagen en vergelijk de kosten per conversie. Bij sommige klanten wint Advantage+ duidelijk. Bij andere blijkt handmatige targeting nog steeds beter, vooral in nichesectoren met weinig zoekvolume.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">De grootste fouten bij Meta Ads doelgroepen</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Veel adverteerders maken dezelfde fouten bij het instellen van doelgroepen. Vier komen we keer op keer tegen.
                        </p>

                        <h3 className="text-xl font-semibold text-primary mt-10 mb-4">Te kleine doelgroepen</h3>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een doelgroep van 50.000 mensen klinkt nauwkeurig, maar geeft het algoritme te weinig ruimte. Zonder leerruimte raakt je campagne in de optimalisatiefase vast. Mik op minimaal 500.000 mensen voor saved en lookalike doelgroepen.
                        </p>

                        <h3 className="text-xl font-semibold text-primary mt-10 mb-4">Te veel overlap tussen doelgroepen</h3>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Als je drie campagnes hebt die allemaal naar dezelfde mensen targeten, ga je tegen jezelf bieden. De CPC stijgt, je resultaten dalen. Gebruik de Audience Overlap tool in Meta om te checken of je doelgroepen elkaar overlappen. Bij meer dan 30 procent overlap is het tijd om campagnes samen te voegen.
                        </p>

                        <h3 className="text-xl font-semibold text-primary mt-10 mb-4">Doelgroepen te snel aanpassen</h3>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Het algoritme heeft tijd nodig om te leren. Als je elke twee dagen je doelgroep wijzigt, reset je het leerproces telkens opnieuw. Geef je doelgroep minimaal 7 dagen en 50 conversies voordat je een oordeel velt.
                        </p>

                        <h3 className="text-xl font-semibold text-primary mt-10 mb-4">Geen exclusion gebruiken</h3>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Wil je nieuwe klanten aantrekken? Sluit je bestaande klanten uit van koude campagnes. Anders betaal je om mensen te bereiken die al kopen. Een simpele exclusion van je klantenlijst kan je advertentiekosten direct met 10 tot 20 procent verlagen.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Een praktisch doelgroep-plan voor jouw campagne</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Begin altijd met de data die je al hebt. Upload je klantenlijst als basis voor een custom audience en bouw daarop een lookalike van 1 procent. Zet daarnaast een bredere saved audience op met de basis-interesses van je doelgroep. Tot slot een retargeting campagne voor websitebezoekers van de afgelopen 30 dagen.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Drie doelgroepen, drie funnel-stadia, drie type advertenties. Geef elke campagne een eigen budget en meet apart. Na 14 dagen weet je welke combinatie werkt. Schaal die op en bouw vandaaruit verder.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Doelgroepen instellen is geen eenmalige actie. Het is een doorlopend proces van testen, leren en bijsturen. Je doelgroep van vandaag is over zes maanden anders. Klanten veranderen, het platform verandert, het algoritme verandert. Wie zijn doelgroepen actief beheert, houdt het verschil met de concurrent.
                        </p>

                        <p className="text-primary/80 leading-relaxed mb-6">
                            Wil je weten of jouw Meta Ads doelgroepen presteren wat ze zouden moeten? We analyseren je huidige campagnes en laten zien waar de winst zit. Plan een gesprek via onze <Link to="/contact" className="text-accent hover:underline">contactpagina</Link>.
                        </p>
                    </div>

                    {/* FAQ Section */}
                    <section className="mt-16 pt-12 border-t border-primary/10">
                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Veelgestelde vragen</h2>
                        <div className="space-y-6 not-prose">
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat is een goede grootte voor een Meta Ads doelgroep?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Voor de meeste MKB-adverteerders werkt een doelgroep van 500.000 tot 2 miljoen mensen het beste. Te klein en het algoritme krijgt te weinig data om te leren. Te groot en je verspilt budget aan mensen die niet relevant zijn. Bij Advantage+ campagnes mag je breder gaan, omdat het algoritme zelf de juiste mensen vindt.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoeveel doelgroepen moet ik testen in Meta Ads?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Begin met 2 tot 4 doelgroepen per campagne. Eén interessegerichte doelgroep, één lookalike, één custom audience en eventueel een brede Advantage+ doelgroep. Geef elke doelgroep minimaal 7 dagen en 50 conversies om eerlijk te kunnen vergelijken. Daarna schaal je op wat werkt en stop je wat onderpresteert.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Werken interesse-targeting doelgroepen in 2026 nog?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Ja, maar minder dan vroeger. Door iOS-privacywijzigingen en het verdwijnen van detailed targeting opties is het algoritme leidend geworden. Interesses zijn nu een startsignaal, geen exacte filter. Een brede doelgroep met goede creatives presteert vaak beter dan een nauwkeurig getargete doelgroep met middelmatige creatives.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat is het verschil tussen een custom audience en een lookalike audience?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Een custom audience bestaat uit mensen die jouw bedrijf al kennen: websitebezoekers, klantenlijsten, video kijkers of Instagram volgers. Een lookalike audience is gebaseerd op een custom audience en bevat mensen die op die groep lijken. Custom audiences gebruik je voor retargeting en upsell. Lookalikes gebruik je om nieuwe klanten te vinden die op je beste klanten lijken.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Moet ik mijn doelgroepen handmatig instellen of Advantage+ gebruiken?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Dat hangt af van je dataset. Heb je veel conversiedata en een goed werkende Pixel of Conversie API, dan presteert Advantage+ vaak beter. Heb je een nieuwe campagne of weinig data, dan geeft handmatige targeting je meer controle om het algoritme te trainen. Vaak werkt een combinatie het beste: een Advantage+ campagne naast een handmatig getargete campagne om te vergelijken.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoe vaak moet ik mijn Meta Ads doelgroepen aanpassen?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Niet te vaak. Pas je doelgroep alleen aan na minimaal 7 tot 14 dagen, en alleen als de data daar reden toe geeft. Het algoritme heeft tijd nodig om te leren. Custom audiences zoals websitebezoekers en klantenlijsten ververs je elke maand. Lookalikes laat je doorlopend draaien en herbouw je elk kwartaal met de nieuwste data.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Related Links */}
                    <section className="mt-16 pt-12 border-t border-primary/10">
                        <h3 className="text-xl font-bold text-primary mb-6">Lees ook</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <Link to="/blogs/social-ads/lookalike-audiences-meta-ads-meer" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Lookalike audiences in Meta Ads</h3>
                                <p className="text-primary/60 text-sm">Bereik meer mensen die op jouw beste klanten lijken.</p>
                            </Link>
                            <Link to="/blogs/social-ads/retargeting-meta-ads-haal-verloren" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Retargeting via Meta Ads</h3>
                                <p className="text-primary/60 text-sm">Zo haal je verloren websitebezoekers terug.</p>
                            </Link>
                            <Link to="/blogs/social-ads/meta-pixel-instellen-stap-stap" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Meta Pixel instellen</h3>
                                <p className="text-primary/60 text-sm">Stap-voor-stap handleiding voor 2026.</p>
                            </Link>
                        </div>
                    </section>
                </div>
            </article>

            {/* Bottom CTA */}
            <section className="w-full pb-32 px-6">
                <div className="max-w-4xl mx-auto bg-primary rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
                    <h2 className="relative z-10 font-drama italic text-background text-3xl sm:text-4xl md:text-5xl mb-6">Meer halen uit jouw Meta Ads doelgroepen?</h2>
                    <p className="relative z-10 font-sans text-background/70 text-lg mb-10 max-w-xl mx-auto">We analyseren je campagnes en laten zien waar betere targeting het verschil maakt. Geen verplichtingen, wel een helder plan.</p>
                    <Link to="/contact" className="relative z-10 btn-magnetic inline-flex items-center justify-center bg-accent text-background font-sans font-bold text-lg px-10 py-4 rounded-[2rem] hover:bg-accent/90 transition-colors">Neem contact op</Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
