<template>
    <div class="space-y-6 sm:px-6 lg:col-span-9 lg:px-0">
        <section aria-labelledby="personal-details-heading">
            <form @submit.prevent="updateInfo">
                <div class="shadow sm:overflow-hidden sm:rounded-md">
                    <div class="px-4 py-6 bg-white sm:p-6">
                        <div>
                            <h2 id="personal-details-heading"
                                class="text-lg font-medium leading-6 text-gray-900">Personal details</h2>
                        </div>

                        <div class="grid grid-cols-4 gap-6 mt-6">
                            <div class="col-span-4 sm:col-span-2">
                                <label for="first-name"
                                       class="block text-sm font-medium text-gray-700">First name</label>
                                <input type="text"
                                       name="first-name"
                                       id="first-name"
                                       autocomplete="given-name"
                                       :placeholder="userStore.user.firstName"
                                       v-model="firstName"
                                       class="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:border-sea-900 focus:outline-none focus:ring-sea-900 sm:text-sm" />
                            </div>

                            <div class="col-span-4 sm:col-span-2">
                                <label for="last-name"
                                       class="block text-sm font-medium text-gray-700">Last name</label>
                                <input type="text"
                                       name="last-name"
                                       id="last-name"
                                       autocomplete="family-name"
                                       :placeholder="userStore.user.lastName"
                                       v-model="lastName"
                                       class="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:border-sea-900 focus:outline-none focus:ring-sea-900 sm:text-sm" />
                            </div>

                            <div class="col-span-4 sm:col-span-2">
                                <label for="about"
                                       class="block text-sm font-medium text-gray-700">About</label>
                                <div class="mt-1">
                                    <textarea rows="4"
                                              name="about"
                                              id="about"
                                              :placeholder="userStore.user.about"
                                              v-model="about"
                                              class="block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                                </div>
                            </div>

                            <div class="col-span-4 sm:col-span-2">
                                <div class="sm:col-span-6">
                                    <label for="photo"
                                           class="block text-sm font-medium text-blue-gray-900">Photo</label>
                                    <div class="flex items-center mt-1">
                                        <img class="inline-block object-cover w-24 h-24 rounded-full"
                                             :src="userStore.user.avatar"
                                             alt="Avatar Picture" />
                                        <div class="flex ml-3">
                                            <div
                                                 class="relative flex items-center px-3 py-2 bg-white border rounded-md shadow-sm cursor-pointer border-blue-gray-300 focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2 focus-within:ring-offset-blue-gray-50 hover:bg-blue-gray-50">
                                                <label for="user-photo"
                                                       class="relative text-sm font-medium pointer-events-none text-blue-gray-900">
                                                    <span>Change</span>
                                                    <span class="sr-only"> user photo</span>
                                                </label>
                                                <input id="user-photo"
                                                       name="user-photo"
                                                       type="file"
                                                       class="absolute inset-0 w-full h-full border-gray-300 rounded-md opacity-0 cursor-pointer" />
                                            </div>
                                            <button type="button"
                                                    class="px-3 py-2 ml-2 text-sm font-medium bg-transparent border border-transparent rounded-md text-blue-gray-900 hover:text-red-500">Remove</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="px-4 py-3 text-right bg-gray-50 sm:px-6">
                        <button type="submit"
                                class="inline-flex justify-center px-4 py-2 text-sm font-medium text-white border border-transparent rounded-md shadow-sm bg-sea-700 hover:bg-sea-600 focus:outline-none focus:ring-2 focus:ring-sea-600 focus:ring-offset-2">Save</button>
                    </div>
                </div>
            </form>
        </section>

        <section aria-labelledby="account-heading">
            <div class="shadow sm:overflow-hidden sm:rounded-md">
                <div class="px-4 py-6 bg-white sm:p-6">
                    <div>
                        <h2 id="account-heading"
                            class="text-lg font-medium leading-6 text-gray-900">Account</h2>
                        <p class="mt-1 text-sm text-gray-500">Note that email address can be only changed by contacting
                            customer support</p>
                    </div>

                    <div class="divide-y divide-gray-200">
                        <div class="mt-6">
                            <dl class="divide-y divide-gray-200">
                                <div class="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:pt-5">
                                    <dt class="text-sm font-medium text-gray-500">Email</dt>
                                    <dd class="flex mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                        <span class="flex-grow">{{ userStore.user.email }}</span>
                                    </dd>
                                </div>
                                <div
                                     class="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:border-b sm:border-gray-200 sm:py-5">
                                    <dt class="text-sm font-medium text-gray-500">Password</dt>
                                    <dd class="flex mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                        <span class="flex-grow">********</span>
                                        <span class="flex-shrink-0 ml-4">
                                            <button type="button"
                                                    class="font-medium bg-white rounded-md text-sea-600 hover:text-sea-500 focus:outline-none focus:ring-2 focus:ring-sea-500 focus:ring-offset-2">Change</button>
                                        </span>
                                    </dd>
                                </div>
                            </dl>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section aria-labelledby="student-heading">
            <form action="#"
                  method="POST">
                <div class="shadow sm:overflow-hidden sm:rounded-md">
                    <div class="px-4 py-6 bg-white sm:p-6">
                        <div>
                            <h2 id="student-heading"
                                class="text-lg font-medium leading-6 text-gray-900">Student</h2>
                            <p class="mt-1 text-sm text-gray-500">Here you can change and modify your university
                                settings (note that when you change your key, all the other information will be updated)</p>
                        </div>

                        <div class="divide-y divide-gray-200">
                            <div class="mt-6">
                                <dl class="divide-y divide-gray-200">
                                    <div class="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:pt-5">
                                        <dt class="text-sm font-medium text-gray-500">University Name</dt>
                                        <dd class="flex mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                            <span class="flex-grow">{{ uniStore.uni.uni }}</span>
                                        </dd>
                                    </div>
                                    <div class="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:pt-5">
                                        <dt class="text-sm font-medium text-gray-500">Student Email</dt>
                                        <dd class="flex mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                            <span class="flex-grow">{{ uniStore.uni.uniEmail }}</span>
                                        </dd>
                                    </div>
                                    <div
                                         class="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:border-b sm:border-gray-200 sm:py-5">
                                        <dt class="text-sm font-medium text-gray-500">Activation Key</dt>
                                        <dd class="flex mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                            <span class="flex-grow">*****************************</span>
                                            <span class="flex-shrink-0 ml-4">
                                                <button type="button"
                                                        class="font-medium bg-white rounded-md text-sea-600 hover:text-sea-500 focus:outline-none focus:ring-2 focus:ring-sea-500 focus:ring-offset-2">Activate</button>
                                            </span>
                                        </dd>
                                    </div>
                                </dl>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </section>
        <section aria-labelledby="privacy-heading">
            <form action="#"
                  method="POST">
                <div class="shadow sm:overflow-hidden sm:rounded-md">
                    <div class="px-4 py-6 bg-white sm:p-6">
                        <div>
                            <h2 id="privacy-heading"
                                class="text-lg font-medium leading-6 text-gray-900">Privacy</h2>
                        </div>

                        <div class="pt-6 divide-y divide-gray-200">
                            <div class="">
                                <ul role="list"
                                    class="mt-2 divide-y divide-gray-200">
                                    <SwitchGroup as="li"
                                                 class="flex items-center justify-between py-4">
                                        <div class="flex flex-col">
                                            <SwitchLabel as="p"
                                                         class="text-sm font-medium text-gray-900"
                                                         passive>Make account private</SwitchLabel>
                                            <SwitchDescription class="text-sm text-gray-500">Pharetra morbi dui mi
                                                mattis tellus sollicitudin cursus pharetra.</SwitchDescription>
                                        </div>
                                        <Switch v-model="privateAccount"
                                                :class="[privateAccount ? 'bg-teal-500' : 'bg-gray-200', 'relative ml-4 inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2']">
                                            <span aria-hidden="true"
                                                  :class="[privateAccount ? 'translate-x-5' : 'translate-x-0', 'inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out']" />
                                        </Switch>
                                    </SwitchGroup>
                                    <SwitchGroup as="li"
                                                 class="flex items-center justify-between py-4">
                                        <div class="flex flex-col">
                                            <SwitchLabel as="p"
                                                         class="text-sm font-medium text-gray-900"
                                                         passive>Allow commenting</SwitchLabel>
                                            <SwitchDescription class="text-sm text-gray-500">Integer amet, nunc
                                                hendrerit adipiscing nam. Elementum ame</SwitchDescription>
                                        </div>
                                        <Switch v-model="allowCommenting"
                                                :class="[allowCommenting ? 'bg-teal-500' : 'bg-gray-200', 'relative ml-4 inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2']">
                                            <span aria-hidden="true"
                                                  :class="[allowCommenting ? 'translate-x-5' : 'translate-x-0', 'inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out']" />
                                        </Switch>
                                    </SwitchGroup>
                                    <SwitchGroup as="li"
                                                 class="flex items-center justify-between py-4">
                                        <div class="flex flex-col">
                                            <SwitchLabel as="p"
                                                         class="text-sm font-medium text-gray-900"
                                                         passive>Allow mentions</SwitchLabel>
                                            <SwitchDescription class="text-sm text-gray-500">Adipiscing est venenatis
                                                enim molestie commodo eu gravid</SwitchDescription>
                                        </div>
                                        <Switch v-model="allowMentions"
                                                :class="[allowMentions ? 'bg-teal-500' : 'bg-gray-200', 'relative ml-4 inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2']">
                                            <span aria-hidden="true"
                                                  :class="[allowMentions ? 'translate-x-5' : 'translate-x-0', 'inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out']" />
                                        </Switch>
                                    </SwitchGroup>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="px-4 py-3 text-right bg-gray-50 sm:px-6">
                        <button type="submit"
                                class="inline-flex justify-center px-4 py-2 text-sm font-medium text-white border border-transparent rounded-md shadow-sm bg-sea-700 hover:bg-sea-600 focus:outline-none focus:ring-2 focus:ring-sea-600 focus:ring-offset-2">Save</button>
                    </div>
                </div>
            </form>
        </section>

    </div>
</template>

<script setup>
import { ref } from 'vue'
import {
    Switch,
    SwitchDescription,
    SwitchGroup,
    SwitchLabel,
} from '@headlessui/vue'

const privateAccount = ref(false)
const allowCommenting = ref(true)
const allowMentions = ref(true)
</script>

<script>
import { useUserStore } from "../../store/user";
import { useUniStore } from "../../store/uni";
export default {
  components: {
  },
  data() {
    const userStore = useUserStore();
    const uniStore = useUniStore();
    return { 
        userStore, 
        uniStore,
        firstName: "",
        lastName: "",
        about: ""
     }
  },
  methods: {
    async updateInfo() {
      await this.userStore.updateInfo(this.firstName, this.lastName, this.about);
    },
  },
}
</script>