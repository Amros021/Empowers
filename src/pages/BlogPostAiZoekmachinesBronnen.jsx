import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ChevronRight, User } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function BlogPostAiZoekmachinesBronnen() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen selection:bg-accent/30 selection:text-dark flex flex-col bg-background">
            <Helmet>
                <title>Hoe AI-zoekmachines bronnen kiezen: zo vergroot je jouw kans | Empowers</title>
                <meta name="description" content="ChatGPT, Perplexity en Google AI Overviews kiezen niet willekeurig welke bronnen ze citeren. Lees welke criteria zij gebruiken en hoe jij jouw kans vergroot om structureel aangehaald te worden." />
                <link rel="canonical" href="https://www.empowers.nl/blogs/geo/ai-zoekmachines-bronnen" />
                <meta property="og:title" content="Hoe AI-zoekmachines bronnen kiezen: zo vergroot je jouw kans" />
                <meta property="og:description" content="Lees welke criteria ChatGPT, Perplexity en Google AI Overviews gebruiken om bronnen te selecteren en hoe je jouw zichtbaarheid structureel vergroot." />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://www.empowers.nl/blogs/geo/ai-zoekmachines-bronnen" />
                <meta property="og:image" content="https://www.empowers.nl/images/blogs/ai-zoekmachines-bronnen.jpg" />
                <meta property="article:published_time" content="2026-04-15" />
                <meta property="article:author" content="Empowers" />
                <meta property="article:section" content="GEO" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Hoe AI-zoekmachines bronnen kiezen: zo vergroot je jouw kans" />
                <meta name="twitter:description" content="Lees hoe ChatGPT en Perplexity bronnen selecteren en vergroot jouw kans om geciteerd te worden." />

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Article",
                        "headline": "Hoe AI-zoekmachines bronnen kiezen: zo vergroot je jouw kans",
                        "description": "ChatGPT, Perplexity en Google AI Overviews kiezen niet willekeurig welke bronnen ze citeren. Lees welke criteria zij gebruiken en hoe jij jouw kans vergroot om structureel aangehaald te worden.",
                        "image": "https://www.empowers.nl/images/blogs/ai-zoekmachines-bronnen.jpg",
                        "datePublished": "2026-04-15T08:00:00+02:00",
                        "author": { "@type": "Organization", "name": "Empowers" },
                        "publisher": {
                            "@type": "Organization",
                            "name": "Empowers",
                            "url": "https://www.empowers.nl",
                            "logo": { "@type": "ImageObject", "url": "https://www.empowers.nl/empowers-logo-color.svg" }
                        },
                        "mainEntity": {
                            "@type": "FAQPage",
                            "mainEntity": [
                                {
                                    "@type": "Question",
                                    "name": "Hoe kiest ChatGPT zijn bronnen?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "ChatGPT met zoekfunctie selecteert bronnen op basis van relevantie voor de gestelde vraag, domeinautoriteit en kwaliteit van de content. Pagina's die directe antwoorden geven, feiten onderbouwen met cijfers en technisch goed bereikbaar zijn, worden vaker aangehaald."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Verschilt de bronselectie tussen ChatGPT, Perplexity en Google AI Overviews?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Ja. Perplexity gebruikt een eigen zoekindex en citeert altijd meerdere bronnen per antwoord. ChatGPT leunt op Bing Search bij de zoekfunctie. Google AI Overviews bouwen sterk voort op de reguliere Google-index. Een hoge Google-ranking helpt bij AI Overviews, maar is geen garantie voor citaties in ChatGPT of Perplexity."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Welke contentformaten worden het vaakst geciteerd door AI?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Gidsen, FAQ-pagina's, definitieartikelen en how-to's worden het vaakst geciteerd. Deze formats geven directe antwoorden op specifieke vragen, wat precies is wat AI-tools zoeken. Commerciële landingspagina's worden zelden geciteerd."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Hoe snel verwerken AI-tools nieuwe content?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Perplexity en ChatGPT Search indexeren nieuwe content soms binnen uren. Google AI Overviews volgen de reguliere Google-crawlcyclus van dagen tot weken. AI-modellen zonder live zoekfunctie verwerken content pas bij de volgende trainingsronde, wat maanden kan duren."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Helpt een hoge DA (Domain Authority) bij AI-citaties?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Gedeeltelijk. Een hoge DA vergroot de kans dat AI-tools jouw domein als betrouwbaar beschouwen. Maar content-kwaliteit weegt minstens zo zwaar. Een kleinere site met heel specifieke, goed onderbouwde content kan een hogere DA verslaan voor een specifieke vraag."
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
                            { "@type": "ListItem", "position": 3, "name": "GEO", "item": "https://www.empowers.nl/blogs/geo" },
                            { "@type": "ListItem", "position": 4, "name": "AI-zoekmachines bronnen", "item": "https://www.empowers.nl/blogs/geo/ai-zoekmachines-bronnen" }
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
                        <Link to="/blogs/geo" className="hover:text-accent transition-colors">GEO</Link>
                        <ChevronRight className="w-3 h-3" />
                        <span className="text-primary truncate">AI-zoekmachines bronnen</span>
                    </nav>

                    {/* Header */}
                    <header className="mb-16">
                        <div className="inline-block px-3 py-1 bg-accent/10 text-accent font-mono text-xs uppercase tracking-widest rounded-full mb-6">
                            GEO
                        </div>
                        <h1 className="font-sans font-bold text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight mb-8">
                            Hoe AI-zoekmachines bronnen kiezen: zo vergroot je jouw kans
                        </h1>
                        <div className="flex flex-wrap items-center gap-6 text-sm font-sans text-primary/60 border-y border-primary/10 py-6">
                            <div className="flex items-center gap-2"><User className="w-4 h-4" /><span>Empowers Redactie</span></div>
                            <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>15 april 2026</span></div>
                            <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>9 minuten leestijd</span></div>
                        </div>
                    </header>

                    {/* Featured Image */}
                    <figure className="w-full h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden mb-16 relative bg-primary">
                        <div className="absolute inset-0 bg-[url('/images/blogs/ai-zoekmachines-bronnen.jpg')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </figure>

                    {/* Content */}
                    <div className="prose prose-lg max-w-none prose-headings:text-primary prose-headings:font-bold prose-a:text-accent prose-a:underline hover:prose-a:text-accent/80">
                        <p className="text-xl leading-relaxed text-primary/80 font-medium mb-6">
                            Miljoenen mensen stellen dagelijks vragen aan ChatGPT, Perplexity en Google AI Overviews. Al die tools geven antwoorden die zijn opgebouwd uit bronnen. Maar hoe kiezen ze welke website ze aanhalen en welke ze negeren? In dit artikel leggen we het selectiemechanisme uit en laten we zien wat jij concreet kunt doen om structureel bij de geselecteerde bronnen te horen.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Drie criteria die bij elke AI-tool terugkomen</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Elk AI-systeem heeft zijn eigen architectuur, maar uit vergelijkend onderzoek komen drie criteria steeds opnieuw naar voren. Ten eerste: relevantie. De bron moet direct antwoord geven op de gestelde vraag. Niet er omheen draaien, maar het antwoord expliciet formuleren. Ten tweede: betrouwbaarheid. Dat vertaalt zich in domeinautoriteit, citaties van anderen en aanwezigheid van concrete feiten. Ten derde: bereikbaarheid. Als een AI-crawler je pagina niet kan lezen, bestaat ze niet.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Dat klinkt eenvoudig, maar de uitvoering is genuanceerder. Een pagina kan topisch relevant zijn maar toch niet geciteerd worden omdat het antwoord pas in de derde alinea staat. Of de pagina is technisch bereikbaar maar het robots.txt-bestand blokkeert specifieke AI-crawlers. Elke schakel in de keten moet kloppen. Meer over hoe je dit meet lees je in onze <Link to="/blogs/geo/chatgpt-website-citeren" className="text-accent hover:underline">blog over het checken van ChatGPT-citaties</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe ChatGPT bronnen selecteert</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            ChatGPT met zoekfunctie gebruikt de Bing Search API om live resultaten op te halen. Dat betekent dat Bing's organische ranking een flinke rol speelt. Pagina's die hoog staan in Bing voor een bepaalde zoekterm, hebben meer kans om door ChatGPT geselecteerd te worden. Maar Bing-ranking is niet de enige factor. ChatGPT weegt ook de directe bruikbaarheid van de content voor de gestelde vraag.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            In de praktijk zien we dat ChatGPT een voorkeur heeft voor pagina's met een duidelijke informatieve structuur. FAQ-pagina's, how-to-artikelen en definitieblogs scoren beter dan generieke over-ons-pagina's of productpagina's vol marketingtekst. Het model zoekt naar passages die het direct als antwoord kan inzetten. Als het die niet vindt, gaat het naar de volgende bron.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Wat ook meespeelt: hoe recent de content is. ChatGPT geeft bij actuele vragen de voorkeur aan recente publicaties. Een artikel over Google Ads-trends uit 2023 gaat het afleggen tegen een artikel uit 2026 met actuele data. Houd je content dus up-to-date, zeker op snel veranderende onderwerpen.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe Perplexity bronnen selecteert</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Perplexity werkt anders dan ChatGPT. Het heeft zijn eigen zoekindex die continu het web crawlt, vergelijkbaar met hoe een zoekmachine werkt. Bij elke vraag voert Perplexity een live zoekopdracht uit en synthetiseert het antwoord uit meerdere bronnen. Die bronnen worden altijd zichtbaar getoond, wat Perplexity transparanter maakt dan de meeste andere AI-tools.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Perplexity heeft een uitgesproken voorkeur voor gespecialiseerde bronnen. Een blog van een specialist over een niche-onderwerp doet het vaak beter dan een algemeen mediabedrijf dat oppervlakkig over hetzelfde onderwerp schrijft. Diepgaande expertise, onderbouwd met data, is het sleutelwoord. Topical authority opbouwen door meerdere samenhangende artikelen te schrijven, is hier de meest effectieve strategie.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe Google AI Overviews bronnen selecteert</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Google AI Overviews bouwen het sterkst voort op de reguliere Google-index. Als je hoog staat in de organische zoekresultaten voor een bepaalde query, vergroot je significant de kans dat je in de AI Overview wordt opgenomen. Dat maakt SEO nog steeds relevant, ook in het AI-tijdperk. Sterker nog: sterke SEO is de basis voor AI Overviews-zichtbaarheid bij Google. Meer over de relatie tussen GEO en SEO lees je in onze <Link to="/blogs/geo/geo-vs-seo-verschil-heb" className="text-accent hover:underline">blog over GEO versus SEO</Link>.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Toch zijn er verschillen met reguliere SEO. Google AI Overviews hebben een sterke voorkeur voor content die een vraag direct beantwoordt in de openingsparagraaf. Featured snippets zijn een goede voorspeller van AI Overviews-zichtbaarheid. Als jouw pagina al een featured snippet genereert, is de kans groot dat ze ook in de AI Overview verschijnt.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">De rol van E-E-A-T en domeinautoriteit</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            E-E-A-T staat voor Experience, Expertise, Authoritativeness en Trustworthiness. Google gebruikt dit framework om de kwaliteit van content te beoordelen, en AI-systemen leunen op vergelijkbare concepten. Pagina's die aantonen dat de schrijver of organisatie echte ervaring heeft met het onderwerp, scoren systematisch beter.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Hoe vertaal je E-E-A-T naar de praktijk? Gebruik concrete voorbeelden uit jouw eigen klantwerk. Noem specifieke cijfers en resultaten. Schrijf over situaties die je echt hebt meegemaakt. Dat soort content is moeilijk te repliceren met generieke AI-teksten en wordt door zowel Google als AI-tools herkend als authentiek. Een domein dat consistent waardevolle, onderbouwde content publiceert, bouwt autoriteit op die over tijd sterker wordt.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Technische bereikbaarheid: de stille vereiste</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Zelfs de beste content wordt nooit geciteerd als AI-crawlers hem niet kunnen bereiken. De drie meest voorkomende blokkades zijn: een robots.txt die AI-bots uitsluit, JavaScript-heavy pagina's die server-side content niet renderen, en trage laadtijden die crawlers doen afhaken.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Check je robots.txt op regels als "Disallow: /" zonder specifieke uitzonderingen voor GPTBot, OAI-SearchBot, PerplexityBot en Google-Extended. Voeg eventueel een llms.txt-bestand toe dat AI-crawlers actief welkom heet en aangeeft welke pagina's prioriteit hebben. Het is een eenvoudige ingreep met potentieel groot effect. Lees meer over content bereikbaar maken in onze <Link to="/blogs/geo/schrijf-content-ai-tools-citeren" className="text-accent hover:underline">blog over content schrijven die AI-tools citeren</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Contentformat: welke types scoren het best</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Uit analyse van honderden AI-citaties komen steeds dezelfde contentformats naar voren. Definitie-artikelen, dit zijn artikelen die een concept helder uitleggen, worden bijzonder vaak geciteerd. "Wat is X?" en "Hoe werkt Y?" zijn goudmijnen voor AI-zichtbaarheid. FAQ-pagina's presteren ook sterk omdat de vraag-antwoord structuur perfect aansluit bij hoe AI-modellen antwoorden ophalen.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Vergelijkingsartikelen scoren goed bij vragen zoals "wat is beter, X of Y?". How-to gidsen met stap-voor-stap uitleg worden graag geciteerd bij procesgerichte vragen. Commerciële pagina's, over ons, diensten, prijzen, worden zelden geciteerd. AI-tools willen informatie leveren, geen reclame maken. Dat betekent dat je blog- en kenniscentrum-pagina's de motor zijn van je AI-zichtbaarheid, niet je conversiepagina's.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Topical authority: de langetermijnstrategie</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Eén goed artikel is een begin, maar niet genoeg voor structurele AI-zichtbaarheid. AI-tools geven de voorkeur aan domeinen die aantoonbaar expertise hebben op een bepaald gebied. Dat betekent meerdere onderling gelinkte artikelen die samen een compleet beeld geven van een onderwerp.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Stel: jouw bedrijf helpt MKB-ondernemers met Google Ads. Dan wil je niet één artikel over Google Ads, maar een cluster van tien tot vijftien artikelen die elk een ander aspect behandelen: bidding, campagnestructuur, kwaliteitsscore, shopping, display versus search, enzovoort. Die cluster maakt duidelijk aan zowel Google als AI-tools dat jouw domein de plek is voor Google Ads-expertise.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Wil je weten hoe jouw website er nu voor staat qua AI-zichtbaarheid? We maken een nulmeting en laten zien waar de kansen liggen. Plan een gesprek via onze <Link to="/contact" className="text-accent hover:underline">contactpagina</Link>.
                        </p>
                    </div>

                    {/* FAQ Section */}
                    <section className="mt-16 pt-12 border-t border-primary/10">
                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Veelgestelde vragen</h2>
                        <div className="space-y-6 not-prose">
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoe kiest ChatGPT zijn bronnen?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">ChatGPT met zoekfunctie selecteert bronnen op basis van relevantie, domeinautoriteit en kwaliteit van de content. Pagina's die directe antwoorden geven, feiten onderbouwen met cijfers en technisch goed bereikbaar zijn, worden vaker aangehaald.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Verschilt de bronselectie tussen ChatGPT, Perplexity en Google AI Overviews?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Ja. Perplexity gebruikt een eigen zoekindex en citeert altijd meerdere bronnen per antwoord. ChatGPT leunt op Bing Search. Google AI Overviews bouwen sterk voort op de reguliere Google-index. Een hoge Google-ranking helpt bij AI Overviews, maar is geen garantie voor citaties in ChatGPT of Perplexity.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Welke contentformaten worden het vaakst geciteerd door AI?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Gidsen, FAQ-pagina's, definitieartikelen en how-to's worden het vaakst geciteerd. Deze formats geven directe antwoorden op specifieke vragen. Commerciële landingspagina's worden zelden geciteerd.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoe snel verwerken AI-tools nieuwe content?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Perplexity en ChatGPT Search indexeren nieuwe content soms binnen uren. Google AI Overviews volgen de reguliere Google-crawlcyclus van dagen tot weken. AI-modellen zonder live zoekfunctie verwerken content pas bij de volgende trainingsronde, wat maanden kan duren.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Helpt een hoge Domain Authority bij AI-citaties?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Gedeeltelijk. Een hoge DA vergroot de kans dat AI-tools jouw domein als betrouwbaar beschouwen. Maar content-kwaliteit weegt minstens zo zwaar. Een kleinere site met heel specifieke, goed onderbouwde content kan een hogere DA verslaan voor een specifieke vraag.</p>
                            </div>
                        </div>
                    </section>

                    {/* Related Links */}
                    <section className="mt-16 pt-12 border-t border-primary/10">
                        <h3 className="text-xl font-bold text-primary mb-6">Lees ook</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <Link to="/blogs/geo/chatgpt-website-citeren" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">ChatGPT website citeren</h3>
                                <p className="text-primary/60 text-sm">Hoe weet je of ChatGPT jouw website al citeert?</p>
                            </Link>
                            <Link to="/blogs/geo/schrijf-content-ai-tools-citeren" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Content die AI-tools citeren</h3>
                                <p className="text-primary/60 text-sm">Zo schrijf je tekst die ChatGPT en Perplexity aanhalen.</p>
                            </Link>
                            <Link to="/blogs/geo/geo-vs-seo-verschil-heb" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">GEO vs SEO</h3>
                                <p className="text-primary/60 text-sm">Wat is het verschil en heb je allebei nodig?</p>
                            </Link>
                        </div>
                    </section>
                </div>
            </article>

            {/* Bottom CTA */}
            <section className="w-full pb-32 px-6">
                <div className="max-w-4xl mx-auto bg-primary rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
                    <h2 className="relative z-10 font-drama italic text-background text-3xl sm:text-4xl md:text-5xl mb-6">Sta jij al in de AI-antwoorden?</h2>
                    <p className="relative z-10 font-sans text-background/70 text-lg mb-10 max-w-xl mx-auto">We analyseren jouw AI-zichtbaarheid en laten zien welke stappen het meeste opleveren. Vrijblijvend.</p>
                    <Link to="/contact" className="relative z-10 btn-magnetic inline-flex items-center justify-center bg-accent text-background font-sans font-bold text-lg px-10 py-4 rounded-[2rem] hover:bg-accent/90 transition-colors">Neem contact op</Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
