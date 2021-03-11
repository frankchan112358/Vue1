import { shallowMount } from '@vue/test-utils'
import App from '@/app.vue'

describe('測試 App', () => {
  const wrapper = shallowMount(App)
  it('測試 App is a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy()
  })
})
