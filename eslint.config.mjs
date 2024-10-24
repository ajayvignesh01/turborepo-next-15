import { FlatCompat } from "@eslint/eslintrc";
import eslintConfigPrettier from "eslint-config-prettier";
import reactCompiler from "eslint-plugin-react-compiler";

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
});

/** @type {import('eslint').Linter.Config[]} */
const config = [
  // defaults
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  // typescript-eslint
  {
    files: ["**/*.ts?(x)"],
    languageOptions: {
      parserOptions: {
        // project: ['./apps/*/tsconfig.json', './packages/*/tsconfig.json'],
        projectService: true, // achieves same thing as above
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },

  // next & import-resolver-typescript
  {
    settings: {
      next: {
        rootDir: ["./apps/*"],
      },
      "import/resolver": {
        typescript: {
          project: ["./apps/*/tsconfig.json", "./packages/*/tsconfig.json"],
        },
      },
    },

    rules: {
      "@next/next/no-html-link-for-pages": ["error", ["."]],
    },
  },

  // react-compiler
  {
    plugins: {
      "react-compiler": reactCompiler,
    },
    rules: {
      "react-compiler/react-compiler": "error",
    },
  },

  // prettier
  eslintConfigPrettier,

  // global ignores
  {
    ignores: [
      "**/node_modules/",
      "**/.git/",
      "**/.next/",
      "**/dist/",
      "**/.turbo",
    ],
  },
];

export default config;
