import Vue from 'vue';
import Router from 'vue-router';

import Home from './../views/Home.vue';
import Login from './../views/Login.vue';

Vue.use(Router);

var router = new Router({
	routes: [
		{ path: '/', component: Home },
		{ path: '/login', component: Login }
	],
	mode: 'history'
});

export default router;