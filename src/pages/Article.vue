<template>
<div>
  <button @click="getFetchGet">Fetch Get</button>
  {{responseGet}}
  <br>
  <button @click="getFetchPost">Fetch Post</button>
  {{responsePost}}
</div>
</template>

<script>
import {ref} from "vue";

export default {
  name: "ArticleComponent",
  data() {
    return {
      // responseGet: [],
      responsePost: [],
      // url: 'http://192.168.25.81:81/api/user',
      url: "http://localhost:3000/Cases",
      idRandom: Math.random(),
      part: {
        id: this.idRandom,
        name: 'Comp',
        price: 1000,
        availability: true
      }
    }
  },
  methods: {
    async getFetchGet() {
      const response = await fetch(this.url);
      this.responseGet = await response.json();
    },
    async getFetchPost() {
      let response = await fetch(this.url, {
        method: 'POST',
        // mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        // body: new URLSearchParams(this.part).toString()
        body: JSON.stringify(this.part)
      })
      this.responsePost = await response.json();
    },
  },
  setup() {
    let responseGet = ref();
    // let responsePost = ref([]);
    return {
      responseGet,
      // responsePost
    };
  },
}
</script>

<style scoped>

</style>