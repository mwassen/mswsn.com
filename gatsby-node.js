exports.createPages = async ({ actions, graphql, reporter }) => {
    const { createPage } = actions;

    const markdownTemplate = require.resolve(
        `${__dirname}/src/components/layout.tsx`
    );

    const result = await graphql(`
        {
            allFile {
                edges {
                    node {
                        childMdx {
                            id
                            slug
                        }
                    }
                }
            }
        }
    `);

    if (result.errors) {
        reporter.panicOnBuild("Error while running GraphQL query.");
        return;
    }

    result.data.allFile.edges.forEach(({ node }) => {
        if (node.childMdx) {
            createPage({
                path: `/${node.childMdx.slug}`,
                component: markdownTemplate,
                context: {
                    id: node.childMdx.id,
                    slug: node.childMdx.slug,
                },
            });
        }
    });
};
