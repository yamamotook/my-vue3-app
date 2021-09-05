<script setup lang="ts">
    import {
        computed,
        ref
    } from "@vue/reactivity";
    import CheckboxEditor from '../components/CheboxEditor.vue'
    const goodsListRef = ref([{
            id: 1,
            sell: true,
            title: "iphone12",
        },
        {
            id: 2,
            sell: false,
            title: "xiaomi"
        },
        {
            id: 3,
            sell: true,
            title: "huawei"
        },
        {
            id: 4,
            sell: true,
            title: "vivo"
        },
    ])
    const sallGoodsListRef = computed(() => {
        return goodsListRef.value.filter(item => item.sell);
    })
</script>

<template>
    <div class="container">
        <div class="list">
            <strong>列表:</strong>
            <div class="list">
                <CheckboxEditor v-model="item.sell" v-model:title.trim="item.title" v-for="item in goodsListRef"
                    :key="item.id" />
            </div>
        </div>
        <div>
            <strong>销售中:</strong>
            <div v-for="(item, index) in sallGoodsListRef" :key="item.id">
                <span>{{ index + 1 }}</span>
                <strong>{{ item.title }}</strong>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .container {
        margin-top: 50px;
        width: 880px;
        margin: 50px auto;
    }

    .list {
        display: flex;
        margin: 1em 0;
        align-items: center;
    }

    strong {
        margin-right: 1em;
    }
</style>