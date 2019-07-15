<template>
  <div id="app">
    <div id="bg">
      </div>
    <div id="nav">
      <navbar></navbar>
    </div>
    <router-view/>
  </div>
</template>

<script>
import navbar from '@/components/Navbar'
export default {
  name: 'App',
  components: {
    navbar
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
#bg {
  position: fixed;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  background-image: url(./assets/bg.jpg);
  background-size: cover;
  filter: blur(10px);
  z-index: 1;
}
#nav {
  position: fixed;
  z-index: 3;
  top: 5%;
  bottom: 90%;
  left: 20px;
  right: 20px;
  font-size: 18px;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  z-index: 500;
}
#content {
  position: fixed;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  z-index: 2;
  font-size: 48px;
  transform: translateY(42%);
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
}
#sub {
  font-size: 18px;
}
</style>
