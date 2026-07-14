import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ChevronRight, User } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function BlogPostStemLandingspaginaAfGoogleAds() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen selection:bg-accent/30 selection:text-dark flex flex-col bg-background">
            <Helmet>
                <title>Landingspagina afstemmen op Google Ads: zo doe je het goed | Empowers</title>
                <meta name="description" content="Een Google Ads klik kost geld, maar de pagina erachter beslist of dat geld terugkomt. Lees hoe je landingspagina en advertentie 1-op-1 op elkaar afstemt." />
                <link rel="canonical" href="https://www.empowers.nl/blogs/strategie/stem-landingspagina-af-google-ads" />
                <meta property="og:title" content="Landingspagina afstemmen op Google Ads: zo doe je het goed" />
                <meta property="og:description" content="Hoe je advertentie en landingspagina als één geheel laat werken zodat klikken ook converteren." />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://www.empowers.nl/blogs/strategie/stem-landingspagina-af-google-ads" />
                <meta property="og:image" content="https://www.empowers.nl/images/blogs/stem-landingspagina-af-google-ads.jpg" />
                <meta property="article:published_time" content="2026-05-11T00:00:00+02:00" />
                <meta property="article:author" content="Empowers" />
                <meta property="article:section" content="Strategie" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Landingspagina afstemmen op Google Ads" />
                <meta name="twitter:description" content="Zo laat je advertentie en landingspagina samenwerken in plaats van langs elkaar werken." />

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Article",
                        "headline": "Landingspagina afstemmen op Google Ads: zo doe je het goed",
                        "description": "Een Google Ads klik kost geld, maar de pagina erachter beslist of dat geld terugkomt. Lees hoe je landingspagina en advertentie 1-op-1 op elkaar afstemt.",
                        "image": "https://www.empowers.nl/images/blogs/stem-landingspagina-af-google-ads.jpg",
                        "datePublished": "2026-05-11T00:00:00+02:00",
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
                                    "name": "Waarom moet mijn landingspagina afgestemd zijn op mijn Google Ads advertentie?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Omdat de bezoeker met een verwachting klikt. Belooft je advertentie 'gratis offerte in 24 uur' en zien ze daarna een algemene homepage, dan klikt een groot deel weg. Aansluiting tussen advertentie en pagina (message match) verhoogt je conversie en je Quality Score, waardoor je vaak ook minder per klik betaalt."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Wat is message match precies?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Message match betekent dat de tekst, belofte, toon en stijl van je advertentie ononderbroken doorlopen op je landingspagina. De headline van je pagina herhaalt of bevestigt de belofte uit de advertentie, het beeld sluit aan, en de CTA past bij de zoekintentie waarmee iemand op de advertentie klikte."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Moet ik per advertentie een aparte landingspagina maken?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Niet per se per advertentie, wel per zoekintentie. Een bezoeker die zocht op 'boekhouder ZZP' wil iets anders zien dan iemand die zocht op 'jaarrekening laten maken'. Als beide groepen op dezelfde pagina landen, verliest minstens één van hen de aansluiting. In de praktijk werkt vaak: één landingspagina per dienst of per cluster van verwante zoekwoorden."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Helpt afstemmen ook bij mijn Quality Score?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Ja. Landing page experience is een van de drie pijlers van Quality Score, naast verwachte CTR en advertentierelevantie. Google kijkt of de pagina relevant en bruikbaar is voor de zoekopdracht, en of hij snel laadt. Een goed afgestemde pagina verhoogt je Quality Score, wat zich vertaalt in een lagere CPC en betere posities."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Hoe meet ik of mijn landingspagina goed afgestemd is?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Kijk naar conversieratio per zoekwoord, bounce rate en tijd op de pagina in GA4. Een bounce rate boven 75 procent in combinatie met een lage conversieratio is meestal een afstemmingsprobleem. Vergelijk ook de Quality Score per zoekwoord in Google Ads: scoort jouw best converterende zoekwoord een 4 of 5 op landing page experience, dan is er werk te doen."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Wat is een dynamische landingspagina en heb ik die nodig?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Met dynamic keyword insertion of dynamic landing pages pas je tekst op de pagina aan op het zoekwoord waarmee iemand binnenkwam. Handig als je met veel zoekwoordvarianten werkt, bijvoorbeeld per stad of per dienst. Voor MKB-accounts met tien tot dertig zoekwoorden is een set van vier of vijf goed geschreven statische landingspagina's vaak effectiever en simpeler te beheren."
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
                            { "@type": "ListItem", "position": 3, "name": "Strategie", "item": "https://www.empowers.nl/blogs/strategie" },
                            { "@type": "ListItem", "position": 4, "name": "Landingspagina afstemmen op Google Ads", "item": "https://www.empowers.nl/blogs/strategie/stem-landingspagina-af-google-ads" }
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
                        <span className="text-primary truncate">Landingspagina afstemmen op Google Ads</span>
                    </nav>

                    <header className="mb-16">
                        <div className="inline-block px-3 py-1 bg-accent/10 text-accent font-mono text-xs uppercase tracking-widest rounded-full mb-6">Strategie</div>
                        <h1 className="font-sans font-bold text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight mb-8">
                            Hoe stem je jouw landingspagina af op je Google Ads advertentie?
                        </h1>
                        <div className="flex flex-wrap items-center gap-6 text-sm font-sans text-primary/60 border-y border-primary/10 py-6">
                            <div className="flex items-center gap-2"><User className="w-4 h-4" /><span>Empowers Redactie</span></div>
                            <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>11 mei 2026</span></div>
                            <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>8 minuten leestijd</span></div>
                        </div>
                    </header>

                    <figure className="w-full h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden mb-16 relative bg-primary">
                        <div className="absolute inset-0 bg-[url('/images/blogs/stem-landingspagina-af-google-ads.jpg')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </figure>

                    <div className="prose prose-lg max-w-none prose-headings:text-primary prose-headings:font-bold prose-a:text-accent prose-a:underline hover:prose-a:text-accent/80">
                        <p className="text-xl leading-relaxed text-primary/80 font-medium mb-6">
                            Een klik in Google Ads kost je geld. Wat er na die klik gebeurt, beslist of dat geld terugkomt. De meeste accounts die we onder de loep nemen besteden veel aandacht aan zoekwoorden en biedingen, en daarna nog wat aan de advertentieteksten. Voor de landingspagina blijft een homepage over, of een algemene productpagina. Daar gaat de winst zitten die je laat liggen. In dit artikel lees je hoe je advertentie en landingspagina als één geheel laat werken.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat message match doet met je conversie</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Iemand typt &ldquo;boekhouder voor ZZP&rdquo; in Google. Bovenaan ziet diegene jouw advertentie: &ldquo;Boekhouder gespecialiseerd in ZZP - vaste prijs, geen verrassingen.&rdquo; Klik. En dan? Als de pagina opent met een vrolijke homepage waar je &ldquo;ondernemers van klein tot groot helpt&rdquo;, klopt er iets niet. De belofte uit de advertentie is verdwenen.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Dit heet message match. De tekst, het beeld en de toon van je advertentie moeten doorlopen op de landingspagina. Niet omdat dat &ldquo;netjes&rdquo; is, maar omdat een bezoeker met een verwachting klikt. Die verwachting bevestigen kost één goed gekozen headline. Hem breken kost de hele klik.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Vier elementen die moeten kloppen tussen advertentie en pagina</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            We checken bij elke audit dezelfde vier punten. Klopt één ervan niet, dan voelt de pagina &ldquo;af&rdquo; voor de bezoeker zonder dat hij precies kan benoemen waarom.
                        </p>

                        <h3 className="text-xl font-semibold text-primary mt-10 mb-4">Headline herhaalt of bevestigt de belofte</h3>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De headline van je landingspagina is het eerste wat een bezoeker leest. Hij hoeft niet woord voor woord gelijk te zijn aan je advertentietekst, maar moet wel hetzelfde concept oppakken. Adverteer je op &ldquo;binnen 24 uur offerte&rdquo;, dan komt &ldquo;Snel een offerte? Wij sturen hem binnen één werkdag&rdquo; veel beter aan dan &ldquo;Welkom bij ons bedrijf&rdquo;.
                        </p>

                        <h3 className="text-xl font-semibold text-primary mt-10 mb-4">Bewijs zit waar het hoort: bovenaan</h3>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een belofte zonder onderbouwing voelt hol. Plaats een korte sociale proof direct onder of naast de headline. Een sterrenreview, een logo van een bekende klant, een aantal beoordelingen, of een specifiek getal uit je business. Bezoekers scrollen niet naar beneden om bewijs te zoeken. Ze willen het zien op het moment dat ze de belofte lezen.
                        </p>

                        <h3 className="text-xl font-semibold text-primary mt-10 mb-4">Visuele aansluiting</h3>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Het beeld op je landingspagina moet aansluiten bij waar iemand voor kwam. Adverteer je op een specifieke dienst, laat dan een foto zien die dat product of die dienst toont, niet een algemene stock-glimlach. Bij Performance Max-advertenties met assets is dit extra belangrijk: als je advertentie uitgespeeld wordt met een productfoto, verwacht de bezoeker datzelfde product groot in beeld op de pagina.
                        </p>

                        <h3 className="text-xl font-semibold text-primary mt-10 mb-4">CTA past bij de zoekintentie</h3>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Iemand die zoekt op &ldquo;boekhouder vergelijken&rdquo; staat in een andere fase dan iemand die zoekt op &ldquo;boekhouder Eindhoven aanmelden&rdquo;. De eerste wil informatie en zekerheid. De tweede wil contact. De CTA op je landingspagina moet die fase respecteren. Een &ldquo;Vraag een gratis adviesgesprek aan&rdquo; werkt anders dan een &ldquo;Word vandaag klant&rdquo;.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat goede afstemming doet met je Quality Score</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Google bepaalt voor elk zoekwoord een Quality Score op een schaal van 1 tot 10. Drie pijlers tellen mee: verwachte CTR en advertentierelevantie, plus de landing page experience. Die laatste is precies waar message match thuishoort. Een hogere Quality Score betekent een lagere kosten-per-klik en vaak een betere positie in de veiling. Volgens <a href="https://support.google.com/google-ads/answer/6167118" target="_blank" rel="noopener noreferrer">Google's eigen documentatie</a> is landing page experience een van de centrale factoren in de ad rank-formule.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Praktisch gezien zien we vaak dat een verbetering van een Quality Score van 5 naar 8 de kosten per klik fors kan verlagen op hetzelfde zoekwoord. Niet door je biedstrategie aan te passen, maar door eerst je pagina op orde te krijgen.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Eén dienst, één pagina, of meer?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een vraag die we wekelijks krijgen: moet ik voor elk zoekwoord een aparte landingspagina maken? Het antwoord is genuanceerd. Maak een pagina per zoekintentie, niet per zoekwoord. Bezoekers die zoeken op &ldquo;boekhouder ZZP&rdquo;, &ldquo;boekhouding zelfstandige&rdquo; en &ldquo;administratie ZZP&rdquo; willen praktisch hetzelfde. Eén goed geschreven pagina voor die cluster volstaat.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Wat we wel altijd splitsen: B2B versus B2C, en transactionele versus informatieve intentie. Een prospect die &ldquo;wat kost een boekhouder&rdquo; intypt wil iets anders zien dan iemand die zoekt op &ldquo;boekhouder direct contact&rdquo;. Dezelfde pagina werkt zelden voor beide. Wil je dieper op intentie ingaan, lees dan onze <Link to="/blogs/google-ads/zoekintentie-targeten-google-ads-goed" className="text-accent hover:underline">blog over zoekintentie en Google Ads</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat je kunt automatiseren (en wat niet)</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Dynamic keyword insertion plaatst het zoekwoord automatisch in je advertentietekst. Dynamic landing pages doen iets soortgelijks: ze passen tekst aan op de pagina op basis van URL-parameters. Voor grote accounts met honderden zoekwoorden per stad of variant is dat nuttig. Voor een MKB-account met dertig zoekwoorden meestal overkill.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Wat je niet wilt automatiseren: de kernbelofte en de structuur van je pagina. Die schrijf je per zoekintentie. Een dynamische tekst kan een gat opvullen, geen relatie opbouwen. De automatische technieken werken pas goed als de onderliggende pagina al stevig staat.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Valkuilen die we keer op keer terugzien</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De grootste fout? Iedereen naar de homepage sturen. De homepage is een algemene visitekaart, geen verkoopinstrument. Een tweede klassieker: de landingspagina vertelt over jouw bedrijf in plaats van over het probleem van de bezoeker. &ldquo;Sinds 2003 helpen wij...&rdquo; is geen aansluiting op &ldquo;Ik zoek nu een oplossing.&rdquo;
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een derde valkuil is verstopte conversie. De CTA staat ergens onderaan, of vraagt om twaalf velden in te vullen. Een bezoeker die zojuist op je advertentie klikte heeft een korte aandachtsspanne. Maak het verschil tussen interesse en actie zo klein mogelijk. Wil je dieper ingaan op CTA's, lees onze <Link to="/blogs/strategie/cta-tekst-schrijven-mensen-aanzet" className="text-accent hover:underline">blog over CTA-tekst schrijven</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Een simpele check vooraf</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Voordat je een nieuwe Google Ads campagne live zet, doe deze test. Print je advertentie en de bovenste helft van je landingspagina uit. Leg ze naast elkaar. Vraag iemand die nog niets van het project weet welke twee dingen bij elkaar horen. Twijfelt diegene, of legt diegene het verkeerd? Dan klopt de aansluiting nog niet.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Klinkt simpel. Werkt verrassend goed. We doen deze oefening bij elke nieuwe campagne die we voor klanten lanceren, en het levert elke keer weer tekstuele en visuele aanpassingen op die we anders hadden gemist. Wil je weten of jouw advertenties en landingspagina's bij elkaar passen? We kijken er graag eens met je naar via onze <Link to="/contact" className="text-accent hover:underline">contactpagina</Link>.
                        </p>
                    </div>

                    <section className="mt-16 pt-12 border-t border-primary/10">
                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Veelgestelde vragen</h2>
                        <div className="space-y-6 not-prose">
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Waarom moet mijn landingspagina afgestemd zijn op mijn Google Ads advertentie?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Omdat de bezoeker met een verwachting klikt. Belooft je advertentie "gratis offerte in 24 uur" en zien ze daarna een algemene homepage, dan klikt een groot deel weg. Aansluiting tussen advertentie en pagina (message match) verhoogt je conversie en je Quality Score, waardoor je vaak ook minder per klik betaalt.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat is message match precies?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Message match betekent dat de tekst, belofte, toon en stijl van je advertentie ononderbroken doorlopen op je landingspagina. De headline van je pagina herhaalt of bevestigt de belofte uit de advertentie, het beeld sluit aan, en de CTA past bij de zoekintentie waarmee iemand op de advertentie klikte.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Moet ik per advertentie een aparte landingspagina maken?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Niet per se per advertentie, wel per zoekintentie. Een bezoeker die zocht op "boekhouder ZZP" wil iets anders zien dan iemand die zocht op "jaarrekening laten maken". Als beide groepen op dezelfde pagina landen, verliest minstens één van hen de aansluiting. In de praktijk werkt vaak: één landingspagina per dienst of per cluster van verwante zoekwoorden.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Helpt afstemmen ook bij mijn Quality Score?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Ja. Landing page experience is een van de drie pijlers van Quality Score, naast verwachte CTR en advertentierelevantie. Google kijkt of de pagina relevant en bruikbaar is voor de zoekopdracht, en of hij snel laadt. Een goed afgestemde pagina verhoogt je Quality Score, wat zich vertaalt in een lagere CPC en betere posities.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoe meet ik of mijn landingspagina goed afgestemd is?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Kijk naar conversieratio per zoekwoord, bounce rate en tijd op de pagina in GA4. Een bounce rate boven 75 procent in combinatie met een lage conversieratio is meestal een afstemmingsprobleem. Vergelijk ook de Quality Score per zoekwoord in Google Ads: scoort jouw best converterende zoekwoord een 4 of 5 op landing page experience, dan is er werk te doen.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat is een dynamische landingspagina en heb ik die nodig?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Met dynamic keyword insertion of dynamic landing pages pas je tekst op de pagina aan op het zoekwoord waarmee iemand binnenkwam. Handig als je met veel zoekwoordvarianten werkt, bijvoorbeeld per stad of per dienst. Voor MKB-accounts met tien tot dertig zoekwoorden is een set van vier of vijf goed geschreven statische landingspagina's vaak effectiever en simpeler te beheren.</p>
                            </div>
                        </div>
                    </section>

                    <section className="mt-16 pt-12 border-t border-primary/10">
                        <h3 className="text-xl font-bold text-primary mb-6">Lees ook</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <Link to="/blogs/strategie/landingspagina-schrijven-converteert" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Landingspagina die converteert</h3>
                                <p className="text-primary/60 text-sm">Structuur en koppen die bezoekers wel converteren.</p>
                            </Link>
                            <Link to="/blogs/google-ads/google-ads-campagne-structuur" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Google Ads campagnestructuur</h3>
                                <p className="text-primary/60 text-sm">De basis van een account dat schaalt.</p>
                            </Link>
                            <Link to="/blogs/strategie/cta-tekst-schrijven-mensen-aanzet" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">CTA-tekst die werkt</h3>
                                <p className="text-primary/60 text-sm">Knoppen waar mensen op klikken.</p>
                            </Link>
                        </div>
                    </section>
                </div>
            </article>

            <section className="w-full pb-32 px-6">
                <div className="max-w-4xl mx-auto bg-primary rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
                    <h2 className="relative z-10 font-drama italic text-background text-3xl sm:text-4xl md:text-5xl mb-6">Klikken die ook echt converteren?</h2>
                    <p className="relative z-10 font-sans text-background/70 text-lg mb-10 max-w-xl mx-auto">We checken je advertenties én je landingspagina's, en laten zien waar de aansluiting kapotgaat. Geen verplichtingen, wel een helder verbeterpad.</p>
                    <Link to="/contact" className="relative z-10 btn-magnetic inline-flex items-center justify-center bg-accent text-background font-sans font-bold text-lg px-10 py-4 rounded-[2rem] hover:bg-accent/90 transition-colors">Neem contact op</Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
