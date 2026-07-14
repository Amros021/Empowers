import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ChevronRight, User } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function BlogPostSeaUitbestedenValkuilenMkb() {
    useEffect(() => { window.scrollTo(0, 0); }, []);

    return (
        <main className="min-h-screen selection:bg-accent/30 selection:text-dark flex flex-col bg-background">
            <Helmet>
                <title>SEA uitbesteden: 5 valkuilen die MKB-bedrijven geld kosten | Empowers</title>
                <meta name="description" content="De vijf meest gemaakte fouten bij SEA uitbesteden in het MKB. Van verkeerde KPI's tot accounts op naam van het bureau, en hoe je ze vermijdt." />
                <link rel="canonical" href="https://www.empowers.nl/blogs/google-ads/sea-uitbesteden-valkuilen-mkb" />
                <meta property="og:title" content="SEA uitbesteden: 5 valkuilen die MKB-bedrijven geld kosten" />
                <meta property="og:description" content="De duurste fouten bij het uitbesteden van SEA, en hoe je ze vooraf herkent." />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://www.empowers.nl/blogs/google-ads/sea-uitbesteden-valkuilen-mkb" />
                <meta property="og:image" content="https://www.empowers.nl/images/blogs/sea-uitbesteden-valkuilen-mkb.jpg" />
                <meta property="article:published_time" content="2026-05-13T14:30:00+02:00" />
                <meta property="article:section" content="Google Ads" />

                <script type="application/ld+json">{JSON.stringify({
                    "@context": "https://schema.org", "@type": "Article",
                    "headline": "SEA uitbesteden: 5 valkuilen die MKB-bedrijven geld kosten",
                    "description": "De vijf meest voorkomende fouten bij het uitbesteden van SEA, en hoe je ze voorkomt.",
                    "image": "https://www.empowers.nl/images/blogs/sea-uitbesteden-valkuilen-mkb.jpg",
                    "datePublished": "2026-05-13T14:30:00+02:00",
                    "author": { "@type": "Organization", "name": "Empowers" },
                    "publisher": { "@type": "Organization", "name": "Empowers", "url": "https://www.empowers.nl",
                        "logo": { "@type": "ImageObject", "url": "https://www.empowers.nl/empowers-logo-color.svg" } },
                    "mainEntity": { "@type": "FAQPage", "mainEntity": [
                        { "@type": "Question", "name": "Wat is de duurste fout bij SEA uitbesteden?",
                          "acceptedAnswer": { "@type": "Answer", "text": "Een Google Ads-account laten opzetten op naam van het bureau in plaats van op je eigen bedrijf. Bij beëindiging van de samenwerking ben je dan al je historische data, je quality scores en je leerfase-credits kwijt. Eis altijd dat het account op naam van jouw bedrijf staat, met het bureau als gebruiker met admin-rechten." } },
                        { "@type": "Question", "name": "Hoe weet ik of mijn bureau goed werk levert?",
                          "acceptedAnswer": { "@type": "Answer", "text": "Niet aan rapportages alleen. Vraag elk kwartaal toegang tot het Google Ads-platform zelf en bekijk drie zaken: zijn er negatieve zoekwoorden toegevoegd, draaien er actieve A/B-tests op advertentieteksten, en is de campagnestructuur logisch opgezet? Een statisch account zonder zichtbare optimalisaties is een teken dat er weinig werk wordt verricht." } },
                        { "@type": "Question", "name": "Wat zijn de meest voorkomende valkuilen?",
                          "acceptedAnswer": { "@type": "Answer", "text": "De vijf grootste: 1) accounts op naam van het bureau in plaats van jouw bedrijf, 2) verkeerde KPI's afspreken (impressies of clicks in plaats van CPL of ROAS), 3) geen heldere afspraken over wat het bureau maandelijks levert, 4) verborgen marges bovenop het advertentiebudget, 5) onmogelijk lange contracten zonder evaluatiemomenten." } },
                        { "@type": "Question", "name": "Hoe bouw je een goede contractafspraak?",
                          "acceptedAnswer": { "@type": "Answer", "text": "Drie essentiële clausules. Eigendom van accounts op jouw naam. Een opzegtermijn van maximaal één maand na een proefperiode van 1 tot 3 maanden. Een prestatie-clausule: wat gebeurt er als afgesproken KPI's twee maanden achtereen niet worden gehaald? Een evaluatiemoment met de senior strateeg, mogelijk een korting op de fee, of de optie om tussentijds te stoppen." } },
                        { "@type": "Question", "name": "Wanneer is het tijd om van bureau te wisselen?",
                          "acceptedAnswer": { "@type": "Answer", "text": "Bij twee of meer signalen: KPI's worden drie maanden achtereen niet gehaald zonder duidelijke uitleg, communicatie verloopt eenzijdig (jij moet steeds aan de bel trekken), rapportages bevatten alleen positieve metrics, of het bureau weigert volledige toegang te geven tot je account. Een gesprek met de senior strateeg over verbetering geeft je antwoord op de vraag of er nog wat te repareren valt." } },
                        { "@type": "Question", "name": "Kan een MKB met klein budget SEA uitbesteden?",
                          "acceptedAnswer": { "@type": "Answer", "text": "Onder de 2.000 euro advertentiebudget per maand wordt SEA uitbesteden lastig: het bureau kan niet voldoende uren in optimalisatie steken om zijn fee terug te verdienen, en je campagne haalt zelden genoeg conversies voor stabiele leerdata. Voor kleinere budgetten kan zelf doen met training of een coaching-traject vaak meer opleveren dan volledig uitbesteden." } }
                    ] }
                })}</script>
                <script type="application/ld+json">{JSON.stringify({
                    "@context": "https://schema.org", "@type": "BreadcrumbList",
                    "itemListElement": [
                        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.empowers.nl" },
                        { "@type": "ListItem", "position": 2, "name": "Blogs", "item": "https://www.empowers.nl/blogs" },
                        { "@type": "ListItem", "position": 3, "name": "Google Ads", "item": "https://www.empowers.nl/blogs/google-ads" },
                        { "@type": "ListItem", "position": 4, "name": "SEA uitbesteden valkuilen", "item": "https://www.empowers.nl/blogs/google-ads/sea-uitbesteden-valkuilen-mkb" }
                    ]
                })}</script>
                    <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="SEA uitbesteden: 5 valkuilen die MKB-bedrijven geld kosten" />
        <meta name="twitter:description" content="De vijf meest gemaakte fouten bij SEA uitbesteden in het MKB. Van verkeerde KPI's tot accounts op naam van het bureau, e" />
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
                        <span className="text-primary truncate">SEA uitbesteden valkuilen</span>
                    </nav>

                    <header className="mb-16">
                        <div className="inline-block px-3 py-1 bg-accent/10 text-accent font-mono text-xs uppercase tracking-widest rounded-full mb-6">Google Ads</div>
                        <h1 className="font-sans font-bold text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight mb-8">SEA uitbesteden: 5 valkuilen die MKB-bedrijven geld kosten</h1>
                        <div className="flex flex-wrap items-center gap-6 text-sm font-sans text-primary/60 border-y border-primary/10 py-6">
                            <div className="flex items-center gap-2"><User className="w-4 h-4" /><span>Empowers Redactie</span></div>
                            <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>13 mei 2026</span></div>
                            <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>7 minuten leestijd</span></div>
                        </div>
                    </header>

                    <figure className="w-full h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden mb-16 relative bg-primary">
                        <div className="absolute inset-0 bg-[url('/images/blogs/sea-uitbesteden-valkuilen-mkb.jpg')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </figure>

                    <div className="prose prose-lg max-w-none prose-headings:text-primary prose-headings:font-bold prose-a:text-accent prose-a:underline hover:prose-a:text-accent/80">
                        <p className="text-xl leading-relaxed text-primary/80 font-medium mb-6">
                            SEA uitbesteden lijkt simpel. Je tekent met een bureau, geeft toegang tot je account en wacht op resultaten. In de praktijk is het een terrein vol valkuilen waar MKB-ondernemers met regelmaat in trappen. Vijf fouten die we het meest tegenkomen, en hoe je ze voorkomt voordat ze je rendement opvreten.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Valkuil 1: account op naam van het bureau</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De duurste fout begint vaak vóór de samenwerking. Het bureau "maakt even een nieuw account aan" en zet dat op zijn eigen MCC-koepel of erger nog: op zijn eigen bedrijfsnaam. Klinkt onschuldig. Tot je een paar jaar later weg wilt en ontdekt dat de account-historie, de conversie-data en je quality scores eigendom zijn van het bureau. Je begint dan letterlijk op nul.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De juiste opzet: jij maakt zelf een Google Ads-account aan, op naam van jouw bedrijf, met je eigen factuuradres. Het bureau krijgt admin-toegang via zijn MCC, maar het eigenaarschap blijft op jouw naam. Hetzelfde geldt voor Google Analytics, Merchant Center en Tag Manager. Bij twijfel vraag je dit schriftelijk vastgelegd voor je tekent. Geen uitzonderingen.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Valkuil 2: de verkeerde KPI's afspreken</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            "We hebben deze maand 250.000 impressies gehaald en 8.000 clicks." Klinkt indrukwekkend. Zegt niets over de vraag of je er geld aan hebt verdiend. Veel bureaus rapporteren op impressies, clicks of CTR omdat die metrics altijd goed kunnen lijken. Voor het MKB dat groei zoekt zijn dat slechte primaire KPI's.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Wat wél telt: voor dienstverleners is dat CPL (kosten per lead) of CPA (kosten per acquisitie). Voor webshops ROAS (return on ad spend) en gemiddelde orderwaarde. Voor SaaS de CAC (klantacquisitiekosten) en payback-periode. Spreek vooraf één primaire KPI af die zo dicht mogelijk bij je omzet of marge zit, en weiger rapportages die alleen op de "vanity metrics" leunen. Hoe je dat opbouwt staat in onze blog over <Link to="/blogs/google-ads/meet-roi-google-ads-campagne" className="text-accent hover:underline">ROI meten in Google Ads</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Valkuil 3: vage afspraken over wat het bureau levert</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            "Wij beheren je Google Ads-account" is geen contractafspraak. Het is een belofte die voor twee uur per maand kan staan of voor twintig. Zonder duidelijke deliverables krijg je bijna altijd het minimumpakket. Een goed contract specificeert: aantal uren per maand per discipline (Search, Shopping, optimalisatie, rapportage), aantal A/B-tests per kwartaal, frequentie van strategische reviews, en wat er gebeurt bij seizoenspieken of campagne-launches.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Vraag concreet: "Hoeveel uur per maand zit er in mijn account?" en "Wie zit er aan, junior of senior?" Een bureau dat dat vaag houdt, levert vrijwel altijd minder dan je verwacht. Een bureau dat openhartig zegt "10 uur senior plus 5 uur junior, met dagelijkse account-checks" weet wat het doet.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Valkuil 4: verborgen marges op het mediabudget</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Sommige bureaus rekenen niet alleen een management fee, maar nemen daarnaast stilletjes een percentage van je advertentiebudget mee. Soms 15 procent, soms meer. Daarmee word je het echt dure als je budget opschaalt: bij 10.000 euro mediabudget per maand betaal je daar dan ongezien 1.500 euro per maand bij, naast de fee die je al expliciet ziet.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De juiste vraag voor het tekenen: "Wat krijgt het bureau in totaal, alles bij elkaar, per maand?" Geen "ja maar de fee is alleen X", maar het totaalbedrag. Een eerlijk bureau geeft daar een concreet antwoord. Een bureau dat onduidelijk wordt heeft iets te verbergen. Dat betekent overigens niet dat een marge per definitie fout is: sommige bureau-modellen zijn legitiem op marge-basis. Het probleem is dat de meeste MKB-ondernemers het niet zien aankomen.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Valkuil 5: langlopende contracten zonder evaluatiemomenten</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een contract van twaalf maanden zonder tussentijds evaluatiemoment is een rode vlag. Marketing is een snel veranderend vak, en jij wilt je samenwerking elke drie maanden kunnen herijken. Vooral als de resultaten tegenvallen heb je geen middel om tijdig in te grijpen.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Realistische opzet: een proefperiode van 1 tot 3 maanden waarin je zonder opzegtermijn kan stoppen. Daarna een doorlopend contract met een opzegtermijn van maximaal één maand. Plus een driemaandelijks evaluatiegesprek waarin beide partijen aangeven wat er beter kan. Een bureau dat hier moeilijk over doet, vertrouwt niet op zijn eigen werk.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe herken je valkuilen vooraf?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De testfase begint bij het tweede gesprek. Vraag drie concrete dingen. Wie is mijn dagelijkse contactpersoon, en hoeveel andere accounts beheert hij of zij parallel? Mag ik vóór ondertekening de management-rapportage zien van een vergelijkbare klant? Wat gebeurt er als KPI's twee maanden achterelkaar niet gehaald worden, contractueel vastgelegd?
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De antwoorden zeggen meer dan welke pitch dan ook. Een bureau dat antwoordt met concrete getallen en namen wint vertrouwen. Een bureau dat in algemeenheden blijft hangen is meestal geen veilige keuze. Hoe je nog meer signalen kan testen behandelen we in onze blog over <Link to="/blogs/algemeen/online-marketing-uitbesteden-bureau-resultaat" className="text-accent hover:underline">marketingbureau dat resultaat levert</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Bonus: drie subtiele valkuilen</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Eerste subtielere valkuil: een bureau dat alleen wil rapporteren met een eigen dashboard. Vraag of je dezelfde data ook direct vanuit Google Ads kunt zien. Eigen dashboards verbergen soms wat er werkelijk gebeurt in het account. Een professioneel bureau is transparant: je mag overal in kijken.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Tweede: een bureau dat campagnes maandenlang ongewijzigd laat draaien. Optimalisatie is geen "set en forget"-werk. Negatieve zoekwoorden moeten worden toegevoegd, advertentieteksten moeten worden getest, biedstrategieën moeten worden herzien. Bekijk in Google Ads de Change History: hoe vaak heeft het bureau iets aangepast in de laatste 30 dagen? Onder de tien wijzigingen voor een actief account is verdacht weinig.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Derde: een bureau dat niet meedenkt over jouw landingspagina's of conversiepaden. SEA is geen geïsoleerd ding. Een goede partner praat ook over wat er na de klik gebeurt: laadsnelheid, message match, formulierlengte. Hoe dat samenhangt staat in onze blog over <Link to="/blogs/google-ads/verlaag-bounce-rate-betere-google" className="text-accent hover:underline">bounce rate verlagen via betere landingspagina's</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wanneer is uitbesteden gewoon niet de juiste keuze?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Onder de 2.000 euro mediabudget per maand wordt SEA uitbesteden lastig rendabel. Het bureau kan niet voldoende uren in optimalisatie steken om zijn fee terug te verdienen, en je campagne haalt te weinig conversies voor leerdata. Voor kleinere budgetten is een coaching-traject vaak slimmer: een SEA-specialist leert jou de basis in vier sessies, daarna draai je het zelf met af en toe een check. Dat kost je vaak minder per jaar dan een management-contract.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Vanaf circa 3.000 euro mediabudget per maand wordt full-service uitbesteden interessant. Het bureau heeft dan voldoende budget om strategisch te werken, en jij ziet rendement dat je zelf zelden behaalt zonder de specialistische kennis.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Veelgestelde vragen</h2>
                    </div>

                    <section className="mt-4">
                        <div className="space-y-6 not-prose">
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat is de duurste fout bij SEA uitbesteden?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Een Google Ads-account laten opzetten op naam van het bureau in plaats van op je eigen bedrijf. Bij beëindiging van de samenwerking ben je dan al je historische data, je quality scores en je leerfase-credits kwijt. Eis altijd dat het account op naam van jouw bedrijf staat, met het bureau als gebruiker met admin-rechten.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoe weet ik of mijn bureau goed werk levert?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Niet aan rapportages alleen. Vraag elk kwartaal toegang tot het Google Ads-platform zelf en bekijk drie zaken: zijn er negatieve zoekwoorden toegevoegd, draaien er actieve A/B-tests op advertentieteksten, en is de campagnestructuur logisch opgezet? Een statisch account zonder zichtbare optimalisaties is een teken dat er weinig werk wordt verricht.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat zijn de meest voorkomende valkuilen?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">De vijf grootste: 1) accounts op naam van het bureau in plaats van jouw bedrijf, 2) verkeerde KPI's afspreken (impressies of clicks in plaats van CPL of ROAS), 3) geen heldere afspraken over wat het bureau maandelijks levert, 4) verborgen marges bovenop het advertentiebudget, 5) onmogelijk lange contracten zonder evaluatiemomenten.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoe bouw je een goede contractafspraak?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Drie essentiële clausules. Eigendom van accounts op jouw naam. Een opzegtermijn van maximaal één maand na een proefperiode van 1 tot 3 maanden. Een prestatie-clausule: wat gebeurt er als afgesproken KPI's twee maanden achtereen niet worden gehaald? Een evaluatiemoment met de senior strateeg, mogelijk een korting op de fee, of de optie om tussentijds te stoppen.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wanneer is het tijd om van bureau te wisselen?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Bij twee of meer signalen: KPI's worden drie maanden achtereen niet gehaald zonder duidelijke uitleg, communicatie verloopt eenzijdig (jij moet steeds aan de bel trekken), rapportages bevatten alleen positieve metrics, of het bureau weigert volledige toegang te geven tot je account. Een gesprek met de senior strateeg over verbetering geeft je antwoord op de vraag of er nog wat te repareren valt.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Kan een MKB met klein budget SEA uitbesteden?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Onder de 2.000 euro advertentiebudget per maand wordt SEA uitbesteden lastig: het bureau kan niet voldoende uren in optimalisatie steken om zijn fee terug te verdienen, en je campagne haalt zelden genoeg conversies voor stabiele leerdata. Voor kleinere budgetten kan zelf doen met training of een coaching-traject vaak meer opleveren dan volledig uitbesteden.</p>
                            </div>
                        </div>
                    </section>

                    <section className="mt-16 pt-12 border-t border-primary/10">
                        <h3 className="text-xl font-bold text-primary mb-6">Lees ook</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <Link to="/blogs/algemeen/online-marketing-uitbesteden-bureau-resultaat" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Marketingbureau kiezen</h3>
                                <p className="text-primary/60 text-sm">De vragen om vooraf te stellen en de rode vlaggen.</p>
                            </Link>
                            <Link to="/blogs/google-ads/sea-uitbesteden-webshop-ecommerce-bureau" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">SEA uitbesteden als webshop</h3>
                                <p className="text-primary/60 text-sm">Waar een e-commerce bureau aan moet voldoen.</p>
                            </Link>
                            <Link to="/blogs/google-ads" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Google Ads blogs</h3>
                                <p className="text-primary/60 text-sm">Alle artikelen over Search, Shopping en PMax.</p>
                            </Link>
                        </div>
                    </section>
                </div>
            </article>

            <section className="w-full pb-32 px-6">
                <div className="max-w-4xl mx-auto bg-primary rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
                    <h2 className="relative z-10 font-drama italic text-background text-3xl sm:text-4xl md:text-5xl mb-6">Geen valkuilen, wel resultaat?</h2>
                    <p className="relative z-10 font-sans text-background/70 text-lg mb-10 max-w-xl mx-auto">We werken met heldere KPI's, eigendom op jouw naam en transparante contracten. Geen verborgen marges, wel meetbare groei.</p>
                    <Link to="/contact" className="relative z-10 btn-magnetic inline-flex items-center justify-center bg-accent text-background font-sans font-bold text-lg px-10 py-4 rounded-[2rem] hover:bg-accent/90 transition-colors">Neem contact op</Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
