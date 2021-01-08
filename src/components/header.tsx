import React from "react";
import LogoSvg from "../assets/svg/mswsn-logo.svg";
import styled from "@emotion/styled";
import { Link } from "gatsby";

// Styles
const NavBar = styled.nav`
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
    transition: fill ${(props) => props.theme.animations.hover};
    height: ${(props) => props.theme.type.scale[3]};
`;

const Links = styled.div`
    display: none;
    flex-direction: row;

    @media (min-width: 600px) {
        display: flex;
    }
`;

const TopLink = styled(Link)`
    text-decoration: none;
    text-transform: uppercase;
    font-size: ${(props) => props.theme.type.scale[6]};
    font-weight: bold;
    letter-spacing: 1.8px;
    margin: 0 ${(props) => props.theme.margins.base} 0 0;
    user-select: none;

    @media (min-width: 600px) {
        margin: 0 0 0 ${(props) => props.theme.margins.base};
    }
`;

// Markup
export const Header: React.FC = () => (
    <NavBar>
        <Home to="/" aria-label="Home">
            <Logo />
        </Home>
        <Links>
            <TopLink to="/blog">Blog</TopLink>
            <TopLink to="/projects">Projects</TopLink>
        </Links>
    </NavBar>
);
