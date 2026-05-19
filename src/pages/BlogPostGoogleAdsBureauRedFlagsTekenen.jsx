import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ChevronRight, User } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function BlogPostGoogleAdsBureauRedFlagsTekenen() {
    useEffect(() => { window.scrollTo(0, 0); }, []);

    return (
        <main className="min-h-screen selection:bg-accent/30 selection:text-dark flex flex-col bg-background">
            <Helmet>
                <title>Google Ads bureau red flags: 9 tekenen dat je bureau niet deugt | Empowers</title>
                <meta name="description" content="Negen concrete signalen dat je Google Ads bureau jouw budget niet serieus neemt. Wat je in een week zelf kunt controleren, en wanneer overstappen verstandig wordt." />
                <link rel="canonical" href="https://www.empowers.nl/blogs/google-ads/google-ads-bureau-red-flags-tekenen" />
                <meta property="og:title" content="Google Ads bureau red flags: 9 alarmsignalen" />
                <meta property="og:description" content="Negen signalen dat je Google Ads bureau onder de maat presteert. Concrete checks die je zelf in je account doet." />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://www.empowers.nl/blogs/google-ads/google-ads-bureau-red-flags-tekenen" />
                <meta property="og:image" content="https://www.empowers.nl/images/blogs/google-ads-bureau-red-flags-tekenen.jpg" />
                <meta property="article:published_time" content="2026-05-15" />
                <meta property="article:section" content="Google Ads" />

                <script type="application/ld+json">{JSON.stringify({
                    "@context": "https://schema.org", "@type": "Article",
                    "headline": "Google Ads bureau red flags: 9 tekenen dat je bureau niet deugt",
                    "description": "Negen alarmsignalen dat je Google Ads bureau onder presteert, met een concreet stappenplan om het zelf te controleren.",
                    "image": "https://www.empowers.nl/images/blogs/google-ads-bureau-red-flags-tekenen.jpg",
                    "datePublished": "2026-05-15T09:00:00+02:00",
                    "author": { "@type": "Organization", "name": "Empowers" },
                    "publisher": { "@type": "Organization", "name": "Empowers", "url": "https://www.empowers.nl",
                        "logo": { "@type": "ImageObject", "url": "https://www.empowers.nl/empowers-logo-color.svg" } },
                    "mainEntity": { "@type": "FAQPage", "mainEntity": [
                        { "@type": "Question", "name": "Hoe snel zie ik of mijn Google Ads bureau goed werk levert?",
                          "acceptedAnswer": { "@type": "Answer", "text": "Binnen twee tot drie maanden zou je structuur in je account moeten zien: gescheiden campagnes voor merk en niet-merk, opgeschoonde zoektermenrapporten en een eerste serie van negatieve zoekwoorden. Krijg je na 90 dagen nog steeds een rommelige structuur en vage maandrapportages, dan is dat al een serieus signaal." } },
                        { "@type": "Question", "name": "Wat is de belangrijkste red flag van een Google Ads bureau?",
                          "acceptedAnswer": { "@type": "Answer", "text": "Een Google Ads account dat op naam staat van het bureau in plaats van op jouw naam. Daarmee verlies je niet alleen de eigendom van je historische data, je kunt ook niet zonder gedoe overstappen. Een eerlijk bureau zet jouw account altijd op jouw bedrijfsnaam en krijgt zelf alleen werknemer-toegang." } },
                        { "@type": "Question", "name": "Mag een bureau alleen op klikken of CTR sturen?",
                          "acceptedAnswer": { "@type": "Answer", "text": "Nee. CTR en aantal klikken zeggen niets over omzet of leadkwaliteit. Een serieus bureau stuurt op conversies en omzet, niet op vanity metrics. Vult jouw maandrapport zich vooral met CTR-cijfers en impressies? Dan optimaliseert het bureau op het verkeerde signaal." } },
                        { "@type": "Question", "name": "Moet mijn bureau Smart Bidding gebruiken?",
                          "acceptedAnswer": { "@type": "Answer", "text": "Niet automatisch ja, niet automatisch nee. Smart Bidding werkt goed bij voldoende conversiedata en correct ingerichte conversietracking. Een bureau dat klakkeloos Maximize Conversions aanzet zonder eerst de conversiestructuur op orde te brengen, optimaliseert op ruis. Vraag waarom welke biedstrategie is gekozen en welke alternatieven zijn afgewogen." } },
                        { "@type": "Question", "name": "Hoe vaak hoort een Google Ads specialist mijn account aan te raken?",
                          "acceptedAnswer": { "@type": "Answer", "text": "Bij een gemiddeld MKB-account met een budget van enkele duizenden euro's per maand verwacht je elke week wat activiteit. Niet elke dag, dat is teveel sleutelen. Maar geen wijzigingen in een hele maand betekent dat er niets gebeurt en je betaalt voor stilstand." } },
                        { "@type": "Question", "name": "Wat doe ik als ik vermoed dat mijn bureau niet deugt?",
                          "acceptedAnswer": { "@type": "Answer", "text": "Vraag eerst rechtstreeks Eigenaar-toegang tot je Google Ads account aan. Loop dan de negen signalen uit dit artikel langs. Kom je op vier of meer red flags, dan is een second opinion van een ander bureau verstandig. Geef het bureau eventueel nog 30 dagen met concrete verbeterpunten, en stap anders over." } }
                    ] }
                })}</script>
                <script type="application/ld+json">{JSON.stringify({
                    "@context": "https://schema.org", "@type": "BreadcrumbList",
                    "itemListElement": [
                        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.empowers.nl" },
                        { "@type": "ListItem", "position": 2, "name": "Blogs", "item": "https://www.empowers.nl/blogs" },
                        { "@type": "ListItem", "position": 3, "name": "Google Ads", "item": "https://www.empowers.nl/blogs/google-ads" },
                        { "@type": "ListItem", "position": 4, "name": "Red flags Google Ads bureau", "item": "https://www.empowers.nl/blogs/google-ads/google-ads-bureau-red-flags-tekenen" }
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
                        <span className="text-primary truncate">Red flags Google Ads bureau</span>
                    </nav>

                    <header className="mb-16">
                        <div className="inline-block px-3 py-1 bg-accent/10 text-accent font-mono text-xs uppercase tracking-widest rounded-full mb-6">Google Ads</div>
                        <h1 className="font-sans font-bold text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight mb-8">Google Ads bureau red flags: 9 tekenen dat je bureau niet deugt</h1>
                        <div className="flex flex-wrap items-center gap-6 text-sm font-sans text-primary/60 border-y border-primary/10 py-6">
                            <div className="flex items-center gap-2"><User className="w-4 h-4" /><span>Empowers Redactie</span></div>
                            <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>15 mei 2026</span></div>
                            <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>8 minuten leestijd</span></div>
                        </div>
                    </header>

                    <figure className="w-full h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden mb-16 relative bg-primary">
                        <div className="absolute inset-0 bg-[url('/images/blogs/google-ads-bureau-red-flags-tekenen.jpg')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </figure>

                    <div className="prose prose-lg max-w-none prose-headings:text-primary prose-headings:font-bold prose-a:text-accent prose-a:underline hover:prose-a:text-accent/80">
                        <p className="text-xl leading-relaxed text-primary/80 font-medium mb-6">
                            Je betaalt elke maand een bureau om je Google Ads te beheren, maar diep van binnen knaagt er iets. De rapportages zien er glad uit, de cijfers worden positief geframed, en toch zie je in de boekhouding niet wat het zou moeten opleveren. Dit zijn de negen signalen die ons elke keer opnieuw verraden welke bureaus structureel onder de maat presteren. Allemaal zelf in je account te checken, zonder dat je specialist hoeft te zijn.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Red flag 1: het account staat niet op jouw naam</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Open Google Ads, klik op het tandwiel rechtsboven en kijk bij 'Accountinstellingen' wie er als Eigenaar staat. Hoort daar de bedrijfsnaam van het bureau te staan? Probleem. Jouw advertentiedata, je conversiehistorie en je remarketinglijsten zijn dan technisch eigendom van een derde partij. Bij een conflict of overstap kun je ze niet zomaar meenemen.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een serieus bureau zet het account op jouw naam vanaf dag één en krijgt zelf alleen werknemer-toegang. Klaar. Wil het bureau dat niet aanpassen als je erom vraagt? Dat antwoord op zich is al genoeg om verder te kijken.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Red flag 2: maandrapportages vol vanity metrics</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Pak je laatste maandrapportage erbij. Tel hoe vaak er over CTR en impressies wordt gesproken. Tel daarna hoe vaak conversies, kosten per conversie, omzet en ROAS in beeld komen. Loopt de eerste lijst de tweede twee keer of meer voorbij, dan stuurt het bureau op signalen die niets met jouw verdienmodel te maken hebben.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Klikken zijn geen omzet. CTR is geen marge. Een rapport zonder concrete actielijst voor volgende maand is geen rapport maar een PDF. Zie je dat patroon maand na maand terugkomen, dan optimaliseert het bureau op het verkeerde dashboard. Lees ook onze gids over <Link to="/blogs/google-ads/google-ads-rapportage-metrics-echt" className="text-accent hover:underline">welke Google Ads metrics echt tellen</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Red flag 3: geen of nauwelijks negatieve zoekwoorden</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Ga in Google Ads naar 'Zoektermen' en check op campagne-niveau hoe veel negatieve zoekwoorden er staan. Bij een account dat een paar maanden draait moet er een serieuze lijst staan. Tientallen, vaak honderden. Staat daar nog steeds vrijwel niets? Dan betaal je voor klikken op zoekopdrachten die je nooit wilde hebben.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Negatieve zoekwoorden zijn het saaie handwerk dat het verschil maakt tussen een net account en een lek vat. Een bureau dat dit niet doet, doet de basis niet. Hoe je het zelf aanpakt staat in ons artikel over <Link to="/blogs/google-ads/negatieve-zoekwoorden-google-ads" className="text-accent hover:underline">negatieve zoekwoorden in Google Ads</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Red flag 4: één enkele campagne voor alles</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Klik op het menu 'Campagnes' en kijk naar de structuur. Hoeveel aparte campagnes draaien er, en welke onderscheid zit erin? Een gezond account scheidt op zijn minst merkverkeer van niet-merk verkeer. Een webshop hoort productgroepen of marges te scheiden. Een dienstenbedrijf hoort dienstcategorieën te scheiden.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Eén campagne met alles erin betekent dat je niet kunt sturen op budget per type, op biedstrategie per intentie en op rapportage per doelgroep. Het bureau zit dan letterlijk op de blinde stoel. Lees onze diepgaande gids over <Link to="/blogs/google-ads/google-ads-campagne-structuur" className="text-accent hover:underline">Google Ads campagne-structuur</Link> als je wilt zien hoe het wel hoort.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Red flag 5: de specialist wisselt elke paar maanden</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Heb je in een jaar tijd al twee of drie verschillende account managers gehad? Bij bureaus met een verloopprobleem moet jouw account elke keer opnieuw worden ingewerkt. Dat betekent reset van kennis, reset van prioriteiten en vaak ook een terugslag in performance.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Vraag in het intake-gesprek wie er aan jouw account werkt en hoe het bureau continuïteit borgt. Stel dezelfde vraag opnieuw bij elk kwartaalgesprek. Een professioneel bureau heeft tegen de wisselingen in een opvolgings-document, een logboek per klant en een stevige overdracht. Een bureau zonder die discipline ziet jouw account als een mapje in iemands inbox.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Red flag 6: conversies tracken werkt niet of klopt niet</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Open de Google Ads-conversiekolom en kijk of er hele dagen of weken zijn waarin het cijfer plat op nul staat terwijl je weet dat er wel verkeer was. Of het tegenovergestelde: 47 conversies in een dag terwijl je sales er drie ziet. Beide patronen wijzen op een tracking-fout die het bureau had moeten opmerken.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Vraag concreet: welke conversietelmethode staat er ingesteld, koppelen we Google Ads aan GA4 en gebruiken we offline conversie-upload vanuit het CRM voor leadbedrijven? Als de specialist je daar met een verbaasde blik op antwoordt, klopt er iets niet aan de basis. Geen tracking, geen sturen.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Red flag 7: alles staat op automatisch en niemand weet waarom</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Smart Bidding, Performance Max en Demand Gen zijn krachtige tools. Verkeerd ingezet zijn ze ook een prachtige manier om snel veel budget te verbranden zonder dat iemand snapt waarom de cijfers tegenvallen. Vraag je bureau: waarom Maximize Conversions en niet Target ROAS? Waarom Performance Max naast Search en niet in plaats van? Waarom is asset group X anders dan Y?
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Krijg je halve antwoorden of moet de specialist het navragen, dan staat er automatisering aan die niemand actief stuurt. Het algoritme leert dan op slechte signalen omdat de conversie-doelen of de feed niet kloppen. Onze blog over <Link to="/blogs/google-ads/smart-bidding-uitgelegd-wanneer-wanneer" className="text-accent hover:underline">Smart Bidding</Link> legt uit wanneer je het wel en niet aanzet.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Red flag 8: geen experimenten, geen logboek van wijzigingen</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            In Google Ads zit een ingebouwd 'Wijzigingsgeschiedenis'-overzicht. Open dat en kijk per week wat er is veranderd. Een gezond account toont wekelijks meerdere wijzigingen: nieuwe negatieve zoekwoorden, biedingen aangepast, advertenties getest, doelgroepen verfijnd.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Zie je hele weken met nul wijzigingen terwijl je het bureau wel betaalt voor beheer? Dan staat het account stil. En een stil account in een dynamische veiling als Google Ads gaat achteruit. Vraag ook naar de A/B tests die in de afgelopen drie maanden zijn gedraaid. Zonder concreet antwoord betekent dat geen experimenten zijn gedaan.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Red flag 9: lange contracten, korte verantwoording</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Wat staat er in je contract over opzegtermijn, transparante facturering en account-eigendom? Bureaus die een jaarcontract eisen, vage media spend mark-ups verrekenen en geen tussentijdse uitstap toelaten, kopen tijd om eronderuit te komen dat ze niet performen.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een eerlijke partner werkt met maandelijks opzegbare contracten of een korte opzegtermijn, factureert advertentiekosten transparant door en heeft geen problemen met regelmatige reviews. Krijg je het contract niet aangepast als je dat aan tafel brengt, dan weet je genoeg.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat doe je als er meer dan vier signalen kloppen?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Eén red flag is nog te repareren. Twee of drie kunnen pech zijn of een tijdelijke fase in de samenwerking. Vier of meer is een patroon. Dan is het tijd voor een eerlijk gesprek met je bureau waarin je de checklist hebt meegebracht en concrete verbeterpunten oplegt voor de komende 30 dagen.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Gebeurt er niets meetbaars binnen die termijn, dan is overstappen redelijk. Een second opinion van een ander bureau is meestal voor weinig of geen kosten beschikbaar als losse audit. Wat je in zo'n intake-gesprek vraagt staat in onze blog over de <Link to="/blogs/google-ads/google-ads-bureau-vragen-eerste-gesprek" className="text-accent hover:underline">5 vragen voor het eerste gesprek</Link>. En als je twijfelt tussen bureau of zelf doen, helpt onze gids over <Link to="/blogs/google-ads/google-ads-uitbesteden-wanneer-zelf" className="text-accent hover:underline">Google Ads uitbesteden of zelf doen</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Veelgestelde vragen</h2>
                    </div>

                    <section className="mt-4">
                        <div className="space-y-6 not-prose">
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoe snel zie ik of mijn Google Ads bureau goed werk levert?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Binnen twee tot drie maanden zou je structuur in je account moeten zien: gescheiden campagnes voor merk en niet-merk, opgeschoonde zoektermenrapporten en een eerste serie van negatieve zoekwoorden. Krijg je na 90 dagen nog steeds een rommelige structuur en vage maandrapportages, dan is dat al een serieus signaal.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat is de belangrijkste red flag van een Google Ads bureau?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Een Google Ads account dat op naam staat van het bureau in plaats van op jouw naam. Daarmee verlies je niet alleen de eigendom van je historische data, je kunt ook niet zonder gedoe overstappen. Een eerlijk bureau zet jouw account altijd op jouw bedrijfsnaam en krijgt zelf alleen werknemer-toegang.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Mag een bureau alleen op klikken of CTR sturen?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Nee. CTR en aantal klikken zeggen niets over omzet of leadkwaliteit. Een serieus bureau stuurt op conversies en omzet, niet op vanity metrics. Vult jouw maandrapport zich vooral met CTR-cijfers en impressies? Dan optimaliseert het bureau op het verkeerde signaal.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Moet mijn bureau Smart Bidding gebruiken?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Niet automatisch ja, niet automatisch nee. Smart Bidding werkt goed bij voldoende conversiedata en correct ingerichte conversietracking. Een bureau dat klakkeloos Maximize Conversions aanzet zonder eerst de conversiestructuur op orde te brengen, optimaliseert op ruis. Vraag waarom welke biedstrategie is gekozen en welke alternatieven zijn afgewogen.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoe vaak hoort een Google Ads specialist mijn account aan te raken?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Bij een gemiddeld MKB-account met een budget van enkele duizenden euro's per maand verwacht je elke week wat activiteit. Niet elke dag, dat is teveel sleutelen. Maar geen wijzigingen in een hele maand betekent dat er niets gebeurt en je betaalt voor stilstand.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat doe ik als ik vermoed dat mijn bureau niet deugt?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Vraag eerst rechtstreeks Eigenaar-toegang tot je Google Ads account aan. Loop dan de negen signalen uit dit artikel langs. Kom je op vier of meer red flags, dan is een second opinion van een ander bureau verstandig. Geef het bureau eventueel nog 30 dagen met concrete verbeterpunten, en stap anders over.</p>
                            </div>
                        </div>
                    </section>

                    <section className="mt-16 pt-12 border-t border-primary/10">
                        <h3 className="text-xl font-bold text-primary mb-6">Lees ook</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <Link to="/blogs/google-ads/google-ads-bureau-vragen-eerste-gesprek" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">5 vragen eerste gesprek</h3>
                                <p className="text-primary/60 text-sm">De vijf precieze vragen die in een uur het verschil maken tussen een serieus bureau en een gladde pitch.</p>
                            </Link>
                            <Link to="/blogs/google-ads/sea-bureau-beoordelen-campagnes-beheer" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">SEA bureau beoordelen</h3>
                                <p className="text-primary/60 text-sm">Zes checks die je zelf doet om je lopende SEA-bureau te beoordelen.</p>
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
                    <h2 className="relative z-10 font-drama italic text-background text-3xl sm:text-4xl md:text-5xl mb-6">Twijfel of je bureau deugt?</h2>
                    <p className="relative z-10 font-sans text-background/70 text-lg mb-10 max-w-xl mx-auto">Wij doen een eerlijke second opinion op je Google Ads account. Concreet, helder en in jouw eigen account. Geen verkooppraat.</p>
                    <Link to="/contact" className="relative z-10 btn-magnetic inline-flex items-center justify-center bg-accent text-background font-sans font-bold text-lg px-10 py-4 rounded-[2rem] hover:bg-accent/90 transition-colors">Neem contact op</Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
