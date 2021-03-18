import Axios from 'axios'
import { API_INVOKE_URL, AUTH_TOKEN} from "../constants";

export async function getAllCars() {
    try {
        const response = await Axios.get(`${API_INVOKE_URL}/${AUTH_TOKEN}/v1/cars`);
        return await response.data;

    } catch(error) {
        console.log("error", error);
        return error
    }

}

export async function getCar(id) {
    try {
        console.log(id)
        const url = `${API_INVOKE_URL}/${AUTH_TOKEN}/v1/cars/${id}`
        console.log(url)
        const response = await Axios.get(url);
        return await response.data;

    } catch(error) {
        console.log("error", error);
        return error
    }
}

export async function postCar() {

}

export async function postCarModel() {

}


export async function deleteCar(id) {

}


export async function deleteCarModel(id) {

}

