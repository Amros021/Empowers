import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ChevronRight, User } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function BlogPostContentAudit() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen selection:bg-accent/30 selection:text-dark flex flex-col bg-background">
            <Helmet>
                <title>Content audit: zo ontdek je welke pagina's jou schaden | Empowers</title>
                <meta name="description" content="Een content audit laat zien welke pagina's je rankings dragen en welke je juist naar beneden trekken. Leer hoe je in 6 stappen elke pagina beoordeelt en wat je ermee doet." />
                <link rel="canonical" href="https://www.empowers.nl/blogs/seo/content-audit" />
                <meta property="og:title" content="Content audit: zo ontdek je welke pagina's jou schaden" />
                <meta property="og:description" content="Verouderde, dunne en kannibaliserende pagina's kosten je rankings. Zo vind je ze en los je het op." />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://www.empowers.nl/blogs/seo/content-audit" />
                <meta property="og:image" content="https://www.empowers.nl/images/blogs/content-audit.jpg" />
                <meta property="article:published_time" content="2026-04-18T12:00:00+02:00" />
                <meta property="article:author" content="Empowers" />
                <meta property="article:section" content="SEO" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Content audit: de pagina's die jouw SEO saboteren" />
                <meta name="twitter:description" content="Snel en concreet stappenplan om zwakke pagina's op te sporen en je site weer gezond te maken." />

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Article",
                        "headline": "Content audit: zo ontdek je welke pagina's jou schaden",
                        "description": "Een content audit laat zien welke pagina's je rankings dragen en welke je juist naar beneden trekken. Leer hoe je in 6 stappen elke pagina beoordeelt en wat je ermee doet.",
                        "image": "https://www.empowers.nl/images/blogs/content-audit.jpg",
                        "datePublished": "2026-04-18T12:00:00+02:00",
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
                                    "name": "Wat is een content audit?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Een content audit is een systematische doorlichting van elke indexeerbare pagina op jouw website. Per pagina kijk je naar verkeer, backlinks, conversies en zoekintentie. Daarna beslis je per pagina: behouden, verbeteren, samenvoegen of verwijderen. Het doel is een sterkere site door minder, maar beter presterende content."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Hoe vaak moet je een content audit doen?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Voor een middelgrote bedrijfssite is eens per twaalf maanden voldoende. Webshops met veel productpagina's en sites die wekelijks nieuwe content plaatsen doen beter elke zes maanden een audit. Na een grote Google update of een migratie doe je altijd een extra check, omdat oude patronen dan snel verouderen."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Welke tools heb je nodig voor een content audit?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Google Search Console en Google Analytics 4 zijn onmisbaar. Voor dieper inzicht zijn Ahrefs, Semrush of Screaming Frog handig. Je kunt al met de gratis tools heel ver komen: Search Console levert zoekopdrachten en kliks per pagina, GA4 levert gedrag en conversies. Een betaalde tool is pas nodig vanaf ongeveer honderd pagina's."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Wanneer moet je een pagina verwijderen in plaats van herschrijven?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Verwijder een pagina als hij geen verkeer, geen backlinks en geen conversies meer oplevert én het onderwerp niet meer relevant is voor jouw bedrijf. Zet een 301-redirect naar een vergelijkbare sterkere pagina. Verwijder zonder redirect alleen als het echt irrelevante content is, zoals oude vacatures of verlopen evenementen."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Wat is content kannibalisatie?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Content kannibalisatie is als meerdere pagina's op dezelfde zoekterm proberen te ranken. Google kiest dan per zoekopdracht een andere winnaar, wat ervoor zorgt dat geen van de pagina's structureel hoog scoort. De oplossing: pagina's samenvoegen tot één sterker stuk, of elk een ander zoekintent geven en intern duidelijk linken."
                                    }
                                }
                            ]
                        },
                        "breadcrumb": {
                            "@type": "BreadcrumbList",
                            "itemListElement": [
                                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.empowers.nl" },
                                { "@type": "ListItem", "position": 2, "name": "SEO", "item": "https://www.empowers.nl/blogs/seo" },
                                { "@type": "ListItem", "position": 3, "name": "Content audit" }
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
                        <span className="text-primary/30">Content audit</span>
                    </nav>

                    {/* Header */}
                    <header className="mb-16">
                        <div className="inline-block px-3 py-1 bg-accent/10 text-accent font-mono text-xs uppercase tracking-widest rounded-full mb-6">
                            SEO
                        </div>
                        <h1 className="font-sans font-bold text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight mb-8">
                            Content audit: zo ontdek je welke pagina's jou schaden
                        </h1>
                        <div className="flex flex-wrap items-center gap-6 text-sm font-sans text-primary/60 border-y border-primary/10 py-6">
                            <span className="flex items-center gap-2"><User size={14} />Empowers Redactie</span>
                            <span className="flex items-center gap-2"><Calendar size={14} />18 apr 2026</span>
                            <span className="flex items-center gap-2"><Clock size={14} />8 min leestijd</span>
                        </div>
                    </header>

                    {/* Featured Image */}
                    <figure className="w-full h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden mb-16 relative bg-primary">
                        <div className="absolute inset-0 bg-[url('/images/blogs/content-audit.jpg')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </figure>

                    {/* Content */}
                    <div className="prose prose-lg max-w-none">

                        <p className="text-xl leading-relaxed text-primary/80 font-medium mb-6">
                            Niet elke pagina op jouw website helpt. Sommige brengen verkeer binnen, andere trekken je gemiddelde naar beneden en saboteren je rankings zonder dat je het doorhebt. Een content audit brengt dat in kaart. In dit artikel lees je in zes stappen hoe je jouw site doorlicht, welke signalen wijzen op schadelijke pagina's en welke beslissing je per pagina neemt.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat is een content audit precies?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een content audit is een inventarisatie van al je indexeerbare pagina's, gekoppeld aan prestatiegegevens per pagina. Je meet hoeveel verkeer, kliks, backlinks en conversies elke pagina oplevert. Op basis daarvan neem je per pagina één van vier beslissingen: behouden, verbeteren, samenvoegen of verwijderen.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Het klinkt als administratief werk, maar een audit levert vaak de snelste SEO-winst van het jaar op. Google hanteert sinds 2020 site quality signalen die kijken naar de hele domeinkwaliteit. Vijftig dunne, verouderde of onbezochte pagina's kunnen honderd sterke pagina's naar beneden trekken. Minder content van betere kwaliteit rankt in de praktijk bijna altijd beter.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Bij onze klanten zien we regelmatig dat het verwijderen of samenvoegen van dertig procent van de content de organische kliks binnen drie maanden met 20 tot 40 procent verhoogt. Zonder nieuwe content te schrijven. Puur door zwakke pagina's te elimineren.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Welke pagina's schaden jouw SEO het meest?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een pagina is schadelijk als hij weinig waarde levert en tegelijk crawl budget, indexeringsaandacht of interne linkautoriteit opslokt. Er zijn zes soorten pagina's die dit probleem veroorzaken.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Ten eerste: zero-traffic pagina's. Pagina's die in de laatste twaalf maanden geen enkele organische klik hebben gegenereerd. Ten tweede: dunne content onder de 300 woorden zonder duidelijk doel. Ten derde: gedupliceerde content of parameter-URL's die identieke inhoud tonen. Ten vierde: verouderde content met data, prijzen of cijfers die niet meer kloppen.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Ten vijfde: kannibaliserende pagina's die elkaar beconcurreren op dezelfde zoekopdracht. Ten zesde: doorverwezen pagina's waar intern naartoe gelinkt wordt maar die 404 of soft 404 retourneren. Elk van deze categorieën vraagt een andere oplossing.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Stap 1: inventariseer alle pagina's</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Begin met een volledige lijst van alle URL's die Google kent. Exporteer uit Google Search Console onder Pagina's alle geïndexeerde URL's. Combineer dit met een crawl van Screaming Frog of een vergelijkbare tool. Zo vang je ook pagina's die wel bestaan maar geen verkeer trekken.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Zet alles in een Excel of Google Sheet met per URL vier kolommen: kliks afgelopen twaalf maanden (uit Search Console), unieke bezoekers (uit GA4), aantal verwijzende backlinks (uit Ahrefs of Semrush) en conversies (uit GA4 of je CRM). Deze basis is de bron voor alle vervolgstappen.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Stap 2: filter zero-traffic pagina's</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Filter op pagina's met nul kliks en nul backlinks in de laatste twaalf maanden. Voor een middelgrote site is dit vaak 30 tot 60 procent van alle pagina's. Dat klinkt veel maar is realistisch. Niet elke blog uit 2019 brengt nog verkeer.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Voor elke pagina in deze groep: check of het onderwerp nog relevant is voor jouw bedrijf en of de pagina een logische functie heeft (zoals contact, privacy, algemene voorwaarden). Zo niet, dan is hij kandidaat voor verwijdering of 301-redirect naar een sterkere pagina. Over technische SEO-signalen die meewegen lees je meer in <Link to="/blogs/seo/technische-seo-checklist-2025-website" className="text-accent hover:underline">deze technische SEO checklist</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Stap 3: vind kannibaliserende pagina's</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Open in Search Console het Prestaties-rapport en groepeer op zoekopdracht. Sorteer op vertoningen. Klik per belangrijke zoekopdracht op het tabblad Pagina's. Zie je drie of meer pagina's die allemaal vertoningen scoren op dezelfde term? Dan is er kannibalisatie. Google kiest per veiling steeds een andere winnaar en geen enkele pagina consolideert autoriteit.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De oplossing is bijna altijd consolideren. Kies de pagina met de meeste backlinks en het beste verkeer. Voeg de beste elementen uit de andere pagina's in de gekozen pagina en zet 301-redirects op de verwijderde URL's. Werk alle interne links bij naar de nieuwe master pagina.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Stap 4: beoordeel content kwaliteit per pagina</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Pak de pagina's die wél verkeer hebben maar laag scoren per klik. Denk aan pagina's met 200 vertoningen en drie kliks per maand. Die positie 15-20 wordt meestal veroorzaakt door een van drie dingen: verouderde inhoud, te dunne tekst of zwak matchende zoekintentie.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Loop per pagina vier vragen af. Dekt de pagina de zoekintentie volledig? Zijn de cijfers, prijzen en voorbeelden nog actueel? Staan er betere bronnen in de top 10 die iets laten zien wat jij mist? Heeft de pagina minimaal één echt waardevol element dat anderen niet hebben?
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een herschrijf levert bij ons gemiddeld 2 tot 3x zoveel kliks op binnen vier maanden als de bestaande content. Het kost minder tijd dan een nieuw artikel en het gebruikt de autoriteit die de URL al heeft opgebouwd. Meer over schrijven voor zoekvolume lees je in <Link to="/blogs/seo/ai-content-seo-werkt-meer" className="text-accent hover:underline">onze gids over AI content en SEO</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Stap 5: maak de actielijst</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Ken aan elke URL één van vier acties toe. Behouden voor pagina's die consistent verkeer leveren en actueel zijn. Verbeteren voor pagina's met potentieel die een update verdienen. Samenvoegen voor kannibaliserende sets. Verwijderen met redirect voor dode pagina's.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Prioriteer de actielijst op basis van impact. Kannibaliserende pagina's rond sterke commerciële zoekwoorden krijgen de hoogste prioriteit. Zero-traffic content onderin de site kan wachten. Blokkeer minimaal drie uur per week in je planning om de audit binnen acht weken volledig uit te voeren.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Stap 6: meet het effect na 90 dagen</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een content audit laat pas na dertig tot negentig dagen zijn volledige effect zien. Google heeft tijd nodig om verwijderde pagina's uit de index te halen, redirects te verwerken en de herbeoordeelde pagina's opnieuw te crawlen. Meet in Search Console het verschil in totaal aantal kliks en de gemiddelde positie over die periode.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Kijk vooral naar de pagina's die je hebt verbeterd of samengevoegd. Als die pagina's gemiddeld 30 tot 50 procent meer kliks genereren, heeft de audit gewerkt. Zie je geen beweging? Dan is de site-brede kwaliteit meestal nog steeds het probleem en moet je verder snijden.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">De meest gemaakte fouten bij een content audit</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De grootste fout is pagina's verwijderen zonder redirect. Daarmee verlies je linkequity van backlinks die naar de oude URL wijzen. Zet altijd een 301-redirect naar een thematisch verwante pagina, ook als die pagina niet exact hetzelfde onderwerp heeft.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een tweede fout: beslissen op basis van alleen kliks zonder backlinks mee te wegen. Een pagina met drie kliks per maand maar tien kwalitatieve backlinks is waardevol. Die redirect je, verwijder je niet. Een derde fout is te lang doorgaan met verbeteren van content die fundamenteel de verkeerde intentie dient. Pagina's die je commerciëel nodig hebt maar informationele intent matchen zijn zelden te redden via aanpassingen. Beter verplaats je de content naar een eigen blog en bouw je een nieuwe, commerciële pagina.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe vaak moet je een audit herhalen?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Voor sites met minder dan 200 pagina's volstaat een jaarlijkse audit. Sites met duizenden product- of blogpagina's doen er verstandig aan elk kwartaal een steekproef te doen. Na een grote Google core update is een tussentijdse mini-audit van de 20 belangrijkste pagina's altijd slim: daar zie je vaak binnen dagen wat Google anders beoordeelt.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Houd een logboek bij per audit. Wat heb je verwijderd, wat samengevoegd, welke pagina's kregen een herschrijf? Zo bouw je patroonherkenning op over wat voor jouw site werkt. Voor veel sites blijkt dat dezelfde soort pagina's telkens de zwakste blijken: dunne tag-pagina's, oude persberichten of auteursprofielen zonder content. Weet je die types eerder te herkennen, dan audit je sneller.
                        </p>

                    </div>

                    {/* FAQ */}
                    <section className="mt-16 pt-12 border-t border-primary/10">
                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Veelgestelde vragen over content audits</h2>
                        <div className="space-y-6 not-prose">
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat is een content audit?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Een content audit is een systematische doorlichting van elke indexeerbare pagina op jouw website. Per pagina kijk je naar verkeer, backlinks, conversies en zoekintentie. Daarna beslis je per pagina: behouden, verbeteren, samenvoegen of verwijderen. Het doel is een sterkere site door minder, maar beter presterende content.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoe vaak moet je een content audit doen?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Voor een middelgrote bedrijfssite is eens per twaalf maanden voldoende. Webshops met veel productpagina's en sites die wekelijks nieuwe content plaatsen doen beter elke zes maanden een audit. Na een grote Google update of een migratie doe je altijd een extra check, omdat oude patronen dan snel verouderen.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Welke tools heb je nodig voor een content audit?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Google Search Console en Google Analytics 4 zijn onmisbaar. Voor dieper inzicht zijn Ahrefs, Semrush of Screaming Frog handig. Je kunt al met de gratis tools heel ver komen: Search Console levert zoekopdrachten en kliks per pagina, GA4 levert gedrag en conversies. Een betaalde tool is pas nodig vanaf ongeveer honderd pagina's.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wanneer moet je een pagina verwijderen in plaats van herschrijven?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Verwijder een pagina als hij geen verkeer, geen backlinks en geen conversies meer oplevert én het onderwerp niet meer relevant is voor jouw bedrijf. Zet een 301-redirect naar een vergelijkbare sterkere pagina. Verwijder zonder redirect alleen als het echt irrelevante content is, zoals oude vacatures of verlopen evenementen.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat is content kannibalisatie?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Content kannibalisatie is als meerdere pagina's op dezelfde zoekterm proberen te ranken. Google kiest dan per zoekopdracht een andere winnaar, wat ervoor zorgt dat geen van de pagina's structureel hoog scoort. De oplossing: pagina's samenvoegen tot één sterker stuk, of elk een ander zoekintent geven en intern duidelijk linken.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoe lang duurt een content audit voor een site van 500 pagina's?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Reken op vier tot acht weken bij drie uur per week werk. De eerste week is data verzamelen en clusteren. Week twee tot vier is beoordelen en beslissen. Week vijf tot acht is uitvoeren: herschrijven, samenvoegen en redirects inrichten. Met een bureau kan dit in drie weken, omdat meerdere mensen parallel werken.</p>
                            </div>
                        </div>
                    </section>

                    {/* Related */}
                    <section className="mt-16 pt-12 border-t border-primary/10">
                        <h3 className="text-xl font-bold text-primary mb-6">Lees ook</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <Link to="/blogs/seo/technische-seo-checklist-2025-website" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Technische SEO checklist</h3>
                                <p className="text-primary/60 text-sm">Alle technische checks die jouw site moet doorstaan om goed te blijven ranken.</p>
                            </Link>
                            <Link to="/blogs/seo/ai-content-seo-werkt-meer" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">AI content en SEO</h3>
                                <p className="text-primary/60 text-sm">Wat Google accepteert aan AI-content en waar je moet oppassen.</p>
                            </Link>
                            <Link to="/blogs/seo/backlinks-opbouwen" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Backlinks opbouwen</h3>
                                <p className="text-primary/60 text-sm">Hoe je kwalitatieve backlinks wint die jouw autoriteit versterken.</p>
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
                        Jouw site snel sterker?
                    </h2>
                    <p className="relative z-10 font-sans text-background/70 text-lg mb-10 max-w-xl mx-auto">
                        We doen een gratis quick-scan van de tien zwakste pagina's op jouw site. Je weet dezelfde week wat je moet snijden en wat je moet verbeteren.
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
