import { createWebHistory, createRouter } from "vue-router";
import HomeView from "./components/views/HomeView.vue";
import LoginView from "./components/views/Auth/LoginView.vue";
import RegistrationView from "./components/views/Auth/RegistrationView.vue";
import DashboardView from "./components/views/DashboardView.vue";
import CreateQuizeView from "./components/views/Quizes/CreateQuizeView.vue";
import EditQuizeView from "./components/views/Quizes/EditQuizeView.vue";
import GuestLayout from "./components/layouts/GuestLayout.vue";
import AuthLayout from "./components/layouts/AuthLayout.vue";

const routes = [
    {
        path: "/",
        component: GuestLayout,
        children: [
            {
                path: "",
                component: HomeView,
                name: "home",
            },
            {
                path: "login",
                component: LoginView,
                name: "login",
            },
            {
                path: "register",
                component: RegistrationView,
                name: "register",
            },
        ],
    },
    {
        path: "/admin",
        meta: {
            requiresAuth: true,
        },
        component: AuthLayout,
        children: [
            {
                path: "dashboard",
                component: DashboardView,
                name: "dashboard",
            },
            {
                path: "quizes",
                children: [
                    {
                        path: "create",
                        component: CreateQuizeView,
                        name: "quizes.create",
                    },
                    {
                        path: ":uuid",
                        component: EditQuizeView,
                        name: "quizes.edit",
                    },
                ],
            },
        ],
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
