<template>
  <div class="hello">
    <h1>Website Tracker</h1>
    <h2>User name</h2>
    <h3>{{ user.name }}</h3>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      user: [],
    };
  },
  mounted() {
    axios
      .get(`http://localhost:3000/api/v1/users/${1}`)
      .then((response) => (this.user = response.data));
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