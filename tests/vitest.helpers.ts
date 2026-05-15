import { type ComponentMountingOptions, mount } from '@vue/test-utils'
import { createPinia } from 'pinia'
import type { Component } from 'vue'

type MountGlobalOptions = NonNullable<ComponentMountingOptions<Component>['global']>
type MountDirectives = NonNullable<MountGlobalOptions['directives']>
type MountPlugins = NonNullable<MountGlobalOptions['plugins']>
type MountStubs = NonNullable<MountGlobalOptions['stubs']>

const defaultDirectives: MountDirectives = {}
const defaultStubs: MountStubs = {}

export function createWrapperFor<T extends Component>(
  component: T,
  options: ComponentMountingOptions<T> = {},
  mountingMethod: typeof mount = mount,
) {
  const mountFn = mountingMethod ?? mount
  const defaultPlugins: MountPlugins = [createPinia()]
  const globalPlugins = options.global?.plugins ? [...defaultPlugins, ...options.global.plugins] : defaultPlugins
  const mergedDirectives: MountDirectives = {
    ...defaultDirectives,
    ...options.global?.directives,
  }
  const mergedStubs: MountStubs = {
    ...defaultStubs,
    ...options.global?.stubs,
  }

  const mergedOptions: ComponentMountingOptions<T> = {
    ...options,
    global: {
      ...options.global,
      directives: mergedDirectives,
      plugins: globalPlugins,
      stubs: mergedStubs,
    },
  }

  return mountFn(component, mergedOptions)
}
