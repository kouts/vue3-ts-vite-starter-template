import Default from '@/layouts/default/Default.vue'
import Empty from '@/layouts/empty/Empty.vue'
import { resolveLayout } from '@/layouts/registry'

describe('layout registry', () => {
  it('resolves default layout key', () => {
    expect(resolveLayout('default')).toBe(Default)
  })

  it('resolves empty layout key', () => {
    expect(resolveLayout('empty')).toBe(Empty)
  })

  it('falls back to default layout for unknown or missing key', () => {
    expect(resolveLayout('missing-layout')).toBe(Default)
    expect(resolveLayout(undefined)).toBe(Default)
  })
})
