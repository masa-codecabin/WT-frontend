<template>
  <div class="signin">
    <h1>Website Tracker</h1>
    <h2>Sign in</h2>
    <input type="email" placeholder="Email" v-model="email" />
    <input type="password" placeholder="Password" v-model="password" />
    <button @click="signIn">Sign In</button>
    <p>
      Do you have an account?
      <router-link to="/signup">sign up here</router-link>
    </p>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Signup",
  data() {
    return {
      email: "",
      password: "",
      user: null,
    };
  },
  methods: {
    signIn() {
      axios
        .post("http://localhost:3000/api/auth/sign_in", {
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
          this.$router.push("/usersshow");
          (error) => {
            console.log(error);
          };
        });
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
.signin {
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
