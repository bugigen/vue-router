<template>
  <div>
    <button @click="getFetchGet">Fetch Get</button>
    <template v-if="responseGet">
    {{ responseGet }}
    </template>
    <br>
    <button @click="getFetchPost">Fetch Post</button>
    {{ responsePost }}
  </div>
</template>

<script>
import {reactive} from "vue";

export default {
  name: "ArticleComponent",
  data() {
    return {}
  },
  methods: {},
  setup() {
    let responseGet = reactive({});
    let responsePost = reactive({});
    const url = "http://localhost:3000/Cases";
    const part = {
      id: Math.random(),
      name: 'Comp',
      price: 1000,
      availability: true
    }

    let getFetchGet = async () => {
      const response = await fetch(url);
      responseGet = await response.json();
      console.log(responseGet)
    }

    let getFetchPost = async () => {
      let response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(part)
      })
      responsePost = await response.json();
      console.log(responsePost)
    }
    return {
      responseGet,
      responsePost,
      getFetchGet,
      getFetchPost,
    };
  },
}
</script>

<style scoped>

</style>