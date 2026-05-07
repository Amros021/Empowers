import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ChevronRight, User } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function BlogPostUgcMetaAds() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen selection:bg-accent/30 selection:text-dark flex flex-col bg-background">
            <Helmet>
                <title>Hoe gebruik je UGC in Meta Ads: praktische gids voor 2026 | Empowers</title>
                <meta name="description" content="UGC werkt op Facebook en Instagram beter dan studio-content. Lees hoe je UGC verzamelt, inzet en meet zonder dat je adverteren goedkoop oogt." />
                <link rel="canonical" href="https://www.empowers.nl/blogs/social-ads/ugc-meta-ads" />
                <meta property="og:title" content="Hoe gebruik je UGC in Meta Ads: praktische gids voor 2026 | Empowers" />
                <meta property="og:description" content="UGC werkt op Facebook en Instagram beter dan studio-content. Lees hoe je UGC verzamelt, inzet en meet zonder dat je adverteren goedkoop oogt." />
                <meta property="og:url" content="https://www.empowers.nl/blogs/social-ads/ugc-meta-ads" />
                <meta property="og:type" content="article" />
                <meta property="og:image" content="https://www.empowers.nl/images/blogs/ugc-meta-ads.jpg" />
                <script type="application/ld+json">{JSON.stringify({
                    "@context": "https://schema.org",
                    "@graph": [
                        {
                            "@type": "Article",
                            "headline": "Hoe gebruik je UGC in Meta Ads: praktische gids voor 2026",
                            "image": "https://www.empowers.nl/images/blogs/ugc-meta-ads.jpg",
                            "description": "UGC werkt op Facebook en Instagram beter dan studio-content. Lees hoe je UGC verzamelt, inzet en meet zonder dat je adverteren goedkoop oogt.",
                            "author": { "@type": "Organization", "name": "Empowers", "url": "https://www.empowers.nl" },
                            "publisher": { "@type": "Organization", "name": "Empowers", "url": "https://www.empowers.nl" },
                            "datePublished": "2026-05-05T10:00:00+02:00",
                            "dateModified": "2026-05-05T10:00:00+02:00",
                            "url": "https://www.empowers.nl/blogs/social-ads/ugc-meta-ads"
                        },
                        {
                            "@type": "FAQPage",
                            "mainEntity": [
                                { "@type": "Question", "name": "Wat is UGC precies?", "acceptedAnswer": { "@type": "Answer", "text": "UGC staat voor User Generated Content. Dat is content gemaakt door echte mensen, vaak klanten, in plaats van door een professioneel productieteam. In de praktijk zie je UGC als telefoonopnames, unboxing-video's, recensies in beeld en eenvoudige reviews. Het ziet eruit alsof iemand het op de bank heeft opgenomen, omdat dat ook zo is." } },
                                { "@type": "Question", "name": "Werkt UGC echt beter dan studio-content?", "acceptedAnswer": { "@type": "Answer", "text": "Voor cold audiences op Facebook en Instagram presteert UGC vrijwel overal beter dan strakke studio-content. Mensen scrollen sneller voorbij iets wat eruitziet als reclame. Een onbewerkte video met een eerlijke stem houdt de aandacht langer vast. Voor warme doelgroepen (retargeting) werken polished assets vaak beter, omdat de drempel daar laag is en de boodschap helder moet." } },
                                { "@type": "Question", "name": "Mag ik UGC zomaar gebruiken in advertenties?", "acceptedAnswer": { "@type": "Answer", "text": "Niet zomaar. Je hebt schriftelijke toestemming nodig van de maker, zelfs als ze jou hebben getagd. Bouw een korte UGC-toestemmingsbrief op die ze digitaal ondertekenen voordat je hun beelden inzet. Zonder die handtekening loop je auteursrechtelijk risico, en Meta kan adverties weigeren of pauzeren bij rechtenklachten." } },
                                { "@type": "Question", "name": "Hoeveel UGC-varianten moet ik per maand draaien?", "acceptedAnswer": { "@type": "Answer", "text": "Reken voor een actief Meta-account op vier tot zes verse UGC-creatives per maand. Dat is genoeg om creative fatigue voor te blijven en regelmatig nieuwe winnaars te ontdekken. Heb je minder budget? Dan zijn twee nieuwe varianten per maand al een prima ritme om te beginnen, mits je oude winnaars opfrist met kleine bewerkingen." } },
                                { "@type": "Question", "name": "Hoe vind ik de juiste UGC-makers?", "acceptedAnswer": { "@type": "Answer", "text": "Begin bij je bestaande klanten. Vraag tevreden kopers of ze een korte video willen maken in ruil voor een tegoedbon of korting. Werkt dat niet of wil je opschalen, dan zijn UGC-marketplaces zoals Billo, Cohley en Insense bekende routes. De makers daar zijn gewend aan briefings en leveren binnen een paar dagen ruwe video aan." } },
                                { "@type": "Question", "name": "Hoe meet ik of UGC daadwerkelijk werkt?", "acceptedAnswer": { "@type": "Answer", "text": "Vergelijk UGC en studio-content niet op kostprijs alleen. Kijk naar hookrate (kijkers die de eerste drie seconden blijven), thumbstop ratio en doorklikratio. En uiteindelijk de CPA. UGC heeft vaak een hogere hookrate maar soms iets lagere conversie. Wat telt is de combinatie. Pak ROAS over een rollend venster van veertien dagen, niet enkele losse dagen." } }
                            ]
                        }
                    ]
                })}</script>
                <script type="application/ld+json">{JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "BreadcrumbList",
                    "itemListElement": [
                        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.empowers.nl" },
                        { "@type": "ListItem", "position": 2, "name": "Nieuws", "item": "https://www.empowers.nl/nieuws" },
                        { "@type": "ListItem", "position": 3, "name": "Social Ads", "item": "https://www.empowers.nl/blogs/social-ads" },
                        { "@type": "ListItem", "position": 4, "name": "Hoe gebruik je UGC in Meta Ads", "item": "https://www.empowers.nl/blogs/social-ads/ugc-meta-ads" }
                    ]
                })}</script>
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
                        <span className="text-primary truncate">UGC in Meta Ads</span>
                    </nav>

                    <header className="mb-16">
                        <div className="inline-block px-3 py-1 bg-accent/10 text-accent font-mono text-xs uppercase tracking-widest rounded-full mb-6">
                            Social Ads
                        </div>
                        <h1 className="font-sans font-bold text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight mb-8">
                            Hoe gebruik je UGC in Meta Ads: praktische gids voor 2026
                        </h1>
                        <div className="flex flex-wrap items-center gap-6 text-sm font-sans text-primary/60 border-y border-primary/10 py-6">
                            <div className="flex items-center gap-2">
                                <User className="w-4 h-4" />
                                <span>Empowers Redactie</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>5 mei 2026</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>8 minuten leestijd</span>
                            </div>
                        </div>
                    </header>

                    <figure className="w-full h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden mb-16 relative bg-primary">
                        <div className="absolute inset-0 bg-[url('/images/blogs/ugc-meta-ads.jpg')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </figure>

                    <div className="prose prose-lg prose-headings:font-sans prose-headings:font-bold prose-headings:text-primary prose-p:font-sans prose-p:text-primary/80 prose-p:leading-relaxed max-w-none">
                        <p className="text-xl md:text-2xl font-medium leading-relaxed mb-10 text-primary">
                            Een polished merkvideo opent zelden een verkoop op Instagram. Een onhandige telefoonopname van een klant in een rommelige keuken wel. UGC werkt op Meta omdat mensen niet meer kijken naar reclame, maar wel naar mensen. Wie dat begrijpt, schrijft zijn advertentiebudget niet meer uit aan een productieset. Hij stuurt het naar makers en klanten, met briefings die in vijf minuten staan.
                        </p>

                        <p className="text-primary/80 leading-relaxed mb-6">
                            Veel ondernemers denken dat UGC iets is voor lifestyle-merken en jonge webshops. Klopt niet. Een installatiebedrijf met een korte video van een klant die zegt "deze jongens kwamen op een zondagavond toen mijn cv stuk was" presteert vaak beter dan een dure animatievideo over service. Authenticiteit is geen gimmick. Het is een feed-realiteit.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Waarom werkt UGC zo goed in Meta Ads?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Mensen scrollen door een feed met één doel: snel begrijpen of iets relevant is. In dat ritme valt een merkadvertentie meteen op als reclame, en wordt voorbijgescrold. Een telefoonopname van iemand die praat alsof het een vriend is, voelt anders. Het past in de feed. De duim stopt. En zodra die duim stopt, hebben Meta's algoritmes de eerste signalen om jouw advertentie naar bredere doelgroepen te sturen.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Het tweede effect zit in vertrouwen. Een merk dat zichzelf prijst, krijgt een kritische blik. Een klant die hetzelfde zegt, krijgt het voordeel van de twijfel. Sociale bewijskracht is geen marketingtruc, het is hoe mensen al duizenden jaren beslissen.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            En dan is er nog Meta's eigen voorkeur. Het algoritme houdt van content die natuurlijk in de feed past. Reels en Stories belonen verticale, ruwe video. Adverteerders die hun studiocontent platzetten op die plekken, betalen meer per resultaat dan adverteerders die UGC inzetten. Geen toeval, maar logische uitkomst van hoe het systeem leert wat werkt.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Welke soorten UGC werken het best?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Niet alle UGC is gelijk. Er zijn drie categorieën die in Meta Ads consistent goed scoren. De eerste: praatvideo's. Een persoon spreekt direct in de camera over een probleem en hoe een product of dienst dat oploste. Houd het tussen 15 en 45 seconden. De tweede: demo-content. Iemand laat zien hoe iets werkt, in zijn eigen omgeving, zonder script. Vooral voor producten met een functioneel voordeel zijn deze video's goud waard. De derde: vergelijkings- of voor-en-na-content. Een klant die laat zien hoe iets eruitzag voor hij jouw oplossing gebruikte, en hoe het er nu uitziet.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Wat in 2026 minder werkt: te perfecte UGC. Sinds de hausse aan UGC-makers met goede ringlights en strakke editing zijn dat soort video's bijna een nieuwe vorm van studio-content. Authentiek voelende beelden, met huiselijke geluiden op de achtergrond, slaan beter aan dan een mooi gestileerde "UGC-style" opname die toch een productiehand verraadt.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe verzamel je UGC zonder budget te verspillen?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Begin bij je tevreden klanten. Stuur een mailtje aan de mensen die de afgelopen drie maanden iets bij je kochten of een dienst afnamen. Vraag of ze een korte video willen maken over hun ervaring. In ruil bied je een korting, een tegoed of een klein cadeau. Reken op een respons van rond de tien procent. Dat klinkt weinig. Bij honderd verzonden mails levert het tien video's op, en dat is voor de meeste accounts genoeg voor een paar maanden.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Voor wie sneller wil opschalen: UGC-platforms. Billo, Cohley en Insense zijn drie bekende namen waar makers tegen vergoeding video's leveren op briefing. Reken op een prijspuntje van rond de honderd tot driehonderd euro per video, afhankelijk van complexity en maker-niveau. Levertijd: meestal binnen een week.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Wat je hoe dan ook nodig hebt, is een briefing. Korte instructie wat je wilt zien, welke pijnpunt centraal staat, welke uitspraak goed zou werken. Geen volledig script. Maar ook geen "doe maar wat". Een goede briefing is twee A4-tjes met scenes en voorbeeldzinnen, plus wat je beslist niet wilt zien. Met die richtlijn levert vrijwel elke maker iets bruikbaars.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe zet je UGC in Meta Ads zelf in?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Test altijd meerdere hooks. De eerste drie seconden van een video bepalen of iemand blijft kijken of doorscrolt. Test bijvoorbeeld dezelfde basisvideo met drie verschillende openingen: een vraag, een schokkende uitspraak, en een visuele actie. Meta laat je dat efficient doen via Advantage+ Creative en multi-creative ad sets.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Werk in plaatsing-specifieke versies. Een Reels-versie is verticaal, snel, met visuele en spreektekst. Een feed-versie kan iets rustiger en wat langer. Stories vragen weer om snelle visuele aandacht in de eerste seconde. Probeer niet één video op alle plaatsingen te draaien. De marginale kosten van een aangepaste versie zijn laag, het rendementverschil is fors.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Voeg ondertiteling toe. Een groot deel van de gebruikers kijkt zonder geluid. Zonder ondertiteling missen ze de boodschap. Onderzoek eens hoe vaak je zelf met geluid scrolt: precies. Brand jouw merk subtiel in beeld via een logo links onderin of een kleurenaccent. Niet zo prominent dat het reclame voelt. Wel zichtbaar genoeg dat herkenning ontstaat.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Welke fouten kosten je rendement?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De grootste valkuil is UGC te lang laten draaien. Wat in week één een topperformer is, vermoeit doelgroepen sneller dan studio-content. Mensen herkennen de video, scrollen door, en je frequencies lopen op zonder dat de algoritmes nieuwe handvatten krijgen. Vervang winnende UGC-creatives elke vier tot zes weken door verse versies van dezelfde maker of stijl, niet door iets totaal anders.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een andere veelgemaakte fout: alle UGC in één campagne stoppen en hopen dat het algoritme het uitzoekt. Meta's CBO-budgetten verdelen wel, maar werken het beste als je creatives groepeert per stijl of doelgroep. Maak aparte ad sets voor "praatvideo's", "demo's" en "voor-en-na". Dan zie je veel sneller wat type content per doelgroep werkt, en stuur je gericht bij.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Tot slot: rechten vergeten vast te leggen. Een klant die spontaan een fantastische video op Instagram zet, kan een week later besluiten dat hij het toch niet wil. Zonder schriftelijke toestemming kun je daar niets tegenin brengen. Maak een sjabloon voor toestemming dat in een mail past. Twee minuten werk per UGC-asset.
                        </p>

                        <div className="bg-accent/5 rounded-3xl p-8 md:p-12 my-12 border border-accent/10">
                            <h3 className="text-2xl font-bold text-primary mb-4 mt-0">Meer halen uit jouw Meta Ads?</h3>
                            <p className="mb-6">
                                Wil je weten welke UGC-stijl voor jouw doelgroep werkt en hoe je een UGC-pijplijn opzet zonder dat je elke maand opnieuw alles uit je mouw schudt? Plan een gesprek via onze <Link to="/contact" className="text-accent hover:underline">contactpagina</Link>. Of bekijk onze <Link to="/diensten" className="text-accent hover:underline">diensten</Link> voor een overzicht van wat we voor MKB en webshops doen rond Meta Ads.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Link to="/contact" className="btn-magnetic bg-accent text-white px-6 py-3 rounded-full font-bold text-sm hover:bg-accent/90 transition-colors inline-block no-underline">
                                    Plan een Meta Ads-audit
                                </Link>
                                <Link to="/diensten" className="px-6 py-3 rounded-full font-bold text-sm text-primary hover:bg-black/5 transition-colors border border-primary/20 inline-block no-underline">
                                    Bekijk onze diensten
                                </Link>
                            </div>
                        </div>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe meet je of UGC echt werkt?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Begin met hookrate. Hoeveel mensen kijken voorbij de eerste drie seconden? Goede UGC trekt veel meer kijkers door de eerste seconden dan studiocontent op cold audiences gemiddeld doet. Hoe hoger je hookrate, hoe goedkoper je impressies en hoe beter de algoritmes leren.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Daarna kijk je naar thru-play en doorklikratio. Een UGC-video die mensen tot het einde laat kijken, brengt warme klikken op. Klikken die wegen voor het algoritme. En tot slot: CPA en ROAS. Niet per video, maar per stijl. Wat doen praatvideo's gemiddeld? Wat doen demo's? Daarmee bouw je een productieplan dat structureel rendement levert, niet eenmalig.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Lees ook onze blog over de <Link to="/blogs/social-ads/winnende-meta-ads-video-2026" className="text-accent hover:underline">winnende Meta Ads video formule</Link>, of duik in <Link to="/blogs/social-ads/effectieve-meta-ads-funnel" className="text-accent hover:underline">een effectieve Meta Ads funnel</Link>. Werk je met een webshop? Dan helpt ook <Link to="/blogs/social-ads/meta-ads-webshops-verhoog-omzet" className="text-accent hover:underline">Meta Ads voor webshops</Link>.
                        </p>

                        <hr className="my-16 border-primary/10" />

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Veelgestelde vragen over UGC in Meta Ads</h2>

                        <div className="space-y-6 not-prose">
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat is UGC precies?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">UGC staat voor User Generated Content. Dat is content gemaakt door echte mensen, vaak klanten, in plaats van door een professioneel productieteam. In de praktijk zie je UGC als telefoonopnames, unboxing-video's, recensies in beeld en eenvoudige reviews. Het ziet eruit alsof iemand het op de bank heeft opgenomen, omdat dat ook zo is.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Werkt UGC echt beter dan studio-content?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Voor cold audiences op Facebook en Instagram presteert UGC vrijwel overal beter dan strakke studio-content. Mensen scrollen sneller voorbij iets wat eruitziet als reclame. Een onbewerkte video met een eerlijke stem houdt de aandacht langer vast. Voor warme doelgroepen (retargeting) werken polished assets vaak beter, omdat de drempel daar laag is en de boodschap helder moet.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Mag ik UGC zomaar gebruiken in advertenties?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Niet zomaar. Je hebt schriftelijke toestemming nodig van de maker, zelfs als ze jou hebben getagd. Bouw een korte UGC-toestemmingsbrief op die ze digitaal ondertekenen voordat je hun beelden inzet. Zonder die handtekening loop je auteursrechtelijk risico, en Meta kan adverties weigeren of pauzeren bij rechtenklachten.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoeveel UGC-varianten moet ik per maand draaien?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Reken voor een actief Meta-account op vier tot zes verse UGC-creatives per maand. Dat is genoeg om creative fatigue voor te blijven en regelmatig nieuwe winnaars te ontdekken. Heb je minder budget? Dan zijn twee nieuwe varianten per maand al een prima ritme om te beginnen, mits je oude winnaars opfrist met kleine bewerkingen.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoe vind ik de juiste UGC-makers?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Begin bij je bestaande klanten. Vraag tevreden kopers of ze een korte video willen maken in ruil voor een tegoedbon of korting. Werkt dat niet of wil je opschalen, dan zijn UGC-marketplaces zoals Billo, Cohley en Insense bekende routes. De makers daar zijn gewend aan briefings en leveren binnen een paar dagen ruwe video aan.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoe meet ik of UGC daadwerkelijk werkt?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Vergelijk UGC en studio-content niet op kostprijs alleen. Kijk naar hookrate (kijkers die de eerste drie seconden blijven), thumbstop ratio en doorklikratio. En uiteindelijk de CPA. UGC heeft vaak een hogere hookrate maar soms iets lagere conversie. Wat telt is de combinatie. Pak ROAS over een rollend venster van veertien dagen, niet enkele losse dagen.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </article>

            <section className="w-full pb-32 px-6">
                <div className="max-w-4xl mx-auto bg-primary rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
                    <h2 className="relative z-10 font-drama italic text-background text-3xl sm:text-4xl md:text-5xl mb-6">UGC inzetten zonder gedoe?</h2>
                    <p className="relative z-10 font-sans text-background/70 text-lg mb-10 max-w-xl mx-auto">
                        We helpen je een UGC-pijplijn op te zetten waar elke maand verse content uitkomt, klaar om in Meta Ads te draaien. Van briefing tot productie tot meten.
                    </p>
                    <Link to="/contact" className="relative z-10 btn-magnetic inline-flex items-center justify-center bg-accent text-background font-sans font-bold text-lg px-10 py-4 rounded-[2rem] hover:bg-accent/90 transition-colors">
                        Plan een Meta Ads-audit
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
