import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

//Pages
import LoginComponent from './pages/Login/LoginComponent'
import HomeComponent from './pages/Home/HomeComponent'
import ClientsComponent from './pages/Clients/ClientsComponent'
import ProductComponent from './pages/Products/ProductComponent'

// AXIOS
// import axios from 'axios';

Vue.config.productionTip = false
Vue.use(VueRouter)

// axios.defaults.baseURL = 'http://localhost:8000/api';

const routes = [
  { path: '/', name: 'login', component: LoginComponent },
  { path: '/home', name: 'home', component: HomeComponent },
  { path: '/clients', name: 'clients', component: ClientsComponent },
  { path: '/products', name: 'products', component: ProductComponent },
]

const router = new VueRouter({
  routes // short for `routes: routes`
})

/*eslint-disable no-new */

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
