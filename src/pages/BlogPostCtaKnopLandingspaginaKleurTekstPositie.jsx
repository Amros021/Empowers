import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ChevronRight, User } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function BlogPostCtaKnopLandingspaginaKleurTekstPositie() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen selection:bg-accent/30 selection:text-dark flex flex-col bg-background">
            <Helmet>
                <title>CTA knoppen op landingspaginas: kleur, tekst en positie | Empowers</title>
                <meta name="description" content="CTA knoppen bepalen of bezoekers doorklikken of afhaken. Lees welke kleur, tekst en positie werken op jouw landingspagina en hoe je knoppen test." />
                <link rel="canonical" href="https://www.empowers.nl/blogs/strategie/cta-knop-landingspagina-kleur-tekst-positie" />
                <meta property="og:title" content="CTA knoppen op landingspaginas: kleur, tekst en positie | Empowers" />
                <meta property="og:description" content="CTA knoppen bepalen of bezoekers doorklikken of afhaken. Lees welke kleur, tekst en positie werken op jouw landingspagina en hoe je knoppen test." />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://www.empowers.nl/blogs/strategie/cta-knop-landingspagina-kleur-tekst-positie" />
                <meta property="og:image" content="https://www.empowers.nl/images/blogs/cta-knop-landingspagina-kleur-tekst-positie.jpg" />
                <meta property="article:published_time" content="2026-07-14T12:00:00+02:00" />
                <meta property="article:author" content="Empowers" />
                <meta property="article:section" content="Strategie" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="CTA knoppen op landingspaginas: kleur, tekst en positie | Empowers" />
                <meta name="twitter:description" content="CTA knoppen bepalen of bezoekers doorklikken of afhaken. Lees welke kleur, tekst en positie werken op jouw landingspagina en hoe je knoppen test." />
                <script type="application/ld+json">{JSON.stringify({
                    "@context": "https://schema.org",
                    "@graph": [
                        {
                            "@type": "Article",
                            "headline": "CTA knoppen op landingspaginas: kleur, tekst en positie",
                            "image": "https://www.empowers.nl/images/blogs/cta-knop-landingspagina-kleur-tekst-positie.jpg",
                            "description": "CTA knoppen bepalen of bezoekers doorklikken of afhaken. Lees welke kleur, tekst en positie werken op jouw landingspagina en hoe je knoppen test.",
                            "author": { "@type": "Organization", "name": "Empowers" },
                            "publisher": { "@type": "Organization", "name": "Empowers", "url": "https://www.empowers.nl" },
                            "datePublished": "2026-07-14T12:00:00+02:00",
                            "dateModified": "2026-07-14T12:00:00+02:00",
                            "url": "https://www.empowers.nl/blogs/strategie/cta-knop-landingspagina-kleur-tekst-positie"
                        },
                        {
                            "@type": "BreadcrumbList",
                            "itemListElement": [
                                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.empowers.nl" },
                                { "@type": "ListItem", "position": 2, "name": "Nieuws", "item": "https://www.empowers.nl/nieuws" },
                                { "@type": "ListItem", "position": 3, "name": "Strategie", "item": "https://www.empowers.nl/blogs/strategie" },
                                { "@type": "ListItem", "position": 4, "name": "CTA knoppen op landingspaginas: kleur, tekst en positie", "item": "https://www.empowers.nl/blogs/strategie/cta-knop-landingspagina-kleur-tekst-positie" }
                            ]
                        },
                        {
                            "@type": "FAQPage",
                            "mainEntity": [
                                { "@type": "Question", "name": "Welke kleur converteert het best voor een CTA knop?", "acceptedAnswer": { "@type": "Answer", "text": "Er bestaat geen magische kleur. Wat telt is contrast: de knop moet als enige element op de pagina om aandacht vragen. Op een blauwe pagina wint oranje, op een oranje pagina wint blauw. Kies een kleur die nergens anders op de pagina voorkomt en die genoeg afsteekt tegen de achtergrond." } },
                                { "@type": "Question", "name": "Wat is een goede tekst voor een CTA knop?", "acceptedAnswer": { "@type": "Answer", "text": "Een tekst die beschrijft wat de bezoeker krijgt, niet wat hij moet doen. Vergelijk 'verstuur' met 'ontvang mijn offerte'. De tweede benoemt de beloning. Schrijven vanuit de eerste persoon, zoals 'plan mijn gesprek', werkt vaak net iets beter omdat het als eigen keuze voelt." } },
                                { "@type": "Question", "name": "Moet een CTA knop boven de vouw staan?", "acceptedAnswer": { "@type": "Answer", "text": "Ja, er hoort een knop in het eerste scherm, maar niet alleen daar. Bezoekers converteren op het moment dat ze overtuigd zijn, en dat moment verschilt per persoon. Herhaal de knop daarom na elk blok dat een twijfel wegneemt, tot en met het einde van de pagina." } },
                                { "@type": "Question", "name": "Hoeveel CTA knoppen mag een landingspagina hebben?", "acceptedAnswer": { "@type": "Answer", "text": "Meerdere knoppen, maar één actie. Drie of vier knoppen verspreid over de pagina is prima, zolang ze allemaal naar dezelfde conversie leiden. Wat je wilt vermijden zijn concurrerende acties naast elkaar, zoals downloaden én bellen én een demo aanvragen. Kiezen wordt dan uitstellen." } },
                                { "@type": "Question", "name": "Werkt een tekstlink net zo goed als een knop?", "acceptedAnswer": { "@type": "Answer", "text": "Meestal niet. Een knop is visueel herkenbaar als actie-element, een tekstlink verdwijnt in de lopende tekst. Op mobiel komt daar het duimformaat bij: een knop met ruime klikruimte is makkelijker te raken dan een regel tekst. Gebruik tekstlinks als aanvulling, nooit als hoofdactie." } },
                                { "@type": "Question", "name": "Moet mijn CTA knop er op mobiel anders uitzien?", "acceptedAnswer": { "@type": "Answer", "text": "In opzet niet, in maat wel. Op mobiel mag de knop de volle breedte van het scherm pakken en moet hij dik genoeg zijn voor een duim. Houd ruimte vrij rondom, zodat een scrollende duim hem niet per ongeluk raakt, en zorg dat de belangrijkste knop binnen het eerste scherm zichtbaar is." } }
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
                        <span className="text-primary truncate">CTA knoppen</span>
                    </nav>

                    {/* Header */}
                    <header className="mb-16">
                        <div className="inline-block px-3 py-1 bg-accent/10 text-accent font-mono text-xs uppercase tracking-widest rounded-full mb-6">
                            Strategie
                        </div>
                        <h1 className="font-sans font-bold text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight mb-8">
                            CTA knoppen op landingspaginas: kleur, tekst en positie
                        </h1>

                        <div className="flex flex-wrap items-center gap-6 text-sm font-sans text-primary/60 border-y border-primary/10 py-6">
                            <div className="flex items-center gap-2">
                                <User className="w-4 h-4" />
                                <span>Empowers Redactie</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>14 juli 2026</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>6 minuten leestijd</span>
                            </div>
                        </div>
                    </header>

                    {/* Featured Image */}
                    <figure className="w-full h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden mb-16 relative bg-primary">
                        <div className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-overlay" style={{backgroundImage: "url('/images/blogs/cta-knop-landingspagina-kleur-tekst-positie.jpg')"}}></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </figure>

                    {/* Content */}
                    <div className="prose prose-lg prose-headings:font-sans prose-headings:font-bold prose-headings:text-primary prose-p:font-sans prose-p:text-primary/80 prose-p:leading-relaxed max-w-none">
                        <p className="text-xl md:text-2xl font-medium leading-relaxed mb-10 text-primary">
                            Een goede CTA knop valt op door contrast, belooft iets concreets en staat op elk moment in beeld waarop een bezoeker overtuigd kan raken. Kleur is daarbij minder belangrijk dan iedereen denkt, tekst belangrijker dan iedereen denkt. En de positie bepaalt of je knop überhaupt een kans krijgt.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Waarom zijn CTA knoppen zo bepalend voor je conversie?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De knop is het scharnier van je hele pagina. Alles wat erboven staat heeft maar één taak: de bezoeker klaar maken voor die ene klik. Faalt de knop, dan was al het werk ervoor voor niets.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Toch krijgt dit element vaak de minste aandacht. Er wordt weken geschaafd aan teksten en beelden, en de knop wordt op de laatste dag ingevuld met "verstuur". Zonde, want juist hier zijn kleine aanpassingen direct meetbaar.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een bezoeker die klikt, neemt een besluit. Elke onduidelijkheid op dat moment, over wat er gebeurt of wat het kost, is een reden om het besluit uit te stellen. En uitgesteld is op internet meestal afgesteld.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Reken het maar eens door. Stel dat je pagina duizend bezoekers per maand krijgt en drie procent daarvan vraagt een offerte aan. Dat zijn dertig aanvragen. Stijgt dat percentage door een betere knop naar vier procent, dan heb je er tien aanvragen per maand bij, zonder één euro extra advertentiebudget. Er zijn weinig plekken op je website die zoveel teruggeven voor zo weinig werk.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Welke kleur werkt het best voor een CTA knop?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De eerlijke waarheid: er is geen winnende kleur. Rood verslaat groen op de ene pagina, groen verslaat rood op de andere. Wat telt is contrast met de rest van je pagina. De knop moet het enige element zijn dat om aandacht schreeuwt.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Praktische regel: kies een kleur die nergens anders op de pagina voorkomt. Gebruik je huisstijlkleur overal in koppen en accenten, dan is diezelfde kleur voor je knop juist een slechte keuze. Hij lost op in het geheel.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Denk ook aan de omgeving van de knop. Witruimte is de stilste versterker die er bestaat: ruimte rond de knop maakt hem zwaarder dan welke kleur ook. Een knop die klem staat tussen tekstblokken en afbeeldingen verliest het gevecht om aandacht, hoe fel je hem ook maakt.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Hoe kleuren gevoelsmatig doorwerken op je bezoekers lees je in ons artikel over <Link to="/blogs/strategie/kleurpsychologie-landingspagina-conversie" className="text-accent hover:underline">kleurpsychologie op je landingspagina</Link>. Maar onthoud de volgorde: eerst contrast, dan pas psychologie.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat zet je op de knop: welke tekst converteert?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Beschrijf de beloning, niet de handeling. "Verstuur" beschrijft wat het formulier doet. "Ontvang mijn prijsopgave" beschrijft wat de bezoeker krijgt. Dat tweede perspectief wint, omdat mensen klikken voor zichzelf en niet voor jouw formulier.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De eerste persoon versterkt dat effect: "plan mijn gesprek" voelt als een eigen keuze, "plan een gesprek" als een instructie. Klein verschil in taal, merkbaar verschil in gedrag.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Haal ook de angel uit de klik. Woorden als gratis, vrijblijvend of "binnen één werkdag reactie" onder of op de knop verlagen de drempel. Meer over sterke actieteksten lees je in ons artikel over <Link to="/blogs/strategie/cta-tekst-schrijven-mensen-aanzet" className="text-accent hover:underline">CTA-teksten schrijven die aanzetten tot actie</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Waar plaats je de knop op je landingspagina?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            In elk geval in het eerste scherm. Een deel van je bezoekers is al overtuigd voordat ze landen, bijvoorbeeld omdat je advertentie het werk al deed. Die groep moet meteen kunnen klikken. Waarom dat eerste scherm zo zwaar weegt lees je in ons artikel over <Link to="/blogs/strategie/above-the-fold-waarom-eerste" className="text-accent hover:underline">above the fold</Link>.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Daarna herhaal je de knop na elk overtuigend blok: na je bewijs, na je uitleg, na je veelgestelde vragen. Overtuiging heeft geen vast moment, dus de uitnodiging moet er ook geen hebben.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Op mobiel telt extra: maak de knop groot genoeg voor een duim en zet hem niet vlak naast andere klikbare elementen. Een misklik voelt voor de bezoeker als een fout van jouw pagina, niet van zijn duim.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Overweeg op lange mobiele pagina's een knop die meescrolt onderin beeld. Zo is de actie altijd binnen duimbereik, hoe ver iemand ook leest. Houd hem wel bescheiden van formaat, want een balk die het halve scherm opeist irriteert meer dan hij oplevert.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe test je of je CTA knop beter kan?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Meet eerst hoe de knop nu presteert. Hoeveel procent van je bezoekers klikt erop, en waar op de pagina gebeurt dat? Heatmaps en klikkaarten maken dat in een middag inzichtelijk.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Test daarna één verandering tegelijk, te beginnen bij de tekst. Knopteksten zijn de snelste winst: makkelijk aan te passen en direct zichtbaar in de cijfers. Kleur en positie volgen daarna.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Hoe je zo'n vergelijking eerlijk opzet, van hypothese tot conclusie, lees je in ons stappenplan voor <Link to="/blogs/strategie/ab-testen-landingspagina-stap-voor-stap" className="text-accent hover:underline">A/B-testen op je landingspagina</Link>.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Verwacht geen wonderen van elke afzonderlijke test. Soms wint de nieuwe knop ruim, vaker is het verschil bescheiden. Maar kleine verbeteringen stapelen zich op: wie elk kwartaal een procentpunt wint, heeft binnen een jaar een pagina die aantoonbaar meer oplevert dan die van de concurrent die nooit test.
                        </p>

                        <p className="text-primary/80 leading-relaxed mb-6">
                            Contrast dat opvalt, tekst die beloont en een positie die meereist met de twijfel van je bezoeker: daar wint de knop. Benieuwd hoeveel er in jouw pagina zit? We rekenen het graag met je door. Plan een gratis gesprek via <Link to="/contact" className="text-accent hover:underline">empowers.nl/contact</Link>.
                        </p>

                        <hr className="my-16 border-primary/10" />

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Veelgestelde vragen over CTA knoppen</h2>

                        <div className="space-y-6 not-prose">
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Welke kleur converteert het best voor een CTA knop?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Er bestaat geen magische kleur. Wat telt is contrast: de knop moet als enige element op de pagina om aandacht vragen. Op een blauwe pagina wint oranje, op een oranje pagina wint blauw. Kies een kleur die nergens anders op de pagina voorkomt en die genoeg afsteekt tegen de achtergrond.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat is een goede tekst voor een CTA knop?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Een tekst die beschrijft wat de bezoeker krijgt, niet wat hij moet doen. Vergelijk 'verstuur' met 'ontvang mijn offerte'. De tweede benoemt de beloning. Schrijven vanuit de eerste persoon, zoals 'plan mijn gesprek', werkt vaak net iets beter omdat het als eigen keuze voelt.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Moet een CTA knop boven de vouw staan?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Ja, er hoort een knop in het eerste scherm, maar niet alleen daar. Bezoekers converteren op het moment dat ze overtuigd zijn, en dat moment verschilt per persoon. Herhaal de knop daarom na elk blok dat een twijfel wegneemt, tot en met het einde van de pagina.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoeveel CTA knoppen mag een landingspagina hebben?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Meerdere knoppen, maar één actie. Drie of vier knoppen verspreid over de pagina is prima, zolang ze allemaal naar dezelfde conversie leiden. Wat je wilt vermijden zijn concurrerende acties naast elkaar, zoals downloaden én bellen én een demo aanvragen. Kiezen wordt dan uitstellen.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Werkt een tekstlink net zo goed als een knop?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Meestal niet. Een knop is visueel herkenbaar als actie-element, een tekstlink verdwijnt in de lopende tekst. Op mobiel komt daar het duimformaat bij: een knop met ruime klikruimte is makkelijker te raken dan een regel tekst. Gebruik tekstlinks als aanvulling, nooit als hoofdactie.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Moet mijn CTA knop er op mobiel anders uitzien?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    In opzet niet, in maat wel. Op mobiel mag de knop de volle breedte van het scherm pakken en moet hij dik genoeg zijn voor een duim. Houd ruimte vrij rondom, zodat een scrollende duim hem niet per ongeluk raakt, en zorg dat de belangrijkste knop binnen het eerste scherm zichtbaar is.
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
                    <h2 className="relative z-10 font-drama italic text-background text-3xl sm:text-4xl md:text-5xl mb-6">Meer klikken uit dezelfde bezoekers?</h2>
                    <p className="relative z-10 font-sans text-background/70 text-lg mb-10 max-w-xl mx-auto">
                        Wij vinden de knoppen, teksten en posities die jouw pagina laten converteren. Onderbouwd met tests, niet met meningen.
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
