import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ChevronRight, User } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function BlogPostLinkedinAdsTargetingBeslissersBereiken() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen selection:bg-accent/30 selection:text-dark flex flex-col bg-background">
            <Helmet>
                <title>LinkedIn Ads targeting: zo bereik je de juiste beslissers | Empowers</title>
                <meta name="description" content="LinkedIn Ads targeting werkt het best als je richt op functie en sector in plaats van losse interesses. Zo bereik je de juiste beslissers zonder budget te verspillen." />
                <link rel="canonical" href="https://www.empowers.nl/blogs/social-ads/linkedin-ads-targeting-beslissers-bereiken" />
                <meta property="og:title" content="LinkedIn Ads targeting: zo bereik je de juiste beslissers" />
                <meta property="og:description" content="Richt op functie en sector in plaats van losse interesses. Zo bereik je met LinkedIn Ads de juiste beslissers zonder budget te verspillen." />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://www.empowers.nl/blogs/social-ads/linkedin-ads-targeting-beslissers-bereiken" />
                <meta property="og:image" content="https://www.empowers.nl/images/blogs/linkedin-ads-targeting-beslissers-bereiken.jpg" />
                <meta property="article:published_time" content="2026-07-07T10:00:00+02:00" />
                <meta property="article:author" content="Empowers" />
                <meta property="article:section" content="Social Ads" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="LinkedIn Ads targeting: zo bereik je de juiste beslissers" />
                <meta name="twitter:description" content="Richt op functie en sector in plaats van losse interesses. Zo bereik je de juiste beslissers zonder budget te verspillen." />

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@graph": [
                            {
                                "@type": "Article",
                                "headline": "LinkedIn Ads targeting: zo bereik je de juiste beslissers",
                                "description": "LinkedIn Ads targeting werkt het best als je richt op functie en sector in plaats van losse interesses. Zo bereik je de juiste beslissers zonder budget te verspillen.",
                                "image": "https://www.empowers.nl/images/blogs/linkedin-ads-targeting-beslissers-bereiken.jpg",
                                "datePublished": "2026-07-07T10:00:00+02:00",
                                "dateModified": "2026-07-07T10:00:00+02:00",
                                "author": { "@type": "Organization", "name": "Empowers" },
                                "publisher": {
                                    "@type": "Organization", "name": "Empowers", "url": "https://www.empowers.nl",
                                    "logo": { "@type": "ImageObject", "url": "https://www.empowers.nl/empowers-logo-color.svg" }
                                },
                                "mainEntityOfPage": "https://www.empowers.nl/blogs/social-ads/linkedin-ads-targeting-beslissers-bereiken"
                            },
                            {
                                "@type": "BreadcrumbList",
                                "itemListElement": [
                                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.empowers.nl" },
                                    { "@type": "ListItem", "position": 2, "name": "Blogs", "item": "https://www.empowers.nl/blogs" },
                                    { "@type": "ListItem", "position": 3, "name": "Social Ads", "item": "https://www.empowers.nl/blogs/social-ads" },
                                    { "@type": "ListItem", "position": 4, "name": "LinkedIn Ads targeting beslissers", "item": "https://www.empowers.nl/blogs/social-ads/linkedin-ads-targeting-beslissers-bereiken" }
                                ]
                            },
                            {
                                "@type": "FAQPage",
                                "mainEntity": [
                                    {
                                        "@type": "Question",
                                        "name": "Hoe werkt targeting in LinkedIn Ads?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Je bouwt je doelgroep op uit professionele kenmerken die mensen zelf op LinkedIn invullen. Denk aan functie en functieniveau, aan sector en bedrijfsgrootte, en aan iemands vaardigheden. Daardoor bereik je mensen op wat ze beroepsmatig doen, niet op losse interesses. Dat maakt LinkedIn sterk voor B2B, omdat je de beslisser kunt aanspreken in plaats van een vaag publiek."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Welke targetingopties werken het best voor B2B?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Targeten op functie en sector werkt meestal het best. Je combineert functietitel of functieniveau met de branche waarin je klant zit, zodat je precies de beslissers raakt. Een veelgebruikte aanpak is functieniveau koppelen aan bedrijfsgrootte, zodat je bijvoorbeeld alleen managers en directie binnen bedrijven van een bepaalde omvang bereikt."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Hoe groot moet een LinkedIn-doelgroep zijn?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Groot genoeg om te leveren, klein genoeg om relevant te blijven. Een hele kleine doelgroep van een paar honderd mensen levert vaak te weinig vertoningen op. Tegelijk verspil je budget als je doelgroep te breed is. LinkedIn geeft tijdens het opbouwen een schatting van de omvang, zodat je kunt bijsturen tot je een werkbare grootte hebt."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Wat is het verschil tussen functietitel en functiefunctie targeten?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Targeten op functietitel kijkt naar de exacte titel die iemand invult, wat heel precies maar ook beperkt is, omdat titels per bedrijf verschillen. Targeten op functie en functieniveau groepeert mensen op het soort werk en hun senioriteit. Die laatste aanpak is vaak stabieler, omdat je niet afhankelijk bent van hoe iemand zijn functie precies noemt."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Welke targetingfouten kosten het meeste budget?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Te breed targeten is de duurste fout. Op LinkedIn betaal je veel per klik, dus elke vertoning aan iemand die nooit beslist, is verspild geld. Ook het stapelen van te veel kenmerken kan misgaan: dan wordt je doelgroep zo klein dat de campagne nauwelijks draait. De kunst is precies genoeg afbakenen, niet te veel en niet te weinig."
                                        }
                                    },
                                    {
                                        "@type": "Question",
                                        "name": "Kun je op LinkedIn op specifieke bedrijven targeten?",
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": "Ja, je kunt een lijst met bedrijfsnamen uploaden en je advertenties alleen aan mensen binnen die bedrijven tonen. Dat is de basis van account-based marketing. Je combineert de bedrijvenlijst dan met functie of functieniveau, zodat je binnen die bedrijven alleen de beslissers bereikt die over jouw aanbod gaan."
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
                        <span className="text-primary truncate">LinkedIn Ads targeting beslissers</span>
                    </nav>

                    <header className="mb-16">
                        <div className="inline-block px-3 py-1 bg-accent/10 text-accent font-mono text-xs uppercase tracking-widest rounded-full mb-6">
                            Social Ads
                        </div>
                        <h1 className="font-sans font-bold text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight mb-8">
                            LinkedIn Ads targeting: zo bereik je de juiste beslissers
                        </h1>

                        <div className="flex flex-wrap items-center gap-6 text-sm font-sans text-primary/60 border-y border-primary/10 py-6">
                            <div className="flex items-center gap-2"><User className="w-4 h-4" /><span>Empowers Redactie</span></div>
                            <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>7 juli 2026</span></div>
                            <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>8 minuten leestijd</span></div>
                        </div>
                    </header>

                    <figure className="w-full h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden mb-16 relative bg-primary">
                        <div className="absolute inset-0 bg-[url('/images/blogs/linkedin-ads-targeting-beslissers-bereiken.jpg')] bg-cover bg-center opacity-40 mix-blend-overlay" style={{backgroundImage: "url('/images/blogs/linkedin-ads-targeting-beslissers-bereiken.jpg')"}}></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </figure>

                    <div className="prose prose-lg max-w-none prose-headings:text-primary prose-headings:font-bold prose-a:text-accent prose-a:underline hover:prose-a:text-accent/80">
                        <p className="text-xl leading-relaxed text-primary/80 font-medium mb-6">
                            LinkedIn Ads targeting werkt het best als je richt op wat mensen beroepsmatig doen, niet op losse interesses. Je bouwt je doelgroep op uit functie en functieniveau, plus sector en bedrijfsgrootte, zodat je precies de beslissers bereikt die over jouw aanbod gaan. Dat maakt LinkedIn duur per klik, maar bijzonder geschikt voor B2B. De sleutel is precies genoeg afbakenen: niet te breed en niet te smal.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe werkt targeting in LinkedIn Ads?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Je bouwt je doelgroep op uit professionele kenmerken die mensen zelf op hun profiel invullen. Functie en functieniveau zijn je basis, en daarbij target je op sector en bedrijfsgrootte, en op iemands vaardigheden. Daardoor bereik je iemand op wat hij doet voor de kost, en niet op een vaag interesseprofiel zoals op andere kanalen.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Dat is precies de kracht van LinkedIn voor B2B. Je kunt de beslisser aanspreken in plaats van een breed publiek waar misschien een koper tussen zit. De keerzijde is de prijs: omdat die data zo waardevol is, betaal je flink per klik. Daarom telt elke keuze in je targeting, want elke verkeerde vertoning kost geld.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Welke targetingopties werken het best voor B2B?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De combinatie van functie en sector is meestal het sterkst. Je koppelt het soort werk dat iemand doet aan de branche waarin je klant zit, zodat je de beslissers raakt die jouw oplossing nodig hebben. Zo voorkom je dat je betaalt voor de juiste functie in de verkeerde sector, of andersom.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Een veelgebruikte aanpak is functieniveau koppelen aan bedrijfsgrootte. Daarmee bereik je bijvoorbeeld alleen managers en directie binnen bedrijven van een bepaalde omvang. Wie je precies wilt, hangt af van je product. Hoe scherper je je ideale klant kent, hoe gerichter je deze knoppen instelt, net als in onze blog over <Link to="/blogs/social-ads/linkedin-ads-it-bedrijven-software-leads" className="text-accent hover:underline">LinkedIn Ads voor IT- en softwarebedrijven</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Functietitel of functieniveau: wat kies je?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Targeten op functietitel kijkt naar de exacte titel die iemand invult. Dat is heel precies, maar ook kwetsbaar, omdat dezelfde rol per bedrijf anders heet. De ene inkoper noemt zich inkoopmanager, de andere procurement lead. Wie alleen op titels target, mist zo een deel van zijn doelgroep.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Targeten op functie en functieniveau groepeert mensen op het soort werk en hun senioriteit. Die aanpak is vaak stabieler, omdat je niet afhankelijk bent van hoe iemand zijn functie precies noemt. In de praktijk werkt een mix goed: gebruik functieniveau en functiegebied als basis en verfijn met een paar specifieke titels. Zo houd je bereik én precisie.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe groot moet je doelgroep zijn?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Groot genoeg om te leveren, klein genoeg om relevant te blijven. Een hele kleine doelgroep van een paar honderd mensen levert vaak te weinig vertoningen op om iets te leren. Een te brede doelgroep verspilt juist budget aan mensen die nooit beslissen. Je zoekt de balans daartussen.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            LinkedIn toont tijdens het opbouwen een schatting van de omvang van je doelgroep. Gebruik dat als richtlijn en stuur bij tot je een werkbare grootte hebt. We zien bij adverteerders dat te veel kenmerken stapelen de meest voorkomende valkuil is: de doelgroep wordt dan zo klein dat de campagne nauwelijks draait. Begin liever wat ruimer en knijp daarna toe op basis van wat de cijfers laten zien.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Welke targetingfouten kosten het meeste budget?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Te breed targeten is de duurste fout. Op LinkedIn betaal je veel per klik, dus elke vertoning aan iemand die nooit over jouw aanbod beslist, is verspild geld. Bedrijven die hun doelgroep niet scherp afbakenen, zien hun budget verdampen zonder dat er kwalitatieve leads tegenover staan.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            De tegenovergestelde fout bestaat ook: zoveel kenmerken stapelen dat je doelgroep te klein wordt om te draaien. En een derde valkuil is vergeten uit te sluiten. Door bestaande klanten of de verkeerde functies uit te sluiten, voorkom je dat je betaalt voor mensen die je niet wilt bereiken. Hoe je vanaf je eerste campagne goed begint, lees je in onze blog over <Link to="/blogs/social-ads/linkedin-ads-beginners-eerste-b2b" className="text-accent hover:underline">je eerste B2B-campagne op LinkedIn</Link>.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Waar begin je deze week?</h2>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Schrijf eerst op wie je ideale klant is: welke functie beslist over jouw aanbod en in welke sector en bedrijfsgrootte zit die persoon. Bouw daaromheen één doelgroep met functieniveau en sector als basis. Kijk naar de geschatte omvang en stuur bij tot je een werkbare grootte hebt, en sluit de mensen uit die je niet wilt.
                        </p>
                        <p className="text-primary/80 leading-relaxed mb-6">
                            Goede LinkedIn-targeting draait niet om zoveel mogelijk mensen bereiken, maar om precies de juiste beslissers. Met functie en sector als basis, een werkbare doelgroepgrootte en slimme uitsluitingen werkt elke euro harder. Benieuwd of jouw targeting scherper kan? Plan een gesprek via empowers.nl/contact.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Veelgestelde vragen</h2>
                    </div>

                    <section className="mt-4">
                        <div className="space-y-6 not-prose">
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoe werkt targeting in LinkedIn Ads?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Je bouwt je doelgroep op uit professionele kenmerken die mensen zelf op LinkedIn invullen. Denk aan functie en functieniveau, aan sector en bedrijfsgrootte, en aan iemands vaardigheden. Daardoor bereik je mensen op wat ze beroepsmatig doen, niet op losse interesses. Dat maakt LinkedIn sterk voor B2B, omdat je de beslisser kunt aanspreken in plaats van een vaag publiek.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Welke targetingopties werken het best voor B2B?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Targeten op functie en sector werkt meestal het best. Je combineert functietitel of functieniveau met de branche waarin je klant zit, zodat je precies de beslissers raakt. Een veelgebruikte aanpak is functieniveau koppelen aan bedrijfsgrootte, zodat je bijvoorbeeld alleen managers en directie binnen bedrijven van een bepaalde omvang bereikt.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Hoe groot moet een LinkedIn-doelgroep zijn?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Groot genoeg om te leveren, klein genoeg om relevant te blijven. Een hele kleine doelgroep van een paar honderd mensen levert vaak te weinig vertoningen op. Tegelijk verspil je budget als je doelgroep te breed is. LinkedIn geeft tijdens het opbouwen een schatting van de omvang, zodat je kunt bijsturen tot je een werkbare grootte hebt.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Wat is het verschil tussen functietitel en functieniveau targeten?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Targeten op functietitel kijkt naar de exacte titel die iemand invult, wat heel precies maar ook beperkt is, omdat titels per bedrijf verschillen. Targeten op functie en functieniveau groepeert mensen op het soort werk en hun senioriteit. Die laatste aanpak is vaak stabieler, omdat je niet afhankelijk bent van hoe iemand zijn functie precies noemt.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Welke targetingfouten kosten het meeste budget?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Te breed targeten is de duurste fout. Op LinkedIn betaal je veel per klik, dus elke vertoning aan iemand die nooit beslist, is verspild geld. Ook het stapelen van te veel kenmerken kan misgaan: dan wordt je doelgroep zo klein dat de campagne nauwelijks draait. De kunst is precies genoeg afbakenen, niet te veel en niet te weinig.
                                </p>
                            </div>
                            <div className="border border-primary/10 rounded-xl p-6">
                                <h3 className="font-sans font-semibold text-primary text-lg mb-3">Kun je op LinkedIn op specifieke bedrijven targeten?</h3>
                                <p className="font-sans text-primary/70 leading-relaxed">
                                    Ja, je kunt een lijst met bedrijfsnamen uploaden en je advertenties alleen aan mensen binnen die bedrijven tonen. Dat is de basis van account-based marketing. Je combineert de bedrijvenlijst dan met functie of functieniveau, zodat je binnen die bedrijven alleen de beslissers bereikt die over jouw aanbod gaan.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="mt-16 pt-12 border-t border-primary/10">
                        <h3 className="text-xl font-bold text-primary mb-6">Lees ook</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <Link to="/blogs/social-ads/account-based-marketing-linkedin-ads" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">ABM via LinkedIn</h3>
                                <p className="text-primary/60 text-sm">Gericht je droomklanten benaderen.</p>
                            </Link>
                            <Link to="/blogs/social-ads/linkedin-ads-beginners-eerste-b2b" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Eerste B2B-campagne</h3>
                                <p className="text-primary/60 text-sm">Zo zet je je eerste LinkedIn Ads goed op.</p>
                            </Link>
                            <Link to="/blogs/social-ads" className="group p-6 rounded-xl border border-primary/10 hover:border-accent/30 transition-all">
                                <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">Social Ads blogs</h3>
                                <p className="text-primary/60 text-sm">Meer uit Meta, Instagram en TikTok halen.</p>
                            </Link>
                        </div>
                    </section>
                </div>
            </article>

            <section className="w-full pb-32 px-6">
                <div className="max-w-4xl mx-auto bg-primary rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
                    <h2 className="relative z-10 font-drama italic text-background text-3xl sm:text-4xl md:text-5xl mb-6">Bereik precies de juiste beslissers</h2>
                    <p className="relative z-10 font-sans text-background/70 text-lg mb-10 max-w-xl mx-auto">We bouwen LinkedIn-targeting die mikt op de mensen die over je aanbod beslissen, zonder budget te verspillen. Benieuwd hoeveel scherper jouw campagnes kunnen?</p>
                    <Link to="/contact" className="relative z-10 btn-magnetic inline-flex items-center justify-center bg-accent text-background font-sans font-bold text-lg px-10 py-4 rounded-[2rem] hover:bg-accent/90 transition-colors">Neem contact op</Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
