<template>
  <div class="container">
    <form>
      <h2 class="mb-3">Add User Restaurant Management</h2>
      <div class="input">
        <label for="name">Name</label>
        <input
            class="form-control"
            type="text"
            name="name"
            v-model="data.name"
            placeholder="Name"
        />
      </div>
      <div class="input">
        <label for="username">Username</label>
        <input
            class="form-control"
            type="text"
            v-model="data.username"
            name="username"
            placeholder="Username"
        />
      </div>
      <div class="input">
        <label for="password">Password</label>
        <input
            class="form-control"
            type="password"
            v-model="data.password"
            name="password"
            placeholder="Password"
        />
      </div>
      <div class="input">
        <label for="phone">Phone</label>
        <input
            class="form-control"
            type="tel"
            v-model="data.phone"
            name="phone"
            placeholder="Phone"
        />
      </div>
      <div class="input">
        <label for="address">Address</label>
        <input
            class="form-control"
            type="text"
            v-model="data.address"
            name="address"
            placeholder="Address"
        />
      </div>
      <div class="input">
        <label for="role">Role</label>
        <input
            class="form-control"
            type="text"
            v-model="data.role"
            name="role"
            placeholder="ADMIN , USER , CUSTOMER"
        />
      </div>
      <div class="input">
        <label for="profile_picture">Profile picture</label>
        <input
            class="form-control"
            type="file"
            id="profile_picture"
            name="profile_picture"
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
  name: '',
  username: '',
  password: '',
  phone: '',
  address: '',
  role: '',
  profile_picture: null
});

const add = () =>
{
  data.value.profile_picture = document.getElementById("profile_picture").files[0];

  store.dispatch("addUser", data.value)
      .then(() =>
      {
        if (store.getters.isUserError)
        {
          alert(store.getters.getUserMessageError);
        }
        else alert("Added");
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