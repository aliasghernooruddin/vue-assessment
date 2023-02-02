<template>
  <v-container class="fill-height">
    <v-row justify="center" class="align-center">
      <v-col cols="12" md="3" sm="12">
        <h1 class="font-weight-bold mb-5">User Profile</h1>
        <UserForm v-model="formData" @emitInput="parentMethod" />
      </v-col>
      <v-col cols="12" md="3" sm="12">
        <UploadImage v-model="file" />
        <br>
        <v-btn :disabled="!valid || !file" color="success" @click="getFormData()" large tile>Save</v-btn>
      </v-col>
    </v-row>


    <!-- Snackbar Component Starts -->
    <v-snackbar v-model="snackbar">
      {{ text }}
      <template v-slot:action="{ attrs }">
        <v-btn color="red" text v-bind="attrs" @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
    <!-- Snackbar Component Ends -->

  </v-container>
</template>

<script>
import UserForm from '@/components/UserForm.vue'
import UploadImage from '@/components/UploadImage.vue'
import { mapMutations } from "vuex";

export default {
  name: 'HomeView',
  components: {
    UploadImage,
    UserForm
  },
  data: function () {
    return {
      formData: {
        firstName: null,
        lastName: null,
        email: null
      },
      file: null,
      valid: false,
      text: "Data Saved Successfullly!",
      snackbar: false
    }
  },
  computed: {
  },
  methods: {
    ...mapMutations([
      "saveUserData",
    ]),
    getFormData() {
      let obj = { ...this.formData, file: this.file }
      this.saveUserData(obj)
      this.snackbar = true
    },
    parentMethod(payload) {
      this.valid = payload
    },
  }
}
</script>
