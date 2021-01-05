exports.createPages = async ({ actions, graphql, reporter }) => {
    const { createPage } = actions;

    const markdownTemplate = require.resolve(
        `${__dirname}/src/components/markdown-layout.tsx`
    );

    const result = await graphql(`
        {
            allMdx {
                edges {
                    node {
                        id
                        slug
                    }
                }
            }
        }
    `);

    console.log(result);

    if (result.errors) {
        reporter.panicOnBuild("Error while running GraphQL query.");
        return;
    }

    result.data.allMdx.edges.forEach(({ node }) => {
        createPage({
            path: `/${node.slug}`,
            component: markdownTemplate,
            context: {
                // additional data can be passed via context
                id: node.id,
                slug: node.slug
            }
        });
    });
};
