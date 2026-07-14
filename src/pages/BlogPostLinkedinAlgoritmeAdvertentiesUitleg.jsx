import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ChevronRight, User } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function BlogPostLinkedinAlgoritmeAdvertentiesUitleg() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen selection:bg-accent/30 selection:text-dark flex flex-col bg-background">
            <Helmet>
                <title>Hoe werkt het LinkedIn algoritme voor advertenties? | Empowers</title>
                <meta name="description" content="Het LinkedIn algoritme voor advertenties kiest via een veiling welke ad wint, op basis van je bod en relevantie. Zo bepaal je je kosten en bereik." />
                <link rel="canonical" href="https://www.empowers.nl/blogs/social-ads/linkedin-algoritme-advertenties-uitleg" />
                <meta property="og:title" content="Hoe werkt het LinkedIn algoritme voor advertenties?" />
                <meta property="og:description" content="Het LinkedIn algoritme kiest via een veiling welke advertentie wint, op basis van je bod en relevantie. Zo werk je slim samen met dat algoritme." />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://www.empowers.nl/blogs/social-ads/linkedin-algoritme-advertenties-uitleg" />
                <meta property="og:image" content="https://www.empowers.nl/images/blogs/linkedin-algoritme-advertenties-uitleg.jpg" />
                <meta property="article:published_time" content="2026-07-08T10:00:00+02:00" />
                <meta property="article:author" content="Empowers" />
                <meta property="article:section" content="Social Ads" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Hoe werkt het LinkedIn algoritme voor advertenties?" />
                <meta name="twitter:description" content="Het LinkedIn algoritme kiest via een veiling welke advertentie wint, op basis van je bod en relevantie. Zo werk je slim samen met dat algoritme." />

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@graph": [
                            {
                                "@type": "Article",
                                "headline": "Hoe werkt het LinkedIn algoritme voor advertenties?",
                                "description": "Het LinkedIn algoritme voor advertenties kiest via een veiling welke ad wint, op basis van je bod en relevantie. Zo bepaal je je kosten en bereik.",
                                "image": "https://www.empowers.nl/images/blogs/linkedin-algoritme-advertenties-uitleg.jpg",
                                "datePublished": "2026-07-08T10:00:00+02:00",
                                "dateModified": "2026-07-08T10:00:00+02:00",
                                "author": { "@type": "Organization", "name": "Empowers" },
                                "publisher": {
                                    "@type": "Organization", "name": "Empowers", "url": "https://www.empowers.nl",
                                    "logo": { "@type": "ImageObject", "url": "https://www.empowers.nl/empowers-logo-color.svg" }
                                },
                                "mainEntityOfPage": "https://www.empowers.nl/blogs/social-ads/linkedin-algoritme-advertenties-uitleg"
                            },
                            {
                                "@type": "BreadcrumbList",
                                "itemListElement": [
                                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.empowers.nl" },
                                    { "@type": "ListItem", "position": 2, "name": "Blogs", "item": "https://www.empowers.nl/blogs" },
                                    { "@type": "ListItem", "position": 3, "name": "Social Ads", "item": "https://www.empowers.nl/blogs/social-ads" },
                                    { "@type": "ListItem", "position": 4, "name": "LinkedIn algoritme advertenties", "item": "https://www.empowers.nl/blogs/social-ads/linkedin-algoritme-advertenties-uitleg" }
                                ]
                            },
                            {
                                "@type": "FAQPage",
                                "mainEntity": [
                                    {
                                        "@type": "Question",
                                        "name": "Hoe werkt het LinkedIn algoritme voor advertenties?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Het LinkedIn algoritme draait een veiling op het moment dat iemand uit je doelgroep de feed laadt. Het algoritme kijkt naar je bod en naar de relevantie van je advertentie, en kiest daaruit een winnaar. Je bod is dus niet het enige dat telt. Een sterke, relevante advertentie wint vaak van een hoger bod met zwakke content, en kost daarbij minder per resultaat."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Wat is de relevantiescore op LinkedIn?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "De relevantiescore is LinkedIns inschatting van hoe goed je advertentie aanslaat bij de mensen die je target. LinkedIn baseert die op verwacht klikgedrag en op reacties zoals likes en comments. Hoe hoger die score, hoe goedkoper je gemiddeld adverteert, want LinkedIn beloont advertenties waar mensen echt iets mee doen met meer bereik tegen een lagere prijs."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Bepaalt het hoogste bod wie de veiling wint?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Nee. LinkedIn combineert je bod met je relevantiescore en kiest daaruit de winnaar. Een advertentie met een lager bod maar een hoge relevantie kan dus winnen van een hoger bod met zwakke content. Daarom is bieden niet de enige knop. Werken aan een advertentie die mensen aanspreekt, levert vaak meer op dan simpelweg je bod verhogen."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Hoeveel betaal je als je een LinkedIn-veiling wint?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "LinkedIn werkt met een tweede-prijs veiling. Je betaalt net genoeg om de eerstvolgende concurrent te verslaan, niet je volledige maximumbod. Win je met ruimte, dan houd je die ruimte over. Daarom hoef je je maximumbod niet kunstmatig laag te houden uit angst om te veel te betalen, want je betaalt alleen wat nodig is om de veiling te winnen."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Waarom presteert mijn LinkedIn-advertentie de eerste dagen slecht?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Het algoritme heeft tijd nodig om te leren bij wie je advertentie aanslaat. In die leerfase zijn de cijfers nog onstabiel en kunnen je kosten per resultaat hoger liggen. Laat een nieuwe campagne daarom een paar dagen draaien voor je oordeelt. Wie te snel ingrijpt of de instellingen blijft aanpassen, reset die leerfase steeds en houdt de campagne onrustig."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Hoe help je het LinkedIn algoritme aan betere resultaten?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Geef het algoritme een scherpe doelgroep, een duidelijk campagnedoel en advertenties die aansluiten bij wat die mensen bezighoudt. Kies een doel dat past bij wat je wilt bereiken, want LinkedIn stuurt precies daarop. Ververs je advertenties op tijd zodat ze niet uitgekeken raken, en laat de campagne genoeg ruimte om uit de leerfase te komen."
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
                        <span className="text-primary truncate">LinkedIn algoritme advertenties</span>
                    </nav>

                    <header className="mb-16">
                        <div className="inline-block px-3 py-1 bg-accent/10 text-accent font-mono text-xs uppercase tracking-widest rounded-full mb-6">
                            Social Ads
                        </div>
                        <h1 className="font-sans font-bold text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight mb-8">
                            Hoe werkt het LinkedIn algoritme voor advertenties?
                        </h1>

                        <div className="flex flex-wrap items-center gap-6 text-sm font-sans text-primary/60 border-y border-primary/10 py-6">
                            <div className="flex items-center gap-2"><User className="w-4 h-4" /><span>Empowers Redactie</span></div>
                            <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>8 juli 2026</span></div>
                            <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>8 minuten leestijd</span></div>
                        </div>
                    </header>

                    <figure className="w-full h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden mb-16 relative bg-primary">
                        <div className="absolute inset-0 bg-[url('/images/blogs/linkedin-algoritme-advertenties-uitleg.jpg')] bg-cover bg-center opacity-40 mix-blend-overlay" style={{backgroundImage: "url('/images/blogs/linkedin-algoritme-advertenties-uitleg.jpg')"}}></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </figure>

                    <div className="prose prose-lg max-w-none prose-headings:text-primary prose-headings:font-bold prose-a:text-accent prose-a:underline hover:prose-a:text-accent/80">
                        <p className="text-xl leading-relaxed text-primary/80 font-medium mb-6">
                            Het LinkedIn algoritme voor advertenties draait een veiling op het moment dat iemand uit je doelgroep de feed opent. Het kijkt naar twee dingen: je bod en hoe relevant je advertentie is voor die persoon. Daaruit kiest het een winnaar. Een sterke, relevante advertentie wint dus vaak van een hoger bod met zwakke content, en kost daarbij minder per resultaat.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat doet het LinkedIn algoritme bij advertenties?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Elke keer dat iemand uit jouw doelgroep de feed laadt, is er ruimte voor een advertentie. Voor die ene plek strijden op dat moment meerdere adverteerders. Het algoritme houdt razendsnel een veiling en bepaalt welke advertentie die persoon te zien krijgt. Dat gebeurt miljoenen keren per dag, in een fractie van een seconde.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Belangrijk om te weten: het hoogste bod wint niet automatisch. LinkedIn weegt je bod mee met de verwachte relevantie van je advertentie. Het platform wil namelijk niet alleen geld verdienen, maar ook dat gebruikers blijven scrollen. Een advertentie die niemand aanklikt, jaagt mensen weg. Daarom krijgt relevante content voorrang.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Welke factoren bepalen of jouw advertentie wint?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De uitkomst van de veiling hangt af van een paar knoppen die je deels zelf in de hand hebt. Hieronder de drie die het meeste verschil maken.
                        </p>

                        <h3 className="font-semibold text-primary text-xl mt-8 mb-3">Je bod</h3>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Je bod is het bedrag dat je maximaal wilt betalen voor een klik of vertoning. Je kunt LinkedIn het bod laten bepalen of zelf een grens instellen. Een hoger bod vergroot je kans om de veiling te winnen, maar het is niet de enige factor. Bieden alleen lost een zwakke advertentie niet op.
                        </p>

                        <h3 className="font-semibold text-primary text-xl mt-8 mb-3">De relevantiescore</h3>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            LinkedIn schat in hoe goed je advertentie aanslaat bij de mensen die je target. Dat doet het op basis van verwacht klikgedrag en eerdere reacties zoals likes en comments. Hoe vaker mensen iets doen met je advertentie, hoe hoger die score. En een hoge score betekent meer bereik tegen een lagere prijs.
                        </p>

                        <h3 className="font-semibold text-primary text-xl mt-8 mb-3">Je campagnedoel</h3>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Bij het opzetten kies je een doel: meer naamsbekendheid, meer websitebezoek of meer leads. Het algoritme stuurt precies op dat doel. Kies je voor leads, dan zoekt LinkedIn naar mensen binnen je doelgroep die het meest geneigd zijn een formulier in te vullen. Het verkeerde doel kiezen stuurt het algoritme dus de verkeerde kant op.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe beïnvloedt relevantie je advertentiekosten?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Relevantie en kosten hangen direct samen. LinkedIn beloont advertenties waar mensen echt op reageren met meer vertoningen voor minder geld. Een advertentie die niemand aanklikt, kost je juist meer per resultaat, omdat je dan tegen je bod aan blijft hangen om überhaupt vertoond te worden.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Dat is goed nieuws, want het betekent dat je je kosten kunt verlagen zonder je bod te verhogen. Een scherpere boodschap, een beeld dat opvalt of een aanbod dat beter past bij je doelgroep tilt je relevantie omhoog. We zien bij adverteerders dat juist de creatieve kant vaak de grootste hefboom is op de prijs, meer dan eindeloos sleutelen aan biedingen.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Waarom betaal je niet altijd je volledige bod?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            LinkedIn gebruikt een tweede-prijs veiling. Dat betekent dat je niet je volledige maximumbod betaalt, maar net genoeg om de eerstvolgende concurrent te verslaan. Win je een veiling met ruimte tussen jou en de nummer twee, dan houd je die ruimte over.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Voor jou als adverteerder is dat geruststellend. Je hoeft je maximumbod niet kunstmatig laag te houden uit angst om te veel te betalen. Je betaalt immers alleen wat nodig is om te winnen. Een reëel maximumbod instellen geeft het algoritme ruimte om voor je te werken, zonder dat je de hoofdprijs betaalt voor elke klik.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe werk je slim samen met het algoritme?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Het algoritme is geen tegenstander. Het wil precies wat jij wilt: je advertentie bij de juiste mensen krijgen. Geef het daarom de juiste input. Begint met een scherpe doelgroep, want hoe beter je weet wie je wilt bereiken, hoe gerichter LinkedIn kan leveren. Hoe je dat opbouwt, lees je in onze blog over <Link to="/blogs/social-ads/linkedin-ads-targeting-beslissers-bereiken" className="text-accent hover:underline">de juiste beslissers bereiken met LinkedIn-targeting</Link>.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Geef het algoritme daarnaast tijd. Een nieuwe campagne zit eerst in een leerfase waarin het uitzoekt bij wie je advertentie aanslaat. In die dagen zijn de cijfers nog onstabiel. Wie te snel ingrijpt, reset die fase telkens opnieuw. Laat een campagne een paar dagen rustig draaien en stuur daarna bij op basis van wat de data laten zien.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Welke fouten remmen het algoritme af?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De meest voorkomende fout is ongeduld. Adverteerders zien na een dag tegenvallende cijfers en gaan meteen aan de knoppen draaien. Daarmee gooien ze de leerfase steeds in de war en komt de campagne nooit tot rust. Een tweede fout is dezelfde advertentie maandenlang laten draaien tot je doelgroep er helemaal op uitgekeken is en je relevantie inzakt.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Ook een doelgroep die te breed is, werkt tegen je. Op LinkedIn betaal je flink per klik, dus elke vertoning aan iemand die nooit koopt, is verspild budget. En kies je het verkeerde campagnedoel, dan stuurt het algoritme op iets anders dan je eigenlijk wilt. Of je LinkedIn beter zelf doet of uitbesteedt, weeg je af in onze blog over <Link to="/blogs/social-ads/linkedin-ads-uitbesteden-b2b-resultaten" className="text-accent hover:underline">LinkedIn Ads uitbesteden</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Waar begin je deze week?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Kijk eerst of je campagnedoel klopt met wat je echt wilt bereiken. Controleer daarna of je doelgroep scherp genoeg is en of je advertenties nog aanslaan of toe zijn aan verversing. Stel een reëel maximumbod in en laat de campagne vervolgens een paar dagen met rust, zodat het algoritme uit de leerfase komt.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Het LinkedIn algoritme beloont relevantie. Geef het een goede doelgroep, een passend doel en advertenties waar mensen iets mee doen, dan werkt elke euro harder. Benieuwd of jouw LinkedIn-campagnes scherper kunnen? Plan een gesprek via empowers.nl/contact.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Veelgestelde vragen</h2>
                    </div>

                    <section className="mt-4">
                        <div className="space-y-6 not-prose">
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoe werkt het LinkedIn algoritme voor advertenties?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Het LinkedIn algoritme draait een veiling op het moment dat iemand uit je doelgroep de feed laadt. Het algoritme kijkt naar je bod en naar de relevantie van je advertentie, en kiest daaruit een winnaar. Je bod is dus niet het enige dat telt. Een sterke, relevante advertentie wint vaak van een hoger bod met zwakke content, en kost daarbij minder per resultaat.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat is de relevantiescore op LinkedIn?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    De relevantiescore is LinkedIns inschatting van hoe goed je advertentie aanslaat bij de mensen die je target. LinkedIn baseert die op verwacht klikgedrag en op reacties zoals likes en comments. Hoe hoger die score, hoe goedkoper je gemiddeld adverteert, want LinkedIn beloont advertenties waar mensen echt iets mee doen met meer bereik tegen een lagere prijs.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Bepaalt het hoogste bod wie de veiling wint?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Nee. LinkedIn combineert je bod met je relevantiescore en kiest daaruit de winnaar. Een advertentie met een lager bod maar een hoge relevantie kan dus winnen van een hoger bod met zwakke content. Daarom is bieden niet de enige knop. Werken aan een advertentie die mensen aanspreekt, levert vaak meer op dan simpelweg je bod verhogen.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoeveel betaal je als je een LinkedIn-veiling wint?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    LinkedIn werkt met een tweede-prijs veiling. Je betaalt net genoeg om de eerstvolgende concurrent te verslaan, niet je volledige maximumbod. Win je met ruimte, dan houd je die ruimte over. Daarom hoef je je maximumbod niet kunstmatig laag te houden uit angst om te veel te betalen, want je betaalt alleen wat nodig is om de veiling te winnen.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Waarom presteert mijn LinkedIn-advertentie de eerste dagen slecht?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Het algoritme heeft tijd nodig om te leren bij wie je advertentie aanslaat. In die leerfase zijn de cijfers nog onstabiel en kunnen je kosten per resultaat hoger liggen. Laat een nieuwe campagne daarom een paar dagen draaien voor je oordeelt. Wie te snel ingrijpt of de instellingen blijft aanpassen, reset die leerfase steeds en houdt de campagne onrustig.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoe help je het LinkedIn algoritme aan betere resultaten?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Geef het algoritme een scherpe doelgroep, een duidelijk campagnedoel en advertenties die aansluiten bij wat die mensen bezighoudt. Kies een doel dat past bij wat je wilt bereiken, want LinkedIn stuurt precies daarop. Ververs je advertenties op tijd zodat ze niet uitgekeken raken, en laat de campagne genoeg ruimte om uit de leerfase te komen.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="mt-16 pt-12 border-t border-primary/10">
                        <h3 className="text-xl font-bold text-primary mb-6">Lees ook</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <Link to="/blogs/social-ads/linkedin-ads-targeting-beslissers-bereiken" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">LinkedIn-targeting</h3>
                                <p className="text-primary/60 text-sm">Zo bereik je precies de juiste beslissers.</p>
                            </Link>
                            <Link to="/blogs/social-ads/linkedin-ads-uitbesteden-b2b-resultaten" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">LinkedIn Ads uitbesteden</h3>
                                <p className="text-primary/60 text-sm">Zelf doen of laten doen? Zo kies je.</p>
                            </Link>
                            <Link to="/blogs/social-ads" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Social Ads blogs</h3>
                                <p className="text-primary/60 text-sm">Meer uit Meta en LinkedIn halen.</p>
                            </Link>
                        </div>
                    </section>
                </div>
            </article>

            <section className="w-full pb-32 px-6">
                <div className="max-w-4xl mx-auto bg-primary rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
                    <h2 className="relative z-10 font-drama italic text-background text-3xl sm:text-4xl md:text-5xl mb-6">Laat het algoritme voor je werken</h2>
                    <p className="relative z-10 font-sans text-background/70 text-lg mb-10 max-w-xl mx-auto">We bouwen LinkedIn-campagnes die het algoritme de juiste input geven, zodat elke euro harder werkt. Benieuwd hoeveel scherper jouw campagnes kunnen?</p>
                    <Link to="/contact" className="relative z-10 btn-magnetic inline-flex items-center justify-center bg-accent text-background font-sans font-bold text-lg px-10 py-4 rounded-[2rem] hover:bg-accent/90 transition-colors">Neem contact op</Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
