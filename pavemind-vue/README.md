# Frontend Documentation

# Table of Content
- [Frontend Documentation](#frontend-documentation)
- [Table of Content](#table-of-content)
  - [Project Setup](#project-setup)
    - [**Installing the necessary packages**](#installing-the-necessary-packages)
    - [**Compile and Hot-Reload for Development**](#compile-and-hot-reload-for-development)
  - [Code Explanation](#code-explanation)
    - [**Components**](#components)
      - [***Footer and Navigation Bar***](#footer-and-navigation-bar)
    - [***Router***](#router)
    - [**Store**](#store)
      - [***User***](#user)
      - [***Uni***](#uni)
    - [**Views**](#views)
      - [***Profile***](#profile)
      - [***Articles***](#articles)
      - [***Community***](#community)
      - [***Diary***](#diary)

## Project Setup

### **Installing the necessary packages**
```sh
npm install
```

Don't forget to set the .env
```js
VITE_API_BACKEND_URL=https://example.com
```

### **Compile and Hot-Reload for Development**

```sh
npm run dev
```

## Code Explanation

### **Components**
[Back to Top](#table-of-content)

Vue Components are mainly used for reusable content, I prefer to use them as components that wil lbe in more than 1 page, also there are some slight limitations in terms of communication between components and views

#### ***Footer and Navigation Bar***
- [Footer](src/components/Footer.vue)
- [Navigation Bar](src/components/NavigationBar.vue)

The Footer is simple, just links to socials and copyright flag

The Navigation bar, is linked with the [Pinia](https://pinia.vuejs.org/) (Vuex successor) Session Store management. To check if the user is authenticated to mange hidden links and change dropdown menus

### ***Router***
[Back to Top](#table-of-content)

[Router Index](src/router/index.js)

Vue Router, is responsible for linking the pages, also for preventing access to authorized pages and getting query data. The Router is configured with `router.beforeEach` to check from [Pinia](https://pinia.vuejs.org/) if user is authenticated. And then to correspond with redirects.

### **Store**
[Back to Top](#table-of-content)

This is designated for [Pinia](https://pinia.vuejs.org/), the store is responsible for collecting data from the backend each time the app gets initialized from the browser in the session store. This provides us with the ability to query the data once and to update it when necessary, which helps with reducing backend traffic.

#### ***User***
[User](src/store/user.js)

I decided for the sake of demonstration, to make multiple ways to fetch and post data using Axios. For this case We are using The UserStore to fetch user data as well as submit the auth forms to the backend. The other way of submitting and fetching is done for the Community page

#### ***Uni***
[Uni](src/store/uni.js)

This store is only concerning students. it fetches the university information based on the activation key. This store can be used for the future to modify that key, as well as to modify the Pricing UI to match the student pricing

### **Views**
[Back to Top](#table-of-content)

Views in Vue are the pages themselves. I will only mention the important pages and pages with some differences, since most of them do the same thing and use the same methods of importing.

#### ***Profile***
- [Profile](src/views/ProfileView.vue)
  - [Account](src/views/profile/AccountView.vue)

The profile view, consist of the main Profile page and multiple child pages. The Main page itself has nothing in it. It's purpose is to also demonstrate how nested/child routes and pages are done.

The Account view on the other hand is showing a mix of the pinia State, where it fetches and posts data from the same Store. We are getting the data to fill in the placeholders and the post is to update the user's personal information

####  ***Articles***
- [Articles](src/views/ArticlesView.vue)
- [Article](src/views/ArticleView.vue)

The Articles view is using another method of getting the data with Axios, in this case we do not use Pinia, we use the Vue's `beforeMount` method, which gets the data before the page has loaded

The Article view, is using the same method, but also demonstrates how to use the Vue Router's query method to specify which article you specifically want to view 

#### ***Community***
- [Community](src/views/CommunityView.vue)

The Community View, is using Pinia, beforeMount and Mounted method. Each one has its own purpose, the Pinia is used for things like the add comment picture, the beforeMount is used for fetching all the community posts in prior and last but not least the mounted method is responsible for handling comment and post creations.

#### ***Diary***

Diary is one of the most "complex" pages of them all! The Diary is using [ApexCharts](https://apexcharts.com/) to display a nice view of the user's diary entries. It is fetching the information in a similar manner as the Community view and as an added bonus we are creating a for loop, which makes a brand new object of arrays which follows the [ApexChart format](https://apexcharts.com/docs/datalabels/#)
