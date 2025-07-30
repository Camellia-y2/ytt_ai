import axios from "./config";

export const getImages = (page) => {
    // return axios.get(`/images?page=${page}`); //也可以这样写
    return axios.get('/images', {
        params: {page}
    });
}