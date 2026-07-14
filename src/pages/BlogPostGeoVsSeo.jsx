import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ChevronRight, User } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function BlogPostGeoVsSeo() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const breadcrumbs = [
        { label: 'Home', href: '/' },
        { label: 'Nieuws', href: '/blogs' },
        { label: 'GEO', href: '/blogs/geo' },
        { label: 'GEO vs SEO: wat is het verschil en heb je allebei nodig?', href: '/blogs/geo/geo-vs-seo-verschil-heb' }
    ];

    const faqItems = [
        {
            question: 'Wat is het verschil tussen GEO en SEO?',
            answer: 'SEO (Search Engine Optimization) richt zich op Google-zoeken overal in het land en wereld. GEO (Google Guaranteed Listings) toont jouw bedrijf kaart met reviews in Google Maps en op zoekresultaten voor je regio. SEO is voor iedereen die zoekt, GEO is voor klanten in jouw buurt.'
        },
        {
            question: 'Kan ik GEO gebruiken zonder winkel of kantoor?',
            answer: 'Nee, GEO werkt alleen voor bedrijven met een fysieke locatie. Als je een diensten-bedrijf bent (loodgieter, kapper, elektricien), kan je de dienst-regio instellen. Voor online-only bedrijven is GEO niet relevant. Daar is SEO beter.'
        },
        {
            question: 'Hoeveel kost het om GEO en SEO in te richten?',
            answer: 'Google Guaranteed for Service Providers kost niets. Je zet jezelf gratis in. SEO optimalisatie varieert: je kan zelf gratis beginnen, of je huurt een expert in (€500-3000/maand afhankelijk van omvang). Samen kosten ze samen nul tot duizenden per maand.'
        },
        {
            question: 'Hoe lang duurt het tot je GEO of SEO-resultaten ziet?',
            answer: 'GEO werkt sneller. Als je Google Guaranteed goed invult, zie je klanten binnen weken. SEO duurt langer: maanden tot een half jaar voordat je stijgt in ranglijsten. Het hangt af van competitie en kwaliteit van je website.'
        },
        {
            question: 'Wat als ik zowel GEO als SEO wil?',
            answer: 'Prima, doen veel bedrijven. GEO trekt de lokale klanten die nu zoeken. SEO bouwt je zichtbaarheid langterm. Samen werken ze: GEO voor directe klanten, SEO voor groei. Start met GEO, voeg SEO toe als je groeien wilt.'
        },
        {
            question: 'Kan ik beide zelf doen of heb ik hulp nodig?',
            answer: 'GEO is grotendeels zelf doen: instellingen invullen in Google, reviews beheren, posts toevoegen. SEO is meer werk: zoekwoorden onderzoeken, content schrijven, links opbouwen. Voor sneller resultaat is professionele hulp handig, maar beginnen kan je zelf.'
        },
        {
            question: 'Wat gebeurt er als ik GEO niet goed invul?',
            answer: 'Klanten zien je niet in Google Maps en lokale zoekresultaten. Slechtere reviews of incomplete bedrijfsgegevens kost je potentiële klanten. Concurrenten met goede GEO stelen ze af. Dus het loont om het goed in te richten.'
        }
    ];

    return (
        <main className="min-h-screen selection:bg-accent/30 selection:text-dark flex flex-col bg-background">
            <Helmet>
                <title>GEO vs SEO: wat is het verschil en heb je allebei nodig? | Empowers</title>
                <meta name="description" content="GEO vs SEO: ontdek het verschil, wanneer je elk nodig hebt, en hoe je beide inzet voor lokale groei. Praktische gids voor servicebedrijven en shops." />
                <meta name="keywords" content="geo vs seo, google guaranteed listings, local seo, zoekresultaten" />
                <link rel="canonical" href="https://www.empowers.nl/blogs/geo/geo-vs-seo-verschil-heb" />
                <meta property="og:title" content="GEO vs SEO: wat is het verschil en heb je allebei nodig? | Empowers" />
                <meta property="og:description" content="GEO vs SEO: ontdek het verschil, wanneer je elk nodig hebt, en hoe je beide inzet voor lokale groei. Praktische gids voor servicebedrijven en shops." />
                <meta property="og:image" content="https://www.empowers.nl/images/blogs/geo-vs-seo-verschil-heb.jpg" />
                <meta property="og:url" content="https://www.empowers.nl/blogs/geo/geo-vs-seo-verschil-heb" />
                <meta property="og:type" content="article" />
                <meta property="article:published_time" content="2026-03-14T00:00:00+01:00" />
                <meta property="article:author" content="Empowers" />
                <meta property="article:section" content="GEO" />
                <meta name="author" content="Empowers" />
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Article",
                        "headline": "GEO vs SEO: wat is het verschil en heb je allebei nodig?",
                        "description": "GEO vs SEO: ontdek het verschil, wanneer je elk nodig hebt, en hoe je beide inzet voor lokale groei. Praktische gids voor servicebedrijven en shops.",
                        "image": "https://www.empowers.nl/images/blogs/geo-vs-seo-verschil-heb.jpg",
                        "datePublished": "2026-03-14T00:00:00+01:00",
                        "author": {
                            "@type": "Organization",
                            "name": "Empowers",
                            "url": "https://www.empowers.nl"
                        },
                        "publisher": {
                            "@type": "Organization",
                            "name": "Empowers",
                            "url": "https://www.empowers.nl"
                        }
                    })}
                </script>
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": faqItems.map(item => ({
                            "@type": "Question",
                            "name": item.question,
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": item.answer
                            }
                        }))
                    })}
                </script>
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "BreadcrumbList",
                        "itemListElement": breadcrumbs.map((crumb, index) => ({
                            "@type": "ListItem",
                            "position": index + 1,
                            "name": crumb.label,
                            "item": `https://www.empowers.nl${crumb.href}`
                        }))
                    })}
                </script>
                    <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="GEO vs SEO: wat is het verschil en heb je allebei nodig?" />
        <meta name="twitter:description" content="GEO vs SEO: ontdek het verschil, wanneer je elk nodig hebt, en hoe je beide inzet voor lokale groei. Praktische gids voo" />
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
                        <Link to="/blogs/geo" className="hover:text-accent transition-colors">GEO</Link>
                        <ChevronRight className="w-3 h-3" />
                        <span className="text-primary truncate">GEO vs SEO...</span>
                    </nav>

                    {/* Header */}
                    <header className="mb-16">
                        <div className="inline-block px-3 py-1 bg-accent/10 text-accent font-mono text-xs uppercase tracking-widest rounded-full mb-6">
                            GEO
                        </div>
                        <h1 className="font-sans font-bold text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight mb-8">
                            GEO vs SEO: wat is het verschil en heb je allebei nodig?
                        </h1>
                        <div className="flex flex-wrap items-center gap-6 text-sm font-sans text-primary/60 border-y border-primary/10 py-6">
                            <div className="flex items-center gap-2">
                                <User className="w-4 h-4" />
                                <span>Empowers Redactie</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>14 maart 2026</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>7 minuten leestijd</span>
                            </div>
                        </div>
                    </header>

                    {/* Featured Image */}
                    <figure className="w-full h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden mb-16 relative bg-primary">
                        <div className="absolute inset-0 bg-[url('/images/blogs/geo-vs-seo-verschil-heb.jpg')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </figure>

                    {/* Main Content */}
                    <div className="prose prose-lg prose-headings:font-sans prose-headings:font-bold prose-headings:text-primary prose-p:font-sans prose-p:text-primary/80 prose-p:leading-relaxed max-w-none">
                        <p className="text-lg leading-relaxed">
                            GEO en SEO klinken hetzelfde, maar ze zijn totaal anders. GEO toont jouw bedrijf op Google Maps voor klanten in jouw buurt. SEO laat je website hoog in zoekresultaten verschijnen overal. Je hoeft niet te kiezen: de beste bedrijven gebruiken beide tegelijk. Hier lees je het verschil en wat jij nodig hebt.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat is het echte verschil tussen GEO en SEO?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            SEO staat voor Search Engine Optimization. Dit betekent: jij zorgt dat je website hoger in Google-zoeken verschijnt. Als iemand "loodgieter Amsterdam" googlet en jouw website staat op plek één, dat is SEO.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            GEO staat voor Google Guaranteed Listings of Local SEO. Dit betekent: jouw bedrijf verschijnt op Google Maps, samen met foto's, adres, reviews en openingstijden. Als iemand "kappers in Amsterdam" zoekt en jij verschijnt op de kaart, dat is GEO.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Het verschil in één zin: SEO is zichtbaarheid in zoeken, GEO is zichtbaarheid in kaarten en lokale resultaten.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe werkt GEO precies?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Google wil dat lokale klanten het dichtsbijzijnde bedrijf vinden. Je zet jezelf in via Google Mijn Bedrijf (nu Google Business Profile). Je vult in:
                        </p>
                        <ul className="space-y-4 my-8 pl-6 list-disc marker:text-accent">
                            <li>Je bedrijfsnaam, adres en telefoonnummer</li>
                            <li>Openingstijden, foto's en beschrijving</li>
                            <li>Diensten of categorieën</li>
                            <li>Bedieningsgebied (waar je heen gaat, bijv. hele Amsterdam)</li>
                        </ul>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Google ziet dat jij daar bent, klanten geven reviews, en je springt op de kaart. Hoe meer reviews, hoe beter jij rankt in GEO. Dit is snel: weken in plaats van maanden.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe werkt SEO?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            SEO is ingewikkelder. Google kijkt naar honderden factoren op je website. Belangrijkste dingen:
                        </p>
                        <ul className="space-y-4 my-8 pl-6 list-disc marker:text-accent">
                            <li>Zoekwoorden in je content (schrijf over wat klanten zoeken)</li>
                            <li>Interne links (verbind je eigen pagina's slim)</li>
                            <li>Externe links (andere websites linken naar jou)</li>
                            <li>Snelheid van je website</li>
                            <li>Mobiel design (telefoon-vriendelijk)</li>
                            <li>Gebruikerservaring (blijven bezoekers hangen?)</li>
                        </ul>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Google ziet dat jouw website waardevol is, en zet je hoger. Dit duurt langer: maanden. Maar je haalt meer klanten uit heel het land.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Welke bedrijven hebben GEO nodig?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            GEO is goud voor servicebedrijven met een fysieke locatie. Denk aan:
                        </p>
                        <ul className="space-y-4 my-8 pl-6 list-disc marker:text-accent">
                            <li>Kappers, kapsalons</li>
                            <li>Elektriciens, loodgieters</li>
                            <li>Restaurants, cafés, winkels</li>
                            <li>Fysiotherapeuten, tandartsen</li>
                            <li>Installateurs, CVs-bedrijven</li>
                            <li>Iedereen met een kantoor of winkel</li>
                        </ul>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Klanten van deze bedrijven zoeken lokaal: "hairdresser bij mij in de buurt". GEO geeft je juist die klanten.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Welke bedrijven hebben SEO nodig?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            SEO helpt als je wilt groeien landelijk of wereldwijd. Bijvoorbeeld:
                        </p>
                        <ul className="space-y-4 my-8 pl-6 list-disc marker:text-accent">
                            <li>Online winkels (webshops)</li>
                            <li>SaaS-bedrijven (software)</li>
                            <li>Bloggers en content-sites</li>
                            <li>Diensten-bedrijven die overal werken</li>
                            <li>Merken die uitbreiden</li>
                        </ul>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Voor deze bedrijven is landelijk zichtbaarheid voordeel. SEO bouwt langterm groei.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Moet ik GEO en SEO tegelijk doen?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Hangt af. Als jij een loodgieter bent in Amsterdam: start met GEO. Die klanten zoeken nu, en GEO werkt snel. SEO voeg je later toe als je wilt groeien.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Als jij een webshop bent: SEO is voornaam. GEO helpt niet, je hebt geen fysieke locatie.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Als jij beide kan doen (geld en tijd): perfekt. GEO brengt directe klanten nu. SEO bouwt groei voor later. Samen werken ze sterker.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe zet je GEO in drie stappen in</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Stap 1: Maak een Google Business Profile aan op google.com/business. Vul alles in: naam, adres, telefoon, openingstijden, foto's.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Stap 2: Verifieer je adres. Google stuurt een kaart. Je voert een code in, klaar.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Stap 3: Vraag klanten reviews. Meer reviews = beter ranking. Maak een link naar jouw Google-profiel en deel die.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe start je met SEO?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Stap 1: Onderzoek. Google "wat zoeken je klanten?" (bijv. "reparatie vaatwasser Amsterdam"). Noteer die woorden.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Stap 2: Schrijf content. Maak een blog-post over "vaatwasser reparatie Amsterdam". Google ziet: jij bent expert.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Stap 3: Haal links. Vraag andere sites naar jou te linken. Dit zegt tegen Google: jij bent betrouwbaar.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Dit duurt maanden. Maar je haalt klanten uit heel het land.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">GEO versus SEO: snelheid en resultaat</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            GEO: Je ziet klanten in weken, soms dagen. Je Google Business-profiel is live, reviews stromen in, je staat op de kaart. Snel.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            SEO: Maanden tot een half jaar. Je publiceert content, andere sites linken naar je, Google ziet je autoriteit. Langzaam, maar sterker.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">GEO en SEO samen: de beste strategie</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Slim bedrijven doen beide. GEO eerste: het is gratis en werkt snel. Je haalt lokale klanten nu. Terwijl GEO loopt, werk je aan SEO voor langterm groei.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Na een half jaar heb je stabiele GEO-klanten en zie je SEO-resultaten. Dubbele groei.
                        </p>

                        <p className="mt-12 pt-8 border-t border-dark/10">
                            Wil je goed in GEO en SEO verschijnen? Wij helpen je beide in te stellen: Google Business profiel optimaliseren, reviews beheren, en content schrijven voor zoekmachines. <Link to="/contact" className="text-accent hover:underline">Neem contact op</Link> voor een gratis adviesgesprek.
                        </p>
                    </div>

                    {/* CTA Box */}
                    <div className="mt-16 bg-accent/5 rounded-3xl p-8 border border-accent/20">
                        <h3 className="text-2xl font-bold text-dark mb-4">Klaar voor meer klanten?</h3>
                        <p className="text-dark/70 mb-6">
                            GEO en SEO werken. Maar je moet het goed doen. Wij maken een plan net voor jouw bedrijf: wat eerste, wat komt erna, en hoe we meten dat het werkt.
                        </p>
                        <Link
                            to="/contact"
                            className="inline-block bg-accent text-dark font-bold px-8 py-3 rounded-full hover:bg-accent/90 transition-colors"
                        >
                            Plan een gratis gesprek
                        </Link>
                    </div>

                    {/* FAQ Section */}
                    <section className="mt-16 pt-12 border-t border-dark/10">
                        <h2 className="text-3xl font-bold mb-12">Veelgestelde vragen</h2>
                        <div className="space-y-6 not-prose">
                            {faqItems.map((item, index) => (
                                <div
                                    key={index}
                                    className="border border-primary/10 rounded-xl p-6"
                                >
                                    <h3 className="font-sans font-semibold text-primary text-lg mb-3">
                                        {item.question}
                                    </h3>
                                    <p className="font-sans text-primary/70 leading-relaxed">
                                        {item.answer}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </article>

            {/* Bottom CTA Section */}
            <section className="w-full py-20 px-6 bg-background">
                <div className="max-w-4xl mx-auto bg-primary rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
                    <h2 className="relative z-10 font-drama italic text-background text-3xl sm:text-4xl md:text-5xl mb-6">
                        GEO en SEO samen = meer klanten
                    </h2>
                    <p className="relative z-10 font-sans text-background/70 text-lg mb-10 max-w-2xl mx-auto">
                        Start vandaag met GEO. Wij helpen je alles in te stellen, reviews binnen te halen, en SEO op gang brengen. Klanten vinden jou, niet andersom.
                    </p>
                    <Link
                        to="/contact"
                        className="relative z-10 btn-magnetic inline-flex items-center justify-center bg-accent text-background font-sans font-bold text-base sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-[2rem] hover:bg-accent/90 transition-colors"
                    >
                        Plan een gratis gesprek
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
