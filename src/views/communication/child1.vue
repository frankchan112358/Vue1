<template>
  <div>
    <div id="nav">
      Child1
      <br />
      <input v-model="msg" />
      <b-button variant="success" @click="sendMsg">send Msg</b-button>&nbsp;
    </div>
    <div id="nav">received msg:</div>
    <div v-for="(msg, index) in receivedMsg" :key="index">{{msg }}</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'demo-child1'
})
export default class Child1 extends Vue {
  msg = '';
  receivedMsg: Array<string> = [];

  created () {
    console.log('Child1 created')
    this.$root.$on('man-talk-response', this.listenManTalkResponseEvent)
  }

  sendMsg () {
    console.log('Child1 send msg:' + this.msg)
    this.$root.$emit('man-talk', this.msg)
  }

  listenManTalkResponseEvent (eventModel: string) {
    console.log('listenEvent Child1 received msg')
    console.log(eventModel)
    this.receivedMsg.push(eventModel)
    console.log(this.receivedMsg)
  }
}
</script>

<style lang="css">
</style>
