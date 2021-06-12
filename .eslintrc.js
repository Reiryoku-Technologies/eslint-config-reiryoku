module.exports = {
    rules: {
        "getter-return": "error",
        "no-async-promise-executor": "error",
        "no-cond-assign": "error",
        "no-dupe-args": "error",
        "no-dupe-else-if": "error",
        "no-dupe-keys": "error",
        "no-duplicate-case": "error",
        "no-ex-assign": "error",
        "no-extra-boolean-cast": "error",
        "no-extra-parens": "error",
        "no-extra-semi": "error",
        "no-func-assign": "error",
        "no-import-assign": "error",
        "no-irregular-whitespace": "error",
        "no-loss-of-precision": "error",
        "no-obj-calls": "error",
        "no-setter-return": "error",
        "no-unexpected-multiline": "error",
        "no-unsafe-finally": "error",
        "use-isnan": "error",
        "valid-typeof": "error",
        "complexity": [ "error", 20, ],
        "curly": [ "error", "all", ],
        "default-case-last": "error",
        "default-param-last": "error",
        "eqeqeq": "error",
        "no-caller": "error",
        "no-case-declarations": "error",
        "no-constructor-return": "error",
        "no-else-return": "error",
        "no-global-assign": "error",
        "no-implicit-coercion": "error",
        "no-invalid-this": "error",
        "no-multi-spaces": "error",
        "no-param-reassign": "error",
        "no-return-assign": "error",
        "no-return-await": "error",
        "no-self-assign": "error",
        "no-self-compare": "error",
        "no-with": "error",
        "prefer-named-capture-group": "error",
        "prefer-promise-reject-errors": "error",
        "radix": "error",
        "wrap-iife": "error",
        "yoda": "error",
        "no-delete-var": "error",
        "no-shadow-restricted-names": "error",
        "array-bracket-newline": [ "error", { "minItems": 3, }, ],
        "array-bracket-spacing": [ "error", "always", ],
        "array-element-newline": [ "error", { "minItems": 3, }, ],
        "brace-style": [ "error", "stroustrup", ],
        "camelcase": "error",
        "comma-dangle": [ "error", {
            "arrays": "always",
            "objects": "always",
            "imports": "always-multiline",
            "exports": "always-multiline",
            "functions": "never",
        }, ],
        "comma-spacing": "error",
        "eol-last": "error",
        "func-call-spacing": [ "error", "never", ],
        "function-paren-newline": [ "error", { "minItems": 5, }, ],
        "id-length": [ "error", { "min": 1, "max": 30, }, ],
        "implicit-arrow-linebreak": [ "error", "beside", ],
        "indent": [
            "error",
            4,
            { "SwitchCase": 1, },
        ],
        "key-spacing": [ "error", { "beforeColon": false, "afterColon": true, }, ],
        "linebreak-style": [ "error", "unix", ],
        "max-len": [ "error", { "code": 150, }, ],
        "max-lines-per-function": [ "error", 60, ],
        "max-params": [ "error", 6, ],
        "new-parens": [ "error", "always", ],
        "no-tabs": "error",
        "no-trailing-spaces": "error",
        "no-whitespace-before-property": "error",
        "object-curly-newline": [ "error", {
            "multiline": true,
            "minProperties": 3,
            "consistent": true,
        }, ],
        "prefer-object-spread": "error",
        "quotes": [ "error", "double", ],
        "semi": [ "error", "always", ],
        "semi-spacing": "error",
        "semi-style": [ "error", "last", ],
        "space-before-blocks": "error",
        "space-before-function-paren": "error",
        "space-in-parens": [ "error", "never", ],
        "spaced-comment": [ "error", "always", ],
        "switch-colon-spacing": [ "error", { "before": false, "after": true, }, ],
        "arrow-body-style": [ "error", "as-needed", ],
        "arrow-parens": [ "error", "always", ],
        "arrow-spacing": [ "error", { "before": true, "after": true, }, ],
        "constructor-super": "error",
        "no-duplicate-imports": "error",
        "no-this-before-super": "error",
        "no-useless-computed-key": "error",
        "no-var": "error",
        "prefer-const": "error",
        "prefer-rest-params": "error",
        "prefer-template": "error",
        "rest-spread-spacing": [ "error", "never", ],
        "@typescript-eslint/adjacent-overload-signatures": "error",
        "@typescript-eslint/explicit-module-boundary-types": "error",
        "@typescript-eslint/member-delimiter-style": "error",
        "@typescript-eslint/explicit-function-return-type": "error",
        // "@typescript-eslint/explicit-member-accessibility": "error", // Has conflict with native private fields.
        "@typescript-eslint/no-this-alias": "error",
        "@typescript-eslint/prefer-for-of": "error",
        "@typescript-eslint/prefer-namespace-keyword": "error",
        "@typescript-eslint/prefer-nullish-coalescing": "error",
        "@typescript-eslint/prefer-optional-chain": "error",
        "@typescript-eslint/prefer-readonly": "error",
        "@typescript-eslint/require-array-sort-compare": "error",
        "@typescript-eslint/restrict-plus-operands": "error",
        "@typescript-eslint/no-extra-parens": "error",
        "@typescript-eslint/no-extra-semi": "error",
        "@typescript-eslint/no-invalid-this": "error",
        "@typescript-eslint/semi": "error",
        "@typescript-eslint/space-before-function-paren": "error",
    },
};
