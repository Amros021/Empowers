import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ChevronRight, User } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function BlogPostCanonicalTagsGebruik() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen selection:bg-accent/30 selection:text-dark flex flex-col bg-background">
            <Helmet>
                <title>Canonical tags: wanneer gebruik je ze | Empowers</title>
                <meta name="description" content="Een canonical tag vertelt Google welke versie van een pagina de hoofdversie is. Lees wanneer je hem gebruikt en welke fouten je rankings kosten." />
                <link rel="canonical" href="https://www.empowers.nl/blogs/seo/canonical-tags-gebruik" />
                <meta property="og:title" content="Canonical tags: wanneer gebruik je ze | Empowers" />
                <meta property="og:description" content="Een canonical tag vertelt Google welke versie van een pagina de hoofdversie is. Lees wanneer je hem gebruikt en welke fouten je rankings kosten." />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://www.empowers.nl/blogs/seo/canonical-tags-gebruik" />
                <meta property="og:image" content="https://www.empowers.nl/images/blogs/canonical-tags-gebruik.jpg" />
                <meta property="article:published_time" content="2026-07-26T15:00:00+02:00" />
                <meta property="article:author" content="Empowers" />
                <meta property="article:section" content="SEO" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Canonical tags: wanneer gebruik je ze | Empowers" />
                <meta name="twitter:description" content="Een canonical tag vertelt Google welke versie van een pagina de hoofdversie is. Lees wanneer je hem gebruikt en welke fouten je rankings kosten." />
                <script type="application/ld+json">{JSON.stringify({
                    "@context": "https://schema.org",
                    "@graph": [
                        {
                            "@type": "Article",
                            "headline": "Canonical tags: wanneer gebruik je ze",
                            "image": "https://www.empowers.nl/images/blogs/canonical-tags-gebruik.jpg",
                            "description": "Een canonical tag vertelt Google welke versie van een pagina de hoofdversie is. Lees wanneer je hem gebruikt en welke fouten je rankings kosten.",
                            "author": { "@type": "Organization", "name": "Empowers" },
                            "publisher": { "@type": "Organization", "name": "Empowers", "url": "https://www.empowers.nl" },
                            "datePublished": "2026-07-26T15:00:00+02:00",
                            "dateModified": "2026-07-26T15:00:00+02:00",
                            "url": "https://www.empowers.nl/blogs/seo/canonical-tags-gebruik"
                        },
                        {
                            "@type": "BreadcrumbList",
                            "itemListElement": [
                                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.empowers.nl" },
                                { "@type": "ListItem", "position": 2, "name": "Nieuws", "item": "https://www.empowers.nl/nieuws" },
                                { "@type": "ListItem", "position": 3, "name": "SEO", "item": "https://www.empowers.nl/blogs/seo" },
                                { "@type": "ListItem", "position": 4, "name": "Canonical tags: wanneer gebruik je ze", "item": "https://www.empowers.nl/blogs/seo/canonical-tags-gebruik" }
                            ]
                        },
                        {
                            "@type": "FAQPage",
                            "mainEntity": [
                                { "@type": "Question", "name": "Wat is een canonical tag?", "acceptedAnswer": { "@type": "Answer", "text": "Een canonical tag is een regel code in de head van je pagina die aangeeft welke URL de hoofdversie van die content is. Bestaan er meerdere varianten van een pagina, dan weet Google dankzij de canonical welke versie in de zoekresultaten hoort en welke varianten bijzaak zijn." } },
                                { "@type": "Question", "name": "Wanneer heb je een canonical tag nodig?", "acceptedAnswer": { "@type": "Answer", "text": "Zodra dezelfde content via meerdere URL's bereikbaar is. Denk aan filter- en sorteervarianten in een webshop, URL's met campagnecodes, printversies of een product dat in meerdere categorieën hangt. De canonical wijst dan telkens naar de schone hoofdversie." } },
                                { "@type": "Question", "name": "Is een canonical tag een verplichting voor Google?", "acceptedAnswer": { "@type": "Answer", "text": "Nee, het is een sterk signaal maar geen bindende opdracht. Google kan een andere canonieke URL kiezen als andere signalen, zoals interne links of redirects, een ander verhaal vertellen. In Search Console zie je per pagina welke URL Google uiteindelijk als canoniek heeft gekozen." } },
                                { "@type": "Question", "name": "Wat is een self-referencing canonical?", "acceptedAnswer": { "@type": "Answer", "text": "Dat is een canonical tag die naar de pagina zelf verwijst. Het klinkt overbodig, maar het voorkomt dat URL-varianten met parameters of hoofdletters als aparte pagina's behandeld worden. De meeste SEO-specialisten zetten daarom op elke indexeerbare pagina een self-referencing canonical." } },
                                { "@type": "Question", "name": "Wat is het verschil tussen een canonical en een redirect?", "acceptedAnswer": { "@type": "Answer", "text": "Een redirect stuurt bezoekers en zoekmachines fysiek door naar een andere URL: de oude pagina is dan niet meer bereikbaar. Een canonical laat beide URL's bestaan en geeft alleen aan welke versie in de zoekresultaten hoort. Moet een pagina echt verdwijnen, kies dan een 301-redirect." } },
                                { "@type": "Question", "name": "Hoe controleer ik mijn canonical tags?", "acceptedAnswer": { "@type": "Answer", "text": "Bekijk de broncode van een pagina en zoek naar rel=canonical in de head. Voor het volledige beeld gebruik je URL-inspectie in Google Search Console: daar staat zowel de canonical die jij hebt opgegeven als de URL die Google zelf als canoniek heeft gekozen. Wijken die af, dan is er werk." } }
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
                        <Link to="/blogs/seo" className="hover:text-accent transition-colors">SEO</Link>
                        <ChevronRight className="w-3 h-3" />
                        <span className="text-primary truncate">Canonical tags</span>
                    </nav>

                    {/* Header */}
                    <header className="mb-16">
                        <div className="inline-block px-3 py-1 bg-accent/10 text-accent font-mono text-xs uppercase tracking-widest rounded-full mb-6">
                            SEO
                        </div>
                        <h1 className="font-sans font-bold text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight mb-8">
                            Canonical tags: wanneer gebruik je ze
                        </h1>

                        <div className="flex flex-wrap items-center gap-6 text-sm font-sans text-primary/60 border-y border-primary/10 py-6">
                            <div className="flex items-center gap-2">
                                <User className="w-4 h-4" />
                                <span>Empowers Redactie</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>26 juli 2026</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>7 minuten leestijd</span>
                            </div>
                        </div>
                    </header>

                    {/* Featured Image */}
                    <figure className="w-full h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden mb-16 relative bg-primary">
                        <div className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-overlay" style={{backgroundImage: "url('/images/blogs/canonical-tags-gebruik.jpg')"}}></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </figure>

                    {/* Content */}
                    <div className="prose prose-lg prose-headings:font-sans prose-headings:font-bold prose-headings:text-primary prose-p:font-sans prose-p:text-primary/80 prose-p:leading-relaxed max-w-none">
                        <p className="text-xl md:text-2xl font-medium leading-relaxed mb-10 text-primary">
                            Een canonical tag vertelt Google welke URL de hoofdversie van een pagina is. Dat is nodig zodra dezelfde content via meerdere adressen bereikbaar is, wat op vrijwel elke website gebeurt. Zonder canonical verdeelt Google je waarde over de varianten of kiest het zelf een versie. Met canonical bepaal jij.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat is een canonical tag?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Technisch is het één regel in de head van je pagina: link rel="canonical" met daarachter de URL van de hoofdversie. Die regel zegt tegen zoekmachines: als je meerdere versies van deze content tegenkomt, is dít de versie die telt.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Waarom bestaat dat? Omdat het web rommelig is. Dezelfde pagina kan bereikbaar zijn met en zonder www, met en zonder slash aan het eind, met hoofdletters, met campagnecodes achter de URL. Voor jou is dat allemaal dezelfde pagina. Voor een zoekmachine zijn het losse URL's met identieke content, en dat verdunt je zichtbaarheid.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De canonical bundelt al die signalen weer op één adres. Links en waarde die naar een variant wijzen, komen dan ten goede aan de hoofdversie. Zo houd je je kracht bij elkaar in plaats van hem te versnipperen.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wanneer heb je canonical tags nodig?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Het klassieke geval is de webshop met filters. Wie op kleur, maat of prijs filtert, krijgt een URL met parameters. Eén categorie levert zo tientallen adresvarianten op met vrijwel dezelfde inhoud. De canonical op al die varianten wijst naar de schone categoriepagina, en Google weet wat hem te doen staat.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Hetzelfde speelt bij campagne-URL's. Deel je een pagina met UTM-codes in je nieuwsbrief of advertenties, dan ontstaat er een variant die je niet in de zoekresultaten wilt. Ook hier lost de canonical het op zonder dat je campagnemeting eronder lijdt.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Andere veelvoorkomende situaties: een product dat in meerdere categorieën hangt en dus meerdere URL's heeft, printversies van pagina's, en content die je op een ander platform herpubliceert. Bij dat laatste zet je op de externe versie een cross-domain canonical naar je eigen site, zodat de waarde bij jou landt.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            En dan het advies dat bijna altijd geldt: geef elke indexeerbare pagina een canonical naar zichzelf. Zo'n self-referencing canonical lijkt overbodig, maar vangt alle onverwachte varianten af die je niet zag aankomen. Het is de standaardinstelling van een gezonde website.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Is een canonical een bevel of een verzoek?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een verzoek. Google noemt het zelf een sterk signaal, maar behoudt de vrijheid om een andere versie als canoniek te kiezen. Dat gebeurt wanneer je overige signalen de canonical tegenspreken: interne links die massaal naar de variant wijzen, een sitemap met de verkeerde URL's, of redirects die ergens anders heen sturen.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            In Search Console zie je precies hoe dat uitpakt. URL-inspectie toont zowel de canonical die jij opgaf als de URL die Google daadwerkelijk koos. Wijken die twee af, dan spreekt je site zichzelf ergens tegen. Bij sitecontroles is die vergelijking een vast onderdeel, omdat het verschil vaak jaren onopgemerkt blijft terwijl het wel rankings kost.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De les: een canonical werkt het best als alle signalen dezelfde kant op wijzen. Link intern altijd naar de hoofdversie, zet alleen hoofdversies in je <Link to="/blogs/seo/xml-sitemap-heb-hem-nodig" className="text-accent hover:underline">XML-sitemap</Link> en houd je redirects consistent.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Welke canonical-fouten kosten je rankings?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De pijnlijkste is de canonical die naar de verkeerde pagina wijst. Het gebeurt geregeld na een migratie: alle pagina's krijgen per ongeluk een canonical naar de homepage. Google ziet dan één belangrijke pagina en honderd bijlagen. Je rankings verdampen terwijl de site er gewoon uitziet.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Nummer twee is de canonical naar een pagina die niet bestaat of zelf doorverwijst. Een canonical hoort naar een werkende, indexeerbare URL te wijzen. Wijst hij naar een 404 of een redirect, dan negeert Google hem meestal en ben je terug bij af.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Ook klassiek: canonicals combineren met noindex. Die twee vertellen tegenstrijdige verhalen. De canonical zegt "deze content telt mee op een ander adres", de noindex zegt "vergeet deze content". Kies er één, afhankelijk van wat je wilt bereiken.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Tot slot de dubbele canonical: twee tags op één pagina, meestal doordat een plugin en een thema allebei hun werk doen. Zoekmachines negeren in dat geval vaak beide. Controleer na elke installatie van een SEO-plugin even de broncode. Het overkomt meer websites dan je verwacht, en een <Link to="/blogs/seo/technische-seo-audit" className="text-accent hover:underline">technische SEO-audit</Link> haalt zulke conflicten er direct uit.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe zet je canonical tags praktisch in?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Werk je met WordPress, dan regelen plugins zoals Yoast SEO of Rank Math automatisch self-referencing canonicals en kun je per pagina een afwijkende canonical instellen. Shopify doet het voor productvarianten grotendeels zelf. Maatwerkplatformen vragen om afspraken met je ontwikkelaar.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Wat je ook gebruikt: maak iemand verantwoordelijk voor de controle. Canonicals zijn onzichtbaar voor bezoekers, dus fouten vallen pas op als het verkeer al gedaald is. Een kwartaalcheck via Search Console, aangevuld met een crawl van je eigen site, houdt het probleem klein. Meer weten over wat er verder in zo'n controle hoort? Lees onze <Link to="/blogs/seo/technische-seo-checklist-2025-website" className="text-accent hover:underline">technische SEO-checklist</Link>.
                        </p>

                        <p className="text-primary/80 leading-relaxed mb-6">
                            Canonical tags houden je zichtbaarheid bij elkaar door Google te vertellen welke versie van elke pagina telt. Twijfel je of jouw canonicals goed staan of lekt je site waarde weg via URL-varianten? Bekijk onze <Link to="/seo" className="text-accent hover:underline">SEO-dienstenpagina</Link> of plan een gratis gesprek via <Link to="/contact" className="text-accent hover:underline">empowers.nl/contact</Link>.
                        </p>

                        <hr className="my-16 border-primary/10" />

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Veelgestelde vragen over canonical tags</h2>

                        <div className="space-y-6 not-prose">
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat is een canonical tag?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Een canonical tag is een regel code in de head van je pagina die aangeeft welke URL de hoofdversie van die content is. Bestaan er meerdere varianten van een pagina, dan weet Google dankzij de canonical welke versie in de zoekresultaten hoort en welke varianten bijzaak zijn.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wanneer heb je een canonical tag nodig?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Zodra dezelfde content via meerdere URL's bereikbaar is. Denk aan filter- en sorteervarianten in een webshop, URL's met campagnecodes, printversies of een product dat in meerdere categorieën hangt. De canonical wijst dan telkens naar de schone hoofdversie.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Is een canonical tag een verplichting voor Google?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Nee, het is een sterk signaal maar geen bindende opdracht. Google kan een andere canonieke URL kiezen als andere signalen, zoals interne links of redirects, een ander verhaal vertellen. In Search Console zie je per pagina welke URL Google uiteindelijk als canoniek heeft gekozen.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat is een self-referencing canonical?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Dat is een canonical tag die naar de pagina zelf verwijst. Het klinkt overbodig, maar het voorkomt dat URL-varianten met parameters of hoofdletters als aparte pagina's behandeld worden. De meeste SEO-specialisten zetten daarom op elke indexeerbare pagina een self-referencing canonical.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat is het verschil tussen een canonical en een redirect?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Een redirect stuurt bezoekers en zoekmachines fysiek door naar een andere URL: de oude pagina is dan niet meer bereikbaar. Een canonical laat beide URL's bestaan en geeft alleen aan welke versie in de zoekresultaten hoort. Moet een pagina echt verdwijnen, kies dan een 301-redirect.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoe controleer ik mijn canonical tags?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Bekijk de broncode van een pagina en zoek naar rel=canonical in de head. Voor het volledige beeld gebruik je URL-inspectie in Google Search Console: daar staat zowel de canonical die jij hebt opgegeven als de URL die Google zelf als canoniek heeft gekozen. Wijken die af, dan is er werk.
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
                    <h2 className="relative z-10 font-drama italic text-background text-3xl sm:text-4xl md:text-5xl mb-6">Lekt jouw site waarde weg?</h2>
                    <p className="relative z-10 font-sans text-background/70 text-lg mb-10 max-w-xl mx-auto">
                        Wij zorgen dat elke pagina zijn kracht behoudt. Canonicals, redirects en structuur die kloppen, van kop tot staart.
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
