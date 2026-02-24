import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { MousePointer2, Settings, Zap } from 'lucide-react';

// Card 1: Diagnostic Shuffler (Direct Contact & Toegankelijkheid)
function DiagnosticShuffler() {
    const [cards, setCards] = useState([
        { id: 1, text: "Direct WhatsApp Contact", icon: Zap },
        { id: 2, text: "Wekelijkse Sync Calls", icon: Settings },
        { id: 3, text: "24/7 Monitoring", icon: MousePointer2 }
    ]);

    useEffect(() => {
        const interval = setInterval(() => {
            setCards(prev => {
                const newCards = [...prev];
                const last = newCards.pop();
                newCards.unshift(last);
                return newCards;
            });
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="bg-background rounded-[2rem] p-8 shadow-sm border border-primary/10 flex flex-col h-full min-h-[400px]">
            <div className="mb-12">
                <h3 className="font-sans font-bold text-2xl mb-2 text-dark">Directe Lijn</h3>
                <p className="font-sans text-primary/70 text-sm">Geen tussenpersonen. Jij praat altijd rechtstreeks met de expert die aan jouw campagnes werkt.</p>
            </div>

            <div className="relative flex-grow flex items-center justify-center">
                {cards.map((card, i) => (
                    <div
                        key={card.id}
                        className="absolute w-full max-w-[280px] bg-white rounded-2xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-primary/5 transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] flex items-center gap-4"
                        style={{
                            transform: `translateY(${i * 20}px) scale(${1 - i * 0.05})`,
                            opacity: 1 - i * 0.2,
                            zIndex: 3 - i,
                        }}
                    >
                        <div className="w-10 h-10 rounded-full bg-background flex items-center justify-center flex-shrink-0">
                            <card.icon className="w-5 h-5 text-accent" />
                        </div>
                        <span className="font-mono text-sm font-medium text-dark flex-grow">{card.text}</span>
                        <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                    </div>
                ))}
            </div>
        </div>
    );
}

// Card 2: Telemetry Typewriter (Deskundigheid Meta/Google/SEO)
function TelemetryTypewriter() {
    const [text, setText] = useState('');
    const [isTyping, setIsTyping] = useState(true);
    const fullText = "Analyzing search intent...\nOptimizing Meta CAPI...\nScaling ROAS vector > 3.4x\nExecuting organic takeover...";

    useEffect(() => {
        let i = 0;
        let timer;
        if (isTyping) {
            timer = setInterval(() => {
                setText(fullText.slice(0, i));
                i++;
                if (i > fullText.length) {
                    setIsTyping(false);
                    setTimeout(() => {
                        setIsTyping(true);
                        setText('');
                    }, 3000);
                }
            }, 50);
        }
        return () => clearInterval(timer);
    }, [isTyping, fullText]);

    return (
        <div className="bg-dark rounded-[2rem] p-8 shadow-xl border border-white/5 flex flex-col h-full min-h-[400px]">
            <div className="flex justify-between items-start mb-8">
                <div>
                    <h3 className="font-sans font-bold text-2xl mb-2 text-background">Volledige expertise</h3>
                    <p className="font-sans text-background/60 text-sm">Van Google Ads en Meta tot TikTok, SEO én GEO — alles onder één dak, door één specialist.</p>
                </div>
                <div className="flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full">
                    <div className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                    <span className="font-mono text-[10px] text-background/50 uppercase tracking-widest">Live Feed</span>
                </div>
            </div>

            <div className="flex-grow bg-black/40 rounded-xl p-6 font-mono text-sm text-[#E63B2E] overflow-hidden relative">
                <div className="whitespace-pre-wrap">{text}<span className="inline-block w-2 sm:h-4 h-3 bg-accent animate-pulse ml-1 align-middle" /></div>

                {/* Decorative Grid Overlay */}
                <div className="absolute inset-0 opacity-10 pointer-events-none"
                    style={{ backgroundImage: 'linear-gradient(#CC5833 1px, transparent 1px), linear-gradient(90deg, #CC5833 1px, transparent 1px)', backgroundSize: '20px 20px' }}
                />
            </div>
        </div>
    );
}

// Card 3: Cursor Protocol Scheduler (Conversie Optimalisatie)
function CursorProtocolScheduler() {
    const cursorRef = useRef(null);
    const containerRef = useRef(null);

    // Provide static random-looking data outside of the render loop to remain pure
    const randomStats = ['4.2', '7.1', '2.8', '9.5', '1.4', '6.3', '8.9', '+24%', '3.7', '5.2'];

    useEffect(() => {
        let ctx = gsap.context(() => {
            const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });

            // Starting pos
            tl.set(cursorRef.current, { x: 0, y: 0, opacity: 0, scale: 1 })
                .set('.btn-save', { scale: 1, backgroundColor: 'var(--color-background)' })
                .set('.path-line', { strokeDasharray: 1000, strokeDashoffset: 1000 });

            tl.to(cursorRef.current, { opacity: 1, duration: 0.3 })
                .to(cursorRef.current, {
                    x: 140, // Move to a specific cell
                    y: 80,
                    duration: 1.2,
                    ease: "power2.inOut"
                })
                .to(cursorRef.current, { scale: 0.85, duration: 0.1, yoyo: true, repeat: 1 }) // Click
                .to('.target-cell', { backgroundColor: 'var(--color-accent)', color: 'white', duration: 0.2 }, "-=0.1")
                .to('.path-line', { strokeDashoffset: 0, duration: 0.8, ease: "power1.inOut" }, "-=0.2") // Draw connection line
                .to(cursorRef.current, {
                    x: 140, // Move to button
                    y: 200,
                    duration: 1,
                    ease: "power2.inOut"
                }, "+=0.2")
                .to(cursorRef.current, { scale: 0.85, duration: 0.1, yoyo: true, repeat: 1 }) // Click button
                .to('.btn-save', { backgroundColor: 'var(--color-primary)', color: 'white', scale: 0.95, duration: 0.1, yoyo: true, repeat: 1 }, "-=0.1")
                .to(cursorRef.current, { opacity: 0, duration: 0.3 })
                .to('.target-cell', { backgroundColor: 'transparent', color: 'inherit', duration: 0.2, delay: 0.5 });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="bg-background rounded-[2rem] p-8 shadow-sm border border-primary/10 flex flex-col h-full min-h-[400px] overflow-hidden relative">
            <div className="mb-8 z-10 relative">
                <h3 className="font-sans font-bold text-2xl mb-2 text-dark">Conversie First</h3>
                <p className="font-sans text-primary/70 text-sm">Een mooie website is mooi, maar een website die verkoopt is beter. Wij optimaliseren elke stap van het klanttraject.</p>
            </div>

            <div className="relative flex-grow flex items-center justify-center w-full">
                <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
                    <path className="path-line" d="M180,140 C180,180 180,220 180,260" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeDasharray="4 4" opacity="0.2" />
                </svg>

                <div className="w-full max-w-[280px] flex flex-col items-center gap-12 z-10">
                    <div className="grid grid-cols-5 gap-2 w-full">
                        {randomStats.map((statVal, i) => (
                            <div
                                key={i}
                                className={`h-12 rounded-xl border border-primary/10 flex items-center justify-center font-mono text-xs transition-colors
                  ${i === 7 ? 'target-cell' : 'bg-white text-dark/40'}
                `}
                            >
                                {/* Static random-looking data points */}
                                {i === 7 ? '+24%' : <span className="opacity-20">{statVal}</span>}
                            </div>
                        ))}
                    </div>

                    <div className="btn-save w-full py-4 rounded-xl border border-primary/20 flex justify-center items-center text-sm font-sans font-bold text-primary transition-colors">
                        Implementeer A/B Test
                    </div>
                </div>

                {/* Animated Cursor */}
                <div
                    ref={cursorRef}
                    className="absolute top-0 left-0 pointer-events-none"
                    style={{ zIndex: 50 }}
                >
                    <MousePointer2 className="w-8 h-8 text-primary drop-shadow-md" fill="white" />
                </div>
            </div>
        </div>
    );
}

export default function Features() {
    const sectionRef = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.fromTo('.feature-card',
                { y: 60, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    stagger: 0.15,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 75%',
                    }
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} id="diensten" className="w-full py-32 px-6 bg-white object-contain relative z-20">
            <div className="max-w-7xl mx-auto">
                <div className="mb-20 max-w-2xl">
                    <h2 className="font-sans font-bold text-sm tracking-widest uppercase text-accent mb-4">Onze Aanpak</h2>
                    <p className="font-drama italic text-5xl md:text-6xl text-primary leading-tight">
                        Zo halen wij meer uit jouw marketing.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="feature-card">
                        <DiagnosticShuffler />
                    </div>
                    <div className="feature-card">
                        <TelemetryTypewriter />
                    </div>
                    <div className="feature-card">
                        <CursorProtocolScheduler />
                    </div>
                </div>
            </div>
        </section>
    );
}
