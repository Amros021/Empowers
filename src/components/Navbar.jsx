import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Navbar() {
    const navRef = useRef(null);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);


    // Prevent scrolling when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; }
    }, [isMobileMenuOpen]);

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

    const navLinks = [
        { name: 'Diensten', path: '/diensten' },
        { name: 'Over ons', path: '/over-ons' },
        { name: 'Nieuws', path: '/nieuws' },
        { name: 'FAQ', path: '/faq' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <>
            <nav
                ref={navRef}
                className={`fixed z-50 transition-all duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] flex items-center justify-between gap-4 md:gap-12 
                    left-0 w-full px-6 md:left-1/2 md:-translate-x-1/2 md:w-[calc(100%-2rem)] md:max-w-max md:px-6 md:rounded-[4rem]
            ${(isScrolled || isMobileMenuOpen)
                        ? 'top-0 py-3 md:py-4 bg-background/95 backdrop-blur-xl border-b md:border border-primary/10 shadow-sm md:shadow-lg md:top-6 md:min-w-[600px] text-primary rounded-b-[20px] md:rounded-[4rem]'
                        : 'top-0 pt-6 pb-4 md:py-4 bg-transparent border-b md:border border-transparent shadow-none md:top-6 md:max-w-[1200px] text-primary rounded-none md:rounded-[4rem]'
                    }
          `}
            >
                <div className={`shrink-0 select-none flex items-center transition-all duration-300 ${isScrolled || isMobileMenuOpen ? 'h-8' : 'h-8 md:h-14'}`}>
                    <Link
                        to="/"
                        className={`flex items-center h-full origin-left transition-transform duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${!isScrolled && !isMobileMenuOpen ? 'scale-[1.35] md:scale-100' : 'scale-100'}`}
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        <img
                            src="/empowers-logo-color.svg"
                            alt="Empowers Logo"
                            className="h-full w-auto object-contain"
                            onError={(e) => {
                                e.target.style.display = 'none';
                                e.target.nextSibling.style.display = 'block';
                            }}
                        />
                        <span className="hidden font-sans font-bold text-xl tracking-tight">Empowers</span>
                    </Link>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8 font-sans font-medium text-sm tracking-wide">
                    {navLinks.map((link) => (
                        <Link key={link.name} to={link.path} className="hover:-translate-y-[1px] transition-transform whitespace-nowrap">{link.name}</Link>
                    ))}
                </div>

                <div className="flex items-center shrink-0">
                    {/* Desktop CTA */}
                    <Link to="/contact" className={`
                        hidden md:inline-flex btn-magnetic font-sans font-bold text-sm px-6 py-2.5 rounded-[2rem] transition-colors duration-300 items-center justify-center min-w-max
                        ${isScrolled ? 'bg-accent text-background border border-transparent' : 'bg-primary text-background hover:bg-primary/90'}
                    `}>
                        <span className="relative z-10 whitespace-nowrap">Plan een gesprek</span>
                    </Link>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden p-2 -mr-2 rounded-full text-primary hover:bg-primary/5 transition-colors"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Fullscreen Menu Overlay */}
            <div
                className={`fixed inset-0 z-40 bg-background/95 backdrop-blur-2xl transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] flex flex-col items-center justify-center md:hidden
                    ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
                `}
            >
                <div className="flex flex-col items-center w-full px-8 gap-6 mt-16">
                    {navLinks.map((link, index) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="font-sans font-medium text-3xl text-primary hover:text-accent transition-colors w-full text-center py-2"
                            style={{
                                transitionDelay: isMobileMenuOpen ? `${index * 50}ms` : '0ms',
                                transform: isMobileMenuOpen ? 'translateY(0)' : 'translateY(20px)',
                                opacity: isMobileMenuOpen ? 1 : 0,
                                transition: 'all 0.4s cubic-bezier(0.25,0.46,0.45,0.94)'
                            }}
                        >
                            {link.name}
                        </Link>
                    ))}

                    <Link
                        to="/contact"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="mt-8 bg-accent text-background font-sans font-bold text-lg w-full max-w-sm py-4 rounded-[2rem] text-center hover:scale-[1.02] transition-transform shadow-lg"
                        style={{
                            transitionDelay: isMobileMenuOpen ? `${navLinks.length * 50}ms` : '0ms',
                            transform: isMobileMenuOpen ? 'translateY(0)' : 'translateY(20px)',
                            opacity: isMobileMenuOpen ? 1 : 0,
                            transition: 'all 0.4s cubic-bezier(0.25,0.46,0.45,0.94)'
                        }}
                    >
                        Plan een gesprek
                    </Link>
                </div>
            </div>
        </>
    );
}
