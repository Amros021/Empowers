import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ChevronRight, User } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function BlogPostTiktokAdsWebshopsBoostSales() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen selection:bg-accent/30 selection:text-dark flex flex-col bg-background">
            <Helmet>
                <title>TikTok Ads voor webshops: zo boost je je sales | Empowers</title>
                <meta name="description" content="TikTok Ads voor webshops vraagt een eigen aanpak. Lees hoe je creatives bouwt die converteren, hoe je tracking opzet en welke fouten je voorkomt." />
                <link rel="canonical" href="https://www.empowers.nl/blogs/social-ads/tiktok-ads-webshops-boost-sales" />
                <meta property="og:title" content="TikTok Ads voor webshops: zo boost je je sales" />
                <meta property="og:description" content="Praktische gids voor webshops die hun TikTok-advertenties willen laten renderen." />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://www.empowers.nl/blogs/social-ads/tiktok-ads-webshops-boost-sales" />
                <meta property="og:image" content="https://www.empowers.nl/images/blogs/tiktok-ads-webshops-boost-sales.jpg" />
                <meta property="article:published_time" content="2026-05-07T19:00:00+02:00" />
                <meta property="article:author" content="Empowers" />
                <meta property="article:section" content="Social Ads" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="TikTok Ads voor webshops: zo boost je je sales" />
                <meta name="twitter:description" content="Hoe webshops TikTok-advertenties opzetten die werkelijk omzet draaien." />

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Article",
                        "headline": "TikTok Ads voor webshops: zo boost je je sales",
                        "description": "Praktische gids voor webshops om TikTok-advertenties op te zetten die converteren. Van creative tot tracking en optimalisatie.",
                        "image": "https://www.empowers.nl/images/blogs/tiktok-ads-webshops-boost-sales.jpg",
                        "datePublished": "2026-05-07T19:00:00+02:00",
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
                                    "name": "Werken TikTok Ads voor elke webshop?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Niet voor elke webshop. TikTok werkt het beste voor producten met visuele aantrekkingskracht of een verhaal dat in 15 seconden te vertellen is. Mode, beauty, food, accessoires en lifestyle scoren bovengemiddeld. Webshops met technische producten, B2B-aanbod of premium niches halen vaak meer rendement uit Meta of Google Shopping."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Wat kost adverteren op TikTok voor een webshop?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Een minimaal werkbaar maandbudget begint rond 1.500 euro. Onder dat niveau krijgt het algoritme te weinig data om effectief te leren en blijft de leerfase hangen. CPM's voor brede doelgroepen liggen tussen 5 en 12 euro, CPC's tussen 0,30 en 1 euro. Realistische ROAS voor goedlopende campagnes ligt rond 2 tot 5, afhankelijk van branche en marge."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Welke creative werkt het beste op TikTok voor webshops?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "User-generated content (UGC) en native ogende videos werken structureel beter dan gepolijste reclames. Het format dat doorgaans wint: een persoon die het product in eigen omgeving demonstreert, met een hook in de eerste drie seconden en een duidelijke prijs of aanbieding. Voice-over werkt meestal beter dan tekst-overlay alleen, omdat geluid een groot deel van de TikTok-ervaring is."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Heb je een TikTok Pixel nodig?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Ja, en bij voorkeur ook de TikTok Events API. De Pixel meet client-side gedrag op je site, de Events API doet hetzelfde server-side waardoor signaalverlies door iOS-tracking en cookie-blockers wegvalt. Zonder deze tracking weet TikTok niet wie er converteert en optimaliseert het algoritme blind. De installatie is technisch vergelijkbaar met de Meta Pixel."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Hoe bouw je een TikTok-campagne op voor webshops?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Begin met één campagne gericht op aankopen, met de productcatalogus gekoppeld. Splits in twee adsets: één voor cold prospecting met brede targeting (laat het algoritme werken), één voor retargeting van mensen die je site bezochten zonder kopen. Houd minimaal drie creatives per adset draaien zodat het algoritme kan testen. Geef de campagne minstens twee weken voordat je iets wijzigt."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Wat is Smart+ en moet ik dat gebruiken?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Smart+ is TikTok's geautomatiseerde campagnemodus, vergelijkbaar met Advantage+ Shopping van Meta. Het algoritme kiest zelf doelgroep, plaatsing en biedstrategie binnen jouw budget. Voor webshops met een gevulde productcatalogus en gezonde Pixel-data werkt Smart+ doorgaans beter dan handmatige campagnes. Voor accounts zonder data of met een beperkt assortiment is een handmatige opzet nog steeds te verkiezen."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Welke fouten maken webshops het vaakst op TikTok?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "De meest gemaakte fouten: te gepolijste creatives die niet in de feed thuishoren, een productcatalogus die niet up-to-date is, geen Events API geïnstalleerd waardoor tracking mank loopt, en te snel knoppen omzetten waardoor de leerfase niet doorkomt. Webshops die deze valkuilen ontwijken zien doorgaans binnen drie maanden een gezonde ROAS."
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
                            { "@type": "ListItem", "position": 4, "name": "TikTok Ads webshops", "item": "https://www.empowers.nl/blogs/social-ads/tiktok-ads-webshops-boost-sales" }
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
                        <span className="text-primary truncate">TikTok Ads webshops</span>
                    </nav>

                    <header className="mb-16">
                        <div className="inline-block px-3 py-1 bg-accent/10 text-accent font-mono text-xs uppercase tracking-widest rounded-full mb-6">
                            Social Ads
                        </div>
                        <h1 className="font-sans font-bold text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight mb-8">
                            TikTok Ads voor webshops: zo boost je je sales
                        </h1>
                        <div className="flex flex-wrap items-center gap-6 text-sm font-sans text-primary/60 border-y border-primary/10 py-6">
                            <div className="flex items-center gap-2"><User className="w-4 h-4" /><span>Empowers Redactie</span></div>
                            <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>7 mei 2026</span></div>
                            <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>9 minuten leestijd</span></div>
                        </div>
                    </header>

                    <figure className="w-full h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden mb-16 relative bg-primary">
                        <div className="absolute inset-0 bg-[url('/images/blogs/tiktok-ads-webshops-boost-sales.jpg')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </figure>

                    <div className="prose prose-lg max-w-none prose-headings:text-primary prose-headings:font-bold prose-a:text-accent prose-a:underline hover:prose-a:text-accent/80">
                        <p className="text-xl leading-relaxed text-primary/80 font-medium mb-6">
                            TikTok Ads klinkt als de heilige graal voor webshops met een jong publiek. In de praktijk loopt het bij veel shops na een paar weken vast. Te dure clicks, te weinig conversies, een ROAS waar je niet vrolijk van wordt. Deze blog laat zien hoe je TikTok Ads opzet voor een webshop die wel rendeert: van creative en tracking tot campagnestructuur en optimalisatie.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Werkt TikTok voor jouw webshop?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De eerste vraag is geen technische maar een commerciële. TikTok werkt voor webshops met visueel aantrekkelijke producten of een verhaal dat in een korte video te vertellen is. Categorieën die het bovengemiddeld doen lopen van mode tot beauty, van food tot lifestyle. Huisinrichting en accessoires presteren ook structureel goed. Voor producten die uitleg vragen, technische niches of B2B-aanbod blijft TikTok een twijfelgeval, hoewel de juiste creative-aanpak ook daar resultaat kan halen.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een goed signaal: bekijkt jouw doelgroep TikTok actief? In Nederland is het platform vooral sterk onder gebruikers tussen de 16 en 35 jaar, met groeiende aandelen daarboven. Verkoop je tuinmeubilair voor een 55-plus publiek, dan is TikTok zelden je eerste keus. Verkoop je sneakers, skincare of accessoires, dan kun je niet om TikTok heen. Hoe je tussen TikTok en andere platformen kiest beschreven we in onze blog over <Link to="/blogs/social-ads/tiktok-ads-vs-meta-ads" className="text-accent hover:underline">TikTok Ads versus Meta Ads</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Het minimale budget om serieus te starten</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een veel gemaakte fout is met een proefbudget van 500 euro per maand TikTok testen. Het algoritme krijgt dan onvoldoende data om patronen te herkennen, blijft hangen in de leerfase en levert teleurstellende cijfers. Reken voor een serieus startbudget op minimaal 1.500 euro per maand. Onder dat niveau test je niet TikTok zelf, maar de geluksfactor.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Wat kosten zelf betreft: CPM's voor brede doelgroepen liggen doorgaans tussen 5 en 12 euro, CPC's tussen 0,30 en 1 euro. ROAS voor een goedlopende webshop-campagne komt vaak rond 2 tot 5, afhankelijk van marge en prijspunt. Branche en seizoen drukken die uitkomst verder bij. Lager dan 2 is een teken dat er iets fundamenteel niet klopt; hoger dan 5 hoor je niet vaak buiten zeer specifieke niches.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Tracking opzetten: Pixel én Events API</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Voordat je een euro besteedt moet je tracking kloppen. De TikTok Pixel installeer je via Google Tag Manager of een directe code-implementatie op je webshop. De Events API koppel je server-side aan, idealiter via een directe integratie met Shopify, WooCommerce of Magento. Beide samen leveren de meest betrouwbare data, en zonder Events API verlies je signaalkwaliteit waar je iOS-bezoekers betreft.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Zorg dat je minimaal vier events meet: ViewContent (productpagina's bekeken), AddToCart (toegevoegd aan winkelmandje), InitiateCheckout (begonnen aan checkout) en Purchase (aankoop voltooid). Deze keten geeft TikTok genoeg signaal om te begrijpen wie er gaat kopen. Hoe je die installatie technisch aanpakt staat in onze blog over <Link to="/blogs/social-ads/tiktok-pixel-instellen-stap-stap" className="text-accent hover:underline">de TikTok Pixel instellen stap voor stap</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Creative: rauw, native, met hook</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De single grootste hefboom op TikTok is creative. Een gepolijste reclamevideo wordt direct herkend als advertentie en weggeswipet. Wat wel werkt: native ogende video, geschoten met een telefoon, met iemand die het product in eigen omgeving demonstreert. UGC-stijl content (gemaakt door creators die op gewone gebruikers lijken) heeft structureel hogere engagement en lagere CPA's dan studio-content.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De eerste drie seconden zijn alles. Geen logo-intro, geen rustige opbouw. Direct in de actie of een vraag die de kijker raakt. 'Wist je dat je hierdoor X minder Y krijgt?' werkt beter dan 'Bij ABC Webshop verkopen we...'. Audio is geen toegift maar een fundament. Het overgrote deel van TikTok-gebruikers kijkt met geluid aan, dus voice-over en muziek kies je bewust. Hoe je goede video-creatives bouwt voor verticaal video staat in onze blog over <Link to="/blogs/social-ads/winnende-meta-ads-video-2026" className="text-accent hover:underline">winnende video-advertenties</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Campagnestructuur: simpel houden</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een veelgemaakte fout is overstructurering. Vijftien adsets, twintig creatives, tien doelgroepen. Het algoritme krijgt dan geen ruimte om te leren omdat budget over te veel eenheden verspreid is. Begin simpel. Eén campagne gericht op aankopen. Twee adsets: een voor cold prospecting met brede targeting, een voor retargeting van mensen die je site al bezochten.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Per adset draai minstens drie creatives, zodat het algoritme kan testen welke variant het beste werkt. Voor cold prospecting laat je het algoritme volledig zelf de doelgroep bepalen, eventueel ondersteund door interest-targeting. Voor retargeting werk je met aangepaste doelgroepen op basis van Pixel-data. Geef de campagne twee weken om door de leerfase te komen voordat je iets wijzigt.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Smart+ campagnes: het algoritme aan zet</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Smart+ is TikTok's volledig geautomatiseerde campagnemodus, vergelijkbaar met Advantage+ Shopping van Meta. Je levert je productcatalogus plus creatives en het algoritme bepaalt zelf wie de advertenties ziet, waar ze landen en hoeveel je per actie biedt. Voor webshops met een gevulde catalogus en gezonde Pixel-data werkt Smart+ doorgaans beter dan handmatige campagnes. Voor nieuwe accounts of webshops met een beperkt assortiment is handmatig opzetten nog steeds te verkiezen, omdat het algoritme zonder data te weinig houvast heeft.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Bouw je productcatalogus correct op. Zorg dat alle producten een goede titel en beschrijving hebben, plus prijs, voorraadstatus, een hoge-resolutie afbeelding en een werkende URL. Een onvolledige feed leidt tot afgekeurde producten en advertenties die linken naar uitverkochte items. Check wekelijks de feed-status in TikTok Business Center.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Optimaliseren zonder de leerfase te slopen</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Het verleidelijkste op TikTok is na een week ingrijpen. Doe dat niet. Het algoritme heeft minimaal twee weken nodig om patronen te ontdekken bij een serieus budget. Wijzig in die periode niets aan campagne, biedstrategie of doelgroep. Wel mag je creatives toevoegen of pauzeren als de data duidelijk is.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Na de eerste twee weken kijk je naar drie zaken. Welke creatives werken het beste? Schaal die op door budget naar de winnende adset te verschuiven. Hoe ontwikkelt de ROAS zich week-op-week? Stabiel of stijgend is goed; dalend vraagt een nieuwe creative-batch. Welke productcategorieën bereiken de laagste CPA? Daar kun je een aparte campagne overwegen. Hoe je gestructureerd opschaalt zonder het algoritme te verstoren is hetzelfde principe als bij andere platformen, dat we hebben uitgewerkt in de blog over <Link to="/blogs/google-ads/google-ads-schalen-zonder-budget-verdubbelen" className="text-accent hover:underline">Google Ads-budget schalen</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">De fouten die we het vaakst zien</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Drie fouten domineren bij webshops die zelf op TikTok beginnen. De eerste: gepolijste reclamevideos die niet bij het platform passen. Investeer in UGC-stijl content of werk samen met creators die echt verstand hebben van TikTok. Een goede creator-shoot kost minder dan een matige reclamefilm en levert vele malen meer op.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De tweede: een halfzachte tracking-implementatie. De Pixel staat wel ingebouwd, de Events API niet, de events kloppen half. Resultaat: het algoritme krijgt vertekende signalen en optimaliseert op de verkeerde mensen. Een correcte tracking-installatie alleen al kan ROAS fors omhoog drukken zonder dat je iets aan creative of doelgroep verandert.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De derde: continu sleutelen. Dagelijks naar de cijfers kijken, elke week de bidstrategie omzetten, doelgroepen verschuiven. Stop daarmee. TikTok's algoritme heeft rust nodig om te leren. Een campagne die je twee maanden geduldig laat draaien levert vaker rendement dan dezelfde campagne met wekelijks aanpassen.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat brengt het voor jouw webshop?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Webshops met een passend product, fatsoenlijke creatives en strakke tracking zien doorgaans binnen drie maanden een werkende TikTok-machine. Niet morgen winst, wel een kanaal dat structureel bijdraagt aan omzet. Het wordt zelden je grootste kanaal als je ook al op Meta of Google draait, maar het kan een waardevolle aanvulling zijn die andere kanalen niet vangen.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De winst zit in de combinatie. Goede creatives, kloppende tracking, voldoende budget en geduld. Mist een van deze schakels, dan blijft het rendement achter wat technisch mogelijk is. Wil je dat we mét je meekijken naar je TikTok-account voordat je nog meer budget besteedt? Plan een gesprek via onze <Link to="/contact" className="text-accent hover:underline">contactpagina</Link>. We doorlopen je productcatalogus, je tracking en je creatives, en wijzen aan waar de winst zit.
                        </p>
                    </div>

                    <section className="mt-16 pt-12 border-t border-primary/10">
                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Veelgestelde vragen</h2>
                        <div className="space-y-6 not-prose">
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Werken TikTok Ads voor elke webshop?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Niet voor elke webshop. TikTok werkt het beste voor producten met visuele aantrekkingskracht of een verhaal dat in 15 seconden te vertellen is. Mode, beauty, food, accessoires en lifestyle scoren bovengemiddeld. Webshops met technische producten, B2B-aanbod of premium niches halen vaak meer rendement uit Meta of Google Shopping.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat kost adverteren op TikTok voor een webshop?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Een minimaal werkbaar maandbudget begint rond 1.500 euro. Onder dat niveau krijgt het algoritme te weinig data om effectief te leren en blijft de leerfase hangen. CPM's voor brede doelgroepen liggen tussen 5 en 12 euro, CPC's tussen 0,30 en 1 euro. Realistische ROAS voor goedlopende campagnes ligt rond 2 tot 5, afhankelijk van branche en marge.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Welke creative werkt het beste op TikTok voor webshops?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">User-generated content (UGC) en native ogende videos werken structureel beter dan gepolijste reclames. Het format dat doorgaans wint: een persoon die het product in eigen omgeving demonstreert, met een hook in de eerste drie seconden en een duidelijke prijs of aanbieding. Voice-over werkt meestal beter dan tekst-overlay alleen, omdat geluid een groot deel van de TikTok-ervaring is.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Heb je een TikTok Pixel nodig?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Ja, en bij voorkeur ook de TikTok Events API. De Pixel meet client-side gedrag op je site, de Events API doet hetzelfde server-side waardoor signaalverlies door iOS-tracking en cookie-blockers wegvalt. Zonder deze tracking weet TikTok niet wie er converteert en optimaliseert het algoritme blind. De installatie is technisch vergelijkbaar met de Meta Pixel.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoe bouw je een TikTok-campagne op voor webshops?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Begin met één campagne gericht op aankopen, met de productcatalogus gekoppeld. Splits in twee adsets: één voor cold prospecting met brede targeting (laat het algoritme werken), één voor retargeting van mensen die je site bezochten zonder kopen. Houd minimaal drie creatives per adset draaien zodat het algoritme kan testen. Geef de campagne minstens twee weken voordat je iets wijzigt.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat is Smart+ en moet ik dat gebruiken?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Smart+ is TikTok's geautomatiseerde campagnemodus, vergelijkbaar met Advantage+ Shopping van Meta. Het algoritme kiest zelf doelgroep, plaatsing en biedstrategie binnen jouw budget. Voor webshops met een gevulde productcatalogus en gezonde Pixel-data werkt Smart+ doorgaans beter dan handmatige campagnes. Voor accounts zonder data of met een beperkt assortiment is een handmatige opzet nog steeds te verkiezen.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Welke fouten maken webshops het vaakst op TikTok?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">De meest gemaakte fouten: te gepolijste creatives die niet in de feed thuishoren, een productcatalogus die niet up-to-date is, geen Events API geïnstalleerd waardoor tracking mank loopt, en te snel knoppen omzetten waardoor de leerfase niet doorkomt. Webshops die deze valkuilen ontwijken zien doorgaans binnen drie maanden een gezonde ROAS.</p>
                            </div>
                        </div>
                    </section>

                    <section className="mt-16 pt-12 border-t border-primary/10">
                        <h3 className="text-xl font-bold text-primary mb-6">Lees ook</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <Link to="/blogs/social-ads/tiktok-vs-instagram-reels-adverteren" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">TikTok vs Instagram Reels</h3>
                                <p className="text-primary/60 text-sm">Welk verticaal videoplatform past bij jouw webshop en jouw doelgroep.</p>
                            </Link>
                            <Link to="/blogs/social-ads/tiktok-pixel-instellen-stap-stap" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">TikTok Pixel instellen</h3>
                                <p className="text-primary/60 text-sm">Stap-voor-stap installatie van de Pixel en Events API voor betrouwbare tracking.</p>
                            </Link>
                            <Link to="/blogs/social-ads/tiktok-spark-ads-vs-reguliere" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">TikTok Spark Ads</h3>
                                <p className="text-primary/60 text-sm">Wanneer Spark Ads beter renderen dan reguliere TikTok-advertenties.</p>
                            </Link>
                        </div>
                    </section>

                </div>
            </article>

            <section className="w-full pb-32 px-6">
                <div className="max-w-4xl mx-auto bg-primary rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
                    <h2 className="relative z-10 font-drama italic text-background text-3xl sm:text-4xl md:text-5xl mb-6">
                        TikTok Ads die echt verkopen?
                    </h2>
                    <p className="relative z-10 font-sans text-background/70 text-lg mb-10 max-w-xl mx-auto">
                        We bouwen TikTok-campagnes die rendement opleveren. Van creative en tracking tot Smart+ en optimalisatie. Plan een vrijblijvend gesprek en je weet binnen een week of dit kanaal past bij jouw webshop.
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
