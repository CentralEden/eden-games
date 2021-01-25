<template>
  <div class="about">
    <GithubCorner />
    <h1>This is an about page.</h1>
    <p>Thanks♪(･ω･)ﾉ</p>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import GithubCorner from "../components/GithubCorner.vue";
export default {
  name: "About",
  components: {
    GithubCorner,
  },
};
</script>

<style >
.github-corner:hover .octo-arm {
  animation: octocat-wave 560ms ease-in-out;
}
@keyframes octocat-wave {
  0%,
  100% {
    transform: rotate(0);
  }
  20%,
  60% {
    transform: rotate(-25deg);
  }
  40%,
  80% {
    transform: rotate(10deg);
  }
}
@media (max-width: 500px) {
  .github-corner:hover .octo-arm {
    animation: none;
  }
  .github-corner .octo-arm {
    animation: octocat-wave 560ms ease-in-out;
  }
}
</style>