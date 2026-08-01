import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ChevronRight, User } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function BlogPostGoogleAdsLokaleBedrijvenLocatieExtensies() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen selection:bg-accent/30 selection:text-dark flex flex-col bg-background">
            <Helmet>
                <title>Locatie-extensies inzetten in Google Ads | Empowers</title>
                <meta name="description" content="Locatie-extensies tonen je adres en routeknop direct bij je Google Ads. Lees hoe lokale bedrijven ze instellen via hun Google Bedrijfsprofiel." />
                <link rel="canonical" href="https://www.empowers.nl/blogs/google-ads/google-ads-lokale-bedrijven-locatie-extensies" />
                <meta property="og:title" content="Locatie-extensies inzetten in Google Ads | Empowers" />
                <meta property="og:description" content="Locatie-extensies tonen je adres en routeknop direct bij je Google Ads. Lees hoe lokale bedrijven ze instellen via hun Google Bedrijfsprofiel." />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://www.empowers.nl/blogs/google-ads/google-ads-lokale-bedrijven-locatie-extensies" />
                <meta property="og:image" content="https://www.empowers.nl/images/blogs/google-ads-lokale-bedrijven-locatie-extensies.jpg" />
                <meta property="article:published_time" content="2026-07-19T10:00:00+02:00" />
                <meta property="article:author" content="Empowers" />
                <meta property="article:section" content="Google Ads" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Locatie-extensies inzetten in Google Ads | Empowers" />
                <meta name="twitter:description" content="Locatie-extensies tonen je adres en routeknop direct bij je Google Ads. Lees hoe lokale bedrijven ze instellen via hun Google Bedrijfsprofiel." />
                <script type="application/ld+json">{JSON.stringify({
                    "@context": "https://schema.org",
                    "@graph": [
                        {
                            "@type": "Article",
                            "headline": "Google Ads voor lokale bedrijven: zo zet je locatie-extensies in",
                            "image": "https://www.empowers.nl/images/blogs/google-ads-lokale-bedrijven-locatie-extensies.jpg",
                            "description": "Locatie-extensies tonen je adres en routeknop direct bij je Google Ads. Lees hoe lokale bedrijven ze instellen via hun Google Bedrijfsprofiel.",
                            "author": { "@type": "Organization", "name": "Empowers" },
                            "publisher": { "@type": "Organization", "name": "Empowers", "url": "https://www.empowers.nl" },
                            "datePublished": "2026-07-19T10:00:00+02:00",
                            "dateModified": "2026-07-19T10:00:00+02:00",
                            "url": "https://www.empowers.nl/blogs/google-ads/google-ads-lokale-bedrijven-locatie-extensies"
                        },
                        {
                            "@type": "BreadcrumbList",
                            "itemListElement": [
                                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.empowers.nl" },
                                { "@type": "ListItem", "position": 2, "name": "Nieuws", "item": "https://www.empowers.nl/nieuws" },
                                { "@type": "ListItem", "position": 3, "name": "Google Ads", "item": "https://www.empowers.nl/blogs/google-ads" },
                                { "@type": "ListItem", "position": 4, "name": "Google Ads voor lokale bedrijven: zo zet je locatie-extensies in", "item": "https://www.empowers.nl/blogs/google-ads/google-ads-lokale-bedrijven-locatie-extensies" }
                            ]
                        },
                        {
                            "@type": "FAQPage",
                            "mainEntity": [
                                { "@type": "Question", "name": "Wat zijn locatie-extensies in Google Ads?", "acceptedAnswer": { "@type": "Answer", "text": "Locatie-extensies zijn uitbreidingen van je zoekadvertentie die je adres en een routeknop tonen. Google noemt ze tegenwoordig locatie-items. Ze werken via een koppeling tussen je Google Ads account en je Google Bedrijfsprofiel en zijn gratis: je betaalt alleen voor kliks, net als bij de advertentie zelf." } },
                                { "@type": "Question", "name": "Heb ik een Google Bedrijfsprofiel nodig voor locatie-extensies?", "acceptedAnswer": { "@type": "Answer", "text": "Ja. De locatiegegevens in je advertentie komen rechtstreeks uit je Google Bedrijfsprofiel. Zonder geverifieerd profiel kan Google je adres niet tonen. Zorg dus eerst dat je profiel geclaimd en geverifieerd is en dat het adres klopt, en koppel het daarna aan je Google Ads account." } },
                                { "@type": "Question", "name": "Wat kosten locatie-extensies?", "acceptedAnswer": { "@type": "Answer", "text": "De extensie zelf is gratis. Je betaalt hetzelfde bedrag per klik als bij je gewone advertentie, ook als iemand op de routeknop of het adres klikt. Omdat advertenties met extensies vaak meer ruimte innemen en meer kliks trekken, halen ze meestal meer uit hetzelfde budget." } },
                                { "@type": "Question", "name": "Werken locatie-extensies ook op Google Maps?", "acceptedAnswer": { "@type": "Answer", "text": "Ja. Met een gekoppeld Bedrijfsprofiel kunnen je advertenties ook verschijnen in Google Maps, bijvoorbeeld wanneer iemand daar zoekt op wat jij aanbiedt. Voor lokale bedrijven is dat een waardevolle plek, omdat mensen die in Maps zoeken vaak al onderweg zijn of van plan zijn langs te gaan." } },
                                { "@type": "Question", "name": "Hoe meet ik wat locatie-extensies opleveren?", "acceptedAnswer": { "@type": "Answer", "text": "Bekijk in Google Ads de prestaties per item: je ziet hoe vaak de extensie is vertoond en aangeklikt. Kijk daarnaast in je Bedrijfsprofiel naar routeaanvragen en telefoontjes. Winkelbezoeken meet Google alleen bij voldoende volume, dus kleine bedrijven sturen vooral op kliks en telefoontjes." } },
                                { "@type": "Question", "name": "Kan ik locatie-extensies gebruiken met meerdere vestigingen?", "acceptedAnswer": { "@type": "Answer", "text": "Ja. Koppel het Bedrijfsprofiel met al je vestigingen en Google toont automatisch de vestiging die het dichtst bij de zoeker zit. Wil je per vestiging een eigen budget of eigen advertentieteksten, maak dan per regio een aparte campagne met eigen locatietargeting." } }
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
                        <span className="text-primary truncate">Locatie-extensies</span>
                    </nav>

                    {/* Header */}
                    <header className="mb-16">
                        <div className="inline-block px-3 py-1 bg-accent/10 text-accent font-mono text-xs uppercase tracking-widest rounded-full mb-6">
                            Google Ads
                        </div>
                        <h1 className="font-sans font-bold text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight mb-8">
                            Google Ads voor lokale bedrijven: zo zet je locatie-extensies in
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
                        <div className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-overlay" style={{backgroundImage: "url('/images/blogs/google-ads-lokale-bedrijven-locatie-extensies.jpg')"}}></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </figure>

                    {/* Content */}
                    <div className="prose prose-lg prose-headings:font-sans prose-headings:font-bold prose-headings:text-primary prose-p:font-sans prose-p:text-primary/80 prose-p:leading-relaxed max-w-none">
                        <p className="text-xl md:text-2xl font-medium leading-relaxed mb-10 text-primary">
                            Locatie-extensies tonen je adres, een routeknop en soms je openingstijden direct onder je Google Ads advertentie. Voor lokale bedrijven is dat goud waard: wie in de buurt zoekt, ziet meteen dat je dichtbij zit. Je stelt ze in door je Google Bedrijfsprofiel te koppelen aan je Google Ads account.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat zijn locatie-extensies in Google Ads?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een locatie-extensie is een uitbreiding van je zoekadvertentie met je vestigingsgegevens. Onder je advertentietekst verschijnt je adres, en op mobiel vaak een routeknop die direct Google Maps opent. Google noemt extensies tegenwoordig items, dus in je account zoek je naar locatie-items.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De gegevens komen niet uit Google Ads zelf. Ze komen uit je Google Bedrijfsprofiel, het bedrijfsvermelding-systeem achter Google Maps. Die koppeling is meteen het belangrijkste werk bij het instellen.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Extra betalen doe je niet. Een klik op de routeknop kost hetzelfde als een klik op je advertentie. Je krijgt er dus zichtbaarheid en gemak bij zonder hogere klikprijs.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Waarom werken locatie-extensies zo goed voor lokale bedrijven?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Lokale zoekopdrachten hebben bijna altijd een concrete intentie. Wie zoekt op 'fietsenmaker open' of 'kapper in de buurt' wil vandaag nog ergens naar binnen lopen. Een advertentie die direct laat zien waar je zit, sluit precies aan op die vraag.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Je advertentie wordt er ook fysiek groter van. Meer regels op het scherm betekent meer opvallen, en dat gaat ten koste van de ruimte voor je concurrent. Vooral op mobiel, waar maar een paar advertenties tegelijk zichtbaar zijn, telt elke extra regel.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            En er is een vertrouwenseffect. Een herkenbaar adres in de buurt voelt betrouwbaarder dan een anoniem webadres. Zeker voor bedrijven waar mensen langsgaan, zoals een showroom of praktijk, verlaagt dat de drempel om te klikken.
                        </p>

                        <p className="text-primary/80 leading-relaxed mb-6">
                            Werk je vanuit huis of wil je je adres niet tonen? Dan stel je in je Bedrijfsprofiel een servicegebied in plaats van een bezoekadres in. Je advertenties laten dan je werkregio zien, zonder dat er iemand op de stoep staat.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe stel je locatie-extensies in?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Begin bij je Google Bedrijfsprofiel. Claim je vermelding als dat nog niet is gebeurd en doorloop de verificatie. Controleer daarna of je adres, openingstijden en telefoonnummer kloppen, want die gegevens verschijnen straks letterlijk in je advertenties.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Daarna leg je in Google Ads de koppeling. Dat doe je via het onderdeel items of via de gekoppelde accounts in je accountinstellingen, waar je het Bedrijfsprofiel selecteert dat bij je bedrijf hoort. Beheert iemand anders je profiel, dan moet die persoon de koppeling goedkeuren.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Vanaf dat moment kan Google je locatie tonen bij je advertenties. Bij lokale klanten valt ons op dat dit traject vaak halverwege blijft steken: het profiel bestaat wel, maar is nooit geverifieerd of gekoppeld. De extensie staat dan technisch aan zonder ooit te verschijnen.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe combineer je locatie-extensies met lokale targeting?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een locatie-extensie werkt pas echt als je campagne ook lokaal is afgebakend. Stel je locatietargeting in op je verzorgingsgebied, bijvoorbeeld je stad plus een straal van tien kilometer. Adverteren in heel Nederland terwijl je klanten uit één regio komen, verbrandt budget.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Verwerk de plaatsnaam ook in je advertentietekst en zoekwoorden. De combinatie van 'loodgieter Utrecht' in de kop en een Utrechts adres eronder maakt het verhaal compleet. Meer over die basis lees je in ons artikel over <Link to="/blogs/google-ads/google-ads-lokale-bedrijven" className="text-accent hover:underline">Google Ads voor lokale bedrijven</Link>.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Sluit ondertussen uit wat niet past. Met <Link to="/blogs/google-ads/negatieve-zoekwoorden-google-ads" className="text-accent hover:underline">negatieve zoekwoorden</Link> voorkom je dat je betaalt voor zoekers buiten je gebied of buiten je aanbod.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Welke extensies combineer je met je locatie?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een oproepitem is voor lokale bedrijven bijna net zo waardevol als de locatie zelf. Op mobiel verschijnt er dan een belknop bij je advertentie. Wie een loodgieter zoekt met een lekkage, belt liever direct dan dat hij een formulier invult. Meet je die belletjes ook, dan zie je meteen welk deel van je aanvragen via de telefoon binnenkomt.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Sitelinks geven extra links onder je advertentie, bijvoorbeeld naar je openingstijden of een offertepagina. Ze maken je advertentie nog groter op het scherm en vangen bezoekers op met net een andere vraag dan je hoofdadvertentie beantwoordt.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De volgorde is wel belangrijk: eerst je locatie en oproepitem op orde, daarna de rest. Google toont namelijk niet altijd alle extensies tegelijk, maar kiest per veiling de combinatie die het meest oplevert.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe meet je wat locatie-extensies opleveren?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            In Google Ads zie je per item hoe vaak je locatie is vertoond en aangeklikt. Vergelijk de doorklikratio van advertenties met en zonder extensie en je weet snel genoeg wat het verschil is.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Kijk daarnaast in je Bedrijfsprofiel naar routeaanvragen en telefoontjes. Die acties vertellen meer over echte winkelbezoeken dan kliks alleen. Winkelbezoek-metingen van Google zelf zijn er ook, maar alleen voor accounts met veel volume.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Reken het daarna terug naar omzet. Weet je wat een gemiddelde klant waard is, dan kun je inschatten wat een extra routeaanvraag per week betekent. Zo wordt de extensie geen gimmick maar een meetbaar kanaal.
                        </p>

                        <p className="text-primary/80 leading-relaxed mb-6">
                            Kort samengevat: locatie-extensies maken je advertentie groter, lokaler en betrouwbaarder, en je stelt ze in via de koppeling met je Google Bedrijfsprofiel. Wil je dat je lokale campagnes meer opleveren? Bekijk onze aanpak voor <Link to="/google-ads" className="text-accent hover:underline">Google Ads beheer</Link> of plan direct een gratis gesprek via <Link to="/contact" className="text-accent hover:underline">empowers.nl/contact</Link>.
                        </p>

                        <hr className="my-16 border-primary/10" />

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Veelgestelde vragen over locatie-extensies</h2>

                        <div className="space-y-6 not-prose">
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat zijn locatie-extensies in Google Ads?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Locatie-extensies zijn uitbreidingen van je zoekadvertentie die je adres en een routeknop tonen. Google noemt ze tegenwoordig locatie-items. Ze werken via een koppeling tussen je Google Ads account en je Google Bedrijfsprofiel en zijn gratis: je betaalt alleen voor kliks, net als bij de advertentie zelf.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Heb ik een Google Bedrijfsprofiel nodig voor locatie-extensies?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Ja. De locatiegegevens in je advertentie komen rechtstreeks uit je Google Bedrijfsprofiel. Zonder geverifieerd profiel kan Google je adres niet tonen. Zorg dus eerst dat je profiel geclaimd en geverifieerd is en dat het adres klopt, en koppel het daarna aan je Google Ads account.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat kosten locatie-extensies?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    De extensie zelf is gratis. Je betaalt hetzelfde bedrag per klik als bij je gewone advertentie, ook als iemand op de routeknop of het adres klikt. Omdat advertenties met extensies vaak meer ruimte innemen en meer kliks trekken, halen ze meestal meer uit hetzelfde budget.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Werken locatie-extensies ook op Google Maps?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Ja. Met een gekoppeld Bedrijfsprofiel kunnen je advertenties ook verschijnen in Google Maps, bijvoorbeeld wanneer iemand daar zoekt op wat jij aanbiedt. Voor lokale bedrijven is dat een waardevolle plek, omdat mensen die in Maps zoeken vaak al onderweg zijn of van plan zijn langs te gaan.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoe meet ik wat locatie-extensies opleveren?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Bekijk in Google Ads de prestaties per item: je ziet hoe vaak de extensie is vertoond en aangeklikt. Kijk daarnaast in je Bedrijfsprofiel naar routeaanvragen en telefoontjes. Winkelbezoeken meet Google alleen bij voldoende volume, dus kleine bedrijven sturen vooral op kliks en telefoontjes.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Kan ik locatie-extensies gebruiken met meerdere vestigingen?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Ja. Koppel het Bedrijfsprofiel met al je vestigingen en Google toont automatisch de vestiging die het dichtst bij de zoeker zit. Wil je per vestiging een eigen budget of eigen advertentieteksten, maak dan per regio een aparte campagne met eigen locatietargeting.
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
                    <h2 className="relative z-10 font-drama italic text-background text-3xl sm:text-4xl md:text-5xl mb-6">Lokaal beter gevonden worden?</h2>
                    <p className="relative z-10 font-sans text-background/70 text-lg mb-10 max-w-xl mx-auto">
                        Wij richten Google Ads campagnes in die klanten uit jouw regio naar je winkel, praktijk of showroom brengen.
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
