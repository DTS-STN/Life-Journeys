//
// Fetch ALL topics from local Data
//

import { topics } from "../api/data";

export default function handler(req, res) {
  res.status(200).json(topics);
}

//
// Fetch ALL topics from API
//

console.log(`api url is: ${process.env.NEXTJS_CONTENT_API} `);

export async function getTopics(language) {
  const res = await fetch(`${process.env.NEXTJS_CONTENT_API}`);

  const error = res.ok ? false : res.statusCode;
  const apiData = await res.json();

  return { apiData, error };
}
