import html from 'eslint-plugin-html'
import pluginImport from 'eslint-plugin-import-x'
import prettier from 'eslint-plugin-prettier/recommended'
import pluginSimpleImportSort from 'eslint-plugin-simple-import-sort'
import vue from 'eslint-plugin-vue'
import neostandard, { plugins } from 'neostandard'

const ts = plugins['typescript-eslint']

export default [
  {
    ignores: ['**/node_modules/**', '{tmp,temp}/**', '**/*.min.js', 'vendor/**', 'dist/**', 'public/**']
  },

  // Neostandard
  ...neostandard({ noStyle: true, semi: false, ts: true }),
  {
    rules: {
      // Enforce blank lines between the given 2 kinds of statements
      'padding-line-between-statements': [
        'error',
        { blankLine: 'always', prev: '*', next: 'return' },
        { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
        { blankLine: 'any', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var'] },
        { blankLine: 'always', prev: 'directive', next: '*' },
        { blankLine: 'any', prev: 'directive', next: 'directive' }
      ],
      // Console and debugger settings depending whether we're on production or not
      'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
    }
  },

  // Import
  {
    plugins: {
      import: pluginImport
    },
    rules: {
      'import/export': 'error',
      'import/first': 'error',
      'import/no-duplicates': 'error',
      'import/no-mutable-exports': 'error',
      'import/no-named-default': 'error',
      'import/no-self-import': 'error',
      'import/no-webpack-loader-syntax': 'error',
      'import/no-absolute-path': ['error', { esmodule: true, commonjs: true, amd: false }],
      'import/newline-after-import': ['error', { count: 1 }]
    }
  },

  // Sort imports
  {
    plugins: {
      'simple-import-sort': pluginSimpleImportSort
    },
    rules: {
      'simple-import-sort/imports': [
        'error',
        // Remove all blank lines between imports
        {
          groups: [['^\\u0000', '^node:', '^@?\\w', '^', '^\\.']]
        }
      ],
      'simple-import-sort/exports': 'error'
    }
  },

  // TypeScript
  ...ts.configs.recommended,
  {
    rules: {
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/array-type': ['error', { default: 'array' }]
    }
  },

  // HTML
  {
    files: ['**/*.html'],
    plugins: { html }
  },

  // Vue
  ...vue.configs['flat/recommended'],
  {
    files: ['*.vue', '**/*.vue'],
    languageOptions: {
      parserOptions: {
        parser: ts.parser
      }
    }
  },
  {
    rules: {
      // Overrides for vue/(vue3-)recommended preset
      'vue/max-attributes-per-line': 'off',
      'vue/html-self-closing': 'off',
      'vue/singleline-html-element-content-newline': 'off'
    }
  },

  // Project-specific overrides
  {
    name: 'project-specific-overrides',
    // Disable multi-word-component-names for pages and layouts
    files: ['src/views/**/*.vue', 'src/layouts/**/*.vue'],
    rules: {
      'vue/multi-word-component-names': 'off'
    }
  },

  // Prettier
  prettier
]
