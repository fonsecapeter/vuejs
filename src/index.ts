import './styles/styles.scss';
import Vue from 'vue';
import AppVue from './app.vue';
import logWithEmoji from './utils/console_log.ts';

new Vue({
  el: '#app',
  render: h => h(AppVue),
});

logWithEmoji('Hello from the typescripts!');
