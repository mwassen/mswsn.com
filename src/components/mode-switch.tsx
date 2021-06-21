import React, { useState, useEffect } from "react";
import { animated, useSpring } from "react-spring";
import styled from "@emotion/styled";
import { css, useTheme } from "@emotion/react";
import LightSvg from "../assets/svg/light-mode.svg";
import DarkSvg from "../assets/svg/dark-mode.svg";

// Styles
const SwitchButton = styled.button`
    border: 0;
    padding: 0;
    margin: 0.15rem 0;
    min-width: 32px;
    height: 16px;
    border-radius: 100px;
    position: relative;
    background-color: var(--color-text);
    cursor: pointer;
    &:focus  {
        outline: 0;
    }
`;
const handleCss = css`
    background-color: var(--color-background);
    border-radius: 100px;
    position: absolute;
    top: 2px;
    width: 12px;
    height: 12px;
    z-index: 10;
`;
const Inner = styled.span`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    svg {
        /* fill: var(--color-background); */
        height: 12px;
        width: 12px;
        position: absolute;
        top: 2px;
    }
`;

const backgroundCss = css`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 100px;
`;

// Markup
export const ModeSwitch: React.FC = () => {
    if (typeof window === "undefined") {
        return null;
    }

    const [isDark, setIsDark] = useState<boolean>(
        (window as any).__theme === "dark"
    );
    const theme = useTheme();

    useEffect(() => {
        setTimeout(() => {
            document.body.style.transition = `background-color ${theme.animations.background}, color ${theme.animations.hover}`;
        }, 0);
    }, []);

    // Animations
    const handleAnimation = useSpring({
        left: isDark ? "18px" : "2px",
        config: { mass: 10, tension: 400, friction: 10, clamp: true },
    });
    const uncheckedAnimation = useSpring({
        position: "absolute",
        opacity: isDark ? 1 : 0,
        left: isDark ? "3px" : "10px",
        fill: isDark ? theme.colors.dark.background : theme.colors.light.text,
    });
    const checkedAnimation = useSpring({
        position: "absolute",
        opacity: !isDark ? 1 : 0,
        left: !isDark ? "17px" : "10px",
        fill: isDark ? theme.colors.dark.text : theme.colors.light.background,
    });
    const [backgroundAnimation, setBackgroundAnimation] = useSpring(() => ({
        boxShadow: `0 0 0 0px ${theme.colors.accent}77`,
    }));

    const onChange = () => {
        (window as any).__setPreferredTheme(!isDark ? "dark" : "light");
        setIsDark(!isDark);
    };

    const showBackground = () => {
        setBackgroundAnimation({
            boxShadow: `0 0 0 2px ${theme.colors.accent}77`,
        });
    };
    const hideBackground = () => {
        setBackgroundAnimation({
            boxShadow: `0 0 0 0px ${theme.colors.accent}77`,
        });
    };

    return (
        <SwitchButton
            onClick={onChange}
            onMouseDown={showBackground}
            onMouseUp={() => {
                setTimeout(() => {
                    hideBackground();
                }, 250);
            }}
            onFocus={showBackground}
            onBlur={hideBackground}
            aria-label={isDark ? "Light mode" : "Dark mode"}
        >
            <animated.div css={handleCss} style={handleAnimation} />
            <Inner>
                <animated.div style={checkedAnimation}>
                    <LightSvg />
                </animated.div>
                <animated.div style={uncheckedAnimation}>
                    <DarkSvg />
                </animated.div>
            </Inner>
            <animated.div css={backgroundCss} style={backgroundAnimation} />
        </SwitchButton>
    );
};
