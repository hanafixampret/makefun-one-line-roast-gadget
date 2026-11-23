import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ROAST =
  "My robot vacuum mapped my entire house, memorized every chair leg, and still eats the same charging cable every day like it's a new delicacy.";

const MAX_CHARS = 200;

function checkRoast(text: string): void {
  const chars = [...text].length;
  if (chars < 1 || chars > MAX_CHARS) {
    throw new Error(`roast must be 1-${MAX_CHARS} characters, got ${chars}`);
  }
  if (text.trim().length === 0) {
    throw new Error("roast must not be only whitespace");
  }
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
checkRoast(ROAST);
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ROAST, "utf8");
console.log(`wrote ${[...ROAST].length} characters to ${join(outDir, "entry.txt")}`);
