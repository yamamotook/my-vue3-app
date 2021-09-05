import { defineAsyncComponent, h } from "vue";
import LoadingComp from "../components/Loading.vue";
import ErrorComp from "../components/Error.vue";
import nprogress from "nprogress";
import "nprogress/nprogress.css";
window.np = nprogress;
function getRandomTime(min: number = 1000, max: number = 3000) {
  return Math.random() * (max - min) + min;
}

async function dealy(time: number): Promise<void> {
  await new Promise((r: Function) => {
    setTimeout(() => {
      r();
    }, time);
  });
}

export function getAsyncComp(path: string) {
  return defineAsyncComponent({
    loader: async () => {
      await dealy(getRandomTime(1000, 3000));
      if (Math.random() > 0.5) {
        return import(path);
      } else {
        throw TypeError("模拟网络粗错了");
      }
    },
    loadingComponent: LoadingComp,
    errorComponent: {
      render() {
        return h(ErrorComp, {}, "出错了！");
      },
    },
  });
}

export function getAsyncPage(path: string) {
  return defineAsyncComponent({
    loader: async () => {
      nprogress.start();
      await dealy(getRandomTime(1000, 3000));
      nprogress.done();
      return import(path);
    },
    loadingComponent: LoadingComp,
  });
}
