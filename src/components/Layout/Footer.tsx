import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="py-24 pb-16 border-t border-white/5 bg-bg-elevated">
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="flex justify-between items-start mb-16 flex-wrap gap-8">
          <div>
            <div className="font-display text-base tracking-[0.15em] font-semibold mb-2">
              METAL MOOD PACKS
            </div>
            <p className="text-sm text-text-muted">
              Emotion-driven inspiration for heavy music
            </p>
          </div>
          <div className="flex gap-8">
            <Link to="/#arc" className="text-text-muted no-underline text-sm transition-colors duration-300 hover:text-text">
              The Arc
            </Link>
            <Link to="/#packs" className="text-text-muted no-underline text-sm transition-colors duration-300 hover:text-text">
              Packs
            </Link>
            <Link to="/#bundle" className="text-text-muted no-underline text-sm transition-colors duration-300 hover:text-text">
              Bundle
            </Link>
          </div>
        </div>
        <div className="text-center pt-8 border-t border-white/5">
          <p className="text-sm text-text-muted">
            &copy; 2024 Metal Mood Packs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
