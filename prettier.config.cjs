const prettierConfing = require('@kouts/eslint-config/prettier.config.js')

prettierConfing.plugins = Array.isArray(prettierConfing.plugins) ? prettierConfing.plugins : []
prettierConfing.plugins.push('prettier-plugin-tailwindcss')

module.exports = prettierConfing
