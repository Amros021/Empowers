import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ChevronRight, User } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function BlogPostVindOngelinkteMerkvermeldingen() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen selection:bg-accent/30 selection:text-dark flex flex-col bg-background">
            <Helmet>
                <title>Hoe vind je ongelinkte merkvermeldingen | Empowers</title>
                <meta name="description" content="Ongelinkte merkvermeldingen zijn plekken waar jouw merk genoemd wordt zonder link. Lees hoe je ze vindt met gratis tools en omzet in backlinks." />
                <link rel="canonical" href="https://www.empowers.nl/blogs/seo/vind-ongelinkte-merkvermeldingen" />
                <meta property="og:title" content="Hoe vind je ongelinkte merkvermeldingen | Empowers" />
                <meta property="og:description" content="Ongelinkte merkvermeldingen zijn plekken waar jouw merk genoemd wordt zonder link. Lees hoe je ze vindt met gratis tools en omzet in backlinks." />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://www.empowers.nl/blogs/seo/vind-ongelinkte-merkvermeldingen" />
                <meta property="og:image" content="https://www.empowers.nl/images/blogs/vind-ongelinkte-merkvermeldingen.jpg" />
                <meta property="article:published_time" content="2026-07-27T22:30:00+02:00" />
                <meta property="article:author" content="Empowers" />
                <meta property="article:section" content="SEO" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Hoe vind je ongelinkte merkvermeldingen | Empowers" />
                <meta name="twitter:description" content="Ongelinkte merkvermeldingen zijn plekken waar jouw merk genoemd wordt zonder link. Lees hoe je ze vindt met gratis tools en omzet in backlinks." />
                <script type="application/ld+json">{JSON.stringify({
                    "@context": "https://schema.org",
                    "@graph": [
                        {
                            "@type": "Article",
                            "headline": "Hoe vind je ongelinkte merkvermeldingen",
                            "image": "https://www.empowers.nl/images/blogs/vind-ongelinkte-merkvermeldingen.jpg",
                            "description": "Ongelinkte merkvermeldingen zijn plekken waar jouw merk genoemd wordt zonder link. Lees hoe je ze vindt met gratis tools en omzet in backlinks.",
                            "author": { "@type": "Organization", "name": "Empowers" },
                            "publisher": { "@type": "Organization", "name": "Empowers", "url": "https://www.empowers.nl" },
                            "datePublished": "2026-07-27T22:30:00+02:00",
                            "dateModified": "2026-07-27T22:30:00+02:00",
                            "url": "https://www.empowers.nl/blogs/seo/vind-ongelinkte-merkvermeldingen"
                        },
                        {
                            "@type": "BreadcrumbList",
                            "itemListElement": [
                                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.empowers.nl" },
                                { "@type": "ListItem", "position": 2, "name": "Nieuws", "item": "https://www.empowers.nl/nieuws" },
                                { "@type": "ListItem", "position": 3, "name": "SEO", "item": "https://www.empowers.nl/blogs/seo" },
                                { "@type": "ListItem", "position": 4, "name": "Hoe vind je ongelinkte merkvermeldingen", "item": "https://www.empowers.nl/blogs/seo/vind-ongelinkte-merkvermeldingen" }
                            ]
                        },
                        {
                            "@type": "FAQPage",
                            "mainEntity": [
                                { "@type": "Question", "name": "Wat is een ongelinkte merkvermelding?", "acceptedAnswer": { "@type": "Answer", "text": "Een ongelinkte merkvermelding is een plek op het web waar jouw bedrijfsnaam, product of domein genoemd wordt zonder dat er een link naar je website bij staat. Denk aan een nieuwsartikel dat je noemt, een blogger die je aanbeveelt of een forum waar je merk voorbijkomt." } },
                                { "@type": "Question", "name": "Hoe vind ik ongelinkte merkvermeldingen gratis?", "acceptedAnswer": { "@type": "Answer", "text": "Zoek in Google op je merknaam tussen aanhalingstekens gecombineerd met -site:jouwdomein.nl, zodat je eigen site wegvalt. Stel daarnaast Google Alerts in op je merknaam en varianten, dan krijg je nieuwe vermeldingen automatisch gemaild. Betaalde tools zoals Ahrefs of Brand24 maken het volledig, maar zijn niet verplicht." } },
                                { "@type": "Question", "name": "Waarom zijn ongelinkte vermeldingen waardevol?", "acceptedAnswer": { "@type": "Answer", "text": "De schrijver kent je merk al en vond het relevant genoeg om te noemen. Dat maakt de vraag om er een link van te maken de makkelijkste vorm van linkbuilding die er bestaat: de helft van het werk is al gedaan. Bovendien tellen vermeldingen zelf ook mee als merksignaal voor zoekmachines en AI-modellen." } },
                                { "@type": "Question", "name": "Hoe vraag ik om een link zonder opdringerig te zijn?", "acceptedAnswer": { "@type": "Answer", "text": "Bedank de schrijver eerst voor de vermelding en vraag daarna vriendelijk of er een link bij kan, met de exacte URL erbij zodat het weinig moeite kost. Houd het kort en persoonlijk. Reageert iemand niet, laat het dan rusten: de vermelding zelf heeft ook zonder link waarde." } },
                                { "@type": "Question", "name": "Tellen vermeldingen zonder link ook mee voor SEO?", "acceptedAnswer": { "@type": "Answer", "text": "Indirect wel. Zoekmachines gebruiken vermeldingen als signaal dat een merk bestaat en besproken wordt, en AI-modellen leren eruit welke merken in een branche relevant zijn. Een link blijft sterker, maar een consistent genoemd merk bouwt ook zonder links autoriteit op." } },
                                { "@type": "Question", "name": "Hoe voorkom ik dat ik vermeldingen mis?", "acceptedAnswer": { "@type": "Answer", "text": "Automatiseer de monitoring. Google Alerts op je merknaam, veelvoorkomende spelfouten en je domeinnaam vangt het meeste op. Plan daarnaast elk kwartaal een handmatige zoekronde, want alerts missen soms vermeldingen op sociale platforms en in oudere artikelen die later pas geïndexeerd worden." } }
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
                        <Link to="/blogs/seo" className="hover:text-accent transition-colors">SEO</Link>
                        <ChevronRight className="w-3 h-3" />
                        <span className="text-primary truncate">Ongelinkte merkvermeldingen</span>
                    </nav>

                    {/* Header */}
                    <header className="mb-16">
                        <div className="inline-block px-3 py-1 bg-accent/10 text-accent font-mono text-xs uppercase tracking-widest rounded-full mb-6">
                            SEO
                        </div>
                        <h1 className="font-sans font-bold text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight mb-8">
                            Hoe vind je ongelinkte merkvermeldingen
                        </h1>

                        <div className="flex flex-wrap items-center gap-6 text-sm font-sans text-primary/60 border-y border-primary/10 py-6">
                            <div className="flex items-center gap-2">
                                <User className="w-4 h-4" />
                                <span>Empowers Redactie</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>27 juli 2026</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>6 minuten leestijd</span>
                            </div>
                        </div>
                    </header>

                    {/* Featured Image */}
                    <figure className="w-full h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden mb-16 relative bg-primary">
                        <div className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-overlay" style={{backgroundImage: "url('/images/blogs/vind-ongelinkte-merkvermeldingen.jpg')"}}></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </figure>

                    {/* Content */}
                    <div className="prose prose-lg prose-headings:font-sans prose-headings:font-bold prose-headings:text-primary prose-p:font-sans prose-p:text-primary/80 prose-p:leading-relaxed max-w-none">
                        <p className="text-xl md:text-2xl font-medium leading-relaxed mb-10 text-primary">
                            Ongelinkte merkvermeldingen vind je met een simpele zoekopdracht: je merknaam tussen aanhalingstekens plus -site:jouwdomein.nl, zodat je eigen pagina's wegvallen. Wat overblijft zijn plekken waar anderen over jou schrijven zonder link. Elke vermelding is een kans op de makkelijkste backlink die er bestaat, want de helft van het overtuigingswerk is al gedaan.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat zijn ongelinkte merkvermeldingen?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Overal waar jouw bedrijfsnaam, product of domein genoemd wordt zonder klikbare link, heb je een ongelinkte vermelding. Een regionale krant die je zaak noemt in een artikel over lokale ondernemers. Een blogger die je product aanraadt. Een forumgebruiker die je aanbeveelt. De vermelding is er, de link ontbreekt.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Dat gebeurt vaker dan je denkt. Journalisten en bloggers schrijven namen zonder eraan te denken een link toe te voegen, of hun redactiesysteem maakt linken omslachtig. Er ligt bij de meeste bedrijven die al een paar jaar bestaan dus een stapel onverzilverde kansen klaar.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Waarom je die wilt verzilveren: links van andere websites blijven een van de sterkste signalen voor autoriteit. En de verhouding tot je merkbekendheid is direct, want hoe vaker je genoemd wordt, hoe meer er te verzilveren valt. Hoe je die bekendheid meet, lees je in ons artikel over <Link to="/blogs/seo/branded-zoekvolume-meten-bekend-merk" className="text-accent hover:underline">branded zoekvolume</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe spoor je vermeldingen op met gratis tools?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De basis is een zoekoperator. Typ in Google je merknaam tussen aanhalingstekens, gevolgd door -site:jouwdomein.nl. De aanhalingstekens dwingen een exacte match af, de min-operator haalt je eigen website uit de resultaten. Wat je ziet is elke geïndexeerde pagina waar jouw naam staat.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Herhaal dat voor varianten: je naam zonder rechtsvorm, met en zonder spaties, veelgemaakte spelfouten en eventueel je productnamen. Sluit ook je eigen sociale profielen uit met extra min-operators, anders vullen die de eerste pagina's.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Zet daarna de monitoring op automatisch met Google Alerts. Maak een alert aan voor elke naamvariant en nieuwe vermeldingen rollen voortaan je inbox binnen. Tijdens linkbuilding-trajecten is dit steevast de eerste afspraak die we inrichten, omdat verse vermeldingen de hoogste kans op een link geven: het artikel is net geschreven en de auteur is nog bereikbaar.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Wil je vollediger zoeken, dan bieden tools zoals Ahrefs Content Explorer en Brand24 gebundelde overzichten inclusief het onderscheid tussen gelinkte en ongelinkte vermeldingen. Handig voor grotere merken, overbodig voor wie net begint.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe maak je van een vermelding een backlink?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Beoordeel eerst of de vermelding een link waard is. Een relevante site met echt publiek: ja. Een spamachtige verzamelpagina: laten liggen, die link wil je niet eens. Kwaliteit boven kwantiteit geldt bij links altijd.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Werk daarna op volgorde van waarde. Een vermelding in een landelijk vakblad of op een autoriteit in jouw branche verdient je eerste mail, de rest volgt daarna. Zo besteed je je tijd aan de links die het verschil maken in plaats van aan tien kleine sites die nauwelijks gewicht toevoegen.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Dan de vraag zelf. Zoek de auteur of redactie op, bedank ze voor de vermelding en vraag of ze er een link van willen maken, met de exacte URL erbij. Kort, vriendelijk en zonder druk. De meeste schrijvers vinden het prima: ze vonden je immers al het noemen waard, en een link toevoegen kost ze een minuut.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Reageert iemand niet? Eén herinnering na een week of twee, daarna loslaten. De vermelding zelf behoudt zijn waarde, en een opdringerige afzender wordt bij het volgende artikel niet meer genoemd.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat zijn vermeldingen waard zonder link?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Meer dan vroeger. Zoekmachines gebruiken vermeldingen als bevestiging dat een merk bestaat en besproken wordt, los van links. En voor AI-modellen zoals ChatGPT en Perplexity zijn tekstvermeldingen zelfs de kern: die systemen leren uit geschreven tekst welke merken in een branche relevant zijn, en een link is daarvoor niet nodig.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Wie vaak en positief genoemd wordt in artikelen, lijstjes en vergelijkingen, duikt vaker op in AI-antwoorden op vragen als "welke partij is goed in X". De jacht op vermeldingen is daarmee ook GEO-werk. Vergeet naast de nieuwe vermeldingen ook de bestaande <Link to="/blogs/seo/broken-links-opsporen-repareren" className="text-accent hover:underline">kapotte links</Link> naar je site niet: een verhuisde pagina waar externe links op stuklopen, is dezelfde gemiste kans in een ander jasje.
                        </p>

                        <p className="text-primary/80 leading-relaxed mb-6">
                            Ongelinkte merkvermeldingen vinden is dus een kwestie van slim zoeken, automatisch monitoren en vriendelijk vragen. Wil je dat wij het volledige plaatje oppakken, van vermeldingen tot autoriteit? Bekijk onze <Link to="/seo" className="text-accent hover:underline">SEO-dienstenpagina</Link> of plan een gratis gesprek via <Link to="/contact" className="text-accent hover:underline">empowers.nl/contact</Link>.
                        </p>

                        <hr className="my-16 border-primary/10" />

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Veelgestelde vragen over ongelinkte merkvermeldingen</h2>

                        <div className="space-y-6 not-prose">
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat is een ongelinkte merkvermelding?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Een ongelinkte merkvermelding is een plek op het web waar jouw bedrijfsnaam, product of domein genoemd wordt zonder dat er een link naar je website bij staat. Denk aan een nieuwsartikel dat je noemt, een blogger die je aanbeveelt of een forum waar je merk voorbijkomt.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoe vind ik ongelinkte merkvermeldingen gratis?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Zoek in Google op je merknaam tussen aanhalingstekens gecombineerd met -site:jouwdomein.nl, zodat je eigen site wegvalt. Stel daarnaast Google Alerts in op je merknaam en varianten, dan krijg je nieuwe vermeldingen automatisch gemaild. Betaalde tools zoals Ahrefs of Brand24 maken het volledig, maar zijn niet verplicht.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Waarom zijn ongelinkte vermeldingen waardevol?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    De schrijver kent je merk al en vond het relevant genoeg om te noemen. Dat maakt de vraag om er een link van te maken de makkelijkste vorm van linkbuilding die er bestaat: de helft van het werk is al gedaan. Bovendien tellen vermeldingen zelf ook mee als merksignaal voor zoekmachines en AI-modellen.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoe vraag ik om een link zonder opdringerig te zijn?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Bedank de schrijver eerst voor de vermelding en vraag daarna vriendelijk of er een link bij kan, met de exacte URL erbij zodat het weinig moeite kost. Houd het kort en persoonlijk. Reageert iemand niet, laat het dan rusten: de vermelding zelf heeft ook zonder link waarde.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Tellen vermeldingen zonder link ook mee voor SEO?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Indirect wel. Zoekmachines gebruiken vermeldingen als signaal dat een merk bestaat en besproken wordt, en AI-modellen leren eruit welke merken in een branche relevant zijn. Een link blijft sterker, maar een consistent genoemd merk bouwt ook zonder links autoriteit op.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoe voorkom ik dat ik vermeldingen mis?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Automatiseer de monitoring. Google Alerts op je merknaam, veelvoorkomende spelfouten en je domeinnaam vangt het meeste op. Plan daarnaast elk kwartaal een handmatige zoekronde, want alerts missen soms vermeldingen op sociale platforms en in oudere artikelen die later pas geïndexeerd worden.
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
                    <h2 className="relative z-10 font-drama italic text-background text-3xl sm:text-4xl md:text-5xl mb-6">Wie noemt jou zonder link?</h2>
                    <p className="relative z-10 font-sans text-background/70 text-lg mb-10 max-w-xl mx-auto">
                        Wij sporen elke vermelding van jouw merk op en zetten ze om in links en autoriteit die je posities versterken.
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
