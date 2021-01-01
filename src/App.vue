<template>
  <div id="nav">
    <!-- <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> -->
    <!-- <h1> {{ count }} </h1>
    <h1> {{ eren }} </h1>
    <button @click="increment"> + </button>
    <button @click="decrement"> - </button> -->
  </div> 
  <router-view/>
</template>


<script>
import store from './store'

export default {
  name: 'App',
  store
}
</script>


<style lang="less">

</style>
