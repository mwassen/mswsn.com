import React, { useState, useEffect } from "react";
import { ThemeProvider } from "@emotion/react";
import { PageProps } from "gatsby";
import { Header } from "./header";
import { GlobalStyles } from "./global-styles";
import styled from "@emotion/styled";

// Styles
const FlexContainer = styled.div`
    width: 100%;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const SiteContainer = styled.div`
    width: 100%;
    max-width: 42rem;
`;

const themeLight = {
    colors: { background: "#F9F9F9", text: "#222", accent: "#b5179e" }
};
const themeDark = {
    colors: { background: "#121212", text: "#FAFAFA", accent: "#b5179e" }
};

// Markup
const LayoutWrapper: React.FC<PageProps> = ({ children }) => {
    const [isDark, setIsDark] = useState<boolean>(false);

    useEffect(() => {
        setIsDark(window.matchMedia("(prefers-color-scheme: dark)").matches);
    }, [isDark]);

    return (
        <ThemeProvider theme={isDark ? themeDark : themeLight}>
            <GlobalStyles />
            <FlexContainer>
                <SiteContainer>
                    <Header />

                    {children}
                </SiteContainer>
            </FlexContainer>
        </ThemeProvider>
    );
};

export default LayoutWrapper;
