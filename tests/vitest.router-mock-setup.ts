import { config } from '@vue/test-utils'
import { beforeEach } from 'vitest'
import { createRouterMock, injectRouterMock, VueRouterMock } from 'vue-router-mock'

const router = createRouterMock()

beforeEach(() => {
  router.reset()
  injectRouterMock(router)
})

config.plugins.VueWrapper.install(VueRouterMock)
