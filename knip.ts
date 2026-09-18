export default {
  entry: ['src/scss/variables.scss'],
  project: ['src/**/*.{ts,vue,css,scss,sass}', 'tests/**/*.ts'],
  ignoreDependencies: [
    '@fullhuman/postcss-purgecss',
    '@fullhuman/vue-cli-plugin-purgecss',
    'prettier',
    'prettier-plugin-tailwindcss',
  ],
  ignoreBinaries: [],
}
