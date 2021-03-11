<script lang="ts">
import axios, { AxiosResponse } from 'axios'
import { Courses } from '@/beans/shared-bean.vue'

/**
 *
 * Common API共用元件<br>
 * 1.AllUsers取得所有使用者<br>
 * 2.getUserById依id取得使用者<br>
 * 3.updateUser更新使用者<br>
 * @author GYC
 * @date 2020/03/16
 */
class CommonApiService {
  private usersAxios = axios.create();
  public getMenus (): Promise<Courses[]> {
    const url = 'courses.json'
    return new Promise<Courses[]>((resolve, reject) => {
      this.usersAxios.get<Courses[]>(url).then((res: AxiosResponse<Courses[]>) => {
        resolve(res.data)
      }).catch((err) => {
        reject(err)
      })
    })
  }
}

const commonApiService = new CommonApiService()
export default commonApiService
</script>
