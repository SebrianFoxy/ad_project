import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import BuyAdModal from './views/Shared/BuyAdModel'


loadFonts()

createApp(App)
  .use(router)
  .use(vuetify)
  .component("buy-ad-modal",BuyAdModal)
  .mount('#app')
