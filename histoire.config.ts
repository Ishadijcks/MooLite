import { defineConfig } from 'histoire'
import { HstVue } from '@histoire/plugin-vue'

const config = defineConfig({
    plugins: [
        HstVue(),
    ],
})

export default config
