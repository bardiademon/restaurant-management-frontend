<template>
  <div class="container">
    <form @submit.prevent="login">
      <h2 class="mb-3">Login</h2>
      <div class="input">
        <label for="email">Username</label>
        <input
            class="form-control"
            type="text"
            name="username"
            v-model="data.username"
            placeholder="username"
        />
      </div>
      <div class="input">
        <label for="password">Password</label>
        <input
            class="form-control"
            type="password"
            v-model="data.password"
            name="password"
            placeholder="password123"
        />
      </div>
      <div class="alternative-option mt-4">
        You don't have an account? <span @click="moveToRegister">Register</span>
      </div>
      <br/>
      <br/>
      <button type="submit" @click="doLogin" class="mt-4 btn-pers" id="login_button">
        Login
      </button>
      <div
          class="alert alert-warning alert-dismissible fade show mt-5 d-none"
          role="alert"
          id="alert_1"
      >
      </div>
    </form>
  </div>
</template>

<script setup>

import {ref} from "vue";
import store from "@/store";

const data = ref({
  username: '',
  password: '',
});

const doLogin = () =>
{
  store.dispatch('generateUserLogin', data)
      .then(() =>
      {
        if (store.getters.loginIsError)
        {
          alert(store.getters.getLoginMessageError);
        }
        else
        {
          const token = store.getters.getToken;
          document.cookie = "token=" + token;
          document.location.href = "dashboard";
        }
      });
};

</script>

<style scoped>
.container
{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid lightgray;
  padding: 4rem 4rem;
  border-radius: 5px;
  background: #fefefe;
}

.container
{
  width: 400px;
  max-width: 95%;
}

.input
{
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
}

.input > label
{
  text-align: start;
}

.input > input
{
  margin-top: 6px;
  height: 38px !important;
}

/* From uiverse.io */
.btn-pers
{
  position: relative;
  left: 50%;
  padding: 1em 2.5em;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  font-weight: 700;
  color: #000;
  background-color: #fff;
  border: none;
  border-radius: 45px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;
  cursor: pointer;
  outline: none;
  transform: translateX(-50%);
}

.btn-pers:hover
{
  background-color: #198754;
  box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
  color: #fff;
  transform: translate(-50%, -7px);
}

.btn-pers:active
{
  transform: translate(-50%, -1px);
}

/*  */
.alternative-option
{
  text-align: center;
}

.alternative-option > span
{
  color: #0d6efd;
  cursor: pointer;
}

</style>