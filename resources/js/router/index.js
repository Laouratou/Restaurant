import {createRouter, createWebHistory} from 'vue-router'
import HelpComponent from '../components/HelpComponent.vue'
import ContactComponent from '../components/ContactComponent.vue'
import EnseignantComponent from '../components/EnseignantComponent.vue'

const router=createRouter({
    history : createWebHistory(),
    routes : [
        { path :'/h', component : HelpComponent },
        { path :'/c', component : ContactComponent },
        { path :'/e', component : EnseignantComponent },
        
    ]

});

export default router;