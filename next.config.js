//formatting TC Date
var builddate = (process.env.NEXT_PUBLIC_BUILD_DATE ??= "DATEISNA");

module.exports = {
  env: {
    NEXT_PUBLIC_BUILD_DATE:
      builddate.substr(0, 4) +
      "-" +
      builddate.substr(4, 2) +
      "-" +
      builddate.substr(6, 2),
    NEXT_PUBLIC_TC_BUILD: (process.env.NEXT_PUBLIC_TC_BUILD ??= "BUILD-IS-NA"),
  },
};
