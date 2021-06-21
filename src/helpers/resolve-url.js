// JS since used by gatsby-plugin-mdx in gatsby-config.js

const slugify = require("slugify");
module.exports = (title) => `/${slugify(title)}`;
