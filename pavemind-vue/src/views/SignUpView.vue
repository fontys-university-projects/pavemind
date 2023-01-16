<template>
  <div class="flex flex-col justify-center min-h-[calc(100vh_-_64px)] py-12 sm:px-6 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <h2 class="mt-6 text-3xl font-bold tracking-tight text-center text-gray-900">Sign up to your account</h2>
      <p class="mt-2 text-sm text-center text-gray-600">
        Already have an account?
        {{ ' ' }}
        <router-link to="login"
                     class="font-medium text-sea-800 hover:text-sea-600">Click here to go to the login
          page!</router-link>
      </p>
    </div>

    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div class="px-4 py-8 bg-white shadow sm:rounded-lg sm:px-10">

        <div v-if="userStore.error == true" class="mb-2 rounded-md bg-scarlet-50 p-4">
          <div class="text-center ml-3">
            <h3 class="text-sm font-medium text-scarlet-800">Something went wrong</h3>
            <div class="mt-2 text-sm  text-scarlet-700">
              <p>{{ userStore.errorMessage }}</p>
            </div>
          </div>
        </div>

        <div v-if="userStore.success == true" class="mb-2 rounded-md bg-emerald-50 p-4">
          <div class="text-center ml-3">
            <h3 class="text-sm font-medium text-emerald-800">Success</h3>
            <div class="mt-2 text-sm  text-emerald-700">
              <p>Your account has been successfully created!</p>
            </div>
          </div>
        </div>

        <form class="space-y-6"
              @submit.prevent="register">
          <div>
            <label for="email"
                   class="block text-sm font-medium text-gray-700">Email address</label>
            <div class="mt-1">
              <input id="email"
                     name="email"
                     type="email"
                     autocomplete="email"
                     required
                     v-model="email"
                     class="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:border-sea-500 focus:outline-none focus:ring-sea-500 sm:text-sm" />
            </div>
          </div>

          <div>
            <label for="password"
                   class="block text-sm font-medium text-gray-700">Password</label>
            <div class="mt-1">
              <input id="password"
                     name="password"
                     type="password"
                     min="8"
                     autocomplete="new-password"
                     required
                     v-model="password"
                     class="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:border-sea-500 focus:outline-none focus:ring-sea-500 sm:text-sm" />
            </div>

            <!-- <div class="mt-2 ml-1 text-sm text-red-700">
              <ul role="list"
                  class="list-disc space-y-1 pl-5">
                <li>Your password must be at least 8 characters</li>
              </ul>
            </div> -->
          </div>
          <div>
            <label for="confirmPassword"
                   class="block text-sm font-medium text-gray-700">Repeat Password</label>
            <div class="mt-1">
              <input id="confirmPassword"
                     name="password"
                     type="password"
                     min="8"
                     autocomplete="new-password"
                     required
                     v-model="confirmPassword"
                     class="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:border-sea-500 focus:outline-none focus:ring-sea-500 sm:text-sm" />
            </div>
          </div>

          <div>
            <button type="submit"
            :disabled="password !== confirmPassword"
                    class="flex justify-center w-full px-4 py-2 text-sm font-medium text-white border border-transparent rounded-md shadow-sm bg-sea-600 hover:bg-sea-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Sign
              up</button>
          </div>
          <p class="text-sm text-center ">By signing up you agree to the <a
               class="font-medium text-sea-800 hover:text-sea-600"
               rel="noopener noreferrer">terms of service</a></p>
        </form>

      </div>
    </div>
  </div>
</template>
  
<script>
import { useUserStore } from "../store/user";
export default {
  setup() {
    const userStore = useUserStore();
    return { userStore };
  },
  data() {
    return {
      email: "",
      password: "",
      confirmPassword: ""
    };
  },
  methods: {
    async register() {
      await this.userStore.signUp(this.email, this.password, this.confirmPassword);
    },
  },
};
</script>