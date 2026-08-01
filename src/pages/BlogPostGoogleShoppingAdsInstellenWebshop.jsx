import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ChevronRight, User } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function BlogPostGoogleShoppingAdsInstellenWebshop() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen selection:bg-accent/30 selection:text-dark flex flex-col bg-background">
            <Helmet>
                <title>Google Shopping Ads instellen voor je webshop | Empowers</title>
                <meta name="description" content="Google Shopping Ads instellen doe je met een productfeed in Merchant Center en een koppeling met Google Ads. Lees stap voor stap hoe je webshop live gaat." />
                <link rel="canonical" href="https://www.empowers.nl/blogs/google-ads/google-shopping-ads-instellen-webshop" />
                <meta property="og:title" content="Google Shopping Ads instellen voor je webshop | Empowers" />
                <meta property="og:description" content="Google Shopping Ads instellen doe je met een productfeed in Merchant Center en een koppeling met Google Ads. Lees stap voor stap hoe je webshop live gaat." />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://www.empowers.nl/blogs/google-ads/google-shopping-ads-instellen-webshop" />
                <meta property="og:image" content="https://www.empowers.nl/images/blogs/google-shopping-ads-instellen-webshop.jpg" />
                <meta property="article:published_time" content="2026-07-19T14:30:00+02:00" />
                <meta property="article:author" content="Empowers" />
                <meta property="article:section" content="Google Ads" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Google Shopping Ads instellen voor je webshop | Empowers" />
                <meta name="twitter:description" content="Google Shopping Ads instellen doe je met een productfeed in Merchant Center en een koppeling met Google Ads. Lees stap voor stap hoe je webshop live gaat." />
                <script type="application/ld+json">{JSON.stringify({
                    "@context": "https://schema.org",
                    "@graph": [
                        {
                            "@type": "Article",
                            "headline": "Google Shopping Ads instellen voor jouw webshop",
                            "image": "https://www.empowers.nl/images/blogs/google-shopping-ads-instellen-webshop.jpg",
                            "description": "Google Shopping Ads instellen doe je met een productfeed in Merchant Center en een koppeling met Google Ads. Lees stap voor stap hoe je webshop live gaat.",
                            "author": { "@type": "Organization", "name": "Empowers" },
                            "publisher": { "@type": "Organization", "name": "Empowers", "url": "https://www.empowers.nl" },
                            "datePublished": "2026-07-19T14:30:00+02:00",
                            "dateModified": "2026-07-19T14:30:00+02:00",
                            "url": "https://www.empowers.nl/blogs/google-ads/google-shopping-ads-instellen-webshop"
                        },
                        {
                            "@type": "BreadcrumbList",
                            "itemListElement": [
                                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.empowers.nl" },
                                { "@type": "ListItem", "position": 2, "name": "Nieuws", "item": "https://www.empowers.nl/nieuws" },
                                { "@type": "ListItem", "position": 3, "name": "Google Ads", "item": "https://www.empowers.nl/blogs/google-ads" },
                                { "@type": "ListItem", "position": 4, "name": "Google Shopping Ads instellen voor jouw webshop", "item": "https://www.empowers.nl/blogs/google-ads/google-shopping-ads-instellen-webshop" }
                            ]
                        },
                        {
                            "@type": "FAQPage",
                            "mainEntity": [
                                { "@type": "Question", "name": "Wat heb ik nodig om met Google Shopping Ads te starten?", "acceptedAnswer": { "@type": "Answer", "text": "Drie dingen: een Google Merchant Center account met een goedgekeurde productfeed, een Google Ads account en een koppeling tussen die twee. De feed levert je productgegevens, Google Ads regelt de campagne en het budget. Zonder goedgekeurde feed verschijnt er geen enkel product in de zoekresultaten." } },
                                { "@type": "Question", "name": "Wat kost adverteren via Google Shopping?", "acceptedAnswer": { "@type": "Answer", "text": "Je betaalt per klik, net als bij zoekadvertenties. De klikprijs verschilt sterk per productcategorie: bij producten met kleine marges zie je vaak klikprijzen onder de 50 cent, bij concurrerende categorieën kan het richting enkele euro's gaan. Je bepaalt zelf je dagbudget, dus de kosten blijven beheersbaar." } },
                                { "@type": "Question", "name": "Wat is het verschil tussen standaard Shopping en Performance Max?", "acceptedAnswer": { "@type": "Answer", "text": "Een standaard Shopping campagne toont alleen productadvertenties in de zoekresultaten en geeft je veel controle, inclusief negatieve zoekwoorden. Performance Max adverteert met je feed op vrijwel alle Google kanalen tegelijk en stuurt volledig op algoritmes. Meer bereik, minder inzicht en controle." } },
                                { "@type": "Question", "name": "Waarom worden mijn producten afgekeurd in Merchant Center?", "acceptedAnswer": { "@type": "Answer", "text": "De meest voorkomende redenen: de prijs of beschikbaarheid in je feed wijkt af van je website, er ontbreken verplichte velden zoals GTIN, of je site mist vereiste informatie zoals retourvoorwaarden en contactgegevens. Merchant Center toont per product de reden, dus begin daar met lezen." } },
                                { "@type": "Question", "name": "Hoe belangrijk zijn producttitels in mijn feed?", "acceptedAnswer": { "@type": "Answer", "text": "Heel belangrijk. Shopping kent geen zoekwoorden, dus Google matcht zoekopdrachten op je productgegevens en vooral op je titel. Zet de termen waarop mensen zoeken vooraan in de titel, zoals merk, producttype en belangrijke kenmerken. Een betere titel betekent direct meer relevante vertoningen." } },
                                { "@type": "Question", "name": "Hoe snel levert een Shopping campagne resultaat op?", "acceptedAnswer": { "@type": "Answer", "text": "De eerste vertoningen en kliks komen meestal binnen enkele dagen na goedkeuring van je feed. Betrouwbare conclusies over rendement trek je pas na een paar weken, als er genoeg data staat. Geef een nieuwe campagne dus minimaal een maand voordat je grote beslissingen neemt." } }
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
                        <Link to="/blogs/google-ads" className="hover:text-accent transition-colors">Google Ads</Link>
                        <ChevronRight className="w-3 h-3" />
                        <span className="text-primary truncate">Shopping Ads instellen</span>
                    </nav>

                    {/* Header */}
                    <header className="mb-16">
                        <div className="inline-block px-3 py-1 bg-accent/10 text-accent font-mono text-xs uppercase tracking-widest rounded-full mb-6">
                            Google Ads
                        </div>
                        <h1 className="font-sans font-bold text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight mb-8">
                            Google Shopping Ads instellen voor jouw webshop
                        </h1>

                        <div className="flex flex-wrap items-center gap-6 text-sm font-sans text-primary/60 border-y border-primary/10 py-6">
                            <div className="flex items-center gap-2">
                                <User className="w-4 h-4" />
                                <span>Empowers Redactie</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>19 juli 2026</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>8 minuten leestijd</span>
                            </div>
                        </div>
                    </header>

                    {/* Featured Image */}
                    <figure className="w-full h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden mb-16 relative bg-primary">
                        <div className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-overlay" style={{backgroundImage: "url('/images/blogs/google-shopping-ads-instellen-webshop.jpg')"}}></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </figure>

                    {/* Content */}
                    <div className="prose prose-lg prose-headings:font-sans prose-headings:font-bold prose-headings:text-primary prose-p:font-sans prose-p:text-primary/80 prose-p:leading-relaxed max-w-none">
                        <p className="text-xl md:text-2xl font-medium leading-relaxed mb-10 text-primary">
                            Google Shopping Ads instellen begint niet in Google Ads, maar in Google Merchant Center. Daar upload je een productfeed met je artikelen en prijzen. Zodra die feed is goedgekeurd en gekoppeld aan je Google Ads account, kun je een Shopping campagne starten en verschijnen je producten met foto en prijs in de zoekresultaten.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat zijn Google Shopping Ads?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Shopping Ads zijn de productadvertenties met foto en prijs die bovenaan of naast de zoekresultaten staan. Wie zoekt op 'hardloopschoenen maat 43' ziet direct een rij producten van verschillende webshops naast elkaar.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Het grote verschil met zoekadvertenties: je schrijft geen advertentietekst en kiest geen zoekwoorden. Google bepaalt zelf wanneer je product relevant is, op basis van de gegevens in je feed. Je feed is dus je advertentie.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Voor webshops is dit vaak het meest rendabele startpunt binnen Google Ads. De bezoeker heeft de foto en de prijs al gezien voordat hij klikt, dus de kliks die je koopt zijn relatief warm.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat heb je nodig voordat je start?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Je hebt een Google Merchant Center account nodig, een productfeed en een Google Ads account dat aan Merchant Center gekoppeld is. De feed maak je meestal niet met de hand: platforms als Shopify en WooCommerce genereren hem via een app of plugin rechtstreeks vanuit je winkel.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Je website zelf moet ook op orde zijn. Google controleert of je shop duidelijke contactgegevens en een retourbeleid heeft, en of de checkout veilig is. Ontbreekt dat, dan kan je hele account geweigerd worden voordat er één product live staat.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Nederlandse webshops adverteren binnen de EU via een Comparison Shopping Service. Standaard is dat Google Shopping zelf, maar er zijn ook externe CSS-partners die met een ander kostenmodel werken. Voor je eerste campagne hoef je hier niets mee, weet alleen dat het bestaat.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe maak je een goede productfeed?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De producttitel is verreweg het belangrijkste veld. Google matcht zoekopdrachten grotendeels op die titel, dus zet de woorden waarop klanten zoeken vooraan: merk, producttype en het kenmerk dat het verschil maakt, zoals maat of kleur. 'Sneaker X23' zegt niemand iets, 'Heren hardloopschoen maat 43 blauw' wel.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Zorg verder dat prijs en voorraad in de feed altijd gelijk lopen met je website. Elke afwijking is een reden voor afkeuring. Stel de feed daarom in op dagelijkse verversing, zeker als je prijzen regelmatig wijzigen.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De webshops die bij ons aankloppen hebben de feed vaak ooit ingesteld en er daarna nooit meer naar omgekeken. Zonde, want een verbeterde titel of betere productfoto werkt door in elke vertoning. De feed is geen technisch klusje maar een verkoopkanaal.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Kies je standaard Shopping of Performance Max?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een standaard Shopping campagne toont je producten alleen in de zoekresultaten en op het Shopping tabblad. Je ziet welke zoekopdrachten kliks opleverden en je kunt negatieve zoekwoorden toevoegen. Veel controle, veel inzicht.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Performance Max gebruikt je feed op vrijwel alle kanalen van Google tegelijk, van zoeken tot YouTube en Gmail. Het bereik is groter, maar je geeft controle uit handen en ziet minder goed waar je budget heen gaat. Wat je daarover moet weten lees je in ons artikel over <Link to="/blogs/google-ads/performance-max-google-ads-weten" className="text-accent hover:underline">Performance Max</Link>.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Ons advies voor starters: begin met een standaard Shopping campagne. Je leert welke producten en zoekopdrachten renderen, en die kennis neem je later mee als je Performance Max wilt testen.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe richt je je eerste Shopping campagne in?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Maak in Google Ads een nieuwe campagne van het type Shopping en kies je gekoppelde Merchant Center account. Begin met één campagne en deel je producten daarbinnen op in productgroepen, bijvoorbeeld per categorie of merk. Zo kun je per groep een ander bod instellen.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Splits niet meteen alles uit. Begin overzichtelijk, kijk na een paar weken welke productgroepen de kliks en omzet pakken, en verfijn daarna. Structuur volgt data, niet andersom.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Check vanaf de eerste week je zoektermenrapport. Daar zie je letterlijk waarop mensen zochten toen je product vertoond werd. Sluit alles uit wat niet bij je aanbod past, zoals 'gratis' of 'tweedehands' als je nieuw verkoopt.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe haal je meer rendement uit je Shopping campagne?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Stuur op marge in plaats van omzet. Een campagne die veel verkoopt van je slechtst renderende product is druk bezig met niets. Geef producten met gezonde marges een hoger bod en zet stroef renderende producten apart of uit.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Werk daarnaast aan je prijspositie. Shopping toont jouw prijs naast die van concurrenten, dus een structureel duurder product krijgt kliks noch verkopen. Soms is het eerlijke antwoord dat een product niet geschikt is voor Shopping.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Meer halen uit elke euro advertentiebudget? In ons artikel over <Link to="/blogs/google-ads/google-ads-commerce-verhoog-roas" className="text-accent hover:underline">je ROAS verhogen</Link> gaan we dieper in op sturen op rendement, en in <Link to="/blogs/google-ads/google-shopping-adverteren-campagne" className="text-accent hover:underline">Google Shopping adverteren</Link> lees je meer over de campagnekant.
                        </p>

                        <p className="text-primary/80 leading-relaxed mb-6">
                            Kort samengevat: Shopping Ads draaien op een goede feed in Merchant Center, gekoppeld aan een overzichtelijk ingerichte campagne in Google Ads. Wil je dat jouw webshop het maximale uit Shopping haalt? Bekijk onze aanpak voor <Link to="/google-ads" className="text-accent hover:underline">Google Ads beheer</Link> of plan een gratis gesprek via <Link to="/contact" className="text-accent hover:underline">empowers.nl/contact</Link>.
                        </p>

                        <hr className="my-16 border-primary/10" />

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Veelgestelde vragen over Google Shopping Ads</h2>

                        <div className="space-y-6 not-prose">
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat heb ik nodig om met Google Shopping Ads te starten?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Drie dingen: een Google Merchant Center account met een goedgekeurde productfeed, een Google Ads account en een koppeling tussen die twee. De feed levert je productgegevens, Google Ads regelt de campagne en het budget. Zonder goedgekeurde feed verschijnt er geen enkel product in de zoekresultaten.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat kost adverteren via Google Shopping?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Je betaalt per klik, net als bij zoekadvertenties. De klikprijs verschilt sterk per productcategorie: bij producten met kleine marges zie je vaak klikprijzen onder de 50 cent, bij concurrerende categorieën kan het richting enkele euro's gaan. Je bepaalt zelf je dagbudget, dus de kosten blijven beheersbaar.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat is het verschil tussen standaard Shopping en Performance Max?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Een standaard Shopping campagne toont alleen productadvertenties in de zoekresultaten en geeft je veel controle, inclusief negatieve zoekwoorden. Performance Max adverteert met je feed op vrijwel alle Google kanalen tegelijk en stuurt volledig op algoritmes. Meer bereik, minder inzicht en controle.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Waarom worden mijn producten afgekeurd in Merchant Center?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    De meest voorkomende redenen: de prijs of beschikbaarheid in je feed wijkt af van je website, er ontbreken verplichte velden zoals GTIN, of je site mist vereiste informatie zoals retourvoorwaarden en contactgegevens. Merchant Center toont per product de reden, dus begin daar met lezen.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoe belangrijk zijn producttitels in mijn feed?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Heel belangrijk. Shopping kent geen zoekwoorden, dus Google matcht zoekopdrachten op je productgegevens en vooral op je titel. Zet de termen waarop mensen zoeken vooraan in de titel, zoals merk, producttype en belangrijke kenmerken. Een betere titel betekent direct meer relevante vertoningen.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoe snel levert een Shopping campagne resultaat op?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    De eerste vertoningen en kliks komen meestal binnen enkele dagen na goedkeuring van je feed. Betrouwbare conclusies over rendement trek je pas na een paar weken, als er genoeg data staat. Geef een nieuwe campagne dus minimaal een maand voordat je grote beslissingen neemt.
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
                    <h2 className="relative z-10 font-drama italic text-background text-3xl sm:text-4xl md:text-5xl mb-6">Meer omzet uit je webshop halen?</h2>
                    <p className="relative z-10 font-sans text-background/70 text-lg mb-10 max-w-xl mx-auto">
                        Wij richten Shopping campagnes in die sturen op marge en rendement, niet op kliks alleen.
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
