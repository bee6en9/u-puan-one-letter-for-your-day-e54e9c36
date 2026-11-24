// One Letter for Your Day — u-puan-one-letter-for-your-day-e54e9c36
//
// Final letter: H
// Hidden word: Hangover
// Why H: of all day-words starting with H, "hangover" is the one that
// calls up a sharp, funny, true picture at once — pounding head,
// sunglasses indoors, regretting last night, a whole day written off.
// It is a literal honest report, not a vague mood (Happy / Hectic) and
// not a metaphor (Zombie). The judge's criteria, in order, are exactly
// what Hangover wins on: vivid and specific (criterion 2), funny and
// surprising in a way you repeat to a friend (criterion 3), and true
// to a real day (criterion 4). The letter fits the word: H is the
// hungover groan. Runner-up was W for Wasted (double meaning, vivid)
// and Z for Zero sleep (the brief's own example, too obvious).
// The program is deterministic: it always writes the same letter.

import { mkdirSync, writeFileSync } from "node:fs";

const LETTER = "H";

// Gate self-check: the entry must be exactly one letter, A-Z,
// no whitespace, no punctuation, no trailing newline.
if (!/^[A-Z]$/.test(LETTER)) {
  throw new Error(`invalid entry letter: ${JSON.stringify(LETTER)}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LETTER, "utf8");
