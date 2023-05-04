// custom_build.ts
import { build } from "vite";
import monkey from "vite-plugin-monkey";
// @ts-ignore
import path from "path";

// @ts-ignore
await build({
    configFile: false,
    resolve: {
        alias: {
            src: path.resolve("./src"),
        },
    },
    plugins: [
        monkey({
            entry: "src/inject-moosocket.ts",
            userscript: {
                name: "moolite-dev",
                icon: "https://www.milkywayidle.com/favicon.svg",
                description: "Injecting the MooSocket",
                "run-at": "document-start",
                namespace: "123ishaTest",
                match: ["*://*www.milkywayidle.com/*", "*://*test.milkywayidle.com/*"],
            },
            build: {
                fileName: "moolite-dev.user.js",
            },
        }),
    ],
});
