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

  // display just the year
  eleventyConfig.addFilter("justYear", (dateString) => {
    dateObj = new Date(dateString);
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat("yyyy");
  });

  eleventyConfig.addPassthroughCopy({ "src/_public": "/" });
  eleventyConfig.addPassthroughCopy({ "src/assets/js": "/" });
  eleventyConfig.addPassthroughCopy({ "src/posts/img": "/posts/img" });
  eleventyConfig.addPassthroughCopy({
    "src/posts/2022/img": "/posts/2022/img",
  });
  eleventyConfig.addPassthroughCopy({
    "src/posts/2023/img": "/posts/2023/img",
  });

  eleventyConfig.addFilter("markdown", function (value) {
    let markdown = require("markdown-it")({
      html: true,
    });
    return markdown.render(value);
  });

  // opens in a new tab shortcode
  eleventyConfig.addShortcode("newtab", function newtab() {
    return `<span aria-label="- opens in a new tab">&#x2197;</span>`;
  });

  return {
    dir: {
      input: "src",
    },
  };
};
