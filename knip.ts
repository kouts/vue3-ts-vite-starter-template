export default {
  project: ['src/**/*.{ts,vue}', 'tests/**/*.ts'],
  ignoreDependencies: [
    '@fullhuman/postcss-purgecss',
    '@fullhuman/vue-cli-plugin-purgecss',
    'prettier',
    'prettier-plugin-tailwindcss',
    'tailwindcss',
  ],
  ignoreBinaries: ['semantic-release', 'only-allow'],
}
