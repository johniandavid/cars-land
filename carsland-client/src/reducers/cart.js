
const initialState = {
    cars: [],
    counter : 0
}

function cartReducer(state = initialState, action) {
    switch(action.type) {

        case 'ADD':
            const new_car = state.cars.concat(action.payload)

            console.log(new_car)

            return {
                cars : new_car,
                counter: state.counter + 1
            }

        case 'DELETE' :
            return {}

        default:
            return state;
    }
}
export default cartReducer;

