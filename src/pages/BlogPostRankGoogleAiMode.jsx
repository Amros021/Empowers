import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ChevronRight, User } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function BlogPostRankGoogleAiMode() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen selection:bg-accent/30 selection:text-dark flex flex-col bg-background">
            <Helmet>
                <title>Hoe rank je in Google AI Mode? Stappenplan voor 2026 | Empowers</title>
                <meta name="description" content="Google AI Mode geeft directe AI-antwoorden in plaats van een lijst zoekresultaten. Lees hoe je content schrijft die het systeem als bron gebruikt." />
                <link rel="canonical" href="https://www.empowers.nl/blogs/geo/rank-google-ai-mode" />
                <meta property="og:title" content="Hoe rank je in Google AI Mode?" />
                <meta property="og:description" content="Praktisch stappenplan om geciteerd te worden in Google AI Mode en AI Overviews." />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://www.empowers.nl/blogs/geo/rank-google-ai-mode" />
                <meta property="og:image" content="https://www.empowers.nl/images/blogs/rank-google-ai-mode.jpg" />
                <meta property="article:published_time" content="2026-05-08" />
                <meta property="article:author" content="Empowers" />
                <meta property="article:section" content="GEO" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Ranken in Google AI Mode: zo doe je het" />
                <meta name="twitter:description" content="Stappenplan voor zichtbaarheid in Google's AI-antwoorden." />

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Article",
                        "headline": "Hoe rank je in Google AI Mode? Stappenplan voor 2026",
                        "description": "Praktisch stappenplan om geciteerd te worden in Google AI Mode en AI Overviews.",
                        "image": "https://www.empowers.nl/images/blogs/rank-google-ai-mode.jpg",
                        "datePublished": "2026-05-08T15:00:00+02:00",
                        "author": { "@type": "Organization", "name": "Empowers" },
                        "publisher": {
                            "@type": "Organization",
                            "name": "Empowers",
                            "url": "https://www.empowers.nl",
                            "logo": { "@type": "ImageObject", "url": "https://www.empowers.nl/empowers-logo-color.svg" }
                        },
                        "mainEntity": {
                            "@type": "FAQPage",
                            "mainEntity": [
                                {
                                    "@type": "Question",
                                    "name": "Wat is Google AI Mode?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Google AI Mode is de AI-aangedreven zoekervaring waarbij Google een direct antwoord genereert in plaats van enkel een lijst blauwe links. Het systeem gebruikt content van het web als bron voor zijn antwoord en linkt door naar de gebruikte pagina's. Voor adverteerders en SEO-specialisten betekent dit een nieuw zichtbaarheidskanaal naast traditionele rankings."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Hoe verschilt AI Mode van AI Overviews?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "AI Overviews zijn samenvattende blokken bovenaan reguliere zoekresultaten. AI Mode is een aparte interface waar je een conversatie kunt voeren met Google's AI. Beide gebruiken vergelijkbare bronnenselectie. Wie zichtbaar is in AI Overviews, heeft doorgaans ook een grotere kans om in AI Mode geciteerd te worden."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Welke content krijgt voorrang in AI Mode?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Content die direct antwoord geeft op concrete vragen, met heldere structuur en duidelijke autoriteit. Korte definities aan het begin van een paragraaf, FAQ-secties met schema markup, en pagina's met sterke topical authority worden vaker als bron gepakt. Lange inleidingen die het antwoord pas op alinea drie geven, doen het minder."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Maakt schema markup verschil voor AI Mode?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Ja, en niet zomaar een beetje. FAQPage, HowTo, Article en Organization-schema helpen Google de structuur van je pagina te begrijpen. Een vraag in FAQPage-formaat is voor het AI-systeem direct herkenbaar als citeerbaar antwoord. Ontbreekt de schema, dan moet het systeem zelf raden waar de antwoorden staan en zijn de keuzekansen kleiner."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Werkt klassieke SEO nog voor AI Mode?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Ja, want AI Mode kiest zijn bronnen uit de Google-index. Pagina's die niet ranken in de top 20 organische resultaten worden zelden geciteerd. Het verschil zit in welke optimalisatie binnen die top-rankings de citatie binnenhaalt: directe antwoord-formats, schema, autoriteit plus E-E-A-T-signalen wegen zwaarder dan voorheen."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Hoe meet je zichtbaarheid in Google AI Mode?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Lastiger dan klassieke rank-tracking. Tools zoals AthenaHQ en Profound monitoren AI-citaties per zoekopdracht. Daarnaast: kijk in Google Search Console naar verkeer met specifieke 'AI Mode'-referrers (waar beschikbaar), en monitor je branded-search-volume tijdens AI-launches. Last-click attributie ondervangt dit kanaal vrijwel niet."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Hoe lang duurt het om resultaat te zien?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Onze ervaring: tussen 8 en 16 weken zien we de eerste citaties verschijnen voor klanten die hun content systematisch optimaliseren met AI Mode in gedachten. Snelheid hangt af van bestaande domain authority. Sites die al sterk ranken, schakelen sneller. Nieuwe sites moeten eerst voldoende organische ranking opbouwen voordat AI Mode hen overweegt."
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
                            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.empowers.nl" },
                            { "@type": "ListItem", "position": 2, "name": "Blogs", "item": "https://www.empowers.nl/blogs" },
                            { "@type": "ListItem", "position": 3, "name": "GEO", "item": "https://www.empowers.nl/blogs/geo" },
                            { "@type": "ListItem", "position": 4, "name": "Ranken in Google AI Mode", "item": "https://www.empowers.nl/blogs/geo/rank-google-ai-mode" }
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
                        <span className="text-primary truncate">Ranken in Google AI Mode</span>
                    </nav>

                    <header className="mb-16">
                        <div className="inline-block px-3 py-1 bg-accent/10 text-accent font-mono text-xs uppercase tracking-widest rounded-full mb-6">
                            GEO
                        </div>
                        <h1 className="font-sans font-bold text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight mb-8">
                            Hoe rank je in Google AI Mode? Stappenplan voor 2026
                        </h1>
                        <div className="flex flex-wrap items-center gap-6 text-sm font-sans text-primary/60 border-y border-primary/10 py-6">
                            <div className="flex items-center gap-2"><User className="w-4 h-4" /><span>Empowers Redactie</span></div>
                            <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>8 mei 2026</span></div>
                            <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>8 minuten leestijd</span></div>
                        </div>
                    </header>

                    <figure className="w-full h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden mb-16 relative bg-primary">
                        <div className="absolute inset-0 bg-[url('/images/blogs/rank-google-ai-mode.jpg')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </figure>

                    <div className="prose prose-lg max-w-none prose-headings:text-primary prose-headings:font-bold prose-a:text-accent prose-a:underline hover:prose-a:text-accent/80">
                        <p className="text-xl leading-relaxed text-primary/80 font-medium mb-6">
                            Google AI Mode genereert direct een antwoord op je zoekopdracht in plaats van een lijst blauwe links. Voor wie online zichtbaar wil zijn, verandert daarmee de speelregel. Niet meer alleen ranken op positie 1 telt. Geciteerd worden in het AI-antwoord telt minstens zo zwaar. Hieronder lees je hoe je je content zo opbouwt dat Google's AI-systeem jouw pagina als bron gebruikt.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat is Google AI Mode precies?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            AI Mode is een aparte zoekinterface in Google waar je een AI-aangedreven gesprek voert in plaats van losse zoekopdrachten typt. Het systeem genereert een antwoord, vaak met meerdere onderdelen, en linkt door naar de bronnen die het heeft gebruikt. AI Overviews, de samenvattingsblokken bovenaan reguliere zoekresultaten, gebruiken een vergelijkbaar mechanisme.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Voor jou als marketeer betekent dat een dubbele uitdaging. Je wilt nog steeds organisch ranken om uberhaupt overwogen te worden als bron. En je wilt geciteerd worden in het AI-antwoord, omdat een groeiende groep gebruikers nooit doorklikt naar de blauwe links eronder. Wie alleen op klassieke posities optimaliseert, mist het zichtbaarheidskanaal dat in 2026 het hardst groeit.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Schrijf voor concrete vragen, niet voor zoekwoorden</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Het AI-systeem zoekt antwoorden op concrete vragen. Niet op zoekwoord-strings. Een pagina met de titel "tiktok ads voor mkb" trekt klassiek bezoekers op die zoekterm. Maar AI Mode werkt met natuurlijke vragen: "Werkt TikTok voor MKB-bedrijven in Nederland?" of "Wat kost een TikTok-campagne voor een kleine onderneming?" Je content moet dat soort vragen direct, in een of twee zinnen, beantwoorden.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Praktisch: zet een kort, direct antwoord aan het begin van elke sectie. Niet eerst drie alinea's context. Geef het kerne-antwoord in 30 tot 50 woorden in de eerste regel of zin van de paragraaf. De rest is uitleg en bewijs. Dat formaat is wat AI-systemen herkennen als citeerbaar.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">FAQPage-schema is geen luxe meer</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Schema markup helpt Google de structuur van je pagina expliciet te begrijpen. FAQPage-schema is voor AI Mode bijzonder waardevol omdat elke vraag plus antwoord in een direct citeerbaar format staat. Ook HowTo-, Article- en Organization-schema dragen bij aan hoe het systeem je autoriteit en context inschat.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Hoe je dit op pagina-niveau toepast staat in onze gids over <Link to="/blogs/geo/wat-is-geo-generative-engine-optimization" className="text-accent hover:underline">GEO en hoe je geciteerd wordt door ChatGPT</Link>. De schema-aanpak werkt voor alle generatieve zoekmachines, niet alleen voor Google.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Topical authority weegt zwaarder dan losse pagina's</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Het AI-systeem kijkt niet alleen of jouw pagina antwoord geeft, maar of jouw site uberhaupt autoriteit heeft op het onderwerp. Een losse blog over "TikTok Ads kosten" op een algemene marketingsite presteert minder dan dezelfde blog op een site die tien pagina's over TikTok Ads heeft. Hoe meer diepgaande content rond een thema, hoe sterker je autoriteits-signaal.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Bouw daarom in clusters. Kies een hoofdonderwerp, schrijf een diepgaande pillar-pagina, en omring die met zes tot tien gedetailleerde sub-pagina's die elk een specifieke vraag binnen het onderwerp beantwoorden. Linken die naar elkaar in een zinvolle structuur. Een gerichte SEO-aanpak die hierbij helpt staat in onze gids over <Link to="/blogs/seo" className="text-accent hover:underline">SEO en content-strategie</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">E-E-A-T-signalen sturen wat het systeem citeert</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Google's E-E-A-T-framework (Experience, Expertise, Authoritativeness, Trust) speelt een grotere rol in AI Mode dan in klassieke ranking. Trust is binnen die vier de zwaarste factor. Ontbreekt vertrouwen, dan werkt geen enkele andere optimalisatie. Wat hieraan bouwt: heldere auteurspagina's, realistisch klantenwerk, externe bronvermelding, een transparante "Over ons"-pagina, en het ontbreken van overdreven claims.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Wat AI-systemen niet citeren: pagina's met enkel marketing-claims zonder onderbouwing, content zonder identificeerbare auteur, en sites zonder enige offline aanwezigheid. Hoe je je E-E-A-T verstevigt staat in onze gids over <Link to="/blogs/seo/eeat-belangrijk-voor-seo" className="text-accent hover:underline">waarom E-E-A-T belangrijk is voor SEO</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe meet je zichtbaarheid in AI Mode?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Klassieke rank-trackers tonen je positie in de organische resultaten, niet of je bent geciteerd in een AI-antwoord. Voor AI-zichtbaarheid heb je gespecialiseerde tools nodig. AthenaHQ en Profound monitoren AI-citaties per zoekopdracht en geven je een beeld van waar je bron-positie hebt. Daarnaast helpt het om je branded-search-volume in Google Search Console te volgen tijdens AI-launches en updates.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een directe maatstaf: kijk in je Google Analytics naar zoektermen die langer en in vraagvorm zijn (5 woorden of meer, beginnend met hoe, wat, waarom, wanneer). Stijgt dat segment terwijl je top-zoekwoord-rankings stabiel blijven, dan is dat een vrij betrouwbaar signaal dat AI-zichtbaarheid jou bezoekers oplevert via een ander pad.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Welke fouten houden je tegen?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            We zien drie patronen die AI-citaties kapotmaken. Te veel marketing-taal in plaats van directe informatie. Lange inleidingen voordat je het antwoord geeft. En totaal ontbreken van structurele markup. Wie deze drie aanpakt, ziet vaak binnen twee tot drie maanden de eerste meetbare resultaten in AI-citatie-tools.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een vierde valkuil: dezelfde content over honderd pagina's herhalen in licht andere bewoordingen. AI-systemen herkennen content-doublures als signaal van lage waarde. Beter een sterke pagina van 1.500 woorden dan vijf flinterdunne pagina's met overlappende inhoud.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wanneer is een specialist nodig?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een eerste stap richting AI-zichtbaarheid kun je zelfstandig maken: schema toevoegen, antwoord-formats omdraaien, een paar FAQ-secties uitbreiden. Het wordt complexer als je een volledige content-strategie wilt herontwerpen voor zowel klassieke SEO als AI-zichtbaarheid, en als je impact serieus wilt monitoren. Op dat punt komt strategie en tooling samen.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een goede GEO-specialist ziet binnen een uur waar je content-stack rendement laat liggen: ontbrekende schema, te veel marketing-fluff, geen heldere antwoord-formats, geen content clusters. Wil je dat we daar samen naar kijken? Plan een vrijblijvend gesprek via onze <Link to="/contact" className="text-accent hover:underline">contactpagina</Link>.
                        </p>
                    </div>

                    <section className="mt-16 pt-12 border-t border-primary/10">
                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Veelgestelde vragen</h2>
                        <div className="space-y-6 not-prose">
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat is Google AI Mode?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Google AI Mode is de AI-aangedreven zoekervaring waarbij Google een direct antwoord genereert in plaats van enkel een lijst blauwe links. Het systeem gebruikt content van het web als bron voor zijn antwoord en linkt door naar de gebruikte pagina's. Voor adverteerders en SEO-specialisten betekent dit een nieuw zichtbaarheidskanaal naast traditionele rankings.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoe verschilt AI Mode van AI Overviews?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">AI Overviews zijn samenvattende blokken bovenaan reguliere zoekresultaten. AI Mode is een aparte interface waar je een conversatie kunt voeren met Google's AI. Beide gebruiken vergelijkbare bronnenselectie. Wie zichtbaar is in AI Overviews, heeft doorgaans ook een grotere kans om in AI Mode geciteerd te worden.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Welke content krijgt voorrang in AI Mode?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Content die direct antwoord geeft op concrete vragen, met heldere structuur en duidelijke autoriteit. Korte definities aan het begin van een paragraaf, FAQ-secties met schema markup, en pagina's met sterke topical authority worden vaker als bron gepakt. Lange inleidingen die het antwoord pas op alinea drie geven, doen het minder.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Maakt schema markup verschil voor AI Mode?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Ja, en niet zomaar een beetje. FAQPage, HowTo, Article en Organization-schema helpen Google de structuur van je pagina te begrijpen. Een vraag in FAQPage-formaat is voor het AI-systeem direct herkenbaar als citeerbaar antwoord. Ontbreekt de schema, dan moet het systeem zelf raden waar de antwoorden staan en zijn de keuzekansen kleiner.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Werkt klassieke SEO nog voor AI Mode?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Ja, want AI Mode kiest zijn bronnen uit de Google-index. Pagina's die niet ranken in de top 20 organische resultaten worden zelden geciteerd. Het verschil zit in welke optimalisatie binnen die top-rankings de citatie binnenhaalt: directe antwoord-formats, schema, autoriteit plus E-E-A-T-signalen wegen zwaarder dan voorheen.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoe meet je zichtbaarheid in Google AI Mode?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Lastiger dan klassieke rank-tracking. Tools zoals AthenaHQ en Profound monitoren AI-citaties per zoekopdracht. Daarnaast: kijk in Google Search Console naar verkeer met specifieke 'AI Mode'-referrers (waar beschikbaar), en monitor je branded-search-volume tijdens AI-launches. Last-click attributie ondervangt dit kanaal vrijwel niet.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoe lang duurt het om resultaat te zien?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Onze ervaring: tussen 8 en 16 weken zien we de eerste citaties verschijnen voor klanten die hun content systematisch optimaliseren met AI Mode in gedachten. Snelheid hangt af van bestaande domain authority. Sites die al sterk ranken, schakelen sneller. Nieuwe sites moeten eerst voldoende organische ranking opbouwen voordat AI Mode hen overweegt.</p>
                            </div>
                        </div>
                    </section>

                    <section className="mt-16 pt-12 border-t border-primary/10">
                        <h3 className="text-xl font-bold text-primary mb-6">Lees ook</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <Link to="/blogs/geo/wat-is-geo-generative-engine-optimization" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Wat is GEO?</h3>
                                <p className="text-primary/60 text-sm">Generative Engine Optimization van begin tot eind uitgelegd.</p>
                            </Link>
                            <Link to="/blogs/seo/eeat-belangrijk-voor-seo" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">E-E-A-T en SEO</h3>
                                <p className="text-primary/60 text-sm">Hoe vertrouwen, expertise en autoriteit je rankings sturen.</p>
                            </Link>
                            <Link to="/blogs/geo/seo-strategie-vervangen-door-geo" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">SEO-strategie vervangen door GEO</h3>
                                <p className="text-primary/60 text-sm">Hoe je je content-budget herverdeelt voor AI-zoekmachines.</p>
                            </Link>
                        </div>
                    </section>

                </div>
            </article>

            <section className="w-full pb-32 px-6">
                <div className="max-w-4xl mx-auto bg-primary rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
                    <h2 className="relative z-10 font-drama italic text-background text-3xl sm:text-4xl md:text-5xl mb-6">
                        Zichtbaar in Google AI Mode?
                    </h2>
                    <p className="relative z-10 font-sans text-background/70 text-lg mb-10 max-w-xl mx-auto">
                        We zetten je content op zodat AI-systemen je als bron citeren. Binnen 90 dagen zie je de eerste resultaten.
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
