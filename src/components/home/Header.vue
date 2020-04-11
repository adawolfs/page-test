<template>
  <div class="wrap-banner">
    <div class="main-title">
      <h1>
        <span class="site-title">Alvin Estrada</span>
        <span class="site-description">Developer</span>
      </h1>
      <div class="header-icons">
        <a aria-label="Send email" href>
          <i class="icon fa fa-envelope"></i>
        </a>
        <!--a aria-label="My Twitter" target="_blank" href="https://twitter.com/{{site.twitter_username}}"><i class="icon fa fa-twitter" aria-hidden="true"></i></a-->
        <a aria-label="My Github" target="_blank" href="https://github.com/">
          <i class="icon fa fa-github-alt" aria-hidden="true"></i>
        </a>
        <a aria-label="My Linkedin" target="_blank" href="https://www.linkedin.com/in/">
          <i class="icon fa fa-linkedin" aria-hidden="true"></i>
        </a>
      </div>
      <br />
      <div class="header-links">
        <a class="link" href="#about" data-scroll>About Me</a>
        <a class="link" href="/blog">Blog</a>
      </div>
    </div>
    <vue-particles
      color="#ffffff"
      :particleOpacity="1"
      linesColor="#ffffff"
      :particlesNumber="69"
      shapeType="polygon"
      :particleSize="2"
      :linesWidth="0.6"
      :lineLinked="true"
      :lineOpacity="1"
      :linesDistance="200"
      :moveSpeed="2"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
    ></vue-particles>
  </div>
</template>

<script>
import VueParticles from "@/components/vue-particles/vue-particles.vue";

export default {
  name: "Header",
  components: {
    VueParticles
  },
  methods: {}
};
</script>

<style>
.particles-js {
  /* background-image: url("/img/space.jpg"); */
  background: #000000;
  background-size: cover;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.main-title {
  color: #fff;
  z-index: 999;
}
</style>