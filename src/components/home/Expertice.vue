<template>
  <div>
    <b-card-group deck>
      <b-card v-for="(skill, index) in skills" :key="index" header-tag="header" footer-tag="footer">
        <!-- <template v-slot:header>
          <h6 class="mb-0">{{skill.name}}</h6>
        </template>-->
        <b-card-text>{{skill.name}}</b-card-text>

        <Progress
          :transitionDuration="5000"
          :radius="55"
          :strokeColor="skill.color"
          :strokeWidth="10"
          :value="skill.value"
        >
          <div class="content">
            <img
              :class="`img-fluid ${skill.customClass}`"
              :src="`${publicPath}img/icons/${skill.icon}.svg`"
            />
          </div>

          <template v-slot:footer>
            <b>{{skill.description}}</b>
          </template>
        </Progress>

        <!-- <b-button href="#" variant="primary">Go somewhere</b-button> -->
        <!-- <template v-slot:footer>
          <em>Footer Slot</em>
        </template>-->
      </b-card>
    </b-card-group>
  </div>
</template>

<script>
import Progress from "easy-circular-progress";

export default {
  name: "Expertice",
  components: {
    Progress
  },
  data: () => {
    return {
      publicPath: process.env.BASE_URL,
      items: [0, 0, 0, 0],
      skills: [
        {
          name: "Kubernetes",
          icon: "custom/kubernetes",
          value: 65,
          color: "#326DE6",
          description: "Administrator"
        },
        {
          name: "Kubernetes",
          icon: "custom/kubernetes",
          value: 85,
          color: "#326DE6",
          description: "Developer"
        },
        {
          name: "Openshift",
          icon: "custom/openshift",
          value: 80,
          color: "#DB212F",
          description: "Developer"
        },
        {
          name: "Openshift",
          icon: "custom/openshift",
          value: 60,
          color: "#DB212F",
          description: "Administrator"
        },
        {
          name: "Docker",
          icon: "docker/docker-original",
          value: 80,
          color: "#019BC6",
          description: "Developer"
        },
        {
          name: "Django",
          icon: "django/django-original",
          value: 75,
          color: "#003A2B",
          description: "Developer"
        },
        {
          name: "Laravel",
          icon: "laravel/laravel-plain",
          value: 75,
          customClass: "icon-padding",
          color: "#FD4F31",
          description: "Developer"
        },
        {
          name: "VueJS",
          icon: "vuejs/vuejs-original",
          value: 75,
          customClass: "icon-padding icon-padding-t15",
          color: "#41B883",
          description: "Developer"
        },
        {
          name: "GoLang",
          icon: "go/go-original",
          value: 65,
          // customClass: "icon-padding icon-padding-t15",
          color: "#6AD7E5",
          description: "Developer"
        },
        {
          name: "Java",
          icon: "java/java-original",
          value: 55,
          // customClass: "icon-padding icon-padding-t15",
          color: "#6AD7E5",
          description: "Developer"
        },
        {
          name: "Python",
          icon: "python/python-original",
          value: 55,
          customClass: "icon-padding-t5",
          color: "#3873A3",
          description: "Developer"
        },
        {
          name: "MySQL",
          icon: "mysql/mysql-original",
          value: 70,
          customClass: "icon-padding",
          color: "#00618A",
          description: "Developer"
        },
        {
          name: "Flutter",
          icon: "flutter/flutter-original",
          value: 70,
          customClass: "icon-padding-r15",
          color: "#42A5F5",
          description: "Developer"
        },
        {
          name: "Linux",
          icon: "linux/linux-original",
          value: 55,
          // customClass: "icon-padding icon-padding-t15",
          color: "#905600",
          description: "Administrator"
        }
      ]
    };
  }
};
</script>

<style>
.icon-padding {
  padding: 10px;
}
.icon-padding-r15 {
  padding-right: 15px;
}
.icon-padding-l20 {
  padding-left: 20px;
}
.icon-padding-t5 {
  padding-top: 5px;
}
.icon-padding-t15 {
  padding-top: 15px;
}
.icon-padding-t20 {
  padding-top: 20px;
}
.card {
  /* This makes row breaks on scalling  */
  min-width: 200px !important;
}
.content {
  margin: auto;
  font-size: 1vw;
  max-width: 80px;
  max-height: 80px;
}
.card-deck {
  margin-left: 0 !important;
  max-width: 100%;
}
</style>