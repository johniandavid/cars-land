
const express = require("express");
const app = express();
const PORT = 5000;
const pool = require("./database");
var cors = require('cors');

app.use(express.json())
app.use(cors());

const API_KEY = "VK2GxhCZ9KeP1viVpHcG"

//ROUTES

//get all cars

app.get(`/${API_KEY}/v1/cars`, async (req,res) => {

    try{
        const allCars = await pool.query('SELECT car.carid, modelCar.year, modelCar.make, modelCar.model, modelCar.color, modelCar.image, car.price, car.mileage FROM modelCar, car WHERE modelCar.modelid = car.modelid;')

        res.json(allCars.rows);

    } catch(err) {
        console.log(err);
    }
});

//get all car models

app.get(`/${API_KEY}/v1/models`, async (req,res) => {
    try{

        const allCarModels = await pool.query("SELECT * FROM modelCar");
        res.json(allCarModels.rows);

    } catch(err) {
        console.log(err.message)
    }

});


//get a car

app.get(`/${API_KEY}/v1/cars/:carid`, async (req,res) => {

    try{
        const params = req.params;
        const carid = params['carid'];

        const car = await pool.query(`SELECT * FROM modelCar, car WHERE modelCar.modelid = car.modelid AND carid = '${carid}'`)

        res.json(car.rows)

    } catch (err) {
        console.log(err.message);
    }
});


//create a car

app.post(`/${API_KEY}/v1/cars`, async (req,res) => {
   try{
       const { carid, modelid, price, mileage } = req.body;

       const newCar = await pool.query(`INSERT INTO car (carid, modelid, price, mileage) 
       VALUES('${carid}','${modelid}', '${price}', '${mileage}')`);

       res.json(newCar);

   } catch(err) {
       console.log(err.message);
   }
});


//create a car model

app.post(`/${API_KEY}/v1/models`, async (req,res) => {

    try{
        const { modelid, year, make, model, color, image, image1, image2, image3, feature, specification } = req.body;

        const newCarModel = await pool.query(`INSERT INTO modelCar (modelid, year, make, model, color, image, image1, image2, image3, feature, specification) 
        VALUES('${modelid}','${year}','${make}','${model}','${color}','${image}','${image1}','${image2}','${image3}','${feature}','${specification}')`);

        res.json(newCarModel);

    } catch(err) {
        console.log(err.message);
    }

});

//update a car

app.put(`/${API_KEY}/v1/cars/:carid/:column`, async (req,res) => {

    try{
        const params = req.params;
        const carid = params['carid'];
        const column = params['column'];
        const { updatedValue } = req.body;

        console.log(params);

        await pool.query(`UPDATE car SET ${column} = '${updatedValue}' WHERE carid = '${carid}'`);

        const car = await pool.query(`SELECT * FROM car WHERE carid = '${carid}'`);

        res.json(car.rows);

    } catch(err) {
        console.log(err.message);
    }
});


//update a car model

app.put(`/${API_KEY}/v1/models/:modelid/:column`, async (req,res) => {

    try{
        const params = req.params;
        const modelid = params['modelid'];
        const column = params['column'];
        const { columnName } = req.body;

        await pool.query(`UPDATE modelCar SET ${column} = '${columnName}' WHERE modelid = '${modelid}'`);

        const carModel = await pool.query(`SELECT * FROM modelCar WHERE modelid = '${modelid}'`);

        res.json(carModel.rows);

    } catch(err) {
        console.log(err.message);
    }
});


//delete a car

app.delete(`/${API_KEY}/v1/cars/:carid`, async (req,res) => {

    try{
        const params = req.params;
        const carid = params['carid'];

        await pool.query(`DELETE FROM car WHERE carid = '${carid}'`);
        const allCar = await pool.query('SELECT * FROM car');

        res.json(allCar.rows);

    } catch(err) {
        console.log(err.message)
    }
});

//delete a car model

app.delete(`/${API_KEY}/v1/models/:modelid`, async (req,res) => {

    try{

        const params = req.params;
        const modelid = params['modelid'];
        await pool.query(`DELETE FROM modelCar WHERE modelid = '${modelid}'`)

        const allCarModels = await pool.query("SELECT * FROM modelCar");
        res.json(allCarModels.rows);

    } catch(err) {
        console.log(err.message)
    }
});


app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    })
