import type { Component } from 'vue'
import Default from '@/layouts/default/Default.vue'
import Empty from '@/layouts/empty/Empty.vue'

const DEFAULT_LAYOUT: LayoutKey = 'default'

const layoutRegistry = {
  default: Default,
  empty: Empty,
} satisfies Record<string, Component>

type LayoutKey = keyof typeof layoutRegistry

const isLayoutKey = (layoutKey: unknown): layoutKey is LayoutKey => typeof layoutKey === 'string' && layoutKey in layoutRegistry

const resolveLayout = (layoutKey: unknown) => {
  if (isLayoutKey(layoutKey)) {
    return layoutRegistry[layoutKey]
  }

  return layoutRegistry[DEFAULT_LAYOUT]
}

export { DEFAULT_LAYOUT, layoutRegistry, resolveLayout }
export type { LayoutKey }
