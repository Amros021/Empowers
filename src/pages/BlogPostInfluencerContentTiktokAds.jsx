import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ChevronRight, User } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function BlogPostInfluencerContentTiktokAds() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen selection:bg-accent/30 selection:text-dark flex flex-col bg-background">
            <Helmet>
                <title>Hoe gebruik je influencer content in TikTok Ads (Spark Ads, rights, ROAS) | Empowers</title>
                <meta name="description" content="Influencer content in TikTok Ads schaalt vaak beter dan brand-content. Lees hoe je Spark Ads inzet, rechten regelt en welke ROAS realistisch is." />
                <link rel="canonical" href="https://www.empowers.nl/blogs/social-ads/influencer-content-tiktok-ads" />
                <meta property="og:title" content="Influencer content in TikTok Ads gebruiken: praktische gids" />
                <meta property="og:description" content="Spark Ads, rechten, ROAS, briefings: hoe je creator-content omzet in betere ad-performance." />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://www.empowers.nl/blogs/social-ads/influencer-content-tiktok-ads" />
                <meta property="og:image" content="https://www.empowers.nl/images/blogs/influencer-content-tiktok-ads.jpg" />
                <meta property="article:published_time" content="2026-05-08T11:00:00+02:00" />
                <meta property="article:author" content="Empowers" />
                <meta property="article:section" content="Social Ads" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Influencer content in TikTok Ads: zo werkt het" />
                <meta name="twitter:description" content="Spark Ads, briefings en rights management voor creator-content op TikTok." />

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Article",
                        "headline": "Hoe gebruik je influencer content in TikTok Ads",
                        "description": "Influencer content in TikTok Ads schaalt vaak beter dan brand-content.",
                        "image": "https://www.empowers.nl/images/blogs/influencer-content-tiktok-ads.jpg",
                        "datePublished": "2026-05-08T11:00:00+02:00",
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
                                    "name": "Wat is een Spark Ad?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Een Spark Ad is een TikTok-advertentie die een bestaande organische post van een creator gebruikt als advertentie. De like, comments en shares blijven behouden. Voor de viewer ziet het er authentiek uit, omdat het lijkt op een gewone TikTok-video die hij gewoon scrollend tegenkomt. De adverteerder betaalt voor het bereik en stuurt de targeting."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Waarom werkt creator-content vaak beter dan brand-content?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Het past bij de feed. TikTok-gebruikers herkennen merkadvertenties binnen drie seconden en scrollen door. Creator-content lijkt op de organische video's die ze gewoonlijk bekijken en hapt door die filter. Daardoor hogere watchtime, betere thumb-stop en uiteindelijk betere CPA. Resultaat is een effect dat in veel sectoren de standaard-brand-creative met dubbele cijfers verslaat."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Hoe regel je de rechten om influencer-content als ad te gebruiken?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Met een TikTok Ad Code, ofwel TAC. De creator deelt vanuit zijn eigen TikTok-account een tijdgebonden code die jij koppelt aan je Ads Manager. Daarmee mag je dat specifieke filmpje als Spark Ad runnen. Zonder TAC mag je de video niet als ad inzetten, ook niet als de creator akkoord is gegaan in een mailtje."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Wat moet er in een briefing staan voor een TikTok-creator?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Houd het kort. Je product en USP in twee regels, drie do's en drie don'ts, een paar referentie-video's die de stijl vangen, en de gewenste call-to-action. Geef vrijheid in de uitvoering. Creators presteren slechter zodra je een script aanlevert. Vertrouw op hun stem, omdat dat exact is wat je publiek herkent."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Welke ROAS is realistisch voor influencer-creatives?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Voor webshops zien we doorgaans 1,5 tot 3 keer betere ROAS bij creator-content vergeleken met klassieke brand-creatives, mits de creator past bij de doelgroep en het product geschikt is voor visuele uitleg. Voor B2B-software ligt het effect lager omdat de funnel langer is, maar ook daar voegt creator-content geloofwaardigheid toe in de eerste touchpoints."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Moet ik macro- of micro-influencers kiezen?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Voor TikTok Ads-content werken micro-creators (10.000 tot 100.000 volgers) bijna altijd beter dan macro's. Lagere productiekosten, authentiekere stijl, scherpere niche. Je betaalt minder per video en kunt meer creators tegelijk testen. Macro's hebben hun plek bij grote brand-campagnes met awareness-doelen, niet bij conversie-creatives."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Hoeveel creator-video's moet je tegelijk testen?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Voor een nieuwe campagne adviseren we minimaal vijf tot acht verschillende creator-video's tegelijk te lanceren. Niet allemaal hetzelfde verhaal. Wel allemaal hetzelfde product. Op basis van performance kies je daarna welke je doorzet en welke je kort houdt. Wat in week 1 wint is zelden wat je vooraf zelf had voorspeld."
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
                            { "@type": "ListItem", "position": 4, "name": "Influencer content in TikTok Ads", "item": "https://www.empowers.nl/blogs/social-ads/influencer-content-tiktok-ads" }
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
                        <span className="text-primary truncate">Influencer content in TikTok Ads</span>
                    </nav>

                    <header className="mb-16">
                        <div className="inline-block px-3 py-1 bg-accent/10 text-accent font-mono text-xs uppercase tracking-widest rounded-full mb-6">
                            Social Ads
                        </div>
                        <h1 className="font-sans font-bold text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight mb-8">
                            Hoe gebruik je influencer content in TikTok Ads
                        </h1>
                        <div className="flex flex-wrap items-center gap-6 text-sm font-sans text-primary/60 border-y border-primary/10 py-6">
                            <div className="flex items-center gap-2"><User className="w-4 h-4" /><span>Empowers Redactie</span></div>
                            <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>8 mei 2026</span></div>
                            <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>8 minuten leestijd</span></div>
                        </div>
                    </header>

                    <figure className="w-full h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden mb-16 relative bg-primary">
                        <div className="absolute inset-0 bg-[url('/images/blogs/influencer-content-tiktok-ads.jpg')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </figure>

                    <div className="prose prose-lg max-w-none prose-headings:text-primary prose-headings:font-bold prose-a:text-accent prose-a:underline hover:prose-a:text-accent/80">
                        <p className="text-xl leading-relaxed text-primary/80 font-medium mb-6">
                            Influencer content op TikTok is geen marketingtrend meer. Het is voor veel webshops en MKB-merken simpelweg de bron van de best presterende ads. Niet omdat creators charismatischer zijn dan een brand-team, maar omdat hun video's gewoon beter passen in de feed waar ze landen. Hieronder lees je hoe je influencer-content omzet naar ads die schalen, hoe je rechten regelt en wat een realistische ROAS-verhouding is.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Waarom creator-content de feed wint</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            TikTok-gebruikers zijn schitterend goed in advertenties wegfilteren. Drie seconden, soms twee. Een merkvideo met een gepolijste opening, hoofdpersoon-recht-in-de-camera, het herkenbare voiceover-tempo: weg gescrolld. Creator-content omzeilt die filter omdat het lijkt op de tientallen organische video's die de gebruiker daarvoor en daarna scrollt.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Dat is geen psychologie van de creator, maar van de gebruiker. Mensen kopen niet per se eerder van een influencer dan van een merk. Ze blijven alleen langer kijken. En langer kijken op TikTok betekent meer signaal voor het algoritme, een lagere CPM, hogere CTR, betere CPA. Zo simpel is de mechanica achter de cijfers.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Spark Ads: het format dat het werk doet</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een Spark Ad is een TikTok-advertentie die een bestaande organische post van een creator gebruikt. Likes, comments, shares: alles blijft behouden. De gebruiker ziet een gewone TikTok-video met social proof en niet een platte ad-tegel. Voor de adverteerder betekent dit een lagere advertentie-druk en typisch een hogere watchtime.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Wat je ervoor nodig hebt: een TikTok Ad Code (TAC). De creator deelt vanuit zijn eigen TikTok-account een tijdgebonden code die jij koppelt in de Ads Manager. Daarmee heb je het recht om de specifieke video als Spark Ad te draaien voor de duur die je afspreekt. Geen TAC, geen Spark Ad. Mailtje van de creator dat hij akkoord is, telt niet als bewijs binnen het systeem.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Praktisch: spreek af dat je de TAC voor minimaal zes maanden krijgt. Anders kun je een goed presterende creative niet meer verlengen wanneer hij echt gaat schalen. Beter een iets hogere fee betalen en de TAC ruim regelen, dan over twee maanden je beste advertentie offline moeten zetten.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe brief je een creator zonder zijn stem dood te maken?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Ondernemers die voor het eerst met creators werken, sturen vaak een script aan. Werkt zelden. Het komt geforceerd over en de creator levert iets in dat zwakker is dan zijn eigen organische werk. Je hebt die creator gekozen om zijn stem en zijn publiek. Beide gaan kapot zodra hij jouw woorden voorleest.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Wat wel werkt: een briefing van een halve A4. Je product in twee zinnen. Drie do's, drie don'ts. Twee of drie referentie-video's van zijn eigen kanaal die de toon vangen die je zoekt. De gewenste call-to-action. Klaar. De creator vult de rest in. Wat we vrijwel altijd terugzien: de eerste afgeleverde video is sterker dan iedere variant die we daarna hebben gevraagd om te tweaken.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Macro versus micro: kies micro</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Voor TikTok-ads werken micro-creators bijna altijd beter dan macro-creators. Tien- tot honderdduizend volgers, niet veel meer. Lagere fee per video, authentiekere stijl, scherpere niche. Je kunt voor het budget van een macro-shoot vijf of zes micro-video's laten maken. Dat is precies de testbreedte die TikTok als platform vraagt.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Macro-creators (honderdduizend tot miljoenen volgers) zijn er voor brand-campagnes met awareness-doelen. Niet voor je conversie-funnel. Hun video's voelen vaak gepolijster en daardoor verdacht. Hun fee is een veelvoud van een micro. En het bereik dat ze organisch leveren komt sowieso bovenop wat je via Ads Manager toch al gaat kopen.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoeveel video's moet je laten maken?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Vijf tot acht video's voor een nieuwe campagne is een goede testbreedte. Niet allemaal dezelfde insteek, anders test je niets. Wel allemaal hetzelfde product. Hoek 1: probleem benoemen, jouw product is de oplossing. Hoek 2: voor-en-na. Hoek 3: kennisdeel met pitch in de laatste vijf seconden. Hoek 4: humor of verrassing. Hoek 5: testimonial of klantverhaal.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Lanceer ze tegelijk in een ad group, gun TikTok zeven tot tien dagen om te leren en kijk daarna welke twee of drie de winnaars zijn. Die schaal je op. De rest hou je kort, soms hergebruik je een hoek voor een nieuwe creator-batch. Verspilling? Nee. Dit is de prijs van de informatie die je nodig hebt om verder te kunnen optimaliseren.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Welke ROAS is realistisch?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Voor de meeste webshops zien we creator-content tussen 1,5 en 3 keer betere ROAS leveren dan een vergelijkbare brand-creative, mits de creator goed past bij het product. Productcategorieen waar het sterkst werkt: beauty, fashion, lifestyle, food, kleine elektronica, alles waar visuele demonstratie iets toevoegt. Productcategorieen waar het minder dramatisch werkt: heel functionele B2B-software, financieel advies, alles wat zich slecht laat vangen in een 30-seconden-video.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Wat het echt anders maakt is hoe schoon je tracking staat. Een goede creator-creative trekt veel verkeer dat niet meteen koopt maar een paar dagen later wel terugkomt via een retargeting-ad of een organische zoekopdracht. Dat verkeer mis je als je niet server-side mee meet. Hoe je dat opbouwt staat in onze gids over de <Link to="/blogs/social-ads/conversie-api-meta-naast-pixel" className="text-accent hover:underline">Conversie API van Meta naast de pixel</Link>, waarvan de logica voor TikTok identiek is.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wanneer schakel je een specialist in?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een eerste creator-batch laten maken kun je zelf coordineren. Het wordt complexer als je een doorlopende creator-pipeline wilt opzetten waarbij je elke twee weken nieuwe content tegen elkaar test, je rechten goed administreert en je ads tegelijk in TikTok en Meta uitrolt. Op die schaal komt er logistiek bij kijken die het verschil maakt tussen een leuke campagne en een stevige groei-engine.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een goede strateeg ziet binnen een uur waar in je creator-stack rendement weglekt: TAC's die te kort lopen, briefings die te dichtgezet zijn, te weinig hoeken in je test, te trage iteratiecyclus. Wil je dat we daar samen naar kijken? Plan een vrijblijvend gesprek via onze <Link to="/contact" className="text-accent hover:underline">contactpagina</Link>.
                        </p>
                    </div>

                    <section className="mt-16 pt-12 border-t border-primary/10">
                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Veelgestelde vragen</h2>
                        <div className="space-y-6 not-prose">
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat is een Spark Ad?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Een Spark Ad is een TikTok-advertentie die een bestaande organische post van een creator gebruikt als advertentie. De like, comments en shares blijven behouden. Voor de viewer ziet het er authentiek uit, omdat het lijkt op een gewone TikTok-video die hij gewoon scrollend tegenkomt. De adverteerder betaalt voor het bereik en stuurt de targeting.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Waarom werkt creator-content vaak beter dan brand-content?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Het past bij de feed. TikTok-gebruikers herkennen merkadvertenties binnen drie seconden en scrollen door. Creator-content lijkt op de organische video's die ze gewoonlijk bekijken en hapt door die filter. Daardoor hogere watchtime, betere thumb-stop en uiteindelijk betere CPA. Resultaat is een effect dat in veel sectoren de standaard-brand-creative met dubbele cijfers verslaat.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoe regel je de rechten om influencer-content als ad te gebruiken?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Met een TikTok Ad Code, ofwel TAC. De creator deelt vanuit zijn eigen TikTok-account een tijdgebonden code die jij koppelt aan je Ads Manager. Daarmee mag je dat specifieke filmpje als Spark Ad runnen. Zonder TAC mag je de video niet als ad inzetten, ook niet als de creator akkoord is gegaan in een mailtje.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat moet er in een briefing staan voor een TikTok-creator?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Houd het kort. Je product en USP in twee regels, drie do's en drie don'ts, een paar referentie-video's die de stijl vangen, en de gewenste call-to-action. Geef vrijheid in de uitvoering. Creators presteren slechter zodra je een script aanlevert. Vertrouw op hun stem, omdat dat exact is wat je publiek herkent.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Welke ROAS is realistisch voor influencer-creatives?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Voor webshops zien we doorgaans 1,5 tot 3 keer betere ROAS bij creator-content vergeleken met klassieke brand-creatives, mits de creator past bij de doelgroep en het product geschikt is voor visuele uitleg. Voor B2B-software ligt het effect lager omdat de funnel langer is, maar ook daar voegt creator-content geloofwaardigheid toe in de eerste touchpoints.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Moet ik macro- of micro-influencers kiezen?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Voor TikTok Ads-content werken micro-creators (10.000 tot 100.000 volgers) bijna altijd beter dan macro's. Lagere productiekosten, authentiekere stijl, scherpere niche. Je betaalt minder per video en kunt meer creators tegelijk testen. Macro's hebben hun plek bij grote brand-campagnes met awareness-doelen, niet bij conversie-creatives.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoeveel creator-video's moet je tegelijk testen?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Voor een nieuwe campagne adviseren we minimaal vijf tot acht verschillende creator-video's tegelijk te lanceren. Niet allemaal hetzelfde verhaal. Wel allemaal hetzelfde product. Op basis van performance kies je daarna welke je doorzet en welke je kort houdt. Wat in week 1 wint is zelden wat je vooraf zelf had voorspeld.</p>
                            </div>
                        </div>
                    </section>

                    <section className="mt-16 pt-12 border-t border-primary/10">
                        <h3 className="text-xl font-bold text-primary mb-6">Lees ook</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <Link to="/blogs/social-ads/tiktok-ads-video-converteert" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Een TikTok-video die converteert</h3>
                                <p className="text-primary/60 text-sm">Welke creatieve elementen het verschil maken in een TikTok Ad.</p>
                            </Link>
                            <Link to="/blogs/social-ads/tiktok-ads-doelgroepen-bereik-precies" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">TikTok Ads doelgroepen instellen</h3>
                                <p className="text-primary/60 text-sm">De juiste mensen bereiken zonder je targeting dicht te knijpen.</p>
                            </Link>
                            <Link to="/blogs/social-ads/conversie-api-meta-naast-pixel" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Conversie API naast de pixel</h3>
                                <p className="text-primary/60 text-sm">Server-side tracking om de winst van je creator-content te zien.</p>
                            </Link>
                        </div>
                    </section>

                </div>
            </article>

            <section className="w-full pb-32 px-6">
                <div className="max-w-4xl mx-auto bg-primary rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
                    <h2 className="relative z-10 font-drama italic text-background text-3xl sm:text-4xl md:text-5xl mb-6">
                        Sneller schalen met creator-content?
                    </h2>
                    <p className="relative z-10 font-sans text-background/70 text-lg mb-10 max-w-xl mx-auto">
                        We bouwen je TikTok creator-pipeline op: van briefing tot Spark Ad. Binnen 60 dagen merk je het verschil in CPA en ROAS.
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
