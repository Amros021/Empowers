import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

export default function Navbar() {
    const navRef = useRef(null);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [navBottom, setNavBottom] = useState(72);


    // Prevent scrolling when mobile menu is open + meet navbar hoogte
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
            if (navRef.current) {
                setNavBottom(navRef.current.getBoundingClientRect().bottom);
            }
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
    ];

    return (
        <>
            <nav
                ref={navRef}
                className={`fixed z-50 transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]
                    flex items-center justify-between md:grid md:grid-cols-[1fr_auto_1fr] md:items-center gap-4 md:gap-8
                    md:left-1/2 md:-translate-x-1/2 md:w-[calc(100%-3rem)] lg:w-[calc(100%-6rem)] md:max-w-[1440px] md:px-8 lg:px-10 md:rounded-[4rem]
            ${(isScrolled || isMobileMenuOpen)
                        ? 'top-3 py-3 md:py-4 bg-background/95 backdrop-blur-xl border border-primary/10 shadow-lg md:shadow-lg md:top-6 text-primary rounded-[2rem] md:rounded-[4rem] left-3 w-[calc(100%-1.5rem)] px-5 md:left-1/2 md:w-[calc(100%-3rem)] md:px-8'
                        : 'top-0 pt-6 pb-4 md:py-5 bg-transparent border border-transparent shadow-none md:top-6 text-primary rounded-none md:rounded-[4rem] left-0 w-full px-6 md:left-1/2 md:w-[calc(100%-3rem)] md:px-8'
                    }
          `}
            >
                <div className="shrink-0 select-none flex items-center justify-start h-8 md:h-10 lg:h-10">
                    <Link
                        to="/"
                        className={`flex items-center h-full origin-left transition-transform duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${!isScrolled && !isMobileMenuOpen ? 'scale-[1.35] md:scale-[1.3]' : 'scale-[1.125] md:scale-[0.85]'}`}
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
                <div className="hidden md:flex items-center justify-center gap-8 lg:gap-14 font-sans font-medium text-sm lg:text-base tracking-wide">
                    {navLinks.map((link) => (
                        <Link key={link.name} to={link.path} className="hover:-translate-y-[1px] transition-transform whitespace-nowrap">{link.name}</Link>
                    ))}
                </div>

                <div className="flex items-center justify-end shrink-0">
                    {/* Desktop CTA */}
                    <Link to="/contact" className={`
                        hidden md:inline-flex btn-magnetic font-sans font-bold text-sm lg:text-base px-6 lg:px-8 py-2.5 lg:py-3 rounded-[2rem] transition-colors duration-300 items-center justify-center min-w-max
                        ${isScrolled ? 'bg-accent text-background border border-transparent' : 'bg-primary text-background hover:bg-primary/90'}
                    `}>
                        <span className="relative z-10 whitespace-nowrap">Plan een gesprek</span>
                    </Link>

                    {/* Mobile Menu Toggle — tekst pill */}
                    <button
                        className={`md:hidden px-4 py-2 rounded-full font-sans font-bold text-xs tracking-[0.15em] uppercase transition-colors duration-300
                            ${isMobileMenuOpen
                                ? 'bg-primary text-background'
                                : isScrolled ? 'bg-accent text-background' : 'bg-primary text-background'
                            }`}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? 'SLUIT ×' : 'MENU'}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu — donker overlay achtergrond */}
            <div
                className={`fixed inset-0 z-30 bg-primary/60 md:hidden transition-opacity duration-400
                    ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
                `}
                onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Mobile Menu — slideDown vanuit navbar */}
            <div
                className="fixed left-0 z-40 md:hidden bg-background flex flex-col shadow-2xl"
                style={{
                    top: navBottom,
                    width: '100%',
                    transform: isMobileMenuOpen ? 'translateY(0)' : 'translateY(-100%)',
                    visibility: isMobileMenuOpen ? 'visible' : 'hidden',
                    transitionProperty: 'transform, visibility',
                    transitionDuration: isMobileMenuOpen ? '0.45s, 0s' : '0.45s, 0s',
                    transitionDelay: isMobileMenuOpen ? '0s, 0s' : '0s, 0.45s',
                    transitionTimingFunction: 'cubic-bezier(0.25,0.46,0.45,0.94)',
                    borderRadius: '0 0 1.5rem 1.5rem',
                }}
            >
                {/* Links */}
                <div className="flex flex-col px-7 pt-7 gap-0">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="font-sans font-bold text-2xl text-primary py-3.5 border-b border-primary/10 flex items-center justify-between hover:text-accent transition-colors"
                        >
                            {link.name}
                            <span className="text-primary/25 text-xl font-light">›</span>
                        </Link>
                    ))}
                </div>

                {/* Quote kaart */}
                <div className="px-7 pt-5 pb-4 flex flex-col">
                    <div
                        className="rounded-2xl p-5 relative overflow-hidden w-full"
                        style={{ background: 'linear-gradient(135deg, #2E4036 0%, #1a2620 100%)' }}
                    >
                        <p className="font-sans text-xs font-semibold tracking-[0.15em] uppercase mb-3" style={{ color: 'rgba(255,255,255,0.4)' }}>Onze aanpak</p>
                        <p className="font-serif text-xl leading-snug text-white mb-1">"Groei is geen toeval,</p>
                        <p className="font-sans text-sm font-bold tracking-wide mb-4" style={{ color: '#CC5833' }}>HET IS EEN STRATEGIE."</p>
                        <p className="font-sans text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>Wij zorgen dat jouw advertenties structureel presteren.</p>
                        <div className="absolute -bottom-6 -right-6 w-28 h-28 rounded-full" style={{ background: 'rgba(204,88,51,0.12)' }} />
                    </div>
                </div>

                {/* CTA knop onderaan */}
                <div className="px-7 pb-7 pt-3">
                    <Link
                        to="/contact"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block w-full bg-accent text-background font-sans font-bold text-base py-4 rounded-[2rem] text-center"
                    >
                        Plan een gesprek
                    </Link>
                </div>
            </div>
        </>
    );
}
