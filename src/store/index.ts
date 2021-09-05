import { createStore, Store } from "vuex";
import { InjectionKey } from "vue";
import { State } from "../interface/User";

import loginUser from "./modules/user";

export const key: InjectionKey<Store<State>> = Symbol();
export const store = createStore<State>({
  modules: {
    loginUser,
  },
});
