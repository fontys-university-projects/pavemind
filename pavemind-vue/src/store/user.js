import { defineStore } from "pinia";
import axios from "axios"

export const useUserStore = defineStore("user", {
    state: () => ({
        user: null,
        diary: null,
        error: false,
        success: false,
        errorMessage: null,
        isLoggedIn: false
    }),

    actions: {
        async fetchUser() {
            axios
                .get(import.meta.env.VITE_API_BACKEND_URL + '/user/info', {
                    headers: {
                        Authorization: "Bearer " + localStorage.getItem("token"),
                    },
                })
                .then((res) => {
                    const user = res.data.data
                    this.user = user
                    this.isLoggedIn = true
                })
        },
        async signUp(email, password, confirmPassword) {
            await axios
                .post(import.meta.env.VITE_API_BACKEND_URL + '/user/register', { email, password, confirmPassword })
                .then((res) => {
                    const user = res.data.data
                    this.user = user
                    this.error = false
                    this.success = true
                })
                .catch((err) => {
                    this.error = true
                    this.success = false
                    this.errorMessage = err.response.data.message
                })
        },
        async signIn(email, password) {
            await axios
                .post(import.meta.env.VITE_API_BACKEND_URL + '/user/login', { email, password })
                .then((res) => {
                    const user = res.data.data
                    this.user = user
                    localStorage.setItem("token", res.data.data.accessToken);
                    this.router.go("/");
                })
                .catch((err) => {
                    this.error = true
                    this.success = false
                    this.errorMessage = err.response
                })
        },
        async updateInfo(firstName, lastName, about) {
            await axios
                .post(import.meta.env.VITE_API_BACKEND_URL + '/user/settings', { firstName, lastName, about }, {
                    headers: {
                        Authorization: "Bearer " + localStorage.getItem("token"),
                    },
                })
                .then((res) => {
                    const user = res.data.data
                    this.user = user
                })
        },
        async fetchDiary() {
            axios
                .get(import.meta.env.VITE_API_BACKEND_URL + '/user/diary', {
                    headers: {
                        Authorization: "Bearer " + localStorage.getItem("token"),
                    },
                })
                .then((res) => {
                    const diary = res.data.data
                    this.diary = diary
                })
        },
        async submitFeeling(feeling) {
            await axios
                .post(import.meta.env.VITE_API_BACKEND_URL + '/user/diary', { feeling }, {
                    headers: {
                        Authorization: "Bearer " + localStorage.getItem("token"),
                    },
                })
        },
        async submitEmotions(q1, q2, q3, q4) {
            await axios
                .post(import.meta.env.VITE_API_BACKEND_URL + '/user/diary', { q1, q2, q3, q4 }, {
                    headers: {
                        Authorization: "Bearer " + localStorage.getItem("token"),
                    },
                })
        },
    },
});