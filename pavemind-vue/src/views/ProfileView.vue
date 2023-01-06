<template >
    <div class="min-h-[calc(100vh_-_64px)] bg-gray-100">
  
      <main class="pb-10 mx-auto max-w-7xl lg:py-12 lg:px-8">
        <div class="lg:grid lg:grid-cols-12 lg:gap-x-5">
          <aside class="px-2 py-6 sm:px-6 lg:col-span-3 lg:py-0 lg:px-0">
            <nav class="space-y-1">
              <router-link v-for="item in subNavigation" :key="item.name" :to="item.href" class="flex items-center px-3 py-2 text-sm font-medium text-gray-900 rounded-md hover:text-gray-900 hover:bg-gray-50 group" :aria-current="item.current ? 'page' : undefined">
                <component :is="item.icon" :class="[item.current ? 'text-sea-500' : 'text-gray-400 group-hover:text-gray-500', 'flex-shrink-0 -ml-1 mr-3 h-6 w-6']" aria-hidden="true" />
                <span class="truncate">{{ item.name }}</span>
              </router-link>
            </nav>
          </aside>
          <router-view></router-view>
        </div>
      </main>
    </div>
  </template>
  
  <script setup>
  
  import {
    BellIcon,
    CogIcon,
    CreditCardIcon,
    BookmarkIcon,
  } from '@heroicons/vue/24/outline'
  
  const subNavigation = [
    { name: 'Account', href: '/profile', icon: CogIcon },
    { name: 'Bookmarks', href: '/profile/bookmarks', icon: BookmarkIcon },
    { name: 'Notifications', href: '/profile/notifications', icon: BellIcon },
    { name: 'Plan & Billing', href: '/profile/billing', icon: CreditCardIcon },
  ]
  </script>
  
<style scoped>
/* a.router-link-exact-active {
    @apply bg-sea-200 text-sea-900 border-sea-800;
} */

a.router-link-exact-active {
    @apply bg-gray-50 text-sea-600 hover:bg-white;
}
</style>