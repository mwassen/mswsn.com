exports.createPages = async ({ actions, graphql, reporter }) => {
    const { createPage } = actions;

    const markdownTemplate = require.resolve(
        `${__dirname}/src/templates/markdown-layout.tsx`
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

    if (result.errors) {
        reporter.panicOnBuild("Error while running GraphQL query.");
        return;
    }

    result.data.allMdx.edges.forEach(({ node }) => {
        createPage({
            path: `/${node.slug}`,
            component: markdownTemplate,
            context: {
                id: node.id,
                slug: node.slug
            }
        });
    });
};
