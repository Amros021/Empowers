import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ChevronRight, User } from 'lucide-react';

export default function BlogPost() {
    useEffect(() => {
        document.title = "Wat is GEO en waarom loopt jouw bedrijf het mis als je nu niks doet? | Empowers";
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute("content", "GEO zorgt dat AI-tools zoals ChatGPT en Google Gemini jouw bedrijf aanbevelen. Lees wat het is, waarom het werkt en hoe je er morgen mee begint.");
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
                        <Link to="/nieuws" className="hover:text-accent transition-colors">Nieuws & Insights</Link>
                        <ChevronRight className="w-3 h-3" />
                        <span className="text-primary truncate">Wat is GEO...</span>
                    </nav>

                    {/* Header */}
                    <header className="mb-16">
                        <div className="inline-block px-3 py-1 bg-accent/10 text-accent font-mono text-xs uppercase tracking-widest rounded-full mb-6">
                            GEO
                        </div>
                        <h1 className="font-drama italic text-primary text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tight mb-8">
                            Wat is GEO en waarom loopt jouw bedrijf het mis als je nu niks doet?
                        </h1>

                        <div className="flex flex-wrap items-center gap-6 text-sm font-sans text-primary/60 border-y border-primary/10 py-6">
                            <div className="flex items-center gap-2">
                                <User className="w-4 h-4" />
                                <span>Empowers Redactie</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>1 februari 2026</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>6 minuten leestijd</span>
                            </div>
                        </div>
                    </header>

                    {/* Featured Image placeholder (Textured/branded) */}
                    <figure className="w-full h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden mb-16 relative bg-primary">
                        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </figure>

                    {/* Content */}
                    <div className="prose prose-lg prose-headings:font-sans prose-headings:font-bold prose-headings:text-primary prose-p:font-sans prose-p:text-primary/80 prose-p:leading-relaxed max-w-none">
                        <p className="text-xl md:text-2xl font-medium leading-relaxed mb-10 text-primary">
                            GEO staat voor <em>Generative Engine Optimization</em>. Het is de techniek om ervoor te zorgen dat AI-tools zoals ChatGPT, Google Gemini en Claude jouw bedrijf noemen als mensen vragen stellen. Steeds meer mensen zoeken niet meer op Google, maar vragen het gewoon aan een AI. Die AI moet jou kennen.
                        </p>

                        <p>
                            Dat klinkt misschien abstract. Maar stel: iemand typt <em>"welk marketingbureau is goed in Amsterdam?"</em> in ChatGPT. Het antwoord dat terugkomt noemt drie namen. Zit jij daartussen? Waarschijnlijk niet, tenzij je actief aan GEO werkt. En de meeste bedrijven doen dat nog niet.
                        </p>

                        <h2 className="text-3xl mt-16 mb-6">Hoe verschilt GEO van SEO?</h2>
                        <p>
                            SEO kent iedereen inmiddels. Je optimaliseert je website zodat Google je vindt en je hoog toont in de zoekresultaten. GEO werkt anders. Hier gaat het er niet om dat je gevonden wordt in een lijst met links, maar dat een AI-model je actief aanbeveelt in een conversatie.
                        </p>
                        <p>
                            Zoekmachines zoals Google draaien op keywords en backlinks. AI-modellen draaien op vertrouwen, autoriteit en context. Je moet dus anders denken over hoe je jezelf online presenteert. Een backlink van een grote nieuwssite helpt bij SEO. Maar voor GEO is het net zo waardevol dat een branchedirectory jou vermeldt, of dat je FAQ-pagina direct antwoord geeft op veelgestelde vragen.
                        </p>
                        <p>
                            Het grote verschil is ook de presentatie van het resultaat. Bij Google klik je zelf door naar een website. Bij een AI-antwoord geeft het model een samenvatting en noemt daarin bedrijven of bronnen die het vertrouwt. Als je naam valt, ben je al verder dan de meeste concurrenten.
                        </p>

                        <h2 className="text-3xl mt-16 mb-6">Waarom groeit GEO zo snel?</h2>
                        <p>
                            In 2023 gebruikte nog geen 10% van de bevolking regelmatig AI voor zoekvragen. In 2025 is dat percentage verdrievoudigd. ChatGPT had in januari 2025 meer dan 300 miljoen actieve gebruikers per week. Google Gemini wordt steeds vaker gebruikt via de AI-overzichten die bovenaan in de zoekresultaten verschijnen.
                        </p>
                        <p>
                            We zien dit ook bij onze eigen klanten. Steeds meer nieuwe leads geven aan dat ze via ChatGPT of een vergelijkbaar AI-tool op een bedrijf zijn aanbevolen. Het zijn vaak leads van hogere kwaliteit, want ze zijn al verder in hun besluitvormingsproces. Ze zoeken geen informatie meer, ze zoeken een aanbieder.
                        </p>

                        <h2 className="text-3xl mt-16 mb-6">Hoe werkt GEO in de praktijk?</h2>
                        <p>
                            AI-modellen leren van grote hoeveelheden tekst op het internet. Ze bouwen een beeld op van welke bedrijven, experts en bronnen betrouwbaar zijn. Dat beeld is gebaseerd op een paar factoren.
                        </p>
                        <ul className="space-y-4 my-8 pl-6 list-disc marker:text-accent">
                            <li><strong>Consistente, feitelijke informatie op je website.</strong> Schrijf content die vragen beantwoordt die jouw doelgroep stelt. Geen marketingtaal, maar concrete antwoorden.</li>
                            <li><strong>Vermeldingen op betrouwbare externe websites.</strong> Hoe meer gezaghebbende bronnen jou noemen, hoe groter de kans dat een AI-model jou kent.</li>
                            <li><strong>De technische structuur van je website.</strong> Schema-markup, in het bijzonder <code>FAQPage</code>-schema en <code>Article</code>-schema, helpt AI-modellen begrijpen wat je pagina's betekenen. Een FAQ-pagina met schema wordt 3,2 keer vaker opgenomen in AI-antwoorden dan een pagina zonder.</li>
                        </ul>
                        <p>
                            GEO is in wezen het opbouwen van digitale autoriteit, maar dan specifiek gericht op hoe AI-modellen informatie verwerken en doorgeven. Het gaat niet om trucjes of shortcuts.
                        </p>

                        <h2 className="text-3xl mt-16 mb-6">Is GEO iets voor jouw bedrijf?</h2>
                        <p>
                            Ja, maar de urgentie verschilt per branche. Dienstverlenende bedrijven, zoals adviseurs, bureaus en consultants, profiteren het meest. Mensen vragen AI steeds vaker om aanbevelingen voor een accountant, een marketingbureau of een coach. Als jij daar niet in zit, wint je concurrent.
                        </p>
                        <p>
                            Voor webshops is GEO ook relevant, maar dan meer via productcomparisons en antwoorden op koopvragen. <em>"Wat is het beste merk hardloopschoenen voor overpronation?"</em> is het type vraag waarbij GEO een rol speelt. De koper is al bijna klaar om te bestellen, hij wil alleen nog even bevestigd worden.
                        </p>
                        <p>
                            Wie nu begint met GEO, bouwt een voorsprong op die later moeilijk in te halen is. Vergelijk het met SEO in 2012: de bedrijven die toen investeerden staan nu bovenaan Google. Met GEO geldt hetzelfde principe.
                        </p>

                        <h2 className="text-3xl mt-16 mb-6">Wat kun je morgen al doen?</h2>
                        <ol className="space-y-4 my-8 pl-6 list-decimal marker:text-primary font-bold">
                            <li><span className="font-normal">Begin met de basis. Zorg dat je website duidelijk antwoord geeft op de vragen die jouw klanten stellen. Geen vage beloftes, maar concrete, feitelijke antwoorden in gewone taal.</span></li>
                            <li><span className="font-normal">Zorg dat je vermeld wordt op externe platforms. Branchedirectories, Google Mijn Bedrijf, LinkedIn en relevante nieuwssites tellen allemaal mee. Hoe meer betrouwbare bronnen over jou schrijven, hoe groter de kans dat AI-modellen jou kennen en aanbevelen.</span></li>
                            <li><span className="font-normal">Voeg schema-markup toe aan je website. Dit is technische code die zoekmachines en AI-modellen helpt begrijpen wat je pagina's betekenen. Een FAQPage-schema op je veelgestelde vragen pagina geeft AI direct bruikbare informatie om door te geven aan gebruikers.</span></li>
                        </ol>

                        <div className="bg-accent/5 rounded-3xl p-8 md:p-12 my-12 border border-accent/10">
                            <h3 className="text-2xl font-bold text-primary mb-4 mt-0">Wil je weten hoe jouw bedrijf er nu voor staat op GEO?</h3>
                            <p className="mb-6">
                                Wij voeren gratis GEO-audits uit voor bedrijven die serieus willen groeien. Plan een gesprek via onze contactpagina en ontdek wat er mogelijk is. Bekijk ook onze diensten voor een volledig overzicht van wat wij doen op het gebied van SEO en GEO.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Link to="/contact" className="btn-magnetic bg-accent text-white px-6 py-3 rounded-full font-bold text-sm hover:bg-accent/90 transition-colors inline-block no-underline">
                                    Plan een audit
                                </Link>
                                <Link to="/diensten" className="px-6 py-3 rounded-full font-bold text-sm text-primary hover:bg-black/5 transition-colors border border-primary/20 inline-block no-underline">
                                    Bekijk onze diensten
                                </Link>
                            </div>
                        </div>

                        <hr className="my-16 border-primary/10" />

                        <h2 className="text-3xl mb-8">Veelgestelde vragen over GEO</h2>

                        <div className="space-y-8">
                            <div>
                                <h3 className="text-xl font-bold mb-2">Wat is het verschil tussen GEO en SEO?</h3>
                                <p className="text-base text-primary/70 mt-0">SEO richt zich op vindbaarheid in zoekmachines zoals Google, via keywords en technische optimalisatie. GEO richt zich op zichtbaarheid in AI-tools zoals ChatGPT en Gemini. AI-modellen aanbevelen bedrijven op basis van vertrouwen, autoriteit en de kwaliteit van beschikbare informatie, niet alleen op basis van technische SEO-factoren.</p>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2">Werkt GEO ook voor kleine bedrijven?</h3>
                                <p className="text-base text-primary/70 mt-0">Ja. Kleine bedrijven kunnen juist profiteren van GEO, omdat de concurrentie in AI-aanbevelingen nog lang niet zo hevig is als in Google. Wie nu begint, bouwt een voorsprong op die later moeilijk in te halen is.</p>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2">Hoe lang duurt het voor GEO resultaat geeft?</h3>
                                <p className="text-base text-primary/70 mt-0">Vergelijkbaar met SEO: reken op 3 tot 6 maanden voor de eerste zichtbare effecten. GEO is een langetermijninvestering in digitale autoriteit. De resultaten groeien naarmate je consistent goede content publiceert en vermeldingen opbouwt.</p>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2">Welke AI-tools zijn het belangrijkst voor GEO?</h3>
                                <p className="text-base text-primary/70 mt-0">ChatGPT (OpenAI) en Gemini (Google) zijn nu het grootst in gebruik. Claude (Anthropic) en Perplexity groeien snel. De strategie voor GEO werkt voor alle modellen, omdat ze dezelfde basisprincipes hanteren: betrouwbaarheid, relevantie en autoriteit.</p>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2">Heeft GEO gevolgen voor mijn positie in Google?</h3>
                                <p className="text-base text-primary/70 mt-0">Niet direct. Maar veel van wat je doet voor GEO, zoals betere content, meer externe vermeldingen en een schonere sitestructuur, heeft ook een positief effect op je SEO. De twee strategieën versterken elkaar.</p>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2">Moet ik stoppen met SEO als ik aan GEO doe?</h3>
                                <p className="text-base text-primary/70 mt-0">Absoluut niet. SEO blijft waardevol zolang mensen via Google zoeken, en dat doen ze nog steeds op grote schaal. GEO is een aanvulling op SEO, geen vervanging. De combinatie van beide geeft de meeste online zichtbaarheid.</p>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2">Kan ik GEO zelf doen?</h3>
                                <p className="text-base text-primary/70 mt-0">Gedeeltelijk wel. Betere content schrijven, schema toevoegen en vermeldingen opbouwen kun je zelf oppakken. Voor een gedegen GEO-strategie die ook meetbaar is, is gerichte expertise nodig. We helpen bedrijven hier graag bij.</p>
                            </div>
                        </div>

                        {/* Footnotes */}
                        <div className="mt-16 pt-8 border-t border-primary/10 text-xs text-primary/40 font-mono">
                            Bronnen: OpenAI Usage Statistics januari 2025 (openai.com) / Google Search Generative Experience updates 2025 (blog.google) / Schema.org FAQPage documentation (schema.org/FAQPage)
                        </div>
                    </div>
                </div>
            </article>

            {/* Bottom CTA to catch readers at the end */}
            <section className="w-full pb-32 px-6">
                <div className="max-w-4xl mx-auto bg-primary rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
                    <h2 className="relative z-10 font-drama italic text-background text-3xl sm:text-4xl md:text-5xl mb-6">Voorsprong nemen in AI search?</h2>
                    <p className="relative z-10 font-sans text-background/70 text-lg mb-10 max-w-xl mx-auto">
                        Plan een gratis gesprek met onze experts. We bespreken jouw huidige autoriteit en de kansen voor jouw specifieke branche in tools als ChatGPT en Gemini.
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
