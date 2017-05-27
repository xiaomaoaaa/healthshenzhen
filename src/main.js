import Vue from 'vue';
import App from './App';
import router from './router';
import "babel-polyfill";

new Vue({
	router,
	render: h => h(App)
}).$mount('#app');