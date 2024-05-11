import { beforeAll } from 'vitest'

beforeAll(() => {
  globalThis.ResizeObserver = class ResizeObserver {
    // eslint-disable-next-line no-useless-constructor
    constructor() {
      //
    }

    disconnect() {
      return null
    }

    observe() {
      return null
    }

    unobserve() {
      return null
    }
  }
})
