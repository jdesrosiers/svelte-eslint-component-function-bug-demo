import svelte from 'eslint-plugin-svelte';
import ts from 'typescript-eslint';
import svelteConfig from './svelte.config.js';

export default ts.config(
  { ignores: [".svelte-kit", "eslint.config.js", "svelte.config.js"] },
  ...ts.configs.recommendedTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        projectService: true
      }
    }
  },
  ...svelte.configs.recommended,
  {
    files: ["**/*.svelte", "**/*.svelte.ts", "**/*.svelte.js"],
    languageOptions: {
      parserOptions: {
        extraFileExtensions: ['.svelte'],
        parser: ts.parser,
        svelteConfig
      }
    }
  },
);
