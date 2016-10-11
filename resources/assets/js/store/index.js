import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
	count: 10
};

const store = new Vuex.Store({
	state
});

export default store;