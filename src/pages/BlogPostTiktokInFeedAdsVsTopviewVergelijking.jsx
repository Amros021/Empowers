import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ChevronRight, User } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function BlogPostTiktokInFeedAdsVsTopviewVergelijking() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen selection:bg-accent/30 selection:text-dark flex flex-col bg-background">
            <Helmet>
                <title>In-feed Ads vs TopView op TikTok: wat kies je? | Empowers</title>
                <meta name="description" content="In-feed Ads vs TopView op TikTok: in-feed is voordelig en stuurt op verkoop, TopView koopt maximale aandacht. Zo kies je wat bij jouw budget past." />
                <link rel="canonical" href="https://www.empowers.nl/blogs/social-ads/tiktok-in-feed-ads-vs-topview-vergelijking" />
                <meta property="og:title" content="In-feed Ads vs TopView op TikTok: wat kies je?" />
                <meta property="og:description" content="In-feed Ads vs TopView op TikTok: in-feed is voordelig en stuurt op verkoop, TopView koopt maximale aandacht. Zo kies je wat bij jouw budget past." />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://www.empowers.nl/blogs/social-ads/tiktok-in-feed-ads-vs-topview-vergelijking" />
                <meta property="og:image" content="https://www.empowers.nl/images/blogs/tiktok-in-feed-ads-vs-topview-vergelijking.jpg" />
                <meta property="article:published_time" content="2026-07-02T12:00:00+02:00" />
                <meta property="article:author" content="Empowers" />
                <meta property="article:section" content="Social Ads" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="In-feed Ads vs TopView op TikTok: wat kies je?" />
                <meta name="twitter:description" content="In-feed Ads vs TopView op TikTok: in-feed is voordelig en stuurt op verkoop, TopView koopt maximale aandacht. Zo kies je wat bij jouw budget past." />

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@graph": [
                            {
                                "@type": "Article",
                                "headline": "In-feed Ads vs TopView op TikTok: wat kies je?",
                                "description": "In-feed Ads vs TopView op TikTok: in-feed is voordelig en stuurt op verkoop, TopView koopt maximale aandacht. Zo kies je wat bij jouw budget past.",
                                "image": "https://www.empowers.nl/images/blogs/tiktok-in-feed-ads-vs-topview-vergelijking.jpg",
                                "datePublished": "2026-07-02T12:00:00+02:00",
                                "dateModified": "2026-07-02T12:00:00+02:00",
                                "author": { "@type": "Organization", "name": "Empowers" },
                                "publisher": {
                                    "@type": "Organization", "name": "Empowers", "url": "https://www.empowers.nl",
                                    "logo": { "@type": "ImageObject", "url": "https://www.empowers.nl/empowers-logo-color.svg" }
                                },
                                "mainEntityOfPage": "https://www.empowers.nl/blogs/social-ads/tiktok-in-feed-ads-vs-topview-vergelijking"
                            },
                            {
                                "@type": "BreadcrumbList",
                                "itemListElement": [
                                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.empowers.nl" },
                                    { "@type": "ListItem", "position": 2, "name": "Blogs", "item": "https://www.empowers.nl/blogs" },
                                    { "@type": "ListItem", "position": 3, "name": "Social Ads", "item": "https://www.empowers.nl/blogs/social-ads" },
                                    { "@type": "ListItem", "position": 4, "name": "In-feed Ads vs TopView", "item": "https://www.empowers.nl/blogs/social-ads/tiktok-in-feed-ads-vs-topview-vergelijking" }
                                ]
                            },
                            {
                                "@type": "FAQPage",
                                "mainEntity": [
                                    {
                                        "@type": "Question",
                                        "name": "Wat is het verschil tussen In-feed Ads en TopView op TikTok?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "In-feed Ads verschijnen tussen de organische video's in de For You-feed terwijl iemand scrolt, en die koop je in via een veiling waarbij je je eigen budget bepaalt. TopView is de video die mensen zien als ze de app openen, een full-screen plek bovenaan die je vooraf inkoopt als reservering. In-feed stuurt op verkoop en is betaalbaar, TopView koopt in één keer maximale aandacht."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Wat kost TopView vergeleken met In-feed Ads?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "TopView ligt fors hoger dan In-feed. Je koopt het in als een reservering tegen een vast bedrag voor een dag of plaatsing, los van een veiling. In-feed reken je af per vertoning of klik en je houdt zelf de hand op je budget. Daardoor is in-feed het kanaal waarmee de meeste MKB-bedrijven beginnen en is TopView eerder iets voor merken met een groot lanceerbudget."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Welke advertentievorm is beter voor een webshop?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Voor de meeste webshops zijn In-feed Ads de logische keuze. Je kunt sturen op verkoop, je budget schaalt mee met wat werkt en je betaalt voor resultaat in plaats van voor een vaste plek. TopView werkt pas als je een groot moment wilt neerzetten, zoals een seizoenslancering of een nieuwe collectie, en het budget hebt om die piek te betalen."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Hoe lang mag een In-feed Ad of TopView duren?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Beide vormen kunnen tot zestig seconden duren. In de praktijk werkt korter vaak beter, omdat mensen op TikTok snel beslissen of ze blijven kijken. Voor In-feed houden veel adverteerders het op een filmpje van ongeveer tien tot vijftien seconden. Bij TopView heb je de eerste seconden van volle aandacht, dus daar telt het begin het zwaarst."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Kun je In-feed Ads en TopView combineren?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Ja, en dat is vaak het sterkst. TopView zet op een lanceerdag een grote piek aan aandacht neer, en met In-feed Ads vang je die aandacht daarna op en stuur je mensen door naar de aankoop. Zo gebruik je het dure kanaal voor bereik en het betaalbare kanaal voor de verkoop die erop volgt."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Is TopView geschikt voor een MKB-budget?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Meestal niet als losse keuze. TopView is een premium plaatsing met een vast inkoopbedrag dat voor veel kleinere bedrijven te zwaar drukt op de campagne. Wil je toch grote zichtbaarheid, dan haal je met een goed opgezette In-feed campagne en sterke video's vaak meer rendement uit hetzelfde budget. Test eerst klein voordat je naar een groot reserveringsbudget grijpt."
                                        }
                                    }
                                ]
                            }
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
                        <span className="text-primary truncate">In-feed Ads vs TopView</span>
                    </nav>

                    <header className="mb-16">
                        <div className="inline-block px-3 py-1 bg-accent/10 text-accent font-mono text-xs uppercase tracking-widest rounded-full mb-6">
                            Social Ads
                        </div>
                        <h1 className="font-sans font-bold text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight mb-8">
                            In-feed Ads vs TopView op TikTok: wat kies je?
                        </h1>

                        <div className="flex flex-wrap items-center gap-6 text-sm font-sans text-primary/60 border-y border-primary/10 py-6">
                            <div className="flex items-center gap-2"><User className="w-4 h-4" /><span>Empowers Redactie</span></div>
                            <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>2 juli 2026</span></div>
                            <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>7 minuten leestijd</span></div>
                        </div>
                    </header>

                    <figure className="w-full h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden mb-16 relative bg-primary">
                        <div className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-overlay" style={{backgroundImage: "url('/images/blogs/tiktok-in-feed-ads-vs-topview-vergelijking.jpg')"}}></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </figure>

                    <div className="prose prose-lg max-w-none prose-headings:text-primary prose-headings:font-bold prose-a:text-accent prose-a:underline hover:prose-a:text-accent/80">
                        <p className="text-xl leading-relaxed text-primary/80 font-medium mb-6">
                            Kies In-feed Ads als je op verkoop stuurt en je budget zelf in de hand wilt houden. Kies TopView als je in één keer maximale aandacht wilt voor een lancering en het budget hebt om die piek te betalen. In-feed verschijnt tussen de video's in de For You-feed en reken je af per veiling. TopView koop je vooraf in als de eerste video die mensen zien wanneer ze de app openen.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat zijn TikTok In-feed Ads?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            In-feed Ads zijn de advertenties die tussen de organische video's in je For You-feed verschijnen. Iemand scrolt, en jouw filmpje komt voorbij alsof het bij de rest hoort. Het kan worden weggeswipet, net als elke andere video, dus de eerste seconden moeten meteen pakken. Daar zit ook de kracht: een goede in-feed ad voelt niet als reclame maar als content.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Je koopt deze advertenties in via een veiling. Jij bepaalt je budget, kiest je doel en TikTok zoekt de mensen die het meest waarschijnlijk reageren. Wil je verkopen, dan stuur je op aankopen. Wil je leads, dan stuur je daarop. Omdat je per vertoning of klik betaalt, houd je grip op je kosten en kun je opschalen zodra iets aanslaat.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat zijn TopView Ads?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            TopView is de plek bovenaan. Het is de video die mensen te zien krijgen kort nadat ze TikTok openen, full-screen en met geluid aan. Geen ander bericht eromheen, geen feed die afleidt. Voor die paar seconden heb je de volle aandacht van de gebruiker, en dat is precies waar je voor betaalt.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Deze plaatsing koop je niet via een veiling, maar als reservering. Je legt vooraf een vast bedrag neer voor een dag of plaatsing en TikTok garandeert je de positie. Daardoor ligt de prijs een stuk hoger dan bij in-feed. Het is een kanaal voor merken die op een specifiek moment heel groot willen uitpakken, niet voor wie elke euro op verkoop wil afrekenen.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat is het verschil tussen In-feed en TopView?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Het grootste verschil zit in hoe je koopt en waarvoor. In-feed is een veilingkanaal dat meebeweegt met je budget en stuurt op resultaat. TopView is een vaste inkoop voor een premium plek met gegarandeerd bereik. Het ene is een motor die je laat draaien zolang het rendabel is, het andere is een eenmalige knal.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Ook de plek in de reis verschilt. In-feed bereikt mensen midden in hun scrollgedrag, op het moment dat ze openstaan voor ontdekken. TopView pakt ze meteen bij binnenkomst, voordat ze ook maar één video hebben gezien. Allebei werken ze met video tot zestig seconden, maar de meeste in-feed campagnes presteren beter met een korter filmpje dat snel tot de kern komt.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat kosten In-feed Ads vergeleken met TopView?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            In-feed Ads zijn het betaalbare kanaal. Je stelt zelf in wat je per dag uitgeeft en je betaalt voor vertoningen of klikken. Begin je net, dan kun je met een bescheiden bedrag al leren wat aanslaat. Wat een verkoop je uiteindelijk kost, hangt af van je product, je marge en hoe goed je video pakt. Meer over realistische tarieven lees je in onze blog over <Link to="/blogs/social-ads/goede-cpm-tiktok-benchmarks" className="text-accent hover:underline">een goede CPM op TikTok</Link>.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            TopView speelt in een andere klasse. Het vaste reserveringsbedrag ligt zo hoog dat het voor veel kleinere bedrijven te zwaar op de campagne drukt. Je betaalt voor de premium plek en het gegarandeerde bereik, niet voor een meetbare verkoop. Dat kan kloppen als je doel zuiver bekendheid is op een groot moment, maar voor wie op omzet stuurt, levert datzelfde budget in-feed meestal meer op.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wanneer kies je voor In-feed Ads?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Kies in-feed als je wilt verkopen, leads wilt of gewoon wilt zien wat marketing op TikTok je oplevert zonder een groot bedrag vooraf te riskeren. Je test, je meet en je schaalt op wat werkt. Voor webshops en dienstverleners die op resultaat sturen is dit bijna altijd het startpunt. We zien bij adverteerders dat de meeste groei juist uit een paar goed presterende in-feed video's komt, niet uit één dure plaatsing.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Het kanaal past ook als je nog zoekt naar de juiste boodschap. Omdat je klein kunt beginnen, kun je verschillende video's naast elkaar laten lopen en zien welke insteek aanzet tot kopen. Welke video's dat zijn, leggen we uit in onze blog over <Link to="/blogs/social-ads/tiktok-ads-video-converteert" className="text-accent hover:underline">TikTok-video's die converteren</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wanneer loont TopView voor jouw merk?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            TopView loont als je een groot moment hebt en iedereen het meteen moet weten. Een nieuwe collectie, een landelijke actie of de start van een seizoen waar je echt op inzet. Op zo'n dag wil je niet wachten tot de veiling je mensen vindt, je wilt de hele app in één keer bereiken. Dan is die premium plek het waard, mits je het budget hebt om hem te betalen.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Voor het dagelijkse werk is TopView te zwaar. Het is geen kanaal dat je maanden laat draaien, maar een zet die je inzet op een piekmoment. Heb je dat moment niet, dan steek je je geld beter in in-feed campagnes die langer doorlopen en blijven sturen op verkoop.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Kun je In-feed en TopView combineren?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Dat is vaak de slimste opzet. Je zet TopView in op de lanceerdag voor de grote knal, en je laat in-feed campagnes meelopen om die aandacht op te vangen. Iemand ziet jouw merk 's ochtends voor het eerst bij het openen van de app, en stuit later op de dag opnieuw op je in de feed. Die herhaling brengt mensen dichter bij de aankoop.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Zo gebruik je elk kanaal voor waar het sterk in is. TopView koopt de aandacht, in-feed verzilvert die in verkoop. Heb je geen lanceerbudget, dan haal je met in-feed alleen al een hoop, en bewaar je TopView voor het moment dat je echt groot wilt.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Waar begin je deze week?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Begin met in-feed, tenzij je een groot moment voor de deur hebt en het budget om dat met TopView neer te zetten. Maak een eerlijke video die past bij hoe mensen op TikTok kijken, kies je doel en start met een budget waarmee je kunt leren. Kijk naar je kosten per resultaat, niet naar losse klikken. De basis van een goede start vind je in onze <Link to="/blogs/social-ads/tiktok-adverteren-2026-complete-gids-beginners" className="text-accent hover:underline">complete gids voor TikTok-adverteren</Link>.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Werkt een video, geef die dan meer ruimte. Slaat iets niet aan, stop het en probeer een andere insteek. Wil je sparren over de juiste mix van TikTok-formaten voor jouw merk? Plan een gesprek via empowers.nl/contact.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Veelgestelde vragen</h2>
                    </div>

                    <section className="mt-4">
                        <div className="space-y-6 not-prose">
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat is het verschil tussen In-feed Ads en TopView op TikTok?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    In-feed Ads verschijnen tussen de organische video's in de For You-feed terwijl iemand scrolt, en die koop je in via een veiling waarbij je je eigen budget bepaalt. TopView is de video die mensen zien als ze de app openen, een full-screen plek bovenaan die je vooraf inkoopt als reservering. In-feed stuurt op verkoop en is betaalbaar, TopView koopt in één keer maximale aandacht.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat kost TopView vergeleken met In-feed Ads?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    TopView ligt fors hoger dan In-feed. Je koopt het in als een reservering tegen een vast bedrag voor een dag of plaatsing, los van een veiling. In-feed reken je af per vertoning of klik en je houdt zelf de hand op je budget. Daardoor is in-feed het kanaal waarmee de meeste MKB-bedrijven beginnen en is TopView eerder iets voor merken met een groot lanceerbudget.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Welke advertentievorm is beter voor een webshop?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Voor de meeste webshops zijn In-feed Ads de logische keuze. Je kunt sturen op verkoop, je budget schaalt mee met wat werkt en je betaalt voor resultaat in plaats van voor een vaste plek. TopView werkt pas als je een groot moment wilt neerzetten, zoals een seizoenslancering of een nieuwe collectie, en het budget hebt om die piek te betalen.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoe lang mag een In-feed Ad of TopView duren?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Beide vormen kunnen tot zestig seconden duren. In de praktijk werkt korter vaak beter, omdat mensen op TikTok snel beslissen of ze blijven kijken. Voor In-feed houden veel adverteerders het op een filmpje van ongeveer tien tot vijftien seconden. Bij TopView heb je de eerste seconden van volle aandacht, dus daar telt het begin het zwaarst.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Kun je In-feed Ads en TopView combineren?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Ja, en dat is vaak het sterkst. TopView zet op een lanceerdag een grote piek aan aandacht neer, en met In-feed Ads vang je die aandacht daarna op en stuur je mensen door naar de aankoop. Zo gebruik je het dure kanaal voor bereik en het betaalbare kanaal voor de verkoop die erop volgt.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Is TopView geschikt voor een MKB-budget?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Meestal niet als losse keuze. TopView is een premium plaatsing met een vast inkoopbedrag dat voor veel kleinere bedrijven te zwaar drukt op de campagne. Wil je toch grote zichtbaarheid, dan haal je met een goed opgezette In-feed campagne en sterke video's vaak meer rendement uit hetzelfde budget. Test eerst klein voordat je naar een groot reserveringsbudget grijpt.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="mt-16 pt-12 border-t border-primary/10">
                        <h3 className="text-xl font-bold text-primary mb-6">Lees ook</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <Link to="/blogs/social-ads/goede-cpm-tiktok-benchmarks" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Een goede CPM op TikTok</h3>
                                <p className="text-primary/60 text-sm">Wat je realistisch betaalt per duizend vertoningen.</p>
                            </Link>
                            <Link to="/blogs/social-ads/tiktok-ads-video-converteert" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Video's die converteren</h3>
                                <p className="text-primary/60 text-sm">Welke content tot verkoop aanzet.</p>
                            </Link>
                            <Link to="/blogs/social-ads/tiktok-adverteren-2026-complete-gids-beginners" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Complete gids voor beginners</h3>
                                <p className="text-primary/60 text-sm">Zo start je met adverteren op TikTok.</p>
                            </Link>
                        </div>
                    </section>
                </div>
            </article>

            <section className="w-full pb-32 px-6">
                <div className="max-w-4xl mx-auto bg-primary rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
                    <h2 className="relative z-10 font-drama italic text-background text-3xl sm:text-4xl md:text-5xl mb-6">Haal meer uit je TikTok-budget</h2>
                    <p className="relative z-10 font-sans text-background/70 text-lg mb-10 max-w-xl mx-auto">We kiezen de juiste mix van TikTok-formaten en bouwen video's die sturen op verkoop in plaats van op losse views. Benieuwd wat dat voor jouw merk oplevert?</p>
                    <Link to="/contact" className="relative z-10 btn-magnetic inline-flex items-center justify-center bg-accent text-background font-sans font-bold text-lg px-10 py-4 rounded-[2rem] hover:bg-accent/90 transition-colors">Neem contact op</Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
