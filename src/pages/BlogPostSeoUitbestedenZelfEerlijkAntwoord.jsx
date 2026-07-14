import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ChevronRight, User } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function BlogPostSeoUitbestedenZelfEerlijkAntwoord() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen selection:bg-accent/30 selection:text-dark flex flex-col bg-background">
            <Helmet>
                <title>SEO uitbesteden of zelf doen? Een eerlijk antwoord | Empowers</title>
                <meta name="description" content="SEO uitbesteden kost 500 tot 2500 euro per maand. Zelf doen bespaart geld maar kost veel tijd. Lees wanneer uitbesteden slim is en wanneer je het beter zelf doet." />
                <link rel="canonical" href="https://www.empowers.nl/blogs/seo/seo-uitbesteden-zelf-eerlijk-antwoord" />
                <meta property="og:title" content="SEO uitbesteden of zelf doen? Een eerlijk antwoord" />
                <meta property="og:description" content="SEO uitbesteden kost 500 tot 2500 euro per maand. Zelf doen bespaart geld maar kost veel tijd. Lees wanneer uitbesteden slim is en wanneer je het beter zelf doet." />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://www.empowers.nl/blogs/seo/seo-uitbesteden-zelf-eerlijk-antwoord" />
                <meta property="og:image" content="https://www.empowers.nl/images/blogs/seo-uitbesteden-zelf-eerlijk-antwoord.jpg" />
                <meta property="article:published_time" content="2026-03-27T00:00:00+01:00" />
                <meta property="article:author" content="Empowers" />
                <meta property="article:section" content="SEO" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="SEO uitbesteden of zelf doen? Een eerlijk antwoord" />
                <meta name="twitter:description" content="SEO uitbesteden kost 500 tot 2500 euro per maand. Zelf doen bespaart geld maar kost veel tijd. Lees wanneer uitbesteden slim is." />

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Article",
                        "headline": "SEO uitbesteden of zelf doen? Een eerlijk antwoord",
                        "description": "SEO uitbesteden kost 500 tot 2500 euro per maand. Zelf doen bespaart geld maar kost veel tijd. Lees wanneer uitbesteden slim is en wanneer je het beter zelf doet.",
                        "image": "https://www.empowers.nl/images/blogs/seo-uitbesteden-zelf-eerlijk-antwoord.jpg",
                        "datePublished": "2026-03-27T00:00:00+01:00",
                        "author": { "@type": "Organization", "name": "Empowers" },
                        "publisher": {
                            "@type": "Organization",
                            "name": "Empowers",
                            "url": "https://www.empowers.nl",
                            "logo": {
                                "@type": "ImageObject",
                                "url": "https://www.empowers.nl/empowers-logo-color.svg"
                            }
                        },
                        "mainEntity": {
                            "@type": "FAQPage",
                            "mainEntity": [
                                {
                                    "@type": "Question",
                                    "name": "Wat kost SEO uitbesteden per maand?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "SEO uitbesteden kost gemiddeld 500 tot 2500 euro per maand. Kleine lokale projecten beginnen rond 500 euro. Landelijke campagnes met linkbuilding en contentcreatie zitten sneller richting 1500 tot 2500 euro. Let op bureaus die onder de 300 euro aanbieden, daar zit zelden serieus werk achter."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Kan ik SEO zelf leren en doen?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Ja, de basis van SEO is te leren. Google zelf biedt gratis cursussen aan. Maar SEO goed uitvoeren kost 10 tot 20 uur per week. De meeste ondernemers hebben die tijd niet naast hun bedrijf. Technische SEO en linkbuilding vragen bovendien specialistische kennis."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Hoe kies ik een goed SEO bureau?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Let op transparantie, meetbare rapportages en eerlijke verwachtingen. Een goed bureau belooft geen nummer 1 posities. Vraag naar referenties, bekijk hun eigen rankings en check of je direct contact hebt met de specialist die jouw project uitvoert."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Hoe lang duurt het voordat SEO resultaat oplevert?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Reken op 3 tot 6 maanden voor eerste resultaten. Serieuze groei in traffic en rankings zie je meestal na 6 tot 12 maanden. Lokale SEO kan sneller werken, soms al na 4 tot 8 weken bij weinig concurrentie."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Is SEO uitbesteden het waard voor een klein bedrijf?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Ja, als je de juiste partner kiest. Een klein bedrijf met een budget van 750 euro per maand kan binnen 6 tot 12 maanden structureel organisch verkeer opbouwen. Dat verkeer kost daarna niets per klik, in tegenstelling tot advertenties."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Wat is het verschil tussen SEO en SEA?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "SEO is organische zichtbaarheid waar je niet per klik betaalt. SEA is betaald adverteren in Google, waar je betaalt per klik. SEO is langzamer maar duurzamer. SEA levert direct verkeer maar stopt zodra je budget op is. De beste strategie combineert beide."
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
                            {
                                "@type": "ListItem",
                                "position": 1,
                                "name": "Home",
                                "item": "https://www.empowers.nl"
                            },
                            {
                                "@type": "ListItem",
                                "position": 2,
                                "name": "Blogs",
                                "item": "https://www.empowers.nl/blogs"
                            },
                            {
                                "@type": "ListItem",
                                "position": 3,
                                "name": "SEO",
                                "item": "https://www.empowers.nl/blogs/seo"
                            },
                            {
                                "@type": "ListItem",
                                "position": 4,
                                "name": "SEO uitbesteden of zelf doen?",
                                "item": "https://www.empowers.nl/blogs/seo/seo-uitbesteden-zelf-eerlijk-antwoord"
                            }
                        ]
                    })}
                </script>
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
                        <span className="text-primary truncate">SEO uitbesteden of zelf doen?</span>
                    </nav>

                    {/* Header */}
                    <header className="mb-16">
                        <div className="inline-block px-3 py-1 bg-accent/10 text-accent font-mono text-xs uppercase tracking-widest rounded-full mb-6">
                            SEO
                        </div>
                        <h1 className="font-sans font-bold text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight mb-8">
                            SEO uitbesteden of zelf doen? Een eerlijk antwoord
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
                                <span>7 minuten leestijd</span>
                            </div>
                        </div>
                    </header>

                    {/* Featured Image */}
                    <figure className="w-full h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden mb-16 relative bg-primary">
                        <div className="absolute inset-0 bg-[url('/images/blogs/seo-uitbesteden-zelf-eerlijk-antwoord.jpg')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </figure>

                    {/* Content */}
                    <div className="prose prose-lg max-w-none prose-headings:text-primary prose-headings:font-bold prose-a:text-accent prose-a:underline hover:prose-a:text-accent/80">
                        <p className="text-xl leading-relaxed text-primary/80 font-medium mb-6">
                            SEO uitbesteden kost gemiddeld 500 tot 2500 euro per maand. Zelf doen bespaart dat bedrag, maar kost je 10 tot 20 uur per week aan tijd die je niet in je bedrijf steekt. De juiste keuze hangt af van je budget, je kennis en hoeveel je bereid bent te leren.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat kost SEO uitbesteden eigenlijk?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De prijzen lopen uiteen. Een lokale SEO campagne begint rond 500 euro per maand. Landelijke campagnes met contentcreatie en linkbuilding zitten tussen 1000 en 2500 euro. Grote bureaus rekenen soms meer, maar duurder is niet automatisch beter.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Bij onze klanten zien we dat een budget van 750 tot 1500 euro per maand voor de meeste MKB-bedrijven genoeg is om serieuze resultaten te behalen. Het gaat niet om het bedrag, het gaat om wat er met dat bedrag gebeurt.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Let op bureaus die SEO aanbieden voor 200 euro per maand. Daar zit zelden meer achter dan een automatisch rapport en een paar meta descriptions. Goed SEO-werk kost tijd van een specialist. Die tijd heeft een eerlijke prijs.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wanneer kun je SEO beter zelf doen?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Zelf doen is een goede optie als je voldoende tijd hebt, bereid bent om te leren en je bedrijf opereert in een niche met weinig concurrentie. Een lokale yogastudio of een ambachtelijke bakker kan met basis-SEO al veel bereiken.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Wat je zelf kunt doen: zoekwoordenonderzoek met gratis tools, goede paginatitels schrijven, je Google Bedrijfsprofiel inrichten en blogartikelen publiceren. Dat zijn de basisstappen die direct verschil maken.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Waar het lastig wordt: technische SEO (sitesnelheid, structured data, crawlbudget), linkbuilding en het structureel bijhouden van rankings en concurrenten. Dat vraagt kennis die je niet in een middag leert.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wanneer loont het om SEO uit te besteden?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Uitbesteden loont zodra je tijd meer waard is dan de kosten van een bureau. Stel: je verdient 100 euro per uur als ondernemer. SEO kost je 15 uur per week. Dat is 1500 euro aan tijd. Een bureau dat hetzelfde doet voor 1000 euro bespaart je dan geld en levert betere resultaten.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            We merken in de praktijk dat bedrijven die SEO uitbesteden gemiddeld 40% sneller resultaten zien dan bedrijven die het zelf proberen. Niet omdat ze slimmer zijn, maar omdat een specialist weet welke stappen prioriteit hebben.
                        </p>

                        <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Je zit in een competitieve markt</h3>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            In branches als juridisch advies, hypotheken, webshops of IT-dienstverlening concurreer je met tientallen bedrijven die al jaren aan SEO werken. Daar red je het niet met basis-kennis. Je hebt iemand nodig die de tactiek kent.
                        </p>

                        <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Je website presteert ondermaats</h3>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Als je website traag laadt, niet goed werkt op mobiel of technische fouten bevat, heb je een specialist nodig. Technische SEO is geen kwestie van een plugin installeren. Het is een vak apart.
                        </p>

                        <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Je wilt structureel groeien</h3>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            SEO is geen eenmalige actie. Het is een doorlopend proces van content maken, links bouwen en je strategie aanscherpen. Als je dat niet elke maand wilt doen, besteed het dan uit aan iemand die dat wel doet.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Waar let je op bij het kiezen van een SEO bureau?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een goed bureau belooft nooit een nummer 1 positie. Google bepaalt de rankings, niet het bureau. Wat een bureau wel kan beloven: structureel werken aan je zichtbaarheid, transparante rapportages en eerlijke communicatie.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Vraag altijd naar referenties. Bekijk de eigen rankings van het bureau. Als een SEO bureau zelf niet vindbaar is in Google, is dat een rode vlag. Check ook of je direct contact hebt met de specialist die jouw project uitvoert. Geen tussenpersonen, geen account managers die zelf niet weten hoe een zoekwoordenonderzoek werkt.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een veelgemaakte fout die we tegenkomen is dat bedrijven kiezen op prijs. Het goedkoopste bureau levert zelden het beste resultaat. Kies op kwaliteit, transparantie en bewezen resultaten.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat levert een goed SEO bureau concreet op?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een specialist levert meer dan alleen hogere rankings. Je krijgt een complete strategie: zoekwoordenonderzoek, technische verbeteringen, contentplanning, linkbuilding en maandelijkse rapportages. Dat bespaart je tientallen uren per maand.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Bij onze klanten zien we dat bedrijven die 12 maanden met een bureau werken gemiddeld 150 tot 300% meer organisch verkeer krijgen. Dat verkeer kost niets per klik. Vergelijk dat met <Link to="/google-ads" className="text-accent hover:underline">Google Ads</Link> waar je elke klik betaalt. SEO bouwt een fundament dat blijft werken.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een webshop die we begeleidden ging van 200 naar 1400 organische bezoekers per maand in 8 maanden. Die bezoekers kwamen via zoektermen met koopintentie. Resultaat: 35% meer omzet zonder extra advertentiebudget.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Kun je SEO deels zelf doen en deels uitbesteden?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Ja, en dat is vaak de slimste aanpak voor MKB-bedrijven met een beperkt budget. Je kunt zelf blogartikelen schrijven en je Google Bedrijfsprofiel bijhouden. De technische kant, linkbuilding en strategie laat je dan aan een specialist over.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Veel van onze klanten werken zo. Ze schrijven zelf 1 tot 2 blogs per maand op basis van ons zoekwoordenonderzoek. Wij zorgen voor de technische basis, de interne linkstructuur en de linkbuilding. Dat houdt de kosten lager en de resultaten hoog.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Wil je weten welke taken jij zelf kunt oppakken? Bekijk onze <Link to="/seo" className="text-accent hover:underline">SEO diensten</Link> en ontdek welk pakket bij jouw situatie past.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe combineer je SEO met andere marketingkanalen?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            SEO werkt het beste als onderdeel van een bredere strategie. Terwijl SEO groeit (3 tot 6 maanden), gebruik je <Link to="/google-ads" className="text-accent hover:underline">Google Ads</Link> voor direct verkeer. Social ads via <Link to="/meta-ads" className="text-accent hover:underline">Meta Ads</Link> of LinkedIn brengen naamsbekendheid. SEO bouwt ondertussen je organische fundament.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            We krijgen deze vraag wekelijks van ondernemers die twijfelen waar ze hun budget aan besteden. Het antwoord: begin met SEO en Google Ads tegelijk. SEO voor de lange termijn, Ads voor direct resultaat. Na 6 tot 12 maanden draai je het budget geleidelijk om.
                        </p>
                    </div>

                    {/* FAQ Section */}
                    <section className="mt-16 pt-12 border-t border-primary/10">
                        <h2 className="text-3xl font-bold text-primary mb-8">Veelgestelde vragen</h2>
                        <div className="space-y-6 not-prose">
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat kost SEO uitbesteden per maand?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    SEO uitbesteden kost gemiddeld 500 tot 2500 euro per maand. Kleine lokale projecten beginnen rond 500 euro. Landelijke campagnes met linkbuilding en contentcreatie zitten sneller richting 1500 tot 2500 euro. Let op bureaus die onder de 300 euro aanbieden, daar zit zelden serieus werk achter.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Kan ik SEO zelf leren en doen?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Ja, de basis van SEO is te leren. Google zelf biedt gratis cursussen aan. Maar SEO goed uitvoeren kost 10 tot 20 uur per week. De meeste ondernemers hebben die tijd niet naast hun bedrijf. Technische SEO en linkbuilding vragen specialistische kennis.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoe kies ik een goed SEO bureau?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Let op transparantie, meetbare rapportages en eerlijke verwachtingen. Een goed bureau belooft geen nummer 1 posities. Vraag naar referenties, bekijk hun eigen rankings en check of je direct contact hebt met de specialist die jouw project uitvoert.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoe lang duurt het voordat SEO resultaat oplevert?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Reken op 3 tot 6 maanden voor eerste resultaten. Serieuze groei in traffic en rankings zie je meestal na 6 tot 12 maanden. Lokale SEO kan sneller werken, soms al na 4 tot 8 weken bij weinig concurrentie.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Is SEO uitbesteden het waard voor een klein bedrijf?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Ja, als je de juiste partner kiest. Een klein bedrijf met een budget van 750 euro per maand kan binnen 6 tot 12 maanden structureel organisch verkeer opbouwen. Dat verkeer kost daarna niets per klik, in tegenstelling tot advertenties.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat is het verschil tussen SEO en SEA?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    SEO is organische zichtbaarheid waar je niet per klik betaalt. SEA is betaald adverteren in Google, waar je betaalt per klik. SEO is langzamer maar duurzamer. SEA levert direct verkeer maar stopt zodra je budget op is. De beste strategie combineert beide.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Related Links */}
                    <section className="mt-16 pt-12 border-t border-primary/10">
                        <h3 className="text-xl font-bold text-primary mb-6">Lees ook</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <Link to="/blogs/seo/lang-duurt-seo-realistische-verwachtingen" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Hoe lang duurt SEO? Realistische verwachtingen</h3>
                                <p className="text-primary/60 text-sm">Reken op 3 tot 6 maanden voor eerste resultaten. Zo versnelt je het.</p>
                            </Link>
                            <Link to="/blogs/seo/technische-seo-checklist-2025-website" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Technische SEO checklist 2026</h3>
                                <p className="text-primary/60 text-sm">Alles wat je website nodig heeft om goed te presteren in Google.</p>
                            </Link>
                            <Link to="/blogs/google-ads/google-ads-uitbesteden-wanneer-zelf" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Google Ads uitbesteden: wanneer doe je het zelf?</h3>
                                <p className="text-primary/60 text-sm">Vergelijkbare afweging, maar dan voor betaald adverteren.</p>
                            </Link>
                        </div>
                    </section>
                </div>
            </article>

            {/* Bottom CTA */}
            <section className="w-full pb-32 px-6">
                <div className="max-w-4xl mx-auto bg-primary rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
                    <h2 className="relative z-10 font-drama italic text-background text-3xl sm:text-4xl md:text-5xl mb-6">Klaar om je SEO serieus aan te pakken?</h2>
                    <p className="relative z-10 font-sans text-background/70 text-lg mb-10 max-w-xl mx-auto">Wil je weten wat SEO voor jouw bedrijf kan opleveren? We kijken er graag naar. Geen verplichtingen, wel een eerlijk advies.</p>
                    <Link to="/contact" className="relative z-10 btn-magnetic inline-flex items-center justify-center bg-accent text-background font-sans font-bold text-lg px-10 py-4 rounded-[2rem] hover:bg-accent/90 transition-colors">Neem contact op</Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
