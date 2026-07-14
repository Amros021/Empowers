import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ChevronRight, User } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function BlogPostLinkedinAdsItBedrijvenSoftwareLeads() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen selection:bg-accent/30 selection:text-dark flex flex-col bg-background">
            <Helmet>
                <title>LinkedIn Ads voor IT-bedrijven en software: kwalitatieve B2B-leads | Empowers</title>
                <meta name="description" content="LinkedIn Ads werkt sterk voor IT- en softwarebedrijven die kwalitatieve B2B-leads zoeken. Zo bereik je de juiste beslissers en haal je leads die klant worden." />
                <link rel="canonical" href="https://www.empowers.nl/blogs/social-ads/linkedin-ads-it-bedrijven-software-leads" />
                <meta property="og:title" content="LinkedIn Ads voor IT-bedrijven en software: kwalitatieve B2B-leads" />
                <meta property="og:description" content="Zo bereik je met LinkedIn Ads de juiste beslissers bij IT- en softwarebedrijven en haal je leads die echt klant worden." />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://www.empowers.nl/blogs/social-ads/linkedin-ads-it-bedrijven-software-leads" />
                <meta property="og:image" content="https://www.empowers.nl/images/blogs/linkedin-ads-it-bedrijven-software-leads.jpg" />
                <meta property="article:published_time" content="2026-07-05T10:00:00+02:00" />
                <meta property="article:author" content="Empowers" />
                <meta property="article:section" content="Social Ads" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="LinkedIn Ads voor IT-bedrijven en software: kwalitatieve B2B-leads" />
                <meta name="twitter:description" content="Zo bereik je de juiste beslissers bij IT- en softwarebedrijven en haal je leads die echt klant worden." />

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@graph": [
                            {
                                "@type": "Article",
                                "headline": "LinkedIn Ads voor IT-bedrijven en software: kwalitatieve B2B-leads",
                                "description": "LinkedIn Ads werkt sterk voor IT- en softwarebedrijven die kwalitatieve B2B-leads zoeken. Zo bereik je de juiste beslissers en haal je leads die klant worden.",
                                "image": "https://www.empowers.nl/images/blogs/linkedin-ads-it-bedrijven-software-leads.jpg",
                                "datePublished": "2026-07-05T10:00:00+02:00",
                                "dateModified": "2026-07-05T10:00:00+02:00",
                                "author": { "@type": "Organization", "name": "Empowers" },
                                "publisher": {
                                    "@type": "Organization", "name": "Empowers", "url": "https://www.empowers.nl",
                                    "logo": { "@type": "ImageObject", "url": "https://www.empowers.nl/empowers-logo-color.svg" }
                                },
                                "mainEntityOfPage": "https://www.empowers.nl/blogs/social-ads/linkedin-ads-it-bedrijven-software-leads"
                            },
                            {
                                "@type": "BreadcrumbList",
                                "itemListElement": [
                                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.empowers.nl" },
                                    { "@type": "ListItem", "position": 2, "name": "Blogs", "item": "https://www.empowers.nl/blogs" },
                                    { "@type": "ListItem", "position": 3, "name": "Social Ads", "item": "https://www.empowers.nl/blogs/social-ads" },
                                    { "@type": "ListItem", "position": 4, "name": "LinkedIn Ads voor IT-bedrijven en software", "item": "https://www.empowers.nl/blogs/social-ads/linkedin-ads-it-bedrijven-software-leads" }
                                ]
                            },
                            {
                                "@type": "FAQPage",
                                "mainEntity": [
                                    {
                                        "@type": "Question",
                                        "name": "Waarom werkt LinkedIn Ads goed voor IT- en softwarebedrijven?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Omdat je doelgroep er op functie en bedrijf te bereiken is. IT- en softwarebedrijven verkopen vaak aan specifieke rollen, zoals IT-managers, CTO's of inkopers. Op LinkedIn target je precies die titels en sectoren. Dat maakt het kanaal duur per klik, maar zeer geschikt als één klant veel waard is, zoals bij software met terugkerende abonnementen."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Wie kun je als IT-bedrijf targeten op LinkedIn?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Je richt je op functietitels en functieniveaus, op bedrijfsgrootte en sector, en soms op specifieke bedrijven. Voor software target je bijvoorbeeld IT-beslissers binnen bedrijven van een bepaalde omvang in de sectoren die jouw oplossing nodig hebben. Hoe scherper je het ideale klantprofiel kent, hoe minder budget je verspilt aan mensen die nooit kopen."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Welke advertentievormen werken voor software-leads?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Lead gen forms werken goed omdat mensen hun gegevens achterlaten zonder de app of site te verlaten. Daarnaast zijn sponsored content en documentadvertenties sterk om een demo of een case study aan te bieden. Voor langere salestrajecten helpt het om eerst waarde te geven met content en pas daarna om een demo of gesprek te vragen."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Hoe zorg je voor kwalitatieve leads in plaats van losse klikken?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Door scherp te targeten en je aanbod af te stemmen op de fase waarin een beslisser zit. Een algemeen formulier trekt veel maar zwakke leads. Vraag in je formulier de juiste gegevens, sluit verkeerde functies uit en bied iets aan dat alleen relevant is voor echte kopers. Goede opvolging vanuit sales maakt het verschil tussen een lijst namen en echte kansen."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Hoeveel budget heb je nodig voor LinkedIn Ads als IT-bedrijf?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Genoeg om betrouwbaar te testen, want LinkedIn is duurder per klik dan andere kanalen. Omdat één softwareklant met een abonnement vaak veel oplevert, kan een hogere prijs per lead toch rendabel zijn. Bereken wat een klant je waard is over de hele looptijd en bepaal vanuit die waarde wat je per lead mag uitgeven."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Hoe lang duurt het voordat LinkedIn Ads leads oplevert?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "De eerste leads komen vaak snel binnen, maar de salescyclus in IT en software is lang. Een beslisser oriënteert zich, betrekt collega's en neemt soms maanden de tijd. Reken daarom niet alleen op directe aanvragen, maar bouw ook aan herkenning en vertrouwen, zodat je in beeld bent wanneer de koopbeslissing valt."
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
                    <nav className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-primary/50 mb-12">
                        <Link to="/" className="hover:text-accent transition-colors">Home</Link>
                        <ChevronRight className="w-3 h-3" />
                        <Link to="/nieuws" className="hover:text-accent transition-colors">Nieuws</Link>
                        <ChevronRight className="w-3 h-3" />
                        <Link to="/blogs/social-ads" className="hover:text-accent transition-colors">Social Ads</Link>
                        <ChevronRight className="w-3 h-3" />
                        <span className="text-primary truncate">LinkedIn Ads voor IT-bedrijven en software</span>
                    </nav>

                    <header className="mb-16">
                        <div className="inline-block px-3 py-1 bg-accent/10 text-accent font-mono text-xs uppercase tracking-widest rounded-full mb-6">
                            Social Ads
                        </div>
                        <h1 className="font-sans font-bold text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight mb-8">
                            LinkedIn Ads voor IT-bedrijven en software: kwalitatieve B2B-leads
                        </h1>

                        <div className="flex flex-wrap items-center gap-6 text-sm font-sans text-primary/60 border-y border-primary/10 py-6">
                            <div className="flex items-center gap-2"><User className="w-4 h-4" /><span>Empowers Redactie</span></div>
                            <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>5 juli 2026</span></div>
                            <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>9 minuten leestijd</span></div>
                        </div>
                    </header>

                    <figure className="w-full h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden mb-16 relative bg-primary">
                        <div className="absolute inset-0 bg-[url('/images/blogs/linkedin-ads-it-bedrijven-software-leads.jpg')] bg-cover bg-center opacity-40 mix-blend-overlay" style={{backgroundImage: "url('/images/blogs/linkedin-ads-it-bedrijven-software-leads.jpg')"}}></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </figure>

                    <div className="prose prose-lg max-w-none prose-headings:text-primary prose-headings:font-bold prose-a:text-accent prose-a:underline hover:prose-a:text-accent/80">
                        <p className="text-xl leading-relaxed text-primary/80 font-medium mb-6">
                            LinkedIn Ads is voor IT- en softwarebedrijven een van de sterkste kanalen om aan kwalitatieve B2B-leads te komen. Je bereikt precies de beslissers die je nodig hebt, zoals IT-managers, CTO's en inkopers, op functie en sector. Het kanaal is duur per klik, maar dat verdient zich terug als één klant met een softwareabonnement lang waarde oplevert. De sleutel zit in scherpe targeting en sturen op leadkwaliteit.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Waarom werkt LinkedIn Ads zo goed voor IT- en softwarebedrijven?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Omdat je doelgroep er op functie en bedrijf te vinden is. Waar je op andere kanalen gokt wie een beslisser is, target je op LinkedIn rechtstreeks op functietitel en sector, en op de grootte van het bedrijf. Voor software die aan specifieke rollen verkocht wordt, is dat goud waard. Je praat direct tegen de mensen die over de aankoop gaan.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De hoge kosten per klik schrikken sommige bedrijven af, maar dat is bij IT en software vaak geen probleem. Verkoop je een platform met een maandelijks of jaarlijks abonnement, dan levert één klant over de looptijd veel op. Daardoor mag een lead meer kosten en blijft het kanaal alsnog rendabel. Reken in klantwaarde over de hele looptijd, niet in losse klikken.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wie kun je als IT-bedrijf op LinkedIn bereiken?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Je richt je op functietitels en functieniveaus, op bedrijfsgrootte en op sector. Voor software target je bijvoorbeeld IT-beslissers binnen bedrijven van een bepaalde omvang in de branches die jouw oplossing nodig hebben. Je kunt zelfs specifieke bedrijven aanspreken als je een lijst met droomklanten hebt.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Hoe scherper je je ideale klant kent, hoe minder budget je verspilt. Een te brede doelgroep betekent dat je betaalt om mensen te bereiken die nooit kopen, en op een duur kanaal voel je dat meteen. Begin daarom bij het profiel van je beste bestaande klanten en bouw je targeting daaromheen. Wil je nog een stap verder, dan past <Link to="/blogs/social-ads/linkedin-abm-account-based-marketing" className="text-accent hover:underline">account-based marketing op LinkedIn</Link> goed bij een IT-aanpak met een korte lijst grote klanten.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Welke campagnevormen werken voor software-leads?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Lead gen forms zijn een sterke basis. Mensen vullen hun gegevens in zonder de app of site te verlaten, wat de drempel laag houdt en je conversie verhoogt. Voor IT en software werken ze goed bij het aanbieden van een demo of een case study die laat zien dat je oplossing werkt.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Daarnaast zijn sponsored content en documentadvertenties waardevol. Een beslisser in IT koopt zelden bij de eerste aanraking, dus geef eerst inhoud die helpt voordat je om een gesprek vraagt. Een goede volgorde is eerst vertrouwen opbouwen met content en daarna pas de demo aanbieden. Waarom die formulieren zo goed werken, lees je in onze blog over <Link to="/blogs/social-ads/linkedin-lead-gen-forms-waarom" className="text-accent hover:underline">LinkedIn lead gen forms</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe zorg je voor kwalitatieve leads in plaats van losse klikken?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Door scherp te targeten en je aanbod te laten passen bij de fase waarin een beslisser zit. Een algemeen formulier met een vrijblijvend aanbod trekt veel leads, maar veel daarvan worden nooit klant. Vraag in je formulier de juiste gegevens uit en sluit functies uit die niet bij je koper passen.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Bied vervolgens iets aan dat alleen interessant is voor echte kopers, zoals een demo van je software of een gerichte case uit hun sector. We zien bij softwarebedrijven dat een wat hogere drempel in de advertentie minder maar veel betere leads oplevert. En vergeet de opvolging niet: een lead die dagen blijft liggen, is in B2B vaak al afgehaakt. Snelle, persoonlijke opvolging vanuit sales bepaalt of een lead een kans wordt.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoeveel budget heb je nodig als IT-bedrijf?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Genoeg om betrouwbaar te testen, want LinkedIn rekent meer per klik dan de meeste andere kanalen. Met een minibudget kom je niet ver, omdat je te weinig data krijgt om te leren wat werkt. Tegelijk hoeft het budget niet enorm te zijn als je doelgroep scherp is en je aanbod sterk.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Bereken wat een klant je waard is over de hele looptijd van het abonnement en bepaal vanuit die waarde wat je per lead mag uitgeven. Een softwareklant die jaren blijft, rechtvaardigt een hogere prijs per lead dan een eenmalige aankoop. Vanuit dat perspectief is LinkedIn voor IT zelden te duur, zolang je maar op de juiste mensen mikt. Hoeveel je minimaal nodig hebt, zie je in onze blog over <Link to="/blogs/social-ads/linkedin-ads-budget-hoeveel-minimaal" className="text-accent hover:underline">het minimale LinkedIn Ads budget</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Welke fouten maken IT-bedrijven met LinkedIn Ads?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De grootste fout is te breed targeten om de kosten te drukken. Het voelt zuinig, maar je betaalt zo voor klikken van mensen die nooit beslissen over software. Een scherpe, kleinere doelgroep levert meestal meer op dan een brede die goedkoper oogt. Op LinkedIn is precisie belangrijker dan bereik.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een tweede fout is meteen om een demo of aankoop vragen bij een koud publiek. In IT duurt een beslissing lang, dus een harde vraag bij de eerste aanraking schrikt af. En een derde valkuil is leads niet snel opvolgen. Komt een aanvraag binnen en hoort die persoon dagen niets, dan is je dure lead alweer bij de concurrent. Hoe je je campagnes daarna verder aanscherpt, lees je in onze blog over <Link to="/blogs/social-ads/linkedin-ads-optimaliseren-stap-stap" className="text-accent hover:underline">LinkedIn Ads optimaliseren</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Waar begin je?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Start bij je ideale klant. Bepaal welke functies beslissen over jouw software en in welke sectoren en bedrijfsgroottes ze zitten. Bouw daaromheen een scherpe doelgroep en koppel daar een aanbod aan dat past, zoals een demo of een case uit hun branche. Zet een lead gen form op en zorg dat sales klaarstaat om snel op te volgen.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            LinkedIn Ads voor IT en software draait niet om zo veel mogelijk leads, maar om de juiste leads tegen een prijs die past bij wat een klant oplevert. Met scherpe targeting, sterke content en snelle opvolging wordt het een betrouwbare bron van B2B-kansen. Benieuwd wat LinkedIn voor jouw softwaregroei kan betekenen? Plan een gesprek via empowers.nl/contact.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Veelgestelde vragen</h2>
                    </div>

                    <section className="mt-4">
                        <div className="space-y-6 not-prose">
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Waarom werkt LinkedIn Ads goed voor IT- en softwarebedrijven?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Omdat je doelgroep er op functie en bedrijf te bereiken is. IT- en softwarebedrijven verkopen vaak aan specifieke rollen, zoals IT-managers, CTO's of inkopers. Op LinkedIn target je precies die titels en sectoren. Dat maakt het kanaal duur per klik, maar zeer geschikt als één klant veel waard is, zoals bij software met terugkerende abonnementen.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wie kun je als IT-bedrijf targeten op LinkedIn?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Je richt je op functietitels en functieniveaus, op bedrijfsgrootte en sector, en soms op specifieke bedrijven. Voor software target je bijvoorbeeld IT-beslissers binnen bedrijven van een bepaalde omvang in de sectoren die jouw oplossing nodig hebben. Hoe scherper je het ideale klantprofiel kent, hoe minder budget je verspilt aan mensen die nooit kopen.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Welke advertentievormen werken voor software-leads?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Lead gen forms werken goed omdat mensen hun gegevens achterlaten zonder de app of site te verlaten. Daarnaast zijn sponsored content en documentadvertenties sterk om een demo of een case study aan te bieden. Voor langere salestrajecten helpt het om eerst waarde te geven met content en pas daarna om een demo of gesprek te vragen.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoe zorg je voor kwalitatieve leads in plaats van losse klikken?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Door scherp te targeten en je aanbod af te stemmen op de fase waarin een beslisser zit. Een algemeen formulier trekt veel maar zwakke leads. Vraag in je formulier de juiste gegevens, sluit verkeerde functies uit en bied iets aan dat alleen relevant is voor echte kopers. Goede opvolging vanuit sales maakt het verschil tussen een lijst namen en echte kansen.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoeveel budget heb je nodig voor LinkedIn Ads als IT-bedrijf?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Genoeg om betrouwbaar te testen, want LinkedIn is duurder per klik dan andere kanalen. Omdat één softwareklant met een abonnement vaak veel oplevert, kan een hogere prijs per lead toch rendabel zijn. Bereken wat een klant je waard is over de hele looptijd en bepaal vanuit die waarde wat je per lead mag uitgeven.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoe lang duurt het voordat LinkedIn Ads leads oplevert?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    De eerste leads komen vaak snel binnen, maar de salescyclus in IT en software is lang. Een beslisser oriënteert zich, betrekt collega's en neemt soms maanden de tijd. Reken daarom niet alleen op directe aanvragen, maar bouw ook aan herkenning en vertrouwen, zodat je in beeld bent wanneer de koopbeslissing valt.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="mt-16 pt-12 border-t border-primary/10">
                        <h3 className="text-xl font-bold text-primary mb-6">Lees ook</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <Link to="/blogs/social-ads/linkedin-lead-gen-forms-waarom" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">LinkedIn lead gen forms</h3>
                                <p className="text-primary/60 text-sm">Waarom deze formulieren zo goed converteren.</p>
                            </Link>
                            <Link to="/blogs/social-ads/linkedin-abm-account-based-marketing" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Account-based marketing</h3>
                                <p className="text-primary/60 text-sm">Gericht je droomklanten benaderen op LinkedIn.</p>
                            </Link>
                            <Link to="/blogs/social-ads" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Social Ads blogs</h3>
                                <p className="text-primary/60 text-sm">Meer uit Meta, Instagram en TikTok halen.</p>
                            </Link>
                        </div>
                    </section>
                </div>
            </article>

            <section className="w-full pb-32 px-6">
                <div className="max-w-4xl mx-auto bg-primary rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
                    <h2 className="relative z-10 font-drama italic text-background text-3xl sm:text-4xl md:text-5xl mb-6">Kwalitatieve B2B-leads voor jouw software</h2>
                    <p className="relative z-10 font-sans text-background/70 text-lg mb-10 max-w-xl mx-auto">We bouwen LinkedIn-campagnes die de juiste IT-beslissers bereiken en leads opleveren die echt klant worden. Benieuwd wat dat voor jouw groei betekent?</p>
                    <Link to="/contact" className="relative z-10 btn-magnetic inline-flex items-center justify-center bg-accent text-background font-sans font-bold text-lg px-10 py-4 rounded-[2rem] hover:bg-accent/90 transition-colors">Neem contact op</Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
