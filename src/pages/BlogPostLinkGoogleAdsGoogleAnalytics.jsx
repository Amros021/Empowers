import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ChevronRight, User } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function BlogPostLinkGoogleAdsGoogleAnalytics() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen selection:bg-accent/30 selection:text-dark flex flex-col bg-background">
            <Helmet>
                <title>Hoe link je Google Ads aan Google Analytics 4? | Empowers</title>
                <meta name="description" content="Google Ads koppelen aan Google Analytics 4 doe je in een paar minuten. Lees het stappenplan, wat de koppeling oplevert en welke instellingen tellen." />
                <link rel="canonical" href="https://www.empowers.nl/blogs/google-ads/link-google-ads-google-analytics" />
                <meta property="og:title" content="Hoe link je Google Ads aan Google Analytics 4?" />
                <meta property="og:description" content="Stappenplan voor de koppeling plus de instellingen die ertoe doen." />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://www.empowers.nl/blogs/google-ads/link-google-ads-google-analytics" />
                <meta property="og:image" content="https://www.empowers.nl/images/blogs/link-google-ads-google-analytics.jpg" />
                <meta property="article:published_time" content="2026-08-02T19:00:00+02:00" />
                <meta property="article:author" content="Empowers" />
                <meta property="article:section" content="Google Ads" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Google Ads koppelen aan GA4" />
                <meta name="twitter:description" content="In een paar minuten geregeld, mits je deze instellingen goed zet." />

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@graph": [
                            {
                                "@type": "Article",
                                "headline": "Hoe link je Google Ads aan Google Analytics 4?",
                                "description": "Google Ads koppelen aan Google Analytics 4 doe je in een paar minuten. Lees het stappenplan, wat de koppeling oplevert en welke instellingen tellen.",
                                "image": "https://www.empowers.nl/images/blogs/link-google-ads-google-analytics.jpg",
                                "datePublished": "2026-08-02T19:00:00+02:00",
                                "author": { "@type": "Organization", "name": "Empowers" },
                                "publisher": {
                                    "@type": "Organization",
                                    "name": "Empowers",
                                    "url": "https://www.empowers.nl",
                                    "logo": { "@type": "ImageObject", "url": "https://www.empowers.nl/empowers-logo-color.svg" }
                                }
                            },
                            {
                                "@type": "BreadcrumbList",
                                "itemListElement": [
                                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.empowers.nl" },
                                    { "@type": "ListItem", "position": 2, "name": "Blogs", "item": "https://www.empowers.nl/blogs" },
                                    { "@type": "ListItem", "position": 3, "name": "Google Ads", "item": "https://www.empowers.nl/blogs/google-ads" },
                                    { "@type": "ListItem", "position": 4, "name": "Google Ads koppelen aan GA4", "item": "https://www.empowers.nl/blogs/google-ads/link-google-ads-google-analytics" }
                                ]
                            },
                            {
                                "@type": "FAQPage",
                                "mainEntity": [
                                    {
                                        "@type": "Question",
                                        "name": "Waar koppel je Google Ads aan Google Analytics 4?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "In Google Analytics 4 ga je naar Beheer en kies je bij Productkoppelingen voor Google Ads-koppelingen. Klik op Koppelen, kies het juiste Google Ads-account en bevestig. Je hebt hiervoor beheerdersrechten nodig in GA4 en minimaal beheerderstoegang op het Google Ads-account."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Wat levert de koppeling tussen Google Ads en GA4 op?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Drie dingen: je ziet in GA4 wat bezoekers uit je advertenties op je site doen, je kunt GA4-conversies en doelgroepen gebruiken in Google Ads, en slimme biedstrategieën krijgen meer data om op te sturen. Zonder koppeling kijk je naar klikken zonder te weten wat ze opleveren."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Moet automatisch taggen aanstaan voor de koppeling?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Ja. Automatisch taggen, ook wel auto-tagging, voegt een gclid-parameter toe aan je advertentie-URL's waarmee GA4 klikken herkent. De koppeling zet dit meestal automatisch aan. Check het in Google Ads onder Accountinstellingen als je advertentieverkeer in GA4 als organisch of direct binnenkomt."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Waarom verschillen de cijfers tussen Google Ads en GA4?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Beide systemen meten anders. Google Ads telt klikken en rekent conversies toe aan de klikdatum, GA4 telt sessies en rekent toe aan de conversiedatum. Ook attributiemodellen en consent-instellingen spelen mee. Kleine verschillen zijn normaal, grote verschillen wijzen op een instellingsprobleem."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Kun je GA4-conversies importeren in Google Ads?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Ja. Na de koppeling maak je van belangrijke GA4-gebeurtenissen key events, en die importeer je in Google Ads via Doelen en Conversies. Gebruik per conversieactie één bron om dubbeltellingen te voorkomen: of de Google Ads-tag, of de GA4-import, niet allebei."
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
                        <Link to="/blogs/google-ads" className="hover:text-accent transition-colors">Google Ads</Link>
                        <ChevronRight className="w-3 h-3" />
                        <span className="text-primary truncate">Google Ads koppelen aan GA4</span>
                    </nav>

                    <header className="mb-16">
                        <div className="inline-block px-3 py-1 bg-accent/10 text-accent font-mono text-xs uppercase tracking-widest rounded-full mb-6">
                            Google Ads
                        </div>
                        <h1 className="font-sans font-bold text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight mb-8">
                            Hoe link je Google Ads aan Google Analytics 4?
                        </h1>
                        <div className="flex flex-wrap items-center gap-6 text-sm font-sans text-primary/60 border-y border-primary/10 py-6">
                            <div className="flex items-center gap-2"><User className="w-4 h-4" /><span>Empowers Redactie</span></div>
                            <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>2 augustus 2026</span></div>
                            <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>7 minuten leestijd</span></div>
                        </div>
                    </header>

                    <figure className="w-full h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden mb-16 relative bg-primary">
                        <div className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-overlay" style={{backgroundImage: "url('/images/blogs/link-google-ads-google-analytics.jpg')"}}></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </figure>

                    <div className="prose prose-lg max-w-none prose-headings:text-primary prose-headings:font-bold prose-a:text-accent prose-a:underline hover:prose-a:text-accent/80">
                        <p className="text-xl leading-relaxed text-primary/80 font-medium mb-6">
                            Google Ads koppel je aan Google Analytics 4 via Beheer, Productkoppelingen, Google Ads-koppelingen. Daar kies je je advertentie-account en bevestig je de koppeling. Het duurt een paar minuten, mits je in beide accounts beheerdersrechten hebt. Daarna zie je eindelijk wat kliks op je site doen en kan Google Ads sturen op echte conversies.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Waarom zou je Google Ads en GA4 koppelen?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Zonder koppeling houdt je kennis op bij de klik. Je ziet in Google Ads dat iemand 2,50 euro kostte, maar niet dat hij drie pagina's bekeek, zijn winkelwagen vulde en afhaakte bij de verzendkosten. Dat verhaal staat in GA4, en de koppeling brengt beide werelden samen.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De koppeling werkt twee kanten op. GA4 laat per campagne zien wat bezoekers na de klik doen. En Google Ads kan GA4-conversies en doelgroepen gebruiken om beter te bieden en gerichter te targeten. Vooral slimme biedstrategieën worden er merkbaar beter van, omdat het algoritme meer signalen krijgt om op te leren.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe leg je de koppeling stap voor stap?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Open Google Analytics 4 en klik linksonder op Beheer. Scroll in de kolom van je property naar Productkoppelingen en klik op Google Ads-koppelingen. Klik rechtsboven op Koppelen, kies bij Google Ads-accounts kiezen het juiste account en klik op Bevestigen.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            In het volgende scherm laat je Gepersonaliseerd adverteren inschakelen aan staan en laat je ook Automatisch taggen inschakelen op de standaardinstelling. Klik op Verzenden en de koppeling staat. Zie je het Google Ads-account niet staan? Dan mist je Google-login beheerdersrechten op dat account, en moet degene met toegang je die eerst geven.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat is automatisch taggen en waarom is het nodig?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Automatisch taggen plakt achter elke advertentieklik een unieke code, de gclid. Daaraan herkent GA4 dat een bezoeker via een betaalde klik binnenkwam, inclusief campagne en zoekterm. Zonder die tagging belandt je advertentieverkeer in GA4 bij organisch of direct verkeer en klopt er niets van je rapporten.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Bij het doorlichten van accounts komen we dit nog geregeld tegen: de koppeling staat, maar automatisch taggen is ooit uitgezet en niemand weet waarom. Check het in Google Ads onder Beheerder en Accountinstellingen. Automatisch taggen hoort op ja te staan. Handmatige UTM-tags mag je ernaast blijven gebruiken; hoe die werken lees je in onze uitleg over <Link to="/blogs/tracking/utm-parameters-gebruiken-alle-marketingkanalen" className="text-accent hover:underline">UTM-parameters</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe gebruik je GA4-conversies in Google Ads?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Markeer eerst in GA4 je belangrijkste gebeurtenissen als key event, bijvoorbeeld een aankoop of een verzonden formulier. Ga daarna in Google Ads naar Doelen, Conversies en kies bij het aanmaken voor importeren uit Google Analytics 4. Selecteer de key events en ze tellen voortaan mee als conversie in je campagnes.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Eén waarschuwing: kies per conversie één meetbron. Meet je een aankoop al met de Google Ads-tag, importeer diezelfde aankoop dan niet ook nog uit GA4, anders tel je dubbel en stuurt je biedstrategie op gebakken lucht. Een logische verdeling: de hoofdconversie via de Google Ads-tag, ondersteunende gebeurtenissen uit GA4 als secundaire conversies zonder biedsturing.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Waarom wijken de cijfers van elkaar af?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Schrik niet als Google Ads en GA4 verschillende aantallen tonen. Google Ads telt klikken en schrijft een conversie toe aan de dag van de klik. GA4 telt sessies en schrijft de conversie toe aan de dag waarop hij gebeurt. Tel daarbij verschillen in attributie en consentverlies door cookiebanners, en een afwijking van tien tot twintig procent is heel gewoon.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Groter dan dat? Dan is er meestal echt iets mis: automatisch taggen uit, een dubbele meting of een conversie die op de verkeerde pagina vuurt. Hoe je zoiets structureel controleert lees je in ons artikel over <Link to="/blogs/tracking/marketing-tracking-conversies-meten" className="text-accent hover:underline">conversies meten</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat stel je na de koppeling nog meer in?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Twee dingen maken de koppeling af. Bouw in GA4 doelgroepen, bijvoorbeeld bezoekers die een winkelwagen vulden maar niet kochten, en gebruik die in Google Ads voor remarketing. En zet de GA4-rapporten over advertenties in je vaste routine: het acquisitierapport per campagne vertelt je meer over kwaliteit van verkeer dan het klikoverzicht in Google Ads ooit doet.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Twijfel je of je meting wel klopt, of wil je meer rendement uit je campagnes halen? We controleren je hele meetopstelling en zetten hem goed. Plan een gesprek via onze <Link to="/contact" className="text-accent hover:underline">contactpagina</Link>.
                        </p>
                    </div>

                    <section className="mt-16 pt-12 border-t border-primary/10">
                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Veelgestelde vragen</h2>
                        <div className="space-y-6 not-prose">
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Waar koppel je Google Ads aan Google Analytics 4?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">In Google Analytics 4 ga je naar Beheer en kies je bij Productkoppelingen voor Google Ads-koppelingen. Klik op Koppelen, kies het juiste Google Ads-account en bevestig. Je hebt hiervoor beheerdersrechten nodig in GA4 en minimaal beheerderstoegang op het Google Ads-account.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat levert de koppeling tussen Google Ads en GA4 op?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Drie dingen: je ziet in GA4 wat bezoekers uit je advertenties op je site doen, je kunt GA4-conversies en doelgroepen gebruiken in Google Ads, en slimme biedstrategieën krijgen meer data om op te sturen. Zonder koppeling kijk je naar klikken zonder te weten wat ze opleveren.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Moet automatisch taggen aanstaan voor de koppeling?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Ja. Automatisch taggen, ook wel auto-tagging, voegt een gclid-parameter toe aan je advertentie-URL's waarmee GA4 klikken herkent. De koppeling zet dit meestal automatisch aan. Check het in Google Ads onder Accountinstellingen als je advertentieverkeer in GA4 als organisch of direct binnenkomt.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Waarom verschillen de cijfers tussen Google Ads en GA4?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Beide systemen meten anders. Google Ads telt klikken en rekent conversies toe aan de klikdatum, GA4 telt sessies en rekent toe aan de conversiedatum. Ook attributiemodellen en consent-instellingen spelen mee. Kleine verschillen zijn normaal, grote verschillen wijzen op een instellingsprobleem.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Kun je GA4-conversies importeren in Google Ads?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Ja. Na de koppeling maak je van belangrijke GA4-gebeurtenissen key events, en die importeer je in Google Ads via Doelen en Conversies. Gebruik per conversieactie één bron om dubbeltellingen te voorkomen: of de Google Ads-tag, of de GA4-import, niet allebei.</p>
                            </div>
                        </div>
                    </section>

                    <section className="mt-16 pt-12 border-t border-primary/10">
                        <h3 className="text-xl font-bold text-primary mb-6">Lees ook</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <Link to="/blogs/tracking/google-tag-manager-beginners" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Google Tag Manager voor beginners</h3>
                                <p className="text-primary/60 text-sm">Tags beheren zonder telkens je site aan te passen.</p>
                            </Link>
                            <Link to="/blogs/google-ads/smart-bidding-uitgelegd-wanneer-wanneer" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Smart Bidding uitgelegd</h3>
                                <p className="text-primary/60 text-sm">Wanneer slimme biedstrategieën wel en niet werken.</p>
                            </Link>
                            <Link to="/blogs/tracking/marketing-dashboard-echt-nuttig" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Een marketingdashboard dat nut heeft</h3>
                                <p className="text-primary/60 text-sm">Van losse cijfers naar één bruikbaar overzicht.</p>
                            </Link>
                        </div>
                    </section>

                </div>
            </article>

            <section className="w-full pb-32 px-6">
                <div className="max-w-4xl mx-auto bg-primary rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
                    <h2 className="relative z-10 font-drama italic text-background text-3xl sm:text-4xl md:text-5xl mb-6">
                        Meten wat je campagnes echt opleveren?
                    </h2>
                    <p className="relative z-10 font-sans text-background/70 text-lg mb-10 max-w-xl mx-auto">
                        We zetten je tracking waterdicht op, van koppeling tot conversie. Zodat elke beslissing op echte cijfers rust.
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
