<template>
  <div>
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

/**
 *
 * Layout版面-內容 配合router-view動態切換<br>
 * @author GYC
 * @date 2020/03/16
 */
@Component({
  name: 'demo-content'
})
export default class Content extends Vue {

}
</script>

<style lang="css">
</style>
