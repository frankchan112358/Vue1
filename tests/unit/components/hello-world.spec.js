import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/hello-world.vue'

describe('測試 HelloWorld', () => {
  it('測試 @Prop msg when passed', () => {
    const msg = 'jest test'
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    })
    expect(wrapper.props('msg')).toBe('jest test')
  })
})
