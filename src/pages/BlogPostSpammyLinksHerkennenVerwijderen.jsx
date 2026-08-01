import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ChevronRight, User } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function BlogPostSpammyLinksHerkennenVerwijderen() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen selection:bg-accent/30 selection:text-dark flex flex-col bg-background">
            <Helmet>
                <title>Spammy links herkennen en verwijderen | Empowers</title>
                <meta name="description" content="Spammy links herken je aan irrelevante sites en vreemde ankerteksten. Lees hoe je je backlinkprofiel controleert en slechte links veilig laat verwijderen." />
                <link rel="canonical" href="https://www.empowers.nl/blogs/seo/spammy-links-herkennen-verwijderen" />
                <meta property="og:title" content="Spammy links herkennen en verwijderen" />
                <meta property="og:description" content="Zo controleer je je backlinkprofiel op spam links en bepaal je of je moet ingrijpen met outreach of de disavow tool." />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://www.empowers.nl/blogs/seo/spammy-links-herkennen-verwijderen" />
                <meta property="og:image" content="https://www.empowers.nl/images/blogs/spammy-links-herkennen-verwijderen.jpg" />
                <meta property="article:published_time" content="2026-08-01T10:00:00+02:00" />
                <meta property="article:author" content="Empowers" />
                <meta property="article:section" content="SEO" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Spammy links herkennen en verwijderen" />
                <meta name="twitter:description" content="Herken spam links in je backlinkprofiel en leer wanneer je ingrijpt met outreach of de disavow tool." />

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@graph": [
                            {
                                "@type": "Article",
                                "headline": "Spammy links herkennen en verwijderen",
                                "description": "Spammy links herken je aan irrelevante sites en vreemde ankerteksten. Lees hoe je je backlinkprofiel controleert en slechte links veilig laat verwijderen.",
                                "image": "https://www.empowers.nl/images/blogs/spammy-links-herkennen-verwijderen.jpg",
                                "datePublished": "2026-08-01T10:00:00+02:00",
                                "author": { "@type": "Organization", "name": "Empowers" },
                                "publisher": {
                                    "@type": "Organization",
                                    "name": "Empowers",
                                    "url": "https://www.empowers.nl",
                                    "logo": { "@type": "ImageObject", "url": "https://www.empowers.nl/empowers-logo-color.svg" }
                                }
                            },
                            {
                                "@type": "BreadcrumbList",
                                "itemListElement": [
                                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.empowers.nl" },
                                    { "@type": "ListItem", "position": 2, "name": "Blogs", "item": "https://www.empowers.nl/blogs" },
                                    { "@type": "ListItem", "position": 3, "name": "SEO", "item": "https://www.empowers.nl/blogs/seo" },
                                    { "@type": "ListItem", "position": 4, "name": "Spammy links herkennen en verwijderen", "item": "https://www.empowers.nl/blogs/seo/spammy-links-herkennen-verwijderen" }
                                ]
                            },
                            {
                                "@type": "FAQPage",
                                "mainEntity": [
                                    {
                                        "@type": "Question",
                                        "name": "Wat zijn spammy links?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Spammy links zijn backlinks van websites zonder echt publiek: linkfarms, scraper sites en dubieuze directories. Ze zijn niet geplaatst om lezers te helpen maar om zoekmachines te manipuleren, en ze worden vaak automatisch gegenereerd zonder dat jij er iets voor deed."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Zijn spammy links schadelijk voor mijn rankings?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Meestal niet. Sinds de Penguin 4.0 update van 2016 devalueert Google slechte links in plaats van je website te straffen. Ze tellen dan simpelweg niet mee. Alleen bij grootschalige, doelbewuste linkmanipulatie kan een handmatige actie volgen, en die zie je terug in Google Search Console."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Hoe vind ik spammy links in mijn backlinkprofiel?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Open het Links rapport in Google Search Console en exporteer je verwijzende domeinen. Betaalde tools zoals Ahrefs en Semrush geven daarnaast kwaliteitsscores per domein. Sorteer op nieuwe verwijzende domeinen en beoordeel handmatig wat er niet thuishoort."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Hoe werkt de disavow tool van Google?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Met de disavow tool upload je een tekstbestand met domeinen die Google moet negeren bij het beoordelen van jouw site. Je vindt de tool in Google Search Console. Gebruik hem alleen bij een handmatige actie of een duidelijk vervuild linkprofiel, want verkeerd gebruik kan ook goede links uitschakelen."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Kan een concurrent mijn site schaden met spam links?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Dat heet negative SEO en het werkt in de praktijk zelden. Google herkent plotselinge golven spam links en negeert ze vrijwel altijd. Zie je een verdachte piek in je backlinks, documenteer het dan en grijp pas in als je ook echt een handmatige actie of rankingdaling ziet."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Hoe vaak moet ik mijn backlinkprofiel controleren?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Eén keer per kwartaal is voor de meeste websites genoeg. Kocht je in het verleden links of zit je in een competitieve branche, kijk dan maandelijks. Het kost je hooguit een half uur en je voorkomt dat een probleem maandenlang onopgemerkt blijft."
                                        }
                                    }
                                ]
                            }
                        ]
                    })}
                </script>
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
                        <span className="text-primary truncate">Spammy links herkennen en verwijderen</span>
                    </nav>

                    {/* Header */}
                    <header className="mb-16">
                        <div className="inline-block px-3 py-1 bg-accent/10 text-accent font-mono text-xs uppercase tracking-widest rounded-full mb-6">
                            SEO
                        </div>
                        <h1 className="font-sans font-bold text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight mb-8">
                            Spammy links herkennen en verwijderen
                        </h1>
                        <div className="flex flex-wrap items-center gap-6 text-sm font-sans text-primary/60 border-y border-primary/10 py-6">
                            <div className="flex items-center gap-2"><User className="w-4 h-4" /><span>Empowers Redactie</span></div>
                            <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>1 augustus 2026</span></div>
                            <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>7 minuten leestijd</span></div>
                        </div>
                    </header>

                    {/* Featured Image */}
                    <figure className="w-full h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden mb-16 relative bg-primary">
                        <div className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-overlay" style={{ backgroundImage: "url('/images/blogs/spammy-links-herkennen-verwijderen.jpg')" }}></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </figure>

                    {/* Content */}
                    <div className="prose prose-lg max-w-none prose-headings:text-primary prose-headings:font-bold prose-a:text-accent prose-a:underline hover:prose-a:text-accent/80">
                        <p className="text-xl leading-relaxed text-primary/80 font-medium mb-6">
                            Spammy links herken je aan de afzender: een website zonder echt publiek, met gekopieerde teksten en tientallen uitgaande links naar sites die niets met elkaar te maken hebben. Verwijderen doe je door de eigenaar aan te schrijven of, bij een vervuild profiel, via de disavow tool van Google. Het goede nieuws: in de meeste gevallen negeert Google deze links en hoef jij niets te doen.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat zijn spammy links precies?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een spammy link is een backlink die niet bestaat om lezers verder te helpen, maar om zoekmachines te manipuleren. Denk aan linkfarms: netwerken van websites die alleen bestaan om links te verkopen. Of scraper sites die jouw content automatisch kopiëren en daarbij per ongeluk naar je linken.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Ook obscure webdirectories horen in dit rijtje. Net als reactiespam onder blogposts en profielpagina's op fora waar nooit iemand komt. Het overgrote deel van deze links ontstaat automatisch, zonder dat jij er iets voor deed. Vrijwel elke website die een paar jaar bestaat, verzamelt dit soort ruis in het backlinkprofiel.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe herken je een spammy link?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Open de linkende pagina en stel jezelf één vraag: zou een echt mens deze pagina lezen? Bij spam is het antwoord direct duidelijk. De site heeft geen herkenbare afzender. De teksten zijn machinaal vertaald of aan elkaar geplakt. En op één pagina staan soms honderden uitgaande links naar casino's, kredietverstrekkers en webshops door elkaar.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Kijk daarnaast naar de ankertekst. Natuurlijke links gebruiken meestal je merknaam of een zin als "lees hier meer". Spam links gebruiken opvallend vaak exacte commerciële zoekwoorden of, vreemder nog, ankerteksten in een taal die niets met jouw site te maken heeft. Een derde signaal is timing: tientallen nieuwe verwijzende domeinen in een week, terwijl je niets publiceerde, is vrijwel nooit organisch.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe schadelijk zijn spammy links voor je rankings?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Minder dan de meeste ondernemers denken. Sinds de Penguin 4.0 update van 2016 devalueert Google slechte links in plaats van je hele website te straffen. Een spam link telt dan simpelweg niet mee, positief noch negatief. Google heeft daarnaast meerdere keren aangegeven dat het linkspam op grote schaal herkent en negeert.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Er is één belangrijke uitzondering: de handmatige actie. Als een medewerker van Google vaststelt dat jouw site doelbewust op grote schaal links kocht of ruilde, krijg je een melding "onnatuurlijke links" in Google Search Console. Dan moet je wel ingrijpen. Maar zonder die melding is paniek zelden nodig. Ondernemers sturen ons geregeld een verontrust mailtje na het zien van een lijst rare backlinks in hun tooling, en in bijna alle gevallen kunnen die links gewoon blijven staan.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe vind je spammy links in je backlinkprofiel?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Begin bij Google Search Console. Onder Links zie je welke domeinen naar je verwijzen en welke pagina's de meeste links krijgen. Dit rapport is gratis en komt rechtstreeks uit de bron. Exporteer de lijst met verwijzende domeinen en loop hem door. Alles wat je niet herkent, controleer je even handmatig.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Wil je meer detail, dan helpen betaalde tools zoals Ahrefs en Semrush. Die tonen per domein een kwaliteitsindicatie en laten zien wanneer een link verscheen. Handig om te weten: elke tool berekent zulke scores anders, dus behandel ze als hulpmiddel en niet als eindoordeel. Een lage score op een verder normale, relevante website is geen reden om in actie te komen. Hoe een gezond linkprofiel eruitziet, lees je in onze <Link to="/blogs/seo/strategieen-kwalitatieve-backlinks" className="text-accent hover:underline">blog over strategieën voor kwalitatieve backlinks</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe krijg je spammy links verwijderd?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De nette route is outreach: zoek het contactadres van de linkende site en vraag of de link weg kan. Reken alleen niet op veel respons. Spam sites hebben zelden een werkend contactformulier en de eigenaar heeft geen enkel belang bij jouw verzoek. Verstuur je verzoeken toch, bewaar dan screenshots en datums. Die documentatie heb je nodig als je ooit een reconsideration request bij Google indient na een handmatige actie.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Lukt verwijderen niet, dan is dat meestal geen ramp. Een link die Google toch al negeert, hoeft niet fysiek van het internet. De vraag is niet of je elke rare link kunt opruimen, maar of het linkprofiel als geheel gezond blijft. Daar stuur je op met eigen sterke content en verdiende links, niet met eindeloos schoonmaken.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wanneer gebruik je de disavow tool van Google?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De disavow tool in Google Search Console laat je een tekstbestand uploaden met domeinen die Google moet negeren bij het beoordelen van jouw site. Klinkt als de perfecte oplossing, maar Google zelf raadt het gebruik alleen aan in twee situaties: je hebt een handmatige actie wegens onnatuurlijke links, of je weet zeker dat er in het verleden op grote schaal links zijn gekocht voor jouw domein.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Buiten die gevallen kan de tool meer kwaad dan goed doen. Wie te enthousiast domeinen disavowt, schakelt ook links uit die wél waarde doorgeven. Het gebeurt regelmatig dat waardevolle nichewebsites op zo'n lijst belanden, puur omdat een tool er een lage score aan gaf. Twijfel je, laat dan eerst iemand met ervaring meekijken voordat je het bestand uploadt. Een <Link to="/seo" className="text-accent hover:underline">SEO-specialist</Link> beoordeelt binnen een uur of ingrijpen echt nodig is.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe voorkom je dat je backlinkprofiel vervuilt?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Helemaal voorkomen kan niet, want spam links ontstaan buiten jouw invloed. Wat wel werkt: een vaste controle per kwartaal, zodat een verdachte piek nooit maanden onopgemerkt blijft. En vooral: blijf zelf bouwen aan links die er wel toe doen. Een profiel met sterke, relevante backlinks maakt de ruis eromheen betekenisloos. Hoe lang dat opbouwen duurt, lees je in onze <Link to="/blogs/seo/hoe-lang-duurt-linkbuilding-resultaat" className="text-accent hover:underline">blog over linkbuilding resultaat</Link>.
                        </p>

                        <p className="text-primary/80 leading-relaxed mb-6">
                            Twijfel je of jouw backlinkprofiel gezond is? We lopen hem gratis met je door en vertellen eerlijk of ingrijpen nodig is. Plan een gesprek via onze <Link to="/contact" className="text-accent hover:underline">contactpagina</Link>.
                        </p>
                    </div>

                    {/* FAQ Section */}
                    <section className="mt-16 pt-12 border-t border-primary/10">
                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Veelgestelde vragen</h2>
                        <div className="space-y-6 not-prose">
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat zijn spammy links?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Spammy links zijn backlinks van websites zonder echt publiek: linkfarms, scraper sites en dubieuze directories. Ze zijn niet geplaatst om lezers te helpen maar om zoekmachines te manipuleren, en ze worden vaak automatisch gegenereerd zonder dat jij er iets voor deed.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Zijn spammy links schadelijk voor mijn rankings?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Meestal niet. Sinds de Penguin 4.0 update van 2016 devalueert Google slechte links in plaats van je website te straffen. Ze tellen dan simpelweg niet mee. Alleen bij grootschalige, doelbewuste linkmanipulatie kan een handmatige actie volgen, en die zie je terug in Google Search Console.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoe vind ik spammy links in mijn backlinkprofiel?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Open het Links rapport in Google Search Console en exporteer je verwijzende domeinen. Betaalde tools zoals Ahrefs en Semrush geven daarnaast kwaliteitsscores per domein. Sorteer op nieuwe verwijzende domeinen en beoordeel handmatig wat er niet thuishoort.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoe werkt de disavow tool van Google?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Met de disavow tool upload je een tekstbestand met domeinen die Google moet negeren bij het beoordelen van jouw site. Je vindt de tool in Google Search Console. Gebruik hem alleen bij een handmatige actie of een duidelijk vervuild linkprofiel, want verkeerd gebruik kan ook goede links uitschakelen.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Kan een concurrent mijn site schaden met spam links?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Dat heet negative SEO en het werkt in de praktijk zelden. Google herkent plotselinge golven spam links en negeert ze vrijwel altijd. Zie je een verdachte piek in je backlinks, documenteer het dan en grijp pas in als je ook echt een handmatige actie of rankingdaling ziet.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoe vaak moet ik mijn backlinkprofiel controleren?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Eén keer per kwartaal is voor de meeste websites genoeg. Kocht je in het verleden links of zit je in een competitieve branche, kijk dan maandelijks. Het kost je hooguit een half uur en je voorkomt dat een probleem maandenlang onopgemerkt blijft.</p>
                            </div>
                        </div>
                    </section>

                    {/* Related Links */}
                    <section className="mt-16 pt-12 border-t border-primary/10">
                        <h3 className="text-xl font-bold text-primary mb-6">Lees ook</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <Link to="/blogs/seo/strategieen-kwalitatieve-backlinks" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">5 strategieën voor kwalitatieve backlinks</h3>
                                <p className="text-primary/60 text-sm">Zo bouw je aan links die wel waarde doorgeven.</p>
                            </Link>
                            <Link to="/blogs/seo/backlinks-vs-interne-links-waardevoller" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Backlinks vs interne links</h3>
                                <p className="text-primary/60 text-sm">Wat is waardevoller voor je SEO?</p>
                            </Link>
                            <Link to="/blogs/seo/hoe-lang-duurt-linkbuilding-resultaat" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Hoe lang duurt linkbuilding?</h3>
                                <p className="text-primary/60 text-sm">Wanneer zie je resultaat van je linkprofiel?</p>
                            </Link>
                        </div>
                    </section>
                </div>
            </article>

            {/* Bottom CTA */}
            <section className="w-full pb-32 px-6">
                <div className="max-w-4xl mx-auto bg-primary rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
                    <h2 className="relative z-10 font-drama italic text-background text-3xl sm:text-4xl md:text-5xl mb-6">Is jouw linkprofiel gezond?</h2>
                    <p className="relative z-10 font-sans text-background/70 text-lg mb-10 max-w-xl mx-auto">We controleren je backlinkprofiel gratis en vertellen eerlijk of ingrijpen nodig is. Geen paniekverhaal, wel een helder advies.</p>
                    <Link to="/contact" className="relative z-10 btn-magnetic inline-flex items-center justify-center bg-accent text-background font-sans font-bold text-lg px-10 py-4 rounded-[2rem] hover:bg-accent/90 transition-colors">Neem contact op</Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
