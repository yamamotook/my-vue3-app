import { UserState, User, LoginUser } from "../../interface/User";
import { login, loginOut, whoAmI } from "../../api/user";
import { ActionContext, Commit, MutationTree } from "vuex";

const state: UserState = {
  user: null,
  loading: false,
};

//定义mutaion的type.(使用常量代替时间类型是为了方便调试工具)
// mutation的type 可以抽离处理,此处Demo就不抽离了.
enum MutationTypes {
  SETLOGIN = "SET_LOGIN",
  SETLOADING = "SET_LOADING",
}

// 定义mutation的handler类型(泛型需要传入这个mutation处理的state,默认值为UserState)
interface Mutaions<S = UserState> {
  [MutationTypes.SETLOGIN]: (state: S, loginUser: LoginUser) => void;
  [MutationTypes.SETLOADING]: (state: S, loading: boolean) => void;
}

const mutations: MutationTree<UserState> & Mutaions = {
  [MutationTypes.SETLOGIN](state, payload) {
    state.user = payload;
  },
  [MutationTypes.SETLOADING](state, payload) {
    state.loading = payload;
  },
};

const actions = {
  async login(ctx: ActionContext<UserState, any>, user: LoginUser) {
    ctx.commit(SETLOGIN, true);
    const res = await login(user.loginId, user.loginPwd);
    if (res) {
      ctx.commit("setLogin", res);
    }
    ctx.commit("setLoading", false);
  },
  async loginOut(ctx: ActionContext<UserState, any>) {
    ctx.commit("setLoading", true);
    await loginOut();
    ctx.commit("setLogin", null);
    ctx.commit("setLoading", false);
  },
  async recoverLogin(ctx: ActionContext<UserState, any>) {
    ctx.commit("setLoading", true);
    const res = await whoAmI();
    ctx.commit("setLogin", res);
    ctx.commit("setLoading", false);
  },
};

export default {
  namespace: true,
  state,
  actions,
  mutations,
};
