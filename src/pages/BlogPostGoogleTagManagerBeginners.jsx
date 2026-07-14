import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ChevronRight, User } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function BlogPostGoogleTagManagerBeginners() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const breadcrumbs = [
        { label: 'Home', href: '/' },
        { label: 'Blogs', href: '/blogs' },
        { label: 'Tracking', href: '/blogs/tracking' },
        { label: 'Google Tag Manager voor beginners', href: '/blogs/tracking/google-tag-manager-beginners' }
    ];

    const faqItems = [
        {
            question: 'Hoeveel kost Google Tag Manager?',
            answer: 'Google Tag Manager is volledig gratis. Je betaalt niets voor het platform zelf. Je hoeft alleen betaald te hebben voor de services waar je tags voor instelt, zoals Google Ads of Google Analytics.'
        },
        {
            question: 'Heb ik programmeerervaring nodig?',
            answer: 'Nee, je hebt geen code-ervaring nodig. GTM is speciaal ontworpen voor marketers. Je klikt jezelf door de interface en kunt tracking instellen zonder één regel code te schrijven.'
        },
        {
            question: 'Kan ik GTM gebruiken naast Google Analytics?',
            answer: 'Ja, zelfs beter. GTM en Analytics werken perfect samen. GTM stuurt events en conversies naar Analytics, dus je ziet alles op één plek. Je hoeft het Analytics-script niet zelf in je site te zetten.'
        },
        {
            question: 'Wat als ik een fout maak in GTM?',
            answer: 'Geen paniek. Je kunt alles ongedaan maken. Alle veranderingen gaan eerst in preview, dan test je het, en pas dan publish je het live. En je kunt altijd vorige versies terugzetten.'
        },
        {
            question: 'Hoe lang duurt het om GTM in te stellen?',
            answer: 'De basis instellingen doe je in 30 minuten. Complete tracking met alle events, conversies en remarketing kan 2-4 uur duren. Het hangt af van hoeveel je wilt tracken.'
        },
        {
            question: 'Werkt GTM op mobiele apps?',
            answer: 'Ja, via Google Tag Manager voor apps. Je kunt dezelfde tags instellen voor je app. Dit is anders dan de web-versie, dus zorg dat je de juiste GTM container voor je app kiest.'
        }
    ];

    return (
        <main className="min-h-screen selection:bg-accent/30 selection:text-dark flex flex-col bg-background">
            <Helmet>
                <title>Google Tag Manager voor beginners: zo start je | Empowers</title>
                <meta name="description" content="Google Tag Manager maakt tracking makkelijk zonder code. Leer stap voor stap hoe je GTM instelt voor Google Ads, Meta Ads en Analytics." />
                <meta name="keywords" content="google tag manager beginners, gtm uitleg, google tag manager setup, conversie tracking" />
                <link rel="canonical" href="https://www.empowers.nl/blogs/tracking/google-tag-manager-beginners" />
                <meta property="og:title" content="Google Tag Manager voor beginners: zo start je | Empowers" />
                <meta property="og:description" content="Google Tag Manager maakt tracking makkelijk zonder code. Leer stap voor stap hoe je GTM instelt voor Google Ads, Meta Ads en Analytics." />
                <meta property="og:image" content="https://www.empowers.nl/images/blogs/google-tag-manager-beginners.jpg" />
                <meta property="og:url" content="https://www.empowers.nl/blogs/tracking/google-tag-manager-beginners" />
                <meta property="og:type" content="article" />
                <meta property="article:published_time" content="2026-03-27T00:00:00+01:00" />
                <meta property="article:author" content="Empowers" />
                <meta property="article:section" content="Tracking" />
                <meta name="author" content="Empowers" />
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Article",
                        "headline": "Google Tag Manager voor beginners: zo start je",
                        "description": "Google Tag Manager maakt tracking makkelijk zonder code. Leer stap voor stap hoe je GTM instelt voor Google Ads, Meta Ads en Analytics.",
                        "image": "https://www.empowers.nl/images/blogs/google-tag-manager-beginners.jpg",
                        "datePublished": "2026-03-27T00:00:00+01:00",
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
        <meta name="twitter:title" content="Google Tag Manager voor beginners: zo start je" />
        <meta name="twitter:description" content="Google Tag Manager maakt tracking makkelijk zonder code. Leer stap voor stap hoe je GTM instelt voor Google Ads, Meta Ad" />
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
                        <Link to="/blogs/tracking" className="hover:text-accent transition-colors">Tracking</Link>
                        <ChevronRight className="w-3 h-3" />
                        <span className="text-primary truncate">Google Tag Manager beginners...</span>
                    </nav>

                    {/* Header */}
                    <header className="mb-16">
                        <div className="inline-block px-3 py-1 bg-accent/10 text-accent font-mono text-xs uppercase tracking-widest rounded-full mb-6">
                            TRACKING
                        </div>
                        <h1 className="font-sans font-bold text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight mb-8">
                            Google Tag Manager voor beginners: zo start je
                        </h1>
                        <div className="flex flex-wrap items-center gap-6 text-sm font-sans text-primary/60 border-y border-primary/10 py-6">
                            <div className="flex items-center gap-2">
                                <User className="w-4 h-4" />
                                <span>Empowers Redactie</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>27 maart 2026</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>6 minuten leestijd</span>
                            </div>
                        </div>
                    </header>

                    {/* Featured Image */}
                    <figure className="w-full h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden mb-16 relative bg-primary">
                        <div className="absolute inset-0 bg-[url('/images/blogs/google-tag-manager-beginners.jpg')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </figure>

                    {/* Main Content */}
                    <div className="prose prose-lg max-w-none text-dark space-y-8">
                        <p className="text-lg leading-relaxed">
                            Google Tag Manager (GTM) maakt tracking eenvoudig. Je zet één stukje code in je website en voegt daarna alle tracking toe zonder de code aan te raken. Perfekt voor bedrijven die willen weten hoe klanten hun site gebruiken, welke producten ze bekijken, en welke aankopen ze doen.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-12 mb-6">Wat is Google Tag Manager eigenlijk?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Stel je voor dat je website een controlekamer is. Elk ding wat je wilt meten is een knop op het dashboard: een klik op een product, een formulierinzending, een aankoop. Zonder GTM moet je voor elke knop naar je developer gaan. Met GTM zet je alles zelf in.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            GTM is het hulpmiddel waar je al die knoppen inricht. Je voegt pixels van Google Ads, Meta, Analytics en anderen toe. GTM stuurt het signaal door wanneer die knop wordt ingedrukt. Alles gebeurt via een vriendelijk dashboard, geen code nodig.
                        </p>

                        <h2 className="text-3xl font-bold mt-12 mb-6">Waarom je Google Tag Manager nodig hebt</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Zonder GTM gebeurt dit: je developer zet Google Ads pixel in je code. Maanden later wil je Meta Ads toe, je developer voegt het toe. Dan wil je een event tracken, weer bij de developer. Met GTM: jij zet alles in, direct live, geen wachtrij bij je developer.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Plus: je hebt controle. Je kunt tags testen in preview modus voor je ze live zet. Je ziet precies welke pixels op je site actief zijn. En je kunt fouten snel herstellen zonder code te veranderen.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-12 mb-6">Stap 1: Account aanmaken</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Ga naar <a href="https://tagmanager.google.com" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">tagmanager.google.com</a> en log in met je Google-account. Klik op "Account aanmaken" en vul in:
                        </p>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                            <li>Accountnaam (bijv. "Mijn bedrijf")</li>
                            <li>Land (Nederland)</li>
                            <li>Container naam (bijv. "Website")</li>
                            <li>Target platform (Website)</li>
                        </ul>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Klaar. Je krijgt nu twee dingen: Account-ID en Container-ID. Schrijf deze op, je hebt ze straks nodig.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-12 mb-6">Stap 2: GTM-code in je website</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            GTM geeft je twee stukken code. Het eerste zet je in de &lt;head&gt; van je website, het tweede direct na de &lt;body&gt; tag. Heb je een website builder als Webflow of WordPress? Dan is er vaak een snellere manier. Voor custom code: geef dit aan je developer, het duurt 5 minuten.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Zit je vast? <Link to="/contact" className="text-accent hover:underline">Neem contact op</Link>, wij helpen met de setup.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-12 mb-6">Stap 3: Events instellen</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Nu de grappige part. Events zijn acties op je site die je wilt meten. Voorbeelden: iemand klikt op "Contact", vult het formulier in, voegt iets toe aan winkelwagen, of koopt iets.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Voor veel sites gaat dit vanzelf. GTM ziet automatisch formulieren en klikken. Voor speciale events (bijv. "Video afgespeeld", "Diepte van de pagina") voeg je zelf toe:
                        </p>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                            <li>Ga naar "Tags" in GTM</li>
                            <li>Klik "Nieuwe Tag"</li>
                            <li>Kies het type (bijv. Google Analytics)</li>
                            <li>Vul de instellingen in</li>
                            <li>Zet een trigger (wanneer dit event afvuurt)</li>
                            <li>Test in preview</li>
                            <li>Publish</li>
                        </ul>

                        <h2 className="text-3xl font-bold text-primary mt-12 mb-6">Stap 4: Google Analytics toevoegen</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Je wilt zien hoeveel bezoekers je hebt, welke pagina's ze bekijken, en hoe lang ze blijven. Dat doe je met Google Analytics.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            In GTM: klik op "Tags", dan "Nieuwe Tag". Kies "Google Analytics 4" als tag type. Plak je Measurement ID erin (die vind je in Analytics). Voeg een trigger toe: "PageView". Klaar. Nu stuurt GTM alles naar Analytics.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Meer informatie over <Link to="/blogs/tracking/utm-parameters-gebruiken-alle-marketingkanalen" className="text-accent hover:underline">UTM-parameters voor alle kanalen</Link> zodat je ziet welke bron van bezoekers komt.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-12 mb-6">Stap 5: Conversies tracken</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een conversie is iets waardevol: een aankoop, een formulierinzending, een gratis proefversie. Dit moet je apart tracken zodat je ziet welke advertenties ze binnenhalen.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Voorbeeld: je website zegt "Bedankt voor je aankoop" op pagina /bedankt. In GTM:
                        </p>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                            <li>Maak een variable: "Page Path"</li>
                            <li>Maak een trigger: "Page Path = /bedankt"</li>
                            <li>Maak een tag: Google Analytics conversie event</li>
                            <li>Zet dezelfde tag ook naar Google Ads pixel</li>
                        </ul>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Voilà. Als iemand koopt en naar /bedankt gaat, zien je Analytics en Google Ads dat het werkt.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-12 mb-6">Stap 6: Testen en live gaan</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Dit is het belangrijkste. Je gaat NIET meteen live. Je test eerst alles:
                        </p>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                            <li>Klik op "Preview" in GTM</li>
                            <li>Bezoek je website in een ander tabblad</li>
                            <li>Je ziet nu elk event dat afvuurt</li>
                            <li>Klik op je site: formulier, product, links</li>
                            <li>Check of de juiste events verschijnen</li>
                            <li>Zie je fouten? Pas tags aan en test opnieuw</li>
                            <li>Alles oké? Klik "Publish"</li>
                        </ul>

                        <h2 className="text-3xl font-bold text-primary mt-12 mb-6">Hoe Google Tag Manager je advertenties beter maakt</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Nu je weet wie koopt en wat ze doen, kan je daar veel mee. Voor <Link to="/google-ads" className="text-accent hover:underline">Google Ads</Link> vul je conversies in. Google ziet: "Deze advertentie bracht 5 verkopen". Dan draait Google die advertentie meer en minder rendabele advertenties minder.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Voor Meta Ads even hetzelfde. Je voegt de Meta pixel toe via GTM. Meta ziet je conversies, optimalisert je campagnes beter.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Resultaat: minder geld verspillen aan advertenties die niet werken, meer omzet van advertenties die wel werken.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-12 mb-6">Beginner-fouten en hoe ze te vermijden</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            <strong>Fout 1: Geen preview gebruiken.</strong> Je voelt je voetje. Doe het. Test alles in preview voor je publiceert.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            <strong>Fout 2: Verouderde tags actief laten.</strong> Je zet iets in, maanden later vergeet je het uit te zetten. Schoon je GTM op, verwijder oude dingen.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            <strong>Fout 3: Dezelfde conversie twee keer tellen.</strong> Je hebt een Analytics event en een Ads tag voor dezelfde conversie, en door een fout tellen ze dubbel. Check je getallen op https://ads.google.com en Google Analytics, ze moeten hetzelfde zijn.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            <strong>Fout 4: Geen documentatie bijhouden.</strong> Maak ergens een aantekening: "Conversie 'aankoop' = pagina /bedankt". Later maakt een collega dezelfde tag opnieuw zonder te weten dat ie bestaat.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-12 mb-6">Volgende stappen</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Je GTM werkt nu. Wat je kan doen:
                        </p>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                            <li>Events verfijnen. Niet alleen "aankoop", maar ook "begonnen checkout", "verlaten wagen"</li>
                            <li>Remarketing pixels toevoegen zodat je klanten later advertenties ziet</li>
                            <li>Video-events tracken (play, pause, afgerond)</li>
                            <li>Scroll-diepte meten (leest je pagina volledig gelezen?)</li>
                            <li>Scroll naar <Link to="/diensten" className="text-accent hover:underline">ons tracking-diensten</Link> voor diepere optimalisatie</li>
                        </ul>

                        <p className="mt-12 pt-8 border-t border-dark/10">
                            Zit je vast of wil je meer hulp? <Link to="/contact" className="text-accent hover:underline">Stuur ons een bericht</Link>. Wij zetten GTM op en optimaliseren je tracking zodat je advertenties beter werken.
                        </p>
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

            {/* Bottom CTA */}
            <section className="w-full pb-32 px-6">
                <div className="max-w-4xl mx-auto bg-primary rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
                    <h2 className="relative z-10 font-drama italic text-background text-3xl sm:text-4xl md:text-5xl mb-6">GTM perfect instellen?</h2>
                    <p className="relative z-10 font-sans text-background/70 text-lg mb-10 max-w-xl mx-auto">
                        Wij zetten Google Tag Manager in, configureren je events, tracken je conversies en verbinden alles met Google Ads en Analytics. Klaar voor beter inzicht en hogere omzet.
                    </p>
                    <Link to="/contact" className="relative z-10 btn-magnetic inline-flex items-center justify-center bg-accent text-background font-sans font-bold text-lg px-10 py-4 rounded-[2rem] hover:bg-accent/90 transition-colors">
                        Maak een afspraak
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
