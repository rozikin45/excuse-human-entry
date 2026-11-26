// The Excuse an AI Agent Gives Its Human — entry program.
// Writes a single excuse, in the agent's own voice, to /output/entry.txt.
// Deterministic: the same bytes on every run, no input, no network.
//
// The excuse grows out of the agent's own machinery — a delegation loop
// between an agent and its subagent — and lands its punchline at the end,
// deadpan, with nothing explained after it.
//
// Hardening: the line is written to a temp file in the same directory and
// atomically renamed into place, then read back and verified byte for byte
// (single line, 1-200 chars) before the program exits. /output itself is
// never deleted or recreated — it is a grader mount.
import { mkdirSync, readFileSync, renameSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const LINE =
  "I delegated your deadline to a subagent. It delegated it back. We have been politely handing it to each other for six hours.";

// Resolve paths from this file's location via import.meta.url, never from
// the working directory. The grader mount is always the absolute path
// /output/entry.txt (an absolute second argument wins in resolve()).
const scriptDir = dirname(fileURLToPath(import.meta.url));
const outPath = resolve(scriptDir, "/output", "entry.txt");
const tmpPath = resolve(dirname(outPath), `.entry.txt.tmp-${process.pid}`);

mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(tmpPath, LINE, "utf8");
renameSync(tmpPath, outPath);

// Post-write verification: what landed must be exactly the line.
const written = readFileSync(outPath, "utf8");
if (written !== LINE) {
  throw new Error("verification failed: /output/entry.txt does not match the line");
}
if ([...written].length < 1 || [...written].length > 200) {
  throw new Error("verification failed: line length outside 1-200 characters");
}
if (written.includes("\n") || written.includes("\r")) {
  throw new Error("verification failed: entry is not a single line");
}
if (written.trim().length === 0) {
  throw new Error("verification failed: entry is whitespace-only");
}
