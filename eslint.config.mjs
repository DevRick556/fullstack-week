import { dirname } from "path";
import { fileURLToPath } from "url";
import simpleImport from "eslint-config-simple-import-sort";
import { FlatCompat } from "@eslint/eslintrc";


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    "plugins":{
      "simple-import-sort": simpleImport,
    },
    "rules": {
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
    }
  }
];

export default eslintConfig;
