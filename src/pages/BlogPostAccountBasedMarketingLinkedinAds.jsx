import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ChevronRight, User } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function BlogPostAccountBasedMarketingLinkedinAds() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen selection:bg-accent/30 selection:text-dark flex flex-col bg-background">
            <Helmet>
                <title>Account-based marketing via LinkedIn Ads: zo pak je het aan | Empowers</title>
                <meta name="description" content="Account-based marketing via LinkedIn Ads richt je advertenties op een korte lijst droomklanten. Zo bouw je je accountlijst op en bereik je de juiste beslissers." />
                <link rel="canonical" href="https://www.empowers.nl/blogs/social-ads/account-based-marketing-linkedin-ads" />
                <meta property="og:title" content="Account-based marketing via LinkedIn Ads: zo pak je het aan" />
                <meta property="og:description" content="Richt je advertenties op een korte lijst droomklanten. Zo pak je account-based marketing via LinkedIn Ads aan." />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://www.empowers.nl/blogs/social-ads/account-based-marketing-linkedin-ads" />
                <meta property="og:image" content="https://www.empowers.nl/images/blogs/account-based-marketing-linkedin-ads.jpg" />
                <meta property="article:published_time" content="2026-07-06T10:00:00+02:00" />
                <meta property="article:author" content="Empowers" />
                <meta property="article:section" content="Social Ads" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Account-based marketing via LinkedIn Ads: zo pak je het aan" />
                <meta name="twitter:description" content="Richt je advertenties op een korte lijst droomklanten. Zo pak je account-based marketing via LinkedIn Ads aan." />

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@graph": [
                            {
                                "@type": "Article",
                                "headline": "Account-based marketing via LinkedIn Ads: zo pak je het aan",
                                "description": "Account-based marketing via LinkedIn Ads richt je advertenties op een korte lijst droomklanten. Zo bouw je je accountlijst op en bereik je de juiste beslissers.",
                                "image": "https://www.empowers.nl/images/blogs/account-based-marketing-linkedin-ads.jpg",
                                "datePublished": "2026-07-06T10:00:00+02:00",
                                "dateModified": "2026-07-06T10:00:00+02:00",
                                "author": { "@type": "Organization", "name": "Empowers" },
                                "publisher": {
                                    "@type": "Organization", "name": "Empowers", "url": "https://www.empowers.nl",
                                    "logo": { "@type": "ImageObject", "url": "https://www.empowers.nl/empowers-logo-color.svg" }
                                },
                                "mainEntityOfPage": "https://www.empowers.nl/blogs/social-ads/account-based-marketing-linkedin-ads"
                            },
                            {
                                "@type": "BreadcrumbList",
                                "itemListElement": [
                                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.empowers.nl" },
                                    { "@type": "ListItem", "position": 2, "name": "Blogs", "item": "https://www.empowers.nl/blogs" },
                                    { "@type": "ListItem", "position": 3, "name": "Social Ads", "item": "https://www.empowers.nl/blogs/social-ads" },
                                    { "@type": "ListItem", "position": 4, "name": "Account-based marketing via LinkedIn Ads", "item": "https://www.empowers.nl/blogs/social-ads/account-based-marketing-linkedin-ads" }
                                ]
                            },
                            {
                                "@type": "FAQPage",
                                "mainEntity": [
                                    {
                                        "@type": "Question",
                                        "name": "Wat is account-based marketing op LinkedIn?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Account-based marketing draait je aanpak om: in plaats van een brede doelgroep kies je vooraf een korte lijst bedrijven die je wilt binnenhalen. Je advertenties richten zich alleen op de beslissers binnen die bedrijven. Op LinkedIn kan dat, omdat je kunt targeten op specifieke bedrijfsnamen en op de functies van de mensen die over de aankoop gaan."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Voor wie werkt account-based marketing het best?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Voor B2B-bedrijven met een hoge klantwaarde en een beperkt aantal ideale klanten. Verkoop je dure software of diensten waar één klant veel oplevert, dan loont het om gericht een handvol bedrijven te bewerken. Bij een breed product met veel kleine klanten is een brede campagne meestal logischer dan ABM."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Hoe stel je een accountlijst samen voor ABM?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Begin bij je beste bestaande klanten en zoek bedrijven die daarop lijken qua sector en omvang, en hun behoefte. Betrek je salesteam, want zij weten welke accounts kansrijk zijn. Houd de lijst beperkt zodat je per bedrijf genoeg aandacht en budget overhoudt. Een scherpe lijst van enkele tientallen bedrijven werkt beter dan een vage lijst van honderden."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Hoeveel budget heb je nodig voor ABM op LinkedIn?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Minder bereik betekent niet automatisch minder budget. Je richt je op een kleine groep, maar die mensen zijn duur om te bereiken op LinkedIn en je wilt ze vaker zien. Reken op genoeg budget om je beslissers meerdere keren te bereiken over een langere periode, want ABM is een kwestie van volhouden, niet van één keer langskomen."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Wat is het verschil tussen ABM en gewone LinkedIn-targeting?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Bij gewone targeting kies je kenmerken, zoals functie en sector, en bereik je iedereen die daaraan voldoet. Bij ABM draai je het om en bepaal je eerst welke bedrijven je wilt, en pas daarna wie daarbinnen je doelgroep is. ABM is smaller en persoonlijker, gewone targeting is breder en schaalbaarder."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Werkt ABM zonder samenwerking met sales?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Nauwelijks. ABM werkt het best als marketing de beslissers warm maakt en sales op het juiste moment overneemt. Zonder afstemming val je tussen wal en schip: je advertenties bereiken mensen die niet worden opgevolgd, of sales benadert bedrijven die nog nooit van je hoorden. De kracht zit in de samenwerking tussen beide."
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
                        <span className="text-primary truncate">Account-based marketing via LinkedIn Ads</span>
                    </nav>

                    <header className="mb-16">
                        <div className="inline-block px-3 py-1 bg-accent/10 text-accent font-mono text-xs uppercase tracking-widest rounded-full mb-6">
                            Social Ads
                        </div>
                        <h1 className="font-sans font-bold text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight mb-8">
                            Account-based marketing via LinkedIn Ads: zo pak je het aan
                        </h1>

                        <div className="flex flex-wrap items-center gap-6 text-sm font-sans text-primary/60 border-y border-primary/10 py-6">
                            <div className="flex items-center gap-2"><User className="w-4 h-4" /><span>Empowers Redactie</span></div>
                            <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>6 juli 2026</span></div>
                            <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>9 minuten leestijd</span></div>
                        </div>
                    </header>

                    <figure className="w-full h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden mb-16 relative bg-primary">
                        <div className="absolute inset-0 bg-[url('/images/blogs/account-based-marketing-linkedin-ads.jpg')] bg-cover bg-center opacity-40 mix-blend-overlay" style={{backgroundImage: "url('/images/blogs/account-based-marketing-linkedin-ads.jpg')"}}></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </figure>

                    <div className="prose prose-lg max-w-none prose-headings:text-primary prose-headings:font-bold prose-a:text-accent prose-a:underline hover:prose-a:text-accent/80">
                        <p className="text-xl leading-relaxed text-primary/80 font-medium mb-6">
                            Account-based marketing via LinkedIn Ads draait je aanpak om. In plaats van een brede doelgroep kies je vooraf een korte lijst bedrijven die je echt wilt binnenhalen, en richt je je advertenties alleen op de beslissers binnen die bedrijven. Op LinkedIn kan dat, omdat je op bedrijfsnaam en functie kunt targeten. Het werkt vooral als één klant veel waard is en je het slim afstemt met je salesteam.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat is account-based marketing precies?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Het is marketing die begint bij de klant die je wilt, niet bij een doelgroep die je hoopt te raken. Je stelt eerst een lijst samen van bedrijven die perfect bij je passen, je droomklanten. Pas daarna bepaal je wie binnen die bedrijven de beslissers zijn en hoe je ze bereikt. Smal en gericht.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Bij gewone advertenties werkt het andersom. Je kiest kenmerken en bereikt iedereen die daaraan voldoet, in de hoop dat er kopers tussen zitten. ABM keert die logica om: jij bepaalt de bedrijven, en alle aandacht gaat naar het warm maken van precies die accounts. Deze aanpak past goed naast de bredere uitleg in onze blog over <Link to="/blogs/social-ads/linkedin-abm-account-based-marketing" className="text-accent hover:underline">account-based marketing op LinkedIn</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Voor wie werkt ABM het best?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            ABM is sterk voor B2B-bedrijven met een hoge klantwaarde en een beperkt aantal ideale klanten. Verkoop je dure software of diensten waar één klant veel oplevert, dan loont het om een handvol bedrijven gericht te bewerken. De tijd en het budget die je in een paar accounts steekt, verdienen zich terug zodra er één klant wordt.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Het is minder geschikt als je een breed product hebt met veel kleine klanten. Dan kost ABM te veel moeite per klant en haal je meer uit een brede campagne. De vuistregel is simpel: hoe groter de waarde van één klant en hoe duidelijker je weet wie je wilt, hoe beter ABM bij je past.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe bouw je je accountlijst op?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Begin bij je beste bestaande klanten. Kijk wat ze gemeen hebben qua sector en omvang, en waarom ze bij je kochten, en zoek bedrijven die daarop lijken. Betrek je salesteam, want zij weten als geen ander welke bedrijven kansrijk zijn en waar al een ingang ligt.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Houd de lijst bewust kort. Een scherpe lijst van enkele tientallen bedrijven werkt beter dan een vage lijst van honderden, omdat je per bedrijf genoeg budget en aandacht overhoudt. We merken in de praktijk dat een te lange lijst de grootste valkuil is: dan verwatert ABM tot gewone brede targeting en verlies je het hele voordeel. Op LinkedIn upload je die bedrijven daarna als doelgroep en target je de juiste functies daarbinnen, net als bij <Link to="/blogs/social-ads/linkedin-ads-it-bedrijven-software-leads" className="text-accent hover:underline">LinkedIn Ads voor IT- en softwarebedrijven</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Welke advertenties gebruik je voor ABM?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Persoonlijke en relevante content werkt beter dan een algemene verkoopboodschap. Omdat je precies weet welke bedrijven je bereikt, kun je inspelen op hun situatie. Een advertentie die de uitdaging van hun sector benoemt, raakt harder dan een vrijblijvende productpitch. Je praat tegen een bekende, geen vreemde.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Wissel daarbij af in wat je laat zien. Begin met content die vertrouwen opbouwt, zoals een herkenbaar inzicht of een case uit hun branche, en bied pas later een demo of gesprek aan. Voor de mensen die al eerder reageerden, zet je gerichte <Link to="/blogs/social-ads/linkedin-ads-retargeting-bereik-warme" className="text-accent hover:underline">LinkedIn-retargeting</Link> in om in beeld te blijven. Zo bouw je laag voor laag aan de relatie met elk account.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoeveel budget en tijd kost ABM?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Minder bereik betekent niet automatisch minder budget. Je richt je op een kleine groep, maar die mensen zijn duur om te bereiken op LinkedIn en je wilt ze vaker zien dan één keer. Reken daarom op genoeg budget om je beslissers meerdere keren te bereiken over een langere periode.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            ABM is een kwestie van volhouden. Een beslissing in B2B duurt vaak maanden, zeker bij grote bedrijven met meerdere mensen die meebeslissen. Verwacht dus geen aanvragen in week één. Het doel is in beeld blijven bij de juiste mensen, zodat je er staat op het moment dat ze klaar zijn om te kiezen. Hoe je dat opvolgt en meet, lees je in onze blog over <Link to="/blogs/social-ads/linkedin-ads-rapportage-metrics-echt" className="text-accent hover:underline">welke LinkedIn-cijfers er echt toe doen</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Welke fouten maken bedrijven met ABM?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De grootste fout is een te lange lijst. Hoe meer bedrijven je toevoegt, hoe minder gericht en persoonlijk je aanpak wordt, tot je weer gewoon breed adverteert. Houd het klein en bewust. Een tweede fout is alleen om de verkoop vragen, terwijl je doelgroep je nog niet kent en eerst vertrouwen nodig heeft.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De grootste valkuil is marketing en sales los van elkaar laten werken. ABM werkt alleen als marketing de accounts warm maakt en sales op het juiste moment overneemt. Loopt dat niet gelijk, dan bereik je mensen die niemand opvolgt, of belt sales bedrijven die nog nooit van je hoorden. De winst zit in de afstemming tussen beide teams.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Waar begin je?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Stel samen met sales een korte lijst droomklanten op en spreek af wie wanneer welke account oppakt. Bouw daaromheen een paar advertenties die inspelen op hun situatie en zet die in op de beslissers binnen die bedrijven. Begin klein, leer wat aanslaat en breid pas uit als je aanpak werkt.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Account-based marketing draait niet om zo veel mogelijk mensen bereiken, maar om de juiste bedrijven gericht binnenhalen. Met een scherpe lijst, persoonlijke content en goede afstemming met sales wordt LinkedIn een sterke motor voor je grootste kansen. Benieuwd welke droomklanten voor jou haalbaar zijn? Plan een gesprek via empowers.nl/contact.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Veelgestelde vragen</h2>
                    </div>

                    <section className="mt-4">
                        <div className="space-y-6 not-prose">
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat is account-based marketing op LinkedIn?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Account-based marketing draait je aanpak om: in plaats van een brede doelgroep kies je vooraf een korte lijst bedrijven die je wilt binnenhalen. Je advertenties richten zich alleen op de beslissers binnen die bedrijven. Op LinkedIn kan dat, omdat je kunt targeten op specifieke bedrijfsnamen en op de functies van de mensen die over de aankoop gaan.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Voor wie werkt account-based marketing het best?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Voor B2B-bedrijven met een hoge klantwaarde en een beperkt aantal ideale klanten. Verkoop je dure software of diensten waar één klant veel oplevert, dan loont het om gericht een handvol bedrijven te bewerken. Bij een breed product met veel kleine klanten is een brede campagne meestal logischer dan ABM.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoe stel je een accountlijst samen voor ABM?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Begin bij je beste bestaande klanten en zoek bedrijven die daarop lijken qua sector en omvang, en hun behoefte. Betrek je salesteam, want zij weten welke accounts kansrijk zijn. Houd de lijst beperkt zodat je per bedrijf genoeg aandacht en budget overhoudt. Een scherpe lijst van enkele tientallen bedrijven werkt beter dan een vage lijst van honderden.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoeveel budget heb je nodig voor ABM op LinkedIn?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Minder bereik betekent niet automatisch minder budget. Je richt je op een kleine groep, maar die mensen zijn duur om te bereiken op LinkedIn en je wilt ze vaker zien. Reken op genoeg budget om je beslissers meerdere keren te bereiken over een langere periode, want ABM is een kwestie van volhouden, niet van één keer langskomen.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat is het verschil tussen ABM en gewone LinkedIn-targeting?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Bij gewone targeting kies je kenmerken, zoals functie en sector, en bereik je iedereen die daaraan voldoet. Bij ABM draai je het om en bepaal je eerst welke bedrijven je wilt, en pas daarna wie daarbinnen je doelgroep is. ABM is smaller en persoonlijker, gewone targeting is breder en schaalbaarder.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Werkt ABM zonder samenwerking met sales?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Nauwelijks. ABM werkt het best als marketing de beslissers warm maakt en sales op het juiste moment overneemt. Zonder afstemming val je tussen wal en schip: je advertenties bereiken mensen die niet worden opgevolgd, of sales benadert bedrijven die nog nooit van je hoorden. De kracht zit in de samenwerking tussen beide.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="mt-16 pt-12 border-t border-primary/10">
                        <h3 className="text-xl font-bold text-primary mb-6">Lees ook</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <Link to="/blogs/social-ads/linkedin-abm-account-based-marketing" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">ABM op LinkedIn</h3>
                                <p className="text-primary/60 text-sm">De basis van account-based marketing uitgelegd.</p>
                            </Link>
                            <Link to="/blogs/social-ads/linkedin-ads-it-bedrijven-software-leads" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">LinkedIn Ads voor IT</h3>
                                <p className="text-primary/60 text-sm">Kwalitatieve B2B-leads voor software.</p>
                            </Link>
                            <Link to="/blogs/social-ads" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Social Ads blogs</h3>
                                <p className="text-primary/60 text-sm">Meer uit Meta, Instagram en TikTok halen.</p>
                            </Link>
                        </div>
                    </section>
                </div>
            </article>

            <section className="w-full pb-32 px-6">
                <div className="max-w-4xl mx-auto bg-primary rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
                    <h2 className="relative z-10 font-drama italic text-background text-3xl sm:text-4xl md:text-5xl mb-6">Haal gericht je droomklanten binnen</h2>
                    <p className="relative z-10 font-sans text-background/70 text-lg mb-10 max-w-xl mx-auto">We bouwen een account-based aanpak die de juiste bedrijven bereikt en samenwerkt met je sales. Benieuwd welke klanten voor jou haalbaar zijn?</p>
                    <Link to="/contact" className="relative z-10 btn-magnetic inline-flex items-center justify-center bg-accent text-background font-sans font-bold text-lg px-10 py-4 rounded-[2rem] hover:bg-accent/90 transition-colors">Neem contact op</Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
