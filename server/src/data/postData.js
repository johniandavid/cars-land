const data = require("./data")
const { v4: uuidv4 } = require('uuid');
const constants = require("../constants")
const fetch = require('node-fetch');

function postModel() {
    data["models"].forEach(async (model,index) => {
        const payload = {
            modelid : modelids[index],
            year : model.year,
            make : model.make,
            model : model.model,
            image : model.image,
            features : model.features,
            specifications : model.specifications
        }

        const settings = {
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify(payload)
        };

        const API_ENDPOINT = `${constants.INVOKE_URL}/${constants.API_KEY}/v1/models`
        try {
            const response = await fetch(API_ENDPOINT, settings);
            const data = await response.json()
            console.log(data)

        } catch (e) {
            console.log(e)
        }

    })
}

function postCar(){
    const modelids = Object.values(data["modelids"])
    data["cars"].forEach(async (car,index) => {
        const payload = {
            carid : index + 1,
            modelid : modelids[index],
            color : car.color,
            price : car.price,
            image1 : car.image1,
            image2 : car.image2,
            image3 : car.image3,
            mileage : car.mileage
        }

        const settings = {
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify(payload)
        }

        try {
            console.log(payload)
            const API_ENDPOINT = `${constants.INVOKE_URL}/${constants.API_KEY}/v1/cars`
            const response = await fetch(API_ENDPOINT,settings)

            const data = await response.json()
            console.log(data)

        } catch(e) {
            console.log(e)
        }
    })
}

postCar()
