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
                description: "Useful plugins for Milky Way Idle",
                author: "Isha",
                "run-at": "document-start",
                namespace: "123ishaTest",
                updateURL: "https://github.com/Ishadijcks/MooLite/raw/release/dist/moolite.user.js",
                match: ["*://*www.milkywayidle.com/*", "*://*test.milkywayidle.com/*"],
            },
            build: {
                externalGlobals: {
                    vue: cdn.jsdelivr("Vue", "dist/vue.global.prod.js"),
                },
            },
        }),
    ],
});
