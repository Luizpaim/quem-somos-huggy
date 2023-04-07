import { createApp } from 'vue'
import { createPinia } from 'pinia'
import VueGtag from 'vue-gtag-next'
import PrimeVue from 'primevue/config'
import ToastService from 'primevue/toastservice'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'

import Tooltip from 'primevue/tooltip'
import Toast from 'primevue/toast'

import './assets/main.scss'
import 'primevue/resources/primevue.min.css'
import 'primevue/resources/themes/saga-blue/theme.css'
import 'primevue/resources/primevue.min.css'

const app = createApp(App)
app.use(createPinia())
app.use(VueAxios, axios)
app.use(PrimeVue)
app.use(ToastService)
app.use(VueGtag, {
  isEnabled: true,
  property: {
    id: import.meta.env.VITE_ID_GOOGLE_ANALYTICS
  }
})

app.component('ToastComponent', Toast)
app.directive('tooltip', Tooltip)

app.mount('#app')
