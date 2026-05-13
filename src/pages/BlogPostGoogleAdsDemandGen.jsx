import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ChevronRight, User } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function BlogPostGoogleAdsDemandGen() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen selection:bg-accent/30 selection:text-dark flex flex-col bg-background">
            <Helmet>
                <title>Google Ads Demand Gen: wat is het en wanneer gebruik je het? | Empowers</title>
                <meta name="description" content="Demand Gen-campagnes bedienen YouTube, Discover en Gmail in één campagne. Wat het is, hoe het verschilt van Performance Max en wanneer het past in jouw mediamix." />
                <link rel="canonical" href="https://www.empowers.nl/blogs/google-ads/google-ads-demand-gen" />
                <meta property="og:title" content="Google Ads Demand Gen: wat is het en wanneer gebruik je het?" />
                <meta property="og:description" content="Het complete beeld van Google's Demand Gen-format en wanneer het werkt." />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://www.empowers.nl/blogs/google-ads/google-ads-demand-gen" />
                <meta property="og:image" content="https://www.empowers.nl/images/blogs/google-ads-demand-gen.jpg" />
                <meta property="article:published_time" content="2026-05-14" />
                <meta property="article:author" content="Empowers" />
                <meta property="article:section" content="Google Ads" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Google Ads Demand Gen uitgelegd" />
                <meta name="twitter:description" content="Wat is Demand Gen en wanneer past het bij jouw campagnemix?" />

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Article",
                        "headline": "Google Ads Demand Gen: wat is het en wanneer gebruik je het?",
                        "description": "Demand Gen-campagnes bedienen YouTube, Discover en Gmail in één campagne. Wat het is, hoe het verschilt van Performance Max en wanneer het past in jouw mediamix.",
                        "image": "https://www.empowers.nl/images/blogs/google-ads-demand-gen.jpg",
                        "datePublished": "2026-05-14T11:00:00+02:00",
                        "author": { "@type": "Organization", "name": "Empowers" },
                        "publisher": {
                            "@type": "Organization", "name": "Empowers", "url": "https://www.empowers.nl",
                            "logo": { "@type": "ImageObject", "url": "https://www.empowers.nl/empowers-logo-color.svg" }
                        },
                        "mainEntity": {
                            "@type": "FAQPage",
                            "mainEntity": [
                                {
                                    "@type": "Question",
                                    "name": "Wat is Google Ads Demand Gen precies?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Demand Gen is een campagnetype van Google Ads dat advertenties toont op YouTube (inclusief Shorts en in-stream), Discover en Gmail. Het format is opgezet voor visueel sterke campagnes die op sociale media-achtige feeds vraag creëren bij mensen die nog niet actief zoeken. Het verving het oudere Discovery-campagnetype begin 2024."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Wat is het verschil tussen Demand Gen en Performance Max?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Performance Max bedient alle Google-inventory (Search, Display, YouTube, Maps, Gmail, Discover) in één campagne. Demand Gen bedient alleen de visuele kanalen YouTube, Discover en Gmail. Demand Gen geeft meer creatieve controle over de visuele kant en is geschikt voor merken die specifiek vraag willen creëren met video en beeld zonder dat een algoritme tegelijk Search-budget verdeelt."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Wanneer moet ik Demand Gen gebruiken?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Demand Gen werkt het beste wanneer je nieuwe doelgroepen wilt bereiken met sterk visueel materiaal, vooral als je goede video-assets hebt en je product visueel aansprekend is. Webshops, lifestyle-merken en bedrijven met productlanceringen halen er meestal de meeste waarde uit. Voor pure Search-intent of B2B-leadgen met weinig visuele assets is het minder geschikt."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Welke creatives heb ik nodig voor Demand Gen?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Idealiter een mix van vertical video (9:16) voor YouTube Shorts, horizontal video (16:9) voor in-stream YouTube en square (1:1) en horizontal (1.91:1) beeldformaten voor Discover en Gmail. Plus carrousels van meerdere afbeeldingen voor product-georiënteerde campagnes. Hoe meer kwaliteits-assets je aanlevert, hoe beter het algoritme kan optimaliseren."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Welke biedstrategieën zijn beschikbaar bij Demand Gen?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Demand Gen ondersteunt Maximize Conversions, Maximize Conversion Value, Target CPA en Target ROAS, plus Maximize Clicks voor traffic-doelen. De keuze hangt af van je doel: voor leadgen werkt Target CPA goed zodra je 30 tot 50 conversies per maand haalt, voor webshops levert Target ROAS de beste sturing op marges."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Wat is een goed startbudget voor Demand Gen?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Reken op minimaal 30 tot 50 euro per dag per campagne om de leerfase door te komen, in B2C webshop-cases vaak hoger. Een Demand Gen-campagne heeft volume nodig om te leren wat werkt. Met een te laag budget verzandt de campagne in de leerfase zonder bruikbare data op te leveren. Begin met één campagne, twee tot drie ad groups en focus op consistent leveren in plaats van breed uitproberen."
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
                            { "@type": "ListItem", "position": 3, "name": "Google Ads", "item": "https://www.empowers.nl/blogs/google-ads" },
                            { "@type": "ListItem", "position": 4, "name": "Demand Gen uitgelegd", "item": "https://www.empowers.nl/blogs/google-ads/google-ads-demand-gen" }
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
                        <Link to="/blogs/google-ads" className="hover:text-accent transition-colors">Google Ads</Link>
                        <ChevronRight className="w-3 h-3" />
                        <span className="text-primary truncate">Demand Gen</span>
                    </nav>

                    <header className="mb-16">
                        <div className="inline-block px-3 py-1 bg-accent/10 text-accent font-mono text-xs uppercase tracking-widest rounded-full mb-6">
                            Google Ads
                        </div>
                        <h1 className="font-sans font-bold text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight mb-8">
                            Google Ads Demand Gen: wat is het en wanneer gebruik je het?
                        </h1>

                        <div className="flex flex-wrap items-center gap-6 text-sm font-sans text-primary/60 border-y border-primary/10 py-6">
                            <div className="flex items-center gap-2"><User className="w-4 h-4" /><span>Empowers Redactie</span></div>
                            <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>14 mei 2026</span></div>
                            <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>8 minuten leestijd</span></div>
                        </div>
                    </header>

                    <figure className="w-full h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden mb-16 relative bg-primary">
                        <div className="absolute inset-0 bg-[url('/images/blogs/google-ads-demand-gen.jpg')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </figure>

                    <div className="prose prose-lg max-w-none prose-headings:text-primary prose-headings:font-bold prose-a:text-accent prose-a:underline hover:prose-a:text-accent/80">
                        <p className="text-xl leading-relaxed text-primary/80 font-medium mb-6">
                            Google heeft begin 2024 het oude Discovery-campagnetype vervangen door Demand Gen. Voor adverteerders is dat geen kleine update. Demand Gen krijgt extra inventory, extra creatieve formats en een algoritme dat duidelijk leert van patronen op visuele feeds. Voor MKB-bedrijven met goede video- en beeldcontent kan het een serieus kanaal worden, naast Search en Performance Max. De vraag is alleen: wanneer wel en wanneer niet?
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat Demand Gen is en doet</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Demand Gen is een campagnetype in Google Ads dat advertenties toont op drie visuele kanalen tegelijk: YouTube (in-stream plus Shorts en in feeds), Discover (de aanbeveling-feed in de Google-app op mobiel) en Gmail (promotie-tabblad). Eén campagne, drie kanalen, gestuurd door één algoritme dat optimaliseert op je conversiedoel.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Het doel van het format zit in de naam: vraag creëren. Bij Search bereik je mensen die al actief zoeken. Demand Gen richt zich op mensen die nog niet zoeken, maar wel in de juiste mindset zitten en visueel ontvankelijk zijn voor je merk. Daar zit een sterk verschil in gebruik. Demand Gen werkt zelden als pure conversie-machine voor brand-zoekvolume. Het bouwt traffic en interesse waar Search later van profiteert.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Het verschil met Performance Max</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Veel adverteerders verwarren Demand Gen met Performance Max omdat beide gemixte kanalen aanspreken. Het verschil is wezenlijk. Performance Max bedient alle Google-inventory, inclusief Search-resultaten en Display Network, plus Maps en Shopping. Demand Gen bedient alleen YouTube, Discover en Gmail. Voor merken die specifiek visueel willen sturen en geen Search-budget willen opslokken in een black-box, is dat een groot pluspunt.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een tweede verschil: creatieve controle. In Performance Max levert het algoritme zelf de assets-combinaties, soms op manieren waar adverteerders weinig zicht op hebben. In Demand Gen heb je iets meer grip per ad group en per format. Wie zwaar inzet op video en beeldidentiteit zit beter bij Demand Gen. Wie maximale automation en breedste bereik wil, kiest Performance Max.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wanneer Demand Gen werkt</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Drie situaties waarin het format vaak rendement levert. Eerst: webshops met visueel aansprekende producten en een conversie-bewezen funnel. Lifestyle, fashion, design, hobby-producten, alles waar één goed beeld iemand kan verleiden. Een Demand Gen-campagne kan daar nieuwe doelgroepen aanboren die via Search nog niet binnen waren.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Ten tweede: bedrijven met een productlancering of seizoensaanbod. Demand Gen is sterk in attentiewekken voor iets nieuws, omdat het visueel werkt en feeds binnenkomt op het moment dat mensen scrollen. Het bouwt awareness die je Search-campagnes daarna oogsten via branded zoekvolume.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Ten derde: B2C-leadgen waarbij de eerste touch via een video-getuigenis of een aansprekende landingspagina kan landen. Webinars, gratis trials, gidsen, alles waar je naam onder een product al iets oplevert. Wat niet werkt: pure intent-zoekopdrachten zoals "spoedloodgieter Amsterdam". Daarvoor blijft Search het juiste kanaal.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">De creatives die een verschil maken</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Creatief is bij Demand Gen geen sluitpost, het is de campagne. Het algoritme kan alleen optimaliseren tussen de assets die jij aanlevert. Lever je drie middelmatige video's, dan optimaliseert het tussen drie middelmatige opties. Lever je twaalf goede assets in meerdere formaten, dan vindt het algoritme combinaties die je zelf niet had verzonnen.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Praktisch betekent dat: zorg voor video in vertical (9:16) voor YouTube Shorts en in horizontal (16:9) voor in-stream YouTube. Voeg square (1:1) en horizontale (1.91:1) statische beelden toe voor Discover en Gmail. Bij productcampagnes werken carrousels met meerdere productafbeeldingen erg goed. Een mix van merk-georiënteerde en product-georiënteerde creatives helpt het algoritme verschillende doelgroepen bedienen. Hoe je betere advertentieteksten en creatives schrijft met AI lees je in onze blog over <Link to="/blogs/google-ads/schrijf-betere-google-ads-ai" className="text-accent hover:underline">Google Ads-teksten verbeteren</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Bidding en doelgroepen</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Demand Gen ondersteunt Maximize Conversions, Maximize Conversion Value, Target CPA en Target ROAS, plus Maximize Clicks voor pure traffic-doelen. Welke je kiest hangt af van wat je meet en hoeveel data je hebt. Begin met Maximize Conversions zonder Target CPA totdat je genoeg conversies per week hebt om een Target te zetten, ergens vanaf 30 tot 50 conversies per maand. Voor webshops met goede ROAS-historie werkt Target ROAS sterk omdat het marges respecteert.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Op doelgroep-niveau heb je meerdere opties. Custom segments op basis van zoekgedrag, websites bezoekt of apps gebruikt. Lookalike-segmenten gebaseerd op je bestaande klanten. Plus de eigen first-party data via customer match. Combineer ze in afzonderlijke ad groups om te zien welke groep het beste rendeert, in plaats van alles in één pot te gooien.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe je een Demand Gen-campagne opzet</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Begin klein, niet groot. Eén campagne, twee tot drie ad groups die elk een doelgroep-hypothese testen, een mix van video- en beeldassets per ad group. Start budget tussen de 30 en 50 euro per dag voor B2B-leadgen, vaak hoger voor B2C webshops afhankelijk van je productprijs.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Gun de campagne de leerfase. Demand Gen heeft volume nodig om patronen te leren. Verander de eerste twee weken niets aan budget, bidding of creatives. Te vroeg ingrijpen reset de leerfase en kost je geld. Pas na minimaal twee weken evalueer je: welke doelgroep werkt, welke creatives presteren, waar zit de verspilling. Vandaaruit schaal je gericht op.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Veelgemaakte fouten</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Te weinig assets aanleveren. Een campagne met drie banners gaat het niet doen. Het algoritme vindt zijn flow pas bij een gevarieerd asset-pakket dat verschillende formaten en boodschappen dekt. Tweede fout: in dezelfde campagne mixen wat hoort niet bij elkaar. Een prospecting-doelgroep met een retargeting-doelgroep in één ad group geeft je geen leerbare data. Splits ze.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Te snel oordelen is de derde klassieker. Demand Gen heeft een langere terugverdientijd dan Search. Mensen die je advertentie zien klikken vaak niet direct, maar zoeken later wel op je merk. Wie alleen kijkt naar last-click attributie in zijn Demand Gen-rapportage onderschat de impact stelselmatig. Hoe je dat correct meet beschrijven we in onze blog over <Link to="/blogs/tracking/attribution-modellen-uitgelegd-last-click" className="text-accent hover:underline">attributiemodellen</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Past Demand Gen in jouw mediamix?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een eenvoudige test. Drie vragen: heb je goede video-content of de middelen om die te maken? Werk je in een markt waar mensen niet altijd actief zoeken maar wel ontvankelijk zijn voor je categorie? Heb je budget om een campagne minimaal twee tot drie maanden te laten draaien? Drie keer ja, dan is Demand Gen waarschijnlijk waardevol. Een nee bij creative-capaciteit of budget betekent dat je beter eerst Search en eventueel Performance Max verstevigt voordat je hier instapt.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Voor merken die wel passen, is Demand Gen een sterk kanaal voor 2026. Het kost meer voorbereiding dan Search, maar opent doelgroepen die je via zoekgedrag nooit zou raken. In de juiste mediamix is het de bovenkant van de funnel die je Search-onderkant langzaam vult.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Veelgestelde vragen</h2>
                    </div>

                    <section className="mt-4">
                        <div className="space-y-6 not-prose">
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat is Google Ads Demand Gen precies?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Demand Gen is een campagnetype van Google Ads dat advertenties toont op YouTube (inclusief Shorts en in-stream), Discover en Gmail. Het format is opgezet voor visueel sterke campagnes die op sociale media-achtige feeds vraag creëren bij mensen die nog niet actief zoeken. Het verving het oudere Discovery-campagnetype begin 2024.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat is het verschil tussen Demand Gen en Performance Max?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Performance Max bedient alle Google-inventory (Search, Display, YouTube, Maps, Gmail, Discover) in één campagne. Demand Gen bedient alleen de visuele kanalen YouTube, Discover en Gmail. Demand Gen geeft meer creatieve controle over de visuele kant en is geschikt voor merken die specifiek vraag willen creëren met video en beeld zonder dat een algoritme tegelijk Search-budget verdeelt.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wanneer moet ik Demand Gen gebruiken?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Demand Gen werkt het beste wanneer je nieuwe doelgroepen wilt bereiken met sterk visueel materiaal, vooral als je goede video-assets hebt en je product visueel aansprekend is. Webshops, lifestyle-merken en bedrijven met productlanceringen halen er meestal de meeste waarde uit. Voor pure Search-intent of B2B-leadgen met weinig visuele assets is het minder geschikt.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Welke creatives heb ik nodig voor Demand Gen?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Idealiter een mix van vertical video (9:16) voor YouTube Shorts, horizontal video (16:9) voor in-stream YouTube en square (1:1) en horizontal (1.91:1) beeldformaten voor Discover en Gmail. Plus carrousels van meerdere afbeeldingen voor product-georiënteerde campagnes. Hoe meer kwaliteits-assets je aanlevert, hoe beter het algoritme kan optimaliseren.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Welke biedstrategieën zijn beschikbaar bij Demand Gen?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Demand Gen ondersteunt Maximize Conversions, Maximize Conversion Value, Target CPA en Target ROAS, plus Maximize Clicks voor traffic-doelen. De keuze hangt af van je doel: voor leadgen werkt Target CPA goed zodra je 30 tot 50 conversies per maand haalt, voor webshops levert Target ROAS de beste sturing op marges.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat is een goed startbudget voor Demand Gen?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Reken op minimaal 30 tot 50 euro per dag per campagne om de leerfase door te komen, in B2C webshop-cases vaak hoger. Een Demand Gen-campagne heeft volume nodig om te leren wat werkt. Met een te laag budget verzandt de campagne in de leerfase zonder bruikbare data op te leveren. Begin met één campagne, twee tot drie ad groups en focus op consistent leveren in plaats van breed uitproberen.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="mt-16 pt-12 border-t border-primary/10">
                        <h3 className="text-xl font-bold text-primary mb-6">Lees ook</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <Link to="/blogs/google-ads/schrijf-betere-google-ads-ai" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Betere Google Ads-teksten</h3>
                                <p className="text-primary/60 text-sm">Hoe je AI inzet voor copy die converteert.</p>
                            </Link>
                            <Link to="/blogs/tracking/attribution-modellen-uitgelegd-last-click" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Attributiemodellen uitgelegd</h3>
                                <p className="text-primary/60 text-sm">Waarom last-click je Demand Gen-impact onderschat.</p>
                            </Link>
                            <Link to="/blogs/google-ads" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Google Ads blogs</h3>
                                <p className="text-primary/60 text-sm">Alle artikelen over Search en PMax tot Demand Gen.</p>
                            </Link>
                        </div>
                    </section>
                </div>
            </article>

            <section className="w-full pb-32 px-6">
                <div className="max-w-4xl mx-auto bg-primary rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
                    <h2 className="relative z-10 font-drama italic text-background text-3xl sm:text-4xl md:text-5xl mb-6">Klaar om Demand Gen serieus te testen?</h2>
                    <p className="relative z-10 font-sans text-background/70 text-lg mb-10 max-w-xl mx-auto">We bouwen een campagne die past bij jouw mediamix en zorgen dat de juiste creatives op het juiste moment landen.</p>
                    <Link to="/contact" className="relative z-10 btn-magnetic inline-flex items-center justify-center bg-accent text-background font-sans font-bold text-lg px-10 py-4 rounded-[2rem] hover:bg-accent/90 transition-colors">Neem contact op</Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
