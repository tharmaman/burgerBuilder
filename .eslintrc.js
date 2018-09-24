module.exports = {
    "extends": "airbnb",
    "env": {
        "browser": true,
        "node": true
    },
    "rules": {
        // remove random jsx error
        "react/jsx-filename-extension": 0,

        // Indent with 4 spaces
        "indent": ["error", 4],

        // Indent JSX with 4 spaces
        "react/jsx-indent": ["error", 4],

        // Indent props with 4 spaces
        "react/jsx-indent-props": ["error", 4],

        // allow console.log for debugger
        "no-console": 0,

        // disable prop types
        "react/prop-types": 0,

        // disable camel case
        "camelcase": 0,

        // disable prefer export default
        "import/prefer-default-export": 0,

        // remove no-shadow
        "no-shadow": 0,
    },
};