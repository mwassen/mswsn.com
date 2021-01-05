module.exports = {
    siteMetadata: {
        title: "mswsn // marcus wassén",
        titleTemplate: "%s · mswsn",
        siteUrl: "https://www.mswsn.com",
        description:
            "Portfolio of Marcus Wassén, front-end developer based in Gothenburg, Sweden.",
        image: "",
        twitterUsername: "@marcuswassen"
    },
    plugins: [
        "gatsby-plugin-emotion",
        // {
        //   resolve: "gatsby-plugin-google-analytics",
        //   options: {
        //     trackingId: "",
        //   },
        // },
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
                gatsbyRemarkPlugins: [
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 1200,
                            withWebp: true,
                            linkImagesToOriginal: false
                            // duotone: {
                            //     highlight: "#0ec4f1",
                            //     shadow: "#192550",
                            //     opacity: 50
                            // }
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
        "gatsby-transformer-sharp",
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
        "gatsby-plugin-catch-links",
        "gatsby-plugin-mdx-embed",
        {
            resolve: "gatsby-transformer-markdown-references",
            options: {
                types: ["Mdx"] // or ['RemarkMarkdown'] (or both)
            }
        }
        // {
        //     resolve: "gatsby-plugin-graphql-codegen",
        //     options: {
        //         fileName: "./src/typescript/gatsby-graphql.ts"
        //     }
        // }
    ]
};
