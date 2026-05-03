import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ChevronRight, User } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function BlogPostMarketingUitbestedenMkbZelfDoen() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen selection:bg-accent/30 selection:text-dark flex flex-col bg-background">
            <Helmet>
                <title>Waarom MKB-bedrijven hun marketing uitbesteden (en wanneer je het beter zelf doet) | Empowers</title>
                <meta name="description" content="Wanneer is marketing uitbesteden de slimste keuze voor MKB en wanneer doe je het beter zelf? Eerlijke beslishulp met herkenbare situaties en valkuilen." />
                <link rel="canonical" href="https://www.empowers.nl/blogs/algemeen/marketing-uitbesteden-mkb-zelf-doen" />
                <meta property="og:title" content="Waarom MKB-bedrijven hun marketing uitbesteden (en wanneer je het beter zelf doet)" />
                <meta property="og:description" content="Eerlijke beslishulp voor MKB: wanneer wel uitbesteden en wanneer is zelf doen slimmer?" />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://www.empowers.nl/blogs/algemeen/marketing-uitbesteden-mkb-zelf-doen" />
                <meta property="og:image" content="https://www.empowers.nl/images/blogs/marketing-uitbesteden-mkb-zelf-doen.jpg" />
                <meta property="article:published_time" content="2026-05-03" />
                <meta property="article:author" content="Empowers" />
                <meta property="article:section" content="Algemeen" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Waarom MKB-bedrijven hun marketing uitbesteden (en wanneer je het beter zelf doet)" />
                <meta name="twitter:description" content="Eerlijke beslishulp voor MKB: wanneer wel uitbesteden en wanneer is zelf doen slimmer?" />

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Article",
                        "headline": "Waarom MKB-bedrijven hun marketing uitbesteden (en wanneer je het beter zelf doet)",
                        "description": "Wanneer is marketing uitbesteden de slimste keuze voor MKB en wanneer doe je het beter zelf? Eerlijke beslishulp met herkenbare situaties en valkuilen.",
                        "image": "https://www.empowers.nl/images/blogs/marketing-uitbesteden-mkb-zelf-doen.jpg",
                        "datePublished": "2026-05-03T15:00:00+02:00",
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
                                    "name": "Wanneer is het slim om marketing uit te besteden?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Uitbesteden is slim als je tempo wilt maken, jouw eigen team al vol zit, je specifieke expertise mist (zoals Google Ads, SEO of Meta Ads) of als groei stagneert ondanks dat je zelf hard werkt. Wie minder dan 4 tot 6 uur per week aan marketing kan besteden, levert structureel onder."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Wanneer doe je marketing beter zelf?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Zelf doen past als je tijd hebt, snel leert, de uitvoering volhoudt en jouw aanbod nog niet stabiel genoeg is om aan een externe partij over te dragen. Voor bedrijven met minder dan 100.000 euro omzet of in een proof-of-concept fase is zelf doen vaak rendabeler dan uitbesteden."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Wat kost marketing uitbesteden voor MKB in Nederland?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Bureaukosten in Nederland liggen tussen 750 en 5.000 euro per maand exclusief mediabudget, met uurtarieven tussen 80 en 200 euro per uur. Kleine MKB met omzet onder 250.000 euro zit doorgaans op 500 tot 1.500 euro bureaukosten, groeiende MKB op 1.500 tot 3.500 euro, gevestigde bedrijven op 3.500 tot 10.000 euro."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Is uitbesteden goedkoper dan een marketeer in dienst?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Voor de meeste MKB-bedrijven is uitbesteden 30 tot 50 procent goedkoper dan een fulltime marketeer in dienst. Een fulltime marketeer kost 40.000 tot 60.000 euro per jaar plus werkgeverslasten, plus tools en trainingen. Een bureau levert vaak meerdere specialismes voor minder geld."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Wanneer is de samenwerking met een bureau klaar?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "De samenwerking is klaar zodra resultaten 3 maanden achter elkaar verslechteren zonder uitleg, communicatie stroef wordt of het bureau geen ruimte heeft voor jouw groeifase. Ook bij interne opbouw van een marketingteam wordt het bureau vaak afgebouwd tot specifieke specialismes."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Hoe lang duurt het voordat een bureau resultaat oplevert?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Voor Google Ads en social ads zie je binnen 4 tot 8 weken eerste resultaten. Voor SEO reken je op 3 tot 6 maanden. Voor email marketing 8 tot 12 weken voor merkbare opbouw. Bureaus die binnen 4 weken wonderen beloven, verkopen lucht."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Welke valkuilen heeft uitbesteden voor MKB?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "De grootste valkuil is een bureau kiezen dat niet past bij jouw schaalfase. Kleine MKB krijgt vaak de junior van een groot bureau, terwijl grotere MKB een specialist nodig heeft die ontbreekt bij een eenmansbureau. Andere valkuilen zijn geen eigenaarschap over data, vage rapportages en een contract dat je gevangen houdt."
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
                            { "@type": "ListItem", "position": 3, "name": "Algemeen", "item": "https://www.empowers.nl/blogs/algemeen" },
                            { "@type": "ListItem", "position": 4, "name": "Marketing uitbesteden MKB", "item": "https://www.empowers.nl/blogs/algemeen/marketing-uitbesteden-mkb-zelf-doen" }
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
                        <Link to="/blogs/algemeen" className="hover:text-accent transition-colors">Algemeen</Link>
                        <ChevronRight className="w-3 h-3" />
                        <span className="text-primary truncate">Marketing uitbesteden MKB</span>
                    </nav>

                    <header className="mb-16">
                        <div className="inline-block px-3 py-1 bg-accent/10 text-accent font-mono text-xs uppercase tracking-widest rounded-full mb-6">
                            Algemeen
                        </div>
                        <h1 className="font-sans font-bold text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight mb-8">
                            Waarom MKB-bedrijven hun marketing uitbesteden (en wanneer je het beter zelf doet)
                        </h1>
                        <div className="flex flex-wrap items-center gap-6 text-sm font-sans text-primary/60 border-y border-primary/10 py-6">
                            <div className="flex items-center gap-2"><User className="w-4 h-4" /><span>Empowers Redactie</span></div>
                            <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>3 mei 2026</span></div>
                            <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>9 minuten leestijd</span></div>
                        </div>
                    </header>

                    <figure className="w-full h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden mb-16 relative bg-primary">
                        <div className="absolute inset-0 bg-[url('/images/blogs/marketing-uitbesteden-mkb-zelf-doen.jpg')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </figure>

                    <div className="prose prose-lg max-w-none prose-headings:text-primary prose-headings:font-bold prose-a:text-accent prose-a:underline hover:prose-a:text-accent/80">
                        <p className="text-xl leading-relaxed text-primary/80 font-medium mb-6">
                            Bij veel MKB-bedrijven is de directeur ook de marketingafdeling. Tussen klanten bedienen, offertes maken en operationeel sturen door wordt 's avonds nog snel een Instagram-post of Google Ad geregeld. Dat werkt een tijdje. Tot het niet meer werkt. In deze blog lees je herkenbare situaties die wijzen op uitbesteden, wanneer zelf doen juist slimmer is en welke kosten realistisch zijn.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Waarom MKB-bedrijven uitbesteden</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De drie meest gehoorde redenen zijn tijd, kennis en consistentie. Tijd is de duidelijkste: een MKB-eigenaar werkt 50 tot 60 uur in de zaak en houdt geen 8 uur per week over voor diepgaande marketing-uitvoering. Kennis is subtieler: Google Ads, SEO en Meta Ads zijn afzonderlijke vakgebieden die continu veranderen. Wat 6 maanden geleden werkte, werkt vandaag niet meer hetzelfde.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Consistentie is de stilste killer. Een MKB-eigenaar die druk is, slaat een week over op LinkedIn, vergeet de email-nieuwsbrief en stelt het uit-blog-schrijven uit. Marketing werkt op herhaling. Wie 80 procent van de weken iets doet en 20 procent stilvalt, levert 60 procent rendement van wie elke week levert. Een bureau zorgt voor uitvoering ook in jouw drukke weken.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een vierde reden komt vaak pas later: data en attributie. Goede marketing meet wat werkt en stuurt bij. Voor de meeste MKB-eigenaren is een dashboard met ROAS, CPA en attributie-modellen geen prioriteit. Een bureau brengt dat structureel mee. Lees onze blog over <Link to="/blogs/tracking/attribution-modellen-uitgelegd-last-click" className="text-accent hover:underline">attributie-modellen</Link> voor het hoe.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Drie herkenbare signalen om uit te besteden</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Signaal 1: jouw groei is gestopt ondanks dat je hard werkt aan marketing. Je investeert tijd in social posts, een Google Ads-campagne of nieuwsbrieven, maar leadvolume of omzet stagneert. Dat wijst niet op luiheid maar op een aanpak die te oppervlakkig of verouderd is. Een specialist die elke week 30 of 40 uur in dit vak zit, ziet patronen die jij niet ziet.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Signaal 2: je sluit je laptop's avonds met het gevoel dat je achter loopt. Marketing zit op de "moet nog gebeuren"-stapel, niet op de "is af"-stapel. Bij MKB-eigenaren met 50+ uur werkweken is uitbesteden niet luxueus, het is operationeel noodzakelijk. Jouw uren zijn waardevoller op klantcontact en strategie dan op de 14e landingspagina-test.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Signaal 3: concurrenten lopen je voorbij online. Ze ranken hoger op zoekwoorden waar jij ook op wilt staan, hun social-content is duidelijk professioneler, hun ads draaien vaker en hun reviews bouwen sneller op. Dat is geen toeval. Het wijst op een tegenstander met een team of bureau dat wekelijks levert. Wie zelf op een 4-uurs-budget per week wil concurreren, verliest over tijd.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Drie situaties waarin zelf doen slimmer is</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Situatie 1: jouw aanbod is nog niet stabiel. Een nieuw product, een veranderende dienst of een markt die je nog uitprobeert, leent zich slecht voor uitbesteden. Een bureau kan pas leveren als de boodschap, doelgroep en propositie staan. In de proof-of-concept-fase ben jij zelf de slimste marketeer omdat je elke dag met klanten praat. Eerst stabiel, dan uitbesteden.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Situatie 2: jouw budget is te klein voor een serieus bureau. Onder een totaalbudget van 1.500 euro per maand voor mediabudget plus uitvoering kom je vaak bij junioren of bij bureaus die jou tussen grotere klanten door bedienen. Op die schaal werkt zelf doen, eventueel met losse uren-inkoop bij een freelancer voor specifieke vraagstukken, doorgaans rendabeler.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Situatie 3: jouw team heeft de skills en tijd. Sommige MKB-bedrijven hebben een marketing-medewerker, een content-creator of een eigenaar die affiniteit heeft met online marketing. In die gevallen is een bureau eerder ondersteunend (denk aan SEO-audits, advertentie-strategie) dan uitvoerend. Voor de afweging tussen full-service en specialist, lees onze blog over <Link to="/blogs/algemeen/full-service-marketing-bureau-specialist" className="text-accent hover:underline">full-service vs specialist bureau</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat kost uitbesteden voor MKB?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Bureaukosten in Nederland liggen in 2026 doorgaans tussen 750 en 5.000 euro per maand exclusief mediabudget. Uurtarieven bewegen tussen 80 en 200 euro per uur, afhankelijk van seniority en specialisatie. Voor structureel beheer werken de meeste bureaus met retainers in plaats van uurprijzen.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Per bedrijfsgrootte komt dat ongeveer hierop neer. Kleine MKB (omzet onder 250.000 euro): 1 kanaal, 500 tot 1.500 euro bureaukosten per maand. Groeiende MKB (250.000 tot 1 miljoen euro omzet): 2 tot 3 kanalen, 1.500 tot 3.500 euro bureaukosten. Gevestigde MKB (boven 1 miljoen omzet): full-service aanpak, 3.500 tot 10.000 euro bureaukosten. Daar bovenop komt mediabudget van 1.000 tot 10.000+ euro per maand afhankelijk van kanaal en branche.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Voor de basis van wat je betaalt voor specifiek SEA-beheer, lees onze blog over <Link to="/blogs/google-ads/sea-uitbesteden-weten-voordat-kiest" className="text-accent hover:underline">SEA uitbesteden</Link>. Voor B2B-specifieke afwegingen helpt onze blog over <Link to="/blogs/algemeen/b2b-marketing-bureau-vs-zelf" className="text-accent hover:underline">B2B-marketingbureau vs zelf doen</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Bureau of marketeer in dienst?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een fulltime medior marketeer in dienst kost in Nederland 40.000 tot 60.000 euro bruto per jaar. Met werkgeverslasten en tools kom je op 55.000 tot 80.000 euro all-in. Voor de meeste MKB-bedrijven onder 1 miljoen omzet is dat te zwaar voor 1 specialisme. Je hebt iemand die Google Ads, SEO, Meta én email moet kunnen.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Voor het meeste MKB werkt een bureau 30 tot 50 procent goedkoper dan iemand in dienst, omdat je meerdere specialismes inkoopt voor minder dan een fulltime salaris. Pas vanaf circa 2 miljoen euro omzet en een marketingbudget boven 8.000 euro per maand begint een marketeer in dienst (vaak met bureau-ondersteuning) financieel te kloppen.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe lang voor je resultaat ziet?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Niet elk kanaal levert in dezelfde tijd. Voor Google Ads en Meta Ads zie je binnen 4 tot 8 weken eerste leesbare cijfers. Voor SEO reken je op 3 tot 6 maanden voor de eerste merkbare ranking-verschuivingen en 9 tot 18 maanden voor structurele groei. Email marketing levert binnen 8 tot 12 weken een merkbare opbouw mits jouw lijst groeit.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Bureaus die binnen 4 weken wonderen beloven, verkopen lucht. Vraag tijdens kennismakingsgesprekken juist wat ze in maand 1, 2 en 3 zouden veranderen en welke realistische verwachtingen daarbij horen. Eerlijke bureaus zeggen "in maand 1 stabiliseren we, in maand 2 testen we, in maand 3 zien we trend". Verkoperige bureaus beloven een ROAS van 8 in week 6.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat moet je vóór een keuze regelen?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Vóór je een bureau zoekt, regel drie dingen. Eén: zorg dat jouw Google Ads, Meta-pixel en analytics op jouw eigen accounts staan, niet op die van een ex-bureau. Eigenaarschap voorkomt gijzeling van data later. Twee: schrijf in 1 alinea op wie jouw klant is, wat jij verkoopt en wat een goede klant gemiddeld waard is. Zonder die info kan een bureau niet eerlijk inschatten of jouw aanbod past bij hun aanpak.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Drie: bepaal jouw realistische maandbudget inclusief mediabudget en bureaukosten. Een bureau kan pas een werkbaar plan maken op een budget dat past bij jouw markt. Onder de 1.500 euro per maand totaalbudget kun je beter zelf doen of starten met 1 specifiek vraagstuk in plaats van een full-service samenwerking. Voor concrete keuze-vragen, lees onze blog over <Link to="/blogs/algemeen/kies-juiste-online-marketing-bureau" className="text-accent hover:underline">het juiste bureau kiezen</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wanneer evalueer je een bureau?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Plan elke 3 maanden een evaluatie. Vraag niet alleen wat goed ging, maar ook wat tegenviel en wat ze in het komende kwartaal anders gaan doen. Een bureau dat alleen positieve verhalen vertelt, verbergt patronen die jou geld kosten. Een goed bureau weet welke campagne ondermaats presteerde en heeft een plan om bij te sturen.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Switch als drie maanden achter elkaar KPI's verslechteren zonder uitleg, communicatie stroef wordt of jouw groeifase niet meer past bij wat het bureau aankan. Lees onze blog over <Link to="/blogs/google-ads/sea-bureau-vergelijken-resultaten-rapportages" className="text-accent hover:underline">SEA bureau vergelijken</Link> voor concrete evaluatiepunten.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">De keuze: zelf, freelance of bureau?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Tot een totaalbudget van 1.500 euro per maand is zelf doen vaak rendabeler, eventueel met losse freelance-hulp voor specifieke vraagstukken. Tussen 1.500 en 4.000 euro werken kleinere bureaus of senior freelancers het best. Boven 4.000 euro per maand verdient een full-service bureau zichzelf doorgaans terug. Boven 8.000 euro mediabudget plus 4.000 euro bureaukosten begint een eigen marketeer in dienst (met bureau-ondersteuning) financieel te kloppen.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Wil je weten welke vorm past bij jouw schaalfase, jouw aanbod en jouw budget? Plan een gratis gesprek via onze <Link to="/contact" className="text-accent hover:underline">contactpagina</Link>. We vertellen eerlijk of uitbesteden voor jou de slimste keuze is, of dat zelf doen op dit moment beter past.
                        </p>
                    </div>

                    <section className="mt-16 pt-12 border-t border-primary/10">
                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Veelgestelde vragen</h2>
                        <div className="space-y-6 not-prose">
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wanneer is het slim om marketing uit te besteden?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Uitbesteden is slim als je tempo wilt maken, jouw eigen team al vol zit, je expertise mist of als groei stagneert ondanks dat je zelf hard werkt. Wie minder dan 4 tot 6 uur per week aan marketing kan besteden, levert structureel onder.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wanneer doe je marketing beter zelf?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Zelf doen past als je tijd hebt, snel leert en jouw aanbod nog niet stabiel is om aan een externe partij over te dragen. Voor bedrijven met minder dan 100.000 euro omzet of in proof-of-concept fase is zelf doen vaak rendabeler.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat kost marketing uitbesteden voor MKB in Nederland?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Bureaukosten liggen tussen 750 en 5.000 euro per maand exclusief mediabudget, met uurtarieven van 80 tot 200 euro. Kleine MKB op 500 tot 1.500 euro, groeiende MKB op 1.500 tot 3.500 euro, gevestigde bedrijven op 3.500 tot 10.000 euro.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Is uitbesteden goedkoper dan een marketeer in dienst?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Voor de meeste MKB-bedrijven 30 tot 50 procent goedkoper. Een fulltime marketeer kost 40.000 tot 60.000 euro per jaar plus werkgeverslasten en tools. Een bureau levert vaak meerdere specialismes voor minder geld.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wanneer is de samenwerking met een bureau klaar?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Zodra resultaten 3 maanden achter elkaar verslechteren zonder uitleg, communicatie stroef wordt of het bureau geen ruimte heeft voor jouw groeifase. Ook bij interne opbouw van een marketingteam wordt het bureau vaak afgebouwd tot specifieke specialismes.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoe lang duurt het voordat een bureau resultaat oplevert?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Voor Google Ads en social ads zie je binnen 4 tot 8 weken eerste resultaten. Voor SEO 3 tot 6 maanden. Voor email marketing 8 tot 12 weken. Bureaus die binnen 4 weken wonderen beloven, verkopen lucht.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Welke valkuilen heeft uitbesteden voor MKB?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Een bureau kiezen dat niet past bij jouw schaalfase. Kleine MKB krijgt vaak een junior, grotere MKB heeft een specialist nodig die ontbreekt bij een eenmansbureau. Andere valkuilen: geen eigenaarschap over data, vage rapportages en lock-in contracten.</p>
                            </div>
                        </div>
                    </section>

                    <section className="mt-16 pt-12 border-t border-primary/10">
                        <h3 className="text-xl font-bold text-primary mb-6">Lees ook</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <Link to="/blogs/algemeen/online-marketing-mkb-5-kanalen-werken-2026" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">5 kanalen die werken voor MKB in 2026</h3>
                                <p className="text-primary/60 text-sm">Welke kanalen leveren MKB het meeste op en welke kun je beter overslaan?</p>
                            </Link>
                            <Link to="/blogs/algemeen/kies-juiste-online-marketing-bureau" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Het juiste marketingbureau kiezen</h3>
                                <p className="text-primary/60 text-sm">Welke vragen stel je voor de keuze en waar herken je een sterk bureau aan?</p>
                            </Link>
                            <Link to="/blogs/algemeen/full-service-marketing-bureau-specialist" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Full-service of specialist?</h3>
                                <p className="text-primary/60 text-sm">Wanneer is een breed bureau slimmer en wanneer kies je voor een specialist?</p>
                            </Link>
                        </div>
                    </section>
                </div>
            </article>

            <section className="w-full pb-32 px-6">
                <div className="max-w-4xl mx-auto bg-primary rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
                    <h2 className="relative z-10 font-drama italic text-background text-3xl sm:text-4xl md:text-5xl mb-6">Uitbesteden of zelf doen?</h2>
                    <p className="relative z-10 font-sans text-background/70 text-lg mb-10 max-w-xl mx-auto">We vertellen eerlijk of uitbesteden voor jouw schaalfase de slimste keuze is, of dat zelf doen op dit moment beter past. Geen verkoopgesprek, wel duidelijkheid.</p>
                    <Link to="/contact" className="relative z-10 btn-magnetic inline-flex items-center justify-center bg-accent text-background font-sans font-bold text-lg px-10 py-4 rounded-[2rem] hover:bg-accent/90 transition-colors">Neem contact op</Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
