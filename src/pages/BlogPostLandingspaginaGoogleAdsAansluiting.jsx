import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ChevronRight, User } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function BlogPostLandingspaginaGoogleAdsAansluiting() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen selection:bg-accent/30 selection:text-dark flex flex-col bg-background">
            <Helmet>
                <title>Landingspagina laten aansluiten op Google Ads | Empowers</title>
                <meta name="description" content="Een landingspagina die aansluit bij je Google Ads herhaalt de belofte uit je advertentie. Zo zorgt message match voor meer conversie en goedkopere kliks." />
                <link rel="canonical" href="https://www.empowers.nl/blogs/strategie/landingspagina-google-ads-aansluiting" />
                <meta property="og:title" content="Landingspagina laten aansluiten op Google Ads | Empowers" />
                <meta property="og:description" content="Een landingspagina die aansluit bij je Google Ads herhaalt de belofte uit je advertentie. Zo zorgt message match voor meer conversie en goedkopere kliks." />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://www.empowers.nl/blogs/strategie/landingspagina-google-ads-aansluiting" />
                <meta property="og:image" content="https://www.empowers.nl/images/blogs/landingspagina-google-ads-aansluiting.jpg" />
                <meta property="article:published_time" content="2026-07-19T09:00:00+02:00" />
                <meta property="article:author" content="Empowers" />
                <meta property="article:section" content="Strategie" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Landingspagina laten aansluiten op Google Ads | Empowers" />
                <meta name="twitter:description" content="Een landingspagina die aansluit bij je Google Ads herhaalt de belofte uit je advertentie. Zo zorgt message match voor meer conversie en goedkopere kliks." />
                <script type="application/ld+json">{JSON.stringify({
                    "@context": "https://schema.org",
                    "@graph": [
                        {
                            "@type": "Article",
                            "headline": "Hoe maak je een landingspagina die aansluit bij je Google Ads?",
                            "image": "https://www.empowers.nl/images/blogs/landingspagina-google-ads-aansluiting.jpg",
                            "description": "Een landingspagina die aansluit bij je Google Ads herhaalt de belofte uit je advertentie. Zo zorgt message match voor meer conversie en goedkopere kliks.",
                            "author": { "@type": "Organization", "name": "Empowers" },
                            "publisher": { "@type": "Organization", "name": "Empowers", "url": "https://www.empowers.nl" },
                            "datePublished": "2026-07-19T09:00:00+02:00",
                            "dateModified": "2026-07-19T09:00:00+02:00",
                            "url": "https://www.empowers.nl/blogs/strategie/landingspagina-google-ads-aansluiting"
                        },
                        {
                            "@type": "BreadcrumbList",
                            "itemListElement": [
                                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.empowers.nl" },
                                { "@type": "ListItem", "position": 2, "name": "Nieuws", "item": "https://www.empowers.nl/nieuws" },
                                { "@type": "ListItem", "position": 3, "name": "Strategie", "item": "https://www.empowers.nl/blogs/strategie" },
                                { "@type": "ListItem", "position": 4, "name": "Hoe maak je een landingspagina die aansluit bij je Google Ads?", "item": "https://www.empowers.nl/blogs/strategie/landingspagina-google-ads-aansluiting" }
                            ]
                        },
                        {
                            "@type": "FAQPage",
                            "mainEntity": [
                                { "@type": "Question", "name": "Wat is message match bij Google Ads?", "acceptedAnswer": { "@type": "Answer", "text": "Message match is de mate waarin je landingspagina dezelfde boodschap draagt als de advertentie waarop iemand klikte. De kop herhaalt de belofte uit de advertentie, het aanbod is hetzelfde en de vervolgstap past bij wat de advertentie aankondigde. Hoe sterker die match, hoe meer bezoekers blijven en converteren." } },
                                { "@type": "Question", "name": "Mag ik mijn homepage gebruiken als landingspagina voor Google Ads?", "acceptedAnswer": { "@type": "Answer", "text": "Voor campagnes op je eigen bedrijfsnaam kan dat prima. Voor alle andere campagnes werkt een aparte landingspagina beter, omdat je homepage te breed is om één advertentiebelofte af te maken. Bezoekers moeten dan zelf zoeken naar het aanbod waarvoor ze klikten, en een deel doet dat niet." } },
                                { "@type": "Question", "name": "Verlaagt een goede landingspagina mijn kosten per klik?", "acceptedAnswer": { "@type": "Answer", "text": "Vaak wel. De ervaring op de landingspagina is een van de onderdelen van de kwaliteitsscore in Google Ads. Een betere score betekent meestal dat je minder betaalt voor dezelfde positie. Het effect verschilt per branche en per campagne, maar betere aansluiting maakt kliks zelden duurder." } },
                                { "@type": "Question", "name": "Heb ik voor elk zoekwoord een aparte landingspagina nodig?", "acceptedAnswer": { "@type": "Answer", "text": "Nee. Groepeer zoekwoorden per thema en maak per thema één pagina. Zoekwoorden die hetzelfde aanbod beschrijven kunnen prima dezelfde pagina delen. Pas als het aanbod, de doelgroep of de zoekintentie duidelijk verschilt, loont een aparte pagina." } },
                                { "@type": "Question", "name": "Wat is een goed conversiepercentage voor een landingspagina met Google Ads verkeer?", "acceptedAnswer": { "@type": "Answer", "text": "Dat verschilt sterk per branche en per soort conversie. Veel leadpagina's zitten ergens tussen de 3 en 10 procent, webshops vaak lager per productpagina. Staar je niet blind op benchmarks: vergelijk vooral met je eigen cijfers van eerdere maanden en verbeter die stap voor stap." } },
                                { "@type": "Question", "name": "Hoe snel zie ik resultaat na het verbeteren van mijn landingspagina?", "acceptedAnswer": { "@type": "Answer", "text": "Sneller dan bij de meeste andere aanpassingen. De conversie op de pagina zelf verandert direct vanaf de eerste bezoekers. Het effect op je kwaliteitsscore en klikprijs volgt later, omdat Google eerst nieuwe data moet verzamelen. Reken op enkele weken voordat je dat deel betrouwbaar kunt beoordelen." } }
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
                        <Link to="/blogs/strategie" className="hover:text-accent transition-colors">Strategie</Link>
                        <ChevronRight className="w-3 h-3" />
                        <span className="text-primary truncate">Landingspagina en Google Ads</span>
                    </nav>

                    {/* Header */}
                    <header className="mb-16">
                        <div className="inline-block px-3 py-1 bg-accent/10 text-accent font-mono text-xs uppercase tracking-widest rounded-full mb-6">
                            Strategie
                        </div>
                        <h1 className="font-sans font-bold text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight mb-8">
                            Hoe maak je een landingspagina die aansluit bij je Google Ads?
                        </h1>

                        <div className="flex flex-wrap items-center gap-6 text-sm font-sans text-primary/60 border-y border-primary/10 py-6">
                            <div className="flex items-center gap-2">
                                <User className="w-4 h-4" />
                                <span>Empowers Redactie</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>19 juli 2026</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>7 minuten leestijd</span>
                            </div>
                        </div>
                    </header>

                    {/* Featured Image */}
                    <figure className="w-full h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden mb-16 relative bg-primary">
                        <div className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-overlay" style={{backgroundImage: "url('/images/blogs/landingspagina-google-ads-aansluiting.jpg')"}}></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </figure>

                    {/* Content */}
                    <div className="prose prose-lg prose-headings:font-sans prose-headings:font-bold prose-headings:text-primary prose-p:font-sans prose-p:text-primary/80 prose-p:leading-relaxed max-w-none">
                        <p className="text-xl md:text-2xl font-medium leading-relaxed mb-10 text-primary">
                            Een landingspagina die aansluit bij je Google Ads herhaalt de belofte uit je advertentie in de kop, toont hetzelfde aanbod en stuurt op één duidelijke actie. Klopt die aansluiting niet, dan haken bezoekers af en betaal je meer per klik. Google beloont pagina's die waarmaken wat de advertentie belooft.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Waarom moet je landingspagina aansluiten op je advertentie?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Elke klik op een advertentie is een belofte. Iemand zoekt iets, jouw advertentie zegt dat je het hebt, en de landingspagina moet dat bewijzen. Zit er licht tussen die belofte en de pagina, dan voelt de bezoeker zich verkeerd gestuurd.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Die beoordeling gaat snel. Binnen een paar seconden beslist een bezoeker of hij op de goede plek is. Vindt hij de woorden uit de advertentie niet terug, dan klikt hij weg en heb jij betaald voor niets.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            In de campagnes die wij overnemen is de landingspagina vaker het probleem dan de advertentie zelf. De campagne staat prima ingesteld, maar het verkeer landt op een algemene pagina die de belofte niet afmaakt. Zonde van elke klik.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat is message match precies?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Message match betekent dat je landingspagina dezelfde boodschap draagt als de advertentie waarop iemand klikte. Zelfde aanbod, zelfde woorden. De bezoeker moet direct herkennen dat hij goed zit.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een voorbeeld. Je advertentie zegt: dakisolatie in Utrecht vanaf 1.250 euro. Dan wil de bezoeker die belofte bovenaan de pagina terugzien. Een kop als 'Welkom bij Jansen Bouw' zegt hem niets en kost je de conversie.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Message match gaat verder dan de kop. Ook je knoptekst hoort bij hetzelfde verhaal. Belooft je advertentie een gratis offerte, dan heet de knop 'Vraag je gratis offerte aan' en niet 'Verstuur'.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe laat je je kop aansluiten op je advertentie?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Neem de belangrijkste belofte uit je advertentiekop en herhaal die bijna letterlijk in de kop van je landingspagina. Bijna letterlijk, want de pagina mag meer ruimte nemen dan de 30 tekens die Google Ads per advertentiekop toestaat.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Werk je met meerdere advertentiegroepen, schrijf dan per groep een eigen kop. De groep rond 'boekhouder zzp' verdient een andere kop dan de groep rond 'jaarrekening laten maken'. Hoe je zo'n kop scherp krijgt lees je in ons artikel over <Link to="/blogs/strategie/headline-landingspagina-schrijven-overtuigend" className="text-accent hover:underline">een overtuigende headline schrijven</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe sluit je aan op de zoekintentie achter het zoekwoord?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Achter elk zoekwoord zit een intentie. Wie zoekt op 'wat kost een boekhouder' is aan het verkennen. Wie zoekt op 'boekhouder inschakelen' wil actie ondernemen. Je landingspagina moet passen bij die fase.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Voor verkennende zoekwoorden werkt een pagina met uitleg en een laagdrempelige vervolgstap, zoals een prijsindicatie aanvragen. Voor koopgerichte zoekwoorden mag de pagina direct op de aanvraag sturen. Kort en zonder omwegen.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Check dit per advertentiegroep. Eén pagina die alle intenties tegelijk probeert te bedienen, bedient er meestal geen enkele goed.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat doet een goede aansluiting met je kwaliteitsscore?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Google beoordeelt elk zoekwoord met een kwaliteitsscore van 1 tot 10. Die score bestaat uit drie onderdelen: verwachte doorklikratio, advertentierelevantie en de ervaring op de landingspagina. Dat laatste onderdeel gaat precies over aansluiting.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een hogere kwaliteitsscore betekent meestal dat je minder betaalt per klik voor dezelfde positie. Google legt op de eigen <a href="https://support.google.com/google-ads/answer/6167118" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">supportpagina over kwaliteitsscore</a> uit dat een relevante landingspagina daar direct aan bijdraagt.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Andersom werkt het ook. Een trage of onduidelijke pagina drukt je score en maakt elke klik duurder. Snelheid speelt daarin mee, daarover schreven we eerder in ons artikel over <Link to="/blogs/strategie/landingspagina-laadtijd-verbeteren-conversies" className="text-accent hover:underline">de laadtijd van je landingspagina</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoeveel landingspagina's heb je nodig voor je campagnes?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Eén per thema is de vuistregel. Advertentiegroepen die hetzelfde aanbod met andere woorden beschrijven, kunnen dezelfde pagina delen. Zodra het aanbod of de doelgroep verschilt, verdient de campagne een eigen pagina.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Begin klein. Bouw eerst een pagina voor de advertentiegroep met het meeste budget en meet wat er gebeurt. Daarna breid je uit naar de rest van je campagnes.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Wil je zien hoe zo'n pagina er in de praktijk uitziet? Bekijk onze aanpak voor <Link to="/landingspagina" className="text-accent hover:underline">landingspagina's die converteren</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Welke fouten verpesten de aansluiting het vaakst?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De bekendste fout is advertentieverkeer naar de homepage sturen. Die pagina is gebouwd om te oriënteren, niet om één belofte af te maken. De bezoeker moet zelf op zoek en een flink deel haakt onderweg af.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een tweede fout is één algemene landingspagina onder een campagne met tien verschillende zoekthema's hangen. De pagina sluit dan nergens echt op aan en de kwaliteitsscore blijft hangen op een matig niveau.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            En let op je formulier. Een advertentie die een snelle offerte belooft, verliest zijn geloofwaardigheid bij een formulier met twaalf velden. Vraag alleen wat je echt nodig hebt voor de opvolging. De rest komt later wel.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe test je of je landingspagina echt aansluit?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Kijk eerst naar je cijfers per advertentiegroep. Een hoog bouncepercentage in combinatie met weinig conversies wijst op een mismatch tussen verwachting en pagina. Daar zit je verbeterruimte.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Test daarna gericht. Zet twee varianten van je kop tegenover elkaar en houd de winnaar. Hoe je dat betrouwbaar opzet lees je in ons artikel over <Link to="/blogs/strategie/ab-testen-landingspagina-stap-voor-stap" className="text-accent hover:underline">A/B-testen van landingspagina's</Link>.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Bekijk je pagina ook af en toe door de ogen van iemand die net op je advertentie klikte. Open de advertentie en de pagina naast elkaar. Als de overgang wringt, voel je dat meteen. Hoe wij advertenties en pagina's als één geheel beheren zie je op onze pagina over <Link to="/google-ads" className="text-accent hover:underline">Google Ads beheer</Link>.
                        </p>

                        <p className="text-primary/80 leading-relaxed mb-6">
                            Kort samengevat: een landingspagina die aansluit bij je Google Ads herhaalt de belofte uit de advertentie en maakt hem waar. Benieuwd hoeveel meer jouw campagnes kunnen opleveren met de juiste pagina's erachter? Plan een gratis gesprek via <Link to="/contact" className="text-accent hover:underline">empowers.nl/contact</Link>.
                        </p>

                        <hr className="my-16 border-primary/10" />

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Veelgestelde vragen over landingspagina's en Google Ads</h2>

                        <div className="space-y-6 not-prose">
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat is message match bij Google Ads?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Message match is de mate waarin je landingspagina dezelfde boodschap draagt als de advertentie waarop iemand klikte. De kop herhaalt de belofte uit de advertentie, het aanbod is hetzelfde en de vervolgstap past bij wat de advertentie aankondigde. Hoe sterker die match, hoe meer bezoekers blijven en converteren.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Mag ik mijn homepage gebruiken als landingspagina voor Google Ads?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Voor campagnes op je eigen bedrijfsnaam kan dat prima. Voor alle andere campagnes werkt een aparte landingspagina beter, omdat je homepage te breed is om één advertentiebelofte af te maken. Bezoekers moeten dan zelf zoeken naar het aanbod waarvoor ze klikten, en een deel doet dat niet.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Verlaagt een goede landingspagina mijn kosten per klik?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Vaak wel. De ervaring op de landingspagina is een van de onderdelen van de kwaliteitsscore in Google Ads. Een betere score betekent meestal dat je minder betaalt voor dezelfde positie. Het effect verschilt per branche en per campagne, maar betere aansluiting maakt kliks zelden duurder.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Heb ik voor elk zoekwoord een aparte landingspagina nodig?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Nee. Groepeer zoekwoorden per thema en maak per thema één pagina. Zoekwoorden die hetzelfde aanbod beschrijven kunnen prima dezelfde pagina delen. Pas als het aanbod, de doelgroep of de zoekintentie duidelijk verschilt, loont een aparte pagina.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat is een goed conversiepercentage voor een landingspagina met Google Ads verkeer?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Dat verschilt sterk per branche en per soort conversie. Veel leadpagina's zitten ergens tussen de 3 en 10 procent, webshops vaak lager per productpagina. Staar je niet blind op benchmarks: vergelijk vooral met je eigen cijfers van eerdere maanden en verbeter die stap voor stap.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoe snel zie ik resultaat na het verbeteren van mijn landingspagina?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Sneller dan bij de meeste andere aanpassingen. De conversie op de pagina zelf verandert direct vanaf de eerste bezoekers. Het effect op je kwaliteitsscore en klikprijs volgt later, omdat Google eerst nieuwe data moet verzamelen. Reken op enkele weken voordat je dat deel betrouwbaar kunt beoordelen.
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
                    <h2 className="relative z-10 font-drama italic text-background text-3xl sm:text-4xl md:text-5xl mb-6">Klik en pagina die één verhaal vertellen?</h2>
                    <p className="relative z-10 font-sans text-background/70 text-lg mb-10 max-w-xl mx-auto">
                        Wij bouwen Google Ads campagnes en landingspagina's die op elkaar aansluiten, van zoekwoord tot conversie.
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
