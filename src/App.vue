<template>
  <div class="nav">
    <router-link to="/">Main</router-link> |
    <router-link to="/about">About</router-link> |
    <a @click="navigate">Article</a>
<!--    <button>Article</button>-->
  </div>

  <router-view/>
</template>
<script>
import router from "@/router/router";

export default {
  name: "App",
  components: {},
  methods: {
    navigate() {
      router.push('/article')
    }
  }
}

</script>

<style>
body {
  background: #2e8a57;
}

.nav a {
  cursor: pointer;
  text-decoration: underline;
  color: #551a8a;
}
</style>
