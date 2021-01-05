import React from "react";
import LaunchSvg from "../assets/svg/launch.svg";
import styled from "@emotion/styled";

const ExternalA = styled.a`
    white-space: nowrap;

    &:hover {
        opacity: 1;

        svg {
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
    transition: opacity 200ms ease-in-out;
    fill: var(--color-text);
`;

const ExternalLink: React.FC<{ href: string }> = ({ href, children }) => {
    if (href.includes("mswsn.com/") || href[0] === "/") {
        return <a href={href}>{children}</a>;
    }
    return (
        <ExternalA href={href} target="_blank" rel="noopener noreferrer">
            {children}
            <LaunchIcon />
        </ExternalA>
    );
};

export const MDXComponents = {
    a: ExternalLink
};
