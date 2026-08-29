import { defineConfig, globalIgnores } from 'eslint/config'
import nextPlugin from '@next/eslint-plugin-next'
import reactPlugin from 'eslint-plugin-react'
import reactHooksPlugin from 'eslint-plugin-react-hooks'
import babelParser from '@babel/eslint-parser'

// Note: eslint-config-next is intentionally not used here — it unconditionally
// loads typescript-eslint, which cannot run at all against TypeScript 7 (this
// project is pinned to ^7.0.2): TS 7 dropped the classic compiler API that
// typescript-eslint depends on. Babel's TypeScript preset only strips type
// syntax (no type-checking), so it works regardless of the installed
// TypeScript version. `npm run typecheck` still enforces real type safety via
// `tsc --noEmit`. Switch back to eslint-config-next once typescript-eslint
// supports TS 7: https://github.com/typescript-eslint/typescript-eslint/issues/10940
const eslintConfig = defineConfig([
  {
    files: ['**/*.{js,jsx,mjs,ts,tsx,mts,cts}'],
    plugins: {
      react: reactPlugin,
      'react-hooks': reactHooksPlugin,
      '@next/next': nextPlugin,
    },
    languageOptions: {
      parser: babelParser,
      parserOptions: {
        requireConfigFile: false,
        sourceType: 'module',
        babelOptions: { presets: ['next/babel'] },
      },
    },
    settings: { react: { version: 'detect' } },
    rules: {
      ...reactPlugin.configs.recommended.rules,
      ...reactHooksPlugin.configs.recommended.rules,
      ...nextPlugin.configs['core-web-vitals'].rules,
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
    },
  },
  globalIgnores(['.next/**', 'out/**', 'build/**', 'next-env.d.ts']),
])

export default eslintConfig
