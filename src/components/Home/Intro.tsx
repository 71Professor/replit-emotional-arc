import { useEffect, useRef, useState } from 'react';

export default function Intro() {
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
      id="arc"
      className={`py-32 bg-bg-elevated border-t border-b border-white/5 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="max-w-[900px] mx-auto">
          <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] font-semibold tracking-[0.03em] leading-tight mb-16">
            Not templates. Not shortcuts.
          </h2>
          <div className="text-xl leading-loose text-text-muted">
            <p className="mb-8">
              This bundle is not a collection of styles. It is a <em className="italic text-text">cycle</em>.
            </p>
            <p className="mb-8">
              A movement through collapse, rage, endurance, reverence, emptiness, insignificance — and finally, silent wonder.
            </p>
            <p className="mb-8">
              Each Mood Pack stands on its own. Together, they form a complete emotional journey — one that mirrors how heavy music often <em className="italic text-text">feels</em>, rather than how it <em className="italic text-text">sounds</em>.
            </p>
            <p className="text-2xl text-text mt-16">
              You don't start at the beginning. You enter where it resonates.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
