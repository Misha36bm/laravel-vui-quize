import "./bootstrap";
import { createApp } from "vue";
import AppLoader from "./components/AppLoader.vue";

const app = createApp({
    data() {
        return {
            isLoaderHidden: true,
        };
    },

    components: {
        AppLoader,
    },
});

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

app.mount("#app");
