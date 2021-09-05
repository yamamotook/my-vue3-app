import { computed, Ref, watch, ref } from "vue";
import { GDPBarItem, GDPItem } from "../interface/GDP";
import gsap from "gsap";
const color = ["#334552", "#B34335", "#6E9FA5", "#A2C3AC", "#C8846C"];
export default function (GDPListRef: Ref<GDPItem[]>) {
  //找出数组中最大的GPD值
  const maxGDPValueRef = computed(() => {
    return Math.max(...GDPListRef.value.map((v) => v.value));
  });

  //计算当前item的width长度
  const getSize = (currentValue: number, maxSize: number) => {
    return (currentValue / maxGDPValueRef.value) * maxSize;
  };

  const targetListRef: Ref<GDPBarItem[]> = computed(() => {
    return GDPListRef.value.map((item, index) => ({
      ...item,
      color: color[index % GDPListRef.value.length],
      size: getSize(item.value, 400),
    }));
  });

  const renderListRef = ref<GDPBarItem[]>([]);

  watch(targetListRef, () => {
    targetListRef.value.forEach((item, index) => {
      if (!renderListRef.value[index]) {
        renderListRef.value[index] = {
          ...renderListRef.value[index],
          size: 0,
          value: 0,
        };
      }
      gsap.to(renderListRef.value[index], {
        ...item,
        duration: 1,
      });
    });
  });

  return {
    renderList: renderListRef,
  };
}
