import React from "react";
import LogoSvg from "../assets/svg/mswsn-logo.svg";
import styled from "@emotion/styled";
import { Link } from "gatsby";

// Styles
const NavBar = styled.div`
    grid-column: 2;
    grid-row: 2;
    width: 100%;
    height: 100%;
    /* margin: 3rem 0 1rem; */
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;

    @media (min-width: 600px) {
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-end;
        /* border-bottom: 2px solid var(--color-text); */
    }
`;

const Home = styled(Link)`
    grid-column: 1;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: flex-end;
`;

const Logo = styled(LogoSvg)`
    fill: var(--color-text);
    width: 160px;
`;

const Links = styled.div``;

const TopLink = styled(Link)`
    text-decoration: none;
    text-transform: lowercase;
    font-weight: bold;
    letter-spacing: 1.6px;
    margin: 0 ${(props) => props.theme.margins.base} 0 0;
    color: ${(props) => props.theme.colors.accent};

    @media (min-width: 600px) {
        margin: 0 0 0 ${(props) => props.theme.margins.base};
    }

    &:visited {
        color: ${(props) => props.theme.colors.accent};
    }
`;

// Markup
export const Header: React.FC = () => {
    return (
        <NavBar>
            <Home to="/">
                <Logo />
            </Home>
            <Links>
                <TopLink to="/blog">Blog</TopLink>
                <TopLink to="/projects">Projects</TopLink>
            </Links>
        </NavBar>
    );
};
