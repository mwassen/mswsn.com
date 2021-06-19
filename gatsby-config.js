module.exports = {
    siteMetadata: {
        title: "marcus wassén",
        titleTemplate: "%s // mswsn",
        siteUrl: "https://www.mswsn.com",
        description:
            "Portfolio of Marcus Wassén, front-end developer based in Gothenburg, Sweden.",
        image: "",
        twitterUsername: "@marcuswassen"
    },
    plugins: [
        "gatsby-plugin-emotion",
        "gatsby-plugin-sharp",

        "gatsby-plugin-react-helmet",
        {
            resolve: "gatsby-plugin-manifest",
            options: {
                icon: "src/assets/images/icon.png"
            }
        },
        {
            resolve: "gatsby-plugin-mdx",
            options: {
                extensions: [".mdx", ".md"],
                gatsbyRemarkPlugins: [
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 1200,
                            withWebp: true,
                            linkImagesToOriginal: false
                        }
                    },
                    {
                        resolve: "gatsby-remark-double-brackets-link",
                        options: {
                            titleToURLPath: `${__dirname}/src/helpers/resolve-url.js`,
                            stripBrackets: true
                        }
                    }
                ]
            }
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "images",
                path: `${__dirname}/src/assets/images/`
            },
            __key: "images"
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "content",
                path: `${__dirname}/src/content/`
            },
            __key: "content"
        },
        {
            resolve: "gatsby-plugin-react-svg",
            options: {
                rule: {
                    include: /svg/
                }
            }
        },
        {
            resolve: "gatsby-plugin-eslint",
            options: {
                test: /\.js$|\.jsx$|\.ts$|\.tsx$/,
                exclude: /(node_modules|.cache|public)/,
                stages: ["develop"],
                options: {
                    emitWarning: true,
                    failOnError: false
                }
            }
        },
        "gatsby-plugin-preload-fonts",
        "gatsby-plugin-catch-links",
        // "gatsby-plugin-mdx-embed",
        // {
        //     resolve: "gatsby-plugin-graphql-codegen",
        //     options: {
        //         fileName: "./typescript/gatsby-graphql.d.ts"
        //     }
        // },

        // Transformers
        "gatsby-transformer-sharp",
        "gatsby-transformer-markdown-references"
    ]
};
