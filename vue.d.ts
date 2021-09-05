import { ComponentCustomProperties } from "vue";
import { Store } from "vuex";
import { UserState, State } from "./src/interface/User";

declare module "@vue/run-time-core" {
  interface ComponentCustomProperties {
    $store: Store<State>;
  }
}
