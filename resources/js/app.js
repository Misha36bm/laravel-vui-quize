import "./bootstrap";
import { createPinia } from "pinia";
import { createApp } from "vue";
import router from "./router";
import App from "./components/App.vue";
import { useCsrfStore } from "./stores/csrf";

const pinia = createPinia();
const app = createApp(App);

Object.entries(import.meta.glob("./**/*.vue", { eager: true })).forEach(
    ([path, definition]) => {
        app.component(
            path
                .split("/")
                .pop()
                .replace(/\.\w+$/, ""),
            definition.default
        );
    }
);

app.use(router).use(pinia);

const csrf = useCsrfStore();
csrf.setToken(csrf.token);

app.mount("#app");
