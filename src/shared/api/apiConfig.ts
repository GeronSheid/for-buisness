import axios from "axios";

export const apiInstance = axios.create({
    baseURL: '/',
    headers: {
        common: {
            Authorization: 'TOKEN'
        },
        post: {
            "Content-Type": 'application/x-www-form-urlencoded'
        }, 
    }
})