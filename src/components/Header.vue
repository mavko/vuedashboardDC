<template>
  <div id="app">
    <div id="nav" class="soft-shadow">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/SignIn">Sign In</router-link>
      <a @click="onClick">Logout</a>
    </div>
    <router-view />
  </div>
</template>
import { auth } form "@/main";

<script>
export default {
  name: "Header",
  methods: {
    onClick() {
      const user = auth.currentUser();

      user
        .logout()
        .then(response => {
          this.$router.push({name: "signin", params: { userLoggedOut: true }});
        })
        .ctach(error => {
          alert("Error", error);
        })
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/global-styles/colors.scss";
@import "@/global-styles/typography.scss";
@import "@/global-styles/backgrounds.scss";
</style>
