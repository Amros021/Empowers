import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ChevronRight, User } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function BlogPost96ContentGeenOrganischVerkeer() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen selection:bg-accent/30 selection:text-dark flex flex-col bg-background">
            <Helmet>
                <title>Waarom 96% van content geen organisch verkeer krijgt | Empowers</title>
                <meta name="description" content="Onderzoek van Ahrefs toont dat 96% van content geen organisch verkeer krijgt. De echte oorzaken, en wat de overige 4% wel goed doet." />
                <meta name="keywords" content="content geen organisch verkeer, 96 procent ahrefs, content marketing fout, SEO content, waarom content niet rankt" />
                <link rel="canonical" href="https://www.empowers.nl/blogs/geo/96-content-geen-organisch-verkeer" />
                <meta property="og:title" content="Waarom 96% van content geen organisch verkeer krijgt" />
                <meta property="og:description" content="De Ahrefs-cijfers ontleed: waarom de meerderheid van content faalt en wat de overige 4% wel goed doet." />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://www.empowers.nl/blogs/geo/96-content-geen-organisch-verkeer" />
                <meta property="og:image" content="https://www.empowers.nl/images/blogs/96-content-geen-organisch-verkeer.jpg" />
                <meta property="article:published_time" content="2026-05-10" />
                <meta property="article:author" content="Empowers" />
                <meta property="article:section" content="GEO" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Waarom 96% van content faalt" />
                <meta name="twitter:description" content="Het Ahrefs-onderzoek dat de hele contentindustrie raakt, en wat het voor jou betekent." />

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Article",
                        "headline": "Waarom 96% van content geen organisch verkeer krijgt",
                        "description": "De cijfers van Ahrefs ontleed: waarom de meerderheid van online content geen Google-verkeer krijgt en wat de overige 4% wel goed doet.",
                        "image": "https://www.empowers.nl/images/blogs/96-content-geen-organisch-verkeer.jpg",
                        "datePublished": "2026-05-10T15:00:00+02:00",
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
                                    "name": "Waar komt de 96%-statistiek vandaan?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Uit een onderzoek van Ahrefs op meer dan 14 miljard webpagina's. Daaruit bleek dat 96,55 procent van pagina's geen verkeer uit Google krijgt en nog eens een kleine 2 procent slechts één tot tien bezoekers per maand. Het cijfer is gepubliceerd door Ahrefs onder de titel 'How to Be in the Other 3.45%'. Het is geen marketingclaim, het is een meting op real-world data uit hun Content Explorer-tool."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Geldt deze 96% ook voor mijn site?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Niet noodzakelijk in deze ratio, maar het patroon klopt vaak ook op kleinere schaal. Op de meeste MKB-sites brengt een handvol pagina's bijna al het verkeer en presteert de rest matig of niet. Test het zelf in Google Search Console: filter op pagina's en bekijk hoeveel pagina's nul of vrijwel geen klikken kregen in de afgelopen drie maanden. Het percentage zal je waarschijnlijk verbazen."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Wat is de belangrijkste oorzaak dat content faalt?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Geen of weinig backlinks naar de pagina. Het Ahrefs-onderzoek vond een sterke correlatie tussen het aantal verwijzende domeinen en het verkeer dat een pagina krijgt. Andere belangrijke oorzaken: onderwerp zonder zoekvolume, content die niet aansluit op de zoekintentie, en pagina's die nooit goed geïndexeerd zijn. Vaak is het een combinatie van deze drie."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Helpt meer content schrijven?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Niet als ondertussen niets verandert in hoe je content kiest en schrijft. Tien blogs over hetzelfde onderwerp schrijven die niet goed zijn, levert geen tien keer zoveel verkeer als één goed-gerankte blog. De winst zit in kwaliteit boven kwantiteit. Beter een blog per maand die echt scoort dan vier blogs per maand die in de 96% verdwijnen."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Verandert AI-zoeken iets aan dit cijfer?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Het verergert het effect, want AI-overzichten absorberen klikken die anders naar lagere posities gingen. Pagina's die voor de top drie strijden, hebben nog enige kans. Pagina's op pagina twee of lager krijgen straks vrijwel niets. Tegelijk opent het een nieuwe route: pagina's die door AI worden geciteerd ondanks lage Google-positie, kunnen toch zichtbaarheid bouwen. Het kanaal verandert."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Wat doet de overige 4%-groep anders?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Drie dingen consistent. Ze schrijven over onderwerpen met aantoonbaar zoekvolume, ze krijgen verwijzingen vanuit andere sites, en ze sluiten op de zoekintentie aan. Geen geheim, wel iets dat de meerderheid niet doet. De meerderheid schrijft over onderwerpen die lijken interessant zonder te toetsen of er vraag naar is, en zonder een plan om bekendheid te bouwen."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Moet ik bestaande content weghalen?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Niet automatisch. Pagina's zonder verkeer maar met technische signalen (recente updates, interne links, autoriteit) kunnen baat hebben bij herschrijven. Pagina's zonder enige relevantie of kwaliteit kun je beter verwijderen of redirecten. Een content audit waarin je per pagina drie scenario's beoordeelt (behouden, opwaarderen of verwijderen) is meestal een betere stap dan in één keer alles weghalen."
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
                            { "@type": "ListItem", "position": 4, "name": "96% content geen verkeer", "item": "https://www.empowers.nl/blogs/geo/96-content-geen-organisch-verkeer" }
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
                        <span className="text-primary truncate">96% content geen verkeer</span>
                    </nav>

                    <header className="mb-16">
                        <div className="inline-block px-3 py-1 bg-accent/10 text-accent font-mono text-xs uppercase tracking-widest rounded-full mb-6">
                            GEO
                        </div>
                        <h1 className="font-sans font-bold text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight mb-8">
                            Waarom 96% van content geen organisch verkeer krijgt
                        </h1>
                        <div className="flex flex-wrap items-center gap-6 text-sm font-sans text-primary/60 border-y border-primary/10 py-6">
                            <div className="flex items-center gap-2"><User className="w-4 h-4" /><span>Empowers Redactie</span></div>
                            <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>10 mei 2026</span></div>
                            <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>9 minuten leestijd</span></div>
                        </div>
                    </header>

                    <figure className="w-full h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden mb-16 relative bg-primary">
                        <div className="absolute inset-0 bg-[url('/images/blogs/96-content-geen-organisch-verkeer.jpg')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </figure>

                    <div className="prose prose-lg max-w-none prose-headings:text-primary prose-headings:font-bold prose-a:text-accent prose-a:underline hover:prose-a:text-accent/80">
                        <p className="text-xl leading-relaxed text-primary/80 font-medium mb-6">
                            Het cijfer is hard. Onderzoek van Ahrefs op meer dan veertien miljard webpagina's liet zien dat 96,55 procent van content geen verkeer uit Google krijgt. Daarbovenop krijgt nog eens een kleine 2 procent slechts één tot tien bezoekers per maand. Voor wie content publiceert, is dat een ongemakkelijk cijfer. Maar het verklaart ook iets: contentmarketing als geheel is niet stuk, maar de meerderheid van content is verspilling. Hieronder zoeken we uit waarom, en wat de overige 4 procent wel goed doet.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat de Ahrefs-studie precies vond</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Het onderzoek bekeek pagina's uit de Content Explorer-database van Ahrefs en mat hun maandelijks zoekverkeer uit Google. De resultaten waren scherp. Bijna 97 procent van pagina's krijgt nul klikken. Iets minder dan 2 procent krijgt een handvol klikken per maand. Slechts 0,9 procent krijgt meer dan honderd organische bezoekers per maand. De top 0,1 procent van pagina's vangt het overgrote deel van het beschikbare verkeer. <a href="https://ahrefs.com/blog/search-traffic-study/" target="_blank" rel="noopener" className="text-accent hover:underline">Het volledige onderzoek staat op de Ahrefs-blog</a>.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De vraag is dus niet of contentmarketing werkt. Hij werkt, maar voor een hele kleine groep. De hamvraag wordt: wat doet die kleine groep wel goed dat de rest niet doet?
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Oorzaak één: geen externe verwijzingen</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De duidelijkste correlatie in het onderzoek is met backlinks. Pagina's met meer verwijzende domeinen krijgen meer verkeer. Pagina's zonder enige verwijzing scoren bijna nooit. Dat klinkt als een open deur, maar het is een feitelijke vaststelling. Goede content alleen is niet genoeg. Goede content waar niemand naar verwijst, blijft onzichtbaar.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Voor MKB en groeibedrijven betekent dat: zonder een actieve aanpak voor backlinks gaat content schrijven zonder linkstrategie zelden werken. Niet elke pagina hoeft duizend links te trekken, maar elke pagina die je serieus wilt rangschikken, heeft minstens een handvol verwijzingen vanuit relevante sites nodig. Een uitwerking van die aanpak staat in onze gids over <Link to="/blogs/seo/backlinks-opbouwen" className="text-accent hover:underline">backlinks opbouwen voor MKB</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Oorzaak twee: schrijven over onderwerpen zonder zoekvolume</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Veel content gaat over onderwerpen die de schrijver belangrijk vond, maar die niemand zoekt. Een MKB-eigenaar die elke week schrijft over zijn dagelijkse beslommeringen krijgt minimaal verkeer omdat niemand op die specifieke vragen zoekt. Een bedrijfsblog over "ons team viert kerstmis" zonder zoekvolume, scoort nul keer. Logisch, want zoekvolume bepaalt de bovengrens van mogelijk verkeer.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Wat de 4-procent-groep wel doet: voor publicatie checken of er zoekvolume is. Tools zoals Google Keyword Planner, Ahrefs, SEMrush of zelfs gratis alternatieven geven snel antwoord. Een onderwerp met nul zoekvolume kan nog waarde hebben voor klantservice of merkbeleving, maar ga er geen verkeer van verwachten. Reserveer zoekvolume-gedreven content voor je groeibudget en commerciële beslommeringen voor je nieuwsbrief of LinkedIn.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Oorzaak drie: zoekintentie mist</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een derde reden waarom content faalt: het komt overeen met een zoekwoord, maar niet met wat de zoeker zocht. Iemand die "hoe trek ik klanten naar mijn winkel" intypt, wil praktische tips. Een artikel met de titel die op tien marketingboeken aanknoopt, scoort niet. Een artikel dat in de eerste alinea drie tips geeft en daarna voorbeelden, scoort wel.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Hoe je intentie checkt: zoek het keyword zelf en bekijk de top tien resultaten. Wat voor type pagina staat daar? Lijstartikelen? Diepe how-to gidsen? Productpagina's? Vergelijkingen? Dat is wat Google denkt dat past bij die zoekopdracht. Wijk daar te ver van af, en je rankt niet ongeacht hoeveel moeite je in de pagina stopt.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Oorzaak vier: technische zwakheden</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een deel van de 96 procent valt af op simpele technische redenen. Pagina's die niet in de sitemap staan en daardoor traag worden gevonden. Pagina's met een noindex-tag die er per ongeluk inkwam. Trage pagina's die door Core Web Vitals worden afgestraft. Dubbele content waar Google niet uit komt welke versie hij moet ranken. Verbroken interne links die pagina's afsnijden van autoriteit.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Deze categorie is vaak verrassend groot. Een audit op de tien minst presterende pagina's van een MKB-site brengt regelmatig minstens drie technische blokkades aan het licht. Soms is een pagina jaren niet zichtbaar geweest in Google omdat één foute regel ergens iets blokkeerde.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat AI-zoeken hieraan verandert</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De 96-procent-cijfers zijn van vóór de grote AI-verschuiving. Ze worden waarschijnlijk niet beter. AI-overzichten in Google nemen klikken weg van pagina's die op positie drie of lager staan. Voor de bovenkant verandert er minder, voor de onderkant wordt het slechter. De middengroep waar veel MKB-content nu zit, lijkt het hardst te lijden.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Tegelijk opent het iets nieuws. Pagina's die voor klassieke SEO te diep wegzakken, kunnen toch in AI-antwoorden verschijnen wanneer ze inhoudelijk sterk zijn. Een goed gestructureerde MKB-pagina die antwoord geeft op een specifieke vraag, kan in Perplexity of ChatGPT geciteerd worden zonder dat hij in de Google-top tien staat. Daarmee verschuift de strategie. Een uitwerking staat in onze blog over <Link to="/blogs/geo/geo-bezig-seo-te-vervangen" className="text-accent hover:underline">vervangt GEO de SEO-strategie</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat de 4-procent-groep wel goed doet</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een handvol patronen komt steeds terug. Ze schrijven over onderwerpen met aantoonbaar zoekvolume waarvan ze ook iets weten. Ze investeren in promotie en linkbuilding rond elke serieuze publicatie. Ze sluiten aan op de zoekintentie, niet op wat ze zelf het interessantst vinden. Ze houden hun technische basis op orde en monitoren of pagina's blijven presteren. Ze publiceren minder, maar wat ze publiceren is fundamenteler.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Wat de 96-procent-groep doet: vooral schrijven, weinig promoten, niet checken of er vraag is, en het effect niet meten. Wanneer er na een half jaar geen verkeer is, wordt nog meer geschreven in plaats van het bestaande te verbeteren. De vicieuze cirkel waarin veel contentmarketing vastzit.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat dit voor jouw site betekent</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De praktische conclusie is bemoedigend en confronterend tegelijk. Bemoedigend, want je hoeft niet de helft van je content af te schrijven. Confronterend, want elke pagina die je publiceert zonder een plan voor zoekvolume, intentie, technische gezondheid en promotie heeft een ingebakken kans van vier procent op succes.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Wat doe je vandaag? Open Google Search Console, sorteer pagina's op klikken, en bekijk hoeveel pagina's de afgelopen drie maanden onder de tien klikken zaten. Dat is jouw versie van de 96-procent-cijfers. Voor elk van die pagina's beslis je: behouden en verbeteren, opwaarderen tot een sterke pagina, of verwijderen. Geen pagina blijft op je site staan zonder reden. Een gerichte content audit met deze drie scenario's maakt vaak meer verschil dan drie nieuwe blogs schrijven.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat je deze week kunt doen</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een uur Google Search Console is genoeg voor de eerste pijnlijke inzichten. Filter op laatste 90 dagen, sorteer op klikken oplopend en bekijk je tien meest matig presterende pagina's. Stel jezelf per pagina drie vragen. Heeft het keyword waarop deze pagina mikt überhaupt zoekvolume? Komt de inhoud overeen met wat de top-drie pagina's bieden? Linken er externe sites naartoe? Eén nee op die vragen verklaart waarschijnlijk het lage verkeer.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Wil je samen een content audit uitvoeren waarin we je hele site doornemen en per pagina een actie plannen? Plan een vrijblijvend gesprek via onze <Link to="/contact" className="text-accent hover:underline">contactpagina</Link>. We laten zien welke 4 procent van je content nu al goed werkt en hoe je die uitbreidt.
                        </p>
                    </div>

                    <section className="mt-16 pt-12 border-t border-primary/10">
                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Veelgestelde vragen</h2>
                        <div className="space-y-6 not-prose">
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Waar komt de 96%-statistiek vandaan?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Uit een onderzoek van Ahrefs op meer dan 14 miljard webpagina's. Daaruit bleek dat 96,55 procent van pagina's geen verkeer uit Google krijgt en nog eens een kleine 2 procent slechts één tot tien bezoekers per maand. Het cijfer is gepubliceerd door Ahrefs onder de titel 'How to Be in the Other 3.45%'. Het is geen marketingclaim, het is een meting op real-world data uit hun Content Explorer-tool.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Geldt deze 96% ook voor mijn site?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Niet noodzakelijk in deze ratio, maar het patroon klopt vaak ook op kleinere schaal. Op de meeste MKB-sites brengt een handvol pagina's bijna al het verkeer en presteert de rest matig of niet. Test het zelf in Google Search Console: filter op pagina's en bekijk hoeveel pagina's nul of vrijwel geen klikken kregen in de afgelopen drie maanden. Het percentage zal je waarschijnlijk verbazen.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat is de belangrijkste oorzaak dat content faalt?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Geen of weinig backlinks naar de pagina. Het Ahrefs-onderzoek vond een sterke correlatie tussen het aantal verwijzende domeinen en het verkeer dat een pagina krijgt. Andere belangrijke oorzaken: onderwerp zonder zoekvolume, content die niet aansluit op de zoekintentie, en pagina's die nooit goed geïndexeerd zijn. Vaak is het een combinatie van deze drie.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Helpt meer content schrijven?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Niet als ondertussen niets verandert in hoe je content kiest en schrijft. Tien blogs over hetzelfde onderwerp schrijven die niet goed zijn, levert geen tien keer zoveel verkeer als één goed-gerankte blog. De winst zit in kwaliteit boven kwantiteit. Beter een blog per maand die echt scoort dan vier blogs per maand die in de 96% verdwijnen.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Verandert AI-zoeken iets aan dit cijfer?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Het verergert het effect, want AI-overzichten absorberen klikken die anders naar lagere posities gingen. Pagina's die voor de top drie strijden, hebben nog enige kans. Pagina's op pagina twee of lager krijgen straks vrijwel niets. Tegelijk opent het een nieuwe route: pagina's die door AI worden geciteerd ondanks lage Google-positie, kunnen toch zichtbaarheid bouwen. Het kanaal verandert.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat doet de overige 4%-groep anders?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Drie dingen consistent. Ze schrijven over onderwerpen met aantoonbaar zoekvolume, ze krijgen verwijzingen vanuit andere sites, en ze sluiten op de zoekintentie aan. Geen geheim, wel iets dat de meerderheid niet doet. De meerderheid schrijft over onderwerpen die lijken interessant zonder te toetsen of er vraag naar is, en zonder een plan om bekendheid te bouwen.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Moet ik bestaande content weghalen?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Niet automatisch. Pagina's zonder verkeer maar met technische signalen (recente updates, interne links, autoriteit) kunnen baat hebben bij herschrijven. Pagina's zonder enige relevantie of kwaliteit kun je beter verwijderen of redirecten. Een content audit waarin je per pagina drie scenario's beoordeelt (behouden, opwaarderen of verwijderen) is meestal een betere stap dan in één keer alles weghalen.</p>
                            </div>
                        </div>
                    </section>

                    <section className="mt-16 pt-12 border-t border-primary/10">
                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Lees ook</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <Link to="/blogs/seo/content-audit" className="block border border-primary/10 rounded-xl p-6 hover:border-accent transition-colors">
                                <div className="text-xs font-mono uppercase tracking-widest text-accent mb-2">SEO</div>
                                <h3 className="font-sans font-semibold text-primary text-lg mb-2">Content audit voor je website</h3>
                                <p className="font-sans text-primary/70 text-sm">Hoe je per pagina beslist: behouden, opwaarderen of verwijderen.</p>
                            </Link>
                            <Link to="/blogs/geo/zichtbaar-worden-ai-zoekmachines" className="block border border-primary/10 rounded-xl p-6 hover:border-accent transition-colors">
                                <div className="text-xs font-mono uppercase tracking-widest text-accent mb-2">GEO</div>
                                <h3 className="font-sans font-semibold text-primary text-lg mb-2">Zo word je zichtbaar in AI-zoekmachines</h3>
                                <p className="font-sans text-primary/70 text-sm">De nieuwe route voor pagina's die niet de Google-top tien halen.</p>
                            </Link>
                        </div>
                    </section>
                </div>
            </article>

            <section className="w-full pb-32 px-6">
                <div className="max-w-4xl mx-auto bg-primary rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
                    <h2 className="relative z-10 font-drama italic text-background text-3xl sm:text-4xl md:text-5xl mb-6">Hoort jouw content bij de 4 procent?</h2>
                    <p className="relative z-10 font-sans text-background/70 text-lg mb-10 max-w-xl mx-auto">In een gesprek van een halfuur kijken we hoe je content presteert en welke vijf pagina's eerst aandacht verdienen. Helder advies, geen lijstjes met grafieken zonder actie.</p>
                    <Link to="/contact" className="relative z-10 btn-magnetic inline-flex items-center justify-center bg-accent text-background font-sans font-bold text-lg px-10 py-4 rounded-[2rem] hover:bg-accent/90 transition-colors">Neem contact op</Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
