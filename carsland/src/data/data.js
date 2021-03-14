import Axios from 'axios'
import { API_INVOKE_URL, AUTH_TOKEN} from "../constants";

export async function getAllCars() {

    try {
        // fetch data from a url endpoint
        const response = await Axios.get(`${API_INVOKE_URL}/${AUTH_TOKEN}/v1/cars`);
        return await response.data;

    } catch(error) {
        console.log("error", error);
        return error
    }

}

export async function getCar(id) {

    try {
        // fetch data from a url endpoint
        const response = await Axios.get(`${API_INVOKE_URL}/${AUTH_TOKEN}/v1/cars/${id}`);
        return await response.data;

    } catch(error) {
        console.log("error", error);
        return error
    }
}

