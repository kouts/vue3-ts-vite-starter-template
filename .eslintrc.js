module.exports = {
  extends: ['eslint-config-kouts/vue3-typescript'],
  overrides: [
    {
      // Disable multi-word-component-names for pages and layouts
      files: ['src/views/**/*.vue', 'src/layouts/**/*.vue'],
      rules: {
        'vue/multi-word-component-names': 'off'
      }
    }
  ]
}
