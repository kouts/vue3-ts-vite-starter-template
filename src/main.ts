import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from '@/App.vue'
import Default from '@/layouts/default/Default.vue'
import { router } from '@/router'

const app = createApp(App)

app.component('LayoutDefault', Default)
app.use(createPinia())
app.use(router)

app.mount('#app')
