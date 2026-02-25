import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ChevronRight, User } from 'lucide-react';

export default function BlogPostTikTokAds() {
    useEffect(() => {
        document.title = "TikTok Ads voor bedrijven: is het iets voor jou? | Empowers";
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute("content", "TikTok is niet alleen voor tieners. Ontdek of TikTok Ads passen bij jouw bedrijf, wat het kost en hoe je een eerste campagne opzet.");
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
                        <span className="text-primary truncate">TikTok Ads voor bedrijven...</span>
                    </nav>

                    {/* Header */}
                    <header className="mb-16">
                        <div className="inline-block px-3 py-1 bg-accent/10 text-accent font-mono text-xs uppercase tracking-widest rounded-full mb-6">
                            TikTok Ads
                        </div>
                        <h1 className="font-drama italic text-primary text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tight mb-8">
                            TikTok Ads voor bedrijven: is het iets voor jou?
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

                    {/* Featured Image placeholder */}
                    <figure className="w-full h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden mb-16 relative bg-primary">
                        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1974&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </figure>

                    {/* Content */}
                    <div className="prose prose-lg prose-headings:font-sans prose-headings:font-bold prose-headings:text-primary prose-p:font-sans prose-p:text-primary/80 prose-p:leading-relaxed max-w-none">
                        <p className="text-xl md:text-2xl font-medium leading-relaxed mb-10 text-primary">
                            TikTok heeft wereldwijd meer dan 1,5 miljard actieve gebruikers per maand. In Nederland gebruiken circa 5 miljoen mensen het platform regelmatig, en dat zijn allang niet meer alleen tieners. Als je bedrijf visueel iets te vertellen heeft en je doelgroep jonger is dan 45, is TikTok Ads een serieuze optie.
                        </p>

                        <h2 className="text-3xl mt-16 mb-6">Is TikTok echt alleen voor jongeren?</h2>
                        <p>
                            Nee. Dat beeld klopt al een paar jaar niet meer. In 2024 was bijna 40% van de actieve TikTok-gebruikers in Nederland tussen de 25 en 44 jaar oud. Het platform is populair bij mensen die willen worden geïnspireerd, vermaakt en geïnformeerd, en dat zijn lang niet alleen scholieren.
                        </p>
                        <p>
                            E-commercebedrijven, sportmerken, coaches, restaurants en zelfs B2B-dienstverleners zetten TikTok Ads met succes in. Het platform werkt het best als je doelgroep visueel aanspreekbaar is en als er een emotionele component zit aan je product of dienst. Verkoop je een gevoel of een transformatie? Dan is TikTok geschikt.
                        </p>

                        <h2 className="text-3xl mt-16 mb-6">Wat kost adverteren op TikTok?</h2>
                        <p>
                            TikTok heeft een minimumbudget van 50 euro per dag op campagneniveau en 20 euro per dag op advertentiegroepniveau. Voor kleinere budgetten is dat een hoge drempel. Maar de kosten per klik en per 1000 vertoningen liggen gemiddeld lager dan op Meta of Google.
                        </p>
                        <p>
                            In 2025 ligt de gemiddelde CPM op TikTok in Nederland tussen de 4 en 8 euro, afhankelijk van de doelgroep en het seizoen. Ter vergelijking: op Meta is dat gemiddeld 8 tot 14 euro. Je bereikt dus relatief goedkoop een grote groep mensen. De vraag is of dat bereik ook converteert voor jouw aanbod.
                        </p>
                        <p>
                            Voor een eerste serieuze test reken je minimaal op 1.000 tot 1.500 euro advertentiebudget per maand om genoeg data te verzamelen.
                        </p>

                        <h2 className="text-3xl mt-16 mb-6">Hoe werken TikTok Ads?</h2>
                        <p>
                            TikTok Ads Manager lijkt in opbouw op Meta Ads Manager. Je maakt campagnes, ad groups en advertenties. Het grote verschil is de contentstijl. TikTok beloont content die aanvoelt als een gewone TikTok, niet als een gepolijste reclamevideo.
                        </p>
                        <p>
                            De eerste 2 seconden van je video zijn allesbepalend. Als je kijker niet meteen getriggerd wordt, scrolt hij door. Gebruik tekst in beeld, begin met een prikkelende vraag of een opvallende actie en maak je video's altijd in verticaal formaat (9:16).
                        </p>
                        <p>
                            TikTok werkt ook met Spark Ads, waarbij je bestaande organische posts van jouw eigen account of van creators kunt promoten. Dit geeft je advertentie een naturel gevoel en verhoogt de betrokkenheid aanzienlijk.
                        </p>

                        <h2 className="text-3xl mt-16 mb-6">Voor welke bedrijven werkt TikTok Ads het best?</h2>
                        <p>
                            Webshops die producten verkopen met een duidelijke voor- en nasituatie, zoals beautyproducten, kleding, fitnessaccessoires of gadgets, presteren goed op TikTok. De visuele kracht van het platform past bij producten die je kunt laten zien.
                        </p>
                        <p>
                            Maar ook dienstverleners kunnen er goed mee uit de voeten. Een coach die in 15 seconden een waardevol inzicht deelt trekt aandacht. Een restauranthouder die de sfeer van zijn zaak laat zien ook. Het draait om authenticiteit, niet om perfectie.
                        </p>
                        <p>
                            B2B-bedrijven hebben het moeilijker op TikTok. Niet onmogelijk, maar de koopintentie is er anders dan op Google. TikTok werkt meer als een awareness- en considerationkanaal, minder als een direct-response kanaal.
                        </p>
                        <p>
                            We zien bij onze klanten dat TikTok Ads het best werken als aanvulling op Meta of Google, niet als vervanging. Een potentiële klant die je product op TikTok ziet en daarna via een Google-zoekopdracht of Meta retargeting converteert: dat is het patroon dat het meest voorkomt.
                        </p>

                        <h2 className="text-3xl mt-16 mb-6">Wat zijn de valkuilen van TikTok Ads?</h2>
                        <p>
                            De grootste valkuil is het hergebruiken van advertentiemateriaal dat gemaakt is voor andere platforms. Een banner die je op Instagram gebruikt, werkt niet op TikTok. Alles moet native zijn: verticaal, authentiek en snel.
                        </p>
                        <p>
                            De tweede valkuil is het negeren van het TikTok Pixel. Net als bij Meta heb je tracking nodig om het algoritme te voeden met conversiedata. Zonder pixel weet TikTok niet wie je kopers zijn en kan het niet gericht zoeken naar vergelijkbare profielen.
                        </p>
                        <p>
                            De derde valkuil is te snel opgeven. TikTok's algoritme heeft een leerperiode van 7 tot 14 dagen. In die periode kunnen de resultaten tegenvallen. Pas daarna, als er genoeg data is, begint het systeem te presteren.
                        </p>

                        <h2 className="text-3xl mt-16 mb-6">Benieuwd of TikTok Ads passen bij jouw bedrijf?</h2>
                        <p>
                            Bekijk ook onze <Link to="/diensten" className="text-accent hover:underline">diensten-pagina</Link> voor een overzicht van alle platformen waarmee wij werken. Of <Link to="/contact" className="text-accent hover:underline">plan een gratis gesprek</Link> voor advies op maat.
                        </p>

                        <hr className="my-16 border-primary/10" />

                        <h2 className="text-3xl mb-8">Veelgestelde vragen over TikTok Ads</h2>

                        <div className="space-y-8">
                            <div>
                                <h3 className="text-xl font-bold mb-2">Is TikTok Ads geschikt voor kleine budgetten?</h3>
                                <p className="text-base text-primary/70 mt-0">
                                    Het minimumbudget van TikTok ligt hoger dan bij Meta: 50 euro per dag op campagneniveau. Voor heel kleine budgetten is TikTok Ads daardoor minder toegankelijk. Reken op minimaal 1.000 tot 1.500 euro per maand voor een eerste test.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2">Hoe maak ik goede TikTok-advertenties?</h3>
                                <p className="text-base text-primary/70 mt-0">
                                    Native, verticaal en snel. De eerste 2 seconden bepalen alles. Gebruik tekst in beeld, begin met een prikkelende vraag of actie en zorg dat je video aanvoelt als een organische TikTok, niet als een reclamespotje.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2">Wat is het verschil tussen TikTok Ads en Meta Ads?</h3>
                                <p className="text-base text-primary/70 mt-0">
                                    Meta heeft meer data en een volwassener advertentiesysteem. TikTok heeft lagere CPM's maar vraagt een andere contentstijl. TikTok werkt beter voor awareness, Meta werkt beter voor directe conversies. De twee platforms vullen elkaar goed aan.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2">Werkt TikTok Ads ook voor B2B-bedrijven?</h3>
                                <p className="text-base text-primary/70 mt-0">
                                    Beperkt. TikTok is sterk voor consumenten en visuele producten. B2B-bedrijven kunnen TikTok gebruiken voor naamsbekendheid, maar voor directe leads werkt LinkedIn of Google doorgaans beter.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2">Hoe meet ik de resultaten van mijn TikTok-campagnes?</h3>
                                <p className="text-base text-primary/70 mt-0">
                                    Via TikTok Ads Manager in combinatie met het TikTok Pixel op je website. Zorg dat je conversie-events goed zijn ingesteld, zoals aankopen, formulierinzendingen of pagina-bezoeken. Zonder tracking kun je resultaten niet goed beoordelen.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2">Kan ik bestaande content hergebruiken voor TikTok Ads?</h3>
                                <p className="text-base text-primary/70 mt-0">
                                    Alleen als het native verticale video's zijn van 9:16. Horizontale video's of Instagram Reels die niet specifiek voor TikTok zijn gemaakt presteren slecht. Maak content voor het platform zelf.
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
                    <h2 className="relative z-10 font-drama italic text-background text-3xl sm:text-4xl md:text-5xl mb-6">TikTok Ads voor jouw bedrijf?</h2>
                    <p className="relative z-10 font-sans text-background/70 text-lg mb-10 max-w-xl mx-auto">
                        Plan een gratis gesprek met onze experts. We bespreken jouw merk en of TikTok het juiste platform is om jouw doelgroep effectief te bereiken.
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
