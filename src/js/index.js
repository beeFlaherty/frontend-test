/*To DO app*/
import Vue from 'vue';
import VueRouter from 'vue-router';
import routeData from './routes';
import axios from 'axios';
import { loadProgressBar } from 'axios-progress-bar';
import App from '../views/App.vue';
import '../css/index.scss';


Vue.use(VueRouter);

const routes = routeData;

const router = new VueRouter({
	mode: 'history',
	routes
});

const apiBaseUrl = 'http://localhost:4000/api/task'

const vm = new Vue({ 
	router,
	data() {
		return {
			loading: true,
			siteContent: {}
		};
	},
	created() {
		this.loading = true;
		loadProgressBar();
		axios.get(apiBaseUrl)
			.then((response) => {
				this.siteContent.tasks = response.data;
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
