import Axios from 'axios'


const BASE_URL = 'http://localhost:5000'
const API_ENDPOINT = '/cars';

export async function getAllCars() {

    try {
        // fetch data from a url endpoint
        const response = await Axios.get(`${BASE_URL}${API_ENDPOINT}`);
        return await response.data;

    } catch(error) {
        console.log("error", error);
    }


}

