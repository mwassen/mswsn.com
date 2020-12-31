import "@emotion/react";

declare module "@emotion/react" {
    export interface Theme {
        colors: {
            accent: string;
            light: {
                background: string;
                text: string;
            };
            dark: {
                background: string;
                text: string;
            };
        };
        margins: {
            base: string;
        };
    }
}
