import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ChevronRight, User } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function BlogPostSeaBureauBeoordelenCampagnesBeheer() {
    useEffect(() => { window.scrollTo(0, 0); }, []);

    return (
        <main className="min-h-screen selection:bg-accent/30 selection:text-dark flex flex-col bg-background">
            <Helmet>
                <title>SEA bureau: zo beoordeel je of jouw campagnes goed worden beheerd | Empowers</title>
                <meta name="description" content="Zes concrete checks waarmee je zelf beoordeelt of jouw SEA-bureau goed werk levert. Direct in je eigen Google Ads account te doen, zonder hulp van de bureau-account manager." />
                <link rel="canonical" href="https://www.empowers.nl/blogs/google-ads/sea-bureau-beoordelen-campagnes-beheer" />
                <meta property="og:title" content="SEA bureau beoordelen: zes checks die je zelf doet" />
                <meta property="og:description" content="Zes harde signalen waaraan je in een uur ziet of het SEA-bureau zijn vak verstaat of alleen knoppen draait." />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://www.empowers.nl/blogs/google-ads/sea-bureau-beoordelen-campagnes-beheer" />
                <meta property="og:image" content="https://www.empowers.nl/images/blogs/sea-bureau-beoordelen-campagnes-beheer.jpg" />
                <meta property="article:published_time" content="2026-05-14" />
                <meta property="article:section" content="Google Ads" />

                <script type="application/ld+json">{JSON.stringify({
                    "@context": "https://schema.org", "@type": "Article",
                    "headline": "SEA bureau: zo beoordeel je of jouw campagnes goed worden beheerd",
                    "description": "De zes checks die jij als opdrachtgever zelf kunt doen om te beoordelen of je SEA-bureau goed werk levert.",
                    "image": "https://www.empowers.nl/images/blogs/sea-bureau-beoordelen-campagnes-beheer.jpg",
                    "datePublished": "2026-05-14T13:00:00+02:00",
                    "author": { "@type": "Organization", "name": "Empowers" },
                    "publisher": { "@type": "Organization", "name": "Empowers", "url": "https://www.empowers.nl",
                        "logo": { "@type": "ImageObject", "url": "https://www.empowers.nl/empowers-logo-color.svg" } },
                    "mainEntity": { "@type": "FAQPage", "mainEntity": [
                        { "@type": "Question", "name": "Wat moet ik minimaal kunnen zien in mijn Google Ads account?",
                          "acceptedAnswer": { "@type": "Answer", "text": "Je hoort eigenaar te zijn van je Google Ads account, niet enkel gast. Je moet zelf in Search Terms kunnen kijken, in Wijzigingsgeschiedenis (Change History), in alle conversie-acties en in de geïmporteerde Analytics-conversies. Als jij die toegang niet hebt heeft het bureau structureel meer controle dan jij over je eigen marketing." } },
                        { "@type": "Question", "name": "Hoe vaak hoort er aan mijn campagnes gesleuteld te worden?",
                          "acceptedAnswer": { "@type": "Answer", "text": "Voor een actief beheerd account: minimaal wekelijkse aanpassingen. Niet honderden, maar wel een handvol gerichte wijzigingen per week op zoekwoorden, biedingen, advertentieteksten of doelgroep-signalen. Maandelijks alleen aanraken is in 2026 te weinig, omdat Smart Bidding en Performance Max wekelijks input nodig hebben om scherp te blijven." } },
                        { "@type": "Question", "name": "Wat is een gezond aandeel wasted spend?",
                          "acceptedAnswer": { "@type": "Answer", "text": "Onder de 10 procent wasted spend per maand is goed. Tussen 10 en 20 procent acceptabel en bijstuurbaar. Boven 20 procent is een rood signaal: er wordt geld uitgegeven aan irrelevante zoektermen of doelgroepen. Je vindt het door in Search Terms onbruikbare termen te tellen en hun kosten op te tellen." } },
                        { "@type": "Question", "name": "Hoe zie ik of het bureau echt strategisch werkt?",
                          "acceptedAnswer": { "@type": "Answer", "text": "Aan twee dingen. Het maandrapport heeft een actielijst voor de volgende periode, gebaseerd op de cijfers van afgelopen maand. En in de Wijzigingsgeschiedenis zie je dat die actielijst de maand erna is uitgevoerd, niet pas afgesproken. Een bureau dat steeds dezelfde acties belooft zonder ze uit te voeren werkt niet strategisch." } },
                        { "@type": "Question", "name": "Wat als ik tijdens de check rode vlaggen vind?",
                          "acceptedAnswer": { "@type": "Answer", "text": "Plan een open gesprek waarin je concreet de bevindingen voorlegt. Niet als verwijt, maar als vraag: ik zag X, kun je me uitleggen waarom dat zo is? Een professioneel bureau geeft per bevinding een gegrond antwoord en een verbeterplan. Een vaag antwoord is op zichzelf het antwoord en geeft je richting voor de volgende stap." } },
                        { "@type": "Question", "name": "Kan ik deze checks zelf doen of heb ik hulp nodig?",
                          "acceptedAnswer": { "@type": "Answer", "text": "De zes checks in dit artikel kun je zelf doen in een uur, ook zonder diepe Google Ads-kennis. Voor een diepere audit (Quality Score-analyse, attributie-modellen, feed-kwaliteit voor Performance Max) is een onafhankelijke specialist nuttig. Reken op een paar honderd euro voor zo'n quick scan, een investering die zichzelf vaak in een maand terugverdient." } }
                    ] }
                })}</script>
                <script type="application/ld+json">{JSON.stringify({
                    "@context": "https://schema.org", "@type": "BreadcrumbList",
                    "itemListElement": [
                        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.empowers.nl" },
                        { "@type": "ListItem", "position": 2, "name": "Blogs", "item": "https://www.empowers.nl/blogs" },
                        { "@type": "ListItem", "position": 3, "name": "Google Ads", "item": "https://www.empowers.nl/blogs/google-ads" },
                        { "@type": "ListItem", "position": 4, "name": "SEA bureau beoordelen", "item": "https://www.empowers.nl/blogs/google-ads/sea-bureau-beoordelen-campagnes-beheer" }
                    ]
                })}</script>
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
                        <span className="text-primary truncate">SEA bureau beoordelen</span>
                    </nav>

                    <header className="mb-16">
                        <div className="inline-block px-3 py-1 bg-accent/10 text-accent font-mono text-xs uppercase tracking-widest rounded-full mb-6">Google Ads</div>
                        <h1 className="font-sans font-bold text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight mb-8">SEA bureau: zo beoordeel je of jouw campagnes goed worden beheerd</h1>
                        <div className="flex flex-wrap items-center gap-6 text-sm font-sans text-primary/60 border-y border-primary/10 py-6">
                            <div className="flex items-center gap-2"><User className="w-4 h-4" /><span>Empowers Redactie</span></div>
                            <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>14 mei 2026</span></div>
                            <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>8 minuten leestijd</span></div>
                        </div>
                    </header>

                    <figure className="w-full h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden mb-16 relative bg-primary">
                        <div className="absolute inset-0 bg-[url('/images/blogs/sea-bureau-beoordelen-campagnes-beheer.jpg')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </figure>

                    <div className="prose prose-lg max-w-none prose-headings:text-primary prose-headings:font-bold prose-a:text-accent prose-a:underline hover:prose-a:text-accent/80">
                        <p className="text-xl leading-relaxed text-primary/80 font-medium mb-6">
                            Je betaalt je SEA-bureau elke maand een mooi bedrag. Maar wat gebeurt er eigenlijk in jouw account? Krijg je waar voor je geld, of draait er iemand vrijblijvend aan een paar knoppen? Hier zijn zes checks die je zelf in een uur kunt doen, direct in je eigen Google Ads. Geen kennis nodig van Smart Bidding-algoritmes of attributie-modellen. Wel een eerlijk paar ogen.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Voorbereiding: wat je nodig hebt</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Allereerst: zorg dat je rechtstreeks in je Google Ads account kunt inloggen. Niet via een dashboard van het bureau, maar via ads.google.com met je eigen Google-account. Je hoort eigenaar (Owner) te zijn van het account, niet alleen Lezer of Gast. Heeft het bureau alleen jou Lezer-rechten gegeven? Dan begint je probleem al voor de check goed en wel is begonnen. Vraag direct het eigenaarschap aan en zet de check daarna pas door.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Plan ongeveer een uur ongestoorde tijd in. Open de Google Ads-interface, zet de tijdsperiode op de afgelopen 90 dagen, en loop de checks hieronder één voor één langs. Aantekeningen maken helpt: je hebt later misschien een gesprek met je accountmanager nodig.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Check 1: kijk in de Wijzigingsgeschiedenis</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Open in Google Ads het tabblad Tools &amp; Settings, kies vervolgens Change History (Wijzigingsgeschiedenis). Zet de filter op de afgelopen 30 dagen. Wat zie je? Een lange lijst chronologische wijzigingen met namen van wie wat heeft veranderd? Goed teken. Een dunne lijst met enkel automatische Google-systeem-aanpassingen en bijna geen menselijke acties? Dan is er deze maand structureel weinig werk gedaan.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Wat je daadwerkelijk moet zien voor een actief beheerd account: aanpassingen aan zoekwoorden (toevoegen, pauzeren, kwalificeren als negatief), advertentieteksten die zijn aangepast op basis van testresultaten, biedingsstrategieën die zijn bijgesteld, en doelgroep-signalen die zijn toegevoegd of geweerd. Een professionele beheerder laat een spoor achter van actie, geen lege agenda.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Check 2: scan je Search Terms op verspilde euro's</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Ga naar het tabblad Insights &amp; Reports, kies Search Terms en bekijk de termen waarop daadwerkelijk klikken zijn binnengekomen in de afgelopen 30 dagen. Zoek naar termen die duidelijk niet bij jouw business horen. Voorbeeld: een B2B-software bedrijf dat klikken krijgt op "gratis", "studenten", "vacature". Tel die irrelevante kosten op.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Onder 10 procent wasted spend per maand is gezond. Tussen 10 en 20 procent is acceptabel maar het bureau hoort er bovenop te zitten. Boven 20 procent: dan is er een serieus gebrek aan negatieve-zoekwoordbeheer, wat een van de meest basale bureau-taken is. Als jij in 15 minuten honderden euro's aan verspilling vindt die het bureau in 30 dagen niet heeft opgemerkt, weet je iets belangrijks.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Check 3: tel de actieve advertentievarianten per advertentiegroep</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Open een willekeurige advertentiegroep en tel de actieve advertenties (Responsive Search Ads). Voor elke advertentiegroep horen minimaal twee actieve varianten te draaien, zodat Google kan testen welke beter converteert. Eén advertentie per groep betekent geen test, geen leerproces, geen optimalisatie.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Check ook de Ad Strength van die advertenties (de balk die Google laat zien bij elke advertentie). Staan ze op Good of Excellent, dan is er nagedacht over headlines en descriptions. Staan ze op Poor of Average, dan is er ruimte voor verbetering die het bureau over het hoofd heeft gezien. Beide observaties zijn nuttig: één confirmatie, één bespreekpunt.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Check 4: controleer je conversie-acties</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Ga naar Goals &amp; Conversions in het navigatiemenu. Bekijk welke conversie-acties zijn ingesteld en welke daadwerkelijk telt als primaire conversie. Slecht teken: alleen "Page View" of "Form Started" als conversie. Goed teken: gefinaliseerde aanvragen, telefonisch contact via call-tracking, of bestellingen met orderwaarde meegegeven.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een geavanceerd ingericht account heeft ook offline conversies geïmporteerd. Dat betekent dat een echte deal uit jouw CRM-systeem teruggekoppeld wordt naar de Google Ads campagne die hem heeft geleverd. Zit dat niet in je opzet, en is je business B2B of high-value, dan optimaliseert je bureau op het verkeerde signaal. Online-conversies tellen lijken vaak goed, maar de echte deals lopen er soms helemaal naast.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Check 5: open je laatste maandrapport en zoek naar de actielijst</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Pak het laatste maandrapport van je bureau en zoek naar één specifiek element: een actielijst voor de komende maand. Niet "we blijven optimaliseren", maar concrete acties zoals: "We testen drie nieuwe ad copy varianten op campagne X, breiden negatieve zoekwoorden uit met termijn Y, en heroverwegen de target-CPA op campagne Z."
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Geen actielijst? Dan is het rapport een naslagwerk, geen sturingsinstrument. Wel een actielijst, maar de lijst van vorige maand is grotendeels niet uitgevoerd? Open de Wijzigingsgeschiedenis erbij en check: zijn de beloofde acties echt teruggevonden? Een bureau dat beloften maakt zonder ze waar te maken is een verkooporganisatie, geen uitvoeringspartner.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Check 6: vergelijk je CPA-trend met de markt</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Open de overzichtspagina van je account en zet de tijdsperiode op de afgelopen 12 maanden. Hoe heeft je gemiddelde CPA zich ontwikkeld? Bij een professioneel beheerd account zie je een geleidelijke daling, of een stabiele CPA bij stijgend volume. Bij een verwaarloosd account stijgt de CPA langzaam, omdat er geen optimalisaties tegen de inflatie van klikkosten gedaan worden.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Houd rekening met seizoenseffecten en bredere markt-trends: in concurrentiele branches stijgt de CPA in heel veel accounts. Wat je wilt zien is dat jouw CPA-trend niet erger is dan de markt. Spaarzame stijging is acceptabel, snelle stijging zonder gegronde uitleg is een rood signaal. Dit punt overigens beter te doen met data uit jouw analytics, gekoppeld aan winstmarge, niet alleen met Google Ads-cijfers. Daarover meer in onze blog over <Link to="/blogs/strategie/online-marketing-strategie-webshops-omzet" className="text-accent hover:underline">marketing-strategie voor webshops</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe je het gesprek aangaat met je bureau</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Vond je in je check een paar zorgwekkende signalen? Plan een gesprek en kom met concrete vragen, niet met een algemene klacht. "De CPA is in de afgelopen 6 maanden met 25 procent gestegen, in de Wijzigingsgeschiedenis zie ik geen actieve bijsturing, en de wasted spend zit op 27 procent. Kun je dit met me doorlopen en aangeven wat we de komende maand anders gaan doen?"
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een professioneel bureau reageert met inhoud op deze data. Per metric een gegrond antwoord, een uitleg waar het misging, een plan voor wat er anders moet. Een vaag antwoord ("we werken eraan", "dit komt door de markt", "het zit in de pipeline") zonder onderbouwing is op zichzelf de uitkomst van de check.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wanneer is een second opinion verstandig</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Als de zes checks meerdere rode signalen oplevert, is een externe blik geld waard. Een onafhankelijke specialist die in een paar uur door je account loopt kost een paar honderd euro en levert zwart-op-wit een conclusie op: is er nog te redden bij dit bureau, of niet. Verbind die conclusie met een serieus gesprek met de bureau-eigenaar (niet alleen je accountmanager) en je hebt binnen twee weken duidelijkheid.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Voor wie aan het einde van die check tot de conclusie komt dat het tijd is voor verandering, beschrijven we in onze gids over <Link to="/blogs/google-ads/sea-uitbesteden-vragen-voordat-je-tekent" className="text-accent hover:underline">vragen voor je tekent met een nieuw bureau</Link> hoe je de volgende keer scherper begint.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Veelgestelde vragen</h2>
                    </div>

                    <section className="mt-4">
                        <div className="space-y-6 not-prose">
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat moet ik minimaal kunnen zien in mijn Google Ads account?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Je hoort eigenaar te zijn van je Google Ads account, niet enkel gast. Je moet zelf in Search Terms kunnen kijken, in Wijzigingsgeschiedenis (Change History), in alle conversie-acties en in de geïmporteerde Analytics-conversies. Als jij die toegang niet hebt heeft het bureau structureel meer controle dan jij over je eigen marketing.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoe vaak hoort er aan mijn campagnes gesleuteld te worden?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Voor een actief beheerd account: minimaal wekelijkse aanpassingen. Niet honderden, maar wel een handvol gerichte wijzigingen per week op zoekwoorden, biedingen, advertentieteksten of doelgroep-signalen. Maandelijks alleen aanraken is in 2026 te weinig, omdat Smart Bidding en Performance Max wekelijks input nodig hebben om scherp te blijven.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat is een gezond aandeel wasted spend?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Onder de 10 procent wasted spend per maand is goed. Tussen 10 en 20 procent acceptabel en bijstuurbaar. Boven 20 procent is een rood signaal: er wordt geld uitgegeven aan irrelevante zoektermen of doelgroepen. Je vindt het door in Search Terms onbruikbare termen te tellen en hun kosten op te tellen.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoe zie ik of het bureau echt strategisch werkt?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Aan twee dingen. Het maandrapport heeft een actielijst voor de volgende periode, gebaseerd op de cijfers van afgelopen maand. En in de Wijzigingsgeschiedenis zie je dat die actielijst de maand erna is uitgevoerd, niet pas afgesproken. Een bureau dat steeds dezelfde acties belooft zonder ze uit te voeren werkt niet strategisch.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat als ik tijdens de check rode vlaggen vind?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Plan een open gesprek waarin je concreet de bevindingen voorlegt. Niet als verwijt, maar als vraag: ik zag X, kun je me uitleggen waarom dat zo is? Een professioneel bureau geeft per bevinding een gegrond antwoord en een verbeterplan. Een vaag antwoord is op zichzelf het antwoord en geeft je richting voor de volgende stap.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Kan ik deze checks zelf doen of heb ik hulp nodig?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">De zes checks in dit artikel kun je zelf doen in een uur, ook zonder diepe Google Ads-kennis. Voor een diepere audit (Quality Score-analyse, attributie-modellen, feed-kwaliteit voor Performance Max) is een onafhankelijke specialist nuttig. Reken op een paar honderd euro voor zo'n quick scan, een investering die zichzelf vaak in een maand terugverdient.</p>
                            </div>
                        </div>
                    </section>

                    <section className="mt-16 pt-12 border-t border-primary/10">
                        <h3 className="text-xl font-bold text-primary mb-6">Lees ook</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <Link to="/blogs/google-ads/sea-uitbesteden-vragen-voordat-je-tekent" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">7 vragen voor je tekent</h3>
                                <p className="text-primary/60 text-sm">Het intake-gesprek dat het echte bureau onderscheidt van een gladde pitch.</p>
                            </Link>
                            <Link to="/blogs/google-ads/google-ads-specialist-resultaten-90-dagen" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">90 dagen resultaten</h3>
                                <p className="text-primary/60 text-sm">De drie meetbare resultaten die je in 90 dagen mag zien.</p>
                            </Link>
                            <Link to="/blogs/google-ads" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Google Ads blogs</h3>
                                <p className="text-primary/60 text-sm">Alle artikelen over Google Ads strategie en uitvoering.</p>
                            </Link>
                        </div>
                    </section>
                </div>
            </article>

            <section className="w-full pb-32 px-6">
                <div className="max-w-4xl mx-auto bg-primary rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
                    <h2 className="relative z-10 font-drama italic text-background text-3xl sm:text-4xl md:text-5xl mb-6">Onafhankelijke audit van je SEA-account?</h2>
                    <p className="relative z-10 font-sans text-background/70 text-lg mb-10 max-w-xl mx-auto">In een paar uur lopen we door je Google Ads en leveren we een eerlijke conclusie, zonder dat we de volgende stap willen verkopen.</p>
                    <Link to="/contact" className="relative z-10 btn-magnetic inline-flex items-center justify-center bg-accent text-background font-sans font-bold text-lg px-10 py-4 rounded-[2rem] hover:bg-accent/90 transition-colors">Neem contact op</Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
