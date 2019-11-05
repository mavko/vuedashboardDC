<template>
  <div id="app">
    <router-view />
  </div>
</template>

import "animate.css";

<style lang="scss" scoped>
@import "@/global-styles/colors.scss";
@import "@/global-styles/typography.scss";
@import "@/global-styles/backgrounds.scss";
@import "@/global-styles/default.scss";
* {
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
}

#app {
  font-family: Camphor, Open Sans, Segoe UI, sans-serif;
  font-weight: 400;
  font-style: normal;
  -webkit-text-size-adjust: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
  -webkit-font-feature-settings: "pnum";
  font-feature-settings: "pnum";
  font-variant-numeric: proportional-nums;
}
</style>
