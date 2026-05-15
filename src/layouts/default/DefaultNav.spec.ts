import { createWrapperFor } from '@tests/vitest.helpers'
import { getRouter } from 'vue-router-mock'
import DefaultNav from '@/layouts/default/DefaultNav.vue'

describe('DefaultNav', () => {
  it('renders router links for Home and About', async () => {
    const router = getRouter()

    await router.push({ path: '/' })

    const wrapper = createWrapperFor(DefaultNav)
    const routerLinks = wrapper.findAllComponents({ name: 'RouterLink' })

    expect(routerLinks).toHaveLength(3)
    expect(routerLinks[0].props('to')).toBe('/')
    expect(routerLinks[1].props('to')).toBe('/')
    expect(routerLinks[2].props('to')).toBe('/about')
  })
})
