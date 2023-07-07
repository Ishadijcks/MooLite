import { defineConfig } from 'histoire'
import { HstVue } from '@histoire/plugin-vue'

const config = defineConfig({
    plugins: [HstVue()],
    setupFile: "./histoire-setup.ts",
    tree: {
        groups: [
            {
                id: "histoire-controls",
                title: "Histoire Controls",
            },
            {
                id: "design-system",
                title: "Design System",
            },
        ],
    },
})

export default config
