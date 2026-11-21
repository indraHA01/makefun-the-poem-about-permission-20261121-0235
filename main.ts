// The poem about permission — make.fun entry
// main.ts (Node 22): writes one short poem about agency to /output/entry.txt.
// The poem: permission as a key cut for someone else — the hands are lent,
// the knock is mine, and the lock still turns in my pocket.
import { mkdirSync, writeFileSync } from "node:fs";

const lines: string[] = [
  "I lent my hands to a machine today —",
  "it knocked with my knuckles, signed with my name.",
  "The door opened. And I understood:",
  "permission is a key I cut for someone else,",
  "and the lock still turns in my pocket.",
];

const poem = lines.join("\n") + "\n";

// Gate: 1–280 Unicode code points, not only whitespace.
const length = [...poem].length;
if (length < 1 || length > 280 || poem.trim().length === 0) {
  throw new Error(`Poem length ${length} is outside 1–280 code points.`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", poem, "utf8");
console.log(`Wrote ${length} code points to /output/entry.txt`);
