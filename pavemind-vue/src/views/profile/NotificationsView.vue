<template>
    <div class="space-y-6 sm:px-6 lg:col-span-9 lg:px-0">

        <!-- Plan -->
        <section aria-labelledby="notifications">
            <form action="#"
                  method="POST">
                <div class="shadow sm:overflow-hidden sm:rounded-md">
                    <div class="space-y-6 bg-white py-6 px-4 sm:p-6">
                        <div class="bg-white px-4 py-3 sm:px-6">
                            <div class="-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap">
                                <div class="ml-4 mt-2">
                                    <h3 class="text-lg font-medium leading-6 text-gray-900">Notifications</h3>
                                </div>
                                <div class="ml-4 mt-2 flex-shrink-0">
                                    <button type="button"
                                            class="relative inline-flex items-center px-4 py-2 text-base font-medium text-sea-800 hover:text-sea-600">Clear All</button>
                                </div>
                            </div>
                        </div>

                        <div class="flow-root px-4 sm:px-6">
                            <ul role="list"
                                class="-mb-8">
                                <li v-for="(activityItem, activityItemIdx) in activity"
                                    :key="activityItem.id">
                                    <div class="relative pb-8">
                                        <span v-if="activityItemIdx !== activity.length - 1"
                                              class="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200"
                                              aria-hidden="true" />
                                        <div class="relative flex items-start space-x-3">
                                            <template v-if="activityItem.type === 'comment'">
                                                <div class="relative">
                                                    <img class="flex h-10 w-10 items-center justify-center rounded-full bg-gray-400 ring-8 ring-white"
                                                         :src="activityItem.imageUrl"
                                                         alt="" />
                                                </div>
                                                <div class="min-w-0 flex-1">
                                                    <div>
                                                        <div class="text-sm">
                                                            <a :href="activityItem.person.href"
                                                               class="font-medium text-gray-900">{{
                                                                       activityItem.person.name
                                                               }}</a>
                                                        </div>
                                                        <p class="mt-0.5 text-sm text-gray-500">Commented {{
                                                                activityItem.date
                                                        }}</p>
                                                    </div>
                                                    <div class="mt-2 text-sm text-gray-700">
                                                        <p>{{ activityItem.comment }}</p>
                                                    </div>
                                                </div>
                                            </template>
                                            <template v-else-if="activityItem.type === 'article'"
                                                      condition="activityItem.type === 'article'">
                                                <div>
                                                    <div class="relative px-1">
                                                        <div
                                                             class="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 ring-8 ring-white">
                                                            <BookOpenIcon class="h-5 w-5 text-gray-500"
                                                                            aria-hidden="true" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="min-w-0 flex-1 py-1.5">
                                                    <div class="text-sm text-gray-500">
                                                        <a :href="activityItem.article.href"
                                                           class="font-medium text-gray-900">{{ activityItem.article.name
                                                           }}</a>
                                                        {{ ' ' }}
                                                        was posted
                                                        {{ ' ' }}
                                                        <span class="whitespace-nowrap">{{ activityItem.date }}</span>
                                                    </div>
                                                </div>
                                            </template>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </form>
        </section>
    </div>
</template>

<script setup>
import { BookOpenIcon, UserCircleIcon } from '@heroicons/vue/20/solid'

const activity = [
    {
        id: 1,
        type: 'comment',
        person: { name: 'Eduardo Benz', href: '#' },
        imageUrl:
            'https://images.unsplash.com/photo-1520785643438-5bf77931f493?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
        comment:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt nunc ipsum tempor purus vitae id. Morbi in vestibulum nec varius. Et diam cursus quis sed purus nam. ',
        date: '2h ago',
    },
    {
        id: 2,
        type: 'article',
        article: { name: 'Boost your conversion rate', href: '#' },
        date: '2d ago',
    },
    {
        id: 3,
        type: 'comment',
        person: { name: 'Jason Meyers', href: '#' },
        imageUrl:
            'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
        comment:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt nunc ipsum tempor purus vitae id. Morbi in vestibulum nec varius. Et diam cursus quis sed purus nam. Scelerisque amet elit non sit ut tincidunt condimentum. Nisl ultrices eu venenatis diam.',
        date: '5d ago',
    },
]
</script>