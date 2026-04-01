import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ChevronRight, User } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function BlogPostSeoMarketingBureauKiezen() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen selection:bg-accent/30 selection:text-dark flex flex-col bg-background">
            <Helmet>
                <title>SEO marketing bureau kiezen: waar moet je op letten? | Empowers</title>
                <meta name="description" content="Een goed SEO marketing bureau herken je aan transparantie, meetbare resultaten en eerlijke verwachtingen. Lees de 7 punten waar je op let voordat je kiest." />
                <link rel="canonical" href="https://www.empowers.nl/blogs/seo/seo-marketing-bureau-kiezen-waar" />
                <meta property="og:title" content="SEO marketing bureau kiezen: waar moet je op letten?" />
                <meta property="og:description" content="Een goed SEO marketing bureau herken je aan transparantie, meetbare resultaten en eerlijke verwachtingen. Lees de 7 punten waar je op let voordat je kiest." />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://www.empowers.nl/blogs/seo/seo-marketing-bureau-kiezen-waar" />
                <meta property="og:image" content="https://www.empowers.nl/images/blogs/seo-marketing-bureau-kiezen-waar.jpg" />
                <meta property="article:published_time" content="2026-03-31" />
                <meta property="article:author" content="Empowers" />
                <meta property="article:section" content="SEO" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="SEO marketing bureau kiezen: waar moet je op letten?" />
                <meta name="twitter:description" content="Een goed SEO bureau herken je aan transparantie, meetbare resultaten en eerlijke verwachtingen. Lees waar je op let." />

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Article",
                        "headline": "SEO marketing bureau kiezen: waar moet je op letten?",
                        "description": "Een goed SEO marketing bureau herken je aan transparantie, meetbare resultaten en eerlijke verwachtingen. Lees de 7 punten waar je op let voordat je kiest.",
                        "image": "https://www.empowers.nl/images/blogs/seo-marketing-bureau-kiezen-waar.jpg",
                        "datePublished": "2026-03-31T00:00:00+02:00",
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
                                    "name": "Wat kost een SEO marketing bureau per maand?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Een SEO bureau kost gemiddeld 500 tot 2500 euro per maand. Lokale SEO projecten beginnen rond 500 euro. Landelijke campagnes met contentcreatie en linkbuilding zitten tussen 1000 en 2500 euro. Bureaus onder 300 euro leveren zelden serieus werk."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Hoe herken je een slecht SEO bureau?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Rode vlaggen zijn: garanties op nummer 1 posities, geen transparante rapportages, langlopende contracten zonder opzegmogelijkheid en geen direct contact met de specialist. Als een bureau zelf niet vindbaar is in Google, is dat het duidelijkste signaal."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Hoe lang duurt het voordat een SEO bureau resultaat levert?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Reken op 3 tot 6 maanden voor de eerste verbeteringen in rankings en verkeer. Serieuze groei zie je na 6 tot 12 maanden. Een goed bureau is hier eerlijk over en belooft geen resultaten binnen een paar weken."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Moet ik kiezen voor een groot of klein SEO bureau?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Dat hangt af van je budget en je verwachtingen. Een klein bureau biedt vaak meer persoonlijke aandacht en direct contact met de specialist. Een groot bureau heeft meer capaciteit maar werkt vaak met account managers die zelf geen SEO uitvoeren."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Wat moet een SEO bureau minimaal rapporteren?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Rankings op je target keywords, organisch verkeer per maand, technische verbeteringen die zijn uitgevoerd en de contentstrategie voor de komende periode. Zonder maandelijkse rapportage heb je geen zicht op wat het bureau doet."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Kan ik SEO deels zelf doen en deels uitbesteden?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Ja, dat is een slimme aanpak voor MKB. Je schrijft zelf blogs op basis van het zoekwoordenonderzoek van het bureau. Het bureau doet de technische SEO, linkbuilding en strategie. Zo houd je de kosten lager en de resultaten hoog."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Is een gespecialiseerd SEO bureau beter dan een full-service bureau?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Een gespecialiseerd bureau heeft vaak diepere kennis van SEO. Een full-service bureau kan SEO combineren met advertenties en social media. Kies op basis van je doelen: als je alleen SEO nodig hebt, kies een specialist. Wil je een complete aanpak, kies een bureau dat meerdere kanalen beheerst."
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
                                "name": "SEO marketing bureau kiezen",
                                "item": "https://www.empowers.nl/blogs/seo/seo-marketing-bureau-kiezen-waar"
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
                        <span className="text-primary truncate">SEO marketing bureau kiezen</span>
                    </nav>

                    {/* Header */}
                    <header className="mb-16">
                        <div className="inline-block px-3 py-1 bg-accent/10 text-accent font-mono text-xs uppercase tracking-widest rounded-full mb-6">
                            SEO
                        </div>
                        <h1 className="font-sans font-bold text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight mb-8">
                            SEO marketing bureau kiezen: waar moet je op letten?
                        </h1>

                        <div className="flex flex-wrap items-center gap-6 text-sm font-sans text-primary/60 border-y border-primary/10 py-6">
                            <div className="flex items-center gap-2">
                                <User className="w-4 h-4" />
                                <span>Empowers Redactie</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>31 maart 2026</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>8 minuten leestijd</span>
                            </div>
                        </div>
                    </header>

                    {/* Featured Image */}
                    <figure className="w-full h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden mb-16 relative bg-primary">
                        <div className="absolute inset-0 bg-[url('/images/blogs/seo-marketing-bureau-kiezen-waar.jpg')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </figure>

                    {/* Content */}
                    <div className="prose prose-lg max-w-none prose-headings:text-primary prose-headings:font-bold prose-a:text-accent prose-a:underline hover:prose-a:text-accent/80">
                        <p className="text-xl leading-relaxed text-primary/80 font-medium mb-6">
                            Een goed SEO marketing bureau herken je aan transparante rapportages, eerlijke verwachtingen en direct contact met de specialist die jouw project uitvoert. Prijzen liggen tussen 500 en 2500 euro per maand. Het verschil zit niet in het bedrag, maar in wat er met dat bedrag gebeurt.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Waarom is het kiezen van een SEO bureau zo lastig?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Er zijn honderden bureaus die SEO aanbieden. Van eenmanszaken tot grote agencies. Iedereen belooft hogere rankings en meer verkeer. Het probleem: je kunt pas na maanden beoordelen of een bureau goed werk levert. Dat maakt de keuze vooraf spannend.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            We krijgen deze vraag wekelijks van ondernemers die al een keer hun vingers hebben gebrand. Een bureau dat mooie beloftes deed, maar na zes maanden nauwelijks resultaat liet zien. Of een bureau dat alleen automatische rapporten stuurde zonder echte uitleg.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De oplossing is weten waar je op moet letten. Niet op de verkooppraatjes, maar op de concrete signalen die laten zien of een bureau echt weet wat het doet.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe herken je een goed SEO marketing bureau?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een goed bureau stelt eerst vragen voordat het antwoorden geeft. Het wil weten wat je bedrijf doet, wie je klanten zijn en wat je doelen zijn. Pas daarna komt er een voorstel. Een bureau dat direct een offerte stuurt zonder je bedrijf te kennen, weet niet waar het mee bezig is.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Bij onze klanten zien we dat de beste resultaten komen van bureaus die meedenken als partner, niet als leverancier. Ze denken na over je complete strategie, niet alleen over je rankings. Ze koppelen SEO aan je bedrijfsdoelen: meer aanvragen, meer verkopen, meer omzet.
                        </p>

                        <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Transparantie over werkzaamheden</h3>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Vraag altijd wat het bureau concreet gaat doen. Hoeveel uren besteden ze per maand aan jouw project? Welke taken voeren ze uit? Een bureau dat vaag blijft over de werkzaamheden, heeft waarschijnlijk weinig te melden. Je wilt precies weten: zoekwoordenonderzoek, technische verbeteringen, contentcreatie, linkbuilding. En hoeveel van elk.
                        </p>

                        <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Maandelijkse rapportages die je begrijpt</h3>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een goed rapport laat zien: hoe je rankings zijn veranderd, hoeveel organisch verkeer je krijgt, welke pagina's het best presteren en wat de volgende stappen zijn. Geen PDF van 30 pagina's vol grafieken die niemand leest. Wel een helder overzicht van wat er is gedaan en wat het heeft opgeleverd.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Welke vragen stel je aan een SEO bureau voordat je kiest?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Dit zijn de vragen die het verschil maken tussen een goede en een slechte keuze. Stel ze allemaal. Een goed bureau beantwoordt ze zonder aarzelen.
                        </p>

                        <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Wie werkt er aan mijn project?</h3>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Praat je straks met een account manager die zelf geen SEO doet? Of heb je direct contact met de specialist? Bij veel grote bureaus zit er een tussenpersoon tussen jou en de uitvoerder. Dat vertaagt communicatie en verwatert de kwaliteit. Kies een bureau waar je direct met de expert praat.
                        </p>

                        <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Wat zijn jullie eigen rankings?</h3>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een SEO bureau dat zelf niet vindbaar is in Google is als een kapper met slecht haar. Check hun website. Staan ze op relevante zoektermen? Hebben ze zelf goede content? Een bureau dat zijn eigen <Link to="/seo" className="text-accent hover:underline">SEO op orde heeft</Link>, weet hoe het werkt.
                        </p>

                        <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Kunnen jullie referenties laten zien?</h3>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Vraag om concrete cases. Niet alleen namen van klanten, maar resultaten. Hoeveel verkeer is er gegroeid? Welke posities zijn behaald? In welke periode? Een bureau dat geen cases kan laten zien, heeft ze waarschijnlijk niet.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat zijn de rode vlaggen bij een SEO bureau?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Er zijn signalen waar je meteen van moet wegrennen. Een bureau dat een nummer 1 positie garandeert, liegt. Niemand kan dat garanderen, want Google bepaalt de rankings. Een veelgemaakte fout die we tegenkomen is dat ondernemers trappen in deze beloftes.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Andere rode vlaggen: contracten van 12 maanden of langer zonder tussentijdse opzegmogelijkheid. Geen uitleg over de strategie. Alleen focus op rankings in plaats van op verkeer en conversies. Rankings zonder verkeer zijn waardeloos.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            We merken in de praktijk dat bureaus die extreem lage prijzen hanteren (onder 300 euro per maand) zelden serieus werk leveren. Voor dat bedrag kan een specialist hooguit een paar uur per maand aan je project werken. Dat is niet genoeg om resultaten te boeken.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoeveel kost een goed SEO marketing bureau?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Reken op 500 tot 2500 euro per maand. Lokale SEO voor een bedrijf dat in een stad of regio wil scoren begint rond 500 euro. Landelijke campagnes met contentcreatie, technische SEO en linkbuilding zitten tussen 1000 en 2500 euro per maand.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Bij onze klanten zien we dat een budget van 750 tot 1500 euro per maand voor de meeste MKB-bedrijven voldoende is. Daarmee betaal je een specialist die structureel aan je zichtbaarheid werkt. Het rendement: organisch verkeer dat niets per klik kost, in tegenstelling tot <Link to="/google-ads" className="text-accent hover:underline">Google Ads</Link>.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een webshop die we begeleidden investeerde 1200 euro per maand in SEO. Na 9 maanden steeg het organische verkeer van 400 naar 2100 bezoekers per maand. De extra omzet die dat opleverde was ruim 8000 euro per maand. Dat is een rendement dat je met weinig andere marketingkanalen bereikt.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe combineer je SEO met andere marketingkanalen?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            SEO is het sterkst als onderdeel van een bredere strategie. Terwijl SEO groeit, gebruik je <Link to="/google-ads" className="text-accent hover:underline">Google Ads</Link> voor direct verkeer. <Link to="/meta-ads" className="text-accent hover:underline">Meta Ads</Link> brengen naamsbekendheid bij nieuwe doelgroepen. SEO bouwt ondertussen het fundament dat blijft werken.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een goed SEO bureau denkt hierin mee. Het kijkt niet alleen naar organische posities, maar naar het totale plaatje. Welke pagina's converteren het best? Welke zoektermen brengen klanten die kopen? Dat is het verschil tussen een bureau dat rankings levert en een bureau dat omzet levert.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wanneer is het tijd om van SEO bureau te wisselen?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Als je na 6 maanden geen meetbare vooruitgang ziet in rankings of verkeer, is er iets mis. Een goed bureau legt uit waarom resultaten uitblijven en past de strategie aan. Een slecht bureau komt met excuses of wijst naar Google-updates.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Andere signalen om te wisselen: je krijgt geen antwoord op vragen, rapportages komen te laat of niet, je hebt geen idee wat het bureau doet. Vertrouwen is de basis van een goede samenwerking. Als dat ontbreekt, stap over.
                        </p>
                    </div>

                    {/* FAQ Section */}
                    <section className="mt-16 pt-12 border-t border-primary/10">
                        <h2 className="text-3xl font-bold text-primary mb-8">Veelgestelde vragen</h2>
                        <div className="space-y-6 not-prose">
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat kost een SEO marketing bureau per maand?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Een SEO bureau kost gemiddeld 500 tot 2500 euro per maand. Lokale SEO projecten beginnen rond 500 euro. Landelijke campagnes met contentcreatie en linkbuilding zitten tussen 1000 en 2500 euro. Bureaus onder 300 euro leveren zelden serieus werk.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoe herken je een slecht SEO bureau?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Rode vlaggen zijn: garanties op nummer 1 posities, geen transparante rapportages, langlopende contracten zonder opzegmogelijkheid en geen direct contact met de specialist. Als een bureau zelf niet vindbaar is in Google, is dat het duidelijkste signaal.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoe lang duurt het voordat een SEO bureau resultaat levert?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Reken op 3 tot 6 maanden voor de eerste verbeteringen in rankings en verkeer. Serieuze groei zie je na 6 tot 12 maanden. Een goed bureau is hier eerlijk over en belooft geen resultaten binnen een paar weken.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Moet ik kiezen voor een groot of klein SEO bureau?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Dat hangt af van je budget en je verwachtingen. Een klein bureau biedt vaak meer persoonlijke aandacht en direct contact met de specialist. Een groot bureau heeft meer capaciteit maar werkt vaak met account managers die zelf geen SEO uitvoeren.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat moet een SEO bureau minimaal rapporteren?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Rankings op je target keywords, organisch verkeer per maand, technische verbeteringen die zijn uitgevoerd en de contentstrategie voor de komende periode. Zonder maandelijkse rapportage heb je geen zicht op wat het bureau doet.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Kan ik SEO deels zelf doen en deels uitbesteden?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Ja, dat is een slimme aanpak voor MKB. Je schrijft zelf blogs op basis van het zoekwoordenonderzoek van het bureau. Het bureau doet de technische SEO, linkbuilding en strategie. Zo houd je de kosten lager en de resultaten hoog.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Is een gespecialiseerd SEO bureau beter dan een full-service bureau?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Een gespecialiseerd bureau heeft vaak diepere kennis van SEO. Een full-service bureau kan SEO combineren met advertenties en social media. Kies op basis van je doelen: als je alleen SEO nodig hebt, kies een specialist. Wil je een complete aanpak, kies een bureau dat meerdere kanalen beheerst.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Related Links */}
                    <section className="mt-16 pt-12 border-t border-primary/10">
                        <h3 className="text-xl font-bold text-primary mb-6">Lees ook</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <Link to="/blogs/seo/seo-uitbesteden-zelf-eerlijk-antwoord" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">SEO uitbesteden of zelf doen? Een eerlijk antwoord</h3>
                                <p className="text-primary/60 text-sm">Wanneer loont uitbesteden en wanneer doe je het beter zelf?</p>
                            </Link>
                            <Link to="/blogs/seo/lang-duurt-seo-realistische-verwachtingen" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Hoe lang duurt SEO? Realistische verwachtingen</h3>
                                <p className="text-primary/60 text-sm">Reken op 3 tot 6 maanden. Zo versnelt je het proces.</p>
                            </Link>
                            <Link to="/blogs/seo/technische-seo-checklist-2025-website" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Technische SEO checklist 2026</h3>
                                <p className="text-primary/60 text-sm">Alles wat je website nodig heeft om goed te presteren in Google.</p>
                            </Link>
                        </div>
                    </section>
                </div>
            </article>

            {/* Bottom CTA */}
            <section className="w-full pb-32 px-6">
                <div className="max-w-4xl mx-auto bg-primary rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
                    <h2 className="relative z-10 font-drama italic text-background text-3xl sm:text-4xl md:text-5xl mb-6">Op zoek naar een SEO bureau dat levert?</h2>
                    <p className="relative z-10 font-sans text-background/70 text-lg mb-10 max-w-xl mx-auto">Wil je weten wat SEO voor jouw bedrijf kan opleveren? We kijken er graag naar. Geen verplichtingen, wel een eerlijk advies.</p>
                    <Link to="/contact" className="relative z-10 btn-magnetic inline-flex items-center justify-center bg-accent text-background font-sans font-bold text-lg px-10 py-4 rounded-[2rem] hover:bg-accent/90 transition-colors">Neem contact op</Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
