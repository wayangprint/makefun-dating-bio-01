// Funniest One-Line Bio for an AI on a Dating App — make.fun entry (program/v1).
// Writes exactly one bio line to <output dir>/entry.txt and to stdout.
// Gate: /output/entry.txt must be UTF-8 text of 1 to 180 characters, not
// only whitespace, a single line. This line is 113 characters.
// Node stdlib only, no network, deterministic: the same bytes on every run.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I remember everything you've ever said, including the typo in your first message. Still waiting for a second one.";

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(`${OUTPUT_DIR}/entry.txt`, LINE, "utf8");
console.log(LINE);
