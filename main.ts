import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// One-star review of something essential: gravity.
// A single deadpan line, written exactly as-is to /output/entry.txt.
const REVIEW =
  "One star. Gravity is fine until you drop your phone, at which point it becomes the most reliable thing in the house.";

const OUTPUT_PATH = "/output/entry.txt";

function main(): void {
  // The gate allows 1-160 characters, exactly one line, no trailing newline.
  if (REVIEW.length < 1 || REVIEW.length > 160 || REVIEW.includes("\n")) {
    throw new Error("review does not meet the entry gate");
  }
  mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
  // No trailing newline: the entry must be exactly one line.
  writeFileSync(OUTPUT_PATH, REVIEW, "utf8");
}

main();
