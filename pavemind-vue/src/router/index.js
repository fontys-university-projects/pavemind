import { createRouter, createWebHistory } from 'vue-router'

import { useUserStore } from "../store/user";
import { useUniStore } from "../store/uni";

import HomeView from '../views/HomeView.vue'
import ArticlesView from '../views/ArticlesView.vue'
import ArticleView from '../views/ArticleView.vue'
import PricingView from '../views/PricingView.vue'
import CommunityView from '../views/CommunityView.vue'
import DiaryView from '../views/DiaryView.vue'

import ProfileView from '../views/ProfileView.vue'
import AccountView from '../views/profile/AccountView.vue'
import BillingView from '../views/profile/BillingView.vue'
import BookmarksView from '../views/profile/BookmarksView.vue'
import NotificationsView from '../views/profile/NotificationsView.vue'

import SignInView from '../views/SignInView.vue'
import SignUpView from '../views/SignUpView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/articles',
      name: 'articles',
      component: ArticlesView
    },
    {
      path: '/article/:id',
      name: 'article',
      component: ArticleView
    },
    {
      path: '/community',
      name: 'community',
      component: CommunityView,
    },
    {
      path: '/diary',
      name: 'diary',
      component: DiaryView,
      meta: { requiresAuth: true }
    },
    {
      path: '/pricing',
      name: 'pricing',
      component: PricingView
    },
    {
      path: '/profile',
      name: 'profile',
      component: ProfileView,
      meta: { requiresAuth: true },
      children: [
        {
          path: '',
          name: 'main',
          component: AccountView,
        },
        {
          path: 'billing',
          component: BillingView,
        },
        {
          path: 'bookmarks',
          component: BookmarksView,
        },
        {
          path: 'notifications',
          component: NotificationsView,
        },
      ],
    },
    {
      path: '/login',
      name: 'Sign In',
      component: SignInView
    },
    {
      path: '/register',
      name: 'Sign Up',
      component: SignUpView
    },
  ]
})


router.beforeEach((to) => {

  const userStore = useUserStore()
  const uniStore = useUniStore()

  userStore.fetchUser()
  userStore.fetchDiary()
  uniStore.fetchUni()

  if (to.meta.requiresAuth && !userStore.isLoggedIn) return '/'
})
export default router
