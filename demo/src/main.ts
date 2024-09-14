import { setupI18n } from '@packages/locales'
import { createApp } from 'vue'
import App from './App.vue'
import getLocale from './locales'

import './style.css'
import 'virtual:uno.css'

const app = createApp(App)

async function moutApp(nodeNmae: string) {
    await setupI18n(app, await getLocale())
    app.mount(nodeNmae)
}
moutApp('#app')
