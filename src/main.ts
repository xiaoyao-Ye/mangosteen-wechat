import { createSSRApp } from 'vue'
import App from './App.vue'

import './styles/reset.scss'

export function createApp() {
  const app = createSSRApp(App)

  return {
    app,
  }
}
