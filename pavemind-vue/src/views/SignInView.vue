<template>
  <div class="flex flex-col justify-center min-h-[calc(100vh_-_64px)] py-12 sm:px-6 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <h2 class="mt-6 text-3xl font-bold tracking-tight text-center text-gray-900">Sign in to your account</h2>
      <p class="mt-2 text-sm text-center text-gray-600">
        Don't have an account?
        {{ ' ' }}
        <router-link to="register"
                     class="font-medium text-sea-800 hover:text-sea-600">Click here to create your very
          own!</router-link>
      </p>
    </div>

    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div class="px-4 py-8 bg-white shadow sm:rounded-lg sm:px-10">
        <div v-if="userStore.error == true"
             class="p-4 mb-2 rounded-md bg-scarlet-50">
          <div class="ml-3 text-center">
            <h3 class="text-sm font-medium text-scarlet-800">Something went wrong</h3>
            <div class="mt-2 text-sm text-scarlet-700">
              <p>{{ userStore.error }}</p>
            </div>
          </div>
        </div>

        <div v-if="userStore.success == true"
             class="p-4 mb-2 rounded-md bg-emerald-50">
          <div class="ml-3 text-center">
            <h3 class="text-sm font-medium text-emerald-800">Success</h3>
            <div class="mt-2 text-sm text-emerald-700">
              <p>If your email is in our system you will receive a reset link shortly!</p>
            </div>
          </div>
        </div>
        <form class="space-y-6"
              @submit.prevent="login">
          <div>
            <label for="email"
                   class="block text-sm font-medium text-gray-700">Email address</label>
            <div class="mt-1">
              <input id="email"
                     name="email"
                     type="email"
                     autocomplete="email"
                     v-model="email"
                     required
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
                     autocomplete="current-password"
                     v-model="password"
                     required
                     class="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:border-sea-500 focus:outline-none focus:ring-sea-500 sm:text-sm" />
            </div>
          </div>

          <div class="flex items-center justify-between">
            <div class="flex items-center">
              <input id="remember-me"
                     name="remember-me"
                     type="checkbox"
                     class="w-4 h-4 border-gray-300 rounded text-sea-600 focus:ring-sea-500" />
              <label for="remember-me"
                     class="block ml-2 text-sm text-gray-900">Remember me</label>
            </div>

            <div class="text-sm">
              <button type="button"
                      @click="open = true"
                      class="font-medium text-sea-800 hover:text-sea-600">Forgot your password?</button>
            </div>
          </div>

          <div>
            <button type="submit"
                    class="flex justify-center w-full px-4 py-2 text-sm font-medium text-white border border-transparent rounded-md shadow-sm bg-sea-600 hover:bg-sea-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Sign
              in</button>
          </div>
        </form>
      </div>
    </div>

    <TransitionRoot as="template"
                    :show="open">
      <Dialog as="div"
              class="relative z-10"
              @close="open = false">
        <TransitionChild as="template"
                         enter="ease-out duration-300"
                         enter-from="opacity-0"
                         enter-to="opacity-100"
                         leave="ease-in duration-200"
                         leave-from="opacity-100"
                         leave-to="opacity-0">
          <div class="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" />
        </TransitionChild>

        <div class="fixed inset-0 z-10 overflow-y-auto">
          <div class="flex items-end justify-center min-h-full p-4 text-center sm:items-center sm:p-0">
            <TransitionChild as="template"
                             enter="ease-out duration-300"
                             enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                             enter-to="opacity-100 translate-y-0 sm:scale-100"
                             leave="ease-in duration-200"
                             leave-from="opacity-100 translate-y-0 sm:scale-100"
                             leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
              <DialogPanel
                           class="relative px-4 pt-5 pb-4 overflow-hidden text-left transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:w-96 sm:max-w-lg sm:p-6">
                <div>
                  <div class="flex items-center justify-center w-12 h-12 mx-auto rounded-full bg-sea-100">
                    <KeyIcon class="w-6 h-6 text-sea-600"
                             aria-hidden="true" />
                  </div>
                  <div class="mt-3 text-center sm:mt-5">
                    <DialogTitle as="h3"
                                 class="text-lg font-medium leading-6 text-gray-900">Password Reset</DialogTitle>
                    <div class="mt-2">
                      <div>
                        <label for="email"
                               class="block text-sm font-medium text-left text-gray-700">Email</label>
                        <div class="relative mt-1 rounded-md shadow-sm">
                          <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <EnvelopeIcon class="w-5 h-5 text-gray-400"
                                          aria-hidden="true" />
                          </div>
                          <input type="email"
                                 name="email"
                                 id="email"
                                 class="block w-full pl-10 border-gray-300 rounded-md focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
                  <button type="button"
                          class="inline-flex justify-center w-full px-4 py-2 text-base font-medium text-white border border-transparent rounded-md shadow-sm bg-sea-600 hover:bg-sea-700 focus:outline-none focus:ring-2 focus:ring-sea-500 focus:ring-offset-2 sm:col-start-2 sm:text-sm"
                          @click="open = false">Submit</button>
                  <button type="button"
                          class="inline-flex justify-center w-full px-4 py-2 mt-3 text-base font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-sea-500 focus:ring-offset-2 sm:col-start-1 sm:mt-0 sm:text-sm"
                          @click="open = false"
                          ref="cancelButtonRef">Cancel</button>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
  </div>
</template>

<!-- <script setup>
import { ref } from 'vue'
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { CheckIcon } from '@heroicons/vue/24/outline'

const open = ref(true)
</script> -->
<script>
import { useUserStore } from "../store/user";
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { KeyIcon } from '@heroicons/vue/24/outline'
import { EnvelopeIcon } from '@heroicons/vue/20/solid'

export default {
  components: {
    Dialog,
    DialogPanel,
    DialogTitle,
    TransitionChild,
    TransitionRoot,
    KeyIcon,
    EnvelopeIcon
  },
  setup() {
    const userStore = useUserStore();
    return { userStore };
  },
  data() {
    return {
      email: "",
      password: "",
      open: false
    };
  },
  methods: {
    async login() {
      await this.userStore.signIn(this.email, this.password);
    },
  },
}
</script>