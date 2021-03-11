<template>
  <div class="hello">
    <h4>{{ msg }}</h4>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

/**
 *
 * 共用元件HelloWorld<br>
 * @author GYC
 * @date 2020/03/16
 */
@Component({
  name: 'demo-hello-world'
})
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
}
</script>

<style scoped lang="css">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
