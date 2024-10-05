<!-- src/components/AdminLogin.vue -->
<template>
    <div class="login-container">
      <h2>ورود مدیر</h2>
      <form @submit.prevent="loginAdmin">
        <div class="formBox">
          <label for="username">نام کاربری</label>
          <input v-model="username" type="text" id="username" required />
        </div>
  
        <div class="formBox">
          <label for="password">رمز عبور</label>
          <input v-model="password" type="password" id="password" required />
        </div>
  
        <button type="submit">ورود</button>
      </form>
  
      <div v-if="message" class="message">
        {{ message }}
      </div>
    </div>
  </template>
  
  <script>

  </script>
  
  <style scoped>
  .login-container {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 10px;
    background-color: #f9f9f9;
  }
  
  .formBox {
    margin-bottom: 20px;
  }
  
  label {
    display: block;
    margin-bottom: 5px;
    font-size: 18px;
  }
  
  input {
    width: 100%;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
  }
  
  button {
    background-color: #4caf50;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
 
  </style>
  