<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <!-- <Home msg="Hello Vue 3 + Vite" /> -->
  <p>
    <!-- use the router-link component for navigation. -->
    <!-- specify the link by passing the `to` prop. -->
    <!-- `<router-link>` will render an `<a>` tag with the correct `href` attribute -->
    <router-link to="/">Go to Home</router-link>
    <router-link to="/about">Go to About</router-link>
  </p>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
export default defineComponent({
  name: "App",
  components: {
    Home,
    About,
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>