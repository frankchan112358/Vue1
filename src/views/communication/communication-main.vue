<template>
  <div>
    <b-container class="bv-example-row">
      <b-row>
        <b-col>
          <b-card>
            <demo-child1></demo-child1>
          </b-card>
        </b-col>
        <b-col>
          <b-card>
            <demo-child2></demo-child2>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Child1 from './child1.vue'
import Child2 from './child2.vue'

/**
 *
 * 元件間溝通<br>
 * @author GYC
 * @date 2020/03/16
 */
@Component({
  name: 'demo-communication-main',
  components: {
    'demo-child1': Child1,
    'demo-child2': Child2
  }
})
export default class CommunicationMain extends Vue {}
</script>

<style lang="css">
</style>
