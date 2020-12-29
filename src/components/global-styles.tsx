import React from "react";
import { Global, css, useTheme } from "@emotion/react";
import "../assets/fonts/font-faces.css";

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
                    color: var(--color-text);
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
                    height: 100%;
                    min-height: 100vh;
                    display: flex;
                }

                /* Light Mode */
                :root {
                    --color-background: #f2f2f2;
                    --color-text: #333;
                }

                /* Dark Mode */
                :root.dark {
                    --color-background: #121212;
                    --color-text: #fafafa;
                }

                p {
                    font-size: 1rem;
                    line-height: 1.75rem;
                }

                a {
                    color: var(--color-text);
                    text-decoration-thickness: 0.06rem;
                    text-underline-offset: 0.2rem;

                    &:hover {
                        opacity: 0.85;
                    }
                }
            `}
        />
    );
};
