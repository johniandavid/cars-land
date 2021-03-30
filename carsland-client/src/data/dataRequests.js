import Axios from 'axios'
import { API_INVOKE_URL, AUTH_TOKEN} from "../constants";

export async function getCars(params) {

    let query = ""
    let res = {}

    params['limit'] !== undefined ? query += `limit=${params['limit']}&` : query += ""

    try {
        var response = await Axios.get(`${API_INVOKE_URL}/${AUTH_TOKEN}/v1/cars?${query}`);
        var next = response.data.headers['next']

        var index = 0
        response.status === 200 ? res[index] = response.data.body : res[index] = []

        while(next != null){
            index += 1
            response = await Axios.get(`${API_INVOKE_URL}/${AUTH_TOKEN}/v1/cars?${query}&next=${next}`);
            response.status === 200 ? res[index] = response.data.body : res[index] = []
            next = response.data.headers['next']
        }

    } catch(error) {
        console.log("error", error);
    }

    return res
}

export async function getFilteredCars(params) {

    let query = ""
    let res = {}

    params['limit'] !== undefined ? query += `limit=${params['limit']}&` : query += ""
    params['year'] !== undefined ? query += `year=${params['year']}&` : query += ""
    params['make'] !== undefined ? query += `make=${params['make']}&` : query += ""
    params['model'] !== undefined ? query += `model=${params['model']}&` : query += ""
    params['color'] !== undefined ? query += `color=${params['color']}&` : query += ""

    params['minPrice'] !== undefined ? query += `minPrice=${params['minPrice']}&` : query += ""
    params['maxPrice'] !== undefined ? query += `maxPrice=${params['maxPrice']}&` : query += ""

    params['minMileage'] !== undefined ? query += `minMileage=${params['minMileage']}&` : query += ""
    params['maxMileage'] !== undefined ? query += `maxMileage=${params['maxMileage']}&` : query += ""

   try {
        var response = await Axios.get(`${API_INVOKE_URL}/${AUTH_TOKEN}/v1/cars/search?${query}`);
        var next = response.data.headers['next']

        var index = 0
        response.status === 200 ? res[index] = response.data.body : res[index] = []

        while(next != null){
            index += 1
            response = await Axios.get(`${API_INVOKE_URL}/${AUTH_TOKEN}/v1/cars?${query}&next=${next}`);
            response.status === 200 ? res[index] = response.data.body : res[index] = []
            next = response.data.headers['next']
        }

    } catch(error) {
        console.log("error", error);
    }

    return res
}

export async function getCar(id) {
    try {
        const response = await Axios.get(`${API_INVOKE_URL}/${AUTH_TOKEN}/v1/cars/${id}`);
        return await response.data.body;

    } catch(error) {
        console.log("error", error);
        return error
    }
}
