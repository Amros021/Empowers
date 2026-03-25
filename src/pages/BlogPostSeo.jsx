import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ChevronRight, User } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function BlogPostSeo() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen selection:bg-accent/30 selection:text-dark flex flex-col bg-background">
            <Helmet>
                <title>SEO voor MKB: zo verbeter je je Google-positie | Empowers</title>
                <meta name="description" content="SEO voor MKB loont als je het goed aanpakt. Lees wat het kost, hoe lang het duurt en welke stappen je zet om hoger te ranken in Google." />
                <link rel="canonical" href="https://www.empowers.nl/blogs/seo/seo-voor-mkb-google-positie-verbeteren" />
                <meta property="og:title" content="SEO voor MKB: zo verbeter je je Google-positie | Empowers" />
                <meta property="og:description" content="SEO voor MKB loont als je het goed aanpakt. Lees wat het kost, hoe lang het duurt en welke stappen je zet om hoger te ranken in Google." />
                <meta property="og:url" content="https://www.empowers.nl/blogs/seo/seo-voor-mkb-google-positie-verbeteren" />
                <meta property="og:type" content="article" />
                <script type="application/ld+json">{JSON.stringify({
                    "@context": "https://schema.org",
                    "@graph": [
                        {
                            "@type": "Article",
                            "headline": "SEO voor MKB: zo verbeter je je Google-positie",
                            "image": "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?q=80&w=2074&auto=format&fit=crop",
                            "description": "SEO voor MKB loont als je het goed aanpakt. Lees wat het kost, hoe lang het duurt en welke stappen je zet om hoger te ranken in Google.",
                            "author": { "@type": "Person", "name": "Amir Farahani" },
                            "publisher": { "@type": "Organization", "name": "Empowers", "url": "https://www.empowers.nl" },
                            "datePublished": "2026-03-24T00:00:00+01:00",
                            "dateModified": "2026-03-24T00:00:00+01:00",
                            "url": "https://www.empowers.nl/blogs/seo/seo-voor-mkb-google-positie-verbeteren"
                        },
                        {
                            "@type": "FAQPage",
                            "mainEntity": [
                                { "@type": "Question", "name": "Hoe lang duurt SEO voordat het resultaat geeft?", "acceptedAnswer": { "@type": "Answer", "text": "De eerste resultaten zijn zichtbaar na 3 tot 6 maanden, afhankelijk van hoe competitief je markt is en hoe goed je website er nu voor staat. Voor nieuwe domeinen duurt het soms wat langer. Hoe eerder je begint, hoe eerder je resultaat boekt." } },
                                { "@type": "Question", "name": "Wat kost SEO voor een MKB-bedrijf?", "acceptedAnswer": { "@type": "Answer", "text": "Een serieuze SEO-aanpak kost bij de meeste bureaus tussen de 500 en 2000 euro per maand. Goedkopere diensten leveren vaak weinig op of beschadigen je website via slechte linkbuilding. Vraag altijd naar een concrete aanpak en meetbare doelen." } },
                                { "@type": "Question", "name": "Wat is het verschil tussen SEO en Google Ads?", "acceptedAnswer": { "@type": "Answer", "text": "Google Ads geeft direct resultaat maar stopt zodra je budget op is. SEO kost meer tijd maar levert duurzame zichtbaarheid op zonder dat je per klik betaalt. De slimste strategie combineert beide: Ads voor direct verkeer, SEO voor de lange termijn." } },
                                { "@type": "Question", "name": "Wat is lokale SEO en heb ik dat nodig?", "acceptedAnswer": { "@type": "Answer", "text": "Lokale SEO zorgt ervoor dat je gevonden wordt door mensen in jouw regio. Denk aan een Google Bedrijfsprofiel (voorheen Google Mijn Bedrijf), lokale zoekwoorden op je website en reviews. Voor fysieke winkels, restaurants en lokale dienstverleners is dit vaak het meest waardevolle onderdeel van SEO." } },
                                { "@type": "Question", "name": "Kan ik SEO zelf doen?", "acceptedAnswer": { "@type": "Answer", "text": "Basis-SEO kun je deels zelf doen: een goed Google Bedrijfsprofiel aanmaken, je paginatitels verbeteren en content schrijven over vragen die klanten stellen. Technische SEO en serieuze linkbuilding vragen expertise. Fouten in de technische basis kosten je al je andere inspanningen." } },
                                { "@type": "Question", "name": "Wat zijn de belangrijkste rankingfactoren van Google?", "acceptedAnswer": { "@type": "Answer", "text": "Google gebruikt meer dan 200 factoren. De zwaarste zijn: de kwaliteit en relevantie van je content, het aantal en de kwaliteit van websites die naar jou linken, de laadsnelheid van je pagina's en of je website goed werkt op mobiel. Een goede technische basis is de eerste stap." } },
                                { "@type": "Question", "name": "Hoe meet ik of mijn SEO werkt?", "acceptedAnswer": { "@type": "Answer", "text": "Via Google Search Console zie je hoeveel mensen je website vinden via Google en op welke zoekwoorden. Koppel dit aan Google Analytics om te zien of dat verkeer ook leads of aankopen oplevert. Kijk niet alleen naar posities, maar naar conversies vanuit organisch zoekverkeer." } }
                            ]
                        }
                    ]
                })}</script>
                <script type="application/ld+json">{JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "BreadcrumbList",
                    "itemListElement": [
                        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.empowers.nl" },
                        { "@type": "ListItem", "position": 2, "name": "Nieuws", "item": "https://www.empowers.nl/nieuws" },
                        { "@type": "ListItem", "position": 3, "name": "SEO", "item": "https://www.empowers.nl/blogs/seo" },
                        { "@type": "ListItem", "position": 4, "name": "SEO voor MKB: zo verbeter je je Google-positie", "item": "https://www.empowers.nl/blogs/seo/seo-voor-mkb-google-positie-verbeteren" }
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
                        <span className="text-primary truncate">SEO voor MKB</span>
                    </nav>

                    {/* Header */}
                    <header className="mb-16">
                        <div className="inline-block px-3 py-1 bg-accent/10 text-accent font-mono text-xs uppercase tracking-widest rounded-full mb-6">
                            SEO
                        </div>
                        <h1 className="font-sans font-bold text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight mb-8">
                            SEO voor MKB: zo verbeter je je Google-positie
                        </h1>

                        <div className="flex flex-wrap items-center gap-6 text-sm font-sans text-primary/60 border-y border-primary/10 py-6">
                            <div className="flex items-center gap-2">
                                <User className="w-4 h-4" />
                                <span>Empowers Redactie</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>24 maart 2026</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>6 minuten leestijd</span>
                            </div>
                        </div>
                    </header>

                    {/* Featured Image */}
                    <figure className="w-full h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden mb-16 relative bg-primary">
                        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?q=80&w=2074&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </figure>

                    {/* Content */}
                    <div className="prose prose-lg prose-headings:font-sans prose-headings:font-bold prose-headings:text-primary prose-p:font-sans prose-p:text-primary/80 prose-p:leading-relaxed max-w-none">
                        <p className="text-xl md:text-2xl font-medium leading-relaxed mb-10 text-primary">
                            SEO zorgt ervoor dat mensen jouw bedrijf vinden via Google, zonder dat je per klik betaalt. Voor MKB-bedrijven is het een van de meest rendabele vormen van online marketing, als je het structureel aanpakt. De meeste resultaten zijn zichtbaar na 3 tot 6 maanden. Daarna groeit het verkeer door zonder dat je budget stijgt.
                        </p>

                        <h2 className="text-3xl mt-16 mb-6">Hoe werkt SEO precies?</h2>
                        <p>
                            Google rangschikt websites op basis van relevantie en autoriteit. Relevantie bepaalt Google door te kijken of je content aansluit bij wat iemand zoekt. Autoriteit bouw je op door kwalitatieve links van andere websites te verzamelen en een technisch goed functionerende site te hebben.
                        </p>
                        <p>
                            Als iemand zoekt op "loodgieter Utrecht" of "marketingbureau Eindhoven", wil Google de meest betrouwbare en relevante pagina bovenaan zetten. Jij wilt die pagina zijn. Dat bereik je niet met één truc, maar met een combinatie van goede content, techniek en autoriteit.
                        </p>

                        <h2 className="text-3xl mt-16 mb-6">Waarom is SEO voor MKB zo waardevol?</h2>
                        <p>
                            Organisch zoekverkeer is gratis per klik. Dat klinkt vanzelfsprekend, maar het verschil in de praktijk is groot. Een bedrijf dat op positie 1 staat voor een zoekterm met 500 zoekopdrachten per maand, ontvangt gemiddeld 28% van al die klikken. Dat is zo'n 140 bezoekers per maand, structureel, zonder dat je er per maand extra advertentiebudget voor uitgeeft.
                        </p>
                        <p>
                            We zien bij klanten die serieus in SEO investeren, dat het organisch verkeer na 12 maanden vaak 3 tot 5 keer zo hoog is als aan het begin. Dat verkeer brengt leads en aankopen mee die anders via advertenties zouden moeten worden ingekocht.
                        </p>

                        <h2 className="text-3xl mt-16 mb-6">Wat zijn de drie pijlers van goede SEO?</h2>
                        <p>
                            SEO bestaat uit drie onderdelen die samen werken. Als één ervan mist, werken de andere twee ook minder goed.
                        </p>
                        <ul className="space-y-4 my-8 pl-6 list-disc marker:text-accent">
                            <li><strong>Technische SEO</strong> zorgt ervoor dat Google je website goed kan lezen en indexeren. Denk aan laadsnelheid, een mobiele versie die goed werkt en een correcte sitemap. Een trage website verliest posities, ook al is de content uitstekend.</li>
                            <li><strong>Content</strong> is de reden waarom mensen op jouw pagina klikken en blijven. Schrijf over de vragen die jouw klanten echt stellen. Een pagina die "wat kost een keukenmonteur?" concreet en volledig beantwoordt, rankt beter dan een algemene dienstenpagina.</li>
                            <li><strong>Linkbuilding</strong> is het verzamelen van links van andere websites naar de jouwe. Elke link is in de ogen van Google een aanbeveling. Kwaliteit telt zwaarder dan kwantiteit. Eén link van een gerespecteerde branchesite doet meer dan tien links van dubieuze directories.</li>
                        </ul>

                        <h2 className="text-3xl mt-16 mb-6">Wanneer kies je voor SEO en wanneer voor Google Ads?</h2>
                        <p>
                            Als je morgen klanten nodig hebt, start je met <Link to="/google-ads" className="text-accent hover:underline">Google Ads</Link>. Ads leveren direct verkeer. Stop je met betalen, stopt het verkeer. SEO werkt andersom: het kost tijd om op te bouwen, maar zodra je rankt, blijf je verkeer ontvangen zonder extra kosten per klik.
                        </p>
                        <p>
                            De sterkste strategie is een combinatie. Ads genereren direct omzet terwijl je aan SEO bouwt. Na 6 tot 12 maanden neemt het organisch verkeer toe en kun je het advertentiebudget efficiënter inzetten, omdat je niet meer afhankelijk bent van betaalde klikken voor elke bezoeker.
                        </p>
                        <p>
                            Een veelgemaakte fout die we tegenkomen: bedrijven die uitsluitend op Ads inzetten en nooit aan SEO beginnen. Na jaren blijft het kostenplaatje even hoog, terwijl een combinatie het rendement structureel had kunnen verbeteren.
                        </p>

                        <h2 className="text-3xl mt-16 mb-6">Wat levert lokale SEO op voor kleine bedrijven?</h2>
                        <p>
                            Voor bedrijven die klanten in een bepaalde regio bedienen, is lokale SEO de snelste manier om zichtbaar te worden. Een goed ingevuld Google Bedrijfsprofiel met actuele openingstijden, foto's en reviews zorgt ervoor dat je verschijnt in de lokale zoekresultaten en op Google Maps.
                        </p>
                        <p>
                            Bedrijven met meer dan 10 recente reviews scoren gemiddeld aanzienlijk beter in lokale zoekresultaten dan bedrijven zonder reviews. Klanten vragen om reviews is niet opdringerig, het is slim. Dat geldt voor een restaurant, een fysiotherapiepraktijk, maar ook voor een B2B-dienstverlener die klanten in een bepaalde regio zoekt.
                        </p>

                        <h2 className="text-3xl mt-16 mb-6">Hoe begin je met SEO als MKB-bedrijf?</h2>
                        <p>
                            Begin met de basis. Controleer of je website technisch in orde is via Google Search Console. Dat is gratis en geeft direct inzicht in problemen die Google signaleert.
                        </p>
                        <p>
                            Schrijf daarna pagina's die de vragen van je klanten beantwoorden. Geen vage dienstenpagina's, maar concrete antwoorden op wat mensen zoeken. Een dakdekker die een pagina schrijft over "wanneer moet je je dakpannen vervangen" trekt bezoekers die actief nadenken over precies dat probleem.
                        </p>
                        <p>
                            Wil je weten hoe jouw website er nu voor staat qua SEO? Bekijk onze <Link to="/seo" className="text-accent hover:underline">SEO-dienst</Link> of <Link to="/contact" className="text-accent hover:underline">plan een gratis gesprek</Link>. We kijken samen wat de sterkste kansen zijn voor jouw bedrijf.
                        </p>

                        <hr className="my-16 border-primary/10" />

                        <h2 className="text-3xl mb-8">Veelgestelde vragen over SEO voor MKB</h2>

                        <div className="space-y-8">
                            <div>
                                <h3 className="text-xl font-bold mb-2">Hoe lang duurt SEO voordat het resultaat geeft?</h3>
                                <p className="text-base text-primary/70 mt-0">
                                    De eerste resultaten zijn zichtbaar na 3 tot 6 maanden, afhankelijk van hoe competitief je markt is en hoe goed je website er nu voor staat. Voor nieuwe domeinen duurt het soms wat langer. Hoe eerder je begint, hoe eerder je resultaat boekt.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2">Wat kost SEO voor een MKB-bedrijf?</h3>
                                <p className="text-base text-primary/70 mt-0">
                                    Een serieuze SEO-aanpak kost bij de meeste bureaus tussen de 500 en 2000 euro per maand. Goedkopere diensten leveren vaak weinig op of beschadigen je website via slechte linkbuilding. Vraag altijd naar een concrete aanpak en meetbare doelen.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2">Wat is het verschil tussen SEO en Google Ads?</h3>
                                <p className="text-base text-primary/70 mt-0">
                                    Google Ads geeft direct resultaat maar stopt zodra je budget op is. SEO kost meer tijd maar levert duurzame zichtbaarheid op zonder dat je per klik betaalt. De slimste strategie combineert beide: Ads voor direct verkeer, SEO voor de lange termijn.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2">Wat is lokale SEO en heb ik dat nodig?</h3>
                                <p className="text-base text-primary/70 mt-0">
                                    Lokale SEO zorgt ervoor dat je gevonden wordt door mensen in jouw regio. Denk aan een Google Bedrijfsprofiel, lokale zoekwoorden op je website en reviews. Voor fysieke winkels, restaurants en lokale dienstverleners is dit vaak het meest waardevolle onderdeel van SEO.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2">Kan ik SEO zelf doen?</h3>
                                <p className="text-base text-primary/70 mt-0">
                                    Basis-SEO kun je deels zelf doen: een goed Google Bedrijfsprofiel aanmaken, je paginatitels verbeteren en content schrijven over vragen die klanten stellen. Technische SEO en serieuze linkbuilding vragen expertise. Fouten in de technische basis kosten je al je andere inspanningen.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2">Wat zijn de belangrijkste rankingfactoren van Google?</h3>
                                <p className="text-base text-primary/70 mt-0">
                                    Google gebruikt meer dan 200 factoren. De zwaarste zijn: de kwaliteit en relevantie van je content, het aantal en de kwaliteit van websites die naar jou linken, de laadsnelheid van je pagina's en of je website goed werkt op mobiel. Een goede technische basis is de eerste stap.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2">Hoe meet ik of mijn SEO werkt?</h3>
                                <p className="text-base text-primary/70 mt-0">
                                    Via Google Search Console zie je hoeveel mensen je website vinden via Google en op welke zoekwoorden. Koppel dit aan Google Analytics om te zien of dat verkeer ook leads of aankopen oplevert. Kijk niet alleen naar posities, maar naar conversies vanuit organisch zoekverkeer.
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
                    <h2 className="relative z-10 font-drama italic text-background text-3xl sm:text-4xl md:text-5xl mb-6">Hoger in Google komen?</h2>
                    <p className="relative z-10 font-sans text-background/70 text-lg mb-10 max-w-xl mx-auto">
                        Wil je weten wat SEO voor jouw bedrijf kan opleveren? Plan een gratis gesprek. We kijken naar je huidige positie en laten je zien waar de kansen liggen.
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
