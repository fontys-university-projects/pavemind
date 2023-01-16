import { defineStore } from "pinia";
import axios from "axios"

export const useUniStore = defineStore("uni", {
    state: () => ({
        uni: null,
        isStudent: false
    }),

    actions: {
        async fetchUni() {
            axios
                .get(import.meta.env.VITE_API_BACKEND_URL + '/user/uni', {
                    headers: {
                        Authorization: "Bearer " + localStorage.getItem("token"),
                    },
                })
                .then((res) => {
                    const uni = res.data.data
                    this.uni = uni
                    this.isStudent = true
                })
        },
    },
});