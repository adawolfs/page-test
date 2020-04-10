<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <DotBackground msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import DotBackground from "@/components/DotBackground.vue";

export default {
  name: "Home",
  components: {
    DotBackground
  }
};
</script>

<style lang="scss">
.home {
  height: 100%;
}
</style>