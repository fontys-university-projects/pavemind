<template>
    <div class="space-y-6 sm:px-6 lg:col-span-9 lg:px-0">
        <section aria-labelledby="payment-details-heading">
            <div class="shadow sm:overflow-hidden sm:rounded-md">
                <div class="bg-white py-6 px-4 sm:p-6">
                    <div>
                        <h2 id="payment-details-heading"
                            class="text-lg font-medium leading-6 text-gray-900">Bookmarks</h2>
                    </div>

                    <div class="px-4 sm:px-6 lg:px-8">
                        <div class="mt-8 flex flex-col">
                            <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                                    <div class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                                        <table class="min-w-full divide-y divide-gray-300">
                                            <tbody class="divide-y divide-gray-200 bg-white">
                                                <tr v-for="article in articles"
                                                    :key="article.email">
                                                    <td class="">
                                                        <a href="">
                                                            <div class="flex items-center">
                                                                <div class="h-24 w-40 flex-shrink-0">
                                                                <img class="object-cover w-full h-full"
                                                                     :src="article.image"
                                                                     alt="" />
                                                            </div>
                                                            <div class="ml-4 grow">
                                                                <div class="font-medium text-gray-900">{{ article.name }}
                                                                </div>
                                                            </div>
                                                        </div>
                                                        </a>
                                                    </td>
                                                    <td
                                                        class="relative whitespace-nowrap py-4 p-4 text-right w-10 text-sm font-medium sm:pr-4">
                                                        <a href="#"
                                                           class="text-indigo-600 hover:text-indigo-900"><BookmarkIcon v-if="article.bookmarked === false" class="h-7 w-7 text-gray-400" aria-hidden="true" /> <SolidBookmarkIcon v-else class="h-7 w-7 text-gray-400" aria-hidden="true" /></a>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>

</template>
<script setup>
import { BookmarkIcon } from '@heroicons/vue/24/outline'
import { BookmarkIcon as SolidBookmarkIcon } from '@heroicons/vue/24/solid'
import { ChevronRightIcon, EnvelopeIcon } from '@heroicons/vue/20/solid'

const articles = [
  {
    name: 'Boost your conversion rate',
    image:
      'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop',
    bookmarked: true
  },
  {
    name: 'Boost your conversion rate',
    image:
      'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop',
    bookmarked: false
  },
]
</script>