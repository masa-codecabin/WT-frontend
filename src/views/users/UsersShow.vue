<template>
  <div class="hello">
    <h1>Website Tracker</h1>
    <h2>User name</h2>
    <section v-for="user in users" :key="user.id">
      <h3>{{ user.name }}</h3>
      <h3>{{ user.email }}</h3>
    </section>
    <nav>
      <router-link to="/home">Home</router-link>
      <router-link to="/search">Search</router-link>
      <router-link to="/setting">Setting</router-link>
    </nav>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      users: [],
      user_id: this.$route.params.user_id,
    };
  },
  mounted() {

    let uid = localStorage.getItem('uid')


    axios
      .get(`http://localhost:3000/api/v1/users/${this.user_id}.json`)
      .then((response) => (this.users = response.data));
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>