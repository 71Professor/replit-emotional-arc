import { Link } from 'react-router-dom';

const colorPalette = [
  { color: '#7a7a7a', label: 'Dirty Gray' },
  { color: '#6b5a47', label: 'Matte Brown' },
  { color: '#8b4a3a', label: 'Rust Red' },
  { color: '#6a7a5f', label: 'Washed Green' },
  { color: '#d4d4d4', label: 'Ash White' },
];

const verseFragments = [
  'Everything rots at the same pace',
  'I wake up already exhausted',
  'The walls breathe mold and memory',
  'Time leaks through cracks in the skin',
  'Decay is not an end — it is a method',
  'Nothing hurts anymore, and that is the sickness',
  'We outlived the reason to continue',
];

const hookFragments = [
  'Still breathing, still decaying',
  'No collapse — just slow disappearance',
  'This is not pain, this is erosion',
  'Rot with me',
];

const spokenFragments = [
  'There was no moment when it broke. It just never healed.',
  'Decay does not scream. It waits.',
];

const openEndFragments = [
  'We are still here, but—',
  'The weight keeps—',
  'Everything feels—',
  'No strength left to—',
];

function FragmentBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-gradient-to-r from-[#6b5a47]/10 to-[#8b4a3a]/5 border-l-[3px] border-l-[#8b4a3a] border-r border-r-[#6a7a5f]/20 p-8 my-4 italic text-[#d4d4d4] relative overflow-hidden">
      <div className="absolute top-0 right-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#6a7a5f] to-transparent opacity-30" />
      {children}
    </div>
  );
}

function PackCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="group bg-gradient-to-br from-[#6b5a47]/5 to-[#6a7a5f]/[0.03] border border-[#6b5a47]/30 p-8 transition-all duration-300 relative overflow-hidden hover:border-[#8b4a3a]/50 hover:bg-gradient-to-br hover:from-[#6b5a47]/[0.08] hover:to-[#6a7a5f]/[0.05] hover:-translate-y-0.5">
      <div className="absolute top-0 left-0 w-[3px] h-0 bg-gradient-to-b from-[#8b4a3a] to-[#6a7a5f] transition-all duration-300 group-hover:h-full" />
      <h4 className="font-display text-lg tracking-[0.05em] mb-4 text-[#8b4a3a]">{title}</h4>
      {children}
    </div>
  );
}

function PackList({ items }: { items: string[] }) {
  return (
    <ul className="list-none p-0">
      {items.map((item, i) => (
        <li key={i} className="py-2 pl-8 relative text-[#7a7a7a] leading-relaxed before:content-['—'] before:absolute before:left-0 before:text-[#8b4a3a] before:opacity-70">
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function DespairDecay() {
  return (
    <>
      {/* Pack Hero */}
      <section className="min-h-[60vh] flex flex-col justify-center items-center text-center py-32 px-8 bg-[radial-gradient(ellipse_at_top,rgba(107,90,71,0.08)_0%,transparent_50%),linear-gradient(180deg,rgba(139,74,58,0.05)_0%,rgba(106,122,95,0.03)_100%)] border-b border-[#6b5a47]/30 relative">
        <div className="absolute inset-0 bg-[repeating-linear-gradient(90deg,transparent,transparent_2px,rgba(122,122,122,0.03)_2px,rgba(122,122,122,0.03)_4px)] pointer-events-none" />
        <div className="font-display text-base tracking-[0.3em] text-[#8b4a3a]/80 mb-4 drop-shadow-[0_0_20px_rgba(139,74,58,0.3)]">
          PACK 01
        </div>
        <h1 className="font-display text-[clamp(3rem,8vw,5rem)] font-bold tracking-[0.05em] text-[#6b5a47] mb-8 drop-shadow-[0_2px_10px_rgba(107,90,71,0.5)]">
          DESPAIR & DECAY
        </h1>
        <p className="text-xl leading-relaxed text-[#7a7a7a] max-w-[800px] mb-8">
          Slow, inevitable decay. Hope is not lost — it was never relevant.<br />
          Not explosion, but erosion. Not pain, but exhaustion.
        </p>
        <div className="text-[1.33rem] tracking-[0.1em] text-text">
          Resignation → Numbness → Erosion → Silent Acceptance
        </div>
      </section>

      {/* Mood Essence */}
      <section className="py-24 border-b border-[#7a7a7a]/10">
        <div className="max-w-[1200px] mx-auto px-8">
          <Link to="/#packs" className="inline-flex items-center gap-2 text-[#7a7a7a] no-underline text-sm tracking-[0.05em] transition-all duration-300 mb-8 py-2 px-4 border-l-2 border-transparent hover:text-[#8b4a3a] hover:border-l-[#8b4a3a] hover:pl-8 group">
            <span className="transition-transform duration-300 group-hover:-translate-x-1">←</span>
            Back to All Packs
          </Link>

          <h2 className="font-display text-[clamp(1.8rem,4vw,2.5rem)] font-semibold tracking-[0.05em] mb-16 text-[#6b5a47] border-l-4 border-[#8b4a3a] pl-8">
            1. Mood Essence
          </h2>

          <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-16 mt-8">
            <PackCard title="Core Feeling">
              <p className="text-[#7a7a7a]">Slow, inevitable decay. Hope is not lost — it was never relevant. Not explosion, but <strong className="text-[#d4d4d4]">erosion</strong>. Not pain, but <strong className="text-[#d4d4d4]">exhaustion</strong>.</p>
            </PackCard>
            <PackCard title="Emotional Axis">
              <p className="text-[1.2rem] text-text">Resignation → Numbness → Inner Decay → Silent Acceptance</p>
            </PackCard>
            <PackCard title="Perfect For">
              <p className="text-[#7a7a7a]">Doom, Sludge, Post-Metal, Funeral Doom & atmospheric projects focused on exhaustion and slow collapse.</p>
            </PackCard>
          </div>

          <h3 className="font-display text-xl font-semibold tracking-[0.05em] mt-16 mb-8 text-[#7a7a7a]">Associations</h3>
          <p className="text-[#7a7a7a] leading-relaxed mb-8 text-[0.95rem]">Visual and sensory elements that embody the mood's essence.</p>
          <PackList items={['Abandoned places', 'Damp cold', 'Body and mind slowly dissolving', 'Time as sickness', 'Life as something that consumes itself']} />

          <h3 className="font-display text-xl font-semibold tracking-[0.05em] mt-16 mb-8 text-[#7a7a7a]">Dynamics / Tempo</h3>
          <p className="text-[1.2rem] text-text leading-relaxed">Very slow → dragging → repetitive → doesn't break out, simply ends</p>
        </div>
      </section>

      {/* Language & Words */}
      <section className="py-24 border-b border-[#7a7a7a]/10 bg-gradient-to-r from-[#6b5a47]/[0.02] via-[#6a7a5f]/[0.02] to-[#6b5a47]/[0.02]">
        <div className="max-w-[1200px] mx-auto px-8">
          <h2 className="font-display text-[clamp(1.8rem,4vw,2.5rem)] font-semibold tracking-[0.05em] mb-16 text-[#6b5a47] border-l-4 border-[#8b4a3a] pl-8">
            2. Word Fields & Language
          </h2>

          <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-16 mt-8">
            <PackCard title="Key Terms">
              <PackList items={['rot', 'decay', 'rust', 'ruin', 'mold', 'erosion', 'collapse', 'sickness', 'remains', 'weight', 'silence', 'stagnant', 'ashes', 'residue']} />
            </PackCard>
            <PackCard title="Verbs">
              <PackList items={['rot', 'erode', 'suffocate', 'wither', 'sink', 'corrode', 'linger', 'stagnate', 'crumble', 'leak']} />
            </PackCard>
            <PackCard title="Adjectives">
              <PackList items={['exhausted', 'decaying', 'hollow', 'damp', 'brittle', 'numb', 'lifeless', 'collapsing', 'stale']} />
            </PackCard>
          </div>

          <h3 className="font-display text-xl font-semibold tracking-[0.05em] mt-16 mb-8 text-[#7a7a7a]">Metaphors & Imagery</h3>
          <PackList items={['Body as abandoned ruin', 'Thoughts as stagnant water', 'Time as rust', 'Hope as dead nerve', 'Breath as mechanical duty']} />

          <h3 className="font-display text-xl font-semibold tracking-[0.05em] mt-16 mb-8 text-[#7a7a7a]">Avoid (Mood Killers)</h3>
          <PackList items={['Anger, aggression, catharsis', 'Sudden outbursts or "liberation"', 'Clear enemies or blame', 'Heroic language', '"Battle" narratives']} />

          <h3 className="font-display text-xl font-semibold tracking-[0.05em] mt-16 mb-8 text-[#7a7a7a]">Language Tone</h3>
          <p className="text-text-muted leading-relaxed">Dry, tired, heavy, repetitive, physical — more <strong className="text-text">state</strong> than action</p>
        </div>
      </section>

      {/* Lyric Fragments */}
      <section className="py-24 border-b border-[#7a7a7a]/10">
        <div className="max-w-[1200px] mx-auto px-8">
          <h2 className="font-display text-[clamp(1.8rem,4vw,2.5rem)] font-semibold tracking-[0.05em] mb-16 text-[#6b5a47] border-l-4 border-[#8b4a3a] pl-8">
            3. Text & Lyric Fragments
          </h2>

          <h3 className="font-display text-xl font-semibold tracking-[0.05em] mt-8 mb-8 text-[#7a7a7a]">Verse Fragments</h3>
          <p className="text-[#7a7a7a] leading-relaxed mb-8 text-[0.95rem]">Ready-to-use lyric lines for verses and main sections.</p>
          {verseFragments.map((f, i) => <FragmentBox key={i}>{f}</FragmentBox>)}

          <h3 className="font-display text-xl font-semibold tracking-[0.05em] mt-16 mb-8 text-[#7a7a7a]">Hook / Refrain Ideas</h3>
          <p className="text-[#7a7a7a] leading-relaxed mb-8 text-[0.95rem]">Repetitive, memorable lines designed for choruses and refrains.</p>
          {hookFragments.map((f, i) => <FragmentBox key={i}>{f}</FragmentBox>)}

          <h3 className="font-display text-xl font-semibold tracking-[0.05em] mt-16 mb-8 text-[#7a7a7a]">Spoken Word / Intro / Outro</h3>
          <p className="text-[#7a7a7a] leading-relaxed mb-8 text-[0.95rem]">Atmospheric statements for framing your piece.</p>
          {spokenFragments.map((f, i) => <FragmentBox key={i}>{f}</FragmentBox>)}

          <h3 className="font-display text-xl font-semibold tracking-[0.05em] mt-16 mb-8 text-[#7a7a7a]">Open-End Fragments</h3>
          <p className="text-[#7a7a7a] leading-relaxed mb-8 text-[0.95rem]">Incomplete thoughts that trail into silence.</p>
          {openEndFragments.map((f, i) => <FragmentBox key={i}>{f}</FragmentBox>)}
        </div>
      </section>

      {/* Visual Prompts */}
      <section className="py-24 border-b border-[#7a7a7a]/10 bg-gradient-to-r from-[#6b5a47]/[0.02] via-[#6a7a5f]/[0.02] to-[#6b5a47]/[0.02]">
        <div className="max-w-[1200px] mx-auto px-8">
          <h2 className="font-display text-[clamp(1.8rem,4vw,2.5rem)] font-semibold tracking-[0.05em] mb-16 text-[#6b5a47] border-l-4 border-[#8b4a3a] pl-8">
            4. Visual & Image Prompts
          </h2>

          <h3 className="font-display text-xl font-semibold tracking-[0.05em] mt-8 mb-8 text-[#7a7a7a]">Album Cover — Basic Structure</h3>
          <p className="text-text-muted leading-relaxed mb-8">
            abandoned building interior, decay, mold, cracked walls, low light, muted colors, damp atmosphere, slow collapse, no people, cinematic realism, grain texture
          </p>

          <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-16 mt-8">
            <PackCard title="Illustrative / Dark Realism">
              <p className="text-[#7a7a7a]">rotting textures, peeling surfaces, organic decay, muted palette, heavy shadows, realistic but bleak, no dramatic contrast</p>
            </PackCard>
            <PackCard title="Abstract / Symbolic">
              <p className="text-[#7a7a7a]">rusted surfaces, layered textures, erosion patterns, soft blur, desaturated colors, repetition, minimal composition</p>
            </PackCard>
            <PackCard title="Lyric Video / Visualizer Background">
              <p className="text-[#7a7a7a]">slow moving dust, subtle texture movement, film grain, low saturation, static camera, endless stillness</p>
            </PackCard>
          </div>

          <h3 className="font-display text-xl font-semibold tracking-[0.05em] mt-16 mb-8 text-[#7a7a7a]">Prompt Building Blocks</h3>
          <PackList items={['low saturation', 'grain / dirt / noise', 'rotting textures', 'soft focus', 'repetition', 'no focal point']} />
        </div>
      </section>

      {/* Colors & Forms */}
      <section className="py-24 border-b border-[#7a7a7a]/10">
        <div className="max-w-[1200px] mx-auto px-8">
          <h2 className="font-display text-[clamp(1.8rem,4vw,2.5rem)] font-semibold tracking-[0.05em] mb-16 text-[#6b5a47] border-l-4 border-[#8b4a3a] pl-8">
            5. Color & Form Language
          </h2>

          <h3 className="font-display text-xl font-semibold tracking-[0.05em] mt-8 mb-8 text-[#7a7a7a]">Color Palette (Mood Colors)</h3>
          <div className="flex gap-4 flex-wrap mt-8">
            {colorPalette.map((c, i) => (
              <div key={i} className="flex flex-col items-center gap-2">
                <div className="w-20 h-20 border border-white/10 shadow-lg" style={{ backgroundColor: c.color }} />
                <div className="text-sm text-text-muted">{c.label}</div>
              </div>
            ))}
          </div>

          <h3 className="font-display text-xl font-semibold tracking-[0.05em] mt-16 mb-8 text-[#7a7a7a]">Light</h3>
          <p className="text-text-muted leading-relaxed">Flat, diffuse, low contrast — no highlights, no "spotlight"</p>

          <h3 className="font-display text-xl font-semibold tracking-[0.05em] mt-16 mb-8 text-[#7a7a7a]">Textures</h3>
          <p className="text-text-muted leading-relaxed">Rust, mold, dust, damp surfaces, peeling layers</p>

          <h3 className="font-display text-xl font-semibold tracking-[0.05em] mt-16 mb-8 text-[#7a7a7a]">Forms & Symbols</h3>
          <PackList items={['Cracks', 'Layers', 'Breaks', 'Distorted rectangles', 'Repetition without development']} />
        </div>
      </section>

      {/* AI Prompt Boosters */}
      <section className="py-24 border-b border-[#7a7a7a]/10 bg-gradient-to-r from-[#6b5a47]/[0.02] via-[#6a7a5f]/[0.02] to-[#6b5a47]/[0.02]">
        <div className="max-w-[1200px] mx-auto px-8">
          <h2 className="font-display text-[clamp(1.8rem,4vw,2.5rem)] font-semibold tracking-[0.05em] mb-16 text-[#6b5a47] border-l-4 border-[#8b4a3a] pl-8">
            6. AI Prompt Boosters (Optional)
          </h2>

          <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-16 mt-8">
            <PackCard title="Lyrics Prompt">
              <p className="text-[#7a7a7a]">Write metal lyrics inspired by despair and decay. Avoid anger or rebellion. Focus on exhaustion, erosion, and slow collapse. Use physical metaphors and repetitive language.</p>
            </PackCard>
            <PackCard title="Album Concept Prompt">
              <p className="text-[#7a7a7a]">Create a concept album about slow decay — personal, social, or physical. No climax, no redemption. Each track represents another layer of erosion.</p>
            </PackCard>
          </div>

          <h3 className="font-display text-xl font-semibold tracking-[0.05em] mt-16 mb-8 text-[#7a7a7a]">Variation Tips</h3>
          <ul className="list-none p-0">
            <li className="py-2 pl-8 relative text-[#7a7a7a] leading-relaxed before:content-['—'] before:absolute before:left-0 before:text-[#8b4a3a] before:opacity-70">
              <strong className="text-[#d4d4d4]">More Doom:</strong> even less movement, longer lines, repetitions
            </li>
            <li className="py-2 pl-8 relative text-[#7a7a7a] leading-relaxed before:content-['—'] before:absolute before:left-0 before:text-[#8b4a3a] before:opacity-70">
              <strong className="text-[#d4d4d4]">More Sludge:</strong> more physicality, dirt, weight
            </li>
            <li className="py-2 pl-8 relative text-[#7a7a7a] leading-relaxed before:content-['—'] before:absolute before:left-0 before:text-[#8b4a3a] before:opacity-70">
              <strong className="text-[#d4d4d4]">More Post-Metal:</strong> more abstract language, less "I", more state
            </li>
          </ul>
        </div>
      </section>

      {/* Usage Info */}
      <section className="py-24 border-b border-[#7a7a7a]/10">
        <div className="max-w-[1200px] mx-auto px-8">
          <h2 className="font-display text-[clamp(1.8rem,4vw,2.5rem)] font-semibold tracking-[0.05em] mb-16 text-[#6b5a47] border-l-4 border-[#8b4a3a] pl-8">
            Usage Information
          </h2>

          <p className="text-text-muted leading-relaxed mb-8">
            All content is <strong className="text-text">royalty-free</strong> for creative use (songs, visuals, videos). Redistribution or resale of this pack itself is not permitted.
          </p>

          <h3 className="font-display text-xl font-semibold tracking-[0.05em] mt-16 mb-8 text-[#7a7a7a]">Quick Positioning</h3>
          <FragmentBox>
            <strong>DESPAIR & DECAY</strong> — A slow-burning mood pack focused on exhaustion, erosion, and inevitable decline. Perfect for Doom, Sludge, Post-Metal, Funeral Doom & atmospheric projects.
          </FragmentBox>

          <div className="mt-24 text-center flex gap-4 justify-center flex-wrap">
            <Link to="/#bundle" className="btn btn-primary">Get This Pack</Link>
            <Link to="/#packs" className="btn btn-secondary">Explore Other Packs</Link>
          </div>
        </div>
      </section>
    </>
  );
}
