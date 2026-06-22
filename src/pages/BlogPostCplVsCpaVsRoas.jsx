import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ChevronRight, User } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function BlogPostCplVsCpaVsRoas() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen selection:bg-accent/30 selection:text-dark flex flex-col bg-background">
            <Helmet>
                <title>CPL vs CPA vs ROAS: welk stuurdoel kies je? | Empowers</title>
                <meta name="description" content="CPL, CPA en ROAS meten elk iets anders. Lees welke metric je als stuurdoel kiest per bedrijfsmodel en waarom de verkeerde keuze omzet kost." />
                <link rel="canonical" href="https://www.empowers.nl/blogs/algemeen/cpl-vs-cpa-vs-roas" />
                <meta property="og:title" content="CPL vs CPA vs ROAS: welk stuurdoel kies je? | Empowers" />
                <meta property="og:description" content="CPL, CPA en ROAS meten elk iets anders. Lees welke metric je als stuurdoel kiest per bedrijfsmodel en waarom de verkeerde keuze omzet kost." />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://www.empowers.nl/blogs/algemeen/cpl-vs-cpa-vs-roas" />
                <meta property="og:image" content="https://www.empowers.nl/images/blogs/cpl-vs-cpa-vs-roas.jpg" />
                <meta property="article:published_time" content="2026-06-12T10:00:00+02:00" />
                <meta property="article:author" content="Empowers" />
                <meta property="article:section" content="Algemeen" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="CPL vs CPA vs ROAS: welk stuurdoel kies je? | Empowers" />
                <meta name="twitter:description" content="CPL, CPA en ROAS meten elk iets anders. Lees welke metric je als stuurdoel kiest per bedrijfsmodel en waarom de verkeerde keuze omzet kost." />
                <script type="application/ld+json">{JSON.stringify({
                    "@context": "https://schema.org",
                    "@graph": [
                        {
                            "@type": "Article",
                            "headline": "CPL vs CPA vs ROAS: welke metric kies je als stuurdoel?",
                            "image": "https://www.empowers.nl/images/blogs/cpl-vs-cpa-vs-roas.jpg",
                            "description": "CPL, CPA en ROAS meten elk iets anders. Lees welke metric je als stuurdoel kiest per bedrijfsmodel en waarom de verkeerde keuze omzet kost.",
                            "author": { "@type": "Organization", "name": "Empowers" },
                            "publisher": { "@type": "Organization", "name": "Empowers", "url": "https://www.empowers.nl" },
                            "datePublished": "2026-06-12T10:00:00+02:00",
                            "dateModified": "2026-06-12T10:00:00+02:00",
                            "url": "https://www.empowers.nl/blogs/algemeen/cpl-vs-cpa-vs-roas"
                        },
                        {
                            "@type": "BreadcrumbList",
                            "itemListElement": [
                                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.empowers.nl" },
                                { "@type": "ListItem", "position": 2, "name": "Nieuws", "item": "https://www.empowers.nl/nieuws" },
                                { "@type": "ListItem", "position": 3, "name": "Algemeen", "item": "https://www.empowers.nl/blogs/algemeen" },
                                { "@type": "ListItem", "position": 4, "name": "CPL vs CPA vs ROAS: welke metric kies je als stuurdoel?", "item": "https://www.empowers.nl/blogs/algemeen/cpl-vs-cpa-vs-roas" }
                            ]
                        },
                        {
                            "@type": "FAQPage",
                            "mainEntity": [
                                { "@type": "Question", "name": "Wat is het verschil tussen CPL en CPA?", "acceptedAnswer": { "@type": "Answer", "text": "CPL meet wat een lead kost: iemand die zijn gegevens achterlaat maar nog niets heeft gekocht. CPA meet wat een daadwerkelijke conversie kost, meestal een aankoop of getekende offerte. Tussen lead en klant zit een opvolgtraject, dus een lage CPL garandeert geen lage CPA." } },
                                { "@type": "Question", "name": "Wat is een goede ROAS?", "acceptedAnswer": { "@type": "Answer", "text": "Dat hangt af van je marge. Een webshop met 50 procent marge kan bij een ROAS van 3 winstgevend draaien, terwijl een webshop met 15 procent marge dan verlies maakt. Reken eerst uit bij welke ROAS je quitte speelt en leg je doel daarboven." } },
                                { "@type": "Question", "name": "Wat is het verschil tussen ROAS en ROI?", "acceptedAnswer": { "@type": "Answer", "text": "ROAS deelt de omzet uit advertenties door de advertentiekosten. ROI kijkt naar winst: wat houd je over nadat alle kosten zijn afgetrokken, ook inkoop en beheerskosten. Een campagne kan een mooie ROAS hebben en alsnog een negatieve ROI." } },
                                { "@type": "Question", "name": "Kun je op meerdere metrics tegelijk sturen?", "acceptedAnswer": { "@type": "Answer", "text": "Je kunt meerdere metrics meten, maar kies één stuurdoel per campagne. De biedstrategie van Google Ads en Meta Ads richt zich op het doel dat jij instelt. Wie tegelijk op een lage CPL en een hoge ROAS wil sturen, geeft het algoritme tegenstrijdige opdrachten." } },
                                { "@type": "Question", "name": "Welke metric past het best bij een webshop?", "acceptedAnswer": { "@type": "Answer", "text": "Voor webshops is ROAS meestal het beste startpunt, omdat elke bestelling een directe omzetwaarde heeft. Verkoop je producten met sterk verschillende marges, kijk dan verder dan ROAS alleen en weeg de winst per productgroep mee in je doelen." } }
                            ]
                        }
                    ]
                })}</script>
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
                        <Link to="/blogs/algemeen" className="hover:text-accent transition-colors">Algemeen</Link>
                        <ChevronRight className="w-3 h-3" />
                        <span className="text-primary truncate">CPL vs CPA vs ROAS</span>
                    </nav>

                    {/* Header */}
                    <header className="mb-16">
                        <div className="inline-block px-3 py-1 bg-accent/10 text-accent font-mono text-xs uppercase tracking-widest rounded-full mb-6">
                            Algemeen
                        </div>
                        <h1 className="font-sans font-bold text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight mb-8">
                            CPL vs CPA vs ROAS: welke metric kies je als stuurdoel?
                        </h1>

                        <div className="flex flex-wrap items-center gap-6 text-sm font-sans text-primary/60 border-y border-primary/10 py-6">
                            <div className="flex items-center gap-2">
                                <User className="w-4 h-4" />
                                <span>Empowers Redactie</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>12 juni 2026</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>7 minuten leestijd</span>
                            </div>
                        </div>
                    </header>

                    {/* Featured Image */}
                    <figure className="w-full h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden mb-16 relative bg-primary">
                        <div className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-overlay" style={{backgroundImage: "url('/images/blogs/cpl-vs-cpa-vs-roas.jpg')"}}></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </figure>

                    {/* Content */}
                    <div className="prose prose-lg prose-headings:font-sans prose-headings:font-bold prose-headings:text-primary prose-p:font-sans prose-p:text-primary/80 prose-p:leading-relaxed max-w-none">
                        <p className="text-xl md:text-2xl font-medium leading-relaxed mb-10 text-primary">
                            CPL meet wat een lead kost, CPA wat een klant kost en ROAS hoeveel omzet elke advertentie-euro oplevert. Welke metric je als stuurdoel kiest, hangt af van je bedrijfsmodel: leadgeneratie stuurt op CPL of CPA, webshops meestal op ROAS. Kies je verkeerd, dan stuur je je campagnes recht op verlies af.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat betekenen CPL, CPA en ROAS precies?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            CPL staat voor cost per lead: je advertentiekosten gedeeld door het aantal leads. Een lead is iemand die zijn gegevens achterlaat, bijvoorbeeld via een offerteformulier. Geef je 500 euro uit en leveren je campagnes 20 aanvragen op, dan is je CPL 25 euro.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            CPA staat voor cost per acquisition: de kosten per daadwerkelijke conversie. Vaak is dat een aankoop of een getekende offerte. De CPA ligt vrijwel altijd hoger dan de CPL, want niet elke lead wordt klant.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            ROAS staat voor return on ad spend: de omzet uit je advertenties gedeeld door de advertentiekosten. Geef je 1.000 euro uit en levert dat 4.000 euro omzet op, dan is je ROAS 4. Soms zie je hetzelfde getal als percentage: een ROAS van 400 procent.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wanneer stuur je op CPL?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            CPL past bij bedrijven die leads verzamelen en daarna offline verkopen: installateurs, adviesbureaus, aannemers, makelaars. De verkoop gebeurt in een gesprek of op locatie, dus het advertentieplatform ziet alleen de aanvraag. Dan is de prijs per aanvraag je eerste meetpunt.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Pas wel op voor de bekendste valkuil: goedkope leads zijn niet automatisch goede leads. Een campagne die de CPL halveert maar vooral prijsvragers en niet-serieuze aanvragen oplevert, maakt je verkoopteam drukker en je omzet niet hoger.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Wij zien bij leadgeneratie-klanten dan ook dat de doorbraak meestal niet zit in een lagere CPL, maar in het terugkoppelen van leadkwaliteit. Geef aan het platform door welke leads klant werden. Dan leert het algoritme bieden op mensen die lijken op je beste klanten in plaats van op de goedkoopste invuller.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wanneer is CPA een beter stuurdoel?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            CPA werkt goed zodra je conversie een vaste, vergelijkbare waarde heeft. Denk aan een abonnement van 30 euro per maand of een dienst met één vaste prijs. Elke conversie is dan ongeveer evenveel waard, dus de prijs per conversie zegt direct iets over je rendement.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Het rekenwerk is overzichtelijk. Weet je dat een nieuwe klant je gemiddeld 600 euro oplevert en wil je maximaal een kwart daarvan aan acquisitie uitgeven, dan is je CPA-doel 150 euro. Alles daaronder is groei, alles daarboven vraagt om bijsturen.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            CPA schiet tekort wanneer bestelwaardes sterk uiteenlopen. Een conversie van 40 euro en een conversie van 900 euro tellen dan even zwaar mee. In dat geval stuurt CPA je campagnes naar veel kleine bestellingen, terwijl de winst in de grote zit.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wanneer kies je ROAS?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            ROAS is het standaard stuurdoel voor webshops. Elke bestelling heeft een directe omzetwaarde die het platform kan meten, dus het algoritme kan bieden op de waarde van een klik in plaats van alleen op de kans op een conversie. Zo weegt een winkelmandje van 900 euro vanzelf zwaarder dan eentje van 40 euro.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Welke ROAS goed genoeg is, bepaalt je marge. Stel: je marge is 30 procent. Bij een ROAS van 3,3 spelen je advertenties quitte, daarboven verdien je. Een concurrent met 60 procent marge is al winstgevend bij een ROAS van 1,7. Hetzelfde getal, een totaal ander oordeel.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            En let op een tweede valkuil: een hoge gemiddelde ROAS kan komen van branded campagnes, advertenties op je eigen merknaam. Die mensen hadden je toch wel gevonden. Beoordeel branded en niet-branded campagnes daarom los van elkaar, anders lijkt je marketing beter dan hij is.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Welke metric past bij jouw bedrijf?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De vuistregel is simpel. Verkoop je via gesprekken en offertes, stuur dan op CPL en bewaak de leadkwaliteit. Heeft je conversie een vaste waarde, stuur dan op CPA. Verkoop je online met variërende bestelwaardes, stuur dan op ROAS.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Het echte stuurdoel achter al deze metrics blijft winst. ROAS kijkt naar omzet, niet naar wat je overhoudt. Wie alleen op omzetcijfers stuurt, kan campagnes laten groeien die per bestelling verlies draaien. Reken daarom altijd je marge mee, per productgroep als het kan.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Hoe je deze doelen vervolgens technisch instelt verschilt per platform. In <Link to="/google-ads" className="text-accent hover:underline">Google Ads</Link> kies je een biedstrategie zoals doel-CPA of doel-ROAS, in <Link to="/meta-ads" className="text-accent hover:underline">Meta Ads</Link> stuur je via het campagnedoel en de conversie-instellingen. Meer achtergrond over meetbaar adverteren lees je in onze blog over <Link to="/blogs/algemeen/performance-marketing-verschilt-traditionele-marketing" className="text-accent hover:underline">performance marketing</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe voorkom je dat je op het verkeerde doel stuurt?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Begin bij je rekensom, niet bij je dashboard. Wat levert een klant je op, wat mag die klant kosten en welke marge zit ertussen? Pas als die getallen op papier staan, kies je de metric die daar het dichtst bij ligt.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Geef een nieuw stuurdoel daarna de tijd. Algoritmes hebben een leerperiode nodig na elke grote wijziging. Wie elke week van doel wisselt, houdt zijn campagnes permanent in de war en zijn resultaten onleesbaar.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Kort samengevat: CPL voor leads, CPA voor vaste conversiewaardes, ROAS voor webshops, en winst als de toets achter alles. Groei is geen toeval. Het is een rekensom die klopt.
                        </p>

                        <hr className="my-16 border-primary/10" />

                        <h2 className="text-3xl mb-8">Veelgestelde vragen over CPL, CPA en ROAS</h2>

                        <div className="space-y-6 not-prose">
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat is het verschil tussen CPL en CPA?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    CPL meet wat een lead kost: iemand die zijn gegevens achterlaat maar nog niets heeft gekocht. CPA meet wat een daadwerkelijke conversie kost, meestal een aankoop of getekende offerte. Tussen lead en klant zit een opvolgtraject, dus een lage CPL garandeert geen lage CPA.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat is een goede ROAS?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Dat hangt af van je marge. Een webshop met 50 procent marge kan bij een ROAS van 3 winstgevend draaien, terwijl een webshop met 15 procent marge dan verlies maakt. Reken eerst uit bij welke ROAS je quitte speelt en leg je doel daarboven.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat is het verschil tussen ROAS en ROI?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    ROAS deelt de omzet uit advertenties door de advertentiekosten. ROI kijkt naar winst: wat houd je over nadat alle kosten zijn afgetrokken, ook inkoop en beheerskosten. Een campagne kan een mooie ROAS hebben en alsnog een negatieve ROI.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Kun je op meerdere metrics tegelijk sturen?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Je kunt meerdere metrics meten, maar kies één stuurdoel per campagne. De biedstrategie van Google Ads en Meta Ads richt zich op het doel dat jij instelt. Wie tegelijk op een lage CPL en een hoge ROAS wil sturen, geeft het algoritme tegenstrijdige opdrachten.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Welke metric past het best bij een webshop?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Voor webshops is ROAS meestal het beste startpunt, omdat elke bestelling een directe omzetwaarde heeft. Verkoop je producten met sterk verschillende marges, kijk dan verder dan ROAS alleen en weeg de winst per productgroep mee in je doelen.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </article>

            {/* Bottom CTA */}
            <section className="w-full pb-32 px-6">
                <div className="max-w-4xl mx-auto bg-primary rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
                    <h2 className="relative z-10 font-drama italic text-background text-3xl sm:text-4xl md:text-5xl mb-6">Sturen op cijfers die kloppen?</h2>
                    <p className="relative z-10 font-sans text-background/70 text-lg mb-10 max-w-xl mx-auto">
                        We rekenen samen uit welk stuurdoel bij jouw bedrijf past en richten je campagnes erop in. Plan een gratis gesprek.
                    </p>
                    <Link to="/contact" className="relative z-10 btn-magnetic inline-flex items-center justify-center bg-accent text-background font-sans font-bold text-lg px-10 py-4 rounded-[2rem] hover:bg-accent/90 transition-colors">
                        Samenwerken met Empowers
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
