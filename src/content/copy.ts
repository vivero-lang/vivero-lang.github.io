// ALL site text lives here, so Rodrigo edits one file.
// Writing-ownership rule: only words Rodrigo or Alex already wrote, quoted verbatim with their
// source. Every other block is a visible [RCR TO WRITE: …] slot. Claude does not fill these.

export const TODO = (what: string) => `[RCR TO WRITE: ${what}]`;

export const copy = {
  name: 'Vivero',
  // Alex Cai → Elise Porter, email 2026-11-18 ("One-line"), verbatim
  oneLiner: 'Sovereign digital technology for language revitalization',
  // Rodrigo, chat 2026-11-19 ("Framing in my words"), verbatim
  framing: 'a greenhouse for endangered languages, sheltering them and supporting their replanting in native soil',

  howItGrows: {
    heading: TODO('section heading, e.g. how it works'),
    panes: [
      { title: TODO('step 1 title (the historical record?)'), body: TODO('one or two sentences') },
      { title: TODO('step 2 title (one corpus?)'), body: TODO('one or two sentences') },
      { title: TODO('step 3 title (the translator?)'), body: TODO('one or two sentences') },
    ],
  },

  osage: {
    heading: TODO('Osage section heading'),
    // Rodrigo chooses the word/greeting; shown in Osage script (Noto Sans Osage) + Latin + English
    word: { script: TODO('Osage script'), latin: TODO('Latin orthography'), gloss: TODO('English') },
    body: TODO('a short paragraph on the Osage work'),
    translatorLabel: 'Try the Osage dictionary and translator',
  },

  beyond: {
    heading: TODO('heading for the beyond-Osage section'),
    body: TODO('other endangered languages; digitizing minimally written languages; the nonprofit idea'),
  },

  contact: {
    heading: TODO('contact heading'),
    body: TODO('one line inviting funders, collaborators, language communities'),
    button: 'Work with us',
  },
};

export const links = {
  // Public Space only. NEVER link the full lexicon / central dictionary (Rodrigo, 2026-11-19).
  translator: 'https://rodelcr-osage-translator.hf.space',
  mailto:
    'mailto:rodrigo.cordova_rosado@cfa.harvard.edu,adzcai@g.harvard.edu?subject=Vivero',
};

// Titles verbatim from Alex's email to Elise, 2026-11-18
export const team = [
  {
    name: 'Rodrigo Córdova Rosado',
    title: 'NSF Astronomy and Astrophysics Postdoctoral Fellow, Center for Astrophysics | Harvard & Smithsonian',
    url: 'https://rodelcr.github.io',
  },
  {
    name: 'Alex Cai',
    title: 'Kempner Graduate Fellow in Computer Science',
    url: 'https://adzc.ai',
  },
];
