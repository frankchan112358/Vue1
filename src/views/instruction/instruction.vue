<template>
  <b-container class="bv-example-row">
    <b-row>
      <b-col>
        <b-card style="height:300px">
          <div>
            <h2 class="title">keydown event</h2>
            <div class="username">name UpperCase: {{ nameUpperCase }}</div>
            <input @keydown="updateName($event.target.value)" />
          </div>
        </b-card>
        <div style="height:100px"></div>
      </b-col>
      <b-col>
        <b-card style="height:300px">
          <div>
            <h2 class="title">v-for</h2>
            <ul>
              <li v-for="item in itemList" :key="item.message">{{ item.message }}</li>
            </ul>
          </div>
        </b-card>
        <div style="height:100px"></div>
      </b-col>
      <b-col>
        <b-card style="height:300px">
          <div>
            <h2 class="title">v-if</h2>
            <div v-if="productType === 'A'">Product A</div>
            <div v-else-if="productType === 'B'">Product B</div>
            <div v-else-if="productType === 'C'">Product C</div>
            <div v-else>Not Product A/B/C</div>
          </div>
        </b-card>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-card style="height:300px">
          <div>
            <h2 class="title">v-bind</h2>
            <demo-todo-item v-for="item in groceryList" v-bind:todo="item" v-bind:key="item.id"></demo-todo-item>
          </div>
        </b-card>
      </b-col>
      <b-col>
        <b-card style="height:300px">
          <div>
            <h2 class="title">v-bind:class</h2>
            <div
              class="static"
              v-bind:class="{ pass: isActive, 'text-danger': hasError }"
            >pass color is bule, error is red</div>
          </div>
        </b-card>
      </b-col>
      <b-col>
        <b-card style="height:300px">
          <div>
            <h2 class="title">v-show</h2>
            <span v-show="canShow">Now you see me</span>
          </div>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator'
import TodoItem from '@/components/todo-item.vue'
import { ItemModel, GroceryItem } from '@/beans/shared-bean.vue'
import CommonComponent from '@/components/common-component.vue'

/**
 *
 * 棊本指令<br>
 * @author GYC
 * @date 2020/03/20
 */
@Component({
  name: 'demo-instruction',
  components: {
    'demo-todo-item': TodoItem
  }
})
export default class Instruction extends Mixins(CommonComponent) {
  nameUpperCase = '';
  itemList: Array<ItemModel> = [];
  groceryList: Array<GroceryItem> = [];
  canShow = true;
  productType='A'
  isActive = true;
  hasError = false;

  created () {
    this.itemList = [{ message: 'Foo' }, { message: 'Bar' }]
    this.groceryList = [
      { id: 0, text: 'Vegetables' },
      { id: 1, text: 'Cheese' },
      { id: 2, text: 'Whatever else humans are supposed to eat' }
    ]
    // 加入共用資料
    this.addSharedModel('instruction', 'instruction shared data')
    console.log('共用資料:')
    console.log(this.getSharedModels())
  }

  updateName (name: string) {
    this.nameUpperCase = name.toLocaleUpperCase()
  }
}
</script>
<style scoped lang="css">
.pass {
  color: blue;
}

.text-danger {
  color: red;
}
</style>
