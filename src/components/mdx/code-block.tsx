import React from "react";
import Highlight, { defaultProps, Language } from "prism-react-renderer";
import styled from "@emotion/styled";
import { materialDarkTheme } from "../../helpers/material-dark-theme";

const Pre = styled.pre`
    max-width: calc(100vw - 2rem);
    font-family: "Hack", "Courier New", Courier, monospace;
    font-size: 0.8em;
    border-radius: 0.25rem;
    text-align: left;
    margin: 1rem 0;
    padding: 1rem;
    overflow: scroll;
`;

const Line = styled.div`
    display: table-row;
`;

const LineNo = styled.span`
    display: table-cell;
    text-align: right;
    padding-right: 1rem;
    user-select: none;
    opacity: 0.15;
`;

const LineContent = styled.span`
    display: table-cell;
`;

export const CodeBlock: React.FC<{ className?: string; children: string }> = ({
    className = "language-javascript",
    children
}) => {
    const language = className.replace(/language-/, "") as Language;
    const activateLines = 24;
    return (
        <Highlight
            {...defaultProps}
            code={children}
            language={language}
            theme={materialDarkTheme}
        >
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
                <Pre className={className} style={style}>
                    {tokens.map((line, i) => (
                        <Line key={i} {...getLineProps({ line, key: i })}>
                            {tokens.length >= activateLines && (
                                <LineNo>{i + 1}</LineNo>
                            )}
                            <LineContent>
                                {line.map((token, key) => (
                                    <span
                                        key={key}
                                        {...getTokenProps({ token, key })}
                                    />
                                ))}
                            </LineContent>
                        </Line>
                    ))}
                </Pre>
            )}
        </Highlight>
    );
};
