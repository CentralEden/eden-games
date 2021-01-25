<template>
  <div class="home">
    <GithubCorner />
    <HelloWorld msg="Welcome to Your Vue-next.js App" />
    <router-link to="/about">Go to About</router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
// @ is an alias to /src
import HelloWorld from "../components/HelloWorld.vue";
import GithubCorner from "../components/GithubCorner.vue";
export default defineComponent({
  name: "Home",
  components: {
    HelloWorld,
    GithubCorner,
  },
});
</script>