export type CounterState = {
  counter: number
}

export const createCounterState = (overrides: Partial<CounterState> = {}): CounterState => ({
  counter: 0,
  ...overrides,
})
