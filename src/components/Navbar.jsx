import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

export default function Navbar() {
    const navRef = useRef(null);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        let ctx = gsap.context(() => {
            ScrollTrigger.create({
                start: 'top -50',
                onUpdate: (self) => {
                    setIsScrolled(self.direction === 1 || self.scroll() > 50);
                },
            });
        }, navRef);

        return () => ctx.revert();
    }, []);

    return (
        <nav
            ref={navRef}
            className={`fixed top-6 left-1/2 -translate-x-1/2 z-40 transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] px-6 py-4 rounded-[4rem] flex items-center justify-between gap-12
        ${isScrolled
                    ? 'bg-background/80 backdrop-blur-xl border border-primary/10 shadow-lg min-w-[300px] md:min-w-[600px] text-primary'
                    : 'bg-transparent text-primary w-full max-w-[1200px]'
                }
      `}
        >
            <div className={`shrink-0 select-none flex items-center transition-all duration-300 ${isScrolled ? 'h-8' : 'h-10 md:h-14'}`}>
                <Link to="/" className="flex items-center h-full">
                    <img
                        src="/empowers-logo-color.svg"
                        alt="Empowers Logo"
                        className="h-full w-auto object-contain"
                        onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'block';
                        }}
                    />
                </Link>
                <span className="hidden font-sans font-bold text-xl tracking-tight">Empowers</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8 font-sans font-medium text-sm tracking-wide">
                <Link to="/diensten" className="hover:-translate-y-[1px] transition-transform whitespace-nowrap">Diensten</Link>
                <Link to="/over-ons" className="hover:-translate-y-[1px] transition-transform whitespace-nowrap">Over ons</Link>
                <Link to="/nieuws" className="hover:-translate-y-[1px] transition-transform whitespace-nowrap">Nieuws</Link>
                <Link to="/faq" className="hover:-translate-y-[1px] transition-transform whitespace-nowrap">FAQ</Link>
                <Link to="/contact" className="hover:-translate-y-[1px] transition-transform whitespace-nowrap">Contact</Link>
            </div>

            <Link to="/contact" className={`
        btn-magnetic font-sans font-bold text-sm px-6 py-2.5 rounded-[2rem] transition-colors duration-300 inline-flex items-center justify-center shrink-0 min-w-max
        ${isScrolled ? 'bg-accent text-background border border-transparent' : 'bg-primary text-background hover:bg-primary/90'}
      `}>
                <span className="relative z-10 whitespace-nowrap">Plan een gesprek</span>
            </Link>
        </nav>
    );
}
