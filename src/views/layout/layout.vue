<template>
  <div class="page-container">
    <md-toolbar class="md-primary">
      <md-button class="md-icon-button" @click="showNavigation = true">
        <md-icon>menu</md-icon>
      </md-button>
      <span class="md-title">
        <img alt="Vue logo" src="../../assets/esun_logo2.png" style="height: 50px;" />
      </span>
    </md-toolbar>

    <md-drawer :md-active.sync="showNavigation" md-swipeable>
      <md-toolbar class="md-transparent" md-elevation="0">
        <span class="md-title">Vue.js 範例</span>
      </md-toolbar>

      <md-list>
        <md-list-item
          v-for="course in coursesList"
          :key="course.path"
          @mouseover="hover = course.path"
          @mouseleave="hover =''"
          @click="gotoCourse(course.path)"
          :class=" { coursehover: hover===course.path }"
        >
          <md-icon>tab</md-icon>
          <span
            :class=" { coursehover: hover===course.path }"
            class="md-list-item-text"
          >{{course.title}}</span>
        </md-list-item>
      </md-list>
    </md-drawer>
    <md-content>
      <demo-content></demo-content>
    </md-content>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Content from './content.vue'
import { Courses } from '@/beans/shared-bean.vue'
import CommonApiService from '@/components/service/common-api-service.vue'

/**
 *
 * Layout版面<br>
 * @author GYC
 * @date 2020/03/16
 */
@Component({
  name: 'demo-layout',
  components: {
    'demo-content': Content
  }
})
export default class Layout extends Vue {
  menuVisible = false;
  showNavigation = false;
  showSidepanel = false;
  coursesList: Courses[] = [];
  commonApiService=CommonApiService;
  hover = false;
  created () {
    console.log('Layout created')
    this.getMenus()
  }

  getMenus () {
    this.commonApiService.getMenus().then((response: Courses[]) => {
      this.coursesList = response
      console.log(this.coursesList)
    })
  }

  toggleMenu () {
    this.menuVisible = !this.menuVisible
    console.log(this.menuVisible)
  }

  gotoCourse (path: string) {
    console.log('go to:' + path)
    this.$router.push({ path: path })
    this.showNavigation = false
  }
}
</script>

<style lang="css" scoped>
.page-container {
  overflow: hidden;
  position: relative;
  border: 1px solid rgba(#000, 0.12);
  min-height: 100vh;
}

.md-drawer {
  width: 230px;
  max-width: calc(100vw - 125px);
}

.md-content {
  padding: 16px;
}

.md-toolbar.md-theme-default.md-primary {
  background-color: #32acaf;
  color: #fff;
  color: var(--md-theme-default-text-primary-on-primary, #fff);
}

.coursehover {
  background: green;
  font-size: 20px;
  cursor: pointer;
  color: white;
}

.md-list-item-text {
  font-size: 18px;
}
</style>
