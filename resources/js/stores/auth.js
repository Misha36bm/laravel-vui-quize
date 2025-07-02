// stores/auth.ts
import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
    state: () => ({
        user: null,
        loaded: false,
        // user: null as null | { id: number, name: string },
        // loaded: false,
    }),
    actions: {
        async registerUser(data) {
            if (
                !data.name ||
                !data.email ||
                !data.password ||
                !data.password_confirmation
            ) {
                return false;
            }

            try {
                fetch("/api/register", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                    },
                    body: JSON.stringify({
                        name: data.name,
                        email: data.email,
                        password: data.password,
                        password_confirmation: data.password_confirmation,
                    }),
                })
                    .then((response) => response.json())
                    .then((data) => {
                        if ("success" in data && data.success) {
                            this.user = data.user;
                            this.loaded = true;
                            this.setToken(data.token);
                        }
                    });
            } catch {
                this.user = null;
                this.loaded = false;
            }

            return this.loaded;
        },

        async login(data) {
            if (!data.email || !data.password) {
                return false;
            }

            try {
                fetch("/api/login", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                    },
                    body: JSON.stringify({
                        email: data.email,
                        password: data.password,
                    }),
                })
                    .then((response) => response.json())
                    .then((data) => {
                        if ("success" in data && data.success) {
                            this.user = data.user;
                            this.loaded = true;
                            this.setToken(data.token);
                        }
                    });
            } catch {
                this.user = null;
                this.loaded = false;
            }

            return this.loaded;
        },

        async fetchUser() {
            try {
                await fetch("/api/user", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                        Authorization: "Bearer " + this.getToken(),
                    },
                })
                    .then((response) => response.json())
                    .then((data) => {
                        if ("success" in data && data.success) {
                            this.user = data.user;
                            this.loaded = true;
                        }
                    });
            } catch {
                this.user = null;
                this.loaded = false;
            }
        },

        async logout() {
            await fetch("/api/logout", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    Authorization: "Bearer " + this.getToken(),
                },
            })
                .then((response) => response.json())
                .then((data) => {
                    if ("success" in data && data.success) {
                        this.user = null;
                        this.loaded = false;
                        localStorage.removeItem("user_token");
                    }
                });
        },

        setToken(token) {
            if (token) {
                localStorage.setItem("user_token", token);
            }
        },

        getToken() {
            return localStorage.getItem("user_token");
        },

        hasToken() {
            return !!this.getToken();
        },
    },
});
