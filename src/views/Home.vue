<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <Header />
    <AboutMe />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/home/Header.vue";
import AboutMe from "@/components/home/AboutMe.vue";

export default {
  name: "Home",
  components: {
    Header,
    AboutMe
  }
};
</script>

<style lang="scss">
.home {
  height: 100%;
}

.wrap-banner {
  position: relative;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  display: -webkit-flex;
  display: flex;
  height: 100%;
  justify-content: center;
}
</style>