import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ChevronRight, User } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function BlogPostGoogleAdsDienstverlenersStrategie() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen selection:bg-accent/30 selection:text-dark flex flex-col bg-background">
            <Helmet>
                <title>Google Ads voor dienstverleners: wat werkt echt? | Empowers</title>
                <meta name="description" content="Google Ads werkt voor dienstverleners als je stuurt op aanvragen in plaats van kliks. Lees welke campagnes leads opleveren en welke budget verspillen." />
                <link rel="canonical" href="https://www.empowers.nl/blogs/google-ads/google-ads-dienstverleners-strategie" />
                <meta property="og:title" content="Google Ads voor dienstverleners: wat werkt echt? | Empowers" />
                <meta property="og:description" content="Google Ads werkt voor dienstverleners als je stuurt op aanvragen in plaats van kliks. Lees welke campagnes leads opleveren en welke budget verspillen." />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://www.empowers.nl/blogs/google-ads/google-ads-dienstverleners-strategie" />
                <meta property="og:image" content="https://www.empowers.nl/images/blogs/google-ads-dienstverleners-strategie.jpg" />
                <meta property="article:published_time" content="2026-07-19T16:00:00+02:00" />
                <meta property="article:author" content="Empowers" />
                <meta property="article:section" content="Google Ads" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Google Ads voor dienstverleners: wat werkt echt? | Empowers" />
                <meta name="twitter:description" content="Google Ads werkt voor dienstverleners als je stuurt op aanvragen in plaats van kliks. Lees welke campagnes leads opleveren en welke budget verspillen." />
                <script type="application/ld+json">{JSON.stringify({
                    "@context": "https://schema.org",
                    "@graph": [
                        {
                            "@type": "Article",
                            "headline": "Google Ads voor dienstverleners: wat werkt, wat niet?",
                            "image": "https://www.empowers.nl/images/blogs/google-ads-dienstverleners-strategie.jpg",
                            "description": "Google Ads werkt voor dienstverleners als je stuurt op aanvragen in plaats van kliks. Lees welke campagnes leads opleveren en welke budget verspillen.",
                            "author": { "@type": "Organization", "name": "Empowers" },
                            "publisher": { "@type": "Organization", "name": "Empowers", "url": "https://www.empowers.nl" },
                            "datePublished": "2026-07-19T16:00:00+02:00",
                            "dateModified": "2026-07-19T16:00:00+02:00",
                            "url": "https://www.empowers.nl/blogs/google-ads/google-ads-dienstverleners-strategie"
                        },
                        {
                            "@type": "BreadcrumbList",
                            "itemListElement": [
                                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.empowers.nl" },
                                { "@type": "ListItem", "position": 2, "name": "Nieuws", "item": "https://www.empowers.nl/nieuws" },
                                { "@type": "ListItem", "position": 3, "name": "Google Ads", "item": "https://www.empowers.nl/blogs/google-ads" },
                                { "@type": "ListItem", "position": 4, "name": "Google Ads voor dienstverleners: wat werkt, wat niet?", "item": "https://www.empowers.nl/blogs/google-ads/google-ads-dienstverleners-strategie" }
                            ]
                        },
                        {
                            "@type": "FAQPage",
                            "mainEntity": [
                                { "@type": "Question", "name": "Werkt Google Ads voor elke dienstverlener?", "acceptedAnswer": { "@type": "Answer", "text": "Bijna elke dienstverlener kan er klanten mee winnen, maar het rendement verschilt. Hoe hoger de waarde van een klant en hoe concreter de zoekvraag, hoe beter het werkt. Een letselschadejurist of installateur ziet vaak snel resultaat. Bij diensten waar niemand op zoekt, is eerst vraag creëren nodig en past een ander kanaal beter." } },
                                { "@type": "Question", "name": "Wat kost een lead via Google Ads?", "acceptedAnswer": { "@type": "Answer", "text": "Dat hangt af van je branche en regio. Voor veel lokale diensten liggen de kosten per aanvraag ergens tussen de 15 en 75 euro. In competitieve markten zoals juridisch of financieel advies kan een lead meer kosten. Reken het altijd terug naar wat een klant je oplevert, niet naar wat een klik kost." } },
                                { "@type": "Question", "name": "Moet ik als dienstverlener adverteren op mijn eigen bedrijfsnaam?", "acceptedAnswer": { "@type": "Answer", "text": "Meestal wel. De kliks zijn goedkoop en je voorkomt dat een concurrent bovenaan staat wanneer iemand jou zoekt. Controleer eerst of concurrenten op je naam bieden. Is dat niet zo en sta je organisch al bovenaan, dan kun je het budget ook elders inzetten." } },
                                { "@type": "Question", "name": "Zijn telefoontjes ook meetbaar als conversie?", "acceptedAnswer": { "@type": "Answer", "text": "Ja. Je kunt kliks op je telefoonnummer meten en met oproepmeting van Google zelfs de gespreksduur registreren. Voor veel dienstverleners is de telefoon het belangrijkste kanaal, dus zonder die meting mis je een groot deel van je conversies en stuurt je campagne op onvolledige data." } },
                                { "@type": "Question", "name": "Hoeveel budget heb ik als dienstverlener nodig om te starten?", "acceptedAnswer": { "@type": "Answer", "text": "Genoeg om per maand een handvol leads te halen, anders valt er niets te leren. Bij een leadprijs van rond de 40 euro betekent dat al snel een paar honderd euro advertentiebudget per maand. Belangrijker dan de hoogte is de looptijd: geef een campagne minimaal twee tot drie maanden." } },
                                { "@type": "Question", "name": "Kan ik Google Ads combineren met SEO?", "acceptedAnswer": { "@type": "Answer", "text": "Dat is zelfs de sterkste combinatie. Google Ads levert direct aanvragen op terwijl je met SEO bouwt aan gratis vindbaarheid op de lange termijn. De zoektermen die in je campagnes conversies opleveren, zijn meteen de termen waarvoor organische content het hardst rendeert." } }
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
                        <Link to="/blogs/google-ads" className="hover:text-accent transition-colors">Google Ads</Link>
                        <ChevronRight className="w-3 h-3" />
                        <span className="text-primary truncate">Google Ads voor dienstverleners</span>
                    </nav>

                    {/* Header */}
                    <header className="mb-16">
                        <div className="inline-block px-3 py-1 bg-accent/10 text-accent font-mono text-xs uppercase tracking-widest rounded-full mb-6">
                            Google Ads
                        </div>
                        <h1 className="font-sans font-bold text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight mb-8">
                            Google Ads voor dienstverleners: wat werkt, wat niet?
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
                                <span>6 minuten leestijd</span>
                            </div>
                        </div>
                    </header>

                    {/* Featured Image */}
                    <figure className="w-full h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden mb-16 relative bg-primary">
                        <div className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-overlay" style={{backgroundImage: "url('/images/blogs/google-ads-dienstverleners-strategie.jpg')"}}></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </figure>

                    {/* Content */}
                    <div className="prose prose-lg prose-headings:font-sans prose-headings:font-bold prose-headings:text-primary prose-p:font-sans prose-p:text-primary/80 prose-p:leading-relaxed max-w-none">
                        <p className="text-xl md:text-2xl font-medium leading-relaxed mb-10 text-primary">
                            Google Ads werkt voor dienstverleners zodra je stuurt op aanvragen in plaats van kliks. Zoekcampagnes op concrete zoektermen leveren leads op, brede campagnes zonder duidelijke intentie verbranden budget. Het verschil zit in drie keuzes: je zoekwoorden, je meting en de pagina waar bezoekers landen.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Waarom werkt Google Ads zo goed voor dienstverleners?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Mensen zoeken naar een dienst op het moment dat ze hem nodig hebben. Wie 'lekkage dak repareren' intypt, heeft nu een probleem en zoekt nu een oplossing. Met Google Ads sta je precies op dat moment bovenaan.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Daar komt bij dat één klant veel waard is. Een boekhouder die een klant voor jaren binnenhaalt of een aannemer met een verbouwing van tienduizenden euro's kan zich best een lead van 50 euro veroorloven. De rekensom is snel positief als de rest van het account klopt.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Welke aanpak werkt wel?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Begin met zoekcampagnes op termen met koopintentie. 'Boekhouder zzp kosten' en 'advocaat arbeidsrecht inschakelen' zijn goud. Wie daarop zoekt, is klaar om contact op te nemen. Beperk je in het begin tot die krenten uit de pap.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Baken je gebied af. De meeste dienstverleners werken regionaal, dus adverteer alleen waar je klanten vandaan komen en verwerk de regio in je advertentietekst. Sluit tegelijk zoekers uit die nooit klant worden, bijvoorbeeld met 'vacature' en 'zelf doen' als <Link to="/blogs/google-ads/negatieve-zoekwoorden-google-ads" className="text-accent hover:underline">negatieve zoekwoorden</Link>.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            En stuur bezoekers naar een pagina die over hun vraag gaat, niet naar je homepage. Een aparte pagina per dienst, met de belofte uit de advertentie in de kop en een duidelijk contactformulier, maakt van kliks aanvragen. Hoe je die aansluiting bouwt lees je in ons artikel over <Link to="/blogs/strategie/landingspagina-google-ads-aansluiting" className="text-accent hover:underline">een landingspagina die aansluit bij je Google Ads</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat werkt meestal niet?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Brede zoekwoorden zonder intentie. Adverteren op 'boekhouding' of 'advocaat' klinkt logisch, maar levert vooral kliks op van studenten, zoekers naar informatie en mensen buiten je regio. Duur verkeer dat nooit belt.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Displaycampagnes als leadmachine. Bannerbereik kan werken voor naamsbekendheid, maar wie vandaag leads wil, haalt uit het zoeknetwerk vrijwel altijd meer. In accounts van dienstverleners komen we hetzelfde patroon telkens tegen: het displaybudget produceert vertoningen, het zoekbudget produceert klanten.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Sturen op kliks in plaats van aanvragen. Een campagne kan er met veel verkeer gezond uitzien terwijl de telefoon stil blijft. Zonder conversiemeting weet je het verschil niet eens.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe meet je aanvragen goed?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Meet alles waarmee een klant zich meldt. Formulieren zijn het makkelijkst, maar voor veel dienstverleners komt het echte werk binnen via de telefoon. Meet daarom ook kliks op je telefoonnummer en gebruik oproepmeting om korte belletjes van echte aanvragen te onderscheiden.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Kijk daarna verder dan de aanvraag. Tien leads waarvan er negen niets worden, zijn minder waard dan vijf leads met drie nieuwe klanten. Houd bij welke campagnes klanten opleveren en niet alleen aanvragen. Hoe je die meting opzet lees je in ons artikel over <Link to="/blogs/tracking/marketing-tracking-conversies-meten" className="text-accent hover:underline">conversies meten met marketing tracking</Link>.
                        </p>

                        <p className="text-primary/80 leading-relaxed mb-6">
                            Koppel je aanvragen waar mogelijk aan je agenda of je klantenbestand. Zo zie je per campagne niet alleen wat een lead kost, maar ook welke leads klant worden en wat die klant oplevert. Een simpel spreadsheet is genoeg om mee te beginnen.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe schrijf je advertenties die aanvragen opleveren?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Benoem het probleem en de oplossing in de kop. 'Lekkage? Vandaag nog een loodgieter' werkt beter dan 'Welkom bij Jansen Installatietechniek'. De zoeker moet zichzelf herkennen in de eerste regel. Gebruik de rest van de ruimte voor wat jou anders maakt, zoals spoedservice of avondafspraken.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Neem twijfels weg in de beschrijving. Noem je reactietijd, je werkgebied en wat een eerste gesprek kost. Voor veel diensten is 'gratis kennismaking' de zin die de klik over de streep trekt.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            En houd je belofte klein en waar. Een advertentie die binnen een uur reactie belooft terwijl je agenda vol zit, levert boze bellers op. Test daarna varianten: wissel twee koppen af en kijk welke meer aanvragen oplevert, niet alleen meer kliks.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat kost een lead voor een dienstverlener?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Voor veel lokale diensten ligt de prijs per aanvraag ergens tussen de 15 en 75 euro. Concurrerende markten zoals juridisch en financieel advies zitten daarboven, simpelweg omdat de klikprijzen daar hoger liggen.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Belangrijker dan het bedrag is de verhouding. Weet wat een gemiddelde klant je oplevert en hoeveel aanvragen je nodig hebt voor één klant. Vanaf dat moment is je leadprijs geen kostenpost meer maar een inkoopprijs.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe start je slim?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Klein en scherp. Eén campagne, je best renderende dienst, je eigen regio en een landingspagina die over die ene dienst gaat. Zodra die combinatie aanvragen oplevert tegen een gezonde prijs, breid je uit naar je volgende dienst.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Waarom adverteren voor diensten fundamenteel anders is dan voor producten, lees je in ons artikel over <Link to="/blogs/google-ads/google-ads-dienstenbedrijven-werkt-anders" className="text-accent hover:underline">Google Ads voor dienstenbedrijven</Link>.
                        </p>

                        <p className="text-primary/80 leading-relaxed mb-6">
                            Kort samengevat: dienstverleners winnen met Google Ads door scherp te targeten op koopintentie en te sturen op aanvragen. Benieuwd wat er voor jouw praktijk of bedrijf in zit? Bekijk onze aanpak voor <Link to="/google-ads" className="text-accent hover:underline">Google Ads beheer</Link> of plan een gratis gesprek via <Link to="/contact" className="text-accent hover:underline">empowers.nl/contact</Link>.
                        </p>

                        <hr className="my-16 border-primary/10" />

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Veelgestelde vragen over Google Ads voor dienstverleners</h2>

                        <div className="space-y-6 not-prose">
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Werkt Google Ads voor elke dienstverlener?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Bijna elke dienstverlener kan er klanten mee winnen, maar het rendement verschilt. Hoe hoger de waarde van een klant en hoe concreter de zoekvraag, hoe beter het werkt. Een letselschadejurist of installateur ziet vaak snel resultaat. Bij diensten waar niemand op zoekt, is eerst vraag creëren nodig en past een ander kanaal beter.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat kost een lead via Google Ads?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Dat hangt af van je branche en regio. Voor veel lokale diensten liggen de kosten per aanvraag ergens tussen de 15 en 75 euro. In competitieve markten zoals juridisch of financieel advies kan een lead meer kosten. Reken het altijd terug naar wat een klant je oplevert, niet naar wat een klik kost.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Moet ik als dienstverlener adverteren op mijn eigen bedrijfsnaam?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Meestal wel. De kliks zijn goedkoop en je voorkomt dat een concurrent bovenaan staat wanneer iemand jou zoekt. Controleer eerst of concurrenten op je naam bieden. Is dat niet zo en sta je organisch al bovenaan, dan kun je het budget ook elders inzetten.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Zijn telefoontjes ook meetbaar als conversie?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Ja. Je kunt kliks op je telefoonnummer meten en met oproepmeting van Google zelfs de gespreksduur registreren. Voor veel dienstverleners is de telefoon het belangrijkste kanaal, dus zonder die meting mis je een groot deel van je conversies en stuurt je campagne op onvolledige data.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoeveel budget heb ik als dienstverlener nodig om te starten?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Genoeg om per maand een handvol leads te halen, anders valt er niets te leren. Bij een leadprijs van rond de 40 euro betekent dat al snel een paar honderd euro advertentiebudget per maand. Belangrijker dan de hoogte is de looptijd: geef een campagne minimaal twee tot drie maanden.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Kan ik Google Ads combineren met SEO?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Dat is zelfs de sterkste combinatie. Google Ads levert direct aanvragen op terwijl je met SEO bouwt aan gratis vindbaarheid op de lange termijn. De zoektermen die in je campagnes conversies opleveren, zijn meteen de termen waarvoor organische content het hardst rendeert.
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
                    <h2 className="relative z-10 font-drama italic text-background text-3xl sm:text-4xl md:text-5xl mb-6">Een agenda vol goede aanvragen?</h2>
                    <p className="relative z-10 font-sans text-background/70 text-lg mb-10 max-w-xl mx-auto">
                        Wij bouwen campagnes voor dienstverleners die sturen op klanten, niet op kliks.
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
