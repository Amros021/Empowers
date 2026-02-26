import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Plus, Minus } from 'lucide-react';
import { Link } from 'react-router-dom';

const faqs = [
    {
        q: "Wat maakt Empowers anders dan andere marketingbureaus?",
        a: "Bij Empowers werk je altijd rechtstreeks met de specialist die aan jouw campagnes werkt. Daarnaast combineren we betaalde advertenties met SEO en GEO, zodat je zowel snel resultaat ziet als op de lange termijn blijft groeien."
    },
    {
        q: "Voor welke bedrijven werken jullie?",
        a: "We werken voor MKB-bedrijven, webshops en grotere ondernemingen die serieus willen groeien via online marketing. Of je nu net begint met adverteren of al een bestaand budget hebt, we kijken altijd wat de slimste aanpak is voor jouw situatie."
    },
    {
        q: "Op welke platformen zijn jullie actief?",
        a: "We beheren campagnes op Google Ads, Meta Ads (Facebook & Instagram) en TikTok Ads. Daarnaast helpen we je met SEO en GEO, zodat je ook organisch gevonden wordt."
    },
    {
        q: "Wat is GEO en waarom is het belangrijk?",
        a: "GEO staat voor Generative Engine Optimization. Waar SEO ervoor zorgt dat je gevonden wordt op Google, zorgt GEO ervoor dat AI-tools zoals ChatGPT, Gemini en Claude jouw bedrijf aanbevelen. Steeds meer mensen zoeken via AI in plaats van via Google. Als je daar nu op inspeelt, loop je voor op je concurrenten."
    },
    {
        q: "Hoeveel advertentiebudget heb ik nodig?",
        a: "Dat hangt af van je doelen, branche en het platform. We bespreken dit altijd in het eerste gesprek en geven je een eerlijk advies op basis van wat realistisch is voor jouw situatie. We werken nooit met budgetten die niet rendabel zijn."
    },
    {
        q: "Hoe snel zie ik resultaten?",
        a: "Betaalde advertenties kunnen al binnen enkele dagen resultaat laten zien. SEO en GEO zijn langetermijninvesteringen waarbij je na drie tot zes maanden duidelijke groei ziet. We zijn hier altijd transparant over, geen loze beloftes."
    },
    {
        q: "Werken jullie met vaste contracten?",
        a: "We werken met maandelijkse overeenkomsten. Geen langlopende contracten waar je aan vastzit. We verdienen je vertrouwen elke maand opnieuw."
    },
    {
        q: "Hoe ziet de samenwerking er in de praktijk uit?",
        a: "Na een kennismaking en audit stellen we een strategie op. Daarna gaan we aan de slag en heb je maandelijks een vaste call om de resultaten door te nemen. Tussentijds ben je altijd welkom om vragen te stellen via WhatsApp of e-mail."
    },
    {
        q: "Kunnen jullie mijn bestaande campagnes overnemen?",
        a: "Ja, we nemen bestaande campagnes regelmatig over. We starten altijd met een grondige audit om te zien wat er al loopt, wat beter kan en waar de grootste kansen liggen."
    },
    {
        q: "Bouwen jullie ook websites of landingspagina's?",
        a: "We bouwen geen complete websites, maar we optimaliseren wel bestaande landingspagina's en geven concrete adviezen over wat beter kan qua conversie. Een goede advertentie heeft namelijk een sterke landingspagina nodig om te werken."
    },
    {
        q: "Hoe rapporteren jullie over de resultaten?",
        a: "Je krijgt maandelijks een duidelijk overzicht van alle belangrijke cijfers, zonder onnodige jargon. We bespreken de resultaten samen en leggen uit wat de cijfers betekenen voor jouw business."
    },
    {
        q: "Is SEO nog steeds relevant nu AI zo opkomt?",
        a: "Absoluut. SEO blijft essentieel voor Google, dat nog steeds de grootste zoekmachine ter wereld is. Combineer je dat met GEO, dan ben je zowel zichtbaar voor mensen die traditioneel zoeken als voor mensen die AI-tools gebruiken. Dat is precies de combinatie die wij aanbieden."
    },
    {
        q: "Wat kost een samenwerking met Empowers?",
        a: "Onze tarieven zijn afhankelijk van de diensten die je afneemt en de omvang van de campagnes. We bespreken dit altijd transparant in het eerste gesprek, zodat je precies weet waar je aan toe bent."
    },
    {
        q: "Ik heb nog nooit geadverteerd. Kan ik toch bij jullie terecht?",
        a: "Zeker. We begeleiden je stap voor stap, van de eerste advertentie tot een volledige groeistrategie. Je hoeft geen verstand te hebben van marketing, dat is precies waarom je ons inschakelt."
    },
    {
        q: "Hoe begin ik?",
        a: "Plan een gratis strategiegesprek via de website. We bespreken jouw situatie, doelen en budget, en je gaat altijd weg met concrete inzichten, ook als we uiteindelijk niet samenwerken."
    }
];

function FAQItem({ faq, isOpen, onClick }) {
    return (
        <div className="border-b border-primary/10">
            <button
                onClick={onClick}
                className="w-full py-6 flex items-start sm:items-center justify-between gap-6 text-left focus:outline-none group"
            >
                <h3 className="font-sans font-bold text-lg md:text-xl text-primary group-hover:text-accent transition-colors pr-8">
                    {faq.q}
                </h3>
                <div className={`shrink-0 text-accent transition-transform duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] mt-1 sm:mt-0 ${isOpen ? 'rotate-180' : ''}`}>
                    {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                </div>
            </button>
            <div className={`grid transition-all duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${isOpen ? 'grid-rows-[1fr] opacity-100 pb-6' : 'grid-rows-[0fr] opacity-0 pb-0'}`}>
                <div className="overflow-hidden">
                    <p className="font-sans text-primary/70 leading-relaxed max-w-3xl pr-4 sm:pr-12">
                        {faq.a}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(0); // Open the first one by default

    const toggleFaq = (index) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };

    return (
        <main className="min-h-screen selection:bg-accent/30 selection:text-dark flex flex-col bg-background">
            <Navbar />

            <section className="flex-1 w-full pt-40 pb-32 px-6">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <div className="mb-16 md:mb-24 text-center md:text-left">
                        <span className="font-mono text-sm tracking-widest uppercase text-accent mb-4 block">Kennisbank</span>
                        <h1 className="font-drama italic text-primary text-4xl sm:text-5xl md:text-7xl mb-6">
                            Veelgestelde vragen
                        </h1>
                        <p className="font-sans text-primary/70 text-lg max-w-2xl mx-auto md:mx-0">
                            Alles wat je wilt weten over onze werkwijze, prijzen en de integratie van betaalde en organische groei via SEO & GEO.
                        </p>
                    </div>

                    {/* FAQ Accordion */}
                    <div className="w-full">
                        {faqs.map((faq, idx) => (
                            <FAQItem
                                key={idx}
                                faq={faq}
                                isOpen={openIndex === idx}
                                onClick={() => toggleFaq(idx)}
                            />
                        ))}
                    </div>

                    {/* Call to action below FAQ */}
                    <div className="mt-24 p-8 sm:p-10 md:p-14 bg-primary rounded-[2rem] sm:rounded-[3rem] text-center relative overflow-hidden flex flex-col items-center">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />

                        <h3 className="relative z-10 font-drama italic text-background text-3xl sm:text-4xl md:text-5xl mb-4">Staat je vraag er niet tussen?</h3>
                        <p className="relative z-10 font-sans text-background/70 mb-8 max-w-md mx-auto">Stuur ons direct een bericht en we beantwoorden hem zo snel mogelijk.</p>

                        <Link to="/contact" className="relative z-10 btn-magnetic inline-flex items-center justify-center bg-accent text-background font-sans font-bold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-[2rem] hover:bg-accent/90 transition-colors">
                            Neem contact op
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
