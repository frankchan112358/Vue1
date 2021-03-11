
import UserApiService from '@/components/service/user-api-service.vue'
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

let userApiService
beforeEach(() => {
  userApiService = UserApiService
})

describe('測試 UserApiService', () => {
  it('測試 getUserById 取得使用者 16048', async () => {
    const user = await userApiService.getUserById('16048')
    expect(user.name).toBe('郭有強2')
  })

  it('測試 getAllUsers 取得所有使用者', async () => {
    const userlist = await userApiService.getAllUsers()
    expect(userlist.length).toBe(2)
    expect(userlist[1].branchCode).toBe('C105')
  })

  it('測試 updateUser 00001', async () => {
    const result = await userApiService.updateUser({
      userId: '00001',
      name: 'DEMO4',
      branchName: '資訊處',
      branchCode: 'C105',
      sex: 'M',
      email: 'demo1@email.esunbank.com.tw',
      activated: true
    })
    expect(result.code).toBe('R0000')
  })
})
