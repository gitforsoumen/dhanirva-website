import svgPaths from '../imports/svg-zcfcg98qxq';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 76; // Header height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      // Close mobile menu if open
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-lg shadow-md' 
        : 'bg-white shadow-[0px_4px_20px_0px_rgba(0,0,0,0.07)]'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-[76px]">
          {/* Logo */}
          <div className="flex items-center">
            <div className="relative w-[191px] h-[35px]">
              {/* Bird Icon */}
              <div className="absolute left-0 top-0 w-[35px] h-[32px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35 32">
                  <path d={svgPaths.p3affa600} fill="#1448E7" />
                  <path d={svgPaths.p66e8980} fill="#1448E7" />
                </svg>
              </div>
              {/* DHANIRVA Text */}
              <div className="absolute left-[49.54px] top-[11.08px] w-[141.408px] h-[11.92px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 142 12">
                  <path d={svgPaths.pf38b300} fill="#1448E7" />
                  <path d={svgPaths.p1e7030f0} fill="#1448E7" />
                  <path d={svgPaths.pd531780} fill="#1448E7" />
                  <path d={svgPaths.pd45d00} fill="#1448E7" />
                  <path d={svgPaths.p2969f380} fill="#1448E7" />
                  <path d={svgPaths.p1db5cf00} fill="#1448E7" />
                  <path d={svgPaths.p1d00200} fill="#1448E7" />
                  <path d={svgPaths.p119f4000} fill="#1448E7" />
                </svg>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-10">
            <button onClick={() => scrollToSection('home')} className="font-['Plus_Jakarta_Sans'] text-[#f64d01] text-[16px] leading-[24px] hover:text-[#f64d01]/80 transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection('features')} className="font-['Plus_Jakarta_Sans'] text-[#101828] text-[16px] leading-[24px] hover:text-[#f64d01] transition-colors">
              Features
            </button>
            <button onClick={() => scrollToSection('about')} className="font-['Plus_Jakarta_Sans'] text-[#101828] text-[16px] leading-[24px] hover:text-[#f64d01] transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('blog')} className="font-['Plus_Jakarta_Sans'] font-medium text-[#101828] text-[16px] leading-[24px] hover:text-[#f64d01] transition-colors">
              Blog
            </button>
          </nav>

          {/* Download App Button */}
          <div className="hidden lg:flex items-center">
            <button className="px-6 h-[44px] bg-gradient-to-r from-[#155dfc] to-[#1447e6] text-white rounded-[8px] font-['Plus_Jakarta_Sans'] text-[16px] leading-[24px] hover:shadow-lg hover:shadow-blue-500/30 hover:scale-105 transition-all duration-300">
              Download App
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-[#101828]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden pb-4 space-y-4 border-t border-gray-100 pt-4">
            <button onClick={() => scrollToSection('home')} className="block w-full text-left font-['Plus_Jakarta_Sans'] text-[#f64d01] hover:text-[#f64d01]/80">
              Home
            </button>
            <button onClick={() => scrollToSection('features')} className="block w-full text-left font-['Plus_Jakarta_Sans'] text-[#101828] hover:text-[#f64d01]">
              Features
            </button>
            <button onClick={() => scrollToSection('about')} className="block w-full text-left font-['Plus_Jakarta_Sans'] text-[#101828] hover:text-[#f64d01]">
              About
            </button>
            <button onClick={() => scrollToSection('blog')} className="block w-full text-left font-['Plus_Jakarta_Sans'] font-medium text-[#101828] hover:text-[#f64d01]">
              Blog
            </button>
            <button className="w-full px-6 py-3 bg-gradient-to-r from-[#155dfc] to-[#1447e6] text-white rounded-[8px] font-['Plus_Jakarta_Sans']">
              Download App
            </button>
          </div>
        )}
      </div>
    </header>
  );
}