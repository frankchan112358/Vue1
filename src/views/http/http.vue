<template>
  <div>
    <b-container class="bv-example-row">
      <b-row>
        <b-col>
          <b-card>
            <demo-user-list :userModel="user" :userList="userList"></demo-user-list>
          </b-card>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-card style="border:0px">
            <div>
              <b-button variant="success" @click="getUserById()">取得使用者</b-button>&nbsp;
              <b-button variant="success" @click="updateUser()">更新使用者</b-button>
            </div>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator'
import { User } from '@/beans/shared-bean.vue'
import UserApiService from '@/components/service/user-api-service.vue'
import CommonComponent from '@/components/common-component.vue'
import UserList from './user-list.vue'

/**
 *
 * HTTP 並搭配 json-server<br>
 * @author GYC
 * @date 2020/03/16
 */
@Component({
  name: 'demo-http',
  components: {
    'demo-user-list': UserList
  }
})
export default class Http extends Mixins(CommonComponent) {
  userList: User[] = [];
  userApiService = UserApiService;
  user: User = {
    userId: '',
    name: '',
    branchName: '',
    branchCode: '',
    sex: '',
    email: '',
    activated: false
  };

  created () {
    console.log('http created')
    this.getAllUsers()
  }

  getAllUsers () {
    this.userApiService.getAllUsers().then((response: User[]) => {
      this.userList = response
      // 加入共用資料
      this.addSharedModel('http', this.userList)
    })
  }

  getUserById () {
    this.userApiService.getUserById(this.user.userId).then((response: User) => {
      this.user = response
    })
  }

  updateUser () {
    this.userApiService.updateUser(this.user).then((response: User) => {
      const result = response
      console.log('updateUser')
      console.log(result)
      this.getAllUsers()
    })
  }
}
</script>
<style scoped lang="css">
</style>
