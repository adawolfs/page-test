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
      color="#000000"
      :particleOpacity="0.7"
      linesColor="#000000"
      :particlesNumber="80"
      shapeType="circle"
      :particleSize="5"
      :linesWidth="2"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="150"
      :moveSpeed="3"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
    ></vue-particles>
  </div>
</template>

<script>
export default {
  name: "DotBackground",
  mounted: function() {
    // require('particles.min.js');
    // this.$nextTick(() => {
    //   this.initParticles();
    // });
  },
  methods: {}
};
</script>

<style>
.particles-js {
  background-size: cover;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
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

.main-title {
  z-index: 999;
}
</style>