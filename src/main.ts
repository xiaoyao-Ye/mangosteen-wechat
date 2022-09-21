import { createSSRApp } from 'vue'
import App from './App.vue'

// import 'virtual:uno.css'
import './styles/reset.scss'

export function createApp() {
  const app = createSSRApp(App)

  return {
    app,
  }
}
