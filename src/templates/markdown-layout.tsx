import React from "react";
import { ThemeProvider } from "@emotion/react";
import styled from "@emotion/styled";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { MDXComponents } from "../components/mdx-components";
import { graphql } from "gatsby";
import { SEO } from "../components/seo";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { GlobalStyles } from "../components/global-styles";

// Interfaces
interface MarkdownLayoutProps {
    data: {
        mdx: {
            body: string;
        };
    };
}

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
    }
};

const Grid = styled.div`
    flex: 1;
    display: grid;
    grid-template-columns: 1fr minmax(auto, 42rem) 1fr;
    grid-template-rows: 4px 8rem auto 8rem;
    gap: 2rem ${(props) => props.theme.margins.base};
`;

const Bar = styled.div`
    grid-column: 1 / 4;
    grid-row: 1;
    position: sticky;
    z-index: 10;
    top: 0;
    background-color: ${(props) => props.theme.colors.accent};
`;

const Content = styled.div`
    grid-column: 2;
`;

// Queries
export const query = graphql`
    query MDXQuery($id: String!) {
        mdx(id: { eq: $id }) {
            body
            inboundReferences {
                ... on Mdx {
                    frontmatter {
                        title
                    }
                    slug
                }
            }
        }
    }
`;

// Markup
const MarkdownLayout: React.FC<MarkdownLayoutProps> = ({ data }) => {
    return (
        <ThemeProvider theme={theme}>
            <MDXProvider components={MDXComponents}>
                <GlobalStyles />
                <SEO />
                <Grid>
                    <Bar />
                    <Header />
                    <Content>
                        <MDXRenderer>{data.mdx.body}</MDXRenderer>
                    </Content>
                    <Footer />
                </Grid>
            </MDXProvider>
        </ThemeProvider>
    );
};

export default MarkdownLayout;
