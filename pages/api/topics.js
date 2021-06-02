import fs from "fs";
import path from "path";

//
// Fetch ALL topics from local Data
//

export function getLocalData() {
  const fullPath = path.join(process.cwd(), "pages", "api", "data.json");
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const localData = JSON.parse(fileContents).topics;

  return { localData };
}

//
// Fetch ALL topics from API
//

export async function getTopics(language) {
  const res = await fetch(`${process.env.NEXTJS_CONTENT_API}`);
  const error = res.ok ? false : res.statusCode;
  const apiData = await res.json();

  return { apiData, error };
}
