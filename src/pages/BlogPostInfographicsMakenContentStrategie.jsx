import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ChevronRight, User } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function BlogPostInfographicsMakenContentStrategie() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen selection:bg-accent/30 selection:text-dark flex flex-col bg-background">
            <Helmet>
                <title>Infographics maken voor je content strategie | Empowers</title>
                <meta name="description" content="Infographics maken voor je content strategie levert meer bereik en betere uitleg op. Lees welke data werkt, hoe je ontwerpt en waar je ze inzet." />
                <link rel="canonical" href="https://www.empowers.nl/blogs/strategie/infographics-maken-content-strategie" />
                <meta property="og:title" content="Infographics maken voor je content strategie | Empowers" />
                <meta property="og:description" content="Infographics maken voor je content strategie levert meer bereik en betere uitleg op. Lees welke data werkt, hoe je ontwerpt en waar je ze inzet." />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://www.empowers.nl/blogs/strategie/infographics-maken-content-strategie" />
                <meta property="og:image" content="https://www.empowers.nl/images/blogs/infographics-maken-content-strategie.jpg" />
                <meta property="article:published_time" content="2026-07-08T10:00:00+02:00" />
                <meta property="article:author" content="Empowers" />
                <meta property="article:section" content="Strategie" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Infographics maken voor je content strategie | Empowers" />
                <meta name="twitter:description" content="Infographics maken voor je content strategie levert meer bereik en betere uitleg op. Lees welke data werkt, hoe je ontwerpt en waar je ze inzet." />
                <script type="application/ld+json">{JSON.stringify({
                    "@context": "https://schema.org",
                    "@graph": [
                        {
                            "@type": "Article",
                            "headline": "Infographics maken voor je content strategie",
                            "image": "https://www.empowers.nl/images/blogs/infographics-maken-content-strategie.jpg",
                            "description": "Infographics maken voor je content strategie levert meer bereik en betere uitleg op. Lees welke data werkt, hoe je ontwerpt en waar je ze inzet.",
                            "author": { "@type": "Organization", "name": "Empowers" },
                            "publisher": { "@type": "Organization", "name": "Empowers", "url": "https://www.empowers.nl" },
                            "datePublished": "2026-07-08T10:00:00+02:00",
                            "dateModified": "2026-07-08T10:00:00+02:00",
                            "url": "https://www.empowers.nl/blogs/strategie/infographics-maken-content-strategie"
                        },
                        {
                            "@type": "BreadcrumbList",
                            "itemListElement": [
                                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.empowers.nl" },
                                { "@type": "ListItem", "position": 2, "name": "Nieuws", "item": "https://www.empowers.nl/nieuws" },
                                { "@type": "ListItem", "position": 3, "name": "Strategie", "item": "https://www.empowers.nl/blogs/strategie" },
                                { "@type": "ListItem", "position": 4, "name": "Infographics maken voor je content strategie", "item": "https://www.empowers.nl/blogs/strategie/infographics-maken-content-strategie" }
                            ]
                        },
                        {
                            "@type": "FAQPage",
                            "mainEntity": [
                                { "@type": "Question", "name": "Wat is een infographic?", "acceptedAnswer": { "@type": "Answer", "text": "Een infographic is een visuele weergave van informatie of data. Je vat cijfers, een proces of een uitleg samen in beeld, zodat de lezer in een oogopslag de kern pakt. Het doel is een ingewikkeld verhaal helder en deelbaar maken." } },
                                { "@type": "Question", "name": "Waarom passen infographics in een content strategie?", "acceptedAnswer": { "@type": "Answer", "text": "Omdat ze uitleg makkelijker maken en goed gedeeld worden. Een infographic vat in een beeld samen wat anders een lange tekst kost. Daardoor blijft de boodschap beter hangen en pak je bereik op kanalen waar visuele content het wint van tekst." } },
                                { "@type": "Question", "name": "Welke tool gebruik je om een infographic te maken?", "acceptedAnswer": { "@type": "Answer", "text": "Voor de meeste ondernemers volstaat Canva. Het werkt met sjablonen en vraagt geen ontwerpervaring. Wie verder wil gaan, gebruikt Adobe Illustrator of Piktochart. Begin simpel en stap pas over als je vaker infographics maakt." } },
                                { "@type": "Question", "name": "Hoeveel data zet je in een infographic?", "acceptedAnswer": { "@type": "Answer", "text": "Zo weinig mogelijk. Een infographic werkt als hij een ding duidelijk maakt. Kies de paar cijfers die je punt dragen en laat de rest weg. Te veel informatie maakt het beeld druk en de boodschap onleesbaar." } },
                                { "@type": "Question", "name": "Waar deel je een infographic?", "acceptedAnswer": { "@type": "Answer", "text": "In je blog, op social media en in je nieuwsbrief. Een infographic in een artikel verlengt de tijd die mensen op de pagina blijven. Op social trekt hij aandacht in de feed, en in een nieuwsbrief geeft hij in een oogopslag de kern." } },
                                { "@type": "Question", "name": "Helpt een infographic voor SEO?", "acceptedAnswer": { "@type": "Answer", "text": "Indirect. Een infographic houdt mensen langer op je pagina en levert soms links op van sites die hem overnemen. Geef de afbeelding een beschrijvende bestandsnaam en alt-tekst, en zet de kerncijfers ook als gewone tekst op de pagina zodat Google ze leest." } }
                            ]
                        }
                    ]
                })}</script>
            </Helmet>
            <Navbar />

            <article className="w-full pt-40 pb-24 px-6 relative">
                <div className="max-w-4xl mx-auto">
                    {/* Breadcrumbs */}
                    <nav className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-primary/50 mb-12">
                        <Link to="/" className="hover:text-accent transition-colors">Home</Link>
                        <ChevronRight className="w-3 h-3" />
                        <Link to="/nieuws" className="hover:text-accent transition-colors">Nieuws</Link>
                        <ChevronRight className="w-3 h-3" />
                        <Link to="/blogs/strategie" className="hover:text-accent transition-colors">Strategie</Link>
                        <ChevronRight className="w-3 h-3" />
                        <span className="text-primary truncate">Infographics maken</span>
                    </nav>

                    {/* Header */}
                    <header className="mb-16">
                        <div className="inline-block px-3 py-1 bg-accent/10 text-accent font-mono text-xs uppercase tracking-widest rounded-full mb-6">
                            Strategie
                        </div>
                        <h1 className="font-sans font-bold text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight mb-8">
                            Infographics maken voor je content strategie
                        </h1>

                        <div className="flex flex-wrap items-center gap-6 text-sm font-sans text-primary/60 border-y border-primary/10 py-6">
                            <div className="flex items-center gap-2">
                                <User className="w-4 h-4" />
                                <span>Empowers Redactie</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>8 juli 2026</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>7 minuten leestijd</span>
                            </div>
                        </div>
                    </header>

                    {/* Featured Image */}
                    <figure className="w-full h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden mb-16 relative bg-primary">
                        <div className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-overlay" style={{backgroundImage: "url('/images/blogs/infographics-maken-content-strategie.jpg')"}}></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </figure>

                    {/* Content */}
                    <div className="prose prose-lg prose-headings:font-sans prose-headings:font-bold prose-headings:text-primary prose-p:font-sans prose-p:text-primary/80 prose-p:leading-relaxed max-w-none">
                        <p className="text-xl md:text-2xl font-medium leading-relaxed mb-10 text-primary">
                            Een infographic maak je door een stuk informatie of data terug te brengen tot een helder beeld. In je content strategie is dat goud waard. Een infographic legt in een oogopslag uit wat anders een lange tekst kost, wordt vaker gedeeld dan platte tekst en past op je blog, je social kanalen en in je nieuwsbrief.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat is een infographic en waarom past hij in je content strategie?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een infographic is een visuele samenvatting van informatie. Je giet cijfers, een proces of een uitleg in beeld, zodat de lezer de kern pakt zonder eerst een hele alinea te lezen. Denk aan een stappenplan in iconen of een paar cijfers die je punt dragen.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Voor je content strategie doet zo'n beeld twee dingen tegelijk. Het maakt een lastig onderwerp begrijpelijk, en het is makkelijk te delen. Mensen onthouden beeld beter dan losse zinnen, en een sterke infographic blijft hangen lang nadat de tekst eromheen vergeten is. Daarmee verdien je aandacht op plekken waar tekst het aflegt.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Het past bovendien in een aanpak die je toch al voert. Wie nadenkt over een doordachte <Link to="/blogs/strategie/content-marketing-strategie-opzetten" className="text-accent hover:underline">content marketing strategie</Link>, denkt na over vorm én kanaal. Een infographic is gewoon een van die vormen, naast je blog en je video.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Welke content leent zich het best voor een infographic?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Alles wat een lezer in stappen of cijfers moet begrijpen. Een proces met een vaste volgorde wordt in beeld meteen duidelijk. Een vergelijking tussen twee opties leest prettiger naast elkaar dan in lopende tekst. En een paar opvallende cijfers uit je eigen vakgebied trekken vaak meer aandacht dan dezelfde getallen in een zin.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Minder geschikt is een onderwerp dat draait om nuance of een verhaal met veel uitzonderingen. Dat verlies je zodra je het in iconen perst. Begin daarom bij content die zich laat samenvatten: een veelgestelde klantvraag, een lijstje met do's en don'ts, of de uitkomst van iets dat je gemeten hebt.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Vaak heb je de bron al liggen. Een goede blog bevat genoeg stof voor een infographic, want het denkwerk is dan al gedaan. Dat sluit aan op <Link to="/blogs/strategie/content-repurposing-across-kanalen" className="text-accent hover:underline">content hergebruiken over meerdere kanalen</Link>: een geschreven stuk wordt zo ook een beeld.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe maak je een infographic stap voor stap?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Het werk zit grotendeels in de voorbereiding, niet in het ontwerpen zelf. Wie eerst bepaalt wat hij wil zeggen, klikt het ontwerp daarna een stuk sneller in elkaar.
                        </p>
                        <h3 className="font-semibold text-primary text-xl mb-3">Bepaal eerst je boodschap</h3>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Begin bij de ene zin die de lezer moet onthouden. Wat is het inzicht dat het beeld moet overbrengen? Zodra die zin staat, weet je welke informatie erin hoort en wat je weglaat. Zonder dat ankerpunt wordt een infographic snel een verzameling losse feiten zonder richting.
                        </p>
                        <h3 className="font-semibold text-primary text-xl mb-3">Kies de juiste data</h3>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Selecteer alleen de cijfers die je punt dragen. Een infographic met drie sterke getallen werkt beter dan een die er twaalf wil tonen. Controleer je bron en gebruik geen cijfers die je niet kunt onderbouwen. Verzonnen of vage data valt op en kost je geloofwaardigheid.
                        </p>
                        <h3 className="font-semibold text-primary text-xl mb-3">Geef het een logische volgorde</h3>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Lezers volgen een infographic van boven naar beneden. Zet bovenaan waar het over gaat, daaronder de opbouw en onderaan de uitkomst of de vervolgstap. Een duidelijke leesroute zorgt dat het beeld vanzelf vertelt, zonder dat iemand moet zoeken waar te beginnen.
                        </p>
                        <h3 className="font-semibold text-primary text-xl mb-3">Ontwerp in je eigen huisstijl</h3>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Gebruik je eigen kleuren, je logo en een lettertype dat bij je merk past. Zo herkennen mensen je werk meteen, ook als de infographic los van je site rondgaat. Houd het rustig: veel wit, een paar kleuren en genoeg ruimte tussen de onderdelen leest het prettigst.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Welke tools gebruik je om een infographic te maken?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Voor de meeste ondernemers is Canva genoeg. Je werkt met kant-en-klare sjablonen, sleept onderdelen op hun plek en hebt geen ontwerpervaring nodig. In een uurtje staat er iets bruikbaars, en je past het later makkelijk aan.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Wil je meer vrijheid, dan zijn er stevigere opties. Piktochart en Venngage richten zich helemaal op infographics. Adobe Illustrator geeft je volledige controle, maar vraagt wel kennis en tijd. Voor wie net begint is dat vaak te veel van het goede.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een veelgemaakte fout die we tegenkomen is meteen voor het zwaarste programma kiezen. Begin simpel en stap pas over als je merkt dat je tegen grenzen aanloopt. De tool maakt zelden het verschil. Een heldere boodschap in een eenvoudig ontwerp wint het van een drukke infographic uit dure software.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Waar zet je een infographic in voor maximaal bereik?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Plaats hem eerst in de bijbehorende blog. Een beeld halverwege een artikel breekt de tekst en houdt mensen langer op de pagina. Die langere bezoektijd is een signaal dat Google meeweegt, dus een goede infographic werkt indirect mee aan je vindbaarheid.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Daarnaast is social media de natuurlijke plek. In een feed vol tekst trekt een visueel beeld de aandacht, en mensen delen een infographic sneller dan een link. Op LinkedIn werkt een zakelijk cijfer goed, op Instagram een strak vormgegeven stappenplan. Pas het formaat aan op het kanaal waar je hem plaatst.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Vergeet je nieuwsbrief niet. Een infographic geeft een mailing in een oogopslag richting en breekt een lap tekst. Hang je verspreiding op aan je <Link to="/blogs/strategie/contentkalender-maken-volhouden" className="text-accent hover:underline">contentkalender</Link>, zodat een beeld dat je een keer maakt op meerdere momenten terugkomt.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Welke fouten maken ondernemers met infographics?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De grootste fout is te veel willen vertellen. Een infographic die alles in een beeld propt, wordt onleesbaar en mist zijn doel. Eén boodschap per infographic is de regel. Heb je meer te zeggen, maak dan een tweede.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een tweede valkuil is de tekst alleen in het beeld zetten. Google leest een afbeelding niet, dus je cijfers en kernpunten verdwijnen dan uit beeld voor de zoekmachine. Zet de belangrijkste informatie ook als gewone tekst op de pagina en geef de afbeelding een beschrijvende bestandsnaam en alt-tekst.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Tot slot wordt een infographic vaak één keer gebruikt en daarna vergeten. Zonde, want je stak er werk in. Een beeld dat goed presteert, breng je een paar maanden later opnieuw onder de aandacht met een verse invalshoek. Je publiek heeft lang niet alles gezien.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Wil je dat je content niet alleen mooi is, maar ook klanten oplevert? Plan een gratis gesprek via <Link to="/contact" className="text-accent hover:underline">empowers.nl/contact</Link>. We kijken samen welke verhalen zich lenen voor beeld en hoe je ze inzet voor groei.
                        </p>

                        <hr className="my-16 border-primary/10" />

                        <h2 className="text-3xl mb-8">Veelgestelde vragen over infographics maken</h2>

                        <div className="space-y-6 not-prose">
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat is een infographic?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Een infographic is een visuele weergave van informatie of data. Je vat cijfers, een proces of een uitleg samen in beeld, zodat de lezer in een oogopslag de kern pakt. Het doel is een ingewikkeld verhaal helder en deelbaar maken.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Waarom passen infographics in een content strategie?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Omdat ze uitleg makkelijker maken en goed gedeeld worden. Een infographic vat in een beeld samen wat anders een lange tekst kost. Daardoor blijft de boodschap beter hangen en pak je bereik op kanalen waar visuele content het wint van tekst.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Welke tool gebruik je om een infographic te maken?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Voor de meeste ondernemers volstaat Canva. Het werkt met sjablonen en vraagt geen ontwerpervaring. Wie verder wil gaan, gebruikt Adobe Illustrator of Piktochart. Begin simpel en stap pas over als je vaker infographics maakt.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoeveel data zet je in een infographic?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Zo weinig mogelijk. Een infographic werkt als hij een ding duidelijk maakt. Kies de paar cijfers die je punt dragen en laat de rest weg. Te veel informatie maakt het beeld druk en de boodschap onleesbaar.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Waar deel je een infographic?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    In je blog, op social media en in je nieuwsbrief. Een infographic in een artikel verlengt de tijd die mensen op de pagina blijven. Op social trekt hij aandacht in de feed, en in een nieuwsbrief geeft hij in een oogopslag de kern.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Helpt een infographic voor SEO?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Indirect. Een infographic houdt mensen langer op je pagina en levert soms links op van sites die hem overnemen. Geef de afbeelding een beschrijvende bestandsnaam en alt-tekst, en zet de kerncijfers ook als gewone tekst op de pagina zodat Google ze leest.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </article>

            {/* Bottom CTA */}
            <section className="w-full pb-32 px-6">
                <div className="max-w-4xl mx-auto bg-primary rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
                    <h2 className="relative z-10 font-drama italic text-background text-3xl sm:text-4xl md:text-5xl mb-6">Meer halen uit je content?</h2>
                    <p className="relative z-10 font-sans text-background/70 text-lg mb-10 max-w-xl mx-auto">
                        Wil je content die niet alleen mooi oogt maar ook klanten oplevert? Plan een gratis gesprek. We bepalen samen welke verhalen zich lenen voor beeld.
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
