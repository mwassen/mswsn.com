import React from "react";

const ExternalLink: React.FC<{ href: string }> = ({ href, children }) => {
    if (href.includes("mswsn.com") || href[0] === "/") {
        return <a href={href}>{children}</a>;
    }
    return (
        <a href={href} target="_blank" rel="noopener noreferrer">
            {children}
        </a>
    );
};

export const MDXComponents = {
    a: ExternalLink
};
