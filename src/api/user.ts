import { User } from "../interface/user";

function delay(duration: number) {
  return new Promise((resolve: Function) => {
    setTimeout(() => {
      resolve();
    }, duration);
  });
}

export async function login(
  loginId: string,
  loginPwd: string
): Promise<User | null> {
  await delay(1000);
  if (loginId === "admin" && loginPwd === "123123") {
    const user = {
      loginId,
      name: "管理员",
    };
    localStorage.setItem("user", JSON.stringify(user));
    return user;
  }
  return null;
}

export async function loginOut() {
  await delay(1000);
  localStorage.removeItem("user");
}

export async function whoAmI(): Promise<User | null> {
  await delay(1000);
  const user = localStorage.getItem("user");
  if (user) {
    return JSON.parse(user) as User;
  }
  return null;
}
