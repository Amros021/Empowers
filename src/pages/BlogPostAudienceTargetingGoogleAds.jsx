import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ChevronRight, User } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function BlogPostAudienceTargetingGoogleAds() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen selection:bg-accent/30 selection:text-dark flex flex-col bg-background">
            <Helmet>
                <title>Audience targeting in Google Ads: zo zet je doelgroepen scherp in | Empowers</title>
                <meta name="description" content="Google Ads audience targeting bepaalt wie je advertentie ziet en wie hem mist. De doelgroepen die er echt toe doen, hoe je ze combineert met keywords en welke fouten je geld kosten." />
                <link rel="canonical" href="https://www.empowers.nl/blogs/google-ads/audience-targeting-google-ads" />
                <meta property="og:title" content="Audience targeting in Google Ads: zo zet je doelgroepen scherp in" />
                <meta property="og:description" content="Hoe je doelgroepen in Google Ads gebruikt om je rendement te verhogen zonder je bereik te verstikken." />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://www.empowers.nl/blogs/google-ads/audience-targeting-google-ads" />
                <meta property="og:image" content="https://www.empowers.nl/images/blogs/audience-targeting-google-ads.jpg" />
                <meta property="article:published_time" content="2026-05-13" />
                <meta property="article:author" content="Empowers" />
                <meta property="article:section" content="Google Ads" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Audience targeting in Google Ads: zo zet je doelgroepen scherp in" />
                <meta name="twitter:description" content="De doelgroepen die er echt toe doen in Google Ads." />

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Article",
                        "headline": "Audience targeting in Google Ads: zo zet je doelgroepen scherp in",
                        "description": "Hoe je audience targeting in Google Ads inzet om wie je advertenties ziet beter te sturen zonder je bereik te verstikken.",
                        "image": "https://www.empowers.nl/images/blogs/audience-targeting-google-ads.jpg",
                        "datePublished": "2026-05-13T11:00:00+02:00",
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
                                    "name": "Wat is audience targeting in Google Ads?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Audience targeting is de manier waarop je in Google Ads bepaalt wie binnen je gekozen kanaal je advertentie te zien krijgt. Niet alleen op basis van zoekwoorden of websites, maar ook op wie de gebruiker is: zijn interesses, koopintentie, demografische profiel of eerdere bezoeken aan jouw site. Het is een extra laag boven je keyword- of placement-strategie."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Welke soorten doelgroepen kun je in Google Ads gebruiken?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Google Ads biedt vijf hoofdcategorieën: affinity audiences voor lange-termijn interesses, in-market audiences voor mensen die actief iets aan het kopen zijn, custom segments die je zelf bouwt op basis van zoekgedrag of bezochte sites, je eigen data via remarketing en Customer Match, en demografische segmenten op leeftijd, geslacht of inkomen. Combinaties tussen deze lagen werken vaak het sterkst."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Wat is het verschil tussen observation en targeting?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "In observation-modus voegt Google de doelgroep toe als datalaag zonder je bereik te beperken: je ziet hoe een segment presteert en kunt later bijbieden. In targeting-modus beperk je je bereik tot die doelgroep. Voor Search-campagnes is observation vrijwel altijd de juiste keuze omdat je daar al via keywords filtert. Targeting-modus past beter bij Display en YouTube waar je doelgroep de selectiefunctie heeft."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Werkt audience targeting nog bij Performance Max?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Bij Performance Max kun je doelgroepen alleen als signaal aanleveren via Audience Signals. Google verplicht je niet om binnen die signalen te blijven, het algoritme gebruikt ze als startpunt. Goede signalen versnellen de leerfase aanzienlijk en geven betere resultaten in de eerste weken. Slechte of te brede signalen helpen het algoritme niet en kosten je leertijd."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Hoeveel bezoekers heb ik nodig voor een remarketing-lijst?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Google hanteert sinds eind 2025 één drempel voor alle netwerken: minimaal 100 actieve bezoekers of gebruikers in de afgelopen 30 dagen. Onder dat aantal kan Google de lijst niet inzetten omdat het privacy-impact te groot zou zijn. Heb je weinig verkeer, kijk dan naar Customer Match, langere lookback-periodes of bredere paginadefinities om je lijst boven de drempel te krijgen."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Welke fout maken adverteerders het vaakst met audience targeting?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Te vroeg targeting-modus aanzetten op Search-campagnes. Dat versmalt je bereik enorm omdat je tegelijk filtert op keyword en op doelgroep. Resultaat: weinig impressies, te weinig data voor het algoritme om te leren, en de illusie dat je targeting werkt omdat de CPA laag is. Beter: observation-modus, eerst data verzamelen, daarna bijbieden op segmenten die bewezen renderen."
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
                            { "@type": "ListItem", "position": 4, "name": "Audience targeting in Google Ads", "item": "https://www.empowers.nl/blogs/google-ads/audience-targeting-google-ads" }
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
                        <span className="text-primary truncate">Audience targeting in Google Ads</span>
                    </nav>

                    <header className="mb-16">
                        <div className="inline-block px-3 py-1 bg-accent/10 text-accent font-mono text-xs uppercase tracking-widest rounded-full mb-6">
                            Google Ads
                        </div>
                        <h1 className="font-sans font-bold text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight mb-8">
                            Audience targeting in Google Ads: zo zet je doelgroepen scherp in
                        </h1>

                        <div className="flex flex-wrap items-center gap-6 text-sm font-sans text-primary/60 border-y border-primary/10 py-6">
                            <div className="flex items-center gap-2"><User className="w-4 h-4" /><span>Empowers Redactie</span></div>
                            <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>13 mei 2026</span></div>
                            <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>7 minuten leestijd</span></div>
                        </div>
                    </header>

                    <figure className="w-full h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden mb-16 relative bg-primary">
                        <div className="absolute inset-0 bg-[url('/images/blogs/audience-targeting-google-ads.jpg')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </figure>

                    <div className="prose prose-lg max-w-none prose-headings:text-primary prose-headings:font-bold prose-a:text-accent prose-a:underline hover:prose-a:text-accent/80">
                        <p className="text-xl leading-relaxed text-primary/80 font-medium mb-6">
                            Audience targeting is de stille kracht achter Google Ads. Adverteerders praten over biedstrategieën, advertentieteksten en quality scores, maar wie je advertentie te zien krijgt bepaalt minstens zoveel van je resultaat. Een perfect ingestelde campagne die naar de verkeerde persoon wordt geschoten is een dure flop. Hier lees je hoe je de doelgroepen in Google Ads inzet zodat je rendement omhoog gaat zonder dat je bereik instort.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat audience targeting precies doet</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Google Ads vraagt je per campagne een kanaal te kiezen, een keyword- of plaatsings-strategie en een doelgroep. Die drie lagen werken samen. Keywords filteren op wat iemand zoekt. Audience targeting filtert op wie diegene is, of beter gezegd, op wat Google over die persoon weet. Leeftijd, koopintentie, eerdere bezoeken aan jouw site, interesses op de lange termijn. Het is de demografische en gedragsmatige laag boven je zoekwoorden.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Waarom zou je die laag gebruiken als je keywords al specifiek zijn? Omdat dezelfde zoekterm door verschillende mensen wordt ingetypt. "Verzekering vergelijken" wordt gezocht door een twintiger die voor het eerst een auto koopt en door een vijftiger die zijn premie probeert te verlagen. Dezelfde klik, twee compleet verschillende klanten. Met audience targeting kun je bijbieden op het type dat voor jou meer waard is.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">De vijf doelgroep-categorieën die er toe doen</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Google biedt vijf hoofdtypen audiences. Affinity audiences groeperen mensen op lange-termijn interesses zoals "techniek-liefhebbers" of "fitness-fanaten". Handig voor merkbekendheid, minder voor directe conversie. In-market audiences daarentegen verzamelen mensen die op dit moment actief iets aan het kopen zijn. Die groep is goud waard voor B2C-campagnes waar koopintentie centraal staat.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Daaronder zitten je custom segments. Die bouw je zelf op basis van URL's die mensen bezoeken, apps die ze gebruiken of zoekwoorden die ze de afgelopen dagen op Google hebben gebruikt. Bouw bijvoorbeeld een segment van mensen die in de afgelopen zeven dagen je drie grootste concurrenten hebben bezocht. Die groep zit midden in zijn beslissing.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De vierde categorie is je eigen data. Remarketinglijsten voor websitebezoekers, Customer Match voor klanten die je via een mailadres aan Google koppelt, en lookalikes daarvan. Dit is veruit het sterkste type omdat het op echte interactie met jouw merk gebaseerd is. De vijfde laag, demografie, gebruik je vooral om uitsluitend te schalen of om laagrenderende leeftijdsgroepen op nul te zetten.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Observation versus targeting: het belangrijkste keuzeschermpje</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Bij elke audience die je aan een campagne toevoegt vraagt Google: observation of targeting? Dit is de instelling waar de meeste accounts geld op verliezen. Targeting-modus betekent dat je advertentie alleen aan die doelgroep wordt getoond. Observation-modus betekent dat je de doelgroep als datalaag toevoegt, het bereik niet beperkt en later kunt bijbieden op de segmenten die goed presteren.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Voor Search en Shopping is observation in vrijwel alle gevallen de juiste keuze. Je filtert daar al via keywords. Een extra targeting-filter erbovenop versmalt je bereik zo hard dat je vaak onder de leerdrempel zakt. Op Display en YouTube ligt het anders. Daar heb je geen keyword-filter, dus is de doelgroep zelf de selectiefunctie. Daar past targeting-modus, mits je segmenten breed genoeg zijn.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe je audiences combineert met je keywords</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Het echte werk begint na de eerste dertig dagen. Dan heb je data per audience-segment binnen je campagne. Je ziet welke groep bovengemiddeld converteert en welke onder de benchmark zakt. Op de bovengemiddelde groepen zet je een bid-modifier omhoog. Niet wild, maar gericht. Vijftien procent extra bod voor een segment dat structureel het dubbele conversiepercentage haalt. Op de zwakke segmenten kun je de modifier omlaag bijstellen.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Belangrijk: bij Smart Bidding-strategieën zoals Maximaliseer Conversies of Doel-ROAS doet het algoritme dit deels zelf. Het bid-modifier-systeem werkt alleen volledig handmatig op handmatige cpc. Hoe Smart Bidding hier mee omgaat lezen we in onze blog over <Link to="/blogs/google-ads/smart-bidding-uitgelegd-wanneer-wanneer" className="text-accent hover:underline">Smart Bidding-strategieën</Link>. De observation-data blijft hoe dan ook waardevol als input voor je creative- en budgetbeslissingen.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Remarketing: je sterkste lijst, mits goed opgebouwd</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een remarketing-publiek is een lijst van mensen die je site al hebben bezocht. Klinkt simpel, is in de praktijk een struikelblok. Drie regels. Splits je lijst op intentie: "winkelmandje verlaten", "productpagina bezocht", "blog gelezen". Die drie groepen krijgen verschillende boodschappen omdat ze in verschillende fasen van hun beslissing zitten. Lump ze samen en je verbrandt budget op blog-lezers die nooit van plan waren te kopen.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Tweede regel: kies je terugkijktermijn met opzet. Een productpagina-bezoeker van zes maanden terug is een hele andere klant dan eentje van twee weken geleden. Voor impulsproducten kort, voor B2B-aankopen langer. En check minimaal eens per kwartaal of je lijst nog actief is, want krimpende lijsten leveren steeds hogere CPC's op door beperkt bereik.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Derde regel: zorg dat je tagging klopt. Een remarketinglijst die op de verkeerde events afgaat verzamelt verkeerde profielen, en het is bijna onmogelijk om dat later weer recht te trekken. Hoe je dat soort tracking-foutjes voorkomt, lees je in onze gids over <Link to="/blogs/tracking/attribution-modellen-uitgelegd-last-click" className="text-accent hover:underline">attributiemodellen en tracking</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Customer Match: de underused powermove</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Customer Match laat je een lijst mailadressen of telefoonnummers uploaden waar Google jouw bestaande klanten herkent in zijn eigen ecosysteem. Daarmee kun je drie dingen doen. Schakel adverteren naar bestaande klanten uit op campagnes waar dat geen zin heeft. Maak een lookalike van je top tien procent klanten en richt nieuwe campagnes daarop. Of stuur een gerichte upsell aan iedereen die in de laatste negentig dagen kocht.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Privacy: Google hasht de adressen voor de match, je upload is daarmee voldoende AVG-proof mits je in je privacyverklaring vermeldt dat je marketinglijsten kunt opbouwen. Veel adverteerders gebruiken Customer Match niet uit angst voor compliance, maar daarmee laten ze hun beste publiek liggen. Klanten die al kochten zijn statistisch gezien je beste prospect voor nieuwe campagnes.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Audience signals in Performance Max</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Performance Max heeft geen klassieke doelgroep-instellingen. In plaats daarvan upload je Audience Signals, een soort suggestie aan het algoritme van wie je doelgroep waarschijnlijk is. Google volgt die signalen niet strikt: het algoritme breidt uit op basis van conversiedata. Maar goede signalen versnellen de leerfase aanzienlijk en geven gemiddeld een betere start in de eerste maand.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Geef per signaal-groep een mix van zoekthema's, eerstepartijdata, in-market segmenten en demografische hints. Hoe specifieker, hoe sneller PMax convergeert. Een te brede signaal-set helpt nergens: dan zegt het in feite dat iedereen je doelgroep is. Welke andere keuzes je in PMax maakt en hoe je rendement bewaakt, behandelen we in onze blog over <Link to="/blogs/google-ads/performance-max-google-ads-weten" className="text-accent hover:underline">Performance Max</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Drie fouten die je rendement verbranden</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De eerste fout: targeting-modus op Search aanzetten zonder data. Je versmalt je bereik in één klap fors, krijgt te weinig conversies om iets te leren, en concludeert verkeerd dat audiences "niet werken". Begin altijd in observation, verzamel zes weken data, en pas dan kijk je waar bijbieden zin heeft.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De tweede fout: te veel segmenten tegelijk toevoegen. Elke audience genereert eigen data. Met twintig segmenten op één campagne verdeel je je conversies zo dun dat geen enkel segment statistisch betekenisvol wordt. Begin met vier tot zes segmenten per campagne. Snoei dan terug op basis van wat oplevert.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De derde fout: vergeten te uitsluiten. Audience exclusion is even krachtig als audience inclusion. Sluit bestaande klanten uit bij acquisitiecampagnes. Sluit sollicitanten uit bij commerciële campagnes. Sluit kinderen onder de achttien uit als je product niet bij hen past. Het is vrijwel altijd makkelijker geld te verdienen door weg te halen wat niet bijdraagt dan door iets nieuws toe te voegen.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Praktische volgorde voor een nieuwe campagne</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Begin een nieuwe Search-campagne zonder doelgroepen, alleen op keywords. Wacht twee weken. Voeg dan vier observation-audiences toe die het meest relevant zijn voor jouw business: in-market voor je categorie, een custom segment van concurrent-bezoekers, je eigen websitebezoekers, en je Customer Match-lijst van bestaande klanten. Geen targeting-modus.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Na zes weken bekijk je de data per segment. Welk segment heeft een conversie-rate die boven het campagne-gemiddelde uitkomt? Daar zet je een positieve bid-modifier op. Welk segment ligt structureel onder de helft van het gemiddelde? Daar mag een negatieve modifier op, of helemaal uitsluiten. Dit hertest je elk kwartaal. Audience targeting is geen instelling die je één keer doet, het is een ritme.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Wie zijn hele Google Ads-structuur op orde wil hebben voordat hij met audiences gaat finetunen, kan beginnen met onze blog over <Link to="/blogs/google-ads/google-ads-campagne-structuur" className="text-accent hover:underline">de juiste campagnestructuur</Link>. Audiences komen pas tot hun recht als de basis klopt.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Veelgestelde vragen</h2>
                    </div>

                    <section className="mt-4">
                        <div className="space-y-6 not-prose">
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat is audience targeting in Google Ads?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Audience targeting is de manier waarop je in Google Ads bepaalt wie binnen je gekozen kanaal je advertentie te zien krijgt. Niet alleen op basis van zoekwoorden of websites, maar ook op wie de gebruiker is: zijn interesses, koopintentie, demografische profiel of eerdere bezoeken aan jouw site. Het is een extra laag boven je keyword- of placement-strategie.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Welke soorten doelgroepen kun je in Google Ads gebruiken?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Google Ads biedt vijf hoofdcategorieën: affinity audiences voor lange-termijn interesses, in-market audiences voor mensen die actief iets aan het kopen zijn, custom segments die je zelf bouwt op basis van zoekgedrag of bezochte sites, je eigen data via remarketing en Customer Match, en demografische segmenten op leeftijd, geslacht of inkomen. Combinaties tussen deze lagen werken vaak het sterkst.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat is het verschil tussen observation en targeting?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    In observation-modus voegt Google de doelgroep toe als datalaag zonder je bereik te beperken: je ziet hoe een segment presteert en kunt later bijbieden. In targeting-modus beperk je je bereik tot die doelgroep. Voor Search-campagnes is observation vrijwel altijd de juiste keuze omdat je daar al via keywords filtert. Targeting-modus past beter bij Display en YouTube waar je doelgroep de selectiefunctie heeft.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Werkt audience targeting nog bij Performance Max?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Bij Performance Max kun je doelgroepen alleen als signaal aanleveren via Audience Signals. Google verplicht je niet om binnen die signalen te blijven, het algoritme gebruikt ze als startpunt. Goede signalen versnellen de leerfase aanzienlijk en geven betere resultaten in de eerste weken. Slechte of te brede signalen helpen het algoritme niet en kosten je leertijd.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoeveel bezoekers heb ik nodig voor een remarketing-lijst?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Google hanteert sinds eind 2025 één drempel voor alle netwerken: minimaal 100 actieve bezoekers of gebruikers in de afgelopen 30 dagen. Onder dat aantal kan Google de lijst niet inzetten omdat het privacy-impact te groot zou zijn. Heb je weinig verkeer, kijk dan naar Customer Match, langere lookback-periodes of bredere paginadefinities om je lijst boven de drempel te krijgen.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Welke fout maken adverteerders het vaakst met audience targeting?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Te vroeg targeting-modus aanzetten op Search-campagnes. Dat versmalt je bereik enorm omdat je tegelijk filtert op keyword en op doelgroep. Resultaat: weinig impressies, te weinig data voor het algoritme om te leren, en de illusie dat je targeting werkt omdat de CPA laag is. Beter: observation-modus, eerst data verzamelen, daarna bijbieden op segmenten die bewezen renderen.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="mt-16 pt-12 border-t border-primary/10">
                        <h3 className="text-xl font-bold text-primary mb-6">Lees ook</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <Link to="/blogs/google-ads/smart-bidding-uitgelegd-wanneer-wanneer" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Smart Bidding uitgelegd</h3>
                                <p className="text-primary/60 text-sm">Welke biedstrategie past bij welke campagne in Google Ads?</p>
                            </Link>
                            <Link to="/blogs/google-ads/performance-max-google-ads-weten" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Performance Max uitgelegd</h3>
                                <p className="text-primary/60 text-sm">Hoe PMax werkt en hoe Audience Signals erbinnen passen.</p>
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
                    <h2 className="relative z-10 font-drama italic text-background text-3xl sm:text-4xl md:text-5xl mb-6">Doelgroepen scherp ingericht?</h2>
                    <p className="relative z-10 font-sans text-background/70 text-lg mb-10 max-w-xl mx-auto">We bekijken je Google Ads-account en zetten de doelgroepenstructuur op die jouw rendement omhoog brengt. Geen onnodige segmenten, wel meetbare winst.</p>
                    <Link to="/contact" className="relative z-10 btn-magnetic inline-flex items-center justify-center bg-accent text-background font-sans font-bold text-lg px-10 py-4 rounded-[2rem] hover:bg-accent/90 transition-colors">Neem contact op</Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
