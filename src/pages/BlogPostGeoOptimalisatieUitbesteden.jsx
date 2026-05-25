import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ChevronRight, User } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function BlogPostGeoOptimalisatieUitbesteden() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen selection:bg-accent/30 selection:text-dark flex flex-col bg-background">
            <Helmet>
                <title>GEO optimalisatie uitbesteden: waarom steeds meer bedrijven dit doen | Empowers</title>
                <meta name="description" content="Steeds meer bedrijven besteden GEO optimalisatie uit. Lees wat het inhoudt, wanneer het loont en hoe je een goede GEO specialist herkent." />
                <meta name="keywords" content="geo optimalisatie uitbesteden, GEO specialist, generative engine optimization bureau, GEO uitbesteden kosten" />
                <link rel="canonical" href="https://www.empowers.nl/blogs/geo/geo-optimalisatie-uitbesteden" />
                <meta property="og:title" content="GEO optimalisatie uitbesteden: waarom steeds meer bedrijven dit doen" />
                <meta property="og:description" content="Wat houdt GEO uitbesteden in, wanneer loont het en hoe onderscheid je een goede GEO partner van een slechte?" />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://www.empowers.nl/blogs/geo/geo-optimalisatie-uitbesteden" />
                <meta property="og:image" content="https://www.empowers.nl/images/blogs/geo-optimalisatie-uitbesteden.jpg" />
                <meta property="article:published_time" content="2026-05-24" />
                <meta property="article:author" content="Empowers" />
                <meta property="article:section" content="GEO" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="GEO optimalisatie uitbesteden: wat je moet weten" />
                <meta name="twitter:description" content="Wanneer heeft het zin om GEO optimalisatie uit te besteden en wat mag je verwachten van een specialist?" />

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Article",
                        "headline": "GEO optimalisatie uitbesteden: waarom steeds meer bedrijven dit doen",
                        "description": "Wat houdt GEO optimalisatie uitbesteden in, wanneer loont het en hoe herken je een goede GEO partner?",
                        "image": "https://www.empowers.nl/images/blogs/geo-optimalisatie-uitbesteden.jpg",
                        "datePublished": "2026-05-24T09:00:00+02:00",
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
                                {
                                    "@type": "Question",
                                    "name": "Wat kost GEO optimalisatie uitbesteden?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "De kosten variëren sterk per scope. Een eenmalige analyse plus technische basisoptimalisatie kost minder dan een doorlopend traject waarbij content en doorlopende monitoring allemaal zijn inbegrepen. De meeste bureaus werken met een maandelijks retainer, vergelijkbaar met een SEO-traject. Wat je in elk geval vermijdt: jarenlang zelf tijd investeren in iets wat je collega's sneller en beter kunnen."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Is GEO uitbesteden zinvol als ik een klein bedrijf heb?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Dat hangt af van je markt, niet van je bedrijfsgrootte. Als jouw potentiële klanten vragen stellen aan AI-chatbots voordat ze contact opnemen, is GEO al relevant. Voor bedrijven die draaien op lokale mond-tot-mondreclame of impulsaankopen is de urgentie lager. Een goede GEO specialist helpt je snel te bepalen of dit voor jou nu loont."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Hoe verschilt GEO uitbesteden van SEO uitbesteden?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Bij SEO stuur je op rankings in Google en meet je organisch verkeer. Bij GEO stuur je op citaties in AI-antwoorden en meet je merk-vermeldingen in AI-platforms als ChatGPT en Perplexity. De technische overlap is er, maar de content-aanpak en de meetmethode zijn wezenlijk anders. Een specialist die alleen over rankings praat, doet feitelijk geen GEO."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Hoe lang duurt het voordat GEO-werk resultaat oplevert?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Reken op acht tot twaalf weken voor de eerste aantoonbare citaties. AI-modellen updaten hun kennisbases niet op een vaste frequentie, maar goed gestructureerde antwoord-content werkt doorgaans sneller door dan een klassiek SEO-artikel. Na zes maanden heb je een patroon van waar je staat en wat nog bijgestuurd moet worden."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Kan ik GEO deels zelf doen en deels uitbesteden?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Ja, dat werkt voor veel bedrijven goed. De technische implementatie en de strategie leg je bij een specialist neer. De contentproductie kun je zelf of met een freelancer invullen op basis van de doelvragen die de specialist aanlevert. Zo bespaar je op maandelijkse kosten en houd je grip op je eigen toon en kennis."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Hoe controleer ik of een GEO bureau goed werk levert?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Vraag naar de meetmethode. Een serieuze partner toont je maandelijks welke vragen jouw merk nu opleveren in AI-antwoorden, in welke platforms en naast welke concurrenten. Als de rapportage alleen gaat over publiceerde artikelen of Google-rankings, meet je geen GEO. Vraag ook naar concrete voorbeelden bij andere klanten in een vergelijkbare niche."
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
                            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.empowers.nl" },
                            { "@type": "ListItem", "position": 2, "name": "Blogs", "item": "https://www.empowers.nl/blogs" },
                            { "@type": "ListItem", "position": 3, "name": "GEO", "item": "https://www.empowers.nl/blogs/geo" },
                            { "@type": "ListItem", "position": 4, "name": "GEO optimalisatie uitbesteden", "item": "https://www.empowers.nl/blogs/geo/geo-optimalisatie-uitbesteden" }
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
                        <Link to="/blogs/geo" className="hover:text-accent transition-colors">GEO</Link>
                        <ChevronRight className="w-3 h-3" />
                        <span className="text-primary truncate">GEO uitbesteden</span>
                    </nav>

                    <header className="mb-16">
                        <div className="inline-block px-3 py-1 bg-accent/10 text-accent font-mono text-xs uppercase tracking-widest rounded-full mb-6">
                            GEO
                        </div>
                        <h1 className="font-sans font-bold text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight mb-8">
                            GEO optimalisatie uitbesteden: waarom steeds meer bedrijven dit doen
                        </h1>
                        <div className="flex flex-wrap items-center gap-6 text-sm font-sans text-primary/60 border-y border-primary/10 py-6">
                            <div className="flex items-center gap-2"><User className="w-4 h-4" /><span>Empowers Redactie</span></div>
                            <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>24 mei 2026</span></div>
                            <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>7 minuten leestijd</span></div>
                        </div>
                    </header>

                    <figure className="w-full h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden mb-16 relative bg-primary">
                        <div className="absolute inset-0 bg-[url('/images/blogs/geo-optimalisatie-uitbesteden.jpg')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </figure>

                    <div className="prose prose-lg max-w-none prose-headings:text-primary prose-headings:font-bold prose-a:text-accent prose-a:underline hover:prose-a:text-accent/80">
                        <p className="text-xl leading-relaxed text-primary/80 font-medium mb-6">
                            GEO optimalisatie uitbesteden was een jaar geleden nog een beslissing die weinig ondernemers namen. Nu is het voor een groeiende groep bedrijven de logische volgende stap. Niet omdat het te moeilijk is om zelf te doen, maar omdat het doorlopende aandacht vraagt die de meeste ondernemers simpelweg niet hebben. En omdat snelheid in dit kanaal het verschil maakt.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat GEO uitbesteden in de praktijk betekent</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            GEO staat voor Generative Engine Optimization. Het is de praktijk van je website zo inrichten dat AI-zoekmachines zoals ChatGPT en Perplexity jouw merk noemen wanneer iemand een relevante vraag stelt. Wie het concept eerst wil doorgronden, vindt een heldere uitleg in onze gids over <Link to="/blogs/geo/wat-is-geo-generative-engine-optimization" className="text-accent hover:underline">wat GEO is en hoe je begint</Link>.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Uitbesteden betekent dat je een specialist toegang geeft tot je website, je concurrentieomgeving en je doelgroep. Die begint met een analyse: welke vragen stellen jouw potentiële klanten aan AI-modellen, welke bedrijven worden nu aanbevolen in die antwoorden, en waarom sta jij er niet bij. Daarna volgt de aanpak: contentstructuur aanpassen, FAQPage-schema implementeren, interne opbouw optimaliseren en gerichte content schrijven rondom de doelvragen die voor jouw niche tellen.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Het meetbare resultaat is anders dan bij klassieke SEO. Je volgt geen rankings in een overzicht, maar citaties: verschijnt jouw merk in een antwoord op Perplexity, met welke formulering, op welke positie en naast welke concurrenten. Die monitoring loopt maandelijks, of vaker als jouw markt snel beweegt.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Waarom dit nu zoveel aandacht trekt</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            AI-zoekmachines nemen een groter deel van de informatieve zoekresultaten voor hun rekening. Wie op Google zoekt naar "welke CRM past bij een startup" of "beste boekhouder voor freelancers in Amsterdam" krijgt vaker een AI-overzicht als eerste antwoord. In dat overzicht staan namen en aanbevelingen die niet uit een betaalde advertentie komen, maar uit wat AI-modellen als gezaghebbend beschouwen.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Dat verschuift waar aandacht en vertrouwen naartoe gaan. Bedrijven die vroeg in die verschuiving hebben geïnvesteerd, staan nu standaard in die AI-antwoorden. Wie wacht, moet die positie alsnog veroveren in een markt waar concurrenten al maanden aan hun zichtbaarheid bouwen.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Dit is ook de reden waarom meer bedrijven de stap naar een specialist zetten. Zelf beginnen kost tijd. Maar achterlopen terwijl concurrenten een voorsprong opbouwen kost meer.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Waarom bedrijven het toch niet zelf doen</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Veel ondernemers proberen GEO aanvankelijk zelf op te pakken. Ze lezen artikelen, voegen FAQ-secties toe aan hun homepage en wachten af. Het probleem is niet de wil, het is de doorlopende aandacht die het vraagt. GEO is geen eenmalige aanpassing. AI-modellen worden bijgewerkt, de manier waarop ze bronnen citeren verandert, en wat zes maanden geleden goed werkte, hoeft nu niet meer even effectief te zijn.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Monitoring is zonder de juiste opzet ook lastig. Je kunt handmatig testen of je merk opduikt in ChatGPT, maar dat geeft je geen patroon over meerdere platforms heen. Een specialist heeft werkwijzen om dat systematisch bij te houden en trends te zien die jij met ad-hoc tests mist.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Tot slot de content-opgave. GEO vraagt om antwoord-content die specifiek is geschreven voor de vragen die AI-modellen veel tegenkomen. Dat is wezenlijk andere content dan een commerciële landingspagina. Wie dat zelf wil schrijven terwijl hij zijn bedrijf runt, merkt al snel dat het onderaan de prioriteitenlijst belandt.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat een goede GEO specialist in de eerste maanden aanpakt</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een serieuze GEO specialist begint niet met publiceren. Hij begint met begrijpen. Welke doelvragen zijn relevant voor jouw niche, welke bronnen halen AI-engines nu aan in antwoorden op die vragen, en waar liggen de gaten die jij kunt invullen.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Daarna volgt een technische doorlichting van je site: is je FAQPage-schema aanwezig en correct, is je merknaam consistent gespeld op alle pagina's, staat de kern van je aanbod duidelijk genoeg bovenaan een pagina zodat een AI-model het kan uitlezen. Die basiszaken worden als eerste gefixet, want ze leveren ook bij klassieke SEO al waarde op. Wie meer wil weten over hoe GEO en SEO samenhangen, vindt dat in onze vergelijking van <Link to="/blogs/geo/geo-vs-seo-verschil-heb" className="text-accent hover:underline">GEO versus SEO</Link>.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            In de weken daarna komt de content. Niet blogartikelen voor de bulk, maar specifieke stukken die gerichte vragen beantwoorden binnen de clusters waarvoor jij als merk iets te zeggen hebt. Monitoring loopt vanaf dag één. Na twee maanden heb je een eerste beeld: ben je al geciteerd, in welk type vragen, en met welke vermelding.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe je een goede GEO partner onderscheidt</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een goede GEO specialist heeft een concrete meetmethode. Hij kan je vertellen hoe hij citaties bijhoudt, welke platforms hij monitort en wat hij doet als jouw merk in een AI-antwoord verschijnt naast een concurrent die je liever niet ziet.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Pas op voor bureaus die SEO-diensten hebben omgedoopt tot GEO zonder de aanpak te veranderen. Meer blogartikelen produceren, meer backlinks bouwen, rankings bijhouden in Google: dat is SEO. GEO vraagt om een andere aanpak. Wie je maand na maand naar klassieke metrics stuurt zonder ooit citaties te bespreken, is waarschijnlijk niet echt met GEO bezig.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Vraag ook naar concrete voorbeelden. Op welke vragen wordt een klant nu geciteerd, in welke AI-platforms en hoe heeft die positie zich ontwikkeld. Die vraag scheidt bureaus die het echt doen van bureaus die het beloven.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat je na drie maanden realistisch verwacht</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            GEO werkt niet van de ene dag op de andere. AI-modellen updaten hun kennisbases op eigen tempo, en nieuwe content heeft tijd nodig om als gezaghebbend te worden herkend. Reken op acht tot twaalf weken voor de eerste aantoonbare citaties. Na een halfjaar heb je een patroon van waar je staat en wat er nog bijgestuurd moet worden.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Wat je terugkrijgt is merkzichtbaarheid op plekken waar mensen bezig zijn een beslissing te nemen. Niet kliks op een advertentie, maar aanbevelingen op het moment dat iemand ChatGPT vraagt welk bureau hem verder kan helpen. Dat is een ander type contact dan een koud zoekwoord.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            In account-data van klanten die al een jaar actief met GEO bezig zijn, valt op dat bezoekers via AI-kanalen gemiddeld al verder in hun beslissing zijn dan wie via een generiek zoekwoord binnenkomt. Ze kennen de aanpak, weten ruwweg wat het kost en hebben al nagedacht over wat ze willen bereiken. Dat maakt het eerste gesprek een stuk concreter. Wie benieuwd is naar de concrete stappen, vindt die in ons <Link to="/blogs/geo/geo-optimalisatie-mkb-stappenplan" className="text-accent hover:underline">GEO optimalisatie stappenplan voor MKB</Link>.
                        </p>
                    </div>

                    <section className="mt-16 pt-12 border-t border-primary/10">
                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Veelgestelde vragen</h2>
                        <div className="space-y-6 not-prose">
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat kost GEO optimalisatie uitbesteden?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">De kosten variëren sterk per scope. Een eenmalige analyse plus technische basisoptimalisatie kost minder dan een doorlopend traject waarbij content en doorlopende monitoring allemaal zijn inbegrepen. De meeste bureaus werken met een maandelijks retainer, vergelijkbaar met een SEO-traject. Wat je in elk geval vermijdt: jarenlang zelf tijd investeren in iets wat een specialist sneller en met beter resultaat aanpakt.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Is GEO uitbesteden zinvol als ik een klein bedrijf heb?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Dat hangt af van je markt, niet van je bedrijfsgrootte. Als jouw potentiële klanten vragen stellen aan AI-chatbots voordat ze contact opnemen, is GEO al relevant voor je. Voor bedrijven die draaien op lokale mond-tot-mondreclame of impulsaankopen is de urgentie lager. Een goede GEO specialist helpt je snel bepalen of dit voor jou nu loont.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoe verschilt GEO uitbesteden van SEO uitbesteden?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Bij SEO stuur je op rankings in Google en meet je organisch verkeer. Bij GEO stuur je op citaties in AI-antwoorden en meet je merkvermelding in AI-platforms als ChatGPT en Perplexity. De technische overlap is er, maar de content-aanpak en de meetmethode zijn wezenlijk anders. Een specialist die alleen over rankings praat, doet feitelijk geen GEO.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoe lang duurt het voordat GEO-werk resultaat oplevert?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Reken op acht tot twaalf weken voor de eerste aantoonbare citaties. AI-modellen updaten hun kennisbases niet op een vaste frequentie, maar goed gestructureerde antwoord-content werkt doorgaans sneller door dan een klassiek SEO-artikel. Na zes maanden heb je een patroon van waar je staat en wat nog bijgestuurd moet worden.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Kan ik GEO deels zelf doen en deels uitbesteden?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Ja, dat werkt voor veel bedrijven goed. De technische implementatie en de strategie leg je bij een specialist neer. De contentproductie kun je zelf of met een freelancer invullen op basis van de doelvragen die de specialist aanlevert. Zo houd je grip op je eigen toon en kennis, en bespaar je op de maandelijkse kosten van een volledig uitbesteed traject.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoe controleer ik of een GEO bureau goed werk levert?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Vraag naar de meetmethode. Een serieuze partner toont je maandelijks welke vragen jouw merk opleveren in AI-antwoorden, in welke platforms en naast welke concurrenten. Als de rapportage alleen gaat over gepubliceerde artikelen of Google-rankings, meet je geen GEO. Vraag ook naar concrete voorbeelden bij andere klanten in een vergelijkbare niche.</p>
                            </div>
                        </div>
                    </section>

                    <section className="mt-16 pt-12 border-t border-primary/10">
                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Lees ook</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <Link to="/blogs/geo/geo-optimalisatie-verschijnen-ai-antwoorden" className="block border border-primary/10 rounded-xl p-6 hover:border-accent transition-colors">
                                <div className="text-xs font-mono uppercase tracking-widest text-accent mb-2">GEO</div>
                                <h3 className="font-sans font-semibold text-primary text-lg mb-2">GEO optimalisatie: zo verschijnt jouw bedrijf in AI-antwoorden</h3>
                                <p className="font-sans text-primary/70 text-sm">Welke stappen je zet om zichtbaar te worden in ChatGPT en andere AI-zoekmachines.</p>
                            </Link>
                            <Link to="/blogs/geo/geo-optimalisatie-mkb-stappenplan" className="block border border-primary/10 rounded-xl p-6 hover:border-accent transition-colors">
                                <div className="text-xs font-mono uppercase tracking-widest text-accent mb-2">GEO</div>
                                <h3 className="font-sans font-semibold text-primary text-lg mb-2">GEO optimalisatie voor MKB: praktisch stappenplan</h3>
                                <p className="font-sans text-primary/70 text-sm">Een concrete aanpak voor MKB-ondernemers die zelf aan de slag willen met GEO.</p>
                            </Link>
                        </div>
                    </section>
                </div>
            </article>

            <section className="w-full pb-32 px-6">
                <div className="max-w-4xl mx-auto bg-primary rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
                    <h2 className="relative z-10 font-drama italic text-background text-3xl sm:text-4xl md:text-5xl mb-6">Wil je weten of GEO uitbesteden voor jou loont?</h2>
                    <p className="relative z-10 font-sans text-background/70 text-lg mb-10 max-w-xl mx-auto">In een gesprek van een halfuur analyseren we jouw markt, je huidige zichtbaarheid in AI-antwoorden en wat de eerste stappen zijn. Zonder omwegen, wel een eerlijk beeld.</p>
                    <Link to="/contact" className="relative z-10 btn-magnetic inline-flex items-center justify-center bg-accent text-background font-sans font-bold text-lg px-10 py-4 rounded-[2rem] hover:bg-accent/90 transition-colors">Neem contact op</Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
