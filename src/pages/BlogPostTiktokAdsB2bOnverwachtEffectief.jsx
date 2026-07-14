import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ChevronRight, User } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function BlogPostTiktokAdsB2bOnverwachtEffectief() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen selection:bg-accent/30 selection:text-dark flex flex-col bg-background">
            <Helmet>
                <title>TikTok Ads voor B2B: onverwacht effectief (en hoe je het aanpakt) | Empowers</title>
                <meta name="description" content="TikTok voor B2B klinkt vreemd, maar werkt. Lees waarom decision makers tegenwoordig actief op TikTok zitten en hoe je B2B-campagnes opzet die echt leads opleveren." />
                <link rel="canonical" href="https://www.empowers.nl/blogs/social-ads/tiktok-ads-b2b-onverwacht-effectief" />
                <meta property="og:title" content="TikTok Ads voor B2B: onverwacht effectief" />
                <meta property="og:description" content="Waarom B2B-decision-makers op TikTok zitten en hoe je leadgeneratie via TikTok Ads opzet." />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://www.empowers.nl/blogs/social-ads/tiktok-ads-b2b-onverwacht-effectief" />
                <meta property="og:image" content="https://www.empowers.nl/images/blogs/tiktok-ads-b2b-onverwacht-effectief.jpg" />
                <meta property="article:published_time" content="2026-05-08T12:00:00+02:00" />
                <meta property="article:author" content="Empowers" />
                <meta property="article:section" content="Social Ads" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="TikTok Ads voor B2B: zo werkt het echt" />
                <meta name="twitter:description" content="Decision makers, brand-recall en leadgen op TikTok in 2026." />

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Article",
                        "headline": "TikTok Ads voor B2B: onverwacht effectief",
                        "description": "Waarom B2B-decision-makers op TikTok zitten en hoe je B2B-campagnes opzet die leads opleveren.",
                        "image": "https://www.empowers.nl/images/blogs/tiktok-ads-b2b-onverwacht-effectief.jpg",
                        "datePublished": "2026-05-08T12:00:00+02:00",
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
                                    "name": "Werkt TikTok echt voor B2B?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Ja, voor het juiste type B2B. Vooral voor SaaS, professional services en producten waar emotionele branding telt. Het werkt minder voor heel niche-industrial of complexe enterprise-software waar de besluitvorming volledig binnen ingekochte buyer groups loopt. Maar de groep B2B-bedrijven die wel kan landen op TikTok is groter dan de meeste marketeers denken."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Welke B2B-doelen passen bij TikTok Ads?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Brand-awareness, demand generation en thought leadership werken het sterkst. Pure leadgeneratie kan, maar wordt vaak duurder dan via LinkedIn. De magie van TikTok zit in de fase voordat iemand actief gaat zoeken: je merk zaaien op het moment dat decision makers ontspannen scrollen, zodat ze maanden later jouw naam herkennen tijdens een Google Ads-zoektocht."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Hoe target je decision makers op TikTok?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Niet via beroepstargeting (zoals LinkedIn). Wel via interesses (business, productivity, finance) gecombineerd met leeftijd en device-niveau. Aangevuld met custom audiences uit je CRM en lookalikes op je beste klanten. Vergeet de directe job-title-filter en richt je op gedragspatronen die decision makers vertonen op het platform."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Welke creatieve hoek werkt het best voor B2B?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Educatieve content. Niet polished, niet sales-y. Korte uitlegvideo's, 'this is what nobody tells you about'-hoeken, achter-de-schermen-momenten van een founder, klantverhalen in 30 seconden. Authenticiteit weegt zwaar. Een CEO die in zijn auto opneemt presteert vaak beter dan een gepolishte studio-productie van duizend euro."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Wat kost TikTok B2B?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "CPM's voor B2B-content op TikTok lopen doorgaans tussen drie en zeven euro per duizend vertoningen. Dat is fors lager dan LinkedIn waar dezelfde duizend impressies twee tot vijf keer meer kosten. CPL ligt hoger dan een directe LinkedIn-leadcampagne, maar je betaalt voor brand-impact die op LinkedIn nooit zo goedkoop binnen te halen is."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Moet ik LinkedIn vervangen door TikTok?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Nee. Combineer ze. LinkedIn voor lower-funnel leadgeneratie en account-based werk waar je precies wie je wilt aanspreken. TikTok voor de fase ervoor: brand-recall opbouwen en in-market komen voordat de buyer aanvankelijk actief gaat zoeken. De ene kanalen versterkt de andere."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Hoe meet je impact van TikTok B2B-campagnes?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Niet alleen via last-click. B2B-funnels lopen weken tot maanden, dus directe attributie onderschat de waarde stelselmatig. Werk met view-through-windows van 7 of 28 dagen, kijk naar branded-search-volume tijdens campagne-vlagen, en hou je lead-quality-score per kanaal bij. Een goed dashboard combineert TikTok-impressies met je CRM-data."
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
                            { "@type": "ListItem", "position": 3, "name": "Social Ads", "item": "https://www.empowers.nl/blogs/social-ads" },
                            { "@type": "ListItem", "position": 4, "name": "TikTok Ads voor B2B", "item": "https://www.empowers.nl/blogs/social-ads/tiktok-ads-b2b-onverwacht-effectief" }
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
                        <span className="text-primary truncate">TikTok Ads voor B2B</span>
                    </nav>

                    <header className="mb-16">
                        <div className="inline-block px-3 py-1 bg-accent/10 text-accent font-mono text-xs uppercase tracking-widest rounded-full mb-6">
                            Social Ads
                        </div>
                        <h1 className="font-sans font-bold text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight mb-8">
                            TikTok Ads voor B2B: onverwacht effectief
                        </h1>
                        <div className="flex flex-wrap items-center gap-6 text-sm font-sans text-primary/60 border-y border-primary/10 py-6">
                            <div className="flex items-center gap-2"><User className="w-4 h-4" /><span>Empowers Redactie</span></div>
                            <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>8 mei 2026</span></div>
                            <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>9 minuten leestijd</span></div>
                        </div>
                    </header>

                    <figure className="w-full h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden mb-16 relative bg-primary">
                        <div className="absolute inset-0 bg-[url('/images/blogs/tiktok-ads-b2b-onverwacht-effectief.jpg')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </figure>

                    <div className="prose prose-lg max-w-none prose-headings:text-primary prose-headings:font-bold prose-a:text-accent prose-a:underline hover:prose-a:text-accent/80">
                        <p className="text-xl leading-relaxed text-primary/80 font-medium mb-6">
                            "TikTok? Wij zijn B2B." Die zin hoor je nog steeds in iedere boardroom. En toch zijn er Nederlandse SaaS-bedrijven die ondertussen meer pipeline genereren via TikTok dan via LinkedIn. Niet omdat ze de blue-collar markt aanspreken, maar omdat decision makers van middelgrote MKB-bedrijven net zo goed scrollen als hun pubers. De vraag is niet of TikTok werkt voor B2B. De vraag is hoe je het aanpakt zodat het werkt.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Decision makers zitten op TikTok (en zoeken er ook)</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            TikTok meldde eind 2025 dat ruim de helft van zijn Nederlandse gebruikers boven de 25 zit, met een groeiende kop boven de 35. Voor B2B-marketeers is dat de demografische piek. Mensen die een team aansturen, een budget beheren, een leverancier kunnen kiezen. Dat ze tussen de boodschappenplanning en het kookreceptje door over je product scrollen, maakt het signaal niet zwakker.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Iets dat veel B2B-marketeers onderschatten: TikTok is voor steeds meer mensen ook een zoekmachine. Ze typen "best CRM for small team" of "alternatief voor Microsoft Teams" niet meer alleen in Google. Ze typen het in TikTok Search. Wat ze daar terugvinden, kleurt hun mentale shortlist voor de moment dat ze later op LinkedIn een aanbieding tegenkomen. Wie daar zichtbaar is, heeft een streepje voor in elke buyer journey die volgt.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Welke B2B-doelen passen bij TikTok</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Niet alle B2B-doelen schalen even goed op TikTok. Wat sterk werkt: brand-awareness, demand generation en thought leadership. De fase voordat iemand actief gaat zoeken. Wat moeilijker werkt: directe leadgeneratie waarbij je in dezelfde sessie van impressie naar formulier wilt komen. Op TikTok is de mood ontspannen. Een offerte aanvragen voelt op dat moment uit de toon.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Dat klinkt als een nadeel, maar het is een verkapt voordeel. De TikTok-impressies wegen zwaar in de fase voordat de buyer in-market komt. Op het moment dat de directeur zes weken later wel actief op zoek gaat, herkent hij jouw merk uit drie verschillende TikTok-momenten. De Google Ads-conversie die daarna komt, krijgt het label "Google" maar werd echt gewonnen door TikTok.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Targeting voor B2B zonder beroepsfilter</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            TikTok kent geen "Marketing Manager" als targetingoptie zoals LinkedIn dat doet. Eerst even slikken voor wie van LinkedIn-precisie houdt. Maar het algoritme heeft genoeg gedragssignaal om decision makers indirect te bereiken. Combineer leeftijd 28 tot 55, interesses zoals business, productivity, leadership of finance, en hou je locatie op Nederlands taalniveau in plaats van postcode. Voeg daar een lookalike op je bestaande klanten aan toe en je zit dichter bij je ideal customer profile dan veel marketeers verwachten.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Custom audiences uit je CRM zijn waardevol. Upload je gewonnen-deals lijst van afgelopen 24 maanden, anonimiseer en match met TikTok. Het algoritme bouwt daar een lookalike op waarvan we vrijwel altijd zien dat hij scherper presteert dan handgemaakte interest-stacks. Dieper inzoomen op deze methodiek staat in onze gids over <Link to="/blogs/social-ads/tiktok-ads-doelgroepen-bereik-precies" className="text-accent hover:underline">TikTok Ads doelgroepen instellen</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Welke creatives werken voor B2B?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Vergeet de hoogglans-productie. Wat op TikTok wint voor B2B is educatief, kort en menselijk. Vier hoeken die we doorgaans zien werken: een CEO die een misvatting in zijn industrie ontkracht, een teamlid dat in 30 seconden uitlegt hoe een product een specifiek probleem oplost, een klantverhaal van 45 seconden, en een achter-de-schermen-moment uit de bouw of beslissing van een product.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Het paradoxale: hoe minder geproduceerd een B2B-video oogt, hoe beter hij vaak presteert. Een directeur die op de fiets terug van kantoor zijn telefoon op een paaltje zet en in een minuut iets uitlegt dat hij die week heeft geleerd, doet het beter dan dezelfde inhoud opgenomen in een studio. De feed beloont realisme, ook in B2B-context. Verzet je niet tegen die werkelijkheid.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Iets dat we steeds zien werken: laat een founder of vakspecialist zelf voor de camera. Externe creators inhuren voor B2B-content levert minder herkenning op. Bij B2B kijken mensen naar wie iets zegt, niet alleen naar wat hij zegt. Dat sluit aan op wat we eerder beschreven over <Link to="/blogs/social-ads/influencer-content-tiktok-ads" className="text-accent hover:underline">influencer content in TikTok Ads</Link>: vertrouwde gezichten winnen.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat kost het?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Bij Nederlandse B2B-campagnes zien we CPM's tussen 3 en 7 euro per duizend impressies. Voor LinkedIn is dat eerder 15 tot 35 euro. Het verschil per duizend mensen die je voor een halve seconde aandacht geven, is bij TikTok dus structureel veel kleiner. Dat verklaart waarom TikTok in de awareness-fase zo'n breekijzer kan zijn.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            CPL daarentegen ligt hoger op TikTok. Een direct ingevuld leadformulier vanuit een TikTok-impressie kost vaker meer dan vanuit een LinkedIn-leadgen-form. Dat is geen rechte vergelijking. De TikTok-lead ergerde zich nog niet, scrollt verder. De LinkedIn-lead was actief op zoek. Niet hetzelfde type lead, niet dezelfde directe value.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe combineer je TikTok en LinkedIn slim?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een werkbare verdeling die we vaak adviseren: 60 tot 70 procent van het B2B-paid-budget op LinkedIn voor lower-funnel leadgen en account-based werk, 20 tot 30 procent op TikTok voor brand-awareness en demand-gen, en de rest op Google Search om bestaande intentie af te vangen. Die mix beweegt afhankelijk van je productprijs en het volwassenheidsniveau van je merk in de markt.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Wat hier vaak misgaat: marketeers vergelijken de twee kanalen 1-op-1 op CPL en concluderen dat TikTok duurder is. Foute meetstaaf. Vergelijk op merkimpact en op de kosten om iemand voor het eerst met je merk in aanraking te brengen. Op die metriek wint TikTok bijna altijd, mits je creatieve materiaal scherp staat.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe meet je effect zonder last-click te overschatten?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            B2B-funnels lopen weken tot maanden. Last-click attribution onderschat structureel kanalen die hoger in de funnel zitten. Voor TikTok B2B is dat funest. Werk daarom met view-through windows van 7 of 28 dagen in je TikTok-rapportage, hou branded-search-volume in Google bij tijdens campagne-pieken, en koppel je CRM-data aan je TikTok-impressie-history.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een eenvoudige proxy: kijk naar het percentage van je nieuwe leads dat in een vragenlijst aangeeft "via TikTok of social media" van je gehoord te hebben. Combineer dat met het totale lead-volume tijdens campagne-vlagen. Stijgt allebei? Dan werkt het, ook al meet je het niet tot op de cent. Dieper graven in attributie-modellen lees je in onze gids over <Link to="/blogs/tracking/attribution-modellen-uitgelegd-last-click" className="text-accent hover:underline">attributiemodellen van last-click naar data-driven</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wanneer is een specialist nodig?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een eerste TikTok B2B-test kun je zelf opzetten als je marketingteam van enige omvang is. Het wordt complexer als je B2B-funnel meerdere accountniveaus en stakeholders kent, je creator-pipeline industrieel wilt opzetten, of je TikTok-spend boven de tienduizend euro per maand groeit. Op die schaal komt er een ander soort planning bij kijken: pipeline-attributie, contentkalender per persona, samenspel met sales-uitvraag.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een goede B2B-strateeg ziet binnen een uur waar je TikTok-stack rendement weglekt: te weinig creatief variatie, last-click-meting die de impact dempt, of te smalle targeting waardoor je in een te kleine pool blijft hangen. Wil je dat we daar samen naar kijken? Plan een vrijblijvend gesprek via onze <Link to="/contact" className="text-accent hover:underline">contactpagina</Link>.
                        </p>
                    </div>

                    <section className="mt-16 pt-12 border-t border-primary/10">
                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Veelgestelde vragen</h2>
                        <div className="space-y-6 not-prose">
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Werkt TikTok echt voor B2B?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Ja, voor het juiste type B2B. Vooral voor SaaS, professional services en producten waar emotionele branding telt. Het werkt minder voor heel niche-industrial of complexe enterprise-software waar de besluitvorming volledig binnen ingekochte buyer groups loopt. Maar de groep B2B-bedrijven die wel kan landen op TikTok is groter dan de meeste marketeers denken.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Welke B2B-doelen passen bij TikTok Ads?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Brand-awareness, demand generation en thought leadership werken het sterkst. Pure leadgeneratie kan, maar wordt vaak duurder dan via LinkedIn. De magie van TikTok zit in de fase voordat iemand actief gaat zoeken: je merk zaaien op het moment dat decision makers ontspannen scrollen, zodat ze maanden later jouw naam herkennen tijdens een Google Ads-zoektocht.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoe target je decision makers op TikTok?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Niet via beroepstargeting (zoals LinkedIn). Wel via interesses (business, productivity, finance) gecombineerd met leeftijd en device-niveau. Aangevuld met custom audiences uit je CRM en lookalikes op je beste klanten. Vergeet de directe job-title-filter en richt je op gedragspatronen die decision makers vertonen op het platform.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Welke creatieve hoek werkt het best voor B2B?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Educatieve content. Niet polished, niet sales-y. Korte uitlegvideo's, 'this is what nobody tells you about'-hoeken, achter-de-schermen-momenten van een founder, klantverhalen in 30 seconden. Authenticiteit weegt zwaar. Een CEO die in zijn auto opneemt presteert vaak beter dan een gepolishte studio-productie van duizend euro.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat kost TikTok B2B?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">CPM's voor B2B-content op TikTok lopen doorgaans tussen drie en zeven euro per duizend vertoningen. Dat is fors lager dan LinkedIn waar dezelfde duizend impressies twee tot vijf keer meer kosten. CPL ligt hoger dan een directe LinkedIn-leadcampagne, maar je betaalt voor brand-impact die op LinkedIn nooit zo goedkoop binnen te halen is.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Moet ik LinkedIn vervangen door TikTok?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Nee. Combineer ze. LinkedIn voor lower-funnel leadgeneratie en account-based werk waar je precies wie je wilt aanspreken. TikTok voor de fase ervoor: brand-recall opbouwen en in-market komen voordat de buyer aanvankelijk actief gaat zoeken. De ene kanalen versterkt de andere.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoe meet je impact van TikTok B2B-campagnes?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Niet alleen via last-click. B2B-funnels lopen weken tot maanden, dus directe attributie onderschat de waarde stelselmatig. Werk met view-through-windows van 7 of 28 dagen, kijk naar branded-search-volume tijdens campagne-vlagen, en hou je lead-quality-score per kanaal bij. Een goed dashboard combineert TikTok-impressies met je CRM-data.</p>
                            </div>
                        </div>
                    </section>

                    <section className="mt-16 pt-12 border-t border-primary/10">
                        <h3 className="text-xl font-bold text-primary mb-6">Lees ook</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <Link to="/blogs/social-ads/tiktok-ads-doelgroepen-bereik-precies" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">TikTok Ads doelgroepen instellen</h3>
                                <p className="text-primary/60 text-sm">De juiste mensen bereiken zonder je targeting dicht te knijpen.</p>
                            </Link>
                            <Link to="/blogs/social-ads/influencer-content-tiktok-ads" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Influencer content in TikTok Ads</h3>
                                <p className="text-primary/60 text-sm">Spark Ads en hoe je creator-content omzet in betere ROAS.</p>
                            </Link>
                            <Link to="/blogs/tracking/attribution-modellen-uitgelegd-last-click" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Attributiemodellen voor B2B</h3>
                                <p className="text-primary/60 text-sm">Last-click voorbij: hoe je upper-funnel-impact echt meet.</p>
                            </Link>
                        </div>
                    </section>

                </div>
            </article>

            <section className="w-full pb-32 px-6">
                <div className="max-w-4xl mx-auto bg-primary rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
                    <h2 className="relative z-10 font-drama italic text-background text-3xl sm:text-4xl md:text-5xl mb-6">
                        B2B-pipeline opbouwen via TikTok?
                    </h2>
                    <p className="relative z-10 font-sans text-background/70 text-lg mb-10 max-w-xl mx-auto">
                        We zetten een B2B-funnel op die TikTok en LinkedIn slim combineert. In 90 dagen zie je het effect op pipeline en branded search.
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
