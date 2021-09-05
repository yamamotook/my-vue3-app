<script lang="ts">
    import {
        computed,
        defineComponent,
        ref
    } from 'vue'
    import {
        useStore
    } from 'vuex'
    import {
        key
    } from '../store'

    export default defineComponent({
        setup() {
            const loginIdRef = ref('');
            const loginPwdRef = ref('');
            const store = useStore(key)

            const handleLoginOut = () => {
                store.dispatch('loginUser/loginOut');
            }

            const handleLoginSubmit = () => {
                store.dispatch('login')
            }

            return {
                loginId: loginIdRef,
                loginPwd: loginPwdRef,
                loading: computed(() => store.state.loginUser.loading),
                user: computed(() => store.state.loginUser.user)
            }
        },
    })
</script>

<template>
    <div class="nav" v-if="user">
        <span>{{ user.name }}</span>
        <a class="ml-5" href="" @click.prevent="handleLoginOut">退出</a>
    </div>
    <form>
        <div class="form-item">
            <label>账号：</label>
            <input type="text" v-model="loginId" />
        </div>
        <div class="form-item">
            <label>密码：</label>
            <input type="password" v-model="loginPwd" />
        </div>
        <div class="form-item">
            <label></label>
            <button :disabled="loading">{{ loading ? "loading..." : "登录" }}</button>
        </div>
    </form>
</template>

<style scoped>
    .nav {
        padding: 30px;
    }

    .nav a {
        font-weight: bold;
        color: #2c3e50;
    }

    .nav .ml-5 {
        margin-left: 5px;
    }

    .form-item {
        margin: 1em auto;
        width: 300px;
        display: flex;
        align-items: center;
    }

    .form-item input {
        height: 26px;
        font-size: 14px;
        flex: 1 1 auto;
    }

    .form-item label {
        width: 70px;
    }

    .form-item button {
        flex: 1 1 auto;
        background: #50936c;
        border: none;
        outline: none;
        color: #fff;
        border-radius: 5px;
        height: 35px;
        font-size: 16px;
    }
</style>