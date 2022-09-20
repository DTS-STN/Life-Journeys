//formatting TC Date
var builddate = process.env.NEXT_PUBLIC_BUILD_DATE
  ? process.env.NEXT_PUBLIC_BUILD_DATE.substr(0, 4) +
    "-" +
    process.env.NEXT_PUBLIC_BUILD_DATE.substr(4, 2) +
    "-" +
    process.env.NEXT_PUBLIC_BUILD_DATE.substr(6, 2)
  : "DATE-IS-NA";
var buildid = process.env.NEXT_PUBLIC_TC_BUILD
  ? process.env.NEXT_PUBLIC_TC_BUILD
  : "BUILD-IS-NA";
var contentURL = process.env.NEXT_CONTENT_API
  ? process.env.NEXT_CONTENT_API
  : "";

module.exports = {
  env: {
    NEXT_PUBLIC_BUILD_DATE: builddate,
    NEXT_PUBLIC_TC_BUILD: buildid,
    NEXT_CONTENT_API: contentURL,
  },
  i18n: {
    locales: ["en", "fr"],
    defaultLocale: "en",
    localeDetection: false,
  },
};
