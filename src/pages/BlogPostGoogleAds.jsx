import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ChevronRight, User } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function BlogPostGoogleAds() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen selection:bg-accent/30 selection:text-dark flex flex-col bg-background">
            <Helmet>
                <title>Google Ads voor MKB: zo stel je een campagne in die werkt | Empowers</title>
                <meta name="description" content="Google Ads voor MKB werkt als je het goed instelt. Lees wat het kost, hoe je een campagne opzet en wanneer je een specialist inschakelt." />
                <link rel="canonical" href="https://www.empowers.nl/blogs/google-ads/google-ads-voor-mkb-campagne-instellen" />
                <meta property="og:title" content="Google Ads voor MKB: zo stel je een campagne in die werkt | Empowers" />
                <meta property="og:description" content="Google Ads voor MKB werkt als je het goed instelt. Lees wat het kost, hoe je een campagne opzet en wanneer je een specialist inschakelt." />
                <meta property="og:url" content="https://www.empowers.nl/blogs/google-ads/google-ads-voor-mkb-campagne-instellen" />
                <meta property="og:type" content="article" />
                <meta property="og:image" content="https://www.empowers.nl/images/blogs/google-ads-campagne.jpg" />
                <script type="application/ld+json">{JSON.stringify({
                    "@context": "https://schema.org",
                    "@graph": [
                        {
                            "@type": "Article",
                            "headline": "Google Ads voor MKB: zo stel je een campagne in die werkt",
                            "image": "https://www.empowers.nl/images/blogs/google-ads-campagne.jpg",
                            "description": "Google Ads voor MKB werkt als je het goed instelt. Lees wat het kost, hoe je een campagne opzet en wanneer je een specialist inschakelt.",
                            "author": { "@type": "Person", "name": "Amir Farahani" },
                            "publisher": { "@type": "Organization", "name": "Empowers", "url": "https://www.empowers.nl" },
                            "datePublished": "2026-03-24T00:00:00+01:00",
                            "dateModified": "2026-03-24T00:00:00+01:00",
                            "url": "https://www.empowers.nl/blogs/google-ads/google-ads-voor-mkb-campagne-instellen"
                        },
                        {
                            "@type": "FAQPage",
                            "mainEntity": [
                                { "@type": "Question", "name": "Hoeveel budget heb je nodig voor Google Ads?", "acceptedAnswer": { "@type": "Answer", "text": "De meeste MKB-bedrijven starten met 500 tot 1500 euro per maand aan advertentiebudget. Daarbovenop komen de beheerkosten van een specialist. Hoe competitiever je branche, hoe hoger de klikprijzen. In niches zoals juridisch advies of hypotheken betaal je soms 5 tot 15 euro per klik." } },
                                { "@type": "Question", "name": "Wat is het verschil tussen zoekadvertenties en Performance Max?", "acceptedAnswer": { "@type": "Answer", "text": "Zoekadvertenties verschijnen als mensen actief zoeken op Google. Je kiest zelf op welke zoekwoorden je biedt. Performance Max combineert meerdere kanalen automatisch, waaronder zoeken, YouTube en Gmail. Voor MKB raden we vaak aan om eerst met zoekadvertenties te beginnen, zodat je meer controle hebt over je resultaten." } },
                                { "@type": "Question", "name": "Kan ik Google Ads zelf beheren?", "acceptedAnswer": { "@type": "Answer", "text": "Ja, maar het vraagt tijd en kennis. Een slecht ingestelde campagne verbrandt je budget aan irrelevante klikken. Als je niet dagelijks de data bijhoudt en bijstuurt, betaal je te veel per conversie. Veel MKB-bedrijven starten zelf en schakelen na een paar maanden een specialist in als ze zien dat de resultaten tegenvallen." } },
                                { "@type": "Question", "name": "Wat is een goede ROAS voor Google Ads?", "acceptedAnswer": { "@type": "Answer", "text": "Een ROAS van 3 betekent dat je voor elke euro advertentiebudget drie euro omzet genereert. Voor webshops is een ROAS van 3 tot 5 gezond. Dienstverleners kijken vaker naar kosten per lead. Een goed ingestelde campagne haalt in de eerste maanden gemiddeld een ROAS van 3 tot 5." } },
                                { "@type": "Question", "name": "Hoe lang duurt het voordat Google Ads resultaat geeft?", "acceptedAnswer": { "@type": "Answer", "text": "Google Ads geeft sneller resultaat dan SEO. Binnen enkele dagen na het starten zie je al klikken en conversies. De eerste twee weken zijn het leerproces voor Google's algoritme. Na 4 tot 8 weken heb je genoeg data om campagnes structureel bij te sturen." } },
                                { "@type": "Question", "name": "Wat zijn negatieve zoekwoorden en waarom zijn ze belangrijk?", "acceptedAnswer": { "@type": "Answer", "text": "Negatieve zoekwoorden zijn zoektermen waarbij je advertentie niet mag verschijnen. Als je fietsen verkoopt maar geen reparaties doet, voeg je 'reparatie' toe als negatief zoekwoord. Zonder een goede negatieve lijst betaal je voor klikken van mensen die nooit klant worden." } },
                                { "@type": "Question", "name": "Wat is Smart Bidding bij Google Ads?", "acceptedAnswer": { "@type": "Answer", "text": "Smart Bidding is een geautomatiseerde biedstrategie waarbij Google het bod per veiling aanpast op basis van de kans op conversie. Varianten zijn onder andere Doel-CPA en Doel-ROAS. Smart Bidding werkt pas goed als je campagne genoeg conversiedata heeft, minimaal 30 tot 50 conversies per maand." } }
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
                        { "@type": "ListItem", "position": 3, "name": "Google Ads", "item": "https://www.empowers.nl/blogs/google-ads" },
                        { "@type": "ListItem", "position": 4, "name": "Google Ads voor MKB: zo stel je een campagne in die werkt", "item": "https://www.empowers.nl/blogs/google-ads/google-ads-voor-mkb-campagne-instellen" }
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
                        <Link to="/blogs/google-ads" className="hover:text-accent transition-colors">Google Ads</Link>
                        <ChevronRight className="w-3 h-3" />
                        <span className="text-primary truncate">Google Ads voor MKB</span>
                    </nav>

                    {/* Header */}
                    <header className="mb-16">
                        <div className="inline-block px-3 py-1 bg-accent/10 text-accent font-mono text-xs uppercase tracking-widest rounded-full mb-6">
                            Google Ads
                        </div>
                        <h1 className="font-sans font-bold text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight mb-8">
                            Google Ads voor MKB: zo stel je een campagne in die echt werkt
                        </h1>

                        <div className="flex flex-wrap items-center gap-6 text-sm font-sans text-primary/60 border-y border-primary/10 py-6">
                            <div className="flex items-center gap-2">
                                <User className="w-4 h-4" />
                                <span>Empowers Redactie</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>24 maart 2026</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>7 minuten leestijd</span>
                            </div>
                        </div>
                    </header>

                    {/* Featured Image */}
                    <figure className="w-full h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden mb-16 relative bg-primary">
                        <div className="absolute inset-0 bg-[url('/images/blogs/google-ads-campagne.jpg')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </figure>

                    {/* Content */}
                    <div className="prose prose-lg prose-headings:font-sans prose-headings:font-bold prose-headings:text-primary prose-p:font-sans prose-p:text-primary/80 prose-p:leading-relaxed max-w-none">
                        <p className="text-xl md:text-2xl font-medium leading-relaxed mb-10 text-primary">
                            Google Ads kost wat je er zelf inzet. Er is geen vast maandbedrag. Veel MKB-bedrijven beginnen met 500 tot 1500 euro per maand aan advertentiebudget, plus de kosten van een specialist. Wat je terugverdient hangt af van je branche, je marges en hoe goed de campagnes zijn ingesteld. Een slecht ingestelde campagne verbrandt budget. Een goed ingestelde haalt gemiddeld een ROAS van 3 tot 5.
                        </p>

                        <h2 className="text-3xl mt-16 mb-6">Hoe werkt Google Ads voor een MKB-bedrijf?</h2>
                        <p>
                            Google Ads werkt via een veilingsysteem. Elke keer dat iemand iets zoekt, berekent Google welke advertentie op welke positie verschijnt. Je betaalt niet voor de weergave, alleen voor de klik. De prijs per klik hangt af van hoe concurrerend het zoekwoord is en hoe relevant Google jouw advertentie vindt.
                        </p>
                        <p>
                            Dat laatste is belangrijk. Google beloont advertenties die goed aansluiten bij de zoekopdracht met een hogere kwaliteitsscore. Een hoge kwaliteitsscore betekent een lagere klikprijs bij een betere positie. Het loont dus om advertenties scherp te schrijven en de landingspagina goed af te stemmen op wat mensen zoeken.
                        </p>

                        <h2 className="text-3xl mt-16 mb-6">Welk type campagne past bij jouw bedrijf?</h2>
                        <p>
                            De meeste MKB-bedrijven beginnen met zoekadvertenties. Die verschijnen als mensen actief zoeken op een zoekwoord dat jij hebt ingesteld. Je betaalt alleen als iemand klikt. Dat maakt het meetbaar en voorspelbaar.
                        </p>
                        <p>
                            Performance Max is een campagnetype dat Google automatisch laat bepalen waar jouw advertentie verschijnt: in zoekresultaten, op YouTube, in Gmail of op websites in het Google Display Netwerk. Het werkt goed als je genoeg conversiedata hebt. Voor startende MKB-bedrijven raden we af om hiermee te beginnen, omdat je minder zicht hebt op waar je budget naartoe gaat.
                        </p>
                        <p>
                            Bij onze klanten zien we dat een heldere zoekwoordstrategie met strakke advertentiegroepen structureel beter presteert dan een brede Performance Max campagne zonder historische data.
                        </p>

                        <h2 className="text-3xl mt-16 mb-6">Wat zijn de grootste fouten bij Google Ads?</h2>
                        <p>
                            De meest gemaakte fout is een te breed zoekwoordenlijst zonder negatieve zoekwoorden. Als je "schoenen" verkoopt, wil je niet verschijnen op "schoenen repareren" of "tweedehands schoenen". Zonder negatieve zoekwoorden betaal je voor klikken van mensen die nooit klant worden.
                        </p>
                        <p>
                            Een andere veelvoorkomende fout: alle zoekwoorden in één advertentiegroep gooien. Een campagne die één boodschap heeft voor tien verschillende zoekwoorden, scoort lager dan campagnes met specifieke advertenties per zoekwoordgroep. De kwaliteitsscore daalt, de klikprijs stijgt.
                        </p>
                        <p>
                            En tot slot: advertentiebudget instellen zonder conversietracking. Als je niet bijhoudt welke klikken leiden tot aankopen of aanvragen, stuur je campagnes bij op aannames in plaats van feiten. Hoe <Link to="/blogs/tracking/marketing-tracking-conversies-meten" className="text-accent hover:underline">goede conversietracking werkt</Link> lees je in ons trackingblog.
                        </p>

                        <h2 className="text-3xl mt-16 mb-6">Wanneer schakel je een specialist in voor Google Ads?</h2>
                        <p>
                            Als je minder dan 2 uur per week beschikbaar hebt om campagnes bij te sturen, loont het om een specialist in te schakelen. Google Ads vereist regelmatige optimalisatie: zoekwoorden bijsturen, biedingen aanpassen, advertentieteksten testen en data analyseren.
                        </p>
                        <p>
                            Een specialist kost geld, maar een slecht beheerde campagne kost je meer. We zien regelmatig MKB-accounts binnenkomen waarbij 40 tot 60% van het budget naar irrelevante klikken gaat, simpelweg door ontbrekende negatieve zoekwoorden en slechte campagnestructuur.
                        </p>
                        <p>
                            Benieuwd wat jouw campagnes nu opleveren? Bekijk onze <Link to="/google-ads" className="text-accent hover:underline">Google Ads dienst</Link> of <Link to="/contact" className="text-accent hover:underline">plan een gratis gesprek</Link>.
                        </p>

                        <hr className="my-16 border-primary/10" />

                        <h2 className="text-3xl mb-8">Veelgestelde vragen over Google Ads voor MKB</h2>

                        <div className="space-y-8">
                            <div>
                                <h3 className="text-xl font-bold mb-2">Hoeveel budget heb je nodig voor Google Ads?</h3>
                                <p className="text-base text-primary/70 mt-0">
                                    De meeste MKB-bedrijven starten met 500 tot 1500 euro per maand aan advertentiebudget. Daarbovenop komen de beheerkosten van een specialist. Hoe competitiever je branche, hoe hoger de klikprijzen. In niches zoals juridisch advies of hypotheken betaal je soms 5 tot 15 euro per klik.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2">Wat is het verschil tussen zoekadvertenties en Performance Max?</h3>
                                <p className="text-base text-primary/70 mt-0">
                                    Zoekadvertenties verschijnen als mensen actief zoeken op Google. Je kiest zelf op welke zoekwoorden je biedt. Performance Max combineert meerdere kanalen automatisch. Voor MKB raden we aan om eerst met zoekadvertenties te beginnen, zodat je meer controle hebt over je resultaten.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2">Kan ik Google Ads zelf beheren?</h3>
                                <p className="text-base text-primary/70 mt-0">
                                    Ja, maar het vraagt tijd en kennis. Een slecht ingestelde campagne verbrandt je budget aan irrelevante klikken. Als je niet dagelijks de data bijhoudt en bijstuurt, betaal je te veel per conversie. Veel MKB-bedrijven starten zelf en schakelen later een specialist in.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2">Wat is een goede ROAS voor Google Ads?</h3>
                                <p className="text-base text-primary/70 mt-0">
                                    Een ROAS van 3 betekent dat je voor elke euro advertentiebudget drie euro omzet genereert. Voor webshops is een ROAS van 3 tot 5 gezond. Dienstverleners kijken vaker naar kosten per lead. Een goed ingestelde campagne haalt in de eerste maanden gemiddeld een ROAS van 3 tot 5.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2">Hoe lang duurt het voordat Google Ads resultaat geeft?</h3>
                                <p className="text-base text-primary/70 mt-0">
                                    Google Ads geeft sneller resultaat dan SEO. Binnen enkele dagen zie je al klikken en conversies. De eerste twee weken zijn het leerproces voor Google's algoritme. Na 4 tot 8 weken heb je genoeg data om campagnes structureel bij te sturen.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2">Wat zijn negatieve zoekwoorden en waarom zijn ze belangrijk?</h3>
                                <p className="text-base text-primary/70 mt-0">
                                    Negatieve zoekwoorden zijn zoektermen waarbij je advertentie niet mag verschijnen. Zonder een goede negatieve lijst betaal je voor klikken van mensen die nooit klant worden. Dit is een van de snelste manieren om verspild budget te verlagen.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2">Wat is Smart Bidding bij Google Ads?</h3>
                                <p className="text-base text-primary/70 mt-0">
                                    Smart Bidding is een geautomatiseerde biedstrategie waarbij Google het bod per veiling aanpast op basis van de kans op conversie. Het werkt pas goed als je campagne genoeg data heeft, minimaal 30 tot 50 conversies per maand.
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
                    <h2 className="relative z-10 font-drama italic text-background text-3xl sm:text-4xl md:text-5xl mb-6">Meer uit je Google Ads halen?</h2>
                    <p className="relative z-10 font-sans text-background/70 text-lg mb-10 max-w-xl mx-auto">
                        Wil je weten wat jouw campagnes nu kosten per lead of per aankoop? We doen een gratis audit en laten je zien waar het beter kan.
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
