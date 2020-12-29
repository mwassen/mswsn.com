import React from "react";
import LogoSvg from "../assets/svg/logo.svg";
import styled from "@emotion/styled";
import { Link } from "gatsby";

// Styles
const NavBar = styled.div`
    width: 100%;
    margin: 6rem 0 4rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-bottom: 0.5rem;

    @media (min-width: 600px) {
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-end;
        border-bottom: 2px solid ${(props) => props.theme.colors.text};
    }
`;

const Logo = styled(LogoSvg)`
    fill: ${(props) => props.theme.colors.text};
    width: 160px;
`;

const TopLink = styled(Link)`
    text-decoration: none;
    text-transform: lowercase;
    font-weight: bold;
    letter-spacing: 1.6px;
    margin: 0 2rem 0 0;
    color: ${(props) => props.theme.colors.accent};

    @media (min-width: 600px) {
        margin: 0 0 0 2rem;
    }

    &:visited {
        color: ${(props) => props.theme.colors.accent};
    }
`;

// Markup
export const Header: React.FC = () => {
    return (
        <NavBar>
            <Link to="/">
                <Logo />
            </Link>
            <div>
                <TopLink to="/blog">Blog</TopLink>
                <TopLink to="/projects">Projects</TopLink>
            </div>
        </NavBar>
    );
};
