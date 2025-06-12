import "./bootstrap";
import { createApp } from "vue";
import router from "./router";
import App from "./components/App.vue";

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

app.use(router).mount("#app");
