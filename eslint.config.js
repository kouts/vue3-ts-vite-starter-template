import html from 'eslint-plugin-html'
import pluginImport from 'eslint-plugin-import-x'
import prettier from 'eslint-plugin-prettier/recommended'
import pluginSimpleImportSort from 'eslint-plugin-simple-import-sort'
import vue from 'eslint-plugin-vue'
import neostandard, { plugins, resolveIgnoresFromGitignore } from 'neostandard'

const ts = plugins['typescript-eslint']

export default [
  {
    ignores: [
      '**/node_modules/**',
      '{tmp,temp}/**',
      '**/*.min.js',
      'vendor/**',
      'dist/**',
      'public/**',
      ...resolveIgnoresFromGitignore()
    ]
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
      // Prefer T[] instead of Array<T>
      '@typescript-eslint/array-type': ['error', { default: 'array' }],

      // Prefer type over interface for objects
      '@typescript-eslint/consistent-type-definitions': ['error', 'type'],

      // Fix type imports
      '@typescript-eslint/consistent-type-imports': [
        'error',
        {
          prefer: 'type-imports',
          fixStyle: 'inline-type-imports'
        }
      ],

      // Allow _ for unused variables
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          args: 'none',
          caughtErrors: 'none',
          ignoreRestSiblings: true,
          vars: 'all',
          argsIgnorePattern: '^_'
        }
      ]
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
      'vue/singleline-html-element-content-newline': 'off',

      // Strengthen vue/(vue3-)recommended preset for autofix
      // https://github.com/vuejs/eslint-plugin-vue/blob/master/lib/configs/recommended.js
      'vue/attributes-order': 'error',
      'vue/component-tags-order': 'error',
      'vue/no-lone-template': 'error',
      'vue/no-multiple-slot-args': 'error',
      'vue/no-v-html': 'error',
      'vue/order-in-components': 'error',
      'vue/this-in-template': 'error',
      'vue/require-prop-types': 'error',

      // Enforce PascalCase for Vue components
      'vue/component-name-in-template-casing': ['error', 'PascalCase', { registeredComponentsOnly: false, ignores: [] }],

      // Do not allow inline styles
      'vue/no-static-inline-styles': ['error', { allowBinding: false }],

      // Require explicit emits
      'vue/require-explicit-emits': 'error',

      // Require component to have a name property
      'vue/require-name-property': 'error',

      // Require components that don't have any content to self-close
      'vue/html-self-closing': [
        'error',
        {
          html: {
            void: 'always',
            normal: 'never',
            component: 'always'
          },
          svg: 'always',
          math: 'always'
        }
      ]
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
