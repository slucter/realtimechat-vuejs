import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
import firebase from 'firebase'
import VueGeoLocation from 'vue-browser-geolocation'
import * as VueGoogleMaps from 'vue2-google-maps'

// Required for side-effects
import 'firebase/firestore'
const firebaseConfig = {
  apiKey: process.env.VUE_APP_API_KEY,
  authDomain: 'chat-doang.firebaseapp.com',
  databaseURL: 'https://chat-doang.firebaseio.com',
  projectId: 'chat-doang',
  storageBucket: 'chat-doang.appspot.com',
  messagingSenderId: '674714116187',
  appId: '1:674714116187:web:bf12a4aa07719a06c4df7e',
  measurementId: 'G-HHYLPFRG9J'
}
firebase.initializeApp(firebaseConfig)

Vue.prototype.$db = firebase.firestore()
Vue.prototype.$firebase = firebase

Vue.config.productionTip = false

Vue.use(VueGeoLocation)
const options = {
  load: {
    key: 'AIzaSyB_jrhMU1l0ARnqML1tTX7tXMNGMAVBdTY'
  }
}
Vue.use(VueGoogleMaps, options)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
