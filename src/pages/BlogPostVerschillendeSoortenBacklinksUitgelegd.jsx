import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ChevronRight, User } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function BlogPostVerschillendeSoortenBacklinksUitgelegd() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen selection:bg-accent/30 selection:text-dark flex flex-col bg-background">
            <Helmet>
                <title>De verschillende soorten backlinks uitgelegd | Empowers</title>
                <meta name="description" content="Backlinks bestaan in soorten: dofollow, nofollow, sponsored en ugc. Lees welke links waarde doorgeven voor SEO en welke je beter kunt laten liggen." />
                <link rel="canonical" href="https://www.empowers.nl/blogs/seo/verschillende-soorten-backlinks-uitgelegd" />
                <meta property="og:title" content="De verschillende soorten backlinks uitgelegd" />
                <meta property="og:description" content="Van dofollow tot sponsored: dit zijn de soorten backlinks, zo herken je ze en dit betekenen ze voor je rankings." />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://www.empowers.nl/blogs/seo/verschillende-soorten-backlinks-uitgelegd" />
                <meta property="og:image" content="https://www.empowers.nl/images/blogs/verschillende-soorten-backlinks-uitgelegd.jpg" />
                <meta property="article:published_time" content="2026-08-01T15:00:00+02:00" />
                <meta property="article:author" content="Empowers" />
                <meta property="article:section" content="SEO" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="De verschillende soorten backlinks uitgelegd" />
                <meta name="twitter:description" content="Dofollow, nofollow, sponsored en ugc: dit betekenen de soorten backlinks voor je SEO." />

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@graph": [
                            {
                                "@type": "Article",
                                "headline": "De verschillende soorten backlinks uitgelegd",
                                "description": "Backlinks bestaan in soorten: dofollow, nofollow, sponsored en ugc. Lees welke links waarde doorgeven voor SEO en welke je beter kunt laten liggen.",
                                "image": "https://www.empowers.nl/images/blogs/verschillende-soorten-backlinks-uitgelegd.jpg",
                                "datePublished": "2026-08-01T15:00:00+02:00",
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
                                    { "@type": "ListItem", "position": 4, "name": "De verschillende soorten backlinks uitgelegd", "item": "https://www.empowers.nl/blogs/seo/verschillende-soorten-backlinks-uitgelegd" }
                                ]
                            },
                            {
                                "@type": "FAQPage",
                                "mainEntity": [
                                    {
                                        "@type": "Question",
                                        "name": "Wat is het verschil tussen dofollow en nofollow backlinks?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Een dofollow link geeft autoriteit door aan de ontvangende pagina en telt volop mee voor je rankings. Een nofollow link heeft het attribuut rel=nofollow, waarmee de linkende site aangeeft dat Google de link niet hoeft te volgen. Sinds 2020 behandelt Google nofollow als een hint, niet als een verbod."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Wat betekenen rel=sponsored en rel=ugc?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Google introduceerde beide attributen in 2019. Met rel=sponsored markeer je betaalde of gesponsorde links, zoals advertenties en affiliate links. Met rel=ugc markeer je links uit user generated content, zoals reacties en forumberichten. Zo begrijpt Google de context van een link beter."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Welke soort backlink is het meest waardevol?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Een redactionele dofollow link vanaf een relevante website met eigen autoriteit. Dat is een link die een redactie of blogger vrijwillig plaatst omdat jouw content het waard is. Zulke links zijn lastig te krijgen en juist daarom weegt Google ze het zwaarst."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Hebben nofollow links dan geen enkele waarde?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Ze hebben wel degelijk waarde. Google kan nofollow links sinds 2020 meenemen als hint, en ze brengen bezoekers en naamsbekendheid op die vaak weer tot nieuwe links leiden. Een vermelding op een druk bezochte nieuwssite met nofollow link levert indirect meer op dan een dofollow link op een site zonder bezoekers."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Zijn gekochte backlinks tegen de regels?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Betaalde links die autoriteit doorgeven zonder rel=sponsored of rel=nofollow markering zijn in strijd met de spamrichtlijnen van Google. Wie op grote schaal links koopt, riskeert een handmatige actie. Betaalde vermeldingen mogen wel, mits ze correct gemarkeerd zijn."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Hoeveel backlinks heb ik nodig om te ranken?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Daar bestaat geen vast getal voor. Het hangt af van de concurrentie op jouw zoekwoorden. Voor een lokale nichemarkt kan een handvol sterke links genoeg zijn, terwijl competitieve landelijke zoekwoorden vaak tientallen verwijzende domeinen vragen. Kwaliteit en relevantie wegen zwaarder dan aantallen."
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
                        <span className="text-primary truncate">De verschillende soorten backlinks uitgelegd</span>
                    </nav>

                    {/* Header */}
                    <header className="mb-16">
                        <div className="inline-block px-3 py-1 bg-accent/10 text-accent font-mono text-xs uppercase tracking-widest rounded-full mb-6">
                            SEO
                        </div>
                        <h1 className="font-sans font-bold text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight mb-8">
                            De verschillende soorten backlinks uitgelegd
                        </h1>
                        <div className="flex flex-wrap items-center gap-6 text-sm font-sans text-primary/60 border-y border-primary/10 py-6">
                            <div className="flex items-center gap-2"><User className="w-4 h-4" /><span>Empowers Redactie</span></div>
                            <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>1 augustus 2026</span></div>
                            <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>8 minuten leestijd</span></div>
                        </div>
                    </header>

                    {/* Featured Image */}
                    <figure className="w-full h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden mb-16 relative bg-primary">
                        <div className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-overlay" style={{ backgroundImage: "url('/images/blogs/verschillende-soorten-backlinks-uitgelegd.jpg')" }}></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </figure>

                    {/* Content */}
                    <div className="prose prose-lg max-w-none prose-headings:text-primary prose-headings:font-bold prose-a:text-accent prose-a:underline hover:prose-a:text-accent/80">
                        <p className="text-xl leading-relaxed text-primary/80 font-medium mb-6">
                            Backlinks bestaan in vier technische soorten: dofollow, nofollow, sponsored en ugc. Alleen dofollow links geven volledige autoriteit door aan jouw website. Daarnaast verschillen links in herkomst, van redactionele vermeldingen tot forumreacties. Voor je rankings telt vooral de combinatie: een vrijwillig geplaatste dofollow link vanaf een relevante, betrouwbare site is de zwaarste categorie.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat is een backlink eigenlijk?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een backlink is een link op een andere website die naar jouw website verwijst. Google ziet zo'n link als een aanbeveling. Hoe meer betrouwbare websites naar jou verwijzen, hoe meer autoriteit jouw domein opbouwt. Dat principe zit al sinds het begin in het hart van de zoekmachine.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Maar niet elke link telt even zwaar. Google kijkt naar de kwaliteit van de linkende site en de relevantie van de context. Ook de technische markering van de link zelf telt mee. Die markering, het rel-attribuut, bepaalt of een link autoriteit doorgeeft of niet. Daar begint elk gesprek over soorten backlinks.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat is het verschil tussen dofollow en nofollow?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een dofollow link is de standaard. Elke gewone link zonder speciaal attribuut is dofollow en geeft autoriteit door aan de pagina waar hij naartoe wijst. De term is trouwens informeel: er bestaat geen rel="dofollow" in de code. Het is simpelweg de afwezigheid van een beperking.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een nofollow link draagt het attribuut rel="nofollow". Daarmee zegt de linkende website tegen zoekmachines: volg deze link niet en reken hem niet mee. Google introduceerde het attribuut in 2005 om reactiespam onder blogs te ontmoedigen. Jarenlang was nofollow een harde regel. Sinds 2020 behandelt Google het als een hint: de zoekmachine mag zelf beslissen of de link toch iets waard is.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Betekent dat dat nofollow links waardeloos zijn? Nee. Een nofollow link op een drukbezochte nieuwssite brengt bezoekers, en die bezoekers linken soms later zelf vanaf hun eigen site. Zo groeit je profiel alsnog. Wie alleen op dofollow jaagt, kijkt te smal.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat betekenen rel=sponsored en rel=ugc?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            In 2019 voegde Google twee nieuwe attributen toe. Met rel="sponsored" markeer je links waar een commerciële afspraak achter zit: advertenties, gesponsorde artikelen en affiliate links. Met rel="ugc" markeer je links uit user generated content, dus reacties onder artikelen en berichten op fora.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Voor jou als ontvanger van een link maakt het verschil vooral in verwachting. Een sponsored link geeft geen autoriteit door en dat hoort ook zo, want de link is gekocht. Een ugc link weegt licht. Zie je in je backlinkprofiel veel ugc links staan, dan is dat op zichzelf geen probleem. Het wordt pas een probleem als dat de enige soort is die erbij komt.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Welke soorten backlinks zijn het meest waardevol?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De koningsklasse is de redactionele link: een journalist, blogger of vakwebsite verwijst uit eigen beweging naar jouw content omdat die iets toevoegt. Zulke links kun je niet bestellen. Je verdient ze met eigen data, een sterk verhaal of een pagina die een vraag beter beantwoordt dan alle andere. Precies daarom weegt Google ze het zwaarst.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Daarna komen links uit gastbijdragen op relevante sites, vermeldingen in branchegidsen die er echt toe doen en links vanuit samenwerkingen, zoals een leverancier die naar jouw case verwijst. De rode draad: hoe relevanter de linkende site voor jouw vakgebied, hoe meer een link bijdraagt. Eén link vanaf een gerespecteerde site in jouw branche doet meer dan een stapel links van willekeurige verzamelsites. Welke aanpak daarbij werkt, lees je in onze <Link to="/blogs/seo/strategieen-kwalitatieve-backlinks" className="text-accent hover:underline">blog over strategieën voor kwalitatieve backlinks</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Welke backlinks kun je beter vermijden?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Gekochte dofollow links zonder markering zijn in strijd met de spamrichtlijnen van Google. Hetzelfde geldt voor linknetwerken: groepen websites die alleen bestaan om elkaar omhoog te linken. Werkt het soms tijdelijk? Ja. Maar het risico is een handmatige actie, en dan ben je maanden bezig met opruimen. Hoe je verdachte links herkent en opruimt, lees je in onze <Link to="/blogs/seo/spammy-links-herkennen-verwijderen" className="text-accent hover:underline">blog over spammy links herkennen en verwijderen</Link>.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Wees ook terughoudend met massale gastblog-uitwisselingen op sites die over alles en niets schrijven. Google herkent patronen. Tien links in dezelfde maand vanaf tien themaloze blogs met exact dezelfde ankertekst is zo'n patroon. In de praktijk gaat het zelden mis door één twijfelachtige link en bijna altijd door een opeenstapeling van dezelfde truc.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe ziet een gezond backlinkprofiel eruit?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Gevarieerd. Een natuurlijk profiel bevat sterke redactionele links naast gewone vermeldingen, dofollow naast nofollow, merknaam-ankerteksten naast losse zinnen. Juist die mix maakt het geloofwaardig. Een profiel dat voor het grootste deel uit exact-match commerciële ankerteksten bestaat, ziet er voor Google uit als gestuurd werk.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Vergeet daarbij je eigen site niet. Backlinks bepalen hoeveel autoriteit binnenkomt, maar interne links bepalen waar die autoriteit naartoe stroomt. Hoe die twee samenwerken, lees je in onze <Link to="/blogs/seo/backlinks-vs-interne-links-waardevoller" className="text-accent hover:underline">blog over backlinks versus interne links</Link>. En bedenk: linkwaarde opbouwen kost tijd. Wie vandaag start, ziet doorgaans pas na enkele maanden beweging in de rankings.
                        </p>

                        <p className="text-primary/80 leading-relaxed mb-6">
                            Benieuwd welke soorten links jouw backlinkprofiel nu bevat en waar de gaten zitten? Onze <Link to="/seo" className="text-accent hover:underline">SEO-specialisten</Link> analyseren het voor je en vertellen precies waar de kansen liggen. Plan een gratis gesprek via onze <Link to="/contact" className="text-accent hover:underline">contactpagina</Link>.
                        </p>
                    </div>

                    {/* FAQ Section */}
                    <section className="mt-16 pt-12 border-t border-primary/10">
                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Veelgestelde vragen</h2>
                        <div className="space-y-6 not-prose">
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat is het verschil tussen dofollow en nofollow backlinks?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Een dofollow link geeft autoriteit door aan de ontvangende pagina en telt volop mee voor je rankings. Een nofollow link heeft het attribuut rel=nofollow, waarmee de linkende site aangeeft dat Google de link niet hoeft te volgen. Sinds 2020 behandelt Google nofollow als een hint, niet als een verbod.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat betekenen rel=sponsored en rel=ugc?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Google introduceerde beide attributen in 2019. Met rel=sponsored markeer je betaalde of gesponsorde links, zoals advertenties en affiliate links. Met rel=ugc markeer je links uit user generated content, zoals reacties en forumberichten. Zo begrijpt Google de context van een link beter.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Welke soort backlink is het meest waardevol?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Een redactionele dofollow link vanaf een relevante website met eigen autoriteit. Dat is een link die een redactie of blogger vrijwillig plaatst omdat jouw content het waard is. Zulke links zijn lastig te krijgen en juist daarom weegt Google ze het zwaarst.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hebben nofollow links dan geen enkele waarde?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Ze hebben wel degelijk waarde. Google kan nofollow links sinds 2020 meenemen als hint, en ze brengen bezoekers en naamsbekendheid op die vaak weer tot nieuwe links leiden. Een vermelding op een druk bezochte nieuwssite met nofollow link levert indirect meer op dan een dofollow link op een site zonder bezoekers.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Zijn gekochte backlinks tegen de regels?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Betaalde links die autoriteit doorgeven zonder rel=sponsored of rel=nofollow markering zijn in strijd met de spamrichtlijnen van Google. Wie op grote schaal links koopt, riskeert een handmatige actie. Betaalde vermeldingen mogen wel, mits ze correct gemarkeerd zijn.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoeveel backlinks heb ik nodig om te ranken?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Daar bestaat geen vast getal voor. Het hangt af van de concurrentie op jouw zoekwoorden. Voor een lokale nichemarkt kan een handvol sterke links genoeg zijn, terwijl competitieve landelijke zoekwoorden vaak tientallen verwijzende domeinen vragen. Kwaliteit en relevantie wegen zwaarder dan aantallen.</p>
                            </div>
                        </div>
                    </section>

                    {/* Related Links */}
                    <section className="mt-16 pt-12 border-t border-primary/10">
                        <h3 className="text-xl font-bold text-primary mb-6">Lees ook</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <Link to="/blogs/seo/spammy-links-herkennen-verwijderen" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Spammy links herkennen en verwijderen</h3>
                                <p className="text-primary/60 text-sm">Zo controleer je je linkprofiel op troep.</p>
                            </Link>
                            <Link to="/blogs/seo/strategieen-kwalitatieve-backlinks" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">5 strategieën voor kwalitatieve backlinks</h3>
                                <p className="text-primary/60 text-sm">Zo verdien je links die echt meetellen.</p>
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
                    <h2 className="relative z-10 font-drama italic text-background text-3xl sm:text-4xl md:text-5xl mb-6">Welke links mist jouw profiel?</h2>
                    <p className="relative z-10 font-sans text-background/70 text-lg mb-10 max-w-xl mx-auto">We analyseren jouw backlinkprofiel gratis en laten zien welke soorten links het verschil gaan maken.</p>
                    <Link to="/contact" className="relative z-10 btn-magnetic inline-flex items-center justify-center bg-accent text-background font-sans font-bold text-lg px-10 py-4 rounded-[2rem] hover:bg-accent/90 transition-colors">Neem contact op</Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
