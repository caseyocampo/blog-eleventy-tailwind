module.exports = function (eleventyConfig) {
  eleventyConfig.setServerOptions({
    watch: ["_site/**/*.css"],
  });

  // post or page limit filter
  eleventyConfig.addFilter("limit", function (array, limit) {
    return array.slice(0, limit);
  });

  const { DateTime } = require("luxon");

  // fix day behind date pitfall
  eleventyConfig.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toLocaleString(
      DateTime.DATE_FULL
    );
  });

  eleventyConfig.addPassthroughCopy({ "src/_public": "/" });
  eleventyConfig.addPassthroughCopy({ "src/assets/js": "/" });
  eleventyConfig.addPassthroughCopy({ "src/posts/img": "/posts/img" });

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
