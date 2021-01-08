import React from "react";
import { ThemeProvider } from "@emotion/react";
import styled from "@emotion/styled";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { MDXComponents } from "./mdx/";
import { graphql } from "gatsby";
// import { useLocation } from "@reach/router";
import { SEO } from "./seo";
import { Header } from "./header";
import { Footer } from "./footer";
import { Backlinks } from "./backlinks";
import { GlobalStyles } from "./global-styles";
import { Query } from "../../typescript/gatsby-graphql";

// Styles
const theme = {
    colors: {
        accent: "#e36414",
        light: {
            background: "#f2f2f2",
            text: "#333"
        },
        dark: {
            background: "#121212",
            text: "#fafafa"
        }
    },
    margins: {
        base: "1rem"
    },
    animations: {
        hover: "100ms ease-in-out"
    },
    type: {
        scale: [
            "3.052rem",
            "2.441rem",
            "1.953rem",
            "1.563rem",
            "1.25rem",
            "1rem",
            "0.8rem",
            "0.64rem",
            "0.512rem"
        ]
    }
};

const Grid = styled.div`
    flex: 1;
    display: grid;
    grid-template-columns: 1fr minmax(auto, 42rem) 1fr;
    grid-template-rows: 4px 8rem auto 8rem;
    gap: 3rem ${(props) => props.theme.margins.base};
`;

const Bar = styled.div`
    grid-column: 1 / 4;
    grid-row: 1;
    position: sticky;
    z-index: 10;
    top: 0;
    background-color: ${(props) => props.theme.colors.accent};
`;

const Content = styled.main`
    grid-column: 2;
`;

// Queries
export const query = graphql`
    query MDXQuery($id: String!) {
        mdx(id: { eq: $id }) {
            body
            frontmatter {
                title
                description
                image
            }
            inboundReferences {
                ... on Mdx {
                    slug
                    frontmatter {
                        title
                    }
                }
            }
        }
    }
`;

// Markup
const MarkdownLayout: React.FC<{ data: Query }> = ({ data }) => (
    <ThemeProvider theme={theme}>
        <GlobalStyles />
        <SEO
            title={data.mdx?.frontmatter?.title}
            description={data.mdx?.frontmatter?.description}
            image={data.mdx?.frontmatter?.image}
        />
        <Grid>
            <Bar />
            <Header />
            <Content>
                {data.mdx?.body && (
                    <MDXProvider components={MDXComponents}>
                        <MDXRenderer>{data.mdx.body}</MDXRenderer>
                    </MDXProvider>
                )}
                {data.mdx?.inboundReferences &&
                    data.mdx.inboundReferences.length > 0 && (
                        <Backlinks references={data.mdx.inboundReferences} />
                    )}
            </Content>
            <Footer />
        </Grid>
    </ThemeProvider>
);

export default MarkdownLayout;
