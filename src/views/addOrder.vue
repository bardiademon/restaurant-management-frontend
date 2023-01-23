<template>
  <div class="container">
    <form>
      <h2 class="mb-3">Add Order Restaurant Management</h2>
      <div class="input">
        <label for="userId">User Id</label>
        <input
            class="form-control"
            type="number"
            name="user_id"
            v-model="data.userId"
            placeholder="user id"
        />
      </div>
      <div class="input">
        <label for="foodsId">Foods Id</label>
        <input
            class="form-control"
            type="text"
            v-model="data.foodsId"
            name="foodsId"
            placeholder="1,2,3,..."
        />
      </div>
      <div class="input">
        <label for="deliveryId">Delivery Id</label>
        <input
            class="form-control"
            type="number"
            v-model="data.deliveryId"
            name="foodsId"
            placeholder="Delivery id"
        />
      </div>
      <br/>
      <br/>
      <button type="button" @click="add" class="mt-4 btn-pers" id="login_button">
        Save
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
  userId: 0,
  foodsId: '',
  deliveryId: 0,
});

const add = () =>
{
  console.log(data.value);

  const foodsStr = data.value.foodsId.split(",");

  const foodsId = [];
  for (let i = 0; i < foodsStr.length; i++)
  {
    const item = foodsStr[i];
    if (item !== '')
    {
      foodsId[i] = parseInt(item);
    }
  }

  store.dispatch("addOrder", {user_id: data.value.userId, foods: foodsId, delivery_id: data.value.deliveryId})
      .then(() =>
      {
        console.log(store.getters.isError)
        if (store.getters.isError)
        {
          alert(store.getters.getMessageError);
        }
        else alert("Added");
      });
};
add();


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