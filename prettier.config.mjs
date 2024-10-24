/** @type {import("prettier").Config} */
const config = {
  semi: false,
  singleQuote: true,
  jsxSingleQuote: true,
  printWidth: 100,
  plugins: ["prettier-plugin-organize-imports", "prettier-plugin-tailwindcss"],
  organizeImportsSkipDestructiveCodeActions: true,
  tailwindEntryPoint: "./packages/ui/src/styles/tailwind.css",
  tailwindFunctions: ["twMerge", "clsx", "cva", "cn", "tw"],
};

export default config;
