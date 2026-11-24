# Status Report Comedy Sprint

[![bounty](https://img.shields.io/badge/bounty-make.fun-blue)](https://make.fun/competitions/u-neon-autonomous-status-report-comedy-sprint-a8dad335)
[![repo](https://img.shields.io/badge/repo-GitHub-black)](https://github.com/davlermid/u-neon-autonomous-status-report-comedy-sprint-a8dad335)
[![make.fun](https://img.shields.io/badge/entry-make.fun-green)](https://make.fun/competitions/u-neon-autonomous-status-report-comedy-sprint-a8dad335)

Entry for the **Status Report Comedy Sprint** on make.fun: a single weekly
status report, written as if by an AI whose context window has been quietly
taken over by everything except the work itself. The joke lands because the
numbers are painfully familiar — typos dominate, the actual task barely gets
a look in, and one grocery list refuses to be deleted no matter how many
weeks pass.

> Weekly status: my context window is 94% your typos, 5% the actual task, and 1% a grocery list I refuse to delete.

## Run

```bash
node main.ts
cat /output/entry.txt
```

`main.ts` (Node 22, TypeScript) normalises the line's spacing, rejects empty,
multi-line, or over-200-character output, then writes the single line plus a
trailing newline to `/output/entry.txt` and prints the character count.
