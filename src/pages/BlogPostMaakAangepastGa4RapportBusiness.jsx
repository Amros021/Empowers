import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ChevronRight, User } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function BlogPostMaakAangepastGa4RapportBusiness() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen selection:bg-accent/30 selection:text-dark flex flex-col bg-background">
            <Helmet>
                <title>Hoe maak je een aangepast GA4-rapport voor jouw business? | Empowers</title>
                <meta name="description" content="Een aangepast GA4-rapport maken doe je via de bibliotheek of een verkenning. Leer welke dimensies en statistieken bij jouw business passen." />
                <link rel="canonical" href="https://www.empowers.nl/blogs/tracking/maak-aangepast-ga4-rapport-business" />
                <meta property="og:title" content="Hoe maak je een aangepast GA4-rapport voor jouw business? | Empowers" />
                <meta property="og:description" content="Een aangepast GA4-rapport maken doe je via de bibliotheek of een verkenning. Leer welke dimensies en statistieken bij jouw business passen." />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://www.empowers.nl/blogs/tracking/maak-aangepast-ga4-rapport-business" />
                <meta property="og:image" content="https://www.empowers.nl/images/blogs/maak-aangepast-ga4-rapport-business.jpg" />
                <meta property="article:published_time" content="2026-07-11T16:00:00+02:00" />
                <meta property="article:author" content="Empowers" />
                <meta property="article:section" content="Tracking" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Hoe maak je een aangepast GA4-rapport voor jouw business? | Empowers" />
                <meta name="twitter:description" content="Een aangepast GA4-rapport maken doe je via de bibliotheek of een verkenning. Leer welke dimensies en statistieken bij jouw business passen." />
                <script type="application/ld+json">{JSON.stringify({
                    "@context": "https://schema.org",
                    "@graph": [
                        {
                            "@type": "Article",
                            "headline": "Hoe maak je een aangepast GA4-rapport voor jouw business?",
                            "image": "https://www.empowers.nl/images/blogs/maak-aangepast-ga4-rapport-business.jpg",
                            "description": "Een aangepast GA4-rapport maken doe je via de bibliotheek of een verkenning. Leer welke dimensies en statistieken bij jouw business passen.",
                            "author": { "@type": "Organization", "name": "Empowers" },
                            "publisher": { "@type": "Organization", "name": "Empowers", "url": "https://www.empowers.nl" },
                            "datePublished": "2026-07-11T16:00:00+02:00",
                            "dateModified": "2026-07-11T16:00:00+02:00",
                            "url": "https://www.empowers.nl/blogs/tracking/maak-aangepast-ga4-rapport-business"
                        },
                        {
                            "@type": "BreadcrumbList",
                            "itemListElement": [
                                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.empowers.nl" },
                                { "@type": "ListItem", "position": 2, "name": "Nieuws", "item": "https://www.empowers.nl/nieuws" },
                                { "@type": "ListItem", "position": 3, "name": "Tracking", "item": "https://www.empowers.nl/blogs/tracking" },
                                { "@type": "ListItem", "position": 4, "name": "Hoe maak je een aangepast GA4-rapport voor jouw business?", "item": "https://www.empowers.nl/blogs/tracking/maak-aangepast-ga4-rapport-business" }
                            ]
                        },
                        {
                            "@type": "FAQPage",
                            "mainEntity": [
                                { "@type": "Question", "name": "Waar maak je een aangepast rapport in GA4?", "acceptedAnswer": { "@type": "Answer", "text": "Via Rapporten en dan Bibliotheek pas je bestaande rapporten aan of bouw je nieuwe. Voor eenmalige of diepere analyses gebruik je Verkennen in het linkermenu. Voor de bibliotheek heb je minimaal de rol Redacteur nodig." } },
                                { "@type": "Question", "name": "Wat is het verschil tussen een rapport en een verkenning in GA4?", "acceptedAnswer": { "@type": "Answer", "text": "Een rapport staat vast in je menu en is bedoeld om steeds dezelfde cijfers te volgen. Een verkenning is een los analysecanvas waarin je vrij kunt slepen met dimensies en statistieken, filters kunt stapelen en technieken zoals trechters en padanalyses kunt gebruiken." } },
                                { "@type": "Question", "name": "Hoe lang bewaart GA4 data voor verkenningen?", "acceptedAnswer": { "@type": "Answer", "text": "Standaard bewaart GA4 gebeurtenisdata op gebruikersniveau twee maanden. Je kunt dit in de instellingen onder gegevensbehoud verhogen naar veertien maanden. De standaardrapporten hebben hier geen last van, verkenningen wel." } },
                                { "@type": "Question", "name": "Kan ik een aangepast GA4-rapport delen met collega's?", "acceptedAnswer": { "@type": "Answer", "text": "Ja. Rapporten die je via de bibliotheek aan een collectie toevoegt, zijn zichtbaar voor iedereen met toegang tot de property. Verkenningen zijn standaard alleen zichtbaar voor jou, maar je kunt ze delen zodat collega's een eigen kopie kunnen bekijken." } },
                                { "@type": "Question", "name": "Hoeveel aangepaste dimensies kan ik gebruiken in GA4?", "acceptedAnswer": { "@type": "Answer", "text": "Een standaard GA4-property biedt ruimte voor vijftig aangepaste dimensies op gebeurtenisniveau. Voor de meeste MKB-bedrijven en webshops is dat ruim voldoende, mits je vooraf bedenkt welke dimensies echt iets zeggen over je omzet." } },
                                { "@type": "Question", "name": "Wanneer kies ik Looker Studio in plaats van een GA4-rapport?", "acceptedAnswer": { "@type": "Answer", "text": "Kies Looker Studio zodra je data uit meerdere bronnen naast elkaar wilt zien, bijvoorbeeld GA4 naast Google Ads en Meta Ads, of wanneer je een rapport wilt delen met mensen die geen toegang tot GA4 hebben. Voor snelle controle binnen één databron blijft GA4 zelf sneller." } }
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
                        <Link to="/blogs/tracking" className="hover:text-accent transition-colors">Tracking</Link>
                        <ChevronRight className="w-3 h-3" />
                        <span className="text-primary truncate">Aangepast GA4-rapport maken</span>
                    </nav>

                    {/* Header */}
                    <header className="mb-16">
                        <div className="inline-block px-3 py-1 bg-accent/10 text-accent font-mono text-xs uppercase tracking-widest rounded-full mb-6">
                            Tracking
                        </div>
                        <h1 className="font-sans font-bold text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight mb-8">
                            Hoe maak je een aangepast GA4-rapport voor jouw business?
                        </h1>

                        <div className="flex flex-wrap items-center gap-6 text-sm font-sans text-primary/60 border-y border-primary/10 py-6">
                            <div className="flex items-center gap-2">
                                <User className="w-4 h-4" />
                                <span>Empowers Redactie</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>11 juli 2026</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>8 minuten leestijd</span>
                            </div>
                        </div>
                    </header>

                    {/* Featured Image */}
                    <figure className="w-full h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden mb-16 relative bg-primary">
                        <div className="absolute inset-0 bg-[url('/images/blogs/maak-aangepast-ga4-rapport-business.jpg')] bg-cover bg-center opacity-40 mix-blend-overlay" style={{backgroundImage: "url('/images/blogs/maak-aangepast-ga4-rapport-business.jpg')"}}></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </figure>

                    {/* Content */}
                    <div className="prose prose-lg prose-headings:font-sans prose-headings:font-bold prose-headings:text-primary prose-p:font-sans prose-p:text-primary/80 prose-p:leading-relaxed max-w-none">
                        <p className="text-xl md:text-2xl font-medium leading-relaxed mb-10 text-primary">
                            Een aangepast GA4-rapport maak je op twee plekken: via Rapporten en dan Bibliotheek, of via Verkennen. Daar kies je zelf de dimensies, statistieken en filters die bij jouw business passen. Zo zie je in één scherm wat de standaardrapporten verstoppen: de cijfers waarop jij daadwerkelijk stuurt.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat is een aangepast rapport in GA4?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Google Analytics 4 komt standaard met een set rapporten die voor iedereen hetzelfde zijn. Een kledingwebshop, een advocatenkantoor en een softwarebedrijf zien exact dezelfde schermen. Handig als startpunt, maar zelden precies wat jij nodig hebt.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een aangepast rapport is een rapport dat jij zelf hebt samengesteld. Jij bepaalt welke dimensie op de rijen staat, welke statistieken in de kolommen verschijnen en welke filters er standaard op zitten. Dat rapport zet je vervolgens vast in je linkermenu, zodat je er elke week met één klik bij kunt. Geen zoekwerk, geen exportjes naar een spreadsheet.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Waarom volstaan de standaardrapporten niet?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De standaardrapporten beantwoorden algemene vragen. Hoeveel bezoekers had ik? Uit welk land komen ze? Welke pagina's bekeken ze? Prima om te weten, maar je verdient er niets mee.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De vragen die geld opleveren zijn specifieker. Welke campagne levert bestellingen op met een hoge orderwaarde? Op welke landingspagina haken bezoekers uit advertenties af? Hoeveel offerteaanvragen kwamen er deze maand uit organisch verkeer? Voor dat soort vragen moet je in de standaardrapporten eindeloos doorklikken en filteren. Een aangepast rapport geeft het antwoord direct.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            In de accounts die wij beheren valt op dat ondernemers vaak wekelijks dezelfde handmatige klikroute afleggen. Drie menu's diep, filter erop, dimensie wisselen. Werk dat je één keer inricht en daarna nooit meer hoeft te doen.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe maak je een rapport via de bibliotheek?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Open GA4 en ga naar Rapporten. Helemaal onderaan het linkermenu staat Bibliotheek. Zie je die niet, dan heb je waarschijnlijk de rol Kijker; voor de bibliotheek heb je minimaal Redacteur nodig. Vraag de beheerder van je property om je rechten aan te passen.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            In de bibliotheek kun je een bestaand rapport openen en aanpassen, of een nieuw rapport vanaf nul bouwen. Het makkelijkst is starten vanuit een bestaand detailrapport dat in de buurt komt van wat je zoekt. Klik rechtsboven op het potlood, wissel de dimensie, voeg statistieken toe of verwijder wat je nooit bekijkt. Sla het op onder een eigen naam, dan blijft het origineel intact.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Je nieuwe rapport voeg je daarna toe aan een collectie. Een collectie is een groepje rapporten dat samen als kopje in het linkermenu verschijnt. Publiceer de collectie en iedereen met toegang tot de property ziet jouw rapport voortaan gewoon in het menu staan. Zo bouw je stap voor stap een menu dat over jouw business gaat in plaats van over de gemiddelde website.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wanneer gebruik je een verkenning?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Verkenningen vind je onder Verkennen in het linkermenu. Waar een rapport bedoeld is om steeds dezelfde cijfers te volgen, is een verkenning een werkblad voor onderzoek. Je sleept dimensies en statistieken op een canvas en ziet het resultaat meteen veranderen.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            GA4 biedt hier technieken die in de gewone rapporten niet bestaan. Met een trechterverkenning zie je waar bezoekers afhaken tussen productpagina en betaling. Met een padverkenning volg je welke route bezoekers echt afleggen door je site. En met de vrije vorm bouw je draaitabellen met meerdere dimensies tegelijk.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Eén beperking moet je kennen. Verkenningen werken met gebeurtenisdata op gebruikersniveau, en die bewaart GA4 standaard maar twee maanden. In de instellingen onder gegevensbehoud zet je dat op veertien maanden. Doe dat vandaag nog als je het nooit hebt aangepast, want het werkt niet met terugwerkende kracht.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Welke dimensies en statistieken passen bij jouw business?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Begin niet bij wat er allemaal kan, maar bij de beslissingen die je neemt. Verdeel je maandelijks budget over kanalen? Dan wil je een rapport met sessiebron en -medium als dimensie en omzet of conversies als statistiek. Twijfel je welke productcategorie je in advertenties uitlicht? Dan is itemcategorie je dimensie en gekochte aantallen plus itemomzet je statistiek.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Voor een webshop is een rapport met campagne, landingspagina en omzet per sessie vaak de beste start. Een leadgeneratie-bedrijf kijkt eerder naar formulierverzendingen per kanaal en de kwaliteit van die leads verderop in het proces. Draait jouw groei op vindbaarheid, lees dan ook ons artikel over <Link to="/blogs/seo/interpreteer-seo-data-google-analytics" className="text-accent hover:underline">SEO-data interpreteren in GA4</Link>.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Mis je een dimensie die specifiek is voor jouw bedrijf, zoals klanttype of abonnementsvorm? Die kun je zelf aanmaken als aangepaste dimensie, mits je die informatie meestuurt met je events. Een standaard property biedt ruimte voor vijftig aangepaste dimensies op gebeurtenisniveau. Ruim genoeg, zolang je alleen aanmaakt wat je ook echt gebruikt.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe houd je je rapporten bruikbaar?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Het grootste risico van aangepaste rapporten is niet dat je er te weinig maakt, maar te veel. Na een half jaar staan er twaalf rapporten in het menu waarvan niemand meer weet waarom ze bestaan. Spreek daarom af wie rapporten mag toevoegen en loop elk kwartaal door de collectie heen. Wat niemand opent, gaat eruit.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Geef rapporten ook namen die de vraag beschrijven in plaats van de techniek. Een rapport dat "Omzet per campagne" heet, wordt gebruikt. Een rapport dat "Aangepast rapport v3 definitief" heet, sterft een stille dood. Klinkt flauw, maar dit bepaalt of je team ermee werkt.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wanneer stap je over naar Looker Studio?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            GA4-rapporten laten alleen GA4-data zien. Wil je omzet uit Analytics naast advertentiekosten uit Google Ads en Meta Ads zetten, dan loop je binnen GA4 vast. Voor dat overzicht bouw je een dashboard in Looker Studio, dat gratis koppelt met GA4. Hoe je dat aanpakt lees je in ons artikel over <Link to="/blogs/tracking/google-looker-studio-marketingrapporten" className="text-accent hover:underline">marketingrapporten maken in Looker Studio</Link>.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Ook voor externe rapportage is Looker Studio de betere keuze. Een klant of directielid zonder GA4-toegang bekijkt een Looker Studio-dashboard gewoon via een link. Voor je eigen dagelijkse of wekelijkse controle blijft een aangepast rapport binnen GA4 sneller: geen extra tool, geen laadtijd, direct antwoord.
                        </p>

                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een goed ingericht GA4-rapport scheelt je elke week zoekwerk en geeft je cijfers waar je iets mee kunt. Twijfel je welke dimensies en statistieken voor jouw bedrijf de juiste zijn, of wil je dat je hele meetopzet een keer kritisch bekeken wordt? Plan een gesprek via <Link to="/contact" className="text-accent hover:underline">empowers.nl/contact</Link> en we kijken samen naar jouw data.
                        </p>

                        <hr className="my-16 border-primary/10" />

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Veelgestelde vragen over aangepaste GA4-rapporten</h2>

                        <div className="space-y-6 not-prose">
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Waar maak je een aangepast rapport in GA4?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Via Rapporten en dan Bibliotheek pas je bestaande rapporten aan of bouw je nieuwe. Voor eenmalige of diepere analyses gebruik je Verkennen in het linkermenu. Voor de bibliotheek heb je minimaal de rol Redacteur nodig.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat is het verschil tussen een rapport en een verkenning in GA4?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Een rapport staat vast in je menu en is bedoeld om steeds dezelfde cijfers te volgen. Een verkenning is een los analysecanvas waarin je vrij kunt slepen met dimensies en statistieken, filters kunt stapelen en technieken zoals trechters en padanalyses kunt gebruiken.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoe lang bewaart GA4 data voor verkenningen?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Standaard bewaart GA4 gebeurtenisdata op gebruikersniveau twee maanden. Je kunt dit in de instellingen onder gegevensbehoud verhogen naar veertien maanden. De standaardrapporten hebben hier geen last van, verkenningen wel.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Kan ik een aangepast GA4-rapport delen met collega's?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Ja. Rapporten die je via de bibliotheek aan een collectie toevoegt, zijn zichtbaar voor iedereen met toegang tot de property. Verkenningen zijn standaard alleen zichtbaar voor jou, maar je kunt ze delen zodat collega's een eigen kopie kunnen bekijken.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoeveel aangepaste dimensies kan ik gebruiken in GA4?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Een standaard GA4-property biedt ruimte voor vijftig aangepaste dimensies op gebeurtenisniveau. Voor de meeste MKB-bedrijven en webshops is dat ruim voldoende, mits je vooraf bedenkt welke dimensies echt iets zeggen over je omzet.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wanneer kies ik Looker Studio in plaats van een GA4-rapport?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Kies Looker Studio zodra je data uit meerdere bronnen naast elkaar wilt zien, bijvoorbeeld GA4 naast Google Ads en Meta Ads, of wanneer je een rapport wilt delen met mensen die geen toegang tot GA4 hebben. Voor snelle controle binnen één databron blijft GA4 zelf sneller.
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
                    <h2 className="relative z-10 font-drama italic text-background text-3xl sm:text-4xl md:text-5xl mb-6">Wil je cijfers waar je op kunt sturen?</h2>
                    <p className="relative z-10 font-sans text-background/70 text-lg mb-10 max-w-xl mx-auto">
                        Wij richten GA4 zo in dat je in één oogopslag ziet wat je marketing oplevert. Van meetplan tot rapporten die je team ook echt gebruikt.
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
