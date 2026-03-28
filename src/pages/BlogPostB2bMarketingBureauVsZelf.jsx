import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ChevronRight, User } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function BlogPostB2bMarketingBureauVsZelf() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const breadcrumbs = [
        { label: 'Home', href: '/' },
        { label: 'Nieuws', href: '/nieuws' },
        { label: 'Algemeen', href: '/blogs/algemeen' },
        { label: 'B2B marketing bureau vs zelf doen' }
    ];

    return (
        <main className="min-h-screen selection:bg-accent/30 selection:text-dark flex flex-col bg-background">
            <Helmet>
                <title>B2B marketing bureau vs zelf doen | Empowers</title>
                <meta
                    name="description"
                    content="Moet jij een B2B marketing bureau inhuren of kan je het zelf doen? Lees wanneer je beter een specialist kiest en wat je bespaard."
                />
                <meta name="keywords" content="b2b marketing bureau, b2b marketing uitbesteden, b2b marketing agency" />
                <link rel="canonical" href="https://www.empowers.nl/blogs/algemeen/b2b-marketing-bureau-vs-zelf" />

                <meta property="og:type" content="article" />
                <meta property="og:title" content="B2B marketing bureau vs zelf doen: wat is slimmer voor jouw bedrijf?" />
                <meta
                    property="og:description"
                    content="Moet jij een B2B marketing bureau inhuren of kan je het zelf doen? Lees wanneer je beter een specialist kiest en wat je bespaard."
                />
                <meta property="og:url" content="https://www.empowers.nl/blogs/algemeen/b2b-marketing-bureau-vs-zelf" />
                <meta property="og:image" content="https://www.empowers.nl/images/blogs/b2b-marketing-bureau-vs-zelf.jpg" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="B2B marketing bureau vs zelf doen | Empowers" />
                <meta
                    name="twitter:description"
                    content="Moet jij een B2B marketing bureau inhuren of kan je het zelf doen? Lees wanneer je beter een specialist kiest en wat je bespaard."
                />
                <meta name="twitter:image" content="https://www.empowers.nl/images/blogs/b2b-marketing-bureau-vs-zelf.jpg" />

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Article",
                        "headline": "B2B marketing bureau vs zelf doen: wat is slimmer voor jouw bedrijf?",
                        "description": "Moet jij een B2B marketing bureau inhuren of kan je het zelf doen? Lees wanneer je beter een specialist kiest en wat je bespaard.",
                        "image": "https://www.empowers.nl/images/blogs/b2b-marketing-bureau-vs-zelf.jpg",
                        "datePublished": "2026-03-20T00:00:00+01:00",
                        "dateModified": "2026-03-20T00:00:00+01:00",
                        "author": { "@type": "Organization", "name": "Empowers" },
                        "publisher": {
                            "@type": "Organization",
                            "name": "Empowers",
                            "logo": {
                                "@type": "ImageObject",
                                "url": "https://www.empowers.nl/empowers-logo-color.svg"
                            }
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
                                "name": "Nieuws",
                                "item": "https://www.empowers.nl/nieuws"
                            },
                            {
                                "@type": "ListItem",
                                "position": 3,
                                "name": "Algemeen",
                                "item": "https://www.empowers.nl/blogs/algemeen"
                            },
                            {
                                "@type": "ListItem",
                                "position": 4,
                                "name": "B2B marketing bureau vs zelf doen",
                                "item": "https://www.empowers.nl/blogs/algemeen/b2b-marketing-bureau-vs-zelf"
                            }
                        ]
                    })}
                </script>

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": [
                            {
                                "@type": "Question",
                                "name": "Wanneer moet ik een B2B marketing bureau inhuren?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Huur een B2B marketing bureau in als je budget groter dan 5.000 euro per maand is, je geen 15-20 uur per week kan besteden of snel resultaten wilt. Een specialist haalt 40-60 procent betere resultaten dan amateurwerk in B2B."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Hoeveel kost een B2B marketing bureau?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "B2B marketing bureaus rekenen 2.500 tot 10.000 euro per maand. Dit hangt af van je doelgroep, kanalen (LinkedIn, content, e-mail) en omvang. Veel bureaus werken op uurbasis (75-150 euro per uur) of maandtarief."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Kan ik B2B marketing zelf doen?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Ja, je kan B2B marketing zelf doen als je 15-20 uur per week hebt, LinkedIn-savvy bent en inhoudelijk sterk bent. Voor kleine doelgroepen en lokale markten werkt dit goed. Voor snelle groei is professionele hulp beter."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Wat is het verschil tussen een B2B en B2C marketing bureau?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "B2B marketing is langer en complexer. Je targetted kleinere doelgroepen op LinkedIn en e-mail. B2C is sneller en op schaal. Zorg dat je bureau B2B-ervaring heeft, niet alleen B2C."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Hoe lang tot ik resultaten zie van een B2B bureau?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "B2B marketing werkt langzamer dan B2C. Verwacht eerste resultaten na 3-4 maanden. Full momentum krijg je na 6-9 maanden. Zorg dat je bureau geduld hebt en systematisch werkt."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Wat doet een B2B marketing bureau anders dan ik?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Een B2B bureau bouwt geïntegreerde campagnes op (LinkedIn ads, content, e-mail, events). Ze segmenteren je doelgroep scherp, schrijven overtuigende copy en analyseren data. Dit leidt tot meer leads en betere kwaliteit."
                                }
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
                        <Link to="/blogs/algemeen" className="hover:text-accent transition-colors">Algemeen</Link>
                        <ChevronRight className="w-3 h-3" />
                        <span className="text-primary truncate">B2B marketing...</span>
                    </nav>

                    {/* Header */}
                    <header className="mb-16">
                        <div className="inline-block px-3 py-1 bg-accent/10 text-accent font-mono text-xs uppercase tracking-widest rounded-full mb-6">
                            Algemeen
                        </div>
                        <h1 className="font-sans font-bold text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight mb-8">
                            B2B marketing bureau vs zelf doen: wat is slimmer voor jouw bedrijf?
                        </h1>
                        <div className="flex flex-wrap items-center gap-6 text-sm font-sans text-primary/60 border-y border-primary/10 py-6">
                            <div className="flex items-center gap-2">
                                <User className="w-4 h-4" />
                                <span>Empowers Redactie</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>20 maart 2026</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>9 minuten leestijd</span>
                            </div>
                        </div>
                    </header>

                    {/* Featured Image */}
                    <figure className="w-full h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden mb-16 relative bg-primary">
                        <div className="absolute inset-0 bg-[url('/images/blogs/b2b-marketing-bureau-vs-zelf.jpg')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </figure>

                    {/* Content */}
                    <div className="prose prose-lg max-w-none prose-headings:font-sans prose-headings:font-bold prose-headings:text-primary prose-a:text-accent prose-a:underline hover:prose-a:text-accent/80">
                        <p className="text-lg leading-relaxed text-primary/80 mb-8">
                            B2B marketing is anders dan B2C. Je hebt een gespecialiseerde aanpak nodig: LinkedIn, content marketing en lange sales cycles. Doe het zelf als je klein bent en tijd hebt. Huur een bureau in als je snel groei wilt en meer dan 5.000 euro per maand beschikbaar hebt. Een professionele B2B bureau haalt 40 tot 60 procent betere resultaten.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">
                            Waar worstelen B2B bedrijven mee?
                        </h2>

                        <p className="text-primary/80 leading-relaxed mb-6">
                            B2B marketing is harder dan het lijkt. Je targetaudience is klein en specifiek. Een accountmanager van jouw klant zoekt niet op Google naar je producten. Ze zitten op LinkedIn, lezen whitepapers en gaan naar events.
                        </p>

                        <p className="text-primary/80 leading-relaxed mb-6">
                            Veel B2B bedrijven begrijpen dit niet. Ze doen B2C marketing (hoge volumes, korte cycli) en wonder zich af waarom ze geen leads krijgen. B2B vraagt geduld, relevante content en relatiebouwing.
                        </p>

                        <p className="text-primary/80 leading-relaxed mb-6">
                            De grootste uitdagingen: je doelgroep is te klein voor B2C-aanpak, je sales cycle is lang (3-6 maanden), een klant neemt maanden om te beslissen en je moet veel stakeholders overtuigen.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">
                            Zelf B2B marketing doen: wanneer kan het?
                        </h2>

                        <p className="text-primary/80 leading-relaxed mb-6">
                            Je kan B2B marketing zelf doen als je aan dit profiel voldoet: je hebt 15-20 uur per week beschikbaar, je bent goed met LinkedIn en content, je doelgroep is klein (onder 500 potentiële klanten) en je budget is minder dan 3.000 euro per maand.
                        </p>

                        <p className="text-primary/80 leading-relaxed mb-6">
                            Dit werkt goed voor startups, consultants en kleine SaaS bedrijven met niche markten. Je hebt directe controle, je begrijpt je klanten beter en je bespaart management fees.
                        </p>

                        <p className="text-primary/80 leading-relaxed mb-6">
                            Het nadeel: B2B marketing vereist veel tijd. Je moet LinkedIn posts schrijven, whitepapers maken, webinars hosten en emails sturen. Als je dit naast je reguliere werk doet, gaat het traag.
                        </p>

                        <h3 className="text-2xl font-bold text-primary mt-8 mb-4">
                            Hoeveel tijd kost het zelf doen?
                        </h3>

                        <p className="text-primary/80 leading-relaxed mb-6">
                            Goed B2B marketing kost minstens 15-20 uur per week. Je moet maandelijks 4-8 LinkedIn posts schrijven, 1-2 whitepapers maken, e-mailcampagnes opzetten en data analyseren. Zonder voldoende tijd stagneert je marketing.
                        </p>

                        <p className="text-primary/80 leading-relaxed mb-6">
                            We zien in de praktijk dat veel ondernemers dit onderschatten. Ze starten enthousiast, maar na 3 maanden slinkt de tijd. Dan gaat je content strategie achteruit en krijg je minder leads.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">
                            Wanneer is een B2B marketing bureau de slimme keus?
                        </h2>

                        <p className="text-primary/80 leading-relaxed mb-6">
                            Huur een B2B bureau in als je budget groter is dan 5.000 euro per maand, je geen 15-20 uur per week kan besteden, je snel leads wilt of je huidige marketing stagneert. Een professionele bureau bouwt geïntegreerde campagnes op.
                        </p>

                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een goed B2B bureau combineert LinkedIn-advertenties, content marketing, email campaigns en events. Ze analyseren je doelgroep scherp, segmenteren je database en testen voortdurend. Dit leidt tot 40-60 procent meer kwalificeerde leads.
                        </p>

                        <h3 className="text-2xl font-bold text-primary mt-8 mb-4">
                            Wat kost een B2B marketing bureau?
                        </h3>

                        <p className="text-primary/80 leading-relaxed mb-6">
                            B2B marketing bureaus rekenen 2.500 tot 10.000 euro per maand. Kleinere bureaus werken op uurbasis (75-150 euro per uur). Grotere agencies hanteren vaste maandtarieven, afhankelijk van scope (hoeveel kanalen, campagnes, frequency).
                        </p>

                        <p className="text-primary/80 leading-relaxed mb-6">
                            Dit lijkt duur, maar een goed bureau genereert veel meer leads. Als je er tien extra gesloten deals per maand uit haalt, en jouw gemiddelde deal 50.000 euro oplevert, dan betaal je jezelf terug in één maand.
                        </p>

                        <h3 className="text-2xl font-bold text-primary mt-8 mb-4">
                            Wat doet een B2B bureau anders dan jij?
                        </h3>

                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een professionele B2B bureau heeft ervaring met tientallen B2B bedrijven. Ze kennen LinkedIn algoritmes, welke content werkt, hoe je sales teams enablement doet en hoe je long sales cycles optimaliseert.
                        </p>

                        <p className="text-primary/80 leading-relaxed mb-6">
                            Ze schrijven overtuigende copy, segmenteren je doelgroep scherp en testen voortdurend. Ze hebben tools voor lead scoring, CRM integraties en gedetailleerde analytics. Ze weten welke leads warm zijn en welke nog koud.
                        </p>

                        <p className="text-primary/80 leading-relaxed mb-6">
                            Bovendien hebben ze netwerk. Ze kennen events, influencers en kanalen waar jouw doelgroep aanwezig is. Dit helpt je veel sneller zichtbaar te worden.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">
                            B2B marketing strategieën die werken
                        </h2>

                        <p className="text-primary/80 leading-relaxed mb-6">
                            Voor B2B zijn deze kanalen het meest effectief:
                        </p>

                        <ul className="space-y-4 my-8 pl-6 list-disc marker:text-accent">
                            <li><strong>LinkedIn marketing:</strong> Dé plek voor B2B. Ads, organic posts, groups, direct messaging. Veel leads groeien hier.</li>
                            <li><strong>Content marketing:</strong> Whitepapers, case studies, blogs, webinars. Hiermee toon je expertise en build je autoriteit.</li>
                            <li><strong>Email marketing:</strong> Segment je database, stuur relevant content. Nurture je leads lang genoeg totdat ze klaar zijn.</li>
                            <li><strong>Google Ads (Search):</strong> Voor zoekwoorden met commerciële intent. Veel lager volume dan B2C, maar hogere intentie.</li>
                            <li><strong>Events & networking:</strong> Trade shows, webinars, in-person events. Hier bouw je echte relaties.</li>
                            <li><strong>Account-based marketing:</strong> Voor grote deals: target je specifieke accounts met persoonlijke campaigns.</li>
                        </ul>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">
                            Zelf of uitbesteden? Een checklist
                        </h2>

                        <p className="text-primary/80 leading-relaxed mb-6">
                            Om je te helpen beslissen:
                        </p>

                        <p className="text-primary/80 leading-relaxed mb-6">
                            <strong>Kies ZELF doen als:</strong>
                        </p>
                        <ul className="space-y-4 my-8 pl-6 list-disc marker:text-accent">
                            <li>Je budget kleiner dan 3.000 euro per maand is</li>
                            <li>Je 15-20 uur per week beschikbaar hebt</li>
                            <li>Je doelgroep heel klein is (onder 500 potentiële klanten)</li>
                            <li>Je niche expertise hebt en inhoudelijk sterk bent</li>
                            <li>Je bereid bent 6-9 maanden geduld te hebben</li>
                        </ul>

                        <p className="text-primary/80 leading-relaxed mb-6">
                            <strong>Kies UITBESTEDEN als:</strong>
                        </p>
                        <ul className="space-y-4 my-8 pl-6 list-disc marker:text-accent">
                            <li>Je budget groter is dan 5.000 euro per maand</li>
                            <li>Je minder dan 5 uur per week kan besteden</li>
                            <li>Je snel groei en meer leads wilt</li>
                            <li>Je doelgroep groot is (meer dan 500 accounts)</li>
                            <li>Je huidge marketing stagneert</li>
                            <li>Je geen voldoende in-house expertise hebt</li>
                        </ul>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">
                            Hoe kies je de juiste B2B bureau?
                        </h2>

                        <p className="text-primary/80 leading-relaxed mb-6">
                            Als je besluit uit te besteden, kies dan een bureau met echte B2B ervaring. Veel agencies kunnen B2C goed, maar B2B is anders. Vraag altijd om case studies en referenties van gelijke bedrijven.
                        </p>

                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een goed B2B bureau geeft je maandelijks duidelijke rapportages: hoeveel leads, lead quality, cost per lead en pipeline impact. Ze leggen uit wat ze doen en waarom. Ze tonen je concrete getallen.
                        </p>

                        <p className="text-primary/80 leading-relaxed mb-6">
                            Pas op voor bureaus die snelle resultaten beloven. B2B marketing werkt langzamer. Verwacht eerste resultaten na 2-3 maanden en echt momentum na 6 maanden. Wees voorzichtig met bureaus die zeggen dat ze je leads kunnen verdubbelen in één maand.
                        </p>

                        <p className="text-primary/80 leading-relaxed mb-6">
                            Bij <a href="/diensten" className="text-accent underline hover:text-accent/80">onze B2B marketing service</a> focussen we op jouw KPI's: leads, kwaliteit en pipeline growth. We testen, optimaliseren en rapporteren maandelijks. We werken transparant en je ziet exact wat je geld doet.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">
                            Hoeveel tijd duurt het tot resultaten?
                        </h2>

                        <p className="text-primary/80 leading-relaxed mb-6">
                            B2B marketing is een marathon, geen sprint. Verwacht deze tijdlijn: maand 1-2, je ziet eerste activiteiten (content, ads). Maand 3-4, eerste leads beginnen in te stromen. Maand 5-6, je ziet echte momentum. Maand 6+, je hebt stabiel leadflow.
                        </p>

                        <p className="text-primary/80 leading-relaxed mb-6">
                            Dit verschilt per bedrijf. Als je smal niche hebt en kleine doelgroep, gaat het sneller. Als je breed markt bent met groot publiek, duurt het langer. Zorg dat je bureau deze realistische verwachtingen stelt.
                        </p>

                        <p className="text-primary/80 leading-relaxed mb-6">
                            Het belangrijkste: kies een bureau die systematisch werkt, data analyseert en voortdurend optimaliseert. Die geeft je beter en betere resultaten.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">
                            Heb je nog vragen over B2B marketing?
                        </h2>

                        <p className="text-primary/80 leading-relaxed mb-6">
                            B2B marketing is complex en elke bedrijf is anders. Wil je weten wat het beste voor jouw situatie is? <a href="/contact" className="text-accent underline hover:text-accent/80">Plan een gratis gesprek</a> met ons. We analyseren jouw situatie en geven je onafhankelijk advies.
                        </p>

                        <p className="text-primary/80 leading-relaxed mb-6">
                            We helpen je bepalen of zelf doen of uitbesteding beter is, welke kanalen het meest effectief zijn en hoe je snel groei bereikt. Laat ons van je horen.
                        </p>
                    </div>

                    {/* FAQ Section */}
                    <section className="mt-16">
                        <h2 className="text-3xl font-bold text-primary mb-8">
                            Veel gestelde vragen
                        </h2>

                        <div className="space-y-6 not-prose">
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-bold text-primary text-lg mb-3">
                                    Wanneer moet ik een B2B marketing bureau inhuren?
                                </h3>
                                <p className="text-primary/70 leading-relaxed">
                                    Huur een bureau in als je budget groter is dan 5.000 euro per maand, je geen 15-20 uur per week kan besteden of snel resultaten wilt. Een specialist haalt gemiddeld 40-60 procent betere resultaten dan zelfbeheer in B2B.
                                </p>
                            </div>

                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-bold text-primary text-lg mb-3">
                                    Hoeveel kost een B2B marketing bureau?
                                </h3>
                                <p className="text-primary/70 leading-relaxed">
                                    B2B bureaus rekenen 2.500 tot 10.000 euro per maand. Dit hangt af van je omvang, kanalen en campagnes. Veel bureaus werken op uurbasis (75-150 euro per uur) of vaste maandtarieven. Dit verdien je terug door meer en betere leads.
                                </p>
                            </div>

                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-bold text-primary text-lg mb-3">
                                    Kan ik B2B marketing zelf doen zonder ervaring?
                                </h3>
                                <p className="text-primary/70 leading-relaxed">
                                    Ja, maar het vereist tijd en geduld. Je hebt kennis nodig van LinkedIn, content marketing en email. Voor klein budget en kleine doelgroep kan het werken. Voor groter potentieel is professionele hulp beter.
                                </p>
                            </div>

                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-bold text-primary text-lg mb-3">
                                    Wat is het verschil tussen B2B en B2C marketing?
                                </h3>
                                <p className="text-primary/70 leading-relaxed">
                                    B2B marketing is gericht op kleine, specifieke doelgroepen met lange sales cycles. B2C is op schaal gericht met snelle conversies. B2B vereist LinkedIn, content, relaties. B2C gebruikt Facebook ads, retargeting, hoge volumes. Zorg dat je bureau B2B kent.
                                </p>
                            </div>

                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-bold text-primary text-lg mb-3">
                                    Hoe lang tot ik resultaten zie?
                                </h3>
                                <p className="text-primary/70 leading-relaxed">
                                    B2B marketing werkt langzaam. Verwacht eerste leads na 2-3 maanden. Echt momentum krijg je na 6-9 maanden. Dit is normaal. Een bureau die zegt sneller resultaten te leveren, is voorzichtig.
                                </p>
                            </div>

                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-bold text-primary text-lg mb-3">
                                    Wat doet een B2B bureau anders dan ik zelf?
                                </h3>
                                <p className="text-primary/70 leading-relaxed">
                                    Een bureau heeft ervaring met B2B campagnes, knows LinkedIn algoritmes, schrijft overtuigende copy en bouwt geïntegreerde strategieën op. Ze analyseren data scherp, segmenteren klanten en testen voortdurend. Dit leidt tot veel meer en betere leads.
                                </p>
                            </div>
                        </div>
                    </section>
                </div>
            </article>

            {/* Bottom CTA */}
            <section className="w-full pb-32 px-6">
                <div className="max-w-4xl mx-auto bg-primary rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
                    <h2 className="relative z-10 font-drama italic text-background text-3xl sm:text-4xl md:text-5xl mb-6">Klaar om jouw B2B marketing op gang te krijgen?</h2>
                    <p className="relative z-10 font-sans text-background/70 text-lg mb-10 max-w-xl mx-auto">
                        Of je nu zelf begint of een bureau inhuurt, wij helpen je graag. Plan een gratis gesprek. We kijken naar jouw situatie, doelen en bepalen wat het beste voor jou werkt.
                    </p>
                    <Link to="/contact" className="relative z-10 btn-magnetic inline-flex items-center justify-center bg-accent text-background font-sans font-bold text-lg px-10 py-4 rounded-[2rem] hover:bg-accent/90 transition-colors">
                        Plan een gesprek
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
