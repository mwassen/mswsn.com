import React from "react";
import styled from "@emotion/styled";
import { Link } from "gatsby";
import { ModeSwitch } from "./mode-switch";

// Styles
const FooterContainer = styled.footer`
    grid-column: 2;
    grid-row: 4;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: ${(props) => props.theme.type.scale[6]};
`;

const SiteLinks = styled.div`
    width: 38.2%;
    display: flex;
    flex-direction: column;

    & > a {
        margin-bottom: 0.25rem;
        width: max-content;
    }

    @media (min-width: 600px) {
        flex-direction: row;
    }
`;

const LinkGroup = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;

    & > a {
        margin-bottom: 0.25rem;
        width: max-content;
        white-space: nowrap;
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

// Markup
export const Footer: React.FC = () => {
    const date = new Date();

    return (
        <FooterContainer>
            <SiteLinks>
                <LinkGroup>
                    <Link to="/">Home</Link>
                    <Link to="/projects">Projects</Link>
                </LinkGroup>
                <LinkGroup>
                    <Link to="/about-me">About me</Link>
                    <Link to="/site-info">Site info</Link>
                </LinkGroup>
            </SiteLinks>
            <Contacts>
                <Disclaimer>
                    <span>
                        {`${String.fromCharCode(
                            169
                        )} ${date.getFullYear()} Marcus Wassén.`}
                    </span>{" "}
                    <span>
                        {"License: "}
                        <a
                            href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            CC BY-NC-SA 4.0
                        </a>
                        {"."}
                    </span>
                </Disclaimer>
                <ModeSwitch />
            </Contacts>
        </FooterContainer>
    );
};
