import { defineStore } from "pinia";

export const useCsrfStore = defineStore("csrf", {
    state: () => ({
        token:
            document
                .querySelector('meta[name="csrf-token"]')
                ?.getAttribute("content") || null,
    }),

    actions: {
        setToken(token) {
            if (token) {
                this.token = token;
            }
        },
        async refreshToken() {
            let token = await (await fetch("/csrf-token")).text();

            if (token) {
                this.setToken(token);
            }
        },
    },
});
