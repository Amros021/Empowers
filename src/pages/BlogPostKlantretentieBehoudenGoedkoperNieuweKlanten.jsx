import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ChevronRight, User } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function BlogPostKlantretentieBehoudenGoedkoperNieuweKlanten() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen selection:bg-accent/30 selection:text-dark flex flex-col bg-background">
            <Helmet>
                <title>Klantretentie: behouden is goedkoper dan nieuwe klanten werven | Empowers</title>
                <meta name="description" content="Bestaande klanten houden kost minder en levert vaker meer op dan nieuwe klanten werven. Welke retentie-hefbomen werken, en hoe bouw je ze in zonder gedoe." />
                <link rel="canonical" href="https://www.empowers.nl/blogs/algemeen/klantretentie-behouden-goedkoper-nieuwe-klanten" />
                <meta property="og:title" content="Klantretentie: behouden is goedkoper dan nieuwe klanten werven" />
                <meta property="og:description" content="De rekensom achter retentie en de aanpak die in het MKB echt rendement oplevert." />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://www.empowers.nl/blogs/algemeen/klantretentie-behouden-goedkoper-nieuwe-klanten" />
                <meta property="og:image" content="https://www.empowers.nl/images/blogs/klantretentie-behouden-goedkoper-nieuwe-klanten.jpg" />
                <meta property="article:published_time" content="2026-05-13T11:00:00+02:00" />
                <meta property="article:author" content="Empowers" />
                <meta property="article:section" content="Algemeen" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Klantretentie: behouden is goedkoper dan nieuwe klanten werven" />
                <meta name="twitter:description" content="Slim sturen op herhaalomzet zonder dure tools." />

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Article",
                        "headline": "Klantretentie: behouden is goedkoper dan nieuwe klanten werven",
                        "description": "Bestaande klanten houden kost minder en levert vaker meer op dan nieuwe klanten werven. Welke retentie-hefbomen werken, en hoe bouw je ze in zonder gedoe.",
                        "image": "https://www.empowers.nl/images/blogs/klantretentie-behouden-goedkoper-nieuwe-klanten.jpg",
                        "datePublished": "2026-05-13T11:00:00+02:00",
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
                                    "name": "Waarom is klantretentie goedkoper dan nieuwe klanten werven?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Een bestaande klant kent je merk, vertrouwt je en heeft al door je salesfunnel bewogen. Een nieuwe klant moet je via dure kanalen vinden, overtuigen en converteren. Daarnaast geven herhaalkopers in de praktijk vaak meer per order en bevelen ze je aan bij anderen. Een gemiddelde MKB-onderneming bespaart met goed retentiebeleid soms meer dan met agressieve acquisitiecampagnes."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Hoe meet ik mijn klantretentie?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Voor webshops: het percentage klanten dat binnen 12 maanden opnieuw bestelt. Voor dienstverleners en abonnementen: de churn rate, oftewel het percentage klanten dat per maand of jaar opzegt. Beide zijn eenvoudig uit je administratie of CRM te halen. Begin met meten voor je optimaliseert, anders weet je niet of wat je doet werkt."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Welke tools heb ik nodig voor klantretentie?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Minder dan je denkt. Een eenvoudig CRM zoals HubSpot Free of Pipedrive, een mailtool zoals Mailchimp of Klaviyo voor segmentatie, en een proces om reviews en feedback te verzamelen. Voor webshops zijn Klaviyo of Mailchimp populair omdat ze gedrag uit je shop koppelen aan automatische mailflows. Begin klein, schaal op als het werkt."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Hoe vaak moet ik bestaande klanten benaderen?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Afhankelijk van je product. Een softwareleverancier mag maandelijks waarde-mails sturen, een webshop kan na elke aankoop een serie van drie tot vijf mails plannen, een dienstverlener zoekt een kwartaalritme. Belangrijk: lever waarde, geen aanbiedingen. Geef tips, deel cases, vraag feedback. Een klant die zich gezien voelt blijft langer."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Wat is een goede churn rate voor MKB?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Het verschilt per branche. SaaS-bedrijven mikken vaak op een maandelijkse churn onder de 5 procent. Webshops in fashion zitten doorgaans hoger dan webshops in voeding, omdat herhaalaankopen in voeding natuurlijker zijn. Vergelijk niet met een ander branche, maar met je eigen historische cijfers en branchebenchmarks."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Hoe red ik klanten die op het punt staan op te zeggen?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Signalen herkennen is de eerste stap. Verminderd gebruik, geen reactie op mails, achteruitgaande tevredenheid in surveys. Reageer voordat ze opzeggen: een persoonlijk gesprek, een aanbod om mee te denken, of een tijdelijke korting bij bewezen problemen. Pas op met paniekkortingen, daarmee train je klanten op afwachten."
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
                            { "@type": "ListItem", "position": 4, "name": "Klantretentie", "item": "https://www.empowers.nl/blogs/algemeen/klantretentie-behouden-goedkoper-nieuwe-klanten" }
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
                        <span className="text-primary truncate">Klantretentie</span>
                    </nav>

                    <header className="mb-16">
                        <div className="inline-block px-3 py-1 bg-accent/10 text-accent font-mono text-xs uppercase tracking-widest rounded-full mb-6">
                            Algemeen
                        </div>
                        <h1 className="font-sans font-bold text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight mb-8">
                            Klantretentie: behouden is goedkoper dan nieuwe klanten werven
                        </h1>

                        <div className="flex flex-wrap items-center gap-6 text-sm font-sans text-primary/60 border-y border-primary/10 py-6">
                            <div className="flex items-center gap-2"><User className="w-4 h-4" /><span>Empowers Redactie</span></div>
                            <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>13 mei 2026</span></div>
                            <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>8 minuten leestijd</span></div>
                        </div>
                    </header>

                    <figure className="w-full h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden mb-16 relative bg-primary">
                        <div className="absolute inset-0 bg-[url('/images/blogs/klantretentie-behouden-goedkoper-nieuwe-klanten.jpg')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </figure>

                    <div className="prose prose-lg max-w-none prose-headings:text-primary prose-headings:font-bold prose-a:text-accent prose-a:underline hover:prose-a:text-accent/80">
                        <p className="text-xl leading-relaxed text-primary/80 font-medium mb-6">
                            Marketing-aandacht gaat bijna altijd naar de bovenkant van de funnel. Nieuwe leads, hogere advertentiebudgetten, meer zichtbaarheid. Logisch, want groei voelt als nieuwe klanten. Tegelijk loopt aan de onderkant een lekkende emmer leeg. Klanten die je al hebt, lopen weg omdat niemand ze opbouwt. Wie die emmer dicht, groeit met hetzelfde budget vaker harder dan wie nog meer water erin gooit.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">De rekensom die niemand maakt</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Stel: je hebt 1000 klanten en je verliest er jaarlijks 200. Om alleen je omzet vast te houden moet je 200 nieuwe klanten werven, voor je überhaupt aan groei toekomt. Met een gemiddelde klantacquisitiekost van een paar honderd euro per klant in B2B en lager in B2C tellen die getallen razendsnel op. Als je in plaats daarvan 50 vertrekkers redt, scheelt dat aan zowel uitgaven als gemiste omzet.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Het zit hem niet alleen in de kosten. Een bestaande klant bestelt vaker, koopt makkelijker hogere prijzen, en geeft je het krediet om dingen te proberen. Een nieuwe klant moet je telkens opnieuw verleiden. Retentie is daarom niet alleen verdediging. Het is de meest winstgevende vorm van groei.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Waarom klanten echt weggaan</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De meeste vertrekken niet vanwege prijs. Onderzoek dat in marketing-kringen telkens terugkomt wijst eerder op een gebrek aan aandacht: klanten voelen zich niet gezien, geen waarde meer ervaren, geen opvolging gekregen. Een vergeten klant is een ex-klant in wording. Dat is een opvolg-probleem, geen prijsoorlog.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Voor MKB-bedrijven betekent dat één belangrijke conclusie. Voor je gaat sleutelen aan prijzen of nieuwe features, vraag eens aan de laatste tien klanten die opzegden waarom ze weg gingen. Tien telefoontjes, een uur werk. Het patroon dat eruit komt wijst je naar het echte gat, vaak ergens in service of communicatie.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Vijf hefbomen die werken</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Verwacht geen toverformule. Wel een handvol bouwblokken die in het MKB consistent renderen, ook zonder fancy enterprise-tools. Eerst: de welkomstcyclus. Een nieuwe klant in de eerste 30 dagen actief begeleiden bepaalt vaak of hij over een jaar nog klant is. Een serie van een paar mails, een persoonlijk telefoontje na de eerste aankoop, of een onboarding-document doet wonderen.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Daarnaast: segmenteer je communicatie. Mass-mails naar iedereen verzanden in onverschilligheid. Wie weet wat een klant gekocht heeft, hoe vaak en wanneer voor het laatst, kan relevante berichten sturen. Klaviyo en Mailchimp bieden dat ingebakken. Slimme segmenten verhogen openpercentages aanzienlijk.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een derde hefboom: actieve win-back. Klanten die zes maanden niet kochten of contact hadden, zijn nog niet weg, wel risicovol. Een gerichte mail met een persoonlijk aanbod of een waardevol inzicht herstelt vaak meer relaties dan je denkt. Veel webshops hebben hier een halve omzetkanaal liggen waar ze niet eens van weten.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Vier en vijf zijn minder zichtbaar maar misschien wel het krachtigst: actief feedback vragen en daar zichtbaar mee aan de slag gaan. Een klant die je vraagt wat beter kan, en die zes weken later een mail krijgt waarin staat "dit hebben we aangepast op basis van jouw input", voelt zich serieus genomen. Dat is loyaliteit op een manier die geen kortingscode kan kopen.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Het verschil tussen segmenten</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Niet elke klant verdient dezelfde aandacht. Een eenvoudige tweedeling helpt al. Aan de ene kant: de top-20 procent van klanten die het grootste deel van je omzet brengen. Daar mag persoonlijk contact in zitten, exclusieve content, gerichte invitaties. Aan de andere kant: nieuwe en kleine klanten waar geautomatiseerde flows volstaan. Dat is niet onpersoonlijk, dat is efficiënt.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Identificeer wie in welke groep zit, en bouw daar je communicatie omheen. Voor je top-klanten zorgt persoonlijk contact voor een sterke band die concurrenten lastig kunnen breken. Voor je middenmoot zorgt structuur dat ze niet wegglippen door verwaarlozing. Hoe je deze segmentatie aansluit op je bredere marketinginzicht staat in onze blog over <Link to="/blogs/algemeen/data-betere-marketingbeslissingen" className="text-accent hover:underline">data voor betere marketingbeslissingen</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">De rol van reviews en aanbevelingen</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Tevreden klanten zijn de goedkoopste marketingkanaal dat bestaat. Wie reviews en mond-tot-mond actief stimuleert, verlaagt zijn acquisitiekosten zonder een euro extra te adverteren. Vraag op het juiste moment: vlak na een succesvolle ervaring, niet wanneer iemand boos is. Maak het simpel: één klik, één korte vraag, één review-link.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Zorg er parallel voor dat negatieve mentions niet zonder reactie blijven. Hoe je dat doet leggen we uit in onze blog over <Link to="/blogs/algemeen/brandmonitoring-hou-over-gezegd" className="text-accent hover:underline">brandmonitoring</Link>. Een goed beantwoorde klacht haalt vaak meer vertrouwen op dan tien lovende reacties.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat doe je met opzeggers?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een opzegger is geen verloren klant, maar een leerkans. Voer een korte exit-survey of telefoontje uit. Drie vragen volstaan: wat liep niet goed, wat zou je gemist hebben, wat had ons kunnen redden. Het antwoord op die laatste vraag is goud waard. Vaak hoor je dingen die met een redelijk eenvoudige aanpassing nieuwe vertrekkers voorkomen.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Houd ook contact. Niet via verkoopmails, wel via een halfjaarlijkse waarde-mail of een persoonlijk bericht. Sommige ex-klanten komen terug, vooral als ze elders teleurgesteld raakten. Wie ze schoffelt op het moment van vertrek, sluit die deur. Wie ze met begrip laat gaan, houdt hem op een kier.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe begin je morgen?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Drie acties die binnen twee weken impact hebben. Een: bekijk de afgelopen 12 maanden, identificeer welke klanten je verloor en bel er vijf op. Wat leer je over hun vertrek? Twee: stel een eenvoudige welkomstmail op voor nieuwe klanten met daarin één duidelijke volgende stap. Drie: schrijf je top-tien klanten met een persoonlijk berichtje, geen aanbieding, alleen waardering of een waardevol inzicht. Klaar.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Dat is het hele begin. Vanuit daar bouw je verder. Acquisitie blijft belangrijk, maar wie zijn retentie op orde heeft, krijgt elke euro acquisitie-investering dubbel terug. Behouden is niet defensief. Het is de meest onderschatte vorm van groei in het MKB.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Veelgestelde vragen</h2>
                    </div>

                    <section className="mt-4">
                        <div className="space-y-6 not-prose">
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Waarom is klantretentie goedkoper dan nieuwe klanten werven?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Een bestaande klant kent je merk, vertrouwt je en heeft al door je salesfunnel bewogen. Een nieuwe klant moet je via dure kanalen vinden, overtuigen en converteren. Daarnaast geven herhaalkopers in de praktijk vaak meer per order en bevelen ze je aan bij anderen. Een gemiddelde MKB-onderneming bespaart met goed retentiebeleid soms meer dan met agressieve acquisitiecampagnes.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoe meet ik mijn klantretentie?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Voor webshops: het percentage klanten dat binnen 12 maanden opnieuw bestelt. Voor dienstverleners en abonnementen: de churn rate, oftewel het percentage klanten dat per maand of jaar opzegt. Beide zijn eenvoudig uit je administratie of CRM te halen. Begin met meten voor je optimaliseert, anders weet je niet of wat je doet werkt.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Welke tools heb ik nodig voor klantretentie?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Minder dan je denkt. Een eenvoudig CRM zoals HubSpot Free of Pipedrive, een mailtool zoals Mailchimp of Klaviyo voor segmentatie, en een proces om reviews en feedback te verzamelen. Voor webshops zijn Klaviyo of Mailchimp populair omdat ze gedrag uit je shop koppelen aan automatische mailflows. Begin klein, schaal op als het werkt.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoe vaak moet ik bestaande klanten benaderen?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Afhankelijk van je product. Een softwareleverancier mag maandelijks waarde-mails sturen, een webshop kan na elke aankoop een serie van drie tot vijf mails plannen, een dienstverlener zoekt een kwartaalritme. Belangrijk: lever waarde, geen aanbiedingen. Geef tips, deel cases, vraag feedback. Een klant die zich gezien voelt blijft langer.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat is een goede churn rate voor MKB?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Het verschilt per branche. SaaS-bedrijven mikken vaak op een maandelijkse churn onder de 5 procent. Webshops in fashion zitten doorgaans hoger dan webshops in voeding, omdat herhaalaankopen in voeding natuurlijker zijn. Vergelijk niet met een ander branche, maar met je eigen historische cijfers en branchebenchmarks.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoe red ik klanten die op het punt staan op te zeggen?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Signalen herkennen is de eerste stap. Verminderd gebruik, geen reactie op mails, achteruitgaande tevredenheid in surveys. Reageer voordat ze opzeggen: een persoonlijk gesprek, een aanbod om mee te denken, of een tijdelijke korting bij bewezen problemen. Pas op met paniekkortingen, daarmee train je klanten op afwachten.
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
                            <Link to="/blogs/algemeen/data-betere-marketingbeslissingen" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Data voor betere marketingbeslissingen</h3>
                                <p className="text-primary/60 text-sm">Welke vijf datasets retentie en groei sturen.</p>
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
                    <h2 className="relative z-10 font-drama italic text-background text-3xl sm:text-4xl md:text-5xl mb-6">Stop het weglopen, vier het terugkomen</h2>
                    <p className="relative z-10 font-sans text-background/70 text-lg mb-10 max-w-xl mx-auto">We bouwen een retentie-aanpak die in jouw business past. Welkomstcyclus, win-back, segmentatie en alles daartussen.</p>
                    <Link to="/contact" className="relative z-10 btn-magnetic inline-flex items-center justify-center bg-accent text-background font-sans font-bold text-lg px-10 py-4 rounded-[2rem] hover:bg-accent/90 transition-colors">Neem contact op</Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
