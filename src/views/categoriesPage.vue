<script setup>

import {computed} from "vue";

const categories = computed(() => store.getters.getCategories);

import store from "@/store";
import router from "@/router";

const getCategories = () =>
{
  store.dispatch('getCategories')
      .then(() =>
      {
        if (store.getters.isError)
        {
          alert(store.getters.getMessageError);
        }
      });
};
getCategories();
const removeCategory = (id) =>
{
  store.dispatch('removeCategory', id)
      .then(() =>
      {
        if (store.getters.isError)
        {
          alert(store.getters.getMessageError);
        }
      });
};

const changeRoute = (name) =>
{
  router.push(name);
};

</script>

<template>
  <br/>
  <button @click="changeRoute('add-category')">Add Category</button>
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
        Name
      </th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="(category, i) in categories" :key="i">
      <td>
        {{ i }}
      </td>
      <td>
        {{ category }}
      </td>
      <td>
        <button class="btn-delete" @click="removeCategory(category)">Delete</button>
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

.btn-delete
{
  background-color: #FF4742;
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