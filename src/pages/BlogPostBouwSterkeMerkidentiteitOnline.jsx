import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ChevronRight, User } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function BlogPostBouwSterkeMerkidentiteitOnline() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen selection:bg-accent/30 selection:text-dark flex flex-col bg-background">
            <Helmet>
                <title>Hoe bouw je een sterke merkidentiteit online op? | Empowers</title>
                <meta name="description" content="Een sterke merkidentiteit online ontstaat niet door een mooi logo, maar door consistente keuzes in toon, beeld en gedrag. Hoe je dat in fases opbouwt voor het MKB." />
                <link rel="canonical" href="https://www.empowers.nl/blogs/algemeen/bouw-sterke-merkidentiteit-online" />
                <meta property="og:title" content="Hoe bouw je een sterke merkidentiteit online op?" />
                <meta property="og:description" content="Van logo en kleuren naar daadwerkelijk herkenbaar zijn op elk kanaal." />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://www.empowers.nl/blogs/algemeen/bouw-sterke-merkidentiteit-online" />
                <meta property="og:image" content="https://www.empowers.nl/images/blogs/bouw-sterke-merkidentiteit-online.jpg" />
                <meta property="article:published_time" content="2026-05-14" />
                <meta property="article:author" content="Empowers" />
                <meta property="article:section" content="Algemeen" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Hoe bouw je een sterke merkidentiteit online op?" />
                <meta name="twitter:description" content="De stappen die van een logo een echt merk maken." />

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Article",
                        "headline": "Hoe bouw je een sterke merkidentiteit online op?",
                        "description": "Een sterke merkidentiteit online ontstaat niet door een mooi logo, maar door consistente keuzes in toon, beeld en gedrag.",
                        "image": "https://www.empowers.nl/images/blogs/bouw-sterke-merkidentiteit-online.jpg",
                        "datePublished": "2026-05-14T09:00:00+02:00",
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
                                    "name": "Wat is een merkidentiteit precies?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Een merkidentiteit is het totaal van zichtbare en voelbare keuzes die je merk uniek maken. Dat omvat je logo, kleuren en typografie, maar ook je tone of voice, je beeldtaal, hoe je website voelt, hoe je klantenservice klinkt en welke waarden je in je communicatie toont. Identiteit is hoe je merk overkomt, image is wat anderen daarvan onthouden."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Heb ik een grote merkidentiteit nodig als MKB?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Nee, maar je hebt wel een duidelijke nodig. Voor het MKB werkt simpel en consistent beter dan groot en complex. Een sterk MKB-merk heeft een handvol heldere kenmerken die je in elk contactmoment terugziet. Dat is haalbaar zonder bureau of groot budget, mits je de basis goed legt."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Wat is het verschil tussen een logo en een merkidentiteit?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Een logo is een visueel symbool. Een merkidentiteit is het geheel: logo, kleuren, typografie, beeldstijl, toon, gedrag en de verhalen die je vertelt. Een logo zonder onderliggende identiteit is een tekening. Een sterke identiteit is voelbaar, ook zonder dat het logo in beeld is. Klanten herkennen je merk dan aan je stem, je foto's of je manier van reageren."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Hoe lang duurt het om een merkidentiteit op te bouwen?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Vastleggen kan binnen enkele weken. Echt voelbaar worden bij klanten vergt zes tot twaalf maanden van consistente toepassing. Het is geen sprint, het is een gewoonte. Bedrijven die hier vroeg in investeren bouwen een voorsprong op die concurrenten moeilijk inhalen, omdat herkenning niet te kopen is in een advertentie."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Wat zijn de eerste stappen om mijn merk online op te bouwen?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Begin bij je positionering: voor wie ben je er, wat los je op, waarom zou iemand voor jou kiezen. Pak daarna je visuele basis aan: logo, twee tot drie kleuren, één of twee fonts, een fotostijl. Leg je tone of voice vast in een kort document. Pas dat consequent toe op je website, social media en e-mailcommunicatie. De rest volgt vanzelf zodra de basis staat."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Hoe weet ik of mijn merkidentiteit werkt?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Vraag het je klanten. Wat onthouden ze over jullie merk, hoe omschrijven ze jullie aan een vriend, welke woorden vallen telkens. Klopt dat met wat je wilde uitstralen, dan werkt het. Wijkt het sterk af, dan is het tijd om je positionering of je uitwerking aan te scherpen. Daarnaast meet je het in herhaalaankopen en aanbevelingen, wat klassiek voorspellende signalen zijn voor sterke merken."
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
                            { "@type": "ListItem", "position": 4, "name": "Merkidentiteit online opbouwen", "item": "https://www.empowers.nl/blogs/algemeen/bouw-sterke-merkidentiteit-online" }
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
                        <span className="text-primary truncate">Merkidentiteit online</span>
                    </nav>

                    <header className="mb-16">
                        <div className="inline-block px-3 py-1 bg-accent/10 text-accent font-mono text-xs uppercase tracking-widest rounded-full mb-6">
                            Algemeen
                        </div>
                        <h1 className="font-sans font-bold text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight mb-8">
                            Hoe bouw je een sterke merkidentiteit online op?
                        </h1>

                        <div className="flex flex-wrap items-center gap-6 text-sm font-sans text-primary/60 border-y border-primary/10 py-6">
                            <div className="flex items-center gap-2"><User className="w-4 h-4" /><span>Empowers Redactie</span></div>
                            <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>14 mei 2026</span></div>
                            <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>8 minuten leestijd</span></div>
                        </div>
                    </header>

                    <figure className="w-full h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden mb-16 relative bg-primary">
                        <div className="absolute inset-0 bg-[url('/images/blogs/bouw-sterke-merkidentiteit-online.jpg')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </figure>

                    <div className="prose prose-lg max-w-none prose-headings:text-primary prose-headings:font-bold prose-a:text-accent prose-a:underline hover:prose-a:text-accent/80">
                        <p className="text-xl leading-relaxed text-primary/80 font-medium mb-6">
                            Een sterk merk online verkoopt zichzelf voor een deel. Mensen tikken het in plaats van te zoeken op een algemene categorie. Ze klikken sneller op je advertentie en blijven langer op je website. Dat ontstaat niet door een mooi logo, ook niet door één goede campagne. Een merkidentiteit is een gestapelde reeks consistente keuzes die langzaam vertrouwen opbouwt. Voor het MKB is dat geen luxe maar de basis van duurzame groei.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat een merkidentiteit echt is</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Veel ondernemers verwarren merkidentiteit met huisstijl. Een huisstijl is de zichtbare laag: logo, kleuren, typografie. Een merkidentiteit is daar de optelsom van: ook je stem en beeldtaal, plus je houding, je waarden en je verhalen. Het is hoe je merk overkomt als iemand er voor het eerst mee in aanraking komt en wat hij ervan onthoudt na drie ontmoetingen.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De definitie waar marketeers graag mee werken: identiteit is wat jij van je merk uitstuurt, image is wat anderen ervan opvangen. De ruimte tussen die twee laat zien hoe goed je merk werkt. Sterke merken hebben weinig verschil tussen wat ze willen zijn en wat klanten ze noemen. Zwakke merken hebben een grote kloof.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Waarom de meeste MKB-merken zwak blijven</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Het ligt zelden aan inzet. Het ligt aan tempo en focus. Veel ondernemers willen alles tegelijk. Een nieuwe website, een huisstijl-refresh, een rebrand, een TikTok-account erbij. Drie maanden later is alles half af, klopt niks meer met elkaar, en is er minder herkenbaarheid dan voor de aftrap. Bouwen aan een merk vraagt geduld dat haaks staat op het instinct om snel te scoren.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De tweede valkuil: te complex worden. Een MKB-merk hoeft geen twintig kleuren, vijf fonts en zeven sub-merken te hebben. Een handvol heldere kenmerken die je elke keer terugziet, doet meer dan een uitgebreid merkboek dat niemand opent. Klein en consistent gedragen door de hele organisatie verslaat groot en complex dat alleen door marketing gedragen wordt.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Fase één: weten waar je voor staat</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Voor je een tint groen kiest, beantwoord drie vragen. Voor wie ben je er? Niet "iedereen", maar concreet: het type klant dat het beste bij je past en het meeste oplevert. Wat los je op voor die klant? Niet "marketing", wel "groeien zonder dat ondernemers er hun avonden aan kwijt zijn". En waarom zou iemand juist voor jou kiezen boven een concurrent? Daar zit je positioneringsverhaal.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Deze antwoorden vormen het fundament. Elke verdere keuze, van kleur tot copy, hangt eraan op. Bedrijven die deze stap overslaan herken je: hun communicatie voelt willekeurig. Vandaag een opbeurende post, morgen een prijs-aanbieding, overmorgen een serieuze klant-quote. Geen lijn, geen herkenning, geen merk.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Fase twee: de visuele basis</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Met je positionering helder kun je naar de visuele kant. Houd het klein. Een logo dat in zwart-wit ook werkt. Twee tot drie kleuren waarvan één primair, één accent en eventueel één neutrale tint. Eén of twee fonts: één voor koppen, één voor lopende tekst. Eén beeldstijl: foto's, illustraties, of een combinatie, maar dan wel consequent.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Vermijd het instinct om alle opties open te houden. Een merk wint door wat het uitsluit, niet door wat het toevoegt. Een rustige kleurpalet met twee dominante kleuren is herkenbaarder dan een palet van zeven kleuren waarvan er per uiting drie gebruikt worden. Beperking dwingt consistentie af.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Fase drie: de stem</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Visueel herken je een merk binnen seconden. Maar wat een merk werkelijk maakt is de manier waarop het praat. Een vastgelegde tone of voice zorgt dat je website en e-mails, plus alle productomschrijvingen en social posts, klinken alsof ze van dezelfde maker komen. Dat is goedkoper dan welke huisstijl-investering ook, en heeft minstens zo veel impact.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een werkbaar tone-of-voice-document beschrijft een paar kernkenmerken (bijvoorbeeld direct, warm, zonder jargon), met per kenmerk concrete "wel zo / niet zo"-voorbeelden. Hoe je dat in een halve dag oplevert beschrijven we in onze blog over <Link to="/blogs/algemeen/tone-of-voice-bepalen-klinkt-merk" className="text-accent hover:underline">tone of voice bepalen</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Fase vier: gedrag</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Het minst zichtbare en meest onderschatte deel. Je merk is niet alleen wat je zegt of laat zien, maar hoe je je gedraagt. Hoe snel reageer je op een klacht? Wat doe je als een klant onterecht boos is? Hoe behandel je een leverancier? Klanten merken dat, ook als ze het niet bewust analyseren. Bedrijven die hun beloftes nakomen in moeilijke momenten bouwen sterker dan bedrijven met de beste copy.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Concreet voor online: hoe snel antwoord je op reviews, hoe persoonlijk reageer je op DM's, hoe behulpzaam ben je in mailcontact ook als iemand nog geen klant is. Hoe je dat structureel inricht en monitort lees je in onze blog over <Link to="/blogs/algemeen/brandmonitoring-hou-over-gezegd" className="text-accent hover:underline">brandmonitoring</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Fase vijf: consistentie over tijd</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Merkbouw is herhaling. Wat je vandaag uitzet, ziet jij honderd keer voor het bij de klant één keer terugkomt. Daar moet je doorheen. Wie elke drie maanden van koers verandert reset zijn merkbouw telkens. Wie zes tot twaalf maanden trouw blijft aan zijn keuzes, bouwt herkenning op die concurrenten moeilijk kunnen inhalen.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Maak het jezelf makkelijk. Bouw templates voor social posts en e-mails, plus voor banners en advertenties. Stel een centrale plek in waar nieuwe collega's en freelancers de brand assets vinden. Plan jaarlijks één evaluatiemoment in om bij te stellen, niet om compleet opnieuw te beginnen. Merken die elke vier maanden iets fundamenteels veranderen, krijgen geen kans om in het hoofd van klanten te landen.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe meet je of het werkt?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Merkbouw heeft niet de directe meetbaarheid van een Google Ads-campagne, en dat is precies waarom het zo waardevol is als concurrentievoordeel. Toch zijn er signalen die je in de gaten kunt houden. Directe traffic op je website, oftewel mensen die je naam intikken in plaats van zoeken. Het aantal mentions en branded zoektermen, plus herhaalaankopen en aanbevelingen. Recensies waarin klanten je merk omschrijven, niet alleen je product.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Vraag eens per half jaar aan tien klanten hoe ze jullie aan een vriend zouden beschrijven. De woorden die telkens terugkomen zijn jullie image. Klopt die met de identiteit die je beoogt, dan werkt het. Wijkt het af, dan weet je waar je moet bijsturen. Merkbouw is meten met geduld, niet met een dashboard dat elke vrijdag een cijfer afgeeft.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat doe je morgen?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Twee acties die binnen een week iets oplossen. Een: kijk naar de afgelopen vijf social posts, drie nieuwsbrieven en de homepage. Vraag jezelf af: voelen die als één merk? Als het antwoord nee is, schrijf op waar het misgaat. Twee: bel drie klanten en vraag wat ze van jullie merk vinden. Niet wat ze van het product vinden, wel van het merk. De antwoorden zijn meer waard dan elk merkbureau.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Vanuit die nul-meting bouw je verder. Stap voor stap, niet alles tegelijk. Een merkidentiteit is geen kerstboom die je op een dag optuigt, maar een huis dat je in jaren bouwt. Wie geduld heeft, bouwt iets dat geen concurrent met een groter budget zomaar overneemt.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Veelgestelde vragen</h2>
                    </div>

                    <section className="mt-4">
                        <div className="space-y-6 not-prose">
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat is een merkidentiteit precies?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Een merkidentiteit is het totaal van zichtbare en voelbare keuzes die je merk uniek maken. Dat omvat je logo, kleuren en typografie, maar ook je tone of voice, je beeldtaal, hoe je website voelt, hoe je klantenservice klinkt en welke waarden je in je communicatie toont. Identiteit is hoe je merk overkomt, image is wat anderen daarvan onthouden.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Heb ik een grote merkidentiteit nodig als MKB?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Nee, maar je hebt wel een duidelijke nodig. Voor het MKB werkt simpel en consistent beter dan groot en complex. Een sterk MKB-merk heeft een handvol heldere kenmerken die je in elk contactmoment terugziet. Dat is haalbaar zonder bureau of groot budget, mits je de basis goed legt.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat is het verschil tussen een logo en een merkidentiteit?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Een logo is een visueel symbool. Een merkidentiteit is het geheel: logo, kleuren, typografie, beeldstijl, toon, gedrag en de verhalen die je vertelt. Een logo zonder onderliggende identiteit is een tekening. Een sterke identiteit is voelbaar, ook zonder dat het logo in beeld is. Klanten herkennen je merk dan aan je stem, je foto's of je manier van reageren.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoe lang duurt het om een merkidentiteit op te bouwen?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Vastleggen kan binnen enkele weken. Echt voelbaar worden bij klanten vergt zes tot twaalf maanden van consistente toepassing. Het is geen sprint, het is een gewoonte. Bedrijven die hier vroeg in investeren bouwen een voorsprong op die concurrenten moeilijk inhalen, omdat herkenning niet te kopen is in een advertentie.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat zijn de eerste stappen om mijn merk online op te bouwen?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Begin bij je positionering: voor wie ben je er, wat los je op, waarom zou iemand voor jou kiezen. Pak daarna je visuele basis aan: logo, twee tot drie kleuren, één of twee fonts, een fotostijl. Leg je tone of voice vast in een kort document. Pas dat consequent toe op je website, social media en e-mailcommunicatie. De rest volgt vanzelf zodra de basis staat.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoe weet ik of mijn merkidentiteit werkt?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Vraag het je klanten. Wat onthouden ze over jullie merk, hoe omschrijven ze jullie aan een vriend, welke woorden vallen telkens. Klopt dat met wat je wilde uitstralen, dan werkt het. Wijkt het sterk af, dan is het tijd om je positionering of je uitwerking aan te scherpen. Daarnaast meet je het in herhaalaankopen en aanbevelingen, wat klassiek voorspellende signalen zijn voor sterke merken.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="mt-16 pt-12 border-t border-primary/10">
                        <h3 className="text-xl font-bold text-primary mb-6">Lees ook</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <Link to="/blogs/algemeen/tone-of-voice-bepalen-klinkt-merk" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Tone of voice bepalen</h3>
                                <p className="text-primary/60 text-sm">Hoe je merkstem documenteert en je team meeneemt.</p>
                            </Link>
                            <Link to="/blogs/algemeen/brandmonitoring-hou-over-gezegd" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Brandmonitoring</h3>
                                <p className="text-primary/60 text-sm">Hou bij wat klanten online over je zeggen.</p>
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
                    <h2 className="relative z-10 font-drama italic text-background text-3xl sm:text-4xl md:text-5xl mb-6">Bouw een merk waar klanten zich aan binden</h2>
                    <p className="relative z-10 font-sans text-background/70 text-lg mb-10 max-w-xl mx-auto">We helpen je een herkenbare merkidentiteit opzetten die past bij wie je bent, en zorgen dat hij landt op alle plekken waar klanten je tegenkomen.</p>
                    <Link to="/contact" className="relative z-10 btn-magnetic inline-flex items-center justify-center bg-accent text-background font-sans font-bold text-lg px-10 py-4 rounded-[2rem] hover:bg-accent/90 transition-colors">Neem contact op</Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
