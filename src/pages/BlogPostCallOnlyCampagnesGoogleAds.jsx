import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ChevronRight, User } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function BlogPostCallOnlyCampagnesGoogleAds() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen selection:bg-accent/30 selection:text-dark flex flex-col bg-background">
            <Helmet>
                <title>Call-only campagnes in Google Ads: wanneer zet je ze in? | Empowers</title>
                <meta name="description" content="Met call-only campagnes bellen klanten je direct vanuit de zoekresultaten. Lees wanneer dit werkt, hoe je het instelt en wat een gesprek mag kosten." />
                <link rel="canonical" href="https://www.empowers.nl/blogs/google-ads/call-only-campagnes-google-ads" />
                <meta property="og:title" content="Call-only campagnes in Google Ads: wanneer zet je ze in?" />
                <meta property="og:description" content="Direct telefoontjes uit je advertenties halen: zo werkt het." />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://www.empowers.nl/blogs/google-ads/call-only-campagnes-google-ads" />
                <meta property="og:image" content="https://www.empowers.nl/images/blogs/call-only-campagnes-google-ads.jpg" />
                <meta property="article:published_time" content="2026-08-02T20:00:00+02:00" />
                <meta property="article:author" content="Empowers" />
                <meta property="article:section" content="Google Ads" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Call-only campagnes in Google Ads" />
                <meta name="twitter:description" content="Wanneer bellen beter converteert dan klikken." />

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@graph": [
                            {
                                "@type": "Article",
                                "headline": "Call-only campagnes in Google Ads: wanneer zet je ze in?",
                                "description": "Met call-only campagnes bellen klanten je direct vanuit de zoekresultaten. Lees wanneer dit werkt, hoe je het instelt en wat een gesprek mag kosten.",
                                "image": "https://www.empowers.nl/images/blogs/call-only-campagnes-google-ads.jpg",
                                "datePublished": "2026-08-02T20:00:00+02:00",
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
                                    { "@type": "ListItem", "position": 3, "name": "Google Ads", "item": "https://www.empowers.nl/blogs/google-ads" },
                                    { "@type": "ListItem", "position": 4, "name": "Call-only campagnes", "item": "https://www.empowers.nl/blogs/google-ads/call-only-campagnes-google-ads" }
                                ]
                            },
                            {
                                "@type": "FAQPage",
                                "mainEntity": [
                                    {
                                        "@type": "Question",
                                        "name": "Wat is een call-only campagne in Google Ads?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Een campagnevorm waarbij een klik op je advertentie direct een telefoongesprek start in plaats van een websitebezoek. Google noemt dit officieel oproepadvertenties. Ze verschijnen alleen op apparaten die kunnen bellen en zijn bedoeld voor bedrijven waar de telefoon de belangrijkste bron van klanten is."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Voor welke bedrijven werken call-only campagnes?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Voor diensten met spoed of direct contact: loodgieters, slotenmakers, garages, tandartsen met spoedplekken en juridische hulp. De gemene deler is dat de klant nu iemand wil spreken en niet eerst een website wil vergelijken. Voor webshops of lange beslistrajecten zijn ze ongeschikt."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Wat kost een telefoontje via een call-only campagne?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Je betaalt per klik op de belknop, tegen vergelijkbare kliktarieven als gewone zoekadvertenties in jouw branche. In spoedbranches kan een klik enkele euro's kosten. Bepaal daarom wat een klant je waard is en reken terug wat een gesprek maximaal mag kosten."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Hoe meet je of gesprekken uit de campagne waardevol zijn?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Stel gespreksconversies in en tel alleen gesprekken boven een minimale duur mee, bijvoorbeeld één minuut. Korte gesprekken zijn vaak misklikken of verkeerde nummers. Wie het serieus aanpakt, registreert intern welke gesprekken een afspraak of opdracht werden en stuurt daarop."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Wanneer laat je een call-only campagne draaien?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Alleen wanneer iemand de telefoon opneemt. Plan de advertenties via een advertentieplanning binnen je openingstijden, of ruimer als je een spoeddienst hebt. Elke klik buiten je bereikbaarheid is weggegooid budget en een gefrustreerde beller."
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
                        <Link to="/blogs/google-ads" className="hover:text-accent transition-colors">Google Ads</Link>
                        <ChevronRight className="w-3 h-3" />
                        <span className="text-primary truncate">Call-only campagnes</span>
                    </nav>

                    <header className="mb-16">
                        <div className="inline-block px-3 py-1 bg-accent/10 text-accent font-mono text-xs uppercase tracking-widest rounded-full mb-6">
                            Google Ads
                        </div>
                        <h1 className="font-sans font-bold text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight mb-8">
                            Call-only campagnes in Google Ads: wanneer zet je ze in?
                        </h1>
                        <div className="flex flex-wrap items-center gap-6 text-sm font-sans text-primary/60 border-y border-primary/10 py-6">
                            <div className="flex items-center gap-2"><User className="w-4 h-4" /><span>Empowers Redactie</span></div>
                            <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>2 augustus 2026</span></div>
                            <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>6 minuten leestijd</span></div>
                        </div>
                    </header>

                    <figure className="w-full h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden mb-16 relative bg-primary">
                        <div className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-overlay" style={{backgroundImage: "url('/images/blogs/call-only-campagnes-google-ads.jpg')"}}></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </figure>

                    <div className="prose prose-lg max-w-none prose-headings:text-primary prose-headings:font-bold prose-a:text-accent prose-a:underline hover:prose-a:text-accent/80">
                        <p className="text-xl leading-relaxed text-primary/80 font-medium mb-6">
                            Call-only campagnes, door Google oproepadvertenties genoemd, zet je in als de telefoon je belangrijkste kanaal is en klanten met spoed zoeken. Een klik op de advertentie start direct een gesprek, zonder tussenkomst van je website. Voor een slotenmaker om 23:00 uur is dat perfect. Voor een webshop is het weggegooid geld. Het verschil zit in de intentie van de zoeker.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe werkt een oproepadvertentie precies?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een oproepadvertentie verschijnt in de zoekresultaten op telefoons en toont je bedrijfsnaam met je telefoonnummer en een belknop. Wie erop tikt, opent direct het belscherm. Je betaalt per klik op die knop, net als bij een gewone zoekadvertentie, alleen is de conversie hier het gesprek zelf.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Je kunt een website-link toevoegen als optie, maar het zwaartepunt ligt op bellen. Dat maakt deze vorm wezenlijk anders dan een normale campagne met een bel-extensie: daar is bellen een bijzaak naast de klik, hier is het de hoofdzaak.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Voor wie zijn call-only campagnes gemaakt?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Voor bedrijven waar de klant belt op het moment van nood of directe behoefte. Denk aan een lekkage op zondagavond, een auto die niet start of een afgebroken kies. De zoeker wil geen website vergelijken, hij wil nu iemand aan de lijn. Hoe korter de afstand tussen zoeken en bellen, hoe beter deze campagnevorm presteert.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Ook buiten spoedbranches kan het werken, bijvoorbeeld voor afspraakgedreven diensten waar mensen liever even bellen dan een formulier invullen. De toets is simpel: krijg je nu al veel telefonische aanvragen en converteren die goed? Dan is een oproepcampagne het testen waard. Komen je klanten vooral via je website binnen, kies dan voor een gewone <Link to="/blogs/google-ads/google-ads-voor-mkb-campagne-instellen" className="text-accent hover:underline">zoekcampagne</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe stel je een sterke oproepadvertentie op?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Schrijf voor de beller, niet voor de lezer. Benoem wat iemand aan de telefoon krijgt: direct contact, snel iemand ter plaatse, vandaag nog een afspraak. Vermeld je werkgebied, want een beller uit een regio die je niet bedient kost geld en levert niets op. En gebruik zoektermen met belintentie: combinaties met spoed, direct, vandaag en bellen presteren hier het best.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Sluit tegelijk de termen uit die niet bij bellen passen. Wie zoekt op vacatures, reviews of doe-het-zelf-oplossingen gaat niet bellen om klant te worden. Een scherpe lijst uitsluitingszoekwoorden is bij deze campagnevorm minstens zo belangrijk als de advertentie zelf.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wanneer laat je de campagne draaien?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Alleen als er iemand opneemt. Het klinkt vanzelfsprekend, maar dit is de meest gemaakte fout: campagnes die 24 uur per dag draaien terwijl de telefoon na 17:00 uur onbemand is. Elke klik daarna is verspild budget plus een teleurgestelde beller die je concurrent belt.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Stel daarom een advertentieplanning in die je bereikbaarheid volgt. Heb je een echte spoeddienst, adverteer dan juist in de avonduren, want dan is de concurrentie kleiner en de nood het hoogst. Zorg wel dat de doorschakeling naar de dienstdoende collega werkt voordat je het budget opendraait.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe meet je de kwaliteit van de gesprekken?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Zet gespreksconversies aan in Google Ads en hanteer een minimale gespreksduur, bijvoorbeeld zestig seconden, voordat een gesprek als conversie telt. Zo filter je misklikken en verkeerde nummers eruit. In de accounts die we beheren maakt die ene instelling vaak het verschil tussen een campagne die rendabel lijkt en een die het echt is.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Wil je verder gaan, registreer dan intern wat elk gesprek oplevert: afspraak, opdracht of niets. Koppel dat terug naar de campagne en je weet wat een gesprek werkelijk waard is. Hoe je zulke offline resultaten terugbrengt in je campagnes lees je in ons artikel over <Link to="/blogs/tracking/offline-conversies-online-advertenties" className="text-accent hover:underline">offline conversies meten</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat mag een gesprek kosten?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Reken terug vanaf de klantwaarde. Levert een gemiddelde opdracht 400 euro op en wordt één op de drie gesprekken een opdracht, dan mag een gesprek ruwweg 130 euro kosten om break-even te spelen. Met kliktarieven van enkele euro's en een redelijk percentage serieuze bellers zit je daar normaal ruim onder, maar de som vertelt je precies wanneer je moet ingrijpen.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Wil je weten of call-only campagnes in jouw branche uit kunnen, of draait je huidige campagne niet zoals je hoopte? We rekenen het door en zetten hem goed. Plan een gesprek via onze <Link to="/contact" className="text-accent hover:underline">contactpagina</Link>.
                        </p>
                    </div>

                    <section className="mt-16 pt-12 border-t border-primary/10">
                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Veelgestelde vragen</h2>
                        <div className="space-y-6 not-prose">
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat is een call-only campagne in Google Ads?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Een campagnevorm waarbij een klik op je advertentie direct een telefoongesprek start in plaats van een websitebezoek. Google noemt dit officieel oproepadvertenties. Ze verschijnen alleen op apparaten die kunnen bellen en zijn bedoeld voor bedrijven waar de telefoon de belangrijkste bron van klanten is.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Voor welke bedrijven werken call-only campagnes?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Voor diensten met spoed of direct contact: loodgieters, slotenmakers, garages, tandartsen met spoedplekken en juridische hulp. De gemene deler is dat de klant nu iemand wil spreken en niet eerst een website wil vergelijken. Voor webshops of lange beslistrajecten zijn ze ongeschikt.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat kost een telefoontje via een call-only campagne?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Je betaalt per klik op de belknop, tegen vergelijkbare kliktarieven als gewone zoekadvertenties in jouw branche. In spoedbranches kan een klik enkele euro's kosten. Bepaal daarom wat een klant je waard is en reken terug wat een gesprek maximaal mag kosten.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoe meet je of gesprekken uit de campagne waardevol zijn?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Stel gespreksconversies in en tel alleen gesprekken boven een minimale duur mee, bijvoorbeeld één minuut. Korte gesprekken zijn vaak misklikken of verkeerde nummers. Wie het serieus aanpakt, registreert intern welke gesprekken een afspraak of opdracht werden en stuurt daarop.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wanneer laat je een call-only campagne draaien?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Alleen wanneer iemand de telefoon opneemt. Plan de advertenties via een advertentieplanning binnen je openingstijden, of ruimer als je een spoeddienst hebt. Elke klik buiten je bereikbaarheid is weggegooid budget en een gefrustreerde beller.</p>
                            </div>
                        </div>
                    </section>

                    <section className="mt-16 pt-12 border-t border-primary/10">
                        <h3 className="text-xl font-bold text-primary mb-6">Lees ook</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <Link to="/blogs/google-ads/google-ads-voor-mkb-campagne-instellen" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Google Ads voor MKB</h3>
                                <p className="text-primary/60 text-sm">Zelf een campagne instellen die presteert.</p>
                            </Link>
                            <Link to="/blogs/google-ads/link-google-ads-google-analytics" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Google Ads koppelen aan GA4</h3>
                                <p className="text-primary/60 text-sm">Meet wat je advertenties na de klik opleveren.</p>
                            </Link>
                            <Link to="/blogs/google-ads/waarom-google-ads-klikken-converteren" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Klikken maar geen conversies?</h3>
                                <p className="text-primary/60 text-sm">Waarom campagnes klikken trekken zonder klanten.</p>
                            </Link>
                        </div>
                    </section>

                </div>
            </article>

            <section className="w-full pb-32 px-6">
                <div className="max-w-4xl mx-auto bg-primary rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
                    <h2 className="relative z-10 font-drama italic text-background text-3xl sm:text-4xl md:text-5xl mb-6">
                        Meer telefoontjes van echte klanten?
                    </h2>
                    <p className="relative z-10 font-sans text-background/70 text-lg mb-10 max-w-xl mx-auto">
                        We bouwen campagnes die de telefoon laten rinkelen op de momenten dat jij kunt opnemen. Meetbaar tot het gesprek.
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
