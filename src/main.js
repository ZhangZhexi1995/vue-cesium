// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Cesium from 'cesium/Cesium'
import widgets from 'cesium/Widgets/widgets.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  mounted(){
    var viewer = new Cesium.Viewer('cesiumContainer')
  }
})
