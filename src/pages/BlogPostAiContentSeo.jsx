import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ChevronRight, User } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function BlogPostAiContentSeo() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen selection:bg-accent/30 selection:text-dark flex flex-col bg-background">
            <Helmet>
                <title>AI content en SEO: wat werkt nog en wat niet meer? | Empowers</title>
                <meta name="description" content="AI-gegenereerde content en SEO in 2026: wat Google wel en niet accepteert, hoe je AI slim inzet zonder je rankings te verliezen en welke fouten je moet vermijden." />
                <link rel="canonical" href="https://www.empowers.nl/blogs/seo/ai-content-seo-werkt-meer" />
                <meta property="og:title" content="AI content en SEO: wat werkt nog en wat niet meer?" />
                <meta property="og:description" content="AI-gegenereerde content en SEO in 2026: wat Google wel en niet accepteert en hoe je AI slim inzet." />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://www.empowers.nl/blogs/seo/ai-content-seo-werkt-meer" />
                <meta property="og:image" content="https://www.empowers.nl/images/blogs/ai-content-seo-werkt-meer.jpg" />
                <meta property="article:published_time" content="2026-04-16" />
                <meta property="article:author" content="Empowers" />
                <meta property="article:section" content="SEO" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="AI content en SEO: wat werkt nog en wat niet meer?" />
                <meta name="twitter:description" content="Hoe je AI-content inzet voor SEO zonder je rankings te riskeren. Praktische tips voor 2026." />

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Article",
                        "headline": "AI content en SEO: wat werkt nog en wat niet meer?",
                        "description": "AI-gegenereerde content en SEO in 2026: wat Google wel en niet accepteert, hoe je AI slim inzet zonder je rankings te verliezen en welke fouten je moet vermijden.",
                        "image": "https://www.empowers.nl/images/blogs/ai-content-seo-werkt-meer.jpg",
                        "datePublished": "2026-04-16T10:00:00+02:00",
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
                                    "name": "Accepteert Google AI-gegenereerde content?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Ja, Google accepteert AI-content zolang de kwaliteit hoog is en de inhoud waarde biedt aan de lezer. Google beoordeelt content op E-E-A-T: ervaring, expertise, autoriteit en betrouwbaarheid. Of je het met de hand schrijft of met AI maakt is niet relevant. Wat telt is of het nuttig, origineel en betrouwbaar is."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Kan Google herkennen of content door AI is geschreven?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Google heeft geen publiek AI-detectiesysteem voor rankings. Ze beoordelen content op kwaliteit, niet op herkomst. In de praktijk kan Google patronen herkennen die wijzen op lage kwaliteit of spam, ongeacht of die door AI of door een mens is gemaakt. Goed bewerkte AI-content wordt niet gestraft."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Hoeveel moet je AI-content bewerken voor SEO?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Er is geen vast percentage, maar het principe is duidelijk: voeg eigen expertise, voorbeelden uit de praktijk en een herkenbare schrijfstijl toe. Puur kopiëren en plakken van AI-output zonder bewerking levert geen onderscheidende content op. Reken op minimaal 30 tot 50 procent eigen inbreng voor content die echt presteert in de zoekresultaten."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Wat zijn de risico's van AI-content voor SEO?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "De grootste risico's zijn: generieke content die niet onderscheidend is, feitelijke fouten die je autoriteit schaden, en massaal publiceren zonder kwaliteitscontrole. Google straft niet het gebruik van AI, maar wel de gevolgen van slechte content: hoge bouncerates, lage betrokkenheid en gebrek aan unieke waarde."
                                    }
                                }
                            ]
                        },
                        "breadcrumb": {
                            "@type": "BreadcrumbList",
                            "itemListElement": [
                                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.empowers.nl" },
                                { "@type": "ListItem", "position": 2, "name": "SEO", "item": "https://www.empowers.nl/blogs/seo" },
                                { "@type": "ListItem", "position": 3, "name": "AI content en SEO" }
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
                        <Link to="/blogs/seo" className="hover:text-accent transition-colors">SEO</Link>
                        <ChevronRight size={12} />
                        <span className="text-primary/30">AI content en SEO</span>
                    </nav>

                    {/* Header */}
                    <header className="mb-16">
                        <div className="inline-block px-3 py-1 bg-accent/10 text-accent font-mono text-xs uppercase tracking-widest rounded-full mb-6">
                            SEO
                        </div>
                        <h1 className="font-sans font-bold text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight mb-8">
                            AI content en SEO: wat werkt nog en wat niet meer?
                        </h1>
                        <div className="flex flex-wrap items-center gap-6 text-sm font-sans text-primary/60 border-y border-primary/10 py-6">
                            <span className="flex items-center gap-2"><User size={14} />Empowers Redactie</span>
                            <span className="flex items-center gap-2"><Calendar size={14} />16 apr 2026</span>
                            <span className="flex items-center gap-2"><Clock size={14} />9 min leestijd</span>
                        </div>
                    </header>

                    {/* Featured Image */}
                    <figure className="w-full h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden mb-16 relative bg-primary">
                        <div className="absolute inset-0 bg-[url('/images/blogs/ai-content-seo-werkt-meer.jpg')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </figure>

                    {/* Content */}
                    <div className="prose prose-lg max-w-none">

                        <p className="text-xl leading-relaxed text-primary/80 font-medium mb-6">
                            Iedereen gebruikt AI voor content. ChatGPT, Claude, Gemini — de tools zijn er en ze zijn snel. Maar de vraag die elke ondernemer zich stelt: wat vindt Google ervan? Wordt AI-content gestraft? En als het wel mag, hoe zet je het dan in zonder je rankings te verspelen? In dit artikel lees je precies wat werkt, wat niet meer werkt en hoe je AI slim combineert met SEO in 2026.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Google straft AI-content niet (maar slechte content wel)</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Laten we beginnen met het belangrijkste misverstand: Google straft je niet omdat je AI hebt gebruikt. Google heeft dat in 2023 al expliciet gemaakt en dat standpunt is sindsdien niet veranderd. Het maakt voor Google niet uit hoe content is gemaakt. Het maakt uit wat de kwaliteit is.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Google beoordeelt content op E-E-A-T: Experience (ervaring), Expertise, Authoritativeness (autoriteit) en Trustworthiness (betrouwbaarheid). Een artikel dat door AI is geschreven maar verrijkt is met echte ervaring, praktijkvoorbeelden en betrouwbare bronnen kan prima hoog ranken. Een artikel dat door een mens is geschreven maar oppervlakkig en generiek is, zal dat niet doen.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Wat Google wél straft: content die puur bestaat om te ranken zonder waarde te bieden. Massaal geproduceerde pagina's die dezelfde informatie herkauwen in iets andere bewoordingen. Dat was al een probleem vóór AI. AI maakt het alleen makkelijker om die fout op grote schaal te maken.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat niet meer werkt: de fouten die je rankings kosten</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            In de eerste maanden dat AI-tools breed beschikbaar werden, publiceerden bedrijven honderden artikelen per week. Rechtstreeks uit ChatGPT, zonder bewerking, zonder controle, zonder eigen inbreng. Sommige sites zagen hun verkeer tijdelijk stijgen. Daarna volgde de correctie.
                        </p>

                        <h3 className="font-semibold text-primary text-xl mt-10 mb-4">Onbewerkte AI-output publiceren</h3>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            AI-tools produceren tekst die grammaticaal correct is en logisch klinkt. Maar die tekst is ook voorspelbaar. De zinsbouw, woordkeuze en structuur volgen herkenbare patronen. Google detecteert geen "AI-content" als zodanig, maar gebruikers herkennen generieke content wel. Ze lezen minder lang, klikken sneller weg en delen het niet. Die signalen vertellen Google genoeg.
                        </p>

                        <h3 className="font-semibold text-primary text-xl mt-10 mb-4">Massaal publiceren zonder strategie</h3>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Vijftig artikelen per maand klinkt ambitieus. Maar als elk artikel hetzelfde zegt in andere woorden, bouw je geen autoriteit op. Google ziet dat meerdere pagina's op jouw site met elkaar concurreren voor dezelfde zoekwoorden. Dat heet keyword kannibalisatie en het verzwakt al je pagina's in plaats van er één sterk te maken.
                        </p>

                        <h3 className="font-semibold text-primary text-xl mt-10 mb-4">Geen feitencontrole uitvoeren</h3>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            AI-tools verzinnen feiten. Dat is geen bug, dat is hoe taalmodellen werken. Ze voorspellen de meest waarschijnlijke volgende woorden, niet de meest correcte. Publiceer je content met foute cijfers, verzonnen bronnen of onjuiste claims, dan verlies je het vertrouwen van je lezers én van Google. E-E-A-T draait om betrouwbaarheid. Eén fout artikel kan maanden werk ondermijnen.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat wél werkt: AI als startpunt, niet als eindproduct</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De bedrijven die het meeste uit AI halen voor hun SEO, gebruiken het als versneller, niet als vervanging. Ze laten AI het zware werk doen — research, structuur, eerste concepten — en voegen zelf de waarde toe die het verschil maakt.
                        </p>

                        <h3 className="font-semibold text-primary text-xl mt-10 mb-4">Gebruik AI voor research en structuur</h3>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Laat AI een overzicht maken van subtopics rondom jouw onderwerp. Vraag om een outline met logische koppenstructuur. Laat het gerelateerde zoekwoorden en veelgestelde vragen genereren. Dat bespaart uren werk en geeft je een stevig fundament om op te bouwen.
                        </p>

                        <h3 className="font-semibold text-primary text-xl mt-10 mb-4">Voeg eigen ervaring en voorbeelden toe</h3>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Dit is waar het verschil zit. AI kan schrijven dat "een goede landingspagina een duidelijke CTA heeft." Jij kunt schrijven dat je vorige maand de CTA van een klant veranderde van "Meer informatie" naar "Plan een gesprek" en dat de conversie met 34% steeg. Dat eerste is informatie. Dat tweede is ervaring. Google en je lezers zien het verschil.
                        </p>

                        <h3 className="font-semibold text-primary text-xl mt-10 mb-4">Bewerk de toon en schrijfstijl</h3>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            AI schrijft neutraal. Dat is handig voor de basis, maar het is niet jouw stem. Bewerk de tekst zodat die klinkt zoals jij communiceert met klanten. Gebruik jij-taal. Maak zinnen korter. Voeg herkenbare uitdrukkingen toe. Lezers blijven langer hangen bij content die persoonlijk aanvoelt, en dat langere bezoek is een positief SEO-signaal.
                        </p>

                        <h3 className="font-semibold text-primary text-xl mt-10 mb-4">Controleer elk feit</h3>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Laat AI nooit het laatste woord hebben over cijfers, datums, percentages of bronvermeldingen. Check elke claim. Verwijs naar betrouwbare bronnen. Voeg links toe naar officiële documentatie, onderzoeken of eigen analyses. Dat kost extra tijd, maar het beschermt je autoriteit en geeft Google een reden om jouw pagina hoger te plaatsen dan een concurrent die dat niet doet.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">De juiste balans: hoeveel AI en hoeveel mens?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Er is geen magisch percentage. Maar na het analyseren van honderden pagina's die goed presteren in de zoekresultaten zien we een patroon. Content die het beste scoort, combineert AI-efficiëntie met menselijke diepgang. In de praktijk betekent dat: laat AI 40 tot 60% van het schrijfwerk doen en besteed de rest aan bewerking, verrijking en controle.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Voor sommige content is meer menselijke inbreng nodig. Een casestudy over een klantresultaat kun je niet door AI laten schrijven, die ervaring is van jou. Een technische uitleg over hoe Google's algoritme werkt kan AI beter structureren, maar de nuances en praktijkervaring voeg jij toe.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">AI-content en E-E-A-T: waar het samenkomt</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            E-E-A-T is het raamwerk waarmee Google contentkwaliteit beoordeelt. Elk onderdeel heeft een directe relatie met hoe je AI inzet.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Experience (ervaring) vraagt om content van iemand die het onderwerp uit eerste hand kent. AI heeft geen ervaring. Jij wel. Voeg eigen cases, anekdotes en lessen toe die bewijzen dat je weet waarover je schrijft.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Expertise toon je door diepgang. Niet door te herhalen wat iedereen al weet, maar door verder te gaan. Leg uit waaróm iets werkt, niet alleen dát het werkt. AI geeft je de basis. Jouw kennis maakt het onderscheidend.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Authoritativeness bouw je op met backlinks, vermeldingen en consistente publicatie. AI helpt je sneller meer goede content te publiceren, wat op termijn je autoriteit versterkt. Maar alleen als de kwaliteit op peil blijft.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Trustworthiness hangt af van nauwkeurigheid en transparantie. Foutloze content met correcte bronnen bouwt vertrouwen op. AI-content zonder feitencontrole doet het tegenovergestelde.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Praktisch: zo ziet een goed AI-SEO-werkproces eruit</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een werkproces dat consistent goede resultaten oplevert, ziet er zo uit. Start met zoekwoordenonderzoek. Kies een onderwerp waar vraag naar is en waar jij iets waardevols over kunt zeggen. Laat AI een eerste outline maken met koppen, subkoppen en aandachtspunten.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Schrijf het eerste concept met AI. Geef de tool context: beschrijf je doelgroep, je schrijfstijl en welke invalshoek je wilt. Hoe specifieker je prompt, hoe bruikbaarder de output.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Bewerk het concept grondig. Vervang generieke voorbeelden door eigen ervaringen. Schrap zinnen die niets toevoegen. Voeg interne links toe naar relevante pagina's op je site, zoals <Link to="/blogs/seo/zoekwoordenonderzoek-2026-complete-gids" className="text-accent hover:underline">onze gids over zoekwoordenonderzoek</Link>. Controleer alle feiten en cijfers.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Publiceer en monitor. Kijk na twee tot vier weken hoe de pagina presteert in Google Search Console. Welke zoekwoorden trekken verkeer? Hoe lang blijven bezoekers? Gebruik die data om de content te verbeteren en bij te werken.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">AI-content voor verschillende soorten pagina's</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Niet elke pagina leent zich evengoed voor AI. Blogartikelen en informatieve content zijn ideaal: AI helpt je sneller en gestructureerder te schrijven, jij voegt de expertise toe. Productpagina's voor webshops kunnen deels met AI, maar specificaties en unieke verkoopargumenten schrijf je zelf.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Landingspagina's zijn een ander verhaal. Daar draait het om overtuigingskracht en conversie. AI kan een basis leveren, maar de uiteindelijke tekst moet precies aansluiten op jouw doelgroep en aanbod. Meer over effectieve landingspagina's lees je in <Link to="/blogs/strategie/landingspagina-schrijven-converteert" className="text-accent hover:underline">ons artikel over landingspagina's die converteren</Link>.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Casestudy's en klantverhalen: hier is AI het minst nuttig. Deze content leeft van authenticiteit en persoonlijke ervaring. Gebruik AI hooguit om het verhaal te structureren, maar de inhoud moet van jou komen.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">De toekomst: AI-content wordt de norm</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Vrijwel elke professionele contentmaker gebruikt in 2026 AI-tools in enige vorm. Het verschil zit niet meer in wél of niet gebruiken, maar in hóe je het gebruikt. Bedrijven die AI behandelen als een persoonlijke assistent — iemand die het voorwerk doet zodat jij je kunt richten op kwaliteit en strategie — presteren het beste.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Google's algoritme wordt steeds beter in het herkennen van content die echt waarde biedt versus content die alleen maar pagina's vult. De bar voor kwaliteit gaat omhoog, niet omlaag. AI verlaagt de drempel om content te maken, maar verhoogt de lat voor wat goed genoeg is om te ranken.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Wil je ook zichtbaar worden in AI-zoekmachines zoals ChatGPT en Perplexity? Lees dan <Link to="/blogs/geo/ai-zoekmachines-bronnen" className="text-accent hover:underline">hoe AI-zoekmachines bronnen kiezen</Link> en hoe je jouw kans vergroot om geciteerd te worden.
                        </p>

                    </div>

                    {/* FAQ */}
                    <section className="mt-16 pt-12 border-t border-primary/10">
                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Veelgestelde vragen over AI-content en SEO</h2>
                        <div className="space-y-6 not-prose">
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Accepteert Google AI-gegenereerde content?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Ja, Google accepteert AI-content zolang de kwaliteit hoog is en de inhoud waarde biedt aan de lezer. Google beoordeelt content op E-E-A-T: ervaring, expertise, autoriteit en betrouwbaarheid. Of je het met de hand schrijft of met AI maakt is niet relevant. Wat telt is of het nuttig, origineel en betrouwbaar is.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Kan Google herkennen of content door AI is geschreven?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Google heeft geen publiek AI-detectiesysteem voor rankings. Ze beoordelen content op kwaliteit, niet op herkomst. In de praktijk kan Google patronen herkennen die wijzen op lage kwaliteit of spam, ongeacht of die door AI of door een mens is gemaakt. Goed bewerkte AI-content wordt niet gestraft.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoeveel moet je AI-content bewerken voor SEO?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Er is geen vast percentage, maar het principe is duidelijk: voeg eigen expertise, voorbeelden uit de praktijk en een herkenbare schrijfstijl toe. Reken op minimaal 30 tot 50 procent eigen inbreng voor content die echt presteert in de zoekresultaten.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat zijn de risico's van AI-content voor SEO?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">De grootste risico's zijn generieke content die niet onderscheidend is, feitelijke fouten die je autoriteit schaden, en massaal publiceren zonder kwaliteitscontrole. Google straft niet het gebruik van AI, maar wel de gevolgen van slechte content: hoge bouncerates, lage betrokkenheid en gebrek aan unieke waarde.</p>
                            </div>
                        </div>
                    </section>

                    {/* Related */}
                    <section className="mt-16 pt-12 border-t border-primary/10">
                        <h3 className="text-xl font-bold text-primary mb-6">Lees ook</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <Link to="/blogs/seo/zoekwoordenonderzoek-2026-complete-gids" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Zoekwoordenonderzoek 2026</h3>
                                <p className="text-primary/60 text-sm">De complete gids voor zoekwoordenonderzoek in 2026 inclusief tools en contentplan.</p>
                            </Link>
                            <Link to="/blogs/geo/ai-zoekmachines-bronnen" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">AI-zoekmachines en bronnen</h3>
                                <p className="text-primary/60 text-sm">Hoe AI-zoekmachines zoals ChatGPT en Perplexity kiezen welke bronnen ze citeren.</p>
                            </Link>
                            <Link to="/blogs/strategie/landingspagina-schrijven-converteert" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Landingspagina die converteert</h3>
                                <p className="text-primary/60 text-sm">Zo schrijf je een landingspagina die bezoekers omzet in klanten.</p>
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
                        Wil je content die scoort in Google én verkoopt?
                    </h2>
                    <p className="relative z-10 font-sans text-background/70 text-lg mb-10 max-w-xl mx-auto">
                        Wij combineren AI-efficiëntie met menselijke expertise. Het resultaat: content die rankt, vertrouwen wekt en klanten oplevert.
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
