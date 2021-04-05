<template>
  <div class="hello">
    <h1>Website Tracker</h1>
    <h2>Users List</h2>
    <section v-for="user in users" :key="user.id">
      <h3>{{ user.name }}</h3>
      <h3>{{ user.email }}</h3>
    </section>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      users: [],
    };
  },
  mounted() {
    axios
      .get(" http://localhost:3000/api/v1/users.json")
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
