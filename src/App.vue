<template>
  <div>
    <div class="nav">
      <router-link to="/Todo">todo</router-link>
      <router-link to="/Sale">Sale</router-link>
      <router-link to="/Async">Async</router-link>
      <router-link to="/GDP">GDP</router-link>
      <router-link to="/login">Login</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<style>
  html,
  body {
    margin: 0;
    padding: 0;
  }

  .nav {
    height: 50px;
    text-align: center;
    margin-bottom: 20px;
  }

  .nav>* {
    line-height: 50px;
    text-decoration: none;
    margin: 0px 20px;
  }
</style>