import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ChevronRight, User } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function BlogPostTiktokAdsVideoConverteert() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen selection:bg-accent/30 selection:text-dark flex flex-col bg-background">
            <Helmet>
                <title>Hoe maak je een TikTok Ads video die converteert? | Empowers</title>
                <meta name="description" content="Een TikTok Ads video die werkt is geen toeval. Lees welke hooks, opbouw en CTA's structureel meer omzet opleveren voor jouw merk." />
                <link rel="canonical" href="https://www.empowers.nl/blogs/social-ads/tiktok-ads-video-converteert" />
                <meta property="og:title" content="Hoe maak je een TikTok Ads video die converteert?" />
                <meta property="og:description" content="Praktische blueprint voor TikTok-videos die niet alleen aandacht trekken maar ook tot aankopen leiden." />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://www.empowers.nl/blogs/social-ads/tiktok-ads-video-converteert" />
                <meta property="og:image" content="https://www.empowers.nl/images/blogs/tiktok-ads-video-converteert.jpg" />
                <meta property="article:published_time" content="2026-05-07" />
                <meta property="article:author" content="Empowers" />
                <meta property="article:section" content="Social Ads" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Hoe maak je een TikTok Ads video die converteert?" />
                <meta name="twitter:description" content="Welke hooks, opbouw en CTA's structureel meer omzet opleveren in TikTok-advertenties." />

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Article",
                        "headline": "Hoe maak je een TikTok Ads video die converteert?",
                        "description": "Praktische gids voor TikTok-videos die niet alleen views opleveren maar ook conversies. Van hook tot opbouw en CTA.",
                        "image": "https://www.empowers.nl/images/blogs/tiktok-ads-video-converteert.jpg",
                        "datePublished": "2026-05-07T22:00:00+02:00",
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
                                    "name": "Hoe lang moet een TikTok Ads video zijn?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "De zoete plek voor TikTok-advertenties ligt tussen 15 en 30 seconden. Korter dan 15 seconden geeft te weinig ruimte voor opbouw en CTA, langer dan 30 seconden zorgt voor steile drop-off in retentie. Voor cold prospecting werken 15 tot 20 seconden meestal het beste, retargeting kan iets langer."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Wat moet er in de eerste drie seconden gebeuren?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "De hook moet binnen drie seconden landen, anders ben je je kijker kwijt. Wat werkt: een directe vraag aan de kijker, een onverwacht beeld, een claim die nieuwsgierig maakt, of het zichtbaar tonen van het probleem dat je product oplost. Wat niet werkt: een logo-intro, een rustige opbouw of context-setting voordat de actie begint."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Werkt UGC-stijl beter dan studio-content?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Voor de meeste merken: ja. UGC-stijl content (gemaakt door creators die op gewone gebruikers lijken) heeft op TikTok structureel hogere engagement en lagere CPA's dan gepolijste reclame. Het ziet er authentiek uit en valt minder op als advertentie. Studio-content kan werken voor luxe of premium merken, maar voor B2C-massamarkt verliest het bijna altijd van UGC."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Welke CTA werkt het beste in een TikTok-video?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Een directe, concrete CTA werkt beter dan een vrijblijvende uitnodiging. Niet 'klik voor meer info' maar 'pak je 15 procent korting nu' of 'koop deze look'. De CTA komt zowel visueel (tekst-overlay) als auditief (voice-over) terug en eindigt in de laatste twee seconden van de video. Een video zonder duidelijke CTA krijgt vaak meer views maar minder conversies."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Hoeveel video-varianten moet je testen?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Per campagne minimaal drie tot vijf varianten tegelijk. Variatie in hook, in pacing, in CTA-stijl. Het algoritme vindt zelf de winnaar binnen een paar dagen, mits je voldoende impressies geeft (idealiter minimaal 10.000 per variant voordat je conclusies trekt). Met één variant adverteren is geen testen, maar gokken."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Moet ik geluid en muziek gebruiken?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Ja, geluid is geen toegift maar een fundament. Het overgrote deel van TikTok-gebruikers kijkt met geluid aan, dus voice-over en muziek bepalen mede of de hook werkt. Trending sounds kunnen extra reach geven, maar dan alleen als ze passen bij je boodschap. Een geforceerde trend werkt averechts."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Wat zijn de meest gemaakte fouten in TikTok-videos?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Drie fouten domineren: een trage hook waardoor de eerste drie seconden verloren gaan, te gepolijste productie die direct herkenbaar is als advertentie, en een ontbrekende of vrijblijvende CTA waardoor kijkers wel kijken maar niet klikken. Wie deze drie elementen oplost ziet doorgaans direct verbetering in CTR en conversie."
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
                            { "@type": "ListItem", "position": 3, "name": "Social Ads", "item": "https://www.empowers.nl/blogs/social-ads" },
                            { "@type": "ListItem", "position": 4, "name": "TikTok Ads video", "item": "https://www.empowers.nl/blogs/social-ads/tiktok-ads-video-converteert" }
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
                        <span className="text-primary truncate">TikTok Ads video</span>
                    </nav>

                    <header className="mb-16">
                        <div className="inline-block px-3 py-1 bg-accent/10 text-accent font-mono text-xs uppercase tracking-widest rounded-full mb-6">
                            Social Ads
                        </div>
                        <h1 className="font-sans font-bold text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight mb-8">
                            Hoe maak je een TikTok Ads video die converteert?
                        </h1>
                        <div className="flex flex-wrap items-center gap-6 text-sm font-sans text-primary/60 border-y border-primary/10 py-6">
                            <div className="flex items-center gap-2"><User className="w-4 h-4" /><span>Empowers Redactie</span></div>
                            <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>7 mei 2026</span></div>
                            <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>8 minuten leestijd</span></div>
                        </div>
                    </header>

                    <figure className="w-full h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden mb-16 relative bg-primary">
                        <div className="absolute inset-0 bg-[url('/images/blogs/tiktok-ads-video-converteert.jpg')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </figure>

                    <div className="prose prose-lg max-w-none prose-headings:text-primary prose-headings:font-bold prose-a:text-accent prose-a:underline hover:prose-a:text-accent/80">
                        <p className="text-xl leading-relaxed text-primary/80 font-medium mb-6">
                            De grootste hefboom op TikTok is niet je biedstrategie of je doelgroep. Het is de video zelf. Een goede creative haalt drie keer hogere CTR's dan een matige variant binnen exact dezelfde campagne. Maar wat maakt een TikTok-video die converteert? Geen one-size-fits-all formule, wel een handvol principes die structureel werken. In deze blog krijg je de blueprint voor video's die niet alleen aandacht trekken, maar ook tot aankopen leiden.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">De drie-secondenregel: alles begint hier</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Het belangrijkste deel van je TikTok-video zijn de eerste drie seconden. Verlies je daar je kijker, dan maakt de rest niet meer uit. Welke hooks werken doorgaans? Een directe vraag aan de kijker ('Wist je dat je hierdoor X verspilt?'). Een onverwacht beeld dat tegen verwachting indruist. Een claim die nieuwsgierig maakt zonder te overdrijven. Het probleem zichtbaar tonen, niet beschrijven.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Wat absoluut niet werkt: een logo-intro, een rustige opbouw of context-setting voordat de actie begint. TikTok-gebruikers swipen weg op het minste teken van advertentie of trage opbouw. Test je hook door de eerste drie seconden los te bekijken zonder de rest. Snap je in die drie seconden waarom je verder zou kijken? Dan is hij goed. Aarzel je? Herschrijf hem.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Lengte: tussen 15 en 30 seconden</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De zoete plek voor TikTok-advertenties zit tussen 15 en 30 seconden. Korter dan 15 seconden geeft te weinig ruimte voor opbouw, demonstratie en CTA. Langer dan 30 seconden zorgt voor steile drop-off in retentie. Voor cold prospecting werkt 15 tot 20 seconden meestal het beste. Retargeting tegen mensen die je merk al kennen kan iets langer, omdat de tolerantie voor diepere informatie groter is.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Beslis voordat je begint te filmen welke lengte je aanhoudt. Probeer niet achteraf een drie-minuten video naar 20 seconden te knippen. Het ritme klopt dan zelden. Schrijf eerst een script van het juiste aantal woorden. Voor 15 seconden komt dat neer op zo'n 35 tot 45 woorden, voor 30 seconden op rond de 75 woorden. Tel ze letterlijk. Hoe je voor andere video-formats schrijft beschreven we in onze blog over <Link to="/blogs/social-ads/winnende-meta-ads-video-2026" className="text-accent hover:underline">winnende Meta Ads-video's</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">UGC-stijl wint van studio-glans</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            User-generated content of in elk geval video's die eruitzien als UGC scoren structureel beter op TikTok dan gepolijste studioproducties. Het platform belont content die past bij wat een gewone gebruiker zou maken. Een gezicht dat in de camera praat, handheld camera, native muziek, geen perfecte verlichting. Klinkt amateuristisch, werkt commercieel. Een hoogwaardig geproduceerde reclamefilm wordt op TikTok herkend als advertentie en verliest binnen drie seconden de kijker.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Werk waar mogelijk samen met creators die TikTok kennen. Een goede creator-shoot kost vaak minder dan een matige reclamefilm en levert in de regel meer rendement. Vraag de creator om vier tot zes varianten per shoot, met verschillende hooks en CTA-stijlen. Zo heb je voor weken testmateriaal zonder opnieuw te hoeven filmen. Wat structureel werkt en niet leggen we breder uit in onze gids over <Link to="/blogs/social-ads/ugc-meta-ads" className="text-accent hover:underline">UGC in Meta Ads</Link>, en het principe geldt vrijwel identiek op TikTok.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">De opbouw: probleem, oplossing, bewijs</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een goedwerkend TikTok-script kent doorgaans drie fasen. De eerste vier seconden tonen het probleem, het gevoel of de situatie waar je product op aanslaat. Daarna komt de oplossing in beeld, vaak met een directe demonstratie. De laatste fase is het bewijs: een resultaat zien, een review, een transformatie. Dit patroon werkt bij verkoopadvertenties al jaren, op TikTok gewoon in een sneller tempo verpakt.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Houd het simpel. Eén kernboodschap per video, niet drie. Probeer je drie productvoordelen te benoemen, dan blijft geen enkel echt hangen. Kies de sterkste en bouw daar de hele video omheen. Voor de andere voordelen maak je een aparte video. Het algoritme zal zelf bepalen welke variant het beste landt bij welke doelgroep.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Geluid: even belangrijk als beeld</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Het overgrote deel van TikTok-gebruikers kijkt met geluid aan. Daarmee is geluid op TikTok geen toegift maar een fundament. Voice-over werkt meestal beter dan tekst-overlay alleen, omdat het persoonlijker overkomt. Achtergrondmuziek mag aanwezig zijn maar mag de stem niet overstemmen. Trending sounds kunnen extra reach geven, maar alleen als ze passen bij je boodschap. Een geforceerde trend valt direct op als opportunisme en werkt averechts.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Test ook video's zonder voice-over maar met sterke tekst-overlay. Voor sommige producten en doelgroepen werkt dit beter, vooral als de visuele demonstratie kraakhelder is. Vraag jezelf af: kan iemand de video begrijpen zonder geluid? Is het antwoord ja, dan heb je een achtervang voor de minderheid die zonder geluid kijkt.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">De CTA: concreet en op tijd</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een veelgemaakte fout is een vrijblijvende CTA. 'Klik voor meer info' werkt zelden. 'Pak je 15 procent korting nu' of 'koop deze look' werkt veel vaker. Hoe concreter, hoe beter. De CTA komt visueel en auditief terug, en valt in de laatste twee seconden van de video. Niet aan het begin, niet halverwege. Op het moment dat de kijker overtuigd raakt, niet voordat dat moment is bereikt.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Combineer de CTA met urgentie als die past bij je product. 'Vandaag nog op voorraad', 'aanbieding loopt deze week af' of 'beperkte oplage' werken op TikTok structureel beter dan een neutrale uitnodiging. Maak alleen claims die kloppen, anders krijg je negatieve reacties die je creative kannibaliseren. Hoe je sterke CTA's schrijft is het waard om los te leren in onze blog over <Link to="/blogs/strategie/cta-tekst-schrijven-mensen-aanzet" className="text-accent hover:underline">effectieve CTA-tekst</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Test minstens drie tot vijf varianten tegelijk</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Met één video adverteren is geen testen, maar gokken. Per campagne draai minimaal drie tot vijf varianten tegelijk. Verschillende hooks, verschillende pacing, verschillende CTA-stijlen. Het algoritme vindt binnen een paar dagen welke variant bij welke doelgroep het beste werkt, mits je voldoende impressies geeft. Een goede A/B-test op TikTok vraagt minimaal 10.000 impressies per variant voordat je conclusies durft te trekken.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Vervang creatives elke vier tot zes weken. TikTok-doelgroepen zijn relatief klein in vergelijking met YouTube of Google, dus advertentiemoeheid slaat sneller toe. Frequency boven de zes is een teken dat het tijd is voor nieuwe content. Houd minimaal twee creatives parallel actief en vervang de underperformer wanneer je voldoende data hebt. Hoe je creatives gestructureerd vernieuwt zonder de leerfase te slopen hebben we beschreven in onze blog over <Link to="/blogs/social-ads/linkedin-ads-optimaliseren-stap-stap" className="text-accent hover:underline">campagnes optimaliseren</Link>, en de principes gelden grotendeels ook op TikTok.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">De fouten die we het vaakst zien</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Drie patronen blijven terugkomen bij accounts die zelf TikTok-creatives produceren. De eerste: een trage hook waardoor de eerste drie seconden verloren gaan. Logo-intro, langzame opbouw, context die niemand vraagt. Snij die er rigoureus uit. Begin met de actie of de vraag.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De tweede: te gepolijst. Een hoogwaardige reclamefilm hoort op televisie, niet op TikTok. Investeer liever in tien rauwe varianten dan in één bombastische productie. De data wijst pijnlijk vaak uit dat de goedkopere variant beter rendeert.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De derde: een ontbrekende of vrijblijvende CTA. De video is goed, de boodschap is helder, maar de kijker krijgt geen duidelijk signaal wat hij moet doen. Resultaat: views zonder klikken. Voeg altijd een concrete CTA toe in de laatste twee seconden, zowel in beeld als in spraak.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat een goede TikTok-creative oplevert</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een sterke TikTok-video kan binnen een week meer omzet draaien dan een hele Meta-campagne van een maand. Niet altijd, wel vaker dan je zou denken. Het verschil tussen een matige en een sterke creative zit niet in productiebudget maar in begrip van het platform. Hook, lengte, opbouw, geluid, CTA. Alle elementen moeten kloppen.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De winst zit in iteratie. Eén perfecte video bestaat niet. Wel een proces waarin je elke maand nieuwe varianten test, leert wat werkt en die patronen aanscherpt. Wil je dat we mét je meekijken naar je creatives voordat ze gaan draaien? Plan een gesprek via onze <Link to="/contact" className="text-accent hover:underline">contactpagina</Link>. We bekijken je hooks, je opbouw en je CTA's, en wijzen aan waar de eerste verbetering zit.
                        </p>
                    </div>

                    <section className="mt-16 pt-12 border-t border-primary/10">
                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Veelgestelde vragen</h2>
                        <div className="space-y-6 not-prose">
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoe lang moet een TikTok Ads video zijn?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">De zoete plek voor TikTok-advertenties ligt tussen 15 en 30 seconden. Korter dan 15 seconden geeft te weinig ruimte voor opbouw en CTA, langer dan 30 seconden zorgt voor steile drop-off in retentie. Voor cold prospecting werken 15 tot 20 seconden meestal het beste, retargeting kan iets langer.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat moet er in de eerste drie seconden gebeuren?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">De hook moet binnen drie seconden landen, anders ben je je kijker kwijt. Wat werkt: een directe vraag aan de kijker, een onverwacht beeld, een claim die nieuwsgierig maakt, of het zichtbaar tonen van het probleem dat je product oplost. Wat niet werkt: een logo-intro, een rustige opbouw of context-setting voordat de actie begint.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Werkt UGC-stijl beter dan studio-content?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Voor de meeste merken: ja. UGC-stijl content (gemaakt door creators die op gewone gebruikers lijken) heeft op TikTok structureel hogere engagement en lagere CPA's dan gepolijste reclame. Het ziet er authentiek uit en valt minder op als advertentie. Studio-content kan werken voor luxe of premium merken, maar voor B2C-massamarkt verliest het bijna altijd van UGC.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Welke CTA werkt het beste in een TikTok-video?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Een directe, concrete CTA werkt beter dan een vrijblijvende uitnodiging. Niet 'klik voor meer info' maar 'pak je 15 procent korting nu' of 'koop deze look'. De CTA komt zowel visueel (tekst-overlay) als auditief (voice-over) terug en eindigt in de laatste twee seconden van de video. Een video zonder duidelijke CTA krijgt vaak meer views maar minder conversies.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoeveel video-varianten moet je testen?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Per campagne minimaal drie tot vijf varianten tegelijk. Variatie in hook, in pacing, in CTA-stijl. Het algoritme vindt zelf de winnaar binnen een paar dagen, mits je voldoende impressies geeft (idealiter minimaal 10.000 per variant voordat je conclusies trekt). Met één variant adverteren is geen testen, maar gokken.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Moet ik geluid en muziek gebruiken?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Ja, geluid is geen toegift maar een fundament. Het overgrote deel van TikTok-gebruikers kijkt met geluid aan, dus voice-over en muziek bepalen mede of de hook werkt. Trending sounds kunnen extra reach geven, maar dan alleen als ze passen bij je boodschap. Een geforceerde trend werkt averechts.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat zijn de meest gemaakte fouten in TikTok-videos?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Drie fouten domineren: een trage hook waardoor de eerste drie seconden verloren gaan, te gepolijste productie die direct herkenbaar is als advertentie, en een ontbrekende of vrijblijvende CTA waardoor kijkers wel kijken maar niet klikken. Wie deze drie elementen oplost ziet doorgaans direct verbetering in CTR en conversie.</p>
                            </div>
                        </div>
                    </section>

                    <section className="mt-16 pt-12 border-t border-primary/10">
                        <h3 className="text-xl font-bold text-primary mb-6">Lees ook</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <Link to="/blogs/social-ads/tiktok-ads-webshops-boost-sales" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">TikTok Ads voor webshops</h3>
                                <p className="text-primary/60 text-sm">Hoe je TikTok-campagnes opzet die werkelijk omzet draaien.</p>
                            </Link>
                            <Link to="/blogs/social-ads/tiktok-spark-ads-vs-reguliere" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">TikTok Spark Ads</h3>
                                <p className="text-primary/60 text-sm">Wanneer Spark Ads beter renderen dan reguliere TikTok-advertenties.</p>
                            </Link>
                            <Link to="/blogs/social-ads/winnende-meta-ads-video-2026" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Winnende Meta Ads-video</h3>
                                <p className="text-primary/60 text-sm">Wat een Meta-video laat converteren en hoe TikTok-principes verschillen.</p>
                            </Link>
                        </div>
                    </section>

                </div>
            </article>

            <section className="w-full pb-32 px-6">
                <div className="max-w-4xl mx-auto bg-primary rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
                    <h2 className="relative z-10 font-drama italic text-background text-3xl sm:text-4xl md:text-5xl mb-6">
                        TikTok-creatives die wel converteren?
                    </h2>
                    <p className="relative z-10 font-sans text-background/70 text-lg mb-10 max-w-xl mx-auto">
                        Wij bouwen TikTok-videos die kloppen op hook, opbouw en CTA. Plan een vrijblijvend gesprek en je weet binnen een week welke creative-aanpak voor jouw merk werkt.
                    </p>
                    <Link
                        to="/contact"
                        className="relative z-10 btn-magnetic inline-flex items-center justify-center bg-accent text-background font-sans font-bold text-lg px-10 py-4 rounded-[2rem] hover:bg-accent/90 transition-colors"
                    >
                        Neem contact op
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
