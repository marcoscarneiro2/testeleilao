import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
//Dependencia das Rotas
import routes from "./routes/routes";
import vuetify from './plugins/vuetify';
//Dependencia do Vuex
import store from './store';
//Import icones
import '@fortawesome/fontawesome-free/css/all.css';
//Importar o efeito do zoom na foto
import ZoomOnHover from "vue-zoom-on-hover";
//firebase
import * as firebase from 'firebase';
//Alerta
import Alerta from './components/Alertas.vue';

Vue.use(ZoomOnHover);
Vue.use(VueRouter);
Vue.component('app-alert', Alerta);

const router = routes;

Vue.config.productionTip = false;

new Vue({
    router,
    vuetify,
    store,
    render: h => h(App),
    created(){
        firebase.initializeApp({
    apiKey: "AIzaSyBbTw26fno2A6WrlJjj7FXSHcQ1xXZpMgw",
    authDomain: "portalleilao-26290.firebaseapp.com",
    databaseURL: "https://portalleilao-26290.firebaseio.com",
    projectId: "portalleilao-26290",
    storageBucket: "portalleilao-26290.appspot.com",
        })
    }
}).$mount("#app");





