import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Philosophy() {
    const sectionRef = useRef(null);
    const bgRef = useRef(null);
    const text1Ref = useRef(null);
    const text2Ref = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            // Parallax Background
            gsap.to(bgRef.current, {
                yPercent: 30,
                ease: 'none',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: true,
                },
            });

            // Statement Reveals (Simulating SplitText with nested spans)
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 60%',
                }
            });

            // First statement
            tl.fromTo(text1Ref.current,
                { opacity: 0, y: 30 },
                { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
            )
                // Second massive statement stagger
                .fromTo('.philosophy-word',
                    { opacity: 0, y: 50, rotationZ: 2 },
                    {
                        opacity: 1,
                        y: 0,
                        rotationZ: 0,
                        duration: 1.2,
                        stagger: 0.1,
                        ease: 'power3.out'
                    },
                    "-=0.5"
                );

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            id="waarom"
            className="relative w-full min-h-[100dvh] bg-dark flex items-center justify-center overflow-hidden py-32 px-6"
        >
            {/* Parallax Background */}
            <div
                ref={bgRef}
                className="absolute top-[-20%] left-0 w-full h-[140%] object-cover opacity-10 pointer-events-none"
                style={{
                    backgroundImage: 'url("https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2600&auto=format&fit=crop")', // Marketing analytics and strategy
                    backgroundPosition: 'center',
                    backgroundSize: 'cover'
                }}
            />

            <div className="relative z-10 max-w-5xl mx-auto w-full">
                <p
                    ref={text1Ref}
                    className="font-sans font-medium text-background/60 text-xl md:text-2xl mb-12 md:mb-20 tracking-wide max-w-2xl"
                >
                    Marketing werkt pas als het meetbaar bijdraagt aan je omzet.
                </p>

                <h2
                    ref={text2Ref}
                    className="font-sans font-bold text-background text-2xl sm:text-3xl md:text-5xl lg:text-6xl tracking-[-0.05em] flex flex-wrap items-baseline gap-x-2 sm:gap-x-3 lg:gap-x-5 gap-y-2 mt-4 leading-none"
                >
                    <span className="philosophy-word inline-block">Meer</span>
                    <span className="philosophy-word inline-block font-drama italic font-normal text-accent text-4xl sm:text-5xl md:text-7xl lg:text-[7.5rem] leading-[0.85] tracking-tight -translate-y-1 lg:-translate-y-2">omzet</span>
                    <span className="philosophy-word inline-block">uit</span>
                    <span className="philosophy-word inline-block">je</span>
                    <span className="philosophy-word inline-block">marketing.</span>
                    <span className="philosophy-word inline-block mt-2 lg:mt-4">Dat</span>
                    <span className="philosophy-word inline-block mt-2 lg:mt-4">is</span>
                    <span className="philosophy-word inline-block mt-2 lg:mt-4">het</span>
                    <span className="philosophy-word inline-block mt-2 lg:mt-4 font-drama italic font-normal text-accent text-4xl sm:text-5xl md:text-7xl lg:text-[7.5rem] leading-[0.85] tracking-tight -translate-y-1 lg:-translate-y-2">enige</span>
                    <span className="philosophy-word inline-block mt-2 lg:mt-4 font-drama italic font-normal text-accent text-4xl sm:text-5xl md:text-7xl lg:text-[7.5rem] leading-[0.85] tracking-tight -translate-y-1 lg:-translate-y-2">wat</span>
                    <span className="philosophy-word inline-block mt-2 lg:mt-4 font-drama italic font-normal text-accent text-4xl sm:text-5xl md:text-7xl lg:text-[7.5rem] leading-[0.85] tracking-tight -translate-y-1 lg:-translate-y-2">telt.</span>
                </h2>
            </div>
        </section >
    );
}
