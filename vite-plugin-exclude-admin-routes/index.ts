import { type Plugin } from 'vite'

/**
 * This plugin ensures that the Admin routes are only included in development mode.
 * In other cases, it replaces the Admin routes import with an empty routes file.
 */
export default function excludeAdminRoutesPlugin(): Plugin {
  let includeAdminRoutes = false

  return {
    name: 'exclude-admin-routes',
    // Ensure that it runs before other plugins
    enforce: 'pre',
    configResolved(config) {
      includeAdminRoutes = config.mode === 'development'
    },
    transform(code: string, id: string) {
      // Only transform JavaScript/TypeScript files
      if (!id.endsWith('.js') && !id.endsWith('.ts')) {
        return null
      }

      const targetImport = `import { adminRoutes } from '@/router/admin-routes';`
      const replacementImport = `import { adminRoutes } from '@/router/admin-routes-empty';`

      if (!includeAdminRoutes && code.includes(targetImport)) {
        const newCode = code.replace(targetImport, replacementImport)

        return {
          code: newCode,
          // No source map provided, Vite will handle it
          map: null,
        }
      }

      // Return null if there's no change
      return null
    },
  }
}
