import { createMemoryHistory, createRouter } from "vue-router";
import HomeVie from "./views/HomeView.vue";

const router = createRouter({
    history: createMemoryHistory(),
    router: [{ path: "/", component: HomeVie }],
});

export default router;
