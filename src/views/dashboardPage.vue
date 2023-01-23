<script setup>

import {computed} from "vue";

const orders = computed(() => store.getters.getOrders);

import store from "@/store";
import router from "@/router";

store.dispatch('getOrders');
const getOrders = () =>
{
  store.dispatch('getOrders')
      .then(() =>
      {
        if (store.getters.isError)
        {
          alert(store.getters.getMessageError);
        }
      });
};
getOrders();
const removeOrder = (id) =>
{
  store.dispatch('removeOrder', id)
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
  <button @click="changeRoute('add-order')">Add Order</button>
  <button @click="changeRoute('foods')">Foods</button>
  <button @click="changeRoute('users')">Users</button>
  <button @click="changeRoute('categories')">Categories</button>
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
        User
      </th>
      <th>
        Delivery
      </th>
      <th>
        Foods
      </th>
      <th>
        created at
      </th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="(order, i) in orders" :key="i">
      <td>
        {{ i }}
      </td>
      <td>
        {{ order.id }}
      </td>
      <td>
        {{ order.user.id }}
      </td>
      <td>
        {{ order.delivery.id }}
      </td>
      <td>
        {{ order.foods.length }}
      </td>
      <td>
        {{ order.created_at }}
      </td>
      <td>
        <button class="btn-delete" @click="removeOrder(order.id)">Delete</button>
      </td>
    </tr>
    </tbody>
  </table>
</template>


<style scoped>
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