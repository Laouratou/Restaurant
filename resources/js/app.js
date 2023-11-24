import './bootstrap';

import { createApp } from "vue/dist/vue.esm-bundler.js";
import App from "./components/AppComponent.vue";

import Router from'./router'

const app = createApp({
    components:{
        'menugeneral':App,
        
    }
});

app.use(Router)
app.mount("#app");
