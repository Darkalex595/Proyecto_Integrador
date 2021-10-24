<template>
  <div id="app">
    <myheader></myheader>
    <router-view/>
  </div>
</template>

<script>
import header from '@/components/header.vue'
export default {
  name: 'App',
  components: {
    myheader: header
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}

html{
  margin: 0;
  padding: 0;
  height: 100%;
}
body{
  margin: 0;
  padding: 0;
  height: 100%;
}
</style>
