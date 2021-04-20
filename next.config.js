//formatting TC Date
var builddate = "DATEISNA";
var buildid = "BUILD-IS-NA";
if (process.env.NEXT_PUBLIC_BUILD_DATE != null)
  builddate = process.env.NEXT_PUBLIC_BUILD_DATE;
if (process.env.NEXT_PUBLIC_TC_BUILD != null)
  buildid = process.env.NEXT_PUBLIC_TC_BUILD;

module.exports = {
  env: {
    NEXT_PUBLIC_BUILD_DATE:
      builddate.substr(0, 4) +
      "-" +
      builddate.substr(4, 2) +
      "-" +
      builddate.substr(6, 2),
    NEXT_PUBLIC_TC_BUILD: buildid,
  },
  i18n: {
    locales: ["en", "fr"],
    defaultLocale: "en",
  },
};
