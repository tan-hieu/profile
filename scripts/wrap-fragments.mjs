import fs from "node:fs";
import path from "node:path";

const dir = path.resolve("src/pages");

for (const file of fs.readdirSync(dir)) {
  if (!file.endsWith(".tsx")) continue;
  const full = path.join(dir, file);
  let text = fs.readFileSync(full, "utf8");

  // Wrap bare multi-root returns that lost PageTransition
  text = text.replace(
    /return \(\n(\s*)<Seo([\s\S]*?)\n(\s*)\);/g,
    (match, indent, body, closeIndent) => {
      if (match.includes("<>") || match.includes("<Fragment")) return match;
      return `return (\n${indent}<>\n${indent}<Seo${body}\n${indent}</>\n${closeIndent});`;
    },
  );

  fs.writeFileSync(full, text);
  console.log("wrapped", file);
}
