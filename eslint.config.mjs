// This is the configuration file for ESLint, the TypeScript linter:
// https://eslint.org/docs/latest/use/configure/

// @ts-check

import { completeConfigBase } from "eslint-config-complete";
import { defineConfig } from "eslint/config";

export default defineConfig(
  // https://github.com/complete-ts/complete/blob/main/packages/eslint-config-complete/src/base.js
  ...completeConfigBase,

  {
    rules: {
      // Insert changed or disabled rules here, if necessary.
      // @template-customization-start
      "no-param-reassign": "off",
      "complete/no-number-enums": "off",
      // @template-customization-end
    },
  },

  // @template-customization-start
  // Don't bother linting compiled output.
  {
    ignores: [
      "static/main.js",
      "static/lib/KaitaiStream.js",
      "static/lib/IsaacSaveFile.js",
    ],
  },
  // @template-customization-end
);
