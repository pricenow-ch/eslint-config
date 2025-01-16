import js from '@eslint/js'
import tsParser from '@typescript-eslint/parser'
import tsPlugin from '@typescript-eslint/eslint-plugin'
import reactPlugin from 'eslint-plugin-react'
import reactHooksPlugin from 'eslint-plugin-react-hooks'
import prettierConfig from 'eslint-config-prettier'

export default [
  js.configs.recommended,
  prettierConfig,
  {
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 2015, // equivalent to previous ecmaVersion: 6
        sourceType: 'module',
        ecmaFeatures: {
          modules: true,
        },
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
      react: reactPlugin,
      'react-hooks': reactHooksPlugin,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      // Core rules
      'no-multiple-empty-lines': [
        'error',
        {
          max: 1,
          maxEOF: 1,
          maxBOF: 0,
        },
      ],
      'comma-dangle': [
        'error',
        {
          arrays: 'always-multiline',
          objects: 'always-multiline',
          imports: 'ignore',
          exports: 'ignore',
          functions: 'ignore',
        },
      ],
      'no-duplicate-imports': [
        'error',
        {
          includeExports: true,
        },
      ],
      'no-unused-vars': 'off',
      'no-redeclare': 'off',
      'no-undef': 'off',
      'no-extra-parens': 'off',
      'no-import-assign': 'error',
      'no-useless-escape': 'off',
      'no-unreachable': 'off',
      'no-dupe-class-members': 'off',
      'require-atomic-updates': 'off',
      'no-inner-declarations': 'off',
      'no-self-compare': 'error',

      // TypeScript rules
      '@typescript-eslint/no-redeclare': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
        },
      ],

      // React rules
      'react/prop-types': 'off',
      'react/display-name': 'off',
      'react/no-find-dom-node': 'warn',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'error',
    },
  },
]
