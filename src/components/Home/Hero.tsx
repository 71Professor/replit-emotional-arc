import { useEffect, useState } from 'react';

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset < window.innerHeight) {
        setScrollY(window.pageYOffset);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const opacity = 1 - scrollY / window.innerHeight;
  const translateY = scrollY * 0.3;

  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center py-32 px-8 relative">
      <div
        className="animate-fadeInUp animation-delay-300"
        style={{ transform: `translateY(${translateY}px)`, opacity }}
      >
        <div className="text-sm tracking-[0.2em] uppercase text-text-muted mb-8 opacity-0 animate-fadeIn animation-delay-600">
          Seven states of heaviness
        </div>
        <h1 className="font-display text-[clamp(3rem,10vw,7rem)] font-bold tracking-[0.05em] leading-tight mb-16">
          <span className="block opacity-0 animate-slideInRight animation-delay-800">THE</span>
          <span className="block opacity-0 animate-slideInRight animation-delay-1000">EMOTIONAL</span>
          <span className="block opacity-0 animate-slideInRight animation-delay-1200">ARC</span>
        </h1>
        <p className="text-lg leading-relaxed text-text-muted max-w-[700px] mx-auto mb-16 opacity-0 animate-fadeIn animation-delay-1400">
          Metal is not a genre. It is a sequence of emotional states.<br />
          From decay to awe. From fury to silence. From endurance to wonder.
        </p>
        <div className="flex gap-4 justify-center flex-wrap opacity-0 animate-fadeIn animation-delay-1600">
          <a href="#packs" className="btn btn-primary">
            Explore the Packs
          </a>
          <a href="#bundle" className="btn btn-secondary">
            View Bundle
          </a>
        </div>
      </div>
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 text-xs tracking-[0.15em] text-text-muted opacity-0 animate-fadeIn animation-delay-2000">
        <span>Scroll to enter</span>
        <div className="w-px h-10 bg-gradient-to-b from-text-muted to-transparent animate-scrollPulse" />
      </div>
    </section>
  );
}
