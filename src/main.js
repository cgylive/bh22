import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';

import index from './components/index.vue';

Vue.use(VueRouter);


const routes = [{
        path: '/',
        component: index
    },
    {
        path: '/index',
        component: index
    }
]

const router = new VueRouter({
    routes
})

new Vue({
    render: h => h(App),
    router
}).$mount('#app')