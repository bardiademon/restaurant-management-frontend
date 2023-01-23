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

</script>

<template>
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
        <button @click="removeOrder(order.id)">Delete</button>
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
</style>