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
        `gatsby-remark-images`,
        {
            resolve: "gatsby-plugin-mdx",
            options: {
                defaultLayouts: {
                    default: require.resolve(
                        "./src/components/layout-wrapper.tsx"
                    )
                },
                gatsbyRemarkPlugins: [
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 1200,
                            withWebp: true,
                            linkImagesToOriginal: false
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
                path: "./src/assets/images/"
            },
            __key: "images"
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "pages",
                path: "./src/pages/"
            },
            __key: "pages"
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
        "gatsby-plugin-mdx-embed"
    ]
};
