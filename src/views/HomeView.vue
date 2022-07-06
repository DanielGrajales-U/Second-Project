<script setup>
import {dreamMethods} from '../SetUp'

const {dreamsIncomplete, dreamsComplete,dreamRef, toggle,deleteDream} = dreamMethods();

if(dreamsComplete.value.length === dreamRef.value.length){
  alert("Congratulation you completed all your dreams") 
}
</script>

<template>
  <div class="cont">
    <h2>Dreams Incomplete</h2>
    <label v-if="dreamsIncomplete.length === 0">Nothing Dreams</label>
    <ul class="dreams incomplete">
      <li v-for="dre of dreamsIncomplete" :key="dre.id" @click="toggle(dre.id)">
        <input type="checkbox" >
        <label>{{dre.dream}}</label>
        <button class="btn" @click="deleteDream(dre.id)">Delete</button>
      </li>
    </ul>
    <hr>
    <h2>Dreams Complete</h2>
    <ul class="dreams complete">
        <li v-for="dre of dreamsComplete" :key="dre.id" @click="toggle(dre.id)">
        <input type="checkbox" checked>
        <label>{{dre.dream}}</label> 
        <button class="btn" @click="deleteDream(dre.id)">Delete</button>
      </li>
    </ul>
  </div>
</template>
