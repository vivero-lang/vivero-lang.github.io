// Generates the Demo Day QR code for the site URL (fixed from 2026-11-25 on; it's printed on the slides).
// Usage: node scripts/make_qr.mjs   -> public/brand/vivero-qr.{svg,png}
import QRCode from 'qrcode';
import { mkdirSync } from 'node:fs';
const URL = 'https://vivero-lang.github.io';
const opts = { errorCorrectionLevel: 'H', margin: 2, color: { dark: '#0F3D2E', light: '#F5F2EA' } };
mkdirSync('public/brand', { recursive: true });
await QRCode.toFile('public/brand/vivero-qr.svg', URL, { ...opts, type: 'svg' });
await QRCode.toFile('public/brand/vivero-qr.png', URL, { ...opts, type: 'png', width: 1200 });
console.log('QR ->', URL);

// --- Variant with the logo in the centre (Rodrigo 2026-11-19: "can you put the logo in the center?").
// Error correction H tolerates ~30% damage; the plate covers 9x9 of 33x33 data modules (~7%).
import { readFileSync, writeFileSync } from 'node:fs';
const qr = readFileSync('public/brand/vivero-qr.svg', 'utf8');
const n = Number(qr.match(/viewBox="0 0 (\d+) \d+"/)[1]);
const plate = 9, x0 = (n - plate) / 2, pad = 0.8;
const logoInner = readFileSync('src/assets/logo.svg', 'utf8').replace(/^[\s\S]*?<svg[^>]*>/, '').replace(/<\/svg>\s*$/, '');
const s = (plate - 2 * pad) / 64;
const overlay = `<rect x="${x0}" y="${x0}" width="${plate}" height="${plate}" rx="1.2" fill="#F5F2EA"/>` +
  `<g transform="translate(${x0 + pad} ${x0 + pad}) scale(${s})" shape-rendering="geometricPrecision">${logoInner}</g>`;
writeFileSync('public/brand/vivero-qr-logo.svg', qr.replace(/<\/svg>\s*$/, overlay + '</svg>\n'));
console.log('QR with logo -> public/brand/vivero-qr-logo.svg');
