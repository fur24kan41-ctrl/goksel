// Dev-only sanity check for the hand-rolled i18n dictionary:
//   node tools/check-i18n.mjs
// Reports t('…') keys with no Turkish entry, and entries nobody uses.
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const root = process.cwd();

function walk(dir, out = []) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (name === 'node_modules' || name === '.next' || name === '.git') continue;
    const s = statSync(p);
    if (s.isDirectory()) walk(p, out);
    else if (/\.(tsx|ts)$/.test(name)) out.push(p);
  }
  return out;
}

// --- collect every English key defined in src/lib/i18n-tr/*.ts ---
const dictFiles = readdirSync(join(root, 'src/lib/i18n-tr'))
  .filter((f) => f.endsWith('.ts') && f !== 'index.ts');
const defined = new Map(); // key -> [files]
for (const f of dictFiles) {
  const src = readFileSync(join(root, 'src/lib/i18n-tr', f), 'utf8');
  for (const m of src.matchAll(/^\s*(?:'((?:[^'\\]|\\.)*)'|"((?:[^"\\]|\\.)*)"):/gm)) {
    const k = (m[1] ?? m[2]).replace(/\\(['"])/g, '$1');
    if (!defined.has(k)) defined.set(k, []);
    defined.get(k).push(f);
  }
}

// --- collect every t('…') / tRef.current('…') literal used in components ---
const used = new Map(); // key -> [file:line]
const files = walk(join(root, 'src/components'))
  .concat(walk(join(root, 'src/app')).filter((f) => f.endsWith('.tsx')));
for (const f of files) {
  if (f.includes(`i18n-tr`)) continue;
  const src = readFileSync(f, 'utf8');
  const lines = src.split('\n');
  lines.forEach((line, i) => {
    for (const m of line.matchAll(/\bt\(\s*'((?:[^'\\]|\\.)*)'/g)) {
      const k = m[1].replace(/\\'/g, "'");
      if (!used.has(k)) used.set(k, []);
      used.get(k).push(`${f.slice(root.length + 1)}:${i + 1}`);
    }
    for (const m of line.matchAll(/\btRef\.current\(\s*'((?:[^'\\]|\\.)*)'/g)) {
      const k = m[1].replace(/\\'/g, "'");
      if (!used.has(k)) used.set(k, []);
      used.get(k).push(`${f.slice(root.length + 1)}:${i + 1}`);
    }
  });
}

const missing = [...used.keys()].filter((k) => !defined.has(k)).sort();
const unused = [...defined.keys()].filter((k) => !used.has(k)).sort();

console.log(`dictionary entries: ${defined.size}`);
console.log(`t() keys used:      ${used.size}`);
console.log(`\nMISSING TRANSLATIONS (${missing.length}):`);
for (const k of missing) console.log(`  '${k}'  <- ${used.get(k).slice(0, 3).join(', ')}`);
console.log(`\nUNUSED ENTRIES (${unused.length}):`);
for (const k of unused) console.log(`  '${k}'  [${defined.get(k).join(', ')}]`);
