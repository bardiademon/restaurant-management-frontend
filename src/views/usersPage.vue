<script setup>

import {computed} from "vue";

const users = computed(() => store.getters.getUsers);

import store from "@/store";
import router from "@/router";

const getUsers = () =>
{
  store.dispatch('getUsers')
      .then(() =>
      {
        if (store.getters.isError)
        {
          alert(store.getters.getMessageError);
        }
      });
};
getUsers();

const changeRoute = (name) =>
{
  router.push(name);
};

</script>

<template>
  <br/>
  <button @click="changeRoute('add-user')">Add User</button>
  <button @click="changeRoute('dashboard')">Dashboard</button>
  <br/>
  <table>
    <thead>
    <tr>
      <th>
        <div>
          <label>#</label>
        </div>
      </th>
      <th>
        Id
      </th>
      <th>
        Name
      </th>
      <th>
        Username
      </th>
      <th>
        Phone
      </th>
      <th>
        Image
      </th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="(user, i) in users" :key="i">
      <td>
        {{ i }}
      </td>
      <td>
        {{ user.id }}
      </td>
      <td>
        {{ user.name }}
      </td>
      <td>
        {{ user.username }}
      </td>
      <td>
        {{ user.phone }}
      </td>
      <td>
        <img :src="'http://localhost:8888/users/get-image/' + user.username" alt='Image'/>
      </td>
    </tr>
    </tbody>
  </table>
</template>


<style scoped>
img
{
  vertical-align: middle;
  width: 100px;
  height: 100px;
  border-radius: 50%;
}

table
{
  width: 100%;
}

table, th, td
{
  border: 1px solid;
}


/* CSS */
button
{
  appearance: button;
  backface-visibility: hidden;
  background-color: #405cf5;
  border-radius: 6px;
  border-width: 0;
  box-shadow: rgba(50, 50, 93, .1) 0 0 0 1px inset, rgba(50, 50, 93, .1) 0 2px 5px 0, rgba(0, 0, 0, .07) 0 1px 1px 0;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Ubuntu, sans-serif;
  font-size: 100%;
  height: 44px;
  line-height: 1.15;
  margin: 15px;
  outline: none;
  overflow: hidden;
  padding: 0 25px;
  position: relative;
  text-align: center;
  text-transform: none;
  transform: translateZ(0);
  transition: all .2s, box-shadow .08s ease-in;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}


button:disabled
{
  cursor: default;
}

button
{
  box-shadow: rgba(50, 50, 93, .1) 0 0 0 1px inset, rgba(50, 50, 93, .2) 0 6px 15px 0, rgba(0, 0, 0, .1) 0 2px 2px 0, rgba(50, 151, 211, .3) 0 0 0 4px;
}
</style>