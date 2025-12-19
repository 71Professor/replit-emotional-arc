import PackCard from './PackCard';
import { packs } from '../../data/packs';

export default function PacksSection() {
  return (
    <section id="packs" className="py-32">
      <div className="max-w-[1200px] mx-auto px-8">
        <h2 className="font-display text-[clamp(2.5rem,6vw,4rem)] font-semibold tracking-[0.05em] text-center mb-24">
          The Seven States
        </h2>
        {packs.map((pack, index) => (
          <PackCard key={pack.id} pack={pack} index={index} />
        ))}
      </div>
    </section>
  );
}
