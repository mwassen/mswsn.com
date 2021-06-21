import React from "react";
import styled from "@emotion/styled";

interface InlineHeaderProps {
    bold?: boolean;
    size?: string;
}

// Styles
const InlineHeader = styled.h1<InlineHeaderProps>`
    display: inline;
    font-size: ${(props) => props.size ?? props.theme.type.scale[5]};
    font-weight: ${(props) => (props.bold ? "bold" : "normal")};
`;

// Markdown
export const InlineH1: React.FC<InlineHeaderProps> = ({
    children,
    bold,
    size,
}) => (
    <InlineHeader bold={bold} size={size}>
        {children}
    </InlineHeader>
);
