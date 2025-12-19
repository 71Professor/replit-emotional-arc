export interface PackDetails {
  coreFeeling: string;
  included: string[];
  perfectFor: string;
}

export interface Pack {
  id: string;
  number: string;
  title: string;
  description: string;
  emotionalArc: string;
  colorClass: string;
  details: PackDetails;
  hasDetailPage?: boolean;
}

export const packs: Pack[] = [
  {
    id: 'despair',
    number: '01',
    title: 'DESPAIR & DECAY',
    description: 'Everything erodes. Slowly. Quietly. Not pain — exhaustion. The weight that comes before action.',
    emotionalArc: 'Resignation → Numbness → Erosion',
    colorClass: 'despair',
    hasDetailPage: true,
    details: {
      coreFeeling: 'Slow, inevitable decay. Hope is not lost — it was never relevant. Not explosion, but erosion. Not pain, but exhaustion.',
      included: [
        'Mood essence & emotional axis',
        'Word fields & language rules (rot, decay, rust, erosion, collapse)',
        '40+ lyric fragments & verse ideas',
        'Visual prompts for covers, posters, videos',
        'Color palette: rust brown, dirty gray, matte brown',
        'Optional AI prompt boosters',
      ],
      perfectFor: 'Doom, Sludge, Post-Metal, Funeral Doom & atmospheric projects focused on exhaustion and slow collapse.',
    },
  },
  {
    id: 'fury',
    number: '02',
    title: 'RITUALISTIC FURY',
    description: 'Rage takes form. Controlled, rhythmic, collective. Anger as ritual — not chaos.',
    emotionalArc: 'Invocation → Gathering → Ecstasy',
    colorClass: 'fury',
    details: {
      coreFeeling: 'Wrath as action. Fury not as loss of control, but as ritualistic force. Together, rhythmic, consciously unleashed.',
      included: [
        'Ritual-focused mood essence',
        'Word fields: invoke, chant, strike, bind, awaken, fire, blood, circle',
        '40+ commanding lyric fragments',
        'Visual prompts for ritual imagery',
        'Color palette: deep red, black, ash gray, glowing orange',
        'Rhythmic language patterns',
      ],
      perfectFor: 'Tribal Metal, Blackened Hardcore, Sludge, Pagan & ritual-driven projects.',
    },
  },
  {
    id: 'triumph',
    number: '03',
    title: 'MELANCHOLIC TRIUMPH',
    description: 'You endure. You survive. The victory is real — but it carries weight.',
    emotionalArc: 'Exhaustion → Clarity → Quiet Pride',
    colorClass: 'triumph',
    details: {
      coreFeeling: 'The victory is real — but it feels empty. Not euphoria, but quiet dignity after loss, suffering, and endurance.',
      included: [
        'Restrained victory mood essence',
        'Word fields: endure, scars, weight, remain, dignity, aftermath',
        '40+ reflective lyric fragments',
        'Visual prompts for dawn and empty battlefields',
        'Color palette: faded gold, ash gray, pale blue',
        'Dignified language tone',
      ],
      perfectFor: 'Post-Metal, Doom, Atmospheric Black & slow epic projects.',
    },
  },
  {
    id: 'pagan',
    number: '04',
    title: 'PAGAN REVERENCE',
    description: 'After struggle comes grounding. Connection to land, cycles, memory. Not belief — belonging.',
    emotionalArc: 'Remembering → Rooting → Honoring',
    colorClass: 'pagan',
    details: {
      coreFeeling: 'Deep reverence for forces older than language. Not submission — but belonging.',
      included: [
        'Nature-grounded mood essence',
        'Word fields: earth, roots, stone, ancestors, cycles, grove',
        '40+ grounded lyric fragments',
        'Visual prompts for ancient stones and forests',
        'Color palette: moss green, earth brown, stone gray',
        'Respectful, observant tone',
      ],
      perfectFor: 'Pagan Metal, Folk Metal, Atmospheric Black & ritualistic projects.',
    },
  },
  {
    id: 'nihilistic',
    number: '05',
    title: 'NIHILISTIC CALM',
    description: 'Nothing matters. And that is no longer frightening. Stillness without resistance.',
    emotionalArc: 'Recognition → Release → Neutrality',
    colorClass: 'nihilistic',
    details: {
      coreFeeling: 'Nothing has meaning — and that is no problem. No panic, no sorrow, no defiance. Only silence.',
      included: [
        'Neutral stillness mood essence',
        'Word fields: void, silence, absence, stillness, horizon, empty',
        '40+ detached lyric fragments',
        'Visual prompts for vast empty landscapes',
        'Color palette: pale gray, cold white, fog blue',
        'Detached, neutral tone',
      ],
      perfectFor: 'Post-Metal, Doom, Ambient Metal & minimal atmospheric projects.',
    },
  },
  {
    id: 'cosmic',
    number: '06',
    title: 'COSMIC DREAD',
    description: 'Scale destroys meaning. The universe does not observe — it erases. Awe through insignificance.',
    emotionalArc: 'Awe → Disquiet → Dissolution',
    colorClass: 'cosmic',
    details: {
      coreFeeling: 'The feeling of being small, meaningless, and exposed — facing a cold, indifferent, ancient void.',
      included: [
        'Cosmic scale mood essence',
        'Word fields: void, abyss, infinite, entropy, ancient, collapse',
        '40+ abstract lyric fragments',
        'Visual prompts for cosmic voids and collapsing stars',
        'Color palette: deep black, dark blue, cold violet',
        'Abstract, distant language',
      ],
      perfectFor: 'Doom, Black Metal, Post-Metal, Ambient & concept projects exploring existential themes.',
    },
  },
  {
    id: 'apocalyptic',
    number: '07',
    title: 'POST-APOCALYPTIC AWE',
    description: 'After everything, the world remains. Silent. Vast. Unconcerned. The final state is not despair — it is wonder.',
    emotionalArc: 'Destruction → Silence → Wonder',
    colorClass: 'apocalyptic',
    details: {
      coreFeeling: 'The world is destroyed — and yet majestic. Not panic, but wonder. Not survival, but observation.',
      included: [
        'Post-collapse wonder mood essence',
        'Word fields: ruins, silence, aftermath, horizon, remnants, vast',
        '40+ observational lyric fragments',
        'Visual prompts for reclaimed ruins and wide horizons',
        'Color palette: dusty green, dust gray, sky blue',
        'Wide, observant tone',
      ],
      perfectFor: 'Post-Metal, Atmospheric Doom, Cinematic & expansive concept projects.',
    },
  },
];
