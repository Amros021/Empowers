import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ChevronRight, User } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function BlogPostSnellereWebsiteMeerKlanten() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen selection:bg-accent/30 selection:text-dark flex flex-col bg-background">
            <Helmet>
                <title>Snellere website, meer klanten: zo werkt dat in de praktijk | Empowers</title>
                <meta name="description" content="Een snellere website levert direct meer klanten op. Hoe paginasnelheid je conversie raakt, welke ingrepen het meeste verschil maken en hoe je test." />
                <meta name="keywords" content="paginasnelheid hogere conversies, snellere website, Core Web Vitals, paginasnelheid SEO, website laadtijd" />
                <link rel="canonical" href="https://www.empowers.nl/blogs/strategie/snellere-website-meer-klanten" />
                <meta property="og:title" content="Snellere website, meer klanten: zo werkt dat" />
                <meta property="og:description" content="Hoe paginasnelheid je conversie raakt, welke ingrepen het meeste verschil maken en hoe je test." />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://www.empowers.nl/blogs/strategie/snellere-website-meer-klanten" />
                <meta property="og:image" content="https://www.empowers.nl/images/blogs/snellere-website-meer-klanten.jpg" />
                <meta property="article:published_time" content="2026-05-10T17:00:00+02:00" />
                <meta property="article:author" content="Empowers" />
                <meta property="article:section" content="Strategie" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Snellere website, meer klanten" />
                <meta name="twitter:description" content="Paginasnelheid en conversie: wat de cijfers laten zien en welke ingrepen je deze week doet." />

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Article",
                        "headline": "Snellere website, meer klanten: zo werkt dat in de praktijk",
                        "description": "Hoe paginasnelheid je conversie raakt, welke ingrepen het meeste verschil maken en hoe je test.",
                        "image": "https://www.empowers.nl/images/blogs/snellere-website-meer-klanten.jpg",
                        "datePublished": "2026-05-10T17:00:00+02:00",
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
                                    "name": "Hoeveel klanten verlies ik per seconde tragere laadtijd?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Google publiceerde dat de kans op een bouncen toeneemt naarmate de laadtijd oploopt. Voor mobiel geldt: gaat de laadtijd van één naar drie seconden, dan stijgt de bounce-kans aanzienlijk. De precieze impact verschilt per branche en doelgroep, maar de richting is duidelijk. Trage sites verliezen klanten voordat de homepage ooit getoond is."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Wat is een goede laadtijd voor mijn site?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Onder de 2,5 seconden voor Largest Contentful Paint, onder de 200 milliseconden voor Interaction to Next Paint en onder 0,1 voor Cumulative Layout Shift. Dat zijn de drempels die Google in Core Web Vitals hanteert. Komt je site daarboven, dan zit je in het oranje of rode segment van de meting. Een audit via PageSpeed Insights laat dit direct zien."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Welke ingreep levert het meeste verschil op?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Voor de meeste sites is het comprimeren en moderniseren van afbeeldingen de snelste winst. Een homepage met ongedoseerde JPG's van enkele MB's is doorgaans de zwaarste post. Daarna komt het verwijderen van overbodige tracking-scripts en het uitstellen van niet-essentiële JavaScript. Voor WordPress-sites is dat vaak een caching-plugin combineren met een afbeeldingsplugin."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Hoe groot is het conversie-effect echt?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Cases verschillen. Voor e-commerce zijn meerdere studies gepubliceerd waarin een verbetering van één seconde tot tientallen procenten meer conversie leidde, afhankelijk van het uitgangspunt. Voor leadgen-sites is het effect doorgaans kleiner maar nog steeds merkbaar. Hoe trager de uitgangspositie, hoe groter de winst per ingreep."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Helpt een snellere site ook voor SEO?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Ja. Core Web Vitals zijn sinds 2021 een rankingfactor in Google. Bij gelijke kwaliteit van content rankt een snellere pagina hoger dan een tragere. Het effect is geen wondermiddel maar wel structureel. Voor concurrerende zoekwoorden waar de top tien dicht bij elkaar ligt, kan paginasnelheid de doorslag geven."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Moet ik mijn hele site overbouwen voor snelheid?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Vrijwel nooit. De meeste snelheidsproblemen zijn op te lossen binnen het bestaande CMS. Een nieuwe site bouwen voor snelheid alleen is overkill. Pas wanneer je een sterk verouderde stack hebt of een onderhoudsschuld die ook andere dingen blokkeert, is een herbouw een redelijke overweging. Begin altijd met optimaliseren wat er staat."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Hoe meet ik snelheid het betrouwbaarst?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Drie tools naast elkaar. PageSpeed Insights voor Core Web Vitals en lab-metingen. Chrome User Experience Report voor data uit echte gebruikersbezoeken. WebPageTest voor diepere waterfall-analyses. Vertrouw nooit op één meting, maar pak het gemiddelde over een week. Tijdens marketingcampagnes kun je de snelheid ook in GA4 koppelen aan conversie."
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
                            { "@type": "ListItem", "position": 3, "name": "Strategie", "item": "https://www.empowers.nl/blogs/strategie" },
                            { "@type": "ListItem", "position": 4, "name": "Snellere website meer klanten", "item": "https://www.empowers.nl/blogs/strategie/snellere-website-meer-klanten" }
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
                        <Link to="/blogs/strategie" className="hover:text-accent transition-colors">Strategie</Link>
                        <ChevronRight className="w-3 h-3" />
                        <span className="text-primary truncate">Snellere website meer klanten</span>
                    </nav>

                    <header className="mb-16">
                        <div className="inline-block px-3 py-1 bg-accent/10 text-accent font-mono text-xs uppercase tracking-widest rounded-full mb-6">
                            Strategie
                        </div>
                        <h1 className="font-sans font-bold text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight mb-8">
                            Snellere website, meer klanten: zo werkt dat in de praktijk
                        </h1>
                        <div className="flex flex-wrap items-center gap-6 text-sm font-sans text-primary/60 border-y border-primary/10 py-6">
                            <div className="flex items-center gap-2"><User className="w-4 h-4" /><span>Empowers Redactie</span></div>
                            <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>10 mei 2026</span></div>
                            <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>8 minuten leestijd</span></div>
                        </div>
                    </header>

                    <figure className="w-full h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden mb-16 relative bg-primary">
                        <div className="absolute inset-0 bg-[url('/images/blogs/snellere-website-meer-klanten.jpg')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </figure>

                    <div className="prose prose-lg max-w-none prose-headings:text-primary prose-headings:font-bold prose-a:text-accent prose-a:underline hover:prose-a:text-accent/80">
                        <p className="text-xl leading-relaxed text-primary/80 font-medium mb-6">
                            De simpelste manier om meer klanten te krijgen is vaak niet meer adverteren. Het is je site snel maken. Een trage website filtert bezoekers weg voordat ze ooit een button hebben gezien. Geen klik op een productpagina, geen formulier ingevuld, geen contactvraag verstuurd. Hieronder loop je het stappenplan langs: wat snelheid voor conversie betekent, welke ingrepen het meeste opleveren, en hoe je dat zonder herbouw aanpakt.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Waarom snelheid jouw conversie raakt</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Bezoekers wachten niet meer. Wanneer een pagina niet snel reageert, gaan ze terug naar Google en klikken op een ander resultaat. Voor jou is dat een verloren klant, voor Google een signaal dat jouw pagina niet voldoet. Beide werken tegen je. Snelheid is daarmee niet alleen een technisch ding maar een directe marketing-investering.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Bij mobiele gebruikers werkt het effect nog sterker. Mobiele verbindingen zijn vaker traag, schermen kleiner, geduld korter. Een pagina die op WiFi acceptabel laadt, kan op een 4G-verbinding een afhaker zijn. En aangezien voor veel MKB-sites meer dan de helft van het verkeer mobiel is, weeg je elke optimalisatie eerst op mobiel.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">De cijfers waar het om gaat</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Google werkt sinds 2021 met Core Web Vitals als rankingfactor. Drie metingen tellen. Largest Contentful Paint meet hoe snel de belangrijkste content zichtbaar is. Interaction to Next Paint meet hoe snel de site reageert op gebruikersacties. Cumulative Layout Shift meet hoe stabiel de pagina blijft tijdens het laden. Bij elke meting hanteert Google een grenswaarde die je site groen, oranje of rood maakt.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Voor groen heb je nodig: Largest Contentful Paint onder 2,5 seconde, Interaction to Next Paint onder 200 milliseconden en Cumulative Layout Shift onder 0,1. Wat dat in praktijk betekent: een homepage die binnen twee tellen je hoofdfoto en titel toont, soepel reageert op een klik en niet halverwege omspringt. Lees verder in onze gids over <Link to="/blogs/seo/core-web-vitals-verbeteren-scoort" className="text-accent hover:underline">Core Web Vitals verbeteren</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Waar de zwaarste bottleneck meestal zit</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Negen van de tien MKB-sites die we analyseren hebben dezelfde diagnose: te zware afbeeldingen. Foto's die ooit op een professionele camera zijn gemaakt en zonder compressie zijn geüpload, met afmetingen van enkele MB's per stuk. Een homepage met tien zulke afbeeldingen kan al snel rond de 15 MB zijn. Voor een telefoonverbinding is dat onhandelbaar.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De oplossing is geen herbouw. Hij is: afbeeldingen comprimeren met een tool zoals TinyPNG of Squoosh, naar moderne formaten zoals WebP converteren, en lazy loading inschakelen zodat afbeeldingen pas worden gedownload wanneer de gebruiker erbij scrollt. Voor WordPress is dat een combinatie van plugins zoals ShortPixel of Imagify met een caching-plugin. Dat traject neemt een halve dag werk en bespaart vaak meer laadtijd dan welke andere ingreep dan ook.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Andere ingrepen op volgorde van impact</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Na afbeeldingen komen de tracking-scripts. Veel sites hebben in de loop der jaren een opeenstapeling van pixels en chat-widgets en heatmap-trackers. Elke extra script vertraagt je site. Inventariseer wat je echt nodig hebt en zet de rest uit. Gemiddeld levert dat opnieuw een halve seconde laadtijd op, soms meer.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Daarna komt het uitstellen of asynchroon laden van JavaScript. Op WordPress betekent dat: een caching-plugin met defer-instellingen aanzetten. Op custom sites: een developer een uur naar de scripts laten kijken. Op Shopify of andere platforms: thema-instellingen optimaliseren. Tot slot: een snelle hosting. Voor een MKB hoeft dat geen enterprise-server te zijn, wel een hosting met SSD-opslag, goede caching aan de serverzijde en een netwerk dat dicht bij je doelgroep ligt.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe je betrouwbaar test</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Eén meting is geen meting. Een pagina kan op het ene moment razendsnel laden en een uur later traag, afhankelijk van serverbelasting, caching-status en netwerkomstandigheden. Test daarom vóór en na een ingreep over een periode van een week. PageSpeed Insights van Google is het startpunt: hij geeft Core Web Vitals plus een lab-test op één pagina. WebPageTest gaat dieper en laat per resource zien hoeveel tijd het kost.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Wat veel marketeers missen: Chrome User Experience Report. Dat is geen aparte tool maar een dataset met echte gebruikersmetingen van je site, beschikbaar via PageSpeed Insights. Lab-tests vertellen wat technisch mogelijk is, CrUX vertelt wat echte bezoekers ervaren. Het verschil tussen die twee is vaak waar de winst zit. Een lab-test groen krijgen terwijl gebruikers oranje zien, betekent dat je middelmatige verbindingen of oudere telefoons onvoldoende meeneemt.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">De conversieverbinding maken</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Snelheid alleen is geen tovermiddel. Een traag formulier op een snelle pagina werkt nog steeds slecht. Een snelle pagina met een onduidelijke boodschap converteert nog steeds matig. Maar snelheid is wel een onderlaag die je niet kunt overslaan. Een goede call-to-action op een trage pagina krijgt minder klikken dan dezelfde CTA op een snelle pagina, gewoon omdat een deel van het verkeer is afgehaakt voordat ze de CTA zagen.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Voor de bovenkant van je site werkt dat extra hard. Bezoekers oordelen binnen drie seconden of een site goed of slecht voelt, en dat oordeel kleurt de rest van hun ervaring. Snel laadt voelt professioneel. Traag laadt voelt rommelig. Lees ook hoe je dat eerste oogcontact gebruikt in onze blog over <Link to="/blogs/strategie/above-the-fold-waarom-eerste" className="text-accent hover:underline">de above-the-fold</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat je deze week kunt doen</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Open PageSpeed Insights, plak je homepage-URL en draai de mobiele test. Bekijk je drie Core Web Vitals. Eén of meerdere in het rood? Daar zit de winst. Open daarna de afbeeldingen op je homepage en kijk hun bestandsgrootte. Boven de 500 KB per afbeelding? Comprimeer ze. Onder de 100 KB? Goed, ga door naar tracking-scripts.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een halve dag werk per pagina is meestal genoeg voor zichtbare winst. Wil je samen kijken waar bij jouw site de meeste tijd te halen is, en welke ingreep direct conversie raakt? Plan een vrijblijvend gesprek via onze <Link to="/contact" className="text-accent hover:underline">contactpagina</Link>. We laten je zien wat je deze maand al kunt fixen en wat tot een grotere refactor hoort.
                        </p>
                    </div>

                    <section className="mt-16 pt-12 border-t border-primary/10">
                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Veelgestelde vragen</h2>
                        <div className="space-y-6 not-prose">
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoeveel klanten verlies ik per seconde tragere laadtijd?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Google publiceerde dat de kans op een bouncen toeneemt naarmate de laadtijd oploopt. Voor mobiel geldt: gaat de laadtijd van één naar drie seconden, dan stijgt de bounce-kans aanzienlijk. De precieze impact verschilt per branche en doelgroep, maar de richting is duidelijk. Trage sites verliezen klanten voordat de homepage ooit getoond is.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat is een goede laadtijd voor mijn site?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Onder de 2,5 seconden voor Largest Contentful Paint, onder de 200 milliseconden voor Interaction to Next Paint en onder 0,1 voor Cumulative Layout Shift. Dat zijn de drempels die Google in Core Web Vitals hanteert. Komt je site daarboven, dan zit je in het oranje of rode segment van de meting. Een audit via PageSpeed Insights laat dit direct zien.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Welke ingreep levert het meeste verschil op?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Voor de meeste sites is het comprimeren en moderniseren van afbeeldingen de snelste winst. Een homepage met ongedoseerde JPG's van enkele MB's is doorgaans de zwaarste post. Daarna komt het verwijderen van overbodige tracking-scripts en het uitstellen van niet-essentiële JavaScript. Voor WordPress-sites is dat vaak een caching-plugin combineren met een afbeeldingsplugin.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoe groot is het conversie-effect echt?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Cases verschillen. Voor e-commerce zijn meerdere studies gepubliceerd waarin een verbetering van één seconde tot tientallen procenten meer conversie leidde, afhankelijk van het uitgangspunt. Voor leadgen-sites is het effect doorgaans kleiner maar nog steeds merkbaar. Hoe trager de uitgangspositie, hoe groter de winst per ingreep.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Helpt een snellere site ook voor SEO?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Ja. Core Web Vitals zijn sinds 2021 een rankingfactor in Google. Bij gelijke kwaliteit van content rankt een snellere pagina hoger dan een tragere. Het effect is geen wondermiddel maar wel structureel. Voor concurrerende zoekwoorden waar de top tien dicht bij elkaar ligt, kan paginasnelheid de doorslag geven.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Moet ik mijn hele site overbouwen voor snelheid?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Vrijwel nooit. De meeste snelheidsproblemen zijn op te lossen binnen het bestaande CMS. Een nieuwe site bouwen voor snelheid alleen is overkill. Pas wanneer je een sterk verouderde stack hebt of een onderhoudsschuld die ook andere dingen blokkeert, is een herbouw een redelijke overweging. Begin altijd met optimaliseren wat er staat.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoe meet ik snelheid het betrouwbaarst?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Drie tools naast elkaar. PageSpeed Insights voor Core Web Vitals en lab-metingen. Chrome User Experience Report voor data uit echte gebruikersbezoeken. WebPageTest voor diepere waterfall-analyses. Vertrouw nooit op één meting, maar pak het gemiddelde over een week. Tijdens marketingcampagnes kun je de snelheid ook in GA4 koppelen aan conversie.</p>
                            </div>
                        </div>
                    </section>

                    <section className="mt-16 pt-12 border-t border-primary/10">
                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Lees ook</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <Link to="/blogs/seo/core-web-vitals-verbeteren-scoort" className="block border border-primary/10 rounded-xl p-6 hover:border-accent transition-colors">
                                <div className="text-xs font-mono uppercase tracking-widest text-accent mb-2">SEO</div>
                                <h3 className="font-sans font-semibold text-primary text-lg mb-2">Core Web Vitals verbeteren</h3>
                                <p className="font-sans text-primary/70 text-sm">De technische diepgang achter snelheidsmeting en hoe je elk Vital fixt.</p>
                            </Link>
                            <Link to="/blogs/strategie/above-the-fold-waarom-eerste" className="block border border-primary/10 rounded-xl p-6 hover:border-accent transition-colors">
                                <div className="text-xs font-mono uppercase tracking-widest text-accent mb-2">Strategie</div>
                                <h3 className="font-sans font-semibold text-primary text-lg mb-2">Waarom de above-the-fold zo telt</h3>
                                <p className="font-sans text-primary/70 text-sm">Wat bezoekers in de eerste drie seconden beslissen, en hoe je dat vangt.</p>
                            </Link>
                        </div>
                    </section>
                </div>
            </article>

            <section className="w-full pb-32 px-6">
                <div className="max-w-4xl mx-auto bg-primary rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
                    <h2 className="relative z-10 font-drama italic text-background text-3xl sm:text-4xl md:text-5xl mb-6">Is jouw site snel genoeg voor klanten?</h2>
                    <p className="relative z-10 font-sans text-background/70 text-lg mb-10 max-w-xl mx-auto">In een gesprek van een halfuur draaien we een audit op je homepage en laten we zien welke vier ingrepen direct conversie raken. Helder en concreet, geen technisch jargon.</p>
                    <Link to="/contact" className="relative z-10 btn-magnetic inline-flex items-center justify-center bg-accent text-background font-sans font-bold text-lg px-10 py-4 rounded-[2rem] hover:bg-accent/90 transition-colors">Neem contact op</Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
