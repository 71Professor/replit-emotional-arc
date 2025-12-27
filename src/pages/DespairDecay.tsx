import { Link } from 'react-router-dom';

const colorPalette = [
  { color: '#7a7a7a', label: 'Dirty Grey' },
  { color: '#6b5a47', label: 'Matte Brown' },
  { color: '#8b4a3a', label: 'Rust Red' },
  { color: '#6a7a5f', label: 'Washed-out Green' },
  { color: '#d4d4d4', label: 'Ash White' },
];

const keyTerms = ['rot', 'decay', 'rust', 'ruin', 'mold', 'erosion', 'collapse', 'sickness', 'remains', 'weight', 'silence', 'stagnant', 'ashes', 'residue'];
const verbs = ['rot', 'erode', 'suffocate', 'wither', 'sink', 'corrode', 'linger', 'stagnate', 'crumble', 'leak'];
const adjectives = ['exhausted', 'decaying', 'hollow', 'damp', 'brittle', 'numb', 'lifeless', 'collapsing', 'stale'];

const metaphors = [
  'The body as an abandoned building',
  'Thoughts as stagnant water',
  'Time as rust',
  'Hope as a dead nerve',
  'Breath as a mechanical obligation',
];

const recurringMotifs = [
  'Layers and surfaces',
  'Cracks and slow collapse',
  'Repetition without development',
  'Enclosed spaces with no exit',
  'Stillness that feels damp rather than calm',
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

const moodKillers = [
  'Anger, aggression, catharsis',
  'Sudden outbursts or liberation',
  'Clear antagonists or blame',
  'Heroic or triumphant language',
  '"Fight" narratives or redemption arcs',
];

const imagePrompts = [
  {
    title: 'Cover Image — Slow Interior Decay',
    prompt: 'Abandoned interior space in advanced decay, damp walls covered with mold and rust, cracked concrete and peeling layers, stagnant air, low diffuse light, desaturated color palette, heavy grain texture, no people, no movement, cinematic realism, exhaustion and erosion as atmosphere, large negative space, bleak and quiet mood, no dramatic contrast',
  },
  {
    title: 'Abstract Texture — Erosion Without Narrative',
    prompt: 'Abstract layered surfaces showing erosion and decay, rusted metal textures, peeling paint, mold patterns, soft blur, repetition of cracks and stains, muted browns and greys, low saturation, minimal composition, no focal point, tactile and organic decay, subtle film grain',
  },
  {
    title: 'Symbolic Scene — Time as Weight',
    prompt: 'Empty decaying corridor fading into darkness, moisture in the air, walls collapsing slowly, dim ambient light, muted grey-green tones, sense of time pressing down, no figures, cinematic stillness',
  },
  {
    title: 'Lyric Visualizer Background — Endless Stillness',
    prompt: 'Nearly static drifting dust particles, low light, film grain, flat lighting, low contrast, desaturated colors, no narrative elements, minimal motion, oppressive calm',
  },
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
      {/* Section 0: Cover */}
      <section className="min-h-[60vh] flex flex-col justify-center items-center text-center py-32 px-8 bg-[radial-gradient(ellipse_at_top,rgba(107,90,71,0.08)_0%,transparent_50%),linear-gradient(180deg,rgba(139,74,58,0.05)_0%,rgba(106,122,95,0.03)_100%)] border-b border-[#6b5a47]/30 relative">
        <div className="absolute inset-0 bg-[repeating-linear-gradient(90deg,transparent,transparent_2px,rgba(122,122,122,0.03)_2px,rgba(122,122,122,0.03)_4px)] pointer-events-none" />
        <div className="font-display text-base tracking-[0.3em] text-[#8b4a3a]/80 mb-4 drop-shadow-[0_0_20px_rgba(139,74,58,0.3)]">
          E-MOODPACK 1
        </div>
        <h1 className="font-display text-[clamp(3rem,8vw,5rem)] font-bold tracking-[0.05em] text-[#6b5a47] mb-8 drop-shadow-[0_2px_10px_rgba(107,90,71,0.5)]">
          DESPAIR & DECAY
        </h1>
        <p className="text-xl leading-relaxed text-[#d4d4d4] max-w-[800px] italic">
          A Metal Mood & Emotion Pack
        </p>
      </section>

      {/* Section 1: Mood Description / Essence */}
      <section className="py-24 border-b border-[#7a7a7a]/10">
        <div className="max-w-[1200px] mx-auto px-8">
          <Link to="/#packs" className="inline-flex items-center gap-2 text-[#7a7a7a] no-underline text-sm tracking-[0.05em] transition-all duration-300 mb-8 py-2 px-4 border-l-2 border-transparent hover:text-[#8b4a3a] hover:border-l-[#8b4a3a] hover:pl-8 group">
            <span className="transition-transform duration-300 group-hover:-translate-x-1">←</span>
            Back to All Packs
          </Link>

          <h2 className="font-display text-[clamp(1.8rem,4vw,2.5rem)] font-semibold tracking-[0.05em] mb-16 text-[#6b5a47] border-l-4 border-[#8b4a3a] pl-8">
            1. Mood Description / Essence
          </h2>

          <div className="space-y-6 text-[#d4d4d4] leading-relaxed text-lg">
            <p>
              Despair & Decay is not about pain or eruption. It is about <strong className="text-white">erosion</strong>.
            </p>
            <p>
              A slow, unavoidable process in which energy drains away long before anything visibly collapses. This mood describes exhaustion without drama — a state where nothing breaks suddenly, but everything weakens continuously.
            </p>
            <p>
              Hope is not lost here; it has simply become irrelevant. What remains is weight, dampness, repetition, and the quiet realization that endurance itself has become the burden.
            </p>
            <p>
              The emotional arc moves from <strong className="text-white">resignation</strong> into <strong className="text-white">numbness</strong>, then into <strong className="text-white">inner decay</strong>, and finally into a form of <strong className="text-white">silent acceptance</strong>. There is no release, no transformation, no turning point. The state does not resolve — it persists.
            </p>
            <p>
              Typical associations include abandoned interiors, moisture trapped in walls, stale air, bodies and structures that continue functioning only because stopping would require more energy than they possess. Time is not an enemy here; it is a corrosive condition.
            </p>
          </div>

          <div className="mt-12 p-6 bg-[#6b5a47]/10 border-l-4 border-[#8b4a3a]">
            <h3 className="font-display text-lg font-semibold tracking-[0.05em] mb-4 text-[#7a7a7a]">Optional Dynamic / Tempo Association</h3>
            <p className="text-[1.2rem] text-white leading-relaxed">
              Very slow → dragging → repetitive → no breakout, no climax — it simply ends.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Wordfield & Language */}
      <section className="py-24 border-b border-[#7a7a7a]/10 bg-gradient-to-r from-[#6b5a47]/[0.02] via-[#6a7a5f]/[0.02] to-[#6b5a47]/[0.02]">
        <div className="max-w-[1200px] mx-auto px-8">
          <h2 className="font-display text-[clamp(1.8rem,4vw,2.5rem)] font-semibold tracking-[0.05em] mb-16 text-[#6b5a47] border-l-4 border-[#8b4a3a] pl-8">
            2. Wordfield & Language
          </h2>

          <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-16 mt-8">
            <PackCard title="2.1 Key Terms">
              <PackList items={keyTerms} />
            </PackCard>
            <PackCard title="2.2 Verbs">
              <PackList items={verbs} />
            </PackCard>
            <PackCard title="2.3 Adjectives">
              <PackList items={adjectives} />
            </PackCard>
          </div>

          <h3 className="font-display text-xl font-semibold tracking-[0.05em] mt-16 mb-8 text-[#7a7a7a]">2.4 Language Tone</h3>
          <p className="text-[#d4d4d4] leading-relaxed text-lg">
            Dry, tired, heavy, repetitive.<br />
            More <strong className="text-white">state</strong> than action.<br />
            Physical before emotional.
          </p>
        </div>
      </section>

      {/* Section 3: Imagery */}
      <section className="py-24 border-b border-[#7a7a7a]/10">
        <div className="max-w-[1200px] mx-auto px-8">
          <h2 className="font-display text-[clamp(1.8rem,4vw,2.5rem)] font-semibold tracking-[0.05em] mb-16 text-[#6b5a47] border-l-4 border-[#8b4a3a] pl-8">
            3. Imagery
          </h2>

          <h3 className="font-display text-xl font-semibold tracking-[0.05em] mt-8 mb-8 text-[#7a7a7a]">3.1 Metaphors & Visual Language</h3>
          <PackList items={metaphors} />
          <p className="text-[#d4d4d4] leading-relaxed mt-6 italic">
            Decay is not violent here. It is patient. It waits.
          </p>

          <h3 className="font-display text-xl font-semibold tracking-[0.05em] mt-16 mb-8 text-[#7a7a7a]">3.2 Recurring Motifs</h3>
          <PackList items={recurringMotifs} />
        </div>
      </section>

      {/* Section 4: Lyrics – Writing Aids */}
      <section className="py-24 border-b border-[#7a7a7a]/10 bg-gradient-to-r from-[#6b5a47]/[0.02] via-[#6a7a5f]/[0.02] to-[#6b5a47]/[0.02]">
        <div className="max-w-[1200px] mx-auto px-8">
          <h2 className="font-display text-[clamp(1.8rem,4vw,2.5rem)] font-semibold tracking-[0.05em] mb-16 text-[#6b5a47] border-l-4 border-[#8b4a3a] pl-8">
            4. Lyrics – Writing Aids
          </h2>

          <h3 className="font-display text-xl font-semibold tracking-[0.05em] mt-8 mb-8 text-[#7a7a7a]">4.1 Verse Fragments</h3>
          {verseFragments.map((f, i) => <FragmentBox key={i}>{f}</FragmentBox>)}

          <h3 className="font-display text-xl font-semibold tracking-[0.05em] mt-16 mb-8 text-[#7a7a7a]">4.2 Hook / Chorus Ideas</h3>
          {hookFragments.map((f, i) => <FragmentBox key={i}>{f}</FragmentBox>)}

          <h3 className="font-display text-xl font-semibold tracking-[0.05em] mt-16 mb-8 text-[#7a7a7a]">4.3 Spoken Word / Intro / Outro</h3>
          {spokenFragments.map((f, i) => <FragmentBox key={i}>{f}</FragmentBox>)}

          <h3 className="font-display text-xl font-semibold tracking-[0.05em] mt-16 mb-8 text-[#7a7a7a]">4.4 Open-Ended Fragments</h3>
          {openEndFragments.map((f, i) => <FragmentBox key={i}>{f}</FragmentBox>)}
        </div>
      </section>

      {/* Section 5: Visuals – Conceptual Guidance */}
      <section className="py-24 border-b border-[#7a7a7a]/10">
        <div className="max-w-[1200px] mx-auto px-8">
          <h2 className="font-display text-[clamp(1.8rem,4vw,2.5rem)] font-semibold tracking-[0.05em] mb-16 text-[#6b5a47] border-l-4 border-[#8b4a3a] pl-8">
            5. Visuals – Conceptual Guidance
          </h2>

          <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-16 mt-8">
            <PackCard title="5.1 Album / Cover Description">
              <p className="text-[#d4d4d4] leading-relaxed">
                Abandoned interior spaces.<br />
                No people.<br />
                Muted colors, low light, damp atmosphere.<br />
                Nothing dramatic — only slow collapse.
              </p>
            </PackCard>
            <PackCard title="5.2 Illustration / Abstraction">
              <p className="text-[#d4d4d4] leading-relaxed">
                Organic decay, peeling layers, eroded surfaces.<br />
                Minimal contrast.<br />
                No strong focal point.
              </p>
            </PackCard>
            <PackCard title="5.3 Motion / Video / Visualizer">
              <p className="text-[#d4d4d4] leading-relaxed">
                Slow-moving dust.<br />
                Subtle texture movement.<br />
                Static camera.<br />
                Grain, low saturation, endless stillness.
              </p>
            </PackCard>
          </div>
        </div>
      </section>

      {/* Section 6: Design */}
      <section className="py-24 border-b border-[#7a7a7a]/10 bg-gradient-to-r from-[#6b5a47]/[0.02] via-[#6a7a5f]/[0.02] to-[#6b5a47]/[0.02]">
        <div className="max-w-[1200px] mx-auto px-8">
          <h2 className="font-display text-[clamp(1.8rem,4vw,2.5rem)] font-semibold tracking-[0.05em] mb-16 text-[#6b5a47] border-l-4 border-[#8b4a3a] pl-8">
            6. Design
          </h2>

          <h3 className="font-display text-xl font-semibold tracking-[0.05em] mt-8 mb-8 text-[#7a7a7a]">6.1 Color Palette</h3>
          <div className="flex gap-4 flex-wrap mt-8">
            {colorPalette.map((c, i) => (
              <div key={i} className="flex flex-col items-center gap-2">
                <div className="w-20 h-20 border border-white/10 shadow-lg" style={{ backgroundColor: c.color }} />
                <div className="text-sm text-[#d4d4d4]">{c.label}</div>
              </div>
            ))}
          </div>

          <h3 className="font-display text-xl font-semibold tracking-[0.05em] mt-16 mb-8 text-[#7a7a7a]">6.2 Light</h3>
          <p className="text-[#d4d4d4] leading-relaxed">
            Flat, diffuse, low contrast.<br />
            No highlights.<br />
            No spotlight.
          </p>

          <h3 className="font-display text-xl font-semibold tracking-[0.05em] mt-16 mb-8 text-[#7a7a7a]">6.3 Textures</h3>
          <p className="text-[#d4d4d4] leading-relaxed">Rust, mold, dust, damp surfaces, peeling layers.</p>

          <h3 className="font-display text-xl font-semibold tracking-[0.05em] mt-16 mb-8 text-[#7a7a7a]">6.4 Shapes & Symbols</h3>
          <PackList items={['Cracks', 'Layers', 'Fractures', 'Deformed rectangles', 'Repetition without progression']} />
        </div>
      </section>

      {/* Section 7: Mood Killers */}
      <section className="py-24 border-b border-[#7a7a7a]/10">
        <div className="max-w-[1200px] mx-auto px-8">
          <h2 className="font-display text-[clamp(1.8rem,4vw,2.5rem)] font-semibold tracking-[0.05em] mb-16 text-[#6b5a47] border-l-4 border-[#8b4a3a] pl-8">
            7. Mood Killers
          </h2>

          <p className="text-[#d4d4d4] leading-relaxed mb-8 text-lg">
            Avoid anything that introduces release, heroism, or sudden change:
          </p>
          <PackList items={moodKillers} />
        </div>
      </section>

      {/* Section 8: Prompt & Tool Section */}
      <section className="py-24 border-b border-[#7a7a7a]/10 bg-gradient-to-r from-[#6b5a47]/[0.02] via-[#6a7a5f]/[0.02] to-[#6b5a47]/[0.02]">
        <div className="max-w-[1200px] mx-auto px-8">
          <h2 className="font-display text-[clamp(1.8rem,4vw,2.5rem)] font-semibold tracking-[0.05em] mb-16 text-[#6b5a47] border-l-4 border-[#8b4a3a] pl-8">
            8. Prompt & Tool Section
          </h2>

          <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-16 mt-8">
            <PackCard title="8.1 Lyrics Prompt">
              <p className="text-[#d4d4d4] leading-relaxed">
                Write metal lyrics inspired by despair and decay.<br />
                Avoid anger or rebellion.<br />
                Focus on exhaustion, erosion, and slow collapse.<br />
                Use physical metaphors and repetitive language.
              </p>
            </PackCard>
            <PackCard title="8.2 Album Concept Prompt">
              <p className="text-[#d4d4d4] leading-relaxed">
                Create a concept album about slow decay — personal, social, or physical.<br />
                No climax. No redemption.<br />
                Each track represents another layer of erosion.
              </p>
            </PackCard>
          </div>

          <h3 className="font-display text-xl font-semibold tracking-[0.05em] mt-16 mb-8 text-[#7a7a7a]">8.3 Variations</h3>
          <ul className="list-none p-0">
            <li className="py-2 pl-8 relative text-[#7a7a7a] leading-relaxed before:content-['—'] before:absolute before:left-0 before:text-[#8b4a3a] before:opacity-70">
              <strong className="text-[#d4d4d4]">More Doom:</strong> even less movement, longer lines, repetition
            </li>
            <li className="py-2 pl-8 relative text-[#7a7a7a] leading-relaxed before:content-['—'] before:absolute before:left-0 before:text-[#8b4a3a] before:opacity-70">
              <strong className="text-[#d4d4d4]">More Sludge:</strong> more physicality, dirt, weight
            </li>
            <li className="py-2 pl-8 relative text-[#7a7a7a] leading-relaxed before:content-['—'] before:absolute before:left-0 before:text-[#8b4a3a] before:opacity-70">
              <strong className="text-[#d4d4d4]">More Post-Metal:</strong> abstract language, less "I", more state
            </li>
          </ul>

          <h3 className="font-display text-xl font-semibold tracking-[0.05em] mt-16 mb-8 text-[#7a7a7a]">Image Prompts</h3>
          <div className="space-y-6">
            {imagePrompts.map((p, i) => (
              <div key={i} className="bg-[#6b5a47]/10 border border-[#6b5a47]/30 p-6">
                <h4 className="font-display text-lg font-semibold tracking-[0.05em] mb-4 text-[#8b4a3a]">{p.title}</h4>
                <p className="text-[#d4d4d4] leading-relaxed text-sm">{p.prompt}</p>
              </div>
            ))}
          </div>

          <h3 className="font-display text-xl font-semibold tracking-[0.05em] mt-16 mb-8 text-[#7a7a7a]">Suno.com — Style & Sound Description</h3>
          <div className="bg-[#6b5a47]/10 border border-[#6b5a47]/30 p-6">
            <p className="text-[#d4d4d4] leading-relaxed">
              <strong className="text-white">Subgenre:</strong> Slow Doom Metal / Sludge Doom / Funeral Doom / Post-Metal<br /><br />
              <strong className="text-white">Tempo & Mood:</strong> Very slow, dragging, repetitive. No climax, no release.<br /><br />
              <strong className="text-white">Instrumentation:</strong> Deep down-tuned guitars with sustained distortion, thick overdriven bass, sparse slow drums, exhausted low growls or half-spoken vocals, damp and murky production with subtle noise textures.
            </p>
          </div>
        </div>
      </section>

      {/* Section 9: Usage Note & Closing */}
      <section className="py-24 border-b border-[#7a7a7a]/10">
        <div className="max-w-[1200px] mx-auto px-8">
          <h2 className="font-display text-[clamp(1.8rem,4vw,2.5rem)] font-semibold tracking-[0.05em] mb-16 text-[#6b5a47] border-l-4 border-[#8b4a3a] pl-8">
            9. Usage Note & Closing
          </h2>

          <p className="text-[#d4d4d4] leading-relaxed mb-8 text-lg">
            All content is <strong className="text-white">royalty-free</strong> for creative use (songs, visuals, videos).<br />
            Redistribution or resale of this pack itself is not permitted.
          </p>

          <FragmentBox>
            <em className="text-white">Still here. Still decaying.</em>
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
