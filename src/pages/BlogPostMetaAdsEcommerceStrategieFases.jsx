import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ChevronRight, User } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function BlogPostMetaAdsEcommerceStrategieFases() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen selection:bg-accent/30 selection:text-dark flex flex-col bg-background">
            <Helmet>
                <title>Meta Ads voor e-commerce: de beste strategie per fase | Empowers</title>
                <meta name="description" content="Meta Ads voor e-commerce werkt het best als je per fase adverteert: koud bereik, twijfelaars, bijna-kopers en bestaande klanten. Zo bouw je de juiste strategie op." />
                <link rel="canonical" href="https://www.empowers.nl/blogs/social-ads/meta-ads-e-commerce-strategie-fases" />
                <meta property="og:title" content="Meta Ads voor e-commerce: de beste strategie per fase" />
                <meta property="og:description" content="Adverteer per fase: van koud bereik tot bestaande klanten. Zo bouw je een Meta Ads strategie die je webshop laat groeien." />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://www.empowers.nl/blogs/social-ads/meta-ads-e-commerce-strategie-fases" />
                <meta property="og:image" content="https://www.empowers.nl/images/blogs/meta-ads-e-commerce-strategie-fases.jpg" />
                <meta property="article:published_time" content="2026-07-02T10:00:00+02:00" />
                <meta property="article:author" content="Empowers" />
                <meta property="article:section" content="Social Ads" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Meta Ads voor e-commerce: de beste strategie per fase" />
                <meta name="twitter:description" content="Adverteer per fase: van koud bereik tot bestaande klanten. Zo bouw je een Meta Ads strategie die je webshop laat groeien." />

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@graph": [
                            {
                                "@type": "Article",
                                "headline": "Meta Ads voor e-commerce: de beste strategie per fase",
                                "description": "Meta Ads voor e-commerce werkt het best als je per fase adverteert: koud bereik, twijfelaars, bijna-kopers en bestaande klanten. Zo bouw je de juiste strategie op.",
                                "image": "https://www.empowers.nl/images/blogs/meta-ads-e-commerce-strategie-fases.jpg",
                                "datePublished": "2026-07-02T10:00:00+02:00",
                                "dateModified": "2026-07-02T10:00:00+02:00",
                                "author": { "@type": "Organization", "name": "Empowers" },
                                "publisher": {
                                    "@type": "Organization", "name": "Empowers", "url": "https://www.empowers.nl",
                                    "logo": { "@type": "ImageObject", "url": "https://www.empowers.nl/empowers-logo-color.svg" }
                                },
                                "mainEntityOfPage": "https://www.empowers.nl/blogs/social-ads/meta-ads-e-commerce-strategie-fases"
                            },
                            {
                                "@type": "BreadcrumbList",
                                "itemListElement": [
                                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.empowers.nl" },
                                    { "@type": "ListItem", "position": 2, "name": "Blogs", "item": "https://www.empowers.nl/blogs" },
                                    { "@type": "ListItem", "position": 3, "name": "Social Ads", "item": "https://www.empowers.nl/blogs/social-ads" },
                                    { "@type": "ListItem", "position": 4, "name": "Meta Ads voor e-commerce per fase", "item": "https://www.empowers.nl/blogs/social-ads/meta-ads-e-commerce-strategie-fases" }
                                ]
                            },
                            {
                                "@type": "FAQPage",
                                "mainEntity": [
                                    {
                                        "@type": "Question",
                                        "name": "Wat is de beste Meta Ads strategie voor een webshop?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "De beste strategie verdeelt je advertenties over de fase waarin een klant zit. Je bereikt eerst mensen die je nog niet kennen, overtuigt daarna de twijfelaars, haalt bijna-kopers over de streep en verkoopt opnieuw aan bestaande klanten. Elke fase krijgt een eigen boodschap en een eigen doel, zodat je budget op het juiste moment werkt."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Hoeveel budget moet ik over de fases verdelen?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Een gangbare verdeling is het grootste deel naar koud bereik, omdat dat de motor van je groei is, en kleinere delen naar twijfelaars en bijna-kopers. Veel webshops zetten ongeveer twee derde op nieuw publiek en een derde op retargeting. Heeft je shop nog weinig verkeer, dan ligt de nadruk eerst op bereik."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Wat is een goede ROAS voor een webshop op Meta Ads?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Dat hangt sterk af van je marge en je gemiddelde orderwaarde. Veel webshops mikken op een ROAS van rond de 3 of hoger, omdat daar na advertentiekosten nog winst overblijft. Een shop met hoge marges kan op een lagere ROAS al winst maken, terwijl een shop met krappe marges een hogere ROAS nodig heeft om uit de kosten te komen."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Heb ik retargeting echt nodig voor mijn webshop?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Voor de meeste webshops wel. De meeste bezoekers kopen niet bij hun eerste bezoek, zeker niet bij een duurder product. Retargeting brengt die mensen terug met een herinnering of een laatste duwtje. Zonder retargeting laat je een groot deel van je bijna-kopers links liggen en betaal je opnieuw om nieuw publiek te bereiken."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Welke campagnedoelen gebruik je per fase?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Voor koud bereik gebruik je meestal het doel verkopen of verkeer, zodat Meta leert wie geneigd is te kopen. Voor twijfelaars en bijna-kopers kies je het doel verkopen met retargeting-doelgroepen. Voor bestaande klanten werkt verkopen met een aparte boodschap en een geüploade klantenlijst het best."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Hoe lang duurt het voordat Meta Ads voor mijn webshop werkt?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Reken op een paar weken voordat je betrouwbare cijfers ziet. Meta heeft conversies nodig om te leren wie koopt, en die leerfase kost tijd en budget. In de eerste weken stuur je weinig bij. Daarna optimaliseer je op basis van wat de cijfers laten zien, zoals welke doelgroep en welke advertentie het meeste opleveren."
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
                        <span className="text-primary truncate">Meta Ads voor e-commerce per fase</span>
                    </nav>

                    <header className="mb-16">
                        <div className="inline-block px-3 py-1 bg-accent/10 text-accent font-mono text-xs uppercase tracking-widest rounded-full mb-6">
                            Social Ads
                        </div>
                        <h1 className="font-sans font-bold text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight mb-8">
                            Meta Ads voor e-commerce: de beste strategie per fase
                        </h1>

                        <div className="flex flex-wrap items-center gap-6 text-sm font-sans text-primary/60 border-y border-primary/10 py-6">
                            <div className="flex items-center gap-2"><User className="w-4 h-4" /><span>Empowers Redactie</span></div>
                            <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>2 juli 2026</span></div>
                            <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>9 minuten leestijd</span></div>
                        </div>
                    </header>

                    <figure className="w-full h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden mb-16 relative bg-primary">
                        <div className="absolute inset-0 bg-[url('/images/blogs/meta-ads-e-commerce-strategie-fases.jpg')] bg-cover bg-center opacity-40 mix-blend-overlay" style={{backgroundImage: "url('/images/blogs/meta-ads-e-commerce-strategie-fases.jpg')"}}></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </figure>

                    <div className="prose prose-lg max-w-none prose-headings:text-primary prose-headings:font-bold prose-a:text-accent prose-a:underline hover:prose-a:text-accent/80">
                        <p className="text-xl leading-relaxed text-primary/80 font-medium mb-6">
                            Meta Ads voor e-commerce werkt het best als je niet iedereen dezelfde advertentie toont, maar adverteert op de fase waarin een klant zit. Je bereikt eerst mensen die je nog niet kennen, overtuigt daarna de twijfelaars, haalt bijna-kopers over de streep en verkoopt opnieuw aan bestaande klanten. Vier fases, vier doelen, vier boodschappen. Zo werkt elke euro budget op het juiste moment.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat betekent adverteren per fase voor een webshop?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Het betekent dat je je advertenties afstemt op hoe ver iemand is in zijn aankoopproces. Iemand die je merk nog nooit zag, heeft iets heel anders nodig dan iemand die gisteren een product in zijn winkelmand legde. De eerste moet je nog overtuigen dat je bestaat. De tweede heeft alleen een zetje nodig.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Webshops die alles op één hoop gooien, verbranden budget. Ze tonen een kortingscode aan mensen die nog nooit van ze hoorden, of betalen om klanten te bereiken die vorige week al kochten. Door je campagnes te splitsen op fase praat je tegen elke groep in de juiste taal. Dat verlaagt je kosten per aankoop en houdt je advertenties relevant. Dezelfde logica vormt de basis van een goede <Link to="/blogs/social-ads/effectieve-meta-ads-funnel" className="text-accent hover:underline">Meta Ads funnel</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe bereik je mensen die je nog niet kennen?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Dit is de fase van koud bereik, en voor de meeste webshops de motor van de groei. Je richt je op een breed publiek dat je merk nog niet kent. Meta is hier sterk in: geef het systeem een duidelijk doel, zoals aankopen, en het zoekt zelf de mensen die het meest geneigd zijn te kopen. Je hoeft niet meer alle interesses handmatig in te stellen.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De boodschap in deze fase draait om aandacht en vertrouwen. Laat zien wat je verkoopt, waarom het beter is en waarom mensen je vertrouwen. Een sterke video of een eerlijke klantreview doet hier meer dan een harde korting. Je vraagt nog niet om de verkoop, je opent de deur. Zorg wel dat je conversies goed meet, want zonder betrouwbare data leert Meta de verkeerde mensen kennen.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe overtuig je mensen die twijfelen?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De twijfelaars zijn mensen die je advertentie zagen, je video bekeken of je site bezochten zonder iets te kopen. Ze kennen je nu, maar zijn nog niet om. Hier komt retargeting in beeld: je toont opnieuw een advertentie aan mensen die al een vorm van contact hadden. Dat publiek is warmer en converteert vaak beter dan koud bereik.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            In deze fase neem je de twijfel weg. Beantwoord de vraag die mensen tegenhoudt: is dit het waard, klopt de kwaliteit, hoe zit het met verzending en retour. Reviews, een productdemo of een veelgestelde vraag werken goed. Je bouwt voort op de aandacht die je in de eerste fase opbouwde, zonder meteen met korting te smijten. Welke doelgroepen je hiervoor opbouwt, lees je in onze blog over <Link to="/blogs/social-ads/custom-audiences-meta-ads-segmenteren" className="text-accent hover:underline">custom audiences in Meta Ads</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe haal je bijna-kopers over de streep?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Bijna-kopers zijn je heetste publiek. Denk aan mensen die een product bekeken, in hun winkelmand legden of bij het afrekenen afhaakten. Ze waren een klik verwijderd van een aankoop. Een klein zetje is hier vaak genoeg, en juist daarom levert deze groep meestal de hoogste ROAS op van al je campagnes.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Hier mag je concreter worden. Toon precies het product dat iemand bekeek, herinner aan de achtergelaten winkelmand of geef een laatste reden om nu te kopen, zoals gratis verzending of beperkte voorraad. Een dynamische advertentie die automatisch het juiste product laat zien, werkt in deze fase uitstekend. Houd wel je frequentie in de gaten, want te vaak dezelfde advertentie tonen werkt averechts. Hoe je verloren bezoekers terughaalt, behandelen we in onze blog over <Link to="/blogs/social-ads/retargeting-meta-ads-haal-verloren" className="text-accent hover:underline">retargeting via Meta Ads</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe verdien je meer aan klanten die al kochten?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De fase die de meeste webshops vergeten. Iemand die al bij je kocht, kent je, vertrouwt je en koopt sneller opnieuw. Toch stoppen veel adverteerders na de eerste verkoop. Door bestaande klanten apart te benaderen, haal je meer omzet uit mensen die je niet opnieuw hoeft te overtuigen.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Upload je klantenlijst als aparte doelgroep en geef ze een eigen boodschap: een nieuw product, een aanvulling op wat ze kochten of een aanbod voor terugkerende klanten. We zien bij webshops dat deze groep vaak de goedkoopste omzet oplevert, simpelweg omdat de relatie er al is. Een tweede aankoop kost meestal minder advertentiebudget dan de eerste.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoeveel budget verdeel je over de fases?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Het grootste deel van je budget hoort naar koud bereik te gaan. Dat is logisch: zonder nieuw publiek droogt je hele funnel uit en heb je straks niemand meer om naar te retargeten. Veel webshops zetten ongeveer twee derde van het budget op nieuw publiek en verdelen de rest over twijfelaars, bijna-kopers en bestaande klanten.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Die verdeling is geen wet. Heeft je shop nog weinig verkeer, dan ligt de nadruk eerst bijna helemaal op bereik, want je retargeting-doelgroepen zijn dan nog te klein om iets mee te doen. Draait je shop al goed, dan kun je meer naar de warme fases schuiven omdat die de hoogste ROAS leveren. Kijk naar je cijfers en stuur bij op wat werkt, niet op een vaste formule. Wat een gezonde ROAS is voor jouw situatie, lees je in onze gids over <Link to="/blogs/social-ads/goede-roas-meta-ads-benchmarks" className="text-accent hover:underline">een goede ROAS op Meta Ads</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Welke fouten maken webshops met deze opzet?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De grootste fout is te vroeg willen oogsten. Adverteerders zetten al hun geld op retargeting omdat dat de mooiste ROAS laat zien, en vergeten dat die warme doelgroep alleen bestaat dankzij koud bereik. Na een paar weken stokt de groei, want er komt geen nieuw publiek meer binnen. Je teert in op een doelgroep die je niet aanvult.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een andere veelgemaakte fout is bestaande klanten niet uitsluiten in je werfcampagnes. Dan betaal je om mensen te bereiken die vorige maand al kochten. Ook gevaarlijk: je conversiemeting niet op orde hebben. Klopt je data niet, dan optimaliseert Meta op de verkeerde signalen en gooi je budget weg zonder het te merken.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Waar begin je deze week?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Begin met je meting. Controleer of je aankopen en je winkelmand-acties goed binnenkomen, want al het andere bouwt daarop voort. Zet daarna één campagne op koud bereik met je beste video of productfoto en een duidelijk verkoopdoel. Maak vervolgens een retargeting-campagne voor mensen die je site bezochten maar niet kochten.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Adverteren per fase is geen trucje, het is gewoon je advertenties laten aansluiten op waar de klant staat. Bereik nieuwe mensen, neem twijfels weg, haal bijna-kopers binnen en blijf verkopen aan wie al kocht. Doe je dat, dan groeit je webshop met een systeem dat zichzelf voedt in plaats van met losse campagnes die elkaar in de weg zitten.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Veelgestelde vragen</h2>
                    </div>

                    <section className="mt-4">
                        <div className="space-y-6 not-prose">
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat is de beste Meta Ads strategie voor een webshop?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    De beste strategie verdeelt je advertenties over de fase waarin een klant zit. Je bereikt eerst mensen die je nog niet kennen, overtuigt daarna de twijfelaars, haalt bijna-kopers over de streep en verkoopt opnieuw aan bestaande klanten. Elke fase krijgt een eigen boodschap en een eigen doel, zodat je budget op het juiste moment werkt.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoeveel budget moet ik over de fases verdelen?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Een gangbare verdeling is het grootste deel naar koud bereik, omdat dat de motor van je groei is, en kleinere delen naar twijfelaars en bijna-kopers. Veel webshops zetten ongeveer twee derde op nieuw publiek en een derde op retargeting. Heeft je shop nog weinig verkeer, dan ligt de nadruk eerst op bereik.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat is een goede ROAS voor een webshop op Meta Ads?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Dat hangt sterk af van je marge en je gemiddelde orderwaarde. Veel webshops mikken op een ROAS van rond de 3 of hoger, omdat daar na advertentiekosten nog winst overblijft. Een shop met hoge marges kan op een lagere ROAS al winst maken, terwijl een shop met krappe marges een hogere ROAS nodig heeft om uit de kosten te komen.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Heb ik retargeting echt nodig voor mijn webshop?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Voor de meeste webshops wel. De meeste bezoekers kopen niet bij hun eerste bezoek, zeker niet bij een duurder product. Retargeting brengt die mensen terug met een herinnering of een laatste duwtje. Zonder retargeting laat je een groot deel van je bijna-kopers links liggen en betaal je opnieuw om nieuw publiek te bereiken.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Welke campagnedoelen gebruik je per fase?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Voor koud bereik gebruik je meestal het doel verkopen of verkeer, zodat Meta leert wie geneigd is te kopen. Voor twijfelaars en bijna-kopers kies je het doel verkopen met retargeting-doelgroepen. Voor bestaande klanten werkt verkopen met een aparte boodschap en een geüploade klantenlijst het best.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoe lang duurt het voordat Meta Ads voor mijn webshop werkt?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Reken op een paar weken voordat je betrouwbare cijfers ziet. Meta heeft conversies nodig om te leren wie koopt, en die leerfase kost tijd en budget. In de eerste weken stuur je weinig bij. Daarna optimaliseer je op basis van wat de cijfers laten zien, zoals welke doelgroep en welke advertentie het meeste opleveren.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="mt-16 pt-12 border-t border-primary/10">
                        <h3 className="text-xl font-bold text-primary mb-6">Lees ook</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <Link to="/blogs/social-ads/effectieve-meta-ads-funnel" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">De Meta Ads funnel</h3>
                                <p className="text-primary/60 text-sm">Van koud bereik tot verkoop in één opzet.</p>
                            </Link>
                            <Link to="/blogs/social-ads/meta-ads-webshops-verhoog-omzet" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Meta Ads voor webshops</h3>
                                <p className="text-primary/60 text-sm">Meer omzet uit je advertenties halen.</p>
                            </Link>
                            <Link to="/blogs/social-ads" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Social Ads blogs</h3>
                                <p className="text-primary/60 text-sm">Meer uit Meta, Instagram en TikTok halen.</p>
                            </Link>
                        </div>
                    </section>
                </div>
            </article>

            <section className="w-full pb-32 px-6">
                <div className="max-w-4xl mx-auto bg-primary rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
                    <h2 className="relative z-10 font-drama italic text-background text-3xl sm:text-4xl md:text-5xl mb-6">Laat je webshop groeien met Meta Ads</h2>
                    <p className="relative z-10 font-sans text-background/70 text-lg mb-10 max-w-xl mx-auto">We bouwen een campagnestructuur die elke fase bedient, van koud bereik tot trouwe klant. Benieuwd wat dat voor jouw omzet kan betekenen?</p>
                    <Link to="/contact" className="relative z-10 btn-magnetic inline-flex items-center justify-center bg-accent text-background font-sans font-bold text-lg px-10 py-4 rounded-[2rem] hover:bg-accent/90 transition-colors">Neem contact op</Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
