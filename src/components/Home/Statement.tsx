import { useEffect, useRef, useState } from 'react';

export default function Statement() {
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
      className={`py-32 text-center transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-8">
        <blockquote className="font-display text-[clamp(1.8rem,4vw,3rem)] font-semibold tracking-[0.02em] leading-snug mb-16 max-w-[900px] mx-auto">
          Heavy music does not need more tools.<br />
          It needs <em className="italic text-accent">space</em>.
        </blockquote>
        <p className="text-xl text-text-muted">
          <strong className="text-text font-medium">The Emotional Arc</strong> gives you that space — one mood at a time.
        </p>
      </div>
    </section>
  );
}
