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
                         :src="articles[0].thumbnail" />
                         <div class="md:hidden absolute top-2 right-2">
                            <button type="button"
                                    class="inline-flex items-center p-2 text-white border border-transparent rounded-lg shadow-sm bg-sea-800/80 hover:bg-sea-600 focus:outline-none focus:ring-2 focus:ring-sea-700 focus:ring-offset-2">
                                <BookmarkIcon class="w-6 h-6"
                                              aria-hidden="true" />
                                <!-- <SolidBookmarkIcon v-if="latestPost.bookmarked == true"
                                                   class="w-6 h-6"
                                                   aria-hidden="true" /> -->
                            </button>
                        </div>
                </div>
                <div class="relative px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8 lg:py-16 w-full">
                    <div class="md:ml-auto md:w-1/2 md:pl-10">
                        <div class="hidden md:block absolute top-2 right-2">
                            <button type="button"
                                    class="inline-flex items-center p-2 text-white border border-transparent rounded-lg shadow-sm bg-sea-800/80 hover:bg-sea-600 focus:outline-none focus:ring-2 focus:ring-sea-700 focus:ring-offset-2">
                                <BookmarkIcon class="w-6 h-6"
                                              aria-hidden="true" />
                                <!-- <SolidBookmarkIcon v-if="latestPost.bookmarked == true"
                                                   class="w-6 h-6"
                                                   aria-hidden="true" /> -->
                            </button>
                        </div>
                        <div class="">
                            <h2 class="text-lg font-semibold text-sea-900">Latest article</h2>
                            <p class="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">{{ articles[0].title }}</p>
                            <p class="mt-3 text-lg line-clamp-4">{{ articles[0].body }}</p>
                            <div class="">
                                <div class="flex space-x-1 text-sm text-gray-500">
                                    <span>Posted on</span>
                                    <time :datetime="articles[0].createdAt">{{
                                        new
                                                                            Date(articles[0].createdAt).toLocaleString().split(',')[0]
                                    }}</time>
                                </div>
                            </div>
                            <div class="mt-4">
                                <div class="inline-flex rounded-md shadow">
                                    <router-link :to="'article/' + articles[0].id"
                                                 class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-white border border-transparent rounded-md bg-sea-700 hover:bg-sea-600">
                                        Read more
                                    </router-link>
                                </div>
                                <div class="flex items-center mt-6">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="grid max-w-lg gap-5 mx-auto mt-12 md:grid-cols-2 md:max-w-none lg:max-w-none lg:grid-cols-3">
                <div v-for="post in articles.slice(1)"
                     :key="post.title"
                     class="flex flex-col overflow-hidden rounded-lg shadow-lg">
                    <div class="relative flex-shrink-0">
                        <img class="object-cover w-full h-48"
                             :src="post.thumbnail"
                             alt="" />
                        <div class="absolute top-2 right-2">
                            <button type="button"
                                    class="inline-flex items-center p-2 text-white border border-transparent rounded-lg shadow-sm bg-sea-800/80 hover:bg-sea-600 focus:outline-none focus:ring-2 focus:ring-sea-700 focus:ring-offset-2">
                                <BookmarkIcon class="w-6 h-6"
                                              aria-hidden="true" />
                                <!-- <SolidBookmarkIcon v-if="post.bookmarked == true"
                                                   class="w-6 h-6"
                                                   aria-hidden="true" /> -->
                            </button>
                        </div>
                    </div>
                    <div class="flex flex-col justify-between flex-1 p-6 bg-white">
                        <div class="flex-1">
                            <router-link :to="'article/' + post.id"
                                         class="block mt-2">
                                <p class="text-xl font-semibold text-gray-900">{{ post.title }}</p>
                                <p class="mt-3 text-base text-gray-500 line-clamp-4">{{ post.body }}</p>
                            </router-link>
                        </div>
                        <div class="flex items-center mt-6">
                            <div class="">
                                <div class="flex space-x-1 text-sm text-gray-500">
                                    <span>Posted on</span>
                                    <time :datetime="post.createdAt">{{
                                        new Date(post.createdAt).toLocaleString().split(',')[0]
                                    }}</time>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { BookmarkIcon } from '@heroicons/vue/24/outline'
import { BookmarkIcon as SolidBookmarkIcon } from '@heroicons/vue/24/solid'
import axios from "axios"

export default {
    components: {
        BookmarkIcon,
        SolidBookmarkIcon
    },
    data() {
        return {
            articles: [],
        };
    },
    beforeMount() {
        axios
            .get(import.meta.env.VITE_API_BACKEND_URL + '/article/all', {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("token"),
                },
            })
            .then((res) => {
                //Perform Success Action
                this.articles = res.data.data;
            })
            .catch((err) => {
                // error.response.status Check status code
                console.log(err);
            });
    }
};
</script>
