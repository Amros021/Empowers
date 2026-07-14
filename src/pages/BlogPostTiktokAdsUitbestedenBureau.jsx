import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ChevronRight, User } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function BlogPostTiktokAdsUitbestedenBureau() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen selection:bg-accent/30 selection:text-dark flex flex-col bg-background">
            <Helmet>
                <title>TikTok Ads uitbesteden: wat doet een bureau voor jou? | Empowers</title>
                <meta name="description" content="TikTok Ads uitbesteden levert pas resultaat op bij een bureau dat creative, tracking en bidding écht snapt. Lees wat je krijgt, wat het kost en wanneer het zich terugverdient." />
                <link rel="canonical" href="https://www.empowers.nl/blogs/social-ads/tiktok-ads-uitbesteden-bureau-jou" />
                <meta property="og:title" content="TikTok Ads uitbesteden: wat doet een bureau voor jou?" />
                <meta property="og:description" content="Concrete uitleg van wat een TikTok bureau écht doet en waar je op moet letten bij de keuze." />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://www.empowers.nl/blogs/social-ads/tiktok-ads-uitbesteden-bureau-jou" />
                <meta property="og:image" content="https://www.empowers.nl/images/blogs/tiktok-ads-uitbesteden-bureau-jou.jpg" />
                <meta property="article:published_time" content="2026-04-18T14:00:00+02:00" />
                <meta property="article:author" content="Empowers" />
                <meta property="article:section" content="Social Ads" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="TikTok Ads uitbesteden: wat doet een goed bureau?" />
                <meta name="twitter:description" content="Helder overzicht van wat een TikTok Ads bureau levert, wat het kost en wanneer het zich voor jou terugverdient." />

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Article",
                        "headline": "TikTok Ads uitbesteden: wat doet een bureau voor jou?",
                        "description": "TikTok Ads uitbesteden levert pas resultaat op bij een bureau dat creative, tracking en bidding écht snapt. Lees wat je krijgt, wat het kost en wanneer het zich terugverdient.",
                        "image": "https://www.empowers.nl/images/blogs/tiktok-ads-uitbesteden-bureau-jou.jpg",
                        "datePublished": "2026-04-18T14:00:00+02:00",
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
                                    "name": "Wat doet een TikTok Ads bureau precies?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Een TikTok Ads bureau regelt vier onderdelen: creative productie of aansturing van contentcreators, technische setup van Pixel en Events API, campagne-opbouw met bidding en audiences, en continue optimalisatie op basis van ad fatigue en CAC. Het grootste verschil met in-house werken zit in de creative pipeline: TikTok vraagt wekelijks nieuwe video's in plaats van statische advertenties."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Wat kost TikTok Ads uitbesteden aan een bureau?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Reken op een beheerfee van 800 tot 2.500 euro per maand bij mediabudgetten van 2.000 tot 10.000 euro. Grote bureaus werken met 15 tot 20 procent van het mediabudget, vaak met een minimum. Creative productie is meestal een losse post: een pakket van acht video's kost 800 tot 2.000 euro. Mediabudget staat daarbuiten."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Vanaf welk budget loont TikTok Ads uitbesteden?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Onder de 1.500 euro mediabudget per maand verdient een bureau zich vrijwel nooit terug. De creative vereisten en fee zijn te zwaar voor een klein budget. Boven de 3.000 euro per maand speelt een bureau zijn waarde uit, zeker als creative productie deel uitmaakt van de opdracht. Webshops met TikTok Shop kunnen al vanaf 2.000 euro winst halen uit uitbesteding."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Wat is het grootste verschil tussen TikTok Ads en Meta Ads uitbesteden?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "TikTok draait bijna volledig op creative, Meta op targeting en tracking. Bij TikTok vervangt een bureau wekelijks creatives omdat de fatigue razendsnel is. Bij Meta worden creatives langer gedraaid. Daarom ligt de creative productiekosten bij TikTok bureaus hoger en de technische setup lager. Ook is UGC of platform-native content voor TikTok bijna verplicht."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Kan een bureau TikTok Ads snel opstarten?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Ja, maar verwacht twee tot vier weken voordat de eerste campagnes live zijn. Dat komt door drie stappen: Pixel- en Events API implementatie, productie of verzameling van minimaal vier tot zes platform-native video's en TikTok Business Center toegang. Pas daarna start de optimalisatiefase, die zes tot tien weken nodig heeft voor stabiele resultaten."
                                    }
                                }
                            ]
                        },
                        "breadcrumb": {
                            "@type": "BreadcrumbList",
                            "itemListElement": [
                                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.empowers.nl" },
                                { "@type": "ListItem", "position": 2, "name": "Social Ads", "item": "https://www.empowers.nl/blogs/social-ads" },
                                { "@type": "ListItem", "position": 3, "name": "TikTok Ads uitbesteden" }
                            ]
                        }
                    })}
                </script>
            </Helmet>

            <Navbar />

            <article className="w-full pt-40 pb-24 px-6 relative">
                <div className="max-w-4xl mx-auto">

                    {/* Breadcrumbs */}
                    <nav className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-primary/50 mb-12">
                        <Link to="/" className="hover:text-accent transition-colors">Home</Link>
                        <ChevronRight size={12} />
                        <Link to="/blogs/social-ads" className="hover:text-accent transition-colors">Social Ads</Link>
                        <ChevronRight size={12} />
                        <span className="text-primary/30">TikTok Ads uitbesteden</span>
                    </nav>

                    {/* Header */}
                    <header className="mb-16">
                        <div className="inline-block px-3 py-1 bg-accent/10 text-accent font-mono text-xs uppercase tracking-widest rounded-full mb-6">
                            Social Ads
                        </div>
                        <h1 className="font-sans font-bold text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight mb-8">
                            TikTok Ads uitbesteden: wat doet een bureau voor jou?
                        </h1>
                        <div className="flex flex-wrap items-center gap-6 text-sm font-sans text-primary/60 border-y border-primary/10 py-6">
                            <span className="flex items-center gap-2"><User size={14} />Empowers Redactie</span>
                            <span className="flex items-center gap-2"><Calendar size={14} />18 apr 2026</span>
                            <span className="flex items-center gap-2"><Clock size={14} />8 min leestijd</span>
                        </div>
                    </header>

                    {/* Featured Image */}
                    <figure className="w-full h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden mb-16 relative bg-primary">
                        <div className="absolute inset-0 bg-[url('/images/blogs/tiktok-ads-uitbesteden-bureau-jou.jpg')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </figure>

                    {/* Content */}
                    <div className="prose prose-lg max-w-none">

                        <p className="text-xl leading-relaxed text-primary/80 font-medium mb-6">
                            TikTok Ads uitbesteden is iets anders dan Meta of Google Ads uitbesteden. Het platform vraagt wekelijks nieuwe video's, heeft een eigen Pixel-logica en rekent af met een creative engine die nooit stil staat. In dit artikel lees je wat een TikTok Ads bureau exact doet, wat het kost en vanaf welk moment uitbesteden zich voor jou terugverdient.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat maakt TikTok Ads anders dan andere kanalen?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Op TikTok win je met content, niet met audiences. Het TikTok-algoritme kiest zelf de juiste kijkers op basis van kijkgedrag en interactie. Jouw targeting is vaak breed, soms zelfs zonder demografische filters. De kwaliteit van je video bepaalt alles: aandachtsboog, hook, pacing en autenticiteit. Dat is het grootste verschil met Meta, waar targeting en creative ongeveer gelijkwaardig zijn.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Wat daarbovenop komt: creative fatigue slaat op TikTok razendsnel toe. Waar een Meta video twee tot drie weken kan draaien voordat de CPA oploopt, is dat op TikTok vaak zeven tot tien dagen. Dat betekent dat er wekelijks nieuwe video's nodig zijn. Voor een bedrijf zonder eigen content team is dat nauwelijks vol te houden.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een derde factor: de technische complexiteit. TikTok Pixel en Events API werken net anders dan Meta en iOS 17.5 heeft extra privacy-laagjes toegevoegd. Een verkeerd geconfigureerde Pixel betekent tot 40 procent verloren data. Meer over creatieve keuzes op TikTok lees je in <Link to="/blogs/social-ads/tiktok-adverteren-viral-te-hoeven" className="text-accent hover:underline">dit artikel over TikTok adverteren zonder viral te hoeven gaan</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Welke taken neemt een TikTok Ads bureau over?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een volwaardig TikTok bureau levert vier samenhangende diensten. Begrijp je die vier, dan weet je ook wat je zelf zou moeten organiseren als je niet uitbesteedt.
                        </p>

                        <h3 className="font-semibold text-primary text-xl mt-10 mb-4">1. Creative productie of aansturing</h3>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Dit is het zwaartepunt. Een goed bureau produceert zelf video's of stuurt een vaste groep UGC-creators aan. Per maand komen er acht tot twintig nieuwe varianten uit, gedifferentieerd naar hook, lengte en beeldtaal. Dat is nodig omdat TikTok pas bij voldoende variatie kan leren wat bij jouw publiek werkt. Bureaus zonder creative engine zijn feitelijk media-buyers zonder munitie.
                        </p>

                        <h3 className="font-semibold text-primary text-xl mt-10 mb-4">2. Technische setup en tracking</h3>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Dit omvat de implementatie van de TikTok Pixel én de Events API via Google Tag Manager of server-side tracking, inclusief deduplicatie. Daarnaast worden conversie-events correct gemapt naar Purchase, AddToCart, Lead of Complete Registration. Een bureau dat hier genoegen neemt met "komt later wel" is niet de juiste partij. Zonder dataveldslag weet niemand wat werkt.
                        </p>

                        <h3 className="font-semibold text-primary text-xl mt-10 mb-4">3. Campagnestructuur en bidding</h3>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een bureau bouwt de campagnes op rondom Smart+, Spark Ads en handmatige setups. Per doelgroep en fase wordt de juiste biedstrategie gekozen: Maximum Delivery voor schaal, Bid Cap voor CAC-controle en Value Optimization voor webshops met waarde-rapportage. Ook audiences worden gestructureerd: broad, lookalikes van Purchase events en custom audiences uit bestaande klantenlijsten.
                        </p>

                        <h3 className="font-semibold text-primary text-xl mt-10 mb-4">4. Dagelijkse optimalisatie en rapportage</h3>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Hier zit het dagelijkse werk: ad sets pauzeren die boven CAC lopen, budgetten verschuiven, creatives vervangen zodra de CPA oploopt. Maandelijks volgt een rapport met inzicht per creative, per doelgroep en per funnel-fase. Een goed bureau koppelt cijfers aan bedrijfsmetrics, geen alleen TikTok Ads Manager data.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat kost TikTok Ads uitbesteden?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De beheerfee ligt doorgaans tussen 800 en 2.500 euro per maand, afhankelijk van budgetgrootte en aantal campagnes. Grotere bureaus werken met een percentage van 15 tot 20 procent over het mediabudget, vaak met een minimum fee. Creative productie is bijna altijd een aparte post: een pakket van acht tot tien video's kost 800 tot 2.000 euro, afhankelijk van of er UGC-creators, eigen studio of klant content betrokken zijn.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Het mediabudget zelf staat daarbuiten en gaat rechtstreeks naar TikTok. Vraag altijd een offerte waarin beheer, creative en media apart zijn begroot. Transparantie op dit punt is het eerste teken van een professioneel bureau.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Onder de 1.500 euro mediabudget per maand verdient uitbesteden zich zelden terug. De fee drukt te hard op het totaal. Boven de 3.000 euro mediabudget speelt een bureau zijn waarde uit via lagere CAC en een stabiele creative pipeline. Webshops met TikTok Shop kunnen al vanaf 2.000 euro winst halen, omdat productie en media dan elkaar versterken.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wanneer loont uitbesteden en wanneer niet?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Uitbesteden werkt als jouw bedrijf twee dingen mist: tijd voor wekelijkse creative iteratie en ervaring met TikTok Ads Manager. Heb je wel één van de twee, dan kan een hybride model werken: jij levert content, het bureau draait de campagnes. Heb je geen van beide, dan is volledige uitbesteding meestal goedkoper dan zelf leren.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Zelf doen blijft beter wanneer je een bestaande content studio hebt, voldoende tijd per week vrij kunt maken en een marketeer in dienst hebt die minstens 18 maanden met TikTok Ads heeft gewerkt. Bij onze klanten zien we dat deze combinatie zeldzaam is: veel bedrijven overschatten hun eigen capaciteit op dit kanaal. Voor context over het algemene uitbesteed-vraagstuk zie <Link to="/blogs/algemeen/online-marketing-bureau" className="text-accent hover:underline">onze gids over online marketing bureaus</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Waar herken je een goed TikTok Ads bureau aan?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Stel vier vragen bij het oriënteren. Eén: hoe wordt de creative pipeline georganiseerd? Een goed bureau heeft een vast ritme voor video-productie, niet pas wanneer er gevraagd wordt. Twee: hoe wordt de Pixel en Events API opgezet? Vraag door tot je server-side deduplicatie hoort. Drie: hoe meten jullie wat werkt per creative? Het antwoord moet gaan over creative tagging en Attribution niet over klassieke ad set reports.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Vier: welke accounttoegang houd ik zelf? Je moet altijd admin zijn in je eigen Business Center, eigenaar van de Pixel en de creative bestanden. Bureaus die toegang achterhouden bij contractbeëindiging zijn een rood signaal. Meer over hoe creatives op TikTok wel of niet werken vind je in <Link to="/blogs/social-ads/tiktok-spark-ads-vs-reguliere" className="text-accent hover:underline">onze vergelijking tussen Spark Ads en reguliere TikTok Ads</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe lang duurt het voordat je resultaat ziet?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Reken op acht tot twaalf weken voor stabiele resultaten, ook bij een ervaren bureau. De eerste twee tot vier weken gaan op aan setup en productie van de basis-creatives. Week vijf tot acht is leerfase: er wordt getest, creatives vervangen en doelgroepen verfijnd. Vanaf week negen is er meestal een patroon zichtbaar in CAC en ROAS per creative type.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Bureaus die binnen twee weken resultaten beloven moet je mijden. De setup van Events API alleen al kost één tot twee weken als het goed gebeurt. Geduld in de eerste fase levert in fase twee vaak een factor twee betere CAC op.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Kun je tussentijds stoppen met een bureau?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De meeste TikTok Ads bureaus werken met opzegtermijnen van één tot drie maanden. Vraag vooraf welke deliverables bij contractbeëindiging meekomen: raw creative bestanden, rights voor verder gebruik, toegang tot de Pixel-setup en een overdrachtsdocument. Zonder deze afspraken ben je overgeleverd aan de goodwill van het bureau.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een veelgemaakte fout die we tegenkomen is dat klanten creative rechten vergeten vast te leggen. Bij UGC-creators moet rechtenoverdracht duidelijk zijn, met tijdsbepaling en gebied. Zonder dat staat je content na zes maanden in de prullenbak.
                        </p>

                    </div>

                    {/* FAQ */}
                    <section className="mt-16 pt-12 border-t border-primary/10">
                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Veelgestelde vragen over TikTok Ads uitbesteden</h2>
                        <div className="space-y-6 not-prose">
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat doet een TikTok Ads bureau precies?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Een TikTok Ads bureau regelt vier onderdelen: creative productie of aansturing van contentcreators, technische setup van Pixel en Events API, campagne-opbouw met bidding en audiences, en continue optimalisatie op basis van ad fatigue en CAC. Het grootste verschil met in-house werken zit in de creative pipeline: TikTok vraagt wekelijks nieuwe video's in plaats van statische advertenties.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat kost TikTok Ads uitbesteden aan een bureau?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Reken op een beheerfee van 800 tot 2.500 euro per maand bij mediabudgetten van 2.000 tot 10.000 euro. Grote bureaus werken met 15 tot 20 procent van het mediabudget, vaak met een minimum. Creative productie is meestal een losse post: een pakket van acht video's kost 800 tot 2.000 euro. Mediabudget staat daarbuiten.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Vanaf welk budget loont TikTok Ads uitbesteden?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Onder de 1.500 euro mediabudget per maand verdient een bureau zich vrijwel nooit terug. De creative vereisten en fee zijn te zwaar voor een klein budget. Boven de 3.000 euro per maand speelt een bureau zijn waarde uit, zeker als creative productie deel uitmaakt van de opdracht. Webshops met TikTok Shop kunnen al vanaf 2.000 euro winst halen uit uitbesteding.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat is het grootste verschil tussen TikTok Ads en Meta Ads uitbesteden?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">TikTok draait bijna volledig op creative, Meta op targeting en tracking. Bij TikTok vervangt een bureau wekelijks creatives omdat de fatigue razendsnel is. Bij Meta worden creatives langer gedraaid. Daarom liggen de creative productiekosten bij TikTok bureaus hoger en de technische setup lager. Ook is UGC of platform-native content voor TikTok bijna verplicht.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Kan een bureau TikTok Ads snel opstarten?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Ja, maar verwacht twee tot vier weken voordat de eerste campagnes live zijn. Dat komt door drie stappen: Pixel- en Events API implementatie, productie of verzameling van minimaal vier tot zes platform-native video's en TikTok Business Center toegang. Pas daarna start de optimalisatiefase, die zes tot tien weken nodig heeft voor stabiele resultaten.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat moet ik contractueel vastleggen met een TikTok Ads bureau?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Leg minimaal vier punten vast: eigendom van de Pixel en Business Center, overdracht van creative bronbestanden na beëindiging, opzegtermijn en gebruiksrechten van UGC content. Zonder deze vier kan een bureaubreuk je maanden terugwerpen. Een professioneel bureau brengt deze onderwerpen zelf ter sprake.</p>
                            </div>
                        </div>
                    </section>

                    {/* Related */}
                    <section className="mt-16 pt-12 border-t border-primary/10">
                        <h3 className="text-xl font-bold text-primary mb-6">Lees ook</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <Link to="/blogs/social-ads/tiktok-spark-ads-vs-reguliere" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Spark Ads vs reguliere TikTok Ads</h3>
                                <p className="text-primary/60 text-sm">Welk advertentieformat past bij jouw TikTok strategie en bij welk doel.</p>
                            </Link>
                            <Link to="/blogs/social-ads/tiktok-adverteren-viral-te-hoeven" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">TikTok adverteren zonder viral te hoeven</h3>
                                <p className="text-primary/60 text-sm">Hoe je op TikTok schaalt met voorspelbare creatives in plaats van geluk.</p>
                            </Link>
                            <Link to="/blogs/algemeen/online-marketing-bureau" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Online marketing bureau kiezen</h3>
                                <p className="text-primary/60 text-sm">Waar je op moet letten bij het vergelijken van online marketing bureaus.</p>
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
                        TikTok Ads uitbesteden?
                    </h2>
                    <p className="relative z-10 font-sans text-background/70 text-lg mb-10 max-w-xl mx-auto">
                        We nemen jouw huidige setup en doelen door en berekenen eerlijk of een bureau zich voor jou terugverdient. Zonder verplichtingen.
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
