import globals from 'globals'
import vue from 'eslint-plugin-vue'
import prettier from 'eslint-plugin-prettier/recommended'
import neostandard, { plugins } from 'neostandard'

const ts = plugins['typescript-eslint']

export default [
  {
    ignores: ['node_modules/*', 'dist/*']
  },
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node
      }
    }
  },

  // Neostandard
  ...neostandard({ noStyle: true, semi: false, ts: true }),

  // TypeScript
  ...ts.configs.recommended,
  {
    rules: {
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/array-type': ['error', { default: 'array' }]
    }
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
