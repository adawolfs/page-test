<template>
  <div class="wrap-banner">
    <div class="main-title header">
      <h1>
        <span class="site-title">Alvin Estrada</span>
        <span class="site-description">DevOps & Software Developer</span>
      </h1>
      <div class="header-icons">
        <a aria-label="Send email" href>
          <font-awesome-icon class="icon" :icon="['fas', 'envelope']" aria-hidden="true" />
        </a>
        <!--a aria-label="My Twitter" target="_blank" href="https://twitter.com/{{site.twitter_username}}"><i class="icon fa fa-twitter" aria-hidden="true"></i></a-->
        <a aria-label="My Github" target="_blank" href="https://github.com/">
          <font-awesome-icon class="icon" :icon="['fab', 'github']" aria-hidden="true" />
        </a>
        <a aria-label="My Linkedin" target="_blank" href="https://www.linkedin.com/in/">
          <font-awesome-icon class="icon" :icon="['fab', 'linkedin']" aria-hidden="true" />
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

<style lang="scss">
$main: #fff;
$sec: #4b5664;
$purple: #54516a;
$cut: 550px;

@import url(https://fonts.googleapis.com/css?family=Montserrat);
html {
  line-height: 1.15;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
}

.particles-js {
  /* background-image: url("/img/space.jpg"); */
  background-color: black;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.main-title {
  color: #fff;
  z-index: 999;
}

@media only screen and (min-width: 550px) {
  .site-title {
    margin: 0;
    font-size: 100px;
  }
  .site-description {
    font-size: 40px;
  }
  h1 > span {
    display: block;
  }
}
h1 {
  span {
    font-weight: bold;
  }
}
.header {
  z-index: 1;
  font-family: "Montserrat", sans-serif;
  text-align: center;
  color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  margin: 0 auto;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  .site-title {
    font-size: 50px;
    display: block;
    line-height: 1;
    color: #fff;
    @media only screen and (min-width: $cut) {
      margin: 0;
      font-size: 100px;
    }
  }
  .site-description {
    font-size: 20px;
    display: block;
    line-height: 1;
    color: #fff;
    margin-top: 10px;
    @media only screen and (min-width: $cut) {
      font-size: 40px;
    }
  }
}

.header-links {
  margin: 10px;
  .link {
    color: #fff;
    text-decoration: none;
    font-size: 15px;
    margin: 10px;
    @media only screen and (min-width: $cut) {
      font-size: 20px;
    }
  }
}

.header-icons {
  display: flex;
  justify-content: center;
  text-align: center;
  .icon {
    text-align: center;
    color: #fff;
    width: 20px;
    height: 20px;
    font-size: 20px;
    padding: 10px;
    margin: 5px;
    border-radius: 50%;
    border: 2px solid #fff;
    transition: all 0.7s;
    &:hover {
      color: $main;
      background: #fff;
    }
    &:active {
      color: $main;
      background: #fff;
    }
    @media only screen and (min-width: $cut) {
      width: 35px;
      height: 35px;
      font-size: 35px;
    }
  }
}

.down {
  color: #fff;
  position: absolute;
  bottom: 25px;
  width: 100%;
  margin: 0 auto;
  display: block;
  text-align: center;
  font-size: 30px;
  cursor: pointer;
  .icon {
    position: absolute;
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    width: 100px;
    height: 100px;
    fill: #fff;
    -webkit-animation: pulse 1.3s infinite;
    animation: pulse 1.3s infinite;
    &:hover {
      color: $sec;
    }
    &:active {
      color: $sec;
    }
  }
}
</style>