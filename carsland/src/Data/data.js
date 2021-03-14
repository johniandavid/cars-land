import Axios from 'axios'
import {API_INVOKE_URL, API_KEY} from "../constants";

export async function getAllCars() {

    try {
        // fetch Data from a url endpoint
        const response = await Axios.get(`${API_INVOKE_URL}/${API_KEY}/v1/cars`);
        return await response.data;

    } catch(error) {
        console.log("error", error);
        return await [];
    }

}

export async function getCar(id) {

    try {
        // fetch Data from a url endpoint
        const response = await Axios.get(`${API_INVOKE_URL}/${API_KEY}/v1/cars/${id}`);
        return await response.data;

    } catch(error) {
        console.log("error", error);
        return await [];
    }
}

