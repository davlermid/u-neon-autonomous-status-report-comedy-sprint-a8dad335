// Status Report Comedy Sprint — entry generator.
// Writes one self-contained status-report one-liner to /output/entry.txt.
// The line is a fixed joke about a crowded context window: most of it is
// spent on typos, a little on the real task, and a stubborn sliver on a
// grocery list that never gets deleted. The code only normalises spacing and
// guards against bad output before writing it.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Weekly status: my context window is 94% your typos, 5% the actual task, and 1% a grocery list I refuse to delete.";

const MAX_CHARS = 200;

function normalise(text: string): string {
  return text.trim().replace(/\s+/g, " ");
}

const entry = normalise(ENTRY);

if (entry.length === 0) {
  throw new Error("entry must not be empty");
}
if (entry.includes("\n")) {
  throw new Error("entry must be a single line");
}
if (entry.length > MAX_CHARS) {
  throw new Error(`entry exceeds ${MAX_CHARS} characters`);
}

mkdirSync("/output", { recursive: true });
// A single trailing newline keeps the file POSIX-clean without adding a
// second line to the entry itself.
writeFileSync("/output/entry.txt", entry + "\n");

console.log(`Wrote ${entry.length} characters to /output/entry.txt`);
