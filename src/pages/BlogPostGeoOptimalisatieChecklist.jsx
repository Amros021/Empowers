import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ChevronRight, User } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function BlogPostGeoOptimalisatieChecklist() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen selection:bg-accent/30 selection:text-dark flex flex-col bg-background">
            <Helmet>
                <title>GEO optimalisatie checklist: 12 stappen om gevonden te worden door AI | Empowers</title>
                <meta name="description" content="Een GEO optimalisatie checklist met 12 concrete stappen om gevonden te worden door ChatGPT, Perplexity en Google AI. Van schema en llms.txt tot E-E-A-T en meten." />
                <meta name="keywords" content="geo optimalisatie checklist, generative engine optimization, gevonden worden door ai, chatgpt citeren, geo stappen, ai zichtbaarheid" />
                <link rel="canonical" href="https://www.empowers.nl/blogs/geo/geo-optimalisatie-checklist-gevonden-ai" />
                <meta property="og:title" content="GEO optimalisatie checklist: 12 stappen om gevonden te worden door AI" />
                <meta property="og:description" content="Twaalf concrete stappen om je website te laten citeren door ChatGPT, Perplexity en Google AI." />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://www.empowers.nl/blogs/geo/geo-optimalisatie-checklist-gevonden-ai" />
                <meta property="og:image" content="https://www.empowers.nl/images/blogs/geo-optimalisatie-checklist-gevonden-ai.jpg" />
                <meta property="article:published_time" content="2026-06-03T09:00:00+02:00" />
                <meta property="article:author" content="Empowers" />
                <meta property="article:section" content="GEO" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="GEO optimalisatie checklist: 12 stappen om gevonden te worden door AI" />
                <meta name="twitter:description" content="Twaalf concrete stappen om je website te laten citeren door ChatGPT, Perplexity en Google AI." />

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@graph": [
                            {
                                "@type": "Article",
                                "headline": "GEO optimalisatie checklist: 12 stappen om gevonden te worden door AI",
                                "description": "Een GEO optimalisatie checklist met twaalf concrete stappen om gevonden te worden door ChatGPT, Perplexity en Google AI, van schema en llms.txt tot E-E-A-T en meten.",
                                "image": "https://www.empowers.nl/images/blogs/geo-optimalisatie-checklist-gevonden-ai.jpg",
                                "datePublished": "2026-06-03T09:00:00+02:00",
                                "dateModified": "2026-06-03T09:00:00+02:00",
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
                                    { "@type": "ListItem", "position": 3, "name": "GEO", "item": "https://www.empowers.nl/blogs/geo" },
                                    { "@type": "ListItem", "position": 4, "name": "GEO optimalisatie checklist", "item": "https://www.empowers.nl/blogs/geo/geo-optimalisatie-checklist-gevonden-ai" }
                                ]
                            },
                            {
                                "@type": "FAQPage",
                                "mainEntity": [
                                    {
                                        "@type": "Question",
                                        "name": "Wat is GEO optimalisatie precies?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "GEO staat voor generative engine optimization: je website zo inrichten dat AI-modellen zoals ChatGPT en Perplexity je content gebruiken in hun antwoorden. Waar SEO mikt op een hoge plek in de zoekresultaten, mikt GEO op een vermelding of citaat in een AI-antwoord. De technieken overlappen, maar GEO legt meer nadruk op heldere antwoorden en aantoonbare betrouwbaarheid."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Hoeveel stappen telt een goede GEO checklist?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Deze checklist telt er twaalf, verdeeld over vier blokken: je content, je techniek, je betrouwbaarheid en je meting. Je hoeft ze niet allemaal in een week te doen. Begin bij de content en de FAQ, want daar zit de snelste winst, en werk daarna de techniek en de autoriteit af."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Helpt schema markup om door AI geciteerd te worden?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Ja. Schema markup vertelt machines letterlijk wat er op je pagina staat: dit is een artikel, dit is de auteur, dit is een vraag met een antwoord. AI-modellen en zoekmachines lezen die structuur sneller en betrouwbaarder dan losse tekst. FAQPage- en Article-schema zijn voor GEO de belangrijkste, omdat ze je antwoorden duidelijk afbakenen."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Wat is een llms.txt bestand en heb ik dat nodig?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Een llms.txt is een eenvoudig tekstbestand in de root van je site dat AI-modellen een overzicht geeft van je belangrijkste pagina's. Het is een jong voorstel en nog geen vaste standaard, dus reken er niet je hele strategie op af. Het kost weinig moeite om aan te maken en het kan AI-crawlers helpen je structuur te begrijpen, dus het is een redelijke aanvulling."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Hoe meet je of AI je website gebruikt?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Stel zelf de vragen waarop je gevonden wilt worden aan ChatGPT en Perplexity, en kijk of je merk of je content terugkomt. Bekijk in je serverlogboeken of analytics of AI-crawlers je pagina's ophalen, en let op verwijzend verkeer vanuit AI-bronnen. Het is minder exact dan klassieke zoekposities, maar het geeft een betrouwbaar beeld van je richting."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Vervangt GEO mijn SEO?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Nee. GEO en SEO bouwen op dezelfde basis: goede content, een snelle site en aantoonbare betrouwbaarheid. Wie sterk staat in Google, heeft vaak al een voorsprong in AI-antwoorden. Zie GEO als een extra laag bovenop je SEO, niet als een vervanging ervan."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Hoe lang duurt het voordat GEO resultaat geeft?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Reken op enkele maanden voordat je structureel terugkomt in AI-antwoorden. AI-modellen verversen hun kennis met sprongen en bouwen vertrouwen op basis van herhaalde signalen. Content die helder antwoord geeft en op meerdere plekken wordt aangehaald, wordt sneller opgepikt dan een losse pagina zonder verdere vermeldingen."
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
                        <Link to="/blogs/geo" className="hover:text-accent transition-colors">GEO</Link>
                        <ChevronRight className="w-3 h-3" />
                        <span className="text-primary truncate">GEO optimalisatie checklist</span>
                    </nav>

                    <header className="mb-16">
                        <div className="inline-block px-3 py-1 bg-accent/10 text-accent font-mono text-xs uppercase tracking-widest rounded-full mb-6">
                            GEO
                        </div>
                        <h1 className="font-sans font-bold text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight mb-8">
                            GEO optimalisatie checklist: 12 stappen om gevonden te worden door AI
                        </h1>
                        <div className="flex flex-wrap items-center gap-6 text-sm font-sans text-primary/60 border-y border-primary/10 py-6">
                            <div className="flex items-center gap-2"><User className="w-4 h-4" /><span>Empowers Redactie</span></div>
                            <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>3 juni 2026</span></div>
                            <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>8 minuten leestijd</span></div>
                        </div>
                    </header>

                    <figure className="w-full h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden mb-16 relative bg-primary">
                        <div className="absolute inset-0 bg-[url('/images/blogs/geo-optimalisatie-checklist-gevonden-ai.jpg')] bg-cover bg-center opacity-40 mix-blend-overlay" style={{ backgroundImage: "url('/images/blogs/geo-optimalisatie-checklist-gevonden-ai.jpg')" }}></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </figure>

                    <div className="prose prose-lg max-w-none prose-headings:text-primary prose-headings:font-bold prose-a:text-accent prose-a:underline hover:prose-a:text-accent/80">
                        <p className="text-xl leading-relaxed text-primary/80 font-medium mb-6">
                            Een GEO optimalisatie checklist draait om twaalf concrete acties die je website klaarmaken om geciteerd te worden door AI. De kern: geef in je eerste zinnen direct antwoord, schrijf koppen als vragen, voeg een FAQ met schema toe, laat AI-crawlers binnen, toon echte ervaring en meet of je terugkomt in de antwoorden. Hieronder loop je ze allemaal langs, verdeeld over je content, je techniek, je betrouwbaarheid en je meting.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Waarom heb je een aparte checklist voor AI nodig?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Steeds meer mensen stellen hun vraag niet meer aan Google, maar aan ChatGPT, Perplexity of de AI-samenvatting boven de zoekresultaten. Die modellen geven een antwoord en noemen daarbij een paar bronnen. Sta jij daar niet tussen, dan besta je voor die gebruiker simpelweg niet, hoe goed je dienst ook is.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Gevonden worden door AI vraagt om net andere keuzes dan een hoge plek in Google. Een zoekmachine stuurt mensen naar je pagina, een AI-model pikt er een stuk tekst uit en verwerkt dat in zijn antwoord. Dus moet je content niet alleen vindbaar zijn, maar ook makkelijk te citeren. Wat GEO precies inhoudt en hoe het zich verhoudt tot SEO, lees je in onze blog over <Link to="/blogs/geo/wat-is-geo-generative-engine-optimization" className="text-accent hover:underline">wat GEO is</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe maak je je content citeerbaar voor AI?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Begin bij het antwoord. Zet in de eerste veertig tot zestig woorden van een pagina meteen het kernantwoord op de vraag, zonder inleidend gepraat. Modellen halen graag dat soort heldere, op zichzelf staande zinnen aan. Een pagina die pas in alinea vier ter zake komt, wordt overgeslagen.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Schrijf daarna je koppen als vragen die mensen echt typen. "Hoeveel kost GEO voor een MKB-bedrijf?" werkt beter dan "Kostenoverwegingen", omdat het exact matcht met hoe iemand het aan een chatbot vraagt. En zorg dat elke sectie zelfstandig leesbaar is. Een AI-model trekt losse stukken uit je pagina, dus een alinea die leunt op "zoals hierboven beschreven" verliest zijn betekenis zodra hij eruit geknipt wordt.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Sluit elke belangrijke pagina af met een FAQ van vijf tot acht vragen met korte antwoorden. Dat is voor GEO misschien wel het meest renderende onderdeel: een vraag met een bondig antwoord is precies het formaat dat een AI-model nodig heeft. We zien dat pagina's met een goede FAQ vaker terugkomen in AI-antwoorden dan pagina's zonder.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Welke techniek moet op orde zijn?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Leg je structuur vast met schema markup. Daarmee vertel je machines letterlijk wat er staat: dit is een artikel, dit is de auteur, dit is een vraag met een antwoord. Article- en FAQPage-schema zijn hier de belangrijkste, want ze bakenen je antwoorden af zodat een model ze met vertrouwen kan overnemen.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Controleer vervolgens of je AI-crawlers binnenlaat. Veel sites blokkeren per ongeluk bots als GPTBot of PerplexityBot in hun robots.txt, en dan kan een model je content nooit ophalen. Wil je gevonden worden, dan moet de deur openstaan. Als aanvulling kun je een llms.txt aanmaken: een kort tekstbestand in de root dat AI-modellen wijst op je belangrijkste pagina's. Het is een jong voorstel en nog geen vaste standaard, dus zie het als handige extra, niet als wondermiddel.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Vergeet de basis niet. Een snelle, mobielvriendelijke site die foutloos laadt, helpt zowel je bezoekers als de crawlers die je content lezen. Techniek die rammelt, ondermijnt al je inhoudelijke werk. Welke hulpmiddelen je hierbij kunnen ondersteunen, bespreken we in onze blog over de <Link to="/blogs/geo/beste-geo-tool-2026" className="text-accent hover:underline">beste GEO-tools van 2026</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe laat je je betrouwbaarheid zien?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            AI-modellen wegen mee hoe betrouwbaar een bron lijkt. Toon daarom echte ervaring in je teksten. Een zin als "een webshop die we begeleidden ging van vrijwel geen AI-verwijzingen naar structurele vermeldingen binnen een half jaar" zegt meer dan een rij algemene beweringen. Zet er een herkenbare auteur en een actuele datum bij, zodat duidelijk is wie het schreef en wanneer.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Onderbouw je beweringen met concrete getallen en, waar het kan, met een bron. Feitelijke, controleerbare content wordt eerder aangehaald dan vage taal. En houd je pagina's vers: werk cijfers en voorbeelden bij wanneer ze verouderen, want een artikel dat duidelijk is achterhaald, verliest vertrouwen bij mens en model.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Je gezag stopt niet bij je eigen site. AI-modellen kijken ook naar wat anderen over je zeggen. Vermeldingen in vakmedia, eerlijke reviews en een nette aanwezigheid in relevante directories versterken het beeld dat jij een serieuze bron bent. Hoe je structureel in AI-antwoorden terechtkomt, werken we verder uit in onze blog over <Link to="/blogs/geo/website-verschijnen-chatgpt-antwoorden" className="text-accent hover:underline">verschijnen in ChatGPT-antwoorden</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe meet je of het werkt?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Stel zelf de vragen waarop je gevonden wilt worden aan ChatGPT, Perplexity en de AI-samenvatting van Google, en kijk of je merk of je content terugkomt. Doe dat met enige regelmaat, want de antwoorden veranderen. Het is minder exact dan een ranking checken, maar je ziet wel meteen waar je staat.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Kijk daarnaast in je serverlogboeken of analytics of AI-crawlers je pagina's ophalen en of er verkeer binnenkomt via AI-bronnen. Met die twee gewoontes, zelf testen en je data volgen, weet je of je werk landt. En dat is de laatste van de twaalf: meten, zodat je weet wat je moet bijsturen in plaats van te gokken.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Loop de twaalf punten gerust gefaseerd af. Begin bij je content en je FAQ, zet daarna je techniek en je betrouwbaarheid op orde en houd het meten erbij. Wil je weten waar jouw site nu staat in AI-zoekmachines? Plan een gratis gesprek via <Link to="/contact" className="text-accent hover:underline">empowers.nl/contact</Link>.
                        </p>
                    </div>

                    <section className="mt-16 pt-12 border-t border-primary/10">
                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Veelgestelde vragen</h2>
                        <div className="space-y-6 not-prose">
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat is GEO optimalisatie precies?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">GEO staat voor generative engine optimization: je website zo inrichten dat AI-modellen zoals ChatGPT en Perplexity je content gebruiken in hun antwoorden. Waar SEO mikt op een hoge plek in de zoekresultaten, mikt GEO op een vermelding of citaat in een AI-antwoord. De technieken overlappen, maar GEO legt meer nadruk op heldere antwoorden en aantoonbare betrouwbaarheid.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoeveel stappen telt een goede GEO checklist?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Deze checklist telt er twaalf, verdeeld over vier blokken: je content, je techniek, je betrouwbaarheid en je meting. Je hoeft ze niet allemaal in een week te doen. Begin bij de content en de FAQ, want daar zit de snelste winst, en werk daarna de techniek en de autoriteit af.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Helpt schema markup om door AI geciteerd te worden?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Ja. Schema markup vertelt machines letterlijk wat er op je pagina staat: dit is een artikel, dit is de auteur, dit is een vraag met een antwoord. AI-modellen en zoekmachines lezen die structuur sneller en betrouwbaarder dan losse tekst. FAQPage- en Article-schema zijn voor GEO de belangrijkste, omdat ze je antwoorden duidelijk afbakenen.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat is een llms.txt bestand en heb ik dat nodig?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Een llms.txt is een eenvoudig tekstbestand in de root van je site dat AI-modellen een overzicht geeft van je belangrijkste pagina's. Het is een jong voorstel en nog geen vaste standaard, dus reken er niet je hele strategie op af. Het kost weinig moeite om aan te maken en het kan AI-crawlers helpen je structuur te begrijpen, dus het is een redelijke aanvulling.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoe meet je of AI je website gebruikt?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Stel zelf de vragen waarop je gevonden wilt worden aan ChatGPT en Perplexity, en kijk of je merk of je content terugkomt. Bekijk in je serverlogboeken of analytics of AI-crawlers je pagina's ophalen, en let op verwijzend verkeer vanuit AI-bronnen. Het is minder exact dan klassieke zoekposities, maar het geeft een betrouwbaar beeld van je richting.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Vervangt GEO mijn SEO?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Nee. GEO en SEO bouwen op dezelfde basis: goede content, een snelle site en aantoonbare betrouwbaarheid. Wie sterk staat in Google, heeft vaak al een voorsprong in AI-antwoorden. Zie GEO als een extra laag bovenop je SEO, niet als een vervanging ervan.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoe lang duurt het voordat GEO resultaat geeft?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Reken op enkele maanden voordat je structureel terugkomt in AI-antwoorden. AI-modellen verversen hun kennis met sprongen en bouwen vertrouwen op basis van herhaalde signalen. Content die helder antwoord geeft en op meerdere plekken wordt aangehaald, wordt sneller opgepikt dan een losse pagina zonder verdere vermeldingen.</p>
                            </div>
                        </div>
                    </section>

                    <section className="mt-16 pt-12 border-t border-primary/10">
                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Lees ook</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <Link to="/blogs/geo/wat-is-geo-generative-engine-optimization" className="block border border-primary/10 rounded-xl p-6 hover:border-accent transition-colors">
                                <div className="text-xs font-mono uppercase tracking-widest text-accent mb-2">GEO</div>
                                <h3 className="font-sans font-semibold text-primary text-lg mb-2">Wat is GEO (generative engine optimization)?</h3>
                                <p className="font-sans text-primary/70 text-sm">De basis van GEO en hoe het verschilt van klassieke SEO.</p>
                            </Link>
                            <Link to="/blogs/geo/website-verschijnen-chatgpt-antwoorden" className="block border border-primary/10 rounded-xl p-6 hover:border-accent transition-colors">
                                <div className="text-xs font-mono uppercase tracking-widest text-accent mb-2">GEO</div>
                                <h3 className="font-sans font-semibold text-primary text-lg mb-2">Hoe je website verschijnt in ChatGPT-antwoorden</h3>
                                <p className="font-sans text-primary/70 text-sm">Concrete manieren om structureel in AI-antwoorden terug te komen.</p>
                            </Link>
                        </div>
                    </section>
                </div>
            </article>

            <section className="w-full pb-32 px-6">
                <div className="max-w-4xl mx-auto bg-primary rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
                    <h2 className="relative z-10 font-drama italic text-background text-3xl sm:text-4xl md:text-5xl mb-6">Word jij al gevonden door AI?</h2>
                    <p className="relative z-10 font-sans text-background/70 text-lg mb-10 max-w-xl mx-auto">In een gesprek van een halfuur kijken we waar jouw site staat in ChatGPT, Perplexity en Google AI en wat de snelste winst is. Geen verkooppraatje, wel een helder beeld.</p>
                    <Link to="/contact" className="relative z-10 btn-magnetic inline-flex items-center justify-center bg-accent text-background font-sans font-bold text-lg px-10 py-4 rounded-[2rem] hover:bg-accent/90 transition-colors">Neem contact op</Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
