import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ChevronRight, User } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function BlogPostZeroClickSearchesStrategie() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen selection:bg-accent/30 selection:text-dark flex flex-col bg-background">
            <Helmet>
                <title>Zero-click searches: hoe pas je jouw strategie aan? | Empowers</title>
                <meta name="description" content="Zero-click searches groeien hard: rond de 60 procent van de zoekopdrachten eindigt zonder klik. Zo pas je jouw marketingstrategie hier slim op aan." />
                <link rel="canonical" href="https://www.empowers.nl/blogs/algemeen/zero-click-searches-pas-strategie" />
                <meta property="og:title" content="Zero-click searches: hoe pas je jouw strategie aan? | Empowers" />
                <meta property="og:description" content="Zero-click searches groeien hard: rond de 60 procent van de zoekopdrachten eindigt zonder klik. Zo pas je jouw marketingstrategie hier slim op aan." />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://www.empowers.nl/blogs/algemeen/zero-click-searches-pas-strategie" />
                <meta property="og:image" content="https://www.empowers.nl/images/blogs/zero-click-searches-pas-strategie.jpg" />
                <meta property="article:published_time" content="2026-06-16T10:00:00+02:00" />
                <meta property="article:author" content="Empowers" />
                <meta property="article:section" content="Algemeen" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Zero-click searches: hoe pas je jouw strategie aan? | Empowers" />
                <meta name="twitter:description" content="Zero-click searches groeien hard: rond de 60 procent van de zoekopdrachten eindigt zonder klik. Zo pas je jouw marketingstrategie hier slim op aan." />
                <script type="application/ld+json">{JSON.stringify({
                    "@context": "https://schema.org",
                    "@graph": [
                        {
                            "@type": "Article",
                            "headline": "Zero-click searches: hoe pas je jouw strategie aan?",
                            "image": "https://www.empowers.nl/images/blogs/zero-click-searches-pas-strategie.jpg",
                            "description": "Zero-click searches groeien hard: rond de 60 procent van de zoekopdrachten eindigt zonder klik. Zo pas je jouw marketingstrategie hier slim op aan.",
                            "author": { "@type": "Organization", "name": "Empowers" },
                            "publisher": { "@type": "Organization", "name": "Empowers", "url": "https://www.empowers.nl" },
                            "datePublished": "2026-06-16T10:00:00+02:00",
                            "dateModified": "2026-06-16T10:00:00+02:00",
                            "url": "https://www.empowers.nl/blogs/algemeen/zero-click-searches-pas-strategie"
                        },
                        {
                            "@type": "BreadcrumbList",
                            "itemListElement": [
                                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.empowers.nl" },
                                { "@type": "ListItem", "position": 2, "name": "Nieuws", "item": "https://www.empowers.nl/nieuws" },
                                { "@type": "ListItem", "position": 3, "name": "Algemeen", "item": "https://www.empowers.nl/blogs/algemeen" },
                                { "@type": "ListItem", "position": 4, "name": "Zero-click searches: hoe pas je jouw strategie aan?", "item": "https://www.empowers.nl/blogs/algemeen/zero-click-searches-pas-strategie" }
                            ]
                        },
                        {
                            "@type": "FAQPage",
                            "mainEntity": [
                                { "@type": "Question", "name": "Wat zijn zero-click searches?", "acceptedAnswer": { "@type": "Answer", "text": "Zero-click searches zijn zoekopdrachten waarbij iemand het antwoord direct op de resultatenpagina krijgt en nergens op klikt. Denk aan een featured snippet, een kennispaneel, het weerbericht of een AI Overview die de vraag al beantwoordt. De zoeker is geholpen, maar er komt geen bezoeker naar een website." } },
                                { "@type": "Question", "name": "Hoeveel procent van de zoekopdrachten is zero-click?", "acceptedAnswer": { "@type": "Answer", "text": "Onderzoek van SparkToro en Similarweb komt op rond de 60 procent van de Google-zoekopdrachten die eindigt zonder klik naar een externe site. Het exacte getal verschilt per onderzoek en per apparaat, maar de richting is duidelijk: een groot deel van het zoekverkeer verlaat Google niet meer." } },
                                { "@type": "Question", "name": "Zijn zero-click searches slecht voor mijn bedrijf?", "acceptedAnswer": { "@type": "Answer", "text": "Niet per definitie. Je verliest een deel van het verkeer dat vroeger doorklikte, maar je wint zichtbaarheid bij mensen die alleen een snel antwoord wilden. Wie wel een aanbieder zoekt, klikt nog steeds door. De kunst is je richten op zoekopdrachten met koopintentie en daar wel de klik binnenhalen." } },
                                { "@type": "Question", "name": "Hoe kom ik in een featured snippet of AI Overview?", "acceptedAnswer": { "@type": "Answer", "text": "Geef een kort, helder antwoord meteen bovenaan je pagina, gevolgd door uitleg en bewijs. Gebruik vragen als koppen en houd je antwoorden zelfstandig leesbaar. Zorg dat je technische basis klopt en bouw aantoonbare ervaring en autoriteit op in je vakgebied. Dat is precies waar GEO over gaat." } },
                                { "@type": "Question", "name": "Moet ik stoppen met SEO door zero-click searches?", "acceptedAnswer": { "@type": "Answer", "text": "Nee. SEO verschuift, het verdwijnt niet. Je optimaliseert nog steeds voor zichtbaarheid, alleen niet meer alleen voor de klik. Een goede positie zorgt dat je merknaam blijft hangen, ook als er geen bezoek volgt. Daarnaast blijven zoekopdrachten met koopintentie wel doorklikken naar websites." } },
                                { "@type": "Question", "name": "Hoe meet ik resultaat als er minder geklikt wordt?", "acceptedAnswer": { "@type": "Answer", "text": "Kijk verder dan alleen klikken en sessies. Volg je vertoningen en je posities in Google Search Console, je aandeel in merkzoekopdrachten en je directe aanvragen. Stijgt je naamsbekendheid en je aantal aanvragen terwijl het verkeer gelijk blijft, dan werkt je zichtbaarheid, ook zonder dat elke vertoning een klik oplevert." } },
                                { "@type": "Question", "name": "Werken advertenties beter nu organisch verkeer daalt?", "acceptedAnswer": { "@type": "Answer", "text": "Voor zoekopdrachten met directe koopintentie blijven advertenties een betrouwbare manier om bovenaan te staan op het moment dat iemand wil kopen. Ze vangen een deel op van het verkeer dat je organisch verliest. Combineer betaald en organisch: samen dekken ze zowel de snelle antwoorden als de momenten waarop mensen echt klaar zijn om te kiezen." } }
                            ]
                        }
                    ]
                })}</script>
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
                        <Link to="/blogs/algemeen" className="hover:text-accent transition-colors">Algemeen</Link>
                        <ChevronRight className="w-3 h-3" />
                        <span className="text-primary truncate">Zero-click searches</span>
                    </nav>

                    {/* Header */}
                    <header className="mb-16">
                        <div className="inline-block px-3 py-1 bg-accent/10 text-accent font-mono text-xs uppercase tracking-widest rounded-full mb-6">
                            Algemeen
                        </div>
                        <h1 className="font-sans font-bold text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight mb-8">
                            Zero-click searches: hoe pas je jouw strategie aan?
                        </h1>

                        <div className="flex flex-wrap items-center gap-6 text-sm font-sans text-primary/60 border-y border-primary/10 py-6">
                            <div className="flex items-center gap-2">
                                <User className="w-4 h-4" />
                                <span>Empowers Redactie</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>16 juni 2026</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>8 minuten leestijd</span>
                            </div>
                        </div>
                    </header>

                    {/* Featured Image */}
                    <figure className="w-full h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden mb-16 relative bg-primary">
                        <div className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-overlay" style={{backgroundImage: "url('/images/blogs/zero-click-searches-pas-strategie.jpg')"}}></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </figure>

                    {/* Content */}
                    <div className="prose prose-lg prose-headings:font-sans prose-headings:font-bold prose-headings:text-primary prose-p:font-sans prose-p:text-primary/80 prose-p:leading-relaxed max-w-none">
                        <p className="text-xl md:text-2xl font-medium leading-relaxed mb-10 text-primary">
                            Zero-click searches zijn zoekopdrachten waarbij iemand het antwoord meteen op de resultatenpagina krijgt en nergens op klikt. Onderzoek van SparkToro en Similarweb komt op rond de 60 procent van alle Google-zoekopdrachten. Je strategie aanpassen betekent niet vechten tegen die klik die wegvalt, maar zorgen dat je zichtbaar en geciteerd wordt op het moment zelf, en de klik wel binnenhalen bij mensen die echt iets willen kopen.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat zijn zero-click searches precies?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een zero-click search is een zoekopdracht die eindigt zonder dat iemand een website bezoekt. Je typt een vraag in Google en het antwoord staat er al: in een uitgelicht blok, een kennispaneel of een AI Overview bovenaan de pagina. De zoeker heeft wat hij zocht en sluit het tabblad. Geen bezoeker, geen sessie, geen klik in je statistieken.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Vroeger was de zoekresultatenpagina vooral een doorgeefluik. Je stelde een vraag, Google liet tien blauwe links zien en jij koos er een. Inmiddels probeert Google de vraag liever zelf te beantwoorden. Het weerbericht, een rekensom, openingstijden, de hoofdstad van een land of een korte samenvatting van een onderwerp staan er direct.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Voor ondernemers voelt dat als bedreigend, en deels is het dat ook. Een deel van het verkeer dat vroeger naar je site kwam, blijft nu op Google hangen. Tegelijk verschuift de waarde. Je naam staat bovenaan in een antwoord dat duizenden mensen zien, ook al klikt niet iedereen. Dat is een ander soort zichtbaarheid dan een doorklik, maar het is wel zichtbaarheid.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Waarom groeien zero-click searches zo hard?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De grootste aanjager is AI. Sinds Google AI Overviews breed uitrolt, beantwoordt de zoekmachine steeds meer vragen met een eigen samenvatting bovenaan. Die samenvatting haalt informatie uit verschillende bronnen en zet het in een paar zinnen neer. Handig voor de zoeker, lastig voor wie het van doorkliks moet hebben.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Daarbovenop komt het gedrag van de zoeker zelf. Mensen zijn ongeduldig en zoeken vaker op hun telefoon. Wie snel een feit of een prijsindicatie wil, heeft geen zin om door drie websites te scrollen. Het antwoord op het scherm is genoeg. Een onderzoek van Bain & Company laat zien dat een grote meerderheid van de consumenten inmiddels regelmatig op zulke directe antwoorden vertrouwt.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Er is ook een nieuwe laag bij gekomen: AI-chatbots als ChatGPT, Claude en Perplexity. Mensen stellen daar hun vraag rechtstreeks en krijgen een antwoord zonder ooit een zoekmachine te openen. Dat is in feite een zero-click search buiten Google om. Wil je begrijpen hoe je in die antwoorden terechtkomt, dan helpt onze blog over <Link to="/blogs/geo/chatgpt-website-citeren" className="text-accent hover:underline">hoe ChatGPT jouw website citeert</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Zijn zero-click searches slecht voor je bedrijf?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Niet zwart-wit. Je verliest een stuk informatief verkeer: de mensen die alleen even iets wilden weten en nooit klant zouden worden. Dat verkeer scoorde mooi in je bezoekcijfers, maar leverde zelden omzet op. Als dat wegvalt, daalt je verkeer terwijl je echte resultaat gelijk kan blijven.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Wat je wint, is bereik bovenin de markt. Verschijnt je merknaam in een uitgelicht antwoord of een AI Overview, dan bouw je bekendheid op bij mensen die je anders nooit hadden gezien. Ze klikken niet vandaag, maar onthouden je naam voor straks. Zichtbaarheid is een begin. De omzet komt van de mensen die wel klaar zijn om te kopen.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            En juist die mensen klikken nog steeds. Wie zoekt op een specifiek product, een dienst in zijn buurt of een aanbieder om mee te werken, krijgt zelden genoeg aan één regel tekst. Die wil vergelijken, lezen en contact opnemen. Bij ondernemers die we begeleiden zien we dat zoekopdrachten met koopintentie nauwelijks last hebben van de zero-click trend. Het is vooral het losse, informatieve verkeer dat verdampt.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe pas je jouw zoekstrategie hierop aan?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Begin bij je doel. Richt je niet alleen op de klik, maar ook op de vertoning. Wil je in een uitgelicht blok of een AI Overview terechtkomen, geef dan meteen bovenaan je pagina een kort en helder antwoord op de vraag, gevolgd door de uitleg eronder. Schrijf je koppen als vragen die mensen echt typen, zodat je content precies matcht met de zoekopdracht.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Daarna verschuift je focus naar intentie. Verdeel je onderwerpen in twee groepen: zoekopdrachten waar mensen alleen iets willen weten en zoekopdrachten waar ze iets willen regelen of kopen. Bij de eerste groep ga je voor zichtbaarheid en autoriteit. Bij de tweede groep zet je je beste pagina's in, want daar valt de omzet te halen. Hoe je die autoriteit opbouwt, lees je in onze blog over <Link to="/blogs/geo/bouw-topische-autoriteit-betere-geo" className="text-accent hover:underline">topische autoriteit voor betere GEO</Link>.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Verbreed tot slot je zichtbaarheid buiten Google. Zorg dat je terugkomt in AI-antwoorden, dat je actief bent waar je doelgroep zit en dat je merknaam blijft hangen. Dat is precies waar <Link to="/geo" className="text-accent hover:underline">GEO</Link> over gaat: gevonden en geciteerd worden door AI-zoekmachines, niet alleen scoren in de klassieke resultaten.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe kom je in een featured snippet of AI Overview?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Begin met de structuur van je pagina. Een uitgelicht antwoord pakt Google bijna altijd uit content die de vraag direct en bondig beantwoordt. Zet het antwoord in een of twee zinnen meteen onder de kop, voordat je de diepte ingaat. Houd elke sectie zelfstandig leesbaar, zodat een los stuk tekst ook buiten de pagina klopt.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Daarna telt vertrouwen. Google en AI-modellen kiezen liever bronnen die aantoonbaar weten waar ze het over hebben. Laat ervaring zien, noem concrete cijfers en wees specifiek in plaats van algemeen. Een pagina vol vage beloften haalt het zelden, een pagina met een duidelijk antwoord en bewijs eronder wel. De technische aanpak hiervan staat in onze gids over <Link to="/blogs/geo/optimaliseer-content-google-ai-overviews" className="text-accent hover:underline">content optimaliseren voor Google AI Overviews</Link>.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Vergeet de basis niet. Een snelle, foutloze website met nette koppen en gestructureerde data maakt het voor zoekmachines makkelijker om je content te begrijpen en uit te lichten. Dit is geen apart trucje naast je <Link to="/seo" className="text-accent hover:underline">SEO</Link>, maar een verlenging ervan. Goede vindbaarheid is de voorwaarde om überhaupt in een antwoord te belanden.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe meet je succes als er minder geklikt wordt?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Als verkeer daalt terwijl je zichtbaarheid groeit, voldoen je oude cijfers niet meer. Klikken en sessies vertellen maar een deel van het verhaal. Kijk in Google Search Console naar je vertoningen en je gemiddelde positie. Stijgen die, dan word je vaker getoond, ook als niet elke vertoning een klik oplevert.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Let daarnaast op de signalen die wel met omzet te maken hebben. Hoeveel mensen zoeken op jouw merknaam? Hoeveel directe aanvragen en telefoontjes komen er binnen? Groeit je naamsbekendheid terwijl je verkeer afvlakt, dan doet je zichtbaarheid precies wat het moet doen. Beoordeel je marketing op aanvragen en omzet, niet op het aantal bezoekers alleen.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Tot slot: combineer betaald en organisch. Voor zoekopdrachten waar mensen klaarstaan om te kopen, brengen advertenties je bovenaan op precies het juiste moment. Ze vangen een deel op van het verkeer dat je organisch verliest aan de directe antwoorden. Zo dek je beide kanten af, de snelle antwoorden en de echte koopmomenten.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Zero-click searches dwingen je om je marketing op resultaat te beoordelen in plaats van op bezoekersaantallen. Wie zijn content op directe antwoorden inricht en zijn budget op koopintentie zet, groeit ook in een wereld waarin mensen steeds vaker niet meer klikken. Groei is geen toeval. Het is een kwestie van je aanpassen aan hoe mensen vandaag zoeken.
                        </p>

                        <hr className="my-16 border-primary/10" />

                        <h2 className="text-3xl mb-8">Veelgestelde vragen over zero-click searches</h2>

                        <div className="space-y-6 not-prose">
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat zijn zero-click searches?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Zero-click searches zijn zoekopdrachten waarbij iemand het antwoord direct op de resultatenpagina krijgt en nergens op klikt. Denk aan een featured snippet, een kennispaneel, het weerbericht of een AI Overview die de vraag al beantwoordt. De zoeker is geholpen, maar er komt geen bezoeker naar een website.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoeveel procent van de zoekopdrachten is zero-click?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Onderzoek van SparkToro en Similarweb komt op rond de 60 procent van de Google-zoekopdrachten die eindigt zonder klik naar een externe site. Het exacte getal verschilt per onderzoek en per apparaat, maar de richting is duidelijk: een groot deel van het zoekverkeer verlaat Google niet meer.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Zijn zero-click searches slecht voor mijn bedrijf?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Niet per definitie. Je verliest een deel van het verkeer dat vroeger doorklikte, maar je wint zichtbaarheid bij mensen die alleen een snel antwoord wilden. Wie wel een aanbieder zoekt, klikt nog steeds door. De kunst is je richten op zoekopdrachten met koopintentie en daar wel de klik binnenhalen.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoe kom ik in een featured snippet of AI Overview?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Geef een kort, helder antwoord meteen bovenaan je pagina, gevolgd door uitleg en bewijs. Gebruik vragen als koppen en houd je antwoorden zelfstandig leesbaar. Zorg dat je technische basis klopt en bouw aantoonbare ervaring en autoriteit op in je vakgebied. Dat is precies waar GEO over gaat.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Moet ik stoppen met SEO door zero-click searches?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Nee. SEO verschuift, het verdwijnt niet. Je optimaliseert nog steeds voor zichtbaarheid, alleen niet meer alleen voor de klik. Een goede positie zorgt dat je merknaam blijft hangen, ook als er geen bezoek volgt. Daarnaast blijven zoekopdrachten met koopintentie wel doorklikken naar websites.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoe meet ik resultaat als er minder geklikt wordt?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Kijk verder dan alleen klikken en sessies. Volg je vertoningen en je posities in Google Search Console, je aandeel in merkzoekopdrachten en je directe aanvragen. Stijgt je naamsbekendheid en je aantal aanvragen terwijl het verkeer gelijk blijft, dan werkt je zichtbaarheid, ook zonder dat elke vertoning een klik oplevert.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Werken advertenties beter nu organisch verkeer daalt?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Voor zoekopdrachten met directe koopintentie blijven advertenties een betrouwbare manier om bovenaan te staan op het moment dat iemand wil kopen. Ze vangen een deel op van het verkeer dat je organisch verliest. Combineer betaald en organisch: samen dekken ze zowel de snelle antwoorden als de momenten waarop mensen echt klaar zijn om te kiezen.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </article>

            {/* Bottom CTA */}
            <section className="w-full pb-32 px-6">
                <div className="max-w-4xl mx-auto bg-primary rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
                    <h2 className="relative z-10 font-drama italic text-background text-3xl sm:text-4xl md:text-5xl mb-6">Klaar voor de nieuwe manier van zoeken?</h2>
                    <p className="relative z-10 font-sans text-background/70 text-lg mb-10 max-w-xl mx-auto">
                        We richten je content in op directe antwoorden en zetten je budget op de zoekopdrachten die klanten opleveren. Plan een gratis gesprek en ontdek wat er mogelijk is.
                    </p>
                    <Link to="/contact" className="relative z-10 btn-magnetic inline-flex items-center justify-center bg-accent text-background font-sans font-bold text-lg px-10 py-4 rounded-[2rem] hover:bg-accent/90 transition-colors">
                        Samenwerken met Empowers
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
