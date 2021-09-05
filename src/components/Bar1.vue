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

    <div class="bar1">
        <div class="item" v-for="item in renderList" :key="item.country">
            <label>{{item.country}}</label>
            <div class="bar" :style="{ background: item.color, width: item.size + 'px' }"></div>
            <div class="value">{{ item.value }}万亿</div>
        </div>

    </div>
</template>

<style scoped>
    .bar1 {
        width: 500px;
        box-sizing: border-box;
        margin: 3em;
        border-left: 1px solid #333;
    }

    .item {
        display: flex;
        height: 35px;
        line-height: 35px;
        margin: 1em 0;
        position: relative;
    }

    .bar {
        width: 100px;
        height: 100%;
        margin-right: 1em;
        flex: 0 0 auto;
    }

    .item label {
        position: absolute;
        left: -50px;
    }

    .value {
        flex: 0 0 auto;
    }
</style>