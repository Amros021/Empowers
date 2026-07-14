import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ChevronRight, User } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function BlogPostBrandedVsNonBrandedCampagnes() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen selection:bg-accent/30 selection:text-dark flex flex-col bg-background">
            <Helmet>
                <title>Branded vs non-branded campagnes in Google Ads: de juiste mix | Empowers</title>
                <meta name="description" content="Branded en non-branded campagnes in Google Ads horen samen, maar werken verschillend. Lees hoe je de juiste mix bepaalt en jouw budget rendabel inzet." />
                <link rel="canonical" href="https://www.empowers.nl/blogs/google-ads/branded-vs-non-branded-campagnes" />
                <meta property="og:title" content="Branded vs non-branded campagnes in Google Ads: de juiste mix" />
                <meta property="og:description" content="Wanneer kies je voor branded, wanneer voor non-branded en hoe verdeel je het budget? Concrete tips uit de praktijk." />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://www.empowers.nl/blogs/google-ads/branded-vs-non-branded-campagnes" />
                <meta property="og:image" content="https://www.empowers.nl/images/blogs/branded-vs-non-branded-campagnes.jpg" />
                <meta property="article:published_time" content="2026-04-26T09:00:00+02:00" />
                <meta property="article:author" content="Empowers" />
                <meta property="article:section" content="Google Ads" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Branded vs non-branded campagnes in Google Ads: de juiste mix" />
                <meta name="twitter:description" content="Zo verdeel je jouw Google Ads budget over branded en non-branded zoekwoorden." />

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Article",
                        "headline": "Branded vs non-branded campagnes in Google Ads: de juiste mix",
                        "description": "Branded en non-branded campagnes in Google Ads horen samen, maar werken verschillend. Lees hoe je de juiste mix bepaalt en jouw budget rendabel inzet.",
                        "image": "https://www.empowers.nl/images/blogs/branded-vs-non-branded-campagnes.jpg",
                        "datePublished": "2026-04-26T09:00:00+02:00",
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
                                    "name": "Wat is het verschil tussen branded en non-branded Google Ads?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Branded campagnes targeten zoekwoorden met jouw merknaam erin, zoals 'Coolblue koffiezetapparaat'. Non-branded campagnes targeten generieke zoektermen zonder merknaam, zoals 'beste koffiezetapparaat 2026'. Branded haalt mensen binnen die jou al kennen, non-branded vindt mensen die jouw bedrijf nog niet kennen maar wel naar jouw aanbod zoeken."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Moet ik altijd op mijn eigen merknaam adverteren?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Ja, in vrijwel alle gevallen wel. Adverteer je niet op jouw eigen merknaam, dan kan een concurrent dat doen en jouw verkeer afsnoepen. De CPC is laag (vaak 10 tot 30 cent) en de Quality Score hoog. Voor het kleine bedrag dat je betaalt, bescherm je een groot deel van jouw warme verkeer."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Hoe verdeel je het budget tussen branded en non-branded?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Een gangbare verdeling voor MKB is 10 tot 20 procent branded en 80 tot 90 procent non-branded. Branded campagnes hebben weinig budget nodig om alle kliks op te vangen. Non-branded heeft meer ruimte nodig omdat je daar de echte groei haalt: nieuwe klanten die jou nog niet kennen."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Wat is een goede ROAS voor branded campagnes?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Branded campagnes halen vaak een ROAS van 8 tot 15, soms hoger. Dat klinkt mooi, maar deze bezoekers kwamen vaak ook zonder advertentie wel binnen via organisch verkeer. Voor non-branded is een ROAS van 3 tot 5 al goed, omdat je daar koud verkeer omzet in klanten."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Adverteren concurrenten op mijn merknaam?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Dat gebeurt vaker dan je denkt, vooral in B2B en e-commerce. Concurrenten bieden op jouw merknaam om jouw warme verkeer af te snoepen. Met een eigen branded campagne sta je altijd boven hun advertentie, omdat Google jouw eigen domein een hoge relevantiescore geeft. Zonder eigen branded ben je kwetsbaar."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Hoe meet ik of mijn non-branded campagne werkt?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Kijk niet alleen naar ROAS of CPA, maar ook naar het aantal nieuwe bezoekers en eerste-aankoop-conversies. Non-branded brengt klanten die jou nog niet kenden. Een non-branded campagne die 'maar' break-even draait, is alsnog winst als die klant terugkomt. Meet daarom ook customer lifetime value waar mogelijk."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Wanneer voeg ik een aparte branded campagne toe?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Zodra jouw bedrijfsnaam regelmatig gezocht wordt via Google. Bekijk in Google Search Console of Google Ads zelf hoeveel zoekvolume jouw merknaam genereert. Vanaf zo'n 50 tot 100 zoekopdrachten per maand is een aparte branded campagne de moeite waard. Daaronder volstaat een merkterm in jouw bestaande non-branded campagne."
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
                            { "@type": "ListItem", "position": 4, "name": "Branded vs non-branded campagnes", "item": "https://www.empowers.nl/blogs/google-ads/branded-vs-non-branded-campagnes" }
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
                        <span className="text-primary truncate">Branded vs non-branded campagnes</span>
                    </nav>

                    {/* Header */}
                    <header className="mb-16">
                        <div className="inline-block px-3 py-1 bg-accent/10 text-accent font-mono text-xs uppercase tracking-widest rounded-full mb-6">
                            Google Ads
                        </div>
                        <h1 className="font-sans font-bold text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight mb-8">
                            Branded vs non-branded campagnes in Google Ads: de juiste mix
                        </h1>
                        <div className="flex flex-wrap items-center gap-6 text-sm font-sans text-primary/60 border-y border-primary/10 py-6">
                            <div className="flex items-center gap-2"><User className="w-4 h-4" /><span>Empowers Redactie</span></div>
                            <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>26 april 2026</span></div>
                            <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>8 minuten leestijd</span></div>
                        </div>
                    </header>

                    {/* Featured Image */}
                    <figure className="w-full h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden mb-16 relative bg-primary">
                        <div className="absolute inset-0 bg-[url('/images/blogs/branded-vs-non-branded-campagnes.jpg')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </figure>

                    {/* Content */}
                    <div className="prose prose-lg max-w-none prose-headings:text-primary prose-headings:font-bold prose-a:text-accent prose-a:underline hover:prose-a:text-accent/80">
                        <p className="text-xl leading-relaxed text-primary/80 font-medium mb-6">
                            Branded en non-branded campagnes in Google Ads horen samen, maar werken totaal verschillend. Branded haalt warme zoekers binnen die jouw bedrijf al kennen. Non-branded vindt nieuwe klanten die zoeken naar wat jij aanbiedt. De juiste mix is meestal 10 tot 20 procent branded en 80 tot 90 procent non-branded. Hoe je die balans bepaalt en welke fouten je voorkomt, lees je hieronder.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat is het verschil tussen branded en non-branded?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Branded zoekwoorden bevatten jouw merknaam. Iemand die zoekt op 'Coolblue koffiezetapparaat' weet wie Coolblue is en heeft daar een associatie mee opgebouwd. Non-branded zoekwoorden zijn generiek: 'beste koffiezetapparaat 2026' of 'koffiezetapparaat onder 200 euro'. De zoeker heeft een behoefte, maar nog geen voorkeur voor een aanbieder.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Het verschil is groter dan een paar woorden. De zoekintentie is anders, de concurrentie is anders en het soort verkeer dat binnenkomt is anders. Bij onze klanten zien we dat de conversieratio op branded campagnes vaak 4 tot 8 keer hoger ligt dan op non-branded. Maar non-branded brengt het volume waarmee je structureel groeit. Allebei nodig, om verschillende redenen.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Waarom is een branded campagne belangrijk?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Branded campagnes lijken op het eerste gezicht overbodig. Iemand die jouw merknaam typt vindt jou toch wel via organisch resultaat? Klopt, maar er zijn drie redenen om er toch op te bieden. Concurrenten kunnen op jouw merknaam adverteren, jouw advertentie krijgt meer ruimte boven de vouw en je controleert zelf de boodschap die mensen als eerste zien.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            We krijgen deze vraag wekelijks van ondernemers die zien dat een concurrent boven hun eigen organische resultaat staat. Dat is een dure les. Voor 50 tot 200 euro per maand bescherm je vaak duizenden euro's aan warme aanvragen. De Quality Score op branded zoekwoorden is bijna altijd 10 op 10, dus de CPC blijft laag. Hoe je in het algemeen de Quality Score verhoogt lees je in onze gids over <Link to="/blogs/google-ads/google-ads-quality-score-verhogen" className="text-accent hover:underline">Quality Score verhogen in Google Ads</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wanneer loont een non-branded campagne?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Non-branded campagnes zijn waar groei vandaan komt. Je bereikt mensen die nog geen idee hebben dat jij bestaat, maar wel actief zoeken naar jouw aanbod. Het is duurder per klik en je conversieratio is lager, maar je voegt nieuwe klanten toe aan jouw klantenbestand. Zonder non-branded blijf je groeien op klanten die jou al kenden, en dat raakt vroeg of laat opgedroogd.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een non-branded campagne loont als je een duidelijk product- of dienstaanbod hebt dat mensen daadwerkelijk zoeken. Test dit met een korte zoekwoordcheck in Google Trends of de zoekwoordplanner. Verkoop je iets specifieks (bijvoorbeeld 'industriele kookboilers'), dan is non-branded zoekverkeer schaars maar zeer kwalitatief. Voor brede consumentenproducten ('hardloopschoenen') is het volume groot, maar moet je goed differentiëren om op te vallen tussen tientallen aanbieders.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe verdeel je het budget over beide?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een vuistregel die in de praktijk goed werkt: 10 tot 20 procent van je budget naar branded, 80 tot 90 procent naar non-branded. Branded heeft weinig budget nodig omdat het zoekvolume beperkt is en de CPC laag. Non-branded heeft juist veel ruimte nodig omdat je daar concurreert met andere bedrijven die ook willen groeien. Voor een budget van 3.000 euro per maand betekent dat circa 300 tot 600 euro branded en 2.400 tot 2.700 euro non-branded.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Pas op met de neiging om al jouw budget naar branded te schuiven omdat de ROAS daar zo lekker hoog is. Die hoge ROAS is bedrieglijk: een groot deel van die kliks zou jij ook zonder advertentie hebben gehad via organisch verkeer. Branded helpt jouw cijfers er beter uitzien, maar zonder non-branded groeit jouw klantenbase niet. Wil je weten welke ROAS je sowieso mag verwachten op verschillende campagnes? Lees onze blog over <Link to="/blogs/social-ads/goede-roas-meta-ads-benchmarks" className="text-accent hover:underline">een goede ROAS benchmarks per campagne</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe scheid je branded en non-branded in je structuur?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Maak altijd aparte campagnes. Niet alleen een aparte advertentiegroep, maar twee losse campagnes met elk een eigen budget en biedstrategie. Zo voorkom je dat het algoritme jouw budget naar de meest lucratieve klikken stuurt (vrijwel altijd branded) en non-branded onderaan de prioriteitenlijst belandt. Geef branded 'Doelmatige CPA' of 'Doel-ROAS', en non-branded ook, maar met afzonderlijke targets.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Voeg in jouw non-branded campagne jouw eigen merknaam als negatief zoekwoord toe. Anders matcht een zoekopdracht als 'koffiezetapparaat coolblue' op de non-branded variant en betaal je een hogere CPC voor verkeer dat eigenlijk in branded thuishoort. Bij onze klanten levert deze ene aanpassing soms tientallen procenten besparing op. Hoe je een complete campagnestructuur opzet staat in onze <Link to="/blogs/google-ads/google-ads-campagne-structuur" className="text-accent hover:underline">gids over Google Ads campagnestructuur</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat doe je als concurrenten op jouw merknaam bieden?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een veelgemaakte fout die we tegenkomen is paniekeren als een concurrent op jouw merknaam adverteert. Dat is niet illegaal, het mag van Google, en je kunt het niet stoppen. Wat je wel kunt: zelf een sterke branded campagne draaien zodat jij altijd boven die concurrent staat. Google geeft jouw eigen domein een hoge relevantiescore voor jouw merknaam, dus voor weinig geld behoud je de eerste positie.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Wat je niet moet doen: zelf op merknamen van concurrenten gaan adverteren. Het lijkt slim, maar de Quality Score is laag, de CPC hoog en de conversieratio bedroevend. Mensen die zoeken op een specifieke concurrent willen die concurrent, niet jou. Het opent ook de deur naar een prijsoorlog waarbij iedereen op elkaars naam biedt en de kosten voor iedereen omhoog gaan. Liever investeer je dat budget in non-branded waar je echte nieuwe klanten haalt.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe meet je het succes van beide campagnes?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Beoordeel branded en non-branded met andere KPI's. Branded meet je op behoud: hoeveel van jouw merkverkeer pak je af van organisch en concurrenten? Een goede branded campagne heeft een impression share boven de 90 procent en een conversieratio van 8 tot 20 procent. Non-branded meet je op groei: hoeveel nieuwe bezoekers en first-time buyers leveren de campagnes op? Een goede non-branded heeft een conversieratio van 1 tot 3 procent en een ROAS van 3 tot 5.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Maak in Google Analytics of GA4 een aparte audience voor branded versus non-branded verkeer. Zo zie je over tijd of jouw non-branded daadwerkelijk nieuwe klanten brengt en niet alleen mensen die ook via branded waren binnengekomen. Een webshop die we begeleidden ontdekte zo dat 35 procent van hun non-branded klanten binnen 90 dagen terugkocht via direct verkeer. Dat veranderde hoe ze hun ROAS-target voor non-branded zetten.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wanneer is het tijd om hulp in te schakelen?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Als je twee campagnes naast elkaar runt zonder duidelijke verdeling, als jouw branded ROAS torenhoog lijkt maar de groei stagneert, of als jouw non-branded geen rendement laat zien, dan is het tijd om iemand met ervaring te laten meekijken. Een specialist herkent vaak in een uur waar het lek zit en welke verschuiving direct effect heeft. Vaak betekent dat budget anders verdelen, niet meer geld erbij.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Wat je zelf altijd kunt doen: jouw campagnes scheiden, jouw merknaam toevoegen als negatief in non-branded en wekelijks checken hoe beide presteren. Wil je dat we mét je meekijken naar hoe jouw mix nu staat en waar de winst zit? Plan een gesprek via onze <Link to="/contact" className="text-accent hover:underline">contactpagina</Link>.
                        </p>
                    </div>

                    {/* FAQ Section */}
                    <section className="mt-16 pt-12 border-t border-primary/10">
                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Veelgestelde vragen</h2>
                        <div className="space-y-6 not-prose">
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat is het verschil tussen branded en non-branded Google Ads?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Branded campagnes targeten zoekwoorden met jouw merknaam erin, zoals 'Coolblue koffiezetapparaat'. Non-branded campagnes targeten generieke zoektermen zonder merknaam, zoals 'beste koffiezetapparaat 2026'. Branded haalt mensen binnen die jou al kennen, non-branded vindt mensen die jouw bedrijf nog niet kennen maar wel naar jouw aanbod zoeken.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Moet ik altijd op mijn eigen merknaam adverteren?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Ja, in vrijwel alle gevallen wel. Adverteer je niet op jouw eigen merknaam, dan kan een concurrent dat doen en jouw verkeer afsnoepen. De CPC is laag (vaak 10 tot 30 cent) en de Quality Score hoog. Voor het kleine bedrag dat je betaalt, bescherm je een groot deel van jouw warme verkeer.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoe verdeel je het budget tussen branded en non-branded?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Een gangbare verdeling voor MKB is 10 tot 20 procent branded en 80 tot 90 procent non-branded. Branded campagnes hebben weinig budget nodig om alle kliks op te vangen. Non-branded heeft meer ruimte nodig omdat je daar de echte groei haalt: nieuwe klanten die jou nog niet kennen.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat is een goede ROAS voor branded campagnes?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Branded campagnes halen vaak een ROAS van 8 tot 15, soms hoger. Dat klinkt mooi, maar deze bezoekers kwamen vaak ook zonder advertentie wel binnen via organisch verkeer. Voor non-branded is een ROAS van 3 tot 5 al goed, omdat je daar koud verkeer omzet in klanten.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Adverteren concurrenten op mijn merknaam?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Dat gebeurt vaker dan je denkt, vooral in B2B en e-commerce. Concurrenten bieden op jouw merknaam om jouw warme verkeer af te snoepen. Met een eigen branded campagne sta je altijd boven hun advertentie, omdat Google jouw eigen domein een hoge relevantiescore geeft. Zonder eigen branded ben je kwetsbaar.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoe meet ik of mijn non-branded campagne werkt?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Kijk niet alleen naar ROAS of CPA, maar ook naar het aantal nieuwe bezoekers en eerste-aankoop-conversies. Non-branded brengt klanten die jou nog niet kenden. Een non-branded campagne die 'maar' break-even draait, is alsnog winst als die klant terugkomt. Meet daarom ook customer lifetime value waar mogelijk.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wanneer voeg ik een aparte branded campagne toe?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Zodra jouw bedrijfsnaam regelmatig gezocht wordt via Google. Bekijk in Google Search Console of Google Ads zelf hoeveel zoekvolume jouw merknaam genereert. Vanaf zo'n 50 tot 100 zoekopdrachten per maand is een aparte branded campagne de moeite waard. Daaronder volstaat een merkterm in jouw bestaande non-branded campagne.</p>
                            </div>
                        </div>
                    </section>

                    {/* Related */}
                    <section className="mt-16 pt-12 border-t border-primary/10">
                        <h3 className="text-xl font-bold text-primary mb-6">Lees ook</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <Link to="/blogs/google-ads/google-ads-campagne-structuur" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Google Ads campagnestructuur</h3>
                                <p className="text-primary/60 text-sm">Zo deel je jouw account zo in dat het algoritme echt voor je werkt.</p>
                            </Link>
                            <Link to="/blogs/google-ads/google-ads-quality-score-verhogen" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Quality Score verhogen</h3>
                                <p className="text-primary/60 text-sm">7 concrete tips om de relevantie van jouw campagnes naar 10/10 te krijgen.</p>
                            </Link>
                            <Link to="/blogs/google-ads/google-ads-display-vs-search" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Display vs Search Ads</h3>
                                <p className="text-primary/60 text-sm">Welke campagne past bij welk doel en hoe combineer je beide slim.</p>
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
                        Haal jij de juiste mix?
                    </h2>
                    <p className="relative z-10 font-sans text-background/70 text-lg mb-10 max-w-xl mx-auto">
                        We checken jouw branded en non-branded campagnes en laten zien waar jouw budget rendabeler kan. Binnen een week weet je waar de winst zit.
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
