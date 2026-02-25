import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ChevronRight, User } from 'lucide-react';

export default function BlogPostMetaAds() {
    useEffect(() => {
        document.title = "Waarom jouw Meta Ads niet converteren (en hoe je dat oplost) | Empowers";
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute("content", "Meta Ads die wel klikken maar geen klanten opleveren? Dit zijn de 6 meest voorkomende oorzaken en hoe je ze stap voor stap oplost.");
        }
        window.scrollTo(0, 0); // scroll to top on mount
    }, []);

    return (
        <main className="min-h-screen selection:bg-accent/30 selection:text-dark flex flex-col bg-background">
            <Navbar />

            <article className="w-full pt-40 pb-24 px-6 relative">
                <div className="max-w-4xl mx-auto">
                    {/* Breadcrumbs */}
                    <nav className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-primary/50 mb-12">
                        <Link to="/" className="hover:text-accent transition-colors">Home</Link>
                        <ChevronRight className="w-3 h-3" />
                        <Link to="/nieuws" className="hover:text-accent transition-colors">Nieuws</Link>
                        <ChevronRight className="w-3 h-3" />
                        <span className="text-primary truncate">Waarom jouw Meta Ads...</span>
                    </nav>

                    {/* Header */}
                    <header className="mb-16">
                        <div className="inline-block px-3 py-1 bg-accent/10 text-accent font-mono text-xs uppercase tracking-widest rounded-full mb-6">
                            Meta Ads
                        </div>
                        <h1 className="font-drama italic text-primary text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tight mb-8">
                            Waarom jouw Meta Ads niet converteren (en hoe je dat oplost)
                        </h1>

                        <div className="flex flex-wrap items-center gap-6 text-sm font-sans text-primary/60 border-y border-primary/10 py-6">
                            <div className="flex items-center gap-2">
                                <User className="w-4 h-4" />
                                <span>[Naam]</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>15 februari 2026</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>6 minuten leestijd</span>
                            </div>
                        </div>
                    </header>

                    {/* Featured Image placeholder (Textured/branded) */}
                    <figure className="w-full h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden mb-16 relative bg-primary">
                        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </figure>

                    {/* Content */}
                    <div className="prose prose-lg prose-headings:font-sans prose-headings:font-bold prose-headings:text-primary prose-p:font-sans prose-p:text-primary/80 prose-p:leading-relaxed max-w-none">
                        <p className="text-xl md:text-2xl font-medium leading-relaxed mb-10 text-primary">
                            Je Meta Ads draaien, de klikken komen binnen, maar de verkopen blijven uit. Dit is een van de meest voorkomende situaties in online advertising. Het probleem zit bijna nooit in het platform zelf. Meta werkt goed als je de juiste instellingen hebt. De oorzaak zit ergens anders, en we leggen je precies uit waar.
                        </p>

                        <h2 className="text-3xl mt-16 mb-6">Hoe weet je of je Meta Ads echt een probleem hebben?</h2>
                        <p>
                            Eerst een check. Klikken zijn geen conversies. Een klik kost je geld, maar is niets waard als diegene vervolgens wegklikt op je pagina. Een goede conversieratio voor een webshop ligt tussen de 1,5% en 3,5%. Voor dienstverlening of leadgeneratie is alles boven de 2% sterk.
                        </p>
                        <p>
                            Zit je ver onder die cijfers terwijl de advertenties wel goed worden weergegeven? Dan is er iets in de keten dat niet klopt. Hieronder gaan we die keten langs.
                        </p>

                        <h2 className="text-3xl mt-16 mb-6">Klopt je doelgroep wel?</h2>
                        <p>
                            Dit is de meest gemaakte fout. Een te brede doelgroep zorgt ervoor dat je advertenties worden getoond aan mensen die nooit gaan kopen. Een te smalle doelgroep laat Meta het algoritme niet zijn werk doen.
                        </p>
                        <p>
                            In 2025 geldt: geef Meta ruimte. Broad targeting, waarbij je alleen leeftijd, land en soms een interessecategorie instelt, werkt steeds beter naarmate de pixel meer data heeft. Meta's algoritme is goed geworden in het vinden van kopers, maar alleen als je het laat leren. Stop met stapelen van 15 interesses. Kies er maximaal 3 en laat het systeem de rest doen.
                        </p>
                        <p>
                            We zien bij onze klanten dat campagnes die breed starten en dan bijgesteld worden op basis van data, structureel beter presteren dan campagnes die vanaf dag één overgesegmenteerd zijn.
                        </p>

                        <h2 className="text-3xl mt-16 mb-6">Wat gebeurt er na de klik?</h2>
                        <p>
                            Je advertentie is de voordeur. Je landingspagina is het huis. Als de voordeur mooi is maar het huis een chaos, loopt iedereen weer weg. Dit is verantwoordelijk voor een groot deel van de tegenvallende resultaten die we zien.
                        </p>
                        <p>
                            Een sterke landingspagina heeft een duidelijke headline die aansluit op de advertentie, één centrale actie die je van de bezoeker wilt en geen afleiding in de vorm van onnodige navigatie of te veel keuzes. Laadtijd telt ook mee. Als je pagina langer dan 3 seconden doet over laden, verlies je meer dan 40% van je bezoekers al voor ze ook maar één zin lezen.
                        </p>
                        <p>
                            Controleer altijd: zegt de landingspagina hetzelfde als de advertentie? Als je advertentie "10% korting op je eerste bestelling" belooft, moet die korting direct zichtbaar zijn op de pagina. Inconsistentie kost je conversies.
                        </p>

                        <h2 className="text-3xl mt-16 mb-6">Is je Meta Pixel correct ingesteld?</h2>
                        <p>
                            Dit klinkt technisch, maar het is simpel na te gaan. Zonder een goed werkende Pixel ziet Meta niet welke bezoekers daadwerkelijk iets kopen of een formulier invullen. Het algoritme kan dan niet leren wie je beste klanten zijn, waardoor advertenties steeds aan de verkeerde mensen getoond worden.
                        </p>
                        <p>
                            Open Meta Events Manager en controleer of de Purchase of Lead event actief binnenkomt. Zie je geen events, of zie je dubbele events? Dan klopt er iets niet in de configuratie. Zet bij voorkeur ook Meta Conversions API in, zodat je minder afhankelijk bent van browsercookies die door adblockers en Safari geblokkeerd worden.
                        </p>

                        <h2 className="text-3xl mt-16 mb-6">Heb je last van advertentiemoeheid?</h2>
                        <p>
                            Advertentiemoeheid treedt op als dezelfde mensen je advertentie te vaak zien. De frequentie, het gemiddeld aantal keer dat iemand je advertentie ziet, zegt hier veel over. Zit je boven de 3 in een campagne van minder dan twee weken? Dan is het tijd voor nieuwe creatieven.
                        </p>
                        <p>
                            Wissel je afbeeldingen, video's en teksten regelmatig af. Niet elke week, maar zeker elke 3 tot 4 weken. Kijk ook naar je hook: de eerste 3 seconden van een video of de eerste zin van je advertentietekst bepalen of iemand blijft hangen of verder scrolt.
                        </p>

                        <h2 className="text-3xl mt-16 mb-6">Klopt je aanbod?</h2>
                        <p>
                            Soms is de campagne technisch perfect en zit het probleem simpelweg in het aanbod. Is er een reden waarom iemand nu actie moet ondernemen? Een tijdelijk aanbod, een bonus, een garantie of een gratis proefperiode verlaagt de drempel enorm.
                        </p>
                        <p>
                            We zien het vaak bij B2B-diensten: de advertentie vraagt mensen om direct een aankoop of een langlopend contract aan te gaan. Dat is een te grote stap voor iemand die je nog niet kent. Bied eerst iets van waarde aan, een gratis adviesgesprek, een download of een audit. Bouw vertrouwen op voor je om de deal vraagt.
                        </p>

                        <h2 className="text-3xl mt-16 mb-6">Wil je weten waar in jouw specifieke funnel het misgaat?</h2>
                        <p>
                            Bekijk onze <Link to="/diensten" className="text-accent hover:underline">diensten-pagina</Link> voor een overzicht van hoe wij campagnes doorlichten en bijsturen. Of plan direct een <Link to="/contact" className="text-accent hover:underline">gratis gesprek</Link> voor concreet advies op maat.
                        </p>

                        <hr className="my-16 border-primary/10" />

                        <h2 className="text-3xl mb-8">Veelgestelde vragen over Meta Ads conversies</h2>

                        <div className="space-y-8">
                            <div>
                                <h3 className="text-xl font-bold mb-2">Waarom krijg ik wel klikken maar geen aankopen?</h3>
                                <p className="text-base text-primary/70 mt-0">
                                    Dit komt het vaakst door een mismatch tussen de advertentie en de landingspagina, een te brede doelgroep of een landingspagina die te langzaam laadt. Controleer deze drie dingen als eerste.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2">Wat is een normale conversieratio voor Meta Ads?</h3>
                                <p className="text-base text-primary/70 mt-0">
                                    Voor een webshop is 1,5% tot 3,5% een gezonde norm. Voor leadgeneratie is alles boven de 2% sterk. Zit je structureel onder de 1%? Dan is er iets in de keten dat bijstelling nodig heeft.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2">Hoeveel budget heb ik nodig om Meta Ads te laten werken?</h3>
                                <p className="text-base text-primary/70 mt-0">
                                    Meta heeft data nodig om te leren. Reken op minimaal 300 tot 500 euro per maand per campagne om het algoritme voldoende ruimte te geven. Met minder budget duurt het leerproces veel langer of lukt het niet goed.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2">Hoe vaak moet ik mijn advertenties vervangen?</h3>
                                <p className="text-base text-primary/70 mt-0">
                                    Controleer de frequentie. Zit die boven de 3 binnen twee weken? Wissel dan je creatieven af. Voor de meeste campagnes geldt: elke 3 tot 4 weken nieuwe beelden en teksten testen.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2">Moet ik retargeting gebruiken?</h3>
                                <p className="text-base text-primary/70 mt-0">
                                    Ja. Retargeting, het opnieuw bereiken van mensen die al op je website waren, levert gemiddeld twee tot drie keer hogere conversiepercentages op dan cold audiences. Het is een van de makkelijkste manieren om meer te halen uit je bestaande verkeer.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2">Werkt broad targeting echt beter dan gedetailleerde targeting?</h3>
                                <p className="text-base text-primary/70 mt-0">
                                    Vaak wel, maar het hangt af van hoe lang je pixel al actief is. Heeft je pixel minder dan 50 conversies in de afgelopen 30 dagen? Begin dan iets smaller. Heb je meer data? Geef Meta de ruimte en kijk wat het algoritme doet.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2">Wat is Meta Conversions API en heb ik het nodig?</h3>
                                <p className="text-base text-primary/70 mt-0">
                                    Meta Conversions API is een server-to-server verbinding die conversiedata doorstuurt, onafhankelijk van browsercookies. Na de iOS 14-update is dit sterk aan te raden voor iedereen die nauwkeurige data wil. Zonder CAPI mis je waarschijnlijk 30 tot 50% van je conversies.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </article>

            {/* Bottom CTA to catch readers at the end */}
            <section className="w-full pb-32 px-6">
                <div className="max-w-4xl mx-auto bg-primary rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
                    <h2 className="relative z-10 font-drama italic text-background text-3xl sm:text-4xl md:text-5xl mb-6">Meta Ads direct verbeteren?</h2>
                    <p className="relative z-10 font-sans text-background/70 text-lg mb-10 max-w-xl mx-auto">
                        Plan een gratis gesprek met onze experts. We bespreken jouw huidige account en de kansen voor jouw specifieke situatie in tools als Meta Business Manager.
                    </p>
                    <Link to="/contact" className="relative z-10 btn-magnetic inline-flex items-center justify-center bg-accent text-background font-sans font-bold text-lg px-10 py-4 rounded-[2rem] hover:bg-accent/90 transition-colors">
                        Plan een strategisch overleg
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
