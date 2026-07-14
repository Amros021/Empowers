import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ChevronRight, User } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function BlogPostBrandmonitoringHouOverGezegd() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen selection:bg-accent/30 selection:text-dark flex flex-col bg-background">
            <Helmet>
                <title>Brandmonitoring: hou bij wat er over je gezegd wordt | Empowers</title>
                <meta name="description" content="Klanten praten over je merk op plekken waar jij niet bent. Brandmonitoring brengt dat terug binnen handbereik. Welke kanalen tellen en hoe je er praktisch op stuurt." />
                <link rel="canonical" href="https://www.empowers.nl/blogs/algemeen/brandmonitoring-hou-over-gezegd" />
                <meta property="og:title" content="Brandmonitoring: hou bij wat er over je gezegd wordt" />
                <meta property="og:description" content="Online reputatie ontstaat buiten je eigen kanalen. Zo richt je brandmonitoring praktisch in zonder dure tools." />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://www.empowers.nl/blogs/algemeen/brandmonitoring-hou-over-gezegd" />
                <meta property="og:image" content="https://www.empowers.nl/images/blogs/brandmonitoring-hou-over-gezegd.jpg" />
                <meta property="article:published_time" content="2026-05-13T09:00:00+02:00" />
                <meta property="article:author" content="Empowers" />
                <meta property="article:section" content="Algemeen" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Brandmonitoring: hou bij wat er over je gezegd wordt" />
                <meta name="twitter:description" content="Online reputatie monitoren zonder dure tools." />

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Article",
                        "headline": "Brandmonitoring: hou bij wat er over je gezegd wordt",
                        "description": "Klanten praten over je merk op plekken waar jij niet bent. Brandmonitoring brengt dat terug binnen handbereik. Welke kanalen tellen en hoe je er praktisch op stuurt.",
                        "image": "https://www.empowers.nl/images/blogs/brandmonitoring-hou-over-gezegd.jpg",
                        "datePublished": "2026-05-13T09:00:00+02:00",
                        "author": { "@type": "Organization", "name": "Empowers" },
                        "publisher": {
                            "@type": "Organization",
                            "name": "Empowers",
                            "url": "https://www.empowers.nl",
                            "logo": {
                                "@type": "ImageObject",
                                "url": "https://www.empowers.nl/empowers-logo-color.svg"
                            }
                        },
                        "mainEntity": {
                            "@type": "FAQPage",
                            "mainEntity": [
                                {
                                    "@type": "Question",
                                    "name": "Wat is brandmonitoring precies?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Brandmonitoring is het systematisch volgen van alles wat online over je merk, producten of bedrijfsnaam wordt gezegd. Dat gaat verder dan recensies lezen. Je kijkt naar reviews, forums, sociale media, nieuwsartikelen en sinds kort ook hoe AI-chatbots je beschrijven. Het doel: weten wat klanten en prospects over je horen, voordat je er via omzet over hoort."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Welke tools heb ik nodig om brandmonitoring op te zetten?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Voor de meeste MKB-bedrijven volstaat een combinatie van gratis bronnen. Google Alerts voor je merknaam, een platform als Trustpilot of Google Reviews voor recensies, en handmatige zoekopdrachten in ChatGPT of Perplexity. Pas als je groeit komt een betaalde tool zoals Brand24, Mention of Meltwater in beeld voor centralisatie en social listening."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Hoe vaak moet ik mijn brandmentions checken?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Dagelijks een korte check van inkomende meldingen via Google Alerts en reviews. Wekelijks een uitgebreide blik op social media en forums. Maandelijks een audit waarbij je ook test wat AI-zoekmachines over je schrijven. Acute signalen, zoals een viraal negatief bericht, vragen direct actie. Routinemonitoring volgt een vast ritme."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Hoe reageer je op een negatieve review?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Snel, eerlijk en publiekelijk. Reageer binnen 24 uur, bedank voor de feedback, erken het probleem en bied een concrete oplossing aan. Andere lezers zien hoe je reageert. Een goede respons op een slechte review versterkt vaak je reputatie meer dan tien lovende reacties. Wat je niet doet: discussiëren, ontkennen of de review proberen te laten verwijderen."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Wat doe ik als ChatGPT verkeerde dingen over mijn bedrijf schrijft?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Maak eerst inzichtelijk welke bronnen de chatbot gebruikt. Vaak ontbreekt actuele content op je eigen site of staan er verouderde derde-bronnen op één lijn met je eigen pagina. Schrijf nieuwe, duidelijke content op je site met de juiste feiten. Voeg structured data toe en zorg dat je in andere autoritaire bronnen genoemd wordt. Binnen enkele maanden updaten de modellen hun beeld."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Is brandmonitoring alleen relevant voor grote merken?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Nee, juist voor het MKB is het krachtig. Eén negatieve review op een lokale dienstverlener weegt zwaarder dan honderd reviews op een groot merk. Tegelijk levert één goed beantwoorde klacht direct meer vertrouwen op bij potentiële klanten. Kleinere bedrijven hebben bovendien zelden een PR-afdeling, dus is een eenvoudig systeem het verschil tussen overzicht en verrassing."
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
                            { "@type": "ListItem", "position": 4, "name": "Brandmonitoring", "item": "https://www.empowers.nl/blogs/algemeen/brandmonitoring-hou-over-gezegd" }
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
                        <span className="text-primary truncate">Brandmonitoring</span>
                    </nav>

                    <header className="mb-16">
                        <div className="inline-block px-3 py-1 bg-accent/10 text-accent font-mono text-xs uppercase tracking-widest rounded-full mb-6">
                            Algemeen
                        </div>
                        <h1 className="font-sans font-bold text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight mb-8">
                            Brandmonitoring: hou bij wat er over je gezegd wordt
                        </h1>

                        <div className="flex flex-wrap items-center gap-6 text-sm font-sans text-primary/60 border-y border-primary/10 py-6">
                            <div className="flex items-center gap-2">
                                <User className="w-4 h-4" />
                                <span>Empowers Redactie</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>13 mei 2026</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>7 minuten leestijd</span>
                            </div>
                        </div>
                    </header>

                    <figure className="w-full h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden mb-16 relative bg-primary">
                        <div className="absolute inset-0 bg-[url('/images/blogs/brandmonitoring-hou-over-gezegd.jpg')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </figure>

                    <div className="prose prose-lg max-w-none prose-headings:text-primary prose-headings:font-bold prose-a:text-accent prose-a:underline hover:prose-a:text-accent/80">
                        <p className="text-xl leading-relaxed text-primary/80 font-medium mb-6">
                            Je merk leeft op plekken waar jij niet bent. In de chat van een potentiële klant, in een Reddit-thread, op een review-pagina waar je zelden inlogt. Brandmonitoring brengt dat verspreide gefluister terug naar één plek waar je het kunt zien en bijsturen. Geen PR-machine, geen big-brother-dashboard. Wel: een werkbaar systeem om bij te houden hoe Nederland over jouw bedrijf praat.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Waarom dit nu meer telt dan vroeger</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Tien jaar geleden was je reputatie vooral wat mensen op feestjes vertelden. Vandaag staat dat gesprek online, in tekst, en doorzoekbaar voor iedereen die je naam googelt. Voeg daar de opkomst van AI-chatbots aan toe en het beeld wordt nog scherper. Wanneer iemand aan ChatGPT vraagt of jouw bedrijf betrouwbaar is, baseert het antwoord zich op alles wat ergens online staat. Inclusief het ene boze forumbericht uit 2022.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De ironie van moderne reputatie: een potentiële klant vormt vaak een mening voordat je überhaupt weet dat hij bestaat. Hij leest reviews, scant je social media en checkt wat AI-zoekmachines zeggen. Brandmonitoring is geen luxe meer, het is de basis. Zonder zicht op wat anderen over je schrijven, stuur je in het donker. En dat is duur, want één gemiste klacht groeit makkelijk uit tot een patroon.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">De kanalen die er echt toe doen</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Niet alles vraagt aandacht. Begin bij de bronnen die direct invloed hebben op nieuwe klanten. Google Reviews staat bovenaan: dit is wat iemand als eerste ziet als hij je opzoekt. Trustpilot speelt een rol als je veel transacties hebt. Voor lokale bedrijven tellen ook reviews op Facebook en gerichte branche-platforms zoals Werkspot, Treatwell of Independer.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Daarna komen de social-kanalen waar je doelgroep zit. LinkedIn voor B2B, Instagram voor lifestyle, TikTok voor consument. Forums zoals Reddit en branche-fora wegen zwaarder dan veel ondernemers denken, omdat ze hoog ranken in Google én vaak gelezen worden door mensen in oriëntatiefase. En tot slot: nieuwsartikelen of blogposts die je naam noemen. Die staan vaak jaren in de zoekresultaten en kleuren je beeld langdurig.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Vergeet de AI-laag niet. ChatGPT en Perplexity doen actief uitspraken over jouw bedrijf wanneer iemand naar je vraagt, en Google's eigen AI Overviews trekken die antwoorden inmiddels naar de top van de zoekresultaten waar prospects als eerste landen wanneer ze je naam intikken op zoek naar een mening. Wat zij zeggen is een echte reputatiebron geworden. Hoe je daarmee omgaat lees je in onze blog over <Link to="/blogs/geo/chatgpt-bedrijf-aanbeveelt" className="text-accent hover:underline">hoe je zorgt dat ChatGPT jouw bedrijf aanbeveelt</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Gratis basisopstelling die werkt</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Begin licht. Google Alerts voor je merknaam en eventueel die van directe concurrenten. Je krijgt een mail zodra er iets nieuws online verschijnt. Niet perfect, niet alles wordt gevangen, wel een gratis vangnet dat het grootste deel van de vermeldingen oppikt.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Stel daarnaast vaste zoekopdrachten in op de platforms waar je doelgroep zit. Een opgeslagen zoekterm in Google met je merknaam en filter op "laatste week". Bookmark de Google Business reviewpagina en Trustpilot. Voeg eventuele branche-platforms toe waar jouw klanten actief zijn. Zet meldingen aan voor reacties op je social-accounts. Met deze setup heb je binnen een uur een werkend systeem zonder een euro uit te geven.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Pas wanneer je groeit en het volume aan vermeldingen onhoudbaar wordt, kantelt de afweging richting betaald. Tools als Brand24 en Mention verzamelen alles centraal en filteren op sentiment. Voor de grotere jongens is er Meltwater. Handig als je dagelijks tientallen mentions hebt. Voor een MKB met enkele meldingen per week is het overkill.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat doe je met wat je vindt?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een mention zonder reactie is een gemiste kans. Drie scenario's komen het vaakst voor. Positieve review: bedank, deel desnoods (met toestemming) als testimonial op je site. Het kost vijf minuten en versterkt je sociale bewijs.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Negatieve review: reageer publiekelijk binnen een werkdag. Bedank de schrijver voor de feedback, erken het probleem zonder defensief te worden en bied een concrete vervolgstap aan. Andere lezers vormen hun mening niet alleen op de klacht, maar vooral op hoe jij ermee omgaat. Een rustige, oplossingsgerichte reactie kan een slechte recensie omzetten in een vertrouwenssignaal. Wat absoluut niet werkt: discussiëren in het openbaar of de review proberen te censureren.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Neutrale mention: meestal een nieuwsartikel of een forumvraag waar je merknaam valt. Beoordeel of een reactie waarde toevoegt. Bij een serieuze vraag op een forum kun je beknopt bijdragen, mits je je rol als bedrijfseigenaar transparant maakt. Doorgaans is observatie genoeg.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">De AI-dimensie: hoe chatbots over je praten</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Steeds meer beslissingen beginnen niet bij Google maar bij een chatbot. Iemand typt: "Welke marketingbureaus in Nederland zijn goed voor B2B?" en krijgt een lijst van vijf namen. Sta jij daartussen? Klopt wat het model over je schrijft? Dat zijn relevante vragen geworden.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Test het maandelijks. Stel een handvol vragen aan ChatGPT, Perplexity, Gemini en Claude waarbij je bedrijf logisch in het antwoord zou kunnen voorkomen. Noteer wat ze schrijven. Zit er een feitelijke fout in? Een verouderde dienstomschrijving? Een dienst die je niet meer levert? Dat zijn signalen om je eigen site, je Google Business Profile en je vermeldingen elders bij te werken.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            In onze blog over <Link to="/blogs/geo/chatgpt-website-citeren" className="text-accent hover:underline">hoe je zorgt dat ChatGPT je website citeert</Link> staat de aanpak in meer detail. Kort: zorg voor heldere, feitelijke content op je eigen pagina's, voeg structured data toe en bouw vermeldingen op autoritaire externe bronnen. AI-modellen passen hun antwoorden in de praktijk binnen enkele maanden aan op nieuwe content.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Veelgemaakte fouten</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Alleen positieve mentions willen zien. Dat is geen monitoring, dat is een ego-stimulans. Juist negatieve en neutrale signalen leren je het meest over wat verbeterd moet worden. Filter er niet uit wat je liever niet leest.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Te laat reageren. Een klacht die drie weken open blijft staan, bevestigt voor andere lezers dat de klant gelijk had. Snelheid telt soms meer dan de inhoud van je reactie. Een tijdelijke "we kijken ernaar, je hoort donderdag van ons" is beter dan twee weken stilte.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Geen ritme inbouwen. Brandmonitoring werkt alleen als het een gewoonte wordt. Een check op maandagochtend, vijftien minuten, daarna verder. Wie het op vrijdag-laat doet als er nog tijd over is, kijkt na een paar weken niet meer. Bouw het in als vast onderdeel van je marketingweek. Hoe dat aansluit op je bredere marketingritme staat in onze blog over <Link to="/blogs/algemeen/data-betere-marketingbeslissingen" className="text-accent hover:underline">data voor betere marketingbeslissingen</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Een werkbaar weekritme</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Maandagochtend: scan inkomende meldingen van het weekend. Google Alerts, recensiemails, social notificaties. Beantwoord wat dezelfde dag kan en plan diepere reacties in. Woensdag: half uur voor proactieve check op de platforms waar geen meldingen vandaan komen. Vrijdag: noteer patronen die deze week opvielen, ook als ze geen directe actie vragen.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Eens per maand: een uur uittrekken voor de AI-check en een bredere reflectie. Wat zeggen de chatbots? Welke thema's keren terug in reviews? Welke verbeteringen aan product, dienst of communicatie zijn nodig? Brandmonitoring is geen doel op zich, het is voer voor besluitvorming. Wie er strategisch mee werkt, bouwt langzaam een merk dat zichzelf verdedigt zodra het belangrijk wordt.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Veelgestelde vragen</h2>
                    </div>

                    <section className="mt-4">
                        <div className="space-y-6 not-prose">
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat is brandmonitoring precies?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Brandmonitoring is het systematisch volgen van alles wat online over je merk, producten of bedrijfsnaam wordt gezegd. Dat gaat verder dan recensies lezen. Je kijkt naar reviews, forums, sociale media, nieuwsartikelen en sinds kort ook hoe AI-chatbots je beschrijven. Het doel: weten wat klanten en prospects over je horen, voordat je er via omzet over hoort.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Welke tools heb ik nodig om brandmonitoring op te zetten?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Voor de meeste MKB-bedrijven volstaat een combinatie van gratis bronnen. Google Alerts voor je merknaam, een platform als Trustpilot of Google Reviews voor recensies, en handmatige zoekopdrachten in ChatGPT of Perplexity. Pas als je groeit komt een betaalde tool zoals Brand24, Mention of Meltwater in beeld voor centralisatie en social listening.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoe vaak moet ik mijn brandmentions checken?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Dagelijks een korte check van inkomende meldingen via Google Alerts en reviews. Wekelijks een uitgebreide blik op social media en forums. Maandelijks een audit waarbij je ook test wat AI-zoekmachines over je schrijven. Acute signalen, zoals een viraal negatief bericht, vragen direct actie. Routinemonitoring volgt een vast ritme.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoe reageer je op een negatieve review?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Snel en publiekelijk. Reageer binnen 24 uur, bedank voor de feedback, erken het probleem en bied een concrete oplossing aan. Andere lezers zien hoe je reageert. Een goede respons op een slechte review versterkt vaak je reputatie meer dan tien lovende reacties. Wat je niet doet: discussiëren in het openbaar of de review proberen te laten verwijderen.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat doe ik als ChatGPT verkeerde dingen over mijn bedrijf schrijft?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Maak eerst inzichtelijk welke bronnen de chatbot gebruikt. Vaak ontbreekt actuele content op je eigen site of staan er verouderde derde-bronnen op één lijn met je eigen pagina. Schrijf nieuwe, duidelijke content op je site met de juiste feiten. Voeg structured data toe en zorg dat je in andere autoritaire bronnen genoemd wordt. Binnen enkele maanden updaten de modellen hun beeld.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Is brandmonitoring alleen relevant voor grote merken?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Nee, juist voor het MKB is het krachtig. Eén negatieve review op een lokale dienstverlener weegt zwaarder dan honderd reviews op een groot merk. Tegelijk levert één goed beantwoorde klacht direct meer vertrouwen op bij potentiële klanten. Kleinere bedrijven hebben bovendien zelden een PR-afdeling, dus is een eenvoudig systeem het verschil tussen overzicht en verrassing.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="mt-16 pt-12 border-t border-primary/10">
                        <h3 className="text-xl font-bold text-primary mb-6">Lees ook</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <Link to="/blogs/geo/chatgpt-bedrijf-aanbeveelt" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Zo zorg je dat ChatGPT je bedrijf aanbeveelt</h3>
                                <p className="text-primary/60 text-sm">Wat AI-modellen meewegen wanneer ze leveranciers noemen.</p>
                            </Link>
                            <Link to="/blogs/algemeen/data-betere-marketingbeslissingen" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Data voor betere marketingbeslissingen</h3>
                                <p className="text-primary/60 text-sm">Het ritme dat data omzet in echte keuzes, zonder analyse-verlamming.</p>
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
                    <h2 className="relative z-10 font-drama italic text-background text-3xl sm:text-4xl md:text-5xl mb-6">Geen idee wat er over je gezegd wordt?</h2>
                    <p className="relative z-10 font-sans text-background/70 text-lg mb-10 max-w-xl mx-auto">We zetten een brandmonitoring-systeem op dat past bij jouw bedrijf. Inclusief het ritme om er wekelijks iets mee te doen.</p>
                    <Link to="/contact" className="relative z-10 btn-magnetic inline-flex items-center justify-center bg-accent text-background font-sans font-bold text-lg px-10 py-4 rounded-[2rem] hover:bg-accent/90 transition-colors">Neem contact op</Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
