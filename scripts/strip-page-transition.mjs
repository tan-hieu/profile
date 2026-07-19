import fs from "node:fs";
import path from "node:path";

const dir = path.resolve("src/pages");

for (const file of fs.readdirSync(dir)) {
  if (!file.endsWith(".tsx")) continue;
  const full = path.join(dir, file);
  let text = fs.readFileSync(full, "utf8");
  text = text.replace(
    /import \{ PageTransition \} from "@\/components\/common\/PageTransition";\r?\n/g,
    "",
  );
  text = text.replace(/\r?\n\s*<PageTransition>\r?\n/g, "\n");
  text = text.replace(/\r?\n\s*<\/PageTransition>/g, "");
  fs.writeFileSync(full, text);
  console.log("updated", file);
}
