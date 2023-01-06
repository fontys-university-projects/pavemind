<template>
  <div class="relative overflow-hidden bg-white min-h-[calc(100vh_-_(64px_+_130px))]">
    <div class="relative pt-6 pb-16 sm:pb-24 lg:pb-32">
      <main class="px-4 mx-auto mt-16 max-w-7xl sm:mt-16 sm:px-6 lg:mt-32">
        <div class="lg:grid lg:grid-cols-12 lg:gap-8">
          <div class="font-roboto sm:text-center md:mx-auto md:max-w-2xl lg:col-span-6 lg:text-left">
            <h1>
              <span class="block mt-1 text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl">
                <span class="block text-gray-900">Welcome to</span>
                <span class="block text-sea-900">PaveMind</span>
              </span>
            </h1>
            <p class="mt-3 text-base font-normal text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">A platform, for people who are experiencing or have experienced burnout. 
              PaveMind's mission is to provide a place where people can get educated on the problem and help each other.</p>
            <div class="mt-3 sm:mx-auto sm:max-w-lg sm:text-center lg:mx-0 lg:text-left">
              <div class="relative overflow-hidden rounded-full py-1.5 px-4 text-sm leading-6 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                <span class="text-base text-gray-600">
                  New to PaveMind? Get started by <a href="#" class="font-semibold text-sea-900"><span class="absolute inset-0" aria-hidden="true" />registering <span aria-hidden="true">&rarr;</span></a>
                </span>
              </div>
              <p class="mt-3 text-sm text-gray-500">
                We care about the protection of your data. Read our
                <a href="#"
                   class="font-medium text-gray-900 underline">Privacy Policy</a>.
              </p>
            </div>
          </div>
          <div
               class="relative mt-12 sm:mx-auto sm:max-w-lg lg:col-span-6 lg:mx-0 lg:mt-0 lg:flex lg:max-w-none lg:items-center">
            <div class="relative w-full mx-auto rounded-lg shadow-lg lg:max-w-lg">
              <img class="relative block w-full overflow-hidden bg-white rounded-lg"
                     src="https://images.unsplash.com/photo-1520857014576-2c4f4c972b57?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=40"
                     alt="" />
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
  <svg class="waves"
         xmlns="http://www.w3.org/2000/svg"
         xmlns:xlink="http://www.w3.org/1999/xlink"
         viewBox="0 24 150 28"
         preserveAspectRatio="none"
         shape-rendering="auto">
      <defs>
        <path id="gentle-wave"
              d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
      </defs>
      <g class="relative bottom-0 origin-bottom transform scale-75 parallax sm:scale-100">
        <use xlink:href="#gentle-wave"
             x="48"
             y="0"
             fill="rgba(130,147,178,0.7" />
        <use xlink:href="#gentle-wave"
             x="48"
             y="3"
             fill="rgba(130,147,178,0.5)" />
        <use xlink:href="#gentle-wave"
             x="48"
             y="5"
             fill="rgba(130,147,178,0.3)" />
        <use xlink:href="#gentle-wave"
             x="48"
             y="6"
             fill="#4D6491" />
      </g>
    </svg>
    <div class="relative h-screen px-4 pt-16 pb-20 bg-white sm:px-6 lg:px-8 lg:pt-24 lg:pb-28">
    <div class="absolute inset-0">
      <div class="h-1/3 bg-gradient-to-b from-sea-900 via-sea-700 to-white sm:h-1/3" />
    </div>
    <div class="relative mx-auto max-w-7xl">
      <div class="text-center">
        <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">Articles</h2>
        <p class="max-w-2xl mx-auto mt-3 text-xl text-gray-200 sm:mt-4">Here are one of the three most important articles</p>
      </div>
      <div class="grid max-w-lg gap-5 mx-auto mt-12 lg:gap-12 lg:max-w-6xl lg:grid-cols-3">
        <div v-for="post in posts" :key="post.title" class="flex flex-col overflow-hidden rounded-lg shadow-lg">
          <div class="flex-shrink-0">
            <img class="object-cover w-full h-48" :src="post.imageUrl" alt="" />
          </div>
          <div class="flex flex-col justify-between flex-1 p-6 bg-white">
            <div class="flex-1">
              <a :href="post.href" class="block mt-2">
                <p class="text-xl font-semibold text-gray-900">{{ post.title }}</p>
                <p class="mt-3 text-base text-gray-500">{{ post.description }}</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="bg-white">
    <!-- Header -->
    <div class="relative pb-32 bg-sea-600">
      <div class="absolute inset-0">
        <img class="object-cover w-full h-full" src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=60&&sat=-100" alt="" />
        <div class="absolute inset-0 bg-sea-600 mix-blend-multiply" aria-hidden="true" />
      </div>
      <div class="relative px-4 py-24 mx-auto max-w-7xl sm:py-32 sm:px-6 lg:px-8">
        <h1 class="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">About Us</h1>
        <p class="max-w-3xl mt-6 text-xl text-gray-300">PaveMind's mission is to provide a platform, of which can help the users getting familiar with breakdown, and trying to prevent it, by giving you helpful resources and creating a community!</p>
      </div>
    </div>

    <!-- Overlapping cards -->
    <section class="relative z-10 px-4 pb-32 mx-auto -mt-32 max-w-7xl sm:px-6 lg:px-8" aria-labelledby="contact-heading">
      <div class="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8">
        <div v-for="link in supportLinks" :key="link.name" class="flex flex-col bg-white shadow-xl rounded-2xl">
          <div class="relative flex-1 px-6 pt-16 pb-8 md:px-8">
            <div class="absolute top-0 inline-block p-5 transform -translate-y-1/2 shadow-lg rounded-xl bg-sea-600">
              <component :is="link.icon" class="w-6 h-6 text-white" aria-hidden="true" />
            </div>
            <h3 class="text-xl font-medium text-gray-900">{{ link.name }}</h3>
            <p class="mt-4 text-base text-gray-500">{{ link.description }}</p>
          </div>
          <div class="p-6 rounded-bl-2xl rounded-br-2xl bg-gray-50 md:px-8">
            <a :href="link.href" class="text-base font-medium text-sea-700 hover:text-sea-500">Take a look<span aria-hidden="true"> &rarr;</span></a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<style scoped>
/* Taken from https://www.cssscript.com/animated-waves-svg/ */
.waves {
  width: 100%;
  height: 13.5vh;
  margin-bottom: -7px;
  /*Fix for safari gap*/
  min-height: 137px;
  max-height: 150px;
}

.parallax>use {
  animation: move-forever 25s cubic-bezier(.55, .5, .45, .5) infinite;
}

.parallax>use:nth-child(1) {
  animation-delay: -2s;
  animation-duration: 20s;
}

.parallax>use:nth-child(2) {
  animation-delay: -3s;
  animation-duration: 23s;
}

.parallax>use:nth-child(3) {
  animation-delay: -4s;
  animation-duration: 26s;
}

.parallax>use:nth-child(4) {
  animation-delay: -5s;
  animation-duration: 30s;
}

@keyframes move-forever {
  0% {
    transform: translate3d(-90px, 0, 0);
  }

  100% {
    transform: translate3d(85px, 0, 0);
  }
}

/*Shrinking for mobile*/
@media (max-width: 768px) {
  .waves {
    height: 40px;
    min-height: 40px;
  }
}

</style>
<script setup>
import { BookOpenIcon, UserGroupIcon, NewspaperIcon } from '@heroicons/vue/24/outline'

const supportLinks = [
  {
    name: 'Articles',
    href: 'articles',
    description:
      'Check out our articles containing tips, advices and helpful information about burnout.',
    icon: NewspaperIcon,
  },
  {
    name: 'Community',
    href: 'community',
    description:
      'We believe that forming a community is important! This is why our platform provides the feature for you to connect with others!',
    icon: UserGroupIcon,
  },
  {
    name: 'Diary',
    href: 'diary',
    description:
      'Keep track of your mood and emotions, the diary can help you track your progress and possibly help you with your problems!',
    icon: BookOpenIcon,
  },
]

const posts = [
  {
    title: 'Boost your conversion rate',
    href: '#',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    imageUrl:
      'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
    readingTime: '6 min',
    author: {
      name: 'Roel Aufderehar',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    title: 'How to use search engine optimization to drive sales',
    href: '#',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.',
    date: 'Mar 10, 2020',
    datetime: '2020-03-10',
    imageUrl:
      'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
    readingTime: '4 min',
    author: {
      name: 'Brenna Goyette',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    title: 'Improve your customer experience',
    href: '#',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.',
    date: 'Feb 12, 2020',
    datetime: '2020-02-12',
    imageUrl:
      'https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
    readingTime: '11 min',
    author: {
      name: 'Daniela Metz',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
]
</script>