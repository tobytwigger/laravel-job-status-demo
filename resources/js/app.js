import './bootstrap';

import {createApp, defineComponent} from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import DispatchJobs from './components/DispatchJobs.vue';

const app = createApp(defineComponent({}));
app.component('dispatch-jobs',DispatchJobs);
app.use(ElementPlus);
app.mount('#app')
