import React from "react";
import styled from "@emotion/styled";
import { Mdx } from "../../typescript/gatsby-graphql";
import { Link } from "gatsby";

const Container = styled.div`
    font-size: 14px;
    text-align: right;
    margin: 0;

    h4 {
        margin-bottom: 0.5rem;
    }
`;

export const Backlinks: React.FC<{ references: Mdx[] }> = ({ references }) => {
    return (
        <Container>
            <h4>Referenced in:</h4>
            {references.map((link, ind) => (
                <>
                    <Link to={`/${link.slug}`} key={`backlink-${ind}`}>
                        {link.frontmatter?.title}
                    </Link>
                    {ind + 1 < references.length ? "," : "."}
                </>
            ))}
        </Container>
    );
};
