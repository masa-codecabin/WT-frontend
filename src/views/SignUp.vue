<template>
  <div class="signup">
    <h1>Website Tracker</h1>
    <h2>Sign up</h2>
    <input type="name" placeholder="Name" v-model="name" />
    <input type="email" placeholder="Email" v-model="email" />
    <input type="password" placeholder="Password" v-model="password" />
    <button @click="signUp">Register</button>
    <p>
      Do you have an account?
      <router-link to="/">sign in here</router-link>
    </p>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Signup",
  data() {
    return {
      name: "",
      email: "",
      password: "",
      user: null,
    };
  },
  methods: {
    signUp() {
      axios
        .post("http://localhost:3000/api/auth/", {
          name: this.name,
          email: this.email,
          password: this.password,
        })
        .then((response) => {
          localStorage.setItem(
            "access-token",
            response.headers["access-token"]
          );
          localStorage.setItem("uid", response.headers["uid"]);
          this.access_token = response.headers["access-token"];
          this.uid = response.headers["uid"];
        });
      this.$router.push("/v1/users");
    },
  },
};
</script>

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
.signup {
  margin-top: 20px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
}
input {
  margin: 10px 0;
  padding: 10px;
}
</style>
