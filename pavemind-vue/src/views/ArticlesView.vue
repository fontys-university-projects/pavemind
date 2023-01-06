<template>
    <div class="relative px-4 pt-16 pb-20 bg-gray-50 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28 min-h-[calc(100vh_-_64px)]">
        <div class="absolute inset-0">
            <div class="bg-white h-1/3 sm:h-2/3" />
        </div>
        <div class="relative mx-auto max-w-7xl">
            <div class="mb-5 text-center">
                <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Articles</h2>
            </div>
            <div class="relative flex flex-col overflow-hidden rounded-lg shadow-lg">
                <div class="h-56 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
                    <img class="object-cover w-full h-full"
                         src="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80"
                         alt="" />
                </div>
                <div class="relative px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8 lg:py-16">
                    <div class="md:ml-auto md:w-1/2 md:pl-10">
                        <div class="absolute top-2 right-2">
                            <button type="button"
                                    class="inline-flex items-center p-2 text-white border border-transparent rounded-lg shadow-sm bg-sea-800/80 hover:bg-sea-600 focus:outline-none focus:ring-2 focus:ring-sea-700 focus:ring-offset-2">
                                <BookmarkIcon v-if="latestPost.bookmarked == false"
                                              class="w-6 h-6"
                                              aria-hidden="true" />
                                <SolidBookmarkIcon v-if="latestPost.bookmarked == true"
                                                   class="w-6 h-6"
                                                   aria-hidden="true" />
                            </button>
                        </div>
                        <h2 class="text-lg font-semibold text-sea-900">Latest article</h2>
                        <p class="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">{{ latestPost.title }}</p>
                        <p class="mt-3 text-lg">{{ latestPost.description }}</p>
                            <div class="">
                                <div class="flex space-x-1 text-sm text-gray-500">
                                    <span>Posted on</span>
                                    <time :datetime="latestPost.datetime">{{ latestPost.date }}</time>
                                </div>
                            </div>
                        <div class="mt-4">
                            <div class="inline-flex rounded-md shadow">
                                <a :href="latestPost.href"
                                   class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-white border border-transparent rounded-md bg-sea-700 hover:bg-sea-600">
                                    Read more
                                </a>
                            </div>
                            <div class="flex items-center mt-6">
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="grid max-w-lg gap-5 mx-auto mt-12 lg:max-w-none lg:grid-cols-3">
                <div v-for="post in posts"
                     :key="post.title"
                     class="flex flex-col overflow-hidden rounded-lg shadow-lg">
                    <div class="relative flex-shrink-0">
                        <img class="object-cover w-full h-48"
                             :src="post.imageUrl"
                             alt="" />
                        <div class="absolute top-2 right-2">
                            <button type="button"
                                    class="inline-flex items-center p-2 text-white border border-transparent rounded-lg shadow-sm bg-sea-800/80 hover:bg-sea-600 focus:outline-none focus:ring-2 focus:ring-sea-700 focus:ring-offset-2">
                                <BookmarkIcon v-if="post.bookmarked == false"
                                              class="w-6 h-6"
                                              aria-hidden="true" />
                                <SolidBookmarkIcon v-if="post.bookmarked == true"
                                                   class="w-6 h-6"
                                                   aria-hidden="true" />
                            </button>
                        </div>
                    </div>
                    <div class="flex flex-col justify-between flex-1 p-6 bg-white">
                        <div class="flex-1">
                            <a :href="post.href"
                               class="block mt-2">
                                <p class="text-xl font-semibold text-gray-900">{{ post.title }}</p>
                                <p class="mt-3 text-base text-gray-500">{{ post.description }}</p>
                            </a>
                        </div>
                        <div class="flex items-center mt-6">
                            <div class="">
                                <div class="flex space-x-1 text-sm text-gray-500">
                                    <span>Posted on</span>
                                    <time :datetime="post.datetime">{{ post.date }}</time>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script setup>
import { BookmarkIcon } from '@heroicons/vue/24/outline'
import { BookmarkIcon as SolidBookmarkIcon } from '@heroicons/vue/24/solid'
const latestPost = {
        title: 'Boost your conversion rate',
        href: '#',
        bookmarked: true,
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        imageUrl:
            'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
}
const posts = [
    {
        title: 'Boost your conversion rate',
        href: '#',
        bookmarked: true,
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        imageUrl:
            'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
    },
    {
        title: 'How to use search engine optimization to drive sales',
        href: '#',
        bookmarked: false,
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.',
        date: 'Mar 10, 2020',
        datetime: '2020-03-10',
        imageUrl:
            'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
    },
    {
        title: 'Improve your customer experience',
        href: '#',
        bookmarked: true,
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.',
        date: 'Feb 12, 2020',
        datetime: '2020-02-12',
        imageUrl:
            'https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
    },
]
</script>