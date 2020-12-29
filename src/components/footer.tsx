import React from "react";
import styled from "@emotion/styled";
import { Link } from "gatsby";
import GithubLogo from "../assets/svg/github-logo.svg";
import TwitterLogo from "../assets/svg/twitter-logo.svg";

// Styles
const FooterContainer = styled.div`
    grid-column: 2;
    grid-row: 4;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 14px;
    margin: 1rem 0;
`;

const SiteLinks = styled.div`
    width: 35%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;

    & > a {
        margin-bottom: 0.25rem;
    }

    @media (min-width: 600px) {
        & > a:nth-of-type(2n) {
            flex-basis: 50%;
        }
    }
`;

const Contacts = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`;

const Disclaimer = styled.div`
    text-align: right;

    & > span {
        display: inline-block;
        margin-bottom: 0.25rem;
        white-space: nowrap;
    }
`;

const SocialLinks = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    & > * > * {
        fill: var(--color-text);
        width: 1.2rem;
        margin: 0.5rem;
    }
`;

// Markup
export const Footer: React.FC = () => {
    const date = new Date();

    return (
        <FooterContainer>
            <SiteLinks>
                <Link to="/">Home</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/about-me">About me</Link>
                <Link to="/site-info">Site info</Link>
            </SiteLinks>
            <Contacts>
                <Disclaimer>
                    <span>
                        {`${String.fromCharCode(
                            169
                        )} ${date.getFullYear()} Marcus Wassén. `}
                    </span>{" "}
                    <span>
                        {`License: `}
                        <a
                            href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            CC BY-NC-SA 4.0.
                        </a>
                    </span>
                </Disclaimer>
                <SocialLinks>
                    <a
                        href="https://github.com/mwassen"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <GithubLogo />
                    </a>
                    <a
                        href="https://twitter.com/marcuswassen"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <TwitterLogo />
                    </a>
                </SocialLinks>
            </Contacts>
        </FooterContainer>
    );
};
