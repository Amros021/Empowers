import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ChevronRight, User } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function BlogPostLinkedinAdsWebinarAanmeldingen() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen selection:bg-accent/30 selection:text-dark flex flex-col bg-background">
            <Helmet>
                <title>LinkedIn Ads voor webinars: zo maximaliseer je aanmeldingen | Empowers</title>
                <meta name="description" content="LinkedIn Ads voor webinars werken het best met een scherpe doelgroep en een Lead Gen Form. Zo haal je meer aanmeldingen zonder je budget te verspillen." />
                <link rel="canonical" href="https://www.empowers.nl/blogs/social-ads/linkedin-ads-webinar-aanmeldingen" />
                <meta property="og:title" content="LinkedIn Ads voor webinars: zo maximaliseer je aanmeldingen" />
                <meta property="og:description" content="Haal meer webinaraanmeldingen uit LinkedIn Ads met een scherpe doelgroep, een duidelijk aanbod en het juiste aanmeldformulier." />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://www.empowers.nl/blogs/social-ads/linkedin-ads-webinar-aanmeldingen" />
                <meta property="og:image" content="https://www.empowers.nl/images/blogs/linkedin-ads-webinar-aanmeldingen.jpg" />
                <meta property="article:published_time" content="2026-07-09T10:00:00+02:00" />
                <meta property="article:author" content="Empowers" />
                <meta property="article:section" content="Social Ads" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="LinkedIn Ads voor webinars: zo maximaliseer je aanmeldingen" />
                <meta name="twitter:description" content="Haal meer webinaraanmeldingen uit LinkedIn Ads met een scherpe doelgroep, een duidelijk aanbod en het juiste aanmeldformulier." />

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@graph": [
                            {
                                "@type": "Article",
                                "headline": "LinkedIn Ads voor webinars: zo maximaliseer je aanmeldingen",
                                "description": "LinkedIn Ads voor webinars werken het best met een scherpe doelgroep en een Lead Gen Form. Zo haal je meer aanmeldingen zonder je budget te verspillen.",
                                "image": "https://www.empowers.nl/images/blogs/linkedin-ads-webinar-aanmeldingen.jpg",
                                "datePublished": "2026-07-09T10:00:00+02:00",
                                "dateModified": "2026-07-09T10:00:00+02:00",
                                "author": { "@type": "Organization", "name": "Empowers" },
                                "publisher": {
                                    "@type": "Organization", "name": "Empowers", "url": "https://www.empowers.nl",
                                    "logo": { "@type": "ImageObject", "url": "https://www.empowers.nl/empowers-logo-color.svg" }
                                },
                                "mainEntityOfPage": "https://www.empowers.nl/blogs/social-ads/linkedin-ads-webinar-aanmeldingen"
                            },
                            {
                                "@type": "BreadcrumbList",
                                "itemListElement": [
                                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.empowers.nl" },
                                    { "@type": "ListItem", "position": 2, "name": "Blogs", "item": "https://www.empowers.nl/blogs" },
                                    { "@type": "ListItem", "position": 3, "name": "Social Ads", "item": "https://www.empowers.nl/blogs/social-ads" },
                                    { "@type": "ListItem", "position": 4, "name": "LinkedIn Ads voor webinars", "item": "https://www.empowers.nl/blogs/social-ads/linkedin-ads-webinar-aanmeldingen" }
                                ]
                            },
                            {
                                "@type": "FAQPage",
                                "mainEntity": [
                                    {
                                        "@type": "Question",
                                        "name": "Werkt LinkedIn goed om webinaraanmeldingen te krijgen?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Ja, voor een zakelijk webinar is LinkedIn vaak het sterkste kanaal. Je kunt richten op functie en sector, dus je bereikt precies de professionals voor wie je onderwerp relevant is. Je betaalt op LinkedIn meer per klik dan op andere kanalen, maar de aanmeldingen zijn doorgaans van hogere kwaliteit, omdat je de juiste beslissers aanspreekt in plaats van een breed publiek."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Welk campagnedoel kies je voor een webinar op LinkedIn?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Voor aanmeldingen kies je meestal het doel leads of websiteverkeer. Met het leaddoel gebruik je een Lead Gen Form binnen LinkedIn zelf, zodat mensen zich aanmelden zonder de app te verlaten. Wil je dat ze op je eigen landingspagina terechtkomen, dan kies je websiteverkeer. Welk doel het beste werkt, hangt af van of je liever volume of meer context per aanmelding wilt."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Wat is een Lead Gen Form en waarom helpt het bij webinars?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Een Lead Gen Form is een aanmeldformulier dat binnen LinkedIn opent en alvast is ingevuld met de gegevens uit iemands profiel. Daardoor hoeft iemand alleen te bevestigen in plaats van alles te typen. Die lage drempel levert vaak meer aanmeldingen op dan een losse landingspagina, omdat er minder stappen tussen de klik en de aanmelding zitten."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Hoeveel budget heb je nodig voor LinkedIn-webinarads?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Dat hangt af van je doelgroep en je doel, maar reken op een hogere kosten per aanmelding dan op andere kanalen, omdat LinkedIn duur is per klik. Begin met een budget dat genoeg vertoningen oplevert om iets te leren en laat de campagne een paar dagen draaien. Daarna stuur je bij op basis van de werkelijke kosten per aanmelding."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Hoe zorg je dat aangemelde mensen ook echt komen opdagen?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Tussen aanmelding en webinar valt altijd een deel af. Je beperkt dat met duidelijke herinneringen: een bevestiging direct na de aanmelding, een mail een dag van tevoren en een laatste reminder vlak voor aanvang. Plan je webinar bij voorkeur niet te ver vooruit, want hoe langer de periode tussen aanmelding en uitzending, hoe meer mensen afhaken."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Welke fout kost de meeste webinaraanmeldingen?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Een vaag aanbod is de grootste lekkage. Als uit je advertentie niet meteen blijkt wat de bezoeker leert en waarom dat de moeite waard is, klikt niemand. Zet daarom de concrete opbrengst van het webinar centraal, niet alleen het onderwerp. Een te brede doelgroep is de tweede grote fout, want dan betaal je voor mensen voor wie het webinar niet relevant is."
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
                        <span className="text-primary truncate">LinkedIn Ads voor webinars</span>
                    </nav>

                    <header className="mb-16">
                        <div className="inline-block px-3 py-1 bg-accent/10 text-accent font-mono text-xs uppercase tracking-widest rounded-full mb-6">
                            Social Ads
                        </div>
                        <h1 className="font-sans font-bold text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight mb-8">
                            LinkedIn Ads voor webinars: zo maximaliseer je aanmeldingen
                        </h1>

                        <div className="flex flex-wrap items-center gap-6 text-sm font-sans text-primary/60 border-y border-primary/10 py-6">
                            <div className="flex items-center gap-2"><User className="w-4 h-4" /><span>Empowers Redactie</span></div>
                            <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>9 juli 2026</span></div>
                            <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>8 minuten leestijd</span></div>
                        </div>
                    </header>

                    <figure className="w-full h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden mb-16 relative bg-primary">
                        <div className="absolute inset-0 bg-[url('/images/blogs/linkedin-ads-webinar-aanmeldingen.jpg')] bg-cover bg-center opacity-40 mix-blend-overlay" style={{backgroundImage: "url('/images/blogs/linkedin-ads-webinar-aanmeldingen.jpg')"}}></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </figure>

                    <div className="prose prose-lg max-w-none prose-headings:text-primary prose-headings:font-bold prose-a:text-accent prose-a:underline hover:prose-a:text-accent/80">
                        <p className="text-xl leading-relaxed text-primary/80 font-medium mb-6">
                            LinkedIn Ads voor webinars werken het best als je richt op functie en sector, en aanmelden zo makkelijk mogelijk maakt. Je advertentie laat in één oogopslag zien wat de bezoeker leert, en het aanmelden gebeurt bij voorkeur via een Lead Gen Form dat al is ingevuld. Zo bereik je precies de juiste professionals en haal je meer aanmeldingen uit hetzelfde budget.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Waarom werkt LinkedIn goed voor webinaraanmeldingen?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een zakelijk webinar is alleen interessant voor een specifieke groep professionals. Dat is precies waar LinkedIn sterk in is. Je richt je advertentie op functie en sector, dus je bereikt de mensen voor wie je onderwerp echt relevant is in plaats van een breed publiek waar toevallig een geïnteresseerde tussen zit.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De prijs per klik ligt op LinkedIn hoger dan op andere kanalen. Daar staat tegenover dat de aanmeldingen vaak waardevoller zijn, omdat je de juiste beslissers aanspreekt. Hoe je die doelgroep scherp opbouwt, lees je in onze blog over <Link to="/blogs/social-ads/linkedin-ads-targeting-beslissers-bereiken" className="text-accent hover:underline">de juiste beslissers bereiken met LinkedIn-targeting</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Welk campagnedoel kies je voor een webinar?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Voor aanmeldingen draait het om twee doelen: leads of websiteverkeer. Kies je voor leads, dan meldt iemand zich aan via een formulier binnen LinkedIn zelf. Kies je voor websiteverkeer, dan stuur je mensen naar je eigen aanmeldpagina. Het algoritme stuurt vervolgens precies op het doel dat je instelt, dus die keuze bepaalt voor een groot deel je resultaat.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Wil je veel aanmeldingen tegen een lage drempel, dan werkt het leaddoel meestal het beste. Wil je liever dat mensen eerst je landingspagina zien en daar meer context krijgen, dan kies je websiteverkeer. Beide kunnen werken. De vraag is wat voor jou zwaarder weegt: volume of context per aanmelding.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Landingspagina of Lead Gen Form: wat kies je?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een Lead Gen Form is een formulier dat binnen LinkedIn opent en alvast is ingevuld met de gegevens uit iemands profiel. Aanmelden is dan een kwestie van bevestigen. Die lage drempel levert vaak meer aanmeldingen op, juist omdat er minder stappen tussen de klik en de inschrijving zitten.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een eigen landingspagina geeft je meer ruimte om te overtuigen en om mensen direct in je eigen systeem te krijgen. De keerzijde is een hogere drempel: elke extra klik en elk extra veld kost aanmeldingen. Een veelgebruikte aanpak is het Lead Gen Form voor maximaal bereik, en een landingspagina als je het webinar als eerste stap in een langer traject gebruikt.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe schrijf je een advertentie die aanmeldingen oplevert?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Zet de opbrengst voorop, niet het onderwerp. Mensen melden zich niet aan voor een webinar, ze melden zich aan voor wat ze eruit halen. Maak dus meteen duidelijk wat de bezoeker straks kan, weet of oplost. Een datum en een belofte van praktische inzichten doen vaak meer dan een mooie omschrijving van het thema.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Houd de tekst kort en spreek je doelgroep direct aan op hun situatie. Een sterk beeld helpt, want de advertentie moet opvallen in een drukke feed. We zien bij adverteerders dat juist de eerste regel en het beeld het verschil maken tussen wegscrollen en aanmelden.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoeveel budget en tijd heb je nodig?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Reken op een hogere kosten per aanmelding dan je op andere kanalen gewend bent, simpelweg omdat LinkedIn duurder is per klik. Begin met een budget dat genoeg vertoningen oplevert om iets te leren, en geef de campagne een paar dagen rust voor je oordeelt. In die leerfase zoekt het algoritme uit bij wie je advertentie aanslaat.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Start je campagne ruim voor de datum van je webinar. Twee tot drie weken aanlooptijd geeft je de ruimte om bij te sturen en om aanmeldingen op te bouwen zonder op het laatste moment je budget op te jagen. Te laat starten betekent vaak duur inkopen onder tijdsdruk.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe krijg je aangemelde mensen ook echt aan tafel?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Tussen aanmelding en webinar valt altijd een deel af. Dat hoort erbij, maar je kunt het flink beperken met goede herinneringen. Stuur een bevestiging direct na de aanmelding, een mail een dag van tevoren en een laatste reminder vlak voor aanvang. Hoe verser je webinar in iemands hoofd zit, hoe groter de kans dat hij echt komt.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Plan je webinar ook niet te ver vooruit. Hoe langer de periode tussen aanmelding en uitzending, hoe meer mensen afhaken of het vergeten. Een opname achteraf naar de aanmelders sturen vangt bovendien iedereen op die er niet bij kon zijn, zodat je aanmeldingen niet verloren gaan.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Welke fouten kosten je aanmeldingen?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De grootste lekkage is een vaag aanbod. Als niet meteen duidelijk is wat de bezoeker leert en waarom dat de moeite waard is, klikt niemand. Een te brede doelgroep is de tweede fout: dan betaal je de hoofdprijs voor mensen voor wie het webinar niet relevant is.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Ook een te hoge drempel kost je aanmeldingen. Elk extra veld op je formulier en elke extra klik laat mensen afhaken. En vergeet de opvolging niet. Een aanmelding zonder reminders en zonder vervolgstap is een gemiste kans, want het echte doel ligt vaak ná het webinar. Of je dit zelf doet of laat doen, weeg je af in onze blog over <Link to="/blogs/social-ads/linkedin-ads-uitbesteden-b2b-resultaten" className="text-accent hover:underline">LinkedIn Ads uitbesteden</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Waar begin je deze week?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Schrijf eerst op wat de bezoeker concreet uit je webinar haalt en voor welke functie en sector dat geldt. Bouw daaromheen één scherpe doelgroep en kies een aanmeldvorm met een lage drempel. Zet je advertentie zo op dat de opbrengst meteen duidelijk is, en start ruim voor de datum zodat je rustig kunt bijsturen.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Webinaraanmeldingen via LinkedIn draaien om de juiste mensen bereiken en aanmelden makkelijk maken. Met een scherpe doelgroep, een helder aanbod en goede reminders werkt elke euro harder. Benieuwd hoeveel aanmeldingen jouw volgende webinar kan halen? Plan een gesprek via empowers.nl/contact.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Veelgestelde vragen</h2>
                    </div>

                    <section className="mt-4">
                        <div className="space-y-6 not-prose">
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Werkt LinkedIn goed om webinaraanmeldingen te krijgen?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Ja, voor een zakelijk webinar is LinkedIn vaak het sterkste kanaal. Je kunt richten op functie en sector, dus je bereikt precies de professionals voor wie je onderwerp relevant is. Je betaalt op LinkedIn meer per klik dan op andere kanalen, maar de aanmeldingen zijn doorgaans van hogere kwaliteit, omdat je de juiste beslissers aanspreekt in plaats van een breed publiek.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Welk campagnedoel kies je voor een webinar op LinkedIn?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Voor aanmeldingen kies je meestal het doel leads of websiteverkeer. Met het leaddoel gebruik je een Lead Gen Form binnen LinkedIn zelf, zodat mensen zich aanmelden zonder de app te verlaten. Wil je dat ze op je eigen landingspagina terechtkomen, dan kies je websiteverkeer. Welk doel het beste werkt, hangt af van of je liever volume of meer context per aanmelding wilt.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat is een Lead Gen Form en waarom helpt het bij webinars?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Een Lead Gen Form is een aanmeldformulier dat binnen LinkedIn opent en alvast is ingevuld met de gegevens uit iemands profiel. Daardoor hoeft iemand alleen te bevestigen in plaats van alles te typen. Die lage drempel levert vaak meer aanmeldingen op dan een losse landingspagina, omdat er minder stappen tussen de klik en de aanmelding zitten.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoeveel budget heb je nodig voor LinkedIn-webinarads?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Dat hangt af van je doelgroep en je doel, maar reken op een hogere kosten per aanmelding dan op andere kanalen, omdat LinkedIn duur is per klik. Begin met een budget dat genoeg vertoningen oplevert om iets te leren en laat de campagne een paar dagen draaien. Daarna stuur je bij op basis van de werkelijke kosten per aanmelding.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoe zorg je dat aangemelde mensen ook echt komen opdagen?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Tussen aanmelding en webinar valt altijd een deel af. Je beperkt dat met duidelijke herinneringen: een bevestiging direct na de aanmelding, een mail een dag van tevoren en een laatste reminder vlak voor aanvang. Plan je webinar bij voorkeur niet te ver vooruit, want hoe langer de periode tussen aanmelding en uitzending, hoe meer mensen afhaken.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Welke fout kost de meeste webinaraanmeldingen?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Een vaag aanbod is de grootste lekkage. Als uit je advertentie niet meteen blijkt wat de bezoeker leert en waarom dat de moeite waard is, klikt niemand. Zet daarom de concrete opbrengst van het webinar centraal, niet alleen het onderwerp. Een te brede doelgroep is de tweede grote fout, want dan betaal je voor mensen voor wie het webinar niet relevant is.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="mt-16 pt-12 border-t border-primary/10">
                        <h3 className="text-xl font-bold text-primary mb-6">Lees ook</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <Link to="/blogs/social-ads/linkedin-algoritme-advertenties-uitleg" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Het LinkedIn algoritme</h3>
                                <p className="text-primary/60 text-sm">Zo kiest de veiling welke ad wint.</p>
                            </Link>
                            <Link to="/blogs/social-ads/linkedin-ads-targeting-beslissers-bereiken" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">LinkedIn-targeting</h3>
                                <p className="text-primary/60 text-sm">Bereik precies de juiste beslissers.</p>
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
                    <h2 className="relative z-10 font-drama italic text-background text-3xl sm:text-4xl md:text-5xl mb-6">Vol webinar, scherpe aanmeldingen</h2>
                    <p className="relative z-10 font-sans text-background/70 text-lg mb-10 max-w-xl mx-auto">We bouwen LinkedIn-campagnes die de juiste professionals naar je webinar trekken, zonder budget te verspillen. Benieuwd hoeveel aanmeldingen jouw volgende sessie kan halen?</p>
                    <Link to="/contact" className="relative z-10 btn-magnetic inline-flex items-center justify-center bg-accent text-background font-sans font-bold text-lg px-10 py-4 rounded-[2rem] hover:bg-accent/90 transition-colors">Neem contact op</Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
