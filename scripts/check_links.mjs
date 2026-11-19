// Post-build guard (Rodrigo 2026-11-19): link the public translator, NEVER the full lexicon.
// Fails if dist/ references lexicon/central-dictionary material or any Osage-data host other than the Space.
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';
const ALLOWED_HF = 'https://rodelcr-osage-translator.hf.space';
const BANNED = [/lexicon/i, /central_(internal|dictionary)/i, /huggingface\.co\/datasets/i, /Primary_documents/i, /jesuit/i];
const walk = (d) => readdirSync(d).flatMap((f) => { const p = join(d, f); return statSync(p).isDirectory() ? walk(p) : [p]; });
let bad = [];
for (const f of walk('dist').filter((f) => /\.(html|js|css|xml|txt|json)$/.test(f))) {
  const s = readFileSync(f, 'utf8');
  for (const re of BANNED) if (re.test(s)) bad.push(`${f}: matches ${re}`);
  for (const m of s.matchAll(/https?:\/\/[^\s"'<>)]*(hf\.space|huggingface\.co)[^\s"'<>)]*/g))
    if (!m[0].startsWith(ALLOWED_HF)) bad.push(`${f}: disallowed HF link ${m[0]}`);
}
if (bad.length) { console.error('check_links FAILED\n' + bad.join('\n')); process.exit(1); }
console.log('check_links OK');
