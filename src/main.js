import { createApp } from 'vue';
import App from './App.vue';
import { createRouter,createWebHistory } from 'vue-router';
import Home from './components/Home.vue';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import City from './components/City';
import houeses from './components/houeses';
import createlist from './components/createlist';
import Detaildescription from './components/Detaildescription';
import emptyimg from './components/emptyimg';





const routes=[
    {path: '/', component: Home },
    {path:'/AboutUs',component: AboutUs},
    {path: '/ContactUs',component: ContactUs},
    {path: '/City',component: City},
    {path:'/houeses',component:houeses},
    {path:'/createlist',component:createlist},
    {path:'/Detaildescription/:id',component:Detaildescription},
    {path:'/emptyimg',component:emptyimg},
  



    
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});
 
const app=createApp(App);
app.use(router);

app.mount('#app');
