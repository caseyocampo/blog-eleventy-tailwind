module.exports = function (eleventyConfig) {
  eleventyConfig.setServerOptions({
    watch: ["_site/**/*.css"],
  });

  // post or page limit filter
  eleventyConfig.addFilter("limit", function (array, limit) {
    return array.slice(0, limit);
  });

  const { DateTime } = require("luxon");

  eleventyConfig.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_FULL);
  });

  eleventyConfig.addPassthroughCopy({ "src/_public": "/" });

  return {
    dir: {
      input: "src",
    },
  };
};
