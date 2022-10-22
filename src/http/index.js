import axios from "axios";

const API = axios.create({
    baseURL : process.env.REACT_APP_BASEURL,
    // withCredentials: true,
    headers:{
        'Content-Type':"application/json",
        'Accept':"application/json",
        // 'Access-Control-Allow-Origin':'http://localhost:3000',
        'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',

    }
});

const API2 = axios.create({
    baseURL : "https://jsonplaceholder.typicode.com",
    // withCredentials: true,
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
      }
});

export const login = (data) =>API.post("/auth/login", data);
export const post = (data) =>API2.get("/posts",data)

export default API;