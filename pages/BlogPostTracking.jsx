import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ChevronRight, User } from 'lucide-react';

export default function BlogPostTracking() {
    useEffect(() => {
        document.title = "Waarom je zonder goede tracking je marketingbudget verspilt | Empowers";
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute("content", "Zonder tracking weet je niet welke advertenties geld opleveren en welke verspillen. Lees hoe je conversies correct meet en wat je moet instellen.");
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
                        <span className="text-primary truncate">Waarom je zonder goede tracking...</span>
                    </nav>

                    {/* Header */}
                    <header className="mb-16">
                        <div className="inline-block px-3 py-1 bg-accent/10 text-accent font-mono text-xs uppercase tracking-widest rounded-full mb-6">
                            Marketing & Strategie
                        </div>
                        <h1 className="font-drama italic text-primary text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tight mb-8">
                            Waarom je zonder goede tracking je marketingbudget verspilt
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
                        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </figure>

                    {/* Content */}
                    <div className="prose prose-lg prose-headings:font-sans prose-headings:font-bold prose-headings:text-primary prose-p:font-sans prose-p:text-primary/80 prose-p:leading-relaxed max-w-none">
                        <p className="text-xl md:text-2xl font-medium leading-relaxed mb-10 text-primary">
                            Je kunt het beste advertentiebudget hebben, de mooiste campagnes draaien en een website die er geweldig uitziet. Maar als je niet bijhoudt wat bezoekers doen na de klik, weet je niet wat werkt en wat niet. Je gooit dan feitelijk met geld in het donker. Goede tracking is de basis van elke effectieve marketingstrategie.
                        </p>

                        <h2 className="text-3xl mt-16 mb-6">Wat is conversietracking precies?</h2>
                        <p>
                            Conversietracking is het bijhouden welke acties bezoekers uitvoeren op je website na een advertentieklik of zoekopdracht. Dat kan een aankoop zijn, een formulierinzending, een telefoontje of een specifieke pagina die iemand bezoekt.
                        </p>
                        <p>
                            Die data koppel je terug aan je advertentiecampagnes. Zo weet je welke advertentie op welk platform hoeveel omzet of leads oplevert. En dus ook welk deel van je budget rendabel is en welk deel je kunt afschalen.
                        </p>

                        <h2 className="text-3xl mt-16 mb-6">Waarom missen zoveel bedrijven de juiste data?</h2>
                        <p>
                            Meer dan 60% van de bedrijven die bij ons voor een audit binnenkomen, heeft tracking die niet klopt. Niet omdat ze het niet willen, maar omdat het technisch wat stappen vraagt en er veel mis kan gaan. Pixels die niet vuren, events die dubbel geteld worden, Google Analytics dat wel klikken ziet maar geen conversies koppelt aan de juiste campagnes.
                        </p>
                        <p>
                            Het gevolg is dat je campagnes bijstuurt op basis van verkeerde data. Advertenties die slecht presteren worden in stand gehouden. Goed presterende campagnes worden stopgezet omdat de conversies niet worden meegeteld. Dat kost je elke maand geld zonder dat je het doorhebt.
                        </p>

                        <h2 className="text-3xl mt-16 mb-6">Welke tools heb je nodig?</h2>
                        <p>Voor de meeste bedrijven zijn dit de basistoepassingen.</p>
                        <ul className="space-y-4 my-8 pl-6 list-disc marker:text-accent">
                            <li><strong>Google Analytics 4</strong> geeft inzicht in al het verkeer op je website: waar bezoekers vandaan komen, hoelang ze blijven en welke pagina's ze bezoeken. Koppel dit altijd aan je Google Ads-account voor een volledig beeld.</li>
                            <li><strong>Google Tag Manager</strong> is de technische laag waarmee je alle tracking-code op je website beheert zonder steeds in de broncode te moeten duiken. Het maakt het installeren van pixels en events een stuk overzichtelijker.</li>
                            <li><strong>Meta Pixel plus Conversions API</strong> zijn samen de basis voor goede tracking van je Meta-campagnes. De Pixel werkt via de browser, de Conversions API werkt server-side. Beide samen geven je de meest complete data.</li>
                            <li><strong>TikTok Pixel</strong> als je op TikTok adverteert. Werkt op dezelfde manier als de Meta Pixel.</li>
                        </ul>

                        <h2 className="text-3xl mt-16 mb-6">Wat moet je precies bijhouden?</h2>
                        <p>
                            Dat hangt af van je doel. Een webshop wil aankopen tracken. Een dienstverlener wil formulierinzendingen of telefoongesprekken bijhouden.
                        </p>
                        <p>
                            De drie getallen die er het meest toe doen: je kosten per conversie (CPA), je omzet per euro advertentiebudget (ROAS) en je conversieratio. Een ROAS van 3 betekent dat elke euro die je uitgeeft drie euro terugbrengt. Is je ROAS structureel onder de 1,5? Dan verlies je geld op je advertenties.
                        </p>
                        <p>
                            We zien bij klanten dat zodra tracking correct staat, ze gemiddeld 20 tot 30% van hun advertentiebudget kunnen verschuiven van slecht presterende naar goed presterende campagnes. Dat geld lag er al die tijd gewoon.
                        </p>

                        <h2 className="text-3xl mt-16 mb-6">Hoe iOS 14 alles veranderde</h2>
                        <p>
                            In 2021 introduceerde Apple iOS 14, waarbij iPhone-gebruikers per app moesten aangeven of ze tracking toestonden. Meer dan 70% koos ervoor dat niet te doen. Het gevolg: Meta verloor een groot deel van zijn browsertrackingdata.
                        </p>
                        <p>
                            Dit is waarom Meta Conversions API zo waardevol is geworden. In plaats van te vertrouwen op een cookie in de browser van de gebruiker, stuurt de Conversions API data direct van jouw server naar Meta. Dat werkt ongeacht wat de gebruiker in zijn privacyinstellingen heeft staan.
                        </p>
                        <p>
                            Als je nu nog alleen op de Meta Pixel vertrouwt zonder Conversions API, zie je waarschijnlijk 30 tot 50% van je conversies niet terug in je advertentieaccount. Je campagnes presteren dan beter dan ze lijken, en je mist de data om door te schalen.
                        </p>

                        <h2 className="text-3xl mt-16 mb-6">Hoe controleer je of je tracking correct staat?</h2>
                        <ol className="space-y-4 my-8 pl-6 list-decimal marker:text-primary font-bold">
                            <li><span className="font-normal"><strong>Stap 1:</strong> Open Google Tag Manager en controleer via de Preview-modus of alle tags actief zijn. Klik zelf door je website en check of de juiste events worden geregistreerd.</span></li>
                            <li><span className="font-normal"><strong>Stap 2:</strong> Open Meta Events Manager en bekijk welke events de afgelopen 7 dagen zijn binnengekomen. Zie je geen Purchase of Lead events? Dan worden conversies niet gemeten.</span></li>
                            <li><span className="font-normal"><strong>Stap 3:</strong> Vergelijk de aantallen. Hoeveel aankopen staan er in je webshop versus hoeveel Purchase events ziet Meta? Een verschil van meer dan 20% is een signaal dat er iets niet klopt.</span></li>
                        </ol>

                        <p>
                            Kom je er niet uit? Bekijk onze <Link to="/diensten" className="text-accent hover:underline">diensten-pagina</Link> voor hoe we tracking-audits uitvoeren. Of <Link to="/contact" className="text-accent hover:underline">plan een gratis gesprek</Link> voor een snelle check van jouw situatie.
                        </p>

                        <hr className="my-16 border-primary/10" />

                        <h2 className="text-3xl mb-8">Veelgestelde vragen over marketing tracking</h2>

                        <div className="space-y-8">
                            <div>
                                <h3 className="text-xl font-bold mb-2">Wat is conversietracking in marketing?</h3>
                                <p className="text-base text-primary/70 mt-0">
                                    Conversietracking houdt bij welke acties bezoekers uitvoeren op je website na een advertentieklik, zoals een aankoop, formulierinzending of telefoontje. Die data koppel je aan je campagnes, zodat je weet welke advertenties geld opleveren en welke niet.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2">Welke tracking tools heb ik nodig als ondernemer?</h3>
                                <p className="text-base text-primary/70 mt-0">
                                    De basis is Google Analytics 4 voor je website, Google Tag Manager voor het beheren van alle tracking-code, en het pixel plus de Conversions API van elk platform waarop je adverteert.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2">Wat is ROAS en wat is een goede waarde?</h3>
                                <p className="text-base text-primary/70 mt-0">
                                    ROAS staat voor Return on Ad Spend. Een ROAS van 3 betekent dat je voor elke euro advertentiebudget drie euro omzet genereert. Voor de meeste webshops is een ROAS van 3 tot 5 gezond, afhankelijk van je marges. Zit je structureel onder de 2? Dan is er ruimte om bij te sturen.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2">Waarom kloppen mijn Meta-data niet na iOS 14?</h3>
                                <p className="text-base text-primary/70 mt-0">
                                    Apple's iOS 14-update zorgde ervoor dat meer dan 70% van de iPhone-gebruikers tracking via de browser blokkeerde. Als je alleen de Meta Pixel gebruikt zonder Conversions API, mis je een groot deel van je conversies. Voeg Meta CAPI toe om dit te compenseren.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2">Kan ik tracking zelf instellen zonder technische kennis?</h3>
                                <p className="text-base text-primary/70 mt-0">
                                    De basisinstelling van GA4 en een pixel via Google Tag Manager is te doen met een goede handleiding. Maar foutloze instelling van server-side tracking vraagt technische kennis. Een fout in de tracking is erger dan geen tracking, omdat je dan bijstuurt op verkeerde data.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2">Hoe weet ik welke campagne verantwoordelijk is voor een aankoop?</h3>
                                <p className="text-base text-primary/70 mt-0">
                                    Via UTM-parameters in je advertentielinks en via de attributiemodellen in GA4 en je advertentieplatformen. Standaard werkt Google Ads met last-click attributie. GA4 biedt ook data-driven attributie, wat een completer beeld geeft van welke kanalen bijdragen aan een conversie.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2">Wat is het verschil tussen een sessie en een conversie in Google Analytics?</h3>
                                <p className="text-base text-primary/70 mt-0">
                                    Een sessie is een bezoek aan je website. Een conversie is een specifieke actie die je hebt ingesteld als doel, zoals een aankoop of formulierinzending. Je conversieratio is het percentage sessies dat resulteert in een conversie. Gemiddeld ligt dat voor webshops tussen de 1,5% en 3,5%.
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
                    <h2 className="relative z-10 font-drama italic text-background text-3xl sm:text-4xl md:text-5xl mb-6">Tracking in orde maken?</h2>
                    <p className="relative z-10 font-sans text-background/70 text-lg mb-10 max-w-xl mx-auto">
                        Plan een strategisch overleg in. Wij voeren een gratis quick-scan uit op je huidige tracking en laten je zien waar je budget lekt.
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
