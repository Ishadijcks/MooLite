import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import monkey, { cdn } from "vite-plugin-monkey";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            src: path.resolve("./src"),
        },
    },
    plugins: [
        vue(),
        monkey({
            entry: "src/main.ts",
            userscript: {
                icon: "https://www.milkywayidle.com/favicon.svg",
                namespace: "123ishaTest",
                match: ["https://www.milkywayidle.com/game", "https://test.milkywayidle.com/game"],
            },
            build: {
                externalGlobals: {
                    vue: cdn.jsdelivr("Vue", "dist/vue.global.prod.js"),
                },
            },
        }),
    ],
});
