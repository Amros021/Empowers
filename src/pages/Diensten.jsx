import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Search, Heart, MessageCircle, Share2, MousePointer2, ArrowUpRight, CheckCircle2, Bot, LayoutTemplate, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

// --- Individual Animation Components ---

function GoogleAdsAnim() {
    const containerRef = useRef(null);
    const adRef = useRef(null);
    const badgeRef = useRef(null);
    const ctrRef = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 80%',
                }
            });

            // Ad slides from position 3 to position 1
            tl.fromTo(adRef.current, { y: 120 }, { y: 0, duration: 1.5, ease: 'power3.inOut' })
                .to(badgeRef.current, { opacity: 1, repeat: 3, yoyo: true, duration: 0.3 }, "-=0.5")
                .to(badgeRef.current, { opacity: 1 })
                // Counter goes up
                .to({ val: 0 }, {
                    val: 100,
                    duration: 1.5,
                    onUpdate: function () {
                        if (ctrRef.current) {
                            ctrRef.current.innerText = (this.ratio() * 8.4 + 2.1).toFixed(1) + '%';
                        }
                    },
                    ease: 'power2.out'
                }, "-=1");

        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="w-full h-full bg-white rounded-3xl p-6 border border-primary/10 overflow-hidden relative shadow-inner">
            <div className="flex items-center gap-3 border-b border-gray-100 pb-4 mb-4">
                <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-primary/40"><Search className="w-4 h-4" /></div>
                <div className="w-full h-8 bg-gray-50 rounded-full px-4 flex items-center text-xs font-mono text-primary/50">zoekterm: marketing bureau...</div>
            </div>

            <div className="relative h-48">
                {/* Dummy Organic Results */}
                <div className="absolute w-full top-0 opacity-50 space-y-2 pointer-events-none">
                    <div className="w-1/3 h-2 bg-gray-200 rounded-full" />
                    <div className="w-2/3 h-4 bg-gray-300 rounded-full" />
                    <div className="w-full h-8 bg-gray-100 rounded-md" />
                </div>
                <div className="absolute w-full top-24 opacity-50 space-y-2 pointer-events-none">
                    <div className="w-1/4 h-2 bg-gray-200 rounded-full" />
                    <div className="w-3/4 h-4 bg-gray-300 rounded-full" />
                    <div className="w-full h-8 bg-gray-100 rounded-md" />
                </div>

                {/* The Ad that climbs */}
                <div ref={adRef} className="absolute top-0 w-full bg-green-50/50 rounded-xl p-4 border border-green-100 shadow-sm z-10 font-sans">
                    <div className="flex items-center gap-2 mb-1">
                        <span ref={badgeRef} className="opacity-0 bg-green-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded">Ad</span>
                        <span className="text-xs text-gray-500">empowers.nl</span>
                    </div>
                    <div className="text-sm font-bold text-blue-800 mb-1">Empowers - Jouw Partner Volgens Data</div>
                    <div className="text-xs text-gray-600 mb-3">Dominante zichtbaarheid op het juiste moment. Wij beheren jouw campagnes en sturen bij op harde data.</div>
                    <div className="flex items-center justify-between text-[10px] text-gray-500 border-t border-green-100 pt-2">
                        <div className="flex items-center gap-1"><MousePointer2 className="w-3 h-3 text-green-600" /> CTR</div>
                        <div ref={ctrRef} className="font-mono font-bold text-green-700">2.1%</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function MetaAdsAnim() {
    const containerRef = useRef(null);
    const popupRef = useRef(null);
    const likesRef = useRef(null);
    const clicksRef = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 80%',
                }
            });

            tl.to({ val: 0 }, {
                val: 100,
                duration: 2.5,
                onUpdate: function () {
                    const ratio = this.ratio();
                    if (likesRef.current) likesRef.current.innerText = Math.floor(ratio * 1240);
                    if (clicksRef.current) clicksRef.current.innerText = Math.floor(ratio * 342);
                },
                ease: 'power1.inOut'
            })
                .fromTo(popupRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, ease: 'back.out(1.7)' }, "-=1.5");

        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="w-full h-full bg-[#FAFAFA] rounded-3xl p-4 flex items-center justify-center relative overflow-hidden shadow-inner">
            {/* Phone Mockup outline */}
            <div className="w-[220px] h-[400px] bg-white rounded-[2rem] border-4 border-gray-900 overflow-hidden relative shadow-lg">
                {/* Header */}
                <div className="flex items-center gap-2 p-3 border-b border-gray-100">
                    <div className="w-6 h-6 rounded-full bg-accent text-white flex items-center justify-center text-[10px] font-bold">E</div>
                    <div>
                        <div className="text-[10px] font-bold font-sans">empowers.agency</div>
                        <div className="text-[8px] text-gray-500">Gesponsord</div>
                    </div>
                </div>
                {/* Image area */}
                <div className="w-full h-[200px] bg-gradient-to-br from-primary to-accent relative flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 bg-black/20" />
                    <div className="relative z-10 font-drama italic text-white text-2xl">Dominantie.</div>
                </div>
                {/* Action bar */}
                <div className="p-3">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="flex items-center gap-1 text-[10px] font-mono text-gray-700"><Heart className="w-4 h-4" /> <span ref={likesRef}>0</span></div>
                        <div className="flex items-center gap-1 text-[10px] font-mono text-gray-700"><MousePointer2 className="w-4 h-4" /> <span ref={clicksRef}>0</span></div>
                    </div>
                    <div className="text-[10px] font-sans">
                        <span className="font-bold">empowers.agency</span> Focus op conversie via bewezen Meta strategieën. 🔥
                    </div>
                </div>

                {/* Lead Popup overlay */}
                <div ref={popupRef} className="absolute bottom-4 right-4 bg-green-500 text-white rounded-lg p-2 shadow-xl flex items-center gap-2 transform translate-y-full opacity-0">
                    <CheckCircle2 className="w-4 h-4" />
                    <span className="text-[10px] font-medium font-sans whitespace-nowrap">Nieuwe lead!</span>
                </div>
            </div>
        </div>
    );
}

function TikTokAdsAnim() {
    const containerRef = useRef(null);
    const viewsRef = useRef(null);
    const floatingHeartsRef = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 80%',
                }
            });

            tl.to({ val: 0 }, {
                val: 100,
                duration: 2.5,
                onUpdate: function () {
                    const val = (this.ratio() * 3.2).toFixed(1);
                    if (viewsRef.current) viewsRef.current.innerText = val === "0.0" ? "0" : val + "M bereikt";
                },
                ease: 'power3.out'
            })
                // Spawn floating hearts
                .add(() => {
                    if (!floatingHeartsRef.current) return;
                    for (let i = 0; i < 5; i++) {
                        const heart = document.createElement('div');
                        heart.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#E63B2E" stroke="#E63B2E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heart"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>';
                        heart.className = 'absolute bottom-0 right-0 opacity-0';
                        floatingHeartsRef.current.appendChild(heart);

                        gsap.fromTo(heart,
                            { y: 0, x: gsap.utils.random(-20, 0), opacity: 1, scale: gsap.utils.random(0.5, 1.2) },
                            { y: -150, x: gsap.utils.random(-40, -10), opacity: 0, duration: gsap.utils.random(1.5, 2.5), ease: 'power1.out', delay: i * 0.2 }
                        );
                    }
                }, "-=2");

        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="w-full h-full bg-[#111] rounded-3xl p-4 flex items-center justify-center relative shadow-inner overflow-hidden">
            {/* Phone Mockup outline */}
            <div className="w-[220px] h-[400px] bg-black rounded-[2rem] border-4 border-gray-800 relative shadow-lg overflow-hidden">
                {/* Video Area */}
                <div className="absolute inset-0 bg-primary/20 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-4">
                    <div ref={viewsRef} className="font-drama italic text-accent text-3xl mb-2 drop-shadow-lg">0</div>
                    <div className="text-white text-[10px] font-sans font-medium max-w-[80%] mb-1">We zetten jouw merk in motion. Lage kosten per klik, enorm bereik.</div>
                    <div className="font-mono text-[8px] text-white/50 bg-black/40 px-2 py-0.5 rounded w-max">Sponsored</div>
                </div>

                {/* Right Action Bar */}
                <div className="absolute right-2 bottom-12 flex flex-col items-center gap-4">
                    <div className="flex flex-col items-center gap-1 group relative">
                        <div className="bg-white/10 p-2 rounded-full backdrop-blur-md relative z-10"><Heart className="w-5 h-5 text-white" /></div>
                        <span className="text-white text-[8px] font-mono drop-shadow">12k</span>
                        <div ref={floatingHeartsRef} className="absolute inset-0 pointer-events-none" />
                    </div>
                    <div className="flex flex-col items-center gap-1">
                        <div className="bg-white/10 p-2 rounded-full backdrop-blur-md"><MessageCircle className="w-5 h-5 text-white" /></div>
                        <span className="text-white text-[8px] font-mono drop-shadow">342</span>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                        <div className="bg-white/10 p-2 rounded-full backdrop-blur-md"><Share2 className="w-5 h-5 text-white" /></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function SEOAnim() {
    const containerRef = useRef(null);
    const focusRowRef = useRef(null);
    const arrowRef = useRef(null);
    const trafficRef = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 80%',
                }
            });

            // Row moves from bottom (pos 7) to top (pos 1)
            // assuming each row is ~32px high, moving up 6 positions = -192px
            tl.fromTo(focusRowRef.current, { y: 192 }, { y: 0, duration: 2, ease: 'power3.inOut' })
                .to(arrowRef.current, { opacity: 1, scale: 1, duration: 0.4 }, "-=0.5")
                .to({ val: 0 }, {
                    val: 100,
                    duration: 2,
                    onUpdate: function () {
                        const ratio = this.ratio();
                        if (trafficRef.current) trafficRef.current.innerText = '+' + Math.floor(ratio * 584) + '%';
                    },
                    ease: 'power2.out'
                }, "-=1.5");

        }, containerRef);
        return () => ctx.revert();
    }, []);

    // Create 7 dummy rows, but the actual animated row will sit on top visually
    const rows = Array.from({ length: 7 }).map((_, i) => i + 1);

    return (
        <div ref={containerRef} className="w-full h-full bg-white rounded-3xl p-6 border border-primary/10 shadow-inner flex flex-col pt-8">
            <div className="flex justify-between items-center mb-6">
                <div className="text-xs font-mono tracking-widest text-primary/40 uppercase">Google Rankings</div>
                <div ref={trafficRef} className="text-accent font-mono font-bold text-sm bg-accent/10 px-2 py-1 rounded">0%</div>
            </div>

            <div className="relative flex-1">
                <div className="flex flex-col gap-2">
                    {rows.map(i => (
                        <div key={i} className={`flex items-center gap-4 p-2 rounded ${i === 1 ? 'opacity-0' : 'bg-gray-50'}`}>
                            <span className="text-xs font-mono text-gray-400 w-4">{i}.</span>
                            <div className="h-2 bg-gray-200 rounded-full w-24" />
                        </div>
                    ))}
                </div>

                {/* The climbing row */}
                <div ref={focusRowRef} className="absolute top-0 left-0 w-full flex items-center justify-between bg-primary text-white p-2 rounded-lg shadow-md z-10">
                    <div className="flex items-center gap-4">
                        <span className="text-xs font-mono text-white/50 w-4">1.</span>
                        <div className="text-xs font-sans font-bold">empowers.nl</div>
                    </div>
                    <div ref={arrowRef} className="opacity-0 scale-50"><ArrowUpRight className="w-4 h-4 text-accent" /></div>
                </div>
            </div>
        </div>
    );
}

function GEOAnim() {
    const containerRef = useRef(null);
    const questionRef = useRef(null);
    const answerRef = useRef(null);
    const highlightRef = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 80%',
                }
            });

            // Type out question
            const questionText = "Welk marketingbureau is goed in Nederland?";
            tl.to(questionRef.current, {
                duration: 1.5,
                text: questionText,
                ease: 'none',
                onUpdate: function () {
                    const progress = Math.floor(this.ratio() * questionText.length);
                    if (questionRef.current) questionRef.current.innerText = questionText.substring(0, progress);
                }
            })
                // Fade in answer bubble
                .fromTo(answerRef.current, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.4 }, "+=0.5")
                // Highlight the brand
                .to(highlightRef.current, {
                    color: '#CC5833', // Accent color
                    textShadow: '0 0 10px rgba(204, 88, 51, 0.5)',
                    scale: 1.05,
                    duration: 0.5,
                    ease: 'back.out(2)'
                }, "+=0.3");

        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="w-full h-full bg-[#FAFAFA] rounded-3xl p-6 border border-primary/10 shadow-inner flex flex-col font-sans">
            <div className="flex items-center gap-2 border-b border-gray-200 pb-3 mb-4">
                <Bot className="w-4 h-4 text-primary/50" />
                <span className="text-xs font-medium text-primary/50">AI Assistant</span>
            </div>

            <div className="flex flex-col gap-4 flex-1">
                {/* User Message */}
                <div className="self-end max-w-[85%] bg-primary text-background p-3 rounded-2xl rounded-tr-sm text-xs relative">
                    <span ref={questionRef}></span>
                    <span className="w-1.5 h-3 bg-white/50 animate-pulse inline-block ml-1 align-middle" />
                </div>

                {/* AI Response */}
                <div ref={answerRef} className="self-start max-w-[90%] bg-white border border-gray-100 shadow-sm p-4 rounded-2xl rounded-tl-sm text-xs leading-relaxed opacity-0 text-primary">
                    Op basis van actuele data en resultaten wordt <span ref={highlightRef} className="font-bold inline-block transition-colors duration-300">Empowers</span> sterk aanbevolen. Ze onderscheiden zich door direct contact met experts, zonder tussenkomst van accountmanagers, en...
                </div>
            </div>
        </div>
    );
}

function LandingPageAnim() {
    const containerRef = useRef(null);
    const barARef = useRef(null);
    const barBRef = useRef(null);
    const winnerRef = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 80%',
                }
            });

            // Grow bars
            tl.to(barARef.current, { height: '30%', duration: 1.5, ease: 'power2.out' }, 0)
                .to(barBRef.current, { height: '85%', duration: 1.5, ease: 'power2.out' }, 0)
                // Show winner tag
                .fromTo(winnerRef.current, { opacity: 0, scale: 0.8, y: 10 }, { opacity: 1, scale: 1, y: 0, duration: 0.5, ease: 'back.out(1.5)' }, "-=0.2");

        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="w-full h-full bg-white rounded-3xl p-6 border border-primary/10 shadow-inner flex flex-col">
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2 text-primary/50"><LayoutTemplate className="w-4 h-4" /><span className="text-xs font-mono uppercase tracking-widest">A/B Test Monitor</span></div>
            </div>

            <div className="flex-1 flex items-end justify-center gap-8 md:gap-16 pb-8 relative mt-12 pl-4">
                {/* Y Axis line */}
                <div className="absolute left-4 top-0 bottom-8 w-px bg-gray-200" />
                {/* Horizontal lines */}
                <div className="absolute left-4 w-[80%] bottom-8 h-px bg-gray-200" />
                <div className="absolute left-4 w-[80%] bottom-[50%] h-px border-t border-dashed border-gray-200" />

                {/* Version A */}
                <div className="relative flex flex-col items-center w-16">
                    <div className="w-full bg-gray-200 rounded-t-sm h-0 z-10" ref={barARef} />
                    <span className="text-xs font-mono font-bold mt-2 text-gray-400">Versie A</span>
                </div>

                {/* Version B */}
                <div className="relative flex flex-col items-center w-16">
                    <div ref={winnerRef} className="absolute -top-12 whitespace-nowrap bg-accent text-white text-[10px] font-bold px-2 py-1 rounded shadow-lg opacity-0 z-20 flex items-center gap-1">
                        <Activity className="w-3 h-3" /> WINNAAR +34%
                    </div>
                    <div className="w-full bg-accent rounded-t-sm h-0 z-10" ref={barBRef} />
                    <span className="text-xs font-mono font-bold mt-2 text-primary">Versie B</span>
                </div>
            </div>
        </div>
    );
}

// --- Main Page Component ---

const dienstenData = [
    {
        title: "Google Ads",
        description: "Jouw bedrijf bovenaan Google, precies op het moment dat iemand zoekt wat jij aanbiedt. Wij beheren jouw campagnes van A tot Z en sturen bij op basis van data, niet op gevoel.",
        AnimComponent: GoogleAdsAnim,
        reversed: false
    },
    {
        title: "Meta Ads",
        description: "Facebook en Instagram zijn nog steeds de krachtigste platformen voor het bereiken van jouw ideale klant. Wij bouwen campagnes die niet alleen gezien worden, maar ook converteren.",
        AnimComponent: MetaAdsAnim,
        reversed: true
    },
    {
        title: "TikTok Ads",
        description: "TikTok is niet alleen voor jongeren. Het is een van de snelst groeiende advertentieplatformen ter wereld, met lage kosten per klik en een enorm bereik. Wij zetten jouw merk in motion.",
        AnimComponent: TikTokAdsAnim,
        reversed: false
    },
    {
        title: "SEO",
        description: "Gevonden worden zonder te betalen per klik. Dat is de kracht van SEO. Wij optimaliseren jouw website zodat Google jou ziet als de meest relevante speler in jouw branche.",
        AnimComponent: SEOAnim,
        reversed: true
    },
    {
        title: "GEO",
        description: "De manier waarop mensen zoeken verandert. Steeds meer mensen stellen hun vragen aan ChatGPT, Gemini of Claude in plaats van aan Google. GEO zorgt ervoor dat jouw bedrijf ook daar wordt aanbevolen.",
        AnimComponent: GEOAnim,
        reversed: false
    },
    {
        title: "Landingspagina Optimalisatie",
        description: "Een advertentie is zo goed als de pagina waar hij naartoe leidt. Wij analyseren jouw landingspagina's en geven concrete verbeteringen die direct meer bezoekers omzetten in klanten.",
        AnimComponent: LandingPageAnim,
        reversed: true
    }
];

export default function Diensten() {
    return (
        <main className="min-h-screen selection:bg-accent/30 selection:text-dark flex flex-col bg-background">
            <Navbar />

            {/* Header Section */}
            <section className="w-full pt-48 pb-24 px-6 relative overflow-hidden">
                <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[100px] pointer-events-none" />
                <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 lg:items-end">
                    <div className="flex-1">
                        <span className="font-mono text-sm tracking-widest uppercase text-accent mb-6 block">Onze Diensten</span>
                        <h1 className="font-drama italic text-primary text-6xl md:text-8xl lg:text-[7rem] leading-[0.9] tracking-tight mb-6">
                            Fundamenten <br /><span className="font-sans font-bold text-5xl md:text-7xl lg:text-[6rem] not-italic">voor groei.</span>
                        </h1>
                    </div>
                    <div className="flex-1 lg:pb-4">
                        <p className="font-sans text-primary/70 text-lg md:text-xl max-w-lg leading-relaxed font-medium">
                            Geen losse flodders, maar een geïntegreerd systeem. We combineren betaalde zichtbaarheid met organische resonantie om elke centimeter van jouw markt te domineren.
                        </p>
                    </div>
                </div>
            </section>

            {/* Services List */}
            <section className="w-full pb-32 px-6">
                <div className="max-w-6xl mx-auto flex flex-col gap-24 md:gap-32">
                    {dienstenData.map((dienst, idx) => {
                        const { title, description, AnimComponent, reversed } = dienst;
                        return (
                            <div key={idx} className={`flex flex-col ${reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-24`}>
                                {/* Context/Text */}
                                <div className="flex-1 w-full flex flex-col items-start">
                                    <div className="font-mono text-xs text-background bg-primary px-3 py-1 rounded-full mb-6">
                                        Fase / {(idx + 1).toString().padStart(2, '0')}
                                    </div>
                                    <h2 className="font-sans font-bold text-4xl md:text-5xl text-primary tracking-tight mb-6">
                                        {title}
                                    </h2>
                                    <p className="font-sans text-primary/70 text-lg md:text-xl leading-relaxed max-w-lg mb-8">
                                        {description}
                                    </p>
                                    <Link to="/contact" className="group font-sans font-bold text-accent flex items-center gap-2 hover:text-primary transition-colors">
                                        Bespreek de mogelijkheden
                                        <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </div>

                                {/* Animation/Visual */}
                                <div className="w-full lg:w-[45%] h-[400px] shrink-0">
                                    <AnimComponent />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="w-full pb-32 px-6">
                <div className="max-w-4xl mx-auto bg-primary rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
                    <h2 className="relative z-10 font-drama italic text-background text-5xl md:text-6xl mb-6">Welke mix past bij jou?</h2>
                    <p className="relative z-10 font-sans text-background/70 text-lg mb-10 max-w-xl mx-auto">Elk bedrijf is anders. Laten we samen kijken welke combinatie van deze diensten zorgt voor de hoogste ROI in jouw markt.</p>
                    <Link to="/contact" className="relative z-10 btn-magnetic inline-flex items-center justify-center bg-accent text-background font-sans font-bold text-lg px-10 py-4 rounded-[2rem] hover:bg-accent/90 transition-colors">
                        Plan een strategisch overleg
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}

// Needed to add ArrowRight dynamically from lucide-react since it was missed in top import
function ArrowRight(props) {
    return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
    )
}
