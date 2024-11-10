import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';


/** @type {import('eslint').Linter.Config[]} */
export default [
  {files: ['**/*.{js,mjs,cjs,ts}']},
  {languageOptions: { globals: {...globals.browser, ...globals.node} }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    rules: {
      'no-console': 'warn',
      //* Avoid Bugs
      'no-undef': 'error',
      'semi': 'error',
      'semi-spacing': 'error',
      //* Best Practices
      'eqeqeq': 'warn',
      'no-invalid-this': 'error',
      'no-return-assign': 'error',
      'no-unused-expressions': ['error', { 'allowTernary': true }],
      'no-useless-concat': 'error',
      'no-useless-return': 'error',
      'no-constant-condition': 'warn',
      'no-unused-vars': ['warn', { 'argsIgnorePattern': 'req|res|next|__' }],
      //* Enhance Readability
      'indent': ['warn', 2, { 'SwitchCase': 1 }],
      'no-mixed-spaces-and-tabs': 'warn',
      'space-before-blocks': 'warn',
      'space-in-parens': 'warn',
      'space-infix-ops': 'warn',
      'space-unary-ops': 'warn',
      'quotes': ['warn', 'single'],
      //
      'max-len': ['warn', { 'code': 200 }],
      'max-lines': ['warn', { 'max': 500 }],
      'keyword-spacing': 'warn',
      'no-mixed-operators': 'warn',
      //
      'no-multiple-empty-lines': ['warn', { 'max': 2, 'maxEOF': 1 }],
      'no-whitespace-before-property': 'warn',
      'nonblock-statement-body-position': 'error',
      'object-property-newline': [
        'warn',
        { 'allowAllPropertiesOnSameLine': true }
      ],
      //* ES6
      'arrow-spacing': 'warn',
      'no-confusing-arrow': 'error',
      'no-duplicate-imports': 'error',
      'no-var': 'error',
      'object-shorthand': 'off',
      'prefer-const': 'error',
      'prefer-template': 'warn',

    }
  }
];