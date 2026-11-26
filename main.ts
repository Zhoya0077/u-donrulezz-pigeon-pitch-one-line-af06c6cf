// Pigeon Pitch, One Line — entry program for make.fun
// u-donrulezz-pigeon-pitch-one-line-af06c6cf
//
// Writes the one-line elevator pitch a city pigeon gives investors for its
// startup to /output/entry.txt (via MAKEFUN_OUTPUT_DIR, fallback /output).
// No network, no randomness: the output is a fixed string, so every run is
// byte-identical.
//
// The pitch: one specific premise (a pigeon-run last-mile delivery network)
// + a twist (the fleet works for breadcrumbs) + a reframing close
// ("raising seed to stop working for seed" — seed funding vs. birdseed).

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "We run the city's last-mile network on breadcrumbs and rooftops — ten million couriers, no fuel, no traffic — and today we're raising seed to stop working for seed.";

// Self-checking gate: the sealed scorer requires UTF-8 text of 1–200
// characters, exactly one line, not only whitespace.
const chars: string[] = [...ENTRY];
const gateProblems: string[] = [];
if (chars.length < 1 || chars.length > 200) {
  gateProblems.push(`length ${chars.length} chars, outside 1-200`);
}
if (ENTRY.trim().length === 0) gateProblems.push("only whitespace");
if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
  gateProblems.push("not a single line");
}
if (ENTRY.trim() !== ENTRY) gateProblems.push("leading/trailing whitespace");
if (gateProblems.length > 0) {
  throw new Error(`GATE FAILED: ${gateProblems.join("; ")}`);
}

const outDir: string = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
console.log(ENTRY);
console.log(`OK: ${chars.length} chars, gate passed`);
