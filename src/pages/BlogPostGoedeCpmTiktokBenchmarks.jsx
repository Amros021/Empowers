import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ChevronRight, User } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function BlogPostGoedeCpmTiktokBenchmarks() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen selection:bg-accent/30 selection:text-dark flex flex-col bg-background">
            <Helmet>
                <title>Wat is een goede CPM op TikTok? Benchmarks per branche en doel | Empowers</title>
                <meta name="description" content="Wat is een goede CPM op TikTok? Lees realistische benchmarks per branche, per campagnetype en per doel, plus hoe je je eigen CPM verlaagt." />
                <link rel="canonical" href="https://www.empowers.nl/blogs/social-ads/goede-cpm-tiktok-benchmarks" />
                <meta property="og:title" content="Goede CPM op TikTok: benchmarks per branche en doel" />
                <meta property="og:description" content="Realistische TikTok CPM-benchmarks voor 2026 en hoe je jouw eigen CPM omlaag krijgt." />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://www.empowers.nl/blogs/social-ads/goede-cpm-tiktok-benchmarks" />
                <meta property="og:image" content="https://www.empowers.nl/images/blogs/goede-cpm-tiktok-benchmarks.jpg" />
                <meta property="article:published_time" content="2026-05-08T14:00:00+02:00" />
                <meta property="article:author" content="Empowers" />
                <meta property="article:section" content="Social Ads" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Goede CPM op TikTok: realistische benchmarks 2026" />
                <meta name="twitter:description" content="Wat is normaal, wat is duur en wat doe je eraan?" />

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Article",
                        "headline": "Wat is een goede CPM op TikTok? Benchmarks per branche en doel",
                        "description": "Realistische TikTok CPM-benchmarks voor 2026 en hoe je jouw eigen CPM omlaag krijgt.",
                        "image": "https://www.empowers.nl/images/blogs/goede-cpm-tiktok-benchmarks.jpg",
                        "datePublished": "2026-05-08T14:00:00+02:00",
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
                                    "name": "Wat is een goede CPM op TikTok in Nederland?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Voor de meeste B2C-campagnes in Nederland ligt een gezonde TikTok CPM tussen 4 en 9 euro per duizend vertoningen. Onder de 4 euro zit je doorgaans op brede awareness met losse interest-targeting. Boven de 9 euro ben je vaak smal aan het targeten of zit je in een veiling met veel concurrentie zoals beauty of finance."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Waarom verschillen CPM's tussen branches?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Veiling-druk. In branches waar veel adverteerders bieden op dezelfde doelgroep (beauty, fashion, financiele dienstverlening) loopt de CPM op. In branches met minder adverteerders (lokale dienstverlening, niche-hobbies, technische B2B) blijven CPM's structureel lager. De prijs van een impressie is een functie van wie er nog meer voor wil betalen."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Hoe verlaag je je CPM op TikTok?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Drie wegen werken het sterkst. Verbreed je targeting zodat het algoritme een grotere pool heeft. Verbeter je creatives zodat de hookrate omhoog gaat (lagere CPM is een gevolg van hogere relevantie-score). En zet meerdere creatives tegelijk in een ad group zodat TikTok kan kiezen welke impressie voordelig is."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Verschillen CPM's tussen Smart+ en handmatige campagnes?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Vaak wel. Smart+ campagnes laten het algoritme bieden zonder targeting-restricties. Resultaat is meestal een lagere effectieve CPM omdat het systeem alleen impressies koopt die het waarschijnlijk acht voor conversie. Handmatige campagnes met smalle targeting hebben vaker een hogere CPM omdat je het algoritme door een kleinere pool dwingt."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Is een hoge CPM altijd slecht?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Nee. CPM is een input-metric, geen output-metric. Een CPM van 12 euro met een conversiewaarde van 80 euro per klik is gezond. Een CPM van 3 euro met een ROAS van 0,5 is niets waard. Kijk naar CPM in samenhang met CTR, conversie-rate en CAC. Optimaliseer pas op CPM als alle andere knoppen al staan."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Hoe verschilt de CPM tussen video-doelen en conversie-doelen?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Video-view-doelstellingen leveren typisch lagere CPM's op (3 tot 5 euro) omdat TikTok cheap-impressies kan inkopen. Conversie-doelstellingen liggen hoger (5 tot 10 euro) omdat het algoritme alleen impressies koopt waar het conversie verwacht. Reach-campagnes zitten ergens daartussenin."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Wat is een redelijke CPM voor B2B op TikTok?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Voor B2B-content op TikTok zien we CPM's tussen 3 en 7 euro voor de Nederlandse markt. Dat is fors lager dan vergelijkbaar bereik op LinkedIn (vaak 15 euro of meer). De catch is dat B2B-content op TikTok hoger in de funnel werkt en niet meteen vertaalt naar leads. De waarde komt later in de buyer journey."
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
                            { "@type": "ListItem", "position": 4, "name": "Goede CPM op TikTok benchmarks", "item": "https://www.empowers.nl/blogs/social-ads/goede-cpm-tiktok-benchmarks" }
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
                        <span className="text-primary truncate">Goede CPM op TikTok</span>
                    </nav>

                    <header className="mb-16">
                        <div className="inline-block px-3 py-1 bg-accent/10 text-accent font-mono text-xs uppercase tracking-widest rounded-full mb-6">
                            Social Ads
                        </div>
                        <h1 className="font-sans font-bold text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight mb-8">
                            Wat is een goede CPM op TikTok? Benchmarks per branche en doel
                        </h1>
                        <div className="flex flex-wrap items-center gap-6 text-sm font-sans text-primary/60 border-y border-primary/10 py-6">
                            <div className="flex items-center gap-2"><User className="w-4 h-4" /><span>Empowers Redactie</span></div>
                            <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>8 mei 2026</span></div>
                            <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>7 minuten leestijd</span></div>
                        </div>
                    </header>

                    <figure className="w-full h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden mb-16 relative bg-primary">
                        <div className="absolute inset-0 bg-[url('/images/blogs/goede-cpm-tiktok-benchmarks.jpg')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </figure>

                    <div className="prose prose-lg max-w-none prose-headings:text-primary prose-headings:font-bold prose-a:text-accent prose-a:underline hover:prose-a:text-accent/80">
                        <p className="text-xl leading-relaxed text-primary/80 font-medium mb-6">
                            "Mijn CPM is 8 euro, is dat goed?" Het antwoord begint altijd met een wedervraag. In welke branche, voor welk doel, met welke targeting? CPM op TikTok is geen vast getal. Het is een uitkomst van veiling-druk, je creatieve kwaliteit en de breedte van je publiek. Hieronder staan de benchmarks die je in de Nederlandse markt mag verwachten en hoe je je eigen CPM omlaag krijgt zonder kwaliteit in te leveren.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat is een gezonde CPM in Nederland?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Voor de gemiddelde B2C-campagne op TikTok in Nederland zien we CPM's tussen 4 en 9 euro per duizend vertoningen. Dat is het venster waarin je geen rare dingen aan het doen bent. Onder de 4 euro zit je vaak op een hele brede campagne zonder veel optimalisatie-druk. Boven de 9 euro ben je waarschijnlijk te smal aan het targeten of zit je in een sector met veel concurrentie.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Belangrijk om te onthouden: CPM is een input. Niet de uitkomst die je beoordeelt. Een hoge CPM is alleen een probleem als hij niet wordt gecompenseerd door betere CTR, hogere conversie of meer waarde per klant. Begin met je CAC en ROAS, en gebruik CPM als diagnose-instrument als die twee scheef staan.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Benchmarks per branche</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Verschillen tussen branches komen door veiling-druk. Hoe meer adverteerders op dezelfde doelgroep bieden, hoe duurder elke impressie wordt. In Nederlandse data zien we deze grove ranges:
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Beauty en cosmetica zitten doorgaans tussen 7 en 12 euro CPM. Veel adverteerders, scherp gedefinieerde doelgroepen en stevige creatieve concurrentie. Fashion en kleding tussen 5 en 9 euro, met seizoenpieken in november en december. Food en boodschappen tussen 4 en 7 euro. Lokale dienstverlening tussen 3 en 6 euro. Technische B2B en niche-hobbies vaak nog onder de 4 euro, omdat er simpelweg minder andere bieders zijn.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Het hoogste segment: financiele dienstverlening, consumenten-leningen en gambling, soms ver boven de 12 euro. Daar zijn de marges per klant zo hoog dat adverteerders bereid zijn fors te betalen voor elke impressie.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Benchmarks per campagne-doel</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Het doel dat je in TikTok Ads Manager kiest, beinvloedt direct welke impressies het algoritme inkoopt en dus je effectieve CPM. Video-view campagnes leveren de laagste CPM's: tussen 3 en 5 euro is normaal, omdat TikTok ruim impressies kan vinden die past bij dat doel.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Conversie-campagnes liggen hoger, doorgaans 5 tot 10 euro. Het algoritme koopt selectiever in en zoekt impressies waar de kans op conversie hoog is. Reach-campagnes met frequency-cap zitten ergens tussenin, afhankelijk van hoe schaars je doelgroep is. Lead-generation-campagnes met formulier-doel bewegen zich rond 6 tot 12 euro, hoger als je een complexe vorm vraagt.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wanneer is een hoge CPM acceptabel?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een CPM van 11 euro klinkt fors. Maar als de campagne een ROAS van 6 draait, geeft niemand erom. Als hij 0,5 draait, zit het probleem alsnog niet in de CPM zelf maar in de funnel daarna. CPM beoordeel je nooit los. Bekijk altijd de combinatie met CTR, conversie-percentage en gemiddelde orderwaarde. Daar zit de echte gezondheid van je campagne.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een vuistregel die we hanteren: als je CPM in de bovenkant van het venster zit en je ROAS is gezond, hou de campagne dan stabiel. Optimaliseer pas op CPM als ROAS onder druk komt. Sleutelen aan iets dat al werkt is een snelle weg naar minder werkende campagnes.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Drie hefbomen om CPM te verlagen</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Wil je CPM omlaag, dan zijn er drie hefbomen die structureel werken. Verbreed je targeting. Hoe meer mensen het algoritme heeft om uit te kiezen, hoe lager de gemiddelde impressie-prijs. Smalle interest-stacks knijpen je CPM omhoog. Hoe je dat aanpakt staat in onze gids over <Link to="/blogs/social-ads/tiktok-ads-doelgroepen-bereik-precies" className="text-accent hover:underline">TikTok Ads doelgroepen instellen</Link>.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Verbeter je creatives. Het TikTok-algoritme beloont video's met sterke hookrate met goedkopere impressies. Een video met 60 procent thumb-stop in de eerste 2 seconden krijgt aanmerkelijk goedkopere distributie dan een video met 20 procent thumb-stop. Een goede creator-creative is dus niet alleen een conversie-tool, maar een CPM-tool.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Test breed binnen een ad group. Vijf tot acht creatives in dezelfde groep geven het algoritme keuze. Het kiest automatisch de winnaars en verlaagt zo je gemiddelde CPM. Een groep met een of twee creatives is gevoeliger voor fluctuatie en zit doorgaans hoger in CPM. Op welke kanten je daarbij kunt sturen, lees je in onze gids over <Link to="/blogs/social-ads/influencer-content-tiktok-ads" className="text-accent hover:underline">influencer content in TikTok Ads</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Smart+ campagnes en CPM</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Bij Smart+ campagnes laat je het algoritme nagenoeg alle targeting-keuzes maken. Resultaat is meestal een lagere effectieve CPM omdat TikTok alleen impressies koopt waarvan het systeem denkt dat ze voor jou waardevol zijn. Veel handmatige campagnes hebben onnodig hoge CPM's omdat marketeers het algoritme dwingen door een te kleine pool te zoeken.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Wanneer Smart+ wel duurder uitvalt: bij heel niche-producten of regionale aanbiedingen waar het algoritme verkeerd inschat wat het juiste publiek is. In die gevallen kun je beter terugvallen op handmatig met stevige exclusion. Onze gids <Link to="/blogs/social-ads/tiktok-smart-campagnes-uitgelegd" className="text-accent hover:underline">TikTok Smart+ campagnes uitgelegd</Link> gaat dieper in op die afweging.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wanneer is een specialist nodig?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Als je CPM al een paar weken structureel boven het verwachte branche-venster zit en je hebt de drie standaard-hefbomen al geprobeerd, dan zit het probleem dieper. Vaak in de combinatie van event-design, biedstrategie en creatieve mix. Op zo'n moment kost zelf doorworstelen meestal meer dan een gerichte review.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een goede TikTok-strateeg ziet binnen een uur waar de echte CPM-druk vandaan komt: te smal getarget, een conversie-event dat te schaars is om het algoritme te trainen, of creatives waarvan de hookrate stelselmatig onder de benchmark hangt. Wil je dat we daar samen naar kijken? Plan een vrijblijvend gesprek via onze <Link to="/contact" className="text-accent hover:underline">contactpagina</Link>.
                        </p>
                    </div>

                    <section className="mt-16 pt-12 border-t border-primary/10">
                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Veelgestelde vragen</h2>
                        <div className="space-y-6 not-prose">
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat is een goede CPM op TikTok in Nederland?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Voor de meeste B2C-campagnes in Nederland ligt een gezonde TikTok CPM tussen 4 en 9 euro per duizend vertoningen. Onder de 4 euro zit je doorgaans op brede awareness met losse interest-targeting. Boven de 9 euro ben je vaak smal aan het targeten of zit je in een veiling met veel concurrentie zoals beauty of finance.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Waarom verschillen CPM's tussen branches?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Veiling-druk. In branches waar veel adverteerders bieden op dezelfde doelgroep (beauty, fashion, financiele dienstverlening) loopt de CPM op. In branches met minder adverteerders (lokale dienstverlening, niche-hobbies, technische B2B) blijven CPM's structureel lager. De prijs van een impressie is een functie van wie er nog meer voor wil betalen.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoe verlaag je je CPM op TikTok?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Drie wegen werken het sterkst. Verbreed je targeting zodat het algoritme een grotere pool heeft. Verbeter je creatives zodat de hookrate omhoog gaat (lagere CPM is een gevolg van hogere relevantie-score). En zet meerdere creatives tegelijk in een ad group zodat TikTok kan kiezen welke impressie voordelig is.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Verschillen CPM's tussen Smart+ en handmatige campagnes?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Vaak wel. Smart+ campagnes laten het algoritme bieden zonder targeting-restricties. Resultaat is meestal een lagere effectieve CPM omdat het systeem alleen impressies koopt die het waarschijnlijk acht voor conversie. Handmatige campagnes met smalle targeting hebben vaker een hogere CPM omdat je het algoritme door een kleinere pool dwingt.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Is een hoge CPM altijd slecht?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Nee. CPM is een input-metric, geen output-metric. Een CPM van 12 euro met een conversiewaarde van 80 euro per klik is gezond. Een CPM van 3 euro met een ROAS van 0,5 is niets waard. Kijk naar CPM in samenhang met CTR, conversie-rate en CAC. Optimaliseer pas op CPM als alle andere knoppen al staan.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoe verschilt de CPM tussen video-doelen en conversie-doelen?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Video-view-doelstellingen leveren typisch lagere CPM's op (3 tot 5 euro) omdat TikTok cheap-impressies kan inkopen. Conversie-doelstellingen liggen hoger (5 tot 10 euro) omdat het algoritme alleen impressies koopt waar het conversie verwacht. Reach-campagnes zitten ergens daartussenin.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat is een redelijke CPM voor B2B op TikTok?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Voor B2B-content op TikTok zien we CPM's tussen 3 en 7 euro voor de Nederlandse markt. Dat is fors lager dan vergelijkbaar bereik op LinkedIn (vaak 15 euro of meer). De catch is dat B2B-content op TikTok hoger in de funnel werkt en niet meteen vertaalt naar leads. De waarde komt later in de buyer journey.</p>
                            </div>
                        </div>
                    </section>

                    <section className="mt-16 pt-12 border-t border-primary/10">
                        <h3 className="text-xl font-bold text-primary mb-6">Lees ook</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <Link to="/blogs/social-ads/tiktok-ads-doelgroepen-bereik-precies" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">TikTok Ads doelgroepen instellen</h3>
                                <p className="text-primary/60 text-sm">De juiste mensen bereiken zonder je targeting dicht te knijpen.</p>
                            </Link>
                            <Link to="/blogs/social-ads/tiktok-smart-campagnes-uitgelegd" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">TikTok Smart+ uitgelegd</h3>
                                <p className="text-primary/60 text-sm">Wanneer Smart+ je CPM verlaagt en wanneer juist niet.</p>
                            </Link>
                            <Link to="/blogs/social-ads/influencer-content-tiktok-ads" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Influencer content in TikTok Ads</h3>
                                <p className="text-primary/60 text-sm">Hoe creator-content je hookrate boost en je CPM drukt.</p>
                            </Link>
                        </div>
                    </section>

                </div>
            </article>

            <section className="w-full pb-32 px-6">
                <div className="max-w-4xl mx-auto bg-primary rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
                    <h2 className="relative z-10 font-drama italic text-background text-3xl sm:text-4xl md:text-5xl mb-6">
                        Te dure TikTok Ads?
                    </h2>
                    <p className="relative z-10 font-sans text-background/70 text-lg mb-10 max-w-xl mx-auto">
                        We doorlichten je TikTok-account en laten zien waar de CPM-druk zit. Binnen 30 dagen merk je het verschil.
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
