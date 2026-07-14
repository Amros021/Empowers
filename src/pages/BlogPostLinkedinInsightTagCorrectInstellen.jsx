import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ChevronRight, User } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function BlogPostLinkedinInsightTagCorrectInstellen() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen selection:bg-accent/30 selection:text-dark flex flex-col bg-background">
            <Helmet>
                <title>LinkedIn Insight Tag instellen: zo doe je het correct | Empowers</title>
                <meta name="description" content="De LinkedIn Insight Tag instellen doe je via een tag manager of direct in je code. Zo plaats je hem correct, meet je conversies en bouw je doelgroepen." />
                <link rel="canonical" href="https://www.empowers.nl/blogs/social-ads/linkedin-insight-tag-correct-instellen" />
                <meta property="og:title" content="LinkedIn Insight Tag instellen: zo doe je het correct" />
                <meta property="og:description" content="Zo stel je de LinkedIn Insight Tag correct in: plaatsen, conversies meten en retargeting-doelgroepen opbouwen zonder fouten." />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://www.empowers.nl/blogs/social-ads/linkedin-insight-tag-correct-instellen" />
                <meta property="og:image" content="https://www.empowers.nl/images/blogs/linkedin-insight-tag-correct-instellen.jpg" />
                <meta property="article:published_time" content="2026-07-12T10:00:00+02:00" />
                <meta property="article:author" content="Empowers" />
                <meta property="article:section" content="Social Ads" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="LinkedIn Insight Tag instellen: zo doe je het correct" />
                <meta name="twitter:description" content="Zo stel je de LinkedIn Insight Tag correct in: plaatsen, conversies meten en retargeting-doelgroepen opbouwen zonder fouten." />

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@graph": [
                            {
                                "@type": "Article",
                                "headline": "LinkedIn Insight Tag instellen: zo doe je het correct",
                                "description": "De LinkedIn Insight Tag instellen doe je via een tag manager of direct in je code. Zo plaats je hem correct, meet je conversies en bouw je doelgroepen.",
                                "image": "https://www.empowers.nl/images/blogs/linkedin-insight-tag-correct-instellen.jpg",
                                "datePublished": "2026-07-12T10:00:00+02:00",
                                "dateModified": "2026-07-12T10:00:00+02:00",
                                "author": { "@type": "Organization", "name": "Empowers" },
                                "publisher": {
                                    "@type": "Organization", "name": "Empowers", "url": "https://www.empowers.nl",
                                    "logo": { "@type": "ImageObject", "url": "https://www.empowers.nl/empowers-logo-color.svg" }
                                },
                                "mainEntityOfPage": "https://www.empowers.nl/blogs/social-ads/linkedin-insight-tag-correct-instellen"
                            },
                            {
                                "@type": "BreadcrumbList",
                                "itemListElement": [
                                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.empowers.nl" },
                                    { "@type": "ListItem", "position": 2, "name": "Blogs", "item": "https://www.empowers.nl/blogs" },
                                    { "@type": "ListItem", "position": 3, "name": "Social Ads", "item": "https://www.empowers.nl/blogs/social-ads" },
                                    { "@type": "ListItem", "position": 4, "name": "LinkedIn Insight Tag instellen", "item": "https://www.empowers.nl/blogs/social-ads/linkedin-insight-tag-correct-instellen" }
                                ]
                            },
                            {
                                "@type": "FAQPage",
                                "mainEntity": [
                                    {
                                        "@type": "Question",
                                        "name": "Wat is de LinkedIn Insight Tag?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "De Insight Tag is een klein stukje code dat je op je website plaatst. Het herkent welke LinkedIn-leden je site bezoeken, meet je conversies en levert anonieme inzichten over je bezoekers. Daarmee kun je zien welke campagnes resultaat opleveren en kun je retargeting-doelgroepen opbouwen van mensen die je site al bezochten."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Hoe installeer je de LinkedIn Insight Tag?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Je kunt de tag op twee manieren plaatsen. Via een tag manager zoals Google Tag Manager voeg je de Insight Tag toe als nieuwe tag die op alle pagina's afgaat. Of je plakt de code rechtstreeks in je website, vlak voor de sluitende body-tag op elke pagina. De route via een tag manager is meestal het makkelijkst om te beheren."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Heb je een tag manager nodig voor de Insight Tag?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Nee, dat hoeft niet, maar het maakt het wel makkelijker. Met een tag manager beheer je al je tags op één plek en hoef je niet steeds in de code van je site. Heb je geen tag manager, dan kun je de code ook direct in je website plaatsen. Het resultaat is hetzelfde, alleen het beheer verschilt."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Hoe controleer je of de Insight Tag werkt?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "In Campaign Manager zie je de status van je Insight Tag. Zodra er verkeer op je site komt, springt die op actief. Daarnaast kun je met een browserextensie die tags op een pagina toont controleren of de tag echt afvuurt. Pas als de status actief is, weet je zeker dat je conversies meet en doelgroepen opbouwt."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Moet je toestemming vragen voor de Insight Tag?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Ja. De Insight Tag plaatst cookies, dus onder de Nederlandse en Europese privacyregels heb je toestemming van de bezoeker nodig voordat de tag mag afvuren. Koppel de tag daarom aan je cookiebanner, zodat hij pas laadt nadat iemand akkoord heeft gegeven. Zo blijf je netjes binnen de regels en voorkom je problemen."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Hoelang duurt het voor je een doelgroep kunt gebruiken?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Dat hangt af van je websiteverkeer. LinkedIn hanteert een minimumomvang voordat een doelgroep mag draaien, dus een site met weinig bezoek heeft langer nodig om die grens te halen. Hoe meer relevant verkeer je hebt, hoe sneller je doelgroep bruikbaar is. Plaats de tag daarom zo vroeg mogelijk, ook als je nog niet adverteert."
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
                        <span className="text-primary truncate">LinkedIn Insight Tag instellen</span>
                    </nav>

                    <header className="mb-16">
                        <div className="inline-block px-3 py-1 bg-accent/10 text-accent font-mono text-xs uppercase tracking-widest rounded-full mb-6">
                            Social Ads
                        </div>
                        <h1 className="font-sans font-bold text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight mb-8">
                            LinkedIn Insight Tag instellen: zo doe je het correct
                        </h1>

                        <div className="flex flex-wrap items-center gap-6 text-sm font-sans text-primary/60 border-y border-primary/10 py-6">
                            <div className="flex items-center gap-2"><User className="w-4 h-4" /><span>Empowers Redactie</span></div>
                            <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>12 juli 2026</span></div>
                            <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>8 minuten leestijd</span></div>
                        </div>
                    </header>

                    <figure className="w-full h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden mb-16 relative bg-primary">
                        <div className="absolute inset-0 bg-[url('/images/blogs/linkedin-insight-tag-correct-instellen.jpg')] bg-cover bg-center opacity-40 mix-blend-overlay" style={{backgroundImage: "url('/images/blogs/linkedin-insight-tag-correct-instellen.jpg')"}}></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </figure>

                    <div className="prose prose-lg max-w-none prose-headings:text-primary prose-headings:font-bold prose-a:text-accent prose-a:underline hover:prose-a:text-accent/80">
                        <p className="text-xl leading-relaxed text-primary/80 font-medium mb-6">
                            De LinkedIn Insight Tag is een klein stukje code dat je op je website plaatst om bezoekers te herkennen, conversies te meten en retargeting-doelgroepen op te bouwen. Je installeert hem één keer, via een tag manager of direct in je code, koppelt hem aan je cookiebanner en controleert daarna in Campaign Manager of hij actief staat. Zonder die tag mis je je belangrijkste meet- en stuurmiddel op LinkedIn.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat is de LinkedIn Insight Tag?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De Insight Tag is een stukje JavaScript dat op je website draait. Het herkent welke LinkedIn-leden je pagina's bezoeken en koppelt dat aan je advertentieaccount. Daarmee zie je niet alleen wie er komt, maar ook welke advertenties echt tot actie leiden.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Je plaatst de tag één keer en hij werkt daarna op je hele site. Dat is de basis voor bijna alles wat je serieus met LinkedIn Ads wilt doen. Zonder tag adverteer je blind, want je weet niet wat een campagne oplevert.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat kun je met de Insight Tag?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De tag doet drie dingen tegelijk. Hij meet conversies, zodat je ziet welke campagnes aanvragen of aanmeldingen opleveren. Hij bouwt retargeting-doelgroepen op van mensen die je site bezochten. En hij geeft anonieme inzichten over het soort bedrijven en functies dat bij je langskomt.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Vooral het opbouwen van doelgroepen is waardevol. Het werkt op de achtergrond, ook als je nog niet adverteert. Hoe je die warme bezoekers later gericht benadert, lees je in onze blog over <Link to="/blogs/social-ads/linkedin-retargeting-campagne-opzetten" className="text-accent hover:underline">een LinkedIn retargeting campagne opzetten</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe installeer je de Insight Tag stap voor stap?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Je haalt de code op in Campaign Manager, onder het onderdeel voor data en Insight Tag. Daar krijg je een stukje code dat op elke pagina van je site moet komen, vlak voor de sluitende body-tag. Plaats je hem maar op één pagina, dan meet je ook maar één pagina.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De makkelijkste route loopt via een tag manager zoals Google Tag Manager. Je voegt de Insight Tag toe als nieuwe tag die op alle pagina's afgaat, en publiceert. Werk je liever zonder tag manager, dan plak je de code rechtstreeks in de template van je website, zodat hij overal meekomt. Beide manieren geven hetzelfde resultaat.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe controleer je of de tag goed werkt?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Kijk eerst in Campaign Manager naar de status van je Insight Tag. Zodra er verkeer op je site komt, springt die van inactief naar actief. Dat is je belangrijkste bevestiging dat de installatie geslaagd is.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Voor de zekerheid kun je een browserextensie gebruiken die laat zien welke tags op een pagina afvuren. Zie je de Insight Tag daar verschijnen, dan zit het goed. We zien in de praktijk dat veel mensen deze controle overslaan en pas weken later merken dat ze al die tijd niets gemeten hebben.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat regel je rond privacy en toestemming?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De Insight Tag plaatst cookies, en dat mag onder de Europese privacyregels niet zomaar. Je hebt toestemming van de bezoeker nodig voordat de tag afvuurt. Koppel hem daarom aan je cookiebanner, zodat hij pas laadt nadat iemand akkoord heeft gegeven.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Met een tag manager regel je dit een stuk eenvoudiger, omdat je daar kunt instellen dat de tag alleen bij toestemming afgaat. Sla deze stap niet over. Een tag die laadt zonder toestemming levert niet alleen een risico op, maar vervuilt ook je data met bezoekers die je eigenlijk niet had mogen meten.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Welke fouten zie je het vaakst?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De meest gemaakte fout is de tag maar op een deel van de site plaatsen. Dan mis je conversies en blijft je doelgroep klein. Een tweede fout is vergeten te controleren of de tag echt afvuurt, waardoor je wekenlang denkt te meten terwijl er niets binnenkomt.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Ook de koppeling met de cookiebanner gaat vaak mis. Of de tag vuurt nooit af omdat hij achter een geblokkeerde categorie zit, of hij vuurt juist altijd af zonder toestemming. Controleer dus niet alleen of de tag werkt, maar ook of hij op het juiste moment werkt. Wat je daarna met die meetdata doet, lees je in onze blog over <Link to="/blogs/social-ads/linkedin-ads-kpi-resultaten-meten" className="text-accent hover:underline">LinkedIn Ads resultaten meten</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Waar begin je deze week?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Haal de Insight Tag op in Campaign Manager en plaats hem via je tag manager op alle pagina's. Koppel hem aan je cookiebanner zodat hij alleen bij toestemming afgaat. Controleer daarna of de status op actief springt en of de tag echt afvuurt.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De Insight Tag is de basis onder elke serieuze LinkedIn-campagne. Eén keer goed instellen en controleren bespaart je later veel blind adverteren. Wil je zeker weten dat je meting klopt voordat je budget inzet? Plan een gesprek via empowers.nl/contact.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Veelgestelde vragen</h2>
                    </div>

                    <section className="mt-4">
                        <div className="space-y-6 not-prose">
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat is de LinkedIn Insight Tag?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    De Insight Tag is een klein stukje code dat je op je website plaatst. Het herkent welke LinkedIn-leden je site bezoeken, meet je conversies en levert anonieme inzichten over je bezoekers. Daarmee kun je zien welke campagnes resultaat opleveren en kun je retargeting-doelgroepen opbouwen van mensen die je site al bezochten.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoe installeer je de LinkedIn Insight Tag?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Je kunt de tag op twee manieren plaatsen. Via een tag manager zoals Google Tag Manager voeg je de Insight Tag toe als nieuwe tag die op alle pagina's afgaat. Of je plakt de code rechtstreeks in je website, vlak voor de sluitende body-tag op elke pagina. De route via een tag manager is meestal het makkelijkst om te beheren.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Heb je een tag manager nodig voor de Insight Tag?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Nee, dat hoeft niet, maar het maakt het wel makkelijker. Met een tag manager beheer je al je tags op één plek en hoef je niet steeds in de code van je site. Heb je geen tag manager, dan kun je de code ook direct in je website plaatsen. Het resultaat is hetzelfde, alleen het beheer verschilt.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoe controleer je of de Insight Tag werkt?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    In Campaign Manager zie je de status van je Insight Tag. Zodra er verkeer op je site komt, springt die op actief. Daarnaast kun je met een browserextensie die tags op een pagina toont controleren of de tag echt afvuurt. Pas als de status actief is, weet je zeker dat je conversies meet en doelgroepen opbouwt.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Moet je toestemming vragen voor de Insight Tag?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Ja. De Insight Tag plaatst cookies, dus onder de Nederlandse en Europese privacyregels heb je toestemming van de bezoeker nodig voordat de tag mag afvuren. Koppel de tag daarom aan je cookiebanner, zodat hij pas laadt nadat iemand akkoord heeft gegeven. Zo blijf je netjes binnen de regels en voorkom je problemen.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoelang duurt het voor je een doelgroep kunt gebruiken?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Dat hangt af van je websiteverkeer. LinkedIn hanteert een minimumomvang voordat een doelgroep mag draaien, dus een site met weinig bezoek heeft langer nodig om die grens te halen. Hoe meer relevant verkeer je hebt, hoe sneller je doelgroep bruikbaar is. Plaats de tag daarom zo vroeg mogelijk, ook als je nog niet adverteert.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="mt-16 pt-12 border-t border-primary/10">
                        <h3 className="text-xl font-bold text-primary mb-6">Lees ook</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <Link to="/blogs/social-ads/linkedin-retargeting-campagne-opzetten" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Retargeting opzetten</h3>
                                <p className="text-primary/60 text-sm">Van websitebezoeker naar lead.</p>
                            </Link>
                            <Link to="/blogs/social-ads/linkedin-ads-kpi-resultaten-meten" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Resultaten meten</h3>
                                <p className="text-primary/60 text-sm">De belangrijkste KPI's op een rij.</p>
                            </Link>
                            <Link to="/blogs/social-ads" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Social Ads blogs</h3>
                                <p className="text-primary/60 text-sm">Meer uit Meta en LinkedIn halen.</p>
                            </Link>
                        </div>
                    </section>
                </div>
            </article>

            <section className="w-full pb-32 px-6">
                <div className="max-w-4xl mx-auto bg-primary rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
                    <h2 className="relative z-10 font-drama italic text-background text-3xl sm:text-4xl md:text-5xl mb-6">Meet voordat je budget inzet</h2>
                    <p className="relative z-10 font-sans text-background/70 text-lg mb-10 max-w-xl mx-auto">We zetten je Insight Tag en metingen goed op, zodat je vanaf de eerste euro weet wat je campagnes opleveren. Benieuwd of jouw meting klopt?</p>
                    <Link to="/contact" className="relative z-10 btn-magnetic inline-flex items-center justify-center bg-accent text-background font-sans font-bold text-lg px-10 py-4 rounded-[2rem] hover:bg-accent/90 transition-colors">Neem contact op</Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
