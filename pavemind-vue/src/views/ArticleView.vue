<template>
    <div class="relative py-16 overflow-hidden bg-white">
      <div class="relative px-4 sm:px-6 lg:px-8">
        <div class="mx-auto text-lg max-w-prose">
          <figure>
            <img class="w-full rounded-lg" :src="article.thumbnail" alt="" />
          </figure>
          <h1>
            <span class="block mt-2 text-3xl font-black leading-8 tracking-tight text-center text-gray-900 font-merriweather sm:text-4xl">{{ article.title }}</span>
          </h1>
        </div>
        <div class="mx-auto mt-6 prose prose-lg text-gray-500 prose-indigo">
          <p class="font-light font-merriweather">{{ article.body }}</p>
        </div>
      </div>
    </div>
  </template>
  <script>
  import axios from "axios"
  
  export default {
      data() {
          return {
              article: [],
          };
      },
      beforeMount() {
          axios
              .get(import.meta.env.VITE_API_BACKEND_URL + '/article/' + this.$route.params.id, {
                  headers: {
                      Authorization: "Bearer " + localStorage.getItem("token"),
                  },
              })
              .then((res) => {
                  //Perform Success Action
                  this.article = res.data.data;
              })
              .catch((err) => {
                  // error.response.status Check status code
                  console.log(err);
              });
      }
  };
  </script>
  