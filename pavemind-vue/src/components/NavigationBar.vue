<template>
    <Disclosure as="nav"
                class="bg-white shadow"
                v-slot="{ open }">
        <div class="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div class="relative flex justify-between h-16">
                <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
                    <!-- Mobile menu button -->
                    <DisclosureButton
                                      class="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sea-900">
                        <span class="sr-only">Open main menu</span>
                        <Bars3BottomLeftIcon v-if="!open"
                                             class="block w-6 h-6"
                                             aria-hidden="true" />
                        <XMarkIcon v-else
                                   class="block w-6 h-6"
                                   aria-hidden="true" />
                    </DisclosureButton>
                </div>
                <div class="flex items-center justify-center flex-1 sm:items-stretch sm:justify-start">
                    <div class="flex items-center flex-shrink-0">
                        <img class="block w-auto h-10 lg:hidden"
                             src="/logo-with-text-horizontal.svg"
                             alt="Your Company" />
                        <img class="hidden w-auto h-10 lg:block"
                             src="/logo-with-text-horizontal.svg"
                             alt="Your Company" />
                    </div>
                    <div class="hidden sm:ml-6 sm:flex sm:space-x-4">
                        <router-link to="/"
                                     class="inline-flex items-center px-1 pt-1 text-base font-medium text-gray-500 border-b-2 border-transparent hover:border-gray-300 hover:text-gray-700">Main
                            Page</router-link>
                        <router-link to="/articles"
                                     class="inline-flex items-center px-1 pt-1 text-base font-medium text-gray-500 border-b-2 border-transparent hover:border-gray-300 hover:text-gray-700">Articles</router-link>
                        <router-link to="/community"
                                     class="inline-flex items-center px-1 pt-1 text-base font-medium text-gray-500 border-b-2 border-transparent hover:border-gray-300 hover:text-gray-700">Community</router-link>
                        <router-link to="/diary"
                                     v-if="userStore.isLoggedIn"
                                     class="inline-flex items-center px-1 pt-1 text-base font-medium text-gray-500 border-b-2 border-transparent hover:border-gray-300 hover:text-gray-700">Diary</router-link>
                        <router-link to="/pricing"
                                     class="inline-flex items-center px-1 pt-1 text-base font-medium text-gray-500 border-b-2 border-transparent hover:border-gray-300 hover:text-gray-700">Pricing</router-link>

                    </div>
                </div>
                <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                    <button type="button"
                            class="p-1 text-gray-400 bg-white rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-sea-500 focus:ring-offset-2">
                        <span class="sr-only">View notifications</span>
                        <BellIcon class="w-6 h-6"
                                  aria-hidden="true" />
                    </button>

                    <!-- Profile dropdown -->
                    <Menu as="div"
                          class="relative ml-3"
                          v-if="userStore.isLoggedIn">
                        <div>
                            <MenuButton
                                        class="flex text-sm bg-white rounded-full focus:outline-none focus:ring-2 focus:ring-sea-900 focus:ring-offset-2">
                                <span class="sr-only">Open user menu</span>
                                <img class="object-cover w-8 h-8 rounded-full"
                                     :src="userStore.user.avatar"
                                     alt="" />
                            </MenuButton>
                        </div>
                        <transition enter-active-class="transition duration-200 ease-out"
                                    enter-from-class="transform scale-95 opacity-0"
                                    enter-to-class="transform scale-100 opacity-100"
                                    leave-active-class="transition duration-75 ease-in"
                                    leave-from-class="transform scale-100 opacity-100"
                                    leave-to-class="transform scale-95 opacity-0">
                            <MenuItems
                                       class="absolute right-0 z-10 w-48 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                <MenuItem v-slot="{ active }">
                                <router-link to="profile"
                                             :class="[
                                                 active ? 'bg-gray-100' : '',
                                                 'block px-4 py-2 text-sm text-gray-700',
                                             ]">Your Profile</router-link>
                                </MenuItem>
                                <MenuItem v-slot="{ active }">
                                <button @click="signOut"
                                        :class="[
                                            active ? 'bg-gray-100' : '',
                                            'block px-4 py-2 text-sm text-gray-700',
                                        ]">Sign out</button>
                                </MenuItem>
                            </MenuItems>
                        </transition>
                    </Menu>

                    <Menu as="div"
                          class="relative ml-3"
                          v-if="!userStore.isLoggedIn">
                        <div>
                            <MenuButton
                                        class="flex text-sm bg-white rounded-full focus:outline-none focus:ring-2 focus:ring-sea-900 focus:ring-offset-2">
                                <span class="sr-only">Open user menu</span>
                                <UserIcon class="w-8 h-8 text-gray-600 rounded-full bg-gray-300/70" />
                            </MenuButton>
                        </div>
                        <transition enter-active-class="transition duration-200 ease-out"
                                    enter-from-class="transform scale-95 opacity-0"
                                    enter-to-class="transform scale-100 opacity-100"
                                    leave-active-class="transition duration-75 ease-in"
                                    leave-from-class="transform scale-100 opacity-100"
                                    leave-to-class="transform scale-95 opacity-0">
                            <MenuItems
                                       class="absolute right-0 z-10 w-48 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                <MenuItem v-slot="{ active }">
                                <router-link to="/login"
                                             class="block px-4 py-2 text-sm text-gray-700">Sign In</router-link>
                                </MenuItem>
                                <MenuItem v-slot="{ active }">
                                <router-link to="/register"
                                             class="block px-4 py-2 text-sm text-gray-700">Sign Up</router-link>
                                </MenuItem>
                            </MenuItems>
                        </transition>
                    </Menu>
                </div>
            </div>
        </div>

        <DisclosurePanel class="sm:hidden">
            <div class="pt-2 pb-4 space-y-1">
                <DisclosureButton as="div">
                    <router-link class="block py-2 pl-3 pr-4 text-base font-medium text-gray-500 border-l-4 border-transparent hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
                                 to="/">Main Page</router-link>
                </DisclosureButton>
                <DisclosureButton as="div">
                    <router-link class="block py-2 pl-3 pr-4 text-base font-medium text-gray-500 border-l-4 border-transparent hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
                                 to="articles">Articles</router-link>
                </DisclosureButton>
                <DisclosureButton as="div">
                    <router-link class="block py-2 pl-3 pr-4 text-base font-medium text-gray-500 border-l-4 border-transparent hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
                                 to="community">Community</router-link>
                </DisclosureButton>
                <DisclosureButton as="div">
                    <router-link class="block py-2 pl-3 pr-4 text-base font-medium text-gray-500 border-l-4 border-transparent hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
                                 v-if="userStore.isLoggedIn"
                                 to="diary">Diary</router-link>
                </DisclosureButton>
                <DisclosureButton as="div">
                    <router-link class="block py-2 pl-3 pr-4 text-base font-medium text-gray-500 border-l-4 border-transparent hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
                                 to="pricing">Pricing</router-link>
                </DisclosureButton>
            </div>
        </DisclosurePanel>
    </Disclosure>
</template>

<script>
import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
} from "@headlessui/vue";
import { Bars3BottomLeftIcon, BellIcon, XMarkIcon } from "@heroicons/vue/24/outline";
import { UserIcon } from "@heroicons/vue/20/solid";
import { useUserStore } from "../store/user";
import logoSvg from '/logo-with-text-horizontal.svg'


export default {
    components: {
        Disclosure,
        DisclosureButton,
        DisclosurePanel,
        Menu,
        MenuButton,
        MenuItem,
        MenuItems,
        Bars3BottomLeftIcon,
        BellIcon,
        XMarkIcon,
        UserIcon,
    },
    setup() {
        const userStore = useUserStore();
        return { userStore };
    },
    methods: {
        async signOut() {
            localStorage.removeItem('token');
        }
    }
}
</script>

<style scoped>
div[id*="headlessui-disclosure-panel"] a.router-link-exact-active {
    @apply bg-sea-200 text-sea-900 border-sea-800;
}

a.router-link-active {
    @apply border-sea-900 text-gray-900;
}
</style>

