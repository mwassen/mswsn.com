import React from "react";
import { Global, css, useTheme } from "@emotion/react";
import "../assets/fonts/index.css";

export const GlobalStyles: React.FC = () => {
    const theme = useTheme();

    return (
        <Global
            styles={css`
                html {
                    height: 100%;
                    background-color: ${theme.colors.accent};
                    box-sizing: border-box;
                }

                body {
                    height: max-content;
                    min-height: 100%;
                    margin: 0;
                    min-width: fit-content;
                    background-color: var(--color-background);
                    transition: none;
                    color: var(--color-text);
                    font-family: "Manrope", Helvetica, Arial, sans-serif;
                    overflow-y: scroll;
                }

                *,
                *:before,
                *:after {
                    box-sizing: inherit;
                }

                #___gatsby,
                #gatsby-focus-wrapper {
                    width: 100%;
                    height: 100%;
                    min-height: 100vh;
                    display: flex;
                }

                /* Light Mode */
                :root {
                    --color-background: ${theme.colors.light.background};
                    --color-text: ${theme.colors.light.text};
                }

                /* Dark Mode */
                :root.dark {
                    --color-background: ${theme.colors.dark.background};
                    --color-text: ${theme.colors.dark.text};
                }

                h1,
                h2,
                h3,
                h4,
                h5 {
                }

                h1 {
                    font-size: ${theme.type.scale[2]};
                }
                h2 {
                    font-size: ${theme.type.scale[3]};
                }
                h3 {
                    font-size: ${theme.type.scale[4]};
                }
                h4 {
                    font-size: ${theme.type.scale[5]};
                }
                h5 {
                    font-size: ${theme.type.scale[6]};
                }

                p {
                    font-size: ${theme.type.scale[5]};
                    line-height: 1.75rem;
                }

                a {
                    color: var(--color-text);
                    text-decoration-thickness: 0.06rem;
                    text-underline-offset: 0.2rem;

                    transition: color ${theme.animations.hover};

                    &:hover {
                        color: ${theme.colors.accent};
                    }
                }

                code {
                    font-family: "Hack", "Courier New", Courier, monospace;
                }

                ::selection {
                    background: ${theme.colors.accent};
                }
            `}
        />
    );
};
