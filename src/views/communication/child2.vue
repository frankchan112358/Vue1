<template>
  <div>
    <div id="nav">
      Child2
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
  name: 'demo-child2'
})
export default class Child2 extends Vue {
  msg = '';
  receivedMsg: Array<string> = [];

  created () {
    console.log('Child2 created')
    this.$root.$on('man-talk', this.listenManTalkEvent)
  }

  sendMsg () {
    console.log('Child2 send msg:' + this.msg)
    this.$root.$emit('man-talk-response', this.msg)
  }

  listenManTalkEvent (eventModel: string) {
    console.log('listenEvent Child2 received msg')
    console.log(eventModel)
    this.receivedMsg.push(eventModel)
    console.log(this.receivedMsg)
  }
}
</script>

<style lang="css">
</style>
