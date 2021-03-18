const initialState = {
    cars: [
        {
            carid:"1 ",
            year:"2008",
            make:"Nissan",
            model:"Altima S",
            color:"Black",
            image:"altima.jpg",
            price:"11,000",
            mileage:"70000"
        },
    ],
    counter : 0
}

function cartReducer(state = initialState, action) {
    switch(action.type) {
        case 'ADD': {
            const cars = state.cars;
            const count = state.counter;

            const new_car = cars.concat([action.payload])

            return {
                cars : new_car,
                counter: count + 1
            }
        }
        case 'DELETE' : {
            return {}
        }
        default: {
            return state;
        }
    }
}
export default cartReducer;

