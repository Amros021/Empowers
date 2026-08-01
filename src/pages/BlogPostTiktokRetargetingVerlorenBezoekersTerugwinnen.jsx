import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ChevronRight, User } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function BlogPostTiktokRetargetingVerlorenBezoekersTerugwinnen() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen selection:bg-accent/30 selection:text-dark flex flex-col bg-background">
            <Helmet>
                <title>TikTok retargeting: verloren bezoekers terugwinnen | Empowers</title>
                <meta name="description" content="Met TikTok retargeting bereik je mensen die je video's bekeken of je website bezochten maar niet kochten. Zo stel je de doelgroepen en funnel goed in." />
                <link rel="canonical" href="https://www.empowers.nl/blogs/social-ads/tiktok-retargeting-verloren-bezoekers-terugwinnen" />
                <meta property="og:title" content="TikTok retargeting: verloren bezoekers terugwinnen" />
                <meta property="og:description" content="Kijkers en bezoekers die niet kochten zijn je warmste doelgroep. Zo zet je TikTok retargeting op die converteert." />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://www.empowers.nl/blogs/social-ads/tiktok-retargeting-verloren-bezoekers-terugwinnen" />
                <meta property="og:image" content="https://www.empowers.nl/images/blogs/tiktok-retargeting-verloren-bezoekers-terugwinnen.jpg" />
                <meta property="article:published_time" content="2026-08-01T21:00:00+02:00" />
                <meta property="article:author" content="Empowers" />
                <meta property="article:section" content="Social Ads" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="TikTok retargeting: verloren bezoekers terugwinnen" />
                <meta name="twitter:description" content="Zo zet je TikTok retargeting op die kijkers en bezoekers omzet in klanten." />

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@graph": [
                            {
                                "@type": "Article",
                                "headline": "TikTok retargeting: verloren bezoekers terugwinnen",
                                "description": "Met TikTok retargeting bereik je mensen die je video's bekeken of je website bezochten maar niet kochten. Zo stel je de doelgroepen en funnel goed in.",
                                "image": "https://www.empowers.nl/images/blogs/tiktok-retargeting-verloren-bezoekers-terugwinnen.jpg",
                                "datePublished": "2026-08-01T21:00:00+02:00",
                                "author": { "@type": "Organization", "name": "Empowers" },
                                "publisher": {
                                    "@type": "Organization",
                                    "name": "Empowers",
                                    "url": "https://www.empowers.nl",
                                    "logo": { "@type": "ImageObject", "url": "https://www.empowers.nl/empowers-logo-color.svg" }
                                }
                            },
                            {
                                "@type": "BreadcrumbList",
                                "itemListElement": [
                                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.empowers.nl" },
                                    { "@type": "ListItem", "position": 2, "name": "Blogs", "item": "https://www.empowers.nl/blogs" },
                                    { "@type": "ListItem", "position": 3, "name": "Social Ads", "item": "https://www.empowers.nl/blogs/social-ads" },
                                    { "@type": "ListItem", "position": 4, "name": "TikTok retargeting: verloren bezoekers terugwinnen", "item": "https://www.empowers.nl/blogs/social-ads/tiktok-retargeting-verloren-bezoekers-terugwinnen" }
                                ]
                            },
                            {
                                "@type": "FAQPage",
                                "mainEntity": [
                                    {
                                        "@type": "Question",
                                        "name": "Wat is TikTok retargeting?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "TikTok retargeting is opnieuw adverteren aan mensen die al met je merk in aanraking kwamen: kijkers van je video's, bezoekers van je profiel of je website, of mensen die iets in hun winkelwagen lieten staan. Omdat deze doelgroep je al kent, converteert ze aanzienlijk beter dan een koude doelgroep."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Welke doelgroepen kan ik retargeten op TikTok?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "TikTok ondersteunt custom audiences op basis van videoweergaven, profielbezoek en interacties, websiteverkeer via de TikTok Pixel, app-activiteit, klantlijsten die je zelf uploadt en leadformulieren. Die groepen kun je apart benaderen met een eigen boodschap per fase."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Heb ik de TikTok Pixel nodig voor retargeting?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Voor website-retargeting wel. De TikTok Pixel registreert wie je site bezoekt en welke acties ze doen, zoals een product bekijken of iets in de winkelwagen leggen. Combineer de pixel met de Events API voor betrouwbaardere metingen, zeker nu browsers cookies beperken."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Hoe voorkom ik dat mijn retargeting doelgroep te klein is?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Bouw eerst bereik op met videocontent en verkeerscampagnes voordat je een retargetinglaag start. Groepeer daarna fases samen als losse groepen te klein zijn, bijvoorbeeld alle sitebezoekers van de afgelopen 30 dagen in plaats van alleen winkelwagenverlaters van de laatste week."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Welke content werkt in een TikTok retargeting campagne?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Toon iets nieuws. Wie je eerste video al zag, haakt af bij een herhaling. Gebruik social proof zoals reviews en klantvideo's, beantwoord veelgestelde twijfels of laat het product in gebruik zien. Voor winkelwagenverlaters werkt een concrete drempelverlager zoals gratis verzending vaak goed."
                                        }
                                    }
                                ]
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
                        <Link to="/blogs/social-ads" className="hover:text-accent transition-colors">Social Ads</Link>
                        <ChevronRight className="w-3 h-3" />
                        <span className="text-primary truncate">TikTok retargeting</span>
                    </nav>

                    {/* Header */}
                    <header className="mb-16">
                        <div className="inline-block px-3 py-1 bg-accent/10 text-accent font-mono text-xs uppercase tracking-widest rounded-full mb-6">
                            Social Ads
                        </div>
                        <h1 className="font-sans font-bold text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight mb-8">
                            TikTok retargeting: verloren bezoekers terugwinnen
                        </h1>
                        <div className="flex flex-wrap items-center gap-6 text-sm font-sans text-primary/60 border-y border-primary/10 py-6">
                            <div className="flex items-center gap-2"><User className="w-4 h-4" /><span>Empowers Redactie</span></div>
                            <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>1 augustus 2026</span></div>
                            <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>7 minuten leestijd</span></div>
                        </div>
                    </header>

                    {/* Featured Image */}
                    <figure className="w-full h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden mb-16 relative bg-primary">
                        <div className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-overlay" style={{ backgroundImage: "url('/images/blogs/tiktok-retargeting-verloren-bezoekers-terugwinnen.jpg')" }}></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </figure>

                    {/* Content */}
                    <div className="prose prose-lg max-w-none prose-headings:text-primary prose-headings:font-bold prose-a:text-accent prose-a:underline hover:prose-a:text-accent/80">
                        <p className="text-xl leading-relaxed text-primary/80 font-medium mb-6">
                            Verreweg de meeste mensen die je TikTok-video bekijken of je website bezoeken, kopen niet bij het eerste contact. Met TikTok retargeting bereik je precies die groep opnieuw: kijkers, profielbezoekers, sitebezoekers en winkelwagenverlaters. Omdat ze je merk al kennen, is dit doorgaans de doelgroep met de laagste kosten per conversie in je hele account.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe werkt retargeting op TikTok?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De basis is de custom audience: een doelgroep die TikTok samenstelt uit mensen die eerder iets met jouw merk deden. Dat kan binnen het platform zijn, zoals een video bekijken of je profiel bezoeken. Of daarbuiten, zoals een bezoek aan je website of een aankoop die net niet doorging. Aan die groepen laat je vervolgens gerichte advertenties zien met een boodschap die past bij hoe warm ze al zijn.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Het verschil met koud adverteren is groot. Een koude kijker moet je eerst overtuigen dat je bestaat. Een retargeting-kijker weet dat al, en twijfelt ergens anders over: de prijs, de betrouwbaarheid of simpelweg het juiste moment. Jouw advertentie hoeft alleen die specifieke twijfel weg te nemen.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Welke doelgroepen kun je opbouwen?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Binnen TikTok zelf bouw je doelgroepen van videokijkers en mensen die met je content interacteerden of je profiel bezochten. Dit zijn je lichtste retargeting-lagen: groot in aantal, laag in koopintentie, maar al bekend met je merk. Perfect voor een tweede video die dieper op je aanbod ingaat.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Buiten het platform bouw je doelgroepen met de TikTok Pixel op je website: alle bezoekers, bezoekers van specifieke productpagina's en mensen die iets in hun winkelwagen legden zonder af te rekenen. Daarnaast kun je eigen klantlijsten uploaden, bijvoorbeeld om bestaande klanten een vervolgaanbod te doen of juist uit te sluiten. Hoe je die pixel-metingen betrouwbaar houdt nu browsers cookies beperken, werkt hetzelfde als bij Meta: combineer de pixel met server-side metingen via de Events API.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe bouw je een retargeting-funnel op TikTok?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Denk in temperatuur. De eerste laag bestaat uit videokijkers: die stuur je content die je verhaal verdiept, nog zonder harde verkoopboodschap. De tweede laag bestaat uit sitebezoekers: die kregen al interesse, dus daar mag je aanbod concreter worden. De derde laag bestaat uit winkelwagenverlaters en productpaginabezoekers: daar zit de koopintentie, en daar hoort een directe boodschap met een duidelijke reden om nu af te ronden.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Sluit lagen ook uit van elkaar. Wie in je winkelwagen-doelgroep zit, hoort niet ook de introductievideo te zien. En sluit recente kopers uit van je verkoopcampagnes, tenzij je bewust een vervolgproduct aanbiedt. Zonder die uitsluitingen betaal je dubbel voor dezelfde persoon en irriteer je klanten die net kochten.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Welke content overtuigt een warme doelgroep?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De grootste fout in retargeting is dezelfde video nog een keer tonen. Wie al keek en niet klikte, heeft een nieuwe reden nodig. Werk daarom met een reeks: de eerste advertentie vertelt je verhaal, de tweede toont bewijs met reviews of klantvideo's, de derde neemt een concrete twijfel weg zoals verzendkosten of retourbeleid. Authentieke content van echte gebruikers doet het in die tweede en derde stap opvallend goed; hoe je daaraan komt, lees je in onze <Link to="/blogs/social-ads/influencer-content-tiktok-ads" className="text-accent hover:underline">blog over influencer content in TikTok Ads</Link>.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Houd het tempo erin. TikTok-kijkers beslissen in de eerste seconden of ze blijven hangen, ook bij retargeting. Begin met de twijfel of het bezwaar, niet met je logo. "Nog aan het twijfelen over..." werkt beter als opening dan een productshot met muziek eronder.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe vaak mag je dezelfde persoon bereiken?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Frequentie is de stille moordenaar van retargeting. Een kleine doelgroep met een ruim budget betekent dat dezelfde persoon jouw advertentie tientallen keren ziet, en irritatie werkt tegen je merk. Houd de frequentie in je rapportages in de gaten en grijp in zodra die hard oploopt: verlaag het budget, vergroot de doelgroep of wissel de creative. Een vuistregel: zodra je resultaten dalen terwijl je frequentie stijgt, is je doelgroep verzadigd.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Werk daarom ook met een tijdslimiet. Wie drie weken geleden je site bezocht en sindsdien niets deed, is kouder dan een verse bezoeker. Splits je doelgroepen op recentheid en stop vanzelf met adverteren aan mensen bij wie de interesse aantoonbaar is weggezakt. Dat geld zet je beter in op nieuwe bezoekers.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat als je doelgroepen te klein zijn?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Retargeting werkt pas als er iets te retargeten valt. Een webshop met een paar honderd bezoekers per maand bouwt te kleine doelgroepen voor een fijnmazige funnel. Begin dan breder: draai eerst bereik- en verkeerscampagnes om je doelgroepen te vullen, en voeg de retargetinglaag toe zodra de aantallen het toelaten. Groepeer in de tussentijd fases samen, bijvoorbeeld alle sitebezoekers van de afgelopen 30 dagen als één doelgroep.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Kijk bij het beoordelen van je resultaten verder dan alleen de laatste klik. Retargeting plukt de vruchten van je koude campagnes, dus beoordeel de funnel als geheel. Welke cijfers daarbij horen, lees je in onze <Link to="/blogs/social-ads/meet-succes-tiktok-ads-campagne" className="text-accent hover:underline">blog over het meten van TikTok Ads succes</Link> en onze <Link to="/blogs/social-ads/goede-cpm-tiktok-benchmarks" className="text-accent hover:underline">blog over TikTok CPM-benchmarks</Link>.
                        </p>

                        <p className="text-primary/80 leading-relaxed mb-6">
                            Wil je weten hoeveel omzet er nu blijft liggen bij bezoekers die net niet kochten? Onze <Link to="/tiktok-ads" className="text-accent hover:underline">TikTok Ads specialisten</Link> rekenen het voor je uit en bouwen de funnel die het terughaalt. Plan een gratis gesprek via onze <Link to="/contact" className="text-accent hover:underline">contactpagina</Link>.
                        </p>
                    </div>

                    {/* FAQ Section */}
                    <section className="mt-16 pt-12 border-t border-primary/10">
                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Veelgestelde vragen</h2>
                        <div className="space-y-6 not-prose">
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat is TikTok retargeting?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">TikTok retargeting is opnieuw adverteren aan mensen die al met je merk in aanraking kwamen: kijkers van je video's, bezoekers van je profiel of je website, of mensen die iets in hun winkelwagen lieten staan. Omdat deze doelgroep je al kent, converteert ze aanzienlijk beter dan een koude doelgroep.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Welke doelgroepen kan ik retargeten op TikTok?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">TikTok ondersteunt custom audiences op basis van videoweergaven, profielbezoek en interacties, websiteverkeer via de TikTok Pixel, app-activiteit, klantlijsten die je zelf uploadt en leadformulieren. Die groepen kun je apart benaderen met een eigen boodschap per fase.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Heb ik de TikTok Pixel nodig voor retargeting?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Voor website-retargeting wel. De TikTok Pixel registreert wie je site bezoekt en welke acties ze doen, zoals een product bekijken of iets in de winkelwagen leggen. Combineer de pixel met de Events API voor betrouwbaardere metingen, zeker nu browsers cookies beperken.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoe voorkom ik dat mijn retargeting doelgroep te klein is?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Bouw eerst bereik op met videocontent en verkeerscampagnes voordat je een retargetinglaag start. Groepeer daarna fases samen als losse groepen te klein zijn, bijvoorbeeld alle sitebezoekers van de afgelopen 30 dagen in plaats van alleen winkelwagenverlaters van de laatste week.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Welke content werkt in een TikTok retargeting campagne?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Toon iets nieuws. Wie je eerste video al zag, haakt af bij een herhaling. Gebruik social proof zoals reviews en klantvideo's, beantwoord veelgestelde twijfels of laat het product in gebruik zien. Voor winkelwagenverlaters werkt een concrete drempelverlager zoals gratis verzending vaak goed.</p>
                            </div>
                        </div>
                    </section>

                    {/* Related Links */}
                    <section className="mt-16 pt-12 border-t border-primary/10">
                        <h3 className="text-xl font-bold text-primary mb-6">Lees ook</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <Link to="/blogs/social-ads/meet-succes-tiktok-ads-campagne" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Succes meten van TikTok Ads</h3>
                                <p className="text-primary/60 text-sm">Welke cijfers vertellen het echte verhaal?</p>
                            </Link>
                            <Link to="/blogs/social-ads/goede-cpm-tiktok-benchmarks" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">TikTok CPM-benchmarks</h3>
                                <p className="text-primary/60 text-sm">Wat is een goede CPM op TikTok?</p>
                            </Link>
                            <Link to="/blogs/social-ads/influencer-content-tiktok-ads" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Influencer content in TikTok Ads</h3>
                                <p className="text-primary/60 text-sm">Zo zet je creators in voor je campagnes.</p>
                            </Link>
                        </div>
                    </section>
                </div>
            </article>

            {/* Bottom CTA */}
            <section className="w-full pb-32 px-6">
                <div className="max-w-4xl mx-auto bg-primary rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
                    <h2 className="relative z-10 font-drama italic text-background text-3xl sm:text-4xl md:text-5xl mb-6">Haal je verloren bezoekers terug</h2>
                    <p className="relative z-10 font-sans text-background/70 text-lg mb-10 max-w-xl mx-auto">We berekenen gratis hoeveel omzet er bij jou blijft liggen en bouwen de retargeting-funnel die het terughaalt.</p>
                    <Link to="/contact" className="relative z-10 btn-magnetic inline-flex items-center justify-center bg-accent text-background font-sans font-bold text-lg px-10 py-4 rounded-[2rem] hover:bg-accent/90 transition-colors">Neem contact op</Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
