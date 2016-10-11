
/**
 * First we will load all of this project's JavaScript dependencies which
 * include Vue and Vue Resource. This gives a great starting point for
 * building robust, powerful web applications using Vue and Laravel.
 */

//require('./bootstrap');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

//Vue.component('example', require('./components/Example.vue'));

import Vue from 'vue';
import Router from 'vue-router';
// import App from './components/App.vue';
import HomeView from './components/HomeView.vue';

Vue.use(Router);

const Foo = { template: '<div>foo</div>' };
const Bar = { template: '<div>bar</div>' };

const routes = [
	{ path: '/foo', component: Foo },
	{ path: '/bar', component: HomeView }
];

var router = new Router({
	routes,
	mode: 'history'
});

const vm = new Vue({
	router
}).$mount('#app');

// new Vue({
// 	router
// }).$mount('#app');




// const app = new Vue({
//     el: '#app'
// });
