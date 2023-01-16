<template>
    <div class="min-h-[calc(100vh_-_64px)]">
        <div class="pt-12 bg-gray-50 sm:pt-16">
            <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div class="max-w-4xl mx-auto text-center">
                    <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Community Area</h2>
                    <p class="mt-3 text-xl text-gray-500 sm:mt-4">Welcome to the Community area! Get ready to meet new
                        people and share experiences!</p>
                </div>
            </div>
            <div class="pb-12 mt-10 bg-white sm:pb-16">
            </div>
        </div>

        <div class="max-w-4xl py-4 mx-auto sm:px-6 lg:px-8">
            <form  @submit.prevent="submitPost()"
                  class="relative">
                <div
                     class="overflow-hidden rounded-lg border border-gray-300 shadow-sm focus-within:border-sea-500 focus-within:ring-1 focus-within:ring-sea-500">
                    <label for="title"
                           class="sr-only">Title</label>
                    <input type="text"
                           name="title"
                           id="title"
                           class="block w-full border-0 pt-2.5 text-lg font-medium placeholder-gray-500 focus:ring-0"
                           required
                           v-model="postTitle"
                           placeholder="Title" />
                    <label for="description"
                           class="sr-only">Description</label>
                    <textarea rows="6"
                              name="description"
                              id="description"
                              class="block w-full resize-none border-0 py-0 placeholder-gray-500 focus:ring-0 sm:text-sm"
                              required
                              v-model="postBody"
                              placeholder="Write a description..." />

                    <!-- Spacer element to match the height of the toolbar -->
                    <div aria-hidden="true">
                        <div class="h-px" />
                        <div class="py-2">
                            <div class="py-px">
                                <div class="h-9" />
                            </div>
                        </div>
                    </div>
                </div>

                <div class="absolute inset-x-px bottom-0">
                    <div class="flex items-center justify-between space-x-3 border-t border-gray-200 px-2 py-2 sm:px-3">
                        <div class="flex">
                        </div>
                        <div class="flex-shrink-0">
                            <button type="submit"
                                    class="inline-flex items-center rounded-md border border-transparent bg-sea-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-sea-700 focus:outline-none focus:ring-2 focus:ring-sea-500 focus:ring-offset-2">Create</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>


        <div class="max-w-4xl py-4 mx-auto sm:px-6 lg:px-8"
             v-for="post in posts">
            <div class="max-w-6xl mx-auto">
                <div class="overflow-hidden border-t border-b sm:rounded-lg sm:shadow sm:border">
                    <div class="px-4 py-4 sm:px-6">
                        <div class="flex space-x-3">
                            <div class="flex-shrink-0">
                                <img class="inline-block w-12 h-12 rounded-full object-cover"
                                     :src="post.author.avatar"
                                     alt="">
                            </div>
                            <div class="flex-1 min-w-0">
                                <p class="text-sm font-medium text-gray-900">
                                    <a class="hover:underline">{{ post.author.firstName }} {{
                                        post.author.lastName
                                    }}</a>
                                    <span v-if="post.author.role == 'Premium'"
                                          class="inline-flex items-center rounded bg-gray-100 px-2 py-0.5 text-xs font-medium text-sea-800 ml-2">Premium</span>
                                </p>
                                <p class="text-sm text-gray-500">
                                    <a class="hover:underline">{{
                                        new
                                                                            Date(post.createdAt).toLocaleString().split(',')[0]
                                    }} at {{
    new
                                        Date(post.createdAt).toLocaleString().split(',')[1]
}}</a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="px-4 pb-5 sm:p-6 sm:pt-0">
                        <h1 class="font-bold">{{ post.title }}</h1>
                        <p>{{ post.body }}</p>
                    </div>

                    <div class="relative flex items-center px-5 pb-6">
                        <div class="flex-grow border-t border-gray-300" />
                    </div>

                    <div class="flex items-start px-4 pb-5 space-x-4 sm:p-6 sm:px-12 sm:pt-0">
                        <div class="flex-shrink-0">
                            <img class="inline-block w-12 h-12 rounded-full object-cover"
                                 :src="userStore.user.avatar"
                                 alt="" />
                        </div>
                        <div class="flex-1 min-w-0">
                            <form @submit.prevent="submitComment(post.id)"
                                  class="relative">
                                <div
                                     class="overflow-hidden border border-gray-300 rounded-lg shadow-sm focus-within:border-sea-500 focus-within:ring-1 focus-within:ring-sea-500">
                                    <label for="comment"
                                           class="sr-only">Add your comment</label>
                                    <textarea rows="4"
                                              name="comment"
                                              id="comment"
                                              class="block w-full py-3 border-0 resize-none focus:ring-0 sm:text-sm"
                                              required
                                              v-model="commentBody"
                                              placeholder="Add your comment..." />

                                    <div class="py-2"
                                         aria-hidden="true">
                                        <div class="py-px">
                                            <div class="h-2" />
                                        </div>
                                    </div>
                                </div>

                                <div class="absolute inset-x-0 bottom-0 flex justify-between py-2 pl-3 pr-2">
                                    <div class="flex items-center space-x-5">
                                    </div>
                                    <div class="flex-shrink-0">
                                        <button type="submit"
                                                class="inline-flex items-center px-4 py-2 text-sm font-medium text-white border border-transparent rounded-md shadow-sm bg-sea-600 hover:bg-sea-700 focus:outline-none focus:ring-2 focus:ring-sea-500 focus:ring-offset-2">Comment</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div v-for="comment in post.comments">
                        <div class="px-5 py-3 sm:px-6">
                            <div class="flex space-x-3">
                                <div class="flex-shrink-0">
                                    <img class="inline-block w-12 h-12 rounded-full object-cover"
                                         :src="comment.author.avatar"
                                         alt="">
                                </div>
                                <div class="flex-1 min-w-0">
                                    <p class="text-sm font-medium text-gray-900">
                                        <a class="hover:underline">{{ comment.author.firstName }} {{
                                            comment.author.lastName
                                        }}</a>
                                        <span v-if="comment.author.role == 'Premium'"
                                              class="inline-flex items-center rounded bg-gray-100 px-2 py-0.5 text-xs font-medium text-sea-800 ml-2">Premium</span>

                                    </p>
                                    <p class="text-sm text-gray-500">
                                        <a class="hover:underline">{{
                                            new Date(comment.createdAt).toLocaleString().split(',')[0]
                                        }} at {{
                                            new Date(comment.createdAt).toLocaleString().split(',')[1]
                                        }}
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="px-5 pb-5 sm:p-6 sm:px-6 sm:pt-0">
                            <p>{{ comment.comment }}</p>
                        </div>
                    </div>

                </div>


            </div>

        </div>
    </div>

</template>

<script>
import axios from "axios"
import { useUserStore } from "../store/user";
export default {
    data() {
        const userStore = useUserStore();
        return {
            userStore,
            postTitle: "",
            postBody:"",
            commentBody: "",
            posts: [],
        };
    },
    beforeMount() {
        axios
            .get(import.meta.env.VITE_API_BACKEND_URL + '/community/all', {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("token"),
                },
            })
            .then((res) => {
                //Perform Success Action
                this.posts = res.data.data;
            })
            .catch((err) => {
                // error.response.status Check status code
                console.log(err);
            });
    },
    created() {
        setInterval(function () {
			this.fetchData()
		}.bind(this), 900);
    },
    methods: {
        async fetchData() {
            axios
            .get(import.meta.env.VITE_API_BACKEND_URL + '/community/all', {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("token"),
                },
            })
            .then((res) => {
                //Perform Success Action
                this.posts = res.data.data;
            })
            .catch((err) => {
                // error.response.status Check status code
                console.log(err);
            });
        },
        async submitComment(postId) {
            await axios
                .post(import.meta.env.VITE_API_BACKEND_URL + '/community/' + postId + '/comment/new', { comment: this.commentBody }, {
                    headers: {
                        Authorization: "Bearer " + localStorage.getItem("token"),
                    },
                })

            this.commentBody = ""

        },

        async submitPost() {
            await axios
                .post(import.meta.env.VITE_API_BACKEND_URL + '/community/post/new', { title: this.postTitle, body: this.postBody }, {
                    headers: {
                        Authorization: "Bearer " + localStorage.getItem("token"),
                    },
                })
            this.postTitle = ""
            this.postBody = ""
        },
    }

};
</script>