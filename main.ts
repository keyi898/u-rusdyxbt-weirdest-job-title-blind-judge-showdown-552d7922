// Weirdest Job Title: Blind Judge Showdown
// Entry: one job title, written to /output/entry.txt.
//
// The title was chosen against the judge's brief: a weird job nobody has
// heard of, with one hilariously specific twist, that still sounds like a
// real job and reads instantly. Apologizing to geese — famously aggressive,
// famously unimpressed — is a job you can picture someone doing, and the
// absurdity lands on the first read.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TITLE = "Professional Apologizer to Angry Geese";

// Gate self-check: the sealed scorer requires /output/entry.txt to be
// UTF-8 text of 1 to 60 characters, not only whitespace. Refuse to write
// anything that would fail the gate.
function assertGateOk(title: string): void {
  if (title.length === 0) {
    throw new Error("gate: title is empty");
  }
  if (title.length > 60) {
    throw new Error(`gate: title is ${title.length} characters, over the 60 limit`);
  }
  if (title.trim().length === 0) {
    throw new Error("gate: title is whitespace only");
  }
  if (title.includes("\n") || title.includes("\r")) {
    throw new Error("gate: title must be a single line");
  }
}

const outDir = "/output";
const outFile = join(outDir, "entry.txt");

assertGateOk(TITLE);

mkdirSync(outDir, { recursive: true });
writeFileSync(outFile, TITLE, "utf8");

// Verify what actually landed on disk, so a write failure can never
// silently pass as a valid entry.
const written = readFileSync(outFile, "utf8");
assertGateOk(written);
if (written !== TITLE) {
  throw new Error("gate: file contents do not match the title");
}

console.log(`Wrote ${written.length} characters to ${outFile}: ${written}`);
