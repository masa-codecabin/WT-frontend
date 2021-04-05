<template>
  <div id="app">
    <router-view />
    <nav>
      <router-link to="/home">Home</router-link>
      <router-link to="/search">Search</router-link>
      <router-link to="/setting">Setting</router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
