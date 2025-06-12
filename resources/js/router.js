import { createWebHistory, createRouter } from "vue-router";
import HomeView from "./components/views/HomeView.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: HomeView
        },
    ],
});

export default router;
