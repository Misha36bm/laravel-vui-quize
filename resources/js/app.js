import "./bootstrap";
import { createApp } from "vue";
import router from "./router";
import pinia from "./storage";
import App from "./components/App.vue";
import { useCsrfStore } from "./stores/csrf";

const app = createApp(App).use(router).use(pinia);

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

const csrf = useCsrfStore();
csrf.setToken(csrf.token);

app.mount("#app");
