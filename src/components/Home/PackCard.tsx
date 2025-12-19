import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import type { Pack } from '../../data/packs';

interface PackCardProps {
  pack: Pack;
  index: number;
}

const colorMap: Record<string, { hover: string; gradient: string }> = {
  despair: { hover: 'hover:text-despair', gradient: 'from-despair/10' },
  fury: { hover: 'hover:text-fury', gradient: 'from-fury/10' },
  triumph: { hover: 'hover:text-triumph', gradient: 'from-triumph/10' },
  pagan: { hover: 'hover:text-pagan', gradient: 'from-pagan/10' },
  nihilistic: { hover: 'hover:text-nihilistic', gradient: 'from-nihilistic/10' },
  cosmic: { hover: 'hover:text-cosmic', gradient: 'from-cosmic/10' },
  apocalyptic: { hover: 'hover:text-apocalyptic', gradient: 'from-apocalyptic/10' },
};

export default function PackCard({ pack, index }: PackCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLElement>(null);
  const expandedRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        expandedRef.current &&
        !expandedRef.current.contains(e.target as Node) &&
        cardRef.current &&
        !cardRef.current.contains(e.target as Node)
      ) {
        setIsExpanded(false);
      }
    };

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsExpanded(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
    if (!isExpanded) {
      setTimeout(() => {
        expandedRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }, 300);
    }
  };

  const colors = colorMap[pack.colorClass];

  return (
    <>
      <article
        ref={cardRef}
        className={`grid grid-cols-[80px_1fr_200px] gap-8 items-center py-16 border-b border-white/5 transition-all duration-500 relative hover:pl-4 md:grid-cols-1 md:gap-4 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
        style={{ transitionDelay: `${index * 100}ms` }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="font-display text-2xl text-text-muted opacity-30 font-semibold md:text-base">
          {pack.number}
        </div>
        <div className="flex flex-col gap-4">
          <h3
            className={`font-display text-[clamp(1.5rem,3vw,2.2rem)] font-semibold tracking-[0.08em] transition-colors duration-300 ${
              isHovered ? colors.hover.replace('hover:', '') : ''
            }`}
          >
            {pack.title}
          </h3>
          <p className="text-text-muted leading-relaxed max-w-[600px]">
            {pack.description}
          </p>
          <div className="flex items-center gap-8 mt-2 md:flex-col md:items-start">
            <div className="text-sm text-text-muted tracking-[0.05em]">
              {pack.emotionalArc}
            </div>
            <button
              onClick={toggleExpand}
              className="font-body text-sm text-text-muted bg-transparent border border-text-muted py-2 px-4 cursor-pointer transition-all duration-300 tracking-[0.05em] hover:text-text hover:border-text"
            >
              {isExpanded ? 'Hide Details' : 'View Details'}
            </button>
            {pack.hasDetailPage && (
              <Link
                to="/despair-decay"
                className="btn btn-secondary text-sm py-2 px-4 md:ml-0 md:mt-2"
              >
                Full Pack Page
              </Link>
            )}
          </div>
        </div>
        <div
          className={`w-[200px] h-[120px] bg-white/[0.02] border border-white/5 transition-all duration-500 bg-gradient-to-br ${colors.gradient} to-transparent md:hidden`}
          style={{
            transform: isHovered ? 'scale(1.05)' : 'scale(1)',
            opacity: isHovered ? 1 : 0.8,
          }}
        />
      </article>

      <div
        ref={expandedRef}
        className={`overflow-hidden transition-all duration-500 bg-bg-elevated border-l-2 border-accent mb-8 ${
          isExpanded ? 'max-h-[1000px] p-16' : 'max-h-0'
        }`}
      >
        <div className="relative max-w-[900px]">
          <button
            onClick={() => setIsExpanded(false)}
            className="absolute top-0 right-0 bg-transparent border-none text-text-muted text-4xl cursor-pointer leading-none transition-colors duration-300 hover:text-text"
          >
            &times;
          </button>
          <h4 className="font-display text-xl tracking-[0.05em] mb-4 text-text">
            Core Feeling
          </h4>
          <p className="text-text-muted leading-relaxed mb-8">
            {pack.details.coreFeeling}
          </p>

          <h4 className="font-display text-xl tracking-[0.05em] mt-8 mb-4 text-text">
            Included in Pack
          </h4>
          <ul className="list-none pl-8 text-text-muted">
            {pack.details.included.map((item, i) => (
              <li key={i} className="mb-2 relative pl-8 before:content-['—'] before:absolute before:left-0 before:text-accent">
                {item}
              </li>
            ))}
          </ul>

          <h4 className="font-display text-xl tracking-[0.05em] mt-8 mb-4 text-text">
            Perfect For
          </h4>
          <p className="text-text-muted leading-relaxed mb-8">
            {pack.details.perfectFor}
          </p>

          {pack.hasDetailPage && (
            <div className="mt-8">
              <Link to="/despair-decay" className="btn btn-secondary">
                Explore Full Pack Page →
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
