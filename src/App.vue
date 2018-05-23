<template>
  <div id="app">
      <p>divdivdivdivdivdivdivdivdivdivdivdivdivdivdivdivdivdivdivdivdiv</p>
      <favlist></favlist>
  </div>
</template>

<script>
import Favlist from './components/Favlist'

export default {
  name: 'App',
  components: {
    Favlist
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
  height:100%;
}
body,ul,p {
  margin:0;
  padding:0;
}
html,body {
  height:100%;
}
li {
  list-style: none;
}
</style>
