import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logo from "../assets/cleanify-logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#product', label: 'Product' },
    { href: '#mission', label: 'Mission' },
    { href: '#team', label: 'Team' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
      } animate-slideInFromTop`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <div className="flex items-center space-x-3 animate-fadeInLeft opacity-0" style={{ animationDelay: '0.1s' }}>
            <img src={logo} alt="Cleanify Logo" className="w-16 h-16 md:w-12 md:h-12 object-contain" />
            <span className="text-2xl md:text-3xl font-bold text-emerald-700">Cleanify</span>
          </div>

          <div className="hidden md:flex space-x-8">
            {navLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-emerald-600 font-medium transition-colors duration-200 animate-fadeInDown opacity-0"
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                {link.label}
              </a>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700 hover:text-emerald-600 transition-colors animate-fadeInRight opacity-0"
            style={{ animationDelay: '0.6s' }}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg animate-fadeInDown opacity-0" style={{ animationDelay: '0.3s' }}>
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-gray-700 hover:text-emerald-600 font-medium py-2 transition-colors animate-fadeInUp opacity-0"
                style={{ animationDelay: `${0.4 + index * 0.1}s` }}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
