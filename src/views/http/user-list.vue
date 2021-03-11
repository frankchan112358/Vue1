<template>
  <div>
    <b-container class="bv-example-row">
      <b-row>
        <b-col>
          <b-card  style="height:300px;">
            <div class>
              <div class="card" style="width:100%;border: 0px;">
                <div class="form-group" style="text-align: left;">
                  <div class="col-sm-12 col-md-12">
                    使用者帳號
                    <input type="text" v-model="user.userId" />
                  </div>
                </div>
                <div class="form-group has-feedback">
                  <div class="col-sm-12 col-md-12"  style="text-align: left;">
                    使用者名稱:
                    <input type="text" v-model="user.name" />
                  </div>
                </div>
                <div class="form-group">
                  <div class="col-sm-12 col-md-12"  style="text-align: left;">
                    使用者email:
                    <input type="email" v-model="user.email" size="40" />
                  </div>
                </div>
              </div>
            </div>
          </b-card>
          <div style="height:100px"></div>
        </b-col>
        <b-col>
          <b-card  style="height:300px;">
            <div class="card" style="border: 0px;">
              所有使用者清單
              <table>
                <th>使用者帳號</th>
                <th>使用者名稱</th>
                <tr v-for="user in userList" v-bind:key="user.userId">
                  <td>
                    <span>{{user.userId}}</span>
                  </td>
                  <td>
                    <span>{{user.name}}</span>
                  </td>
                </tr>
              </table>
            </div>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, PropSync, Watch } from 'vue-property-decorator'
import { User } from '@/beans/shared-bean.vue'

@Component({
  name: 'demo-user-list'
})
export default class UserList extends Vue {
  @Prop() userList!: User[];
  @PropSync('userModel', { type: Object }) user!: User;
  created () {
    console.log('UserList')
  }

  @Watch('user')
  onUserChanged (newValue: User, oldValue: User) {
    console.log('new User value')
    console.log(newValue)
    console.log('old User value')
    console.log(oldValue)
  }
}
</script>
<style scoped lang="css">
</style>
