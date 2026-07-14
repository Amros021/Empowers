import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ChevronRight, User } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function BlogPostConsentModeV2VeranderingenMarketeers() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen selection:bg-accent/30 selection:text-dark flex flex-col bg-background">
            <Helmet>
                <title>Consent mode v2: wat veranderde er voor marketeers? | Empowers</title>
                <meta name="description" content="Consent mode v2 is sinds maart 2024 verplicht voor adverteerders die zich op de EER richten. Lees wat er veranderde en hoe je conversies blijft meten." />
                <link rel="canonical" href="https://www.empowers.nl/blogs/tracking/consent-mode-v2-veranderingen-marketeers" />
                <meta property="og:title" content="Consent mode v2: wat veranderde er voor marketeers? | Empowers" />
                <meta property="og:description" content="Consent mode v2 is sinds maart 2024 verplicht voor adverteerders die zich op de EER richten. Lees wat er veranderde en hoe je conversies blijft meten." />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://www.empowers.nl/blogs/tracking/consent-mode-v2-veranderingen-marketeers" />
                <meta property="og:image" content="https://www.empowers.nl/images/blogs/consent-mode-v2-veranderingen-marketeers.jpg" />
                <meta property="article:published_time" content="2026-07-13T16:00:00+02:00" />
                <meta property="article:author" content="Empowers" />
                <meta property="article:section" content="Tracking" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Consent mode v2: wat veranderde er voor marketeers? | Empowers" />
                <meta name="twitter:description" content="Consent mode v2 is sinds maart 2024 verplicht voor adverteerders die zich op de EER richten. Lees wat er veranderde en hoe je conversies blijft meten." />
                <script type="application/ld+json">{JSON.stringify({
                    "@context": "https://schema.org",
                    "@graph": [
                        {
                            "@type": "Article",
                            "headline": "Consent mode v2: wat veranderde er voor marketeers?",
                            "image": "https://www.empowers.nl/images/blogs/consent-mode-v2-veranderingen-marketeers.jpg",
                            "description": "Consent mode v2 is sinds maart 2024 verplicht voor adverteerders die zich op de EER richten. Lees wat er veranderde en hoe je conversies blijft meten.",
                            "author": { "@type": "Organization", "name": "Empowers" },
                            "publisher": { "@type": "Organization", "name": "Empowers", "url": "https://www.empowers.nl" },
                            "datePublished": "2026-07-13T16:00:00+02:00",
                            "dateModified": "2026-07-13T16:00:00+02:00",
                            "url": "https://www.empowers.nl/blogs/tracking/consent-mode-v2-veranderingen-marketeers"
                        },
                        {
                            "@type": "BreadcrumbList",
                            "itemListElement": [
                                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.empowers.nl" },
                                { "@type": "ListItem", "position": 2, "name": "Nieuws", "item": "https://www.empowers.nl/nieuws" },
                                { "@type": "ListItem", "position": 3, "name": "Tracking", "item": "https://www.empowers.nl/blogs/tracking" },
                                { "@type": "ListItem", "position": 4, "name": "Consent mode v2: wat veranderde er voor marketeers?", "item": "https://www.empowers.nl/blogs/tracking/consent-mode-v2-veranderingen-marketeers" }
                            ]
                        },
                        {
                            "@type": "FAQPage",
                            "mainEntity": [
                                { "@type": "Question", "name": "Is consent mode v2 verplicht?", "acceptedAnswer": { "@type": "Answer", "text": "Ja, voor adverteerders die Google Ads gebruiken voor bezoekers uit de Europese Economische Ruimte en het Verenigd Koninkrijk. Sinds maart 2024 vereist Google geldige v2-signalen voor remarketing en gepersonaliseerde advertenties. Je website blijft technisch gewoon werken zonder, maar die advertentiefuncties vallen dan stil." } },
                                { "@type": "Question", "name": "Werkt consent mode v2 ook voor GA4?", "acceptedAnswer": { "@type": "Answer", "text": "Ja. GA4 leest het signaal analytics_storage om te bepalen of er analytics-cookies geplaatst mogen worden. Gebruik je de advanced variant, dan kan GA4 het gedrag van bezoekers die weigeren deels modelleren. Zo houd je een completer beeld van je verkeer, ook zonder cookies van elke bezoeker." } },
                                { "@type": "Question", "name": "Heb ik naast consent mode nog een cookiebanner nodig?", "acceptedAnswer": { "@type": "Answer", "text": "Ja. Consent mode vervangt je cookiebanner niet, het vertaalt alleen de keuze die een bezoeker in die banner maakt naar signalen voor Google. De toestemming zelf moet je nog steeds netjes vragen via een banner die aan de AVG voldoet, het liefst via een door Google gecertificeerde CMP." } },
                                { "@type": "Question", "name": "Wat zijn gemodelleerde conversies?", "acceptedAnswer": { "@type": "Answer", "text": "Gemodelleerde conversies zijn een schatting van conversies die je niet direct kunt meten omdat de bezoeker geen toestemming gaf. Google berekent ze op basis van cookieloze pings en het gedrag van bezoekers die wel akkoord gingen. Ze verschijnen gewoon tussen je normale conversies in Google Ads." } },
                                { "@type": "Question", "name": "Geldt consent mode v2 ook buiten Europa?", "acceptedAnswer": { "@type": "Answer", "text": "De verplichting van Google richt zich op verkeer uit de Europese Economische Ruimte en het Verenigd Koninkrijk. Adverteer je alleen op andere markten, dan hoef je niets aan te passen. Richt je je ook maar deels op Europese bezoekers, dan heb je de v2-signalen nodig om daar volledig te kunnen adverteren." } },
                                { "@type": "Question", "name": "Welke cookiebanner werkt met consent mode v2?", "acceptedAnswer": { "@type": "Answer", "text": "Kies een consent management platform dat door Google gecertificeerd is, zoals Cookiebot of Usercentrics. Die banners sturen de v2-signalen automatisch mee zodra een bezoeker een keuze maakt. Een zelfgebouwde banner kan ook, maar dan moet je de signalen zelf goed doorgeven via Google Tag Manager." } }
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
                        <Link to="/blogs/tracking" className="hover:text-accent transition-colors">Tracking</Link>
                        <ChevronRight className="w-3 h-3" />
                        <span className="text-primary truncate">Consent mode v2</span>
                    </nav>

                    {/* Header */}
                    <header className="mb-16">
                        <div className="inline-block px-3 py-1 bg-accent/10 text-accent font-mono text-xs uppercase tracking-widest rounded-full mb-6">
                            Tracking
                        </div>
                        <h1 className="font-sans font-bold text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight mb-8">
                            Consent mode v2: wat veranderde er voor marketeers?
                        </h1>

                        <div className="flex flex-wrap items-center gap-6 text-sm font-sans text-primary/60 border-y border-primary/10 py-6">
                            <div className="flex items-center gap-2">
                                <User className="w-4 h-4" />
                                <span>Empowers Redactie</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>13 juli 2026</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>8 minuten leestijd</span>
                            </div>
                        </div>
                    </header>

                    {/* Featured Image */}
                    <figure className="w-full h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden mb-16 relative bg-primary">
                        <div className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-overlay" style={{backgroundImage: "url('/images/blogs/consent-mode-v2-veranderingen-marketeers.jpg')"}}></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </figure>

                    {/* Content */}
                    <div className="prose prose-lg prose-headings:font-sans prose-headings:font-bold prose-headings:text-primary prose-p:font-sans prose-p:text-primary/80 prose-p:leading-relaxed max-w-none">
                        <p className="text-xl md:text-2xl font-medium leading-relaxed mb-10 text-primary">
                            Consent mode v2 is de versie van het toestemmingssysteem van Google die sinds maart 2024 verplicht is voor adverteerders die zich richten op de Europese Economische Ruimte. Het grootste verschil met de oude versie: twee nieuwe signalen, ad_user_data en ad_personalization. Zonder die signalen stopt remarketing in Google Ads en wordt je conversiemeting een stuk dunner.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat is consent mode v2 precies?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Consent mode is de taal waarmee je cookiebanner met de tags van Google praat. Klikt een bezoeker op akkoord of op weigeren, dan geeft consent mode die keuze door aan Google Ads en GA4. De tags weten daardoor wat ze wel en niet mogen doen.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De eerste versie bestond al sinds 2020 en kende twee signalen: ad_storage voor advertentiecookies en analytics_storage voor statistiekcookies. Versie 2 voegt daar ad_user_data en ad_personalization aan toe. Het eerste signaal bepaalt of gegevens van de bezoeker naar Google mogen voor advertentiedoeleinden. Het tweede bepaalt of die bezoeker gepersonaliseerde advertenties mag zien, waaronder remarketing.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Belangrijk om te weten: consent mode vervangt je cookiebanner niet. De banner vraagt de toestemming, consent mode vertaalt het antwoord. Zonder banner geen keuze, en zonder consent mode komt die keuze nooit bij Google aan.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Waarom voerde Google consent mode v2 in?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De directe aanleiding was de Digital Markets Act, de Europese wet die grote techplatformen strengere regels oplegt. Google valt daar als poortwachter onder en mag persoonsgegevens van Europese gebruikers alleen nog voor advertenties verwerken met aantoonbare toestemming.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Google legde die bewijslast bij de adverteerder neer. Sinds maart 2024 accepteert het platform voor verkeer uit de EER en het Verenigd Koninkrijk alleen nog advertentiedata die vergezeld gaat van geldige v2-signalen. Geen signaal betekent voor Google hetzelfde als geen toestemming.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Voor jou als marketeer verschoof er daarmee iets wezenlijks. Toestemming was eerst vooral een juridische kwestie tussen jou en je websitebezoeker. Nu is het ook een technische voorwaarde om de advertentiesystemen van Google volledig te kunnen gebruiken.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat merk je ervan als je consent mode v2 niet gebruikt?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Het meest zichtbare gevolg zit in remarketing. Zonder geldige v2-signalen vullen je doelgroeplijsten zich niet meer met bezoekers uit de EER. In accounts die na maart 2024 zonder die signalen doordraaiden, zagen we lijsten binnen enkele weken leeglopen terwijl het websiteverkeer gewoon op peil bleef.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Ook je conversiemeting lijdt eronder. Conversies van Europese bezoekers komen onvolledig of helemaal niet meer binnen in Google Ads. Slimme biedstrategieen krijgen daardoor minder data om op te sturen, en dat merk je uiteindelijk in je resultaten.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Het venijnige is dat je account geen foutmelding geeft. Alles lijkt te werken. Pas als je de dalende doelgroepaantallen of achterblijvende conversies opmerkt, ga je zoeken. Controleer dus liever vandaag of je signalen goed staan dan over drie maanden.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat is het verschil tussen de basic en advanced variant?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Consent mode v2 kent twee smaken. Bij de basic variant laden de Google-tags pas nadat een bezoeker toestemming geeft. Weigert iemand, dan wordt er helemaal niets naar Google gestuurd. Dit is de meest terughoudende opzet, maar je verliest elk zicht op de groep die weigert.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Bij de advanced variant laden de tags altijd, maar zonder cookies als toestemming ontbreekt. Ze sturen dan cookieloze pings naar Google: anonieme seintjes zonder persoonsgegevens. Google gebruikt die pings om conversies te modelleren, zodat je toch een schatting krijgt van wat de weigeraars deden.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Welke variant je kiest hangt af van hoe je organisatie met privacy omgaat. De advanced variant geeft je meer data terug, maar niet elke jurist is even enthousiast over pings voordat iemand een keuze maakte. Leg de afweging voor aan degene die binnen jouw bedrijf over privacy gaat.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe stel je consent mode v2 in?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De makkelijkste route loopt via een consent management platform dat door Google gecertificeerd is, zoals Cookiebot of Usercentrics. Zo een CMP toont de banner, slaat de keuze op en stuurt de vier signalen automatisch mee. Voor de meeste websites is dit binnen een dag geregeld.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Werk je met Google Tag Manager, dan controleer je daar of alles klopt. Open de toestemmingsinstellingen per tag en check of je tags op de juiste signalen wachten. Nieuw met Tag Manager? Lees dan eerst onze <Link to="/blogs/tracking/google-tag-manager-beginners" className="text-accent hover:underline">handleiding Google Tag Manager voor beginners</Link>.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Test daarna altijd zelf. Open je website in de voorbeeldmodus van Tag Manager en bekijk per tag welke toestemmingsstatus er binnenkomt. Klik zowel akkoord als weigeren aan en controleer of de signalen meebewegen. Vijf minuten testen voorkomt maanden meten met gaten.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat betekent consent mode v2 voor je cijfers?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Wees eerlijk naar jezelf en je collega's: je meet sinds consent mode v2 niet meer alles. Een deel van je bezoekers weigert, en dat deel verdwijnt uit je directe meting. Je rapporten tonen daardoor minder conversies dan er werkelijk plaatsvonden.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Gemodelleerde conversies vangen een deel van dat gat op als je de advanced variant gebruikt. Google vult je cijfers aan met schattingen op basis van de bezoekers die wel toestemming gaven. Die schattingen zijn bruikbaar om op te sturen, maar het blijven schattingen.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Kijk daarom vooral naar trends in plaats van absolute aantallen. En wil je je marketingbudget beoordelen zonder afhankelijk te zijn van cookies, verdiep je dan eens in <Link to="/blogs/tracking/marketing-mix-modeling-gebruik" className="text-accent hover:underline">marketing mix modeling</Link>. Die methode kijkt naar het grotere plaatje en heeft geen last van weigerende bezoekers.
                        </p>

                        <p className="text-primary/80 leading-relaxed mb-6">
                            Met consent mode v2 goed ingesteld blijf je adverteren, remarketen en meten binnen de Europese regels. Twijfel je of jouw signalen goed staan, of wil je meer rendement uit <Link to="/google-ads" className="text-accent hover:underline">Google Ads</Link>? Plan een gratis gesprek via <Link to="/contact" className="text-accent hover:underline">empowers.nl/contact</Link>.
                        </p>

                        <hr className="my-16 border-primary/10" />

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Veelgestelde vragen over consent mode v2</h2>

                        <div className="space-y-6 not-prose">
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Is consent mode v2 verplicht?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Ja, voor adverteerders die Google Ads gebruiken voor bezoekers uit de Europese Economische Ruimte en het Verenigd Koninkrijk. Sinds maart 2024 vereist Google geldige v2-signalen voor remarketing en gepersonaliseerde advertenties. Je website blijft technisch gewoon werken zonder, maar die advertentiefuncties vallen dan stil.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Werkt consent mode v2 ook voor GA4?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Ja. GA4 leest het signaal analytics_storage om te bepalen of er analytics-cookies geplaatst mogen worden. Gebruik je de advanced variant, dan kan GA4 het gedrag van bezoekers die weigeren deels modelleren. Zo houd je een completer beeld van je verkeer, ook zonder cookies van elke bezoeker.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Heb ik naast consent mode nog een cookiebanner nodig?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Ja. Consent mode vervangt je cookiebanner niet, het vertaalt alleen de keuze die een bezoeker in die banner maakt naar signalen voor Google. De toestemming zelf moet je nog steeds netjes vragen via een banner die aan de AVG voldoet, het liefst via een door Google gecertificeerde CMP.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat zijn gemodelleerde conversies?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Gemodelleerde conversies zijn een schatting van conversies die je niet direct kunt meten omdat de bezoeker geen toestemming gaf. Google berekent ze op basis van cookieloze pings en het gedrag van bezoekers die wel akkoord gingen. Ze verschijnen gewoon tussen je normale conversies in Google Ads.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Geldt consent mode v2 ook buiten Europa?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    De verplichting van Google richt zich op verkeer uit de Europese Economische Ruimte en het Verenigd Koninkrijk. Adverteer je alleen op andere markten, dan hoef je niets aan te passen. Richt je je ook maar deels op Europese bezoekers, dan heb je de v2-signalen nodig om daar volledig te kunnen adverteren.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Welke cookiebanner werkt met consent mode v2?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Kies een consent management platform dat door Google gecertificeerd is, zoals Cookiebot of Usercentrics. Die banners sturen de v2-signalen automatisch mee zodra een bezoeker een keuze maakt. Een zelfgebouwde banner kan ook, maar dan moet je de signalen zelf goed doorgeven via Google Tag Manager.
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
                    <h2 className="relative z-10 font-drama italic text-background text-3xl sm:text-4xl md:text-5xl mb-6">Zeker weten dat jouw meting aan de regels voldoet?</h2>
                    <p className="relative z-10 font-sans text-background/70 text-lg mb-10 max-w-xl mx-auto">
                        Wij zetten consent mode v2 goed voor je op, zodat je blijft remarketen en meten zonder juridisch gedoe.
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
