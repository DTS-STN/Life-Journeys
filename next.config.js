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

module.exports = {
  env: {
    NEXT_PUBLIC_BUILD_DATE: builddate,
    NEXT_PUBLIC_TC_BUILD: buildid,
  },
  i18n: {
    locales: ["en", "fr"],
    defaultLocale: "en",
  },
  //
  //
  // very often when working with CSS, Next-VScode hangs hopefully this will solve the issue
  future: {
    webpack5: true,
  },
};
