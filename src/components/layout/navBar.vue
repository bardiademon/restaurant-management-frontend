<script setup>
import {RouterLink} from "vue-router";
</script>

<template>
  <nav>
    <router-link to="/">Home</router-link>
    <label> | </label>
    <router-link to="/dashboard">Dashboard</router-link>
    <label> | </label>
    <router-link to="/login">Login</router-link>
    <label> | </label>
    <router-link to="/about">About</router-link>
  </nav>
</template>