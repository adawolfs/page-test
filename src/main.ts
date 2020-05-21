import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import vueSmoothScroll from 'vue2-smooth-scroll'
Vue.use(vueSmoothScroll)
// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

library.add(fas)
library.add(fab)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

Vue.prototype.$global = {
  email: "adawolfs@gmail.com",
  github: "https://github.com/adawolfs",
  linkedin: "https://www.linkedin.com/in/alvin-estrada-868b22a5/",
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
