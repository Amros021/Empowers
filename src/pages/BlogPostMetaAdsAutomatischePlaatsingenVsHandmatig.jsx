import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ChevronRight, User } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function BlogPostMetaAdsAutomatischePlaatsingenVsHandmatig() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen selection:bg-accent/30 selection:text-dark flex flex-col bg-background">
            <Helmet>
                <title>Meta Ads automatische plaatsingen vs handmatig: wat werkt beter? | Empowers</title>
                <meta name="description" content="Advantage+ plaatsingen of handmatig kiezen in Meta Ads? Lees wanneer automatisch winst oplevert, wanneer handmatig juist meer rendement geeft en wat we in de praktijk zien." />
                <link rel="canonical" href="https://www.empowers.nl/blogs/social-ads/meta-ads-automatische-plaatsingen-vs-handmatig" />
                <meta property="og:title" content="Meta Ads automatische plaatsingen vs handmatig: wat werkt beter? | Empowers" />
                <meta property="og:description" content="Advantage+ plaatsingen of handmatig kiezen in Meta Ads? Lees wanneer automatisch winst oplevert en wanneer handmatig juist meer rendement geeft." />
                <meta property="og:url" content="https://www.empowers.nl/blogs/social-ads/meta-ads-automatische-plaatsingen-vs-handmatig" />
                <meta property="og:type" content="article" />
                <meta property="og:image" content="https://www.empowers.nl/images/blogs/meta-ads-automatische-plaatsingen-vs-handmatig.jpg" />
                <script type="application/ld+json">{JSON.stringify({
                    "@context": "https://schema.org",
                    "@graph": [
                        {
                            "@type": "Article",
                            "headline": "Meta Ads automatische plaatsingen vs handmatig instellen: wat werkt beter?",
                            "image": "https://www.empowers.nl/images/blogs/meta-ads-automatische-plaatsingen-vs-handmatig.jpg",
                            "description": "Advantage+ plaatsingen of handmatig kiezen in Meta Ads? Lees wanneer automatisch winst oplevert en wanneer handmatig juist meer rendement geeft.",
                            "author": { "@type": "Organization", "name": "Empowers", "url": "https://www.empowers.nl" },
                            "publisher": { "@type": "Organization", "name": "Empowers", "url": "https://www.empowers.nl" },
                            "datePublished": "2026-05-05T12:00:00+02:00",
                            "dateModified": "2026-05-05T12:00:00+02:00",
                            "url": "https://www.empowers.nl/blogs/social-ads/meta-ads-automatische-plaatsingen-vs-handmatig"
                        },
                        {
                            "@type": "FAQPage",
                            "mainEntity": [
                                { "@type": "Question", "name": "Wat is het verschil tussen automatische en handmatige plaatsingen?", "acceptedAnswer": { "@type": "Answer", "text": "Bij automatische plaatsingen (Advantage+ Placements) verdeelt Meta jouw budget over alle beschikbare plaatsingen op Facebook, Instagram, Messenger en Audience Network. Bij handmatige plaatsingen kies je zelf welke plaatsingen je wel of niet meedoet. Automatisch geeft het algoritme volledige vrijheid, handmatig houd je de regie." } },
                                { "@type": "Question", "name": "Wat raadt Meta zelf aan?", "acceptedAnswer": { "@type": "Answer", "text": "Meta raadt voor de meeste campagnes Advantage+ Placements aan. Het argument: lagere CPA gemiddeld, omdat het systeem dynamisch budget verschuift naar de plaatsingen waar conversies binnenkomen. Voor accounts met genoeg conversiedata klopt dat advies vaak. Voor kleine accounts of niche-doelgroepen werkt handmatig beter." } },
                                { "@type": "Question", "name": "Wanneer zijn automatische plaatsingen het slimst?", "acceptedAnswer": { "@type": "Answer", "text": "Bij accounts met meer dan 50 conversies per week, brede doelgroepen en visueel sterke creatives die op meerdere plaatsingen werken. Het algoritme heeft genoeg signalen om plaatsings-allocatie goed te leren. Webshops met dagelijkse aankopen en MKB-merken die meerdere weken stabiel draaien, halen er vaak het meeste uit." } },
                                { "@type": "Question", "name": "Wanneer kies je beter voor handmatige plaatsingen?", "acceptedAnswer": { "@type": "Answer", "text": "Bij niche-targeting, lage budgetten (onder 30 euro per dag), B2B-doelgroepen of als je creatives niet in elke plaatsing werken. Een advertentie met veel tekst werkt slecht op Stories of Reels, en moet je daar uitsluiten. Ook bij merken met sterke voorkeur voor Instagram boven Audience Network (vanwege placement-kwaliteit) heeft handmatig zin." } },
                                { "@type": "Question", "name": "Mag ik mixen: sommige plaatsingen aan, andere uit?", "acceptedAnswer": { "@type": "Answer", "text": "Ja, en dat is vaak de slimste route. Begin met handmatige plaatsingen, schakel bewust de placements uit waarvan je weet dat ze niet bij je merk passen (zoals Audience Network bij premium-merken) en laat de rest aan. Zo krijg je de algoritmische voordelen van Advantage+ binnen de plaatsingen die voor jou kloppen." } },
                                { "@type": "Question", "name": "Hoe weet ik welke plaatsingen het best presteren?", "acceptedAnswer": { "@type": "Answer", "text": "In Ads Manager kun je de breakdown 'Placement' aanzetten in elk rapport. Je ziet dan per plaatsing CPA en ROAS, samen met CTR en het aantal conversies. Draai een ad set minimaal twee weken voordat je conclusies trekt, en kijk naar plaatsingen met genoeg volume. Plaatsingen met minder dan twintig conversies geven vaak ruis in plaats van inzicht." } }
                            ]
                        }
                    ]
                })}</script>
                <script type="application/ld+json">{JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "BreadcrumbList",
                    "itemListElement": [
                        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.empowers.nl" },
                        { "@type": "ListItem", "position": 2, "name": "Nieuws", "item": "https://www.empowers.nl/nieuws" },
                        { "@type": "ListItem", "position": 3, "name": "Social Ads", "item": "https://www.empowers.nl/blogs/social-ads" },
                        { "@type": "ListItem", "position": 4, "name": "Automatische vs handmatige plaatsingen", "item": "https://www.empowers.nl/blogs/social-ads/meta-ads-automatische-plaatsingen-vs-handmatig" }
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
                        <Link to="/blogs/social-ads" className="hover:text-accent transition-colors">Social Ads</Link>
                        <ChevronRight className="w-3 h-3" />
                        <span className="text-primary truncate">Automatische vs handmatige plaatsingen</span>
                    </nav>

                    <header className="mb-16">
                        <div className="inline-block px-3 py-1 bg-accent/10 text-accent font-mono text-xs uppercase tracking-widest rounded-full mb-6">
                            Social Ads
                        </div>
                        <h1 className="font-sans font-bold text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight mb-8">
                            Meta Ads automatische plaatsingen vs handmatig instellen: wat werkt beter?
                        </h1>
                        <div className="flex flex-wrap items-center gap-6 text-sm font-sans text-primary/60 border-y border-primary/10 py-6">
                            <div className="flex items-center gap-2">
                                <User className="w-4 h-4" />
                                <span>Empowers Redactie</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>5 mei 2026</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>8 minuten leestijd</span>
                            </div>
                        </div>
                    </header>

                    <figure className="w-full h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden mb-16 relative bg-primary">
                        <div className="absolute inset-0 bg-[url('/images/blogs/meta-ads-automatische-plaatsingen-vs-handmatig.jpg')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </figure>

                    <div className="prose prose-lg prose-headings:font-sans prose-headings:font-bold prose-headings:text-primary prose-p:font-sans prose-p:text-primary/80 prose-p:leading-relaxed max-w-none">
                        <p className="text-xl md:text-2xl font-medium leading-relaxed mb-10 text-primary">
                            Meta duwt iedereen richting Advantage+. De interface staat standaard op automatische plaatsingen, de tooltip belooft betere resultaten en de eerste klik is altijd de algoritme-route. Toch zijn er accounts waar handmatig kiezen tienduizenden euro's per jaar scheelt. Het verschil zit niet in welke knop "beter" is, maar in welk type adverteerder jij bent en welk type creatives je draait. Hier zit de echte beslissing.
                        </p>

                        <p className="text-primary/80 leading-relaxed mb-6">
                            Wie blind voor automatische plaatsingen kiest, geeft het algoritme alle ruimte. Dat klinkt slim. Maar Meta's algoritme heeft ook een belang: zoveel mogelijk inventaris vullen op alle eigen platforms. Soms valt jouw merk daarmee samen. Soms helemaal niet.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat zijn automatische en handmatige plaatsingen?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Bij automatische plaatsingen, in de Meta-interface tegenwoordig Advantage+ Placements, kiest Meta zelf waar jouw advertenties verschijnen. Dat kan op Facebook feed, Instagram feed, Stories, Reels, Marketplace, Messenger, in-stream video en het Audience Network (websites en apps van derden). Het algoritme verdeelt budget dynamisch over die plaatsingen op basis van waar conversies of klikken het goedkoopst binnenkomen.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Bij handmatige plaatsingen vink je zelf aan welke plaatsingen meedoen en welke niet. Wil je alleen Instagram feed en Reels? Kan. Wil je Audience Network uitsluiten omdat je geen advertenties op random apps wilt vertonen? Kan ook. Je hebt regie, maar verliest een deel van de algoritme-flexibiliteit.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Het belangrijkste verschil: bij automatisch betaal je gemiddeld een lagere CPA, maar je weet niet altijd waarom. Bij handmatig zie je per plaatsing wat werkt en wat niet, en kun je sturen op brand-passende kanalen.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wanneer winnen automatische plaatsingen?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Voor accounts die boven de 50 conversies per week zitten en met brede targeting werken, levert Advantage+ vaak meetbaar betere resultaten. Het algoritme heeft genoeg datapunten om patronen te vinden die jij handmatig nooit zou zien. Misschien kopen mensen op Tuesday avond vooral via Reels, en op zondagochtend via Facebook feed. Het algoritme schuift daar automatisch in mee.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Webshops met visueel sterke producten zijn het klassieke succesverhaal. Vrijwel elke plaatsing past bij ze: vierkant op feed, verticaal op Reels, langzaam scrollen op Marketplace. Daar levert automatisch zelden iets in op kwaliteit en wel veel op efficiency.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Ook bij grotere campagnes met dagbudgetten boven de 100 euro per ad set heeft automatisch een statistische voorsprong. Het algoritme heeft simpelweg meer ruimte om te leren, te schuiven en te optimaliseren binnen een dag. Met een handmatige instelling op een groot budget laat je rendement liggen.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wanneer levert handmatig juist meer op?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Drie scenario's komen vaak voorbij waar handmatig de slimmere keuze blijkt. Het eerste: kleine accounts met dagbudgetten onder de 30 euro per ad set. Daar krijgt het algoritme te weinig signalen om plaatsings-allocatie goed te doen. Het smeert budget over alle plaatsingen uit, en niets krijgt genoeg volume om te leren.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Het tweede scenario: B2B en niche-doelgroepen. Veel plaatsingen, vooral Audience Network, leveren voor B2B nauwelijks gekwalificeerde clicks op. Mensen die op een random app of nieuwswebsite een advertentie zien voor een SaaS-tool of accountantskantoor, klikken zelden door met intentie. Sluit Audience Network uit, sluit Marketplace uit en houd het bij Facebook en Instagram zelf.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Het derde scenario: creative-mismatch. Een vierkante video met veel tekst werkt op feed, maar verschijnt schreeuwlelijk op Reels. Een verticale UGC-video voor Reels valt in een vierkant feed-container weg. Wie niet voor elke plaatsing een geschikte versie heeft, kan beter handmatig kiezen waar de bestaande creatives passen. Anders verbrand je budget op plaatsingen waar je advertenties technisch wel mogen, maar visueel falen.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat is een hybride aanpak?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Veel slimme adverteerders combineren beide. Ze starten met handmatige plaatsingen waar ze bewuste keuzes maken, en zetten daarbinnen Advantage+ aan op de geselecteerde plaatsingen. In de praktijk: alleen Facebook feed, Instagram feed, Stories en Reels aan, Audience Network en Messenger uit. Binnen die set laat het algoritme verschuiven waar het wil.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Deze aanpak combineert het beste van twee werelden. Je sluit plaatsingen uit die niet bij je merk passen of waar je creatives niet werken. En je geeft het algoritme binnen die selectie de vrijheid om te optimaliseren. Voor de meeste MKB-accounts is dit de route die we eerst aanraden.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Belangrijk detail: na een paar weken kun je op basis van breakdown-data nog verder afslanken. Zie je dat Stories voor jouw account amper conversies oplevert? Sluit ook Stories uit en kanaliseer budget naar de plaatsingen waar het wel werkt. Dit is een doorlopend proces, geen eenmalige instelling.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Welke fouten zien we het vaakst?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De grootste valkuil is na zeven dagen al concluderen dat een plaatsing slecht werkt. Het algoritme heeft tijd nodig om patronen op te bouwen. Gun automatische plaatsingen tenminste twee weken voordat je oordeelt. Bij handmatige instellingen geldt hetzelfde voor het beoordelen van individuele plaatsings-prestaties.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een tweede misser: alle creatives in één plaatsings-set proppen. Een verticale UGC-video voor Reels en een vierkante product-video voor feed in dezelfde ad set, met automatische plaatsingen aan. Het algoritme weet niet welke creative bij welke plaatsing hoort, en je krijgt halve performance op alles. Maak aparte ad sets per creative-format als je serieus wilt sturen.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Tot slot: vergeten Audience Network uit te zetten voor merken waar dat niet past. Voor premium-merken, B2B-bedrijven en accounts met sterk visueel verhaal levert Audience Network bijna nooit waarde op. Toch staat het standaard aan en blijft het maandenlang draaien zonder dat iemand kijkt. Dat is geen optimalisatie, dat is geld weggeven.
                        </p>

                        <div className="bg-accent/5 rounded-3xl p-8 md:p-12 my-12 border border-accent/10">
                            <h3 className="text-2xl font-bold text-primary mb-4 mt-0">Welke plaatsings-strategie past bij jouw account?</h3>
                            <p className="mb-6">
                                Wil je weten of je beter af bent met automatisch, handmatig of een hybride aanpak voor jouw specifieke account? We bekijken je creative-mix, je breakdown-data en je doelgroepen, en geven concreet advies. Plan een gesprek via onze <Link to="/contact" className="text-accent hover:underline">contactpagina</Link>. Of bekijk onze <Link to="/diensten" className="text-accent hover:underline">diensten</Link> voor een overzicht van wat we voor MKB en webshops doen rond Meta Ads.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Link to="/contact" className="btn-magnetic bg-accent text-white px-6 py-3 rounded-full font-bold text-sm hover:bg-accent/90 transition-colors inline-block no-underline">
                                    Plan een Meta Ads-audit
                                </Link>
                                <Link to="/diensten" className="px-6 py-3 rounded-full font-bold text-sm text-primary hover:bg-black/5 transition-colors border border-primary/20 inline-block no-underline">
                                    Bekijk onze diensten
                                </Link>
                            </div>
                        </div>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe test je beide opties tegen elkaar?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een eenvoudige A/B opzet werkt prima. Twee identieke campagnes, dezelfde doelgroep, dezelfde creatives en hetzelfde budget. Bij de ene zet je automatische plaatsingen aan, bij de andere kies je handmatig. Laat ze veertien dagen draaien en vergelijk CPA en ROAS, plus het volume aan conversies. Wat de winnaar is, hangt af van het account.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Belangrijk: doe deze test pas wanneer je creatives stabiel zijn en je doelgroep gevalideerd is. Anders meet je niet de plaatsings-strategie maar de creative-of doelgroep-prestaties. En vergeet niet dat het algoritme een leerperiode heeft. Cijfers van de eerste paar dagen zijn niet representatief voor het patroon van de hele test.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Lees ook onze blog over <Link to="/blogs/social-ads/effectieve-meta-ads-funnel" className="text-accent hover:underline">een effectieve Meta Ads funnel opbouwen</Link>, of duik in <Link to="/blogs/social-ads/ugc-meta-ads" className="text-accent hover:underline">UGC inzetten in Meta Ads</Link>. Voor de creative-kant helpt ook <Link to="/blogs/social-ads/meta-ads-reels-advertenties-effectief" className="text-accent hover:underline">Reels advertenties effectief inzetten</Link>.
                        </p>

                        <hr className="my-16 border-primary/10" />

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Veelgestelde vragen over automatische vs handmatige plaatsingen</h2>

                        <div className="space-y-6 not-prose">
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat is het verschil tussen automatische en handmatige plaatsingen?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Bij automatische plaatsingen (Advantage+ Placements) verdeelt Meta jouw budget over alle beschikbare plaatsingen op Facebook, Instagram, Messenger en Audience Network. Bij handmatige plaatsingen kies je zelf welke plaatsingen je wel of niet meedoet. Automatisch geeft het algoritme volledige vrijheid, handmatig houd je de regie.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat raadt Meta zelf aan?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Meta raadt voor de meeste campagnes Advantage+ Placements aan. Het argument: lagere CPA gemiddeld, omdat het systeem dynamisch budget verschuift naar de plaatsingen waar conversies binnenkomen. Voor accounts met genoeg conversiedata klopt dat advies vaak. Voor kleine accounts of niche-doelgroepen werkt handmatig beter.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wanneer zijn automatische plaatsingen het slimst?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Bij accounts met meer dan 50 conversies per week, brede doelgroepen en visueel sterke creatives die op meerdere plaatsingen werken. Het algoritme heeft genoeg signalen om plaatsings-allocatie goed te leren. Webshops met dagelijkse aankopen en MKB-merken die meerdere weken stabiel draaien, halen er vaak het meeste uit.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wanneer kies je beter voor handmatige plaatsingen?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Bij niche-targeting, lage budgetten (onder 30 euro per dag), B2B-doelgroepen of als je creatives niet in elke plaatsing werken. Een advertentie met veel tekst werkt slecht op Stories of Reels, en moet je daar uitsluiten. Ook bij merken met sterke voorkeur voor Instagram boven Audience Network heeft handmatig zin.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Mag ik mixen: sommige plaatsingen aan, andere uit?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Ja, en dat is vaak de slimste route. Begin met handmatige plaatsingen, schakel bewust de placements uit waarvan je weet dat ze niet bij je merk passen (zoals Audience Network bij premium-merken) en laat de rest aan. Zo krijg je de algoritmische voordelen van Advantage+ binnen de plaatsingen die voor jou kloppen.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoe weet ik welke plaatsingen het best presteren?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">In Ads Manager kun je de breakdown 'Placement' aanzetten in elk rapport. Je ziet dan per plaatsing CPA en ROAS, samen met CTR en het aantal conversies. Draai een ad set minimaal twee weken voordat je conclusies trekt, en kijk naar plaatsingen met genoeg volume. Plaatsingen met minder dan twintig conversies geven vaak ruis in plaats van inzicht.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </article>

            <section className="w-full pb-32 px-6">
                <div className="max-w-4xl mx-auto bg-primary rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
                    <h2 className="relative z-10 font-drama italic text-background text-3xl sm:text-4xl md:text-5xl mb-6">Slimmer plaatsen, betere resultaten</h2>
                    <p className="relative z-10 font-sans text-background/70 text-lg mb-10 max-w-xl mx-auto">
                        Plan een gratis Meta Ads-audit. We bekijken jouw plaatsings-data, doelgroepen en creative-mix, en bouwen een advies dat past bij jouw budget en merk.
                    </p>
                    <Link to="/contact" className="relative z-10 btn-magnetic inline-flex items-center justify-center bg-accent text-background font-sans font-bold text-lg px-10 py-4 rounded-[2rem] hover:bg-accent/90 transition-colors">
                        Plan een Meta Ads-audit
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
