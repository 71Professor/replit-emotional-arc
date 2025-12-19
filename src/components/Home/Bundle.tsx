import { useEffect, useRef, useState } from 'react';

export default function Bundle() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="bundle"
      className={`py-32 bg-bg-elevated border-t border-white/5 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="max-w-[1000px] mx-auto">
          {/* Header */}
          <div className="text-center mb-24">
            <span className="block text-sm tracking-[0.2em] uppercase text-text-muted mb-4">
              Complete Collection
            </span>
            <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] font-bold tracking-[0.05em] mb-4">
              THE EMOTIONAL ARC
            </h2>
            <p className="text-xl text-text-muted">
              Seven states of heaviness. One complete cycle.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-16 mb-24">
            <div>
              <h3 className="font-display text-xl tracking-[0.05em] mb-8">What's Included</h3>
              <ul className="list-none p-0">
                {[
                  'All 7 Metal Mood & Emotion Packs',
                  'Complete mood essences & emotional arcs',
                  '280+ lyric fragments across all moods',
                  'Visual prompt sets for each pack',
                  'Color palettes & texture guidance',
                  'Optional AI prompt boosters',
                  'PDF (visual, collectible) + Markdown formats',
                ].map((item, i) => (
                  <li key={i} className="py-2 pl-8 relative text-text-muted before:content-['—'] before:absolute before:left-0 before:text-accent">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-display text-xl tracking-[0.05em] mb-8">What This Is</h3>
              <ul className="list-none p-0">
                {[
                  'Emotional raw materials for metal',
                  'Atmospheric guidance, not rules',
                  'Usable with or without AI',
                  'Modular, combinable, collectible',
                  'For musicians, not algorithms',
                ].map((item, i) => (
                  <li key={i} className="py-2 pl-8 relative text-text-muted before:content-['✓'] before:absolute before:left-0 before:text-pagan">
                    {item}
                  </li>
                ))}
              </ul>

              <h3 className="font-display text-xl tracking-[0.05em] mt-8 mb-8">What This Is Not</h3>
              <ul className="list-none p-0">
                {[
                  'Genre guides or song recipes',
                  'AI replacement machines',
                  'Creativity shortcuts',
                  'Template collections',
                ].map((item, i) => (
                  <li key={i} className="py-2 pl-8 relative text-text-muted before:content-['×'] before:absolute before:left-0 before:text-text-muted">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* For Whom */}
          <div className="mb-16">
            <h3 className="font-display text-xl tracking-[0.05em] mb-8">For Whom</h3>
            <p className="text-text-muted leading-relaxed">
              Bands & solo artists. Doom, Post-Metal, Black, Sludge, Atmospheric & Cinematic projects. Concept albums & longform releases. Visual artists & lyric video creators. Artists who find atmosphere more important than speed.
            </p>
          </div>

          {/* License */}
          <div className="mb-16">
            <h3 className="font-display text-xl tracking-[0.05em] mb-8">License & Usage</h3>
            <p className="text-text-muted leading-relaxed">
              All content is <strong className="text-text font-medium">royalty-free</strong> for creative use (songs, albums, videos, artwork, performances). Resale or redistribution of the packs themselves is not permitted.
            </p>
          </div>

          {/* CTA */}
          <div className="text-center p-16 bg-white/[0.02] border border-white/5 mt-24">
            <div className="flex flex-col gap-2 mb-8">
              <span className="text-sm tracking-[0.15em] uppercase text-text-muted">
                Complete Bundle
              </span>
              <span className="font-display text-5xl font-bold">$79</span>
            </div>
            <a href="#" className="btn btn-primary btn-large">
              Get The Emotional Arc
            </a>
            <p className="mt-8 text-sm text-text-muted">
              Individual packs available for $12 each
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
