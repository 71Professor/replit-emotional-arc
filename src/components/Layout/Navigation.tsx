import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface NavProps {
  isDetailPage?: boolean;
}

export default function Navigation({ isDetailPage = false }: NavProps) {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.pageYOffset > 100);

      if (!isDetailPage) {
        const sections = document.querySelectorAll('section[id]');
        let current = '';
        sections.forEach((section) => {
          const sectionTop = (section as HTMLElement).offsetTop;
          if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id') || '';
          }
        });
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDetailPage]);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    if (location.pathname !== '/') {
      return;
    }
    e.preventDefault();
    const target = document.querySelector(sectionId);
    if (target) {
      const navHeight = document.querySelector('nav')?.offsetHeight || 0;
      const targetPosition = (target as HTMLElement).offsetTop - navHeight - 20;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full backdrop-blur-[10px] border-b border-white/5 z-[1000] animate-slideDown transition-colors duration-300 ${
        scrolled ? 'bg-bg/95' : 'bg-bg/90'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-8 py-4 flex justify-between items-center">
        <Link to="/" className="font-display text-sm tracking-[0.15em] font-semibold text-text no-underline">
          METAL MOOD PACKS
        </Link>
        <ul className="flex gap-8 list-none">
          <li>
            <Link
              to={isDetailPage ? '/#arc' : '#arc'}
              onClick={(e) => scrollToSection(e, '#arc')}
              className={`text-text-muted no-underline text-[0.95rem] tracking-[0.05em] transition-colors duration-300 relative hover:text-text after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-px after:bg-text after:transition-all after:duration-300 hover:after:w-full ${
                activeSection === 'arc' ? 'text-text after:w-full' : ''
              }`}
            >
              The Arc
            </Link>
          </li>
          <li>
            <Link
              to={isDetailPage ? '/#packs' : '#packs'}
              onClick={(e) => scrollToSection(e, '#packs')}
              className={`text-text-muted no-underline text-[0.95rem] tracking-[0.05em] transition-colors duration-300 relative hover:text-text after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-px after:bg-text after:transition-all after:duration-300 hover:after:w-full ${
                activeSection === 'packs' ? 'text-text after:w-full' : ''
              }`}
            >
              Packs
            </Link>
          </li>
          <li>
            <Link
              to={isDetailPage ? '/#bundle' : '#bundle'}
              onClick={(e) => scrollToSection(e, '#bundle')}
              className={`text-text-muted no-underline text-[0.95rem] tracking-[0.05em] transition-colors duration-300 relative hover:text-text after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-px after:bg-text after:transition-all after:duration-300 hover:after:w-full ${
                activeSection === 'bundle' ? 'text-text after:w-full' : ''
              }`}
            >
              Bundle
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
