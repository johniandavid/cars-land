const constants = require("./constants")
const API_KEY = constants.API_KEY
const PORT = constants.SERVER_PORT

const pool = require("./database");
const express = require("express");
const cors = require('cors');

const app = express();

app.use(express.json())
app.use(cors());

//ROUTES

//get all cars

app.get(`/${API_KEY}/v1/cars`, async (req,res) => {

    var responseBody = ""
    var count = 0
    var limit = constants.DEFAULT_LIMIT
    var next = 0

    const queryStr = req.query

    queryStr['limit'] !== undefined && parseInt(queryStr['limit']) < limit ? limit = parseInt(queryStr['limit'])  : {}
    queryStr['next'] != undefined ? next = parseInt(queryStr['next']) : {}

    try{
        const query = `SELECT * FROM model, car WHERE model.modelid = car.modelid AND car.carid > ${next} ORDER BY car.carid ASC LIMIT ${limit}`

        const allCars = await pool.query(query)
        const info = await pool.query('SELECT COUNT(*) FROM car')

        count = parseInt(info.rows[0]["count"])
        responseBody = allCars.rows;

    } catch(err) {
        console.log(err);
        responseBody = err
    }

    const data = {
        headers: {
            "content-type" : "application/json",
            "limit" : limit,
            "next" : next + limit < count ? next + limit : null,
            "total-resource-count" : count
        },
        statusCode : res.statusCode,
        body : responseBody
    }

    res.json(data)

});


app.get(`/${API_KEY}/v1/cars/search`, async (req,res) => {

    var responseBody = ""
    var count = 0
    var lastID = 0
    var limit = constants.DEFAULT_LIMIT
    var next = 0

    const queryStr = req.query

    var year = queryStr['year']
    var make = queryStr['make']
    var model = queryStr['model']
    var color = queryStr['color']

    var minPrice = queryStr['minPrice']
    var maxPrice = queryStr['maxPrice']

    var minMileage  = queryStr['minMileage']
    var maxMileage = queryStr['maxMileage']


    queryStr['limit'] !== undefined && queryStr['limit'] < limit ? limit = parseInt(queryStr['limit']) : {}
    queryStr['next'] != undefined ? next = parseInt(queryStr['next']) : {}

    year !== undefined ? yearStr = `AND model.year = '${year}'` : yearStr =  "";
    make !== undefined ? makeStr = `AND model.make = '${make}'` : makeStr =  "";
    model !== undefined ? modelStr = `AND model.model = '${model}'` : modelStr =  "";
    color !== undefined ? colorStr = `AND car.color = '${color}'` : colorStr = ""

    minPrice !== undefined && maxPrice !== undefined  ? priceStr = `AND price BETWEEN ${minPrice} AND ${maxPrice}` : priceStr = "";
    minMileage !== undefined && maxMileage !== undefined  ? mileageStr = `AND mileage BETWEEN ${minMileage} AND ${maxMileage}` : mileageStr = "";

    try{
        const query = `SELECT * FROM model, car WHERE model.modelid = car.modelid ${yearStr}${makeStr}${modelStr}${priceStr}${mileageStr}${colorStr}`
        const allCars = await pool.query(`${query} AND car.carid > ${next} ORDER BY car.carid ASC LIMIT ${limit}`)
        const queryInfo = await pool.query(query)

        count = queryInfo.rowCount
        responseBody = allCars.rows;

        queryInfo.rows.length ? lastID = queryInfo.rows[queryInfo.rows.length - 1]["carid"] : {}
        responseBody.length ? next = responseBody[responseBody.length - 1]["carid"] : {}

    } catch(err) {
        console.log(err);
        responseBody = "Error: could not query cars"
    }

    const data = {
        headers: {
            "content-type" : "application/json",
            "limit" : limit,
            "next" : next < lastID ? next : null,
            "total-resource-count" : count,
            "lastID" : next < lastID ? lastID : undefined,
            "query" : {
                "year" : year,
                "make" : make,
                "model" : model,
                "color" : color,
                "minPrice" : minPrice,
                "maxPrice" : maxPrice,
                "minMileage" : minMileage,
                "maxMileage" : maxMileage
            }
        },
        statusCode : res.statusCode,
        body : responseBody
    }

    res.json(data)

});


//get all car models

app.get(`/${API_KEY}/v1/models`, async (req,res) => {

    var responseBody = ""
    var count = 0

    try{
        const allModels = await pool.query("SELECT * FROM model");
        responseBody = allModels.rows;
        count = allModels.rowCount

    } catch(err) {
        console.log(err.message)
        responseBody = "Error: Could not get models"
    }

    const data = {
        headers : {
           "content-type" : "application/json",
            "total-resource-count" : count
        },
        statusCode : res.statusCode,
        body : responseBody
    }

    res.json(data)

});


//get a car

app.get(`/${API_KEY}/v1/cars/:carid`, async (req,res) => {

    var responseBody = ""

    try{
        const params = req.params;
        const carid = params['carid'];

        const car = await pool.query(`SELECT * FROM model, car WHERE model.modelid = car.modelid AND carid = '${carid}'`)

        responseBody = car.rows

    } catch (err) {
        console.log(err.message);
        responseBody = `Error: Could not get car with carid: ${carid}`
    }

    const data = {
        headers: {
            "content-type" : "application/json"
        },
        statusCode : res.statusCode,
        body : responseBody
    }

    res.json(data)

});


//create a car

app.post(`/${API_KEY}/v1/cars`, async (req,res) => {

    var responseBody = ""

    try{
       const { carid, modelid, color, price, mileage, image1, image2, image3 } = req.body;

       await pool.query(`INSERT INTO car (carid, modelid, color, price, mileage, image1, image2, image3) 
       VALUES('${carid}', '${modelid}','${color}', '${price}', '${mileage}', '${image1}', '${image2}', '${image3}')`);

       responseBody = `Car with ${modelid} was created!`

    } catch(err) {
       console.log(err.message);
       responseBody = `Error: Car with ${modelid} was not created!`
    }

    const data = {
        headers : {
            "content-type" : "application/json"
        },
        body : responseBody
    }

    res.json(data)
});


//create a car model

app.post(`/${API_KEY}/v1/models`, async (req,res) => {

    var responseBody = "";

    try{
        const { modelid, year, make, model, image, features, specifications } = req.body;

        await pool.query(`INSERT INTO model (modelid, year, make, model, image, features, specifications) 
        VALUES('${modelid}','${year}','${make}','${model}','${image}','${features}','${specifications}')`);

        responseBody = `Model: ${year} ${make} ${model} was sucessfully created!`

    } catch(err) {
        console.log(err.message);
        responseBody = `Error: ${year} ${make} ${model} was not created! => ${err}`
    }

    const data = {
        headers : {
            "content-type" : "application/json"
        },
        body : responseBody
    }

    res.json(data)
});

//update a car

app.put(`/${API_KEY}/v1/cars/:carid/:column`, async (req,res) => {

    var responseBody = ""

    try{
        const params = req.params;
        const carid = params['carid'];
        const column = params['column'];
        const { updatedValue } = req.body;

        console.log(params);

        await pool.query(`UPDATE car SET ${column} = '${updatedValue}' WHERE carid = '${carid}'`);
        responseBody = `Car with carid: ${carid} was sucessfully updated!`


    } catch(err) {
        console.log(err.message);
        responseBody = `Error: Car with carid: ${carid} was not updated!`
    }

     const data = {
        headers : {
            "content-type" : "application/json",
            "updated-column" : column,
            "updated-value" : updatedValue
        },
        body : responseBody
    }

    res.json(data)

});


//update a car model

app.put(`/${API_KEY}/v1/models/:modelid/:column`, async (req,res) => {

    var responseBody = ""

    try{
        const params = req.params;
        const modelid = params['modelid'];
        const column = params['column'];
        const { updatedValue } = req.body;

        await pool.query(`UPDATE model SET ${column} = '${updatedValue}' WHERE modelid = '${modelid}'`);

        responseBody = `Model with modelid: ${modelid} was sucessfully updated!`

    } catch(err) {
        console.log(err.message);
        responseBody = `Error: Model with modelid: ${modelid} was not updated!`
    }

    const data = {
        headers : {
            "content-type" : "application/json",
            "updated-column" : column,
            "updated-value" : columnName
        },
        body : responseBody
    }

    res.json(data)

});


//delete a car

app.delete(`/${API_KEY}/v1/cars/:carid`, async (req,res) => {

    var responseBody = "";

    try{
        const params = req.params;
        const carid = params['carid'];

        await pool.query(`DELETE FROM car WHERE carid = '${carid}'`);

        responseBody = `Car with carid: ${carid} was sucessfully deleted!`

    } catch(err) {
        console.log(err.message)
        responseBody = `Error: Car with carid: ${carid} was not deleted!`
    }

    const data = {
        headers : {
            "content-type" : "application/json"
        },
        body : responseBody
    }

    res.json(data)

});

//delete a car model

app.delete(`/${API_KEY}/v1/models/:modelid`, async (req,res) => {

    var responseBody = "";

    try{

        const params = req.params;
        const modelid = params['modelid'];
        await pool.query(`DELETE FROM model WHERE modelid = '${modelid}'`)

        responseBody = `Model with modelid: ${modelid} was sucessfully deleted!`


    } catch(err) {
        console.log(err.message)
        responseBody = `Error: Model of modelid: ${modelid} was not deleted!`
    }
     const data = {
        headers : {
            "content-type" : "application/json"
        },
        body : responseBody
    }

    res.json(data)
});


app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
})
