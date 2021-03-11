import { shallowMount, createLocalVue } from '@vue/test-utils'

import Http from '@/views/http/http.vue'
import CommonComponent from '@/components/common-component.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VueMaterial from 'vue-material'
import Vue from 'vue'
jest.mock('axios', () => ({
  get: jest.fn((url) => {
    console.log('url:' + url)
    if (url.indexOf('user/queryAll') >= 0) {
      console.log('user/queryAll match')
      return Promise.resolve({
        data: [
          {
            userId: '16048',
            name: '郭有強2',
            branchName: '資訊處',
            branchCode: 'C478',
            sex: 'M',
            email: 'gyc-16048@email.esunbank.com.tw',
            activated: true
          },
          {
            userId: '00001',
            name: 'DEMO2',
            branchName: '資訊處',
            branchCode: 'C105',
            sex: 'M',
            email: 'demo1@email.esunbank.com.tw',
            activated: true
          }
        ]
      })
    } else if (url.indexOf('user/query') >= 0) {
      console.log('user/query match')
      return Promise.resolve({
        data: {
          userId: '16048',
          name: '郭有強2',
          branchName: '資訊處',
          branchCode: 'C105',
          sex: 'M',
          email: 'gyc-16048@email.esunbank.com.tw',
          activated: true
        }
      })
    }
  }),
  post: jest.fn((url) => {
    console.log('url:' + url)
    return Promise.resolve({
      data: {
        code: 'R0000',
        desc: '更新成功'
      }
    })
  })
}))

// Vue.config.ignoredElements = ['b-col', 'router-view']

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.use(VueMaterial)

let localVue
let wrapper
beforeEach(() => {
  localVue = createLocalVue()
  localVue.mixin(CommonComponent)

  wrapper = shallowMount(Http, {
    localVue
  })
})

describe('測試 Http', () => {
  it('測試 Http getAllUsers', () => {
    expect(wrapper.vm.userList.length).toBe(2)
    expect(wrapper.vm.userList).toEqual([
      {
        userId: '16048',
        name: '郭有強2',
        branchName: '資訊處',
        branchCode: 'C478',
        sex: 'M',
        email: 'gyc-16048@email.esunbank.com.tw',
        activated: true
      },
      {
        userId: '00001',
        name: 'DEMO2',
        branchName: '資訊處',
        branchCode: 'C105',
        sex: 'M',
        email: 'demo1@email.esunbank.com.tw',
        activated: true
      }
    ])
  })

  it('測試 getUserById 取得使用者 16048', async () => {
    wrapper.vm.user.userId = '`6048'
    wrapper.vm.getUserById()
    await Vue.nextTick()
    expect(wrapper.vm.user.name).toBe('郭有強2')
  })
})
