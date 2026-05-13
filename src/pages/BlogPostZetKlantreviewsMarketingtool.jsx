import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ChevronRight, User } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function BlogPostZetKlantreviewsMarketingtool() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen selection:bg-accent/30 selection:text-dark flex flex-col bg-background">
            <Helmet>
                <title>Hoe zet je klantreviews in als marketingtool? | Empowers</title>
                <meta name="description" content="Reviews zijn meer dan sterren onder je productpagina. Slim ingezet versterken ze je rankings, je advertenties en je conversiepercentage. Zo pak je dat aan." />
                <link rel="canonical" href="https://www.empowers.nl/blogs/algemeen/zet-klantreviews-marketingtool" />
                <meta property="og:title" content="Hoe zet je klantreviews in als marketingtool?" />
                <meta property="og:description" content="Reviews verzamelen, uitvragen en hergebruiken zodat ze écht omzet opleveren." />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://www.empowers.nl/blogs/algemeen/zet-klantreviews-marketingtool" />
                <meta property="og:image" content="https://www.empowers.nl/images/blogs/zet-klantreviews-marketingtool.jpg" />
                <meta property="article:published_time" content="2026-05-13" />
                <meta property="article:author" content="Empowers" />
                <meta property="article:section" content="Algemeen" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Hoe zet je klantreviews in als marketingtool?" />
                <meta name="twitter:description" content="Het complete plan om reviews te laten werken voor je marketing." />

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Article",
                        "headline": "Hoe zet je klantreviews in als marketingtool?",
                        "description": "Reviews zijn meer dan sterren onder je productpagina. Slim ingezet versterken ze je rankings, je advertenties en je conversiepercentage. Zo pak je dat aan.",
                        "image": "https://www.empowers.nl/images/blogs/zet-klantreviews-marketingtool.jpg",
                        "datePublished": "2026-05-13T13:00:00+02:00",
                        "author": { "@type": "Organization", "name": "Empowers" },
                        "publisher": {
                            "@type": "Organization", "name": "Empowers", "url": "https://www.empowers.nl",
                            "logo": { "@type": "ImageObject", "url": "https://www.empowers.nl/empowers-logo-color.svg" }
                        },
                        "mainEntity": {
                            "@type": "FAQPage",
                            "mainEntity": [
                                {
                                    "@type": "Question",
                                    "name": "Waarom zijn klantreviews zo belangrijk voor marketing?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Reviews geven sociale bewijskracht. Wie twijfelt tussen jou en een concurrent leest reviews om de keuze te onderbouwen. Daarnaast wegen reviews zwaar in Google's lokale rankings, helpen sterren in zoekresultaten de doorklikratio, en geven AI-zoekmachines reviews als signaal dat je betrouwbaar bent. Eén positieve review met inhoud doet meer voor je marketing dan tien algemene claims op je website."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Op welke platforms moet ik reviews verzamelen?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Begin bij Google Reviews via je Google Business Profile. Dat is de plek waar de meeste mensen je eerst zien. Voor webshops voegt Trustpilot of Kiyoh waarde toe omdat ze zijn opgenomen in Google's rich results. Voor branche-specifieke bedrijven helpen platforms zoals Werkspot, Klantenvertellen, Independer of branche-fora. Concentreer je op één hoofdplatform en eventueel één branche-platform, niet vijftien tegelijk."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Hoe vraag ik klanten om een review?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Vraag op het juiste moment: vlak na een succesvolle ervaring. Voor een webshop: een paar dagen na bezorging. Voor een dienstverlener: direct na een afgerond traject. Maak het simpel. Eén klik, één korte zin, één directe link. Hoe meer wrijving, hoe minder reviews je krijgt. Een persoonlijke vraag levert vaak meer op dan een geautomatiseerde mail, maar de mail haalt de meeste schaalbaarheid."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Mag ik klanten belonen voor een review?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Vraag nooit om een positieve review in ruil voor een beloning. Dat overtreedt de richtlijnen van Google en de meeste platforms en kan je listing schaden. Een kleine attentie voor het achterlaten van een review zonder voorwaarde aan de inhoud is in sommige branches toegestaan, maar transparantie is belangrijk. Check altijd de specifieke voorwaarden van het platform dat je gebruikt."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Hoe gebruik ik reviews in mijn advertenties?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Citeer letterlijke klantzinnen in je ad-teksten in plaats van zelfgeschreven beloftes. Een klant die zegt 'ze hielpen me terwijl ik dacht dat het te laat was' werkt sterker dan 'wij zijn behulpzaam'. Op Google Ads kun je via de seller ratings sterren in je advertenties laten zien. Op Meta werken video-testimonials of social-proof banners erg goed in retargeting-campagnes."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Wat doe ik als ik een negatieve review krijg?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Niet verbergen, wel professioneel beantwoorden. Reageer publiekelijk binnen 24 uur, erken het probleem, leg uit wat je gaat doen, en bied een offline vervolg aan. Andere lezers vormen hun mening niet alleen op de klacht, maar vooral op hoe jij ermee omgaat. Een goed beantwoorde negatieve review versterkt vaak vertrouwen meer dan een rij vijfsterren-recensies."
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
                            { "@type": "ListItem", "position": 3, "name": "Algemeen", "item": "https://www.empowers.nl/blogs/algemeen" },
                            { "@type": "ListItem", "position": 4, "name": "Klantreviews als marketingtool", "item": "https://www.empowers.nl/blogs/algemeen/zet-klantreviews-marketingtool" }
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
                        <span className="text-primary truncate">Klantreviews</span>
                    </nav>

                    <header className="mb-16">
                        <div className="inline-block px-3 py-1 bg-accent/10 text-accent font-mono text-xs uppercase tracking-widest rounded-full mb-6">
                            Algemeen
                        </div>
                        <h1 className="font-sans font-bold text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight mb-8">
                            Hoe zet je klantreviews in als marketingtool?
                        </h1>

                        <div className="flex flex-wrap items-center gap-6 text-sm font-sans text-primary/60 border-y border-primary/10 py-6">
                            <div className="flex items-center gap-2"><User className="w-4 h-4" /><span>Empowers Redactie</span></div>
                            <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>13 mei 2026</span></div>
                            <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>7 minuten leestijd</span></div>
                        </div>
                    </header>

                    <figure className="w-full h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden mb-16 relative bg-primary">
                        <div className="absolute inset-0 bg-[url('/images/blogs/zet-klantreviews-marketingtool.jpg')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </figure>

                    <div className="prose prose-lg max-w-none prose-headings:text-primary prose-headings:font-bold prose-a:text-accent prose-a:underline hover:prose-a:text-accent/80">
                        <p className="text-xl leading-relaxed text-primary/80 font-medium mb-6">
                            Reviews krijgen weinig liefde. Ze worden gezien als iets dat vanzelf gebeurt of als sterrenrijtje onder een productpagina. Wie er strategisch mee omgaat ontdekt iets anders: een goed georganiseerde review-aanpak is een van de meest rendabele marketingkanalen die bestaan. Geen advertenties, geen content-machinerie, gewoon de stem van tevreden klanten op de juiste plekken inzetten.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Waarom reviews structureel onderschat worden</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Veel ondernemers behandelen reviews als bijproduct. Soms vraag je erom, soms komt er een binnen. Op een goede week reageer je netjes, op een drukke week vergeet je het. Daarmee laat je waarde liggen. Want elke review is in feite drie marketing-assets tegelijk: een ranking-signaal voor Google, een conversie-versterker op je site, en gratis content die je elders kunt inzetten.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een potentiële klant die op het punt staat te kopen leest reviews niet voor de lol. Hij leest ze om zijn keuze te bevestigen. Op dat moment wegen vijftig recensies van echte klanten zwaarder dan welke gepolijste merkclaim ook. Dat maakt reviews uniek. Ze zijn het enige type marketing dat krachtiger wordt naarmate jij er minder bij betrokken bent.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">De drie functies van een review</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Functie één: vindbaarheid. Google leest reviews mee voor lokale rankings via je Google Business Profile. Bedrijven met meer recente reviews en hogere gemiddelde score komen hoger in lokale zoekresultaten. Voor branchewoorden in je stad maakt dat het verschil tussen wel of niet op pagina één staan.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Functie twee: doorklikratio. Sterren in zoekresultaten of in Google Ads via seller ratings verhogen je CTR meetbaar. Mensen klikken sneller op een resultaat met 4,8 sterren dan op een vergelijkbare zonder ratings. Dat is gratis traffic die je anders zou moeten kopen.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Functie drie: conversie. Op je productpagina, in je offerte-bevestiging of in je email-sequence verhoogt sociaal bewijs het percentage mensen dat doorzet. Recente onderzoeken in CRO-praktijk laten zien dat goed geplaatste klantreviews vaak meer conversielift geven dan een prijsverlaging. Niet omdat ze magisch zijn, wel omdat ze twijfel wegnemen op het moment dat het telt.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Welke platforms wegen het zwaarst?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Concentreer je inspanning. Niet vijftien platforms tegelijk, wel één hoofdplatform en eventueel één branche-specifiek alternatief. Voor de meeste MKB-bedrijven is Google Reviews het belangrijkste, omdat het direct gekoppeld is aan je vindbaarheid. Voor webshops voegt Trustpilot of Kiyoh waarde toe omdat hun reviews in Google's rich results verschijnen.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Voor lokale dienstverleners zijn branche-platforms krachtig: Werkspot voor klussers, Treatwell voor schoonheidssalons, Independer voor verzekeringen, Klantenvertellen voor breed B2C. Daar zit een doelgroep die actief op zoek is en bereid is reviews te lezen voor ze kiezen. Maak in je marketing-strategie expliciet welk platform jouw hoofdkanaal is en focus daar 80 procent van je energie op.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe vraag je effectief om een review?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Drie dingen bepalen of je veel of weinig reviews binnenhaalt. Timing, eenvoud en personalisatie. Vraag op het moment dat de klant tevreden is. Voor een webshop: drie tot vijf dagen na bezorging. Voor een dienstverlener: vlak na oplevering, terwijl het succes nog vers in het geheugen ligt. Wachten doet het ratio van uitvragingen die in reviews omzetten kelderen.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Maak het eenvoudig. Eén klik vanuit een mail naar de juiste reviewpagina. Geen omleidingen, geen inlogvereisten als het kan worden vermeden. Voor Google Reviews kun je een directe link genereren via je Business Profile-dashboard. Hoe minder wrijving, hoe meer reacties.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Personaliseer waar het kan. Een mail die begint met "Hi Sandra, bedankt voor je bestelling vorige week" werkt aantoonbaar beter dan een generieke "Geachte klant". Voor diensten waar persoonlijk contact al bestaat, werkt een berichtje van de behandelaar of accountmanager nog beter dan een geautomatiseerde mail.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Reviews hergebruiken: waar ze écht renderen</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De grootste fout met reviews: ze laten staan waar ze geplaatst zijn en daar ophouden. Tien sterren onder een productpagina hebben effect, maar dezelfde quote in een Meta Ad, een sales-mail of een landingspagina vermenigvuldigt het rendement.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Concrete hergebruik-momenten: citaten in advertentieteksten, video-testimonials in retargeting-campagnes, screenshots van reviews op een productpagina, een wall-of-love-sectie op je homepage, sociale-proof in mailflows voor twijfelende leads, en short-form quotes in sales-presentaties. Eén goede review kan zes maanden lang op tien verschillende plekken werken zonder dat de impact slijt.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Voor advertenties geldt: gebruik letterlijke klantzinnen. Een klant die schrijft "ze hielpen me terwijl ik dacht dat het te laat was" werkt beter dan een marketingclaim. Niet gepolijst, juist daarom geloofwaardig. Hoe je dat soort sociale bewijs in advertentietekst integreert lees je in onze blog over <Link to="/blogs/google-ads/schrijf-betere-google-ads-ai" className="text-accent hover:underline">betere Google Ads-teksten schrijven</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Omgaan met negatieve reviews</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een negatieve review is geen ramp, mits je reageert. Wat lezers niet vergeven is stilte. Reageer binnen 24 uur, publiekelijk, oplossingsgericht. Erken het probleem zonder defensief te worden, schets een concrete vervolgstap, bied aan om offline verder te gaan. Andere lezers vormen hun beeld vooral op je reactie, niet op de klacht zelf.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Vermijd drie reflexen die altijd averechts werken: in discussie gaan in het openbaar, de klacht ontkennen, of proberen de review te laten verwijderen. Geen van die paden helpt. Een rustige, eerlijke reactie op een slechte review draagt vaak meer bij aan vertrouwen dan tien lovende recensies. Hoe je dat structureel inricht staat in onze blog over <Link to="/blogs/algemeen/brandmonitoring-hou-over-gezegd" className="text-accent hover:underline">brandmonitoring</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Het maandritme dat reviews structureel laat groeien</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Reviews zijn geen eenmalige actie, ze zijn een ritme. Een werkbare maandcyclus voor MKB ziet er zo uit. Maandagochtend: nieuwe reviews scannen en binnen die dag beantwoorden. Tweewekelijks: een mailcampagne naar klanten met een afgeronde aankoop of dienst met de vraag om een review. Maandelijks: de beste reviews verzamelen in een swipefile voor advertentie- en sales-gebruik.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Wie dit drie maanden volhoudt ziet zijn aantal recensies meetbaar stijgen, en daarmee zijn vindbaarheid en conversie. Een jaar later heb je een review-portfolio waar concurrenten zonder dit ritme niet meer tegen kunnen komen. Goed sociaal bewijs is een van de moeilijkst te kopiëren marketing-assets die bestaan. Wie eraan bouwt, bouwt voorsprong.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Veelgestelde vragen</h2>
                    </div>

                    <section className="mt-4">
                        <div className="space-y-6 not-prose">
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Waarom zijn klantreviews zo belangrijk voor marketing?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Reviews geven sociale bewijskracht. Wie twijfelt tussen jou en een concurrent leest reviews om de keuze te onderbouwen. Daarnaast wegen reviews zwaar in Google's lokale rankings, helpen sterren in zoekresultaten de doorklikratio, en geven AI-zoekmachines reviews als signaal dat je betrouwbaar bent. Eén positieve review met inhoud doet meer voor je marketing dan tien algemene claims op je website.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Op welke platforms moet ik reviews verzamelen?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Begin bij Google Reviews via je Google Business Profile. Dat is de plek waar de meeste mensen je eerst zien. Voor webshops voegt Trustpilot of Kiyoh waarde toe omdat ze zijn opgenomen in Google's rich results. Voor branche-specifieke bedrijven helpen platforms zoals Werkspot, Klantenvertellen, Independer of branche-fora. Concentreer je op één hoofdplatform en eventueel één branche-platform, niet vijftien tegelijk.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoe vraag ik klanten om een review?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Vraag op het juiste moment: vlak na een succesvolle ervaring. Voor een webshop: een paar dagen na bezorging. Voor een dienstverlener: direct na een afgerond traject. Maak het simpel. Eén klik, één korte zin, één directe link. Hoe meer wrijving, hoe minder reviews je krijgt. Een persoonlijke vraag levert vaak meer op dan een geautomatiseerde mail, maar de mail haalt de meeste schaalbaarheid.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Mag ik klanten belonen voor een review?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Vraag nooit om een positieve review in ruil voor een beloning. Dat overtreedt de richtlijnen van Google en de meeste platforms en kan je listing schaden. Een kleine attentie voor het achterlaten van een review zonder voorwaarde aan de inhoud is in sommige branches toegestaan, maar transparantie is belangrijk. Check altijd de specifieke voorwaarden van het platform dat je gebruikt.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoe gebruik ik reviews in mijn advertenties?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Citeer letterlijke klantzinnen in je ad-teksten in plaats van zelfgeschreven beloftes. Een klant die zegt 'ze hielpen me terwijl ik dacht dat het te laat was' werkt sterker dan 'wij zijn behulpzaam'. Op Google Ads kun je via de seller ratings sterren in je advertenties laten zien. Op Meta werken video-testimonials of social-proof banners erg goed in retargeting-campagnes.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat doe ik als ik een negatieve review krijg?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Niet verbergen, wel professioneel beantwoorden. Reageer publiekelijk binnen 24 uur, erken het probleem, leg uit wat je gaat doen, en bied een offline vervolg aan. Andere lezers vormen hun mening niet alleen op de klacht, maar vooral op hoe jij ermee omgaat. Een goed beantwoorde negatieve review versterkt vaak vertrouwen meer dan een rij vijfsterren-recensies.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="mt-16 pt-12 border-t border-primary/10">
                        <h3 className="text-xl font-bold text-primary mb-6">Lees ook</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <Link to="/blogs/algemeen/brandmonitoring-hou-over-gezegd" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Brandmonitoring</h3>
                                <p className="text-primary/60 text-sm">Hou bij wat klanten en prospects online over je zeggen.</p>
                            </Link>
                            <Link to="/blogs/algemeen/klantretentie-behouden-goedkoper-nieuwe-klanten" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Klantretentie</h3>
                                <p className="text-primary/60 text-sm">Behouden is goedkoper dan nieuwe klanten werven.</p>
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
                    <h2 className="relative z-10 font-drama italic text-background text-3xl sm:text-4xl md:text-5xl mb-6">Reviews verzamelen die rendement opleveren?</h2>
                    <p className="relative z-10 font-sans text-background/70 text-lg mb-10 max-w-xl mx-auto">We bouwen een review-aanpak die structureel sociaal bewijs opbouwt en hergebruikt op de plekken waar het telt.</p>
                    <Link to="/contact" className="relative z-10 btn-magnetic inline-flex items-center justify-center bg-accent text-background font-sans font-bold text-lg px-10 py-4 rounded-[2rem] hover:bg-accent/90 transition-colors">Neem contact op</Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
