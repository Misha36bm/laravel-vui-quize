import "./bootstrap";
import { createApp } from "vue";
import router from "./router";

const app = createApp({});

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
