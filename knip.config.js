// This is the configuration file for Knip:
// https://knip.dev/overview/configuration

// @ts-check

/** @type {import("knip").KnipConfig} */
const config = {
  ignore: [
    "eslint.config.mjs", // ESLint is provided by "complete-lint".
    "prettier.config.mjs", // Prettier is provided by "complete-lint".
    // @template-customization-start
    "src/types/IsaacSaveFile.d.ts",
    "src/types/KaitariStream.d.ts",
    "static/lib/IsaacSaveFile.js",
    "static/lib/KaitaiStream.js",
    "static/main.js",
    // @template-customization-end
  ],
  ignoreBinaries: [
    "tsx", // This is provided by "complete-lint".
  ],
  ignoreDependencies: [
    "complete-lint", // This is a linting meta-package.
  ],
};

export default config;
