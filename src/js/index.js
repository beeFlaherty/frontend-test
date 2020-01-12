/*To DO app*/
import Vue from 'vue';
import VueRouter from 'vue-router';
import routeData from './routes';
import App from '../views/App.vue';
import '../css/index.scss';


Vue.use(VueRouter);

const routes = routeData;

const router = new VueRouter({
	mode: 'history',
	routes
});

const vm = new Vue({ // eslint-disable-line no-unused-vars
	router,
	render: h => h(App)
});
