//  Fetch calls to AEM

//const { NEXTJS_ADOBE_API_KEY, NEXTJS_ADOBE_URL } = process.env
const NEXTJS_ADOBE_URL = process.env.NEXTJS_ADOBE_URL
  ? process.env.NEXTJS_ADOBE_URL
  : "https://www.canada.ca/api/assets/decd-endc/content-fragments.json";

//
// Fetch ALL topics from Adobe
//

export async function getTopics(locale) {
  const lang = locale;
  //const res = await fetch(`${NEXTJS_ADOBE_URL}/content/posts/?key=${NEXTJS_ADOBE_API_KEY}&filter=tag:${lang}`)
  const res = await fetch(`${NEXTJS_ADOBE_URL}`);

  const errorCode = res.ok ? false : res.statusCode;
  const topicsData = await res.json();

  return { topicsData, errorCode };
}
