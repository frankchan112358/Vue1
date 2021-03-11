<template>
  <div id="app">
    <demo-layout></demo-layout>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import EnvConst from './env-constant'
import Layout from './views/layout/layout.vue'

/**
 *
 * 根組件<br>
 * 1.程式入口<br>
 * @author GYC
 * @date 2020/03/16
 */
@Component({
  name: 'demo-app',
  components: {
    'demo-layout': Layout
  }
})
export default class App extends Vue {
  created () {
    document.title = EnvConst.envMode
  }
}
</script>

<style lang="css">
 @font-face {
  font-family: 'Material Icons';
  font-style: normal;
  font-weight: 400;
  src: url(./assets/iconfont/MaterialIcons-Regular.woff2) format('woff2');
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
