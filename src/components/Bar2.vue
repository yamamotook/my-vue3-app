<script lang="ts">
    import {
        computed,
        defineComponent,
        PropType,
        toRefs
    } from 'vue'
    import {
        GDPItem,
    } from '../interface/GDP'
    import useBar from '../composition/useBar'
    export default defineComponent({
        props: {
            //因为需要监听props的属性值变化,所以属性值最好通过Ref传入
            GDPList: {
                type: Array as PropType < GDPItem[] > ,
                required: true
            }
        },
        setup(props) {
            const {
                GDPList
            } = toRefs(props)

            const GDPListRef = computed(() => {
                return GDPList.value
            })

            return {
                ...useBar(GDPListRef)
            }
        },
    })
</script>


<template>
    <div class="bar2">
        <div class="item" v-for="item in renderList" :key="item.country">
            <label>{{item.country}}</label>
            <div class="bar" :style="{ background: item.color, width: item.size + 'px' }"></div>
        </div>
    </div>


</template>

<style scoped>
    .bar2 {
        width: 600px;
        box-sizing: border-box;
        margin: 3em;
        position: relative;
    }

    .bar2::before {
        content: "";
        display: block;
        width: 1px;
        height: 100%;
        position: absolute;
        background: #666;
        left: 50%;
    }

    .item {
        display: flex;
        height: 35px;
        line-height: 35px;
        margin: 1em 0;
        position: relative;
        justify-content: center;
        color: #fff;
    }

    .bar {
        width: 100px;
        height: 100%;
        margin-right: 1em;
        flex: 0 0 auto;
    }

    .item label {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        text-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
    }
</style>