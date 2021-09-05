interface User {
  loginId: string;
  name: string;
}
interface LoginUser extends User {
  loginPwd: string;
}

interface UserState {
  user: User | null;
  loading: boolean;
}

interface State {
  loginUser: UserState;
}

export { User, LoginUser, UserState, State };
