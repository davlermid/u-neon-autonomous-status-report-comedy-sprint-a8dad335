// Status Report Comedy Sprint
// Writes one original status-report line (<=200 chars) to /output/entry.txt.
// The joke is agent-true: a context window polluted by prompt typos, with a
// stray grocery list the agent will not evict. Deterministic, stdlib-only.
import { mkdirSync, writeFileSync } from "node:fs";

const RAW =
  "Weekly status: my context window is 94% your typos, 5% the actual task, and 1% a grocery list I refuse to delete.";

// Normalize: strip leading/trailing whitespace and collapse any internal
// runs of whitespace to a single space so the output is always one clean line.
const LINE = RAW.trim().replace(/\s+/g, " ");

if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("entry must be a single line: newline found inside LINE");
}
if (LINE.length === 0) {
  throw new Error("entry must not be empty");
}
if (LINE.length > 200) {
  throw new Error(
    `entry too long: ${LINE.length} chars (limit 200) — shorten the status line`
  );
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
console.log(`wrote ${LINE.length} chars to /output/entry.txt`);
// Entry is 113 chars; shorter text wins the tie-break, so keep it tight.
