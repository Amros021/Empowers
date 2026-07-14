import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ChevronRight, User } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function BlogPostTiktokAdvertentiescriptConverteert() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen selection:bg-accent/30 selection:text-dark flex flex-col bg-background">
            <Helmet>
                <title>Hoe schrijf je een TikTok advertentiescript dat converteert? | Empowers</title>
                <meta name="description" content="Een TikTok advertentiescript dat converteert begint met een sterke hook en stuurt naar één actie. Zo bouw je een script op dat kijkers naar de aankoop leidt." />
                <link rel="canonical" href="https://www.empowers.nl/blogs/social-ads/tiktok-advertentiescript-converteert" />
                <meta property="og:title" content="Hoe schrijf je een TikTok advertentiescript dat converteert?" />
                <meta property="og:description" content="Een TikTok advertentiescript dat converteert begint met een sterke hook en stuurt naar één actie. Zo bouw je een script op dat kijkers naar de aankoop leidt." />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://www.empowers.nl/blogs/social-ads/tiktok-advertentiescript-converteert" />
                <meta property="og:image" content="https://www.empowers.nl/images/blogs/tiktok-advertentiescript-converteert.jpg" />
                <meta property="article:published_time" content="2026-07-03T12:00:00+02:00" />
                <meta property="article:author" content="Empowers" />
                <meta property="article:section" content="Social Ads" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Hoe schrijf je een TikTok advertentiescript dat converteert?" />
                <meta name="twitter:description" content="Een TikTok advertentiescript dat converteert begint met een sterke hook en stuurt naar één actie. Zo bouw je een script op dat kijkers naar de aankoop leidt." />

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@graph": [
                            {
                                "@type": "Article",
                                "headline": "Hoe schrijf je een TikTok advertentiescript dat converteert?",
                                "description": "Een TikTok advertentiescript dat converteert begint met een sterke hook en stuurt naar één actie. Zo bouw je een script op dat kijkers naar de aankoop leidt.",
                                "image": "https://www.empowers.nl/images/blogs/tiktok-advertentiescript-converteert.jpg",
                                "datePublished": "2026-07-03T12:00:00+02:00",
                                "dateModified": "2026-07-03T12:00:00+02:00",
                                "author": { "@type": "Organization", "name": "Empowers" },
                                "publisher": {
                                    "@type": "Organization", "name": "Empowers", "url": "https://www.empowers.nl",
                                    "logo": { "@type": "ImageObject", "url": "https://www.empowers.nl/empowers-logo-color.svg" }
                                },
                                "mainEntityOfPage": "https://www.empowers.nl/blogs/social-ads/tiktok-advertentiescript-converteert"
                            },
                            {
                                "@type": "BreadcrumbList",
                                "itemListElement": [
                                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.empowers.nl" },
                                    { "@type": "ListItem", "position": 2, "name": "Blogs", "item": "https://www.empowers.nl/blogs" },
                                    { "@type": "ListItem", "position": 3, "name": "Social Ads", "item": "https://www.empowers.nl/blogs/social-ads" },
                                    { "@type": "ListItem", "position": 4, "name": "TikTok advertentiescript", "item": "https://www.empowers.nl/blogs/social-ads/tiktok-advertentiescript-converteert" }
                                ]
                            },
                            {
                                "@type": "FAQPage",
                                "mainEntity": [
                                    {
                                        "@type": "Question",
                                        "name": "Hoe lang moet een TikTok advertentiescript zijn?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Kort. De meeste TikTok-advertenties presteren goed rond de tien tot twintig seconden, wat neerkomt op een script van ongeveer dertig tot vijftig woorden. Je hebt weinig tijd, dus elke zin moet ergens toe dienen. Schrijf eerst alles op en schrap daarna alles wat de kijker niet dichter bij de aankoop brengt."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Wat is een goede hook voor een TikTok-advertentie?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Een hook die meteen een herkenbaar probleem of een verrassend statement neerlegt. Iets als 'Dit deed ik fout met mijn huid' of 'Stop met dit te kopen'. De eerste twee seconden bepalen of iemand blijft kijken, dus daar zet je je sterkste zin. Begin nooit met een logo of een rustige intro."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Welke structuur werkt voor een TikTok-script?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Een opbouw van hook, waarde en actie. Je opent met een hook die de aandacht grijpt, laat daarna kort zien wat je product oplost of doet, en eindigt met één duidelijke oproep. Houd het bij één boodschap per video. Wil je meer vertellen, maak dan een tweede video in plaats van er alles in te proppen."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Hoe houd je een advertentiescript native op TikTok?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Schrijf zoals mensen praten, niet zoals een reclame klinkt. Spreek één persoon aan, gebruik gewone woorden en laat het product zien in plaats van het op te hemelen. Een script dat aanvoelt als een tip van een vriend werkt beter dan een gladde verkooptekst, omdat kijkers op TikTok wegscrollen zodra iets te veel op een advertentie lijkt."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Welke call-to-action werkt op TikTok?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Eén concrete actie die past bij het moment. 'Tik op de link en bekijk het zelf' of 'Bestel met de knop hieronder'. Houd het simpel en vraag maar één ding. Een script dat naar drie dingen tegelijk stuurt, levert vaak niets op, omdat de kijker niet weet wat hij moet doen."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Moet je meerdere scripts testen?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Ja. Je weet vooraf nooit zeker welke hook of insteek aanslaat, dus schrijf een paar varianten en laat ze tegen elkaar lopen. Vaak verschilt alleen de eerste zin. De winnaar geef je meer budget, de rest stop je. Zo bouw je in een paar weken een beeld op van wat bij jouw publiek werkt."
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
                        <Link to="/blogs/social-ads" className="hover:text-accent transition-colors">Social Ads</Link>
                        <ChevronRight className="w-3 h-3" />
                        <span className="text-primary truncate">TikTok advertentiescript</span>
                    </nav>

                    <header className="mb-16">
                        <div className="inline-block px-3 py-1 bg-accent/10 text-accent font-mono text-xs uppercase tracking-widest rounded-full mb-6">
                            Social Ads
                        </div>
                        <h1 className="font-sans font-bold text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight mb-8">
                            Hoe schrijf je een TikTok advertentiescript dat converteert?
                        </h1>

                        <div className="flex flex-wrap items-center gap-6 text-sm font-sans text-primary/60 border-y border-primary/10 py-6">
                            <div className="flex items-center gap-2"><User className="w-4 h-4" /><span>Empowers Redactie</span></div>
                            <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>3 juli 2026</span></div>
                            <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>7 minuten leestijd</span></div>
                        </div>
                    </header>

                    <figure className="w-full h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden mb-16 relative bg-primary">
                        <div className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-overlay" style={{backgroundImage: "url('/images/blogs/tiktok-advertentiescript-converteert.jpg')"}}></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </figure>

                    <div className="prose prose-lg max-w-none prose-headings:text-primary prose-headings:font-bold prose-a:text-accent prose-a:underline hover:prose-a:text-accent/80">
                        <p className="text-xl leading-relaxed text-primary/80 font-medium mb-6">
                            Een script dat converteert begint met een hook die in de eerste twee seconden de aandacht pakt, laat daarna kort zien wat je product oplost en stuurt naar één duidelijke actie. Houd het kort, schrijf zoals mensen praten en blijf bij één boodschap. Op TikTok beslist de kijker in een oogwenk of hij blijft of wegscrolt, dus elke zin moet zijn plek verdienen.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat maakt een TikTok-script dat converteert?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een goed script doet maar één ding tegelijk en doet dat goed. Het pakt de aandacht, maakt iets duidelijk en vraagt om een actie. Geen drie boodschappen door elkaar, geen lange aanloop. Hoe gerichter je script, hoe groter de kans dat de kijker doet wat je wilt.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Het verschil met een gewone reclame zit in de toon. Op TikTok werkt iets dat klinkt als een tip van een bekende beter dan een gladde verkoopzin. Mensen scrollen weg zodra iets te veel op een advertentie lijkt. Je schrijft dus niet om indruk te maken, maar om herkend te worden.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe schrijf je een sterke hook?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De hook is de belangrijkste zin van je hele script. In de eerste twee seconden beslist iemand of hij blijft kijken. Open daarom met een herkenbaar probleem of een statement dat verrast. Iets als "Dit deed ik jaren fout" of "Stop met dit kopen" trekt mensen erin, omdat het meteen een belofte of een spanning oproept.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Begin nooit met een logo, een rustige intro of een opsomming van wie je bent. Die seconden zijn te kostbaar. Welke openingen het op TikTok goed doen, laten we zien in onze blog over <Link to="/blogs/social-ads/tiktok-ads-video-converteert" className="text-accent hover:underline">TikTok-video's die converteren</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Welke structuur werkt voor een TikTok-script?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Bouw je script op in drie delen: hook, waarde en actie. Je opent met de hook die de aandacht grijpt. Daarna laat je in een paar zinnen zien wat je product oplost of doet, het liefst door het te tonen in plaats van het te beschrijven. En je sluit af met één heldere oproep om iets te doen.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Blijf bij één boodschap per video. De verleiding is groot om alle voordelen te noemen, maar dat verwatert je verhaal. Heb je meer te vertellen, maak dan een tweede video. Bij adverteerders zien we dat juist de simpele, gerichte scripts het vaakst tot verkoop leiden.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe houd je het script native?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Schrijf zoals je tegen één persoon zou praten. Gebruik gewone woorden, korte zinnen en de taal van je doelgroep. Een script dat aanvoelt als een eerlijk advies werkt beter dan een tekst vol superlatieven. Laat het product zien in actie, want tonen overtuigt sterker dan opsommen.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Lees je script hardop voor voordat je filmt. Struikel je over een zin, dan struikelt de kijker er ook over. Klinkt het als iets dat een echt mens zou zeggen, dan zit je goed. Hoe je content maakt die niet als reclame aanvoelt, lees je in onze blog over <Link to="/blogs/social-ads/tiktok-adverteren-viral-te-hoeven" className="text-accent hover:underline">adverteren op TikTok zonder viraal te hoeven gaan</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Welke call-to-action werkt op TikTok?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Vraag om één ding, en maak het concreet. "Tik op de link en bekijk het zelf" of "Bestel via de knop hieronder" werkt beter dan een vage uitnodiging om eens te kijken. De kijker moet zonder nadenken weten wat de volgende stap is. Stuur je naar drie dingen tegelijk, dan doet hij vaak niets.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Zet de oproep op het juiste moment. Te vroeg en de kijker is nog niet overtuigd, te laat en hij is al weg. Vaak werkt het om de actie te noemen net nadat je hebt laten zien wat je product oplost, als de interesse op zijn hoogst is.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Waar begin je deze week?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Pak één product en schrijf er drie korte scripts voor, elk met een andere hook. Houd ze rond de tien tot twintig seconden en stuur in alle drie naar dezelfde actie. Lees ze hardop, schrap wat niet nodig is en film ze zonder ze te perfect te maken.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Laat de drie versies tegen elkaar lopen en kijk welke hook het meeste oplevert. Die geef je meer budget, de rest stop je. Wil je sparren over scripts die bij jouw product passen? Plan een gesprek via empowers.nl/contact.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Veelgestelde vragen</h2>
                    </div>

                    <section className="mt-4">
                        <div className="space-y-6 not-prose">
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoe lang moet een TikTok advertentiescript zijn?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Kort. De meeste TikTok-advertenties presteren goed rond de tien tot twintig seconden, wat neerkomt op een script van ongeveer dertig tot vijftig woorden. Je hebt weinig tijd, dus elke zin moet ergens toe dienen. Schrijf eerst alles op en schrap daarna alles wat de kijker niet dichter bij de aankoop brengt.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat is een goede hook voor een TikTok-advertentie?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Een hook die meteen een herkenbaar probleem of een verrassend statement neerlegt. Iets als 'Dit deed ik fout met mijn huid' of 'Stop met dit te kopen'. De eerste twee seconden bepalen of iemand blijft kijken, dus daar zet je je sterkste zin. Begin nooit met een logo of een rustige intro.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Welke structuur werkt voor een TikTok-script?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Een opbouw van hook, waarde en actie. Je opent met een hook die de aandacht grijpt, laat daarna kort zien wat je product oplost of doet, en eindigt met één duidelijke oproep. Houd het bij één boodschap per video. Wil je meer vertellen, maak dan een tweede video in plaats van er alles in te proppen.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoe houd je een advertentiescript native op TikTok?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Schrijf zoals mensen praten, niet zoals een reclame klinkt. Spreek één persoon aan, gebruik gewone woorden en laat het product zien in plaats van het op te hemelen. Een script dat aanvoelt als een tip van een vriend werkt beter dan een gladde verkooptekst, omdat kijkers op TikTok wegscrollen zodra iets te veel op een advertentie lijkt.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Welke call-to-action werkt op TikTok?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Eén concrete actie die past bij het moment. 'Tik op de link en bekijk het zelf' of 'Bestel met de knop hieronder'. Houd het simpel en vraag maar één ding. Een script dat naar drie dingen tegelijk stuurt, levert vaak niets op, omdat de kijker niet weet wat hij moet doen.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Moet je meerdere scripts testen?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Ja. Je weet vooraf nooit zeker welke hook of insteek aanslaat, dus schrijf een paar varianten en laat ze tegen elkaar lopen. Vaak verschilt alleen de eerste zin. De winnaar geef je meer budget, de rest stop je. Zo bouw je in een paar weken een beeld op van wat bij jouw publiek werkt.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="mt-16 pt-12 border-t border-primary/10">
                        <h3 className="text-xl font-bold text-primary mb-6">Lees ook</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <Link to="/blogs/social-ads/tiktok-ads-video-converteert" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Video's die converteren</h3>
                                <p className="text-primary/60 text-sm">Welke content tot verkoop aanzet.</p>
                            </Link>
                            <Link to="/blogs/social-ads/tiktok-adverteren-viral-te-hoeven" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Zonder viraal te hoeven gaan</h3>
                                <p className="text-primary/60 text-sm">Adverteren dat ook zonder hype werkt.</p>
                            </Link>
                            <Link to="/blogs/social-ads/tiktok-adverteren-2026-complete-gids-beginners" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Complete gids voor beginners</h3>
                                <p className="text-primary/60 text-sm">Zo start je met adverteren op TikTok.</p>
                            </Link>
                        </div>
                    </section>
                </div>
            </article>

            <section className="w-full pb-32 px-6">
                <div className="max-w-4xl mx-auto bg-primary rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
                    <h2 className="relative z-10 font-drama italic text-background text-3xl sm:text-4xl md:text-5xl mb-6">Scripts die kijkers laten kopen</h2>
                    <p className="relative z-10 font-sans text-background/70 text-lg mb-10 max-w-xl mx-auto">We schrijven en testen TikTok-scripts die sturen op verkoop in plaats van op losse views. Benieuwd wat dat voor jouw product oplevert?</p>
                    <Link to="/contact" className="relative z-10 btn-magnetic inline-flex items-center justify-center bg-accent text-background font-sans font-bold text-lg px-10 py-4 rounded-[2rem] hover:bg-accent/90 transition-colors">Neem contact op</Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
