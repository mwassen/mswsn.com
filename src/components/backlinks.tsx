import React from "react";
import styled from "@emotion/styled";
import { Mdx } from "../../typescript/gatsby-graphql";
import { Link } from "gatsby";

const Container = styled.div`
    width: 50%;
    padding-top: 1rem;

    &::before {
        content: "";
        border: solid;
        border-width: 1.15px 0 0 0;
        border-color: var(--color-text);
        transition: border-color ${(props) => props.theme.animations.hover};
        height: 0.25rem;
        width: 50px;
        display: block;
    }

    * {
        font-size: ${(props) => props.theme.type.scale[6]};
        margin: 0;
        display: inline;
    }
`;

export const Backlinks: React.FC<{ references: Mdx[] }> = ({ references }) => (
    <Container>
        <p>Referenced in: </p>
        {references.map((link, ind) => (
            <div key={`backlink-${ind}`}>
                <Link to={`/${link.slug}`}>{link.frontmatter?.title}</Link>
                {ind + 1 < references.length ? "," : "."}
            </div>
        ))}
    </Container>
);
