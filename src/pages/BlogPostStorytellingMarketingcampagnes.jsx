import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ChevronRight, User } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function BlogPostStorytellingMarketingcampagnes() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen selection:bg-accent/30 selection:text-dark flex flex-col bg-background">
            <Helmet>
                <title>Hoe gebruik je storytelling in jouw marketingcampagnes? | Empowers</title>
                <meta name="description" content="Storytelling in marketingcampagnes maakt je boodschap herkenbaar en blijft beter hangen dan een rij voordelen. Zo bouw je een verhaal dat klanten laat handelen." />
                <link rel="canonical" href="https://www.empowers.nl/blogs/algemeen/gebruik-storytelling-marketingcampagnes" />
                <meta property="og:title" content="Hoe gebruik je storytelling in jouw marketingcampagnes?" />
                <meta property="og:description" content="Een verhaal verkoopt beter dan een opsomming. Zo zet je storytelling in voor advertenties, je website en e-mail." />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://www.empowers.nl/blogs/algemeen/gebruik-storytelling-marketingcampagnes" />
                <meta property="og:image" content="https://www.empowers.nl/images/blogs/gebruik-storytelling-marketingcampagnes.jpg" />
                <meta property="article:published_time" content="2026-06-22" />
                <meta property="article:author" content="Empowers" />
                <meta property="article:section" content="Algemeen" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Hoe gebruik je storytelling in jouw marketingcampagnes?" />
                <meta name="twitter:description" content="Een verhaal verkoopt beter dan een opsomming. Zo doe je het." />

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@graph": [
                            {
                                "@type": "Article",
                                "headline": "Hoe gebruik je storytelling in jouw marketingcampagnes?",
                                "description": "Storytelling in marketingcampagnes maakt je boodschap herkenbaar en blijft beter hangen dan een rij voordelen. Zo bouw je een verhaal dat klanten laat handelen.",
                                "image": "https://www.empowers.nl/images/blogs/gebruik-storytelling-marketingcampagnes.jpg",
                                "datePublished": "2026-06-22T10:00:00+02:00",
                                "dateModified": "2026-06-22T10:00:00+02:00",
                                "author": { "@type": "Organization", "name": "Empowers" },
                                "publisher": {
                                    "@type": "Organization", "name": "Empowers", "url": "https://www.empowers.nl",
                                    "logo": { "@type": "ImageObject", "url": "https://www.empowers.nl/empowers-logo-color.svg" }
                                },
                                "mainEntityOfPage": "https://www.empowers.nl/blogs/algemeen/gebruik-storytelling-marketingcampagnes"
                            },
                            {
                                "@type": "BreadcrumbList",
                                "itemListElement": [
                                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.empowers.nl" },
                                    { "@type": "ListItem", "position": 2, "name": "Blogs", "item": "https://www.empowers.nl/blogs" },
                                    { "@type": "ListItem", "position": 3, "name": "Algemeen", "item": "https://www.empowers.nl/blogs/algemeen" },
                                    { "@type": "ListItem", "position": 4, "name": "Storytelling in marketingcampagnes", "item": "https://www.empowers.nl/blogs/algemeen/gebruik-storytelling-marketingcampagnes" }
                                ]
                            },
                            {
                                "@type": "FAQPage",
                                "mainEntity": [
                                    {
                                        "@type": "Question",
                                        "name": "Wat is storytelling in marketing precies?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Storytelling in marketing is je boodschap vertellen als een verhaal met een begin, een spanning en een uitkomst, in plaats van een opsomming van productvoordelen. Je laat een herkenbare situatie zien, het probleem dat je klant voelt en wat er verandert nadat hij voor jou koos. Het doel is dat de lezer zich herkent en gaat handelen."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Werkt storytelling ook voor het MKB en kleine webshops?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Ja, juist voor het MKB. Je hebt geen groot budget of filmploeg nodig. Een eerlijk klantverhaal, een korte oprichtersgeschiedenis of een herkenbaar moment uit de praktijk doet vaak meer dan een dure productie. Kleine bedrijven hebben een voordeel: ze zijn persoonlijk en dichtbij, en dat is precies waar een verhaal op leunt."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Wie moet de held zijn in mijn verhaal?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Je klant, niet je bedrijf. De grootste fout is jezelf de hoofdrol geven. Maak de klant de held met een doel en een probleem, en plaats jezelf als de gids die hem verder helpt. Zo herkent de lezer zichzelf in het verhaal en voelt hij dat het over hem gaat, niet over jou."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Hoe lang mag een verhaal in een advertentie zijn?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Kort. In een advertentie heb je een paar seconden om iemand te raken. Open met een herkenbare situatie of een spanning, niet met je merknaam. Bewaar de uitgebreide versie voor je website of een e-mail, waar mensen langer de tijd nemen. Op social media wint het verhaal dat in de eerste zin al haakt."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Mag ik klantverhalen verzinnen als ik nog weinig cases heb?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Nee. Een verzonnen verhaal valt vroeg of laat door de mand en kost je vertrouwen. Heb je nog weinig cases, gebruik dan je eigen oprichtersverhaal, een veelvoorkomende vraag van klanten of een herkenbaar probleem uit je branche. Eerlijk en klein is sterker dan groot en bedacht."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Hoe meet ik of storytelling werkt in mijn campagne?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Kijk naar betrokkenheid en gedrag, niet alleen naar verkoop. Hoeveel mensen kijken een video uit, hoe lang blijven bezoekers op de pagina, hoeveel reacties en doorkliks krijgt een post. Test een verhalende versie tegen een feitelijke versie van dezelfde advertentie. De cijfers laten zien welke aanpak beter blijft hangen bij jouw publiek."
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
                        <Link to="/blogs/algemeen" className="hover:text-accent transition-colors">Algemeen</Link>
                        <ChevronRight className="w-3 h-3" />
                        <span className="text-primary truncate">Storytelling in marketingcampagnes</span>
                    </nav>

                    <header className="mb-16">
                        <div className="inline-block px-3 py-1 bg-accent/10 text-accent font-mono text-xs uppercase tracking-widest rounded-full mb-6">
                            Algemeen
                        </div>
                        <h1 className="font-sans font-bold text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight mb-8">
                            Hoe gebruik je storytelling in jouw marketingcampagnes?
                        </h1>

                        <div className="flex flex-wrap items-center gap-6 text-sm font-sans text-primary/60 border-y border-primary/10 py-6">
                            <div className="flex items-center gap-2"><User className="w-4 h-4" /><span>Empowers Redactie</span></div>
                            <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>22 juni 2026</span></div>
                            <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>8 minuten leestijd</span></div>
                        </div>
                    </header>

                    <figure className="w-full h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden mb-16 relative bg-primary">
                        <div className="absolute inset-0 bg-[url('/images/blogs/gebruik-storytelling-marketingcampagnes.jpg')] bg-cover bg-center opacity-40 mix-blend-overlay" style={{backgroundImage: "url('/images/blogs/gebruik-storytelling-marketingcampagnes.jpg')"}}></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </figure>

                    <div className="prose prose-lg max-w-none prose-headings:text-primary prose-headings:font-bold prose-a:text-accent prose-a:underline hover:prose-a:text-accent/80">
                        <p className="text-xl leading-relaxed text-primary/80 font-medium mb-6">
                            Storytelling in marketingcampagnes betekent dat je een verhaal vertelt in plaats van een rij voordelen opsomt. Je laat een herkenbare situatie zien, het probleem dat je klant voelt en wat er verandert nadat hij voor jou kiest. Een verhaal blijft beter hangen dan een losse feitenlijst, omdat mensen zich verbinden met mensen en niet met productspecificaties.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat is storytelling in marketing precies?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Het is geen sprookjes vertellen. Storytelling is je boodschap verpakken in een situatie met een begin, een spanning en een uitkomst. Niet "ons boekhoudpakket bespaart tijd", maar "Sanne werkte elke zondagavond door om haar facturen bij te werken, tot ze stopte met dat gevecht". Hetzelfde feit, een totaal ander effect. Het eerste lees je en vergeet je. Het tweede zie je voor je.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De kern van elk goed verhaal is verandering. Iemand staat ergens, loopt tegen iets aan en komt op een betere plek uit. Die boog herkennen mensen meteen, want zo ervaren ze hun eigen leven ook. Een advertentie die alleen kenmerken opsomt, mist die boog. Daarom voelt hij vlak, hoe netjes hij ook is opgemaakt.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Waarom werkt een verhaal beter dan een opsomming van voordelen?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Mensen onthouden verhalen beter dan losse feiten. Een rij specificaties spreekt het deel van je brein aan dat afweegt en vergelijkt. Een verhaal raakt het deel dat voelt en zich inleeft. En de meeste aankoopbeslissingen beginnen bij een gevoel, dat we daarna met argumenten goedpraten. Wie alleen op de ratio mikt, mist het moment waarop de keuze eigenlijk valt.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een verhaal doet nog iets: het maakt je concreet. "Wij leveren snel" zegt niets, iedereen zegt dat. "Je bestelt voor 23.00 uur en de doos staat de volgende ochtend voor je deur" laat het zien. Concreet wint van abstract, en een verhaal dwingt je om concreet te worden. Wil je dieper begrijpen hoe mensen kiezen, lees dan onze blog over de <Link to="/blogs/algemeen/psychologie-achter-effectieve-advertenties" className="text-accent hover:underline">psychologie achter effectieve advertenties</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wie is de held in jouw verhaal?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Niet jij. Dit is de fout die we het vaakst tegenkomen. Bedrijven maken zichzelf de held: kijk hoe goed wij zijn, hoeveel jaar ervaring, hoeveel prijzen. De klant haakt af, want het gaat niet over hem. Draai het om. De klant is de held met een doel en een obstakel. Jij bent de gids die hem verder helpt.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Denk aan elke film die je kent. De held is de hoofdpersoon, de mentor reikt het gereedschap aan en stapt dan naar de achtergrond. Zo werkt het ook bij jouw merk. De klant moet zich herkennen in het probleem en zichzelf zien winnen met jouw hulp. Een scherp beeld van die klant helpt enorm, en daar gaat onze blog over <Link to="/blogs/algemeen/buyer-personas-marketingcampagnes-echt-verbeteren" className="text-accent hover:underline">buyer persona's</Link> dieper op in.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Welke verhaalstructuur kun je gebruiken?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De simpelste die werkt is probleem, spanning, oplossing. Begin bij het probleem dat je klant echt voelt. Bouw daarna de spanning op: wat kost het hem als het zo blijft, welke avonden of welke omzet lopen weg. Sluit af met de uitkomst nadat hij voor jou koos. Die volgorde houdt de lezer vast tot het eind.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een tweede vorm die altijd het doet, is voor en na. Laat zien hoe het was en hoe het werd. Een webshop die elke maand klanten verloor in de checkout, en na een paar aanpassingen weer doorverkocht. Mensen vullen het tussenstuk zelf in en projecteren hun eigen situatie op het verhaal. Dat is precies wat je wil.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe pas je storytelling toe in een advertentie?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Op social media tellen de eerste seconden. Open nooit met je logo of je aanbieding, maar met een herkenbaar moment. "Het is 22.00 uur en je zit nog steeds in je administratie." Wie zich daarin herkent, blijft kijken. Pas daarna komt jouw rol als gids in beeld. De aanbieding sluit het verhaal af, hij opent het niet.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Houd het in een advertentie kort en op één spanning gericht. Je hoeft niet het hele verhaal te vertellen, alleen genoeg om iemand te raken en door te laten klikken. De uitgebreide versie bewaar je voor de landingspagina, waar de bezoeker al interesse heeft getoond en langer wil lezen.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe gebruik je storytelling op je website en in e-mail?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Je overpagina is de meest verspilde kans op de meeste websites. Daar staat vaak een droge bedrijfsbeschrijving, terwijl het de plek is voor het verhaal van waarom je begon en voor wie je het doet. Mensen lezen die pagina juist omdat ze willen weten met wie ze zaken doen. Geef ze een verhaal, geen feitenblad.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            In e-mail werkt een verhaal nog sterker, omdat je daar ruimte en tijd hebt. Een reeks mails die een klant meeneemt van probleem naar oplossing leest beter dan een reeks losse aanbiedingen. Een echte klantcase, verteld als verhaal, doet meer dan tien bullets met voordelen. Dat dezelfde stem in elke mail terugkomt, helpt enorm, en daar gaat onze blog over <Link to="/blogs/algemeen/tone-of-voice-bepalen-klinkt-merk" className="text-accent hover:underline">tone of voice bepalen</Link> over.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Welke fouten maken ondernemers met storytelling?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De eerste is een verhaal vertellen zonder punt. Een leuk anekdotje dat nergens heen gaat, kost de lezer tijd en levert niets op. Elk verhaal moet ergens op uitkomen, een gevoel of een actie. De tweede fout is jezelf de held maken, zoals eerder beschreven. De derde is verzinnen. Een bedacht klantverhaal voelt vals en valt op den duur door de mand.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een laatste valkuil is te lang willen zijn. Een goed verhaal is zo kort als het kan en zo lang als het moet. Schrap alles wat de spanning niet dient. Halveer eens de tekst onder een productvideo en kijk wat de doorklik doet, want vaak landt de boodschap dan sneller. Minder woorden, meer effect.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe meet je of storytelling werkt?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Verkoop is het einddoel, maar het zegt niet alles over je verhaal. Kijk eerst naar betrokkenheid. Hoeveel mensen kijken je video helemaal uit, hoe lang blijven bezoekers op je verhalende pagina, hoeveel reacties en doorkliks krijgt een post met een verhaal versus een post met een aanbieding. Die signalen vertellen je of het verhaal landt.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De zuiverste test is een directe vergelijking. Maak twee versies van dezelfde advertentie, één verhalend en één feitelijk, en laat ze naast elkaar lopen. De cijfers wijzen vanzelf de winnaar aan voor jouw publiek. Wil je leren beter te sturen op zulke data, lees dan onze blog over <Link to="/blogs/algemeen/data-betere-marketingbeslissingen" className="text-accent hover:underline">betere marketingbeslissingen met data</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Waar begin je deze week?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Pak één klant die blij is met je werk en vraag hoe het was voordat hij bij je kwam. Daar zit je verhaal. Schrijf het op als probleem, spanning en uitkomst, in spreektaal, zonder mooie woorden. Test het daarna in een korte advertentie of een mail en kijk wat er gebeurt. Eén goed verhaal is genoeg om te beginnen.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Storytelling is geen trucje dat je één keer toepast, maar een manier van communiceren die je merk menselijk maakt. Begin klein, blijf eerlijk en bouw uit wat werkt. Een verhaal dat klopt, blijft hangen lang nadat de advertentie is weggescrold.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Veelgestelde vragen</h2>
                    </div>

                    <section className="mt-4">
                        <div className="space-y-6 not-prose">
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat is storytelling in marketing precies?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Storytelling in marketing is je boodschap vertellen als een verhaal met een begin, een spanning en een uitkomst, in plaats van een opsomming van productvoordelen. Je laat een herkenbare situatie zien, het probleem dat je klant voelt en wat er verandert nadat hij voor jou koos. Het doel is dat de lezer zich herkent en gaat handelen.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Werkt storytelling ook voor het MKB en kleine webshops?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Ja, juist voor het MKB. Je hebt geen groot budget of filmploeg nodig. Een eerlijk klantverhaal, een korte oprichtersgeschiedenis of een herkenbaar moment uit de praktijk doet vaak meer dan een dure productie. Kleine bedrijven hebben een voordeel: ze zijn persoonlijk en dichtbij, en dat is precies waar een verhaal op leunt.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wie moet de held zijn in mijn verhaal?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Je klant, niet je bedrijf. De grootste fout is jezelf de hoofdrol geven. Maak de klant de held met een doel en een probleem, en plaats jezelf als de gids die hem verder helpt. Zo herkent de lezer zichzelf in het verhaal en voelt hij dat het over hem gaat, niet over jou.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoe lang mag een verhaal in een advertentie zijn?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Kort. In een advertentie heb je een paar seconden om iemand te raken. Open met een herkenbare situatie of een spanning, niet met je merknaam. Bewaar de uitgebreide versie voor je website of een e-mail, waar mensen langer de tijd nemen. Op social media wint het verhaal dat in de eerste zin al haakt.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Mag ik klantverhalen verzinnen als ik nog weinig cases heb?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Nee. Een verzonnen verhaal valt vroeg of laat door de mand en kost je vertrouwen. Heb je nog weinig cases, gebruik dan je eigen oprichtersverhaal, een veelvoorkomende vraag van klanten of een herkenbaar probleem uit je branche. Eerlijk en klein is sterker dan groot en bedacht.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoe meet ik of storytelling werkt in mijn campagne?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Kijk naar betrokkenheid en gedrag, niet alleen naar verkoop. Hoeveel mensen kijken een video uit, hoe lang blijven bezoekers op de pagina, hoeveel reacties en doorkliks krijgt een post. Test een verhalende versie tegen een feitelijke versie van dezelfde advertentie. De cijfers laten zien welke aanpak beter blijft hangen bij jouw publiek.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="mt-16 pt-12 border-t border-primary/10">
                        <h3 className="text-xl font-bold text-primary mb-6">Lees ook</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <Link to="/blogs/algemeen/psychologie-achter-effectieve-advertenties" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Psychologie van advertenties</h3>
                                <p className="text-primary/60 text-sm">Welke principes laten advertenties echt werken.</p>
                            </Link>
                            <Link to="/blogs/algemeen/bouw-sterke-merkidentiteit-online" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Sterke merkidentiteit</h3>
                                <p className="text-primary/60 text-sm">Van logo naar een merk dat klanten onthouden.</p>
                            </Link>
                            <Link to="/blogs/algemeen" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Algemene blogs</h3>
                                <p className="text-primary/60 text-sm">Strategie en groei voor het MKB.</p>
                            </Link>
                        </div>
                    </section>
                </div>
            </article>

            <section className="w-full pb-32 px-6">
                <div className="max-w-4xl mx-auto bg-primary rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
                    <h2 className="relative z-10 font-drama italic text-background text-3xl sm:text-4xl md:text-5xl mb-6">Vertel het verhaal dat klanten laat handelen</h2>
                    <p className="relative z-10 font-sans text-background/70 text-lg mb-10 max-w-xl mx-auto">We helpen je een verhaal bouwen dat past bij je merk en zorgen dat het landt in je advertenties, op je website en in je mails. Benieuwd wat dat voor jou kan opleveren?</p>
                    <Link to="/contact" className="relative z-10 btn-magnetic inline-flex items-center justify-center bg-accent text-background font-sans font-bold text-lg px-10 py-4 rounded-[2rem] hover:bg-accent/90 transition-colors">Neem contact op</Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
