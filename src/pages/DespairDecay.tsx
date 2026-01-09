import { useState } from 'react';
import { Link } from 'react-router-dom';

const storyContent = `In the age before memory learned to hold, there stood the First Dwelling. Not built by hands, but willed into being by the need for shelter itself. Its walls did not rise—they simply were. Stone that had never known the chisel. Wood that grew already aged.

For countless turnings of the world, the Dwelling stood. Beings came and went. They did not live within it, for living implies choice. They existed there, as water exists in a vessel. They breathed the same air their grandmothers had breathed. They touched the same walls. The walls touched them back, slowly.

No one remembers when the Dwelling began to forget its purpose.

It was not a collapse. There was no storm, no flame, no enemy at the threshold. The walls simply grew heavier. The air thickened. Moisture found its way between the stones, not violently but patiently, the way time moves through all things. The Dwelling began to taste itself—salt and mineral, the flavor of its own dissolution.

The beings who existed there felt it too. A weight in the chest that had no name. A fatigue that sleep could not cure. They moved through the rooms as they always had, but the rooms no longer held them. The Dwelling had become a space between purpose and emptiness, and they were its last inhabitants.

One by one, they stopped resisting. Not in surrender, for that would require acknowledgment of struggle. They simply ceased. Their breath continued out of habit. Their hearts beat because hearts do not know how to ask permission to stop.

The Dwelling did not mourn them. It could not. It was too busy becoming what it had always been meant to become: a monument to the exhaustion of existing. The wood darkened. The stone softened. Moss arrived, not as invader but as witness. The walls leaned inward, collapsing in increments too small to measure, too constant to notice.

There is no ruin now. The Dwelling is not gone—it is dispersed. It exists in every abandoned place, every structure that stands not out of strength but because falling requires energy it no longer possesses. It breathes in the damp corners where air grows stale. It whispers through the rust that slowly consumes the iron.

The First Dwelling taught the world a truth: that endings are not events. They are conditions. A state of being that simply continues, day after day, until continuation itself becomes the only prayer left.

And still, somewhere in the depths where language breaks, the Dwelling stands. Waiting for nothing. Collapsing toward nothing. Becoming what it always was.

*Still here. Still decaying.*`;

const lyricsContent = {
  title: "Still Decaying",
  sections: [
    { type: "spoken", label: "[Spoken Intro]", lines: ["There was no moment when it broke.", "It simply never healed."] },
    { type: "verse", label: "[Verse I]", lines: ["I wake up already exhausted", "Time leaks through cracks in the skin", "Walls breathe mold and memory", "Everything rots at the same pace"] },
    { type: "chorus", label: "[Chorus]", lines: ["Still breathing, still decaying", "No collapse — just slow disappearance"] },
    { type: "verse", label: "[Verse II]", lines: ["Rust settles where thoughts once moved", "Decay is not an end, it is a method", "Nothing hurts anymore — that is the sickness", "We outlived the reason to continue"] },
    { type: "chorus", label: "[Chorus]", lines: ["Still breathing, still decaying", "No collapse — just slow disappearance"] },
    { type: "outro", label: "[Outro]", lines: ["Still here.", "Still decaying."] },
  ]
};

const carouselImages = [
  { src: "/material/images/MoodPack1_Image1.png", alt: "Despair & Decay - Conceptual Image 1" },
  { src: "/material/images/MoodPack1_Image2.png", alt: "Despair & Decay - Conceptual Image 2" },
  { src: "/material/images/MoodPack1_Image3.png", alt: "Despair & Decay - Conceptual Image 3" },
];

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

const usageRitual = {
  environment: 'A space of stagnation. Dim light, closed doors. Air that does not move. The physical setting must mirror the internal arrest.',
  mindset: 'Surrender the need for resolution. Accept the weight. There is no energy to be found here, only the endurance of what remains.',
  entry: 'Do not begin; simply stop resisting. Exhale and allow the silence to become heavy. The mood is entered not by action, but by the cessation of effort.',
  context: 'Solitary. A dialogue with the decay.',
};

const trackBlueprint = [
  {
    phase: 'Phase I: The Weight Settles',
    description: 'Introduction of the atmosphere. No sudden entry. A gradual thickening of the air. The realization of the burden.',
  },
  {
    phase: 'Phase II: Erosion',
    description: 'Repetition establishes the cycle. Energy drains away. The structure holds but trembles under the load. Themes of fatigue and dampness emerge.',
  },
  {
    phase: 'Phase III: The Long Decay',
    description: 'The core state. Numbness sets in. Movement slows to a crawl. Elements drop away, leaving only the skeleton of the sound or thought.',
  },
  {
    phase: 'Phase IV: Residue',
    description: 'The ending that is not an end. The sound does not stop; it dissipates. A lingering tone, a final echo, a silence that feels occupied.',
  },
];

const soundTextures = [
  {
    title: 'Environmental Decay',
    description: 'The sound of water dripping in a large, empty hall. Dust settling. Wood groaning under shifting weight.',
  },
  {
    title: 'Human Residue',
    description: 'Heavy, slow breathing. The sound of dry skin moving over fabric. A faint, unintelligible whisper buried in the mix.',
  },
  {
    title: 'Texture',
    description: 'Analog hiss, vinyl crackle, low-frequency hum (50/60Hz), the sound of a cable being unplugged, mechanical friction.',
  },
  {
    title: 'Space',
    description: 'Large reverb tails that darken the sound. Muffled high frequencies, as if heard through a thick wall.',
  },
];

const creativeQuestions = [
  'What is the sound of a structure realizing it can no longer stand?',
  'How does the body move when hope is no longer a fuel?',
  'If you remove the pain, what remains of the wound?',
  'What does the room say when the last person leaves?',
  'How slow can a rhythm be before it becomes a drone?',
  'What is the texture of a memory that is rotting?',
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

const sunoStyles = [
  {
    title: 'Subgenre',
    prompt: 'Slow Doom Metal / Sludge Doom / Funeral Doom / Post-Metal',
  },
  {
    title: 'Tempo & Mood',
    prompt: 'Very slow, dragging, repetitive. No climax, no release.',
  },
  {
    title: 'Instrumentation',
    prompt: 'Deep down-tuned guitars with sustained distortion, thick overdriven bass, sparse slow drums, exhausted low growls or half-spoken vocals, damp and murky production with subtle noise textures.',
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

function StorySection() {
  const [isExpanded, setIsExpanded] = useState(false);
  const paragraphs = storyContent.split('\n\n');
  const previewParagraphs = paragraphs.slice(0, 3);
  const displayParagraphs = isExpanded ? paragraphs : previewParagraphs;

  return (
    <div className="mb-16 bg-gradient-to-br from-[#6b5a47]/10 to-[#6a7a5f]/5 border border-[#6b5a47]/30 p-8 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#8b4a3a] via-[#6b5a47] to-[#6a7a5f]" />
      <h3 className="font-display text-xl font-semibold tracking-[0.05em] mb-6 text-[#8b4a3a]">
        The Dwelling — A Story of Despair & Decay
      </h3>
      <div className="space-y-4 text-[#d4d4d4] leading-relaxed">
        {displayParagraphs.map((paragraph, i) => (
          <p key={i} className={paragraph.startsWith('*') ? 'italic text-[#8b4a3a]' : ''}>
            {paragraph.replace(/\*/g, '')}
          </p>
        ))}
      </div>
      {paragraphs.length > 3 && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-6 text-[#8b4a3a] hover:text-[#d4d4d4] transition-colors duration-300 text-sm tracking-[0.05em] flex items-center gap-2"
        >
          {isExpanded ? '← Show Less' : 'Read Full Story →'}
        </button>
      )}
    </div>
  );
}

function AudioPlayer() {
  return (
    <div className="mb-12 bg-gradient-to-br from-[#6b5a47]/10 to-[#6a7a5f]/5 border border-[#6b5a47]/30 p-6">
      <h4 className="font-display text-lg font-semibold tracking-[0.05em] mb-4 text-[#8b4a3a]">
        🎵 Still Decaying — Sample Track
      </h4>
      <audio controls className="w-full" style={{ filter: 'sepia(20%) saturate(70%)', opacity: 0.8 }}>
        <source src="/material/songs/song1.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}

function LyricsDisplay() {
  return (
    <div className="mb-16 bg-gradient-to-br from-[#6b5a47]/10 to-[#6a7a5f]/5 border border-[#6b5a47]/30 p-8 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#8b4a3a] via-[#6b5a47] to-[#6a7a5f]" />
      <h3 className="font-display text-2xl font-semibold tracking-[0.05em] mb-2 text-[#8b4a3a]">
        {lyricsContent.title}
      </h3>
      <p className="text-[#7a7a7a] text-sm mb-8 italic">Complete Lyrics</p>
      <div className="space-y-6">
        {lyricsContent.sections.map((section, i) => (
          <div key={i} className="space-y-2">
            <div className="text-[#6b5a47] text-sm font-semibold tracking-[0.1em]">
              {section.label}
            </div>
            <div className={`space-y-1 ${section.type === 'chorus' ? 'pl-4 border-l-2 border-[#8b4a3a]/50' : ''} ${section.type === 'spoken' ? 'italic text-[#7a7a7a]' : 'text-[#d4d4d4]'}`}>
              {section.lines.map((line, j) => (
                <p key={j} className="leading-relaxed">{line}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? carouselImages.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === carouselImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="mb-16">
      <h3 className="font-display text-xl font-semibold tracking-[0.05em] mb-6 text-[#7a7a7a]">
        Conceptual Imagery
      </h3>
      <div className="relative bg-black/20 border border-[#6b5a47]/30 overflow-hidden">
        <div className="aspect-[16/9] relative">
          <img
            src={carouselImages[currentIndex].src}
            alt={carouselImages[currentIndex].alt}
            className="w-full h-full object-cover transition-opacity duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-black/50 hover:bg-[#8b4a3a]/70 text-white transition-colors duration-300 border border-white/20"
          aria-label="Previous image"
        >
          ←
        </button>
        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-black/50 hover:bg-[#8b4a3a]/70 text-white transition-colors duration-300 border border-white/20"
          aria-label="Next image"
        >
          →
        </button>

        {/* Dots Indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {carouselImages.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                i === currentIndex
                  ? 'bg-[#8b4a3a] scale-110'
                  : 'bg-white/50 hover:bg-white/70'
              }`}
              aria-label={`Go to image ${i + 1}`}
            />
          ))}
        </div>
      </div>
      <p className="text-[#7a7a7a] text-sm mt-4 italic text-center">
        Image {currentIndex + 1} of {carouselImages.length} — {carouselImages[currentIndex].alt}
      </p>
    </div>
  );
}

function VideoPlayer() {
  return (
    <div className="mb-8">
      <h4 className="font-display text-lg font-semibold tracking-[0.05em] mb-4 text-[#8b4a3a]">
        Visualizer Sample
      </h4>
      <div className="relative bg-black border border-[#6b5a47]/30 overflow-hidden">
        <video
          controls
          className="w-full aspect-video"
          poster="/material/images/MoodPack1_Image1.png"
        >
          <source src="/material/videos/Moodpack1_Video.mp4" type="video/mp4" />
          Your browser does not support the video element.
        </video>
      </div>
      <p className="text-[#7a7a7a] text-sm mt-2 italic">
        Slow-moving atmospheric visuals — dust, grain, endless stillness.
      </p>
    </div>
  );
}

export default function DespairDecay() {
  return (
    <>
      {/* Section 0: Cover */}
      <section className="min-h-[60vh] flex flex-col justify-center items-center text-center py-32 px-8 bg-[radial-gradient(ellipse_at_top,rgba(107,90,71,0.08)_0%,transparent_50%),linear-gradient(180deg,rgba(139,74,58,0.05)_0%,rgba(106,122,95,0.03)_100%)] border-b border-[#6b5a47]/30 relative overflow-hidden">
        {/* Background Image with reduced opacity */}
        <div className="absolute inset-0 pointer-events-none">
          <img
            src="/material/images/MoodPack1_Image1.png"
            alt=""
            className="w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        </div>
        <div className="absolute inset-0 bg-[repeating-linear-gradient(90deg,transparent,transparent_2px,rgba(122,122,122,0.03)_2px,rgba(122,122,122,0.03)_4px)] pointer-events-none" />
        <div className="font-display text-base tracking-[0.3em] text-[#8b4a3a]/80 mb-4 drop-shadow-[0_0_20px_rgba(139,74,58,0.3)]">
          MOODPACK 1
        </div>
        <h1 className="font-display text-[clamp(3rem,8vw,5rem)] font-bold tracking-[0.05em] text-[#6b5a47] mb-8 drop-shadow-[0_2px_10px_rgba(107,90,71,0.5)]">
          DESPAIR & DECAY
        </h1>
        <p className="text-xl leading-relaxed text-[#d4d4d4] max-w-[800px] italic">
          A Metal Mood & Emotion Pack
        </p>
      </section>

      {/* Usage Ritual */}
      <section className="py-24 border-b border-[#7a7a7a]/10 bg-gradient-to-r from-[#6b5a47]/[0.02] via-[#6a7a5f]/[0.02] to-[#6b5a47]/[0.02]">
        <div className="max-w-[1200px] mx-auto px-8">
          <h2 className="font-display text-[clamp(1.8rem,4vw,2.5rem)] font-semibold tracking-[0.05em] mb-16 text-[#6b5a47] border-l-4 border-[#8b4a3a] pl-8">
            Usage Ritual
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-[#6b5a47]/10 to-[#6a7a5f]/5 border border-[#6b5a47]/30 p-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#8b4a3a] via-[#6b5a47] to-[#6a7a5f]" />
              <h3 className="font-display text-lg font-semibold tracking-[0.05em] mb-4 text-[#8b4a3a]">Environment</h3>
              <p className="text-[#d4d4d4] leading-relaxed italic">{usageRitual.environment}</p>
            </div>
            <div className="bg-gradient-to-br from-[#6b5a47]/10 to-[#6a7a5f]/5 border border-[#6b5a47]/30 p-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#8b4a3a] via-[#6b5a47] to-[#6a7a5f]" />
              <h3 className="font-display text-lg font-semibold tracking-[0.05em] mb-4 text-[#8b4a3a]">Mindset</h3>
              <p className="text-[#d4d4d4] leading-relaxed italic">{usageRitual.mindset}</p>
            </div>
            <div className="bg-gradient-to-br from-[#6b5a47]/10 to-[#6a7a5f]/5 border border-[#6b5a47]/30 p-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#8b4a3a] via-[#6b5a47] to-[#6a7a5f]" />
              <h3 className="font-display text-lg font-semibold tracking-[0.05em] mb-4 text-[#8b4a3a]">Entry</h3>
              <p className="text-[#d4d4d4] leading-relaxed italic">{usageRitual.entry}</p>
            </div>
            <div className="bg-gradient-to-br from-[#6b5a47]/10 to-[#6a7a5f]/5 border border-[#6b5a47]/30 p-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#8b4a3a] via-[#6b5a47] to-[#6a7a5f]" />
              <h3 className="font-display text-lg font-semibold tracking-[0.05em] mb-4 text-[#8b4a3a]">Context</h3>
              <p className="text-[#d4d4d4] leading-relaxed italic">{usageRitual.context}</p>
            </div>
          </div>
        </div>
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

            <div className="my-12 p-8 bg-gradient-to-br from-[#6b5a47]/10 to-[#6a7a5f]/5 border border-[#6b5a47]/30 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#8b4a3a] via-[#6b5a47] to-[#6a7a5f]" />
              <h3 className="font-display text-xl font-semibold tracking-[0.05em] mb-6 text-[#8b4a3a]">Time Dimension</h3>
              <p className="text-[#d4d4d4] leading-relaxed">
                Time here is not a line; it is a weight. It does not tick forward but accumulates like dust. The past is not gone; it is simply the layer beneath the present. In this state, a minute can stretch into a condition, and a year can feel like a single exhaled breath. It is the time of rusting iron—movement so slow it resembles stillness.
              </p>
            </div>

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

          <StorySection />

          <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-16 mt-8">
            <PackCard title="2.1 Key Terms">
              <p className="text-[#d4d4d4] leading-relaxed text-lg">
                {keyTerms.join(' | ')}
              </p>
            </PackCard>
            <PackCard title="2.2 Verbs">
              <p className="text-[#d4d4d4] leading-relaxed text-lg">
                {verbs.join(' | ')}
              </p>
            </PackCard>
            <PackCard title="2.3 Adjectives">
              <p className="text-[#d4d4d4] leading-relaxed text-lg">
                {adjectives.join(' | ')}
              </p>
            </PackCard>
            <PackCard title="2.4 Language Tone">
              <p className="text-[#d4d4d4] leading-relaxed text-lg">
                dry | tired | heavy | repetitive.<br />
                More <strong className="text-white">state</strong> than action.<br />
                Physical before emotional.
              </p>
            </PackCard>
          </div>

          {/* Puzzle Image - Atmospheric Visual */}
          <div className="mt-16 relative bg-black/20 border border-[#6b5a47]/30 overflow-hidden">
            <img
              src="/material/puzzle/MoodPack1_puzzle.png"
              alt="Despair & Decay - Visual Puzzle"
              className="w-full h-auto opacity-80 transition-opacity duration-500 hover:opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 pointer-events-none" />
           
          </div>
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

          <AudioPlayer />
          <LyricsDisplay />

          <h3 className="font-display text-xl font-semibold tracking-[0.05em] mt-8 mb-8 text-[#7a7a7a]">4.1 Track / Chapter Blueprint</h3>
          <div className="space-y-6">
            {trackBlueprint.map((item, i) => (
              <div key={i} className="bg-gradient-to-br from-[#6b5a47]/10 to-[#6a7a5f]/5 border border-[#6b5a47]/30 p-8 relative overflow-hidden group hover:border-[#8b4a3a]/50 transition-all duration-300">
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#8b4a3a] via-[#6b5a47] to-[#6a7a5f]" />
                <h4 className="font-display text-lg font-semibold tracking-[0.05em] mb-4 text-[#8b4a3a]">{item.phase}</h4>
                <p className="text-[#d4d4d4] leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          <h3 className="font-display text-xl font-semibold tracking-[0.05em] mt-8 mb-8 text-[#7a7a7a]">4.2 Verse Fragments</h3>
          {verseFragments.map((f, i) => <FragmentBox key={i}>{f}</FragmentBox>)}

          <h3 className="font-display text-xl font-semibold tracking-[0.05em] mt-16 mb-8 text-[#7a7a7a]">4.3 Hook / Chorus Ideas</h3>
          {hookFragments.map((f, i) => <FragmentBox key={i}>{f}</FragmentBox>)}

          <h3 className="font-display text-xl font-semibold tracking-[0.05em] mt-16 mb-8 text-[#7a7a7a]">4.4 Spoken Word / Intro / Outro</h3>
          {spokenFragments.map((f, i) => <FragmentBox key={i}>{f}</FragmentBox>)}

          <h3 className="font-display text-xl font-semibold tracking-[0.05em] mt-16 mb-8 text-[#7a7a7a]">4.5 Open-Ended Fragments</h3>
          {openEndFragments.map((f, i) => <FragmentBox key={i}>{f}</FragmentBox>)}
        </div>
      </section>

      {/* Section 5: Visuals – Conceptual Guidance */}
      <section className="py-24 border-b border-[#7a7a7a]/10">
        <div className="max-w-[1200px] mx-auto px-8">
          <h2 className="font-display text-[clamp(1.8rem,4vw,2.5rem)] font-semibold tracking-[0.05em] mb-16 text-[#6b5a47] border-l-4 border-[#8b4a3a] pl-8">
            5. Visuals – Conceptual Guidance
          </h2>

          <ImageCarousel />

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
              <VideoPlayer />
              <p className="text-[#d4d4d4] leading-relaxed mt-4">
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
            <PackCard title="8.3 Variations">
              <p className="text-[#d4d4d4] leading-relaxed">
                <strong className="text-white">More Doom:</strong> even less movement, longer lines, repetition.<br />
                <strong className="text-white">More Sludge:</strong> more physicality, dirt, weight.<br />
                <strong className="text-white">More Post-Metal:</strong> abstract language, less "I", more state.
              </p>
            </PackCard>
          </div>

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
          <div className="space-y-6">
            {sunoStyles.map((p, i) => (
              <div key={i} className="bg-[#6b5a47]/10 border border-[#6b5a47]/30 p-6">
                <h4 className="font-display text-lg font-semibold tracking-[0.05em] mb-4 text-[#8b4a3a]">{p.title}</h4>
                <p className="text-[#d4d4d4] leading-relaxed text-sm">{p.prompt}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sound Textures & Non-Instrument Elements */}
      <section className="py-24 border-b border-[#7a7a7a]/10">
        <div className="max-w-[1200px] mx-auto px-8">
          <h2 className="font-display text-[clamp(1.8rem,4vw,2.5rem)] font-semibold tracking-[0.05em] mb-16 text-[#6b5a47] border-l-4 border-[#8b4a3a] pl-8">
            Sound Textures & Non-Instrument Elements
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {soundTextures.map((item, i) => (
              <div key={i} className="bg-gradient-to-br from-[#6b5a47]/10 to-[#6a7a5f]/5 border border-[#6b5a47]/30 p-8 relative overflow-hidden group hover:border-[#8b4a3a]/50 transition-all duration-300">
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#8b4a3a] via-[#6b5a47] to-[#6a7a5f]" />
                <h3 className="font-display text-lg font-semibold tracking-[0.05em] mb-4 text-[#8b4a3a]">{item.title}</h3>
                <p className="text-[#d4d4d4] leading-relaxed italic">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Creative Working Questions */}
      <section className="py-24 border-b border-[#7a7a7a]/10 bg-gradient-to-r from-[#6b5a47]/[0.02] via-[#6a7a5f]/[0.02] to-[#6b5a47]/[0.02]">
        <div className="max-w-[1200px] mx-auto px-8">
          <h2 className="font-display text-[clamp(1.8rem,4vw,2.5rem)] font-semibold tracking-[0.05em] mb-16 text-[#6b5a47] border-l-4 border-[#8b4a3a] pl-8">
            Open Creative Working Questions
          </h2>

          <div className="space-y-4">
            {creativeQuestions.map((question, i) => (
              <div key={i} className="bg-gradient-to-r from-[#6b5a47]/10 to-[#8b4a3a]/5 border-l-[3px] border-l-[#8b4a3a] border-r border-r-[#6a7a5f]/20 p-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#6a7a5f] to-transparent opacity-30" />
                <p className="text-[#d4d4d4] leading-relaxed">
                  <span className="text-[#8b4a3a] font-semibold mr-3">{i + 1}.</span>
                  {question}
                </p>
              </div>
            ))}
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
