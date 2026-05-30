import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ChevronRight, User } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function BlogPostSeaUitbestedenFreelancerOfBureau() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen selection:bg-accent/30 selection:text-dark flex flex-col bg-background">
            <Helmet>
                <title>SEA uitbesteden: freelancer of bureau? Zo maak je de juiste keuze | Empowers</title>
                <meta name="description" content="SEA uitbesteden aan een freelancer of bureau? Lees wat elk je kost, wat het oplevert en voor welk type bedrijf de keuze logisch is voordat je tekent." />
                <meta name="keywords" content="sea uitbesteden freelancer bureau, google ads freelancer of bureau, sea specialist inhuren, sea bureau kosten, google ads uitbesteden mkb" />
                <link rel="canonical" href="https://www.empowers.nl/blogs/google-ads/sea-uitbesteden-freelancer-of-bureau" />
                <meta property="og:title" content="SEA uitbesteden: freelancer of bureau? Zo maak je de juiste keuze" />
                <meta property="og:description" content="Wat een SEA-freelancer en een bureau echt van elkaar onderscheidt, wat beide kosten en voor welk bedrijf welke keuze logisch is." />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://www.empowers.nl/blogs/google-ads/sea-uitbesteden-freelancer-of-bureau" />
                <meta property="og:image" content="https://www.empowers.nl/images/blogs/sea-uitbesteden-freelancer-of-bureau.jpg" />
                <meta property="article:published_time" content="2026-05-30" />
                <meta property="article:author" content="Empowers" />
                <meta property="article:section" content="Google Ads" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="SEA uitbesteden: freelancer of bureau? Zo maak je de juiste keuze" />
                <meta name="twitter:description" content="Wat een SEA-freelancer en een bureau echt van elkaar onderscheidt, en voor welk bedrijf welke keuze logisch is." />

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Article",
                        "headline": "SEA uitbesteden: freelancer of bureau? Zo maak je de juiste keuze",
                        "description": "SEA uitbesteden aan een freelancer of bureau? Wat elk je kost, wat het oplevert en voor welk type bedrijf de keuze logisch is voordat je tekent.",
                        "image": "https://www.empowers.nl/images/blogs/sea-uitbesteden-freelancer-of-bureau.jpg",
                        "datePublished": "2026-05-30T09:00:00+02:00",
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
                                    "name": "Is een SEA-freelancer goedkoper dan een bureau?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Meestal wel, omdat een freelancer geen kantoor, accountmanagers of overhead hoeft door te rekenen. Een freelancer rekent vaak rond de 60 tot 90 euro per uur of een vast maandbedrag vanaf ongeveer 750 euro. Een bureau zit doorgaans hoger. De vraag is niet wie goedkoper is, maar wat je per bestede euro terugkrijgt aan omzet."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Wat gebeurt er met mijn campagnes als een freelancer ziek wordt?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Bij een freelancer ligt het werk stil zolang die persoon weg is. Dat is het grootste nadeel van een eenpitter. Een bureau vangt uitval op met collega's die je account overnemen. Wil je toch met een freelancer werken, leg dan vooraf vast wie er invalt bij langdurige uitval en zorg dat je accounts op je eigen naam staan."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Wanneer is een bureau de betere keuze voor SEA?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Als je naast Google Ads ook Meta Ads, SEO of feedmanagement nodig hebt, of als je advertentiebudget zo groot is dat uitval direct geld kost. Een bureau brengt meerdere specialisten en continuïteit. Voor een puur Google Ads-account met een overzichtelijk budget is dat vaak meer dan je nodig hebt."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Hoeveel budget heb je nodig om SEA uit te besteden?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Reken op het beheerfee plus je advertentiebudget. Beheer begint bij een freelancer rond 750 euro per maand, bij een bureau vaak vanaf 1000 euro. Daarbovenop komt je mediabudget. Onder de 1000 euro advertentiebudget per maand is professioneel beheer zelden rendabel, omdat de beheerkosten dan een te grote hap uit je resultaat nemen."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Kan ik later wisselen van freelancer naar bureau?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Ja, mits je accounts op je eigen naam staan en je toegang houdt tot je Google Ads en GA4. Dan draag je simpel het beheer over zonder historische data te verliezen. Staat het account onder de freelancer zelf, dan kan een overstap je weken kosten. Regel het eigenaarschap daarom voordat je begint."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Werkt een freelancer net zo goed als een bureau?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Voor het draaien van een Google Ads-account zit het verschil niet in vakmanschap maar in capaciteit en continuïteit. Een sterke freelancer levert hetzelfde of beter werk dan een gemiddeld bureau. Het bureau wint zodra je vervanging en meerdere kanalen tegelijk nodig hebt. Beoordeel dus de persoon en het werk, niet alleen het type aanbieder."
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
                            { "@type": "ListItem", "position": 3, "name": "Google Ads", "item": "https://www.empowers.nl/blogs/google-ads" },
                            { "@type": "ListItem", "position": 4, "name": "SEA uitbesteden freelancer of bureau", "item": "https://www.empowers.nl/blogs/google-ads/sea-uitbesteden-freelancer-of-bureau" }
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
                        <Link to="/blogs/google-ads" className="hover:text-accent transition-colors">Google Ads</Link>
                        <ChevronRight className="w-3 h-3" />
                        <span className="text-primary truncate">SEA uitbesteden freelancer of bureau</span>
                    </nav>

                    <header className="mb-16">
                        <div className="inline-block px-3 py-1 bg-accent/10 text-accent font-mono text-xs uppercase tracking-widest rounded-full mb-6">
                            Google Ads
                        </div>
                        <h1 className="font-sans font-bold text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight mb-8">
                            SEA uitbesteden: freelancer of bureau? Zo maak je de juiste keuze
                        </h1>
                        <div className="flex flex-wrap items-center gap-6 text-sm font-sans text-primary/60 border-y border-primary/10 py-6">
                            <div className="flex items-center gap-2"><User className="w-4 h-4" /><span>Empowers Redactie</span></div>
                            <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>30 mei 2026</span></div>
                            <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>8 minuten leestijd</span></div>
                        </div>
                    </header>

                    <figure className="w-full h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden mb-16 relative bg-primary">
                        <div className="absolute inset-0 bg-[url('/images/blogs/sea-uitbesteden-freelancer-of-bureau.jpg')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </figure>

                    <div className="prose prose-lg max-w-none prose-headings:text-primary prose-headings:font-bold prose-a:text-accent prose-a:underline hover:prose-a:text-accent/80">
                        <p className="text-xl leading-relaxed text-primary/80 font-medium mb-6">
                            SEA uitbesteden aan een freelancer of een bureau? Een freelancer is meestal goedkoper en je praat direct met de persoon die je campagnes draait. Een bureau brengt meer capaciteit, vervanging bij ziekte en specialisten voor de kanalen naast je Google Ads. Welke keuze logisch is, hangt af van je budget, hoe complex je account is en hoeveel je zelf wil meekijken.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat is het verschil tussen een SEA-freelancer en een bureau?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een SEA-freelancer is één persoon die jouw Google Ads beheert. Je krijgt rechtstreeks contact met degene die in je account zit. Geen accountmanager als tussenlaag, geen wekelijkse interne overdracht. Wat je bespreekt, voert dezelfde persoon de volgende dag uit.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een bureau is een team. Er zit vaak een strateeg op je account, een specialist die de campagnes draait en iemand die de rapportage verzorgt. Dat betekent meer handen, maar ook meer schakels tussen jou en de uitvoering. De prijs ligt hoger omdat een kantoor en de nodige software meebetaald worden.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Het wezenlijke verschil zit niet in vakmanschap. Een sterke freelancer kent Google Ads net zo goed als een bureau-specialist, soms beter, omdat hij zijn naam direct aan het resultaat verbindt. Het verschil zit in capaciteit en continuïteit. Een bureau kan opschalen en uitval opvangen. Een freelancer kan dat niet, of hooguit beperkt via een eigen netwerk.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat kost SEA uitbesteden aan een freelancer of bureau?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Je betaalt altijd twee dingen: het beheer en het advertentiebudget zelf. Het beheer is wat je betaalt voor het werk aan je campagnes. Het advertentiebudget gaat rechtstreeks naar Google. Die twee worden in offertes nog weleens door elkaar gehaald, dus vraag er expliciet naar.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een freelancer rekent voor het beheer vaak rond de 60 tot 90 euro per uur, of een vast maandbedrag dat begint rond 750 euro. Een bureau zit doorgaans hoger, met instaptarieven vanaf ongeveer 1000 euro per maand en hogere bedragen naarmate er meer kanalen en uren bij komen. Het lijkt een fors verschil. Of het dat ook is, hangt af van wat je ervoor terugkrijgt.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Belangrijker dan het maandbedrag is de verhouding tussen beheer en mediabudget. Betaal je 1000 euro beheer op 1200 euro advertentiebudget, dan gaat bijna de helft van je totale investering naar beheer in plaats van naar klikken die omzet opleveren. Dat is zelden rendabel. Onder de 1000 euro mediabudget per maand is professioneel uitbesteden vrijwel nooit de moeite waard, ongeacht of het een freelancer of bureau is. Wil je weten wat reëel is voor jouw markt, dan helpt onze blog over <Link to="/blogs/google-ads/sea-cpc-benchmarks-per-branche-nederland" className="text-accent hover:underline">SEA-benchmarks per branche in Nederland</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wanneer kies je voor een freelancer?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een freelancer past goed bij een overzichtelijk account waar Google Ads het belangrijkste kanaal is. Denk aan een dienstverlener met een paar campagnes, of een kleinere webshop die vooral op zoekverkeer draait. Je krijgt scherpe tarieven en korte lijnen. Vragen worden niet doorgespeeld, ze worden beantwoord door de persoon die het werk doet.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Er is nog een voordeel dat ondernemers vaak onderschatten. Een freelancer met een handvol klanten kent jouw account echt. Bij een bureau ben je soms één van de dertig accounts die een junior op een drukke dinsdagmiddag langsloopt. De betrokkenheid van een eenpitter die zijn reputatie aan jouw resultaat hangt, is moeilijk te kopen.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Het risico is even helder. Wordt je freelancer ziek, gaat hij op vakantie of neemt hij te veel klanten aan, dan merk jij dat direct. Er is geen vangnet. Dekt dat risico je af door je accounts op eigen naam te zetten en vooraf afspraken te maken over invallen, dan blijft een goede freelancer voor veel MKB-bedrijven de slimste keuze. We werkten met een lokale installateur die jarenlang prima draaide bij een freelancer, tot die ermee stopte; omdat het account op naam van de ondernemer stond, was de overstap in een week geregeld.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wanneer kies je voor een bureau?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Zodra SEA niet je enige kanaal is, kantelt de keuze richting een bureau. Draai je naast Google Ads ook Meta Ads, doe je aan SEO en heb je feedmanagement voor je shop nodig, dan wil je die kanalen op elkaar afgestemd hebben. Een bureau heeft daar meerdere specialisten voor onder één dak. Een freelancer doet vaak één ding goed en de rest erbij.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Capaciteit is de tweede reden. Bij een advertentiebudget waar elke dag stilstand direct geld kost, kun je het je niet veroorloven dat het werk een week blijft liggen. Een bureau vangt ziekte en drukte op. Een collega neemt het account over en de campagnes blijven draaien. Voor grotere webshops en bedrijven met een serieus mediabudget is die continuïteit het verschil tussen rustig doorgroeien en onverwacht omzet missen.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Let wel op dat je de breedte ook echt benut. Een bureau inhuren voor alleen Google Ads, terwijl je nergens anders adverteert, betekent dat je voor capaciteit betaalt die stil ligt. In dat geval krijg je een duurdere variant van wat een freelancer ook had gekund. Kies een bureau om wat het extra biedt, niet uit gewoonte. Hoe je een bureau beoordeelt op echte uitvoering lees je in onze blog over <Link to="/blogs/google-ads/sea-bureau-beoordelen-campagnes-beheer" className="text-accent hover:underline">een SEA-bureau beoordelen op campagnes en beheer</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Welke vragen stel je voordat je tekent?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De keuze tussen freelancer en bureau valt vaak in het eerste gesprek. Begin met de vraag wie er daadwerkelijk in je account zit. Bij een bureau wil je weten of dat de persoon is die tegenover je zit, of een junior die je nooit spreekt. Bij een freelancer wil je weten wat er gebeurt bij langdurige uitval.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Vraag daarna naar het eigenaarschap van je accounts. Je Google Ads en GA4 horen op jouw bedrijfsnaam te staan, net als een eventuele Meta Business Manager. De aanbieder krijgt toegang, geen eigendom. Dit klinkt als een detail en is het verschil tussen een soepele overstap later en maanden gedoe om je eigen data terug te krijgen.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Vraag tot slot hoe er gerapporteerd wordt en hoe vaak je iemand spreekt. Een rapport vol kliks en vertoningen zegt weinig. Je wil weten wat de campagnes aan omzet en marge opleveren, en welke beslissingen er zijn genomen. Een goede aanbieder, freelancer of bureau, legt dat uit zonder dat je erom hoeft te vragen. Welke vragen je nog meer stelt, hebben we verzameld in onze blog over <Link to="/blogs/google-ads/google-ads-bureau-vragen-eerste-gesprek" className="text-accent hover:underline">vragen voor het eerste gesprek met een Google Ads-bureau</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat je vandaag al kunt doen</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Begin niet bij het type aanbieder, maar bij je eigen situatie. Schrijf op hoeveel je per maand aan advertenties uitgeeft, welke kanalen je draait en hoeveel uitval je je kunt veroorloven. Een klein, puur Google Ads-account met een scherp budget wijst naar een freelancer. Meerdere kanalen, een groot mediabudget of weinig ruimte voor stilstand wijzen naar een bureau.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Daarna beoordeel je de persoon en het werk, niet het etiket. Een sterke freelancer verslaat een zwak bureau, en andersom. Twijfel je nog tussen een specialist, een bureau en een freelancer in bredere zin, kijk dan in onze blog over <Link to="/blogs/google-ads/google-ads-specialist-vs-bureau-freelancer" className="text-accent hover:underline">het verschil tussen een Google Ads-specialist, bureau en freelancer</Link>.
                        </p>
                    </div>

                    <section className="mt-16 pt-12 border-t border-primary/10">
                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Veelgestelde vragen</h2>
                        <div className="space-y-6 not-prose">
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Is een SEA-freelancer goedkoper dan een bureau?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Meestal wel, omdat een freelancer geen kantoor, accountmanagers of overhead hoeft door te rekenen. Een freelancer rekent vaak rond de 60 tot 90 euro per uur of een vast maandbedrag vanaf ongeveer 750 euro. Een bureau zit doorgaans hoger. De vraag is niet wie goedkoper is, maar wat je per bestede euro terugkrijgt aan omzet.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat gebeurt er met mijn campagnes als een freelancer ziek wordt?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Bij een freelancer ligt het werk stil zolang die persoon weg is. Dat is het grootste nadeel van een eenpitter. Een bureau vangt uitval op met collega's die je account overnemen. Wil je toch met een freelancer werken, leg dan vooraf vast wie er invalt bij langdurige uitval en zorg dat je accounts op je eigen naam staan.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wanneer is een bureau de betere keuze voor SEA?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Als je naast Google Ads ook Meta Ads, SEO of feedmanagement nodig hebt, of als je advertentiebudget zo groot is dat uitval direct geld kost. Een bureau brengt meerdere specialisten en continuïteit. Voor een puur Google Ads-account met een overzichtelijk budget is dat vaak meer dan je nodig hebt.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoeveel budget heb je nodig om SEA uit te besteden?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Reken op het beheerfee plus je advertentiebudget. Beheer begint bij een freelancer rond 750 euro per maand, bij een bureau vaak vanaf 1000 euro. Daarbovenop komt je mediabudget. Onder de 1000 euro advertentiebudget per maand is professioneel beheer zelden rendabel, omdat de beheerkosten dan een te grote hap uit je resultaat nemen.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Kan ik later wisselen van freelancer naar bureau?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Ja, mits je accounts op je eigen naam staan en je toegang houdt tot je Google Ads en GA4. Dan draag je simpel het beheer over zonder historische data te verliezen. Staat het account onder de freelancer zelf, dan kan een overstap je weken kosten. Regel het eigenaarschap daarom voordat je begint.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Werkt een freelancer net zo goed als een bureau?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Voor het draaien van een Google Ads-account zit het verschil niet in vakmanschap maar in capaciteit en continuïteit. Een sterke freelancer levert hetzelfde of beter werk dan een gemiddeld bureau. Het bureau wint zodra je vervanging en meerdere kanalen tegelijk nodig hebt. Beoordeel dus de persoon en het werk, niet alleen het type aanbieder.</p>
                            </div>
                        </div>
                    </section>

                    <section className="mt-16 pt-12 border-t border-primary/10">
                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Lees ook</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <Link to="/blogs/google-ads/google-ads-uitbesteden-wanneer-zelf" className="block border border-primary/10 rounded-xl p-6 hover:border-accent transition-colors">
                                <div className="text-xs font-mono uppercase tracking-widest text-accent mb-2">Google Ads</div>
                                <h3 className="font-sans font-semibold text-primary text-lg mb-2">Google Ads uitbesteden of zelf doen?</h3>
                                <p className="font-sans text-primary/70 text-sm">Wanneer uitbesteden loont en wanneer je je campagnes beter zelf in handen houdt.</p>
                            </Link>
                            <Link to="/blogs/google-ads/sea-bureau-vergelijken-resultaten-rapportages" className="block border border-primary/10 rounded-xl p-6 hover:border-accent transition-colors">
                                <div className="text-xs font-mono uppercase tracking-widest text-accent mb-2">Google Ads</div>
                                <h3 className="font-sans font-semibold text-primary text-lg mb-2">SEA-bureaus vergelijken op resultaten en rapportages</h3>
                                <p className="font-sans text-primary/70 text-sm">Waar je op let als je offertes naast elkaar legt en wat een goede rapportage onderscheidt.</p>
                            </Link>
                        </div>
                    </section>
                </div>
            </article>

            <section className="w-full pb-32 px-6">
                <div className="max-w-4xl mx-auto bg-primary rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
                    <h2 className="relative z-10 font-drama italic text-background text-3xl sm:text-4xl md:text-5xl mb-6">Twijfel je over de juiste keuze?</h2>
                    <p className="relative z-10 font-sans text-background/70 text-lg mb-10 max-w-xl mx-auto">In een gesprek van een halfuur kijken we naar je budget, je kanalen en je account, en zeggen we eerlijk of een freelancer, een bureau of zelf doen het beste past. Geen pitch, wel een helder advies.</p>
                    <Link to="/contact" className="relative z-10 btn-magnetic inline-flex items-center justify-center bg-accent text-background font-sans font-bold text-lg px-10 py-4 rounded-[2rem] hover:bg-accent/90 transition-colors">Neem contact op</Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
