import { createWrapperFor } from '@tests/vitest.helpers'
import { defineComponent } from 'vue'
import { getRouter } from 'vue-router-mock'
import App from '@/App.vue'

const RouteViewStub = defineComponent({
  name: 'RouteViewStub',
  template: '<div />',
})

describe('App', () => {
  it('renders RouterView inside the route layout adapter', async () => {
    const router = getRouter()

    router.addRoute({
      path: '/',
      component: RouteViewStub,
      meta: {
        layout: 'default',
      },
    })

    await router.push({ path: '/' })

    const wrapper = createWrapperFor(App)

    expect(wrapper.findComponent({ name: 'DefaultLayout' }).exists()).toBe(true)
    expect(wrapper.find('footer').exists()).toBe(true)
  })

  it('renders empty layout for routes using meta.layout = empty', async () => {
    const router = getRouter()

    router.addRoute({
      path: '/empty',
      component: RouteViewStub,
      meta: { layout: 'empty' },
    })

    await router.push({ path: '/empty' })

    const wrapper = createWrapperFor(App)

    expect(wrapper.findComponent({ name: 'EmptyLayout' }).exists()).toBe(true)
    expect(wrapper.findComponent({ name: 'DefaultLayout' }).exists()).toBe(false)
    expect(wrapper.find('footer').exists()).toBe(false)
  })
})
