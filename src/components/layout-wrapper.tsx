import React from "react";
import { ThemeProvider } from "@emotion/react";
import { PageProps } from "gatsby";
import { Header } from "./header";
import { Footer } from "./footer";
import { GlobalStyles } from "./global-styles";
import styled from "@emotion/styled";

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

// Markup
const LayoutWrapper: React.FC<PageProps> = ({ children }) => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Grid>
                <Bar />
                <Header />

                <Content>{children}</Content>
                <Footer />
            </Grid>
        </ThemeProvider>
    );
};

export default LayoutWrapper;
