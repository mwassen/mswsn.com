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
    width: 35%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;

    & > a {
        margin-bottom: 0.25rem;
        width: max-content;
    }

    @media (min-width: 600px) {
        & > a:nth-of-type(2n) {
            margin-bottom: 35%;
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
