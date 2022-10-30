<template>
<div>
  <button @click="getFetchGet">Fetch Get</button>
  {{response[0]}}
  <br>
  <button @click="getFetchPost">Fetch Post</button>
  {{response2}}
</div>
</template>

<script>
export default {
  name: "ArticleComponent",
  data() {
    return {
      response: {},
      response2: {},
      url: 'http://192.168.25.81:81/api/user',
      user: {
        name: 'Kelly Hettinger',
        email: 'quincy3qq7@example.org',
        password: 123
      }

    }
  },
  methods: {
    async getFetchGet() {
      const response = await fetch(this.url);
      this.response = await response.json();
    },
    async getFetchPost() {
      const response = await fetch(this.url, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams(this.user).toString()
      })
      this.response2 = await response.json();
    },
  }
}
</script>

<style scoped>

</style>