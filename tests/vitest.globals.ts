import { beforeAll } from 'vitest'

beforeAll(() => {
  globalThis.ResizeObserver = class ResizeObserver {
    // eslint-disable-next-line @typescript-eslint/no-useless-constructor
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
