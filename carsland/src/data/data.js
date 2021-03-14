import Axios from 'axios'

const BASE_URL = 'http://localhost:5000/'
const API_KEY = "VK2GxhCZ9KeP1viVpHcG"

export async function getAllCars() {

    var API_ENDPOINT = '/v1/cars';

    try {
        // fetch data from a url endpoint
        const response = await Axios.get(`${BASE_URL}${API_KEY}${API_ENDPOINT}`);
        return await response.data;

    } catch(error) {
        console.log("error", error);
        return await [];
    }

}

export async function getCar(id) {

    var API_ENDPOINT = `/v1/cars/${id}`

    try {
        // fetch data from a url endpoint
        const response = await Axios.get(`${BASE_URL}${API_KEY}${API_ENDPOINT}`);
        return await response.data;

    } catch(error) {
        console.log("error", error);
        return await [];
    }
}

