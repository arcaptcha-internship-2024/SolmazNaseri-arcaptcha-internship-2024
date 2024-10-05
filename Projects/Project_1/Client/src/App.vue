<template>
  <div id="app">
    <UserForm />
  </div>
</template>

<script>
import UserForm from './components/UserForm.vue';
import AdminLogin from './components/AdminLogin.vue';

export default {
  name: 'App',
  components: {
    UserForm,
    AdminLogin
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
