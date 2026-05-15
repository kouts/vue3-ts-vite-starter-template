import { createWrapperFor } from '@tests/vitest.helpers'
import HelloWorld from '@/components/HelloWorld.vue'

describe('HelloWorld', () => {
  it('renders the provided message', () => {
    const wrapper = createWrapperFor(HelloWorld, { props: { msg: 'Hello Vitest' } })

    expect(wrapper.text()).toContain('Hello Vitest')
    expect(wrapper.text()).toContain('Counter: 0 (double: 0)')
  })

  it('increments counter when clicking increment button', async () => {
    const wrapper = createWrapperFor(HelloWorld, { props: { msg: 'Hello Vitest' } })

    await wrapper.get('button').trigger('click')

    expect(wrapper.text()).toContain('Counter: 1 (double: 2)')
  })
})
