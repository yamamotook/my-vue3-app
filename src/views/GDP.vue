<script lang="ts">
    import {
        defineComponent,
        ref
    } from 'vue'
    import Bar1 from '../components/Bar1.vue';
    import Bar2 from '../components/Bar2.vue';
    import {
        GDPItem
    } from '../interface/GDP'
    export default defineComponent({
        components: {
            Bar1,
            Bar2
        },
        setup() {
            const GDPListRef = ref < GDPItem[] > ([]);

            const getGDP = async () => {
                const res: GDPItem[] = await fetch('/api/GDP.json').then(resp => resp.json())

                GDPListRef.value = res;
            }
            getGDP();
            return {
                GDPList: GDPListRef
            }
        },
    })
</script>


<template>
    <h1>2019 GDP Top 5</h1>
    <div class="container">
        <Bar1 :GDPList="GDPList" />
        <Bar2 :GDPList="GDPList" />
        <!-- bar1 -->
        <!-- bar2 -->
    </div>
    <div class="controls">
        <div class="item" v-for=" (item) in GDPList" :key="item.country">
            <label>{{item.country}}</label>
            <input v-model="item.value" type="number" step="0.001" min="0" />
        </div>

    </div>
</template>


<style scoped>
    .container {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }

    .controls {
        margin: 1em;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }

    .item {
        margin: 1em;
    }

    .item label {
        margin: 0 1em;
    }

    .item input {
        height: 26px;
        font-size: 14px;
    }

    h1 {
        text-align: center;
    }
</style>