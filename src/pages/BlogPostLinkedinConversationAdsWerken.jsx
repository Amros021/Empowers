import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ChevronRight, User } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function BlogPostLinkedinConversationAdsWerken() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen selection:bg-accent/30 selection:text-dark flex flex-col bg-background">
            <Helmet>
                <title>LinkedIn Conversation Ads: wat zijn ze en wanneer werken ze? | Empowers</title>
                <meta name="description" content="LinkedIn Conversation Ads laten ontvangers zelf hun pad kiezen in een gesprek. Lees wanneer ze meer leveren dan Message Ads en wanneer je beter een ander format kiest." />
                <link rel="canonical" href="https://www.empowers.nl/blogs/social-ads/linkedin-conversation-ads-werken" />
                <meta property="og:title" content="LinkedIn Conversation Ads: wat zijn ze en wanneer werken ze?" />
                <meta property="og:description" content="Conversation Ads geven jouw doelgroep meerdere keuzes in één bericht. Zo zet je ze op, en zo voorkom je de meest gemaakte fouten." />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://www.empowers.nl/blogs/social-ads/linkedin-conversation-ads-werken" />
                <meta property="og:image" content="https://www.empowers.nl/images/blogs/linkedin-conversation-ads-werken.jpg" />
                <meta property="article:published_time" content="2026-05-07" />
                <meta property="article:author" content="Empowers" />
                <meta property="article:section" content="Social Ads" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="LinkedIn Conversation Ads: wat zijn ze en wanneer werken ze?" />
                <meta name="twitter:description" content="Conversation Ads geven jouw doelgroep meerdere keuzes in één bericht. Zo werken ze in de praktijk." />

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Article",
                        "headline": "LinkedIn Conversation Ads: wat zijn ze en wanneer werken ze?",
                        "description": "Conversation Ads laten LinkedIn-gebruikers kiezen welk pad ze volgen in een advertentie. Lees wanneer dat oplevert en wanneer je beter een ander format pakt.",
                        "image": "https://www.empowers.nl/images/blogs/linkedin-conversation-ads-werken.jpg",
                        "datePublished": "2026-05-07T09:00:00+02:00",
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
                                    "name": "Wat zijn LinkedIn Conversation Ads?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Conversation Ads zijn interactieve berichten die in de LinkedIn-inbox van een gebruiker landen. Anders dan een gewoon advertentiebericht geef je de ontvanger meerdere keuzeknoppen waarmee hij zelf bepaalt welk pad hij volgt. Elk pad leidt naar een vervolgbericht of externe pagina, waardoor het format aanvoelt als een gesprek in plaats van een eenzijdige boodschap."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Wat is het verschil tussen Conversation Ads en Message Ads?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Bij een Message Ad stuur je één boodschap met één call-to-action. Bij een Conversation Ad bouw je een beslisstructuur met meerdere keuzeknoppen, elk met een eigen vervolg. Daardoor kun je in één campagne verschillende behoeftes binnen je doelgroep bedienen. Een prospect die wil snuffelen krijgt iets anders aangeboden dan iemand die direct een demo wil."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Wat kost een Conversation Ad gemiddeld?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "LinkedIn rekent per verzonden bericht. De prijs schommelt rond 50 cent tot ruim een euro per send, afhankelijk van het seniority-niveau van de doelgroep en de concurrentie binnen jouw branche. C-level beslissers in financiële sectoren liggen hoger, junior rollen in creatieve hoeken doorgaans lager."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Hoeveel keuzeknoppen kun je toevoegen?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "LinkedIn staat tot vijf keuzeknoppen per bericht toe, maar in de praktijk werkt twee tot drie het beste. Meer opties leidt tot keuzestress en lagere klikratio's. Beperk je tot heldere, onderscheidende paden zodat de ontvanger snel kan beslissen welke route bij hem past."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Wie moet de afzender zijn van een Conversation Ad?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "De afzender is altijd een persoon binnen jouw organisatie, niet de bedrijfspagina zelf. Een sales manager, marketing director of CEO werkt het beste, omdat de ontvanger eerder klikt op een naam dan op een logo. Die persoon geeft jou via LinkedIn toestemming om namens hem berichten te versturen. De toestemming blijft actief totdat de afzender hem intrekt."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Welke open rates zijn realistisch?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Goed opgezette Conversation Ads halen open rates die ruim boven die van koude e-mailcampagnes liggen. Wij zien openingen die regelmatig de 40 procent passeren, met uitschieters naar boven bij goed gesegmenteerde doelgroepen en herkenbare afzenders. De CTR op de eerste keuzeknop ligt vaak rond enkele procenten."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Werken Conversation Ads voor elk type B2B-bedrijf?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Nee. Voor producten met een korte beslisroute is een Message Ad of Sponsored Content goedkoper en effectiever. Conversation Ads renderen pas zodra je doelgroep meerdere informatiebehoeftes heeft die je vooraf niet eenduidig kunt voorspellen. Bij hele kleine doelgroepen onder de vijfhonderd matches loont de extra opzet de moeite vaak niet."
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
                            { "@type": "ListItem", "position": 3, "name": "Social Ads", "item": "https://www.empowers.nl/blogs/social-ads" },
                            { "@type": "ListItem", "position": 4, "name": "LinkedIn Conversation Ads", "item": "https://www.empowers.nl/blogs/social-ads/linkedin-conversation-ads-werken" }
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
                        <span className="text-primary truncate">LinkedIn Conversation Ads</span>
                    </nav>

                    {/* Header */}
                    <header className="mb-16">
                        <div className="inline-block px-3 py-1 bg-accent/10 text-accent font-mono text-xs uppercase tracking-widest rounded-full mb-6">
                            Social Ads
                        </div>
                        <h1 className="font-sans font-bold text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight mb-8">
                            LinkedIn Conversation Ads: wat zijn ze en wanneer werken ze?
                        </h1>
                        <div className="flex flex-wrap items-center gap-6 text-sm font-sans text-primary/60 border-y border-primary/10 py-6">
                            <div className="flex items-center gap-2"><User className="w-4 h-4" /><span>Empowers Redactie</span></div>
                            <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>7 mei 2026</span></div>
                            <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>8 minuten leestijd</span></div>
                        </div>
                    </header>

                    {/* Featured Image */}
                    <figure className="w-full h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden mb-16 relative bg-primary">
                        <div className="absolute inset-0 bg-[url('/images/blogs/linkedin-conversation-ads-werken.jpg')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </figure>

                    {/* Content */}
                    <div className="prose prose-lg max-w-none prose-headings:text-primary prose-headings:font-bold prose-a:text-accent prose-a:underline hover:prose-a:text-accent/80">
                        <p className="text-xl leading-relaxed text-primary/80 font-medium mb-6">
                            Conversation Ads zijn LinkedIn's antwoord op een probleem dat elke B2B-marketeer kent. Hoe houd je iemands aandacht vast als die persoon binnen een seconde besluit of jouw bericht relevant is? Het format laat de ontvanger zelf kiezen welk pad hij volgt en voelt daardoor meer als een gesprek dan als advertentie. Klinkt mooi. Werkt het ook? In deze blog lees je wat Conversation Ads precies doen, wanneer ze meer opleveren dan een gewone Message Ad en welke fouten elke account ooit een keer maakt.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat zijn Conversation Ads precies?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een Conversation Ad is een interactief bericht dat in de LinkedIn-inbox van de ontvanger landt. Anders dan een gewoon advertentiebericht, waarbij je één boodschap stuurt met één knop, geef je hier meerdere keuzeknoppen mee. De ontvanger kiest. Wil hij meer weten over een whitepaper? Knop één. Een demo plannen? Knop twee. Doorverwezen worden naar een case? Knop drie. Elke keuze leidt naar een vervolgbericht of een externe pagina. Jij bouwt vooraf de hele beslisstructuur op.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Het bericht wordt verzonden vanuit een persoon, niet vanuit jouw bedrijfspagina. Dat menselijke element zorgt voor hogere openingspercentages dan de meeste e-mailcampagnes halen. LinkedIn levert het bericht alleen af op het moment dat de ontvanger actief is in het platform, wat de kans dat hij daadwerkelijk klikt verder vergroot. Je betaalt per verzonden bericht, dus elke klik telt.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Het verschil met Message Ads</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een Message Ad is eenrichtingsverkeer. Je schrijft een tekst, voegt één call-to-action toe en klaar. Dat werkt prima als je boodschap simpel is en je doelgroep haarscherp gesegmenteerd. Een Conversation Ad geeft je daarentegen ruimte om verschillende behoeftes binnen één campagne te bedienen. Een marketeer die zoekt naar inspiratie krijgt iets anders aangeboden dan een marketeer die meteen een offerte wil.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Dat klinkt logisch, maar maakt de opzet ook complexer. Je moet vooraf bedenken welke vragen jouw doelgroep heeft en hoe je elk type prospect zijn eigen route geeft. We zien telkens dat accounts die twee of drie paden helder uitwerken structureel betere resultaten halen dan accounts die er vijf of zes inproppen. Meer opties betekent niet automatisch meer conversies. Wil je het hele plaatje van Sponsored Content en Message Ads naast elkaar? Dan helpt onze <Link to="/blogs/social-ads/linkedin-sponsored-content-vs-message" className="text-accent hover:underline">vergelijking van Sponsored Content versus Message Ads</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wanneer werken Conversation Ads echt?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Voor B2B-bedrijven met een complexer salesproces zijn Conversation Ads vaak waardevol. Denk aan SaaS-platformen waar de prospect eerst wil snuffelen voordat hij een demo plant. Of consultancies die hun expertise via meerdere ingangen willen tonen: een case voor de pragmaticus, een whitepaper voor de strateeg, een directe afspraak voor de beslisser. Het format past zich aan bij verschillende koopfases tegelijk.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Voor producten met een korte beslissingsroute werken ze juist minder goed. Stuur een bericht dat een directe lead vraagt en je betaalt voor een format waarvan de meerwaarde niet wordt benut. Daar is een Message Ad goedkoper en effectiever. Hetzelfde geldt bij brand awareness: de inbox is geen plek waar mensen toevallig op je naam stuiten, dus voor pure naamsbekendheid kies je beter Sponsored Content of video.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat kost een Conversation Ad?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            LinkedIn rekent per verzonden bericht. De prijs schommelt rond 50 cent tot ruim een euro per send, afhankelijk van het seniority-niveau van de doelgroep en de concurrentie binnen jouw branche. C-level beslissers in financiële sectoren zijn duurder dan junior marketeers in de creatieve hoek. Voor een gemiddelde B2B-campagne reken je op rond een halve euro per verzonden bericht, met uitschieters naar boven en naar beneden.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Dat lijkt veel. De rekensom kantelt zodra je naar de openingscijfers kijkt. Waar koude e-mail meestal blijft hangen rond een open rate van 15 procent, leveren Conversation Ads in onze accounts doorgaans openingen van 40 procent of hoger. De CTR op de eerste keuzeknop ligt vaak rond enkele procenten, met een sprongetje voor warme doelgroepen. Reken zelf even mee: bij een halve euro per send en 40 procent open rate, betaal je effectief rond 1,25 euro per geopende boodschap. Voor een goed gesegmenteerde B2B-doelgroep is dat zelden duur.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Zo zet je een Conversation Ad op</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Je begint in Campaign Manager met het doel 'Lead Generation' of 'Website Visits', afhankelijk van wat je primair zoekt. Vervolgens kies je het format Conversation Ad en stel je de afzender in. Dat is een persoon binnen jouw organisatie waarvan jij namens hem berichten mag versturen. Die toestemming geef je via LinkedIn zelf en blijft actief totdat de afzender hem zelf weer intrekt. Goed om te weten: zodra LinkedIn jouw bericht aflevert is de inbox van de ontvanger gedurende dertig dagen exclusief van jou, dus geen andere adverteerder kan in die periode dezelfde persoon sponsored messages sturen.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Daarna bouw je het gesprek zelf. Begin met een korte, persoonlijke openingstekst. Dus geen 'Beste klant', maar een voornaam-aanspraak en een duidelijke reden waarom de ontvanger juist nu dit bericht krijgt. Geef hem twee tot vier keuzeknoppen, elk met een eigen vervolg. Houd het kort. Lange teksten worden weggeklikt, ook in de inbox. Test verschillende openingen tegen elkaar. Vaak wint een variant die durft te beginnen met een vraag in plaats van een statement.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Voor de targeting werkt LinkedIn anders dan Meta. Je bouwt op functietitels, branches, bedrijfsgrootte, seniority en gerichte vaardigheden. Hoe scherper je doelgroep, hoe duurder per verzending, maar ook hoe hoger je relevantie. We zien dat brede doelgroepen van honderdduizenden mensen vaak slechtere CTRs leveren dan strakke doelgroepen van een paar duizend. Beter een kleinere lijst met hoge relevantie dan een grote lijst die ruis bevat. Hoe je die lagen scherp zet, beschrijven we in onze blog over <Link to="/blogs/social-ads/linkedin-ads-beginners-eerste-b2b" className="text-accent hover:underline">LinkedIn Ads voor beginners</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">De fouten die we het vaakst zien</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een Conversation Ad voelt vrijblijvend aan tijdens het maken. Juist daarom verzamelen accounts dezelfde structurele blunders. De meest voorkomende: te veel keuzeknoppen. Vier paden lijkt logisch tijdens de brainstorm. De ontvanger raakt verlamd. Beperk je tot twee of drie helder onderscheidende routes en je conversie loopt zichtbaar omhoog.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een tweede valkuil zit in de openingstekst. Zinnen die starten met 'Wij van [bedrijf]' of 'Wij hebben het genoegen' worden weggeklikt voordat de tweede zin geladen is. Schrijf alsof je een collega aanspreekt die je net op een netwerkborrel hebt ontmoet. Persoonlijk, direct, met één duidelijke reden waarom dit bericht er nu toe doet voor diegene. Dat is moeilijker dan het lijkt, omdat veel marketeers de neiging hebben in productpraat te schieten zodra ze ruimte krijgen.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De derde fout zit in het gebrek aan tracking. Conversation Ads zijn duur per verzending, dus elke klik moet meetbaar zijn. Zorg dat UTM-parameters vooraf in de knoppen staan en dat de Insight Tag op je site draait. Anders zie je in Campaign Manager wel klikken vertrekken, maar weet je niet wat ze op je site doen. De waarde van de campagne wordt dan een gok in plaats van een meting.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wanneer kies je voor een ander format?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Conversation Ads zijn niet altijd de juiste keuze. Voor pure brand awareness werken Sponsored Content en video-advertenties beter, omdat die in de feed ronddraaien waar mensen in scroll-modus zitten. Het format komt pas tot zijn recht zodra je een specifieke groep wilt aanspreken met meerdere relevante aanbiedingen tegelijk. Bij hele kleine doelgroepen onder de vijfhonderd matches loont de extra opzet de moeite vaak niet. Dan is een persoonlijke benadering via Sales Navigator of een directe e-mail goedkoper.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Voor leadgeneratie met een duidelijke trigger, zoals een whitepaper of webinar, blijft Sponsored Content met een Lead Gen Form moeilijk te verslaan. Daar gaat geen klikpad nodig: de prospect ziet de aanbieding, klikt en zijn gegevens zijn ingevuld. Hoe Lead Gen Forms werken hebben we beschreven in onze blog over <Link to="/blogs/social-ads/linkedin-lead-gen-forms-waarom" className="text-accent hover:underline">LinkedIn Lead Gen Forms</Link>. Conversation Ads schieten in waarde zodra de prospect meerdere informatiebehoeftes heeft die jij vooraf niet eenduidig kunt voorspellen.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat brengt het voor jouw bedrijf?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            B2B-bedrijven die Conversation Ads goed inzetten zien rendement vooral in twee scenario's. De ene: een gestaag toenemend aantal demo-aanvragen vanuit een doelgroep die anders moeilijk bereikbaar was. De andere: hoogwaardig top-of-funnel verkeer naar contentpagina's, met name als die content gesegmenteerd is per branche of rol. Beide kosten geduld, want de eerste twee weken laten vaak suboptimale cijfers zien terwijl het algoritme leert wie er gevoelig is voor welke route.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De winst zit in de voorbereiding. Een goed gesprek bouwen kost meer tijd dan een Sponsored Content-campagne lanceren. Je tekent paden uit, schrijft de copy, regelt de afzender, richt de tracking in. Wie die voorbereiding overslaat ziet teleurstellende cijfers en concludeert dat het format 'niet werkt'. Wie het wel goed doet, krijgt openingspercentages waar e-mailmarketeers jaloers op zijn. Wil je dat we mét je meekijken voordat je je eerste euro besteedt? Plan een gesprek via onze <Link to="/contact" className="text-accent hover:underline">contactpagina</Link>. We doorlopen je doelgroep, je copy en je tracking, en wijzen aan waar de winst zit.
                        </p>
                    </div>

                    {/* FAQ Section */}
                    <section className="mt-16 pt-12 border-t border-primary/10">
                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Veelgestelde vragen</h2>
                        <div className="space-y-6 not-prose">
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat zijn LinkedIn Conversation Ads?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Conversation Ads zijn interactieve berichten die in de LinkedIn-inbox van een gebruiker landen. Anders dan een gewoon advertentiebericht geef je de ontvanger meerdere keuzeknoppen waarmee hij zelf bepaalt welk pad hij volgt. Elk pad leidt naar een vervolgbericht of externe pagina, waardoor het format aanvoelt als een gesprek in plaats van een eenzijdige boodschap.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat is het verschil tussen Conversation Ads en Message Ads?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Bij een Message Ad stuur je één boodschap met één call-to-action. Bij een Conversation Ad bouw je een beslisstructuur met meerdere keuzeknoppen, elk met een eigen vervolg. Daardoor kun je in één campagne verschillende behoeftes binnen je doelgroep bedienen. Een prospect die wil snuffelen krijgt iets anders aangeboden dan iemand die direct een demo wil.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat kost een Conversation Ad gemiddeld?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">LinkedIn rekent per verzonden bericht. De prijs schommelt rond 50 cent tot ruim een euro per send, afhankelijk van het seniority-niveau van de doelgroep en de concurrentie binnen jouw branche. C-level beslissers in financiële sectoren liggen hoger, junior rollen in creatieve hoeken doorgaans lager.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoeveel keuzeknoppen kun je toevoegen?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">LinkedIn staat tot vijf keuzeknoppen per bericht toe, maar in de praktijk werkt twee tot drie het beste. Meer opties leidt tot keuzestress en lagere klikratio's. Beperk je tot heldere, onderscheidende paden zodat de ontvanger snel kan beslissen welke route bij hem past.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wie moet de afzender zijn van een Conversation Ad?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">De afzender is altijd een persoon binnen jouw organisatie, niet de bedrijfspagina zelf. Een sales manager, marketing director of CEO werkt het beste, omdat de ontvanger eerder klikt op een naam dan op een logo. Die persoon geeft jou via LinkedIn toestemming om namens hem berichten te versturen, en die toestemming blijft actief totdat hij die intrekt.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Welke open rates zijn realistisch?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Goed opgezette Conversation Ads halen open rates die ruim boven die van koude e-mailcampagnes liggen. Wij zien openingen die regelmatig de 40 procent passeren, met uitschieters naar boven bij goed gesegmenteerde doelgroepen en herkenbare afzenders. De CTR op de eerste keuzeknop ligt vaak rond enkele procenten.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Werken Conversation Ads voor elk type B2B-bedrijf?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Nee. Voor producten met een korte beslisroute is een Message Ad of Sponsored Content goedkoper en effectiever. Conversation Ads renderen pas zodra je doelgroep meerdere informatiebehoeftes heeft die je vooraf niet eenduidig kunt voorspellen. Bij hele kleine doelgroepen onder de vijfhonderd matches loont de extra opzet de moeite vaak niet.</p>
                            </div>
                        </div>
                    </section>

                    {/* Related */}
                    <section className="mt-16 pt-12 border-t border-primary/10">
                        <h3 className="text-xl font-bold text-primary mb-6">Lees ook</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <Link to="/blogs/social-ads/linkedin-sponsored-content-vs-message" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Sponsored Content vs Message Ads</h3>
                                <p className="text-primary/60 text-sm">Twee LinkedIn-formats vergeleken op rendement en kosten per situatie.</p>
                            </Link>
                            <Link to="/blogs/social-ads/linkedin-lead-gen-forms-waarom" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">LinkedIn Lead Gen Forms</h3>
                                <p className="text-primary/60 text-sm">Waarom Lead Gen Forms in negen van de tien gevallen meer leads opleveren dan een externe landingspagina.</p>
                            </Link>
                            <Link to="/blogs/social-ads/linkedin-ads-beginners-eerste-b2b" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">LinkedIn Ads voor beginners</h3>
                                <p className="text-primary/60 text-sm">Een praktische start voor jouw eerste B2B-campagne op LinkedIn, zonder te verdwalen in opties.</p>
                            </Link>
                        </div>
                    </section>

                </div>
            </article>

            {/* CTA */}
            <section className="w-full pb-32 px-6">
                <div className="max-w-4xl mx-auto bg-primary rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
                    <h2 className="relative z-10 font-drama italic text-background text-3xl sm:text-4xl md:text-5xl mb-6">
                        LinkedIn-campagnes die wel leads opleveren?
                    </h2>
                    <p className="relative z-10 font-sans text-background/70 text-lg mb-10 max-w-xl mx-auto">
                        Wij bouwen Conversation Ads die converteren. Van de afzender en doelgroep tot de paden en de tracking. Plan een vrijblijvend gesprek en je weet binnen een week of dit format past bij jouw doelgroep.
                    </p>
                    <Link
                        to="/contact"
                        className="relative z-10 btn-magnetic inline-flex items-center justify-center bg-accent text-background font-sans font-bold text-lg px-10 py-4 rounded-[2rem] hover:bg-accent/90 transition-colors"
                    >
                        Neem contact op
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
