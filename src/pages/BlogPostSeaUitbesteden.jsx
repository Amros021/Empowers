import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ChevronRight, User } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const BlogPostSeaUitbesteden = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const breadcrumbs = [
    { label: 'Home', path: '/' },
    { label: 'Nieuws', path: '/nieuws' },
    { label: 'Google Ads', path: '/blogs/google-ads' },
    { label: 'SEA uitbesteden', path: '/blogs/google-ads/sea-uitbesteden-weten-voordat-kiest' },
  ];

  const faqs = [
    {
      question: 'Wat is SEA en waarom is het belangrijk?',
      answer: 'SEA staat voor Search Engine Advertising en betekent betaalde advertenties op zoekmachines zoals Google. Het is belangrijk omdat het direct potentiële klanten bereikt op het moment dat zij actief zoeken naar jouw producten of diensten. Dit levert snelle resultaten op en is meetbaar.'
    },
    {
      question: 'Wanneer moet je SEA gaan uitbesteden?',
      answer: 'Je moet SEA uitbesteden wanneer je geen intern expertise hebt, als je SEA-campagnes minder opbrengsten geven dan ze zouden moeten, of wanneer je je wilt focussen op je kernactiviteiten. Een goed SEA-bureau kan je ROI verhogen en tijd besparen.'
    },
    {
      question: 'Hoeveel kost het uitbesteden van SEA?',
      answer: 'De kosten variëren sterk afhankelijk van je budget, branche en doelstellingen. De meeste bureaus werken met een management fee (meestal 10-20% van je advertentiebudget) of met vaste tarieven per maand. Verwacht minstens €1.000-€2.000 per maand voor professionele management.'
    },
    {
      question: 'Wat kan ik verwachten van een goed SEA-bureau?',
      answer: 'Een goed bureau biedt strategische planning, uitgebreide keyword research, creatief schrijven van advertenties, regelmtige A/B-testing en transparante rapportage. Ze zouden je resultaten moeten kunnen uitleggen en regelmatig suggesties doen voor verbetering.'
    },
    {
      question: 'Welke rode vlaggen moet ik opsporen?',
      answer: 'Wees voorzichtig met bureaus die geen data of transparantie bieden, garanties afleggen over resultaten (die kunnen niet gegarandeerd worden), of geen strategie hebben. Ook als ze niet vragen wat je doelen zijn, is dat een slecht teken.'
    },
    {
      question: 'Hoe kies je het juiste SEA-bureau?',
      answer: 'Controleer hun portfolio en referenties, vraag naar hun proces en strategie, en zorg dat ze je doelen begrijpen. Een goed bureau zal tijd nemen voor een intake-gesprek en duidelijk maken hoe zij werken.'
    },
    {
      question: 'Kan ik overstappen van bureaus?',
      answer: 'Ja, je kunt altijd wisselen van bureau. Zorg wel dat de nieuwe partij je Google Ads-account goed kan overnemen en alle data intact blijft. Dit kan soms een paar weken duren, dus plan dit goed.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>SEA uitbesteden: alles wat je moet weten voordat je kiest | Empowers</title>
        <meta name="description" content="Wil je SEA-campagnes uitbesteden? Lees wat je moet weten over kosten, bureaus en het keuzeproces. Expert tips voor Google Ads optimalisatie." />
        <meta name="keywords" content="sea uitbesteden, google ads uitbesteden, sem bureau, sea bureau, google ads bureau" />
        <link rel="canonical" href="https://www.empowers.nl/blogs/google-ads/sea-uitbesteden-weten-voordat-kiest" />

        {/* OG Tags */}
        <meta property="og:title" content="SEA uitbesteden: alles wat je moet weten voordat je kiest" />
        <meta property="og:description" content="Wil je SEA-campagnes uitbesteden? Lees wat je moet weten over kosten, bureaus en het keuzeproces." />
        <meta property="og:image" content="https://www.empowers.nl/images/blogs/sea-uitbesteden-weten-voordat-kiest.jpg" />
        <meta property="og:url" content="https://www.empowers.nl/blogs/google-ads/sea-uitbesteden-weten-voordat-kiest" />
        <meta property="og:type" content="article" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="SEA uitbesteden: alles wat je moet weten voordat je kiest" />
        <meta name="twitter:description" content="Wil je SEA-campagnes uitbesteden? Lees wat je moet weten over kosten, bureaus en het keuzeproces." />

        {/* Article Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "SEA uitbesteden: alles wat je moet weten voordat je kiest",
            "description": "Wil je SEA-campagnes uitbesteden? Lees wat je moet weten over kosten, bureaus en het keuzeproces.",
            "image": "https://www.empowers.nl/images/blogs/sea-uitbesteden-weten-voordat-kiest.jpg",
            "datePublished": "2026-03-17",
            "author": {
              "@type": "Organization",
              "name": "Empowers"
            }
          })}
        </script>

        {/* FAQ Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })}
        </script>

        {/* Breadcrumb Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://www.empowers.nl/"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Nieuws",
                "item": "https://www.empowers.nl/nieuws"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "Google Ads",
                "item": "https://www.empowers.nl/blogs/google-ads"
              },
              {
                "@type": "ListItem",
                "position": 4,
                "name": "SEA uitbesteden",
                "item": "https://www.empowers.nl/blogs/google-ads/sea-uitbesteden-weten-voordat-kiest"
              }
            ]
          })}
        </script>
      </Helmet>

      <main className="min-h-screen selection:bg-accent/30 selection:text-dark flex flex-col bg-background">
        <Navbar />

        <article className="flex-1 px-4 md:px-6 lg:px-8 py-12 md:py-20 max-w-4xl mx-auto w-full">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-primary/50 mb-12">
            <Link to="/" className="hover:text-accent transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link to="/nieuws" className="hover:text-accent transition-colors">Nieuws</Link>
            <ChevronRight className="w-3 h-3" />
            <Link to="/blogs/google-ads" className="hover:text-accent transition-colors">Google Ads</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-primary truncate">SEA uitbesteden...</span>
          </nav>

          {/* Header */}
          <header className="mb-16">
            <div className="inline-block px-3 py-1 bg-accent/10 text-accent font-mono text-xs uppercase tracking-widest rounded-full mb-6">
              Google Ads
            </div>
            <h1 className="font-sans font-bold text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight mb-8">
              SEA uitbesteden: alles wat je moet weten voordat je kiest
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-sm font-sans text-primary/60 border-y border-primary/10 py-6">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>Empowers Redactie</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>17 maart 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>7 minuten leestijd</span>
              </div>
            </div>
          </header>

          {/* Featured Image */}
          <figure className="w-full h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden mb-16 relative bg-primary">
              <div className="absolute inset-0 bg-[url('/images/blogs/sea-uitbesteden-weten-voordat-kiest.jpg')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          </figure>

          {/* Content */}
          <div className="prose prose-invert max-w-none mb-12">
            <p className="text-lg text-primary/90 mb-8 leading-relaxed">
              SEA-campagnes kosten veel tijd en expertise. Veel bedrijven kiezen ervoor dit uit te besteden aan een gespecialiseerd bureau. Maar hoe weet je of dit slim is? En welk bureau kies je? In dit artikel antwoorden we op jouw belangrijkste vragen.
            </p>

            <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat is SEA precies?</h2>
            <p className="text-primary/80 leading-relaxed mb-6">
              SEA staat voor Search Engine Advertising. Dit zijn de betaalde advertenties die je bovenaan de zoekresultaten ziet op Google. Bedrijven betalen per klik (PPC - Pay Per Click). Het verschil met <Link to="/blogs/seo/lang-duurt-seo-realistische-verwachtingen" className="text-accent hover:underline">zoekmachineoptimalisatie (SEO)</Link> is duidelijk: SEO kost tijd maar geen geld, terwijl SEA direct resultaten geeft maar geld kost.
            </p>
            <p className="text-primary/80 leading-relaxed mb-6">
              Google Ads is het meest gebruikte platform. Je kunt je advertenties zeer nauwkeurig instellen op woorden die jouw doelgroep zoekt. Dat maakt SEA erg effectief voor bedrijven die snel leads of verkoop willen genereren.
            </p>

            <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wanneer moet je SEA uitbesteden?</h2>
            <p className="text-primary/80 leading-relaxed mb-6">
              Je hoeft SEA niet per se uit te besteden. Maar er zijn goede redenen om het te doen. Ten eerste: expertise. SEA is technisch en vraagt veel kennis van Google Ads, budget management en conversion <Link to="/diensten" className="text-accent hover:underline">tracking</Link>. Als je geen intern team hebt met die skills, is outsourcing slim.
            </p>
            <p className="text-primary/80 leading-relaxed mb-6">
              Ten tweede: tijd. SEA vereist voortdurende optimalisatie. Keywords toevoegen, advertenties testen, budgetten aanpassen. Als je als ondernemer zelf geen 5-10 uur per week hierin kan steken, is het beter om dit uit te besteden.
            </p>
            <p className="text-primary/80 leading-relaxed mb-6">
              Ten derde: prestaties. Misschien run je al SEA-campagnes, maar je bent niet tevreden met je ROI. Een goed bureau kan jouw resultaten flink verhogen. Ze zien waar je tijd verspilt en kunnen je geld efficiënter besteden.
            </p>

            <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoeveel gaat SEA-beheer kosten?</h2>
            <p className="text-primary/80 leading-relaxed mb-6">
              Dit is een logische vraag. De kosten bestaan uit twee delen: je advertentiebudget en de beheerskosten van het bureau.
            </p>
            <ul className="space-y-4 my-8 pl-6 list-disc marker:text-accent">
              <li>Je advertentiebudget bepaal je zelf. Dit kan €500 per maand zijn, maar ook €10.000.</li>
              <li>De beheerskosten van een bureau liggen meestal tussen 10-20% van je advertentiebudget.</li>
              <li>Sommige bureaus werken met vaste maandelijkse tarieven (bijvoorbeeld €2.000/maand).</li>
              <li>Startups betalen meestal meer per euro dan grote bedrijven.</li>
            </ul>
            <p className="text-primary/80 leading-relaxed mb-6">
              Je moet dus realistisch zijn. Voor professioneel beheer kun je minimaal €1.000-€2.000 per maand inplannen (zowel het bureau als het advertentiebudget). Kleinere budgetten gaan niet snel goed. Het loont zich vooral voor bedrijven met minstens €3.000-€5.000 maandelijk advertentiebudget.
            </p>

            <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Wat mag je van een goed bureau verwachten?</h2>
            <p className="text-primary/80 leading-relaxed mb-6">
              Een professioneel SEA-bureau gaat veel verder dan alleen advertenties online zetten. Ze analyseren jouw bedrijf, je concurrenten en je doelgroep. Ze doen uitgebreide keyword research. Ze schrijven aangrijpende advertenties. Ze testen voortdurend.
            </p>
            <p className="text-primary/80 leading-relaxed mb-6">
              Transparantie is cruciaal. Je moet maandelijks inzicht krijgen in wat je geld oplevert. Ze moeten kunnen uitleggen waarom bepaalde keywords goed presteren en andere niet. Ze moeten je groeikansen aanwijzen.
            </p>
            <p className="text-primary/80 leading-relaxed mb-6">
              Een goed bureau zal ook eerlijk zeggen waar het mogelijk niet gaat werken. Ze zullen niet beloven dat ze je ROI zeker gaan verdubbelen. Ze werken op basis van data en realistische verwachtingen.
            </p>

            <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Rode vlaggen: welke bureaus moet je vermijden?</h2>
            <p className="text-primary/80 leading-relaxed mb-6">
              Veel bureaus deugen niet. Je moet oppassen voor deze waarschuwingssignalen:
            </p>
            <ul className="space-y-4 my-8 pl-6 list-disc marker:text-accent">
              <li>Ze geven geen toegang tot jouw Google Ads-account. Dit is een enorme rode vlag.</li>
              <li>Ze garanderen resultaten. Google Ads-resultaten kunnen nooit gegarandeerd worden.</li>
              <li>Ze stellen geen vragen over jouw doelen, markt en concurrenten.</li>
              <li>Ze geven geen duidelijke rapportages. Je moet inzicht krijgen in wat je betaalt.</li>
              <li>Ze hebben geen duidelijk proces of strategie. Het klinkt vaag.</li>
              <li>Ze beloven snel resultaat zonder onderzoek te doen.</li>
              <li>Ze focussen alleen op kosten, niet op ROI of conversies.</li>
            </ul>

            <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe kies je het juiste SEA-bureau?</h2>
            <p className="text-primary/80 leading-relaxed mb-6">
              Je hebt nu veel geleerd. Hoe zet je dit om in een goede keuze? Begin met het stellen van goede vragen. Vraag naar hun portfolio, case studies en referenties van vergelijkbare bedrijven. Hoe hebben zij voor andere klanten resultaten behaald? Lees ook ons artikel over <Link to="/blogs/google-ads/google-ads-uitbesteden-wanneer-zelf" className="text-accent hover:underline">Google Ads uitbesteden versus zelf doen</Link> voor meer inzichten.
            </p>
            <p className="text-primary/80 leading-relaxed mb-6">
              Voer een intake-gesprek. Een goed bureau neemt tijd voor je. Ze stellen vragen, luisteren goed en tonen interesse in je bedrijf. Ze geven je inzicht in hun proces en hoe ze werken. Ze zijn transparant over kosten.
            </p>
            <p className="text-primary/80 leading-relaxed mb-6">
              Controleer hun certificeringen. Google Partners status is belangrijk. Het betekent dat Google hen erkent als professioneel. Ook certifications in Google Ads zijn goed.
            </p>
            <p className="text-primary/80 leading-relaxed mb-6">
              Vertrouw op je gevoel. Je gaat samenwerken met dit bureau. Ze moeten begrijpelijk uitleggen wat ze doen, luisteren naar jouw wensen en een beetje enthousiasme tonen voor jouw bedrijf. Als dit niet klopt, ga dan naar het volgende bureau.
            </p>

            <h2 className="text-3xl font-bold text-primary mt-16 mb-6">Hoe begin je met SEA-uitbesteding?</h2>
            <p className="text-primary/80 leading-relaxed mb-6">
              Je hebt een bureau gekozen. Wat nu? Je geeft het bureau toegang tot jouw Google Ads-account. Ze gaan diep graven. Ze analyseren je huidige campagnes (als je die al hebt), concurrenten, zoekwoorden en conversie-paths.
            </p>
            <p className="text-primary/80 leading-relaxed mb-6">
              Na 2-4 weken presenteren ze meestal een strategie-voorstel. Wat gaan we doen? Welke doelgroepen targeten? Welk budget verdelen we hoe? Wat verwachten we te bereiken? Pas daarna gaan ze echt aan het werk. In de eerste maanden zul je veel veranderingen zien. Het bureau optimiseert voortdurend.
            </p>
            <p className="text-primary/80 leading-relaxed mb-6">
              Wees geduldig. SEA is een marathon, geen sprint. Geef een bureau minstens 2-3 maanden om resultaten te laten zien. De eerste maand gaat veel tijd naar opzet en analyse.
            </p>
          </div>

          {/* CTA Box */}
          <div className="bg-accent/5 rounded-3xl p-8 md:p-12 border border-accent/10 mb-12">
            <h3 className="text-2xl font-bold mb-4 text-primary">
              Klaar om SEA-campagnes professioneel uit te besteden?
            </h3>
            <p className="text-primary/80 mb-6">
              Wij helpen je met een gratis intake-gesprek. Je vertelt ons over je doelen, en wij geven je eerlijk advies over wat mogelijk is. Geen verplichtingen.
            </p>
            <Link
              to="/contact"
              className="inline-block px-6 py-3 bg-accent text-dark font-semibold rounded-lg hover:bg-accent/90 transition-colors"
            >
              Neem contact op
            </Link>
          </div>

          {/* FAQ Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-primary">Veelgestelde vragen</h2>
            <div className="space-y-6 not-prose">
              {faqs.map((faq, index) => (
                <div key={index} className="border border-primary/10 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-primary mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-primary/80">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </article>

        {/* Bottom CTA Section */}
        <section className="bg-primary rounded-[3rem] p-12 md:p-20 mx-4 md:mx-6 lg:mx-8 mb-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-background mb-6">
              Wil je meer leren over SEA?
            </h2>
            <p className="text-lg text-background/80 mb-8">
              We helpen bedrijven hun SEA-campagnes optimaal in te richten. Met een duidelijke strategie en voortdurende optimalisatie behalen we resultaten die tellen.
            </p>
            <Link
              to="/contact"
              className="inline-block px-8 py-4 bg-accent text-primary font-semibold rounded-lg hover:bg-accent/90 transition-colors"
            >
              Kom in contact
            </Link>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
};

export default BlogPostSeaUitbesteden;
