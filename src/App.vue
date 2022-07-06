<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { dreamMethods} from './SetUp'
import dreamService from './services/DreamServices'
import {ref} from 'vue'
const {update} = dreamMethods();

const isLoading = ref(true);
async function prefetch(){
  update(await dreamService.getTodos());
  isLoading.value = false;
}
prefetch();
</script>

<template>
  <div class="container">
    <div class="loading" v-if="isLoading">
      <div class="load ld"></div>
      <label class="ld label">Loading Dreams...</label>
    </div>
    <template v-if="!isLoading">
      <ul>
      <RouterLink to="/">Dreams</RouterLink>
      <RouterLink to="/about">New Dream</RouterLink>
    </ul>
    <RouterView/>
    </template>
  </div>
</template>

<style>
@import '@/assets/base.css';
</style>
