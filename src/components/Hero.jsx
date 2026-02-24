import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import OrangeGraphic from './OrangeGraphic';
import { Link } from 'react-router-dom';

export default function Hero() {
    const containerRef = useRef(null);
    const textRefs = useRef([]);

    const addToRefs = (el) => {
        if (el && !textRefs.current.includes(el)) {
            textRefs.current.push(el);
        }
    };

    useEffect(() => {
        let ctx = gsap.context(() => {
            // Intial state setting for fast load
            gsap.set(textRefs.current, { y: 40, opacity: 0 });
            gsap.set('.hero-bg', { scale: 1.05 });

            // Build out the entrance timeline
            const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

            tl.to('.hero-bg', {
                scale: 1,
                duration: 2.5,
                ease: 'power2.out',
            })
                .to(textRefs.current, {
                    y: 0,
                    opacity: 1,
                    duration: 1.2,
                    stagger: 0.08,
                }, "-=2"); // Overlap with background scale

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="relative w-full h-[100dvh] overflow-hidden flex items-end">
            {/* Clean Background to let Graphic shine */}
            <div className="absolute inset-0 z-0 bg-background" />

            {/* Content Container (Split Grid) */}
            <div className="relative z-20 w-full max-w-7xl mx-auto px-6 pb-24 md:pb-32 flex flex-col lg:flex-row items-center justify-between gap-12">

                {/* Left side text */}
                <div className="flex flex-col items-start gap-4 lg:w-1/2">
                    <h1 className="flex flex-col gap-2 w-full">
                        <span
                            ref={addToRefs}
                            className="block font-sans font-bold text-primary text-3xl md:text-5xl lg:text-7xl tracking-tighter"
                        >
                            We empower
                        </span>
                        <span
                            ref={addToRefs}
                            className="block font-drama italic text-accent text-6xl md:text-8xl lg:text-[11rem] leading-[0.85] tracking-tight pr-4 -mt-2 md:-mt-6"
                        >
                            growth.
                        </span>
                    </h1>

                    <p
                        ref={addToRefs}
                        className="font-sans text-primary/80 text-lg md:text-xl mt-6 font-medium tracking-wide max-w-xl"
                    >
                        Wij combineren slimme advertenties met sterke organische groei — zodat jouw bedrijf niet alleen zichtbaar is, maar ook converteert. Geen loze beloftes, gewoon resultaten.
                    </p>

                    <div ref={addToRefs} className="mt-8 flex items-center gap-4">
                        <Link to="/contact" className="btn-magnetic block bg-accent text-background font-sans font-bold text-lg px-8 py-4 rounded-[2rem] hover:bg-accent/90 transition-colors whitespace-nowrap">
                            Start jouw groei
                        </Link>
                        <a
                            href="#proces"
                            onClick={(e) => {
                                e.preventDefault();
                                document.getElementById('proces')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="font-mono text-xs uppercase tracking-widest text-primary/50 hover:text-primary transition-colors flex items-center gap-2 whitespace-nowrap cursor-pointer"
                        >
                            <div className="w-8 h-[1px] bg-primary/30" />
                            Ontdek onze werkwijze
                        </a>
                    </div>
                </div>

                {/* Right side graphic */}
                <div ref={addToRefs} className="hidden lg:flex lg:w-1/2 justify-end opacity-0 transform translate-y-10">
                    <div className="w-full max-w-2xl transform scale-90 origin-right">
                        <OrangeGraphic />
                    </div>
                </div>
            </div>
        </section>
    );
}
