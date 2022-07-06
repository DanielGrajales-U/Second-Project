<script setup>
import {dreamMethods} from '../SetUp'
import router  from '../router'

const {add} = dreamMethods();

const addAndRedirecting=(dream)=>{
  add(dream)
  router.push('/');
}
</script>


<template>
  <div class="cont">
    <h3>Create new Dream</h3>
    <hr>
    <input type="text" @keyup.enter="addAndRedirecting(dream)" v-model="dream">
    <button type="add"  @click="addAndRedirecting(dream)">Add</button>
  </div>
</template>

<style>
</style>
