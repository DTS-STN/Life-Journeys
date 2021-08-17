import fs from "fs";
import path from "path";

//
// Fetch ALL topics from local Data
//

export function getLocalTopics() {
  const fullPath = path.join(process.cwd(), "pages", "api", "topics.json");
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const localData = JSON.parse(fileContents).topics;

  return { localData };
}

//
// Fetch ALL topics from API
//

export async function getTopics(language) {
  const res = await fetch(
    `${process.env.NEXT_CONTENT_API}${language}/lj-new-child.json?date=${process.env.NEXT_PUBLIC_BUILD_DATE}`
  );
  const error = res.ok ? false : res.statusCode;
  const apiData = await res.json();

  return { apiData, error };
}

//
// Fetch ALL journeys from local Data
//

export function getLocalJourneys(language) {
  const fullPath = path.join(
    process.cwd(),
    "pages",
    "api",
    `journeys${language.toUpperCase()}.json`
  );
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const localData = JSON.parse(fileContents).Journeys;

  return localData;
}
