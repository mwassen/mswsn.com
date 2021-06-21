// basic .eslintrc.js compatible with react prettier and typescript
module.exports = {
    // Specifies the ESLint parser for TypeScript
    parser: "@typescript-eslint/parser",
    extends: [
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "prettier"
    ],
    settings: {
        react: {
            version: "detect"
        }
    },
    env: {
        browser: true,
        node: true,
        es2021: true
    },
    plugins: ["@typescript-eslint", "react"],
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        // Allows for the parsing of modern ECMAScript features
        ecmaVersion: 2021,
        // Allows for the use of imports
        sourceType: "module"
    },
    rules: {
        // Disable prop-types as we use TypeScript for type checking
        "react/prop-types": "off",
        "@typescript-eslint/explicit-function-return-type": "off",
        // interface start with capital I
        "@typescript-eslint/interface-name-prefix": "off",
        // allow "any" as type
        "@typescript-eslint/no-explicit-any": "off",
        // allow @ts-ignore for testing purposes
        "@typescript-eslint/ban-ts-ignore": "off"
    }
};
