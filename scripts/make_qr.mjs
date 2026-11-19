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
