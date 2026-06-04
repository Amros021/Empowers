import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ChevronRight, User } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function BlogPostVerschilDomeinautoriteitTopicalAuthority() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen selection:bg-accent/30 selection:text-dark flex flex-col bg-background">
            <Helmet>
                <title>Wat is het verschil tussen domeinautoriteit en topical authority | Empowers</title>
                <meta name="description" content="Domeinautoriteit vs topical authority: wat is het verschil, wat weegt zwaarder voor jouw SEO en hoe bouw je het op? Helder uitgelegd voor het MKB." />
                <meta name="keywords" content="domeinautoriteit vs topical authority, verschil domeinautoriteit topical authority, wat is domeinautoriteit, wat is topical authority, onderwerpautoriteit seo" />
                <link rel="canonical" href="https://www.empowers.nl/blogs/seo/verschil-tussen-domeinautoriteit-topical-authority" />
                <meta property="og:title" content="Wat is het verschil tussen domeinautoriteit en topical authority" />
                <meta property="og:description" content="Domeinautoriteit kijkt naar je backlinks en je domein als geheel, topical authority naar je inhoudelijke gezag op een thema. Zo zet je beide in." />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://www.empowers.nl/blogs/seo/verschil-tussen-domeinautoriteit-topical-authority" />
                <meta property="og:image" content="https://www.empowers.nl/images/blogs/verschil-tussen-domeinautoriteit-topical-authority.jpg" />
                <meta property="article:published_time" content="2026-06-04" />
                <meta property="article:author" content="Empowers" />
                <meta property="article:section" content="SEO" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Wat is het verschil tussen domeinautoriteit en topical authority" />
                <meta name="twitter:description" content="Domeinautoriteit kijkt naar je backlinks, topical authority naar je inhoudelijke gezag op een thema. Zo zet je beide in." />

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@graph": [
                            {
                                "@type": "Article",
                                "headline": "Wat is het verschil tussen domeinautoriteit en topical authority",
                                "description": "Domeinautoriteit vs topical authority: wat is het verschil, wat weegt zwaarder voor jouw SEO en hoe bouw je het op? Helder uitgelegd voor het MKB.",
                                "image": "https://www.empowers.nl/images/blogs/verschil-tussen-domeinautoriteit-topical-authority.jpg",
                                "datePublished": "2026-06-04T09:00:00+02:00",
                                "dateModified": "2026-06-04T09:00:00+02:00",
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
                                    { "@type": "ListItem", "position": 3, "name": "SEO", "item": "https://www.empowers.nl/blogs/seo" },
                                    { "@type": "ListItem", "position": 4, "name": "Domeinautoriteit vs topical authority", "item": "https://www.empowers.nl/blogs/seo/verschil-tussen-domeinautoriteit-topical-authority" }
                                ]
                            },
                            {
                                "@type": "FAQPage",
                                "mainEntity": [
                                    {
                                        "@type": "Question",
                                        "name": "Is domeinautoriteit een officiele rankingfactor van Google?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Nee. Domeinautoriteit is een score die door externe tools wordt berekend, niet door Google. Google heeft meermaals bevestigd geen enkele domeinbrede autoriteitsscore te gebruiken die je kunt zien. De score is handig als inschatting van je linkprofiel, maar je kunt er niet van uitgaan dat een hoger getal automatisch een hogere positie betekent."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Wat is belangrijker voor het MKB: domeinautoriteit of topical authority?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Voor de meeste MKB-sites levert topical authority sneller resultaat op. Je kunt zelden concurreren op puur linkgewicht met grote merken, maar je kunt wel het meest complete antwoord op een afgebakend onderwerp zijn. Door een thema diep en volledig te behandelen, win je posities zonder dat je een enorm backlinkprofiel nodig hebt."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Hoe meet je topical authority?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Er is geen los scorecijfer voor topical authority zoals bij domeinautoriteit. Je leidt het af uit signalen: hoeveel zoekwoorden binnen een thema rank je, hoe diep dekt je content de subonderwerpen en stijgen je posities op verwante zoekopdrachten samen. Stijgt een hele groep zoektermen rondom een onderwerp, dan bouw je gezag op dat thema op."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Wat is een goede domeinautoriteitsscore?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Dat hangt af van je branche en je concurrenten. De scores lopen van ongeveer 1 tot 100 en zijn logaritmisch, dus stijgen wordt moeilijker naarmate het getal hoger ligt. Vergelijk jezelf niet met een willekeurige norm, maar met de sites waarmee je in de zoekresultaten concurreert. Zit je in de buurt van die spelers, dan zit je goed."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Verhogen backlinks ook je topical authority?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Indirect wel. Links van sites die over hetzelfde thema gaan, versterken je geloofwaardigheid op dat onderwerp meer dan een willekeurige link. Een backlink van een vakblad in jouw sector telt zwaarder voor je onderwerpgezag dan tien losse links zonder verband. Backlinks en onderwerpdekking werken dus het beste samen."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Hoelang duurt het om topical authority op te bouwen?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Reken op enkele maanden voordat een onderwerpcluster echt begint te ranken, afhankelijk van de concurrentie en hoeveel content je publiceert. Het gaat niet om een losse blog, maar om een samenhangende reeks artikelen rond een thema. Hoe vollediger en sneller je dat cluster afmaakt, hoe eerder Google je als bron op dat onderwerp herkent."
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
                        <Link to="/blogs/seo" className="hover:text-accent transition-colors">SEO</Link>
                        <ChevronRight className="w-3 h-3" />
                        <span className="text-primary truncate">Domeinautoriteit vs topical authority</span>
                    </nav>

                    <header className="mb-16">
                        <div className="inline-block px-3 py-1 bg-accent/10 text-accent font-mono text-xs uppercase tracking-widest rounded-full mb-6">
                            SEO
                        </div>
                        <h1 className="font-sans font-bold text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight mb-8">
                            Wat is het verschil tussen domeinautoriteit en topical authority
                        </h1>
                        <div className="flex flex-wrap items-center gap-6 text-sm font-sans text-primary/60 border-y border-primary/10 py-6">
                            <div className="flex items-center gap-2"><User className="w-4 h-4" /><span>Empowers Redactie</span></div>
                            <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>4 juni 2026</span></div>
                            <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>8 minuten leestijd</span></div>
                        </div>
                    </header>

                    <figure className="w-full h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden mb-16 relative bg-primary">
                        <div className="absolute inset-0 bg-[url('/images/blogs/verschil-tussen-domeinautoriteit-topical-authority.jpg')] bg-cover bg-center opacity-40 mix-blend-overlay" style={{ backgroundImage: "url('/images/blogs/verschil-tussen-domeinautoriteit-topical-authority.jpg')" }}></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </figure>

                    <div className="prose prose-lg max-w-none prose-headings:text-primary prose-headings:font-bold prose-a:text-accent prose-a:underline hover:prose-a:text-accent/80">
                        <p className="text-xl leading-relaxed text-primary/80 font-medium mb-6">
                            Domeinautoriteit is een voorspellende score van externe SEO-tools die inschat hoe sterk je hele domein staat, vooral op basis van je backlinkprofiel. Topical authority gaat over hoe goed en volledig je een onderwerp behandelt. Het eerste kijkt naar je links en je domein als geheel, het tweede naar je inhoudelijke gezag op een thema. Google gebruikt geen zichtbare domeinautoriteitsscore, maar beloont wel sterke onderwerpdekking. Voor het MKB is dat tweede vaak het snelste pad naar hogere posities.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat is domeinautoriteit precies?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Domeinautoriteit is een cijfer dat tools als Moz en Ahrefs bedacht hebben om in te schatten hoe waarschijnlijk het is dat een website goed scoort. De score loopt grofweg van 1 tot 100 en is grotendeels gebaseerd op hoeveel en wat voor websites naar jou linken. Hoe meer sterke, betrouwbare sites naar je verwijzen, hoe hoger het getal.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Belangrijk om te weten: dit is een metric van een extern bedrijf, geen officieel cijfer van Google. Het is een handige inschatting van de kracht van je linkprofiel, maar het is een voorspelling en geen knop waar Google aan draait. Twee sites met hetzelfde getal kunnen op heel verschillende posities staan.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat is topical authority?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Topical authority is je inhoudelijke gezag op een bepaald onderwerp. Het draait om de vraag: behandel jij dit thema vollediger en geloofwaardiger dan de rest? Een site die over een onderwerp echt alles uitlegt, van de basisvraag tot de lastige details, bouwt gezag op dat thema op.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Google probeert te begrijpen waar een site over gaat en hoe diep die kennis reikt. Heb je tien samenhangende artikelen die samen een onderwerp volledig dekken, dan herkent Google je sneller als bron op dat thema. Dit sluit aan op hoe AI-zoekmachines werken, want die kiezen bronnen die een onderwerp aantoonbaar beheersen. Meer daarover lees je in onze blog over <Link to="/blogs/seo/semantische-seo-begrijpt-google-content" className="text-accent hover:underline">semantische SEO</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat is het belangrijkste verschil?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Domeinautoriteit kijkt naar je hele domein en vooral naar je links. Topical authority kijkt naar één thema en vooral naar je inhoud. De eerste vraagt: hoe sterk is je site in het algemeen? De tweede vraagt: hoe goed ben jij in dít specifieke onderwerp?
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Dat verschil heeft gevolgen voor je strategie. Een hoge domeinautoriteit helpt over de hele linie, maar is traag en duur om op te bouwen omdat het draait om backlinks. Topical authority kun je sturen met content: je kiest een thema en maakt het compleet. Daarom kan een kleinere site een groot merk verslaan op een specifiek onderwerp, terwijl datzelfde merk op brede zoektermen vooraan blijft staan.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Gebruikt Google domeinautoriteit als rankingfactor?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Nee, niet de score die je in tools ziet. Google heeft herhaaldelijk gezegd geen domeinbrede autoriteitsscore te gebruiken die overeenkomt met wat externe tools laten zien. Wat Google wel doet, is links wegen en beoordelen hoe betrouwbaar en relevant een pagina is voor een zoekvraag.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De verwarring zit in de naam. Mensen horen "autoriteit" en denken dat Google dat getal afleest. In werkelijkheid is het een hulpmiddel om je voortgang te volgen en jezelf met concurrenten te vergelijken. Gebruik het als thermometer, niet als doel op zich.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat weegt zwaarder voor het MKB?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Voor de meeste MKB-bedrijven en webshops weegt topical authority zwaarder, simpelweg omdat het haalbaarder is. Je gaat zelden winnen op puur linkgewicht tegen partijen met grote marketingbudgetten. Maar je kunt wel het meest complete antwoord zijn op de vragen van jouw doelgroep.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            We zien bij klanten dat een goed opgebouwd onderwerpcluster posities pakt op tientallen verwante zoektermen, zonder dat hun domeinautoriteit spectaculair stijgt. Het verkeer komt binnen omdat de content het thema afdekt, niet omdat het domein ineens veel sterker is. Dat maakt onderwerpgezag de slimste eerste zet voor wie met een beperkt budget wil groeien.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe bouw je topical authority op?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Kies een thema dat past bij wat je verkoopt en breng in kaart welke vragen je doelgroep daarover stelt. Maak vervolgens een samenhangende set artikelen die samen het hele onderwerp afdekken, van de instapvraag tot de specialistische details. Eén losse blog bouwt geen gezag op, een compleet cluster wel.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Link die artikelen onderling slim aan elkaar, zodat Google de samenhang ziet en begrijpt dat jij dit thema serieus behandelt. Werk daarnaast aan je geloofwaardigheid met echte ervaring en expertise, want dat weegt mee. Hoe je dat laatste aanpakt, lees je in onze blog over <Link to="/blogs/seo/eeat-belangrijk-voor-seo" className="text-accent hover:underline">waarom E-E-A-T belangrijk is voor SEO</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe verhouden backlinks en onderwerpdekking zich tot elkaar?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Ze versterken elkaar. Een goede inhoudelijke dekking geeft je iets waar mensen graag naar linken, en links van sites uit jouw vakgebied bevestigen je gezag op dat thema. Een backlink van een relevante branchesite telt voor je onderwerpgezag zwaarder dan een willekeurige link zonder verband.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De beste aanpak voor het MKB: bouw eerst je content uit tot een compleet cluster en verdien daarna gerichte links naar de sterkste pagina's daarin. Zo til je je onderwerpgezag én je linkprofiel tegelijk omhoog. Hoe je aan goede links komt, lees je in onze blog over <Link to="/blogs/seo/backlinks-opbouwen" className="text-accent hover:underline">backlinks opbouwen</Link>.
                        </p>
                    </div>

                    <section className="mt-16 pt-12 border-t border-primary/10">
                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Veelgestelde vragen</h2>
                        <div className="space-y-6 not-prose">
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Is domeinautoriteit een officiele rankingfactor van Google?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Nee. Domeinautoriteit is een score die door externe tools wordt berekend, niet door Google. Google heeft meermaals bevestigd geen enkele domeinbrede autoriteitsscore te gebruiken die je kunt zien. De score is handig als inschatting van je linkprofiel, maar je kunt er niet van uitgaan dat een hoger getal automatisch een hogere positie betekent.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat is belangrijker voor het MKB: domeinautoriteit of topical authority?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Voor de meeste MKB-sites levert topical authority sneller resultaat op. Je kunt zelden concurreren op puur linkgewicht met grote merken, maar je kunt wel het meest complete antwoord op een afgebakend onderwerp zijn. Door een thema diep en volledig te behandelen, win je posities zonder dat je een enorm backlinkprofiel nodig hebt.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoe meet je topical authority?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Er is geen los scorecijfer voor topical authority zoals bij domeinautoriteit. Je leidt het af uit signalen: hoeveel zoekwoorden binnen een thema rank je, hoe diep dekt je content de subonderwerpen en stijgen je posities op verwante zoekopdrachten samen. Stijgt een hele groep zoektermen rondom een onderwerp, dan bouw je gezag op dat thema op.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat is een goede domeinautoriteitsscore?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Dat hangt af van je branche en je concurrenten. De scores lopen van ongeveer 1 tot 100 en zijn logaritmisch, dus stijgen wordt moeilijker naarmate het getal hoger ligt. Vergelijk jezelf niet met een willekeurige norm, maar met de sites waarmee je in de zoekresultaten concurreert. Zit je in de buurt van die spelers, dan zit je goed.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Verhogen backlinks ook je topical authority?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Indirect wel. Links van sites die over hetzelfde thema gaan, versterken je geloofwaardigheid op dat onderwerp meer dan een willekeurige link. Een backlink van een vakblad in jouw sector telt zwaarder voor je onderwerpgezag dan tien losse links zonder verband. Backlinks en onderwerpdekking werken dus het beste samen.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoelang duurt het om topical authority op te bouwen?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Reken op enkele maanden voordat een onderwerpcluster echt begint te ranken, afhankelijk van de concurrentie en hoeveel content je publiceert. Het gaat niet om een losse blog, maar om een samenhangende reeks artikelen rond een thema. Hoe vollediger en sneller je dat cluster afmaakt, hoe eerder Google je als bron op dat onderwerp herkent.</p>
                            </div>
                        </div>
                    </section>

                    <section className="mt-16 pt-12 border-t border-primary/10">
                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Lees ook</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <Link to="/blogs/seo/semantische-seo-begrijpt-google-content" className="block border border-primary/10 rounded-xl p-6 hover:border-accent transition-colors">
                                <div className="text-xs font-mono uppercase tracking-widest text-accent mb-2">SEO</div>
                                <h3 className="font-sans font-semibold text-primary text-lg mb-2">Semantische SEO: zo begrijpt Google je content</h3>
                                <p className="font-sans text-primary/70 text-sm">Hoe Google de samenhang in je content leest en beloont.</p>
                            </Link>
                            <Link to="/blogs/seo/backlinks-opbouwen" className="block border border-primary/10 rounded-xl p-6 hover:border-accent transition-colors">
                                <div className="text-xs font-mono uppercase tracking-widest text-accent mb-2">SEO</div>
                                <h3 className="font-sans font-semibold text-primary text-lg mb-2">Backlinks opbouwen: zo doe je het goed</h3>
                                <p className="font-sans text-primary/70 text-sm">Sterke links verdienen die je domein echt vooruithelpen.</p>
                            </Link>
                        </div>
                    </section>
                </div>
            </article>

            <section className="w-full pb-32 px-6">
                <div className="max-w-4xl mx-auto bg-primary rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
                    <h2 className="relative z-10 font-drama italic text-background text-3xl sm:text-4xl md:text-5xl mb-6">Word de bron op jouw onderwerp</h2>
                    <p className="relative z-10 font-sans text-background/70 text-lg mb-10 max-w-xl mx-auto">In een gesprek van een halfuur kijken we welk thema voor jou het meest oplevert en hoe je daar het complete antwoord op wordt. Geen verkooppraatje, wel een helder plan.</p>
                    <Link to="/contact" className="relative z-10 btn-magnetic inline-flex items-center justify-center bg-accent text-background font-sans font-bold text-lg px-10 py-4 rounded-[2rem] hover:bg-accent/90 transition-colors">Neem contact op</Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
