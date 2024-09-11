import axios from "axios";

const REST_API_BASE_URL = 'http://localhost:8080/';

//export const login = (username, password) => axios.post(REST_API_BASE_URL+"authenticate",username,password)
export const login = (username, password) => {
    return axios.post(REST_API_BASE_URL+"authenticate", {
        username,
        password
    }, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
};
export const listBooks = (token) => {
    return axios.get(`${REST_API_BASE_URL}books`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
};
export const addBooks = (token,bookData) => {
    return axios.post(`${REST_API_BASE_URL}addBook`,bookData, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
};
export const Bookbyid = (token,id) => {
    return axios.get(`${REST_API_BASE_URL}book/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
};
export const updatebook = (token,id,bookData) => {
    return axios.put(`${REST_API_BASE_URL}updatebook/${id}`,bookData, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
};
export const deletebook = (token,id) => {
    return axios.delete(`${REST_API_BASE_URL}delete/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
};
export const borrowBook = (token,id,email) => {
    return axios.post(`${REST_API_BASE_URL}borrow/${id}`,null,{
        headers: {
            Authorization: `Bearer ${token}`
        },
        params: {
            email:email
        }
    });
};