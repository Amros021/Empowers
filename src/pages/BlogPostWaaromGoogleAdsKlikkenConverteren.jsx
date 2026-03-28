import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ChevronRight, User } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function BlogPostWaaromGoogleAdsKlikkenConverteren() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen selection:bg-accent/30 selection:text-dark flex flex-col bg-background">
            <Helmet>
                <title>Waarom jouw Google Ads wel klikken maar niet converteren | Empowers</title>
                <meta name="description" content="Veel klikken maar geen conversies in Google Ads? Ontdek de 6 meest voorkomende oorzaken en los ze vandaag nog op. Praktische tips voor MKB." />
                <link rel="canonical" href="https://www.empowers.nl/blogs/google-ads/waarom-google-ads-klikken-converteren" />
                <meta property="og:title" content="Waarom jouw Google Ads wel klikken maar niet converteren | Empowers" />
                <meta property="og:description" content="Veel klikken maar geen conversies in Google Ads? Ontdek de 6 meest voorkomende oorzaken en los ze vandaag nog op. Praktische tips voor MKB." />
                <meta property="og:url" content="https://www.empowers.nl/blogs/google-ads/waarom-google-ads-klikken-converteren" />
                <meta property="og:type" content="article" />
                <meta property="og:image" content="https://www.empowers.nl/images/blogs/waarom-google-ads-klikken-converteren.jpg" />
                <script type="application/ld+json">{JSON.stringify({
                    "@context": "https://schema.org",
                    "@graph": [
                        {
                            "@type": "Article",
                            "headline": "Waarom jouw Google Ads wel klikken maar niet converteren",
                            "image": "https://www.empowers.nl/images/blogs/waarom-google-ads-klikken-converteren.jpg",
                            "description": "Veel klikken maar geen conversies in Google Ads? Ontdek de 6 meest voorkomende oorzaken en los ze vandaag nog op. Praktische tips voor MKB.",
                            "author": { "@type": "Organization", "name": "Empowers" },
                            "publisher": { "@type": "Organization", "name": "Empowers", "url": "https://www.empowers.nl" },
                            "datePublished": "2026-03-26T00:00:00+01:00",
                            "dateModified": "2026-03-26T00:00:00+01:00",
                            "url": "https://www.empowers.nl/blogs/google-ads/waarom-google-ads-klikken-converteren"
                        },
                        {
                            "@type": "FAQPage",
                            "mainEntity": [
                                {
                                    "@type": "Question",
                                    "name": "Waarom krijg ik wel klikken maar geen conversies in Google Ads?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "De meest voorkomende reden is een mismatch tussen je advertentie en je landingspagina. Iemand klikt op een advertentie met een specifieke belofte, maar komt op een pagina die iets anders laat zien. Andere oorzaken zijn te brede zoekwoorden, een trage website, ontbrekende call-to-action of slechte mobiele ervaring. Bij onze klanten lossen we dit gemiddeld binnen 2 weken op, met 30 tot 50% meer conversies als resultaat."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Wat is een goed conversiepercentage voor Google Ads?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Een gemiddeld conversiepercentage in Google Ads ligt rond de 3 tot 5% voor zoekadvertenties. In sommige branches, zoals juridische dienstverlening of hypotheken, is 2% al goed. Webshops scoren vaak 1 tot 3%. Het hangt af van je branche, je aanbod en hoe goed je landingspagina is ingericht. Alles onder de 1% is een teken dat er iets mis is met je campagne of pagina."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Hoe weet ik of mijn zoekwoorden te breed zijn?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Check het zoektermenrapport in je Google Ads account. Als je ziet dat mensen op je advertentie klikken via termen die niks met je aanbod te maken hebben, zijn je zoekwoorden te breed. Gebruik je bijvoorbeeld het zoekwoord 'schoenen' zonder verdere specificatie, dan betaal je ook voor klikken van mensen die zoeken op 'schoenen repareren' of 'schoenen tekenen'. Voeg uitsluitingszoekwoorden toe en werk met exact match of phrase match."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Wat moet er op een goede landingspagina staan voor Google Ads?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Een goede landingspagina bevat een kop die aansluit op de advertentietekst, een duidelijke beschrijving van je aanbod, sociale bewijslast zoals reviews of klantverhalen, en een opvallende call-to-action. De pagina moet binnen 3 seconden laden en op mobiel goed werken. Vermijd afleidende navigatie en bied maar een duidelijke actie aan: bellen, formulier invullen of direct bestellen."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Helpt Smart Bidding als mijn Google Ads niet converteren?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Smart Bidding kan helpen, maar alleen als je genoeg conversiedata hebt. Google raadt minimaal 30 conversies per maand aan voordat je overstapt op een strategie als 'Conversies maximaliseren' of 'Doel-CPA'. Heb je minder dan 15 conversies per maand, dan mist het algoritme data om goede beslissingen te nemen. Begin dan met handmatig bieden of 'Klikken maximaliseren' en schakel pas over als je voldoende volume hebt."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Hoe snel kan ik mijn conversiepercentage verbeteren?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "De snelste verbeteringen bereik je door je landingspagina aan te passen en je zoekwoorden te verscherpen. Dat kun je binnen een week doen. De eerste resultaten zie je meestal na 2 tot 4 weken, afhankelijk van je klikvolume. Bij onze klanten zien we gemiddeld een verbetering van 25 tot 40% in het conversiepercentage na het doorvoeren van de eerste aanpassingen aan pagina en campagne."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Kan ik zelf mijn Google Ads verbeteren of heb ik een specialist nodig?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Basisverbeteringen kun je zelf doorvoeren: zoektermenrapport controleren, uitsluitingszoekwoorden toevoegen en je landingspagina verbeteren. Maar als je campagne structureel onder de 2% conversie blijft, loont het om een specialist in te schakelen. Een ervaren Google Ads specialist ziet in een paar uur waar het probleem zit en bespaart je maanden aan verspild budget. Bij Empowers doen we een gratis eerste analyse."
                                    }
                                }
                            ]
                        }
                    ]
                })}</script>
                <script type="application/ld+json">{JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "BreadcrumbList",
                    "itemListElement": [
                        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.empowers.nl" },
                        { "@type": "ListItem", "position": 2, "name": "Nieuws", "item": "https://www.empowers.nl/nieuws" },
                        { "@type": "ListItem", "position": 3, "name": "Google Ads", "item": "https://www.empowers.nl/blogs/google-ads" },
                        { "@type": "ListItem", "position": 4, "name": "Waarom jouw Google Ads wel klikken maar niet converteren", "item": "https://www.empowers.nl/blogs/google-ads/waarom-google-ads-klikken-converteren" }
                    ]
                })}</script>
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
                        <span className="text-primary truncate">Google Ads klikken niet converteren</span>
                    </nav>

                    {/* Header */}
                    <header className="mb-16">
                        <div className="inline-block px-3 py-1 bg-accent/10 text-accent font-mono text-xs uppercase tracking-widest rounded-full mb-6">
                            Google Ads
                        </div>
                        <h1 className="font-sans font-bold text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight mb-8">
                            Waarom jouw Google Ads wel klikken maar niet converteren
                        </h1>

                        <div className="flex flex-wrap items-center gap-6 text-sm font-sans text-primary/60 border-y border-primary/10 py-6">
                            <div className="flex items-center gap-2">
                                <User className="w-4 h-4" />
                                <span>Empowers Redactie</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>26 maart 2026</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>7 minuten leestijd</span>
                            </div>
                        </div>
                    </header>

                    {/* Featured Image */}
                    <figure className="w-full h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden mb-16 relative bg-primary">
                        <div className="absolute inset-0 bg-[url('/images/blogs/waarom-google-ads-klikken-converteren.jpg')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </figure>

                    {/* Content */}
                    <div className="prose prose-lg prose-headings:font-sans prose-headings:font-bold prose-headings:text-primary prose-p:font-sans prose-p:text-primary/80 prose-p:leading-relaxed max-w-none">
                        <p className="text-xl md:text-2xl font-medium leading-relaxed mb-10 text-primary">
                            Je Google Ads campagne draait. Er komen klikken binnen. Maar verkopen? Aanvragen? Niks. Dat is een van de meest frustrerende situaties voor ondernemers die adverteren via Google. Het goede nieuws: er is bijna altijd een concrete oorzaak. En die is op te lossen. We lopen de 6 meest voorkomende redenen door en laten zien hoe je ze aanpakt.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat betekent het als Google Ads wel klikken maar niet converteren?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een conversie is de actie die je wilt dat een bezoeker uitvoert. Een aankoop, een offerteaanvraag, een telefoontje. Klikken zonder conversies betekent dat mensen wel op je advertentie klikken, maar daarna afhaken. Ze verlaten je website zonder iets te doen.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Dat kost geld. Bij een gemiddelde klikprijs van 2 euro en 100 klikken per dag geef je 6000 euro per maand uit aan bezoekers die niks opleveren. Bij onze klanten zien we dat dit probleem gemiddeld 25 tot 40% van het advertentiebudget opslokt als het niet wordt aangepakt.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Het probleem zit zelden in Google Ads zelf. De advertentie doet precies wat ze moet doen: klikken genereren. Het probleem zit bijna altijd in wat er daarna gebeurt.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Waarom is dit zo'n groot probleem voor MKB-bedrijven?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Als MKB-ondernemer heb je geen marketingbudget om te verspillen. Elke euro die je aan Google Ads uitgeeft moet iets opleveren. Toch zien we wekelijks bedrijven die al maanden adverteren zonder te weten waarom de resultaten tegenvallen. Ze verhogen hun budget in de hoop dat meer klikken tot meer verkopen leiden. Dat werkt niet.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Meer klikken bij een slecht converterende campagne betekent gewoon meer geld dat verdampt. Een gemiddeld MKB-bedrijf verliest volgens onderzoek van WordStream zo'n 25% van het Google Ads budget aan irrelevante klikken. Bij bedrijven zonder goede tracking en landingspagina's loopt dat op tot 50%.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Het verschil tussen een campagne die 1% converteert en een die 4% converteert is enorm. Bij hetzelfde budget en dezelfde klikprijs haal je vier keer zoveel klanten. Dat is het verschil tussen verlies draaien en winstgevend groeien.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat zijn de 6 meest voorkomende oorzaken?</h2>

                        <h3 className="text-2xl font-bold text-primary mt-8 mb-4">1. Je zoekwoorden zijn te breed</h3>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Dit is de nummer een oorzaak. Je adverteert op een zoekwoord als "loodgieter" en krijgt klikken van mensen die zoeken op "loodgieter opleiding", "loodgieter salaris" of "loodgieter worden". Die mensen willen geen loodgieter inhuren. Ze kosten je geld zonder iets op te leveren.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De oplossing: open je zoektermenrapport in Google Ads. Kijk welke zoekopdrachten daadwerkelijk klikken genereren. Voeg irrelevante termen toe als uitsluitingszoekwoord. Werk met phrase match of exact match in plaats van broad match zonder restricties. We merken in de praktijk dat het toevoegen van 20 tot 30 uitsluitingszoekwoorden in de eerste week al 15 tot 25% meer relevante klikken oplevert.
                        </p>

                        <h3 className="text-2xl font-bold text-primary mt-8 mb-4">2. Je landingspagina sluit niet aan op je advertentie</h3>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Iemand zoekt op "dakkapel plaatsen kosten" en klikt op jouw advertentie die belooft: "Dakkapel vanaf 4500 euro". Maar de landingspagina toont je hele aanbod: dakkapellen, kozijnen, verbouwingen, isolatie. De bezoeker moet zelf zoeken naar de informatie die je beloofde. Die moeite nemen ze niet. Ze klikken weg.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Elke advertentiegroep verdient een eigen landingspagina die precies aansluit op de belofte in de advertentie. Dezelfde taal, hetzelfde aanbod, dezelfde prijs. Hoe korter de lijn tussen klik en conversie, hoe meer mensen doorzetten.
                        </p>

                        <h3 className="text-2xl font-bold text-primary mt-8 mb-4">3. Je website is te traag of werkt slecht op mobiel</h3>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Meer dan 60% van alle Google-zoekopdrachten komt vanaf een telefoon. Als je website op mobiel traag laadt, moeilijk leesbaar is of knoppen te klein zijn, haakt het merendeel af. Google zelf bevestigt dat 53% van de mobiele bezoekers een pagina verlaat als die langer dan 3 seconden laadt.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Test je pagina via Google PageSpeed Insights. Score je onder de 50 op mobiel? Dan verlies je bezoekers. Comprimeer je afbeeldingen, minimaliseer je code en zorg dat je call-to-action bovenaan de pagina staat zonder te scrollen.
                        </p>

                        <h3 className="text-2xl font-bold text-primary mt-8 mb-4">4. Er is geen duidelijke call-to-action</h3>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Je bezoeker landt op je pagina, leest je aanbod en denkt: "Interessant." Maar wat nu? Als er geen duidelijke volgende stap is, geen knop, geen formulier, geen telefoonnummer dat eruit springt, dan verdwijnt die bezoeker weer.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Zorg dat je call-to-action direct zichtbaar is. Gebruik een contrasterende kleur. Maak de tekst concreet: "Vraag een gratis offerte aan" werkt beter dan "Meer informatie". En herhaal je CTA meerdere keren op de pagina, niet alleen onderaan.
                        </p>

                        <h3 className="text-2xl font-bold text-primary mt-8 mb-4">5. Je <Link to="/blogs/tracking/marketing-tracking-conversies-meten" className="text-accent hover:underline">conversietracking</Link> staat niet goed ingesteld</h3>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Soms converteren je campagnes wel, maar meet je het niet. Als je conversietracking niet correct is ingesteld, rapporteert Google Ads nul conversies terwijl er wel aanvragen of verkopen binnenkomen. Dat vertroebelt je hele beeld.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Controleer of je Google Ads tag correct is geplaatst. Test je formulieren: komt een inzending daadwerkelijk als conversie terug in je Ads-dashboard? Check ook of je dubbele conversies filtert. Slechte tracking is als rijden zonder dashboard: je weet niet hoe hard je gaat en hoeveel brandstof je nog hebt.
                        </p>

                        <h3 className="text-2xl font-bold text-primary mt-8 mb-4">6. Je biedt niet genoeg vertrouwen</h3>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een bezoeker die je niet kent, gaat niet zomaar zijn contactgegevens achterlaten of zijn creditcard invoeren. Zonder vertrouwenssignalen op je pagina blijft de drempel te hoog. Denk aan klantverhalen, Google Reviews, een KvK-nummer, betaalmethode-logo's, een foto van het team.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            We zien bij onze klanten dat het toevoegen van 3 tot 5 klantreviews op de landingspagina het conversiepercentage gemiddeld met 15 tot 20% verhoogt. Mensen kopen van mensen die ze vertrouwen. Laat zien dat anderen je al vertrouwen.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Welke fouten moet je nu meteen stoppen?</h2>

                        <h3 className="text-2xl font-bold text-primary mt-8 mb-4">Fout 1: meer budget gooien naar een kapotte campagne</h3>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Als je conversiepercentage onder de 1% ligt, is meer budget geen oplossing. Je vergroot alleen het lek. Fix eerst de oorzaak. Controleer je zoekwoorden, je landingspagina en je tracking. Pas als die op orde zijn, heeft opschalen zin.
                        </p>

                        <h3 className="text-2xl font-bold text-primary mt-8 mb-4">Fout 2: alles naar de homepage sturen</h3>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Je homepage is gebouwd voor iedereen. Maar een advertentieklikker is niet iedereen. Die zoekt iets specifieks. Een aparte landingspagina per advertentiegroep converteert gemiddeld 2 tot 3 keer beter dan je homepage. Dat is geen mening, dat is wat we in honderden campagnes hebben gemeten.
                        </p>

                        <h3 className="text-2xl font-bold text-primary mt-8 mb-4">Fout 3: nooit je zoektermenrapport bekijken</h3>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Minstens een keer per week moet je controleren op welke zoektermen je advertenties vertoond worden. Zonder die controle betaal je voor klikken die niks opleveren. Het is 10 minuten werk dat je honderden euro's per maand kan besparen.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe los je het stap voor stap op?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Begin met de basis. Stap 1: open je zoektermenrapport en voeg alle irrelevante termen toe als uitsluitingszoekwoord. Stap 2: controleer of je landingspagina aansluit op je advertentie. Zelfde taal, zelfde belofte, zelfde aanbod. Stap 3: test je paginasnelheid op mobiel via PageSpeed Insights en los kritieke problemen op. Stap 4: check of je conversietracking correct werkt door een testconversie uit te voeren. Stap 5: voeg vertrouwenssignalen toe aan je pagina als die er nog niet staan. Stap 6: zorg voor een duidelijke, zichtbare call-to-action bovenaan je pagina.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een webshop in woondecoratie die we begeleidden, had een conversiepercentage van 0,8%. Na het aanscherpen van de zoekwoorden en het bouwen van drie gerichte landingspagina's steeg dat naar 3,4% in zes weken. Hetzelfde budget, vier keer zoveel bestellingen.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Wil je weten waarom jouw <Link to="/google-ads" className="text-accent hover:underline">Google Ads campagnes</Link> niet converteren? We analyseren je account gratis en laten zien waar de kansen liggen. <Link to="/contact" className="text-accent hover:underline">Plan een gesprek</Link> en we kijken er samen naar.
                        </p>

                        <hr className="my-16 border-primary/10" />

                        <h2 className="text-3xl font-bold text-primary mb-8">Veelgestelde vragen over Google Ads die niet converteren</h2>

                        <div className="space-y-6 not-prose">
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Waarom krijg ik wel klikken maar geen conversies in Google Ads?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">De meest voorkomende reden is een mismatch tussen je advertentie en je landingspagina. Iemand klikt op een advertentie met een specifieke belofte, maar komt op een pagina die iets anders laat zien. Andere oorzaken zijn te brede zoekwoorden, een trage website, ontbrekende call-to-action of slechte mobiele ervaring. Bij onze klanten lossen we dit gemiddeld binnen 2 weken op, met 30 tot 50% meer conversies als resultaat.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat is een goed conversiepercentage voor Google Ads?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Een gemiddeld conversiepercentage in Google Ads ligt rond de 3 tot 5% voor zoekadvertenties. In sommige branches, zoals juridische dienstverlening of hypotheken, is 2% al goed. Webshops scoren vaak 1 tot 3%. Het hangt af van je branche, je aanbod en hoe goed je landingspagina is ingericht. Alles onder de 1% is een teken dat er iets mis is met je campagne of pagina.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoe weet ik of mijn zoekwoorden te breed zijn?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Check het zoektermenrapport in je Google Ads account. Als je ziet dat mensen op je advertentie klikken via termen die niks met je aanbod te maken hebben, zijn je zoekwoorden te breed. Gebruik je bijvoorbeeld het zoekwoord 'schoenen' zonder verdere specificatie, dan betaal je ook voor klikken van mensen die zoeken op 'schoenen repareren' of 'schoenen tekenen'. Voeg uitsluitingszoekwoorden toe en werk met exact match of phrase match.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat moet er op een goede landingspagina staan voor Google Ads?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Een goede landingspagina bevat een kop die aansluit op de advertentietekst, een duidelijke beschrijving van je aanbod, sociale bewijslast zoals reviews of klantverhalen, en een opvallende call-to-action. De pagina moet binnen 3 seconden laden en op mobiel goed werken. Vermijd afleidende navigatie en bied maar een duidelijke actie aan: bellen, formulier invullen of direct bestellen.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Helpt Smart Bidding als mijn Google Ads niet converteren?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Smart Bidding kan helpen, maar alleen als je genoeg conversiedata hebt. Google raadt minimaal 30 conversies per maand aan voordat je overstapt op een strategie als 'Conversies maximaliseren' of 'Doel-CPA'. Heb je minder dan 15 conversies per maand, dan mist het algoritme data om goede beslissingen te nemen. Begin dan met handmatig bieden of 'Klikken maximaliseren' en schakel pas over als je voldoende volume hebt.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoe snel kan ik mijn conversiepercentage verbeteren?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">De snelste verbeteringen bereik je door je landingspagina aan te passen en je zoekwoorden te verscherpen. Dat kun je binnen een week doen. De eerste resultaten zie je meestal na 2 tot 4 weken, afhankelijk van je klikvolume. Bij onze klanten zien we gemiddeld een verbetering van 25 tot 40% in het conversiepercentage na het doorvoeren van de eerste aanpassingen aan pagina en campagne.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Kan ik zelf mijn Google Ads verbeteren of heb ik een specialist nodig?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Basisverbeteringen kun je zelf doorvoeren: zoektermenrapport controleren, uitsluitingszoekwoorden toevoegen en je landingspagina verbeteren. Maar als je campagne structureel onder de 2% conversie blijft, loont het om een specialist in te schakelen. Een ervaren Google Ads specialist ziet in een paar uur waar het probleem zit en bespaart je maanden aan verspild budget. Bij Empowers doen we een gratis eerste analyse.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </article>

            {/* Bottom CTA */}
            <section className="w-full pb-32 px-6">
                <div className="max-w-4xl mx-auto bg-primary rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
                    <h2 className="relative z-10 font-drama italic text-background text-3xl sm:text-4xl md:text-5xl mb-6">Van klikken naar klanten</h2>
                    <p className="relative z-10 font-sans text-background/70 text-lg mb-10 max-w-xl mx-auto">
                        Wil je weten waarom jouw Google Ads niet converteren? We analyseren je campagne gratis en laten zien waar jouw kansen liggen.
                    </p>
                    <Link to="/contact" className="relative z-10 btn-magnetic inline-flex items-center justify-center bg-accent text-background font-sans font-bold text-lg px-10 py-4 rounded-[2rem] hover:bg-accent/90 transition-colors">
                        Samenwerken met Empowers
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}