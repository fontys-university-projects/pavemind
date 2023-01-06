<template>
    <div class="space-y-6 sm:px-6 lg:col-span-9 lg:px-0">
        <section aria-labelledby="personal-details-heading">
            <form action="#"
                  method="POST">
                <div class="shadow sm:overflow-hidden sm:rounded-md">
                    <div class="bg-white py-6 px-4 sm:p-6">
                        <div>
                            <h2 id="personal-details-heading"
                                class="text-lg font-medium leading-6 text-gray-900">Personal details</h2>
                        </div>

                        <div class="mt-6 grid grid-cols-4 gap-6">
                            <div class="col-span-4 sm:col-span-2">
                                <label for="first-name"
                                       class="block text-sm font-medium text-gray-700">First name</label>
                                <input type="text"
                                       name="first-name"
                                       id="first-name"
                                       autocomplete="cc-given-name"
                                       class="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-sea-900 focus:outline-none focus:ring-sea-900 sm:text-sm" />
                            </div>

                            <div class="col-span-4 sm:col-span-2">
                                <label for="last-name"
                                       class="block text-sm font-medium text-gray-700">Last name</label>
                                <input type="text"
                                       name="last-name"
                                       id="last-name"
                                       autocomplete="cc-family-name"
                                       class="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-sea-900 focus:outline-none focus:ring-sea-900 sm:text-sm" />
                            </div>

                            <div class="col-span-4 sm:col-span-2">
                                <label for="comment"
                                       class="block text-sm font-medium text-gray-700">About</label>
                                <div class="mt-1">
                                    <textarea rows="4"
                                              name="comment"
                                              id="comment"
                                              class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                                </div>
                            </div>

                            <div class="col-span-4 sm:col-span-2">
                                <div class="sm:col-span-6">
                                    <label for="photo"
                                           class="block text-sm font-medium text-blue-gray-900">Photo</label>
                                    <div class="mt-1 flex items-center">
                                        <img class="inline-block h-24 w-24 rounded-full"
                                             :src="user.imageUrl"
                                             alt="Avatar Picture" />
                                        <div class="ml-3 flex">
                                            <div
                                                 class="relative flex cursor-pointer items-center rounded-md border border-blue-gray-300 bg-white py-2 px-3 shadow-sm focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2 focus-within:ring-offset-blue-gray-50 hover:bg-blue-gray-50">
                                                <label for="user-photo"
                                                       class="pointer-events-none relative text-sm font-medium text-blue-gray-900">
                                                    <span>Change</span>
                                                    <span class="sr-only"> user photo</span>
                                                </label>
                                                <input id="user-photo"
                                                       name="user-photo"
                                                       type="file"
                                                       class="absolute inset-0 h-full w-full cursor-pointer rounded-md border-gray-300 opacity-0" />
                                            </div>
                                            <button type="button"
                                                    class="ml-2 rounded-md border border-transparent bg-transparent py-2 px-3 text-sm font-medium text-blue-gray-900 hover:text-red-500">Remove</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="bg-gray-50 px-4 py-3 text-right sm:px-6">
                        <button type="submit"
                                class="inline-flex justify-center rounded-md border border-transparent bg-sea-700 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-sea-600 focus:outline-none focus:ring-2 focus:ring-sea-600 focus:ring-offset-2">Save</button>
                    </div>
                </div>
            </form>
        </section>
        <section aria-labelledby="privacy-heading">
            <form action="#"
                  method="POST">
                <div class="shadow sm:overflow-hidden sm:rounded-md">
                    <div class="bg-white py-6 px-4 sm:p-6">
                        <div>
                            <h2 id="privacy-heading"
                                class="text-lg font-medium leading-6 text-gray-900">Privacy</h2>
                        </div>

                        <div class="divide-y divide-gray-200 pt-6">
                            <div class="">
                                <ul role="list"
                                    class="mt-2 divide-y divide-gray-200">
                                    <SwitchGroup as="li"
                                                 class="flex items-center justify-between py-4">
                                        <div class="flex flex-col">
                                            <SwitchLabel as="p"
                                                         class="text-sm font-medium text-gray-900"
                                                         passive>Available to hire</SwitchLabel>
                                            <SwitchDescription class="text-sm text-gray-500">Nulla amet tempus sit
                                                accumsan. Aliquet turpis sed sit lacinia.</SwitchDescription>
                                        </div>
                                        <Switch v-model="availableToHire"
                                                :class="[availableToHire ? 'bg-teal-500' : 'bg-gray-200', 'relative ml-4 inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2']">
                                            <span aria-hidden="true"
                                                  :class="[availableToHire ? 'translate-x-5' : 'translate-x-0', 'inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out']" />
                                        </Switch>
                                    </SwitchGroup>
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
                    <div class="bg-gray-50 px-4 py-3 text-right sm:px-6">
                        <button type="submit"
                                class="inline-flex justify-center rounded-md border border-transparent bg-sea-700 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-sea-600 focus:outline-none focus:ring-2 focus:ring-sea-600 focus:ring-offset-2">Save</button>
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

const user = {
    name: 'Debbie Lewis',
    handle: 'deblewis',
    email: 'debbielewis@example.com',
    imageUrl:
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}
const availableToHire = ref(true)
const privateAccount = ref(false)
const allowCommenting = ref(true)
const allowMentions = ref(true)
</script>