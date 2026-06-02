import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ChevronRight, User } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function BlogPostGoogleAdsBureauWisselenZonderDataverlies() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen selection:bg-accent/30 selection:text-dark flex flex-col bg-background">
            <Helmet>
                <title>Google Ads bureau wisselen: stappenplan zonder dataverlies | Empowers</title>
                <meta name="description" content="Van Google Ads bureau wisselen zonder je data te verliezen? Zo houd je je account en al je opgebouwde historie, en voorkom je dat de leerfase opnieuw begint." />
                <meta name="keywords" content="google ads bureau wisselen, google ads bureau overstappen, google ads account overzetten, google ads data behouden, ander google ads bureau" />
                <link rel="canonical" href="https://www.empowers.nl/blogs/google-ads/google-ads-bureau-wisselen-zonder-dataverlies" />
                <meta property="og:title" content="Google Ads bureau wisselen: stappenplan zonder dataverlies" />
                <meta property="og:description" content="Zo wissel je van Google Ads bureau zonder je account en conversiedata te verliezen." />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://www.empowers.nl/blogs/google-ads/google-ads-bureau-wisselen-zonder-dataverlies" />
                <meta property="og:image" content="https://www.empowers.nl/images/blogs/google-ads-bureau-wisselen-zonder-dataverlies.jpg" />
                <meta property="article:published_time" content="2026-06-02" />
                <meta property="article:author" content="Empowers" />
                <meta property="article:section" content="Google Ads" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Google Ads bureau wisselen: stappenplan zonder dataverlies" />
                <meta name="twitter:description" content="Zo wissel je van Google Ads bureau zonder je account en conversiedata te verliezen." />

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@graph": [
                            {
                                "@type": "Article",
                                "headline": "Google Ads bureau wisselen: stappenplan zonder dataverlies",
                                "description": "Van Google Ads bureau wisselen zonder je data te verliezen? Zo houd je je account en al je opgebouwde historie, en voorkom je dat de leerfase opnieuw begint.",
                                "image": "https://www.empowers.nl/images/blogs/google-ads-bureau-wisselen-zonder-dataverlies.jpg",
                                "datePublished": "2026-06-02T10:00:00+02:00",
                                "dateModified": "2026-06-02T10:00:00+02:00",
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
                                    { "@type": "ListItem", "position": 3, "name": "Google Ads", "item": "https://www.empowers.nl/blogs/google-ads" },
                                    { "@type": "ListItem", "position": 4, "name": "Google Ads bureau wisselen zonder dataverlies", "item": "https://www.empowers.nl/blogs/google-ads/google-ads-bureau-wisselen-zonder-dataverlies" }
                                ]
                            },
                            {
                                "@type": "FAQPage",
                                "mainEntity": [
                                    {
                                        "@type": "Question",
                                        "name": "Verlies ik mijn data als ik van Google Ads bureau wissel?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Niet als je in hetzelfde Google Ads account blijft werken. Alle historie, conversies en campagnes horen bij het account, niet bij het bureau. Zolang het account op jouw naam staat en je alleen de toegang van het oude bureau verwijdert, blijft alles bewaard. Het misgaat pas als een nieuw bureau een vers account opzet en je oude account laat liggen."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Wie is eigenaar van mijn Google Ads account?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Dat hangt af van hoe het account ooit is aangemaakt. Staat het op een e-mailadres van jouw bedrijf met beheerderstoegang, dan ben jij de eigenaar en koppelt het bureau zich er alleen aan via zijn beheeraccount. Heeft het bureau het account zelf aangemaakt onder zijn eigen beheer, dan is dat een risico. Vraag dit altijd na voordat je opzegt."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Moet ik een nieuw Google Ads account aanmaken bij een nieuw bureau?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Bij voorkeur niet. Een nieuw account betekent dat je alle historie en de opgebouwde leerdata kwijtraakt en dat campagnes weer vanaf nul moeten leren. Een goed bureau werkt gewoon verder in je bestaande account door zijn beheeraccount eraan te koppelen. Alleen als je oude account echt verkeerd is opgezet, kan opnieuw beginnen verstandig zijn."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Hoe behoud ik mijn conversietracking bij een overstap?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Controleer of je conversies worden gemeten via tags die in jouw eigen Google Tag Manager en GA4 staan, niet in accounts van het bureau. Vraag toegang tot die accounts of zorg dat ze op jouw bedrijfsmail staan. Zo blijft de meting doorlopen als het bureau vertrekt en hoeft het nieuwe bureau de tracking niet opnieuw op te bouwen."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Wanneer kun je het beste van Google Ads bureau wisselen?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Het liefst in een rustige periode, niet vlak voor je drukste verkoopmaand. Rond een overstap is even minder controle en dat wil je niet tijdens een piek. Regel de toegang en accounts terwijl de campagnes gewoon doorlopen, en laat het nieuwe bureau pas grote wijzigingen doen als alles is overgedragen."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Wat moet ik regelen voordat ik mijn oude bureau opzeg?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Zorg dat je beheerderstoegang hebt tot je eigen Google Ads account, je GA4 en je Google Tag Manager, allemaal op een mailadres van je bedrijf. Leg vast welke accounts van wie zijn. Pas als jij de sleutels in handen hebt, zeg je op. Doe je het andersom, dan loop je het risico dat de toegang verdwijnt voordat de overdracht rond is."
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
                    <nav className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-primary/50 mb-12">
                        <Link to="/" className="hover:text-accent transition-colors">Home</Link>
                        <ChevronRight className="w-3 h-3" />
                        <Link to="/nieuws" className="hover:text-accent transition-colors">Nieuws</Link>
                        <ChevronRight className="w-3 h-3" />
                        <Link to="/blogs/google-ads" className="hover:text-accent transition-colors">Google Ads</Link>
                        <ChevronRight className="w-3 h-3" />
                        <span className="text-primary truncate">Bureau wisselen zonder dataverlies</span>
                    </nav>

                    <header className="mb-16">
                        <div className="inline-block px-3 py-1 bg-accent/10 text-accent font-mono text-xs uppercase tracking-widest rounded-full mb-6">
                            Google Ads
                        </div>
                        <h1 className="font-sans font-bold text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight mb-8">
                            Google Ads bureau wisselen: stappenplan zonder dataverlies
                        </h1>
                        <div className="flex flex-wrap items-center gap-6 text-sm font-sans text-primary/60 border-y border-primary/10 py-6">
                            <div className="flex items-center gap-2"><User className="w-4 h-4" /><span>Empowers Redactie</span></div>
                            <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>2 juni 2026</span></div>
                            <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>9 minuten leestijd</span></div>
                        </div>
                    </header>

                    <figure className="w-full h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden mb-16 relative bg-primary">
                        <div className="absolute inset-0 bg-[url('/images/blogs/google-ads-bureau-wisselen-zonder-dataverlies.jpg')] bg-cover bg-center opacity-40 mix-blend-overlay" style={{ backgroundImage: "url('/images/blogs/google-ads-bureau-wisselen-zonder-dataverlies.jpg')" }}></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </figure>

                    <div className="prose prose-lg max-w-none prose-headings:text-primary prose-headings:font-bold prose-a:text-accent prose-a:underline hover:prose-a:text-accent/80">
                        <p className="text-xl leading-relaxed text-primary/80 font-medium mb-6">
                            Van Google Ads bureau wisselen hoeft je geen euro aan data te kosten. Het geheim zit in één ding: blijf in hetzelfde account. Je hele campagnehistorie en al je conversies horen bij jouw Google Ads account, niet bij het bureau. Zorg dat het account op jouw naam staat, verwijder alleen de toegang van het oude bureau en koppel het nieuwe eraan. Dan loopt alles door en hoef je niets opnieuw op te bouwen.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat verlies je als je van Google Ads bureau wisselt?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            In de meeste gevallen niets, mits je het goed aanpakt. De gevreesde dataverlies-verhalen ontstaan bijna altijd op één manier: het nieuwe bureau zet een vers account op en laat het oude liggen. Dan begin je weer bij nul. Geen historie, geen leerdata, geen bewezen zoekwoorden. Alles wat in maanden is opgebouwd, blijft achter in een account waar niemand meer naar kijkt.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Het echte risico zit dus niet in de overstap zelf, maar in een verkeerde aanname. Mensen denken dat data bij het bureau hoort. Dat klopt niet. Je campagnes, je conversies en je hele geschiedenis zitten vast aan het Google Ads account, en dat account kan gewoon van jou zijn. Een bureau is een huurder met een sleutel, geen eigenaar van het huis.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Wat je wel even merkt, is een korte periode van minder grip tijdens de overdracht. Even twee handen aan het stuur, even afstemmen wie wat doet. Die ruis is normaal en kort. Echt verlies ontstaat pas als de toegang of de tracking niet goed geregeld is voordat het oude bureau de deur achter zich dichttrekt.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wie is eigenaar van je Google Ads account?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Dit is de eerste vraag die je moet beantwoorden, en hij is belangrijker dan welke campagne dan ook. Een Google Ads account heeft een eigen klantnummer en staat los van het beheeraccount waarmee een bureau het beheert. Staat jouw account op een mailadres van je eigen bedrijf met beheerderstoegang, dan ben jij de baas. Het bureau koppelt zich er alleen aan.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Het wordt lastiger als het bureau het account ooit zelf heeft aangemaakt onder zijn eigen beheer. Technisch werkt dat prima, tot je weg wilt. Dan kan het bureau bepalen of jij toegang houdt. Een net bureau draagt het keurig over. Maar je wilt niet afhankelijk zijn van de goede wil van iemand bij wie je net hebt opgezegd.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een veelgemaakte fout die we tegenkomen: ondernemers die jaren adverteren en pas bij hun vertrek ontdekken dat het account nooit echt van henzelf was. Voorkom dat door het nu te checken. Log in op je Google Ads account, kijk onder de toegangsinstellingen wie er beheerderstoegang heeft en op welk mailadres het account staat. Hoort daar een adres van je eigen bedrijf bij, dan zit je goed.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe wissel je van bureau zonder data te verliezen?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Begin altijd met de sleutels voordat je iets opzegt. Zorg dat jij beheerderstoegang hebt tot je eigen Google Ads account, je GA4-property en je Google Tag Manager, allemaal op een mailadres van je bedrijf. Pas als jij die toegang zwart op wit hebt, breng je het oude bureau op de hoogte. Andersom werken is vragen om problemen, want dan kan toegang verdwijnen voordat de overdracht rond is.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Laat daarna het nieuwe bureau zijn beheeraccount aan je bestaande account koppelen, terwijl het oude bureau er nog op zit. Die overlap is bewust. De campagnes blijven gewoon draaien en niemand zet iets stil. Pas als het nieuwe bureau erin kan en alles heeft gecontroleerd, haal je de toegang van het oude bureau eraf. Geen gat, geen stilstand, geen verloren dag.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Vraag het nieuwe bureau om eerst te kijken en te begrijpen voordat het ingrijpt. Een goede overstap begint met een week waarin het nieuwe bureau de cijfers leest, niet de campagnes omgooit. Wie op dag één alles verandert, gooit de leerdata van Google overhoop en maakt zo alsnog het dataverlies dat je juist wilde voorkomen. Hoe je beoordeelt of een nieuw bureau echt goed werk levert, lees je in onze blog over <Link to="/blogs/google-ads/google-ads-specialist-checken-goed-werk" className="text-accent hover:underline">het checken of je specialist goed werk levert</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe behoud je je conversiedata en tracking?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Conversiemeting is het stuk waar het in de praktijk het vaakst misgaat. Niet omdat het moeilijk is, maar omdat niemand even checkt waar de meting precies vandaan komt. Veel conversies worden gemeten via een tag in Google Tag Manager of geïmporteerd vanuit GA4. Staan die tools op een account van het bureau, dan loopt de meting het risico om te stoppen zodra het bureau vertrekt.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Zorg daarom dat je Google Tag Manager en je GA4 op een mailadres van je eigen bedrijf staan en dat jij daar beheerder bent. Dan blijft de meting doorlopen, ongeacht wie de campagnes beheert. Het nieuwe bureau pakt simpelweg de bestaande tracking op en hoeft niets opnieuw in te richten. Dat scheelt niet alleen tijd, het voorkomt ook een gat in je cijfers precies tijdens de overstap.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Check ook of je conversies kloppen voordat je iemand laat sleutelen. Een overstap is een goed moment om te zien of er dubbel wordt gemeten of dat er conversies tellen die geen echte klant zijn. Begint het nieuwe bureau met schone, betrouwbare cijfers, dan kan het meteen op de juiste dingen sturen. Hoe je die cijfers zuiver houdt, behandelen we in onze blog over <Link to="/blogs/google-ads/meet-roi-google-ads-campagne" className="text-accent hover:underline">het meten van de ROI van je Google Ads-campagne</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat gebeurt er met de leerfase na een overstap?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Zolang de campagnes blijven staan, gebeurt er weinig. De leerdata die Google heeft opgebouwd, zit in het account en in de bestaande campagnes. Wissel je alleen van beheerder zonder de campagnes te verbouwen, dan blijft die kennis behouden en draait alles gewoon door. Dat is precies waarom in hetzelfde account blijven zo veel waard is.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Het gaat pas schuiven als het nieuwe bureau grote wijzigingen doorvoert. Nieuwe campagnes, een ander biedmodel of een flinke herstructurering zetten het leerproces deels opnieuw aan. Soms is dat nodig en de moeite waard, maar het is een keuze, geen verplichting. Een goed bureau legt uit wat een wijziging kost aan tijdelijke onrust en wat hij ervoor terugverwacht.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De truc is dus: behoud eerst wat werkt, verbeter daarna stap voor stap. Niet alles in één keer omgooien omdat het nieuw en spannend is. Het verschil tussen een soepele overstap en een paar verloren weken zit bijna altijd in hoe rustig het nieuwe bureau begint.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wanneer kun je het beste overstappen?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Kies een rustige periode, niet je drukste verkoopmaand. Rond een overstap is er even iets minder controle, en dat wil je niet midden in een piek zoals de feestdagen of je hoogseizoen. Plan de overdracht in een maand waarin een paar dagen extra aandacht geen omzet kost als er even iets hapert.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Let ook op je contract. Veel bureaus werken met een opzegtermijn van een maand. Regel de toegang en de accounts in die opzegmaand, terwijl de campagnes nog gewoon lopen. Zo gebruik je de overlap in je voordeel in plaats van dat je achteraf moet repareren wat je had moeten regelen. Twijfel je überhaupt of je moet wisselen, dan helpt onze blog over <Link to="/blogs/google-ads/sea-bureau-wisselen-overstappen" className="text-accent hover:underline">wanneer en hoe je van SEA bureau overstapt</Link> je bij die afweging.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat je vandaag al kunt regelen</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Log in op je Google Ads account en kijk wie er beheerderstoegang heeft en op welk mailadres het staat. Doe daarna hetzelfde voor je GA4 en je Google Tag Manager. Klopt het dat alles op je eigen bedrijf staat, dan ben je een overstap altijd de baas, of je nu vandaag wisselt of over een jaar.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Van Google Ads bureau wisselen is geen sprong in het diepe, het is een nette sleuteloverdracht. Zorg dat je account en je tracking van jou zijn, laat het nieuwe bureau rustig instappen en behoud wat werkt. Wil je sparren over een overstap zonder dataverlies? Plan een gratis gesprek via <Link to="/contact" className="text-accent hover:underline">empowers.nl/contact</Link>.
                        </p>
                    </div>

                    <section className="mt-16 pt-12 border-t border-primary/10">
                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Veelgestelde vragen</h2>
                        <div className="space-y-6 not-prose">
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Verlies ik mijn data als ik van Google Ads bureau wissel?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Niet als je in hetzelfde Google Ads account blijft werken. Alle historie, conversies en campagnes horen bij het account, niet bij het bureau. Zolang het account op jouw naam staat en je alleen de toegang van het oude bureau verwijdert, blijft alles bewaard. Het misgaat pas als een nieuw bureau een vers account opzet en je oude account laat liggen.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wie is eigenaar van mijn Google Ads account?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Dat hangt af van hoe het account ooit is aangemaakt. Staat het op een e-mailadres van jouw bedrijf met beheerderstoegang, dan ben jij de eigenaar en koppelt het bureau zich er alleen aan via zijn beheeraccount. Heeft het bureau het account zelf aangemaakt onder zijn eigen beheer, dan is dat een risico. Vraag dit altijd na voordat je opzegt.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Moet ik een nieuw Google Ads account aanmaken bij een nieuw bureau?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Bij voorkeur niet. Een nieuw account betekent dat je alle historie en de opgebouwde leerdata kwijtraakt en dat campagnes weer vanaf nul moeten leren. Een goed bureau werkt gewoon verder in je bestaande account door zijn beheeraccount eraan te koppelen. Alleen als je oude account echt verkeerd is opgezet, kan opnieuw beginnen verstandig zijn.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoe behoud ik mijn conversietracking bij een overstap?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Controleer of je conversies worden gemeten via tags die in jouw eigen Google Tag Manager en GA4 staan, niet in accounts van het bureau. Vraag toegang tot die accounts of zorg dat ze op jouw bedrijfsmail staan. Zo blijft de meting doorlopen als het bureau vertrekt en hoeft het nieuwe bureau de tracking niet opnieuw op te bouwen.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wanneer kun je het beste van Google Ads bureau wisselen?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Het liefst in een rustige periode, niet vlak voor je drukste verkoopmaand. Rond een overstap is even minder controle en dat wil je niet tijdens een piek. Regel de toegang en accounts terwijl de campagnes gewoon doorlopen, en laat het nieuwe bureau pas grote wijzigingen doen als alles is overgedragen.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat moet ik regelen voordat ik mijn oude bureau opzeg?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Zorg dat je beheerderstoegang hebt tot je eigen Google Ads account, je GA4 en je Google Tag Manager, allemaal op een mailadres van je bedrijf. Leg vast welke accounts van wie zijn. Pas als jij de sleutels in handen hebt, zeg je op. Doe je het andersom, dan loop je het risico dat de toegang verdwijnt voordat de overdracht rond is.</p>
                            </div>
                        </div>
                    </section>

                    <section className="mt-16 pt-12 border-t border-primary/10">
                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Lees ook</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <Link to="/blogs/google-ads/sea-bureau-wisselen-overstappen" className="block border border-primary/10 rounded-xl p-6 hover:border-accent transition-colors">
                                <div className="text-xs font-mono uppercase tracking-widest text-accent mb-2">Google Ads</div>
                                <h3 className="font-sans font-semibold text-primary text-lg mb-2">SEA bureau wisselen: wanneer en hoe stap je over?</h3>
                                <p className="font-sans text-primary/70 text-sm">De signalen die wijzen op een overstap en hoe je dat aanpakt zonder gedoe.</p>
                            </Link>
                            <Link to="/blogs/google-ads/google-ads-specialist-checken-goed-werk" className="block border border-primary/10 rounded-xl p-6 hover:border-accent transition-colors">
                                <div className="text-xs font-mono uppercase tracking-widest text-accent mb-2">Google Ads</div>
                                <h3 className="font-sans font-semibold text-primary text-lg mb-2">Levert je Google Ads specialist goed werk?</h3>
                                <p className="font-sans text-primary/70 text-sm">Waaraan je ziet of er echt aan je account wordt gewerkt en welke rode vlaggen je herkent.</p>
                            </Link>
                        </div>
                    </section>
                </div>
            </article>

            <section className="w-full pb-32 px-6">
                <div className="max-w-4xl mx-auto bg-primary rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
                    <h2 className="relative z-10 font-drama italic text-background text-3xl sm:text-4xl md:text-5xl mb-6">Overstappen zonder iets te verliezen?</h2>
                    <p className="relative z-10 font-sans text-background/70 text-lg mb-10 max-w-xl mx-auto">In een gesprek van een halfuur kijken we naar je account en je tracking en vertellen we precies wat je moet regelen voor een soepele overstap. Geen mooie beloftes, wel een helder plan.</p>
                    <Link to="/contact" className="relative z-10 btn-magnetic inline-flex items-center justify-center bg-accent text-background font-sans font-bold text-lg px-10 py-4 rounded-[2rem] hover:bg-accent/90 transition-colors">Neem contact op</Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
