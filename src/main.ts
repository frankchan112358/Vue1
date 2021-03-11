import Vue from 'vue'
import router from '@/router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faGooglePlus } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'jquery-ui/themes/base/core.css'
import 'jquery-ui/themes/base/datepicker.css'
import 'jquery-ui/themes/base/theme.css'
import moment from 'moment'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import App from './app.vue'
import CommonComponent from '@/components/common-component.vue'

Vue.use(VueMaterial)
Vue.mixin(CommonComponent)

Vue.prototype.moment = moment
library.add(faCoffee, faGooglePlus)
Vue.component('font-awesome-icon', FontAwesomeIcon)

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
