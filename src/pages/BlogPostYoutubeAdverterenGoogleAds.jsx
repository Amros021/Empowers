import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ChevronRight, User } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function BlogPostYoutubeAdverterenGoogleAds() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen selection:bg-accent/30 selection:text-dark flex flex-col bg-background">
            <Helmet>
                <title>YouTube adverteren via Google Ads: zo werkt het | Empowers</title>
                <meta name="description" content="YouTube adverteren loopt via Google Ads. Lees welke campagnetypes je hebt, welke budgetten realistisch zijn en hoe je een YouTube-campagne opzet die kijkers omzet in klanten." />
                <link rel="canonical" href="https://www.empowers.nl/blogs/google-ads/youtube-adverteren-google-ads-werkt" />
                <meta property="og:title" content="YouTube adverteren via Google Ads: zo werkt het" />
                <meta property="og:description" content="Van Skippable In-Stream tot Demand Gen: zo zet je YouTube Ads op die meer doen dan vertoningen scoren." />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://www.empowers.nl/blogs/google-ads/youtube-adverteren-google-ads-werkt" />
                <meta property="og:image" content="https://www.empowers.nl/images/blogs/youtube-adverteren-google-ads-werkt.jpg" />
                <meta property="article:published_time" content="2026-04-25" />
                <meta property="article:author" content="Empowers" />
                <meta property="article:section" content="Google Ads" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="YouTube adverteren via Google Ads: zo werkt het" />
                <meta name="twitter:description" content="Praktische gids voor YouTube Ads via Google Ads: campagnetypes, budgetten, targeting en meten." />

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Article",
                        "headline": "YouTube adverteren via Google Ads: zo werkt het",
                        "description": "YouTube adverteren loopt via Google Ads. Lees welke campagnetypes je hebt, welke budgetten realistisch zijn en hoe je een YouTube-campagne opzet die kijkers omzet in klanten.",
                        "image": "https://www.empowers.nl/images/blogs/youtube-adverteren-google-ads-werkt.jpg",
                        "datePublished": "2026-04-25T11:00:00+02:00",
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
                                    "name": "Hoe begin je met YouTube adverteren via Google Ads?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "YouTube Ads zet je op binnen een Google Ads-account, niet binnen YouTube Studio. Maak een Video- of Demand Gen-campagne aan, koppel een YouTube-kanaal en upload eerst je video naar YouTube als unlisted of public. Daarna kies je doelgroep, budget en biedstrategie net als bij een gewone Google Ads-campagne."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Welke YouTube advertentietypes bestaan er?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "De vijf gangbare typen zijn Skippable In-Stream, Non-Skippable In-Stream, In-Feed Video Ads, Bumper Ads en YouTube Shorts Ads. Skippable In-Stream is de meest gebruikte voor performance, Bumper Ads van 6 seconden voor branding en Shorts Ads voor mobiele bereik. Demand Gen-campagnes combineren YouTube met Discover en Gmail in één plaatsing."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Wat kost YouTube adverteren in Nederland?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "De gemiddelde kosten per view (CPV) liggen in Nederland tussen 0,03 en 0,12 euro voor Skippable In-Stream. Bumper Ads worden afgerekend op CPM en kosten gemiddeld 4 tot 9 euro per 1000 vertoningen. Een testbudget van 500 tot 1500 euro per maand levert genoeg data om binnen 4 weken te zien wat werkt voor jouw doelgroep."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Hoe lang moet een YouTube-advertentie zijn?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Voor Skippable In-Stream werkt 30 tot 60 seconden het beste. Pak de aandacht in de eerste 5 seconden, voordat de skip-knop verschijnt. Bumper Ads zijn vast 6 seconden. Voor Shorts Ads houd je het onder 30 seconden, vaak 15 tot 20. Korter dan dat mist verhaallijn, langer dan 60 seconden verlaagt de view-through-rate aanzienlijk."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Welke targetingopties heb je op YouTube?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Je targeting werkt op vier hoofdlagen: demografisch (leeftijd, geslacht, ouder zijn), interesses en gewoontes (Affinity en In-Market), zoekgedrag (Custom Segments op zoekwoorden) en eigen data (Customer Match en website-bezoekers). De krachtigste setup combineert Custom Segments op recente zoekwoorden met retargeting op websitebezoekers."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Hoe meet je succes van YouTube Ads?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Voor branding kijk je naar View-Through Rate (VTR), CPM en Brand Lift studies. Voor performance kijk je naar conversies, ROAS en de view-through-conversies die binnen 30 dagen na een YouTube-impressie plaatsvonden. Een goede VTR voor Skippable In-Stream zit tussen 20 en 35 procent. Onder de 15 procent loont het om creative aan te passen."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Werkt YouTube adverteren ook voor MKB?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Ja. YouTube heeft in Nederland circa 14 miljoen unieke gebruikers per maand, dus ook voor lokale of niche doelgroepen is bereik geen probleem. De drempel voor MKB ligt vooral in productie van een goede video. Met een vaste vlogger-stijl shoot kun je voor 800 tot 2000 euro een set van 4 tot 6 video's opnemen die een half jaar mee gaan in een campagne."
                                    }
                                }
                            ]
                        },
                        "breadcrumb": {
                            "@type": "BreadcrumbList",
                            "itemListElement": [
                                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.empowers.nl" },
                                { "@type": "ListItem", "position": 2, "name": "Google Ads", "item": "https://www.empowers.nl/blogs/google-ads" },
                                { "@type": "ListItem", "position": 3, "name": "YouTube adverteren via Google Ads" }
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
                        <span className="text-primary/30">YouTube adverteren via Google Ads</span>
                    </nav>

                    {/* Header */}
                    <header className="mb-16">
                        <div className="inline-block px-3 py-1 bg-accent/10 text-accent font-mono text-xs uppercase tracking-widest rounded-full mb-6">
                            Google Ads
                        </div>
                        <h1 className="font-sans font-bold text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight mb-8">
                            YouTube adverteren via Google Ads: zo werkt het
                        </h1>
                        <div className="flex flex-wrap items-center gap-6 text-sm font-sans text-primary/60 border-y border-primary/10 py-6">
                            <span className="flex items-center gap-2"><User size={14} />Empowers Redactie</span>
                            <span className="flex items-center gap-2"><Calendar size={14} />25 apr 2026</span>
                            <span className="flex items-center gap-2"><Clock size={14} />8 min leestijd</span>
                        </div>
                    </header>

                    {/* Featured Image */}
                    <figure className="w-full h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden mb-16 relative bg-primary">
                        <div className="absolute inset-0 bg-[url('/images/blogs/youtube-adverteren-google-ads-werkt.jpg')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </figure>

                    {/* Content */}
                    <div className="prose prose-lg max-w-none">

                        <p className="text-xl leading-relaxed text-primary/80 font-medium mb-6">
                            YouTube is na Google de tweede grootste zoekmachine ter wereld en in Nederland kijkt 86 procent van de internetgebruikers er minimaal wekelijks. Adverteren op het platform loopt volledig via Google Ads, niet via YouTube Studio. In dit artikel lees je welke campagnetypes je kunt inzetten, welke budgetten realistisch zijn voor MKB en hoe je een YouTube-campagne opzet die meer doet dan vertoningen oppikken.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe begin je met YouTube adverteren via Google Ads?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            YouTube Ads bouw je in het Google Ads-platform, niet in YouTube zelf. Vanuit Google Ads kies je bij Nieuwe campagne voor het doel Bekendheid en bereik, Productoverweging of Verkoop, met als campagnetype Video of Demand Gen. Vervolgens koppel je je YouTube-kanaal aan het Google Ads-account en upload je de videoadvertentie als unlisted of public op YouTube.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De koppeling met je YouTube-kanaal is meer dan formeel. Pas dan kun je gebruikers targeten die met jouw kanaal hebben geïnteracteerd, kijktijd-data uitlezen en remarketinglijsten opbouwen op basis van eerdere views. Zonder gekoppeld kanaal mis je de helft van de waarde die het platform biedt.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Daarna doorloop je dezelfde stappen als bij een Search-campagne: doelgroep, biedstrategie, dagbudget en assets. Voor wie nieuw is in Google Ads is <Link to="/blogs/google-ads/google-ads-voor-mkb-campagne-instellen" className="text-accent hover:underline">deze gids voor het opzetten van Google Ads voor MKB</Link> een logisch startpunt.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Welke YouTube advertentietypes bestaan er?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Vijf advertentietypes vormen de standaard. Skippable In-Stream Ads spelen voor of tijdens een video en kunnen na 5 seconden worden weggeklikt. Dit is het werkpaard voor performance-campagnes, met afrekening op view (CPV) of conversie. Non-Skippable Ads van 15 tot 30 seconden kunnen niet overgeslagen worden en betaal je per 1000 vertoningen.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Bumper Ads zijn 6 seconden, niet skippable, en ideaal voor merknaam-vestiging of remindercampagnes. In-Feed Video Ads (voorheen Discovery Ads) verschijnen tussen YouTube-zoekresultaten en in de aanbevolen videolijst. Je betaalt alleen als iemand actief op de thumbnail klikt om te bekijken, wat een hogere intentie signaleert.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Sinds 2024 hoort daar Shorts Ads bij. Verticale, korte video's die tussen organische Shorts verschijnen. Voor doelgroepen onder 35 jaar is dit het snelst groeiende formaat. Daarnaast bestaat Demand Gen, dat YouTube combineert met Discover-feed en Gmail-promotietabblad in één campagne, gestuurd door Google's machine learning.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat kost YouTube adverteren in Nederland?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Voor Skippable In-Stream betaal je gemiddeld 0,03 tot 0,12 euro per view. Een view telt pas mee na 30 seconden kijken of na een interactie. Bij goedkopere doelgroepen zoals algemene consumenten zit je rond 0,04 euro, voor B2B-targeting met Custom Segments loopt dit op tot 0,15 euro per view.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Bumper Ads worden afgerekend op CPM en kosten in Nederland 4 tot 9 euro per 1000 vertoningen. Demand Gen ligt vaak iets hoger door de bredere placement-mix, met een gemiddelde CPM van 6 tot 12 euro. Met een testbudget van 500 tot 1500 euro per maand kun je binnen 4 weken betrouwbare data opbouwen om te zien welk type werkt voor jouw doelgroep.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Bij onze klanten zien we dat de eerste maand vooral leerwerk is. Een webshop in interieur die we onlangs op YouTube zetten, draaide de eerste 4 weken op een CPV van 0,11 euro. Na het uitfilteren van slecht presterende plaatsingen en het toevoegen van een nieuwe kortere variant zakte de CPV naar 0,06 in de tweede maand, met een hogere view-through-rate.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe lang moet een YouTube-advertentie zijn?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Voor Skippable In-Stream werkt 30 tot 60 seconden het beste. Korter haalt vaak niet de drempel van 30 seconden waarop een view geregistreerd wordt, langer verliest kijkers in het midden. De eerste 5 seconden zijn beslissend, want daarna verschijnt de skip-knop. Begin niet met een logo of een rustige intro, maar met de hook: pijnpunt, vraag of opvallend beeld.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Bumper Ads zijn vast 6 seconden. Dat lijkt weinig, maar het is precies genoeg voor één heldere boodschap met merknaam. Goede Bumpers werken in series van 3, waarbij elke variant een ander voordeel toont. Samen leveren ze een afgemaakt verhaal in 18 seconden cumulatieve view-tijd.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Shorts Ads houd je onder de 30 seconden, met 15 tot 20 als sweet spot. Verticale formaat (9:16), tekstuele on-screen overlays voor wie geluid uit heeft, en een directe call-to-action in de eerste 3 seconden. Het maatwerk dat hier werkt verschilt sterk van een traditionele YouTube-advertentie. Voor de bredere video-aanpak op social platforms helpt <Link to="/blogs/social-ads/winnende-meta-ads-video-2026" className="text-accent hover:underline">deze gids over winnende Meta Ads video's in 2026</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Welke targetingopties heb je op YouTube?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Targeting in YouTube Ads werkt op vier lagen tegelijk. Demografisch op leeftijd, geslacht, ouder zijn en huishoudinkomen. Interesses en gewoontes via Google's Affinity en In-Market segmenten, die gebaseerd zijn op gedrag over Google's hele netwerk. Custom Segments op zoekwoorden, websites of apps geven je de scherpste targeting op recente intentie.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De krachtigste setup combineert eigen data met intentie-signalen. Customer Match laadt je e-maillijst in voor remarketing of lookalike-targeting. Website-bezoekersdata via de Google-tag bouwt een retargeting-publiek op van mensen die al je site bezochten. Custom Segments op zoekwoorden vangt mensen die in de afgelopen 7 dagen jouw kernzoekwoorden gebruikten.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Wat we vaak zien fout gaan: te brede targeting in de eerste maand. Een dagbudget van 30 euro op een breed Affinity-publiek levert te weinig signaal op om iets bij te sturen. Begin liever smal met Custom Segments op je 5 belangrijkste zoekwoorden plus retargeting op websitebezoekers, en verbreed pas als de data dat rechtvaardigt.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe meet je succes van YouTube Ads?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De juiste metrics hangen af van je doel. Voor brandingcampagnes kijk je naar View-Through Rate (VTR), CPM en eventueel een Brand Lift-studie van Google die opgevraagd kan worden vanaf 5000 euro mediabudget. Voor performance-campagnes ligt de focus op conversies, ROAS en view-through-conversies binnen 30 dagen na een YouTube-impressie.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een goede VTR voor Skippable In-Stream zit tussen 20 en 35 procent in Nederland. Onder de 15 procent loont het om de eerste 5 seconden van de video aan te passen. Boven de 40 procent zit je vaak op een te smal doelpubliek dat je opnieuw moet verbreden voor schaal.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Conversie-attributie via YouTube blijft tricky. Veel klanten kijken een advertentie en converteren pas dagen later via Google search of direct typen van de URL. Het meten van die invloed gaat alleen goed als je conversietracking server-side staat ingericht en het Google-tag op alle relevante pagina's draait. Voor een dieper beeld lees je <Link to="/blogs/google-ads/meet-roi-google-ads-campagne" className="text-accent hover:underline">hoe je de ROI van een Google Ads-campagne correct meet</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Werkt YouTube adverteren ook voor MKB?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            YouTube heeft in Nederland circa 14 miljoen unieke gebruikers per maand. Voor de meeste MKB-doelgroepen is bereik daarmee geen probleem. De grotere drempel voor MKB ligt in productie van bruikbare videocontent, niet in mediabudget. Een vlogger-stijl shoot van 800 tot 2000 euro levert 4 tot 6 video's die een half jaar in rotatie kunnen.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Het type bedrijf dat snel resultaat ziet op YouTube is degene met een visueel uit te leggen product of dienst. Een interieurzaak die het verschil tussen massief eiken en HPL-fineer toont in 30 seconden video, een tandartspraktijk die laat zien hoe een implantaatconsult verloopt, een SaaS-bedrijf dat in 60 seconden een feature demonstreert. Tekst-uit-te-leggen producten werken minder goed.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een tweede MKB-toepassing waar YouTube sterk in is: lokaal bereik via Bumper Ads in een specifieke regio. Voor 300 tot 600 euro per maand kun je een hele stad bedekken met 6-seconden brand reminders. Voor lokale Google Ads-strategie kijk je in <Link to="/blogs/google-ads/google-ads-lokale-bedrijven" className="text-accent hover:underline">de gids voor Google Ads voor lokale bedrijven</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wanneer kies je voor Demand Gen?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Demand Gen is sinds 2024 Google's nieuwste videocampagnetype. In één campagne adverteer je gelijktijdig op YouTube In-Feed, YouTube Shorts, het Discover-tabblad en het Gmail-promotietabblad. Google's algoritme bepaalt per gebruiker waar je advertentie het beste presteert.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Voor adverteerders die zowel video als statische image-ads klaar hebben liggen is Demand Gen efficiënt. Je upload één set assets en de campagne mixt placements zelf. De keerzijde: minder transparantie over waar conversies precies vandaan komen, want de afzonderlijke placement-data zit verstopt in een geaggregeerd rapport.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Onze richtlijn voor klanten: gebruik Demand Gen voor brede top-of-funnel campagnes, gebruik klassieke Video-campagnes (Skippable In-Stream of Shorts) wanneer je strakke controle wilt over waar je adverteert. Een combinatie van beide naast elkaar in één account werkt vaak het beste.
                        </p>

                    </div>

                    {/* FAQ */}
                    <section className="mt-16 pt-12 border-t border-primary/10">
                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Veelgestelde vragen over YouTube adverteren</h2>
                        <div className="space-y-6 not-prose">
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoe begin je met YouTube adverteren via Google Ads?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">YouTube Ads zet je op binnen een Google Ads-account, niet binnen YouTube Studio. Maak een Video- of Demand Gen-campagne aan, koppel een YouTube-kanaal en upload eerst je video naar YouTube als unlisted of public. Daarna kies je doelgroep, budget en biedstrategie net als bij een gewone Google Ads-campagne.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Welke YouTube advertentietypes bestaan er?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">De vijf gangbare typen zijn Skippable In-Stream, Non-Skippable In-Stream, In-Feed Video Ads, Bumper Ads en YouTube Shorts Ads. Skippable In-Stream is de meest gebruikte voor performance, Bumper Ads van 6 seconden voor branding en Shorts Ads voor mobiele bereik. Demand Gen-campagnes combineren YouTube met Discover en Gmail in één plaatsing.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat kost YouTube adverteren in Nederland?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">De gemiddelde kosten per view (CPV) liggen in Nederland tussen 0,03 en 0,12 euro voor Skippable In-Stream. Bumper Ads worden afgerekend op CPM en kosten gemiddeld 4 tot 9 euro per 1000 vertoningen. Een testbudget van 500 tot 1500 euro per maand levert genoeg data om binnen 4 weken te zien wat werkt voor jouw doelgroep.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoe lang moet een YouTube-advertentie zijn?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Voor Skippable In-Stream werkt 30 tot 60 seconden het beste. Pak de aandacht in de eerste 5 seconden, voordat de skip-knop verschijnt. Bumper Ads zijn vast 6 seconden. Voor Shorts Ads houd je het onder 30 seconden, vaak 15 tot 20. Korter dan dat mist verhaallijn, langer dan 60 seconden verlaagt de view-through-rate aanzienlijk.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Welke targetingopties heb je op YouTube?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Je targeting werkt op vier hoofdlagen: demografisch (leeftijd, geslacht, ouder zijn), interesses en gewoontes (Affinity en In-Market), zoekgedrag (Custom Segments op zoekwoorden) en eigen data (Customer Match en website-bezoekers). De krachtigste setup combineert Custom Segments op recente zoekwoorden met retargeting op websitebezoekers.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoe meet je succes van YouTube Ads?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Voor branding kijk je naar View-Through Rate (VTR), CPM en Brand Lift studies. Voor performance kijk je naar conversies, ROAS en de view-through-conversies die binnen 30 dagen na een YouTube-impressie plaatsvonden. Een goede VTR voor Skippable In-Stream zit tussen 20 en 35 procent. Onder de 15 procent loont het om creative aan te passen.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Werkt YouTube adverteren ook voor MKB?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Ja. YouTube heeft in Nederland circa 14 miljoen unieke gebruikers per maand, dus ook voor lokale of niche doelgroepen is bereik geen probleem. De drempel voor MKB ligt vooral in productie van een goede video. Met een vaste vlogger-stijl shoot kun je voor 800 tot 2000 euro een set van 4 tot 6 video's opnemen die een half jaar mee gaan in een campagne.</p>
                            </div>
                        </div>
                    </section>

                    {/* Related */}
                    <section className="mt-16 pt-12 border-t border-primary/10">
                        <h3 className="text-xl font-bold text-primary mb-6">Lees ook</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <Link to="/blogs/google-ads/google-ads-voor-mkb-campagne-instellen" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Google Ads voor MKB</h3>
                                <p className="text-primary/60 text-sm">Stap-voor-stap een eerste Google Ads-campagne opzetten.</p>
                            </Link>
                            <Link to="/blogs/google-ads/performance-max-google-ads-weten" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Performance Max uitgelegd</h3>
                                <p className="text-primary/60 text-sm">Wanneer kies je voor PMax en wanneer voor losse campagnes.</p>
                            </Link>
                            <Link to="/blogs/google-ads/meet-roi-google-ads-campagne" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">ROI van Google Ads meten</h3>
                                <p className="text-primary/60 text-sm">Conversietracking en attributie zonder ruis in de cijfers.</p>
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
                        Kijkers omzetten in klanten?
                    </h2>
                    <p className="relative z-10 font-sans text-background/70 text-lg mb-10 max-w-xl mx-auto">
                        We zetten gratis een YouTube-strategie voor jouw bedrijf op papier: campagnetype, targeting en het budget dat past. Binnen een week weet je waar de winst zit.
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
