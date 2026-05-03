import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ChevronRight, User } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function BlogPostTiktokAdsVsMetaAds() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen selection:bg-accent/30 selection:text-dark flex flex-col bg-background">
            <Helmet>
                <title>TikTok Ads vs Meta Ads: waar zit jouw doelgroep? | Empowers</title>
                <meta name="description" content="TikTok Ads of Meta Ads? Lees waar jouw doelgroep zit, welke creatives werken op elk platform en hoe je het juiste budget verdeelt voor maximale ROAS." />
                <link rel="canonical" href="https://www.empowers.nl/blogs/social-ads/tiktok-ads-vs-meta-ads" />
                <meta property="og:title" content="TikTok Ads vs Meta Ads: waar zit jouw doelgroep?" />
                <meta property="og:description" content="TikTok of Meta? Lees welk platform past bij jouw doelgroep, welke creatives werken en hoe je het juiste budget verdeelt." />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://www.empowers.nl/blogs/social-ads/tiktok-ads-vs-meta-ads" />
                <meta property="og:image" content="https://www.empowers.nl/images/blogs/tiktok-ads-vs-meta-ads.jpg" />
                <meta property="article:published_time" content="2026-05-02" />
                <meta property="article:author" content="Empowers" />
                <meta property="article:section" content="Social Ads" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="TikTok Ads vs Meta Ads: waar zit jouw doelgroep?" />
                <meta name="twitter:description" content="Welk platform past bij jouw doelgroep — TikTok of Meta? Een eerlijke vergelijking voor 2026." />

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Article",
                        "headline": "TikTok Ads vs Meta Ads: waar zit jouw doelgroep?",
                        "description": "TikTok Ads of Meta Ads? Lees waar jouw doelgroep zit, welke creatives werken op elk platform en hoe je het juiste budget verdeelt voor maximale ROAS.",
                        "image": "https://www.empowers.nl/images/blogs/tiktok-ads-vs-meta-ads.jpg",
                        "datePublished": "2026-05-02T13:00:00+02:00",
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
                                    "name": "Wat is het grootste verschil tussen TikTok Ads en Meta Ads?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "TikTok draait om ontdekking. Mensen zien content waarvan ze niet wisten dat ze die wilden zien. Meta draait om relaties en bekenden. De algoritmes belonen daarom andere creatives. Op TikTok werkt rauwe, native video met een sterke hook. Op Meta werken polished cases en testimonials beter omdat het publiek wat ouder en zakelijker is."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Welk platform heeft de jongste doelgroep?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "TikTok heeft de jongste doelgroep. In Nederland is rond 60 procent van de TikTok-gebruikers tussen 16 en 34 jaar. Meta blijft sterk in de leeftijdsgroep 25 tot 55. Voor merken die zich richten op tieners en twintigers wint TikTok in bereik. Voor 35-plus blijft Meta het kanaal met de grootste schaal."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Welk platform heeft de laagste kosten per klik?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "TikTok heeft in 2026 doorgaans 30 tot 50 procent lagere kosten per klik dan Meta. De gemiddelde CPC op TikTok ligt rond 0,80 tot 1,30 euro, op Meta tussen 1,20 en 2,00 euro. Lagere CPC betekent niet automatisch lagere kosten per conversie. TikTok-gebruikers converteren vaak na meer touchpoints, dus reken het hele traject door."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Welke creatives werken op TikTok en welke op Meta?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "TikTok beloont native, ongepolijste video met een sterke eerste 3 seconden, gesproken tekst, ondertiteling en een trending sound. Meta beloont gepolijste creatives met heldere boodschap, klantcases met namen en herkenbare statische beelden of korte explainers. Een TikTok-video op Meta presteert vaak slecht en omgekeerd."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Welk minimumbudget heb je nodig voor TikTok of Meta?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Op Meta reken je op 15 tot 25 euro per dag per ad set om uit de leerfase te komen, oftewel 450 tot 750 euro per maand per campagne. Op TikTok lukt het al vanaf 20 euro per dag, omdat het algoritme sneller leert. Voor een eerlijke test op een nieuw platform reken je op minimaal 6 weken en 1.500 tot 2.500 euro budget."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Werkt TikTok ook voor B2B?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Voor klassieke enterprise B2B niet, voor MKB-B2B steeds vaker wel. TikTok wordt in 2026 ook door zakelijke beslissers gebruikt, vooral in marketing, e-commerce en SaaS. Voor B2B-aanbiedingen tot 25.000 euro per jaar haalt TikTok soms verrassend goedkope leads. Voor zware enterprise-deals blijft LinkedIn de eerste keuze."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Moet ik kiezen tussen TikTok en Meta?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Voor de meeste merken niet. De slimste opzet is een combinatie: Meta voor stabiele schaal en remarketing, TikTok voor goedkope topfunnel-bekendheid en jongere doelgroepen. Verdeel jouw budget 60 tot 70 procent op het sterkste platform en 30 tot 40 procent op het tweede. Werkt het tweede platform na 8 weken niet, dan schuif je budget terug."
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
                            { "@type": "ListItem", "position": 4, "name": "TikTok Ads vs Meta Ads", "item": "https://www.empowers.nl/blogs/social-ads/tiktok-ads-vs-meta-ads" }
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
                        <span className="text-primary truncate">TikTok Ads vs Meta Ads</span>
                    </nav>

                    {/* Header */}
                    <header className="mb-16">
                        <div className="inline-block px-3 py-1 bg-accent/10 text-accent font-mono text-xs uppercase tracking-widest rounded-full mb-6">
                            Social Ads
                        </div>
                        <h1 className="font-sans font-bold text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight mb-8">
                            TikTok Ads vs Meta Ads: waar zit jouw doelgroep?
                        </h1>
                        <div className="flex flex-wrap items-center gap-6 text-sm font-sans text-primary/60 border-y border-primary/10 py-6">
                            <div className="flex items-center gap-2"><User className="w-4 h-4" /><span>Empowers Redactie</span></div>
                            <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>2 mei 2026</span></div>
                            <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>8 minuten leestijd</span></div>
                        </div>
                    </header>

                    {/* Featured Image */}
                    <figure className="w-full h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden mb-16 relative bg-primary">
                        <div className="absolute inset-0 bg-[url('/images/blogs/tiktok-ads-vs-meta-ads.jpg')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </figure>

                    {/* Content */}
                    <div className="prose prose-lg max-w-none prose-headings:text-primary prose-headings:font-bold prose-a:text-accent prose-a:underline hover:prose-a:text-accent/80">
                        <p className="text-xl leading-relaxed text-primary/80 font-medium mb-6">
                            TikTok Ads of Meta Ads? Het korte antwoord hangt af van leeftijd, aanbod en creatieve capaciteit. TikTok wint op kosten per klik en bereik onder de 35, Meta wint op stabiele conversies en bereik boven de 35. De meeste merken doen het slimst met allebei tegelijk: 60 tot 70 procent budget naar het sterkste platform, 30 tot 40 procent op het tweede.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat is het grootste verschil tussen TikTok en Meta?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Het verschil zit in hoe mensen het platform gebruiken. Op TikTok scrollen gebruikers door de For You-pagina en zien ze content waar ze niet om gevraagd hebben. Het algoritme draait volledig om ontdekking. Op Meta zien mensen vooral content van vrienden, familie en pagina's die ze volgen. Het algoritme draait om relaties.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Dat verschil bepaalt welke creatives werken. Op TikTok presteert rauwe, native video met een sterke hook in de eerste 3 seconden. Mensen swipen weg zodra ze een advertentie ruiken. Op Meta presteren gepolijste creatives met heldere boodschap, klantcases en testimonials beter, omdat het publiek wat ouder en zakelijker is en advertenties tussen feed-content geaccepteerd worden.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een TikTok-video die op Meta wordt geplaatst presteert in de praktijk vaak ondermaats. Andersom evengoed. Wie het serieus aanpakt, maakt platformspecifieke creatives en bewerkt nooit één video voor twee kanalen. Voor de basis van Meta-creatives lees je onze blog over <Link to="/blogs/social-ads/winnende-meta-ads-video-2026" className="text-accent hover:underline">winnende Meta Ads video's</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Waar zit jouw doelgroep echt?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De demografie van beide platformen is in 2026 nog altijd verschillend, ook al groeit TikTok hard onder oudere gebruikers. In Nederland is rond 60 procent van de TikTok-gebruikers tussen 16 en 34 jaar. Meta verdeelt zich gelijkmatiger: ongeveer 35 procent tussen 18 en 34, zo'n 35 procent tussen 35 en 54 en de rest 55-plus.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Voor merken die zich richten op tieners en twintigers wint TikTok ruim in bereik. Mode, beauty, gaming, fitness en entertainment doen het hier vaak fenomenaal. Voor 35-plus blijft Meta het kanaal met de grootste schaal. Hypotheek, verzekeringen, woninginrichting, opleidingen en de hele lokale dienstverlening haalt op Meta meer rendement.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Voor lokale en MKB-aanbieders is leeftijd niet de enige factor. Kijk ook naar koopkracht en koopintentie. TikTok-gebruikers besteden gemiddeld minder per transactie dan Meta-gebruikers, maar het volume kan hoger liggen. Een webshop met producten onder de 50 euro doet het op TikTok vaak goed. Een dienstverlener met trajecten boven 1.000 euro vindt zijn beslissers eerder op Meta.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat kost adverteren op beide platformen?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Kosten per klik liggen in 2026 op TikTok structureel onder die van Meta. De gemiddelde CPC op TikTok beweegt rond 0,80 tot 1,30 euro, op Meta tussen 1,20 en 2,00 euro. Op het eerste oog is TikTok dus goedkoper. Lagere klikkosten betekenen alleen niet automatisch lagere conversiekosten.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            TikTok-gebruikers staan vaker hoog in de funnel. Ze ontdekken jouw merk voor het eerst en converteren zelden direct. Meta-gebruikers worden vaker bereikt op een moment van koopintentie of na meerdere zichtbaarheidsmomenten. De totale kosten per gekwalificeerde lead vallen daardoor vaak vergelijkbaar uit. Ja, TikTok is goedkoper per klik, nee, niet per se goedkoper per klant.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Voor minimumbudgetten geldt op Meta: reken op 15 tot 25 euro per dag per ad set om uit de leerfase te komen. Op TikTok lukt het al vanaf 20 euro per dag omdat het algoritme sneller leert op verse data. Een eerlijke eerste test op een nieuw platform vraagt minimaal 6 weken en 1.500 tot 2.500 euro budget. Voor benchmarks lees onze blog over <Link to="/blogs/social-ads/goede-roas-meta-ads-benchmarks" className="text-accent hover:underline">goede ROAS-cijfers op Meta Ads</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Welke creatives werken op TikTok?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Op TikTok wint creatieve eerlijkheid. De grootste fout is een gepolijste reclamevideo uploaden alsof het een bioscoopspot is. TikTok beloont alles wat aanvoelt als organische content: handcamera, gesproken tekst, ondertiteling, trending sound en een herkenbaar gezicht in beeld.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De eerste 3 seconden bepalen alles. Open met een directe vraag, een onverwacht beeld of een prikkelende stelling. "Kost jouw boekhouder je elke maand geld?" werkt sterker dan "Bij ons kun je terecht voor". Houd de video tussen 9 en 30 seconden. Langer kan, maar alleen als de hook in de eerste seconden klopt.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            User Generated Content presteert op TikTok vaak twee tot drie keer beter dan merkvideo's. Werk samen met klanten of micro-creators die in jouw doelgroep zitten. Een video van iemand die jouw product daadwerkelijk gebruikt scoort op TikTok bovenmatig. Onze gids over <Link to="/blogs/social-ads/tiktok-spark-ads-vs-reguliere" className="text-accent hover:underline">Spark Ads</Link> laat zien hoe je organische posts inzet als advertentie.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Welke creatives werken op Meta?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Op Meta werkt een breder spectrum. Korte verticale video van 15 tot 30 seconden, klantcases met naam en functie, statische foto's met sterke kop en korte explainers met een ondernemer in beeld presteren allemaal goed. Wat telt is herkenbaarheid en duidelijkheid van de boodschap.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Anders dan op TikTok beloont Meta gepolijste content niet negatief. Een goed afgewerkte creative met logo, kleur en heldere call-to-action presteert hier prima. Wat Meta wel afstraft is generieke stockbeelden zonder context en advertenties zonder duidelijke aanbieding. Werk met klantnamen, concrete cijfers, real-life foto's en testimonials.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Wissel iedere twee tot drie weken minimaal twee creatives uit. Doelgroepen op Meta zijn vaak kleiner dan op TikTok, dus frequentie loopt sneller op en advertentiemoeheid slaat eerder toe.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Targeting: hoe verschilt het op beide?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Meta Ads heeft de breedste set targeting-opties: locaties, leeftijden, interesses, gedragingen, custom audiences uit klantenlijsten en lookalikes. Voor B2B en niche-doelgroepen is Meta hierin sterker dan TikTok.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            TikTok werkt anders. Het algoritme bepaalt veel zelf op basis van interactiegedrag. Targeting op interesses werkt, maar minder gedetailleerd dan op Meta. Custom audiences en lookalikes bestaan, maar de minimum-omvang is hoger en de signaalkwaliteit doorgaans lager. Wat TikTok ondervangt, is dat het algoritme razendsnel leert van wie wel en wie niet kijkt. Geef TikTok een goede creative en het systeem vindt jouw doelgroep zelf.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wanneer kies je voor welk platform?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een paar vuistregels helpen bij de keuze. Kies voor Meta als jouw doelgroep boven 35 jaar zit, jouw aanbod een hogere prijs heeft, jij werkt met klantcases en testimonials of jij snel rendement nodig hebt op een eerste test. Kies voor TikTok als jouw doelgroep jonger is dan 35 jaar, jouw merk visueel of speels is, jij content kunt produceren met snelheid of jij merkbekendheid wil opbouwen tegen lage CPM.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Voor de meeste MKB-bedrijven is de beste opzet een combinatie. Begin met het platform dat het beste past bij leeftijd en aanbod, en breid uit zodra je daar stabiele resultaten boekt. Verdeel het budget niet 50/50, maar 60 tot 70 procent op het sterkste kanaal en de rest op het tweede.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wanneer schakel je een specialist in?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Beide platformen draaien op andere logica, andere creatives en andere meting. Wie zelf op één platform al worstelt, lukt het op twee platformen tegelijk meestal niet. Vanaf een gecombineerd budget van 2.500 euro per maand of zodra je meer dan 1 doelgroep en meer dan 1 aanbieding wil aansturen, verdient een specialist zichzelf vaak binnen 2 tot 4 maanden terug.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Twijfel je welk kanaal voor jouw aanbod werkt? Plan een gratis scan via onze <Link to="/contact" className="text-accent hover:underline">contactpagina</Link>. We kijken naar jouw doelgroep, aanbod en huidige creatieve assets en geven concreet advies waar het eerste rendement zit. Geen verplichtingen, wel duidelijkheid.
                        </p>
                    </div>

                    {/* FAQ Section */}
                    <section className="mt-16 pt-12 border-t border-primary/10">
                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Veelgestelde vragen</h2>
                        <div className="space-y-6 not-prose">
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat is het grootste verschil tussen TikTok Ads en Meta Ads?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">TikTok draait om ontdekking, Meta om relaties. Op TikTok werkt rauwe, native video. Op Meta werken polished cases en testimonials beter omdat het publiek wat ouder en zakelijker is.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Welk platform heeft de jongste doelgroep?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">TikTok. In Nederland is rond 60 procent van de TikTok-gebruikers tussen 16 en 34 jaar. Voor merken die zich richten op tieners en twintigers wint TikTok in bereik. Voor 35-plus wint Meta.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Welk platform heeft de laagste kosten per klik?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">TikTok heeft in 2026 doorgaans 30 tot 50 procent lagere kosten per klik dan Meta. Lagere CPC betekent niet automatisch lagere kosten per conversie omdat TikTok-gebruikers vaker hoog in de funnel zitten.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Welke creatives werken op TikTok en welke op Meta?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">TikTok beloont native, ongepolijste video met sterke eerste 3 seconden, gesproken tekst en trending sound. Meta beloont gepolijste creatives met heldere boodschap, klantcases en korte explainers.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Welk minimumbudget heb je nodig?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Op Meta 15 tot 25 euro per dag per ad set, dus 450 tot 750 euro per maand per campagne. Op TikTok vanaf 20 euro per dag. Voor een eerlijke test reken je minimaal 6 weken en 1.500 tot 2.500 euro budget.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Werkt TikTok ook voor B2B?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Voor klassieke enterprise B2B niet, voor MKB-B2B steeds vaker wel. Voor B2B-aanbiedingen tot 25.000 euro per jaar haalt TikTok soms verrassend goedkope leads. Voor zware enterprise-deals blijft LinkedIn de eerste keuze.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Moet ik kiezen tussen TikTok en Meta?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Voor de meeste merken niet. De slimste opzet is een combinatie: Meta voor stabiele schaal en remarketing, TikTok voor goedkope topfunnel-bekendheid. Verdeel 60 tot 70 procent op het sterkste platform.</p>
                            </div>
                        </div>
                    </section>

                    {/* Related Links */}
                    <section className="mt-16 pt-12 border-t border-primary/10">
                        <h3 className="text-xl font-bold text-primary mb-6">Lees ook</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <Link to="/blogs/social-ads/tiktok-spark-ads-vs-reguliere" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Spark Ads op TikTok</h3>
                                <p className="text-primary/60 text-sm">Hoe je organische TikTok-content inzet als advertentie en wanneer dat beter werkt dan een aparte spot.</p>
                            </Link>
                            <Link to="/blogs/social-ads/winnende-meta-ads-video-2026" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Winnende Meta Ads video's in 2026</h3>
                                <p className="text-primary/60 text-sm">De creatieve principes die in 2026 op Facebook en Instagram het meest opleveren.</p>
                            </Link>
                            <Link to="/blogs/social-ads/goede-roas-meta-ads-benchmarks" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Goede ROAS-cijfers op Meta</h3>
                                <p className="text-primary/60 text-sm">Benchmarks per branche zodat je weet wanneer een campagne winstgevend is.</p>
                            </Link>
                        </div>
                    </section>
                </div>
            </article>

            {/* Bottom CTA */}
            <section className="w-full pb-32 px-6">
                <div className="max-w-4xl mx-auto bg-primary rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
                    <h2 className="relative z-10 font-drama italic text-background text-3xl sm:text-4xl md:text-5xl mb-6">Welk platform werkt voor jou?</h2>
                    <p className="relative z-10 font-sans text-background/70 text-lg mb-10 max-w-xl mx-auto">We doen een gratis scan van jouw doelgroep en aanbod en geven concreet advies welk platform de eerste winst oplevert. Geen verplichtingen, wel duidelijkheid.</p>
                    <Link to="/contact" className="relative z-10 btn-magnetic inline-flex items-center justify-center bg-accent text-background font-sans font-bold text-lg px-10 py-4 rounded-[2rem] hover:bg-accent/90 transition-colors">Neem contact op</Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
