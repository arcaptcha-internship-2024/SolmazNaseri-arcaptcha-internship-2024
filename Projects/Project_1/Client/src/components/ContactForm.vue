<template>
  <div class="user-form fd-flex">
    <h1>فرم اطلاعات کاربر</h1>
    <form @submit.prevent="submitForm">
      <div class="formBox">
        <label for="fullName">نام و نام خانوادگی</label>
        <input v-model="formData.fullName" type="text" id="fullName" required />
      </div>
      
      <label for="organization">نام سازمان</label>
      <input v-model="formData.organization" type="text" id="organization" required />

      <label for="jobTitle">موقعیت شغلی</label>
      <input v-model="formData.jobTitle" type="text" id="jobTitle" required />

      <label for="phoneNumber">شماره تلفن</label>
      <input v-model="formData.phoneNumber" type="tel" id="phoneNumber" required />

      <label for="description">توضیحات</label>
      <textarea v-model="formData.description" id="description" rows="4"></textarea>

      <button type="submit">ارسال</button>
    </form>

    <div v-if="message" class="message">
      {{ message }}
    </div>
  </div>
</template>

<script>
import api from '../axios.js'; 

export default {
  data() {
    return {
      formData: {
        fullName: "",
        organization: "",
        jobTitle: "",
        phoneNumber: "",
        description: "",
      },
      message: "",
    };
  },
  methods: {
    async submitForm() {
      try {
        console.log("Sending form data:", this.formData); 

        const response = await api.post("/submit", this.formData);

        if (response.status === 200) {
          this.message = "اطلاعات با موفقیت ارسال شد";
          this.resetForm();
        } else {
          this.message = "پاسخ دریافتی از سرور درست نیست";
        }
      } catch (error) {
        console.error("Error:", error);
        this.message = "خطا در ارسال اطلاعات";
      }
    },
    resetForm() {
      this.formData = {
        fullName: "",
        organization: "",
        jobTitle: "",
        phoneNumber: "",
        description: "",
      };
    },
  },
};
</script>

<style scoped>
.user-form {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: lightgrey;
}

label {
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
  font-size: 20px;
}

input,
textarea {
  padding: 8px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  width: 88%;
  height: 40px;
}

button {
  background-color: #689ec9;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin: 5%;
  width: 20%;
  height: 50px;
}

button:hover {
  background-color: #45a049;
}

.message {
  margin-top: 20px;
  color: green;
}
</style>
