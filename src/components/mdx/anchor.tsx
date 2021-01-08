import React from "react";
import LaunchSvg from "../../assets/svg/launch.svg";
import styled from "@emotion/styled";

const ExternalA = styled.a`
    &:hover {
        opacity: 1;

        svg {
            fill: ${(props) => props.theme.colors.accent};
            opacity: 1;
        }
    }
`;

const LaunchIcon = styled(LaunchSvg)`
    width: 0.9rem;
    height: 0.9rem;
    display: inline;
    transform: translateY(0.1rem);
    opacity: 0.5;
    transition: opacity ${(props) => props.theme.animations.hover},
        fill ${(props) => props.theme.animations.hover};
    fill: var(--color-text);
`;

const WordAndIcon = styled.span`
    white-space: nowrap;
`;

export const Anchor: React.FC<{ href: string }> = ({ href, children }) => {
    if (!children) return null;

    if (href.includes("mswsn.com/") || href[0] === "/") {
        return <a href={href}>{children}</a>;
    }

    const splitChildren = children.toString().split(" ");
    const firstWords = splitChildren
        .slice(0, splitChildren.length - 1)
        .join(" ");
    const lastWord = splitChildren[splitChildren.length - 1];

    return (
        <ExternalA href={href} target="_blank" rel="noopener noreferrer">
            {firstWords}
            <WordAndIcon>
                {` ${lastWord}`}
                <LaunchIcon />
            </WordAndIcon>
        </ExternalA>
    );
};
