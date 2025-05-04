import tseslint from "@electron-toolkit/eslint-config-ts";
import eslintConfigPrettier from "@electron-toolkit/eslint-config-prettier";
import eslintPluginReact from "eslint-plugin-react";
import eslintPluginReactHooks from "eslint-plugin-react-hooks";
import eslintPluginReactRefresh from "eslint-plugin-react-refresh";

export default tseslint.config(
  { ignores: ["**/node_modules", "**/dist", "**/out"] },
  tseslint.configs.recommended,
  eslintPluginReact.configs.flat.recommended,
  eslintPluginReact.configs.flat["jsx-runtime"],
  {
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  {
    files: ["**/*.{ts,tsx}"],
    plugins: {
      "react-hooks": eslintPluginReactHooks,
      "react-refresh": eslintPluginReactRefresh,
    },
    rules: {
      ...eslintPluginReactHooks.configs.recommended.rules,
      ...eslintPluginReactRefresh.configs.vite.rules,

      indent: "off",
      quotes: "off",
      "jsx-quotes": "off",
      "no-async-promise-executor": "off",
      "prefer-template": "off",
      "prefer-promise-reject-errors": "off",
      "arrow-body-style": "off",
      "no-shadow": "off",
      "prefer-destructuring": "off",
      "comma-dangle": "off",
      "no-unused-expressions": "off",
      "object-curly-newline": "off",
      "default-case": "off",
      "spaced-comment": "off",
      "no-nested-ternary": "warn",
      "linebreak-style": "off",
      "global-require": "off",
      "consistent-return": "off",
      "no-tabs": ["error", { allowIndentationTabs: true }],
      "operator-linebreak": "off",
      "no-console": "off",
      "jsx-a11y/control-has-associated-label": "off",
      "import/order": "off",
      "import/no-cycle": "off",
      "import/prefer-default-export": "off",
      "import/no-extraneous-dependencies": "off",
      "no-lonely-if": "off",
      "no-param-reassign": "off",
      "jsx-a11y/label-has-associated-control": [
        2,
        {
          labelComponents: ["CustomInputLabel"],
          labelAttributes: ["label"],
          controlComponents: ["CustomInput"],
          depth: 3,
        },
      ],

      // React Rules
      "react/jsx-curly-brace-presence": "off",
      "react/require-default-props": "off",
      "react/button-has-type": "off",
      "react/prop-types": "off",
      "react/jsx-props-no-spreading": "off",
      "react/jsx-no-useless-fragment": "off",
      "react/jsx-indent": "off",
      "react/jsx-fragments": "off",
      "react/jsx-one-expression-per-line": "off",
      "react/no-array-index-key": "off",
      "react/self-closing-comp": "off",
      "react/react-in-jsx-scope": "off",
      "react/function-component-definition": ["off", { namedComponents: "arrow-function" }],
      "react/no-unstable-nested-components": ["error", { allowAsProps: true }],

      // Typescript Rules
      "@typescript-eslint/quotes": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/dot-notation": "off",
      "@typescript-eslint/return-await": "off",
      "@typescript-eslint/indent": "off",
      "@typescript-eslint/no-unused-expressions": "off",
      "@typescript-eslint/comma-dangle": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/no-shadow": "off",
      "@typescript-eslint/naming-convention": "off",
    },
  },
  eslintConfigPrettier
);
