import Vue from 'vue'
import App from './App.vue'
import ButtonExample from './components/ButtonExample'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

export { ButtonExample }