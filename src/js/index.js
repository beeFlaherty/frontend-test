/*To DO app*/
import Vue from 'vue';
import VueRouter from 'vue-router';
import routeData from './routes';
import Vuex from 'vuex';
import storeData from './store';
import axios from 'axios';
import { loadProgressBar } from 'axios-progress-bar';
import App from '../views/App.vue';
import '../css/index.scss';


Vue.use(VueRouter);
Vue.use(Vuex);

const routes = routeData;

const router = new VueRouter({
	mode: 'history',
	routes
});

const store = new Vuex.Store( 
	storeData
);

const vm = new Vue({ 
	router,
	store,
	data() {
		return {
			loading: true,
			apiBaseUrl: 'http://localhost:4000/api/task'
		};
	},
	created() {
		this.loading = true;
		loadProgressBar();
		axios.get(this.apiBaseUrl)
			.then((response) => {
				this.$store.commit('loadTasks', response.data);
				this.loading = false;
				console.log('data loaded');
				return true;
			})
			.catch((error) => {
				console.log('error - unable to load data file');
				console.log(error);
			});
	},
	render: h => h(App)
}).$mount('#app');
