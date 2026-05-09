import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ChevronRight, User } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function BlogPostAiVerwijzingenTrackenZonderDureTools() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen selection:bg-accent/30 selection:text-dark flex flex-col bg-background">
            <Helmet>
                <title>Hoe track je AI-verwijzingen zonder dure tools? | Empowers</title>
                <meta name="description" content="AI-verwijzingen tracken hoeft geen 300 euro per maand te kosten. Een gratis aanpak met Google Search Console, een spreadsheet en handmatige tests die werkt." />
                <link rel="canonical" href="https://www.empowers.nl/blogs/geo/ai-verwijzingen-tracken-zonder-dure-tools" />
                <meta property="og:title" content="Hoe track je AI-verwijzingen zonder dure tools?" />
                <meta property="og:description" content="Een budgetvriendelijke methode om te zien of jouw merk in AI-antwoorden verschijnt." />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://www.empowers.nl/blogs/geo/ai-verwijzingen-tracken-zonder-dure-tools" />
                <meta property="og:image" content="https://www.empowers.nl/images/blogs/ai-verwijzingen-tracken-zonder-dure-tools.jpg" />
                <meta property="article:published_time" content="2026-05-09" />
                <meta property="article:author" content="Empowers" />
                <meta property="article:section" content="GEO" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="AI-verwijzingen tracken zonder dure tools" />
                <meta name="twitter:description" content="Praktische stappen om AI-zichtbaarheid bij te houden zonder dure abonnementen." />

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Article",
                        "headline": "Hoe track je AI-verwijzingen zonder dure tools?",
                        "description": "AI-verwijzingen tracken hoeft geen 300 euro per maand te kosten. Een gratis aanpak met Google Search Console, een spreadsheet en handmatige tests die werkt.",
                        "image": "https://www.empowers.nl/images/blogs/ai-verwijzingen-tracken-zonder-dure-tools.jpg",
                        "datePublished": "2026-05-09T15:00:00+02:00",
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
                                    "name": "Kan ik AI-verwijzingen echt tracken zonder betaalde tools?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Ja. Je krijgt geen real-time dashboard, maar wel een betrouwbare baseline. Combineer drie gratis bronnen: Google Search Console voor branded zoekvolume, een handmatige weeklijkse query-test in ChatGPT en Perplexity, en je analytics voor direct verkeer. Vastgelegd in een simpele spreadsheet zie je binnen acht weken het patroon."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Welke metrics laten AI-zichtbaarheid betrouwbaar zien?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Branded search-volume in Google Search Console (mensen typen jouw merknaam na een AI-antwoord), direct verkeer naar je homepage, citatie-percentage uit handmatige tests in AI-engines, en referral verkeer vanuit chat.openai.com en andere AI-domeinen. Geen enkele metric staat alleen, maar samen geven ze een duidelijk beeld."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Hoe vaak moet ik handmatig testen in ChatGPT en Perplexity?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Een keer per week is genoeg om beweging te zien. Test elke week dezelfde tien tot vijftien kernvragen en log per vraag of jouw domein wordt genoemd. Dit kost ongeveer twintig minuten per week. Dagelijks testen heeft weinig zin, AI-antwoorden veranderen niet zo snel dat dat extra inzicht oplevert."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Hoe filter ik AI-verkeer in Google Analytics?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Maak een segment of filter op de bekende AI-domeinen als referrer: chat.openai.com, perplexity.ai, gemini.google.com en bing.com (voor Copilot). Voeg ze samen in een aangepaste rapportage. Houd er rekening mee dat AI-engines niet altijd een referrer doorgeven, dus dit is een ondergrens, geen totaal."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Wat doe ik als mijn merk niet wordt genoemd in AI-antwoorden?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Eerst documenteer welke domeinen wel worden genoemd voor jouw kernvragen. Dan analyseer je waarom. Hebben die pagina's het antwoord vooraan, een sterke FAQ, recentere data dan jij. Daarna pas je je eigen pagina's aan op die elementen. Niet zichtbaar zijn is bijna altijd content-gerelateerd, niet techniek-gerelateerd."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Wanneer is een betaalde tool zoals AthenaHQ of Profound de moeite waard?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Als je honderden vragen wilt monitoren, meerdere talen wilt bestrijken of dagelijkse rapportage nodig hebt voor een team, schaal je sneller met een betaald platform. Voor de meeste MKB-bedrijven met tien tot vijftig kernvragen volstaat handmatig werk in het begin. Schaal je voorbij die grens, dan begint een tool zichzelf terug te verdienen."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Hoe lang duurt het voor mijn tracking-baseline betrouwbaar wordt?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Reken op acht tot twaalf weken consistent meten voordat je trends ziet. Een enkele week zegt weinig, omdat AI-antwoorden ruis hebben. Pas bij een derde tot een halve maand consistent meten kun je beweging duiden. Geduld in de eerste fase voorkomt dat je op valse signalen reageert."
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
                            { "@type": "ListItem", "position": 4, "name": "AI-verwijzingen tracken zonder dure tools", "item": "https://www.empowers.nl/blogs/geo/ai-verwijzingen-tracken-zonder-dure-tools" }
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
                        <span className="text-primary truncate">AI-verwijzingen tracken</span>
                    </nav>

                    <header className="mb-16">
                        <div className="inline-block px-3 py-1 bg-accent/10 text-accent font-mono text-xs uppercase tracking-widest rounded-full mb-6">
                            GEO
                        </div>
                        <h1 className="font-sans font-bold text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight mb-8">
                            Hoe track je AI-verwijzingen zonder dure tools?
                        </h1>
                        <div className="flex flex-wrap items-center gap-6 text-sm font-sans text-primary/60 border-y border-primary/10 py-6">
                            <div className="flex items-center gap-2"><User className="w-4 h-4" /><span>Empowers Redactie</span></div>
                            <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>9 mei 2026</span></div>
                            <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>8 minuten leestijd</span></div>
                        </div>
                    </header>

                    <figure className="w-full h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden mb-16 relative bg-primary">
                        <div className="absolute inset-0 bg-[url('/images/blogs/ai-verwijzingen-tracken-zonder-dure-tools.jpg')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </figure>

                    <div className="prose prose-lg max-w-none prose-headings:text-primary prose-headings:font-bold prose-a:text-accent prose-a:underline hover:prose-a:text-accent/80">
                        <p className="text-xl leading-relaxed text-primary/80 font-medium mb-6">
                            AI-tracking tools kosten al snel 200 tot 500 euro per maand. Voor veel MKB-bedrijven is dat zonde. Het grootste deel van de inzichten haal je met gratis bronnen plus dertig minuten werk per week. Hieronder een methode die werkt zonder abonnement, plus het moment waarop een betaalde tool wel logisch wordt.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Waarom je dit zelf kunt doen</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Betaalde tools beloven een dashboard met dagelijkse rapportages over honderden vragen. Mooi, maar voor de meeste bedrijven overkill. Wat je werkelijk wilt weten is simpel: wordt mijn merk genoemd voor de tien tot vijftien vragen die er voor mijn doelgroep echt toe doen, en wordt dat over de tijd beter of slechter.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Dat antwoord haal je uit een spreadsheet, een handmatige weektest en je bestaande analytics-tools. Geen dashboard, wel een betrouwbare trendlijn binnen acht tot twaalf weken.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Stap een. Maak een query-lijst</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Begin met de vragen waar je gevonden wilt worden. Niet zoekwoorden, maar zinnen zoals een mens ze typt of inspreekt. Tien tot twintig vragen is genoeg voor de start. Verdeel ze over je hoofdcategorieen.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Voor een marketingbureau zijn het bijvoorbeeld vragen als "wat kost een Google Ads campagne", "welk marketingbureau in Nederland is goed voor MKB", "hoe lang duurt SEO". Voor een webshop "welk merk maakt de duurzaamste kinderkleren" of "waar koop je biologische schoonmaakmiddelen". Specifiek genoeg om te weten of je passt, breed genoeg om volume te raken.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Stap twee. Wekelijkse handmatige test</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Plan elke week 30 minuten in. Open ChatGPT, Perplexity en Google Gemini in drie tabs. Typ je vragen letterlijk en log per vraag drie dingen. Wordt jouw domein genoemd. Welke andere domeinen worden genoemd. Welk citaat geeft de AI uit jouw site (als je geciteerd wordt).
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Deze data zet je in een spreadsheet met kolommen voor week, vraag, AI-engine en citatie-status. Na vier weken zie je een patroon. Na acht weken kun je interventies meten. Belangrijk: gebruik incognito of een gescheiden browserprofiel zodat eerdere chat-sessies je resultaten niet biasen.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een tip uit de praktijk: laat dezelfde persoon de tests doen, of stuur een gestandaardiseerde instructie. Anders meet je verschillen tussen testers in plaats van veranderingen in AI-zichtbaarheid.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Stap drie. Branded zoekvolume in Google Search Console</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Open Google Search Console en filter op zoekopdrachten die je merknaam bevatten. Zet de tijdlijn op de laatste drie maanden. Stijgt het volume terwijl je algemeen organisch verkeer gelijk blijft of licht daalt, dan is dat een sterk signaal dat AI-engines je vaker noemen. Mensen zien een AI-antwoord, herkennen je merk en zoeken erop in Google.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Branded search-volume is de meest betrouwbare indirecte indicator van AI-zichtbaarheid. Het is gratis, dagelijks bijgewerkt en al beschikbaar voor elke site die in GSC staat. Wie deze data nog niet bekijkt, mist het belangrijkste signaal.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Stap vier. Filter AI-verkeer in je analytics</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            In Google Analytics 4 maak je een aangepast segment dat verkeer toont vanuit AI-domeinen. De referrers die je toevoegt: chat.openai.com, perplexity.ai, gemini.google.com en bing.com voor Microsoft Copilot. Voeg ook de browsers toe die door AI-clients worden gebruikt als die zich identificeren.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Dit segment toont een ondergrens, geen totaal. AI-engines geven niet altijd een referrer mee, en voice-zoekopdrachten registreren vaak helemaal niet. Toch zie je dan zichtbare beweging als het segment groeit. Voor het diepere meet-werk staat onze blog over <Link to="/blogs/tracking/utm-parameters-gebruiken-alle-marketingkanalen" className="text-accent hover:underline">UTM-parameters gebruiken voor alle marketingkanalen</Link> erop hoe je dit verfijnt.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Stap vijf. Direct verkeer als bonusindicator</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Direct verkeer naar je homepage is bijna nooit echt direct. Vaak is het iemand die je merk ergens zag, je naam onthield en hem later intypte in de URL-balk. Wanneer je AI-zichtbaarheid groeit, stijgt direct verkeer doorgaans mee. Geen perfecte metric, wel een aanvullend signaal naast de andere drie.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Combineer alle vier de bronnen in een wekelijks dashboard. Een eenvoudige Google Sheets met vier tabs werkt prima. Hoogtepunten markeren in groen, dalingen in rood. Dat is het hele instrument.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wanneer een betaalde tool wel zin heeft</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Op een gegeven moment loop je tegen de grenzen van handmatig werk aan. Vraag je je af of een tool zin heeft, kijk naar drie criteria. Heb je meer dan vijftig kernvragen die je wekelijks wilt monitoren. Werk je in meerdere talen of landen tegelijk. Heb je een team dat dagelijks rapportage wil zien zonder zelf te testen.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Klopt twee van de drie, dan begint een tool als AthenaHQ of Profound zichzelf terug te verdienen. Niet eerder. Veel bedrijven kopen te vroeg een tool en laten de meeste features ongebruikt. Eerst handmatig de discipline opbouwen, dan automatiseren.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat je deze week kunt opzetten</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Maandag. Maak je query-lijst van vijftien vragen.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Dinsdag. Open ChatGPT en Perplexity en doe je eerste handmatige test, log in een spreadsheet.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Woensdag. Ga naar Google Search Console en zet branded zoekvolume vast als baseline.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Donderdag. Maak het AI-segment in Google Analytics 4. Voor diepere meting kun je dit combineren met de aanpak uit onze gids over <Link to="/blogs/tracking/marketing-tracking-conversies-meten" className="text-accent hover:underline">marketing tracking en conversies meten</Link>.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Vrijdag. Zet alles samen in een wekelijks dashboard. Je hebt nu een meet-systeem dat acht weken later betrouwbaar is.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wanneer je hulp wilt</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een meet-systeem opzetten kun je zelf. Een team begeleiden om er wekelijks naar te kijken, op te treden bij dalingen en de inzichten te vertalen naar contentbeslissingen, vraagt om meer ervaring. Daar kan een specialist helpen om het meet-werk te koppelen aan concrete acties.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Wil je weten welke dertig vragen voor jouw bedrijf het meest opleveren om wekelijks te monitoren? Plan een vrijblijvend gesprek via onze <Link to="/contact" className="text-accent hover:underline">contactpagina</Link>. We bouwen samen je query-lijst en eerste baseline-dashboard.
                        </p>
                    </div>

                    <section className="mt-16 pt-12 border-t border-primary/10">
                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Veelgestelde vragen</h2>
                        <div className="space-y-6 not-prose">
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Kan ik AI-verwijzingen echt tracken zonder betaalde tools?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Ja. Je krijgt geen real-time dashboard, maar wel een betrouwbare baseline. Combineer drie gratis bronnen: Google Search Console voor branded zoekvolume, een handmatige weeklijkse query-test in ChatGPT en Perplexity, en je analytics voor direct verkeer. Vastgelegd in een simpele spreadsheet zie je binnen acht weken het patroon.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Welke metrics laten AI-zichtbaarheid betrouwbaar zien?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Branded search-volume in Google Search Console (mensen typen jouw merknaam na een AI-antwoord), direct verkeer naar je homepage, citatie-percentage uit handmatige tests in AI-engines, en referral verkeer vanuit chat.openai.com en andere AI-domeinen. Geen enkele metric staat alleen, maar samen geven ze een duidelijk beeld.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoe vaak moet ik handmatig testen in ChatGPT en Perplexity?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Een keer per week is genoeg om beweging te zien. Test elke week dezelfde tien tot vijftien kernvragen en log per vraag of jouw domein wordt genoemd. Dit kost ongeveer twintig minuten per week. Dagelijks testen heeft weinig zin, AI-antwoorden veranderen niet zo snel dat dat extra inzicht oplevert.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoe filter ik AI-verkeer in Google Analytics?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Maak een segment of filter op de bekende AI-domeinen als referrer: chat.openai.com, perplexity.ai, gemini.google.com en bing.com (voor Copilot). Voeg ze samen in een aangepaste rapportage. Houd er rekening mee dat AI-engines niet altijd een referrer doorgeven, dus dit is een ondergrens, geen totaal.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat doe ik als mijn merk niet wordt genoemd in AI-antwoorden?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Eerst documenteer welke domeinen wel worden genoemd voor jouw kernvragen. Dan analyseer je waarom. Hebben die pagina's het antwoord vooraan, een sterke FAQ, recentere data dan jij. Daarna pas je je eigen pagina's aan op die elementen. Niet zichtbaar zijn is bijna altijd content-gerelateerd, niet techniek-gerelateerd.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wanneer is een betaalde tool zoals AthenaHQ of Profound de moeite waard?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Als je honderden vragen wilt monitoren, meerdere talen wilt bestrijken of dagelijkse rapportage nodig hebt voor een team, schaal je sneller met een betaald platform. Voor de meeste MKB-bedrijven met tien tot vijftig kernvragen volstaat handmatig werk in het begin. Schaal je voorbij die grens, dan begint een tool zichzelf terug te verdienen.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoe lang duurt het voor mijn tracking-baseline betrouwbaar wordt?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Reken op acht tot twaalf weken consistent meten voordat je trends ziet. Een enkele week zegt weinig, omdat AI-antwoorden ruis hebben. Pas bij een derde tot een halve maand consistent meten kun je beweging duiden. Geduld in de eerste fase voorkomt dat je op valse signalen reageert.</p>
                            </div>
                        </div>
                    </section>

                    <section className="mt-16 pt-12 border-t border-primary/10">
                        <h3 className="text-xl font-bold text-primary mb-6">Lees ook</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <Link to="/blogs/geo/zichtbaar-worden-ai-zoekmachines" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Zichtbaar in AI-zoekmachines</h3>
                                <p className="text-primary/60 text-sm">Van audit naar herschrijven naar autoriteit buiten je eigen site.</p>
                            </Link>
                            <Link to="/blogs/geo/contentonderdelen-zorgen-meer-ai-citaties" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Contentonderdelen voor AI-citaties</h3>
                                <p className="text-primary/60 text-sm">Welke pagina-elementen AI-engines het vaakst gebruiken.</p>
                            </Link>
                            <Link to="/blogs/tracking/marketing-tracking-conversies-meten" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Marketing tracking en conversies meten</h3>
                                <p className="text-primary/60 text-sm">Diepere uitleg over UTM, conversies en attributie.</p>
                            </Link>
                        </div>
                    </section>

                </div>
            </article>

            <section className="w-full pb-32 px-6">
                <div className="max-w-4xl mx-auto bg-primary rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
                    <h2 className="relative z-10 font-drama italic text-background text-3xl sm:text-4xl md:text-5xl mb-6">
                        Tracking opzetten dat werkt?
                    </h2>
                    <p className="relative z-10 font-sans text-background/70 text-lg mb-10 max-w-xl mx-auto">
                        We bouwen een meet-systeem dat AI-zichtbaarheid meetbaar maakt zonder dure tools. Inclusief query-lijst en wekelijks dashboard.
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
