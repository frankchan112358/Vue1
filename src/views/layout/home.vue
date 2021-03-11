<template>
  <div class="home">
    <img alt="Vue logo" src="../../assets/logo.png">
     <b-container class="bv-example-row">
      <b-row>
        <b-col>
          <b-card style="height:300px;font-size: 20px;border-color: green;">
            <demo-hello-world :msg="msg"/>
            <br>
             <pre>
    此範例使用目前最新穩定版本: 2.6.11，並採用 typescript來撰寫 。
  程式範例目的為搭配 行內Vue.js規範，可給同仁實務上程式碼的對照
          </pre>
          </b-card>
          </b-col>
      </b-row>
     </b-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import HelloWorld from '@/components/hello-world.vue'
import EnvConst from '../../env-constant'

/**
 *
 * Layout版面-首頁<br>
 * @author GYC
 * @date 2020/03/16
 */
@Component({
  name: 'demo-home',
  components: {
    'demo-hello-world': HelloWorld
  }
})
export default class Home extends Vue {
  msg='';

  created () {
    this.msg = `${EnvConst.welcome} 目前環境: ${EnvConst.envMode}`
    console.log(process.env)
  }
}

</script>
