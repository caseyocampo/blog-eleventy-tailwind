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
  eleventyConfig.addPassthroughCopy({ "src/assets/js": "/" });
  eleventyConfig.addPassthroughCopy({ "src/posts/img": "/media/img" });

  eleventyConfig.addFilter("markdown", function (value) {
    let markdown = require("markdown-it")({
      html: true,
    });
    return markdown.render(value);
  });

  return {
    dir: {
      input: "src",
    },
  };
};
