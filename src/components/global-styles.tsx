import React from "react";
import { useTheme, Global, css, Theme } from "@emotion/react";

// Styles
const globalCSS = (theme: Theme) => css`
    @font-face {
        font-family: "Manrope";
        font-weight: "normal";
        src: local("Manrope"),
            url("../assets/fonts/Manrope-Regular.woff2") format("woff2"),
            url("../assets/fonts/Manrope-Regular.woff") format("woff");
    }
    @font-face {
        font-family: "Manrope";
        font-weight: "bold";
        src: local("Manrope"),
            url("../assets/fonts/Manrope-SemiBold.woff2") format("woff2"),
            url("../assets/fonts/Manrope-SemiBold.woff") format("woff");
    }

    html {
        background-color: #eee;
        box-sizing: border-box;
    }

    body {
        margin: 0;
        height: 100vh;
        background-color: ${theme.colors.background};
        color: ${theme.colors.text};
        font-family: "Manrope", Helvetica, Arial, sans-serif;
    }

    *,
    *:before,
    *:after {
        box-sizing: inherit;
    }

    #___gatsby,
    #gatsby-focus-wrapper {
        width: 100%;
    }
`;

// Markup
export const GlobalStyles: React.FC = () => {
    const theme = useTheme();
    return <Global styles={globalCSS(theme)} />;
};
