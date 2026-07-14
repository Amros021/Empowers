import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ChevronRight, User } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function BlogPostMaximaliseerConversiesVsDoelCpa() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen selection:bg-accent/30 selection:text-dark flex flex-col bg-background">
            <Helmet>
                <title>Maximaliseer Conversies vs Doel-CPA in Google Ads: wanneer wat? | Empowers</title>
                <meta name="description" content="Twee biedstrategieën, twee verschillende doelen. Wanneer Maximaliseer Conversies sterker werkt dan Doel-CPA en andersom, met praktische schakelmomenten voor MKB-campagnes." />
                <link rel="canonical" href="https://www.empowers.nl/blogs/google-ads/maximaliseer-conversies-vs-doel-cpa" />
                <meta property="og:title" content="Maximaliseer Conversies vs Doel-CPA: wanneer wat?" />
                <meta property="og:description" content="De biedstrategie-keuze die je rendement maakt of breekt." />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://www.empowers.nl/blogs/google-ads/maximaliseer-conversies-vs-doel-cpa" />
                <meta property="og:image" content="https://www.empowers.nl/images/blogs/maximaliseer-conversies-vs-doel-cpa.jpg" />
                <meta property="article:published_time" content="2026-05-14T13:00:00+02:00" />
                <meta property="article:author" content="Empowers" />
                <meta property="article:section" content="Google Ads" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Maximaliseer Conversies vs Doel-CPA: wanneer wat?" />
                <meta name="twitter:description" content="Praktische gids om de juiste biedstrategie te kiezen." />

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Article",
                        "headline": "Maximaliseer Conversies vs Doel-CPA in Google Ads: wanneer wat?",
                        "description": "Twee biedstrategieën, twee verschillende doelen. Wanneer Maximaliseer Conversies sterker werkt dan Doel-CPA en andersom.",
                        "image": "https://www.empowers.nl/images/blogs/maximaliseer-conversies-vs-doel-cpa.jpg",
                        "datePublished": "2026-05-14T13:00:00+02:00",
                        "author": { "@type": "Organization", "name": "Empowers" },
                        "publisher": {
                            "@type": "Organization", "name": "Empowers", "url": "https://www.empowers.nl",
                            "logo": { "@type": "ImageObject", "url": "https://www.empowers.nl/empowers-logo-color.svg" }
                        },
                        "mainEntity": {
                            "@type": "FAQPage",
                            "mainEntity": [
                                {
                                    "@type": "Question",
                                    "name": "Wat is het verschil tussen Maximaliseer Conversies en Doel-CPA?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Maximaliseer Conversies probeert binnen je budget zoveel mogelijk conversies te halen, zonder vaste prijslimiet per conversie. Doel-CPA stuurt op een gemiddelde kost per conversie die jij instelt. Maximaliseer Conversies is geschikt als je vooral volume wilt of nog onvoldoende historie hebt. Doel-CPA past wanneer je weet wat een conversie maximaal mag kosten en je rendement wilt beheersen."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Wanneer kies ik Maximaliseer Conversies?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Bij nieuwe campagnes zonder voldoende historische data, bij sterke volumegroei waarbij je marktaandeel wilt veroveren, of als de waarde per conversie hoog genoeg is om kostschommelingen op te vangen. Ook geschikt als je conversievolume per maand onder de drempel zit waarbij Doel-CPA betrouwbaar werkt, doorgaans rond de 30 conversies per maand."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Wanneer kies ik Doel-CPA?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Zodra je campagne een stabiele historie heeft, doorgaans minstens 30 conversies per maand, en je weet wat een conversie maximaal mag kosten op basis van je marge of customer lifetime value. Doel-CPA voorkomt dat het algoritme dure clicks koopt om het volume vol te houden en past beter bij marges die scherp zijn."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Hoeveel conversies heb je nodig voor Doel-CPA?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Google adviseert minimaal 30 conversies in 30 dagen voordat Doel-CPA betrouwbaar genoeg werkt. Onder die drempel mist het algoritme genoeg leerdata om consistent op CPA te sturen. Bij minder volume blijf je beter op Maximaliseer Conversies, eventueel met een dagbudget-limiet, en wacht je tot je voldoende historie hebt voor de overstap."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Hoe stel ik mijn Doel-CPA juist in?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Start bij je werkelijke gemiddelde CPA van de afgelopen 30 dagen. Stel je doel daar 10 tot 15 procent onder als je rendement wilt verbeteren, maar niet veel scherper, anders verstik je het volume. Pas je doel maandelijks aan op basis van wat de campagne werkelijk levert. Een te ambitieus Doel-CPA leidt tot lage impressievolumes en gemiste kansen."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Wat doe ik als Doel-CPA niet werkt?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Drie controles. Eerst: zit je boven de 30 conversies per maand? Zo nee, dan is Doel-CPA te vroeg ingezet. Tweede: is je doel realistisch, oftewel niet meer dan 10 tot 15 procent onder je werkelijke CPA? Derde: heb je voldoende creatives en keyword-coverage om het algoritme keuzes te geven? Voldoet alles, geef Doel-CPA dan minimaal twee weken om in te leren voordat je oordeelt."
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
                            { "@type": "ListItem", "position": 4, "name": "Maximaliseer Conversies vs Doel-CPA", "item": "https://www.empowers.nl/blogs/google-ads/maximaliseer-conversies-vs-doel-cpa" }
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
                        <span className="text-primary truncate">Maximaliseer Conversies vs Doel-CPA</span>
                    </nav>

                    <header className="mb-16">
                        <div className="inline-block px-3 py-1 bg-accent/10 text-accent font-mono text-xs uppercase tracking-widest rounded-full mb-6">
                            Google Ads
                        </div>
                        <h1 className="font-sans font-bold text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight mb-8">
                            Maximaliseer Conversies vs Doel-CPA in Google Ads: wanneer wat?
                        </h1>

                        <div className="flex flex-wrap items-center gap-6 text-sm font-sans text-primary/60 border-y border-primary/10 py-6">
                            <div className="flex items-center gap-2"><User className="w-4 h-4" /><span>Empowers Redactie</span></div>
                            <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>14 mei 2026</span></div>
                            <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>7 minuten leestijd</span></div>
                        </div>
                    </header>

                    <figure className="w-full h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden mb-16 relative bg-primary">
                        <div className="absolute inset-0 bg-[url('/images/blogs/maximaliseer-conversies-vs-doel-cpa.jpg')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </figure>

                    <div className="prose prose-lg max-w-none prose-headings:text-primary prose-headings:font-bold prose-a:text-accent prose-a:underline hover:prose-a:text-accent/80">
                        <p className="text-xl leading-relaxed text-primary/80 font-medium mb-6">
                            De biedstrategie is de meest onderschatte hefboom in Google Ads. Adverteerders steken weken in keyword-onderzoek en advertentieteksten, en kiezen vervolgens vrijwel op de gok tussen Maximaliseer Conversies en Doel-CPA. Het verschil tussen die twee bepaalt vaak het verschil tussen winst en verlies op dezelfde campagne. Wanneer kies je wat, en wanneer schakel je over?
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe de twee strategieën werken</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Maximaliseer Conversies geeft het algoritme één opdracht: haal binnen mijn dagbudget zoveel mogelijk conversies. Het stuurt op volume, niet op kosten per conversie. Als er kansen zijn op een goedkope conversie pakt het die. Maar als alle kansen die dag duur zijn, koopt het ze toch. Volume gaat boven prijs.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Doel-CPA werkt anders. Daar geef je het algoritme een gemiddelde prijs per conversie die je wilt aanhouden. Het probeert dat doel te halen door duurdere conversies te negeren en op goedkopere kansen te biedingen. Daardoor kan de campagne lager volume draaien dan haar dagbudget toelaat, omdat ze niet bereid is duurder uit te komen dan het doel.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat het belangrijkste verschil is</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Maximaliseer Conversies optimaliseert op kwantiteit, Doel-CPA op kwaliteit binnen een prijslimiet. Klinkt logisch, maar in de praktijk schakelen adverteerders te snel naar Doel-CPA omdat dat als "controle" voelt. Resultaat: een campagne die voortdurend te weinig volume draait en niet genoeg leert om beter te worden. Te vroeg Doel-CPA inzetten is een van de meest dure fouten in MKB-campagnes.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Andersom geldt ook. Bij voldoende volume zonder Doel-CPA blijft je rendement gevoelig voor schommelingen in de markt. Concurrenten die hard pushen, dure veilingen, seizoenseffecten, alles slaat door in je gemiddelde CPA omdat er geen rem op zit. Voor campagnes met scherpe marges is dat te risicovol. Op het juiste moment overstappen is het waardevolle deel van biedstrategie.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Kies Maximaliseer Conversies wanneer...</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Drie situaties waarin Maximaliseer Conversies vrijwel altijd beter werkt. Eerste: bij nieuwe campagnes. Je hebt nog geen historie waarop het algoritme kan leren wat een goede conversie kost. Zet Doel-CPA hier in en je dwingt het algoritme te raden, met een te streng of te ruim doel als gevolg.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Tweede: bij snelle marktveroveringen. Wanneer je een nieuw product lanceert of een seizoenspiek wil pakken, telt volume meer dan exacte CPA. Een paar conversies extra die wat duurder uitkomen leveren over het seizoen vaak een hoger totaalrendement op dan strikte CPA-controle. Maximaliseer Conversies past bij momenten waar bereik telt.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Derde: als je conversievolume onder de 30 per maand zit. Met minder data kan het algoritme geen betrouwbare gemiddelde CPA berekenen. Doel-CPA functioneert dan op vermoedens, en levert grilliger resultaten dan een eerlijk Maximaliseer Conversies met een goed budget. Wacht met overstappen tot je structureel boven die drempel zit.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Kies Doel-CPA wanneer...</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een campagne is rijp voor Doel-CPA wanneer ze drie criteria haalt. Eerst: ze draait minstens drie maanden, met genoeg historische data om patronen te leren. Tweede: er zijn minstens 30 conversies per maand, idealiter meer. Derde: je weet wat een conversie maximaal mag kosten op basis van je marge of de waarde van een klant over zijn levenscyclus.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            In die situatie is Doel-CPA een serieuze winstverbeteraar. Je laat het algoritme niet meer alles kopen, je laat het kiezen welke kansen het waard zijn. Voor scherpe markten met veel concurrentie betekent dat structureel beter rendement. De meeste B2B-campagnes en webshops met dunne marges horen na de leerfase op Doel-CPA, niet daarvoor.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe je Doel-CPA correct instelt</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De grootste valkuil: te ambitieus beginnen. Wie zijn werkelijke CPA op 35 euro heeft en plots een doel van 20 euro instelt, draait zijn campagne dood. Het algoritme gaat zoveel kansen weigeren om de CPA te halen dat de campagne weinig levert. Resultaat: zogenaamd lagere CPA, maar tegelijk veel minder conversies. Per saldo geen vooruitgang.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een werkbare aanpak: start je Doel-CPA 10 tot 15 procent onder je werkelijke gemiddelde van de afgelopen 30 dagen. Geef de campagne twee weken om in te leren. Levert ze stabiel de gevraagde CPA en conversies, verlaag het doel met opnieuw 10 procent. Herhaal totdat je merkt dat het volume terugloopt. Daar zit je optimale punt, oftewel de scherpste prijs waarbij de campagne nog genoeg conversies levert.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Veelgemaakte fouten</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Te snel schakelen tussen biedstrategieën. Elke wijziging triggert een nieuwe leerfase van zeven tot veertien dagen waarin je campagne minder presteert. Wie maandelijks tussen Maximaliseer Conversies en Doel-CPA wisselt, draait permanent in leerfase. Kies een strategie, geef die minimaal vier weken om zich te bewijzen voor je oordeelt.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Te lang op Maximaliseer Conversies blijven hangen. Bedrijven die boven de drempel zitten maar nog steeds op volume sturen, laten rendement liggen. Andersom even gevaarlijk: vasthouden aan Doel-CPA terwijl de markt verschuift en de campagne onder de drempel zakt. Evalueer elk kwartaal of de strategie nog past, niet op gevoel maar op data.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een derde fout: alleen kijken naar de directe CPA in Google Ads. Voor veel campagnes geldt dat een Search-klik bijdraagt aan latere conversies die via andere kanalen worden afgerond. Wie zijn biedstrategie kiest op last-click data onderschat de bovenkant van zijn funnel. Hoe je dat correct meet beschrijven we in onze blog over <Link to="/blogs/tracking/attribution-modellen-uitgelegd-last-click" className="text-accent hover:underline">attributiemodellen</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Een werkbare checklist voor de keuze</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Loop vijf vragen langs voor je een strategie kiest. Heb je minimaal drie maanden historie op deze campagne? Haalt ze structureel 30 of meer conversies per maand? Ken je je werkelijke maximale CPA op basis van marge of customer lifetime value? Heb je voldoende creative-volume om het algoritme keuzes te geven? Is je conversietracking betrouwbaar ingericht?
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Vijf keer ja: Doel-CPA is waarschijnlijk de juiste keuze. Een of meer nee: blijf op Maximaliseer Conversies tot je de basis op orde hebt. Het is geen schande om langer op Maximaliseer Conversies te blijven dan een goeroe op LinkedIn aanraadt. Wat telt is rendement, niet welke strategie als gevorderd voelt. Hoe je je hele Google Ads-account op de juiste manier opzet en optimaliseert lees je in onze blog over <Link to="/blogs/google-ads/google-ads-beheer-checklist-bureau-controleren" className="text-accent hover:underline">Google Ads-beheer controleren</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Veelgestelde vragen</h2>
                    </div>

                    <section className="mt-4">
                        <div className="space-y-6 not-prose">
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat is het verschil tussen Maximaliseer Conversies en Doel-CPA?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Maximaliseer Conversies probeert binnen je budget zoveel mogelijk conversies te halen, zonder vaste prijslimiet per conversie. Doel-CPA stuurt op een gemiddelde kost per conversie die jij instelt. Maximaliseer Conversies is geschikt als je vooral volume wilt of nog onvoldoende historie hebt. Doel-CPA past wanneer je weet wat een conversie maximaal mag kosten en je rendement wilt beheersen.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wanneer kies ik Maximaliseer Conversies?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Bij nieuwe campagnes zonder voldoende historische data, bij sterke volumegroei waarbij je marktaandeel wilt veroveren, of als de waarde per conversie hoog genoeg is om kostschommelingen op te vangen. Ook geschikt als je conversievolume per maand onder de drempel zit waarbij Doel-CPA betrouwbaar werkt, doorgaans rond de 30 conversies per maand.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wanneer kies ik Doel-CPA?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Zodra je campagne een stabiele historie heeft, doorgaans minstens 30 conversies per maand, en je weet wat een conversie maximaal mag kosten op basis van je marge of customer lifetime value. Doel-CPA voorkomt dat het algoritme dure clicks koopt om het volume vol te houden en past beter bij marges die scherp zijn.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoeveel conversies heb je nodig voor Doel-CPA?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Google adviseert minimaal 30 conversies in 30 dagen voordat Doel-CPA betrouwbaar genoeg werkt. Onder die drempel mist het algoritme genoeg leerdata om consistent op CPA te sturen. Bij minder volume blijf je beter op Maximaliseer Conversies, eventueel met een dagbudget-limiet, en wacht je tot je voldoende historie hebt voor de overstap.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoe stel ik mijn Doel-CPA juist in?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Start bij je werkelijke gemiddelde CPA van de afgelopen 30 dagen. Stel je doel daar 10 tot 15 procent onder als je rendement wilt verbeteren, maar niet veel scherper, anders verstik je het volume. Pas je doel maandelijks aan op basis van wat de campagne werkelijk levert. Een te ambitieus Doel-CPA leidt tot lage impressievolumes en gemiste kansen.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat doe ik als Doel-CPA niet werkt?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Drie controles. Eerst: zit je boven de 30 conversies per maand? Zo nee, dan is Doel-CPA te vroeg ingezet. Tweede: is je doel realistisch, oftewel niet meer dan 10 tot 15 procent onder je werkelijke CPA? Derde: heb je voldoende creatives en keyword-coverage om het algoritme keuzes te geven? Voldoet alles, geef Doel-CPA dan minimaal twee weken om in te leren voordat je oordeelt.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="mt-16 pt-12 border-t border-primary/10">
                        <h3 className="text-xl font-bold text-primary mb-6">Lees ook</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <Link to="/blogs/google-ads/google-ads-demand-gen" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Demand Gen uitgelegd</h3>
                                <p className="text-primary/60 text-sm">Wat is Demand Gen en wanneer past het in je mix?</p>
                            </Link>
                            <Link to="/blogs/google-ads/google-ads-beheer-checklist-bureau-controleren" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Google Ads-beheer controleren</h3>
                                <p className="text-primary/60 text-sm">De checklist om je bureau of intern team te toetsen.</p>
                            </Link>
                            <Link to="/blogs/google-ads" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Google Ads blogs</h3>
                                <p className="text-primary/60 text-sm">Alle artikelen over Search, PMax en biedstrategieën.</p>
                            </Link>
                        </div>
                    </section>
                </div>
            </article>

            <section className="w-full pb-32 px-6">
                <div className="max-w-4xl mx-auto bg-primary rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
                    <h2 className="relative z-10 font-drama italic text-background text-3xl sm:text-4xl md:text-5xl mb-6">Twijfel over de juiste biedstrategie?</h2>
                    <p className="relative z-10 font-sans text-background/70 text-lg mb-10 max-w-xl mx-auto">We bekijken je account en zetten de juiste strategie op de juiste campagne. Geen gokwerk, wel data-gedreven keuzes.</p>
                    <Link to="/contact" className="relative z-10 btn-magnetic inline-flex items-center justify-center bg-accent text-background font-sans font-bold text-lg px-10 py-4 rounded-[2rem] hover:bg-accent/90 transition-colors">Neem contact op</Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
