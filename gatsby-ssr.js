import React from "react";

/* 
    Dark-mode implementation from: 
    https://victorzhou.com/blog/dark-mode-gatsby/ 
    https://gist.github.com/kaicataldo/f28b6adf941d1575afa78e647624a327 
*/

export const onRenderBody = ({ setPreBodyComponents }) => {
    setPreBodyComponents([
        <script
            type="text/javascript"
            dangerouslySetInnerHTML={{
                __html: `(function () {
                    function setTheme(theme) {
                        window.__theme = theme;
                        if (theme === "dark") {
                            document.documentElement.className = "dark";
                        } else {
                            document.documentElement.className = "";
                        }
                    }
                    window.__setPreferredTheme = function (theme) {
                        setTheme(theme);
                        try {
                            localStorage.setItem("preferred-theme", theme);
                        } catch (e) {}
                    };
                    let preferredTheme;
                    try {
                        preferredTheme = localStorage.getItem("preferred-theme");
                    } catch (e) {}
                    let darkQuery = window.matchMedia("(prefers-color-scheme: dark)");
                    setTheme(preferredTheme || (darkQuery.matches ? "dark" : "light"));
                })();`
            }}
        />
    ]);
};
