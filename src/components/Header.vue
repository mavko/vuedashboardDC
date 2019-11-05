<template>
  <div id="app">
    <div id="nav" class="soft-shadow">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/SignIn">Sign In</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style lang="scss" scoped>
@import "@/global-styles/colors.scss";
@import "@/global-styles/typography.scss";
@import "@/global-styles/backgrounds.scss";
</style>
