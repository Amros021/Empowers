import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ChevronRight, User } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function BlogPostLinkedinRetargetingCampagneOpzetten() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen selection:bg-accent/30 selection:text-dark flex flex-col bg-background">
            <Helmet>
                <title>LinkedIn retargeting campagne opzetten: van bezoeker naar lead | Empowers</title>
                <meta name="description" content="Een LinkedIn retargeting campagne benadert mensen die je al kennen. Zo zet je hem op en maak je van websitebezoekers en kijkers echte leads." />
                <link rel="canonical" href="https://www.empowers.nl/blogs/social-ads/linkedin-retargeting-campagne-opzetten" />
                <meta property="og:title" content="LinkedIn retargeting campagne opzetten: van bezoeker naar lead" />
                <meta property="og:description" content="Een LinkedIn retargeting campagne benadert mensen die je al kennen. Zo zet je hem op en maak je van bezoekers en kijkers echte leads." />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://www.empowers.nl/blogs/social-ads/linkedin-retargeting-campagne-opzetten" />
                <meta property="og:image" content="https://www.empowers.nl/images/blogs/linkedin-retargeting-campagne-opzetten.jpg" />
                <meta property="article:published_time" content="2026-07-10T10:00:00+02:00" />
                <meta property="article:author" content="Empowers" />
                <meta property="article:section" content="Social Ads" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="LinkedIn retargeting campagne opzetten: van bezoeker naar lead" />
                <meta name="twitter:description" content="Een LinkedIn retargeting campagne benadert mensen die je al kennen. Zo zet je hem op en maak je van bezoekers en kijkers echte leads." />

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@graph": [
                            {
                                "@type": "Article",
                                "headline": "LinkedIn retargeting campagne opzetten: van bezoeker naar lead",
                                "description": "Een LinkedIn retargeting campagne benadert mensen die je al kennen. Zo zet je hem op en maak je van websitebezoekers en kijkers echte leads.",
                                "image": "https://www.empowers.nl/images/blogs/linkedin-retargeting-campagne-opzetten.jpg",
                                "datePublished": "2026-07-10T10:00:00+02:00",
                                "dateModified": "2026-07-10T10:00:00+02:00",
                                "author": { "@type": "Organization", "name": "Empowers" },
                                "publisher": {
                                    "@type": "Organization", "name": "Empowers", "url": "https://www.empowers.nl",
                                    "logo": { "@type": "ImageObject", "url": "https://www.empowers.nl/empowers-logo-color.svg" }
                                },
                                "mainEntityOfPage": "https://www.empowers.nl/blogs/social-ads/linkedin-retargeting-campagne-opzetten"
                            },
                            {
                                "@type": "BreadcrumbList",
                                "itemListElement": [
                                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.empowers.nl" },
                                    { "@type": "ListItem", "position": 2, "name": "Blogs", "item": "https://www.empowers.nl/blogs" },
                                    { "@type": "ListItem", "position": 3, "name": "Social Ads", "item": "https://www.empowers.nl/blogs/social-ads" },
                                    { "@type": "ListItem", "position": 4, "name": "LinkedIn retargeting campagne opzetten", "item": "https://www.empowers.nl/blogs/social-ads/linkedin-retargeting-campagne-opzetten" }
                                ]
                            },
                            {
                                "@type": "FAQPage",
                                "mainEntity": [
                                    {
                                        "@type": "Question",
                                        "name": "Wat is retargeting op LinkedIn?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Retargeting betekent dat je advertenties toont aan mensen die je al kennen. Denk aan bezoekers van je website, mensen die een video bekeken of die met een eerdere advertentie hebben gereageerd. Op LinkedIn bouw je daarvan een doelgroep op, een matched audience, en benadert die opnieuw. Omdat deze mensen je al eerder zagen, is de stap naar een aanvraag of aanmelding vaak een stuk kleiner."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Hoe stel je retargeting in op LinkedIn?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Je begint met de Insight Tag, een stukje code op je website dat bezoekers herkent. Daarnaast kun je doelgroepen bouwen uit mensen die je video's bekeken, je bedrijfspagina bezochten of een formulier openden. Die doelgroepen kies je vervolgens als targeting in een campagne. Het kost even tijd voordat een doelgroep groot genoeg is om op te adverteren."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Wat is de Insight Tag van LinkedIn?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "De Insight Tag is een stukje code dat je op je website plaatst. Het herkent welke LinkedIn-leden je site bezoeken, zodat je daar een retargeting-doelgroep van kunt maken. Daarnaast meet de tag conversies, zodat je ziet welke campagnes echt aanvragen opleveren. Zonder die tag kun je websitebezoekers niet opnieuw benaderen via LinkedIn."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Hoe groot moet een retargeting-doelgroep zijn?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "LinkedIn hanteert een minimumomvang voordat een doelgroep mag draaien, zodat losse personen niet herleidbaar zijn. Een verse website met weinig bezoek heeft daardoor tijd nodig om een bruikbare doelgroep op te bouwen. Heb je weinig verkeer, dan kun je de bezoekersperiode verlengen, bijvoorbeeld iedereen van de afgelopen maanden, zodat de groep groot genoeg wordt om op te adverteren."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Welke boodschap gebruik je bij retargeting?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Een andere dan in je eerste advertentie. Deze mensen kennen je al, dus herhaal niet dezelfde introductie. Speel in op de volgende stap: een concreet aanbod, een klantverhaal of een uitnodiging voor een gesprek. Sluit ook bestaande klanten en mensen die al converteerden uit, zodat je niet betaalt om mensen te bereiken die de stap al hebben gezet."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Werkt retargeting ook zonder veel websiteverkeer?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Ja, want je hoeft niet alleen op websitebezoekers te retargeten. Op LinkedIn kun je ook doelgroepen bouwen uit mensen die je video's bekeken of die je advertenties zagen. Die groepen vul je vanuit je advertenties zelf, zonder dat er veel verkeer op je site nodig is. Zo bouw je toch een warme doelgroep op om gericht te benaderen."
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
                        <span className="text-primary truncate">LinkedIn retargeting campagne opzetten</span>
                    </nav>

                    <header className="mb-16">
                        <div className="inline-block px-3 py-1 bg-accent/10 text-accent font-mono text-xs uppercase tracking-widest rounded-full mb-6">
                            Social Ads
                        </div>
                        <h1 className="font-sans font-bold text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight mb-8">
                            LinkedIn retargeting campagne opzetten: van bezoeker naar lead
                        </h1>

                        <div className="flex flex-wrap items-center gap-6 text-sm font-sans text-primary/60 border-y border-primary/10 py-6">
                            <div className="flex items-center gap-2"><User className="w-4 h-4" /><span>Empowers Redactie</span></div>
                            <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>10 juli 2026</span></div>
                            <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>8 minuten leestijd</span></div>
                        </div>
                    </header>

                    <figure className="w-full h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden mb-16 relative bg-primary">
                        <div className="absolute inset-0 bg-[url('/images/blogs/linkedin-retargeting-campagne-opzetten.jpg')] bg-cover bg-center opacity-40 mix-blend-overlay" style={{backgroundImage: "url('/images/blogs/linkedin-retargeting-campagne-opzetten.jpg')"}}></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </figure>

                    <div className="prose prose-lg max-w-none prose-headings:text-primary prose-headings:font-bold prose-a:text-accent prose-a:underline hover:prose-a:text-accent/80">
                        <p className="text-xl leading-relaxed text-primary/80 font-medium mb-6">
                            Een LinkedIn retargeting campagne benadert mensen die je al kennen: websitebezoekers, videokijkers en mensen die eerder op je advertenties reageerden. Je plaatst de Insight Tag op je site, bouwt daar een doelgroep van en spreekt die opnieuw aan met een vervolgaanbod. Omdat deze mensen je al zagen, is de stap naar een aanvraag een stuk kleiner dan bij koud bereik.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat is retargeting op LinkedIn?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Retargeting betekent dat je advertenties toont aan mensen die al een keer met je in aanraking kwamen. Dat kan iemand zijn die je website bezocht, een video bekeek of op een eerdere advertentie reageerde. Je verzamelt die mensen in een doelgroep, op LinkedIn een matched audience genoemd, en benadert ze opnieuw.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De meeste mensen kopen of vragen niets aan bij het eerste contact. Ze kijken, denken erover na en gaan verder. Retargeting houdt je in beeld bij precies die groep, zodat je top of mind blijft tot het moment dat ze er wel klaar voor zijn. Dat maakt het een van de meest rendabele vormen van adverteren.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat heb je nodig om te starten?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De basis is de Insight Tag, een stukje code dat je op je website plaatst. Die herkent welke LinkedIn-leden je site bezoeken en meet meteen je conversies, zodat je ziet welke campagnes echt aanvragen opleveren. Zonder die tag kun je websitebezoekers niet opnieuw benaderen, dus dit is stap één.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Daarnaast kun je doelgroepen bouwen uit gedrag op LinkedIn zelf. Denk aan mensen die een bepaald percentage van je video bekeken, je bedrijfspagina bezochten of een aanmeldformulier openden. Die groepen vullen zich vanuit je eigen advertenties, ook als je weinig websiteverkeer hebt.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe zet je de campagne stap voor stap op?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Begin met het plaatsen van de Insight Tag en wacht tot je doelgroep groeit. LinkedIn hanteert een minimumomvang voordat een doelgroep mag draaien, dus een verse site heeft even tijd nodig. Heb je weinig verkeer, verleng dan de periode die je meeneemt, bijvoorbeeld iedereen van de afgelopen maanden, zodat de groep groot genoeg wordt.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Maak daarna een aparte campagne voor je warme doelgroep en geef die een eigen boodschap en budget. Houd je retargeting gescheiden van je campagnes voor koud bereik. Zo zie je precies wat je warme publiek oplevert en kun je er apart op bijsturen, in plaats van alles op één hoop te gooien.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Welke boodschap werkt bij retargeting?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Niet dezelfde als in je eerste advertentie. Deze mensen kennen je al, dus een herhaalde introductie voelt als stilstand. Speel in op de volgende stap. Een concreet aanbod, een klantverhaal of een uitnodiging voor een gesprek past beter bij iemand die je al een keer zag.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Pas je boodschap aan op waar iemand vandaan komt. Wie alleen je homepage zag, staat verder weg dan wie je prijspagina bekeek. We zien bij adverteerders dat een vervolgboodschap die aansluit op het eerdere bezoek duidelijk meer aanvragen oplevert dan dezelfde advertentie nog een keer tonen.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Welke fouten maken retargeting duur of irritant?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De eerste fout is vergeten uit te sluiten. Als je bestaande klanten en mensen die al converteerden niet uitsluit, betaal je om mensen te bereiken die de stap allang hebben gezet. De tweede fout is dezelfde advertentie te lang en te vaak tonen, waardoor je warme publiek je gaat negeren. Hoe je dat voorkomt, lees je in onze blog over <Link to="/blogs/social-ads/linkedin-ads-frequentiecap-advertentiemoeheid" className="text-accent hover:underline">frequentiecaps en advertentiemoeheid</Link>.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een derde valkuil is je hele publiek in één doelgroep gooien. Iemand die je prijspagina las, heeft een andere boodschap nodig dan iemand die kort op je blog landde. Door te splitsen op gedrag spreek je elke groep gerichter aan. Hoe het LinkedIn algoritme die keuzes meeweegt, lees je in onze blog over <Link to="/blogs/social-ads/linkedin-algoritme-advertenties-uitleg" className="text-accent hover:underline">het LinkedIn algoritme voor advertenties</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Waar begin je deze week?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Controleer eerst of de Insight Tag op je website staat en goed meet. Bouw daarna één warme doelgroep van je recente bezoekers en sluit bestaande klanten uit. Geef die groep een vervolgboodschap met een duidelijke volgende stap en zet er een apart budget op, los van je koude campagnes.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Retargeting op LinkedIn draait om mensen die je al kennen het laatste zetje geven. Met de Insight Tag, een gesplitste doelgroep en een scherpe vervolgboodschap haal je meer leads uit hetzelfde verkeer. Benieuwd hoeveel bezoekers jij nu laat lopen? Plan een gesprek via empowers.nl/contact.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Veelgestelde vragen</h2>
                    </div>

                    <section className="mt-4">
                        <div className="space-y-6 not-prose">
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat is retargeting op LinkedIn?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Retargeting betekent dat je advertenties toont aan mensen die je al kennen. Denk aan bezoekers van je website, mensen die een video bekeken of die met een eerdere advertentie hebben gereageerd. Op LinkedIn bouw je daarvan een doelgroep op, een matched audience, en benadert die opnieuw. Omdat deze mensen je al eerder zagen, is de stap naar een aanvraag of aanmelding vaak een stuk kleiner.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoe stel je retargeting in op LinkedIn?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Je begint met de Insight Tag, een stukje code op je website dat bezoekers herkent. Daarnaast kun je doelgroepen bouwen uit mensen die je video's bekeken, je bedrijfspagina bezochten of een formulier openden. Die doelgroepen kies je vervolgens als targeting in een campagne. Het kost even tijd voordat een doelgroep groot genoeg is om op te adverteren.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat is de Insight Tag van LinkedIn?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    De Insight Tag is een stukje code dat je op je website plaatst. Het herkent welke LinkedIn-leden je site bezoeken, zodat je daar een retargeting-doelgroep van kunt maken. Daarnaast meet de tag conversies, zodat je ziet welke campagnes echt aanvragen opleveren. Zonder die tag kun je websitebezoekers niet opnieuw benaderen via LinkedIn.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoe groot moet een retargeting-doelgroep zijn?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    LinkedIn hanteert een minimumomvang voordat een doelgroep mag draaien, zodat losse personen niet herleidbaar zijn. Een verse website met weinig bezoek heeft daardoor tijd nodig om een bruikbare doelgroep op te bouwen. Heb je weinig verkeer, dan kun je de bezoekersperiode verlengen, bijvoorbeeld iedereen van de afgelopen maanden, zodat de groep groot genoeg wordt om op te adverteren.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Welke boodschap gebruik je bij retargeting?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Een andere dan in je eerste advertentie. Deze mensen kennen je al, dus herhaal niet dezelfde introductie. Speel in op de volgende stap: een concreet aanbod, een klantverhaal of een uitnodiging voor een gesprek. Sluit ook bestaande klanten en mensen die al converteerden uit, zodat je niet betaalt om mensen te bereiken die de stap al hebben gezet.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Werkt retargeting ook zonder veel websiteverkeer?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Ja, want je hoeft niet alleen op websitebezoekers te retargeten. Op LinkedIn kun je ook doelgroepen bouwen uit mensen die je video's bekeken of die je advertenties zagen. Die groepen vul je vanuit je advertenties zelf, zonder dat er veel verkeer op je site nodig is. Zo bouw je toch een warme doelgroep op om gericht te benaderen.
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
                            <Link to="/blogs/social-ads/linkedin-ads-frequentiecap-advertentiemoeheid" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Frequentiecaps</h3>
                                <p className="text-primary/60 text-sm">Voorkom advertentiemoeheid bij je publiek.</p>
                            </Link>
                            <Link to="/blogs/social-ads" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Social Ads blogs</h3>
                                <p className="text-primary/60 text-sm">Meer uit Meta, Instagram en LinkedIn halen.</p>
                            </Link>
                        </div>
                    </section>
                </div>
            </article>

            <section className="w-full pb-32 px-6">
                <div className="max-w-4xl mx-auto bg-primary rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
                    <h2 className="relative z-10 font-drama italic text-background text-3xl sm:text-4xl md:text-5xl mb-6">Laat geen bezoeker meer lopen</h2>
                    <p className="relative z-10 font-sans text-background/70 text-lg mb-10 max-w-xl mx-auto">We zetten LinkedIn-retargeting op die je warme publiek het laatste zetje geeft, zodat meer bezoekers leads worden. Benieuwd hoeveel je nu laat liggen?</p>
                    <Link to="/contact" className="relative z-10 btn-magnetic inline-flex items-center justify-center bg-accent text-background font-sans font-bold text-lg px-10 py-4 rounded-[2rem] hover:bg-accent/90 transition-colors">Neem contact op</Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
