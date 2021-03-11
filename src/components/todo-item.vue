<template>
  <div>
    <li>{{ todo.text }}</li>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { GroceryItem } from '@/beans/shared-bean.vue'

/**
 *
 * 共用元件TodoItem<br>
 * 1.初始化資料:todo model資料<br>
 * @author GYC
 * @date 2020/03/16
 */
@Component({
  name: 'demo-todo-item'
})
export default class TodoItem extends Vue {
  /**
   * 待辦清單
   */
  @Prop() private todo!: GroceryItem;

  /**
   * 取得待辦清單文字
   * @return GroceryItem
   */
  getTodoText (): GroceryItem {
    return this.todo
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="css">
</style>
