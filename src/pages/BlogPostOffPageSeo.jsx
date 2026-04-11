import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ChevronRight, User } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function BlogPostOffPageSeo() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen selection:bg-accent/30 selection:text-dark flex flex-col bg-background">
            <Helmet>
                <title>Off-page SEO uitgelegd: backlinks, autoriteit en meer | Empowers</title>
                <meta name="description" content="Off-page SEO bepaalt hoe Google de autoriteit van je website beoordeelt. Lees wat backlinks zijn, hoe je ze opbouwt en welke strategieën werken in 2026." />
                <link rel="canonical" href="https://www.empowers.nl/blogs/seo/off-page-seo" />
                <meta property="og:title" content="Off-page SEO uitgelegd: backlinks, autoriteit en meer" />
                <meta property="og:description" content="Off-page SEO bepaalt je autoriteit in Google. Lees hoe backlinks werken en welke strategieën echt resultaat opleveren." />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://www.empowers.nl/blogs/seo/off-page-seo" />
                <meta property="og:image" content="https://www.empowers.nl/images/blogs/off-page-seo.jpg" />
                <meta property="article:published_time" content="2026-04-11" />
                <meta property="article:author" content="Empowers" />
                <meta property="article:section" content="SEO" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Off-page SEO uitgelegd: backlinks, autoriteit en meer" />
                <meta name="twitter:description" content="Off-page SEO bepaalt je autoriteit in Google. Lees hoe backlinks werken en wat echt resultaat oplevert." />

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Article",
                        "headline": "Off-page SEO uitgelegd: backlinks, autoriteit en meer",
                        "description": "Off-page SEO bepaalt hoe Google de autoriteit van je website beoordeelt. Lees wat backlinks zijn, hoe je ze opbouwt en welke strategieën werken in 2026.",
                        "image": "https://www.empowers.nl/images/blogs/off-page-seo.jpg",
                        "datePublished": "2026-04-11T00:00:00+02:00",
                        "author": { "@type": "Organization", "name": "Empowers" },
                        "publisher": {
                            "@type": "Organization",
                            "name": "Empowers",
                            "url": "https://www.empowers.nl",
                            "logo": {
                                "@type": "ImageObject",
                                "url": "https://www.empowers.nl/empowers-logo-color.svg"
                            }
                        },
                        "mainEntity": {
                            "@type": "FAQPage",
                            "mainEntity": [
                                {
                                    "@type": "Question",
                                    "name": "Wat is off-page SEO precies?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Off-page SEO omvat alles wat buiten je eigen website gebeurt en invloed heeft op je positie in Google. Denk aan backlinks van andere websites, vermeldingen van je bedrijfsnaam, reviews en social signals. Het draait om autoriteit: hoe meer betrouwbare websites naar jou verwijzen, hoe hoger Google je waardeert."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Hoeveel backlinks heb ik nodig om hoger te ranken?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Het gaat niet om aantallen maar om kwaliteit. Een backlink van een gezaghebbende website in jouw branche is meer waard dan honderd links van onbekende blogs. Focus op 2 tot 5 kwalitatieve backlinks per maand. Na 6 maanden merk je het verschil in je posities."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Zijn backlinks kopen een goed idee?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Nee. Google herkent gekochte links steeds beter en bestraft websites die dit doen. Je riskeert een penalty waardoor je juist lager komt te staan. Investeer liever in content die van nature gedeeld wordt en in relaties met relevante websites in jouw branche."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Wat is het verschil tussen on-page en off-page SEO?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "On-page SEO gaat over alles op je eigen website: teksten, titels, snelheid, structuur. Off-page SEO gaat over signalen van buiten je website: backlinks, vermeldingen, reviews. Je hebt beide nodig. On-page zorgt dat Google je pagina begrijpt. Off-page zorgt dat Google je pagina vertrouwt."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Hoe lang duurt het voordat off-page SEO resultaat oplevert?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Reken op 3 tot 6 maanden voordat je structureel hogere posities ziet. Backlinks hebben tijd nodig om door Google geindexeerd en gewaardeerd te worden. Het is een langetermijnstrategie, maar het effect is duurzaam. Eenmaal opgebouwde autoriteit verlies je niet snel."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Kan ik off-page SEO zelf doen of heb ik een bureau nodig?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "De basis kun je zelf doen: zorg voor vermeldingen in lokale gidsen, vraag samenwerkingspartners om een link en schrijf gastartikelen. Maar een gerichte linkbuildingstrategie kost veel tijd en kennis. Een bureau als Empowers neemt dat werk uit handen en bouwt structureel aan je autoriteit."
                                    }
                                }
                            ]
                        }
                    })}
                </script>

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "BreadcrumbList",
                        "itemListElement": [
                            {
                                "@type": "ListItem",
                                "position": 1,
                                "name": "Home",
                                "item": "https://www.empowers.nl"
                            },
                            {
                                "@type": "ListItem",
                                "position": 2,
                                "name": "Blogs",
                                "item": "https://www.empowers.nl/blogs"
                            },
                            {
                                "@type": "ListItem",
                                "position": 3,
                                "name": "SEO",
                                "item": "https://www.empowers.nl/blogs/seo"
                            },
                            {
                                "@type": "ListItem",
                                "position": 4,
                                "name": "Off-page SEO",
                                "item": "https://www.empowers.nl/blogs/seo/off-page-seo"
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
                        <span className="text-primary truncate">Off-page SEO</span>
                    </nav>

                    {/* Header */}
                    <header className="mb-16">
                        <div className="inline-block px-3 py-1 bg-accent/10 text-accent font-mono text-xs uppercase tracking-widest rounded-full mb-6">
                            SEO
                        </div>
                        <h1 className="font-sans font-bold text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight mb-8">
                            Off-page SEO uitgelegd: backlinks, autoriteit en meer
                        </h1>

                        <div className="flex flex-wrap items-center gap-6 text-sm font-sans text-primary/60 border-y border-primary/10 py-6">
                            <div className="flex items-center gap-2">
                                <User className="w-4 h-4" />
                                <span>Empowers Redactie</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>11 april 2026</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>8 minuten leestijd</span>
                            </div>
                        </div>
                    </header>

                    {/* Featured Image */}
                    <figure className="w-full h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden mb-16 relative bg-primary">
                        <div className="absolute inset-0 bg-[url('/images/blogs/off-page-seo.jpg')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </figure>

                    {/* Content */}
                    <div className="prose prose-lg max-w-none prose-headings:text-primary prose-headings:font-bold prose-a:text-accent prose-a:underline hover:prose-a:text-accent/80">
                        <p className="text-xl leading-relaxed text-primary/80 font-medium mb-6">
                            Je kunt de beste content schrijven en de snelste website hebben. Maar als niemand naar je verwijst, blijf je onzichtbaar in Google. Off-page SEO bepaalt hoe Google de autoriteit van je website inschat. En autoriteit is wat het verschil maakt tussen pagina 3 en positie 1. In dit artikel lees je wat off-page SEO is, hoe backlinks werken en welke strategieën in 2026 nog steeds resultaat opleveren.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat is off-page SEO?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Off-page SEO omvat alle activiteiten buiten je eigen website die invloed hebben op je positie in zoekmachines. Het draait om een simpel principe: als andere websites naar jou verwijzen, ziet Google dat als een aanbeveling. Hoe meer betrouwbare aanbevelingen je krijgt, hoe hoger je scoort.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Denk aan backlinks, vermeldingen van je bedrijfsnaam op andere websites, online reviews en signalen vanuit social media. Al die factoren samen vormen je online autoriteit. En die autoriteit weegt zwaar mee in het algoritme van Google.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Het verschil met on-page SEO is helder. On-page gaat over wat je zelf kunt aanpassen: teksten, titels, technische snelheid, interne links. Off-page gaat over hoe de buitenwereld naar jou kijkt. Je hebt beide nodig. On-page zorgt dat Google je begrijpt. Off-page zorgt dat Google je vertrouwt. Meer over on-page lees je in onze <Link to="/blogs/seo/technische-seo-checklist-2025-website" className="text-accent hover:underline">technische SEO checklist</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Waarom backlinks nog steeds de basis zijn</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Backlinks zijn links van een andere website naar jouw website. Google beschouwt elke backlink als een stem van vertrouwen. Niet alle stemmen wegen even zwaar. Een link vanuit een gerespecteerd vakmedium is meer waard dan tien links van willekeurige blogs.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Google kijkt naar drie dingen bij backlinks. Ten eerste relevantie: komt de link van een website in dezelfde branche of een aanverwant onderwerp? Ten tweede autoriteit: hoe sterk is de linkende website zelf? En ten derde diversiteit: komen je links van verschillende domeinen of steeds van dezelfde bron?
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            In de praktijk zien we dat MKB-websites met 30 tot 50 kwalitatieve backlinks van relevante bronnen structureel hogere posities behalen dan concurrenten met honderden links van lage kwaliteit. Het gaat niet om volume. Het gaat om waarde.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe bouw je kwalitatieve backlinks op?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De beste backlinks verdien je. Dat klinkt idealistisch, maar het werkt. Als je content maakt die zo goed is dat anderen er naar willen verwijzen, ontstaan links vanzelf. Denk aan diepgaande gidsen, origineel onderzoek, infographics of tools die je gratis aanbiedt.
                        </p>

                        <h3 className="text-xl font-semibold text-primary mt-10 mb-4">Gastartikelen schrijven</h3>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Schrijf een waardevol artikel voor een vakblad of blog in jouw branche. In ruil krijg je een link terug naar je website. Kies platforms die je doelgroep leest en die zelf een goede autoriteit hebben. Eén gastartikel per maand op een relevant platform levert meer op dan tien artikelen op onbekende websites.
                        </p>

                        <h3 className="text-xl font-semibold text-primary mt-10 mb-4">Broken link building</h3>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Zoek websites in jouw branche die linken naar pagina's die niet meer bestaan. Neem contact op met de websitebeheerder, wijs op de dode link en bied jouw content aan als vervanging. Het is een win-winsituatie: de ander lost een probleem op, jij krijgt een link.
                        </p>

                        <h3 className="text-xl font-semibold text-primary mt-10 mb-4">Vermeldingen claimen</h3>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Soms wordt je bedrijf online genoemd zonder dat er een link bij staat. Zoek naar vermeldingen van je bedrijfsnaam via Google Alerts of tools als Ahrefs. Neem contact op en vraag of ze een link willen toevoegen. De meeste website-eigenaren doen dit graag.
                        </p>

                        <h3 className="text-xl font-semibold text-primary mt-10 mb-4">Samenwerkingspartners benutten</h3>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Je werkt samen met leveranciers, klanten of partners. Vraag of zij een link naar jouw website willen plaatsen op hun partnerpagina of in een casestudy. Dit zijn relevante, natuurlijke links die Google waardeert.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat je niet moet doen: linkbuilding-fouten</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Backlinks kopen is de snelste manier om jezelf in de problemen te brengen. Google herkent onnatuurlijke linkpatronen steeds beter. Een plotselinge stijging van honderden links vanuit irrelevante websites is een rode vlag. Het resultaat: een penalty die je maanden terugwerpt.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Linkruil in grote hoeveelheden werkt ook niet meer. Als jij naar mij linkt en ik naar jou, ziet Google dat patroon. Een enkele natuurlijke uitwisseling is prima, maar structurele linkruil levert niets op en kan je zelfs schaden.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            PBN's, oftewel Private Blog Networks, zijn een ander risico. Dit zijn nepwebsites die alleen bestaan om links te genereren. Google filtert deze actief uit. Investeer je tijd liever in echte relaties en echte content.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Meer dan backlinks: andere off-page factoren</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Off-page SEO is breder dan alleen links. Google kijkt ook naar andere signalen die aangeven of jouw bedrijf betrouwbaar is.
                        </p>

                        <h3 className="text-xl font-semibold text-primary mt-10 mb-4">Online reviews en reputatie</h3>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Reviews op Google, Trustpilot en brancheplatforms spelen een directe rol in lokale SEO en een indirecte rol in je algehele autoriteit. Een bedrijf met tientallen positieve reviews scoort beter dan een concurrent zonder reviews. Vraag actief om reviews na een geslaagd project of aankoop. Reageer ook op negatieve reviews: dat laat zien dat je betrokken bent.
                        </p>

                        <h3 className="text-xl font-semibold text-primary mt-10 mb-4">Lokale vermeldingen en NAW-consistentie</h3>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Je bedrijfsnaam, adres en telefoonnummer moeten op elke website identiek zijn. Inconsistenties verwarren Google. Zorg dat je gegevens kloppen op Google Bedrijfsprofiel, Yelp, de Kamer van Koophandel, branchegidsen en je eigen website. Dit is de basis van <Link to="/blogs/seo/lokale-seo-mkb-word-gevonden" className="text-accent hover:underline">lokale SEO</Link>.
                        </p>

                        <h3 className="text-xl font-semibold text-primary mt-10 mb-4">Social signals</h3>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Google ontkent dat social media directe rankingfactoren zijn. Toch zien we correlatie. Content die veel gedeeld wordt op LinkedIn, X of Facebook trekt meer bezoekers, meer vermeldingen en uiteindelijk meer backlinks. Social media versterkt je off-page SEO indirect. Het is geen vervanging, maar een versterker.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Off-page SEO en GEO: ook AI-zoekmachines kijken naar autoriteit</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            AI-zoekmachines als ChatGPT en Perplexity gebruiken vergelijkbare signalen om te bepalen welke bronnen betrouwbaar zijn. Een website met sterke backlinks en veel vermeldingen wordt vaker geciteerd door AI-modellen. Off-page SEO werkt dus niet alleen voor Google, maar ook voor de nieuwe generatie zoekmachines. Meer hierover lees je in onze <Link to="/blogs/geo/ai-zoekmachines-vs-google-overal" className="text-accent hover:underline">blog over AI zoekmachines vs Google</Link>.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Dit maakt off-page SEO relevanter dan ooit. De websites die nu investeren in autoriteit, worden straks niet alleen gevonden in Google maar ook aanbevolen door AI.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Een off-page SEO plan voor jouw bedrijf</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Begin met een nulmeting. Hoeveel backlinks heb je nu? Van welke websites? Gebruik een tool als Ahrefs, SEMrush of Google Search Console om je huidige profiel in kaart te brengen. Kijk vervolgens naar je concurrenten: waar komen hun links vandaan?
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Stel een doel. Voor de meeste MKB-bedrijven is 2 tot 5 nieuwe kwalitatieve backlinks per maand realistisch. Dat klinkt weinig, maar na een jaar heb je 25 tot 60 sterke verwijzingen opgebouwd. Dat is genoeg om het verschil te maken voor de zoekwoorden die er voor jou toe doen.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Combineer linkbuilding met content die deelbaar is. Schrijf een jaarlijkse brancherapport, maak een gratis tool of publiceer uniek onderzoek. Dat soort content trekt links aan zonder dat je erom hoeft te vragen.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Off-page SEO is geen eenmalige actie. Het is een doorlopend proces. Maar het rendement is groot: autoriteit die je opbouwt, verlies je niet snel. En de posities die je ermee bereikt, zijn stabieler dan posities die alleen op on-page SEO leunen. Meer over de tijdlijn van SEO lees je in onze <Link to="/blogs/seo/lang-duurt-seo-realistische-verwachtingen" className="text-accent hover:underline">blog over hoe lang SEO duurt</Link>.
                        </p>

                        <p className="text-primary/80 leading-relaxed mb-6">
                            Wil je weten hoe sterk jouw off-page SEO nu is? We maken graag een analyse van je backlinkprofiel en geven concrete aanbevelingen. Plan een gesprek via onze <Link to="/contact" className="text-accent hover:underline">contactpagina</Link>.
                        </p>
                    </div>

                    {/* FAQ Section */}
                    <section className="mt-16 pt-12 border-t border-primary/10">
                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Veelgestelde vragen</h2>
                        <div className="space-y-6 not-prose">
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat is off-page SEO precies?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Off-page SEO omvat alles wat buiten je eigen website gebeurt en invloed heeft op je positie in Google. Denk aan backlinks van andere websites, vermeldingen van je bedrijfsnaam, reviews en social signals. Het draait om autoriteit: hoe meer betrouwbare websites naar jou verwijzen, hoe hoger Google je waardeert.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoeveel backlinks heb ik nodig om hoger te ranken?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Het gaat niet om aantallen maar om kwaliteit. Een backlink van een gezaghebbende website in jouw branche is meer waard dan honderd links van onbekende blogs. Focus op 2 tot 5 kwalitatieve backlinks per maand. Na 6 maanden merk je het verschil in je posities.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Zijn backlinks kopen een goed idee?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Nee. Google herkent gekochte links steeds beter en bestraft websites die dit doen. Je riskeert een penalty waardoor je juist lager komt te staan. Investeer liever in content die van nature gedeeld wordt en in relaties met relevante websites in jouw branche.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat is het verschil tussen on-page en off-page SEO?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    On-page SEO gaat over alles op je eigen website: teksten, titels, snelheid, structuur. Off-page SEO gaat over signalen van buiten je website: backlinks, vermeldingen, reviews. Je hebt beide nodig. On-page zorgt dat Google je pagina begrijpt. Off-page zorgt dat Google je pagina vertrouwt.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoe lang duurt het voordat off-page SEO resultaat oplevert?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Reken op 3 tot 6 maanden voordat je structureel hogere posities ziet. Backlinks hebben tijd nodig om door Google geindexeerd en gewaardeerd te worden. Het is een langetermijnstrategie, maar het effect is duurzaam. Eenmaal opgebouwde autoriteit verlies je niet snel.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Kan ik off-page SEO zelf doen of heb ik een bureau nodig?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    De basis kun je zelf doen: zorg voor vermeldingen in lokale gidsen, vraag samenwerkingspartners om een link en schrijf gastartikelen. Maar een gerichte linkbuildingstrategie kost veel tijd en kennis. Een bureau als Empowers neemt dat werk uit handen en bouwt structureel aan je autoriteit.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Related Links */}
                    <section className="mt-16 pt-12 border-t border-primary/10">
                        <h3 className="text-xl font-bold text-primary mb-6">Lees ook</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <Link to="/blogs/seo/technische-seo-checklist-2025-website" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Technische SEO checklist 2026</h3>
                                <p className="text-primary/60 text-sm">Alles wat je website nodig heeft voor een sterke technische basis.</p>
                            </Link>
                            <Link to="/blogs/seo/lokale-seo-mkb-word-gevonden" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Lokale SEO voor MKB</h3>
                                <p className="text-primary/60 text-sm">Zo word je gevonden door klanten in jouw regio.</p>
                            </Link>
                            <Link to="/blogs/seo/lang-duurt-seo-realistische-verwachtingen" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Hoe lang duurt SEO?</h3>
                                <p className="text-primary/60 text-sm">Realistische verwachtingen voor nieuwe websites.</p>
                            </Link>
                        </div>
                    </section>
                </div>
            </article>

            {/* Bottom CTA */}
            <section className="w-full pb-32 px-6">
                <div className="max-w-4xl mx-auto bg-primary rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
                    <h2 className="relative z-10 font-drama italic text-background text-3xl sm:text-4xl md:text-5xl mb-6">Hoger in Google met een sterke autoriteit?</h2>
                    <p className="relative z-10 font-sans text-background/70 text-lg mb-10 max-w-xl mx-auto">We analyseren je backlinkprofiel en laten zien waar de kansen liggen. Geen verplichtingen, wel een helder plan.</p>
                    <Link to="/contact" className="relative z-10 btn-magnetic inline-flex items-center justify-center bg-accent text-background font-sans font-bold text-lg px-10 py-4 rounded-[2rem] hover:bg-accent/90 transition-colors">Neem contact op</Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
