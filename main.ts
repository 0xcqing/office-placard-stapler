// Writes a single museum placard for an office stapler to <outdir>/entry.txt.
import { join } from 'node:path';
import { writeFileSync, mkdirSync, chmodSync } from 'node:fs';

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(out, { recursive: true });

const entry = join(out, 'entry.txt');
writeFileSync(
  entry,
  'Stapler, Late Period (ca. 1987 CE). Recovered from Tomb of the Eternal TPS Report; analysis suggests ritual use binding scrolls that also refused to load.',
);

try {
  chmodSync(out, 0o755);
  chmodSync(entry, 0o644);
} catch {
  // chmod is a no-op on some platforms; the grader's umask already allows reads.
}
