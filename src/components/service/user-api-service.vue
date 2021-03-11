<script lang="ts">
import axios, { AxiosResponse } from 'axios'
import { User } from '@/beans/shared-bean.vue'
import EnvConst from '../../env-constant'

/**
 *
 * USER API共用元件<br>
 * 1.AllUsers取得所有使用者<br>
 * 2.getUserById依id取得使用者<br>
 * 3.updateUser更新使用者<br>
 * @author GYC
 * @date 2020/03/16
 */
class UserApiService {
  /**
   * 取得所有使用者資料
   * @return  Promise<User[]> 使用者資料Promise物件
   */
  public getAllUsers (): Promise<User[]> {
    let url = EnvConst.wsURL
    url += 'user/queryAll'
    return new Promise<User[]>((resolve, reject) => {
      axios
        .get<User[]>(url)
        .then((res: AxiosResponse<User[]>) => {
          resolve(res.data)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }

  /**
   * 取得使用者資料
   * @param  id 單使用者id
   * @return  Promise<User> 使用者資料Promise物件
   */
  public getUserById (id: string): Promise<User> {
    let url = EnvConst.wsURL
    url += 'user/query/' + JSON.stringify({ userId: id })
    return new Promise<User>((resolve, reject) => {
      axios
        .get<User>(url)
        .then((res: AxiosResponse<User>) => {
          resolve(res.data)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }

  public updateUser (user: User): Promise<User> {
    let url = EnvConst.wsURL
    url += 'user/update'
    console.log('updateUser url:' + url)
    return new Promise<User>((resolve, reject) => {
      axios
        .post<User>(url, user)
        .then((res: AxiosResponse<User>) => {
          resolve(res.data)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }
}

const userApiService = new UserApiService()
export default userApiService
</script>
