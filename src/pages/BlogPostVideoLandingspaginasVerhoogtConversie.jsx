import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ChevronRight, User } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function BlogPostVideoLandingspaginasVerhoogtConversie() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen selection:bg-accent/30 selection:text-dark flex flex-col bg-background">
            <Helmet>
                <title>Video op je landingspagina: verhoogt het echt je conversie? | Empowers</title>
                <meta name="description" content="Een video op je landingspagina belooft hogere conversie. Maar werkt dat altijd? Lees wanneer video helpt, wanneer het tegen je werkt en hoe je hem inzet." />
                <link rel="canonical" href="https://www.empowers.nl/blogs/strategie/video-landingspaginas-verhoogt-conversie" />
                <meta property="og:title" content="Video op je landingspagina: verhoogt het echt je conversie?" />
                <meta property="og:description" content="Wanneer video je conversie helpt en wanneer hij hem juist breekt." />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://www.empowers.nl/blogs/strategie/video-landingspaginas-verhoogt-conversie" />
                <meta property="og:image" content="https://www.empowers.nl/images/blogs/video-landingspaginas-verhoogt-conversie.jpg" />
                <meta property="article:published_time" content="2026-05-11T00:00:00+02:00" />
                <meta property="article:author" content="Empowers" />
                <meta property="article:section" content="Strategie" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Video op je landingspagina: ja of nee?" />
                <meta name="twitter:description" content="Wanneer video je conversie helpt en wanneer hij hem juist breekt." />

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Article",
                        "headline": "Video op je landingspagina: verhoogt het echt je conversie?",
                        "description": "Een video op je landingspagina belooft hogere conversie. Maar werkt dat altijd? Lees wanneer video helpt, wanneer het tegen je werkt en hoe je hem inzet.",
                        "image": "https://www.empowers.nl/images/blogs/video-landingspaginas-verhoogt-conversie.jpg",
                        "datePublished": "2026-05-11T00:00:00+02:00",
                        "author": { "@type": "Organization", "name": "Empowers" },
                        "publisher": {
                            "@type": "Organization",
                            "name": "Empowers",
                            "url": "https://www.empowers.nl",
                            "logo": { "@type": "ImageObject", "url": "https://www.empowers.nl/empowers-logo-color.svg" }
                        },
                        "mainEntity": {
                            "@type": "FAQPage",
                            "mainEntity": [
                                { "@type": "Question", "name": "Verhoogt video op een landingspagina altijd de conversie?", "acceptedAnswer": { "@type": "Answer", "text": "Nee. Video kan conversie verhogen wanneer hij iets uitlegt wat tekst niet goed kan, bijvoorbeeld een complex product of dienst. Voor eenvoudige aanbiedingen waar de bezoeker al weet wat hij wil, is video vaak een vertrager. Plaats hem op de juiste plek en zorg dat hij niet automatisch start met geluid." } },
                                { "@type": "Question", "name": "Hoe lang mag een video op een landingspagina zijn?", "acceptedAnswer": { "@type": "Answer", "text": "Houd het kort. Voor een uitleg of demo werkt 60 tot 90 seconden meestal goed. Voor een klanttestimonial volstaat soms 30 seconden. Onder de minuut blijven dwingt je tot scherpte. Lange video's worden vaak weggeklikt voordat de boodschap binnenkomt." } },
                                { "@type": "Question", "name": "Moet de video automatisch afspelen?", "acceptedAnswer": { "@type": "Answer", "text": "Automatisch afspelen kan, maar zet het geluid uit en toon ondertitels. Geluid dat zonder waarschuwing aanknalt schrikt mensen af, vooral op kantoor of in het openbaar vervoer. Een stille autoplay-video met duidelijke ondertitels werkt het beste." } },
                                { "@type": "Question", "name": "Waar plaats ik de video op de pagina?", "acceptedAnswer": { "@type": "Answer", "text": "Plaats de video boven de vouw alleen als hij essentieel is voor het begrijpen van je aanbod. Anders zit hij beter halverwege de pagina, na de eerste tekst en sociale proof. Een video die de bezoeker meteen ziet kan afleiden van de hoofdboodschap en de CTA." } },
                                { "@type": "Question", "name": "Is hosten op YouTube of zelf hosten beter?", "acceptedAnswer": { "@type": "Answer", "text": "Voor pure marketingvideo's op je landingspagina werkt een lichte zelfhost-oplossing of Wistia of Vimeo vaak beter. YouTube voegt suggesties van andere video's toe aan het einde, en je geeft je bezoeker een afslag naar YouTube. Wistia en Vimeo houden de bezoeker op je pagina." } },
                                { "@type": "Question", "name": "Wat voor video werkt het best?", "acceptedAnswer": { "@type": "Answer", "text": "Klanttestimonials zijn nummer één. Authentieke verhalen van echte gebruikers wegen zwaarder dan productdemo's. Op de tweede plek komt een korte uitleg of demo. Op derde plek een persoonlijke video van de eigenaar die het probleem en de oplossing in eigen woorden uitlegt." } }
                            ]
                        }
                    })}
                </script>

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "BreadcrumbList",
                        "itemListElement": [
                            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.empowers.nl" },
                            { "@type": "ListItem", "position": 2, "name": "Blogs", "item": "https://www.empowers.nl/blogs" },
                            { "@type": "ListItem", "position": 3, "name": "Strategie", "item": "https://www.empowers.nl/blogs/strategie" },
                            { "@type": "ListItem", "position": 4, "name": "Video op landingspagina's", "item": "https://www.empowers.nl/blogs/strategie/video-landingspaginas-verhoogt-conversie" }
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
                        <Link to="/blogs/strategie" className="hover:text-accent transition-colors">Strategie</Link>
                        <ChevronRight className="w-3 h-3" />
                        <span className="text-primary truncate">Video op landingspagina's</span>
                    </nav>

                    <header className="mb-16">
                        <div className="inline-block px-3 py-1 bg-accent/10 text-accent font-mono text-xs uppercase tracking-widest rounded-full mb-6">Strategie</div>
                        <h1 className="font-sans font-bold text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight mb-8">
                            Video op je landingspagina: verhoogt het echt je conversie?
                        </h1>
                        <div className="flex flex-wrap items-center gap-6 text-sm font-sans text-primary/60 border-y border-primary/10 py-6">
                            <div className="flex items-center gap-2"><User className="w-4 h-4" /><span>Empowers Redactie</span></div>
                            <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>11 mei 2026</span></div>
                            <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>7 minuten leestijd</span></div>
                        </div>
                    </header>

                    <figure className="w-full h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden mb-16 relative bg-primary">
                        <div className="absolute inset-0 bg-[url('/images/blogs/video-landingspaginas-verhoogt-conversie.jpg')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </figure>

                    <div className="prose prose-lg max-w-none prose-headings:text-primary prose-headings:font-bold prose-a:text-accent prose-a:underline hover:prose-a:text-accent/80">
                        <p className="text-xl leading-relaxed text-primary/80 font-medium mb-6">
                            &ldquo;Zet er een video op, dan converteert hij beter.&rdquo; Het advies klinkt simpel en wordt overal herhaald. In de praktijk werkt het wisselend. Soms verdubbelt video je conversie, soms verlaagt hij hem. Het verschil zit in plaatsing, formaat en wat de video eigenlijk laat zien. Dit artikel legt uit wanneer video werkt en wanneer hij averechts uitpakt.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat video echt doet met conversie</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Video helpt op één plek heel goed: bij producten of diensten die uitleg vragen. Een tool met een complexe interface, een dienst waar mensen niet meteen zien wat ze krijgen, een SaaS-product met een functionaliteit die op tekst saai overkomt. Hier kan een korte demo van 60 seconden meer doen dan twee schermen tekst.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Voor producten of diensten die zichzelf uitleggen, werkt video vaak averechts. Een simpel boekje, een standaard advieskantoor, een lokale loodgieter. De bezoeker weet al wat hij wil. Een video zet hem op pauze in zijn beslissing.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">De vier vormen die wel werken</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            In account-data van klanten zien we vier videovormen die structureel positief bijdragen aan conversie. Elke vorm heeft een eigen plek op de pagina en een eigen doel.
                        </p>

                        <h3 className="text-xl font-semibold text-primary mt-10 mb-4">De klanttestimonial</h3>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een echte klant die in zijn eigen woorden vertelt wat het probleem was en wat de oplossing voor hem deed. Authentiek, geen scripted commercial. Houd het onder 60 seconden. Twee of drie van deze video's op een pagina werken sterker dan tien geschreven quotes.
                        </p>

                        <h3 className="text-xl font-semibold text-primary mt-10 mb-4">De product- of dienstdemo</h3>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Laat in 90 seconden zien hoe het werkt. Beeld het probleem aan het begin uit, dan jouw oplossing in actie. Voor SaaS werkt een schermopname met voice-over. Voor diensten een korte filmische sequentie van iemand die het proces doorloopt. Belangrijk: laat het product groot in beeld, niet een sprekende persoon ervoor.
                        </p>

                        <h3 className="text-xl font-semibold text-primary mt-10 mb-4">De founder-uitleg</h3>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Vooral voor kleinere bedrijven en dienstverleners werkt een persoonlijke video van de eigenaar verrassend goed. Geen acteur, gewoon iemand die rustig in de camera vertelt waarom dit bedrijf bestaat en wat het oplost. De productiewaarde mag lager zijn. Echtheid wint van glans.
                        </p>

                        <h3 className="text-xl font-semibold text-primary mt-10 mb-4">De use-case animatie</h3>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Voor abstracte diensten (boekhouding, juridisch advies, consulting) kan een korte geanimeerde uitleg helpen. Wel oppassen: cartoons met te veel humor leiden af van de boodschap. Houd de animatie functioneel, niet entertainment.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Waar zet je hem neer?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De positie van je video bepaalt mee of hij werkt. Een video meteen boven de vouw kan je hoofdboodschap overstemmen. De bezoeker komt voor een belofte, niet voor een filmpje. Plaats hem dus na de eerste hero-tekst en sociale proof, op het moment dat iemand denkt: &ldquo;Vertel me meer.&rdquo;
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Uitzondering: een echte klanttestimonial die direct werkt als bewijs voor je belofte. Die kan wel hoog op de pagina. Maar dan zonder autoplay met geluid, want dat schrikt af. Wil je meer weten over de opbouw van je pagina, lees onze <Link to="/blogs/strategie/perfecte-hero-sectie-beste-eerste" className="text-accent hover:underline">blog over de perfecte hero-sectie</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Technische valkuilen die conversie kosten</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een video kan technisch flink wat conversie kosten als je niet oplet. De grootste boosdoener is paginasnelheid. Een zware video die direct laadt, vertraagt je hele pagina. Resultaat: bezoekers haken af nog voor ze überhaupt iets zien. Gebruik daarom een hostservice die lazy-load ondersteunt, en laat de video pas inladen als de bezoeker scrolt.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            YouTube als host is gratis maar voegt elementen toe die niet bij jou horen: gerelateerde video's aan het einde, suggesties tijdens het pauzeren, en het YouTube-logo dat de aandacht naar hun platform trekt. Wistia en Vimeo zijn betaald maar houden de bezoeker op jouw pagina. Voor een belangrijke conversiepagina is dat het verschil waard.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Geluid is een ander struikelpunt. Veel bezoekers landen op je pagina vanaf kantoor of in het openbaar vervoer. Een video die met geluid aanknalt, levert directe weg-clicks op. Standaard muted afspelen met goede ondertitels werkt meestal beter. Veel mobiele browsers blokkeren bovendien autoplay met geluid sowieso.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe meet je of de video werkt?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Test eerst, geloof daarna. Een gangbare aanpak: zet de pagina met video tegenover een identieke pagina zonder video. Stuur evenveel verkeer naar beide. Meet niet alleen conversieratio, maar ook scroll depth en tijd op de pagina. Soms wint de versie zonder video op conversie, maar wint de versie met video op vervolgmail-opt-ins. Beslis op basis van je echte doel, niet op een vuistregel uit een marketingblog.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Wil je hulp om je landingspagina A/B te testen? We helpen je het juiste experiment opzetten zonder budget te verbranden. Plan een gesprek via onze <Link to="/contact" className="text-accent hover:underline">contactpagina</Link>.
                        </p>
                    </div>

                    <section className="mt-16 pt-12 border-t border-primary/10">
                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Veelgestelde vragen</h2>
                        <div className="space-y-6 not-prose">
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Verhoogt video op een landingspagina altijd de conversie?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Nee. Video kan conversie verhogen wanneer hij iets uitlegt wat tekst niet goed kan, bijvoorbeeld een complex product of dienst. Voor eenvoudige aanbiedingen waar de bezoeker al weet wat hij wil, is video vaak een vertrager. Plaats hem op de juiste plek en zorg dat hij niet automatisch start met geluid.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoe lang mag een video op een landingspagina zijn?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Houd het kort. Voor een uitleg of demo werkt 60 tot 90 seconden meestal goed. Voor een klanttestimonial volstaat soms 30 seconden. Onder de minuut blijven dwingt je tot scherpte. Lange video's worden vaak weggeklikt voordat de boodschap binnenkomt.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Moet de video automatisch afspelen?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Automatisch afspelen kan, maar zet het geluid uit en toon ondertitels. Geluid dat zonder waarschuwing aanknalt schrikt mensen af, vooral op kantoor of in het openbaar vervoer. Een stille autoplay-video met duidelijke ondertitels werkt het beste.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Waar plaats ik de video op de pagina?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Plaats de video boven de vouw alleen als hij essentieel is voor het begrijpen van je aanbod. Anders zit hij beter halverwege de pagina, na de eerste tekst en sociale proof. Een video die de bezoeker meteen ziet kan afleiden van de hoofdboodschap en de CTA.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Is hosten op YouTube of zelf hosten beter?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Voor pure marketingvideo's op je landingspagina werkt een lichte zelfhost-oplossing of Wistia of Vimeo vaak beter. YouTube voegt suggesties van andere video's toe aan het einde, en je geeft je bezoeker een afslag naar YouTube. Wistia en Vimeo houden de bezoeker op je pagina.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat voor video werkt het best?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Klanttestimonials zijn nummer één. Authentieke verhalen van echte gebruikers wegen zwaarder dan productdemo's. Op de tweede plek komt een korte uitleg of demo. Op derde plek een persoonlijke video van de eigenaar die het probleem en de oplossing in eigen woorden uitlegt.</p>
                            </div>
                        </div>
                    </section>

                    <section className="mt-16 pt-12 border-t border-primary/10">
                        <h3 className="text-xl font-bold text-primary mb-6">Lees ook</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <Link to="/blogs/strategie/landingspagina-schrijven-converteert" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Landingspagina die converteert</h3>
                                <p className="text-primary/60 text-sm">Structuur en koppen die bezoekers wel omzetten.</p>
                            </Link>
                            <Link to="/blogs/strategie/perfecte-hero-sectie-beste-eerste" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Perfecte hero-sectie</h3>
                                <p className="text-primary/60 text-sm">De eerste indruk die wel binnenkomt.</p>
                            </Link>
                            <Link to="/blogs/strategie/stem-landingspagina-af-google-ads" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Landingspagina afstemmen op Google Ads</h3>
                                <p className="text-primary/60 text-sm">Advertentie en pagina als één geheel.</p>
                            </Link>
                        </div>
                    </section>
                </div>
            </article>

            <section className="w-full pb-32 px-6">
                <div className="max-w-4xl mx-auto bg-primary rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
                    <h2 className="relative z-10 font-drama italic text-background text-3xl sm:text-4xl md:text-5xl mb-6">Landingspagina die wél omzet?</h2>
                    <p className="relative z-10 font-sans text-background/70 text-lg mb-10 max-w-xl mx-auto">We kijken samen of video bij jouw aanbod past, of dat een sterke tekst meer doet. Geen vaste antwoorden, wel een helder advies.</p>
                    <Link to="/contact" className="relative z-10 btn-magnetic inline-flex items-center justify-center bg-accent text-background font-sans font-bold text-lg px-10 py-4 rounded-[2rem] hover:bg-accent/90 transition-colors">Neem contact op</Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
