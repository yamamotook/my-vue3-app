import { createApp } from "vue";
import App from "./App.vue";
import router from "./route";
import { store, key } from "./store";
const app = createApp(App).use(router);
app.use(store, key);
app.mount("#app");
