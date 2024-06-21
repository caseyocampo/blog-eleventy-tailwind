module.exports = function (eleventyConfig) {
  eleventyConfig.setServerOptions({
    watch: ["_site/**/*.css"],
  });

  const { DateTime } = require("luxon");

  eleventyConfig.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_FULL);
  });

  return {
    dir: {
      input: "src",
    },
  };
};
