import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ChevronRight, User } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function BlogPostMaakMarketingplan7Stappen() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen selection:bg-accent/30 selection:text-dark flex flex-col bg-background">
            <Helmet>
                <title>Hoe maak je een marketingplan in 7 stappen? | Empowers</title>
                <meta name="description" content="Een marketingplan maken in 7 stappen: van situatieanalyse tot meetbare doelen. Zo bouw je een plan dat groei oplevert in plaats van stof verzamelt." />
                <link rel="canonical" href="https://www.empowers.nl/blogs/algemeen/maak-marketingplan-7-stappen" />
                <meta property="og:title" content="Hoe maak je een marketingplan in 7 stappen? | Empowers" />
                <meta property="og:description" content="Een marketingplan maken in 7 stappen: van situatieanalyse tot meetbare doelen. Zo bouw je een plan dat groei oplevert in plaats van stof verzamelt." />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://www.empowers.nl/blogs/algemeen/maak-marketingplan-7-stappen" />
                <meta property="og:image" content="https://www.empowers.nl/images/blogs/maak-marketingplan-7-stappen.jpg" />
                <meta property="article:published_time" content="2026-06-14T10:00:00+02:00" />
                <meta property="article:author" content="Empowers" />
                <meta property="article:section" content="Algemeen" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Hoe maak je een marketingplan in 7 stappen? | Empowers" />
                <meta name="twitter:description" content="Een marketingplan maken in 7 stappen: van situatieanalyse tot meetbare doelen. Zo bouw je een plan dat groei oplevert in plaats van stof verzamelt." />
                <script type="application/ld+json">{JSON.stringify({
                    "@context": "https://schema.org",
                    "@graph": [
                        {
                            "@type": "Article",
                            "headline": "Hoe maak je een marketingplan in 7 stappen?",
                            "image": "https://www.empowers.nl/images/blogs/maak-marketingplan-7-stappen.jpg",
                            "description": "Een marketingplan maken in 7 stappen: van situatieanalyse tot meetbare doelen. Zo bouw je een plan dat groei oplevert in plaats van stof verzamelt.",
                            "author": { "@type": "Organization", "name": "Empowers" },
                            "publisher": { "@type": "Organization", "name": "Empowers", "url": "https://www.empowers.nl" },
                            "datePublished": "2026-06-14T10:00:00+02:00",
                            "dateModified": "2026-06-14T10:00:00+02:00",
                            "url": "https://www.empowers.nl/blogs/algemeen/maak-marketingplan-7-stappen"
                        },
                        {
                            "@type": "BreadcrumbList",
                            "itemListElement": [
                                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.empowers.nl" },
                                { "@type": "ListItem", "position": 2, "name": "Nieuws", "item": "https://www.empowers.nl/nieuws" },
                                { "@type": "ListItem", "position": 3, "name": "Algemeen", "item": "https://www.empowers.nl/blogs/algemeen" },
                                { "@type": "ListItem", "position": 4, "name": "Hoe maak je een marketingplan in 7 stappen?", "item": "https://www.empowers.nl/blogs/algemeen/maak-marketingplan-7-stappen" }
                            ]
                        },
                        {
                            "@type": "FAQPage",
                            "mainEntity": [
                                { "@type": "Question", "name": "Wat is een marketingplan?", "acceptedAnswer": { "@type": "Answer", "text": "Een marketingplan is een document dat beschrijft hoe je jouw doelen wilt halen met marketing. Het legt vast waar je nu staat, wie je wilt bereiken, welke boodschap je gebruikt, via welke kanalen je dat doet en hoeveel budget daarbij hoort. Het geeft richting aan elke euro die je in marketing steekt." } },
                                { "@type": "Question", "name": "Uit welke 7 stappen bestaat een marketingplan?", "acceptedAnswer": { "@type": "Answer", "text": "De zeven stappen zijn: een situatieanalyse van je startpunt, meetbare doelen stellen, je doelgroep bepalen, je boodschap en positionering aanscherpen, je kanalen kiezen, je budget en planning vastleggen en tot slot meten en bijsturen. Samen vormen ze een logische volgorde van waar je staat naar wat je wilt bereiken." } },
                                { "@type": "Question", "name": "Hoe lang moet een marketingplan zijn?", "acceptedAnswer": { "@type": "Answer", "text": "Lengte zegt niets over kwaliteit. Een sterk plan voor een MKB-bedrijf past vaak op vijf tot tien pagina's. Belangrijker dan dikte is dat het concreet is: heldere doelen, een duidelijke doelgroep en afspraken over wie wat doet. Een plan dat niemand leest omdat het te lang is, helpt je niet vooruit." } },
                                { "@type": "Question", "name": "Hoe vaak moet je een marketingplan bijwerken?", "acceptedAnswer": { "@type": "Answer", "text": "Bekijk je cijfers maandelijks en stuur bij waar nodig. Het plan zelf werk je grondiger bij aan het begin van elk kwartaal of jaar. Markten en kanalen veranderen snel, dus een plan dat een jaar lang ongewijzigd in een la ligt, raakt achterhaald voordat je het doorhebt." } },
                                { "@type": "Question", "name": "Wat is het verschil tussen een marketingplan en een marketingstrategie?", "acceptedAnswer": { "@type": "Answer", "text": "Je strategie is de keuze: wie wil je bereiken en waarom kiezen die mensen voor jou. Je plan is de uitvoering: welke kanalen, welk budget en welke acties horen bij die keuze. De strategie geeft de richting, het plan zet die richting om in concrete stappen met een planning erbij." } },
                                { "@type": "Question", "name": "Heb ik een marketingplan nodig als klein bedrijf?", "acceptedAnswer": { "@type": "Answer", "text": "Juist als klein bedrijf wel. Met een beperkt budget kun je het je niet veroorloven om geld te verspillen aan kanalen die niets opleveren. Een eenvoudig plan dwingt je te kiezen waar je op inzet, voorkomt impulsbeslissingen en maakt achteraf zichtbaar wat wel en niet werkte." } }
                            ]
                        }
                    ]
                })}</script>
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
                        <Link to="/blogs/algemeen" className="hover:text-accent transition-colors">Algemeen</Link>
                        <ChevronRight className="w-3 h-3" />
                        <span className="text-primary truncate">Marketingplan in 7 stappen</span>
                    </nav>

                    {/* Header */}
                    <header className="mb-16">
                        <div className="inline-block px-3 py-1 bg-accent/10 text-accent font-mono text-xs uppercase tracking-widest rounded-full mb-6">
                            Algemeen
                        </div>
                        <h1 className="font-sans font-bold text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight mb-8">
                            Hoe maak je een marketingplan in 7 stappen?
                        </h1>

                        <div className="flex flex-wrap items-center gap-6 text-sm font-sans text-primary/60 border-y border-primary/10 py-6">
                            <div className="flex items-center gap-2">
                                <User className="w-4 h-4" />
                                <span>Empowers Redactie</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>14 juni 2026</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>8 minuten leestijd</span>
                            </div>
                        </div>
                    </header>

                    {/* Featured Image */}
                    <figure className="w-full h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden mb-16 relative bg-primary">
                        <div className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-overlay" style={{backgroundImage: "url('/images/blogs/maak-marketingplan-7-stappen.jpg')"}}></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </figure>

                    {/* Content */}
                    <div className="prose prose-lg prose-headings:font-sans prose-headings:font-bold prose-headings:text-primary prose-p:font-sans prose-p:text-primary/80 prose-p:leading-relaxed max-w-none">
                        <p className="text-xl md:text-2xl font-medium leading-relaxed mb-10 text-primary">
                            Een marketingplan maak je in zeven stappen: breng je startpunt in kaart, stel meetbare doelen, bepaal je doelgroep, scherp je boodschap aan, kies je kanalen, verdeel je budget en meet je resultaat. Samen vormen ze een plan dat richting geeft aan elke euro die je in marketing steekt. Zonder zo'n plan gok je. Mét een plan stuur je.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat is een marketingplan en waarom heb je het nodig?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een marketingplan is geen dik rapport voor in de la. Het is een werkdocument dat beschrijft hoe je jouw bedrijfsdoelen wilt halen met marketing. Waar sta je, wie wil je bereiken, wat zeg je tegen die mensen en via welke kanalen. Dat alles op een rij, zodat iedereen die meedoet dezelfde kant op werkt.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Het verschil tussen wel en geen plan zie je terug in je uitgaven. Zonder plan worden marketingbeslissingen reactief. Een concurrent adverteert, dus jij ook. Iemand tipt een nieuw platform, dus daar duik je in. Voor je het weet ligt je budget verspreid over vijf kanalen die geen van alle echt presteren.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een plan dwingt je tot keuzes. Het maakt vooraf duidelijk waar je op inzet en achteraf zichtbaar wat het opleverde. Juist voor een MKB-bedrijf met een beperkt budget is dat het verschil tussen groei en geld dat wegsijpelt.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe breng je je startpunt in kaart?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De eerste stap is een eerlijke blik op waar je nu staat. Wat levert je marketing op dit moment op, welke kanalen gebruik je al en wat werkt daarvan echt? Kijk naar je omzet, je belangrijkste klantgroepen en de plekken waar nieuwe klanten vandaan komen. Dit is je nulpunt.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Neem ook de markt en je concurrenten mee. Wat doen zij goed, waar laten ze gaten vallen en hoe onderscheid jij je? Een simpele sterkte-zwakteanalyse op een A4 is vaak genoeg. Het gaat niet om volledigheid, het gaat om een helder beeld van je vertrekpunt.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Wat we in de praktijk merken: ondernemers slaan deze stap het liefst over en springen meteen naar acties. Begrijpelijk, want analyseren voelt traag. Toch bepaalt juist dit beeld of de rest van je plan op feiten rust of op een onderbuikgevoel.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe stel je doelen die je echt verder helpen?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Daarna leg je vast wat je wilt bereiken. Vage doelen als "meer naamsbekendheid" of "groeien" helpen je niet, want je weet nooit of je ze haalt. Maak je doelen meetbaar en tijdgebonden. Bijvoorbeeld: 20 procent meer aanvragen via de website binnen zes maanden.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De bekende SMART-methode helpt hierbij. Een doel is concreet, meetbaar, haalbaar, relevant en heeft een einddatum. Koppel je doelen bovendien aan omzet waar dat kan. Bezoekers en likes zijn leuk, maar je betaalt je rekeningen van klanten die kopen.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Houd het aantal doelen klein. Twee of drie scherpe doelen zijn beter dan een lijst van tien die niemand bijhoudt. Hoe minder doelen, hoe makkelijker je je budget en aandacht erop richt.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe bepaal je voor wie je het doet?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De vierde stap draait om je doelgroep. Wie is je ideale klant precies? Niet "iedereen die ons product kan gebruiken", maar een scherp beeld van de mensen of bedrijven die het meest aan je hebben. Hun situatie, hun probleem en de reden waarom ze juist nu op zoek gaan.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een handige aanpak is om een of twee buyer persona's uit te werken. Dat is een beschrijving van een typische klant met een naam, een rol, een doel en een frustratie. Het maakt abstracte marketing ineens concreet, omdat je je teksten aan een echt persoon richt. We werkten dit uit in onze blog over <Link to="/blogs/algemeen/buyer-personas-marketingcampagnes-echt-verbeteren" className="text-accent hover:underline">buyer persona's die je campagnes verbeteren</Link>.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Hoe beter je je doelgroep kent, hoe gerichter al je volgende keuzes worden. Je weet welke boodschap raakt, op welke kanalen die mensen zitten en welke bezwaren je moet wegnemen voordat ze kopen.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat maakt jouw boodschap anders dan de rest?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Nu scherp je je positionering aan. Waarom zou iemand voor jou kiezen en niet voor de buurman die hetzelfde verkoopt? Het antwoord is je kernboodschap. Geen lijst met kenmerken, maar het ene heldere voordeel dat jou onderscheidt en dat past bij wat je doelgroep zoekt.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Vertaal die boodschap naar taal die je klant gebruikt. Schrap het jargon en zeg in gewone woorden wat het oplevert. Een goede kernboodschap is zo helder dat een buitenstaander hem na één keer lezen kan navertellen.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Deze boodschap is de rode draad door alles wat volgt. Je advertenties, je website, je e-mails en je social posts vertellen straks allemaal hetzelfde verhaal. Die consistentie zorgt ervoor dat mensen je gaan herkennen en onthouden.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Welke kanalen kies je voor je marketingplan?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Pas in de zesde stap kies je je kanalen. Veel ondernemers beginnen hier, en dat is precies de verkeerde volgorde. Je kanaal hangt af van je doelgroep en je doel, niet andersom. Zit je klant op zoek in Google, dan zijn <Link to="/google-ads" className="text-accent hover:underline">Google Ads</Link> en goede vindbaarheid logisch. Wil je een nieuw publiek opbouwen, dan passen social kanalen beter.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Kies liever twee kanalen die je goed doet dan vijf die je half doet. Versnippering is de stille budgetkiller van het MKB. Een gerichte aanpak op een Google-campagne plus sterke organische vindbaarheid via <Link to="/seo" className="text-accent hover:underline">SEO</Link> levert vaak meer op dan overal een beetje aanwezig zijn.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Denk ook na over de samenhang. Een bezoeker die je advertentie ziet, je website bezoekt en later een e-mail krijgt, ervaart idealiter één verhaal. Kanalen die elkaar versterken halen meer uit hetzelfde budget dan losse acties die niets met elkaar te maken hebben.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoeveel budget heb je nodig en hoe plan je het?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Zet vervolgens een budget en een planning op papier. Een veelgebruikte vuistregel is om rond de 5 tot 10 procent van je omzet aan marketing te besteden, afhankelijk van je ambitie en je branche. Wil je hard groeien, dan zit je aan de bovenkant of erboven.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Verdeel dat budget over je gekozen kanalen en zet de belangrijkste acties in een eenvoudige kalender. Wie doet wat, en wanneer? Een planning hoeft geen ingewikkeld schema te zijn. Een overzicht per maand met de campagnes en content die je uitbrengt, geeft al rust en grip.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Reserveer een deel van je budget om te testen. Niet alles werkt meteen, en de ruimte om te proberen en te leren is precies wat een goed plan onderscheidt van een star schema. Zo blijf je flexibel zonder je richting kwijt te raken.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe weet je of je marketingplan werkt?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De laatste stap is meten en bijsturen, en die is misschien wel de belangrijkste. Een plan zonder meting is een wens. Bepaal vooraf welke cijfers je volgt: aanvragen, verkopen, kosten per klant en het rendement op je advertenties. Koppel die terug aan de doelen die je in stap twee stelde.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Kijk maandelijks naar je cijfers en wees bereid te schuiven. Werkt een kanaal niet, haal er dan budget weg en stop het in wat wel presteert. Marketing is geen kwestie van instellen en vergeten. De ondernemers die groeien, zijn degenen die hun plan blijven aanscherpen op basis van wat de data laat zien.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Daarmee is de cirkel rond. Je meetresultaten worden het startpunt van je volgende analyse, en zo wordt je plan elk kwartaal een stukje scherper. Een marketingplan is geen eenmalig document, maar een ritme.
                        </p>

                        <hr className="my-16 border-primary/10" />

                        <h2 className="text-3xl mb-8">Veelgestelde vragen over een marketingplan maken</h2>

                        <div className="space-y-6 not-prose">
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat is een marketingplan?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Een marketingplan is een document dat beschrijft hoe je jouw doelen wilt halen met marketing. Het legt vast waar je nu staat, wie je wilt bereiken, welke boodschap je gebruikt, via welke kanalen je dat doet en hoeveel budget daarbij hoort. Het geeft richting aan elke euro die je in marketing steekt.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Uit welke 7 stappen bestaat een marketingplan?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    De zeven stappen zijn: een situatieanalyse van je startpunt, meetbare doelen stellen, je doelgroep bepalen, je boodschap en positionering aanscherpen, je kanalen kiezen, je budget en planning vastleggen en tot slot meten en bijsturen. Samen vormen ze een logische volgorde van waar je staat naar wat je wilt bereiken.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoe lang moet een marketingplan zijn?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Lengte zegt niets over kwaliteit. Een sterk plan voor een MKB-bedrijf past vaak op vijf tot tien pagina's. Belangrijker dan dikte is dat het concreet is: heldere doelen, een duidelijke doelgroep en afspraken over wie wat doet. Een plan dat niemand leest omdat het te lang is, helpt je niet vooruit.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoe vaak moet je een marketingplan bijwerken?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Bekijk je cijfers maandelijks en stuur bij waar nodig. Het plan zelf werk je grondiger bij aan het begin van elk kwartaal of jaar. Markten en kanalen veranderen snel, dus een plan dat een jaar lang ongewijzigd in een la ligt, raakt achterhaald voordat je het doorhebt.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat is het verschil tussen een marketingplan en een marketingstrategie?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Je strategie is de keuze: wie wil je bereiken en waarom kiezen die mensen voor jou. Je plan is de uitvoering: welke kanalen, welk budget en welke acties horen bij die keuze. De strategie geeft de richting, het plan zet die richting om in concrete stappen met een planning erbij.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Heb ik een marketingplan nodig als klein bedrijf?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Juist als klein bedrijf wel. Met een beperkt budget kun je het je niet veroorloven om geld te verspillen aan kanalen die niets opleveren. Een eenvoudig plan dwingt je te kiezen waar je op inzet, voorkomt impulsbeslissingen en maakt achteraf zichtbaar wat wel en niet werkte.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </article>

            {/* Bottom CTA */}
            <section className="w-full pb-32 px-6">
                <div className="max-w-4xl mx-auto bg-primary rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
                    <h2 className="relative z-10 font-drama italic text-background text-3xl sm:text-4xl md:text-5xl mb-6">Van plan naar groei?</h2>
                    <p className="relative z-10 font-sans text-background/70 text-lg mb-10 max-w-xl mx-auto">
                        We vertalen jouw marketingplan naar campagnes die klanten opleveren. Plan een gratis gesprek en ontdek wat er mogelijk is.
                    </p>
                    <Link to="/contact" className="relative z-10 btn-magnetic inline-flex items-center justify-center bg-accent text-background font-sans font-bold text-lg px-10 py-4 rounded-[2rem] hover:bg-accent/90 transition-colors">
                        Samenwerken met Empowers
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
