import './bootstrap';

import {createApp, defineComponent} from 'vue'
import Test from './components/Test.vue';

const app = createApp(defineComponent({}));
app.component('test-api', Test);

app.mount('#app')
