import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ChevronRight, User } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function BlogPostSeaUitbestedenVragenVoordatJeTekent() {
    useEffect(() => { window.scrollTo(0, 0); }, []);

    return (
        <main className="min-h-screen selection:bg-accent/30 selection:text-dark flex flex-col bg-background">
            <Helmet>
                <title>SEA uitbesteden: 7 vragen die je moet stellen voordat je tekent | Empowers</title>
                <meta name="description" content="Voordat je een SEA-bureau inhuurt: deze zeven concrete vragen scheiden professionele partners van gladde pitches. Wat een goed antwoord eruit ziet en wat een rode vlag is." />
                <link rel="canonical" href="https://www.empowers.nl/blogs/google-ads/sea-uitbesteden-vragen-voordat-je-tekent" />
                <meta property="og:title" content="SEA uitbesteden: 7 vragen die je moet stellen voordat je tekent" />
                <meta property="og:description" content="Hoe je in één gesprek het verschil tussen een echt bureau en een pitch-bedrijf herkent." />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://www.empowers.nl/blogs/google-ads/sea-uitbesteden-vragen-voordat-je-tekent" />
                <meta property="og:image" content="https://www.empowers.nl/images/blogs/sea-uitbesteden-vragen-voordat-je-tekent.jpg" />
                <meta property="article:published_time" content="2026-05-13T16:30:00+02:00" />
                <meta property="article:section" content="Google Ads" />

                <script type="application/ld+json">{JSON.stringify({
                    "@context": "https://schema.org", "@type": "Article",
                    "headline": "SEA uitbesteden: 7 vragen die je moet stellen voordat je tekent",
                    "description": "Een concrete vragenset om SEA-bureaus te testen voor je tekent.",
                    "image": "https://www.empowers.nl/images/blogs/sea-uitbesteden-vragen-voordat-je-tekent.jpg",
                    "datePublished": "2026-05-13T16:30:00+02:00",
                    "author": { "@type": "Organization", "name": "Empowers" },
                    "publisher": { "@type": "Organization", "name": "Empowers", "url": "https://www.empowers.nl",
                        "logo": { "@type": "ImageObject", "url": "https://www.empowers.nl/empowers-logo-color.svg" } },
                    "mainEntity": { "@type": "FAQPage", "mainEntity": [
                        { "@type": "Question", "name": "Wat is de belangrijkste vraag aan een SEA-bureau?",
                          "acceptedAnswer": { "@type": "Answer", "text": "Wie zit er dagelijks aan mijn account, hoeveel jaar ervaring heeft die en hoeveel andere accounts beheert hij of zij parallel? Het antwoord vertelt je of je senior expertise krijgt of een trainee. Specialisten die meer dan 15 actieve accounts parallel beheren hebben per definitie weinig tijd voor jouw groei. Een ratio van 6 tot 10 actieve accounts per consultant is gangbaar bij professionele bureaus." } },
                        { "@type": "Question", "name": "Welke KPI's moet ik vragen?",
                          "acceptedAnswer": { "@type": "Answer", "text": "Vraag specifiek naar de primaire KPI die het bureau wil hanteren, en hoe die zich verhoudt tot jouw werkelijke omzet of marge. Voor dienstverleners is dat CPL of CPA, voor webshops ROAS of CAC. Een bureau dat als hoofd-KPI clicks, impressies of CTR voorstelt is bezig met vanity metrics. Een professioneel bureau praat over conversies en omzet vanaf het eerste gesprek." } },
                        { "@type": "Question", "name": "Hoe weet ik of een bureau echte ervaring heeft in mijn branche?",
                          "acceptedAnswer": { "@type": "Answer", "text": "Vraag om twee referenties uit je eigen branche, met telefoonnummer of email. Een bureau dat dit niet kan leveren heeft die ervaring niet. Bonus: vraag of je een live Google Ads-account mag inkijken van een vergelijkbare klant na ondertekening van een NDA. Bureaus met diepe branchekennis delen dat zonder probleem." } },
                        { "@type": "Question", "name": "Wat zijn de drie meest verbazende rode vlaggen?",
                          "acceptedAnswer": { "@type": "Answer", "text": "Eén: een vast contract van 12 maanden zonder evaluatiemoment. Twee: het bureau wil eigenaar zijn van je Google Ads-account in plaats van toegang via MCC. Drie: groeibeloftes in het eerste gesprek zonder dat ze je marges of conversiedata kennen. Elk van deze signalen is zwaarwegender dan een mooi rapportage-template." } },
                        { "@type": "Question", "name": "Wat moet er in de contract-discussie aan bod komen?",
                          "acceptedAnswer": { "@type": "Answer", "text": "Account-eigendom op jouw naam. Een proefperiode van 1 tot 3 maanden waarin je zonder opzegtermijn kunt vertrekken. Een opzegtermijn na de proefperiode van maximaal één maand. Heldere lijst werkzaamheden per maand. Een prestatie-clausule: wat gebeurt er als KPI's twee maanden niet gehaald worden? Geen vage paragraaf, wel specifieke acties." } },
                        { "@type": "Question", "name": "Hoeveel kost een gemiddelde SEA-uitbesteding?",
                          "acceptedAnswer": { "@type": "Answer", "text": "Voor MKB-pakketten op één kanaal: tussen 1.500 en 3.500 euro management fee per maand. Voor multi-channel-pakketten: tot 4.500 euro of meer. Daarnaast je advertentiebudget. Lage prijzen onder de 1.000 euro betekenen meestal junior-werk of sjabloon-aanpakken. Vraag altijd: wat krijgt het bureau in totaal alles bij elkaar per maand?" } }
                    ] }
                })}</script>
                <script type="application/ld+json">{JSON.stringify({
                    "@context": "https://schema.org", "@type": "BreadcrumbList",
                    "itemListElement": [
                        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.empowers.nl" },
                        { "@type": "ListItem", "position": 2, "name": "Blogs", "item": "https://www.empowers.nl/blogs" },
                        { "@type": "ListItem", "position": 3, "name": "Google Ads", "item": "https://www.empowers.nl/blogs/google-ads" },
                        { "@type": "ListItem", "position": 4, "name": "Vragen voordat je tekent", "item": "https://www.empowers.nl/blogs/google-ads/sea-uitbesteden-vragen-voordat-je-tekent" }
                    ]
                })}</script>
                    <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="SEA uitbesteden: 7 vragen die je moet stellen voordat je tekent" />
        <meta name="twitter:description" content="Voordat je een SEA-bureau inhuurt: deze zeven concrete vragen scheiden professionele partners van gladde pitches. Wat ee" />
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
                        <span className="text-primary truncate">Vragen voordat je tekent</span>
                    </nav>

                    <header className="mb-16">
                        <div className="inline-block px-3 py-1 bg-accent/10 text-accent font-mono text-xs uppercase tracking-widest rounded-full mb-6">Google Ads</div>
                        <h1 className="font-sans font-bold text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight mb-8">SEA uitbesteden: 7 vragen die je moet stellen voordat je tekent</h1>
                        <div className="flex flex-wrap items-center gap-6 text-sm font-sans text-primary/60 border-y border-primary/10 py-6">
                            <div className="flex items-center gap-2"><User className="w-4 h-4" /><span>Empowers Redactie</span></div>
                            <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>13 mei 2026</span></div>
                            <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>7 minuten leestijd</span></div>
                        </div>
                    </header>

                    <figure className="w-full h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden mb-16 relative bg-primary">
                        <div className="absolute inset-0 bg-[url('/images/blogs/sea-uitbesteden-vragen-voordat-je-tekent.jpg')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </figure>

                    <div className="prose prose-lg max-w-none prose-headings:text-primary prose-headings:font-bold prose-a:text-accent prose-a:underline hover:prose-a:text-accent/80">
                        <p className="text-xl leading-relaxed text-primary/80 font-medium mb-6">
                            Een SEA-bureau kiezen voelt vaak als gokken. Iedereen praat goed, iedereen heeft mooie cases, iedereen belooft groei. Maar wie kan dat ook echt waarmaken? Het verschil zit in welke vragen jij stelt voordat je tekent. Zeven concrete vragen die in één gesprek het verschil maken tussen een echt bureau en een gladde pitch.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Vraag 1: Wie werkt er dagelijks aan mijn account?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Veel bureaus laten in het eerste gesprek hun beste mensen spreken. Pitch-team, senior strateeg, directeur. Eenmaal getekend belandt jouw account bij een junior. Vraag concreet: wie is mijn dagelijkse contactpersoon, hoeveel jaar ervaring heeft die in SEA, en hoeveel andere accounts beheert hij of zij parallel?
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Goede antwoord: een naam, een aantal jaren (minimaal 3 voor MKB-accounts), en een specifieke ratio. Bij professionele bureaus is het normaal dat een specialist 6 tot 10 actieve accounts parallel beheert. Boven de 15 accounts per consultant krijgt jouw account zelden voldoende aandacht. Bij een vage "ons hele team werkt aan al onze accounts" is dat doorgaans een rode vlag.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Vraag 2: Welke KPI's stellen jullie voor en waarom?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Deze vraag is een filter dat onmiddellijk werkt. Een professioneel bureau praat over conversies, omzet, ROAS of CAC vanaf de eerste minuut. Ze willen weten wat een lead jou waard is, wat je marge is, wat je customer lifetime value is. Een minder serieus bureau praat liever over impressies en CTR, vanity metrics die altijd indrukwekkend ogen.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Goede antwoord: een primaire KPI direct gekoppeld aan jouw business. Voor dienstverleners CPL of CPA. Voor webshops ROAS én CAC (allebei, want één is niet genoeg). Voor B2B SaaS de payback-periode op de klantacquisitiekosten. Hoe je een marketingbureau überhaupt herkent dat resultaat levert staat in onze blog over <Link to="/blogs/algemeen/online-marketing-uitbesteden-bureau-resultaat" className="text-accent hover:underline">marketingbureau dat resultaat levert</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Vraag 3: Op wiens naam staat het account?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Dit is misschien wel de duurste vraag van het hele gesprek. Een Google Ads-account hoort op naam van jouw bedrijf te staan, niet op naam van het bureau. Het bureau krijgt toegang via zijn MCC (Manager Account), maar het eigenaarschap blijft bij jou. Zo niet, dan ben je bij beëindiging van de samenwerking al je historische data en quality scores kwijt.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Goede antwoord: "Vanzelfsprekend, het account staat op jouw naam vanaf dag één." Slecht antwoord: "Wij maken een nieuw account voor je aan binnen onze structuur." Bij dat laatste verlies je vrijwel alle leverage zodra het tegenzit. Geen uitzonderingen op deze regel.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Vraag 4: Wat zijn jullie totale kosten per maand, alles bij elkaar?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Sommige bureaus rekenen niet alleen een management fee, maar nemen ook stilletjes een percentage van je mediabudget. Bij 10.000 euro mediabudget kan dat oplopen tot 1.500 euro per maand extra, zonder dat het op je factuur staat. Vraag schriftelijk: wat krijgt het bureau totaal, alles bij elkaar, per maand bij dit mediabudget?
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Goede antwoord: een concreet totaalbedrag of een formule die je zelf kunt uitrekenen. Slecht antwoord: "Ja maar de fee zelf is alleen X" of "Dat hangt af van het mediabudget" zonder verdere uitleg. Transparantie op kosten is non-negotiable. Een bureau dat hier moeilijk over doet heeft iets te verbergen.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Vraag 5: Wat is jullie protocol als KPI's twee maanden niet gehaald worden?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Iedereen heeft een goede pitch voor lopende campagnes. De echte test: wat gebeurt er als het tegenzit? Een professioneel bureau heeft daar een protocol voor. Diagnostische audit binnen twee weken. Een tussentijds evaluatiegesprek met de senior strateeg waarin alternatieve scenario's worden gepresenteerd. Mogelijk een korting op de fee of de optie om tussentijds te stoppen.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Goede antwoord: een recent voorbeeld waarin het bij een klant minder goed ging en hoe ze daar mee zijn omgegaan. Slecht antwoord: "Dat gebeurt zelden bij ons" of vage beloftes over "betere samenwerking". Wie geen recent dieptepunt kan beschrijven heeft dat waarschijnlijk niet professioneel afgehandeld.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Vraag 6: Mag ik referenties uit mijn eigen branche bellen?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Bureausites staan vol met casestudies. Wat je écht wilt weten: hoe is de samenwerking in de praktijk? Vraag om twee referenties uit je eigen branche met contactgegevens. Bel ze. Vraag aan die referenties: hoe verloopt communicatie, hoe is de reactiesnelheid, wat hebben ze gedaan als het tegenzat, en wat zouden ze nu anders doen?
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Goede antwoord: twee bel-referenties die je binnen een week terugkrijgt. Een bureau dat dit niet kan of wil leveren heeft of weinig vergelijkbare klanten, of geen klanten die er goed over willen praten. Beide situaties zijn signalen om door te lopen.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Vraag 7: Hoe ziet jullie eerste 90 dagen eruit?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De eerste drie maanden bepalen of een samenwerking gaat werken. Vraag heel specifiek: wat doen jullie in week één? Wat in maand één? Wat in de eerste 90 dagen? Een professioneel bureau heeft daar een uitgewerkt plan voor met concrete deliverables, niet alleen "we kijken eerst even hoe het account ervoor staat".
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Goede antwoord: week 1 access en audit, week 2-4 baseline-meting en quick wins, maand 2 strategische restructure, maand 3 eerste resultaat-evaluatie. Slecht antwoord: vage beloftes over "we maken het je makkelijk". Hoe je überhaupt rendementsverlies door valkuilen voorkomt staat in onze blog over <Link to="/blogs/google-ads/sea-uitbesteden-valkuilen-mkb" className="text-accent hover:underline">valkuilen bij SEA uitbesteden</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat te doen met de antwoorden</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Geen enkel bureau geeft op alle zeven vragen perfecte antwoorden. Wat telt is het patroon. Drie of meer rode vlaggen: doorlopen. Eén of twee zorgpunten waar je over kunt onderhandelen: vraag specifieke aanpassingen voor je tekent. Alle zeven groen of acceptabel: je hebt waarschijnlijk een goede match gevonden.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Belangrijk: vraag deze antwoorden ook schriftelijk vastgelegd in een offerte of contract. Mondelinge beloftes zijn juridisch zwakker en worden bij personeelswissel makkelijk vergeten. Hoe SEA in 2026 verandert door AI en wat dat voor je bureaukeuze betekent staat in onze blog over <Link to="/blogs/google-ads/sea-uitbesteden-2026-ai-automatisering" className="text-accent hover:underline">SEA in 2026 en AI-automatisering</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Bonus: drie vragen voor jezelf</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Naast de zeven vragen aan het bureau zijn er drie vragen aan jezelf. Wat kost mij een verkeerde keuze financieel? Hoe geduldig kan ik zijn voor resultaten? En wil ik mezelf zo betrokken houden dat ik elke maand het account inkijk, of geef ik het volledig uit handen?
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Hoe duidelijker je antwoord op deze drie vragen, hoe beter je gesprek met het bureau verloopt. Je weet immers wat je zoekt: geen vage beloftes, wel een concrete partner die past bij hoe jij samenwerkt.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Veelgestelde vragen</h2>
                    </div>

                    <section className="mt-4">
                        <div className="space-y-6 not-prose">
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat is de belangrijkste vraag aan een SEA-bureau?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Wie zit er dagelijks aan mijn account, hoeveel jaar ervaring heeft die en hoeveel andere accounts beheert hij of zij parallel? Het antwoord vertelt je of je senior expertise krijgt of een trainee. Specialisten die meer dan 15 actieve accounts parallel beheren hebben per definitie weinig tijd voor jouw groei. Een ratio van 6 tot 10 actieve accounts per consultant is gangbaar bij professionele bureaus.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Welke KPI's moet ik vragen?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Vraag specifiek naar de primaire KPI die het bureau wil hanteren, en hoe die zich verhoudt tot jouw werkelijke omzet of marge. Voor dienstverleners is dat CPL of CPA, voor webshops ROAS of CAC. Een bureau dat als hoofd-KPI clicks, impressies of CTR voorstelt is bezig met vanity metrics. Een professioneel bureau praat over conversies en omzet vanaf het eerste gesprek.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoe weet ik of een bureau echte ervaring heeft in mijn branche?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Vraag om twee referenties uit je eigen branche, met telefoonnummer of email. Een bureau dat dit niet kan leveren heeft die ervaring niet. Bonus: vraag of je een live Google Ads-account mag inkijken van een vergelijkbare klant na ondertekening van een NDA. Bureaus met diepe branchekennis delen dat zonder probleem.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat zijn de drie meest verbazende rode vlaggen?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Eén: een vast contract van 12 maanden zonder evaluatiemoment. Twee: het bureau wil eigenaar zijn van je Google Ads-account in plaats van toegang via MCC. Drie: groeibeloftes in het eerste gesprek zonder dat ze je marges of conversiedata kennen. Elk van deze signalen is zwaarwegender dan een mooi rapportage-template.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat moet er in de contract-discussie aan bod komen?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Account-eigendom op jouw naam. Een proefperiode van 1 tot 3 maanden waarin je zonder opzegtermijn kunt vertrekken. Een opzegtermijn na de proefperiode van maximaal één maand. Heldere lijst werkzaamheden per maand. Een prestatie-clausule: wat gebeurt er als KPI's twee maanden niet gehaald worden? Geen vage paragraaf, wel specifieke acties.</p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoeveel kost een gemiddelde SEA-uitbesteding?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">Voor MKB-pakketten op één kanaal: tussen 1.500 en 3.500 euro management fee per maand. Voor multi-channel-pakketten: tot 4.500 euro of meer. Daarnaast je advertentiebudget. Lage prijzen onder de 1.000 euro betekenen meestal junior-werk of sjabloon-aanpakken. Vraag altijd: wat krijgt het bureau in totaal alles bij elkaar per maand?</p>
                            </div>
                        </div>
                    </section>

                    <section className="mt-16 pt-12 border-t border-primary/10">
                        <h3 className="text-xl font-bold text-primary mb-6">Lees ook</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <Link to="/blogs/google-ads/sea-uitbesteden-valkuilen-mkb" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Valkuilen bij SEA uitbesteden</h3>
                                <p className="text-primary/60 text-sm">De vijf duurste fouten en hoe je ze voorkomt.</p>
                            </Link>
                            <Link to="/blogs/algemeen/online-marketing-uitbesteden-bureau-resultaat" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Marketingbureau kiezen</h3>
                                <p className="text-primary/60 text-sm">Hoe je een partner herkent die echt resultaat levert.</p>
                            </Link>
                            <Link to="/blogs/google-ads" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Google Ads blogs</h3>
                                <p className="text-primary/60 text-sm">Alle artikelen over Search, Shopping en uitbesteden.</p>
                            </Link>
                        </div>
                    </section>
                </div>
            </article>

            <section className="w-full pb-32 px-6">
                <div className="max-w-4xl mx-auto bg-primary rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
                    <h2 className="relative z-10 font-drama italic text-background text-3xl sm:text-4xl md:text-5xl mb-6">Klaar voor een eerlijk gesprek?</h2>
                    <p className="relative z-10 font-sans text-background/70 text-lg mb-10 max-w-xl mx-auto">We beantwoorden je zeven vragen voor je iets tekent. Transparante prijzen, eigendom op jouw naam en concrete deliverables vanaf dag één.</p>
                    <Link to="/contact" className="relative z-10 btn-magnetic inline-flex items-center justify-center bg-accent text-background font-sans font-bold text-lg px-10 py-4 rounded-[2rem] hover:bg-accent/90 transition-colors">Neem contact op</Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
