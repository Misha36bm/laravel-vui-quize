import { defineConfig, loadEnv } from "vite";
import laravel from "laravel-vite-plugin";

export default defineConfig(() => {
    const env = loadEnv(mode, process.cwd(), "");

    return {
        server:
            env.APP_ENV === "local"
                ? {
                      host: "0.0.0.0",
                      port: 5173,
                      strictPort: true,
                      hmr: {
                          host: "quize.loc",
                      },
                  }
                : undefined,
        plugins: [
            laravel({
                input: [
                    "resources/sass/app.scss",
                    "resources/js/app.js"
                ],
                refresh: true,
            }),
            vue({
                template: {
                    transformAssetUrls: {
                        base: null,
                        includeAbsolute: false,
                    },
                },
            }),
        ],
        resolve: {
            alias: {
                vue: "vue/dist/vue.esm-bundler.js",
            },
        },
    };
});
