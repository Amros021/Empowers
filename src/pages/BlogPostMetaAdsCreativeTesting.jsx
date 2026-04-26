import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ChevronRight, User } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function BlogPostMetaAdsCreativeTesting() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen selection:bg-accent/30 selection:text-dark flex flex-col bg-background">
            <Helmet>
                <title>Meta Ads creative testing: zo weet je wat werkt | Empowers</title>
                <meta name="description" content="Meta Ads creative testing laat zien welke beelden en hooks écht verkopen. Lees hoe je een testopzet bouwt, hoeveel budget je nodig hebt en welke metrics tellen." />
                <link rel="canonical" href="https://www.empowers.nl/blogs/social-ads/meta-ads-creative-testing-weet" />
                <meta property="og:title" content="Meta Ads creative testing: zo weet je wat werkt" />
                <meta property="og:description" content="Bouw een creative testopzet die budget bespaart en winnaars sneller naar boven haalt. Concrete stappen, metrics en valkuilen." />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://www.empowers.nl/blogs/social-ads/meta-ads-creative-testing-weet" />
                <meta property="og:image" content="https://www.empowers.nl/images/blogs/meta-ads-creative-testing-weet.jpg" />
                <meta property="article:published_time" content="2026-04-23" />
                <meta property="article:author" content="Empowers" />
                <meta property="article:section" content="Social Ads" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Meta Ads creative testing: zo weet je wat werkt" />
                <meta name="twitter:description" content="Concrete testopzet voor Meta Ads creatives, met budget, metrics en winnaars-strategie." />

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Article",
                        "headline": "Meta Ads creative testing: zo weet je wat werkt",
                        "description": "Meta Ads creative testing laat zien welke beelden en hooks écht verkopen. Lees hoe je een testopzet bouwt, hoeveel budget je nodig hebt en welke metrics tellen.",
                        "image": "https://www.empowers.nl/images/blogs/meta-ads-creative-testing-weet.jpg",
                        "datePublished": "2026-04-23T09:00:00+02:00",
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
                                    "name": "Wat is Meta Ads creative testing precies?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Creative testing is het systematisch vergelijken van advertentiebeelden, video's en teksten om vast te stellen welke variant het hoogste rendement geeft. Je laat het algoritme van Meta zelf budget verschuiven naar de winnaars en stopt verliezers tijdig, in plaats van te gokken op één creative."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Hoeveel creatives moet je tegelijk testen?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Drie tot zes creatives per ad set is een prima vuistregel. Met minder dan drie test je niet, met meer dan zes verdun je het budget. Zorg dat de varianten één duidelijk verschil hebben — bijvoorbeeld dezelfde tekst maar een ander beeld — anders kun je niet zien waarom de ene wint."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Hoeveel budget heb je nodig per creative test?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Reken op minimaal 50 conversies per variant voor een betrouwbaar oordeel. In de praktijk komt dat neer op 50 tot 150 euro per creative voor laaggeprijsde producten en 300 tot 1000 euro voor hooggeprijsde diensten. Heb je weinig budget? Test op een goedkopere event verder boven in de funnel, zoals een view of een klik."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Hoe lang duurt een creative test?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Drie tot zeven dagen is gebruikelijk. Korter dan drie dagen geeft te veel ruis door dag- en weekpatronen. Langer dan zeven dagen kost onnodig veel budget als de winnaar al duidelijk is. Bekijk de cijfers iedere ochtend en stop verliezers actief zodra ze 50 procent slechter presteren dan de leider."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Wat is een goede CTR voor een Meta Ad in 2026?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Voor feed-advertenties geldt een CTR van 1 tot 2 procent als gemiddeld, 2 tot 4 procent als sterk en boven de 4 procent als uitzonderlijk. Voor Reels en Stories ligt de CTR vaak iets lager omdat het scrollgedrag sneller is. Belangrijker dan CTR alleen is de combinatie met conversiepercentage en kostprijs per resultaat."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Moet je foto of video testen?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Allebei. Video wint in 2026 vaker op Reels en Stories, foto blijft sterk in de feed en bij retargeting van warme doelgroepen. Begin een test altijd met minstens één video én één statisch beeld in dezelfde ad set, zodat je direct ziet welk format het beste landt bij die specifieke doelgroep."
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
                            { "@type": "ListItem", "position": 4, "name": "Meta Ads creative testing", "item": "https://www.empowers.nl/blogs/social-ads/meta-ads-creative-testing-weet" }
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
                        <span className="text-primary truncate">Meta Ads creative testing</span>
                    </nav>

                    {/* Header */}
                    <header className="mb-16">
                        <div className="inline-block px-3 py-1 bg-accent/10 text-accent font-mono text-xs uppercase tracking-widest rounded-full mb-6">
                            Social Ads
                        </div>
                        <h1 className="font-sans font-bold text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight mb-8">
                            Meta Ads creative testing: zo weet je wat werkt
                        </h1>
                        <div className="flex flex-wrap items-center gap-6 text-sm font-sans text-primary/60 border-y border-primary/10 py-6">
                            <div className="flex items-center gap-2"><User className="w-4 h-4" /><span>Empowers Redactie</span></div>
                            <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>23 april 2026</span></div>
                            <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>8 minuten leestijd</span></div>
                        </div>
                    </header>

                    {/* Featured Image */}
                    <figure className="w-full h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden mb-16 relative bg-primary">
                        <div className="absolute inset-0 bg-[url('/images/blogs/meta-ads-creative-testing-weet.jpg')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </figure>

                    {/* Content */}
                    <div className="prose prose-lg max-w-none prose-headings:text-primary prose-headings:font-bold prose-a:text-accent prose-a:underline hover:prose-a:text-accent/80">
                        <p className="text-xl leading-relaxed text-primary/80 font-medium mb-6">
                            Meta Ads creative testing is het systematisch vergelijken van advertentiebeelden, video's en hooks om te ontdekken welke variant écht omzet oplevert. Het algoritme van Meta beloont sterke creatives met lagere kosten en meer bereik. Wie zonder testopzet adverteert, betaalt jaar in jaar uit te veel voor middelmatige resultaten. In deze gids lees je hoe je een testflow opzet die binnen weken winnaars naar boven haalt en verliezers eruit filtert.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Waarom is creative tegenwoordig dé hefboom in Meta Ads?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Sinds Meta de targetingopties heeft afgeschaald en het algoritme steeds slimmer doelgroepen voor je kiest, ligt de macht over je resultaat bij de creative zelf. Een sterke video of beeld vertelt het algoritme welke mensen het meest geïnteresseerd zijn. Een zwakke creative levert dure kliks op van mensen die niet kopen. Het verschil tussen een winnende en een verliezende ad zit dan ook niet in de targeting maar in de eerste seconde beeld en de eerste regel tekst.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Bij onze klanten zien we dat de top 20 procent creatives gemiddeld vier tot vijf keer betere ROAS oplevert dan de onderste helft. Niet testen betekent dus dat je structureel te veel betaalt voor leads of verkopen. Wil je begrijpen wat een goede ROAS er überhaupt uitziet voor jouw branche? Lees dan onze <Link to="/blogs/social-ads/goede-roas-meta-ads-benchmarks" className="text-accent hover:underline">benchmarks voor een goede ROAS in Meta Ads</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat test je eigenlijk in een creative test?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een creative bestaat uit meerdere lagen, en elke laag is een testkandidaat. De belangrijkste lagen zijn: het beeld of de video zelf, de eerste drie seconden van een video (de hook), de tekst boven het beeld, de call-to-action en het format (statisch, carrousel, Reel, Story). Test nooit alle lagen tegelijk, want dan weet je achteraf niet wat de winst veroorzaakt heeft.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Begin altijd met de laag die het meeste impact heeft: het beeld of de video. Een ander aanbod, andere kleuren of een andere persoon in beeld kan de CTR met factoren laten verschillen. Pas als je een sterk beeld hebt gevonden, test je in de volgende ronde de tekst en hooks daarop verder uit. Zo bouw je trapsgewijs een steeds sterkere ad op.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Welke testopzet werkt het beste?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De meest betrouwbare opzet voor de meeste MKB-bedrijven is de Advantage+ creative test binnen één campagne en één ad set. Je laadt drie tot zes creatives per ad set en laat Meta het budget verdelen op basis van prestatie. Dat heet ook wel een Dynamic Creative test. Voordeel: je beslist niet zelf welke creative wint, het algoritme stuurt budget naar de variant met de hoogste verwachte conversiekans.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Voor grotere accounts met serieus budget werkt een A/B-test op campagneniveau beter. Daar splits je het verkeer 50/50 en krijg je statistisch zuivere data over welke creative wint. Maar voor een budget onder de 5.000 euro per maand is Dynamic Creative sneller en goedkoper. Hoe je je campagnestructuur het beste opbouwt staat in onze <Link to="/blogs/social-ads/effectieve-meta-ads-funnel" className="text-accent hover:underline">gids voor een effectieve Meta Ads funnel</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoeveel budget heb je nodig per test?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De vuistregel is 50 conversies per creative voor een betrouwbaar oordeel. Verkoop je een product van 30 euro met een kostprijs per aankoop van rond een tientje, dan zit je al snel op 500 euro per variant. Voor een hoogwaardige B2B-dienst met een lead die 100 euro kost, kan dat oplopen naar 1500 euro per variant. Klinkt veel, maar het alternatief is jaar in jaar uit budget verspillen aan ondermaatse creatives.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Heb je een kleiner budget? Dan test je hoger in de funnel op een goedkoper event, zoals video views of links clicks. Een goede video wint daar vaak al binnen 2 dagen, omdat je per euro veel meer datapunten verzamelt. Pas als je weet welk beeld het beste werkt, schaal je naar de aankoop- of leadcampagne.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Welke metrics bepalen wie wint?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Eén metric is nooit genoeg. Kijk naar drie dingen tegelijk: hookrate (percentage kijkers dat de eerste 3 seconden uitzit), CTR (percentage dat doorklikt) en CPA (kostprijs per gewenste actie). Een creative met hoge hookrate maar lage CTR trekt aandacht maar overtuigt niet. Een creative met lage hookrate maar lage CPA zet wel om, maar bereikt te weinig mensen. De winnaar scoort op alle drie de assen sterk.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Werk daarnaast met een minimum drempel: een creative die na 50 euro al 200 procent slechter presteert dan de leider, zet je uit. Wachten kost alleen maar geld. Belangrijk is wel dat je voldoende meetdata hebt. Zonder goede tracking weet je niet welke conversies bij welke creative horen. Lees onze gids over de <Link to="/blogs/social-ads/conversie-api-meta-naast-pixel" className="text-accent hover:underline">Conversie API van Meta naast je Pixel</Link> om je meting waterdicht te maken.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe vaak lanceer je nieuwe creatives?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Creative fatigue is een echt probleem in Meta Ads. Na twee tot vier weken merk je dat de CPA van een winnende creative langzaam stijgt: dezelfde mensen zien dezelfde ad te vaak. De oplossing is een vast ritme van nieuwe creatives. Voor een actief account is twee tot vier nieuwe varianten per week een gezond tempo. Voor een kleinere adverteerder werkt twee tot vier per maand prima.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Maak het jezelf makkelijk door één winnende creative steeds licht te variëren: andere openingsshot, andere muziek, andere onderschrift. Een goed presterende ad geeft vaak vier of vijf "iteraties" voordat hij definitief uitgewerkt is. Dat is een veel snellere weg naar resultaat dan elke keer compleet nieuwe concepten bedenken. Wat een winnende videoaanpak in 2026 onderscheidt lees je in onze blog over <Link to="/blogs/social-ads/winnende-meta-ads-video-2026" className="text-accent hover:underline">winnende Meta Ads video's in 2026</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat doe je met winnaars en verliezers?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een winnende creative is geen einddoel maar een vertrekpunt. Schaal hem op naar bredere doelgroepen, dupliceer hem in andere ad sets en gebruik hem als basis voor de volgende testronde. Documenteer altijd waarom hij waarschijnlijk werkte: was het de hook, het beeld, de boodschap, de muziek? Die learning is goud waard voor de volgende creative briefing.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Verliezers gooi je niet meteen weg. Vaak zit er één element in dat juist goed werkte. Misschien was het beeld zwak maar de tekst sterk. Kopieer dat sterke element naar de volgende test en verbeter de zwakke kant. Zo wordt elke creative test een leerronde die je hele account vooruit helpt. Wil je weten welke andere typische problemen je tegenkomt en hoe je ze voorblijft? Lees onze <Link to="/blogs/social-ads/waarom-meta-ads-niet-converteren" className="text-accent hover:underline">analyse van waarom Meta Ads vaak niet converteren</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wie verzorgt het creatieproces?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            In de praktijk zien we drie modellen werken. Het eerste is alles in eigen huis: een marketeer die zelf met een telefoon en simpele editingsoftware iedere week varianten produceert. Snel en goedkoop, mits je iemand in huis hebt met gevoel voor beeld. Het tweede model is een externe contentmaker die maandelijks een batch creatives oplevert. Hogere kwaliteit, maar minder flexibel. Het derde is een bureau dat zowel productie als testing doet, zodat de loop tussen data en nieuwe creative kort blijft.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Welk model bij jou past hangt af van je budget en je groeitempo. Belangrijker dan het model is dat de feedbackloop kort is: data uit Meta moet binnen een paar dagen leiden tot een nieuwe creative. Anders verlies je het ritme dat creative testing zo krachtig maakt.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Wil je een testopzet die past bij jouw budget en doelgroep? We bouwen creative testing flows voor MKB-bedrijven die elke week nieuwe winnaars opleveren. Plan een gesprek via onze <Link to="/contact" className="text-accent hover:underline">contactpagina</Link>.
                        </p>
                    </div>

                    {/* FAQ Section */}
                    <section className="mt-16 pt-12 border-t border-primary/10">
                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Veelgestelde vragen</h2>
                        <div className="space-y-6 not-prose">
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat is Meta Ads creative testing precies?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Creative testing is het systematisch vergelijken van advertentiebeelden, video's en teksten om vast te stellen welke variant het hoogste rendement geeft. Je laat het algoritme van Meta zelf budget verschuiven naar de winnaars en stopt verliezers tijdig, in plaats van te gokken op één creative.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoeveel creatives moet je tegelijk testen?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Drie tot zes creatives per ad set is een prima vuistregel. Met minder dan drie test je niet, met meer dan zes verdun je het budget. Zorg dat de varianten één duidelijk verschil hebben — bijvoorbeeld dezelfde tekst maar een ander beeld — anders kun je niet zien waarom de ene wint.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoeveel budget heb je nodig per creative test?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Reken op minimaal 50 conversies per variant voor een betrouwbaar oordeel. In de praktijk komt dat neer op 50 tot 150 euro per creative voor laaggeprijsde producten en 300 tot 1000 euro voor hooggeprijsde diensten. Heb je weinig budget? Test op een goedkopere event verder boven in de funnel, zoals een view of een klik.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoe lang duurt een creative test?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Drie tot zeven dagen is gebruikelijk. Korter dan drie dagen geeft te veel ruis door dag- en weekpatronen. Langer dan zeven dagen kost onnodig veel budget als de winnaar al duidelijk is. Bekijk de cijfers iedere ochtend en stop verliezers actief zodra ze 50 procent slechter presteren dan de leider.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat is een goede CTR voor een Meta Ad in 2026?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Voor feed-advertenties geldt een CTR van 1 tot 2 procent als gemiddeld, 2 tot 4 procent als sterk en boven de 4 procent als uitzonderlijk. Voor Reels en Stories ligt de CTR vaak iets lager omdat het scrollgedrag sneller is. Belangrijker dan CTR alleen is de combinatie met conversiepercentage en kostprijs per resultaat.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Moet je foto of video testen?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Allebei. Video wint in 2026 vaker op Reels en Stories, foto blijft sterk in de feed en bij retargeting van warme doelgroepen. Begin een test altijd met minstens één video én één statisch beeld in dezelfde ad set, zodat je direct ziet welk format het beste landt bij die specifieke doelgroep.</p>
                            </div>
                        </div>
                    </section>

                    {/* Related Links */}
                    <section className="mt-16 pt-12 border-t border-primary/10">
                        <h3 className="text-xl font-bold text-primary mb-6">Lees ook</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <Link to="/blogs/social-ads/winnende-meta-ads-video-2026" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Winnende Meta Ads video's in 2026</h3>
                                <p className="text-primary/60 text-sm">Welke videoformule levert nu de beste hookrate en CPA op.</p>
                            </Link>
                            <Link to="/blogs/social-ads/effectieve-meta-ads-funnel" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Effectieve Meta Ads funnel</h3>
                                <p className="text-primary/60 text-sm">Bouw een funnel waarin je creative test naadloos doorstroomt naar conversies.</p>
                            </Link>
                            <Link to="/blogs/social-ads/goede-roas-meta-ads-benchmarks" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">ROAS benchmarks Meta Ads</h3>
                                <p className="text-primary/60 text-sm">Wat is een goede ROAS in jouw branche en hoe gebruik je dat als ijkpunt?</p>
                            </Link>
                        </div>
                    </section>
                </div>
            </article>

            {/* Bottom CTA */}
            <section className="w-full pb-32 px-6">
                <div className="max-w-4xl mx-auto bg-primary rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
                    <h2 className="relative z-10 font-drama italic text-background text-3xl sm:text-4xl md:text-5xl mb-6">Klaar voor creatives die wel converteren?</h2>
                    <p className="relative z-10 font-sans text-background/70 text-lg mb-10 max-w-xl mx-auto">We bouwen een creative testing flow die elke week nieuwe winnaars naar boven haalt en jouw CPA structureel verlaagt.</p>
                    <Link to="/contact" className="relative z-10 btn-magnetic inline-flex items-center justify-center bg-accent text-background font-sans font-bold text-lg px-10 py-4 rounded-[2rem] hover:bg-accent/90 transition-colors">Neem contact op</Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
