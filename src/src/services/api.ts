import axiosLib from "axios";

const axios = axiosLib.create({
    baseURL: "http://localhost:5000/api"
});

export default axios;
