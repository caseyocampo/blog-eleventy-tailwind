module.exports = function (eleventyConfig) {
  eleventyConfig.setServerOptions({
    watch: ["_site/**/*.css"],
  });

  const htmlmin = require("html-minifier");

  eleventyConfig.addPassthroughCopy({ "src/_public": "/" });
  eleventyConfig.addPassthroughCopy({ "src/assets/js": "/" });
  eleventyConfig.addPassthroughCopy({ "src/posts/img": "/posts/img" });
  eleventyConfig.addPassthroughCopy({
    "src/posts/2022/img": "/posts/2022/img",
  });
  eleventyConfig.addPassthroughCopy({
    "src/posts/2023/img": "/posts/2023/img",
  });
  eleventyConfig.addPassthroughCopy({
    "src/posts/2024/img": "/posts/2024/img",
  });
  eleventyConfig.addPassthroughCopy({ "src/assets/fonts": "/assets/fonts" });

  // minify HTML output
  eleventyConfig.addTransform("htmlmin", function (content) {
    if ((this.page.outputPath || "").endsWith(".html")) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
      });

      return minified;
    }

    // If not an HTML output, return content as-is
    return content;
  });

  // post or page limit filter
  eleventyConfig.addFilter("limit", function (array, limit) {
    return array.slice(0, limit);
  });

  // fix day behind date pitfall
  const { DateTime } = require("luxon");

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

  // add custom markdown filter
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
