<template>
  <div class="user-form fd-flex">
    <h1>فرم اطلاعات کاربر</h1>
    <form @submit.prevent="submitForm">
      <div class="formBox">
        <label for="fullName">نام و نام خانوادگی</label>
        <input v-model="formData.data.fullName" type="text" id="fullName" required />
      </div>
      
      <label for="organization">نام سازمان</label>
      <input v-model="formData.data.organization" type="text" id="organization" required />

      <label for="jobTitle">موقعیت شغلی</label>
      <input v-model="formData.data.jobTitle" type="text" id="jobTitle" required />

      <label for="phoneNumber">شماره تلفن</label>
      <input v-model="formData.data.phoneNumber" type="tel" id="phoneNumber" required />

      <label for="description">توضیحات</label>
      <textarea v-model="formData.data.description" id="description" rows="4"></textarea>

      <arcaptchaVue3
        :callback="callbackDef"
        :expired_callback="expired_callbackDef"
        :site_key = siteKey
      ></arcaptchaVue3>

      <button type="submit" :disabled="!captchaSolved">ارسال</button>
    </form>

    <div v-if="message" class="message">
      {{ message }}
    </div>
  </div>
</template>

<script>
import api from '../axios.js'; 
import arcaptchaVue3 from "arcaptcha-vue3"; 

export default {
  components: {
    arcaptchaVue3, 
  },
  data() {
    return {
      formData: { 
        data: {  
          fullName: "",
          organization: "",
          jobTitle: "",
          phoneNumber: "",
          description: "",
        },
        sourceType: 'json'  
      },
      message: "",
      captchaSolved: false, 
      siteKey: import.meta.env.VITE_SITE_KEY,
    };
  },
  methods: {
    callbackDef() {
      console.log("Captcha solved successfully!");
      this.captchaSolved = true; 
    },

    expired_callbackDef() {
      console.log("Captcha has expired.");
      this.captchaSolved = false; 
      this.message = "کپچا منقضی شده است، لطفاً دوباره تلاش کنید.";
    },

    async submitForm() {
 
      if (!this.captchaSolved) {
        this.message = "لطفاً کپچا را حل کنید.";
        return; 
      }

      try {
        console.log("Sending form data:", this.formData); 

        const response = await api.post("/data", this.formData);

        if (response.status === 200) {
          this.message = "اطلاعات با موفقیت ارسال شد";
          this.resetForm();
          this.captchaSolved = false; 
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
        data: {
          fullName: "",
          organization: "",
          jobTitle: "",
          phoneNumber: "",
          description: "",
        },
        sourceType: 'json' 
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

button:disabled {
  background-color: grey; 
  cursor: not-allowed; 
}

button:hover:not(:disabled) {
  background-color: #45a049; 
}

.message {
  margin-top: 20px;
  color: green;
}
</style>
