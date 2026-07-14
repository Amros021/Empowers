import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ChevronRight, User } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function BlogPostCustomAudiencesMetaAdsSegmenteren() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen selection:bg-accent/30 selection:text-dark flex flex-col bg-background">
            <Helmet>
                <title>Custom audiences in Meta Ads: zo segmenteer je jouw doelgroep slim | Empowers</title>
                <meta name="description" content="Custom audiences in Meta Ads laten je adverteren op mensen die je al kent: bezoekers, klanten en volgers. Zo bouw je ze op en segmenteer je je doelgroep slim." />
                <link rel="canonical" href="https://www.empowers.nl/blogs/social-ads/custom-audiences-meta-ads-segmenteren" />
                <meta property="og:title" content="Custom audiences in Meta Ads: zo segmenteer je jouw doelgroep slim" />
                <meta property="og:description" content="Adverteer op mensen die je al kennen. Zo bouw je custom audiences op en segmenteer je slim in Meta Ads." />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://www.empowers.nl/blogs/social-ads/custom-audiences-meta-ads-segmenteren" />
                <meta property="og:image" content="https://www.empowers.nl/images/blogs/custom-audiences-meta-ads-segmenteren.jpg" />
                <meta property="article:published_time" content="2026-06-28T10:00:00+02:00" />
                <meta property="article:author" content="Empowers" />
                <meta property="article:section" content="Social Ads" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Custom audiences in Meta Ads: zo segmenteer je jouw doelgroep slim" />
                <meta name="twitter:description" content="Zo bouw je custom audiences op en segmenteer je slim in Meta Ads." />

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@graph": [
                            {
                                "@type": "Article",
                                "headline": "Custom audiences in Meta Ads: zo segmenteer je jouw doelgroep slim",
                                "description": "Custom audiences in Meta Ads laten je adverteren op mensen die je al kent: bezoekers, klanten en volgers. Zo bouw je ze op en segmenteer je je doelgroep slim.",
                                "image": "https://www.empowers.nl/images/blogs/custom-audiences-meta-ads-segmenteren.jpg",
                                "datePublished": "2026-06-28T10:00:00+02:00",
                                "dateModified": "2026-06-28T10:00:00+02:00",
                                "author": { "@type": "Organization", "name": "Empowers" },
                                "publisher": {
                                    "@type": "Organization", "name": "Empowers", "url": "https://www.empowers.nl",
                                    "logo": { "@type": "ImageObject", "url": "https://www.empowers.nl/empowers-logo-color.svg" }
                                },
                                "mainEntityOfPage": "https://www.empowers.nl/blogs/social-ads/custom-audiences-meta-ads-segmenteren"
                            },
                            {
                                "@type": "BreadcrumbList",
                                "itemListElement": [
                                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.empowers.nl" },
                                    { "@type": "ListItem", "position": 2, "name": "Blogs", "item": "https://www.empowers.nl/blogs" },
                                    { "@type": "ListItem", "position": 3, "name": "Social Ads", "item": "https://www.empowers.nl/blogs/social-ads" },
                                    { "@type": "ListItem", "position": 4, "name": "Custom audiences in Meta Ads", "item": "https://www.empowers.nl/blogs/social-ads/custom-audiences-meta-ads-segmenteren" }
                                ]
                            },
                            {
                                "@type": "FAQPage",
                                "mainEntity": [
                                    {
                                        "@type": "Question",
                                        "name": "Wat is een custom audience in Meta Ads?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Een custom audience is een doelgroep van mensen die je al kent. Je bouwt hem op uit je eigen bronnen, zoals websitebezoekers, een klantenlijst, mensen die je video bekeken of je Instagram-pagina volgen. In plaats van adverteren op een koud publiek richt je je op mensen die al contact met je hadden."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Welke custom audiences kun je maken?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Je maakt audiences uit eigen bronnen of uit bronnen binnen Meta. Eigen bronnen zijn je websiteverkeer via de pixel, een geüploade klantenlijst en activiteit in je app. Bronnen binnen Meta zijn mensen die je video's keken, met je Facebook-pagina interacteerden of je Instagram-account volgden. Elke bron geeft een ander soort warm publiek."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Wat is het verschil tussen een custom audience en een lookalike audience?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Een custom audience bestaat uit mensen die je al kent. Een lookalike audience is een nieuw, koud publiek dat Meta samenstelt op basis van een custom audience: mensen die lijken op je bestaande klanten of bezoekers. De custom audience is dus de basis waarvan je een lookalike laat afleiden om nieuwe mensen te bereiken."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Hoe groot moet een custom audience zijn?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Groot genoeg om te leveren, klein genoeg om relevant te blijven. Een heel kleine lijst van enkele tientallen mensen kan Meta vaak niet goed bereiken. Voor retargeting werkt een wat kleiner, warm publiek prima. Wil je een lookalike laten bouwen, dan is een bronlijst van enkele honderden tot duizenden mensen een betere basis."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Heb ik de Meta Pixel nodig voor custom audiences?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Voor audiences op basis van websiteverkeer wel. De pixel registreert wie je site bezoekt en welke pagina's, zodat je daarop kunt retargeten. Voor andere audiences, zoals een klantenlijst of mensen die je Instagram volgen, heb je de pixel niet nodig. Voor goede webcampagnes is een werkende pixel en conversiemeting wel een must."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Hoe segmenteer je custom audiences slim?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Splits op gedrag en op hoe warm iemand is. Iemand die alleen je homepage zag, is kouder dan iemand die een product in zijn winkelmand legde. Maak aparte audiences voor bezoekers, mensen die bijna kochten en bestaande klanten, en geef elke groep een eigen boodschap. Zo sluit je advertentie aan op waar iemand staat."
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
                        <span className="text-primary truncate">Custom audiences in Meta Ads</span>
                    </nav>

                    <header className="mb-16">
                        <div className="inline-block px-3 py-1 bg-accent/10 text-accent font-mono text-xs uppercase tracking-widest rounded-full mb-6">
                            Social Ads
                        </div>
                        <h1 className="font-sans font-bold text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight mb-8">
                            Custom audiences in Meta Ads: zo segmenteer je jouw doelgroep slim
                        </h1>

                        <div className="flex flex-wrap items-center gap-6 text-sm font-sans text-primary/60 border-y border-primary/10 py-6">
                            <div className="flex items-center gap-2"><User className="w-4 h-4" /><span>Empowers Redactie</span></div>
                            <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>28 juni 2026</span></div>
                            <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>8 minuten leestijd</span></div>
                        </div>
                    </header>

                    <figure className="w-full h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden mb-16 relative bg-primary">
                        <div className="absolute inset-0 bg-[url('/images/blogs/custom-audiences-meta-ads-segmenteren.jpg')] bg-cover bg-center opacity-40 mix-blend-overlay" style={{backgroundImage: "url('/images/blogs/custom-audiences-meta-ads-segmenteren.jpg')"}}></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </figure>

                    <div className="prose prose-lg max-w-none prose-headings:text-primary prose-headings:font-bold prose-a:text-accent prose-a:underline hover:prose-a:text-accent/80">
                        <p className="text-xl leading-relaxed text-primary/80 font-medium mb-6">
                            Een custom audience in Meta Ads is een doelgroep van mensen die je al kent. Je bouwt hem op uit je eigen bronnen: websitebezoekers, een klantenlijst, mensen die je video bekeken of je Instagram volgen. Door die groepen apart te benaderen met een passende boodschap, adverteer je op warm publiek in plaats van op vreemden. Dat verlaagt je kosten en verhoogt je conversie.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat is een custom audience precies?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Het is een lijst met mensen die al een vorm van contact met je hadden. Geen koud publiek dat je op interesses bereikt, maar mensen die je site bezochten, iets kochten of je content zagen. Meta koppelt die mensen aan hun account, zodat je ze gericht een advertentie kunt tonen. Je adverteert dus op een relatie die er al is.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Het verschil met gewone targeting is groot. Bij interessetargeting gokt Meta wie bij je past op basis van gedrag en kenmerken. Bij een custom audience weet je het zeker, want jij levert de mensen aan. Daarom presteren deze doelgroepen vaak beter: je praat tegen mensen die je naam al kennen en niet meer overtuigd hoeven worden dat je bestaat.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Welke custom audiences kun je opbouwen?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Grofweg zijn er twee soorten bronnen. Je eigen bronnen, zoals je websiteverkeer via de Meta Pixel, een geüploade klantenlijst met e-mailadressen en activiteit in je app. En bronnen binnen Meta zelf, zoals mensen die je video's bekeken, die met je Facebook-pagina interacteerden of die je Instagram-account volgen. Elke bron levert een ander soort warm publiek op.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Die laatste groep wordt vaak onderschat. Mensen die een groot deel van je video keken of je profiel bezochten, toonden interesse zonder ooit je site te bezoeken. Dat is gratis opgebouwd publiek waar je iets mee kunt. Voor websiteverkeer heb je wel een goed werkende pixel nodig, en hoe je die instelt lees je in onze blog over <Link to="/blogs/social-ads/meta-pixel-instellen-stap-stap" className="text-accent hover:underline">de Meta Pixel instellen</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat is het verschil met een lookalike audience?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Deze twee worden vaak door elkaar gehaald, maar ze doen iets heel anders. Een custom audience bestaat uit mensen die je al kent. Een lookalike audience is juist een nieuw, koud publiek dat Meta samenstelt op basis van een custom audience. Het systeem zoekt mensen die lijken op je bestaande klanten of bezoekers en presenteert die als nieuwe doelgroep.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De custom audience is dus de basis, de lookalike is de uitbreiding. Hoe beter je bronlijst, hoe scherper de lookalike die Meta eruit afleidt. Een lijst van je beste klanten levert betere lookalikes op dan een lijst van alle bezoekers. Hoe je dat goed aanpakt, lees je in onze aparte gids over <Link to="/blogs/social-ads/lookalike-audiences-meta-ads-gids" className="text-accent hover:underline">lookalike audiences in Meta Ads</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe segmenteer je je doelgroep slim?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Splits je mensen op hoe warm ze zijn. Iemand die één keer je homepage zag, staat heel anders tegenover je dan iemand die een product in zijn winkelmand legde maar niet afrekende. Maak aparte audiences voor losse bezoekers, voor mensen die bijna kochten en voor bestaande klanten. Drie groepen, drie totaal verschillende boodschappen.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Pas daarna je advertentie aan op elke groep. Een twijfelaar die zijn winkelmand liet staan, heeft baat bij een herinnering of een laatste duwtje. Een bestaande klant wil eerder een nieuw product of een aanbod zien. We zien bij adverteerders dat juist deze splitsing het verschil maakt, omdat één boodschap voor iedereen altijd voor iemand de verkeerde is. Hoe je verloren bezoekers terughaalt, lees je in onze blog over <Link to="/blogs/social-ads/retargeting-meta-ads-haal-verloren" className="text-accent hover:underline">retargeting via Meta Ads</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe groot moet een custom audience zijn?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Er is een ondergrens. Een lijst van enkele tientallen mensen kan Meta vaak niet goed bereiken, omdat de match met accounts te klein wordt. Voor retargeting werkt een wat kleiner warm publiek prima, want die mensen kennen je al. Wil je een lookalike laten bouwen, dan is een bron van enkele honderden tot duizenden mensen een veel betere basis.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Let ook op de tijdsvensters. Je kunt een audience maken van bezoekers uit de laatste week, de laatste maand of een langere periode. Een korte periode geeft een klein maar heel warm publiek, een lange periode een groter maar koeler publiek. Kies het venster dat past bij hoe lang jouw aankoopproces duurt. Een impulsproduct heeft een korter venster nodig dan een dure aankoop waar mensen weken over nadenken.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Welke fouten maken adverteerders met custom audiences?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De meest gemaakte fout is alle bezoekers op één hoop gooien en iedereen dezelfde advertentie tonen. Daarmee gooi je het grootste voordeel weg: het feit dat je weet hoe warm iemand is. Een tweede fout is je klanten niet uitsluiten in je werfcampagnes, waardoor je betaalt om mensen te bereiken die al kochten.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een derde valkuil is een verlopen of vervuilde bronlijst. Een klantenlijst van jaren oud met verkeerde e-mailadressen levert een zwakke audience op. Ververs je lijsten en houd je pixel gezond, zodat je data klopt. Goede audiences staan of vallen met goede data, net als de bredere doelgroepkeuzes uit onze blog over <Link to="/blogs/social-ads/meta-ads-doelgroepen" className="text-accent hover:underline">Meta Ads doelgroepen instellen</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Waar begin je deze week?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Maak drie audiences om mee te starten. Eén van al je websitebezoekers van de laatste dertig dagen, één van mensen die een product bekeken of in hun mand legden, en één van je bestaande klanten via een geüploade lijst. Sluit die klanten daarna uit in je werfcampagnes. Met deze drie heb je meteen een logische opbouw van koud naar warm.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Custom audiences zijn het verschil tussen schieten met hagel en gericht mikken. Bouw ze op uit je eigen bronnen, splits ze op hoe warm mensen zijn en geef elke groep een boodschap die past. Doe je dat, dan werkt elke euro advertentiebudget een stuk harder voor je.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Veelgestelde vragen</h2>
                    </div>

                    <section className="mt-4">
                        <div className="space-y-6 not-prose">
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat is een custom audience in Meta Ads?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Een custom audience is een doelgroep van mensen die je al kent. Je bouwt hem op uit je eigen bronnen, zoals websitebezoekers, een klantenlijst, mensen die je video bekeken of je Instagram-pagina volgen. In plaats van adverteren op een koud publiek richt je je op mensen die al contact met je hadden.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Welke custom audiences kun je maken?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Je maakt audiences uit eigen bronnen of uit bronnen binnen Meta. Eigen bronnen zijn je websiteverkeer via de pixel, een geüploade klantenlijst en activiteit in je app. Bronnen binnen Meta zijn mensen die je video's keken, met je Facebook-pagina interacteerden of je Instagram-account volgden. Elke bron geeft een ander soort warm publiek.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat is het verschil tussen een custom audience en een lookalike audience?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Een custom audience bestaat uit mensen die je al kent. Een lookalike audience is een nieuw, koud publiek dat Meta samenstelt op basis van een custom audience: mensen die lijken op je bestaande klanten of bezoekers. De custom audience is dus de basis waarvan je een lookalike laat afleiden om nieuwe mensen te bereiken.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoe groot moet een custom audience zijn?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Groot genoeg om te leveren, klein genoeg om relevant te blijven. Een heel kleine lijst van enkele tientallen mensen kan Meta vaak niet goed bereiken. Voor retargeting werkt een wat kleiner, warm publiek prima. Wil je een lookalike laten bouwen, dan is een bronlijst van enkele honderden tot duizenden mensen een betere basis.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Heb ik de Meta Pixel nodig voor custom audiences?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Voor audiences op basis van websiteverkeer wel. De pixel registreert wie je site bezoekt en welke pagina's, zodat je daarop kunt retargeten. Voor andere audiences, zoals een klantenlijst of mensen die je Instagram volgen, heb je de pixel niet nodig. Voor goede webcampagnes is een werkende pixel en conversiemeting wel een must.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoe segmenteer je custom audiences slim?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Splits op gedrag en op hoe warm iemand is. Iemand die alleen je homepage zag, is kouder dan iemand die een product in zijn winkelmand legde. Maak aparte audiences voor bezoekers, mensen die bijna kochten en bestaande klanten, en geef elke groep een eigen boodschap. Zo sluit je advertentie aan op waar iemand staat.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="mt-16 pt-12 border-t border-primary/10">
                        <h3 className="text-xl font-bold text-primary mb-6">Lees ook</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <Link to="/blogs/social-ads/lookalike-audiences-meta-ads-gids" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Lookalike audiences</h3>
                                <p className="text-primary/60 text-sm">Nieuw publiek vinden dat lijkt op je klanten.</p>
                            </Link>
                            <Link to="/blogs/social-ads/retargeting-meta-ads-haal-verloren" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Retargeting in Meta</h3>
                                <p className="text-primary/60 text-sm">Verloren bezoekers terughalen en laten kopen.</p>
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
                    <h2 className="relative z-10 font-drama italic text-background text-3xl sm:text-4xl md:text-5xl mb-6">Adverteer op de mensen die je al kennen</h2>
                    <p className="relative z-10 font-sans text-background/70 text-lg mb-10 max-w-xl mx-auto">We bouwen je audiences op uit je eigen data en geven elke groep de boodschap die past. Benieuwd hoeveel scherper jouw targeting kan?</p>
                    <Link to="/contact" className="relative z-10 btn-magnetic inline-flex items-center justify-center bg-accent text-background font-sans font-bold text-lg px-10 py-4 rounded-[2rem] hover:bg-accent/90 transition-colors">Neem contact op</Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
