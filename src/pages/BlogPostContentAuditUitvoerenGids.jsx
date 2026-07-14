import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ChevronRight, User } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function BlogPostContentAuditUitvoerenGids() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen selection:bg-accent/30 selection:text-dark flex flex-col bg-background">
            <Helmet>
                <title>Content audit uitvoeren: wat houd je en wat gooi je weg? | Empowers</title>
                <meta name="description" content="Een content audit uitvoeren laat zien welke pagina's blijven, verbeteren of verdwijnen. Ontdek de stappen, tools en signalen die de keuze bepalen." />
                <link rel="canonical" href="https://www.empowers.nl/blogs/strategie/content-audit-uitvoeren-gids" />
                <meta property="og:title" content="Content audit uitvoeren: wat houd je en wat gooi je weg? | Empowers" />
                <meta property="og:description" content="Een content audit uitvoeren laat zien welke pagina's blijven, verbeteren of verdwijnen. Ontdek de stappen, tools en signalen die de keuze bepalen." />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://www.empowers.nl/blogs/strategie/content-audit-uitvoeren-gids" />
                <meta property="og:image" content="https://www.empowers.nl/images/blogs/content-audit-uitvoeren-gids.jpg" />
                <meta property="article:published_time" content="2026-07-09T16:00:00+02:00" />
                <meta property="article:author" content="Empowers" />
                <meta property="article:section" content="Strategie" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Content audit uitvoeren: wat houd je en wat gooi je weg? | Empowers" />
                <meta name="twitter:description" content="Een content audit uitvoeren laat zien welke pagina's blijven, verbeteren of verdwijnen. Ontdek de stappen, tools en signalen die de keuze bepalen." />
                <script type="application/ld+json">{JSON.stringify({
                    "@context": "https://schema.org",
                    "@graph": [
                        {
                            "@type": "Article",
                            "headline": "Content audit uitvoeren: wat houd je en wat gooi je weg?",
                            "image": "https://www.empowers.nl/images/blogs/content-audit-uitvoeren-gids.jpg",
                            "description": "Een content audit uitvoeren laat zien welke pagina's blijven, verbeteren of verdwijnen. Ontdek de stappen, tools en signalen die de keuze bepalen.",
                            "author": { "@type": "Organization", "name": "Empowers" },
                            "publisher": { "@type": "Organization", "name": "Empowers", "url": "https://www.empowers.nl" },
                            "datePublished": "2026-07-09T16:00:00+02:00",
                            "dateModified": "2026-07-09T16:00:00+02:00",
                            "url": "https://www.empowers.nl/blogs/strategie/content-audit-uitvoeren-gids"
                        },
                        {
                            "@type": "BreadcrumbList",
                            "itemListElement": [
                                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.empowers.nl" },
                                { "@type": "ListItem", "position": 2, "name": "Nieuws", "item": "https://www.empowers.nl/nieuws" },
                                { "@type": "ListItem", "position": 3, "name": "Strategie", "item": "https://www.empowers.nl/blogs/strategie" },
                                { "@type": "ListItem", "position": 4, "name": "Content audit uitvoeren: wat houd je en wat gooi je weg?", "item": "https://www.empowers.nl/blogs/strategie/content-audit-uitvoeren-gids" }
                            ]
                        },
                        {
                            "@type": "FAQPage",
                            "mainEntity": [
                                { "@type": "Question", "name": "Wat is het verschil tussen een content audit en een SEO-audit?", "acceptedAnswer": { "@type": "Answer", "text": "Een content audit kijkt naar de kwaliteit en prestaties van je bestaande teksten en pagina's: welke blijven, welke verbeter je en welke verwijder je. Een SEO-audit is breder en kijkt ook naar techniek, zoals laadtijd, mobielvriendelijkheid en crawlbaarheid. Een content audit is meestal onderdeel van een bredere SEO-audit." } },
                                { "@type": "Question", "name": "Hoeveel pagina's moet mijn website hebben voordat een content audit zin heeft?", "acceptedAnswer": { "@type": "Answer", "text": "Vanaf zo'n 20 tot 30 pagina's wordt een content audit de moeite waard, omdat je dan al snel pagina's hebt die elkaar beconcurreren of zijn vergeten. Heb je een kleinere website van 10 pagina's, dan houd je meestal met een korte jaarlijkse check overzicht." } },
                                { "@type": "Question", "name": "Wat doe je met een pagina die je wilt verwijderen maar die nog verkeer trekt?", "acceptedAnswer": { "@type": "Answer", "text": "Verwijder de pagina niet zomaar, maar zet een 301-redirect naar de meest relevante bestaande pagina. Zo behoudt de nieuwe pagina de waarde van het verkeer en de externe links die naar de oude pagina wezen, in plaats van dat je bezoekers op een foutmelding laat landen." } },
                                { "@type": "Question", "name": "Kost een content audit veel tijd?", "acceptedAnswer": { "@type": "Answer", "text": "Voor een website met ongeveer 50 pagina's kost een grondige audit meestal 1 tot 2 werkdagen, inclusief het verzamelen van data en het maken van keuzes per pagina. Bij grotere sites met honderden pagina's loopt dat op, vooral als je ook nog gaat herschrijven of samenvoegen." } },
                                { "@type": "Question", "name": "Moet ik een content audit zelf doen of uitbesteden?", "acceptedAnswer": { "@type": "Answer", "text": "Zelf doen kan prima als je bekend bent met Google Analytics 4 en Search Console en tijd hebt vrij te maken. Heb je een grote website of twijfel je over welke pagina's echt bijdragen aan omzet, dan is uitbesteden vaak sneller en objectiever, omdat een buitenstaander niet gehecht is aan een pagina die je zelf hebt geschreven." } },
                                { "@type": "Question", "name": "Wat is het verschil tussen deze audit en een audit gericht op pagina's die schade toebrengen?", "acceptedAnswer": { "@type": "Answer", "text": "Deze content audit richt zich op de vraag welke pagina's je behoudt, verbetert of weggooit op basis van prestaties. Een audit gericht op schadelijke pagina's kijkt specifiek naar content die je hele site omlaag trekt, zoals dunne pagina's of verouderde informatie die vertrouwen kost. Beide invalshoeken vullen elkaar aan." } }
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
                        <span className="text-primary truncate">Content audit uitvoeren</span>
                    </nav>

                    {/* Header */}
                    <header className="mb-16">
                        <div className="inline-block px-3 py-1 bg-accent/10 text-accent font-mono text-xs uppercase tracking-widest rounded-full mb-6">
                            Strategie
                        </div>
                        <h1 className="font-sans font-bold text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight mb-8">
                            Content audit uitvoeren: wat houd je en wat gooi je weg?
                        </h1>

                        <div className="flex flex-wrap items-center gap-6 text-sm font-sans text-primary/60 border-y border-primary/10 py-6">
                            <div className="flex items-center gap-2">
                                <User className="w-4 h-4" />
                                <span>Empowers Redactie</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>9 juli 2026</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>8 minuten leestijd</span>
                            </div>
                        </div>
                    </header>

                    {/* Featured Image */}
                    <figure className="w-full h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden mb-16 relative bg-primary">
                        <div className="absolute inset-0 bg-[url('/images/blogs/content-audit-uitvoeren-gids.jpg')] bg-cover bg-center opacity-40 mix-blend-overlay" style={{backgroundImage: "url('/images/blogs/content-audit-uitvoeren-gids.jpg')"}}></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </figure>

                    {/* Content */}
                    <div className="prose prose-lg prose-headings:font-sans prose-headings:font-bold prose-headings:text-primary prose-p:font-sans prose-p:text-primary/80 prose-p:leading-relaxed max-w-none">
                        <p className="text-xl md:text-2xl font-medium leading-relaxed mb-10 text-primary">
                            Een content audit uitvoeren betekent dat je elke pagina op je website systematisch beoordeelt op verkeer, positie in Google, tijd op de pagina en conversies, en op basis daarvan een knoop doorhakt: houden, verbeteren of verwijderen. Pagina's die niemand vindt en niets opleveren, schrap je of voeg je samen met een sterkere pagina. De rest krijgt een update of blijft ongemoeid.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat is een content audit precies?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een content audit is een inventarisatie van alle content op je website, van blogartikelen tot productpagina's en landingspagina's. Je verzamelt per pagina de belangrijkste cijfers: organisch verkeer, positie voor het doelzoekwoord, tijd op de pagina en het aantal conversies. Op basis daarvan deel je elke pagina in bij een van drie categorieën.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Het verschil met een gewone contentplanning is dat je terugkijkt in plaats van vooruit. Je start niet met een lege contentkalender, maar met wat er al staat. Een webshop met honderden productpagina's en tientallen blogartikelen die nooit zijn opgeruimd, heeft vaak meer baat bij een audit dan bij nog een nieuw artikel.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Waarom is een content audit belangrijk voor je website?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Verouderde of zwak presterende pagina's verdunnen de autoriteit van je website. Google en AI-zoekmachines zoals ChatGPT en Perplexity wegen de kwaliteit van je hele domein mee bij het bepalen of ze een pagina tonen of citeren. Honderd matige pagina's leveren minder op dan twintig sterke pagina's over hetzelfde onderwerp.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
Een terugkerend patroon bij grotere websites: een groot deel van de pagina's trekt vrijwel geen verkeer meer, terwijl een klein aantal pagina's het merendeel van de conversies binnenhaalt. Zonder audit blijft dat patroon onzichtbaar en werk je maanden aan content die niets verandert.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Welke data verzamel je voor een content audit?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Voor een goede audit heb je op zijn minst organisch verkeer per pagina uit Google Analytics 4, zoekwoordposities en klikken uit Google Search Console en het aantal interne links naar elke pagina nodig. Wil je dieper kijken, voeg dan crawldata toe uit een tool als Screaming Frog SEO Spider, zodat ook kapotte links en dubbele content in beeld komen.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Zet alles in een spreadsheet met één rij per pagina en kolommen voor URL, verkeer van de afgelopen twaalf maanden, positie, conversies en laatste update. Zo zie je in één overzicht welke pagina's achterblijven, zonder tussen tien tabbladen te schakelen.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe bepaal je of een pagina blijft, verbetert of verdwijnt?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Met de data in je spreadsheet maak je per pagina een keuze uit drie opties.
                        </p>

                        <h3 className="font-semibold text-primary text-xl mb-3">Wanneer houd je een pagina zoals hij is?</h3>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een pagina die goed scoort op zijn doelzoekwoord, gestaag verkeer trekt en converteert, laat je met rust. Een nieuwe datum of een extra interne link is dan genoeg. Ga je toch grootschalig herschrijven, dan loop je het risico dat je iets kapotmaakt wat al werkt.
                        </p>

                        <h3 className="font-semibold text-primary text-xl mb-3">Wanneer verbeter je een pagina?</h3>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Verbeteren is de juiste keuze bij een pagina die wel verkeer trekt maar op positie 8 tot 15 blijft hangen, of een pagina die veel wordt bekeken maar amper converteert. Vaak mist de pagina een duidelijk antwoord in de eerste alinea of recente cijfers. Werk je aan een bredere aanpak, dan lees je in ons artikel over <Link to="/blogs/strategie/content-marketing-strategie-opzetten" className="text-accent hover:underline">een contentstrategie opzetten</Link> hoe je bepaalt welke onderwerpen prioriteit krijgen.
                        </p>

                        <h3 className="font-semibold text-primary text-xl mb-3">Wanneer gooi je een pagina weg?</h3>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Verwijderen is de juiste keuze bij pagina's zonder verkeer, zonder positie in de top 100 en zonder interne links van andere pagina's. Denk aan een oud persbericht uit een vorig jaar of een blogartikel over een product dat je niet meer verkoopt. Twijfel je of een pagina schade toebrengt aan de rest van je site in plaats van gewoon niets bij te dragen? Lees dan ons artikel over <Link to="/blogs/seo/content-audit" className="text-accent hover:underline">pagina's die je website schaden</Link> voor dat onderscheid.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat doe je met content die je weggooit?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Verwijderen betekent niet zomaar de pagina offline halen. Trekt de pagina nog een klein beetje verkeer of heeft hij externe links van andere websites, zet dan een 301-redirect naar de meest relevante andere pagina. Zo behoud je de waarde van die links in plaats van ze kwijt te raken.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Heb je meerdere pagina's die hetzelfde onderwerp behandelen? Voeg ze samen tot één sterke pagina in plaats van ze los te laten bestaan. Bij een klant die we recent adviseerden stonden vier aparte blogartikelen over hetzelfde product, elk met een handvol bezoekers per maand. Na het samenvoegen tot één complete gids steeg het verkeer naar die pagina duidelijk, en verdween het risico dat de artikelen elkaar beconcurreerden in Google.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe vaak voer je een content audit uit?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Voor de meeste MKB-websites is één keer per jaar voldoende. Publiceer je wekelijks nieuwe content of groeit je website snel, controleer dan elk half jaar of oudere pagina's nog steeds presteren. Wacht je langer dan twee jaar, dan loop je het risico dat een groot deel van je site verouderd raakt en dat een audit ineens een enorme klus wordt in plaats van een overzichtelijke check.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Welke tools gebruik je bij een content audit?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Google Analytics 4 en Google Search Console zijn de basis en allebei gratis. Voor een technische crawl van je hele website is Screaming Frog SEO Spider een gangbare keuze, ook in de gratis versie tot 500 URL's. Werk je met een groter budget? Tools als Ahrefs of Semrush geven ook inzicht in externe links per pagina, wat helpt bij de keuze tussen verwijderen en een redirect.
                        </p>

                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een content audit uitvoeren is geen eenmalige klus die je afvinkt en vergeet. Het is een terugkerend onderdeel van je contentstrategie, net zo belangrijk als het schrijven van nieuwe artikelen. Wil je weten hoe je na een audit een contentkalender volhoudt? Lees ons artikel over <Link to="/blogs/strategie/contentkalender-maken-volhouden" className="text-accent hover:underline">een contentkalender maken en volhouden</Link>, of plan een gratis gesprek via <Link to="/contact" className="text-accent hover:underline">empowers.nl/contact</Link>.
                        </p>

                        <hr className="my-16 border-primary/10" />

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Veelgestelde vragen over content audit uitvoeren</h2>

                        <div className="space-y-6 not-prose">
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat is het verschil tussen een content audit en een SEO-audit?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Een content audit kijkt naar de kwaliteit en prestaties van je bestaande teksten en pagina's: welke blijven, welke verbeter je en welke verwijder je. Een SEO-audit is breder en kijkt ook naar techniek, zoals laadtijd, mobielvriendelijkheid en crawlbaarheid. Een content audit is meestal onderdeel van een bredere SEO-audit.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoeveel pagina's moet mijn website hebben voordat een content audit zin heeft?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Vanaf zo'n 20 tot 30 pagina's wordt een content audit de moeite waard, omdat je dan al snel pagina's hebt die elkaar beconcurreren of zijn vergeten. Heb je een kleinere website van 10 pagina's, dan houd je meestal met een korte jaarlijkse check overzicht.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat doe je met een pagina die je wilt verwijderen maar die nog verkeer trekt?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Verwijder de pagina niet zomaar, maar zet een 301-redirect naar de meest relevante bestaande pagina. Zo behoudt de nieuwe pagina de waarde van het verkeer en de externe links die naar de oude pagina wezen, in plaats van dat je bezoekers op een foutmelding laat landen.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Kost een content audit veel tijd?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Voor een website met ongeveer 50 pagina's kost een grondige audit meestal 1 tot 2 werkdagen, inclusief het verzamelen van data en het maken van keuzes per pagina. Bij grotere sites met honderden pagina's loopt dat op, vooral als je ook nog gaat herschrijven of samenvoegen.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Moet ik een content audit zelf doen of uitbesteden?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Zelf doen kan prima als je bekend bent met Google Analytics 4 en Search Console en tijd hebt vrij te maken. Heb je een grote website of twijfel je over welke pagina's echt bijdragen aan omzet, dan is uitbesteden vaak sneller en objectiever, omdat een buitenstaander niet gehecht is aan een pagina die je zelf hebt geschreven.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat is het verschil tussen deze audit en een audit gericht op pagina's die schade toebrengen?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Deze content audit richt zich op de vraag welke pagina's je behoudt, verbetert of weggooit op basis van prestaties. Een audit gericht op schadelijke pagina's kijkt specifiek naar content die je hele site omlaag trekt, zoals dunne pagina's of verouderde informatie die vertrouwen kost. Beide invalshoeken vullen elkaar aan.
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
                    <h2 className="relative z-10 font-drama italic text-background text-3xl sm:text-4xl md:text-5xl mb-6">Klaar om je content op te schonen?</h2>
                    <p className="relative z-10 font-sans text-background/70 text-lg mb-10 max-w-xl mx-auto">
                        Wil je weten welke pagina's op jouw website echt bijdragen aan omzet en welke je beter kunt schrappen of samenvoegen? We nemen je content samen onder de loep.
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
