import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ChevronRight, User } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function BlogPostGoogleAdsLokaleBedrijven() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen selection:bg-accent/30 selection:text-dark flex flex-col bg-background">
            <Helmet>
                <title>Google Ads voor lokale bedrijven: zo trek je klanten uit jouw regio | Empowers</title>
                <meta name="description" content="Google Ads voor lokale bedrijven werkt als je de juiste instellingen gebruikt. Lees hoe je met locatietargeting klanten uit jouw regio bereikt en wat het kost." />
                <link rel="canonical" href="https://www.empowers.nl/blogs/google-ads/google-ads-lokale-bedrijven" />
                <meta property="og:title" content="Google Ads voor lokale bedrijven: zo trek je klanten uit jouw regio" />
                <meta property="og:description" content="Zo bereik je met Google Ads klanten in jouw regio. Lokale targeting, budget en veelgemaakte fouten uitgelegd." />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://www.empowers.nl/blogs/google-ads/google-ads-lokale-bedrijven" />
                <meta property="og:image" content="https://www.empowers.nl/images/blogs/google-ads-lokale-bedrijven.jpg" />
                <meta property="article:published_time" content="2026-04-12T00:00:00+02:00" />
                <meta property="article:author" content="Empowers" />
                <meta property="article:section" content="Google Ads" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Google Ads voor lokale bedrijven: zo trek je klanten uit jouw regio" />
                <meta name="twitter:description" content="Google Ads voor lokale bedrijven: locatietargeting, kosten en tips om klanten uit jouw regio te bereiken." />

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Article",
                        "headline": "Google Ads voor lokale bedrijven: zo trek je klanten uit jouw regio",
                        "description": "Google Ads voor lokale bedrijven werkt als je de juiste instellingen gebruikt. Lees hoe je met locatietargeting klanten uit jouw regio bereikt en wat het kost.",
                        "image": "https://www.empowers.nl/images/blogs/google-ads-lokale-bedrijven.jpg",
                        "datePublished": "2026-04-12T00:00:00+02:00",
                        "author": { "@type": "Organization", "name": "Empowers" },
                        "publisher": {
                            "@type": "Organization",
                            "name": "Empowers",
                            "url": "https://www.empowers.nl",
                            "logo": {
                                "@type": "ImageObject",
                                "url": "https://www.empowers.nl/empowers-logo-color.svg"
                            }
                        },
                        "mainEntity": {
                            "@type": "FAQPage",
                            "mainEntity": [
                                {
                                    "@type": "Question",
                                    "name": "Hoeveel kost Google Ads voor een lokaal bedrijf?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "De meeste lokale bedrijven beginnen met 500 tot 1500 euro per maand aan advertentiebudget. De klikprijs verschilt per branche: een loodgieter betaalt 3 tot 8 euro per klik, een kapper 0,50 tot 2 euro. Daarnaast komen beheerskosten als je een bureau inschakelt, meestal 300 tot 700 euro per maand."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Wat is locatietargeting in Google Ads?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Met locatietargeting bepaal je in welk gebied je advertenties worden vertoond. Je kiest een stad, provincie of straal rondom je bedrijfslocatie. Zo betaal je alleen voor klikken van mensen die daadwerkelijk in jouw regio zoeken. Dit voorkomt dat je budget weglekt naar klanten die je toch niet kunt bedienen."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Werkt Google Ads ook voor kleine lokale ondernemers?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Ja. Google Ads is juist geschikt voor kleine lokale bedrijven omdat je heel gericht kunt adverteren. Je kiest precies op welke zoektermen en in welk gebied je verschijnt. Met een budget van 15 tot 30 euro per dag bereik je al potentiele klanten die actief zoeken naar wat jij aanbiedt."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Hoe snel zie ik resultaat met lokale Google Ads?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "De eerste klikken en telefoontjes komen vaak al binnen de eerste week. Maar het duurt twee tot vier weken voordat Google genoeg data heeft om je campagne goed aan te sturen. Na een maand weet je welke zoektermen en advertenties het beste presteren. Echte resultaten beoordeel je na acht tot twaalf weken."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Moet ik Google Ads combineren met een Google Bedrijfsprofiel?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Absoluut. Je Google Bedrijfsprofiel (voorheen Google Mijn Bedrijf) versterkt je advertenties. Met locatie-extensies toon je je adres en telefoonnummer direct in de advertentie. Dat verhoogt de klikratio met gemiddeld 10 tot 15 procent. Bovendien verschijn je dan ook in Google Maps resultaten."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Kan ik zelf Google Ads instellen voor mijn lokale bedrijf?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Dat kan, maar de meeste ondernemers verspillen in de eerste maanden 30 tot 50 procent van hun budget door verkeerde instellingen. Vooral de locatie-instellingen, zoekwoordtypes en biedstrategieen vragen kennis. Begin je toch zelf? Start klein, meet alles en schaal pas op als je ziet wat werkt."
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
                            {
                                "@type": "ListItem",
                                "position": 1,
                                "name": "Home",
                                "item": "https://www.empowers.nl"
                            },
                            {
                                "@type": "ListItem",
                                "position": 2,
                                "name": "Blogs",
                                "item": "https://www.empowers.nl/blogs"
                            },
                            {
                                "@type": "ListItem",
                                "position": 3,
                                "name": "Google Ads",
                                "item": "https://www.empowers.nl/blogs/google-ads"
                            },
                            {
                                "@type": "ListItem",
                                "position": 4,
                                "name": "Google Ads lokale bedrijven",
                                "item": "https://www.empowers.nl/blogs/google-ads/google-ads-lokale-bedrijven"
                            }
                        ]
                    })}
                </script>
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
                        <span className="text-primary truncate">Google Ads lokale bedrijven</span>
                    </nav>

                    {/* Header */}
                    <header className="mb-16">
                        <div className="inline-block px-3 py-1 bg-accent/10 text-accent font-mono text-xs uppercase tracking-widest rounded-full mb-6">
                            Google Ads
                        </div>
                        <h1 className="font-sans font-bold text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight mb-8">
                            Google Ads voor lokale bedrijven: zo trek je klanten uit jouw regio
                        </h1>

                        <div className="flex flex-wrap items-center gap-6 text-sm font-sans text-primary/60 border-y border-primary/10 py-6">
                            <div className="flex items-center gap-2">
                                <User className="w-4 h-4" />
                                <span>Empowers Redactie</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>12 april 2026</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>8 minuten leestijd</span>
                            </div>
                        </div>
                    </header>

                    {/* Featured Image */}
                    <figure className="w-full h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden mb-16 relative bg-primary">
                        <div className="absolute inset-0 bg-[url('/images/blogs/google-ads-lokale-bedrijven.jpg')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </figure>

                    {/* Content */}
                    <div className="prose prose-lg max-w-none prose-headings:text-primary prose-headings:font-bold prose-a:text-accent prose-a:underline hover:prose-a:text-accent/80">
                        <p className="text-xl leading-relaxed text-primary/80 font-medium mb-6">
                            Google Ads voor lokale bedrijven werkt als je de juiste instellingen gebruikt. De meeste MKB-ondernemers starten met een breed bereik en zien hun budget verdwijnen aan klikken uit heel Nederland. Met locatietargeting, de juiste zoekwoorden en een slim budget bereik je precies de mensen die in jouw stad of regio zoeken naar wat jij aanbiedt.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Waarom is Google Ads zo geschikt voor lokale bedrijven?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Als iemand in Breda zoekt naar "loodgieter spoed" of "tandarts Breda centrum", dan is die persoon op dat moment op zoek naar een oplossing. Niet morgen, niet volgende week. Nu. Google Ads plaatst jouw bedrijf bovenaan die zoekresultaten, precies op het moment dat een potentiele klant je nodig heeft.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Dat is het grote verschil met social media adverteren. Op Facebook of Instagram stoor je iemand die aan het scrollen is. Op Google bereik je iemand die al zoekt. Bij onze klanten zien we dat lokale Google Ads campagnes gemiddeld 2 tot 5 keer meer conversies opleveren per euro dan breed ingestelde campagnes. De reden is simpel: je bereikt mensen met koopintentie in jouw directe omgeving.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe stel je locatietargeting goed in?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Locatietargeting is de belangrijkste instelling voor lokale campagnes. En het is precies waar de meeste fouten worden gemaakt. Standaard staat Google Ads ingesteld op "Personen in of met belangstelling voor je doellocaties." Dat klinkt logisch, maar het betekent dat iemand in Groningen die googelt naar "kapper Amsterdam" jouw advertentie te zien krijgt als je kapper in Amsterdam bent.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Verander die instelling naar "Personen in of regelmatig in je doellocaties." Daarmee bereik je alleen mensen die zich fysiek in jouw gebied bevinden. Kies vervolgens een straal rondom je bedrijfslocatie. Voor een restaurant of kapper is 5 tot 10 kilometer realistisch. Voor een accountant of aannemer kun je breder gaan: 20 tot 40 kilometer.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            We merken in de praktijk dat deze ene aanpassing bij nieuwe klanten direct 15 tot 30 procent besparing oplevert. Je betaalt simpelweg niet meer voor klikken van mensen die je nooit gaan bezoeken.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Welke zoekwoorden gebruik je voor een lokale campagne?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Lokale zoekwoorden bevatten bijna altijd een plaatsnaam of regio. Denk aan "schilder Utrecht", "autobelettering Eindhoven" of "fysiotherapeut Den Haag". Maar vergeet ook de zoekopdrachten zonder plaatsnaam niet. Als iemand in Rotterdam zoekt naar "beste sushi restaurant", toont Google resultaten in de buurt. Met de juiste locatietargeting verschijn je daar ook zonder de plaatsnaam in je zoekwoord.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Gebruik een mix van zoekwoordtypes. Exacte zoekwoorden als [loodgieter Breda] voor de meest gerichte klikken. Woordgroepen als "loodgieter in Breda" voor variaties. En vergeet de <Link to="/blogs/google-ads/negatieve-zoekwoorden-google-ads" className="text-accent hover:underline">negatieve zoekwoorden</Link> niet. Sluit termen uit als "vacature", "opleiding" en "gratis" om klikken te voorkomen die niks opleveren.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoeveel budget heb je nodig voor lokale Google Ads?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Het mooie van lokale campagnes is dat je met minder budget meer bereikt. Je concurreert niet met heel Nederland maar met bedrijven in jouw regio. Een dagbudget van 15 tot 30 euro is voor de meeste lokale bedrijven een goed startpunt. Dat is 450 tot 900 euro per maand.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De klikprijs hangt af van je branche. Een advocaat in Amsterdam betaalt 8 tot 15 euro per klik. Een bloemenwinkel in Tilburg betaalt 0,40 tot 1,50 euro. Gemiddeld zien we bij lokale MKB-klanten een klikprijs van 1,50 tot 5 euro. Bij een conversiepercentage van 5 tot 10 procent betekent dat een kosten per lead van 15 tot 100 euro, afhankelijk van je branche.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een veelgemaakte fout die we tegenkomen: ondernemers die 10 euro per dag instellen en na een week concluderen dat het niet werkt. Google heeft data nodig. Geef een campagne minimaal drie tot vier weken met voldoende budget voordat je beoordeelt of het rendabel is.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe versterkt je Google Bedrijfsprofiel je advertenties?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Je Google Bedrijfsprofiel en Google Ads werken samen. Door locatie-extensies te koppelen toon je je adres, telefoonnummer en openingstijden direct in de advertentie. Dat scheelt een klik: iemand belt direct of navigeert naar je zaak via Google Maps.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een ondernemer die we begeleiden, een tandartspraktijk in Den Bosch, zag na het koppelen van het bedrijfsprofiel 22 procent meer bel-conversies. Mensen vertrouwen een advertentie meer als ze direct het adres, de reviews en de afstand zien. Zorg ook dat je Google Bedrijfsprofiel compleet en actueel is: foto's, openingstijden, diensten en reacties op reviews. Google beloont complete profielen met een hogere zichtbaarheid.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Welke campagnetypes werken voor lokale bedrijven?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Voor lokale bedrijven zijn Search campagnes het meest effectief. Je advertentie verschijnt wanneer iemand actief zoekt naar je dienst of product. Dat is directe koopintentie. Meer over het verschil tussen campagnetypes lees je in onze blog over <Link to="/blogs/google-ads/google-ads-display-vs-search" className="text-accent hover:underline">Google Ads Display vs Search</Link>.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Performance Max campagnes kunnen ook werken, maar wees voorzichtig. Bij lokale bedrijven met een klein budget verspreid je je geld over te veel kanalen. Begin met Search, voeg later Display toe voor merkbekendheid in je regio, en overweeg Performance Max pas als je genoeg conversiedata hebt. Minimaal 30 conversies per maand is een goede richtlijn.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Welke fouten maken lokale bedrijven het vaakst?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De eerste fout noemden we al: verkeerde locatie-instellingen. Maar er zijn meer valkuilen. Veel ondernemers vergeten oproepextensies in te stellen. Voor een loodgieter of restaurant is een telefoontje vaak meer waard dan een websitebezoek. Voeg altijd je telefoonnummer toe aan je advertenties.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Fout twee: te brede zoekwoorden. "Schilder" als zoekwoord matcht ook op "schilderij kopen", "Bob Ross schilderen" en "schilder vacature". Gebruik specifieke combinaties en sluit irrelevante termen uit. Een schone zoekwoordenlijst bespaart tientallen procenten budget.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Fout drie: je landingspagina sluit niet aan. Als iemand zoekt op "fysiotherapeut Haarlem" en op je homepage landt zonder vermelding van Haarlem, dan klikt diegene weg. Maak landingspagina's die de plaatsnaam noemen, lokale informatie bevatten en een duidelijke call-to-action hebben. Bellen, afspraak maken of route plannen, maak het makkelijk.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe meet je of je lokale Google Ads campagne werkt?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Niet alleen klikken tellen. De cijfers die ertoe doen voor lokale bedrijven: belconversies, routebeschrijvingen via Google Maps, formulierinzendingen en WhatsApp-berichten. Stel conversietracking in voor elk van deze acties. Zonder tracking weet je niet welke zoekwoorden en advertenties klanten opleveren en welke alleen geld kosten. Lees meer over het <Link to="/blogs/google-ads/meet-roi-google-ads-campagne" className="text-accent hover:underline">meten van ROI in Google Ads</Link>.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Kijk ook naar je kosten per lead. Als een nieuwe klant je gemiddeld 500 euro oplevert en je betaalt 40 euro per lead, dan is dat een rendabele campagne. Zelfs als maar 1 op de 5 leads daadwerkelijk klant wordt, betaal je 200 euro voor een klant die 500 euro oplevert. Die rekensom maakt Google Ads voor veel lokale bedrijven een van de snelste manieren om te groeien.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Wil je weten wat Google Ads voor jouw lokale bedrijf kan opleveren? We kijken er graag naar. Plan een gesprek via onze <Link to="/contact" className="text-accent hover:underline">contactpagina</Link>.
                        </p>
                    </div>

                    {/* FAQ Section */}
                    <section className="mt-16 pt-12 border-t border-primary/10">
                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Veelgestelde vragen</h2>
                        <div className="space-y-6 not-prose">
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoeveel kost Google Ads voor een lokaal bedrijf?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    De meeste lokale bedrijven beginnen met 500 tot 1500 euro per maand aan advertentiebudget. De klikprijs verschilt per branche: een loodgieter betaalt 3 tot 8 euro per klik, een kapper 0,50 tot 2 euro. Daarnaast komen beheerskosten als je een bureau inschakelt, meestal 300 tot 700 euro per maand.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat is locatietargeting in Google Ads?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Met locatietargeting bepaal je in welk gebied je advertenties worden vertoond. Je kiest een stad, provincie of straal rondom je bedrijfslocatie. Zo betaal je alleen voor klikken van mensen die daadwerkelijk in jouw regio zoeken. Dit voorkomt dat je budget weglekt naar klanten die je toch niet kunt bedienen.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Werkt Google Ads ook voor kleine lokale ondernemers?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Ja. Google Ads is juist geschikt voor kleine lokale bedrijven omdat je heel gericht kunt adverteren. Je kiest precies op welke zoektermen en in welk gebied je verschijnt. Met een budget van 15 tot 30 euro per dag bereik je al potentiele klanten die actief zoeken naar wat jij aanbiedt.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoe snel zie ik resultaat met lokale Google Ads?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    De eerste klikken en telefoontjes komen vaak al binnen de eerste week. Maar het duurt twee tot vier weken voordat Google genoeg data heeft om je campagne goed aan te sturen. Na een maand weet je welke zoektermen en advertenties het beste presteren. Echte resultaten beoordeel je na acht tot twaalf weken.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Moet ik Google Ads combineren met een Google Bedrijfsprofiel?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Absoluut. Je Google Bedrijfsprofiel versterkt je advertenties. Met locatie-extensies toon je je adres en telefoonnummer direct in de advertentie. Dat verhoogt de klikratio met gemiddeld 10 tot 15 procent. Bovendien verschijn je dan ook in Google Maps resultaten.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Kan ik zelf Google Ads instellen voor mijn lokale bedrijf?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Dat kan, maar de meeste ondernemers verspillen in de eerste maanden 30 tot 50 procent van hun budget door verkeerde instellingen. Vooral de locatie-instellingen, zoekwoordtypes en biedstrategieen vragen kennis. Begin je toch zelf? Start klein, meet alles en schaal pas op als je ziet wat werkt.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Related Links */}
                    <section className="mt-16 pt-12 border-t border-primary/10">
                        <h3 className="text-xl font-bold text-primary mb-6">Lees ook</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <Link to="/blogs/google-ads/google-ads-voor-mkb-campagne-instellen" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Google Ads voor MKB</h3>
                                <p className="text-primary/60 text-sm">Zo stel je je eerste campagne goed in.</p>
                            </Link>
                            <Link to="/blogs/google-ads/negatieve-zoekwoorden-google-ads" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Negatieve zoekwoorden</h3>
                                <p className="text-primary/60 text-sm">Voorkom dat je betaalt voor klikken die niets opleveren.</p>
                            </Link>
                            <Link to="/blogs/google-ads/meet-roi-google-ads-campagne" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">ROI meten in Google Ads</h3>
                                <p className="text-primary/60 text-sm">Welke cijfers je echt moet volgen.</p>
                            </Link>
                        </div>
                    </section>
                </div>
            </article>

            {/* Bottom CTA */}
            <section className="w-full pb-32 px-6">
                <div className="max-w-4xl mx-auto bg-primary rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
                    <h2 className="relative z-10 font-drama italic text-background text-3xl sm:text-4xl md:text-5xl mb-6">Meer klanten uit jouw regio?</h2>
                    <p className="relative z-10 font-sans text-background/70 text-lg mb-10 max-w-xl mx-auto">We kijken samen naar je locatie, doelgroep en budget. Geen verplichtingen, wel een eerlijk advies over wat Google Ads voor jouw bedrijf kan doen.</p>
                    <Link to="/contact" className="relative z-10 btn-magnetic inline-flex items-center justify-center bg-accent text-background font-sans font-bold text-lg px-10 py-4 rounded-[2rem] hover:bg-accent/90 transition-colors">Neem contact op</Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
